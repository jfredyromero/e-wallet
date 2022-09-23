// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import addController from '../controllers/add.controller';
import displayOptions from './add.service';

describe('#addService', () => {
	it('should add "show" class', () => {
		document.body.appendChild(addController());
		displayOptions();
		const radioButton: HTMLInputElement = document.querySelector(
			'input[name=payment]'
		) as HTMLInputElement;
		expect(
			radioButton.parentElement?.nextElementSibling?.className
				.split(' ')
				.includes('show')
		).toBeFalsy();
		radioButton.click();
		expect(
			radioButton.parentElement?.nextElementSibling?.className
				.split(' ')
				.includes('show')
		).toBeTruthy();
	});
});
