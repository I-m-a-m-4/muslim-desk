import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Menu, 
  MapPin, 
  BookOpen, 
  Moon, 
  Heart, 
  Globe2, 
  Star, 
  Download, 
  CheckCircle2, 
  ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-500/30">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Moon className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-emerald-950">Muslim Desk</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Features</Link>
            <Link href="#premium" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Premium</Link>
            <Link href="#quran" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Quran</Link>
            <Link href="#prayer-times" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Prayer Times</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden text-slate-600">
              <Menu className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6">
              Get App
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950 text-white pt-24 pb-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 border border-emerald-700/50 mb-8 backdrop-blur-sm">
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-emerald-50">190M+ Downloads Worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance leading-tight">
            Your faith, <br/><span className="text-emerald-300">always with you.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl text-balance">
            The most comprehensive Islamic app providing accurate prayer times, adhan, full Quran with translations, Qibla locator, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-emerald-950 hover:bg-emerald-50 hover:text-emerald-900 font-semibold w-full sm:w-auto shadow-xl shadow-emerald-950/20">
              Open Web App
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-emerald-700/50 hover:bg-emerald-800/50 text-white font-semibold w-full sm:w-auto bg-transparent">
              Download Desktop
            </Button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center px-4">
              <Download className="h-8 w-8 text-emerald-500 mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">190M+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Downloads</div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Globe2 className="h-8 w-8 text-emerald-500 mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">190+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Countries</div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Star className="h-8 w-8 text-emerald-500 mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">4.7</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">App Store Rating</div>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Heart className="h-8 w-8 text-emerald-500 mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">2010</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything for your daily Ibadah</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Built for every moment of Muslim life, from waking up to sleeping, providing you with all the spiritual tools you need.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Holy Quran</h3>
                <p className="text-slate-600 mb-6">Read the Quran in beautiful scripts, listen to various reciters, and understand with multiple translations.</p>
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                  Explore Quran <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Menu className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Accurate Prayer Times</h3>
                <p className="text-slate-600 mb-6">Get precise prayer times based on your current location with customizable Adhan notifications.</p>
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:text-amber-700">
                  View Times <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden group">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Qibla Compass</h3>
                <p className="text-slate-600 mb-6">Find the accurate direction to the Kaaba in Mecca, no matter where you are in the world.</p>
                <Link href="#" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  Find Qibla <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PREMIUM SECTION */}
      <section id="premium" className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-bold tracking-wider uppercase mb-6 border border-amber-500/30">
                Premium
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">The full Muslim Desk experience, unlocked.</h2>
              <p className="text-xl text-emerald-100/80 mb-8 max-w-lg">
                Upgrade to Premium to remove ads, download audio for offline listening, and access exclusive themes and reciters.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-emerald-50">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                  <span className="text-lg">Zero advertisements, completely distraction-free</span>
                </li>
                <li className="flex items-center gap-3 text-emerald-50">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                  <span className="text-lg">Offline mode for Quran and recitations</span>
                </li>
                <li className="flex items-center gap-3 text-emerald-50">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
                  <span className="text-lg">Premium UI themes and customized widgets</span>
                </li>
              </ul>
              
              <Button size="lg" className="h-14 px-8 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold shadow-lg shadow-amber-500/20">
                Unlock Premium Now
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-[2.5rem] border-8 border-emerald-800/50 shadow-2xl overflow-hidden relative flex flex-col p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-8 w-8 rounded-full bg-emerald-700 animate-pulse"></div>
                  <div className="h-4 w-24 rounded-full bg-emerald-700/50"></div>
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 border border-emerald-700/50 mb-6 p-6 flex flex-col justify-end">
                   <div className="h-6 w-3/4 rounded bg-white/20 mb-3"></div>
                   <div className="h-4 w-1/2 rounded bg-white/10"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-16 rounded-xl bg-emerald-800/50 flex items-center px-4 gap-4">
                    <div className="h-10 w-10 rounded bg-emerald-700"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-1/2 rounded bg-emerald-600"></div>
                      <div className="h-2 w-1/4 rounded bg-emerald-700"></div>
                    </div>
                  </div>
                  <div className="h-16 rounded-xl bg-emerald-800/50 flex items-center px-4 gap-4">
                    <div className="h-10 w-10 rounded bg-emerald-700"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-2/3 rounded bg-emerald-600"></div>
                      <div className="h-2 w-1/3 rounded bg-emerald-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <Moon className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Muslim Desk</span>
              </div>
              <p className="max-w-sm text-slate-400 leading-relaxed mb-6">
                The world's most trusted Islamic app, providing comprehensive tools for everyday worship.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Features</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Prayer Times</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">The Holy Quran</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Qibla Compass</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Islamic Calendar</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; 2026 Muslim Desk. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-emerald-500 fill-emerald-500" />
              <span>for the Ummah</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
