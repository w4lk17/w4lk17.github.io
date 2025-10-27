import { cn } from '../lib/utils'
import { ModeToggle } from './themes/mode-toggle'

const Header = () => {
	return (
		<header className={cn('sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60')}>
			<div className='container'>
				<nav className='flex items-center justify-between py-4'>
					{/* Logo or Name */}
					{/* TODO: chnge this to a link */}
					<button
						className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
						onClick={() => { }}
					>
						Walker
					</button>
					{/* End Logo or Name */}
					{/* Navigation links */}
					<ul className="hidden md:flex items-center gap-6 text-sm">
						<li><a href="#about">About</a></li>
						<li><a href="#experience">Experience</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#contact">Contact</a></li>
						{/* Resume CV button */}
						<li><a href="#" rel="noopener noreferrer">Resume CV</a></li>
						{/* Theme toggle */}
						<li><ModeToggle /></li>
					</ul>
				</nav>
			</div>

		</header>
	)
}

export default Header