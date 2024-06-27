<?php $__env->startSection('content'); ?>

<div class="row mt-3 p-5">
    <div class="col-12 text-center">
        <div class="col-12 mb-2"><i  class="fa fa-check-circle fa-4x text-success" aria-hidden="true"></i> <h1>Setup complete</h1></div>
        <div class="col-12 mb-2"><a href="/">Click here</a> to get back to your project</div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('setup.main', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/customer/www/daniela382.sg-host.com/public_html/resources/views/setup/finishedSetup.blade.php ENDPATH**/ ?>