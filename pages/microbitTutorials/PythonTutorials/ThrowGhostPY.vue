<template>
  <div class="relative bg-gray-50">
    <Header />
    <!-- main -->
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <img class="absolute top-12 left-full transform translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute top-12 right-full transform -translate-x-32" width="404" height="384"  fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
          <img class="absolute bottom-12 right-full transform -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384" src="@/static/images/circuit-board.svg">
        </div>
      </div>
          
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-red-700">
            Throw a Ghost
          </h1>
          
          <p class="mt-8 text-xl font-bold leading-8" style="color:#006494">
            We will explore the micro:bit radio function by throwing (shaking the micro:bit) a ghost from one micro:bit to another.
          </p>
               
          <p> 
            <b> This is adapted from the Micro:bit Educational Foundations teleporting duck tutorial. </b>
          </p>
        </div>
    
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What You Will Learn
          </h2>
              
          <ul>
            How to:
            <li> Set the radio group for the micro:bits to communicate over. </li>
            <li> Clear the LED matrix. </li>
            <li> Send messages to the micro:bit. </li>
            <li> Display an icon when the micro:bit receives a message. </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            What You Will Need
          </h2>
              
          <ul>
            <li> 2 x micro:bits. </li>
            <li> 2 x micro-USB Cables. </li>
            <li> 2 x Battery packs for the micro:bits (optional). </li>
          </ul>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Coding
          </h2>

          <ol>
            <li> Open your favourite browser (we recommend Google Chrome) and type <a href="https://python.microbit.org/"> <i> python.microbit.org </i> </a> and press <i> Enter </i>. This will load the Python coding editor. </li>
            <li> Click on <i> line 3 </i> and type the following code pressing <i> Enter </i> at the end of every line. 
              <figure>
                <img class="rounded-lg" src="@/static/images/ThrowGhost_PY_01.png" alt="" width="300" height="300">
                <figcaption> Setting up the code environment </figcaption>
              </figure>
            </li>
            <li> <i> Delete </i> the text on <i> lines 8, 9, 10 </i>. </li>
            <li> Click on <i> line 8 </i> making sure your cursor is tabbed in not at the start of the line and type the following code again pressing <i> Enter </i> at the end of every line. 
              <figure>
                <img class="rounded-lg" src="@/static/images/ThrowGhost_PY_02.png" alt="" width="500" height="500">
                <figcaption> Coding </figcaption>
              </figure>
            </li>
          </ol>

          <h3 class="text-2xl tracking-tight font-extrabold sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl" style="color:#006494">
            Completed Code
          </h3>

          <figure>
            <img class="rounded-lg" src="@/static/images/ThrowGhost_PY_03.png" alt="" width="600" height="600">
            <figcaption> Completed Code </figcaption>
          </figure>

          <p> 
            Now that we have completed the code we need to download it to the micro:bit.
          </p>

          <h2 class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl" style="color:#76B82A">
            Downloading the Code
          </h2>

          <ol>
            <li> Take the micro USB cable and connect the micro:bit to the computer. </li>
            <li> Click on <i> Connect </i>. Click on your <i> micro:bit </i> and click <i> connect </i>. </li>
            <li> 3.	Click on <i> Download </i>. </li>
          </ol>  

          <p> 
            Now that we have downloaded our code to the micro:bits attach a battery pack and start throwing the ghost back and forth between you and your friend. 
          </p>

          <p> 
            Try moving further away from one and other and see how far apart you can get before you can no longer catch the ghost.
          </p>
        </div>
      </div>
    </div>
          
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";

  export default Vue.extend({
    components: {
      Header,
      Footer
    }
  });
</script>

