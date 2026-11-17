import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-sm font-bold text-[#929292] uppercase tracking-widest">
          ERROR 404
        </span>
        <h1 className="heading-section">Page Not Found</h1>
        <p className="text-xs text-[#66686A] leading-relaxed">
          The requested page or internal demonstration route does not exist or may have been relocated.
        </p>
        <div className="pt-4 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-nexus-sm border border-[#DCDAD4] text-[#17191B] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF9F6] transition-colors"
          >
            <span>Explore Demos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

