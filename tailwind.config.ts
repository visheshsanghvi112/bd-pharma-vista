
import type { Config } from "tailwindcss";

export default {
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				pharma: {
					blue: '#283593',
					navy: '#283593',
					light: '#E8EAF6',
					gray: '#F5F5F7',
					dark: '#1A1F2C',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
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
				'rotate-3d': {
					'0%': { 
						transform: 'perspective(1000px) rotateY(0deg)' 
					},
					'50%': { 
						transform: 'perspective(1000px) rotateY(15deg)' 
					},
					'100%': { 
						transform: 'perspective(1000px) rotateY(0deg)' 
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
				'rotate-3d': 'rotate-3d 7s infinite ease-in-out'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #283593 0%, #5C6BC0 100%)',
				'gradient-light': 'linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)',
				'gradient-cta': 'linear-gradient(135deg, #3949AB 0%, #303F9F 100%)',
				'gradient-hero': 'linear-gradient(to bottom, rgba(232, 234, 246, 0.8) 0%, rgba(40, 53, 147, 0.8) 100%)',
				'gradient-card-light': 'linear-gradient(135deg, #ffffff 0%, #f5f7ff 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
			},
			boxShadow: {
				'3d': '0 20px 30px -15px rgba(40, 53, 147, 0.3)',
				'elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 2px 5px -2px rgba(0, 0, 0, 0.05)',
				'button': '0 10px 15px -3px rgba(40, 53, 147, 0.3), 0 4px 6px -4px rgba(40, 53, 147, 0.2)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
