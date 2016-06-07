var app = require('../../lib/subapp.js')(__dirname);

var bodyParser = require('body-parser')
var session = require('express-session');

var DEFAULT_REPAYMENT = 250;
var DEFAULT_ACCOUNTNAME = "Elisabeth Welsh";
var DEFAULT_SORTCODE = "111111";
var DEFAULT_ADDRESSLINE1 = '6';
var DEFAULT_ADDRESSLINE2 = 'My Street';
var DEFAULT_TOWN = 'My Town';
var DEFAULT_COUNTY = '';
var DEFAULT_POSTCODE = 'NE1 2SR';
var aNumber = '99';
var sCode = '99';

var FullAddress = {
    add1:'11',
    add2:'This Street'
}

console.log(sCode.length)

app.get('/', function (req, res) {
  res.render('index');
});

// Index page route - passes data to  check details screen.
app.post('/index', function (req, res) {
    //console.log(req.body);
    aNumber = req.body.aNumber;
    sCode = req.body.sCode;
    res.redirect('check-details');
});

app.get('/check-details', function (req, res) {
        
    res.render('check-details', {
        accountNumber: aNumber,
        sortCode: sCode,
        accountName: DEFAULT_ACCOUNTNAME,
        address: FullAddress
    });
});

// Check details route - doesn't pass any data to confirmation page.
app.post('/check-details', function (req, res) {
    
    res.redirect('confirmation');
});

app.get('/confirmation', function (req, res) {
        
    res.render('confirmation', {
        accountNumber: aNumber,
        sortCode: sCode,
        accountName: DEFAULT_ACCOUNTNAME,
        address: FullAddress
    });
});



//app.use(express.bodyParser());


module.exports = app;