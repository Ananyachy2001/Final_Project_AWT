<html>
 <body onload="loadDoc()">
     

 <form action="http://127.0.0.1:8000/api/medical/create" class="col-md-6" method="post">
   

    <div class="col-md-4 form-group">
        <span>ID:</span>
        <input type="text" name="id" value="" class="form-control"/>
    </div>
        
        <div class="col-md-4 form-group">
            <span>Medicine Name:</span>
            <input type="text" name="med_name" value="" class="form-control"/>

        </div>

        <div class="col-md-4 form-group">
            <span>Medicine Details:</span>
            <input type="text" name="med_details" value="" class="form-control"/>
        </div>

        <div class="col-md-4 form-group">
            <span>Medicine manufacturing Date:</span>
            <input type="date" name="men_date" value="" class="form-control"/>
        </div>

        <div class="col-md-4 form-group">
            <span>Expiry Date:</span>
            <input type="date" name="exp_date" value="" class="form-control"/>
        </div>

        <div class="col-md-4 form-group">
            <span>Medicine Category:</span>
            <input type="text" name="med_cat" value="" class="form-control"/>
        </div>

        <div class="col-md-4 form-group">
            <span>Quantity:</span>
            <input type="text" name="quantity" value="" class="form-control"/>
        </div>
        <input type="submit" class="btn btn-success" value="Add" />
    </form>


</body>

    </html>