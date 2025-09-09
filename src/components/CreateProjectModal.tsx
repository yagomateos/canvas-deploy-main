import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GitBranch, Loader2 } from 'lucide-react';

interface CreateProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateProject: (project: { name: string; repository: string; framework: string }) => void;
}

const CreateProjectModal = ({ open, onOpenChange, onCreateProject }: CreateProjectModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    repository: '',
    framework: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const frameworks = [
    { value: 'nextjs', label: 'Next.js' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'static', label: 'HTML/CSS/JS' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.repository || !formData.framework) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onCreateProject(formData);
    setIsLoading(false);
    setFormData({ name: '', repository: '', framework: '' });
    onOpenChange(false);
  };

  const extractRepoName = (url: string) => {
    try {
      const match = url.match(/\/([^\/]+)\.git$/) || url.match(/\/([^\/]+)\/?$/);
      return match ? match[1] : '';
    } catch {
      return '';
    }
  };

  const handleRepositoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      repository: value,
      name: prev.name || extractRepoName(value)
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Crear nuevo proyecto</DialogTitle>
          <DialogDescription>
            Conecta tu repositorio de GitHub para crear un nuevo proyecto de despliegue.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="repository">URL del repositorio</Label>
            <div className="relative">
              <GitBranch className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="repository"
                placeholder="https://github.com/usuario/proyecto.git"
                value={formData.repository}
                onChange={(e) => handleRepositoryChange(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nombre del proyecto</Label>
            <Input
              id="name"
              placeholder="mi-proyecto"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="framework">Framework detectado</Label>
            <Select
              value={formData.framework}
              onValueChange={(value) => setFormData(prev => ({ ...prev, framework: value }))}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un framework" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creando...
                </>
              ) : (
                'Crear proyecto'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;