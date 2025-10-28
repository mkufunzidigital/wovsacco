import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LoanProduct } from '../../types';
import { Calculator } from 'lucide-react';

interface LoanCalculatorProps {
  loanProducts: LoanProduct[];
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ loanProducts }) => {
  const [amount, setAmount] = useState(50000);
  const [productIndex, setProductIndex] = useState(0);

  const selectedProduct = loanProducts[productIndex];
  const term = selectedProduct.term;
  const annualRate = selectedProduct.interestRate;

  const monthlyPayment = useMemo(() => {
    if (amount === 0) return 0;
    const monthlyRate = annualRate / 12 / 100;
    if (monthlyRate === 0) return amount / term;
    const power = Math.pow(1 + monthlyRate, term);
    const payment = amount * (monthlyRate * power) / (power - 1);
    return payment;
  }, [amount, term, annualRate]);

  return (
    <section className="py-20 bg-wov-neutral-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-wov-blue-dark font-serif">Loan Repayment Calculator</h2>
            <p className="mt-4 text-lg text-wov-neutral-medium-gray max-w-2xl mx-auto">
                Get an estimate of your monthly repayments. Adjust the loan amount and select a product to see how it affects your payment.
            </p>
        </motion.div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 grid md:grid-cols-2 gap-8">
            {/* Left side: Inputs */}
            <div className="space-y-6">
                <div>
                    <label htmlFor="loanAmount" className="block font-semibold text-wov-blue-dark mb-2">Loan Amount</label>
                    <div className="text-3xl font-bold text-wov-teal">
                        KShs {amount.toLocaleString()}
                    </div>
                    <input
                        type="range"
                        id="loanAmount"
                        min="10000"
                        max="500000"
                        step="5000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-wov-teal mt-2"
                    />
                </div>
                 <div>
                    <label htmlFor="loanProduct" className="block font-semibold text-wov-blue-dark mb-2">Loan Product</label>
                    <select
                        id="loanProduct"
                        value={productIndex}
                        onChange={(e) => setProductIndex(Number(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wov-teal focus:border-wov-teal"
                    >
                        {loanProducts.map((product, index) => (
                            <option key={index} value={index}>{product.title}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                     <div>
                        <p className="text-sm text-wov-neutral-medium-gray">Interest Rate</p>
                        <p className="font-bold text-wov-blue-dark text-lg">{annualRate}% <span className="text-sm font-normal">p.a.</span></p>
                    </div>
                    <div>
                        <p className="text-sm text-wov-neutral-medium-gray">Loan Term</p>
                        <p className="font-bold text-wov-blue-dark text-lg">{term} <span className="text-sm font-normal">months</span></p>
                    </div>
                </div>
            </div>

            {/* Right side: Results */}
            <div className="bg-hero-gradient text-white rounded-lg p-8 flex flex-col items-center justify-center text-center">
                 <Calculator className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Estimated Monthly Payment</h3>
                <div className="text-4xl md:text-5xl font-bold">
                    KShs {monthlyPayment > 0 ? monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
                </div>
                 <p className="text-xs mt-4 text-gray-200 opacity-80">
                    *This is an estimate. Actual repayment amounts may vary. Please contact us for a formal quotation.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
