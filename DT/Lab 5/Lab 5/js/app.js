var app = new Vue(
  {
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
        }
    }
  },
  {
    el: '#nrzl-encoder',
    data: {
        bits: [],
        encodedBits: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getNRZLLevelEncoding(this.bits);
        }
    }
  }
)

console.log('🍓🥑🍏☕🏆⚽✅🚦');
