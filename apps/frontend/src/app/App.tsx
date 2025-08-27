'use client';

import { memo } from 'react';
import { Toaster } from 'sonner';
import { AuthProvider } from '@auth/AuthContext';
import MainThemeProvider from '../contexts/MainThemeProvider';
import MainLayout from '../components/MainLayout';
import { clsx } from 'clsx';

type AppProps = {
	children: React.ReactNode;
};

function App(props: AppProps) {
	const { children } = props;

	return (
		<AuthProvider>
			<MainThemeProvider>
				<Toaster
					toastOptions={{
						classNames: {
							toast: 'bg-primary text-primary-contrast'
						}
					}}
				/>
				<main
					id="root"
					className={clsx('loading')}
				>
					<MainLayout>{children}</MainLayout>
				</main>
			</MainThemeProvider>
		</AuthProvider>
	);
}

export default memo(App);
