import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GitBranch, ShieldCheck, Globe, Server, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      title: "Despliegue desde Git",
      description: "Conecta tu repositorio de GitHub y despliega con un solo push.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "SSL Automático",
      description: "Obtén certificados SSL gratuitos para todos tus dominios, renovados automáticamente.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Dominios Personalizados",
      description: "Añade tus propios dominios fácilmente y gestiona los registros DNS sin complicaciones.",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Infraestructura Escalable",
      description: "Nuestra infraestructura se adapta a tu tráfico, desde un blog hasta una aplicación a gran escala.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex items-center">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">X</span>
              </div>
              <span className="font-bold">XistraCloud</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Características</a>
              <a href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Precios</a>
              <a href="#docs" className="transition-colors hover:text-foreground/80 text-foreground/60">Docs</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Empezar Gratis <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Despliega tu código, no tu paciencia.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              XistraCloud es la plataforma de despliegue que te permite pasar del `git push` a producción en segundos. Concéntrate en tu código, nosotros nos encargamos del resto.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/register">
                <Button size="lg">Empieza a desplegar gratis</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Todo lo que necesitas para triunfar</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Herramientas potentes y sencillas para que tus proyectos cobren vida.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border">
                  {feature.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} XistraCloud. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;