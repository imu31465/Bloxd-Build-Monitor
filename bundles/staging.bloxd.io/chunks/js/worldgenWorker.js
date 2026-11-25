/*! For license information please see dz8ef.worldgenWorker.39e0b90e.chunk.js.LICENSE.txt */
(() => {
  var uu = {
      1695: uu => {
        const Eu = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
          ju = () => Eu.now(),
          su = uu => uu === 1 / 0 || (uu => uu && uu === Math.floor(uu) && uu > 0 && isFinite(uu))(uu);
        class Uu {
          constructor() {
            let {
              max: uu = 1 / 0,
              ttl: Eu,
              updateAgeOnGet: ju = !1,
              checkAgeOnGet: Uu = !1,
              noUpdateTTL: Zu = !1,
              dispose: Xu,
              noDisposeOnSet: lu = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.expirations = Object.create(null), this.data = new Map, this.expirationMap = new Map, void 0 !== Eu && !su(Eu)) throw new TypeError("ttl must be positive integer or Infinity if set");
            if (!su(uu)) throw new TypeError("max must be positive integer or Infinity");
            if (this.ttl = Eu, this.max = uu, this.updateAgeOnGet = !!ju, this.checkAgeOnGet = !!Uu, this.noUpdateTTL = !!Zu, this.noDisposeOnSet = !!lu, void 0 !== Xu) {
              if ("function" !== typeof Xu) throw new TypeError("dispose must be function if set");
              this.dispose = Xu
            }
            this.timer = void 0, this.timerExpiration = void 0
          }
          setTimer(uu, Eu) {
            if (this.timerExpiration < uu) return;
            this.timer && clearTimeout(this.timer);
            const su = setTimeout((() => {
              this.timer = void 0, this.timerExpiration = void 0, this.purgeStale();
              for (const uu in this.expirations) {
                this.setTimer(uu, Math.max(0, uu - ju()));
                break
              }
            }), Eu);
            su.unref && su.unref(), this.timerExpiration = uu, this.timer = su
          }
          cancelTimer() {
            this.timer && (clearTimeout(this.timer), this.timerExpiration = void 0, this.timer = void 0)
          }
          cancelTimers() {
            return process.emitWarning('TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no "s"), and will be removed in the next major version update'), this.cancelTimer()
          }
          clear() {
            const uu = this.dispose !== Uu.prototype.dispose ? [...this] : [];
            this.data.clear(), this.expirationMap.clear(), this.cancelTimer(), this.expirations = Object.create(null);
            for (const [Eu, ju] of uu) this.dispose(ju, Eu, "delete")
          }
          setTTL(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ttl;
            const su = this.expirationMap.get(uu);
            if (void 0 !== su) {
              const Eu = this.expirations[su];
              !Eu || Eu.length <= 1 ? delete this.expirations[su] : this.expirations[su] = Eu.filter((Eu => Eu !== uu))
            }
            if (Eu !== 1 / 0) {
              const su = Math.floor(ju() + Eu);
              this.expirationMap.set(uu, su), this.expirations[su] || (this.expirations[su] = [], this.setTimer(su, Eu)), this.expirations[su].push(uu)
            } else this.expirationMap.set(uu, 1 / 0)
          }
          set(uu, Eu) {
            let {
              ttl: ju = this.ttl,
              noUpdateTTL: Uu = this.noUpdateTTL,
              noDisposeOnSet: Zu = this.noDisposeOnSet
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!su(ju)) throw new TypeError("ttl must be positive integer or Infinity");
            if (this.expirationMap.has(uu)) {
              Uu || this.setTTL(uu, ju);
              const su = this.data.get(uu);
              su !== Eu && (this.data.set(uu, Eu), Zu || this.dispose(su, uu, "set"))
            } else this.setTTL(uu, ju), this.data.set(uu, Eu);
            for (; this.size > this.max;) this.purgeToCapacity();
            return this
          }
          has(uu) {
            return this.data.has(uu)
          }
          getRemainingTTL(uu) {
            const Eu = this.expirationMap.get(uu);
            return Eu === 1 / 0 ? Eu : void 0 !== Eu ? Math.max(0, Math.ceil(Eu - ju())) : 0
          }
          get(uu) {
            let {
              updateAgeOnGet: Eu = this.updateAgeOnGet,
              ttl: ju = this.ttl,
              checkAgeOnGet: su = this.checkAgeOnGet
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Uu = this.data.get(uu);
            if (!su || 0 !== this.getRemainingTTL(uu)) return Eu && this.setTTL(uu, ju), Uu;
            this.delete(uu)
          }
          dispose(uu, Eu) {}
          delete(uu) {
            const Eu = this.expirationMap.get(uu);
            if (void 0 !== Eu) {
              const ju = this.data.get(uu);
              this.data.delete(uu), this.expirationMap.delete(uu);
              const su = this.expirations[Eu];
              return su && (su.length <= 1 ? delete this.expirations[Eu] : this.expirations[Eu] = su.filter((Eu => Eu !== uu))), this.dispose(ju, uu, "delete"), 0 === this.size && this.cancelTimer(), !0
            }
            return !1
          }
          purgeToCapacity() {
            for (const uu in this.expirations) {
              const Eu = this.expirations[uu];
              if (!(this.size - Eu.length >= this.max)) {
                const uu = this.size - this.max,
                  ju = [];
                for (const su of Eu.splice(0, uu)) ju.push([su, this.data.get(su)]), this.data.delete(su), this.expirationMap.delete(su);
                for (const [Eu, su] of ju) this.dispose(su, Eu, "evict");
                return
              } {
                delete this.expirations[uu];
                const ju = [];
                for (const uu of Eu) ju.push([uu, this.data.get(uu)]), this.data.delete(uu), this.expirationMap.delete(uu);
                for (const [uu, Eu] of ju) this.dispose(Eu, uu, "evict")
              }
            }
          }
          get size() {
            return this.data.size
          }
          purgeStale() {
            const uu = Math.ceil(ju());
            for (const Eu in this.expirations) {
              if ("Infinity" === Eu || Eu > uu) return;
              const ju = [...this.expirations[Eu] || []],
                su = [];
              delete this.expirations[Eu];
              for (const uu of ju) su.push([uu, this.data.get(uu)]), this.data.delete(uu), this.expirationMap.delete(uu);
              for (const [uu, Eu] of su) this.dispose(Eu, uu, "stale")
            }
            0 === this.size && this.cancelTimer()
          }* entries() {
            for (const uu in this.expirations)
              for (const Eu of this.expirations[uu]) yield [Eu, this.data.get(Eu)]
          }* keys() {
            for (const uu in this.expirations)
              for (const Eu of this.expirations[uu]) yield Eu
          }* values() {
            for (const uu in this.expirations)
              for (const Eu of this.expirations[uu]) yield this.data.get(Eu)
          } [Symbol.iterator]() {
            return this.entries()
          }
        }
        uu.exports = Uu
      },
      2982: uu => {
        uu.exports = function(uu) {
          for (var Eu = new Array(uu), ju = 0; ju < uu; ++ju) Eu[ju] = ju;
          return Eu
        }
      },
      2990: uu => {
        function Eu(uu) {
          return !!uu.constructor && "function" === typeof uu.constructor.isBuffer && uu.constructor.isBuffer(uu)
        }
        uu.exports = function(uu) {
          return null != uu && (Eu(uu) || function(uu) {
            return "function" === typeof uu.readFloatLE && "function" === typeof uu.slice && Eu(uu.slice(0, 0))
          }(uu) || !!uu._isBuffer)
        }
      },
      40036: uu => {
        uu.exports = function(uu, Eu) {
          Eu = Eu || 2;
          for (var ju = 2 * (uu = uu || 1) + 1, su = Math.pow(ju, Eu) - 1, Uu = new Array(su), Zu = 0; Zu < su; Zu++)
            for (var Xu = Uu[Zu] = new Array(Eu), lu = Zu < su / 2 ? Zu : Zu + 1, qu = 1; qu <= Eu; qu++) {
              var fu = lu % Math.pow(ju, qu);
              Xu[qu - 1] = fu / Math.pow(ju, qu - 1) - uu, lu -= fu
            }
          return Uu
        }
      },
      2976: (uu, Eu, ju) => {
        var su = ju(2982),
          Uu = ju(2990),
          Zu = "undefined" !== typeof Float64Array;

        function Xu(uu, Eu) {
          return uu[0] - Eu[0]
        }

        function lu() {
          var uu, Eu = this.stride,
            ju = new Array(Eu.length);
          for (uu = 0; uu < ju.length; ++uu) ju[uu] = [Math.abs(Eu[uu]), uu];
          ju.sort(Xu);
          var su = new Array(ju.length);
          for (uu = 0; uu < su.length; ++uu) su[uu] = ju[uu][1];
          return su
        }

        function qu(uu, Eu) {
          var ju = ["View", Eu, "d", uu].join("");
          Eu < 0 && (ju = "View_Nil" + uu);
          var Uu = "generic" === uu;
          if (-1 === Eu) {
            var Zu = "function " + ju + "(a){this.data=a;};var proto=" + ju + ".prototype;proto.dtype='" + uu + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + ju + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + ju + "(a){return new " + ju + "(a);}";
            return new Function(Zu)()
          }
          if (0 === Eu) {
            Zu = "function " + ju + "(a,d) {this.data = a;this.offset = d};var proto=" + ju + ".prototype;proto.dtype='" + uu + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + ju + "_copy() {return new " + ju + "(this.data,this.offset)};proto.pick=function " + ju + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + ju + "_get(){return " + (Uu ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + ju + "_set(v){return " + (Uu ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + ju + "(a,b,c,d){return new " + ju + "(a,d)}";
            return new Function("TrivialArray", Zu)(fu[uu][0])
          }
          Zu = ["'use strict'"];
          var Xu = su(Eu),
            qu = Xu.map((function(uu) {
              return "i" + uu
            })),
            Cu = "this.offset+" + Xu.map((function(uu) {
              return "this.stride[" + uu + "]*i" + uu
            })).join("+"),
            bu = Xu.map((function(uu) {
              return "b" + uu
            })).join(","),
            cu = Xu.map((function(uu) {
              return "c" + uu
            })).join(",");
          Zu.push("function " + ju + "(a," + bu + "," + cu + ",d){this.data=a", "this.shape=[" + bu + "]", "this.stride=[" + cu + "]", "this.offset=d|0}", "var proto=" + ju + ".prototype", "proto.dtype='" + uu + "'", "proto.dimension=" + Eu), Zu.push("Object.defineProperty(proto,'size',{get:function " + ju + "_size(){return " + Xu.map((function(uu) {
            return "this.shape[" + uu + "]"
          })).join("*"), "}})"), 1 === Eu ? Zu.push("proto.order=[0]") : (Zu.push("Object.defineProperty(proto,'order',{get:"), Eu < 4 ? (Zu.push("function " + ju + "_order(){"), 2 === Eu ? Zu.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === Eu && Zu.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : Zu.push("ORDER})")), Zu.push("proto.set=function " + ju + "_set(" + qu.join(",") + ",v){"), Uu ? Zu.push("return this.data.set(" + Cu + ",v)}") : Zu.push("return this.data[" + Cu + "]=v}"), Zu.push("proto.get=function " + ju + "_get(" + qu.join(",") + "){"), Uu ? Zu.push("return this.data.get(" + Cu + ")}") : Zu.push("return this.data[" + Cu + "]}"), Zu.push("proto.index=function " + ju + "_index(", qu.join(), "){return " + Cu + "}"), Zu.push("proto.hi=function " + ju + "_hi(" + qu.join(",") + "){return new " + ju + "(this.data," + Xu.map((function(uu) {
            return ["(typeof i", uu, "!=='number'||i", uu, "<0)?this.shape[", uu, "]:i", uu, "|0"].join("")
          })).join(",") + "," + Xu.map((function(uu) {
            return "this.stride[" + uu + "]"
          })).join(",") + ",this.offset)}");
          var Nu = Xu.map((function(uu) {
              return "a" + uu + "=this.shape[" + uu + "]"
            })),
            Ou = Xu.map((function(uu) {
              return "c" + uu + "=this.stride[" + uu + "]"
            }));
          Zu.push("proto.lo=function " + ju + "_lo(" + qu.join(",") + "){var b=this.offset,d=0," + Nu.join(",") + "," + Ou.join(","));
          for (var Yu = 0; Yu < Eu; ++Yu) Zu.push("if(typeof i" + Yu + "==='number'&&i" + Yu + ">=0){d=i" + Yu + "|0;b+=c" + Yu + "*d;a" + Yu + "-=d}");
          Zu.push("return new " + ju + "(this.data," + Xu.map((function(uu) {
            return "a" + uu
          })).join(",") + "," + Xu.map((function(uu) {
            return "c" + uu
          })).join(",") + ",b)}"), Zu.push("proto.step=function " + ju + "_step(" + qu.join(",") + "){var " + Xu.map((function(uu) {
            return "a" + uu + "=this.shape[" + uu + "]"
          })).join(",") + "," + Xu.map((function(uu) {
            return "b" + uu + "=this.stride[" + uu + "]"
          })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
          for (Yu = 0; Yu < Eu; ++Yu) Zu.push("if(typeof i" + Yu + "==='number'){d=i" + Yu + "|0;if(d<0){c+=b" + Yu + "*(a" + Yu + "-1);a" + Yu + "=ceil(-a" + Yu + "/d)}else{a" + Yu + "=ceil(a" + Yu + "/d)}b" + Yu + "*=d}");
          Zu.push("return new " + ju + "(this.data," + Xu.map((function(uu) {
            return "a" + uu
          })).join(",") + "," + Xu.map((function(uu) {
            return "b" + uu
          })).join(",") + ",c)}");
          var hu = new Array(Eu),
            Du = new Array(Eu);
          for (Yu = 0; Yu < Eu; ++Yu) hu[Yu] = "a[i" + Yu + "]", Du[Yu] = "b[i" + Yu + "]";
          Zu.push("proto.transpose=function " + ju + "_transpose(" + qu + "){" + qu.map((function(uu, Eu) {
            return uu + "=(" + uu + "===undefined?" + Eu + ":" + uu + "|0)"
          })).join(";"), "var a=this.shape,b=this.stride;return new " + ju + "(this.data," + hu.join(",") + "," + Du.join(",") + ",this.offset)}"), Zu.push("proto.pick=function " + ju + "_pick(" + qu + "){var a=[],b=[],c=this.offset");
          for (Yu = 0; Yu < Eu; ++Yu) Zu.push("if(typeof i" + Yu + "==='number'&&i" + Yu + ">=0){c=(c+this.stride[" + Yu + "]*i" + Yu + ")|0}else{a.push(this.shape[" + Yu + "]);b.push(this.stride[" + Yu + "])}");
          return Zu.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), Zu.push("return function construct_" + ju + "(data,shape,stride,offset){return new " + ju + "(data," + Xu.map((function(uu) {
            return "shape[" + uu + "]"
          })).join(",") + "," + Xu.map((function(uu) {
            return "stride[" + uu + "]"
          })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", Zu.join("\n"))(fu[uu], lu)
        }
        var fu = {
          float32: [],
          float64: [],
          int8: [],
          int16: [],
          int32: [],
          uint8: [],
          uint16: [],
          uint32: [],
          array: [],
          uint8_clamped: [],
          bigint64: [],
          biguint64: [],
          buffer: [],
          generic: []
        };
        uu.exports = function(uu, Eu, ju, su) {
          if (void 0 === uu) return (0, fu.array[0])([]);
          "number" === typeof uu && (uu = [uu]), void 0 === Eu && (Eu = [uu.length]);
          var Xu = Eu.length;
          if (void 0 === ju) {
            ju = new Array(Xu);
            for (var lu = Xu - 1, Cu = 1; lu >= 0; --lu) ju[lu] = Cu, Cu *= Eu[lu]
          }
          if (void 0 === su) {
            su = 0;
            for (lu = 0; lu < Xu; ++lu) ju[lu] < 0 && (su -= (Eu[lu] - 1) * ju[lu])
          }
          for (var bu = function(uu) {
              if (Uu(uu)) return "buffer";
              if (Zu) switch (Object.prototype.toString.call(uu)) {
                case "[object Float64Array]":
                  return "float64";
                case "[object Float32Array]":
                  return "float32";
                case "[object Int8Array]":
                  return "int8";
                case "[object Int16Array]":
                  return "int16";
                case "[object Int32Array]":
                  return "int32";
                case "[object Uint8Array]":
                  return "uint8";
                case "[object Uint16Array]":
                  return "uint16";
                case "[object Uint32Array]":
                  return "uint32";
                case "[object Uint8ClampedArray]":
                  return "uint8_clamped";
                case "[object BigInt64Array]":
                  return "bigint64";
                case "[object BigUint64Array]":
                  return "biguint64"
              }
              return Array.isArray(uu) ? "array" : "generic"
            }(uu), cu = fu[bu]; cu.length <= Xu + 1;) cu.push(qu(bu, cu.length - 1));
          return (0, cu[Xu + 1])(uu, Eu, ju, su)
        }
      },
      40010: (uu, Eu, ju) => {
        var su = ju(40012).integer,
          Uu = ju(40021),
          Zu = ju(40030);

        function Xu(uu, Eu) {
          for (var ju = 0, su = 0; su < uu.length; su++) ju += Math.pow(uu[su] - Eu[su], 2);
          return ju
        }

        function lu(uu, Eu) {
          if ("function" === typeof uu.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
          this.shape = uu.shape, this.minDistance = uu.minDistance, this.maxDistance = uu.maxDistance || 2 * uu.minDistance, this.maxTries = Math.ceil(Math.max(1, uu.tries || 30)), this.rng = Eu || Math.random, this.dimension = this.shape.length, this.squaredMinDistance = this.minDistance * this.minDistance, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.minDistance / Math.sqrt(this.dimension), this.neighbourhood = Zu(this.dimension), this.currentPoint = null, this.processList = [], this.samplePoints = [], this.gridShape = [];
          for (var ju = 0; ju < this.dimension; ju++) this.gridShape.push(Math.ceil(this.shape[ju] / this.cellSize));
          this.grid = su(this.gridShape)
        }
        lu.prototype.shape = null, lu.prototype.dimension = null, lu.prototype.minDistance = null, lu.prototype.maxDistance = null, lu.prototype.minDistancePlusEpsilon = null, lu.prototype.squaredMinDistance = null, lu.prototype.deltaDistance = null, lu.prototype.cellSize = null, lu.prototype.maxTries = null, lu.prototype.rng = null, lu.prototype.neighbourhood = null, lu.prototype.currentPoint = null, lu.prototype.processList = null, lu.prototype.samplePoints = null, lu.prototype.gridShape = null, lu.prototype.grid = null, lu.prototype.addRandomPoint = function() {
          for (var uu = new Array(this.dimension), Eu = 0; Eu < this.dimension; Eu++) uu[Eu] = this.rng() * this.shape[Eu];
          return this.directAddPoint(uu)
        }, lu.prototype.addPoint = function(uu) {
          var Eu, ju = !0;
          if (uu.length === this.dimension)
            for (Eu = 0; Eu < this.dimension && ju; Eu++) ju = uu[Eu] >= 0 && uu[Eu] <= this.shape[Eu];
          else ju = !1;
          return ju ? this.directAddPoint(uu) : null
        }, lu.prototype.directAddPoint = function(uu) {
          var Eu, ju = 0,
            su = this.grid.stride;
          for (this.processList.push(uu), this.samplePoints.push(uu), Eu = 0; Eu < this.dimension; Eu++) ju += (uu[Eu] / this.cellSize | 0) * su[Eu];
          return this.grid.data[ju] = this.samplePoints.length, uu
        }, lu.prototype.inNeighbourhood = function(uu) {
          var Eu, ju, su, Uu, Zu = this.dimension,
            lu = this.grid.stride;
          for (Eu = 0; Eu < this.neighbourhood.length; Eu++) {
            for (ju = 0, su = 0; su < Zu; su++) {
              if ((Uu = (uu[su] / this.cellSize | 0) + this.neighbourhood[Eu][su]) < 0 || Uu >= this.gridShape[su]) {
                ju = -1;
                break
              }
              ju += Uu * lu[su]
            }
            if (-1 !== ju && 0 !== this.grid.data[ju] && Xu(uu, this.samplePoints[this.grid.data[ju] - 1]) < this.squaredMinDistance) return !0
          }
          return !1
        }, lu.prototype.next = function() {
          for (var uu, Eu, ju, su, Zu, Xu, lu; this.processList.length > 0;) {
            for (null === this.currentPoint && (this.currentPoint = this.processList.shift()), su = this.currentPoint, uu = 0; uu < this.maxTries; uu++) {
              for (Xu = !0, ju = this.minDistancePlusEpsilon + this.deltaDistance * this.rng(), 2 === this.dimension ? (Eu = this.rng() * Math.PI * 2, Zu = [Math.cos(Eu), Math.sin(Eu)]) : Zu = Uu(this.dimension, this.rng), lu = 0; Xu && lu < this.dimension; lu++) Zu[lu] = su[lu] + Zu[lu] * ju, Xu = Zu[lu] >= 0 && Zu[lu] < this.shape[lu];
              if (Xu && !this.inNeighbourhood(Zu)) return this.directAddPoint(Zu)
            }
            uu === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, lu.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, lu.prototype.getAllPoints = function() {
          return this.samplePoints
        }, lu.prototype.getAllPointsWithDistance = function() {
          throw new Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation")
        }, lu.prototype.reset = function() {
          var uu = this.grid.data,
            Eu = 0;
          for (Eu = 0; Eu < uu.length; Eu++) uu[Eu] = 0;
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, uu.exports = lu
      },
      40040: (uu, Eu, ju) => {
        var su = ju(40012).array,
          Uu = ju(40021),
          Zu = ju(40030);

        function Xu(uu, Eu) {
          for (var ju = 0, su = 0; su < uu.length; su++) ju += Math.pow(uu[su] - Eu[su], 2);
          return Math.sqrt(ju)
        }

        function lu(uu, Eu) {
          if ("function" !== typeof uu.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
          this.shape = uu.shape, this.minDistance = uu.minDistance, this.maxDistance = uu.maxDistance || 2 * uu.minDistance, this.maxTries = Math.ceil(Math.max(1, uu.tries || 30)), this.distanceFunction = uu.distanceFunction, this.bias = Math.max(0, Math.min(1, uu.bias || 0)), this.rng = Eu || Math.random, this.dimension = this.shape.length, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.maxDistance / Math.sqrt(this.dimension), this.neighbourhood = Zu(this.dimension), this.currentPoint = null, this.currentDistance = 0, this.processList = [], this.samplePoints = [], this.sampleDistance = [], this.gridShape = [];
          for (var ju = 0; ju < this.dimension; ju++) this.gridShape.push(Math.ceil(this.shape[ju] / this.cellSize));
          this.grid = su(this.gridShape)
        }
        lu.prototype.shape = null, lu.prototype.dimension = null, lu.prototype.minDistance = null, lu.prototype.maxDistance = null, lu.prototype.minDistancePlusEpsilon = null, lu.prototype.deltaDistance = null, lu.prototype.cellSize = null, lu.prototype.maxTries = null, lu.prototype.distanceFunction = null, lu.prototype.bias = null, lu.prototype.rng = null, lu.prototype.neighbourhood = null, lu.prototype.currentPoint = null, lu.prototype.currentDistance = null, lu.prototype.processList = null, lu.prototype.samplePoints = null, lu.prototype.sampleDistance = null, lu.prototype.gridShape = null, lu.prototype.grid = null, lu.prototype.addRandomPoint = function() {
          for (var uu = new Array(this.dimension), Eu = 0; Eu < this.dimension; Eu++) uu[Eu] = this.rng() * this.shape[Eu];
          return this.directAddPoint(uu)
        }, lu.prototype.addPoint = function(uu) {
          var Eu, ju = !0;
          if (uu.length === this.dimension)
            for (Eu = 0; Eu < this.dimension && ju; Eu++) ju = uu[Eu] >= 0 && uu[Eu] <= this.shape[Eu];
          else ju = !1;
          return ju ? this.directAddPoint(uu) : null
        }, lu.prototype.directAddPoint = function(uu) {
          var Eu, ju = 0,
            su = this.grid.stride,
            Uu = this.samplePoints.length;
          for (this.processList.push(Uu), this.samplePoints.push(uu), this.sampleDistance.push(this.distanceFunction(uu)), Eu = 0; Eu < this.dimension; Eu++) ju += (uu[Eu] / this.cellSize | 0) * su[Eu];
          return this.grid.data[ju].push(Uu), uu
        }, lu.prototype.inNeighbourhood = function(uu) {
          var Eu, ju, su, Uu, Zu, lu, qu = this.dimension,
            fu = this.grid.stride,
            Cu = this.distanceFunction(uu);
          for (Eu = 0; Eu < this.neighbourhood.length; Eu++) {
            for (ju = 0, su = 0; su < qu; su++) {
              if ((Uu = (uu[su] / this.cellSize | 0) + this.neighbourhood[Eu][su]) < 0 || Uu >= this.gridShape[su]) {
                ju = -1;
                break
              }
              ju += Uu * fu[su]
            }
            if (-1 !== ju && this.grid.data[ju].length > 0)
              for (var bu = 0; bu < this.grid.data[ju].length; bu++) {
                Zu = this.samplePoints[this.grid.data[ju][bu]], lu = this.sampleDistance[this.grid.data[ju][bu]];
                var cu = Math.min(lu, Cu),
                  Nu = cu + (Math.max(lu, Cu) - cu) * this.bias;
                if (Xu(uu, Zu) < this.minDistance + this.deltaDistance * Nu) return !0
              }
          }
          return !1
        }, lu.prototype.next = function() {
          for (var uu, Eu, ju, su, Zu, Xu, lu, qu; this.processList.length > 0;) {
            if (null === this.currentPoint) {
              var fu = this.processList.shift();
              this.currentPoint = this.samplePoints[fu], this.currentDistance = this.sampleDistance[fu]
            }
            for (su = this.currentPoint, Zu = this.currentDistance, uu = 0; uu < this.maxTries; uu++) {
              for (lu = !0, ju = this.minDistancePlusEpsilon + this.deltaDistance * (Zu + (1 - Zu) * this.bias), 2 === this.dimension ? (Eu = this.rng() * Math.PI * 2, Xu = [Math.cos(Eu), Math.sin(Eu)]) : Xu = Uu(this.dimension, this.rng), qu = 0; lu && qu < this.dimension; qu++) Xu[qu] = su[qu] + Xu[qu] * ju, lu = Xu[qu] >= 0 && Xu[qu] < this.shape[qu];
              if (lu && !this.inNeighbourhood(Xu)) return this.directAddPoint(Xu)
            }
            uu === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, lu.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, lu.prototype.getAllPoints = function() {
          return this.samplePoints
        }, lu.prototype.getAllPointsWithDistance = function() {
          var uu, Eu = new Array(this.samplePoints.length),
            ju = 0,
            su = 0;
          for (ju = 0; ju < this.samplePoints.length; ju++) {
            for (uu = new Array(this.dimension + 1), su = 0; su < this.dimension; su++) uu[su] = this.samplePoints[ju][su];
            uu[this.dimension] = this.sampleDistance[ju], Eu[ju] = uu
          }
          return Eu
        }, lu.prototype.reset = function() {
          var uu = this.grid.data,
            Eu = 0;
          for (Eu = 0; Eu < uu.length; Eu++) uu[Eu] = [];
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, uu.exports = lu
      },
      40030: (uu, Eu, ju) => {
        var su = ju(40036);
        var Uu = {};
        uu.exports = function(uu) {
          return Uu[uu] || (Uu[uu] = function(uu) {
            var Eu, ju = su(2, uu),
              Uu = [];
            for (ju = ju.filter((function(Eu) {
                for (var ju = 0, su = 0; su < uu; su++) ju += Math.pow(Math.max(0, Math.abs(Eu[su]) - 1), 2);
                return ju < uu
              })), Eu = 0; Eu < uu; Eu++) Uu.push(0);
            return ju.push(Uu), ju.sort((function(Eu, ju) {
              var su, Uu = 0,
                Zu = 0;
              for (su = 0; su < uu; su++) Uu += Math.pow(Eu[su], 2), Zu += Math.pow(ju[su], 2);
              return Uu < Zu ? -1 : Uu > Zu ? 1 : 0
            })), ju
          }(uu)), Uu[uu]
        }
      },
      40002: (uu, Eu, ju) => {
        var su = ju(40010),
          Uu = ju(40040);

        function Zu(uu, Eu) {
          this.shape = uu.shape, "function" === typeof uu.distanceFunction ? this.implementation = new Uu(uu, Eu) : this.implementation = new su(uu, Eu)
        }
        Zu.prototype.implementation = null, Zu.prototype.addRandomPoint = function() {
          return this.implementation.addRandomPoint()
        }, Zu.prototype.addPoint = function(uu) {
          return this.implementation.addPoint(uu)
        }, Zu.prototype.next = function() {
          return this.implementation.next()
        }, Zu.prototype.fill = function() {
          return this.implementation.fill()
        }, Zu.prototype.getAllPoints = function() {
          return this.implementation.getAllPoints()
        }, Zu.prototype.getAllPointsWithDistance = function() {
          return this.implementation.getAllPointsWithDistance()
        }, Zu.prototype.reset = function() {
          this.implementation.reset()
        }, uu.exports = Zu
      },
      40021: uu => {
        uu.exports = function(uu, Eu) {
          var ju, su, Uu, Zu, Xu, lu = new Array(uu),
            qu = Math.floor(uu / 2) << 1,
            fu = 0;
          for (Xu = 0; Xu < qu; Xu += 2) ju = -2 * Math.log(Eu()), su = Math.sqrt(ju), Uu = 2 * Math.PI * Eu(), fu += ju, lu[Xu] = su * Math.cos(Uu), lu[Xu + 1] = su * Math.sin(Uu);
          if (uu % 2) {
            var Cu = Math.sqrt(-2 * Math.log(Eu())) * Math.cos(2 * Math.PI * Eu());
            lu[uu - 1] = Cu, fu += Math.pow(Cu, 2)
          }
          for (Zu = 1 / Math.sqrt(fu), Xu = 0; Xu < uu; ++Xu) lu[Xu] *= Zu;
          return lu
        }
      },
      40012: uu => {
        uu.exports = {
          integer: function(uu) {
            var Eu, ju = uu.length,
              su = 1,
              Uu = new Array(ju);
            for (Eu = ju; Eu > 0; Eu--) Uu[Eu - 1] = su, su *= uu[Eu - 1];
            return {
              stride: Uu,
              data: new Uint32Array(su)
            }
          },
          array: function(uu) {
            var Eu, ju, su = uu.length,
              Uu = 1,
              Zu = new Array(su),
              Xu = [];
            for (Eu = su; Eu > 0; Eu--) Zu[Eu - 1] = Uu, Uu *= uu[Eu - 1];
            for (ju = 0; ju < Uu; ju++) Xu.push([]);
            return {
              stride: Zu,
              data: Xu
            }
          }
        }
      },
      38123: (uu, Eu, ju) => {
        var su = ju(38126);

        function Uu(uu) {
          for (var Eu, ju, Uu = 0, Zu = uu.length, Xu = 0; Xu < uu.length;) {
            for (Eu = uu[Xu], ju = 0; Xu < Zu && uu[Xu] === Eu;) ++Xu, ++ju;
            Uu += su.log2(ju) / 7 | 0, Uu += su.log2(Eu >>> 0) / 7 | 0, Uu += 2
          }
          return Uu
        }
        Eu.size = Uu, Eu.encode = function(uu, Eu) {
          Eu || (Eu = new Uint8Array(Uu(uu)));
          for (var ju, su, Zu = 0, Xu = Eu.length, lu = 0; lu < uu.length;) {
            for (ju = uu[lu], su = 0; lu < uu.length && uu[lu] === ju;) ++lu, ++su;
            for (; Zu < Xu && su >= 128;) Eu[Zu++] = 128 + (127 & su), su >>>= 7;
            if (Zu >= Xu) throw new Error("RLE buffer overflow");
            for (Eu[Zu++] = su, ju >>>= 0; Zu < Xu && ju >= 128;) Eu[Zu++] = 128 + (127 & ju), ju >>>= 7;
            if (Zu >= Xu) throw new Error("RLE buffer overflow");
            Eu[Zu++] = ju
          }
          return Eu
        }, Eu.decode = function(uu, Eu) {
          for (var ju, su, Uu, Zu, Xu = Eu.length, lu = uu.length, qu = 0, fu = 0; fu < lu;) {
            for (ju = 0, su = 0; fu < lu && uu[fu] >= 128;) ju += (127 & uu[fu++]) << su, su += 7;
            if (ju += uu[fu++] << su, fu >= lu) throw new Error("RLE buffer underrun");
            if (qu + ju > Xu) throw new Error("Chunk buffer overflow");
            for (Uu = 0, su = 0; fu < lu && uu[fu] >= 128;) Uu += (127 & uu[fu++]) << su, su += 7;
            if (fu >= lu) throw new Error("RLE buffer underrun");
            for (Uu += uu[fu++] << su, Zu = 0; Zu < ju; ++Zu) Eu[qu++] = Uu
          }
          return Eu
        }
      },
      38126: (uu, Eu) => {
        function ju(uu) {
          var Eu = 32;
          return (uu &= -uu) && Eu--, 65535 & uu && (Eu -= 16), 16711935 & uu && (Eu -= 8), 252645135 & uu && (Eu -= 4), 858993459 & uu && (Eu -= 2), 1431655765 & uu && (Eu -= 1), Eu
        }
        Eu.INT_BITS = 32, Eu.INT_MAX = 2147483647, Eu.INT_MIN = -1 << 31, Eu.sign = function(uu) {
          return (uu > 0) - (uu < 0)
        }, Eu.abs = function(uu) {
          var Eu = uu >> 31;
          return (uu ^ Eu) - Eu
        }, Eu.min = function(uu, Eu) {
          return Eu ^ (uu ^ Eu) & -(uu < Eu)
        }, Eu.max = function(uu, Eu) {
          return uu ^ (uu ^ Eu) & -(uu < Eu)
        }, Eu.isPow2 = function(uu) {
          return !(uu & uu - 1) && !!uu
        }, Eu.log2 = function(uu) {
          var Eu, ju;
          return Eu = (uu > 65535) << 4, Eu |= ju = ((uu >>>= Eu) > 255) << 3, Eu |= ju = ((uu >>>= ju) > 15) << 2, (Eu |= ju = ((uu >>>= ju) > 3) << 1) | (uu >>>= ju) >> 1
        }, Eu.log10 = function(uu) {
          return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
        }, Eu.popCount = function(uu) {
          return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
        }, Eu.countTrailingZeros = ju, Eu.nextPow2 = function(uu) {
          return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
        }, Eu.prevPow2 = function(uu) {
          return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
        }, Eu.parity = function(uu) {
          return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
        };
        var su = new Array(256);
        ! function(uu) {
          for (var Eu = 0; Eu < 256; ++Eu) {
            var ju = Eu,
              su = Eu,
              Uu = 7;
            for (ju >>>= 1; ju; ju >>>= 1) su <<= 1, su |= 1 & ju, --Uu;
            uu[Eu] = su << Uu & 255
          }
        }(su), Eu.reverse = function(uu) {
          return su[255 & uu] << 24 | su[uu >>> 8 & 255] << 16 | su[uu >>> 16 & 255] << 8 | su[uu >>> 24 & 255]
        }, Eu.interleave2 = function(uu, Eu) {
          return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Eu = 1431655765 & ((Eu = 858993459 & ((Eu = 252645135 & ((Eu = 16711935 & ((Eu &= 65535) | Eu << 8)) | Eu << 4)) | Eu << 2)) | Eu << 1)) << 1
        }, Eu.deinterleave2 = function(uu, Eu) {
          return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Eu & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
        }, Eu.interleave3 = function(uu, Eu, ju) {
          return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Eu = 1227133513 & ((Eu = 3272356035 & ((Eu = 251719695 & ((Eu = 4278190335 & ((Eu &= 1023) | Eu << 16)) | Eu << 8)) | Eu << 4)) | Eu << 2)) << 1) | (ju = 1227133513 & ((ju = 3272356035 & ((ju = 251719695 & ((ju = 4278190335 & ((ju &= 1023) | ju << 16)) | ju << 8)) | ju << 4)) | ju << 2)) << 2
        }, Eu.deinterleave3 = function(uu, Eu) {
          return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Eu & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
        }, Eu.nextCombination = function(uu) {
          var Eu = uu | uu - 1;
          return Eu + 1 | (~Eu & -~Eu) - 1 >>> ju(uu) + 1
        }
      },
      39953: (uu, Eu, ju) => {
        ju.d(Eu, {
          c: () => CE
        });
        var su = ju(39974),
          Uu = ju(39963),
          Zu = ju(40054);

        function Xu(uu) {
          let Eu = 2166136261;
          for (let ju = 0; ju < uu.length; ju++) Eu = Math.imul(Eu ^ uu.charCodeAt(ju), 16777619);
          return Eu
        }

        function lu(uu) {
          return Xu(`${uu}Wasteland`)
        }

        function qu(uu, Eu, ju) {
          let su = Math.imul(uu, 668265261) ^ Math.imul(Eu, 374761393) ^ ju;
          return su = Math.imul(su ^ su >>> 15, 2246822507), su = Math.imul(su ^ su >>> 13, 3266489909), su ^= su >>> 16, (su >>> 0) / 4294967296
        }

        function fu(uu, Eu, ju, su) {
          return qu(uu, ju, su ^ Math.imul(Eu, 1540483477))
        }
        const Cu = {
          dustFlats: 30,
          scorchedMesa: 18,
          shatteredHighlands: 14,
          ruinFields: 12,
          saltFlats: 7,
          survivorGrove: 5
        };
        const bu = .3,
          cu = 528734635,
          Nu = {
            dustFlats: .75,
            scorchedMesa: bu,
            shatteredHighlands: bu,
            ruinFields: bu,
            saltFlats: bu,
            survivorGrove: 0
          };

        function Ou(uu, Eu, ju) {
          return qu(uu, Eu, ju ^ cu)
        }

        function Yu(uu, Eu, ju, su) {
          return 36 * (1 === su ? uu : Eu) + 2 + Math.floor(32 * qu(uu, Eu, ju ^ cu ^ su))
        }
        var hu = ju(39958),
          Du = ju(39969);
        const gu = 160,
          Mu = 10,
          eu = 3 * (Math.ceil(50 / 6) + 1) + 2 + Mu,
          Gu = .9238795325112867,
          pu = .7071067811865476,
          wu = .3826834323650898,
          Ju = [
            [1, 0],
            [Gu, wu],
            [pu, pu],
            [wu, Gu]
          ].flatMap((uu => {
            let [Eu, ju] = uu;
            return [
              [Eu, ju],
              [-ju, Eu],
              [-Eu, -ju],
              [ju, -Eu]
            ]
          }));
        let du = null,
          au = null,
          Pu = 0;

        function ou(uu, Eu, ju) {
          ! function(uu) {
            uu !== du && (du = uu, au = (0, hu.g)(uu), Pu = lu(uu))
          }(uu);
          const su = 625341585 ^ Pu,
            Uu = gu - 2 * eu,
            Zu = Eu * gu + eu + Math.floor(qu(Eu, ju, 1 ^ su) * Uu),
            Xu = ju * gu + eu + Math.floor(qu(Eu, ju, 2 ^ su) * Uu),
            fu = Math.round(-8 + au.getOctaves(Zu, Xu)),
            Cu = -46 + Math.floor(7 * qu(Eu, ju, 3 ^ su)),
            bu = fu - Cu;
          if (bu < 20 || bu > 50) return null;
          const cu = Math.ceil(bu / 6);
          return {
            x: Zu,
            z: Xu,
            topY: fu,
            floorY: Cu,
            turns: cu,
            pitch: bu / cu,
            radius: 3 * (cu + 1) + 2
          }
        }

        function ku(uu, Eu, ju, su) {
          const Uu = ou(uu, Eu, ju);
          if (!Uu || "saltFlats" !== su(Uu.x, Uu.z)) return null;
          const Zu = Uu.radius + Mu + 2;
          for (const [Xu, lu] of Ju)
            for (const uu of [Zu, Zu / 2])
              if ("saltFlats" !== su(Math.round(Uu.x + Xu * uu), Math.round(Uu.z + lu * uu))) return null;
          return Uu
        }

        function mu(uu, Eu, ju, su) {
          const Uu = Eu - uu.x,
            Zu = ju - uu.z,
            Xu = Math.sqrt(Uu * Uu + Zu * Zu);
          if (Xu >= uu.radius + Mu) return null;
          if (Xu >= uu.radius) {
            const Eu = Xu - uu.radius,
              ju = Math.floor(Eu),
              Uu = Math.min(Math.max(su, uu.topY - ju), uu.topY + ju);
            return Uu + Math.round((su - Uu) * Eu / Mu)
          }
          const lu = function(uu, Eu) {
              const ju = Math.abs(uu),
                su = Math.abs(Eu);
              if (0 === ju && 0 === su) return 0;
              const Uu = Math.min(ju, su) / Math.max(ju, su);
              let Zu = Uu * (Math.PI / 4 + .273 * (1 - Uu)) / (2 * Math.PI);
              return su > ju && (Zu = .25 - Zu), uu < 0 && (Zu = .5 - Zu), Eu < 0 ? 1 - Zu : Zu
            }(Uu, Zu),
            qu = (uu.radius - Xu) / 3 - lu,
            fu = Math.floor(qu);
          if (fu < 0) return uu.topY;
          if (fu >= uu.turns) return uu.floorY;
          const Cu = 3 * (qu - fu) >= 2 ? 1 : 0;
          return Math.round(uu.topY - uu.pitch * (fu + lu)) + Cu
        }

        function vu(uu, Eu, ju) {
          const su = uu.radius + Mu,
            Uu = Eu - uu.x,
            Zu = ju - uu.z;
          return Uu * Uu + Zu * Zu < su * su
        }
        const Ku = ["White Baked Clay", "Clay", "Sand", "Light Gray Baked Clay", "Clay", "White Baked Clay", "Andesite", "Light Gray Baked Clay", "Stone", "Andesite", "Stone"],
          Vu = ["Chalk", "Sand", "Clay"],
          ru = -40,
          Qu = -20,
          iu = .05;
        class Wu {
          constructor(uu, Eu, ju, su) {
            this.seed = uu, this.fine = ju, this.lookAt = su, this.salt = void 0, this.cells = new Map, this.lastCellX = NaN, this.lastCellZ = NaN, this.lastHole = null, this.upperBandIds = void 0, this.bandIds = void 0, this.copperId = void 0, this.clayId = void 0, this.gravelId = void 0, this.salt = lu(uu);
            const Uu = uu => Eu[uu].id;
            this.upperBandIds = Vu.map(Uu), this.bandIds = Ku.map(Uu), this.copperId = Uu("Copper Ore"), this.clayId = Uu("Clay"), this.gravelId = Uu("Gravel")
          }
          carveGround(uu, Eu, ju) {
            const su = this.cellHole(uu, Eu);
            return su ? mu(su, uu, Eu, ju) : null
          }
          taking(uu, Eu) {
            const ju = this.cellHole(uu, Eu);
            return ju && vu(ju, uu, Eu) ? ju : null
          }
          clearsPrefab(uu, Eu, ju, su, Uu) {
            const Zu = ju + eu;
            for (let Xu = Math.floor((uu - Zu) / gu); Xu <= Math.floor((uu + Zu) / gu); Xu++)
              for (let lu = Math.floor((Eu - Zu) / gu); lu <= Math.floor((Eu + Zu) / gu); lu++) {
                const Zu = this.holeIn(Xu, lu);
                if (Zu && Uu >= Zu.floorY - Du.h && su <= Zu.topY + Mu) {
                  const su = Zu.radius + Mu + ju;
                  if ((Zu.x - uu) ** 2 + (Zu.z - Eu) ** 2 < su * su) return !1
                }
              }
            return !0
          }
          wallBlock(uu, Eu, ju, su) {
            const Uu = this.taking(uu, ju);
            if (!Uu || su >= Uu.topY) return 0;
            if (Eu === su && Eu <= Uu.floorY) return this.fine(uu, ju) > .2 ? this.clayId : this.gravelId;
            if (Eu >= ru && Eu <= Qu && fu(uu, Eu, ju, 1779033703 ^ this.salt) < iu) return this.copperId;
            const Zu = Math.floor((-10 - Eu - Math.round(this.fine(uu, ju))) / 3);
            return Zu < 0 ? this.upperBandIds[-Zu % this.upperBandIds.length] : this.bandIds[Math.min(Zu, this.bandIds.length - 1)]
          }
          cellHole(uu, Eu) {
            return this.holeIn(Math.floor(uu / gu), Math.floor(Eu / gu))
          }
          holeIn(uu, Eu) {
            if (uu === this.lastCellX && Eu === this.lastCellZ) return this.lastHole;
            const ju = 65536 * uu + Eu;
            let su = this.cells.get(ju);
            return void 0 === su && (this.cells.size >= 4096 && this.cells.clear(), su = ku(this.seed, uu, Eu, this.lookAt), this.cells.set(ju, su)), this.lastCellX = uu, this.lastCellZ = Eu, this.lastHole = su, su
          }
        }
        var Su = ju(39989);
        const Iu = new Set(["rock", "rubble", "dryCactus", "bone"]);
        class Fu {
          constructor(uu, Eu, ju, su, Uu, Zu) {
            this.hO = Eu, this.chances = Uu, this.mound = Zu, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ju.salt ^ Xu(su), this.sinkholes = ju.sinkholes;
            const lu = Eu => uu[Eu].id;
            this.ids = {
              deadBush: lu("Dead Bush"),
              rock1: lu("Andesite"),
              rock2: lu("Stone"),
              rock3: lu("Messy Stone"),
              rubble1: lu("Mossy Messy Stone"),
              rubble2: lu("Cracked Stone Bricks"),
              rubble3: lu("Messy Stone"),
              dryCactus: lu("Dry Fat Cactus"),
              bone: lu("Bone Block"),
              grass: lu("Grass"),
              tallGrass: lu("Tall Grass"),
              tallGrassTop: lu("Tall Grass|Top")
            }
          }
          addBiomeFloraToColumn(uu, Eu, ju, su, Uu, Zu, Xu) {
            const lu = this.mound(su, Zu);
            if (lu) {
              const qu = Xu + 1 - Uu;
              for (let Uu = 0; Uu < lu.height && qu + Uu < this.hO; Uu++) qu + Uu >= 0 && uu.set(su - Eu, qu + Uu, Zu - ju, lu.block);
              return
            }
            const fu = qu(su, Zu, this.salt);
            let Cu = 0;
            for (const cu of this.order) {
              var bu;
              if (Cu += null !== (bu = this.chances[cu]) && void 0 !== bu ? bu : 0, fu < Cu) return void(Iu.has(cu) && this.sinkholes.taking(su, Zu) || this.place(uu, su - Eu, Xu + 1 - Uu, Zu - ju, cu, qu(su, Zu, 1540483477 ^ this.salt)))
            }
          }
          place(uu, Eu, ju, su, Uu, Zu) {
            const Xu = (Uu, Zu) => {
                ju + Uu >= 0 && ju + Uu < this.hO && uu.set(Eu, ju + Uu, su, Zu)
              },
              lu = this.ids;
            if ("rock" === Uu) {
              const uu = Zu < .5 ? lu.rock1 : Zu < .8 ? lu.rock2 : lu.rock3;
              Xu(0, uu), Zu < .3 && Xu(1, uu)
            } else "rubble" === Uu ? Xu(0, Zu < .55 ? lu.rubble1 : Zu < .75 ? lu.rubble2 : lu.rubble3) : "dryCactus" === Uu ? (Xu(0, lu.dryCactus), Zu < .5 && Xu(1, lu.dryCactus)) : "tallGrass" === Uu ? (Xu(0, lu.tallGrass), Xu(1, lu.tallGrassTop)) : Xu(0, lu[Uu])
          }
        }
        class Bu extends Su.g {
          constructor(uu, Eu, ju, su, Uu, Zu) {
            super(uu, Eu, ju, su, Uu, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null), this.noise = Zu, this.grassChance = 0, this.tallGrassChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = null, this.maxFloraHeight = 3, this.waterKept = .25, this.maxSurfacePrefabRelief = 6, this.floraChances = void 0, this.canyonStrength = 1, this.canyonDepth = 26, this.outcropChance = void 0, this.ids = void 0;
            const Xu = {};
            for (const lu of ["Dry Grass Block", "Overgrown Dry Grass Block", "Grass Block", "Dirt", "Messy Dirt", "Rocky Dirt", "Gravel", "Sand", "Red Sand", "Clay", "Chalk", "Stone", "Andesite", "Messy Stone", "Mossy Messy Stone", "Cracked Stone Bricks", "Baked Clay", "Orange Baked Clay", "Brown Baked Clay", "Red Baked Clay", "Yellow Baked Clay", "Light Gray Baked Clay", "White Baked Clay", "Copper Ore", "Gold Ore", "Coal Ore", "Iron Ore"]) Xu[lu] = Eu[lu].id;
            this.ids = Xu, this.lowsoilBlockType = Xu.Dirt
          }
          init() {
            super.init(), this.floraGenerator = new Fu(this.blockMetadata, this.hO, this.noise, this.seed, this.floraChances, ((uu, Eu) => this.mound(uu, Eu)))
          }
          getHeightmapVal(uu, Eu) {
            const ju = this.getGroundHeight(uu, Eu);
            return this.canyonStrength > 0 ? ju - this.canyonStrength * this.canyonDepth * this.noise.canyonDepth(uu, Eu) : ju
          }
          carveGround(uu, Eu, ju) {
            return this.noise.sinkholes.carveGround(uu, Eu, ju)
          }
          allowsPrefab(uu, Eu, ju, su, Uu) {
            return this.noise.sinkholes.clearsPrefab(uu, Eu, ju, su, Uu)
          }
          getTopsoilBlock(uu, Eu, ju) {
            const su = this.noise.sinkholes.wallBlock(uu, Eu, ju, Eu);
            return su || (this.outcropDistance(uu, ju) <= 2 ? function(uu, Eu, ju, su) {
              return fu(uu, Eu, ju, su ^ cu) < .85
            }(uu, Eu, ju, this.noise.salt) ? this.ids["Copper Ore"] : this.ids.Andesite : this.soilTop(uu, Eu, ju))
          }
          soilTop(uu, Eu, ju) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(uu, Eu, ju, su) {
            const Uu = this.noise.sinkholes.wallBlock(uu, Eu, ju, su);
            return Uu || (Eu >= su - 2 && this.outcropDistance(uu, ju) <= 1 ? this.ids["Copper Ore"] : this.soilBelow(uu, Eu, ju, su))
          }
          soilBelow(uu, Eu, ju, su) {
            return this.copperSeam(uu, Eu, ju) || this.lowsoilBlockType
          }
          outcropDistance(uu, Eu) {
            const ju = function(uu, Eu, ju, su) {
              const Uu = Math.floor(uu / 36),
                Zu = Math.floor(Eu / 36);
              return Ou(Uu, Zu, ju) >= su ? 1 / 0 : Math.abs(uu - Yu(Uu, Zu, ju, 1)) + Math.abs(Eu - Yu(Uu, Zu, ju, 2))
            }(uu, Eu, this.noise.salt, this.outcropChance);
            return ju <= 2 && this.noise.sinkholes.taking(uu, Eu) ? 1 / 0 : ju
          }
          mound(uu, Eu) {
            const ju = function(uu, Eu, ju, su) {
              return 0 === su || 1 === su && qu(uu, Eu, ju ^ cu ^ 3) < .5 ? 2 - su : 0
            }(uu, Eu, this.noise.salt, this.outcropDistance(uu, Eu));
            return ju > 0 ? {
              block: this.ids["Copper Ore"],
              height: ju
            } : null
          }
          copperSeam(uu, Eu, ju) {
            return function(uu, Eu, ju, su, Uu) {
              const Zu = 1013904242 ^ su;
              if ((7 & Eu) !== (7 & Zu) || fu(uu >> 3, Eu, ju >> 3, Zu) >= .5) return !1;
              const Xu = Uu(uu, ju);
              return Xu > .05 && Xu < .95 && fu(uu, Eu, ju, Zu) < .75
            }(uu, Eu, ju, this.noise.salt, ((uu, Eu) => this.noise.canyonDepth(uu, Eu))) ? this.ids["Copper Ore"] : 0
          }
          getDryBedBlock(uu, Eu, ju) {
            const su = this.noise.patch(uu + 900, ju);
            return su > .45 ? this.ids.Sand : su < -.6 ? this.ids.Clay : this.ids.Gravel
          }
        }

        function Lu(uu) {
          return uu < 0 ? 0 : uu > 1 ? 1 : uu
        }
        class tu {
          constructor(uu, Eu, ju) {
            this.salt = void 0, this.sinkholes = void 0, this.canyon = void 0, this.canyonWarp = void 0, this.canyonMask = void 0, this.patchNoise = void 0, this.fineNoise = void 0, this.canyonAtX = NaN, this.canyonAtZ = NaN, this.canyonAt = 0, this.salt = lu(uu), this.sinkholes = new Wu(uu, Eu, ((uu, Eu) => this.fine(uu, Eu)), ((uu, Eu) => {
              return su = ju(uu, Eu), Object.hasOwn(Cu, su.key) ? su.key : null;
              var su
            })), this.canyon = new Uu.l([{
              amplitude: 1,
              frequency: 1 / 260
            }], `${uu}WastelandCanyon`), this.canyonWarp = new Uu.l([{
              amplitude: 28,
              frequency: 1 / 90
            }], `${uu}WastelandCanyonWarp`), this.canyonMask = new Uu.l([{
              amplitude: 1,
              frequency: 1 / 650
            }], `${uu}WastelandCanyonMask`), this.patchNoise = new Uu.l([{
              amplitude: 1,
              frequency: 1 / 48
            }, {
              amplitude: .4,
              frequency: 1 / 14
            }], `${uu}WastelandPatch`), this.fineNoise = new Uu.l([{
              amplitude: .75,
              frequency: 1 / 16
            }, {
              amplitude: .25,
              frequency: .2
            }], `${uu}WastelandFine`)
          }
          canyonDepth(uu, Eu) {
            if (uu === this.canyonAtX && Eu === this.canyonAtZ) return this.canyonAt;
            let ju = 0;
            const su = Lu(2.5 * (this.canyonMask.getOctaves(uu, Eu) + .15));
            if (su > 0) {
              const Uu = Math.abs(this.canyon.getOctaves(uu + this.canyonWarp.getOctaves(uu, Eu), Eu + this.canyonWarp.getOctaves(uu + 311, Eu - 173))),
                Zu = .09 * su;
              if (Uu < Zu) {
                const uu = Lu((Zu - Uu) / (.45 * Zu));
                ju = uu * uu * (3 - 2 * uu)
              }
            }
            return this.canyonAtX = uu, this.canyonAtZ = Eu, this.canyonAt = ju, ju
          }
          patch(uu, Eu) {
            return this.patchNoise.getOctaves(uu, Eu)
          }
          fine(uu, Eu) {
            return this.fineNoise.getOctaves(uu, Eu)
          }
        }
        var xu = ju(4432),
          Tu = ju(649),
          Hu = ju(39448),
          Au = ju(39983);
        const nu = "oldWorks";

        function yu(uu) {
          return Uint8Array.from(atob(uu), (uu => uu.charCodeAt(0)))
        }
        let zu = null;

        function Ru() {
          return zu ??= function() {
            const uu = new Hu.d;
            return uu.set(0, 0, 0, yu("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")), uu.set(0, 1, 0, yu("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new Au.e(nu, {
              x: 0,
              y: 0,
              z: 0
            }, {
              x: 29,
              y: 40,
              z: 29
            }, uu)
          }(), zu
        }
        const uE = 3,
          EE = 6,
          jE = {
            name: nu,
            get schematic() {
              return Ru()
            },
            groundingPoints: [{
              localX: 5,
              localZ: 5
            }, {
              localX: 5,
              localZ: 23
            }, {
              localX: 23,
              localZ: 5
            }, {
              localX: 23,
              localZ: 23
            }],
            groundingRadius: 4,
            clearingRadiusSquared: 324,
            undergroundYInterval: null,
            yOffset: -16,
            transformationsEnabled: !0,
            chestLocations: [{
              localX: 7,
              localY: 2,
              localZ: 18,
              qualityDistribution: new xu.d([{
                value: Tu.h.UNCOMMON,
                weight: 1
              }, {
                value: Tu.h.RARE,
                weight: 2
              }, {
                value: Tu.h.EPIC,
                weight: 1
              }])
            }],
            spawnerBlockLocations: [{
              localX: 10,
              localY: 2,
              localZ: 16,
              mobTypeDistribution: new xu.d([{
                value: "Draugr Zombie",
                weight: 1
              }])
            }]
          };

        function sE(uu, Eu, ju) {
          return (0, Su.lb)(uu, [{
            prefab: jE,
            frequency: ju
          }, ...Su.f.map((uu => ({
            prefab: uu,
            frequency: Eu
          })))])
        }
        class UE extends Bu {
          constructor(uu, Eu, ju, Zu, Xu, lu) {
            super(uu, Eu, ju, `${Zu}DustFlats`, Xu, lu, sE(su.n.MEDIUM, 1.25, uE)), this.key = "dustFlats", this.floraChances = {
              deadBush: .012,
              rock: .0015,
              bone: 2e-4
            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = Nu.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new Uu.l([{
              amplitude: 5,
              frequency: 1 / 90
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${Zu}DustFlatsHeight`)
          }
          getGroundHeight(uu, Eu) {
            return -2 + this.height.getOctaves(uu, Eu)
          }
          soilTop(uu, Eu, ju) {
            const su = this.noise.patch(uu, ju);
            if (su > .45) return this.ids.Gravel;
            if (su < -.55) return this.ids.Sand;
            const Uu = this.noise.fine(uu, ju);
            return Uu > .3 ? this.ids["Messy Dirt"] : Uu < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
        }
        class ZE extends Bu {
          constructor(uu, Eu, ju, su, Zu, Xu) {
            super(uu, Eu, ju, `${su}ScorchedMesa`, Zu, Xu), this.key = "scorchedMesa", this.floraChances = {
              deadBush: .015,
              dryCactus: .0012,
              rock: 8e-4
            }, this.outcropChance = Nu.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new Uu.l([{
              amplitude: 40,
              frequency: 1 / 300
            }, {
              amplitude: 12,
              frequency: 1 / 80
            }], `${su}ScorchedMesaHeight`);
            const lu = this.ids;
            this.bandPalette = [lu["Orange Baked Clay"], lu["Baked Clay"], lu["Orange Baked Clay"], lu["Brown Baked Clay"], lu["Red Baked Clay"], lu["Orange Baked Clay"], lu["Yellow Baked Clay"], lu["Baked Clay"], lu["Light Gray Baked Clay"], lu["Red Baked Clay"], lu["White Baked Clay"], lu["Brown Baked Clay"]]
          }
          getGroundHeight(uu, Eu) {
            const ju = this.height.getOctaves(uu, Eu) + 8;
            if (ju <= 6) return .6 * ju;
            const su = (ju - 6) / 9,
              Uu = Math.floor(su);
            return 3.6 + 9 * (Uu + Lu((su - Uu - .7) / .3)) * 1.5
          }
          soilTop(uu, Eu, ju) {
            return Eu >= 12 ? this.ids["Red Sand"] : this.noise.fine(uu, ju) > .45 ? this.ids["Messy Dirt"] : this.ids["Red Sand"]
          }
          soilBelow(uu, Eu, ju, su) {
            return Eu >= su - 1 ? this.ids["Red Sand"] : this.getStrataBlock(uu, Eu, ju, su) || this.lowsoilBlockType
          }
          getStrataBlock(uu, Eu, ju, su) {
            if (Eu < -8) return 0;
            const Uu = this.noise.patch(.25 * uu, .25 * ju),
              Zu = Math.floor((Eu + 4 * Uu) / 3);
            return function(uu, Eu, ju, su, Uu, Zu, Xu) {
              const lu = 1541459225 ^ su;
              return Uu > .15 && Eu >= Xu - 16 && qu(Zu, 1, lu) < .25 && fu(uu, Eu, ju, lu) < .06
            }(uu, Eu, ju, this.noise.salt, Uu, Zu, su) ? this.ids["Gold Ore"] : this.bandPalette[Math.floor(qu(Zu, 0, this.noise.salt) * this.bandPalette.length)]
          }
          getDryBedBlock(uu, Eu, ju) {
            return this.ids["Red Sand"]
          }
        }
        class XE extends Bu {
          constructor(uu, Eu, ju, su, Zu, Xu) {
            super(uu, Eu, ju, `${su}ShatteredHighlands`, Zu, Xu), this.key = "shatteredHighlands", this.floraChances = {
              deadBush: .006,
              rock: .004
            }, this.outcropChance = Nu.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new Uu.l([{
              amplitude: 60,
              frequency: 1 / 240
            }], `${su}HighlandsRidge1`), this.ridge2 = new Uu.l([{
              amplitude: 25,
              frequency: 1 / 110
            }], `${su}HighlandsRidge2`), this.bumps = new Uu.l([{
              amplitude: 6,
              frequency: .02
            }], `${su}HighlandsBumps`)
          }
          getGroundHeight(uu, Eu) {
            return 1.2 * (85 - Math.abs(this.ridge1.getOctaves(uu, Eu)) - Math.abs(this.ridge2.getOctaves(uu, Eu))) - 25 + this.bumps.getOctaves(uu, Eu)
          }
          soilTop(uu, Eu, ju) {
            const su = this.noise.fine(uu, ju);
            return Eu > 58 ? su > .35 ? this.ids.Gravel : su < -.4 ? this.ids.Andesite : this.ids.Stone : Eu > 36 ? su > .25 ? this.ids.Gravel : su < -.45 ? this.ids.Stone : this.ids["Rocky Dirt"] : su > .3 ? this.ids["Messy Dirt"] : su < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
          soilBelow(uu, Eu, ju, su) {
            const Uu = this.peakSeam(uu, Eu, ju);
            return 0 !== Uu ? Uu : Eu > 50 ? this.ids.Stone : Eu > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
          }
          getStrataBlock(uu, Eu, ju, su) {
            return this.peakSeam(uu, Eu, ju)
          }
          peakSeam(uu, Eu, ju) {
            const su = function(uu, Eu, ju, su) {
              if (Eu <= 40 || Eu % 3 !== 0) return null;
              const Uu = 2600822924 ^ su,
                Zu = qu(Eu, 0, Uu),
                Xu = Zu < .4 ? "Coal Ore" : Zu < .7 ? "Iron Ore" : null;
              return null === Xu || fu(uu >> 2, Eu, ju >> 2, Uu) >= .25 ? null : fu(uu, Eu, ju, Uu) < .65 ? Xu : null
            }(uu, Eu, ju, this.noise.salt);
            return su ? this.ids[su] : 0
          }
        }
        class lE extends Bu {
          constructor(uu, Eu, ju, Zu, Xu, lu) {
            super(uu, Eu, ju, `${Zu}RuinFields`, Xu, lu, sE(su.n.HIGH, 2.25, EE)), this.key = "ruinFields", this.floraChances = {
              deadBush: .02,
              rubble: .008,
              rock: .001,
              bone: 3e-4
            }, this.outcropChance = Nu.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new Uu.l([{
              amplitude: 3,
              frequency: 1 / 80
            }, {
              amplitude: 1.5,
              frequency: .04
            }], `${Zu}RuinFieldsHeight`)
          }
          getGroundHeight(uu, Eu) {
            return -3 + this.height.getOctaves(uu, Eu)
          }
          soilTop(uu, Eu, ju) {
            const su = qu(uu, ju, 461845907 ^ this.noise.salt);
            return su < .05 ? this.ids["Mossy Messy Stone"] : su < .08 ? this.ids["Messy Stone"] : su < .09 ? this.ids["Cracked Stone Bricks"] : this.noise.fine(uu, ju) > -.1 ? this.ids["Overgrown Dry Grass Block"] : this.ids["Dry Grass Block"]
          }
        }
        class qE extends Bu {
          constructor(uu, Eu, ju, su, Zu, Xu) {
            super(uu, Eu, ju, `${su}SaltFlats`, Zu, Xu), this.key = "saltFlats", this.floraChances = {
              deadBush: .002,
              bone: 6e-4
            }, this.outcropChance = Nu.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new Uu.l([{
              amplitude: 1.5,
              frequency: 1 / 120
            }, {
              amplitude: .6,
              frequency: .05
            }], `${su}SaltFlatsHeight`)
          }
          getGroundHeight(uu, Eu) {
            return -8 + this.height.getOctaves(uu, Eu)
          }
          soilTop(uu, Eu, ju) {
            const su = this.noise.patch(uu, ju);
            return su > .5 ? this.ids.Sand : su < -.55 ? this.ids.Clay : this.ids.Chalk
          }
          soilBelow(uu, Eu, ju, su) {
            return Eu >= su - 2 ? this.ids.Sand : this.ids.Clay
          }
          getStrataBlock(uu, Eu, ju, su) {
            return this.noise.sinkholes.wallBlock(uu, Eu, ju, su)
          }
        }
        class fE extends Bu {
          constructor(uu, Eu, ju, su, Zu, Xu) {
            super(uu, Eu, ju, `${su}SurvivorGrove`, Zu, Xu), this.key = "survivorGrove", this.floraChances = {
              grass: .12,
              tallGrass: .015,
              deadBush: .004
            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = Nu.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new Uu.l([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${su}SurvivorGroveHeight`)
          }
          getGroundHeight(uu, Eu) {
            return -3 + this.height.getOctaves(uu, Eu)
          }
          soilTop(uu, Eu, ju) {
            return this.noise.fine(uu, ju) < -.6 ? this.ids["Dry Grass Block"] : this.ids["Grass Block"]
          }
          getDryBedBlock(uu, Eu, ju) {
            return this.ids.Dirt
          }
        }
        const CE = {
          buildBiomes: function(uu) {
            let {
              hO: Eu,
              blockMetadata: ju,
              worldGenerator: su,
              seed: Uu,
              biomeOpts: Xu,
              biomeAt: lu
            } = uu;
            const qu = [Eu, ju, su, Uu, Xu, new tu(Uu, ju, lu)],
              fu = {
                dustFlats: new UE(...qu),
                scorchedMesa: new ZE(...qu),
                shatteredHighlands: new XE(...qu),
                ruinFields: new lE(...qu),
                saltFlats: new qE(...qu),
                survivorGrove: new fE(...qu)
              },
              bu = (0, Zu.m)(ju);
            return Object.keys(Cu).map((uu => ({
              biome: fu[uu],
              frequency: Cu[uu],
              altBiome: null,
              ...bu
            })))
          }
        }
      },
      619: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => su
        });
        class su {
          constructor(uu, Eu) {
            this.keyToValueTable = uu, this.valueToKeyTable = void 0;
            const ju = {};
            for (const su in this.keyToValueTable) {
              const uu = this.keyToValueTable[su];
              if (void 0 !== ju[uu]) throw new Error(`Duplicate value found in bi-directional table: ${String(uu)}`);
              ju[uu] = "string" === Eu ? su : Number(su)
            }
            this.valueToKeyTable = ju
          }
          get(uu) {
            return this.keyToValueTable[uu]
          }
          reverseGet(uu) {
            return this.valueToKeyTable[uu]
          }
        }
      },
      39983: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => Uu
        });
        var su = ju(39448);
        class Uu {
          constructor(uu, Eu, ju, Uu) {
            let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new su.d,
              Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                x: 0,
                y: 0,
                z: 0
              },
              lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              qu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            this.name = uu, this.startOffset = Eu, this.dimensions = ju, this.rleChunkStorage = Uu, this.blockData = Zu, this.pasteOffset = Xu, this.lobbyCode = lu, this.disjoint = qu
          }
          getRLEChunk(uu, Eu, ju) {
            return this.rleChunkStorage.get(uu, Eu, ju)
          }
          getNumRLEChunks() {
            return this.rleChunkStorage.getNumItems()
          }* getRLECoords() {
            const uu = [0, 0, 0];
            for (const {
                x: Eu,
                y: ju,
                z: su
              }
              of this.rleChunkStorage) uu[0] = Eu, uu[1] = ju, uu[2] = su, yield uu
          }
        }
      },
      39448: (uu, Eu, ju) => {
        ju.d(Eu, {
          d: () => su
        });
        class su {
          constructor() {
            this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
          }
          set(uu, Eu, ju, su) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const Xu = 1023 & uu | (1023 & Eu) << 10 | (1023 & ju) << 20;
            let lu = su;
            if (Uu(uu) && Uu(Eu) && Uu(ju) || (lu = new Zu(uu, Eu, ju, su), this.hasBoxes = !0), Math.abs(uu) < 512 && Math.abs(Eu) < 512 && Math.abs(ju) < 512) {
              const uu = this.unbox(this.zeroStorage.get(Xu));
              return this.zeroStorage.has(Xu) || this.itemCount++, this.zeroStorage.set(Xu, lu), uu
            }
            const qu = uu >> 10 & 1023 | (Eu >> 10 & 1023) << 10 | (ju >> 10 & 1023) << 20;
            let fu = this.storage.get(qu);
            fu || (fu = new Map, this.storage.set(qu, fu));
            const Cu = this.unbox(fu.get(Xu));
            return fu.has(Xu) || this.itemCount++, fu.set(Xu, lu), Cu
          }
          get(uu, Eu, ju) {
            var su;
            const Uu = 1023 & uu | (1023 & Eu) << 10 | (1023 & ju) << 20;
            if (Math.abs(uu) < 512 && Math.abs(Eu) < 512 && Math.abs(ju) < 512) return this.unbox(this.zeroStorage.get(Uu));
            const Zu = uu >> 10 & 1023 | (Eu >> 10 & 1023) << 10 | (ju >> 10 & 1023) << 20;
            return this.unbox(null === (su = this.storage.get(Zu)) || void 0 === su ? void 0 : su.get(Uu))
          }
          remove(uu, Eu, ju) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const su = 1023 & uu | (1023 & Eu) << 10 | (1023 & ju) << 20;
            if (Math.abs(uu) < 512 && Math.abs(Eu) < 512 && Math.abs(ju) < 512) return void(this.zeroStorage.delete(su) && this.itemCount--);
            const Uu = uu >> 10 & 1023 | (Eu >> 10 & 1023) << 10 | (ju >> 10 & 1023) << 20,
              Zu = this.storage.get(Uu);
            Zu && Zu.delete(su) && this.itemCount--
          }
          removeBy(uu) {
            for (const {
                x: Eu,
                y: ju,
                z: su,
                val: Uu
              }
              of this.iterate(!0)) {
              uu(Eu, ju, su, Uu) && this.remove(Eu, ju, su)
            }
          }
          unbox(uu) {
            return this.hasBoxes && lu(uu) ? uu.val : uu
          }* iterate(uu) {
            const Eu = this.mutationCount;
            for (const ju of qu(this.zeroStorage)) {
              if (!this.zeroStorage.has(ju)) continue;
              const su = this.zeroStorage.get(ju);
              if (this.hasBoxes && lu(su) ? yield {
                  x: su.x,
                  y: su.y,
                  z: su.z,
                  val: su.val
                } : yield {
                  x: ju << 22 >> 22,
                  y: ju << 12 >> 22,
                  z: ju << 2 >> 22,
                  val: su
                }, !uu && Eu !== this.mutationCount) throw new fu
            }
            for (const ju of qu(this.storage)) {
              const su = this.storage.get(ju);
              if (su)
                for (const Uu of qu(su)) {
                  if (!su.has(Uu)) continue;
                  const Zu = su.get(Uu);
                  if (this.hasBoxes && lu(Zu) ? yield {
                      x: Zu.x,
                      y: Zu.y,
                      z: Zu.z,
                      val: Zu.val
                    } : yield {
                      x: ((1023 & ju) << 10 | 1023 & Uu) << 12 >> 12,
                      y: ((ju >> 10 & 1023) << 10 | Uu >> 10 & 1023) << 12 >> 12,
                      z: ((ju >> 20 & 1023) << 10 | Uu >> 20 & 1023) << 12 >> 12,
                      val: Zu
                    }, !uu && Eu !== this.mutationCount) throw new fu
                }
            }
          }
          entries() {
            return Array.from(this.iterate(!0))
          } [Symbol.iterator]() {
            return this.iterate(!1)
          }
          clear() {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask, this.storage.clear(), this.zeroStorage.clear(), this.itemCount = 0, this.hasBoxes = !1
          }
          getNumItems() {
            return this.itemCount
          }
          getMutationCount() {
            return this.mutationCount
          }
          getNumItemsVerySlowly() {
            let uu = 0;
            for (const Eu of this.storage.values()) uu += Eu.size;
            return uu += this.zeroStorage.size, uu
          }
        }

        function Uu(uu) {
          return uu << 12 >> 12 === uu && (0 !== uu || 1 / uu > 0)
        }
        class Zu {
          constructor(uu, Eu, ju, su) {
            this.x = uu, this.y = Eu, this.z = ju, this.val = su, Xu.add(this)
          }
        }
        const Xu = new WeakSet;

        function lu(uu) {
          return "object" === typeof uu && null !== uu && Xu.has(uu)
        }

        function qu(uu) {
          return Array.from(uu.keys()).sort(((uu, Eu) => uu - Eu))
        }
        class fu extends Error {
          constructor() {
            super(`${su.name} has been mutated during iteration`)
          }
        }
      },
      40048: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => su,
          f: () => Xu
        });
        class su {
          constructor(uu, Eu, ju) {
            var su;
            this.name = uu, this.max = Eu, this.idleMs = ju, this.head = new lu(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
            const Uu = setInterval((() => {
              this.dropIdleEntriesIfDue(Date.now())
            }), ju);
            null === (su = Uu.unref) || void 0 === su || su.call(Uu)
          }
          setMax(uu) {
            for (this.max = uu; this.size > uu;) this.drop(this.head.prev)
          }
          partition() {
            return new Uu(this)
          }
          stats() {
            return {
              name: this.name,
              size: this.size,
              max: this.max,
              hits: this.hits,
              misses: this.misses
            }
          }
          recordLookup(uu) {
            if (void 0 !== uu) return this.hits++, uu.epoch = this.epoch, this.head.next !== uu && (qu(uu), this.linkFirst(uu)), uu.value;
            this.misses++
          }
          add(uu) {
            this.dropIdleEntriesIfDue(Date.now()), uu.epoch = this.epoch, this.linkFirst(uu), this.size++, this.size > this.max && this.drop(this.head.prev)
          }
          replace(uu, Eu) {
            qu(uu), this.size--, this.add(Eu)
          }
          dropIdleEntriesIfDue(uu) {
            uu - this.epochStartMs >= this.idleMs && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = uu)
          }
          dropEntriesIdleSince(uu) {
            for (; this.size > 0 && this.head.prev.epoch < uu;) this.drop(this.head.prev)
          }
          drop(uu) {
            qu(uu), uu.entries.delete(uu.key), this.size--
          }
          linkFirst(uu) {
            const Eu = this.head.next;
            uu.prev = this.head, uu.next = Eu, Eu.prev = uu, this.head.next = uu
          }
        }
        class Uu {
          constructor(uu) {
            this.partitioner = uu, this.entries = new Map
          }
          get(uu, Eu) {
            return this.partitioner.recordLookup(this.entries.get(Xu(uu, Eu)))
          }
          set(uu, Eu, ju) {
            const su = Xu(uu, Eu),
              Uu = new lu(su, ju, this.entries),
              Zu = this.entries.get(su);
            this.entries.set(su, Uu), void 0 === Zu ? this.partitioner.add(Uu) : this.partitioner.replace(Zu, Uu)
          }
        }
        const Zu = 2 ** 25;

        function Xu(uu, Eu) {
          return uu > -Zu && uu < Zu && Eu > -Zu && Eu < Zu ? uu * (2 * Zu) + Eu : `${uu}|${Eu}`
        }
        class lu {
          constructor(uu, Eu, ju) {
            this.key = uu, this.value = Eu, this.entries = ju, this.prev = this, this.next = this, this.epoch = 0
          }
        }

        function qu(uu) {
          uu.prev.next = uu.next, uu.next.prev = uu.prev
        }
      },
      39985: (uu, Eu, ju) => {
        function su(uu) {
          const Eu = atob(uu),
            ju = new Uint8Array(Eu.length);
          for (let su = 0; su < Eu.length; su++) ju[su] = Eu.charCodeAt(su);
          return ju
        }
        ju.d(Eu, {
          d: () => su
        })
      },
      39989: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => Bu,
          f: () => au,
          g: () => ku,
          k: () => Tu,
          m: () => Hu,
          o: () => Ru,
          q: () => mu,
          s: () => Su,
          t: () => zu,
          v: () => yu,
          x: () => Lu,
          A: () => vu,
          C: () => iu,
          E: () => Ku,
          H: () => Fu,
          L: () => tu,
          N: () => ru,
          R: () => Iu,
          U: () => Vu,
          Y: () => Au,
          $: () => nu,
          db: () => xu,
          eb: () => Wu,
          ib: () => Qu,
          lb: () => ou
        });
        var su = ju(39963),
          Uu = ju(649),
          Zu = ju(39995),
          Xu = ju(4432);
        class lu {
          constructor(uu, Eu, ju, su, Uu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu) {
            let {
              cactusChance: hu,
              maxCactusHeight: Du
            } = Ou;
            this.columnRandom = new Xu.f(""), this.flowerPatchRandom = new Xu.f(""), this.cactusRandom = new Xu.f(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.hO = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = uu, this.seed = ju, this.grassChance = su, this.tallGrassChance = Uu, this.cornChance = lu, this.spectralGrassChance = qu, this.pineGrassChance = fu, this.pineFernChance = Cu, this.jungleTallGrassChance = bu, this.catnipChance = cu, this.autumnFernChance = Nu, this.cactusChance = hu, this.maxCactusHeight = Du, this.hO = Eu, this.flowerInfos = [{
              flower: "Dandelion",
              patchChance: Yu.dandelionChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Poppy",
              patchChance: Yu.poppyChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Forget-me-not",
              patchChance: Yu.forgetMeNotChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Red Tulip",
              patchChance: Yu.redTulipChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Pink Tulip",
              patchChance: Yu.pinkTulipChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "White Tulip",
              patchChance: Yu.whiteTulipChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Orange Tulip",
              patchChance: Yu.orangeTulipChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Daisy",
              patchChance: Yu.daisyChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Allium",
              patchChance: Yu.alliumChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Shadow Rose",
              patchChance: Yu.shadowRoseChance,
              insidePatchSpawnChance: Yu.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Yu.defaultFlowerPatchRadius
            }, {
              flower: "Bluebell",
              patchChance: Yu.bluebellChance,
              insidePatchSpawnChance: .85,
              patchRadius: 8
            }, {
              flower: "Fallen Maple Leaves",
              patchChance: Yu.fallenMapleLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fallen Cherry Leaves",
              patchChance: Yu.fallenCherryLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Melon",
              patchChance: Yu.melonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Watermelon",
              patchChance: Yu.watermelonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Pumpkin",
              patchChance: Yu.pumpkinChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Rice|FreshlyGrown",
              patchChance: Yu.riceChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cranberries_stage2",
              patchChance: Yu.cranberryChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Red Mushroom",
              patchChance: Yu.redMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Brown Mushroom",
              patchChance: Yu.brownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Red Mushroom",
              patchChance: Yu.fatRedMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Brown Mushroom",
              patchChance: Yu.fatBrownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cotton_stage3",
              patchChance: Yu.cottonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 3
            }, {
              flower: "Chili Pepper Plant|FreshlyGrown",
              patchChance: Yu.chiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Chili Pepper Plant|Lava|FreshlyGrown",
              patchChance: Yu.lavaChiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Fallen Pine Cone",
              patchChance: Yu.fallenPineConeChance,
              insidePatchSpawnChance: .4,
              patchRadius: 3
            }], this.maxPatchRadius = 0;
            for (const {
                patchRadius: Zu
              }
              of this.flowerInfos) this.maxPatchRadius = Math.max(this.maxPatchRadius, Zu);
            this.totalFlowerPatchChance = 0;
            for (const {
                patchChance: Zu
              }
              of this.flowerInfos) this.totalFlowerPatchChance += Zu;
            this.doFlowerGen = null !== Yu.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new Zu.b("flwrPtch", Yu.flowerPatchDistApart, !1, !0, ju, 4, Eu)), this.grassId = uu.Grass.id, this.tallGrassId = uu["Tall Grass"].id, this.tallGrassTopId = uu["Tall Grass|Top"].id, this.cornSeedsId = uu["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = uu["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = uu["Spectral Grass"].id, this.pineGrassId = uu["Pine Grass"].id, this.pineFernId = uu["Pine Fern"].id, this.jungleTallGrassId = uu["Jungle Tall Grass"].id, this.jungleTallGrassTopId = uu["Jungle Tall Grass|Top"].id, this.catnipId = uu.Catnip.id, this.autumnFernId = uu["Autumn Fern"].id, this.cactusId = uu.Cactus.id, this.fatCactusId = uu["Fat Cactus"].id
          }
          addBiomeFloraToColumn(uu, Eu, ju, Uu, Zu, Xu, lu) {
            if (lu + 3 >= Zu && lu + 1 < Zu + this.hO) {
              const qu = this.columnRandom;
              qu.reseed(`${Uu}${Xu}${this.seed}flora`);
              const fu = qu.next();
              if (fu < this.grassChance) {
                const su = lu + 1 - Zu;
                0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.grassId)
              } else {
                if (fu < this.grassChance + this.tallGrassChance) {
                  {
                    const su = lu + 1 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.tallGrassId)
                  } {
                    const su = lu + 2 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.tallGrassTopId)
                  }
                  return
                }
                if (fu < this.grassChance + this.tallGrassChance + this.cornChance) {
                  {
                    const su = lu + 1 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.cornSeedsId)
                  } {
                    const su = lu + 2 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.cornPlantId)
                  } {
                    const su = lu + 3 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.cornPlantId)
                  }
                  return
                }
                if (fu < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance) {
                  const su = lu + 1 - Zu;
                  0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.spectralGrassId)
                } else if (fu < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance) {
                  const su = lu + 1 - Zu;
                  0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.pineGrassId)
                } else if (fu < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance) {
                  const su = lu + 1 - Zu;
                  0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.pineFernId)
                } else {
                  if (fu < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance) {
                    {
                      const su = lu + 1 - Zu;
                      0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.jungleTallGrassId)
                    } {
                      const su = lu + 2 - Zu;
                      0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.jungleTallGrassTopId)
                    }
                    return
                  }
                  if (fu < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance) {
                    const su = lu + 1 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.catnipId)
                  } else if (fu < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance + this.autumnFernChance) {
                    const su = lu + 1 - Zu;
                    0 <= su && su < this.hO && uu.set(Uu - Eu, su, Xu - ju, this.autumnFernId)
                  }
                }
              }
              if (this.doFlowerGen && this.totalFlowerPatchChance > 0 && lu + 1 >= Zu) {
                const fu = this.flowerPatchPointGen.getClosestPoint(Uu, Xu),
                  Cu = (0, su.H)(fu, Uu, Xu);
                if (Cu < this.maxPatchRadius) {
                  const su = this.flowerPatchRandom;
                  su.reseed(`${fu[0]}${fu[1]}${this.seed}flowerpatch`);
                  const bu = Math.floor(su.next() * this.totalFlowerPatchChance);
                  let cu = 0,
                    Nu = 0;
                  for (; cu <= bu;) cu += this.flowerInfos[Nu].patchChance, Nu++;
                  const Ou = this.flowerInfos[Nu - 1];
                  if (Cu < Ou.patchRadius && qu.next() < Ou.insidePatchSpawnChance) {
                    const su = Ou.flower;
                    uu.set(Uu - Eu, lu + 1 - Zu, Xu - ju, this.blockMetadata[su].id)
                  }
                }
              }
            }
            if (0 !== this.cactusChance) {
              const su = this.cactusRandom;
              su.reseed(`${Uu}${Xu}${this.seed}cactus`);
              const qu = su.next();
              if (qu < this.cactusChance) {
                const fu = Math.floor(su.next() * (this.maxCactusHeight - 1)) + 1,
                  Cu = Math.min(lu + fu + 1, Zu + this.hO),
                  bu = qu < this.cactusChance * (2 / 3);
                for (let su = Math.max(lu + 1, Zu); su < Cu; su++) uu.set(Uu - Eu, su - Zu, Xu - ju, bu ? this.fatCactusId : this.cactusId)
              }
            }
          }
        }
        var qu = ju(39974),
          fu = ju(39983),
          Cu = ju(39448),
          bu = ju(39985);

        function cu(uu, Eu, ju) {
          const su = new Cu.d;
          for (const Zu of ju) {
            const uu = su.get(Zu.chunkX, Zu.chunkY, Zu.chunkZ);
            if (!(0, Uu.H)(uu)) throw new Error(`Duplicate chunk at ${Zu.chunkX}, ${Zu.chunkY}, ${Zu.chunkZ}`);
            su.set(Zu.chunkX, Zu.chunkY, Zu.chunkZ, Zu.rle)
          }
          return new fu.e(uu, {
            x: 0,
            y: 0,
            z: 0
          }, Eu, su)
        }
        const Nu = {
          treeJungleLarge1: cu("treeJungleLarge1", {
            x: 31,
            y: 33,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("8BsAAtMBHgAB0wG/BwAB0wEeAAXTARsABdMBoAYAAeAPHwAB4A8fAAHgDx8AAeAPGwAB0wEDAAHgDxsABtMBGQAH0wEZAAbTAdsCAAPTAR0ABNMBGwAF0wGcBAAH0wEYAArTARcAAdMBAwAE0wH4AQAB4A8fAAHgDx8AAeAPAtMBHAAF0wEaAAjTARkAB9MBHQAC0wE6AAEYoQMABNMBAgAB0wEYAAnTARYACtMBFwAC0wEEAALTAbYBAAHgDx8AAeAPHwAB4A8EAAHgDxoAAeAPBAAB4A8aAAHgDwQAAeAPGQAB0wEB4A8G0wEYAAnTARgACNMBGAAI0wE6AAEOARilAgAB4A8fAAHgDx8AAeAPHwAB4A8YAAjTARcACtMBFgAC0wEBDgfTARcAA9MBBAAB0wHVAgAD0wEBAAXTARYACtMBFgAK0wEXAAnTATIAAQ4BGAcAAQ4FAAEOHAAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPGwAB4A8DAAHgDxsAAeAPAwAB4A8bAAHgDwMAAeAPGwAB4A8D0wEB4A8BAALTARcABdMBAeAPAQAC0wEXAALTAQEOAtMBAeAPBNMBFwAD0wEBAAHgDwIAA9MBGgAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHQAD0wEZAALTAQEABtMBEwAH0wEBDgXTARMADdMBFAAL0wEzAAIOBgABDgQAAg4SAAEOCwABGBQAARjlAgAD0wEDAAHTARcABdMBAgAD0wEWAAPTAQEOAdMBAQAB0wEBDgPTARYAA9MBBQAC0wGRAgAD0wEbAATTAQUABdMBEwACDgHTAQQAB9MBEgAI0wEBDgbTAREAD9MBEQAG0wEBAAXTAToAAQ4EAAEOHwABDhUAARgBDsIBAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8BAAPTAQMAAdMBEwAB4A8DAALTAQEOA9MBAQAE0wERAAHgDwQAAdMBBA4BAAXTARAAAeAPBgAC0wEFAALTARAAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAALTAR0AAg4B0wEFAAbTAREAAdMBAg4C0wECAAnTAREACNMBAQ4G0wERAA/TAREABtMBBAAD0wE4AAMOOgACDgYAAQ4BGNsCAAfTARcAAtMBBA4F0wEYAALTAQIOBdMBFwAD0wEEAALTAa8CAAMOAtMBAwAB0wEDAALTAREAAdMBAg4D0wEBAAPTAQEOBdMBEAAQ0wERAA/TAREABdMBBgAD0wE2AAMOHAACDgEAAQ4cAAEOBQABGAEOgQIAAeAPHwAB4A8fAAHgDxwAA9MBAeAPAdMBGAAB0wEDDgbTARgACdMBGAAC0wEFAAHTAZcCAAEOGAAC0wECDgMAAg4UAAfTAQEAAdMBAQAB0wEBDgEABdMBDgAH0wEBAArTAQ4AEtMBDgAI0wEFAAPTATYABA4bAAEOAQADDhsAAQ4BAAEOARgBAAIO3wIABdMBGAADDgfTARgACdMBGAAC0wEEAALTAZYCAAIOGAAD0wEBDgMAAtMBFAAH0wEDAALTAQEAAtMBAQ4C0wEOAAfTAQEAAdMBAQAJ0wENAAnTAQIAB9MBDwAH0wEGAALTATAAARgEAAYOAQABDhgABQ4cAAUOgwEAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8DAAHgDxsAAeAPAwAB4A8YAAHTAQEAAtMBAwAB4A8VAAEOAgAE0wEDAAHgDxUAAw4F0wECAAHgDxgAAw4F0wEYAATTAQIAAtMBjwIAAg4DAAEOAQABDhgAAQ4C0wECDgUAAQ4B0wETAAbTAQMAAtMBAQAB0wEBAAEOA9MBDAAJ0wECAATTAQEABNMBDAAJ0wEEAAfTAQ8ABdMBBwAD0wEwAAEOAgAIDhkABg4BGBoABA4cAAMOHQACDgEYHQACDgEYHQAB4A8CDh0AAeAPAQABDh0AAeAPAQABDh0AAeAPHwAB4A8fAAHgDxgAAtMBAgAB0wECAAHgDxkAAdMBAgAB0wECAAHgDwEAAQ4EAALTARcAAeAPAQACDgIABtMBFAAB4A8GAAIOBNMBEwAB4A8GAAXTARQAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8cAAMOAeAPAQACDhgAA9MBAQ4B4A8GAAEOAtMBEQAD0wEBDgHTAQHgDwYABtMBDQAD0wEBDgLTAQHgDwUAB9MBDwAF0wEGAAbTARAABNMBCAAD0wEvAAEYAQ4BAAgOGQAGDhsAAQ4CAAEOHAADDh0AAw4dAAMOHQABGAIOHQADDh0AAw4dAAMOHQADDhkAAdMBAwADDhUABtMBAgADDhUAA9MBAQAB0wEEAAIOFgAC0wEGAAIOBAAC0wEBAAPTARQAAg4FAATTARUAAQ4GAATTARUAAQ4fAAEOHgACDh4AAg4eAAMOHQADDh0AAw4dAAMOHAAFDh0AAg4YAAHTAQIOCAAE0wEBAALTAQ4AAdMBAg4KAAXTAQ8AAQ4B0wEMAAPTAR4AAtMBLwABGAEOAQAFDgUAAQ4VAAQOHAAEDh0AARgCDh0AARgCDh0AAw4dAAMOHQADDhgAAeAPBAACDgEYGAAB4A8EAAIOARgYAAHgDwQAAw4YAAHgDwHTAQMAAw4VAAfTAQQOFAAI0wEBAAMOFQAF0wEDAAIOBwAD0wEUAAIOBwAD0wEUAAIOBwAE0wETAAIOHgACDh4AAg4eAAIOHgACDh4AAg4eAAIOHgACDh4ABQ4ZAAPTAQIOGAAF0wEJAAHTAQEAAtMBDgAE0wELAAPTAQ8AAtMBDQAC0wEeAALTATAAAQ4BAAIOAwACDgEAAQ4BGBYAAg4hAAIOPAABDlgAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8D0wECAAEOGAAG0wEEDhUAA9MBAQAD0wECAAIOFQAH0wECAAIOCAAB0wEBAAHTARMAAg4IAAPTARMAAg4BAAHgDwYAA9MBEwACDgEAAeAPHAACDgEAAeAPHAACDgEAAeAPHQABDgEAAeAPHQABDgEAAeAPGAAB4A8EAAEOAQAB4A8YAAHgDwQAAQ4BAAHgDxgAAeAPBAABDgEAAeAPGAAB4A8DAAYOFgAB4A8DAAHTAQQAAdMBFgAF0wEFAAHTAQMAA9MBDgAE0wEBAALTAQUAAdMBAgAD0wEOAATTAQEOA9MBCAAC0wETAALTAQkAAtMBLwACDgEAAg4FAAEOGQABDiIAAg4aAAEOHwACDrgBAALTAQEAAdMBGwAF0wECAAEOGAAF0wEDDhUABdMBAw4B0wEZAAfTAS0AAdMBHgAC0wGVAgACDgIAAg4eAALTARQABtMBAgAB0wEBAALTAQMAA9MBDgAJ0wECAAfTAQ0ACdMBBAAB0wECDgPTARAAAtMBAQAD0wEHAAPTAS4AAQ5IAAIOGAACDvgBAALTAQEAAtMBGQAE0wEBAALTAQMOFQAE0wECAAPTARcAA9MBAwAD0wHjAgABDgEAAQ4CAAIOFQAD0wECDgEAAQ4BAAHTARUABtMBAgAG0wEBAAPTAQ0AC9MBAw4F0wEMAA/TAQIOA9MBDQAJ0wEFAAXTAS4AAQ4JAAEYAQ4eAAEOFwABDhwAAeAPAwABDhsAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHQAB0wEBAAHgDwLTARkAA9MBAQAB4A8B0wEDDhYABNMBAQAB4A8D0wEXAAPTAQIAAeAPAtMBHQAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDwUAAdMBAgABDgMAAQ4SAAHgDwIAA9MBAQ4CAAIOA9MBAQ4RAAfTAQIAAtMBAQ4G0wENAAzTAQIOBtMBDAAU0wENAAvTAQMABdMBLQABGAsAARgBDjUAAQ6/AQAB4A8fAAHgDx8AAeAPGgAH0wEXAAXTAQQOFgAF0wECDgLTARcAAdMBBQAD0wHmAgAC0wEXAATTAQIABdMBAQ4RAAXTAQEOBdMBAQ4G0wENAAzTAQIOBtMBDAAU0wEOABLTAVAAAQ4fAAEYhwEAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8SAAjTAQUAAeAPEQAH0wEBDgHTAQUAAeAPEAAE0wEFDgYAAeAPEAAB0wEFAALTAQcAAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8eAALTARcAC9MBFAAQ0wEOAAzTAQIOBdMBDgAS0wEQABDTATAAAQ6ZAgAB4A8fAAHgDx8AAeAPB9MBGAAB4A8I0wEXAALTAQEOA9MBAQ4C0wEXAAHTAQQABNMBQwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8fAAHgDx8AAeAPHwAB4A8aAArTAQEOFAAP0wERAArTAQEOBNMBEQAP0wERAA/TATAAAg7cAQAB4A8fAAHgDwQAAeAPGgAB4A8EAAHgDxoAAeAPBAAB4A8YAAjTARgACNMBFwAH0wEBDgHTARcACdMBnwMAC9MBFAAN0wESAAvTAQEOAtMBEgAB0wECAAHTAQEACNMBMQABGAEOvwIAAtMBGgAI0wEYAAjTARgABtMBAQ4B0wEYAAjTAaADAAnTARcACdMBFwAK0wEWAAHTAQEACNMB8wIAAtMBHgAC0wEaAAfTARkAB9MBGgAF0wHCAwAF0wEbAAXTARwAA9MBrRgA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }]),
          treeJungleLarge2: cu("treeJungleLarge2", {
            x: 28,
            y: 35,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }]),
          treeMapleLarge1: cu("treeMapleLarge1", {
            x: 24,
            y: 27,
            z: 24
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("7wMAAdIBGAAB0gEBAAHSAQQAAtIBFQAB0gECAAHSAQMAAdIBAQAB0gEBAAHSARoAAdIBuwYAAdIBHgAC0gEdAAHSAQEAAtIBHQAC0gEFAAHSAQEAAtIBGwAB0gEBAATSARQAAdIBHgAB0gECAAHSAQIAAeMPAwAC0gEVAAHSAQYAAtIBHAAB0gEBAAHSAQIAAdIB1wUAAtIBGwAC0gEhAALSAR0AAtIBBAAC0gEB4w8EAAHSAQ8ABdIBAwAB0gEBAALSARUAAeMPAtIBAeMPAtIBAgAB4w8E0gEBAAHSAREABNIBAQAB4w8BAAHSAQEAAdIBAQAB0gECAAHSARAAAdIBAwAC0gEDAAXSARQAAdIBAgAB0gEDAAHSAQEAAtIBGgAB0gEBAAHjDyEAAdIBtwUAAtIBGwAB0gEBAAHSAQEAAdIBBAAB0gEYAATSAQIAAdIBAgAB0gECAALSARAAAtIBAgAC0gEBAAHSAQQAAdIBAQAC0gENAAHSAQEAA9IBAQAC0gEDAALSAQEABdIBDwAB0gEBAALSAQEAAdIBBAAB4w8C0gECAALSAQEAAdIBDwAC0gEDAALSAQEABNIBAQAB0gEBAAHSAQ0AAdIBAQAD0gEBAAHSAQEABdIBAeMPAdIBAQAB0gESAAHjDwPSAQQABNIBAgAB0gEVAAHSAQIAAtIBAgAC0gEZAALSAQEAAdIBHQAB0gH6BAAB0gEcAAPSAR4AAtIBAwAC0gEYAAHSAQEAAdIBAwAB0gEBAATSAQIAAeMPAQAB0gENAAHSAQIAA9IBAQAC0gECAAHjDwHSAQHjDwMAAdIBDQAB0gEBAAnSAQIAAdIBAQAB0gEBAAPSAQwABNIBAgAB0gEBAALSAQIAA9IBAQAB0gEDAAHSAQwAAdIBAgAC0gEGAAHSAQQAAdIBAgAB0gENAAHSAQEAAdIBBgAC0gEB4w8B0gEBAALSAQIAAdIBDgAC0gEBAAHSAQIAAdIBAQAC0gEBAATSAQEAAdIBFAAB0gECAAHSAQMAAdIBAQAC0gEUAAHSAQQAAdIBAQAB0gEaAAHSAQEAAeMPlwUAAdIBAwAB0gEeAALSAQEAAtIBAgAC0gEWAATSAQEAA9IBBgAB0gEOAAHSAQIABtIBAeMPAdIBAQAB0gEDAALSAQ0AA9IBAwAC0gEBCQHSAQIJAdIBAQAB0gEBAAHSAQIAAdIBDAAE0gEDAAXSAQIAAdIBEQAC0gECAAHSAQcAAtIBAQAB0gEBAALSARAAAtIBAwAB0gEIAALSAQ8AAeMPAtIBCAAB0gEBAAPSAREAAtIBBwAD0gECAAHSAQEAAdIBEgAE0gEFAAHSAQEAAdIBFwAB0gECAALSAQEAAdIBlAUAAtIBHgAB0gEBAAHSAQQAAtIBGAAB0gEBAAHSAQIABNIBEgAD0gECAALSAQIAAdIBAQAB0gEC4w8C0gEQAAHSAQEAA9IBAgAB0gEBAAIJAQAC0gERAATSAQHjDwHSAQEAAtIBAwAB0gEEAALSARMAAtIBBQAB0gEBAAHSAQEABNIBDQAC0gECAAHSAQEAAdIBAgAB0gEGAALSARAAAdIBAgAB4w8IAALSAQHjDwHSARUAAtIBAgAD0gEBAAHSAQEAAdIBAQAB0gEWAAHSAQEABNIBFQAB0gEBAALSAQMAAdIBAwAB0gEUAAHSAQMAAdIBAQAB0gEBAAHjDwEAAdIBGgAB0gHaBAAB0gEFAAHSASMAA9IBDwAB0gEJAAHSAQIAAtIBAQAB0gEOAAHSAQ0AAdIBAQAB0gEBAAHSAQsAAdIBAgAB4w8B0gEEAAHSAQEJAgAB0gECAALSARAAAdIBBAAB0gEFAATSAQEAAdIBAeMPDgAB0gEJAAHSAQEAAeMPBdIBDwAB0gEBAAHSAQYAAtIBBAAC0gEPAAPSAQEAAdIBAeMPAtIBAwAB0gEBAAXSARMAAeMPAgAC0gECAAHSARQAA9IBAwAB0gEEAAPSAQEAAeMPAdIBEAAB0gECAAjSAQIAAdIBEgAD0gEBAAHSAQEAAtIBAQAB0gEZAAHSAQQAAdIBGwAB0gEBAALSAbYEAAPSASgAAdIBAQAC0gERAAHSAQIAAdIBAgACCQEAAdIBAQAC0gECAAHSARYAAgkCAAPSAQHjDwLSAQ4AAdIBAwAB0gEHAAHSAQIAAdIBAgAB0gEMAAHSAQEAAdIBAwAB0gEFAALSAQEAAQkBAATSAQwAAdIBAQAB0gECAALSAQYAAdIBAQABCQTSARAAAdIBBAAB0gEBAAHSAQEAAdIBAeMPAdIBAeMPAdIBEwAB0gEEAAEJCNIBEgAB0gEBAALSAQIAAtIBAQAE0gETAALSAQIAAtIBAQAB0gEEAALSARMAAdIBAQAG0gEXAATSAQIAAdIBGQAD0gEDAAHSAR0AAdIBAgAB0gG2BAAB0gEBAAHSARsAAdIBAQAB0gEBAAHjDwHSAQIAAQkDAAHSARcAAdIBBQAB0gEEAAHjDwLSARIAAdIBCAAB0gECAAHSAQHjDw8AAdIBBQAB0gEGAAHjDwHSAQEAAdIBEwAB4w8EAAHSAQEAAgkD0gEBAAHSARAAAdIBAQAB0gEBAAHSAQIAAeMPAwAC0gEBAALSAQ8AAtIBBAABCQMAAdIBAeMPA9IBEAAB0gECAAHSAQMAAgkEAATSAQ8AAeMPBdIBAgAB0gEBAAHSAQMAA9IBEQAB0gEFAAHSAQIAAdIBAgAC0gERAAHSAQEAAtIBAQAB0gEEAAHSARUABdIBAgAB0gEBAAHSARcAAdIBAQAC0gEGAAHSARcAAtIB4QEAAQmeAgABCRkAAdIBAQAB0gEDAAEJGAAC0gEBCQHSAQQAAdIBAgkWAATSAQMAAdIBFwAB0gECAAHSAQkAAdIBAQAB0gEXAAHSAQUABNIBEgAB0gEIAAEJBNIBEwAE0gEEAAPSAQEAAeMPAdIBEwAB0gEBAAHSAQYAAdIBAQAD0gEQAAHSAQHjDwHSAQIAAQkB0gEB4w8GAAPSAQ8AAtIBAQAB0gEGAAHjDwMAAtIBDgAD0gECAALSAQUAAdIBAQAD0gERAAHSAQEAAdIBBQAB0gEDAAHSARIAAdIBAQAC4w8BAAHSAQQAAdIBFwAB0gEFAAHSAR0AAdIBAQAB0gECAAHSARcAAdIB4QEAAgkeAAIJHgACCR4AAgkeAAIJHgACCR4AAgkeAAIJHgACCR4AAgkbAAIJAQACCRcAAeMPAQAB0gECCQIAAwkXAALSAQEAAdIBAgADCQUAAdIBEgAB0gEDAAHSAQEAAwkZAAHSAQIAAdIBAQkBAAIJBAAC0gEWAAEJAgABCQQAAdIBEQAB0gEDAAHSAQEAAQkBAAHSAQQABdIBDwAB0gECAAHSAQEAAQkBAAHSARkAAtIBAeMPAQABCQQAAdIBGQAB0gEBCQQAAdIBAQAB0gEBAAHSARMAAtIBAQABCQEAAdIBAwAB0gECAAHSAREAAeMPAtIBAQAB0gEBCQIAAdIBFwAB0gEBAAHSAQcAAdIBFwAB0gEEAALSARkAAdIBAwAC0gEBAAHSARsAAtIB3AEABAkcAAQJHQACCR4AAgkeAAIJHgACCR4AAgkdAAMJHQAECRwABAkWAAPSAQMAAwkYAALSAQQAAgkFAAHSAREAA9IBAeMPAwACCR4AAdIBAQkGAAHSARUAAdIBAgABCQHSAQUAAtIBEgAB0gEBAAHSAQIAAQkB0gEEAAHjDxUAAdIBAQAC0gEBCQcAAtIBFAAC0gEDAAHSAQMAAdIBAQAC0gEQAAHSAQEAAtIBBwAB0gEBAALSAREAAtIBBwAF0gEUAALSAQMAAdIBAQAD0gEUAAPSAQHjDwMAAdIBBAAB0gEUAALSAQEAAeMPAQAC0gEBAAHSAQEAAdIBFQAC0gEBAALSAQEAAdIBAQAB0gEZAAHSAQIAAtIB/AEAAQmeAgABCQMAAQkVAAHSAQUAAQkDAAMJFAAC0gEJAAEJA9IBEQAB0gEDAAHSAQcAAdIBAQAB0gE1AAHSAR4AAdIBAQAB4w8BAAHSAQcAAdIBFAAB0gECAAEJAdIBGQAC0gEDAAEJAdIBAQAB0gECAAHSARQAAdIBBAABCQUAAdIBGgAC0gECAAPSARwAAdIBAeMPAtIBFQAB0gEEAAXSARYAAdIBAQAB0gECAAXSARYAAdIBBQAC0gEgAAHSAbkEAAEJHgACCQQAAdIBAQkB0gEYAAHjDwHSAQYAAdIBEgAB0gEBAAHSAQEAAdIBCAAB0gETAALSAQEAAtIBHAAC0gEDAAHSARkAAdIBBgAB0gEXAAHSAQIAAtIBBQAB0gEaAAHjDwIJBAAC0gEVAAHSAQIAAdIBAQkDAAHjDwHSARkAAdIBAwAD0gEVAALSAQEAAdIBAeMPAQAC4w8C0gEYAALSAQIAAdIBAgAB0gEaAAHSAQEAAdIBAeMPIAAB0gHbBAAB0gEBAAPSAQEJAtIBEwAC0gEBAAEJBAAB0gEBAATSARIAAdIBAgABCQcAAdIBEwAB0gECAAHSAQEJHgAB0gEBCRsAA9IBAQAB0gEDAAHSARgAAdIBAeMPAQAB0gEBAAHSAQEAAdIBAQAB0gEBAAHSARQAA9IBCQAB0gEUAAPSAQMAAdIBAQAC0gEbAAHSAQIAAtIBGgAB0gECAAHSARsAAeMPAQAB0gECAALSARsABdIB2AQAAdIBHQAC0gEFAALSAQEAAtIBFAAC0gECAAHSAQIAAdIBAgAB0gEB4w8B0gESAAPSAQEAAdIBAQAD0gECAALSAREABNIBAQkB0gEDAAHSARkAAdIBAQAC0gEaAAHSAQEAAdIBAQAB4w8BAAHjDxwAAtIBAQAB0gEB4w8BAALSARUAAtIBAQAB0gEB4w8EAALSARkAAtIBAQAD0gEBAAHSARgAAtIBAQAB0gEBAAPSARcAAdIBAgAB0gEBAAHSAQEAAdIBHQAB0gEBAAHSATwAAdIBuwQAAdIBAwAB0gEfAAHSAQMAAtIBFAAD0gEEAAXSARIAAdIBAQAF0gEZAAHSAQIABdIBAQAB0gEXAAHSAQHjDwPSARwAAtIBAQAD0gEB4w8B0gEBAAHSARcABNIBBAAC0gEVAALSAQEAAdIBAwAB0gEBAALSARYAA9IBBAAB4w8YAALSAQEAAtIBAQAD0gEBAAHSARYAAdIBAQAB0gEBAAHSASAAAdIBHAAB4w8BAALSAdoEAAHSAR8AAdIBHQAD0gEDAAHSAQHjDwLSARUAAdIBAQAB0gEGAAHSARUAAdIBAwAC0gEDAAHSARcABNIBAQAC0gEDAAHSARQAA9IBAgAB0gECAAHSAQEAA9IBFAAD0gEB4w8C0gEBAAHSAQEAAtIBAQAB0gESAAHSAQQAAdIBAQAB0gEhAAHSAQEAAdIBFwAC0gEBAAHSAQQAAdIBAQAB0gEYAAHSAQIAAdIBAQAB0gEB4w8ZAAHSAQIAAeMP/AQAAdIBHAAC0gECAAHSAQLjDxoAAeMPAdIBAQAE0gEfAAHSARcAAdIBAQAB0gEBAAHSARkAAdIBAeMPBNIBBAAC0gEVAALSAQEAAtIBAQAB0gEBAALSAQEAAeMPAdIBEwAF0gEBAAHSAQIAAeMPAdIBAgAB0gEUAALSAQQAAdIBAQAD0gEVAAHSAQUAAdIBAwAB0gEfAAHjDxcAAdIBAQAB0gEB4w8CAAHSAR4AAdIB+QQAAdIBHgAC0gEBAALSARoAAdIBAQAB0gEBAAHSARwAAeMPAQAB0gEBAAHSARkAAtIBAQAC0gECAAHSARkAAdIBAQAB0gEBAAHSAQYAAdIBEgAG0gEBAAHSAQEAAdIBAQAB0gEBAAHSARMAAtIBAQAB0gEDAALSARcAAdIBBgAB4w8CAALSARoAAdIBAwAC0gEBAAHSARsAAeMPAdIBGgAB0gEEAAHSAbcFAAPSASAAAdIBGgAD0gEBAAHSAQHjDwIAAdIBGAAB0gEBAAHjDwHSAQMAAdIBFgAB0gEEAAPSARgAAtIBAQAB4w8B0gEBAAPSAQIAAtIBFQAC0gEDAALSAQEAAdIBFgAB0gEGAAPSAQEAAtIBFQAB0gGeBgAC0gEdAALSAQIAAdIBAgAB4w8bAAHSAR0AAdIBAeMPAwAC0gEBAAHSARcAAdIBAgAD0gECAALSARkAAdIBAwAB4w8ZAAHSAQYAAdIB2QYAAtIBAQAB0gEdAAHSASAAAdIBHQAB4w8B0gEdAALSAdZDAA==")
          }]),
          treeMapleLarge2: cu("treeMapleLarge2", {
            x: 32,
            y: 34,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0AAdIBAgAB0gEYAAHSAQEAAdIBAQAE0gEXAAjSARMAAtIBAgAB0gECAAHSAQQAAtIBEgAB0gEBAAHSAQMAA9IBAwAB0gETAAHSAQoAAdIBDAAD0gECAAHSAQEAAdIBGAAD0gEBAATSARkAAtIBAeMPAdIBAQAD0gEWAAHSAQEAAtIBBQAB4w8YAAHjDwHSAQEAAdIBHwAB0gEBAAHSAaoFAAHSAQIAAdIBAQAB0gEOAAHSAQYAAdIBAwAB0gECAALSAQHjDw0AAdIBBAAC0gEEAAHSAQIAA9IBAQAC0gENAAHSAQQAAeMPAQAB0gEBAAfSARQABNIBAQAC0gEBAAPSAQEAAtIBFAAC0gECAAPSAQEAAdIBAQAB0gEMAAHSAQEAAdIBAeMPAdIBAwAB0gEBAAHSAQMAAdIBEQAB0gECAAHSAQHjDwEAAtIBFgAD0gEBAAHSAQMAAtIBFgAB0gECAALSAQEAAdIBGQAB0gEFAALSAQEAAdIBHAAD0gEdAAHSAR8AAdIB3QQAAdIBAQAB0gEGAAHSAQUAAQkDAAHSAQwAA9IBBAAB0gEBAALSAQMAAdIBAQAB0gEBAAHSAQ4AAtIBBAAB0gEBAAHSAQMAAuMPAQAB0gEB4w8B0gEB4w8MAAHSAQUAAdIBAQAB0gECAAHSAQEABdIBFAAB0gEBAAHSAQMABdIBAgAB4w8UAAHSAQIAAtIBAQAD0gEPAAHjDwcAAdIBBAAC0gEQAALSAQEAAtIBAQAB0gEXAAHjDwEABdIBAQAB0gEYAAHSAQHjDwHSAQEAAtIBAQAC0gEWAAXSAQIAAdIBGgAC0gEfAAHSAQIAAdIBAQAB0gEdAAHSAb0DAAHSAQIAAdIBHQAB0gF9AALSAQEAAdIBBgAC0gEBAAHSAQEAAQkBAAHSAQ0AAdIBAgABCQHSAQQAAtIBAQAB0gEBAAHSAQMAAtIBDgAC0gEGAALSAQIAAtIBAgAB0gENAAHSAQEAAdIBAQAB0gECAAEJAtIBAQAB0gECAAHSAQEAAtIBAQAB0gEMAAHSAQcAAdIBAwAG0gEVAAHSAQQAA9IBAQAB4w8B0gEcAAHjDwLSAQ4AAtIBAeMPAQAB0gEBCQIAAtIBFgAE0gEBAAHSAQEAA9IBFwAB0gEBAAPSAQEAAdIBAQAB0gEWAALSAQEABNIBGQAB0gEBAAXSARkAAdIBAQAC0gEBAAPSARsAAdIBAgAB4w+9AwAC0gEdAAPSAQEAAdIBHAAB0gFgAALSAQMAAQkB0gEBAAHSAQIAAgkDAAHSAQsAAdIBAQkB0gEBCQYABtIBAQABCQEAA9IBCQAB0gEBAAXSAQQABNIBAeMPBAAB4w8B0gEMAAHjDwHSAQEAAtIBAgkD0gEDAAHSAQYAAdIBCwAB0gEFAAHSAQEJBAAC0gEBAAHSAQQAAdIBEQAD0gEDAAPSAREAAtIBAQkDAAHSAQEAAdIBBQAC0gENAAHSAQEAAtIBAgABCQHSAQEAAdIBFgAB0gEB4w8G0gEBAAHSAQEAAdIBFQAC0gECAAPSAQEAAdIBFwAC0gEBAATSARkAAtIBAQAG0gEYAAHSAQEABNIBGwAB4w8BAAHSAQEAAdIBvAMAAdIBAQAD0gEbAAPSAR4AAtIBAeMPSQAB0gERAALSAQIJBAABCQMAAgkB4w8DAAHSAQwAAtIBAQkB0gEBAAHSAQEJBAAB0gEDAALSAQIAAeMPAdIBDgAD0gEBCQMAAdIBAwAC0gECAAHSAQEAAtIBCgAB0gEBAATSAQIAA9IBAgAC0gEB4w8BAAHSAQEABNIBCwAB0gELAAHSAQIAAdIBAgAB4w8C0gERAAHjDwLSAQMAAdIBAgAB0gEBAALSAQ0AAdIBAQkBAAHjDwIAAdIBAeMPAwAB4w8B0gEQAALSAQEABdIBAeMPAQAB0gEVAALSAQMABdIBGgAC0gEB4w8B0gECAAHSARUAAdIBAwAB0gEBAALSARkAAeMPAdIBAeMPAdIBAQAB0gEcAAXSARsABNIBHgAB4w+eAwAB0gEBCQHSAR0AAdIBAQAC0gEbAALSAQEAAdIBHQAB0gEFAAEJHwADCQQAAdIBEQAB0gEBAAEJBwABCQEAAdIBAQAB0gEQAAPSAQEAAdIBAQkHAAHj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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }]),
          treePalmLarge1: cu("treePalmLarge1", {
            x: 11,
            y: 14,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
          }]),
          treePalmLarge2: cu("treePalmLarge2", {
            x: 13,
            y: 16,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcAAeYP+aQBAA==")
          }]),
          treePineLarge1: cu("treePineLarge1", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4AAtABHgAB0AEfAAHQAb0GAAHQAQEAAagNAdABGgAD0AEB5A8E0AEaAAHQAQEKA9ABHAAD0AG7BwAG0AEcAAHQAQEAAdABj4cBAA==")
          }]),
          treePineLarge2: cu("treePineLarge2", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("y1AAA9ABvAcAAtABAagNPAABqA0F0AEbAAHkDwLQAZwHAAPQAQHkDx4AAtABGwAG0AEbAAHQAQHkDwHQAQEKAdABHAAD0AH7BgAD0AECCh0AAdABAgoB0AEaAAHkDwLQAQIKAtABGgAB0AEDCgLQARoAAtABAgoB0AEcAAPQAR4AAdABHwAB0AGcBgAB0AEB5A8B0AECCgHQAQGoDRsAAdABAgoB0AEaAAPQAQIKA9ABGQAC0AEDCgHQARoAAdABAwoB0AEcAAHQAQEKAdABHQAB0AEB5A8B0AEdAALQAZwGAAfQARwAAdABHAAC0AEB5A8F0AEZAALQAQEKAdABAeQPAtABGgAB0AEB5A8BCgHQAR0AAtAB2wYAB9ABOgAC0AEB5A8C0AEdAAHQAQHkDwLQAR0AAdAB/QYAA9ABAeQP8ncA")
          }]),
          treeSpectralLarge1: cu("treeSpectralLarge1", {
            x: 37,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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AuAMAv8MAwAD/wwTAAH/DAEAA+AMBQAC4AwB/wwTAAH/DAEAA+AMBAAF/wwHAAL/DAkAAv8MAuAMAf8MAQAB/wwCAAH/DAHgDAEAAeAMCAAD/wwDAAHgDAQAAf8MAgAB4AwFAAT/DAgABP8MAQAD4AwDAAH/DAEAAf8MAQAB/wwEAAHdDALgDAH/DAcABv8MA+AMAwAB/wwBAAHgDAH/DAEAAeAMBwAB/wwFAALgDAP/DAMAAuAMCAAB/wwLAAH/DAEAAf8MAuAMBQAB/wwXAAHgDAL/DBsAAf8MAgAB/wwB4AwB/wwGAATgDAQAAf8MDgAB4AwBAAH/DAYABOAMBAAB/wwSAAPgDAMABv8MAQAB/wwNAAH/DAHgDAIAA+AMAf8MAgAH/wwBAAH/DMcDAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAC/wwB4AwB/wwUAALgDAH/DAUAAf8MAuAMAv8MEgAE4AwFAAb/DBEAA+AMAQAB/wwFAAHgDAb/DAMAAv8MCAAB/wwD4AwD/wwDAAHgDAMAAf8MAwAC4AwCAAP/DAMAAuAMAgAD4AwBAAHgDAH/DAHgDAQAAf8MBgAC/wwC4AwD/wwB4AwCAATgDAEAAf8MAwAB/wwLAAP/DAEAAuAMBQAD4AwCAAH/DAMAAf8MDgAB4AwD/wwFAAHgDBcAAf8MAeAMAf8MBgAB4AwUAAH/DAHgDAH/DAcAA+AMDAAB/wwIAAHgDAQAAeAMAf8MAQAB3QwD4AwCAAH/DAgAAf8MAwAB/wwIAAPgDAIAAd0MA/8MAQAB/wwIAAH/DAMAAf8MAwAB/wwB4AwB/wwCAALgDAL/DAEABv8MiQUAAuAMFAAC4AwGAAL/DAPgDAEAAf8MDwAD4AwIAAT/DALgDA4AB+AMBAAB/wwBAAL/DAEAAv8MAuAMAf8MAQAC4AwBAAHgDAMABuAMAv8MAQAB/wwBAAH/DAQAAf8MAeAMAwAC4AwBAAbgDAEABuAMAQAB/wwOAAL/DAEAA+AMAQAH4AwDAAH/DBEAAf8MAuAMAf8MBQAB4AwFAAP/DAEAAf8MDQAB/wwGAAPgDAQAA/8MAQAB/wwMAAL/DAUABOAMBAAD/wwBAAH/DAwAAf8MAwAB/wwD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/wwCAAL/DAHgDAH/DAkAAv8MAgAB/wwDAAL/DAEAAf8MAuAMAQAB/wwBAAHgDAEAAeAMAf8MAeAMAf8MCQAD/wwFAAHgDAEAAv8MAQAC4AwB/wwB4AwB/wwCAAHgDAL/DAwAAv8MBAAB/wwB4AwD/wwBAAL/DAEAAf8MAQAD/wwJAAL/DAHdDAYAAf8MAQAB3QwBAALgDAL/DAEAA/8MVgAH4AwaAAXgDPgDAAHgDB8AAuAMIAAB4AwyAAH/DAEAAf8MHwAB4AwdAAH/DAEAAv8MAQAB/wwbAAP/DAHgDAoAAuAMEAAB4AwBAAH/DAgAAv8MBOAMBQAB/wwUAAH/DAEAAf8MBuAMAf8MAgAB/wwSAAn/DAHgDAEAA+AMEgAB/wwBAAL/DAHgDAEAAf8MAeAMAQAC/wwB3QwUAAH/DAMAAd0MAf8MAd0MAf8MAQAB3QwB/wxYAAXgDJAEAAH/DB8AAf8MEgAB/wwMAAH/DBIAAf8MDAAB/wwKAAH/DAcAAf8MCwAB/wwB4AwKAAH/DAcAAf8MCwAB4AwB/wwBAAH/DAgAAf8MBwAB/wwLAAL/DAoAAf8MBwAB/wwOAAH/DAgAAf8MAeAMBgAB/wwNAAH/DAcAAf8MAQAG4AwB/wwB4AwB/wwYAAH/DAfgDBcAAeAMAv8MA+AMAv8MAQAC/wwVAAHgDAH/DAEAA/8MAQAD/wwYAAL/DAHdDAH/DAHgDJkGAAH/DBMAAf8MAQAB4AwJAAH/DBMAAeAMCwAB/wwfAAL/DAMAA+AMAf8MFAAC4AwBAAP/DAbgDAH/DBMAAv8MAQAC4AwD/wwD4AwC/wwUAAv/DBkAA/8MAd0MAf8MAeAMAf8M2gUAAf8MHwAB/wwCAAH/DBMAAf8MCAAB/wwCAAH/DAIAAf8MEAAB/wwIAAH/DAIAAf8MAgAB/wwQAAH/DAcAAf8MAeAMAgAB/wwCAAH/DBAAAf8MAQAD/wwHAAH/DAEAAv8MDwAB/wwC4AwD/wwB4AwBAAH/DAEAAf8MAQAD4AwBAAH/DA8ABv8MAuAMAgAB/wwB4AwB/wwC4AwC/wwRAAH/DAEAAv8MAeAMAf8MAeAMBP8MAeAMAQAB4AwB/wwRAAHdDAL/DAHdDAIAAd0MAf8MAt0MAQAD/wyvBgAB/wwfAAH/DAMAA/8MAwAB/wwVAAH/DAIABf8MAgAB/wwEAAH/DBAAAf8MAQAB4AwF/wwB4AwBAAH/DAIAAf8MAgAB/wwQAAf/DALgDAH/DAHgDAX/DBEAAf8MAQAD/wwC4AwD/wwCAAHdDAH/DAHdDBIABf8MAgAB3QzZBQAB/wwfAAH/DB8AAf8MCwAB/wwTAAH/DAsAAf8MEgAB4AwD/wwJAAH/DBEABv8MCAAB4AwQAAH/DAHgDAX/DALgDAQAAv8MAeAMEAAH/wwF4AwBAAHgDAH/DBEAAd0MBv8MA+AMAf8MBAAB/wwRAAHdDAH/DALdDAL/DAHdDAL/DEgA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("w18AAf8M3wcAAf8MPAAB/wzBBgAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MHQAB4AwBAAH/DL0HAAH/DAHgDAEAAf8MHQAD4AwB/wwbAAX/DPsFAAH/DB8AAf8MYAAB/ww/AAPgDAH/DBsABeAMHAAD4AycBwAB/wwfAALgDAP/DBsABOAMHAAC4AwD/wybBgAB/wwfAAH/DCIAAf8MHAAB/wwB4AwBAAH/DBwAAf8MAQAC/wwcAAHgDAIAAf8MHAAD4AwB/wwcAAHgDAP/DJwFAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MXwAB/wwfAAHgDAH/DB4AAf8MHwAC/wwBAAHgDBwABP8MnAYAAf8MfwAB/wwfAAH/DB8AAf8MAeAMAf8MHQAB/wygDwAB/wwfAAH/DB8AAf8MHwAB/wzeDgAB/ww/AAH/DL8IAAH/DB8AAf8M3wYAAf8MHwAB/wwfAAHgDP8wAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("EgAB/wwfAAH/DN8HAALgDAH/DB0AAeAMAd0M3QcAAf8MA+AMAf8MHAAB/wwB4AwC3QwcAAH/DAHgDB4AAd0MngcAAf8MA+AMAf8MGwAC/wwB4AwB/wwcAAH/DALgDAL/DBsAAf8MnQcAAeAMAQAE4AwB/wwEAAL/DBQAAv8MAuAMBQAB4AwXAAH/DAHgDAL/DAUAAd0MAf8MFQAD/wwB3QwdAAH/DP0GAAH/DAPgDAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAC/wwB4AwBAAHgDAQAAd0MAuAMEwAB4AwD/wwB4AwB/wwFAAL/DBUAAf8MAQAB3QwB/wwGAAH/DBQAAf8MAd0M/QYAAf8MAeAMA/8MAwAD/wwC4AwB/wwB4AwQAAH/DAEABP8MBAAC/wwB4AwC/wwRAAb/DAQABP8MFAAC/wwJAAHdDBQAAv8M/QYAAeAMBf8MBAAC4AwTAAf/DAMAAuAMA/8MEQAH/wwDAAHdDAIAAf8MEwAE/wwB3QwcAAHdDPwGAAH/DALgDAX/DAEAAeAMBP8MAQAC4AwPAAL/DAHgDAX/DAIAAv8MAt0MAf8MEQAB/wwB4AwG/wwKAAH/DA8AAf8MAd0MA/8MCwAB/wwPAAH/DA8AAf8M5gYAAv8MBgAC4AwF/wwB4AwBAAX/DAsAAf8MBQAB/wwBAAHgDAX/DAMAAv8MAd0MDAAB3QwFAAHgDAEABv8MEAAB/wwIAAH/DAHdDAEAAf8MAd0MAf8MGgAB/wz2BgAB/wwHAAH/DALgDAEAA/8MAQAH/wwDAAH/DAQAAv8MAuAMBAAC/wwB4AwB/wwBAAP/DAEAAv8MAd0MA/8MBAAB/wwEAAH/DAHgDAHdDAL/DAIAA/8MAuAMAQAD/wwLAAH/DAQAAv8MBwAB4AwB/wwB3QwBAAH/DAwAAv8MHwAB/wzmBgAB4AwBAAL/DAMAAf8MAuAMAf8MAeAMAgAI/wwJAAL/DALgDAQABP8MAwAH/wwKAAP/DAQAAv8MAeAMAf8MBQAB3QwC/wwEAAL/DALgDAYAAf8MBQAC4AwD/wwMAAPgDA0AAd0MEAAC3QzpBgAC4AwB/wwBAAH/DAEAAeAMAf8MAwAH/wwBAAH/DAsAAeAMAf8MAQAB/wwBAAL/DAHgDAH/DAMABf8MAwAB/wwB4AwB/wwIAAP/DAMAAf8MAd0MAv8MBAAD/wwB3QwB/wwCAALgDAEAAf8MBwAC/wwDAAH/DAIAAt0MCAAB/wwDAAH/DAEAAf8MHwAB/wziBgAB/wwDAAH/DAEAAf8MAQAD/wwDAAH/DAHdDAH/DAEABv8MAQAB4AwGAAL/DAIAAv8MAQAE/wwB4AwB/wwB4AwB/wwDAAb/DAIAAuAMBAAC/wwCAAf/DAHdDAP/DAQACP8MBgAB/wwBAAL/DAkAAf8MCAAB3QwC/wwIAAP/DBMAAv8MCQAB/wwB3QwUAAH/DAHdDMwGAAX/DAEAAv8MAeAMAwAE/wwE4AwBAAH/DAMAAf8MAeAMAf8MBOAMBf8MAuAMAf8MBAAE/wwCAALgDAQAAf8MAQAB/wwC4AwI/wwBAAHdDAH/DAUAAd0MAv8MAQAC4AwB/wwB4AwEAAb/DAIAA/8MCgAD/wwB4AwC/wwGAAX/DBEAAf8MAd0MAeAMAQAC/wwEAAHdDAEAA/8MEwAB3QwIAAL/DBYAAf8MpgYAAf8MAQAE4AwF/wwBAAH/DAEAAf8MBgAF4AwBAAL/DAIAAeAMAf8MBOAMBv8MAQAC4AwGAAH/DAEABeAMBQAE4AwH/wwJAAH/DAEAAf8MAQAE4AwCAAHgDAH/DAPgDAL/DAHdDAH/DAHdDAL/DAoAAf8MAgAC/wwBAAHgDAH/DAMAAv8MAQAB/wwBAAH/DBAAAv8MAQAC/wwB4AwBAAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAF/wwEAAHdDAH/DBUAAv8MAd0MqAYAA+AMBf8MCQAB/wwE4AwBAAH/DAEAAf8MAwAB/wwBAATgDAX/DAkAAeAMBP8MA+AMAf8MAgAC/wwC4AwBAAf/DAkAAd0MBP8MA+AMAgAB/wwCAAH/DAHgDAL/DAHgDAHdDAL/DAHdDAsAAf8MAeAMA/8MA+AMAQAB3QwBAAT/DAHgDAH/DBAAAd0MAQAB/wwBAAP/DAIAAv8MAwAC/wwRAAH/DAHdDAIAAf8MAeAMBAAB/wwC3QwVAAL/DKgGAAH/DAPgDAf/DAcACP8MBgAH/wwBAAP/DAYABv8MAQAC4AwEAAL/DAMABP8MCwAC/wwB3QwB/wwE4AwDAAb/DBIAAf8MBOAMBAAB4AwB/wwBAAHgDAL/DBEAAeAMAf8MAuAMAf8MBAAB/wwB3QwC/wwB3QwSAAL/DAHgDAH/DAcAAd0MFQAC/wwB3QwB/wypBgAB/wwB3QwB/wwBAAX/DAcABP8MAQAB4AwB/wwGAAL/DAUABf8MBgAB/wwB3QwB/wwB4AwCAAHgDAgAAv8MBQAB/wwB3QwB/wwKAAL/DAPgDAYAA/8MEgAC/wwD4AwGAAHgDAH/DBMAAf8MAeAMA/8MBgAC/wwTAAHdDAP/DB4AAv8MqgYAAd0MAgAG/wwIAAHgDAEAAeAMAf8MAeAMAf8MDQAD/wwB3QwB/wwIAAP/DAEAAuAMDgAC/wwLAAL/DAPgDBwAAf8MA+AMHAAD/wweAAHdDAH/DAHdDMwGAAb/DAcAAv8MAgAB/wwQAAL/DAoAAd0MAv8MAQAB/wwB4AwOAAHdDA0AAv8MAuAMHQAC/wwB4AwcAAH/DAHdDAH/DAHgDB4AAv8MzgYAAv8MAd0MCQAB/wwBAAH/DCIAAeAMHgAC4AwdAAL/DAHgDBwAAf8MAQAC/wweAAHdDP8GAAL/DB8AAeAMHQAC/wwB4AwfAAHgDP4GAAH/DB8AAf8MHwAB4AwgAAH/DB4AAv8M3wcAAf8MgD8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("oDgAAf8MHwAB/wwfAAHgDB8AAv8M3gcAAeAMAf8MHgAB4AwB3QyfBwAB/wwfAAH/DB4AAeAMAf8MHgAB/wwB4Ay+BwAB4AwfAAHgDAH/DJ4PAAH/DP8HAAH/DAIAAv8MHAAB/wwB3QzdBwAC/wwBAAH/DAHgDBwAAd0MAeAMAd0M3AcAA+AMAv8MGwAB3QwB/wwB3QwC/wzbBwAE/wwB4AwbAAHdDAL/DAHgDNwHAAL/DAHgDAH/DBwAAf8MAd0MAf8MAd0MHAAB/wwfAAH/DD8AAf8M3wYAAf8MAeAMAv8MHAAB4AwC/wxdAAH/DP8GAAH/DAIAAf8MHAAD/wwdAAHgDAH/DAHdDB0AAeAMHwAB/wwfAAHdDOAGAAH/DB4AAv8MHgAB4AwB/wwfAAH/DB4AAf8MHwAB/wzgBgAB/wweAAL/DB4AAeAMAv8MHQAC/wwfAAH/DB4AAd0MgAcAAf8MPgAC/wweAAH/DL8HAAH/DB8AAf8MAQAB/wweAAH/DP4GAAH/DB8AAf8MHwAB/wwgAAH/DB4AAf8M/z4A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("zgQAAf8MHwAB/wwfAAH/DB8AAeAMHQAC/wwB4AwFAAH/DBcAAv8MAQAB/wwEAAH/DBcAA/8MAgAE/wwYAALgDAEABf8MGQAH/wwBAALgDAEAAf8MAgAC/wwRAAb/DALgDAEAAf8MAeAMFgAB3QwE/wwBAAHgDB0AAd0MAeAMAf8MAeAM9QUAA/8MHQAC4AwB/wwdAAT/DBsAAf8MAeAMAQAB4AwcAAT/DAEAA/8MGQAB4AwB3QwB/wwBAAP/DBwABP8MAgAB4AwdAAH/DAEAAf8MAeAMHgAB3QwB/wzYBAAB/wwcAAH/DAIAAf8MHAAB/wwCAAH/DBwAAf8MAgAB/wwcAAH/DAIAAf8MHAAC/wwB4AwB/wwcAAH/DALgDAL/DBsABv8MGgAB/wwB4AwG/wwXAAHgDAH/DAHdDAEAAf8MAwAC4AwXAAH/DAYAAv8MAeAMHAAD/wwB3QwB4AwfAAH/DB8AAf8MlwYAAuAMHAAC/wwD4AwBAAH/DBoABP8MAuAMGgAB3QwC/wwBAAL/DALgDAH/DBgAAf8MAeAMAwAC4AwB/wwdAAHdDAH/DAHdDAHgDB8AAf8MvgUAAf8MFgAB/wwIAAH/DBYAAf8MCAAB/wwWAAH/DAgAAf8MFgAB/wwBAAHgDAL/DAQAAf8MFgAB/wwB4AwB/wwBAAL/DAMAAf8MFwAB/wwC4AwB/wwB4AwC/wwBAAH/DBgAAf8MAeAMAf8MAQAB4AwD/wwZAAHdDAIAAd0MAf8MAd0MqtkBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          treeSpectralLarge2: cu("treeSpectralLarge2", {
            x: 34,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("4EcAAf8MwR4AAf8MHwAB/wwfAAH/DB8AAf8MHQAB/wwBAAH/DP0GAAL/DB4AAv8MHgAC/wweAALgDAH/DB0AAf8MHwAB4AwBAAH/DB0AAf8MAQAB/wyABgAB/wwcAAL/DAEAAf8MHAAE/wwcAAT/DBwABP8MHAAC/wwB4AwB/wwcAAPgDAH/DBwAA/8MHQAC/wyeBgAC/wweAAP/DB0AA/8MHQAD/wwdAAL/DB4AAeAMAv8MHQAB/wwCAAH/DBwAAf8MwAUAAf8MHwAB/wwfAAH/DB4AAv8MHgAD/wwdAAP/DB0AA/8MHQAC/wweAAP/DB0AAv8MHgAD/wz/BQAB/wwfAAL/DBwABP8MHAAC/wwB3QwdAAL/DB4AAv8MHgAB/wwfAAHgDAH/DB4AAv8MoAYAAuAMHAAD/wwdAAL/DB4AAf8MAd0MHgAB/wwfAAH/DB8AAf8MHwAB/wyBBgAB/wwfAAL/DBwAA+AMHgAB4AweAAH/DL8HAAH/DAEAAf8MHQAC/wy+WQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gEAAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DL8HAAHgDB8AAeAMHwAB4AwfAAH/DP8GAAHgDB8AAuAMHgAB4AwfAAL/DB4AAf8M4AYAAf8MHwAB/wweAAHgDAH/DB4AAv8MHgAB/wwB3QzeBwAB/wwfAAH/DN8WAAL/DP4HAAHdDAH/DP4HAAH/DP93AA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("7wMAAf8MHwAB/wwfAAH/DB8AAf8MHAAB4AwCAAH/DBsAAf8MAuAMAv8MHAAB/wwC4AwcAAT/DAHgDBsABP8MHQAD3QydBgAB/wwfAAH/DB8AAf8MHwAB/wwgAAH/DEAAAf8MHQAD/wzx8QEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }])
        };

        function Ou(uu, Eu, ju) {
          const su = new Cu.d;
          for (const Zu of ju) {
            const uu = su.get(Zu.chunkX, Zu.chunkY, Zu.chunkZ);
            if (!(0, Uu.H)(uu)) throw new Error(`Duplicate chunk at ${Zu.chunkX}, ${Zu.chunkY}, ${Zu.chunkZ}`);
            su.set(Zu.chunkX, Zu.chunkY, Zu.chunkZ, Zu.rle)
          }
          return new fu.e(uu, {
            x: 0,
            y: 0,
            z: 0
          }, Eu, su)
        }
        const Yu = {
          rockJungleLarge1: Ou("rockJungleLarge1", {
            x: 30,
            y: 19,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("xgEAAWcDAAFnGwAFZwwAAWcDAAFnCwADZwMAAWcDAAFnBQAFZwcAAWcDAAFnBQAFZwYAA2cIAAVnBgADZxMAA2fhBgABZxcAAWcDAAFnAQAFZw4AAWcGAAVnAQAFZwQAAWcHAAVnBQADZwEAAWcBAANnAQABZwEABWcFAAVnBwAJZwEABWcGAANnCAAIZwMAA2cTAANnLAAD7QPNBAAXHAkABRwBAhEcCQABAgQcAQIPHAICCQACAgEcAgIBow8CAgEcAQIBHAICAxwBAgMcAwIJAAGjDwQCAQ4EAgEcAwIBHAMCARwCAgKjDwoAAaMPAQICow8BDgKjDwECAaMPAQICow8DAgGjDwMCAaMPAQABDgsAAaMPAQABZwEOAWcBAAGjDwEAAQIBAAEOAaMPAQIBow8BAAGjDwECAaMPAgABDggAAWcCAAEOBWcCAAGjDwEAAQ4BAAGjDwMAAaMPAgABZwEOAWcFAAVnAQ4FZwMAAWcBDgFnBgAFZwQABWcBDgRnAwAFZwUABWcFAAtnAQAFZwYAA2cIAAlnAgADZxMAA2cBAANnJwAF7QMSAAPtAwcAA+0DqwQAAQIYHAcAAQIYHAcAAaMPAQIWHAECCAACAgQcAQIPHAICCAABow8CAgEcBQINHAECAaMPCAABDgGjDwQCAaMPDwIBow8JAAEOAQABow8BAgKjDwFnAqMPDQIJAAFnAQ4BZwEAAaMPBWcNow8BAAFnBgAFZwEABWcEAAFnBAAClgEBAAVnBAAGZwEABGcCAAVnBQAFZwUAC2cBAAVnBgADZwgACWcCAANnEwADZwEAA2cmAAftAxAABe0DBQAF7QMSAAPtA5UEAAECGBwHAAECGBwHAAGjDwECFxwIAAECFhwBAggAAaMPAgIBHAUCCBwBKAEAAxwCAgkAEAIBKAEABAIBow8JAAKjDwECAWcDow8BZwgCAqMPAwIBow8JAAFnAgABow8FZwijDwEAAfYDAqMPAWcDAAFnBAAFZwIAA2cDAAFnAwABZwIAAfYDAgAFZwQABWcCAAFnAQABZwMABWcCAAH2AwMAA2cGAAtnAgADZwMAAfYDDwAIZwgAAfYDEwADZwkAAfYDHAAH7QMPAAftAwQABe0DEQAF7QOVBAAYHAgAAQIRHAECBRwIAAECERwBAgUcCAABow8RHAGjDwUcCQACAgkcBgIBAAICAhwBAgkAEQIBAAUCCQACow8JAgajDwEAAqMPAgIBow8GAAFnAwABZwmjDwEAAZYBAwABlgEDAAKjDwcABWcFAAH2AwgAAWcDAAFnCQADZwMAAWcCAAH2AwFnBwAFZw8AA2cB9gMBZwgABGcDAAFnDAACZwH2AwwABWcOAAH2Aw0AA2cPAAH2AwYAB+0DDwAH7QMEAAXtAxEABu0DlQQAFxwJABUCAhwJABUCAhwJABWjDwIcCwABlgEHAAGWAQUAAZYBBAABHAECHgACAh4AAQIBow8eAAGjDxwAAWcMAAFnAwABZwgAAWcDAAVnCgAFZwgACWcBAAFnCQADZwoAA2cBAAhnGwAFZxYABe0DAQADZwwAB+0DBQAD7QMSAAftAxwAA+0D9QMAFxwJAAECBRwBAgYcAQIDHAECAhwBAgIcCQABAgUcAQIGHAECAxwBAgIcAQICHAkAAaMPBRwBow8GHAGjDwMcAaMPAhwBow8CHAoABQIBAAICBBwBAAMcAQACHAEAAhwKAAUCAQAGAgEAAwIBAAICAQACAgoABaMPAQACow8EAgEAAwIBAAEOAQIBAAICDAABlgEFAASjDwEAA6MPAQABDgGjDwEAAqMPFAABlgEFAAFnAQ4BZwIAAQ4KAAFnDAABZwEABWcBAAEOCAAFZwgACmcBDgFnBwAFZwgADWcHAANnCgADZwQABWcXAAPtAwIAA2cNAAXtAxwAB+0DGgAF7QP0AwAXHAkAAQIFHAECBBwDAgMcAQIBHAICAhwJAAECBRwBAgIcAQIBHAMCAxwBAgEcAgICHAkAAaMPBRwBow8CHAECARwDow8DHAGjDwEcAqMPAhwKAAECAxwBAgEAAhwBow8BHAMAAQICHAEAARwCAAEcAQIKAAUCAQACAgEAARwDAAMCAQABAgIAAgIKAAGjDwMCAaMPAQAEAgMAAaMPAgIBAAECAgABAgGjDwoAAQ4Dow8CAAKjDwICAwABDgKjDwEAAaMPAgABow8LAAEOBwACow8DAAEOAwABZw0AAWcBDgFnBgAB9gMBlgECAAFnAQ4GZwoABWcBAAFnAwABZwIACWcBAAFnCAAFZwEABWcCAA1nBwADZwMAA2cB9gMDAAxnEAAB9gMLAANnDgAD7QMB9gMcAAftAxoABe0D9AMAFxwJAAECBRwBAgocAQIBHAICAhwJAAECBRwBAgocAQIBHAICAhwJAAGjDwUcAaMPChwBow8BHAKjDwIcCgACAgIcAQIBAAMcAcwBAQABHAICAhwBAAECAgACHAoABQIBAAICARwCAAUCAQABAgIAAgIKAAKjDwICAaMPAQAGAgKjDwICAQABow8CAAICBwABZwMAAWcCow8CAAajDwIAAqMPAQABDgIAAqMPBwAFZwgAAZYBBAABZwEAAQ4BAAFnCgADZwwAAWcBAAVnCgAFZwMAAWcEAApnAgABZwYABWcBAAVnAgANZwcAA2cCAAVnAwALZw4AA2cGAANnNAAH7QMaAAXtA/MDABgcCAABAgYcAQIIHAECARwBAgEcAgICHAgAAgIFHAECCBwBAgEcAQIBHAICAhwIAAGjDwECBRwBow8IHAGjDwEcAaMPARwCow8CHAkAAaMPAQIDHAECAQAEHAICAcwBARwBAAEcAQABAgHPAQGWAQIcCgAFAgEABgIDAAECAQABAgIAAgIKAAGjDwMCAaMPAQAEAgKjDwQCAQABow8CAAICCQABZwEAA6MPAgAEow8CAASjDwQAAqMPBwAFZwQAAQ4IAAEODQAGZwMAAQ4EAAFnAwABZwEAAWcMAAVnAgABZwEOAWcDAAlnCwADZwIABWcDAAlnDwAFZwQACGcQAANnBgAGZzIABe0DHAAD7QP0AwAYHAgAAQIGHAcCAhwBAgEcAQIFHAgAAgIFHAcCAhwBAgEcAQIFHAgAAaMPAQIFHAejDwIcAaMPARwBow8FHAkAAaMPAQIBKAECARwBAgMAAZYBAwACAgEAAQIBAAIcAwIJAAEOBQIHAAICAQABAgEABQIJAAEOAaMPAQIBow8BAgGjDwcAAqMPAQABow8BAAICA6MPCAABZwEOAWcBow8BAAGjDwGWAQgAAZYBAwACow8KAAVnEAABDgoABmcDAAFnCAABZwIAAQ4BZwoAA2cBAAVnAwABZwQAA2cBDgFnAwABZwsACGcCAAtnDAAGZwMACmcOAANnBgAGZxkAA+0DFwAD7QOUBAAYHAgAAQIGHAECBRwKAgEcCAABAgYcAQIFHAoCARwIAAGjDwECBRwBow8FHAujDwkAAgIBHAEAAgIBAAMcAgICAAGWAREAAaMPAQIBKAEAAgIBAAUCFQAFow8BAAMCAqMPFAABZwYAA6MPFAAFZwUAAZYBFQAFZwIAAWcZAANnAQAFZwEAAWcEAAFnAwACZwIAAWcMAAlnAgALZwsACGcDAApnDwADZwcABmcVAAXtAxwAA+0DjQQAAQIYHAcAAgIDHAECAhwBAgUcAQICHAECARwBAgUcBwABow8CAgIcAQICHAECBRwBAgIcAQIBHAECBRwIAAGjDwECAhwBow8CHAGjDwUcAaMPAhwBow8BHAGjDwUcCAABlgEBow8CAgEAAgIBlgECAgMcAQABAgEcAZYBAQIBAAEcAQIDHAoAAgIBAAICAQAFAgEAAgIBAAECAQAFAgoAAqMPAQACow8BAAKjDwMCAQABow8BAgEAAaMPAQABAgGjDwMCBwABZwMAAWcCAAEOAwADow8CAAGjDwMAAaMPAQADow8HAAVnAgABDgMAAQ4MAAEOCAADZwEAAmcBDgFnAgABDgcAAWcDAAFnAQ4IAApnAQ4BZwYABWcBDgFnCAAMZwUACGcLAAhnBgAHZw8AA2cKAANnDQAD7QMEAAftAxoABe0DjAQAAQIYHAcAAgIDHAoCAhwBAgEcAQIFHAcAAaMPAQIDHAoCAhwBAgEcAQIFHAgAAaMPAgIBHAqjDwIcAaMPARwBow8FHAkAAwIKAAEcAgABAgEAARwBAgEcAgIJAAKjDwECCgABAgIAAQIBAAUCCwABow8KAAMCAaMPAQABAgGjDwECAqMPFgADow8CAAGjDwEAAaMPGQABlgEB9gMRAAFnAwABZwkAAfYDAwABZwsACWcBAAFnBQAB9gMBAAZnCAANZwMAAfYDAQAIZwcAA2cBAAhnAwAB9gMCAAdnDwADZwQAAfYDBQADZwwABe0DAwAH7QMSAAPtAwUABe0DjAQAAQIYHAcAAgIMHAECBBwBAgUcBwABow8BAgwcAQIEHAECBRwIAAGjDwECCxwBow8EHAGjDwUcCAABlgEIAgQcAQAEAgEAAgICHAECCQABow8LAgEABAIBAAUCCgAHow8EAgEABKMPAQACow8CAgGjDwoAAQ4GAASjDwcAAQ4Cow8LAAEOCAABlgEIAAEODAABZwEOAmcDAAFnAwABZwMAAWcCAAFnAQ4BZwoACWcDAAVnAQAFZwIAAWcGABBnAgAIZwcAA2cFAANnBwAGZysAB+0DAgAH7QMRAAXtAwQABe0DjAQAAQIYHAcAAwIHHAMCARwGAgUcBwABow8EAgQcBAIBHAYCBRwIAAKjDwICBBwBAgOjDwEcBqMPBRwJAAECBBwBAAEcBAABAgIAAZYBAwABAgMcAQIJAAGjDwIcAQIBKAEAAQIEAAECBgAFAgoAAqMPBAIBow8DAAGjDwYAAaMPAwIBow8MAASjDwwAA6MPDgABlgEBAAH2AwIAAWcDAAFnEwABZwQAAfYDAgAFZwUAAWcLAAVnAgAB9gMDAAZnAQAGZwgABWcCAAH2AwQABWcBAAZnCQADZwMAAfYDBQADZwMABGcQAAH2AxwAB+0DAwAF7QMSAAXtAwUAA+0DjQQAAQIYHAcAAgIIHAECARwDAgocBwABow8BAggcAQIBHAMCChwIAAGjDwECBxwBow8BHAOjDwocCQACAgMcAQACAgEAAQIBlgEBAAGWAQICBxwBAgkAAaMPBAIBAAICAQABAgMACgIGAAFnAwABZwQCAqMPAQABow8DAAKjDwcCAaMPBgAFZwSjDwEAAZYBBQABDgEAB6MPCAADZwoAAWcBAAEOAwABlgEDAAGWAQkAAWcDAAFnBQAGZwIAAWcDAAFnCQAFZwEAAWcDAAdnAQAFZwoAA2cCAAtnAgAFZw8AA2cDAANnAwAFZxwAA2cNAAftAwQAA+0DEwAF7QOVBAABAhgcBwACAgUcBAIFHAQCBRwHAAGjDwECBRwEAgUcBAIFHAgAAaMPAQIEHASjDwQcBaMPBRwJAAECBBwEAAMcAgIEAAQcAQIJAAGjDwQCBAAFAgQABQIIAAFnAQAEAgQAAgIBDgKjDwQABAIBow8GAAVnA6MPBAACow8BDgYABKMPBwAFZwgAAWcBDgFnBwABDgkAA2cIAAVnAgABZwMAAQ4SAAFnAQALZwEOAWcPAAtnAQAGZw4ABWcCAANnAwAFZw8AA2cKAANnDgAF7QMcAAPtA5YEAAECGBwHAAICBRwBAgQcCAIFHAcAAaMPAQIFHAECBBwIAgUcCAABow8BAgQcAaMPBBwIow8FHAgAAQ4BAgQcAQABAgEcAgIBlgEHAAQcAQIIAAEOAaMPAQIBHAICAQAEAggABQIHAAFnAQ4BZwQCAQABow8BAgKjDwgABAIBow8GAAVnAQICow8CAAGjDwoABKMPBwAFZwGjDwGWAQMAAQ4DAAFnEgADZwYAAQ4BAAVnAQABZwIAAWcTAAFnAQ4NZwsAAWcDAAtnAQAHZwkACmcHAAZnCgADZwIAA2cKAANnDwAD7QO2BAABAhgcBwACAgUcDQIFHAcAAaMPAQIFHA0CBRwIAAGjDwECBBwIow8BAgSjDwUcCQABAgQcDQABAgMcAQIJAAGjDwECARwCAg0ABQIIAAFnAQAEAg0AAaMPAwIBow8GAAVnAQICow8NAAEOA6MPBwAFZwGjDwYAAWcDAAFnBAABDgEAAZYBCQADZwgABWcDAAFnAQ4BZxMAAWcBAAVnAgAHZwsAAWcCAAlnAgAHZwkADWcEAAVnCgAFZwEAA2cYAANnugQAAQIYHAcAAgILHAcCBRwHAAGjDwICChwHAgUcCAABow8BAgocBAIDow8FHAkAAaMPAQIDHAcCBgABAgMcAQIKAAECARwKAgUABQIGAAFnAwABZwMCCKMPBQABow8DAgGjDwYABWcBAgKjDwEAAZYBBAABDgcAA6MPCAADZwEAAaMPCAABDhYAAQ4HAAFnAQ4BZwUAAWcPAAEOAgABZwMABWcCAAVnDAABZwEOAWcBAAlnAgAGZwoABWcBAANnAQADZwQABWcKAAVnDQADZwwAA2e6BAABAhgcBwACAgscBwIFHAcAAaMPAgIKHAcCBRwIAAGjDwICBRwBKAMcAwIEow8FHAkAAaMPAQICHAIoAcwBCQABlgEBAAECAxwBAgoAAaMPBBwC+wkDHAcABQIGAAFnAwABZwQCAWcBAgKjDwFnAqMPBQABow8DAgGjDwYABWcEow8FZwgAA6MPCAADZwMAAZYBAgADZwkAAQ4XAAJnAwABZwIAAQ4BZwMAAWcQABBnCQABZwYAB2cBAAdnCAAFZwUAA2cEAAVnCgAFZw0AA2cMAANnugQAAQIYHAcAAwIWHAcAAaMPAwIVHAgAAqMPAQIVHAkAAZYBAaMPAgIGHAQCBxwCAgsAFQIIAAFnAQABZwKjDwECAWcCAgFnAQIEow8HAgKjDwYADmcDAAejDwgACGcBAAVnEwADZwYAA2cDAAJnBwABZxIACGcCAAZnBwABZwMAAWcFAA9nBwAFZwgAA2cBAAdnCQADZw4AA2fKBAAYHAgAAwIEHAMCDhwIAAoCDhwIAAOjDwQCA6MPBAIKHAgAAQ4BAAGWAQSjDwGWAQEAAQ4GAgMcBQIIAAEOCAABDgSjDwoCBwABZwEOAWcCAAFnAwABZwEOAWcDAAKjDwMCBaMPBgAOZwMAAQ4Dow8CAAGWAQEAAQ4GAA5nAwABDgcAAQ4HAANnAQADZwIAA2cDAAFnAQ4BZwUAAWcBDgFnFAAGZwIABWcTAA1nFAADZwIABmfnBAAFAgUcAwAHHAwACgIDAAcCDAAKAgMABwIQAAajDwMAB6MPEAABDgkAAZYBAgABlgESAAEOGwABZwIAAWcBDgFnAwABZxQADmcSAA5nEwADZwEAA2cCAANnBAABZwcAAWcVAAVnAwAFZxMABWcDAAVnFAADZwUAA2elBgABZwMAAWcBAAFnAgABZwMAAWcSAA5nEwAIZwEAA2cYAANnBwABZwMAAWcDAAFnAwABZxMABWcDAAVnFAADZwUAA2fJBgABZwMAAWcbAAVnHAADZ/glAA==")
          }]),
          rockJungleLarge2: Ou("rockJungleLarge2", {
            x: 29,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("zwEAAWcDAAFnGwAFZxwAA2f3BQABow8HAgGjDxgAB6MPdAABZwMAAWcbAAVnBgABZxUAA2cFAAVnFwABZwMABWcXAAhnGQADZ7kFAAGjDwMCBhwCAgGjDxQAAaMPCQIBow8WAAKjDwYCAaMPGQAGow8aAAGWAQEAAZYBAgABDhYAAWcIAAEOFAAFZwUAAWcBDgFnEwAFZwQABWcTAANnAwABZwEABWcXAAhnGAAFZxwAA2eXBQABow8CAgscAgIBow8QAAGjDwMCCBwCAgGjDxIAAaMPBAIEHAMCAaMPEwABDgKjDwgCAaMPFAABDgIAAqMPBAICow8BlgETAAFnAQ4BZwMABKMPFQAFZwIAAQ4DAAFnFAAFZwIAAQ4BAAZnAwABZw4AA2cCAAFnAQ4LZxIACGcCAANnEwAFZxwAA2eWBQABow8BAg4cAwIOAAGjDwICCxwCAgKjDw8AAwIKHAECAaMPEQACow8DAgYcAgIBow8NAAFnAwABZwIAAaMPCgIOAAVnAQABZwEAAqMPBgICow8PAAhnAQADow8BZwKjDwEAAWcSAAVnBAAFZwIAAWcQAANnAwABZwIAA2cBAAVnEgAFZwQABWcSAAVnBQADZxQAA2eVBQACAhEcAgIMAAICEBwBAgGjDwwAAaMPAQIOHAICAaMPDgABow8DAgkcBAINAAFnAgAEAgccAwICow8LAAVnA6MPAWcIAgKjDwEAAQ4LAAlnBwIBow8DAAEODAADZwEAA2cBAAejDwMAAWcBDgFnEwABZwMAAWcEAAVnEgAFZwQABWcMAAFnAwABZwIAA2cGAANnDQAFZxwAA2cGAAFnAwABZxsABWccAANnsQQAAgISHAECAaMPCgABow8BAhEcAgILAAEOAaMPAQIPHAICAaMPCwABDgEAAgINHAICAaMPCwABZwEOAWcBow8CAgscAgIBow8LAAVnAaMPAwIHHAMCAaMPDAAFZwEAAaMPCwIBow8OAANnAwACow8HAgKjDwIAAWcUAAejDwIABWcbAAVnDgABZw0AA2cNAAVnGwAFZwcAAWcUAANnBgAFZxsABWccAANnkAQAAgIUHAECCgACAhIcAQIBow8KAAGjDwECERwCAgwAAaMPAQIPHAICAaMPCwABZwEAAQINHAMCAaMPCgAFZwMCCRwDAgGjDwsABWcEAgccAgICow8NAANnAQADow8JAgGjDwFnAQABZwEAAWcBAAFnDAABDgIAAaMPBwIBow8BAAdnDAABDgMAB6MPAwAFZwwAAWcBDgFnCAABDhMABWcHAAEOEwAFZwYAAWcBDgFnEwADZwYABWcbAAVnHAADZ5AEAAECFRwBAgGjDwgAAaMPAQITHAICCgACAhIcAQIBow8KAAGjDwICDxwCAgGjDwkAAWcCAAGjDwFnDhwDAgoABWcCAgocAwICow8LAANnAQADAgkcAgIBow8RAAKjDwoCAqMPAwABZxAAAaMPCQIDAAVnDwAJow8DAAVnDAABZwQAApYBCQADZwsABWcIAAFnAwABZw4ABWcHAAZnDwADZwYAB2cZAAVnHAADZ48EAAGjDwECFRwCAggAAaMPAQIUHAECAaMPCQABAhMcAQIBow8KAAGjDwECEBwDAgwAAgIPHAICAaMPDAABow8CAgwcAgICow8BDggAAWcDAAFnAaMPAgIKHAMCAgABDggABWcBAAGjDwwCAqMPAQABZwEOAWcIAANnAwABow8KAgGjDwIABWcOAAqjDwMABWcKAAFnAwABZwQAAWcIAANnCwAFZwQAAWcFAAFnEQADZwUAAmcCAAVnGAAIZxkABmesBAACAhYcAQIHAAGjDwECDRwB+gkBvQcGHAECAaMPCAABow8BAgYcASgBLQQcAr0HBRwCAgoAAgIGHAEoBBwCvQcEHAICAaMPCgABow8BAhAcAgIBow8MAAGjDwECDhwCAgGjDwsAAWcCAAICDBwCAgGjDwoABWcBow8OAgGjDwIAAWcIAAVnAQABow8MAgGjDwEABWcHAANnAwAMow8BDgEABWcNAAGWAQQAAe0DAcMNAgABZwHTDQEAAQ4CAANnFAAB0w0DAAHTDQFnAQ4BZxcAAWcB0w0DAAHDDQRnFgABZwHDDQHTDQEAAtMNBGcWAAHtAwXTDQNnGAABZwIAAWcB7QOPBAABAhccAQIHAAGjDwECCBwCvQcDHAH6CQG9BwYcAQIBow8IAAICBxwCvQcCHAHUCwK9BwUcAgIJAAGjDwECDBwCvQcEHAICAaMPCQABDgGjDwECERwBAgGjDwoAAQ4BAAICDxwBAgGjDwoAAWcBDgFnAaMPAgINHAICCgAFZwGjDw8CAWcDAAFnBgAFZwEAAaMPDQIBow8FZwcAA2cCAAGWAQijDwECBKMPAgADZxQAAWcfAAHgDwUAAWcZAAHgDwQABGcXAAHTDQMAAdMNBGcXAAHTDQMAAdMNA2cYAAFnA9MNAWcB7QMbAALtA/EDAAECFxwBAgcAAaMPAQIIHAO9BwIcAvoJBhwBAgGjDwgAAQIHHAHMAQO9BwHUCwHgDwK9BwYcAQIJAAGjDwECCRwBvQcBHAHgDwK9BwUcAQIBow8KAAICChwB4A8GHAICCwABow8CAgkcAeAPBRwCAgGjDwoAAWcBAAGjDwICCBwB4A8EHAICAaMPCQAFZwGjDwkCAeAPBQIBow8KAAVnAQABow8IAgHgDwQCAaMPDAADZwMAB6MPAQIB4A8BAgOjDw8AAWcDAAFnAQABlgEBAAGWAQMAAeAPEwAFZwcAAeAPBQABZw4AA2cGAAHgDwEAAeAPAgAEZxcAAeAPAQAB4A8CAANnGAAB0w0BAAHgDwEAAdMNGwABZwPTDR0AAWcC7QPwAwABAhccAQIHAAGjDwECCBwEvQcD+gkGHAECAaMPCAABAggcB70HBhwBAgkAAaMPAQIJHAW9BwUcAQIBow8GAAFnAwABZwECERwCAgcABWcCAg8cAgIBow8IAANnAQABZwICDRwCAgFnAwABZwUABWcBow8PAgGjDwVnBgADZwIAAaMPDQIBow8CAANnDQAIow8BAgSjDxEAAWcHAAFnAwABZxEABWcFAAHgDxUABWcFAAHgDxYAA2cGAAHTDQMAAcMNGwABww0DAAHTDRwAA9MNAe0DHgABZ/ADAAECFxwBAgcAAaMPAQIKHAK9BwP6CQYcAQIBow8IAAECChwFvQcGHAECCQABow8BAgkcBb0HBRwBAgGjDwgAAWcBAAICERwCAgcABWcCAg8cAgIBow8HAAVnAaMPAgINHAICAaMPAQABZwcAA2cCAAGjDw8CAaMPBWcKAAEOAaMPDQIBow8BAAVnCgABDgEADaMPAwADZwoAAWcBDgFnAZYBBAABZwHDDQMAAdMNEQAFZwUAAdMNAgAB4A8B0w0BZwMAAWcMAAVnAQABZwMAAdMNAgAB4A8B0w0FZw0ABmcDAAHDDQHTDQHgDwLTDQEAA2cQAANnBAAF0w0bAAFnAe0DAQABZwHtA48EAAECFxwBAgcAAaMPAQIVHAECAaMPBwABDgICExwCAggAAQ4Bow8BAgkcAS0JHAECAaMPBwABZwEOAWcBow8BAhEcAQIBow8BDgYABWcCAg8cAgIBAAEOBgAFZwGjDwICDRwCAgGjDwFnAQ4BZwYAA2cCAAGjDw8CAaMPBWcLAAGjDw0CAaMPAQAFZwwADaMPAwADZwsAAWcHAAHtAwIAAe0DAZYBEQAFZwUAAWcGAAFnDgAFZwcAAe0DAgAFZw0ABmcFAALtAwEABWcOAAVnAwABZwIAAu0DAQADZxAAA2eYBAABAhYcAgIHAAGjDwECFRwBAgGjDwgAAgITHAECAaMPCQABow8CAhEcAgIJAAFnAQABow8BAhEcAQIBow8HAAVnAaMPAQIPHAECAaMPCAAFZwEAAgINHAICAgABZwcAA2cCAAGjDw8CAaMPBWcLAAGjDw0CAaMPAQAFZwwADaMPAQ4CAANnCQABZwMAAWcDAAGWAQgAAQ4OAAVnCwABZwEOAWcOAANnAQ4BZwkABWcOAAVnCAAFZw4ABWcJAANnEAADZ5gEAAICFRwCAgcAAaMPAQIUHAICCQABow8BAhMcAQIBow8KAAICERwBAgGjDwcAAWcDAAFnAgIPHAICCAAFZwGjDwICDRwCAgGjDwkAA2cCAAFnAgILHAICAaMPAWcDAAFnBgAFZwGjDw0CAaMPAQAFZwcAA2cCAAGjDwsCAaMPAwADZw4AC6MPGgABlgEDAAGWASIAAWcSAAFnBgABZwMABWcOAAVnBAAJZw4ABWcFAANnAQADZxAAA2eYBAABow8BAhUcAQIJAAICExwBAgGjDwkAAaMPAgIRHAICCwABow8CAg8cAgIBow8MAAGjDwECDxwBAgGjDw4AAaMPAgILHAICAaMPDQABZwIAAwIJHAMCDAAFZwKjDwsCAqMPDAAFZwIAAaMPCQIBow8PAANnBAAJow9AAAFnAwABZw4AAWcDAAFnBgABZwEABWcOAAVnBAAIZxAAA2cFAAVnHAADZ5AEAAECFBwCAgkAAaMPAgIRHAICCwACAhEcAQIBow8LAAKjDwECDxwBAgGjDwwAAQ4BAAECDhwCAg0AAQ4BAAGjDwMCCRwBAgFnAQIBow8BAAFnCgABZwEOAWcBAAQCBxwCAgVnCQAFZwOjDwkCAqMPA2cKAAVnAQABZwEAAaMPBwIBow8QAAZnAgAHow8TAANnCQABDh8AAQ4eAAFnAQ4BZxwABWcbAAVnHAADZ5AEAAGjDwECEhwCAgsAAgIRHAECAaMPCwABow8BAhAcAQIBow8NAAGjDwECDhwCAg8AAgIMHAICAaMPDwABow8EAgccAwIBow8BZw0AAWcCAAGjDwwCBWcJAAVnAQADow8HAgKjDwVnCQAFZwQAB6MPAwADZwsABmcBAAFnAwABZxUABWcBAAVnFgADZwMAA2cjAAFnHQAFZxsABWccAANnkQQAAgIQHAMCCwACow8PHAICAaMPDgAPHAECAaMPDwACAgscAgIBow8BDg8AAwIJHAMCAQABDg4AAWcCow8BAgFnCQICow8BZwEOAWcKAAFnAgAFZwgCAaMPAQAFZwkAB2cGow8BZwKjDwEABmcKAANnAQ4BZwcABWcBAANnDAAFZwMAAWcDAANnEQAFZwEABWcWAANnAgAFZxwAA2cBAAFnAwABZxsABWccAANnsgQAAaMPAQINHAICAaMPAQIOAAECDBwCAgGjDxAAAaMPAQILHAECAaMPEgADAgccAgIBow8TAAGjDwsCFAACZwGjDwICAWcEAgKjDwMAAWcOAAhnBKMPAwAFZwwAB2cBDgQAAWcCAAVnDQADZwMAAQ4CAAVnAQADZwwABWcCAAFnAQ4BZwEABWcQAAVnAQAFZwEAA2cSAANnAgAFZxwAA2f4BAABow8CAgocAgIBow8RAAMCCBwCAgGjDxIAAqMPBAIDHAMCAaMPEwABDgEAAaMPCAIBow8UAAEOAgADow8CAgFnAqMPAQABZxIAAWcBDgFnAQABZwIAAqMPBmcDAAFnDAAIZwMAA2cBAAVnDAAIZwMAAWcBDgFnAgADZwwAAWcBAAZnAwAFZxAABWcDAAFnAgAFZxEAA2cCAAVnAQADZxcABWccAANn+gQAAaMPBAIEHAICAaMPFQABow8IAgGjDxcAA6MPBAIBow8YAAEOAgAEow8ZAAEOBgABZxUAAWcBAAFnAQ4BZwMABWcRAAhnAgAFZxEACGcDAANnEwAGZwMABWcWAAFnAwAGZxYABWcBAANnGAADZ50FAAGjDwYCGgAGow8fAAEOHwABDh4AAWcBDgFnEgABZwMAAmcEAAVnEQAIZwIABWcSAAdnAgAFZxUAA2cDAAVnHAADZ94GAAFnFgABZwMAAWcCAAVnFAAFZwIABWcVAANnBAADZ5wHAAFnAwABZxsABWccAANnrSYA")
          }]),
          rockJungleLarge3: Ou("rockJungleLarge3", {
            x: 29,
            y: 22,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("iwkAAWcdAAVnAgABZxMAAWcDAAtnEQAFZwEAA2cBAAVnEgADZwcAA2f5BQAIAhgAAaMPAQIBow8DAgKjDxgAAQ4Bow8BAAOjDxoAAQ4EAAEOGQABZwEOAWcDAAEOGAAFZwEAAWcBDgFnAQABZwMAAWcOAAFnAgAPZwwABWcBAANnAQAFZwEAA2cNAAVnAQAIZxMAA2cDAANn2AUADRwCAhEABwIFHAICAaMPEQANAgGjDxIAB6MPBQIBow8TAAEOBAABZwEABaMPFAABDgIABWcCAAFnBAABZw8AAWcBDgFnAQAPZwwABWcBAANnAQAKZwwABWcBAAhnAgADZw4AA2cCAAVnHAADZ7cFABAcAgIOAAcCCBwCAgGjDw4ACAIGHAICAaMPDwAHow8CAgMcAwIBow8BDhEAAZYBAQABZwIAAaMPBgIBow8BAAEOEwAEZwGjDwMCAqMPAQABZwEOAWcPAAFnAwADZwEAA6MPB2cMAAVnAgABZwEOAWcBAANnAQAFZwwABWcBAAVnBQADZw4AA2cCAAVnHAADZ7YFAAYcAQILHAECDQAHAgscAQINAAYCAQYBAgkcAQIBow8NAAajDwF+AQIIHAICFQABow8BAgYcAgIBow8WAAMCARwEAgGjDwFnDgABZwMAAWcDAAGjDwYCAaMPBGcMAAVnAwABZwKjDwECA6MPBWcNAANnAgAFZwGjDwGWAQMAA2cTAAVnHAADZ7UFAAUcAwIMHAECCwAIAgscAQIBow8LAAUCAwYKHAICDAAFow8DfgECCRwBAgGjDw4AA5YBAwABAgkcAaMPFQABow8HHAICAgABZwkAAWcDAAFnBgABAgUcAwIDZwkABWcEAAFnAQAHAgKjDwJnCwADZwUAAmcBow8FAgGjDwEAAZYBFgACZwWjDx8AAZYBAQABZwMAAWcbAAVnHAADZxIAAWcDAAFnGwAFZxwAA2eWBAADHAUCDBwBAgsACAILHAECAaMPCwADAgUGCxwBAgwAA6MPBX4KHAECAaMPFAAKHAECAWcDAAFnEAAJHAECAaMPBWcIAAFnBwABAggcAQICAANnBwAFZwUAAgIFHAICAaMPDAAFZwUACQIOAANnBgACow8FAgKjDxkABaMPAwABZxkAAZYBAwAFZxsABWcTAAFnCAADZxIABWcbAAVnHAADZ/YDAAMcBQIMHAECCwAIAgwcAaMPCwADAgUGCxwBAgwAA6MPBX4LHAECDAABDgcACxwBow8BAAFnCgABDgcAChwBAgVnBwABZwEOAWcGAAocAQIFZwYABWcFAAkcAQIBow8BAANnBwAFZwUAAQIHHAICAQ4MAANnBgAJAgGjDwEOFQABow8HAgGjDwFnAQ4BZxQAAQ4How8FZxMAAQ4GAAGWAQVnEgABZwEOAWcHAANnEgAFZxsABWccAANnAgABZwMAAWcbAAVnHAADZ7ADAAECAhwFAgwcAgIKAAgCDBwCow8KAAGjDwICBgYLHAEAAQ4LAAKjDwZ+ChwBAgEAAQ4TAAocAQIBZwEOAWcRAAscAaMPBGcIAAFnBwAKHAECBWcGAAVnBQAKHAECAQADZwcABWcFAAECCBwBAgGjDwwAA2cGAAICBRwDAhYAAaMPCAIBow8BZxUAAZYBAaMPBQICow8EZxUABaMPAQAFZxMAAWcIAANnEgAFZxsABWccAANnBAABZx0ABWcbAAVnHAADZ5ADAAECAhwFAgwcAgIKAAgCDBwBAgGjDwoAAaMPAgIHBgocAaMPDAACow8HfgocDgABlgEHAAkcAQIBAAFnCAABZwMAAWcGAAocAQIEZwYABWcFAAscAaMPBGcGAAVnBQAKHAECAQADZwgAA2cGAAocAQIVAAECBxwCAgGjDxUAAgIFHAMCAgABZxMAAaMPBwICow8DZxQAAaMPBQIBow8BAANnEgABZwMABaMPFwAFZwMAAQ4YAANnBAABDh4AAWcBDgFnHAAFZxsABWccAANnkAMAAQIBHAYCDRwBAgoACAINHAGjDwoAAaMPAQIIBgocAQILAAGWAQGjDwh+A7oNASgGHAECDAABlgEIAAO6DQEoBhwBow8CAAFnCAABZwkAChwEZwYABWcHAAkcAQIDZwcABWcFAAocAgILAANnBgAKHAECAaMPFAAJHAECAaMPFQABAgccAgIWAAQCARwEAgGjDxYAAaMPBwIBow8YAAOjDwECA6MPGQABlgECAAGjDx8AAZYBIQABZx0ABWcbAAVnHAADZ5ADAAECARwGAg4cCgAIAg4cCgABow8BAggGCxwBAgoAAQ4Bow8IfgO6DQEoBhwCAgoAAQ4GAAF+AgADug0BKAYcAQIBow8JAAFnAQ4BZwUAAX4CAAO6DQccAaMPCQAFZwQAAX4CAAocCgAFZwQAAX4LHAECCwADZwUAAn4JHAICFAAJHAICAaMPFAABAgccAgIBow8BlgEUAAMCAxwDAgGjDxYAAaMPBwIBow8YAAKjDwMCAqMPGwADow8+AAFnAwABZxsABWccAANnsAMAAQIBHAYCDhwKAAgCDhwKAAGjDwECCAYMHAsAAaMPCH4Dug0BKAccAQIRAAF+AgADug0BKAccAQIKAAFnBgABfgIAA7oNBxwBAgGjDwgABWcEAAF+AgAKHAECAZYBCAAFZwQAAX4LHAECAaMPCgADZwUAAn4JHAICFAAJHAICAaMPAwABZxAAAQIHHAICAaMPBWcQAAICBRwCAgGjDwIAA2cRAAGjDwcCAaMPFwABlgEBow8FAgGjDxoABaMPGwABlgECAAGWAZIEAAECAhwFAg4cCgAIAg4cCgABow8CAgcGDBwLAAKjDwd+A7oNASgIHBEAAX4CAAO6DQEoBxwBAggAAWcDAAFnBAABfgIAA7oNBxwCAggABWcEAAF+AgAJHAICAaMPCQADZwUAAX4KHAICAaMPEgACfgkcAQIBow8UAAgcAgIBow8CAAFnEgABAgccAgIBAAVnEAADAgMcAgICow8BAAVnEAABow8HAgQAA2cSAAKjDwMCAqMPGwADow8eAAGWAZMEAAECAhwFAg4cCgAIAg4cCgABow8CAgcGDBwLAAKjDwd+A7oNASgIHAgAAWcDAAFnBwADug0BKAccAQIIAAVnBwAJHAMCCQADZwYAChwDAgGjDxIAChwBAgKjDwEOEgAKHAGjDwIAAQ4SAAgcAgICAAFnAQ4BZxEAAQIHHAICAQAFZxAABAIBHAMCAqMPAQAFZxAAAaMPBwIEAANnEgADow8BAgOjDxYAAWcDAAFnAQABow8ZAAVnHAADZ/YDAAECAxwEAg4cCgABow8HAg4cCgABlgEDAgYGDBwLAAOjDwZ+CxwBAgoAAWcJAAocAgIIAAVnBgAJHAMCAaMPCAAFZwUAChwCAgGjDwGWAQkAA2cGAAocAqMPFAAJHAECFgABAgccAgIDAAFnEgACAgUcAgIBow8BAAVnEAABow8HAgGjDwIABWcQAAGWAQGjDwUCAaMPBAADZxMABaMPGQABZwUAAWcDAAFnEwAFZwMABWcTAAVnBAADZxUAA2fWAwACAgIcBAIOHAoAAaMPBwIOHAoAAQ4Bow8CAgUGDBwBAgoAAQ4BAAKjDwV+CxwCAgkAAWcBDgFnAQABlgEFAAocAgIBow8IAAVnBQAKHAICAaMPCQAFZwUAChwBAgGjDwsAA2cGAAkcAQIBow8VAAkcAQIBlgEVAAICBRwCAgGjDwEAAWcDAAFnEAAJAgIABWcQAAKjDwUCAqMPAwADZxEAAQ4BAAWjDxkAAQ4eAAFnAQ4BZwYAAWcVAAVnAwAFZxMABWcDAAVnFAADZwUAA2fQAwADHAMCDhwMAAYCDRwBAgwAAwIDBgwcAgIMAAOjDwN+DBwBAgGjDwoAAWcHAAscAQIBow8BlgEIAAVnBQAKHAICCgAFZwMAAWcBAAocAQIBow8LAAhnAQAJHAECAaMPEAADZwIAAQIIHAECFgAJAgGjDxYAAaMPCAIYAAijDxwAAZYBAgABDh8AAQ4XAAFnBgABZwEOAWcUAAVnAwAFZxMABWcDAAVnFAADZwUAA2fQAwABAhIcAQIMAAGjDwQCDRwCAg0ABQIMHAECAaMPDQAEow8BAgscAQIBow8JAAFnAwABZwIAAZYBAQABow8KHAICCgAFZwUAChwBAgGjDwsAA2cCAAFnAwAJHAECAaMPAgABZwwABWcBAAICBxwBAgRnDAAFZwEACQIBow8DZw4ABGcBAAKjDwcCFQAEZwejDxYAA2cBAAGWAVoAAWcDAAFnBQABZxUABWcDAAVnFAADZwQABWccAANn0QMAAQIQHAICDQABow8CAgwcAwIBow8NAAGWAQMCCxwCAgGjDwGWAQ4AAqMPAgIJHAECAqMPEAABDgEAAaMPAgIIHAECEgABDgIAAaMPAQIIHAGjDxEAAWcBDgFnAgABow8BAgYcAQICAAFnDgAFZwIACAIFZwwABWcCAAGjDwYCAaMPBWcNAANnAgABZwEABqMPAWcBAANnEQAFZwEABWcVAAVnAgADZxcAA2dEAAFnAwABZxsABWccAANn8gMAAQIPHAECDwABow8BAgwcAgIBow8QAAICChwDAhEAAaMPAgIJHAECAqMPEQABlgEBow8CAgccAQIBow8BAAEOEwABow8EAgQcAQICAAEOEAABZwMAAaMPBwIBow8BAAFnAQ4BZw0ABWcBAAEOA6MPBAIBAAVnDAAFZwEAAQ4DAASjDwEABWcNAANnAQABZwEOAWcEAAFnAwADZxEABWcBAAVnFQAFZwEABWcWAANnAwADZ/UEAAICCxwCAhEAAaMPAgIJHAICAaMPEgABow8CAgccAgIBow8UAAGjDwMCBBwCAgGjDwGWARQAAWcBow8HAgGjDxYAAmcCow8EAgGjDxIAAWcDAAFnAQADZwSjDwQAAWcOAAVnBAABlgECAAEOAgAFZw0AA2cIAAEOAgAFZxIAAWcEAAFnAQ4BZwIAA2cRAAVnAQAFZxUABWcBAAVnFgADZwMAA2f3BAACAgccAgIVAAGjDwICBRwCAgGjDxYAAaMPBwIBow8YAAGjDwUCAaMPGQABZwWjDxgABWcCAAGWARgABWcFAAFnAwABZxIAA2cGAAVnHAADZxEAAWcDAAFnAwABZxcABWcBAAVnFgADZwIABWccAANn+QQABwIZAAKjDwMCAqMPGQABDgEAA6MPGwABDgIAAZYBGwABZwEOAWccAAVnGwAFZxwAA2dBAAFnAwABZxsABWccAANnmQYAAWcdAAVnGwAFZxwAA2ecBwABZwMAAWcbAAVnHAADZ7IuAA==")
          }]),
          rockJungleLarge4: Ou("rockJungleLarge4", {
            x: 29,
            y: 24,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          rockJungleLarge5: Ou("rockJungleLarge5", {
            x: 32,
            y: 25,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          rockJungleLarge6: Ou("rockJungleLarge6", {
            x: 30,
            y: 28,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          rockSnowLarge1: Ou("rockSnowLarge1", {
            x: 36,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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AR0LHBQAAR0KHAEdFAAB3QwBHQkcAdUMFQACHQHVDAccAd0MFQAB3QwDHQYcFwAC3QwBHQYcGQAB3QwFHAEdGgABHQQcAdUMGgACHQIcAdUMAd0MGgAB3QwBHQEcAdUMAR0SABMcBh0GHAEAExwE3QwCHQYcAQATHAQAAt0MBhwBAAEdERwBHQYABhwBAAEdERwBHQYABhwBAAHdDBEcAd0MBgAGHAIAERwHAAYcAgARHAcABhwCABEcBwABHQUcAgABHQ8cAdUMBwABHQUcAgABHQ8cAR0HAAHdDAUcAgAB3QwPHAHdDAgABRwDAA8cCQAFHAMADxwJAAUcAwAPHAkAAR0EHAMAAdUMDRwBHQkAAdUMBBwDAAEdDRwBHQkAAd0MBBwDAAHdDA0cAd0MCgADHAHVDAQADRwLAAIcAh0EAA0cCwACHAEdAd0MBAABHQwcCwABHAEdAd0MBQABHQwcCwACHQYAAd0MDBwLAAEdAd0MBwAMHAsAAd0MCAABHQocAR0UAAEdChwBHRQAAd0MAR0JHAHdDBUAAdUMCRwWAAHdDAEdBxwBHRcAAh0GHAEdFwAB3QwBHQYcAd0MGAAB3QwB1QwEHAEdEgATHAMdAdUMAh0GHAEAExwF3QwB1QwGHAEAExwFAAHdDAYcAQATHAYABhwBAAEdERwBHQYABhwBAAHVDBEcAR0GAAYcAQAB3QwRHAHdDAYABhwCABEcBwABHQUcAgARHAcAAR0FHAIAERwHAAHdDAUcAgARHAgABRwCAAEdDxwB1QwIAAUcAgAB1QwPHAEdCAAFHAIAAd0MDxwB3QwIAAUcAwAPHAkAAdUMAxwBHQMADxwJAAEdAxwBHQMAAR0NHAHVDAkAAd0MAxwB3QwDAAEdDRwB1QwKAAMcBAAB3QwNHAHdDAoAAdUMARwB1QwFAA0cCwABHQHVDAEdBQANHAsAAd0MAR0B3QwFAAEdDBwMAAHdDAYAAR0MHBMAAd0MDBwUAAscAR0UAAEdChwBHRQAAR0KHAHdDBQAAd0MAR0JHBYAAR0IHAHVDBYAAd0MAdUMBxwBHRcAAdUMBhwBHQHdDBcAAd0MBhwBHRIAExwB3QwBHQLVDAIdBhwBABMcAQAE3QwBHQYcAQATHAUAAd0MAR0FHAEAExwGAAEdBRwBABMcBgAB3QwFHAEAAR0RHAEdBwAFHAEAAR0RHAEdBwAFHAEAAd0MERwB3QwHAAUcAgARHAgABRwCABEcCAAFHAIAAR0QHAgAAR0DHAEdAgABHQ8cAR0IAAEdAxwBHQIAAd0MDxwBHQgAAd0MAxwB3QwDAA8cAd0MCQADHAQADxwKAAHVDAEcAR0EAA8cCgABHQEcAdUMBAAPHAoAAd0MAdUMAd0MBAABHQ0cAR0LAAEdBQABHQ0cAR0LAAHdDAUAAd0MDRwB3QwSAA0cEwANHBMAAR0LHAEdEwABHQscAR0TAAHdDAEdChwB3QwUAAEdChwVAAHdDAocFgABHQkcFgABHQgcAR0WAAHdDAgcAR0XAAccAR0B3QwXAAHVDAYcAR0SABMcAR0B3QwCHQHVDAEdBhwBABMcAd0MAQAE3QwBHQUcAQATHAYAAh0DHAEdAQATHAYAAd0MAR0DHAEdAQABHREcAR0HAAHdDAMcAd0MAQAB1QwRHAEdCAADHAIAAd0MERwB3QwIAAMcAwARHAkAAR0BHAEdAwARHAkAAx0DAAEdEBwJAAHdDAEdAd0MAwABHRAcCgAB3QwEAAHdDA8cAR0QAA8cAR0QAA8cAd0MEAAPHBEADxwRAAEdDRwB1QwRAAEdDRwB1QwRAAHdDA0cAd0MEgABHQwcEwABHQwcEwAB3QwLHAEdFAALHAEdFAAB1QwKHAHdDBQAAdUMChwVAAHdDAEdCBwBHRYAAR0IHAHVDBYAAd0MCBwB3QwXAAgcGAAHHAEdGAABHQYcAR0YAAEdBRwBHQHdDBIAAR0SHAcdBRwBAAHdDBIcAh0E3QwFHQEcAgASHALdDAQAAd0MAx0B1QwBHQIAERwB1QwHAATdDAEdAgARHAEdCwAB3QwCABEcAd0MDgARHA8AERwPAAEdEBwPAAEdDxwBHQ8AAd0MDxwBHRAADxwB3QwQAAEdDhwRAAEdDhwRAAHdDA4cEgANHAEdEgANHAEdEgAB1QwMHAHdDBIAAR0MHBMAAd0MDBwUAAscAR0UAAscAR0UAAIdCRwB3QwUAAIdCRwVAALdDAgcAR0XAAgcAR0XAAEdBxwB3QwXAAEdBxwYAAHdDAYcAR0ZAAYcAR0ZAAUcAR0B3QwZAAEdBBwBHRMAAd0MFBwFHQHVDAQcAgAUHAXdDAEdBBwCABIcAR0B1QwFAAHdDAEdAxwCABIcAR0B1QwGAAEdAxwCABIcAt0MBgAB3QwDHAIAAR0RHAkAAxwCAAHVDBEcCQADHAIAAd0MERwJAAMcAwAPHAHVDAEcCQABHQIcAwABHQ4cAdUMARwJAAEdAhwDAAEdDhwB3QwBHAkAAd0MAh0DAAHdDA4cAQABHQoAAh0EAA4cAQAB1QwKAALdDAQADRwB1QwBAAHdDBAAAR0MHAEdEgABHQwcAd0MEgAB3QwMHBQADBwUAAscAR0UAAMdCBwBHRQAAx0IHAHdDBQAA90MCBwYAAccAR0YAAccAR0YAAEdBhwB3QwYAAEdBhwZAAHdDAUcAR0aAAUcAR0aAAQcAdUMAd0MGgAEHAHVDBsAAR0CHAEdAd0MGwABHQEcAh0VABQcAdUMBR0EHAIAFBwBHQXdDAQcAgAUHAHdDAUABBwCAAEdEhwBHQYABBwCAAEdEhwB1QwGAAQcAgAB3QwBHQ4cAR0CHAHdDAYABBwDAAEdDhwBHQIcBwABHQMcAwAB3QwOHAHdDAIcBwABHQMcBAAOHAEAAhwHAAHdDAMcBAABHQ0cAQACHAgAAxwEAAIdDBwBAAEcAR0IAAEdARwBHQQAAd0MAdUMCxwBHQEAARwBHQgAAR0BHAHVDAUAAd0MCxwBHQEAARwB3QwIAAHdDAHVDAHdDAYACxwB3QwBAAEcCgABHQcACxwCAAEcCgAB3QwHAAscAgABHBIAChwBHQIAAdUMEgABHQkcAdUMAgABHRIAAh0IHAHdDAIAAd0MEgAB3QwB1QwBHQccFwAB3QwBHQYcAdUMGAAB3QwBHQUcAR0ZAAEdBRwB3QwZAAHdDAQcAR0bAAQcAR0bAAMcAR0B3QwbAAEdAhwB1QwcAAEdARwBHQHdDBwAAd0MARwBHR4AAR0B3QweAAEdHwAB3QwWAAHVDBQcBB0B1QwEHAIAAR0THAIdBN0MBBwCAAHdDBMcAR0B3QwEAAQcAwATHAHdDAUABBwDAAEdEhwGAAQcAwABHRIcBgAEHAMAAd0MEhwGAAQcBAAB1QwMHAEdAxwB1QwGAAEdAxwEAAEdDBwB1QwDHAHVDAYAAR0DHAQAAd0MAR0LHAHdDAMcAd0MBgAB3QwDHAUAAR0LHAEAAxwIAAMcBQAB3QwLHAEAAxwIAAMcBgABHQkcAR0BAAMcCAABHQEcAdUMBgACHQgcAR0BAAMcCAABHQEcAR0GAAHdDAHVDAgcAd0MAQACHAEdCAAB3QwBHQHdDAcAAd0MCBwCAAIcAR0JAAEdCQAHHAEdAgACHAHdDAkAAd0MCQABHQYcAR0CAAIcFAAB1QwBHQUcAd0MAgACHBQAAd0MAh0EHAMAARwBHRUAAd0MAR0DHAEdAwABHAEdFgAB3QwDHAEdAwABHAHdDBcAAx0B3QwDAAEcGAABHQLVDAQAAR0YAAPdDAQAAR0fAAHdDM8BAAHdDBUcAdUMAx0EHAMAAR0SHAEdAdUMAR0C3QwBHQQcAwABHRIcAh0B3QwCAAHdDAQcAwAB3QwNHAEdBBwC3QwEAAQcBAABHQwcAR0EHAYABBwEAAHVDAwcAd0MBBwGAAEdAxwEAAHdDAwcAQAEHAYAAR0DHAUAAR0LHAEABBwGAAHdDAMcBQABHQocAR0BAAMcAR0HAAMcBQAB3QwKHAEdAQADHAEdBwADHAYAAR0JHAHdDAEAAxwB3QwHAAHVDAEcAR0GAAHVDAkcAgADHAgAAR0BHAEdBgAB3QwBHQccAR0CAAMcCAAB3QwBHQHdDAcAAR0HHAEdAgADHAkAAR0IAAHdDAccAd0MAgADHAkAAd0MCQABHQYcAwADHBMAAR0FHAHVDAMAAhwB1QwTAAHdDAHVDAQcAR0DAAIcAdUMFAABHQHVDAIcAR0B3QwDAAIcAd0MFAAB3QwB1QwCHAEdBAACHBYAAd0MAh0B3QwEAAEcAR0XAAIdBQABHAEdFwAC3QwFAAEcAd0MHgABHR8AAR0fAAHdDNABAAHdDBUcBB0DHAQAAR0SHAIdAt0MAh0DHAQAAR0RHAMdAgAC3QwDHAQAAd0MCxwB1QwFHAEdAt0MBAADHAUAAR0KHAEdBRwB3QwGAAMcBQABHQocAd0MBRwHAAEdAhwFAAHdDAocAQAFHAcAAR0BHAEdBgAJHAIdBRwHAAHdDAIdBgABHQgcAh0EHAEdCAABHQHdDAYAAR0IHALdDAQcAR0IAAHdDAcAAd0MAR0HHAIABBwB3QwRAAEdBhwBHQIABBwSAAHdDAEdBRwBHQIABBwTAAEdBBwB1QwB3QwCAAQcEwAB3QwB1QwDHAEdAwADHAEdFAABHQIcAR0B3QwDAAMcAR0UAAHdDAMdBAADHAHdDBUAAh0B3QwEAAMcFgAC3QwFAAMcHQACHAEdHQABHQHVDAEdHQACHQHdDB0AAt0MsgIAFxwCAAIcBQAXHAIAAR0BHAUAAR0WHAIAAh0FAAEdFRwBHQIAAd0MAR0FAAHdDBUcAR0DAAHdDAYAAdUMFBwB3QwKAAEdDxwB1QwDHAEdCwAB3QwBHQYcAh0FHAHVDAEdAhwCHQwAAR0FHAEdAdUMAR0FHAEdAd0MAtUMAR0B3QwMAAHdDAEdAxwC1QwC3QwFHAHdDAEAAh0B3QwOAAEdAxwBHQHdDAIABBwBHQIAAt0MDwAB3QwB1QwCHQHdDAMAAR0DHAEdFAADHQQAAR0DHAHdDBQAA90MBAAB3QwDHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MswMAAR0OHAEABxwB1QwCHAYAAd0MFhwB3QwCHAcAAR0VHAEAAhwHAAHVDAEdExwBHQEAAh0HAAHdDAIdARwEHQ0cAR0BAAIdCAAB3QwDHQLVDAIdDBwB3QwBAALdDAkAAd0MAR0E3QwBHQwcDgAB3QwEAAHdDAEdBBwB1QwGHBQAAR0C1QwEHQUcFAAB3QwBHQLVDAEdAd0MAdUMBRwVAATdDAEAAd0MBRwbAAUcGwAB1QwEHBsAAR0EHBsAAd0MBBwcAAQcHAAEHBwAAR0CHAEdHAABHQIcAR0cAAHdDAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AARwfAAEcHwABHR8AAR0fAAHdDKsBAAEdGRwGAAEdGRwGAAHdDAHVDBgcBwADHRMcAR0CHAcAAd0MAx0B1QwCHQ8cAdUMAhwIAALdDAEdAtUMAR0B1QwOHAHdDAIcCgAE3QwBHQHVDAwcAR0BAAIcDgAB3QwB1QwMHAEdAQABHQEcDwAB3QwEHAIdAdUMBRwB3QwBAAEdARwQAAEdAxwDHQUcAgAB3QwBHRAAAR0DHAPdDAUcAwAB1QwQAAHdDAMcAwAFHAMAAd0MEQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwBHQHdDAMABRwWAAEdBAAFHBYAAd0MBAAFHBsAAR0EHBsAAdUMBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwB1QwcAAEdAhwBHRwAAd0MAR0BHAHdDB0AAR0BHB4AAd0MARwfAAEdHwABHR8AAd0MSAAB3QwcHAQAHBwEAAQcAR0XHAQABBwCHRYcBAADHAEdAd0MAdUMAR0VHAQAAR0BHALVDAEAAd0MAdUMEhwBHQIcBAABHQEcAR0B3QwCAAHdDAMcAdUMAR0NHAEdAhwEAAHdDAEdAd0MBAABHQEcAdUMAh0FHAEdBhwBHQHdDAIcBQAB1QwFAAEdARwB1QwC3QwFHAEdBhwBHQEAAhwFAAHdDAUAAd0MAR0B3QwCAAUcAd0MBhwB3QwBAAHVDAEcDAABHQMABRwBAAEdBRwCAALVDAwAAd0MAwAFHAEAAR0FHAIAAd0MAR0QAAEdAxwBHQEAAd0MBRwDAAHdDBAAAR0DHAEdAgAFHBQAAd0MAxwB3QwCAAUcFQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwB1QwB3QwDAAUcFgABHQQABRwWAAHdDAQAAR0DHAHVDBsAAdUMAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MiQEAHRwDAB0cAwAFHAIdFhwDAAUcAdUMAR0THAHVDAIcAwAFHALdDAEdEhwB1QwCHAMAAR0DHAEdAgABHRIcAd0MAhwDAAEdAxwBHQIAAd0MAxwCHQUcAR0GHAHVDAEAAhwDAAHdDAMcAd0MAwADHALVDAUcAR0GHAHVDAEAAR0BHAQAAxwEAAMcAt0MBRwB3QwBHQUcAd0MAQABHQEcBAADHAQAAR0BHAEdAgAFHAEAAR0FHAIAAd0MAdUMBAAB1QwBHAEdBAADHQIABRwBAAHdDAUcAwABHQQAAR0BHAEdBAAB3QwBHQHdDAIABRwCAAUcAwAB3QwEAAHdDAEdAd0MBQAB3QwDAAUcAgAFHAkAAR0KAAEdAxwB1QwCAAUcCQAB3QwKAAEdAxwBHQIABRwUAAHdDAMcAd0MAgAFHBUAAxwDAAUcFQABHQEcAdUMAwABHQMcAR0VAAMdAwAB1QwDHAHVDBUAAd0MAR0B3QwDAAHdDAMcAd0MFgAB3QwFAAMcHQADHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MqQEAHRwDAB0cAwAFHAEdAdUMFhwDAAUcAdUMAR0THAIdARwDAAUcAt0MAR0DHAEdDRwEHQMABRwCAAEdAxwBHQYcAh0FHAEdAt0MAdUMAwAFHAIAAd0MAxwB3QwBHQUcAh0FHAHdDAIAAd0MAwABHQMcAR0DAAMcAQABHQUcAt0MBRwHAAHVDAMcAdUMAwABHQEcAR0BAAHdDAUcAgAFHAcAAd0MAxwB3QwDAAMdAgAFHAIABRwIAAMcBAAB3QwB1QwB3QwCAAUcAgAFHAgAAxwFAAHdDAMABRwCAAQcAR0IAAEdAhwJAAEdAxwB1QwCAAEdAxwB1QwIAAHVDAIcCQAB1QwDHAHVDAIAAR0DHAHdDAgAAd0MARwBHQkAAd0MAxwB3QwCAAHdDAMcCgABHAHVDAoAAdUMARwBHQQAAxwKAAEdAd0MCgABHQEcAR0EAAMcCgAB1QwLAAHdDAEdAd0MBAABHQEcAR0KAAHdDAwAAR0FAAEdARwBHRcAAd0MBQAB3QwBHQHdDB4AAR0fAAHdDMkCAB0cAwAdHAMABhwBHRQcAR0B1QwDAAUcAx0DHAHVDAEdDBwB1QwDHQMABRwBHQHdDAHVDAEdAdUMAx0FHAEdAdUMBBwB1QwCHQLdDAMAAR0DHAEdAd0MAQAB3QwC1QwBHQLdDAUcAx0DHAEdAt0MBQABHQMcAR0DAAPdDAIABRwC3QwBHQMcAd0MBwAB3QwDHAHdDAgABRwCAAHdDAMcCQADHAkAAR0DHAEdAwAB1QwBHAEdCQADHAkAAR0DHAEdAwABHQEcAdUMCQAC1QwBHAkAAd0MAxwB3QwDAAHdDAEdAd0MCQAC1QwBHAoAAxwFAAEdCgAC3QwBHQoAAdUMARwBHQUAAd0MDAAB1QwKAAHVDAIdEgAB3QwKAAHdDAEdAd0MHgAB3QyQBAAB3QwGHAIAFBwEAAYcAR0BAAEdCxwBHQccBAAFHAIdAdUMAx0B1QwHHAEdAtUMBhwEAAQcAh0D3QwE1QwEHAMdAd0MAdUMBRwBHQQABBwB1QwB3QwDAAPdDAEdBBwCHQHdDAEAAd0MAh0DHAEdBAAB1QwDHAHdDAcAAd0MAR0BHAIdAt0MAwAB1QwBHQIcAdUMAd0MBAAB1QwCHAHVDAkABB0FAALdDAEdARwBHQUAAd0MAdUMARwBHQkAAd0MAdUMAt0MBwACHQHdDAYAAR0BHAHdDAoAAd0MCQAB3QwBHQcAAd0MARwWAAHdDAgAAR0fAAEdHwAB3Qz+BAAFHAEdDRwBHQccBQAFHAHdDAUcAR0B1QwBHQUcAR0HHAUABRwBAAQcAR0B1QwCHQHVDAIcAh0B3QwHHAUABBwBHQEAAxwB1QwBHQPdDAIdAdUMAh0BAAEdBhwFAAEdAxwBHQEAAxwBHQHdDAMAAd0MAdUMAR0C3QwBAAEdBhwFAAEdAxwB3QwBAAMcAd0MBQAC3QwDAAHdDAYcBQAB3QwDHAIAAdUMARwBHQwABhwGAAHVDAEcAR0CAAMdDAAB1QwFHAYAAR0BHAEdAgAB3QwB1QwB3QwMAAHVDAUcBgAB3QwB1QwB3QwDAAHdDA0AAd0MBRwHAAEdEwAFHAcAAd0MEwAFHBsAAR0DHAEdGwABHQMcAdUMGwAB3QwBHQEcAR0B3QwcAAMdHQAB3QwBHQHdDB4AAd0MxwMACxwCHQ4cBQAKHAEdAdUMAx0MHAUAChwB1QwC3QwB1QwBHQwcBQAKHAHdDAIAAt0MAR0LHAUAAR0DHAEdBRwFAAEdCxwFAAEdAxwB1QwFHAUAAd0MAR0KHAUAAd0MAxwB3QwB1QwDHAEdBgABHQocBgADHAEAAR0DHAHVDAYAAd0MAR0CHAEdBhwGAAMcAQAB3QwDHAHdDAcAAh0BHAEdBhwGAAEdARwBHQIAAxwIAAHdDAHVDAEdAd0MBhwGAAMdAgABHQEcAR0JAAHdDAEdAQAGHAYAAd0MAR0B3QwCAAEdARwBHQoAAd0MAQAGHAcAAd0MAwAB3QwBHQHdDAwABhwMAAEdDQABHQUcDAAB3QwNAAHVDAUcGgAB3QwFHBsABRwbAAUcGwABHQMcAR0bAAHVDAMcAdUMGwAB3QwBHQEcAR0B3QwcAAEdAdUMAR0dAAHdDAHVDAHdDB4AAd0MhwIACxwDHQ0cBQAKHAEdAdUMAh0B1QwMHAUAChwBHQPdDAEdDBwFAAEdCRwB3QwDAAHdDAwcBQAB1QwDHAHVDAUcBQAB1QwLHAUAAd0MAxwB1QwFHAUAAR0LHAYAAxwB3QwFHAUAAd0MCxwGAAEdARwBHQEAAdUMAxwBHQYACxwGAAMdAQABHQMcAR0GAAscBgAB3QwB1QwB3QwBAAHdDAMcAd0MBgALHAcAAd0MAwADHAcAAdUMChwLAAEdAhwHAAEdChwLAAEdARwBHQcAAd0MAhwCHQYcCwAB3QwCHQgAAhwB1QwBHQYcDAABHQHdDAgAAR0BHALdDAYcDAAB3QwJAAEdARwCAAYcFgAB3QwBHQIABhwXAAEdAgAGHBcAAd0MAgABHQUcGgABHQUcGgAB3QwEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAR0BHAEdHQACHQHVDB0AAd0MAR0B3QweAAHdDGYAAd0MAdUMChwCHQHVDAEdDBwFAAHdDAMcAR0FHAIdAdUMAd0MAdUMDBwGAAMcAR0FHAEdAt0MAQAB3QwMHAYAAR0BHAEdAd0MBRwB3QwEAAwcBgADHQEABRwFAAwcBgAB3QwBHQHdDAEAAR0DHAEdBQAMHAcAAd0MAgABHQMcAdUMBQAEHAEdBxwKAAHdDAMcAd0MBQABHQMcAR0HHAsAAxwGAAEdAxwB3QwHHAsAAR0CHAYAAd0MAxwBAAccCwABHQEcAR0HAAscCwAB3QwCHQcACxwMAAHVDAHdDAcACxwMAAHdDAgAAxwBHQccFQAB1QwCHAIdBhwVAAEdAhwB3QwBHQYcFQAB3QwCHAEAAd0MBhwWAAIcAgAGHBYAAhwCAAYcFgABHQEcAgAGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwB1QwbAAHVDAMcAd0MGwAB3QwBHQEcAR0dAALVDAEdHQAB3QwBHQHdDB4AAd0MJgAC3QwBAAPdDAEdBxwBHQHVDAwcCgABHQYcAR0C3QwMHAoAAd0MBhwBHQIADBwLAAYcAd0MAgAMHAsABhwDAAwcCwABHQEcAR0CHAEdAwAMHAsAAR0BHAHVDAIcAR0DAAwcCwAB3QwBHQHdDAIdAd0MAwAMHAwAAR0BAAIdBAABHQscDAAB3QwBAALdDAQAAR0LHBQAAd0MCxwVAAMcAR0HHBUAAxwBHQccFQADHAHdDAccFQADHAEABxwVAAMcAQABHQYcFQABHQIcAQABHQYcFQABHQIcAQAB3QwGHBUAAd0MAhwCAAYcFgACHAIABhwWAAEdARwCAAYcFgAB1QwBHAIAAdUMBRwWAAHdDAEcAgABHQUcFwABHQIAAd0MBRwXAAHVDAMABRwXAAHdDAMABBwBHRsAAR0DHAHVDBsAAR0DHAHdDBsAAd0MAR0BHAEdHQADHR0AAd0MAR0B3QweAAHdDAMAAt0MAR0DHAEdAwABHQYcAt0MDBwDAAHdDAMcAd0MAwAB3QwGHAIADBwEAAMcBQABHQUcAgAMHAQAAxwFAAEdBRwCAAwcBAADHAUAAd0MBRwCAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAAB3QwB1QwB3QwGAAHdDAMcAd0MAgABHQscBQABHQgAAxwDAAEdCxwFAAHdDAgAAxwDAAHdDAscDgABHQEcAR0EAAMcAR0HHA4AAR0BHAEdBAADHAEdBxwOAAHdDAEdAd0MBAADHAHdDAccDwABHQUAAxwBAAccDwAB3QwFAAEdAhwBAAccFQAB1QwCHAEABxwVAAHdDAIcAQAHHBYAAhwBAAEdBhwWAAIcAQABHQYcFgABHQEcAQAB3QwGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwBHRsAAR0DHAHdDBsAAd0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MIgAC3QwB1QwFHAMAAR0GHALdDAwcAgAB3QwFHAMAAdUMBhwCAAwcAwAFHAMAAd0MAR0FHAIAAR0LHAMABRwEAAHVDAUcAgABHQscAwAFHAQAAd0MBRwCAAHdDAMcAR0HHAMAAdUMAxwBHQUABRwDAAMcAdUMBxwDAAEdAxwBHQUABRwDAAMcAd0MBxwDAAHdDAMcAd0MBQAEHAEdAwADHAEABxwEAAMcBgAEHAHVDAMAAxwBAAccBAADHAYABBwB3QwDAAMcAQAHHAQAAdUMARwBHQYAAR0DHAQAAR0CHAEABxwEAAEdARwBHQYAAR0DHAQAAR0CHAEABxwEAAHdDAEcAd0MBgAB3QwBHQEcAR0EAAHdDAIcAQAHHAUAAR0IAAEdARwBHQUAAhwBAAccBQABHQgAAd0MAR0B3QwFAAEdARwBAAccBQAB3QwJAAEdBgABHQEcAQAHHA8AAd0MBgAB3QwBHQEAAR0GHBcAAR0BAAEdBhwXAAHdDAEAAd0MAR0FHBoAAR0EHAEdGgAB3QwEHAHVDBsABBwB3QwbAAEdAxwcAAEdAxwcAAHdDAIcAR0dAAMdHQACHQHdDB0AAt0MggEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gCgAARwfAAEcHwAB1QwfAAEdHwAB3Qz/BgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8FAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB3QzfBQABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAR0dAAEcAdUMAR0dAAEdAdUMAd0MHQABHQHdDB4AAd0M/wYAAhwBHQHdDBwAAhwB1QwdAAHVDAEdAd0MHQACHR4AAt0M/gYAAhwBHQHdDBwAARwBHQHVDB0AAh0B3QwdAAEdAd0MHgAB3Qz/BgABHAEdAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8EAAEcAdUMAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/BAACHAEdAd0MHAABHAIdHQABHAEdAd0MHQABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MvwUAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAEdAd0MHgAB3QzfBgACHAEdAd0MHAABHAIdHQAB1QwBHQHdDB0AAdUMAd0MHgAB3Qz/BgACHAHdDB0AARwBHR4AAR0B1QweAAEdAd0MHgAB3Qz/BgABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M3wUAAhwB3QwdAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MnwUAARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8GAAEdHwAB1QwfAAHdDL8HAAEcAd0MHgAB1QwfAAEdHwAB3QyfBwABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAdUMHwAB3Qz/BQACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwAB1QwfAAHdDJ8EAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3QyfAwADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDP8CAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAHVDB0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwB1QweAAEcAd0MHgABHB8AAR0fAAEdHwAB3QzfAgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAHVDB0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwAB1QwfAAEdHwAB3QyfAgADHB0AAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3Qz/AQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("jigAAd0M/AcAAd0MAR0B1QwB3QwdAAEdAd0MHgAB3Qy8BwAB1QwBHAEdAhwBHRoAAd0MBB0B3QwbAAEdAd0MAh0cAAHdDAEAAt0MmgcAAR0FHAHdDBkAAh0BHAEdAdUMAR0aAAHdDAEdAdUMAx0bAAHdDAHVDAPdDBwAAd0M/AYAAR0B1QwFHAHdDBgAAd0MAh0DHAEdGgAB3QwBHQMcAR0bAAHdDAIcAR0B3QwcAAEcAh0dAAHVDAEdAd0MHQABHQHdDB4AAd0MnAYAAd0MAdUMBBwBHRoAAh0CHAEdAd0MGgAB3QwCHQEcAR0cAAHdDALVDAHdDB0AAd0MAR0fAAHdDNwGAAMdARwBHQHdDBoAAd0MAx0B1QwcAALdDAEdAd0MHgAB3QydBwAB3QwCHQHdDB0AAR0B3QweAAHdDLWfAQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AQAB3QwBHQUcAgAB3QwBHQYcAwALHAIAAd0MBRwDAAEdBhwDAAscAwAFHAMAAd0MAR0FHAMAAdUMChwDAAUcBAABHQUcAwABHQocAwAFHAQAAd0MBRwDAAHdDAocAwAFHAUABBwBHQQAChwDAAUcBQAEHAEdBAAKHAMABBwBHQUABBwB3QwEAAEdAhwBHQYcAwAEHAEdBQAEHAUAAh0BHAHVDAYcAwAEHAHdDAUAAR0DHAUAAd0MAR0B1QwB3QwGHAMAAdUMAxwGAAHVDAEdAhwGAAHdDAEdAQAGHAMAAdUMAxwGAAHdDAEdARwBHQcAAd0MAQAGHAMAAd0MAR0BHAEdBwAB3QwCHQkABhwEAAEdARwBHQgAAR0B3QwJAAYcBAAB3QwBHQHdDAgAAd0MCgAGHAUAAdUMFAAGHAUAAd0MFAAGHBoABhwaAAIdBBwaAAEdAdUMBBwaAALdDAEdARwBHQEcHAADHQEcHAAB3QwBHQHdDAHVDB0AAd0MAQAB1QwfAAHdDOIBAAHdDAUcAd0MAQAB3QwB1QwGHAcAAR0GHAMABRwDAAIdBRwHAAHVDAYcAwAFHAMAAd0MAR0EHAEdBwAB3QwGHAMABRwEAAHdDAQcAR0IAAYcAwAFHAUAAdUMAxwB3QwIAAYcAwAEHAEdBQABHQMcCQAGHAMABBwB1QwFAAHdDAMcCQAGHAMABBwB3QwGAAMcCQABHQUcAwAEHAcAAxwJAAEdBRwDAAEdAxwHAAIcAR0JAAHdDAUcAwABHQIcAR0HAAHVDAIdCgAFHAMAAd0MAhwBHQcAAh0B3QwKAAUcBAABHAEdAd0MBwAC3QwLAAUcBAABHAEdFQAFHAQAARwB3QwVAAUcBAABHRYABRwEAAHVDBYAAdUMBBwEAAHdDBYAAR0BHAHVDAIcGwAB3QwCHQIcHAABHQHdDAIcHAAB3QwBAAEdARweAAHVDAEdHgAB3QwBHR8AAd0MggIAAd0MBRwB3QwBAALdDAMdAd0MCgAB3QwFHAMAAR0DHAEdBAADHQwABRwDAAEdAxwBHQQAA90MDAAFHAMAAd0MAxwB3QwTAAUcBAADHBQAAR0EHAQAAxwUAAHVDAQcBAADHBQAAd0MBBwEAAMcFQABHQMcBAACHAEdFQABHQMcBAACHAEdFQAB3QwDHQQAAhwB3QwWAAMdBAABHAEdFwAD3QwEAAIdHgABHQHdDB4AAd0MvgQAAt0MAR0B1QwBHQMAA90MFwAB3QwC1QweAALdDLjnAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("AxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AARwB1QweAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M/wEAAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwAB1QwfAAHVDB8AAd0MnwUAARwfAAEdHwAB1QwfAAHdDJ/vAQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          rockSnowLarge2: Ou("rockSnowLarge2", {
            x: 36,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("BgACHAHVDAHdDBwAAR0BHAEdHQABHQHVDAHdDB0AAd0MAR0fAAH6Cf4GAAUcAR0GAATdDAcAAR0CHAYABRwB3QwRAAHdDAIcBgAFHBMAAhwGAAUcEwACHAYAAR0EHBMAAdUMARwGAAIdAhwBHRMAAdUMARwGAAHdDAHVDAIcAR0TAAHdDAEdBwAB3QwBHQEcAd0MFAAB1QwIAAHVDAEcFQAB3QwIAAHdDAEdHwAB1QwfAAHdDJwFAAEdBRwEAAccAd0MBAAB3QwDHAYAAR0FHAQAAR0GHAYAAxwGAAHdDAUcBAABHQYcBgADHAcABRwEAAHdDAUcAR0GAAMcBwAEHAEdBQADHAEdARwB1QwGAAHVDAIcBwAEHAEdBQABHQEcAh0BHAHdDAYAAdUMAhwHAAQcAd0MBQADHQHdDAEdBwAB3QwCHAcAAR0DHAYAAfoJAR0B3QwBAAEdCAACHAcAAR0DHAcAAd0MAgAB+gkIAAIcBwAB+gkBHQEcAR0TAAEdARwIAAMdEwAB1QwBHQgAAd0MAR0B3QwTAAHdDAEdCQAB3QwVAAHdDOYEAAHdDAUcAwAIHAHdDAQAAd0MAxwHAAUcAwAB1QwHHAYAAxwHAAUcAwABHQccBgADHAcABRwDAAHdDAccBgADHAcABRwEAAccBgADHAcABRwEAAccBgADHAcAAdUMAxwBHQQABhwBHQYAAR0CHAcAAR0DHAHVDAQAAR0DHAMdBgABHQIcBwAB3QwDHAHdDAQAAR0DHAIdAd0MBgAB3QwCHAgAAxwFAAHdDAMcAt0MCAACHAgAAdUMARwBHQYAAxwKAAEdARwIAAEdARwBHQYAAxwKAAEdARwIAAHdDAEdAd0MBgADHAoAAd0MAR0JAAHVDAcAAxwLAAEdCQAB+gkHAAMcCwAB3QwRAAMcCwAB3gwRAAMcCwAB3gwRAAIcAR0LAAHeDBEAARwCHR0AARwBHQH6CR0AAR0B3QweAAEdHwAB+gmvAgAB3QwFAAUcAwAIHAHdDAUAAxwHAAUcAwAIHAYAAxwHAAUcAwAIHAYAAxwHAAUcAwAHHAEdBgADHAcAAR0DHAEdAwAHHAEdBgABHQIcBwABHQMcAR0DAAHVDAUcAR0B3QwGAAEdAhwHAAHdDAMcAd0MAwABHQUcAR0HAAHdDAIcCAADHAQAAd0MBRwB3QwIAAIcCAADHAUABRwJAAIcCAABHQEcAR0FAAUcCQABHQEcCAACHQHVDAUABRwJAAIdCAAB3QwBHQHdDAUAAR0BHAEtAhwJAAHdDAEdCQAB3QwGAAEdARwBLQIcCgAB3QwQAAHdDAEcAS0CHBwAAxwBHRwAAxwBHRwAARwBHQHVDAHdDBwAAx0dAAHVDALdDB0AAd0MjgMAAR0BHAEdAd0MAwABHQMcAR0BAALdDAccAd0MBgABHQIcAdUMARwB1QwEAAHdDAMcAd0MAwAHHAcAAd0MAhwB3QwBHQHdDAUAAxwEAAccCAACHAEAAR0GAAMcBAAHHAgAAhwBAAH6CQYAAdUMARwBHQQABxwIAAEdARwIAAEdARwBHQQABxwIAAEdARwIAAHdDAEdAd0MBAABHQUcAR0IAAHdDAHVDAkAAR0FAAEdBRwBHQkAAR0JAAHdDAUAAd0MBRwB3QwJAAHdDBAABRwbAAUcGwAFHBsAAR0DHAHVDBsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAHVDAEcAdUMHQAC1QwBHR0AAd0MAR0B3QweAAHdDI0DAAUcAR0DAAHdDAEAAd0MAR0BHAEdBxwCAAH6CQEAAd0MBAAB+gkFHAHdDAYAAh0B1QwHHAoAAR0EHAcAAd0MAdUMAd0MBxwKAAEdBBwIAAHdDAEABxwKAAHdDAEcAR0BHAEdCgAHHAsAAh0BHAHVDAoAAR0FHAHVDAsAAR0B3QwBHQH6CQoAAR0FHAHVDAsAAd0MAQAB1QwLAAHdDAUcAd0MDQAB3QwMAAUcGwAFHBsABRwbAAHVDAMcAR0bAAEdAxwB1QwbAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAR0B+gkeAAHdDK0DAAEdBRwDAA0cAgAB3QwB1QwBHAEdBAABHQUcAwAFHAIdBRwBHQMAAdUMARwB1QwEAAH6CQUcAwAFHAIdBRwB1QwDAAHdDAEdAd0MBQAFHAMAAR0DHAEdAt0MBRwB3QwEAAEdBgABHQMcAR0DAAEdAxwBHQIABRwFAAHdDAYAAdUMAxwB1QwDAAHdDAMcAd0MAgAFHAwAAd0MAxwB3QwEAAMcAwAFHA0AAxwFAAMcAwAB1QwDHAEdDQADHAUAAxwDAAEdAxwBHQ0AAR0BHAEdBQADHAMAAd0MAxwB3QwNAAEdARwBHQUAAR0CHAQAAxwOAAH6CQEdAd0MBQABHQIcBAABHQEcAdUMDwABHQYAAd0MAhwEAAMdDwAB3QwHAAIcBAAB3QwBHQHdDBcAAhwFAAHdDBgAAhweAAIcHgACHB4AAR0BHB4AAR0BHB4AAd0MAR0fAAEdHwAB+gmzAgAB3QwFHAHdDAEABxwBAAUcAfoJAQAB1QwEHAHdDAIcAdUMAQAFHAIABxwBAAEdAxwBHQIAAh0DHAEAAR0C1QwBAAUcAgAHHAEAAR0DHAEdAgAB3QwB1QwCHAEdAQAB1QwBHQHdDAEABRwCAAEdBRwBHQEAAd0MAxwB+gkDAAHdDAIcAR0BAALdDAIABRwCAAEdBRwBHQIAAxwFAAIdAd0MBQAFHAIAAd0MBRwB3QwCAAHVDAEcAR0FAAEdAdUMBgAB1QwDHAEdAwAFHAMAAx0FAALdDAYAAR0DHAEdAwAFHAMAAd0MAdUMAd0MDQAB+gkDHAHdDAMABRwEAAHdDA8AAxwEAAUcFAADHAQABRwUAAMcBAAFHBQAAxwEAAHVDAMcAR0UAAEdARwBHQQAAR0DHAEdFAABHQEcAR0EAAHdDAMcAd0MFAAB3QwBHAHdDAUAAxwWAAEcBgADHBYAAdUMBgADHBYAAR0GAAMcFgAB3QwGAAEdAhwdAAIdARwdAAHdDAHVDAEcHgAB3QwBHB8AAR0fAAEdHwAB3QzUAQAFHAIABxwDAAHdDAH6CQIAAd0MCRwBAAUcAgAHHAgAAh0GHAHVDAEABRwCAAccCAACHQYcAdUMAQAFHAIABxwIAALdDAYcAd0MAQABHQMcAR0CAAccCgAGHAIAAR0DHAEdAgAHHAoAAR0BHAEdAhwB1QwCAAHdDAMcAd0MAgAHHAoAAdUMAx0BHAEdAwADHAMABxwKAAHdDAEdAd0MAR0B1QwB3QwDAAMcAwAHHAsAAd0MAQAB3QwBHQQAAxwDAAEdBRwB1QwOAAHdDAQAAxwDAAEdBRwBHRMAAxwDAAHdDAUcAd0MEwADHAQABRwUAAMcBAAFHBQAAR0BHAEdBAAFHBQAAR0BHAEdBAAFHBQAAd0MAR0B3QwEAAUcFQABHQUAAdUMBBwVAAHdDAUAAR0EHBUAAd4MBQAB3QwEHBUAAd4MBgAEHBUAAd4MBgADHAEdHAADHAEdHAABHQEcAdUMAd0MHAABHQEcAR0dAAHdDAHVDAHdDB4AAd0MtgEAAxwDAAccAd0MBwAJHAIAAxwDAAccCAABHQccAR0CAAMcAwAHHAgAAdUMBxwBHQIAAxwDAAccCAAB3QwHHAHdDAIAAR0BHAEdAwAHHAkABhwBHQMAAR0BHAEdAwAHHAkABhwBHQMAAd0MAR0B3QwDAAccCQAFHAEdAd0MBAABHQQABxwJAAHVDAMcAtUMBQAB3QwEAAccCQAB1QwDHAEdAd0MCgAHHAkAAd0MAxwB3QwLAAEdBRwB1QwKAAMcDAABHQUcAR0KAAEdARwBHQwAAd0MBRwB3QwKAAEdAtUMDQAFHAsAAd0MAR0B3QwNAAUcDAAB3QwOAAUcGwAFHBsABRwbAAEdBBwbAAHVDAQcGwAB+gkDHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQAB3QwBHAEdHgABHQHVDB4AAR0B3QweAAH6CXwABxwBAAHdDAYACBwB3QwIAAccCAAHHAEdCQAHHAgABxwBHQkABxwIAAccAd0MCQAHHAgABxwKAAccCAAB1QwFHAEdCgAHHAgAAdUMBRwBHQoABxwIAAHdDAUcAd0MCgAHHAkABRwLAAEdBRwBHQkABRwLAAEdBRwB1QwJAAUcCwAB3QwFHAHdDAkAAR0DHAEdDAAFHAoAAR0DHAHVDAwABRwKAAHdDAMcAd0MDAAFHAsAAxwNAAUcCwAB1QwCHA0ABRwLAAEdAdUMAR0NAAEdBBwLAAHdDAIdDQABHQMcAR0MAALdDA0AAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQEcAdUMHQAB3QwBHQHdDB4AAR0fAAHdDJkBAAH6CQMABhwB1QwCHAQAAd0MBxwB3QwJAAccAR0BHAEdBQAHHAoABxwB3QwCHQUABxwKAAEdBRwBHQEAAR0B3QwFAAccCgAB1QwFHAEdAQAB3QwGAAccCgAB3QwFHAHdDAgABxwLAAUcCQABHQUcAR0LAAUcCQABHQUcAR0LAAUcCQAB3QwFHAHdDAsABRwKAAUcDAAFHAoABRwMAAUcCgAFHAwAAR0DHAHVDAoAAR0DHAHVDAwAAR0DHAEdCgABHQMcAR0MAAHdDAMcAd0MCgAB3QwDHAHdDA0AAxwMAAMcDgADHAwAAR0CHA4AAR0CHAwAAdUMAhwOAAMdDAAB3QwCHA4AAd0MAtUMDQACHA8AAt0MDQABHQEcHgACHR4AAd0MAR0fAAHdDI0CAAscAR0CAAccCwAFHAEdBRwBHQIABxwLAAUcAR0FHAHdDAIABxwLAAEdAxwBHQHdDAUcAwAHHAsAAR0DHAEdAQAFHAMABxwLAAHdDAMcAd0MAQABHQMcAR0DAAEdBRwBHQwAAxwCAAHVDAMcAR0DAAEdBRwBHQwAAxwCAAHdDAMcAd0MAwAB3QwFHAHdDAwAAxwDAAEdARwBHQUABRwNAAHVDAEcAR0DAAMdBQAFHA0AAR0B1QwBHQMAAd0MAR0B3QwFAAUcDQAB3QwBHQHdDAQAAd0MBgABHQQcDgAB3QwMAAEdBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwBHRwAAR0CHAEdHAAB3QwCHAHdDB0AAhweAAIcHgABHQEcHgAB1QwBHB4AAd0MAR0eAAHeDAEdHgAB3gwB+gkeAAHeDKsBAAH6CQIAAd0MDBwBAAccAfoJCwAMHAEAAdUMBRwBHQwAAR0BHAIdBxwBHQEAAR0FHAEdDAABHQEcAh0HHAEdAQAB3QwFHAHdDAwAAd0MAR0C3QwHHAHdDAIABRwOAAHVDAIABxwDAAUcDgAB3QwCAAccAwAFHBEABxwDAAEdBBwRAAccAwABHQQcEQABHQUcAdUMAwAB3QwEHBEAAR0FHAEdBAAEHBEAAd0MBRwB3QwEAAQcEgAFHAUABBwSAAUcBQABHQMcEgAEHAEdBQABHQMcEgAEHAEdBQAB3QwBHQEcAR0SAAQcAd0MBgAB1QwBHAHVDBIAARwB1QwBHAEdBwAB3QwBHAHdDBIAARwBHQHVDAEdCAABHBMAARwB+gkBHQHdDAgAAR0TAAEdAQAB3QwJAAEdEwABHQsAAd0MEwAB+gm6AgABHQscAdUMAQAFHAIAARwKAAEdCxwB1QwBAAHVDAMcAR0CAAEcCgAB3QwBHQocAd0MAQABHQMcAR0CAAEcCwACHQkcAgAB3QwDHAHdDAIAAR0LAAHdDAEdCRwDAAMcAwABHQwAAd0MCRwDAAHVDAEcAdUMAwAB3QwNAAkcAwACHQHVDBEACRwDAAHdDAEdAd0MEQAJHAQAAd0MEgAB1QwHHAEdFwABHQccAdUMFwAB3QwHHAHdDBgABxwZAAccGQAHHBkABxwZAAYcAR0ZAAYcAR0ZAAYcAd0MGQABHQUcGgABHQUcGgAB3QwB1QwDHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAdUMAd0MHgAB3QxyAAHdDAEdAd0MAwAB+gkMHAHdDAEAAfoJAd0MBAABHAUAAR0FAAEdCxwIAAEcBQAB3QwFAAEdCxwIAAEcCwAB3QwLHAgAARwMAAscCAABHAwAAR0JHAEdCAABHAwAAdUMCRwB1QwIAAEcDAAB3QwJHAHdDAgAARwNAAkcCQABHA0ACRwJAAEdDQAJHAkAAR0NAAkcCQAB3QwNAAkcFwAJHBcAAR0HHAHVDBcAAdUMBxwBHRcAAd0MBxwB3QwYAAccGQAHHBkABxwZAAccGQABHQUcAdUMGQAB1QwFHAHVDBkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAEdBBwbAAIdAxwbAAHdDAEdAdUMAhwbAAHeDAHdDAMdHQAB3QwCHRAABRwCAAHdDAwcAR0GAAEcBAAB1QwDHAEdAwAMHAEdBgABHAQAAdUMAxwBHQMACxwBHQHdDAYAARwEAAHdDAMcAd0MAwALHAEdBwABHAUAAxwEAAscAd0MBwABHAUAAR0BHAEdBAALHAgAARwFAAMdBAALHAgAARwFAAHdDAHVDAHdDAQACxwIAAEcBgAB3QwFAAEdCRwBHQgAARwMAAEdCRwBHQgAARwMAAHdDAkcAd0MCAABHQ0ACRwJAAEdDQAJHAkAAd0MDQAJHBcACRwXAAkcFwAJHBcAAR0HHAEdFwABHQccAR0XAAHdDAccAd0MGAAHHBkABxwZAAccGQAHHBkABxwZAAEdBhwZAAEdBhwZAAHdDAYcGgAGHBoABhwaAAEdAxwBHQEcGgAB1QwDHAEdAdUMDgAHHAEAAd0MDRwB3QwDAAH6CQHdDAEcAwABHQUcAR0CAA0cBgABHAMAAR0FHAEdAgAMHAHVDAYAARwDAAHdDAUcAd0MAgAMHAHVDAYAARwEAAUcAwALHAEdAd0MBgABHAQABRwDAAscAdUMBwABHAQABRwDAAscAd0MBwABHAQAAR0DHAHVDAMACxwIAAEcBAAB1QwDHAEdAwALHAgAARwEAAHdDAMcAd0MAwABHQkcAR0IAAEdBQADHAQAAR0JHAEdCAAB1QwFAAEdARwBHQQAAd0MCRwB3QwIAAHdDAUAAR0B1QwBHQUA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AR0EAAEdBRwQAAUcAR0EAAHdDAEdBBwQAAEdBBwB3QwFAAEdBBwQAAHVDAMcAR0GAAHdDAQcEAAB3QwDHAHVDAcABBwRAAMcAd0MBwAEHBEAAhwBHQgAAR0CHAEdEQADHQgAAR0CHAEdEQAB1QwBHQH6CQgAAd0MARwB1QwB3QwRAAHdDAH6CQoAAdUMAR0eAAEdAd0MHgAB3Qz7AgABHQccBQAB3QwB1QwB3QwGAAccAgABHAHdDAccBgAB3QwHAAHVDAUcAR0CAAEdAQAHHA4AAR0FHAEdAgABHQEABxwOAAHdDAUcAfoJAgAB3QwBAAccDwAFHAUABxwPAAUcBQAHHA8ABRwFAAccDwABHQQcBQAHHA8AAdUMBBwFAAHVDAUcAR0PAAHdDAQcBQABHQUcAR0QAAEdAxwFAAHdDAUcAd0MEAACHQHVDAEcBgAFHBEAAd0MAh0BHAYABRwSAALdDAHVDAYABRwUAAEdBgAB1QwEHBQAAd0MBgABHQQcGwAB3QwEHBwAAxwB1QwcAAMcAR0cAAMcAd0MHAAB1QwCHB0AAdUMAhwdAAHdDAEcAR0eAAIdHgABHQHdDB4AAd0MuwEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("kYABAAHeDAHdDAH6CfsHAAHdDAIcAR0B3QwBHRsAAR0BHAEdAQAB3QwbAAEdARwB3QwBAAHeDBsAAfoJAR0CAAHeDBwAAR0CAAHeDBwAAd0MHwAB3gy9BgABHQEcAfoJARwB1QwBHRoAAd0MARwBLQEcAt0MGwAB1QwBLQEdHQABHQEtAR0dAAHdDAEtAd0MHgABLR8AAR0fAAHdDJ0GAAHdDAIcAdUMAd0MHAAB1QwBHAH6CQHeDBwAAR0BHB4AAd0MARwfAAHVDB8AAR0fAAH6Cb0GAAEcAd0MAR0B3QwcAAEdAQAB3QwdAAEdAQAB3gwdAAHdDB8AAd4MHwAB3gwfAAHeDLBeAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AR0HHA8ABRwB3QwDAAEdBxwPAAEdAxwBHQQAAd0MBxwPAAHVDAMcAR0FAAccDwAB+gkDHAHdDAUABxwQAAMcBgAHHBAAAR0CHAYABxwQAALVDAEcBgAHHBAAAd0MAR0BHAYABxwRAAHdDAEdBgABHQYcEgABHQYAAR0FHAEdEgAB3QwGAAHdDAUcAdUMGgAFHAHdDBoABRwbAAUcGwAFHBsABRwbAAEdBBwbAAEdAxwBHRsAAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAEdAhwdAAEdARwBHR0AAd0MARwBHR4AAR0B3QweAAEdAd4MHgAB3QwB3gwfAAHeDDoAAR0HHBgAAd0MBxwZAAccGQAHHBkABxwZAAccGQAHHBkABxwZAAccGQABHQUcAR0ZAAEdBRwB1QwZAAHdDAUcAd0MGgAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAdUMARwBHR0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDJsBAAHdDAccGQAHHBkABxwZAAEdBRwBHRkAAR0FHAEdGQAB3QwFHAHdDBoABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAEdARwBHR0AAx0dAAHdDAHVDAHdDB4AAd0M/QIABRwB3QwaAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAMcHQADHB0AAdUMAhwdAAEdAhwdAAHdDAIcHgACHB4AAhweAAHVDAEdHgAB1QwBHR4AAt0M2uMBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("AhwBHQHdDBwAAhwB1QwdAAIcAd0MHQACHB4AAhweAAIdHgAC1QweAAHdDAH6CZ8GAALdDP33AQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          rockSnowLarge3: Ou("rockSnowLarge3", {
            x: 38,
            y: 40,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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AR0ZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAh0DHBsAAh0DHBsAAt0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MjAEAAd0MChwBHQHVDAwcCAABHQHVDAEdBBwCHQHVDAIdDBwIAAMdAdUMARwEHQHVDALdDAwcCAAD3QwBHQHVDAIdA90MAgAMHAsAAd0MAR0C3QwFAAscAdUMDAAB3QwHAAEdChwBHRQAAdUMChwB3QwUAAHdDAocFgAKHBYACRwBHRYACRwBHRYACRwB3QwWAAHVDAgcFwABHQgcFwAB3QwIHBgACBwYAAccAdUMGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAdUMBBwB1QwaAAEdBBwB1QwaAAHdDAEdAxwB3QwbAAEdAxwcAAHdDAIcAdUMHQABHQEcAR0dAAEdAdUMAd0MHQAB3QwBHQ8AAR0HHAIdDBwKAAHVDAEdBhwCHQwcCgAB3QwBHQYcAt0MDBwLAAHdDAUcAR0CAAwcDAAEHAIdAgAMHAwAAhwBHQHVDAEdAd0MAgABHQscDAAEHQHdDAMAAR0KHAEdDAABHQHVDALdDAQAAd0MChwBHQwAAt0MBwAKHAHdDBUACRwBHRYACRwBHRYACRwB3QwWAAkcFwABHQgcFwABHQgcFwAB3QwIHBgACBwYAAgcGAAHHAEdGAAHHAHVDBgAAR0GHAHdDBgAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAR0EHAEdGgABHQQcAR0aAAHdDAQcAd0MGwABHQMcHAABHQMcHAAB3QwCHAEdHQABHQEcAR0OAAEdBxwCHQwcCgAB3QwHHALdDAwcCwAHHAIADBwLAAccAgAMHAsAAR0FHAEdAgAMHAsAAR0EHAIdAgAB1QwLHAsAAd0MAdUMAR0BHAIdAd0MAgAB1QwKHAHVDAwABB0B3QwDAAHdDAocAR0MAALdDAEdAd0MBQAKHAHdDA4AAd0MBgAKHBYAChwWAAkcAR0WAAEdCBwBHRYAAR0IHAHdDBYAAd0MCBwYAAgcGAAIHBgACBwYAAgcGAABHQccGAABHQYcAR0YAAHdDAYcAdUMGQAGHAHdDBkAAR0FHBoAAR0EHAEdGgAB3QwEHAEdGwAEHAHdDBsAAR0DHBwAAR0DHBwAAd0MAR0BHAHVDB0AAR0BHAHVDB0AAd0MAR0B3QwNAAIdBxwCHQwcCQAB3QwBHQccAt0MDBwKAAHdDAccAgAMHAsABxwCAAEdCxwLAAEdBhwCAAHVDAscCwABHQUcAR0CAAHdDAscCwAB3QwB1QwDHALVDAMAChwBHQwAAh0CHAEdAd0MAwAKHAEdDAAB3QwBHQEcAR0B3QwEAAocAd0MDQAB3QwBHAEdBQAKHA8AARwB3QwFAAEdCBwBHQ8AAdUMBgABHQgcAR0PAAEdBgAB3QwIHAHdDA8AAd0MBwAIHBgACBwYAAHVDAccGAABHQccGAAB3QwHHBkABhwBHRkABhwB1QwZAAYcAd0MGQABHQUcGgAB1QwEHAEdGgAB3QwBHQMcAR0bAAEdAxwB3QwbAAHdDAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAR0B3QweAAHVDB8AAd0MLQACHQgcAR0B1QwMHAgAAd0MAh0HHALdDAwcCQAB3QwBHQccAgAB1QwLHAoAAd0MBxwCAAEdCxwLAAccAgAB3QwKHAEdCwABHQUcAdUMAwAKHAEdCwABHQUcAR0DAAHVDAkcAd0MCwAB3QwB1QwDHAEdAd0MAwAB1QwJHA0AAR0DHAEdBAAB3QwJHA0AAd0MAxwB3QwFAAgcAdUMDgADHAYACBwBHQ4AAdUMARwBHQYAAR0HHAHdDA4AAh0B1QwGAAEdBxwPAAHdDAEdAd0MBgAB3QwHHBAAAd0MCAAHHBkABxwZAAEdBhwZAAEdBRwB1QwZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAR0EHBsAAh0CHAEdGwAB3QwB1QwCHAEdHAAB3QwCHQHdDB0AAh0eAALdDKcBAAHVDA4cAh0LHAHVDAMAAd0MDhwC3QwLHAHdDAQABRwC1QwGHAHVDAIAAdUMChwFAAEdBBwBHQHVDAYcAR0CAAHVDAEdCRwFAAHVDAMcAR0C3QwGHAHdDAIAAd0MAdUMCRwFAAHdDAEdAhwB1QwCAAYcBAAB3QwJHAYAAdUMAR0B1QwB3QwCAAEdBBwBHQUACBwBHQYAAd0MAdUMAR0DAAEdBBwBHQUACBwBHQcAAt0MAwAB3QwBHQMcAd0MBQABHQccAd0MDQABHQMcBgAB1QwGHAEdDgAB3QwBHQEcAR0GAAHdDAYcAdUMDwAC1QwBHQcAAdUMBRwB3QwPAAHdDAEd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CxwB3QwMAAEdAxwBHQMACxwNAAHdDAEdARwB1QwB3QwDAAscDgAB1QwCHQQACxwOAAHdDAHVDAHdDAQACxwPAAHdDAUACxwVAAscFQABHQkcAR0VAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwAJHBcAAdUMCBwXAAEdCBwXAAHdDAgcGAAHHAEdGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBRwBHRoABRwBHRoAAR0EHAHdDBYADRwBAAccAx0GHAEdAQANHAEAAR0GHAPdDAYcAR0BAA0cAQAB1QwBHQQcAR0DAAYcAd0MAQANHAEAAd0MAdUMBBwB1QwDAAYcAgANHAIAAd0MBBwB3QwDAAYcAgANHAMABBwEAAEdBRwCAAEdCxwBHQMAAxwBHQQAAR0FHAIAAR0LHAEdAwADHAEdBAAB3QwFHAIAAd0MCxwB3QwDAAEdARwBHQHdDAUABRwDAAscBAADHQYAAR0DHAEdAwALHAQAAd0MAR0B3QwGAAHVDAMcAR0DAAscBQAB3QwHAAHdDAEdARwBHQHdDAMACxwOAAHVDAIdBAALHA4AAd0MAR0B3QwEAAscDwAB3QwFAAEdCRwB1QwVAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwABHQgcFwABHQccAdUMFwAB3QwHHAEdGAABHQYcAd0MGAACHQUcGQAB3QwBHQUcGgAB3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwXAA0cAQAHHAMdBhwBHQEADBwB1QwBAAEdBhwD3QwGHAHdDAEADBwBHQEAAR0GHAMABhwCAAEdCxwB3QwBAAHdDAUcAR0DAAYcAgABHQscAwAFHAEdAwABHQUcAgAB3QwLHAMABRwB3QwDAAEdBRwDAAscAwAFHAQAAd0MBRwDAAscAwAFHAUABRwDAAscAwABHQIcAh0FAAEdAxwB1QwDAAscAwABHQIcAdUMAR0FAAEdAxwB1QwDAAscAwAB3QwBHQHVDALdDAUAAd0MAR0BHAHVDAHdDAMAChwBHQQAAR0B1QwIAAMdBAAKHAEdBAAC3QwIAAHdDAEdAd0MBAAB1QwJHAHdDA8AAd0MBQABHQkcFgAB3QwJHBcACRwXAAkcFwABHQccAR0XAAHVDAccAdUMFwAB3QwHHAHdDBgABhwBHRkAAx0DHAEdGQADHQMcAd0MGQAD3QwDHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAR0BHB4AAh0YAAEdCxwDHQYcAR0B3QwBAAYcAgAB3QwLHALdDAEdBhwB3QwBAAHdDAYcAwALHAIAAd0MBhwDAAEdBRwDAAscAwAGHAMAAdUMBRwDAAscAwAFHAEdAwAB3QwFHAMAAR0KHAMABRwBHQQABBwBHQMAAR0KHAMABRwB3QwEAAEdAxwBHQMAAd0MChwDAAQcAR0FAAEdAxwB3QwEAAocAwAEHAEdBQAB3QwBHQEcAdUMBQAJHAEdAwABHQIcAR0B3QwGAAMdBQAJHAHVDAMAAR0B1QwBHAHVDAcAAd0MAR0B3QwFAAkcAd0MAwAB3QwBHQEcAd0MCAAB3QwGAAgcAR0FAAHdDAHVDBAACBwB1QwGAAEdEAAIHAHdDAYAAd0MEAAIHBgAAdUMBxwYAAEdBxwYAAHdDAYcAR0ZAAEdBRwB1QwZAAMdAxwB3QwZAAHdDAIdAhwBHRsAAt0MAhwBHR0AAdUMAR0B3QwdAAIdHgAC3QzZAQALHAEAAd0MAR0HHAMABBwEAAEdCRwBHQIAAd0MBxwDAAQcBAABHQkcAR0DAAEdBhwDAAEdAxwEAAHdDAkcAd0MAwABHQQcAR0BHAMAAR0DHAUACRwEAAHdDAQcAR0B3QwDAAIdARwBHQUACRwFAAQcAd0MBAAEHQUACRwFAAQcBQABHQHdDAHVDAHdDAUAAR0IHAUAAxwBHQUAAd0MAQAB3QwGAAEdCBwFAAIcAh0OAAHdDAgcBQACHAHVDAHdDA8ABxwBHQUAAhwB3QwQAAccAdUMBQABHAEdEQAB1QwFHAEdAd0MBQABHAEdEQABHQUcAR0GAAEdAd0MEQAB3QwFHAHdDAYAAR0TAAUcBwAB3QwTAAUcGwAFHBsAAh0CHAEdGwACHQIcAR0bAALdDAIcAd0MHQABHQEcHgAB1QwBHR4AAd0MAdUMHwAB3Qz6AQAB1QwIHAMAAd0MAR0JHAEAAx0FAAEdCBwEAAEdCRwBAAPdDAUAAd0MCBwEAAHdDAHVDAIcAR0B3QwEHAoABxwBHQUAAR0CHAHdDAEABBwKAAccAdUMBQAB3QwCHAIABBwKAAccAd0MBgACHAIABBwKAAccBwACHAIABBwKAAccBwAB1QwBHQIABBwKAAccBwAB1QwBHQIABBwKAAEdBRwBHQcAAt0MAgAEHAoAAR0FHAEdCwABHQMcCgAB3QwCHQMcAd0MCwABHQMcCwAB1QwBHQMcDAAB3QwDHAsAAt0MAhwBHQ0AAxwNAAIcAdUMDQADHA0AARwBHQHdDA0AAxwNAAIdDgADHA0AAR0B3QwOAAMcDQAB3QwPAAMcHQACHAEdHQABHQEcAR0dAALVDAHdDB0AAd0MAR0fAAHdDIgCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gHAAARwfAAHVDB8AAR0fAAHdDJ8HAAEcHwABHB8AAdUMHwABHR8AAd0M/wYAARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wYAARwfAAEcHwABHR8AAdUMHwAB3Qz/BgABHR8AAR0fAAHdDL9vAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("mngAAd0M/gcAAh0B3QwdAAHdDAEdHwAB3Qy/BwAB1QwfAAHdDMo3AAMcAd0MHAABHQEcAR0dAAHVDAIdHQAB3QwBHQHdDB4AAd0M/QYAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAABHQEcAR0dAAIdAdUMHQAB3QwBHQHdDB4AAd0MvQYAAR0EHBsAAd0MAxwBHRwAAxwBHRwAAxwB3QwcAAHVDAEcAR0dAAMdHQAB3QwBHQHdDB4AAd0MngYAAxwB1QwcAAEdAhwBHRwAAR0CHAHdDBwAAd0MARwBHR4AAh0eAAEdAd0MHgAB3Qy/BgAB3QwB1QwfAAHdDNgfAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AwABHQUcAR0EAAHdDAIdAdUMAx0EHAoAAd0MBRwB3QwFAALdDAQdBBwLAAHVDAQcCAAE3QwEHAsAAR0DHAHVDAwABBwLAAHdDAQdDAAEHAwAAdUMAh0B3QwMAAQcDAAD3QwNAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwB1QwdAAHVDAEcAd0MHQACHR4AAd0MAR0fAAHdDLYBAAHdDAUcAR0EHBYABRwB1QwEHBYAAR0DHAEdAd0MBBwWAAEdAxwBHQEABBwWAAHdDAMcAd0MAQAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAhwBHQIAAR0DHBcAAR0BHAHVDAIAAR0DHBcAAdUMARwB3QwCAAHdDAMcFwAB3QwBHQQAAxwYAAEdBAADHBgAAd0MBAADHB0AAhwB1QwdAAIcAR0dAAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AAR0fAAEdHwAB3Qz2AQABHQUcAR0EHBUAAd0MBRwB3QwEHBYABRwBAAQcFgAFHAEAAR0DHBYABRwBAAEdAxwWAAUcAQAB3QwDHBYABRwCAAMcFgAFHAIAAxwWAAUcAgACHAEdFgAEHAHVDAIAAhwBHRYABBwBHQIAARwBHQHdDBYABBwB3QwCAAIdFwAEHAMAAR0B3QwXAAQcAwAB3QwYAAEdAxwcAAHVDAMcHAAB3QwDHB0AAxwdAAMcHQADHB0AAR0CHB0AAR0BHAEdHQAB3QwBHAEdHgABHQHdDB4AAR0fAAHdDNsBAAHdDAEdBRwEHQEcFQAB3QwFHATdDBcABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwcAAQcHAAEHBwABBwcAAEdAxwcAAEdAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAR0BHAHVDB0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDHsAAd0MAR0FHAMdAd0MFgAB3QwFHAPdDBgABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsABBwcAAQcHAAEHBwABBwcAAQcHAAB1QwDHBwAAR0DHBwAAd0MAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHQABHQEcAdUMHQAB3QwBHAEdHgAB1QwB3QweAAEdHwAB3QybAQAC3QwFHAHVDAHdDBkABRwB3QwaAAEdAxwB1QwbAAEdAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAR0BHAHVDB0AAR0B1QwB3QwdAAHdDAEdHwAB3Qyu1AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }])
        };

        function hu(uu, Eu, ju) {
          const su = new Cu.d;
          for (const Zu of ju) {
            const uu = su.get(Zu.chunkX, Zu.chunkY, Zu.chunkZ);
            if (!(0, Uu.H)(uu)) throw new Error(`Duplicate chunk at ${Zu.chunkX}, ${Zu.chunkY}, ${Zu.chunkZ}`);
            su.set(Zu.chunkX, Zu.chunkY, Zu.chunkZ, Zu.rle)
          }
          return new fu.e(uu, {
            x: 0,
            y: 0,
            z: 0
          }, Eu, su)
        }
        const Du = {
          ruinSnowLarge1: hu("ruinSnowLarge1", {
            x: 37,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gBAAAd0M/wcAAR0B3QweAAEdHwAB+gm/BwABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAdUMAd0MHAACHAEdHQAB1QwBHQHdDB0AAh0eAALdDP4GAAMcAR0cAAIcAh0cAAIcAR0B3QwcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0M/wQAASIfAAEiHwABIh8AASIfAAEiHwABIh8ABBwBHRsABBwB3QwbAAMcAR0cAAIcAh0cAAIcAR0B+gkcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0MnwQAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIeAAQcAR0bAAQcAdUMGwAEHAHdDBsAAxwBHRwAAhwCHRwAAhwB1QwB3QwcAAEcAR0B3QwdAAIdHgABHQHdDB4AAd0MvwMAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4ABRwB3QwaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAhwCHRwAAhwBHQHVDBwAAtUMAt0MHAACHR4AAt0M/gIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAyIeAAIiHgACIh4AASIB3QweAAEiHgAFHAEdGgAFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAAEHRwAAR0B1QwBHQHdDBwAA90M/QIAASIfAAIiHgACIh4AAiIeAAMiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAGHBoABhwaAAUcAR0aAAUcAR0aAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAABHAMdHAABHAEdAdUMAd0MHAAB1QwC3QwdAAEdHwAB3QyfAQABIh8AASIfAAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIfAAEiHwABIh8AASIeAAIiHQAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAEHAEdAd0MGgAEHAEdGwADHAEdAd0MGwADHAEdHAABHAHVDAEdAd0MHAABHAIdHQABHQLdDB0AAR0fAAHdDH8AASIfAAIiHgACIh4AAiIeAAIiHgADIh4AAiIeAAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAEHAHVDAH6CRoABBwBHRsAAxwBHQHdDBsAAhwC1QwcAAEcAh0B3QwcAAIdAd0MHQABHQHdDB4AAd0MfwABIh8AAiIeAAIiHgACIh4AAyIdAAHdDAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwB1QwaAAUcAfoJGgAEHAEdGwADHAIdGwADHAEdAfoJGwACHAEdAd0MHAABHAIdHQABHAHVDAHdDB0AAR0B3QweAAEdHwAB3QxfAAIiHgADIh0AAyIdAAMiHQAB3QwCIh4AAd0MAiIeAAIiHgACIh4AAiIeAAIiHgACIh8AASIfAAHdDDwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAFHAHdDBoABBwBHRsABBwBHRsAAxwBHQH6CRsAAxwBHRwAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAHVDAHdDB4AAd0MPwACIh4AAyIdAAMiHQADIh0AAd0MAyIdAAHdDAIiHgACIh4AAd0MASIfAAEiHwABIh8AAd0MfAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAACHAHVDAHdDBwAAhwBHR0AASIBHAHdDB0AASIBHB4AAiIeAAIiHgADIh0AAyIdAAEiAd0MAiIcAALdDAIiHgACIh4AAiIeAAHdDAEiHwABIh8AASIfAAHdDJwBAAYcGgAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAFHAHdDBoABRwbAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAASIBHAHVDAHdDBwAAiIBHR0AAiIB3QwdAAIiHgACIh4AAyIdAAQiHAAEIhwAAt0MAiIeAAIiHgAB3QwBIh8AASIfAAEiHwABIh8AAd0MnAEABhwaAAYcGgAGHBoABhwaAAUcAdUMGgAFHAEdGgAFHAHdDBoABBwBHRsABBwBHRsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAABIgEcAR0dAAIiAR0dAAIiAd0MHQABHAEiHgABHAIiHQABHAIiHQABHQMiHAABHQMiHAAB3QwDIh0AAt0MASIfAAEiHwABIh8AASIfAAIiHgAC3QybAQAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAH6CRwAAhwBHR0AASIBHAHVDB0AAiIB3QwdAAIiHgADIh0AAyIdAAMiHQAEIhwAAd0MAyIdAALdDAEiHwABIh8AASIfAAEiHwACIh4AAiIeAAEiAd0MHgAB3QxcAAYcGgAGHBoABRwBHRoABRwBHRoABRwB+gkaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAAxwB3QwcAAIcAR0dAAIcAR0dAAEiARwB3QwdAAIiHgACIh4AAiIeAAMiHQADIh0AAyIdAAQiHAAC3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AASIB3QweAAHdDDwABhwaAAUcAR0aAAUcAR0aAAUcAd0MGgAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAADHAEdHAADHAHVDBwAAxwB3QwcAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAEiARweAAIiHgACIh4AAiIeAAMiHQADIh0ABCIcAAHdDAMiHQAB3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AAiIeAAEiAd0MGwAFHAEdGgAFHAHVDBoABRwB3QwaAAQcAdUMGwAEHAHVDBsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAADHB0AAxwdAAIcAR0dAAIcAR0dAAEcAR0B+gkdAAEcAR0eAAEcAd0MHgABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQAEIhwABCIdAAMiHgACIh4AAiIfAAEiHwABIh8AAiIeAAEiAd0MHgABIhwABRwBHRoABRwB1QwaAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAADHAHdDBwAAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AARwBHR4AARwBHR4AARwB3QweAAEiHwABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQADIh0AASIBAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAR0cAAMcAd0MHAACHAHVDB0AAhwB1QwdAAIcAd0MHQACHB4AAhweAAEcAR0eAAEcAR0eAAHVDAHdDB4AAR0fAAHdDD8AASIfAAEiHwACIh4AAyIdAAMiHQADIh0AAyIeAAIiHwACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAEHAEdGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAHdDBwAAhwB1QwdAAIcAR0dAAIcAfoJHQABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHR8AAdUMHwAB3Qx/AAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAEHAEdGwAEHAH6CRsAAxwB1QwcAAMcAR0cAAIcAR0B3QwcAAIcAR0dAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0M3wEAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIfAAEiHwACIh4AAiIeAAIiHQADIh0ABBwBHRsAAxwBHQHdDBsAAhwCHRwAAhwB1QwB3QwcAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgADHAEdHAACHAIdHAACHAEdAd0MHAABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDL8DAAEiHwABIh8AASIfAAEiHwABIh8AASIfAAEiHwABIh8AAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AARwBHR4AARwB3QweAAEdHwABHR8AAd0MnwYAAhwB3QwdAAEcAR0eAAEcAR0eAAEdAd0MHgAB1QwfAAHdDN8GAAEcAd0MHgAB1QwfAAEdHwAB+gmfBwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("DgAC3QwJIgLdDBUACd0M0wcAAd0MDyIB3QwQAA8iEQAC3QwLIgLdDBMAC90MoAcABCIPABAiAd0MDwAPIgHdDBAAA90MCSID3QwUAAciAt0MFwAH3QzRBgACIhIAAyIJAAHdDAIiEAADIgHdDAoAAd0MAyILAAUiAd0MDAAB3QwRIgHdDA4AAt0MBiID3QwEIgLdDBEADd0MzQYAAd0MAiITAAIiCQADIhEAAyIJAAHdDAMiDwADIgHdDAoAAd0MBiICAAsiAd0MDAAC3QwBIgPdDAIiB90MAiIC3QwPAAXdDAEiCd0MEwAL3QyuBgACIhUAAiIHAAMiEwADIgcAAd0MAyIRAAMiAd0MCAAB3QwHIgcAByIB3QwKAAHdDAIiBN0MByIF3QwBIgHdDAwAB90MASIL3QwPAA/dDKsGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAHdDAYiCwAGIgHdDAgAAd0MAyIC3QwLIgTdDAEiAd0MCgAC3QwBIgXdDAEiDN0MDQAR3QwVAAXdDI8GAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwCIhUAAiIHAAQiEAAFIgcAAd0MByIJAAMiAt0MAiIB3QwIAALdDAIiA90MCSIH3QwLABPdDBEAC90MjAYAAiIeAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwDIhIABCIHAAHdDAYiCwADIgHdDAIiAd0MCAAB3QwCIgPdDAsiBN0MASIB3QwKABXdDA8ADd0MiwYAAiIeAAIiHgAB3QwCIhcAASIGAAUiEgADIgYAAd0MASID3QwBIg8ABSIHAAXdDAMiCQADIgLdDAEiAt0MCQAG3QwJIgbdDA4AD90MiQYAAiIeAAHdDAIiHgADIhcAASIFAAHdDAQiEwADIgYABN0MAiIPAAIiAt0MASIHAAXdDAIiCwACIgXdDAgABt0MCyIG3QwMABHdDIgGAAIiHgADIh0AAd0MAiIeAAQiFQACIgUAAd0MASIC3QwCIhEAAiIC3QwGAAXdDAIiDQACIgTdDAcABt0MBCIFAAQiBt0MCwAG3QwFAAbdDIcGAAMiHQAB3QwCIh4AAyIdAAHdDAQiFQACIgUAAd0MASIC3QwBIhMAASIC3QwGAATdDAIiDwACIgPdDAcABd0MBCIHAAQiBd0MCAAI3QwHAAXdDIcGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGAABIgUAAd0MBCITAAIiAd0MBgAE3QwCIg8AAiID3QwHAAXdDAMiCQADIgXdDAgAB90MCQAF3QyGBgACIh4AAiIeAAHdDAIiHgADIhgAASIEAAHdDAUiEwADIgUAAd0MAyIB3QwCIg8AAiID3QwGAALdDAEiA90MAiILAAIiBd0MCAAG3QwLAAXdDIUGAAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAEiHwACIh4AAyIdAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAHdDAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MBCIVAAIiBQAB3QwCIgHdDAIiEQACIgLdDAYABd0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAIiHgACIh4AAyIdAAHdDAIiGQABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAIiEQACIgLdDAYABd0MAyILAAMiBN0MBwAH3QwLAAXdDIUGAAIiHgACIh4AAd0MAiIeAAMiGAABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAMiDwADIgLdDAYABt0MAiILAAIiBd0MBwAH3QwLAAXdDIUGAAIiHgAB3QwCIh4AAiIeAAMiGAABIgQAAd0MBSITAAIiAd0MBQAB3QwBIgPdDAIiDwACIgPdDAYABt0MAyIJAAMiBd0MCgAF3QwJAAXdDIcGAAIiHgACIh4AAyIdAAHdDAMiFgACIgUAAd0MBSIRAAIiAt0MBgAB3QwBIgPdDAIiDQACIgTdDAcABt0MDSIG3QwKABPdDIcGAAHdDAIiHgACIh4AAyIXAAEiBQAB3QwCIhUAAyIGAAHdDAUiDwACIgLdDAEiBwAB3QwBIgPdDAMiCQADIgXdDAgAB90MCSIH3QwMABHdDIkGAAMiFwABIgUAAyIXAAEiBQAB3QwDIhUAAiIGAAHdDAIiEwAEIgcAByIMAAIiA90MASIHAAHdDAEiBd0MDCIG3QwIABfdDKcGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAQiDwAGIgcAAd0MCyICAAUiBt0MCAAB3QwBIgndDAIiA90MAiIF3QwKABXdDKkGAAMiEwADIgcABCIRAAQiBwAB3QwEIg8ABCIB3QwIAAoiAwAKIgkAAt0MAiIF3QwKIgTdDAsAAd0MASIF3QwJIgPdDA4AEd0MrAYABiILAAYiCQAB3QwIIgUACCIB3QwKABUiCwAB3QwTIgHdDAwAAt0MASID3QwLIgLdDA8AD90M0AYAESIB3QwOABEiDwAC3QwNIgLdDBEAAd0MCyIB3QwUAAvdDOcGAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gDAAASIfAAHdDN8HAAEiAd0MHgABIh8AAd0MvwcAAiIeAAEiAd0MHgABIh8AAd0MnwcAAiIeAAIiHgABIgHdDB4AASIfAAHdDIAHAAIiHQACIgHdDB0AAiIeAAEiAd0MHgAB3QyABwACIh0AAyIdAAIiAd0MHQACIh4AASIB3QweAAHdDOAGAAIiAd0MHQACIh0AAyIdAAIiAd0MHQABIgHdDB4AAd0M4QYAASIB3QwdAAIiHgACIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh8AASIeAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh4AAiIdAAMiHQACIgHdDB0AAt0MHgAB3QyABwACIh0AAyIdAAHdDAEiAd0MHQAC3QweAAHdDIAHAAIiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAASIfAAEiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAAiIeAAEiAd0MHAADIh0AA90MHQAC3QweAAHdDOEGAAIiHgACIhwAAyIB3QwcAAPdDB0AAt0MHgAB3QzCBgABIh4AAiIeAAIiHAADIgHdDBwAA90MHQAC3QweAAHdDMEGAAIiHgACIh0AAyIcAAMiAd0MHAAB3QwBIgHdDB0AAt0MHgAB3QzBBgACIh4AAiIdAAIiAd0MHAADIh0AAiIB3QwdAAEiAd0MHgAB3QzBBgACIh0AAiIB3QwdAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzABgACIh4AAiIdAAMiHQACIgHdDB0AASIB3QweAAHdDN8GAAIiAd0MHQACIh4AAiIeAAEiAd0MHgAB3Qz/BgACIh4AAiIeAAEiAd0MHgAB3QyfBwABIh8AAd0M3x8A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("BwACHRYcAR0HAAHdDAEdFRwCHQgAAd0MFRwB1QwB3QwJAAEdExwBHQHdDAoAAdUMAR0B1QwRHAHVDAsAAd0MAx0PHAEdAd0MDAAC3QwBHQHVDA0cAh0PAAHdDAIdCxwBHQHVDAHdDBAAAd0MAdUMChwBHQHVDAHdDBIAAd0MAh0GHAMdAfoJFAADHQHVDAMcAh0B1QwB+gkVAALdDAMdAhwBHQLdDBgAAt0MAx0B3QwcAAHdDAIdHgAC3QyaAQAHIhYADSITAA4iEgAPIhEAAyIB3QwBAAPdDAciEQABIgLdDAUAAd0MByIQAAHdDAkAAd0MBSIZAAciFwAIIgHdDBYACSIWAAoiFAAMIhEADiIB3QwLAAH6CQEdFRwB1QwB3QwIAAHdDAEdExwCHQoAAR0B1QwBHRAcAdUMAR0B3QwKAAHdDAHVDAIdDxwBHQHdDAwAAt0MAh0NHAEdAfoJDwAB+gkCHQkcBB0RAAHdDAIdAdUMBxwCHQHVDAHdDBIAAd0MAx0FHAEdA90MFAAC3QwFHQHVDAEdGQAB3QwEHQHVDAHdDBoABd0MugIABSIaAAciGQAJIhcACiIWAAPdDAciGQAB3QwGIhoAAd0MBSIaAAUiAd0MGQAEIgLdDBoABCIcAAMiAd0MHAAB3QwBIgHdDBMAAh0RHAIdAfoJCgAC3QwCHQ4cAdUMAR0B3QwNAAEdAdUMAh0KHAMdAd0MDgAC3QwC1QwBHQgcAx0B3QwRAALdDAIdBhwBHQHVDALdDBQAAd0MAdUMBRwCHQHdDBcAAd0MAx0BHAHVDAEdAd0MGQABHQHVDAIdAdUMAd0MGgAB+gkC3QwB1QwB3QweAAHdDNYFAALVDAIdCxwCHQ8AA90MAh0IHAMdAd0MEgAB3QwCHQUcBB0B3QwUAAHdDAIdAdUMAhwDHQLdDBYAAd0MBR0C3QwZAALdDAIdAd0MHQAC3Qy4BgAB3QwDHQHVDAMcBB0B3QwUAAH6CQHdDAgdAd0MFwAC3QwDHQPdDBoAAvoJAd0Mi98BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("Ad0M/wcAAfoJ//cBAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("DQANIgHdDBIAAd0MCyIB3QwUAAsiFQAL3QybBwAB3Qzr9wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          ruinSnowLarge2: hu("ruinSnowLarge2", {
            x: 37,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gEgAARwfAAHVDB8AAR0fAAHdDJ8HAAIcHgACHB4AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BAACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wMAAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAH6CR4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8DAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDN8DAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8EAAIcHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQABHB8AAR0fAAEdHwAB+gmfBwAB+gn/BwABHAEdAfoJHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDJ8GAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDP8DAAQcHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8CAAQcHAAEHBwABBwcAAQcHAAEHBwAAxwBHRwAAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAEcAdUMHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDL8CAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAMcAR0cAAMcAR0cAAMcAfoJHAADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgABHAHVDB4AARwB1QweAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MPwAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAEcAR0eAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAHVDB8AAR0fAAHdDD8ABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAH6CR0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AAR0fAAEdHwAB3QxfAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgAB1QwB3QweAAEdHwAB3Qz/AQADHAEdHAADHAEdHAACHAEdAd0MHAACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAAhwBHQH6CRwAAhwBHR0AARwB1QwB3QwdAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/AwABHAEdAfoJHQABHAHdDB4AAR0fAAEdHwAB3Qz/FgA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("hBAAAR0fAAHVDB8AAd0MvgcAAR0BHAEdHQAB+gkBHAEdHgABHQHdDB4AAR0fAAH6Cf8GAAHdDIQwAAYiAd0MGQAC3QwEIhwABN0MtwcABiIDAAEiAt0MFAAC3QwHIgHdDBgAAt0MBSIbAAXdDJYHAAMiCQAC3QwSAAUiGwAB3QwKIhYAAt0MCCIYAAjdDPMGAAQiCwACIg8AAd0MBCIKAALdDBAACCIYAALdDAoiFgAC3QwIIhgACN0M0gYAAd0MAyINAAEiAd0MDgAEIgEtCwAB3QwPAAkiFwAC3QwMIhQAAt0MCSIB3QwWAAndDNIGAAMiDgACIg0ABCICAAEtCgABIgHdDA0AAd0MBiIBLQkAAd0MDwAB3QwJIgQAASISAALdDAwiFAAC3QwHIgPdDBYAB90MswYAAiIPAAIiDQADIg4AASIB3QwNAAHdDAUiAS0KAAHdDA8AAd0MBiIaAALdDAwiFAAC3QwJIgHdDBYACd0MsQYAASIRAAEiAd0MDAACIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAEiAd0MEAAC3QwNIhMAAd0MCiIC3QwUAArdDLAGAAHdDAEiEQABIgHdDAwAAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCQACIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QyvBgAB3QwBIhEAASIB3QwMAAIiDwACIg0AAd0MBCIMAAEiAd0MDgAB3QwFIgkAAiIQAALdDA0iAd0MEgAB3QwLIgHdDBQAC90MrwYAAiIRAAEiAd0MCwAB3QwCIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAIiEAAC3QwNIgHdDBIAAd0MCyIB3QwUAAvdDK8GAAIiEQABIgHdDAsAAd0MAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCAADIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QywBgACIg8AAiIJAAHdDAMAAiIPAAIiDQAB3QwEIgsAAiIB3QwOAAHdDAUiBQAGIhAAAt0MDSIB3QwSAAHdDAoiAt0MFAAK3QyxBgACIg8AAiIHAAHdDAMdAgAB3QwCIg4AASIB3QwIAAMdAwAEIgsAAiIJAAH6CQLdDAMAAd0MByIBAAciAd0MEAAC3QwNIhMABN0MByIC3QwXAAfdDLEGAAHdDAIiDgABIgHdDAcAAd0MAhwB3QwDAAIiDQACIgkAAR0BHAQAAd0MAyIJAAQiCQACHQUAAt0MDSIB3QwJAAHdDAHVDAcAAd0MCyIB3QwLAAHdDAgAC90M0QYAAd0MASIB3QwMAAIiCQAB1QwBHQUAAd0MDQACIgkAAR0B3QwRAAMiAd0MCQAB3QwLAAkiAd0MFgAC3QwGIgHdDBkABt0M1AYAAt0MCgACIh0AAyIXAAgiAd0MFwAHIgHdDBgAB90M9gYAAt0MAyIDAAQiFgAC3QwHIgHdDBgABiIB3QwZAAbdDJgHAAgiGAAC3QwFIgHdDBoABd0MsB8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("BQABHQccAd0MAfoJAQALHAHdDAkAAd0MBxwDAAHVDAkcAR0LAAccAwABHQkcAdUMCwAHHAMAAd0MCRwB3QwLAAccBAAJHAwABxwEAAgcAR0MAAccBAAIHAHVDAwABxwEAAgcAd0MDAAHHAQAAR0HHA0ABxwEAAHVDAccDQAB1QwGHAQAAd0MBxwNAAEdBRwBHQUABxwNAAHdDAUcAR0FAAccDgAFHAHdDAUABhwBHQ4ABRwGAAHVDAUcAdUMDgAFHAYAAR0EHAEdAd0MDgAFHAYAAd0MAxwCHQ8ABRwHAAIdARwBHQHdDA8ABRwHAAHVDAIdAfoJEAAFHAcAAt0MAR0RAAEdBBwJAAHdDBEAAR0EHBsAAd0MBBwcAAMcAR0cAAMcAR0cAAMcAd0MHAABHQIcHQABHQIcHQAB3QwCHB4AAh0eAAEdAdUMHgAB+gkB3QwaAAHdDAccAfoJAgAJHALVDAH6CQoABxwDAAHVDAgcAR0B3QwLAAccAwACHQccAd0MDAAHHAMAAd0MAR0HHA0ABxwEAAHdDAYcAR0NAAccBQAGHAEdDQAHHAUABhwB3QwNAAccBQAGHA4ABxwFAAEdBRwOAAccBQABHQUcDgAHHAUAAfoJBRwOAAccBgAEHAEdDgAHHAYABBwBHQ4AAR0FHAEdBgAEHAHdDA4AAR0FHAHVDAYAAh0BHAEdDwAB3QwFHAHdDAYAAx0B1QwQAAUcBwAC3QwBHQHdDBAABRwJAAHdDBEABRwbAAUcGwAFHBsABRwbAAUcGwABHQQcGwABHQMcAR0bAAHdDAMcAR0cAAMcAd0MHAADHB0AAdUMAhwdAAEdAhwdAAHdDAEdARweAAHVDAEcGgAB+gkHHAQAAdUMBhwCHQwABxwEAAH6CQYcAR0B3QwMAAccBQABHQUcAfoJDQAHHAUAAdUMBRwOAAccBQAB3QwEHAHVDA4ABxwGAAMcAh0OAAccBgADHAEdAd0MDgAHHAYAAxwB3QwPAAccBgABHQIcEAAHHAYAAx0QAAccBgAB3QwB1QwBHRAAAR0FHAEdBwAB+gkB3QwQAAEdBRwBHRkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAh0CHAEdGwAB+gkBHQIcAd0MHAAB3QwCHB4AAhweAAIcHgACHR4AAh0eAAHdDAH6CRsABxwFAAHdDAHVDAMcAR0B3QwB+gkMAAccBgABHQIcAR0B3QwOAAccBgAB3QwCHAEdDwAHHAcAAhwB3QwPAAEdBRwBHQcAAh0QAAEdBRwB1QwHAAIdEAAB3QwFHAHdDAcAAt0MEQAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAxwdAAMcHQABHQEcAdUMHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MnAEABhwaAAEdBRwaAAEdBRwaAAHdDAUcGwAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAEdARwBHR0AAdUMARwBHR0AAd0MAR0B3QweAAEdHwAB3QyW3AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("iQgAAd0MAR0fAAEdHwAB3Qy19wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          ruinSnowMedium1: hu("ruinSnowMedium1", {
            x: 13,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinSnowMedium2: hu("ruinSnowMedium2", {
            x: 34,
            y: 21,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }]),
          ruinSnowSmall1: hu("ruinSnowSmall1", {
            x: 12,
            y: 7,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("gQgAASIBhgEGAAEiGAAB3gzeBwABjAUBIgEABd0MAQABIgGMBRUAASMJAAEjFQABgQEJAAGBAR8AAYYBHwAB3gz2BgABIgXdDAECAd0MGgAF3QwdAAHfDLsHAAPdDAECAd0MAwIB3QwYAALdDAGMBQHdDAGMBQLdDBwAAdAFugcAAd0MAgIBzgEC3QwEAgHdDBYAAt0MAYwFAt0MAowFAt0MGgABzwUBjAUBzQUBAAHfDBwAAdEFmgcAAd0MAwIC3QwEAgHdDBYAAt0MAQIB3QwBzwEBAgPdDBcAAd8MAgABzwUB0QwBzQUeAAHRBZoHAAHdDAUCAd0MAwIB3QwWAAPdDAKMBQLdDAECAd0MGQAB3wwBzwUBjAUBzQUeAAHRBZsHAAHdDAICAd0MAQIB3QwCAgHdDBgAA90MAYwFAd0MAQIB3QwcAAHOBQIAAd8MtwcAAiIH3QwaAAXdDBwAAd8MuwcAAYwFAQABIgXdDAIAAYwFFQABIwkAASMVAAGBAQkAAYEBFQABhgEfAAHeDIAHAAEiBgACIvWnAQA=")
          }]),
          ruinSnowSmall2: hu("ruinSnowSmall2", {
            x: 14,
            y: 19,
            z: 14
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("gQgABd0MAx0F3QwYAAHdDAHVDAH6CR4AAd0MuQcAAt0MAx0FHAPdDBUACB0CAAHfDBUAAfoJAt0MAdUMAx0B1QwbAAEdA90MAR0bAAGIAQEAAdEMAd8MAYEBGwABgQEDAAGIARsAAYEBAwABiAEbAAGIAQMAAYEBGwABiAEDAAGBARsAAoEBAQACgQEcAAKIAQGBAbcFAAHdDAEdCRwC3QwUAAHdDAMdBBwCHRcAAx0C1QwEHRcAA90MAR0C1QwBHQLdDJUHAAHdDAEdCRwBHQHdDBQAAR0B1QwHHAEdAfoJFQAB3QwFHQHVDAMdFwAB3QwBHQHVDAQdAdUMAd0MGAAB+gkC3QwDHAHdDAHfDPUGAAHdDAEdCRwBHQHdDBQAAh0HHAIdFQAB3QwCHQHVDAIdAdUMAx0B3QwVAAHfDAHdDAcdAd0MGAAD3QwDHAHdDBsAAd8MAxwB3wwdAAHPAbgGAAEdAdUMCRwB1QwB3QwTAAHdDAHVDAkcAR0VAAHdDAHVDAgdAd0MFgAEHQLVDAMdFwAD3QwEHAHVDAH6CRgAAd8MAQAEHAHdDBsAARwB3gwBHAHeDBwAAhwB3gwBHRwAAR0B3gwBHAHeDBwAAR0BHAHeDAHVDBwAAd0MAd4MAdUMAR0dAAIdAd0MHQABHQHdDB4AAd0M2QQAAh0JHAEdAd0MEwAB3QwBHQkcAR0VAAHdDAQdAdUMBB0B3QwWAALVDAUdAtUMAd8MFgAD3QwFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwACHAHMAQEcHAACHAIdHAACHAIdHAABHAEdAt0MHAACHR4AAR0B+gkeAAHdDJoEAAEdAdUMCRwBHQHdDBMAAd0MAR0JHAEdFQAB3QwFHQHVDAMdAd0MFgAC1QwCHQHVDAQdFwAB+gkC3QwFHAHdDBkAAd8MBRwbAAUcGwAEHAEdGwAEHAHVDBsABBwB3QwbAAEcAR0BHAEdHAABHAMdHAABHQHdDAEdAd0MHAABHQEAAd0MHQAB3Qy6BAABHQHVDAkcAR0B3QwTAAHdDAEdAdUMBxwCHQHfDBQAAd0MAR0B1QwBHQHVDAUdAd0MFQAB3wwB3QwDHQPVDAEdAd0MGAAC3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAABHQEcAh0cAAEdARwBHQHdDBwAAfoJAR0B3QweAAEdHwAB3Qy5BAAB1QwBHQkcAdUMAd0MEwAB+gkBHQHVDAccAtUMFQAB3QwJHQH6CRYAAd0MBx0B3QwYAALdDAHVDAMcAR0B3wwYAAHfDAEAAdUMAxwB3QwbAAHdDAEdARwBHR0AAh0B1QwdAAHdDAHVDAHdDB4AAfoJ2AUAAd0MAdUMCRwBHQHdDBQAAd0MAh0EHAQdFgADHQLVDAQdAd0MFgAB+gkB3QwEHQPdDBkAAt0MAvoJAQAB3wz2BgAC3QwBHQccAh0B3QwVAAcdAdUMAR0B3QwWAAHdDAMdAtUMAh0B+gkYAAHdDAH6CQXdDBwAAd8M+QYAA90MCB0C3QwWAAHdDAIdBd0MGQAC3Qy5lwEA")
          }]),
          ruinSnowSmall3: hu("ruinSnowSmall3", {
            x: 13,
            y: 14,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("BAAC3Qz7BwAD3QwB1QwDHQLVDBoAAfoJBd0M1gcAAt0MAdUMBR0C1QwBHQHdDBYAAh0B1QwBHQXdDBcAAfoJA90MugcAAt0MAdUMAR0DAgHVDAEdAdUMAh0WAAEdAdUMAwIDHQLdDBYAAt0MAR0BLgHVDAHdDAH6CQHdDBsAAYEBHwABiAEfAAGBAR8AAYYBHgABgQECiAEeAAGIAfoFAAHdDAHVDAMCAdUMAwIB1QwBHQHVDBUAAd0MAwIBHQMCAh0B3QwWAAEdAdUMAR0B3QwBgQEBHQECAt0MFwABiAEBzQEEAAGIARkAAYEBBQABiAEZAAGBAQUAAYgBGQABhgEFAAGGARkAAYgBAYEBAwABgQEBiAEZAAGBAQUAAYgB9wUAAd0MAdUMAQIB1QwDAgEdAQIBHQHVDAEdFQAB1QwBAgEdAwIBHQECAh0B3QwVAAHdDAEdAd0MA+MHAd0MAR0B3QwB+gmXAQABiAEFAAGBAZcGAAHdDAcCAdUMAQICHRUAAR0GAgEdAQIBHQHdDBUAAR0B1QwF4wcB3QwBHQHdDBYAAYEBfwABiAEHAAGBAZYGAAHdDAcCAR0BAgEdAd0MFQABHQYCAdUMAQIBHRYAAR0B1QwC4wcB0QwC4wcB3QwBAgHdDBYAAYgBBwABgQEXAAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGIAQcAAYEBFwABiAEHAAGBAfYFAAHdDAECAR0HAgEdAd0MFQACHQcCAd0MFgAB1QwB3QwF4wcCHZcBAAGIAQcAAYEBlgYAAd0MAdUMBwICHRYAAd0MBwIB3QwB+gkXAAIdA+MHAdUMAR2ZAQABgQEFAAGBAZcGAAHdDAIdAQIBHQECAdUMAgIB3QwXAAH6CQHdDAECAR0BAgEdAQIBHRkAAh0B3QwBHQHdDAHVDAEdGQABiAEFAAGBARkAAYgBBQABgQEZAAGIAQUAAYEBGQABhgECAAGBAQIAAYYBGQACgQEBAAHPAQEAAYEBAYgBGQABgQEFAAGIAfgFAAMdAdUMAR0B1QwBHQHdDBgAAt0MBB0B3QwbAAHdDAMdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGIAQKBAR4AAYgB/QUAAd0MAx0B3QwcAAHVDAH6CQHdDB0AAfoJu58BAA==")
          }]),
          ruinSnowSmall4: hu("ruinSnowSmall4", {
            x: 11,
            y: 9,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AwAH3Qz5BwABHAPdDAEdARwC3QwYAAEcAwAB3QwBHRoAARwEAAEdGgABHAQAAd0MGgABHP4GAAUdAxwBHQHdDBYAASID3QwCHQHVDAIdFwABIgMAAd0MAx0B3QwXAAEiBAAD3QwYAAEiBgABHfcGAAEiAdUMBB0CHAEdARwB3QwVAAEiAtUMBx0WAAEiBd0MAR0B1QwB3QwBHRYAASICAAHQBQIAAt0MAQIB3QwdAAEdAYwFAdUMHwAB0wXVBgAB3QwBHQHVDAMdAdUMAhwBHQEcAR0VAAHVDAIdAd0MAtUMAR0B1QwCHQHVDBUAA90MAYwFAt0MAdUMAR0BjAUBHQHdDBcAAc8FAYwFAc0FAd8MAt0MAYwFAd0MGQAB0QUDAAHVDAGMBQHVDB8AAdMF1QYAAd0MBB0B1QwBHQIcAdUMARwBHRUAAd0MAh0B3QwFHQHVDAEdFgAC3QwBzQEC3QwCHQHdDAEdAd0MFwABzwUB0QwBzQUBAALdDAECAd0MGQAB0QUDAAEdAYwFAR0fAAHTBdUGAAHdDAYdBBwB1QwVAAHdDAHVDAEdAd0MBx0VAAHfDALdDAGMBQLdDAHVDAEdAdUMAR0B3QwXAAHPBQGMBQHNBQEABN0MAd8MGAAB0QUEAAEd9wYABB0B1QwBHQQcAdUMFQAB3QwBHQHVDAYdAdUMAR0WAAXdDAQdAd0MGAABzgUBAAHfDATdDB0AAd8M+QYAAR0B1QwIHRYAAt0MBB0B1QwCHQHdDBgAB90MuAcAAdUMAR0C1QwEHQEiFwAI3QwBIhgAAd8MAgAB3wwDAAEcHwABHJkHAAXdDAEiHwABIh8AASK1rwEA")
          }]),
          ruinStoneLarge1: hu("ruinStoneLarge1", {
            x: 26,
            y: 33,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }]),
          ruinStoneLarge2: hu("ruinStoneLarge2", {
            x: 38,
            y: 31,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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AAEjBgABHQGBAQEAAdwBAQABgQEGAgGBAQESAhgCEgGBAQYAAdwBBwABHQGBAQHcAQEAAYEBBgIBgQEFAAGBAQ8AAR0B3AEBAAGBAQYCAYEBBQABgQEQAAEdAoEBBgIBgQEFAAGBAREAAR0BiAEFEgECAYEBAQABGAISAQABgQETAAHdAQMAAaAIAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQGBAQEAAYgBA4EBAhICGAESAYEBGQABgQEFAAGBARkAAYEBBQABgQEZAAGIAQUAAYEBGQABgQEBAAESAQABEgEAAYcBGQABhwEFAAGHARkAAYEBBQABhwEZAAGIAQUAAYEBGQABhwECEgEAAhIBgQEZAAGBAQEwAgABiAEBAAGBARkAAYEBAogBAwABiAHGAQABAgEAAQIBAAYCAQAKAgIAAQIIAAGzBwuBAQEjAwIBgQECAgEjBIEBAbMHASMGAAEcBQIBgQEFAgEjARwDgQECHAEjAYEBAwABgQEBIwYAAR0FAgGBAQUdASMCgQEBHAOBAQEjAYEBAwABgQEBIwYAAYcBBQIBHAQAAdwBAbMHAYEBAYgBAoEBAYgBAYEBASMCgQEBAAGBAQGHAQEjBgABgQEFAgEdBAAB3AEBHQKIAQGBAQGIAQKBAQEjAYcBAYEBASMCgQEBIwYAA4EBAQABiAECgQEEAAHcAQGIAQaBAQEjA4cBAoEBASMGAAEjBgABHQMAAdwBAYEBBgIBgQEChwEDgQEBIwYAAYEBBwABHQIAAdwBARwGAgWBAQGIAQEjDwABHQEAAdwBAYEBBgICgQECiAECgQEBIxEAAdwBAYEBBgIGgQEBIxEAAR0BgQEDEgEYARIBAgaBAQEjEQAB3gEB3QEFAAOBAQGIAQGABAGIAQGBAQEjEgAB3QEFAAGBAQGIAQKBAQGIBAGIAQGBAQEjEgAB3QEFAAGIAQOBAQEjAoEBASMSAAHdAQOBAQEAAoEBASMFgQEBIxIAAd4BBgABIwGzBwMAAYcBASMZAAEjAYcBAwABhwEBIxkAASMBhwEBgQEBAAKBAQEjGQABIwGBAQGIAQEjAoEBASMZAAEjAoEBAYgBAYcBAYEBASMZAAEjA4EBAYcBAYEBASMZAAEjAYEBAYgBAYcBAogBASMZAAEjAYcBBIEBASMZ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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gJUBAAGBAR8AAR0fAAEjHwABiAGfAgACAh4AA7MHAYEBHAABHQGzBwGHAR0AAh0BswcdAAGBAQEdAYcBHQABhwEBHR4AAocBHgABhwEBgQEeAAKBAR4AAoEBHgACgQEeAAKIAR4AAYgBHwABgQEfAAGHAR8AAYEBHwABIx8AAYgBHwABhwEBAAJkHAABgQEBAAJkHAADgQEBZBwAA4EBHgACIx8AAYEBnQIAAQIBAAICHAABgQEBswcBgQEBhwEcAAKBAQKHARwAAYEBAocBAR0cAAKBAQGzBx0AA4EBHQABhwECgQEdAAOBAR0AA4EBHQABgQEBiAEBgQEdAAOBAR0AAYEBAocBHQABgQEBhwEBgQEdAAKIAQGBAR0AAYcBAYEBAYgBHQABhwEBgQEBiAEdAAGHAQIjHgAChwEeAAGBAQGIAR4AAYgBAYEBHgACgQEBZBwAAYcBAYgBAoEBHwABI74CAAECHQAEgQEcAAOBAQGHARwAA4EBAYcBHAAEgQEcAAOBAQGzBxwABIEBHAADgQEBiAEcAAOBAQGIARwABIEBHAADgQEBiAEcAASBARwABIEBHAADgQEBhwEcAAGBAQKIAQGHARwAAYcBAYgBAYEBAYcBHAABiAEBgQEBAAEjHwABgQEfAAGHAR8AAYgBHwABgQEcAAGIAQGHAQGIAQGBAd4CAAICHAAEgQEcAASBARwAA4EBAYcBHAAEgQEcAASBARwABIEBHAAEgQEcAAOBAQGIARwABIEBHAADgQEdAASBARwAA4EBAYgBHAAEgQEcAAGBAQKIAQGBARwAARwBiAEeAAGHAQGIAZ4BAAGBAQGIAd4CAAECAQACAhwABIEBHAAEgQEcAAOBAR0AA4EBHQADgQEdAAKBAQGIAR0AA4EBHQAEgQEcAASBARwABIEBHAAEgQEcAAKBAQISHAABgQEBiAEeAAGHAQGIAR4AAYgBAYEBvgEAAYgB4QIAAQIdAAOBAQECHAACgQEBAgEdHAADgQEdAAKBAR4AAoEBHgACgQEeAAOBAR0ABIEBHAADgQEdAASBARwAA4EBAYgBHAACEgEYARIcAAGBAQGIAR4AARwBgQHeAQABiAHfAgABAgEAAgIcAAKBAQECAbMHHAABgQECAh0AAoEBAQIdAAKBAR4AAoEBHgACgQEeAAOBAR0AA4EBHQADgQEBiAEcAASBARwABIEBHAACEgEYARIcAAKBAf4BAAGBAd8CAAECAQACAhwAAYEBAgIBswccAAGBAQECAR0dAAGBAQGzBx4AAQIfAAGBAR8AAoEBHgABgQEBiAEBgQEdAAOBAQGIARwABIEBHAAEgQEcAASBARwAARIBGAISHAADnQjeBAACAh0AAYEBAQIBswcdAAGBAQGzBx4AAQIfAAEdPwABgQEfAAGBAR8AAYEBAYgBHgABiAEDgQEcAAOBAQGIARwAA4EBAYgBHAACEgEYARIcAAGdCN8EAAICHgACAgGzBx0AAQIBswceAAEdXwABgQG/AQABGAIS/QQAAwIdAAICAbMHHQACswe+AgABEv8EAAICHgACswfeDwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("CAACAgIABQIIAAMCCwABZAGzBwEjA7MHAoEBASMBHQYAAWQDgQEBswcMAAEdASMDswcCgQEBIwGzBwYAAWQDgQEBswcMAAEcASMBHQGzBwKIAQGBAQEjCAABiAEEgQELAAHdAQEjAYcBAYgBARwCgQEBIwcAAogBA4EBAYgBCwAB3QEBIwGBAQMcAYEBASMHAAGHAQWBAQsAAd0BASMCgQEBHAGIAQGHAQEjBgABHAaBAQsAAd0BASMCgQEBhwEBHAGHAQEjAWQFAAKHAQSBAQGIAQsAAd0BASMBgQEBhwEBiAEChwEBIwYAAYcBBoEBCwAB3QEBIwSBAQGIAQEjBgABHQaBAQsAAd0BASMFgQEBIwcAAYEBAYgBAYcBAoEBAYgBCwAB3QEBIwEABIEBASMIAAKHAQOBAQwAASMCAAQjCAABhwECEgEYAQACEgoAASMDAAGBAQEAASMIAAGIARAAASMFAAEjCAABiAEVAAIfCAABgQEeAAFkASMeAAFkAYEBHgABZAGHAR4AAWQBgQEfAAKBAR4AAoEBAogB0wIAAQIJAAMCDgAB3AEBAAHcAQEAAYcBAR0IAAFkAYEBArMHDgAB3AEBAALcAQGBAQGHAQcAAWQDgQEBswcNAALcAQEAAdwBCgABswcDgQEOAALcAQEAAdwBAWQJAAKzBwKBAQ4AAtwBAQAB3AEKAAGzBwGBAQGIAQGBAQ4AAtwBAQAB3AEKAAKHAQOBAQGIAQwAAtwBAQAB3AEKAAGHAQGBAQGHAQOBAQwAAtwBAQAC3AEBAAFkBwABhwEFgQEMAALcAQEAAtwBCgAEgQEBiAEMAALcAQEAAtwBCgAEhwEBgQEMAAHcAQIAAtwBCwABhwEDgQEPAALcAQsAAYcBAhIBGAESGgABZAGBAR4AAWQBhwEfAAGHAR8AASMeAAFkAYEBHwABgQEfAAGIAR4AAoEBgAMAAwIaAAJkAQABgQEBswcBgQERAAFkCQACZAKBAR4AAYEBAYcBHAABZAEAAocBHgABgQEBiAEdAAFkAoEBHgABHQGBAQGIAR0AAogBAYEBGwABhwEDgQEdAAFkAocBHgACgQEeAAKBAQESHQABhwEBgQEeAAGBAQGHAR4AAoEBHgACIx4AAocBHgABiAEBhwEeAAKIAbIDAAFkCAABZAQAAYcBGwABZAEAAWQBAAGzBx8AAbMHHwABgQEfAAEcHgABgQEfAAGBAT4AAWQfAAFkQQABhwEfAAGBAR8AAYcBHwABgQEfAAEjHwABhwEfAAGBAaPjAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          ruinStoneLarge3: hu("ruinStoneLarge3", {
            x: 38,
            y: 39,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gFEAARwfAAEcHwABhwEfAAGHAR8AAYcBHwABhwEfAAGHAb8NAAECHwABhwF/AAHbAR8AAdsBHwAB2wGhBgABAh0AAYcBArMHXQAB2wEfAAHbAR8AAdsBHwAB2wGgBgACAh0AAoEBAhwfAAEcngEAAYgBHwABHB8AARwfAAEcHwABiAEfAAGIAR8AAYgBHwABiAEfAAGIAR8AASP9AwABAgIAAQIcAAOHAQEcHQABHAKHAR0AA4cBHgABhwEfAAGHAR4AAocBHQACgQEBhwEdAAKBAQGIAQGBARwABIEBHAACgQEBiAEBgQEcAAKBAQEfAYEBHAAEgQEcAAKBAQGIAQGBARwAAoEBAYgBARwcAAOBAQEcHAABiAECgQEBIxwAAogBARwdAAGIAQGBAQEcHQADgQEdAAKBAQGIAR0AAYEBAogBHQACiAEBHB0AAYEBAYgBARwdAAIKARwfAAGIAR8AAYEBHwABiAEfAAGIAR4AAYYBAYgBHQABHwKIAR0AAYEBAYgBAeQHHgACAh0AARkBHAGHAR4AARwfAAEcHwABhwEfAAGHAR8AAYcBHwABgQEgAAGIAR8AARwfAAGBAR8AAYEBHwABiAEfAAGIAR8AAYgBHwABgQEfAAEcHwABgQEfAAFtHwABgQEfAAGBAR8AAYgBHwABgQEdAAITARwfAAEKnwEAAYYBHwABgQEfAAGBAR0AAQIfAAEZAocBXgABhwEfAAGHAR8AAYEBQAABiAEfAAGIAR8AARwfAAGBAR8AAYEBAWQeAAGIAR0AAhIBgQEfAAGBAR8AAYEBHwABbR8AAeIHHwABbR8AAYEBHwABgQEfAAEcHQACEwGBAR8AAQq/AQABHx8AAYEBHQABAgGsAR4AARkChwEeAAGHAQHbAR4AAYcBAdsBHgABhwEB2wEeAAGIAQHbAX8AAYgBHwABiAEfAAHiBx8AAeIHIAABZBwAARgBEgGBAQFkHAABgQEBLwEcHQABgQEBAAFtHQABgQEBAAHiBx0AAYEBAQAB4gcdAAGBAQEAAeIHHQABgQEBAAFtHQABgQEBAAGIAR0AAYEBAQABgQEdAAEZARMBgQEfAAEKXQABYx8AAWMfAAFjHwABYyEAAYYBHwABAh0AARkChwFeAAEcAdsBnwEAAYgBHwABgQEfAAGBAR8AAYEBHwABgQEdAAISAYEBHwABgQEfAAGBAR8AAW0fAAHiBx8AAW0fAAGIAR8AAYgBHwABiAEdAAIZAYEBHwABCr8BAAEfHwABgQEfAAECHQABEwGBAQGHAR4AAYcBAdsBHgABgQEB2wEeAAGIAQHbAR4AAYEBAdsBXwABHB8AAYgBHwABiAEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAW0fAAGIAR8AAYgBHwABiAEfAAGBAR0AAhkBgQEfAAEKnwEAAYYBHwABgQEfAAGBAR8AAgIcAAKBAQIcHQAChwEBHB0AA4cBHgABhwEfAAGBAR0AAdsBAQABgQEdAAHbAQEAAYEBAYgBHAACgQECiAEcAAKBAQKIARwAA4EBAYgBHAACgQEBHwGBARwABIEBHAAEgQEcAASBARwABIEBHAABiAECgQEBIxwAA4gBHQADiAEdAAKBAQGIAR0AAoEBAYgBHQABgQEBHAGBAR0AARwBgQEBHB0AAoEBARwdAAIKAYEBHwABgQEfAAGBAR8AAYEBHwABHB4AAYYBARwdAAEfAoEBHQACgQEB5Ac9AAOHAQEcfAAB2wEfAAHbAR8AAdsBIQABiAEfAAEcHwABgQEfAAGBAR8AARwfAAEcHwABHB8AARwfAAEjnQQAAYcBARwBswfdBwABAh8AAYcB/wcAAYcBHwAB3gEfAAHeAZ8HAAECHwABhwEB2wEeAAEcAdsBHgABswcfAAEcHwABhwEfAAGHAR8AAYcBHwABiAEfAAGIAR8AAYEB3wUAAbMHAdsB3icA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("nXgAAuQHART8BwAB5AcDFB0AARQBAAEUHQAB5Ae+BwAB5AcBFAGzBx8AARoBswceAAEUARoeAAHkB50HAAEUARofAAEaAbMHHwABGgHWAx8AARQfAAHkBx8AAeQH3AYAAeQHARoBswcfAAEaAbMHHgACGh4AAeQHnQcAAeQHAxodAAEaAQABFB0AAeQHvwcAAuQHARTgVwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gHgAAuQH/gcAAhQB5AceAAEUHwAB5Ae+BwABswcBFAHkBx0AARQfAAEUHwAB5AegBwACFB0AAbMHARQeAAEavwcAAbMHARQB5AcdAAEaHwABFB8AAeQHnwcAAhQB5AceAAEUHwAB5Ae+BwAC5Af+VwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("EgAFAgEAAQIWAAGzBwEcARMBGQUTAYcBAbMHAWQUAAGzBwEcAS8BAAQQAc4BARwXAAGzBwGSCAEABZIIAbMHFwABgQEHAAGHARcAAYEBBwABhwEXAAGHAQcAAYcBFwABgQEHAAGHARcAAYEBBwABgQEXAAGBAQcAAYEBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQcAAYEBHwABgQEeAAEUAYEBHQACGgGzBxwAAhodAAGBAQEaHgABswcfAAHkB5wDAAMCAQACAgEAAgIVAAeHAQEcAYEBAYcBARwVAAGHAQEcAoEBAocBARwBgQEDHBUAC7MHFQADgQECcAHuBwJwAYcBAhwVAAOHAQFvAeUHAe4HAeUHAW8BgQEBhwEBHBUAA4cBAW8B5QcB7gcB5QcBbwOHARUAA4cBAW8B5QcB7gcB5QcBbwGBAQKHARUAA4EBAW8B5QcB7gcB5QcBbwKBAQGHARUAARwCgQEBbwHlBwHuBwHlBwFvA4EBFQABHAKBAQFvAeUHAe4HAeUHAW8DhwEVAAGBAQIfAXAB5QcB7gcB5QcBcAIfAYcBFQADgQEBhgEBcAHuBwFwAYYBA4cBFwACgQEBHwHuBwEfBIEBGAACgQEBhgEFgQEZAASBAQEaAbMHASMaAAKBAQEaAQAB5AcbAAGBAQEaHgABswcfAAHkB5sDAAICAQABAgEAAQIBAAECFwABswcBhwECswcBHAKzBwEcAbMHARwWAAHdAQGHAQcAARwB2wEWAAGzBwcAAbMHAdsBFQAB3QEBhwEHAAGHAQHbARUAAd0BAYcBBwABhwEXAAGHAQHcAQYAAYcBFwABhwEB3AEEAALcAQGHARcAAYcBAdwBBAAC3AEBgQEXAAGBAQLcAQMAAtwBAYcBFwABgQEC3AECAAPcAQGHARcAAYEBAtwBAgAD3AEBhwEXAAGBAQPcAQEAA9wBAYcBGAABFAXcAQEUAYcBGQABFAPcAQEUAVgBgQEaAAEUAdwBARQBUAEUASMaAAFYARQBWAEaHQABUAEUHgAB5AfbAwAC3AEFAALcARcAAdwBBwAB3AEXAAHcAQcAAdwBFwAB3AEHAAHcARcAAdwBHwAB3AEfAAHcAQIAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AFfAAHcAR8AAdwBjOQBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, bu.d)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, bu.d)("gIACAA==")
          }]),
          ruinStoneMedium1: hu("ruinStoneMedium1", {
            x: 11,
            y: 16,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("BAABAgEAAgIBAAECAgABAhcAA7MHAYgBAQACswcBiAECswcBAAGHARUAArMHAYgBAwABiAEBHQGzBwEAAYcBFwABiAEDAAGBAQEAAR0BAAGIARcAAYEBAwABiAEDAAGHARcAAYcBAwABgQEDAAGBARcAAYEBBwABiAEXAAGHAQcAAYgBFwABhwH7BQAFAgEAAQICAAMCFAABiAEEIgGzBwUiArMHEwABhwEBHAMiAbMHAR0BswcDIgGzBxQAAYgBArMHARwCIgKzBwEiARwBIgEcFAABgQECHAGzBwEiARwBswcBHAEiAbMHARwBswcUAAGBAQEiARwCIgGzBwIcASIBswcCHBQAAYEBBSIBHAIiAhwVAAGIAQMAARwCIgGzBwMiHgACIvcFAAciAQICAAICEQABHQwiArMHEQABswcLIgEcAR0TAAEdCiIBHBQACyIBHBQADCIUAAEiARwBIgEECCIYAAEcASICBAQiHAABHAEEASL1BQAJIhYAAbMHBSIDswcEIgGzBxIAAR0FIgOzBwQiAR0SAAGzBwUiArMHARwEIgEdEgABHAUiARwBswcBHAMiAR0TAAIiAQQDIgIcAbMHAyIBHBYAAiIBswcBIgEcBSIZAAciHAABHAEEAiLyBQALIgEAAwIRAAGHAQQiAbMHAYgBA7MHAYEBAyIBiAERAAGHAQQiAbMHAYgBArMHAQABiAEDIgGIAREAAR0EIgGzBwGIAQMAAYgBAyIBiAERAAGBAQUiAYEBAwABgQEDIgGIAREAAYgBAiICBAGzBwGBAQMAAYgBAyIBiAERAAGIAQUAAYEBAwABgQEDIgGBAREAAYEBBQABiAEDAAGBAQMiAYEBFwABiAEDAAGHAQMiAYgBGwABhwECHAEiAYcBGwABiAEDAAGHARsAAYEBAwABhwEbAAGIAQMAAYcBHwABhwHSBAABAgIAAgICAAMiFQABswcDIgGBAQGzBwQAArMHAiIBHREAAR0DIgYAA7MHASIBswcRAAEdAyIBiAEGAAEcAiIBHREAASIBBAGzBwEiAYcBBgABswcBIgEcFgABhwEGAAEcASIBswcWAAGIAQYAAiIBHB0AAiIBHB0AAyIcAAGHAQEiAbMHASIBhwEbAAGHAQMAAYcBOwABgQEjAAGHAdAEAAICAgABAgEAAQICAAMiAQITAAGzBwUiAYgBBAACswcCIgGzBxEAAR0DIgHPAQGIAQQAArMHAiIBHREAAbMHBCIBgQEFAAGzBwIiAbMHEQAEIgEAAYcBBQABHAEiAR0dAAEcASIBHB0AARwCIh0AAyIdAAMiHQABIgHRDAEiHAABhwEDAAGBAbAFAAICAQACAgEAAgIBAAMiBAIQAAEdBiIBswcDAAWzBxAAArMHBiIEAAOzBwEdEQABHQEiAQQBswcBHAYAAbMHARwBswcSAAEiARwKAAEcAR0eAAGzBwEcHgACHB0AASIBHAEiHQADIhwAAYEBAyIBgQEbAAGBAQEAAc8BAQABgQGxBQABAgIAAQICAAICAyIBAgIAAS8RAAKzBwQiAYEBAiIBAAGIAQOzBwGIARIAAbMHAiIBswcBIgEcAwABhwEBAAKzBwGIARIAASIBBAEiBgABhwEDAAGIAR8AAYcBHwABhwEfAAGBAR8AAYEBGwABgQEDAAGBARsAAoEBAQABhwEBgQEbAAKBAQOHAR8AAYcBHgABgQEBiAEeAAGBAdQEAAQCAQABAgIAAbMHFwABiAEEswcCIhkAAYgBAbMHAiIcAAGHAR8AAYcBgwcAAQIfAAEiARzXrwEA")
          }]),
          ruinStoneMedium10: hu("ruinStoneMedium10", {
            x: 13,
            y: 30,
            z: 28
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("SwAE3gEcAAHeAQEAAd4BHQAD3gEdAAPeAR0AA94BHQAC3gEeAALeAR4AAt4BHgAC3gEeAALeAR4AAd4B+QQAAgICAAMCAQABAgIAAQICAAICDgAC3gEBHAizBwEcAbMHAhwDswcBHAwAA94BARwBiAEBgQEBHAGzBwGBAQGIAQKzBwGBAQEcArMHAogBArMHDQAB3gEBAAEcAwABiAEB7QcBeAHtBwGBAQIAAeoHAYgBARwBgQEBHAGIAQ8AAYgBAwABiAEB7QcBeAHtBwGIAQHqBwHvBwEAAbMHARwBgQEBiAEBHA8AAYgBAe8HAQAB7wcBgQEB7QcBdQHtBwGIAQHvBwHqBwHvBwGBAQGIAQKBAQEcEgAB6gcBiAEB7QcBdQHtBwGBAQPqBwSBAQEcEQAB6gcB7wcBAAHtBwF6Ae0HAYEBAe8HAeoHAe8HBYEBFAABgQEBegOBAQHvBwOBAQEAAYEBFQADgQEB4gcDgQEB4gcBgQECAAHeARQAAYEBAWoCgQEBiAEBagKBARgAA4EBAQABgQEBiAEBgQEaAAGBAQHbAQIAAYEB8gQABAIBAAICAQAEAgMAAQIDAAECDAACswcBHAETBhkCEwMZAhMCGQGzBwwAAYcBArMHAgACDwEAAg8CAAEPAQACDwMAAYcBAt4BCgAB3QECgQECAAHdAQEPAgABDwkAAbMHAt4BDAABgQECAAHdAQ0AAYEBAt4BDwAB3QENAAEcAt4BDwAB3QENAAGBAQLeAQ8AAd0BDQABgQEC3gEPAAHdAQ0AAYEBAt4BDwAB3QENAAGBAQLeAQ8AAd0BBQABGBkAAd0BARQBGgcUGgAB3AH1BAABAgIAAgIFAAICAgACAgEAAgICAAECAQACAgYAArMHAxkBBAETARkBBAIZBBMBGQITARkBEwIZArMHARwBswcJAAEUARoBlwEBAAEPAZsBAQACDwEAAg8BAAIPBAABswcBhwEBswcBhwERAAEPAgABDwIAAQ8EAAEcA4cBHAADhwEdAAKBAQGHAR0AAYEBAQABhwEdAAKBAQGHAR0AAYgBAYEBAYcBHQADgQEUAAEYCAABgQECiAEeAAEcAoEBDgAFFAIaAxQEAAOBAQEcGwACgQEDiAEbAAGIAQSBARsAAYEBAwoBiAEbAAGBAQMAAYgBGwABgQEDAAGBARsAAYEBAwABgQEbAAKBAQEAAoEBGwAFgQEbAAUUGwABFAEAARQBAAEUGwAB5AcDAAHkB4YCAAICAgAEAgEAAwIDAAECAQABAgMAAQICAAECBwABswcCEwEZARMEBAQTARkDEwMZARMEGQGzBwYAAYcBAQACFAEaAZoBAZsBAZcBBQABDwgAAb0HAYgBAd0BAYcBBgABiAEWAAGIAQHdAQGHAQYAAYEBFwAB3QEBhwEGAAGIARcAAd0BAYcBBgABiAE4AAGBAR8AAYgBHwABgQETAAEYCAABEgIAAYEBHwABgQEfAAGBARMAAxQBGgQUAQAEgQEbAAGBAQMTAYEBGwABCgEAAdEMAQABCl0AAWMdAAGBAQEAAWMBAAGIARsAAYEBAxQBgQEbAAUUHAADFB0AARQBAAEUHQAB5AcBAAHkB+cBAAECAgACAgEAAQIBAAECAwABAgEAAQIDAAICAgABAgIAAQIGAAGzBwMTARkEBAETAb0HARMDGQMTARkCEwQZAbMHBgABswcDFAEwAcwBAgABmgEBAAmdCAEAAdEMAgAB2QEBCwGzBwYAAYEBAQAB0QwBAAEPEgAB2QEBCwGHAQYAAYgBAwABnggTAAELAYEBBgABgQEXAAELAYEBBgABgQEHAAHdAQ4AAdkBAQsBgQEGAAGBAQcAAd0BHwAB3QEPAAELAYEBDgAB3QEEAAGHAgoAAb0HAYEBDgAB3QEBGAESARgBEgEYBRIDGAESAdkBAQABiAETAAHMAQkAAdkBAQsBgQEdAAHZAQELAYEBHAABgQEBAAELAYEBFQABFAIaAhQBGgGBAQETAe4EARMBgQEbAAEKAwABClwAAWMB5QcBYx0AAWMBzwEBYxwAAYEBAxQBgQEbAAEUAwABFBsABRQdAAEUHwABFB8AAeQHHwAB5AepAQABAgIAAgIBAAECAQADAgEAAQICAAQCAgADAgcAARwBEwEZAhMBGQMEARMBGQITARkDEwEZAhMEGQETAbMHBgABHAMUARoBAAGXAQGbAQGXAQIAAhQLAAEvAbMHBgABgQEWAAGIAQEAAbMHBgABgQEYAAEcBgABgQEYAAGBAQYAARwJAAHcAQ4AAYEBBgABgQEJAAHcAQ4AAYEBEAAB3AEOAAGBARAAAdwBDgABgQEPAALcAQIAARgIAAEYAgABiAEfAAGBAR8AAYEBFwAEFAEABIEBGwABgQEDEwGBARsAAQoBAAHPAQEAAQpdAAFjHQABgQEBAAFjAQABgQEbAAGBAQMUAYEBGwACFAEAAhQcAAMUHQABFAEAARQdAAHkBwEAAeQH6AEAAwICAAECAgABAgEAAQIBAAECAQABAgEAAQIBAAUCCAABHAGzBwIZARMDBAETAxkBEwEZAhMEGQETARkDswcBHAYAArMHAhQBGgEAAZoBAZcBAQ8BAAMUAg8BAAIPBQABiAECswcHAAGBAQwAAQ8CAAEPBwABHAcAARwWAAGBAQGzBwcAAYgBFAAEgQEHAAGBARQAAoEBAhwHAAGIAQkAAd4BCgAEgQEHAAGBAQkAAt4BCQAEgQERAALeAQkAA4EBAYgBEQAC3gEBGAgAAYEBARwCgQERAALeAQkAARwBgQEBiAEBHBQABRQCGgSBAQGIARsAA4EBAogBGwABgQEBiAEBgQEBiAEBHBsAAYgBAwoBgQEbAAGBAQMAAYEBGwABgQEDAAGBARsAAYgBAwABgQEbAAGBAQGIAQEAAoEBGwAEgQEBiAEbAAUUGwABFAEAARQBAAEUGwAB5AcDAAHkB4kCAAQCAQACAgUAAQIBAAECAgACAgwAA7MHAQQCGQITARkBLwMZAhMFGQwAAbMHAhwCAAIPAQABDwIAAg8BAAIPBAAB3AELAAOIAQMAAQ8BAAEaAwABDwIAAQ8EAAHcAQsAAbMHAYcBAYgBEQAC3AEKAAEcAeIHAYEBEAABgQEC3AEKAAGBAQFtAYgBEAABgQEC3AEKAAGIAQHiBwGBARAAAYgBAtwBCgABiAEBbREAAYEBAtwBCgABgQESAAGBAQPcARQAARgHAAGBAQPcAREABRQCGgQUkQUAAgIDAAECAgADAgEAAwIQAA2zBwETARkBExAAAYcBAbMHAYEBAbMHARwBiAEBswcBiAECswcBHAGIAQGHARMAAYgBAgAB6gcBiAEB7QcBeAHtBwGHAQIAAeoHAYcBEwABiAEBAAHvBwHqBwGIAQHtBwF4Ae0HAbMHAQAB7wcB6gcBhwETAAGBAQHvBwHqBwHvBwGBAQHtBwF1Ae0HAYcBAe8HAeoHAe8HAYcBEwABgQEBAALqBwGIAQHtBwF1Ae0HARwD6gcCgQEDAAHbAQ4AAYgBAe8HAeoHAe8HAYEBAe0HAXoB7QcBgQEB7wcB6gcB7wcFgQEB2wELAAGIAQQAAe8HA4EBAXoBAAKBAQHvBwSBAQKIAQHbAQsAAYEBBgAB4gcDgQEB4gcBiAEBgQEBHAHiBwOBAQHcARQAAYgBAWoBHAKBAQFqAYgBAoEBAWoBgQEBiAEVAAKBAQEAA4EBAQABiAECgQEaAAGBAQMAAYEBnQUABbMHGwABswcCAAGBAQGIARsAAoEBAQABgQEcAAOBAR0AAoEBAeIHHQADgQEeAAOBAZwGAAUCGwACswcDHBsAAYcBAdwBAgABswcB2wEaAAGHAQHcAR4AAYcBAdwBHgABgQEB3AEeAAEUAYEBHwADFIumAQA=")
          }]),
          ruinStoneMedium11: hu("ruinStoneMedium11", {
            x: 11,
            y: 20,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("KQAB3gECAAHeAQMAAd4BATAXAALeAQEAAd4BAwAC3gEBAAHeARQAA94BAQAC3gECAALeAQEAAd4BFAAD3gEBAALeAQIAAt4BAQAB3gEUAAPeAQIAAd4BBQAB3gEVAALeAQIAAd4BBQAB3gGzBgABAgIAAQIBAAECAQABAgEAAwIBAAICAgABAgEAAgIFAAKBAQIcAQABHAEdAhwDHQIcAR0CHAEdARwCHQIcAR0BAAIdBgABgQECAAEdARwBgQEBHAGBAQEdAhwBHQGBAQEcAR0BHAKBAQEdARwBHQGIAQEdARwBHQcAAYEBAxwCgQEBHQEcAQABHAKBAQIdAgABgQEBHQEcAh0BgQEBHAIdCAACgQEBHQIcAYEBAR0DgQEBHAGBAQEcAYEBAxwBgQEBHAGIAQEcAR0BAAHbAQoAAYEBAR0DgQECHQEAAYEBARwBgQEBHAGBAQEAAR0BHAEAARwBgQECAAHbAQkAAYEBARwBiAEBHAHeAQGBAQEcAYEBAR0BgQECHAGBAQIdAYEBAR0BHAEdARwCAAHbAQsAAYEBARwBgQECAAEdAYEBAQABiAEBgQEBiAEBHQGBAQEAAYgBAYEBAYgBAoEBARwB2wEMAAEcBIEBAYgBAoEBARwFgQEBHAGIAQEcAYEBAYgBCwAEiAEBHAiBAQEcA4gBAoEBAYgBCwABiAEBgQEBHAKBAQGIAQiBAQKIAQEcAYEBAogBAYEBCwADgQEBiAEDgQEBiAEDgQEBiAEHgQEBiAECgQEKAAGBAQGIAQaBAQEAAYEBAYgBAoEBAYgBAoEBAYgBA4EBAQABgQEKAAiBAQGIAQEABIEBAYgBBIEBAcwBDAABiAEBgQEBiAECgQEBiAECgQEBAAmBARAAB4EBAQACgQECAAaBAQ8AAYEBAogBAoEBBgADgQEBiAEEgQENAAGIAQEAAYEBAQABgQEGAAGBAQEAAYgBAQABgQEBAAGBAcwDAAECAgABAgwAAgINAAJCAQACQgwAAkIBAAJCCgABQgE/AUIBOwFCAQAC3AECAAEzBgABQgE7AUIBPwFCCwABQgE7AkIBAALcAQEAAVQCMwUAAkIBOwFCCwABQgE7AUIBOwEzAUIC3AECVAIzAVQDAAFCATMBOwFCATsBQgsAAkIDMwFCAdwBAlQCMwJUAQABQgMzAUIB3AEBQg0AAUIDMwFCAlQCMwJUAUIDMwFCAQAC3AEKAAQMAUICMwFCAlQCMwJUAUIBMwEvAUICDALcAQoAAoMBAQACgwEDQgJUAjMBvQcB3AEDQgWDAQoABwwBGgJUATMBvQcBAAHcAQEaBwwKAAaBAQEaAQwCVAIzAQAB3AEBDAEaA4EBA4gBCgAGVAEMARQCVAHNAQEzAVQB3AEBFAEMBFQBAAFUDAAGFAJUAjMCVAYUDwAFVAYfBVQXAAKBARwAAYEBAVQCFAFUAYEBGQABgQEGAAGIAfIDAAEUBAACFAEAARQBAAQUAQACFBoAAtwBBgAB3AENAAHcAQkAAtwBBgAC3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBFAAB3AEJAALcARQAAdwBCQAC3AEyAAGBAUEAAYgBIAABiAEgAAGIASAAAYEBBAACgQEaAAOBAQFUAhQBVAKBAQGIARcAAYgBAwAB0QwBAAHdAQGBAfEDAAEcAQABHAcAARwBAAIcAQACHAEAAhwWAAHRDJYCAAGIASAAAYgBIAABgQEgAAGBASAAAYgBBAACgQEEAAGIARUAAoEBAYgBAVQCFAEAAYgBAYEBAYgBFwABgQEFAAHdAQGBAfUDAAECAgABAgYAAQIVAAFUAgABgwEBvQcDAAGDAQEAAYMBAb0HAYMBAVQB2wERAAGBAQgAARwBAAGBAQEAARwB2wEQAAHdAQGBAQgAAdwBAwABgQEB2wEQAAHdAQEcCAAB3AEDAAGIAQHbARAAAd0BARwIAAHcAQMAARwB2wEQAAHdAQEcCAAB3AEVAAHdAQGIAQgAAdwBAwABiAERAAHdAQGIAQgAAdwBAwABiAEOAAGBAQIAAd0BAYgBCAAB3AEDAAGBAQ4AASMBgQEBAAHdAQGBAQgAAdwBAwABgQEPAAEjAYEBAd0BAYEBCAAB3AEDAAGBARAAASMCgQEIAAHcAQMAAoEBEAABIwGBAQgAAdwBAwABgQEBIxEAASMBgQEEAAKBAQEAAdwBAgABgQEBIxMAASMCgQEBiAEBVAEvARQBVAHcAQKBAQEjFQABIwGIAQUAAd0BAYEBASOfBAAB3AEfAALcAR8AAdwBEAAB3AEOAAHcARAAAdwBDgAB3AEQAALcAQ0AAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEQAB3AEBAAHcAQsAAdwBHwAB3AEfAAHcARkAAoEBBAAB3AEWAAGBAQGIAQFUAc8BARQBVAGIAQGBAR4AAd0BAYEBmwUAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBAYEBHAABgQEBAAIUAVQBiAEBgQEfAAGBAbsHAAKBAR0AAVQCFAFUAoEBHwABgQG7BwACgQEgAAFUj7QBAA==")
          }]),
          ruinStoneMedium2: hu("ruinStoneMedium2", {
            x: 19,
            y: 15,
            z: 19
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinStoneMedium3: hu("ruinStoneMedium3", {
            x: 16,
            y: 18,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinStoneMedium4: hu("ruinStoneMedium4", {
            x: 20,
            y: 15,
            z: 23
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinStoneMedium5: hu("ruinStoneMedium5", {
            x: 16,
            y: 24,
            z: 18
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinStoneMedium6: hu("ruinStoneMedium6", {
            x: 21,
            y: 15,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinStoneMedium7: hu("ruinStoneMedium7", {
            x: 16,
            y: 23,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("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")
          }]),
          ruinStoneMedium8: hu("ruinStoneMedium8", {
            x: 14,
            y: 18,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("JAACZN4HAAMCHQABIgGBAQEiHwABgQG7BwABAgEAAwIaAAGBAQUiAYEBHAABIgEEASIeAAGWAZsHAAQCAQABAhkAAWQHIhkAAYgBASIBBAEiAgQBgQEbAAGWAQHRDF0AAbMHHwABswcBAAIcHAABswcBAAIcHAABswcBAAKzBxwAAbMHAQACHRwAAbMHAQACHR4AAh38BAACAgEAAwIZAAGHAQUiAYcBGgABBAIiAQQBIhsAAZYBAQAB3gEB1QgeAAHeAQHWCBwAAbMHAQAB3gEdAAGzBwEAAd4BHQABHQEAAhwcAAEdAQACHBwAAR0BAAKzBxwAAR0BAAIdHAABswcBAAIdHgACHfsEAAcCGAABZAciGQABgQEFIgGBARsAAd0BAhwcAAGzBwEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABswcBAAIdHAABHQEAAh0cAAGzBwEAAh0eAAIdHQAEHBwAAxwdAAIcnAQAAQICAAMCGgABhwEFIgGHARoABSIbAAGzBwEAAhwcAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwBzAEBAAEcugQAAQICAAMCGgAGIhoAAYgBAc4BAyIBBBsAAbMHAcwBAgABlgEbAAEdAdsBHgABHQHbAR4AAR0B2wEeAAGzBwEvArMHHAABHQHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwCAAEcugQAAQIBAAECAQABAhsAAYgBBSIbAAECAyIBBBsAAbMHAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHNoEAAICAQABAgEAAQIaAAYiGgABgQEFIhwAAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAEdAd0BArMHHAABHQHdAQKzBxwAAR0B3QECswccAAGzBwHdAQIdHAABHQHdAQIdHAABswcB3QECHR4AAh0dAAQcHgACHL0EAAICGgABZAGBAQUiAYcBGgABBAEiAQQBIgEEGwAB3AEfAAHcAR8AAbMHHwABswcfAAEdAQACHBwAAR0BAAIcHAABHQEAArMHHAABHQEAAh0cAAGzBwEAAh0eAAId/QQABQIZAAciGQABgQEBIgIEASIBBAGIARoAAdwBAQAB0QwBAAGWARsAAdwBHwAB3AEfAAGzBx8AAbMHAQACHBwAAbMHAQACHBwAAbMHAQACswccAAGzBwEAAh0cAAGzBwEAAh0eAAId+wQAAgIBAAMCGgABiAEFIgGIARoAASIBBAMiHAABlgGgBwACAhwAASIBgQEBIgGBAQEiGwABiAEBAAGBAQEAAYEBuZcBAA==")
          }]),
          ruinStoneMedium9: hu("ruinStoneMedium9", {
            x: 14,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AgACAh4AA7MHHQABswcBHQGBAR0AARwB4gceAAEdHwACgQEeAAGIAQGBAQGIAR0AAoEBAYgBHQABgQEB4gf+BQACAh0AAbMHARkBEwEAAYEBGwABgQEDAAEcGwABHAMAAYgBGwABiAEDAAGBARsAAR0DAAGBARsAAYEBAhMBAAGBARsAAYEBAcwBHgABiAH/BQACAh0AAbMHARkCEwEAARMBswcZAAGzBwG9BwQAARwZAAGIAQUAAR0ZAAGBAQUAAYgBHwABgQHcBgABAgIAAQIZAAGzBwETARkDEwGBARkAAYEBAgAB0QwCAAGIARkAAeIHBQABgQEfAAGBAfoGAAICAQACAgEAAgIBAAICFAABgQEBGQQTAQACgQEDHAGBARMAARwGAAOBARYAAYEBBgABiAGZBwABzQEKAAECFAABgQECAAETARkGAAGzBxQAAYEBHwABiAEfAAGIAR8AAYEBHwABgQHABgADAh0AAbMHAYEBARMHAAGBARUAAYEBARwIAAEcFQABHAGHAR4AAoEBHgABiAEBgQEfAAGBAcAGAAECBQABAgEAAQIXAAGHAQUAARMBGQGzBxYAAWQBgQEHAAGHARYAAZYBARwfAAGBAf8GAAMCAwADAhcAAYEBARkBEwEAAxMBGQGzBxcAAR0HAAGIARcAAYEBnwcABAICAAMCFwABswcFEwEZARMBswcXAAEdBAAB0QwCAAEcHwABgQGaBwAFAhgAAYcBAgAFEwGHAR4AAaAIARwfAAGBAR8AAYgB9wYAAQICAAICAgACAhcAAYcBAgACEwEZAhMBswccAAGkAQEAAc4BAYEBHwABgQEfAAGBAfcGAAQCAQACAgEAAQIXAAGzBwGHAQOzBwEdAbMHAh0ZAAGBAQMdAocBAR0ZAAGBAQGIAQGBAQLiBwEdARwbAAGBAQGIAQOBAR0AAoEBAYgB+wYAAmQfAAGWAbaXAQA=")
          }]),
          ruinStoneSmall1: hu("ruinStoneSmall1", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("ghAAAQICAAGzBwEuAR0aAAGHAQMAAYgBHwABiAEfAAGBAR8AAYYBHgAChwEBgQEeAAGHAbsGAAICAbMHAYEBARwCHRkAAocBBQABiAEZAAGHAQUAAYcBHwABhwEfAAGGAR4AAYEBAYgBHwABgQG5BgABswcBzAED6AcBHAGzBxoAAYcB3QcAAR0BHAXoBwEdAQIXAAFkBwABgQF3AAGBAQcAAYcB2AYAARwF6AcBswcBAhYAAWQBiAEDAAHRDAMAAYgBFgABZAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQYAAWQBhwEXAAGBAQcAAYcBtwYAAbMHAR0F6AcBHAGzBxUAAmRIAAFkHwABZBcAAYEBBgABZAGHAR8AAWS4BgACHQPoBwEdAbMHmQEAAYcBBQABgQEBZB4AAWS5BgABAgGzBwEAAR0BHAEdGgABiAECAAHPAQIAAYgBGQABgQEFAAGIARkAAYEBBQABiAEZAAGGAQUAAYYBGQAChwEDAAKBARkAAYcBBQABgQG7BgABswcBAgEdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGHAQGBAdmuAQA=")
          }]),
          ruinStoneSmall2: hu("ruinStoneSmall2", {
            x: 11,
            y: 8,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AgACAgGzBwEdAgACAhcAAYgBAbMHAR0DAAGzBwEdAYgBAbMHFgABiAECIgMAARwBIgGIAQGzBxYAAocBBQABIgGBARcAAYYBBwABhgEfAAGBAdYGAAECBgABHQIAAbMHAS4UAAGzBwEcCQABhwEUAAEiAcwBCQABhwEUAAEiCgABgQGUBwABAgEAAR0IAAECFAABHQGzBwkAAYcBFAABswe/BwABswcEAAEd/gcAAbMHAQACHfsHAAMCAc8BAgIBswcZAAGzBwMdAbMHAYgBAmQZAAGzBwEcAiIBiAEdAAEingcAArMHAQACAhkAAbMHAYgBAdEMAgABHQGIAQFkGAABswcBiAEDAAGzBwGBAQFkGQABgQEDAAEiAYcBGgABhgEEAAGHARoAAYcB3wYAArMHAgABswcBAhgAAWQBswcBzQEEAAEiAmQXAAEcBQABswe5BwABAgIAAbMHGgACZAEdBQABswcYAAFkAbMHBQABHBkAASKfBwABswcBAh4AAWQCswceAAGzBwEcurcBAA==")
          }]),
          ruinStoneSmall3: hu("ruinStoneSmall3", {
            x: 12,
            y: 9,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("BgADAh0AArMHAYgBHQABIgEAAYEBuAcAAQIBAAECAQABAgEdAQABswcYAAGHAQEAArMHAYcBAc0BGgABgQEBAAIiAYgBHQABIgEAAYEBnAcAAQICAAEdAbMHAR0aAAGHAQEcHgABiAEfAAGBAR8AAYYB/wYAAQIBswcCAAGzBxoAAWQBswcfAAEiwAcAAgIEAAECFgACZAKzBwEcBAABhwEBiAEXAAGzBwEiBQABhwG6BwABAgEdAwACAhcAAWQCswcEAAGHAQGzBxcAAWQBIgGzBwUAAbMHGQABIgUAASKYBwABAgHNAQGzBwEdAgABswcXAAJkAYEBARwFAAGzBxgAAYEBBgABIhgAAYgBBgABIhgAAYYBBgABIhgAAocBHwABhwHABgABswcCAAGzBwEdAQIXAAFkAbMHAdEMBQACHRcAASIHAAEiFwABIgcAASKZBwACAgIAAbMHAQIYAAFkArMHARwDAAEcAbMHGAABHAEiBQABswcfAAEimAcAAwIDAAGzBwECGAAChwEBgQEEAAGHARkAAocBBAABiAEfAAGBAR8AAYYB/wYAAS4eAAGIAQGHAV8AAYcB9K4BAA==")
          }]),
          ruinStoneSmall4: hu("ruinStoneSmall4", {
            x: 9,
            y: 10,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("AgACAh4AASIBHR4AArMHHgABIp4HAAECHwABHQEcHgABIgHRDB4AASKeBwABAgHMAR4AARwBHR8AAbMHRAABZB4AAWQeAAJkuwYAAQIfAAGIAQMAAYgBGwABiAEDAAGIARsAAYEBAwABiAEBZBoAAYEBAwABgQEBZBoAAYYBAYcBAQABgQEBhgEbAAOHAQGBAQGIAR0AAmSgBgABAh8AAR0CZB0AAR0BZB4AASI8AAFkHwACZOAGAAEcAbMHAWQdAAHOAQEiHwABIpwHAAEuAQACAhwAAbMHAh0BHBwAARwBAAGzBx8AASKbzwEA")
          }]),
          ruinStoneSmall5: hu("ruinStoneSmall5", {
            x: 13,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("JwABZBsAAd4BAwABlgEbAAHeAQYAAWQfAAFkIAABZNcGAAUCAQADAhUAAbMHAYEBAbMHAYEBA7MHAR0DswcVAAGBAQEdAoEBBB0BgQECHBUAAR0BgQEBHQGBAQEdAoEBA4gBARwBZBMAAd0BAYEBAYgBAQADgQEBiAECgQEBiAEBHRQAAd0BAYgBAwABiAEGgQEaAASBAQKIARoAAogBA4EBAYgBGwABgQEBAAGBAQEAAYEB9QUAAgIBAAMCAQAEAhUAAbMHAhUDDwMVAQ8BswcUAAHdAQEdAwABDwMAAc0BAQABHRQAAd0BAYEBBAABFQQAAR0UAAHdAQGBAQUAARUDAAGIARQAAd0BAYgBBgABDwIAAYEBHQACDwGIAR8AAYEBlQYAAQIBAAQCAQACAgEAAQIUAAFkARwCFQMPAhUBDwEVARwVAAGBAQMAARUFAAGBARUAAeIHBAABDwQAAeIHFQABiAEFAAEPAwABiAEcAAEPAgABgQEcAAG9BwEVAQ8BgQEfAAGBAR8AAYEB9QUAAgIBAAICAwABAhcAAR0BDwEVBA8CFQEPAR0VAAEdCQABHRUAAeIHCQAB4gcVAAGBAQkAAR0fAAGBARsABBUBgQEfAAGIAZUGAAcCAQABAhcAAbMHAw8BFQHMAQEPARUBDwEVAbMHFQABgQEBpAEBAAHeAQEAAQkEAAEdFQAB4gcCAAHeAQEAAQkEAAHiBxUAAYEBAgAB3gEBAAEJBAABgQEYAAHeAQEAAQkEAAGBARgAAd4BAQ8CFQEPARUBDwGIAR8AAYEBHwABgQH2BQACAgEAAwIBAAECAQABAhUAAbMHAQ8BFQMPARUBAAEVAQ8BswcVAAEdAQAB3QECAAGgCAQAAYEBFQABgQEBAAHdAQIAAaAIBAABgQEVAAGBAQEAAd0BBwABiAEXAAHdAQcAAYgBFwAB3QEBDwEVBA8BAAGBARkAAdEMAQABzwEDAAGBAZUGAAMCAgAFAhYAAbMHAQ8DFQEPBBUBHBUAAYEBBAABoAgEAAGzBxUAAYEBCQABHRcAAd0BBwABiAEXAAHdAQcAAYEBFwAB3QEBDwIVAg8CAAGIAR8AAYEBHwABgQH1BQABAgIABAICAAECFgABiAEDFQIPARUBAAEVAQ8BHRUAAR0JAAGIARUAAR0JAAGzBx8AAR0YAAHcAQYAAYEBGAAB3AEGAAGIAR8AAYgBlgYAAwIBAAECAwACAhYAAw8BAAEJAwABFQGzBxoAAQkEAAGzBxoAAQkEAAEdHwABHR8AAYEBHwABgQEfAAGBAR8AAYEB9gUAAQIfAAEVBwABFQGzBx8AAR0fAAGIAR8AAYEBHwABgQEfAAGBAb8GAAECHwABgQEfAAGIAR8AAYEBnwcAAQIfAAEdHwABgQG0nwEA")
          }]),
          ruinStoneSmall6: hu("ruinStoneSmall6", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, bu.d)("JQAB3gEfAAHeAb4HAAECAQABAhwAAWQBswcBhwEBHRwAAZYBAYEBAYgBAYEBHQABgQEB4gcBiAEdAAGBAQHiBwGBAR4AAYgBAYEBHgABgQG9BgABAgMAAQIZAAHdAQGHAQGBAQEAAhQCswceAAGBAQEdHgABgQEBhgEeAAKBARwAARIBGAGBAQGIAR4AAYEBvQYAAgIBAAECGQABgQEBAAEUAhoBFAGBARgAAd4BBgABhwEYAAHeAQYAAYEBHwABgQEcAAEYAhIBgQEeAAHOAQGHAbcGAAICAgABAgEAAQIBAAICFgABswcBhwECAAEaAxQBGgEdFwABhwEB2wEEAAGgCAEAAYcBFwABgQEB2wEGAAGIAR0AAb0HAQABgQEXAAGBAQIAARIBGAESARgBEgGHAdcGAAECAgADAgEAAgIWAAGzBwGIAQEAARoDFAHOAQEUAbMHHAAB2QEBCwHPAQGIARwAAdkBAQsBAAGGARcAAYEBBQABCwEAAYEBFwABiAECAAISAd4EAhIBhwEfAAGHAbYGAAoCFgABswcBhwEDFAEaAxQBswcBZBYAAYcBBQABoAgBAAGBARcAAYcBBwABgQEXAAGBAQcAAYEBFwABgQECAAEYAxIBGAGHAdgGAAcCGQABhwEBGgIUARoBFAGBAR8AAYEBHwABgQEfAAGBARkAAYcBAQABGAESAhgBgQEZAAGHAQIAAdEMAgABgQG6BgACAgEAAQIbAAGHAQGzBwEaARQBGgKzBx4AAYEBAYgBHgABgQEBhgEeAAKBARoAAYcBAhIBGAGBAQGIARoAAYcBAwABgQG9BgACAhwAAWQBswcBhwEBswcBAAFkHQABgQEeAAHiBwGIAR0AAYEBAeIHAYEBHQABgQEBiAEBgQH+BgAC3AEeAALcAR0AA9wBHQAD3AEdAAPcAdmuAQA=")
          }])
        };

        function gu(uu, Eu, ju) {
          const su = new Cu.d;
          for (const Zu of ju) {
            const uu = su.get(Zu.chunkX, Zu.chunkY, Zu.chunkZ);
            if (!(0, Uu.H)(uu)) throw new Error(`Duplicate chunk at ${Zu.chunkX}, ${Zu.chunkY}, ${Zu.chunkZ}`);
            su.set(Zu.chunkX, Zu.chunkY, Zu.chunkZ, Zu.rle)
          }
          return new fu.e(uu, {
            x: 0,
            y: 0,
            z: 0
          }, Eu, su)
        }
        const Mu = {
            dungeonDraugrLarge1: gu("dungeonDraugrLarge1", {
              x: 21,
              y: 14,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, bu.d)("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")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, bu.d)("IAAEHBwABxwZAAEdBxwbAAEdHgACHRwAAR0BAAIdHAAEHZwGAAIcHgAGHBoACBwYAAgcGAACfwEfAR0cAAJ/AYEBAR0cAAJ/AYEBAR0cAAJ/AR8dAAMf/QUABRwbAAccGQAIHBgAAxwBHQQcGAADfwEdHAADfwEdHAADfx0AA38dAAIcAR/9BQAGHBoABxwZAAgcGAADHAEdBBwYAAN/AR0cAAN/AR0cAAN/AR0cAAN/HQACHAEf/QUABhwaAAgcGAAIHBgABBwCHQIcGAADfwIAAx0YAAN/AQAEHRgAA38CwgIDHRgAA38FHRkAARwBHx0ABB0cAAHCAgMdHgACHR8AAR0fAAEd3AQABhwaAAgcGAAIHBgACBwYAAJ/AR8DfwEfAR0YAAJ/AYEBA38BgQEBHRgAAn8BgQEDfwGBAQEdGAACfwEfA38BHwEdGAAHHxkAAn8BHwEdHAACfwGBAQEdHAACfwGBAQEdHAABfwG9BwEfAR0cAAMfAR3cBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/GQAHfwEdGAAHfwEdGAACfwEfAxwBHxkAA38BHRwAA38BHRwAAn8BvQcBHRwAAX8CvQcBHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/GQAHfxkAB38BHRgAAX8BvRMFfwEdGAABfwHJEwEfAQACHAEfAR0YAAN/AR0cAAN/AR0cAAN/AR0cAAJ/Ab0HAR0cAAIcAR8BHdwEAAccGQAIHBgACBwYAAccAR0YAAd/GQAHfwEdGAAHfwHCAhgAB38BHRgAAn8BHAMAAR8BHRgAA38dAAN/AR0cAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAHHAEdGAAHfwEdGAAHfwHCAhgAB38BwgIYAAd/GQACfwEcAwABHwEdGAADfx0AA38dAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAIHBgABn8BzgEBHRgAB38BwgIYAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfx0AA38BHRwAA38BHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfwEdHAADfwEdHAADfwEdHgABHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/AR0YAAd/GQACfwEfAQACHAEfGQADfwEdHAADfwEdHAADfwEdHAADfx8AAR/dBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/AR0YAAd/AR0YAAF/Ab0TBX8BwgIYAAF/AckTAR8DHAEfGQADfwHCAhwAA38BHRwAA38dAAN/HwABH90EAAccGQAIHBgACBwYAAgcGAAHfxkAB38ZAAd/AR0YAAd/AcICGAACfwEfAxwBHxkAA38BwgIcAAN/AcICHAADfx0AA38eAAEcAR/dBAAGHBoACBwYAAgcGAAIHBgAAn8BHwN/AR8ZAAJ/AYEBA38BgQEZAAJ/AYEBA38BgQEBHRgAAn8BHwN/AR8BHRgABx8ZAAJ/AR8BHRwAAn8BgQEBHRwAAn8BgQEBHRwAAn8BHx0AAx/dBAAGHBoACBwYAAgcGAAIHBgAA38BAALCAgEdGQADfwEAAR0BwgICHRgAA38FHRgAA38CHRwAARwBHz0AAR0CAAEdHAAEHRwAAR0BwgICHRwABB3cBAAGHBoABxwZAAgcGAAIHBgAA38dAAN/AR0cAAN/AR0cAAN/AR0cAAIcAR/9BQAFHBsABxwZAAgcGAAIHBgAA38BHRwAA38BHRwAA38BwgIcAAN/AcICHAACHAEf/QUAAhweAAYcGgAIHBgACBwYAAJ/AR8BHRwAAn8BgQEBHRwAAX8BvQcBgQEBHRwAAr0HAR8BHRwAAx+dBgAEHBwABxwZAAEcAx0EHBgAAsICAh0cAAEdAcICAh0cAAEdAgABHbxeAA==")
            }]),
            dungeonDraugrMedium1: gu("dungeonDraugrMedium1", {
              x: 27,
              y: 14,
              z: 27
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, bu.d)("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")
            }]),
            dungeonDraugrSmall1: gu("dungeonDraugrSmall1", {
              x: 11,
              y: 7,
              z: 11
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, bu.d)("AgAGHBoAAsICBgABHRYAAh0CwgICAAIdAQABHRUABR0BAAMdFwADHQMAAh0BwgIBHRYAAR0FAAEdAsICAR0dAAMdtwYACRwXAAEfB38BHwEdFQABHQGBAQd/AYEBAR0VAAEdAYEBB38BgQEBHRUAAR0BgQEHfwGBAQEdFQABHQGBAQd/AYEBFgABHQUfAhwCHwEdtgYACRwBHRYACX8BHRUAAR0JfwEdFQABHQG9Bwh/AcICFQABHQG9Bwh/AR0VAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYAChwBHRYACX8BHRUAAcICCX8BHRUAAcICCX8BwgIVAAEdAb0HCH8BwgIVAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYABBwDHwMcAR0WAAl/AR0WAAl/FgABwgIJfxYAAR0JfwHCAhYACX8BHRYAAR8BHAYAAR8BHbUGAAQcAx8EHBYABH8B0QwEfxcACX8XAAl/FwAJfxcACX8XAAEfBwABHLYGAAQcAx8EHBUAAR0JfwEdFQABHQl/AR0WAAl/FwAJfxcACX8XAAEfBgACHLYGAAEdCRwBHRUAAR0BzAEIfwHCAhUAAR0JfwEdFQABHQl/FwAJfwEdFgAJfwEdFgABHAQAAxwBHwEdtgYACRwBHRUAAcICCX8BwgIVAAEdCX8WAAEdCX8XAAh/Ab0HAR0WAAl/AR0WAAEfAwAEHAEfAR22BgAJHBYAAR0BHwd/AR8WAAEdAYEBB38BgQEXAAGBAQd/AYEBFwABgQEHfwGBARYAAR0BgQEHfwGBAQEdFQABHQYfARwCHwEdtwYAAx0DHBgABR0FAAEdFQADHQLCAgIAAh0ZAALCAgIABB0cAAIdAcICAR0WAAEdBQABHQLCAhcAAh0FAAMdtq4BAA==")
            }]),
            dungeonMagmaLarge1: gu("dungeonMagmaLarge1", {
              x: 40,
              y: 23,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, bu.d)("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AdMLAtcDAdMLBdcDAhwFABl/BAAdfwMAHX8CAB9/AQAffwIAHn8CAB5/AgAefwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwYAGn8KABR/xQIAChwG1wMDHATXAwYcAQAJHAHXAwEAAdEDBtMLA9cDBNMLAdcDAQAC1wMLHAHXAxTTCwHXAwocAdcDFNMLAdcDChwB1wMU0wsB1wMLHAbXAwPTCwLXAwHTCwjXAwIcAwAJfwHRDA5/AdEMAn8EABx/BAAcfwQAHn8CAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BgAafwoAB38FAAh/xQIADBwC1wMPHAEAChwB1wMCAAHXAwLTCwzXAw0cAdcDEtMLAdcDCxwB1wMT0wsB1wMLHAHXAxTTCwHXAwscFNcDAhwDABt/BAAcfwQAHH8EAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BQAbfwYAGn8KAAV/CQAGf8UCAB0cAQALHAbXAwUcBdcDDxwB1wMG0wsF1wMF0wsB1wMNHALXAwfTCwPXAwfTCwHXAwwcAdcDEtMLAdcDDRwS1wMDHAMAGn8GABp/BgAafwUAHn8CAB5/AwAdfwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwQAHH8FABt/BgALfwMADH8LAAN/CwAFf8UCAB0cAQANHALXAxwcAtcDAtMLAtcDBRwF1wMQHAHXAwTTCwLXAwMcAtcDA9MLAtcDDhwC1wME0wsG1wME0wsC1wMQHATXAwYcBNcDBRwEAA9/BAAEfwkAEH8CAAV/CAAZfwcAHX8DAB1/AwAdfwMAHX8EABx/BAAcfwQAHH8EABx/BAAcfwUADn8CAAt/BQANfwQACn8GAAp/CAAIfxoAA3/GAgAdHAEALRwC1wMdHATXAwccA9cDEhwF1wMFHATXAyUcBQANfxIADn8SAA9/EQAcfwQAHH8EABx/BAAcfwQAHH8EAA9/AgALfwQAD38DAAp/BQANfwQACn8FAA1/BAAKfwUADH8GAAl/BQAMfwYACX8HAAl/CQAHf+ACAA==")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, bu.d)("QAACHB4ABRwbAAccGQAHHPkGAAMcHQAGHBoABhwaAAccGQAIHPgGAAUcGwAGHBoACBwYAAgcGAAIHNgGAAEcHwAGHBoABhwaAAgcGAAIHBgACBzYBgADHB0ABhwaAAccGQAIHBgACBwYAAgc2AYABBwcAAYcGgAIHBgACBwYAAgcGAAIHDgAAX8fAAJ/HgACfx4AAn8eAAJ/HgACfx4AAX8fAAF/HwABf58EAAQcHAAHHBkACBwYAAgcGAAIHBgACBwYAAHNAQF/HgADfx0AA38dAAN/HQADfx0AA38dAAN/HQADfx0AA38dAAJ/HgACfx4AAn8eAAF/vwMABRwbAAccGQAIHBgACBwYAAgcGAAIHBgAA38dAAN/HQADfx0AA38dAAR/HAAEfxwABH8cAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABRwbAAccGQAIHBgACBwYAAgcGAAIHBgAA38dAAR/HAAEfxwABH8cAAR/HAAEfxwABH8cAAR/HAAEfxwABH8cAAN/HQADfx0AA38dAAN/HQABf/8CAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAR/HAAEfxwABX8bAAV/GwAFfxsABX8bAAV/GwAEfxwABH8cAAR/HAAEfxwABH8cAAN/HQADfx0AAn/+AgAFHBsABxwZAAgcGAAIHBgACBwYAAgcGAAFfxsABX8bAAV/GwAGfxoABn8aAAV/GwAFfxsABX8bAAV/GwAEfxwABH8cAAR/HAAEfxwAA38dAAJ//gIABRwbAAccGQAIHBgACBwYAAgcGAAIHBgABX8bAAZ/GgAGfxoABn8aAAZ/GgAGfxoABn8aAAV/GwAFfxsABX8bAAR/HAAEfxwABH8cAAN/HQACf/4CAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAR/HAAGfxoABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABX8bAAV/GwAFfxsABH8cAAR/HAAEfxwAAn/+AgAFHBsABxwZAAgcGAAIHBgACBwYAAgcGAACfx4AB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoABn8aAAV/GwAFfxsABX8bAAR/HAAEfxwABH8cAAJ//gIABRwbAAccGQAIHBgACBwYAAgcGAAIHBgAAX8fAAd/GQAHfxkAB38ZAAd/GQAHfxkABn8aAAZ/GgAGfxoABX8bAAV/GwAEfxwABH8cAAN/HQACf/4CAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAF/HwAFfxsAB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAR/HAADfx0AAX//AgAFHBsABxwZAAgcGAAIHBgACBwYAAgcOAADfx0AB38ZAAd/GQAHfxkAB38ZAAd/GQAGfxoABn8aAAV/GwAEfxwABH8cAAR/HAACf54DAAUcGwAHHBkACBwYAAgcGAAIHBgACBw4AAJ/HgAHfxkAB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoABX8bAAR/HAABf98DAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAQcHAAEHBwABBwDfxkAAxwEfxkAAxwEfxkAAhwFfxsABX8bAAR/HQADf7oEAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAQcHAAEHBwABBwBfxsABBwDfxkABBwDfxkABBwDfxkAAxwBAAN/HgABf9oEAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAQcHAAEHBwABBwcAAQcA38ZAAQcA38ZAAQcA38ZAAMcAQADfx4AAX/aBAAFHBsABxwZAAgcGAAIHBgACBwYAAgcGAAEHBwABBwcAAQcHAAEHAN/GQABfwMcA38ZAAF/AhwEfxkAAX8CAAR/HAADfx4AAn8fAAF/mgQABRwbAAccGQAIHBgACBwYAAgcGAAIHHgAB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoAAX8CAAN/GgABf/8DAAUcGwAHHBkACBwYAAgcGAAIHBgACBx4AAd/GQAHfxkAB38ZAAd/GQAGfxoABn8aAAZ/GgAFfxsAAn8eAAF/vwMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAd/GQAHfxkAB38ZAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAJ/ngMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABX8bAAV/GwAFfxsABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABX8bAAV/GwAGfxoABn8aAAV/GwAFfxsABX8bAAV/GwAEfxwABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABH8cAAV/GwAFfxsABX8bAAV/GwAFfxsABH8cAAR/HAAEfxwAA38dAAN/HQACf/4CAAUcGwAHHBkACBwYAAgcGAAIHBgACBx4AAR/HAAEfxwABH8cAAR/HAAEfxwABH8cAAR/HAADfx0AA38dAAN/HQADfx0AAX//AgAFHBsABxwZAAgcGAAIHBgACBwYAAgceAADfx0AA38dAAN/HQADfx0AA38dAAN/HQADfx0AA38dAAN/HQADfx0AAn8eAAF//wIA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, bu.d)("AwAdHAEAnwEcBQAJfwQABBwPAA1/BBwPAA1/BBwPAA1/BBwKfwQAD38DHAp/BAAPfwMcCn8EAA9/AhwBAAp/BQANfwQACn8FAA1/BAAKfwUADX8EAAp/BQANfwQACn8GAAt/BgAJfwYAC38GAAl/BgAKfwcACX8JAAZ/CgAHf+QCABwcAQCfARwGAAF/Ac8BBX8FAAQcDwANfwQcDwANfwQcDwANfwQcCn8FAA1/BBwKfwUADX8EHAp/BQANfwEAAhwBAAp/BQANfwQACn8FAA1/BAAKfwYADH8EAAp/BgALfwUACn8GAAt/BgAJfwcACn8GAAl/CAAIfwcACX8LAAN/DAAEf+YCABwcAgCeARwIAAN/BwAEHBEAC38EHBAADH8EHBAADH8EHAp/BgAMfwQcCn8GAAx/AxwLfwYADH8BAAIcC38HAAt/AwALfwcAC38EAAp/BwALfwQACn8IAAl/BQAKfwgACX8FAAp/CQAHfwcACX8KAAZ/CAAIf4UDABscAgAeHAEAfxwSAAQcEwAHfwIABBwTAAl/BBwSAAp/AxwLfwgACn8DHAt/CAALfwIcC38IAAt/AgALfwgAC38CAAt/CQAKfwIAC38JAAl/AwALfwkACX8DAAt/CgAHfwUACn8LAAN/CQAIfxsAA3+KAwAZHAIAHhwCAH4cLAADfxwACX8XABN/DAAUfwwAFH8MABV/CwAVfwwAFH8MABN/DgAHfwIACX8PAAN/BgAHfxsABH/HAwAdHAIAfhwuAAF/HwAFfxoADn8SAA9/EQAPfxEAD38SAA1/EwANfxQAC38XAAJ/AgADf40EABscAgAeHAIAHhwBAD8cTwAEfxwACX8XAAl/FwAIfxkAB38bAAR/kAUAGhwDAB0cAQAfHAEAHxzAxgEA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, bu.d)("BRwbAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AA38dAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABBwcAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/ngMABBwcAAccGQAHHBkACBwYAAgcGAAIHHgAAX8fAAF/HwACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgABfx8AAX+/AwADHB0ABhwaAAccGQAIHBgACBwYAAgceAABfx8AAX8fAAF/HwABfx8AAX8fAAF/HwABf58EAAEcHwAGHBoABxwZAAgcGAAIHBgACBz4BgAFHBsABxwZAAccGQAIHBgACBz4BgACHB4ABBwcAAYcGgAIHBgACByYBwADHB0ABhwaAAYcGgAHHNnGAQA=")
            }])
          },
          eu = {
            treeMapleLarge1: {
              schematic: Nu.treeMapleLarge1,
              groundingPoints: "centre",
              groundingRadius: 1,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treeMapleLarge2: {
              schematic: Nu.treeMapleLarge2,
              groundingPoints: "centre",
              groundingRadius: 2,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treeSpectralLarge1: {
              schematic: Nu.treeSpectralLarge1,
              groundingPoints: [{
                localX: 23,
                localZ: 22
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treeSpectralLarge2: {
              schematic: Nu.treeSpectralLarge2,
              groundingPoints: [{
                localX: 23,
                localZ: 12
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treePineLarge1: {
              schematic: Nu.treePineLarge1,
              groundingPoints: [{
                localX: 13,
                localZ: 14
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treePineLarge2: {
              schematic: Nu.treePineLarge2,
              groundingPoints: [{
                localX: 13,
                localZ: 12
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treeJungleLarge1: {
              schematic: Nu.treeJungleLarge1,
              groundingPoints: [{
                localX: 9,
                localZ: 9
              }, {
                localX: 8,
                localZ: 16
              }, {
                localX: 11,
                localZ: 21
              }, {
                localX: 16,
                localZ: 19
              }, {
                localX: 19,
                localZ: 21
              }, {
                localX: 22,
                localZ: 20
              }, {
                localX: 26,
                localZ: 11
              }, {
                localX: 21,
                localZ: 9
              }, {
                localX: 17,
                localZ: 9
              }, {
                localX: 18,
                localZ: 16
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 225,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treeJungleLarge2: {
              schematic: Nu.treeJungleLarge2,
              groundingPoints: [{
                localX: 8,
                localZ: 6
              }, {
                localX: 8,
                localZ: 13
              }, {
                localX: 7,
                localZ: 16
              }, {
                localX: 7,
                localZ: 20
              }, {
                localX: 13,
                localZ: 20
              }, {
                localX: 20,
                localZ: 20
              }, {
                localX: 19,
                localZ: 12
              }, {
                localX: 19,
                localZ: 10
              }, {
                localX: 18,
                localZ: 4
              }, {
                localX: 14,
                localZ: 6
              }, {
                localX: 13,
                localZ: 14
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 225,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treePalmLarge1: {
              schematic: Nu.treePalmLarge1,
              groundingPoints: "centre",
              groundingRadius: 1,
              clearingRadiusSquared: 64,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            treePalmLarge2: {
              schematic: Nu.treePalmLarge2,
              groundingPoints: "centre",
              groundingRadius: 1,
              clearingRadiusSquared: 64,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            rockSnowLarge1: {
              schematic: Yu.rockSnowLarge1,
              groundingPoints: [{
                localX: 3,
                localZ: 10
              }, {
                localX: 9,
                localZ: 4
              }, {
                localX: 14,
                localZ: 10
              }, {
                localX: 8,
                localZ: 16
              }, {
                localX: 4,
                localZ: 23
              }, {
                localX: 6,
                localZ: 29
              }, {
                localX: 11,
                localZ: 32
              }, {
                localX: 18,
                localZ: 32
              }, {
                localX: 31,
                localZ: 31
              }, {
                localX: 29,
                localZ: 24
              }, {
                localX: 31,
                localZ: 15
              }, {
                localX: 32,
                localZ: 4
              }, {
                localX: 26,
                localZ: 7
              }, {
                localX: 22,
                localZ: 6
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            rockSnowLarge2: {
              schematic: Yu.rockSnowLarge2,
              groundingPoints: [{
                localX: 2,
                localZ: 8
              }, {
                localX: 4,
                localZ: 18
              }, {
                localX: 3,
                localZ: 31
              }, {
                localX: 13,
                localZ: 26
              }, {
                localX: 17,
                localZ: 34
              }, {
                localX: 27,
                localZ: 33
              }, {
                localX: 29,
                localZ: 25
              }, {
                localX: 28,
                localZ: 13
              }, {
                localX: 32,
                localZ: 5
              }, {
                localX: 20,
                localZ: 6
              }, {
                localX: 9,
                localZ: 3
              }, {
                localX: 18,
                localZ: 17
              }, {
                localX: 10,
                localZ: 11
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            rockSnowLarge3: {
              schematic: Yu.rockSnowLarge3,
              groundingPoints: [{
                localX: 3,
                localZ: 4
              }, {
                localX: 3,
                localZ: 9
              }, {
                localX: 10,
                localZ: 6
              }, {
                localX: 6,
                localZ: 19
              }, {
                localX: 15,
                localZ: 29
              }, {
                localX: 13,
                localZ: 24
              }, {
                localX: 19,
                localZ: 23
              }, {
                localX: 27,
                localZ: 27
              }, {
                localX: 32,
                localZ: 23
              }, {
                localX: 35,
                localZ: 17
              }, {
                localX: 29,
                localZ: 6
              }, {
                localX: 25,
                localZ: 3
              }, {
                localX: 18,
                localZ: 12
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            rockJungleLarge1: {
              schematic: Yu.rockJungleLarge1,
              groundingPoints: [{
                localX: 7,
                localZ: 5
              }, {
                localX: 7,
                localZ: 21
              }, {
                localX: 20,
                localZ: 5
              }, {
                localX: 20,
                localZ: 21
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 289,
              undergroundYInterval: null,
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 10,
                localY: 4,
                localZ: 22,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 4,
                localZ: 13,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 16,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 22,
                localY: 4,
                localZ: 9,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge2: {
              schematic: Yu.rockJungleLarge2,
              groundingPoints: [{
                localX: 13,
                localZ: 6
              }, {
                localX: 5,
                localZ: 14
              }, {
                localX: 13,
                localZ: 22
              }, {
                localX: 21,
                localZ: 14
              }, {
                localX: 8,
                localZ: 10
              }, {
                localX: 9,
                localZ: 19
              }, {
                localX: 17,
                localZ: 19
              }, {
                localX: 17,
                localZ: 9
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 12,
                localY: 2,
                localZ: 11,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge3: {
              schematic: Yu.rockJungleLarge3,
              groundingPoints: [{
                localX: 6,
                localZ: 14
              }, {
                localX: 8,
                localZ: 18
              }, {
                localX: 14,
                localZ: 20
              }, {
                localX: 17,
                localZ: 18
              }, {
                localX: 20,
                localZ: 15
              }, {
                localX: 17,
                localZ: 10
              }, {
                localX: 12,
                localZ: 7
              }, {
                localX: 8,
                localZ: 8
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 256,
              undergroundYInterval: null,
              yOffset: -1,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            rockJungleLarge4: {
              schematic: Yu.rockJungleLarge4,
              groundingPoints: [{
                localX: 8,
                localZ: 7
              }, {
                localX: 8,
                localZ: 18
              }, {
                localX: 20,
                localZ: 19
              }, {
                localX: 17,
                localZ: 11
              }, {
                localX: 7,
                localZ: 12
              }, {
                localX: 12,
                localZ: 20
              }, {
                localX: 21,
                localZ: 18
              }, {
                localX: 12,
                localZ: 6
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 289,
              undergroundYInterval: null,
              yOffset: -1,
              transformationsEnabled: !0,
              chestLocations: [],
              spawnerBlockLocations: []
            },
            rockJungleLarge5: {
              schematic: Yu.rockJungleLarge5,
              groundingPoints: [{
                localX: 11,
                localZ: 7
              }, {
                localX: 3,
                localZ: 21
              }, {
                localX: 22,
                localZ: 22
              }, {
                localX: 23,
                localZ: 7
              }, {
                localX: 7,
                localZ: 21
              }, {
                localX: 13,
                localZ: 25
              }, {
                localX: 24,
                localZ: 16
              }, {
                localX: 16,
                localZ: 6
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 289,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 15,
                localY: 11,
                localZ: 20,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge6: {
              schematic: Yu.rockJungleLarge6,
              groundingPoints: [{
                localX: 11,
                localZ: 9
              }, {
                localX: 8,
                localZ: 21
              }, {
                localX: 18,
                localZ: 21
              }, {
                localX: 18,
                localZ: 7
              }, {
                localX: 15,
                localZ: 5
              }, {
                localX: 7,
                localZ: 17
              }, {
                localX: 11,
                localZ: 24
              }, {
                localX: 22,
                localZ: 13
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 324,
              undergroundYInterval: null,
              yOffset: -3,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 8,
                localY: 8,
                localZ: 14,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            ruinSnowSmall1: {
              schematic: Du.ruinSnowSmall1,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 5,
                localY: 0,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 6,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 2,
                localZ: 6,
                mobTypeDistribution: new Xu.d([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall2: {
              schematic: Du.ruinSnowSmall2,
              groundingPoints: [{
                localX: 3,
                localZ: 3
              }, {
                localX: 11,
                localZ: 3
              }, {
                localX: 11,
                localZ: 11
              }, {
                localX: 3,
                localZ: 11
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 5,
                localY: 6,
                localZ: 8,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 9,
                localZ: 8,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 2,
                localY: 4,
                localZ: 8,
                mobTypeDistribution: new Xu.d([{
                  value: "Frost Golem",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall3: {
              schematic: Du.ruinSnowSmall3,
              groundingPoints: [{
                localX: 3,
                localZ: 3
              }, {
                localX: 9,
                localZ: 3
              }, {
                localX: 9,
                localZ: 8
              }, {
                localX: 3,
                localZ: 8
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 4,
                localY: 3,
                localZ: 3,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 10,
                localY: 7,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 2,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Frost Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall4: {
              schematic: Du.ruinSnowSmall4,
              groundingPoints: [{
                localX: 3,
                localZ: 3
              }, {
                localX: 7,
                localZ: 3
              }, {
                localX: 7,
                localZ: 8
              }, {
                localX: 3,
                localZ: 8
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 5,
                localY: 2,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new Xu.d([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium1: {
              schematic: Du.ruinSnowMedium1,
              groundingPoints: [{
                localX: 2,
                localZ: 2
              }, {
                localX: 2,
                localZ: 8
              }, {
                localX: 2,
                localZ: 14
              }, {
                localX: 2,
                localZ: 20
              }, {
                localX: 2,
                localZ: 26
              }, {
                localX: 10,
                localZ: 2
              }, {
                localX: 10,
                localZ: 8
              }, {
                localX: 10,
                localZ: 14
              }, {
                localX: 10,
                localZ: 20
              }, {
                localX: 10,
                localZ: 26
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 3,
                localY: 4,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 4,
                localZ: 21,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 6,
                localZ: 8,
                mobTypeDistribution: new Xu.d([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium2: {
              schematic: Du.ruinSnowMedium2,
              groundingPoints: [{
                localX: 5,
                localZ: 5
              }, {
                localX: 5,
                localZ: 11
              }, {
                localX: 21,
                localZ: 4
              }, {
                localX: 21,
                localZ: 12
              }, {
                localX: 28,
                localZ: 11
              }, {
                localX: 28,
                localZ: 4
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 4,
                localY: 6,
                localZ: 12,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 6,
                localZ: 3,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 6,
                localZ: 13,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 15,
                localY: 2,
                localZ: 8,
                mobTypeDistribution: new Xu.d([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge1: {
              schematic: Du.ruinSnowLarge1,
              groundingPoints: [{
                localX: 13,
                localZ: 7
              }, {
                localX: 7,
                localZ: 19
              }, {
                localX: 9,
                localZ: 29
              }, {
                localX: 16,
                localZ: 33
              }, {
                localX: 26,
                localZ: 28
              }, {
                localX: 31,
                localZ: 19
              }, {
                localX: 27,
                localZ: 9
              }, {
                localX: 17,
                localZ: 5
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 21,
                localY: 19,
                localZ: 14,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 21,
                localY: 20,
                localZ: 27,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 21,
                localY: 20,
                localZ: 14,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge2: {
              schematic: Du.ruinSnowLarge2,
              groundingPoints: [{
                localX: 3,
                localZ: 4
              }, {
                localX: 13,
                localZ: 28
              }, {
                localX: 24,
                localZ: 30
              }, {
                localX: 30,
                localZ: 21
              }, {
                localX: 33,
                localZ: 9
              }, {
                localX: 26,
                localZ: 4
              }, {
                localX: 13,
                localZ: 3
              }, {
                localX: 6,
                localZ: 15
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 18,
                localY: 25,
                localZ: 19,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 27,
                localZ: 2,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 16,
                localY: 25,
                localZ: 9,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall1: {
              schematic: Du.ruinStoneSmall1,
              groundingPoints: "centre",
              groundingRadius: 2,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 9,
                localY: 1,
                localZ: 6,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 0,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 6,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall2: {
              schematic: Du.ruinStoneSmall2,
              groundingPoints: [{
                localX: 2,
                localZ: 3
              }, {
                localX: 2,
                localZ: 9
              }, {
                localX: 5,
                localZ: 5
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 2,
                localZ: 1,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 1,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 6,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall3: {
              schematic: Du.ruinStoneSmall3,
              groundingPoints: [{
                localX: 4,
                localZ: 4
              }, {
                localX: 7,
                localZ: 9
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 1,
                localZ: 6,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 0,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 1,
                localZ: 4,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall4: {
              schematic: Du.ruinStoneSmall4,
              groundingPoints: "centre",
              groundingRadius: 2,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 5,
                localY: 2,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 0,
                localZ: 1,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 1,
                localY: 2,
                localZ: 2,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall5: {
              schematic: Du.ruinStoneSmall5,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 2,
                localY: 2,
                localZ: 9,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 7,
                localZ: 7,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 6,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 7,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall6: {
              schematic: Du.ruinStoneSmall6,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 3,
                localY: 6,
                localZ: 7,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 8,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 7,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium1: {
              schematic: Du.ruinStoneMedium1,
              groundingPoints: [{
                localX: 5,
                localZ: 4
              }, {
                localX: 5,
                localZ: 12
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 7,
                localY: 10,
                localZ: 13,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 2,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 9,
                localZ: 13,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium2: {
              schematic: Du.ruinStoneMedium2,
              groundingPoints: [{
                localX: 2,
                localZ: 9
              }, {
                localX: 9,
                localZ: 2
              }, {
                localX: 9,
                localZ: 16
              }, {
                localX: 16,
                localZ: 9
              }],
              groundingRadius: 1,
              clearingRadiusSquared: 225,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 12,
                localY: 9,
                localZ: 9,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 16,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 0,
                localZ: 9,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 7,
                localZ: 10,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium3: {
              schematic: Du.ruinStoneMedium3,
              groundingPoints: [{
                localX: 4,
                localZ: 5
              }, {
                localX: 8,
                localZ: 5
              }, {
                localX: 4,
                localZ: 25
              }, {
                localX: 12,
                localZ: 25
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 289,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 13,
                localY: 10,
                localZ: 25,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 6,
                localZ: 25,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium4: {
              schematic: Du.ruinStoneMedium4,
              groundingPoints: [{
                localX: 3,
                localZ: 2
              }, {
                localX: 3,
                localZ: 19
              }, {
                localX: 15,
                localZ: 10
              }, {
                localX: 15,
                localZ: 19
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 289,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 3,
                localY: 6,
                localZ: 2,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }])
              }, {
                localX: 3,
                localY: 1,
                localZ: 10,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 6,
                localZ: 19,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium5: {
              schematic: Du.ruinStoneMedium5,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 9,
                localY: 13,
                localZ: 10,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium6: {
              schematic: Du.ruinStoneMedium6,
              groundingPoints: [{
                localX: 4,
                localZ: 4
              }, {
                localX: 4,
                localZ: 20
              }, {
                localX: 16,
                localZ: 4
              }, {
                localX: 16,
                localZ: 20
              }, {
                localX: 13,
                localZ: 12
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 324,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 4,
                localY: 5,
                localZ: 3,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 3,
                localZ: 20,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 12,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 9,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 16,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium7: {
              schematic: Du.ruinStoneMedium7,
              groundingPoints: [{
                localX: 8,
                localZ: 5
              }, {
                localX: 5,
                localZ: 4
              }, {
                localX: 4,
                localZ: 14
              }, {
                localX: 12,
                localZ: 12
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 5,
                localY: 7,
                localZ: 8,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 18,
                localZ: 9,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium8: {
              schematic: Du.ruinStoneMedium8,
              groundingPoints: [{
                localX: 2,
                localZ: 3
              }, {
                localX: 12,
                localZ: 3
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 100,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 7,
                localY: 3,
                localZ: 3,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 6,
                localY: 14,
                localZ: 4,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 2,
                localZ: 2,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 1
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium9: {
              schematic: Du.ruinStoneMedium9,
              groundingPoints: [{
                localX: 3,
                localZ: 3
              }, {
                localX: 3,
                localZ: 8
              }, {
                localX: 8,
                localZ: 8
              }],
              groundingRadius: 3,
              clearingRadiusSquared: 144,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 7,
                localZ: 2,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 2,
                localZ: 11,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 1,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 2,
                localZ: 3,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 2,
                localZ: 9,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium10: {
              schematic: Du.ruinStoneMedium10,
              groundingPoints: [{
                localX: 5,
                localZ: 4
              }, {
                localX: 5,
                localZ: 13
              }, {
                localX: 5,
                localZ: 22
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 5,
                localY: 2,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 11,
                localZ: 13,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 23,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 19,
                localZ: 23,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 1
                }, {
                  value: Uu.h.EPIC,
                  weight: 2
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 15,
                localZ: 23,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 20,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 3,
                localZ: 2,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium11: {
              schematic: Du.ruinStoneMedium11,
              groundingPoints: [{
                localX: 3,
                localZ: 7
              }, {
                localX: 3,
                localZ: 14
              }, {
                localX: 3,
                localZ: 21
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 225,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 1,
                localY: 13,
                localZ: 23,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 11,
                localZ: 14,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 14,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 16,
                localZ: 15,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 1,
                localZ: 14,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge1: {
              schematic: Du.ruinStoneLarge1,
              groundingPoints: [{
                localX: 6,
                localZ: 6
              }, {
                localX: 6,
                localZ: 19
              }, {
                localX: 19,
                localZ: 6
              }, {
                localX: 19,
                localZ: 19
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 225,
              undergroundYInterval: null,
              yOffset: 0,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 12,
                localY: 2,
                localZ: 12,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 13,
                localZ: 11,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 22,
                localZ: 19,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 1
                }, {
                  value: Uu.h.EPIC,
                  weight: 2
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 18,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 1
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 22,
                localZ: 17,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 14,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 16,
                localZ: 14,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge2: {
              schematic: Du.ruinStoneLarge2,
              groundingPoints: [{
                localX: 6,
                localZ: 7
              }, {
                localX: 4,
                localZ: 26
              }, {
                localX: 27,
                localZ: 31
              }, {
                localX: 26,
                localZ: 13
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 1,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 20,
                localY: 7,
                localZ: 11,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 13,
                localZ: 21,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 22,
                localZ: 22,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 23,
                localZ: 30,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 20,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 1
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 11,
                localZ: 26,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 1
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 25,
                localZ: 26,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 16,
                localZ: 24,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 2,
                localZ: 26,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 7,
                localZ: 8,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge3: {
              schematic: Du.ruinStoneLarge3,
              groundingPoints: [{
                localX: 18,
                localZ: 8
              }, {
                localX: 18,
                localZ: 20
              }, {
                localX: 18,
                localZ: 31
              }, {
                localX: 6,
                localZ: 20
              }, {
                localX: 30,
                localZ: 20
              }],
              groundingRadius: 4,
              clearingRadiusSquared: 361,
              undergroundYInterval: null,
              yOffset: 1,
              transformationsEnabled: !1,
              chestLocations: [{
                localX: 18,
                localY: 2,
                localZ: 14,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 24,
                localZ: 31,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 1
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 13,
                localZ: 5,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 15,
                localZ: 20,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 1,
                localZ: 22,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 32,
                localY: 2,
                localZ: 23,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 17,
                localY: 2,
                localZ: 13,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 30,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 15,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 25,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 24,
                localZ: 31,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrSmall1: {
              schematic: Mu.dungeonDraugrSmall1,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                Us: -15,
                ss: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 7,
                localY: 1,
                localZ: 1,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.COMMON,
                  weight: 1
                }, {
                  value: Uu.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 2
                }, {
                  value: "Draugr Skeleton",
                  weight: 2
                }, {
                  value: "Cave Golem",
                  weight: 1
                }, {
                  value: "Draugr Huntress",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrMedium1: {
              schematic: Mu.dungeonDraugrMedium1,
              groundingPoints: [{
                localX: 2,
                localZ: 2
              }, {
                localX: 2,
                localZ: 24
              }, {
                localX: 24,
                localZ: 2
              }, {
                localX: 24,
                localZ: 24
              }, {
                localX: 13,
                localZ: 13
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                Us: -40,
                ss: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 1,
                localZ: 8,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 1,
                localZ: 18,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 13,
                localY: 1,
                localZ: 13,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 2
                }, {
                  value: "Draugr Huntress",
                  weight: 2
                }, {
                  value: "Draugr Zombie",
                  weight: 1
                }, {
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrLarge1: {
              schematic: Mu.dungeonDraugrLarge1,
              groundingPoints: [{
                localX: 2,
                localZ: 2
              }, {
                localX: 2,
                localZ: 37
              }, {
                localX: 18,
                localZ: 2
              }, {
                localX: 18,
                localZ: 37
              }, {
                localX: 10,
                localZ: 20
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                Us: -60,
                ss: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 4,
                localZ: 30,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 1,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 4,
                localZ: 9,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 38,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 2
                }, {
                  value: Uu.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 10,
                localY: 4,
                localZ: 9,
                mobTypeDistribution: new Xu.d([{
                  value: "Draugr Zombie",
                  weight: 2
                }, {
                  value: "Draugr Skeleton",
                  weight: 2
                }, {
                  value: "Cave Golem",
                  weight: 1
                }, {
                  value: "Draugr Huntress",
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 30,
                mobTypeDistribution: new Xu.d([{
                  value: "Cave Golem",
                  weight: 2
                }, {
                  value: "Draugr Huntress",
                  weight: 2
                }, {
                  value: "Draugr Zombie",
                  weight: 1
                }, {
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonMagmaLarge1: {
              schematic: Mu.dungeonMagmaLarge1,
              groundingPoints: [{
                localX: 2,
                localZ: 2
              }, {
                localX: 2,
                localZ: 37
              }, {
                localX: 37,
                localZ: 2
              }, {
                localX: 37,
                localZ: 37
              }, {
                localX: 20,
                localZ: 20
              }],
              groundingRadius: 2,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                Us: -70,
                ss: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 6,
                localZ: 32,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 33,
                localY: 6,
                localZ: 7,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Uu.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 6,
                localZ: 20,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 2
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 6,
                localZ: 18,
                qualityDistribution: new Xu.d([{
                  value: Uu.h.EPIC,
                  weight: 2
                }, {
                  value: Uu.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 12,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new Xu.d([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new Xu.d([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new Xu.d([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new Xu.d([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }]
            }
          },
          Gu = [{
            yj: "ruinStoneSmall1",
            frequency: .15
          }, {
            yj: "ruinStoneSmall2",
            frequency: .15
          }, {
            yj: "ruinStoneSmall3",
            frequency: .15
          }, {
            yj: "ruinStoneSmall4",
            frequency: .15
          }, {
            yj: "ruinStoneMedium1",
            frequency: .15
          }, {
            yj: "ruinStoneSmall5",
            frequency: .15
          }, {
            yj: "ruinStoneSmall6",
            frequency: .15
          }, {
            yj: "ruinStoneMedium2",
            frequency: .15
          }, {
            yj: "ruinStoneMedium3",
            frequency: .15
          }, {
            yj: "ruinStoneMedium4",
            frequency: .15
          }, {
            yj: "ruinStoneMedium5",
            frequency: .15
          }, {
            yj: "ruinStoneMedium6",
            frequency: .15
          }, {
            yj: "ruinStoneMedium7",
            frequency: .15
          }, {
            yj: "ruinStoneMedium8",
            frequency: .15
          }, {
            yj: "ruinStoneMedium9",
            frequency: .15
          }, {
            yj: "ruinStoneMedium10",
            frequency: .15
          }, {
            yj: "ruinStoneMedium11",
            frequency: .15
          }, {
            yj: "ruinStoneLarge1",
            frequency: .15
          }, {
            yj: "ruinStoneLarge2",
            frequency: .15
          }, {
            yj: "ruinStoneLarge3",
            frequency: .15
          }],
          pu = [{
            yj: "treeMapleLarge1",
            frequency: 1
          }, {
            yj: "treeMapleLarge2",
            frequency: 1.5
          }],
          wu = {
            ruins: [{
              yj: "ruinStoneSmall1",
              frequency: .3
            }, {
              yj: "ruinStoneSmall2",
              frequency: .3
            }, {
              yj: "ruinStoneSmall3",
              frequency: .3
            }, {
              yj: "ruinStoneSmall4",
              frequency: .3
            }, {
              yj: "ruinStoneMedium1",
              frequency: .3
            }, {
              yj: "ruinStoneSmall5",
              frequency: .3
            }, {
              yj: "ruinStoneSmall6",
              frequency: .3
            }, {
              yj: "ruinStoneMedium2",
              frequency: .3
            }, {
              yj: "ruinStoneMedium3",
              frequency: .3
            }, {
              yj: "ruinStoneMedium4",
              frequency: .3
            }, {
              yj: "ruinStoneMedium5",
              frequency: .3
            }, {
              yj: "ruinStoneMedium6",
              frequency: .3
            }, {
              yj: "ruinStoneMedium7",
              frequency: .3
            }, {
              yj: "ruinStoneMedium8",
              frequency: .3
            }, {
              yj: "ruinStoneMedium9",
              frequency: .3
            }, {
              yj: "ruinStoneMedium10",
              frequency: .3
            }, {
              yj: "ruinStoneMedium11",
              frequency: .3
            }, {
              yj: "ruinStoneLarge1",
              frequency: .3
            }, {
              yj: "ruinStoneLarge2",
              frequency: .3
            }, {
              yj: "ruinStoneLarge3",
              frequency: .3
            }],
            trees: [{
              yj: "treeMapleLarge1",
              frequency: 2
            }, {
              yj: "treeMapleLarge2",
              frequency: 3
            }]
          },
          Ju = {
            ruins: wu.ruins,
            trees: [{
              yj: "treePineLarge1",
              frequency: 5
            }, {
              yj: "treePineLarge2",
              frequency: 5
            }]
          },
          du = [{
            yj: "dungeonDraugrSmall1",
            frequency: 45
          }, {
            yj: "dungeonDraugrMedium1",
            frequency: 10
          }, {
            yj: "dungeonDraugrLarge1",
            frequency: 10
          }, {
            yj: "dungeonMagmaLarge1",
            frequency: 25
          }],
          au = Gu.map((uu => {
            let {
              yj: Eu
            } = uu;
            return Eu
          }));

        function Pu(uu) {
          for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
          return ou(uu, ju.flat().map((uu => {
            let {
              yj: Eu,
              frequency: ju
            } = uu;
            return {
              prefab: Eu,
              frequency: ju
            }
          })))
        }

        function ou(uu, Eu) {
          let ju = 0;
          for (const su of Eu) ju += su.frequency;
          if (ju > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${ju}`);
          return {
            density: uu,
            frequencyParams: {
              noPrefabFrequency: 100 - ju,
              prefabFrequencies: Eu
            }
          }
        }
        class ku {
          constructor(uu, Eu, ju, su, Uu) {
            let {
              oreGenerator: Zu
            } = Uu, lu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.hO = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.hO = uu, this.blockMetadata = Eu, this.seed = su, this.topsoilBlockType = Eu["Grass Block"].id, this.lowsoilBlockType = Eu.Dirt.id, this.topwaterBlockType = Eu.Water.id, this.worldGenerator = ju, this.oreGenerator = Zu;
            const fu = Math.ceil(ju.prefabSize / 2),
              Cu = {
                [qu.p.SURFACE]: lu,
                [qu.p.UNDERGROUND]: Pu(qu.n.MEDIUM, du)
              };
            this.prefabDataPerType = Object.fromEntries(Object.values(qu.p).filter((uu => Number.isInteger(uu))).map((uu => Number(uu))).map((uu => {
              const Eu = Cu[uu];
              if (!Eu || 0 === Eu.frequencyParams.prefabFrequencies.length) return [uu, null];
              const {
                density: su,
                frequencyParams: Uu
              } = Eu;
              return [uu, {
                density: su,
                distribution: new Xu.d([...Uu.noPrefabFrequency > 0 ? [{
                  weight: Uu.noPrefabFrequency,
                  value: null
                }] : [], ...Uu.prefabFrequencies.map((uu => {
                  let {
                    prefab: Eu,
                    frequency: su
                  } = uu;
                  const Uu = "string" === typeof Eu ? {
                      ...eu[Eu],
                      name: Eu
                    } : Eu,
                    Zu = Uu.name;
                  if ("string" !== typeof Eu && Object.hasOwn(eu, Zu)) throw new Error(`Prefab definition "${Zu}" has a built-in prefab's name`);
                  const Xu = Math.floor(Math.sqrt(Uu.clearingRadiusSquared));
                  if (Xu > fu) throw new Error(`Prefab ${Zu} has clearing radius ${Xu} which is greater than the world generator's prefab radius ${fu}`);
                  if (Uu.groundingRadius > ju.maxPrefabGroundingRadius) throw new Error(`Prefab ${Zu} has grounding radius ${Uu.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${ju.maxPrefabGroundingRadius}`);
                  if ("centre" !== Uu.groundingPoints && 0 === Uu.groundingPoints.length) throw new Error(`Prefab ${Zu} has no grounding points`);
                  const lu = Uu.schematic.dimensions;
                  if (lu.x > ju.prefabSize || lu.y > ju.prefabSize || lu.z > ju.prefabSize) throw new Error(`Prefab ${Zu} has dimensions ${JSON.stringify(lu)} which are too large for the world generator's prefab size of ${ju.prefabSize}`);
                  return {
                    weight: su,
                    value: {
                      ...Uu,
                      dimensionX: lu.x,
                      dimensionY: lu.y,
                      dimensionZ: lu.z
                    }
                  }
                }))])
              }]
            })))
          }
          init() {
            this.floraGenerator = new lu(this.blockMetadata, this.hO, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
              cactusChance: this.cactusChance,
              maxCactusHeight: this.maxCactusHeight
            }, {
              flowerPatchDistApart: this.flowerPatchDistApart,
              defaultFlowerInsidePatchSpawnChance: this.defaultFlowerInsidePatchSpawnChance,
              defaultFlowerPatchRadius: this.defaultFlowerPatchRadius,
              dandelionChance: this.dandelionChance,
              poppyChance: this.poppyChance,
              forgetMeNotChance: this.forgetMeNotChance,
              redTulipChance: this.redTulipChance,
              pinkTulipChance: this.pinkTulipChance,
              whiteTulipChance: this.whiteTulipChance,
              orangeTulipChance: this.orangeTulipChance,
              daisyChance: this.daisyChance,
              bluebellChance: this.bluebellChance,
              alliumChance: this.alliumChance,
              shadowRoseChance: this.shadowRoseChance,
              fallenMapleLeavesChance: this.fallenMapleLeavesChance,
              fallenCherryLeavesChance: this.fallenCherryLeavesChance,
              melonChance: this.melonChance,
              watermelonChance: this.watermelonChance,
              pumpkinChance: this.pumpkinChance,
              riceChance: this.riceChance,
              cranberryChance: this.cranberryChance,
              redMushroomChance: this.redMushroomChance,
              brownMushroomChance: this.brownMushroomChance,
              fatRedMushroomChance: this.fatRedMushroomChance,
              fatBrownMushroomChance: this.fatBrownMushroomChance,
              cottonChance: this.cottonChance,
              chiliPepperChance: this.chiliPepperChance,
              lavaChiliPepperChance: this.lavaChiliPepperChance,
              fallenPineConeChance: this.fallenPineConeChance
            }), this.treeChances = [{
              treeType: Uu.w.Maple,
              chance: this.mapleTreeChance
            }, {
              treeType: Uu.w.Pine,
              chance: this.pineTreeChance
            }, {
              treeType: Uu.w.Plum,
              chance: this.plumTreeChance
            }, {
              treeType: Uu.w.Cedar,
              chance: this.cedarTreeChance
            }, {
              treeType: Uu.w.Aspen,
              chance: this.aspenTreeChance
            }, {
              treeType: Uu.w.Jungle,
              chance: this.jungleTreeChance
            }, {
              treeType: Uu.w.Palm,
              chance: this.palmTreeChance
            }, {
              treeType: Uu.w.AutumnMaple,
              chance: this.autumnMapleTreeChance
            }, {
              treeType: Uu.w.Pear,
              chance: this.pearTreeChance
            }, {
              treeType: Uu.w.Cherry,
              chance: this.cherryTreeChance
            }, {
              treeType: Uu.w.Spectral,
              chance: this.spectralTreeChance
            }, {
              treeType: Uu.w.Mango,
              chance: this.mangoTreeChance
            }, {
              treeType: Uu.w.AutumnAspen,
              chance: this.autumnAspenTreeChance
            }, {
              treeType: Uu.w.Dead,
              chance: this.deadTreeChance
            }, {
              treeType: Uu.w.FallenLog,
              chance: this.fallenLogChance
            }], this.totalTreeChance = 0;
            for (const {
                chance: uu
              }
              of this.treeChances) this.totalTreeChance += uu
          }
          xzId(uu, Eu) {
            return `${uu}|${Eu}`
          }
          getHeightmapVal(uu, Eu) {
            return this.offsettedHeight + this._heightmapSimplex.getOctaves(uu, Eu)
          }
          carveGround(uu, Eu, ju) {
            return null
          }
          getTopsoilBlock(uu, Eu, ju) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(uu, Eu, ju, su) {
            return this.lowsoilBlockType
          }
          getStrataBlock(uu, Eu, ju, su) {
            return 0
          }
          getDryBedBlock(uu, Eu, ju) {
            return this.getTopsoilBlock(uu, Eu, ju)
          }
          getTotalTreeChance() {
            return this.totalTreeChance
          }
          hasPrefabs(uu, Eu) {
            const ju = this.prefabDataPerType[uu];
            return null !== ju && ju.density === Eu
          }
          canPlaceSurfacePrefab(uu, Eu) {
            return !0
          }
          allowsPrefab(uu, Eu, ju, su, Uu) {
            return !0
          }
          getRandomPrefab(uu, Eu, ju) {
            const su = this.prefabDataPerType[Eu];
            return null === su || su.density !== ju ? null : su.distribution.sample(uu)
          }
        }
        class mu extends ku {
          constructor(uu, Eu, ju, Uu, Zu) {
            super(uu, Eu, ju, `${Uu}Desert`, Zu, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = Eu.Sand.id, this.lowsoilBlockType = Eu.Sand.id, this._heightmapSimplex = new su.l([{
              amplitude: 2,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${Uu}DesertBiomeHeightMap`)
          }
        }
        class vu extends mu {
          constructor() {
            super(...arguments), this.key = "manyCactusDesert", this.cactusChance = .05
          }
        }
        class Ku extends mu {
          constructor(uu, Eu, ju, Zu, Xu) {
            super(uu, Eu, ju, Zu, Xu, Pu(qu.n.VERY_HIGH, [{
              yj: "treePalmLarge1",
              frequency: 45
            }, {
              yj: "treePalmLarge2",
              frequency: 45
            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(Uu.b.OASIS), this._heightmapSimplex = new su.l([{
              amplitude: 1,
              frequency: 1 / 90
            }, {
              amplitude: .5,
              frequency: 1 / 35
            }], `${Zu}OasisBiomeHeightMap`)
          }
          canPlaceSurfacePrefab(uu, Eu) {
            return !(this.worldGenerator.getDistToLakeEdge(uu, Eu, this.maxPrefabDistFromLakeEdge) > this.maxPrefabDistFromLakeEdge)
          }
        }
        class Vu extends mu {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, `${su}RedDesert`, Uu), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = Eu["Red Sand"].id, this.lowsoilBlockType = Eu["Red Sand"].id
          }
        }
        class ru extends ku {
          constructor(uu, Eu, ju, Zu, Xu) {
            super(uu, Eu, ju, `${Zu}Plains`, Xu, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Pu(qu.n.MEDIUM, Gu, pu)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(Uu.b.PLAINS), this.topsoilBlockType = Eu["Grass Block"].id, this.lowsoilBlockType = Eu.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new su.l([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${Zu}PlainsBiomeHeightMap`)
          }
        }
        class Qu extends ru {
          constructor() {
            super(...arguments), this.key = "tallGrassPlains", this.grassChance = .06, this.tallGrassChance = .12
          }
        }
        class iu extends ru {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su, Uu, Pu(qu.n.MEDIUM, [{
              yj: "treeMapleLarge1",
              frequency: 6
            }, {
              yj: "treeMapleLarge2",
              frequency: 9
            }])), this.key = "meadowPlains", this.grassChance = .12, this.tallGrassChance = .24, this.cornChance = 25e-5, this.flowerPatchDistApart = 5
          }
        }
        class Wu extends ru {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su, Uu, Pu(qu.n.MEDIUM, pu)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = Eu.Snow.id, this.topwaterBlockType = Eu.Ice.id
          }
        }
        class Su extends ku {
          constructor(uu, Eu, ju, Uu, Zu) {
            super(uu, Eu, ju, `${Uu}Forest`, Zu, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Pu(qu.n.MEDIUM, wu.ruins, wu.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = Eu["Grass Block"].id, this.lowsoilBlockType = Eu.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new su.l([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${Uu}ForestBiomeHeightMap`)
          }
        }
        class Iu extends Su {
          constructor() {
            super(...arguments), this.key = "plumForest", this.pumpkinChance = 30, this.melonChance = 0, this.aspenTreeChance = 0, this.plumTreeChance = 1
          }
        }
        class Fu extends Su {
          constructor() {
            super(...arguments), this.key = "pearForest", this.melonChance = 30, this.aspenTreeChance = 0, this.pearTreeChance = 1
          }
        }
        class Bu extends Su {
          constructor(uu, Eu, ju, su, Zu) {
            super(uu, Eu, ju, su, Zu, Pu(qu.n.MEDIUM, wu.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(Uu.b.AUTUMN)
          }
        }
        class Lu extends Su {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su, Uu, Pu(qu.n.HIGH, [{
              yj: "treeJungleLarge1",
              frequency: 20
            }, {
              yj: "treeJungleLarge2",
              frequency: 20
            }, {
              yj: "rockJungleLarge1",
              frequency: 8
            }, {
              yj: "rockJungleLarge2",
              frequency: 8
            }, {
              yj: "rockJungleLarge3",
              frequency: 8
            }, {
              yj: "rockJungleLarge4",
              frequency: 8
            }, {
              yj: "rockJungleLarge5",
              frequency: 8
            }, {
              yj: "rockJungleLarge6",
              frequency: 8
            }])), this.key = "jungleForest", this.minDistanceFromOrigin = 200, this.grassChance = .01, this.tallGrassChance = .02, this.jungleTallGrassChance = .04, this.catnipChance = .02, this.flowerPatchDistApart = 12, this.melonChance = 0, this.fatRedMushroomChance = 12, this.fatBrownMushroomChance = 12, this.aspenTreeChance = 0, this.mapleTreeChance = 0, this.jungleTreeChance = 10, this.palmTreeChance = 2, this.mangoTreeChance = 2, this.topsoilBlockType = Eu["Jungle Grass Block"].id
          }
        }
        class tu extends Su {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su, Uu, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Pu(qu.n.MEDIUM, Ju.ruins, Ju.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = Eu["Pine Grass Block"].id
          }
        }
        class xu extends tu {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su, Uu), this.key = "snowyPineForest", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cranberryChance = 10, this.fallenPineConeChance = 5, this.pineGrassChance = .004, this.pineFernChance = .001, this.topsoilBlockType = Eu.Snow.id, this.topwaterBlockType = Eu.Ice.id
          }
        }
        class Tu extends Su {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, `${su}Blue`, Uu), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class Hu extends Su {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su, Uu, Pu(qu.n.MEDIUM, wu.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class Au extends ku {
          constructor(uu, Eu, ju, Uu, Zu) {
            super(uu, Eu, ju, `${Uu}RollingHills`, Zu), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = Eu["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new su.l([{
              amplitude: 20,
              frequency: .005
            }, {
              amplitude: 4,
              frequency: 1 / 70
            }], `${Uu}RollingHillsBiomeHeightMap`)
          }
        }
        class nu extends ku {
          constructor(uu, Eu, ju, Uu, Zu) {
            super(uu, Eu, ju, `${Uu}SnowyMountains`, Zu), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new su.l([{
              amplitude: 80,
              frequency: .005
            }], `${Uu}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new su.l([{
              amplitude: 20,
              frequency: 1 / 120
            }], `${Uu}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new su.l([{
              amplitude: 8,
              frequency: 1 / 120
            }], `${Uu}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, su.E)(this.ridgedNoiseOctave1) + (0, su.E)(this.ridgedNoiseOctave2)
          }
          getHeightmapVal(uu, Eu) {
            const ju = this.ridgedNoiseAmplitude - Math.abs(this.ridgedNoiseOctave1.getOctaves(uu, Eu)) - Math.abs(this.ridgedNoiseOctave2.getOctaves(uu, Eu));
            return this.offsettedHeight + ju + this.nonRidgedNoise.getOctaves(uu, Eu)
          }
          getTopsoilBlock(uu, Eu, ju) {
            return Eu > 80 ? this.blockMetadata.Snow.id : Eu > 60 ? this.blockMetadata.Stone.id : this.blockMetadata["Grass Block"].id
          }
          getLowsoilBlockType(uu, Eu, ju, su) {
            return Eu > 85 && Eu >= su - 2 ? this.blockMetadata.Snow.id : Eu > 57 ? this.blockMetadata.Stone.id : Eu > 53 ? this.blockMetadata["Rocky Dirt"].id : this.blockMetadata.Dirt.id
          }
        }
        class yu extends ru {
          constructor(uu, Eu, ju, Uu, Zu) {
            super(uu, Eu, ju, Uu, Zu, Pu(qu.n.HIGH, [{
              yj: "treeSpectralLarge1",
              frequency: 4
            }, {
              yj: "treeSpectralLarge2",
              frequency: 4
            }, {
              yj: "rockSnowLarge1",
              frequency: 18
            }, {
              yj: "rockSnowLarge2",
              frequency: 18
            }, {
              yj: "rockSnowLarge3",
              frequency: 18
            }, {
              yj: "ruinSnowSmall1",
              frequency: 4
            }, {
              yj: "ruinSnowSmall2",
              frequency: 4
            }, {
              yj: "ruinSnowSmall3",
              frequency: 4
            }, {
              yj: "ruinSnowSmall4",
              frequency: 4
            }, {
              yj: "ruinSnowMedium1",
              frequency: 4
            }, {
              yj: "ruinSnowMedium2",
              frequency: 4
            }, {
              yj: "ruinSnowLarge1",
              frequency: 3
            }, {
              yj: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = Eu["Packed Snow"].id, this.lowsoilBlockType = Eu.Snow.id, this.topwaterBlockType = Eu.Ice.id, this._heightmapSimplex = new su.l([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${Uu}FrozenBadlandsPlainsHeightMap`)
          }
        }
        class zu extends Su {
          constructor(uu, Eu, ju, Uu, Zu) {
            super(uu, Eu, ju, Uu, Zu, Pu(qu.n.HIGH, [{
              yj: "treeSpectralLarge1",
              frequency: 8
            }, {
              yj: "treeSpectralLarge2",
              frequency: 8
            }, {
              yj: "rockSnowLarge1",
              frequency: 4
            }, {
              yj: "rockSnowLarge2",
              frequency: 4
            }, {
              yj: "rockSnowLarge3",
              frequency: 4
            }, {
              yj: "ruinSnowSmall1",
              frequency: 6
            }, {
              yj: "ruinSnowSmall2",
              frequency: 6
            }, {
              yj: "ruinSnowSmall3",
              frequency: 6
            }, {
              yj: "ruinSnowSmall4",
              frequency: 6
            }, {
              yj: "ruinSnowMedium1",
              frequency: 4
            }, {
              yj: "ruinSnowMedium2",
              frequency: 4
            }, {
              yj: "ruinSnowLarge1",
              frequency: 3
            }, {
              yj: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = Eu["Packed Snow"].id, this.lowsoilBlockType = Eu.Snow.id, this.topwaterBlockType = Eu.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new su.l([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${Uu}FrozenBadlandsForestHeightMap`)
          }
        }
        class Ru extends ku {
          constructor(uu, Eu, ju, Zu, Xu, lu) {
            super(uu, Eu, ju, `${Zu}Custom_${lu.Ks}_${lu.Vs}`, Xu), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, Uu.C)(lu.Ks, Eu), this.lowsoilBlockType = (0, Uu.C)(lu.Vs, Eu), this._heightmapSimplex = new su.l([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${Zu}CustomBiomeHeightMap`)
          }
        }
      },
      40054: (uu, Eu, ju) => {
        ju.d(Eu, {
          d: () => Cu,
          g: () => Yu,
          k: () => Ou,
          m: () => cu
        });
        var su = ju(39989),
          Uu = ju(39974),
          Zu = ju(39963),
          Xu = ju(649),
          lu = ju(39995),
          qu = ju(4432),
          fu = ju(40048);
        class Cu {
          constructor(uu, Eu, ju, Uu, Xu, qu) {
            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.Ps = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.hO = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = ju, this.blockMetadata = Xu, this.hO = Uu, this.biomePointGen = new lu.b("biome", 150, !1, !0, ju, 3, Uu), this.biomeOffsetSimplex = new Zu.l([{
              amplitude: 1,
              frequency: .2
            }, {
              amplitude: 5,
              frequency: 1 / 70
            }], `${ju}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, Zu.E)(this.biomeOffsetSimplex)), this.baseBiome = new su.g(Uu, Xu, uu, ju, {
              oreGenerator: Eu
            }), this.baseBiome.init(), this.Ps = qu, this.anyStrata = qu.some((uu => {
              let {
                biome: Eu
              } = uu;
              return Eu.strataDepth > 0
            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.Ps.length);
            for (let su = 0; su < this.Ps.length; su++) {
              const uu = this.Ps[su],
                {
                  biome: Eu,
                  frequency: ju,
                  altBiome: Uu
                } = uu;
              if (this.biomeFrequencies[su] = ju, null !== Uu) {
                if (Uu.init(), Uu.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${su}`);
                let uu = !1;
                for (let Eu = 0; Eu < this.Ps.length; Eu++)
                  if (this.Ps[Eu].biome === Uu) {
                    uu = !0;
                    break
                  } if (!uu) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${su}`)
              } else if (Eu.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${su}`);
              this.biomesTotalFrequency += ju, Eu.init()
            }
          }
          generate(uu, Eu) {
            const [ju, su] = this.getBiomeOffsets(uu, Eu), Uu = this.biomePointGen.getKClosestPointsWithWeights(uu + ju, Eu + su, 60), Zu = [];
            for (let Xu = 0; Xu < Uu.length; Xu++) {
              const uu = Uu[Xu],
                {
                  biome: Eu,
                  biomeId: ju
                } = this.getBiomeForBiomePoint(uu.pt),
                su = {
                  weight: uu.weight,
                  biome: Eu,
                  biomeId: ju,
                  biomeModifiers: null
                };
              0 === Xu && (su.biomeModifiers = this.getBiomeModifiersForBiomePoint(uu.pt)), Zu.push(su)
            }
            return Zu
          }
          getBiome(uu, Eu) {
            const [ju, su] = this.getBiomeOffsets(uu, Eu), Uu = this.biomePointGen.getClosestPoint(uu + ju, Eu + su);
            return this.getBiomeForBiomePoint(Uu)
          }
          regionMayHaveScatteredLakes(uu, Eu) {
            const ju = this.biomePointGen.gridSize;
            if (uu >= this.lastScatteredLakeCellX * ju + this.biomeOffsetBound && uu < (this.lastScatteredLakeCellX + 1) * ju - this.biomeOffsetBound && Eu >= this.lastScatteredLakeCellZ * ju + this.biomeOffsetBound && Eu < (this.lastScatteredLakeCellZ + 1) * ju - this.biomeOffsetBound) return this.lastScatteredLakeCellResult;
            const [su, Uu] = this.getBiomeOffsets(uu, Eu), Zu = uu + su, Xu = Eu + Uu, lu = this.biomePointGen.getCellCoordFromGlobalCoord(Zu, Xu), qu = lu[0], fu = lu[1];
            if (qu === this.lastScatteredLakeCellX && fu === this.lastScatteredLakeCellZ) return this.lastScatteredLakeCellResult;
            let Cu = !1;
            for (const bu of this.biomePointGen.getPointsAroundPoint(Zu, Xu))
              if (this.getBiomeForBiomePoint(bu).biome.hasScatteredLakes) {
                Cu = !0;
                break
              } return this.lastScatteredLakeCellX = qu, this.lastScatteredLakeCellZ = fu, this.lastScatteredLakeCellResult = Cu, Cu
          }
          regionMayHaveVeryHighSurfacePrefabs(uu, Eu, ju, su) {
            const Zu = this.biomePointGen.gridSize,
              Xu = Math.floor((uu - this.biomeOffsetBound) / Zu),
              lu = Math.floor((Eu - this.biomeOffsetBound) / Zu),
              qu = Math.floor((ju + this.biomeOffsetBound) / Zu),
              fu = Math.floor((su + this.biomeOffsetBound) / Zu);
            for (let Cu = Xu; Cu <= qu; Cu++)
              for (let uu = lu; uu <= fu; uu++) {
                const Eu = this.biomePointGen.getPointsAroundPoint(Cu * Zu, uu * Zu);
                let ju = this.veryHighSurfacePrefabCells.get(Eu);
                if (void 0 === ju) {
                  ju = !1;
                  for (const uu of Eu)
                    if (this.getBiomeForBiomePoint(uu).biome.hasPrefabs(Uu.p.SURFACE, Uu.n.VERY_HIGH)) {
                      ju = !0;
                      break
                    } this.veryHighSurfacePrefabCells.set(Eu, ju)
                }
                if (ju) return !0
              }
            return !1
          }
          getBiomeOffsets(uu, Eu) {
            if (uu === this.lastBiomeOffsetAtX && Eu === this.lastBiomeOffsetAtZ) return this.lastBiomeOffsets;
            const ju = Math.floor(this.biomeOffsetSimplex.getOctaves(uu, Eu)),
              su = Math.floor(this.biomeOffsetSimplex.getOctaves(uu + 500, Eu + 860));
            return this.lastBiomeOffsetAtX = uu, this.lastBiomeOffsetAtZ = Eu, this.lastBiomeOffsets[0] = ju, this.lastBiomeOffsets[1] = su, this.lastBiomeOffsets
          }
          getBiomeForBiomePoint(uu) {
            if (this.mostRecentlyAccessedBiome && uu[0] === this.mostRecentlyAccessedPtForBiome[0] && uu[1] === this.mostRecentlyAccessedPtForBiome[1]) return this.mostRecentlyAccessedBiome;
            const Eu = (0, fu.f)(uu[0], uu[1]);
            let ju = this.biomesByPoint.get(Eu);
            return void 0 === ju && (ju = this.pickBiomeForBiomePoint(uu), this.biomesByPoint.size >= 1024 && this.biomesByPoint.clear(), this.biomesByPoint.set(Eu, ju)), this.mostRecentlyAccessedBiome = ju, this.mostRecentlyAccessedPtForBiome[0] = uu[0], this.mostRecentlyAccessedPtForBiome[1] = uu[1], ju
          }
          pickBiomeForBiomePoint(uu) {
            const Eu = Math.max(Math.abs(uu[0]), Math.abs(uu[1])),
              ju = new qu.f(`${uu[0]}|${uu[1]}|${this.seed}`);
            let su = Nu(this.biomeFrequencies, this.biomesTotalFrequency, ju),
              Uu = this.Ps[su].biome;
            if (Eu < Uu.minDistanceFromOrigin) {
              Uu = this.Ps[su].altBiome;
              for (let uu = 0; uu < this.Ps.length; uu++)
                if (this.Ps[uu].biome === Uu) {
                  su = uu;
                  break
                }
            }
            return {
              biome: Uu,
              biomeId: su
            }
          }
          getBiomeModifiersForBiomePoint(uu) {
            if (this.mostRecentlyAccessedModifier && uu[0] === this.mostRecentlyAccessedModifierPt[0] && uu[1] === this.mostRecentlyAccessedModifierPt[1]) return this.mostRecentlyAccessedModifier;
            const {
              biomeId: Eu
            } = this.getBiomeForBiomePoint(uu), {
              Qs: ju,
              stoneFrequencies: su,
              stonesTotalFrequency: Uu
            } = this.Ps[Eu], Zu = {
              stoneTypeId: ju[Nu(su, Uu, new qu.f(`${uu[0]}|${uu[1]}|${this.seed}Modifiers`))].stoneId
            };
            return this.mostRecentlyAccessedModifier = Zu, this.mostRecentlyAccessedModifierPt[0] = uu[0], this.mostRecentlyAccessedModifierPt[1] = uu[1], Zu
          }
          getBiomeInfoForChunkFill(uu, Eu, ju) {
            const su = {
              biomeIds: new Zu.h(this.hO, [uu, Eu]),
              stoneTypeIds: new Zu.h(this.hO, [uu, Eu])
            };
            for (let Uu = uu; Uu < uu + this.hO; Uu++)
              for (let uu = Eu; uu < Eu + this.hO; uu++) {
                const Eu = ju.getOrGenerate(Uu, uu)[0];
                su.biomeIds.set(Uu, uu, Eu.biomeId), su.stoneTypeIds.set(Uu, uu, Eu.biomeModifiers.stoneTypeId)
              }
            return su
          }
          getBiomeFromId(uu) {
            return this.Ps[uu].biome
          }
        }

        function bu(uu) {
          let Eu = 0;
          const ju = [];
          for (const su of uu) Eu += su.frequency, ju.push(su.frequency);
          return {
            Qs: uu,
            stoneFrequencies: ju,
            stonesTotalFrequency: Eu
          }
        }

        function cu(uu) {
          return bu(function(uu) {
            return [{
              stoneId: uu.Stone.id,
              frequency: 100
            }, {
              stoneId: uu.Andesite.id,
              frequency: 4
            }, {
              stoneId: uu.Diorite.id,
              frequency: 2
            }, {
              stoneId: uu.Granite.id,
              frequency: 1
            }]
          }(uu))
        }

        function Nu(uu, Eu, ju) {
          const su = ju.next() * Eu;
          let Uu = 0,
            Zu = 0;
          for (; Uu <= su;) Uu += uu[Zu], Zu++;
          return Zu - 1
        }

        function Ou(uu) {
          let {
            hO: Eu,
            blockMetadata: ju,
            worldGenerator: Uu,
            seed: Zu,
            biomeOpts: Xu
          } = uu;
          const lu = new su.q(Eu, ju, Uu, Zu, Xu),
            qu = new su.A(Eu, ju, Uu, Zu, Xu),
            fu = new su.E(Eu, ju, Uu, Zu, Xu),
            Cu = new su.U(Eu, ju, Uu, Zu, Xu),
            bu = new su.N(Eu, ju, Uu, Zu, Xu),
            Nu = new su.s(Eu, ju, Uu, Zu, Xu),
            Ou = new su.R(Eu, ju, Uu, Zu, Xu),
            Yu = new su.H(Eu, ju, Uu, Zu, Xu),
            hu = new su.L(Eu, ju, Uu, Zu, Xu),
            Du = new su.db(Eu, ju, Uu, Zu, Xu),
            gu = new su.x(Eu, ju, Uu, Zu, Xu),
            Mu = new su.e(Eu, ju, Uu, Zu, Xu),
            eu = new su.Y(Eu, ju, Uu, Zu, Xu),
            Gu = new su.$(Eu, ju, Uu, Zu, Xu),
            pu = new su.k(Eu, ju, Uu, Zu, Xu),
            wu = new su.m(Eu, ju, Uu, Zu, Xu),
            Ju = new su.eb(Eu, ju, Uu, Zu, Xu),
            du = new su.ib(Eu, ju, Uu, Zu, Xu),
            au = new su.C(Eu, ju, Uu, Zu, Xu),
            Pu = new su.v(Eu, ju, Uu, Zu, Xu),
            ou = new su.t(Eu, ju, Uu, Zu, Xu),
            ku = cu(ju);
          return [{
            biome: gu,
            frequency: 2,
            altBiome: Nu
          }, {
            biome: lu,
            frequency: 23,
            altBiome: null
          }, {
            biome: fu,
            frequency: 8,
            altBiome: null
          }, {
            biome: Pu,
            frequency: 2,
            altBiome: bu
          }, {
            biome: qu,
            frequency: 1,
            altBiome: null
          }, {
            biome: Cu,
            frequency: 4,
            altBiome: null
          }, {
            biome: gu,
            frequency: 6,
            altBiome: Nu
          }, {
            biome: bu,
            frequency: 62,
            altBiome: null
          }, {
            biome: Pu,
            frequency: 2,
            altBiome: bu
          }, {
            biome: au,
            frequency: 4,
            altBiome: null
          }, {
            biome: du,
            frequency: 2,
            altBiome: null
          }, {
            biome: Ju,
            frequency: 4,
            altBiome: null
          }, {
            biome: Nu,
            frequency: 16,
            altBiome: null
          }, {
            biome: wu,
            frequency: 4,
            altBiome: null
          }, {
            biome: Yu,
            frequency: 6,
            altBiome: null
          }, {
            biome: Mu,
            frequency: 6,
            altBiome: null
          }, {
            biome: Ou,
            frequency: 24,
            altBiome: null
          }, {
            biome: ou,
            frequency: 2,
            altBiome: Nu
          }, {
            biome: wu,
            frequency: 2,
            altBiome: null
          }, {
            biome: gu,
            frequency: 4,
            altBiome: Nu
          }, {
            biome: hu,
            frequency: 12,
            altBiome: Nu
          }, {
            biome: ou,
            frequency: 2,
            altBiome: Nu
          }, {
            biome: Du,
            frequency: 2,
            altBiome: Nu
          }, {
            biome: eu,
            frequency: 32,
            altBiome: null
          }, {
            biome: Gu,
            frequency: 16,
            altBiome: null
          }, {
            biome: pu,
            frequency: 4,
            altBiome: null
          }].map((uu => ({
            ...uu,
            ...ku
          })))
        }

        function Yu(uu, Eu) {
          let {
            hO: ju,
            blockMetadata: Uu,
            worldGenerator: Zu,
            seed: lu,
            biomeOpts: qu
          } = Eu;
          if (0 === uu.length) throw new Error("buildCustomBiomes requires at least one custom biome");
          return uu.map((uu => {
            const Eu = new su.o(ju, Uu, Zu, lu, qu, uu),
              fu = uu.Qs.map((uu => ({
                stoneId: (0, Xu.C)(uu.blockName, Uu),
                frequency: uu.frequency
              })));
            return {
              biome: Eu,
              frequency: uu.frequency,
              altBiome: null,
              ...bu(fu)
            }
          }))
        }
      },
      40065: (uu, Eu, ju) => {
        ju.d(Eu, {
          b: () => Yu
        });
        var su = ju(39963),
          Uu = ju(649),
          Zu = ju(39974),
          Xu = ju(39969),
          lu = ju(4432);
        class qu {
          constructor(uu, Eu, ju, su) {
            this.hO = uu, this.pointsGenerator = Eu, this.seed = su, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * ju / this.hO) + 1
          }
          getChunkCoordFromGlobalCoord(uu, Eu) {
            return this.tempChunkCoord[0] = Math.floor(uu / this.hO), this.tempChunkCoord[1] = Math.floor(Eu / this.hO), this.tempChunkCoord
          }
          getSurroundingFeatures(uu, Eu) {
            const ju = this.getChunkCoordFromGlobalCoord(uu, Eu),
              su = [];
            for (let Uu = ju[0] - this.chunkSearchRadius; Uu <= ju[0] + this.chunkSearchRadius; Uu++)
              for (let uu = ju[1] - this.chunkSearchRadius; uu <= ju[1] + this.chunkSearchRadius; uu++) this.pointsGenerator.isPoint(Uu, uu) && su.push(this.getRandomPointInChunk(Uu, uu));
            return su
          }
          getRandomPointInChunk(uu, Eu) {
            const ju = uu * this.hO,
              su = Eu * this.hO,
              Uu = new lu.f(`${uu}|${Eu}|${this.seed}`);
            return [ju + Math.floor(Uu.next() * this.hO), su + Math.floor(Uu.next() * this.hO)]
          }
        }
        var fu = ju(39995),
          Cu = ju(40048);
        class bu {
          constructor(uu, Eu, ju, su) {
            this.numCaveTypes = uu, this.caveTypeToBlockIds = Eu, this.caveTypePrioritization = ju, this.hO = su
          }
        }
        class cu extends bu {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su), this.data = Uu
          }
          getOrGenerate(uu, Eu, ju, su) {
            return this.data.getOrGenerate(uu, Eu, ju, su)
          }
          viewJustInnerChunk() {
            return new Nu(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.hO, this.data.viewJustInnerChunk())
          }
        }
        class Nu extends bu {
          constructor(uu, Eu, ju, su, Uu) {
            super(uu, Eu, ju, su), this.data = Uu
          }
          getOrGenerate(uu, Eu, ju, su) {
            return this.data.get(uu, Eu, ju, su)
          }
        }

        function Ou(uu) {
          const Eu = uu.high - uu.low;
          return {
            low: uu.low,
            high: uu.high,
            midpoint: (uu.low + uu.high) / 2,
            width: Eu,
            halfWidth: Eu / 2
          }
        }
        class Yu {
          constructor(uu, Eu, ju, su) {
            this.hO = Eu, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new Mu(uu, Eu, ju, su)
          }
          static isInCave(uu, Eu, ju, su) {
            for (let Uu = 0; Uu < su.numCaveTypes; Uu++) {
              const Xu = su.getOrGenerate(uu, ju, Uu, Zu.d.FloorY),
                lu = su.getOrGenerate(uu, ju, Uu, Zu.d.CeilingY);
              if (Xu <= Eu && Eu <= lu) return !0
            }
            return !1
          }
          static addCavesToChunk(uu, Eu, ju, su, Uu, qu) {
            const fu = new lu.f(`caveBlocks${Eu}|${ju}|${su}`);
            for (let lu = Eu; lu < Eu + qu.hO; lu++)
              for (let Cu = su; Cu < su + qu.hO; Cu++) {
                const bu = Uu.get(lu, Cu, Zu.h.GroundHeight);
                for (const Uu of qu.caveTypePrioritization) {
                  const cu = qu.getOrGenerate(lu, Cu, Uu, Zu.d.FloorY);
                  if (cu === Xu.q) continue;
                  const Nu = qu.getOrGenerate(lu, Cu, Uu, Zu.d.CeilingY),
                    Ou = Math.min(Nu + 1, ju + qu.hO, bu + 1),
                    Yu = qu.caveTypeToBlockIds[Uu];
                  for (let Uu = Math.max(cu, ju); Uu < Ou; Uu++) {
                    const Zu = "number" === typeof Yu ? Yu : Yu.sample(fu);
                    uu.set(lu - Eu, Uu - ju, Cu - su, Zu)
                  }
                }
              }
          }
          getCaveHeightmapVals(uu, Eu, ju) {
            const Uu = [uu, Eu],
              Xu = new hu(this.caveMetadataForChunkCache, ju, this.hO),
              lu = this.caveMetadataForChunkCache.numCaveTypes,
              qu = this.caveMetadataForChunkCache.caveTypeToBlockId,
              fu = this.caveMetadataForChunkCache.caveTypePrioritization,
              Cu = su.e.create(this.hO, Uu, lu, Zu.d.NumFields, Xu);
            return new cu(lu, qu, fu, this.hO, Cu)
          }
        }
        class hu {
          constructor(uu, Eu, ju) {
            if (this.caveMetadataForChunkCache = uu, this.heightmapVals = Eu, this.caveGeneratorsPerChunk = [], ju !== Uu.y) throw new Error(`Cave generation is not supported for chunk sizes other than ${Uu.y}`)
          }
          generateAndSet(uu, Eu, ju) {
            const su = (0, Uu.M)(uu),
              Zu = (0, Uu.M)(Eu);
            this.getOrCreateCaveGeneratorForChunk(su, Zu).generateAndSet(uu, Eu, ju)
          }
          getOrCreateCaveGeneratorForChunk(uu, Eu) {
            return void 0 === this.caveGeneratorsPerChunk[uu] && (this.caveGeneratorsPerChunk[uu] = []), void 0 === this.caveGeneratorsPerChunk[uu][Eu] && (this.caveGeneratorsPerChunk[uu][Eu] = this.caveMetadataForChunkCache.getOrCreateCaveGeneratorForChunk(uu, Eu, this.heightmapVals)), this.caveGeneratorsPerChunk[uu][Eu]
          }
        }
        class Du {
          constructor(uu, Eu, ju, su, Uu, Zu) {
            this.heightmapVals = uu, this.spaghettiCaveMetadataForChunk = Eu, this.pitCaveMetadataForChunk = ju, this.ravineCaveMetadataForChunk = su, this.sphereCaveMetadataForChunk = Uu, this.numCaveTypes = Zu
          }
          generateAndSet(uu, Eu, ju) {
            this.setDefaultCaves(uu, Eu, ju), this.generateAndSetSpaghettiCaves(uu, Eu, ju), this.generateAndSetPitCaves(uu, Eu, ju), this.generateAndSetRavineCaves(uu, Eu, ju), this.generateAndSetSphereCaves(uu, Eu, ju), this.removeCavesNearWater(uu, Eu, ju)
          }
          setDefaultCaves(uu, Eu, ju) {
            for (let su = 0; su < this.numCaveTypes; su++) ju.set(uu, Eu, su, Zu.d.FloorY, Xu.q), ju.set(uu, Eu, su, Zu.d.CeilingY, Xu.q)
          }
          generateAndSetSpaghettiCaves(uu, Eu, ju) {
            for (const su of this.spaghettiCaveMetadataForChunk) {
              const Uu = su.caveEdgeNoiseGenerator.getOctaves(uu, Eu);
              if (Uu >= Du.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
              const lu = su.caveHeightNoiseGenerator.getOctaves(uu, Eu);
              if (lu === Xu.e) continue;
              if (!(su.caveHeightThreshold.low < lu && lu < su.caveHeightThreshold.high)) continue;
              let qu;
              {
                let uu = 1 - Math.abs(lu - su.caveHeightThreshold.midpoint) / su.caveHeightThreshold.halfWidth;
                uu = Math.min(su.caveHeightPercentageUpperBound, uu), qu = su.caveHeightMax * uu
              }
              Uu > 0 && (qu *= (Du.SPAGHETTI_CAVE_EDGE_CUTOFF - Uu) / Du.SPAGHETTI_CAVE_EDGE_CUTOFF);
              const fu = su.caveXZPerturbNoiseGenerator.getOctaves(uu, Eu),
                Cu = su.caveXZPerturbNoiseGenerator.getOctaves(uu + 980, Eu - 370),
                bu = su.caveYPerturbNoiseGenerator.getOctaves(uu + fu, Eu + Cu),
                cu = Math.floor(su.caveCentreY + bu - qu);
              let Nu = Math.floor(su.caveCentreY + bu + qu);
              Nu + 1 === this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.GroundHeight) && Nu++, ju.set(uu, Eu, su.caveType, Zu.d.FloorY, cu), ju.set(uu, Eu, su.caveType, Zu.d.CeilingY, Nu)
            }
          }
          generateAndSetPitCaves(uu, Eu, ju) {
            for (const su of this.pitCaveMetadataForChunk) {
              const Uu = su.pitMinX,
                Xu = su.pitMaxX,
                lu = su.pitMinZ,
                qu = su.pitMaxZ;
              if (uu < su.reachMinX || uu > su.reachMaxX || Eu < su.reachMinZ || Eu > su.reachMaxZ) continue;
              const fu = uu + su.pitXZPerturbNoiseGenerator.getOctaves(uu, Eu),
                Cu = Eu + su.pitXZPerturbNoiseGenerator.getOctaves(uu + 430, Eu - 330);
              if (fu < Uu || fu > Xu || Cu < lu || Cu > qu) continue;
              const bu = null === su.pitHeightPerturbNoiseGenerator,
                cu = su.pitFloorYPerturbNoiseGenerator.getOctaves(uu, Eu),
                Nu = bu ? 0 : su.pitHeightPerturbNoiseGenerator.getOctaves(uu, Eu);
              let Ou = su.pitFloorY + cu,
                Yu = su.pitFloorY + su.pitHeight + Nu;
              const hu = 4,
                Du = Math.min(fu - Uu, Xu - fu),
                gu = Math.min(Cu - lu, qu - Cu),
                Mu = Math.min(Du, gu);
              if (Mu < hu) {
                const ju = 1 - Mu / hu;
                Ou += (5 + su.pitMidpointYPerturbNoiseGenerator.getOctaves(uu, Eu)) * ju, bu || (Yu -= (Yu - Ou) * ju)
              }
              Ou = Math.floor(Ou), Yu = Math.floor(Yu), (bu || Yu + 1 === this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.GroundHeight)) && Yu++;
              let eu = su.caveType;
              null !== su.wallType && (Du <= .9 || gu <= .9) ? eu = su.wallType : su.pitCeilingThickness > 0 && (Yu -= su.pitCeilingThickness, ju.set(uu, Eu, su.ceilingType, Zu.d.FloorY, Yu), ju.set(uu, Eu, su.ceilingType, Zu.d.CeilingY, Yu + su.pitCeilingThickness)), ju.set(uu, Eu, eu, Zu.d.FloorY, Ou), ju.set(uu, Eu, eu, Zu.d.CeilingY, Yu)
            }
          }
          generateAndSetRavineCaves(uu, Eu, ju) {
            for (const Uu of this.ravineCaveMetadataForChunk) {
              const Xu = Uu.ravineCentre,
                lu = Uu.ravineWidth,
                qu = Uu.ravineLength,
                fu = uu - Xu[0],
                Cu = Eu - Xu[1];
              if (fu * fu + Cu * Cu > Uu.reachDistanceSquared) continue;
              if (Math.abs(fu * Uu.axisNormalX + Cu * Uu.axisNormalZ) > Uu.reachFromAxis) continue;
              const bu = uu + Uu.ravineXZPerturbNoiseGenerator.getOctaves(uu, Eu),
                cu = Eu + Uu.ravineXZPerturbNoiseGenerator.getOctaves(uu + 430, Eu - 330),
                Nu = (0, su.O)(Xu, bu, cu);
              if (Nu > qu) continue;
              const Ou = [bu, cu],
                Yu = Xu,
                hu = [Xu[0] + Uu.ravineDirection[0], Xu[1] + Uu.ravineDirection[1]],
                Du = (0, su.A)(Ou, Yu, hu),
                gu = lu * (1 - Nu / qu);
              if (Du > gu) continue;
              const Mu = Uu.ravineYPerturbNoiseGenerator.getOctaves(uu, Eu);
              let eu = Uu.ravineFloorY + Mu,
                Gu = Uu.ravineFloorY + Uu.ravineHeight + Mu;
              const pu = 3,
                wu = gu - Du;
              if (wu < pu) {
                const uu = 1 - wu / pu;
                eu += Uu.ravineHeight * uu
              }
              eu = Math.floor(eu), Gu = Math.floor(Gu), Gu + 1 === this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.GroundHeight) && Gu++, ju.set(uu, Eu, Uu.caveType, Zu.d.FloorY, eu), ju.set(uu, Eu, Uu.caveType, Zu.d.CeilingY, Gu)
            }
          }
          generateAndSetSphereCaves(uu, Eu, ju) {
            for (const su of this.sphereCaveMetadataForChunk) {
              const Uu = uu - su.sphereCentreX,
                Xu = Eu - su.sphereCentreZ;
              if (Uu * Uu + Xu * Xu > su.reachDistanceSquared) continue;
              const lu = uu + su.sphereXZPerturbNoiseGenerator.getOctaves(uu, Eu),
                qu = Eu + su.sphereXZPerturbNoiseGenerator.getOctaves(uu + 430, Eu - 330),
                fu = su.sphereCentreX - lu,
                Cu = su.sphereCentreZ - qu,
                bu = fu * fu + Cu * Cu;
              if (bu > su.sphereRadiusSquared) continue;
              const cu = Math.sqrt(su.sphereRadiusSquared - bu),
                Nu = Math.floor(su.sphereCentreY - cu);
              let Ou = Math.floor(su.sphereCentreY + cu);
              Ou + 1 === this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.GroundHeight) && Ou++, ju.set(uu, Eu, su.caveType, Zu.d.FloorY, Nu), ju.set(uu, Eu, su.caveType, Zu.d.CeilingY, Ou)
            }
          }
          removeCavesNearWater(uu, Eu, ju) {
            const su = this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.CavesAllowedBelowY);
            if (su !== Xu.m)
              for (let Uu = 0; Uu < this.numCaveTypes; Uu++) {
                if (ju.get(uu, Eu, Uu, Zu.d.CeilingY) <= su) continue;
                ju.get(uu, Eu, Uu, Zu.d.FloorY) <= su ? ju.set(uu, Eu, Uu, Zu.d.CeilingY, su) : (ju.set(uu, Eu, Uu, Zu.d.FloorY, Xu.q), ju.set(uu, Eu, Uu, Zu.d.CeilingY, Xu.q))
              }
          }
        }
        Du.SPAGHETTI_CAVE_EDGE_CUTOFF = .08;
        const gu = new Cu.e("cave chunk metadata", 100, 6e4);
        class Mu {
          constructor(uu, Eu, ju, Zu) {
            this.seed = uu, this.spaghettiCaveMetadata = void 0, this.pitCaveMetadata = void 0, this.ravineCaveMetadata = void 0, this.sphereCaveMetadata = void 0, this.numCaveTypes = void 0, this.caveTypeToBlockId = void 0, this.caveTypePrioritization = void 0, this.perChunkCache = gu.partition();
            let Xu = 0;
            const Cu = [],
              bu = [];
            {
              const {
                spaghettiCaveMetadata: Eu,
                nextCaveType: ju
              } = function(uu, Eu) {
                const ju = {
                    caveEdgeNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 210
                    }],
                    caveHeightNoiseParams: [{
                      amplitude: 1.5,
                      frequency: 1 / 300
                    }, {
                      amplitude: .5,
                      frequency: 1 / 150
                    }, {
                      amplitude: .3,
                      frequency: 1 / 90
                    }, {
                      amplitude: .03,
                      frequency: .1
                    }],
                    caveHeightNoiseThresholdParams: {
                      low: -.1,
                      high: .1
                    },
                    caveXZPerturbNoiseParams: [{
                      amplitude: 2,
                      frequency: 1 / 18
                    }, {
                      amplitude: 4,
                      frequency: 1 / 40
                    }],
                    caveYPerturbNoiseParams: [{
                      amplitude: 25,
                      frequency: 1 / 330
                    }, {
                      amplitude: 12,
                      frequency: 1 / 240
                    }],
                    caveHeightMax: 9,
                    caveHeightPercentageUpperBound: .5
                  },
                  Uu = [...[{
                    caveCentreYMin: -15,
                    count: 1
                  }, {
                    caveCentreYMin: -35,
                    count: 1
                  }, {
                    caveCentreYMin: -55,
                    count: 2
                  }, {
                    caveCentreYMin: -75,
                    count: 1
                  }, {
                    caveCentreYMin: -99,
                    count: 1
                  }].map((uu => ({
                    ...ju,
                    ...uu
                  }))), {
                    count: 2,
                    caveEdgeNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 210
                    }],
                    caveHeightNoiseParams: [{
                      amplitude: 1.5,
                      frequency: 1 / 300
                    }, {
                      amplitude: .5,
                      frequency: 1 / 150
                    }, {
                      amplitude: .3,
                      frequency: 1 / 90
                    }, {
                      amplitude: .03,
                      frequency: .1
                    }],
                    caveHeightNoiseThresholdParams: {
                      low: -.1,
                      high: .1
                    },
                    caveXZPerturbNoiseParams: [{
                      amplitude: 2,
                      frequency: 1 / 18
                    }, {
                      amplitude: 4,
                      frequency: 1 / 40
                    }],
                    caveYPerturbNoiseParams: [{
                      amplitude: 18,
                      frequency: 1 / 210
                    }, {
                      amplitude: 6,
                      frequency: 1 / 160
                    }],
                    caveHeightMax: 9,
                    caveHeightPercentageUpperBound: .5,
                    caveCentreYMin: -98
                  }, {
                    count: 2,
                    caveEdgeNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 310
                    }],
                    caveHeightNoiseParams: [{
                      amplitude: .3,
                      frequency: 1 / 90
                    }, {
                      amplitude: .03,
                      frequency: .1
                    }],
                    caveHeightNoiseThresholdParams: {
                      low: -.06,
                      high: .06
                    },
                    caveXZPerturbNoiseParams: [{
                      amplitude: 2,
                      frequency: 1 / 30
                    }],
                    caveYPerturbNoiseParams: [{
                      amplitude: 40,
                      frequency: 1 / 300
                    }, {
                      amplitude: 15,
                      frequency: 1 / 210
                    }],
                    caveHeightMax: 12,
                    caveHeightPercentageUpperBound: .5,
                    caveCentreYMin: -98
                  }],
                  Zu = [];
                for (let Xu = 0; Xu < Uu.length; Xu++) {
                  const ju = Uu[Xu];
                  let lu = 0;
                  for (const uu of ju.caveYPerturbNoiseParams) lu += uu.amplitude;
                  for (let Uu = 0; Uu < ju.count; Uu++) Zu.push({
                    caveType: Eu++,
                    caveEdgeNoiseGenerator: new su.l(ju.caveEdgeNoiseParams, `${uu}CaveCutoff${Xu}${Uu}`),
                    caveHeightNoiseGenerator: new su.p(ju.caveHeightNoiseParams, ju.caveHeightNoiseThresholdParams, `${uu}Cave${Xu}${Uu}`),
                    caveHeightThreshold: Ou(ju.caveHeightNoiseThresholdParams),
                    caveHeightMax: ju.caveHeightMax,
                    caveHeightPercentageUpperBound: ju.caveHeightPercentageUpperBound,
                    caveXZPerturbNoiseGenerator: new su.l(ju.caveXZPerturbNoiseParams, `${uu}CaveHeightPerturb${Xu}${Uu}`),
                    caveYPerturbNoiseGenerator: new su.l(ju.caveYPerturbNoiseParams, `${uu}CaveHeightNoise${Xu}${Uu}`),
                    caveCentreY: ju.caveCentreYMin + lu
                  })
                }
                return {
                  spaghettiCaveMetadata: Zu,
                  nextCaveType: Eu
                }
              }(uu, Xu);
              this.spaghettiCaveMetadata = Eu, Xu = ju
            } {
              const {
                pitCaveMetadata: cu,
                nextCaveType: Nu
              } = function(uu, Eu, ju, Zu, Xu, Cu, bu) {
                const cu = [{
                    count: 1,
                    pitXZPerturbNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 8
                    }, {
                      amplitude: 3,
                      frequency: .05
                    }, {
                      amplitude: 10,
                      frequency: .01
                    }, {
                      amplitude: 29,
                      frequency: .002
                    }],
                    pitFloorYPerturbNoiseParams: [{
                      amplitude: 1,
                      frequency: .1
                    }, {
                      amplitude: 3,
                      frequency: .02
                    }],
                    pitHeightPerturbNoiseParams: [{
                      amplitude: 3,
                      frequency: .1
                    }, {
                      amplitude: 10,
                      frequency: .02
                    }],
                    pitMidpointNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 3
                    }, {
                      amplitude: 2,
                      frequency: 1 / 7
                    }, {
                      amplitude: 2,
                      frequency: 1 / 15
                    }],
                    pitMinWidth: 15,
                    pitMaxWidth: 40,
                    pitMinFloorY: -99,
                    pitMaxFloorY: -25,
                    pitMinHeight: 25,
                    pitMaxHeight: 45,
                    fillBlockId: 0,
                    wallBlockIds: null,
                    ceilingParams: null,
                    numChunksBetweenPits: 5
                  }, {
                    count: 1,
                    priority: -1,
                    pitXZPerturbNoiseParams: [{
                      amplitude: 10,
                      frequency: .01
                    }],
                    pitFloorYPerturbNoiseParams: [{
                      amplitude: 1,
                      frequency: .1
                    }, {
                      amplitude: 3,
                      frequency: .02
                    }],
                    pitHeightPerturbNoiseParams: null,
                    pitMidpointNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 3
                    }, {
                      amplitude: 2,
                      frequency: 1 / 7
                    }, {
                      amplitude: 2,
                      frequency: 1 / 15
                    }],
                    pitMinWidth: 10,
                    pitMaxWidth: 15,
                    pitMinFloorY: -99,
                    pitMaxFloorY: -10,
                    pitMinHeight: 7,
                    pitMaxHeight: 15,
                    fillBlockId: (0, Uu.C)(Zu, ju),
                    wallBlockIds: new lu.d([{
                      value: ju.Stone.id,
                      weight: 3
                    }, {
                      value: ju["Compressed Messy Stone"].id,
                      weight: 5
                    }, {
                      value: ju.Magma.id,
                      weight: 1
                    }]),
                    ceilingParams: {
                      blockIds: 0,
                      minThickness: 2,
                      maxThickness: 5
                    },
                    numChunksBetweenPits: 2
                  }],
                  Nu = [];
                for (const Uu of cu) {
                  let ju = 0;
                  for (const uu of Uu.pitXZPerturbNoiseParams) ju += uu.amplitude;
                  for (let Zu = 0; Zu < Uu.count; Zu++) {
                    const Zu = Nu.length,
                      cu = new su.l(Uu.pitXZPerturbNoiseParams, `${uu}DistPitPerturb${Zu}`),
                      Ou = `${uu}PitGen${Zu}`,
                      Yu = new fu.b("cavePit", Uu.numChunksBetweenPits, !0, !1, Ou, 100, Eu),
                      hu = new qu(Eu, Yu, Uu.pitMaxWidth + 2 * ju, Ou);
                    console.assert(hu.chunkSearchRadius <= Uu.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${hu.chunkSearchRadius} ${Uu.numChunksBetweenPits/2}`);
                    const Du = new lu.i(Uu.pitMinWidth, Uu.pitMaxWidth),
                      gu = new lu.i(Uu.pitMinFloorY, Uu.pitMaxFloorY),
                      Mu = new lu.i(Uu.pitMinHeight, Uu.pitMaxHeight),
                      eu = new su.l(Uu.pitFloorYPerturbNoiseParams, `${uu}yPitPerturb${Zu}`);
                    let Gu = null;
                    null !== Uu.pitHeightPerturbNoiseParams && (Gu = new su.l(Uu.pitHeightPerturbNoiseParams, `${uu}heightPitPerturb${Zu}`));
                    const pu = new su.l(Uu.pitMidpointNoiseParams, `${uu}edgesPitPerturb${Zu}`),
                      wu = Xu++;
                    Cu[wu] = Uu.fillBlockId;
                    let Ju = null;
                    null !== Uu.wallBlockIds && (Ju = Xu++, Cu[Ju] = Uu.wallBlockIds);
                    let du = null,
                      au = null;
                    null !== Uu.ceilingParams && (du = Xu++, au = new lu.i(Uu.ceilingParams.minThickness, Uu.ceilingParams.maxThickness), Cu[du] = Uu.ceilingParams.blockIds), void 0 !== Uu.priority && (bu[wu] = Uu.priority, null !== Ju && (bu[Ju] = Uu.priority), null !== du && (bu[du] = Uu.priority)), Nu.push({
                      caveType: wu,
                      wallType: Ju,
                      ceilingType: du,
                      pitCeilingThicknessDistribution: au,
                      pitPointGenerator: hu,
                      pitXZPerturbNoiseGenerator: cu,
                      pitWidthDistribution: Du,
                      pitLengthDistribution: Du,
                      pitFloorYDistribution: gu,
                      pitHeightDistribution: Mu,
                      pitFloorYPerturbNoiseGenerator: eu,
                      pitHeightPerturbNoiseGenerator: Gu,
                      pitMidpointYPerturbNoiseGenerator: pu
                    })
                  }
                }
                return {
                  pitCaveMetadata: Nu,
                  nextCaveType: Xu
                }
              }(uu, Eu, ju, Zu, Xu, Cu, bu);
              this.pitCaveMetadata = cu, Xu = Nu
            } {
              const {
                ravineCaveMetadata: ju,
                nextCaveType: Uu
              } = function(uu, Eu, ju) {
                const Uu = {
                    count: 2,
                    ravineXZPerturbNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 8
                    }, {
                      amplitude: 3,
                      frequency: .05
                    }, {
                      amplitude: 10,
                      frequency: .01
                    }, {
                      amplitude: 30,
                      frequency: .002
                    }],
                    ravineYPerturbNoiseParams: [{
                      amplitude: 1,
                      frequency: .1
                    }, {
                      amplitude: 3,
                      frequency: .02
                    }],
                    ravineMinWidth: 10,
                    ravineMaxWidth: 15,
                    ravineMinLength: 50,
                    ravineMaxLength: 90,
                    ravineMinFloorY: -99,
                    ravineMaxFloorY: -5,
                    ravineMinHeight: 25,
                    ravineMaxHeight: 45,
                    numChunksBetweenRavines: 7
                  },
                  Zu = [];
                for (let Xu = 0; Xu < Uu.count; Xu++) {
                  const Cu = Uu,
                    bu = new su.l(Cu.ravineXZPerturbNoiseParams, `${uu}DistRavPerturb${Xu}`);
                  let cu = 0;
                  for (const uu of Cu.ravineXZPerturbNoiseParams) cu += uu.amplitude;
                  const Nu = new su.l(Cu.ravineYPerturbNoiseParams, `${uu}yRavinePerturb${Xu}`),
                    Ou = `${uu}RavineGen${Xu}`,
                    Yu = new fu.b("caveRav", Cu.numChunksBetweenRavines, !0, !1, Ou, 100, Eu),
                    hu = new qu(Eu, Yu, Math.max(Cu.ravineMaxLength, Cu.ravineMaxWidth) + 2 * cu, Ou);
                  console.assert(hu.chunkSearchRadius <= Cu.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${hu.chunkSearchRadius} ${Cu.numChunksBetweenRavines/2}`);
                  const Du = new lu.i(Cu.ravineMinWidth, Cu.ravineMaxWidth),
                    gu = new lu.i(Cu.ravineMinLength, Cu.ravineMaxLength),
                    Mu = new lu.i(Cu.ravineMinFloorY, Cu.ravineMaxFloorY, !0),
                    eu = new lu.i(Cu.ravineMinHeight, Cu.ravineMaxHeight),
                    Gu = new lu.m(-1, 1);
                  Zu.push({
                    caveType: ju++,
                    ravinePointGenerator: hu,
                    ravineXZPerturbNoiseGenerator: bu,
                    ravineYPerturbNoiseGenerator: Nu,
                    ravineWidthDistribution: Du,
                    ravineLengthDistribution: gu,
                    ravineFloorYDistribution: Mu,
                    ravineHeightDistribution: eu,
                    ravineXZDirectionDistribution: Gu
                  })
                }
                return {
                  ravineCaveMetadata: Zu,
                  nextCaveType: ju
                }
              }(uu, Eu, Xu);
              this.ravineCaveMetadata = ju, Xu = Uu
            } {
              const {
                sphereCaveMetadata: ju,
                nextCaveType: Uu
              } = function(uu, Eu, ju) {
                const Uu = {
                    count: 1,
                    sphereXZPerturbNoiseParams: [{
                      amplitude: 1,
                      frequency: 1 / 8
                    }, {
                      amplitude: 3,
                      frequency: .05
                    }],
                    sphereMinRadius: 6,
                    sphereMaxRadius: 20,
                    sphereMinCentreY: -79,
                    sphereMaxCentreY: 10,
                    numChunksBetweenSpheres: 4
                  },
                  Zu = [];
                for (let Xu = 0; Xu < Uu.count; Xu++) {
                  const Cu = Uu,
                    bu = new su.l(Cu.sphereXZPerturbNoiseParams, `${uu}DistSpherePerturb${Xu}`);
                  let cu = 0;
                  for (const uu of Cu.sphereXZPerturbNoiseParams) cu += uu.amplitude;
                  const Nu = `${uu}SphereGen${Xu}`,
                    Ou = new fu.b("caveSph", Cu.numChunksBetweenSpheres, !0, !1, Nu, 100, Eu),
                    Yu = new qu(Eu, Ou, 2 * (Cu.sphereMaxRadius + cu), Nu);
                  console.assert(Yu.chunkSearchRadius <= Cu.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${Yu.chunkSearchRadius} ${Cu.numChunksBetweenSpheres/2}`);
                  const hu = new lu.i(Cu.sphereMinRadius, Cu.sphereMaxRadius, !0),
                    Du = new lu.i(Cu.sphereMinCentreY, Cu.sphereMaxCentreY);
                  Zu.push({
                    caveType: ju,
                    spherePointGenerator: Yu,
                    sphereXZPerturbNoiseGenerator: bu,
                    sphereRadiusDistribution: hu,
                    sphereCentreYDistribution: Du
                  })
                }
                return {
                  sphereCaveMetadata: Zu,
                  nextCaveType: ju
                }
              }(uu, Eu, Xu);
              this.sphereCaveMetadata = ju, Xu = Uu
            }
            this.numCaveTypes = Xu;
            for (let su = 0; su < this.numCaveTypes; su++) void 0 === Cu[su] && (Cu[su] = 0), void 0 === bu[su] && (bu[su] = 0);
            this.caveTypeToBlockId = Cu, this.caveTypePrioritization = bu.map(((uu, Eu) => ({
              caveType: Eu,
              priority: uu
            }))).sort(((uu, Eu) => uu.priority - Eu.priority)).map((uu => {
              let {
                caveType: Eu
              } = uu;
              return Eu
            }))
          }
          getOrCreateCaveGeneratorForChunk(uu, Eu, ju) {
            const su = this.getOrBuildCaveMetadataForChunk(uu, Eu);
            return new Du(ju, su.spaghettiCaveMetadataForChunk, su.pitCaveMetadataForChunk, su.ravineCaveMetadataForChunk, su.sphereCaveMetadataForChunk, this.numCaveTypes)
          }
          getOrBuildCaveMetadataForChunk(uu, Eu) {
            const ju = this.perChunkCache.get(uu, Eu);
            if (!(0, Uu.H)(ju)) return ju;
            const su = [(0, Uu.x)(uu), (0, Uu.x)(Eu)],
              Zu = {
                spaghettiCaveMetadataForChunk: this.spaghettiCaveMetadata,
                pitCaveMetadataForChunk: this.buildPitCaveMetadataForChunk(su),
                ravineCaveMetadataForChunk: this.buildRavineCaveMetadataForChunk(su),
                sphereCaveMetadataForChunk: this.buildSphereCaveMetadataForChunk(su)
              };
            return this.perChunkCache.set(uu, Eu, Zu), Zu
          }
          buildPitCaveMetadataForChunk(uu) {
            const Eu = [];
            for (let Uu = 0; Uu < this.pitCaveMetadata.length; Uu++) {
              const Zu = this.pitCaveMetadata[Uu],
                Xu = Zu.pitPointGenerator.getSurroundingFeatures(uu[0], uu[1]);
              for (const uu of Xu) {
                var ju, su;
                const Xu = uu[0],
                  qu = uu[1],
                  fu = new lu.f(`pit${Xu}|${qu}|${Uu}${this.seed}`),
                  Cu = Zu.pitWidthDistribution.sample(fu) >> 1,
                  bu = Zu.pitLengthDistribution.sample(fu) >> 1,
                  cu = Xu - Cu,
                  Nu = Xu + Cu,
                  Ou = qu - bu,
                  Yu = qu + bu,
                  hu = Zu.pitXZPerturbNoiseGenerator.maxMagnitude(),
                  Du = Zu.pitFloorYDistribution.sample(fu),
                  gu = Zu.pitHeightDistribution.sample(fu),
                  Mu = null !== (ju = null === (su = Zu.pitCeilingThicknessDistribution) || void 0 === su ? void 0 : su.sample(fu)) && void 0 !== ju ? ju : 0;
                Eu.push({
                  caveType: Zu.caveType,
                  wallType: Zu.wallType,
                  ceilingType: Zu.ceilingType,
                  pitCeilingThickness: Mu,
                  pitMinX: cu,
                  pitMaxX: Nu,
                  pitMinZ: Ou,
                  pitMaxZ: Yu,
                  reachMinX: cu - hu,
                  reachMaxX: Nu + hu,
                  reachMinZ: Ou - hu,
                  reachMaxZ: Yu + hu,
                  pitFloorY: Du,
                  pitHeight: gu,
                  pitXZPerturbNoiseGenerator: Zu.pitXZPerturbNoiseGenerator,
                  pitFloorYPerturbNoiseGenerator: Zu.pitFloorYPerturbNoiseGenerator,
                  pitHeightPerturbNoiseGenerator: Zu.pitHeightPerturbNoiseGenerator,
                  pitMidpointYPerturbNoiseGenerator: Zu.pitMidpointYPerturbNoiseGenerator
                })
              }
            }
            return Eu
          }
          buildRavineCaveMetadataForChunk(uu) {
            const Eu = [];
            for (let ju = 0; ju < this.ravineCaveMetadata.length; ju++) {
              const Uu = this.ravineCaveMetadata[ju],
                Zu = Uu.ravinePointGenerator.getSurroundingFeatures(uu[0], uu[1]);
              for (const uu of Zu) {
                const Zu = uu[0],
                  Xu = uu[1],
                  qu = new lu.f(`rav${Zu}|${Xu}|${ju}${this.seed}`),
                  fu = Uu.ravineWidthDistribution.sample(qu),
                  Cu = Uu.ravineLengthDistribution.sample(qu),
                  bu = Uu.ravineFloorYDistribution.sample(qu),
                  cu = Uu.ravineHeightDistribution.sample(qu),
                  Nu = [Uu.ravineXZDirectionDistribution.sample(qu), Uu.ravineXZDirectionDistribution.sample(qu)];
                (0, su.K)(Nu);
                const Ou = Math.SQRT2 * Uu.ravineXZPerturbNoiseGenerator.maxMagnitude(),
                  Yu = Cu + Ou,
                  hu = Math.hypot(Nu[0], Nu[1]);
                Eu.push({
                  caveType: Uu.caveType,
                  ravineCentre: uu,
                  ravineWidth: fu,
                  ravineLength: Cu,
                  ravineFloorY: bu,
                  ravineHeight: cu,
                  ravineDirection: Nu,
                  reachDistanceSquared: Yu * Yu,
                  axisNormalX: -Nu[1] / hu,
                  axisNormalZ: Nu[0] / hu,
                  reachFromAxis: Math.max(fu, 0) + Ou,
                  ravineXZPerturbNoiseGenerator: Uu.ravineXZPerturbNoiseGenerator,
                  ravineYPerturbNoiseGenerator: Uu.ravineYPerturbNoiseGenerator
                })
              }
            }
            return Eu
          }
          buildSphereCaveMetadataForChunk(uu) {
            const Eu = [];
            for (let ju = 0; ju < this.sphereCaveMetadata.length; ju++) {
              const su = this.sphereCaveMetadata[ju],
                Uu = su.spherePointGenerator.getSurroundingFeatures(uu[0], uu[1]);
              for (const uu of Uu) {
                const Uu = uu[0],
                  Zu = uu[1],
                  Xu = new lu.f(`sph${Uu}|${Zu}|${ju}${this.seed}`),
                  qu = su.sphereRadiusDistribution.sample(Xu),
                  fu = qu * qu,
                  Cu = su.sphereCentreYDistribution.sample(Xu),
                  bu = qu + Math.SQRT2 * su.sphereXZPerturbNoiseGenerator.maxMagnitude();
                Eu.push({
                  caveType: su.caveType,
                  sphereRadiusSquared: fu,
                  sphereCentreX: Uu,
                  sphereCentreY: Cu,
                  sphereCentreZ: Zu,
                  reachDistanceSquared: bu * bu,
                  sphereXZPerturbNoiseGenerator: su.sphereXZPerturbNoiseGenerator
                })
              }
            }
            return Eu
          }
        }
      },
      39981: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => hu
        });
        var su = ju(39974),
          Uu = ju(39963),
          Zu = ju(1695),
          Xu = ju.n(Zu),
          lu = ju(649),
          qu = ju(2976),
          fu = ju.n(qu),
          Cu = ju(38123),
          bu = ju(39983),
          cu = ju(39448),
          Nu = ju(39985);

        function Ou(uu, Eu, ju) {
          const su = new cu.d;
          for (const Uu of ju) {
            const uu = su.get(Uu.chunkX, Uu.chunkY, Uu.chunkZ);
            if (!(0, lu.H)(uu)) throw new Error(`Duplicate chunk at ${Uu.chunkX}, ${Uu.chunkY}, ${Uu.chunkZ}`);
            su.set(Uu.chunkX, Uu.chunkY, Uu.chunkZ, Uu.rle)
          }
          return new bu.e(uu, {
            x: 0,
            y: 0,
            z: 0
          }, Eu, su)
        }
        const Yu = {
          platformStone: Ou("platformStone", {
            x: 41,
            y: 14,
            z: 41
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, Nu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, Nu.d)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB1gjdBgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAApYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBHRoABQQBgQEfAAEf+gYABQIBgQEaAAUCAYEBGgAFAgGIARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAHVCAEfHgAB1gjbBgAFAgGBARoABQIBiAEaAAUCAYEBGgAFBAGBAR4AAZYBAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgKBARkABQICgQEZAAUCAYEBAR0ZAAUEAYEBAYgBHQADgQEdAAMfHQADHB0AAxwdAAEcAh0dAAId2gUABQICgQEZAAUCAoEBGQAFAgKBARkABB8BAgKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHQEcHgACHboFAAUcBIEBFwAFHAOBAQEfFwAFHAKBAQEfGAAFHAKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHAIdHQACHboFAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAGHAEiGQAGHJoHAAkcFwAHHAEiGAAGHAEiGQAGHJoHAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAHHBkABhyaBwAJHBcACBwYAAYcASIZAAYcmgcACRwXAAgcGAAGHAEiGQADHAIiARyaBwAFHASBARcABRwDgQEBHxcABRwCgQEBHxgAASIBHAIiARwCgQEdAAKBAQGIAR0AAx8dAAMcHQABHQIcHQACHQEcHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAQfAQICgQEdAAOBAR0AAx8dAAMcHQABHQIcHgABHAEdHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAUEAoEBHQADgQEdAAMfHQADHB0AAh0BHB4AAh35BQAFAgEdGgAFAgGIARoABQIBgQEaAAUEAYEBHgAB1QgBHx4AAdYI2wYABQIBiAEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBARoAApYBAwABHfoGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBGgAB1QgBlgEDAAEfGgAB1gjfBgA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, Nu.d)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwBIgIcAR8GBAMAAR0BlgECAAGWAQYAAZYB9AYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYgBCwQBHwkcAR8GBA0AAZYBAdUICwABlgETAAHWCNQGAAKBAQsCCRwHAgMAAoEBCwIJHAcCAwACgQELAgkcBwIDAAEdAYgBCgQBAgEcASIHHAECBgQGAAKWAQMAAZYBAQAB1QgDgQEHAAOBAQHVCAGWARAAAdYIAx8HAAMfAdYIEgADHAcAAxwTAAMdBwADHBUAAR0HAAMcHQABHAIdHQACHaoFAA2BAQccCIEBBAAHgQEBiAEFgQEHHAiBAQQABoEBAYgBAR0FgQEHHAiBAQQAAR0BiAELgQECIgUcCIEBBwABHQYfA4EBBwADgQEFHw4AAx8HAAMfEwADHAcAAxwTAAEdAhwHAAMcEwABHQEcAR0HAAIcAR0UAAIdBwABHQEcAR0dAAIdtAUAA4EBBxwDgQETAAOBAQccAoEBAYgBEwADgQECIgIcAiIBHAKBAQEdEwADgQEHAAKBAQGIARMAAYgBAoEBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAIdARwHAAMdFAACHQcAAR3XBQABgQEHHAGBARcAAYEBBBwBIgIcAYEBFwABHwcAAR+3BwABgQEHHAGBARcAAR8HAAEfx78BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, Nu.d)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI3QYABYEBGwAFgQEbAAOBAQGIAQEdGwAEgQEBiAEbAAUf+9YBAA==")
          }]),
          smp2SpawnHub: Ou("smp2SpawnHub", {
            x: 64,
            y: 24,
            z: 64
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, Nu.d)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, Nu.d)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, Nu.d)("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AgEAGwQBHwMCDgABlwGxBwABBB8CAQAXBAgCCQABlgEOAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAEEHwIBABcECAICAAGWAQUAAZYBAwABlwEKAAGWAQWBAQMcGAAFgQEDHBgAAR8DgQEBHxwAAxwdAAMcHQACHAEdHQACHB4AAhwBHR0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARsAAYEBARwBgQEBHASBARgAAYEBBBwBgQECHBgAAYgBA4EBARwDgQEbAAGBAQQcGwAFgQGAAgACBB4CAgAWBAgCGAAFgQEDHBgABYEBAxwYAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGwAIgQEYAAiBARgACIEBGwAFgQEbAAWBAYACAAIEHgICABYECAIWAAGWAQEABYEBAxwYAAGIAQSBAQMcGAABHwOBAQEfHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHgACHB0AAR0CHB0AAxwdAAMcHQADHBwAAR8DHAEfGwABiAEBHAGBAQEcAYEBGwABgQEBHAGBAQEcBIEBGAABgQEEHAGBAQIcGAAEgQEBHAOBARsAAYEBBBwbAAGIAQSBAYACAAMEDAIGBAsCAwAMBAYAAwQIAhgAAYgBA4EBAYgBAxwYAAEdAYgBA4EBGwAFH5sDAAUfGwABHQEAAYEBAQABgQEbAAGIAQEAAYEBAQAEgQEYAAGBAQQAAYEBGgAEgQEBAAKBAQGIARsAAYgBHwABHQGIAQOBAYACAAcEBQIKBAoCBwAFBAoACgTABwAgBOAHAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, Nu.d)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEBgIMHwEdAwIBHQIfBQIBBAEAAh0CHBUAAYgBA4EBAR0bAASBAQGIARsABR+bAwAFHxsABYEBGwAFgQEcAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAASBAQGIAYICAB8CAQQGAgEfDAQCAgQEBQIBBBoABIEBAYgBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxwAARwBgQEBHB0AARwBgQEBHB0AARwBgQEBHBwABYEBGwAEgQEBiAEbAAOBAQGIAQEdggIAHwIBBAYCAR8MBAICBAQFAgEEGgAFgQEbAAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHBwAAR8DHAEfGwAFgQEbAAWBARwAARwBgQEBHBwABYEBwgIAHgICBAMCBB8MBAICBAQEAgGBARsAAYgBBIEBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAEdAhweAAIcHQABHQIcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8cAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAAGIAQSBAcICAB4CAgQDAgEfDwQCAgQEBAIBgQENAAGWAQ0AAR0BiAEDgQEbAAGIAQOBAQGIARsABR+bAwAFHxsABIEBAR0bAAWBARsAAYgBBIEBGwABHQGIAQOBAcICAB4CAgQDAgEfDwQCAgkEHQABlgGkBwAeAgIEAwIBHw8EAgIJBMIHAB4CAgQDAgEfDwQCAgkECwABmwG2BwAeAgIEAwIBHw8EAgIJBAwAAZsBBAABlgGwBwAeAgIEAwIBHw8EAgIJBAkAAZYBuAcAHwIBBAMCAR8PBAICCgQHAAGWARYAAZYBogcAHwIBBAMCAR8PBAICCgQdAAGWAaMHAB8CAQQDAgEfDwQCAgoEwQcAHwIBBAMCAR0PBAICCgQPAAIwsAcAHwIBBAMCAR8PBAICCgQPAAIwsAcAHwIBBAMCAR0OBAMCCgQbAAGdAaUHAB4CAgQVAgkEGwABnQEBAAGdAaQHAB4CAgQUAgoEwgcAHgICBAQCCAQGAgwEwgcAHQIDBAMCAR0ZBA4AARkGEwEZGAABGQYAARkYAAEZBgABGRcAAdUQARkGAAEZAdMQFgAB4RACNAQAAjQB3xAYAAY0jgYAHQIDBAMCAR8IBAYCCwQOAAETBgABEwGWAVYAAZ0RCAABmxEWAAGpEQI3BAACNwGnERgABjeOBgAcAgQEAwIBHwgEBgIKBA8AARMGAAETVwAB1RAIAAHTEBYAAeEQAjQEAAI0Ad8QGAAGNI4GABsCBQQIAgQEBgIJBAUAAxwBHQGIAQOBAQMAARMGAAETEAABiAEDgQEBiAEbAAUfIgABnREIAAGbERYAAakRAjcEAAI3AacRGAAGN7ECAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAGwIFBAgCEwQFAAMcBYEBAwABGQYTARkNAAMcBYEBAwABGQYAARkQAAEfA4EBAR8DAAEZBgABGREAAxwDAAHVEAEZBgABGQHTEBAAAxwDAAHhEAI0BAACNAHfEBAAAxwFAAY0EgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8bAAGBAQEcAYEBARwBgQEYAASBAQEcAYEBARwBgQEYAAIcAYEBBBwBgQEYAAOBAQEcBIEBGAAEHAGBARsABIEBAYgBmwIAGwIFBAgCEwQFAAMcBYEBBAABlgELAAGWAQcAAxwFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGAAIgQEYAAiBARgACIEBGAAFgQEbAAWBAZsCABoCBgQIAhIEBgADHASBAQGIAREAAZYBBgADHAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAhwBHR0AAhweAAIcAR0dAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARgABIEBARwBgQEBHAGBARgAAhwBgQEEHAGBARgAA4EBARwDgQEBiAEYAAQcAYEBGwAFgQGbAgAYAggECAIQBAgAAxwBiAECgQEBiAEBHRsABIEBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAYEBGAAEgQEBAAGBAQEAAYEBGgABgQEEAAGIARgAAR0BiAEBgQEBAAKBAQGIAQEdHAABgQEbAAWBAZsCAAoCBAQGAhYEBAAGBAgAAZwBCAABlgG6BwAgBBsAAZwBxAcA")
          }])
        };
        class hu {
          constructor(uu, Eu) {
            this.hO = Eu, this.chunkToFixedPointPrefabs = void 0;
            const ju = {},
              su = Eu + gu;
            for (const {
                yj: Uu,
                x: Zu,
                y: Xu,
                z: lu
              }
              of uu) {
              const uu = Yu[Uu];
              if (void 0 === uu) throw new Error(`Fixed-point prefab "${Uu}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
              const {
                dimensions: qu
              } = uu, fu = qu.x, Cu = qu.y, bu = qu.z, cu = Zu - (fu >> 1), Nu = lu - (bu >> 1), Ou = cu + fu - 1, hu = Nu + bu - 1, Du = {
                schematic: uu,
                bottomLeftX: cu,
                bottomLeftZ: Nu,
                floorY: Xu,
                ceilingY: Xu + Cu - 1,
                topRightX: Ou,
                topRightZ: hu
              }, gu = cu - su, Mu = Ou + su, eu = Nu - su, Gu = hu + su, pu = Math.floor(gu / Eu) * Eu, wu = Math.floor(eu / Eu) * Eu;
              for (let su = pu; su <= Mu; su += Eu)
                for (let uu = wu; uu <= Gu; uu += Eu) {
                  const Eu = this.getKeyForChunk(su, uu);
                  ju[Eu] ??= [], ju[Eu].push(Du)
                }
            }
            this.chunkToFixedPointPrefabs = ju
          }
          getFixedPointPrefabInfoForChunk(uu, Eu) {
            const ju = this.getKeyForChunk(uu, Eu),
              Zu = this.chunkToFixedPointPrefabs[ju];
            if (void 0 === Zu) return {
              decodedFixedPointPrefabsForChunk: [],
              nearestFixedPrefabInfoForChunk: null
            };
            const Xu = [];
            for (const su of Zu) {
              const {
                schematic: uu,
                bottomLeftX: Eu,
                bottomLeftZ: ju,
                floorY: Uu,
                ceilingY: Zu,
                topRightX: lu,
                topRightZ: qu
              } = su, fu = this.getDecodedPrefabSchematic(uu);
              Xu.push({
                decodedPrefabSchematic: fu,
                bottomLeftX: Eu,
                bottomLeftZ: ju,
                floorY: Uu,
                ceilingY: Zu,
                topRightX: lu,
                topRightZ: qu
              })
            }
            const lu = new Du(Zu);
            return {
              decodedFixedPointPrefabsForChunk: Xu,
              nearestFixedPrefabInfoForChunk: Uu.s.create(this.hO, [uu, Eu], su.j.NumFields, lu)
            }
          }
          static smoothHeightmapForFixedPointPrefab(uu, Eu, ju, Uu) {
            if (null === Uu) return null;
            const Zu = Uu.getOrGenerate(uu, Eu, su.j.DistanceToNearestFixedPrefab);
            if (Zu > gu) return null;
            let Xu = Zu / gu;
            Xu *= Xu;
            const lu = Uu.getOrGenerate(uu, Eu, su.j.HeightOfNearestFixedPrefab);
            return Math.floor(ju * Xu + (1 - Xu) * lu)
          }
          static isNearFixedPointPrefab(uu, Eu, ju) {
            if (null === ju) return !1;
            return ju.getOrGenerate(uu, Eu, su.j.DistanceToNearestFixedPrefab) <= gu
          }
          static isWithinFixedPointPrefab(uu, Eu, ju) {
            if (null === ju) return !1;
            return 0 === ju.getOrGenerate(uu, Eu, su.j.DistanceToNearestFixedPrefab)
          }
          static getBlockFromFixedPointPrefab(uu, Eu, ju, su) {
            const {
              bottomLeftX: Uu,
              bottomLeftZ: Zu,
              floorY: Xu,
              ceilingY: lu,
              topRightX: qu,
              topRightZ: fu
            } = su;
            if (uu < Uu || qu < uu || Eu < Xu || lu < Eu || ju < Zu || fu < ju) return 0;
            const Cu = uu - Uu,
              bu = Eu - Xu,
              cu = ju - Zu;
            return su.decodedPrefabSchematic.get(Cu, bu, cu)
          }
          getKeyForChunk(uu, Eu) {
            return `${uu}|${Eu}`
          }
          getDecodedPrefabSchematic(uu) {
            const Eu = uu.name,
              ju = hu.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(Eu);
            if (!(0, lu.H)(ju)) return ju;
            const {
              dimensions: su
            } = uu, Uu = fu()(new Uint16Array(su.x * su.y * su.z), [su.x, su.y, su.z]);
            for (let Zu = 0; Zu < su.x; Zu += lu.y)
              for (let Eu = 0; Eu < su.y; Eu += lu.y)
                for (let ju = 0; ju < su.z; ju += lu.y) {
                  const Xu = fu()(new Uint16Array(lu.y * lu.y * lu.y), [lu.y, lu.y, lu.y]),
                    qu = uu.getRLEChunk((0, lu.M)(Zu), (0, lu.M)(Eu), (0, lu.M)(ju));
                  Cu.decode(qu, Xu.data);
                  const bu = Math.min(lu.y, su.x - Zu),
                    cu = Math.min(lu.y, su.y - Eu),
                    Nu = Math.min(lu.y, su.z - ju);
                  for (let uu = 0; uu < bu; uu++)
                    for (let su = 0; su < cu; su++)
                      for (let lu = 0; lu < Nu; lu++) {
                        const qu = Xu.get(uu, su, lu),
                          fu = Zu + uu,
                          Cu = Eu + su,
                          bu = ju + lu;
                        Uu.set(fu, Cu, bu, qu)
                      }
                }
            return hu.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.set(Eu, Uu), Uu
          }
        }
        hu.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE = new(Xu())({
          max: 100,
          ttl: 6e4,
          updateAgeOnGet: !0
        });
        class Du {
          constructor(uu) {
            this.fixedPointPrefabsForChunk = uu
          }
          generateAndSet(uu, Eu, ju) {
            let Uu = gu + 1,
              Zu = 0;
            for (const su of this.fixedPointPrefabsForChunk) {
              const {
                bottomLeftX: ju,
                bottomLeftZ: Xu,
                topRightX: lu,
                topRightZ: qu
              } = su, fu = Math.max(ju - uu, 0, uu - lu) + Math.max(Xu - Eu, 0, Eu - qu);
              fu < Uu && (Uu = fu, Zu = su.floorY)
            }
            ju.set(uu, Eu, su.j.DistanceToNearestFixedPrefab, Uu), ju.set(uu, Eu, su.j.HeightOfNearestFixedPrefab, Zu)
          }
        }
        const gu = 12
      },
      39958: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => fu,
          f: () => qu,
          g: () => lu
        });
        var su = ju(39963),
          Uu = ju(39974),
          Zu = ju(39969),
          Xu = ju(39981);

        function lu(uu) {
          return new su.l([{
            amplitude: 11,
            frequency: 1 / 4e3
          }, {
            amplitude: 4,
            frequency: .001
          }], `${uu}GlobalHeightmapOffset`)
        }
        class qu {
          constructor(uu) {
            this.globalHeightmap = uu
          }
          getNoWaterHeightmapVal(uu, Eu, ju) {
            const su = uu,
              Uu = Eu;
            let Zu = 0;
            for (const {
                biome: lu,
                weight: qu
              }
              of ju) Zu += lu.getHeightmapVal(su, Uu) * qu;
            const Xu = this.globalHeightmap.getOctaves(su, Uu);
            return Math.floor(Zu) + Math.floor(Xu)
          }
        }
        class fu {
          constructor(uu, Eu, ju, su, Uu) {
            this.closestBiomesForChunk = uu, this.nearestFixedPrefabInfoForChunk = Eu, this.noWaterHeightmapGenerator = ju, this.heightmapPerturb = su, this.waterBodyGenerator = Uu
          }
          generateAndSet(uu, Eu, ju) {
            const su = this.closestBiomesForChunk.getOrGenerate(uu, Eu),
              Uu = Math.floor(this.heightmapPerturb.getOctaves(uu, Eu)),
              Xu = Math.floor(this.heightmapPerturb.getOctaves(uu + 200, Eu + 778)),
              lu = this.waterBodyGenerator.columnMayHaveScatteredLakes(su, uu, Eu),
              qu = this.getWithWaterHeightmapVal(uu + Uu, Eu + Xu, su, lu);
            let {
              groundHeight: fu,
              waterHeight: Cu,
              cavesAllowedBelowY: bu,
              isLake: cu
            } = qu;
            const Nu = su[0].biome.carveGround(uu, Eu, fu);
            null !== Nu && (fu = Nu, Cu = Zu.t, bu = Nu - Zu.h, cu = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(uu, Eu, Uu, Xu, ju, fu, Cu, bu, cu)
          }
          getWithWaterHeightmapVal(uu, Eu, ju, su) {
            const Uu = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(uu, Eu, ju),
              {
                distFromWater: Xu,
                waterRadius: lu,
                waterHeight: qu,
                waterbedHeight: fu,
                isLake: Cu,
                needOutsideWaterDist: bu
              } = this.waterBodyGenerator.getInfoNeededForWaterGen(uu, Eu, su);
            let cu = 0,
              Nu = Zu.t,
              Ou = Zu.m,
              Yu = 0;
            const hu = lu + bu;
            if (Xu <= hu) {
              const uu = lu + 4,
                Eu = qu + 2;
              if (Xu <= lu) {
                let uu = Xu / lu;
                Cu ? (uu *= uu * uu, cu = Math.floor(fu + (qu - fu) * uu - 2)) : (uu *= uu, cu = Math.floor(fu + (qu - fu) * uu)), Nu = qu, Yu = Cu ? 1 : 0;
                const Eu = ju[0].biome.waterKept;
                Eu < 1 && (Nu = fu + Math.floor((qu - fu) * Eu), cu >= Nu && (Nu = Zu.t, Yu = Zu.l))
              } else if (Xu <= uu) {
                const ju = (Xu - lu) / (uu - lu);
                cu = qu + Math.ceil((Eu - qu) * ju)
              } else {
                const ju = (Xu - uu) / (hu - uu);
                cu = Eu + Math.ceil((Uu - Eu) * ju)
              }
              Ou = cu - Zu.h
            } else cu = Uu;
            return {
              groundHeight: cu,
              waterHeight: Nu,
              cavesAllowedBelowY: Ou,
              isLake: Yu
            }
          }
          setHeightmapValuesWithFixedPrefabSmoothing(uu, Eu, ju, su, lu, qu, fu, Cu, bu) {
            const cu = Xu.e.smoothHeightmapForFixedPointPrefab(Math.round(uu + ju / 4), Math.round(Eu + su / 4), qu, this.nearestFixedPrefabInfoForChunk);
            null !== cu && fu > (qu = cu) && (fu = Zu.t, bu = 0), lu.set(uu, Eu, Uu.h.GroundHeight, qu), lu.set(uu, Eu, Uu.h.WaterHeight, fu), lu.set(uu, Eu, Uu.h.CavesAllowedBelowY, Cu), lu.set(uu, Eu, Uu.h.IsLake, bu), this.shouldCurtailCave(uu, Eu, null !== cu) && lu.set(uu, Eu, Uu.h.CavesAllowedBelowY, qu - Zu.h)
          }
          shouldCurtailCave(uu, Eu, ju) {
            if (ju) return !0;
            const su = Math.max(Math.abs(uu), Math.abs(Eu));
            if (su < 50) return !0;
            const Uu = Math.min(Math.abs((uu - 300) % 1e3), 1e3 - Math.abs((uu - 300) % 1e3)),
              Zu = Math.min(Math.abs((Eu - 300) % 1e3), 1e3 - Math.abs((Eu - 300) % 1e3));
            return su > 1e4 && Math.max(Uu, Zu) < 50
          }
        }
      },
      39995: (uu, Eu, ju) => {
        ju.d(Eu, {
          b: () => fu
        });
        var su = ju(39963),
          Uu = ju(40002),
          Zu = ju.n(Uu),
          Xu = ju(4432),
          lu = ju(40048);
        const qu = new lu.e("point cells", 500, 6e4);
        class fu {
          constructor(uu, Eu, ju, su, Uu, Zu, Xu) {
            let lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              fu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Cu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : void 0;
            if (this.name = uu, this.seed = Uu, this.minDist = void 0, this.variableDensitySettings = void 0, this.gridSize = void 0, this.cachedCells = qu.partition(), this._tempCellCoord = [0, 0], this.useIsPoint = void 0, this.useKthClosestPoint = void 0, this.useJitteredGrid = void 0, this.customCellGap = void 0, this.mostRecentlyAccessedCell = null, console.assert(Number.isInteger(Eu)), this.minDist = Eu, this.variableDensitySettings = lu, this.customCellGap = Cu, this.useJitteredGrid = fu, this.gridSize = Math.floor(Math.sqrt(Zu * Math.pow(Eu, 2))), fu) {
              const uu = this.gridSize % Eu;
              0 !== uu && (this.gridSize += Eu - uu)
            } else {
              const uu = this.gridSize % Xu;
              0 !== uu && (this.gridSize += Xu - uu)
            }
            this.useIsPoint = ju, this.useKthClosestPoint = su
          }
          assertReachableFromChunkCentre(uu, Eu) {
            const ju = uu / 2 + Eu - 1;
            if (this.gridSize < ju) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${ju} (chunkSize=${uu}, halfBox=${Eu}). Points near chunk edges would be missed.`)
          }
          isPoint(uu, Eu) {
            const ju = this.getCellCoordFromGlobalCoord(uu, Eu),
              {
                pointsSet: su
              } = this.getCell(ju[0], ju[1]);
            return !!su.has((0, lu.f)(uu, Eu))
          }
          getClosestPoint(uu, Eu) {
            const ju = this.getCellCoordFromGlobalCoord(uu, Eu),
              Uu = this.getCell(ju[0], ju[1]),
              Zu = this._getPointsSurroundingCell(ju, Uu);
            let Xu = [0, 0],
              lu = 1e4;
            for (const qu of Zu) {
              const ju = (0, su.O)(qu, uu, Eu);
              ju < lu && (Xu = qu, lu = ju)
            }
            return Xu
          }
          getKClosestPointsWithWeights(uu, Eu, ju) {
            const su = this.getCellCoordFromGlobalCoord(uu, Eu),
              Uu = this.getCell(su[0], su[1]);
            return this._getPointsSurroundingCell(su, Uu), this._getClosestPointsForGeneratedCell(Uu, uu, Eu, ju)
          }
          getPointsAroundPoint(uu, Eu) {
            const ju = this.getCellCoordFromGlobalCoord(uu, Eu),
              su = this.getCell(ju[0], ju[1]);
            return this._getPointsSurroundingCell(ju, su)
          }
          _getPointsSurroundingCell(uu, Eu) {
            if (!Eu.surroundingPoints) {
              const Zu = [...Eu.points];
              for (let Eu = uu[0] - 1; Eu <= uu[0] + 1; Eu++)
                for (let Xu = uu[1] - 1; Xu <= uu[1] + 1; Xu++) su = Eu, Uu = Xu, ((ju = uu)[0] !== su || ju[1] !== Uu) && Zu.push(...this.getCell(Eu, Xu).points);
              Eu.surroundingPoints = Zu
            }
            var ju, su, Uu;
            return Eu.surroundingPoints
          }
          _getClosestPointsForGeneratedCell(uu, Eu, ju, Uu) {
            let Zu = [0, 0],
              Xu = 1e5;
            for (const fu of uu.surroundingPoints) {
              const uu = (0, su.O)(fu, Eu, ju);
              uu < Xu && (Zu = fu, Xu = uu)
            }
            const lu = [{
              pt: Zu,
              distDiffFromFirstPt: 0,
              weight: 0
            }];
            let qu = Uu;
            for (let fu = 0; fu < uu.surroundingPoints.length; fu++) {
              const Cu = uu.surroundingPoints[fu];
              if (Cu[0] === Zu[0] && Cu[1] === Zu[1]) continue;
              const bu = (0, su.O)(Cu, Eu, ju) - Xu;
              bu < Uu && (lu.push({
                pt: Cu,
                distDiffFromFirstPt: bu,
                weight: 0
              }), qu += Uu - bu)
            }
            for (const su of lu) su.weight = (Uu - su.distDiffFromFirstPt) / qu;
            return lu
          }
          getCellCoordFromGlobalCoord(uu, Eu) {
            return this._tempCellCoord[0] = Math.floor(uu / this.gridSize), this._tempCellCoord[1] = Math.floor(Eu / this.gridSize), this._tempCellCoord
          }
          getCell(uu, Eu) {
            if (this.mostRecentlyAccessedCell && this.mostRecentlyAccessedCell.coord[0] === uu && this.mostRecentlyAccessedCell.coord[1] === Eu) return this.mostRecentlyAccessedCell;
            const ju = this.cachedCells.get(uu, Eu);
            if (ju) return this.mostRecentlyAccessedCell = ju, ju;
            const {
              points: su,
              pointsSet: Uu
            } = this.generateRandomPointsForCell(uu, Eu), Zu = {
              coord: [uu, Eu],
              points: su,
              pointsSet: Uu,
              surroundingPoints: null
            };
            return this.cachedCells.set(uu, Eu, Zu), this.mostRecentlyAccessedCell = Zu, Zu
          }
          generateRandomPointsForCell(uu, Eu) {
            const ju = uu * this.gridSize,
              su = Eu * this.gridSize;
            let Uu, qu;
            if (this.useJitteredGrid) {
              const Zu = new Xu.f(`${uu}${Eu}${this.seed}jitter`);
              Uu = [];
              const lu = ju + this.gridSize,
                qu = su + this.gridSize;
              for (let uu = ju; uu < lu; uu += this.minDist)
                for (let Eu = su; Eu < qu; Eu += this.minDist) {
                  const ju = uu + Math.floor(Zu.next() * this.minDist),
                    su = Eu + Math.floor(Zu.next() * this.minDist);
                  Uu.push([ju, su])
                }
            } else {
              const lu = new Xu.f(`${uu}${Eu}${this.seed}pts`),
                qu = () => lu.next();
              let fu;
              const Cu = this.gridSize - (this.customCellGap || this.minDist);
              if (null === this.variableDensitySettings) fu = new(Zu())({
                shape: [Cu, Cu],
                minDistance: this.minDist,
                maxDistance: this.minDist,
                tries: 40
              }, qu);
              else {
                const uu = this.variableDensitySettings.min,
                  Eu = this.variableDensitySettings.max,
                  Uu = Eu - uu,
                  Xu = this.variableDensitySettings.func,
                  lu = Eu => (Xu([Eu[0] + ju, Eu[1] + su]) - uu) / Uu;
                fu = new(Zu())({
                  shape: [Cu, Cu],
                  minDistance: uu,
                  maxDistance: Eu,
                  tries: 10,
                  distanceFunction: lu
                }, qu)
              }
              Uu = fu.fill().map((uu => [Math.floor(ju + uu[0]), Math.floor(su + uu[1])]))
            }
            if (this.useIsPoint) {
              qu = new Set;
              for (const uu of Uu) qu.add((0, lu.f)(uu[0], uu[1]))
            }
            return {
              pointsSet: qu,
              points: this.useKthClosestPoint ? Uu : null
            }
          }
        }
      },
      40067: (uu, Eu, ju) => {
        ju.r(Eu), ju.d(Eu, {
          WorldGenerator: () => AE
        });
        var su = ju(39963),
          Uu = ju(39995),
          Zu = ju(39974),
          Xu = ju(39969),
          lu = ju(38123),
          qu = ju(40065),
          fu = ju(619),
          Cu = ju(649),
          bu = ju(39448),
          cu = ju(4432);
        let Nu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto.getRandomValues(new Uint8Array(uu)).reduce(((uu, Eu) => uu += (Eu &= 63) < 36 ? Eu.toString(36) : Eu < 62 ? (Eu - 26).toString(36).toUpperCase() : Eu > 62 ? "-" : "_"), "")
        };
        class Ou {
          constructor(uu) {
            this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(uu).map((uu => {
              let [Eu, ju] = uu;
              const su = ju.name;
              return void 0 !== Yu[su] ? [Eu, su] : [Eu, su.split(" ").at(-1)]
            })))
          }
          getPossibleEnchantmentsForItem(uu) {
            var Eu;
            return null !== (Eu = Yu[this.suffixMapping[uu]]) && void 0 !== Eu ? Eu : []
          }
          chooseRandomEnchantmentAttributes(uu, Eu, ju) {
            const su = [...ju],
              Uu = {
                enchantments: {},
                enchantmentTier: Eu,
                id: Nu()
              },
              Zu = hu[Eu];
            for (let lu = 0; lu < Zu; lu++) {
              var Xu;
              if (0 === su.length) {
                console.warn("Ran out of enchantments to choose from");
                break
              }
              const {
                enchantments: Eu
              } = Uu, ju = su[Math.floor(uu.next() * su.length)];
              Eu[ju] = (null !== (Xu = Eu[ju]) && void 0 !== Xu ? Xu : 0) + 1, Eu[ju] >= Du && su.splice(su.indexOf(ju), 1)
            }
            return Uu
          }
        }
        const Yu = {
            Sword: ["Damage", "Attack Speed", "Critical Damage"],
            Spear: ["Damage", "Attack Speed", "Critical Damage"],
            Dagger: ["Damage", "Attack Speed", "Critical Damage"],
            Mace: ["Damage", "Attack Speed", "Critical Damage"],
            Whip: ["Damage", "Attack Speed", "Critical Damage"],
            Helmet: ["Protection", "Health", "Health Regen"],
            Chestplate: ["Protection", "Health", "Health Regen"],
            Leggings: ["Protection", "Health", "Health Regen"],
            Boots: ["Protection", "Health", "Health Regen"],
            Gauntlets: ["Protection", "Health", "Health Regen"],
            Bow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
            Crossbow: ["Arrow Speed", "Arrow Damage", "Quick Charge"],
            Pickaxe: ["Break Speed", "Momentum", "Mining Yield", "Mining Aura"],
            Spade: ["Break Speed", "Momentum", "Digging Aura"],
            Axe: ["Break Speed", "Momentum", "Lumber Aura"],
            Hoe: ["Break Speed", "Momentum", "Farming Yield", "Farming Aura"],
            Glider: ["Firecracker Cooldown", "Firecracker Boost", "Gliding Speed"],
            "Knight Sword": ["Damage", "Attack Speed", "Critical Damage", "Horizontal Knockback"],
            "Moonstone Pickaxe": ["Break Speed", "Momentum"],
            Stick: ["Horizontal Knockback", "Vertical Knockback", "Damage"],
            "Fur Chestplate": ["Protection", "Health", "Health Regen", "Knockback Resist"],
            "Spiked Boots": ["Protection", "Health", "Health Regen", "Stomp Damage"]
          },
          hu = {
            "Tier 1": 1,
            "Tier 2": 2,
            "Tier 3": 3,
            "Tier 4": 4,
            "Tier 5": 5
          },
          Du = 3;
        const gu = [0, 90, 180, 270],
          Mu = /^(meta\|rot\d)\|([lrud]+)$/,
          eu = "nesw",
          Gu = /^meta\|([nesw]*)\|?(Stacked)?$/,
          pu = function(uu) {
            const Eu = new WeakMap;
            return (ju, su) => {
              let Uu = Eu.get(ju);
              return void 0 === Uu && (Uu = uu(ju, su), Eu.set(ju, Uu)), Uu
            }
          }((uu => new wu(uu)));
        class wu {
          constructor(uu) {
            this.blockMetadata = uu, this.blockIdMappings = new Map, this.maxBlockId = void 0;
            const Eu = new Set(Object.keys(uu).map((Eu => uu[Eu].id)));
            Eu.add(0), this.maxBlockId = Math.max(...Eu)
          }
          static
          for (uu) {
            return pu(uu)
          }
          getBlockIdMapping(uu, Eu) {
            const ju = this.getBlockIdMappingKey(uu, Eu);
            let su = this.blockIdMappings.get(ju);
            return void 0 === su && gu.includes(uu) && (su = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, uu, Eu), this.blockIdMappings.set(ju, su)), su
          }
          turnBlockId(uu, Eu, ju) {
            return this.mapBlockId(this.blockMetadata[uu], Eu, this.getRotationMapping(Eu, ju), ju)
          }
          getBlockIdMappingKey(uu, Eu) {
            return `r${uu}|m${Number(Eu)}`
          }
          createBlockIdMapping(uu, Eu, ju, su) {
            const Uu = new Uint16Array(Eu + 1),
              Zu = this.getRotationMapping(ju, su);
            for (const Xu in uu) {
              const Eu = uu[Xu];
              Uu[Eu.id] = this.mapBlockId(Eu, ju, Zu, su)
            }
            return Uu
          }
          getRotationMapping(uu, Eu) {
            const ju = Math.round(uu / 90),
              su = new Uint8Array(4);
            for (let Uu = 0; Uu < 4; Uu++) su[Uu] = (4 + Uu - ju) % 4;
            if (Eu) {
              let uu = su[0];
              su[0] = su[1], su[1] = uu, uu = su[2], su[2] = su[3], su[3] = uu
            }
            return su
          }
          mapBlockId(uu, Eu, ju, su) {
            var Uu;
            const {
              blockMetadata: Zu
            } = this, Xu = Math.round(Eu / 90), {
              id: lu,
              meta: qu
            } = uu, {
              rot: fu,
              rootName: Cu,
              metaStr: bu
            } = qu;
            let cu;
            const [, Nu, Ou] = null !== (Uu = Gu.exec(bu)) && void 0 !== Uu ? Uu : [];
            if (void 0 !== Nu) {
              var Yu, hu;
              cu = null !== (Yu = null === (hu = Zu[`${Cu}|meta|${[eu.split("").filter(((uu,Eu)=>Nu.split("").some((uu=>{const ju=eu.indexOf(uu);return((su?3-ju:ju)+Xu)%4===Eu})))).join(""),Ou].filter(Boolean).join("|")}`]) || void 0 === hu ? void 0 : hu.id) && void 0 !== Yu ? Yu : lu
            } else if (null === fu) cu = lu;
            else {
              var Du, gu;
              const uu = ju[fu - 1] + 1;
              let Eu = bu.replace(`rot${fu}`, `rot${uu}`);
              su && qu.stairsCorner && (Eu = Eu.replace(/(Left|Right)$/, (uu => "Left" === uu ? "Right" : "Left"))), su && "Chest" === Cu && (Eu = Eu.replace(/\|(left|right)$/, ((uu, Eu) => "left" === Eu ? "|right" : "|left")));
              const Uu = Mu.exec(Eu);
              if (su && null !== Uu) {
                const uu = "lrud".split("").filter((uu => Uu[2].includes("l" === uu ? "r" : "r" === uu ? "l" : uu)));
                Eu = `${Uu[1]}|${uu.join("")}`
              }
              const Xu = `${Cu}|${Eu}`;
              if (cu = null !== (Du = null === (gu = Zu[Xu]) || void 0 === gu ? void 0 : gu.id) && void 0 !== Du ? Du : null, null === cu) {
                const uu = Zu[Cu];
                cu = uu.rootMetaDesc === Xu ? uu.id : lu
              }
            }
            return cu
          }
        }
        var Ju = ju(2976),
          du = ju.n(Ju),
          au = ju(39981);

        function Pu(uu, Eu, ju, su, Uu) {
          for (let lu = 0; lu < ju.numCaveTypes; lu++) {
            if (su && 0 !== ju.caveTypeToBlockIds[lu]) continue;
            const qu = ju.getOrGenerate(uu, Eu, lu, Zu.d.FloorY);
            if (qu === Xu.q) continue;
            ku(Uu, qu, ju.getOrGenerate(uu, Eu, lu, Zu.d.CeilingY))
          }
        }

        function ou(uu, Eu, ju, su) {
          const Uu = [];
          return Pu(uu, Eu, ju, su, Uu), Uu
        }

        function ku(uu, Eu, ju) {
          let su = 0;
          for (; su < uu.length;) {
            const Uu = uu[su];
            if (Eu > Uu.ceilingY) break;
            ju < Uu.floorY ? su++ : (Eu = Math.min(Uu.floorY, Eu), ju = Math.max(Uu.ceilingY, ju), uu.splice(su, 1))
          }
          uu.splice(su, 0, {
            floorY: Eu,
            ceilingY: ju
          })
        }
        const mu = new cu.d([{
            value: 0,
            weight: 1
          }, {
            value: 90,
            weight: 1
          }, {
            value: 180,
            weight: 1
          }, {
            value: 270,
            weight: 1
          }]),
          vu = new cu.d([{
            value: !1,
            weight: 1
          }, {
            value: !0,
            weight: 1
          }]);
        let Ku, Vu = function(uu) {
          return uu[uu.GUARANTEED_AIR = -1] = "GUARANTEED_AIR", uu
        }({});
        const ru = new cu.d(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((uu => ({
          value: uu,
          weight: 1
        }))));
        class Qu {
          constructor(uu) {
            this.mobType = uu
          }
          sample(uu) {
            const Eu = `${ru.sample(uu)} ${this.mobType}`;
            return {
              customDisplayName: Eu,
              customAttributes: {
                mobSettings: {
                  name: Eu
                }
              }
            }
          }
        }
        class iu {
          constructor(uu) {
            this.itemCategoryDistributions = void 0, this.shouldEnchantDistribution = void 0, this.enchantmentTier = void 0;
            const Eu = [];
            for (const su of uu.itemCategories) {
              const uu = new cu.i(su.minItems, su.maxItems + 1),
                Uu = [];
              for (const Eu of su.items) {
                var ju;
                const uu = Eu.amount ? new cu.i(Eu.amount.min, Eu.amount.max + 1) : null,
                  su = null !== (ju = Eu.itemAttributesDistribution) && void 0 !== ju ? ju : null;
                Uu.push({
                  weight: Eu.frequency,
                  value: {
                    name: Eu.name,
                    amountDistribution: uu,
                    attributesDistribution: su
                  }
                })
              }
              const Zu = new cu.d(Uu);
              Eu.push({
                numItemsDistribution: uu,
                itemDistribution: Zu
              })
            }
            this.itemCategoryDistributions = Eu, this.shouldEnchantDistribution = new cu.b(uu.enchantmentProbability), this.enchantmentTier = uu.enchantmentTier
          }
          sample(uu) {
            const Eu = Array(Cu.l).fill(null);
            let ju = 0;
            for (const fu of this.itemCategoryDistributions) {
              const Cu = fu.numItemsDistribution.sample(uu);
              for (let bu = 0; bu < Cu; bu++, ju++) {
                var su, Uu, Zu, Xu, lu, qu;
                const Cu = fu.itemDistribution.sample(uu),
                  bu = Cu.name,
                  cu = null !== (su = null === (Uu = Cu.amountDistribution) || void 0 === Uu ? void 0 : Uu.sample(uu)) && void 0 !== su ? su : null,
                  Nu = null !== (Zu = null === (Xu = Cu.attributesDistribution) || void 0 === Xu ? void 0 : Xu.sample(uu)) && void 0 !== Zu ? Zu : {},
                  Ou = null !== (lu = this.getEnchantmentAttributesForItem(uu, bu)) && void 0 !== lu ? lu : {};
                Eu[ju] = {
                  name: bu,
                  amount: cu,
                  attributes: {
                    ...Nu,
                    customAttributes: {
                      ...null !== (qu = Nu.customAttributes) && void 0 !== qu ? qu : {},
                      ...Ou
                    }
                  }
                }
              }
            }
            return (0, cu.o)(Eu, uu), Eu
          }
          getEnchantmentAttributesForItem(uu, Eu) {
            if (!this.shouldEnchantDistribution.sample(uu)) return null;
            const ju = Ku.getPossibleEnchantmentsForItem(Eu);
            return 0 === ju.length ? null : Ku.chooseRandomEnchantmentAttributes(uu, this.enchantmentTier, ju)
          }
        }

        function Wu(uu, Eu) {
          let ju = 0;
          for (const Zu of uu) ju += Zu.frequency;
          const su = Eu / ju,
            Uu = [];
          for (const Zu of uu) Uu.push({
            ...Zu,
            frequency: Zu.frequency * su
          });
          return Uu
        }
        var Su = function(uu) {
          return uu.WOOD = "Wood", uu.STONE = "Stone", uu.IRON = "Iron", uu.GOLD = "Gold", uu.DIAMOND = "Diamond", uu
        }(Su || {});
        const Iu = {
            name: "Coal",
            frequency: 1,
            amount: {
              min: 5,
              max: 15
            }
          },
          Fu = {
            name: "Iron Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          Bu = {
            name: "Gold Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          Lu = {
            name: "Diamond",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          },
          tu = {
            name: "Spirit Saddle",
            frequency: .5,
            amount: null
          };

        function xu(uu) {
          return Wu([{
            name: "Aura XP Potion",
            frequency: 4,
            amount: null
          }, {
            name: "Aura XP Potion II",
            frequency: 1,
            amount: null
          }], uu)
        }

        function Tu(uu) {
          return Wu([...Wu([{
            name: "Wheat",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          }, {
            name: "Wheat Seeds",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          }, {
            name: "Bone Meal",
            frequency: 1,
            amount: {
              min: 4,
              max: 9
            }
          }], 4), ...Wu([{
            name: "Leather",
            frequency: 2,
            amount: {
              min: 2,
              max: 4
            }
          }, {
            name: "Rotten Flesh",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          }, {
            name: "Rotten Brain",
            frequency: 1,
            amount: {
              min: 1,
              max: 3
            }
          }], 2), ...Wu([{
            name: "Firecracker",
            frequency: 1,
            amount: {
              min: 10,
              max: 20
            }
          }, {
            name: "Firecracker Pebble",
            frequency: 1,
            amount: {
              min: 10,
              max: 20
            }
          }, {
            name: "Net",
            frequency: 2,
            amount: {
              min: 4,
              max: 9
            }
          }], 1), ...Wu([{
            name: "Saddle",
            frequency: 4,
            amount: null
          }, {
            name: "Mob Catcher",
            frequency: 4,
            amount: null
          }, {
            name: "Name Tag",
            frequency: 2,
            amount: null
          }, {
            name: "Bucket",
            frequency: 1,
            amount: null
          }, {
            name: "Chaos Potion",
            frequency: 1,
            amount: null
          }], 2)], uu)
        }

        function Hu(uu) {
          const Eu = {
              min: 2,
              max: 4
            },
            ju = [{
              name: "Carrot",
              frequency: 1,
              amount: Eu
            }, {
              name: "Raw Potato",
              frequency: 1,
              amount: Eu
            }, {
              name: "Beetroot",
              frequency: 1,
              amount: Eu
            }];
          return Wu([...Wu([{
            name: "Apple",
            frequency: 1,
            amount: Eu
          }, {
            name: "Bowl of Rice",
            frequency: 1,
            amount: null
          }, {
            name: "Bread",
            frequency: 1,
            amount: Eu
          }, {
            name: "Cherry",
            frequency: 1,
            amount: Eu
          }, {
            name: "Bowl of Cranberries",
            frequency: 1,
            amount: null
          }, {
            name: "Mushroom Soup",
            frequency: 1,
            amount: null
          }, {
            name: "Pear",
            frequency: 1,
            amount: Eu
          }, {
            name: "Plum",
            frequency: 1,
            amount: Eu
          }, {
            name: "Pumpkin Pie",
            frequency: 1,
            amount: Eu
          }], 2), ...Wu(ju, 1)], uu)
        }

        function Au(uu) {
          return Wu([{
            name: "Stone",
            frequency: 1,
            amount: {
              min: 40,
              max: 80
            }
          }, {
            name: "Maple Log",
            frequency: 1,
            amount: {
              min: 10,
              max: 20
            }
          }, {
            name: "Bricks",
            frequency: .5,
            amount: {
              min: 15,
              max: 40
            }
          }, {
            name: "Chalk",
            frequency: .5,
            amount: {
              min: 15,
              max: 40
            }
          }], uu)
        }

        function nu(uu) {
          const Eu = [
              ["White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete"],
              ["Green Glass", "White Glass", "Light Gray Glass", "Gray Glass", "Black Glass", "Brown Glass", "Red Glass", "Orange Glass", "Yellow Glass", "Lime Glass", "Cyan Glass", "Light Blue Glass", "Blue Glass", "Purple Glass", "Magenta Glass", "Pink Glass"],
              ["Patterned Green Glass", "Patterned White Glass", "Patterned Light Gray Glass", "Patterned Gray Glass", "Patterned Black Glass", "Patterned Brown Glass", "Patterned Red Glass", "Patterned Orange Glass", "Patterned Yellow Glass", "Patterned Lime Glass", "Patterned Cyan Glass", "Patterned Light Blue Glass", "Patterned Blue Glass", "Patterned Purple Glass", "Patterned Magenta Glass", "Patterned Pink Glass"],
              ["White Baked Clay", "Orange Baked Clay", "Magenta Baked Clay", "Light Blue Baked Clay", "Yellow Baked Clay", "Lime Baked Clay", "Pink Baked Clay", "Gray Baked Clay", "Light Gray Baked Clay", "Cyan Baked Clay", "Purple Baked Clay", "Blue Baked Clay", "Brown Baked Clay", "Green Baked Clay", "Red Baked Clay", "Black Baked Clay"],
              ["White Ceramic", "Orange Ceramic", "Magenta Ceramic", "Light Blue Ceramic", "Yellow Ceramic", "Lime Ceramic", "Pink Ceramic", "Gray Ceramic", "Light Gray Ceramic", "Cyan Ceramic", "Purple Ceramic", "Blue Ceramic", "Brown Ceramic", "Green Ceramic", "Red Ceramic", "Black Ceramic"],
              ["Stone Bricks", "Engraved Stone", "Mossy Stone Bricks", "Cracked Stone Bricks", "Mossy Messy Stone", "Compressed Messy Stone", "Extra Compressed Messy Stone", "Smooth Sandstone", "Engraved Sandstone", "Marked Sandstone", "Sandstone Bricks", "Smooth Red Sandstone", "Engraved Red Sandstone", "Marked Red Sandstone", "Red Sandstone Bricks", "Engraved Diorite", "Diorite Bricks", "Engraved Andesite", "Andesite Bricks", "Engraved Granite", "Granite Bricks", "Ice Bricks", "Dark Red Stone", "Dark Red Brick"],
              ["White Chalk", "Orange Chalk", "Magenta Chalk", "Light Blue Chalk", "Yellow Chalk", "Lime Chalk", "Pink Chalk", "Gray Chalk", "Light Gray Chalk", "Cyan Chalk", "Purple Chalk", "Blue Chalk", "Brown Chalk", "Green Chalk", "Red Chalk", "Black Chalk"]
            ],
            ju = [];
          for (const Zu of Eu) {
            const uu = [];
            for (const Eu of Zu) uu.push({
              name: Eu,
              frequency: 1,
              amount: {
                min: 10,
                max: 25
              }
            });
            ju.push(...Wu(uu, 1))
          }
          const su = ["Super Compressed Messy Stone", "Hyper Compressed Messy Stone", "Ultra Compressed Messy Stone"],
            Uu = [];
          for (const Zu of su) Uu.push({
            name: Zu,
            frequency: 1,
            amount: {
              min: 1,
              max: 1
            }
          });
          return [...Wu(ju, .999 * uu), ...Wu(Uu, .001 * uu)]
        }

        function yu(uu, Eu) {
          return Wu([{
            name: `${uu} Pickaxe`,
            frequency: 1,
            amount: null
          }, {
            name: `${uu} Axe`,
            frequency: .9,
            amount: null
          }, {
            name: `${uu} Spade`,
            frequency: .7,
            amount: null
          }, {
            name: `${uu} Hoe`,
            frequency: .2,
            amount: null
          }], Eu)
        }

        function zu(uu, Eu) {
          if (Eu < 0 || Eu > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${Eu}`);
          const ju = [{
              name: "Arrow",
              frequency: 1 - Eu,
              amount: {
                min: 15,
                max: 25
              }
            }],
            su = ["Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Instant Damage"],
            Uu = [];
          for (const Zu of su) Uu.push({
            name: Zu,
            frequency: 1,
            amount: {
              min: 10,
              max: 15
            }
          });
          return ju.push(...Wu(Uu, Eu)), Wu(ju, uu)
        }

        function Ru(uu, Eu) {
          return Wu([{
            name: `${uu} Sword`,
            frequency: .75,
            amount: null
          }, {
            name: `${uu} Bow`,
            frequency: .6,
            amount: null
          }, {
            name: `${uu} Crossbow`,
            frequency: .15,
            amount: null
          }, ...zu(1, {
            [Su.WOOD]: .05,
            [Su.STONE]: .1,
            [Su.IRON]: .3,
            [Su.GOLD]: .5,
            [Su.DIAMOND]: .7
          } [uu])], Eu)
        }

        function uE(uu, Eu) {
          if (uu === Su.STONE) throw new Error(`${uu} armour is not supported`);
          const ju = [{
              name: `${uu} Helmet`,
              frequency: 1,
              amount: null
            }, {
              name: `${uu} Chestplate`,
              frequency: 1,
              amount: null
            }, {
              name: `${uu} Gauntlets`,
              frequency: 1,
              amount: null
            }, {
              name: `${uu} Leggings`,
              frequency: 1,
              amount: null
            }, {
              name: `${uu} Boots`,
              frequency: 1,
              amount: null
            }],
            su = [...Ru(uu, 1), ...Wu(ju, 1.5)];
          return Wu(su, Eu)
        }
        const EE = {
          [Cu.h.COMMON]: new iu({
            enchantmentTier: "Tier 1",
            enchantmentProbability: 1,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: xu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Tu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Hu(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: Au(1)
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...yu(Su.WOOD, 1), ...yu(Su.STONE, 1), ...uE(Su.WOOD, 1), ...Ru(Su.STONE, 1)]
            }, {
              minItems: 1,
              maxItems: 2,
              items: [Iu]
            }]
          }),
          [Cu.h.UNCOMMON]: new iu({
            enchantmentTier: "Tier 2",
            enchantmentProbability: .9,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: xu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Tu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Hu(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...Au(2), ...nu(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...yu(Su.STONE, 1), ...yu(Su.IRON, 1), ...Ru(Su.STONE, 1), ...uE(Su.IRON, 1)]
            }, {
              minItems: 2,
              maxItems: 3,
              items: [Iu, Fu]
            }]
          }),
          [Cu.h.RARE]: new iu({
            enchantmentTier: "Tier 3",
            enchantmentProbability: .75,
            itemCategories: [{
              minItems: 2,
              maxItems: 3,
              items: xu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Tu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Hu(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...nu(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...yu(Su.IRON, 1), ...yu(Su.GOLD, 1), ...uE(Su.IRON, 1), ...uE(Su.GOLD, 1)]
            }, {
              minItems: 2,
              maxItems: 4,
              items: [Iu, Fu, Bu, tu]
            }]
          }),
          [Cu.h.EPIC]: new iu({
            enchantmentTier: "Tier 4",
            enchantmentProbability: .6,
            itemCategories: [{
              minItems: 3,
              maxItems: 4,
              items: xu(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: Tu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Hu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...nu(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...yu(Su.GOLD, 1), ...yu(Su.DIAMOND, 1), ...uE(Su.GOLD, 1), ...uE(Su.DIAMOND, 1), ...Wu([{
                name: "Fur Chestplate",
                frequency: 1,
                amount: null
              }, {
                name: "Spiked Boots",
                frequency: 1,
                amount: null
              }], 1)]
            }, {
              minItems: 2,
              maxItems: 3,
              items: [Bu, Lu, tu]
            }]
          }),
          [Cu.h.LEGENDARY]: new iu({
            enchantmentTier: "Tier 5",
            enchantmentProbability: .5,
            itemCategories: [{
              minItems: 4,
              maxItems: 5,
              items: xu(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...nu(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...yu(Su.DIAMOND, 1), ...uE(Su.DIAMOND, 2), ...Wu([{
                name: "Knight Sword",
                frequency: 2,
                amount: null
              }, {
                name: "Golem Pickaxe",
                frequency: 2,
                amount: null
              }, {
                name: "Moonstone Pickaxe",
                frequency: 2,
                amount: null
              }, {
                name: "Moonstone Axe",
                frequency: 1,
                amount: null
              }, {
                name: "Fur Chestplate",
                frequency: 1,
                amount: null
              }, {
                name: "Spiked Boots",
                frequency: 1,
                amount: null
              }], 1)]
            }, {
              minItems: 4,
              maxItems: 5,
              items: [Bu, Lu, {
                name: "Moonstone",
                frequency: 1,
                amount: {
                  min: 2,
                  max: 4
                }
              }, tu]
            }, {
              minItems: 1,
              maxItems: 1,
              items: (jE = 1, Wu([{
                name: "Caught Mob Spirit_Golem Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Qu("Spirit Golem")
              }, {
                name: "Caught Mob Spirit_Wolf Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Qu("Spirit Wolf")
              }, {
                name: "Caught Mob Spirit_Bear Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Qu("Spirit Bear")
              }, {
                name: "Caught Mob Spirit_Stag Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Qu("Spirit Stag")
              }, {
                name: "Caught Mob Spirit_Gorilla Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Qu("Spirit Gorilla")
              }], jE))
            }, {
              minItems: 2,
              maxItems: 3,
              items: function(uu) {
                return Wu([{
                  name: "Moonstone Explosive",
                  frequency: 2,
                  amount: {
                    min: 2,
                    max: 4
                  }
                }, {
                  name: "Fireball",
                  frequency: 1,
                  amount: {
                    min: 4,
                    max: 9
                  }
                }, {
                  name: "Iceball",
                  frequency: 1,
                  amount: {
                    min: 4,
                    max: 9
                  }
                }, {
                  name: "Bouncy Bomb",
                  frequency: 1,
                  amount: {
                    min: 4,
                    max: 9
                  }
                }], uu)
              }(1)
            }]
          })
        };
        var jE;
        class sE {
          constructor(uu, Eu, ju, su, Uu, Zu) {
            this.lootChestBlockId = uu, this.seed = Eu, this.x = ju, this.y = su, this.z = Uu, this.chestQuality = Zu, this.lootChestInventoryDistribution = void 0, this.lootChestInventoryDistribution = EE[Zu]
          }
          getBlockId() {
            return this.lootChestBlockId
          }
          generate() {
            const uu = new cu.f(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
              Eu = this.lootChestInventoryDistribution.sample(uu);
            return {
              data: {
                persisted: {
                  chestStr: (0, Cu.A)(Eu),
                  lootQuality: this.chestQuality
                }
              },
              persisted: !0
            }
          }
        }
        class UE {
          constructor(uu) {
            this.seed = void 0, this.hO = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
            const {
              seed: Eu,
              hO: ju,
              blockMetadata: su,
              itemMetadata: Xu,
              prefabSize: lu,
              typeSettings: qu
            } = uu;
            UE.BLOCK_ID_MAPPINGS || (UE.BLOCK_ID_MAPPINGS = new wu(su)), Ku || (Ku = new Ou(Xu)), this.seed = Eu, this.hO = ju, this.invisibleSolidBlockId = su["Invisible Solid"].id, this.emptySpawnerBlockId = su["Empty Spawner Block"].id, this.chestToLootChestBlockId = new fu.e({
              [su.Chest.id]: su["Loot Chest"].id,
              [su["Chest|meta|rot2"].id]: su["Loot Chest|meta|rot2"].id,
              [su["Chest|meta|rot3"].id]: su["Loot Chest|meta|rot3"].id,
              [su["Chest|meta|rot4"].id]: su["Loot Chest|meta|rot4"].id
            }, "number");
            const Cu = {};
            for (const Uu of Zu.s) Cu[Uu] = su[`${Uu} Spawner Block`].id;
            this.mobTypeToSpawnerBlockId = Cu, this.defaultSpawnerBlockId = this.mobTypeToSpawnerBlockId[UE.DEFAULT_MOB_TYPE], this.prefabRadius = Math.ceil(lu / 2);
            const bu = {};
            for (const Zu in qu) {
              const uu = Number(Zu);
              bu[uu] = {};
              const {
                densitySettings: su
              } = qu[uu];
              for (const Zu in su) {
                const Xu = Number(Zu),
                  lu = su[Xu];
                let qu = null;
                if (null !== lu) {
                  const su = Math.ceil(400 / lu.minDistanceBetweenPrefabs);
                  qu = new Uu.b(`prefab|${uu}|${Xu}`, lu.minDistanceBetweenPrefabs, !1, !0, Eu, su, ju, null, !0)
                }
                bu[uu][Xu] = qu
              }
            }
            this.prefabCentrePointGeneratorPerDensityPerType = bu
          }
          static isWithinPrefabClearing(uu, Eu, ju) {
            for (const su of ju) {
              if ((uu - su.centreX) ** 2 + (Eu - su.centreZ) ** 2 < su.prefab.clearingRadiusSquared) return !0
            }
            return !1
          }
          prefabRandomAt(uu, Eu) {
            return new cu.f(`${uu}|${Eu}|${this.seed}|prefabGenerator`)
          }
          getLootPrefabCentres(uu, Eu, ju, su, Uu) {
            const Zu = [];
            for (const Xu in this.prefabCentrePointGeneratorPerDensityPerType) {
              const lu = Number(Xu),
                qu = this.prefabCentrePointGeneratorPerDensityPerType[lu];
              for (const Xu in qu) {
                const fu = Number(Xu),
                  Cu = qu[fu];
                if (null === Cu) continue;
                const bu = Cu.gridSize;
                for (let Xu = Math.floor(uu / bu); Xu <= Math.floor((ju - 1) / bu); Xu++)
                  for (let qu = Math.floor(Eu / bu); qu <= Math.floor((su - 1) / bu); qu++)
                    for (const [bu, cu] of Cu.getCell(Xu, qu).points) {
                      if (bu < uu || bu >= ju || cu < Eu || cu >= su) continue;
                      const Xu = Uu.generate(bu, cu)[0].biome.getRandomPrefab(this.prefabRandomAt(bu, cu), lu, fu);
                      null !== Xu && Xu.chestLocations.length > 0 && Zu.push({
                        x: bu,
                        z: cu,
                        prefab: Xu
                      })
                    }
              }
            }
            return Zu
          }
          getPrefabsForChunk(uu, Eu, ju, su, Uu, Xu, lu) {
            const qu = [],
              fu = this.hO >> 1,
              Cu = uu - this.prefabRadius,
              cu = uu + this.hO + this.prefabRadius,
              Nu = Eu - this.prefabRadius,
              Ou = Eu + this.hO + this.prefabRadius;
            for (const Yu in this.prefabCentrePointGeneratorPerDensityPerType) {
              const hu = Number(Yu),
                Du = this.prefabCentrePointGeneratorPerDensityPerType[hu];
              for (const Yu in Du) {
                const gu = Number(Yu),
                  Mu = Du[gu];
                if (null === Mu) continue;
                if (hu === Zu.p.SURFACE && gu === Zu.n.VERY_HIGH && !lu.regionMayHaveVeryHighSurfacePrefabs(Cu, Nu, cu, Ou)) continue;
                const eu = Mu.getPointsAroundPoint(uu + fu, Eu + fu);
                for (const uu of eu) {
                  const Eu = uu[0],
                    lu = uu[1];
                  if (Eu < Cu || Eu >= cu || lu < Nu || lu >= Ou) continue;
                  const fu = su.getOrGenerate(Eu, lu)[0].biome,
                    Yu = this.prefabRandomAt(Eu, lu),
                    Du = fu.getRandomPrefab(Yu, hu, gu);
                  if (null === Du) continue;
                  if (hu === Zu.p.SURFACE && !fu.canPlaceSurfacePrefab(Eu, lu)) continue;
                  const Mu = Du.transformationsEnabled ? mu.sample(Yu) : 0,
                    eu = !!Du.transformationsEnabled && vu.sample(Yu);
                  let Gu = null,
                    pu = null,
                    wu = eu;
                  switch (Mu) {
                    case 0:
                      break;
                    case 90:
                      Gu = Du.dimensionX - 1, wu = !wu;
                      break;
                    case 180:
                      Gu = Du.dimensionX - 1, pu = Du.dimensionZ - 1;
                      break;
                    case 270:
                      pu = Du.dimensionZ - 1, wu = !wu;
                      break;
                    default:
                      console.error(`Invalid prefab rotation: ${Mu}`)
                  }
                  const Ju = {
                      centreX: Eu,
                      centreZ: lu,
                      anchorX: Eu - (Du.dimensionX >> 1),
                      anchorZ: lu - (Du.dimensionZ >> 1),
                      prefab: Du,
                      xRotationOffset: Gu,
                      zRotationOffset: pu,
                      shouldSwapXZ: wu
                    },
                    {
                      anchorY: du,
                      isOnSolidGround: au
                    } = this.getPrefabGroundingInfo(Ju, Yu, ju, Uu, Xu);
                  if (!au) continue;
                  if (hu === Zu.p.SURFACE && null !== fu.maxSurfacePrefabRelief) {
                    const uu = Ju.shouldSwapXZ ? Du.dimensionZ : Du.dimensionX,
                      su = Ju.shouldSwapXZ ? Du.dimensionX : Du.dimensionZ;
                    if (UE.footprintRelief(Eu, lu, uu, su, ju) > fu.maxSurfacePrefabRelief) continue
                  }
                  const Pu = Math.ceil(Math.sqrt(Du.dimensionX * Du.dimensionX + Du.dimensionZ * Du.dimensionZ) / 2);
                  if (!fu.allowsPrefab(Eu, lu, Pu, du, du + Du.dimensionY - 1)) continue;
                  const ou = new bu.d;
                  for (const uu of Du.chestLocations) {
                    const Eu = lE(Ju, uu.localX, uu.localZ),
                      ju = qE(Ju, uu.localX, uu.localZ),
                      su = du + uu.localY,
                      Uu = uu.qualityDistribution.sample(Yu);
                    ou.set(Eu, su, ju, Uu)
                  }
                  const ku = new bu.d;
                  for (const uu of Du.spawnerBlockLocations) {
                    const Eu = lE(Ju, uu.localX, uu.localZ),
                      ju = qE(Ju, uu.localX, uu.localZ),
                      su = du + uu.localY,
                      Uu = uu.mobTypeDistribution.sample(Yu),
                      Zu = this.mobTypeToSpawnerBlockId[Uu];
                    ku.set(Eu, su, ju, Zu)
                  }
                  let Ku = null;
                  (0 !== Mu || eu) && (Ku = UE.BLOCK_ID_MAPPINGS.getBlockIdMapping(Mu, eu)), qu.push({
                    ...Ju,
                    anchorY: du,
                    chestLocationToQuality: ou,
                    spawnerBlockLocationToBlockId: ku,
                    blockIdMapping: Ku,
                    decodedPrefabSchematic: this.getDecodedPrefabSchematic(Du)
                  })
                }
              }
            }
            return qu
          }
          static footprintRelief(uu, Eu, ju, su, Uu) {
            let Xu = 1 / 0,
              lu = -1 / 0;
            const qu = ju >> 1,
              fu = su >> 1;
            for (let Cu = -qu; Cu <= qu; Cu += Math.max(1, qu))
              for (let ju = -fu; ju <= fu; ju += Math.max(1, fu)) {
                const su = Uu.getOrGenerate(uu + Cu, Eu + ju, Zu.h.GroundHeight);
                Xu = Math.min(Xu, su), lu = Math.max(lu, su)
              }
            return lu - Xu
          }
          getPrefabGroundingInfo(uu, Eu, ju, su, Uu) {
            const Zu = uu.prefab,
              Xu = uu.centreX,
              lu = uu.centreZ,
              qu = [];
            if ("centre" === Zu.groundingPoints) qu.push([Xu, lu]);
            else
              for (const bu of Zu.groundingPoints) {
                const Eu = lE(uu, bu.localX, bu.localZ),
                  ju = qE(uu, bu.localX, bu.localZ);
                qu.push([Eu, ju])
              }
            let fu;
            const Cu = Zu.undergroundYInterval;
            if (null !== Cu) {
              const {
                ss: uu,
                Us: ju
              } = Cu;
              fu = this.getCaveGroundingInfoFromGroundingPoints(qu, Zu.groundingRadius, Eu, uu, ju, su)
            } else fu = this.getSurfaceGroundingInfoFromGroundingPoints(qu, Zu.groundingRadius, ju, su, Uu);
            return fu.anchorY += Zu.yOffset, fu
          }
          getSurfaceGroundingInfoFromGroundingPoints(uu, Eu, ju, su, Uu) {
            let lu = 1e4;
            for (const fu of uu) {
              const uu = fu[0],
                Cu = fu[1];
              for (let fu = uu - Eu; fu < uu + Eu; fu++)
                for (let uu = Cu - Eu; uu < Cu + Eu; uu++) {
                  if (ju.getOrGenerate(fu, uu, Zu.h.WaterHeight) !== Xu.t) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  const Eu = ju.getOrGenerate(fu, uu, Zu.h.GroundHeight);
                  if (qu.b.isInCave(fu, Eu, uu, su)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  if (au.e.isNearFixedPointPrefab(fu, uu, Uu)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  lu = Math.min(lu, Eu)
                }
            }
            return {
              anchorY: lu,
              isOnSolidGround: !0
            }
          }
          getCaveGroundingInfoFromGroundingPoints(uu, Eu, ju, su, Uu, Zu) {
            const Xu = [];
            for (const qu of uu) {
              const uu = qu[0],
                ju = qu[1];
              for (let su = uu - Eu; su < uu + Eu; su++)
                for (let uu = ju - Eu; uu < ju + Eu; uu++) Pu(su, uu, Zu, !1, Xu)
            }

            function lu(uu, Eu) {
              return Math.floor(ju.next() * (Eu - uu + 1)) + uu
            }
            if (0 === Xu.length) return {
              anchorY: lu(su, Uu),
              isOnSolidGround: !0
            };
            if (function(uu, Eu, ju) {
                for (let su = 0; su < uu.length; su++) {
                  const Uu = uu[su];
                  (Uu.floorY < Eu || Uu.floorY > ju) && (uu.splice(su, 1), su--)
                }
              }(Xu, su, Uu), 0 === Xu.length) return {
              anchorY: -1e4,
              isOnSolidGround: !1
            };
            return {
              anchorY: Xu[lu(0, Xu.length - 1)].floorY,
              isOnSolidGround: !0
            }
          }
          getBlockFromPrefabAtPoint(uu, Eu, ju, su, Uu) {
            var Zu, Xu;
            let lu = this.getPrefabBlock(uu, Eu, ju, su);
            if (0 === lu) return lu;
            var qu;
            if (lu === this.emptySpawnerBlockId && (lu = null !== (qu = su.spawnerBlockLocationToBlockId.get(uu, Eu, ju)) && void 0 !== qu ? qu : this.defaultSpawnerBlockId), lu < 0) return lu;
            if (lu = null !== (Zu = null === (Xu = su.blockIdMapping) || void 0 === Xu ? void 0 : Xu[lu]) && void 0 !== Zu ? Zu : lu, void 0 !== this.chestToLootChestBlockId.reverseGet(lu)) {
              var fu;
              const Zu = null !== (fu = su.chestLocationToQuality.get(uu, Eu, ju)) && void 0 !== fu ? fu : UE.DEFAULT_CHEST_QUALITY,
                Xu = new sE(lu, this.seed, uu, Eu, ju, Zu);
              Uu.set(uu, Eu, ju, Xu)
            }
            return lu
          }
          getPrefabBlock(uu, Eu, ju, su) {
            const Uu = su.prefab,
              Zu = Eu - su.anchorY;
            if (Zu < 0 || Zu >= Uu.dimensionY) return 0;
            const Xu = function(uu, Eu, ju) {
                if (uu.shouldSwapXZ) return XE(uu, ju);
                return ZE(uu, Eu)
              }(su, uu, ju),
              lu = function(uu, Eu, ju) {
                if (uu.shouldSwapXZ) return ZE(uu, Eu);
                return XE(uu, ju)
              }(su, uu, ju);
            return Xu < 0 || Xu >= Uu.dimensionX || lu < 0 || lu >= Uu.dimensionZ ? 0 : su.decodedPrefabSchematic.get(Xu, Zu, lu)
          }
          getDecodedPrefabSchematic(uu) {
            const Eu = UE.DECODED_PREFAB_SCHEMATIC_CACHE.get(uu.schematic);
            if (void 0 !== Eu) return Eu;
            const {
              dimensionX: ju,
              dimensionY: su,
              dimensionZ: Uu
            } = uu, Zu = du()(new Int32Array(ju * su * Uu), [ju, su, Uu]), Xu = new bu.d;
            for (const lu of uu.chestLocations) Xu.set(lu.localX, lu.localY, lu.localZ, !0);
            const qu = new bu.d;
            for (const lu of uu.spawnerBlockLocations) qu.set(lu.localX, lu.localY, lu.localZ, !0);
            for (let fu = 0; fu < ju; fu += Cu.y)
              for (let Eu = 0; Eu < su; Eu += Cu.y)
                for (let bu = 0; bu < Uu; bu += Cu.y) {
                  const cu = du()(new Uint16Array(Cu.y * Cu.y * Cu.y), [Cu.y, Cu.y, Cu.y]),
                    Nu = uu.schematic.getRLEChunk((0, Cu.M)(fu), (0, Cu.M)(Eu), (0, Cu.M)(bu));
                  lu.decode(Nu, cu.data);
                  const Ou = Math.min(Cu.y, ju - fu),
                    Yu = Math.min(Cu.y, su - Eu),
                    hu = Math.min(Cu.y, Uu - bu);
                  for (let ju = 0; ju < Ou; ju++)
                    for (let su = 0; su < Yu; su++)
                      for (let Uu = 0; Uu < hu; Uu++) {
                        let lu = cu.get(ju, su, Uu);
                        const Cu = fu + ju,
                          Nu = Eu + su,
                          Ou = bu + Uu;
                        if (this.invisibleSolidBlockId === lu) lu = Vu.GUARANTEED_AIR;
                        else if (this.emptySpawnerBlockId === lu) qu.get(Cu, Nu, Ou) || console.error(`Empty spawner block found in prefab ${uu.schematic.name} at (${Cu}, ${Nu}, ${Ou}) with no mob type specified. Defaulting to "${UE.DEFAULT_MOB_TYPE}" mob type.`);
                        else {
                          const Eu = this.chestToLootChestBlockId.get(lu);
                          void 0 !== Eu && (Xu.get(Cu, Nu, Ou) || console.error(`Chest found in prefab ${uu.schematic.name} at (${Cu}, ${Nu}, ${Ou}) with no quality specified. Defaulting to "${UE.DEFAULT_CHEST_QUALITY}" quality.`), lu = Eu)
                        }
                        Zu.set(Cu, Nu, Ou, lu)
                      }
                }
            return UE.DECODED_PREFAB_SCHEMATIC_CACHE.set(uu.schematic, Zu), Zu
          }
        }

        function ZE(uu, Eu) {
          let ju = Eu - uu.anchorX;
          return null !== uu.xRotationOffset && (ju = uu.xRotationOffset - ju), ju
        }

        function XE(uu, Eu) {
          let ju = Eu - uu.anchorZ;
          return null !== uu.zRotationOffset && (ju = uu.zRotationOffset - ju), ju
        }

        function lE(uu, Eu, ju) {
          return function(uu, Eu) {
            null !== uu.xRotationOffset && (Eu = uu.xRotationOffset - Eu);
            return Eu + uu.anchorX
          }(uu, uu.shouldSwapXZ ? ju : Eu)
        }

        function qE(uu, Eu, ju) {
          return function(uu, Eu) {
            null !== uu.zRotationOffset && (Eu = uu.zRotationOffset - Eu);
            return Eu + uu.anchorZ
          }(uu, uu.shouldSwapXZ ? Eu : ju)
        }
        UE.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, UE.BLOCK_ID_MAPPINGS = void 0, UE.DEFAULT_MOB_TYPE = "Draugr Zombie", UE.DEFAULT_CHEST_QUALITY = Cu.h.COMMON;
        var fE = function(uu) {
            return uu[uu.STANDARD = 0] = "STANDARD", uu[uu.FRILLED = 1] = "FRILLED", uu[uu.TALL = 2] = "TALL", uu[uu.FLAT = 3] = "FLAT", uu[uu.DROOPY = 4] = "DROOPY", uu
          }(fE || {}),
          CE = function(uu) {
            return uu[uu.TOP = 0] = "TOP", uu[uu.UPPER_MIDDLE = 1] = "UPPER_MIDDLE", uu[uu.MIDDLE = 2] = "MIDDLE", uu[uu.LOWER_MIDDLE = 3] = "LOWER_MIDDLE", uu[uu.BOTTOM = 4] = "BOTTOM", uu
          }(CE || {}),
          bE = function(uu) {
            return uu[uu.CIRCLE = 0] = "CIRCLE", uu[uu.DIAMOND = 1] = "DIAMOND", uu
          }(bE || {}),
          cE = function(uu) {
            return uu[uu.ALWAYS = 0] = "ALWAYS", uu[uu.SOMETIMES = 1] = "SOMETIMES", uu[uu.NEVER = 2] = "NEVER", uu
          }(cE || {});
        class NE {
          static initCanopyGenerationSchemaByShape(uu, Eu, ju, su) {
            return this.initCanopyGenerationSchemaByFunction(ju, ((ju, Uu) => {
              const Zu = su === bE.CIRCLE ? Math.sqrt(ju * ju + Uu * Uu) : Math.max(Math.abs(ju - Uu), Math.abs(ju + Uu));
              return Zu < uu ? cE.ALWAYS : Zu < Eu ? cE.SOMETIMES : cE.NEVER
            }))
          }
          static initCanopyGenerationSchemaByFunction(uu, Eu) {
            const ju = new su.h(2 * uu + 1, [-uu, -uu]);
            for (let su = -uu; su <= uu; su++)
              for (let Uu = -uu; Uu <= uu; Uu++) {
                const uu = Eu(su, Uu);
                ju.set(su, Uu, uu)
              }
            return ju
          }
          constructor(uu, Eu, ju, su, Zu) {
            this.hO = ju, this.seed = su, this.blockMetadata = Zu, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
            const Xu = 1 / 30;
            if (this.treeInfos = {
                [Cu.w.Maple]: {
                  trunkBlockId: Zu["Maple Log"].id,
                  trunkBaseId: Zu["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: Zu["Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Fruity Maple Leaves"].id,
                  canopyType: fE.STANDARD,
                  vineProbability: Xu
                },
                [Cu.w.Pine]: {
                  trunkBlockId: Zu["Pine Log"].id,
                  trunkBaseId: Zu["Pine Log|TreeBase|Pine"].id,
                  canopyLeavesId: Zu["Pine Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Pine Cone Leaves"].id,
                  canopyType: fE.FRILLED,
                  vineProbability: 0,
                  minHeight: 5,
                  maxHeight: 7
                },
                [Cu.w.Plum]: {
                  trunkBlockId: Zu["Plum Log"].id,
                  trunkBaseId: Zu["Plum Log|TreeBase|Plum"].id,
                  canopyLeavesId: Zu["Plum Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Fruity Plum Leaves"].id,
                  canopyType: fE.STANDARD,
                  vineProbability: Xu
                },
                [Cu.w.Cedar]: {
                  trunkBlockId: Zu["Cedar Log"].id,
                  trunkBaseId: Zu["Cedar Log|TreeBase|Cedar"].id,
                  canopyLeavesId: Zu["Cedar Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.STANDARD,
                  vineProbability: Xu
                },
                [Cu.w.Aspen]: {
                  trunkBlockId: Zu["Aspen Log"].id,
                  trunkBaseId: Zu["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: Zu["Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.FRILLED,
                  vineProbability: Xu,
                  minHeight: 5,
                  maxHeight: 6
                },
                [Cu.w.Jungle]: {
                  trunkBlockId: Zu["Jungle Log"].id,
                  trunkBaseId: Zu["Jungle Log|TreeBase|Jungle"].id,
                  canopyLeavesId: Zu["Jungle Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.FLAT,
                  vineProbability: .5,
                  minHeight: 2,
                  maxHeight: 7
                },
                [Cu.w.Palm]: {
                  trunkBlockId: Zu["Palm Log"].id,
                  trunkBaseId: Zu["Palm Log|TreeBase|Palm"].id,
                  canopyLeavesId: Zu["Palm Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Fruity Palm Leaves"].id,
                  canopyType: fE.DROOPY,
                  vineProbability: 1 / 3,
                  minHeight: 4,
                  maxHeight: 6
                },
                [Cu.w.AutumnMaple]: {
                  trunkBlockId: Zu["Maple Log"].id,
                  trunkBaseId: Zu["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: Zu["Autumn Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.STANDARD,
                  vineProbability: Xu
                },
                [Cu.w.Pear]: {
                  trunkBlockId: Zu["Pear Log"].id,
                  trunkBaseId: Zu["Pear Log|TreeBase|Pear"].id,
                  canopyLeavesId: Zu["Pear Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Fruity Pear Leaves"].id,
                  canopyType: fE.TALL,
                  vineProbability: Xu,
                  minHeight: 3,
                  maxHeight: 5
                },
                [Cu.w.Cherry]: {
                  trunkBlockId: Zu["Cherry Log"].id,
                  trunkBaseId: Zu["Cherry Log|TreeBase|Cherry"].id,
                  canopyLeavesId: Zu["Cherry Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Fruity Cherry Leaves"].id,
                  canopyType: fE.DROOPY,
                  vineProbability: 0,
                  minHeight: 4,
                  maxHeight: 6
                },
                [Cu.w.Spectral]: {
                  trunkBlockId: Zu["Spectral Log"].id,
                  trunkBaseId: Zu["Spectral Log|TreeBase|Spectral"].id,
                  canopyLeavesId: Zu["Spectral Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.STANDARD,
                  vineProbability: 0
                },
                [Cu.w.Mango]: {
                  trunkBlockId: Zu["Mango Log"].id,
                  trunkBaseId: Zu["Mango Log|TreeBase|Mango"].id,
                  canopyLeavesId: Zu["Mango Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: Zu["Fruity Mango Leaves"].id,
                  canopyType: fE.TALL,
                  vineProbability: .2,
                  minHeight: 3,
                  maxHeight: 6
                },
                [Cu.w.AutumnAspen]: {
                  trunkBlockId: Zu["Aspen Log"].id,
                  trunkBaseId: Zu["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: Zu["Autumn Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.FRILLED,
                  vineProbability: Xu,
                  minHeight: 5,
                  maxHeight: 6
                },
                [Cu.w.Dead]: {
                  trunkBlockId: Zu["Barkless Maple Log"].id,
                  trunkBaseId: Zu["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 7
                },
                [Cu.w.FallenLog]: {
                  trunkBlockId: Zu["Barkless Maple Log"].id,
                  trunkBaseId: Zu["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: fE.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 6
                }
              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((uu => Zu[uu].id)), this.maxTreeRadius = uu.maxTreeRadius, this.hO <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
            if (this.hO <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
            this.canopyInfos = {
              [fE.STANDARD]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [CE.TOP]: NE.initCanopyGenerationSchemaByShape(.2, 1.1, 2, bE.CIRCLE),
                  [CE.UPPER_MIDDLE]: null,
                  [CE.MIDDLE]: NE.initCanopyGenerationSchemaByShape(1.2, 1.7, 2, bE.CIRCLE),
                  [CE.LOWER_MIDDLE]: null,
                  [CE.BOTTOM]: NE.initCanopyGenerationSchemaByShape(2.8, 3, 2, bE.CIRCLE)
                }
              },
              [fE.FRILLED]: {
                canopyBottomOffset: -3,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [CE.TOP]: NE.initCanopyGenerationSchemaByShape(.1, .1, 2, bE.CIRCLE),
                  [CE.UPPER_MIDDLE]: NE.initCanopyGenerationSchemaByShape(2, 2, 2, bE.DIAMOND),
                  [CE.MIDDLE]: null,
                  [CE.LOWER_MIDDLE]: NE.initCanopyGenerationSchemaByShape(3, 3, 2, bE.DIAMOND),
                  [CE.BOTTOM]: NE.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, bE.CIRCLE)
                }
              },
              [fE.TALL]: {
                canopyBottomOffset: -1,
                canopyTopOffset: 2,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [CE.TOP]: NE.initCanopyGenerationSchemaByShape(.8, 2, 2, bE.DIAMOND),
                  [CE.UPPER_MIDDLE]: NE.initCanopyGenerationSchemaByShape(1.7, 1.7, 2, bE.CIRCLE),
                  [CE.MIDDLE]: null,
                  [CE.LOWER_MIDDLE]: NE.initCanopyGenerationSchemaByShape(1.7, 2.2, 2, bE.CIRCLE),
                  [CE.BOTTOM]: NE.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, bE.CIRCLE)
                }
              },
              [fE.FLAT]: {
                canopyBottomOffset: 0,
                canopyTopOffset: 1,
                radius: 3,
                canopyLevelToGenerationSchema: {
                  [CE.TOP]: NE.initCanopyGenerationSchemaByShape(2.2, 2.5, 3, bE.CIRCLE),
                  [CE.UPPER_MIDDLE]: NE.initCanopyGenerationSchemaByFunction(3, ((uu, Eu) => {
                    if (Math.sqrt(uu * uu + Eu * Eu) > 3.2) return cE.NEVER;
                    const ju = Math.abs(uu),
                      su = Math.abs(Eu);
                    return 1 === ju && 3 === su || 3 === ju && 1 === su ? cE.SOMETIMES : cE.ALWAYS
                  })),
                  [CE.MIDDLE]: null,
                  [CE.LOWER_MIDDLE]: null,
                  [CE.BOTTOM]: null
                }
              },
              [fE.DROOPY]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [CE.TOP]: NE.initCanopyGenerationSchemaByShape(2, 2, 2, bE.CIRCLE),
                  [CE.UPPER_MIDDLE]: NE.initCanopyGenerationSchemaByShape(2.2, 2.8, 2, bE.CIRCLE),
                  [CE.MIDDLE]: null,
                  [CE.LOWER_MIDDLE]: NE.initCanopyGenerationSchemaByFunction(2, ((uu, Eu) => 2 === Math.abs(uu) && 2 === Math.abs(Eu) ? cE.SOMETIMES : cE.ALWAYS)),
                  [CE.BOTTOM]: NE.initCanopyGenerationSchemaByFunction(2, ((uu, Eu) => {
                    const ju = Math.abs(uu),
                      su = Math.abs(Eu);
                    return 2 === ju && 2 === su || 0 === ju && 1 === su || 1 === ju && 0 === su ? cE.ALWAYS : cE.NEVER
                  }))
                }
              }
            };
            for (const Uu in this.canopyInfos) {
              const uu = this.canopyInfos[Uu];
              if (uu.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${uu.radius} for canopy type "${Uu}" is larger than tree radius ${this.maxTreeRadius}`)
            }
            let lu = 1e5,
              qu = 0;
            for (const Uu of uu.biomeSelector.Ps) Uu.biome.treeMinDist && (lu = Math.min(lu, Uu.biome.treeMinDist), qu = Math.max(qu, Uu.biome.treeMinDist));
            this.treePointGen = new Uu.b("tree", 6, !0, !1, su, 300, ju, {
              func: uu => Eu.getBiome(uu[0], uu[1]).biome.treeMinDist || qu,
              min: lu,
              max: qu
            }, !1, 2)
          }
          getTreesForChunk(uu, Eu, ju, su, Uu, lu, fu) {
            const bu = [];
            for (let Nu = uu - this.maxTreeRadius; Nu < uu + this.hO + this.maxTreeRadius; Nu++)
              for (let uu = Eu - this.maxTreeRadius; uu < Eu + this.hO + this.maxTreeRadius; uu++) {
                const Eu = su.getOrGenerate(Nu, uu)[0].biome;
                if (null !== Eu.treeMinDist) {
                  if (Eu.getTotalTreeChance() <= 0 && console.error("Biome", Eu, "has 0 total tree chance"), !this.treePointGen.isPoint(Nu, uu)) continue;
                  if (ju.getOrGenerate(Nu, uu, Zu.h.WaterHeight) !== Xu.t) continue;
                  const su = ju.getOrGenerate(Nu, uu, Zu.h.GroundHeight);
                  if (qu.b.isInCave(Nu, su, uu, Uu)) continue;
                  if (UE.isWithinPrefabClearing(Nu, uu, lu)) continue;
                  if (au.e.isNearFixedPointPrefab(Nu, uu, fu)) continue;
                  const Ou = new cu.f(`${Nu}${uu}${this.seed}treeHeight`),
                    Yu = NE.getTreeTypeFromBiome(Eu, Ou);
                  let {
                    height: hu,
                    vineDir: Du
                  } = this.getRandTreeInfo(Ou, Yu);
                  if (Yu === Cu.w.FallenLog) {
                    Du = Ou.next() < .5 ? 0 : 1;
                    for (let Eu = -1; Eu < hu - 1; Eu++) {
                      if (ju.getOrGenerate(0 === Du ? Nu + Eu : Nu, 0 === Du ? uu : uu + Eu, Zu.h.GroundHeight) !== su) {
                        hu = 1;
                        break
                      }
                    }
                  }
                  bu.push({
                    treeX: Nu,
                    treeZ: uu,
                    trunkBase: su + 1,
                    height: hu,
                    vineDir: Du,
                    treeType: Yu
                  })
                }
              }
            return bu
          }
          getRandTreeInfo(uu, Eu) {
            var ju, su;
            const Uu = this.treeInfos[Eu],
              Zu = null !== (ju = Uu.minHeight) && void 0 !== ju ? ju : this.minTreeHeight,
              Xu = null !== (su = Uu.maxHeight) && void 0 !== su ? su : this.maxTreeHeight;
            return {
              height: Math.floor(uu.next() * (Xu - Zu)) + Zu,
              vineDir: uu.next() < Uu.vineProbability ? Math.floor(4 * uu.next()) : -1
            }
          }
          static getTreeTypeFromBiome(uu, Eu) {
            const ju = Math.floor(Eu.next() * uu.getTotalTreeChance());
            let su = 0,
              Uu = 0;
            for (; su <= ju;) su += uu.treeChances[Uu].chance, Uu++;
            return uu.treeChances[Uu - 1].treeType
          }
          addTreesToChunk(uu, Eu, ju, su, Uu) {
            for (const Zu of Uu) {
              const Uu = new cu.f(`${Zu.treeX}|${Zu.treeZ}|${Zu.trunkBase}|tree`);
              if (Zu.treeType === Cu.w.Dead || Zu.treeType === Cu.w.FallenLog) {
                this.addDeadTreeToChunk(uu, Eu, ju, su, Zu, Uu);
                continue
              }
              const Xu = this.addTreeCanopyToChunk(uu, Eu, ju, su, Zu, Uu);
              this.addTreeTrunkToChunk(uu, Eu, ju, su, Zu, Xu)
            }
          }
          addDeadTreeToChunk(uu, Eu, ju, su, Uu, Zu) {
            const Xu = this.deadWoodIds[Math.floor(Zu.next() * this.deadWoodIds.length)],
              {
                treeX: lu,
                treeZ: qu,
                trunkBase: fu,
                height: bu
              } = Uu,
              cu = (Uu, Zu, lu) => {
                Uu >= Eu && Uu < Eu + this.hO && Zu >= ju && Zu < ju + this.hO && lu >= su && lu < su + this.hO && uu.set(Uu - Eu, Zu - ju, lu - su, Xu)
              };
            if (Uu.treeType === Cu.w.FallenLog) {
              if (bu <= 1) return void cu(lu, fu, qu);
              for (let uu = -1; uu < bu - 1; uu++) cu(0 === Uu.vineDir ? lu + uu : lu, fu, 0 === Uu.vineDir ? qu : qu + uu);
              return
            }
            for (let Cu = fu; Cu < fu + bu; Cu++) cu(lu, Cu, qu);
            const Nu = bu <= 3 ? 1 : 1 + Math.floor(3 * Zu.next()),
              Ou = fu + (bu >> 1);
            for (let Cu = 0; Cu < Nu; Cu++) {
              const uu = Ou + Math.floor(Zu.next() * (fu + bu - Ou)),
                Eu = Math.floor(4 * Zu.next()),
                ju = 0 === Eu ? 1 : 1 === Eu ? -1 : 0,
                su = 2 === Eu ? 1 : 3 === Eu ? -1 : 0;
              cu(lu + ju, uu, qu + su), Zu.next() < .5 && cu(lu + 2 * ju, uu + (Zu.next() < .6 ? 1 : 0), qu + 2 * su)
            }
            Zu.next() < .35 && cu(lu, fu + bu, qu)
          }
          addTreeCanopyToChunk(uu, Eu, ju, su, Uu, Zu) {
            const Xu = Uu.treeX,
              lu = Uu.treeZ,
              qu = Uu.trunkBase,
              fu = qu + Uu.height - 1,
              Cu = this.treeInfos[Uu.treeType],
              bu = this.canopyInfos[Cu.canopyType],
              cu = qu + Uu.height + bu.canopyBottomOffset,
              Nu = qu + Uu.height + bu.canopyTopOffset,
              Ou = Math.max(cu, ju),
              Yu = Math.min(Nu, ju + this.hO - 1);
            if (Yu < Ou) return cu;
            const hu = Math.max(Xu - bu.radius, Eu),
              Du = Math.min(Xu + bu.radius, Eu + this.hO - 1);
            if (hu > Du) return cu;
            const gu = Math.max(lu - bu.radius, su),
              Mu = Math.min(lu + bu.radius, su + this.hO - 1);
            if (gu > Mu) return cu;
            const eu = Cu.canopyLeavesId,
              Gu = Cu.canopyLeavesWithDropId;
            return Cu.canopyType === fE.FRILLED ? this.addFrilledCanopyToChunk(uu, Eu, ju, su, Xu, lu, hu, Du, gu, Mu, fu, eu, Gu, Ou, Yu, Nu, bu.canopyLevelToGenerationSchema, Zu) : Cu.canopyType === fE.TALL || Cu.canopyType === fE.DROOPY ? this.addTallOrDroopyCanopyToChunk(uu, Eu, ju, su, Xu, lu, hu, Du, gu, Mu, fu, eu, Gu, Ou, Yu, Nu, bu.canopyLevelToGenerationSchema, Zu) : Cu.canopyType === fE.FLAT ? this.addFlatCanopyToChunk(uu, Eu, ju, su, Xu, lu, hu, Du, gu, Mu, fu, eu, Gu, Ou, Yu, Nu, bu.canopyLevelToGenerationSchema, Zu) : this.addStandardCanopyToChunk(uu, Eu, ju, su, Xu, lu, hu, Du, gu, Mu, fu, eu, Gu, Ou, Yu, Nu, bu.canopyLevelToGenerationSchema, Zu), cu
          }
          addStandardCanopyToChunk(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du) {
            for (let gu = Xu; gu <= lu; gu++) {
              const Xu = gu - Uu;
              for (let Uu = Nu; Uu <= Ou; Uu++) {
                let lu;
                lu = Uu === Yu ? CE.TOP : Uu === Yu - 1 ? CE.MIDDLE : CE.BOTTOM;
                const Nu = hu[lu];
                for (let Ou = qu; Ou <= fu; Ou++) {
                  const lu = Ou - Zu;
                  this.applyCanopyGenerationSchema(uu, Eu, ju, su, gu, Uu, Ou, Cu, bu, cu, Xu, lu, Nu, Du)
                }
              }
            }
          }
          addFrilledCanopyToChunk(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du) {
            const gu = Du.next() < .7;
            for (let Mu = Xu; Mu <= lu; Mu++) {
              const Xu = Mu - Uu;
              for (let Uu = Nu; Uu <= Ou; Uu++) {
                const lu = Yu - Uu;
                let Nu;
                if (0 === lu) Nu = CE.TOP;
                else if (2 === lu) {
                  if (!gu) continue;
                  Nu = CE.LOWER_MIDDLE
                } else Nu = 4 === lu ? CE.BOTTOM : CE.UPPER_MIDDLE;
                const Ou = hu[Nu];
                for (let Yu = qu; Yu <= fu; Yu++) {
                  const lu = Yu - Zu;
                  this.applyCanopyGenerationSchema(uu, Eu, ju, su, Mu, Uu, Yu, Cu, bu, cu, Xu, lu, Ou, Du)
                }
              }
            }
          }
          addTallOrDroopyCanopyToChunk(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du) {
            for (let gu = Xu; gu <= lu; gu++) {
              const Xu = gu - Uu;
              for (let Uu = Nu; Uu <= Ou; Uu++) {
                let lu;
                lu = Uu === Yu ? CE.TOP : Uu === Yu - 1 ? CE.UPPER_MIDDLE : Uu === Yu - 2 ? CE.LOWER_MIDDLE : CE.BOTTOM;
                const Nu = hu[lu];
                for (let Ou = qu; Ou <= fu; Ou++) {
                  const lu = Ou - Zu;
                  this.applyCanopyGenerationSchema(uu, Eu, ju, su, gu, Uu, Ou, Cu, bu, cu, Xu, lu, Nu, Du)
                }
              }
            }
          }
          addFlatCanopyToChunk(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du) {
            for (let gu = Xu; gu <= lu; gu++) {
              const Xu = gu - Uu;
              for (let Uu = Nu; Uu <= Ou; Uu++) {
                let lu;
                Uu === Yu ? lu = CE.TOP : Uu === Yu - 1 && (lu = CE.UPPER_MIDDLE);
                const Nu = hu[lu];
                for (let Ou = qu; Ou <= fu; Ou++) {
                  const lu = Ou - Zu;
                  this.applyCanopyGenerationSchema(uu, Eu, ju, su, gu, Uu, Ou, Cu, bu, cu, Xu, lu, Nu, Du)
                }
              }
            }
          }
          applyCanopyGenerationSchema(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu) {
            if (Zu <= lu && 0 === Cu && 0 === bu) return;
            let Ou;
            const Yu = cu.get(Cu, bu);
            if (Yu === cE.ALWAYS) Ou = qu;
            else {
              if (Yu === cE.NEVER) return;
              if (Yu !== cE.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Yu}`);
              if (!(Nu.next() < .8)) return;
              Ou = qu
            }
            null !== fu && Nu.next() < 1 / 15 && (Ou = fu), uu.set(Uu - Eu, Zu - ju, Xu - su, Ou)
          }
          addTreeTrunkToChunk(uu, Eu, ju, su, Uu, Zu) {
            const Xu = Eu + this.hO,
              lu = ju + this.hO,
              qu = su + this.hO,
              fu = Uu.treeX,
              Cu = Uu.trunkBase,
              bu = Uu.treeZ,
              cu = this.treeInfos[Uu.treeType],
              Nu = Eu <= fu && fu < Xu && su <= bu && bu < qu,
              Ou = ju <= Cu && Cu < lu,
              Yu = Math.max(Cu + 1, ju),
              hu = Math.min(Cu + Uu.height, lu) - 1;
            if (Zu = Math.min(Zu, lu), Nu) {
              Ou && uu.set(fu - Eu, Cu - ju, bu - su, cu.trunkBaseId);
              for (let Uu = Yu; Uu <= hu; Uu++) uu.set(fu - Eu, Uu - ju, bu - su, cu.trunkBlockId)
            }
            const Du = Uu.vineDir;
            if (-1 === Du) return;
            let gu, Mu = 0,
              eu = 0;
            0 === Du ? (Mu = -1, gu = this.blockMetadata["Vines|meta|rot4"].id) : 1 === Du ? (eu = 1, gu = this.blockMetadata.Vines.id) : 2 === Du ? (Mu = 1, gu = this.blockMetadata["Vines|meta|rot2"].id) : 3 === Du && (eu = -1, gu = this.blockMetadata["Vines|meta|rot3"].id);
            const Gu = fu + Mu,
              pu = bu + eu;
            if (!(Gu < Eu || Gu >= Xu || pu < su || pu >= qu)) {
              Ou && uu.set(Gu - Eu, Cu - ju, pu - su, gu);
              for (let Uu = Yu; Uu < Zu; Uu++) uu.set(Gu - Eu, Uu - ju, pu - su, gu)
            }
          }
          getAllBlocksForTree(uu) {
            const Eu = this.hO >> 1,
              ju = uu.treeX - Eu,
              su = uu.trunkBase,
              Uu = uu.treeZ - Eu,
              Zu = [],
              Xu = new OE(Zu, ju, su, Uu);
            return this.addTreesToChunk(Xu, ju, su, Uu, [uu]), Zu
          }
        }
        class OE {
          constructor(uu, Eu, ju, su) {
            this.treeBlocks = uu, this.startX = Eu, this.startY = ju, this.startZ = su
          }
          set(uu, Eu, ju, su) {
            this.treeBlocks.push({
              x: uu + this.startX,
              y: Eu + this.startY,
              z: ju + this.startZ,
              id: su
            })
          }
        }
        var YE = ju(40048);
        let hE = null;
        class DE {
          constructor(uu, Eu, ju, Zu, Xu, lu, qu, fu) {
            this.biomeSelector = uu, this.noWaterHeightmapGenerator = Eu, this.hydrology = ju, this.lakeRadiusNoiseModifier = Zu, this.seed = Xu, this.needOutsideWaterDist = qu, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, hE || (hE = new YE.e("scattered lakes", fu ? 4e3 : 500, 6e4)), this.lakes = hE.partition(), this.pointGenerator = new Uu.b("oasisLake", this.distApart, !1, !0, `${Xu}oasisLake`, 6, lu), this.lakeRadiusNoiseAmplitude = (0, su.E)(Zu)
          }
          getWaterGenInfo(uu, Eu, ju) {
            const Uu = this.maxRadius + ju,
              Zu = Uu * Uu;
            let Xu, lu = null,
              qu = 0,
              fu = 0,
              Cu = 1e4;
            for (const bu of this.pointGenerator.getPointsAroundPoint(uu, Eu)) {
              if ((0, su.P)(bu, uu, Eu) > Zu) continue;
              const ju = this.getLakeAtOrigin(bu);
              if (null === ju) continue;
              void 0 === Xu && (Xu = this.lakeRadiusNoiseModifier.getOctaves(uu, Eu) + this.lakeRadiusNoiseAmplitude);
              const Uu = (0, su.O)(ju.origin, uu, Eu),
                cu = Xu * (ju.radius / this.maxRadius),
                Nu = ju.radius - cu,
                Ou = Uu - Nu;
              Ou >= Cu || (Cu = Ou, lu = ju, qu = Uu, fu = Nu)
            }
            return null === lu ? null : {
              distFromWater: qu,
              waterRadius: fu,
              waterHeight: lu.waterHeight,
              waterbedHeight: lu.bedHeight,
              isLake: !0,
              needOutsideWaterDist: this.needOutsideWaterDist
            }
          }
          getLakeAtOrigin(uu) {
            const Eu = this.lakes.get(uu[0], uu[1]);
            if (!(0, Cu.H)(Eu)) return Eu.lake;
            const ju = this.buildLake(uu);
            return this.lakes.set(uu[0], uu[1], {
              lake: ju
            }), ju
          }
          buildLake(uu) {
            const Eu = this.biomeSelector.generate(uu[0], uu[1]);
            if (!Eu[0].biome.hasScatteredLakes) return null;
            const {
              minRadius: ju,
              maxRadius: su,
              minGapFromHydrologyWater: Uu
            } = this, Zu = new cu.f(`${uu[0]}|${uu[1]}${this.seed}oasisLake`), Xu = this.hydrology.getHydrologyWaterGenInfo(uu[0], uu[1]), lu = Math.floor(Xu.distFromWater - Xu.waterRadius - Uu);
            if (lu < ju) return null;
            const qu = Math.min(ju + Math.floor(Zu.next() * (su - ju + 1)), lu),
              fu = Math.floor(this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(uu[0], uu[1], Eu) - 7);
            return {
              origin: [uu[0], uu[1]],
              radius: qu,
              waterHeight: fu,
              bedHeight: Math.floor(fu - (4 + .35 * qu))
            }
          }
        }
        class gE {
          constructor() {
            this.hasLake = !1, this.lakeCreationHasBeenAttempted = !1, this.lakeWaterHeight = 0, this.lakeRadius = 0, this.lakeBedHeight = 0
          }
        }
        let ME = null;
        class eE {
          constructor(uu, Eu, ju, Uu, Zu, Xu, lu, qu) {
            this.biomeSelector = uu, this.noWaterHeightmapGenerator = Eu, this.needOutsideWaterBodyDist = Xu, this.Xs = qu, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
              width: 23,
              atFlux: 800
            }, this.lakeSettings = {
              minRadius: 15,
              maxRadius: 60,
              maxRadiusAtFlux: 1700,
              noLakeFluxCutoff: 50
            }, this.widthOffset = 2, this.seed = void 0, this.lakeRadiusNoiseModifier = void 0, this.lakeRadiusNoiseAmplitude = void 0, this.lastReadInfo = {
              cellX: NaN,
              cellZ: NaN,
              info: null
            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, ME || (ME = new YE.e("water cells", lu ? 800 : 60, 6e4)), this.waterBodyInfos = ME.partition();
            const fu = Math.max(this.lakeSettings.maxRadius, this.maxRiverSettings.width / 2 + this.widthOffset) + Xu + Zu;
            this.cellCenterMaxOffset = this.gridSize / 2 - fu, this.seed = ju, this.lakeRadiusNoiseModifier = new su.l([{
              amplitude: 10,
              frequency: 1 / 55
            }, {
              amplitude: 4,
              frequency: .04
            }], `${ju}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, su.E)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new DE(uu, Eu, this, this.lakeRadiusNoiseModifier, ju, Uu, Xu, lu)
          }
          getInfoNeededForWaterGen(uu, Eu) {
            let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!this.Xs) return pE(this.needOutsideWaterBodyDist);
            const su = this.getHydrologyWaterGenInfo(uu, Eu);
            if (!ju) return su;
            const Uu = this.scatteredLakes.getWaterGenInfo(uu, Eu, this.needOutsideWaterBodyDist);
            return null === Uu || GE(su) <= GE(Uu) ? su : Uu
          }
          columnMayHaveScatteredLakes(uu, Eu, ju) {
            for (const {
                biome: su
              }
              of uu)
              if (su.hasScatteredLakes) return !0;
            return this.biomeSelector.regionMayHaveScatteredLakes(Eu, ju)
          }
          getDistToScatteredLakeEdge(uu, Eu, ju) {
            const su = this.scatteredLakes.getWaterGenInfo(uu, Eu, ju);
            return null === su ? 1e4 : GE(su)
          }
          getHydrologyWaterGenInfo(uu, Eu) {
            const ju = [uu, Eu],
              Uu = this.getWaterInfo(uu, Eu, !0);
            let Zu = 1e4,
              Xu = 0,
              lu = 0,
              qu = 0,
              fu = 0,
              Cu = 0,
              bu = 0;
            if (Uu.downhill) {
              const {
                LX: uu,
                fracAlong: Eu,
                lineSegmentLength: cu
              } = (0, su.C)(ju, Uu.origin, Uu.downhill.origin);
              Xu = Math.floor(uu);
              let Nu = Uu.incomingFlux;
              if (Nu += Eu * Uu.selfFlux, qu = Math.min(1, Nu / this.maxRiverSettings.atFlux), lu = Math.max(1, Math.ceil(qu * this.maxRiverSettings.width)), Zu = Xu - lu / 2, Cu = Uu.originNoWaterHeight + -3, Uu.downhill.lakeInfo.hasLake) {
                bu = Uu.downhill.lakeInfo.lakeWaterHeight;
                const uu = cu - Uu.downhill.lakeInfo.lakeRadius,
                  ju = cu * Eu;
                fu = Math.min(1, ju / uu)
              } else bu = Uu.downhill.originNoWaterHeight + -3, fu = Eu
            }
            for (const cu of Uu.uphills) {
              const {
                LX: uu,
                fracAlong: Eu,
                lineSegmentLength: Nu
              } = (0, su.C)(ju, cu.origin, Uu.origin), Ou = Math.floor(uu);
              let Yu = cu.incomingFlux;
              Yu += Eu * cu.selfFlux;
              const hu = Math.min(1, Yu / this.maxRiverSettings.atFlux),
                Du = Math.max(1, Math.ceil(hu * this.maxRiverSettings.width)),
                gu = Ou - Du / 2;
              if (gu < Zu)
                if (Zu = gu, Xu = Ou, qu = hu, lu = Du, Cu = cu.originNoWaterHeight + -3, Uu.lakeInfo.hasLake) {
                  bu = Uu.lakeInfo.lakeWaterHeight;
                  const uu = Nu - Uu.lakeInfo.lakeRadius,
                    ju = Nu * Eu;
                  fu = Math.min(1, ju / uu)
                } else bu = Uu.originNoWaterHeight + -3, fu = Eu
            }
            if (1e4 !== Zu) {
              let ju = 1e4,
                cu = 0;
              if (Uu.lakeInfo.hasLake) {
                const Zu = Uu.lakeInfo;
                let Xu = this.lakeRadiusNoiseModifier.getOctaves(uu, Eu);
                Xu += this.lakeRadiusNoiseAmplitude;
                Xu *= Zu.lakeRadius / this.lakeSettings.maxRadius, cu = Zu.lakeRadius - Xu, ju = (0, su.O)(Uu.origin, uu, Eu) - cu
              }
              const Nu = Math.floor(bu + (Cu - bu) * (1 - fu)),
                Ou = Nu - (Math.ceil(10 * qu) + 2);
              if (Zu < ju) {
                return {
                  distFromWater: Xu,
                  waterRadius: (lu + this.widthOffset) / 2,
                  waterHeight: Nu,
                  waterbedHeight: Ou,
                  isLake: !1,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              } {
                const ju = (0, su.O)(Uu.origin, uu, Eu),
                  Zu = Uu.lakeInfo;
                return {
                  distFromWater: ju,
                  waterRadius: cu,
                  waterHeight: Zu.lakeWaterHeight,
                  waterbedHeight: Zu.lakeBedHeight,
                  isLake: !0,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              }
            }
            return pE(this.needOutsideWaterBodyDist)
          }
          getWaterInfo(uu, Eu, ju) {
            const su = Math.floor(uu / this.gridSize),
              Uu = Math.floor(Eu / this.gridSize),
              Zu = this.getCellInfo(su, Uu);
            if (Zu.uphills || this.fillInUphillInfo(su, Uu, Zu), Zu.downhill || Zu.lakeInfo.lakeCreationHasBeenAttempted || (this.fillInLakeInfo(Zu), Zu.lakeInfo.lakeCreationHasBeenAttempted = !0), ju && Zu.downhill) {
              const uu = this.getWaterInfo(Zu.downhill.origin[0], Zu.downhill.origin[1], !1);
              Zu.downhill.lakeInfo = uu.lakeInfo
            }
            return Zu
          }
          getCellInfo(uu, Eu) {
            if (uu === this.lastReadInfo.cellX && Eu === this.lastReadInfo.cellZ) return this.lastReadInfo.info;
            const ju = this.waterBodyInfos.get(uu, Eu);
            if (!(0, Cu.H)(ju)) return this.lastReadInfo.cellX = uu, this.lastReadInfo.cellZ = Eu, this.lastReadInfo.info = ju, ju;
            const su = this.getCellOrigin(uu, Eu),
              Uu = this.biomeSelector.generate(su[0], su[1]),
              Zu = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(su[0], su[1], Uu),
              Xu = {
                origin: su,
                originNoWaterHeight: Zu,
                downhill: this.getDownhillFromCell(uu, Eu, Zu),
                uphills: null,
                incomingFlux: null,
                selfFlux: this.getRainfall(su[0], su[1]),
                lakeInfo: new gE
              };
            return this.lastReadInfo.cellX = uu, this.lastReadInfo.cellZ = Eu, this.lastReadInfo.info = Xu, this.waterBodyInfos.set(uu, Eu, Xu), Xu
          }
          fillInUphillInfo(uu, Eu, ju) {
            const su = this.getUphillsFromCell(uu, Eu);
            let Uu = 0;
            for (const {
                incomingFlux: Zu,
                selfFlux: Xu
              }
              of su) Uu += Zu + Xu;
            ju.uphills = su, ju.incomingFlux = Uu
          }
          getUphillsFromCell(uu, Eu) {
            const ju = [];
            for (let Zu = -1; Zu <= 1; Zu++)
              for (let Xu = -1; Xu <= 1; Xu++) {
                var su, Uu;
                const lu = uu + Zu,
                  qu = Eu + Xu,
                  fu = Math.abs(Zu) + Math.abs(Xu);
                if (2 === fu || 0 === fu) continue;
                const Cu = this.getCellInfo(lu, qu);
                (null === (su = Cu.downhill) || void 0 === su ? void 0 : su.cell[0]) === uu && (null === (Uu = Cu.downhill) || void 0 === Uu ? void 0 : Uu.cell[1]) === Eu && (Cu.uphills || this.fillInUphillInfo(lu, qu, Cu), ju.push({
                  incomingFlux: Cu.incomingFlux,
                  selfFlux: Cu.selfFlux,
                  origin: Cu.origin,
                  originNoWaterHeight: Cu.originNoWaterHeight
                }))
              }
            return ju
          }
          getDownhillFromCell(uu, Eu, ju) {
            const su = {
              cell: [0, 0],
              origin: null,
              originNoWaterHeight: 0,
              lakeInfo: new gE
            };
            let Uu = -1;
            for (let Zu = -1; Zu <= 1; Zu++)
              for (let Xu = -1; Xu <= 1; Xu++) {
                const lu = uu + Zu,
                  qu = Eu + Xu,
                  fu = Math.abs(Zu) + Math.abs(Xu);
                if (2 === fu || 0 === fu) continue;
                const Cu = this.getCellOrigin(lu, qu),
                  bu = this.biomeSelector.generate(Cu[0], Cu[1]),
                  cu = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(Cu[0], Cu[1], bu),
                  Nu = ju - cu;
                Nu > 0 && Nu > Uu && (Uu = Nu, su.cell[0] = lu, su.cell[1] = qu, su.origin = Cu, su.originNoWaterHeight = cu)
              }
            return -1 !== Uu ? su : null
          }
          getCellOrigin(uu, Eu) {
            const ju = uu * this.gridSize + this.gridSize / 2,
              su = Eu * this.gridSize + this.gridSize / 2,
              Uu = new cu.f(`${uu}${Eu}${this.seed}riverCell`);
            return [ju + Math.floor(Uu.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset), su + Math.floor(Uu.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset)]
          }
          fillInLakeInfo(uu) {
            const Eu = uu.lakeInfo,
              ju = uu.incomingFlux + uu.selfFlux;
            if (ju < this.lakeSettings.noLakeFluxCutoff) return;
            Eu.hasLake = !0;
            const su = ju / this.lakeSettings.maxRadiusAtFlux,
              Uu = this.lakeSettings.minRadius + Math.ceil(su * (this.lakeSettings.maxRadius - this.lakeSettings.minRadius));
            Eu.lakeRadius = Uu, Eu.lakeWaterHeight = Math.floor(uu.originNoWaterHeight - 7);
            const Zu = 4 + .35 * Uu;
            Eu.lakeBedHeight = Math.floor(Eu.lakeWaterHeight - Zu)
          }
          getRainfall(uu, Eu) {
            return 100
          }
        }

        function GE(uu) {
          let {
            distFromWater: Eu,
            waterRadius: ju
          } = uu;
          return Eu - ju
        }

        function pE(uu) {
          return {
            distFromWater: 1e4,
            waterRadius: 0,
            waterHeight: 0,
            waterbedHeight: 0,
            isLake: !1,
            needOutsideWaterDist: uu
          }
        }
        const wE = [{
          blockName: "Moonstone Ore",
          radius: 2,
          Fs: 40,
          ss: -85,
          Us: -85,
          Bs: .5
        }, {
          blockName: "Diamond Ore",
          radius: 2,
          Fs: 13,
          ss: -100,
          Us: -85,
          Bs: .28
        }, {
          blockName: "Gold Ore",
          radius: 2,
          Fs: 10,
          ss: -100,
          Us: -75,
          Bs: .4
        }, {
          blockName: "Iron Ore",
          radius: 2,
          Fs: 5,
          ss: -80,
          Us: 15,
          Bs: .5
        }, {
          blockName: "Coal Ore",
          radius: 3,
          Fs: 4,
          ss: -60,
          Us: 40,
          Bs: .5
        }];
        class JE {
          constructor(uu, Eu, ju, su) {
            this.seed = Eu, this.hO = ju, this.Ss = void 0, this.Ss = su.map((su => {
              const Zu = new Uu.b("ore", su.Fs, !1, !0, `${Eu}${su.blockName}`, 20, ju, null, !0);
              return Zu.assertReachableFromChunkCentre(ju, su.radius), {
                ul: (0, Cu.C)(su.blockName, uu),
                radius: su.radius,
                Fs: su.Fs,
                ss: su.ss,
                Us: su.Us,
                Bs: su.Bs,
                pointGenerator: Zu
              }
            }))
          }
          getOreBlocksForChunk(uu, Eu) {
            const ju = [],
              Uu = new cu.f(`${uu}${Eu}${this.seed}oreExists`);
            for (const Zu of this.Ss) {
              const Xu = Zu.pointGenerator.getPointsAroundPoint(uu + this.hO / 2, Eu + this.hO / 2),
                lu = uu + this.hO + Zu.radius,
                qu = uu - Zu.radius - 1,
                fu = Eu + this.hO + Zu.radius,
                Cu = Eu - Zu.radius - 1;
              for (const bu of Xu) {
                if (bu[0] >= lu || bu[0] <= qu || bu[1] >= fu || bu[1] <= Cu) continue;
                const Xu = new cu.f(`${bu[0]}${bu[1]}${this.seed}ore`),
                  Nu = Math.floor(Xu.next() * (Zu.Us + 1 - Zu.ss)) + Zu.ss,
                  Ou = Math.max(uu, bu[0] - Zu.radius),
                  Yu = Math.min(uu + this.hO - 1, bu[0] + Zu.radius),
                  hu = Math.max(Eu, bu[1] - Zu.radius),
                  Du = Math.min(Eu + this.hO - 1, bu[1] + Zu.radius);
                for (let uu = Ou; uu <= Yu; uu++)
                  for (let Eu = hu; Eu <= Du; Eu++) {
                    (0, su.H)(bu, uu, Eu) > Zu.radius || (Uu.next() >= Zu.Bs || ju.push(uu, Nu, Eu, Zu.ul))
                  }
              }
            }
            return new Int32Array(ju)
          }
          addOresToChunk(uu, Eu, ju, su, Uu, Xu, lu) {
            const qu = ju + this.hO,
              fu = lu.length;
            for (let Cu = 0; Cu < fu; Cu += 4) {
              const fu = lu[Cu + 1];
              if (fu < ju || fu >= qu) continue;
              const bu = lu[Cu],
                cu = lu[Cu + 2];
              if (fu < Xu.get(bu, cu, Zu.h.GroundHeight) - Uu) {
                const Uu = lu[Cu + 3];
                uu.set(bu - Eu, fu - ju, cu - su, Uu)
              }
            }
          }
        }
        var dE = ju(40054);
        const aE = [0, -1, 0],
          PE = [0, 1, 0],
          oE = [-1, 0, 0],
          kE = [1, 0, 0],
          mE = [0, 0, -1],
          vE = [0, 0, 1];

        function KE(uu, Eu) {
          const {
            hs: ju,
            Gs: su,
            shallowClusterY: Uu,
            deepClusterY: Zu
          } = uu;
          if (void 0 === su || void 0 === Uu || void 0 === Zu) return ju;
          return ju + (su - ju) * Math.max(0, Math.min(1, (Uu - Eu) / (Uu - Zu)))
        }

        function VE(uu, Eu, ju) {
          const su = [];
          return ju.Ns && su.push({
            offset: aE,
            ul: uu[Eu].id
          }), ju.Os && su.push({
            offset: oE,
            ul: uu[`${Eu}|meta|rot2|side`].id
          }, {
            offset: kE,
            ul: uu[`${Eu}|meta|rot4|side`].id
          }, {
            offset: mE,
            ul: uu[`${Eu}|meta|rot1|side`].id
          }, {
            offset: vE,
            ul: uu[`${Eu}|meta|rot3|side`].id
          }), ju.Ys && su.push({
            offset: PE,
            ul: uu[`${Eu}|meta|rot1|top`].id
          }), su
        }

        function rE(uu, Eu) {
          return null === Eu ? function(uu) {
            return [{
              seedPrefix: "crystal",
              anchorOptions: VE(uu, "Crystal", {
                Ns: !0,
                Os: !0,
                Ys: !0
              }),
              clusterBoxSize: 4,
              Ds: .8,
              gs: 0,
              hs: .12,
              Gs: .25,
              shallowClusterY: -20,
              deepClusterY: -85
            }, {
              seedPrefix: "mushroom",
              anchorOptions: VE(uu, "Glowing Mushroom", {
                Ns: !0,
                Os: !0,
                Ys: !1
              }),
              clusterBoxSize: 4,
              Ds: .7,
              gs: 2,
              hs: .58
            }]
          }(uu) : Eu.map((Eu => function(uu, Eu) {
            const ju = Eu.Ms;
            return {
              seedPrefix: Eu.blockName,
              anchorOptions: VE(uu, Eu.blockName, {
                Ns: Eu.Ns,
                Os: Eu.Os,
                Ys: Eu.Ys
              }),
              clusterBoxSize: 4,
              Ds: Eu.Ds,
              gs: Eu.gs,
              hs: Eu.hs,
              Gs: null === ju || void 0 === ju ? void 0 : ju.Gs,
              shallowClusterY: null === ju || void 0 === ju ? void 0 : ju.ws,
              deepClusterY: null === ju || void 0 === ju ? void 0 : ju.ds
            }
          }(uu, Eu)))
        }
        class QE {
          constructor(uu) {
            this.caveHeightmapVals = uu
          }
          generate(uu, Eu) {
            return ou(uu, Eu, this.caveHeightmapVals, !1)
          }
        }
        class iE {
          constructor(uu, Eu, ju, su) {
            this.caveHeightmapVals = uu, this.heightmapVals = Eu, this.surfaceMargin = ju, this.minCaveHeight = su
          }
          generate(uu, Eu) {
            const ju = ou(uu, Eu, this.caveHeightmapVals, !0);
            if (0 === ju.length) return ju;
            const su = this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.GroundHeight) - this.surfaceMargin,
              {
                minCaveHeight: Uu
              } = this,
              Xu = [];
            for (const Zu of ju) {
              const uu = Math.min(Zu.ceilingY, su);
              uu - Zu.floorY + 1 < Uu || Xu.push(uu === Zu.ceilingY ? Zu : {
                floorY: Zu.floorY,
                ceilingY: uu
              })
            }
            return Xu
          }
        }
        class WE {
          constructor(uu, Eu, ju, Uu) {
            this.heightmapVals = uu, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new su.q(new QE(Eu)), this.decoratableCavesCache = new su.q(new iE(Eu, uu, ju, Uu))
          }
          getAllCaves(uu, Eu) {
            return this.allCavesCache.getOrGenerate(uu, Eu)
          }
          getGroundHeight(uu, Eu) {
            return this.heightmapVals.getOrGenerate(uu, Eu, Zu.h.GroundHeight)
          }
          getDecoratableCaves(uu, Eu) {
            return this.decoratableCavesCache.getOrGenerate(uu, Eu)
          }
        }

        function SE(uu, Eu, ju, su) {
          if (Eu > su.getGroundHeight(uu, ju)) return !1;
          const Uu = su.getAllCaves(uu, ju);
          for (const Zu of Uu)
            if (Eu >= Zu.floorY && Eu <= Zu.ceilingY) return !1;
          return !0
        }

        function IE(uu, Eu, ju, su, Uu, Zu) {
          let Xu = null;
          const lu = [];
          for (const qu of su) {
            SE(uu + qu.offset[0], Eu + qu.offset[1], ju + qu.offset[2], Zu) && (qu.offset === aE ? Xu = qu : lu.push(qu))
          }
          return null !== Xu ? Xu : 0 === lu.length ? null : lu[Math.floor(Uu * lu.length)]
        }
        class FE {
          constructor(uu, Eu, ju) {
            let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.hO = Eu, this.seed = ju, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
            const Zu = rE(uu, su);
            let Xu = 0,
              lu = 0;
            for (const Uu of Zu) {
              var qu;
              if (!Number.isInteger(Uu.clusterBoxSize) || Uu.clusterBoxSize < 2 || Uu.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Uu.seedPrefix}" has invalid clusterBoxSize (${Uu.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
              const uu = Uu.clusterBoxSize >> 1;
              uu > Xu && (Xu = uu), lu += Math.max(Uu.hs, null !== (qu = Uu.Gs) && void 0 !== qu ? qu : Uu.hs)
            }
            if (lu > 1) throw new Error(`Cave decoration cluster chances sum to ${lu} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
            this.pointsGen = new Uu.b("caveDeco", 10, !1, !0, ju, 4, Eu, null, !0), this.pointsGen.assertReachableFromChunkCentre(Eu, Xu), this.configs = Zu, this.maxHalfBox = Xu
          }
          getDecorationsForChunkColumn(uu, Eu, ju, su) {
            const Uu = [],
              Zu = this.hO,
              Xu = uu + Zu,
              lu = Eu + Zu,
              qu = new WE(ju, su, 4, 3),
              fu = uu + (Zu >> 1),
              Cu = Eu + (Zu >> 1),
              bu = this.pointsGen.getPointsAroundPoint(fu, Cu),
              cu = this.maxHalfBox;
            for (const Nu of bu) {
              const ju = Nu[0],
                su = Nu[1];
              ju + cu <= uu || ju - cu >= Xu || su + cu <= Eu || su - cu >= lu || this.collectClusterPlacements(ju, su, uu, Xu, Eu, lu, qu, Uu)
            }
            return Uu
          }
          static addCaveDecorationsToChunk(uu, Eu, ju, su, Uu, Zu) {
            const Xu = ju + Uu;
            for (const lu of Zu) lu.y >= ju && lu.y < Xu && uu.set(lu.x - Eu, lu.y - ju, lu.z - su, lu.ul)
          }
          collectClusterPlacements(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
            const qu = Xu.getDecoratableCaves(uu, Eu);
            if (0 === qu.length) return;
            const fu = new cu.f(`${this.seed}|${uu}|${Eu}|cluster`),
              Cu = fu.next(),
              bu = fu.next(),
              Nu = fu.next(),
              Ou = qu[Math.floor(Cu * qu.length)],
              Yu = Ou.floorY + Math.floor(bu * (Ou.ceilingY - Ou.floorY + 1));
            let hu = 0,
              Du = null;
            for (const cu of this.configs)
              if (hu += KE(cu, Yu), Nu < hu) {
                Du = cu;
                break
              } if (null === Du) return;
            const gu = [];
            if (this.scatterClusterCells(uu, Yu, Eu, Du, Xu, fu, gu), !(gu.length < Du.gs))
              for (const cu of gu) cu.x >= ju && cu.x < su && cu.z >= Uu && cu.z < Zu && lu.push(cu)
          }
          scatterClusterCells(uu, Eu, ju, su, Uu, Zu, Xu) {
            const {
              clusterBoxSize: lu,
              Ds: qu,
              anchorOptions: fu
            } = su, Cu = lu >> 1, bu = uu - Cu, cu = Eu - Cu, Nu = ju - Cu;
            for (let Ou = 0; Ou < Cu; Ou++)
              for (let uu = 0; uu < Cu; uu++)
                for (let Eu = 0; Eu < Cu; Eu++) {
                  const ju = Zu.next(),
                    su = Zu.next(),
                    lu = Zu.next();
                  if (ju >= qu) continue;
                  const Cu = Math.floor(8 * su),
                    Yu = bu + 2 * Ou + (1 & Cu),
                    hu = cu + 2 * uu + (Cu >> 1 & 1),
                    Du = Nu + 2 * Eu + (Cu >> 2 & 1);
                  if (!BE(Yu, hu, Du, Uu)) continue;
                  const gu = IE(Yu, hu, Du, fu, lu, Uu);
                  null !== gu && Xu.push({
                    x: Yu,
                    y: hu,
                    z: Du,
                    ul: gu.ul
                  })
                }
          }
        }

        function BE(uu, Eu, ju, su) {
          const Uu = su.getDecoratableCaves(uu, ju);
          for (const Zu of Uu)
            if (Eu >= Zu.floorY && Eu <= Zu.ceilingY) return !0;
          return !1
        }
        class LE {
          constructor(uu, Eu, ju, su, Zu, Xu, lu) {
            this.prefabGenerator = su, this.seed = void 0, this.hO = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = lu, this.hO = uu, this.biomeSelector = Eu, this.treeGenerator = ju, this.blockMetadata = Zu, this.oreGenerator = Xu, this.bedrockId = Zu.Bedrock.id, this.waterId = Zu.Water.id, this.sandId = Zu.Sand.id, this.clayId = Zu.Clay.id, this.chalkId = Zu.Chalk.id, this.grassBlockId = Zu["Grass Block"].id, this.dirtId = Zu.Dirt.id, this.riverbedFeatureGenerator = new Uu.b("clay", 50, !1, !0, lu, 4, uu, null, !0)
          }
          fillChunk(uu, Eu, ju, Uu, lu, fu, Cu, Nu, Ou, Yu, hu, Du, gu) {
            if (ju + this.hO <= Xu.x.bedrockLevel) return {
              specialBlocks: []
            };
            const Mu = new bu.d,
              eu = gu.minTerrainHeight,
              Gu = gu.maxTerrainHeight,
              pu = gu.hasWater;
            if (Gu >= ju && eu < ju + this.hO)
              for (let su = Eu; su < Eu + this.hO; su++)
                for (let qu = Uu; qu < Uu + this.hO; qu++) {
                  const fu = Yu.biomeIds.get(su, qu),
                    Cu = this.biomeSelector.getBiomeFromId(fu),
                    bu = lu.get(su, qu, Zu.h.GroundHeight);
                  if (bu >= ju && bu < ju + this.hO) {
                    const fu = lu.get(su, qu, Zu.h.IsLake) === Xu.l ? Cu.getDryBedBlock(su, bu, qu) : Cu.getTopsoilBlock(su, bu, qu);
                    uu.set(su - Eu, bu - ju, qu - Uu, fu)
                  }
                }
            if (Gu + 1 >= ju && eu - 4 < ju + this.hO)
              for (let su = Eu; su < Eu + this.hO; su++)
                for (let Xu = Uu; Xu < Uu + this.hO; Xu++) {
                  const qu = Yu.biomeIds.get(su, Xu),
                    fu = this.biomeSelector.getBiomeFromId(qu),
                    Cu = lu.get(su, Xu, Zu.h.GroundHeight),
                    bu = Math.min(Cu, ju + this.hO);
                  for (let Zu = Math.max(Cu - 4, ju); Zu < bu; Zu++) uu.set(su - Eu, Zu - ju, Xu - Uu, fu.getLowsoilBlockType(su, Zu, Xu, Cu))
                }
            const wu = gu.banks;
            for (let su = 0; su < wu.length; su += 3) {
              const Eu = wu[su],
                Uu = wu[su + 1] - ju,
                Zu = wu[su + 2];
              for (let ju = Math.max(Uu - 4, 0); ju < Math.min(Uu, this.hO); ju++) uu.set(Eu, ju, Zu, this.dirtId);
              Uu >= 0 && Uu < this.hO && uu.set(Eu, Uu, Zu, this.grassBlockId)
            }
            if (Gu - 4 >= ju) {
              const su = this.biomeSelector.anyStrata;
              for (let Xu = Eu; Xu < Eu + this.hO; Xu++)
                for (let qu = Uu; qu < Uu + this.hO; qu++) {
                  const fu = Yu.stoneTypeIds.get(Xu, qu),
                    Cu = lu.get(Xu, qu, Zu.h.GroundHeight),
                    bu = Math.min(Cu - 4, ju + this.hO),
                    cu = su ? this.biomeSelector.getBiomeFromId(Yu.biomeIds.get(Xu, qu)) : null,
                    Nu = null !== cu && cu.strataDepth > 0 ? Cu - 4 - cu.strataDepth : bu;
                  for (let su = ju; su < bu; su++) {
                    const Zu = su >= Nu ? cu.getStrataBlock(Xu, su, qu, Cu) : 0;
                    uu.set(Xu - Eu, su - ju, qu - Uu, 0 !== Zu ? Zu : fu)
                  }
                }
            }
            if (Gu - 4 >= ju && this.oreGenerator.addOresToChunk(uu, Eu, ju, Uu, 4, lu, Ou), Gu >= ju && (qu.b.addCavesToChunk(uu, Eu, ju, Uu, lu, Nu), FE.addCaveDecorationsToChunk(uu, Eu, ju, Uu, this.hO, Du)), Xu.x.bedrockLevel >= ju && Xu.x.bedrockLevel < ju + this.hO)
              for (let su = Eu; su < Eu + this.hO; su++)
                for (let Zu = Uu; Zu < Uu + this.hO; Zu++) uu.set(su - Eu, Xu.x.bedrockLevel - ju, Zu - Uu, this.bedrockId);
            this.addSurfaceBlocks(uu, ju, gu.flora);
            for (const su of Cu)
              for (let Zu = Eu; Zu < Eu + this.hO; Zu++)
                for (let Xu = ju; Xu < ju + this.hO; Xu++)
                  for (let lu = Uu; lu < Uu + this.hO; lu++) {
                    const qu = this.prefabGenerator.getBlockFromPrefabAtPoint(Zu, Xu, lu, su, Mu);
                    0 !== qu && uu.set(Zu - Eu, Xu - ju, lu - Uu, qu === Vu.GUARANTEED_AIR ? 0 : qu)
                  }
            Gu + this.treeGenerator.maxTreeHeight >= ju && this.treeGenerator.addTreesToChunk(uu, Eu, ju, Uu, fu);
            const Ju = gu.water;
            for (let su = 0; su < Ju.length; su += 5) {
              const Eu = Ju[su],
                Uu = Ju[su + 1],
                Zu = Ju[su + 2] - ju,
                Xu = Ju[su + 3] - ju;
              for (let ju = Math.max(Zu, 0); ju < Math.min(Xu, this.hO); ju++) uu.set(Eu, ju, Uu, this.waterId);
              Xu >= 0 && Xu < this.hO && uu.set(Eu, Xu, Uu, Ju[su + 4])
            }
            let du, Pu, ou;
            if (this.addSurfaceBlocks(uu, ju, gu.lilyPads), pu && Gu >= ju && eu < ju + this.hO)
              for (let qu = Eu; qu < Eu + this.hO; qu++)
                for (let fu = Uu; fu < Uu + this.hO; fu++) {
                  const Cu = lu.get(qu, fu, Zu.h.WaterHeight),
                    bu = lu.get(qu, fu, Zu.h.GroundHeight);
                  if (Cu !== Xu.t && bu >= ju && bu < ju + this.hO)
                    if (Cu === bu) uu.set(qu - Eu, bu - ju, fu - Uu, this.sandId);
                    else {
                      const Zu = this.riverbedFeatureGenerator.getClosestPoint(qu, fu);
                      if ((0, su.P)(Zu, qu, fu) < 100) du === Zu[0] && Pu === Zu[1] || (du = Zu[0], Pu = Zu[1], ou = new cu.f(`${this.seed}${du}${Pu}`).next() < .3 ? this.chalkId : this.clayId), uu.set(qu - Eu, bu - ju, fu - Uu, ou), bu - 1 >= ju && uu.set(qu - Eu, bu - 1 - ju, fu - Uu, ou), bu - 2 >= ju && uu.set(qu - Eu, bu - 2 - ju, fu - Uu, ou);
                      else {
                        const su = Yu.biomeIds.get(qu, fu),
                          Zu = this.biomeSelector.getBiomeFromId(su);
                        uu.set(qu - Eu, bu - ju, fu - Uu, Zu.getLowsoilBlockType(qu, bu, fu, bu))
                      }
                    }
                }
            for (const su of hu)
              for (let Zu = Eu; Zu < Eu + this.hO; Zu++)
                for (let Xu = ju; Xu < ju + this.hO; Xu++)
                  for (let lu = Uu; lu < Uu + this.hO; lu++) {
                    const qu = au.e.getBlockFromFixedPointPrefab(Zu, Xu, lu, su);
                    0 !== qu && uu.set(Zu - Eu, Xu - ju, lu - Uu, qu)
                  }
            const ku = [];
            for (const su of Mu) {
              const Zu = su.val;
              if (uu.get(su.x - Eu, su.y - ju, su.z - Uu) !== Zu.getBlockId()) continue;
              const Xu = Zu.generate(),
                lu = [su.x, su.y, su.z];
              ku.push({
                pos: lu,
                ...Xu
              })
            }
            return {
              specialBlocks: ku
            }
          }
          addSurfaceBlocks(uu, Eu, ju) {
            for (let su = 0; su < ju.length; su += 4) {
              const Uu = ju[su + 1] - Eu;
              Uu >= 0 && Uu < this.hO && uu.set(ju[su], Uu, ju[su + 2], ju[su + 3])
            }
          }
        }
        class tE {
          constructor() {
            this.blocks = [], this.startY = 0
          }
          set(uu, Eu, ju, su) {
            return this.blocks.push(uu, this.startY + Eu, ju, su), su
          }
        }
        class xE {
          constructor(uu, Eu, ju, su) {
            this.hO = uu, this.biomeSelector = Eu, this.seed = ju, this.random = new cu.f(""), this.lilyPadId = void 0, this.lilyPadId = su["Lily Pad"].id
          }
          getInfoForChunkColumn(uu, Eu, ju, su, Uu, lu) {
            const fu = [],
              Cu = [],
              bu = [],
              cu = new tE;
            let Nu = 1 / 0,
              Ou = -1 / 0,
              Yu = !1;
            for (let hu = uu; hu < uu + this.hO; hu++)
              for (let Du = Eu; Du < Eu + this.hO; Du++) {
                const gu = this.biomeSelector.getBiomeFromId(Uu.biomeIds.get(hu, Du)),
                  Mu = ju.getOrGenerate(hu, Du, Zu.h.GroundHeight),
                  eu = ju.getOrGenerate(hu, Du, Zu.h.WaterHeight);
                Nu = Math.min(Nu, Mu), Ou = Math.max(Ou, Mu);
                const Gu = hu - uu,
                  pu = Du - Eu;
                if (eu !== Xu.t) {
                  Yu = !0, Mu < eu && fu.push(Gu, pu, Mu + 1, eu, gu.topwaterBlockType), gu.hasScatteredLakes && 1 === ju.getOrGenerate(hu, Du, Zu.h.IsLake) && (this.random.reseed(`${hu}|${Du}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(hu, Du, ju) && bu.push(Gu, eu + 1, pu, this.lilyPadId));
                  continue
                }
                let wu = gu.floraGenerator;
                if (gu.hasScatteredLakes && this.isBesideLake(hu, Du, ju) && (this.random.reseed(`${hu}|${Du}|${this.seed}oasisShore`), this.random.next() < .85 && (Cu.push(Gu, Mu, pu), wu = this.biomeSelector.baseBiome.floraGenerator)), !qu.b.isInCave(hu, Mu, Du, su) && !au.e.isWithinFixedPointPrefab(hu, Du, lu))
                  for (let ju = Mu + 1; ju <= Mu + gu.maxFloraHeight; ju += this.hO) cu.startY = ju, wu.addBiomeFloraToColumn(cu, uu, Eu, hu, ju, Du, Mu)
              }
            return {
              minTerrainHeight: Nu,
              maxTerrainHeight: Ou,
              hasWater: Yu,
              water: new Int32Array(fu),
              banks: new Int32Array(Cu),
              flora: new Int32Array(cu.blocks),
              lilyPads: new Int32Array(bu)
            }
          }
          isInsideWater(uu, Eu, ju) {
            return ju.getOrGenerate(uu + 1, Eu, Zu.h.WaterHeight) !== Xu.t && ju.getOrGenerate(uu - 1, Eu, Zu.h.WaterHeight) !== Xu.t && ju.getOrGenerate(uu, Eu + 1, Zu.h.WaterHeight) !== Xu.t && ju.getOrGenerate(uu, Eu - 1, Zu.h.WaterHeight) !== Xu.t
          }
          isBesideLake(uu, Eu, ju) {
            return this.isLakeWater(uu + 1, Eu, ju) || this.isLakeWater(uu - 1, Eu, ju) || this.isLakeWater(uu, Eu + 1, ju) || this.isLakeWater(uu, Eu - 1, ju)
          }
          isLakeWater(uu, Eu, ju) {
            return ju.getOrGenerate(uu, Eu, Zu.h.WaterHeight) !== Xu.t && 1 === ju.getOrGenerate(uu, Eu, Zu.h.IsLake)
          }
        }
        var TE = ju(39958);
        let HE = null;
        class AE {
          constructor(uu, Eu, ju, Uu, Xu, lu, fu, Cu, bu) {
            var cu, Nu, Ou, Yu, hu, Du, gu;
            if (this.hO = uu, this.hashChunkContents = bu, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !HE) {
              const uu = Xu ? 1750 : 125;
              HE = new YE.e("chunk columns", uu, 4e4)
            }
            this.chunkColumnInfos = HE.partition(), this.caveGenerator = new qu.b(Uu, uu, Eu, null !== (cu = null === fu || void 0 === fu ? void 0 : fu.ls.fs) && void 0 !== cu ? cu : "Lava");
            const Mu = new JE(Eu, Uu, uu, null !== (Nu = null === fu || void 0 === fu ? void 0 : fu.Ss) && void 0 !== Nu ? Nu : [...wE, ...null !== (Ou = null === Cu || void 0 === Cu ? void 0 : Cu.ns) && void 0 !== Ou ? Ou : []]),
              eu = {
                hO: uu,
                blockMetadata: Eu,
                worldGenerator: this,
                seed: Uu,
                biomeOpts: {
                  oreGenerator: Mu
                }
              },
              Gu = null !== (Yu = null === fu || void 0 === fu ? void 0 : fu.Ps) && void 0 !== Yu ? Yu : null,
              pu = null !== (hu = null === Cu || void 0 === Cu ? void 0 : Cu.buildBiomes) && void 0 !== hu ? hu : null,
              wu = null !== Gu ? (0, dE.g)(Gu, eu) : null !== pu ? this.buildTerrainBiomes(pu, eu) : (0, dE.k)(eu);
            this.biomeSelector = new dE.d(this, Mu, Uu, uu, Eu, wu), this.treeGenerator = new NE(this, this.biomeSelector, uu, Uu, Eu), this.fixedPointPrefabTracker = new au.e(lu, uu), this.prefabGenerator = new UE({
              seed: Uu,
              hO: uu,
              blockMetadata: Eu,
              itemMetadata: ju,
              typeSettings: {
                [Zu.p.SURFACE]: {
                  densitySettings: {
                    [Zu.n.MEDIUM]: {
                      minDistanceBetweenPrefabs: 100
                    },
                    [Zu.n.HIGH]: {
                      minDistanceBetweenPrefabs: 50
                    },
                    [Zu.n.VERY_HIGH]: {
                      minDistanceBetweenPrefabs: 25
                    }
                  }
                },
                [Zu.p.UNDERGROUND]: {
                  densitySettings: {
                    [Zu.n.MEDIUM]: {
                      minDistanceBetweenPrefabs: 80
                    },
                    [Zu.n.HIGH]: null,
                    [Zu.n.VERY_HIGH]: null
                  }
                }
              },
              prefabSize: this.prefabSize
            }), this.noWaterHeightmapGenerator = new TE.f((0, TE.g)(Uu)), this.heightmapPerturb = new su.l([{
              amplitude: 1,
              frequency: 1 / 14
            }, {
              amplitude: 5,
              frequency: 1 / 65
            }, {
              amplitude: 20,
              frequency: .004
            }], `${Uu}HeightmapPerturb`);
            let Ju = 0;
            for (const {
                amplitude: su
              }
              of this.heightmapPerturb.customOctaves) Ju += su;
            this.waterBodyGenerator = new eE(this.biomeSelector, this.noWaterHeightmapGenerator, Uu, uu, Ju, this.needOutsideWaterDist, Xu, null === (Du = null === fu || void 0 === fu ? void 0 : fu.Xs) || void 0 === Du || Du), this.caveDecorationGenerator = new FE(Eu, uu, Uu, null !== (gu = null === fu || void 0 === fu ? void 0 : fu.ls.Cs) && void 0 !== gu ? gu : null), this.surfaceGenerator = new xE(uu, this.biomeSelector, Uu, Eu), this.chunkFiller = new LE(uu, this.biomeSelector, this.treeGenerator, this.prefabGenerator, Eu, Mu, Uu)
          }
          getChunk(uu, Eu, ju, su) {
            try {
              const {
                specialBlocks: Uu
              } = this.getChunkInternal(uu, Eu, ju, su);
              return {
                hash: this.hashChunkContents(uu.data, JSON.stringify(Uu)),
                specialBlocks: Uu
              }
            } catch (Uu) {
              return console.log(Uu.stack), void console.error(Uu.stack)
            }
          }
          getDistToLakeEdge(uu, Eu, ju) {
            return this.waterBodyGenerator.getDistToScatteredLakeEdge(uu, Eu, ju)
          }
          getOresForChunkColumn(uu, Eu) {
            const ju = this.hO,
              su = Math.floor(uu / ju) * ju,
              Uu = Math.floor(Eu / ju) * ju,
              Zu = Math.floor(ju / 2);
            return this.getClosestBiomesForChunk(su, Uu).getOrGenerate(su + Zu, Uu + Zu)[0].biome.oreGenerator.getOreBlocksForChunk(su, Uu)
          }
          buildTerrainBiomes(uu, Eu) {
            const ju = uu({
              ...Eu,
              biomeAt: (uu, Eu) => this.biomeSelector.getBiome(uu, Eu).biome
            });
            if (0 === ju.length) throw new Error("A world-gen terrain must build at least one biome");
            const su = new Map;
            for (const {
                biome: Zu
              }
              of ju) {
              var Uu;
              if ((null !== (Uu = su.get(Zu.key)) && void 0 !== Uu ? Uu : Zu) !== Zu) throw new Error(`A world-gen terrain built two biomes keyed "${Zu.key}"`);
              su.set(Zu.key, Zu)
            }
            return [...ju]
          }
          getPrefabLootChests(uu, Eu, ju, su, Uu) {
            const Zu = new Map;
            for (const qu of this.prefabGenerator.getLootPrefabCentres(uu, Eu, ju, su, this.biomeSelector)) {
              var Xu;
              if (void 0 !== Uu && qu.prefab.name !== Uu) continue;
              const uu = `${Math.floor(qu.x/this.hO)}|${Math.floor(qu.z/this.hO)}`,
                Eu = null !== (Xu = Zu.get(uu)) && void 0 !== Xu ? Xu : [];
              Eu.push(qu), Zu.set(uu, Eu)
            }
            const lu = [];
            for (const qu of Zu.values()) {
              const uu = Math.floor(qu[0].x / this.hO) * this.hO,
                Eu = Math.floor(qu[0].z / this.hO) * this.hO,
                ju = this.getClosestBiomesForChunk(uu, Eu),
                {
                  nearestFixedPrefabInfoForChunk: su
                } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(uu, Eu),
                Uu = this.getHeightMapVals(uu, Eu, ju, su),
                Zu = this.caveGenerator.getCaveHeightmapVals(uu, Eu, Uu),
                Xu = this.prefabGenerator.getPrefabsForChunk(uu, Eu, Uu, ju, Zu, su, this.biomeSelector);
              for (const fu of Xu) {
                if (!qu.some((uu => uu.x === fu.centreX && uu.z === fu.centreZ && uu.prefab === fu.prefab))) continue;
                const uu = null !== fu.prefab.undergroundYInterval;
                for (const {
                    x: Eu,
                    y: ju,
                    z: su
                  }
                  of fu.chestLocationToQuality.entries()) lu.push({
                  x: Eu,
                  y: ju,
                  z: su,
                  underground: uu,
                  yj: fu.prefab.name
                })
              }
            }
            return lu
          }
          getChunkInternal(uu, Eu, ju, su) {
            const {
              biomeInfos: Uu,
              heightmapVals: Zu,
              caveHeightmapVals: Xu,
              treesForChunk: lu,
              chunkPrefabs: qu,
              chunkOres: fu,
              decodedFixedPointPrefabsForChunk: Cu,
              caveDecorations: bu,
              surface: cu
            } = this.getInfoForChunkColumn(Eu, su);
            return this.chunkFiller.fillChunk(uu, Eu, ju, su, Zu, lu, qu, Xu, fu, Uu, Cu, bu, cu)
          }
          getInfoForChunkColumn(uu, Eu) {
            if (this.mostRecentlyAccessedChunkColumn && this.mostRecentlyAccessedChunkColumnPos[0] === uu && this.mostRecentlyAccessedChunkColumnPos[1] === Eu) return this.mostRecentlyAccessedChunkColumn;
            const ju = this.chunkColumnInfos.get(uu, Eu);
            if (ju) return this.mostRecentlyAccessedChunkColumnPos[0] = uu, this.mostRecentlyAccessedChunkColumnPos[1] = Eu, this.mostRecentlyAccessedChunkColumn = ju, ju;
            const su = this.getClosestBiomesForChunk(uu, Eu),
              {
                nearestFixedPrefabInfoForChunk: Uu,
                decodedFixedPointPrefabsForChunk: Zu
              } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(uu, Eu),
              Xu = this.getHeightMapVals(uu, Eu, su, Uu),
              lu = this.caveGenerator.getCaveHeightmapVals(uu, Eu, Xu),
              qu = this.prefabGenerator.getPrefabsForChunk(uu, Eu, Xu, su, lu, Uu, this.biomeSelector),
              fu = this.treeGenerator.getTreesForChunk(uu, Eu, Xu, su, lu, qu, Uu),
              Cu = su.getOrGenerate(uu + Math.floor(this.hO / 2), Eu + Math.floor(this.hO / 2))[0].biome.oreGenerator.getOreBlocksForChunk(uu, Eu),
              bu = this.caveDecorationGenerator.getDecorationsForChunkColumn(uu, Eu, Xu, lu),
              cu = this.biomeSelector.getBiomeInfoForChunkFill(uu, Eu, su),
              Nu = this.surfaceGenerator.getInfoForChunkColumn(uu, Eu, Xu, lu, cu, Uu),
              Ou = {
                biomeInfos: cu,
                heightmapVals: Xu.viewJustInnerChunk(),
                caveHeightmapVals: lu.viewJustInnerChunk(),
                treesForChunk: fu,
                chunkPrefabs: qu,
                chunkOres: Cu,
                decodedFixedPointPrefabsForChunk: Zu,
                caveDecorations: bu,
                surface: Nu
              };
            return this.mostRecentlyAccessedChunkColumnPos[0] = uu, this.mostRecentlyAccessedChunkColumnPos[1] = Eu, this.mostRecentlyAccessedChunkColumn = Ou, this.chunkColumnInfos.set(uu, Eu, Ou), Ou
          }
          getClosestBiomesForChunk(uu, Eu) {
            return su.w.create(this.hO, [uu, Eu], this.biomeSelector)
          }
          getHeightMapVals(uu, Eu, ju, Uu) {
            const Xu = new TE.e(ju, Uu, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
            return su.s.create(this.hO, [uu, Eu], Zu.h.NumFields, Xu)
          }
        }
      },
      39963: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => Su,
          h: () => du,
          l: () => wu,
          p: () => Ju,
          q: () => mu,
          s: () => ru,
          w: () => ku,
          A: () => eu,
          C: () => Mu,
          E: () => pu,
          H: () => Yu,
          K: () => Gu,
          O: () => gu,
          P: () => Du
        });
        var su = ju(2976),
          Uu = ju.n(su);
        const Zu = .5 * (Math.sqrt(3) - 1),
          Xu = (3 - Math.sqrt(3)) / 6,
          lu = 1 / 3,
          qu = 1 / 6,
          fu = (Math.sqrt(5) - 1) / 4,
          Cu = (5 - Math.sqrt(5)) / 20,
          bu = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
          cu = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
        const Nu = class {
          constructor() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
            const Eu = "function" == typeof uu ? uu : function(uu) {
              let Eu = 0,
                ju = 0,
                su = 0,
                Uu = 1;
              const Zu = function() {
                let uu = 4022871197;
                return function(Eu) {
                  Eu = Eu.toString();
                  for (let ju = 0; ju < Eu.length; ju++) {
                    uu += Eu.charCodeAt(ju);
                    let su = .02519603282416938 * uu;
                    uu = su >>> 0, su -= uu, su *= uu, uu = su >>> 0, su -= uu, uu += 4294967296 * su
                  }
                  return 2.3283064365386963e-10 * (uu >>> 0)
                }
              }();
              Eu = Zu(" "), ju = Zu(" "), su = Zu(" "), Eu -= Zu(uu), Eu < 0 && (Eu += 1);
              ju -= Zu(uu), ju < 0 && (ju += 1);
              su -= Zu(uu), su < 0 && (su += 1);
              return function() {
                const uu = 2091639 * Eu + 2.3283064365386963e-10 * Uu;
                return Eu = ju, ju = su, su = uu - (Uu = 0 | uu)
              }
            }(uu);
            this.p = function(uu) {
              const Eu = new Uint8Array(256);
              for (let ju = 0; ju < 256; ju++) Eu[ju] = ju;
              for (let ju = 0; ju < 255; ju++) {
                const su = ju + ~~(uu() * (256 - ju)),
                  Uu = Eu[ju];
                Eu[ju] = Eu[su], Eu[su] = Uu
              }
              return Eu
            }(Eu), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (let ju = 0; ju < 512; ju++) this.perm[ju] = this.p[255 & ju], this.permMod12[ju] = this.perm[ju] % 12
          }
          noise2D(uu, Eu) {
            const ju = this.permMod12,
              su = this.perm;
            let Uu = 0,
              lu = 0,
              qu = 0;
            const fu = (uu + Eu) * Zu,
              Cu = Math.floor(uu + fu),
              cu = Math.floor(Eu + fu),
              Nu = (Cu + cu) * Xu,
              Ou = uu - (Cu - Nu),
              Yu = Eu - (cu - Nu);
            let hu, Du;
            Ou > Yu ? (hu = 1, Du = 0) : (hu = 0, Du = 1);
            const gu = Ou - hu + Xu,
              Mu = Yu - Du + Xu,
              eu = Ou - 1 + 2 * Xu,
              Gu = Yu - 1 + 2 * Xu,
              pu = 255 & Cu,
              wu = 255 & cu;
            let Ju = .5 - Ou * Ou - Yu * Yu;
            if (Ju >= 0) {
              const uu = 3 * ju[pu + su[wu]];
              Ju *= Ju, Uu = Ju * Ju * (bu[uu] * Ou + bu[uu + 1] * Yu)
            }
            let du = .5 - gu * gu - Mu * Mu;
            if (du >= 0) {
              const uu = 3 * ju[pu + hu + su[wu + Du]];
              du *= du, lu = du * du * (bu[uu] * gu + bu[uu + 1] * Mu)
            }
            let au = .5 - eu * eu - Gu * Gu;
            if (au >= 0) {
              const uu = 3 * ju[pu + 1 + su[wu + 1]];
              au *= au, qu = au * au * (bu[uu] * eu + bu[uu + 1] * Gu)
            }
            return 70 * (Uu + lu + qu)
          }
          noise3D(uu, Eu, ju) {
            const su = this.permMod12,
              Uu = this.perm;
            let Zu, Xu, fu, Cu;
            const cu = (uu + Eu + ju) * lu,
              Nu = Math.floor(uu + cu),
              Ou = Math.floor(Eu + cu),
              Yu = Math.floor(ju + cu),
              hu = (Nu + Ou + Yu) * qu,
              Du = uu - (Nu - hu),
              gu = Eu - (Ou - hu),
              Mu = ju - (Yu - hu);
            let eu, Gu, pu, wu, Ju, du;
            Du >= gu ? gu >= Mu ? (eu = 1, Gu = 0, pu = 0, wu = 1, Ju = 1, du = 0) : Du >= Mu ? (eu = 1, Gu = 0, pu = 0, wu = 1, Ju = 0, du = 1) : (eu = 0, Gu = 0, pu = 1, wu = 1, Ju = 0, du = 1) : gu < Mu ? (eu = 0, Gu = 0, pu = 1, wu = 0, Ju = 1, du = 1) : Du < Mu ? (eu = 0, Gu = 1, pu = 0, wu = 0, Ju = 1, du = 1) : (eu = 0, Gu = 1, pu = 0, wu = 1, Ju = 1, du = 0);
            const au = Du - eu + qu,
              Pu = gu - Gu + qu,
              ou = Mu - pu + qu,
              ku = Du - wu + 2 * qu,
              mu = gu - Ju + 2 * qu,
              vu = Mu - du + 2 * qu,
              Ku = Du - 1 + .5,
              Vu = gu - 1 + .5,
              ru = Mu - 1 + .5,
              Qu = 255 & Nu,
              iu = 255 & Ou,
              Wu = 255 & Yu;
            let Su = .6 - Du * Du - gu * gu - Mu * Mu;
            if (Su < 0) Zu = 0;
            else {
              const uu = 3 * su[Qu + Uu[iu + Uu[Wu]]];
              Su *= Su, Zu = Su * Su * (bu[uu] * Du + bu[uu + 1] * gu + bu[uu + 2] * Mu)
            }
            let Iu = .6 - au * au - Pu * Pu - ou * ou;
            if (Iu < 0) Xu = 0;
            else {
              const uu = 3 * su[Qu + eu + Uu[iu + Gu + Uu[Wu + pu]]];
              Iu *= Iu, Xu = Iu * Iu * (bu[uu] * au + bu[uu + 1] * Pu + bu[uu + 2] * ou)
            }
            let Fu = .6 - ku * ku - mu * mu - vu * vu;
            if (Fu < 0) fu = 0;
            else {
              const uu = 3 * su[Qu + wu + Uu[iu + Ju + Uu[Wu + du]]];
              Fu *= Fu, fu = Fu * Fu * (bu[uu] * ku + bu[uu + 1] * mu + bu[uu + 2] * vu)
            }
            let Bu = .6 - Ku * Ku - Vu * Vu - ru * ru;
            if (Bu < 0) Cu = 0;
            else {
              const uu = 3 * su[Qu + 1 + Uu[iu + 1 + Uu[Wu + 1]]];
              Bu *= Bu, Cu = Bu * Bu * (bu[uu] * Ku + bu[uu + 1] * Vu + bu[uu + 2] * ru)
            }
            return 32 * (Zu + Xu + fu + Cu)
          }
          noise4D(uu, Eu, ju, su) {
            const Uu = this.perm;
            let Zu, Xu, lu, qu, bu;
            const Nu = (uu + Eu + ju + su) * fu,
              Ou = Math.floor(uu + Nu),
              Yu = Math.floor(Eu + Nu),
              hu = Math.floor(ju + Nu),
              Du = Math.floor(su + Nu),
              gu = (Ou + Yu + hu + Du) * Cu,
              Mu = uu - (Ou - gu),
              eu = Eu - (Yu - gu),
              Gu = ju - (hu - gu),
              pu = su - (Du - gu);
            let wu = 0,
              Ju = 0,
              du = 0,
              au = 0;
            Mu > eu ? wu++ : Ju++, Mu > Gu ? wu++ : du++, Mu > pu ? wu++ : au++, eu > Gu ? Ju++ : du++, eu > pu ? Ju++ : au++, Gu > pu ? du++ : au++;
            const Pu = wu >= 3 ? 1 : 0,
              ou = Ju >= 3 ? 1 : 0,
              ku = du >= 3 ? 1 : 0,
              mu = au >= 3 ? 1 : 0,
              vu = wu >= 2 ? 1 : 0,
              Ku = Ju >= 2 ? 1 : 0,
              Vu = du >= 2 ? 1 : 0,
              ru = au >= 2 ? 1 : 0,
              Qu = wu >= 1 ? 1 : 0,
              iu = Ju >= 1 ? 1 : 0,
              Wu = du >= 1 ? 1 : 0,
              Su = au >= 1 ? 1 : 0,
              Iu = Mu - Pu + Cu,
              Fu = eu - ou + Cu,
              Bu = Gu - ku + Cu,
              Lu = pu - mu + Cu,
              tu = Mu - vu + 2 * Cu,
              xu = eu - Ku + 2 * Cu,
              Tu = Gu - Vu + 2 * Cu,
              Hu = pu - ru + 2 * Cu,
              Au = Mu - Qu + 3 * Cu,
              nu = eu - iu + 3 * Cu,
              yu = Gu - Wu + 3 * Cu,
              zu = pu - Su + 3 * Cu,
              Ru = Mu - 1 + 4 * Cu,
              uE = eu - 1 + 4 * Cu,
              EE = Gu - 1 + 4 * Cu,
              jE = pu - 1 + 4 * Cu,
              sE = 255 & Ou,
              UE = 255 & Yu,
              ZE = 255 & hu,
              XE = 255 & Du;
            let lE = .6 - Mu * Mu - eu * eu - Gu * Gu - pu * pu;
            if (lE < 0) Zu = 0;
            else {
              const uu = Uu[sE + Uu[UE + Uu[ZE + Uu[XE]]]] % 32 * 4;
              lE *= lE, Zu = lE * lE * (cu[uu] * Mu + cu[uu + 1] * eu + cu[uu + 2] * Gu + cu[uu + 3] * pu)
            }
            let qE = .6 - Iu * Iu - Fu * Fu - Bu * Bu - Lu * Lu;
            if (qE < 0) Xu = 0;
            else {
              const uu = Uu[sE + Pu + Uu[UE + ou + Uu[ZE + ku + Uu[XE + mu]]]] % 32 * 4;
              qE *= qE, Xu = qE * qE * (cu[uu] * Iu + cu[uu + 1] * Fu + cu[uu + 2] * Bu + cu[uu + 3] * Lu)
            }
            let fE = .6 - tu * tu - xu * xu - Tu * Tu - Hu * Hu;
            if (fE < 0) lu = 0;
            else {
              const uu = Uu[sE + vu + Uu[UE + Ku + Uu[ZE + Vu + Uu[XE + ru]]]] % 32 * 4;
              fE *= fE, lu = fE * fE * (cu[uu] * tu + cu[uu + 1] * xu + cu[uu + 2] * Tu + cu[uu + 3] * Hu)
            }
            let CE = .6 - Au * Au - nu * nu - yu * yu - zu * zu;
            if (CE < 0) qu = 0;
            else {
              const uu = Uu[sE + Qu + Uu[UE + iu + Uu[ZE + Wu + Uu[XE + Su]]]] % 32 * 4;
              CE *= CE, qu = CE * CE * (cu[uu] * Au + cu[uu + 1] * nu + cu[uu + 2] * yu + cu[uu + 3] * zu)
            }
            let bE = .6 - Ru * Ru - uE * uE - EE * EE - jE * jE;
            if (bE < 0) bu = 0;
            else {
              const uu = Uu[sE + 1 + Uu[UE + 1 + Uu[ZE + 1 + Uu[XE + 1]]]] % 32 * 4;
              bE *= bE, bu = bE * bE * (cu[uu] * Ru + cu[uu + 1] * uE + cu[uu + 2] * EE + cu[uu + 3] * jE)
            }
            return 27 * (Zu + Xu + lu + qu + bu)
          }
        };
        var Ou = ju(39969);

        function Yu(uu, Eu, ju) {
          return Math.abs(uu[0] - Eu) + Math.abs(uu[1] - ju)
        }

        function hu(uu, Eu) {
          const ju = uu[0] - Eu[0],
            su = uu[1] - Eu[1];
          return ju * ju + su * su
        }

        function Du(uu, Eu, ju) {
          const su = uu[0] - Eu,
            Uu = uu[1] - ju;
          return su * su + Uu * Uu
        }

        function gu(uu, Eu, ju) {
          const su = uu[0] - Eu,
            Uu = uu[1] - ju;
          return Math.sqrt(su * su + Uu * Uu)
        }

        function Mu(uu, Eu, ju) {
          const su = hu(Eu, ju),
            Uu = ((uu[0] - Eu[0]) * (ju[0] - Eu[0]) + (uu[1] - Eu[1]) * (ju[1] - Eu[1])) / su;
          let Zu, Xu, lu;
          return Uu < 0 ? (Zu = Eu[0], Xu = Eu[1], lu = 0) : Uu > 1 ? (Zu = ju[0], Xu = ju[1], lu = 1) : (Zu = Eu[0] + Uu * (ju[0] - Eu[0]), Xu = Eu[1] + Uu * (ju[1] - Eu[1]), lu = Uu), {
            LX: gu(uu, Zu, Xu),
            fracAlong: lu,
            lineSegmentLength: Math.sqrt(su)
          }
        }

        function eu(uu, Eu, ju) {
          const su = hu(Eu, ju),
            Uu = ((uu[0] - Eu[0]) * (ju[0] - Eu[0]) + (uu[1] - Eu[1]) * (ju[1] - Eu[1])) / su;
          return gu(uu, Eu[0] + Uu * (ju[0] - Eu[0]), Eu[1] + Uu * (ju[1] - Eu[1]))
        }

        function Gu(uu) {
          if (Math.abs(uu[0]) < 1e-4) uu[0] = 0, uu[1] = 1;
          else {
            const Eu = Math.sqrt(uu[0] * uu[0] + uu[1] * uu[1]);
            uu[0] = uu[0] / Eu, uu[1] = uu[1] / Eu
          }
        }

        function pu(uu) {
          let Eu = 0;
          for (const {
              amplitude: ju
            }
            of uu.customOctaves) Eu += ju;
          return Eu
        }
        class wu {
          constructor(uu, Eu) {
            this.customOctaves = void 0, this._simplexes = [], console.assert(void 0 !== Eu, "Seed must be defined"), this.customOctaves = uu;
            for (let ju = 0; ju < uu.length; ju++) this._simplexes.push(new Nu(`${Eu}${ju}`))
          }
          maxMagnitude() {
            let uu = 1;
            for (const {
                amplitude: Eu
              }
              of this.customOctaves) uu += Math.abs(Eu);
            return uu
          }
          getOctaves(uu, Eu) {
            let ju = 0;
            for (let su = 0; su < this.customOctaves.length; su++) {
              const {
                amplitude: Uu,
                frequency: Zu
              } = this.customOctaves[su];
              ju += this._simplexes[su].noise2D(uu * Zu, Eu * Zu) * Uu
            }
            return ju
          }
        }
        class Ju {
          constructor(uu, Eu, ju) {
            this.customOctaves = void 0, this._simplexes = [], this.remainingAmplitudes = void 0, this.threshold = void 0, console.assert(void 0 !== ju, "Seed must be defined"), this.customOctaves = uu, this.threshold = Eu;
            for (let Uu = 0; Uu < uu.length; Uu++) this._simplexes.push(new Nu(`${ju}${Uu}`));
            this.remainingAmplitudes = new Array(uu.length);
            let su = 0;
            for (let Uu = this.remainingAmplitudes.length - 1; Uu >= 0; Uu--) su += this.customOctaves[Uu].amplitude, this.remainingAmplitudes[Uu] = su
          }
          getOctaves(uu, Eu) {
            let ju = 0;
            for (let su = 0; su < this.customOctaves.length; su++) {
              if (ju - this.remainingAmplitudes[su] > this.threshold.high || ju + this.remainingAmplitudes[su] < this.threshold.low) return Ou.e;
              const {
                amplitude: Uu,
                frequency: Zu
              } = this.customOctaves[su];
              ju += this._simplexes[su].noise2D(uu * Zu, Eu * Zu) * Uu
            }
            return ju
          }
        }
        class du {
          constructor(uu, Eu) {
            this.chunkBottomLeft = Eu, this.array = void 0;
            const ju = uu;
            this.array = Uu()(new Int16Array(ju * ju), [ju, ju])
          }
          set(uu, Eu, ju) {
            this.array.set(uu - this.chunkBottomLeft[0], Eu - this.chunkBottomLeft[1], ju)
          }
          get(uu, Eu) {
            return this.array.get(uu - this.chunkBottomLeft[0], Eu - this.chunkBottomLeft[1])
          }
        }
        class au {
          constructor(uu, Eu, ju, su) {
            this.chunkBottomLeft = Eu, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + uu - 1, this.chunkBottomLeft[1] + uu - 1], this.array = Uu()(new Int16Array(uu * uu * ju * su), [uu, uu, ju, su])
          }
          isInBounds(uu, Eu) {
            return uu >= this.chunkBottomLeft[0] && uu <= this.chunkTopRight[0] && Eu >= this.chunkBottomLeft[1] && Eu <= this.chunkTopRight[1]
          }
          set(uu, Eu, ju, su, Uu) {
            this.array.set(uu - this.chunkBottomLeft[0], Eu - this.chunkBottomLeft[1], ju, su, Uu)
          }
          get(uu, Eu, ju, su) {
            return this.array.get(uu - this.chunkBottomLeft[0], Eu - this.chunkBottomLeft[1], ju, su)
          }
          fill(uu) {
            for (let Eu = 0; Eu < this.array.shape[0]; Eu++)
              for (let ju = 0; ju < this.array.shape[1]; ju++)
                for (let su = 0; su < this.array.shape[2]; su++)
                  for (let Uu = 0; Uu < this.array.shape[3]; Uu++) this.array.set(Eu, ju, su, Uu, uu)
          }
        }
        class Pu {
          constructor(uu, Eu, ju) {
            this.chunkBottomLeft = Eu, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + uu - 1, this.chunkBottomLeft[1] + uu - 1], this.array = Uu()(new Int16Array(uu * uu * ju), [uu, uu, ju])
          }
          isInBounds(uu, Eu) {
            return uu >= this.chunkBottomLeft[0] && uu <= this.chunkTopRight[0] && Eu >= this.chunkBottomLeft[1] && Eu <= this.chunkTopRight[1]
          }
          set(uu, Eu, ju, su) {
            this.array.set(uu - this.chunkBottomLeft[0], Eu - this.chunkBottomLeft[1], ju, su)
          }
          get(uu, Eu, ju) {
            return this.array.get(uu - this.chunkBottomLeft[0], Eu - this.chunkBottomLeft[1], ju)
          }
        }
        class ou {
          constructor(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.chunkBottomLeft = Eu, this.needOutsideChunkDist = ju, this.chunkTopRight = void 0, this.array = void 0;
            const su = uu + 2 * ju,
              Zu = new Array(su * su);
            this.chunkTopRight = [this.chunkBottomLeft[0] + uu - 1, this.chunkBottomLeft[1] + uu - 1], this.array = Uu()(Zu, [su, su])
          }
          isInBounds(uu, Eu) {
            return uu >= this.chunkBottomLeft[0] && uu <= this.chunkTopRight[0] && Eu >= this.chunkBottomLeft[1] && Eu <= this.chunkTopRight[1]
          }
          set(uu, Eu, ju) {
            this.array.set(uu - this.chunkBottomLeft[0] + this.needOutsideChunkDist, Eu - this.chunkBottomLeft[1] + this.needOutsideChunkDist, ju)
          }
          get(uu, Eu) {
            return this.array.get(uu - this.chunkBottomLeft[0] + this.needOutsideChunkDist, Eu - this.chunkBottomLeft[1] + this.needOutsideChunkDist)
          }
        }
        class ku {
          constructor(uu, Eu) {
            this.innerContiguousArray = uu, this.generator = Eu, this.outerSparseArray = []
          }
          static create(uu, Eu, ju) {
            const su = new ou(uu, Eu);
            for (let Uu = Eu[0]; Uu < Eu[0] + uu; Uu++)
              for (let Zu = Eu[1]; Zu < Eu[1] + uu; Zu++) {
                const uu = ju.generate(Uu, Zu);
                su.set(Uu, Zu, uu)
              }
            return new ku(su, ju)
          }
          getOrGenerate(uu, Eu) {
            var ju;
            if (this.innerContiguousArray.isInBounds(uu, Eu)) return this.innerContiguousArray.get(uu, Eu);
            let su = null === (ju = this.outerSparseArray[uu]) || void 0 === ju ? void 0 : ju[Eu];
            return void 0 !== su || (su = this.generator.generate(uu, Eu), this.outerSparseArray[uu] || (this.outerSparseArray[uu] = []), this.outerSparseArray[uu][Eu] = su), su
          }
        }
        class mu {
          constructor(uu) {
            this.generator = uu, this.cache = new Map
          }
          getOrGenerate(uu, Eu) {
            let ju = this.cache.get(uu);
            if (void 0 !== ju) {
              const uu = ju.get(Eu);
              if (void 0 !== uu) return uu
            } else ju = new Map, this.cache.set(uu, ju);
            const su = this.generator.generate(uu, Eu);
            return ju.set(Eu, su), su
          }
        }
        class vu {
          constructor() {
            this.array = []
          }
          get(uu, Eu, ju) {
            var su, Uu;
            return null === (su = this.array[uu]) || void 0 === su || null === (Uu = su[Eu]) || void 0 === Uu ? void 0 : Uu[ju]
          }
          set(uu, Eu, ju, su) {
            this.array[uu] || (this.array[uu] = []), this.array[uu][Eu] || (this.array[uu][Eu] = []), this.array[uu][Eu][ju] = su
          }
        }
        class Ku {
          constructor(uu, Eu) {
            this.outerSparseArray = uu, this.innerContiguousArray = Eu
          }
          get(uu, Eu, ju) {
            if (this.innerContiguousArray.isInBounds(uu, Eu)) return this.innerContiguousArray.get(uu, Eu, ju);
            const su = this.outerSparseArray.get(uu, Eu, ju);
            if (void 0 === su) throw new Error(`Number not found for x=${uu}, z=${Eu}, thirdIndex=${ju}`);
            return su
          }
        }
        const Vu = new class {
          get(uu, Eu, ju) {}
        };
        class ru {
          constructor(uu, Eu) {
            this.innerContiguousArray = uu, this.generator = Eu, this.outerSparseArray = new vu
          }
          static create(uu, Eu, ju, su) {
            const Uu = new Pu(uu, Eu, ju);
            for (let Zu = Eu[0]; Zu < Eu[0] + uu; Zu++)
              for (let ju = Eu[1]; ju < Eu[1] + uu; ju++) su.generateAndSet(Zu, ju, Uu);
            return new ru(Uu, su)
          }
          getOrGenerate(uu, Eu, ju) {
            if (this.innerContiguousArray.isInBounds(uu, Eu)) return this.innerContiguousArray.get(uu, Eu, ju);
            {
              const su = this.outerSparseArray.get(uu, Eu, ju);
              if (void 0 !== su) return su
            }
            return this.generator.generateAndSet(uu, Eu, this.outerSparseArray), this.outerSparseArray.get(uu, Eu, ju)
          }
          viewJustInnerChunk() {
            return new Ku(Vu, this.innerContiguousArray)
          }
        }
        class Qu {
          constructor() {
            this.array = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
          }
          get(uu, Eu, ju, su) {
            var Uu, Zu, Xu;
            return null === (Uu = this.array[uu]) || void 0 === Uu || null === (Zu = Uu[Eu]) || void 0 === Zu || null === (Xu = Zu[ju]) || void 0 === Xu ? void 0 : Xu[su]
          }
          set(uu, Eu, ju, su, Uu) {
            let Zu = this.lastColumn;
            uu === this.lastX && Eu === this.lastZ || (this.array[uu] || (this.array[uu] = []), Zu = this.array[uu][Eu] ??= [], this.lastX = uu, this.lastZ = Eu, this.lastColumn = Zu), Zu[ju] || (Zu[ju] = []), Zu[ju][su] = Uu
          }
        }
        class iu {
          constructor(uu, Eu) {
            this.outerSparseArray = uu, this.innerContiguousArray = Eu
          }
          get(uu, Eu, ju, su) {
            if (this.innerContiguousArray.isInBounds(uu, Eu)) return this.innerContiguousArray.get(uu, Eu, ju, su);
            const Uu = this.outerSparseArray.get(uu, Eu, ju, su);
            if (void 0 === Uu) throw new Error(`Number not found for x=${uu}, z=${Eu}, thirdIndex=${ju}, fourthIndex=${su}`);
            return Uu
          }
        }
        const Wu = new class {
          get(uu, Eu, ju, su) {}
        };
        class Su {
          constructor(uu, Eu) {
            this.innerContiguousArray = uu, this.generator = Eu, this.outerSparseArray = new Qu
          }
          static create(uu, Eu, ju, su, Uu) {
            const Zu = new au(uu, Eu, ju, su);
            for (let Xu = Eu[0]; Xu < Eu[0] + uu; Xu++)
              for (let ju = Eu[1]; ju < Eu[1] + uu; ju++) Uu.generateAndSet(Xu, ju, Zu);
            return new Su(Zu, Uu)
          }
          getOrGenerate(uu, Eu, ju, su) {
            if (this.innerContiguousArray.isInBounds(uu, Eu)) return this.innerContiguousArray.get(uu, Eu, ju, su);
            {
              const Uu = this.outerSparseArray.get(uu, Eu, ju, su);
              if (void 0 !== Uu) return Uu
            }
            return this.generator.generateAndSet(uu, Eu, this.outerSparseArray), this.outerSparseArray.get(uu, Eu, ju, su)
          }
          viewJustInnerChunk() {
            return new iu(Wu, this.innerContiguousArray)
          }
        }
      },
      39969: (uu, Eu, ju) => {
        ju.d(Eu, {
          e: () => qu,
          h: () => Xu,
          l: () => fu,
          m: () => Zu,
          q: () => lu,
          t: () => Uu,
          x: () => su
        });
        const su = {
            seaLevel: 0,
            bedrockLevel: -100
          },
          Uu = -1e4,
          Zu = 1e4,
          Xu = 15,
          lu = -1e4,
          qu = -1e4,
          fu = 2
      },
      39974: (uu, Eu, ju) => {
        ju.d(Eu, {
          d: () => Uu,
          h: () => su,
          j: () => qu,
          n: () => lu,
          p: () => Xu,
          s: () => Zu
        });
        let su = function(uu) {
            return uu[uu.GroundHeight = 0] = "GroundHeight", uu[uu.WaterHeight = 1] = "WaterHeight", uu[uu.CavesAllowedBelowY = 2] = "CavesAllowedBelowY", uu[uu.IsLake = 3] = "IsLake", uu[uu.NumFields = 4] = "NumFields", uu
          }({}),
          Uu = function(uu) {
            return uu[uu.FloorY = 0] = "FloorY", uu[uu.CeilingY = 1] = "CeilingY", uu[uu.NumFields = 2] = "NumFields", uu
          }({});
        const Zu = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem"];
        let Xu = function(uu) {
            return uu[uu.SURFACE = 0] = "SURFACE", uu[uu.UNDERGROUND = 1] = "UNDERGROUND", uu
          }({}),
          lu = function(uu) {
            return uu[uu.HIGH = 0] = "HIGH", uu[uu.MEDIUM = 1] = "MEDIUM", uu[uu.VERY_HIGH = 2] = "VERY_HIGH", uu
          }({}),
          qu = function(uu) {
            return uu[uu.DistanceToNearestFixedPrefab = 0] = "DistanceToNearestFixedPrefab", uu[uu.HeightOfNearestFixedPrefab = 1] = "HeightOfNearestFixedPrefab", uu[uu.NumFields = 2] = "NumFields", uu
          }({})
      },
      4432: (uu, Eu, ju) => {
        ju.d(Eu, {
          b: () => qu,
          d: () => Zu,
          f: () => su,
          i: () => lu,
          m: () => Xu,
          o: () => Uu
        });
        class su {
          constructor(uu) {
            this.a = void 0, this.reseed(uu)
          }
          reseed(uu) {
            let Eu = 2166136261;
            for (let ju = 0; ju < uu.length; ju++) Eu = Math.imul(Eu ^ uu.charCodeAt(ju), 16777619);
            this.a = Eu
          }
          next() {
            let uu = this.a += 1831565813;
            return uu = Math.imul(uu ^ uu >>> 15, 1 | uu), uu ^= uu + Math.imul(uu ^ uu >>> 7, 61 | uu), ((uu ^ uu >>> 14) >>> 0) / 4294967296
          }
        }

        function Uu(uu, Eu) {
          for (let ju = 0; ju < uu.length; ju++) {
            const su = ju + Math.floor(Eu.next() * (uu.length - ju));
            [uu[ju], uu[su]] = [uu[su], uu[ju]]
          }
          return uu
        }
        class Zu {
          constructor(uu) {
            if (this.distribution = void 0, uu.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(uu)}`);
            const Eu = new Set;
            let ju = 0;
            for (const Uu of uu) {
              const su = Uu.value;
              if (Eu.has(su)) throw new Error(`Values must be unique: ${JSON.stringify(uu)}`);
              Eu.add(su);
              const Zu = Uu.weight;
              if (Zu <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(uu)}`);
              ju += Zu
            }
            let su = 0;
            this.distribution = uu.map((uu => {
              let {
                weight: Eu,
                value: Uu
              } = uu;
              return su += Eu / ju, {
                cumulativeProbability: su,
                value: Uu
              }
            }))
          }
          sample(uu) {
            const Eu = uu.next();
            for (const ju of this.distribution)
              if (Eu < ju.cumulativeProbability) return ju.value;
            return this.distribution[this.distribution.length - 1].value
          }
        }
        class Xu {
          constructor(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.offset = void 0, this.multiplier = void 0, uu > Eu) throw new Error(`Min must be less than or equal to Max, but Min=${uu} and Max=${Eu}`);
            ju ? (this.multiplier = uu - Eu, this.offset = Eu) : (this.multiplier = Eu - uu, this.offset = uu)
          }
          sample(uu) {
            return uu.next() * this.multiplier + this.offset
          }
        }
        class lu {
          constructor(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Xu(uu, Eu, ju), !Number.isInteger(uu) || !Number.isInteger(Eu)) throw new Error(`Min and Max must be integers, but Min=${uu} and Max=${Eu}`)
          }
          sample(uu) {
            const Eu = this.uniformRealDistribution.sample(uu);
            return Math.floor(Eu)
          }
        }
        class qu {
          constructor(uu) {
            this.probability = uu
          }
          sample(uu) {
            return uu.next() < this.probability
          }
        }
      },
      649: (uu, Eu, ju) => {
        ju.d(Eu, {
          A: () => Nu,
          C: () => Ou,
          H: () => qu,
          M: () => bu,
          b: () => lu,
          h: () => Xu,
          l: () => Uu,
          w: () => Zu,
          x: () => cu,
          y: () => fu
        });
        var su = ju(656);
        const Uu = 36;
        let Zu = function(uu) {
            return uu[uu.Maple = 0] = "Maple", uu[uu.Pine = 1] = "Pine", uu[uu.Plum = 2] = "Plum", uu[uu.Cedar = 4] = "Cedar", uu[uu.Aspen = 5] = "Aspen", uu[uu.Jungle = 6] = "Jungle", uu[uu.Palm = 7] = "Palm", uu[uu.AutumnMaple = 8] = "AutumnMaple", uu[uu.Pear = 9] = "Pear", uu[uu.Cherry = 10] = "Cherry", uu[uu.Spectral = 11] = "Spectral", uu[uu.Mango = 12] = "Mango", uu[uu.AutumnAspen = 13] = "AutumnAspen", uu[uu.Dead = 14] = "Dead", uu[uu.FallenLog = 15] = "FallenLog", uu
          }({}),
          Xu = function(uu) {
            return uu[uu.COMMON = 0] = "COMMON", uu[uu.UNCOMMON = 1] = "UNCOMMON", uu[uu.RARE = 2] = "RARE", uu[uu.EPIC = 3] = "EPIC", uu[uu.LEGENDARY = 4] = "LEGENDARY", uu
          }({}),
          lu = function(uu) {
            return uu[uu.PLAINS = 0] = "PLAINS", uu[uu.AUTUMN = 1] = "AUTUMN", uu[uu.OASIS = 2] = "OASIS", uu
          }({});

        function qu(uu) {
          return void 0 === uu || null === uu
        }
        const fu = 32,
          Cu = 0 | Math.log2(fu);

        function bu(uu) {
          return uu >> Cu
        }

        function cu(uu) {
          return uu << Cu
        }

        function Nu(uu) {
          return JSON.stringify(uu)
        }
        Nu(new Array(Uu).fill(null));
        su.b, Number(atob("NQ==")), Number(atob("MTM="));

        function Ou(uu, Eu) {
          if ("Air" === uu) return 0;
          const ju = Eu[uu];
          return null === ju || void 0 === ju ? void 0 : ju.id
        }
      },
      656: (uu, Eu, ju) => {
        ju.d(Eu, {
          b: () => su
        });
        const su = 872
      },
      226: (uu, Eu, ju) => {
        var su = {
          "./localConfigValues.ts.clientRelease": 228
        };

        function Uu(uu) {
          var Eu = Zu(uu);
          return ju(Eu)
        }

        function Zu(uu) {
          if (!ju.o(su, uu)) {
            var Eu = new Error("Cannot find module '" + uu + "'");
            throw Eu.code = "MODULE_NOT_FOUND", Eu
          }
          return su[uu]
        }
        Uu.keys = function() {
          return Object.keys(su)
        }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 226
      },
      228: (uu, Eu, ju) => {
        uu.exports = ju.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
      }
    },
    Eu = {};

  function ju(su) {
    var Uu = Eu[su];
    if (void 0 !== Uu) return Uu.exports;
    var Zu = Eu[su] = {
      exports: {}
    };
    return uu[su](Zu, Zu.exports, ju), Zu.exports
  }
  ju.m = uu, ju.n = uu => {
    var Eu = uu && uu.__esModule ? () => uu.default : () => uu;
    return ju.d(Eu, {
      a: Eu
    }), Eu
  }, ju.d = (uu, Eu) => {
    for (var su in Eu) ju.o(Eu, su) && !ju.o(uu, su) && Object.defineProperty(uu, su, {
      enumerable: !0,
      get: Eu[su]
    })
  }, ju.f = {}, ju.e = uu => Promise.all(Object.keys(ju.f).reduce(((Eu, su) => (ju.f[su](uu, Eu), Eu)), [])), ju.u = uu => "static/js/dz8ef." + (70 === uu ? "worldgenTables" : uu) + "." + {
    70: "184e15fd",
    73: "62732eeb",
    74: "a8ae461e",
    75: "f3d7baf5",
    76: "de60deb9"
  } [uu] + ".chunk.js", ju.miniCssF = uu => {}, ju.o = (uu, Eu) => Object.prototype.hasOwnProperty.call(uu, Eu), ju.r = uu => {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(uu, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(uu, "__esModule", {
      value: !0
    })
  }, ju.j = 71, ju.p = "/", (() => {
    var uu = ju.u,
      Eu = ju.e,
      su = {},
      Uu = {};
    ju.u = function(Eu) {
      return uu(Eu) + (su.hasOwnProperty(Eu) ? "?" + su[Eu] : "")
    }, ju.e = function(Zu) {
      return Eu(Zu).catch((function(Eu) {
        var Xu = Uu.hasOwnProperty(Zu) ? Uu[Zu] : 4;
        if (Xu < 1) {
          var lu = uu(Zu);
          if (Eu.message = "Loading chunk " + Zu + " failed after 4 retries.\n(" + lu + ")", Eu.request = lu, su[Zu] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Uu[Zu]
            }), 0), "CSS_CHUNK_LOAD_FAILED" === Eu.code) {
            var qu = ju.miniCssF(Zu);
            Eu.message = Eu.message.replace("Loading chunk", "Loading CSS chunk").replace(lu, qu), Eu.request = qu
          }
          throw Eu
        }
        return new Promise((function(uu) {
          var Eu = 4 - Xu + 1;
          setTimeout((function() {
            var Eu = "cache-bust=" + Date.now();
            su[Zu] = Eu, Uu[Zu] = Xu - 1, uu(ju.e(Zu))
          }), function(uu) {
            return 500 * Math.pow(2, uu)
          }(Eu))
        }))
      }))
    }
  })(), (() => {
    var uu = {
        71: 0
      },
      Eu = Eu => {
        var su, Uu, Zu = Eu.ids,
          Xu = Eu.modules,
          lu = Eu.runtime,
          qu = 0;
        for (su in Xu) ju.o(Xu, su) && (ju.m[su] = Xu[su]);
        for (lu && lu(ju); qu < Zu.length; qu++) Uu = Zu[qu], ju.o(uu, Uu) && uu[Uu] && uu[Uu][0](), uu[Zu[qu]] = 0
      };
    ju.f.j = (su, Uu) => {
      var Zu = ju.o(uu, su) ? uu[su] : void 0;
      if (0 !== Zu)
        if (Zu) Uu.push(Zu[1]);
        else {
          var Xu = import("../../" + ju.u(su)).then(Eu, (Eu => {
            throw 0 !== uu[su] && (uu[su] = void 0), Eu
          }));
          Xu = Promise.race([Xu, new Promise((Eu => Zu = uu[su] = [Eu]))]);
          Uu.push(Zu[1] = Xu)
        }
    }
  })();
  var su = {};

  function Uu(uu, Eu, ju) {
    Eu in uu || Object.defineProperty(uu, Eu, {
      value: ju,
      writable: !0,
      configurable: !0
    })
  }

  function Zu(uu) {
    const Eu = Math.trunc(uu) || 0,
      ju = Eu < 0 ? this.length + Eu : Eu;
    return ju < 0 || ju >= this.length ? void 0 : this[ju]
  }

  function Xu(uu, Eu) {
    for (let ju = this.length - 1; ju >= 0; ju--)
      if (uu.call(Eu, this[ju], ju, this)) return ju;
    return -1
  }

  function lu(uu, Eu) {
    const ju = Xu.call(this, uu, Eu);
    return -1 === ju ? void 0 : this[ju]
  }
  ju.r(su), ju.d(su, {
    eh: () => Wu,
    Gh: () => Su,
    jb: () => Iu,
    default: () => GE,
    initSync: () => eE,
    sb: () => Fu,
    Ub: () => Bu,
    Zb: () => Lu,
    Xb: () => tu,
    lb: () => xu,
    qb: () => Tu,
    fb: () => Hu,
    Cb: () => Au,
    Ob: () => nu,
    hb: () => yu,
    Db: () => zu
  }), Uu(Object, "hasOwn", ((uu, Eu) => Object.prototype.hasOwnProperty.call(uu, Eu)));
  const qu = Object.getPrototypeOf(Uint8Array.prototype);
  for (const cj of [Array.prototype, qu]) Uu(cj, "at", Zu), Uu(cj, "findLast", lu), Uu(cj, "findLastIndex", Xu);
  Uu(String.prototype, "at", Zu), Uu(String.prototype, "toWellFormed", (function() {
    return String(this).replace(/[\uD800-\uDFFF]/gu, "\ufffd")
  }));
  var fu = ju(2976),
    Cu = ju.n(fu);
  class bu extends Error {
    retryable;
    constructor(uu, Eu, ju) {
      super(uu, ju), this.retryable = Eu
    }
  }
  class cu extends bu {}
  class Nu extends Error {}
  globalThis.crypto, globalThis.isSecureContext, Reflect.apply, Object.defineProperty, "undefined" === typeof Response || Response.prototype.arrayBuffer, Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get, "undefined" === typeof Response || Response.prototype.clone, "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "body"), "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "type"), "undefined" === typeof ReadableStream || ReadableStream.prototype.getReader, "undefined" === typeof ReadableStreamDefaultReader || ReadableStreamDefaultReader.prototype.read, Uint8Array.prototype.set, "undefined" === typeof fetch || fetch, "undefined" === typeof WebAssembly || WebAssembly, Array.from({
    length: 256
  }, ((uu, Eu) => Eu.toString(16).padStart(2, "0"))), new Set;
  let Ou = "unloaded",
    Yu = null,
    hu = null,
    Du = null,
    gu = null;
  const Mu = new Set;
  new Set;
  let eu = null,
    Gu = null,
    pu = null,
    wu = !1,
    Ju = 0;

  function du() {
    return "ready" === Ou
  }

  function au() {
    return Ou
  }

  function Pu() {
    return null === Yu ? "not failed" : `${Yu}: ${(uu=hu)instanceof Error?`${uu.name}: ${uu.message}`:String(uu)}`;
    var uu
  }

  function ou() {
    if (!du()) throw new Error(`Bloxd wasm is not ready (${au()}): check isBloxdWasmReady() first`);
    return eu
  }

  function ku() {
    if (!gu) throw new Error("Bloxd wasm has not been instantiated");
    return gu
  }

  function mu(uu, Eu) {
    let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (vu()) {
      let Uu;
      try {
        Uu = uu()
      } catch (su) {
        return Vu(su, function(uu) {
          return uu instanceof Nu ? "integrity" : uu instanceof cu ? "timeout" : uu instanceof bu ? "fetch" : "compile"
        }(su)), !1
      }
      try {
        Ku(ju, Eu, Uu, Eu.initSync({
          module: Uu
        }))
      } catch (su) {
        Vu(su, "instantiate")
      }
    }
    return du()
  }

  function vu() {
    return "unloaded" === Ou && (Ou = "loading", !0)
  }

  function Ku(uu, Eu, ju, su) {
    Gu = uu, eu = Eu, Du = ju, gu = su.memory;
    const {
      Ob: Uu
    } = Eu;
    Ju = "function" === typeof Uu ? Uu() : 0, Ou = "ready",
      function() {
        if (wu) return;
        wu = !0;
        const uu = console.error;
        console.error = function() {
          for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
          const [Uu] = ju;
          "string" === typeof Uu && Uu.startsWith("panicked at") && (pu = Uu, function() {
            if (!gu || 0 === Ju) return 0;
            const uu = new Uint32Array(gu.buffer, Ju, 1),
              Eu = uu[0] ?? 0;
            uu[0] = 0
          }()), uu.apply(console, ju)
        }
      }()
  }

  function Vu(uu, Eu) {
    Ou = "failed", Yu = Eu, hu = uu, console.error(`Bloxd wasm failed (${Eu}):`, uu);
    const ju = [...Mu];
    Mu.clear();
    for (const su of ju) ru(su)
  }

  function ru(uu) {
    try {
      uu()
    } catch (Eu) {
      console.error("A Bloxd wasm failure listener threw:", Eu)
    }
  }
  const Qu = ["none", "idle", "now"];

  function iu() {
    const uu = () => ou();
    return {
      memoryBytes: () => ku().buffer.byteLength,
      reserveUpFront: Eu => uu().Xb(Eu),
      reserveAhead: Eu => uu().Zb(Eu),
      setCeiling: Eu => {
        uu().lb(Eu)
      },
      lowWater: () => Qu[uu().Ub()] ?? "none",
      stats: () => function(uu) {
        const Eu = new Uint32Array(ku().buffer, uu, 17),
          ju = uu => Eu[uu] ?? 0,
          su = uu => ({
            upFront: ju(uu),
            ahead: ju(uu + 1),
            onDemandInFrame: ju(uu + 2),
            onDemand: ju(uu + 3)
          });
        return {
          memoryBytes: ju(0),
          initialBytes: ju(1),
          liveBytes: ju(2),
          peakLiveBytes: ju(3),
          headroomBytes: ju(4),
          unusedBytes: ju(5),
          ceilingBytes: ju(6),
          reservesRefused: ju(7),
          grows: su(8),
          grownBytes: su(12),
          allocationsRefused: ju(16)
        }
      }(uu().qb()),
      takeBallast: () => uu().fb(),
      takePressure: () => uu().Cb()
    }
  }
  class Wu {
    __destroy_into_raw() {
      const uu = this.__wbg_ptr;
      return this.__wbg_ptr = 0, uE.unregister(this), uu
    }
    free() {
      const uu = this.__destroy_into_raw();
      DE.k1OY(uu, 0)
    }
    encode(uu) {
      const Eu = fE(uu, DE.NxM7, DE.DtDy),
        ju = gE;
      DE.QMRU(this.__wbg_ptr, Eu, ju)
    }
    Jh() {
      return DE.qXVE(this.__wbg_ptr) >>> 0
    }
    constructor() {
      const uu = DE.x0VY();
      return this.__wbg_ptr = uu, uE.register(this, this.__wbg_ptr, this), this
    }
    dh() {
      return DE.a8Ym(this.__wbg_ptr) >>> 0
    }
    ah() {
      return DE.JfmP(this.__wbg_ptr) >>> 0
    }
    ph() {
      return DE.QibH(this.__wbg_ptr) >>> 0
    }
  }
  Symbol.dispose && (Wu.prototype[Symbol.dispose] = Wu.prototype.free);
  class Su {
    __destroy_into_raw() {
      const uu = this.__wbg_ptr;
      return this.__wbg_ptr = 0, EE.unregister(this), uu
    }
    free() {
      const uu = this.__destroy_into_raw();
      DE.fwpP(uu, 0)
    }
    init(uu) {
      return DE.FxJh(this.__wbg_ptr, uu) >>> 0
    }
    ib(uu) {
      return DE.vncx(this.__wbg_ptr, uu) >>> 0
    }
    constructor(uu) {
      const Eu = DE.voBP(void 0 === (ju = uu) || null === ju ? Number.MAX_SAFE_INTEGER : uu >>> 0);
      var ju;
      return this.__wbg_ptr = Eu, EE.register(this, this.__wbg_ptr, this), this
    }
    Bb() {
      return DE.FTQG(this.__wbg_ptr) >>> 0
    }
    Sb() {
      return DE.XXUH(this.__wbg_ptr) >>> 0
    }
    run(uu) {
      return DE.f74D(this.__wbg_ptr, uu) >>> 0
    }
  }

  function Iu(uu, Eu) {
    const ju = fE(uu, DE.NxM7, DE.DtDy),
      su = gE,
      Uu = DE.oyZG(ju, su, Eu);
    if (Uu[1]) throw CE(Uu[0])
  }

  function Fu() {
    DE.BB0P()
  }

  function Bu() {
    return DE.nVDP() >>> 0
  }

  function Lu(uu) {
    return 0 !== DE.n3m6(uu)
  }

  function tu(uu) {
    return 0 !== DE.asck(uu)
  }

  function xu(uu) {
    DE.Hd7C(uu)
  }

  function Tu() {
    return DE.irk7() >>> 0
  }

  function Hu() {
    return DE.llCc() >>> 0
  }

  function Au() {
    return 0 !== DE.m1yh()
  }

  function nu() {
    return DE.CUO4() >>> 0
  }

  function yu() {
    let uu, Eu;
    try {
      const ju = DE.GMTV();
      return uu = ju[0], Eu = ju[1], sE(ju[0], ju[1])
    } finally {
      DE.qz0y(uu, Eu, 1)
    }
  }

  function zu(uu) {
    DE.d4UH(jE(uu))
  }

  function Ru() {
    return {
      __proto__: null,
      Fs74: {
        __proto__: null,
        ZtVb: function(uu, Eu) {
          return jE(Error(sE(uu, Eu)))
        },
        RY6b: function(uu, Eu) {
          throw new Error(sE(uu, Eu))
        },
        Y4j1: function(uu) {
          XE(uu).call()
        },
        RgII: function(uu, Eu) {
          console.error(sE(uu, Eu))
        },
        berE: function(uu) {
          CE(uu)
        }
      }
    }
  }
  Symbol.dispose && (Su.prototype[Symbol.dispose] = Su.prototype.free);
  const uE = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => DE.k1OY(uu, 1))),
    EE = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => DE.fwpP(uu, 1)));

  function jE(uu) {
    qE === lE.length && lE.push(lE.length + 1);
    const Eu = qE;
    return qE = lE[Eu], lE[Eu] = uu, Eu
  }

  function sE(uu, Eu) {
    return function(uu, Eu) {
      NE += Eu, NE >= cE && (bE = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }), bE.decode(), NE = Eu);
      return bE.decode(ZE().subarray(uu, uu + Eu))
    }(uu >>> 0, Eu)
  }
  let UE = null;

  function ZE() {
    return null !== UE && 0 !== UE.byteLength || (UE = new Uint8Array(DE.memory.buffer)), UE
  }

  function XE(uu) {
    return lE[uu]
  }
  let lE = new Array(1024).fill(void 0);
  lE.push(void 0, null, !0, !1);
  let qE = lE.length;

  function fE(uu, Eu, ju) {
    if (void 0 === ju) {
      const ju = OE.encode(uu),
        su = Eu(ju.length, 1) >>> 0;
      return ZE().subarray(su, su + ju.length).set(ju), gE = ju.length, su
    }
    let su = uu.length,
      Uu = Eu(su, 1) >>> 0;
    const Zu = ZE();
    let Xu = 0;
    for (; Xu < su; Xu++) {
      const Eu = uu.charCodeAt(Xu);
      if (Eu > 127) break;
      Zu[Uu + Xu] = Eu
    }
    if (Xu !== su) {
      0 !== Xu && (uu = uu.slice(Xu)), Uu = ju(Uu, su, su = Xu + 3 * uu.length, 1) >>> 0;
      const Eu = ZE().subarray(Uu + Xu, Uu + su);
      Xu += OE.encodeInto(uu, Eu).written, Uu = ju(Uu, su, Xu, 1) >>> 0
    }
    return gE = Xu, Uu
  }

  function CE(uu) {
    const Eu = XE(uu);
    return function(uu) {
      uu < 1028 || (lE[uu] = qE, qE = uu)
    }(uu), Eu
  }
  let bE = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  });
  bE.decode();
  const cE = 2146435072;
  let NE = 0;
  const OE = new TextEncoder;
  "encodeInto" in OE || (OE.encodeInto = function(uu, Eu) {
    const ju = OE.encode(uu);
    return Eu.set(ju), {
      read: uu.length,
      written: ju.length
    }
  });
  let YE, hE, DE, gE = 0;

  function ME(uu, Eu) {
    return hE = uu, DE = uu.exports, YE = Eu, UE = null, DE.DCIo(), DE
  }

  function eE(uu) {
    if (void 0 !== DE) return DE;
    void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
      module: uu
    } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const Eu = Ru();
    uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
    return ME(new WebAssembly.Instance(uu, Eu), uu)
  }
  async function GE(uu) {
    if (void 0 !== DE) return DE;
    void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
      module_or_path: uu
    } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
    const Eu = Ru();
    ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
    const {
      instance: ju,
      module: su
    } = await async function(uu, Eu) {
      if ("function" === typeof Response && uu instanceof Response) {
        if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
        if ("function" === typeof WebAssembly.instantiateStreaming) try {
          return await WebAssembly.instantiateStreaming(uu, Eu)
        } catch (ju) {
          if (! function(uu) {
              switch (uu) {
                case "basic":
                case "cors":
                case "default":
                  return !0
              }
              return !1
            }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw ju;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ju)
        }
        const su = await uu.arrayBuffer();
        return await WebAssembly.instantiate(su, Eu)
      } {
        const ju = await WebAssembly.instantiate(uu, Eu);
        return ju instanceof WebAssembly.Instance ? {
          instance: ju,
          module: uu
        } : ju
      }
    }(await uu, Eu);
    return ME(ju, su)
  }

  function pE() {
    return function(uu, Eu) {
      if (!du()) throw new Error(`Bloxd wasm is not ready (${au()}): check isBloxdWasmReady() first`);
      if (eu !== uu) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${Eu}`)
    }(su, "the wasm client's workers' exports"), su
  }
  var wE = ju(649);
  class JE {
    constructor(uu, Eu, su, Uu, Zu, Xu, lu, qu, fu) {
      var Cu, bu;
      this.defaultGenerator = void 0, this.layerEntries = void 0;
      const {
        WorldGenerator: cu
      } = ju(40067), Nu = function(uu, Eu, ju) {
        if (null === uu) return null;
        for (const lu of uu.ns) mE(lu, ju);
        const su = uu.terrain;
        if (null === su) return {
          ns: uu.ns,
          buildBiomes: null
        };
        const Uu = Object.hasOwn(Eu, su.name) ? Eu[su.name] : void 0;
        if (void 0 === Uu) {
          const uu = Object.keys(Eu);
          throw new Error(`Custom world-gen terrain "${su.name}" is not in this generator's catalogue (${uu.length>0?uu.join(", "):"empty"})`)
        }
        const Zu = Uu(),
          Xu = function(uu, Eu) {
            if (!Eu.parseOptions) {
              if (null !== uu.Hs) throw new Error(`Custom world-gen terrain "${uu.name}" takes no options`);
              return null
            }
            let ju = null;
            if (null !== uu.Hs) try {
              ju = JSON.parse(uu.Hs)
            } catch (su) {
              throw new Error(`Custom world-gen terrain "${uu.name}" has invalid optionsJson: ${String(su)}`, {
                cause: su
              })
            }
            return Eu.parseOptions(ju)
          }(su, Zu);
        return {
          ns: uu.ns,
          buildBiomes: uu => Zu.buildBiomes(uu, Xu)
        }
      }(null !== (Cu = null === lu || void 0 === lu ? void 0 : lu.Ls) && void 0 !== Cu ? Cu : null, qu, Eu);
      this.defaultGenerator = new cu(uu, Eu, su, Uu, Zu, Xu, null, Nu, fu);
      const Ou = null !== (bu = null === lu || void 0 === lu ? void 0 : lu.layers) && void 0 !== bu ? bu : [];
      ! function(uu, Eu) {
        for (const su of uu) dE(su, Eu);
        const ju = [...uu].sort(((uu, Eu) => uu.ss - Eu.ss));
        for (let su = 1; su < ju.length; su++)
          if (ju[su].ss < ju[su - 1].Us) throw new Error(`Custom world-gen layers overlap: [${ju[su-1].ss}, ${ju[su-1].Us}) and [${ju[su].ss}, ${ju[su].Us})`)
      }(Ou, Eu), this.layerEntries = Ou.map((ju => ({
        layer: ju,
        generator: new cu(uu, Eu, su, Uu, Zu, Xu, ju, null, fu)
      })))
    }
    getChunk(uu, Eu, ju, su) {
      for (const {
          layer: Uu,
          generator: Zu
        }
        of this.layerEntries)
        if (ju >= Uu.ss && ju < Uu.Us) return Zu.getChunk(uu, Eu, ju - Uu.Zs, su);
      return this.defaultGenerator.getChunk(uu, Eu, ju, su)
    }
    getBiomeSelector() {
      return this.defaultGenerator.biomeSelector
    }
    getPrefabLootChests(uu, Eu, ju, su, Uu) {
      return this.defaultGenerator.getPrefabLootChests(uu, Eu, ju, su, Uu)
    }
    getTreeGenerator() {
      return this.defaultGenerator.treeGenerator
    }
    getOresForChunkColumn(uu, Eu) {
      return this.defaultGenerator.getOresForChunkColumn(uu, Eu)
    }
  }

  function dE(uu, Eu) {
    if (uu.ss >= uu.Us) throw new Error(`Custom world-gen layer has minY (${uu.ss}) >= maxY (${uu.Us})`);
    if (uu.ss % wE.y !== 0 || uu.Us % wE.y !== 0 || uu.Zs % wE.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${wE.y}); got minY=${uu.ss}, maxY=${uu.Us}, groundY=${uu.Zs}`);
    if (function(uu, Eu) {
        if (void 0 === (0, wE.C)(uu.fs, Eu)) throw new Error(`Custom world-gen caves lavaPitBlock "${uu.fs}" not found in blockMetadata`);
        if (uu.Cs)
          for (const ju of uu.Cs) aE(ju, Eu)
      }(uu.ls, Eu), 0 === uu.Ps.length) throw new Error("Custom world-gen layer must have at least one biome");
    let ju = 0;
    for (const su of uu.Ps) kE(su, Eu), ju += su.frequency;
    if (ju <= 0) throw new Error("Custom world-gen layer biome frequencies must sum to > 0");
    for (const su of uu.Ss) mE(su, Eu)
  }

  function aE(uu, Eu) {
    const {
      blockName: ju,
      Ns: su,
      Os: Uu,
      Ys: Zu
    } = uu;
    if (void 0 === (0, wE.C)(ju, Eu)) throw new Error(`Custom world-gen cave decoration blockName "${ju}" not found in blockMetadata`);
    if (!su && !Uu && !Zu) throw new Error(`Custom world-gen cave decoration "${ju}" must allow at least one of floor/walls/ceiling anchoring`);
    if (Uu)
      for (const Xu of ["meta|rot1|side", "meta|rot2|side", "meta|rot3|side", "meta|rot4|side"]) PE(ju, Xu, Eu);
    if (Zu && PE(ju, "meta|rot1|top", Eu), oE(uu.hs, ju, "hs"), oE(uu.Ds, ju, "Ds"), !Number.isInteger(uu.gs) || uu.gs < 0) throw new Error(`Custom world-gen cave decoration "${ju}" minPlacements must be a non-negative integer, got ${uu.gs}`);
    if (!(0, wE.H)(uu.Ms) && (oE(uu.Ms.Gs, ju, "depthRamp.deepClusterChance"), uu.Ms.ws <= uu.Ms.ds)) throw new Error(`Custom world-gen cave decoration "${ju}" deepY must be strictly smaller than shallowY, but ${uu.Ms.ws} <= ${uu.Ms.ds} `)
  }

  function PE(uu, Eu, ju) {
    const su = `${uu}|${Eu}`;
    if (void 0 === (0, wE.C)(su, ju)) throw new Error(`Custom world-gen cave decoration "${uu}" is missing directional variant "${su}" required for wall/ceiling anchoring`)
  }

  function oE(uu, Eu, ju) {
    if (uu < 0 || uu > 1) throw new Error(`Custom world-gen cave decoration "${Eu}" ${ju} must be in [0, 1], got ${uu}`)
  }

  function kE(uu, Eu) {
    if (uu.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${uu.frequency}`);
    if (void 0 === (0, wE.C)(uu.Ks, Eu)) throw new Error(`Custom world-gen biome topsoilBlock "${uu.Ks}" not found in blockMetadata`);
    if (void 0 === (0, wE.C)(uu.Vs, Eu)) throw new Error(`Custom world-gen biome lowsoilBlock "${uu.Vs}" not found in blockMetadata`);
    if (0 === uu.Qs.length) throw new Error("Custom world-gen biome must have at least one stoneType");
    for (const ju of uu.Qs) {
      if (ju.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${ju.frequency}`);
      if (void 0 === (0, wE.C)(ju.blockName, Eu)) throw new Error(`Custom world-gen biome stoneType blockName "${ju.blockName}" not found in blockMetadata`)
    }
  }

  function mE(uu, Eu) {
    if (void 0 === (0, wE.C)(uu.blockName, Eu)) throw new Error(`Custom world-gen ore blockName "${uu.blockName}" not found in blockMetadata`);
    if (uu.radius < 0) throw new Error(`Custom world-gen ore "${uu.blockName}" radius must be >= 0, got ${uu.radius}`);
    if (uu.Fs <= 0) throw new Error(`Custom world-gen ore "${uu.blockName}" minDistBetweenDeposits must be > 0, got ${uu.Fs}`);
    if (uu.ss > uu.Us) throw new Error(`Custom world-gen ore "${uu.blockName}" minY (${uu.ss}) must be <= maxY (${uu.Us})`);
    if (uu.Bs < 0 || uu.Bs > 1) throw new Error(`Custom world-gen ore "${uu.blockName}" spawnChance must be in [0, 1], got ${uu.Bs}`)
  }
  const vE = "buildAFactory2/wasteland",
    KE = {
      blockName: "Uranium Ore",
      radius: 2,
      Fs: 10,
      ss: -98,
      Us: -78,
      Bs: .4
    },
    VE = [{
      blockName: "Copper Ore",
      radius: 2,
      Fs: 6,
      ss: -40,
      Us: 20,
      Bs: .6
    }, {
      blockName: "Voltite Ore",
      radius: 2,
      Fs: 10,
      ss: -75,
      Us: -55,
      Bs: .4
    }],
    rE = {
      name: vE,
      Hs: null
    };
  const QE = {
    [vE]: () => ju(39953).c
  };
  Math.round(29.999999999999996);
  const iE = 0,
    WE = 1,
    SE = 2,
    IE = 32;
  const FE = 1048576;
  const BE = "1336701983750492191";

  function LE() {
    {
      if ("undefined" === typeof window) return !1;
      const uu = window.location.hostname;
      return uu.includes("preprod") || uu.includes(BE)
    }
  }
  const tE = [8, 11, 15, 16, 17, 18, 19],
    xE = [];
  for (let cj = 0; cj <= 30; cj++) tE.includes(cj) || xE.push(10 * cj);
  const TE = xE;
  TE.filter((uu => 0 !== uu));
  const HE = function(uu) {
      if (void 0 === uu || "" === uu) return 0;
      const Eu = Number(uu);
      if (!TE.includes(Eu)) throw new Error(`Invalid port offset "${uu}". Must be one of: ${TE.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
      return Eu
    }("0"),
    AE = 4500;

  function nE(uu, Eu) {
    const ju = {};
    for (const su of Object.keys(uu)) ju[su] = uu[su] + Eu;
    return ju
  }
  const yE = {
      1: 6585,
      2: 6586,
      3: 6587
    },
    zE = {
      1: 6585,
      2: 6586,
      3: 6587,
      4: 6588,
      5: 6589,
      6: 6590,
      7: 6591,
      8: 6592,
      9: 6593,
      10: 6594,
      11: 6595,
      12: 6596,
      13: 6597,
      14: 6598,
      15: 6599,
      16: 6600,
      17: 6601,
      18: 6602,
      19: 6603,
      20: 6604,
      21: 6605,
      22: 6606,
      23: 6607,
      24: 6608,
      25: 6609,
      26: 6610,
      27: 6611,
      28: 6612,
      29: 6613
    },
    RE = {
      1: 5585,
      2: 5586,
      3: 5587,
      4: 5588,
      5: 5589,
      6: 5590,
      7: 5591,
      8: 5592,
      9: 5593,
      10: 5594,
      11: 5595,
      12: 5596,
      13: 5597,
      14: 5598,
      15: 5599,
      16: 5600,
      17: 5601,
      18: 5602,
      19: 5603,
      20: 5604,
      21: 5605,
      22: 5606,
      23: 5607,
      24: 5608,
      25: 5609,
      26: 5610,
      27: 5611,
      28: 5612,
      29: 5613
    };
  ! function(uu) {
    const Eu = LE() ? yE : zE;
    nE(Eu, uu), nE(RE, uu)
  }(HE);
  const uj = {
    localGameName: null,
    devOnlyGameNames: ["testGym", "schematicTester"],
    allowDuplicateIds: !1,
    useLocalDatabase: !1,
    useBillingSandbox: !1,
    useBillingTestProjects: !1,
    useFakeAppStores: !1,
    greenlightChecksEnabled: !0,
    offlineMode: !1,
    useYoutubeApi: !1,
    localDomain: "localhost",
    useAdsInDev: !1,
    msnDevPublicKey: null
  };
  !0 === uj.offlineMode && (console.log("Booting in offline mode..."), !1 === uj.useLocalDatabase && console.log("useLocalDatabase is false in offline mode. Setting useLocalDatabase to true."), uj.useLocalDatabase = !0, !0 === uj.greenlightChecksEnabled && console.log("greenlightChecksEnabled is true in offline mode. Setting greenlightChecksEnabled to false."), uj.greenlightChecksEnabled = !1, uj.useBillingSandbox = !0);
  const Ej = 10,
    jj = 3,
    sj = (uj.greenlightChecksEnabled, uj.greenlightChecksEnabled, {
      serverDisconnected: {
        code: 4e3,
        text: "The server is restarting or there are problems with your internet.",
        canReconnect: !0
      },
      inactivity: {
        code: 4001,
        text: "Kicked for inactivity.",
        canReconnect: !0
      },
      invalidOnjoinArgs: {
        code: 4002,
        text: "This is a bug in bloxd.\nLeave reason: Invalid onJoin arguments.\n",
        canReconnect: !1
      },
      failedToConnect: {
        code: 4003,
        text: "This is a bug in bloxd.\nLeave reason: Error during attachment, unexpected values received.\n",
        canReconnect: !1
      },
      outdatedVersion: {
        code: 4004,
        text: "Running outdated client version\nRefresh your page",
        canReconnect: !1
      },
      wrongLobbyGame: {
        code: 4005,
        text: "Invalid lobby game. This is a bug, please report it on discord.",
        canReconnect: !1
      },
      lobbyDoesntExist: {
        code: 4006,
        text: "Invalid lobby. This is a bug, please report it on discord.",
        canReconnect: !1
      },
      invalidOnJoinArgs3: {
        code: 4007,
        text: "Broken lobby? This is a bug, pls report on discord.",
        canReconnect: !1
      },
      gameOrPluginKick: {
        code: 4008,
        text: "",
        canReconnect: !1
      },
      invalidOnJoinArgs7: {
        code: 4009,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (7).\n",
        canReconnect: !1
      },
      loadDbValsError: {
        code: 4010,
        text: "Error occured loading database values in onAuth. This is a bug, pls report on discord.",
        canReconnect: !0
      },
      noNameError: {
        code: 4011,
        text: "Account does not have saved name. Try rejoining. If this keeps happening, pls report on discord.",
        canReconnect: !0
      },
      roomDisposedEarlyError: {
        code: 4012,
        text: "Error: Room was disposed at start of onAuth called. If this happens repeatedly, pls report on discord.",
        canReconnect: !0
      },
      duplicateLobbyNameError: {
        code: 4013,
        text: "Error: Server created two rooms with same lobby name. If this happens repeatedly, pls report on discord.",
        canReconnect: !0
      },
      idBanned: {
        code: 4014,
        text: "",
        canReconnect: !1
      },
      onJoinError: {
        code: 4015,
        text: "Error during onJoin. This is a bug, pls report on discord.",
        canReconnect: !0
      },
      serverShuttingDownError: {
        code: 4016,
        text: "Error: Server is in the middle of the shutdown process. If this happens repeatedly, pls report on discord.",
        canReconnect: !1
      },
      invalidOnjoinArgs4: {
        code: 4017,
        text: "Bug in bloxd.\nLeave reason: Invalid onJoin arguments.\n",
        canReconnect: !1
      },
      clientLeftDuringAuth: {
        code: 4018,
        text: "Client left during onAuth.\nThis is a bug, please report on discord.\n",
        canReconnect: !0
      },
      invalidOnJoinArgs5: {
        code: 4019,
        text: "This is a bug in bloxd.\nIssue: onjoin arguments are invalid.\n",
        canReconnect: !1
      },
      VpnIp: {
        code: 4020,
        text: "Your network's IP is listed as a proxy or VPN.\nIf you use one, turn it off and refresh the page.\n",
        canReconnect: !1
      },
      GlobalBan: {
        code: 4021,
        text: "You have been banned from bloxd",
        canReconnect: !1
      },
      cannotJoinTwice: {
        code: 4022,
        text: "Your account is already playing.",
        canReconnect: !1
      },
      banned: {
        code: 4023,
        text: "",
        canReconnect: !1
      },
      wrongLobbyVariation: {
        code: 4024,
        text: "Invalid lobby variation. This is a bug, please report it on discord.",
        canReconnect: !1
      },
      loadProxyTypeError: {
        code: 4025,
        text: "Error occured loading proxy type in onAuth. This is a bug, pls report on discord.",
        canReconnect: !0
      },
      loadRecaptchaError: {
        code: 4026,
        text: "Error occured loading recaptcha values in onAuth. This is a bug, pls report on discord.",
        canReconnect: !1
      },
      socialPlayerAttemptJoinError: {
        code: 4027,
        text: "Error occured during social playerAttemptJoin in onAuth.\nYour account may be playing in another tab or location.\nThis is a bug, pls report on discord.",
        canReconnect: !1
      },
      socialPlayerAttemptJoinFail: {
        code: 4028,
        text: "Social playerAttemptJoin failed.\nYour account may be playing in another tab or location.\nThis is a bug, pls report on discord.",
        canReconnect: !1
      },
      roomDisposedLateError: {
        code: 4029,
        text: "Error: Room was disposed at end of onAuth called. If this happens repeatedly, pls report on discord.",
        canReconnect: !0
      },
      failedConnectionArgs: {
        code: 4030,
        text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join.\nPlease report on discord if this repeatedly happens.",
        canReconnect: !0
      },
      failedConnectionArgs2: {
        code: 4031,
        text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 2.\nPlease report on discord if this repeatedly happens.",
        canReconnect: !0
      },
      invalidOnJoinArgs6: {
        code: 4032,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (6).\n",
        canReconnect: !1
      },
      invalidOnJoinArgs8: {
        code: 4033,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (8).\n",
        canReconnect: !1
      },
      invalidOnJoinArgs9: {
        code: 4034,
        text: "Bloxd is (probably) updating.\nPlease refresh your page and try again in a few minutes.\nIf this keeps happening, please report on discord.",
        canReconnect: !1
      },
      kickedDuringOnAuth: {
        code: 4035,
        text: "You were kicked before joining the game.\nYour account is likely playing in another tab or location.\nPlease report on discord if this keeps happening.",
        canReconnect: !1
      },
      tooManyRoomsInCreation: {
        code: 4036,
        text: "Lobby creation failed.\nToo many rooms in creation.\nPlease report on discord if this keeps happening.",
        canReconnect: !0
      },
      pluginOnPlayerAuthFailed: {
        code: 4037,
        text: "You were kicked before joining the game.\nThis is likely a bug in game-plugin code.\nPlease report on discord if this keeps happening.",
        canReconnect: !1
      },
      gameOnPlayerAuthFailed: {
        code: 4038,
        text: "You were kicked before joining the game.\nThis is likely a bug in game code.\nPlease report on discord if this keeps happening.",
        canReconnect: !1
      },
      onCreateDbPromisesFail: {
        code: 4039,
        text: "Lobby creation failed.\nDb promises were rejected.\nPlease report on discord if this keeps happening.",
        canReconnect: !0
      },
      onAuthDbPromisesFail: {
        code: 4040,
        text: "Player auth failed.\nDb promises were rejected.\nPlease report on discord if this keeps happening.",
        canReconnect: !0
      },
      unknownOnCreateError: {
        code: 4041,
        text: "Unknown error during onCreate.\nThis is a bug, please report on discord.",
        canReconnect: !0
      },
      errorGettingGame: {
        code: 4042,
        text: "Error getting game.\nThis is a bug, please report on discord.",
        canReconnect: !1
      },
      malformedPacket: {
        code: 4043,
        text: "Malformed packet.\nThis is a bug, please report on discord.",
        canReconnect: !1
      },
      failedConnectionArgs3: {
        code: 4044,
        text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 3.\nPlease report on discord if this repeatedly happens.",
        canReconnect: !1
      },
      invalidOnJoinArgs10: {
        code: 4045,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (10).\n",
        canReconnect: !1
      },
      invalidOnJoinArgs11: {
        code: 4046,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (11).\n",
        canReconnect: !1
      },
      invalidOnJoinArgs12: {
        code: 4047,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (12).\n",
        canReconnect: !1
      },
      failedConnectionArgs4: {
        code: 4048,
        text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 4.\nPlease report on discord if this repeatedly happens.",
        canReconnect: !1
      },
      failedConnectionArgs5: {
        code: 4049,
        text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 5.\nPlease report on discord if this repeatedly happens.",
        canReconnect: !1
      },
      gameOrPluginOnPlayerAuthRejected: {
        code: 4050,
        text: "",
        canReconnect: !1
      },
      failedDownloadPlayerSchematic: {
        code: 4052,
        text: "The schematic failed to download. The schematic may have been deleted or there was an error in the download process.\nIf you believe this is a bug, please report on discord.",
        canReconnect: !1
      },
      schematicNotPublished: {
        code: 4053,
        text: "The game you're trying to join isn't available to play.",
        canReconnect: !1
      },
      invalidCustomGame: {
        code: 4054,
        text: "Invalid custom game.\nIf you believe this is a bug, please report on discord.",
        canReconnect: !1
      },
      lobbyIsFull: {
        code: 4055,
        text: "Lobby is full",
        canReconnect: !1
      },
      customGameUpdated: {
        code: 4056,
        text: "This custom game has been updated.",
        canReconnect: !0
      },
      customGameNoLongerPlayable: {
        code: 4057,
        text: "The game has been unpublished and is no longer playable.\nIf you believe this is a bug, please report on discord.",
        canReconnect: !1
      },
      tooManyRequests: {
        code: 4058,
        text: "We have received too many requests.\nPlease try rejoining.",
        canReconnect: !0
      },
      lobbyCantBeCreated: {
        code: 4059,
        text: "Lobby cannot be created. This is a bug, please report it on discord.",
        canReconnect: !0
      },
      inactivityCode2: {
        code: 4060,
        text: "Kicked for inactivity. Code 2",
        canReconnect: !1
      },
      inactivityCode3: {
        code: 4061,
        text: "Kicked for inactivity. Code 3",
        canReconnect: !1
      },
      missingIp: {
        code: 4062,
        text: "This is a bug in bloxd.\nLeave reason: Failed to fully verify join. Code 6.\nPlease report on discord if this repeatedly happens.",
        canReconnect: !1
      },
      schematicBanned: {
        code: 4063,
        text: "The game you're trying to join has been banned.",
        canReconnect: !1
      },
      adminClosedLobby: {
        code: 4064,
        text: "Lobby has been closed by Bloxd admin.",
        canReconnect: !1
      },
      unknownOnAuthError: {
        code: 4065,
        text: "Unknown error during onAuth. This is a bug, please report on discord.",
        canReconnect: !0
      },
      invalidOnJoinArgs2: {
        code: 4066,
        text: "Bug in bloxd.\nIssue: Invalid onJoin arguments (2).\n",
        canReconnect: !1
      },
      roomOutOfMemory: {
        code: 4067,
        text: "Lobby has run out of memory.",
        canReconnect: !0
      },
      webSocketRateLimit: {
        code: 4068,
        text: "We have received too many requests.\nPlease try rejoining."
      },
      kickedBeforeJoinFinished: {
        code: 4069,
        text: "You were kicked from the game.",
        canReconnect: !1
      },
      worldCodeTimeout: {
        code: 4070,
        text: "This world's custom code has an error and stopped responding.",
        canReconnect: !0
      },
      roomWorkerCrashed: {
        code: 4071,
        text: "This lobby stopped unexpectedly.",
        canReconnect: !0
      },
      serverRoomLimitReached: {
        code: 4072,
        text: "This server has no space for a new lobby. Please try rejoining.",
        canReconnect: !0
      },
      serverUpdating: {
        code: 4073,
        text: "Bloxd is updating.",
        canReconnect: !0
      },
      wasmClientNotAllowed: {
        code: 4074,
        text: "",
        canReconnect: !1
      },
      missingLobbyVariation: {
        code: 4075,
        text: "Pick a mode first, e.g. /play/bedwars_solo",
        canReconnect: !1
      }
    });
  atob("I0lW");
  const Uj = new Set;
  for (const cj in sj) {
    const uu = sj[cj].code;
    if (Uj.has(uu)) throw new Error(`Duplicate leave code: ${uu}`);
    Uj.add(uu)
  }! function() {
    const uu = Xj(Ej + 1, jj + 1);
    let Eu = uu;
    for (; Zj(Eu) < uu;) Eu++
  }();

  function Zj(uu) {
    return uu - Math.floor(uu / 6)
  }

  function Xj(uu, Eu) {
    const ju = Math.max(uu, Eu);
    let su = 0;
    for (let Uu = -ju; Uu <= ju; Uu++)
      for (let Zu = -ju; Zu <= ju; Zu++)
        for (let Xu = -ju; Xu <= ju; Xu++) lj(uu, Eu, Uu, Zu, Xu) && su++;
    return su
  }

  function lj(uu, Eu, ju, su, Uu) {
    const Zu = ju * ju + Uu * Uu;
    return uu === Eu ? Zu + su * su <= uu * uu : uu > Eu ? Math.abs(su) <= Eu && Zu + su * su <= uu * uu : Zu <= uu * uu && Zu + su * su <= Eu * Eu
  }
  const qj = 65536;
  ! function(uu) {
    const Eu = 6815744 + (ju = uu, Math.floor(33554432 * ju / 6144)) + 135680 * uu;
    var ju;
    Math.ceil((85983232 + Eu) / qj)
  }(6144);
  const fj = 16 * FE;

  function Cj(uu) {
    return function(uu) {
      return mu((() => uu), su)
    }(uu)
  }
  const bj = globalThis.WorkerGlobalScope;
  if (void 0 !== bj && globalThis instanceof bj) {
    const uu = Promise.all([ju.e(73), ju.e(76), ju.e(75), ju.e(74), ju.e(70)]).then((() => ju(40062))).then((uu => {
      let {
        worldGenMetadata: Eu
      } = uu;
      return Eu
    }));
    uu.catch((() => {})),
      function(uu, Eu) {
        let {
          initWasm: ju = Cj,
          terrains: su,
          loadTables: Uu,
          now: Zu
        } = Eu, Xu = 0, lu = null, qu = null, fu = null, bu = new Uint16Array(0), cu = !1, Nu = !1;
        const Ou = function(uu, Eu, ju) {
            let su = 0,
              Uu = -1,
              Zu = !1;
            const Xu = () => {
              if (Zu) return;
              let Xu;
              su = 0;
              try {
                Xu = uu.stats()
              } catch (lu) {
                return Zu = !0, void ju(lu)
              }
              Uu = Xu.memoryBytes, Eu(Xu)
            };
            return {
              now: Xu,
              afterJob: () => {
                su++, (su >= 64 || uu.memoryBytes() !== Uu) && Xu()
              }
            }
          }(iu(), (Eu => {
            uu.postMessage({
              type: "memory",
              stats: Eu
            })
          }), (Eu => {
            Nu = !0, qu = null, uu.postMessage({
              type: "lost",
              reason: `its memory stats trapped (${String(Eu)})`
            })
          })),
          Yu = (uu, Eu) => {
            if (!qu) throw new Error("no encoder");
            try {
              const ju = qu.ph();
              new Uint16Array(ku().buffer, ju, uu.length).set(uu), qu.encode(Eu);
              const su = function(uu) {
                return String.fromCharCode(...new Uint8Array(ku().buffer, uu.Jh(), 32))
              }(qu);
              return cu = !0, su
            } catch (ju) {
              throw Nu = !0, ju
            }
          };
        uu.onmessage = Eu => {
          let {
            data: hu
          } = Eu;
          switch (hu.type) {
            case "start":
              Xu = hu.hO, bu = new Uint16Array(Xu * Xu * Xu),
                function(Eu) {
                  if (32 === Xu)
                    if (ju(Eu)) {
                      try {
                        iu().setCeiling(fj)
                      } catch (su) {
                        return void uu.postMessage({
                          type: "lost",
                          reason: `the memory ceiling was not set (${String(su)})`
                        })
                      }
                      try {
                        qu = new(pE().eh)
                      } catch (su) {
                        return void uu.postMessage({
                          type: "lost",
                          reason: `GeneratedChunkEncoder did not start (${String(su)})`
                        })
                      }
                      Uu().then((Eu => {
                        lu = Eu, uu.postMessage({
                          type: "started"
                        }), Ou.now()
                      }), (Eu => {
                        uu.postMessage({
                          type: "lost",
                          reason: `the block and item tables did not load (${String(Eu)})`
                        })
                      }))
                    } else uu.postMessage({
                      type: "lost",
                      reason: `wasm did not start (${Pu()})`
                    });
                  else uu.postMessage({
                    type: "lost",
                    reason: `chunk size ${Xu} is not the encoder's 32`
                  })
                }(hu.module);
              break;
            case "seed": {
              const {
                settings: uu
              } = hu;
              if (fu = null, null === uu) break;
              if (null === lu) throw new Error("a map's seed before the block and item tables loaded");
              try {
                fu = new JE(Xu, lu.blockMetadata, lu.itemMetadata, uu.Aj, !1, uu.nj, uu.zj, su, Yu)
              } catch (Du) {
                console.error("[bloxd-wasm-client] the map's world generator did not start", Du)
              }
              break
            }
            case "generate":
              ! function(Eu, ju, su, Uu, lu) {
                if (Nu || !qu) return void uu.postMessage({
                  type: "result",
                  ticket: Eu,
                  status: SE,
                  workerUs: 0,
                  bytes: lu,
                  len: 0
                }, [lu]);
                cu = !1;
                const Yu = Zu();
                let hu = !1;
                fu && (bu.fill(0), hu = void 0 !== fu.getChunk(Cu()(bu, [Xu, Xu, Xu]), ju, su, Uu));
                const Du = (gu = Yu, Mu = Zu(), Math.min(4294967295, Math.max(0, Math.round(1e3 * (Mu - gu)))));
                var gu, Mu;
                let eu = null;
                if (!Nu && hu && cu) try {
                  eu = function(uu, Eu) {
                    const ju = uu.dh(),
                      su = IE + ju,
                      Uu = Eu.byteLength >= su ? Eu : new ArrayBuffer(su),
                      Zu = ku().buffer,
                      Xu = new Uint8Array(Uu, 0, su);
                    return Xu.set(new Uint8Array(Zu, uu.Jh(), IE)), Xu.set(new Uint8Array(Zu, uu.ah(), ju), IE), {
                      bytes: Uu,
                      len: su
                    }
                  }(qu, lu)
                } catch {
                  Nu = !0
                }
                Nu ? (qu = null, uu.postMessage({
                  type: "result",
                  ticket: Eu,
                  status: SE,
                  workerUs: Du,
                  bytes: lu,
                  len: 0
                }, [lu])) : null === eu ? uu.postMessage({
                  type: "result",
                  ticket: Eu,
                  status: WE,
                  workerUs: Du,
                  bytes: lu,
                  len: 0
                }, [lu]) : eu.bytes === lu ? uu.postMessage({
                  type: "result",
                  ticket: Eu,
                  status: iE,
                  workerUs: Du,
                  bytes: lu,
                  len: eu.len
                }, [lu]) : uu.postMessage({
                  type: "result",
                  ticket: Eu,
                  status: iE,
                  workerUs: Du,
                  bytes: eu.bytes,
                  len: eu.len,
                  spare: lu
                }, [eu.bytes, lu]), Nu || Ou.afterJob()
              }(hu.ticket, hu.x, hu.y, hu.z, hu.bytes)
          }
        }
      }(globalThis, {
        terrains: QE,
        loadTables: () => uu,
        now: () => performance.now()
      })
  }
})();