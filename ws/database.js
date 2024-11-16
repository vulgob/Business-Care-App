const mongoose = require('mongoose');
const URI = 'mongodb+srv://ClinicaAdmUser:clinicaadmuser@clusterdev.xm3yc.mongodb.net/clinicas?retryWrites=true&w=majority&appName=ClusterDev';

mongoose
    .connect(URI)
    .then(() => console.log('DB is UP!'))
    .catch(() => console.log(err));