
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Poppins', 'Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				// Base System Colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Primary Brand Colors (Pharma Navy #283593)
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
				},
				
				// Secondary Colors
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				
				// Pharma Brand Colors - Consolidated
				pharma: {
					// Main brand color (same as primary)
					navy: '#283593',
					// Lighter variations
					light: '#E8EAF6',
					lighter: '#F3F4F6',
					// Background variations
					gray: '#F5F5F7',
					// Text color
					dark: '#1A1F2C',
				},
				
				// Status Colors
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: '#10B981',
					foreground: '#FFFFFF',
				},
				warning: {
					DEFAULT: '#F59E0B',
					foreground: '#FFFFFF',
				},
				info: {
					DEFAULT: '#3B82F6',
					foreground: '#FFFFFF',
				},
				
				// Text & Background Utilities
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				
				// Component Colors
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '0.9'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-500px 0'
					},
					'100%': {
						backgroundPosition: '500px 0'
					}
				},
				// New animations
				'slide-up': {
					'0%': {
						transform: 'translateY(40px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-40px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'zoom-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'rotate-in': {
					'0%': {
						transform: 'rotate(-10deg) scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'rotate(0) scale(1)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'70%': {
						transform: 'scale(1.05)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'draw-line': {
					'0%': {
						width: '0%',
						height: '0%'
					},
					'100%': {
						width: '100%',
						height: '100%'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1.5)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.5s ease-out',
				'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'shimmer': 'shimmer 2s infinite linear',
				// New animations
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-down': 'slide-down 0.7s ease-out',
				'zoom-in': 'zoom-in 0.7s ease-out',
				'rotate-in': 'rotate-in 0.7s ease-out',
				'bounce-in': 'bounce-in 0.8s ease-out',
				'draw-line': 'draw-line 1.5s forwards ease-in-out',
				'ripple': 'ripple 1s infinite ease-out'
			},
			backgroundImage: {
				// === PRIMARY BRAND GRADIENTS ===
				'gradient-primary': 'linear-gradient(135deg, #283593 0%, #5C6BC0 100%)',
				'gradient-primary-vertical': 'linear-gradient(to bottom, #283593 0%, #1A237E 100%)',
				'gradient-navy-accent': 'linear-gradient(135deg, #283593 0%, #3949AB 50%, #5C6BC0 100%)',
				
				// === PREMIUM HERO GRADIENTS (Logo-Inspired) ===
				'gradient-hero-premium': 'linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 40%, #9FA8DA 70%, #7986CB 100%)',
				'gradient-hero-reverse': 'linear-gradient(135deg, #7986CB 0%, #9FA8DA 30%, #C5CAE9 60%, #E8EAF6 100%)',
				'gradient-hero-diagonal': 'linear-gradient(120deg, #F5F7FF 0%, #E8EAF6 50%, #C5CAE9 100%)',
				
				// === SECTION BACKGROUNDS (Light & Subtle) ===
				'gradient-section-light': 'linear-gradient(to bottom, #F5F7FF 0%, #EEF1FC 50%, #E8EAF6 100%)',
				'gradient-section-subtle': 'linear-gradient(to bottom, #FAFBFF 0%, #F3F4FB 50%, #E8EAF6 100%)',
				'gradient-section-alternate': 'linear-gradient(135deg, #F8F9FF 0%, #EEF1FC 50%, #E8EAF6 100%)',
				
				// === PREMIUM CARD GRADIENTS ===
				'gradient-card-premium': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FF 50%, #F3F4FB 100%)',
				'gradient-card-subtle': 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFF 70%, #F5F7FF 100%)',
				'gradient-card-light': 'linear-gradient(135deg, #FEFEFF 0%, #F8F9FF 100%)',
				
				// === OVERLAY GRADIENTS ===
				'gradient-overlay-light': 'linear-gradient(180deg, rgba(232,234,246,0.95) 0%, rgba(255,255,255,0.98) 100%)',
				'gradient-overlay-top': 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, transparent 100%)',
				'gradient-overlay-bottom': 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)',
				
				// === RADIAL GLOW EFFECTS ===
				'gradient-glow-top': 'radial-gradient(circle at top, rgba(92,107,192,0.15) 0%, transparent 60%)',
				'gradient-glow-center': 'radial-gradient(circle at center, rgba(92,107,192,0.1) 0%, transparent 70%)',
				'gradient-glow-top-right': 'radial-gradient(circle at top right, rgba(92,107,192,0.2) 0%, transparent 60%)',
				'gradient-glow-bottom-left': 'radial-gradient(circle at bottom left, rgba(40,53,147,0.15) 0%, transparent 60%)',
				
				// === ANIMATED GRADIENT ===
				'gradient-animated': 'linear-gradient(270deg, #E8EAF6, #C5CAE9, #9FA8DA, #7986CB, #E8EAF6)',
				
				// === FOOTER GRADIENT ===
				'gradient-footer': 'linear-gradient(135deg, #1e2870 0%, #283593 50%, #1a1f5a 100%)',
				
				// === UTILITY GRADIENTS ===
				'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
				
				// === LEGACY GRADIENTS (Deprecated - use new ones above) ===
				'gradient-light': 'linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)',
				'gradient-light-subtle': 'linear-gradient(135deg, #F3F4F6 0%, #E8EAF6 100%)',
				'gradient-hero': 'linear-gradient(to bottom, rgba(232, 234, 246, 0.8) 0%, rgba(40, 53, 147, 0.8) 100%)',
				'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f5f7ff 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
