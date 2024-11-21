<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h5 class="modal-title">Book an Appointment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      
      <!-- Modal body -->
      <div class="modal-body">

        <p>Please fill up the below details, our executive will call you in
          shortly.</p>
        <!-- validation forms start here -->
        <form action="thankyou.php"  method="post" novalidate="novalidate" class="needs-validation">
          <div class="mb-3">
            <label for="validationCustom01" class="form-label">Your Name <span class="required-icons" >*</span></label>
            <input type="text" class="form-control" id="validationCustom01" required name="fname">
            <div class="valid-feedback">Looks good!</div>
          </div>

          <div class="mb-3">
            <label for="validationCustom02" class="form-label">Your Email <span class="required-icons" >*</span></label>
            <input type="email" class="form-control" id="validationCustom02" required name="email">
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="mb-3">
            <label for="validationCustom03" class="form-label">Your Number <span class="required-icons" >*</span></label>
            <input type="number" class="form-control" id="validationCustom03"required name="phone_number">
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="mb-3">
            <label for="validationCustom04" class="form-label">Book Date <span class="required-icons" >*</span></label>
            <input type="datetime-local" class="form-control" id="validationCustom04" required name="datetimesd">
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea placeholder="" class="form-control" name="message"></textarea>
          </div>

          <div class="col-12">
            <button class="btn-primary customBtn" type="submit">Submit</button>
          </div>
        </form>
        <!-- validation forms end here -->
      </div>

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div> -->

    </div>
  </div>
</div>

<script>
  (function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
</script>