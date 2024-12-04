<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
        <p class="mt-4 text-lg text-gray-500">We offer comprehensive services for your Jeep</p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Installation Service -->
        <div class="bg-gray-50 rounded-lg p-8">
          <div class="text-xl font-semibold text-gray-900 mb-4">Parts Installation</div>
          <p class="text-gray-600 mb-4">Professional installation of all parts and accessories we sell.</p>
          <ul class="space-y-2 text-gray-500">
            <li>• Expert technicians</li>
            <li>• Warranty on labor</li>
            <li>• Same-day service available</li>
          </ul>
        </div>

        <!-- Maintenance -->
        <div class="bg-gray-50 rounded-lg p-8">
          <div class="text-xl font-semibold text-gray-900 mb-4">Maintenance Service</div>
          <p class="text-gray-600 mb-4">Regular maintenance to keep your Jeep in top condition.</p>
          <ul class="space-y-2 text-gray-500">
            <li>• Oil changes</li>
            <li>• Brake service</li>
            <li>• Suspension checks</li>
          </ul>
        </div>

        <!-- Custom Builds -->
        <div class="bg-gray-50 rounded-lg p-8">
          <div class="text-xl font-semibold text-gray-900 mb-4">Custom Builds</div>
          <p class="text-gray-600 mb-4">Transform your Jeep with our custom build services.</p>
          <ul class="space-y-2 text-gray-500">
            <li>• Lift kits</li>
            <li>• Performance upgrades</li>
            <li>• Custom modifications</li>
          </ul>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Need a Service?</h3>
        <p class="text-gray-600 mb-8">Contact us to schedule an appointment or get a quote</p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Contact Us
        </router-link>
      </div>
    </div>
  </div>
</template>