
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { statsData } from '../../constants';
import { Stat } from '../../types';

const AnimatedCounter = ({ end, decimals = 0, prefix = '', suffix = '' }: { end: number; decimals?: number; prefix?: string; suffix?: string; }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: end,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>{number.to(n => `${prefix}${n.toFixed(decimals)}${suffix}`)}</animated.span>;
};

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
        >
            <div className="flex justify-center mb-4">
                <div className="bg-wov-teal/10 rounded-full p-4">
                    <stat.icon className="w-10 h-10 text-wov-teal" />
                </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-wov-blue-dark mb-2">
                {isInView ? <AnimatedCounter end={stat.end} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} /> : 0}
            </div>
            <p className="text-wov-neutral-medium-gray font-semibold">{stat.label}</p>
        </motion.div>
    );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-wov-neutral-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
