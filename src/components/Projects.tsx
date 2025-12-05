import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import * as Dialog from '@radix-ui/react-dialog';
import { projects } from "../data/projects";

const ProjectsSection: React.FC = () => {
	return (
		<section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 -z-10">
				<motion.div
					className="absolute top-20 right-20 w-48 h-48 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
					animate={{
						x: [0, 30, 0],
						y: [0, -30, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute bottom-10 left-10 w-32 h-32 bg-linear-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-xl"
					animate={{
						x: [0, -20, 0],
						y: [0, 20, 0],
						scale: [1, 0.8, 1]
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 3
					}}
				/>
			</div>

			<div className="container">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
						Projects
					</h2>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
					{projects.map((proj, idx) => (
						<motion.div
							key={idx}
							className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							whileHover={{
								scale: 1.02,
								boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
							}}
						>
							{/* Floating accent */}
							<motion.div
								className="absolute -top-3 -right-3 w-6 h-6 bg-linear-to-r from-primary to-purple-500 rounded-full opacity-70"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.7, 0.9, 0.7]
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>

							{/* Glow effect on hover */}
							<motion.div
								className="absolute inset-0 bg-linear-to-r from-primary/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
								animate={{
									scale: [1, 1.05, 1],
									opacity: [0, 0.1, 0]
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>

							<div className="relative z-10">
								<div className="flex items-start justify-between gap-4 mb-4">
									{/* Title */}
									<div>
										<motion.h3
											className="text-xl font-semibold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
											whileHover={{ scale: 1.02 }}
										>
											{proj.title}
										</motion.h3>
										{/* Period */}
										<p className="mt-1 text-xs text-muted-foreground">
											<strong>Period:</strong> {proj.period}
										</p>
									</div>
									{/* Details Dialog */}
									<Dialog.Root>
										<Dialog.Trigger asChild>
											<motion.button
												className="inline-flex h-8 items-center rounded-md border border-border/50 px-3 text-xs bg-linear-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105"
												aria-label={`View details for ${proj.title}`}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												Details
											</motion.button>
										</Dialog.Trigger>
										<Dialog.Portal>
											<Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
											<Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/50 bg-card/95 backdrop-blur-md p-6 shadow-2xl focus:outline-none">
												<Dialog.Title className="text-lg font-semibold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
													{proj.title}
												</Dialog.Title>
												<Dialog.Description className="text-sm text-muted-foreground mt-1">
													{proj.period}
												</Dialog.Description>
												<ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
													{proj.bullets.map((b, i) => (
														<motion.li
															key={i}
															initial={{ opacity: 0, x: -10 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: i * 0.1 }}
														>
															{b}
														</motion.li>
													))}
												</ul>
												<div className="mt-6 flex gap-3">
													{proj.links.code && (
														<motion.a
															href={proj.links.code}
															className="inline-flex items-center gap-2 rounded-md border border-border/50 px-4 py-2 text-sm bg-linear-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
															target="_blank"
															rel="noopener noreferrer"
															whileHover={{ scale: 1.05 }}
															whileTap={{ scale: 0.95 }}
														>
															<FaGithub /> View Code
														</motion.a>
													)}
													{proj.links.demo && (
														<motion.a
															href={proj.links.demo}
															className="inline-flex items-center gap-2 rounded-md border border-border/50 px-4 py-2 text-sm bg-linear-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
															target="_blank"
															rel="noopener noreferrer"
															whileHover={{ scale: 1.05 }}
															whileTap={{ scale: 0.95 }}
														>
															<FaExternalLinkAlt /> Live Demo
														</motion.a>
													)}
												</div>
												<Dialog.Close asChild>
													<motion.button
														className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/50 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-300"
														aria-label="Close dialog"
														whileHover={{ scale: 1.1, rotate: 90 }}
														whileTap={{ scale: 0.9 }}
													>
														×
													</motion.button>
												</Dialog.Close>
											</Dialog.Content>
										</Dialog.Portal>
									</Dialog.Root>
								</div>
								{/*features list */}
								<ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
									{proj.bullets.slice(0, 2).map((b, i) => (
										<motion.li
											key={i}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: (idx * 0.1) + (i * 0.1) }}
										>
											{b}
										</motion.li>
									))}
								</ul>
								{/* Tags */}
								{proj.tags && (
									<div className="flex flex-wrap gap-2 mt-4">
										{proj.tags.map((t, i) => (
											<motion.span
												key={i}
												className="inline-flex items-center rounded-md border border-border/50 px-2 py-1 text-[11px] text-muted-foreground bg-linear-to-r from-muted/30 to-muted/50"
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												viewport={{ once: true }}
												transition={{ delay: (idx * 0.1) + (i * 0.05) }}
												whileHover={{ scale: 1.05 }}
											>
												{t}
											</motion.span>
										))}
									</div>
								)}
								{/* links buttons */}
								<div className="flex gap-3 mt-4">
									{proj.links.code && (
										<motion.a
											href={proj.links.code}
											className="inline-flex items-center gap-2 rounded-md border border-border/50 px-3 py-2 text-sm bg-linear-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<FaGithub /> View Code
										</motion.a>
									)}
									{proj.links.demo && (
										<motion.a
											href={proj.links.demo}
											className="inline-flex items-center gap-2 rounded-md border border-border/50 px-3 py-2 text-sm bg-linear-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300"
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<FaExternalLinkAlt /> Live Demo
										</motion.a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;