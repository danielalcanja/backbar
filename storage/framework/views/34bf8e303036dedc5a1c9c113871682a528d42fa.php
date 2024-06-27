<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel=icon href=/images/favicon.ico>
    <link rel="stylesheet" href="/css/master.css">

    <title>Stocky | Ultimate Inventory With POS</title>
  </head>

  <body class="text-left">
    <noscript>
      <strong>
        We're sorry but Stocky doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>

    <!-- built files will be auto injected -->
    <div class="loading_wrap" id="loading_wrap">
      <div class="loader_logo">
      <img src="/images/logo.png" class="" alt="logo" />

      </div>

      <div class="loading"></div>
    </div>
    <div id="app">
    </div>

    <script>
      window.config = {
        "ModulesEnabled" : <?php echo json_encode($ModulesEnabled, 15, 512) ?>,
        "ModulesInstalled" : <?php echo json_encode($ModulesInstalled, 15, 512) ?>,
      };
    </script>
<!-- 
   <?php $__currentLoopData = $ModulesInstalled; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $moduleName): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <script src="<?php echo e(url("/modules/{$moduleName}.js")); ?>"></script>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> -->

    <script src="/js/main.min.js?v=4.0.7"></script>

  </body>
</html>
<?php /**PATH /home/customer/www/backbar.hastehair.com/public_html/resources/views/layouts/master.blade.php ENDPATH**/ ?>