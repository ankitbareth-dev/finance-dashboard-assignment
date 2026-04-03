import { Moon, ChevronDown, User } from "lucide-react";

function Header() {
  return (
    <header className="h-full w-full bg-panel border-b border-ghost-border flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-on-surface tracking-tight">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button
          className="p-2 rounded-md text-on-surface-variant hover:bg-panel-muted hover:text-on-surface transition-colors"
          aria-label="Toggle Theme"
        >
          <Moon size={20} />
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-ghost-border">
          <span className="text-sm font-medium text-on-surface-variant">
            Admin Mode
          </span>

          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-surface border border-ghost-border flex items-center justify-center overflow-hidden shadow-sm">
              <User size={18} className="text-on-surface-muted" />
            </div>

            <ChevronDown
              size={16}
              className="text-on-surface-muted group-hover:text-on-surface transition-colors"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
