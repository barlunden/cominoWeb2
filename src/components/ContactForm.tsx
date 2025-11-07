import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('sending');

		// Placeholder for form submission logic
		// I produksjon ville dette sendt data til ein backend eller e-post-teneste
		setTimeout(() => {
			console.log('Form data:', formData);
			setStatus('success');
			setFormData({ name: '', email: '', phone: '', message: '' });
		}, 1000);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
					Navn *
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					value={formData.name}
					onChange={handleChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
					E-post *
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					value={formData.email}
					onChange={handleChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
				/>
			</div>

			<div>
				<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
					Telefon
				</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
					Melding *
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={5}
					value={formData.message}
					onChange={handleChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
				/>
			</div>

			<button
				type="submit"
				disabled={status === 'sending'}
				className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
			>
				{status === 'sending' ? 'Sender...' : 'Send melding'}
			</button>

			{status === 'success' && (
				<div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
					Takk for din melding! Vi svarer så snart som mulig.
				</div>
			)}

			{status === 'error' && (
				<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
					Noe gikk galt. Prøv igjen senere.
				</div>
			)}
		</form>
	);
}
