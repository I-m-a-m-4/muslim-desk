import Link from "next/link";
import { Moon } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Moon className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-emerald-950">Muslim Desk</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>These terms and conditions outline the rules and regulations for the use of Muslim Desk's Website, located at muslimdesk.com.</p>
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Muslim Desk if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2>2. License</h2>
          <p>Unless otherwise stated, Muslim Desk and/or its licensors own the intellectual property rights for all material on Muslim Desk. All intellectual property rights are reserved. You may access this from Muslim Desk for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from Muslim Desk</li>
            <li>Sell, rent or sub-license material from Muslim Desk</li>
            <li>Reproduce, duplicate or copy material from Muslim Desk</li>
            <li>Redistribute content from Muslim Desk</li>
          </ul>

          <h2>3. User Comments</h2>
          <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Muslim Desk does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Muslim Desk,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>

          <h2>4. Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
