import { useState } from 'react';
import { cn } from '../lib/utils'
import { ModeToggle } from './themes/mode-toggle'
import { Menu, X } from 'lucide-react';

// shape of a nav link
type NavLink = {
	href: string;
	label: string;
};

// --- nav links ---
const navLinks: NavLink[] = [
	// { href: '#hero', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#education', label: 'Education' },
	// { href: '#certifications', label: 'Certifications' },
	{ href: '#contact', label: 'Contact' },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => { setMenuOpen(!menuOpen); };

	// Function to handle scroll to a specific section
	const scrollToSection = (
		// e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
		sectionId: string
	) => {
		// e.preventDefault(); // Stop the URL from changing and "jumping"
		const id = sectionId.replace('#', ''); // Ensure we just have the ID
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
			setMenuOpen(false); // Close mobile menu on selection
		}
	};

	// Reusable component for the Resume Cv
	const ResumeLink = () => (
		<a
			href="#"
			download="" //cv.pdf
			target="_blank" // Added for user-friendly download
			rel="noopener noreferrer"
			className="inline-flex h-9 items-center justify-center rounded-md border border-border px-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
		>
			Resume
		</a>
	);
	return (
		<header className={cn('sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60')}>
			<div className='container'>
				<nav className='flex items-center justify-between py-4'>
					{/* Logo or Name */}
					{/* TODO: chnge this to a link */}
					<a 
						href='#hero'
						className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
						onClick={() => scrollToSection( 'hero')}
					>
						Walker Gnamavo
					</a>
					{/* End Logo or Name */}
					{/* Navigation links */}
					<ul className="hidden md:flex items-center gap-6 text-sm">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									className="hover:text-primary transition-colors"
									href={link.href}
									onClick={() => scrollToSection( link.href)}
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<ResumeLink />
						</li>
						{/* Theme toggle */}
						<li>
							<ModeToggle />
						</li>
					</ul>
					{/* --- Mobile Menu Toggle --- */}
					<div className="md:hidden flex items-center gap-2">
						<ModeToggle />
						<button
							className="text-xl"
							onClick={toggleMenu}
							aria-label="Toggle menu"
							aria-controls="mobile-menu"
							aria-expanded={menuOpen}
						>
							{menuOpen ? <X/> : <Menu />}
						</button>
					</div>
					{/* --- End Mobile Menu Toggle --- */}
				</nav>
			</div>
			{/* ---Smooth Mobile Menu --- */}
			<div
				id="mobile-menu"
				className={cn(
					'md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ease-in-out',
					// Toggle classes for smooth slide-down animation
					menuOpen
						? 'max-h-96 opacity-100 visibility-visible'
						: 'max-h-0 opacity-0 visibility-hidden'
				)}
			>
				<div className="container py-4">
					<ul className="flex flex-col gap-3 text-sm">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									className="block hover:text-primary"
									href={link.href}
									onClick={() => scrollToSection( link.href)}
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<ResumeLink />
						</li>
					</ul>
				</div>
			</div>
			{/* --- End Smooth Mobile Menu --- */}
		</header>
	)
}

export default Header