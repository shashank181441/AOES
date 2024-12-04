import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Cpu, Radio, Microscope, Cog, Wifi, Server, Shield, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const servicesData = {
  hero: {
    title: "Our Electronic Engineering Services",
    subtitle: "Powering Innovation in Electronics",
    description: "We specialize in cutting-edge electronic solutions, backed by essential IT support to bring your ideas to life."
  },
  services: [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Power Electronics",
      description: "Efficient power conversion and control systems.",
      features: [
        { name: "DC-DC Converters", description: "High-efficiency voltage conversion for various applications." },
        { name: "Motor Drives", description: "Precise control systems for electric motors in industrial settings." },
        { name: "Solar Inverters", description: "Convert DC from solar panels to AC for grid connection or standalone use." }
      ]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Embedded Systems",
      description: "Custom embedded solutions for various applications.",
      features: [
        { name: "Microcontroller Programming", description: "Develop firmware for microcontrollers in C/C++ or assembly." },
        { name: "FPGA Design", description: "Create custom digital circuits using hardware description languages." },
        { name: "Real-time Systems", description: "Design systems with strict timing constraints for critical applications." }
      ]
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "RF & Wireless",
      description: "Innovative wireless communication solutions.",
      features: [
        { name: "Antenna Design", description: "Custom antenna designs for optimal signal transmission and reception." },
        { name: "RF Circuit Design", description: "High-frequency circuit design for wireless communication systems." },
        { name: "Wireless Protocols", description: "Implementation of various wireless standards (e.g., Bluetooth, Wi-Fi, LoRa)." }
      ]
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "PCB Design",
      description: "High-quality PCB design and prototyping services.",
      features: [
        { name: "Multi-layer PCBs", description: "Design complex multi-layer PCBs for advanced electronic systems." },
        { name: "Flex PCBs", description: "Create flexible PCB designs for space-constrained applications." },
        { name: "High-speed Design", description: "Implement high-speed PCB design techniques for signal integrity." }
      ]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Automation & Control",
      description: "Advanced control systems for industrial applications.",
      features: [
        { name: "PLC Programming", description: "Develop logic for Programmable Logic Controllers in various industries." },
        { name: "SCADA Systems", description: "Design and implement Supervisory Control and Data Acquisition systems." },
        { name: "Motion Control", description: "Create precise motion control systems for robotics and machinery." }
      ]
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "IoT Solutions",
      description: "Connecting devices for smarter operations.",
      features: [
        { name: "Sensor Integration", description: "Incorporate various sensors into IoT devices for data collection." },
        { name: "Low-power Design", description: "Optimize IoT devices for extended battery life and energy efficiency." },
        { name: "IoT Protocols", description: "Implement IoT-specific protocols like MQTT, CoAP for efficient communication." }
      ]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "IT Infrastructure",
      description: "Essential IT support for your electronic systems.",
      features: [
        { name: "Network Setup", description: "Configure and optimize networks for electronic system communication." },
        { name: "Data Storage", description: "Implement secure and efficient data storage solutions for collected data." },
        { name: "Cloud Integration", description: "Connect electronic systems to cloud platforms for remote monitoring and control." }
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Protecting your electronic and IT assets.",
      features: [
        { name: "Secure Boot", description: "Implement secure boot processes to prevent unauthorized firmware modifications." },
        { name: "Encryption", description: "Apply encryption techniques to protect sensitive data in electronic systems." },
        { name: "Vulnerability Assessment", description: "Identify and address security vulnerabilities in electronic designs." }
      ]
    }
  ],
  cta: {
    title: "Ready to Electrify Your Projects?",
    description: "Let our expert team bring your electronic engineering vision to reality.",
    buttonText: "Get a Free Consultation"
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const ServiceCard = ({ service }) => (
  <motion.div {...fadeInUp}>
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {service.icon}
          <CardTitle>{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{service.description}</CardDescription>
        <Accordion type="single" collapsible className="w-full">
          {service.features.map((feature, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
              <AccordionTrigger className="text-sm hover:no-underline py-2 [&[data-state=open]>div>svg]:rotate-90">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2 text-primary transition-transform duration-200" />
                  {feature.name}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pl-6">
                {feature.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  </motion.div>
)

const OurServices = () => {
  return (
    <div className="container mx-auto lg:px-16 sm:px-8 px-6 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">{servicesData.hero.title}</h1>
        <p className="text-lg text-muted-foreground mb-2">{servicesData.hero.subtitle}</p>
        <p className="max-w-2xl text-md mx-auto">{servicesData.hero.description}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {servicesData.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">{servicesData.cta.title}</h2>
        <p className="mb-6">{servicesData.cta.description}</p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
          {servicesData.cta.buttonText}
        </Button>
      </motion.div>
    </div>
  )
}

export default OurServices