import Link from "next/link";
import Image from "next/image";
import { Bot, Github, Linkedin, Instagram, Mail, MapPin, Youtube } from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.679 0-3.325-.453-4.766-1.309l-.342-.203-3.543.929.946-3.454-.223-.354c-.94-1.497-1.44-3.233-1.44-5.024 0-5.26 4.281-9.541 9.542-9.541 2.548 0 4.944.992 6.745 2.793a9.489 9.489 0 0 1 2.793 6.748c0 5.262-4.283 9.541-9.544 9.541m11.12-14.332C21.492 5.145 18.29 3.101 14.828 3.101c-6.622 0-12.012 5.391-12.012 12.012 0 2.115.55 4.18 1.594 6.009l-1.694 6.188 6.33-1.661c1.764.961 3.751 1.47 5.776 1.47 6.625 0 12.016-5.391 12.016-12.012 0-3.205-1.248-6.219-3.513-8.484" />
    </svg>
);

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background text-foreground overflow-hidden">
            {/* Top Section with Pattern */}
            <div className="relative border-b border-white/5">
                {/* Wavy Lines SVG Pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-30"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='40' viewBox='0 0 160 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 40 0 80 20 T 160 20' fill='none' stroke='%23334155' stroke-width='2'/%3E%3Cpath d='M0 30 Q 40 10 80 30 T 160 30' fill='none' stroke='%23334155' stroke-width='1.5'/%3E%3Cpath d='M0 10 Q 40 -10 80 10 T 160 10' fill='none' stroke='%23334155' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '160px 40px',
                        backgroundRepeat: 'repeat'
                    }}
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

                <div className="container relative z-10 flex flex-col gap-8 py-8 md:py-12 px-4 md:px-8 max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex flex-col gap-2">
                            <Link className="flex items-center space-x-2" href="/">
                                <Image
                                    src="/roboiitk/logo.png"
                                    alt="Logo"
                                    width={300}
                                    height={300}
                                    quality={100}
                                    className="h-10 w-auto object-contain"
                                />
                            </Link>
                            <p className="text-lg text-muted-foreground max-w-sm">
                                #HappyRoboting
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl text-foreground">Contact</h3>
                            <div className="flex items-center gap-4 text-lg text-muted-foreground">
                                <Mail className="h-6 w-6 text-primary" />
                                <a href="mailto:roboticsclubiitkanpur@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">roboticsclubiitkanpur@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-lg text-muted-foreground">
                                <MapPin className="h-6 w-6 text-primary" />
                                <span>A3 Common Room, Hall 12, IIT Kanpur</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold text-xl text-foreground">Follow Us</h3>
                            <div className="grid grid-cols-3 gap-6 max-w-fit">
                                <Link href="https://github.com/RoboticsClubIITK" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Github className="h-8 w-8" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link href="https://www.linkedin.com/company/robotics-club-iit-kanpur/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Linkedin className="h-8 w-8" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link href="https://www.instagram.com/roboticsclub_iitk/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Instagram className="h-8 w-8" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link href="https://www.youtube.com/c/RoboticsClubIITKanpur" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <Youtube className="h-8 w-8" />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                                <Link href="https://discord.gg/Znys39bX2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <DiscordIcon className="h-8 w-8" />
                                    <span className="sr-only">Discord</span>
                                </Link>
                                <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform hover:scale-110">
                                    <WhatsAppIcon className="h-8 w-8" />
                                    <span className="sr-only">WhatsApp</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar (No Pattern) */}
            <div className="bg-background/80 py-8">
                <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Robotics Club IIT Kanpur. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
