/*! For license information please see pxmq3aq.worldgenWorker.1fdd7d6e.chunk.js.LICENSE.txt */
(() => {
  var VV = {
      1737: VV => {
        const eV = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
          xV = () => eV.now(),
          JV = VV => VV === 1 / 0 || (VV => VV && VV === Math.floor(VV) && VV > 0 && isFinite(VV))(VV);
        class YV {
          constructor() {
            let {
              max: VV = 1 / 0,
              ttl: eV,
              updateAgeOnGet: xV = !1,
              checkAgeOnGet: YV = !1,
              noUpdateTTL: UV = !1,
              dispose: yV,
              noDisposeOnSet: pV = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.expirations = Object.create(null), this.data = new Map, this.expirationMap = new Map, void 0 !== eV && !JV(eV)) throw new TypeError("ttl must be positive integer or Infinity if set");
            if (!JV(VV)) throw new TypeError("max must be positive integer or Infinity");
            if (this.ttl = eV, this.max = VV, this.updateAgeOnGet = !!xV, this.checkAgeOnGet = !!YV, this.noUpdateTTL = !!UV, this.noDisposeOnSet = !!pV, void 0 !== yV) {
              if ("function" !== typeof yV) throw new TypeError("dispose must be function if set");
              this.dispose = yV
            }
            this.timer = void 0, this.timerExpiration = void 0
          }
          setTimer(VV, eV) {
            if (this.timerExpiration < VV) return;
            this.timer && clearTimeout(this.timer);
            const JV = setTimeout((() => {
              this.timer = void 0, this.timerExpiration = void 0, this.purgeStale();
              for (const VV in this.expirations) {
                this.setTimer(VV, Math.max(0, VV - xV()));
                break
              }
            }), eV);
            JV.unref && JV.unref(), this.timerExpiration = VV, this.timer = JV
          }
          cancelTimer() {
            this.timer && (clearTimeout(this.timer), this.timerExpiration = void 0, this.timer = void 0)
          }
          cancelTimers() {
            return process.emitWarning('TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no "s"), and will be removed in the next major version update'), this.cancelTimer()
          }
          clear() {
            const VV = this.dispose !== YV.prototype.dispose ? [...this] : [];
            this.data.clear(), this.expirationMap.clear(), this.cancelTimer(), this.expirations = Object.create(null);
            for (const [eV, xV] of VV) this.dispose(xV, eV, "delete")
          }
          setTTL(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ttl;
            const JV = this.expirationMap.get(VV);
            if (void 0 !== JV) {
              const eV = this.expirations[JV];
              !eV || eV.length <= 1 ? delete this.expirations[JV] : this.expirations[JV] = eV.filter((eV => eV !== VV))
            }
            if (eV !== 1 / 0) {
              const JV = Math.floor(xV() + eV);
              this.expirationMap.set(VV, JV), this.expirations[JV] || (this.expirations[JV] = [], this.setTimer(JV, eV)), this.expirations[JV].push(VV)
            } else this.expirationMap.set(VV, 1 / 0)
          }
          set(VV, eV) {
            let {
              ttl: xV = this.ttl,
              noUpdateTTL: YV = this.noUpdateTTL,
              noDisposeOnSet: UV = this.noDisposeOnSet
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!JV(xV)) throw new TypeError("ttl must be positive integer or Infinity");
            if (this.expirationMap.has(VV)) {
              YV || this.setTTL(VV, xV);
              const JV = this.data.get(VV);
              JV !== eV && (this.data.set(VV, eV), UV || this.dispose(JV, VV, "set"))
            } else this.setTTL(VV, xV), this.data.set(VV, eV);
            for (; this.size > this.max;) this.purgeToCapacity();
            return this
          }
          has(VV) {
            return this.data.has(VV)
          }
          getRemainingTTL(VV) {
            const eV = this.expirationMap.get(VV);
            return eV === 1 / 0 ? eV : void 0 !== eV ? Math.max(0, Math.ceil(eV - xV())) : 0
          }
          get(VV) {
            let {
              updateAgeOnGet: eV = this.updateAgeOnGet,
              ttl: xV = this.ttl,
              checkAgeOnGet: JV = this.checkAgeOnGet
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const YV = this.data.get(VV);
            if (!JV || 0 !== this.getRemainingTTL(VV)) return eV && this.setTTL(VV, xV), YV;
            this.delete(VV)
          }
          dispose(VV, eV) {}
          delete(VV) {
            const eV = this.expirationMap.get(VV);
            if (void 0 !== eV) {
              const xV = this.data.get(VV);
              this.data.delete(VV), this.expirationMap.delete(VV);
              const JV = this.expirations[eV];
              return JV && (JV.length <= 1 ? delete this.expirations[eV] : this.expirations[eV] = JV.filter((eV => eV !== VV))), this.dispose(xV, VV, "delete"), 0 === this.size && this.cancelTimer(), !0
            }
            return !1
          }
          purgeToCapacity() {
            for (const VV in this.expirations) {
              const eV = this.expirations[VV];
              if (!(this.size - eV.length >= this.max)) {
                const VV = this.size - this.max,
                  xV = [];
                for (const JV of eV.splice(0, VV)) xV.push([JV, this.data.get(JV)]), this.data.delete(JV), this.expirationMap.delete(JV);
                for (const [eV, JV] of xV) this.dispose(JV, eV, "evict");
                return
              } {
                delete this.expirations[VV];
                const xV = [];
                for (const VV of eV) xV.push([VV, this.data.get(VV)]), this.data.delete(VV), this.expirationMap.delete(VV);
                for (const [VV, eV] of xV) this.dispose(eV, VV, "evict")
              }
            }
          }
          get size() {
            return this.data.size
          }
          purgeStale() {
            const VV = Math.ceil(xV());
            for (const eV in this.expirations) {
              if ("Infinity" === eV || eV > VV) return;
              const xV = [...this.expirations[eV] || []],
                JV = [];
              delete this.expirations[eV];
              for (const VV of xV) JV.push([VV, this.data.get(VV)]), this.data.delete(VV), this.expirationMap.delete(VV);
              for (const [VV, eV] of JV) this.dispose(eV, VV, "stale")
            }
            0 === this.size && this.cancelTimer()
          }* entries() {
            for (const VV in this.expirations)
              for (const eV of this.expirations[VV]) yield [eV, this.data.get(eV)]
          }* keys() {
            for (const VV in this.expirations)
              for (const eV of this.expirations[VV]) yield eV
          }* values() {
            for (const VV in this.expirations)
              for (const eV of this.expirations[VV]) yield this.data.get(eV)
          } [Symbol.iterator]() {
            return this.entries()
          }
        }
        VV.exports = YV
      },
      3171: VV => {
        VV.exports = function(VV) {
          for (var eV = new Array(VV), xV = 0; xV < VV; ++xV) eV[xV] = xV;
          return eV
        }
      },
      3178: VV => {
        function eV(VV) {
          return !!VV.constructor && "function" === typeof VV.constructor.isBuffer && VV.constructor.isBuffer(VV)
        }
        VV.exports = function(VV) {
          return null != VV && (eV(VV) || function(VV) {
            return "function" === typeof VV.readFloatLE && "function" === typeof VV.slice && eV(VV.slice(0, 0))
          }(VV) || !!VV._isBuffer)
        }
      },
      41019: VV => {
        VV.exports = function(VV, eV) {
          eV = eV || 2;
          for (var xV = 2 * (VV = VV || 1) + 1, JV = Math.pow(xV, eV) - 1, YV = new Array(JV), UV = 0; UV < JV; UV++)
            for (var yV = YV[UV] = new Array(eV), pV = UV < JV / 2 ? UV : UV + 1, QV = 1; QV <= eV; QV++) {
              var nV = pV % Math.pow(xV, QV);
              yV[QV - 1] = nV / Math.pow(xV, QV - 1) - VV, pV -= nV
            }
          return YV
        }
      },
      3168: (VV, eV, xV) => {
        var JV = xV(3171),
          YV = xV(3178),
          UV = "undefined" !== typeof Float64Array;

        function yV(VV, eV) {
          return VV[0] - eV[0]
        }

        function pV() {
          var VV, eV = this.stride,
            xV = new Array(eV.length);
          for (VV = 0; VV < xV.length; ++VV) xV[VV] = [Math.abs(eV[VV]), VV];
          xV.sort(yV);
          var JV = new Array(xV.length);
          for (VV = 0; VV < JV.length; ++VV) JV[VV] = xV[VV][1];
          return JV
        }

        function QV(VV, eV) {
          var xV = ["View", eV, "d", VV].join("");
          eV < 0 && (xV = "View_Nil" + VV);
          var YV = "generic" === VV;
          if (-1 === eV) {
            var UV = "function " + xV + "(a){this.data=a;};var proto=" + xV + ".prototype;proto.dtype='" + VV + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + xV + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + xV + "(a){return new " + xV + "(a);}";
            return new Function(UV)()
          }
          if (0 === eV) {
            UV = "function " + xV + "(a,d) {this.data = a;this.offset = d};var proto=" + xV + ".prototype;proto.dtype='" + VV + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + xV + "_copy() {return new " + xV + "(this.data,this.offset)};proto.pick=function " + xV + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + xV + "_get(){return " + (YV ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + xV + "_set(v){return " + (YV ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + xV + "(a,b,c,d){return new " + xV + "(a,d)}";
            return new Function("TrivialArray", UV)(nV[VV][0])
          }
          UV = ["'use strict'"];
          var yV = JV(eV),
            QV = yV.map((function(VV) {
              return "i" + VV
            })),
            wV = "this.offset+" + yV.map((function(VV) {
              return "this.stride[" + VV + "]*i" + VV
            })).join("+"),
            ZV = yV.map((function(VV) {
              return "b" + VV
            })).join(","),
            vV = yV.map((function(VV) {
              return "c" + VV
            })).join(",");
          UV.push("function " + xV + "(a," + ZV + "," + vV + ",d){this.data=a", "this.shape=[" + ZV + "]", "this.stride=[" + vV + "]", "this.offset=d|0}", "var proto=" + xV + ".prototype", "proto.dtype='" + VV + "'", "proto.dimension=" + eV), UV.push("Object.defineProperty(proto,'size',{get:function " + xV + "_size(){return " + yV.map((function(VV) {
            return "this.shape[" + VV + "]"
          })).join("*"), "}})"), 1 === eV ? UV.push("proto.order=[0]") : (UV.push("Object.defineProperty(proto,'order',{get:"), eV < 4 ? (UV.push("function " + xV + "_order(){"), 2 === eV ? UV.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === eV && UV.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : UV.push("ORDER})")), UV.push("proto.set=function " + xV + "_set(" + QV.join(",") + ",v){"), YV ? UV.push("return this.data.set(" + wV + ",v)}") : UV.push("return this.data[" + wV + "]=v}"), UV.push("proto.get=function " + xV + "_get(" + QV.join(",") + "){"), YV ? UV.push("return this.data.get(" + wV + ")}") : UV.push("return this.data[" + wV + "]}"), UV.push("proto.index=function " + xV + "_index(", QV.join(), "){return " + wV + "}"), UV.push("proto.hi=function " + xV + "_hi(" + QV.join(",") + "){return new " + xV + "(this.data," + yV.map((function(VV) {
            return ["(typeof i", VV, "!=='number'||i", VV, "<0)?this.shape[", VV, "]:i", VV, "|0"].join("")
          })).join(",") + "," + yV.map((function(VV) {
            return "this.stride[" + VV + "]"
          })).join(",") + ",this.offset)}");
          var rV = yV.map((function(VV) {
              return "a" + VV + "=this.shape[" + VV + "]"
            })),
            kV = yV.map((function(VV) {
              return "c" + VV + "=this.stride[" + VV + "]"
            }));
          UV.push("proto.lo=function " + xV + "_lo(" + QV.join(",") + "){var b=this.offset,d=0," + rV.join(",") + "," + kV.join(","));
          for (var bV = 0; bV < eV; ++bV) UV.push("if(typeof i" + bV + "==='number'&&i" + bV + ">=0){d=i" + bV + "|0;b+=c" + bV + "*d;a" + bV + "-=d}");
          UV.push("return new " + xV + "(this.data," + yV.map((function(VV) {
            return "a" + VV
          })).join(",") + "," + yV.map((function(VV) {
            return "c" + VV
          })).join(",") + ",b)}"), UV.push("proto.step=function " + xV + "_step(" + QV.join(",") + "){var " + yV.map((function(VV) {
            return "a" + VV + "=this.shape[" + VV + "]"
          })).join(",") + "," + yV.map((function(VV) {
            return "b" + VV + "=this.stride[" + VV + "]"
          })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
          for (bV = 0; bV < eV; ++bV) UV.push("if(typeof i" + bV + "==='number'){d=i" + bV + "|0;if(d<0){c+=b" + bV + "*(a" + bV + "-1);a" + bV + "=ceil(-a" + bV + "/d)}else{a" + bV + "=ceil(a" + bV + "/d)}b" + bV + "*=d}");
          UV.push("return new " + xV + "(this.data," + yV.map((function(VV) {
            return "a" + VV
          })).join(",") + "," + yV.map((function(VV) {
            return "b" + VV
          })).join(",") + ",c)}");
          var EV = new Array(eV),
            BV = new Array(eV);
          for (bV = 0; bV < eV; ++bV) EV[bV] = "a[i" + bV + "]", BV[bV] = "b[i" + bV + "]";
          UV.push("proto.transpose=function " + xV + "_transpose(" + QV + "){" + QV.map((function(VV, eV) {
            return VV + "=(" + VV + "===undefined?" + eV + ":" + VV + "|0)"
          })).join(";"), "var a=this.shape,b=this.stride;return new " + xV + "(this.data," + EV.join(",") + "," + BV.join(",") + ",this.offset)}"), UV.push("proto.pick=function " + xV + "_pick(" + QV + "){var a=[],b=[],c=this.offset");
          for (bV = 0; bV < eV; ++bV) UV.push("if(typeof i" + bV + "==='number'&&i" + bV + ">=0){c=(c+this.stride[" + bV + "]*i" + bV + ")|0}else{a.push(this.shape[" + bV + "]);b.push(this.stride[" + bV + "])}");
          return UV.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), UV.push("return function construct_" + xV + "(data,shape,stride,offset){return new " + xV + "(data," + yV.map((function(VV) {
            return "shape[" + VV + "]"
          })).join(",") + "," + yV.map((function(VV) {
            return "stride[" + VV + "]"
          })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", UV.join("\n"))(nV[VV], pV)
        }
        var nV = {
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
        VV.exports = function(VV, eV, xV, JV) {
          if (void 0 === VV) return (0, nV.array[0])([]);
          "number" === typeof VV && (VV = [VV]), void 0 === eV && (eV = [VV.length]);
          var yV = eV.length;
          if (void 0 === xV) {
            xV = new Array(yV);
            for (var pV = yV - 1, wV = 1; pV >= 0; --pV) xV[pV] = wV, wV *= eV[pV]
          }
          if (void 0 === JV) {
            JV = 0;
            for (pV = 0; pV < yV; ++pV) xV[pV] < 0 && (JV -= (eV[pV] - 1) * xV[pV])
          }
          for (var ZV = function(VV) {
              if (YV(VV)) return "buffer";
              if (UV) switch (Object.prototype.toString.call(VV)) {
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
              return Array.isArray(VV) ? "array" : "generic"
            }(VV), vV = nV[ZV]; vV.length <= yV + 1;) vV.push(QV(ZV, vV.length - 1));
          return (0, vV[yV + 1])(VV, eV, xV, JV)
        }
      },
      40995: (VV, eV, xV) => {
        var JV = xV(41003).integer,
          YV = xV(41008),
          UV = xV(41013);

        function yV(VV, eV) {
          for (var xV = 0, JV = 0; JV < VV.length; JV++) xV += Math.pow(VV[JV] - eV[JV], 2);
          return xV
        }

        function pV(VV, eV) {
          if ("function" === typeof VV.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
          this.shape = VV.shape, this.minDistance = VV.minDistance, this.maxDistance = VV.maxDistance || 2 * VV.minDistance, this.maxTries = Math.ceil(Math.max(1, VV.tries || 30)), this.rng = eV || Math.random, this.dimension = this.shape.length, this.squaredMinDistance = this.minDistance * this.minDistance, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.minDistance / Math.sqrt(this.dimension), this.neighbourhood = UV(this.dimension), this.currentPoint = null, this.processList = [], this.samplePoints = [], this.gridShape = [];
          for (var xV = 0; xV < this.dimension; xV++) this.gridShape.push(Math.ceil(this.shape[xV] / this.cellSize));
          this.grid = JV(this.gridShape)
        }
        pV.prototype.shape = null, pV.prototype.dimension = null, pV.prototype.minDistance = null, pV.prototype.maxDistance = null, pV.prototype.minDistancePlusEpsilon = null, pV.prototype.squaredMinDistance = null, pV.prototype.deltaDistance = null, pV.prototype.cellSize = null, pV.prototype.maxTries = null, pV.prototype.rng = null, pV.prototype.neighbourhood = null, pV.prototype.currentPoint = null, pV.prototype.processList = null, pV.prototype.samplePoints = null, pV.prototype.gridShape = null, pV.prototype.grid = null, pV.prototype.addRandomPoint = function() {
          for (var VV = new Array(this.dimension), eV = 0; eV < this.dimension; eV++) VV[eV] = this.rng() * this.shape[eV];
          return this.directAddPoint(VV)
        }, pV.prototype.addPoint = function(VV) {
          var eV, xV = !0;
          if (VV.length === this.dimension)
            for (eV = 0; eV < this.dimension && xV; eV++) xV = VV[eV] >= 0 && VV[eV] <= this.shape[eV];
          else xV = !1;
          return xV ? this.directAddPoint(VV) : null
        }, pV.prototype.directAddPoint = function(VV) {
          var eV, xV = 0,
            JV = this.grid.stride;
          for (this.processList.push(VV), this.samplePoints.push(VV), eV = 0; eV < this.dimension; eV++) xV += (VV[eV] / this.cellSize | 0) * JV[eV];
          return this.grid.data[xV] = this.samplePoints.length, VV
        }, pV.prototype.inNeighbourhood = function(VV) {
          var eV, xV, JV, YV, UV = this.dimension,
            pV = this.grid.stride;
          for (eV = 0; eV < this.neighbourhood.length; eV++) {
            for (xV = 0, JV = 0; JV < UV; JV++) {
              if ((YV = (VV[JV] / this.cellSize | 0) + this.neighbourhood[eV][JV]) < 0 || YV >= this.gridShape[JV]) {
                xV = -1;
                break
              }
              xV += YV * pV[JV]
            }
            if (-1 !== xV && 0 !== this.grid.data[xV] && yV(VV, this.samplePoints[this.grid.data[xV] - 1]) < this.squaredMinDistance) return !0
          }
          return !1
        }, pV.prototype.next = function() {
          for (var VV, eV, xV, JV, UV, yV, pV; this.processList.length > 0;) {
            for (null === this.currentPoint && (this.currentPoint = this.processList.shift()), JV = this.currentPoint, VV = 0; VV < this.maxTries; VV++) {
              for (yV = !0, xV = this.minDistancePlusEpsilon + this.deltaDistance * this.rng(), 2 === this.dimension ? (eV = this.rng() * Math.PI * 2, UV = [Math.cos(eV), Math.sin(eV)]) : UV = YV(this.dimension, this.rng), pV = 0; yV && pV < this.dimension; pV++) UV[pV] = JV[pV] + UV[pV] * xV, yV = UV[pV] >= 0 && UV[pV] < this.shape[pV];
              if (yV && !this.inNeighbourhood(UV)) return this.directAddPoint(UV)
            }
            VV === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, pV.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, pV.prototype.getAllPoints = function() {
          return this.samplePoints
        }, pV.prototype.getAllPointsWithDistance = function() {
          throw new Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation")
        }, pV.prototype.reset = function() {
          var VV = this.grid.data,
            eV = 0;
          for (eV = 0; eV < VV.length; eV++) VV[eV] = 0;
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, VV.exports = pV
      },
      41022: (VV, eV, xV) => {
        var JV = xV(41003).array,
          YV = xV(41008),
          UV = xV(41013);

        function yV(VV, eV) {
          for (var xV = 0, JV = 0; JV < VV.length; JV++) xV += Math.pow(VV[JV] - eV[JV], 2);
          return Math.sqrt(xV)
        }

        function pV(VV, eV) {
          if ("function" !== typeof VV.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
          this.shape = VV.shape, this.minDistance = VV.minDistance, this.maxDistance = VV.maxDistance || 2 * VV.minDistance, this.maxTries = Math.ceil(Math.max(1, VV.tries || 30)), this.distanceFunction = VV.distanceFunction, this.bias = Math.max(0, Math.min(1, VV.bias || 0)), this.rng = eV || Math.random, this.dimension = this.shape.length, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.maxDistance / Math.sqrt(this.dimension), this.neighbourhood = UV(this.dimension), this.currentPoint = null, this.currentDistance = 0, this.processList = [], this.samplePoints = [], this.sampleDistance = [], this.gridShape = [];
          for (var xV = 0; xV < this.dimension; xV++) this.gridShape.push(Math.ceil(this.shape[xV] / this.cellSize));
          this.grid = JV(this.gridShape)
        }
        pV.prototype.shape = null, pV.prototype.dimension = null, pV.prototype.minDistance = null, pV.prototype.maxDistance = null, pV.prototype.minDistancePlusEpsilon = null, pV.prototype.deltaDistance = null, pV.prototype.cellSize = null, pV.prototype.maxTries = null, pV.prototype.distanceFunction = null, pV.prototype.bias = null, pV.prototype.rng = null, pV.prototype.neighbourhood = null, pV.prototype.currentPoint = null, pV.prototype.currentDistance = null, pV.prototype.processList = null, pV.prototype.samplePoints = null, pV.prototype.sampleDistance = null, pV.prototype.gridShape = null, pV.prototype.grid = null, pV.prototype.addRandomPoint = function() {
          for (var VV = new Array(this.dimension), eV = 0; eV < this.dimension; eV++) VV[eV] = this.rng() * this.shape[eV];
          return this.directAddPoint(VV)
        }, pV.prototype.addPoint = function(VV) {
          var eV, xV = !0;
          if (VV.length === this.dimension)
            for (eV = 0; eV < this.dimension && xV; eV++) xV = VV[eV] >= 0 && VV[eV] <= this.shape[eV];
          else xV = !1;
          return xV ? this.directAddPoint(VV) : null
        }, pV.prototype.directAddPoint = function(VV) {
          var eV, xV = 0,
            JV = this.grid.stride,
            YV = this.samplePoints.length;
          for (this.processList.push(YV), this.samplePoints.push(VV), this.sampleDistance.push(this.distanceFunction(VV)), eV = 0; eV < this.dimension; eV++) xV += (VV[eV] / this.cellSize | 0) * JV[eV];
          return this.grid.data[xV].push(YV), VV
        }, pV.prototype.inNeighbourhood = function(VV) {
          var eV, xV, JV, YV, UV, pV, QV = this.dimension,
            nV = this.grid.stride,
            wV = this.distanceFunction(VV);
          for (eV = 0; eV < this.neighbourhood.length; eV++) {
            for (xV = 0, JV = 0; JV < QV; JV++) {
              if ((YV = (VV[JV] / this.cellSize | 0) + this.neighbourhood[eV][JV]) < 0 || YV >= this.gridShape[JV]) {
                xV = -1;
                break
              }
              xV += YV * nV[JV]
            }
            if (-1 !== xV && this.grid.data[xV].length > 0)
              for (var ZV = 0; ZV < this.grid.data[xV].length; ZV++) {
                UV = this.samplePoints[this.grid.data[xV][ZV]], pV = this.sampleDistance[this.grid.data[xV][ZV]];
                var vV = Math.min(pV, wV),
                  rV = vV + (Math.max(pV, wV) - vV) * this.bias;
                if (yV(VV, UV) < this.minDistance + this.deltaDistance * rV) return !0
              }
          }
          return !1
        }, pV.prototype.next = function() {
          for (var VV, eV, xV, JV, UV, yV, pV, QV; this.processList.length > 0;) {
            if (null === this.currentPoint) {
              var nV = this.processList.shift();
              this.currentPoint = this.samplePoints[nV], this.currentDistance = this.sampleDistance[nV]
            }
            for (JV = this.currentPoint, UV = this.currentDistance, VV = 0; VV < this.maxTries; VV++) {
              for (pV = !0, xV = this.minDistancePlusEpsilon + this.deltaDistance * (UV + (1 - UV) * this.bias), 2 === this.dimension ? (eV = this.rng() * Math.PI * 2, yV = [Math.cos(eV), Math.sin(eV)]) : yV = YV(this.dimension, this.rng), QV = 0; pV && QV < this.dimension; QV++) yV[QV] = JV[QV] + yV[QV] * xV, pV = yV[QV] >= 0 && yV[QV] < this.shape[QV];
              if (pV && !this.inNeighbourhood(yV)) return this.directAddPoint(yV)
            }
            VV === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, pV.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, pV.prototype.getAllPoints = function() {
          return this.samplePoints
        }, pV.prototype.getAllPointsWithDistance = function() {
          var VV, eV = new Array(this.samplePoints.length),
            xV = 0,
            JV = 0;
          for (xV = 0; xV < this.samplePoints.length; xV++) {
            for (VV = new Array(this.dimension + 1), JV = 0; JV < this.dimension; JV++) VV[JV] = this.samplePoints[xV][JV];
            VV[this.dimension] = this.sampleDistance[xV], eV[xV] = VV
          }
          return eV
        }, pV.prototype.reset = function() {
          var VV = this.grid.data,
            eV = 0;
          for (eV = 0; eV < VV.length; eV++) VV[eV] = [];
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, VV.exports = pV
      },
      41013: (VV, eV, xV) => {
        var JV = xV(41019);
        var YV = {};
        VV.exports = function(VV) {
          return YV[VV] || (YV[VV] = function(VV) {
            var eV, xV = JV(2, VV),
              YV = [];
            for (xV = xV.filter((function(eV) {
                for (var xV = 0, JV = 0; JV < VV; JV++) xV += Math.pow(Math.max(0, Math.abs(eV[JV]) - 1), 2);
                return xV < VV
              })), eV = 0; eV < VV; eV++) YV.push(0);
            return xV.push(YV), xV.sort((function(eV, xV) {
              var JV, YV = 0,
                UV = 0;
              for (JV = 0; JV < VV; JV++) YV += Math.pow(eV[JV], 2), UV += Math.pow(xV[JV], 2);
              return YV < UV ? -1 : YV > UV ? 1 : 0
            })), xV
          }(VV)), YV[VV]
        }
      },
      40992: (VV, eV, xV) => {
        var JV = xV(40995),
          YV = xV(41022);

        function UV(VV, eV) {
          this.shape = VV.shape, "function" === typeof VV.distanceFunction ? this.implementation = new YV(VV, eV) : this.implementation = new JV(VV, eV)
        }
        UV.prototype.implementation = null, UV.prototype.addRandomPoint = function() {
          return this.implementation.addRandomPoint()
        }, UV.prototype.addPoint = function(VV) {
          return this.implementation.addPoint(VV)
        }, UV.prototype.next = function() {
          return this.implementation.next()
        }, UV.prototype.fill = function() {
          return this.implementation.fill()
        }, UV.prototype.getAllPoints = function() {
          return this.implementation.getAllPoints()
        }, UV.prototype.getAllPointsWithDistance = function() {
          return this.implementation.getAllPointsWithDistance()
        }, UV.prototype.reset = function() {
          this.implementation.reset()
        }, VV.exports = UV
      },
      41008: VV => {
        VV.exports = function(VV, eV) {
          var xV, JV, YV, UV, yV, pV = new Array(VV),
            QV = Math.floor(VV / 2) << 1,
            nV = 0;
          for (yV = 0; yV < QV; yV += 2) xV = -2 * Math.log(eV()), JV = Math.sqrt(xV), YV = 2 * Math.PI * eV(), nV += xV, pV[yV] = JV * Math.cos(YV), pV[yV + 1] = JV * Math.sin(YV);
          if (VV % 2) {
            var wV = Math.sqrt(-2 * Math.log(eV())) * Math.cos(2 * Math.PI * eV());
            pV[VV - 1] = wV, nV += Math.pow(wV, 2)
          }
          for (UV = 1 / Math.sqrt(nV), yV = 0; yV < VV; ++yV) pV[yV] *= UV;
          return pV
        }
      },
      41003: VV => {
        VV.exports = {
          integer: function(VV) {
            var eV, xV = VV.length,
              JV = 1,
              YV = new Array(xV);
            for (eV = xV; eV > 0; eV--) YV[eV - 1] = JV, JV *= VV[eV - 1];
            return {
              stride: YV,
              data: new Uint32Array(JV)
            }
          },
          array: function(VV) {
            var eV, xV, JV = VV.length,
              YV = 1,
              UV = new Array(JV),
              yV = [];
            for (eV = JV; eV > 0; eV--) UV[eV - 1] = YV, YV *= VV[eV - 1];
            for (xV = 0; xV < YV; xV++) yV.push([]);
            return {
              stride: UV,
              data: yV
            }
          }
        }
      },
      38881: (VV, eV, xV) => {
        var JV = xV(38888);

        function YV(VV) {
          for (var eV, xV, YV = 0, UV = VV.length, yV = 0; yV < VV.length;) {
            for (eV = VV[yV], xV = 0; yV < UV && VV[yV] === eV;) ++yV, ++xV;
            YV += JV.log2(xV) / 7 | 0, YV += JV.log2(eV >>> 0) / 7 | 0, YV += 2
          }
          return YV
        }
        eV.size = YV, eV.encode = function(VV, eV) {
          eV || (eV = new Uint8Array(YV(VV)));
          for (var xV, JV, UV = 0, yV = eV.length, pV = 0; pV < VV.length;) {
            for (xV = VV[pV], JV = 0; pV < VV.length && VV[pV] === xV;) ++pV, ++JV;
            for (; UV < yV && JV >= 128;) eV[UV++] = 128 + (127 & JV), JV >>>= 7;
            if (UV >= yV) throw new Error("RLE buffer overflow");
            for (eV[UV++] = JV, xV >>>= 0; UV < yV && xV >= 128;) eV[UV++] = 128 + (127 & xV), xV >>>= 7;
            if (UV >= yV) throw new Error("RLE buffer overflow");
            eV[UV++] = xV
          }
          return eV
        }, eV.decode = function(VV, eV) {
          for (var xV, JV, YV, UV, yV = eV.length, pV = VV.length, QV = 0, nV = 0; nV < pV;) {
            for (xV = 0, JV = 0; nV < pV && VV[nV] >= 128;) xV += (127 & VV[nV++]) << JV, JV += 7;
            if (xV += VV[nV++] << JV, nV >= pV) throw new Error("RLE buffer underrun");
            if (QV + xV > yV) throw new Error("Chunk buffer overflow");
            for (YV = 0, JV = 0; nV < pV && VV[nV] >= 128;) YV += (127 & VV[nV++]) << JV, JV += 7;
            if (nV >= pV) throw new Error("RLE buffer underrun");
            for (YV += VV[nV++] << JV, UV = 0; UV < xV; ++UV) eV[QV++] = YV
          }
          return eV
        }
      },
      38888: (VV, eV) => {
        function xV(VV) {
          var eV = 32;
          return (VV &= -VV) && eV--, 65535 & VV && (eV -= 16), 16711935 & VV && (eV -= 8), 252645135 & VV && (eV -= 4), 858993459 & VV && (eV -= 2), 1431655765 & VV && (eV -= 1), eV
        }
        eV.INT_BITS = 32, eV.INT_MAX = 2147483647, eV.INT_MIN = -1 << 31, eV.sign = function(VV) {
          return (VV > 0) - (VV < 0)
        }, eV.abs = function(VV) {
          var eV = VV >> 31;
          return (VV ^ eV) - eV
        }, eV.min = function(VV, eV) {
          return eV ^ (VV ^ eV) & -(VV < eV)
        }, eV.max = function(VV, eV) {
          return VV ^ (VV ^ eV) & -(VV < eV)
        }, eV.isPow2 = function(VV) {
          return !(VV & VV - 1) && !!VV
        }, eV.log2 = function(VV) {
          var eV, xV;
          return eV = (VV > 65535) << 4, eV |= xV = ((VV >>>= eV) > 255) << 3, eV |= xV = ((VV >>>= xV) > 15) << 2, (eV |= xV = ((VV >>>= xV) > 3) << 1) | (VV >>>= xV) >> 1
        }, eV.log10 = function(VV) {
          return VV >= 1e9 ? 9 : VV >= 1e8 ? 8 : VV >= 1e7 ? 7 : VV >= 1e6 ? 6 : VV >= 1e5 ? 5 : VV >= 1e4 ? 4 : VV >= 1e3 ? 3 : VV >= 100 ? 2 : VV >= 10 ? 1 : 0
        }, eV.popCount = function(VV) {
          return 16843009 * ((VV = (858993459 & (VV -= VV >>> 1 & 1431655765)) + (VV >>> 2 & 858993459)) + (VV >>> 4) & 252645135) >>> 24
        }, eV.countTrailingZeros = xV, eV.nextPow2 = function(VV) {
          return VV += 0 === VV, --VV, VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) + 1
        }, eV.prevPow2 = function(VV) {
          return VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) - (VV >>> 1)
        }, eV.parity = function(VV) {
          return VV ^= VV >>> 16, VV ^= VV >>> 8, VV ^= VV >>> 4, 27030 >>> (VV &= 15) & 1
        };
        var JV = new Array(256);
        ! function(VV) {
          for (var eV = 0; eV < 256; ++eV) {
            var xV = eV,
              JV = eV,
              YV = 7;
            for (xV >>>= 1; xV; xV >>>= 1) JV <<= 1, JV |= 1 & xV, --YV;
            VV[eV] = JV << YV & 255
          }
        }(JV), eV.reverse = function(VV) {
          return JV[255 & VV] << 24 | JV[VV >>> 8 & 255] << 16 | JV[VV >>> 16 & 255] << 8 | JV[VV >>> 24 & 255]
        }, eV.interleave2 = function(VV, eV) {
          return (VV = 1431655765 & ((VV = 858993459 & ((VV = 252645135 & ((VV = 16711935 & ((VV &= 65535) | VV << 8)) | VV << 4)) | VV << 2)) | VV << 1)) | (eV = 1431655765 & ((eV = 858993459 & ((eV = 252645135 & ((eV = 16711935 & ((eV &= 65535) | eV << 8)) | eV << 4)) | eV << 2)) | eV << 1)) << 1
        }, eV.deinterleave2 = function(VV, eV) {
          return (VV = 65535 & ((VV = 16711935 & ((VV = 252645135 & ((VV = 858993459 & ((VV = VV >>> eV & 1431655765) | VV >>> 1)) | VV >>> 2)) | VV >>> 4)) | VV >>> 16)) << 16 >> 16
        }, eV.interleave3 = function(VV, eV, xV) {
          return VV = 1227133513 & ((VV = 3272356035 & ((VV = 251719695 & ((VV = 4278190335 & ((VV &= 1023) | VV << 16)) | VV << 8)) | VV << 4)) | VV << 2), (VV |= (eV = 1227133513 & ((eV = 3272356035 & ((eV = 251719695 & ((eV = 4278190335 & ((eV &= 1023) | eV << 16)) | eV << 8)) | eV << 4)) | eV << 2)) << 1) | (xV = 1227133513 & ((xV = 3272356035 & ((xV = 251719695 & ((xV = 4278190335 & ((xV &= 1023) | xV << 16)) | xV << 8)) | xV << 4)) | xV << 2)) << 2
        }, eV.deinterleave3 = function(VV, eV) {
          return (VV = 1023 & ((VV = 4278190335 & ((VV = 251719695 & ((VV = 3272356035 & ((VV = VV >>> eV & 1227133513) | VV >>> 2)) | VV >>> 4)) | VV >>> 8)) | VV >>> 16)) << 22 >> 22
        }, eV.nextCombination = function(VV) {
          var eV = VV | VV - 1;
          return eV + 1 | (~eV & -~eV) - 1 >>> xV(VV) + 1
        }
      },
      40933: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => we
        });
        var JV = xV(40957),
          YV = xV(40946),
          UV = xV(41030);

        function yV(VV) {
          let eV = 2166136261;
          for (let xV = 0; xV < VV.length; xV++) eV = Math.imul(eV ^ VV.charCodeAt(xV), 16777619);
          return eV
        }

        function pV(VV) {
          return yV(`${VV}Wasteland`)
        }

        function QV(VV, eV, xV) {
          let JV = Math.imul(VV, 668265261) ^ Math.imul(eV, 374761393) ^ xV;
          return JV = Math.imul(JV ^ JV >>> 15, 2246822507), JV = Math.imul(JV ^ JV >>> 13, 3266489909), JV ^= JV >>> 16, (JV >>> 0) / 4294967296
        }

        function nV(VV, eV, xV, JV) {
          return QV(VV, xV, JV ^ Math.imul(eV, 1540483477))
        }
        const wV = {
          dustFlats: 30,
          scorchedMesa: 18,
          shatteredHighlands: 14,
          ruinFields: 12,
          saltFlats: 7,
          survivorGrove: 5
        };
        const ZV = .3,
          vV = 528734635,
          rV = {
            dustFlats: .75,
            scorchedMesa: ZV,
            shatteredHighlands: ZV,
            ruinFields: ZV,
            saltFlats: ZV,
            survivorGrove: 0
          };

        function kV(VV, eV, xV) {
          return QV(VV, eV, xV ^ vV)
        }

        function bV(VV, eV, xV, JV) {
          return 36 * (1 === JV ? VV : eV) + 2 + Math.floor(32 * QV(VV, eV, xV ^ vV ^ JV))
        }
        var EV = xV(40940),
          BV = xV(40955);
        const jV = 160,
          qV = 10,
          tV = 3 * (Math.ceil(50 / 6) + 1) + 2 + qV,
          FV = .9238795325112867,
          TV = .7071067811865476,
          PV = .3826834323650898,
          AV = [
            [1, 0],
            [FV, PV],
            [TV, TV],
            [PV, FV]
          ].flatMap((VV => {
            let [eV, xV] = VV;
            return [
              [eV, xV],
              [-xV, eV],
              [-eV, -xV],
              [xV, -eV]
            ]
          }));
        let NV = null,
          XV = null,
          MV = 0;

        function zV(VV, eV, xV) {
          ! function(VV) {
            VV !== NV && (NV = VV, XV = (0, EV.l)(VV), MV = pV(VV))
          }(VV);
          const JV = 625341585 ^ MV,
            YV = jV - 2 * tV,
            UV = eV * jV + tV + Math.floor(QV(eV, xV, 1 ^ JV) * YV),
            yV = xV * jV + tV + Math.floor(QV(eV, xV, 2 ^ JV) * YV),
            nV = Math.round(-8 + XV.getOctaves(UV, yV)),
            wV = -46 + Math.floor(7 * QV(eV, xV, 3 ^ JV)),
            ZV = nV - wV;
          if (ZV < 20 || ZV > 50) return null;
          const vV = Math.ceil(ZV / 6);
          return {
            x: UV,
            z: yV,
            topY: nV,
            floorY: wV,
            turns: vV,
            pitch: ZV / vV,
            radius: 3 * (vV + 1) + 2
          }
        }

        function GV(VV, eV, xV, JV) {
          const YV = zV(VV, eV, xV);
          if (!YV || "saltFlats" !== JV(YV.x, YV.z)) return null;
          const UV = YV.radius + qV + 2;
          for (const [yV, pV] of AV)
            for (const VV of [UV, UV / 2])
              if ("saltFlats" !== JV(Math.round(YV.x + yV * VV), Math.round(YV.z + pV * VV))) return null;
          return YV
        }

        function WV(VV, eV, xV, JV) {
          const YV = eV - VV.x,
            UV = xV - VV.z,
            yV = Math.sqrt(YV * YV + UV * UV);
          if (yV >= VV.radius + qV) return null;
          if (yV >= VV.radius) {
            const eV = yV - VV.radius,
              xV = Math.floor(eV),
              YV = Math.min(Math.max(JV, VV.topY - xV), VV.topY + xV);
            return YV + Math.round((JV - YV) * eV / qV)
          }
          const pV = function(VV, eV) {
              const xV = Math.abs(VV),
                JV = Math.abs(eV);
              if (0 === xV && 0 === JV) return 0;
              const YV = Math.min(xV, JV) / Math.max(xV, JV);
              let UV = YV * (Math.PI / 4 + .273 * (1 - YV)) / (2 * Math.PI);
              return JV > xV && (UV = .25 - UV), VV < 0 && (UV = .5 - UV), eV < 0 ? 1 - UV : UV
            }(YV, UV),
            QV = (VV.radius - yV) / 3 - pV,
            nV = Math.floor(QV);
          if (nV < 0) return VV.topY;
          if (nV >= VV.turns) return VV.floorY;
          const wV = 3 * (QV - nV) >= 2 ? 1 : 0;
          return Math.round(VV.topY - VV.pitch * (nV + pV)) + wV
        }

        function RV(VV, eV, xV) {
          const JV = VV.radius + qV,
            YV = eV - VV.x,
            UV = xV - VV.z;
          return YV * YV + UV * UV < JV * JV
        }
        const gV = ["White Baked Clay", "Clay", "Sand", "Light Gray Baked Clay", "Clay", "White Baked Clay", "Andesite", "Light Gray Baked Clay", "Stone", "Andesite", "Stone"],
          DV = ["Chalk", "Sand", "Clay"],
          iV = -40,
          CV = -20,
          aV = .05;
        class oV {
          constructor(VV, eV, xV, JV) {
            this.seed = VV, this.fine = xV, this.lookAt = JV, this.salt = void 0, this.cells = new Map, this.lastCellX = NaN, this.lastCellZ = NaN, this.lastHole = null, this.upperBandIds = void 0, this.bandIds = void 0, this.copperId = void 0, this.clayId = void 0, this.gravelId = void 0, this.salt = pV(VV);
            const YV = VV => eV[VV].id;
            this.upperBandIds = DV.map(YV), this.bandIds = gV.map(YV), this.copperId = YV("Copper Ore"), this.clayId = YV("Clay"), this.gravelId = YV("Gravel")
          }
          carveGround(VV, eV, xV) {
            const JV = this.cellHole(VV, eV);
            return JV ? WV(JV, VV, eV, xV) : null
          }
          taking(VV, eV) {
            const xV = this.cellHole(VV, eV);
            return xV && RV(xV, VV, eV) ? xV : null
          }
          clearsPrefab(VV, eV, xV, JV, YV) {
            const UV = xV + tV;
            for (let yV = Math.floor((VV - UV) / jV); yV <= Math.floor((VV + UV) / jV); yV++)
              for (let pV = Math.floor((eV - UV) / jV); pV <= Math.floor((eV + UV) / jV); pV++) {
                const UV = this.holeIn(yV, pV);
                if (UV && YV >= UV.floorY - BV.f && JV <= UV.topY + qV) {
                  const JV = UV.radius + qV + xV;
                  if ((UV.x - VV) ** 2 + (UV.z - eV) ** 2 < JV * JV) return !1
                }
              }
            return !0
          }
          wallBlock(VV, eV, xV, JV) {
            const YV = this.taking(VV, xV);
            if (!YV || JV >= YV.topY) return 0;
            if (eV === JV && eV <= YV.floorY) return this.fine(VV, xV) > .2 ? this.clayId : this.gravelId;
            if (eV >= iV && eV <= CV && nV(VV, eV, xV, 1779033703 ^ this.salt) < aV) return this.copperId;
            const UV = Math.floor((-10 - eV - Math.round(this.fine(VV, xV))) / 3);
            return UV < 0 ? this.upperBandIds[-UV % this.upperBandIds.length] : this.bandIds[Math.min(UV, this.bandIds.length - 1)]
          }
          cellHole(VV, eV) {
            return this.holeIn(Math.floor(VV / jV), Math.floor(eV / jV))
          }
          holeIn(VV, eV) {
            if (VV === this.lastCellX && eV === this.lastCellZ) return this.lastHole;
            const xV = 65536 * VV + eV;
            let JV = this.cells.get(xV);
            return void 0 === JV && (this.cells.size >= 4096 && this.cells.clear(), JV = GV(this.seed, VV, eV, this.lookAt), this.cells.set(xV, JV)), this.lastCellX = VV, this.lastCellZ = eV, this.lastHole = JV, JV
          }
        }
        var cV = xV(40982);
        const hV = new Set(["rock", "rubble", "dryCactus", "bone"]);
        class lV {
          constructor(VV, eV, xV, JV, YV, UV) {
            this.PZ = eV, this.chances = YV, this.mound = UV, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = xV.salt ^ yV(JV), this.sinkholes = xV.sinkholes;
            const pV = eV => VV[eV].id;
            this.ids = {
              deadBush: pV("Dead Bush"),
              rock1: pV("Andesite"),
              rock2: pV("Stone"),
              rock3: pV("Messy Stone"),
              rubble1: pV("Mossy Messy Stone"),
              rubble2: pV("Cracked Stone Bricks"),
              rubble3: pV("Messy Stone"),
              dryCactus: pV("Dry Fat Cactus"),
              bone: pV("Bone Block"),
              grass: pV("Grass"),
              tallGrass: pV("Tall Grass"),
              tallGrassTop: pV("Tall Grass|Top")
            }
          }
          addBiomeFloraToColumn(VV, eV, xV, JV, YV, UV, yV) {
            const pV = this.mound(JV, UV);
            if (pV) {
              const QV = yV + 1 - YV;
              for (let YV = 0; YV < pV.height && QV + YV < this.PZ; YV++) QV + YV >= 0 && VV.set(JV - eV, QV + YV, UV - xV, pV.block);
              return
            }
            const nV = QV(JV, UV, this.salt);
            let wV = 0;
            for (const vV of this.order) {
              var ZV;
              if (wV += null !== (ZV = this.chances[vV]) && void 0 !== ZV ? ZV : 0, nV < wV) return void(hV.has(vV) && this.sinkholes.taking(JV, UV) || this.place(VV, JV - eV, yV + 1 - YV, UV - xV, vV, QV(JV, UV, 1540483477 ^ this.salt)))
            }
          }
          place(VV, eV, xV, JV, YV, UV) {
            const yV = (YV, UV) => {
                xV + YV >= 0 && xV + YV < this.PZ && VV.set(eV, xV + YV, JV, UV)
              },
              pV = this.ids;
            if ("rock" === YV) {
              const VV = UV < .5 ? pV.rock1 : UV < .8 ? pV.rock2 : pV.rock3;
              yV(0, VV), UV < .3 && yV(1, VV)
            } else "rubble" === YV ? yV(0, UV < .55 ? pV.rubble1 : UV < .75 ? pV.rubble2 : pV.rubble3) : "dryCactus" === YV ? (yV(0, pV.dryCactus), UV < .5 && yV(1, pV.dryCactus)) : "tallGrass" === YV ? (yV(0, pV.tallGrass), yV(1, pV.tallGrassTop)) : yV(0, pV[YV])
          }
        }
        class LV extends cV.k {
          constructor(VV, eV, xV, JV, YV, UV) {
            super(VV, eV, xV, JV, YV, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null), this.noise = UV, this.grassChance = 0, this.tallGrassChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = null, this.maxFloraHeight = 3, this.waterKept = .25, this.maxSurfacePrefabRelief = 6, this.floraChances = void 0, this.canyonStrength = 1, this.canyonDepth = 26, this.outcropChance = void 0, this.ids = void 0;
            const yV = {};
            for (const pV of ["Dry Grass Block", "Overgrown Dry Grass Block", "Grass Block", "Dirt", "Messy Dirt", "Rocky Dirt", "Gravel", "Sand", "Red Sand", "Clay", "Chalk", "Stone", "Andesite", "Messy Stone", "Mossy Messy Stone", "Cracked Stone Bricks", "Baked Clay", "Orange Baked Clay", "Brown Baked Clay", "Red Baked Clay", "Yellow Baked Clay", "Light Gray Baked Clay", "White Baked Clay", "Copper Ore", "Gold Ore", "Coal Ore", "Iron Ore"]) yV[pV] = eV[pV].id;
            this.ids = yV, this.lowsoilBlockType = yV.Dirt
          }
          init() {
            super.init(), this.floraGenerator = new lV(this.blockMetadata, this.PZ, this.noise, this.seed, this.floraChances, ((VV, eV) => this.mound(VV, eV)))
          }
          getHeightmapVal(VV, eV) {
            const xV = this.getGroundHeight(VV, eV);
            return this.canyonStrength > 0 ? xV - this.canyonStrength * this.canyonDepth * this.noise.canyonDepth(VV, eV) : xV
          }
          carveGround(VV, eV, xV) {
            return this.noise.sinkholes.carveGround(VV, eV, xV)
          }
          allowsPrefab(VV, eV, xV, JV, YV) {
            return this.noise.sinkholes.clearsPrefab(VV, eV, xV, JV, YV)
          }
          getTopsoilBlock(VV, eV, xV) {
            const JV = this.noise.sinkholes.wallBlock(VV, eV, xV, eV);
            return JV || (this.outcropDistance(VV, xV) <= 2 ? function(VV, eV, xV, JV) {
              return nV(VV, eV, xV, JV ^ vV) < .85
            }(VV, eV, xV, this.noise.salt) ? this.ids["Copper Ore"] : this.ids.Andesite : this.soilTop(VV, eV, xV))
          }
          soilTop(VV, eV, xV) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(VV, eV, xV, JV) {
            const YV = this.noise.sinkholes.wallBlock(VV, eV, xV, JV);
            return YV || (eV >= JV - 2 && this.outcropDistance(VV, xV) <= 1 ? this.ids["Copper Ore"] : this.soilBelow(VV, eV, xV, JV))
          }
          soilBelow(VV, eV, xV, JV) {
            return this.copperSeam(VV, eV, xV) || this.lowsoilBlockType
          }
          outcropDistance(VV, eV) {
            const xV = function(VV, eV, xV, JV) {
              const YV = Math.floor(VV / 36),
                UV = Math.floor(eV / 36);
              return kV(YV, UV, xV) >= JV ? 1 / 0 : Math.abs(VV - bV(YV, UV, xV, 1)) + Math.abs(eV - bV(YV, UV, xV, 2))
            }(VV, eV, this.noise.salt, this.outcropChance);
            return xV <= 2 && this.noise.sinkholes.taking(VV, eV) ? 1 / 0 : xV
          }
          mound(VV, eV) {
            const xV = function(VV, eV, xV, JV) {
              return 0 === JV || 1 === JV && QV(VV, eV, xV ^ vV ^ 3) < .5 ? 2 - JV : 0
            }(VV, eV, this.noise.salt, this.outcropDistance(VV, eV));
            return xV > 0 ? {
              block: this.ids["Copper Ore"],
              height: xV
            } : null
          }
          copperSeam(VV, eV, xV) {
            return function(VV, eV, xV, JV, YV) {
              const UV = 1013904242 ^ JV;
              if ((7 & eV) !== (7 & UV) || nV(VV >> 3, eV, xV >> 3, UV) >= .5) return !1;
              const yV = YV(VV, xV);
              return yV > .05 && yV < .95 && nV(VV, eV, xV, UV) < .75
            }(VV, eV, xV, this.noise.salt, ((VV, eV) => this.noise.canyonDepth(VV, eV))) ? this.ids["Copper Ore"] : 0
          }
          getDryBedBlock(VV, eV, xV) {
            const JV = this.noise.patch(VV + 900, xV);
            return JV > .45 ? this.ids.Sand : JV < -.6 ? this.ids.Clay : this.ids.Gravel
          }
        }

        function fV(VV) {
          return VV < 0 ? 0 : VV > 1 ? 1 : VV
        }
        class mV {
          constructor(VV, eV, xV) {
            this.salt = void 0, this.sinkholes = void 0, this.canyon = void 0, this.canyonWarp = void 0, this.canyonMask = void 0, this.patchNoise = void 0, this.fineNoise = void 0, this.canyonAtX = NaN, this.canyonAtZ = NaN, this.canyonAt = 0, this.salt = pV(VV), this.sinkholes = new oV(VV, eV, ((VV, eV) => this.fine(VV, eV)), ((VV, eV) => {
              return JV = xV(VV, eV), Object.hasOwn(wV, JV.key) ? JV.key : null;
              var JV
            })), this.canyon = new YV.h([{
              amplitude: 1,
              frequency: 1 / 260
            }], `${VV}WastelandCanyon`), this.canyonWarp = new YV.h([{
              amplitude: 28,
              frequency: 1 / 90
            }], `${VV}WastelandCanyonWarp`), this.canyonMask = new YV.h([{
              amplitude: 1,
              frequency: 1 / 650
            }], `${VV}WastelandCanyonMask`), this.patchNoise = new YV.h([{
              amplitude: 1,
              frequency: 1 / 48
            }, {
              amplitude: .4,
              frequency: 1 / 14
            }], `${VV}WastelandPatch`), this.fineNoise = new YV.h([{
              amplitude: .75,
              frequency: 1 / 16
            }, {
              amplitude: .25,
              frequency: .2
            }], `${VV}WastelandFine`)
          }
          canyonDepth(VV, eV) {
            if (VV === this.canyonAtX && eV === this.canyonAtZ) return this.canyonAt;
            let xV = 0;
            const JV = fV(2.5 * (this.canyonMask.getOctaves(VV, eV) + .15));
            if (JV > 0) {
              const YV = Math.abs(this.canyon.getOctaves(VV + this.canyonWarp.getOctaves(VV, eV), eV + this.canyonWarp.getOctaves(VV + 311, eV - 173))),
                UV = .09 * JV;
              if (YV < UV) {
                const VV = fV((UV - YV) / (.45 * UV));
                xV = VV * VV * (3 - 2 * VV)
              }
            }
            return this.canyonAtX = VV, this.canyonAtZ = eV, this.canyonAt = xV, xV
          }
          patch(VV, eV) {
            return this.patchNoise.getOctaves(VV, eV)
          }
          fine(VV, eV) {
            return this.fineNoise.getOctaves(VV, eV)
          }
        }
        var KV = xV(4648),
          HV = xV(657),
          uV = xV(40360),
          sV = xV(40975);
        const SV = "oldWorks";

        function IV(VV) {
          return Uint8Array.from(atob(VV), (VV => VV.charCodeAt(0)))
        }
        let dV = null;

        function OV() {
          return dV ??= function() {
            const VV = new uV.c;
            return VV.set(0, 0, 0, IV("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")), VV.set(0, 1, 0, IV("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new sV.b(SV, {
              x: 0,
              y: 0,
              z: 0
            }, {
              x: 29,
              y: 40,
              z: 29
            }, VV)
          }(), dV
        }
        const Ve = 3,
          ee = 6,
          xe = {
            name: SV,
            get schematic() {
              return OV()
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
              qualityDistribution: new KV.h([{
                value: HV.i.UNCOMMON,
                weight: 1
              }, {
                value: HV.i.RARE,
                weight: 2
              }, {
                value: HV.i.EPIC,
                weight: 1
              }])
            }],
            spawnerBlockLocations: [{
              localX: 10,
              localY: 2,
              localZ: 16,
              mobTypeDistribution: new KV.h([{
                value: "Draugr Zombie",
                weight: 1
              }])
            }]
          };

        function Je(VV, eV, xV) {
          return (0, cV.pb)(VV, [{
            prefab: xe,
            frequency: xV
          }, ...cV.h.map((VV => ({
            prefab: VV,
            frequency: eV
          })))])
        }
        class Ye extends LV {
          constructor(VV, eV, xV, UV, yV, pV) {
            super(VV, eV, xV, `${UV}DustFlats`, yV, pV, Je(JV.m.MEDIUM, 1.25, Ve)), this.key = "dustFlats", this.floraChances = {
              deadBush: .012,
              rock: .0015,
              bone: 2e-4
            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = rV.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new YV.h([{
              amplitude: 5,
              frequency: 1 / 90
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${UV}DustFlatsHeight`)
          }
          getGroundHeight(VV, eV) {
            return -2 + this.height.getOctaves(VV, eV)
          }
          soilTop(VV, eV, xV) {
            const JV = this.noise.patch(VV, xV);
            if (JV > .45) return this.ids.Gravel;
            if (JV < -.55) return this.ids.Sand;
            const YV = this.noise.fine(VV, xV);
            return YV > .3 ? this.ids["Messy Dirt"] : YV < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
        }
        class Ue extends LV {
          constructor(VV, eV, xV, JV, UV, yV) {
            super(VV, eV, xV, `${JV}ScorchedMesa`, UV, yV), this.key = "scorchedMesa", this.floraChances = {
              deadBush: .015,
              dryCactus: .0012,
              rock: 8e-4
            }, this.outcropChance = rV.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new YV.h([{
              amplitude: 40,
              frequency: 1 / 300
            }, {
              amplitude: 12,
              frequency: 1 / 80
            }], `${JV}ScorchedMesaHeight`);
            const pV = this.ids;
            this.bandPalette = [pV["Orange Baked Clay"], pV["Baked Clay"], pV["Orange Baked Clay"], pV["Brown Baked Clay"], pV["Red Baked Clay"], pV["Orange Baked Clay"], pV["Yellow Baked Clay"], pV["Baked Clay"], pV["Light Gray Baked Clay"], pV["Red Baked Clay"], pV["White Baked Clay"], pV["Brown Baked Clay"]]
          }
          getGroundHeight(VV, eV) {
            const xV = this.height.getOctaves(VV, eV) + 8;
            if (xV <= 6) return .6 * xV;
            const JV = (xV - 6) / 9,
              YV = Math.floor(JV);
            return 3.6 + 9 * (YV + fV((JV - YV - .7) / .3)) * 1.5
          }
          soilTop(VV, eV, xV) {
            return eV >= 12 ? this.ids["Red Sand"] : this.noise.fine(VV, xV) > .45 ? this.ids["Messy Dirt"] : this.ids["Red Sand"]
          }
          soilBelow(VV, eV, xV, JV) {
            return eV >= JV - 1 ? this.ids["Red Sand"] : this.getStrataBlock(VV, eV, xV, JV) || this.lowsoilBlockType
          }
          getStrataBlock(VV, eV, xV, JV) {
            if (eV < -8) return 0;
            const YV = this.noise.patch(.25 * VV, .25 * xV),
              UV = Math.floor((eV + 4 * YV) / 3);
            return function(VV, eV, xV, JV, YV, UV, yV) {
              const pV = 1541459225 ^ JV;
              return YV > .15 && eV >= yV - 16 && QV(UV, 1, pV) < .25 && nV(VV, eV, xV, pV) < .06
            }(VV, eV, xV, this.noise.salt, YV, UV, JV) ? this.ids["Gold Ore"] : this.bandPalette[Math.floor(QV(UV, 0, this.noise.salt) * this.bandPalette.length)]
          }
          getDryBedBlock(VV, eV, xV) {
            return this.ids["Red Sand"]
          }
        }
        class ye extends LV {
          constructor(VV, eV, xV, JV, UV, yV) {
            super(VV, eV, xV, `${JV}ShatteredHighlands`, UV, yV), this.key = "shatteredHighlands", this.floraChances = {
              deadBush: .006,
              rock: .004
            }, this.outcropChance = rV.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new YV.h([{
              amplitude: 60,
              frequency: 1 / 240
            }], `${JV}HighlandsRidge1`), this.ridge2 = new YV.h([{
              amplitude: 25,
              frequency: 1 / 110
            }], `${JV}HighlandsRidge2`), this.bumps = new YV.h([{
              amplitude: 6,
              frequency: .02
            }], `${JV}HighlandsBumps`)
          }
          getGroundHeight(VV, eV) {
            return 1.2 * (85 - Math.abs(this.ridge1.getOctaves(VV, eV)) - Math.abs(this.ridge2.getOctaves(VV, eV))) - 25 + this.bumps.getOctaves(VV, eV)
          }
          soilTop(VV, eV, xV) {
            const JV = this.noise.fine(VV, xV);
            return eV > 58 ? JV > .35 ? this.ids.Gravel : JV < -.4 ? this.ids.Andesite : this.ids.Stone : eV > 36 ? JV > .25 ? this.ids.Gravel : JV < -.45 ? this.ids.Stone : this.ids["Rocky Dirt"] : JV > .3 ? this.ids["Messy Dirt"] : JV < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
          soilBelow(VV, eV, xV, JV) {
            const YV = this.peakSeam(VV, eV, xV);
            return 0 !== YV ? YV : eV > 50 ? this.ids.Stone : eV > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
          }
          getStrataBlock(VV, eV, xV, JV) {
            return this.peakSeam(VV, eV, xV)
          }
          peakSeam(VV, eV, xV) {
            const JV = function(VV, eV, xV, JV) {
              if (eV <= 40 || eV % 3 !== 0) return null;
              const YV = 2600822924 ^ JV,
                UV = QV(eV, 0, YV),
                yV = UV < .4 ? "Coal Ore" : UV < .7 ? "Iron Ore" : null;
              return null === yV || nV(VV >> 2, eV, xV >> 2, YV) >= .25 ? null : nV(VV, eV, xV, YV) < .65 ? yV : null
            }(VV, eV, xV, this.noise.salt);
            return JV ? this.ids[JV] : 0
          }
        }
        class pe extends LV {
          constructor(VV, eV, xV, UV, yV, pV) {
            super(VV, eV, xV, `${UV}RuinFields`, yV, pV, Je(JV.m.HIGH, 2.25, ee)), this.key = "ruinFields", this.floraChances = {
              deadBush: .02,
              rubble: .008,
              rock: .001,
              bone: 3e-4
            }, this.outcropChance = rV.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new YV.h([{
              amplitude: 3,
              frequency: 1 / 80
            }, {
              amplitude: 1.5,
              frequency: .04
            }], `${UV}RuinFieldsHeight`)
          }
          getGroundHeight(VV, eV) {
            return -3 + this.height.getOctaves(VV, eV)
          }
          soilTop(VV, eV, xV) {
            const JV = QV(VV, xV, 461845907 ^ this.noise.salt);
            return JV < .05 ? this.ids["Mossy Messy Stone"] : JV < .08 ? this.ids["Messy Stone"] : JV < .09 ? this.ids["Cracked Stone Bricks"] : this.noise.fine(VV, xV) > -.1 ? this.ids["Overgrown Dry Grass Block"] : this.ids["Dry Grass Block"]
          }
        }
        class Qe extends LV {
          constructor(VV, eV, xV, JV, UV, yV) {
            super(VV, eV, xV, `${JV}SaltFlats`, UV, yV), this.key = "saltFlats", this.floraChances = {
              deadBush: .002,
              bone: 6e-4
            }, this.outcropChance = rV.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new YV.h([{
              amplitude: 1.5,
              frequency: 1 / 120
            }, {
              amplitude: .6,
              frequency: .05
            }], `${JV}SaltFlatsHeight`)
          }
          getGroundHeight(VV, eV) {
            return -8 + this.height.getOctaves(VV, eV)
          }
          soilTop(VV, eV, xV) {
            const JV = this.noise.patch(VV, xV);
            return JV > .5 ? this.ids.Sand : JV < -.55 ? this.ids.Clay : this.ids.Chalk
          }
          soilBelow(VV, eV, xV, JV) {
            return eV >= JV - 2 ? this.ids.Sand : this.ids.Clay
          }
          getStrataBlock(VV, eV, xV, JV) {
            return this.noise.sinkholes.wallBlock(VV, eV, xV, JV)
          }
        }
        class ne extends LV {
          constructor(VV, eV, xV, JV, UV, yV) {
            super(VV, eV, xV, `${JV}SurvivorGrove`, UV, yV), this.key = "survivorGrove", this.floraChances = {
              grass: .12,
              tallGrass: .015,
              deadBush: .004
            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = rV.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new YV.h([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${JV}SurvivorGroveHeight`)
          }
          getGroundHeight(VV, eV) {
            return -3 + this.height.getOctaves(VV, eV)
          }
          soilTop(VV, eV, xV) {
            return this.noise.fine(VV, xV) < -.6 ? this.ids["Dry Grass Block"] : this.ids["Grass Block"]
          }
          getDryBedBlock(VV, eV, xV) {
            return this.ids.Dirt
          }
        }
        const we = {
          buildBiomes: function(VV) {
            let {
              PZ: eV,
              blockMetadata: xV,
              worldGenerator: JV,
              seed: YV,
              biomeOpts: yV,
              biomeAt: pV
            } = VV;
            const QV = [eV, xV, JV, YV, yV, new mV(YV, xV, pV)],
              nV = {
                dustFlats: new Ye(...QV),
                scorchedMesa: new Ue(...QV),
                shatteredHighlands: new ye(...QV),
                ruinFields: new pe(...QV),
                saltFlats: new Qe(...QV),
                survivorGrove: new ne(...QV)
              },
              ZV = (0, UV.m)(xV);
            return Object.keys(wV).map((VV => ({
              biome: nV[VV],
              frequency: wV[VV],
              altBiome: null,
              ...ZV
            })))
          }
        }
      },
      638: (VV, eV, xV) => {
        xV.d(eV, {
          d: () => JV
        });
        class JV {
          constructor(VV, eV) {
            this.keyToValueTable = VV, this.valueToKeyTable = void 0;
            const xV = {};
            for (const JV in this.keyToValueTable) {
              const VV = this.keyToValueTable[JV];
              if (void 0 !== xV[VV]) throw new Error(`Duplicate value found in bi-directional table: ${String(VV)}`);
              xV[VV] = "string" === eV ? JV : Number(JV)
            }
            this.valueToKeyTable = xV
          }
          get(VV) {
            return this.keyToValueTable[VV]
          }
          reverseGet(VV) {
            return this.valueToKeyTable[VV]
          }
        }
      },
      40975: (VV, eV, xV) => {
        xV.d(eV, {
          b: () => YV
        });
        var JV = xV(40360);
        class YV {
          constructor(VV, eV, xV, YV) {
            let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new JV.c,
              yV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                x: 0,
                y: 0,
                z: 0
              },
              pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              QV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            this.name = VV, this.startOffset = eV, this.dimensions = xV, this.rleChunkStorage = YV, this.blockData = UV, this.pasteOffset = yV, this.lobbyCode = pV, this.disjoint = QV
          }
          getRLEChunk(VV, eV, xV) {
            return this.rleChunkStorage.get(VV, eV, xV)
          }
          getNumRLEChunks() {
            return this.rleChunkStorage.getNumItems()
          }* getRLECoords() {
            const VV = [0, 0, 0];
            for (const {
                x: eV,
                y: xV,
                z: JV
              }
              of this.rleChunkStorage) VV[0] = eV, VV[1] = xV, VV[2] = JV, yield VV
          }
        }
      },
      40360: (VV, eV, xV) => {
        xV.d(eV, {
          c: () => JV
        });
        class JV {
          constructor() {
            this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
          }
          set(VV, eV, xV, JV) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const yV = 1023 & VV | (1023 & eV) << 10 | (1023 & xV) << 20;
            let pV = JV;
            if (YV(VV) && YV(eV) && YV(xV) || (pV = new UV(VV, eV, xV, JV), this.hasBoxes = !0), Math.abs(VV) < 512 && Math.abs(eV) < 512 && Math.abs(xV) < 512) {
              const VV = this.unbox(this.zeroStorage.get(yV));
              return this.zeroStorage.has(yV) || this.itemCount++, this.zeroStorage.set(yV, pV), VV
            }
            const QV = VV >> 10 & 1023 | (eV >> 10 & 1023) << 10 | (xV >> 10 & 1023) << 20;
            let nV = this.storage.get(QV);
            nV || (nV = new Map, this.storage.set(QV, nV));
            const wV = this.unbox(nV.get(yV));
            return nV.has(yV) || this.itemCount++, nV.set(yV, pV), wV
          }
          get(VV, eV, xV) {
            var JV;
            const YV = 1023 & VV | (1023 & eV) << 10 | (1023 & xV) << 20;
            if (Math.abs(VV) < 512 && Math.abs(eV) < 512 && Math.abs(xV) < 512) return this.unbox(this.zeroStorage.get(YV));
            const UV = VV >> 10 & 1023 | (eV >> 10 & 1023) << 10 | (xV >> 10 & 1023) << 20;
            return this.unbox(null === (JV = this.storage.get(UV)) || void 0 === JV ? void 0 : JV.get(YV))
          }
          remove(VV, eV, xV) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const JV = 1023 & VV | (1023 & eV) << 10 | (1023 & xV) << 20;
            if (Math.abs(VV) < 512 && Math.abs(eV) < 512 && Math.abs(xV) < 512) return void(this.zeroStorage.delete(JV) && this.itemCount--);
            const YV = VV >> 10 & 1023 | (eV >> 10 & 1023) << 10 | (xV >> 10 & 1023) << 20,
              UV = this.storage.get(YV);
            UV && UV.delete(JV) && this.itemCount--
          }
          removeBy(VV) {
            for (const {
                x: eV,
                y: xV,
                z: JV,
                val: YV
              }
              of this.iterate(!0)) {
              VV(eV, xV, JV, YV) && this.remove(eV, xV, JV)
            }
          }
          unbox(VV) {
            return this.hasBoxes && pV(VV) ? VV.val : VV
          }* iterate(VV) {
            const eV = this.mutationCount;
            for (const xV of QV(this.zeroStorage)) {
              if (!this.zeroStorage.has(xV)) continue;
              const JV = this.zeroStorage.get(xV);
              if (this.hasBoxes && pV(JV) ? yield {
                  x: JV.x,
                  y: JV.y,
                  z: JV.z,
                  val: JV.val
                } : yield {
                  x: xV << 22 >> 22,
                  y: xV << 12 >> 22,
                  z: xV << 2 >> 22,
                  val: JV
                }, !VV && eV !== this.mutationCount) throw new nV
            }
            for (const xV of QV(this.storage)) {
              const JV = this.storage.get(xV);
              if (JV)
                for (const YV of QV(JV)) {
                  if (!JV.has(YV)) continue;
                  const UV = JV.get(YV);
                  if (this.hasBoxes && pV(UV) ? yield {
                      x: UV.x,
                      y: UV.y,
                      z: UV.z,
                      val: UV.val
                    } : yield {
                      x: ((1023 & xV) << 10 | 1023 & YV) << 12 >> 12,
                      y: ((xV >> 10 & 1023) << 10 | YV >> 10 & 1023) << 12 >> 12,
                      z: ((xV >> 20 & 1023) << 10 | YV >> 20 & 1023) << 12 >> 12,
                      val: UV
                    }, !VV && eV !== this.mutationCount) throw new nV
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
            let VV = 0;
            for (const eV of this.storage.values()) VV += eV.size;
            return VV += this.zeroStorage.size, VV
          }
        }

        function YV(VV) {
          return VV << 12 >> 12 === VV && (0 !== VV || 1 / VV > 0)
        }
        class UV {
          constructor(VV, eV, xV, JV) {
            this.x = VV, this.y = eV, this.z = xV, this.val = JV, yV.add(this)
          }
        }
        const yV = new WeakSet;

        function pV(VV) {
          return "object" === typeof VV && null !== VV && yV.has(VV)
        }

        function QV(VV) {
          return Array.from(VV.keys()).sort(((VV, eV) => VV - eV))
        }
        class nV extends Error {
          constructor() {
            super(`${JV.name} has been mutated during iteration`)
          }
        }
      },
      41024: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => JV,
          h: () => yV
        });
        class JV {
          constructor(VV, eV, xV) {
            var JV;
            this.name = VV, this.max = eV, this.idleMs = xV, this.head = new pV(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
            const YV = setInterval((() => {
              this.dropIdleEntriesIfDue(Date.now())
            }), xV);
            null === (JV = YV.unref) || void 0 === JV || JV.call(YV)
          }
          setMax(VV) {
            for (this.max = VV; this.size > VV;) this.drop(this.head.prev)
          }
          partition() {
            return new YV(this)
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
          recordLookup(VV) {
            if (void 0 !== VV) return this.hits++, VV.epoch = this.epoch, this.head.next !== VV && (QV(VV), this.linkFirst(VV)), VV.value;
            this.misses++
          }
          add(VV) {
            this.dropIdleEntriesIfDue(Date.now()), VV.epoch = this.epoch, this.linkFirst(VV), this.size++, this.size > this.max && this.drop(this.head.prev)
          }
          replace(VV, eV) {
            QV(VV), this.size--, this.add(eV)
          }
          dropIdleEntriesIfDue(VV) {
            VV - this.epochStartMs >= this.idleMs && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = VV)
          }
          dropEntriesIdleSince(VV) {
            for (; this.size > 0 && this.head.prev.epoch < VV;) this.drop(this.head.prev)
          }
          drop(VV) {
            QV(VV), VV.entries.delete(VV.key), this.size--
          }
          linkFirst(VV) {
            const eV = this.head.next;
            VV.prev = this.head, VV.next = eV, eV.prev = VV, this.head.next = VV
          }
        }
        class YV {
          constructor(VV) {
            this.partitioner = VV, this.entries = new Map
          }
          get(VV, eV) {
            return this.partitioner.recordLookup(this.entries.get(yV(VV, eV)))
          }
          set(VV, eV, xV) {
            const JV = yV(VV, eV),
              YV = new pV(JV, xV, this.entries),
              UV = this.entries.get(JV);
            this.entries.set(JV, YV), void 0 === UV ? this.partitioner.add(YV) : this.partitioner.replace(UV, YV)
          }
        }
        const UV = 2 ** 25;

        function yV(VV, eV) {
          return VV > -UV && VV < UV && eV > -UV && eV < UV ? VV * (2 * UV) + eV : `${VV}|${eV}`
        }
        class pV {
          constructor(VV, eV, xV) {
            this.key = VV, this.value = eV, this.entries = xV, this.prev = this, this.next = this, this.epoch = 0
          }
        }

        function QV(VV) {
          VV.prev.next = VV.next, VV.next.prev = VV.prev
        }
      },
      40978: (VV, eV, xV) => {
        function JV(VV) {
          const eV = atob(VV),
            xV = new Uint8Array(eV.length);
          for (let JV = 0; JV < eV.length; JV++) xV[JV] = eV.charCodeAt(JV);
          return xV
        }
        xV.d(eV, {
          c: () => JV
        })
      },
      40982: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => LV,
          h: () => XV,
          k: () => GV,
          n: () => HV,
          r: () => uV,
          v: () => OV,
          x: () => WV,
          y: () => cV,
          z: () => dV,
          B: () => IV,
          D: () => fV,
          H: () => RV,
          I: () => aV,
          K: () => gV,
          O: () => lV,
          P: () => mV,
          R: () => iV,
          V: () => hV,
          Z: () => DV,
          ab: () => sV,
          db: () => SV,
          gb: () => KV,
          ib: () => oV,
          lb: () => CV,
          pb: () => zV
        });
        var JV = xV(40946),
          YV = xV(657),
          UV = xV(40984),
          yV = xV(4648);
        class pV {
          constructor(VV, eV, xV, JV, YV, pV, QV, nV, wV, ZV, vV, rV, kV, bV) {
            let {
              cactusChance: EV,
              maxCactusHeight: BV
            } = kV;
            this.columnRandom = new yV.l(""), this.flowerPatchRandom = new yV.l(""), this.cactusRandom = new yV.l(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.PZ = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = VV, this.seed = xV, this.grassChance = JV, this.tallGrassChance = YV, this.cornChance = pV, this.spectralGrassChance = QV, this.pineGrassChance = nV, this.pineFernChance = wV, this.jungleTallGrassChance = ZV, this.catnipChance = vV, this.autumnFernChance = rV, this.cactusChance = EV, this.maxCactusHeight = BV, this.PZ = eV, this.flowerInfos = [{
              flower: "Dandelion",
              patchChance: bV.dandelionChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Poppy",
              patchChance: bV.poppyChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Forget-me-not",
              patchChance: bV.forgetMeNotChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Red Tulip",
              patchChance: bV.redTulipChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Pink Tulip",
              patchChance: bV.pinkTulipChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "White Tulip",
              patchChance: bV.whiteTulipChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Orange Tulip",
              patchChance: bV.orangeTulipChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Daisy",
              patchChance: bV.daisyChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Allium",
              patchChance: bV.alliumChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Shadow Rose",
              patchChance: bV.shadowRoseChance,
              insidePatchSpawnChance: bV.defaultFlowerInsidePatchSpawnChance,
              patchRadius: bV.defaultFlowerPatchRadius
            }, {
              flower: "Bluebell",
              patchChance: bV.bluebellChance,
              insidePatchSpawnChance: .85,
              patchRadius: 8
            }, {
              flower: "Fallen Maple Leaves",
              patchChance: bV.fallenMapleLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fallen Cherry Leaves",
              patchChance: bV.fallenCherryLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Melon",
              patchChance: bV.melonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Watermelon",
              patchChance: bV.watermelonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Pumpkin",
              patchChance: bV.pumpkinChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Rice|FreshlyGrown",
              patchChance: bV.riceChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cranberries_stage2",
              patchChance: bV.cranberryChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Red Mushroom",
              patchChance: bV.redMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Brown Mushroom",
              patchChance: bV.brownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Red Mushroom",
              patchChance: bV.fatRedMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Brown Mushroom",
              patchChance: bV.fatBrownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cotton_stage3",
              patchChance: bV.cottonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 3
            }, {
              flower: "Chili Pepper Plant|FreshlyGrown",
              patchChance: bV.chiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Chili Pepper Plant|Lava|FreshlyGrown",
              patchChance: bV.lavaChiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Fallen Pine Cone",
              patchChance: bV.fallenPineConeChance,
              insidePatchSpawnChance: .4,
              patchRadius: 3
            }], this.maxPatchRadius = 0;
            for (const {
                patchRadius: UV
              }
              of this.flowerInfos) this.maxPatchRadius = Math.max(this.maxPatchRadius, UV);
            this.totalFlowerPatchChance = 0;
            for (const {
                patchChance: UV
              }
              of this.flowerInfos) this.totalFlowerPatchChance += UV;
            this.doFlowerGen = null !== bV.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new UV.b("flwrPtch", bV.flowerPatchDistApart, !1, !0, xV, 4, eV)), this.grassId = VV.Grass.id, this.tallGrassId = VV["Tall Grass"].id, this.tallGrassTopId = VV["Tall Grass|Top"].id, this.cornSeedsId = VV["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = VV["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = VV["Spectral Grass"].id, this.pineGrassId = VV["Pine Grass"].id, this.pineFernId = VV["Pine Fern"].id, this.jungleTallGrassId = VV["Jungle Tall Grass"].id, this.jungleTallGrassTopId = VV["Jungle Tall Grass|Top"].id, this.catnipId = VV.Catnip.id, this.autumnFernId = VV["Autumn Fern"].id, this.cactusId = VV.Cactus.id, this.fatCactusId = VV["Fat Cactus"].id
          }
          addBiomeFloraToColumn(VV, eV, xV, YV, UV, yV, pV) {
            if (pV + 3 >= UV && pV + 1 < UV + this.PZ) {
              const QV = this.columnRandom;
              QV.reseed(`${YV}${yV}${this.seed}flora`);
              const nV = QV.next();
              if (nV < this.grassChance) {
                const JV = pV + 1 - UV;
                0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.grassId)
              } else {
                if (nV < this.grassChance + this.tallGrassChance) {
                  {
                    const JV = pV + 1 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.tallGrassId)
                  } {
                    const JV = pV + 2 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.tallGrassTopId)
                  }
                  return
                }
                if (nV < this.grassChance + this.tallGrassChance + this.cornChance) {
                  {
                    const JV = pV + 1 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.cornSeedsId)
                  } {
                    const JV = pV + 2 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.cornPlantId)
                  } {
                    const JV = pV + 3 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.cornPlantId)
                  }
                  return
                }
                if (nV < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance) {
                  const JV = pV + 1 - UV;
                  0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.spectralGrassId)
                } else if (nV < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance) {
                  const JV = pV + 1 - UV;
                  0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.pineGrassId)
                } else if (nV < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance) {
                  const JV = pV + 1 - UV;
                  0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.pineFernId)
                } else {
                  if (nV < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance) {
                    {
                      const JV = pV + 1 - UV;
                      0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.jungleTallGrassId)
                    } {
                      const JV = pV + 2 - UV;
                      0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.jungleTallGrassTopId)
                    }
                    return
                  }
                  if (nV < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance) {
                    const JV = pV + 1 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.catnipId)
                  } else if (nV < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance + this.autumnFernChance) {
                    const JV = pV + 1 - UV;
                    0 <= JV && JV < this.PZ && VV.set(YV - eV, JV, yV - xV, this.autumnFernId)
                  }
                }
              }
              if (this.doFlowerGen && this.totalFlowerPatchChance > 0 && pV + 1 >= UV) {
                const nV = this.flowerPatchPointGen.getClosestPoint(YV, yV),
                  wV = (0, JV.B)(nV, YV, yV);
                if (wV < this.maxPatchRadius) {
                  const JV = this.flowerPatchRandom;
                  JV.reseed(`${nV[0]}${nV[1]}${this.seed}flowerpatch`);
                  const ZV = Math.floor(JV.next() * this.totalFlowerPatchChance);
                  let vV = 0,
                    rV = 0;
                  for (; vV <= ZV;) vV += this.flowerInfos[rV].patchChance, rV++;
                  const kV = this.flowerInfos[rV - 1];
                  if (wV < kV.patchRadius && QV.next() < kV.insidePatchSpawnChance) {
                    const JV = kV.flower;
                    VV.set(YV - eV, pV + 1 - UV, yV - xV, this.blockMetadata[JV].id)
                  }
                }
              }
            }
            if (0 !== this.cactusChance) {
              const JV = this.cactusRandom;
              JV.reseed(`${YV}${yV}${this.seed}cactus`);
              const QV = JV.next();
              if (QV < this.cactusChance) {
                const nV = Math.floor(JV.next() * (this.maxCactusHeight - 1)) + 1,
                  wV = Math.min(pV + nV + 1, UV + this.PZ),
                  ZV = QV < this.cactusChance * (2 / 3);
                for (let JV = Math.max(pV + 1, UV); JV < wV; JV++) VV.set(YV - eV, JV - UV, yV - xV, ZV ? this.fatCactusId : this.cactusId)
              }
            }
          }
        }
        var QV = xV(40957),
          nV = xV(40975),
          wV = xV(40360),
          ZV = xV(40978);

        function vV(VV, eV, xV) {
          const JV = new wV.c;
          for (const UV of xV) {
            const VV = JV.get(UV.chunkX, UV.chunkY, UV.chunkZ);
            if (!(0, YV.J)(VV)) throw new Error(`Duplicate chunk at ${UV.chunkX}, ${UV.chunkY}, ${UV.chunkZ}`);
            JV.set(UV.chunkX, UV.chunkY, UV.chunkZ, UV.rle)
          }
          return new nV.b(VV, {
            x: 0,
            y: 0,
            z: 0
          }, eV, JV)
        }
        const rV = {
          treeJungleLarge1: vV("treeJungleLarge1", {
            x: 31,
            y: 33,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          treeJungleLarge2: vV("treeJungleLarge2", {
            x: 28,
            y: 35,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          treeMapleLarge1: vV("treeMapleLarge1", {
            x: 24,
            y: 27,
            z: 24
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          treeMapleLarge2: vV("treeMapleLarge2", {
            x: 32,
            y: 34,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0AAdIBAgAB0gEYAAHSAQEAAdIBAQAE0gEXAAjSARMAAtIBAgAB0gECAAHSAQQAAtIBEgAB0gEBAAHSAQMAA9IBAwAB0gETAAHSAQoAAdIBDAAD0gECAAHSAQEAAdIBGAAD0gEBAATSARkAAtIBAeMPAdIBAQAD0gEWAAHSAQEAAtIBBQAB4w8YAAHjDwHSAQEAAdIBHwAB0gEBAAHSAaoFAAHSAQIAAdIBAQAB0gEOAAHSAQYAAdIBAwAB0gECAALSAQHjDw0AAdIBBAAC0gEEAAHSAQIAA9IBAQAC0gENAAHSAQQAAeMPAQAB0gEBAAfSARQABNIBAQAC0gEBAAPSAQEAAtIBFAAC0gECAAPSAQEAAdIBAQAB0gEMAAHSAQEAAdIBAeMPAdIBAwAB0gEBAAHSAQMAAdIBEQAB0gECAAHSAQHjDwEAAtIBFgAD0gEBAAHSAQMAAtIBFgAB0gECAALSAQEAAdIBGQAB0gEFAALSAQEAAdIBHAAD0gEdAAHSAR8AAdIB3QQAAdIBAQAB0gEGAAHSAQUAAQkDAAHSAQwAA9IBBAAB0gEBAALSAQMAAdIBAQAB0gEBAAHSAQ4AAtIBBAAB0gEBAAHSAQMAAuMPAQAB0gEB4w8B0gEB4w8MAAHSAQUAAdIBAQAB0gECAAHSAQEABdIBFAAB0gEBAAHSAQMABdIBAgAB4w8UAAHSAQIAAtIBAQAD0gEPAAHjDwcAAdIBBAAC0gEQAALSAQEAAtIBAQAB0gEXAAHjDwEABdIBAQAB0gEYAAHSAQHjDwHSAQEAAtIBAQAC0gEWAAXSAQIAAdIBGgAC0gEfAAHSAQIAAdIBAQAB0gEdAAHSAb0DAAHSAQIAAdIBHQAB0gF9AALSAQEAAdIBBgAC0gEBAAHSAQEAAQkBAAHSAQ0AAdIBAgABCQHSAQQAAtIBAQAB0gEBAAHSAQMAAtIBDgAC0gEGAALSAQIAAtIBAgAB0gENAAHSAQEAAdIBAQAB0gECAAEJAtIBAQAB0gECAAHSAQEAAtIBAQAB0gEMAAHSAQcAAdIBAwAG0gEVAAHSAQQAA9IBAQAB4w8B0gEcAAHjDwLSAQ4AAtIBAeMPAQAB0gEBCQIAAtIBFgAE0gEBAAHSAQEAA9IBFwAB0gEBAAPSAQEAAdIBAQAB0gEWAALSAQEABNIBGQAB0gEBAAXSARkAAdIBAQAC0gEBAAPSARsAAdIBAgAB4w+9AwAC0gEdAAPSAQEAAdIBHAAB0gFgAALSAQMAAQkB0gEBAAHSAQIAAgkDAAHSAQsAAdIBAQkB0gEBCQYABtIBAQABCQEAA9IBCQAB0gEBAAXSAQQABNIBAeMPBAAB4w8B0gEMAAHjDwHSAQEAAtIBAgkD0gEDAAHSAQYAAdIBCwAB0gEFAAHSAQEJBAAC0gEBAAHSAQQAAdIBEQAD0gEDAAPSAREAAtIBAQkDAAHSAQEAAdIBBQAC0gENAAHSAQEAAtIBAgABCQHSAQEAAdIBFgAB0gEB4w8G0gEBAAHSAQEAAdIBFQAC0gECAAPSAQEAAdIBFwAC0gEBAATSARkAAtIBAQAG0gEYAAHSAQEABNIBGwAB4w8BAAHSAQEAAdIBvAMAAdIBAQAD0gEbAAPSAR4AAtIBAeMPSQAB0gERAALSAQIJBAABCQMAAgkB4w8DAAHSAQwAAtIBAQkB0gEBAAHSAQEJBAAB0gEDAALSAQIAAeMPAdIBDgAD0gEBCQMAAdIBAwAC0gECAAHSAQEAAtIBCgAB0gEBAATSAQIAA9IBAgAC0gEB4w8BAAHSAQEABNIBCwAB0gELAAHSAQIAAdIBAgAB4w8C0gERAAHjDwLSAQMAAdIBAgAB0gEBAALSAQ0AAdIBAQkBAAHjDwIAAdIBAeMPAwAB4w8B0gEQAALSAQEABdIBAeMPAQAB0gEVAALSAQMABdIBGgAC0gEB4w8B0gECAAHSARUAAdIBAwAB0gEBAALSARkAAeMPAdIBAeMPAdIBAQAB0gEcAAXSARsABNIBHgAB4w+eAwAB0gEBCQHSAR0AAdIBAQAC0gEbAALSAQEAAdIBHQAB0gEFAAEJHwADCQQAAdIBEQAB0gEBAAEJBwABCQEAAdIBAQAB0gEQAAPSAQEAAdIBAQkHAAHj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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          treePalmLarge1: vV("treePalmLarge1", {
            x: 11,
            y: 14,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
          }]),
          treePalmLarge2: vV("treePalmLarge2", {
            x: 13,
            y: 16,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcAAeYP+aQBAA==")
          }]),
          treePineLarge1: vV("treePineLarge1", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4AAtABHgAB0AEfAAHQAb0GAAHQAQEAAagNAdABGgAD0AEB5A8E0AEaAAHQAQEKA9ABHAAD0AG7BwAG0AEcAAHQAQEAAdABj4cBAA==")
          }]),
          treePineLarge2: vV("treePineLarge2", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("qwIAAdABAagNAtABHAAE0AG7BwAD0AEB5A8B0AEB5A8aAAHkDwbQARkABdABuwcABtABFgAL0AEUAAHQAQHkDwPQAQkAAdABsgcABtABAeQPBNABFAAM0AEB5A8C0AEPAAPQAQHkDwLQAQQAAtABAgAF0AEOAAHQAQIAAdABCwAC0AGVAQAC0AEB5A8eAAHQAbwFAAHQAQGoDQTQAQGoDRYAAagNC9ABEwAQ0AEOAAHQAQEKBtABAgAB5A8B0AEB5A8CAAPQAQEKAdABDAAC0AEB5A8B0AEBAAHkDwsAA9ABdQAB0AEdAAXQARwAAeQPAtABuwUACNABFQAF0AEB5A8H0AERAAHQAQEKAeQPDdABAQoB0AEMAAnQAQIAA9ABAwAF0AELAALQAREAAdABdAAB0AEBqA0B0AEcAAXQARsABdABuQUACdABFAAB0AEBCgHQAQHkDwrQAQEKAdABDgAT0AEBqA0LAA7QAQQAA9ABAeQPkgEABdABGwAE0AEYAAPQAQEAA9ABAeQPAwAB5A8C0AG4AQABqA0fAAPQAdkDAArQAREABNABAQoB0AEB5A8E0AEB5A8D0AEBCgPQAQ0AFNABDAAE0AECAAfQAQQABdABcQAB0AEBqA0C0AEbAAfQAQEAAagNFwAG0AEBAAPQAQEKEQAB0AEBCgPQAQHkDwjQAQEKAdABEgAH0AEDAALQAZcBAAPQAQHkDxwABdABAeQPGwAD0AH+AQADCh0AAagNmAEAAdABAQAF0AEBqA0D0AEB5A8C0AEPAArQAQHkDwTQAQHkDwTQAQwAB9ABAeQPCNABAeQPAtABAeQPAdABAagNEAAE0AEB5A8E0AEGAAPQARMAAdABPQAC0AEcAAHQAQHkDwPQAQEAAdABGAAK0AEBChQAAQoM0AERAALQAQEKAtABAuQPBtABAQoC0AESAAPQAQHkDwPQAQQAAtABeAAD0AEaAAHQAQGoDQXQARgACdABAeQPFwAH0AF8AAHQAQHkD30ABQocAAMKfQAC0AEVAAGoDQPQAQHkDwrQAQGoDQLQAQ0ACNABAeQPC9ABCwAC0AEB5A8O0AEC5A8F0AEOAAPQAQIABtABAeQPBQAD0AERAAPQAR4AAtABGwAD0AEBqA0C0AEYAAnQARcAAQoI0AEBCgHQARMAAtABAQoH0AEB5A8BCgLQAREAD9ABAeQPEQAG0AEB5A8D0AEDAAHQAXcAAtABAagNGwAC0AEB5A8D0AEB5A8BqA0WAAzQARUAAeQPCdABeQABqA0D0AEcAAPQAVwABwoaAAUKHAADCgGnDRwAAwodAAMKHAAC0AEBCgHQARQAE9ABCwAN0AEB5A8J0AEJAAnQAQIKAeQPCdABAQAD0AENAALQAQMAAwoB5A8B0AEB5A8B0AEEAATQARIAAagNAQoB0AEeAAEKAdABGQAB5A8B0AEEAALQARcAAagNA9ABBAAD0AETAALQAQHkDwEKBNABAgABCgHkDwEAAdABEQAP0AESAAHkDwrQAQHkDwLQARIAC9ABHAAD0AE+AAHQARwAAuQPBNABFwAL0AEUAAHQAQHkDwEKAtABAeQPBdABAeQPFQAB5A8E0AEB5A8E0AEbAATQAVkAAtABAagNAdABAagNAdABGgAF0AFbAAcKGQAHChoABQobAAUKAdsBGAACvgcFCgHbARkAAagNBQoB2wERAATQAQGoDQTQAQQKCNABCgAF0AEB5A8D0AEB5A8ECgvQAQGoDQYAAdABAgAD0AEC5A8C0AEDCgbQAQHkDwPQAQHkDwLQAQsAA9ABAwAECgPQAQQABdABDAAB0AEEAAIKAeQPHgABCgHQARkAAdABAagNBAAB0AEB5A8B0AEUAAXQAQYAAtABEgAF0AEBCgLQAQMABdABDwAK0AECAAPQAQHkDwPQAQ4AA9ABAeQPBtABAagNBdABAeQPEQAH0AEB5A8C0AEbAATQAR0AAtABHgAD0AEbAATQAQHkDwGoDQHQARUAAagNAeQPAdABAQoC0AEB5A8E0AEB5A8TAALQAQHkDwLQAQHkDwfQARQAC9ABGQAH0AE6AAGoDR0AB9ABGQAH0AEaAAPQATsACQoYAAcKGQAHChkABwoXAAO+BwYKAdsBFwAB3QEHCgHbARAAB9ABAd0BBgoG0AEBqA0KAAfQAQHkDwHdAQYKCtABAeQPCQAF0AEB3QEGCgLQAQHkDwTQAQHkDwTQAQoAA9ABAgAFCgPQAQMAAdABAgAD0AEMAAHQAQIABAoB5A8cAAMKAdABGAAE0AECCgPQAQHkDxQABdABAQACCgIAAagNA9ABEAAH0AECCgHQAQIAAtABAQAD0AENAATQAQHkDwbQAQIAAeQPB9ABDAAL0AEBAAPQAQHkDwPQARAABdABAeQPBNABGwABCgPQARwAAgoC0AEcAAIKAtABGAAE0AEDCgPQAQGoDRQAAdABAuQPAdABAwoB0AEB5A8D0AEB5A8RAAPQAQHkDwLQAQEAAQoB0AEB5A8F0AESAAPQAQHkDwLQAQEKBtABFwAC0AEBCgTQAQHkDxkAAdABAgoD0AEaAAHQAQIKAdABGQAD0AEBAAIKA9ABGAAC0AEDCgIAAdABGgAD0AE7AAkKGAAHCgGnDRgABwoZAAcKFwACvgcGCgHQARkABgoB0AESAAXQAQEAAd0BBAoF0AEBqA0E0AEJAAjQAQHdAQQKDdABBgAC0AEBAALQAQHkDwLQAQHdAQYKCdABAeQPAtABCgAB5A8C0AECAAUKAdABBAAC0AECAAPQAQwAAdABAgAFChsAAagNAwoB0AEXAAXQAQQKAagNAdABEwABqA0D0AEDAAIKBtABEAAF0AEB5A8C0AECCgIAAeQPBNABAagNDAAK0AEBCgGoDQIACNABCwAB0AEB5A8H0AEBCgHQAQIAA9ABAeQPAdABAeQPAtABDwAF0AEBCgXQARYABNABAgoC0AEbAAHQAQIKAtABGQAC0AEDCgPQARgAA9ABAgoCAAHQAQHkDxQABtABAgoG0AERAAfQAQEKBdABAeQPAdABEgAG0AEBCgbQARQABdABAQoF0AEZAAHQAQIKBNABGAAC0AEDCgLQARcAAdABAagNAdABAQACCgIAAQoB0AEWAATQAQEKAdABAgAD0AEXAAHQAQHkDwEKAdABOwAJChgABwoZAAcKGQAGChgAAr4HBQoB0AEaAAUKAtABEgABqA0D0AECAAHdAQEKAdABAwoE0AEB5A8E0AEJAAXQAQHkDwLQAQHdAQUKCNABAeQPA9ABBgAE0AEB5A8D0AEB3QEFCgzQAQsAA9ABAgABCgHQAQHkDwPQAQMAA9ABAgAD0AEMAAHQAQIAA9ABAQocAAHQAQIKGQAD0AEECgTQARMAAtABAeQPAtABAgACCgbQAQ8AAagNA9ABAeQPBNABAgoB0AEB5A8G0AEOAAjQAQIKAgAI0AELAAXQAQHkDwPQAQIKAgABqA0B5A8F0AEB5A8PAAXQAQIKAgAC0AEXAAHkDwLQAQIKAdABAQAB0AEaAAHQAQIKAdABGwAC0AEDCgHQARkAAdABAuQPAgoE0AEUAALQAQHkDwPQAQIKB9ABEAAH0AECCgHkDwbQAREAAdABAeQPBNABAgoD0AEB5A8C0AETAATQAQUKAtABGQAECgGoDQHQARkAAeQPAwoCAAHQARcAA9ABAQACCgIAAtABFgAE0AECCgIAA9ABFwAC0AECCjsACAoYAAG+BwcKGQAGChoABgoZAAK+BwMKHQACCgIAAtABAeQPEQAE0AEEAALQAQIKCdABCQAI0AEB5A8D0AEBCgfQAQHkDwHQAQHkDwLQAQcACNABAQAD0AEBCg3QAQcAAdABAwAD0AEBAAEKAdABAgoDAALQAQYAAdABAeQPDwAB0AEBAAIKHgACChoAAeQPAdABAagNAdABAgoB5A8D0AEUAAXQAQHkDwIKAdABAuQPAtABEQAJ0AEBCgfQAQ4ACtABAQoH0AEB5A8B0AEMAATQAQHkDwXQAQEKAgAF0AEB5A8RAAXQAQIKAgAC0AEXAALQAQEAAgoCAAHQARsAAgodAAHQAQIKHAAC0AECCgHQAQGoDQHQARYAAagNA9ABBAoG0AEQAAXQAQHkDwHQAQIKB9ABEgAF0AECCgXQARUAA9ABBQoB0AEaAAMKAgAB0AEbAAIKGgAD0AEBAAIKAgAB0AEBqA0WAAPQAQQKAeQPAtABGgAD0AE5AAkKGAABvgcGCgGoDRkAAagNBAobAAHcAQMKAr4HGQAC3AEDCh4AAdABGAAB5A8D0AECAAXQAQHkDwbQAQsABdABAeQPEdABCQAL0AEBAAvQAQHkDwkAAdABBQAD0AEEAAPQAQYAAtABDgAB0AE+AAnQARYAAdABAeQPBtABAQAD0AESAALQAQHkDwbQAQHkDwLQAQHkDwEAAdABEAAB0AEB5A8O0AEB5A8B0AEOAArQAQGoDQfQAREABNABBQAB0AEbAAHcAR8AAtwBHgAC3AEeAALcAQLQAQEAAdABFAAC0AEBAAGoDQHQAQEAAtwBAdABAQoC0AEB5A8B0AESAAbQAQLcAQbQARMABdABAtwBAeQPA9ABFgAC0AEBAAEKAtwBAgAB5A8aAAHQAQLcAR4AAtwBGwABqA0B0AEBqA0C0AECAAHQARgAB9ABHQAB0AE6AAcKGgAEvgc+AAS+Bx4AAacNOAAB0AEBqA0B5A8D0AEB5A8G0AEBAAGoDQHQAQ0AFNABDAAJ0AEB5A8CAAvQAQkAAdABBQAD0AEMAALQAU8ABNABAagNA9ABFgAI0AEBAALQARMACNABAuQPAdABAQoB5A8C0AERAAHQAQHkDw/QAQ4AAdABAeQPCtABAgAC0AEB5A8UAAHkDwHQAQQAAdABfAAB5A8CAATQARQAAdABAwAB0AEB5A8C0AEBAATQARIACtABAQoC0AEVAArQARkAAeQPXQAC0AEB5A8B0AEBqA0C0AEbAAXQAVkAAdwBHwAB3AEDvgc+AAS+B1gACdABAagNAdABEgAD0AEBCgbQAQHkDwPQAQEKAuQPAtABCwAF0AEB5A8E0AEBAATQAQEKAtABAuQPA9ABCgAC0AEHAAHQAQcABdABUgAD0AEB5A8B0AEYAAHkDwHQAQHkDwfQARYAAQoK0AETAALQAQEKCNABAQoC0AEQAArQAQHkDwHQAQEABNABEQAD0AEKAAHQAXkAAagNAtABGAAB0AECAAjQARQADNABFgAC0AEB5A8G0AF6AAHkDwLQAR0AA9ABlwIAAQoE0AEBqA0E0AEUAALQAQEKAdABAeQPBdABAeQPAtABAuQPAQoC0AEMABHQAQEAA9ABAeQPCwAD0AEFAAXQAQQABNABcgAH0AEBChYAB9ABAeQPAtABFQABCgLQAQHkDwfQAQEKAdABEQAC0AEBCgrQAQEKAtABEgAC0AEDAAHkDwLQAQMAAtABeQAC0AEcAAHQAQHkDwTQAQHkDxYACtAB1wMACNABFAAO0AEBCgHQAQ4AAtABAQoE0AEB5A8J0AEBCgPQAQoABdABAwAG0AEDAAHQAQHkDwPQAQsAAdABCAAB0AEB5A8HAALQAVQAAeQPAtABAagNGgAI0AEVAAIKDNABEQAD0AEB5A8K0AEBCgHQARMAAdABCAAC0AGXAQAC0AECAAHQARwAA9AB2wMAB9ABFgAB0AECAAPQAQHkDwjQAQ8AAdABAQoO0AECCgHQAQsAAtABAQoC0AECAALQAQHkDwTQAQIAAdABAuQPA9ABCwAB0AEB5A8GAAPQAQYAAdABAeQPAdABcwABqA0B5A8E0AEaAAfQARUABdABAeQPBdABAeQPAtABtwEAAdABIAAB0AHdAwAD0AEB5A8B0AEBqA0ZAAHkDwrQAQGoDRAAC9ABAQAD0AEB5A8OAAHQAQEKCtABAwAF0AEB5A8MAAHQAQHkDwUAAtABAeQPBQAD0AF2AATQARsABdABGwAF0AG7BQAE0AEaAAfQAQHkDwLQARMADdABAeQPAdABDwAM0AECAAXQAbQBAAPQAQHkDx0ABNABuwUABdABGAAL0AEUAAzQARQAAdABAeQPBNABvwEAAdAB3gUAAagNAeQPAtABGwAB0AEB5A8F0AEZAAPQAQHkDwPQARkAAeQPAdABoAcAAdABHgAB0AEB5A8C0AEcAAXQAdEtAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("y1AAA9ABvAcAAtABAagNPAABqA0F0AEbAAHkDwLQAZwHAAPQAQHkDx4AAtABGwAG0AEbAAHQAQHkDwHQAQEKAdABHAAD0AH7BgAD0AECCh0AAdABAgoB0AEaAAHkDwLQAQIKAtABGgAB0AEDCgLQARoAAtABAgoB0AEcAAPQAR4AAdABHwAB0AGcBgAB0AEB5A8B0AECCgHQAQGoDRsAAdABAgoB0AEaAAPQAQIKA9ABGQAC0AEDCgHQARoAAdABAwoB0AEcAAHQAQEKAdABHQAB0AEB5A8B0AEdAALQAZwGAAfQARwAAdABHAAC0AEB5A8F0AEZAALQAQEKAdABAeQPAtABGgAB0AEB5A8BCgHQAR0AAtAB2wYAB9ABOgAC0AEB5A8C0AEdAAHQAQHkDwLQAR0AAdAB/QYAA9ABAeQP8ncA")
          }]),
          treeSpectralLarge1: vV("treeSpectralLarge1", {
            x: 37,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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AuAMAv8MAwAD/wwTAAH/DAEAA+AMBQAC4AwB/wwTAAH/DAEAA+AMBAAF/wwHAAL/DAkAAv8MAuAMAf8MAQAB/wwCAAH/DAHgDAEAAeAMCAAD/wwDAAHgDAQAAf8MAgAB4AwFAAT/DAgABP8MAQAD4AwDAAH/DAEAAf8MAQAB/wwEAAHdDALgDAH/DAcABv8MA+AMAwAB/wwBAAHgDAH/DAEAAeAMBwAB/wwFAALgDAP/DAMAAuAMCAAB/wwLAAH/DAEAAf8MAuAMBQAB/wwXAAHgDAL/DBsAAf8MAgAB/wwB4AwB/wwGAATgDAQAAf8MDgAB4AwBAAH/DAYABOAMBAAB/wwSAAPgDAMABv8MAQAB/wwNAAH/DAHgDAIAA+AMAf8MAgAH/wwBAAH/DMcDAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAC/wwB4AwB/wwUAALgDAH/DAUAAf8MAuAMAv8MEgAE4AwFAAb/DBEAA+AMAQAB/wwFAAHgDAb/DAMAAv8MCAAB/wwD4AwD/wwDAAHgDAMAAf8MAwAC4AwCAAP/DAMAAuAMAgAD4AwBAAHgDAH/DAHgDAQAAf8MBgAC/wwC4AwD/wwB4AwCAATgDAEAAf8MAwAB/wwLAAP/DAEAAuAMBQAD4AwCAAH/DAMAAf8MDgAB4AwD/wwFAAHgDBcAAf8MAeAMAf8MBgAB4AwUAAH/DAHgDAH/DAcAA+AMDAAB/wwIAAHgDAQAAeAMAf8MAQAB3QwD4AwCAAH/DAgAAf8MAwAB/wwIAAPgDAIAAd0MA/8MAQAB/wwIAAH/DAMAAf8MAwAB/wwB4AwB/wwCAALgDAL/DAEABv8MiQUAAuAMFAAC4AwGAAL/DAPgDAEAAf8MDwAD4AwIAAT/DALgDA4AB+AMBAAB/wwBAAL/DAEAAv8MAuAMAf8MAQAC4AwBAAHgDAMABuAMAv8MAQAB/wwBAAH/DAQAAf8MAeAMAwAC4AwBAAbgDAEABuAMAQAB/wwOAAL/DAEAA+AMAQAH4AwDAAH/DBEAAf8MAuAMAf8MBQAB4AwFAAP/DAEAAf8MDQAB/wwGAAPgDAQAA/8MAQAB/wwMAAL/DAUABOAMBAAD/wwBAAH/DAwAAf8MAwAB/wwD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/wwCAAL/DAHgDAH/DAkAAv8MAgAB/wwDAAL/DAEAAf8MAuAMAQAB/wwBAAHgDAEAAeAMAf8MAeAMAf8MCQAD/wwFAAHgDAEAAv8MAQAC4AwB/wwB4AwB/wwCAAHgDAL/DAwAAv8MBAAB/wwB4AwD/wwBAAL/DAEAAf8MAQAD/wwJAAL/DAHdDAYAAf8MAQAB3QwBAALgDAL/DAEAA/8MVgAH4AwaAAXgDPgDAAHgDB8AAuAMIAAB4AwyAAH/DAEAAf8MHwAB4AwdAAH/DAEAAv8MAQAB/wwbAAP/DAHgDAoAAuAMEAAB4AwBAAH/DAgAAv8MBOAMBQAB/wwUAAH/DAEAAf8MBuAMAf8MAgAB/wwSAAn/DAHgDAEAA+AMEgAB/wwBAAL/DAHgDAEAAf8MAeAMAQAC/wwB3QwUAAH/DAMAAd0MAf8MAd0MAf8MAQAB3QwB/wxYAAXgDJAEAAH/DB8AAf8MEgAB/wwMAAH/DBIAAf8MDAAB/wwKAAH/DAcAAf8MCwAB/wwB4AwKAAH/DAcAAf8MCwAB4AwB/wwBAAH/DAgAAf8MBwAB/wwLAAL/DAoAAf8MBwAB/wwOAAH/DAgAAf8MAeAMBgAB/wwNAAH/DAcAAf8MAQAG4AwB/wwB4AwB/wwYAAH/DAfgDBcAAeAMAv8MA+AMAv8MAQAC/wwVAAHgDAH/DAEAA/8MAQAD/wwYAAL/DAHdDAH/DAHgDJkGAAH/DBMAAf8MAQAB4AwJAAH/DBMAAeAMCwAB/wwfAAL/DAMAA+AMAf8MFAAC4AwBAAP/DAbgDAH/DBMAAv8MAQAC4AwD/wwD4AwC/wwUAAv/DBkAA/8MAd0MAf8MAeAMAf8M2gUAAf8MHwAB/wwCAAH/DBMAAf8MCAAB/wwCAAH/DAIAAf8MEAAB/wwIAAH/DAIAAf8MAgAB/wwQAAH/DAcAAf8MAeAMAgAB/wwCAAH/DBAAAf8MAQAD/wwHAAH/DAEAAv8MDwAB/wwC4AwD/wwB4AwBAAH/DAEAAf8MAQAD4AwBAAH/DA8ABv8MAuAMAgAB/wwB4AwB/wwC4AwC/wwRAAH/DAEAAv8MAeAMAf8MAeAMBP8MAeAMAQAB4AwB/wwRAAHdDAL/DAHdDAIAAd0MAf8MAt0MAQAD/wyvBgAB/wwfAAH/DAMAA/8MAwAB/wwVAAH/DAIABf8MAgAB/wwEAAH/DBAAAf8MAQAB4AwF/wwB4AwBAAH/DAIAAf8MAgAB/wwQAAf/DALgDAH/DAHgDAX/DBEAAf8MAQAD/wwC4AwD/wwCAAHdDAH/DAHdDBIABf8MAgAB3QzZBQAB/wwfAAH/DB8AAf8MCwAB/wwTAAH/DAsAAf8MEgAB4AwD/wwJAAH/DBEABv8MCAAB4AwQAAH/DAHgDAX/DALgDAQAAv8MAeAMEAAH/wwF4AwBAAHgDAH/DBEAAd0MBv8MA+AMAf8MBAAB/wwRAAHdDAH/DALdDAL/DAHdDAL/DEgA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("w18AAf8M3wcAAf8MPAAB/wzBBgAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MHQAB4AwBAAH/DL0HAAH/DAHgDAEAAf8MHQAD4AwB/wwbAAX/DPsFAAH/DB8AAf8MYAAB/ww/AAPgDAH/DBsABeAMHAAD4AycBwAB/wwfAALgDAP/DBsABOAMHAAC4AwD/wybBgAB/wwfAAH/DCIAAf8MHAAB/wwB4AwBAAH/DBwAAf8MAQAC/wwcAAHgDAIAAf8MHAAD4AwB/wwcAAHgDAP/DJwFAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MXwAB/wwfAAHgDAH/DB4AAf8MHwAC/wwBAAHgDBwABP8MnAYAAf8MfwAB/wwfAAH/DB8AAf8MAeAMAf8MHQAB/wygDwAB/wwfAAH/DB8AAf8MHwAB/wzeDgAB/ww/AAH/DL8IAAH/DB8AAf8M3wYAAf8MHwAB/wwfAAHgDP8wAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("EgAB/wwfAAH/DN8HAALgDAH/DB0AAeAMAd0M3QcAAf8MA+AMAf8MHAAB/wwB4AwC3QwcAAH/DAHgDB4AAd0MngcAAf8MA+AMAf8MGwAC/wwB4AwB/wwcAAH/DALgDAL/DBsAAf8MnQcAAeAMAQAE4AwB/wwEAAL/DBQAAv8MAuAMBQAB4AwXAAH/DAHgDAL/DAUAAd0MAf8MFQAD/wwB3QwdAAH/DP0GAAH/DAPgDAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAC/wwB4AwBAAHgDAQAAd0MAuAMEwAB4AwD/wwB4AwB/wwFAAL/DBUAAf8MAQAB3QwB/wwGAAH/DBQAAf8MAd0M/QYAAf8MAeAMA/8MAwAD/wwC4AwB/wwB4AwQAAH/DAEABP8MBAAC/wwB4AwC/wwRAAb/DAQABP8MFAAC/wwJAAHdDBQAAv8M/QYAAeAMBf8MBAAC4AwTAAf/DAMAAuAMA/8MEQAH/wwDAAHdDAIAAf8MEwAE/wwB3QwcAAHdDPwGAAH/DALgDAX/DAEAAeAMBP8MAQAC4AwPAAL/DAHgDAX/DAIAAv8MAt0MAf8MEQAB/wwB4AwG/wwKAAH/DA8AAf8MAd0MA/8MCwAB/wwPAAH/DA8AAf8M5gYAAv8MBgAC4AwF/wwB4AwBAAX/DAsAAf8MBQAB/wwBAAHgDAX/DAMAAv8MAd0MDAAB3QwFAAHgDAEABv8MEAAB/wwIAAH/DAHdDAEAAf8MAd0MAf8MGgAB/wz2BgAB/wwHAAH/DALgDAEAA/8MAQAH/wwDAAH/DAQAAv8MAuAMBAAC/wwB4AwB/wwBAAP/DAEAAv8MAd0MA/8MBAAB/wwEAAH/DAHgDAHdDAL/DAIAA/8MAuAMAQAD/wwLAAH/DAQAAv8MBwAB4AwB/wwB3QwBAAH/DAwAAv8MHwAB/wzmBgAB4AwBAAL/DAMAAf8MAuAMAf8MAeAMAgAI/wwJAAL/DALgDAQABP8MAwAH/wwKAAP/DAQAAv8MAeAMAf8MBQAB3QwC/wwEAAL/DALgDAYAAf8MBQAC4AwD/wwMAAPgDA0AAd0MEAAC3QzpBgAC4AwB/wwBAAH/DAEAAeAMAf8MAwAH/wwBAAH/DAsAAeAMAf8MAQAB/wwBAAL/DAHgDAH/DAMABf8MAwAB/wwB4AwB/wwIAAP/DAMAAf8MAd0MAv8MBAAD/wwB3QwB/wwCAALgDAEAAf8MBwAC/wwDAAH/DAIAAt0MCAAB/wwDAAH/DAEAAf8MHwAB/wziBgAB/wwDAAH/DAEAAf8MAQAD/wwDAAH/DAHdDAH/DAEABv8MAQAB4AwGAAL/DAIAAv8MAQAE/wwB4AwB/wwB4AwB/wwDAAb/DAIAAuAMBAAC/wwCAAf/DAHdDAP/DAQACP8MBgAB/wwBAAL/DAkAAf8MCAAB3QwC/wwIAAP/DBMAAv8MCQAB/wwB3QwUAAH/DAHdDMwGAAX/DAEAAv8MAeAMAwAE/wwE4AwBAAH/DAMAAf8MAeAMAf8MBOAMBf8MAuAMAf8MBAAE/wwCAALgDAQAAf8MAQAB/wwC4AwI/wwBAAHdDAH/DAUAAd0MAv8MAQAC4AwB/wwB4AwEAAb/DAIAA/8MCgAD/wwB4AwC/wwGAAX/DBEAAf8MAd0MAeAMAQAC/wwEAAHdDAEAA/8MEwAB3QwIAAL/DBYAAf8MpgYAAf8MAQAE4AwF/wwBAAH/DAEAAf8MBgAF4AwBAAL/DAIAAeAMAf8MBOAMBv8MAQAC4AwGAAH/DAEABeAMBQAE4AwH/wwJAAH/DAEAAf8MAQAE4AwCAAHgDAH/DAPgDAL/DAHdDAH/DAHdDAL/DAoAAf8MAgAC/wwBAAHgDAH/DAMAAv8MAQAB/wwBAAH/DBAAAv8MAQAC/wwB4AwBAAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAF/wwEAAHdDAH/DBUAAv8MAd0MqAYAA+AMBf8MCQAB/wwE4AwBAAH/DAEAAf8MAwAB/wwBAATgDAX/DAkAAeAMBP8MA+AMAf8MAgAC/wwC4AwBAAf/DAkAAd0MBP8MA+AMAgAB/wwCAAH/DAHgDAL/DAHgDAHdDAL/DAHdDAsAAf8MAeAMA/8MA+AMAQAB3QwBAAT/DAHgDAH/DBAAAd0MAQAB/wwBAAP/DAIAAv8MAwAC/wwRAAH/DAHdDAIAAf8MAeAMBAAB/wwC3QwVAAL/DKgGAAH/DAPgDAf/DAcACP8MBgAH/wwBAAP/DAYABv8MAQAC4AwEAAL/DAMABP8MCwAC/wwB3QwB/wwE4AwDAAb/DBIAAf8MBOAMBAAB4AwB/wwBAAHgDAL/DBEAAeAMAf8MAuAMAf8MBAAB/wwB3QwC/wwB3QwSAAL/DAHgDAH/DAcAAd0MFQAC/wwB3QwB/wypBgAB/wwB3QwB/wwBAAX/DAcABP8MAQAB4AwB/wwGAAL/DAUABf8MBgAB/wwB3QwB/wwB4AwCAAHgDAgAAv8MBQAB/wwB3QwB/wwKAAL/DAPgDAYAA/8MEgAC/wwD4AwGAAHgDAH/DBMAAf8MAeAMA/8MBgAC/wwTAAHdDAP/DB4AAv8MqgYAAd0MAgAG/wwIAAHgDAEAAeAMAf8MAeAMAf8MDQAD/wwB3QwB/wwIAAP/DAEAAuAMDgAC/wwLAAL/DAPgDBwAAf8MA+AMHAAD/wweAAHdDAH/DAHdDMwGAAb/DAcAAv8MAgAB/wwQAAL/DAoAAd0MAv8MAQAB/wwB4AwOAAHdDA0AAv8MAuAMHQAC/wwB4AwcAAH/DAHdDAH/DAHgDB4AAv8MzgYAAv8MAd0MCQAB/wwBAAH/DCIAAeAMHgAC4AwdAAL/DAHgDBwAAf8MAQAC/wweAAHdDP8GAAL/DB8AAeAMHQAC/wwB4AwfAAHgDP4GAAH/DB8AAf8MHwAB4AwgAAH/DB4AAv8M3wcAAf8MgD8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("oDgAAf8MHwAB/wwfAAHgDB8AAv8M3gcAAeAMAf8MHgAB4AwB3QyfBwAB/wwfAAH/DB4AAeAMAf8MHgAB/wwB4Ay+BwAB4AwfAAHgDAH/DJ4PAAH/DP8HAAH/DAIAAv8MHAAB/wwB3QzdBwAC/wwBAAH/DAHgDBwAAd0MAeAMAd0M3AcAA+AMAv8MGwAB3QwB/wwB3QwC/wzbBwAE/wwB4AwbAAHdDAL/DAHgDNwHAAL/DAHgDAH/DBwAAf8MAd0MAf8MAd0MHAAB/wwfAAH/DD8AAf8M3wYAAf8MAeAMAv8MHAAB4AwC/wxdAAH/DP8GAAH/DAIAAf8MHAAD/wwdAAHgDAH/DAHdDB0AAeAMHwAB/wwfAAHdDOAGAAH/DB4AAv8MHgAB4AwB/wwfAAH/DB4AAf8MHwAB/wzgBgAB/wweAAL/DB4AAeAMAv8MHQAC/wwfAAH/DB4AAd0MgAcAAf8MPgAC/wweAAH/DL8HAAH/DB8AAf8MAQAB/wweAAH/DP4GAAH/DB8AAf8MHwAB/wwgAAH/DB4AAf8M/z4A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("zgQAAf8MHwAB/wwfAAH/DB8AAeAMHQAC/wwB4AwFAAH/DBcAAv8MAQAB/wwEAAH/DBcAA/8MAgAE/wwYAALgDAEABf8MGQAH/wwBAALgDAEAAf8MAgAC/wwRAAb/DALgDAEAAf8MAeAMFgAB3QwE/wwBAAHgDB0AAd0MAeAMAf8MAeAM9QUAA/8MHQAC4AwB/wwdAAT/DBsAAf8MAeAMAQAB4AwcAAT/DAEAA/8MGQAB4AwB3QwB/wwBAAP/DBwABP8MAgAB4AwdAAH/DAEAAf8MAeAMHgAB3QwB/wzYBAAB/wwcAAH/DAIAAf8MHAAB/wwCAAH/DBwAAf8MAgAB/wwcAAH/DAIAAf8MHAAC/wwB4AwB/wwcAAH/DALgDAL/DBsABv8MGgAB/wwB4AwG/wwXAAHgDAH/DAHdDAEAAf8MAwAC4AwXAAH/DAYAAv8MAeAMHAAD/wwB3QwB4AwfAAH/DB8AAf8MlwYAAuAMHAAC/wwD4AwBAAH/DBoABP8MAuAMGgAB3QwC/wwBAAL/DALgDAH/DBgAAf8MAeAMAwAC4AwB/wwdAAHdDAH/DAHdDAHgDB8AAf8MvgUAAf8MFgAB/wwIAAH/DBYAAf8MCAAB/wwWAAH/DAgAAf8MFgAB/wwBAAHgDAL/DAQAAf8MFgAB/wwB4AwB/wwBAAL/DAMAAf8MFwAB/wwC4AwB/wwB4AwC/wwBAAH/DBgAAf8MAeAMAf8MAQAB4AwD/wwZAAHdDAIAAd0MAf8MAd0MqtkBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          treeSpectralLarge2: vV("treeSpectralLarge2", {
            x: 34,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("4EcAAf8MwR4AAf8MHwAB/wwfAAH/DB8AAf8MHQAB/wwBAAH/DP0GAAL/DB4AAv8MHgAC/wweAALgDAH/DB0AAf8MHwAB4AwBAAH/DB0AAf8MAQAB/wyABgAB/wwcAAL/DAEAAf8MHAAE/wwcAAT/DBwABP8MHAAC/wwB4AwB/wwcAAPgDAH/DBwAA/8MHQAC/wyeBgAC/wweAAP/DB0AA/8MHQAD/wwdAAL/DB4AAeAMAv8MHQAB/wwCAAH/DBwAAf8MwAUAAf8MHwAB/wwfAAH/DB4AAv8MHgAD/wwdAAP/DB0AA/8MHQAC/wweAAP/DB0AAv8MHgAD/wz/BQAB/wwfAAL/DBwABP8MHAAC/wwB3QwdAAL/DB4AAv8MHgAB/wwfAAHgDAH/DB4AAv8MoAYAAuAMHAAD/wwdAAL/DB4AAf8MAd0MHgAB/wwfAAH/DB8AAf8MHwAB/wyBBgAB/wwfAAL/DBwAA+AMHgAB4AweAAH/DL8HAAH/DAEAAf8MHQAC/wy+WQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("BwAE/wwC4AwBAAH/DBsAAf8MAQAC/wwdAAL/DB8AAf8MAeAMAQAB/wwcAAHdDAH/DAHdDPkGAAP/DAPgDAL/DBoAA+AMAQAC/wwbAAP/DAHgDAH/DBsAAf8MAQAC/wwdAAHdDPsGAAH/DAEAAf8MBOAMHAAB/wwC4AwB/wwcAAHgDAP/DBwABP8MHAAB3QwBAAH/DAHdDPkGAAL/DAEAAf8MA+AMGwAB/wwBAAH/DAHgDB0AAuAMAv8MHAAB3QwB4AwC/wwdAAHdDPsGAAH/DAMAA+AMGwAB/wwCAAHgDAH/DBsAAeAMA/8MHAAF/wwcAAH/DP4GAAH/DAIAAuAMHAAD/wwdAAL/DAEAAf8MHAAC/wwB3QydBwAB/wwBAALgDAMAAv8MAd0MAwAB/wwRAAP/DB4AAf8MAQAC/wwB3Qy6BwAD/wwB4AwC/wwCAAH/DALdDAMAA/8MDwAF/wwBAAH/DAcAA/8MEAAB/wwBAAH/DAHdDAH/DBsAAd0MAf8MnQcABf8MAQAB/wwBAAHdDAn/DA4AAd0MBf8MBgAG/wwPAAP/DAEAAf8MCAAC3QwC/wwBAAH/DA8AAf8MAQAB/wwMAAH/DB8AAf8MAQAB4AweAAH/DAEAAf8MygYAB/8MAQAK/wwBAAH/DAwABv8MAgAK/wwBAAH/DA0ABP8MAQAB/wwBAAP/DAEAA/8MAd0MAf8MAgAD/wwMAAHdDAL/DAMAAd0MAv8MBgAB4AwC/wwC4AwbAAX/DBwAA/8MAd0MHgAB/wyrBgAG/wwBAAv/DA4ABf8MAQAM/wwPAAT/DAEABv8MAd0MBv8MA+AMDAAB/wwCAAHdDAb/DAYABOAMEgAC/wwB3QwGAAH/DAEAAf8MAuAMGwAF/wwcAAL/DAHdDAH/DKkGAAb/DAHgDAz/DA4AEv8MAQAB4AwNAAHdDAr/DAHdDAX/DAPgDA0AAf8MAQAI/wwCAAHdDAL/DAIAA+AMEAAC/wwB3QwC/wwGAAH/DAEAAf8MAeAMAf8MHAAB4AwB/wwB4AwB/wwcAAP/DKoGAAHdDAT/DAHgDAEADP8MAwAB/wwLABH/DAEAAeAMAQAB/wwNAAHdDAj/DAEABf8MA+AMAf8MDwAH/wwCAAHdDAP/DAEAAeAMAv8MEAAC3QwB/wwB3QwB/wwHAAH/DB0AAf8MAgAB/wwBAAH/DB0AAd0MAf8MqgYAA/8MBAAD/wwEAAX/DBMABv8MAgAG/wwB4AwRAAb/DAIABv8MAuAMEAAG/wwDAAX/DAHgDAEAAf8MEAAD/wwGAAb/DBsAAf8MAt0MAv8M2QYAB/8MEQAD/wwFAAX/DAHgDBIAA/8MBQAF/wwB4AwB/wwRAAL/DAHdDAUABf8MAeAMAf8MGgAD/wwfAAH/DAEAAf8M0gYAAf8MCAAH/wwXAAf/DAHdDBgAB/8MGgAB3QwF/wwbAAT/DAHgDB0AAd0M0AYAA/8MAuAMBwAD4AwF/wwMAAT/DAkABv8MDQAD/wwIAAH/DAEABf8MGwAF/wwcAALdDAL/DO0GAAX/DAHdDAYAAuAMBv8MAd0MCwAF/wwIAAf/DAwABf8MCAAF/wwPAAHdDAL/DAkABf8MHAAC/wwB3QzvBgAF/wwHAAHgDAEABv8MAd0MCwAF/wwIAAX/DAHdDA0ABf8MCAAF/wwOAAHdDAP/DAkABf8MHAAD/wzuBgAB3QwF/wwJAAf/DAsABv8MBwAF/wwOAAb/DAcABf8MDwAC3QwD/wwHAAHdDAT/DBwAAd0MAv8M7AYAA/8MAQAF/wwCAAHgDAIAAf8MAQAG/wwOAAb/DAQAAf8MAQAF/wwPAAb/DAcAA/8MAd0MEAAF/wwHAAP/DBIAAv8MAd0M9wYAA/8MAeAMAf8MAQAD/wwBAALgDAMAB/8MDwAF/wwFAAH/DAEABP8MEAAF/wwEAAH/DAIAAf8MAQAB/wwB3QwQAAX/DAcAAd0MAv8MEgAE/wz2BgAB3QwB/wwB3QwG/wwD4AwDAAH/DAHgDAEAA/8MEAAF/wwB4AwFAAT/DAHdDBAABv8MAwAC/wwCAAL/DBEABv8MBwAC/wwSAAX/DAcAAv8MEwAB3QwC/wzWBgAD/wwB3QwC/wwDAAPgDAQAAf8MBOAMEQAE/wwB4AwB/wwCAAH/DAEAAf8MAQAB4AwD/wwQAAX/DAQAAt0MAv8MEwAG/wwFAAH/DAEAAv8MEQAF/wwHAAH/DBQAAf8MAd0MAf8MAd0M1QYAAv8MBQAB/wwBAALgDAMAAf8MAQAD/wwD4AwRAAT/DAUAAeAMAgAB/wwB4AwB/wwQAAX/DAUABv8MEAAF/wwGAAH/DAEAA/8MEAAF/wwB4AwFAAL/DAHdDAH/DBEAAd0MA/8M1gYAAf8MBwAD4AwB/wwFAAHgDAL/DAHgDBMAAuAMAf8MAeAMBQAC/wwD4AwB/wwQAAT/DAEAAf8MBAAB/wwBAAH/DAHgDAL/DBAAA/8MAgAB/wwFAAH/DAEAAf8MAeAMAd0MEAAF/wwB3QwDAAH/DAHgDAH/DAHdDAL/DBEAAv8MAd0M2wYAAf8MAgAD4AwIAAH/DAHgDAEAAf8MDgAB/wwBAATgDAH/DAUAAf8MAgAB4AwC/wwOAAH/DAEAAf8MAuAMAf8MAQAB/wwFAAHgDAEAAeAMAv8MDgAB/wwBAAX/DAUAAv8MAQAC/wwB3QwOAALgDAb/DAQAAt0MAQAB3QwB/wwPAAHgDAL/DAHdDAP/DNcGAAH/DAQAAuAMCQAB/wwPAAH/DAMAA+AMCQAD/wwB4AwMAAH/DAIABOAMCQAD/wwB3QwOAAH/DAIAAv8MAeAMAf8MBQAF/wwOAAH/DAHdDAP/DAHdDAP/DAcAAv8MEQAB/wwB3QwBAAH/DAHdDN4GAAH/DBsAA+AMAQAB/wwJAAH/DA4AAf8MBeAMAv8MCQAB4AwOAAHdDAH/DAPgDAIAAv8MCAAB/wwPAAP/DAEAAeAMAQAB/wwbAAHdDAL/DNkGAAH/DB8AAf8MAQAD4AwbAAH/DAXgDBoAAf8MAd0MA+AMAf8MHAAC/wwBAAH/DB4AA/8M3gYAAf8MHAAB/wwCAAH/DBsABOAMAf8MGwAB/wwB3QwB4AwBAAH/DB0AAd0M/gYAAf8MHwAB/wwfAAH/DB8AAf8MkwcA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gEAAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DL8HAAHgDB8AAeAMHwAB4AwfAAH/DP8GAAHgDB8AAuAMHgAB4AwfAAL/DB4AAf8M4AYAAf8MHwAB/wweAAHgDAH/DB4AAv8MHgAB/wwB3QzeBwAB/wwfAAH/DN8WAAL/DP4HAAHdDAH/DP4HAAH/DP93AA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("7wMAAf8MHwAB/wwfAAH/DB8AAf8MHAAB4AwCAAH/DBsAAf8MAuAMAv8MHAAB/wwC4AwcAAT/DAHgDBsABP8MHQAD3QydBgAB/wwfAAH/DB8AAf8MHwAB/wwgAAH/DEAAAf8MHQAD/wzx8QEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }])
        };

        function kV(VV, eV, xV) {
          const JV = new wV.c;
          for (const UV of xV) {
            const VV = JV.get(UV.chunkX, UV.chunkY, UV.chunkZ);
            if (!(0, YV.J)(VV)) throw new Error(`Duplicate chunk at ${UV.chunkX}, ${UV.chunkY}, ${UV.chunkZ}`);
            JV.set(UV.chunkX, UV.chunkY, UV.chunkZ, UV.rle)
          }
          return new nV.b(VV, {
            x: 0,
            y: 0,
            z: 0
          }, eV, JV)
        }
        const bV = {
          rockJungleLarge1: kV("rockJungleLarge1", {
            x: 30,
            y: 19,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          rockJungleLarge2: kV("rockJungleLarge2", {
            x: 29,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("zwEAAWcDAAFnGwAFZxwAA2f3BQABow8HAgGjDxgAB6MPdAABZwMAAWcbAAVnBgABZxUAA2cFAAVnFwABZwMABWcXAAhnGQADZ7kFAAGjDwMCBhwCAgGjDxQAAaMPCQIBow8WAAKjDwYCAaMPGQAGow8aAAGWAQEAAZYBAgABDhYAAWcIAAEOFAAFZwUAAWcBDgFnEwAFZwQABWcTAANnAwABZwEABWcXAAhnGAAFZxwAA2eXBQABow8CAgscAgIBow8QAAGjDwMCCBwCAgGjDxIAAaMPBAIEHAMCAaMPEwABDgKjDwgCAaMPFAABDgIAAqMPBAICow8BlgETAAFnAQ4BZwMABKMPFQAFZwIAAQ4DAAFnFAAFZwIAAQ4BAAZnAwABZw4AA2cCAAFnAQ4LZxIACGcCAANnEwAFZxwAA2eWBQABow8BAg4cAwIOAAGjDwICCxwCAgKjDw8AAwIKHAECAaMPEQACow8DAgYcAgIBow8NAAFnAwABZwIAAaMPCgIOAAVnAQABZwEAAqMPBgICow8PAAhnAQADow8BZwKjDwEAAWcSAAVnBAAFZwIAAWcQAANnAwABZwIAA2cBAAVnEgAFZwQABWcSAAVnBQADZxQAA2eVBQACAhEcAgIMAAICEBwBAgGjDwwAAaMPAQIOHAICAaMPDgABow8DAgkcBAINAAFnAgAEAgccAwICow8LAAVnA6MPAWcIAgKjDwEAAQ4LAAlnBwIBow8DAAEODAADZwEAA2cBAAejDwMAAWcBDgFnEwABZwMAAWcEAAVnEgAFZwQABWcMAAFnAwABZwIAA2cGAANnDQAFZxwAA2cGAAFnAwABZxsABWccAANnsQQAAgISHAECAaMPCgABow8BAhEcAgILAAEOAaMPAQIPHAICAaMPCwABDgEAAgINHAICAaMPCwABZwEOAWcBow8CAgscAgIBow8LAAVnAaMPAwIHHAMCAaMPDAAFZwEAAaMPCwIBow8OAANnAwACow8HAgKjDwIAAWcUAAejDwIABWcbAAVnDgABZw0AA2cNAAVnGwAFZwcAAWcUAANnBgAFZxsABWccAANnkAQAAgIUHAECCgACAhIcAQIBow8KAAGjDwECERwCAgwAAaMPAQIPHAICAaMPCwABZwEAAQINHAMCAaMPCgAFZwMCCRwDAgGjDwsABWcEAgccAgICow8NAANnAQADow8JAgGjDwFnAQABZwEAAWcBAAFnDAABDgIAAaMPBwIBow8BAAdnDAABDgMAB6MPAwAFZwwAAWcBDgFnCAABDhMABWcHAAEOEwAFZwYAAWcBDgFnEwADZwYABWcbAAVnHAADZ5AEAAECFRwBAgGjDwgAAaMPAQITHAICCgACAhIcAQIBow8KAAGjDwICDxwCAgGjDwkAAWcCAAGjDwFnDhwDAgoABWcCAgocAwICow8LAANnAQADAgkcAgIBow8RAAKjDwoCAqMPAwABZxAAAaMPCQIDAAVnDwAJow8DAAVnDAABZwQAApYBCQADZwsABWcIAAFnAwABZw4ABWcHAAZnDwADZwYAB2cZAAVnHAADZ48EAAGjDwECFRwCAggAAaMPAQIUHAECAaMPCQABAhMcAQIBow8KAAGjDwECEBwDAgwAAgIPHAICAaMPDAABow8CAgwcAgICow8BDggAAWcDAAFnAaMPAgIKHAMCAgABDggABWcBAAGjDwwCAqMPAQABZwEOAWcIAANnAwABow8KAgGjDwIABWcOAAqjDwMABWcKAAFnAwABZwQAAWcIAANnCwAFZwQAAWcFAAFnEQADZwUAAmcCAAVnGAAIZxkABmesBAACAhYcAQIHAAGjDwECDRwB+gkBvQcGHAECAaMPCAABow8BAgYcASgBLQQcAr0HBRwCAgoAAgIGHAEoBBwCvQcEHAICAaMPCgABow8BAhAcAgIBow8MAAGjDwECDhwCAgGjDwsAAWcCAAICDBwCAgGjDwoABWcBow8OAgGjDwIAAWcIAAVnAQABow8MAgGjDwEABWcHAANnAwAMow8BDgEABWcNAAGWAQQAAe0DAcMNAgABZwHTDQEAAQ4CAANnFAAB0w0DAAHTDQFnAQ4BZxcAAWcB0w0DAAHDDQRnFgABZwHDDQHTDQEAAtMNBGcWAAHtAwXTDQNnGAABZwIAAWcB7QOPBAABAhccAQIHAAGjDwECCBwCvQcDHAH6CQG9BwYcAQIBow8IAAICBxwCvQcCHAHUCwK9BwUcAgIJAAGjDwECDBwCvQcEHAICAaMPCQABDgGjDwECERwBAgGjDwoAAQ4BAAICDxwBAgGjDwoAAWcBDgFnAaMPAgINHAICCgAFZwGjDw8CAWcDAAFnBgAFZwEAAaMPDQIBow8FZwcAA2cCAAGWAQijDwECBKMPAgADZxQAAWcfAAHgDwUAAWcZAAHgDwQABGcXAAHTDQMAAdMNBGcXAAHTDQMAAdMNA2cYAAFnA9MNAWcB7QMbAALtA/EDAAECFxwBAgcAAaMPAQIIHAO9BwIcAvoJBhwBAgGjDwgAAQIHHAHMAQO9BwHUCwHgDwK9BwYcAQIJAAGjDwECCRwBvQcBHAHgDwK9BwUcAQIBow8KAAICChwB4A8GHAICCwABow8CAgkcAeAPBRwCAgGjDwoAAWcBAAGjDwICCBwB4A8EHAICAaMPCQAFZwGjDwkCAeAPBQIBow8KAAVnAQABow8IAgHgDwQCAaMPDAADZwMAB6MPAQIB4A8BAgOjDw8AAWcDAAFnAQABlgEBAAGWAQMAAeAPEwAFZwcAAeAPBQABZw4AA2cGAAHgDwEAAeAPAgAEZxcAAeAPAQAB4A8CAANnGAAB0w0BAAHgDwEAAdMNGwABZwPTDR0AAWcC7QPwAwABAhccAQIHAAGjDwECCBwEvQcD+gkGHAECAaMPCAABAggcB70HBhwBAgkAAaMPAQIJHAW9BwUcAQIBow8GAAFnAwABZwECERwCAgcABWcCAg8cAgIBow8IAANnAQABZwICDRwCAgFnAwABZwUABWcBow8PAgGjDwVnBgADZwIAAaMPDQIBow8CAANnDQAIow8BAgSjDxEAAWcHAAFnAwABZxEABWcFAAHgDxUABWcFAAHgDxYAA2cGAAHTDQMAAcMNGwABww0DAAHTDRwAA9MNAe0DHgABZ/ADAAECFxwBAgcAAaMPAQIKHAK9BwP6CQYcAQIBow8IAAECChwFvQcGHAECCQABow8BAgkcBb0HBRwBAgGjDwgAAWcBAAICERwCAgcABWcCAg8cAgIBow8HAAVnAaMPAgINHAICAaMPAQABZwcAA2cCAAGjDw8CAaMPBWcKAAEOAaMPDQIBow8BAAVnCgABDgEADaMPAwADZwoAAWcBDgFnAZYBBAABZwHDDQMAAdMNEQAFZwUAAdMNAgAB4A8B0w0BZwMAAWcMAAVnAQABZwMAAdMNAgAB4A8B0w0FZw0ABmcDAAHDDQHTDQHgDwLTDQEAA2cQAANnBAAF0w0bAAFnAe0DAQABZwHtA48EAAECFxwBAgcAAaMPAQIVHAECAaMPBwABDgICExwCAggAAQ4Bow8BAgkcAS0JHAECAaMPBwABZwEOAWcBow8BAhEcAQIBow8BDgYABWcCAg8cAgIBAAEOBgAFZwGjDwICDRwCAgGjDwFnAQ4BZwYAA2cCAAGjDw8CAaMPBWcLAAGjDw0CAaMPAQAFZwwADaMPAwADZwsAAWcHAAHtAwIAAe0DAZYBEQAFZwUAAWcGAAFnDgAFZwcAAe0DAgAFZw0ABmcFAALtAwEABWcOAAVnAwABZwIAAu0DAQADZxAAA2eYBAABAhYcAgIHAAGjDwECFRwBAgGjDwgAAgITHAECAaMPCQABow8CAhEcAgIJAAFnAQABow8BAhEcAQIBow8HAAVnAaMPAQIPHAECAaMPCAAFZwEAAgINHAICAgABZwcAA2cCAAGjDw8CAaMPBWcLAAGjDw0CAaMPAQAFZwwADaMPAQ4CAANnCQABZwMAAWcDAAGWAQgAAQ4OAAVnCwABZwEOAWcOAANnAQ4BZwkABWcOAAVnCAAFZw4ABWcJAANnEAADZ5gEAAICFRwCAgcAAaMPAQIUHAICCQABow8BAhMcAQIBow8KAAICERwBAgGjDwcAAWcDAAFnAgIPHAICCAAFZwGjDwICDRwCAgGjDwkAA2cCAAFnAgILHAICAaMPAWcDAAFnBgAFZwGjDw0CAaMPAQAFZwcAA2cCAAGjDwsCAaMPAwADZw4AC6MPGgABlgEDAAGWASIAAWcSAAFnBgABZwMABWcOAAVnBAAJZw4ABWcFAANnAQADZxAAA2eYBAABow8BAhUcAQIJAAICExwBAgGjDwkAAaMPAgIRHAICCwABow8CAg8cAgIBow8MAAGjDwECDxwBAgGjDw4AAaMPAgILHAICAaMPDQABZwIAAwIJHAMCDAAFZwKjDwsCAqMPDAAFZwIAAaMPCQIBow8PAANnBAAJow9AAAFnAwABZw4AAWcDAAFnBgABZwEABWcOAAVnBAAIZxAAA2cFAAVnHAADZ5AEAAECFBwCAgkAAaMPAgIRHAICCwACAhEcAQIBow8LAAKjDwECDxwBAgGjDwwAAQ4BAAECDhwCAg0AAQ4BAAGjDwMCCRwBAgFnAQIBow8BAAFnCgABZwEOAWcBAAQCBxwCAgVnCQAFZwOjDwkCAqMPA2cKAAVnAQABZwEAAaMPBwIBow8QAAZnAgAHow8TAANnCQABDh8AAQ4eAAFnAQ4BZxwABWcbAAVnHAADZ5AEAAGjDwECEhwCAgsAAgIRHAECAaMPCwABow8BAhAcAQIBow8NAAGjDwECDhwCAg8AAgIMHAICAaMPDwABow8EAgccAwIBow8BZw0AAWcCAAGjDwwCBWcJAAVnAQADow8HAgKjDwVnCQAFZwQAB6MPAwADZwsABmcBAAFnAwABZxUABWcBAAVnFgADZwMAA2cjAAFnHQAFZxsABWccAANnkQQAAgIQHAMCCwACow8PHAICAaMPDgAPHAECAaMPDwACAgscAgIBow8BDg8AAwIJHAMCAQABDg4AAWcCow8BAgFnCQICow8BZwEOAWcKAAFnAgAFZwgCAaMPAQAFZwkAB2cGow8BZwKjDwEABmcKAANnAQ4BZwcABWcBAANnDAAFZwMAAWcDAANnEQAFZwEABWcWAANnAgAFZxwAA2cBAAFnAwABZxsABWccAANnsgQAAaMPAQINHAICAaMPAQIOAAECDBwCAgGjDxAAAaMPAQILHAECAaMPEgADAgccAgIBow8TAAGjDwsCFAACZwGjDwICAWcEAgKjDwMAAWcOAAhnBKMPAwAFZwwAB2cBDgQAAWcCAAVnDQADZwMAAQ4CAAVnAQADZwwABWcCAAFnAQ4BZwEABWcQAAVnAQAFZwEAA2cSAANnAgAFZxwAA2f4BAABow8CAgocAgIBow8RAAMCCBwCAgGjDxIAAqMPBAIDHAMCAaMPEwABDgEAAaMPCAIBow8UAAEOAgADow8CAgFnAqMPAQABZxIAAWcBDgFnAQABZwIAAqMPBmcDAAFnDAAIZwMAA2cBAAVnDAAIZwMAAWcBDgFnAgADZwwAAWcBAAZnAwAFZxAABWcDAAFnAgAFZxEAA2cCAAVnAQADZxcABWccAANn+gQAAaMPBAIEHAICAaMPFQABow8IAgGjDxcAA6MPBAIBow8YAAEOAgAEow8ZAAEOBgABZxUAAWcBAAFnAQ4BZwMABWcRAAhnAgAFZxEACGcDAANnEwAGZwMABWcWAAFnAwAGZxYABWcBAANnGAADZ50FAAGjDwYCGgAGow8fAAEOHwABDh4AAWcBDgFnEgABZwMAAmcEAAVnEQAIZwIABWcSAAdnAgAFZxUAA2cDAAVnHAADZ94GAAFnFgABZwMAAWcCAAVnFAAFZwIABWcVAANnBAADZ5wHAAFnAwABZxsABWccAANnrSYA")
          }]),
          rockJungleLarge3: kV("rockJungleLarge3", {
            x: 29,
            y: 22,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          rockJungleLarge4: kV("rockJungleLarge4", {
            x: 29,
            y: 24,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          rockJungleLarge5: kV("rockJungleLarge5", {
            x: 32,
            y: 25,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          rockJungleLarge6: kV("rockJungleLarge6", {
            x: 30,
            y: 28,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          rockSnowLarge1: kV("rockSnowLarge1", {
            x: 36,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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AR0LHBQAAR0KHAEdFAAB3QwBHQkcAdUMFQACHQHVDAccAd0MFQAB3QwDHQYcFwAC3QwBHQYcGQAB3QwFHAEdGgABHQQcAdUMGgACHQIcAdUMAd0MGgAB3QwBHQEcAdUMAR0SABMcBh0GHAEAExwE3QwCHQYcAQATHAQAAt0MBhwBAAEdERwBHQYABhwBAAEdERwBHQYABhwBAAHdDBEcAd0MBgAGHAIAERwHAAYcAgARHAcABhwCABEcBwABHQUcAgABHQ8cAdUMBwABHQUcAgABHQ8cAR0HAAHdDAUcAgAB3QwPHAHdDAgABRwDAA8cCQAFHAMADxwJAAUcAwAPHAkAAR0EHAMAAdUMDRwBHQkAAdUMBBwDAAEdDRwBHQkAAd0MBBwDAAHdDA0cAd0MCgADHAHVDAQADRwLAAIcAh0EAA0cCwACHAEdAd0MBAABHQwcCwABHAEdAd0MBQABHQwcCwACHQYAAd0MDBwLAAEdAd0MBwAMHAsAAd0MCAABHQocAR0UAAEdChwBHRQAAd0MAR0JHAHdDBUAAdUMCRwWAAHdDAEdBxwBHRcAAh0GHAEdFwAB3QwBHQYcAd0MGAAB3QwB1QwEHAEdEgATHAMdAdUMAh0GHAEAExwF3QwB1QwGHAEAExwFAAHdDAYcAQATHAYABhwBAAEdERwBHQYABhwBAAHVDBEcAR0GAAYcAQAB3QwRHAHdDAYABhwCABEcBwABHQUcAgARHAcAAR0FHAIAERwHAAHdDAUcAgARHAgABRwCAAEdDxwB1QwIAAUcAgAB1QwPHAEdCAAFHAIAAd0MDxwB3QwIAAUcAwAPHAkAAdUMAxwBHQMADxwJAAEdAxwBHQMAAR0NHAHVDAkAAd0MAxwB3QwDAAEdDRwB1QwKAAMcBAAB3QwNHAHdDAoAAdUMARwB1QwFAA0cCwABHQHVDAEdBQANHAsAAd0MAR0B3QwFAAEdDBwMAAHdDAYAAR0MHBMAAd0MDBwUAAscAR0UAAEdChwBHRQAAR0KHAHdDBQAAd0MAR0JHBYAAR0IHAHVDBYAAd0MAdUMBxwBHRcAAdUMBhwBHQHdDBcAAd0MBhwBHRIAExwB3QwBHQLVDAIdBhwBABMcAQAE3QwBHQYcAQATHAUAAd0MAR0FHAEAExwGAAEdBRwBABMcBgAB3QwFHAEAAR0RHAEdBwAFHAEAAR0RHAEdBwAFHAEAAd0MERwB3QwHAAUcAgARHAgABRwCABEcCAAFHAIAAR0QHAgAAR0DHAEdAgABHQ8cAR0IAAEdAxwBHQIAAd0MDxwBHQgAAd0MAxwB3QwDAA8cAd0MCQADHAQADxwKAAHVDAEcAR0EAA8cCgABHQEcAdUMBAAPHAoAAd0MAdUMAd0MBAABHQ0cAR0LAAEdBQABHQ0cAR0LAAHdDAUAAd0MDRwB3QwSAA0cEwANHBMAAR0LHAEdEwABHQscAR0TAAHdDAEdChwB3QwUAAEdChwVAAHdDAocFgABHQkcFgABHQgcAR0WAAHdDAgcAR0XAAccAR0B3QwXAAHVDAYcAR0SABMcAR0B3QwCHQHVDAEdBhwBABMcAd0MAQAE3QwBHQUcAQATHAYAAh0DHAEdAQATHAYAAd0MAR0DHAEdAQABHREcAR0HAAHdDAMcAd0MAQAB1QwRHAEdCAADHAIAAd0MERwB3QwIAAMcAwARHAkAAR0BHAEdAwARHAkAAx0DAAEdEBwJAAHdDAEdAd0MAwABHRAcCgAB3QwEAAHdDA8cAR0QAA8cAR0QAA8cAd0MEAAPHBEADxwRAAEdDRwB1QwRAAEdDRwB1QwRAAHdDA0cAd0MEgABHQwcEwABHQwcEwAB3QwLHAEdFAALHAEdFAAB1QwKHAHdDBQAAdUMChwVAAHdDAEdCBwBHRYAAR0IHAHVDBYAAd0MCBwB3QwXAAgcGAAHHAEdGAABHQYcAR0YAAEdBRwBHQHdDBIAAR0SHAcdBRwBAAHdDBIcAh0E3QwFHQEcAgASHALdDAQAAd0MAx0B1QwBHQIAERwB1QwHAATdDAEdAgARHAEdCwAB3QwCABEcAd0MDgARHA8AERwPAAEdEBwPAAEdDxwBHQ8AAd0MDxwBHRAADxwB3QwQAAEdDhwRAAEdDhwRAAHdDA4cEgANHAEdEgANHAEdEgAB1QwMHAHdDBIAAR0MHBMAAd0MDBwUAAscAR0UAAscAR0UAAIdCRwB3QwUAAIdCRwVAALdDAgcAR0XAAgcAR0XAAEdBxwB3QwXAAEdBxwYAAHdDAYcAR0ZAAYcAR0ZAAUcAR0B3QwZAAEdBBwBHRMAAd0MFBwFHQHVDAQcAgAUHAXdDAEdBBwCABIcAR0B1QwFAAHdDAEdAxwCABIcAR0B1QwGAAEdAxwCABIcAt0MBgAB3QwDHAIAAR0RHAkAAxwCAAHVDBEcCQADHAIAAd0MERwJAAMcAwAPHAHVDAEcCQABHQIcAwABHQ4cAdUMARwJAAEdAhwDAAEdDhwB3QwBHAkAAd0MAh0DAAHdDA4cAQABHQoAAh0EAA4cAQAB1QwKAALdDAQADRwB1QwBAAHdDBAAAR0MHAEdEgABHQwcAd0MEgAB3QwMHBQADBwUAAscAR0UAAMdCBwBHRQAAx0IHAHdDBQAA90MCBwYAAccAR0YAAccAR0YAAEdBhwB3QwYAAEdBhwZAAHdDAUcAR0aAAUcAR0aAAQcAdUMAd0MGgAEHAHVDBsAAR0CHAEdAd0MGwABHQEcAh0VABQcAdUMBR0EHAIAFBwBHQXdDAQcAgAUHAHdDAUABBwCAAEdEhwBHQYABBwCAAEdEhwB1QwGAAQcAgAB3QwBHQ4cAR0CHAHdDAYABBwDAAEdDhwBHQIcBwABHQMcAwAB3QwOHAHdDAIcBwABHQMcBAAOHAEAAhwHAAHdDAMcBAABHQ0cAQACHAgAAxwEAAIdDBwBAAEcAR0IAAEdARwBHQQAAd0MAdUMCxwBHQEAARwBHQgAAR0BHAHVDAUAAd0MCxwBHQEAARwB3QwIAAHdDAHVDAHdDAYACxwB3QwBAAEcCgABHQcACxwCAAEcCgAB3QwHAAscAgABHBIAChwBHQIAAdUMEgABHQkcAdUMAgABHRIAAh0IHAHdDAIAAd0MEgAB3QwB1QwBHQccFwAB3QwBHQYcAdUMGAAB3QwBHQUcAR0ZAAEdBRwB3QwZAAHdDAQcAR0bAAQcAR0bAAMcAR0B3QwbAAEdAhwB1QwcAAEdARwBHQHdDBwAAd0MARwBHR4AAR0B3QweAAEdHwAB3QwWAAHVDBQcBB0B1QwEHAIAAR0THAIdBN0MBBwCAAHdDBMcAR0B3QwEAAQcAwATHAHdDAUABBwDAAEdEhwGAAQcAwABHRIcBgAEHAMAAd0MEhwGAAQcBAAB1QwMHAEdAxwB1QwGAAEdAxwEAAEdDBwB1QwDHAHVDAYAAR0DHAQAAd0MAR0LHAHdDAMcAd0MBgAB3QwDHAUAAR0LHAEAAxwIAAMcBQAB3QwLHAEAAxwIAAMcBgABHQkcAR0BAAMcCAABHQEcAdUMBgACHQgcAR0BAAMcCAABHQEcAR0GAAHdDAHVDAgcAd0MAQACHAEdCAAB3QwBHQHdDAcAAd0MCBwCAAIcAR0JAAEdCQAHHAEdAgACHAHdDAkAAd0MCQABHQYcAR0CAAIcFAAB1QwBHQUcAd0MAgACHBQAAd0MAh0EHAMAARwBHRUAAd0MAR0DHAEdAwABHAEdFgAB3QwDHAEdAwABHAHdDBcAAx0B3QwDAAEcGAABHQLVDAQAAR0YAAPdDAQAAR0fAAHdDM8BAAHdDBUcAdUMAx0EHAMAAR0SHAEdAdUMAR0C3QwBHQQcAwABHRIcAh0B3QwCAAHdDAQcAwAB3QwNHAEdBBwC3QwEAAQcBAABHQwcAR0EHAYABBwEAAHVDAwcAd0MBBwGAAEdAxwEAAHdDAwcAQAEHAYAAR0DHAUAAR0LHAEABBwGAAHdDAMcBQABHQocAR0BAAMcAR0HAAMcBQAB3QwKHAEdAQADHAEdBwADHAYAAR0JHAHdDAEAAxwB3QwHAAHVDAEcAR0GAAHVDAkcAgADHAgAAR0BHAEdBgAB3QwBHQccAR0CAAMcCAAB3QwBHQHdDAcAAR0HHAEdAgADHAkAAR0IAAHdDAccAd0MAgADHAkAAd0MCQABHQYcAwADHBMAAR0FHAHVDAMAAhwB1QwTAAHdDAHVDAQcAR0DAAIcAdUMFAABHQHVDAIcAR0B3QwDAAIcAd0MFAAB3QwB1QwCHAEdBAACHBYAAd0MAh0B3QwEAAEcAR0XAAIdBQABHAEdFwAC3QwFAAEcAd0MHgABHR8AAR0fAAHdDNABAAHdDBUcBB0DHAQAAR0SHAIdAt0MAh0DHAQAAR0RHAMdAgAC3QwDHAQAAd0MCxwB1QwFHAEdAt0MBAADHAUAAR0KHAEdBRwB3QwGAAMcBQABHQocAd0MBRwHAAEdAhwFAAHdDAocAQAFHAcAAR0BHAEdBgAJHAIdBRwHAAHdDAIdBgABHQgcAh0EHAEdCAABHQHdDAYAAR0IHALdDAQcAR0IAAHdDAcAAd0MAR0HHAIABBwB3QwRAAEdBhwBHQIABBwSAAHdDAEdBRwBHQIABBwTAAEdBBwB1QwB3QwCAAQcEwAB3QwB1QwDHAEdAwADHAEdFAABHQIcAR0B3QwDAAMcAR0UAAHdDAMdBAADHAHdDBUAAh0B3QwEAAMcFgAC3QwFAAMcHQACHAEdHQABHQHVDAEdHQACHQHdDB0AAt0MsgIAFxwCAAIcBQAXHAIAAR0BHAUAAR0WHAIAAh0FAAEdFRwBHQIAAd0MAR0FAAHdDBUcAR0DAAHdDAYAAdUMFBwB3QwKAAEdDxwB1QwDHAEdCwAB3QwBHQYcAh0FHAHVDAEdAhwCHQwAAR0FHAEdAdUMAR0FHAEdAd0MAtUMAR0B3QwMAAHdDAEdAxwC1QwC3QwFHAHdDAEAAh0B3QwOAAEdAxwBHQHdDAIABBwBHQIAAt0MDwAB3QwB1QwCHQHdDAMAAR0DHAEdFAADHQQAAR0DHAHdDBQAA90MBAAB3QwDHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MswMAAR0OHAEABxwB1QwCHAYAAd0MFhwB3QwCHAcAAR0VHAEAAhwHAAHVDAEdExwBHQEAAh0HAAHdDAIdARwEHQ0cAR0BAAIdCAAB3QwDHQLVDAIdDBwB3QwBAALdDAkAAd0MAR0E3QwBHQwcDgAB3QwEAAHdDAEdBBwB1QwGHBQAAR0C1QwEHQUcFAAB3QwBHQLVDAEdAd0MAdUMBRwVAATdDAEAAd0MBRwbAAUcGwAB1QwEHBsAAR0EHBsAAd0MBBwcAAQcHAAEHBwAAR0CHAEdHAABHQIcAR0cAAHdDAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AARwfAAEcHwABHR8AAR0fAAHdDKsBAAEdGRwGAAEdGRwGAAHdDAHVDBgcBwADHRMcAR0CHAcAAd0MAx0B1QwCHQ8cAdUMAhwIAALdDAEdAtUMAR0B1QwOHAHdDAIcCgAE3QwBHQHVDAwcAR0BAAIcDgAB3QwB1QwMHAEdAQABHQEcDwAB3QwEHAIdAdUMBRwB3QwBAAEdARwQAAEdAxwDHQUcAgAB3QwBHRAAAR0DHAPdDAUcAwAB1QwQAAHdDAMcAwAFHAMAAd0MEQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwBHQHdDAMABRwWAAEdBAAFHBYAAd0MBAAFHBsAAR0EHBsAAdUMBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwB1QwcAAEdAhwBHRwAAd0MAR0BHAHdDB0AAR0BHB4AAd0MARwfAAEdHwABHR8AAd0MSAAB3QwcHAQAHBwEAAQcAR0XHAQABBwCHRYcBAADHAEdAd0MAdUMAR0VHAQAAR0BHALVDAEAAd0MAdUMEhwBHQIcBAABHQEcAR0B3QwCAAHdDAMcAdUMAR0NHAEdAhwEAAHdDAEdAd0MBAABHQEcAdUMAh0FHAEdBhwBHQHdDAIcBQAB1QwFAAEdARwB1QwC3QwFHAEdBhwBHQEAAhwFAAHdDAUAAd0MAR0B3QwCAAUcAd0MBhwB3QwBAAHVDAEcDAABHQMABRwBAAEdBRwCAALVDAwAAd0MAwAFHAEAAR0FHAIAAd0MAR0QAAEdAxwBHQEAAd0MBRwDAAHdDBAAAR0DHAEdAgAFHBQAAd0MAxwB3QwCAAUcFQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwB1QwB3QwDAAUcFgABHQQABRwWAAHdDAQAAR0DHAHVDBsAAdUMAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MiQEAHRwDAB0cAwAFHAIdFhwDAAUcAdUMAR0THAHVDAIcAwAFHALdDAEdEhwB1QwCHAMAAR0DHAEdAgABHRIcAd0MAhwDAAEdAxwBHQIAAd0MAxwCHQUcAR0GHAHVDAEAAhwDAAHdDAMcAd0MAwADHALVDAUcAR0GHAHVDAEAAR0BHAQAAxwEAAMcAt0MBRwB3QwBHQUcAd0MAQABHQEcBAADHAQAAR0BHAEdAgAFHAEAAR0FHAIAAd0MAdUMBAAB1QwBHAEdBAADHQIABRwBAAHdDAUcAwABHQQAAR0BHAEdBAAB3QwBHQHdDAIABRwCAAUcAwAB3QwEAAHdDAEdAd0MBQAB3QwDAAUcAgAFHAkAAR0KAAEdAxwB1QwCAAUcCQAB3QwKAAEdAxwBHQIABRwUAAHdDAMcAd0MAgAFHBUAAxwDAAUcFQABHQEcAdUMAwABHQMcAR0VAAMdAwAB1QwDHAHVDBUAAd0MAR0B3QwDAAHdDAMcAd0MFgAB3QwFAAMcHQADHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MqQEAHRwDAB0cAwAFHAEdAdUMFhwDAAUcAdUMAR0THAIdARwDAAUcAt0MAR0DHAEdDRwEHQMABRwCAAEdAxwBHQYcAh0FHAEdAt0MAdUMAwAFHAIAAd0MAxwB3QwBHQUcAh0FHAHdDAIAAd0MAwABHQMcAR0DAAMcAQABHQUcAt0MBRwHAAHVDAMcAdUMAwABHQEcAR0BAAHdDAUcAgAFHAcAAd0MAxwB3QwDAAMdAgAFHAIABRwIAAMcBAAB3QwB1QwB3QwCAAUcAgAFHAgAAxwFAAHdDAMABRwCAAQcAR0IAAEdAhwJAAEdAxwB1QwCAAEdAxwB1QwIAAHVDAIcCQAB1QwDHAHVDAIAAR0DHAHdDAgAAd0MARwBHQkAAd0MAxwB3QwCAAHdDAMcCgABHAHVDAoAAdUMARwBHQQAAxwKAAEdAd0MCgABHQEcAR0EAAMcCgAB1QwLAAHdDAEdAd0MBAABHQEcAR0KAAHdDAwAAR0FAAEdARwBHRcAAd0MBQAB3QwBHQHdDB4AAR0fAAHdDMkCAB0cAwAdHAMABhwBHRQcAR0B1QwDAAUcAx0DHAHVDAEdDBwB1QwDHQMABRwBHQHdDAHVDAEdAdUMAx0FHAEdAdUMBBwB1QwCHQLdDAMAAR0DHAEdAd0MAQAB3QwC1QwBHQLdDAUcAx0DHAEdAt0MBQABHQMcAR0DAAPdDAIABRwC3QwBHQMcAd0MBwAB3QwDHAHdDAgABRwCAAHdDAMcCQADHAkAAR0DHAEdAwAB1QwBHAEdCQADHAkAAR0DHAEdAwABHQEcAdUMCQAC1QwBHAkAAd0MAxwB3QwDAAHdDAEdAd0MCQAC1QwBHAoAAxwFAAEdCgAC3QwBHQoAAdUMARwBHQUAAd0MDAAB1QwKAAHVDAIdEgAB3QwKAAHdDAEdAd0MHgAB3QyQBAAB3QwGHAIAFBwEAAYcAR0BAAEdCxwBHQccBAAFHAIdAdUMAx0B1QwHHAEdAtUMBhwEAAQcAh0D3QwE1QwEHAMdAd0MAdUMBRwBHQQABBwB1QwB3QwDAAPdDAEdBBwCHQHdDAEAAd0MAh0DHAEdBAAB1QwDHAHdDAcAAd0MAR0BHAIdAt0MAwAB1QwBHQIcAdUMAd0MBAAB1QwCHAHVDAkABB0FAALdDAEdARwBHQUAAd0MAdUMARwBHQkAAd0MAdUMAt0MBwACHQHdDAYAAR0BHAHdDAoAAd0MCQAB3QwBHQcAAd0MARwWAAHdDAgAAR0fAAEdHwAB3Qz+BAAFHAEdDRwBHQccBQAFHAHdDAUcAR0B1QwBHQUcAR0HHAUABRwBAAQcAR0B1QwCHQHVDAIcAh0B3QwHHAUABBwBHQEAAxwB1QwBHQPdDAIdAdUMAh0BAAEdBhwFAAEdAxwBHQEAAxwBHQHdDAMAAd0MAdUMAR0C3QwBAAEdBhwFAAEdAxwB3QwBAAMcAd0MBQAC3QwDAAHdDAYcBQAB3QwDHAIAAdUMARwBHQwABhwGAAHVDAEcAR0CAAMdDAAB1QwFHAYAAR0BHAEdAgAB3QwB1QwB3QwMAAHVDAUcBgAB3QwB1QwB3QwDAAHdDA0AAd0MBRwHAAEdEwAFHAcAAd0MEwAFHBsAAR0DHAEdGwABHQMcAdUMGwAB3QwBHQEcAR0B3QwcAAMdHQAB3QwBHQHdDB4AAd0MxwMACxwCHQ4cBQAKHAEdAdUMAx0MHAUAChwB1QwC3QwB1QwBHQwcBQAKHAHdDAIAAt0MAR0LHAUAAR0DHAEdBRwFAAEdCxwFAAEdAxwB1QwFHAUAAd0MAR0KHAUAAd0MAxwB3QwB1QwDHAEdBgABHQocBgADHAEAAR0DHAHVDAYAAd0MAR0CHAEdBhwGAAMcAQAB3QwDHAHdDAcAAh0BHAEdBhwGAAEdARwBHQIAAxwIAAHdDAHVDAEdAd0MBhwGAAMdAgABHQEcAR0JAAHdDAEdAQAGHAYAAd0MAR0B3QwCAAEdARwBHQoAAd0MAQAGHAcAAd0MAwAB3QwBHQHdDAwABhwMAAEdDQABHQUcDAAB3QwNAAHVDAUcGgAB3QwFHBsABRwbAAUcGwABHQMcAR0bAAHVDAMcAdUMGwAB3QwBHQEcAR0B3QwcAAEdAdUMAR0dAAHdDAHVDAHdDB4AAd0MhwIACxwDHQ0cBQAKHAEdAdUMAh0B1QwMHAUAChwBHQPdDAEdDBwFAAEdCRwB3QwDAAHdDAwcBQAB1QwDHAHVDAUcBQAB1QwLHAUAAd0MAxwB1QwFHAUAAR0LHAYAAxwB3QwFHAUAAd0MCxwGAAEdARwBHQEAAdUMAxwBHQYACxwGAAMdAQABHQMcAR0GAAscBgAB3QwB1QwB3QwBAAHdDAMcAd0MBgALHAcAAd0MAwADHAcAAdUMChwLAAEdAhwHAAEdChwLAAEdARwBHQcAAd0MAhwCHQYcCwAB3QwCHQgAAhwB1QwBHQYcDAABHQHdDAgAAR0BHALdDAYcDAAB3QwJAAEdARwCAAYcFgAB3QwBHQIABhwXAAEdAgAGHBcAAd0MAgABHQUcGgABHQUcGgAB3QwEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAR0BHAEdHQACHQHVDB0AAd0MAR0B3QweAAHdDGYAAd0MAdUMChwCHQHVDAEdDBwFAAHdDAMcAR0FHAIdAdUMAd0MAdUMDBwGAAMcAR0FHAEdAt0MAQAB3QwMHAYAAR0BHAEdAd0MBRwB3QwEAAwcBgADHQEABRwFAAwcBgAB3QwBHQHdDAEAAR0DHAEdBQAMHAcAAd0MAgABHQMcAdUMBQAEHAEdBxwKAAHdDAMcAd0MBQABHQMcAR0HHAsAAxwGAAEdAxwB3QwHHAsAAR0CHAYAAd0MAxwBAAccCwABHQEcAR0HAAscCwAB3QwCHQcACxwMAAHVDAHdDAcACxwMAAHdDAgAAxwBHQccFQAB1QwCHAIdBhwVAAEdAhwB3QwBHQYcFQAB3QwCHAEAAd0MBhwWAAIcAgAGHBYAAhwCAAYcFgABHQEcAgAGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwB1QwbAAHVDAMcAd0MGwAB3QwBHQEcAR0dAALVDAEdHQAB3QwBHQHdDB4AAd0MJgAC3QwBAAPdDAEdBxwBHQHVDAwcCgABHQYcAR0C3QwMHAoAAd0MBhwBHQIADBwLAAYcAd0MAgAMHAsABhwDAAwcCwABHQEcAR0CHAEdAwAMHAsAAR0BHAHVDAIcAR0DAAwcCwAB3QwBHQHdDAIdAd0MAwAMHAwAAR0BAAIdBAABHQscDAAB3QwBAALdDAQAAR0LHBQAAd0MCxwVAAMcAR0HHBUAAxwBHQccFQADHAHdDAccFQADHAEABxwVAAMcAQABHQYcFQABHQIcAQABHQYcFQABHQIcAQAB3QwGHBUAAd0MAhwCAAYcFgACHAIABhwWAAEdARwCAAYcFgAB1QwBHAIAAdUMBRwWAAHdDAEcAgABHQUcFwABHQIAAd0MBRwXAAHVDAMABRwXAAHdDAMABBwBHRsAAR0DHAHVDBsAAR0DHAHdDBsAAd0MAR0BHAEdHQADHR0AAd0MAR0B3QweAAHdDAMAAt0MAR0DHAEdAwABHQYcAt0MDBwDAAHdDAMcAd0MAwAB3QwGHAIADBwEAAMcBQABHQUcAgAMHAQAAxwFAAEdBRwCAAwcBAADHAUAAd0MBRwCAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAAB3QwB1QwB3QwGAAHdDAMcAd0MAgABHQscBQABHQgAAxwDAAEdCxwFAAHdDAgAAxwDAAHdDAscDgABHQEcAR0EAAMcAR0HHA4AAR0BHAEdBAADHAEdBxwOAAHdDAEdAd0MBAADHAHdDAccDwABHQUAAxwBAAccDwAB3QwFAAEdAhwBAAccFQAB1QwCHAEABxwVAAHdDAIcAQAHHBYAAhwBAAEdBhwWAAIcAQABHQYcFgABHQEcAQAB3QwGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwBHRsAAR0DHAHdDBsAAd0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MIgAC3QwB1QwFHAMAAR0GHALdDAwcAgAB3QwFHAMAAdUMBhwCAAwcAwAFHAMAAd0MAR0FHAIAAR0LHAMABRwEAAHVDAUcAgABHQscAwAFHAQAAd0MBRwCAAHdDAMcAR0HHAMAAdUMAxwBHQUABRwDAAMcAdUMBxwDAAEdAxwBHQUABRwDAAMcAd0MBxwDAAHdDAMcAd0MBQAEHAEdAwADHAEABxwEAAMcBgAEHAHVDAMAAxwBAAccBAADHAYABBwB3QwDAAMcAQAHHAQAAdUMARwBHQYAAR0DHAQAAR0CHAEABxwEAAEdARwBHQYAAR0DHAQAAR0CHAEABxwEAAHdDAEcAd0MBgAB3QwBHQEcAR0EAAHdDAIcAQAHHAUAAR0IAAEdARwBHQUAAhwBAAccBQABHQgAAd0MAR0B3QwFAAEdARwBAAccBQAB3QwJAAEdBgABHQEcAQAHHA8AAd0MBgAB3QwBHQEAAR0GHBcAAR0BAAEdBhwXAAHdDAEAAd0MAR0FHBoAAR0EHAEdGgAB3QwEHAHVDBsABBwB3QwbAAEdAxwcAAEdAxwcAAHdDAIcAR0dAAMdHQACHQHdDB0AAt0MggEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gCgAARwfAAEcHwAB1QwfAAEdHwAB3Qz/BgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8FAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB3QzfBQABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAR0dAAEcAdUMAR0dAAEdAdUMAd0MHQABHQHdDB4AAd0M/wYAAhwBHQHdDBwAAhwB1QwdAAHVDAEdAd0MHQACHR4AAt0M/gYAAhwBHQHdDBwAARwBHQHVDB0AAh0B3QwdAAEdAd0MHgAB3Qz/BgABHAEdAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8EAAEcAdUMAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/BAACHAEdAd0MHAABHAIdHQABHAEdAd0MHQABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MvwUAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAEdAd0MHgAB3QzfBgACHAEdAd0MHAABHAIdHQAB1QwBHQHdDB0AAdUMAd0MHgAB3Qz/BgACHAHdDB0AARwBHR4AAR0B1QweAAEdAd0MHgAB3Qz/BgABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M3wUAAhwB3QwdAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MnwUAARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8GAAEdHwAB1QwfAAHdDL8HAAEcAd0MHgAB1QwfAAEdHwAB3QyfBwABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAdUMHwAB3Qz/BQACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwAB1QwfAAHdDJ8EAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3QyfAwADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDP8CAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAHVDB0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwB1QweAAEcAd0MHgABHB8AAR0fAAEdHwAB3QzfAgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAHVDB0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwAB1QwfAAEdHwAB3QyfAgADHB0AAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3Qz/AQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("jigAAd0M/AcAAd0MAR0B1QwB3QwdAAEdAd0MHgAB3Qy8BwAB1QwBHAEdAhwBHRoAAd0MBB0B3QwbAAEdAd0MAh0cAAHdDAEAAt0MmgcAAR0FHAHdDBkAAh0BHAEdAdUMAR0aAAHdDAEdAdUMAx0bAAHdDAHVDAPdDBwAAd0M/AYAAR0B1QwFHAHdDBgAAd0MAh0DHAEdGgAB3QwBHQMcAR0bAAHdDAIcAR0B3QwcAAEcAh0dAAHVDAEdAd0MHQABHQHdDB4AAd0MnAYAAd0MAdUMBBwBHRoAAh0CHAEdAd0MGgAB3QwCHQEcAR0cAAHdDALVDAHdDB0AAd0MAR0fAAHdDNwGAAMdARwBHQHdDBoAAd0MAx0B1QwcAALdDAEdAd0MHgAB3QydBwAB3QwCHQHdDB0AAR0B3QweAAHdDLWfAQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AQAB3QwBHQUcAgAB3QwBHQYcAwALHAIAAd0MBRwDAAEdBhwDAAscAwAFHAMAAd0MAR0FHAMAAdUMChwDAAUcBAABHQUcAwABHQocAwAFHAQAAd0MBRwDAAHdDAocAwAFHAUABBwBHQQAChwDAAUcBQAEHAEdBAAKHAMABBwBHQUABBwB3QwEAAEdAhwBHQYcAwAEHAEdBQAEHAUAAh0BHAHVDAYcAwAEHAHdDAUAAR0DHAUAAd0MAR0B1QwB3QwGHAMAAdUMAxwGAAHVDAEdAhwGAAHdDAEdAQAGHAMAAdUMAxwGAAHdDAEdARwBHQcAAd0MAQAGHAMAAd0MAR0BHAEdBwAB3QwCHQkABhwEAAEdARwBHQgAAR0B3QwJAAYcBAAB3QwBHQHdDAgAAd0MCgAGHAUAAdUMFAAGHAUAAd0MFAAGHBoABhwaAAIdBBwaAAEdAdUMBBwaAALdDAEdARwBHQEcHAADHQEcHAAB3QwBHQHdDAHVDB0AAd0MAQAB1QwfAAHdDOIBAAHdDAUcAd0MAQAB3QwB1QwGHAcAAR0GHAMABRwDAAIdBRwHAAHVDAYcAwAFHAMAAd0MAR0EHAEdBwAB3QwGHAMABRwEAAHdDAQcAR0IAAYcAwAFHAUAAdUMAxwB3QwIAAYcAwAEHAEdBQABHQMcCQAGHAMABBwB1QwFAAHdDAMcCQAGHAMABBwB3QwGAAMcCQABHQUcAwAEHAcAAxwJAAEdBRwDAAEdAxwHAAIcAR0JAAHdDAUcAwABHQIcAR0HAAHVDAIdCgAFHAMAAd0MAhwBHQcAAh0B3QwKAAUcBAABHAEdAd0MBwAC3QwLAAUcBAABHAEdFQAFHAQAARwB3QwVAAUcBAABHRYABRwEAAHVDBYAAdUMBBwEAAHdDBYAAR0BHAHVDAIcGwAB3QwCHQIcHAABHQHdDAIcHAAB3QwBAAEdARweAAHVDAEdHgAB3QwBHR8AAd0MggIAAd0MBRwB3QwBAALdDAMdAd0MCgAB3QwFHAMAAR0DHAEdBAADHQwABRwDAAEdAxwBHQQAA90MDAAFHAMAAd0MAxwB3QwTAAUcBAADHBQAAR0EHAQAAxwUAAHVDAQcBAADHBQAAd0MBBwEAAMcFQABHQMcBAACHAEdFQABHQMcBAACHAEdFQAB3QwDHQQAAhwB3QwWAAMdBAABHAEdFwAD3QwEAAIdHgABHQHdDB4AAd0MvgQAAt0MAR0B1QwBHQMAA90MFwAB3QwC1QweAALdDLjnAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("AxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AARwB1QweAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M/wEAAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwAB1QwfAAHVDB8AAd0MnwUAARwfAAEdHwAB1QwfAAHdDJ/vAQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          rockSnowLarge2: kV("rockSnowLarge2", {
            x: 36,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("BgACHAHVDAHdDBwAAR0BHAEdHQABHQHVDAHdDB0AAd0MAR0fAAH6Cf4GAAUcAR0GAATdDAcAAR0CHAYABRwB3QwRAAHdDAIcBgAFHBMAAhwGAAUcEwACHAYAAR0EHBMAAdUMARwGAAIdAhwBHRMAAdUMARwGAAHdDAHVDAIcAR0TAAHdDAEdBwAB3QwBHQEcAd0MFAAB1QwIAAHVDAEcFQAB3QwIAAHdDAEdHwAB1QwfAAHdDJwFAAEdBRwEAAccAd0MBAAB3QwDHAYAAR0FHAQAAR0GHAYAAxwGAAHdDAUcBAABHQYcBgADHAcABRwEAAHdDAUcAR0GAAMcBwAEHAEdBQADHAEdARwB1QwGAAHVDAIcBwAEHAEdBQABHQEcAh0BHAHdDAYAAdUMAhwHAAQcAd0MBQADHQHdDAEdBwAB3QwCHAcAAR0DHAYAAfoJAR0B3QwBAAEdCAACHAcAAR0DHAcAAd0MAgAB+gkIAAIcBwAB+gkBHQEcAR0TAAEdARwIAAMdEwAB1QwBHQgAAd0MAR0B3QwTAAHdDAEdCQAB3QwVAAHdDOYEAAHdDAUcAwAIHAHdDAQAAd0MAxwHAAUcAwAB1QwHHAYAAxwHAAUcAwABHQccBgADHAcABRwDAAHdDAccBgADHAcABRwEAAccBgADHAcABRwEAAccBgADHAcAAdUMAxwBHQQABhwBHQYAAR0CHAcAAR0DHAHVDAQAAR0DHAMdBgABHQIcBwAB3QwDHAHdDAQAAR0DHAIdAd0MBgAB3QwCHAgAAxwFAAHdDAMcAt0MCAACHAgAAdUMARwBHQYAAxwKAAEdARwIAAEdARwBHQYAAxwKAAEdARwIAAHdDAEdAd0MBgADHAoAAd0MAR0JAAHVDAcAAxwLAAEdCQAB+gkHAAMcCwAB3QwRAAMcCwAB3gwRAAMcCwAB3gwRAAIcAR0LAAHeDBEAARwCHR0AARwBHQH6CR0AAR0B3QweAAEdHwAB+gmvAgAB3QwFAAUcAwAIHAHdDAUAAxwHAAUcAwAIHAYAAxwHAAUcAwAIHAYAAxwHAAUcAwAHHAEdBgADHAcAAR0DHAEdAwAHHAEdBgABHQIcBwABHQMcAR0DAAHVDAUcAR0B3QwGAAEdAhwHAAHdDAMcAd0MAwABHQUcAR0HAAHdDAIcCAADHAQAAd0MBRwB3QwIAAIcCAADHAUABRwJAAIcCAABHQEcAR0FAAUcCQABHQEcCAACHQHVDAUABRwJAAIdCAAB3QwBHQHdDAUAAR0BHAEtAhwJAAHdDAEdCQAB3QwGAAEdARwBLQIcCgAB3QwQAAHdDAEcAS0CHBwAAxwBHRwAAxwBHRwAARwBHQHVDAHdDBwAAx0dAAHVDALdDB0AAd0MjgMAAR0BHAEdAd0MAwABHQMcAR0BAALdDAccAd0MBgABHQIcAdUMARwB1QwEAAHdDAMcAd0MAwAHHAcAAd0MAhwB3QwBHQHdDAUAAxwEAAccCAACHAEAAR0GAAMcBAAHHAgAAhwBAAH6CQYAAdUMARwBHQQABxwIAAEdARwIAAEdARwBHQQABxwIAAEdARwIAAHdDAEdAd0MBAABHQUcAR0IAAHdDAHVDAkAAR0FAAEdBRwBHQkAAR0JAAHdDAUAAd0MBRwB3QwJAAHdDBAABRwbAAUcGwAFHBsAAR0DHAHVDBsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAHVDAEcAdUMHQAC1QwBHR0AAd0MAR0B3QweAAHdDI0DAAUcAR0DAAHdDAEAAd0MAR0BHAEdBxwCAAH6CQEAAd0MBAAB+gkFHAHdDAYAAh0B1QwHHAoAAR0EHAcAAd0MAdUMAd0MBxwKAAEdBBwIAAHdDAEABxwKAAHdDAEcAR0BHAEdCgAHHAsAAh0BHAHVDAoAAR0FHAHVDAsAAR0B3QwBHQH6CQoAAR0FHAHVDAsAAd0MAQAB1QwLAAHdDAUcAd0MDQAB3QwMAAUcGwAFHBsABRwbAAHVDAMcAR0bAAEdAxwB1QwbAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAR0B+gkeAAHdDK0DAAEdBRwDAA0cAgAB3QwB1QwBHAEdBAABHQUcAwAFHAIdBRwBHQMAAdUMARwB1QwEAAH6CQUcAwAFHAIdBRwB1QwDAAHdDAEdAd0MBQAFHAMAAR0DHAEdAt0MBRwB3QwEAAEdBgABHQMcAR0DAAEdAxwBHQIABRwFAAHdDAYAAdUMAxwB1QwDAAHdDAMcAd0MAgAFHAwAAd0MAxwB3QwEAAMcAwAFHA0AAxwFAAMcAwAB1QwDHAEdDQADHAUAAxwDAAEdAxwBHQ0AAR0BHAEdBQADHAMAAd0MAxwB3QwNAAEdARwBHQUAAR0CHAQA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GgABHQUcGgAB3QwB1QwDHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAdUMAd0MHgAB3QxyAAHdDAEdAd0MAwAB+gkMHAHdDAEAAfoJAd0MBAABHAUAAR0FAAEdCxwIAAEcBQAB3QwFAAEdCxwIAAEcCwAB3QwLHAgAARwMAAscCAABHAwAAR0JHAEdCAABHAwAAdUMCRwB1QwIAAEcDAAB3QwJHAHdDAgAARwNAAkcCQABHA0ACRwJAAEdDQAJHAkAAR0NAAkcCQAB3QwNAAkcFwAJHBcAAR0HHAHVDBcAAdUMBxwBHRcAAd0MBxwB3QwYAAccGQAHHBkABxwZAAccGQABHQUcAdUMGQAB1QwFHAHVDBkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAEdBBwbAAIdAxwbAAHdDAEdAdUMAhwbAAHeDAHdDAMdHQAB3QwCHRAABRwCAAHdDAwcAR0GAAEcBAAB1QwDHAEdAwAMHAEdBgABHAQAAdUMAxwBHQMACxwBHQHdDAYAARwEAAHdDAMcAd0MAwALHAEdBwABHAUAAxwEAAscAd0MBwABHAUAAR0BHAEdBAALHAgAARwFAAMdBAALHAgAARwFAAHdDAHVDAHdDAQACxwIAAEcBgAB3QwFAAEdCRwBHQgAARwMAAEdCRwBHQgAARwMAAHdDAkcAd0MCAABHQ0ACRwJAAEdDQAJHAkAAd0MDQAJHBcACRwXAAkcFwAJHBcAAR0HHAEdFwABHQccAR0XAAHdDAccAd0MGAAHHBkABxwZAAccGQAHHBkABxwZAAEdBhwZAAEdBhwZAAHdDAYcGgAGHBoABhwaAAEdAxwBHQEcGgAB1QwDHAEdAdUMDgAHHAEAAd0MDRwB3QwDAAH6CQHdDAEcAwABHQUcAR0CAA0cBgABHAMAAR0FHAEdAgAMHAHVDAYAARwDAAHdDAUcAd0MAgAMHAHVDAYAARwEAAUcAwALHAEdAd0MBgABHAQABRwDAAscAdUMBwABHAQABRwDAAscAd0MBwABHAQAAR0DHAHVDAMACxwIAAEcBAAB1QwDHAEdAwALHAgAARwEAAHdDAMcAd0MAwABHQkcAR0IAAEdBQADHAQAAR0JHAEdCAAB1QwFAAEdARwBHQQAAd0MCRwB3QwIAAHdDAUAAR0B1QwBHQUA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AR0EAAEdBRwQAAUcAR0EAAHdDAEdBBwQAAEdBBwB3QwFAAEdBBwQAAHVDAMcAR0GAAHdDAQcEAAB3QwDHAHVDAcABBwRAAMcAd0MBwAEHBEAAhwBHQgAAR0CHAEdEQADHQgAAR0CHAEdEQAB1QwBHQH6CQgAAd0MARwB1QwB3QwRAAHdDAH6CQoAAdUMAR0eAAEdAd0MHgAB3Qz7AgABHQccBQAB3QwB1QwB3QwGAAccAgABHAHdDAccBgAB3QwHAAHVDAUcAR0CAAEdAQAHHA4AAR0FHAEdAgABHQEABxwOAAHdDAUcAfoJAgAB3QwBAAccDwAFHAUABxwPAAUcBQAHHA8ABRwFAAccDwABHQQcBQAHHA8AAdUMBBwFAAHVDAUcAR0PAAHdDAQcBQABHQUcAR0QAAEdAxwFAAHdDAUcAd0MEAACHQHVDAEcBgAFHBEAAd0MAh0BHAYABRwSAALdDAHVDAYABRwUAAEdBgAB1QwEHBQAAd0MBgABHQQcGwAB3QwEHBwAAxwB1QwcAAMcAR0cAAMcAd0MHAAB1QwCHB0AAdUMAhwdAAHdDAEcAR0eAAIdHgABHQHdDB4AAd0MuwEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("kYABAAHeDAHdDAH6CfsHAAHdDAIcAR0B3QwBHRsAAR0BHAEdAQAB3QwbAAEdARwB3QwBAAHeDBsAAfoJAR0CAAHeDBwAAR0CAAHeDBwAAd0MHwAB3gy9BgABHQEcAfoJARwB1QwBHRoAAd0MARwBLQEcAt0MGwAB1QwBLQEdHQABHQEtAR0dAAHdDAEtAd0MHgABLR8AAR0fAAHdDJ0GAAHdDAIcAdUMAd0MHAAB1QwBHAH6CQHeDBwAAR0BHB4AAd0MARwfAAHVDB8AAR0fAAH6Cb0GAAEcAd0MAR0B3QwcAAEdAQAB3QwdAAEdAQAB3gwdAAHdDB8AAd4MHwAB3gwfAAHeDLBeAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AR0HHA8ABRwB3QwDAAEdBxwPAAEdAxwBHQQAAd0MBxwPAAHVDAMcAR0FAAccDwAB+gkDHAHdDAUABxwQAAMcBgAHHBAAAR0CHAYABxwQAALVDAEcBgAHHBAAAd0MAR0BHAYABxwRAAHdDAEdBgABHQYcEgABHQYAAR0FHAEdEgAB3QwGAAHdDAUcAdUMGgAFHAHdDBoABRwbAAUcGwAFHBsABRwbAAEdBBwbAAEdAxwBHRsAAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAEdAhwdAAEdARwBHR0AAd0MARwBHR4AAR0B3QweAAEdAd4MHgAB3QwB3gwfAAHeDDoAAR0HHBgAAd0MBxwZAAccGQAHHBkABxwZAAccGQAHHBkABxwZAAccGQABHQUcAR0ZAAEdBRwB1QwZAAHdDAUcAd0MGgAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAdUMARwBHR0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDJsBAAHdDAccGQAHHBkABxwZAAEdBRwBHRkAAR0FHAEdGQAB3QwFHAHdDBoABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAEdARwBHR0AAx0dAAHdDAHVDAHdDB4AAd0M/QIABRwB3QwaAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAMcHQADHB0AAdUMAhwdAAEdAhwdAAHdDAIcHgACHB4AAhweAAHVDAEdHgAB1QwBHR4AAt0M2uMBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("AhwBHQHdDBwAAhwB1QwdAAIcAd0MHQACHB4AAhweAAIdHgAC1QweAAHdDAH6CZ8GAALdDP33AQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          rockSnowLarge3: kV("rockSnowLarge3", {
            x: 38,
            y: 40,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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AR0ZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAh0DHBsAAh0DHBsAAt0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MjAEAAd0MChwBHQHVDAwcCAABHQHVDAEdBBwCHQHVDAIdDBwIAAMdAdUMARwEHQHVDALdDAwcCAAD3QwBHQHVDAIdA90MAgAMHAsAAd0MAR0C3QwFAAscAdUMDAAB3QwHAAEdChwBHRQAAdUMChwB3QwUAAHdDAocFgAKHBYACRwBHRYACRwBHRYACRwB3QwWAAHVDAgcFwABHQgcFwAB3QwIHBgACBwYAAccAdUMGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAdUMBBwB1QwaAAEdBBwB1QwaAAHdDAEdAxwB3QwbAAEdAxwcAAHdDAIcAdUMHQABHQEcAR0dAAEdAdUMAd0MHQAB3QwBHQ8AAR0HHAIdDBwKAAHVDAEdBhwCHQwcCgAB3QwBHQYcAt0MDBwLAAHdDAUcAR0CAAwcDAAEHAIdAgAMHAwAAhwBHQHVDAEdAd0MAgABHQscDAAEHQHdDAMAAR0KHAEdDAABHQHVDALdDAQAAd0MChwBHQwAAt0MBwAKHAHdDBUACRwBHRYACRwBHRYACRwB3QwWAAkcFwABHQgcFwABHQgcFwAB3QwIHBgACBwYAAgcGAAHHAEdGAAHHAHVDBgAAR0GHAHdDBgAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAR0EHAEdGgABHQQcAR0aAAHdDAQcAd0MGwABHQMcHAABHQMcHAAB3QwCHAEdHQABHQEcAR0OAAEdBxwCHQwcCgAB3QwHHALdDAwcCwAHHAIADBwLAAccAgAMHAsAAR0FHAEdAgAMHAsAAR0EHAIdAgAB1QwLHAsAAd0MAdUMAR0BHAIdAd0MAgAB1QwKHAHVDAwABB0B3QwDAAHdDAocAR0MAALdDAEdAd0MBQAKHAHdDA4AAd0MBgAKHBYAChwWAAkcAR0WAAEdCBwBHRYAAR0IHAHdDBYAAd0MCBwYAAgcGAAIHBgACBwYAAgcGAABHQccGAABHQYcAR0YAAHdDAYcAdUMGQAGHAHdDBkAAR0FHBoAAR0EHAEdGgAB3QwEHAEdGwAEHAHdDBsAAR0DHBwAAR0DHBwAAd0MAR0BHAHVDB0AAR0BHAHVDB0AAd0MAR0B3QwNAAIdBxwCHQwcCQAB3QwBHQccAt0MDBwKAAHdDAccAgAMHAsABxwCAAEdCxwLAAEdBhwCAAHVDAscCwABHQUcAR0CAAHdDAscCwAB3QwB1QwDHALVDAMAChwBHQwAAh0CHAEdAd0MAwAKHAEdDAAB3QwBHQEcAR0B3QwEAAocAd0MDQAB3QwBHAEdBQAKHA8AARwB3QwFAAEdCBwBHQ8AAdUMBgABHQgcAR0PAAEdBgAB3QwIHAHdDA8AAd0MBwAIHBgACBwYAAHVDAccGAABHQccGAAB3QwHHBkABhwBHRkABhwB1QwZAAYcAd0MGQABHQUcGgAB1QwEHAEdGgAB3QwBHQMcAR0bAAEdAxwB3QwbAAHdDAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAR0B3QweAAHVDB8AAd0MLQACHQgcAR0B1QwMHAgAAd0MAh0HHALdDAwcCQAB3QwBHQccAgAB1QwLHAoAAd0MBxwCAAEdCxwLAAccAgAB3QwKHAEdCwABHQUcAdUMAwAKHAEdCwABHQUcAR0DAAHVDAkcAd0MCwAB3QwB1QwDHAEdAd0MAwAB1QwJHA0AAR0DHAEdBAAB3QwJHA0AAd0MAxwB3QwFAAgcAdUMDgADHAYACBwBHQ4AAdUMARwBHQYAAR0HHAHdDA4AAh0B1QwGAAEdBxwPAAHdDAEdAd0MBgAB3QwHHBAAAd0MCAAHHBkABxwZAAEdBhwZAAEdBRwB1QwZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAR0EHBsAAh0CHAEdGwAB3QwB1QwCHAEdHAAB3QwCHQHdDB0AAh0eAALdDKcBAAHVDA4cAh0LHAHVDAMAAd0MDhwC3QwLHAHdDAQABRwC1QwGHAHVDAIAAdUMChwFAAEdBBwBHQHVDAYcAR0CAAHVDAEdCRwFAAHVDAMcAR0C3QwGHAHdDAIAAd0MAdUMCRwFAAHdDAEdAhwB1QwCAAYcBAAB3QwJHAYAAdUMAR0B1QwB3QwCAAEdBBwBHQUACBwBHQYAAd0MAdUMAR0DAAEdBBwBHQUACBwBHQcAAt0MAwAB3QwBHQMcAd0MBQABHQccAd0MDQABHQMcBgAB1QwGHAEdDgAB3QwBHQEcAR0GAAHdDAYcAdUMDwAC1QwBHQcAAdUMBRwB3QwPAAHdDAEd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CxwB3QwMAAEdAxwBHQMACxwNAAHdDAEdARwB1QwB3QwDAAscDgAB1QwCHQQACxwOAAHdDAHVDAHdDAQACxwPAAHdDAUACxwVAAscFQABHQkcAR0VAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwAJHBcAAdUMCBwXAAEdCBwXAAHdDAgcGAAHHAEdGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBRwBHRoABRwBHRoAAR0EHAHdDBYADRwBAAccAx0GHAEdAQANHAEAAR0GHAPdDAYcAR0BAA0cAQAB1QwBHQQcAR0DAAYcAd0MAQANHAEAAd0MAdUMBBwB1QwDAAYcAgANHAIAAd0MBBwB3QwDAAYcAgANHAMABBwEAAEdBRwCAAEdCxwBHQMAAxwBHQQAAR0FHAIAAR0LHAEdAwADHAEdBAAB3QwFHAIAAd0MCxwB3QwDAAEdARwBHQHdDAUABRwDAAscBAADHQYAAR0DHAEdAwALHAQAAd0MAR0B3QwGAAHVDAMcAR0DAAscBQAB3QwHAAHdDAEdARwBHQHdDAMACxwOAAHVDAIdBAALHA4AAd0MAR0B3QwEAAscDwAB3QwFAAEdCRwB1QwVAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwABHQgcFwABHQccAdUMFwAB3QwHHAEdGAABHQYcAd0MGAACHQUcGQAB3QwBHQUcGgAB3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwXAA0cAQAHHAMdBhwBHQEADBwB1QwBAAEdBhwD3QwGHAHdDAEADBwBHQEAAR0GHAMABhwCAAEdCxwB3QwBAAHdDAUcAR0DAAYcAgABHQscAwAFHAEdAwABHQUcAgAB3QwLHAMABRwB3QwDAAEdBRwDAAscAwAFHAQAAd0MBRwDAAscAwAFHAUABRwDAAscAwABHQIcAh0FAAEdAxwB1QwDAAscAwABHQIcAdUMAR0FAAEdAxwB1QwDAAscAwAB3QwBHQHVDALdDAUAAd0MAR0BHAHVDAHdDAMAChwBHQQAAR0B1QwIAAMdBAAKHAEdBAAC3QwIAAHdDAEdAd0MBAAB1QwJHAHdDA8AAd0MBQABHQkcFgAB3QwJHBcACRwXAAkcFwABHQccAR0XAAHVDAccAdUMFwAB3QwHHAHdDBgABhwBHRkAAx0DHAEdGQADHQMcAd0MGQAD3QwDHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAR0BHB4AAh0YAAEdCxwDHQYcAR0B3QwBAAYcAgAB3QwLHALdDAEdBhwB3QwBAAHdDAYcAwALHAIAAd0MBhwDAAEdBRwDAAscAwAGHAMAAdUMBRwDAAscAwAFHAEdAwAB3QwFHAMAAR0KHAMABRwBHQQABBwBHQMAAR0KHAMABRwB3QwEAAEdAxwBHQMAAd0MChwDAAQcAR0FAAEdAxwB3QwEAAocAwAEHAEdBQAB3QwBHQEcAdUMBQAJHAEdAwABHQIcAR0B3QwGAAMdBQAJHAHVDAMAAR0B1QwBHAHVDAcAAd0MAR0B3QwFAAkcAd0MAwAB3QwBHQEcAd0MCAAB3QwGAAgcAR0FAAHdDAHVDBAACBwB1QwGAAEdEAAIHAHdDAYAAd0MEAAIHBgAAdUMBxwYAAEdBxwYAAHdDAYcAR0ZAAEdBRwB1QwZAAMdAxwB3QwZAAHdDAIdAhwBHRsAAt0MAhwBHR0AAdUMAR0B3QwdAAIdHgAC3QzZAQALHAEAAd0MAR0HHAMABBwEAAEdCRwBHQIAAd0MBxwDAAQcBAABHQkcAR0DAAEdBhwDAAEdAxwEAAHdDAkcAd0MAwABHQQcAR0BHAMAAR0DHAUACRwEAAHdDAQcAR0B3QwDAAIdARwBHQUACRwFAAQcAd0MBAAEHQUACRwFAAQcBQABHQHdDAHVDAHdDAUAAR0IHAUAAxwBHQUAAd0MAQAB3QwGAAEdCBwFAAIcAh0OAAHdDAgcBQACHAHVDAHdDA8ABxwBHQUAAhwB3QwQAAccAdUMBQABHAEdEQAB1QwFHAEdAd0MBQABHAEdEQABHQUcAR0GAAEdAd0MEQAB3QwFHAHdDAYAAR0TAAUcBwAB3QwTAAUcGwAFHBsAAh0CHAEdGwACHQIcAR0bAALdDAIcAd0MHQABHQEcHgAB1QwBHR4AAd0MAdUMHwAB3Qz6AQAB1QwIHAMAAd0MAR0JHAEAAx0FAAEdCBwEAAEdCRwBAAPdDAUAAd0MCBwEAAHdDAHVDAIcAR0B3QwEHAoABxwBHQUAAR0CHAHdDAEABBwKAAccAdUMBQAB3QwCHAIABBwKAAccAd0MBgACHAIABBwKAAccBwACHAIABBwKAAccBwAB1QwBHQIABBwKAAccBwAB1QwBHQIABBwKAAEdBRwBHQcAAt0MAgAEHAoAAR0FHAEdCwABHQMcCgAB3QwCHQMcAd0MCwABHQMcCwAB1QwBHQMcDAAB3QwDHAsAAt0MAhwBHQ0AAxwNAAIcAdUMDQADHA0AARwBHQHdDA0AAxwNAAIdDgADHA0AAR0B3QwOAAMcDQAB3QwPAAMcHQACHAEdHQABHQEcAR0dAALVDAHdDB0AAd0MAR0fAAHdDIgCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gHAAARwfAAHVDB8AAR0fAAHdDJ8HAAEcHwABHB8AAdUMHwABHR8AAd0M/wYAARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wYAARwfAAEcHwABHR8AAdUMHwAB3Qz/BgABHR8AAR0fAAHdDL9vAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("mngAAd0M/gcAAh0B3QwdAAHdDAEdHwAB3Qy/BwAB1QwfAAHdDMo3AAMcAd0MHAABHQEcAR0dAAHVDAIdHQAB3QwBHQHdDB4AAd0M/QYAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAABHQEcAR0dAAIdAdUMHQAB3QwBHQHdDB4AAd0MvQYAAR0EHBsAAd0MAxwBHRwAAxwBHRwAAxwB3QwcAAHVDAEcAR0dAAMdHQAB3QwBHQHdDB4AAd0MngYAAxwB1QwcAAEdAhwBHRwAAR0CHAHdDBwAAd0MARwBHR4AAh0eAAEdAd0MHgAB3Qy/BgAB3QwB1QwfAAHdDNgfAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AwABHQUcAR0EAAHdDAIdAdUMAx0EHAoAAd0MBRwB3QwFAALdDAQdBBwLAAHVDAQcCAAE3QwEHAsAAR0DHAHVDAwABBwLAAHdDAQdDAAEHAwAAdUMAh0B3QwMAAQcDAAD3QwNAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwB1QwdAAHVDAEcAd0MHQACHR4AAd0MAR0fAAHdDLYBAAHdDAUcAR0EHBYABRwB1QwEHBYAAR0DHAEdAd0MBBwWAAEdAxwBHQEABBwWAAHdDAMcAd0MAQAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAhwBHQIAAR0DHBcAAR0BHAHVDAIAAR0DHBcAAdUMARwB3QwCAAHdDAMcFwAB3QwBHQQAAxwYAAEdBAADHBgAAd0MBAADHB0AAhwB1QwdAAIcAR0dAAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AAR0fAAEdHwAB3Qz2AQABHQUcAR0EHBUAAd0MBRwB3QwEHBYABRwBAAQcFgAFHAEAAR0DHBYABRwBAAEdAxwWAAUcAQAB3QwDHBYABRwCAAMcFgAFHAIAAxwWAAUcAgACHAEdFgAEHAHVDAIAAhwBHRYABBwBHQIAARwBHQHdDBYABBwB3QwCAAIdFwAEHAMAAR0B3QwXAAQcAwAB3QwYAAEdAxwcAAHVDAMcHAAB3QwDHB0AAxwdAAMcHQADHB0AAR0CHB0AAR0BHAEdHQAB3QwBHAEdHgABHQHdDB4AAR0fAAHdDNsBAAHdDAEdBRwEHQEcFQAB3QwFHATdDBcABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwcAAQcHAAEHBwABBwcAAEdAxwcAAEdAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAR0BHAHVDB0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDHsAAd0MAR0FHAMdAd0MFgAB3QwFHAPdDBgABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsABBwcAAQcHAAEHBwABBwcAAQcHAAB1QwDHBwAAR0DHBwAAd0MAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHQABHQEcAdUMHQAB3QwBHAEdHgAB1QwB3QweAAEdHwAB3QybAQAC3QwFHAHVDAHdDBkABRwB3QwaAAEdAxwB1QwbAAEdAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAR0BHAHVDB0AAR0B1QwB3QwdAAHdDAEdHwAB3Qyu1AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }])
        };

        function EV(VV, eV, xV) {
          const JV = new wV.c;
          for (const UV of xV) {
            const VV = JV.get(UV.chunkX, UV.chunkY, UV.chunkZ);
            if (!(0, YV.J)(VV)) throw new Error(`Duplicate chunk at ${UV.chunkX}, ${UV.chunkY}, ${UV.chunkZ}`);
            JV.set(UV.chunkX, UV.chunkY, UV.chunkZ, UV.rle)
          }
          return new nV.b(VV, {
            x: 0,
            y: 0,
            z: 0
          }, eV, JV)
        }
        const BV = {
          ruinSnowLarge1: EV("ruinSnowLarge1", {
            x: 37,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gBAAAd0M/wcAAR0B3QweAAEdHwAB+gm/BwABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAdUMAd0MHAACHAEdHQAB1QwBHQHdDB0AAh0eAALdDP4GAAMcAR0cAAIcAh0cAAIcAR0B3QwcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0M/wQAASIfAAEiHwABIh8AASIfAAEiHwABIh8ABBwBHRsABBwB3QwbAAMcAR0cAAIcAh0cAAIcAR0B+gkcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0MnwQAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIeAAQcAR0bAAQcAdUMGwAEHAHdDBsAAxwBHRwAAhwCHRwAAhwB1QwB3QwcAAEcAR0B3QwdAAIdHgABHQHdDB4AAd0MvwMAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4ABRwB3QwaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAhwCHRwAAhwBHQHVDBwAAtUMAt0MHAACHR4AAt0M/gIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAyIeAAIiHgACIh4AASIB3QweAAEiHgAFHAEdGgAFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAAEHRwAAR0B1QwBHQHdDBwAA90M/QIAASIfAAIiHgACIh4AAiIeAAMiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAGHBoABhwaAAUcAR0aAAUcAR0aAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAABHAMdHAABHAEdAdUMAd0MHAAB1QwC3QwdAAEdHwAB3QyfAQABIh8AASIfAAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIfAAEiHwABIh8AASIeAAIiHQAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAEHAEdAd0MGgAEHAEdGwADHAEdAd0MGwADHAEdHAABHAHVDAEdAd0MHAABHAIdHQABHQLdDB0AAR0fAAHdDH8AASIfAAIiHgACIh4AAiIeAAIiHgADIh4AAiIeAAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAEHAHVDAH6CRoABBwBHRsAAxwBHQHdDBsAAhwC1QwcAAEcAh0B3QwcAAIdAd0MHQABHQHdDB4AAd0MfwABIh8AAiIeAAIiHgACIh4AAyIdAAHdDAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwB1QwaAAUcAfoJGgAEHAEdGwADHAIdGwADHAEdAfoJGwACHAEdAd0MHAABHAIdHQABHAHVDAHdDB0AAR0B3QweAAEdHwAB3QxfAAIiHgADIh0AAyIdAAMiHQAB3QwCIh4AAd0MAiIeAAIiHgACIh4AAiIeAAIiHgACIh8AASIfAAHdDDwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAFHAHdDBoABBwBHRsABBwBHRsAAxwBHQH6CRsAAxwBHRwAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAHVDAHdDB4AAd0MPwACIh4AAyIdAAMiHQADIh0AAd0MAyIdAAHdDAIiHgACIh4AAd0MASIfAAEiHwABIh8AAd0MfAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAACHAHVDAHdDBwAAhwBHR0AASIBHAHdDB0AASIBHB4AAiIeAAIiHgADIh0AAyIdAAEiAd0MAiIcAALdDAIiHgACIh4AAiIeAAHdDAEiHwABIh8AASIfAAHdDJwBAAYcGgAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAFHAHdDBoABRwbAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAASIBHAHVDAHdDBwAAiIBHR0AAiIB3QwdAAIiHgACIh4AAyIdAAQiHAAEIhwAAt0MAiIeAAIiHgAB3QwBIh8AASIfAAEiHwABIh8AAd0MnAEABhwaAAYcGgAGHBoABhwaAAUcAdUMGgAFHAEdGgAFHAHdDBoABBwBHRsABBwBHRsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAABIgEcAR0dAAIiAR0dAAIiAd0MHQABHAEiHgABHAIiHQABHAIiHQABHQMiHAABHQMiHAAB3QwDIh0AAt0MASIfAAEiHwABIh8AASIfAAIiHgAC3QybAQAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAH6CRwAAhwBHR0AASIBHAHVDB0AAiIB3QwdAAIiHgADIh0AAyIdAAMiHQAEIhwAAd0MAyIdAALdDAEiHwABIh8AASIfAAEiHwACIh4AAiIeAAEiAd0MHgAB3QxcAAYcGgAGHBoABRwBHRoABRwBHRoABRwB+gkaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAAxwB3QwcAAIcAR0dAAIcAR0dAAEiARwB3QwdAAIiHgACIh4AAiIeAAMiHQADIh0AAyIdAAQiHAAC3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AASIB3QweAAHdDDwABhwaAAUcAR0aAAUcAR0aAAUcAd0MGgAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAADHAEdHAADHAHVDBwAAxwB3QwcAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAEiARweAAIiHgACIh4AAiIeAAMiHQADIh0ABCIcAAHdDAMiHQAB3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AAiIeAAEiAd0MGwAFHAEdGgAFHAHVDBoABRwB3QwaAAQcAdUMGwAEHAHVDBsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAADHB0AAxwdAAIcAR0dAAIcAR0dAAEcAR0B+gkdAAEcAR0eAAEcAd0MHgABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQAEIhwABCIdAAMiHgACIh4AAiIfAAEiHwABIh8AAiIeAAEiAd0MHgABIhwABRwBHRoABRwB1QwaAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAADHAHdDBwAAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AARwBHR4AARwBHR4AARwB3QweAAEiHwABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQADIh0AASIBAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAR0cAAMcAd0MHAACHAHVDB0AAhwB1QwdAAIcAd0MHQACHB4AAhweAAEcAR0eAAEcAR0eAAHVDAHdDB4AAR0fAAHdDD8AASIfAAEiHwACIh4AAyIdAAMiHQADIh0AAyIeAAIiHwACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAEHAEdGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAHdDBwAAhwB1QwdAAIcAR0dAAIcAfoJHQABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHR8AAdUMHwAB3Qx/AAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAEHAEdGwAEHAH6CRsAAxwB1QwcAAMcAR0cAAIcAR0B3QwcAAIcAR0dAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0M3wEAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIfAAEiHwACIh4AAiIeAAIiHQADIh0ABBwBHRsAAxwBHQHdDBsAAhwCHRwAAhwB1QwB3QwcAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgADHAEdHAACHAIdHAACHAEdAd0MHAABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDL8DAAEiHwABIh8AASIfAAEiHwABIh8AASIfAAEiHwABIh8AAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AARwBHR4AARwB3QweAAEdHwABHR8AAd0MnwYAAhwB3QwdAAEcAR0eAAEcAR0eAAEdAd0MHgAB1QwfAAHdDN8GAAEcAd0MHgAB1QwfAAEdHwAB+gmfBwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("DgAC3QwJIgLdDBUACd0M0wcAAd0MDyIB3QwQAA8iEQAC3QwLIgLdDBMAC90MoAcABCIPABAiAd0MDwAPIgHdDBAAA90MCSID3QwUAAciAt0MFwAH3QzRBgACIhIAAyIJAAHdDAIiEAADIgHdDAoAAd0MAyILAAUiAd0MDAAB3QwRIgHdDA4AAt0MBiID3QwEIgLdDBEADd0MzQYAAd0MAiITAAIiCQADIhEAAyIJAAHdDAMiDwADIgHdDAoAAd0MBiICAAsiAd0MDAAC3QwBIgPdDAIiB90MAiIC3QwPAAXdDAEiCd0MEwAL3QyuBgACIhUAAiIHAAMiEwADIgcAAd0MAyIRAAMiAd0MCAAB3QwHIgcAByIB3QwKAAHdDAIiBN0MByIF3QwBIgHdDAwAB90MASIL3QwPAA/dDKsGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAHdDAYiCwAGIgHdDAgAAd0MAyIC3QwLIgTdDAEiAd0MCgAC3QwBIgXdDAEiDN0MDQAR3QwVAAXdDI8GAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwCIhUAAiIHAAQiEAAFIgcAAd0MByIJAAMiAt0MAiIB3QwIAALdDAIiA90MCSIH3QwLABPdDBEAC90MjAYAAiIeAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwDIhIABCIHAAHdDAYiCwADIgHdDAIiAd0MCAAB3QwCIgPdDAsiBN0MASIB3QwKABXdDA8ADd0MiwYAAiIeAAIiHgAB3QwCIhcAASIGAAUiEgADIgYAAd0MASID3QwBIg8ABSIHAAXdDAMiCQADIgLdDAEiAt0MCQAG3QwJIgbdDA4AD90MiQYAAiIeAAHdDAIiHgADIhcAASIFAAHdDAQiEwADIgYABN0MAiIPAAIiAt0MASIHAAXdDAIiCwACIgXdDAgABt0MCyIG3QwMABHdDIgGAAIiHgADIh0AAd0MAiIeAAQiFQACIgUAAd0MASIC3QwCIhEAAiIC3QwGAAXdDAIiDQACIgTdDAcABt0MBCIFAAQiBt0MCwAG3QwFAAbdDIcGAAMiHQAB3QwCIh4AAyIdAAHdDAQiFQACIgUAAd0MASIC3QwBIhMAASIC3QwGAATdDAIiDwACIgPdDAcABd0MBCIHAAQiBd0MCAAI3QwHAAXdDIcGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGAABIgUAAd0MBCITAAIiAd0MBgAE3QwCIg8AAiID3QwHAAXdDAMiCQADIgXdDAgAB90MCQAF3QyGBgACIh4AAiIeAAHdDAIiHgADIhgAASIEAAHdDAUiEwADIgUAAd0MAyIB3QwCIg8AAiID3QwGAALdDAEiA90MAiILAAIiBd0MCAAG3QwLAAXdDIUGAAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAEiHwACIh4AAyIdAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAHdDAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MBCIVAAIiBQAB3QwCIgHdDAIiEQACIgLdDAYABd0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAIiHgACIh4AAyIdAAHdDAIiGQABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAIiEQACIgLdDAYABd0MAyILAAMiBN0MBwAH3QwLAAXdDIUGAAIiHgACIh4AAd0MAiIeAAMiGAABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAMiDwADIgLdDAYABt0MAiILAAIiBd0MBwAH3QwLAAXdDIUGAAIiHgAB3QwCIh4AAiIeAAMiGAABIgQAAd0MBSITAAIiAd0MBQAB3QwBIgPdDAIiDwACIgPdDAYABt0MAyIJAAMiBd0MCgAF3QwJAAXdDIcGAAIiHgACIh4AAyIdAAHdDAMiFgACIgUAAd0MBSIRAAIiAt0MBgAB3QwBIgPdDAIiDQACIgTdDAcABt0MDSIG3QwKABPdDIcGAAHdDAIiHgACIh4AAyIXAAEiBQAB3QwCIhUAAyIGAAHdDAUiDwACIgLdDAEiBwAB3QwBIgPdDAMiCQADIgXdDAgAB90MCSIH3QwMABHdDIkGAAMiFwABIgUAAyIXAAEiBQAB3QwDIhUAAiIGAAHdDAIiEwAEIgcAByIMAAIiA90MASIHAAHdDAEiBd0MDCIG3QwIABfdDKcGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAQiDwAGIgcAAd0MCyICAAUiBt0MCAAB3QwBIgndDAIiA90MAiIF3QwKABXdDKkGAAMiEwADIgcABCIRAAQiBwAB3QwEIg8ABCIB3QwIAAoiAwAKIgkAAt0MAiIF3QwKIgTdDAsAAd0MASIF3QwJIgPdDA4AEd0MrAYABiILAAYiCQAB3QwIIgUACCIB3QwKABUiCwAB3QwTIgHdDAwAAt0MASID3QwLIgLdDA8AD90M0AYAESIB3QwOABEiDwAC3QwNIgLdDBEAAd0MCyIB3QwUAAvdDOcGAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gDAAASIfAAHdDN8HAAEiAd0MHgABIh8AAd0MvwcAAiIeAAEiAd0MHgABIh8AAd0MnwcAAiIeAAIiHgABIgHdDB4AASIfAAHdDIAHAAIiHQACIgHdDB0AAiIeAAEiAd0MHgAB3QyABwACIh0AAyIdAAIiAd0MHQACIh4AASIB3QweAAHdDOAGAAIiAd0MHQACIh0AAyIdAAIiAd0MHQABIgHdDB4AAd0M4QYAASIB3QwdAAIiHgACIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh8AASIeAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh4AAiIdAAMiHQACIgHdDB0AAt0MHgAB3QyABwACIh0AAyIdAAHdDAEiAd0MHQAC3QweAAHdDIAHAAIiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAASIfAAEiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAAiIeAAEiAd0MHAADIh0AA90MHQAC3QweAAHdDOEGAAIiHgACIhwAAyIB3QwcAAPdDB0AAt0MHgAB3QzCBgABIh4AAiIeAAIiHAADIgHdDBwAA90MHQAC3QweAAHdDMEGAAIiHgACIh0AAyIcAAMiAd0MHAAB3QwBIgHdDB0AAt0MHgAB3QzBBgACIh4AAiIdAAIiAd0MHAADIh0AAiIB3QwdAAEiAd0MHgAB3QzBBgACIh0AAiIB3QwdAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzABgACIh4AAiIdAAMiHQACIgHdDB0AASIB3QweAAHdDN8GAAIiAd0MHQACIh4AAiIeAAEiAd0MHgAB3Qz/BgACIh4AAiIeAAEiAd0MHgAB3QyfBwABIh8AAd0M3x8A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("BwACHRYcAR0HAAHdDAEdFRwCHQgAAd0MFRwB1QwB3QwJAAEdExwBHQHdDAoAAdUMAR0B1QwRHAHVDAsAAd0MAx0PHAEdAd0MDAAC3QwBHQHVDA0cAh0PAAHdDAIdCxwBHQHVDAHdDBAAAd0MAdUMChwBHQHVDAHdDBIAAd0MAh0GHAMdAfoJFAADHQHVDAMcAh0B1QwB+gkVAALdDAMdAhwBHQLdDBgAAt0MAx0B3QwcAAHdDAIdHgAC3QyaAQAHIhYADSITAA4iEgAPIhEAAyIB3QwBAAPdDAciEQABIgLdDAUAAd0MByIQAAHdDAkAAd0MBSIZAAciFwAIIgHdDBYACSIWAAoiFAAMIhEADiIB3QwLAAH6CQEdFRwB1QwB3QwIAAHdDAEdExwCHQoAAR0B1QwBHRAcAdUMAR0B3QwKAAHdDAHVDAIdDxwBHQHdDAwAAt0MAh0NHAEdAfoJDwAB+gkCHQkcBB0RAAHdDAIdAdUMBxwCHQHVDAHdDBIAAd0MAx0FHAEdA90MFAAC3QwFHQHVDAEdGQAB3QwEHQHVDAHdDBoABd0MugIABSIaAAciGQAJIhcACiIWAAPdDAciGQAB3QwGIhoAAd0MBSIaAAUiAd0MGQAEIgLdDBoABCIcAAMiAd0MHAAB3QwBIgHdDBMAAh0RHAIdAfoJCgAC3QwCHQ4cAdUMAR0B3QwNAAEdAdUMAh0KHAMdAd0MDgAC3QwC1QwBHQgcAx0B3QwRAALdDAIdBhwBHQHVDALdDBQAAd0MAdUMBRwCHQHdDBcAAd0MAx0BHAHVDAEdAd0MGQABHQHVDAIdAdUMAd0MGgAB+gkC3QwB1QwB3QweAAHdDNYFAALVDAIdCxwCHQ8AA90MAh0IHAMdAd0MEgAB3QwCHQUcBB0B3QwUAAHdDAIdAdUMAhwDHQLdDBYAAd0MBR0C3QwZAALdDAIdAd0MHQAC3Qy4BgAB3QwDHQHVDAMcBB0B3QwUAAH6CQHdDAgdAd0MFwAC3QwDHQPdDBoAAvoJAd0Mi98BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("Ad0M/wcAAfoJ//cBAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("DQANIgHdDBIAAd0MCyIB3QwUAAsiFQAL3QybBwAB3Qzr9wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          ruinSnowLarge2: EV("ruinSnowLarge2", {
            x: 37,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gEgAARwfAAHVDB8AAR0fAAHdDJ8HAAIcHgACHB4AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BAACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wMAAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAH6CR4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8DAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDN8DAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8EAAIcHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQABHB8AAR0fAAEdHwAB+gmfBwAB+gn/BwABHAEdAfoJHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDJ8GAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDP8DAAQcHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8CAAQcHAAEHBwABBwcAAQcHAAEHBwAAxwBHRwAAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAEcAdUMHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDL8CAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAMcAR0cAAMcAR0cAAMcAfoJHAADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgABHAHVDB4AARwB1QweAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MPwAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAEcAR0eAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAHVDB8AAR0fAAHdDD8ABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAH6CR0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AAR0fAAEdHwAB3QxfAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgAB1QwB3QweAAEdHwAB3Qz/AQADHAEdHAADHAEdHAACHAEdAd0MHAACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAAhwBHQH6CRwAAhwBHR0AARwB1QwB3QwdAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/AwABHAEdAfoJHQABHAHdDB4AAR0fAAEdHwAB3Qz/FgA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("hBAAAR0fAAHVDB8AAd0MvgcAAR0BHAEdHQAB+gkBHAEdHgABHQHdDB4AAR0fAAH6Cf8GAAHdDIQwAAYiAd0MGQAC3QwEIhwABN0MtwcABiIDAAEiAt0MFAAC3QwHIgHdDBgAAt0MBSIbAAXdDJYHAAMiCQAC3QwSAAUiGwAB3QwKIhYAAt0MCCIYAAjdDPMGAAQiCwACIg8AAd0MBCIKAALdDBAACCIYAALdDAoiFgAC3QwIIhgACN0M0gYAAd0MAyINAAEiAd0MDgAEIgEtCwAB3QwPAAkiFwAC3QwMIhQAAt0MCSIB3QwWAAndDNIGAAMiDgACIg0ABCICAAEtCgABIgHdDA0AAd0MBiIBLQkAAd0MDwAB3QwJIgQAASISAALdDAwiFAAC3QwHIgPdDBYAB90MswYAAiIPAAIiDQADIg4AASIB3QwNAAHdDAUiAS0KAAHdDA8AAd0MBiIaAALdDAwiFAAC3QwJIgHdDBYACd0MsQYAASIRAAEiAd0MDAACIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAEiAd0MEAAC3QwNIhMAAd0MCiIC3QwUAArdDLAGAAHdDAEiEQABIgHdDAwAAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCQACIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QyvBgAB3QwBIhEAASIB3QwMAAIiDwACIg0AAd0MBCIMAAEiAd0MDgAB3QwFIgkAAiIQAALdDA0iAd0MEgAB3QwLIgHdDBQAC90MrwYAAiIRAAEiAd0MCwAB3QwCIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAIiEAAC3QwNIgHdDBIAAd0MCyIB3QwUAAvdDK8GAAIiEQABIgHdDAsAAd0MAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCAADIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QywBgACIg8AAiIJAAHdDAMAAiIPAAIiDQAB3QwEIgsAAiIB3QwOAAHdDAUiBQAGIhAAAt0MDSIB3QwSAAHdDAoiAt0MFAAK3QyxBgACIg8AAiIHAAHdDAMdAgAB3QwCIg4AASIB3QwIAAMdAwAEIgsAAiIJAAH6CQLdDAMAAd0MByIBAAciAd0MEAAC3QwNIhMABN0MByIC3QwXAAfdDLEGAAHdDAIiDgABIgHdDAcAAd0MAhwB3QwDAAIiDQACIgkAAR0BHAQAAd0MAyIJAAQiCQACHQUAAt0MDSIB3QwJAAHdDAHVDAcAAd0MCyIB3QwLAAHdDAgAC90M0QYAAd0MASIB3QwMAAIiCQAB1QwBHQUAAd0MDQACIgkAAR0B3QwRAAMiAd0MCQAB3QwLAAkiAd0MFgAC3QwGIgHdDBkABt0M1AYAAt0MCgACIh0AAyIXAAgiAd0MFwAHIgHdDBgAB90M9gYAAt0MAyIDAAQiFgAC3QwHIgHdDBgABiIB3QwZAAbdDJgHAAgiGAAC3QwFIgHdDBoABd0MsB8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("BQABHQccAd0MAfoJAQALHAHdDAkAAd0MBxwDAAHVDAkcAR0LAAccAwABHQkcAdUMCwAHHAMAAd0MCRwB3QwLAAccBAAJHAwABxwEAAgcAR0MAAccBAAIHAHVDAwABxwEAAgcAd0MDAAHHAQAAR0HHA0ABxwEAAHVDAccDQAB1QwGHAQAAd0MBxwNAAEdBRwBHQUABxwNAAHdDAUcAR0FAAccDgAFHAHdDAUABhwBHQ4ABRwGAAHVDAUcAdUMDgAFHAYAAR0EHAEdAd0MDgAFHAYAAd0MAxwCHQ8ABRwHAAIdARwBHQHdDA8ABRwHAAHVDAIdAfoJEAAFHAcAAt0MAR0RAAEdBBwJAAHdDBEAAR0EHBsAAd0MBBwcAAMcAR0cAAMcAR0cAAMcAd0MHAABHQIcHQABHQIcHQAB3QwCHB4AAh0eAAEdAdUMHgAB+gkB3QwaAAHdDAccAfoJAgAJHALVDAH6CQoABxwDAAHVDAgcAR0B3QwLAAccAwACHQccAd0MDAAHHAMAAd0MAR0HHA0ABxwEAAHdDAYcAR0NAAccBQAGHAEdDQAHHAUABhwB3QwNAAccBQAGHA4ABxwFAAEdBRwOAAccBQABHQUcDgAHHAUAAfoJBRwOAAccBgAEHAEdDgAHHAYABBwBHQ4AAR0FHAEdBgAEHAHdDA4AAR0FHAHVDAYAAh0BHAEdDwAB3QwFHAHdDAYAAx0B1QwQAAUcBwAC3QwBHQHdDBAABRwJAAHdDBEABRwbAAUcGwAFHBsABRwbAAUcGwABHQQcGwABHQMcAR0bAAHdDAMcAR0cAAMcAd0MHAADHB0AAdUMAhwdAAEdAhwdAAHdDAEdARweAAHVDAEcGgAB+gkHHAQAAdUMBhwCHQwABxwEAAH6CQYcAR0B3QwMAAccBQABHQUcAfoJDQAHHAUAAdUMBRwOAAccBQAB3QwEHAHVDA4ABxwGAAMcAh0OAAccBgADHAEdAd0MDgAHHAYAAxwB3QwPAAccBgABHQIcEAAHHAYAAx0QAAccBgAB3QwB1QwBHRAAAR0FHAEdBwAB+gkB3QwQAAEdBRwBHRkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAh0CHAEdGwAB+gkBHQIcAd0MHAAB3QwCHB4AAhweAAIcHgACHR4AAh0eAAHdDAH6CRsABxwFAAHdDAHVDAMcAR0B3QwB+gkMAAccBgABHQIcAR0B3QwOAAccBgAB3QwCHAEdDwAHHAcAAhwB3QwPAAEdBRwBHQcAAh0QAAEdBRwB1QwHAAIdEAAB3QwFHAHdDAcAAt0MEQAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAxwdAAMcHQABHQEcAdUMHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MnAEABhwaAAEdBRwaAAEdBRwaAAHdDAUcGwAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAEdARwBHR0AAdUMARwBHR0AAd0MAR0B3QweAAEdHwAB3QyW3AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("iQgAAd0MAR0fAAEdHwAB3Qy19wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          ruinSnowMedium1: EV("ruinSnowMedium1", {
            x: 13,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinSnowMedium2: EV("ruinSnowMedium2", {
            x: 34,
            y: 21,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          ruinSnowSmall1: EV("ruinSnowSmall1", {
            x: 12,
            y: 7,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("gQgAASIBhgEGAAEiGAAB3gzeBwABjAUBIgEABd0MAQABIgGMBRUAASMJAAEjFQABgQEJAAGBAR8AAYYBHwAB3gz2BgABIgXdDAECAd0MGgAF3QwdAAHfDLsHAAPdDAECAd0MAwIB3QwYAALdDAGMBQHdDAGMBQLdDBwAAdAFugcAAd0MAgIBzgEC3QwEAgHdDBYAAt0MAYwFAt0MAowFAt0MGgABzwUBjAUBzQUBAAHfDBwAAdEFmgcAAd0MAwIC3QwEAgHdDBYAAt0MAQIB3QwBzwEBAgPdDBcAAd8MAgABzwUB0QwBzQUeAAHRBZoHAAHdDAUCAd0MAwIB3QwWAAPdDAKMBQLdDAECAd0MGQAB3wwBzwUBjAUBzQUeAAHRBZsHAAHdDAICAd0MAQIB3QwCAgHdDBgAA90MAYwFAd0MAQIB3QwcAAHOBQIAAd8MtwcAAiIH3QwaAAXdDBwAAd8MuwcAAYwFAQABIgXdDAIAAYwFFQABIwkAASMVAAGBAQkAAYEBFQABhgEfAAHeDIAHAAEiBgACIvWnAQA=")
          }]),
          ruinSnowSmall2: EV("ruinSnowSmall2", {
            x: 14,
            y: 19,
            z: 14
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("gQgABd0MAx0F3QwYAAHdDAHVDAH6CR4AAd0MuQcAAt0MAx0FHAPdDBUACB0CAAHfDBUAAfoJAt0MAdUMAx0B1QwbAAEdA90MAR0bAAGIAQEAAdEMAd8MAYEBGwABgQEDAAGIARsAAYEBAwABiAEbAAGIAQMAAYEBGwABiAEDAAGBARsAAoEBAQACgQEcAAKIAQGBAbcFAAHdDAEdCRwC3QwUAAHdDAMdBBwCHRcAAx0C1QwEHRcAA90MAR0C1QwBHQLdDJUHAAHdDAEdCRwBHQHdDBQAAR0B1QwHHAEdAfoJFQAB3QwFHQHVDAMdFwAB3QwBHQHVDAQdAdUMAd0MGAAB+gkC3QwDHAHdDAHfDPUGAAHdDAEdCRwBHQHdDBQAAh0HHAIdFQAB3QwCHQHVDAIdAdUMAx0B3QwVAAHfDAHdDAcdAd0MGAAD3QwDHAHdDBsAAd8MAxwB3wwdAAHPAbgGAAEdAdUMCRwB1QwB3QwTAAHdDAHVDAkcAR0VAAHdDAHVDAgdAd0MFgAEHQLVDAMdFwAD3QwEHAHVDAH6CRgAAd8MAQAEHAHdDBsAARwB3gwBHAHeDBwAAhwB3gwBHRwAAR0B3gwBHAHeDBwAAR0BHAHeDAHVDBwAAd0MAd4MAdUMAR0dAAIdAd0MHQABHQHdDB4AAd0M2QQAAh0JHAEdAd0MEwAB3QwBHQkcAR0VAAHdDAQdAdUMBB0B3QwWAALVDAUdAtUMAd8MFgAD3QwFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwACHAHMAQEcHAACHAIdHAACHAIdHAABHAEdAt0MHAACHR4AAR0B+gkeAAHdDJoEAAEdAdUMCRwBHQHdDBMAAd0MAR0JHAEdFQAB3QwFHQHVDAMdAd0MFgAC1QwCHQHVDAQdFwAB+gkC3QwFHAHdDBkAAd8MBRwbAAUcGwAEHAEdGwAEHAHVDBsABBwB3QwbAAEcAR0BHAEdHAABHAMdHAABHQHdDAEdAd0MHAABHQEAAd0MHQAB3Qy6BAABHQHVDAkcAR0B3QwTAAHdDAEdAdUMBxwCHQHfDBQAAd0MAR0B1QwBHQHVDAUdAd0MFQAB3wwB3QwDHQPVDAEdAd0MGAAC3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAABHQEcAh0cAAEdARwBHQHdDBwAAfoJAR0B3QweAAEdHwAB3Qy5BAAB1QwBHQkcAdUMAd0MEwAB+gkBHQHVDAccAtUMFQAB3QwJHQH6CRYAAd0MBx0B3QwYAALdDAHVDAMcAR0B3wwYAAHfDAEAAdUMAxwB3QwbAAHdDAEdARwBHR0AAh0B1QwdAAHdDAHVDAHdDB4AAfoJ2AUAAd0MAdUMCRwBHQHdDBQAAd0MAh0EHAQdFgADHQLVDAQdAd0MFgAB+gkB3QwEHQPdDBkAAt0MAvoJAQAB3wz2BgAC3QwBHQccAh0B3QwVAAcdAdUMAR0B3QwWAAHdDAMdAtUMAh0B+gkYAAHdDAH6CQXdDBwAAd8M+QYAA90MCB0C3QwWAAHdDAIdBd0MGQAC3Qy5lwEA")
          }]),
          ruinSnowSmall3: EV("ruinSnowSmall3", {
            x: 13,
            y: 14,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("BAAC3Qz7BwAD3QwB1QwDHQLVDBoAAfoJBd0M1gcAAt0MAdUMBR0C1QwBHQHdDBYAAh0B1QwBHQXdDBcAAfoJA90MugcAAt0MAdUMAR0DAgHVDAEdAdUMAh0WAAEdAdUMAwIDHQLdDBYAAt0MAR0BLgHVDAHdDAH6CQHdDBsAAYEBHwABiAEfAAGBAR8AAYYBHgABgQECiAEeAAGIAfoFAAHdDAHVDAMCAdUMAwIB1QwBHQHVDBUAAd0MAwIBHQMCAh0B3QwWAAEdAdUMAR0B3QwBgQEBHQECAt0MFwABiAEBzQEEAAGIARkAAYEBBQABiAEZAAGBAQUAAYgBGQABhgEFAAGGARkAAYgBAYEBAwABgQEBiAEZAAGBAQUAAYgB9wUAAd0MAdUMAQIB1QwDAgEdAQIBHQHVDAEdFQAB1QwBAgEdAwIBHQECAh0B3QwVAAHdDAEdAd0MA+MHAd0MAR0B3QwB+gmXAQABiAEFAAGBAZcGAAHdDAcCAdUMAQICHRUAAR0GAgEdAQIBHQHdDBUAAR0B1QwF4wcB3QwBHQHdDBYAAYEBfwABiAEHAAGBAZYGAAHdDAcCAR0BAgEdAd0MFQABHQYCAdUMAQIBHRYAAR0B1QwC4wcB0QwC4wcB3QwBAgHdDBYAAYgBBwABgQEXAAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGIAQcAAYEBFwABiAEHAAGBAfYFAAHdDAECAR0HAgEdAd0MFQACHQcCAd0MFgAB1QwB3QwF4wcCHZcBAAGIAQcAAYEBlgYAAd0MAdUMBwICHRYAAd0MBwIB3QwB+gkXAAIdA+MHAdUMAR2ZAQABgQEFAAGBAZcGAAHdDAIdAQIBHQECAdUMAgIB3QwXAAH6CQHdDAECAR0BAgEdAQIBHRkAAh0B3QwBHQHdDAHVDAEdGQABiAEFAAGBARkAAYgBBQABgQEZAAGIAQUAAYEBGQABhgECAAGBAQIAAYYBGQACgQEBAAHPAQEAAYEBAYgBGQABgQEFAAGIAfgFAAMdAdUMAR0B1QwBHQHdDBgAAt0MBB0B3QwbAAHdDAMdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGIAQKBAR4AAYgB/QUAAd0MAx0B3QwcAAHVDAH6CQHdDB0AAfoJu58BAA==")
          }]),
          ruinSnowSmall4: EV("ruinSnowSmall4", {
            x: 11,
            y: 9,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AwAH3Qz5BwABHAPdDAEdARwC3QwYAAEcAwAB3QwBHRoAARwEAAEdGgABHAQAAd0MGgABHP4GAAUdAxwBHQHdDBYAASID3QwCHQHVDAIdFwABIgMAAd0MAx0B3QwXAAEiBAAD3QwYAAEiBgABHfcGAAEiAdUMBB0CHAEdARwB3QwVAAEiAtUMBx0WAAEiBd0MAR0B1QwB3QwBHRYAASICAAHQBQIAAt0MAQIB3QwdAAEdAYwFAdUMHwAB0wXVBgAB3QwBHQHVDAMdAdUMAhwBHQEcAR0VAAHVDAIdAd0MAtUMAR0B1QwCHQHVDBUAA90MAYwFAt0MAdUMAR0BjAUBHQHdDBcAAc8FAYwFAc0FAd8MAt0MAYwFAd0MGQAB0QUDAAHVDAGMBQHVDB8AAdMF1QYAAd0MBB0B1QwBHQIcAdUMARwBHRUAAd0MAh0B3QwFHQHVDAEdFgAC3QwBzQEC3QwCHQHdDAEdAd0MFwABzwUB0QwBzQUBAALdDAECAd0MGQAB0QUDAAEdAYwFAR0fAAHTBdUGAAHdDAYdBBwB1QwVAAHdDAHVDAEdAd0MBx0VAAHfDALdDAGMBQLdDAHVDAEdAdUMAR0B3QwXAAHPBQGMBQHNBQEABN0MAd8MGAAB0QUEAAEd9wYABB0B1QwBHQQcAdUMFQAB3QwBHQHVDAYdAdUMAR0WAAXdDAQdAd0MGAABzgUBAAHfDATdDB0AAd8M+QYAAR0B1QwIHRYAAt0MBB0B1QwCHQHdDBgAB90MuAcAAdUMAR0C1QwEHQEiFwAI3QwBIhgAAd8MAgAB3wwDAAEcHwABHJkHAAXdDAEiHwABIh8AASK1rwEA")
          }]),
          ruinStoneLarge1: EV("ruinStoneLarge1", {
            x: 26,
            y: 33,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          ruinStoneLarge2: EV("ruinStoneLarge2", {
            x: 38,
            y: 31,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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AAEjBgABHQGBAQEAAdwBAQABgQEGAgGBAQESAhgCEgGBAQYAAdwBBwABHQGBAQHcAQEAAYEBBgIBgQEFAAGBAQ8AAR0B3AEBAAGBAQYCAYEBBQABgQEQAAEdAoEBBgIBgQEFAAGBAREAAR0BiAEFEgECAYEBAQABGAISAQABgQETAAHdAQMAAaAIAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQGBAQEAAYgBA4EBAhICGAESAYEBGQABgQEFAAGBARkAAYEBBQABgQEZAAGIAQUAAYEBGQABgQEBAAESAQABEgEAAYcBGQABhwEFAAGHARkAAYEBBQABhwEZAAGIAQUAAYEBGQABhwECEgEAAhIBgQEZAAGBAQEwAgABiAEBAAGBARkAAYEBAogBAwABiAHGAQABAgEAAQIBAAYCAQAKAgIAAQIIAAGzBwuBAQEjAwIBgQECAgEjBIEBAbMHASMGAAEcBQIBgQEFAgEjARwDgQECHAEjAYEBAwABgQEBIwYAAR0FAgGBAQUdASMCgQEBHAOBAQEjAYEBAwABgQEBIwYAAYcBBQIBHAQAAdwBAbMHAYEBAYgBAoEBAYgBAYEBASMCgQEBAAGBAQGHAQEjBgABgQEFAgEdBAAB3AEBHQKIAQGBAQGIAQKBAQEjAYcBAYEBASMCgQEBIwYAA4EBAQABiAECgQEEAAHcAQGIAQaBAQEjA4cBAoEBASMGAAEjBgABHQMAAdwBAYEBBgIBgQEChwEDgQEBIwYAAYEBBwABHQIAAdwBARwGAgWBAQGIAQEjDwABHQEAAdwBAYEBBgICgQECiAECgQEBIxEAAdwBAYEBBgIGgQEBIxEAAR0BgQEDEgEYARIBAgaBAQEjEQAB3gEB3QEFAAOBAQGIAQGABAGIAQGBAQEjEgAB3QEFAAGBAQGIAQKBAQGIBAGIAQGBAQEjEgAB3QEFAAGIAQOBAQEjAoEBASMSAAHdAQOBAQEAAoEBASMFgQEBIxIAAd4BBgABIwGzBwMAAYcBASMZAAEjAYcBAwABhwEBIxkAASMBhwEBgQEBAAKBAQEjGQABIwGBAQGIAQEjAoEBASMZAAEjAoEBAYgBAYcBAYEBASMZAAEjA4EBAYcBAYEBASMZAAEjAYEBAYgBAYcBAogBASMZAAEjAYcBBIEBASMZ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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gJUBAAGBAR8AAR0fAAEjHwABiAGfAgACAh4AA7MHAYEBHAABHQGzBwGHAR0AAh0BswcdAAGBAQEdAYcBHQABhwEBHR4AAocBHgABhwEBgQEeAAKBAR4AAoEBHgACgQEeAAKIAR4AAYgBHwABgQEfAAGHAR8AAYEBHwABIx8AAYgBHwABhwEBAAJkHAABgQEBAAJkHAADgQEBZBwAA4EBHgACIx8AAYEBnQIAAQIBAAICHAABgQEBswcBgQEBhwEcAAKBAQKHARwAAYEBAocBAR0cAAKBAQGzBx0AA4EBHQABhwECgQEdAAOBAR0AA4EBHQABgQEBiAEBgQEdAAOBAR0AAYEBAocBHQABgQEBhwEBgQEdAAKIAQGBAR0AAYcBAYEBAYgBHQABhwEBgQEBiAEdAAGHAQIjHgAChwEeAAGBAQGIAR4AAYgBAYEBHgACgQEBZBwAAYcBAYgBAoEBHwABI74CAAECHQAEgQEcAAOBAQGHARwAA4EBAYcBHAAEgQEcAAOBAQGzBxwABIEBHAADgQEBiAEcAAOBAQGIARwABIEBHAADgQEBiAEcAASBARwABIEBHAADgQEBhwEcAAGBAQKIAQGHARwAAYcBAYgBAYEBAYcBHAABiAEBgQEBAAEjHwABgQEfAAGHAR8AAYgBHwABgQEcAAGIAQGHAQGIAQGBAd4CAAICHAAEgQEcAASBARwAA4EBAYcBHAAEgQEcAASBARwABIEBHAAEgQEcAAOBAQGIARwABIEBHAADgQEdAASBARwAA4EBAYgBHAAEgQEcAAGBAQKIAQGBARwAARwBiAEeAAGHAQGIAZ4BAAGBAQGIAd4CAAECAQACAhwABIEBHAAEgQEcAAOBAR0AA4EBHQADgQEdAAKBAQGIAR0AA4EBHQAEgQEcAASBARwABIEBHAAEgQEcAAKBAQISHAABgQEBiAEeAAGHAQGIAR4AAYgBAYEBvgEAAYgB4QIAAQIdAAOBAQECHAACgQEBAgEdHAADgQEdAAKBAR4AAoEBHgACgQEeAAOBAR0ABIEBHAADgQEdAASBARwAA4EBAYgBHAACEgEYARIcAAGBAQGIAR4AARwBgQHeAQABiAHfAgABAgEAAgIcAAKBAQECAbMHHAABgQECAh0AAoEBAQIdAAKBAR4AAoEBHgACgQEeAAOBAR0AA4EBHQADgQEBiAEcAASBARwABIEBHAACEgEYARIcAAKBAf4BAAGBAd8CAAECAQACAhwAAYEBAgIBswccAAGBAQECAR0dAAGBAQGzBx4AAQIfAAGBAR8AAoEBHgABgQEBiAEBgQEdAAOBAQGIARwABIEBHAAEgQEcAASBARwAARIBGAISHAADnQjeBAACAh0AAYEBAQIBswcdAAGBAQGzBx4AAQIfAAEdPwABgQEfAAGBAR8AAYEBAYgBHgABiAEDgQEcAAOBAQGIARwAA4EBAYgBHAACEgEYARIcAAGdCN8EAAICHgACAgGzBx0AAQIBswceAAEdXwABgQG/AQABGAIS/QQAAwIdAAICAbMHHQACswe+AgABEv8EAAICHgACswfeDwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("CAACAgIABQIIAAMCCwABZAGzBwEjA7MHAoEBASMBHQYAAWQDgQEBswcMAAEdASMDswcCgQEBIwGzBwYAAWQDgQEBswcMAAEcASMBHQGzBwKIAQGBAQEjCAABiAEEgQELAAHdAQEjAYcBAYgBARwCgQEBIwcAAogBA4EBAYgBCwAB3QEBIwGBAQMcAYEBASMHAAGHAQWBAQsAAd0BASMCgQEBHAGIAQGHAQEjBgABHAaBAQsAAd0BASMCgQEBhwEBHAGHAQEjAWQFAAKHAQSBAQGIAQsAAd0BASMBgQEBhwEBiAEChwEBIwYAAYcBBoEBCwAB3QEBIwSBAQGIAQEjBgABHQaBAQsAAd0BASMFgQEBIwcAAYEBAYgBAYcBAoEBAYgBCwAB3QEBIwEABIEBASMIAAKHAQOBAQwAASMCAAQjCAABhwECEgEYAQACEgoAASMDAAGBAQEAASMIAAGIARAAASMFAAEjCAABiAEVAAIfCAABgQEeAAFkASMeAAFkAYEBHgABZAGHAR4AAWQBgQEfAAKBAR4AAoEBAogB0wIAAQIJAAMCDgAB3AEBAAHcAQEAAYcBAR0IAAFkAYEBArMHDgAB3AEBAALcAQGBAQGHAQcAAWQDgQEBswcNAALcAQEAAdwBCgABswcDgQEOAALcAQEAAdwBAWQJAAKzBwKBAQ4AAtwBAQAB3AEKAAGzBwGBAQGIAQGBAQ4AAtwBAQAB3AEKAAKHAQOBAQGIAQwAAtwBAQAB3AEKAAGHAQGBAQGHAQOBAQwAAtwBAQAC3AEBAAFkBwABhwEFgQEMAALcAQEAAtwBCgAEgQEBiAEMAALcAQEAAtwBCgAEhwEBgQEMAAHcAQIAAtwBCwABhwEDgQEPAALcAQsAAYcBAhIBGAESGgABZAGBAR4AAWQBhwEfAAGHAR8AASMeAAFkAYEBHwABgQEfAAGIAR4AAoEBgAMAAwIaAAJkAQABgQEBswcBgQERAAFkCQACZAKBAR4AAYEBAYcBHAABZAEAAocBHgABgQEBiAEdAAFkAoEBHgABHQGBAQGIAR0AAogBAYEBGwABhwEDgQEdAAFkAocBHgACgQEeAAKBAQESHQABhwEBgQEeAAGBAQGHAR4AAoEBHgACIx4AAocBHgABiAEBhwEeAAKIAbIDAAFkCAABZAQAAYcBGwABZAEAAWQBAAGzBx8AAbMHHwABgQEfAAEcHgABgQEfAAGBAT4AAWQfAAFkQQABhwEfAAGBAR8AAYcBHwABgQEfAAEjHwABhwEfAAGBAaPjAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          ruinStoneLarge3: EV("ruinStoneLarge3", {
            x: 38,
            y: 39,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gFEAARwfAAEcHwABhwEfAAGHAR8AAYcBHwABhwEfAAGHAb8NAAECHwABhwF/AAHbAR8AAdsBHwAB2wGhBgABAh0AAYcBArMHXQAB2wEfAAHbAR8AAdsBHwAB2wGgBgACAh0AAoEBAhwfAAEcngEAAYgBHwABHB8AARwfAAEcHwABiAEfAAGIAR8AAYgBHwABiAEfAAGIAR8AASP9AwABAgIAAQIcAAOHAQEcHQABHAKHAR0AA4cBHgABhwEfAAGHAR4AAocBHQACgQEBhwEdAAKBAQGIAQGBARwABIEBHAACgQEBiAEBgQEcAAKBAQEfAYEBHAAEgQEcAAKBAQGIAQGBARwAAoEBAYgBARwcAAOBAQEcHAABiAECgQEBIxwAAogBARwdAAGIAQGBAQEcHQADgQEdAAKBAQGIAR0AAYEBAogBHQACiAEBHB0AAYEBAYgBARwdAAIKARwfAAGIAR8AAYEBHwABiAEfAAGIAR4AAYYBAYgBHQABHwKIAR0AAYEBAYgBAeQHHgACAh0AARkBHAGHAR4AARwfAAEcHwABhwEfAAGHAR8AAYcBHwABgQEgAAGIAR8AARwfAAGBAR8AAYEBHwABiAEfAAGIAR8AAYgBHwABgQEfAAEcHwABgQEfAAFtHwABgQEfAAGBAR8AAYgBHwABgQEdAAITARwfAAEKnwEAAYYBHwABgQEfAAGBAR0AAQIfAAEZAocBXgABhwEfAAGHAR8AAYEBQAABiAEfAAGIAR8AARwfAAGBAR8AAYEBAWQeAAGIAR0AAhIBgQEfAAGBAR8AAYEBHwABbR8AAeIHHwABbR8AAYEBHwABgQEfAAEcHQACEwGBAR8AAQq/AQABHx8AAYEBHQABAgGsAR4AARkChwEeAAGHAQHbAR4AAYcBAdsBHgABhwEB2wEeAAGIAQHbAX8AAYgBHwABiAEfAAHiBx8AAeIHIAABZBwAARgBEgGBAQFkHAABgQEBLwEcHQABgQEBAAFtHQABgQEBAAHiBx0AAYEBAQAB4gcdAAGBAQEAAeIHHQABgQEBAAFtHQABgQEBAAGIAR0AAYEBAQABgQEdAAEZARMBgQEfAAEKXQABYx8AAWMfAAFjHwABYyEAAYYBHwABAh0AARkChwFeAAEcAdsBnwEAAYgBHwABgQEfAAGBAR8AAYEBHwABgQEdAAISAYEBHwABgQEfAAGBAR8AAW0fAAHiBx8AAW0fAAGIAR8AAYgBHwABiAEdAAIZAYEBHwABCr8BAAEfHwABgQEfAAECHQABEwGBAQGHAR4AAYcBAdsBHgABgQEB2wEeAAGIAQHbAR4AAYEBAdsBXwABHB8AAYgBHwABiAEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAW0fAAGIAR8AAYgBHwABiAEfAAGBAR0AAhkBgQEfAAEKnwEAAYYBHwABgQEfAAGBAR8AAgIcAAKBAQIcHQAChwEBHB0AA4cBHgABhwEfAAGBAR0AAdsBAQABgQEdAAHbAQEAAYEBAYgBHAACgQECiAEcAAKBAQKIARwAA4EBAYgBHAACgQEBHwGBARwABIEBHAAEgQEcAASBARwABIEBHAABiAECgQEBIxwAA4gBHQADiAEdAAKBAQGIAR0AAoEBAYgBHQABgQEBHAGBAR0AARwBgQEBHB0AAoEBARwdAAIKAYEBHwABgQEfAAGBAR8AAYEBHwABHB4AAYYBARwdAAEfAoEBHQACgQEB5Ac9AAOHAQEcfAAB2wEfAAHbAR8AAdsBIQABiAEfAAEcHwABgQEfAAGBAR8AARwfAAEcHwABHB8AARwfAAEjnQQAAYcBARwBswfdBwABAh8AAYcB/wcAAYcBHwAB3gEfAAHeAZ8HAAECHwABhwEB2wEeAAEcAdsBHgABswcfAAEcHwABhwEfAAGHAR8AAYcBHwABiAEfAAGIAR8AAYEB3wUAAbMHAdsB3icA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("nXgAAuQHART8BwAB5AcDFB0AARQBAAEUHQAB5Ae+BwAB5AcBFAGzBx8AARoBswceAAEUARoeAAHkB50HAAEUARofAAEaAbMHHwABGgHWAx8AARQfAAHkBx8AAeQH3AYAAeQHARoBswcfAAEaAbMHHgACGh4AAeQHnQcAAeQHAxodAAEaAQABFB0AAeQHvwcAAuQHARTgVwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gHgAAuQH/gcAAhQB5AceAAEUHwAB5Ae+BwABswcBFAHkBx0AARQfAAEUHwAB5AegBwACFB0AAbMHARQeAAEavwcAAbMHARQB5AcdAAEaHwABFB8AAeQHnwcAAhQB5AceAAEUHwAB5Ae+BwAC5Af+VwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("EgAFAgEAAQIWAAGzBwEcARMBGQUTAYcBAbMHAWQUAAGzBwEcAS8BAAQQAc4BARwXAAGzBwGSCAEABZIIAbMHFwABgQEHAAGHARcAAYEBBwABhwEXAAGHAQcAAYcBFwABgQEHAAGHARcAAYEBBwABgQEXAAGBAQcAAYEBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQcAAYEBHwABgQEeAAEUAYEBHQACGgGzBxwAAhodAAGBAQEaHgABswcfAAHkB5wDAAMCAQACAgEAAgIVAAeHAQEcAYEBAYcBARwVAAGHAQEcAoEBAocBARwBgQEDHBUAC7MHFQADgQECcAHuBwJwAYcBAhwVAAOHAQFvAeUHAe4HAeUHAW8BgQEBhwEBHBUAA4cBAW8B5QcB7gcB5QcBbwOHARUAA4cBAW8B5QcB7gcB5QcBbwGBAQKHARUAA4EBAW8B5QcB7gcB5QcBbwKBAQGHARUAARwCgQEBbwHlBwHuBwHlBwFvA4EBFQABHAKBAQFvAeUHAe4HAeUHAW8DhwEVAAGBAQIfAXAB5QcB7gcB5QcBcAIfAYcBFQADgQEBhgEBcAHuBwFwAYYBA4cBFwACgQEBHwHuBwEfBIEBGAACgQEBhgEFgQEZAASBAQEaAbMHASMaAAKBAQEaAQAB5AcbAAGBAQEaHgABswcfAAHkB5sDAAICAQABAgEAAQIBAAECFwABswcBhwECswcBHAKzBwEcAbMHARwWAAHdAQGHAQcAARwB2wEWAAGzBwcAAbMHAdsBFQAB3QEBhwEHAAGHAQHbARUAAd0BAYcBBwABhwEXAAGHAQHcAQYAAYcBFwABhwEB3AEEAALcAQGHARcAAYcBAdwBBAAC3AEBgQEXAAGBAQLcAQMAAtwBAYcBFwABgQEC3AECAAPcAQGHARcAAYEBAtwBAgAD3AEBhwEXAAGBAQPcAQEAA9wBAYcBGAABFAXcAQEUAYcBGQABFAPcAQEUAVgBgQEaAAEUAdwBARQBUAEUASMaAAFYARQBWAEaHQABUAEUHgAB5AfbAwAC3AEFAALcARcAAdwBBwAB3AEXAAHcAQcAAdwBFwAB3AEHAAHcARcAAdwBHwAB3AEfAAHcAQIAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AFfAAHcAR8AAdwBjOQBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, ZV.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, ZV.c)("gIACAA==")
          }]),
          ruinStoneMedium1: EV("ruinStoneMedium1", {
            x: 11,
            y: 16,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("BAABAgEAAgIBAAECAgABAhcAA7MHAYgBAQACswcBiAECswcBAAGHARUAArMHAYgBAwABiAEBHQGzBwEAAYcBFwABiAEDAAGBAQEAAR0BAAGIARcAAYEBAwABiAEDAAGHARcAAYcBAwABgQEDAAGBARcAAYEBBwABiAEXAAGHAQcAAYgBFwABhwH7BQAFAgEAAQICAAMCFAABiAEEIgGzBwUiArMHEwABhwEBHAMiAbMHAR0BswcDIgGzBxQAAYgBArMHARwCIgKzBwEiARwBIgEcFAABgQECHAGzBwEiARwBswcBHAEiAbMHARwBswcUAAGBAQEiARwCIgGzBwIcASIBswcCHBQAAYEBBSIBHAIiAhwVAAGIAQMAARwCIgGzBwMiHgACIvcFAAciAQICAAICEQABHQwiArMHEQABswcLIgEcAR0TAAEdCiIBHBQACyIBHBQADCIUAAEiARwBIgEECCIYAAEcASICBAQiHAABHAEEASL1BQAJIhYAAbMHBSIDswcEIgGzBxIAAR0FIgOzBwQiAR0SAAGzBwUiArMHARwEIgEdEgABHAUiARwBswcBHAMiAR0TAAIiAQQDIgIcAbMHAyIBHBYAAiIBswcBIgEcBSIZAAciHAABHAEEAiLyBQALIgEAAwIRAAGHAQQiAbMHAYgBA7MHAYEBAyIBiAERAAGHAQQiAbMHAYgBArMHAQABiAEDIgGIAREAAR0EIgGzBwGIAQMAAYgBAyIBiAERAAGBAQUiAYEBAwABgQEDIgGIAREAAYgBAiICBAGzBwGBAQMAAYgBAyIBiAERAAGIAQUAAYEBAwABgQEDIgGBAREAAYEBBQABiAEDAAGBAQMiAYEBFwABiAEDAAGHAQMiAYgBGwABhwECHAEiAYcBGwABiAEDAAGHARsAAYEBAwABhwEbAAGIAQMAAYcBHwABhwHSBAABAgIAAgICAAMiFQABswcDIgGBAQGzBwQAArMHAiIBHREAAR0DIgYAA7MHASIBswcRAAEdAyIBiAEGAAEcAiIBHREAASIBBAGzBwEiAYcBBgABswcBIgEcFgABhwEGAAEcASIBswcWAAGIAQYAAiIBHB0AAiIBHB0AAyIcAAGHAQEiAbMHASIBhwEbAAGHAQMAAYcBOwABgQEjAAGHAdAEAAICAgABAgEAAQICAAMiAQITAAGzBwUiAYgBBAACswcCIgGzBxEAAR0DIgHPAQGIAQQAArMHAiIBHREAAbMHBCIBgQEFAAGzBwIiAbMHEQAEIgEAAYcBBQABHAEiAR0dAAEcASIBHB0AARwCIh0AAyIdAAMiHQABIgHRDAEiHAABhwEDAAGBAbAFAAICAQACAgEAAgIBAAMiBAIQAAEdBiIBswcDAAWzBxAAArMHBiIEAAOzBwEdEQABHQEiAQQBswcBHAYAAbMHARwBswcSAAEiARwKAAEcAR0eAAGzBwEcHgACHB0AASIBHAEiHQADIhwAAYEBAyIBgQEbAAGBAQEAAc8BAQABgQGxBQABAgIAAQICAAICAyIBAgIAAS8RAAKzBwQiAYEBAiIBAAGIAQOzBwGIARIAAbMHAiIBswcBIgEcAwABhwEBAAKzBwGIARIAASIBBAEiBgABhwEDAAGIAR8AAYcBHwABhwEfAAGBAR8AAYEBGwABgQEDAAGBARsAAoEBAQABhwEBgQEbAAKBAQOHAR8AAYcBHgABgQEBiAEeAAGBAdQEAAQCAQABAgIAAbMHFwABiAEEswcCIhkAAYgBAbMHAiIcAAGHAR8AAYcBgwcAAQIfAAEiARzXrwEA")
          }]),
          ruinStoneMedium10: EV("ruinStoneMedium10", {
            x: 13,
            y: 30,
            z: 28
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium11: EV("ruinStoneMedium11", {
            x: 11,
            y: 20,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("KQAB3gECAAHeAQMAAd4BATAXAALeAQEAAd4BAwAC3gEBAAHeARQAA94BAQAC3gECAALeAQEAAd4BFAAD3gEBAALeAQIAAt4BAQAB3gEUAAPeAQIAAd4BBQAB3gEVAALeAQIAAd4BBQAB3gGzBgABAgIAAQIBAAECAQABAgEAAwIBAAICAgABAgEAAgIFAAKBAQIcAQABHAEdAhwDHQIcAR0CHAEdARwCHQIcAR0BAAIdBgABgQECAAEdARwBgQEBHAGBAQEdAhwBHQGBAQEcAR0BHAKBAQEdARwBHQGIAQEdARwBHQcAAYEBAxwCgQEBHQEcAQABHAKBAQIdAgABgQEBHQEcAh0BgQEBHAIdCAACgQEBHQIcAYEBAR0DgQEBHAGBAQEcAYEBAxwBgQEBHAGIAQEcAR0BAAHbAQoAAYEBAR0DgQECHQEAAYEBARwBgQEBHAGBAQEAAR0BHAEAARwBgQECAAHbAQkAAYEBARwBiAEBHAHeAQGBAQEcAYEBAR0BgQECHAGBAQIdAYEBAR0BHAEdARwCAAHbAQsAAYEBARwBgQECAAEdAYEBAQABiAEBgQEBiAEBHQGBAQEAAYgBAYEBAYgBAoEBARwB2wEMAAEcBIEBAYgBAoEBARwFgQEBHAGIAQEcAYEBAYgBCwAEiAEBHAiBAQEcA4gBAoEBAYgBCwABiAEBgQEBHAKBAQGIAQiBAQKIAQEcAYEBAogBAYEBCwADgQEBiAEDgQEBiAEDgQEBiAEHgQEBiAECgQEKAAGBAQGIAQaBAQEAAYEBAYgBAoEBAYgBAoEBAYgBA4EBAQABgQEKAAiBAQGIAQEABIEBAYgBBIEBAcwBDAABiAEBgQEBiAECgQEBiAECgQEBAAmBARAAB4EBAQACgQECAAaBAQ8AAYEBAogBAoEBBgADgQEBiAEEgQENAAGIAQEAAYEBAQABgQEGAAGBAQEAAYgBAQABgQEBAAGBAcwDAAECAgABAgwAAgINAAJCAQACQgwAAkIBAAJCCgABQgE/AUIBOwFCAQAC3AECAAEzBgABQgE7AUIBPwFCCwABQgE7AkIBAALcAQEAAVQCMwUAAkIBOwFCCwABQgE7AUIBOwEzAUIC3AECVAIzAVQDAAFCATMBOwFCATsBQgsAAkIDMwFCAdwBAlQCMwJUAQABQgMzAUIB3AEBQg0AAUIDMwFCAlQCMwJUAUIDMwFCAQAC3AEKAAQMAUICMwFCAlQCMwJUAUIBMwEvAUICDALcAQoAAoMBAQACgwEDQgJUAjMBvQcB3AEDQgWDAQoABwwBGgJUATMBvQcBAAHcAQEaBwwKAAaBAQEaAQwCVAIzAQAB3AEBDAEaA4EBA4gBCgAGVAEMARQCVAHNAQEzAVQB3AEBFAEMBFQBAAFUDAAGFAJUAjMCVAYUDwAFVAYfBVQXAAKBARwAAYEBAVQCFAFUAYEBGQABgQEGAAGIAfIDAAEUBAACFAEAARQBAAQUAQACFBoAAtwBBgAB3AENAAHcAQkAAtwBBgAC3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBFAAB3AEJAALcARQAAdwBCQAC3AEyAAGBAUEAAYgBIAABiAEgAAGIASAAAYEBBAACgQEaAAOBAQFUAhQBVAKBAQGIARcAAYgBAwAB0QwBAAHdAQGBAfEDAAEcAQABHAcAARwBAAIcAQACHAEAAhwWAAHRDJYCAAGIASAAAYgBIAABgQEgAAGBASAAAYgBBAACgQEEAAGIARUAAoEBAYgBAVQCFAEAAYgBAYEBAYgBFwABgQEFAAHdAQGBAfUDAAECAgABAgYAAQIVAAFUAgABgwEBvQcDAAGDAQEAAYMBAb0HAYMBAVQB2wERAAGBAQgAARwBAAGBAQEAARwB2wEQAAHdAQGBAQgAAdwBAwABgQEB2wEQAAHdAQEcCAAB3AEDAAGIAQHbARAAAd0BARwIAAHcAQMAARwB2wEQAAHdAQEcCAAB3AEVAAHdAQGIAQgAAdwBAwABiAERAAHdAQGIAQgAAdwBAwABiAEOAAGBAQIAAd0BAYgBCAAB3AEDAAGBAQ4AASMBgQEBAAHdAQGBAQgAAdwBAwABgQEPAAEjAYEBAd0BAYEBCAAB3AEDAAGBARAAASMCgQEIAAHcAQMAAoEBEAABIwGBAQgAAdwBAwABgQEBIxEAASMBgQEEAAKBAQEAAdwBAgABgQEBIxMAASMCgQEBiAEBVAEvARQBVAHcAQKBAQEjFQABIwGIAQUAAd0BAYEBASOfBAAB3AEfAALcAR8AAdwBEAAB3AEOAAHcARAAAdwBDgAB3AEQAALcAQ0AAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEQAB3AEBAAHcAQsAAdwBHwAB3AEfAAHcARkAAoEBBAAB3AEWAAGBAQGIAQFUAc8BARQBVAGIAQGBAR4AAd0BAYEBmwUAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBAYEBHAABgQEBAAIUAVQBiAEBgQEfAAGBAbsHAAKBAR0AAVQCFAFUAoEBHwABgQG7BwACgQEgAAFUj7QBAA==")
          }]),
          ruinStoneMedium2: EV("ruinStoneMedium2", {
            x: 19,
            y: 15,
            z: 19
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium3: EV("ruinStoneMedium3", {
            x: 16,
            y: 18,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium4: EV("ruinStoneMedium4", {
            x: 20,
            y: 15,
            z: 23
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium5: EV("ruinStoneMedium5", {
            x: 16,
            y: 24,
            z: 18
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium6: EV("ruinStoneMedium6", {
            x: 21,
            y: 15,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium7: EV("ruinStoneMedium7", {
            x: 16,
            y: 23,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("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")
          }]),
          ruinStoneMedium8: EV("ruinStoneMedium8", {
            x: 14,
            y: 18,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("JAACZN4HAAMCHQABIgGBAQEiHwABgQG7BwABAgEAAwIaAAGBAQUiAYEBHAABIgEEASIeAAGWAZsHAAQCAQABAhkAAWQHIhkAAYgBASIBBAEiAgQBgQEbAAGWAQHRDF0AAbMHHwABswcBAAIcHAABswcBAAIcHAABswcBAAKzBxwAAbMHAQACHRwAAbMHAQACHR4AAh38BAACAgEAAwIZAAGHAQUiAYcBGgABBAIiAQQBIhsAAZYBAQAB3gEB1QgeAAHeAQHWCBwAAbMHAQAB3gEdAAGzBwEAAd4BHQABHQEAAhwcAAEdAQACHBwAAR0BAAKzBxwAAR0BAAIdHAABswcBAAIdHgACHfsEAAcCGAABZAciGQABgQEFIgGBARsAAd0BAhwcAAGzBwEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABswcBAAIdHAABHQEAAh0cAAGzBwEAAh0eAAIdHQAEHBwAAxwdAAIcnAQAAQICAAMCGgABhwEFIgGHARoABSIbAAGzBwEAAhwcAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwBzAEBAAEcugQAAQICAAMCGgAGIhoAAYgBAc4BAyIBBBsAAbMHAcwBAgABlgEbAAEdAdsBHgABHQHbAR4AAR0B2wEeAAGzBwEvArMHHAABHQHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwCAAEcugQAAQIBAAECAQABAhsAAYgBBSIbAAECAyIBBBsAAbMHAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHNoEAAICAQABAgEAAQIaAAYiGgABgQEFIhwAAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAEdAd0BArMHHAABHQHdAQKzBxwAAR0B3QECswccAAGzBwHdAQIdHAABHQHdAQIdHAABswcB3QECHR4AAh0dAAQcHgACHL0EAAICGgABZAGBAQUiAYcBGgABBAEiAQQBIgEEGwAB3AEfAAHcAR8AAbMHHwABswcfAAEdAQACHBwAAR0BAAIcHAABHQEAArMHHAABHQEAAh0cAAGzBwEAAh0eAAId/QQABQIZAAciGQABgQEBIgIEASIBBAGIARoAAdwBAQAB0QwBAAGWARsAAdwBHwAB3AEfAAGzBx8AAbMHAQACHBwAAbMHAQACHBwAAbMHAQACswccAAGzBwEAAh0cAAGzBwEAAh0eAAId+wQAAgIBAAMCGgABiAEFIgGIARoAASIBBAMiHAABlgGgBwACAhwAASIBgQEBIgGBAQEiGwABiAEBAAGBAQEAAYEBuZcBAA==")
          }]),
          ruinStoneMedium9: EV("ruinStoneMedium9", {
            x: 14,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AgACAh4AA7MHHQABswcBHQGBAR0AARwB4gceAAEdHwACgQEeAAGIAQGBAQGIAR0AAoEBAYgBHQABgQEB4gf+BQACAh0AAbMHARkBEwEAAYEBGwABgQEDAAEcGwABHAMAAYgBGwABiAEDAAGBARsAAR0DAAGBARsAAYEBAhMBAAGBARsAAYEBAcwBHgABiAH/BQACAh0AAbMHARkCEwEAARMBswcZAAGzBwG9BwQAARwZAAGIAQUAAR0ZAAGBAQUAAYgBHwABgQHcBgABAgIAAQIZAAGzBwETARkDEwGBARkAAYEBAgAB0QwCAAGIARkAAeIHBQABgQEfAAGBAfoGAAICAQACAgEAAgIBAAICFAABgQEBGQQTAQACgQEDHAGBARMAARwGAAOBARYAAYEBBgABiAGZBwABzQEKAAECFAABgQECAAETARkGAAGzBxQAAYEBHwABiAEfAAGIAR8AAYEBHwABgQHABgADAh0AAbMHAYEBARMHAAGBARUAAYEBARwIAAEcFQABHAGHAR4AAoEBHgABiAEBgQEfAAGBAcAGAAECBQABAgEAAQIXAAGHAQUAARMBGQGzBxYAAWQBgQEHAAGHARYAAZYBARwfAAGBAf8GAAMCAwADAhcAAYEBARkBEwEAAxMBGQGzBxcAAR0HAAGIARcAAYEBnwcABAICAAMCFwABswcFEwEZARMBswcXAAEdBAAB0QwCAAEcHwABgQGaBwAFAhgAAYcBAgAFEwGHAR4AAaAIARwfAAGBAR8AAYgB9wYAAQICAAICAgACAhcAAYcBAgACEwEZAhMBswccAAGkAQEAAc4BAYEBHwABgQEfAAGBAfcGAAQCAQACAgEAAQIXAAGzBwGHAQOzBwEdAbMHAh0ZAAGBAQMdAocBAR0ZAAGBAQGIAQGBAQLiBwEdARwbAAGBAQGIAQOBAR0AAoEBAYgB+wYAAmQfAAGWAbaXAQA=")
          }]),
          ruinStoneSmall1: EV("ruinStoneSmall1", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("ghAAAQICAAGzBwEuAR0aAAGHAQMAAYgBHwABiAEfAAGBAR8AAYYBHgAChwEBgQEeAAGHAbsGAAICAbMHAYEBARwCHRkAAocBBQABiAEZAAGHAQUAAYcBHwABhwEfAAGGAR4AAYEBAYgBHwABgQG5BgABswcBzAED6AcBHAGzBxoAAYcB3QcAAR0BHAXoBwEdAQIXAAFkBwABgQF3AAGBAQcAAYcB2AYAARwF6AcBswcBAhYAAWQBiAEDAAHRDAMAAYgBFgABZAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQYAAWQBhwEXAAGBAQcAAYcBtwYAAbMHAR0F6AcBHAGzBxUAAmRIAAFkHwABZBcAAYEBBgABZAGHAR8AAWS4BgACHQPoBwEdAbMHmQEAAYcBBQABgQEBZB4AAWS5BgABAgGzBwEAAR0BHAEdGgABiAECAAHPAQIAAYgBGQABgQEFAAGIARkAAYEBBQABiAEZAAGGAQUAAYYBGQAChwEDAAKBARkAAYcBBQABgQG7BgABswcBAgEdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGHAQGBAdmuAQA=")
          }]),
          ruinStoneSmall2: EV("ruinStoneSmall2", {
            x: 11,
            y: 8,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AgACAgGzBwEdAgACAhcAAYgBAbMHAR0DAAGzBwEdAYgBAbMHFgABiAECIgMAARwBIgGIAQGzBxYAAocBBQABIgGBARcAAYYBBwABhgEfAAGBAdYGAAECBgABHQIAAbMHAS4UAAGzBwEcCQABhwEUAAEiAcwBCQABhwEUAAEiCgABgQGUBwABAgEAAR0IAAECFAABHQGzBwkAAYcBFAABswe/BwABswcEAAEd/gcAAbMHAQACHfsHAAMCAc8BAgIBswcZAAGzBwMdAbMHAYgBAmQZAAGzBwEcAiIBiAEdAAEingcAArMHAQACAhkAAbMHAYgBAdEMAgABHQGIAQFkGAABswcBiAEDAAGzBwGBAQFkGQABgQEDAAEiAYcBGgABhgEEAAGHARoAAYcB3wYAArMHAgABswcBAhgAAWQBswcBzQEEAAEiAmQXAAEcBQABswe5BwABAgIAAbMHGgACZAEdBQABswcYAAFkAbMHBQABHBkAASKfBwABswcBAh4AAWQCswceAAGzBwEcurcBAA==")
          }]),
          ruinStoneSmall3: EV("ruinStoneSmall3", {
            x: 12,
            y: 9,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("BgADAh0AArMHAYgBHQABIgEAAYEBuAcAAQIBAAECAQABAgEdAQABswcYAAGHAQEAArMHAYcBAc0BGgABgQEBAAIiAYgBHQABIgEAAYEBnAcAAQICAAEdAbMHAR0aAAGHAQEcHgABiAEfAAGBAR8AAYYB/wYAAQIBswcCAAGzBxoAAWQBswcfAAEiwAcAAgIEAAECFgACZAKzBwEcBAABhwEBiAEXAAGzBwEiBQABhwG6BwABAgEdAwACAhcAAWQCswcEAAGHAQGzBxcAAWQBIgGzBwUAAbMHGQABIgUAASKYBwABAgHNAQGzBwEdAgABswcXAAJkAYEBARwFAAGzBxgAAYEBBgABIhgAAYgBBgABIhgAAYYBBgABIhgAAocBHwABhwHABgABswcCAAGzBwEdAQIXAAFkAbMHAdEMBQACHRcAASIHAAEiFwABIgcAASKZBwACAgIAAbMHAQIYAAFkArMHARwDAAEcAbMHGAABHAEiBQABswcfAAEimAcAAwIDAAGzBwECGAAChwEBgQEEAAGHARkAAocBBAABiAEfAAGBAR8AAYYB/wYAAS4eAAGIAQGHAV8AAYcB9K4BAA==")
          }]),
          ruinStoneSmall4: EV("ruinStoneSmall4", {
            x: 9,
            y: 10,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("AgACAh4AASIBHR4AArMHHgABIp4HAAECHwABHQEcHgABIgHRDB4AASKeBwABAgHMAR4AARwBHR8AAbMHRAABZB4AAWQeAAJkuwYAAQIfAAGIAQMAAYgBGwABiAEDAAGIARsAAYEBAwABiAEBZBoAAYEBAwABgQEBZBoAAYYBAYcBAQABgQEBhgEbAAOHAQGBAQGIAR0AAmSgBgABAh8AAR0CZB0AAR0BZB4AASI8AAFkHwACZOAGAAEcAbMHAWQdAAHOAQEiHwABIpwHAAEuAQACAhwAAbMHAh0BHBwAARwBAAGzBx8AASKbzwEA")
          }]),
          ruinStoneSmall5: EV("ruinStoneSmall5", {
            x: 13,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("JwABZBsAAd4BAwABlgEbAAHeAQYAAWQfAAFkIAABZNcGAAUCAQADAhUAAbMHAYEBAbMHAYEBA7MHAR0DswcVAAGBAQEdAoEBBB0BgQECHBUAAR0BgQEBHQGBAQEdAoEBA4gBARwBZBMAAd0BAYEBAYgBAQADgQEBiAECgQEBiAEBHRQAAd0BAYgBAwABiAEGgQEaAASBAQKIARoAAogBA4EBAYgBGwABgQEBAAGBAQEAAYEB9QUAAgIBAAMCAQAEAhUAAbMHAhUDDwMVAQ8BswcUAAHdAQEdAwABDwMAAc0BAQABHRQAAd0BAYEBBAABFQQAAR0UAAHdAQGBAQUAARUDAAGIARQAAd0BAYgBBgABDwIAAYEBHQACDwGIAR8AAYEBlQYAAQIBAAQCAQACAgEAAQIUAAFkARwCFQMPAhUBDwEVARwVAAGBAQMAARUFAAGBARUAAeIHBAABDwQAAeIHFQABiAEFAAEPAwABiAEcAAEPAgABgQEcAAG9BwEVAQ8BgQEfAAGBAR8AAYEB9QUAAgIBAAICAwABAhcAAR0BDwEVBA8CFQEPAR0VAAEdCQABHRUAAeIHCQAB4gcVAAGBAQkAAR0fAAGBARsABBUBgQEfAAGIAZUGAAcCAQABAhcAAbMHAw8BFQHMAQEPARUBDwEVAbMHFQABgQEBpAEBAAHeAQEAAQkEAAEdFQAB4gcCAAHeAQEAAQkEAAHiBxUAAYEBAgAB3gEBAAEJBAABgQEYAAHeAQEAAQkEAAGBARgAAd4BAQ8CFQEPARUBDwGIAR8AAYEBHwABgQH2BQACAgEAAwIBAAECAQABAhUAAbMHAQ8BFQMPARUBAAEVAQ8BswcVAAEdAQAB3QECAAGgCAQAAYEBFQABgQEBAAHdAQIAAaAIBAABgQEVAAGBAQEAAd0BBwABiAEXAAHdAQcAAYgBFwAB3QEBDwEVBA8BAAGBARkAAdEMAQABzwEDAAGBAZUGAAMCAgAFAhYAAbMHAQ8DFQEPBBUBHBUAAYEBBAABoAgEAAGzBxUAAYEBCQABHRcAAd0BBwABiAEXAAHdAQcAAYEBFwAB3QEBDwIVAg8CAAGIAR8AAYEBHwABgQH1BQABAgIABAICAAECFgABiAEDFQIPARUBAAEVAQ8BHRUAAR0JAAGIARUAAR0JAAGzBx8AAR0YAAHcAQYAAYEBGAAB3AEGAAGIAR8AAYgBlgYAAwIBAAECAwACAhYAAw8BAAEJAwABFQGzBxoAAQkEAAGzBxoAAQkEAAEdHwABHR8AAYEBHwABgQEfAAGBAR8AAYEB9gUAAQIfAAEVBwABFQGzBx8AAR0fAAGIAR8AAYEBHwABgQEfAAGBAb8GAAECHwABgQEfAAGIAR8AAYEBnwcAAQIfAAEdHwABgQG0nwEA")
          }]),
          ruinStoneSmall6: EV("ruinStoneSmall6", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, ZV.c)("JQAB3gEfAAHeAb4HAAECAQABAhwAAWQBswcBhwEBHRwAAZYBAYEBAYgBAYEBHQABgQEB4gcBiAEdAAGBAQHiBwGBAR4AAYgBAYEBHgABgQG9BgABAgMAAQIZAAHdAQGHAQGBAQEAAhQCswceAAGBAQEdHgABgQEBhgEeAAKBARwAARIBGAGBAQGIAR4AAYEBvQYAAgIBAAECGQABgQEBAAEUAhoBFAGBARgAAd4BBgABhwEYAAHeAQYAAYEBHwABgQEcAAEYAhIBgQEeAAHOAQGHAbcGAAICAgABAgEAAQIBAAICFgABswcBhwECAAEaAxQBGgEdFwABhwEB2wEEAAGgCAEAAYcBFwABgQEB2wEGAAGIAR0AAb0HAQABgQEXAAGBAQIAARIBGAESARgBEgGHAdcGAAECAgADAgEAAgIWAAGzBwGIAQEAARoDFAHOAQEUAbMHHAAB2QEBCwHPAQGIARwAAdkBAQsBAAGGARcAAYEBBQABCwEAAYEBFwABiAECAAISAd4EAhIBhwEfAAGHAbYGAAoCFgABswcBhwEDFAEaAxQBswcBZBYAAYcBBQABoAgBAAGBARcAAYcBBwABgQEXAAGBAQcAAYEBFwABgQECAAEYAxIBGAGHAdgGAAcCGQABhwEBGgIUARoBFAGBAR8AAYEBHwABgQEfAAGBARkAAYcBAQABGAESAhgBgQEZAAGHAQIAAdEMAgABgQG6BgACAgEAAQIbAAGHAQGzBwEaARQBGgKzBx4AAYEBAYgBHgABgQEBhgEeAAKBARoAAYcBAhIBGAGBAQGIARoAAYcBAwABgQG9BgACAhwAAWQBswcBhwEBswcBAAFkHQABgQEeAAHiBwGIAR0AAYEBAeIHAYEBHQABgQEBiAEBgQH+BgAC3AEeAALcAR0AA9wBHQAD3AEdAAPcAdmuAQA=")
          }])
        };

        function jV(VV, eV, xV) {
          const JV = new wV.c;
          for (const UV of xV) {
            const VV = JV.get(UV.chunkX, UV.chunkY, UV.chunkZ);
            if (!(0, YV.J)(VV)) throw new Error(`Duplicate chunk at ${UV.chunkX}, ${UV.chunkY}, ${UV.chunkZ}`);
            JV.set(UV.chunkX, UV.chunkY, UV.chunkZ, UV.rle)
          }
          return new nV.b(VV, {
            x: 0,
            y: 0,
            z: 0
          }, eV, JV)
        }
        const qV = {
            dungeonDraugrLarge1: jV("dungeonDraugrLarge1", {
              x: 21,
              y: 14,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, ZV.c)("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")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, ZV.c)("IAAEHBwABxwZAAEdBxwbAAEdHgACHRwAAR0BAAIdHAAEHZwGAAIcHgAGHBoACBwYAAgcGAACfwEfAR0cAAJ/AYEBAR0cAAJ/AYEBAR0cAAJ/AR8dAAMf/QUABRwbAAccGQAIHBgAAxwBHQQcGAADfwEdHAADfwEdHAADfx0AA38dAAIcAR/9BQAGHBoABxwZAAgcGAADHAEdBBwYAAN/AR0cAAN/AR0cAAN/AR0cAAN/HQACHAEf/QUABhwaAAgcGAAIHBgABBwCHQIcGAADfwIAAx0YAAN/AQAEHRgAA38CwgIDHRgAA38FHRkAARwBHx0ABB0cAAHCAgMdHgACHR8AAR0fAAEd3AQABhwaAAgcGAAIHBgACBwYAAJ/AR8DfwEfAR0YAAJ/AYEBA38BgQEBHRgAAn8BgQEDfwGBAQEdGAACfwEfA38BHwEdGAAHHxkAAn8BHwEdHAACfwGBAQEdHAACfwGBAQEdHAABfwG9BwEfAR0cAAMfAR3cBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/GQAHfwEdGAAHfwEdGAACfwEfAxwBHxkAA38BHRwAA38BHRwAAn8BvQcBHRwAAX8CvQcBHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/GQAHfxkAB38BHRgAAX8BvRMFfwEdGAABfwHJEwEfAQACHAEfAR0YAAN/AR0cAAN/AR0cAAN/AR0cAAJ/Ab0HAR0cAAIcAR8BHdwEAAccGQAIHBgACBwYAAccAR0YAAd/GQAHfwEdGAAHfwHCAhgAB38BHRgAAn8BHAMAAR8BHRgAA38dAAN/AR0cAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAHHAEdGAAHfwEdGAAHfwHCAhgAB38BwgIYAAd/GQACfwEcAwABHwEdGAADfx0AA38dAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAIHBgABn8BzgEBHRgAB38BwgIYAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfx0AA38BHRwAA38BHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfwEdHAADfwEdHAADfwEdHgABHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/AR0YAAd/GQACfwEfAQACHAEfGQADfwEdHAADfwEdHAADfwEdHAADfx8AAR/dBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/AR0YAAd/AR0YAAF/Ab0TBX8BwgIYAAF/AckTAR8DHAEfGQADfwHCAhwAA38BHRwAA38dAAN/HwABH90EAAccGQAIHBgACBwYAAgcGAAHfxkAB38ZAAd/AR0YAAd/AcICGAACfwEfAxwBHxkAA38BwgIcAAN/AcICHAADfx0AA38eAAEcAR/dBAAGHBoACBwYAAgcGAAIHBgAAn8BHwN/AR8ZAAJ/AYEBA38BgQEZAAJ/AYEBA38BgQEBHRgAAn8BHwN/AR8BHRgABx8ZAAJ/AR8BHRwAAn8BgQEBHRwAAn8BgQEBHRwAAn8BHx0AAx/dBAAGHBoACBwYAAgcGAAIHBgAA38BAALCAgEdGQADfwEAAR0BwgICHRgAA38FHRgAA38CHRwAARwBHz0AAR0CAAEdHAAEHRwAAR0BwgICHRwABB3cBAAGHBoABxwZAAgcGAAIHBgAA38dAAN/AR0cAAN/AR0cAAN/AR0cAAIcAR/9BQAFHBsABxwZAAgcGAAIHBgAA38BHRwAA38BHRwAA38BwgIcAAN/AcICHAACHAEf/QUAAhweAAYcGgAIHBgACBwYAAJ/AR8BHRwAAn8BgQEBHRwAAX8BvQcBgQEBHRwAAr0HAR8BHRwAAx+dBgAEHBwABxwZAAEcAx0EHBgAAsICAh0cAAEdAcICAh0cAAEdAgABHbxeAA==")
            }]),
            dungeonDraugrMedium1: jV("dungeonDraugrMedium1", {
              x: 27,
              y: 14,
              z: 27
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, ZV.c)("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")
            }]),
            dungeonDraugrSmall1: jV("dungeonDraugrSmall1", {
              x: 11,
              y: 7,
              z: 11
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, ZV.c)("AgAGHBoAAsICBgABHRYAAh0CwgICAAIdAQABHRUABR0BAAMdFwADHQMAAh0BwgIBHRYAAR0FAAEdAsICAR0dAAMdtwYACRwXAAEfB38BHwEdFQABHQGBAQd/AYEBAR0VAAEdAYEBB38BgQEBHRUAAR0BgQEHfwGBAQEdFQABHQGBAQd/AYEBFgABHQUfAhwCHwEdtgYACRwBHRYACX8BHRUAAR0JfwEdFQABHQG9Bwh/AcICFQABHQG9Bwh/AR0VAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYAChwBHRYACX8BHRUAAcICCX8BHRUAAcICCX8BwgIVAAEdAb0HCH8BwgIVAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYABBwDHwMcAR0WAAl/AR0WAAl/FgABwgIJfxYAAR0JfwHCAhYACX8BHRYAAR8BHAYAAR8BHbUGAAQcAx8EHBYABH8B0QwEfxcACX8XAAl/FwAJfxcACX8XAAEfBwABHLYGAAQcAx8EHBUAAR0JfwEdFQABHQl/AR0WAAl/FwAJfxcACX8XAAEfBgACHLYGAAEdCRwBHRUAAR0BzAEIfwHCAhUAAR0JfwEdFQABHQl/FwAJfwEdFgAJfwEdFgABHAQAAxwBHwEdtgYACRwBHRUAAcICCX8BwgIVAAEdCX8WAAEdCX8XAAh/Ab0HAR0WAAl/AR0WAAEfAwAEHAEfAR22BgAJHBYAAR0BHwd/AR8WAAEdAYEBB38BgQEXAAGBAQd/AYEBFwABgQEHfwGBARYAAR0BgQEHfwGBAQEdFQABHQYfARwCHwEdtwYAAx0DHBgABR0FAAEdFQADHQLCAgIAAh0ZAALCAgIABB0cAAIdAcICAR0WAAEdBQABHQLCAhcAAh0FAAMdtq4BAA==")
            }]),
            dungeonMagmaLarge1: jV("dungeonMagmaLarge1", {
              x: 40,
              y: 23,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, ZV.c)("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AdMLAtcDAdMLBdcDAhwFABl/BAAdfwMAHX8CAB9/AQAffwIAHn8CAB5/AgAefwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwYAGn8KABR/xQIAChwG1wMDHATXAwYcAQAJHAHXAwEAAdEDBtMLA9cDBNMLAdcDAQAC1wMLHAHXAxTTCwHXAwocAdcDFNMLAdcDChwB1wMU0wsB1wMLHAbXAwPTCwLXAwHTCwjXAwIcAwAJfwHRDA5/AdEMAn8EABx/BAAcfwQAHn8CAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BgAafwoAB38FAAh/xQIADBwC1wMPHAEAChwB1wMCAAHXAwLTCwzXAw0cAdcDEtMLAdcDCxwB1wMT0wsB1wMLHAHXAxTTCwHXAwscFNcDAhwDABt/BAAcfwQAHH8EAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BQAbfwYAGn8KAAV/CQAGf8UCAB0cAQALHAbXAwUcBdcDDxwB1wMG0wsF1wMF0wsB1wMNHALXAwfTCwPXAwfTCwHXAwwcAdcDEtMLAdcDDRwS1wMDHAMAGn8GABp/BgAafwUAHn8CAB5/AwAdfwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwQAHH8FABt/BgALfwMADH8LAAN/CwAFf8UCAB0cAQANHALXAxwcAtcDAtMLAtcDBRwF1wMQHAHXAwTTCwLXAwMcAtcDA9MLAtcDDhwC1wME0wsG1wME0wsC1wMQHATXAwYcBNcDBRwEAA9/BAAEfwkAEH8CAAV/CAAZfwcAHX8DAB1/AwAdfwMAHX8EABx/BAAcfwQAHH8EABx/BAAcfwUADn8CAAt/BQANfwQACn8GAAp/CAAIfxoAA3/GAgAdHAEALRwC1wMdHATXAwccA9cDEhwF1wMFHATXAyUcBQANfxIADn8SAA9/EQAcfwQAHH8EABx/BAAcfwQAHH8EAA9/AgALfwQAD38DAAp/BQANfwQACn8FAA1/BAAKfwUADH8GAAl/BQAMfwYACX8HAAl/CQAHf+ACAA==")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, ZV.c)("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")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, ZV.c)("AwAdHAEAnwEcBQAJfwQABBwPAA1/BBwPAA1/BBwPAA1/BBwKfwQAD38DHAp/BAAPfwMcCn8EAA9/AhwBAAp/BQANfwQACn8FAA1/BAAKfwUADX8EAAp/BQANfwQACn8GAAt/BgAJfwYAC38GAAl/BgAKfwcACX8JAAZ/CgAHf+QCABwcAQCfARwGAAF/Ac8BBX8FAAQcDwANfwQcDwANfwQcDwANfwQcCn8FAA1/BBwKfwUADX8EHAp/BQANfwEAAhwBAAp/BQANfwQACn8FAA1/BAAKfwYADH8EAAp/BgALfwUACn8GAAt/BgAJfwcACn8GAAl/CAAIfwcACX8LAAN/DAAEf+YCABwcAgCeARwIAAN/BwAEHBEAC38EHBAADH8EHBAADH8EHAp/BgAMfwQcCn8GAAx/AxwLfwYADH8BAAIcC38HAAt/AwALfwcAC38EAAp/BwALfwQACn8IAAl/BQAKfwgACX8FAAp/CQAHfwcACX8KAAZ/CAAIf4UDABscAgAeHAEAfxwSAAQcEwAHfwIABBwTAAl/BBwSAAp/AxwLfwgACn8DHAt/CAALfwIcC38IAAt/AgALfwgAC38CAAt/CQAKfwIAC38JAAl/AwALfwkACX8DAAt/CgAHfwUACn8LAAN/CQAIfxsAA3+KAwAZHAIAHhwCAH4cLAADfxwACX8XABN/DAAUfwwAFH8MABV/CwAVfwwAFH8MABN/DgAHfwIACX8PAAN/BgAHfxsABH/HAwAdHAIAfhwuAAF/HwAFfxoADn8SAA9/EQAPfxEAD38SAA1/EwANfxQAC38XAAJ/AgADf40EABscAgAeHAIAHhwBAD8cTwAEfxwACX8XAAl/FwAIfxkAB38bAAR/kAUAGhwDAB0cAQAfHAEAHxzAxgEA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, ZV.c)("BRwbAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AA38dAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABBwcAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/ngMABBwcAAccGQAHHBkACBwYAAgcGAAIHHgAAX8fAAF/HwACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgABfx8AAX+/AwADHB0ABhwaAAccGQAIHBgACBwYAAgceAABfx8AAX8fAAF/HwABfx8AAX8fAAF/HwABf58EAAEcHwAGHBoABxwZAAgcGAAIHBgACBz4BgAFHBsABxwZAAccGQAIHBgACBz4BgACHB4ABBwcAAYcGgAIHBgACByYBwADHB0ABhwaAAYcGgAHHNnGAQA=")
            }])
          },
          tV = {
            treeMapleLarge1: {
              schematic: rV.treeMapleLarge1,
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
              schematic: rV.treeMapleLarge2,
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
              schematic: rV.treeSpectralLarge1,
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
              schematic: rV.treeSpectralLarge2,
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
              schematic: rV.treePineLarge1,
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
              schematic: rV.treePineLarge2,
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
              schematic: rV.treeJungleLarge1,
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
              schematic: rV.treeJungleLarge2,
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
              schematic: rV.treePalmLarge1,
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
              schematic: rV.treePalmLarge2,
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
              schematic: bV.rockSnowLarge1,
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
              schematic: bV.rockSnowLarge2,
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
              schematic: bV.rockSnowLarge3,
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
              schematic: bV.rockJungleLarge1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 4,
                localZ: 13,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 16,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 22,
                localY: 4,
                localZ: 9,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge2: {
              schematic: bV.rockJungleLarge2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge3: {
              schematic: bV.rockJungleLarge3,
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
              schematic: bV.rockJungleLarge4,
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
              schematic: bV.rockJungleLarge5,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge6: {
              schematic: bV.rockJungleLarge6,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            ruinSnowSmall1: {
              schematic: BV.ruinSnowSmall1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 6,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 2,
                localZ: 6,
                mobTypeDistribution: new yV.h([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall2: {
              schematic: BV.ruinSnowSmall2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 9,
                localZ: 8,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 2,
                localY: 4,
                localZ: 8,
                mobTypeDistribution: new yV.h([{
                  value: "Frost Golem",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall3: {
              schematic: BV.ruinSnowSmall3,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 10,
                localY: 7,
                localZ: 5,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 2,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Frost Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall4: {
              schematic: BV.ruinSnowSmall4,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new yV.h([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium1: {
              schematic: BV.ruinSnowMedium1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 4,
                localZ: 21,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 6,
                localZ: 8,
                mobTypeDistribution: new yV.h([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium2: {
              schematic: BV.ruinSnowMedium2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 6,
                localZ: 3,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 6,
                localZ: 13,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 15,
                localY: 2,
                localZ: 8,
                mobTypeDistribution: new yV.h([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge1: {
              schematic: BV.ruinSnowLarge1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 21,
                localY: 20,
                localZ: 27,
                qualityDistribution: new yV.h([{
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 21,
                localY: 20,
                localZ: 14,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge2: {
              schematic: BV.ruinSnowLarge2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 27,
                localZ: 2,
                qualityDistribution: new yV.h([{
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 16,
                localY: 25,
                localZ: 9,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall1: {
              schematic: BV.ruinStoneSmall1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 0,
                localZ: 4,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 6,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall2: {
              schematic: BV.ruinStoneSmall2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 1,
                localZ: 4,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 6,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall3: {
              schematic: BV.ruinStoneSmall3,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 0,
                localZ: 4,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 1,
                localZ: 4,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall4: {
              schematic: BV.ruinStoneSmall4,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 0,
                localZ: 1,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 1,
                localY: 2,
                localZ: 2,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall5: {
              schematic: BV.ruinStoneSmall5,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 7,
                localZ: 7,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 6,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 7,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall6: {
              schematic: BV.ruinStoneSmall6,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 8,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 7,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium1: {
              schematic: BV.ruinStoneMedium1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 2,
                localZ: 5,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 9,
                localZ: 13,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium2: {
              schematic: BV.ruinStoneMedium2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 16,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 0,
                localZ: 9,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 7,
                localZ: 10,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium3: {
              schematic: BV.ruinStoneMedium3,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 5,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 6,
                localZ: 25,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium4: {
              schematic: BV.ruinStoneMedium4,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }])
              }, {
                localX: 3,
                localY: 1,
                localZ: 10,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 6,
                localZ: 19,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium5: {
              schematic: BV.ruinStoneMedium5,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 4,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium6: {
              schematic: BV.ruinStoneMedium6,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 3,
                localZ: 20,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 12,
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 9,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 16,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium7: {
              schematic: BV.ruinStoneMedium7,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 18,
                localZ: 9,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 5,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium8: {
              schematic: BV.ruinStoneMedium8,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 6,
                localY: 14,
                localZ: 4,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 2,
                localZ: 2,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 1
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium9: {
              schematic: BV.ruinStoneMedium9,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 2,
                localZ: 11,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 1,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 2,
                localZ: 3,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 2,
                localZ: 9,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium10: {
              schematic: BV.ruinStoneMedium10,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 11,
                localZ: 13,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 23,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 19,
                localZ: 23,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 1
                }, {
                  value: YV.i.EPIC,
                  weight: 2
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 15,
                localZ: 23,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 20,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 3,
                localZ: 2,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium11: {
              schematic: BV.ruinStoneMedium11,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 11,
                localZ: 14,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 14,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 16,
                localZ: 15,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 1,
                localZ: 14,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge1: {
              schematic: BV.ruinStoneLarge1,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 13,
                localZ: 11,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 22,
                localZ: 19,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 1
                }, {
                  value: YV.i.EPIC,
                  weight: 2
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 18,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 1
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 22,
                localZ: 17,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 14,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 16,
                localZ: 14,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge2: {
              schematic: BV.ruinStoneLarge2,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 13,
                localZ: 21,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 22,
                localZ: 22,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 23,
                localZ: 30,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 20,
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 1
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 11,
                localZ: 26,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 1
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 25,
                localZ: 26,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 16,
                localZ: 24,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 2,
                localZ: 26,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 7,
                localZ: 8,
                mobTypeDistribution: new yV.h([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge3: {
              schematic: BV.ruinStoneLarge3,
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
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 24,
                localZ: 31,
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 1
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 13,
                localZ: 5,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 15,
                localZ: 20,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 1,
                localZ: 22,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 32,
                localY: 2,
                localZ: 23,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 17,
                localY: 2,
                localZ: 13,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 30,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 15,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 25,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 24,
                localZ: 31,
                mobTypeDistribution: new yV.h([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrSmall1: {
              schematic: qV.dungeonDraugrSmall1,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                IY: -15,
                SY: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 7,
                localY: 1,
                localZ: 1,
                qualityDistribution: new yV.h([{
                  value: YV.i.COMMON,
                  weight: 1
                }, {
                  value: YV.i.UNCOMMON,
                  weight: 2
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new yV.h([{
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
              schematic: qV.dungeonDraugrMedium1,
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
                IY: -40,
                SY: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 1,
                localZ: 8,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 1,
                localZ: 18,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 13,
                localY: 1,
                localZ: 13,
                mobTypeDistribution: new yV.h([{
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
              schematic: qV.dungeonDraugrLarge1,
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
                IY: -60,
                SY: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 4,
                localZ: 30,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 1,
                qualityDistribution: new yV.h([{
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 4,
                localZ: 9,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 38,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 2
                }, {
                  value: YV.i.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 10,
                localY: 4,
                localZ: 9,
                mobTypeDistribution: new yV.h([{
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
                mobTypeDistribution: new yV.h([{
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
              schematic: qV.dungeonMagmaLarge1,
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
                IY: -70,
                SY: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 6,
                localZ: 32,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 33,
                localY: 6,
                localZ: 7,
                qualityDistribution: new yV.h([{
                  value: YV.i.UNCOMMON,
                  weight: 1
                }, {
                  value: YV.i.RARE,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 6,
                localZ: 20,
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 2
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 6,
                localZ: 18,
                qualityDistribution: new yV.h([{
                  value: YV.i.EPIC,
                  weight: 2
                }, {
                  value: YV.i.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 12,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new yV.h([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new yV.h([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new yV.h([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new yV.h([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }]
            }
          },
          FV = [{
            KY: "ruinStoneSmall1",
            frequency: .15
          }, {
            KY: "ruinStoneSmall2",
            frequency: .15
          }, {
            KY: "ruinStoneSmall3",
            frequency: .15
          }, {
            KY: "ruinStoneSmall4",
            frequency: .15
          }, {
            KY: "ruinStoneMedium1",
            frequency: .15
          }, {
            KY: "ruinStoneSmall5",
            frequency: .15
          }, {
            KY: "ruinStoneSmall6",
            frequency: .15
          }, {
            KY: "ruinStoneMedium2",
            frequency: .15
          }, {
            KY: "ruinStoneMedium3",
            frequency: .15
          }, {
            KY: "ruinStoneMedium4",
            frequency: .15
          }, {
            KY: "ruinStoneMedium5",
            frequency: .15
          }, {
            KY: "ruinStoneMedium6",
            frequency: .15
          }, {
            KY: "ruinStoneMedium7",
            frequency: .15
          }, {
            KY: "ruinStoneMedium8",
            frequency: .15
          }, {
            KY: "ruinStoneMedium9",
            frequency: .15
          }, {
            KY: "ruinStoneMedium10",
            frequency: .15
          }, {
            KY: "ruinStoneMedium11",
            frequency: .15
          }, {
            KY: "ruinStoneLarge1",
            frequency: .15
          }, {
            KY: "ruinStoneLarge2",
            frequency: .15
          }, {
            KY: "ruinStoneLarge3",
            frequency: .15
          }],
          TV = [{
            KY: "treeMapleLarge1",
            frequency: 1
          }, {
            KY: "treeMapleLarge2",
            frequency: 1.5
          }],
          PV = {
            ruins: [{
              KY: "ruinStoneSmall1",
              frequency: .3
            }, {
              KY: "ruinStoneSmall2",
              frequency: .3
            }, {
              KY: "ruinStoneSmall3",
              frequency: .3
            }, {
              KY: "ruinStoneSmall4",
              frequency: .3
            }, {
              KY: "ruinStoneMedium1",
              frequency: .3
            }, {
              KY: "ruinStoneSmall5",
              frequency: .3
            }, {
              KY: "ruinStoneSmall6",
              frequency: .3
            }, {
              KY: "ruinStoneMedium2",
              frequency: .3
            }, {
              KY: "ruinStoneMedium3",
              frequency: .3
            }, {
              KY: "ruinStoneMedium4",
              frequency: .3
            }, {
              KY: "ruinStoneMedium5",
              frequency: .3
            }, {
              KY: "ruinStoneMedium6",
              frequency: .3
            }, {
              KY: "ruinStoneMedium7",
              frequency: .3
            }, {
              KY: "ruinStoneMedium8",
              frequency: .3
            }, {
              KY: "ruinStoneMedium9",
              frequency: .3
            }, {
              KY: "ruinStoneMedium10",
              frequency: .3
            }, {
              KY: "ruinStoneMedium11",
              frequency: .3
            }, {
              KY: "ruinStoneLarge1",
              frequency: .3
            }, {
              KY: "ruinStoneLarge2",
              frequency: .3
            }, {
              KY: "ruinStoneLarge3",
              frequency: .3
            }],
            trees: [{
              KY: "treeMapleLarge1",
              frequency: 2
            }, {
              KY: "treeMapleLarge2",
              frequency: 3
            }]
          },
          AV = {
            ruins: PV.ruins,
            trees: [{
              KY: "treePineLarge1",
              frequency: 5
            }, {
              KY: "treePineLarge2",
              frequency: 5
            }]
          },
          NV = [{
            KY: "dungeonDraugrSmall1",
            frequency: 45
          }, {
            KY: "dungeonDraugrMedium1",
            frequency: 10
          }, {
            KY: "dungeonDraugrLarge1",
            frequency: 10
          }, {
            KY: "dungeonMagmaLarge1",
            frequency: 25
          }],
          XV = FV.map((VV => {
            let {
              KY: eV
            } = VV;
            return eV
          }));

        function MV(VV) {
          for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
          return zV(VV, xV.flat().map((VV => {
            let {
              KY: eV,
              frequency: xV
            } = VV;
            return {
              prefab: eV,
              frequency: xV
            }
          })))
        }

        function zV(VV, eV) {
          let xV = 0;
          for (const JV of eV) xV += JV.frequency;
          if (xV > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${xV}`);
          return {
            density: VV,
            frequencyParams: {
              noPrefabFrequency: 100 - xV,
              prefabFrequencies: eV
            }
          }
        }
        class GV {
          constructor(VV, eV, xV, JV, YV) {
            let {
              oreGenerator: UV
            } = YV, pV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.PZ = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.PZ = VV, this.blockMetadata = eV, this.seed = JV, this.topsoilBlockType = eV["Grass Block"].id, this.lowsoilBlockType = eV.Dirt.id, this.topwaterBlockType = eV.Water.id, this.worldGenerator = xV, this.oreGenerator = UV;
            const nV = Math.ceil(xV.prefabSize / 2),
              wV = {
                [QV.n.SURFACE]: pV,
                [QV.n.UNDERGROUND]: MV(QV.m.MEDIUM, NV)
              };
            this.prefabDataPerType = Object.fromEntries(Object.values(QV.n).filter((VV => Number.isInteger(VV))).map((VV => Number(VV))).map((VV => {
              const eV = wV[VV];
              if (!eV || 0 === eV.frequencyParams.prefabFrequencies.length) return [VV, null];
              const {
                density: JV,
                frequencyParams: YV
              } = eV;
              return [VV, {
                density: JV,
                distribution: new yV.h([...YV.noPrefabFrequency > 0 ? [{
                  weight: YV.noPrefabFrequency,
                  value: null
                }] : [], ...YV.prefabFrequencies.map((VV => {
                  let {
                    prefab: eV,
                    frequency: JV
                  } = VV;
                  const YV = "string" === typeof eV ? {
                      ...tV[eV],
                      name: eV
                    } : eV,
                    UV = YV.name;
                  if ("string" !== typeof eV && Object.hasOwn(tV, UV)) throw new Error(`Prefab definition "${UV}" has a built-in prefab's name`);
                  const yV = Math.floor(Math.sqrt(YV.clearingRadiusSquared));
                  if (yV > nV) throw new Error(`Prefab ${UV} has clearing radius ${yV} which is greater than the world generator's prefab radius ${nV}`);
                  if (YV.groundingRadius > xV.maxPrefabGroundingRadius) throw new Error(`Prefab ${UV} has grounding radius ${YV.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${xV.maxPrefabGroundingRadius}`);
                  if ("centre" !== YV.groundingPoints && 0 === YV.groundingPoints.length) throw new Error(`Prefab ${UV} has no grounding points`);
                  const pV = YV.schematic.dimensions;
                  if (pV.x > xV.prefabSize || pV.y > xV.prefabSize || pV.z > xV.prefabSize) throw new Error(`Prefab ${UV} has dimensions ${JSON.stringify(pV)} which are too large for the world generator's prefab size of ${xV.prefabSize}`);
                  return {
                    weight: JV,
                    value: {
                      ...YV,
                      dimensionX: pV.x,
                      dimensionY: pV.y,
                      dimensionZ: pV.z
                    }
                  }
                }))])
              }]
            })))
          }
          init() {
            this.floraGenerator = new pV(this.blockMetadata, this.PZ, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
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
              treeType: YV.t.Maple,
              chance: this.mapleTreeChance
            }, {
              treeType: YV.t.Pine,
              chance: this.pineTreeChance
            }, {
              treeType: YV.t.Plum,
              chance: this.plumTreeChance
            }, {
              treeType: YV.t.Cedar,
              chance: this.cedarTreeChance
            }, {
              treeType: YV.t.Aspen,
              chance: this.aspenTreeChance
            }, {
              treeType: YV.t.Jungle,
              chance: this.jungleTreeChance
            }, {
              treeType: YV.t.Palm,
              chance: this.palmTreeChance
            }, {
              treeType: YV.t.AutumnMaple,
              chance: this.autumnMapleTreeChance
            }, {
              treeType: YV.t.Pear,
              chance: this.pearTreeChance
            }, {
              treeType: YV.t.Cherry,
              chance: this.cherryTreeChance
            }, {
              treeType: YV.t.Spectral,
              chance: this.spectralTreeChance
            }, {
              treeType: YV.t.Mango,
              chance: this.mangoTreeChance
            }, {
              treeType: YV.t.AutumnAspen,
              chance: this.autumnAspenTreeChance
            }, {
              treeType: YV.t.Dead,
              chance: this.deadTreeChance
            }, {
              treeType: YV.t.FallenLog,
              chance: this.fallenLogChance
            }], this.totalTreeChance = 0;
            for (const {
                chance: VV
              }
              of this.treeChances) this.totalTreeChance += VV
          }
          xzId(VV, eV) {
            return `${VV}|${eV}`
          }
          getHeightmapVal(VV, eV) {
            return this.offsettedHeight + this._heightmapSimplex.getOctaves(VV, eV)
          }
          carveGround(VV, eV, xV) {
            return null
          }
          getTopsoilBlock(VV, eV, xV) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(VV, eV, xV, JV) {
            return this.lowsoilBlockType
          }
          getStrataBlock(VV, eV, xV, JV) {
            return 0
          }
          getDryBedBlock(VV, eV, xV) {
            return this.getTopsoilBlock(VV, eV, xV)
          }
          getTotalTreeChance() {
            return this.totalTreeChance
          }
          hasPrefabs(VV, eV) {
            const xV = this.prefabDataPerType[VV];
            return null !== xV && xV.density === eV
          }
          canPlaceSurfacePrefab(VV, eV) {
            return !0
          }
          allowsPrefab(VV, eV, xV, JV, YV) {
            return !0
          }
          getRandomPrefab(VV, eV, xV) {
            const JV = this.prefabDataPerType[eV];
            return null === JV || JV.density !== xV ? null : JV.distribution.sample(VV)
          }
        }
        class WV extends GV {
          constructor(VV, eV, xV, YV, UV) {
            super(VV, eV, xV, `${YV}Desert`, UV, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = eV.Sand.id, this.lowsoilBlockType = eV.Sand.id, this._heightmapSimplex = new JV.h([{
              amplitude: 2,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${YV}DesertBiomeHeightMap`)
          }
        }
        class RV extends WV {
          constructor() {
            super(...arguments), this.key = "manyCactusDesert", this.cactusChance = .05
          }
        }
        class gV extends WV {
          constructor(VV, eV, xV, UV, yV) {
            super(VV, eV, xV, UV, yV, MV(QV.m.VERY_HIGH, [{
              KY: "treePalmLarge1",
              frequency: 45
            }, {
              KY: "treePalmLarge2",
              frequency: 45
            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(YV.d.OASIS), this._heightmapSimplex = new JV.h([{
              amplitude: 1,
              frequency: 1 / 90
            }, {
              amplitude: .5,
              frequency: 1 / 35
            }], `${UV}OasisBiomeHeightMap`)
          }
          canPlaceSurfacePrefab(VV, eV) {
            return !(this.worldGenerator.getDistToLakeEdge(VV, eV, this.maxPrefabDistFromLakeEdge) > this.maxPrefabDistFromLakeEdge)
          }
        }
        class DV extends WV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, `${JV}RedDesert`, YV), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = eV["Red Sand"].id, this.lowsoilBlockType = eV["Red Sand"].id
          }
        }
        class iV extends GV {
          constructor(VV, eV, xV, UV, yV) {
            super(VV, eV, xV, `${UV}Plains`, yV, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MV(QV.m.MEDIUM, FV, TV)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(YV.d.PLAINS), this.topsoilBlockType = eV["Grass Block"].id, this.lowsoilBlockType = eV.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new JV.h([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${UV}PlainsBiomeHeightMap`)
          }
        }
        class CV extends iV {
          constructor() {
            super(...arguments), this.key = "tallGrassPlains", this.grassChance = .06, this.tallGrassChance = .12
          }
        }
        class aV extends iV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV, YV, MV(QV.m.MEDIUM, [{
              KY: "treeMapleLarge1",
              frequency: 6
            }, {
              KY: "treeMapleLarge2",
              frequency: 9
            }])), this.key = "meadowPlains", this.grassChance = .12, this.tallGrassChance = .24, this.cornChance = 25e-5, this.flowerPatchDistApart = 5
          }
        }
        class oV extends iV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV, YV, MV(QV.m.MEDIUM, TV)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = eV.Snow.id, this.topwaterBlockType = eV.Ice.id
          }
        }
        class cV extends GV {
          constructor(VV, eV, xV, YV, UV) {
            super(VV, eV, xV, `${YV}Forest`, UV, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MV(QV.m.MEDIUM, PV.ruins, PV.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = eV["Grass Block"].id, this.lowsoilBlockType = eV.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new JV.h([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${YV}ForestBiomeHeightMap`)
          }
        }
        class hV extends cV {
          constructor() {
            super(...arguments), this.key = "plumForest", this.pumpkinChance = 30, this.melonChance = 0, this.aspenTreeChance = 0, this.plumTreeChance = 1
          }
        }
        class lV extends cV {
          constructor() {
            super(...arguments), this.key = "pearForest", this.melonChance = 30, this.aspenTreeChance = 0, this.pearTreeChance = 1
          }
        }
        class LV extends cV {
          constructor(VV, eV, xV, JV, UV) {
            super(VV, eV, xV, JV, UV, MV(QV.m.MEDIUM, PV.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(YV.d.AUTUMN)
          }
        }
        class fV extends cV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV, YV, MV(QV.m.HIGH, [{
              KY: "treeJungleLarge1",
              frequency: 20
            }, {
              KY: "treeJungleLarge2",
              frequency: 20
            }, {
              KY: "rockJungleLarge1",
              frequency: 8
            }, {
              KY: "rockJungleLarge2",
              frequency: 8
            }, {
              KY: "rockJungleLarge3",
              frequency: 8
            }, {
              KY: "rockJungleLarge4",
              frequency: 8
            }, {
              KY: "rockJungleLarge5",
              frequency: 8
            }, {
              KY: "rockJungleLarge6",
              frequency: 8
            }])), this.key = "jungleForest", this.minDistanceFromOrigin = 200, this.grassChance = .01, this.tallGrassChance = .02, this.jungleTallGrassChance = .04, this.catnipChance = .02, this.flowerPatchDistApart = 12, this.melonChance = 0, this.fatRedMushroomChance = 12, this.fatBrownMushroomChance = 12, this.aspenTreeChance = 0, this.mapleTreeChance = 0, this.jungleTreeChance = 10, this.palmTreeChance = 2, this.mangoTreeChance = 2, this.topsoilBlockType = eV["Jungle Grass Block"].id
          }
        }
        class mV extends cV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV, YV, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MV(QV.m.MEDIUM, AV.ruins, AV.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = eV["Pine Grass Block"].id
          }
        }
        class KV extends mV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV, YV), this.key = "snowyPineForest", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cranberryChance = 10, this.fallenPineConeChance = 5, this.pineGrassChance = .004, this.pineFernChance = .001, this.topsoilBlockType = eV.Snow.id, this.topwaterBlockType = eV.Ice.id
          }
        }
        class HV extends cV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, `${JV}Blue`, YV), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class uV extends cV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV, YV, MV(QV.m.MEDIUM, PV.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class sV extends GV {
          constructor(VV, eV, xV, YV, UV) {
            super(VV, eV, xV, `${YV}RollingHills`, UV), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = eV["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new JV.h([{
              amplitude: 20,
              frequency: .005
            }, {
              amplitude: 4,
              frequency: 1 / 70
            }], `${YV}RollingHillsBiomeHeightMap`)
          }
        }
        class SV extends GV {
          constructor(VV, eV, xV, YV, UV) {
            super(VV, eV, xV, `${YV}SnowyMountains`, UV), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new JV.h([{
              amplitude: 80,
              frequency: .005
            }], `${YV}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new JV.h([{
              amplitude: 20,
              frequency: 1 / 120
            }], `${YV}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new JV.h([{
              amplitude: 8,
              frequency: 1 / 120
            }], `${YV}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, JV.x)(this.ridgedNoiseOctave1) + (0, JV.x)(this.ridgedNoiseOctave2)
          }
          getHeightmapVal(VV, eV) {
            const xV = this.ridgedNoiseAmplitude - Math.abs(this.ridgedNoiseOctave1.getOctaves(VV, eV)) - Math.abs(this.ridgedNoiseOctave2.getOctaves(VV, eV));
            return this.offsettedHeight + xV + this.nonRidgedNoise.getOctaves(VV, eV)
          }
          getTopsoilBlock(VV, eV, xV) {
            return eV > 80 ? this.blockMetadata.Snow.id : eV > 60 ? this.blockMetadata.Stone.id : this.blockMetadata["Grass Block"].id
          }
          getLowsoilBlockType(VV, eV, xV, JV) {
            return eV > 85 && eV >= JV - 2 ? this.blockMetadata.Snow.id : eV > 57 ? this.blockMetadata.Stone.id : eV > 53 ? this.blockMetadata["Rocky Dirt"].id : this.blockMetadata.Dirt.id
          }
        }
        class IV extends iV {
          constructor(VV, eV, xV, YV, UV) {
            super(VV, eV, xV, YV, UV, MV(QV.m.HIGH, [{
              KY: "treeSpectralLarge1",
              frequency: 4
            }, {
              KY: "treeSpectralLarge2",
              frequency: 4
            }, {
              KY: "rockSnowLarge1",
              frequency: 18
            }, {
              KY: "rockSnowLarge2",
              frequency: 18
            }, {
              KY: "rockSnowLarge3",
              frequency: 18
            }, {
              KY: "ruinSnowSmall1",
              frequency: 4
            }, {
              KY: "ruinSnowSmall2",
              frequency: 4
            }, {
              KY: "ruinSnowSmall3",
              frequency: 4
            }, {
              KY: "ruinSnowSmall4",
              frequency: 4
            }, {
              KY: "ruinSnowMedium1",
              frequency: 4
            }, {
              KY: "ruinSnowMedium2",
              frequency: 4
            }, {
              KY: "ruinSnowLarge1",
              frequency: 3
            }, {
              KY: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = eV["Packed Snow"].id, this.lowsoilBlockType = eV.Snow.id, this.topwaterBlockType = eV.Ice.id, this._heightmapSimplex = new JV.h([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${YV}FrozenBadlandsPlainsHeightMap`)
          }
        }
        class dV extends cV {
          constructor(VV, eV, xV, YV, UV) {
            super(VV, eV, xV, YV, UV, MV(QV.m.HIGH, [{
              KY: "treeSpectralLarge1",
              frequency: 8
            }, {
              KY: "treeSpectralLarge2",
              frequency: 8
            }, {
              KY: "rockSnowLarge1",
              frequency: 4
            }, {
              KY: "rockSnowLarge2",
              frequency: 4
            }, {
              KY: "rockSnowLarge3",
              frequency: 4
            }, {
              KY: "ruinSnowSmall1",
              frequency: 6
            }, {
              KY: "ruinSnowSmall2",
              frequency: 6
            }, {
              KY: "ruinSnowSmall3",
              frequency: 6
            }, {
              KY: "ruinSnowSmall4",
              frequency: 6
            }, {
              KY: "ruinSnowMedium1",
              frequency: 4
            }, {
              KY: "ruinSnowMedium2",
              frequency: 4
            }, {
              KY: "ruinSnowLarge1",
              frequency: 3
            }, {
              KY: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = eV["Packed Snow"].id, this.lowsoilBlockType = eV.Snow.id, this.topwaterBlockType = eV.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new JV.h([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${YV}FrozenBadlandsForestHeightMap`)
          }
        }
        class OV extends GV {
          constructor(VV, eV, xV, UV, yV, pV) {
            super(VV, eV, xV, `${UV}Custom_${pV.jU}_${pV.qU}`, yV), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, YV.D)(pV.jU, eV), this.lowsoilBlockType = (0, YV.D)(pV.qU, eV), this._heightmapSimplex = new JV.h([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${UV}CustomBiomeHeightMap`)
          }
        }
      },
      41030: (VV, eV, xV) => {
        xV.d(eV, {
          d: () => wV,
          g: () => bV,
          j: () => kV,
          m: () => vV
        });
        var JV = xV(40982),
          YV = xV(40957),
          UV = xV(40946),
          yV = xV(657),
          pV = xV(40984),
          QV = xV(4648),
          nV = xV(41024);
        class wV {
          constructor(VV, eV, xV, YV, yV, QV) {
            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.EU = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.PZ = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = xV, this.blockMetadata = yV, this.PZ = YV, this.biomePointGen = new pV.b("biome", 150, !1, !0, xV, 3, YV), this.biomeOffsetSimplex = new UV.h([{
              amplitude: 1,
              frequency: .2
            }, {
              amplitude: 5,
              frequency: 1 / 70
            }], `${xV}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, UV.x)(this.biomeOffsetSimplex)), this.baseBiome = new JV.k(YV, yV, VV, xV, {
              oreGenerator: eV
            }), this.baseBiome.init(), this.EU = QV, this.anyStrata = QV.some((VV => {
              let {
                biome: eV
              } = VV;
              return eV.strataDepth > 0
            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.EU.length);
            for (let JV = 0; JV < this.EU.length; JV++) {
              const VV = this.EU[JV],
                {
                  biome: eV,
                  frequency: xV,
                  altBiome: YV
                } = VV;
              if (this.biomeFrequencies[JV] = xV, null !== YV) {
                if (YV.init(), YV.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${JV}`);
                let VV = !1;
                for (let eV = 0; eV < this.EU.length; eV++)
                  if (this.EU[eV].biome === YV) {
                    VV = !0;
                    break
                  } if (!VV) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${JV}`)
              } else if (eV.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${JV}`);
              this.biomesTotalFrequency += xV, eV.init()
            }
          }
          generate(VV, eV) {
            const [xV, JV] = this.getBiomeOffsets(VV, eV), YV = this.biomePointGen.getKClosestPointsWithWeights(VV + xV, eV + JV, 60), UV = [];
            for (let yV = 0; yV < YV.length; yV++) {
              const VV = YV[yV],
                {
                  biome: eV,
                  biomeId: xV
                } = this.getBiomeForBiomePoint(VV.pt),
                JV = {
                  weight: VV.weight,
                  biome: eV,
                  biomeId: xV,
                  biomeModifiers: null
                };
              0 === yV && (JV.biomeModifiers = this.getBiomeModifiersForBiomePoint(VV.pt)), UV.push(JV)
            }
            return UV
          }
          getBiome(VV, eV) {
            const [xV, JV] = this.getBiomeOffsets(VV, eV), YV = this.biomePointGen.getClosestPoint(VV + xV, eV + JV);
            return this.getBiomeForBiomePoint(YV)
          }
          regionMayHaveScatteredLakes(VV, eV) {
            const xV = this.biomePointGen.gridSize;
            if (VV >= this.lastScatteredLakeCellX * xV + this.biomeOffsetBound && VV < (this.lastScatteredLakeCellX + 1) * xV - this.biomeOffsetBound && eV >= this.lastScatteredLakeCellZ * xV + this.biomeOffsetBound && eV < (this.lastScatteredLakeCellZ + 1) * xV - this.biomeOffsetBound) return this.lastScatteredLakeCellResult;
            const [JV, YV] = this.getBiomeOffsets(VV, eV), UV = VV + JV, yV = eV + YV, pV = this.biomePointGen.getCellCoordFromGlobalCoord(UV, yV), QV = pV[0], nV = pV[1];
            if (QV === this.lastScatteredLakeCellX && nV === this.lastScatteredLakeCellZ) return this.lastScatteredLakeCellResult;
            let wV = !1;
            for (const ZV of this.biomePointGen.getPointsAroundPoint(UV, yV))
              if (this.getBiomeForBiomePoint(ZV).biome.hasScatteredLakes) {
                wV = !0;
                break
              } return this.lastScatteredLakeCellX = QV, this.lastScatteredLakeCellZ = nV, this.lastScatteredLakeCellResult = wV, wV
          }
          regionMayHaveVeryHighSurfacePrefabs(VV, eV, xV, JV) {
            const UV = this.biomePointGen.gridSize,
              yV = Math.floor((VV - this.biomeOffsetBound) / UV),
              pV = Math.floor((eV - this.biomeOffsetBound) / UV),
              QV = Math.floor((xV + this.biomeOffsetBound) / UV),
              nV = Math.floor((JV + this.biomeOffsetBound) / UV);
            for (let wV = yV; wV <= QV; wV++)
              for (let VV = pV; VV <= nV; VV++) {
                const eV = this.biomePointGen.getPointsAroundPoint(wV * UV, VV * UV);
                let xV = this.veryHighSurfacePrefabCells.get(eV);
                if (void 0 === xV) {
                  xV = !1;
                  for (const VV of eV)
                    if (this.getBiomeForBiomePoint(VV).biome.hasPrefabs(YV.n.SURFACE, YV.m.VERY_HIGH)) {
                      xV = !0;
                      break
                    } this.veryHighSurfacePrefabCells.set(eV, xV)
                }
                if (xV) return !0
              }
            return !1
          }
          getBiomeOffsets(VV, eV) {
            if (VV === this.lastBiomeOffsetAtX && eV === this.lastBiomeOffsetAtZ) return this.lastBiomeOffsets;
            const xV = Math.floor(this.biomeOffsetSimplex.getOctaves(VV, eV)),
              JV = Math.floor(this.biomeOffsetSimplex.getOctaves(VV + 500, eV + 860));
            return this.lastBiomeOffsetAtX = VV, this.lastBiomeOffsetAtZ = eV, this.lastBiomeOffsets[0] = xV, this.lastBiomeOffsets[1] = JV, this.lastBiomeOffsets
          }
          getBiomeForBiomePoint(VV) {
            if (this.mostRecentlyAccessedBiome && VV[0] === this.mostRecentlyAccessedPtForBiome[0] && VV[1] === this.mostRecentlyAccessedPtForBiome[1]) return this.mostRecentlyAccessedBiome;
            const eV = (0, nV.h)(VV[0], VV[1]);
            let xV = this.biomesByPoint.get(eV);
            return void 0 === xV && (xV = this.pickBiomeForBiomePoint(VV), this.biomesByPoint.size >= 1024 && this.biomesByPoint.clear(), this.biomesByPoint.set(eV, xV)), this.mostRecentlyAccessedBiome = xV, this.mostRecentlyAccessedPtForBiome[0] = VV[0], this.mostRecentlyAccessedPtForBiome[1] = VV[1], xV
          }
          pickBiomeForBiomePoint(VV) {
            const eV = Math.max(Math.abs(VV[0]), Math.abs(VV[1])),
              xV = new QV.l(`${VV[0]}|${VV[1]}|${this.seed}`);
            let JV = rV(this.biomeFrequencies, this.biomesTotalFrequency, xV),
              YV = this.EU[JV].biome;
            if (eV < YV.minDistanceFromOrigin) {
              YV = this.EU[JV].altBiome;
              for (let VV = 0; VV < this.EU.length; VV++)
                if (this.EU[VV].biome === YV) {
                  JV = VV;
                  break
                }
            }
            return {
              biome: YV,
              biomeId: JV
            }
          }
          getBiomeModifiersForBiomePoint(VV) {
            if (this.mostRecentlyAccessedModifier && VV[0] === this.mostRecentlyAccessedModifierPt[0] && VV[1] === this.mostRecentlyAccessedModifierPt[1]) return this.mostRecentlyAccessedModifier;
            const {
              biomeId: eV
            } = this.getBiomeForBiomePoint(VV), {
              tU: xV,
              stoneFrequencies: JV,
              stonesTotalFrequency: YV
            } = this.EU[eV], UV = {
              stoneTypeId: xV[rV(JV, YV, new QV.l(`${VV[0]}|${VV[1]}|${this.seed}Modifiers`))].stoneId
            };
            return this.mostRecentlyAccessedModifier = UV, this.mostRecentlyAccessedModifierPt[0] = VV[0], this.mostRecentlyAccessedModifierPt[1] = VV[1], UV
          }
          getBiomeInfoForChunkFill(VV, eV, xV) {
            const JV = {
              biomeIds: new UV.g(this.PZ, [VV, eV]),
              stoneTypeIds: new UV.g(this.PZ, [VV, eV])
            };
            for (let YV = VV; YV < VV + this.PZ; YV++)
              for (let VV = eV; VV < eV + this.PZ; VV++) {
                const eV = xV.getOrGenerate(YV, VV)[0];
                JV.biomeIds.set(YV, VV, eV.biomeId), JV.stoneTypeIds.set(YV, VV, eV.biomeModifiers.stoneTypeId)
              }
            return JV
          }
          getBiomeFromId(VV) {
            return this.EU[VV].biome
          }
        }

        function ZV(VV) {
          let eV = 0;
          const xV = [];
          for (const JV of VV) eV += JV.frequency, xV.push(JV.frequency);
          return {
            tU: VV,
            stoneFrequencies: xV,
            stonesTotalFrequency: eV
          }
        }

        function vV(VV) {
          return ZV(function(VV) {
            return [{
              stoneId: VV.Stone.id,
              frequency: 100
            }, {
              stoneId: VV.Andesite.id,
              frequency: 4
            }, {
              stoneId: VV.Diorite.id,
              frequency: 2
            }, {
              stoneId: VV.Granite.id,
              frequency: 1
            }]
          }(VV))
        }

        function rV(VV, eV, xV) {
          const JV = xV.next() * eV;
          let YV = 0,
            UV = 0;
          for (; YV <= JV;) YV += VV[UV], UV++;
          return UV - 1
        }

        function kV(VV) {
          let {
            PZ: eV,
            blockMetadata: xV,
            worldGenerator: YV,
            seed: UV,
            biomeOpts: yV
          } = VV;
          const pV = new JV.x(eV, xV, YV, UV, yV),
            QV = new JV.H(eV, xV, YV, UV, yV),
            nV = new JV.K(eV, xV, YV, UV, yV),
            wV = new JV.Z(eV, xV, YV, UV, yV),
            ZV = new JV.R(eV, xV, YV, UV, yV),
            rV = new JV.y(eV, xV, YV, UV, yV),
            kV = new JV.V(eV, xV, YV, UV, yV),
            bV = new JV.O(eV, xV, YV, UV, yV),
            EV = new JV.P(eV, xV, YV, UV, yV),
            BV = new JV.gb(eV, xV, YV, UV, yV),
            jV = new JV.D(eV, xV, YV, UV, yV),
            qV = new JV.e(eV, xV, YV, UV, yV),
            tV = new JV.ab(eV, xV, YV, UV, yV),
            FV = new JV.db(eV, xV, YV, UV, yV),
            TV = new JV.n(eV, xV, YV, UV, yV),
            PV = new JV.r(eV, xV, YV, UV, yV),
            AV = new JV.ib(eV, xV, YV, UV, yV),
            NV = new JV.lb(eV, xV, YV, UV, yV),
            XV = new JV.I(eV, xV, YV, UV, yV),
            MV = new JV.B(eV, xV, YV, UV, yV),
            zV = new JV.z(eV, xV, YV, UV, yV),
            GV = vV(xV);
          return [{
            biome: jV,
            frequency: 2,
            altBiome: rV
          }, {
            biome: pV,
            frequency: 23,
            altBiome: null
          }, {
            biome: nV,
            frequency: 8,
            altBiome: null
          }, {
            biome: MV,
            frequency: 2,
            altBiome: ZV
          }, {
            biome: QV,
            frequency: 1,
            altBiome: null
          }, {
            biome: wV,
            frequency: 4,
            altBiome: null
          }, {
            biome: jV,
            frequency: 6,
            altBiome: rV
          }, {
            biome: ZV,
            frequency: 62,
            altBiome: null
          }, {
            biome: MV,
            frequency: 2,
            altBiome: ZV
          }, {
            biome: XV,
            frequency: 4,
            altBiome: null
          }, {
            biome: NV,
            frequency: 2,
            altBiome: null
          }, {
            biome: AV,
            frequency: 4,
            altBiome: null
          }, {
            biome: rV,
            frequency: 16,
            altBiome: null
          }, {
            biome: PV,
            frequency: 4,
            altBiome: null
          }, {
            biome: bV,
            frequency: 6,
            altBiome: null
          }, {
            biome: qV,
            frequency: 6,
            altBiome: null
          }, {
            biome: kV,
            frequency: 24,
            altBiome: null
          }, {
            biome: zV,
            frequency: 2,
            altBiome: rV
          }, {
            biome: PV,
            frequency: 2,
            altBiome: null
          }, {
            biome: jV,
            frequency: 4,
            altBiome: rV
          }, {
            biome: EV,
            frequency: 12,
            altBiome: rV
          }, {
            biome: zV,
            frequency: 2,
            altBiome: rV
          }, {
            biome: BV,
            frequency: 2,
            altBiome: rV
          }, {
            biome: tV,
            frequency: 32,
            altBiome: null
          }, {
            biome: FV,
            frequency: 16,
            altBiome: null
          }, {
            biome: TV,
            frequency: 4,
            altBiome: null
          }].map((VV => ({
            ...VV,
            ...GV
          })))
        }

        function bV(VV, eV) {
          let {
            PZ: xV,
            blockMetadata: YV,
            worldGenerator: UV,
            seed: pV,
            biomeOpts: QV
          } = eV;
          if (0 === VV.length) throw new Error("buildCustomBiomes requires at least one custom biome");
          return VV.map((VV => {
            const eV = new JV.v(xV, YV, UV, pV, QV, VV),
              nV = VV.tU.map((VV => ({
                stoneId: (0, yV.D)(VV.blockName, YV),
                frequency: VV.frequency
              })));
            return {
              biome: eV,
              frequency: VV.frequency,
              altBiome: null,
              ...ZV(nV)
            }
          }))
        }
      },
      41042: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => bV
        });
        var JV = xV(40946),
          YV = xV(657),
          UV = xV(40957),
          yV = xV(40955),
          pV = xV(4648);
        class QV {
          constructor(VV, eV, xV, JV) {
            this.PZ = VV, this.pointsGenerator = eV, this.seed = JV, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * xV / this.PZ) + 1
          }
          getChunkCoordFromGlobalCoord(VV, eV) {
            return this.tempChunkCoord[0] = Math.floor(VV / this.PZ), this.tempChunkCoord[1] = Math.floor(eV / this.PZ), this.tempChunkCoord
          }
          getSurroundingFeatures(VV, eV) {
            const xV = this.getChunkCoordFromGlobalCoord(VV, eV),
              JV = [];
            for (let YV = xV[0] - this.chunkSearchRadius; YV <= xV[0] + this.chunkSearchRadius; YV++)
              for (let VV = xV[1] - this.chunkSearchRadius; VV <= xV[1] + this.chunkSearchRadius; VV++) this.pointsGenerator.isPoint(YV, VV) && JV.push(this.getRandomPointInChunk(YV, VV));
            return JV
          }
          getRandomPointInChunk(VV, eV) {
            const xV = VV * this.PZ,
              JV = eV * this.PZ,
              YV = new pV.l(`${VV}|${eV}|${this.seed}`);
            return [xV + Math.floor(YV.next() * this.PZ), JV + Math.floor(YV.next() * this.PZ)]
          }
        }
        var nV = xV(40984),
          wV = xV(41024);
        class ZV {
          constructor(VV, eV, xV, JV) {
            this.numCaveTypes = VV, this.caveTypeToBlockIds = eV, this.caveTypePrioritization = xV, this.PZ = JV
          }
        }
        class vV extends ZV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV), this.data = YV
          }
          getOrGenerate(VV, eV, xV, JV) {
            return this.data.getOrGenerate(VV, eV, xV, JV)
          }
          viewJustInnerChunk() {
            return new rV(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.PZ, this.data.viewJustInnerChunk())
          }
        }
        class rV extends ZV {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, xV, JV), this.data = YV
          }
          getOrGenerate(VV, eV, xV, JV) {
            return this.data.get(VV, eV, xV, JV)
          }
        }

        function kV(VV) {
          const eV = VV.high - VV.low;
          return {
            low: VV.low,
            high: VV.high,
            midpoint: (VV.low + VV.high) / 2,
            width: eV,
            halfWidth: eV / 2
          }
        }
        class bV {
          constructor(VV, eV, xV, JV) {
            this.PZ = eV, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new qV(VV, eV, xV, JV)
          }
          static isInCave(VV, eV, xV, JV) {
            for (let YV = 0; YV < JV.numCaveTypes; YV++) {
              const yV = JV.getOrGenerate(VV, xV, YV, UV.d.FloorY),
                pV = JV.getOrGenerate(VV, xV, YV, UV.d.CeilingY);
              if (yV <= eV && eV <= pV) return !0
            }
            return !1
          }
          static addCavesToChunk(VV, eV, xV, JV, YV, QV) {
            const nV = new pV.l(`caveBlocks${eV}|${xV}|${JV}`);
            for (let pV = eV; pV < eV + QV.PZ; pV++)
              for (let wV = JV; wV < JV + QV.PZ; wV++) {
                const ZV = YV.get(pV, wV, UV.g.GroundHeight);
                for (const YV of QV.caveTypePrioritization) {
                  const vV = QV.getOrGenerate(pV, wV, YV, UV.d.FloorY);
                  if (vV === yV.l) continue;
                  const rV = QV.getOrGenerate(pV, wV, YV, UV.d.CeilingY),
                    kV = Math.min(rV + 1, xV + QV.PZ, ZV + 1),
                    bV = QV.caveTypeToBlockIds[YV];
                  for (let YV = Math.max(vV, xV); YV < kV; YV++) {
                    const UV = "number" === typeof bV ? bV : bV.sample(nV);
                    VV.set(pV - eV, YV - xV, wV - JV, UV)
                  }
                }
              }
          }
          getCaveHeightmapVals(VV, eV, xV) {
            const YV = [VV, eV],
              yV = new EV(this.caveMetadataForChunkCache, xV, this.PZ),
              pV = this.caveMetadataForChunkCache.numCaveTypes,
              QV = this.caveMetadataForChunkCache.caveTypeToBlockId,
              nV = this.caveMetadataForChunkCache.caveTypePrioritization,
              wV = JV.e.create(this.PZ, YV, pV, UV.d.NumFields, yV);
            return new vV(pV, QV, nV, this.PZ, wV)
          }
        }
        class EV {
          constructor(VV, eV, xV) {
            if (this.caveMetadataForChunkCache = VV, this.heightmapVals = eV, this.caveGeneratorsPerChunk = [], xV !== YV.y) throw new Error(`Cave generation is not supported for chunk sizes other than ${YV.y}`)
          }
          generateAndSet(VV, eV, xV) {
            const JV = (0, YV.V)(VV),
              UV = (0, YV.V)(eV);
            this.getOrCreateCaveGeneratorForChunk(JV, UV).generateAndSet(VV, eV, xV)
          }
          getOrCreateCaveGeneratorForChunk(VV, eV) {
            return void 0 === this.caveGeneratorsPerChunk[VV] && (this.caveGeneratorsPerChunk[VV] = []), void 0 === this.caveGeneratorsPerChunk[VV][eV] && (this.caveGeneratorsPerChunk[VV][eV] = this.caveMetadataForChunkCache.getOrCreateCaveGeneratorForChunk(VV, eV, this.heightmapVals)), this.caveGeneratorsPerChunk[VV][eV]
          }
        }
        class BV {
          constructor(VV, eV, xV, JV, YV, UV) {
            this.heightmapVals = VV, this.spaghettiCaveMetadataForChunk = eV, this.pitCaveMetadataForChunk = xV, this.ravineCaveMetadataForChunk = JV, this.sphereCaveMetadataForChunk = YV, this.numCaveTypes = UV
          }
          generateAndSet(VV, eV, xV) {
            this.setDefaultCaves(VV, eV, xV), this.generateAndSetSpaghettiCaves(VV, eV, xV), this.generateAndSetPitCaves(VV, eV, xV), this.generateAndSetRavineCaves(VV, eV, xV), this.generateAndSetSphereCaves(VV, eV, xV), this.removeCavesNearWater(VV, eV, xV)
          }
          setDefaultCaves(VV, eV, xV) {
            for (let JV = 0; JV < this.numCaveTypes; JV++) xV.set(VV, eV, JV, UV.d.FloorY, yV.l), xV.set(VV, eV, JV, UV.d.CeilingY, yV.l)
          }
          generateAndSetSpaghettiCaves(VV, eV, xV) {
            for (const JV of this.spaghettiCaveMetadataForChunk) {
              const YV = JV.caveEdgeNoiseGenerator.getOctaves(VV, eV);
              if (YV >= BV.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
              const pV = JV.caveHeightNoiseGenerator.getOctaves(VV, eV);
              if (pV === yV.b) continue;
              if (!(JV.caveHeightThreshold.low < pV && pV < JV.caveHeightThreshold.high)) continue;
              let QV;
              {
                let VV = 1 - Math.abs(pV - JV.caveHeightThreshold.midpoint) / JV.caveHeightThreshold.halfWidth;
                VV = Math.min(JV.caveHeightPercentageUpperBound, VV), QV = JV.caveHeightMax * VV
              }
              YV > 0 && (QV *= (BV.SPAGHETTI_CAVE_EDGE_CUTOFF - YV) / BV.SPAGHETTI_CAVE_EDGE_CUTOFF);
              const nV = JV.caveXZPerturbNoiseGenerator.getOctaves(VV, eV),
                wV = JV.caveXZPerturbNoiseGenerator.getOctaves(VV + 980, eV - 370),
                ZV = JV.caveYPerturbNoiseGenerator.getOctaves(VV + nV, eV + wV),
                vV = Math.floor(JV.caveCentreY + ZV - QV);
              let rV = Math.floor(JV.caveCentreY + ZV + QV);
              rV + 1 === this.heightmapVals.getOrGenerate(VV, eV, UV.g.GroundHeight) && rV++, xV.set(VV, eV, JV.caveType, UV.d.FloorY, vV), xV.set(VV, eV, JV.caveType, UV.d.CeilingY, rV)
            }
          }
          generateAndSetPitCaves(VV, eV, xV) {
            for (const JV of this.pitCaveMetadataForChunk) {
              const YV = JV.pitMinX,
                yV = JV.pitMaxX,
                pV = JV.pitMinZ,
                QV = JV.pitMaxZ;
              if (VV < JV.reachMinX || VV > JV.reachMaxX || eV < JV.reachMinZ || eV > JV.reachMaxZ) continue;
              const nV = VV + JV.pitXZPerturbNoiseGenerator.getOctaves(VV, eV),
                wV = eV + JV.pitXZPerturbNoiseGenerator.getOctaves(VV + 430, eV - 330);
              if (nV < YV || nV > yV || wV < pV || wV > QV) continue;
              const ZV = null === JV.pitHeightPerturbNoiseGenerator,
                vV = JV.pitFloorYPerturbNoiseGenerator.getOctaves(VV, eV),
                rV = ZV ? 0 : JV.pitHeightPerturbNoiseGenerator.getOctaves(VV, eV);
              let kV = JV.pitFloorY + vV,
                bV = JV.pitFloorY + JV.pitHeight + rV;
              const EV = 4,
                BV = Math.min(nV - YV, yV - nV),
                jV = Math.min(wV - pV, QV - wV),
                qV = Math.min(BV, jV);
              if (qV < EV) {
                const xV = 1 - qV / EV;
                kV += (5 + JV.pitMidpointYPerturbNoiseGenerator.getOctaves(VV, eV)) * xV, ZV || (bV -= (bV - kV) * xV)
              }
              kV = Math.floor(kV), bV = Math.floor(bV), (ZV || bV + 1 === this.heightmapVals.getOrGenerate(VV, eV, UV.g.GroundHeight)) && bV++;
              let tV = JV.caveType;
              null !== JV.wallType && (BV <= .9 || jV <= .9) ? tV = JV.wallType : JV.pitCeilingThickness > 0 && (bV -= JV.pitCeilingThickness, xV.set(VV, eV, JV.ceilingType, UV.d.FloorY, bV), xV.set(VV, eV, JV.ceilingType, UV.d.CeilingY, bV + JV.pitCeilingThickness)), xV.set(VV, eV, tV, UV.d.FloorY, kV), xV.set(VV, eV, tV, UV.d.CeilingY, bV)
            }
          }
          generateAndSetRavineCaves(VV, eV, xV) {
            for (const YV of this.ravineCaveMetadataForChunk) {
              const yV = YV.ravineCentre,
                pV = YV.ravineWidth,
                QV = YV.ravineLength,
                nV = VV - yV[0],
                wV = eV - yV[1];
              if (nV * nV + wV * wV > YV.reachDistanceSquared) continue;
              if (Math.abs(nV * YV.axisNormalX + wV * YV.axisNormalZ) > YV.reachFromAxis) continue;
              const ZV = VV + YV.ravineXZPerturbNoiseGenerator.getOctaves(VV, eV),
                vV = eV + YV.ravineXZPerturbNoiseGenerator.getOctaves(VV + 430, eV - 330),
                rV = (0, JV.I)(yV, ZV, vV);
              if (rV > QV) continue;
              const kV = [ZV, vV],
                bV = yV,
                EV = [yV[0] + YV.ravineDirection[0], yV[1] + YV.ravineDirection[1]],
                BV = (0, JV.v)(kV, bV, EV),
                jV = pV * (1 - rV / QV);
              if (BV > jV) continue;
              const qV = YV.ravineYPerturbNoiseGenerator.getOctaves(VV, eV);
              let tV = YV.ravineFloorY + qV,
                FV = YV.ravineFloorY + YV.ravineHeight + qV;
              const TV = 3,
                PV = jV - BV;
              if (PV < TV) {
                const VV = 1 - PV / TV;
                tV += YV.ravineHeight * VV
              }
              tV = Math.floor(tV), FV = Math.floor(FV), FV + 1 === this.heightmapVals.getOrGenerate(VV, eV, UV.g.GroundHeight) && FV++, xV.set(VV, eV, YV.caveType, UV.d.FloorY, tV), xV.set(VV, eV, YV.caveType, UV.d.CeilingY, FV)
            }
          }
          generateAndSetSphereCaves(VV, eV, xV) {
            for (const JV of this.sphereCaveMetadataForChunk) {
              const YV = VV - JV.sphereCentreX,
                yV = eV - JV.sphereCentreZ;
              if (YV * YV + yV * yV > JV.reachDistanceSquared) continue;
              const pV = VV + JV.sphereXZPerturbNoiseGenerator.getOctaves(VV, eV),
                QV = eV + JV.sphereXZPerturbNoiseGenerator.getOctaves(VV + 430, eV - 330),
                nV = JV.sphereCentreX - pV,
                wV = JV.sphereCentreZ - QV,
                ZV = nV * nV + wV * wV;
              if (ZV > JV.sphereRadiusSquared) continue;
              const vV = Math.sqrt(JV.sphereRadiusSquared - ZV),
                rV = Math.floor(JV.sphereCentreY - vV);
              let kV = Math.floor(JV.sphereCentreY + vV);
              kV + 1 === this.heightmapVals.getOrGenerate(VV, eV, UV.g.GroundHeight) && kV++, xV.set(VV, eV, JV.caveType, UV.d.FloorY, rV), xV.set(VV, eV, JV.caveType, UV.d.CeilingY, kV)
            }
          }
          removeCavesNearWater(VV, eV, xV) {
            const JV = this.heightmapVals.getOrGenerate(VV, eV, UV.g.CavesAllowedBelowY);
            if (JV !== yV.k)
              for (let YV = 0; YV < this.numCaveTypes; YV++) {
                if (xV.get(VV, eV, YV, UV.d.CeilingY) <= JV) continue;
                xV.get(VV, eV, YV, UV.d.FloorY) <= JV ? xV.set(VV, eV, YV, UV.d.CeilingY, JV) : (xV.set(VV, eV, YV, UV.d.FloorY, yV.l), xV.set(VV, eV, YV, UV.d.CeilingY, yV.l))
              }
          }
        }
        BV.SPAGHETTI_CAVE_EDGE_CUTOFF = .08;
        const jV = new wV.e("cave chunk metadata", 100, 6e4);
        class qV {
          constructor(VV, eV, xV, UV) {
            this.seed = VV, this.spaghettiCaveMetadata = void 0, this.pitCaveMetadata = void 0, this.ravineCaveMetadata = void 0, this.sphereCaveMetadata = void 0, this.numCaveTypes = void 0, this.caveTypeToBlockId = void 0, this.caveTypePrioritization = void 0, this.perChunkCache = jV.partition();
            let yV = 0;
            const wV = [],
              ZV = [];
            {
              const {
                spaghettiCaveMetadata: eV,
                nextCaveType: xV
              } = function(VV, eV) {
                const xV = {
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
                  YV = [...[{
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
                  }].map((VV => ({
                    ...xV,
                    ...VV
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
                  UV = [];
                for (let yV = 0; yV < YV.length; yV++) {
                  const xV = YV[yV];
                  let pV = 0;
                  for (const VV of xV.caveYPerturbNoiseParams) pV += VV.amplitude;
                  for (let YV = 0; YV < xV.count; YV++) UV.push({
                    caveType: eV++,
                    caveEdgeNoiseGenerator: new JV.h(xV.caveEdgeNoiseParams, `${VV}CaveCutoff${yV}${YV}`),
                    caveHeightNoiseGenerator: new JV.k(xV.caveHeightNoiseParams, xV.caveHeightNoiseThresholdParams, `${VV}Cave${yV}${YV}`),
                    caveHeightThreshold: kV(xV.caveHeightNoiseThresholdParams),
                    caveHeightMax: xV.caveHeightMax,
                    caveHeightPercentageUpperBound: xV.caveHeightPercentageUpperBound,
                    caveXZPerturbNoiseGenerator: new JV.h(xV.caveXZPerturbNoiseParams, `${VV}CaveHeightPerturb${yV}${YV}`),
                    caveYPerturbNoiseGenerator: new JV.h(xV.caveYPerturbNoiseParams, `${VV}CaveHeightNoise${yV}${YV}`),
                    caveCentreY: xV.caveCentreYMin + pV
                  })
                }
                return {
                  spaghettiCaveMetadata: UV,
                  nextCaveType: eV
                }
              }(VV, yV);
              this.spaghettiCaveMetadata = eV, yV = xV
            } {
              const {
                pitCaveMetadata: vV,
                nextCaveType: rV
              } = function(VV, eV, xV, UV, yV, wV, ZV) {
                const vV = [{
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
                    fillBlockId: (0, YV.D)(UV, xV),
                    wallBlockIds: new pV.h([{
                      value: xV.Stone.id,
                      weight: 3
                    }, {
                      value: xV["Compressed Messy Stone"].id,
                      weight: 5
                    }, {
                      value: xV.Magma.id,
                      weight: 1
                    }]),
                    ceilingParams: {
                      blockIds: 0,
                      minThickness: 2,
                      maxThickness: 5
                    },
                    numChunksBetweenPits: 2
                  }],
                  rV = [];
                for (const YV of vV) {
                  let xV = 0;
                  for (const VV of YV.pitXZPerturbNoiseParams) xV += VV.amplitude;
                  for (let UV = 0; UV < YV.count; UV++) {
                    const UV = rV.length,
                      vV = new JV.h(YV.pitXZPerturbNoiseParams, `${VV}DistPitPerturb${UV}`),
                      kV = `${VV}PitGen${UV}`,
                      bV = new nV.b("cavePit", YV.numChunksBetweenPits, !0, !1, kV, 100, eV),
                      EV = new QV(eV, bV, YV.pitMaxWidth + 2 * xV, kV);
                    console.assert(EV.chunkSearchRadius <= YV.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${EV.chunkSearchRadius} ${YV.numChunksBetweenPits/2}`);
                    const BV = new pV.m(YV.pitMinWidth, YV.pitMaxWidth),
                      jV = new pV.m(YV.pitMinFloorY, YV.pitMaxFloorY),
                      qV = new pV.m(YV.pitMinHeight, YV.pitMaxHeight),
                      tV = new JV.h(YV.pitFloorYPerturbNoiseParams, `${VV}yPitPerturb${UV}`);
                    let FV = null;
                    null !== YV.pitHeightPerturbNoiseParams && (FV = new JV.h(YV.pitHeightPerturbNoiseParams, `${VV}heightPitPerturb${UV}`));
                    const TV = new JV.h(YV.pitMidpointNoiseParams, `${VV}edgesPitPerturb${UV}`),
                      PV = yV++;
                    wV[PV] = YV.fillBlockId;
                    let AV = null;
                    null !== YV.wallBlockIds && (AV = yV++, wV[AV] = YV.wallBlockIds);
                    let NV = null,
                      XV = null;
                    null !== YV.ceilingParams && (NV = yV++, XV = new pV.m(YV.ceilingParams.minThickness, YV.ceilingParams.maxThickness), wV[NV] = YV.ceilingParams.blockIds), void 0 !== YV.priority && (ZV[PV] = YV.priority, null !== AV && (ZV[AV] = YV.priority), null !== NV && (ZV[NV] = YV.priority)), rV.push({
                      caveType: PV,
                      wallType: AV,
                      ceilingType: NV,
                      pitCeilingThicknessDistribution: XV,
                      pitPointGenerator: EV,
                      pitXZPerturbNoiseGenerator: vV,
                      pitWidthDistribution: BV,
                      pitLengthDistribution: BV,
                      pitFloorYDistribution: jV,
                      pitHeightDistribution: qV,
                      pitFloorYPerturbNoiseGenerator: tV,
                      pitHeightPerturbNoiseGenerator: FV,
                      pitMidpointYPerturbNoiseGenerator: TV
                    })
                  }
                }
                return {
                  pitCaveMetadata: rV,
                  nextCaveType: yV
                }
              }(VV, eV, xV, UV, yV, wV, ZV);
              this.pitCaveMetadata = vV, yV = rV
            } {
              const {
                ravineCaveMetadata: xV,
                nextCaveType: YV
              } = function(VV, eV, xV) {
                const YV = {
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
                  UV = [];
                for (let yV = 0; yV < YV.count; yV++) {
                  const wV = YV,
                    ZV = new JV.h(wV.ravineXZPerturbNoiseParams, `${VV}DistRavPerturb${yV}`);
                  let vV = 0;
                  for (const VV of wV.ravineXZPerturbNoiseParams) vV += VV.amplitude;
                  const rV = new JV.h(wV.ravineYPerturbNoiseParams, `${VV}yRavinePerturb${yV}`),
                    kV = `${VV}RavineGen${yV}`,
                    bV = new nV.b("caveRav", wV.numChunksBetweenRavines, !0, !1, kV, 100, eV),
                    EV = new QV(eV, bV, Math.max(wV.ravineMaxLength, wV.ravineMaxWidth) + 2 * vV, kV);
                  console.assert(EV.chunkSearchRadius <= wV.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${EV.chunkSearchRadius} ${wV.numChunksBetweenRavines/2}`);
                  const BV = new pV.m(wV.ravineMinWidth, wV.ravineMaxWidth),
                    jV = new pV.m(wV.ravineMinLength, wV.ravineMaxLength),
                    qV = new pV.m(wV.ravineMinFloorY, wV.ravineMaxFloorY, !0),
                    tV = new pV.m(wV.ravineMinHeight, wV.ravineMaxHeight),
                    FV = new pV.n(-1, 1);
                  UV.push({
                    caveType: xV++,
                    ravinePointGenerator: EV,
                    ravineXZPerturbNoiseGenerator: ZV,
                    ravineYPerturbNoiseGenerator: rV,
                    ravineWidthDistribution: BV,
                    ravineLengthDistribution: jV,
                    ravineFloorYDistribution: qV,
                    ravineHeightDistribution: tV,
                    ravineXZDirectionDistribution: FV
                  })
                }
                return {
                  ravineCaveMetadata: UV,
                  nextCaveType: xV
                }
              }(VV, eV, yV);
              this.ravineCaveMetadata = xV, yV = YV
            } {
              const {
                sphereCaveMetadata: xV,
                nextCaveType: YV
              } = function(VV, eV, xV) {
                const YV = {
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
                  UV = [];
                for (let yV = 0; yV < YV.count; yV++) {
                  const wV = YV,
                    ZV = new JV.h(wV.sphereXZPerturbNoiseParams, `${VV}DistSpherePerturb${yV}`);
                  let vV = 0;
                  for (const VV of wV.sphereXZPerturbNoiseParams) vV += VV.amplitude;
                  const rV = `${VV}SphereGen${yV}`,
                    kV = new nV.b("caveSph", wV.numChunksBetweenSpheres, !0, !1, rV, 100, eV),
                    bV = new QV(eV, kV, 2 * (wV.sphereMaxRadius + vV), rV);
                  console.assert(bV.chunkSearchRadius <= wV.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${bV.chunkSearchRadius} ${wV.numChunksBetweenSpheres/2}`);
                  const EV = new pV.m(wV.sphereMinRadius, wV.sphereMaxRadius, !0),
                    BV = new pV.m(wV.sphereMinCentreY, wV.sphereMaxCentreY);
                  UV.push({
                    caveType: xV,
                    spherePointGenerator: bV,
                    sphereXZPerturbNoiseGenerator: ZV,
                    sphereRadiusDistribution: EV,
                    sphereCentreYDistribution: BV
                  })
                }
                return {
                  sphereCaveMetadata: UV,
                  nextCaveType: xV
                }
              }(VV, eV, yV);
              this.sphereCaveMetadata = xV, yV = YV
            }
            this.numCaveTypes = yV;
            for (let JV = 0; JV < this.numCaveTypes; JV++) void 0 === wV[JV] && (wV[JV] = 0), void 0 === ZV[JV] && (ZV[JV] = 0);
            this.caveTypeToBlockId = wV, this.caveTypePrioritization = ZV.map(((VV, eV) => ({
              caveType: eV,
              priority: VV
            }))).sort(((VV, eV) => VV.priority - eV.priority)).map((VV => {
              let {
                caveType: eV
              } = VV;
              return eV
            }))
          }
          getOrCreateCaveGeneratorForChunk(VV, eV, xV) {
            const JV = this.getOrBuildCaveMetadataForChunk(VV, eV);
            return new BV(xV, JV.spaghettiCaveMetadataForChunk, JV.pitCaveMetadataForChunk, JV.ravineCaveMetadataForChunk, JV.sphereCaveMetadataForChunk, this.numCaveTypes)
          }
          getOrBuildCaveMetadataForChunk(VV, eV) {
            const xV = this.perChunkCache.get(VV, eV);
            if (!(0, YV.J)(xV)) return xV;
            const JV = [(0, YV.w)(VV), (0, YV.w)(eV)],
              UV = {
                spaghettiCaveMetadataForChunk: this.spaghettiCaveMetadata,
                pitCaveMetadataForChunk: this.buildPitCaveMetadataForChunk(JV),
                ravineCaveMetadataForChunk: this.buildRavineCaveMetadataForChunk(JV),
                sphereCaveMetadataForChunk: this.buildSphereCaveMetadataForChunk(JV)
              };
            return this.perChunkCache.set(VV, eV, UV), UV
          }
          buildPitCaveMetadataForChunk(VV) {
            const eV = [];
            for (let YV = 0; YV < this.pitCaveMetadata.length; YV++) {
              const UV = this.pitCaveMetadata[YV],
                yV = UV.pitPointGenerator.getSurroundingFeatures(VV[0], VV[1]);
              for (const VV of yV) {
                var xV, JV;
                const yV = VV[0],
                  QV = VV[1],
                  nV = new pV.l(`pit${yV}|${QV}|${YV}${this.seed}`),
                  wV = UV.pitWidthDistribution.sample(nV) >> 1,
                  ZV = UV.pitLengthDistribution.sample(nV) >> 1,
                  vV = yV - wV,
                  rV = yV + wV,
                  kV = QV - ZV,
                  bV = QV + ZV,
                  EV = UV.pitXZPerturbNoiseGenerator.maxMagnitude(),
                  BV = UV.pitFloorYDistribution.sample(nV),
                  jV = UV.pitHeightDistribution.sample(nV),
                  qV = null !== (xV = null === (JV = UV.pitCeilingThicknessDistribution) || void 0 === JV ? void 0 : JV.sample(nV)) && void 0 !== xV ? xV : 0;
                eV.push({
                  caveType: UV.caveType,
                  wallType: UV.wallType,
                  ceilingType: UV.ceilingType,
                  pitCeilingThickness: qV,
                  pitMinX: vV,
                  pitMaxX: rV,
                  pitMinZ: kV,
                  pitMaxZ: bV,
                  reachMinX: vV - EV,
                  reachMaxX: rV + EV,
                  reachMinZ: kV - EV,
                  reachMaxZ: bV + EV,
                  pitFloorY: BV,
                  pitHeight: jV,
                  pitXZPerturbNoiseGenerator: UV.pitXZPerturbNoiseGenerator,
                  pitFloorYPerturbNoiseGenerator: UV.pitFloorYPerturbNoiseGenerator,
                  pitHeightPerturbNoiseGenerator: UV.pitHeightPerturbNoiseGenerator,
                  pitMidpointYPerturbNoiseGenerator: UV.pitMidpointYPerturbNoiseGenerator
                })
              }
            }
            return eV
          }
          buildRavineCaveMetadataForChunk(VV) {
            const eV = [];
            for (let xV = 0; xV < this.ravineCaveMetadata.length; xV++) {
              const YV = this.ravineCaveMetadata[xV],
                UV = YV.ravinePointGenerator.getSurroundingFeatures(VV[0], VV[1]);
              for (const VV of UV) {
                const UV = VV[0],
                  yV = VV[1],
                  QV = new pV.l(`rav${UV}|${yV}|${xV}${this.seed}`),
                  nV = YV.ravineWidthDistribution.sample(QV),
                  wV = YV.ravineLengthDistribution.sample(QV),
                  ZV = YV.ravineFloorYDistribution.sample(QV),
                  vV = YV.ravineHeightDistribution.sample(QV),
                  rV = [YV.ravineXZDirectionDistribution.sample(QV), YV.ravineXZDirectionDistribution.sample(QV)];
                (0, JV.E)(rV);
                const kV = Math.SQRT2 * YV.ravineXZPerturbNoiseGenerator.maxMagnitude(),
                  bV = wV + kV,
                  EV = Math.hypot(rV[0], rV[1]);
                eV.push({
                  caveType: YV.caveType,
                  ravineCentre: VV,
                  ravineWidth: nV,
                  ravineLength: wV,
                  ravineFloorY: ZV,
                  ravineHeight: vV,
                  ravineDirection: rV,
                  reachDistanceSquared: bV * bV,
                  axisNormalX: -rV[1] / EV,
                  axisNormalZ: rV[0] / EV,
                  reachFromAxis: Math.max(nV, 0) + kV,
                  ravineXZPerturbNoiseGenerator: YV.ravineXZPerturbNoiseGenerator,
                  ravineYPerturbNoiseGenerator: YV.ravineYPerturbNoiseGenerator
                })
              }
            }
            return eV
          }
          buildSphereCaveMetadataForChunk(VV) {
            const eV = [];
            for (let xV = 0; xV < this.sphereCaveMetadata.length; xV++) {
              const JV = this.sphereCaveMetadata[xV],
                YV = JV.spherePointGenerator.getSurroundingFeatures(VV[0], VV[1]);
              for (const VV of YV) {
                const YV = VV[0],
                  UV = VV[1],
                  yV = new pV.l(`sph${YV}|${UV}|${xV}${this.seed}`),
                  QV = JV.sphereRadiusDistribution.sample(yV),
                  nV = QV * QV,
                  wV = JV.sphereCentreYDistribution.sample(yV),
                  ZV = QV + Math.SQRT2 * JV.sphereXZPerturbNoiseGenerator.maxMagnitude();
                eV.push({
                  caveType: JV.caveType,
                  sphereRadiusSquared: nV,
                  sphereCentreX: YV,
                  sphereCentreY: wV,
                  sphereCentreZ: UV,
                  reachDistanceSquared: ZV * ZV,
                  sphereXZPerturbNoiseGenerator: JV.sphereXZPerturbNoiseGenerator
                })
              }
            }
            return eV
          }
        }
      },
      40966: (VV, eV, xV) => {
        xV.d(eV, {
          d: () => EV
        });
        var JV = xV(40957),
          YV = xV(40946),
          UV = xV(1737),
          yV = xV.n(UV),
          pV = xV(657),
          QV = xV(3168),
          nV = xV.n(QV),
          wV = xV(38881),
          ZV = xV(40975),
          vV = xV(40360),
          rV = xV(40978);

        function kV(VV, eV, xV) {
          const JV = new vV.c;
          for (const YV of xV) {
            const VV = JV.get(YV.chunkX, YV.chunkY, YV.chunkZ);
            if (!(0, pV.J)(VV)) throw new Error(`Duplicate chunk at ${YV.chunkX}, ${YV.chunkY}, ${YV.chunkZ}`);
            JV.set(YV.chunkX, YV.chunkY, YV.chunkZ, YV.rle)
          }
          return new ZV.b(VV, {
            x: 0,
            y: 0,
            z: 0
          }, eV, JV)
        }
        const bV = {
          platformStone: kV("platformStone", {
            x: 41,
            y: 14,
            z: 41
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, rV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, rV.c)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB1gjdBgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAApYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBHRoABQQBgQEfAAEf+gYABQIBgQEaAAUCAYEBGgAFAgGIARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAHVCAEfHgAB1gjbBgAFAgGBARoABQIBiAEaAAUCAYEBGgAFBAGBAR4AAZYBAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgKBARkABQICgQEZAAUCAYEBAR0ZAAUEAYEBAYgBHQADgQEdAAMfHQADHB0AAxwdAAEcAh0dAAId2gUABQICgQEZAAUCAoEBGQAFAgKBARkABB8BAgKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHQEcHgACHboFAAUcBIEBFwAFHAOBAQEfFwAFHAKBAQEfGAAFHAKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHAIdHQACHboFAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAGHAEiGQAGHJoHAAkcFwAHHAEiGAAGHAEiGQAGHJoHAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAHHBkABhyaBwAJHBcACBwYAAYcASIZAAYcmgcACRwXAAgcGAAGHAEiGQADHAIiARyaBwAFHASBARcABRwDgQEBHxcABRwCgQEBHxgAASIBHAIiARwCgQEdAAKBAQGIAR0AAx8dAAMcHQABHQIcHQACHQEcHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAQfAQICgQEdAAOBAR0AAx8dAAMcHQABHQIcHgABHAEdHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAUEAoEBHQADgQEdAAMfHQADHB0AAh0BHB4AAh35BQAFAgEdGgAFAgGIARoABQIBgQEaAAUEAYEBHgAB1QgBHx4AAdYI2wYABQIBiAEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBARoAApYBAwABHfoGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBGgAB1QgBlgEDAAEfGgAB1gjfBgA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, rV.c)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwBIgIcAR8GBAMAAR0BlgECAAGWAQYAAZYB9AYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYgBCwQBHwkcAR8GBA0AAZYBAdUICwABlgETAAHWCNQGAAKBAQsCCRwHAgMAAoEBCwIJHAcCAwACgQELAgkcBwIDAAEdAYgBCgQBAgEcASIHHAECBgQGAAKWAQMAAZYBAQAB1QgDgQEHAAOBAQHVCAGWARAAAdYIAx8HAAMfAdYIEgADHAcAAxwTAAMdBwADHBUAAR0HAAMcHQABHAIdHQACHaoFAA2BAQccCIEBBAAHgQEBiAEFgQEHHAiBAQQABoEBAYgBAR0FgQEHHAiBAQQAAR0BiAELgQECIgUcCIEBBwABHQYfA4EBBwADgQEFHw4AAx8HAAMfEwADHAcAAxwTAAEdAhwHAAMcEwABHQEcAR0HAAIcAR0UAAIdBwABHQEcAR0dAAIdtAUAA4EBBxwDgQETAAOBAQccAoEBAYgBEwADgQECIgIcAiIBHAKBAQEdEwADgQEHAAKBAQGIARMAAYgBAoEBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAIdARwHAAMdFAACHQcAAR3XBQABgQEHHAGBARcAAYEBBBwBIgIcAYEBFwABHwcAAR+3BwABgQEHHAGBARcAAR8HAAEfx78BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, rV.c)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI3QYABYEBGwAFgQEbAAOBAQGIAQEdGwAEgQEBiAEbAAUf+9YBAA==")
          }]),
          smp2SpawnHub: kV("smp2SpawnHub", {
            x: 64,
            y: 24,
            z: 64
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, rV.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, rV.c)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, rV.c)("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AgEAGwQBHwMCDgABlwGxBwABBB8CAQAXBAgCCQABlgEOAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAEEHwIBABcECAICAAGWAQUAAZYBAwABlwEKAAGWAQWBAQMcGAAFgQEDHBgAAR8DgQEBHxwAAxwdAAMcHQACHAEdHQACHB4AAhwBHR0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARsAAYEBARwBgQEBHASBARgAAYEBBBwBgQECHBgAAYgBA4EBARwDgQEbAAGBAQQcGwAFgQGAAgACBB4CAgAWBAgCGAAFgQEDHBgABYEBAxwYAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGwAIgQEYAAiBARgACIEBGwAFgQEbAAWBAYACAAIEHgICABYECAIWAAGWAQEABYEBAxwYAAGIAQSBAQMcGAABHwOBAQEfHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHgACHB0AAR0CHB0AAxwdAAMcHQADHBwAAR8DHAEfGwABiAEBHAGBAQEcAYEBGwABgQEBHAGBAQEcBIEBGAABgQEEHAGBAQIcGAAEgQEBHAOBARsAAYEBBBwbAAGIAQSBAYACAAMEDAIGBAsCAwAMBAYAAwQIAhgAAYgBA4EBAYgBAxwYAAEdAYgBA4EBGwAFH5sDAAUfGwABHQEAAYEBAQABgQEbAAGIAQEAAYEBAQAEgQEYAAGBAQQAAYEBGgAEgQEBAAKBAQGIARsAAYgBHwABHQGIAQOBAYACAAcEBQIKBAoCBwAFBAoACgTABwAgBOAHAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, rV.c)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEBgIMHwEdAwIBHQIfBQIBBAEAAh0CHBUAAYgBA4EBAR0bAASBAQGIARsABR+bAwAFHxsABYEBGwAFgQEcAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAASBAQGIAYICAB8CAQQGAgEfDAQCAgQEBQIBBBoABIEBAYgBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxwAARwBgQEBHB0AARwBgQEBHB0AARwBgQEBHBwABYEBGwAEgQEBiAEbAAOBAQGIAQEdggIAHwIBBAYCAR8MBAICBAQFAgEEGgAFgQEbAAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHBwAAR8DHAEfGwAFgQEbAAWBARwAARwBgQEBHBwABYEBwgIAHgICBAMCBB8MBAICBAQEAgGBARsAAYgBBIEBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAEdAhweAAIcHQABHQIcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8cAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAAGIAQSBAcICAB4CAgQDAgEfDwQCAgQEBAIBgQENAAGWAQ0AAR0BiAEDgQEbAAGIAQOBAQGIARsABR+bAwAFHxsABIEBAR0bAAWBARsAAYgBBIEBGwABHQGIAQOBAcICAB4CAgQDAgEfDwQCAgkEHQABlgGkBwAeAgIEAwIBHw8EAgIJBMIHAB4CAgQDAgEfDwQCAgkECwABmwG2BwAeAgIEAwIBHw8EAgIJBAwAAZsBBAABlgGwBwAeAgIEAwIBHw8EAgIJBAkAAZYBuAcAHwIBBAMCAR8PBAICCgQHAAGWARYAAZYBogcAHwIBBAMCAR8PBAICCgQdAAGWAaMHAB8CAQQDAgEfDwQCAgoEwQcAHwIBBAMCAR0PBAICCgQPAAIwsAcAHwIBBAMCAR8PBAICCgQPAAIwsAcAHwIBBAMCAR0OBAMCCgQbAAGdAaUHAB4CAgQVAgkEGwABnQEBAAGdAaQHAB4CAgQUAgoEwgcAHgICBAQCCAQGAgwEwgcAHQIDBAMCAR0ZBA4AARkGEwEZGAABGQYAARkYAAEZBgABGRcAAdUQARkGAAEZAdMQFgAB4RACNAQAAjQB3xAYAAY0jgYAHQIDBAMCAR8IBAYCCwQOAAETBgABEwGWAVYAAZ0RCAABmxEWAAGpEQI3BAACNwGnERgABjeOBgAcAgQEAwIBHwgEBgIKBA8AARMGAAETVwAB1RAIAAHTEBYAAeEQAjQEAAI0Ad8QGAAGNI4GABsCBQQIAgQEBgIJBAUAAxwBHQGIAQOBAQMAARMGAAETEAABiAEDgQEBiAEbAAUfIgABnREIAAGbERYAAakRAjcEAAI3AacRGAAGN7ECAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAGwIFBAgCEwQFAAMcBYEBAwABGQYTARkNAAMcBYEBAwABGQYAARkQAAEfA4EBAR8DAAEZBgABGREAAxwDAAHVEAEZBgABGQHTEBAAAxwDAAHhEAI0BAACNAHfEBAAAxwFAAY0EgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8bAAGBAQEcAYEBARwBgQEYAASBAQEcAYEBARwBgQEYAAIcAYEBBBwBgQEYAAOBAQEcBIEBGAAEHAGBARsABIEBAYgBmwIAGwIFBAgCEwQFAAMcBYEBBAABlgELAAGWAQcAAxwFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGAAIgQEYAAiBARgACIEBGAAFgQEbAAWBAZsCABoCBgQIAhIEBgADHASBAQGIAREAAZYBBgADHAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAhwBHR0AAhweAAIcAR0dAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARgABIEBARwBgQEBHAGBARgAAhwBgQEEHAGBARgAA4EBARwDgQEBiAEYAAQcAYEBGwAFgQGbAgAYAggECAIQBAgAAxwBiAECgQEBiAEBHRsABIEBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAYEBGAAEgQEBAAGBAQEAAYEBGgABgQEEAAGIARgAAR0BiAEBgQEBAAKBAQGIAQEdHAABgQEbAAWBAZsCAAoCBAQGAhYEBAAGBAgAAZwBCAABlgG6BwAgBBsAAZwBxAcA")
          }])
        };
        class EV {
          constructor(VV, eV) {
            this.PZ = eV, this.chunkToFixedPointPrefabs = void 0;
            const xV = {},
              JV = eV + jV;
            for (const {
                KY: YV,
                x: UV,
                y: yV,
                z: pV
              }
              of VV) {
              const VV = bV[YV];
              if (void 0 === VV) throw new Error(`Fixed-point prefab "${YV}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
              const {
                dimensions: QV
              } = VV, nV = QV.x, wV = QV.y, ZV = QV.z, vV = UV - (nV >> 1), rV = pV - (ZV >> 1), kV = vV + nV - 1, EV = rV + ZV - 1, BV = {
                schematic: VV,
                bottomLeftX: vV,
                bottomLeftZ: rV,
                floorY: yV,
                ceilingY: yV + wV - 1,
                topRightX: kV,
                topRightZ: EV
              }, jV = vV - JV, qV = kV + JV, tV = rV - JV, FV = EV + JV, TV = Math.floor(jV / eV) * eV, PV = Math.floor(tV / eV) * eV;
              for (let JV = TV; JV <= qV; JV += eV)
                for (let VV = PV; VV <= FV; VV += eV) {
                  const eV = this.getKeyForChunk(JV, VV);
                  xV[eV] ??= [], xV[eV].push(BV)
                }
            }
            this.chunkToFixedPointPrefabs = xV
          }
          getFixedPointPrefabInfoForChunk(VV, eV) {
            const xV = this.getKeyForChunk(VV, eV),
              UV = this.chunkToFixedPointPrefabs[xV];
            if (void 0 === UV) return {
              decodedFixedPointPrefabsForChunk: [],
              nearestFixedPrefabInfoForChunk: null
            };
            const yV = [];
            for (const JV of UV) {
              const {
                schematic: VV,
                bottomLeftX: eV,
                bottomLeftZ: xV,
                floorY: YV,
                ceilingY: UV,
                topRightX: pV,
                topRightZ: QV
              } = JV, nV = this.getDecodedPrefabSchematic(VV);
              yV.push({
                decodedPrefabSchematic: nV,
                bottomLeftX: eV,
                bottomLeftZ: xV,
                floorY: YV,
                ceilingY: UV,
                topRightX: pV,
                topRightZ: QV
              })
            }
            const pV = new BV(UV);
            return {
              decodedFixedPointPrefabsForChunk: yV,
              nearestFixedPrefabInfoForChunk: YV.p.create(this.PZ, [VV, eV], JV.i.NumFields, pV)
            }
          }
          static smoothHeightmapForFixedPointPrefab(VV, eV, xV, YV) {
            if (null === YV) return null;
            const UV = YV.getOrGenerate(VV, eV, JV.i.DistanceToNearestFixedPrefab);
            if (UV > jV) return null;
            let yV = UV / jV;
            yV *= yV;
            const pV = YV.getOrGenerate(VV, eV, JV.i.HeightOfNearestFixedPrefab);
            return Math.floor(xV * yV + (1 - yV) * pV)
          }
          static isNearFixedPointPrefab(VV, eV, xV) {
            if (null === xV) return !1;
            return xV.getOrGenerate(VV, eV, JV.i.DistanceToNearestFixedPrefab) <= jV
          }
          static isWithinFixedPointPrefab(VV, eV, xV) {
            if (null === xV) return !1;
            return 0 === xV.getOrGenerate(VV, eV, JV.i.DistanceToNearestFixedPrefab)
          }
          static getBlockFromFixedPointPrefab(VV, eV, xV, JV) {
            const {
              bottomLeftX: YV,
              bottomLeftZ: UV,
              floorY: yV,
              ceilingY: pV,
              topRightX: QV,
              topRightZ: nV
            } = JV;
            if (VV < YV || QV < VV || eV < yV || pV < eV || xV < UV || nV < xV) return 0;
            const wV = VV - YV,
              ZV = eV - yV,
              vV = xV - UV;
            return JV.decodedPrefabSchematic.get(wV, ZV, vV)
          }
          getKeyForChunk(VV, eV) {
            return `${VV}|${eV}`
          }
          getDecodedPrefabSchematic(VV) {
            const eV = VV.name,
              xV = EV.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(eV);
            if (!(0, pV.J)(xV)) return xV;
            const {
              dimensions: JV
            } = VV, YV = nV()(new Uint16Array(JV.x * JV.y * JV.z), [JV.x, JV.y, JV.z]);
            for (let UV = 0; UV < JV.x; UV += pV.y)
              for (let eV = 0; eV < JV.y; eV += pV.y)
                for (let xV = 0; xV < JV.z; xV += pV.y) {
                  const yV = nV()(new Uint16Array(pV.y * pV.y * pV.y), [pV.y, pV.y, pV.y]),
                    QV = VV.getRLEChunk((0, pV.V)(UV), (0, pV.V)(eV), (0, pV.V)(xV));
                  wV.decode(QV, yV.data);
                  const ZV = Math.min(pV.y, JV.x - UV),
                    vV = Math.min(pV.y, JV.y - eV),
                    rV = Math.min(pV.y, JV.z - xV);
                  for (let VV = 0; VV < ZV; VV++)
                    for (let JV = 0; JV < vV; JV++)
                      for (let pV = 0; pV < rV; pV++) {
                        const QV = yV.get(VV, JV, pV),
                          nV = UV + VV,
                          wV = eV + JV,
                          ZV = xV + pV;
                        YV.set(nV, wV, ZV, QV)
                      }
                }
            return EV.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.set(eV, YV), YV
          }
        }
        EV.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE = new(yV())({
          max: 100,
          ttl: 6e4,
          updateAgeOnGet: !0
        });
        class BV {
          constructor(VV) {
            this.fixedPointPrefabsForChunk = VV
          }
          generateAndSet(VV, eV, xV) {
            let YV = jV + 1,
              UV = 0;
            for (const JV of this.fixedPointPrefabsForChunk) {
              const {
                bottomLeftX: xV,
                bottomLeftZ: yV,
                topRightX: pV,
                topRightZ: QV
              } = JV, nV = Math.max(xV - VV, 0, VV - pV) + Math.max(yV - eV, 0, eV - QV);
              nV < YV && (YV = nV, UV = JV.floorY)
            }
            xV.set(VV, eV, JV.i.DistanceToNearestFixedPrefab, YV), xV.set(VV, eV, JV.i.HeightOfNearestFixedPrefab, UV)
          }
        }
        const jV = 12
      },
      40940: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => nV,
          h: () => QV,
          l: () => pV
        });
        var JV = xV(40946),
          YV = xV(40957),
          UV = xV(40955),
          yV = xV(40966);

        function pV(VV) {
          return new JV.h([{
            amplitude: 11,
            frequency: 1 / 4e3
          }, {
            amplitude: 4,
            frequency: .001
          }], `${VV}GlobalHeightmapOffset`)
        }
        class QV {
          constructor(VV) {
            this.globalHeightmap = VV
          }
          getNoWaterHeightmapVal(VV, eV, xV) {
            const JV = VV,
              YV = eV;
            let UV = 0;
            for (const {
                biome: pV,
                weight: QV
              }
              of xV) UV += pV.getHeightmapVal(JV, YV) * QV;
            const yV = this.globalHeightmap.getOctaves(JV, YV);
            return Math.floor(UV) + Math.floor(yV)
          }
        }
        class nV {
          constructor(VV, eV, xV, JV, YV) {
            this.closestBiomesForChunk = VV, this.nearestFixedPrefabInfoForChunk = eV, this.noWaterHeightmapGenerator = xV, this.heightmapPerturb = JV, this.waterBodyGenerator = YV
          }
          generateAndSet(VV, eV, xV) {
            const JV = this.closestBiomesForChunk.getOrGenerate(VV, eV),
              YV = Math.floor(this.heightmapPerturb.getOctaves(VV, eV)),
              yV = Math.floor(this.heightmapPerturb.getOctaves(VV + 200, eV + 778)),
              pV = this.waterBodyGenerator.columnMayHaveScatteredLakes(JV, VV, eV),
              QV = this.getWithWaterHeightmapVal(VV + YV, eV + yV, JV, pV);
            let {
              groundHeight: nV,
              waterHeight: wV,
              cavesAllowedBelowY: ZV,
              isLake: vV
            } = QV;
            const rV = JV[0].biome.carveGround(VV, eV, nV);
            null !== rV && (nV = rV, wV = UV.n, ZV = rV - UV.f, vV = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(VV, eV, YV, yV, xV, nV, wV, ZV, vV)
          }
          getWithWaterHeightmapVal(VV, eV, xV, JV) {
            const YV = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(VV, eV, xV),
              {
                distFromWater: yV,
                waterRadius: pV,
                waterHeight: QV,
                waterbedHeight: nV,
                isLake: wV,
                needOutsideWaterDist: ZV
              } = this.waterBodyGenerator.getInfoNeededForWaterGen(VV, eV, JV);
            let vV = 0,
              rV = UV.n,
              kV = UV.k,
              bV = 0;
            const EV = pV + ZV;
            if (yV <= EV) {
              const VV = pV + 4,
                eV = QV + 2;
              if (yV <= pV) {
                let VV = yV / pV;
                wV ? (VV *= VV * VV, vV = Math.floor(nV + (QV - nV) * VV - 2)) : (VV *= VV, vV = Math.floor(nV + (QV - nV) * VV)), rV = QV, bV = wV ? 1 : 0;
                const eV = xV[0].biome.waterKept;
                eV < 1 && (rV = nV + Math.floor((QV - nV) * eV), vV >= rV && (rV = UV.n, bV = UV.i))
              } else if (yV <= VV) {
                const xV = (yV - pV) / (VV - pV);
                vV = QV + Math.ceil((eV - QV) * xV)
              } else {
                const xV = (yV - VV) / (EV - VV);
                vV = eV + Math.ceil((YV - eV) * xV)
              }
              kV = vV - UV.f
            } else vV = YV;
            return {
              groundHeight: vV,
              waterHeight: rV,
              cavesAllowedBelowY: kV,
              isLake: bV
            }
          }
          setHeightmapValuesWithFixedPrefabSmoothing(VV, eV, xV, JV, pV, QV, nV, wV, ZV) {
            const vV = yV.d.smoothHeightmapForFixedPointPrefab(Math.round(VV + xV / 4), Math.round(eV + JV / 4), QV, this.nearestFixedPrefabInfoForChunk);
            null !== vV && nV > (QV = vV) && (nV = UV.n, ZV = 0), pV.set(VV, eV, YV.g.GroundHeight, QV), pV.set(VV, eV, YV.g.WaterHeight, nV), pV.set(VV, eV, YV.g.CavesAllowedBelowY, wV), pV.set(VV, eV, YV.g.IsLake, ZV), this.shouldCurtailCave(VV, eV, null !== vV) && pV.set(VV, eV, YV.g.CavesAllowedBelowY, QV - UV.f)
          }
          shouldCurtailCave(VV, eV, xV) {
            if (xV) return !0;
            const JV = Math.max(Math.abs(VV), Math.abs(eV));
            if (JV < 50) return !0;
            const YV = Math.min(Math.abs((VV - 300) % 1e3), 1e3 - Math.abs((VV - 300) % 1e3)),
              UV = Math.min(Math.abs((eV - 300) % 1e3), 1e3 - Math.abs((eV - 300) % 1e3));
            return JV > 1e4 && Math.max(YV, UV) < 50
          }
        }
      },
      40984: (VV, eV, xV) => {
        xV.d(eV, {
          b: () => nV
        });
        var JV = xV(40946),
          YV = xV(40992),
          UV = xV.n(YV),
          yV = xV(4648),
          pV = xV(41024);
        const QV = new pV.e("point cells", 500, 6e4);
        class nV {
          constructor(VV, eV, xV, JV, YV, UV, yV) {
            let pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              nV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              wV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : void 0;
            if (this.name = VV, this.seed = YV, this.minDist = void 0, this.variableDensitySettings = void 0, this.gridSize = void 0, this.cachedCells = QV.partition(), this._tempCellCoord = [0, 0], this.useIsPoint = void 0, this.useKthClosestPoint = void 0, this.useJitteredGrid = void 0, this.customCellGap = void 0, this.mostRecentlyAccessedCell = null, console.assert(Number.isInteger(eV)), this.minDist = eV, this.variableDensitySettings = pV, this.customCellGap = wV, this.useJitteredGrid = nV, this.gridSize = Math.floor(Math.sqrt(UV * Math.pow(eV, 2))), nV) {
              const VV = this.gridSize % eV;
              0 !== VV && (this.gridSize += eV - VV)
            } else {
              const VV = this.gridSize % yV;
              0 !== VV && (this.gridSize += yV - VV)
            }
            this.useIsPoint = xV, this.useKthClosestPoint = JV
          }
          assertReachableFromChunkCentre(VV, eV) {
            const xV = VV / 2 + eV - 1;
            if (this.gridSize < xV) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${xV} (chunkSize=${VV}, halfBox=${eV}). Points near chunk edges would be missed.`)
          }
          isPoint(VV, eV) {
            const xV = this.getCellCoordFromGlobalCoord(VV, eV),
              {
                pointsSet: JV
              } = this.getCell(xV[0], xV[1]);
            return !!JV.has((0, pV.h)(VV, eV))
          }
          getClosestPoint(VV, eV) {
            const xV = this.getCellCoordFromGlobalCoord(VV, eV),
              YV = this.getCell(xV[0], xV[1]),
              UV = this._getPointsSurroundingCell(xV, YV);
            let yV = [0, 0],
              pV = 1e4;
            for (const QV of UV) {
              const xV = (0, JV.I)(QV, VV, eV);
              xV < pV && (yV = QV, pV = xV)
            }
            return yV
          }
          getKClosestPointsWithWeights(VV, eV, xV) {
            const JV = this.getCellCoordFromGlobalCoord(VV, eV),
              YV = this.getCell(JV[0], JV[1]);
            return this._getPointsSurroundingCell(JV, YV), this._getClosestPointsForGeneratedCell(YV, VV, eV, xV)
          }
          getPointsAroundPoint(VV, eV) {
            const xV = this.getCellCoordFromGlobalCoord(VV, eV),
              JV = this.getCell(xV[0], xV[1]);
            return this._getPointsSurroundingCell(xV, JV)
          }
          _getPointsSurroundingCell(VV, eV) {
            if (!eV.surroundingPoints) {
              const UV = [...eV.points];
              for (let eV = VV[0] - 1; eV <= VV[0] + 1; eV++)
                for (let yV = VV[1] - 1; yV <= VV[1] + 1; yV++) JV = eV, YV = yV, ((xV = VV)[0] !== JV || xV[1] !== YV) && UV.push(...this.getCell(eV, yV).points);
              eV.surroundingPoints = UV
            }
            var xV, JV, YV;
            return eV.surroundingPoints
          }
          _getClosestPointsForGeneratedCell(VV, eV, xV, YV) {
            let UV = [0, 0],
              yV = 1e5;
            for (const nV of VV.surroundingPoints) {
              const VV = (0, JV.I)(nV, eV, xV);
              VV < yV && (UV = nV, yV = VV)
            }
            const pV = [{
              pt: UV,
              distDiffFromFirstPt: 0,
              weight: 0
            }];
            let QV = YV;
            for (let nV = 0; nV < VV.surroundingPoints.length; nV++) {
              const wV = VV.surroundingPoints[nV];
              if (wV[0] === UV[0] && wV[1] === UV[1]) continue;
              const ZV = (0, JV.I)(wV, eV, xV) - yV;
              ZV < YV && (pV.push({
                pt: wV,
                distDiffFromFirstPt: ZV,
                weight: 0
              }), QV += YV - ZV)
            }
            for (const JV of pV) JV.weight = (YV - JV.distDiffFromFirstPt) / QV;
            return pV
          }
          getCellCoordFromGlobalCoord(VV, eV) {
            return this._tempCellCoord[0] = Math.floor(VV / this.gridSize), this._tempCellCoord[1] = Math.floor(eV / this.gridSize), this._tempCellCoord
          }
          getCell(VV, eV) {
            if (this.mostRecentlyAccessedCell && this.mostRecentlyAccessedCell.coord[0] === VV && this.mostRecentlyAccessedCell.coord[1] === eV) return this.mostRecentlyAccessedCell;
            const xV = this.cachedCells.get(VV, eV);
            if (xV) return this.mostRecentlyAccessedCell = xV, xV;
            const {
              points: JV,
              pointsSet: YV
            } = this.generateRandomPointsForCell(VV, eV), UV = {
              coord: [VV, eV],
              points: JV,
              pointsSet: YV,
              surroundingPoints: null
            };
            return this.cachedCells.set(VV, eV, UV), this.mostRecentlyAccessedCell = UV, UV
          }
          generateRandomPointsForCell(VV, eV) {
            const xV = VV * this.gridSize,
              JV = eV * this.gridSize;
            let YV, QV;
            if (this.useJitteredGrid) {
              const UV = new yV.l(`${VV}${eV}${this.seed}jitter`);
              YV = [];
              const pV = xV + this.gridSize,
                QV = JV + this.gridSize;
              for (let VV = xV; VV < pV; VV += this.minDist)
                for (let eV = JV; eV < QV; eV += this.minDist) {
                  const xV = VV + Math.floor(UV.next() * this.minDist),
                    JV = eV + Math.floor(UV.next() * this.minDist);
                  YV.push([xV, JV])
                }
            } else {
              const pV = new yV.l(`${VV}${eV}${this.seed}pts`),
                QV = () => pV.next();
              let nV;
              const wV = this.gridSize - (this.customCellGap || this.minDist);
              if (null === this.variableDensitySettings) nV = new(UV())({
                shape: [wV, wV],
                minDistance: this.minDist,
                maxDistance: this.minDist,
                tries: 40
              }, QV);
              else {
                const VV = this.variableDensitySettings.min,
                  eV = this.variableDensitySettings.max,
                  YV = eV - VV,
                  yV = this.variableDensitySettings.func,
                  pV = eV => (yV([eV[0] + xV, eV[1] + JV]) - VV) / YV;
                nV = new(UV())({
                  shape: [wV, wV],
                  minDistance: VV,
                  maxDistance: eV,
                  tries: 10,
                  distanceFunction: pV
                }, QV)
              }
              YV = nV.fill().map((VV => [Math.floor(xV + VV[0]), Math.floor(JV + VV[1])]))
            }
            if (this.useIsPoint) {
              QV = new Set;
              for (const VV of YV) QV.add((0, pV.h)(VV[0], VV[1]))
            }
            return {
              pointsSet: QV,
              points: this.useKthClosestPoint ? YV : null
            }
          }
        }
      },
      41045: (VV, eV, xV) => {
        xV.r(eV), xV.d(eV, {
          WorldGenerator: () => se
        });
        var JV = xV(40946),
          YV = xV(40984),
          UV = xV(40957),
          yV = xV(40955),
          pV = xV(38881),
          QV = xV(41042),
          nV = xV(638),
          wV = xV(657),
          ZV = xV(40360),
          vV = xV(4648);
        let rV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto.getRandomValues(new Uint8Array(VV)).reduce(((VV, eV) => VV += (eV &= 63) < 36 ? eV.toString(36) : eV < 62 ? (eV - 26).toString(36).toUpperCase() : eV > 62 ? "-" : "_"), "")
        };
        class kV {
          constructor(VV) {
            this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(VV).map((VV => {
              let [eV, xV] = VV;
              const JV = xV.name;
              return void 0 !== bV[JV] ? [eV, JV] : [eV, JV.split(" ").at(-1)]
            })))
          }
          getPossibleEnchantmentsForItem(VV) {
            var eV;
            return null !== (eV = bV[this.suffixMapping[VV]]) && void 0 !== eV ? eV : []
          }
          chooseRandomEnchantmentAttributes(VV, eV, xV) {
            const JV = [...xV],
              YV = {
                enchantments: {},
                enchantmentTier: eV,
                id: rV()
              },
              UV = EV[eV];
            for (let pV = 0; pV < UV; pV++) {
              var yV;
              if (0 === JV.length) {
                console.warn("Ran out of enchantments to choose from");
                break
              }
              const {
                enchantments: eV
              } = YV, xV = JV[Math.floor(VV.next() * JV.length)];
              eV[xV] = (null !== (yV = eV[xV]) && void 0 !== yV ? yV : 0) + 1, eV[xV] >= BV && JV.splice(JV.indexOf(xV), 1)
            }
            return YV
          }
        }
        const bV = {
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
          EV = {
            "Tier 1": 1,
            "Tier 2": 2,
            "Tier 3": 3,
            "Tier 4": 4,
            "Tier 5": 5
          },
          BV = 3;
        const jV = [0, 90, 180, 270],
          qV = /^(meta\|rot\d)\|([lrud]+)$/,
          tV = "nesw",
          FV = /^meta\|([nesw]*)\|?(Stacked)?$/,
          TV = function(VV) {
            const eV = new WeakMap;
            return (xV, JV) => {
              let YV = eV.get(xV);
              return void 0 === YV && (YV = VV(xV, JV), eV.set(xV, YV)), YV
            }
          }((VV => new PV(VV)));
        class PV {
          constructor(VV) {
            this.blockMetadata = VV, this.blockIdMappings = new Map, this.maxBlockId = void 0;
            const eV = new Set(Object.keys(VV).map((eV => VV[eV].id)));
            eV.add(0), this.maxBlockId = Math.max(...eV)
          }
          static
          for (VV) {
            return TV(VV)
          }
          getBlockIdMapping(VV, eV) {
            const xV = this.getBlockIdMappingKey(VV, eV);
            let JV = this.blockIdMappings.get(xV);
            return void 0 === JV && jV.includes(VV) && (JV = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, VV, eV), this.blockIdMappings.set(xV, JV)), JV
          }
          turnBlockId(VV, eV, xV) {
            return this.mapBlockId(this.blockMetadata[VV], eV, this.getRotationMapping(eV, xV), xV)
          }
          getBlockIdMappingKey(VV, eV) {
            return `r${VV}|m${Number(eV)}`
          }
          createBlockIdMapping(VV, eV, xV, JV) {
            const YV = new Uint16Array(eV + 1),
              UV = this.getRotationMapping(xV, JV);
            for (const yV in VV) {
              const eV = VV[yV];
              YV[eV.id] = this.mapBlockId(eV, xV, UV, JV)
            }
            return YV
          }
          getRotationMapping(VV, eV) {
            const xV = Math.round(VV / 90),
              JV = new Uint8Array(4);
            for (let YV = 0; YV < 4; YV++) JV[YV] = (4 + YV - xV) % 4;
            if (eV) {
              let VV = JV[0];
              JV[0] = JV[1], JV[1] = VV, VV = JV[2], JV[2] = JV[3], JV[3] = VV
            }
            return JV
          }
          mapBlockId(VV, eV, xV, JV) {
            var YV;
            const {
              blockMetadata: UV
            } = this, yV = Math.round(eV / 90), {
              id: pV,
              meta: QV
            } = VV, {
              rot: nV,
              rootName: wV,
              metaStr: ZV
            } = QV;
            let vV;
            const [, rV, kV] = null !== (YV = FV.exec(ZV)) && void 0 !== YV ? YV : [];
            if (void 0 !== rV) {
              var bV, EV;
              vV = null !== (bV = null === (EV = UV[`${wV}|meta|${[tV.split("").filter(((VV,eV)=>rV.split("").some((VV=>{const xV=tV.indexOf(VV);return((JV?3-xV:xV)+yV)%4===eV})))).join(""),kV].filter(Boolean).join("|")}`]) || void 0 === EV ? void 0 : EV.id) && void 0 !== bV ? bV : pV
            } else if (null === nV) vV = pV;
            else {
              var BV, jV;
              const VV = xV[nV - 1] + 1;
              let eV = ZV.replace(`rot${nV}`, `rot${VV}`);
              JV && QV.stairsCorner && (eV = eV.replace(/(Left|Right)$/, (VV => "Left" === VV ? "Right" : "Left"))), JV && "Chest" === wV && (eV = eV.replace(/\|(left|right)$/, ((VV, eV) => "left" === eV ? "|right" : "|left")));
              const YV = qV.exec(eV);
              if (JV && null !== YV) {
                const VV = "lrud".split("").filter((VV => YV[2].includes("l" === VV ? "r" : "r" === VV ? "l" : VV)));
                eV = `${YV[1]}|${VV.join("")}`
              }
              const yV = `${wV}|${eV}`;
              if (vV = null !== (BV = null === (jV = UV[yV]) || void 0 === jV ? void 0 : jV.id) && void 0 !== BV ? BV : null, null === vV) {
                const VV = UV[wV];
                vV = VV.rootMetaDesc === yV ? VV.id : pV
              }
            }
            return vV
          }
        }
        var AV = xV(3168),
          NV = xV.n(AV),
          XV = xV(40966);

        function MV(VV, eV, xV, JV, YV) {
          for (let pV = 0; pV < xV.numCaveTypes; pV++) {
            if (JV && 0 !== xV.caveTypeToBlockIds[pV]) continue;
            const QV = xV.getOrGenerate(VV, eV, pV, UV.d.FloorY);
            if (QV === yV.l) continue;
            GV(YV, QV, xV.getOrGenerate(VV, eV, pV, UV.d.CeilingY))
          }
        }

        function zV(VV, eV, xV, JV) {
          const YV = [];
          return MV(VV, eV, xV, JV, YV), YV
        }

        function GV(VV, eV, xV) {
          let JV = 0;
          for (; JV < VV.length;) {
            const YV = VV[JV];
            if (eV > YV.ceilingY) break;
            xV < YV.floorY ? JV++ : (eV = Math.min(YV.floorY, eV), xV = Math.max(YV.ceilingY, xV), VV.splice(JV, 1))
          }
          VV.splice(JV, 0, {
            floorY: eV,
            ceilingY: xV
          })
        }
        const WV = new vV.h([{
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
          RV = new vV.h([{
            value: !1,
            weight: 1
          }, {
            value: !0,
            weight: 1
          }]);
        let gV, DV = function(VV) {
          return VV[VV.GUARANTEED_AIR = -1] = "GUARANTEED_AIR", VV
        }({});
        const iV = new vV.h(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((VV => ({
          value: VV,
          weight: 1
        }))));
        class CV {
          constructor(VV) {
            this.mobType = VV
          }
          sample(VV) {
            const eV = `${iV.sample(VV)} ${this.mobType}`;
            return {
              customDisplayName: eV,
              customAttributes: {
                mobSettings: {
                  name: eV
                }
              }
            }
          }
        }
        class aV {
          constructor(VV) {
            this.itemCategoryDistributions = void 0, this.shouldEnchantDistribution = void 0, this.enchantmentTier = void 0;
            const eV = [];
            for (const JV of VV.itemCategories) {
              const VV = new vV.m(JV.minItems, JV.maxItems + 1),
                YV = [];
              for (const eV of JV.items) {
                var xV;
                const VV = eV.amount ? new vV.m(eV.amount.min, eV.amount.max + 1) : null,
                  JV = null !== (xV = eV.itemAttributesDistribution) && void 0 !== xV ? xV : null;
                YV.push({
                  weight: eV.frequency,
                  value: {
                    name: eV.name,
                    amountDistribution: VV,
                    attributesDistribution: JV
                  }
                })
              }
              const UV = new vV.h(YV);
              eV.push({
                numItemsDistribution: VV,
                itemDistribution: UV
              })
            }
            this.itemCategoryDistributions = eV, this.shouldEnchantDistribution = new vV.d(VV.enchantmentProbability), this.enchantmentTier = VV.enchantmentTier
          }
          sample(VV) {
            const eV = Array(wV.k).fill(null);
            let xV = 0;
            for (const nV of this.itemCategoryDistributions) {
              const wV = nV.numItemsDistribution.sample(VV);
              for (let ZV = 0; ZV < wV; ZV++, xV++) {
                var JV, YV, UV, yV, pV, QV;
                const wV = nV.itemDistribution.sample(VV),
                  ZV = wV.name,
                  vV = null !== (JV = null === (YV = wV.amountDistribution) || void 0 === YV ? void 0 : YV.sample(VV)) && void 0 !== JV ? JV : null,
                  rV = null !== (UV = null === (yV = wV.attributesDistribution) || void 0 === yV ? void 0 : yV.sample(VV)) && void 0 !== UV ? UV : {},
                  kV = null !== (pV = this.getEnchantmentAttributesForItem(VV, ZV)) && void 0 !== pV ? pV : {};
                eV[xV] = {
                  name: ZV,
                  amount: vV,
                  attributes: {
                    ...rV,
                    customAttributes: {
                      ...null !== (QV = rV.customAttributes) && void 0 !== QV ? QV : {},
                      ...kV
                    }
                  }
                }
              }
            }
            return (0, vV.q)(eV, VV), eV
          }
          getEnchantmentAttributesForItem(VV, eV) {
            if (!this.shouldEnchantDistribution.sample(VV)) return null;
            const xV = gV.getPossibleEnchantmentsForItem(eV);
            return 0 === xV.length ? null : gV.chooseRandomEnchantmentAttributes(VV, this.enchantmentTier, xV)
          }
        }

        function oV(VV, eV) {
          let xV = 0;
          for (const UV of VV) xV += UV.frequency;
          const JV = eV / xV,
            YV = [];
          for (const UV of VV) YV.push({
            ...UV,
            frequency: UV.frequency * JV
          });
          return YV
        }
        var cV = function(VV) {
          return VV.WOOD = "Wood", VV.STONE = "Stone", VV.IRON = "Iron", VV.GOLD = "Gold", VV.DIAMOND = "Diamond", VV
        }(cV || {});
        const hV = {
            name: "Coal",
            frequency: 1,
            amount: {
              min: 5,
              max: 15
            }
          },
          lV = {
            name: "Iron Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          LV = {
            name: "Gold Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          fV = {
            name: "Diamond",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          },
          mV = {
            name: "Spirit Saddle",
            frequency: .5,
            amount: null
          };

        function KV(VV) {
          return oV([{
            name: "Aura XP Potion",
            frequency: 4,
            amount: null
          }, {
            name: "Aura XP Potion II",
            frequency: 1,
            amount: null
          }], VV)
        }

        function HV(VV) {
          return oV([...oV([{
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
          }], 4), ...oV([{
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
          }], 2), ...oV([{
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
          }], 1), ...oV([{
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
          }], 2)], VV)
        }

        function uV(VV) {
          const eV = {
              min: 2,
              max: 4
            },
            xV = [{
              name: "Carrot",
              frequency: 1,
              amount: eV
            }, {
              name: "Raw Potato",
              frequency: 1,
              amount: eV
            }, {
              name: "Beetroot",
              frequency: 1,
              amount: eV
            }];
          return oV([...oV([{
            name: "Apple",
            frequency: 1,
            amount: eV
          }, {
            name: "Bowl of Rice",
            frequency: 1,
            amount: null
          }, {
            name: "Bread",
            frequency: 1,
            amount: eV
          }, {
            name: "Cherry",
            frequency: 1,
            amount: eV
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
            amount: eV
          }, {
            name: "Plum",
            frequency: 1,
            amount: eV
          }, {
            name: "Pumpkin Pie",
            frequency: 1,
            amount: eV
          }], 2), ...oV(xV, 1)], VV)
        }

        function sV(VV) {
          return oV([{
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
          }], VV)
        }

        function SV(VV) {
          const eV = [
              ["White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete"],
              ["Green Glass", "White Glass", "Light Gray Glass", "Gray Glass", "Black Glass", "Brown Glass", "Red Glass", "Orange Glass", "Yellow Glass", "Lime Glass", "Cyan Glass", "Light Blue Glass", "Blue Glass", "Purple Glass", "Magenta Glass", "Pink Glass"],
              ["Patterned Green Glass", "Patterned White Glass", "Patterned Light Gray Glass", "Patterned Gray Glass", "Patterned Black Glass", "Patterned Brown Glass", "Patterned Red Glass", "Patterned Orange Glass", "Patterned Yellow Glass", "Patterned Lime Glass", "Patterned Cyan Glass", "Patterned Light Blue Glass", "Patterned Blue Glass", "Patterned Purple Glass", "Patterned Magenta Glass", "Patterned Pink Glass"],
              ["White Baked Clay", "Orange Baked Clay", "Magenta Baked Clay", "Light Blue Baked Clay", "Yellow Baked Clay", "Lime Baked Clay", "Pink Baked Clay", "Gray Baked Clay", "Light Gray Baked Clay", "Cyan Baked Clay", "Purple Baked Clay", "Blue Baked Clay", "Brown Baked Clay", "Green Baked Clay", "Red Baked Clay", "Black Baked Clay"],
              ["White Ceramic", "Orange Ceramic", "Magenta Ceramic", "Light Blue Ceramic", "Yellow Ceramic", "Lime Ceramic", "Pink Ceramic", "Gray Ceramic", "Light Gray Ceramic", "Cyan Ceramic", "Purple Ceramic", "Blue Ceramic", "Brown Ceramic", "Green Ceramic", "Red Ceramic", "Black Ceramic"],
              ["Stone Bricks", "Engraved Stone", "Mossy Stone Bricks", "Cracked Stone Bricks", "Mossy Messy Stone", "Compressed Messy Stone", "Extra Compressed Messy Stone", "Smooth Sandstone", "Engraved Sandstone", "Marked Sandstone", "Sandstone Bricks", "Smooth Red Sandstone", "Engraved Red Sandstone", "Marked Red Sandstone", "Red Sandstone Bricks", "Engraved Diorite", "Diorite Bricks", "Engraved Andesite", "Andesite Bricks", "Engraved Granite", "Granite Bricks", "Ice Bricks", "Dark Red Stone", "Dark Red Brick"],
              ["White Chalk", "Orange Chalk", "Magenta Chalk", "Light Blue Chalk", "Yellow Chalk", "Lime Chalk", "Pink Chalk", "Gray Chalk", "Light Gray Chalk", "Cyan Chalk", "Purple Chalk", "Blue Chalk", "Brown Chalk", "Green Chalk", "Red Chalk", "Black Chalk"]
            ],
            xV = [];
          for (const UV of eV) {
            const VV = [];
            for (const eV of UV) VV.push({
              name: eV,
              frequency: 1,
              amount: {
                min: 10,
                max: 25
              }
            });
            xV.push(...oV(VV, 1))
          }
          const JV = ["Super Compressed Messy Stone", "Hyper Compressed Messy Stone", "Ultra Compressed Messy Stone"],
            YV = [];
          for (const UV of JV) YV.push({
            name: UV,
            frequency: 1,
            amount: {
              min: 1,
              max: 1
            }
          });
          return [...oV(xV, .999 * VV), ...oV(YV, .001 * VV)]
        }

        function IV(VV, eV) {
          return oV([{
            name: `${VV} Pickaxe`,
            frequency: 1,
            amount: null
          }, {
            name: `${VV} Axe`,
            frequency: .9,
            amount: null
          }, {
            name: `${VV} Spade`,
            frequency: .7,
            amount: null
          }, {
            name: `${VV} Hoe`,
            frequency: .2,
            amount: null
          }], eV)
        }

        function dV(VV, eV) {
          if (eV < 0 || eV > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${eV}`);
          const xV = [{
              name: "Arrow",
              frequency: 1 - eV,
              amount: {
                min: 15,
                max: 25
              }
            }],
            JV = ["Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Instant Damage"],
            YV = [];
          for (const UV of JV) YV.push({
            name: UV,
            frequency: 1,
            amount: {
              min: 10,
              max: 15
            }
          });
          return xV.push(...oV(YV, eV)), oV(xV, VV)
        }

        function OV(VV, eV) {
          return oV([{
            name: `${VV} Sword`,
            frequency: .75,
            amount: null
          }, {
            name: `${VV} Bow`,
            frequency: .6,
            amount: null
          }, {
            name: `${VV} Crossbow`,
            frequency: .15,
            amount: null
          }, ...dV(1, {
            [cV.WOOD]: .05,
            [cV.STONE]: .1,
            [cV.IRON]: .3,
            [cV.GOLD]: .5,
            [cV.DIAMOND]: .7
          } [VV])], eV)
        }

        function Ve(VV, eV) {
          if (VV === cV.STONE) throw new Error(`${VV} armour is not supported`);
          const xV = [{
              name: `${VV} Helmet`,
              frequency: 1,
              amount: null
            }, {
              name: `${VV} Chestplate`,
              frequency: 1,
              amount: null
            }, {
              name: `${VV} Gauntlets`,
              frequency: 1,
              amount: null
            }, {
              name: `${VV} Leggings`,
              frequency: 1,
              amount: null
            }, {
              name: `${VV} Boots`,
              frequency: 1,
              amount: null
            }],
            JV = [...OV(VV, 1), ...oV(xV, 1.5)];
          return oV(JV, eV)
        }
        const ee = {
          [wV.i.COMMON]: new aV({
            enchantmentTier: "Tier 1",
            enchantmentProbability: 1,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: KV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: HV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uV(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: sV(1)
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...IV(cV.WOOD, 1), ...IV(cV.STONE, 1), ...Ve(cV.WOOD, 1), ...OV(cV.STONE, 1)]
            }, {
              minItems: 1,
              maxItems: 2,
              items: [hV]
            }]
          }),
          [wV.i.UNCOMMON]: new aV({
            enchantmentTier: "Tier 2",
            enchantmentProbability: .9,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: KV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: HV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uV(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...sV(2), ...SV(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...IV(cV.STONE, 1), ...IV(cV.IRON, 1), ...OV(cV.STONE, 1), ...Ve(cV.IRON, 1)]
            }, {
              minItems: 2,
              maxItems: 3,
              items: [hV, lV]
            }]
          }),
          [wV.i.RARE]: new aV({
            enchantmentTier: "Tier 3",
            enchantmentProbability: .75,
            itemCategories: [{
              minItems: 2,
              maxItems: 3,
              items: KV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: HV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uV(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...SV(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...IV(cV.IRON, 1), ...IV(cV.GOLD, 1), ...Ve(cV.IRON, 1), ...Ve(cV.GOLD, 1)]
            }, {
              minItems: 2,
              maxItems: 4,
              items: [hV, lV, LV, mV]
            }]
          }),
          [wV.i.EPIC]: new aV({
            enchantmentTier: "Tier 4",
            enchantmentProbability: .6,
            itemCategories: [{
              minItems: 3,
              maxItems: 4,
              items: KV(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: HV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...SV(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...IV(cV.GOLD, 1), ...IV(cV.DIAMOND, 1), ...Ve(cV.GOLD, 1), ...Ve(cV.DIAMOND, 1), ...oV([{
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
              items: [LV, fV, mV]
            }]
          }),
          [wV.i.LEGENDARY]: new aV({
            enchantmentTier: "Tier 5",
            enchantmentProbability: .5,
            itemCategories: [{
              minItems: 4,
              maxItems: 5,
              items: KV(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...SV(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...IV(cV.DIAMOND, 1), ...Ve(cV.DIAMOND, 2), ...oV([{
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
              items: [LV, fV, {
                name: "Moonstone",
                frequency: 1,
                amount: {
                  min: 2,
                  max: 4
                }
              }, mV]
            }, {
              minItems: 1,
              maxItems: 1,
              items: (xe = 1, oV([{
                name: "Caught Mob Spirit_Golem Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new CV("Spirit Golem")
              }, {
                name: "Caught Mob Spirit_Wolf Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new CV("Spirit Wolf")
              }, {
                name: "Caught Mob Spirit_Bear Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new CV("Spirit Bear")
              }, {
                name: "Caught Mob Spirit_Stag Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new CV("Spirit Stag")
              }, {
                name: "Caught Mob Spirit_Gorilla Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new CV("Spirit Gorilla")
              }], xe))
            }, {
              minItems: 2,
              maxItems: 3,
              items: function(VV) {
                return oV([{
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
                }], VV)
              }(1)
            }]
          })
        };
        var xe;
        class Je {
          constructor(VV, eV, xV, JV, YV, UV) {
            this.lootChestBlockId = VV, this.seed = eV, this.x = xV, this.y = JV, this.z = YV, this.chestQuality = UV, this.lootChestInventoryDistribution = void 0, this.lootChestInventoryDistribution = ee[UV]
          }
          getBlockId() {
            return this.lootChestBlockId
          }
          generate() {
            const VV = new vV.l(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
              eV = this.lootChestInventoryDistribution.sample(VV);
            return {
              data: {
                persisted: {
                  chestStr: (0, wV.A)(eV),
                  lootQuality: this.chestQuality
                }
              },
              persisted: !0
            }
          }
        }
        class Ye {
          constructor(VV) {
            this.seed = void 0, this.PZ = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
            const {
              seed: eV,
              PZ: xV,
              blockMetadata: JV,
              itemMetadata: yV,
              prefabSize: pV,
              typeSettings: QV
            } = VV;
            Ye.BLOCK_ID_MAPPINGS || (Ye.BLOCK_ID_MAPPINGS = new PV(JV)), gV || (gV = new kV(yV)), this.seed = eV, this.PZ = xV, this.invisibleSolidBlockId = JV["Invisible Solid"].id, this.emptySpawnerBlockId = JV["Empty Spawner Block"].id, this.chestToLootChestBlockId = new nV.d({
              [JV.Chest.id]: JV["Loot Chest"].id,
              [JV["Chest|meta|rot2"].id]: JV["Loot Chest|meta|rot2"].id,
              [JV["Chest|meta|rot3"].id]: JV["Loot Chest|meta|rot3"].id,
              [JV["Chest|meta|rot4"].id]: JV["Loot Chest|meta|rot4"].id
            }, "number");
            const wV = {};
            for (const YV of UV.o) wV[YV] = JV[`${YV} Spawner Block`].id;
            this.mobTypeToSpawnerBlockId = wV, this.defaultSpawnerBlockId = this.mobTypeToSpawnerBlockId[Ye.DEFAULT_MOB_TYPE], this.prefabRadius = Math.ceil(pV / 2);
            const ZV = {};
            for (const UV in QV) {
              const VV = Number(UV);
              ZV[VV] = {};
              const {
                densitySettings: JV
              } = QV[VV];
              for (const UV in JV) {
                const yV = Number(UV),
                  pV = JV[yV];
                let QV = null;
                if (null !== pV) {
                  const JV = Math.ceil(400 / pV.minDistanceBetweenPrefabs);
                  QV = new YV.b(`prefab|${VV}|${yV}`, pV.minDistanceBetweenPrefabs, !1, !0, eV, JV, xV, null, !0)
                }
                ZV[VV][yV] = QV
              }
            }
            this.prefabCentrePointGeneratorPerDensityPerType = ZV
          }
          static isWithinPrefabClearing(VV, eV, xV) {
            for (const JV of xV) {
              if ((VV - JV.centreX) ** 2 + (eV - JV.centreZ) ** 2 < JV.prefab.clearingRadiusSquared) return !0
            }
            return !1
          }
          prefabRandomAt(VV, eV) {
            return new vV.l(`${VV}|${eV}|${this.seed}|prefabGenerator`)
          }
          getLootPrefabCentres(VV, eV, xV, JV, YV) {
            const UV = [];
            for (const yV in this.prefabCentrePointGeneratorPerDensityPerType) {
              const pV = Number(yV),
                QV = this.prefabCentrePointGeneratorPerDensityPerType[pV];
              for (const yV in QV) {
                const nV = Number(yV),
                  wV = QV[nV];
                if (null === wV) continue;
                const ZV = wV.gridSize;
                for (let yV = Math.floor(VV / ZV); yV <= Math.floor((xV - 1) / ZV); yV++)
                  for (let QV = Math.floor(eV / ZV); QV <= Math.floor((JV - 1) / ZV); QV++)
                    for (const [ZV, vV] of wV.getCell(yV, QV).points) {
                      if (ZV < VV || ZV >= xV || vV < eV || vV >= JV) continue;
                      const yV = YV.generate(ZV, vV)[0].biome.getRandomPrefab(this.prefabRandomAt(ZV, vV), pV, nV);
                      null !== yV && yV.chestLocations.length > 0 && UV.push({
                        x: ZV,
                        z: vV,
                        prefab: yV
                      })
                    }
              }
            }
            return UV
          }
          getPrefabsForChunk(VV, eV, xV, JV, YV, yV, pV) {
            const QV = [],
              nV = this.PZ >> 1,
              wV = VV - this.prefabRadius,
              vV = VV + this.PZ + this.prefabRadius,
              rV = eV - this.prefabRadius,
              kV = eV + this.PZ + this.prefabRadius;
            for (const bV in this.prefabCentrePointGeneratorPerDensityPerType) {
              const EV = Number(bV),
                BV = this.prefabCentrePointGeneratorPerDensityPerType[EV];
              for (const bV in BV) {
                const jV = Number(bV),
                  qV = BV[jV];
                if (null === qV) continue;
                if (EV === UV.n.SURFACE && jV === UV.m.VERY_HIGH && !pV.regionMayHaveVeryHighSurfacePrefabs(wV, rV, vV, kV)) continue;
                const tV = qV.getPointsAroundPoint(VV + nV, eV + nV);
                for (const VV of tV) {
                  const eV = VV[0],
                    pV = VV[1];
                  if (eV < wV || eV >= vV || pV < rV || pV >= kV) continue;
                  const nV = JV.getOrGenerate(eV, pV)[0].biome,
                    bV = this.prefabRandomAt(eV, pV),
                    BV = nV.getRandomPrefab(bV, EV, jV);
                  if (null === BV) continue;
                  if (EV === UV.n.SURFACE && !nV.canPlaceSurfacePrefab(eV, pV)) continue;
                  const qV = BV.transformationsEnabled ? WV.sample(bV) : 0,
                    tV = !!BV.transformationsEnabled && RV.sample(bV);
                  let FV = null,
                    TV = null,
                    PV = tV;
                  switch (qV) {
                    case 0:
                      break;
                    case 90:
                      FV = BV.dimensionX - 1, PV = !PV;
                      break;
                    case 180:
                      FV = BV.dimensionX - 1, TV = BV.dimensionZ - 1;
                      break;
                    case 270:
                      TV = BV.dimensionZ - 1, PV = !PV;
                      break;
                    default:
                      console.error(`Invalid prefab rotation: ${qV}`)
                  }
                  const AV = {
                      centreX: eV,
                      centreZ: pV,
                      anchorX: eV - (BV.dimensionX >> 1),
                      anchorZ: pV - (BV.dimensionZ >> 1),
                      prefab: BV,
                      xRotationOffset: FV,
                      zRotationOffset: TV,
                      shouldSwapXZ: PV
                    },
                    {
                      anchorY: NV,
                      isOnSolidGround: XV
                    } = this.getPrefabGroundingInfo(AV, bV, xV, YV, yV);
                  if (!XV) continue;
                  if (EV === UV.n.SURFACE && null !== nV.maxSurfacePrefabRelief) {
                    const VV = AV.shouldSwapXZ ? BV.dimensionZ : BV.dimensionX,
                      JV = AV.shouldSwapXZ ? BV.dimensionX : BV.dimensionZ;
                    if (Ye.footprintRelief(eV, pV, VV, JV, xV) > nV.maxSurfacePrefabRelief) continue
                  }
                  const MV = Math.ceil(Math.sqrt(BV.dimensionX * BV.dimensionX + BV.dimensionZ * BV.dimensionZ) / 2);
                  if (!nV.allowsPrefab(eV, pV, MV, NV, NV + BV.dimensionY - 1)) continue;
                  const zV = new ZV.c;
                  for (const VV of BV.chestLocations) {
                    const eV = pe(AV, VV.localX, VV.localZ),
                      xV = Qe(AV, VV.localX, VV.localZ),
                      JV = NV + VV.localY,
                      YV = VV.qualityDistribution.sample(bV);
                    zV.set(eV, JV, xV, YV)
                  }
                  const GV = new ZV.c;
                  for (const VV of BV.spawnerBlockLocations) {
                    const eV = pe(AV, VV.localX, VV.localZ),
                      xV = Qe(AV, VV.localX, VV.localZ),
                      JV = NV + VV.localY,
                      YV = VV.mobTypeDistribution.sample(bV),
                      UV = this.mobTypeToSpawnerBlockId[YV];
                    GV.set(eV, JV, xV, UV)
                  }
                  let gV = null;
                  (0 !== qV || tV) && (gV = Ye.BLOCK_ID_MAPPINGS.getBlockIdMapping(qV, tV)), QV.push({
                    ...AV,
                    anchorY: NV,
                    chestLocationToQuality: zV,
                    spawnerBlockLocationToBlockId: GV,
                    blockIdMapping: gV,
                    decodedPrefabSchematic: this.getDecodedPrefabSchematic(BV)
                  })
                }
              }
            }
            return QV
          }
          static footprintRelief(VV, eV, xV, JV, YV) {
            let yV = 1 / 0,
              pV = -1 / 0;
            const QV = xV >> 1,
              nV = JV >> 1;
            for (let wV = -QV; wV <= QV; wV += Math.max(1, QV))
              for (let xV = -nV; xV <= nV; xV += Math.max(1, nV)) {
                const JV = YV.getOrGenerate(VV + wV, eV + xV, UV.g.GroundHeight);
                yV = Math.min(yV, JV), pV = Math.max(pV, JV)
              }
            return pV - yV
          }
          getPrefabGroundingInfo(VV, eV, xV, JV, YV) {
            const UV = VV.prefab,
              yV = VV.centreX,
              pV = VV.centreZ,
              QV = [];
            if ("centre" === UV.groundingPoints) QV.push([yV, pV]);
            else
              for (const ZV of UV.groundingPoints) {
                const eV = pe(VV, ZV.localX, ZV.localZ),
                  xV = Qe(VV, ZV.localX, ZV.localZ);
                QV.push([eV, xV])
              }
            let nV;
            const wV = UV.undergroundYInterval;
            if (null !== wV) {
              const {
                SY: VV,
                IY: xV
              } = wV;
              nV = this.getCaveGroundingInfoFromGroundingPoints(QV, UV.groundingRadius, eV, VV, xV, JV)
            } else nV = this.getSurfaceGroundingInfoFromGroundingPoints(QV, UV.groundingRadius, xV, JV, YV);
            return nV.anchorY += UV.yOffset, nV
          }
          getSurfaceGroundingInfoFromGroundingPoints(VV, eV, xV, JV, YV) {
            let pV = 1e4;
            for (const nV of VV) {
              const VV = nV[0],
                wV = nV[1];
              for (let nV = VV - eV; nV < VV + eV; nV++)
                for (let VV = wV - eV; VV < wV + eV; VV++) {
                  if (xV.getOrGenerate(nV, VV, UV.g.WaterHeight) !== yV.n) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  const eV = xV.getOrGenerate(nV, VV, UV.g.GroundHeight);
                  if (QV.e.isInCave(nV, eV, VV, JV)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  if (XV.d.isNearFixedPointPrefab(nV, VV, YV)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  pV = Math.min(pV, eV)
                }
            }
            return {
              anchorY: pV,
              isOnSolidGround: !0
            }
          }
          getCaveGroundingInfoFromGroundingPoints(VV, eV, xV, JV, YV, UV) {
            const yV = [];
            for (const QV of VV) {
              const VV = QV[0],
                xV = QV[1];
              for (let JV = VV - eV; JV < VV + eV; JV++)
                for (let VV = xV - eV; VV < xV + eV; VV++) MV(JV, VV, UV, !1, yV)
            }

            function pV(VV, eV) {
              return Math.floor(xV.next() * (eV - VV + 1)) + VV
            }
            if (0 === yV.length) return {
              anchorY: pV(JV, YV),
              isOnSolidGround: !0
            };
            if (function(VV, eV, xV) {
                for (let JV = 0; JV < VV.length; JV++) {
                  const YV = VV[JV];
                  (YV.floorY < eV || YV.floorY > xV) && (VV.splice(JV, 1), JV--)
                }
              }(yV, JV, YV), 0 === yV.length) return {
              anchorY: -1e4,
              isOnSolidGround: !1
            };
            return {
              anchorY: yV[pV(0, yV.length - 1)].floorY,
              isOnSolidGround: !0
            }
          }
          getBlockFromPrefabAtPoint(VV, eV, xV, JV, YV) {
            var UV, yV;
            let pV = this.getPrefabBlock(VV, eV, xV, JV);
            if (0 === pV) return pV;
            var QV;
            if (pV === this.emptySpawnerBlockId && (pV = null !== (QV = JV.spawnerBlockLocationToBlockId.get(VV, eV, xV)) && void 0 !== QV ? QV : this.defaultSpawnerBlockId), pV < 0) return pV;
            if (pV = null !== (UV = null === (yV = JV.blockIdMapping) || void 0 === yV ? void 0 : yV[pV]) && void 0 !== UV ? UV : pV, void 0 !== this.chestToLootChestBlockId.reverseGet(pV)) {
              var nV;
              const UV = null !== (nV = JV.chestLocationToQuality.get(VV, eV, xV)) && void 0 !== nV ? nV : Ye.DEFAULT_CHEST_QUALITY,
                yV = new Je(pV, this.seed, VV, eV, xV, UV);
              YV.set(VV, eV, xV, yV)
            }
            return pV
          }
          getPrefabBlock(VV, eV, xV, JV) {
            const YV = JV.prefab,
              UV = eV - JV.anchorY;
            if (UV < 0 || UV >= YV.dimensionY) return 0;
            const yV = function(VV, eV, xV) {
                if (VV.shouldSwapXZ) return ye(VV, xV);
                return Ue(VV, eV)
              }(JV, VV, xV),
              pV = function(VV, eV, xV) {
                if (VV.shouldSwapXZ) return Ue(VV, eV);
                return ye(VV, xV)
              }(JV, VV, xV);
            return yV < 0 || yV >= YV.dimensionX || pV < 0 || pV >= YV.dimensionZ ? 0 : JV.decodedPrefabSchematic.get(yV, UV, pV)
          }
          getDecodedPrefabSchematic(VV) {
            const eV = Ye.DECODED_PREFAB_SCHEMATIC_CACHE.get(VV.schematic);
            if (void 0 !== eV) return eV;
            const {
              dimensionX: xV,
              dimensionY: JV,
              dimensionZ: YV
            } = VV, UV = NV()(new Int32Array(xV * JV * YV), [xV, JV, YV]), yV = new ZV.c;
            for (const pV of VV.chestLocations) yV.set(pV.localX, pV.localY, pV.localZ, !0);
            const QV = new ZV.c;
            for (const pV of VV.spawnerBlockLocations) QV.set(pV.localX, pV.localY, pV.localZ, !0);
            for (let nV = 0; nV < xV; nV += wV.y)
              for (let eV = 0; eV < JV; eV += wV.y)
                for (let ZV = 0; ZV < YV; ZV += wV.y) {
                  const vV = NV()(new Uint16Array(wV.y * wV.y * wV.y), [wV.y, wV.y, wV.y]),
                    rV = VV.schematic.getRLEChunk((0, wV.V)(nV), (0, wV.V)(eV), (0, wV.V)(ZV));
                  pV.decode(rV, vV.data);
                  const kV = Math.min(wV.y, xV - nV),
                    bV = Math.min(wV.y, JV - eV),
                    EV = Math.min(wV.y, YV - ZV);
                  for (let xV = 0; xV < kV; xV++)
                    for (let JV = 0; JV < bV; JV++)
                      for (let YV = 0; YV < EV; YV++) {
                        let pV = vV.get(xV, JV, YV);
                        const wV = nV + xV,
                          rV = eV + JV,
                          kV = ZV + YV;
                        if (this.invisibleSolidBlockId === pV) pV = DV.GUARANTEED_AIR;
                        else if (this.emptySpawnerBlockId === pV) QV.get(wV, rV, kV) || console.error(`Empty spawner block found in prefab ${VV.schematic.name} at (${wV}, ${rV}, ${kV}) with no mob type specified. Defaulting to "${Ye.DEFAULT_MOB_TYPE}" mob type.`);
                        else {
                          const eV = this.chestToLootChestBlockId.get(pV);
                          void 0 !== eV && (yV.get(wV, rV, kV) || console.error(`Chest found in prefab ${VV.schematic.name} at (${wV}, ${rV}, ${kV}) with no quality specified. Defaulting to "${Ye.DEFAULT_CHEST_QUALITY}" quality.`), pV = eV)
                        }
                        UV.set(wV, rV, kV, pV)
                      }
                }
            return Ye.DECODED_PREFAB_SCHEMATIC_CACHE.set(VV.schematic, UV), UV
          }
        }

        function Ue(VV, eV) {
          let xV = eV - VV.anchorX;
          return null !== VV.xRotationOffset && (xV = VV.xRotationOffset - xV), xV
        }

        function ye(VV, eV) {
          let xV = eV - VV.anchorZ;
          return null !== VV.zRotationOffset && (xV = VV.zRotationOffset - xV), xV
        }

        function pe(VV, eV, xV) {
          return function(VV, eV) {
            null !== VV.xRotationOffset && (eV = VV.xRotationOffset - eV);
            return eV + VV.anchorX
          }(VV, VV.shouldSwapXZ ? xV : eV)
        }

        function Qe(VV, eV, xV) {
          return function(VV, eV) {
            null !== VV.zRotationOffset && (eV = VV.zRotationOffset - eV);
            return eV + VV.anchorZ
          }(VV, VV.shouldSwapXZ ? eV : xV)
        }
        Ye.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, Ye.BLOCK_ID_MAPPINGS = void 0, Ye.DEFAULT_MOB_TYPE = "Draugr Zombie", Ye.DEFAULT_CHEST_QUALITY = wV.i.COMMON;
        var ne = function(VV) {
            return VV[VV.STANDARD = 0] = "STANDARD", VV[VV.FRILLED = 1] = "FRILLED", VV[VV.TALL = 2] = "TALL", VV[VV.FLAT = 3] = "FLAT", VV[VV.DROOPY = 4] = "DROOPY", VV
          }(ne || {}),
          we = function(VV) {
            return VV[VV.TOP = 0] = "TOP", VV[VV.UPPER_MIDDLE = 1] = "UPPER_MIDDLE", VV[VV.MIDDLE = 2] = "MIDDLE", VV[VV.LOWER_MIDDLE = 3] = "LOWER_MIDDLE", VV[VV.BOTTOM = 4] = "BOTTOM", VV
          }(we || {}),
          Ze = function(VV) {
            return VV[VV.CIRCLE = 0] = "CIRCLE", VV[VV.DIAMOND = 1] = "DIAMOND", VV
          }(Ze || {}),
          ve = function(VV) {
            return VV[VV.ALWAYS = 0] = "ALWAYS", VV[VV.SOMETIMES = 1] = "SOMETIMES", VV[VV.NEVER = 2] = "NEVER", VV
          }(ve || {});
        class re {
          static initCanopyGenerationSchemaByShape(VV, eV, xV, JV) {
            return this.initCanopyGenerationSchemaByFunction(xV, ((xV, YV) => {
              const UV = JV === Ze.CIRCLE ? Math.sqrt(xV * xV + YV * YV) : Math.max(Math.abs(xV - YV), Math.abs(xV + YV));
              return UV < VV ? ve.ALWAYS : UV < eV ? ve.SOMETIMES : ve.NEVER
            }))
          }
          static initCanopyGenerationSchemaByFunction(VV, eV) {
            const xV = new JV.g(2 * VV + 1, [-VV, -VV]);
            for (let JV = -VV; JV <= VV; JV++)
              for (let YV = -VV; YV <= VV; YV++) {
                const VV = eV(JV, YV);
                xV.set(JV, YV, VV)
              }
            return xV
          }
          constructor(VV, eV, xV, JV, UV) {
            this.PZ = xV, this.seed = JV, this.blockMetadata = UV, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
            const yV = 1 / 30;
            if (this.treeInfos = {
                [wV.t.Maple]: {
                  trunkBlockId: UV["Maple Log"].id,
                  trunkBaseId: UV["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: UV["Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Fruity Maple Leaves"].id,
                  canopyType: ne.STANDARD,
                  vineProbability: yV
                },
                [wV.t.Pine]: {
                  trunkBlockId: UV["Pine Log"].id,
                  trunkBaseId: UV["Pine Log|TreeBase|Pine"].id,
                  canopyLeavesId: UV["Pine Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Pine Cone Leaves"].id,
                  canopyType: ne.FRILLED,
                  vineProbability: 0,
                  minHeight: 5,
                  maxHeight: 7
                },
                [wV.t.Plum]: {
                  trunkBlockId: UV["Plum Log"].id,
                  trunkBaseId: UV["Plum Log|TreeBase|Plum"].id,
                  canopyLeavesId: UV["Plum Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Fruity Plum Leaves"].id,
                  canopyType: ne.STANDARD,
                  vineProbability: yV
                },
                [wV.t.Cedar]: {
                  trunkBlockId: UV["Cedar Log"].id,
                  trunkBaseId: UV["Cedar Log|TreeBase|Cedar"].id,
                  canopyLeavesId: UV["Cedar Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.STANDARD,
                  vineProbability: yV
                },
                [wV.t.Aspen]: {
                  trunkBlockId: UV["Aspen Log"].id,
                  trunkBaseId: UV["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: UV["Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.FRILLED,
                  vineProbability: yV,
                  minHeight: 5,
                  maxHeight: 6
                },
                [wV.t.Jungle]: {
                  trunkBlockId: UV["Jungle Log"].id,
                  trunkBaseId: UV["Jungle Log|TreeBase|Jungle"].id,
                  canopyLeavesId: UV["Jungle Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.FLAT,
                  vineProbability: .5,
                  minHeight: 2,
                  maxHeight: 7
                },
                [wV.t.Palm]: {
                  trunkBlockId: UV["Palm Log"].id,
                  trunkBaseId: UV["Palm Log|TreeBase|Palm"].id,
                  canopyLeavesId: UV["Palm Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Fruity Palm Leaves"].id,
                  canopyType: ne.DROOPY,
                  vineProbability: 1 / 3,
                  minHeight: 4,
                  maxHeight: 6
                },
                [wV.t.AutumnMaple]: {
                  trunkBlockId: UV["Maple Log"].id,
                  trunkBaseId: UV["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: UV["Autumn Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.STANDARD,
                  vineProbability: yV
                },
                [wV.t.Pear]: {
                  trunkBlockId: UV["Pear Log"].id,
                  trunkBaseId: UV["Pear Log|TreeBase|Pear"].id,
                  canopyLeavesId: UV["Pear Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Fruity Pear Leaves"].id,
                  canopyType: ne.TALL,
                  vineProbability: yV,
                  minHeight: 3,
                  maxHeight: 5
                },
                [wV.t.Cherry]: {
                  trunkBlockId: UV["Cherry Log"].id,
                  trunkBaseId: UV["Cherry Log|TreeBase|Cherry"].id,
                  canopyLeavesId: UV["Cherry Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Fruity Cherry Leaves"].id,
                  canopyType: ne.DROOPY,
                  vineProbability: 0,
                  minHeight: 4,
                  maxHeight: 6
                },
                [wV.t.Spectral]: {
                  trunkBlockId: UV["Spectral Log"].id,
                  trunkBaseId: UV["Spectral Log|TreeBase|Spectral"].id,
                  canopyLeavesId: UV["Spectral Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.STANDARD,
                  vineProbability: 0
                },
                [wV.t.Mango]: {
                  trunkBlockId: UV["Mango Log"].id,
                  trunkBaseId: UV["Mango Log|TreeBase|Mango"].id,
                  canopyLeavesId: UV["Mango Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: UV["Fruity Mango Leaves"].id,
                  canopyType: ne.TALL,
                  vineProbability: .2,
                  minHeight: 3,
                  maxHeight: 6
                },
                [wV.t.AutumnAspen]: {
                  trunkBlockId: UV["Aspen Log"].id,
                  trunkBaseId: UV["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: UV["Autumn Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.FRILLED,
                  vineProbability: yV,
                  minHeight: 5,
                  maxHeight: 6
                },
                [wV.t.Dead]: {
                  trunkBlockId: UV["Barkless Maple Log"].id,
                  trunkBaseId: UV["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 7
                },
                [wV.t.FallenLog]: {
                  trunkBlockId: UV["Barkless Maple Log"].id,
                  trunkBaseId: UV["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: ne.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 6
                }
              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((VV => UV[VV].id)), this.maxTreeRadius = VV.maxTreeRadius, this.PZ <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
            if (this.PZ <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
            this.canopyInfos = {
              [ne.STANDARD]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [we.TOP]: re.initCanopyGenerationSchemaByShape(.2, 1.1, 2, Ze.CIRCLE),
                  [we.UPPER_MIDDLE]: null,
                  [we.MIDDLE]: re.initCanopyGenerationSchemaByShape(1.2, 1.7, 2, Ze.CIRCLE),
                  [we.LOWER_MIDDLE]: null,
                  [we.BOTTOM]: re.initCanopyGenerationSchemaByShape(2.8, 3, 2, Ze.CIRCLE)
                }
              },
              [ne.FRILLED]: {
                canopyBottomOffset: -3,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [we.TOP]: re.initCanopyGenerationSchemaByShape(.1, .1, 2, Ze.CIRCLE),
                  [we.UPPER_MIDDLE]: re.initCanopyGenerationSchemaByShape(2, 2, 2, Ze.DIAMOND),
                  [we.MIDDLE]: null,
                  [we.LOWER_MIDDLE]: re.initCanopyGenerationSchemaByShape(3, 3, 2, Ze.DIAMOND),
                  [we.BOTTOM]: re.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, Ze.CIRCLE)
                }
              },
              [ne.TALL]: {
                canopyBottomOffset: -1,
                canopyTopOffset: 2,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [we.TOP]: re.initCanopyGenerationSchemaByShape(.8, 2, 2, Ze.DIAMOND),
                  [we.UPPER_MIDDLE]: re.initCanopyGenerationSchemaByShape(1.7, 1.7, 2, Ze.CIRCLE),
                  [we.MIDDLE]: null,
                  [we.LOWER_MIDDLE]: re.initCanopyGenerationSchemaByShape(1.7, 2.2, 2, Ze.CIRCLE),
                  [we.BOTTOM]: re.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, Ze.CIRCLE)
                }
              },
              [ne.FLAT]: {
                canopyBottomOffset: 0,
                canopyTopOffset: 1,
                radius: 3,
                canopyLevelToGenerationSchema: {
                  [we.TOP]: re.initCanopyGenerationSchemaByShape(2.2, 2.5, 3, Ze.CIRCLE),
                  [we.UPPER_MIDDLE]: re.initCanopyGenerationSchemaByFunction(3, ((VV, eV) => {
                    if (Math.sqrt(VV * VV + eV * eV) > 3.2) return ve.NEVER;
                    const xV = Math.abs(VV),
                      JV = Math.abs(eV);
                    return 1 === xV && 3 === JV || 3 === xV && 1 === JV ? ve.SOMETIMES : ve.ALWAYS
                  })),
                  [we.MIDDLE]: null,
                  [we.LOWER_MIDDLE]: null,
                  [we.BOTTOM]: null
                }
              },
              [ne.DROOPY]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [we.TOP]: re.initCanopyGenerationSchemaByShape(2, 2, 2, Ze.CIRCLE),
                  [we.UPPER_MIDDLE]: re.initCanopyGenerationSchemaByShape(2.2, 2.8, 2, Ze.CIRCLE),
                  [we.MIDDLE]: null,
                  [we.LOWER_MIDDLE]: re.initCanopyGenerationSchemaByFunction(2, ((VV, eV) => 2 === Math.abs(VV) && 2 === Math.abs(eV) ? ve.SOMETIMES : ve.ALWAYS)),
                  [we.BOTTOM]: re.initCanopyGenerationSchemaByFunction(2, ((VV, eV) => {
                    const xV = Math.abs(VV),
                      JV = Math.abs(eV);
                    return 2 === xV && 2 === JV || 0 === xV && 1 === JV || 1 === xV && 0 === JV ? ve.ALWAYS : ve.NEVER
                  }))
                }
              }
            };
            for (const YV in this.canopyInfos) {
              const VV = this.canopyInfos[YV];
              if (VV.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${VV.radius} for canopy type "${YV}" is larger than tree radius ${this.maxTreeRadius}`)
            }
            let pV = 1e5,
              QV = 0;
            for (const YV of VV.biomeSelector.EU) YV.biome.treeMinDist && (pV = Math.min(pV, YV.biome.treeMinDist), QV = Math.max(QV, YV.biome.treeMinDist));
            this.treePointGen = new YV.b("tree", 6, !0, !1, JV, 300, xV, {
              func: VV => eV.getBiome(VV[0], VV[1]).biome.treeMinDist || QV,
              min: pV,
              max: QV
            }, !1, 2)
          }
          getTreesForChunk(VV, eV, xV, JV, YV, pV, nV) {
            const ZV = [];
            for (let rV = VV - this.maxTreeRadius; rV < VV + this.PZ + this.maxTreeRadius; rV++)
              for (let VV = eV - this.maxTreeRadius; VV < eV + this.PZ + this.maxTreeRadius; VV++) {
                const eV = JV.getOrGenerate(rV, VV)[0].biome;
                if (null !== eV.treeMinDist) {
                  if (eV.getTotalTreeChance() <= 0 && console.error("Biome", eV, "has 0 total tree chance"), !this.treePointGen.isPoint(rV, VV)) continue;
                  if (xV.getOrGenerate(rV, VV, UV.g.WaterHeight) !== yV.n) continue;
                  const JV = xV.getOrGenerate(rV, VV, UV.g.GroundHeight);
                  if (QV.e.isInCave(rV, JV, VV, YV)) continue;
                  if (Ye.isWithinPrefabClearing(rV, VV, pV)) continue;
                  if (XV.d.isNearFixedPointPrefab(rV, VV, nV)) continue;
                  const kV = new vV.l(`${rV}${VV}${this.seed}treeHeight`),
                    bV = re.getTreeTypeFromBiome(eV, kV);
                  let {
                    height: EV,
                    vineDir: BV
                  } = this.getRandTreeInfo(kV, bV);
                  if (bV === wV.t.FallenLog) {
                    BV = kV.next() < .5 ? 0 : 1;
                    for (let eV = -1; eV < EV - 1; eV++) {
                      if (xV.getOrGenerate(0 === BV ? rV + eV : rV, 0 === BV ? VV : VV + eV, UV.g.GroundHeight) !== JV) {
                        EV = 1;
                        break
                      }
                    }
                  }
                  ZV.push({
                    treeX: rV,
                    treeZ: VV,
                    trunkBase: JV + 1,
                    height: EV,
                    vineDir: BV,
                    treeType: bV
                  })
                }
              }
            return ZV
          }
          getRandTreeInfo(VV, eV) {
            var xV, JV;
            const YV = this.treeInfos[eV],
              UV = null !== (xV = YV.minHeight) && void 0 !== xV ? xV : this.minTreeHeight,
              yV = null !== (JV = YV.maxHeight) && void 0 !== JV ? JV : this.maxTreeHeight;
            return {
              height: Math.floor(VV.next() * (yV - UV)) + UV,
              vineDir: VV.next() < YV.vineProbability ? Math.floor(4 * VV.next()) : -1
            }
          }
          static getTreeTypeFromBiome(VV, eV) {
            const xV = Math.floor(eV.next() * VV.getTotalTreeChance());
            let JV = 0,
              YV = 0;
            for (; JV <= xV;) JV += VV.treeChances[YV].chance, YV++;
            return VV.treeChances[YV - 1].treeType
          }
          addTreesToChunk(VV, eV, xV, JV, YV) {
            for (const UV of YV) {
              const YV = new vV.l(`${UV.treeX}|${UV.treeZ}|${UV.trunkBase}|tree`);
              if (UV.treeType === wV.t.Dead || UV.treeType === wV.t.FallenLog) {
                this.addDeadTreeToChunk(VV, eV, xV, JV, UV, YV);
                continue
              }
              const yV = this.addTreeCanopyToChunk(VV, eV, xV, JV, UV, YV);
              this.addTreeTrunkToChunk(VV, eV, xV, JV, UV, yV)
            }
          }
          addDeadTreeToChunk(VV, eV, xV, JV, YV, UV) {
            const yV = this.deadWoodIds[Math.floor(UV.next() * this.deadWoodIds.length)],
              {
                treeX: pV,
                treeZ: QV,
                trunkBase: nV,
                height: ZV
              } = YV,
              vV = (YV, UV, pV) => {
                YV >= eV && YV < eV + this.PZ && UV >= xV && UV < xV + this.PZ && pV >= JV && pV < JV + this.PZ && VV.set(YV - eV, UV - xV, pV - JV, yV)
              };
            if (YV.treeType === wV.t.FallenLog) {
              if (ZV <= 1) return void vV(pV, nV, QV);
              for (let VV = -1; VV < ZV - 1; VV++) vV(0 === YV.vineDir ? pV + VV : pV, nV, 0 === YV.vineDir ? QV : QV + VV);
              return
            }
            for (let wV = nV; wV < nV + ZV; wV++) vV(pV, wV, QV);
            const rV = ZV <= 3 ? 1 : 1 + Math.floor(3 * UV.next()),
              kV = nV + (ZV >> 1);
            for (let wV = 0; wV < rV; wV++) {
              const VV = kV + Math.floor(UV.next() * (nV + ZV - kV)),
                eV = Math.floor(4 * UV.next()),
                xV = 0 === eV ? 1 : 1 === eV ? -1 : 0,
                JV = 2 === eV ? 1 : 3 === eV ? -1 : 0;
              vV(pV + xV, VV, QV + JV), UV.next() < .5 && vV(pV + 2 * xV, VV + (UV.next() < .6 ? 1 : 0), QV + 2 * JV)
            }
            UV.next() < .35 && vV(pV, nV + ZV, QV)
          }
          addTreeCanopyToChunk(VV, eV, xV, JV, YV, UV) {
            const yV = YV.treeX,
              pV = YV.treeZ,
              QV = YV.trunkBase,
              nV = QV + YV.height - 1,
              wV = this.treeInfos[YV.treeType],
              ZV = this.canopyInfos[wV.canopyType],
              vV = QV + YV.height + ZV.canopyBottomOffset,
              rV = QV + YV.height + ZV.canopyTopOffset,
              kV = Math.max(vV, xV),
              bV = Math.min(rV, xV + this.PZ - 1);
            if (bV < kV) return vV;
            const EV = Math.max(yV - ZV.radius, eV),
              BV = Math.min(yV + ZV.radius, eV + this.PZ - 1);
            if (EV > BV) return vV;
            const jV = Math.max(pV - ZV.radius, JV),
              qV = Math.min(pV + ZV.radius, JV + this.PZ - 1);
            if (jV > qV) return vV;
            const tV = wV.canopyLeavesId,
              FV = wV.canopyLeavesWithDropId;
            return wV.canopyType === ne.FRILLED ? this.addFrilledCanopyToChunk(VV, eV, xV, JV, yV, pV, EV, BV, jV, qV, nV, tV, FV, kV, bV, rV, ZV.canopyLevelToGenerationSchema, UV) : wV.canopyType === ne.TALL || wV.canopyType === ne.DROOPY ? this.addTallOrDroopyCanopyToChunk(VV, eV, xV, JV, yV, pV, EV, BV, jV, qV, nV, tV, FV, kV, bV, rV, ZV.canopyLevelToGenerationSchema, UV) : wV.canopyType === ne.FLAT ? this.addFlatCanopyToChunk(VV, eV, xV, JV, yV, pV, EV, BV, jV, qV, nV, tV, FV, kV, bV, rV, ZV.canopyLevelToGenerationSchema, UV) : this.addStandardCanopyToChunk(VV, eV, xV, JV, yV, pV, EV, BV, jV, qV, nV, tV, FV, kV, bV, rV, ZV.canopyLevelToGenerationSchema, UV), vV
          }
          addStandardCanopyToChunk(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV) {
            for (let jV = yV; jV <= pV; jV++) {
              const yV = jV - YV;
              for (let YV = rV; YV <= kV; YV++) {
                let pV;
                pV = YV === bV ? we.TOP : YV === bV - 1 ? we.MIDDLE : we.BOTTOM;
                const rV = EV[pV];
                for (let kV = QV; kV <= nV; kV++) {
                  const pV = kV - UV;
                  this.applyCanopyGenerationSchema(VV, eV, xV, JV, jV, YV, kV, wV, ZV, vV, yV, pV, rV, BV)
                }
              }
            }
          }
          addFrilledCanopyToChunk(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV) {
            const jV = BV.next() < .7;
            for (let qV = yV; qV <= pV; qV++) {
              const yV = qV - YV;
              for (let YV = rV; YV <= kV; YV++) {
                const pV = bV - YV;
                let rV;
                if (0 === pV) rV = we.TOP;
                else if (2 === pV) {
                  if (!jV) continue;
                  rV = we.LOWER_MIDDLE
                } else rV = 4 === pV ? we.BOTTOM : we.UPPER_MIDDLE;
                const kV = EV[rV];
                for (let bV = QV; bV <= nV; bV++) {
                  const pV = bV - UV;
                  this.applyCanopyGenerationSchema(VV, eV, xV, JV, qV, YV, bV, wV, ZV, vV, yV, pV, kV, BV)
                }
              }
            }
          }
          addTallOrDroopyCanopyToChunk(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV) {
            for (let jV = yV; jV <= pV; jV++) {
              const yV = jV - YV;
              for (let YV = rV; YV <= kV; YV++) {
                let pV;
                pV = YV === bV ? we.TOP : YV === bV - 1 ? we.UPPER_MIDDLE : YV === bV - 2 ? we.LOWER_MIDDLE : we.BOTTOM;
                const rV = EV[pV];
                for (let kV = QV; kV <= nV; kV++) {
                  const pV = kV - UV;
                  this.applyCanopyGenerationSchema(VV, eV, xV, JV, jV, YV, kV, wV, ZV, vV, yV, pV, rV, BV)
                }
              }
            }
          }
          addFlatCanopyToChunk(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV) {
            for (let jV = yV; jV <= pV; jV++) {
              const yV = jV - YV;
              for (let YV = rV; YV <= kV; YV++) {
                let pV;
                YV === bV ? pV = we.TOP : YV === bV - 1 && (pV = we.UPPER_MIDDLE);
                const rV = EV[pV];
                for (let kV = QV; kV <= nV; kV++) {
                  const pV = kV - UV;
                  this.applyCanopyGenerationSchema(VV, eV, xV, JV, jV, YV, kV, wV, ZV, vV, yV, pV, rV, BV)
                }
              }
            }
          }
          applyCanopyGenerationSchema(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV) {
            if (UV <= pV && 0 === wV && 0 === ZV) return;
            let kV;
            const bV = vV.get(wV, ZV);
            if (bV === ve.ALWAYS) kV = QV;
            else {
              if (bV === ve.NEVER) return;
              if (bV !== ve.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${bV}`);
              if (!(rV.next() < .8)) return;
              kV = QV
            }
            null !== nV && rV.next() < 1 / 15 && (kV = nV), VV.set(YV - eV, UV - xV, yV - JV, kV)
          }
          addTreeTrunkToChunk(VV, eV, xV, JV, YV, UV) {
            const yV = eV + this.PZ,
              pV = xV + this.PZ,
              QV = JV + this.PZ,
              nV = YV.treeX,
              wV = YV.trunkBase,
              ZV = YV.treeZ,
              vV = this.treeInfos[YV.treeType],
              rV = eV <= nV && nV < yV && JV <= ZV && ZV < QV,
              kV = xV <= wV && wV < pV,
              bV = Math.max(wV + 1, xV),
              EV = Math.min(wV + YV.height, pV) - 1;
            if (UV = Math.min(UV, pV), rV) {
              kV && VV.set(nV - eV, wV - xV, ZV - JV, vV.trunkBaseId);
              for (let YV = bV; YV <= EV; YV++) VV.set(nV - eV, YV - xV, ZV - JV, vV.trunkBlockId)
            }
            const BV = YV.vineDir;
            if (-1 === BV) return;
            let jV, qV = 0,
              tV = 0;
            0 === BV ? (qV = -1, jV = this.blockMetadata["Vines|meta|rot4"].id) : 1 === BV ? (tV = 1, jV = this.blockMetadata.Vines.id) : 2 === BV ? (qV = 1, jV = this.blockMetadata["Vines|meta|rot2"].id) : 3 === BV && (tV = -1, jV = this.blockMetadata["Vines|meta|rot3"].id);
            const FV = nV + qV,
              TV = ZV + tV;
            if (!(FV < eV || FV >= yV || TV < JV || TV >= QV)) {
              kV && VV.set(FV - eV, wV - xV, TV - JV, jV);
              for (let YV = bV; YV < UV; YV++) VV.set(FV - eV, YV - xV, TV - JV, jV)
            }
          }
          getAllBlocksForTree(VV) {
            const eV = this.PZ >> 1,
              xV = VV.treeX - eV,
              JV = VV.trunkBase,
              YV = VV.treeZ - eV,
              UV = [],
              yV = new ke(UV, xV, JV, YV);
            return this.addTreesToChunk(yV, xV, JV, YV, [VV]), UV
          }
        }
        class ke {
          constructor(VV, eV, xV, JV) {
            this.treeBlocks = VV, this.startX = eV, this.startY = xV, this.startZ = JV
          }
          set(VV, eV, xV, JV) {
            this.treeBlocks.push({
              x: VV + this.startX,
              y: eV + this.startY,
              z: xV + this.startZ,
              id: JV
            })
          }
        }
        var be = xV(41024);
        let Ee = null;
        class Be {
          constructor(VV, eV, xV, UV, yV, pV, QV, nV) {
            this.biomeSelector = VV, this.noWaterHeightmapGenerator = eV, this.hydrology = xV, this.lakeRadiusNoiseModifier = UV, this.seed = yV, this.needOutsideWaterDist = QV, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, Ee || (Ee = new be.e("scattered lakes", nV ? 4e3 : 500, 6e4)), this.lakes = Ee.partition(), this.pointGenerator = new YV.b("oasisLake", this.distApart, !1, !0, `${yV}oasisLake`, 6, pV), this.lakeRadiusNoiseAmplitude = (0, JV.x)(UV)
          }
          getWaterGenInfo(VV, eV, xV) {
            const YV = this.maxRadius + xV,
              UV = YV * YV;
            let yV, pV = null,
              QV = 0,
              nV = 0,
              wV = 1e4;
            for (const ZV of this.pointGenerator.getPointsAroundPoint(VV, eV)) {
              if ((0, JV.J)(ZV, VV, eV) > UV) continue;
              const xV = this.getLakeAtOrigin(ZV);
              if (null === xV) continue;
              void 0 === yV && (yV = this.lakeRadiusNoiseModifier.getOctaves(VV, eV) + this.lakeRadiusNoiseAmplitude);
              const YV = (0, JV.I)(xV.origin, VV, eV),
                vV = yV * (xV.radius / this.maxRadius),
                rV = xV.radius - vV,
                kV = YV - rV;
              kV >= wV || (wV = kV, pV = xV, QV = YV, nV = rV)
            }
            return null === pV ? null : {
              distFromWater: QV,
              waterRadius: nV,
              waterHeight: pV.waterHeight,
              waterbedHeight: pV.bedHeight,
              isLake: !0,
              needOutsideWaterDist: this.needOutsideWaterDist
            }
          }
          getLakeAtOrigin(VV) {
            const eV = this.lakes.get(VV[0], VV[1]);
            if (!(0, wV.J)(eV)) return eV.lake;
            const xV = this.buildLake(VV);
            return this.lakes.set(VV[0], VV[1], {
              lake: xV
            }), xV
          }
          buildLake(VV) {
            const eV = this.biomeSelector.generate(VV[0], VV[1]);
            if (!eV[0].biome.hasScatteredLakes) return null;
            const {
              minRadius: xV,
              maxRadius: JV,
              minGapFromHydrologyWater: YV
            } = this, UV = new vV.l(`${VV[0]}|${VV[1]}${this.seed}oasisLake`), yV = this.hydrology.getHydrologyWaterGenInfo(VV[0], VV[1]), pV = Math.floor(yV.distFromWater - yV.waterRadius - YV);
            if (pV < xV) return null;
            const QV = Math.min(xV + Math.floor(UV.next() * (JV - xV + 1)), pV),
              nV = Math.floor(this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(VV[0], VV[1], eV) - 7);
            return {
              origin: [VV[0], VV[1]],
              radius: QV,
              waterHeight: nV,
              bedHeight: Math.floor(nV - (4 + .35 * QV))
            }
          }
        }
        class je {
          constructor() {
            this.hasLake = !1, this.lakeCreationHasBeenAttempted = !1, this.lakeWaterHeight = 0, this.lakeRadius = 0, this.lakeBedHeight = 0
          }
        }
        let qe = null;
        class te {
          constructor(VV, eV, xV, YV, UV, yV, pV, QV) {
            this.biomeSelector = VV, this.noWaterHeightmapGenerator = eV, this.needOutsideWaterBodyDist = yV, this.OY = QV, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
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
            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, qe || (qe = new be.e("water cells", pV ? 800 : 60, 6e4)), this.waterBodyInfos = qe.partition();
            const nV = Math.max(this.lakeSettings.maxRadius, this.maxRiverSettings.width / 2 + this.widthOffset) + yV + UV;
            this.cellCenterMaxOffset = this.gridSize / 2 - nV, this.seed = xV, this.lakeRadiusNoiseModifier = new JV.h([{
              amplitude: 10,
              frequency: 1 / 55
            }, {
              amplitude: 4,
              frequency: .04
            }], `${xV}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, JV.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new Be(VV, eV, this, this.lakeRadiusNoiseModifier, xV, YV, yV, pV)
          }
          getInfoNeededForWaterGen(VV, eV) {
            let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!this.OY) return Te(this.needOutsideWaterBodyDist);
            const JV = this.getHydrologyWaterGenInfo(VV, eV);
            if (!xV) return JV;
            const YV = this.scatteredLakes.getWaterGenInfo(VV, eV, this.needOutsideWaterBodyDist);
            return null === YV || Fe(JV) <= Fe(YV) ? JV : YV
          }
          columnMayHaveScatteredLakes(VV, eV, xV) {
            for (const {
                biome: JV
              }
              of VV)
              if (JV.hasScatteredLakes) return !0;
            return this.biomeSelector.regionMayHaveScatteredLakes(eV, xV)
          }
          getDistToScatteredLakeEdge(VV, eV, xV) {
            const JV = this.scatteredLakes.getWaterGenInfo(VV, eV, xV);
            return null === JV ? 1e4 : Fe(JV)
          }
          getHydrologyWaterGenInfo(VV, eV) {
            const xV = [VV, eV],
              YV = this.getWaterInfo(VV, eV, !0);
            let UV = 1e4,
              yV = 0,
              pV = 0,
              QV = 0,
              nV = 0,
              wV = 0,
              ZV = 0;
            if (YV.downhill) {
              const {
                Dn: VV,
                fracAlong: eV,
                lineSegmentLength: vV
              } = (0, JV.w)(xV, YV.origin, YV.downhill.origin);
              yV = Math.floor(VV);
              let rV = YV.incomingFlux;
              if (rV += eV * YV.selfFlux, QV = Math.min(1, rV / this.maxRiverSettings.atFlux), pV = Math.max(1, Math.ceil(QV * this.maxRiverSettings.width)), UV = yV - pV / 2, wV = YV.originNoWaterHeight + -3, YV.downhill.lakeInfo.hasLake) {
                ZV = YV.downhill.lakeInfo.lakeWaterHeight;
                const VV = vV - YV.downhill.lakeInfo.lakeRadius,
                  xV = vV * eV;
                nV = Math.min(1, xV / VV)
              } else ZV = YV.downhill.originNoWaterHeight + -3, nV = eV
            }
            for (const vV of YV.uphills) {
              const {
                Dn: VV,
                fracAlong: eV,
                lineSegmentLength: rV
              } = (0, JV.w)(xV, vV.origin, YV.origin), kV = Math.floor(VV);
              let bV = vV.incomingFlux;
              bV += eV * vV.selfFlux;
              const EV = Math.min(1, bV / this.maxRiverSettings.atFlux),
                BV = Math.max(1, Math.ceil(EV * this.maxRiverSettings.width)),
                jV = kV - BV / 2;
              if (jV < UV)
                if (UV = jV, yV = kV, QV = EV, pV = BV, wV = vV.originNoWaterHeight + -3, YV.lakeInfo.hasLake) {
                  ZV = YV.lakeInfo.lakeWaterHeight;
                  const VV = rV - YV.lakeInfo.lakeRadius,
                    xV = rV * eV;
                  nV = Math.min(1, xV / VV)
                } else ZV = YV.originNoWaterHeight + -3, nV = eV
            }
            if (1e4 !== UV) {
              let xV = 1e4,
                vV = 0;
              if (YV.lakeInfo.hasLake) {
                const UV = YV.lakeInfo;
                let yV = this.lakeRadiusNoiseModifier.getOctaves(VV, eV);
                yV += this.lakeRadiusNoiseAmplitude;
                yV *= UV.lakeRadius / this.lakeSettings.maxRadius, vV = UV.lakeRadius - yV, xV = (0, JV.I)(YV.origin, VV, eV) - vV
              }
              const rV = Math.floor(ZV + (wV - ZV) * (1 - nV)),
                kV = rV - (Math.ceil(10 * QV) + 2);
              if (UV < xV) {
                return {
                  distFromWater: yV,
                  waterRadius: (pV + this.widthOffset) / 2,
                  waterHeight: rV,
                  waterbedHeight: kV,
                  isLake: !1,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              } {
                const xV = (0, JV.I)(YV.origin, VV, eV),
                  UV = YV.lakeInfo;
                return {
                  distFromWater: xV,
                  waterRadius: vV,
                  waterHeight: UV.lakeWaterHeight,
                  waterbedHeight: UV.lakeBedHeight,
                  isLake: !0,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              }
            }
            return Te(this.needOutsideWaterBodyDist)
          }
          getWaterInfo(VV, eV, xV) {
            const JV = Math.floor(VV / this.gridSize),
              YV = Math.floor(eV / this.gridSize),
              UV = this.getCellInfo(JV, YV);
            if (UV.uphills || this.fillInUphillInfo(JV, YV, UV), UV.downhill || UV.lakeInfo.lakeCreationHasBeenAttempted || (this.fillInLakeInfo(UV), UV.lakeInfo.lakeCreationHasBeenAttempted = !0), xV && UV.downhill) {
              const VV = this.getWaterInfo(UV.downhill.origin[0], UV.downhill.origin[1], !1);
              UV.downhill.lakeInfo = VV.lakeInfo
            }
            return UV
          }
          getCellInfo(VV, eV) {
            if (VV === this.lastReadInfo.cellX && eV === this.lastReadInfo.cellZ) return this.lastReadInfo.info;
            const xV = this.waterBodyInfos.get(VV, eV);
            if (!(0, wV.J)(xV)) return this.lastReadInfo.cellX = VV, this.lastReadInfo.cellZ = eV, this.lastReadInfo.info = xV, xV;
            const JV = this.getCellOrigin(VV, eV),
              YV = this.biomeSelector.generate(JV[0], JV[1]),
              UV = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(JV[0], JV[1], YV),
              yV = {
                origin: JV,
                originNoWaterHeight: UV,
                downhill: this.getDownhillFromCell(VV, eV, UV),
                uphills: null,
                incomingFlux: null,
                selfFlux: this.getRainfall(JV[0], JV[1]),
                lakeInfo: new je
              };
            return this.lastReadInfo.cellX = VV, this.lastReadInfo.cellZ = eV, this.lastReadInfo.info = yV, this.waterBodyInfos.set(VV, eV, yV), yV
          }
          fillInUphillInfo(VV, eV, xV) {
            const JV = this.getUphillsFromCell(VV, eV);
            let YV = 0;
            for (const {
                incomingFlux: UV,
                selfFlux: yV
              }
              of JV) YV += UV + yV;
            xV.uphills = JV, xV.incomingFlux = YV
          }
          getUphillsFromCell(VV, eV) {
            const xV = [];
            for (let UV = -1; UV <= 1; UV++)
              for (let yV = -1; yV <= 1; yV++) {
                var JV, YV;
                const pV = VV + UV,
                  QV = eV + yV,
                  nV = Math.abs(UV) + Math.abs(yV);
                if (2 === nV || 0 === nV) continue;
                const wV = this.getCellInfo(pV, QV);
                (null === (JV = wV.downhill) || void 0 === JV ? void 0 : JV.cell[0]) === VV && (null === (YV = wV.downhill) || void 0 === YV ? void 0 : YV.cell[1]) === eV && (wV.uphills || this.fillInUphillInfo(pV, QV, wV), xV.push({
                  incomingFlux: wV.incomingFlux,
                  selfFlux: wV.selfFlux,
                  origin: wV.origin,
                  originNoWaterHeight: wV.originNoWaterHeight
                }))
              }
            return xV
          }
          getDownhillFromCell(VV, eV, xV) {
            const JV = {
              cell: [0, 0],
              origin: null,
              originNoWaterHeight: 0,
              lakeInfo: new je
            };
            let YV = -1;
            for (let UV = -1; UV <= 1; UV++)
              for (let yV = -1; yV <= 1; yV++) {
                const pV = VV + UV,
                  QV = eV + yV,
                  nV = Math.abs(UV) + Math.abs(yV);
                if (2 === nV || 0 === nV) continue;
                const wV = this.getCellOrigin(pV, QV),
                  ZV = this.biomeSelector.generate(wV[0], wV[1]),
                  vV = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(wV[0], wV[1], ZV),
                  rV = xV - vV;
                rV > 0 && rV > YV && (YV = rV, JV.cell[0] = pV, JV.cell[1] = QV, JV.origin = wV, JV.originNoWaterHeight = vV)
              }
            return -1 !== YV ? JV : null
          }
          getCellOrigin(VV, eV) {
            const xV = VV * this.gridSize + this.gridSize / 2,
              JV = eV * this.gridSize + this.gridSize / 2,
              YV = new vV.l(`${VV}${eV}${this.seed}riverCell`);
            return [xV + Math.floor(YV.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset), JV + Math.floor(YV.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset)]
          }
          fillInLakeInfo(VV) {
            const eV = VV.lakeInfo,
              xV = VV.incomingFlux + VV.selfFlux;
            if (xV < this.lakeSettings.noLakeFluxCutoff) return;
            eV.hasLake = !0;
            const JV = xV / this.lakeSettings.maxRadiusAtFlux,
              YV = this.lakeSettings.minRadius + Math.ceil(JV * (this.lakeSettings.maxRadius - this.lakeSettings.minRadius));
            eV.lakeRadius = YV, eV.lakeWaterHeight = Math.floor(VV.originNoWaterHeight - 7);
            const UV = 4 + .35 * YV;
            eV.lakeBedHeight = Math.floor(eV.lakeWaterHeight - UV)
          }
          getRainfall(VV, eV) {
            return 100
          }
        }

        function Fe(VV) {
          let {
            distFromWater: eV,
            waterRadius: xV
          } = VV;
          return eV - xV
        }

        function Te(VV) {
          return {
            distFromWater: 1e4,
            waterRadius: 0,
            waterHeight: 0,
            waterbedHeight: 0,
            isLake: !1,
            needOutsideWaterDist: VV
          }
        }
        const Pe = [{
          blockName: "Moonstone Ore",
          radius: 2,
          AU: 40,
          SY: -85,
          IY: -85,
          NU: .5
        }, {
          blockName: "Diamond Ore",
          radius: 2,
          AU: 13,
          SY: -100,
          IY: -85,
          NU: .28
        }, {
          blockName: "Gold Ore",
          radius: 2,
          AU: 10,
          SY: -100,
          IY: -75,
          NU: .4
        }, {
          blockName: "Iron Ore",
          radius: 2,
          AU: 5,
          SY: -80,
          IY: 15,
          NU: .5
        }, {
          blockName: "Coal Ore",
          radius: 3,
          AU: 4,
          SY: -60,
          IY: 40,
          NU: .5
        }];
        class Ae {
          constructor(VV, eV, xV, JV) {
            this.seed = eV, this.PZ = xV, this.TU = void 0, this.TU = JV.map((JV => {
              const UV = new YV.b("ore", JV.AU, !1, !0, `${eV}${JV.blockName}`, 20, xV, null, !0);
              return UV.assertReachableFromChunkCentre(xV, JV.radius), {
                vp: (0, wV.D)(JV.blockName, VV),
                radius: JV.radius,
                AU: JV.AU,
                SY: JV.SY,
                IY: JV.IY,
                NU: JV.NU,
                pointGenerator: UV
              }
            }))
          }
          getOreBlocksForChunk(VV, eV) {
            const xV = [],
              YV = new vV.l(`${VV}${eV}${this.seed}oreExists`);
            for (const UV of this.TU) {
              const yV = UV.pointGenerator.getPointsAroundPoint(VV + this.PZ / 2, eV + this.PZ / 2),
                pV = VV + this.PZ + UV.radius,
                QV = VV - UV.radius - 1,
                nV = eV + this.PZ + UV.radius,
                wV = eV - UV.radius - 1;
              for (const ZV of yV) {
                if (ZV[0] >= pV || ZV[0] <= QV || ZV[1] >= nV || ZV[1] <= wV) continue;
                const yV = new vV.l(`${ZV[0]}${ZV[1]}${this.seed}ore`),
                  rV = Math.floor(yV.next() * (UV.IY + 1 - UV.SY)) + UV.SY,
                  kV = Math.max(VV, ZV[0] - UV.radius),
                  bV = Math.min(VV + this.PZ - 1, ZV[0] + UV.radius),
                  EV = Math.max(eV, ZV[1] - UV.radius),
                  BV = Math.min(eV + this.PZ - 1, ZV[1] + UV.radius);
                for (let VV = kV; VV <= bV; VV++)
                  for (let eV = EV; eV <= BV; eV++) {
                    (0, JV.B)(ZV, VV, eV) > UV.radius || (YV.next() >= UV.NU || xV.push(VV, rV, eV, UV.vp))
                  }
              }
            }
            return new Int32Array(xV)
          }
          addOresToChunk(VV, eV, xV, JV, YV, yV, pV) {
            const QV = xV + this.PZ,
              nV = pV.length;
            for (let wV = 0; wV < nV; wV += 4) {
              const nV = pV[wV + 1];
              if (nV < xV || nV >= QV) continue;
              const ZV = pV[wV],
                vV = pV[wV + 2];
              if (nV < yV.get(ZV, vV, UV.g.GroundHeight) - YV) {
                const YV = pV[wV + 3];
                VV.set(ZV - eV, nV - xV, vV - JV, YV)
              }
            }
          }
        }
        var Ne = xV(41030);
        const Xe = [0, -1, 0],
          Me = [0, 1, 0],
          ze = [-1, 0, 0],
          Ge = [1, 0, 0],
          We = [0, 0, -1],
          Re = [0, 0, 1];

        function ge(VV, eV) {
          const {
            QU: xV,
            rU: JV,
            shallowClusterY: YV,
            deepClusterY: UV
          } = VV;
          if (void 0 === JV || void 0 === YV || void 0 === UV) return xV;
          return xV + (JV - xV) * Math.max(0, Math.min(1, (YV - eV) / (YV - UV)))
        }

        function De(VV, eV, xV) {
          const JV = [];
          return xV.UU && JV.push({
            offset: Xe,
            vp: VV[eV].id
          }), xV.yU && JV.push({
            offset: ze,
            vp: VV[`${eV}|meta|rot2|side`].id
          }, {
            offset: Ge,
            vp: VV[`${eV}|meta|rot4|side`].id
          }, {
            offset: We,
            vp: VV[`${eV}|meta|rot1|side`].id
          }, {
            offset: Re,
            vp: VV[`${eV}|meta|rot3|side`].id
          }), xV.pU && JV.push({
            offset: Me,
            vp: VV[`${eV}|meta|rot1|top`].id
          }), JV
        }

        function ie(VV, eV) {
          return null === eV ? function(VV) {
            return [{
              seedPrefix: "crystal",
              anchorOptions: De(VV, "Crystal", {
                UU: !0,
                yU: !0,
                pU: !0
              }),
              clusterBoxSize: 4,
              nU: .8,
              wU: 0,
              QU: .12,
              rU: .25,
              shallowClusterY: -20,
              deepClusterY: -85
            }, {
              seedPrefix: "mushroom",
              anchorOptions: De(VV, "Glowing Mushroom", {
                UU: !0,
                yU: !0,
                pU: !1
              }),
              clusterBoxSize: 4,
              nU: .7,
              wU: 2,
              QU: .58
            }]
          }(VV) : eV.map((eV => function(VV, eV) {
            const xV = eV.ZU;
            return {
              seedPrefix: eV.blockName,
              anchorOptions: De(VV, eV.blockName, {
                UU: eV.UU,
                yU: eV.yU,
                pU: eV.pU
              }),
              clusterBoxSize: 4,
              nU: eV.nU,
              wU: eV.wU,
              QU: eV.QU,
              rU: null === xV || void 0 === xV ? void 0 : xV.rU,
              shallowClusterY: null === xV || void 0 === xV ? void 0 : xV.kU,
              deepClusterY: null === xV || void 0 === xV ? void 0 : xV.bU
            }
          }(VV, eV)))
        }
        class Ce {
          constructor(VV) {
            this.caveHeightmapVals = VV
          }
          generate(VV, eV) {
            return zV(VV, eV, this.caveHeightmapVals, !1)
          }
        }
        class ae {
          constructor(VV, eV, xV, JV) {
            this.caveHeightmapVals = VV, this.heightmapVals = eV, this.surfaceMargin = xV, this.minCaveHeight = JV
          }
          generate(VV, eV) {
            const xV = zV(VV, eV, this.caveHeightmapVals, !0);
            if (0 === xV.length) return xV;
            const JV = this.heightmapVals.getOrGenerate(VV, eV, UV.g.GroundHeight) - this.surfaceMargin,
              {
                minCaveHeight: YV
              } = this,
              yV = [];
            for (const UV of xV) {
              const VV = Math.min(UV.ceilingY, JV);
              VV - UV.floorY + 1 < YV || yV.push(VV === UV.ceilingY ? UV : {
                floorY: UV.floorY,
                ceilingY: VV
              })
            }
            return yV
          }
        }
        class oe {
          constructor(VV, eV, xV, YV) {
            this.heightmapVals = VV, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new JV.o(new Ce(eV)), this.decoratableCavesCache = new JV.o(new ae(eV, VV, xV, YV))
          }
          getAllCaves(VV, eV) {
            return this.allCavesCache.getOrGenerate(VV, eV)
          }
          getGroundHeight(VV, eV) {
            return this.heightmapVals.getOrGenerate(VV, eV, UV.g.GroundHeight)
          }
          getDecoratableCaves(VV, eV) {
            return this.decoratableCavesCache.getOrGenerate(VV, eV)
          }
        }

        function ce(VV, eV, xV, JV) {
          if (eV > JV.getGroundHeight(VV, xV)) return !1;
          const YV = JV.getAllCaves(VV, xV);
          for (const UV of YV)
            if (eV >= UV.floorY && eV <= UV.ceilingY) return !1;
          return !0
        }

        function he(VV, eV, xV, JV, YV, UV) {
          let yV = null;
          const pV = [];
          for (const QV of JV) {
            ce(VV + QV.offset[0], eV + QV.offset[1], xV + QV.offset[2], UV) && (QV.offset === Xe ? yV = QV : pV.push(QV))
          }
          return null !== yV ? yV : 0 === pV.length ? null : pV[Math.floor(YV * pV.length)]
        }
        class le {
          constructor(VV, eV, xV) {
            let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.PZ = eV, this.seed = xV, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
            const UV = ie(VV, JV);
            let yV = 0,
              pV = 0;
            for (const YV of UV) {
              var QV;
              if (!Number.isInteger(YV.clusterBoxSize) || YV.clusterBoxSize < 2 || YV.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${YV.seedPrefix}" has invalid clusterBoxSize (${YV.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
              const VV = YV.clusterBoxSize >> 1;
              VV > yV && (yV = VV), pV += Math.max(YV.QU, null !== (QV = YV.rU) && void 0 !== QV ? QV : YV.QU)
            }
            if (pV > 1) throw new Error(`Cave decoration cluster chances sum to ${pV} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
            this.pointsGen = new YV.b("caveDeco", 10, !1, !0, xV, 4, eV, null, !0), this.pointsGen.assertReachableFromChunkCentre(eV, yV), this.configs = UV, this.maxHalfBox = yV
          }
          getDecorationsForChunkColumn(VV, eV, xV, JV) {
            const YV = [],
              UV = this.PZ,
              yV = VV + UV,
              pV = eV + UV,
              QV = new oe(xV, JV, 4, 3),
              nV = VV + (UV >> 1),
              wV = eV + (UV >> 1),
              ZV = this.pointsGen.getPointsAroundPoint(nV, wV),
              vV = this.maxHalfBox;
            for (const rV of ZV) {
              const xV = rV[0],
                JV = rV[1];
              xV + vV <= VV || xV - vV >= yV || JV + vV <= eV || JV - vV >= pV || this.collectClusterPlacements(xV, JV, VV, yV, eV, pV, QV, YV)
            }
            return YV
          }
          static addCaveDecorationsToChunk(VV, eV, xV, JV, YV, UV) {
            const yV = xV + YV;
            for (const pV of UV) pV.y >= xV && pV.y < yV && VV.set(pV.x - eV, pV.y - xV, pV.z - JV, pV.vp)
          }
          collectClusterPlacements(VV, eV, xV, JV, YV, UV, yV, pV) {
            const QV = yV.getDecoratableCaves(VV, eV);
            if (0 === QV.length) return;
            const nV = new vV.l(`${this.seed}|${VV}|${eV}|cluster`),
              wV = nV.next(),
              ZV = nV.next(),
              rV = nV.next(),
              kV = QV[Math.floor(wV * QV.length)],
              bV = kV.floorY + Math.floor(ZV * (kV.ceilingY - kV.floorY + 1));
            let EV = 0,
              BV = null;
            for (const vV of this.configs)
              if (EV += ge(vV, bV), rV < EV) {
                BV = vV;
                break
              } if (null === BV) return;
            const jV = [];
            if (this.scatterClusterCells(VV, bV, eV, BV, yV, nV, jV), !(jV.length < BV.wU))
              for (const vV of jV) vV.x >= xV && vV.x < JV && vV.z >= YV && vV.z < UV && pV.push(vV)
          }
          scatterClusterCells(VV, eV, xV, JV, YV, UV, yV) {
            const {
              clusterBoxSize: pV,
              nU: QV,
              anchorOptions: nV
            } = JV, wV = pV >> 1, ZV = VV - wV, vV = eV - wV, rV = xV - wV;
            for (let kV = 0; kV < wV; kV++)
              for (let VV = 0; VV < wV; VV++)
                for (let eV = 0; eV < wV; eV++) {
                  const xV = UV.next(),
                    JV = UV.next(),
                    pV = UV.next();
                  if (xV >= QV) continue;
                  const wV = Math.floor(8 * JV),
                    bV = ZV + 2 * kV + (1 & wV),
                    EV = vV + 2 * VV + (wV >> 1 & 1),
                    BV = rV + 2 * eV + (wV >> 2 & 1);
                  if (!Le(bV, EV, BV, YV)) continue;
                  const jV = he(bV, EV, BV, nV, pV, YV);
                  null !== jV && yV.push({
                    x: bV,
                    y: EV,
                    z: BV,
                    vp: jV.vp
                  })
                }
          }
        }

        function Le(VV, eV, xV, JV) {
          const YV = JV.getDecoratableCaves(VV, xV);
          for (const UV of YV)
            if (eV >= UV.floorY && eV <= UV.ceilingY) return !0;
          return !1
        }
        class fe {
          constructor(VV, eV, xV, JV, UV, yV, pV) {
            this.prefabGenerator = JV, this.seed = void 0, this.PZ = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = pV, this.PZ = VV, this.biomeSelector = eV, this.treeGenerator = xV, this.blockMetadata = UV, this.oreGenerator = yV, this.bedrockId = UV.Bedrock.id, this.waterId = UV.Water.id, this.sandId = UV.Sand.id, this.clayId = UV.Clay.id, this.chalkId = UV.Chalk.id, this.grassBlockId = UV["Grass Block"].id, this.dirtId = UV.Dirt.id, this.riverbedFeatureGenerator = new YV.b("clay", 50, !1, !0, pV, 4, VV, null, !0)
          }
          fillChunk(VV, eV, xV, YV, pV, nV, wV, rV, kV, bV, EV, BV, jV) {
            if (xV + this.PZ <= yV.q.bedrockLevel) return {
              specialBlocks: []
            };
            const qV = new ZV.c,
              tV = jV.minTerrainHeight,
              FV = jV.maxTerrainHeight,
              TV = jV.hasWater;
            if (FV >= xV && tV < xV + this.PZ)
              for (let JV = eV; JV < eV + this.PZ; JV++)
                for (let QV = YV; QV < YV + this.PZ; QV++) {
                  const nV = bV.biomeIds.get(JV, QV),
                    wV = this.biomeSelector.getBiomeFromId(nV),
                    ZV = pV.get(JV, QV, UV.g.GroundHeight);
                  if (ZV >= xV && ZV < xV + this.PZ) {
                    const nV = pV.get(JV, QV, UV.g.IsLake) === yV.i ? wV.getDryBedBlock(JV, ZV, QV) : wV.getTopsoilBlock(JV, ZV, QV);
                    VV.set(JV - eV, ZV - xV, QV - YV, nV)
                  }
                }
            if (FV + 1 >= xV && tV - 4 < xV + this.PZ)
              for (let JV = eV; JV < eV + this.PZ; JV++)
                for (let yV = YV; yV < YV + this.PZ; yV++) {
                  const QV = bV.biomeIds.get(JV, yV),
                    nV = this.biomeSelector.getBiomeFromId(QV),
                    wV = pV.get(JV, yV, UV.g.GroundHeight),
                    ZV = Math.min(wV, xV + this.PZ);
                  for (let UV = Math.max(wV - 4, xV); UV < ZV; UV++) VV.set(JV - eV, UV - xV, yV - YV, nV.getLowsoilBlockType(JV, UV, yV, wV))
                }
            const PV = jV.banks;
            for (let JV = 0; JV < PV.length; JV += 3) {
              const eV = PV[JV],
                YV = PV[JV + 1] - xV,
                UV = PV[JV + 2];
              for (let xV = Math.max(YV - 4, 0); xV < Math.min(YV, this.PZ); xV++) VV.set(eV, xV, UV, this.dirtId);
              YV >= 0 && YV < this.PZ && VV.set(eV, YV, UV, this.grassBlockId)
            }
            if (FV - 4 >= xV) {
              const JV = this.biomeSelector.anyStrata;
              for (let yV = eV; yV < eV + this.PZ; yV++)
                for (let QV = YV; QV < YV + this.PZ; QV++) {
                  const nV = bV.stoneTypeIds.get(yV, QV),
                    wV = pV.get(yV, QV, UV.g.GroundHeight),
                    ZV = Math.min(wV - 4, xV + this.PZ),
                    vV = JV ? this.biomeSelector.getBiomeFromId(bV.biomeIds.get(yV, QV)) : null,
                    rV = null !== vV && vV.strataDepth > 0 ? wV - 4 - vV.strataDepth : ZV;
                  for (let JV = xV; JV < ZV; JV++) {
                    const UV = JV >= rV ? vV.getStrataBlock(yV, JV, QV, wV) : 0;
                    VV.set(yV - eV, JV - xV, QV - YV, 0 !== UV ? UV : nV)
                  }
                }
            }
            if (FV - 4 >= xV && this.oreGenerator.addOresToChunk(VV, eV, xV, YV, 4, pV, kV), FV >= xV && (QV.e.addCavesToChunk(VV, eV, xV, YV, pV, rV), le.addCaveDecorationsToChunk(VV, eV, xV, YV, this.PZ, BV)), yV.q.bedrockLevel >= xV && yV.q.bedrockLevel < xV + this.PZ)
              for (let JV = eV; JV < eV + this.PZ; JV++)
                for (let UV = YV; UV < YV + this.PZ; UV++) VV.set(JV - eV, yV.q.bedrockLevel - xV, UV - YV, this.bedrockId);
            this.addSurfaceBlocks(VV, xV, jV.flora);
            for (const JV of wV)
              for (let UV = eV; UV < eV + this.PZ; UV++)
                for (let yV = xV; yV < xV + this.PZ; yV++)
                  for (let pV = YV; pV < YV + this.PZ; pV++) {
                    const QV = this.prefabGenerator.getBlockFromPrefabAtPoint(UV, yV, pV, JV, qV);
                    0 !== QV && VV.set(UV - eV, yV - xV, pV - YV, QV === DV.GUARANTEED_AIR ? 0 : QV)
                  }
            FV + this.treeGenerator.maxTreeHeight >= xV && this.treeGenerator.addTreesToChunk(VV, eV, xV, YV, nV);
            const AV = jV.water;
            for (let JV = 0; JV < AV.length; JV += 5) {
              const eV = AV[JV],
                YV = AV[JV + 1],
                UV = AV[JV + 2] - xV,
                yV = AV[JV + 3] - xV;
              for (let xV = Math.max(UV, 0); xV < Math.min(yV, this.PZ); xV++) VV.set(eV, xV, YV, this.waterId);
              yV >= 0 && yV < this.PZ && VV.set(eV, yV, YV, AV[JV + 4])
            }
            let NV, MV, zV;
            if (this.addSurfaceBlocks(VV, xV, jV.lilyPads), TV && FV >= xV && tV < xV + this.PZ)
              for (let QV = eV; QV < eV + this.PZ; QV++)
                for (let nV = YV; nV < YV + this.PZ; nV++) {
                  const wV = pV.get(QV, nV, UV.g.WaterHeight),
                    ZV = pV.get(QV, nV, UV.g.GroundHeight);
                  if (wV !== yV.n && ZV >= xV && ZV < xV + this.PZ)
                    if (wV === ZV) VV.set(QV - eV, ZV - xV, nV - YV, this.sandId);
                    else {
                      const UV = this.riverbedFeatureGenerator.getClosestPoint(QV, nV);
                      if ((0, JV.J)(UV, QV, nV) < 100) NV === UV[0] && MV === UV[1] || (NV = UV[0], MV = UV[1], zV = new vV.l(`${this.seed}${NV}${MV}`).next() < .3 ? this.chalkId : this.clayId), VV.set(QV - eV, ZV - xV, nV - YV, zV), ZV - 1 >= xV && VV.set(QV - eV, ZV - 1 - xV, nV - YV, zV), ZV - 2 >= xV && VV.set(QV - eV, ZV - 2 - xV, nV - YV, zV);
                      else {
                        const JV = bV.biomeIds.get(QV, nV),
                          UV = this.biomeSelector.getBiomeFromId(JV);
                        VV.set(QV - eV, ZV - xV, nV - YV, UV.getLowsoilBlockType(QV, ZV, nV, ZV))
                      }
                    }
                }
            for (const JV of EV)
              for (let UV = eV; UV < eV + this.PZ; UV++)
                for (let yV = xV; yV < xV + this.PZ; yV++)
                  for (let pV = YV; pV < YV + this.PZ; pV++) {
                    const QV = XV.d.getBlockFromFixedPointPrefab(UV, yV, pV, JV);
                    0 !== QV && VV.set(UV - eV, yV - xV, pV - YV, QV)
                  }
            const GV = [];
            for (const JV of qV) {
              const UV = JV.val;
              if (VV.get(JV.x - eV, JV.y - xV, JV.z - YV) !== UV.getBlockId()) continue;
              const yV = UV.generate(),
                pV = [JV.x, JV.y, JV.z];
              GV.push({
                pos: pV,
                ...yV
              })
            }
            return {
              specialBlocks: GV
            }
          }
          addSurfaceBlocks(VV, eV, xV) {
            for (let JV = 0; JV < xV.length; JV += 4) {
              const YV = xV[JV + 1] - eV;
              YV >= 0 && YV < this.PZ && VV.set(xV[JV], YV, xV[JV + 2], xV[JV + 3])
            }
          }
        }
        class me {
          constructor() {
            this.blocks = [], this.startY = 0
          }
          set(VV, eV, xV, JV) {
            return this.blocks.push(VV, this.startY + eV, xV, JV), JV
          }
        }
        class Ke {
          constructor(VV, eV, xV, JV) {
            this.PZ = VV, this.biomeSelector = eV, this.seed = xV, this.random = new vV.l(""), this.lilyPadId = void 0, this.lilyPadId = JV["Lily Pad"].id
          }
          getInfoForChunkColumn(VV, eV, xV, JV, YV, pV) {
            const nV = [],
              wV = [],
              ZV = [],
              vV = new me;
            let rV = 1 / 0,
              kV = -1 / 0,
              bV = !1;
            for (let EV = VV; EV < VV + this.PZ; EV++)
              for (let BV = eV; BV < eV + this.PZ; BV++) {
                const jV = this.biomeSelector.getBiomeFromId(YV.biomeIds.get(EV, BV)),
                  qV = xV.getOrGenerate(EV, BV, UV.g.GroundHeight),
                  tV = xV.getOrGenerate(EV, BV, UV.g.WaterHeight);
                rV = Math.min(rV, qV), kV = Math.max(kV, qV);
                const FV = EV - VV,
                  TV = BV - eV;
                if (tV !== yV.n) {
                  bV = !0, qV < tV && nV.push(FV, TV, qV + 1, tV, jV.topwaterBlockType), jV.hasScatteredLakes && 1 === xV.getOrGenerate(EV, BV, UV.g.IsLake) && (this.random.reseed(`${EV}|${BV}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(EV, BV, xV) && ZV.push(FV, tV + 1, TV, this.lilyPadId));
                  continue
                }
                let PV = jV.floraGenerator;
                if (jV.hasScatteredLakes && this.isBesideLake(EV, BV, xV) && (this.random.reseed(`${EV}|${BV}|${this.seed}oasisShore`), this.random.next() < .85 && (wV.push(FV, qV, TV), PV = this.biomeSelector.baseBiome.floraGenerator)), !QV.e.isInCave(EV, qV, BV, JV) && !XV.d.isWithinFixedPointPrefab(EV, BV, pV))
                  for (let xV = qV + 1; xV <= qV + jV.maxFloraHeight; xV += this.PZ) vV.startY = xV, PV.addBiomeFloraToColumn(vV, VV, eV, EV, xV, BV, qV)
              }
            return {
              minTerrainHeight: rV,
              maxTerrainHeight: kV,
              hasWater: bV,
              water: new Int32Array(nV),
              banks: new Int32Array(wV),
              flora: new Int32Array(vV.blocks),
              lilyPads: new Int32Array(ZV)
            }
          }
          isInsideWater(VV, eV, xV) {
            return xV.getOrGenerate(VV + 1, eV, UV.g.WaterHeight) !== yV.n && xV.getOrGenerate(VV - 1, eV, UV.g.WaterHeight) !== yV.n && xV.getOrGenerate(VV, eV + 1, UV.g.WaterHeight) !== yV.n && xV.getOrGenerate(VV, eV - 1, UV.g.WaterHeight) !== yV.n
          }
          isBesideLake(VV, eV, xV) {
            return this.isLakeWater(VV + 1, eV, xV) || this.isLakeWater(VV - 1, eV, xV) || this.isLakeWater(VV, eV + 1, xV) || this.isLakeWater(VV, eV - 1, xV)
          }
          isLakeWater(VV, eV, xV) {
            return xV.getOrGenerate(VV, eV, UV.g.WaterHeight) !== yV.n && 1 === xV.getOrGenerate(VV, eV, UV.g.IsLake)
          }
        }
        var He = xV(40940);
        let ue = null;
        class se {
          constructor(VV, eV, xV, YV, yV, pV, nV, wV, ZV) {
            var vV, rV, kV, bV, EV, BV, jV;
            if (this.PZ = VV, this.hashChunkContents = ZV, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !ue) {
              const VV = yV ? 1750 : 125;
              ue = new be.e("chunk columns", VV, 4e4)
            }
            this.chunkColumnInfos = ue.partition(), this.caveGenerator = new QV.e(YV, VV, eV, null !== (vV = null === nV || void 0 === nV ? void 0 : nV.VU.xU) && void 0 !== vV ? vV : "Lava");
            const qV = new Ae(eV, YV, VV, null !== (rV = null === nV || void 0 === nV ? void 0 : nV.TU) && void 0 !== rV ? rV : [...Pe, ...null !== (kV = null === wV || void 0 === wV ? void 0 : wV.WU) && void 0 !== kV ? kV : []]),
              tV = {
                PZ: VV,
                blockMetadata: eV,
                worldGenerator: this,
                seed: YV,
                biomeOpts: {
                  oreGenerator: qV
                }
              },
              FV = null !== (bV = null === nV || void 0 === nV ? void 0 : nV.EU) && void 0 !== bV ? bV : null,
              TV = null !== (EV = null === wV || void 0 === wV ? void 0 : wV.buildBiomes) && void 0 !== EV ? EV : null,
              PV = null !== FV ? (0, Ne.g)(FV, tV) : null !== TV ? this.buildTerrainBiomes(TV, tV) : (0, Ne.j)(tV);
            this.biomeSelector = new Ne.d(this, qV, YV, VV, eV, PV), this.treeGenerator = new re(this, this.biomeSelector, VV, YV, eV), this.fixedPointPrefabTracker = new XV.d(pV, VV), this.prefabGenerator = new Ye({
              seed: YV,
              PZ: VV,
              blockMetadata: eV,
              itemMetadata: xV,
              typeSettings: {
                [UV.n.SURFACE]: {
                  densitySettings: {
                    [UV.m.MEDIUM]: {
                      minDistanceBetweenPrefabs: 100
                    },
                    [UV.m.HIGH]: {
                      minDistanceBetweenPrefabs: 50
                    },
                    [UV.m.VERY_HIGH]: {
                      minDistanceBetweenPrefabs: 25
                    }
                  }
                },
                [UV.n.UNDERGROUND]: {
                  densitySettings: {
                    [UV.m.MEDIUM]: {
                      minDistanceBetweenPrefabs: 80
                    },
                    [UV.m.HIGH]: null,
                    [UV.m.VERY_HIGH]: null
                  }
                }
              },
              prefabSize: this.prefabSize
            }), this.noWaterHeightmapGenerator = new He.h((0, He.l)(YV)), this.heightmapPerturb = new JV.h([{
              amplitude: 1,
              frequency: 1 / 14
            }, {
              amplitude: 5,
              frequency: 1 / 65
            }, {
              amplitude: 20,
              frequency: .004
            }], `${YV}HeightmapPerturb`);
            let AV = 0;
            for (const {
                amplitude: JV
              }
              of this.heightmapPerturb.customOctaves) AV += JV;
            this.waterBodyGenerator = new te(this.biomeSelector, this.noWaterHeightmapGenerator, YV, VV, AV, this.needOutsideWaterDist, yV, null === (BV = null === nV || void 0 === nV ? void 0 : nV.OY) || void 0 === BV || BV), this.caveDecorationGenerator = new le(eV, VV, YV, null !== (jV = null === nV || void 0 === nV ? void 0 : nV.VU.JU) && void 0 !== jV ? jV : null), this.surfaceGenerator = new Ke(VV, this.biomeSelector, YV, eV), this.chunkFiller = new fe(VV, this.biomeSelector, this.treeGenerator, this.prefabGenerator, eV, qV, YV)
          }
          getChunk(VV, eV, xV, JV) {
            try {
              const {
                specialBlocks: YV
              } = this.getChunkInternal(VV, eV, xV, JV);
              return {
                hash: this.hashChunkContents(VV.data, JSON.stringify(YV)),
                specialBlocks: YV
              }
            } catch (YV) {
              return console.log(YV.stack), void console.error(YV.stack)
            }
          }
          getDistToLakeEdge(VV, eV, xV) {
            return this.waterBodyGenerator.getDistToScatteredLakeEdge(VV, eV, xV)
          }
          getOresForChunkColumn(VV, eV) {
            const xV = this.PZ,
              JV = Math.floor(VV / xV) * xV,
              YV = Math.floor(eV / xV) * xV,
              UV = Math.floor(xV / 2);
            return this.getClosestBiomesForChunk(JV, YV).getOrGenerate(JV + UV, YV + UV)[0].biome.oreGenerator.getOreBlocksForChunk(JV, YV)
          }
          buildTerrainBiomes(VV, eV) {
            const xV = VV({
              ...eV,
              biomeAt: (VV, eV) => this.biomeSelector.getBiome(VV, eV).biome
            });
            if (0 === xV.length) throw new Error("A world-gen terrain must build at least one biome");
            const JV = new Map;
            for (const {
                biome: UV
              }
              of xV) {
              var YV;
              if ((null !== (YV = JV.get(UV.key)) && void 0 !== YV ? YV : UV) !== UV) throw new Error(`A world-gen terrain built two biomes keyed "${UV.key}"`);
              JV.set(UV.key, UV)
            }
            return [...xV]
          }
          getPrefabLootChests(VV, eV, xV, JV, YV) {
            const UV = new Map;
            for (const QV of this.prefabGenerator.getLootPrefabCentres(VV, eV, xV, JV, this.biomeSelector)) {
              var yV;
              if (void 0 !== YV && QV.prefab.name !== YV) continue;
              const VV = `${Math.floor(QV.x/this.PZ)}|${Math.floor(QV.z/this.PZ)}`,
                eV = null !== (yV = UV.get(VV)) && void 0 !== yV ? yV : [];
              eV.push(QV), UV.set(VV, eV)
            }
            const pV = [];
            for (const QV of UV.values()) {
              const VV = Math.floor(QV[0].x / this.PZ) * this.PZ,
                eV = Math.floor(QV[0].z / this.PZ) * this.PZ,
                xV = this.getClosestBiomesForChunk(VV, eV),
                {
                  nearestFixedPrefabInfoForChunk: JV
                } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(VV, eV),
                YV = this.getHeightMapVals(VV, eV, xV, JV),
                UV = this.caveGenerator.getCaveHeightmapVals(VV, eV, YV),
                yV = this.prefabGenerator.getPrefabsForChunk(VV, eV, YV, xV, UV, JV, this.biomeSelector);
              for (const nV of yV) {
                if (!QV.some((VV => VV.x === nV.centreX && VV.z === nV.centreZ && VV.prefab === nV.prefab))) continue;
                const VV = null !== nV.prefab.undergroundYInterval;
                for (const {
                    x: eV,
                    y: xV,
                    z: JV
                  }
                  of nV.chestLocationToQuality.entries()) pV.push({
                  x: eV,
                  y: xV,
                  z: JV,
                  underground: VV,
                  KY: nV.prefab.name
                })
              }
            }
            return pV
          }
          getChunkInternal(VV, eV, xV, JV) {
            const {
              biomeInfos: YV,
              heightmapVals: UV,
              caveHeightmapVals: yV,
              treesForChunk: pV,
              chunkPrefabs: QV,
              chunkOres: nV,
              decodedFixedPointPrefabsForChunk: wV,
              caveDecorations: ZV,
              surface: vV
            } = this.getInfoForChunkColumn(eV, JV);
            return this.chunkFiller.fillChunk(VV, eV, xV, JV, UV, pV, QV, yV, nV, YV, wV, ZV, vV)
          }
          getInfoForChunkColumn(VV, eV) {
            if (this.mostRecentlyAccessedChunkColumn && this.mostRecentlyAccessedChunkColumnPos[0] === VV && this.mostRecentlyAccessedChunkColumnPos[1] === eV) return this.mostRecentlyAccessedChunkColumn;
            const xV = this.chunkColumnInfos.get(VV, eV);
            if (xV) return this.mostRecentlyAccessedChunkColumnPos[0] = VV, this.mostRecentlyAccessedChunkColumnPos[1] = eV, this.mostRecentlyAccessedChunkColumn = xV, xV;
            const JV = this.getClosestBiomesForChunk(VV, eV),
              {
                nearestFixedPrefabInfoForChunk: YV,
                decodedFixedPointPrefabsForChunk: UV
              } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(VV, eV),
              yV = this.getHeightMapVals(VV, eV, JV, YV),
              pV = this.caveGenerator.getCaveHeightmapVals(VV, eV, yV),
              QV = this.prefabGenerator.getPrefabsForChunk(VV, eV, yV, JV, pV, YV, this.biomeSelector),
              nV = this.treeGenerator.getTreesForChunk(VV, eV, yV, JV, pV, QV, YV),
              wV = JV.getOrGenerate(VV + Math.floor(this.PZ / 2), eV + Math.floor(this.PZ / 2))[0].biome.oreGenerator.getOreBlocksForChunk(VV, eV),
              ZV = this.caveDecorationGenerator.getDecorationsForChunkColumn(VV, eV, yV, pV),
              vV = this.biomeSelector.getBiomeInfoForChunkFill(VV, eV, JV),
              rV = this.surfaceGenerator.getInfoForChunkColumn(VV, eV, yV, pV, vV, YV),
              kV = {
                biomeInfos: vV,
                heightmapVals: yV.viewJustInnerChunk(),
                caveHeightmapVals: pV.viewJustInnerChunk(),
                treesForChunk: nV,
                chunkPrefabs: QV,
                chunkOres: wV,
                decodedFixedPointPrefabsForChunk: UV,
                caveDecorations: ZV,
                surface: rV
              };
            return this.mostRecentlyAccessedChunkColumnPos[0] = VV, this.mostRecentlyAccessedChunkColumnPos[1] = eV, this.mostRecentlyAccessedChunkColumn = kV, this.chunkColumnInfos.set(VV, eV, kV), kV
          }
          getClosestBiomesForChunk(VV, eV) {
            return JV.t.create(this.PZ, [VV, eV], this.biomeSelector)
          }
          getHeightMapVals(VV, eV, xV, YV) {
            const yV = new He.e(xV, YV, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
            return JV.p.create(this.PZ, [VV, eV], UV.g.NumFields, yV)
          }
        }
      },
      40946: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => cV,
          g: () => NV,
          h: () => PV,
          k: () => AV,
          o: () => WV,
          p: () => iV,
          t: () => GV,
          v: () => tV,
          w: () => qV,
          x: () => TV,
          B: () => bV,
          E: () => FV,
          I: () => jV,
          J: () => BV
        });
        var JV = xV(3168),
          YV = xV.n(JV);
        const UV = .5 * (Math.sqrt(3) - 1),
          yV = (3 - Math.sqrt(3)) / 6,
          pV = 1 / 3,
          QV = 1 / 6,
          nV = (Math.sqrt(5) - 1) / 4,
          wV = (5 - Math.sqrt(5)) / 20,
          ZV = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
          vV = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
        const rV = class {
          constructor() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
            const eV = "function" == typeof VV ? VV : function(VV) {
              let eV = 0,
                xV = 0,
                JV = 0,
                YV = 1;
              const UV = function() {
                let VV = 4022871197;
                return function(eV) {
                  eV = eV.toString();
                  for (let xV = 0; xV < eV.length; xV++) {
                    VV += eV.charCodeAt(xV);
                    let JV = .02519603282416938 * VV;
                    VV = JV >>> 0, JV -= VV, JV *= VV, VV = JV >>> 0, JV -= VV, VV += 4294967296 * JV
                  }
                  return 2.3283064365386963e-10 * (VV >>> 0)
                }
              }();
              eV = UV(" "), xV = UV(" "), JV = UV(" "), eV -= UV(VV), eV < 0 && (eV += 1);
              xV -= UV(VV), xV < 0 && (xV += 1);
              JV -= UV(VV), JV < 0 && (JV += 1);
              return function() {
                const VV = 2091639 * eV + 2.3283064365386963e-10 * YV;
                return eV = xV, xV = JV, JV = VV - (YV = 0 | VV)
              }
            }(VV);
            this.p = function(VV) {
              const eV = new Uint8Array(256);
              for (let xV = 0; xV < 256; xV++) eV[xV] = xV;
              for (let xV = 0; xV < 255; xV++) {
                const JV = xV + ~~(VV() * (256 - xV)),
                  YV = eV[xV];
                eV[xV] = eV[JV], eV[JV] = YV
              }
              return eV
            }(eV), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (let xV = 0; xV < 512; xV++) this.perm[xV] = this.p[255 & xV], this.permMod12[xV] = this.perm[xV] % 12
          }
          noise2D(VV, eV) {
            const xV = this.permMod12,
              JV = this.perm;
            let YV = 0,
              pV = 0,
              QV = 0;
            const nV = (VV + eV) * UV,
              wV = Math.floor(VV + nV),
              vV = Math.floor(eV + nV),
              rV = (wV + vV) * yV,
              kV = VV - (wV - rV),
              bV = eV - (vV - rV);
            let EV, BV;
            kV > bV ? (EV = 1, BV = 0) : (EV = 0, BV = 1);
            const jV = kV - EV + yV,
              qV = bV - BV + yV,
              tV = kV - 1 + 2 * yV,
              FV = bV - 1 + 2 * yV,
              TV = 255 & wV,
              PV = 255 & vV;
            let AV = .5 - kV * kV - bV * bV;
            if (AV >= 0) {
              const VV = 3 * xV[TV + JV[PV]];
              AV *= AV, YV = AV * AV * (ZV[VV] * kV + ZV[VV + 1] * bV)
            }
            let NV = .5 - jV * jV - qV * qV;
            if (NV >= 0) {
              const VV = 3 * xV[TV + EV + JV[PV + BV]];
              NV *= NV, pV = NV * NV * (ZV[VV] * jV + ZV[VV + 1] * qV)
            }
            let XV = .5 - tV * tV - FV * FV;
            if (XV >= 0) {
              const VV = 3 * xV[TV + 1 + JV[PV + 1]];
              XV *= XV, QV = XV * XV * (ZV[VV] * tV + ZV[VV + 1] * FV)
            }
            return 70 * (YV + pV + QV)
          }
          noise3D(VV, eV, xV) {
            const JV = this.permMod12,
              YV = this.perm;
            let UV, yV, nV, wV;
            const vV = (VV + eV + xV) * pV,
              rV = Math.floor(VV + vV),
              kV = Math.floor(eV + vV),
              bV = Math.floor(xV + vV),
              EV = (rV + kV + bV) * QV,
              BV = VV - (rV - EV),
              jV = eV - (kV - EV),
              qV = xV - (bV - EV);
            let tV, FV, TV, PV, AV, NV;
            BV >= jV ? jV >= qV ? (tV = 1, FV = 0, TV = 0, PV = 1, AV = 1, NV = 0) : BV >= qV ? (tV = 1, FV = 0, TV = 0, PV = 1, AV = 0, NV = 1) : (tV = 0, FV = 0, TV = 1, PV = 1, AV = 0, NV = 1) : jV < qV ? (tV = 0, FV = 0, TV = 1, PV = 0, AV = 1, NV = 1) : BV < qV ? (tV = 0, FV = 1, TV = 0, PV = 0, AV = 1, NV = 1) : (tV = 0, FV = 1, TV = 0, PV = 1, AV = 1, NV = 0);
            const XV = BV - tV + QV,
              MV = jV - FV + QV,
              zV = qV - TV + QV,
              GV = BV - PV + 2 * QV,
              WV = jV - AV + 2 * QV,
              RV = qV - NV + 2 * QV,
              gV = BV - 1 + .5,
              DV = jV - 1 + .5,
              iV = qV - 1 + .5,
              CV = 255 & rV,
              aV = 255 & kV,
              oV = 255 & bV;
            let cV = .6 - BV * BV - jV * jV - qV * qV;
            if (cV < 0) UV = 0;
            else {
              const VV = 3 * JV[CV + YV[aV + YV[oV]]];
              cV *= cV, UV = cV * cV * (ZV[VV] * BV + ZV[VV + 1] * jV + ZV[VV + 2] * qV)
            }
            let hV = .6 - XV * XV - MV * MV - zV * zV;
            if (hV < 0) yV = 0;
            else {
              const VV = 3 * JV[CV + tV + YV[aV + FV + YV[oV + TV]]];
              hV *= hV, yV = hV * hV * (ZV[VV] * XV + ZV[VV + 1] * MV + ZV[VV + 2] * zV)
            }
            let lV = .6 - GV * GV - WV * WV - RV * RV;
            if (lV < 0) nV = 0;
            else {
              const VV = 3 * JV[CV + PV + YV[aV + AV + YV[oV + NV]]];
              lV *= lV, nV = lV * lV * (ZV[VV] * GV + ZV[VV + 1] * WV + ZV[VV + 2] * RV)
            }
            let LV = .6 - gV * gV - DV * DV - iV * iV;
            if (LV < 0) wV = 0;
            else {
              const VV = 3 * JV[CV + 1 + YV[aV + 1 + YV[oV + 1]]];
              LV *= LV, wV = LV * LV * (ZV[VV] * gV + ZV[VV + 1] * DV + ZV[VV + 2] * iV)
            }
            return 32 * (UV + yV + nV + wV)
          }
          noise4D(VV, eV, xV, JV) {
            const YV = this.perm;
            let UV, yV, pV, QV, ZV;
            const rV = (VV + eV + xV + JV) * nV,
              kV = Math.floor(VV + rV),
              bV = Math.floor(eV + rV),
              EV = Math.floor(xV + rV),
              BV = Math.floor(JV + rV),
              jV = (kV + bV + EV + BV) * wV,
              qV = VV - (kV - jV),
              tV = eV - (bV - jV),
              FV = xV - (EV - jV),
              TV = JV - (BV - jV);
            let PV = 0,
              AV = 0,
              NV = 0,
              XV = 0;
            qV > tV ? PV++ : AV++, qV > FV ? PV++ : NV++, qV > TV ? PV++ : XV++, tV > FV ? AV++ : NV++, tV > TV ? AV++ : XV++, FV > TV ? NV++ : XV++;
            const MV = PV >= 3 ? 1 : 0,
              zV = AV >= 3 ? 1 : 0,
              GV = NV >= 3 ? 1 : 0,
              WV = XV >= 3 ? 1 : 0,
              RV = PV >= 2 ? 1 : 0,
              gV = AV >= 2 ? 1 : 0,
              DV = NV >= 2 ? 1 : 0,
              iV = XV >= 2 ? 1 : 0,
              CV = PV >= 1 ? 1 : 0,
              aV = AV >= 1 ? 1 : 0,
              oV = NV >= 1 ? 1 : 0,
              cV = XV >= 1 ? 1 : 0,
              hV = qV - MV + wV,
              lV = tV - zV + wV,
              LV = FV - GV + wV,
              fV = TV - WV + wV,
              mV = qV - RV + 2 * wV,
              KV = tV - gV + 2 * wV,
              HV = FV - DV + 2 * wV,
              uV = TV - iV + 2 * wV,
              sV = qV - CV + 3 * wV,
              SV = tV - aV + 3 * wV,
              IV = FV - oV + 3 * wV,
              dV = TV - cV + 3 * wV,
              OV = qV - 1 + 4 * wV,
              Ve = tV - 1 + 4 * wV,
              ee = FV - 1 + 4 * wV,
              xe = TV - 1 + 4 * wV,
              Je = 255 & kV,
              Ye = 255 & bV,
              Ue = 255 & EV,
              ye = 255 & BV;
            let pe = .6 - qV * qV - tV * tV - FV * FV - TV * TV;
            if (pe < 0) UV = 0;
            else {
              const VV = YV[Je + YV[Ye + YV[Ue + YV[ye]]]] % 32 * 4;
              pe *= pe, UV = pe * pe * (vV[VV] * qV + vV[VV + 1] * tV + vV[VV + 2] * FV + vV[VV + 3] * TV)
            }
            let Qe = .6 - hV * hV - lV * lV - LV * LV - fV * fV;
            if (Qe < 0) yV = 0;
            else {
              const VV = YV[Je + MV + YV[Ye + zV + YV[Ue + GV + YV[ye + WV]]]] % 32 * 4;
              Qe *= Qe, yV = Qe * Qe * (vV[VV] * hV + vV[VV + 1] * lV + vV[VV + 2] * LV + vV[VV + 3] * fV)
            }
            let ne = .6 - mV * mV - KV * KV - HV * HV - uV * uV;
            if (ne < 0) pV = 0;
            else {
              const VV = YV[Je + RV + YV[Ye + gV + YV[Ue + DV + YV[ye + iV]]]] % 32 * 4;
              ne *= ne, pV = ne * ne * (vV[VV] * mV + vV[VV + 1] * KV + vV[VV + 2] * HV + vV[VV + 3] * uV)
            }
            let we = .6 - sV * sV - SV * SV - IV * IV - dV * dV;
            if (we < 0) QV = 0;
            else {
              const VV = YV[Je + CV + YV[Ye + aV + YV[Ue + oV + YV[ye + cV]]]] % 32 * 4;
              we *= we, QV = we * we * (vV[VV] * sV + vV[VV + 1] * SV + vV[VV + 2] * IV + vV[VV + 3] * dV)
            }
            let Ze = .6 - OV * OV - Ve * Ve - ee * ee - xe * xe;
            if (Ze < 0) ZV = 0;
            else {
              const VV = YV[Je + 1 + YV[Ye + 1 + YV[Ue + 1 + YV[ye + 1]]]] % 32 * 4;
              Ze *= Ze, ZV = Ze * Ze * (vV[VV] * OV + vV[VV + 1] * Ve + vV[VV + 2] * ee + vV[VV + 3] * xe)
            }
            return 27 * (UV + yV + pV + QV + ZV)
          }
        };
        var kV = xV(40955);

        function bV(VV, eV, xV) {
          return Math.abs(VV[0] - eV) + Math.abs(VV[1] - xV)
        }

        function EV(VV, eV) {
          const xV = VV[0] - eV[0],
            JV = VV[1] - eV[1];
          return xV * xV + JV * JV
        }

        function BV(VV, eV, xV) {
          const JV = VV[0] - eV,
            YV = VV[1] - xV;
          return JV * JV + YV * YV
        }

        function jV(VV, eV, xV) {
          const JV = VV[0] - eV,
            YV = VV[1] - xV;
          return Math.sqrt(JV * JV + YV * YV)
        }

        function qV(VV, eV, xV) {
          const JV = EV(eV, xV),
            YV = ((VV[0] - eV[0]) * (xV[0] - eV[0]) + (VV[1] - eV[1]) * (xV[1] - eV[1])) / JV;
          let UV, yV, pV;
          return YV < 0 ? (UV = eV[0], yV = eV[1], pV = 0) : YV > 1 ? (UV = xV[0], yV = xV[1], pV = 1) : (UV = eV[0] + YV * (xV[0] - eV[0]), yV = eV[1] + YV * (xV[1] - eV[1]), pV = YV), {
            Dn: jV(VV, UV, yV),
            fracAlong: pV,
            lineSegmentLength: Math.sqrt(JV)
          }
        }

        function tV(VV, eV, xV) {
          const JV = EV(eV, xV),
            YV = ((VV[0] - eV[0]) * (xV[0] - eV[0]) + (VV[1] - eV[1]) * (xV[1] - eV[1])) / JV;
          return jV(VV, eV[0] + YV * (xV[0] - eV[0]), eV[1] + YV * (xV[1] - eV[1]))
        }

        function FV(VV) {
          if (Math.abs(VV[0]) < 1e-4) VV[0] = 0, VV[1] = 1;
          else {
            const eV = Math.sqrt(VV[0] * VV[0] + VV[1] * VV[1]);
            VV[0] = VV[0] / eV, VV[1] = VV[1] / eV
          }
        }

        function TV(VV) {
          let eV = 0;
          for (const {
              amplitude: xV
            }
            of VV.customOctaves) eV += xV;
          return eV
        }
        class PV {
          constructor(VV, eV) {
            this.customOctaves = void 0, this._simplexes = [], console.assert(void 0 !== eV, "Seed must be defined"), this.customOctaves = VV;
            for (let xV = 0; xV < VV.length; xV++) this._simplexes.push(new rV(`${eV}${xV}`))
          }
          maxMagnitude() {
            let VV = 1;
            for (const {
                amplitude: eV
              }
              of this.customOctaves) VV += Math.abs(eV);
            return VV
          }
          getOctaves(VV, eV) {
            let xV = 0;
            for (let JV = 0; JV < this.customOctaves.length; JV++) {
              const {
                amplitude: YV,
                frequency: UV
              } = this.customOctaves[JV];
              xV += this._simplexes[JV].noise2D(VV * UV, eV * UV) * YV
            }
            return xV
          }
        }
        class AV {
          constructor(VV, eV, xV) {
            this.customOctaves = void 0, this._simplexes = [], this.remainingAmplitudes = void 0, this.threshold = void 0, console.assert(void 0 !== xV, "Seed must be defined"), this.customOctaves = VV, this.threshold = eV;
            for (let YV = 0; YV < VV.length; YV++) this._simplexes.push(new rV(`${xV}${YV}`));
            this.remainingAmplitudes = new Array(VV.length);
            let JV = 0;
            for (let YV = this.remainingAmplitudes.length - 1; YV >= 0; YV--) JV += this.customOctaves[YV].amplitude, this.remainingAmplitudes[YV] = JV
          }
          getOctaves(VV, eV) {
            let xV = 0;
            for (let JV = 0; JV < this.customOctaves.length; JV++) {
              if (xV - this.remainingAmplitudes[JV] > this.threshold.high || xV + this.remainingAmplitudes[JV] < this.threshold.low) return kV.b;
              const {
                amplitude: YV,
                frequency: UV
              } = this.customOctaves[JV];
              xV += this._simplexes[JV].noise2D(VV * UV, eV * UV) * YV
            }
            return xV
          }
        }
        class NV {
          constructor(VV, eV) {
            this.chunkBottomLeft = eV, this.array = void 0;
            const xV = VV;
            this.array = YV()(new Int16Array(xV * xV), [xV, xV])
          }
          set(VV, eV, xV) {
            this.array.set(VV - this.chunkBottomLeft[0], eV - this.chunkBottomLeft[1], xV)
          }
          get(VV, eV) {
            return this.array.get(VV - this.chunkBottomLeft[0], eV - this.chunkBottomLeft[1])
          }
        }
        class XV {
          constructor(VV, eV, xV, JV) {
            this.chunkBottomLeft = eV, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + VV - 1, this.chunkBottomLeft[1] + VV - 1], this.array = YV()(new Int16Array(VV * VV * xV * JV), [VV, VV, xV, JV])
          }
          isInBounds(VV, eV) {
            return VV >= this.chunkBottomLeft[0] && VV <= this.chunkTopRight[0] && eV >= this.chunkBottomLeft[1] && eV <= this.chunkTopRight[1]
          }
          set(VV, eV, xV, JV, YV) {
            this.array.set(VV - this.chunkBottomLeft[0], eV - this.chunkBottomLeft[1], xV, JV, YV)
          }
          get(VV, eV, xV, JV) {
            return this.array.get(VV - this.chunkBottomLeft[0], eV - this.chunkBottomLeft[1], xV, JV)
          }
          fill(VV) {
            for (let eV = 0; eV < this.array.shape[0]; eV++)
              for (let xV = 0; xV < this.array.shape[1]; xV++)
                for (let JV = 0; JV < this.array.shape[2]; JV++)
                  for (let YV = 0; YV < this.array.shape[3]; YV++) this.array.set(eV, xV, JV, YV, VV)
          }
        }
        class MV {
          constructor(VV, eV, xV) {
            this.chunkBottomLeft = eV, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + VV - 1, this.chunkBottomLeft[1] + VV - 1], this.array = YV()(new Int16Array(VV * VV * xV), [VV, VV, xV])
          }
          isInBounds(VV, eV) {
            return VV >= this.chunkBottomLeft[0] && VV <= this.chunkTopRight[0] && eV >= this.chunkBottomLeft[1] && eV <= this.chunkTopRight[1]
          }
          set(VV, eV, xV, JV) {
            this.array.set(VV - this.chunkBottomLeft[0], eV - this.chunkBottomLeft[1], xV, JV)
          }
          get(VV, eV, xV) {
            return this.array.get(VV - this.chunkBottomLeft[0], eV - this.chunkBottomLeft[1], xV)
          }
        }
        class zV {
          constructor(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.chunkBottomLeft = eV, this.needOutsideChunkDist = xV, this.chunkTopRight = void 0, this.array = void 0;
            const JV = VV + 2 * xV,
              UV = new Array(JV * JV);
            this.chunkTopRight = [this.chunkBottomLeft[0] + VV - 1, this.chunkBottomLeft[1] + VV - 1], this.array = YV()(UV, [JV, JV])
          }
          isInBounds(VV, eV) {
            return VV >= this.chunkBottomLeft[0] && VV <= this.chunkTopRight[0] && eV >= this.chunkBottomLeft[1] && eV <= this.chunkTopRight[1]
          }
          set(VV, eV, xV) {
            this.array.set(VV - this.chunkBottomLeft[0] + this.needOutsideChunkDist, eV - this.chunkBottomLeft[1] + this.needOutsideChunkDist, xV)
          }
          get(VV, eV) {
            return this.array.get(VV - this.chunkBottomLeft[0] + this.needOutsideChunkDist, eV - this.chunkBottomLeft[1] + this.needOutsideChunkDist)
          }
        }
        class GV {
          constructor(VV, eV) {
            this.innerContiguousArray = VV, this.generator = eV, this.outerSparseArray = []
          }
          static create(VV, eV, xV) {
            const JV = new zV(VV, eV);
            for (let YV = eV[0]; YV < eV[0] + VV; YV++)
              for (let UV = eV[1]; UV < eV[1] + VV; UV++) {
                const VV = xV.generate(YV, UV);
                JV.set(YV, UV, VV)
              }
            return new GV(JV, xV)
          }
          getOrGenerate(VV, eV) {
            var xV;
            if (this.innerContiguousArray.isInBounds(VV, eV)) return this.innerContiguousArray.get(VV, eV);
            let JV = null === (xV = this.outerSparseArray[VV]) || void 0 === xV ? void 0 : xV[eV];
            return void 0 !== JV || (JV = this.generator.generate(VV, eV), this.outerSparseArray[VV] || (this.outerSparseArray[VV] = []), this.outerSparseArray[VV][eV] = JV), JV
          }
        }
        class WV {
          constructor(VV) {
            this.generator = VV, this.cache = new Map
          }
          getOrGenerate(VV, eV) {
            let xV = this.cache.get(VV);
            if (void 0 !== xV) {
              const VV = xV.get(eV);
              if (void 0 !== VV) return VV
            } else xV = new Map, this.cache.set(VV, xV);
            const JV = this.generator.generate(VV, eV);
            return xV.set(eV, JV), JV
          }
        }
        class RV {
          constructor() {
            this.array = []
          }
          get(VV, eV, xV) {
            var JV, YV;
            return null === (JV = this.array[VV]) || void 0 === JV || null === (YV = JV[eV]) || void 0 === YV ? void 0 : YV[xV]
          }
          set(VV, eV, xV, JV) {
            this.array[VV] || (this.array[VV] = []), this.array[VV][eV] || (this.array[VV][eV] = []), this.array[VV][eV][xV] = JV
          }
        }
        class gV {
          constructor(VV, eV) {
            this.outerSparseArray = VV, this.innerContiguousArray = eV
          }
          get(VV, eV, xV) {
            if (this.innerContiguousArray.isInBounds(VV, eV)) return this.innerContiguousArray.get(VV, eV, xV);
            const JV = this.outerSparseArray.get(VV, eV, xV);
            if (void 0 === JV) throw new Error(`Number not found for x=${VV}, z=${eV}, thirdIndex=${xV}`);
            return JV
          }
        }
        const DV = new class {
          get(VV, eV, xV) {}
        };
        class iV {
          constructor(VV, eV) {
            this.innerContiguousArray = VV, this.generator = eV, this.outerSparseArray = new RV
          }
          static create(VV, eV, xV, JV) {
            const YV = new MV(VV, eV, xV);
            for (let UV = eV[0]; UV < eV[0] + VV; UV++)
              for (let xV = eV[1]; xV < eV[1] + VV; xV++) JV.generateAndSet(UV, xV, YV);
            return new iV(YV, JV)
          }
          getOrGenerate(VV, eV, xV) {
            if (this.innerContiguousArray.isInBounds(VV, eV)) return this.innerContiguousArray.get(VV, eV, xV);
            {
              const JV = this.outerSparseArray.get(VV, eV, xV);
              if (void 0 !== JV) return JV
            }
            return this.generator.generateAndSet(VV, eV, this.outerSparseArray), this.outerSparseArray.get(VV, eV, xV)
          }
          viewJustInnerChunk() {
            return new gV(DV, this.innerContiguousArray)
          }
        }
        class CV {
          constructor() {
            this.array = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
          }
          get(VV, eV, xV, JV) {
            var YV, UV, yV;
            return null === (YV = this.array[VV]) || void 0 === YV || null === (UV = YV[eV]) || void 0 === UV || null === (yV = UV[xV]) || void 0 === yV ? void 0 : yV[JV]
          }
          set(VV, eV, xV, JV, YV) {
            let UV = this.lastColumn;
            VV === this.lastX && eV === this.lastZ || (this.array[VV] || (this.array[VV] = []), UV = this.array[VV][eV] ??= [], this.lastX = VV, this.lastZ = eV, this.lastColumn = UV), UV[xV] || (UV[xV] = []), UV[xV][JV] = YV
          }
        }
        class aV {
          constructor(VV, eV) {
            this.outerSparseArray = VV, this.innerContiguousArray = eV
          }
          get(VV, eV, xV, JV) {
            if (this.innerContiguousArray.isInBounds(VV, eV)) return this.innerContiguousArray.get(VV, eV, xV, JV);
            const YV = this.outerSparseArray.get(VV, eV, xV, JV);
            if (void 0 === YV) throw new Error(`Number not found for x=${VV}, z=${eV}, thirdIndex=${xV}, fourthIndex=${JV}`);
            return YV
          }
        }
        const oV = new class {
          get(VV, eV, xV, JV) {}
        };
        class cV {
          constructor(VV, eV) {
            this.innerContiguousArray = VV, this.generator = eV, this.outerSparseArray = new CV
          }
          static create(VV, eV, xV, JV, YV) {
            const UV = new XV(VV, eV, xV, JV);
            for (let yV = eV[0]; yV < eV[0] + VV; yV++)
              for (let xV = eV[1]; xV < eV[1] + VV; xV++) YV.generateAndSet(yV, xV, UV);
            return new cV(UV, YV)
          }
          getOrGenerate(VV, eV, xV, JV) {
            if (this.innerContiguousArray.isInBounds(VV, eV)) return this.innerContiguousArray.get(VV, eV, xV, JV);
            {
              const YV = this.outerSparseArray.get(VV, eV, xV, JV);
              if (void 0 !== YV) return YV
            }
            return this.generator.generateAndSet(VV, eV, this.outerSparseArray), this.outerSparseArray.get(VV, eV, xV, JV)
          }
          viewJustInnerChunk() {
            return new aV(oV, this.innerContiguousArray)
          }
        }
      },
      40955: (VV, eV, xV) => {
        xV.d(eV, {
          b: () => QV,
          f: () => yV,
          i: () => nV,
          k: () => UV,
          l: () => pV,
          n: () => YV,
          q: () => JV
        });
        const JV = {
            seaLevel: 0,
            bedrockLevel: -100
          },
          YV = -1e4,
          UV = 1e4,
          yV = 15,
          pV = -1e4,
          QV = -1e4,
          nV = 2
      },
      40957: (VV, eV, xV) => {
        xV.d(eV, {
          d: () => YV,
          g: () => JV,
          i: () => QV,
          m: () => pV,
          n: () => yV,
          o: () => UV
        });
        let JV = function(VV) {
            return VV[VV.GroundHeight = 0] = "GroundHeight", VV[VV.WaterHeight = 1] = "WaterHeight", VV[VV.CavesAllowedBelowY = 2] = "CavesAllowedBelowY", VV[VV.IsLake = 3] = "IsLake", VV[VV.NumFields = 4] = "NumFields", VV
          }({}),
          YV = function(VV) {
            return VV[VV.FloorY = 0] = "FloorY", VV[VV.CeilingY = 1] = "CeilingY", VV[VV.NumFields = 2] = "NumFields", VV
          }({});
        const UV = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem"];
        let yV = function(VV) {
            return VV[VV.SURFACE = 0] = "SURFACE", VV[VV.UNDERGROUND = 1] = "UNDERGROUND", VV
          }({}),
          pV = function(VV) {
            return VV[VV.HIGH = 0] = "HIGH", VV[VV.MEDIUM = 1] = "MEDIUM", VV[VV.VERY_HIGH = 2] = "VERY_HIGH", VV
          }({}),
          QV = function(VV) {
            return VV[VV.DistanceToNearestFixedPrefab = 0] = "DistanceToNearestFixedPrefab", VV[VV.HeightOfNearestFixedPrefab = 1] = "HeightOfNearestFixedPrefab", VV[VV.NumFields = 2] = "NumFields", VV
          }({})
      },
      4648: (VV, eV, xV) => {
        xV.d(eV, {
          d: () => QV,
          h: () => UV,
          l: () => JV,
          m: () => pV,
          n: () => yV,
          q: () => YV
        });
        class JV {
          constructor(VV) {
            this.a = void 0, this.reseed(VV)
          }
          reseed(VV) {
            let eV = 2166136261;
            for (let xV = 0; xV < VV.length; xV++) eV = Math.imul(eV ^ VV.charCodeAt(xV), 16777619);
            this.a = eV
          }
          next() {
            let VV = this.a += 1831565813;
            return VV = Math.imul(VV ^ VV >>> 15, 1 | VV), VV ^= VV + Math.imul(VV ^ VV >>> 7, 61 | VV), ((VV ^ VV >>> 14) >>> 0) / 4294967296
          }
        }

        function YV(VV, eV) {
          for (let xV = 0; xV < VV.length; xV++) {
            const JV = xV + Math.floor(eV.next() * (VV.length - xV));
            [VV[xV], VV[JV]] = [VV[JV], VV[xV]]
          }
          return VV
        }
        class UV {
          constructor(VV) {
            if (this.distribution = void 0, VV.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(VV)}`);
            const eV = new Set;
            let xV = 0;
            for (const YV of VV) {
              const JV = YV.value;
              if (eV.has(JV)) throw new Error(`Values must be unique: ${JSON.stringify(VV)}`);
              eV.add(JV);
              const UV = YV.weight;
              if (UV <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(VV)}`);
              xV += UV
            }
            let JV = 0;
            this.distribution = VV.map((VV => {
              let {
                weight: eV,
                value: YV
              } = VV;
              return JV += eV / xV, {
                cumulativeProbability: JV,
                value: YV
              }
            }))
          }
          sample(VV) {
            const eV = VV.next();
            for (const xV of this.distribution)
              if (eV < xV.cumulativeProbability) return xV.value;
            return this.distribution[this.distribution.length - 1].value
          }
        }
        class yV {
          constructor(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.offset = void 0, this.multiplier = void 0, VV > eV) throw new Error(`Min must be less than or equal to Max, but Min=${VV} and Max=${eV}`);
            xV ? (this.multiplier = VV - eV, this.offset = eV) : (this.multiplier = eV - VV, this.offset = VV)
          }
          sample(VV) {
            return VV.next() * this.multiplier + this.offset
          }
        }
        class pV {
          constructor(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new yV(VV, eV, xV), !Number.isInteger(VV) || !Number.isInteger(eV)) throw new Error(`Min and Max must be integers, but Min=${VV} and Max=${eV}`)
          }
          sample(VV) {
            const eV = this.uniformRealDistribution.sample(VV);
            return Math.floor(eV)
          }
        }
        class QV {
          constructor(VV) {
            this.probability = VV
          }
          sample(VV) {
            return VV.next() < this.probability
          }
        }
      },
      657: (VV, eV, xV) => {
        xV.d(eV, {
          A: () => rV,
          D: () => kV,
          J: () => QV,
          V: () => ZV,
          d: () => pV,
          i: () => yV,
          k: () => YV,
          t: () => UV,
          w: () => vV,
          y: () => nV
        });
        var JV = xV(660);
        const YV = 36;
        let UV = function(VV) {
            return VV[VV.Maple = 0] = "Maple", VV[VV.Pine = 1] = "Pine", VV[VV.Plum = 2] = "Plum", VV[VV.Cedar = 4] = "Cedar", VV[VV.Aspen = 5] = "Aspen", VV[VV.Jungle = 6] = "Jungle", VV[VV.Palm = 7] = "Palm", VV[VV.AutumnMaple = 8] = "AutumnMaple", VV[VV.Pear = 9] = "Pear", VV[VV.Cherry = 10] = "Cherry", VV[VV.Spectral = 11] = "Spectral", VV[VV.Mango = 12] = "Mango", VV[VV.AutumnAspen = 13] = "AutumnAspen", VV[VV.Dead = 14] = "Dead", VV[VV.FallenLog = 15] = "FallenLog", VV
          }({}),
          yV = function(VV) {
            return VV[VV.COMMON = 0] = "COMMON", VV[VV.UNCOMMON = 1] = "UNCOMMON", VV[VV.RARE = 2] = "RARE", VV[VV.EPIC = 3] = "EPIC", VV[VV.LEGENDARY = 4] = "LEGENDARY", VV
          }({}),
          pV = function(VV) {
            return VV[VV.PLAINS = 0] = "PLAINS", VV[VV.AUTUMN = 1] = "AUTUMN", VV[VV.OASIS = 2] = "OASIS", VV
          }({});

        function QV(VV) {
          return void 0 === VV || null === VV
        }
        const nV = 32,
          wV = 0 | Math.log2(nV);

        function ZV(VV) {
          return VV >> wV
        }

        function vV(VV) {
          return VV << wV
        }

        function rV(VV) {
          return JSON.stringify(VV)
        }
        rV(new Array(YV).fill(null));
        JV.e, Number(atob("NQ==")), Number(atob("MTM="));

        function kV(VV, eV) {
          if ("Air" === VV) return 0;
          const xV = eV[VV];
          return null === xV || void 0 === xV ? void 0 : xV.id
        }
      },
      660: (VV, eV, xV) => {
        xV.d(eV, {
          e: () => JV
        });
        const JV = 873
      },
      242: (VV, eV, xV) => {
        var JV = {
          "./localConfigValues.ts.clientRelease": 250
        };

        function YV(VV) {
          var eV = UV(VV);
          return xV(eV)
        }

        function UV(VV) {
          if (!xV.o(JV, VV)) {
            var eV = new Error("Cannot find module '" + VV + "'");
            throw eV.code = "MODULE_NOT_FOUND", eV
          }
          return JV[VV]
        }
        YV.keys = function() {
          return Object.keys(JV)
        }, YV.resolve = UV, VV.exports = YV, YV.id = 242
      },
      250: (VV, eV, xV) => {
        VV.exports = xV.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
      }
    },
    eV = {};

  function xV(JV) {
    var YV = eV[JV];
    if (void 0 !== YV) return YV.exports;
    var UV = eV[JV] = {
      exports: {}
    };
    return VV[JV](UV, UV.exports, xV), UV.exports
  }
  xV.m = VV, xV.n = VV => {
    var eV = VV && VV.__esModule ? () => VV.default : () => VV;
    return xV.d(eV, {
      a: eV
    }), eV
  }, xV.d = (VV, eV) => {
    for (var JV in eV) xV.o(eV, JV) && !xV.o(VV, JV) && Object.defineProperty(VV, JV, {
      enumerable: !0,
      get: eV[JV]
    })
  }, xV.f = {}, xV.e = VV => Promise.all(Object.keys(xV.f).reduce(((eV, JV) => (xV.f[JV](VV, eV), eV)), [])), xV.u = VV => "static/js/pxmq3aq." + (81 === VV ? "worldgenTables" : VV) + "." + {
    81: "a88c778e",
    84: "1a0a4bfc",
    85: "465c6f42",
    86: "0c698605",
    87: "4706b09e"
  } [VV] + ".chunk.js", xV.miniCssF = VV => {}, xV.o = (VV, eV) => Object.prototype.hasOwnProperty.call(VV, eV), xV.r = VV => {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(VV, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(VV, "__esModule", {
      value: !0
    })
  }, xV.j = 82, xV.p = "/", (() => {
    var VV = xV.u,
      eV = xV.e,
      JV = {},
      YV = {};
    xV.u = function(eV) {
      return VV(eV) + (JV.hasOwnProperty(eV) ? "?" + JV[eV] : "")
    }, xV.e = function(UV) {
      return eV(UV).catch((function(eV) {
        var yV = YV.hasOwnProperty(UV) ? YV[UV] : 4;
        if (yV < 1) {
          var pV = VV(UV);
          if (eV.message = "Loading chunk " + UV + " failed after 4 retries.\n(" + pV + ")", eV.request = pV, JV[UV] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete YV[UV]
            }), 0), "CSS_CHUNK_LOAD_FAILED" === eV.code) {
            var QV = xV.miniCssF(UV);
            eV.message = eV.message.replace("Loading chunk", "Loading CSS chunk").replace(pV, QV), eV.request = QV
          }
          throw eV
        }
        return new Promise((function(VV) {
          var eV = 4 - yV + 1;
          setTimeout((function() {
            var eV = "cache-bust=" + Date.now();
            JV[UV] = eV, YV[UV] = yV - 1, VV(xV.e(UV))
          }), function(VV) {
            return 500 * Math.pow(2, VV)
          }(eV))
        }))
      }))
    }
  })(), (() => {
    var VV = {
        82: 0
      },
      eV = eV => {
        var JV, YV, UV = eV.ids,
          yV = eV.modules,
          pV = eV.runtime,
          QV = 0;
        for (JV in yV) xV.o(yV, JV) && (xV.m[JV] = yV[JV]);
        for (pV && pV(xV); QV < UV.length; QV++) YV = UV[QV], xV.o(VV, YV) && VV[YV] && VV[YV][0](), VV[UV[QV]] = 0
      };
    xV.f.j = (JV, YV) => {
      var UV = xV.o(VV, JV) ? VV[JV] : void 0;
      if (0 !== UV)
        if (UV) YV.push(UV[1]);
        else {
          var yV = import("../../" + xV.u(JV)).then(eV, (eV => {
            throw 0 !== VV[JV] && (VV[JV] = void 0), eV
          }));
          yV = Promise.race([yV, new Promise((eV => UV = VV[JV] = [eV]))]);
          YV.push(UV[1] = yV)
        }
    }
  })();
  var JV = {};

  function YV(VV, eV, xV) {
    eV in VV || Object.defineProperty(VV, eV, {
      value: xV,
      writable: !0,
      configurable: !0
    })
  }

  function UV(VV) {
    const eV = Math.trunc(VV) || 0,
      xV = eV < 0 ? this.length + eV : eV;
    return xV < 0 || xV >= this.length ? void 0 : this[xV]
  }

  function yV(VV, eV) {
    for (let xV = this.length - 1; xV >= 0; xV--)
      if (VV.call(eV, this[xV], xV, this)) return xV;
    return -1
  }

  function pV(VV, eV) {
    const xV = yV.call(this, VV, eV);
    return -1 === xV ? void 0 : this[xV]
  }
  xV.r(JV), xV.d(JV, {
    KE: () => oV,
    HE: () => cV,
    sw: () => hV,
    default: () => Fe,
    initSync: () => te,
    hZ: () => lV,
    lZ: () => LV,
    LZ: () => fV,
    fZ: () => mV,
    mZ: () => KV,
    KZ: () => HV,
    HZ: () => uV,
    uZ: () => sV,
    dZ: () => SV,
    Vv: () => IV,
    ev: () => dV
  }), YV(Object, "hasOwn", ((VV, eV) => Object.prototype.hasOwnProperty.call(VV, eV)));
  const QV = Object.getPrototypeOf(Uint8Array.prototype);
  for (const vx of [Array.prototype, QV]) YV(vx, "at", UV), YV(vx, "findLast", pV), YV(vx, "findLastIndex", yV);
  YV(String.prototype, "at", UV), YV(String.prototype, "toWellFormed", (function() {
    return String(this).replace(/[\uD800-\uDFFF]/gu, "\ufffd")
  }));
  var nV = xV(3168),
    wV = xV.n(nV);
  class ZV extends Error {
    retryable;
    constructor(VV, eV, xV) {
      super(VV, xV), this.retryable = eV
    }
  }
  class vV extends ZV {}
  class rV extends Error {}
  globalThis.crypto, globalThis.isSecureContext, Reflect.apply, Object.defineProperty, "undefined" === typeof Response || Response.prototype.arrayBuffer, Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get, "undefined" === typeof Response || Response.prototype.clone, "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "body"), "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "type"), "undefined" === typeof ReadableStream || ReadableStream.prototype.getReader, "undefined" === typeof ReadableStreamDefaultReader || ReadableStreamDefaultReader.prototype.read, Uint8Array.prototype.set, "undefined" === typeof fetch || fetch, "undefined" === typeof WebAssembly || WebAssembly, Array.from({
    length: 256
  }, ((VV, eV) => eV.toString(16).padStart(2, "0"))), new Set;
  let kV = "unloaded",
    bV = null,
    EV = null,
    BV = null,
    jV = null;
  const qV = new Set;
  new Set;
  let tV = null,
    FV = null,
    TV = null,
    PV = !1,
    AV = 0;

  function NV() {
    return "ready" === kV
  }

  function XV() {
    return kV
  }

  function MV() {
    return null === bV ? "not failed" : `${bV}: ${(VV=EV)instanceof Error?`${VV.name}: ${VV.message}`:String(VV)}`;
    var VV
  }

  function zV() {
    if (!NV()) throw new Error(`Bloxd wasm is not ready (${XV()}): check isBloxdWasmReady() first`);
    return tV
  }

  function GV() {
    if (!jV) throw new Error("Bloxd wasm has not been instantiated");
    return jV
  }

  function WV(VV, eV) {
    let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (RV()) {
      let YV;
      try {
        YV = VV()
      } catch (JV) {
        return DV(JV, function(VV) {
          return VV instanceof rV ? "integrity" : VV instanceof vV ? "timeout" : VV instanceof ZV ? "fetch" : "compile"
        }(JV)), !1
      }
      try {
        gV(xV, eV, YV, eV.initSync({
          module: YV
        }))
      } catch (JV) {
        DV(JV, "instantiate")
      }
    }
    return NV()
  }

  function RV() {
    return "unloaded" === kV && (kV = "loading", !0)
  }

  function gV(VV, eV, xV, JV) {
    FV = VV, tV = eV, BV = xV, jV = JV.memory;
    const {
      dZ: YV
    } = eV;
    AV = "function" === typeof YV ? YV() : 0, kV = "ready",
      function() {
        if (PV) return;
        PV = !0;
        const VV = console.error;
        console.error = function() {
          for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
          const [YV] = xV;
          "string" === typeof YV && YV.startsWith("panicked at") && (TV = YV, function() {
            if (!jV || 0 === AV) return 0;
            const VV = new Uint32Array(jV.buffer, AV, 1),
              eV = VV[0] ?? 0;
            VV[0] = 0
          }()), VV.apply(console, xV)
        }
      }()
  }

  function DV(VV, eV) {
    kV = "failed", bV = eV, EV = VV, console.error(`Bloxd wasm failed (${eV}):`, VV);
    const xV = [...qV];
    qV.clear();
    for (const JV of xV) iV(JV)
  }

  function iV(VV) {
    try {
      VV()
    } catch (eV) {
      console.error("A Bloxd wasm failure listener threw:", eV)
    }
  }
  const CV = ["none", "idle", "now"];

  function aV() {
    const VV = () => zV();
    return {
      memoryBytes: () => GV().buffer.byteLength,
      reserveUpFront: eV => VV().fZ(eV),
      reserveAhead: eV => VV().LZ(eV),
      setCeiling: eV => {
        VV().mZ(eV)
      },
      lowWater: () => CV[VV().lZ()] ?? "none",
      stats: () => function(VV) {
        const eV = new Uint32Array(GV().buffer, VV, 17),
          xV = VV => eV[VV] ?? 0,
          JV = VV => ({
            upFront: xV(VV),
            ahead: xV(VV + 1),
            onDemandInFrame: xV(VV + 2),
            onDemand: xV(VV + 3)
          });
        return {
          memoryBytes: xV(0),
          initialBytes: xV(1),
          liveBytes: xV(2),
          peakLiveBytes: xV(3),
          headroomBytes: xV(4),
          unusedBytes: xV(5),
          ceilingBytes: xV(6),
          reservesRefused: xV(7),
          grows: JV(8),
          grownBytes: JV(12),
          allocationsRefused: xV(16)
        }
      }(VV().KZ()),
      takeBallast: () => VV().HZ(),
      takePressure: () => VV().uZ()
    }
  }
  class oV {
    __destroy_into_raw() {
      const VV = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ve.unregister(this), VV
    }
    free() {
      const VV = this.__destroy_into_raw();
      Be.fG79(VV, 0)
    }
    encode(VV) {
      const eV = ne(VV, Be.rqek, Be.TDVJ),
        xV = je;
      Be.Ftus(this.__wbg_ptr, eV, xV)
    }
    sE() {
      return Be.WUGU(this.__wbg_ptr) >>> 0
    }
    constructor() {
      const VV = Be.yKRy();
      return this.__wbg_ptr = VV, Ve.register(this, this.__wbg_ptr, this), this
    }
    SE() {
      return Be.wArM(this.__wbg_ptr) >>> 0
    }
    IE() {
      return Be.N2NJ(this.__wbg_ptr) >>> 0
    }
    uE() {
      return Be.fCt2(this.__wbg_ptr) >>> 0
    }
  }
  Symbol.dispose && (oV.prototype[Symbol.dispose] = oV.prototype.free);
  class cV {
    __destroy_into_raw() {
      const VV = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ee.unregister(this), VV
    }
    free() {
      const VV = this.__destroy_into_raw();
      Be.X2tD(VV, 0)
    }
    init(VV) {
      return Be.QOUz(this.__wbg_ptr, VV) >>> 0
    }
    Ev(VV) {
      return Be.JzNG(this.__wbg_ptr, VV) >>> 0
    }
    constructor(VV) {
      const eV = Be.ZGIC(void 0 === (xV = VV) || null === xV ? Number.MAX_SAFE_INTEGER : VV >>> 0);
      var xV;
      return this.__wbg_ptr = eV, ee.register(this, this.__wbg_ptr, this), this
    }
    Fv() {
      return Be.oLNu(this.__wbg_ptr) >>> 0
    }
    jv() {
      return Be.H618(this.__wbg_ptr) >>> 0
    }
    run(VV) {
      return Be.jxRu(this.__wbg_ptr, VV) >>> 0
    }
  }

  function hV(VV, eV) {
    const xV = ne(VV, Be.rqek, Be.TDVJ),
      JV = je,
      YV = Be.AU4f(xV, JV, eV);
    if (YV[1]) throw we(YV[0])
  }

  function lV() {
    Be.PJFd()
  }

  function LV() {
    return Be.U8SD() >>> 0
  }

  function fV(VV) {
    return 0 !== Be.E16u(VV)
  }

  function mV(VV) {
    return 0 !== Be.WU97(VV)
  }

  function KV(VV) {
    Be.HK8I(VV)
  }

  function HV() {
    return Be.XES2() >>> 0
  }

  function uV() {
    return Be.UHBL() >>> 0
  }

  function sV() {
    return 0 !== Be.pY32()
  }

  function SV() {
    return Be.cbaQ() >>> 0
  }

  function IV() {
    let VV, eV;
    try {
      const xV = Be.oolC();
      return VV = xV[0], eV = xV[1], Je(xV[0], xV[1])
    } finally {
      Be.MaWg(VV, eV, 1)
    }
  }

  function dV(VV) {
    Be.gdAD(xe(VV))
  }

  function OV() {
    return {
      __proto__: null,
      D4XS: {
        __proto__: null,
        JmQh: function(VV, eV) {
          return xe(Error(Je(VV, eV)))
        },
        Wrhv: function(VV, eV) {
          throw new Error(Je(VV, eV))
        },
        t2A4: function(VV) {
          ye(VV).call()
        },
        CFFr: function(VV, eV) {
          console.error(Je(VV, eV))
        },
        okM6: function(VV) {
          we(VV)
        }
      }
    }
  }
  Symbol.dispose && (cV.prototype[Symbol.dispose] = cV.prototype.free);
  const Ve = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((VV => Be.fG79(VV, 1))),
    ee = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((VV => Be.X2tD(VV, 1)));

  function xe(VV) {
    Qe === pe.length && pe.push(pe.length + 1);
    const eV = Qe;
    return Qe = pe[eV], pe[eV] = VV, eV
  }

  function Je(VV, eV) {
    return function(VV, eV) {
      re += eV, re >= ve && (Ze = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }), Ze.decode(), re = eV);
      return Ze.decode(Ue().subarray(VV, VV + eV))
    }(VV >>> 0, eV)
  }
  let Ye = null;

  function Ue() {
    return null !== Ye && 0 !== Ye.byteLength || (Ye = new Uint8Array(Be.memory.buffer)), Ye
  }

  function ye(VV) {
    return pe[VV]
  }
  let pe = new Array(1024).fill(void 0);
  pe.push(void 0, null, !0, !1);
  let Qe = pe.length;

  function ne(VV, eV, xV) {
    if (void 0 === xV) {
      const xV = ke.encode(VV),
        JV = eV(xV.length, 1) >>> 0;
      return Ue().subarray(JV, JV + xV.length).set(xV), je = xV.length, JV
    }
    let JV = VV.length,
      YV = eV(JV, 1) >>> 0;
    const UV = Ue();
    let yV = 0;
    for (; yV < JV; yV++) {
      const eV = VV.charCodeAt(yV);
      if (eV > 127) break;
      UV[YV + yV] = eV
    }
    if (yV !== JV) {
      0 !== yV && (VV = VV.slice(yV)), YV = xV(YV, JV, JV = yV + 3 * VV.length, 1) >>> 0;
      const eV = Ue().subarray(YV + yV, YV + JV);
      yV += ke.encodeInto(VV, eV).written, YV = xV(YV, JV, yV, 1) >>> 0
    }
    return je = yV, YV
  }

  function we(VV) {
    const eV = ye(VV);
    return function(VV) {
      VV < 1028 || (pe[VV] = Qe, Qe = VV)
    }(VV), eV
  }
  let Ze = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  });
  Ze.decode();
  const ve = 2146435072;
  let re = 0;
  const ke = new TextEncoder;
  "encodeInto" in ke || (ke.encodeInto = function(VV, eV) {
    const xV = ke.encode(VV);
    return eV.set(xV), {
      read: VV.length,
      written: xV.length
    }
  });
  let be, Ee, Be, je = 0;

  function qe(VV, eV) {
    return Ee = VV, Be = VV.exports, be = eV, Ye = null, Be.hAy2(), Be
  }

  function te(VV) {
    if (void 0 !== Be) return Be;
    void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
      module: VV
    } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const eV = OV();
    VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
    return qe(new WebAssembly.Instance(VV, eV), VV)
  }
  async function Fe(VV) {
    if (void 0 !== Be) return Be;
    void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
      module_or_path: VV
    } = VV) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
    const eV = OV();
    ("string" === typeof VV || "function" === typeof Request && VV instanceof Request || "function" === typeof URL && VV instanceof URL) && (VV = fetch(VV));
    const {
      instance: xV,
      module: JV
    } = await async function(VV, eV) {
      if ("function" === typeof Response && VV instanceof Response) {
        if (!VV.ok) throw new Error(`failed to fetch Wasm: ${VV.status} ${VV.statusText} fetching '${VV.url}'`);
        if ("function" === typeof WebAssembly.instantiateStreaming) try {
          return await WebAssembly.instantiateStreaming(VV, eV)
        } catch (xV) {
          if (! function(VV) {
              switch (VV) {
                case "basic":
                case "cors":
                case "default":
                  return !0
              }
              return !1
            }(VV.type) || "application/wasm" === VV.headers.get("Content-Type")) throw xV;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", xV)
        }
        const JV = await VV.arrayBuffer();
        return await WebAssembly.instantiate(JV, eV)
      } {
        const xV = await WebAssembly.instantiate(VV, eV);
        return xV instanceof WebAssembly.Instance ? {
          instance: xV,
          module: VV
        } : xV
      }
    }(await VV, eV);
    return qe(xV, JV)
  }

  function Te() {
    return function(VV, eV) {
      if (!NV()) throw new Error(`Bloxd wasm is not ready (${XV()}): check isBloxdWasmReady() first`);
      if (tV !== VV) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${eV}`)
    }(JV, "the wasm client's workers' exports"), JV
  }
  var Pe = xV(657);
  class Ae {
    constructor(VV, eV, JV, YV, UV, yV, pV, QV, nV) {
      var wV, ZV;
      this.defaultGenerator = void 0, this.layerEntries = void 0;
      const {
        WorldGenerator: vV
      } = xV(41045), rV = function(VV, eV, xV) {
        if (null === VV) return null;
        for (const pV of VV.WU) We(pV, xV);
        const JV = VV.terrain;
        if (null === JV) return {
          WU: VV.WU,
          buildBiomes: null
        };
        const YV = Object.hasOwn(eV, JV.name) ? eV[JV.name] : void 0;
        if (void 0 === YV) {
          const VV = Object.keys(eV);
          throw new Error(`Custom world-gen terrain "${JV.name}" is not in this generator's catalogue (${VV.length>0?VV.join(", "):"empty"})`)
        }
        const UV = YV(),
          yV = function(VV, eV) {
            if (!eV.parseOptions) {
              if (null !== VV.GU) throw new Error(`Custom world-gen terrain "${VV.name}" takes no options`);
              return null
            }
            let xV = null;
            if (null !== VV.GU) try {
              xV = JSON.parse(VV.GU)
            } catch (JV) {
              throw new Error(`Custom world-gen terrain "${VV.name}" has invalid optionsJson: ${String(JV)}`, {
                cause: JV
              })
            }
            return eV.parseOptions(xV)
          }(JV, UV);
        return {
          WU: VV.WU,
          buildBiomes: VV => UV.buildBiomes(VV, yV)
        }
      }(null !== (wV = null === pV || void 0 === pV ? void 0 : pV.XU) && void 0 !== wV ? wV : null, QV, eV);
      this.defaultGenerator = new vV(VV, eV, JV, YV, UV, yV, null, rV, nV);
      const kV = null !== (ZV = null === pV || void 0 === pV ? void 0 : pV.layers) && void 0 !== ZV ? ZV : [];
      ! function(VV, eV) {
        for (const JV of VV) Ne(JV, eV);
        const xV = [...VV].sort(((VV, eV) => VV.SY - eV.SY));
        for (let JV = 1; JV < xV.length; JV++)
          if (xV[JV].SY < xV[JV - 1].IY) throw new Error(`Custom world-gen layers overlap: [${xV[JV-1].SY}, ${xV[JV-1].IY}) and [${xV[JV].SY}, ${xV[JV].IY})`)
      }(kV, eV), this.layerEntries = kV.map((xV => ({
        layer: xV,
        generator: new vV(VV, eV, JV, YV, UV, yV, xV, null, nV)
      })))
    }
    getChunk(VV, eV, xV, JV) {
      for (const {
          layer: YV,
          generator: UV
        }
        of this.layerEntries)
        if (xV >= YV.SY && xV < YV.IY) return UV.getChunk(VV, eV, xV - YV.dY, JV);
      return this.defaultGenerator.getChunk(VV, eV, xV, JV)
    }
    getBiomeSelector() {
      return this.defaultGenerator.biomeSelector
    }
    getPrefabLootChests(VV, eV, xV, JV, YV) {
      return this.defaultGenerator.getPrefabLootChests(VV, eV, xV, JV, YV)
    }
    getTreeGenerator() {
      return this.defaultGenerator.treeGenerator
    }
    getOresForChunkColumn(VV, eV) {
      return this.defaultGenerator.getOresForChunkColumn(VV, eV)
    }
  }

  function Ne(VV, eV) {
    if (VV.SY >= VV.IY) throw new Error(`Custom world-gen layer has minY (${VV.SY}) >= maxY (${VV.IY})`);
    if (VV.SY % Pe.y !== 0 || VV.IY % Pe.y !== 0 || VV.dY % Pe.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Pe.y}); got minY=${VV.SY}, maxY=${VV.IY}, groundY=${VV.dY}`);
    if (function(VV, eV) {
        if (void 0 === (0, Pe.D)(VV.xU, eV)) throw new Error(`Custom world-gen caves lavaPitBlock "${VV.xU}" not found in blockMetadata`);
        if (VV.JU)
          for (const xV of VV.JU) Xe(xV, eV)
      }(VV.VU, eV), 0 === VV.EU.length) throw new Error("Custom world-gen layer must have at least one biome");
    let xV = 0;
    for (const JV of VV.EU) Ge(JV, eV), xV += JV.frequency;
    if (xV <= 0) throw new Error("Custom world-gen layer biome frequencies must sum to > 0");
    for (const JV of VV.TU) We(JV, eV)
  }

  function Xe(VV, eV) {
    const {
      blockName: xV,
      UU: JV,
      yU: YV,
      pU: UV
    } = VV;
    if (void 0 === (0, Pe.D)(xV, eV)) throw new Error(`Custom world-gen cave decoration blockName "${xV}" not found in blockMetadata`);
    if (!JV && !YV && !UV) throw new Error(`Custom world-gen cave decoration "${xV}" must allow at least one of floor/walls/ceiling anchoring`);
    if (YV)
      for (const yV of ["meta|rot1|side", "meta|rot2|side", "meta|rot3|side", "meta|rot4|side"]) Me(xV, yV, eV);
    if (UV && Me(xV, "meta|rot1|top", eV), ze(VV.QU, xV, "QU"), ze(VV.nU, xV, "nU"), !Number.isInteger(VV.wU) || VV.wU < 0) throw new Error(`Custom world-gen cave decoration "${xV}" minPlacements must be a non-negative integer, got ${VV.wU}`);
    if (!(0, Pe.J)(VV.ZU) && (ze(VV.ZU.rU, xV, "depthRamp.deepClusterChance"), VV.ZU.kU <= VV.ZU.bU)) throw new Error(`Custom world-gen cave decoration "${xV}" deepY must be strictly smaller than shallowY, but ${VV.ZU.kU} <= ${VV.ZU.bU} `)
  }

  function Me(VV, eV, xV) {
    const JV = `${VV}|${eV}`;
    if (void 0 === (0, Pe.D)(JV, xV)) throw new Error(`Custom world-gen cave decoration "${VV}" is missing directional variant "${JV}" required for wall/ceiling anchoring`)
  }

  function ze(VV, eV, xV) {
    if (VV < 0 || VV > 1) throw new Error(`Custom world-gen cave decoration "${eV}" ${xV} must be in [0, 1], got ${VV}`)
  }

  function Ge(VV, eV) {
    if (VV.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${VV.frequency}`);
    if (void 0 === (0, Pe.D)(VV.jU, eV)) throw new Error(`Custom world-gen biome topsoilBlock "${VV.jU}" not found in blockMetadata`);
    if (void 0 === (0, Pe.D)(VV.qU, eV)) throw new Error(`Custom world-gen biome lowsoilBlock "${VV.qU}" not found in blockMetadata`);
    if (0 === VV.tU.length) throw new Error("Custom world-gen biome must have at least one stoneType");
    for (const xV of VV.tU) {
      if (xV.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${xV.frequency}`);
      if (void 0 === (0, Pe.D)(xV.blockName, eV)) throw new Error(`Custom world-gen biome stoneType blockName "${xV.blockName}" not found in blockMetadata`)
    }
  }

  function We(VV, eV) {
    if (void 0 === (0, Pe.D)(VV.blockName, eV)) throw new Error(`Custom world-gen ore blockName "${VV.blockName}" not found in blockMetadata`);
    if (VV.radius < 0) throw new Error(`Custom world-gen ore "${VV.blockName}" radius must be >= 0, got ${VV.radius}`);
    if (VV.AU <= 0) throw new Error(`Custom world-gen ore "${VV.blockName}" minDistBetweenDeposits must be > 0, got ${VV.AU}`);
    if (VV.SY > VV.IY) throw new Error(`Custom world-gen ore "${VV.blockName}" minY (${VV.SY}) must be <= maxY (${VV.IY})`);
    if (VV.NU < 0 || VV.NU > 1) throw new Error(`Custom world-gen ore "${VV.blockName}" spawnChance must be in [0, 1], got ${VV.NU}`)
  }
  const Re = "buildAFactory2/wasteland",
    ge = {
      blockName: "Uranium Ore",
      radius: 2,
      AU: 10,
      SY: -98,
      IY: -78,
      NU: .4
    },
    De = [{
      blockName: "Copper Ore",
      radius: 2,
      AU: 6,
      SY: -40,
      IY: 20,
      NU: .6
    }, {
      blockName: "Voltite Ore",
      radius: 2,
      AU: 10,
      SY: -75,
      IY: -55,
      NU: .4
    }],
    ie = {
      name: Re,
      GU: null
    };
  const Ce = {
    [Re]: () => xV(40933).e
  };
  Math.round(29.999999999999996);
  const ae = 0,
    oe = 1,
    ce = 2,
    he = 32;
  const le = "1336701983750492191";

  function Le() {
    {
      if ("undefined" === typeof window) return !1;
      const VV = window.location.hostname;
      return VV.includes("preprod") || VV.includes(le)
    }
  }
  const fe = [8, 11, 15, 16, 17, 18, 19],
    me = [];
  for (let vx = 0; vx <= 30; vx++) fe.includes(vx) || me.push(10 * vx);
  const Ke = me;
  Ke.filter((VV => 0 !== VV));
  const He = function(VV) {
      if (void 0 === VV || "" === VV) return 0;
      const eV = Number(VV);
      if (!Ke.includes(eV)) throw new Error(`Invalid port offset "${VV}". Must be one of: ${Ke.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
      return eV
    }("0"),
    ue = 4500;

  function se(VV, eV) {
    const xV = {};
    for (const JV of Object.keys(VV)) xV[JV] = VV[JV] + eV;
    return xV
  }
  const Se = {
      1: 6585,
      2: 6586,
      3: 6587
    },
    Ie = {
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
    de = {
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
  ! function(VV) {
    const eV = Le() ? Se : Ie;
    se(eV, VV), se(de, VV)
  }(He);
  const Oe = {
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
    sessionReplayEnabled: !1,
    msnDevPublicKey: null,
    seasonPassStartedInDev: !0,
    localXpBoost: void 0
  };
  !0 === Oe.offlineMode && (console.log("Booting in offline mode..."), !1 === Oe.useLocalDatabase && console.log("useLocalDatabase is false in offline mode. Setting useLocalDatabase to true."), Oe.useLocalDatabase = !0, !0 === Oe.greenlightChecksEnabled && console.log("greenlightChecksEnabled is true in offline mode. Setting greenlightChecksEnabled to false."), Oe.greenlightChecksEnabled = !1, Oe.useBillingSandbox = !0);
  const Vx = 10,
    ex = 3,
    xx = (Oe.greenlightChecksEnabled, Oe.greenlightChecksEnabled, {
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
  const Jx = new Set;
  for (const vx in xx) {
    const VV = xx[vx].code;
    if (Jx.has(VV)) throw new Error(`Duplicate leave code: ${VV}`);
    Jx.add(VV)
  }! function() {
    const VV = Ux(Vx + 1, ex + 1);
    let eV = VV;
    for (; Yx(eV) < VV;) eV++
  }();

  function Yx(VV) {
    return VV - Math.floor(VV / 6)
  }

  function Ux(VV, eV) {
    const xV = Math.max(VV, eV);
    let JV = 0;
    for (let YV = -xV; YV <= xV; YV++)
      for (let UV = -xV; UV <= xV; UV++)
        for (let yV = -xV; yV <= xV; yV++) yx(VV, eV, YV, UV, yV) && JV++;
    return JV
  }

  function yx(VV, eV, xV, JV, YV) {
    const UV = xV * xV + YV * YV;
    return VV === eV ? UV + JV * JV <= VV * VV : VV > eV ? Math.abs(JV) <= eV && UV + JV * JV <= VV * VV : UV <= VV * VV && UV + JV * JV <= eV * eV
  }
  const px = 65536;
  ! function(VV) {
    const eV = 6815744 + (xV = VV, Math.floor(33554432 * xV / 6144)) + 135680 * VV;
    var xV;
    Math.ceil((85983232 + eV) / px)
  }(6144);
  const Qx = 16777216;
  const nx = "the block and item tables did not load";

  function wx(VV) {
    return function(VV) {
      return WV((() => VV), JV)
    }(VV)
  }
  const Zx = globalThis.WorkerGlobalScope;
  if (void 0 !== Zx && globalThis instanceof Zx) {
    const VV = Promise.all([xV.e(84), xV.e(87), xV.e(85), xV.e(86), xV.e(81)]).then((() => xV(41033))).then((VV => {
      let {
        worldGenMetadata: eV
      } = VV;
      return eV
    }));
    VV.catch((() => {})),
      function(VV, eV) {
        let {
          initWasm: xV = wx,
          terrains: JV,
          loadTables: YV,
          now: UV
        } = eV, yV = 0, pV = null, QV = null, nV = null, ZV = new Uint16Array(0), vV = !1, rV = !1;
        const kV = function(VV, eV, xV) {
            let JV = 0,
              YV = -1,
              UV = !1;
            const yV = () => {
              if (UV) return;
              let yV;
              JV = 0;
              try {
                yV = VV.stats()
              } catch (pV) {
                return UV = !0, void xV(pV)
              }
              YV = yV.memoryBytes, eV(yV)
            };
            return {
              now: yV,
              afterJob: () => {
                JV++, (JV >= 64 || VV.memoryBytes() !== YV) && yV()
              }
            }
          }(aV(), (eV => {
            VV.postMessage({
              type: "memory",
              stats: eV
            })
          }), (eV => {
            rV = !0, QV = null, VV.postMessage({
              type: "lost",
              reason: `its memory stats trapped (${String(eV)})`
            })
          })),
          bV = (VV, eV) => {
            if (!QV) throw new Error("no encoder");
            try {
              const xV = QV.uE();
              new Uint16Array(GV().buffer, xV, VV.length).set(VV), QV.encode(eV);
              const JV = function(VV) {
                return String.fromCharCode(...new Uint8Array(GV().buffer, VV.sE(), 32))
              }(QV);
              return vV = !0, JV
            } catch (xV) {
              throw rV = !0, xV
            }
          };
        VV.onmessage = eV => {
          let {
            data: EV
          } = eV;
          switch (EV.type) {
            case "start":
              yV = EV.PZ, ZV = new Uint16Array(yV * yV * yV),
                function(eV) {
                  if (32 === yV)
                    if (xV(eV)) {
                      try {
                        aV().setCeiling(Qx)
                      } catch (JV) {
                        return void VV.postMessage({
                          type: "lost",
                          reason: `the memory ceiling was not set (${String(JV)})`
                        })
                      }
                      try {
                        QV = new(Te().KE)
                      } catch (JV) {
                        return void VV.postMessage({
                          type: "lost",
                          reason: `GeneratedChunkEncoder did not start (${String(JV)})`
                        })
                      }
                      YV().then((eV => {
                        pV = eV, VV.postMessage({
                          type: "started"
                        }), kV.now()
                      }), (eV => {
                        VV.postMessage({
                          type: "lost",
                          reason: `${nx} (${String(eV)})`
                        })
                      }))
                    } else VV.postMessage({
                      type: "lost",
                      reason: `wasm did not start (${MV()})`
                    });
                  else VV.postMessage({
                    type: "lost",
                    reason: `chunk size ${yV} is not the encoder's 32`
                  })
                }(EV.module);
              break;
            case "seed": {
              const {
                settings: VV
              } = EV;
              if (nV = null, null === VV) break;
              if (null === pV) throw new Error("a map's seed before the block and item tables loaded");
              try {
                nV = new Ae(yV, pV.blockMetadata, pV.itemMetadata, VV.fY, !1, VV.mY, VV.HY, JV, bV)
              } catch (BV) {
                console.error("[bloxd-wasm-client] the map's world generator did not start", BV)
              }
              break
            }
            case "generate":
              ! function(eV, xV, JV, YV, pV) {
                if (rV || !QV) return void VV.postMessage({
                  type: "result",
                  ticket: eV,
                  status: ce,
                  workerUs: 0,
                  bytes: pV,
                  len: 0
                }, [pV]);
                vV = !1;
                const bV = UV();
                let EV = !1;
                nV && (ZV.fill(0), EV = void 0 !== nV.getChunk(wV()(ZV, [yV, yV, yV]), xV, JV, YV));
                const BV = (jV = bV, qV = UV(), Math.min(4294967295, Math.max(0, Math.round(1e3 * (qV - jV)))));
                var jV, qV;
                let tV = null;
                if (!rV && EV && vV) try {
                  tV = function(VV, eV) {
                    const xV = VV.SE(),
                      JV = he + xV,
                      YV = eV.byteLength >= JV ? eV : new ArrayBuffer(JV),
                      UV = GV().buffer,
                      yV = new Uint8Array(YV, 0, JV);
                    return yV.set(new Uint8Array(UV, VV.sE(), he)), yV.set(new Uint8Array(UV, VV.IE(), xV), he), {
                      bytes: YV,
                      len: JV
                    }
                  }(QV, pV)
                } catch {
                  rV = !0
                }
                rV ? (QV = null, VV.postMessage({
                  type: "result",
                  ticket: eV,
                  status: ce,
                  workerUs: BV,
                  bytes: pV,
                  len: 0
                }, [pV])) : null === tV ? VV.postMessage({
                  type: "result",
                  ticket: eV,
                  status: oe,
                  workerUs: BV,
                  bytes: pV,
                  len: 0
                }, [pV]) : tV.bytes === pV ? VV.postMessage({
                  type: "result",
                  ticket: eV,
                  status: ae,
                  workerUs: BV,
                  bytes: pV,
                  len: tV.len
                }, [pV]) : VV.postMessage({
                  type: "result",
                  ticket: eV,
                  status: ae,
                  workerUs: BV,
                  bytes: tV.bytes,
                  len: tV.len,
                  spare: pV
                }, [tV.bytes, pV]), rV || kV.afterJob()
              }(EV.ticket, EV.x, EV.y, EV.z, EV.bytes)
          }
        }
      }(globalThis, {
        terrains: Ce,
        loadTables: () => VV,
        now: () => performance.now()
      })
  }
})();