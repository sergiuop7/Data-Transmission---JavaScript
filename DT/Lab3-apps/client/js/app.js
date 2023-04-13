var app = new Vue({
    el: '#hamming-encoder',
    data: {
        dataBits: [],
        status: '',
        numberOfDataBits: 5
    },
    created: function () {
        this.initDataBits(4);
    },
    methods: {
        initDataBits: function(){
            this.dataBits=[];
            
            for(var i=0;i<this.numberOfDataBits;i++){
                var bit = { data: null };
                this.dataBits.push(bit);
            }
        },
        send: function () {
            if (this.validate(this.dataBits) === true){
                var encodedMessage = this.encode(this.dataBits);
                // this.status = encodedMessage + ' encoded sent to server';

                return axios.put("http://localhost:3000/message", {bits: encodedMessage}).then(
                    response => (this.status = response.data)
                );
            } else {
                this.status = 'Input is not valid. Please use 0 or 1 as data bit values';
            }
        },
        encode: function(bits){
            switch(bits.length){
                case 5:{
            var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 4
            var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 2
            var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 1
            var parityBit = this.parity(c1 + c2 + c4 + bits[0].data + bits[1].data + bits[2].data + bits[3].data);
            // var C0 = this. ...
            if(parseInt(parityBit) === parseInt(bits[4].data)){
                console.log("Parity bit is correct");
            } else {
                console.log("Parity bit is incorrect, should be " + parityBit);
            }
			console.log("Control bits: "+c1+","+c2+","+c4, "Parity bit: "+parityBit);
            return [c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data)]; // vectorul V (cuvantul de transmis)
            }
            case 9:{
            var c8 = this.parity(parseInt(bits[4].data)+parseInt(bits[5].data)+parseInt(bits[6].data)+parseInt(bits[7].data)); // se calculeaza bitul de control de pe pozitia 8
            var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 4
            var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 2
            var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 1
            var parityBit = this.parity(c1 + c2 + c4 + bits[0].data + bits[1].data + bits[2].data + bits[3].data);

            var parityBit = this.parity(c1 + c2 + c4 + c8 + bits[0].data + bits[1].data + bits[2].data + bits[3].data + bits[4].data + bits[5].data + bits[6].data + bits[7].data);

            if(parseInt(parityBit) === parseInt(bits[8].data)){ 
                console.log("Parity bit is correct");
            } else {
                console.log("Parity bit is incorrect, should be " + parityBit);
            }
            console.log("Control bits: "+c1+","+c2+","+c4+","+c8, "Parity bit: "+ parityBit);

            return [c1,c2,parseInt(bits[0].data),c4,parseInt(bits[1].data),parseInt(bits[2].data),parseInt(bits[3].data),c8, parseInt(bits[4].data), parseInt(bits[5].data), parseInt(bits[6].data), parseInt(bits[7].data)];
            }
        }
    },
        parity: function(number){
            return number % 2;
        },
        validate: function(bits){
            for(var i=0; i<bits.length;i++){
                if (this.validateBit(bits[i].data) === false)
                return false;
            }
            return true;
        },
        validateBit: function(character){
            if (character === null) return false;
            return (parseInt(character) === 0 ||
            parseInt(character) === 1);  
        }
    }
})