/*! For license information please see tz47m9.worldgenWorker.f9aa61a5.chunk.js.LICENSE.txt */
(() => {
  var DD = {
      1661: DD => {
        const zD = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
          wD = () => zD.now(),
          pD = DD => DD === 1 / 0 || (DD => DD && DD === Math.floor(DD) && DD > 0 && isFinite(DD))(DD);
        class sD {
          constructor() {
            let {
              max: DD = 1 / 0,
              ttl: zD,
              updateAgeOnGet: wD = !1,
              checkAgeOnGet: sD = !1,
              noUpdateTTL: KD = !1,
              dispose: rD,
              noDisposeOnSet: LD = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.expirations = Object.create(null), this.data = new Map, this.expirationMap = new Map, void 0 !== zD && !pD(zD)) throw new TypeError("ttl must be positive integer or Infinity if set");
            if (!pD(DD)) throw new TypeError("max must be positive integer or Infinity");
            if (this.ttl = zD, this.max = DD, this.updateAgeOnGet = !!wD, this.checkAgeOnGet = !!sD, this.noUpdateTTL = !!KD, this.noDisposeOnSet = !!LD, void 0 !== rD) {
              if ("function" !== typeof rD) throw new TypeError("dispose must be function if set");
              this.dispose = rD
            }
            this.timer = void 0, this.timerExpiration = void 0
          }
          setTimer(DD, zD) {
            if (this.timerExpiration < DD) return;
            this.timer && clearTimeout(this.timer);
            const pD = setTimeout((() => {
              this.timer = void 0, this.timerExpiration = void 0, this.purgeStale();
              for (const DD in this.expirations) {
                this.setTimer(DD, Math.max(0, DD - wD()));
                break
              }
            }), zD);
            pD.unref && pD.unref(), this.timerExpiration = DD, this.timer = pD
          }
          cancelTimer() {
            this.timer && (clearTimeout(this.timer), this.timerExpiration = void 0, this.timer = void 0)
          }
          cancelTimers() {
            return process.emitWarning('TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no "s"), and will be removed in the next major version update'), this.cancelTimer()
          }
          clear() {
            const DD = this.dispose !== sD.prototype.dispose ? [...this] : [];
            this.data.clear(), this.expirationMap.clear(), this.cancelTimer(), this.expirations = Object.create(null);
            for (const [zD, wD] of DD) this.dispose(wD, zD, "delete")
          }
          setTTL(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ttl;
            const pD = this.expirationMap.get(DD);
            if (void 0 !== pD) {
              const zD = this.expirations[pD];
              !zD || zD.length <= 1 ? delete this.expirations[pD] : this.expirations[pD] = zD.filter((zD => zD !== DD))
            }
            if (zD !== 1 / 0) {
              const pD = Math.floor(wD() + zD);
              this.expirationMap.set(DD, pD), this.expirations[pD] || (this.expirations[pD] = [], this.setTimer(pD, zD)), this.expirations[pD].push(DD)
            } else this.expirationMap.set(DD, 1 / 0)
          }
          set(DD, zD) {
            let {
              ttl: wD = this.ttl,
              noUpdateTTL: sD = this.noUpdateTTL,
              noDisposeOnSet: KD = this.noDisposeOnSet
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!pD(wD)) throw new TypeError("ttl must be positive integer or Infinity");
            if (this.expirationMap.has(DD)) {
              sD || this.setTTL(DD, wD);
              const pD = this.data.get(DD);
              pD !== zD && (this.data.set(DD, zD), KD || this.dispose(pD, DD, "set"))
            } else this.setTTL(DD, wD), this.data.set(DD, zD);
            for (; this.size > this.max;) this.purgeToCapacity();
            return this
          }
          has(DD) {
            return this.data.has(DD)
          }
          getRemainingTTL(DD) {
            const zD = this.expirationMap.get(DD);
            return zD === 1 / 0 ? zD : void 0 !== zD ? Math.max(0, Math.ceil(zD - wD())) : 0
          }
          get(DD) {
            let {
              updateAgeOnGet: zD = this.updateAgeOnGet,
              ttl: wD = this.ttl,
              checkAgeOnGet: pD = this.checkAgeOnGet
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const sD = this.data.get(DD);
            if (!pD || 0 !== this.getRemainingTTL(DD)) return zD && this.setTTL(DD, wD), sD;
            this.delete(DD)
          }
          dispose(DD, zD) {}
          delete(DD) {
            const zD = this.expirationMap.get(DD);
            if (void 0 !== zD) {
              const wD = this.data.get(DD);
              this.data.delete(DD), this.expirationMap.delete(DD);
              const pD = this.expirations[zD];
              return pD && (pD.length <= 1 ? delete this.expirations[zD] : this.expirations[zD] = pD.filter((zD => zD !== DD))), this.dispose(wD, DD, "delete"), 0 === this.size && this.cancelTimer(), !0
            }
            return !1
          }
          purgeToCapacity() {
            for (const DD in this.expirations) {
              const zD = this.expirations[DD];
              if (!(this.size - zD.length >= this.max)) {
                const DD = this.size - this.max,
                  wD = [];
                for (const pD of zD.splice(0, DD)) wD.push([pD, this.data.get(pD)]), this.data.delete(pD), this.expirationMap.delete(pD);
                for (const [zD, pD] of wD) this.dispose(pD, zD, "evict");
                return
              } {
                delete this.expirations[DD];
                const wD = [];
                for (const DD of zD) wD.push([DD, this.data.get(DD)]), this.data.delete(DD), this.expirationMap.delete(DD);
                for (const [DD, zD] of wD) this.dispose(zD, DD, "evict")
              }
            }
          }
          get size() {
            return this.data.size
          }
          purgeStale() {
            const DD = Math.ceil(wD());
            for (const zD in this.expirations) {
              if ("Infinity" === zD || zD > DD) return;
              const wD = [...this.expirations[zD] || []],
                pD = [];
              delete this.expirations[zD];
              for (const DD of wD) pD.push([DD, this.data.get(DD)]), this.data.delete(DD), this.expirationMap.delete(DD);
              for (const [DD, zD] of pD) this.dispose(zD, DD, "stale")
            }
            0 === this.size && this.cancelTimer()
          }* entries() {
            for (const DD in this.expirations)
              for (const zD of this.expirations[DD]) yield [zD, this.data.get(zD)]
          }* keys() {
            for (const DD in this.expirations)
              for (const zD of this.expirations[DD]) yield zD
          }* values() {
            for (const DD in this.expirations)
              for (const zD of this.expirations[DD]) yield this.data.get(zD)
          } [Symbol.iterator]() {
            return this.entries()
          }
        }
        DD.exports = sD
      },
      2842: DD => {
        DD.exports = function(DD) {
          for (var zD = new Array(DD), wD = 0; wD < DD; ++wD) zD[wD] = wD;
          return zD
        }
      },
      2846: DD => {
        function zD(DD) {
          return !!DD.constructor && "function" === typeof DD.constructor.isBuffer && DD.constructor.isBuffer(DD)
        }
        DD.exports = function(DD) {
          return null != DD && (zD(DD) || function(DD) {
            return "function" === typeof DD.readFloatLE && "function" === typeof DD.slice && zD(DD.slice(0, 0))
          }(DD) || !!DD._isBuffer)
        }
      },
      39690: DD => {
        DD.exports = function(DD, zD) {
          zD = zD || 2;
          for (var wD = 2 * (DD = DD || 1) + 1, pD = Math.pow(wD, zD) - 1, sD = new Array(pD), KD = 0; KD < pD; KD++)
            for (var rD = sD[KD] = new Array(zD), LD = KD < pD / 2 ? KD : KD + 1, cD = 1; cD <= zD; cD++) {
              var gD = LD % Math.pow(wD, cD);
              rD[cD - 1] = gD / Math.pow(wD, cD - 1) - DD, LD -= gD
            }
          return sD
        }
      },
      2839: (DD, zD, wD) => {
        var pD = wD(2842),
          sD = wD(2846),
          KD = "undefined" !== typeof Float64Array;

        function rD(DD, zD) {
          return DD[0] - zD[0]
        }

        function LD() {
          var DD, zD = this.stride,
            wD = new Array(zD.length);
          for (DD = 0; DD < wD.length; ++DD) wD[DD] = [Math.abs(zD[DD]), DD];
          wD.sort(rD);
          var pD = new Array(wD.length);
          for (DD = 0; DD < pD.length; ++DD) pD[DD] = wD[DD][1];
          return pD
        }

        function cD(DD, zD) {
          var wD = ["View", zD, "d", DD].join("");
          zD < 0 && (wD = "View_Nil" + DD);
          var sD = "generic" === DD;
          if (-1 === zD) {
            var KD = "function " + wD + "(a){this.data=a;};var proto=" + wD + ".prototype;proto.dtype='" + DD + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + wD + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + wD + "(a){return new " + wD + "(a);}";
            return new Function(KD)()
          }
          if (0 === zD) {
            KD = "function " + wD + "(a,d) {this.data = a;this.offset = d};var proto=" + wD + ".prototype;proto.dtype='" + DD + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + wD + "_copy() {return new " + wD + "(this.data,this.offset)};proto.pick=function " + wD + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + wD + "_get(){return " + (sD ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + wD + "_set(v){return " + (sD ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + wD + "(a,b,c,d){return new " + wD + "(a,d)}";
            return new Function("TrivialArray", KD)(gD[DD][0])
          }
          KD = ["'use strict'"];
          var rD = pD(zD),
            cD = rD.map((function(DD) {
              return "i" + DD
            })),
            RD = "this.offset+" + rD.map((function(DD) {
              return "this.stride[" + DD + "]*i" + DD
            })).join("+"),
            AD = rD.map((function(DD) {
              return "b" + DD
            })).join(","),
            UD = rD.map((function(DD) {
              return "c" + DD
            })).join(",");
          KD.push("function " + wD + "(a," + AD + "," + UD + ",d){this.data=a", "this.shape=[" + AD + "]", "this.stride=[" + UD + "]", "this.offset=d|0}", "var proto=" + wD + ".prototype", "proto.dtype='" + DD + "'", "proto.dimension=" + zD), KD.push("Object.defineProperty(proto,'size',{get:function " + wD + "_size(){return " + rD.map((function(DD) {
            return "this.shape[" + DD + "]"
          })).join("*"), "}})"), 1 === zD ? KD.push("proto.order=[0]") : (KD.push("Object.defineProperty(proto,'order',{get:"), zD < 4 ? (KD.push("function " + wD + "_order(){"), 2 === zD ? KD.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === zD && KD.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : KD.push("ORDER})")), KD.push("proto.set=function " + wD + "_set(" + cD.join(",") + ",v){"), sD ? KD.push("return this.data.set(" + RD + ",v)}") : KD.push("return this.data[" + RD + "]=v}"), KD.push("proto.get=function " + wD + "_get(" + cD.join(",") + "){"), sD ? KD.push("return this.data.get(" + RD + ")}") : KD.push("return this.data[" + RD + "]}"), KD.push("proto.index=function " + wD + "_index(", cD.join(), "){return " + RD + "}"), KD.push("proto.hi=function " + wD + "_hi(" + cD.join(",") + "){return new " + wD + "(this.data," + rD.map((function(DD) {
            return ["(typeof i", DD, "!=='number'||i", DD, "<0)?this.shape[", DD, "]:i", DD, "|0"].join("")
          })).join(",") + "," + rD.map((function(DD) {
            return "this.stride[" + DD + "]"
          })).join(",") + ",this.offset)}");
          var fD = rD.map((function(DD) {
              return "a" + DD + "=this.shape[" + DD + "]"
            })),
            ID = rD.map((function(DD) {
              return "c" + DD + "=this.stride[" + DD + "]"
            }));
          KD.push("proto.lo=function " + wD + "_lo(" + cD.join(",") + "){var b=this.offset,d=0," + fD.join(",") + "," + ID.join(","));
          for (var BD = 0; BD < zD; ++BD) KD.push("if(typeof i" + BD + "==='number'&&i" + BD + ">=0){d=i" + BD + "|0;b+=c" + BD + "*d;a" + BD + "-=d}");
          KD.push("return new " + wD + "(this.data," + rD.map((function(DD) {
            return "a" + DD
          })).join(",") + "," + rD.map((function(DD) {
            return "c" + DD
          })).join(",") + ",b)}"), KD.push("proto.step=function " + wD + "_step(" + cD.join(",") + "){var " + rD.map((function(DD) {
            return "a" + DD + "=this.shape[" + DD + "]"
          })).join(",") + "," + rD.map((function(DD) {
            return "b" + DD + "=this.stride[" + DD + "]"
          })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
          for (BD = 0; BD < zD; ++BD) KD.push("if(typeof i" + BD + "==='number'){d=i" + BD + "|0;if(d<0){c+=b" + BD + "*(a" + BD + "-1);a" + BD + "=ceil(-a" + BD + "/d)}else{a" + BD + "=ceil(a" + BD + "/d)}b" + BD + "*=d}");
          KD.push("return new " + wD + "(this.data," + rD.map((function(DD) {
            return "a" + DD
          })).join(",") + "," + rD.map((function(DD) {
            return "b" + DD
          })).join(",") + ",c)}");
          var GD = new Array(zD),
            hD = new Array(zD);
          for (BD = 0; BD < zD; ++BD) GD[BD] = "a[i" + BD + "]", hD[BD] = "b[i" + BD + "]";
          KD.push("proto.transpose=function " + wD + "_transpose(" + cD + "){" + cD.map((function(DD, zD) {
            return DD + "=(" + DD + "===undefined?" + zD + ":" + DD + "|0)"
          })).join(";"), "var a=this.shape,b=this.stride;return new " + wD + "(this.data," + GD.join(",") + "," + hD.join(",") + ",this.offset)}"), KD.push("proto.pick=function " + wD + "_pick(" + cD + "){var a=[],b=[],c=this.offset");
          for (BD = 0; BD < zD; ++BD) KD.push("if(typeof i" + BD + "==='number'&&i" + BD + ">=0){c=(c+this.stride[" + BD + "]*i" + BD + ")|0}else{a.push(this.shape[" + BD + "]);b.push(this.stride[" + BD + "])}");
          return KD.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), KD.push("return function construct_" + wD + "(data,shape,stride,offset){return new " + wD + "(data," + rD.map((function(DD) {
            return "shape[" + DD + "]"
          })).join(",") + "," + rD.map((function(DD) {
            return "stride[" + DD + "]"
          })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", KD.join("\n"))(gD[DD], LD)
        }
        var gD = {
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
        DD.exports = function(DD, zD, wD, pD) {
          if (void 0 === DD) return (0, gD.array[0])([]);
          "number" === typeof DD && (DD = [DD]), void 0 === zD && (zD = [DD.length]);
          var rD = zD.length;
          if (void 0 === wD) {
            wD = new Array(rD);
            for (var LD = rD - 1, RD = 1; LD >= 0; --LD) wD[LD] = RD, RD *= zD[LD]
          }
          if (void 0 === pD) {
            pD = 0;
            for (LD = 0; LD < rD; ++LD) wD[LD] < 0 && (pD -= (zD[LD] - 1) * wD[LD])
          }
          for (var AD = function(DD) {
              if (sD(DD)) return "buffer";
              if (KD) switch (Object.prototype.toString.call(DD)) {
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
              return Array.isArray(DD) ? "array" : "generic"
            }(DD), UD = gD[AD]; UD.length <= rD + 1;) UD.push(cD(AD, UD.length - 1));
          return (0, UD[rD + 1])(DD, zD, wD, pD)
        }
      },
      39666: (DD, zD, wD) => {
        var pD = wD(39671).integer,
          sD = wD(39679),
          KD = wD(39686);

        function rD(DD, zD) {
          for (var wD = 0, pD = 0; pD < DD.length; pD++) wD += Math.pow(DD[pD] - zD[pD], 2);
          return wD
        }

        function LD(DD, zD) {
          if ("function" === typeof DD.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
          this.shape = DD.shape, this.minDistance = DD.minDistance, this.maxDistance = DD.maxDistance || 2 * DD.minDistance, this.maxTries = Math.ceil(Math.max(1, DD.tries || 30)), this.rng = zD || Math.random, this.dimension = this.shape.length, this.squaredMinDistance = this.minDistance * this.minDistance, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.minDistance / Math.sqrt(this.dimension), this.neighbourhood = KD(this.dimension), this.currentPoint = null, this.processList = [], this.samplePoints = [], this.gridShape = [];
          for (var wD = 0; wD < this.dimension; wD++) this.gridShape.push(Math.ceil(this.shape[wD] / this.cellSize));
          this.grid = pD(this.gridShape)
        }
        LD.prototype.shape = null, LD.prototype.dimension = null, LD.prototype.minDistance = null, LD.prototype.maxDistance = null, LD.prototype.minDistancePlusEpsilon = null, LD.prototype.squaredMinDistance = null, LD.prototype.deltaDistance = null, LD.prototype.cellSize = null, LD.prototype.maxTries = null, LD.prototype.rng = null, LD.prototype.neighbourhood = null, LD.prototype.currentPoint = null, LD.prototype.processList = null, LD.prototype.samplePoints = null, LD.prototype.gridShape = null, LD.prototype.grid = null, LD.prototype.addRandomPoint = function() {
          for (var DD = new Array(this.dimension), zD = 0; zD < this.dimension; zD++) DD[zD] = this.rng() * this.shape[zD];
          return this.directAddPoint(DD)
        }, LD.prototype.addPoint = function(DD) {
          var zD, wD = !0;
          if (DD.length === this.dimension)
            for (zD = 0; zD < this.dimension && wD; zD++) wD = DD[zD] >= 0 && DD[zD] <= this.shape[zD];
          else wD = !1;
          return wD ? this.directAddPoint(DD) : null
        }, LD.prototype.directAddPoint = function(DD) {
          var zD, wD = 0,
            pD = this.grid.stride;
          for (this.processList.push(DD), this.samplePoints.push(DD), zD = 0; zD < this.dimension; zD++) wD += (DD[zD] / this.cellSize | 0) * pD[zD];
          return this.grid.data[wD] = this.samplePoints.length, DD
        }, LD.prototype.inNeighbourhood = function(DD) {
          var zD, wD, pD, sD, KD = this.dimension,
            LD = this.grid.stride;
          for (zD = 0; zD < this.neighbourhood.length; zD++) {
            for (wD = 0, pD = 0; pD < KD; pD++) {
              if ((sD = (DD[pD] / this.cellSize | 0) + this.neighbourhood[zD][pD]) < 0 || sD >= this.gridShape[pD]) {
                wD = -1;
                break
              }
              wD += sD * LD[pD]
            }
            if (-1 !== wD && 0 !== this.grid.data[wD] && rD(DD, this.samplePoints[this.grid.data[wD] - 1]) < this.squaredMinDistance) return !0
          }
          return !1
        }, LD.prototype.next = function() {
          for (var DD, zD, wD, pD, KD, rD, LD; this.processList.length > 0;) {
            for (null === this.currentPoint && (this.currentPoint = this.processList.shift()), pD = this.currentPoint, DD = 0; DD < this.maxTries; DD++) {
              for (rD = !0, wD = this.minDistancePlusEpsilon + this.deltaDistance * this.rng(), 2 === this.dimension ? (zD = this.rng() * Math.PI * 2, KD = [Math.cos(zD), Math.sin(zD)]) : KD = sD(this.dimension, this.rng), LD = 0; rD && LD < this.dimension; LD++) KD[LD] = pD[LD] + KD[LD] * wD, rD = KD[LD] >= 0 && KD[LD] < this.shape[LD];
              if (rD && !this.inNeighbourhood(KD)) return this.directAddPoint(KD)
            }
            DD === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, LD.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, LD.prototype.getAllPoints = function() {
          return this.samplePoints
        }, LD.prototype.getAllPointsWithDistance = function() {
          throw new Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation")
        }, LD.prototype.reset = function() {
          var DD = this.grid.data,
            zD = 0;
          for (zD = 0; zD < DD.length; zD++) DD[zD] = 0;
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, DD.exports = LD
      },
      39693: (DD, zD, wD) => {
        var pD = wD(39671).array,
          sD = wD(39679),
          KD = wD(39686);

        function rD(DD, zD) {
          for (var wD = 0, pD = 0; pD < DD.length; pD++) wD += Math.pow(DD[pD] - zD[pD], 2);
          return Math.sqrt(wD)
        }

        function LD(DD, zD) {
          if ("function" !== typeof DD.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
          this.shape = DD.shape, this.minDistance = DD.minDistance, this.maxDistance = DD.maxDistance || 2 * DD.minDistance, this.maxTries = Math.ceil(Math.max(1, DD.tries || 30)), this.distanceFunction = DD.distanceFunction, this.bias = Math.max(0, Math.min(1, DD.bias || 0)), this.rng = zD || Math.random, this.dimension = this.shape.length, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.maxDistance / Math.sqrt(this.dimension), this.neighbourhood = KD(this.dimension), this.currentPoint = null, this.currentDistance = 0, this.processList = [], this.samplePoints = [], this.sampleDistance = [], this.gridShape = [];
          for (var wD = 0; wD < this.dimension; wD++) this.gridShape.push(Math.ceil(this.shape[wD] / this.cellSize));
          this.grid = pD(this.gridShape)
        }
        LD.prototype.shape = null, LD.prototype.dimension = null, LD.prototype.minDistance = null, LD.prototype.maxDistance = null, LD.prototype.minDistancePlusEpsilon = null, LD.prototype.deltaDistance = null, LD.prototype.cellSize = null, LD.prototype.maxTries = null, LD.prototype.distanceFunction = null, LD.prototype.bias = null, LD.prototype.rng = null, LD.prototype.neighbourhood = null, LD.prototype.currentPoint = null, LD.prototype.currentDistance = null, LD.prototype.processList = null, LD.prototype.samplePoints = null, LD.prototype.sampleDistance = null, LD.prototype.gridShape = null, LD.prototype.grid = null, LD.prototype.addRandomPoint = function() {
          for (var DD = new Array(this.dimension), zD = 0; zD < this.dimension; zD++) DD[zD] = this.rng() * this.shape[zD];
          return this.directAddPoint(DD)
        }, LD.prototype.addPoint = function(DD) {
          var zD, wD = !0;
          if (DD.length === this.dimension)
            for (zD = 0; zD < this.dimension && wD; zD++) wD = DD[zD] >= 0 && DD[zD] <= this.shape[zD];
          else wD = !1;
          return wD ? this.directAddPoint(DD) : null
        }, LD.prototype.directAddPoint = function(DD) {
          var zD, wD = 0,
            pD = this.grid.stride,
            sD = this.samplePoints.length;
          for (this.processList.push(sD), this.samplePoints.push(DD), this.sampleDistance.push(this.distanceFunction(DD)), zD = 0; zD < this.dimension; zD++) wD += (DD[zD] / this.cellSize | 0) * pD[zD];
          return this.grid.data[wD].push(sD), DD
        }, LD.prototype.inNeighbourhood = function(DD) {
          var zD, wD, pD, sD, KD, LD, cD = this.dimension,
            gD = this.grid.stride,
            RD = this.distanceFunction(DD);
          for (zD = 0; zD < this.neighbourhood.length; zD++) {
            for (wD = 0, pD = 0; pD < cD; pD++) {
              if ((sD = (DD[pD] / this.cellSize | 0) + this.neighbourhood[zD][pD]) < 0 || sD >= this.gridShape[pD]) {
                wD = -1;
                break
              }
              wD += sD * gD[pD]
            }
            if (-1 !== wD && this.grid.data[wD].length > 0)
              for (var AD = 0; AD < this.grid.data[wD].length; AD++) {
                KD = this.samplePoints[this.grid.data[wD][AD]], LD = this.sampleDistance[this.grid.data[wD][AD]];
                var UD = Math.min(LD, RD),
                  fD = UD + (Math.max(LD, RD) - UD) * this.bias;
                if (rD(DD, KD) < this.minDistance + this.deltaDistance * fD) return !0
              }
          }
          return !1
        }, LD.prototype.next = function() {
          for (var DD, zD, wD, pD, KD, rD, LD, cD; this.processList.length > 0;) {
            if (null === this.currentPoint) {
              var gD = this.processList.shift();
              this.currentPoint = this.samplePoints[gD], this.currentDistance = this.sampleDistance[gD]
            }
            for (pD = this.currentPoint, KD = this.currentDistance, DD = 0; DD < this.maxTries; DD++) {
              for (LD = !0, wD = this.minDistancePlusEpsilon + this.deltaDistance * (KD + (1 - KD) * this.bias), 2 === this.dimension ? (zD = this.rng() * Math.PI * 2, rD = [Math.cos(zD), Math.sin(zD)]) : rD = sD(this.dimension, this.rng), cD = 0; LD && cD < this.dimension; cD++) rD[cD] = pD[cD] + rD[cD] * wD, LD = rD[cD] >= 0 && rD[cD] < this.shape[cD];
              if (LD && !this.inNeighbourhood(rD)) return this.directAddPoint(rD)
            }
            DD === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, LD.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, LD.prototype.getAllPoints = function() {
          return this.samplePoints
        }, LD.prototype.getAllPointsWithDistance = function() {
          var DD, zD = new Array(this.samplePoints.length),
            wD = 0,
            pD = 0;
          for (wD = 0; wD < this.samplePoints.length; wD++) {
            for (DD = new Array(this.dimension + 1), pD = 0; pD < this.dimension; pD++) DD[pD] = this.samplePoints[wD][pD];
            DD[this.dimension] = this.sampleDistance[wD], zD[wD] = DD
          }
          return zD
        }, LD.prototype.reset = function() {
          var DD = this.grid.data,
            zD = 0;
          for (zD = 0; zD < DD.length; zD++) DD[zD] = [];
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, DD.exports = LD
      },
      39686: (DD, zD, wD) => {
        var pD = wD(39690);
        var sD = {};
        DD.exports = function(DD) {
          return sD[DD] || (sD[DD] = function(DD) {
            var zD, wD = pD(2, DD),
              sD = [];
            for (wD = wD.filter((function(zD) {
                for (var wD = 0, pD = 0; pD < DD; pD++) wD += Math.pow(Math.max(0, Math.abs(zD[pD]) - 1), 2);
                return wD < DD
              })), zD = 0; zD < DD; zD++) sD.push(0);
            return wD.push(sD), wD.sort((function(zD, wD) {
              var pD, sD = 0,
                KD = 0;
              for (pD = 0; pD < DD; pD++) sD += Math.pow(zD[pD], 2), KD += Math.pow(wD[pD], 2);
              return sD < KD ? -1 : sD > KD ? 1 : 0
            })), wD
          }(DD)), sD[DD]
        }
      },
      39659: (DD, zD, wD) => {
        var pD = wD(39666),
          sD = wD(39693);

        function KD(DD, zD) {
          this.shape = DD.shape, "function" === typeof DD.distanceFunction ? this.implementation = new sD(DD, zD) : this.implementation = new pD(DD, zD)
        }
        KD.prototype.implementation = null, KD.prototype.addRandomPoint = function() {
          return this.implementation.addRandomPoint()
        }, KD.prototype.addPoint = function(DD) {
          return this.implementation.addPoint(DD)
        }, KD.prototype.next = function() {
          return this.implementation.next()
        }, KD.prototype.fill = function() {
          return this.implementation.fill()
        }, KD.prototype.getAllPoints = function() {
          return this.implementation.getAllPoints()
        }, KD.prototype.getAllPointsWithDistance = function() {
          return this.implementation.getAllPointsWithDistance()
        }, KD.prototype.reset = function() {
          this.implementation.reset()
        }, DD.exports = KD
      },
      39679: DD => {
        DD.exports = function(DD, zD) {
          var wD, pD, sD, KD, rD, LD = new Array(DD),
            cD = Math.floor(DD / 2) << 1,
            gD = 0;
          for (rD = 0; rD < cD; rD += 2) wD = -2 * Math.log(zD()), pD = Math.sqrt(wD), sD = 2 * Math.PI * zD(), gD += wD, LD[rD] = pD * Math.cos(sD), LD[rD + 1] = pD * Math.sin(sD);
          if (DD % 2) {
            var RD = Math.sqrt(-2 * Math.log(zD())) * Math.cos(2 * Math.PI * zD());
            LD[DD - 1] = RD, gD += Math.pow(RD, 2)
          }
          for (KD = 1 / Math.sqrt(gD), rD = 0; rD < DD; ++rD) LD[rD] *= KD;
          return LD
        }
      },
      39671: DD => {
        DD.exports = {
          integer: function(DD) {
            var zD, wD = DD.length,
              pD = 1,
              sD = new Array(wD);
            for (zD = wD; zD > 0; zD--) sD[zD - 1] = pD, pD *= DD[zD - 1];
            return {
              stride: sD,
              data: new Uint32Array(pD)
            }
          },
          array: function(DD) {
            var zD, wD, pD = DD.length,
              sD = 1,
              KD = new Array(pD),
              rD = [];
            for (zD = pD; zD > 0; zD--) KD[zD - 1] = sD, sD *= DD[zD - 1];
            for (wD = 0; wD < sD; wD++) rD.push([]);
            return {
              stride: KD,
              data: rD
            }
          }
        }
      },
      37713: (DD, zD, wD) => {
        var pD = wD(37718);

        function sD(DD) {
          for (var zD, wD, sD = 0, KD = DD.length, rD = 0; rD < DD.length;) {
            for (zD = DD[rD], wD = 0; rD < KD && DD[rD] === zD;) ++rD, ++wD;
            sD += pD.log2(wD) / 7 | 0, sD += pD.log2(zD >>> 0) / 7 | 0, sD += 2
          }
          return sD
        }
        zD.size = sD, zD.encode = function(DD, zD) {
          zD || (zD = new Uint8Array(sD(DD)));
          for (var wD, pD, KD = 0, rD = zD.length, LD = 0; LD < DD.length;) {
            for (wD = DD[LD], pD = 0; LD < DD.length && DD[LD] === wD;) ++LD, ++pD;
            for (; KD < rD && pD >= 128;) zD[KD++] = 128 + (127 & pD), pD >>>= 7;
            if (KD >= rD) throw new Error("RLE buffer overflow");
            for (zD[KD++] = pD, wD >>>= 0; KD < rD && wD >= 128;) zD[KD++] = 128 + (127 & wD), wD >>>= 7;
            if (KD >= rD) throw new Error("RLE buffer overflow");
            zD[KD++] = wD
          }
          return zD
        }, zD.decode = function(DD, zD) {
          for (var wD, pD, sD, KD, rD = zD.length, LD = DD.length, cD = 0, gD = 0; gD < LD;) {
            for (wD = 0, pD = 0; gD < LD && DD[gD] >= 128;) wD += (127 & DD[gD++]) << pD, pD += 7;
            if (wD += DD[gD++] << pD, gD >= LD) throw new Error("RLE buffer underrun");
            if (cD + wD > rD) throw new Error("Chunk buffer overflow");
            for (sD = 0, pD = 0; gD < LD && DD[gD] >= 128;) sD += (127 & DD[gD++]) << pD, pD += 7;
            if (gD >= LD) throw new Error("RLE buffer underrun");
            for (sD += DD[gD++] << pD, KD = 0; KD < wD; ++KD) zD[cD++] = sD
          }
          return zD
        }
      },
      37718: (DD, zD) => {
        function wD(DD) {
          var zD = 32;
          return (DD &= -DD) && zD--, 65535 & DD && (zD -= 16), 16711935 & DD && (zD -= 8), 252645135 & DD && (zD -= 4), 858993459 & DD && (zD -= 2), 1431655765 & DD && (zD -= 1), zD
        }
        zD.INT_BITS = 32, zD.INT_MAX = 2147483647, zD.INT_MIN = -1 << 31, zD.sign = function(DD) {
          return (DD > 0) - (DD < 0)
        }, zD.abs = function(DD) {
          var zD = DD >> 31;
          return (DD ^ zD) - zD
        }, zD.min = function(DD, zD) {
          return zD ^ (DD ^ zD) & -(DD < zD)
        }, zD.max = function(DD, zD) {
          return DD ^ (DD ^ zD) & -(DD < zD)
        }, zD.isPow2 = function(DD) {
          return !(DD & DD - 1) && !!DD
        }, zD.log2 = function(DD) {
          var zD, wD;
          return zD = (DD > 65535) << 4, zD |= wD = ((DD >>>= zD) > 255) << 3, zD |= wD = ((DD >>>= wD) > 15) << 2, (zD |= wD = ((DD >>>= wD) > 3) << 1) | (DD >>>= wD) >> 1
        }, zD.log10 = function(DD) {
          return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
        }, zD.popCount = function(DD) {
          return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
        }, zD.countTrailingZeros = wD, zD.nextPow2 = function(DD) {
          return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
        }, zD.prevPow2 = function(DD) {
          return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
        }, zD.parity = function(DD) {
          return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
        };
        var pD = new Array(256);
        ! function(DD) {
          for (var zD = 0; zD < 256; ++zD) {
            var wD = zD,
              pD = zD,
              sD = 7;
            for (wD >>>= 1; wD; wD >>>= 1) pD <<= 1, pD |= 1 & wD, --sD;
            DD[zD] = pD << sD & 255
          }
        }(pD), zD.reverse = function(DD) {
          return pD[255 & DD] << 24 | pD[DD >>> 8 & 255] << 16 | pD[DD >>> 16 & 255] << 8 | pD[DD >>> 24 & 255]
        }, zD.interleave2 = function(DD, zD) {
          return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (zD = 1431655765 & ((zD = 858993459 & ((zD = 252645135 & ((zD = 16711935 & ((zD &= 65535) | zD << 8)) | zD << 4)) | zD << 2)) | zD << 1)) << 1
        }, zD.deinterleave2 = function(DD, zD) {
          return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> zD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
        }, zD.interleave3 = function(DD, zD, wD) {
          return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (zD = 1227133513 & ((zD = 3272356035 & ((zD = 251719695 & ((zD = 4278190335 & ((zD &= 1023) | zD << 16)) | zD << 8)) | zD << 4)) | zD << 2)) << 1) | (wD = 1227133513 & ((wD = 3272356035 & ((wD = 251719695 & ((wD = 4278190335 & ((wD &= 1023) | wD << 16)) | wD << 8)) | wD << 4)) | wD << 2)) << 2
        }, zD.deinterleave3 = function(DD, zD) {
          return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> zD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
        }, zD.nextCombination = function(DD) {
          var zD = DD | DD - 1;
          return zD + 1 | (~zD & -~zD) - 1 >>> wD(DD) + 1
        }
      },
      39613: (DD, zD, wD) => {
        wD.d(zD, {
          b: () => Rz
        });
        var pD = wD(39635),
          sD = wD(39625),
          KD = wD(39701);

        function rD(DD) {
          let zD = 2166136261;
          for (let wD = 0; wD < DD.length; wD++) zD = Math.imul(zD ^ DD.charCodeAt(wD), 16777619);
          return zD
        }

        function LD(DD) {
          return rD(`${DD}Wasteland`)
        }

        function cD(DD, zD, wD) {
          let pD = Math.imul(DD, 668265261) ^ Math.imul(zD, 374761393) ^ wD;
          return pD = Math.imul(pD ^ pD >>> 15, 2246822507), pD = Math.imul(pD ^ pD >>> 13, 3266489909), pD ^= pD >>> 16, (pD >>> 0) / 4294967296
        }

        function gD(DD, zD, wD, pD) {
          return cD(DD, wD, pD ^ Math.imul(zD, 1540483477))
        }
        const RD = {
          dustFlats: 30,
          scorchedMesa: 18,
          shatteredHighlands: 14,
          ruinFields: 12,
          saltFlats: 7,
          survivorGrove: 5
        };
        const AD = .3,
          UD = 528734635,
          fD = {
            dustFlats: .75,
            scorchedMesa: AD,
            shatteredHighlands: AD,
            ruinFields: AD,
            saltFlats: AD,
            survivorGrove: 0
          };

        function ID(DD, zD, wD) {
          return cD(DD, zD, wD ^ UD)
        }

        function BD(DD, zD, wD, pD) {
          return 36 * (1 === pD ? DD : zD) + 2 + Math.floor(32 * cD(DD, zD, wD ^ UD ^ pD))
        }
        var GD = wD(39616),
          hD = wD(39633);
        const nD = 160,
          MD = 10,
          OD = 3 * (Math.ceil(50 / 6) + 1) + 2 + MD,
          JD = .9238795325112867,
          ED = .7071067811865476,
          QD = .3826834323650898,
          XD = [
            [1, 0],
            [JD, QD],
            [ED, ED],
            [QD, JD]
          ].flatMap((DD => {
            let [zD, wD] = DD;
            return [
              [zD, wD],
              [-wD, zD],
              [-zD, -wD],
              [wD, -zD]
            ]
          }));
        let VD = null,
          PD = null,
          CD = 0;

        function xD(DD, zD, wD) {
          ! function(DD) {
            DD !== VD && (VD = DD, PD = (0, GD.i)(DD), CD = LD(DD))
          }(DD);
          const pD = 625341585 ^ CD,
            sD = nD - 2 * OD,
            KD = zD * nD + OD + Math.floor(cD(zD, wD, 1 ^ pD) * sD),
            rD = wD * nD + OD + Math.floor(cD(zD, wD, 2 ^ pD) * sD),
            gD = Math.round(-8 + PD.getOctaves(KD, rD)),
            RD = -46 + Math.floor(7 * cD(zD, wD, 3 ^ pD)),
            AD = gD - RD;
          if (AD < 20 || AD > 50) return null;
          const UD = Math.ceil(AD / 6);
          return {
            x: KD,
            z: rD,
            topY: gD,
            floorY: RD,
            turns: UD,
            pitch: AD / UD,
            radius: 3 * (UD + 1) + 2
          }
        }

        function TD(DD, zD, wD, pD) {
          const sD = xD(DD, zD, wD);
          if (!sD || "saltFlats" !== pD(sD.x, sD.z)) return null;
          const KD = sD.radius + MD + 2;
          for (const [rD, LD] of XD)
            for (const DD of [KD, KD / 2])
              if ("saltFlats" !== pD(Math.round(sD.x + rD * DD), Math.round(sD.z + LD * DD))) return null;
          return sD
        }

        function bD(DD, zD, wD, pD) {
          const sD = zD - DD.x,
            KD = wD - DD.z,
            rD = Math.sqrt(sD * sD + KD * KD);
          if (rD >= DD.radius + MD) return null;
          if (rD >= DD.radius) {
            const zD = rD - DD.radius,
              wD = Math.floor(zD),
              sD = Math.min(Math.max(pD, DD.topY - wD), DD.topY + wD);
            return sD + Math.round((pD - sD) * zD / MD)
          }
          const LD = function(DD, zD) {
              const wD = Math.abs(DD),
                pD = Math.abs(zD);
              if (0 === wD && 0 === pD) return 0;
              const sD = Math.min(wD, pD) / Math.max(wD, pD);
              let KD = sD * (Math.PI / 4 + .273 * (1 - sD)) / (2 * Math.PI);
              return pD > wD && (KD = .25 - KD), DD < 0 && (KD = .5 - KD), zD < 0 ? 1 - KD : KD
            }(sD, KD),
            cD = (DD.radius - rD) / 3 - LD,
            gD = Math.floor(cD);
          if (gD < 0) return DD.topY;
          if (gD >= DD.turns) return DD.floorY;
          const RD = 3 * (cD - gD) >= 2 ? 1 : 0;
          return Math.round(DD.topY - DD.pitch * (gD + LD)) + RD
        }

        function jD(DD, zD, wD) {
          const pD = DD.radius + MD,
            sD = zD - DD.x,
            KD = wD - DD.z;
          return sD * sD + KD * KD < pD * pD
        }
        const dD = ["White Baked Clay", "Clay", "Sand", "Light Gray Baked Clay", "Clay", "White Baked Clay", "Andesite", "Light Gray Baked Clay", "Stone", "Andesite", "Stone"],
          SD = ["Chalk", "Sand", "Clay"],
          iD = -40,
          lD = -20,
          WD = .05;
        class ND {
          constructor(DD, zD, wD, pD) {
            this.seed = DD, this.fine = wD, this.lookAt = pD, this.salt = void 0, this.cells = new Map, this.lastCellX = NaN, this.lastCellZ = NaN, this.lastHole = null, this.upperBandIds = void 0, this.bandIds = void 0, this.copperId = void 0, this.clayId = void 0, this.gravelId = void 0, this.salt = LD(DD);
            const sD = DD => zD[DD].id;
            this.upperBandIds = SD.map(sD), this.bandIds = dD.map(sD), this.copperId = sD("Copper Ore"), this.clayId = sD("Clay"), this.gravelId = sD("Gravel")
          }
          carveGround(DD, zD, wD) {
            const pD = this.cellHole(DD, zD);
            return pD ? bD(pD, DD, zD, wD) : null
          }
          taking(DD, zD) {
            const wD = this.cellHole(DD, zD);
            return wD && jD(wD, DD, zD) ? wD : null
          }
          clearsPrefab(DD, zD, wD, pD, sD) {
            const KD = wD + OD;
            for (let rD = Math.floor((DD - KD) / nD); rD <= Math.floor((DD + KD) / nD); rD++)
              for (let LD = Math.floor((zD - KD) / nD); LD <= Math.floor((zD + KD) / nD); LD++) {
                const KD = this.holeIn(rD, LD);
                if (KD && sD >= KD.floorY - hD.f && pD <= KD.topY + MD) {
                  const pD = KD.radius + MD + wD;
                  if ((KD.x - DD) ** 2 + (KD.z - zD) ** 2 < pD * pD) return !1
                }
              }
            return !0
          }
          wallBlock(DD, zD, wD, pD) {
            const sD = this.taking(DD, wD);
            if (!sD || pD >= sD.topY) return 0;
            if (zD === pD && zD <= sD.floorY) return this.fine(DD, wD) > .2 ? this.clayId : this.gravelId;
            if (zD >= iD && zD <= lD && gD(DD, zD, wD, 1779033703 ^ this.salt) < WD) return this.copperId;
            const KD = Math.floor((-10 - zD - Math.round(this.fine(DD, wD))) / 3);
            return KD < 0 ? this.upperBandIds[-KD % this.upperBandIds.length] : this.bandIds[Math.min(KD, this.bandIds.length - 1)]
          }
          cellHole(DD, zD) {
            return this.holeIn(Math.floor(DD / nD), Math.floor(zD / nD))
          }
          holeIn(DD, zD) {
            if (DD === this.lastCellX && zD === this.lastCellZ) return this.lastHole;
            const wD = 65536 * DD + zD;
            let pD = this.cells.get(wD);
            return void 0 === pD && (this.cells.size >= 4096 && this.cells.clear(), pD = TD(this.seed, DD, zD, this.lookAt), this.cells.set(wD, pD)), this.lastCellX = DD, this.lastCellZ = zD, this.lastHole = pD, pD
          }
        }
        var ZD = wD(39653);
        const yD = new Set(["rock", "rubble", "dryCactus", "bone"]);
        class kD {
          constructor(DD, zD, wD, pD, sD, KD) {
            this.CI = zD, this.chances = sD, this.mound = KD, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = wD.salt ^ rD(pD), this.sinkholes = wD.sinkholes;
            const LD = zD => DD[zD].id;
            this.ids = {
              deadBush: LD("Dead Bush"),
              rock1: LD("Andesite"),
              rock2: LD("Stone"),
              rock3: LD("Messy Stone"),
              rubble1: LD("Mossy Messy Stone"),
              rubble2: LD("Cracked Stone Bricks"),
              rubble3: LD("Messy Stone"),
              dryCactus: LD("Dry Fat Cactus"),
              bone: LD("Bone Block"),
              grass: LD("Grass"),
              tallGrass: LD("Tall Grass"),
              tallGrassTop: LD("Tall Grass|Top")
            }
          }
          addBiomeFloraToColumn(DD, zD, wD, pD, sD, KD, rD) {
            const LD = this.mound(pD, KD);
            if (LD) {
              const cD = rD + 1 - sD;
              for (let sD = 0; sD < LD.height && cD + sD < this.CI; sD++) cD + sD >= 0 && DD.set(pD - zD, cD + sD, KD - wD, LD.block);
              return
            }
            const gD = cD(pD, KD, this.salt);
            let RD = 0;
            for (const UD of this.order) {
              var AD;
              if (RD += null !== (AD = this.chances[UD]) && void 0 !== AD ? AD : 0, gD < RD) return void(yD.has(UD) && this.sinkholes.taking(pD, KD) || this.place(DD, pD - zD, rD + 1 - sD, KD - wD, UD, cD(pD, KD, 1540483477 ^ this.salt)))
            }
          }
          place(DD, zD, wD, pD, sD, KD) {
            const rD = (sD, KD) => {
                wD + sD >= 0 && wD + sD < this.CI && DD.set(zD, wD + sD, pD, KD)
              },
              LD = this.ids;
            if ("rock" === sD) {
              const DD = KD < .5 ? LD.rock1 : KD < .8 ? LD.rock2 : LD.rock3;
              rD(0, DD), KD < .3 && rD(1, DD)
            } else "rubble" === sD ? rD(0, KD < .55 ? LD.rubble1 : KD < .75 ? LD.rubble2 : LD.rubble3) : "dryCactus" === sD ? (rD(0, LD.dryCactus), KD < .5 && rD(1, LD.dryCactus)) : "tallGrass" === sD ? (rD(0, LD.tallGrass), rD(1, LD.tallGrassTop)) : rD(0, LD[sD])
          }
        }
        class mD extends ZD.g {
          constructor(DD, zD, wD, pD, sD, KD) {
            super(DD, zD, wD, pD, sD, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null), this.noise = KD, this.grassChance = 0, this.tallGrassChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = null, this.maxFloraHeight = 3, this.waterKept = .25, this.maxSurfacePrefabRelief = 6, this.floraChances = void 0, this.canyonStrength = 1, this.canyonDepth = 26, this.outcropChance = void 0, this.ids = void 0;
            const rD = {};
            for (const LD of ["Dry Grass Block", "Overgrown Dry Grass Block", "Grass Block", "Dirt", "Messy Dirt", "Rocky Dirt", "Gravel", "Sand", "Red Sand", "Clay", "Chalk", "Stone", "Andesite", "Messy Stone", "Mossy Messy Stone", "Cracked Stone Bricks", "Baked Clay", "Orange Baked Clay", "Brown Baked Clay", "Red Baked Clay", "Yellow Baked Clay", "Light Gray Baked Clay", "White Baked Clay", "Copper Ore", "Gold Ore", "Coal Ore", "Iron Ore"]) rD[LD] = zD[LD].id;
            this.ids = rD, this.lowsoilBlockType = rD.Dirt
          }
          init() {
            super.init(), this.floraGenerator = new kD(this.blockMetadata, this.CI, this.noise, this.seed, this.floraChances, ((DD, zD) => this.mound(DD, zD)))
          }
          getHeightmapVal(DD, zD) {
            const wD = this.getGroundHeight(DD, zD);
            return this.canyonStrength > 0 ? wD - this.canyonStrength * this.canyonDepth * this.noise.canyonDepth(DD, zD) : wD
          }
          carveGround(DD, zD, wD) {
            return this.noise.sinkholes.carveGround(DD, zD, wD)
          }
          allowsPrefab(DD, zD, wD, pD, sD) {
            return this.noise.sinkholes.clearsPrefab(DD, zD, wD, pD, sD)
          }
          getTopsoilBlock(DD, zD, wD) {
            const pD = this.noise.sinkholes.wallBlock(DD, zD, wD, zD);
            return pD || (this.outcropDistance(DD, wD) <= 2 ? function(DD, zD, wD, pD) {
              return gD(DD, zD, wD, pD ^ UD) < .85
            }(DD, zD, wD, this.noise.salt) ? this.ids["Copper Ore"] : this.ids.Andesite : this.soilTop(DD, zD, wD))
          }
          soilTop(DD, zD, wD) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(DD, zD, wD, pD) {
            const sD = this.noise.sinkholes.wallBlock(DD, zD, wD, pD);
            return sD || (zD >= pD - 2 && this.outcropDistance(DD, wD) <= 1 ? this.ids["Copper Ore"] : this.soilBelow(DD, zD, wD, pD))
          }
          soilBelow(DD, zD, wD, pD) {
            return this.copperSeam(DD, zD, wD) || this.lowsoilBlockType
          }
          outcropDistance(DD, zD) {
            const wD = function(DD, zD, wD, pD) {
              const sD = Math.floor(DD / 36),
                KD = Math.floor(zD / 36);
              return ID(sD, KD, wD) >= pD ? 1 / 0 : Math.abs(DD - BD(sD, KD, wD, 1)) + Math.abs(zD - BD(sD, KD, wD, 2))
            }(DD, zD, this.noise.salt, this.outcropChance);
            return wD <= 2 && this.noise.sinkholes.taking(DD, zD) ? 1 / 0 : wD
          }
          mound(DD, zD) {
            const wD = function(DD, zD, wD, pD) {
              return 0 === pD || 1 === pD && cD(DD, zD, wD ^ UD ^ 3) < .5 ? 2 - pD : 0
            }(DD, zD, this.noise.salt, this.outcropDistance(DD, zD));
            return wD > 0 ? {
              block: this.ids["Copper Ore"],
              height: wD
            } : null
          }
          copperSeam(DD, zD, wD) {
            return function(DD, zD, wD, pD, sD) {
              const KD = 1013904242 ^ pD;
              if ((7 & zD) !== (7 & KD) || gD(DD >> 3, zD, wD >> 3, KD) >= .5) return !1;
              const rD = sD(DD, wD);
              return rD > .05 && rD < .95 && gD(DD, zD, wD, KD) < .75
            }(DD, zD, wD, this.noise.salt, ((DD, zD) => this.noise.canyonDepth(DD, zD))) ? this.ids["Copper Ore"] : 0
          }
          getDryBedBlock(DD, zD, wD) {
            const pD = this.noise.patch(DD + 900, wD);
            return pD > .45 ? this.ids.Sand : pD < -.6 ? this.ids.Clay : this.ids.Gravel
          }
        }

        function eD(DD) {
          return DD < 0 ? 0 : DD > 1 ? 1 : DD
        }
        class oD {
          constructor(DD, zD, wD) {
            this.salt = void 0, this.sinkholes = void 0, this.canyon = void 0, this.canyonWarp = void 0, this.canyonMask = void 0, this.patchNoise = void 0, this.fineNoise = void 0, this.canyonAtX = NaN, this.canyonAtZ = NaN, this.canyonAt = 0, this.salt = LD(DD), this.sinkholes = new ND(DD, zD, ((DD, zD) => this.fine(DD, zD)), ((DD, zD) => {
              return pD = wD(DD, zD), Object.hasOwn(RD, pD.key) ? pD.key : null;
              var pD
            })), this.canyon = new sD.j([{
              amplitude: 1,
              frequency: 1 / 260
            }], `${DD}WastelandCanyon`), this.canyonWarp = new sD.j([{
              amplitude: 28,
              frequency: 1 / 90
            }], `${DD}WastelandCanyonWarp`), this.canyonMask = new sD.j([{
              amplitude: 1,
              frequency: 1 / 650
            }], `${DD}WastelandCanyonMask`), this.patchNoise = new sD.j([{
              amplitude: 1,
              frequency: 1 / 48
            }, {
              amplitude: .4,
              frequency: 1 / 14
            }], `${DD}WastelandPatch`), this.fineNoise = new sD.j([{
              amplitude: .75,
              frequency: 1 / 16
            }, {
              amplitude: .25,
              frequency: .2
            }], `${DD}WastelandFine`)
          }
          canyonDepth(DD, zD) {
            if (DD === this.canyonAtX && zD === this.canyonAtZ) return this.canyonAt;
            let wD = 0;
            const pD = eD(2.5 * (this.canyonMask.getOctaves(DD, zD) + .15));
            if (pD > 0) {
              const sD = Math.abs(this.canyon.getOctaves(DD + this.canyonWarp.getOctaves(DD, zD), zD + this.canyonWarp.getOctaves(DD + 311, zD - 173))),
                KD = .09 * pD;
              if (sD < KD) {
                const DD = eD((KD - sD) / (.45 * KD));
                wD = DD * DD * (3 - 2 * DD)
              }
            }
            return this.canyonAtX = DD, this.canyonAtZ = zD, this.canyonAt = wD, wD
          }
          patch(DD, zD) {
            return this.patchNoise.getOctaves(DD, zD)
          }
          fine(DD, zD) {
            return this.fineNoise.getOctaves(DD, zD)
          }
        }
        var aD = wD(4263),
          uD = wD(619),
          vD = wD(39104),
          tD = wD(39647);
        const FD = "oldWorks";

        function YD(DD) {
          return Uint8Array.from(atob(DD), (DD => DD.charCodeAt(0)))
        }
        let HD = null;

        function qD() {
          return HD ??= function() {
            const DD = new vD.d;
            return DD.set(0, 0, 0, YD("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")), DD.set(0, 1, 0, YD("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new tD.e(FD, {
              x: 0,
              y: 0,
              z: 0
            }, {
              x: 29,
              y: 40,
              z: 29
            }, DD)
          }(), HD
        }
        const Dz = 3,
          zz = 6,
          wz = {
            name: FD,
            get schematic() {
              return qD()
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
              qualityDistribution: new aD.e([{
                value: uD.f.UNCOMMON,
                weight: 1
              }, {
                value: uD.f.RARE,
                weight: 2
              }, {
                value: uD.f.EPIC,
                weight: 1
              }])
            }],
            spawnerBlockLocations: [{
              localX: 10,
              localY: 2,
              localZ: 16,
              mobTypeDistribution: new aD.e([{
                value: "Draugr Zombie",
                weight: 1
              }])
            }]
          };

        function pz(DD, zD, wD) {
          return (0, ZD.hb)(DD, [{
            prefab: wz,
            frequency: wD
          }, ...ZD.d.map((DD => ({
            prefab: DD,
            frequency: zD
          })))])
        }
        class sz extends mD {
          constructor(DD, zD, wD, KD, rD, LD) {
            super(DD, zD, wD, `${KD}DustFlats`, rD, LD, pz(pD.l.MEDIUM, 1.25, Dz)), this.key = "dustFlats", this.floraChances = {
              deadBush: .012,
              rock: .0015,
              bone: 2e-4
            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = fD.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new sD.j([{
              amplitude: 5,
              frequency: 1 / 90
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${KD}DustFlatsHeight`)
          }
          getGroundHeight(DD, zD) {
            return -2 + this.height.getOctaves(DD, zD)
          }
          soilTop(DD, zD, wD) {
            const pD = this.noise.patch(DD, wD);
            if (pD > .45) return this.ids.Gravel;
            if (pD < -.55) return this.ids.Sand;
            const sD = this.noise.fine(DD, wD);
            return sD > .3 ? this.ids["Messy Dirt"] : sD < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
        }
        class Kz extends mD {
          constructor(DD, zD, wD, pD, KD, rD) {
            super(DD, zD, wD, `${pD}ScorchedMesa`, KD, rD), this.key = "scorchedMesa", this.floraChances = {
              deadBush: .015,
              dryCactus: .0012,
              rock: 8e-4
            }, this.outcropChance = fD.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new sD.j([{
              amplitude: 40,
              frequency: 1 / 300
            }, {
              amplitude: 12,
              frequency: 1 / 80
            }], `${pD}ScorchedMesaHeight`);
            const LD = this.ids;
            this.bandPalette = [LD["Orange Baked Clay"], LD["Baked Clay"], LD["Orange Baked Clay"], LD["Brown Baked Clay"], LD["Red Baked Clay"], LD["Orange Baked Clay"], LD["Yellow Baked Clay"], LD["Baked Clay"], LD["Light Gray Baked Clay"], LD["Red Baked Clay"], LD["White Baked Clay"], LD["Brown Baked Clay"]]
          }
          getGroundHeight(DD, zD) {
            const wD = this.height.getOctaves(DD, zD) + 8;
            if (wD <= 6) return .6 * wD;
            const pD = (wD - 6) / 9,
              sD = Math.floor(pD);
            return 3.6 + 9 * (sD + eD((pD - sD - .7) / .3)) * 1.5
          }
          soilTop(DD, zD, wD) {
            return zD >= 12 ? this.ids["Red Sand"] : this.noise.fine(DD, wD) > .45 ? this.ids["Messy Dirt"] : this.ids["Red Sand"]
          }
          soilBelow(DD, zD, wD, pD) {
            return zD >= pD - 1 ? this.ids["Red Sand"] : this.getStrataBlock(DD, zD, wD, pD) || this.lowsoilBlockType
          }
          getStrataBlock(DD, zD, wD, pD) {
            if (zD < -8) return 0;
            const sD = this.noise.patch(.25 * DD, .25 * wD),
              KD = Math.floor((zD + 4 * sD) / 3);
            return function(DD, zD, wD, pD, sD, KD, rD) {
              const LD = 1541459225 ^ pD;
              return sD > .15 && zD >= rD - 16 && cD(KD, 1, LD) < .25 && gD(DD, zD, wD, LD) < .06
            }(DD, zD, wD, this.noise.salt, sD, KD, pD) ? this.ids["Gold Ore"] : this.bandPalette[Math.floor(cD(KD, 0, this.noise.salt) * this.bandPalette.length)]
          }
          getDryBedBlock(DD, zD, wD) {
            return this.ids["Red Sand"]
          }
        }
        class rz extends mD {
          constructor(DD, zD, wD, pD, KD, rD) {
            super(DD, zD, wD, `${pD}ShatteredHighlands`, KD, rD), this.key = "shatteredHighlands", this.floraChances = {
              deadBush: .006,
              rock: .004
            }, this.outcropChance = fD.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new sD.j([{
              amplitude: 60,
              frequency: 1 / 240
            }], `${pD}HighlandsRidge1`), this.ridge2 = new sD.j([{
              amplitude: 25,
              frequency: 1 / 110
            }], `${pD}HighlandsRidge2`), this.bumps = new sD.j([{
              amplitude: 6,
              frequency: .02
            }], `${pD}HighlandsBumps`)
          }
          getGroundHeight(DD, zD) {
            return 1.2 * (85 - Math.abs(this.ridge1.getOctaves(DD, zD)) - Math.abs(this.ridge2.getOctaves(DD, zD))) - 25 + this.bumps.getOctaves(DD, zD)
          }
          soilTop(DD, zD, wD) {
            const pD = this.noise.fine(DD, wD);
            return zD > 58 ? pD > .35 ? this.ids.Gravel : pD < -.4 ? this.ids.Andesite : this.ids.Stone : zD > 36 ? pD > .25 ? this.ids.Gravel : pD < -.45 ? this.ids.Stone : this.ids["Rocky Dirt"] : pD > .3 ? this.ids["Messy Dirt"] : pD < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
          soilBelow(DD, zD, wD, pD) {
            const sD = this.peakSeam(DD, zD, wD);
            return 0 !== sD ? sD : zD > 50 ? this.ids.Stone : zD > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
          }
          getStrataBlock(DD, zD, wD, pD) {
            return this.peakSeam(DD, zD, wD)
          }
          peakSeam(DD, zD, wD) {
            const pD = function(DD, zD, wD, pD) {
              if (zD <= 40 || zD % 3 !== 0) return null;
              const sD = 2600822924 ^ pD,
                KD = cD(zD, 0, sD),
                rD = KD < .4 ? "Coal Ore" : KD < .7 ? "Iron Ore" : null;
              return null === rD || gD(DD >> 2, zD, wD >> 2, sD) >= .25 ? null : gD(DD, zD, wD, sD) < .65 ? rD : null
            }(DD, zD, wD, this.noise.salt);
            return pD ? this.ids[pD] : 0
          }
        }
        class Lz extends mD {
          constructor(DD, zD, wD, KD, rD, LD) {
            super(DD, zD, wD, `${KD}RuinFields`, rD, LD, pz(pD.l.HIGH, 2.25, zz)), this.key = "ruinFields", this.floraChances = {
              deadBush: .02,
              rubble: .008,
              rock: .001,
              bone: 3e-4
            }, this.outcropChance = fD.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new sD.j([{
              amplitude: 3,
              frequency: 1 / 80
            }, {
              amplitude: 1.5,
              frequency: .04
            }], `${KD}RuinFieldsHeight`)
          }
          getGroundHeight(DD, zD) {
            return -3 + this.height.getOctaves(DD, zD)
          }
          soilTop(DD, zD, wD) {
            const pD = cD(DD, wD, 461845907 ^ this.noise.salt);
            return pD < .05 ? this.ids["Mossy Messy Stone"] : pD < .08 ? this.ids["Messy Stone"] : pD < .09 ? this.ids["Cracked Stone Bricks"] : this.noise.fine(DD, wD) > -.1 ? this.ids["Overgrown Dry Grass Block"] : this.ids["Dry Grass Block"]
          }
        }
        class cz extends mD {
          constructor(DD, zD, wD, pD, KD, rD) {
            super(DD, zD, wD, `${pD}SaltFlats`, KD, rD), this.key = "saltFlats", this.floraChances = {
              deadBush: .002,
              bone: 6e-4
            }, this.outcropChance = fD.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new sD.j([{
              amplitude: 1.5,
              frequency: 1 / 120
            }, {
              amplitude: .6,
              frequency: .05
            }], `${pD}SaltFlatsHeight`)
          }
          getGroundHeight(DD, zD) {
            return -8 + this.height.getOctaves(DD, zD)
          }
          soilTop(DD, zD, wD) {
            const pD = this.noise.patch(DD, wD);
            return pD > .5 ? this.ids.Sand : pD < -.55 ? this.ids.Clay : this.ids.Chalk
          }
          soilBelow(DD, zD, wD, pD) {
            return zD >= pD - 2 ? this.ids.Sand : this.ids.Clay
          }
          getStrataBlock(DD, zD, wD, pD) {
            return this.noise.sinkholes.wallBlock(DD, zD, wD, pD)
          }
        }
        class gz extends mD {
          constructor(DD, zD, wD, pD, KD, rD) {
            super(DD, zD, wD, `${pD}SurvivorGrove`, KD, rD), this.key = "survivorGrove", this.floraChances = {
              grass: .12,
              tallGrass: .015,
              deadBush: .004
            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = fD.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new sD.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${pD}SurvivorGroveHeight`)
          }
          getGroundHeight(DD, zD) {
            return -3 + this.height.getOctaves(DD, zD)
          }
          soilTop(DD, zD, wD) {
            return this.noise.fine(DD, wD) < -.6 ? this.ids["Dry Grass Block"] : this.ids["Grass Block"]
          }
          getDryBedBlock(DD, zD, wD) {
            return this.ids.Dirt
          }
        }
        const Rz = {
          buildBiomes: function(DD) {
            let {
              CI: zD,
              blockMetadata: wD,
              worldGenerator: pD,
              seed: sD,
              biomeOpts: rD,
              biomeAt: LD
            } = DD;
            const cD = [zD, wD, pD, sD, rD, new oD(sD, wD, LD)],
              gD = {
                dustFlats: new sz(...cD),
                scorchedMesa: new Kz(...cD),
                shatteredHighlands: new rz(...cD),
                ruinFields: new Lz(...cD),
                saltFlats: new cz(...cD),
                survivorGrove: new gz(...cD)
              },
              AD = (0, KD.j)(wD);
            return Object.keys(RD).map((DD => ({
              biome: gD[DD],
              frequency: RD[DD],
              altBiome: null,
              ...AD
            })))
          }
        }
      },
      596: (DD, zD, wD) => {
        wD.d(zD, {
          e: () => pD
        });
        class pD {
          constructor(DD, zD) {
            this.keyToValueTable = DD, this.valueToKeyTable = void 0;
            const wD = {};
            for (const pD in this.keyToValueTable) {
              const DD = this.keyToValueTable[pD];
              if (void 0 !== wD[DD]) throw new Error(`Duplicate value found in bi-directional table: ${String(DD)}`);
              wD[DD] = "string" === zD ? pD : Number(pD)
            }
            this.valueToKeyTable = wD
          }
          get(DD) {
            return this.keyToValueTable[DD]
          }
          reverseGet(DD) {
            return this.valueToKeyTable[DD]
          }
        }
      },
      39647: (DD, zD, wD) => {
        wD.d(zD, {
          e: () => sD
        });
        var pD = wD(39104);
        class sD {
          constructor(DD, zD, wD, sD) {
            let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pD.d,
              rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                x: 0,
                y: 0,
                z: 0
              },
              LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              cD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            this.name = DD, this.startOffset = zD, this.dimensions = wD, this.rleChunkStorage = sD, this.blockData = KD, this.pasteOffset = rD, this.lobbyCode = LD, this.disjoint = cD
          }
          getRLEChunk(DD, zD, wD) {
            return this.rleChunkStorage.get(DD, zD, wD)
          }
          getNumRLEChunks() {
            return this.rleChunkStorage.getNumItems()
          }* getRLECoords() {
            const DD = [0, 0, 0];
            for (const {
                x: zD,
                y: wD,
                z: pD
              }
              of this.rleChunkStorage) DD[0] = zD, DD[1] = wD, DD[2] = pD, yield DD
          }
        }
      },
      39104: (DD, zD, wD) => {
        wD.d(zD, {
          d: () => pD
        });
        class pD {
          constructor() {
            this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
          }
          set(DD, zD, wD, pD) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const rD = 1023 & DD | (1023 & zD) << 10 | (1023 & wD) << 20;
            let LD = pD;
            if (sD(DD) && sD(zD) && sD(wD) || (LD = new KD(DD, zD, wD, pD), this.hasBoxes = !0), Math.abs(DD) < 512 && Math.abs(zD) < 512 && Math.abs(wD) < 512) {
              const DD = this.unbox(this.zeroStorage.get(rD));
              return this.zeroStorage.has(rD) || this.itemCount++, this.zeroStorage.set(rD, LD), DD
            }
            const cD = DD >> 10 & 1023 | (zD >> 10 & 1023) << 10 | (wD >> 10 & 1023) << 20;
            let gD = this.storage.get(cD);
            gD || (gD = new Map, this.storage.set(cD, gD));
            const RD = this.unbox(gD.get(rD));
            return gD.has(rD) || this.itemCount++, gD.set(rD, LD), RD
          }
          get(DD, zD, wD) {
            var pD;
            const sD = 1023 & DD | (1023 & zD) << 10 | (1023 & wD) << 20;
            if (Math.abs(DD) < 512 && Math.abs(zD) < 512 && Math.abs(wD) < 512) return this.unbox(this.zeroStorage.get(sD));
            const KD = DD >> 10 & 1023 | (zD >> 10 & 1023) << 10 | (wD >> 10 & 1023) << 20;
            return this.unbox(null === (pD = this.storage.get(KD)) || void 0 === pD ? void 0 : pD.get(sD))
          }
          remove(DD, zD, wD) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const pD = 1023 & DD | (1023 & zD) << 10 | (1023 & wD) << 20;
            if (Math.abs(DD) < 512 && Math.abs(zD) < 512 && Math.abs(wD) < 512) return void(this.zeroStorage.delete(pD) && this.itemCount--);
            const sD = DD >> 10 & 1023 | (zD >> 10 & 1023) << 10 | (wD >> 10 & 1023) << 20,
              KD = this.storage.get(sD);
            KD && KD.delete(pD) && this.itemCount--
          }
          removeBy(DD) {
            for (const {
                x: zD,
                y: wD,
                z: pD,
                val: sD
              }
              of this.iterate(!0)) {
              DD(zD, wD, pD, sD) && this.remove(zD, wD, pD)
            }
          }
          unbox(DD) {
            return this.hasBoxes && LD(DD) ? DD.val : DD
          }* iterate(DD) {
            const zD = this.mutationCount;
            for (const wD of cD(this.zeroStorage)) {
              if (!this.zeroStorage.has(wD)) continue;
              const pD = this.zeroStorage.get(wD);
              if (this.hasBoxes && LD(pD) ? yield {
                  x: pD.x,
                  y: pD.y,
                  z: pD.z,
                  val: pD.val
                } : yield {
                  x: wD << 22 >> 22,
                  y: wD << 12 >> 22,
                  z: wD << 2 >> 22,
                  val: pD
                }, !DD && zD !== this.mutationCount) throw new gD
            }
            for (const wD of cD(this.storage)) {
              const pD = this.storage.get(wD);
              if (pD)
                for (const sD of cD(pD)) {
                  if (!pD.has(sD)) continue;
                  const KD = pD.get(sD);
                  if (this.hasBoxes && LD(KD) ? yield {
                      x: KD.x,
                      y: KD.y,
                      z: KD.z,
                      val: KD.val
                    } : yield {
                      x: ((1023 & wD) << 10 | 1023 & sD) << 12 >> 12,
                      y: ((wD >> 10 & 1023) << 10 | sD >> 10 & 1023) << 12 >> 12,
                      z: ((wD >> 20 & 1023) << 10 | sD >> 20 & 1023) << 12 >> 12,
                      val: KD
                    }, !DD && zD !== this.mutationCount) throw new gD
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
            let DD = 0;
            for (const zD of this.storage.values()) DD += zD.size;
            return DD += this.zeroStorage.size, DD
          }
        }

        function sD(DD) {
          return DD << 12 >> 12 === DD && (0 !== DD || 1 / DD > 0)
        }
        class KD {
          constructor(DD, zD, wD, pD) {
            this.x = DD, this.y = zD, this.z = wD, this.val = pD, rD.add(this)
          }
        }
        const rD = new WeakSet;

        function LD(DD) {
          return "object" === typeof DD && null !== DD && rD.has(DD)
        }

        function cD(DD) {
          return Array.from(DD.keys()).sort(((DD, zD) => DD - zD))
        }
        class gD extends Error {
          constructor() {
            super(`${pD.name} has been mutated during iteration`)
          }
        }
      },
      39698: (DD, zD, wD) => {
        wD.d(zD, {
          e: () => pD,
          f: () => rD
        });
        class pD {
          constructor(DD, zD, wD) {
            var pD;
            this.name = DD, this.max = zD, this.idleMs = wD, this.head = new LD(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
            const sD = setInterval((() => {
              this.dropIdleEntriesIfDue(Date.now())
            }), wD);
            null === (pD = sD.unref) || void 0 === pD || pD.call(sD)
          }
          setMax(DD) {
            for (this.max = DD; this.size > DD;) this.drop(this.head.prev)
          }
          partition() {
            return new sD(this)
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
          recordLookup(DD) {
            if (void 0 !== DD) return this.hits++, DD.epoch = this.epoch, this.head.next !== DD && (cD(DD), this.linkFirst(DD)), DD.value;
            this.misses++
          }
          add(DD) {
            this.dropIdleEntriesIfDue(Date.now()), DD.epoch = this.epoch, this.linkFirst(DD), this.size++, this.size > this.max && this.drop(this.head.prev)
          }
          replace(DD, zD) {
            cD(DD), this.size--, this.add(zD)
          }
          dropIdleEntriesIfDue(DD) {
            DD - this.epochStartMs >= this.idleMs && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = DD)
          }
          dropEntriesIdleSince(DD) {
            for (; this.size > 0 && this.head.prev.epoch < DD;) this.drop(this.head.prev)
          }
          drop(DD) {
            cD(DD), DD.entries.delete(DD.key), this.size--
          }
          linkFirst(DD) {
            const zD = this.head.next;
            DD.prev = this.head, DD.next = zD, zD.prev = DD, this.head.next = DD
          }
        }
        class sD {
          constructor(DD) {
            this.partitioner = DD, this.entries = new Map
          }
          get(DD, zD) {
            return this.partitioner.recordLookup(this.entries.get(rD(DD, zD)))
          }
          set(DD, zD, wD) {
            const pD = rD(DD, zD),
              sD = new LD(pD, wD, this.entries),
              KD = this.entries.get(pD);
            this.entries.set(pD, sD), void 0 === KD ? this.partitioner.add(sD) : this.partitioner.replace(KD, sD)
          }
        }
        const KD = 2 ** 25;

        function rD(DD, zD) {
          return DD > -KD && DD < KD && zD > -KD && zD < KD ? DD * (2 * KD) + zD : `${DD}|${zD}`
        }
        class LD {
          constructor(DD, zD, wD) {
            this.key = DD, this.value = zD, this.entries = wD, this.prev = this, this.next = this, this.epoch = 0
          }
        }

        function cD(DD) {
          DD.prev.next = DD.next, DD.next.prev = DD.prev
        }
      },
      39650: (DD, zD, wD) => {
        function pD(DD) {
          const zD = atob(DD),
            wD = new Uint8Array(zD.length);
          for (let pD = 0; pD < zD.length; pD++) wD[pD] = zD.charCodeAt(pD);
          return wD
        }
        wD.d(zD, {
          b: () => pD
        })
      },
      39653: (DD, zD, wD) => {
        wD.d(zD, {
          c: () => mD,
          d: () => PD,
          g: () => TD,
          i: () => uD,
          k: () => vD,
          l: () => qD,
          p: () => bD,
          s: () => ZD,
          v: () => HD,
          x: () => YD,
          y: () => eD,
          C: () => jD,
          G: () => WD,
          H: () => dD,
          L: () => kD,
          P: () => oD,
          Q: () => iD,
          S: () => yD,
          W: () => SD,
          Y: () => tD,
          Z: () => FD,
          bb: () => aD,
          db: () => ND,
          fb: () => lD,
          hb: () => xD
        });
        var pD = wD(39625),
          sD = wD(619),
          KD = wD(39657),
          rD = wD(4263);
        class LD {
          constructor(DD, zD, wD, pD, sD, LD, cD, gD, RD, AD, UD, fD, ID, BD) {
            let {
              cactusChance: GD,
              maxCactusHeight: hD
            } = ID;
            this.columnRandom = new rD.g(""), this.flowerPatchRandom = new rD.g(""), this.cactusRandom = new rD.g(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.CI = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = DD, this.seed = wD, this.grassChance = pD, this.tallGrassChance = sD, this.cornChance = LD, this.spectralGrassChance = cD, this.pineGrassChance = gD, this.pineFernChance = RD, this.jungleTallGrassChance = AD, this.catnipChance = UD, this.autumnFernChance = fD, this.cactusChance = GD, this.maxCactusHeight = hD, this.CI = zD, this.flowerInfos = [{
              flower: "Dandelion",
              patchChance: BD.dandelionChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Poppy",
              patchChance: BD.poppyChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Forget-me-not",
              patchChance: BD.forgetMeNotChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Red Tulip",
              patchChance: BD.redTulipChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Pink Tulip",
              patchChance: BD.pinkTulipChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "White Tulip",
              patchChance: BD.whiteTulipChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Orange Tulip",
              patchChance: BD.orangeTulipChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Daisy",
              patchChance: BD.daisyChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Allium",
              patchChance: BD.alliumChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Shadow Rose",
              patchChance: BD.shadowRoseChance,
              insidePatchSpawnChance: BD.defaultFlowerInsidePatchSpawnChance,
              patchRadius: BD.defaultFlowerPatchRadius
            }, {
              flower: "Bluebell",
              patchChance: BD.bluebellChance,
              insidePatchSpawnChance: .85,
              patchRadius: 8
            }, {
              flower: "Fallen Maple Leaves",
              patchChance: BD.fallenMapleLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fallen Cherry Leaves",
              patchChance: BD.fallenCherryLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Melon",
              patchChance: BD.melonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Watermelon",
              patchChance: BD.watermelonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Pumpkin",
              patchChance: BD.pumpkinChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Rice|FreshlyGrown",
              patchChance: BD.riceChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cranberries_stage2",
              patchChance: BD.cranberryChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Red Mushroom",
              patchChance: BD.redMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Brown Mushroom",
              patchChance: BD.brownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Red Mushroom",
              patchChance: BD.fatRedMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Brown Mushroom",
              patchChance: BD.fatBrownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cotton_stage3",
              patchChance: BD.cottonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 3
            }, {
              flower: "Chili Pepper Plant|FreshlyGrown",
              patchChance: BD.chiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Chili Pepper Plant|Lava|FreshlyGrown",
              patchChance: BD.lavaChiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Fallen Pine Cone",
              patchChance: BD.fallenPineConeChance,
              insidePatchSpawnChance: .4,
              patchRadius: 3
            }], this.maxPatchRadius = 0;
            for (const {
                patchRadius: KD
              }
              of this.flowerInfos) this.maxPatchRadius = Math.max(this.maxPatchRadius, KD);
            this.totalFlowerPatchChance = 0;
            for (const {
                patchChance: KD
              }
              of this.flowerInfos) this.totalFlowerPatchChance += KD;
            this.doFlowerGen = null !== BD.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new KD.c("flwrPtch", BD.flowerPatchDistApart, !1, !0, wD, 4, zD)), this.grassId = DD.Grass.id, this.tallGrassId = DD["Tall Grass"].id, this.tallGrassTopId = DD["Tall Grass|Top"].id, this.cornSeedsId = DD["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = DD["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = DD["Spectral Grass"].id, this.pineGrassId = DD["Pine Grass"].id, this.pineFernId = DD["Pine Fern"].id, this.jungleTallGrassId = DD["Jungle Tall Grass"].id, this.jungleTallGrassTopId = DD["Jungle Tall Grass|Top"].id, this.catnipId = DD.Catnip.id, this.autumnFernId = DD["Autumn Fern"].id, this.cactusId = DD.Cactus.id, this.fatCactusId = DD["Fat Cactus"].id
          }
          addBiomeFloraToColumn(DD, zD, wD, sD, KD, rD, LD) {
            if (LD + 3 >= KD && LD + 1 < KD + this.CI) {
              const cD = this.columnRandom;
              cD.reseed(`${sD}${rD}${this.seed}flora`);
              const gD = cD.next();
              if (gD < this.grassChance) {
                const pD = LD + 1 - KD;
                0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.grassId)
              } else {
                if (gD < this.grassChance + this.tallGrassChance) {
                  {
                    const pD = LD + 1 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.tallGrassId)
                  } {
                    const pD = LD + 2 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.tallGrassTopId)
                  }
                  return
                }
                if (gD < this.grassChance + this.tallGrassChance + this.cornChance) {
                  {
                    const pD = LD + 1 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.cornSeedsId)
                  } {
                    const pD = LD + 2 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.cornPlantId)
                  } {
                    const pD = LD + 3 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.cornPlantId)
                  }
                  return
                }
                if (gD < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance) {
                  const pD = LD + 1 - KD;
                  0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.spectralGrassId)
                } else if (gD < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance) {
                  const pD = LD + 1 - KD;
                  0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.pineGrassId)
                } else if (gD < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance) {
                  const pD = LD + 1 - KD;
                  0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.pineFernId)
                } else {
                  if (gD < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance) {
                    {
                      const pD = LD + 1 - KD;
                      0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.jungleTallGrassId)
                    } {
                      const pD = LD + 2 - KD;
                      0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.jungleTallGrassTopId)
                    }
                    return
                  }
                  if (gD < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance) {
                    const pD = LD + 1 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.catnipId)
                  } else if (gD < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance + this.autumnFernChance) {
                    const pD = LD + 1 - KD;
                    0 <= pD && pD < this.CI && DD.set(sD - zD, pD, rD - wD, this.autumnFernId)
                  }
                }
              }
              if (this.doFlowerGen && this.totalFlowerPatchChance > 0 && LD + 1 >= KD) {
                const gD = this.flowerPatchPointGen.getClosestPoint(sD, rD),
                  RD = (0, pD.F)(gD, sD, rD);
                if (RD < this.maxPatchRadius) {
                  const pD = this.flowerPatchRandom;
                  pD.reseed(`${gD[0]}${gD[1]}${this.seed}flowerpatch`);
                  const AD = Math.floor(pD.next() * this.totalFlowerPatchChance);
                  let UD = 0,
                    fD = 0;
                  for (; UD <= AD;) UD += this.flowerInfos[fD].patchChance, fD++;
                  const ID = this.flowerInfos[fD - 1];
                  if (RD < ID.patchRadius && cD.next() < ID.insidePatchSpawnChance) {
                    const pD = ID.flower;
                    DD.set(sD - zD, LD + 1 - KD, rD - wD, this.blockMetadata[pD].id)
                  }
                }
              }
            }
            if (0 !== this.cactusChance) {
              const pD = this.cactusRandom;
              pD.reseed(`${sD}${rD}${this.seed}cactus`);
              const cD = pD.next();
              if (cD < this.cactusChance) {
                const gD = Math.floor(pD.next() * (this.maxCactusHeight - 1)) + 1,
                  RD = Math.min(LD + gD + 1, KD + this.CI),
                  AD = cD < this.cactusChance * (2 / 3);
                for (let pD = Math.max(LD + 1, KD); pD < RD; pD++) DD.set(sD - zD, pD - KD, rD - wD, AD ? this.fatCactusId : this.cactusId)
              }
            }
          }
        }
        var cD = wD(39635),
          gD = wD(39647),
          RD = wD(39104),
          AD = wD(39650);

        function UD(DD, zD, wD) {
          const pD = new RD.d;
          for (const KD of wD) {
            const DD = pD.get(KD.chunkX, KD.chunkY, KD.chunkZ);
            if (!(0, sD.B)(DD)) throw new Error(`Duplicate chunk at ${KD.chunkX}, ${KD.chunkY}, ${KD.chunkZ}`);
            pD.set(KD.chunkX, KD.chunkY, KD.chunkZ, KD.rle)
          }
          return new gD.e(DD, {
            x: 0,
            y: 0,
            z: 0
          }, zD, pD)
        }
        const fD = {
          treeJungleLarge1: UD("treeJungleLarge1", {
            x: 31,
            y: 33,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }]),
          treeJungleLarge2: UD("treeJungleLarge2", {
            x: 28,
            y: 35,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }]),
          treeMapleLarge1: UD("treeMapleLarge1", {
            x: 24,
            y: 27,
            z: 24
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          treeMapleLarge2: UD("treeMapleLarge2", {
            x: 32,
            y: 34,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0AAdIBAgAB0gEYAAHSAQEAAdIBAQAE0gEXAAjSARMAAtIBAgAB0gECAAHSAQQAAtIBEgAB0gEBAAHSAQMAA9IBAwAB0gETAAHSAQoAAdIBDAAD0gECAAHSAQEAAdIBGAAD0gEBAATSARkAAtIBAeMPAdIBAQAD0gEWAAHSAQEAAtIBBQAB4w8YAAHjDwHSAQEAAdIBHwAB0gEBAAHSAaoFAAHSAQIAAdIBAQAB0gEOAAHSAQYAAdIBAwAB0gECAALSAQHjDw0AAdIBBAAC0gEEAAHSAQIAA9IBAQAC0gENAAHSAQQAAeMPAQAB0gEBAAfSARQABNIBAQAC0gEBAAPSAQEAAtIBFAAC0gECAAPSAQEAAdIBAQAB0gEMAAHSAQEAAdIBAeMPAdIBAwAB0gEBAAHSAQMAAdIBEQAB0gECAAHSAQHjDwEAAtIBFgAD0gEBAAHSAQMAAtIBFgAB0gECAALSAQEAAdIBGQAB0gEFAALSAQEAAdIBHAAD0gEdAAHSAR8AAdIB3QQAAdIBAQAB0gEGAAHSAQUAAQkDAAHSAQwAA9IBBAAB0gEBAALSAQMAAdIBAQAB0gEBAAHSAQ4AAtIBBAAB0gEBAAHSAQMAAuMPAQAB0gEB4w8B0gEB4w8MAAHSAQUAAdIBAQAB0gECAAHSAQEABdIBFAAB0gEBAAHSAQMABdIBAgAB4w8UAAHSAQIAAtIBAQAD0gEPAAHjDwcAAdIBBAAC0gEQAALSAQEAAtIBAQAB0gEXAAHjDwEABdIBAQAB0gEYAAHSAQHjDwHSAQEAAtIBAQAC0gEWAAXSAQIAAdIBGgAC0gEfAAHSAQIAAdIBAQAB0gEdAAHSAb0DAAHSAQIAAdIBHQAB0gF9AALSAQEAAdIBBgAC0gEBAAHSAQEAAQkBAAHSAQ0AAdIBAgABCQHSAQQAAtIBAQAB0gEBAAHSAQMAAtIBDgAC0gEGAALSAQIAAtIBAgAB0gENAAHSAQEAAdIBAQAB0gECAAEJAtIBAQAB0gECAAHSAQEAAtIBAQAB0gEMAAHSAQcAAdIBAwAG0gEVAAHSAQQAA9IBAQAB4w8B0gEcAAHjDwLSAQ4AAtIBAeMPAQAB0gEBCQIAAtIBFgAE0gEBAAHSAQEAA9IBFwAB0gEBAAPSAQEAAdIBAQAB0gEWAALSAQEABNIBGQAB0gEBAAXSARkAAdIBAQAC0gEBAAPSARsAAdIBAgAB4w+9AwAC0gEdAAPSAQEAAdIBHAAB0gFgAALSAQMAAQkB0gEBAAHSAQIAAgkDAAHSAQsAAdIBAQkB0gEBCQYABtIBAQABCQEAA9IBCQAB0gEBAAXSAQQABNIBAeMPBAAB4w8B0gEMAAHjDwHSAQEAAtIBAgkD0gEDAAHSAQYAAdIBCwAB0gEFAAHSAQEJBAAC0gEBAAHSAQQAAdIBEQAD0gEDAAPSAREAAtIBAQkDAAHSAQEAAdIBBQAC0gENAAHSAQEAAtIBAgABCQHSAQEAAdIBFgAB0gEB4w8G0gEBAAHSAQEAAdIBFQAC0gECAAPSAQEAAdIBFwAC0gEBAATSARkAAtIBAQAG0gEYAAHSAQEABNIBGwAB4w8BAAHSAQEAAdIBvAMAAdIBAQAD0gEbAAPSAR4AAtIBAeMPSQAB0gERAALSAQIJBAABCQMAAgkB4w8DAAHSAQwAAtIBAQkB0gEBAAHSAQEJBAAB0gEDAALSAQIAAeMPAdIBDgAD0gEBCQMAAdIBAwAC0gECAAHSAQEAAtIBCgAB0gEBAATSAQIAA9IBAgAC0gEB4w8BAAHSAQEABNIBCwAB0gELAAHSAQIAAdIBAgAB4w8C0gERAAHjDwLSAQMAAdIBAgAB0gEBAALSAQ0AAdIBAQkBAAHjDwIAAdIBAeMPAwAB4w8B0gEQAALSAQEABdIBAeMPAQAB0gEVAALSAQMABdIBGgAC0gEB4w8B0gECAAHSARUAAdIBAwAB0gEBAALSARkAAeMPAdIBAeMPAdIBAQAB0gEcAAXSARsABNIBHgAB4w+eAwAB0gEBCQHSAR0AAdIBAQAC0gEbAALSAQEAAdIBHQAB0gEFAAEJHwADCQQAAdIBEQAB0gEBAAEJBwABCQEAAdIBAQAB0gEQAAPSAQEAAdIBAQkHAAHj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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }]),
          treePalmLarge1: UD("treePalmLarge1", {
            x: 11,
            y: 14,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
          }]),
          treePalmLarge2: UD("treePalmLarge2", {
            x: 13,
            y: 16,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcAAeYP+aQBAA==")
          }]),
          treePineLarge1: UD("treePineLarge1", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("jAIABNABHQAC0AEB5A8B0AHbBwAB5A8F0AEBqA0ZAAHQAQHkDwPQAQHkDwHQARsAAtABnwcAAtABGgABqA0I0AEXAAXQAQEAA9ABEgAC0AEFAALQAQYAAdABAeQPAdABtQEAA9ABHgAB0AG9BQAC0AEB5A8E0AEXAATQAQLkDwHQAQHkDwPQARIAAtABAeQPBNABAwAF0AEPAAXQAQoAAeQPAtABAeQPAdABDQAC0AEOAALQAZQBAAHQAQHkDwPQARwAA9ABvAUAAdABAagNBdABFQAN0AERAAPQAQHkDwPQAQQABtABDQAB5A8CCgPQAQoAA9ABAQoC0AELAALQAQ8AA9ABdAAD0AEcAAXQAd4BAAHQAfsDAAnQARMABNABAeQPCtABDwAB0AECCgPQAQHkDwPQAQIAA9ABAeQPAdABAQoB0AEMAAHkDwLQAQHkDwHQAQsABtABCwAB0AERAALQAXMAAagNBNABGwAF0AEDAAHQARMAA9ABCAAD0AG4AQAD0AEeAAHQAdgDAAEKAQAC0AEB5A8C0AEB5A8B0AEB5A8B0AETAAHkDwHQAQEKBdABAeQPBtABAQoC0AENAATQAQHkDwjQAQEABtABCwAE0AEEAAXQAQMAAdABAeQPBNABcwAD0AEB5A8aAAfQARcAAdABAeQPBNABAeQPAtABAeQPAdABAgoRAAHQAQEKAdABAuQPBNABAQAB5A8F0AESAALQAQgAA9ABlwEABdABHAAD0AHXAwAB5A8D0AEB5A8C0AEBqA0D0AEB5A8TAALQAQEKCtABAQoD0AEBqA0MAA7QAQEABdABCwAC0AEGAAbQAQMABdABFAAD0AE8AAGoDQHQARsAAQoF0AEBqA0B5A8YAAPQAQHkDwTQAQHkDxYAAQoB0AEB5A8I0AEBCgHkDxEAAeQPAdABAQoK0AEBCgLQAREAAtABAwAD0AECAATQAXgAAdABAagNAdABHAAF0AEYAArQAZoBAAHQAZ8CAAHkDxkAA9ABAeQPAagNBtABAeQPAtABEQAK0AEB5A8H0AELAAPQAQHkDxLQAREAB9ABBwAB0AESAATQAR0AAdABAeQPHQAF0AEZAArQARUABtABAagNA9ABAQoVAAHQAQEKCNABAQoC0AERAAPQAQHkDwEAAdABAeQPCdABEQAB0AEEAAPQAQIAAtABAQAB0AF3AAXQARgAA9ABBQAB0AEXAATQAQIABdABFgAD0AECAAPQAXoAA9ABHgAB0AFeAAMKnQEABNABFQAE0AEB5A8J0AEB5A8D0AELABbQAQoADNABAuQPCdABEAAE0AEB5A8B0AEEAALQAQMAAdABEgABqA0CCgHQAR8AAQogAAPQARcAAdABAagNBQAC0AEBqA0B0AETAALQAQHkDwEKAtABBAABqA0D0AESAAHkDwbQAQQAAdABAeQPAdABEgAC0AECAAXQAQIAA9ABFwAG0AEB5A9aAAPQARgACtABFgAD0AEBAATQAQIAAtABFAAC0AEBCgLQAQIABNABAeQPFQAB0AEB5A8C0AECAAHkDwPQAR0AA9ABWAAC0AEBqA0C0AEcAAPQAR0AAagNAdABPAAHChkAAacNBQobAAHbAQMKAagNGwAB2wEBAAEKHQAB2wEfAAbQARMAD9ABAagNA9ABCgABqA0T0AEB5A8C0AEKAAbQAQHkDxDQAQsAA9ABAQAD0AECCgLQAQMAA9ABAwAB0AEUAAEKAdABHwABCgGoDR8AAQoD0AEVAAPQAQUAAdABAeQPAtABEwAB0AEBAATQAQQABNABAagNEQAD0AEB5A8D0AEEAAbQAQ4AAtABAQAH0AECAAPQAQEAAdABFgAB0AEBAAHQAQIAAdABWAAD0AEBqA0C0AEXAAXQAQEABtABEwAE0AEBCgLQAQHkDwXQARQABdABAagNAQAF0AEVAAPQAQIAAd4BBdABGQAC3gEF0AEZAALeAR4AAt4BHAAC0AEC3gEBqA0B0AEB5A8ZAALQAQLeAQLQARsAAdABPQAHChkABwoaAAUKAacNGQAB2wEFChoAAdsBBQoaAAHQAQUKAdABEAAM0AEDCgfQAQkADdABAwoK0AEHAArQAQHkDwHQAQIKBtABAeQPAtABAeQPAdABCQAC0AEB5A8E0AEB5A8B0AEDCgGoDQIAAdABAQAB5A8EAALQAQkAAtABBwACCh4AAgoB0AEcAAHdAQMKA9ABFQAE0AEB3QEDCgXQAREAAagNBtABAwoD0AEB5A8B0AEB5A8B0AENAAHkDwPQAQHkDwTQAQIKAdABAgAH0AEMAAjQAQEKAtABAgABqA0E0AEB5A8RAATQAQIKAwAB0AEB5A8B0AEYAAIKAwAB0AEaAAIKGwABqA0C0AECCgHQAQGoDRcAA9ABAgACCgXQARIAAtABAuQPAtABBAoF0AESAAXQAQEAAgoD0AEB5A8C0AEUAAPQAQEAAgoF0AEZAAIKBdABGQACCgEAAeQPGwAB0AECCgHQARoAAtABAQACCgEAA9ABGAAB0AEECgLQARoAAdABPAAJChgABwoZAAcKGQAHChkABwoZAAHQAQUKAeQPAdABDwAG0AEBqA0E0AEECgPQAQHkDwHQAQLkDwkABtABAeQPBdABBAoF0AEB5A8D0AEBqA0GAAzQAQQKAtABAeQPCNABCAAB5A8F0AEDAAHQAQIKAdABCQAC0AEJAALQAQHkDwUAAdABAgoB0AEcAAHQAQIKAtABGAAB0AEBqA0C0AEECgPQARMAAdABAeQPBNABAgoG0AEBqA0PAAXQAQHkDwLQAQIKCdABCwAI0AEB5A8B0AECCgvQAQoACdABAwoCAAPQAQEAAuQPAdABEAAE0AECCgMAAtABGAAB5A8CCgMAAdABGQAB0AECCgHQARoAAtABAwoC0AEWAATQAQIAAgoE0AEBqA0RAAjQAQIKAdABAeQPAtABAeQPAtABEAAB0AEB5A8F0AECCgfQARMABNABAgoE0AEB5A8B0AEXAAMKBdABGAAB0AECCgLQARoAAagNAdABAwoZAAPQAQEAAgoBAAHkDwGoDQLQARYAAtABAeQPAgoBqA0D0AEYAALQAQIKOgAKChYAAagNBwoBvgcYAAcKGQAHChkABwoYAAHQAQcKEAAB0AEBqA0I0AEFCgHkDwTQAQGoDQHQAQkAAtABAeQPCNABBQoF0AEB5A8E0AEGAALQAQHkDwfQAQEABQoB5A8B0AEBAAjQAQgABdABBAAB5A8CCgHQAQQAA9ABAgAC0AEJAAPQAQUAAdABAgoB0AEbAALQAQIKAtABGAAC0AEBCgHQAQIKAtABAeQPAtABEwABqA0F0AECCgLQAQEABNABDwAC0AEB5A8F0AECCgjQAQwAC9ABAQoK0AEKAAvQAQEKAtABAeQPA9ABAQAB0AEB5A8RAALQAQHkDwLQAQEKAdABAgAC0AEYAAHQAQIKAwAB0AEZAAHQAQIKGwAD0AEDChcAAagNA9ABAgACCgXQARIAB9ABAgoB0AEC5A8D0AEBqA0B0AEQAAfQAQEKBdABAeQPAdABEwAB0AECAAMKBdABFQAB0AECAAEKAdABAQoE0AEZAAMKAdABHAADCgHQARgAAtABAQoC0AECCgEAAdABAuQPFgAE0AECCgPQARoAAdABAgoB0AE5AAkKGAAHCgK+BxcABwoB2wEYAAcKAdsBFwAB0AEGCgGnDQHbARcAAdABBgoRAAHkDwnQAQIKAdABAgoB0AEBAAXQAQkAB9ABAeQPBNABAQoB0AECCgHkDwnQAQYAAdABAeQPA9ABAeQPA9ABAgAB0AEDCgzQAQkABNABBAAB0AECCgHQAQQAA9ABAgAB0AEB5A8SAAIKHQAB0AECCgHQARkABNABAgoD0AEB5A8UAAXQAQHkDwIKBtABEAAD0AEBAAXQAQIKB9ABDAAT0AEB5A8B0AEMAAjQAQHkDwfQAQIAAdABEwAG0AEBqA0C0AEYAAPQAQEKAwAB0AEZAAHQAQIKGwABqA0C0AECChkABNABAwoD0AEB5A8B0AETAAPQAQGoDQHQAQQKBdABAeQPEQAD0AECAAEKAdABAQoBAAXQARQAAdABAgADCgLQAQHkDwLQARUAAdABAgAC0AEBCh4AAgoB0AEcAAHQAQIKAdABGQAE0AECCgEAAtABGAAC0AEECgHQAR0AAagNAdABOgAHChkABwoCvgcYAAUKGwAFCgG+BwHbARkABQoaAAG+BwUKEgAB0AECAALQAQHkDwbQAQEKAdABAwAE0AEKAAvQAQGoDQHQAQEKCtABCAAI0AEEAAIKC9ABCwAD0AEFAAIKBQAG0AETAAEKHwAC0AEaAAHkDwjQARYABdABAeQPB9ABEQABqA0J0AEBCgXQAQ4AAeQPBNABAeQPBNABAeQPCNABDgAB0AEBAATQAQHkDwHQAQLkDwTQARcACdABGAAD0AEBCh0AAdABAagNHQAB0AEBqA0cAAHkDwLQAQMABNABFQAB0AEB5A8EAALQAQEKBNABEwAC0AEDAAHkDwTQAQHkDwLQARQAAdABAgAE0AEB5A8C0AEWAAbQAT8AAdABGwABqA0G0AEZAAfQAVkABwoaAAUKAr4HGgADCh0AAb4HAgoCvgccAAGoDQHbARsAA74HAQoB2wEXAAHQAQEABNABBgAE0AELAArQAQUAB9ABAeQPCgAB5A8B0AEBAAHkDwPQAQUABdABAQAF0AEPAAHQAQgAAdABBQAC0AEB5A9QAAHQAQGoDQTQAQHkDwGoDRYAC9ABFAAB0AEBAAHQAQEKBtABAQoC0AEB5A8SAAHQAQHkDwXQAQHkDwTQAQHkDwLQAREADNABAeQPAdABFQAH0AEB5A8D0AEWAAHQAQHkDwTQARwAAdABAagNHQAB0AEdAAHQAQHkDwMAAdABAagNAdABFgAC0AEB2wEDAALQAQEAA9ABFAAC0AEB2wECAATQAQEKAtABFQAC0AEBAAfQARcABNABAgAD0AFZAAHkDwTQARsABNABWwABqA0DCiAAAr4HOwAEvgc7AAO+BwHbARkAA9ABAeQPBQAB5A8C0AERAATQAQHkDwHQAQUAAeQPBdABDQAH0AEEAAHQAQHkDwPQAQEAA9ABAuQPEAAB0AENAAHQAVQAAdABAeQPAtABAeQPGQAJ0AEVAAHQAQEKCNABAQoUAALQAQEKAeQPB9ABAQoC0AERABDQAREAAdABAwAB0AEB5A8I0AEYAAHkDwLQAR4AAdABOwAG0AEZAAnQARYAA9ABAeQPCNABFQAB5A8J0AEdAALQAVsAAtABAagNHQAC0AGaAgAB5A8C0AEEAAPQARMAAtABAQoE0AEBAAXQAQEKAtABDgAU0AELAAHQAQHkDwHQAQMAA9ABAwAD0AEEAALQAVYAAtABGwAB0AEBAAHkDwTQARYAAQoE0AEB5A8F0AEUAAzQAQEKEgAC0AEBCgrQAQEKAtABEQAC0AEEAAPQAQEABNABdQAC0AEBqA0C0AEaAAfQARkACNABAeQPAdABmwEAAdABugIABdABAeQPA9ABFQABCgzQAQEKEAAT0AELAATQAQ4AA9ABDAAB0AFoAAHkDwGoDQLQARoAA9ABAeQPA9ABFQABCgPQAQEABdABAeQPFAAB0AEBCgXQAQHkDwbQAQEKAdABEgAC0AEDAAPQAQEAA9ABeAAB0AEBqA0B0AEcAAXQARsABNAB2gMAA9ABAagNA9ABAagNAdABFQAE0AEB5A8J0AEQAAHQAQEKAeQPAdABAeQPBtABAeQPBNABAQoB0AEMAAbQAQMAAtABBQAF0AEMAALQARAAAtABdAABqA0E0AEbAAXQARYAAtABAeQPAwAD0AECAAPQAbcBAAPQAR0AA9AB2gMAAagNB9ABFwAB5A8C0AEB5A8H0AEBqA0RAAvQAQEABdABDQAE0AEB5A8B0AEDAALQAQHkDwQAAdABAeQPAdABAQoB0AEMAAPQAQ8AAtABdQAB5A8C0AEcAAXQARsABdABvAEAAdAB/AMABtABGAAJ0AEVAArQAQEAA9ABAeQPDgAB0AEB5A8E0AEDAAPQAQQABdABDQAC0AEOAALQAXcAAdABHQAE0AEBqA0cAAPQAbsFAAPQARwAB9ABFwAH0AECAAHQARIABdABCQAE0AG3AQAD0AEeAAHQAdsFAATQAQGoDQHQARkAA9ABAeQPBdABFgAC0AEHAALQAbgHAAXQARoABdABAeQPAdABGQAJ0AG4BwABqA0E0AEbAAXQARwABdABvAcAAdABHgAD0AEeAAPQAa8lAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4AAtABHgAB0AEfAAHQAb0GAAHQAQEAAagNAdABGgAD0AEB5A8E0AEaAAHQAQEKA9ABHAAD0AG7BwAG0AEcAAHQAQEAAdABj4cBAA==")
          }]),
          treePineLarge2: UD("treePineLarge2", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("y1AAA9ABvAcAAtABAagNPAABqA0F0AEbAAHkDwLQAZwHAAPQAQHkDx4AAtABGwAG0AEbAAHQAQHkDwHQAQEKAdABHAAD0AH7BgAD0AECCh0AAdABAgoB0AEaAAHkDwLQAQIKAtABGgAB0AEDCgLQARoAAtABAgoB0AEcAAPQAR4AAdABHwAB0AGcBgAB0AEB5A8B0AECCgHQAQGoDRsAAdABAgoB0AEaAAPQAQIKA9ABGQAC0AEDCgHQARoAAdABAwoB0AEcAAHQAQEKAdABHQAB0AEB5A8B0AEdAALQAZwGAAfQARwAAdABHAAC0AEB5A8F0AEZAALQAQEKAdABAeQPAtABGgAB0AEB5A8BCgHQAR0AAtAB2wYAB9ABOgAC0AEB5A8C0AEdAAHQAQHkDwLQAR0AAdAB/QYAA9ABAeQP8ncA")
          }]),
          treeSpectralLarge1: UD("treeSpectralLarge1", {
            x: 37,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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AuAMAv8MAwAD/wwTAAH/DAEAA+AMBQAC4AwB/wwTAAH/DAEAA+AMBAAF/wwHAAL/DAkAAv8MAuAMAf8MAQAB/wwCAAH/DAHgDAEAAeAMCAAD/wwDAAHgDAQAAf8MAgAB4AwFAAT/DAgABP8MAQAD4AwDAAH/DAEAAf8MAQAB/wwEAAHdDALgDAH/DAcABv8MA+AMAwAB/wwBAAHgDAH/DAEAAeAMBwAB/wwFAALgDAP/DAMAAuAMCAAB/wwLAAH/DAEAAf8MAuAMBQAB/wwXAAHgDAL/DBsAAf8MAgAB/wwB4AwB/wwGAATgDAQAAf8MDgAB4AwBAAH/DAYABOAMBAAB/wwSAAPgDAMABv8MAQAB/wwNAAH/DAHgDAIAA+AMAf8MAgAH/wwBAAH/DMcDAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAC/wwB4AwB/wwUAALgDAH/DAUAAf8MAuAMAv8MEgAE4AwFAAb/DBEAA+AMAQAB/wwFAAHgDAb/DAMAAv8MCAAB/wwD4AwD/wwDAAHgDAMAAf8MAwAC4AwCAAP/DAMAAuAMAgAD4AwBAAHgDAH/DAHgDAQAAf8MBgAC/wwC4AwD/wwB4AwCAATgDAEAAf8MAwAB/wwLAAP/DAEAAuAMBQAD4AwCAAH/DAMAAf8MDgAB4AwD/wwFAAHgDBcAAf8MAeAMAf8MBgAB4AwUAAH/DAHgDAH/DAcAA+AMDAAB/wwIAAHgDAQAAeAMAf8MAQAB3QwD4AwCAAH/DAgAAf8MAwAB/wwIAAPgDAIAAd0MA/8MAQAB/wwIAAH/DAMAAf8MAwAB/wwB4AwB/wwCAALgDAL/DAEABv8MiQUAAuAMFAAC4AwGAAL/DAPgDAEAAf8MDwAD4AwIAAT/DALgDA4AB+AMBAAB/wwBAAL/DAEAAv8MAuAMAf8MAQAC4AwBAAHgDAMABuAMAv8MAQAB/wwBAAH/DAQAAf8MAeAMAwAC4AwBAAbgDAEABuAMAQAB/wwOAAL/DAEAA+AMAQAH4AwDAAH/DBEAAf8MAuAMAf8MBQAB4AwFAAP/DAEAAf8MDQAB/wwGAAPgDAQAA/8MAQAB/wwMAAL/DAUABOAMBAAD/wwBAAH/DAwAAf8MAwAB/wwD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/wwCAAL/DAHgDAH/DAkAAv8MAgAB/wwDAAL/DAEAAf8MAuAMAQAB/wwBAAHgDAEAAeAMAf8MAeAMAf8MCQAD/wwFAAHgDAEAAv8MAQAC4AwB/wwB4AwB/wwCAAHgDAL/DAwAAv8MBAAB/wwB4AwD/wwBAAL/DAEAAf8MAQAD/wwJAAL/DAHdDAYAAf8MAQAB3QwBAALgDAL/DAEAA/8MVgAH4AwaAAXgDPgDAAHgDB8AAuAMIAAB4AwyAAH/DAEAAf8MHwAB4AwdAAH/DAEAAv8MAQAB/wwbAAP/DAHgDAoAAuAMEAAB4AwBAAH/DAgAAv8MBOAMBQAB/wwUAAH/DAEAAf8MBuAMAf8MAgAB/wwSAAn/DAHgDAEAA+AMEgAB/wwBAAL/DAHgDAEAAf8MAeAMAQAC/wwB3QwUAAH/DAMAAd0MAf8MAd0MAf8MAQAB3QwB/wxYAAXgDJAEAAH/DB8AAf8MEgAB/wwMAAH/DBIAAf8MDAAB/wwKAAH/DAcAAf8MCwAB/wwB4AwKAAH/DAcAAf8MCwAB4AwB/wwBAAH/DAgAAf8MBwAB/wwLAAL/DAoAAf8MBwAB/wwOAAH/DAgAAf8MAeAMBgAB/wwNAAH/DAcAAf8MAQAG4AwB/wwB4AwB/wwYAAH/DAfgDBcAAeAMAv8MA+AMAv8MAQAC/wwVAAHgDAH/DAEAA/8MAQAD/wwYAAL/DAHdDAH/DAHgDJkGAAH/DBMAAf8MAQAB4AwJAAH/DBMAAeAMCwAB/wwfAAL/DAMAA+AMAf8MFAAC4AwBAAP/DAbgDAH/DBMAAv8MAQAC4AwD/wwD4AwC/wwUAAv/DBkAA/8MAd0MAf8MAeAMAf8M2gUAAf8MHwAB/wwCAAH/DBMAAf8MCAAB/wwCAAH/DAIAAf8MEAAB/wwIAAH/DAIAAf8MAgAB/wwQAAH/DAcAAf8MAeAMAgAB/wwCAAH/DBAAAf8MAQAD/wwHAAH/DAEAAv8MDwAB/wwC4AwD/wwB4AwBAAH/DAEAAf8MAQAD4AwBAAH/DA8ABv8MAuAMAgAB/wwB4AwB/wwC4AwC/wwRAAH/DAEAAv8MAeAMAf8MAeAMBP8MAeAMAQAB4AwB/wwRAAHdDAL/DAHdDAIAAd0MAf8MAt0MAQAD/wyvBgAB/wwfAAH/DAMAA/8MAwAB/wwVAAH/DAIABf8MAgAB/wwEAAH/DBAAAf8MAQAB4AwF/wwB4AwBAAH/DAIAAf8MAgAB/wwQAAf/DALgDAH/DAHgDAX/DBEAAf8MAQAD/wwC4AwD/wwCAAHdDAH/DAHdDBIABf8MAgAB3QzZBQAB/wwfAAH/DB8AAf8MCwAB/wwTAAH/DAsAAf8MEgAB4AwD/wwJAAH/DBEABv8MCAAB4AwQAAH/DAHgDAX/DALgDAQAAv8MAeAMEAAH/wwF4AwBAAHgDAH/DBEAAd0MBv8MA+AMAf8MBAAB/wwRAAHdDAH/DALdDAL/DAHdDAL/DEgA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("w18AAf8M3wcAAf8MPAAB/wzBBgAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MHQAB4AwBAAH/DL0HAAH/DAHgDAEAAf8MHQAD4AwB/wwbAAX/DPsFAAH/DB8AAf8MYAAB/ww/AAPgDAH/DBsABeAMHAAD4AycBwAB/wwfAALgDAP/DBsABOAMHAAC4AwD/wybBgAB/wwfAAH/DCIAAf8MHAAB/wwB4AwBAAH/DBwAAf8MAQAC/wwcAAHgDAIAAf8MHAAD4AwB/wwcAAHgDAP/DJwFAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MXwAB/wwfAAHgDAH/DB4AAf8MHwAC/wwBAAHgDBwABP8MnAYAAf8MfwAB/wwfAAH/DB8AAf8MAeAMAf8MHQAB/wygDwAB/wwfAAH/DB8AAf8MHwAB/wzeDgAB/ww/AAH/DL8IAAH/DB8AAf8M3wYAAf8MHwAB/wwfAAHgDP8wAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("EgAB/wwfAAH/DN8HAALgDAH/DB0AAeAMAd0M3QcAAf8MA+AMAf8MHAAB/wwB4AwC3QwcAAH/DAHgDB4AAd0MngcAAf8MA+AMAf8MGwAC/wwB4AwB/wwcAAH/DALgDAL/DBsAAf8MnQcAAeAMAQAE4AwB/wwEAAL/DBQAAv8MAuAMBQAB4AwXAAH/DAHgDAL/DAUAAd0MAf8MFQAD/wwB3QwdAAH/DP0GAAH/DAPgDAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAC/wwB4AwBAAHgDAQAAd0MAuAMEwAB4AwD/wwB4AwB/wwFAAL/DBUAAf8MAQAB3QwB/wwGAAH/DBQAAf8MAd0M/QYAAf8MAeAMA/8MAwAD/wwC4AwB/wwB4AwQAAH/DAEABP8MBAAC/wwB4AwC/wwRAAb/DAQABP8MFAAC/wwJAAHdDBQAAv8M/QYAAeAMBf8MBAAC4AwTAAf/DAMAAuAMA/8MEQAH/wwDAAHdDAIAAf8MEwAE/wwB3QwcAAHdDPwGAAH/DALgDAX/DAEAAeAMBP8MAQAC4AwPAAL/DAHgDAX/DAIAAv8MAt0MAf8MEQAB/wwB4AwG/wwKAAH/DA8AAf8MAd0MA/8MCwAB/wwPAAH/DA8AAf8M5gYAAv8MBgAC4AwF/wwB4AwBAAX/DAsAAf8MBQAB/wwBAAHgDAX/DAMAAv8MAd0MDAAB3QwFAAHgDAEABv8MEAAB/wwIAAH/DAHdDAEAAf8MAd0MAf8MGgAB/wz2BgAB/wwHAAH/DALgDAEAA/8MAQAH/wwDAAH/DAQAAv8MAuAMBAAC/wwB4AwB/wwBAAP/DAEAAv8MAd0MA/8MBAAB/wwEAAH/DAHgDAHdDAL/DAIAA/8MAuAMAQAD/wwLAAH/DAQAAv8MBwAB4AwB/wwB3QwBAAH/DAwAAv8MHwAB/wzmBgAB4AwBAAL/DAMAAf8MAuAMAf8MAeAMAgAI/wwJAAL/DALgDAQABP8MAwAH/wwKAAP/DAQAAv8MAeAMAf8MBQAB3QwC/wwEAAL/DALgDAYAAf8MBQAC4AwD/wwMAAPgDA0AAd0MEAAC3QzpBgAC4AwB/wwBAAH/DAEAAeAMAf8MAwAH/wwBAAH/DAsAAeAMAf8MAQAB/wwBAAL/DAHgDAH/DAMABf8MAwAB/wwB4AwB/wwIAAP/DAMAAf8MAd0MAv8MBAAD/wwB3QwB/wwCAALgDAEAAf8MBwAC/wwDAAH/DAIAAt0MCAAB/wwDAAH/DAEAAf8MHwAB/wziBgAB/wwDAAH/DAEAAf8MAQAD/wwDAAH/DAHdDAH/DAEABv8MAQAB4AwGAAL/DAIAAv8MAQAE/wwB4AwB/wwB4AwB/wwDAAb/DAIAAuAMBAAC/wwCAAf/DAHdDAP/DAQACP8MBgAB/wwBAAL/DAkAAf8MCAAB3QwC/wwIAAP/DBMAAv8MCQAB/wwB3QwUAAH/DAHdDMwGAAX/DAEAAv8MAeAMAwAE/wwE4AwBAAH/DAMAAf8MAeAMAf8MBOAMBf8MAuAMAf8MBAAE/wwCAALgDAQAAf8MAQAB/wwC4AwI/wwBAAHdDAH/DAUAAd0MAv8MAQAC4AwB/wwB4AwEAAb/DAIAA/8MCgAD/wwB4AwC/wwGAAX/DBEAAf8MAd0MAeAMAQAC/wwEAAHdDAEAA/8MEwAB3QwIAAL/DBYAAf8MpgYAAf8MAQAE4AwF/wwBAAH/DAEAAf8MBgAF4AwBAAL/DAIAAeAMAf8MBOAMBv8MAQAC4AwGAAH/DAEABeAMBQAE4AwH/wwJAAH/DAEAAf8MAQAE4AwCAAHgDAH/DAPgDAL/DAHdDAH/DAHdDAL/DAoAAf8MAgAC/wwBAAHgDAH/DAMAAv8MAQAB/wwBAAH/DBAAAv8MAQAC/wwB4AwBAAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAF/wwEAAHdDAH/DBUAAv8MAd0MqAYAA+AMBf8MCQAB/wwE4AwBAAH/DAEAAf8MAwAB/wwBAATgDAX/DAkAAeAMBP8MA+AMAf8MAgAC/wwC4AwBAAf/DAkAAd0MBP8MA+AMAgAB/wwCAAH/DAHgDAL/DAHgDAHdDAL/DAHdDAsAAf8MAeAMA/8MA+AMAQAB3QwBAAT/DAHgDAH/DBAAAd0MAQAB/wwBAAP/DAIAAv8MAwAC/wwRAAH/DAHdDAIAAf8MAeAMBAAB/wwC3QwVAAL/DKgGAAH/DAPgDAf/DAcACP8MBgAH/wwBAAP/DAYABv8MAQAC4AwEAAL/DAMABP8MCwAC/wwB3QwB/wwE4AwDAAb/DBIAAf8MBOAMBAAB4AwB/wwBAAHgDAL/DBEAAeAMAf8MAuAMAf8MBAAB/wwB3QwC/wwB3QwSAAL/DAHgDAH/DAcAAd0MFQAC/wwB3QwB/wypBgAB/wwB3QwB/wwBAAX/DAcABP8MAQAB4AwB/wwGAAL/DAUABf8MBgAB/wwB3QwB/wwB4AwCAAHgDAgAAv8MBQAB/wwB3QwB/wwKAAL/DAPgDAYAA/8MEgAC/wwD4AwGAAHgDAH/DBMAAf8MAeAMA/8MBgAC/wwTAAHdDAP/DB4AAv8MqgYAAd0MAgAG/wwIAAHgDAEAAeAMAf8MAeAMAf8MDQAD/wwB3QwB/wwIAAP/DAEAAuAMDgAC/wwLAAL/DAPgDBwAAf8MA+AMHAAD/wweAAHdDAH/DAHdDMwGAAb/DAcAAv8MAgAB/wwQAAL/DAoAAd0MAv8MAQAB/wwB4AwOAAHdDA0AAv8MAuAMHQAC/wwB4AwcAAH/DAHdDAH/DAHgDB4AAv8MzgYAAv8MAd0MCQAB/wwBAAH/DCIAAeAMHgAC4AwdAAL/DAHgDBwAAf8MAQAC/wweAAHdDP8GAAL/DB8AAeAMHQAC/wwB4AwfAAHgDP4GAAH/DB8AAf8MHwAB4AwgAAH/DB4AAv8M3wcAAf8MgD8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("oDgAAf8MHwAB/wwfAAHgDB8AAv8M3gcAAeAMAf8MHgAB4AwB3QyfBwAB/wwfAAH/DB4AAeAMAf8MHgAB/wwB4Ay+BwAB4AwfAAHgDAH/DJ4PAAH/DP8HAAH/DAIAAv8MHAAB/wwB3QzdBwAC/wwBAAH/DAHgDBwAAd0MAeAMAd0M3AcAA+AMAv8MGwAB3QwB/wwB3QwC/wzbBwAE/wwB4AwbAAHdDAL/DAHgDNwHAAL/DAHgDAH/DBwAAf8MAd0MAf8MAd0MHAAB/wwfAAH/DD8AAf8M3wYAAf8MAeAMAv8MHAAB4AwC/wxdAAH/DP8GAAH/DAIAAf8MHAAD/wwdAAHgDAH/DAHdDB0AAeAMHwAB/wwfAAHdDOAGAAH/DB4AAv8MHgAB4AwB/wwfAAH/DB4AAf8MHwAB/wzgBgAB/wweAAL/DB4AAeAMAv8MHQAC/wwfAAH/DB4AAd0MgAcAAf8MPgAC/wweAAH/DL8HAAH/DB8AAf8MAQAB/wweAAH/DP4GAAH/DB8AAf8MHwAB/wwgAAH/DB4AAf8M/z4A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("zgQAAf8MHwAB/wwfAAH/DB8AAeAMHQAC/wwB4AwFAAH/DBcAAv8MAQAB/wwEAAH/DBcAA/8MAgAE/wwYAALgDAEABf8MGQAH/wwBAALgDAEAAf8MAgAC/wwRAAb/DALgDAEAAf8MAeAMFgAB3QwE/wwBAAHgDB0AAd0MAeAMAf8MAeAM9QUAA/8MHQAC4AwB/wwdAAT/DBsAAf8MAeAMAQAB4AwcAAT/DAEAA/8MGQAB4AwB3QwB/wwBAAP/DBwABP8MAgAB4AwdAAH/DAEAAf8MAeAMHgAB3QwB/wzYBAAB/wwcAAH/DAIAAf8MHAAB/wwCAAH/DBwAAf8MAgAB/wwcAAH/DAIAAf8MHAAC/wwB4AwB/wwcAAH/DALgDAL/DBsABv8MGgAB/wwB4AwG/wwXAAHgDAH/DAHdDAEAAf8MAwAC4AwXAAH/DAYAAv8MAeAMHAAD/wwB3QwB4AwfAAH/DB8AAf8MlwYAAuAMHAAC/wwD4AwBAAH/DBoABP8MAuAMGgAB3QwC/wwBAAL/DALgDAH/DBgAAf8MAeAMAwAC4AwB/wwdAAHdDAH/DAHdDAHgDB8AAf8MvgUAAf8MFgAB/wwIAAH/DBYAAf8MCAAB/wwWAAH/DAgAAf8MFgAB/wwBAAHgDAL/DAQAAf8MFgAB/wwB4AwB/wwBAAL/DAMAAf8MFwAB/wwC4AwB/wwB4AwC/wwBAAH/DBgAAf8MAeAMAf8MAQAB4AwD/wwZAAHdDAIAAd0MAf8MAd0MqtkBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          treeSpectralLarge2: UD("treeSpectralLarge2", {
            x: 34,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("4EcAAf8MwR4AAf8MHwAB/wwfAAH/DB8AAf8MHQAB/wwBAAH/DP0GAAL/DB4AAv8MHgAC/wweAALgDAH/DB0AAf8MHwAB4AwBAAH/DB0AAf8MAQAB/wyABgAB/wwcAAL/DAEAAf8MHAAE/wwcAAT/DBwABP8MHAAC/wwB4AwB/wwcAAPgDAH/DBwAA/8MHQAC/wyeBgAC/wweAAP/DB0AA/8MHQAD/wwdAAL/DB4AAeAMAv8MHQAB/wwCAAH/DBwAAf8MwAUAAf8MHwAB/wwfAAH/DB4AAv8MHgAD/wwdAAP/DB0AA/8MHQAC/wweAAP/DB0AAv8MHgAD/wz/BQAB/wwfAAL/DBwABP8MHAAC/wwB3QwdAAL/DB4AAv8MHgAB/wwfAAHgDAH/DB4AAv8MoAYAAuAMHAAD/wwdAAL/DB4AAf8MAd0MHgAB/wwfAAH/DB8AAf8MHwAB/wyBBgAB/wwfAAL/DBwAA+AMHgAB4AweAAH/DL8HAAH/DAEAAf8MHQAC/wy+WQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gEAAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DL8HAAHgDB8AAeAMHwAB4AwfAAH/DP8GAAHgDB8AAuAMHgAB4AwfAAL/DB4AAf8M4AYAAf8MHwAB/wweAAHgDAH/DB4AAv8MHgAB/wwB3QzeBwAB/wwfAAH/DN8WAAL/DP4HAAHdDAH/DP4HAAH/DP93AA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("7wMAAf8MHwAB/wwfAAH/DB8AAf8MHAAB4AwCAAH/DBsAAf8MAuAMAv8MHAAB/wwC4AwcAAT/DAHgDBsABP8MHQAD3QydBgAB/wwfAAH/DB8AAf8MHwAB/wwgAAH/DEAAAf8MHQAD/wzx8QEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }])
        };

        function ID(DD, zD, wD) {
          const pD = new RD.d;
          for (const KD of wD) {
            const DD = pD.get(KD.chunkX, KD.chunkY, KD.chunkZ);
            if (!(0, sD.B)(DD)) throw new Error(`Duplicate chunk at ${KD.chunkX}, ${KD.chunkY}, ${KD.chunkZ}`);
            pD.set(KD.chunkX, KD.chunkY, KD.chunkZ, KD.rle)
          }
          return new gD.e(DD, {
            x: 0,
            y: 0,
            z: 0
          }, zD, pD)
        }
        const BD = {
          rockJungleLarge1: ID("rockJungleLarge1", {
            x: 30,
            y: 19,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          rockJungleLarge2: ID("rockJungleLarge2", {
            x: 29,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          rockJungleLarge3: ID("rockJungleLarge3", {
            x: 29,
            y: 22,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          rockJungleLarge4: ID("rockJungleLarge4", {
            x: 29,
            y: 24,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          rockJungleLarge5: ID("rockJungleLarge5", {
            x: 32,
            y: 25,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          rockJungleLarge6: ID("rockJungleLarge6", {
            x: 30,
            y: 28,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          rockSnowLarge1: ID("rockSnowLarge1", {
            x: 36,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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AR0LHBQAAR0KHAEdFAAB3QwBHQkcAdUMFQACHQHVDAccAd0MFQAB3QwDHQYcFwAC3QwBHQYcGQAB3QwFHAEdGgABHQQcAdUMGgACHQIcAdUMAd0MGgAB3QwBHQEcAdUMAR0SABMcBh0GHAEAExwE3QwCHQYcAQATHAQAAt0MBhwBAAEdERwBHQYABhwBAAEdERwBHQYABhwBAAHdDBEcAd0MBgAGHAIAERwHAAYcAgARHAcABhwCABEcBwABHQUcAgABHQ8cAdUMBwABHQUcAgABHQ8cAR0HAAHdDAUcAgAB3QwPHAHdDAgABRwDAA8cCQAFHAMADxwJAAUcAwAPHAkAAR0EHAMAAdUMDRwBHQkAAdUMBBwDAAEdDRwBHQkAAd0MBBwDAAHdDA0cAd0MCgADHAHVDAQADRwLAAIcAh0EAA0cCwACHAEdAd0MBAABHQwcCwABHAEdAd0MBQABHQwcCwACHQYAAd0MDBwLAAEdAd0MBwAMHAsAAd0MCAABHQocAR0UAAEdChwBHRQAAd0MAR0JHAHdDBUAAdUMCRwWAAHdDAEdBxwBHRcAAh0GHAEdFwAB3QwBHQYcAd0MGAAB3QwB1QwEHAEdEgATHAMdAdUMAh0GHAEAExwF3QwB1QwGHAEAExwFAAHdDAYcAQATHAYABhwBAAEdERwBHQYABhwBAAHVDBEcAR0GAAYcAQAB3QwRHAHdDAYABhwCABEcBwABHQUcAgARHAcAAR0FHAIAERwHAAHdDAUcAgARHAgABRwCAAEdDxwB1QwIAAUcAgAB1QwPHAEdCAAFHAIAAd0MDxwB3QwIAAUcAwAPHAkAAdUMAxwBHQMADxwJAAEdAxwBHQMAAR0NHAHVDAkAAd0MAxwB3QwDAAEdDRwB1QwKAAMcBAAB3QwNHAHdDAoAAdUMARwB1QwFAA0cCwABHQHVDAEdBQANHAsAAd0MAR0B3QwFAAEdDBwMAAHdDAYAAR0MHBMAAd0MDBwUAAscAR0UAAEdChwBHRQAAR0KHAHdDBQAAd0MAR0JHBYAAR0IHAHVDBYAAd0MAdUMBxwBHRcAAdUMBhwBHQHdDBcAAd0MBhwBHRIAExwB3QwBHQLVDAIdBhwBABMcAQAE3QwBHQYcAQATHAUAAd0MAR0FHAEAExwGAAEdBRwBABMcBgAB3QwFHAEAAR0RHAEdBwAFHAEAAR0RHAEdBwAFHAEAAd0MERwB3QwHAAUcAgARHAgABRwCABEcCAAFHAIAAR0QHAgAAR0DHAEdAgABHQ8cAR0IAAEdAxwBHQIAAd0MDxwBHQgAAd0MAxwB3QwDAA8cAd0MCQADHAQADxwKAAHVDAEcAR0EAA8cCgABHQEcAdUMBAAPHAoAAd0MAdUMAd0MBAABHQ0cAR0LAAEdBQABHQ0cAR0LAAHdDAUAAd0MDRwB3QwSAA0cEwANHBMAAR0LHAEdEwABHQscAR0TAAHdDAEdChwB3QwUAAEdChwVAAHdDAocFgABHQkcFgABHQgcAR0WAAHdDAgcAR0XAAccAR0B3QwXAAHVDAYcAR0SABMcAR0B3QwCHQHVDAEdBhwBABMcAd0MAQAE3QwBHQUcAQATHAYAAh0DHAEdAQATHAYAAd0MAR0DHAEdAQABHREcAR0HAAHdDAMcAd0MAQAB1QwRHAEdCAADHAIAAd0MERwB3QwIAAMcAwARHAkAAR0BHAEdAwARHAkAAx0DAAEdEBwJAAHdDAEdAd0MAwABHRAcCgAB3QwEAAHdDA8cAR0QAA8cAR0QAA8cAd0MEAAPHBEADxwRAAEdDRwB1QwRAAEdDRwB1QwRAAHdDA0cAd0MEgABHQwcEwABHQwcEwAB3QwLHAEdFAALHAEdFAAB1QwKHAHdDBQAAdUMChwVAAHdDAEdCBwBHRYAAR0IHAHVDBYAAd0MCBwB3QwXAAgcGAAHHAEdGAABHQYcAR0YAAEdBRwBHQHdDBIAAR0SHAcdBRwBAAHdDBIcAh0E3QwFHQEcAgASHALdDAQAAd0MAx0B1QwBHQIAERwB1QwHAATdDAEdAgARHAEdCwAB3QwCABEcAd0MDgARHA8AERwPAAEdEBwPAAEdDxwBHQ8AAd0MDxwBHRAADxwB3QwQAAEdDhwRAAEdDhwRAAHdDA4cEgANHAEdEgANHAEdEgAB1QwMHAHdDBIAAR0MHBMAAd0MDBwUAAscAR0UAAscAR0UAAIdCRwB3QwUAAIdCRwVAALdDAgcAR0XAAgcAR0XAAEdBxwB3QwXAAEdBxwYAAHdDAYcAR0ZAAYcAR0ZAAUcAR0B3QwZAAEdBBwBHRMAAd0MFBwFHQHVDAQcAgAUHAXdDAEdBBwCABIcAR0B1QwFAAHdDAEdAxwCABIcAR0B1QwGAAEdAxwCABIcAt0MBgAB3QwDHAIAAR0RHAkAAxwCAAHVDBEcCQADHAIAAd0MERwJAAMcAwAPHAHVDAEcCQABHQIcAwABHQ4cAdUMARwJAAEdAhwDAAEdDhwB3QwBHAkAAd0MAh0DAAHdDA4cAQABHQoAAh0EAA4cAQAB1QwKAALdDAQADRwB1QwBAAHdDBAAAR0MHAEdEgABHQwcAd0MEgAB3QwMHBQADBwUAAscAR0UAAMdCBwBHRQAAx0IHAHdDBQAA90MCBwYAAccAR0YAAccAR0YAAEdBhwB3QwYAAEdBhwZAAHdDAUcAR0aAAUcAR0aAAQcAdUMAd0MGgAEHAHVDBsAAR0CHAEdAd0MGwABHQEcAh0VABQcAdUMBR0EHAIAFBwBHQXdDAQcAgAUHAHdDAUABBwCAAEdEhwBHQYABBwCAAEdEhwB1QwGAAQcAgAB3QwBHQ4cAR0CHAHdDAYABBwDAAEdDhwBHQIcBwABHQMcAwAB3QwOHAHdDAIcBwABHQMcBAAOHAEAAhwHAAHdDAMcBAABHQ0cAQACHAgAAxwEAAIdDBwBAAEcAR0IAAEdARwBHQQAAd0MAdUMCxwBHQEAARwBHQgAAR0BHAHVDAUAAd0MCxwBHQEAARwB3QwIAAHdDAHVDAHdDAYACxwB3QwBAAEcCgABHQcACxwCAAEcCgAB3QwHAAscAgABHBIAChwBHQIAAdUMEgABHQkcAdUMAgABHRIAAh0IHAHdDAIAAd0MEgAB3QwB1QwBHQccFwAB3QwBHQYcAdUMGAAB3QwBHQUcAR0ZAAEdBRwB3QwZAAHdDAQcAR0bAAQcAR0bAAMcAR0B3QwbAAEdAhwB1QwcAAEdARwBHQHdDBwAAd0MARwBHR4AAR0B3QweAAEdHwAB3QwWAAHVDBQcBB0B1QwEHAIAAR0THAIdBN0MBBwCAAHdDBMcAR0B3QwEAAQcAwATHAHdDAUABBwDAAEdEhwGAAQcAwABHRIcBgAEHAMAAd0MEhwGAAQcBAAB1QwMHAEdAxwB1QwGAAEdAxwEAAEdDBwB1QwDHAHVDAYAAR0DHAQAAd0MAR0LHAHdDAMcAd0MBgAB3QwDHAUAAR0LHAEAAxwIAAMcBQAB3QwLHAEAAxwIAAMcBgABHQkcAR0BAAMcCAABHQEcAdUMBgACHQgcAR0BAAMcCAABHQEcAR0GAAHdDAHVDAgcAd0MAQACHAEdCAAB3QwBHQHdDAcAAd0MCBwCAAIcAR0JAAEdCQAHHAEdAgACHAHdDAkAAd0MCQABHQYcAR0CAAIcFAAB1QwBHQUcAd0MAgACHBQAAd0MAh0EHAMAARwBHRUAAd0MAR0DHAEdAwABHAEdFgAB3QwDHAEdAwABHAHdDBcAAx0B3QwDAAEcGAABHQLVDAQAAR0YAAPdDAQAAR0fAAHdDM8BAAHdDBUcAdUMAx0EHAMAAR0SHAEdAdUMAR0C3QwBHQQcAwABHRIcAh0B3QwCAAHdDAQcAwAB3QwNHAEdBBwC3QwEAAQcBAABHQwcAR0EHAYABBwEAAHVDAwcAd0MBBwGAAEdAxwEAAHdDAwcAQAEHAYAAR0DHAUAAR0LHAEABBwGAAHdDAMcBQABHQocAR0BAAMcAR0HAAMcBQAB3QwKHAEdAQADHAEdBwADHAYAAR0JHAHdDAEAAxwB3QwHAAHVDAEcAR0GAAHVDAkcAgADHAgAAR0BHAEdBgAB3QwBHQccAR0CAAMcCAAB3QwBHQHdDAcAAR0HHAEdAgADHAkAAR0IAAHdDAccAd0MAgADHAkAAd0MCQABHQYcAwADHBMAAR0FHAHVDAMAAhwB1QwTAAHdDAHVDAQcAR0DAAIcAdUMFAABHQHVDAIcAR0B3QwDAAIcAd0MFAAB3QwB1QwCHAEdBAACHBYAAd0MAh0B3QwEAAEcAR0XAAIdBQABHAEdFwAC3QwFAAEcAd0MHgABHR8AAR0fAAHdDNABAAHdDBUcBB0DHAQAAR0SHAIdAt0MAh0DHAQAAR0RHAMdAgAC3QwDHAQAAd0MCxwB1QwFHAEdAt0MBAADHAUAAR0KHAEdBRwB3QwGAAMcBQABHQocAd0MBRwHAAEdAhwFAAHdDAocAQAFHAcAAR0BHAEdBgAJHAIdBRwHAAHdDAIdBgABHQgcAh0EHAEdCAABHQHdDAYAAR0IHALdDAQcAR0IAAHdDAcAAd0MAR0HHAIABBwB3QwRAAEdBhwBHQIABBwSAAHdDAEdBRwBHQIABBwTAAEdBBwB1QwB3QwCAAQcEwAB3QwB1QwDHAEdAwADHAEdFAABHQIcAR0B3QwDAAMcAR0UAAHdDAMdBAADHAHdDBUAAh0B3QwEAAMcFgAC3QwFAAMcHQACHAEdHQABHQHVDAEdHQACHQHdDB0AAt0MsgIAFxwCAAIcBQAXHAIAAR0BHAUAAR0WHAIAAh0FAAEdFRwBHQIAAd0MAR0FAAHdDBUcAR0DAAHdDAYAAdUMFBwB3QwKAAEdDxwB1QwDHAEdCwAB3QwBHQYcAh0FHAHVDAEdAhwCHQwAAR0FHAEdAdUMAR0FHAEdAd0MAtUMAR0B3QwMAAHdDAEdAxwC1QwC3QwFHAHdDAEAAh0B3QwOAAEdAxwBHQHdDAIABBwBHQIAAt0MDwAB3QwB1QwCHQHdDAMAAR0DHAEdFAADHQQAAR0DHAHdDBQAA90MBAAB3QwDHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MswMAAR0OHAEABxwB1QwCHAYAAd0MFhwB3QwCHAcAAR0VHAEAAhwHAAHVDAEdExwBHQEAAh0HAAHdDAIdARwEHQ0cAR0BAAIdCAAB3QwDHQLVDAIdDBwB3QwBAALdDAkAAd0MAR0E3QwBHQwcDgAB3QwEAAHdDAEdBBwB1QwGHBQAAR0C1QwEHQUcFAAB3QwBHQLVDAEdAd0MAdUMBRwVAATdDAEAAd0MBRwbAAUcGwAB1QwEHBsAAR0EHBsAAd0MBBwcAAQcHAAEHBwAAR0CHAEdHAABHQIcAR0cAAHdDAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AARwfAAEcHwABHR8AAR0fAAHdDKsBAAEdGRwGAAEdGRwGAAHdDAHVDBgcBwADHRMcAR0CHAcAAd0MAx0B1QwCHQ8cAdUMAhwIAALdDAEdAtUMAR0B1QwOHAHdDAIcCgAE3QwBHQHVDAwcAR0BAAIcDgAB3QwB1QwMHAEdAQABHQEcDwAB3QwEHAIdAdUMBRwB3QwBAAEdARwQAAEdAxwDHQUcAgAB3QwBHRAAAR0DHAPdDAUcAwAB1QwQAAHdDAMcAwAFHAMAAd0MEQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwBHQHdDAMABRwWAAEdBAAFHBYAAd0MBAAFHBsAAR0EHBsAAdUMBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwB1QwcAAEdAhwBHRwAAd0MAR0BHAHdDB0AAR0BHB4AAd0MARwfAAEdHwABHR8AAd0MSAAB3QwcHAQAHBwEAAQcAR0XHAQABBwCHRYcBAADHAEdAd0MAdUMAR0VHAQAAR0BHALVDAEAAd0MAdUMEhwBHQIcBAABHQEcAR0B3QwCAAHdDAMcAdUMAR0NHAEdAhwEAAHdDAEdAd0MBAABHQEcAdUMAh0FHAEdBhwBHQHdDAIcBQAB1QwFAAEdARwB1QwC3QwFHAEdBhwBHQEAAhwFAAHdDAUAAd0MAR0B3QwCAAUcAd0MBhwB3QwBAAHVDAEcDAABHQMABRwBAAEdBRwCAALVDAwAAd0MAwAFHAEAAR0FHAIAAd0MAR0QAAEdAxwBHQEAAd0MBRwDAAHdDBAAAR0DHAEdAgAFHBQAAd0MAxwB3QwCAAUcFQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwB1QwB3QwDAAUcFgABHQQABRwWAAHdDAQAAR0DHAHVDBsAAdUMAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MiQEAHRwDAB0cAwAFHAIdFhwDAAUcAdUMAR0THAHVDAIcAwAFHALdDAEdEhwB1QwCHAMAAR0DHAEdAgABHRIcAd0MAhwDAAEdAxwBHQIAAd0MAxwCHQUcAR0GHAHVDAEAAhwDAAHdDAMcAd0MAwADHALVDAUcAR0GHAHVDAEAAR0BHAQAAxwEAAMcAt0MBRwB3QwBHQUcAd0MAQABHQEcBAADHAQAAR0BHAEdAgAFHAEAAR0FHAIAAd0MAdUMBAAB1QwBHAEdBAADHQIABRwBAAHdDAUcAwABHQQAAR0BHAEdBAAB3QwBHQHdDAIABRwCAAUcAwAB3QwEAAHdDAEdAd0MBQAB3QwDAAUcAgAFHAkAAR0KAAEdAxwB1QwCAAUcCQAB3QwKAAEdAxwBHQIABRwUAAHdDAMcAd0MAgAFHBUAAxwDAAUcFQABHQEcAdUMAwABHQMcAR0VAAMdAwAB1QwDHAHVDBUAAd0MAR0B3QwDAAHdDAMcAd0MFgAB3QwFAAMcHQADHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MqQEAHRwDAB0cAwAFHAEdAdUMFhwDAAUcAdUMAR0THAIdARwDAAUcAt0MAR0DHAEdDRwEHQMABRwCAAEdAxwBHQYcAh0FHAEdAt0MAdUMAwAFHAIAAd0MAxwB3QwBHQUcAh0FHAHdDAIAAd0MAwABHQMcAR0DAAMcAQABHQUcAt0MBRwHAAHVDAMcAdUMAwABHQEcAR0BAAHdDAUcAgAFHAcAAd0MAxwB3QwDAAMdAgAFHAIABRwIAAMcBAAB3QwB1QwB3QwCAAUcAgAFHAgAAxwFAAHdDAMABRwCAAQcAR0IAAEdAhwJAAEdAxwB1QwCAAEdAxwB1QwIAAHVDAIcCQAB1QwDHAHVDAIAAR0DHAHdDAgAAd0MARwBHQkAAd0MAxwB3QwCAAHdDAMcCgABHAHVDAoAAdUMARwBHQQAAxwKAAEdAd0MCgABHQEcAR0EAAMcCgAB1QwLAAHdDAEdAd0MBAABHQEcAR0KAAHdDAwAAR0FAAEdARwBHRcAAd0MBQAB3QwBHQHdDB4AAR0fAAHdDMkCAB0cAwAdHAMABhwBHRQcAR0B1QwDAAUcAx0DHAHVDAEdDBwB1QwDHQMABRwBHQHdDAHVDAEdAdUMAx0FHAEdAdUMBBwB1QwCHQLdDAMAAR0DHAEdAd0MAQAB3QwC1QwBHQLdDAUcAx0DHAEdAt0MBQABHQMcAR0DAAPdDAIABRwC3QwBHQMcAd0MBwAB3QwDHAHdDAgABRwCAAHdDAMcCQADHAkAAR0DHAEdAwAB1QwBHAEdCQADHAkAAR0DHAEdAwABHQEcAdUMCQAC1QwBHAkAAd0MAxwB3QwDAAHdDAEdAd0MCQAC1QwBHAoAAxwFAAEdCgAC3QwBHQoAAdUMARwBHQUAAd0MDAAB1QwKAAHVDAIdEgAB3QwKAAHdDAEdAd0MHgAB3QyQBAAB3QwGHAIAFBwEAAYcAR0BAAEdCxwBHQccBAAFHAIdAdUMAx0B1QwHHAEdAtUMBhwEAAQcAh0D3QwE1QwEHAMdAd0MAdUMBRwBHQQABBwB1QwB3QwDAAPdDAEdBBwCHQHdDAEAAd0MAh0DHAEdBAAB1QwDHAHdDAcAAd0MAR0BHAIdAt0MAwAB1QwBHQIcAdUMAd0MBAAB1QwCHAHVDAkABB0FAALdDAEdARwBHQUAAd0MAdUMARwBHQkAAd0MAdUMAt0MBwACHQHdDAYAAR0BHAHdDAoAAd0MCQAB3QwBHQcAAd0MARwWAAHdDAgAAR0fAAEdHwAB3Qz+BAAFHAEdDRwBHQccBQAFHAHdDAUcAR0B1QwBHQUcAR0HHAUABRwBAAQcAR0B1QwCHQHVDAIcAh0B3QwHHAUABBwBHQEAAxwB1QwBHQPdDAIdAdUMAh0BAAEdBhwFAAEdAxwBHQEAAxwBHQHdDAMAAd0MAdUMAR0C3QwBAAEdBhwFAAEdAxwB3QwBAAMcAd0MBQAC3QwDAAHdDAYcBQAB3QwDHAIAAdUMARwBHQwABhwGAAHVDAEcAR0CAAMdDAAB1QwFHAYAAR0BHAEdAgAB3QwB1QwB3QwMAAHVDAUcBgAB3QwB1QwB3QwDAAHdDA0AAd0MBRwHAAEdEwAFHAcAAd0MEwAFHBsAAR0DHAEdGwABHQMcAdUMGwAB3QwBHQEcAR0B3QwcAAMdHQAB3QwBHQHdDB4AAd0MxwMACxwCHQ4cBQAKHAEdAdUMAx0MHAUAChwB1QwC3QwB1QwBHQwcBQAKHAHdDAIAAt0MAR0LHAUAAR0DHAEdBRwFAAEdCxwFAAEdAxwB1QwFHAUAAd0MAR0KHAUAAd0MAxwB3QwB1QwDHAEdBgABHQocBgADHAEAAR0DHAHVDAYAAd0MAR0CHAEdBhwGAAMcAQAB3QwDHAHdDAcAAh0BHAEdBhwGAAEdARwBHQIAAxwIAAHdDAHVDAEdAd0MBhwGAAMdAgABHQEcAR0JAAHdDAEdAQAGHAYAAd0MAR0B3QwCAAEdARwBHQoAAd0MAQAGHAcAAd0MAwAB3QwBHQHdDAwABhwMAAEdDQABHQUcDAAB3QwNAAHVDAUcGgAB3QwFHBsABRwbAAUcGwABHQMcAR0bAAHVDAMcAdUMGwAB3QwBHQEcAR0B3QwcAAEdAdUMAR0dAAHdDAHVDAHdDB4AAd0MhwIACxwDHQ0cBQAKHAEdAdUMAh0B1QwMHAUAChwBHQPdDAEdDBwFAAEdCRwB3QwDAAHdDAwcBQAB1QwDHAHVDAUcBQAB1QwLHAUAAd0MAxwB1QwFHAUAAR0LHAYAAxwB3QwFHAUAAd0MCxwGAAEdARwBHQEAAdUMAxwBHQYACxwGAAMdAQABHQMcAR0GAAscBgAB3QwB1QwB3QwBAAHdDAMcAd0MBgALHAcAAd0MAwADHAcAAdUMChwLAAEdAhwHAAEdChwLAAEdARwBHQcAAd0MAhwCHQYcCwAB3QwCHQgAAhwB1QwBHQYcDAABHQHdDAgAAR0BHALdDAYcDAAB3QwJAAEdARwCAAYcFgAB3QwBHQIABhwXAAEdAgAGHBcAAd0MAgABHQUcGgABHQUcGgAB3QwEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAR0BHAEdHQACHQHVDB0AAd0MAR0B3QweAAHdDGYAAd0MAdUMChwCHQHVDAEdDBwFAAHdDAMcAR0FHAIdAdUMAd0MAdUMDBwGAAMcAR0FHAEdAt0MAQAB3QwMHAYAAR0BHAEdAd0MBRwB3QwEAAwcBgADHQEABRwFAAwcBgAB3QwBHQHdDAEAAR0DHAEdBQAMHAcAAd0MAgABHQMcAdUMBQAEHAEdBxwKAAHdDAMcAd0MBQABHQMcAR0HHAsAAxwGAAEdAxwB3QwHHAsAAR0CHAYAAd0MAxwBAAccCwABHQEcAR0HAAscCwAB3QwCHQcACxwMAAHVDAHdDAcACxwMAAHdDAgAAxwBHQccFQAB1QwCHAIdBhwVAAEdAhwB3QwBHQYcFQAB3QwCHAEAAd0MBhwWAAIcAgAGHBYAAhwCAAYcFgABHQEcAgAGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwB1QwbAAHVDAMcAd0MGwAB3QwBHQEcAR0dAALVDAEdHQAB3QwBHQHdDB4AAd0MJgAC3QwBAAPdDAEdBxwBHQHVDAwcCgABHQYcAR0C3QwMHAoAAd0MBhwBHQIADBwLAAYcAd0MAgAMHAsABhwDAAwcCwABHQEcAR0CHAEdAwAMHAsAAR0BHAHVDAIcAR0DAAwcCwAB3QwBHQHdDAIdAd0MAwAMHAwAAR0BAAIdBAABHQscDAAB3QwBAALdDAQAAR0LHBQAAd0MCxwVAAMcAR0HHBUAAxwBHQccFQADHAHdDAccFQADHAEABxwVAAMcAQABHQYcFQABHQIcAQABHQYcFQABHQIcAQAB3QwGHBUAAd0MAhwCAAYcFgACHAIABhwWAAEdARwCAAYcFgAB1QwBHAIAAdUMBRwWAAHdDAEcAgABHQUcFwABHQIAAd0MBRwXAAHVDAMABRwXAAHdDAMABBwBHRsAAR0DHAHVDBsAAR0DHAHdDBsAAd0MAR0BHAEdHQADHR0AAd0MAR0B3QweAAHdDAMAAt0MAR0DHAEdAwABHQYcAt0MDBwDAAHdDAMcAd0MAwAB3QwGHAIADBwEAAMcBQABHQUcAgAMHAQAAxwFAAEdBRwCAAwcBAADHAUAAd0MBRwCAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAAB3QwB1QwB3QwGAAHdDAMcAd0MAgABHQscBQABHQgAAxwDAAEdCxwFAAHdDAgAAxwDAAHdDAscDgABHQEcAR0EAAMcAR0HHA4AAR0BHAEdBAADHAEdBxwOAAHdDAEdAd0MBAADHAHdDAccDwABHQUAAxwBAAccDwAB3QwFAAEdAhwBAAccFQAB1QwCHAEABxwVAAHdDAIcAQAHHBYAAhwBAAEdBhwWAAIcAQABHQYcFgABHQEcAQAB3QwGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwBHRsAAR0DHAHdDBsAAd0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MIgAC3QwB1QwFHAMAAR0GHALdDAwcAgAB3QwFHAMAAdUMBhwCAAwcAwAFHAMAAd0MAR0FHAIAAR0LHAMABRwEAAHVDAUcAgABHQscAwAFHAQAAd0MBRwCAAHdDAMcAR0HHAMAAdUMAxwBHQUABRwDAAMcAdUMBxwDAAEdAxwBHQUABRwDAAMcAd0MBxwDAAHdDAMcAd0MBQAEHAEdAwADHAEABxwEAAMcBgAEHAHVDAMAAxwBAAccBAADHAYABBwB3QwDAAMcAQAHHAQAAdUMARwBHQYAAR0DHAQAAR0CHAEABxwEAAEdARwBHQYAAR0DHAQAAR0CHAEABxwEAAHdDAEcAd0MBgAB3QwBHQEcAR0EAAHdDAIcAQAHHAUAAR0IAAEdARwBHQUAAhwBAAccBQABHQgAAd0MAR0B3QwFAAEdARwBAAccBQAB3QwJAAEdBgABHQEcAQAHHA8AAd0MBgAB3QwBHQEAAR0GHBcAAR0BAAEdBhwXAAHdDAEAAd0MAR0FHBoAAR0EHAEdGgAB3QwEHAHVDBsABBwB3QwbAAEdAxwcAAEdAxwcAAHdDAIcAR0dAAMdHQACHQHdDB0AAt0MggEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gCgAARwfAAEcHwAB1QwfAAEdHwAB3Qz/BgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8FAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB3QzfBQABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAR0dAAEcAdUMAR0dAAEdAdUMAd0MHQABHQHdDB4AAd0M/wYAAhwBHQHdDBwAAhwB1QwdAAHVDAEdAd0MHQACHR4AAt0M/gYAAhwBHQHdDBwAARwBHQHVDB0AAh0B3QwdAAEdAd0MHgAB3Qz/BgABHAEdAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8EAAEcAdUMAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/BAACHAEdAd0MHAABHAIdHQABHAEdAd0MHQABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MvwUAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAEdAd0MHgAB3QzfBgACHAEdAd0MHAABHAIdHQAB1QwBHQHdDB0AAdUMAd0MHgAB3Qz/BgACHAHdDB0AARwBHR4AAR0B1QweAAEdAd0MHgAB3Qz/BgABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M3wUAAhwB3QwdAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MnwUAARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8GAAEdHwAB1QwfAAHdDL8HAAEcAd0MHgAB1QwfAAEdHwAB3QyfBwABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAdUMHwAB3Qz/BQACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwAB1QwfAAHdDJ8EAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3QyfAwADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDP8CAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAHVDB0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwB1QweAAEcAd0MHgABHB8AAR0fAAEdHwAB3QzfAgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAHVDB0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwAB1QwfAAEdHwAB3QyfAgADHB0AAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3Qz/AQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("jigAAd0M/AcAAd0MAR0B1QwB3QwdAAEdAd0MHgAB3Qy8BwAB1QwBHAEdAhwBHRoAAd0MBB0B3QwbAAEdAd0MAh0cAAHdDAEAAt0MmgcAAR0FHAHdDBkAAh0BHAEdAdUMAR0aAAHdDAEdAdUMAx0bAAHdDAHVDAPdDBwAAd0M/AYAAR0B1QwFHAHdDBgAAd0MAh0DHAEdGgAB3QwBHQMcAR0bAAHdDAIcAR0B3QwcAAEcAh0dAAHVDAEdAd0MHQABHQHdDB4AAd0MnAYAAd0MAdUMBBwBHRoAAh0CHAEdAd0MGgAB3QwCHQEcAR0cAAHdDALVDAHdDB0AAd0MAR0fAAHdDNwGAAMdARwBHQHdDBoAAd0MAx0B1QwcAALdDAEdAd0MHgAB3QydBwAB3QwCHQHdDB0AAR0B3QweAAHdDLWfAQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AQAB3QwBHQUcAgAB3QwBHQYcAwALHAIAAd0MBRwDAAEdBhwDAAscAwAFHAMAAd0MAR0FHAMAAdUMChwDAAUcBAABHQUcAwABHQocAwAFHAQAAd0MBRwDAAHdDAocAwAFHAUABBwBHQQAChwDAAUcBQAEHAEdBAAKHAMABBwBHQUABBwB3QwEAAEdAhwBHQYcAwAEHAEdBQAEHAUAAh0BHAHVDAYcAwAEHAHdDAUAAR0DHAUAAd0MAR0B1QwB3QwGHAMAAdUMAxwGAAHVDAEdAhwGAAHdDAEdAQAGHAMAAdUMAxwGAAHdDAEdARwBHQcAAd0MAQAGHAMAAd0MAR0BHAEdBwAB3QwCHQkABhwEAAEdARwBHQgAAR0B3QwJAAYcBAAB3QwBHQHdDAgAAd0MCgAGHAUAAdUMFAAGHAUAAd0MFAAGHBoABhwaAAIdBBwaAAEdAdUMBBwaAALdDAEdARwBHQEcHAADHQEcHAAB3QwBHQHdDAHVDB0AAd0MAQAB1QwfAAHdDOIBAAHdDAUcAd0MAQAB3QwB1QwGHAcAAR0GHAMABRwDAAIdBRwHAAHVDAYcAwAFHAMAAd0MAR0EHAEdBwAB3QwGHAMABRwEAAHdDAQcAR0IAAYcAwAFHAUAAdUMAxwB3QwIAAYcAwAEHAEdBQABHQMcCQAGHAMABBwB1QwFAAHdDAMcCQAGHAMABBwB3QwGAAMcCQABHQUcAwAEHAcAAxwJAAEdBRwDAAEdAxwHAAIcAR0JAAHdDAUcAwABHQIcAR0HAAHVDAIdCgAFHAMAAd0MAhwBHQcAAh0B3QwKAAUcBAABHAEdAd0MBwAC3QwLAAUcBAABHAEdFQAFHAQAARwB3QwVAAUcBAABHRYABRwEAAHVDBYAAdUMBBwEAAHdDBYAAR0BHAHVDAIcGwAB3QwCHQIcHAABHQHdDAIcHAAB3QwBAAEdARweAAHVDAEdHgAB3QwBHR8AAd0MggIAAd0MBRwB3QwBAALdDAMdAd0MCgAB3QwFHAMAAR0DHAEdBAADHQwABRwDAAEdAxwBHQQAA90MDAAFHAMAAd0MAxwB3QwTAAUcBAADHBQAAR0EHAQAAxwUAAHVDAQcBAADHBQAAd0MBBwEAAMcFQABHQMcBAACHAEdFQABHQMcBAACHAEdFQAB3QwDHQQAAhwB3QwWAAMdBAABHAEdFwAD3QwEAAIdHgABHQHdDB4AAd0MvgQAAt0MAR0B1QwBHQMAA90MFwAB3QwC1QweAALdDLjnAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("AxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AARwB1QweAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M/wEAAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwAB1QwfAAHVDB8AAd0MnwUAARwfAAEdHwAB1QwfAAHdDJ/vAQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          rockSnowLarge2: ID("rockSnowLarge2", {
            x: 36,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("BgACHAHVDAHdDBwAAR0BHAEdHQABHQHVDAHdDB0AAd0MAR0fAAH6Cf4GAAUcAR0GAATdDAcAAR0CHAYABRwB3QwRAAHdDAIcBgAFHBMAAhwGAAUcEwACHAYAAR0EHBMAAdUMARwGAAIdAhwBHRMAAdUMARwGAAHdDAHVDAIcAR0TAAHdDAEdBwAB3QwBHQEcAd0MFAAB1QwIAAHVDAEcFQAB3QwIAAHdDAEdHwAB1QwfAAHdDJwFAAEdBRwEAAccAd0MBAAB3QwDHAYAAR0FHAQAAR0GHAYAAxwGAAHdDAUcBAABHQYcBgADHAcABRwEAAHdDAUcAR0GAAMcBwAEHAEdBQADHAEdARwB1QwGAAHVDAIcBwAEHAEdBQABHQEcAh0BHAHdDAYAAdUMAhwHAAQcAd0MBQADHQHdDAEdBwAB3QwCHAcAAR0DHAYAAfoJAR0B3QwBAAEdCAACHAcAAR0DHAcAAd0MAgAB+gkIAAIcBwAB+gkBHQEcAR0TAAEdARwIAAMdEwAB1QwBHQgAAd0MAR0B3QwTAAHdDAEdCQAB3QwVAAHdDOYEAAHdDAUcAwAIHAHdDAQAAd0MAxwHAAUcAwAB1QwHHAYAAxwHAAUcAwABHQccBgADHAcABRwDAAHdDAccBgADHAcABRwEAAccBgADHAcABRwEAAccBgADHAcAAdUMAxwBHQQABhwBHQYAAR0CHAcAAR0DHAHVDAQAAR0DHAMdBgABHQIcBwAB3QwDHAHdDAQAAR0DHAIdAd0MBgAB3QwCHAgAAxwFAAHdDAMcAt0MCAACHAgAAdUMARwBHQYAAxwKAAEdARwIAAEdARwBHQYAAxwKAAEdARwIAAHdDAEdAd0MBgADHAoAAd0MAR0JAAHVDAcAAxwLAAEdCQAB+gkHAAMcCwAB3QwRAAMcCwAB3gwRAAMcCwAB3gwRAAIcAR0LAAHeDBEAARwCHR0AARwBHQH6CR0AAR0B3QweAAEdHwAB+gmvAgAB3QwFAAUcAwAIHAHdDAUAAxwHAAUcAwAIHAYAAxwHAAUcAwAIHAYAAxwHAAUcAwAHHAEdBgADHAcAAR0DHAEdAwAHHAEdBgABHQIcBwABHQMcAR0DAAHVDAUcAR0B3QwGAAEdAhwHAAHdDAMcAd0MAwABHQUcAR0HAAHdDAIcCAADHAQAAd0MBRwB3QwIAAIcCAADHAUABRwJAAIcCAABHQEcAR0FAAUcCQABHQEcCAACHQHVDAUABRwJAAIdCAAB3QwBHQHdDAUAAR0BHAEtAhwJAAHdDAEdCQAB3QwGAAEdARwBLQIcCgAB3QwQAAHdDAEcAS0CHBwAAxwBHRwAAxwBHRwAARwBHQHVDAHdDBwAAx0dAAHVDALdDB0AAd0MjgMAAR0BHAEdAd0MAwABHQMcAR0BAALdDAccAd0MBgABHQIcAdUMARwB1QwEAAHdDAMcAd0MAwAHHAcAAd0MAhwB3QwBHQHdDAUAAxwEAAccCAACHAEAAR0GAAMcBAAHHAgAAhwBAAH6CQYAAdUMARwBHQQABxwIAAEdARwIAAEdARwBHQQABxwIAAEdARwIAAHdDAEdAd0MBAABHQUcAR0IAAHdDAHVDAkAAR0FAAEdBRwBHQkAAR0JAAHdDAUAAd0MBRwB3QwJAAHdDBAABRwbAAUcGwAFHBsAAR0DHAHVDBsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAHVDAEcAdUMHQAC1QwBHR0AAd0MAR0B3QweAAHdDI0DAAUcAR0DAAHdDAEAAd0MAR0BHAEdBxwCAAH6CQEAAd0MBAAB+gkFHAHdDAYAAh0B1QwHHAoAAR0EHAcAAd0MAdUMAd0MBxwKAAEdBBwIAAHdDAEABxwKAAHdDAEcAR0BHAEdCgAHHAsAAh0BHAHVDAoAAR0FHAHVDAsAAR0B3QwBHQH6CQoAAR0FHAHVDAsAAd0MAQAB1QwLAAHdDAUcAd0MDQAB3QwMAAUcGwAFHBsABRwbAAHVDAMcAR0bAAEdAxwB1QwbAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAR0B+gkeAAHdDK0DAAEdBRwDAA0cAgAB3QwB1QwBHAEdBAABHQUcAwAFHAIdBRwBHQMAAdUMARwB1QwEAAH6CQUcAwAFHAIdBRwB1QwDAAHdDAEdAd0MBQAFHAMAAR0DHAEdAt0MBRwB3QwEAAEdBgABHQMcAR0DAAEdAxwBHQIABRwFAAHdDAYAAdUMAxwB1QwDAAHdDAMcAd0MAgAFHAwAAd0MAxwB3QwEAAMcAwAFHA0AAxwFAAMcAwAB1QwDHAEdDQADHAUAAxwDAAEdAxwBHQ0AAR0BHAEdBQADHAMAAd0MAxwB3QwNAAEdARwBHQUAAR0CHAQAAxwOAAH6CQEdAd0MBQABHQIcBAABHQEcAdUMDwABHQYAAd0MAhwEAAMdDwAB3QwHAAIcBAAB3QwBHQHdDBcAAhwFAAHdDBgAAhweAAIcHgACHB4AAR0BHB4AAR0BHB4AAd0MAR0fAAEdHwAB+gmzAgAB3QwFHAHdDAEABxwBAAUcAfoJAQAB1QwEHAHdDAIcAdUMAQAFHAIABxwBAAEdAxwBHQIAAh0DHAEAAR0C1QwBAAUcAgAHHAEAAR0DHAEdAgAB3QwB1QwCHAEdAQAB1QwBHQHdDAEABRwCAAEdBRwBHQEAAd0MAxwB+gkDAAHdDAIcAR0BAALdDAIABRwCAAEdBRwBHQIAAxwFAAIdAd0MBQAFHAIAAd0MBRwB3QwCAAHVDAEcAR0FAAEdAdUMBgAB1QwDHAEdAwAFHAMAAx0FAALdDAYAAR0DHAEdAwAFHAMAAd0MAdUMAd0MDQAB+gkDHAHdDAMABRwEAAHdDA8AAxwEAAUcFAADHAQABRwUAAMcBAAFHBQAAxwEAAHVDAMcAR0UAAEdARwBHQQAAR0DHAEdFAABHQEcAR0EAAHdDAMcAd0MFAAB3QwBHAHdDAUAAxwWAAEcBgADHBYAAdUMBgADHBYAAR0GAAMcFgAB3QwGAAEdAhwdAAIdARwdAAHdDAHVDAEcHgAB3QwBHB8AAR0fAAEdHwAB3QzUAQAFHAIABxwDAAHdDAH6CQIAAd0MCRwBAAUcAgAHHAgAAh0GHAHVDAEABRwCAAccCAACHQYcAdUMAQAFHAIABxwIAALdDAYcAd0MAQABHQMcAR0CAAccCgAGHAIAAR0DHAEdAgAHHAoAAR0BHAEdAhwB1QwCAAHdDAMcAd0MAgAHHAoAAdUMAx0BHAEdAwADHAMABxwKAAHdDAEdAd0MAR0B1QwB3QwDAAMcAwAHHAsAAd0MAQAB3QwBHQQAAxwDAAEdBRwB1QwOAAHdDAQAAxwDAAEdBRwBHRMAAxwDAAHdDAUcAd0MEwADHAQABRwUAAMcBAAFHBQAAR0BHAEdBAAFHBQAAR0BHAEdBAAFHBQAAd0MAR0B3QwEAAUcFQABHQUAAdUMBBwVAAHdDAUAAR0EHBUAAd4MBQAB3QwEHBUAAd4MBgAEHBUAAd4MBgADHAEdHAADHAEdHAABHQEcAdUMAd0MHAABHQEcAR0dAAHdDAHVDAHdDB4AAd0MtgEAAxwDAAccAd0MBwAJHAIAAxwDAAccCAABHQccAR0CAAMcAwAHHAgAAdUMBxwBHQIAAxwDAAccCAAB3QwHHAHdDAIAAR0BHAEdAwAHHAkABhwBHQMAAR0BHAEdAwAHHAkABhwBHQMAAd0MAR0B3QwDAAccCQAFHAEdAd0MBAABHQQABxwJAAHVDAMcAtUMBQAB3QwEAAccCQAB1QwDHAEdAd0MCgAHHAkAAd0MAxwB3QwLAAEdBRwB1QwKAAMcDAABHQUcAR0KAAEdARwBHQwAAd0MBRwB3QwKAAEdAtUMDQAFHAsAAd0MAR0B3QwNAAUcDAAB3QwOAAUcGwAFHBsABRwbAAEdBBwbAAHVDAQcGwAB+gkDHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQAB3QwBHAEdHgABHQHVDB4AAR0B3QweAAH6CXwABxwBAAHdDAYACBwB3QwIAAccCAAHHAEdCQAHHAgABxwBHQkABxwIAAccAd0MCQAHHAgABxwKAAccCAAB1QwFHAEdCgAHHAgAAdUMBRwBHQoABxwIAAHdDAUcAd0MCgAHHAkABRwLAAEdBRwBHQkABRwLAAEdBRwB1QwJAAUcCwAB3QwFHAHdDAkAAR0DHAEdDAAFHAoAAR0DHAHVDAwABRwKAAHdDAMcAd0MDAAFHAsAAxwNAAUcCwAB1QwCHA0ABRwLAAEdAdUMAR0NAAEdBBwLAAHdDAIdDQABHQMcAR0MAALdDA0AAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQEcAdUMHQAB3QwBHQHdDB4AAR0fAAHdDJkBAAH6CQMABhwB1QwCHAQAAd0MBxwB3QwJAAccAR0BHAEdBQAHHAoABxwB3QwCHQUABxwKAAEdBRwBHQEAAR0B3QwFAAccCgAB1QwFHAEdAQAB3QwGAAccCgAB3QwFHAHdDAgABxwLAAUcCQABHQUcAR0LAAUcCQABHQUcAR0LAAUcCQAB3QwFHAHdDAsABRwKAAUcDAAFHAoABRwMAAUcCgAFHAwAAR0DHAHVDAoAAR0DHAHVDAwAAR0DHAEdCgABHQMcAR0MAAHdDAMcAd0MCgAB3QwDHAHdDA0AAxwMAAMcDgADHAwAAR0CHA4AAR0CHAwAAdUMAhwOAAMdDAAB3QwCHA4AAd0MAtUMDQACHA8AAt0MDQABHQEcHgACHR4AAd0MAR0fAAHdDI0CAAscAR0CAAccCwAFHAEdBRwBHQIABxwLAAUcAR0FHAHdDAIABxwLAAEdAxwBHQHdDAUcAwAHHAsAAR0DHAEdAQAFHAMABxwLAAHdDAMcAd0MAQABHQMcAR0DAAEdBRwBHQwAAxwCAAHVDAMcAR0DAAEdBRwBHQwAAxwCAAHdDAMcAd0MAwAB3QwFHAHdDAwAAxwDAAEdARwBHQUABRwNAAHVDAEcAR0DAAMdBQAFHA0AAR0B1QwBHQMAAd0MAR0B3QwFAAUcDQAB3QwBHQHdDAQAAd0MBgABHQQcDgAB3QwMAAEdBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwBHRwAAR0CHAEdHAAB3QwCHAHdDB0AAhweAAIcHgABHQEcHgAB1QwBHB4AAd0MAR0eAAHeDAEdHgAB3gwB+gkeAAHeDKsBAAH6CQIAAd0MDBwBAAccAfoJCwAMHAEAAdUMBRwBHQwAAR0BHAIdBxwBHQEAAR0FHAEdDAABHQEcAh0HHAEdAQAB3QwFHAHdDAwAAd0MAR0C3QwHHAHdDAIABRwOAAHVDAIABxwDAAUcDgAB3QwCAAccAwAFHBEABxwDAAEdBBwRAAccAwABHQQcEQABHQUcAdUMAwAB3QwEHBEAAR0FHAEdBAAEHBEAAd0MBRwB3QwEAAQcEgAFHAUABBwSAAUcBQABHQMcEgAEHAEdBQABHQMcEgAEHAEdBQAB3QwBHQEcAR0SAAQcAd0MBgAB1QwBHAHVDBIAARwB1QwBHAEdBwAB3QwBHAHdDBIAARwBHQHVDAEdCAABHBMAARwB+gkBHQHdDAgAAR0TAAEdAQAB3QwJAAEdEwABHQsAAd0MEwAB+gm6AgABHQscAdUMAQAFHAIAARwKAAEdCxwB1QwBAAHVDAMcAR0CAAEcCgAB3QwBHQocAd0MAQABHQMcAR0CAAEcCwACHQkcAgAB3QwDHAHdDAIAAR0LAAHdDAEdCRwDAAMcAwABHQwAAd0MCRwDAAHVDAEcAdUMAwAB3QwNAAkcAwACHQHVDBEACRwDAAHdDAEdAd0MEQAJHAQAAd0MEgAB1QwHHAEdFwABHQccAdUMFwAB3QwHHAHdDBgABxwZAAccGQAHHBkABxwZAAYcAR0ZAAYcAR0ZAAYcAd0MGQABHQUcGgABHQUcGgAB3QwB1QwDHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAdUMAd0MHgAB3QxyAAHdDAEdAd0MAwAB+gkMHAHdDAEAAfoJAd0MBAABHAUAAR0FAAEdCxwIAAEcBQAB3QwFAAEdCxwIAAEcCwAB3QwLHAgAARwMAAscCAABHAwAAR0JHAEdCAABHAwAAdUMCRwB1QwIAAEcDAAB3QwJHAHdDAgAARwNAAkcCQABHA0ACRwJAAEdDQAJHAkAAR0NAAkcCQAB3QwNAAkcFwAJHBcAAR0HHAHVDBcAAdUMBxwBHRcAAd0MBxwB3QwYAAccGQAHHBkABxwZAAccGQABHQUcAdUMGQAB1QwFHAHVDBkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAEdBBwbAAIdAxwbAAHdDAEdAdUMAhwbAAHeDAHdDAMdHQAB3QwCHRAABRwCAAHdDAwcAR0GAAEcBAAB1QwDHAEdAwAMHAEdBgABHAQAAdUMAxwBHQMACxwBHQHdDAYAARwEAAHdDAMcAd0MAwALHAEdBwABHAUAAxwEAAscAd0MBwABHAUAAR0BHAEdBAALHAgAARwFAAMdBAALHAgAARwFAAHdDAHVDAHdDAQACxwIAAEcBgAB3QwFAAEdCRwBHQgAARwMAAEdCRwBHQgAARwMAAHdDAkcAd0MCAABHQ0ACRwJAAEdDQAJHAkAAd0MDQAJHBcACRwXAAkcFwAJHBcAAR0HHAEdFwABHQccAR0XAAHdDAccAd0MGAAHHBkABxwZAAccGQAHHBkABxwZAAEdBhwZAAEdBhwZAAHdDAYcGgAGHBoABhwaAAEdAxwBHQEcGgAB1QwDHAEdAdUMDgAHHAEAAd0MDRwB3QwDAAH6CQHdDAEcAwABHQUcAR0CAA0cBgABHAMAAR0FHAEdAgAMHAHVDAYAARwDAAHdDAUcAd0MAgAMHAHVDAYAARwEAAUcAwALHAEdAd0MBgABHAQABRwDAAscAdUMBwABHAQABRwDAAscAd0MBwABHAQAAR0DHAHVDAMACxwIAAEcBAAB1QwDHAEdAwALHAgAARwEAAHdDAMcAd0MAwABHQkcAR0IAAEdBQADHAQAAR0JHAEdCAAB1QwFAAEdARwBHQQAAd0MCRwB3QwIAAHdDAUAAR0B1QwBHQUA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AR0EAAEdBRwQAAUcAR0EAAHdDAEdBBwQAAEdBBwB3QwFAAEdBBwQAAHVDAMcAR0GAAHdDAQcEAAB3QwDHAHVDAcABBwRAAMcAd0MBwAEHBEAAhwBHQgAAR0CHAEdEQADHQgAAR0CHAEdEQAB1QwBHQH6CQgAAd0MARwB1QwB3QwRAAHdDAH6CQoAAdUMAR0eAAEdAd0MHgAB3Qz7AgABHQccBQAB3QwB1QwB3QwGAAccAgABHAHdDAccBgAB3QwHAAHVDAUcAR0CAAEdAQAHHA4AAR0FHAEdAgABHQEABxwOAAHdDAUcAfoJAgAB3QwBAAccDwAFHAUABxwPAAUcBQAHHA8ABRwFAAccDwABHQQcBQAHHA8AAdUMBBwFAAHVDAUcAR0PAAHdDAQcBQABHQUcAR0QAAEdAxwFAAHdDAUcAd0MEAACHQHVDAEcBgAFHBEAAd0MAh0BHAYABRwSAALdDAHVDAYABRwUAAEdBgAB1QwEHBQAAd0MBgABHQQcGwAB3QwEHBwAAxwB1QwcAAMcAR0cAAMcAd0MHAAB1QwCHB0AAdUMAhwdAAHdDAEcAR0eAAIdHgABHQHdDB4AAd0MuwEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("kYABAAHeDAHdDAH6CfsHAAHdDAIcAR0B3QwBHRsAAR0BHAEdAQAB3QwbAAEdARwB3QwBAAHeDBsAAfoJAR0CAAHeDBwAAR0CAAHeDBwAAd0MHwAB3gy9BgABHQEcAfoJARwB1QwBHRoAAd0MARwBLQEcAt0MGwAB1QwBLQEdHQABHQEtAR0dAAHdDAEtAd0MHgABLR8AAR0fAAHdDJ0GAAHdDAIcAdUMAd0MHAAB1QwBHAH6CQHeDBwAAR0BHB4AAd0MARwfAAHVDB8AAR0fAAH6Cb0GAAEcAd0MAR0B3QwcAAEdAQAB3QwdAAEdAQAB3gwdAAHdDB8AAd4MHwAB3gwfAAHeDLBeAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AR0HHA8ABRwB3QwDAAEdBxwPAAEdAxwBHQQAAd0MBxwPAAHVDAMcAR0FAAccDwAB+gkDHAHdDAUABxwQAAMcBgAHHBAAAR0CHAYABxwQAALVDAEcBgAHHBAAAd0MAR0BHAYABxwRAAHdDAEdBgABHQYcEgABHQYAAR0FHAEdEgAB3QwGAAHdDAUcAdUMGgAFHAHdDBoABRwbAAUcGwAFHBsABRwbAAEdBBwbAAEdAxwBHRsAAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAEdAhwdAAEdARwBHR0AAd0MARwBHR4AAR0B3QweAAEdAd4MHgAB3QwB3gwfAAHeDDoAAR0HHBgAAd0MBxwZAAccGQAHHBkABxwZAAccGQAHHBkABxwZAAccGQABHQUcAR0ZAAEdBRwB1QwZAAHdDAUcAd0MGgAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAdUMARwBHR0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDJsBAAHdDAccGQAHHBkABxwZAAEdBRwBHRkAAR0FHAEdGQAB3QwFHAHdDBoABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAEdARwBHR0AAx0dAAHdDAHVDAHdDB4AAd0M/QIABRwB3QwaAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAMcHQADHB0AAdUMAhwdAAEdAhwdAAHdDAIcHgACHB4AAhweAAHVDAEdHgAB1QwBHR4AAt0M2uMBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("AhwBHQHdDBwAAhwB1QwdAAIcAd0MHQACHB4AAhweAAIdHgAC1QweAAHdDAH6CZ8GAALdDP33AQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          rockSnowLarge3: ID("rockSnowLarge3", {
            x: 38,
            y: 40,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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AR0ZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAh0DHBsAAh0DHBsAAt0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MjAEAAd0MChwBHQHVDAwcCAABHQHVDAEdBBwCHQHVDAIdDBwIAAMdAdUMARwEHQHVDALdDAwcCAAD3QwBHQHVDAIdA90MAgAMHAsAAd0MAR0C3QwFAAscAdUMDAAB3QwHAAEdChwBHRQAAdUMChwB3QwUAAHdDAocFgAKHBYACRwBHRYACRwBHRYACRwB3QwWAAHVDAgcFwABHQgcFwAB3QwIHBgACBwYAAccAdUMGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAdUMBBwB1QwaAAEdBBwB1QwaAAHdDAEdAxwB3QwbAAEdAxwcAAHdDAIcAdUMHQABHQEcAR0dAAEdAdUMAd0MHQAB3QwBHQ8AAR0HHAIdDBwKAAHVDAEdBhwCHQwcCgAB3QwBHQYcAt0MDBwLAAHdDAUcAR0CAAwcDAAEHAIdAgAMHAwAAhwBHQHVDAEdAd0MAgABHQscDAAEHQHdDAMAAR0KHAEdDAABHQHVDALdDAQAAd0MChwBHQwAAt0MBwAKHAHdDBUACRwBHRYACRwBHRYACRwB3QwWAAkcFwABHQgcFwABHQgcFwAB3QwIHBgACBwYAAgcGAAHHAEdGAAHHAHVDBgAAR0GHAHdDBgAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAR0EHAEdGgABHQQcAR0aAAHdDAQcAd0MGwABHQMcHAABHQMcHAAB3QwCHAEdHQABHQEcAR0OAAEdBxwCHQwcCgAB3QwHHALdDAwcCwAHHAIADBwLAAccAgAMHAsAAR0FHAEdAgAMHAsAAR0EHAIdAgAB1QwLHAsAAd0MAdUMAR0BHAIdAd0MAgAB1QwKHAHVDAwABB0B3QwDAAHdDAocAR0MAALdDAEdAd0MBQAKHAHdDA4AAd0MBgAKHBYAChwWAAkcAR0WAAEdCBwBHRYAAR0IHAHdDBYAAd0MCBwYAAgcGAAIHBgACBwYAAgcGAABHQccGAABHQYcAR0YAAHdDAYcAdUMGQAGHAHdDBkAAR0FHBoAAR0EHAEdGgAB3QwEHAEdGwAEHAHdDBsAAR0DHBwAAR0DHBwAAd0MAR0BHAHVDB0AAR0BHAHVDB0AAd0MAR0B3QwNAAIdBxwCHQwcCQAB3QwBHQccAt0MDBwKAAHdDAccAgAMHAsABxwCAAEdCxwLAAEdBhwCAAHVDAscCwABHQUcAR0CAAHdDAscCwAB3QwB1QwDHALVDAMAChwBHQwAAh0CHAEdAd0MAwAKHAEdDAAB3QwBHQEcAR0B3QwEAAocAd0MDQAB3QwBHAEdBQAKHA8AARwB3QwFAAEdCBwBHQ8AAdUMBgABHQgcAR0PAAEdBgAB3QwIHAHdDA8AAd0MBwAIHBgACBwYAAHVDAccGAABHQccGAAB3QwHHBkABhwBHRkABhwB1QwZAAYcAd0MGQABHQUcGgAB1QwEHAEdGgAB3QwBHQMcAR0bAAEdAxwB3QwbAAHdDAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAR0B3QweAAHVDB8AAd0MLQACHQgcAR0B1QwMHAgAAd0MAh0HHALdDAwcCQAB3QwBHQccAgAB1QwLHAoAAd0MBxwCAAEdCxwLAAccAgAB3QwKHAEdCwABHQUcAdUMAwAKHAEdCwABHQUcAR0DAAHVDAkcAd0MCwAB3QwB1QwDHAEdAd0MAwAB1QwJHA0AAR0DHAEdBAAB3QwJHA0AAd0MAxwB3QwFAAgcAdUMDgADHAYACBwBHQ4AAdUMARwBHQYAAR0HHAHdDA4AAh0B1QwGAAEdBxwPAAHdDAEdAd0MBgAB3QwHHBAAAd0MCAAHHBkABxwZAAEdBhwZAAEdBRwB1QwZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAR0EHBsAAh0CHAEdGwAB3QwB1QwCHAEdHAAB3QwCHQHdDB0AAh0eAALdDKcBAAHVDA4cAh0LHAHVDAMAAd0MDhwC3QwLHAHdDAQABRwC1QwGHAHVDAIAAdUMChwFAAEdBBwBHQHVDAYcAR0CAAHVDAEdCRwFAAHVDAMcAR0C3QwGHAHdDAIAAd0MAdUMCRwFAAHdDAEdAhwB1QwCAAYcBAAB3QwJHAYAAdUMAR0B1QwB3QwCAAEdBBwBHQUACBwBHQYAAd0MAdUMAR0DAAEdBBwBHQUACBwBHQcAAt0MAwAB3QwBHQMcAd0MBQABHQccAd0MDQABHQMcBgAB1QwGHAEdDgAB3QwBHQEcAR0GAAHdDAYcAdUMDwAC1QwBHQcAAdUMBRwB3QwPAAHdDAEd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CxwB3QwMAAEdAxwBHQMACxwNAAHdDAEdARwB1QwB3QwDAAscDgAB1QwCHQQACxwOAAHdDAHVDAHdDAQACxwPAAHdDAUACxwVAAscFQABHQkcAR0VAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwAJHBcAAdUMCBwXAAEdCBwXAAHdDAgcGAAHHAEdGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBRwBHRoABRwBHRoAAR0EHAHdDBYADRwBAAccAx0GHAEdAQANHAEAAR0GHAPdDAYcAR0BAA0cAQAB1QwBHQQcAR0DAAYcAd0MAQANHAEAAd0MAdUMBBwB1QwDAAYcAgANHAIAAd0MBBwB3QwDAAYcAgANHAMABBwEAAEdBRwCAAEdCxwBHQMAAxwBHQQAAR0FHAIAAR0LHAEdAwADHAEdBAAB3QwFHAIAAd0MCxwB3QwDAAEdARwBHQHdDAUABRwDAAscBAADHQYAAR0DHAEdAwALHAQAAd0MAR0B3QwGAAHVDAMcAR0DAAscBQAB3QwHAAHdDAEdARwBHQHdDAMACxwOAAHVDAIdBAALHA4AAd0MAR0B3QwEAAscDwAB3QwFAAEdCRwB1QwVAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwABHQgcFwABHQccAdUMFwAB3QwHHAEdGAABHQYcAd0MGAACHQUcGQAB3QwBHQUcGgAB3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwXAA0cAQAHHAMdBhwBHQEADBwB1QwBAAEdBhwD3QwGHAHdDAEADBwBHQEAAR0GHAMABhwCAAEdCxwB3QwBAAHdDAUcAR0DAAYcAgABHQscAwAFHAEdAwABHQUcAgAB3QwLHAMABRwB3QwDAAEdBRwDAAscAwAFHAQAAd0MBRwDAAscAwAFHAUABRwDAAscAwABHQIcAh0FAAEdAxwB1QwDAAscAwABHQIcAdUMAR0FAAEdAxwB1QwDAAscAwAB3QwBHQHVDALdDAUAAd0MAR0BHAHVDAHdDAMAChwBHQQAAR0B1QwIAAMdBAAKHAEdBAAC3QwIAAHdDAEdAd0MBAAB1QwJHAHdDA8AAd0MBQABHQkcFgAB3QwJHBcACRwXAAkcFwABHQccAR0XAAHVDAccAdUMFwAB3QwHHAHdDBgABhwBHRkAAx0DHAEdGQADHQMcAd0MGQAD3QwDHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAR0BHB4AAh0YAAEdCxwDHQYcAR0B3QwBAAYcAgAB3QwLHALdDAEdBhwB3QwBAAHdDAYcAwALHAIAAd0MBhwDAAEdBRwDAAscAwAGHAMAAdUMBRwDAAscAwAFHAEdAwAB3QwFHAMAAR0KHAMABRwBHQQABBwBHQMAAR0KHAMABRwB3QwEAAEdAxwBHQMAAd0MChwDAAQcAR0FAAEdAxwB3QwEAAocAwAEHAEdBQAB3QwBHQEcAdUMBQAJHAEdAwABHQIcAR0B3QwGAAMdBQAJHAHVDAMAAR0B1QwBHAHVDAcAAd0MAR0B3QwFAAkcAd0MAwAB3QwBHQEcAd0MCAAB3QwGAAgcAR0FAAHdDAHVDBAACBwB1QwGAAEdEAAIHAHdDAYAAd0MEAAIHBgAAdUMBxwYAAEdBxwYAAHdDAYcAR0ZAAEdBRwB1QwZAAMdAxwB3QwZAAHdDAIdAhwBHRsAAt0MAhwBHR0AAdUMAR0B3QwdAAIdHgAC3QzZAQALHAEAAd0MAR0HHAMABBwEAAEdCRwBHQIAAd0MBxwDAAQcBAABHQkcAR0DAAEdBhwDAAEdAxwEAAHdDAkcAd0MAwABHQQcAR0BHAMAAR0DHAUACRwEAAHdDAQcAR0B3QwDAAIdARwBHQUACRwFAAQcAd0MBAAEHQUACRwFAAQcBQABHQHdDAHVDAHdDAUAAR0IHAUAAxwBHQUAAd0MAQAB3QwGAAEdCBwFAAIcAh0OAAHdDAgcBQACHAHVDAHdDA8ABxwBHQUAAhwB3QwQAAccAdUMBQABHAEdEQAB1QwFHAEdAd0MBQABHAEdEQABHQUcAR0GAAEdAd0MEQAB3QwFHAHdDAYAAR0TAAUcBwAB3QwTAAUcGwAFHBsAAh0CHAEdGwACHQIcAR0bAALdDAIcAd0MHQABHQEcHgAB1QwBHR4AAd0MAdUMHwAB3Qz6AQAB1QwIHAMAAd0MAR0JHAEAAx0FAAEdCBwEAAEdCRwBAAPdDAUAAd0MCBwEAAHdDAHVDAIcAR0B3QwEHAoABxwBHQUAAR0CHAHdDAEABBwKAAccAdUMBQAB3QwCHAIABBwKAAccAd0MBgACHAIABBwKAAccBwACHAIABBwKAAccBwAB1QwBHQIABBwKAAccBwAB1QwBHQIABBwKAAEdBRwBHQcAAt0MAgAEHAoAAR0FHAEdCwABHQMcCgAB3QwCHQMcAd0MCwABHQMcCwAB1QwBHQMcDAAB3QwDHAsAAt0MAhwBHQ0AAxwNAAIcAdUMDQADHA0AARwBHQHdDA0AAxwNAAIdDgADHA0AAR0B3QwOAAMcDQAB3QwPAAMcHQACHAEdHQABHQEcAR0dAALVDAHdDB0AAd0MAR0fAAHdDIgCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gHAAARwfAAHVDB8AAR0fAAHdDJ8HAAEcHwABHB8AAdUMHwABHR8AAd0M/wYAARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wYAARwfAAEcHwABHR8AAdUMHwAB3Qz/BgABHR8AAR0fAAHdDL9vAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("mngAAd0M/gcAAh0B3QwdAAHdDAEdHwAB3Qy/BwAB1QwfAAHdDMo3AAMcAd0MHAABHQEcAR0dAAHVDAIdHQAB3QwBHQHdDB4AAd0M/QYAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAABHQEcAR0dAAIdAdUMHQAB3QwBHQHdDB4AAd0MvQYAAR0EHBsAAd0MAxwBHRwAAxwBHRwAAxwB3QwcAAHVDAEcAR0dAAMdHQAB3QwBHQHdDB4AAd0MngYAAxwB1QwcAAEdAhwBHRwAAR0CHAHdDBwAAd0MARwBHR4AAh0eAAEdAd0MHgAB3Qy/BgAB3QwB1QwfAAHdDNgfAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AwABHQUcAR0EAAHdDAIdAdUMAx0EHAoAAd0MBRwB3QwFAALdDAQdBBwLAAHVDAQcCAAE3QwEHAsAAR0DHAHVDAwABBwLAAHdDAQdDAAEHAwAAdUMAh0B3QwMAAQcDAAD3QwNAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwB1QwdAAHVDAEcAd0MHQACHR4AAd0MAR0fAAHdDLYBAAHdDAUcAR0EHBYABRwB1QwEHBYAAR0DHAEdAd0MBBwWAAEdAxwBHQEABBwWAAHdDAMcAd0MAQAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAhwBHQIAAR0DHBcAAR0BHAHVDAIAAR0DHBcAAdUMARwB3QwCAAHdDAMcFwAB3QwBHQQAAxwYAAEdBAADHBgAAd0MBAADHB0AAhwB1QwdAAIcAR0dAAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AAR0fAAEdHwAB3Qz2AQABHQUcAR0EHBUAAd0MBRwB3QwEHBYABRwBAAQcFgAFHAEAAR0DHBYABRwBAAEdAxwWAAUcAQAB3QwDHBYABRwCAAMcFgAFHAIAAxwWAAUcAgACHAEdFgAEHAHVDAIAAhwBHRYABBwBHQIAARwBHQHdDBYABBwB3QwCAAIdFwAEHAMAAR0B3QwXAAQcAwAB3QwYAAEdAxwcAAHVDAMcHAAB3QwDHB0AAxwdAAMcHQADHB0AAR0CHB0AAR0BHAEdHQAB3QwBHAEdHgABHQHdDB4AAR0fAAHdDNsBAAHdDAEdBRwEHQEcFQAB3QwFHATdDBcABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwcAAQcHAAEHBwABBwcAAEdAxwcAAEdAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAR0BHAHVDB0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDHsAAd0MAR0FHAMdAd0MFgAB3QwFHAPdDBgABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsABBwcAAQcHAAEHBwABBwcAAQcHAAB1QwDHBwAAR0DHBwAAd0MAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHQABHQEcAdUMHQAB3QwBHAEdHgAB1QwB3QweAAEdHwAB3QybAQAC3QwFHAHVDAHdDBkABRwB3QwaAAEdAxwB1QwbAAEdAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAR0BHAHVDB0AAR0B1QwB3QwdAAHdDAEdHwAB3Qyu1AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }])
        };

        function GD(DD, zD, wD) {
          const pD = new RD.d;
          for (const KD of wD) {
            const DD = pD.get(KD.chunkX, KD.chunkY, KD.chunkZ);
            if (!(0, sD.B)(DD)) throw new Error(`Duplicate chunk at ${KD.chunkX}, ${KD.chunkY}, ${KD.chunkZ}`);
            pD.set(KD.chunkX, KD.chunkY, KD.chunkZ, KD.rle)
          }
          return new gD.e(DD, {
            x: 0,
            y: 0,
            z: 0
          }, zD, pD)
        }
        const hD = {
          ruinSnowLarge1: GD("ruinSnowLarge1", {
            x: 37,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gBAAAd0M/wcAAR0B3QweAAEdHwAB+gm/BwABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAdUMAd0MHAACHAEdHQAB1QwBHQHdDB0AAh0eAALdDP4GAAMcAR0cAAIcAh0cAAIcAR0B3QwcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0M/wQAASIfAAEiHwABIh8AASIfAAEiHwABIh8ABBwBHRsABBwB3QwbAAMcAR0cAAIcAh0cAAIcAR0B+gkcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0MnwQAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIeAAQcAR0bAAQcAdUMGwAEHAHdDBsAAxwBHRwAAhwCHRwAAhwB1QwB3QwcAAEcAR0B3QwdAAIdHgABHQHdDB4AAd0MvwMAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4ABRwB3QwaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAhwCHRwAAhwBHQHVDBwAAtUMAt0MHAACHR4AAt0M/gIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAyIeAAIiHgACIh4AASIB3QweAAEiHgAFHAEdGgAFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAAEHRwAAR0B1QwBHQHdDBwAA90M/QIAASIfAAIiHgACIh4AAiIeAAMiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAGHBoABhwaAAUcAR0aAAUcAR0aAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAABHAMdHAABHAEdAdUMAd0MHAAB1QwC3QwdAAEdHwAB3QyfAQABIh8AASIfAAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIfAAEiHwABIh8AASIeAAIiHQAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAEHAEdAd0MGgAEHAEdGwADHAEdAd0MGwADHAEdHAABHAHVDAEdAd0MHAABHAIdHQABHQLdDB0AAR0fAAHdDH8AASIfAAIiHgACIh4AAiIeAAIiHgADIh4AAiIeAAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAEHAHVDAH6CRoABBwBHRsAAxwBHQHdDBsAAhwC1QwcAAEcAh0B3QwcAAIdAd0MHQABHQHdDB4AAd0MfwABIh8AAiIeAAIiHgACIh4AAyIdAAHdDAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwB1QwaAAUcAfoJGgAEHAEdGwADHAIdGwADHAEdAfoJGwACHAEdAd0MHAABHAIdHQABHAHVDAHdDB0AAR0B3QweAAEdHwAB3QxfAAIiHgADIh0AAyIdAAMiHQAB3QwCIh4AAd0MAiIeAAIiHgACIh4AAiIeAAIiHgACIh8AASIfAAHdDDwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAFHAHdDBoABBwBHRsABBwBHRsAAxwBHQH6CRsAAxwBHRwAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAHVDAHdDB4AAd0MPwACIh4AAyIdAAMiHQADIh0AAd0MAyIdAAHdDAIiHgACIh4AAd0MASIfAAEiHwABIh8AAd0MfAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAACHAHVDAHdDBwAAhwBHR0AASIBHAHdDB0AASIBHB4AAiIeAAIiHgADIh0AAyIdAAEiAd0MAiIcAALdDAIiHgACIh4AAiIeAAHdDAEiHwABIh8AASIfAAHdDJwBAAYcGgAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAFHAHdDBoABRwbAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAASIBHAHVDAHdDBwAAiIBHR0AAiIB3QwdAAIiHgACIh4AAyIdAAQiHAAEIhwAAt0MAiIeAAIiHgAB3QwBIh8AASIfAAEiHwABIh8AAd0MnAEABhwaAAYcGgAGHBoABhwaAAUcAdUMGgAFHAEdGgAFHAHdDBoABBwBHRsABBwBHRsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAABIgEcAR0dAAIiAR0dAAIiAd0MHQABHAEiHgABHAIiHQABHAIiHQABHQMiHAABHQMiHAAB3QwDIh0AAt0MASIfAAEiHwABIh8AASIfAAIiHgAC3QybAQAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAH6CRwAAhwBHR0AASIBHAHVDB0AAiIB3QwdAAIiHgADIh0AAyIdAAMiHQAEIhwAAd0MAyIdAALdDAEiHwABIh8AASIfAAEiHwACIh4AAiIeAAEiAd0MHgAB3QxcAAYcGgAGHBoABRwBHRoABRwBHRoABRwB+gkaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAAxwB3QwcAAIcAR0dAAIcAR0dAAEiARwB3QwdAAIiHgACIh4AAiIeAAMiHQADIh0AAyIdAAQiHAAC3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AASIB3QweAAHdDDwABhwaAAUcAR0aAAUcAR0aAAUcAd0MGgAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAADHAEdHAADHAHVDBwAAxwB3QwcAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAEiARweAAIiHgACIh4AAiIeAAMiHQADIh0ABCIcAAHdDAMiHQAB3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AAiIeAAEiAd0MGwAFHAEdGgAFHAHVDBoABRwB3QwaAAQcAdUMGwAEHAHVDBsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAADHB0AAxwdAAIcAR0dAAIcAR0dAAEcAR0B+gkdAAEcAR0eAAEcAd0MHgABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQAEIhwABCIdAAMiHgACIh4AAiIfAAEiHwABIh8AAiIeAAEiAd0MHgABIhwABRwBHRoABRwB1QwaAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAADHAHdDBwAAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AARwBHR4AARwBHR4AARwB3QweAAEiHwABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQADIh0AASIBAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAR0cAAMcAd0MHAACHAHVDB0AAhwB1QwdAAIcAd0MHQACHB4AAhweAAEcAR0eAAEcAR0eAAHVDAHdDB4AAR0fAAHdDD8AASIfAAEiHwACIh4AAyIdAAMiHQADIh0AAyIeAAIiHwACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAEHAEdGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAHdDBwAAhwB1QwdAAIcAR0dAAIcAfoJHQABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHR8AAdUMHwAB3Qx/AAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAEHAEdGwAEHAH6CRsAAxwB1QwcAAMcAR0cAAIcAR0B3QwcAAIcAR0dAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0M3wEAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIfAAEiHwACIh4AAiIeAAIiHQADIh0ABBwBHRsAAxwBHQHdDBsAAhwCHRwAAhwB1QwB3QwcAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgADHAEdHAACHAIdHAACHAEdAd0MHAABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDL8DAAEiHwABIh8AASIfAAEiHwABIh8AASIfAAEiHwABIh8AAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AARwBHR4AARwB3QweAAEdHwABHR8AAd0MnwYAAhwB3QwdAAEcAR0eAAEcAR0eAAEdAd0MHgAB1QwfAAHdDN8GAAEcAd0MHgAB1QwfAAEdHwAB+gmfBwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("DgAC3QwJIgLdDBUACd0M0wcAAd0MDyIB3QwQAA8iEQAC3QwLIgLdDBMAC90MoAcABCIPABAiAd0MDwAPIgHdDBAAA90MCSID3QwUAAciAt0MFwAH3QzRBgACIhIAAyIJAAHdDAIiEAADIgHdDAoAAd0MAyILAAUiAd0MDAAB3QwRIgHdDA4AAt0MBiID3QwEIgLdDBEADd0MzQYAAd0MAiITAAIiCQADIhEAAyIJAAHdDAMiDwADIgHdDAoAAd0MBiICAAsiAd0MDAAC3QwBIgPdDAIiB90MAiIC3QwPAAXdDAEiCd0MEwAL3QyuBgACIhUAAiIHAAMiEwADIgcAAd0MAyIRAAMiAd0MCAAB3QwHIgcAByIB3QwKAAHdDAIiBN0MByIF3QwBIgHdDAwAB90MASIL3QwPAA/dDKsGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAHdDAYiCwAGIgHdDAgAAd0MAyIC3QwLIgTdDAEiAd0MCgAC3QwBIgXdDAEiDN0MDQAR3QwVAAXdDI8GAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwCIhUAAiIHAAQiEAAFIgcAAd0MByIJAAMiAt0MAiIB3QwIAALdDAIiA90MCSIH3QwLABPdDBEAC90MjAYAAiIeAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwDIhIABCIHAAHdDAYiCwADIgHdDAIiAd0MCAAB3QwCIgPdDAsiBN0MASIB3QwKABXdDA8ADd0MiwYAAiIeAAIiHgAB3QwCIhcAASIGAAUiEgADIgYAAd0MASID3QwBIg8ABSIHAAXdDAMiCQADIgLdDAEiAt0MCQAG3QwJIgbdDA4AD90MiQYAAiIeAAHdDAIiHgADIhcAASIFAAHdDAQiEwADIgYABN0MAiIPAAIiAt0MASIHAAXdDAIiCwACIgXdDAgABt0MCyIG3QwMABHdDIgGAAIiHgADIh0AAd0MAiIeAAQiFQACIgUAAd0MASIC3QwCIhEAAiIC3QwGAAXdDAIiDQACIgTdDAcABt0MBCIFAAQiBt0MCwAG3QwFAAbdDIcGAAMiHQAB3QwCIh4AAyIdAAHdDAQiFQACIgUAAd0MASIC3QwBIhMAASIC3QwGAATdDAIiDwACIgPdDAcABd0MBCIHAAQiBd0MCAAI3QwHAAXdDIcGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGAABIgUAAd0MBCITAAIiAd0MBgAE3QwCIg8AAiID3QwHAAXdDAMiCQADIgXdDAgAB90MCQAF3QyGBgACIh4AAiIeAAHdDAIiHgADIhgAASIEAAHdDAUiEwADIgUAAd0MAyIB3QwCIg8AAiID3QwGAALdDAEiA90MAiILAAIiBd0MCAAG3QwLAAXdDIUGAAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAEiHwACIh4AAyIdAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAHdDAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MBCIVAAIiBQAB3QwCIgHdDAIiEQACIgLdDAYABd0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAIiHgACIh4AAyIdAAHdDAIiGQABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAIiEQACIgLdDAYABd0MAyILAAMiBN0MBwAH3QwLAAXdDIUGAAIiHgACIh4AAd0MAiIeAAMiGAABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAMiDwADIgLdDAYABt0MAiILAAIiBd0MBwAH3QwLAAXdDIUGAAIiHgAB3QwCIh4AAiIeAAMiGAABIgQAAd0MBSITAAIiAd0MBQAB3QwBIgPdDAIiDwACIgPdDAYABt0MAyIJAAMiBd0MCgAF3QwJAAXdDIcGAAIiHgACIh4AAyIdAAHdDAMiFgACIgUAAd0MBSIRAAIiAt0MBgAB3QwBIgPdDAIiDQACIgTdDAcABt0MDSIG3QwKABPdDIcGAAHdDAIiHgACIh4AAyIXAAEiBQAB3QwCIhUAAyIGAAHdDAUiDwACIgLdDAEiBwAB3QwBIgPdDAMiCQADIgXdDAgAB90MCSIH3QwMABHdDIkGAAMiFwABIgUAAyIXAAEiBQAB3QwDIhUAAiIGAAHdDAIiEwAEIgcAByIMAAIiA90MASIHAAHdDAEiBd0MDCIG3QwIABfdDKcGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAQiDwAGIgcAAd0MCyICAAUiBt0MCAAB3QwBIgndDAIiA90MAiIF3QwKABXdDKkGAAMiEwADIgcABCIRAAQiBwAB3QwEIg8ABCIB3QwIAAoiAwAKIgkAAt0MAiIF3QwKIgTdDAsAAd0MASIF3QwJIgPdDA4AEd0MrAYABiILAAYiCQAB3QwIIgUACCIB3QwKABUiCwAB3QwTIgHdDAwAAt0MASID3QwLIgLdDA8AD90M0AYAESIB3QwOABEiDwAC3QwNIgLdDBEAAd0MCyIB3QwUAAvdDOcGAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gDAAASIfAAHdDN8HAAEiAd0MHgABIh8AAd0MvwcAAiIeAAEiAd0MHgABIh8AAd0MnwcAAiIeAAIiHgABIgHdDB4AASIfAAHdDIAHAAIiHQACIgHdDB0AAiIeAAEiAd0MHgAB3QyABwACIh0AAyIdAAIiAd0MHQACIh4AASIB3QweAAHdDOAGAAIiAd0MHQACIh0AAyIdAAIiAd0MHQABIgHdDB4AAd0M4QYAASIB3QwdAAIiHgACIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh8AASIeAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh4AAiIdAAMiHQACIgHdDB0AAt0MHgAB3QyABwACIh0AAyIdAAHdDAEiAd0MHQAC3QweAAHdDIAHAAIiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAASIfAAEiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAAiIeAAEiAd0MHAADIh0AA90MHQAC3QweAAHdDOEGAAIiHgACIhwAAyIB3QwcAAPdDB0AAt0MHgAB3QzCBgABIh4AAiIeAAIiHAADIgHdDBwAA90MHQAC3QweAAHdDMEGAAIiHgACIh0AAyIcAAMiAd0MHAAB3QwBIgHdDB0AAt0MHgAB3QzBBgACIh4AAiIdAAIiAd0MHAADIh0AAiIB3QwdAAEiAd0MHgAB3QzBBgACIh0AAiIB3QwdAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzABgACIh4AAiIdAAMiHQACIgHdDB0AASIB3QweAAHdDN8GAAIiAd0MHQACIh4AAiIeAAEiAd0MHgAB3Qz/BgACIh4AAiIeAAEiAd0MHgAB3QyfBwABIh8AAd0M3x8A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("BwACHRYcAR0HAAHdDAEdFRwCHQgAAd0MFRwB1QwB3QwJAAEdExwBHQHdDAoAAdUMAR0B1QwRHAHVDAsAAd0MAx0PHAEdAd0MDAAC3QwBHQHVDA0cAh0PAAHdDAIdCxwBHQHVDAHdDBAAAd0MAdUMChwBHQHVDAHdDBIAAd0MAh0GHAMdAfoJFAADHQHVDAMcAh0B1QwB+gkVAALdDAMdAhwBHQLdDBgAAt0MAx0B3QwcAAHdDAIdHgAC3QyaAQAHIhYADSITAA4iEgAPIhEAAyIB3QwBAAPdDAciEQABIgLdDAUAAd0MByIQAAHdDAkAAd0MBSIZAAciFwAIIgHdDBYACSIWAAoiFAAMIhEADiIB3QwLAAH6CQEdFRwB1QwB3QwIAAHdDAEdExwCHQoAAR0B1QwBHRAcAdUMAR0B3QwKAAHdDAHVDAIdDxwBHQHdDAwAAt0MAh0NHAEdAfoJDwAB+gkCHQkcBB0RAAHdDAIdAdUMBxwCHQHVDAHdDBIAAd0MAx0FHAEdA90MFAAC3QwFHQHVDAEdGQAB3QwEHQHVDAHdDBoABd0MugIABSIaAAciGQAJIhcACiIWAAPdDAciGQAB3QwGIhoAAd0MBSIaAAUiAd0MGQAEIgLdDBoABCIcAAMiAd0MHAAB3QwBIgHdDBMAAh0RHAIdAfoJCgAC3QwCHQ4cAdUMAR0B3QwNAAEdAdUMAh0KHAMdAd0MDgAC3QwC1QwBHQgcAx0B3QwRAALdDAIdBhwBHQHVDALdDBQAAd0MAdUMBRwCHQHdDBcAAd0MAx0BHAHVDAEdAd0MGQABHQHVDAIdAdUMAd0MGgAB+gkC3QwB1QwB3QweAAHdDNYFAALVDAIdCxwCHQ8AA90MAh0IHAMdAd0MEgAB3QwCHQUcBB0B3QwUAAHdDAIdAdUMAhwDHQLdDBYAAd0MBR0C3QwZAALdDAIdAd0MHQAC3Qy4BgAB3QwDHQHVDAMcBB0B3QwUAAH6CQHdDAgdAd0MFwAC3QwDHQPdDBoAAvoJAd0Mi98BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("Ad0M/wcAAfoJ//cBAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("DQANIgHdDBIAAd0MCyIB3QwUAAsiFQAL3QybBwAB3Qzr9wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          ruinSnowLarge2: GD("ruinSnowLarge2", {
            x: 37,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AgAFHBsABRwbAAUcGwABHQMcAdUMGwAB1QwDHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAdUMAd0MHgABHR8AAd0MnAQABxwDAAH6CQYcAR0OAAccBAABHAEdBBwB1QwOAAccBAABHQHVDAQcAd0MDgABHQUcAR0EAAHVDAHdDAHVDAIcAR0PAAEdBRwBHQQAAd0MAQABHQIcAR0PAAHdDAUcAd0MBgAB3QwCHQH6CRAABRwIAAEdAdUMEQAFHAgAAt0MEQAFHBsABRwbAAHVDAQcGwABHQQcGwAB3QwEHBwABBwcAAQcHAAEHBwAAxwB1QwcAAMcAR0cAAMcAd0MHAADHB0AAxwdAAEdAhwdAAEdAhwdAAHdDAIcHgACHB4AAhweAAEcAR0eAAEcAR0eAAEdAd0MHgABHR8AAd0MPAAHHAH6CQIAAR0IHAH6CQwABxwDAAEdBxwBHQ0ABxwDAAHdDAccAdUMDQAHHAQAAR0GHAH6CQ0ABxwEAAHVDAYcDgAHHAQAAd0MBRwBHQ4ABxwFAAUcAR0OAAccBQAFHAHdDA4ABxwFAAEdBBwPAAccBQABHQMcAdUMDwAGHAEdBQAB3QwDHAEdDwABHQUcAR0GAAEdARwBHQHdDA8AAR0FHAHdDAYAAdUMAh0QAAHdDAUcBwAB3QwBHQH6CREABRwIAAHdDBIABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwABHQMcAR0bAAEdAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAxwdAAEdARwBHR0AAR0BHAEdHQAB3QwBHAHdDBsABxwBHQLdDAkcAR0MAAccAd0MAgAJHAHVDAwABxwDAAkcAfoJDAAHHAMAAR0IHA0ABxwDAAHVDAgcDQAHHAMAAd0MBxwBHQ0ABxwEAAccAR0NAAccBAAHHAHdDA0ABxwEAAEdBhwOAAccBAABHQYcDgAHHAQAAd0MBRwB1QwOAAYcAR0FAAEdBBwBHQ4ABhwB1QwFAAEdBBwB3QwOAAEdBRwB3QwFAAHdDAEdAxwPAAEdBRwHAAEdAhwBHQ8AAd0MBRwHAAHdDAIcAdUMEAAFHAgAAR0B1QwB3QwQAAUcCAACHREABRwIAAH6CQHdDBEABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABBwBHRsAAR0DHAHVDBsAAR0DHAHdDBsAAd0MAxwdAAMcHQADHB0AAR0CHBoAAfoJBxwCHQscDAAHHALVDAscDAAHHALdDAEdCRwB1QwMAAccAgABHQkcAR0MAAccAgAB3QwJHAHdDAwABxwDAAkcDQAHHAMACRwNAAccAwABHQgcDQACHQUcAwABHQgcDQACHQUcAwAB3QwHHAHVDA0AAd0MBRwBHQQABxwB1QwOAAUcAR0EAAHVDAYcAd0MDgAFHAHdDAQAAR0GHA8ABRwFAAHdDAYcDwAFHAYABRwBHQ8ABRwGAAIdAxwBHQ8ABRwGAAUdAd0MDwAFHAYAAt0MAh0B1QwQAAUcCAAD3QwQAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwABHQMcAd0MGwAB1QwDHBwAAd0MAR0CHB0AAR0CHB0AAd0MARwBHR4AAh0eAAEdAd0MGwAUHAH6CQsABxwB1QwBHQscDAAHHAHVDAEdCxwMAAEdBhwC3QwLHAwAAR0FHAEdAgALHAwAAd0MBRwBHQIAAR0JHAEdDQAFHAHdDAIAAdUMCRwBHQ0ABRwDAAHdDAkcAfoJDQAFHAQACRwOAAUcBAABHQgcDgAB1QwEHAQAAR0IHA4AAR0EHAQAAd0MBxwBHQ4AAd0MBBwFAAccAR0PAAQcBQABHQYcAd0MDwAEHAUAAR0GHBAABBwFAAHdDAEdBRwQAAMcAR0GAAIdAxwB1QwQAAMcAdUMBgAB3QwBHQMcAR0QAAMcAd0MBwAB3QwBHQEcAdUMAd0MEAADHAkAAx0RAAMcCQAB3QwBHQHdDBEAAxwKAAHdDBIAAxwdAAMcHQADHB0AAtUMAR0dAAIdAdUMHQAD3QybAQAB+gkTHA0ABhwCHQscDQAFHAMdCxwNAAUcAR0B3QwB+gkLHA0AAdUMAxwBHQHdDAIACxwNAAHVDAMcAR0DAAHVDAkcAR0NAAHdDAMcAd0MAwABHQkcAR0OAAMcBAAB3QwJHAHdDA4AAxwFAAkcDwADHAUACRwPAAMcBQAJHA8AAR0BHAEdBQAB1QwIHA8AAR0BHAEdBQAB1QwHHAEdDwAB3QwBHQHdDAUAAd0MBxwBHRAAAR0HAAccAfoJEAAB3QwHAAHVDAEdBRwZAAHVDAEdBRwZAALdDAQcAdUMGwAB1QwDHAEdGwABHQIcAR0B3QwbAAHdDAIcAdUMHQABHQEcAd0MHQACHR4AAd0MAR0fAAH6CfIBABIcBAAB+gkJAAHVDAMcAdUMAR0B1QwLHA4ABR0B1QwBHQscDgAB3QwBHQHVDAEdA90MCxwPAALdDAH6CQMACxwVAAEdCRwBHRUAAR0JHAEdFQAB3QwJHAHdDBYACRwXAAkcFwAJHBcAAR0IHBcAAR0HHAHVDBcAAd0MBxwBHRgABxwB3QwYAAccGQACHQQcAR0ZAAIdBBwBHRkAAt0MBBwB3QwbAAEdAhwBHRwAAh0BHAEdHAAB3QwCHQHdDB0AAd0MAR0fAAHdDJECAAHdDBMcAdUMAfoJAQAGHAHVDAMABRwBHQ0cAd0MAgABHQUcAd0MAwAB1QwDHAIdDRwDAAEdBRwEAAHVDAQdAd0MDBwBHQMAAd0MBRwEAAHdDAMdAd0MAQABHQscAR0EAAEdAxwBHQUAA90MAgABHQscAd0MBAABHQHVDAIcAR0KAAHdDAgcAR0BHAHVDAUAAd0MAh0BHAHdDAsACBwDHQYAAd0MAh0MAAgcAdUMAR0B3QwHAAH6CQEdDAAIHAHVDAEdCQAB3QwMAAgcAR0B+gkWAAkcFwABHQHVDAccFwACHQccFwAC3QwBHQUcAdUMGQABHQUcAR0ZAAHdDAUcAd0MGgABHQQcGwACHQMcGwAB3QwBHQMcHAAB3QwCHQEcHQAB1QwBHQEcHQAC3QwBHB8AAR0fAAEdHwAB+gnPAQABHR4cAQAB+gkVHAIdBxwCABUcAh0HHAIAAdUMFBwC3QwHHAIAAR0FHAEdDhwCAAccAgAB3QwBHQQcAR0CHAHVDAscAgAHHAMAAh0DHAHdDAIcAR0LHAIAAdUMBhwDAAHdDAMdAdUMAQACHAHdDAQcAR0FHAEdAgABHQYcBAAB3QwDHQEAAR0BHAEABBwBHQUcAdUMAgAB3QwFHAEdBQAD3QwBAAEdBhwB3QwFHAH6CQMABRwBHQkAAd0MBhwBAAUcBAABHQQcAd0MCgALHAEdBAABHQQcCwABHAEdCRwBHQQAAd0MAR0CHAEdCwADHQccAR0B3QwFAAEdAhwBHQsAAdUMAd0MAh0CHAHVDAEcAx0GAAHdDAIdAd0MCwAB3QwBAAHdDAEdAhwEHQHdDAcAAR0B1QwPAAHdDAEdARwB3QwBHQHdDAH6CQgAAd0MAfoJEAABHQEcAQAB3QwcAAHdDAEcHwABHB8AARwfAAEdHwABHR8AAd0MkAIAAfoJHxwBAB8cAQAfHAEAAR0eHAEAAR0eHAEAAd0MAR0JHAEdExwCAAHVDAkcAdUMExwCAAHdDAHVDAQcAdUMAxwB3QwTHAMAAdUMAR0DHAEdAxwBAAscAR0HHAMAAd0MAR0B1QwCHAHdDA4cAdUMAR0HHAQAAfoJAR0B1QwBHAEADhwBHQHdDAccBQAB3QwBHQEcAQAB1QwNHAHdDAEAAR0GHAYAAd0MARwBAAEdDRwCAAEdBhwHAAEcAQAB3QwCHAEdARwB1QwIHAIAAd0MBhwHAAEdAgABHQEcBB0GHAEdAwAFHAHVDAcAAR0CAAEdARwB3QwBHQHdDAIdBRwBHQMABRwBHQcAAd0MAgAB3QwBHAEAAd0MAQAB3QwCHQMcAR0B3QwDAAEdBBwB3QwLAAEcBAAB3QwB1QwDHAEdBAABHQQcDAABHAUAAd0MAxwB3QwEAAHdDAQcDAABHQYAAR0BHAEdBgABHQIcAR0MAAEdBgADHQYAAR0CHAEdDAAB3QwGAAHdDAEdAd0MBgAB3QwB1QwBHAH6CRQAAd0MCAAB1QwBHR4AAd0MAdUMDQADIg8AAd0MDQAEIhsABiIZAAciGQAIIhgACCIYAAgiGAAHIgHdDA8AAdUMHxwB3QwfHAEAHxwBAB8cAQABHRUcAR0IHAEAAR0VHAEdCBwBAAHdDBUcAd0MCBwCAAEdFBwBAAgcAgABHQHVDBMcAQAIHAIAAd0MAh0DHAEdDhwBAAgcAwAB3QwBHQMcAR0OHAEACBwEAAHdDAMcAd0MFxwFAAEdAhwBABccBQAC1QwBHAEAAdUMBBwBHQgcAh0HHAUAAd0MAR0BHAEAAR0EHAIdBxwCHQccBgAB3QwBHQEAAd0MBBwB3QwBHQccAd0MAfoJBxwHAAEdAgABHQMcAQAB3QwBHQUcAR0CAAccBwAB3QwCAAEdAxwCAAEdBRwBHQIAAdUMBhwKAAHdDAHVDAIcAgAB3QwFHAHdDAIAAdUMBhwLAAHVDAIcAwAFHAMAAd0MBRwBHQsAAd0MAhwDAAHVDAMcAR0EAAUcAR0MAAIcAwABHQMcAR0EAAEdBBwB3QwFAAIiBAAEIgIAAd0MAxwB+gkEAAIdAxwGAAsiAgABHQEcAR0FAAH6CQHVDAEdAhwGAAHdDAoiAgADHQYAAd0MAx0HAAHdDAoiAQAB3QwBHQHdDAcAAd0MAh0IAAHdDAQiASgFIgEAAfoJCQAB3QwB+gkIAAUiAgAEIhUABCIEAAMiFAAFIgQAAyIUAAQiBQADIhQABSIEAAMiDgAgHAEdHxwB1QwfHAHdDB8cAQAGHAEdGBwBAAYcAdUMGBwBAAHVDAUcAd0MGBwBAAEdBRwBABgcAQAB3QwBHQQcAQAYHAIAAh0DHAEAAR0XHAIAAd0MAR0B1QwCHAEAAR0XHAMAAd0MAR0CHAEAAd0MFxwEAAHdDAIcAgAXHAUAAhwCAAUcAR0RHAUAAhwCAAEdBBwCHRAcBQACHQIAAR0EHAHdDAHVDAccAR0B1QwHHAUAAR0B1QwCAAHdDAQcAQAB3QwHHAHVDAEdBxwFAAHdDAH6CQMAAR0DHAIABxwC3QwHHAoAAR0DHAIABxwCAAccCgAB3QwDHAIAAdUMBRwB1QwCAAEdBhwLAAMcAgABHQUcAR0CAAEdBhwFAAEiBQAEIgEAAd0MBRwB3QwCAAHdDAYcBAADIgMABiIBAAUcBAABHQQcAR0EAA0iBBwBHQQAAR0EHAEdBAADIgEABCICKAEAAyIDHAEdBAAB3QwB1QwDHAHdDAQAByIBKAMAAyICHAHVDAHdDAUAAR0DHAUABiIGAAMiAdUMAR0GAAHdDALVDAEdBAAGIggAAiIBHQHdDAcAAh0B1QwEAAUiAfoJCAACIgHdDAgAA90MBAAC3QwDIgkAAiISAAIiCgACIhIAAiIKAAIiDQBAHAEdHxwB1QwfHAHdDB8cAQAfHAEAHxwBAAHVDB4cAQAB1QweHAEAAd0MAR0dHAIAAdUMAR0cHAIAAd0MAR0EHAEdFxwDAAH6CQQcAR0XHAQABBwB3QwFHAEdERwEAAQcAQABHQQcAh0QHAQAAx0B1QwBAAEdBBwB3QwBHQccAR0IHAQAAR0B1QwBHQHVDAEAAd0MBBwBAAHdDAccAR0B1QwHHAQAAd0MAfoJAt0MAgABHAIiARwCAAccAd0MAdUMBxwJAAQiARwCAAccAQAB3QwHHAkABCIBHAIABxwCAAccCQAEIgEcAgAHHAIAAR0GHAQAASIEAAYiAQAGHAHVDAIAAR0GHAMAAyICAAQiASgEIgUcAR0CAAHdDAYcAwADIgEABSIBAAH6CQEoAyIEHAHdDAMABRwBHQMAAiIB0QMFIgEoAwABKAMiAhwBHQQAAR0EHAEdAwACIgHRAwMiAfoJBgADIgIcAR0EAAEdBBwB3QwDAAUiCQADIgEdAd0MBAAB3QwBHQIcAR0DAAYiCgACIgEdBgAB1QwCHAEdAwAFIgsAAiIB3QwGAAH6CQEcAR0B+gkDAAHdDAMiAfoJCwACIggAAh0FAAMiDAACIggAAR0B3QwFAAMiDAACIggAAd0MAwAgHAEdHxwB1QwfHAHdDB8cAQAGHAEdGBwBAAYcAdUMGBwBAAYcAd0MBhwBHREcAQABHQUcAQAGHAHVDBEcAQABHQUcAQAGHAHdDBEcAQAB+gkBHQscAQARHAIAAtUMBBwBHRccAgAB3QwBHQMcAh0XHAMAAd0MAxwBHQHdDBccBAAB1QwCHAHdDAEAFxwEAAEdARwBHQIABRwC1QwQHAQAAd0MAh0EIgMcAh0HHAIdBxwFAAEdAd0MBSICHALdDAccAdUMAR0HHAUAAd0MAQAFIgEcAR0CAAccAt0MBxwHAAYiAR0CAAccAgAHHAgABSIB3QwCAAYcAR0CAAccBwAGIgMABhwBHQIABxwDAAIiAgAIIgEABhwB3QwCAAEdBhwCAAMiAgALIgQcAwAB1QwFHAEdAgADIgIABSIB+gkCAAQiAxwDAAHdDAUcAR0DAAHdDAgiBAAB+gkDIgEcAR0EAAHVDAQcAd0MBAAB3QwB0QMCIgkAAd0MAiIBHAEdBAAB1QwEHAUAAd0MAdEDASILAAMiAd0MBAAB3QwBHQIcAR0DAAQiAfoJCwAB3QwCIgYAAR0BHAHVDAEdAwACIgH6CQ4AAiIGAAHdDAIdAd0MAwACIg8AAiIHAAEdAd0MBAACIg8AAiIHAAHdDAUAAyIOAAIiCwABHR8cAR0fHAHdDB8cAQAfHAEABxwBHRccAQABHQYcAdUMFxwBAAEdBhwB3QwXHAEAAd0MBhwBABccAgAGHAEAFxwCAAEdHRwCAAEdAdUMHBwCAAH6CQHVDBwcAwAB3QwcHAQAARwDIhgcBAAFIgscAh0B1QwBHQgcBQAFIgUcAR0EHAEdAdUMAx0HHAYABSIBHAHVDAEdARwBHQQcA90MAfoJAR0HHAYAAd0MBCIBHAMdAd0MAdUMAxwEAAHdDAccBwAFIgLdDAEdAQABHQMcBQAHHAgABCICAAHdDAEAAd0MAxwFAAEdBRwBHQMAAiIDAAQiBQADHAUAAR0FHAEdAgADIgMAASICAAEiAgACIgEAAxwFAAHdDAUcAd0MAgAEIgQACCICHAYABRwDAAsiAwADIgEcBgAFHAQAAd0MByIGAAMiBgABHQMcAR0FAALdDAEiCwADIgUAAR0DHAEdBQAC3QwBIgsAAR0CIgUAAd0MAR0BHAEdAd0MAwAEIgwAAd0MAR0BIgYAAdUMAR0B1QwDAAMiDwAB1QwBIgYAAd0MAR0B3QwDAAIiEAAB3QwBIgcAAd0MBAAB3QwBIhEAASINAAIiDwACIgsAAd0MHxwBAB8cAQABHR4cAQABHR4cAQAB3QwEHAEdAhwBHRYcAgAEHAEdAhwB1QwWHAIAAR0DHAHdDAIcAd0MFhwCAAEdAxwBAAIcAQAWHAIAAd0MAxwBAAIcAQAWHAMAAdUMAhwBABkcAwABHRwcAwAB3QwcHAQAAyIZHAQABCICHAEdFRwDAAYiARwDHQEcAx0BHAEdARwBHQHVDAEdAdUMAR0GHAEdAwABIgEAAt0MAiIBHAHdDAYdARwB+gkCHQHVDAIdAtUMBRwB1QwDAAH6CQIABCIBAAHdDAH6CQEdA90MARwBAAEdBd0MAR0FHAHdDAYABCIDAAHdDAMAARwBAAHdDAUAAd0MBRwEAAIiAgADIgcAARwIAAUcAwAFIgIAASIHAAEcCAABHQMcAR0DAAYiCQABHAgAAR0DHAHVDAMABiIJAAEcCAAB3QwDHAHdDAMAByICAAgiCAABHQEcAdUMBAALIgQAAyIHAAHVDAEdAdUMBQAC3QwHIgUAAfoJAyIGAAHdDAEdAd0MBgAC3QwBKAH6CQEAAdEMCQACIgcAAd0MBwAC3QwBIg0AAiIMAAUiDQACIgsABSIOAAIiCwACIhEAAiILAAHdDAEiEQACIgwAASIRAAEiAd0MCwAB+gkeHAIAAR0dHAIAAR0dHAIAAd0MHRwDAAkcAR0THAMAAR0IHAEdExwDAAEdCBwB3QwTHAMAAd0MAR0BHAEdBRwBABMcBAABHQEcAR0FHAEAEhwBHQQAAd0MARwB3QwYHAEdBQABHAEAGBwB3QwEAAIiAQAYHAQABCIXHAEdBAAEIgccAvoJAdUMDRwBHQMABiIB1QwFHAIAAh0B1QwGHAIdAxwB3QwDAAH6CQIAA90MAR0FHAIAAd0MAR0B+gkGHAIdAdUMARwBHQoAAd0MAxwB1QwBHAMAAd0MAQAB1QwDHAIdAt0MAdUMAh0DAAEiBwADHAHVDAEdBQABHQMcAh0CAAHdDAEdAd0MAwAEIgQAAR0CHAHdDAEdBQAB3QwDHALdDAMAAd0MBAAGIgIAAR0B1QwBHAEAAd0MBgAB1QwBHAEdCgAHIgIAAR0BHAgAAx0LAAIiAQAEIgIAARwBIgIAASIEAAHdDAEdAd0MCwACIgIAAyICAAMiAQAEIgIAAd0MDAABIgIAByIGAAGeCAEiDgAKIgcAAiINAAQiASgMAAMiDAAEIgEoDAAB3gwCIgsABiIOAAEiCwAEIhAAASILAAEiEgACIgsAAiIRAAIiCwAB3QwBIhEAAiINAAHdDAEdGxwEAAEdGxwEAAHdDBocBgAaHAYAGhwGABkcAR0GABkcAdUMBgAZHAHdDAYAGRwHAAEcAR0WHAEdBwABHAEdFhwBHQHdDAQAAyIBHRYcAd0MBAAEIgEdBxwCHQscAh0FAAUiAR0GHAQdCBwCHQHVDAQABSIB3QwBHQYcAt0MAh0HHAEdAdUMAt0MBAABIgUAAd0MBRwB1QwCAALdDAccAR0B3QwGAAH6CQYAAR0EHAHVDAQAAR0FHAEdAd0MDwADHAEdAd0MBAABHQUcAR0IAAIiBwABHQEcAR0FAAHdDAUcAd0MCAACIggAARwB3QwGAAUcCQAGIgQAARwHAAQcAR0JAAEiAd0MBSIDAAIiAgACIgIABBwB1QwLAAHdDAUiAgAFIgHXAwIiBBwB3QwLAAHdDAUiAgABIgH6CQUAAZQIASICHAEdCwABIgIABSIJAAIiARwBHQsABCIBKAwAAc4BAiIB3QwKAAQiASgOAAIiCwAEIgH6CQ8AASILAAEiEwABIgsAASISAAIiCwACIhEAAiILAAIiEQACIg0AAfoJAd0MGxwFABscBQAbHAUAFhwBAAQcBQAbHAUAGxwFABscBQAbHAUAGhwBHQUAARwBHRccAR0B1QwFAAEcAR0WHAIdAd0MAwACIgEcAR0WHAEdAd0MAwAEIgHVDAccAR0B1QwMHAEdAd0MAwAGIgccAfoJAdUMAR0KHAHVDAEdBAAEIgLdDAEdBRwBHQEAAd0MAdUMAR0HHAHVDAIdAd0MBAAB+gkFAAEdBRwB1QwCAAHdDAEdBxwB1QwBHQHdDAwABRwB+gkDAAHdDAccAt0MBgABIgcAAxwBHQUABxwIAAIiBwAB+gkCHQUABxwIAAIiCAABHQEcBQAGHAEdCAAFIgUAASIB+gkFAAYcAR0IAAEiAd0MBCIEAAEiAwACIgEABhwB3QwJAAYiAgABjggBIgEABiIFHAsAAd0MBSIBAAGOCAEiAgAB+gkDAAGUCAEiAxwBHQsAAt0MBCIKAAIiAhwBHQoABCIB+gkMAAHdDAIiAR0B3QwJAAQiDwACIgEdCgABIgHPAQIiDwAB3QwBIgHdDAoAASIBAAH6CREAASILAAIiEgABIgsAAiIRAAIiCwACIhEAAiIMAALdDBwcBAAcHAQAHBwEAAEdGxwEAAEdGxwEAAHdDBscBQAbHAUAGxwFABscBQABHAEdGRwFAAEcAR0ZHAMAAyIBHRkcAgAEIgEdBxwCHRAcAgAFIgEdBRwBHQHVDAL6CQ8cAQAFIgHdDAEdBRwB1QwB3QwCAAHVDAgcAx0DHAEAASIFAAHdDAUcAd0MAwABHQccBB0DHAEAAfoJBgABHQQcBAAB3QwHHAEdA90MAxwJAAQcBQAHHAHdDAMAAR0BHAEdAQACIgcAAdUMAhwFAAccBAAB1QwBHQHVDAEAAiIIAAIcBQAHHAQAAd0MAR0B3QwBAAYiBAACHAUABhwBHQUAAd0MAgABIgHdDAUiAwACIgUABhwBHQoAAd0MBSICAAQiAQADIgUcAd0MCgAB3QwFIgIAASIHAAEiBBwKAAEiAgAFIgkAAiICHAEdCgAFIgwAAR0CIgEcAR0JAAUiAfoJDAAB3QwCIgHVDAHdDAkABCIPAAHdDAEiAdUMCgADIhEAASIB3QwKAAEiEgACIgsAAiIRAAIiCwACIhEAAiIMAAHdDB0cAwAdHAMAHRwDAAEdHBwDAAEdHBwDAAHdDAEdGxwEAAEdGxwEAAHdDAEcAR0ZHAUAARwBHRkcBQABHAHdDBkcBQABHAEAGRwEAAIiAQAEHAEdFBwDAAQiBBwDHQLVDBAcAwADIgHVDAQcAd0MAdUMAx0B1QwPHAIABiIBHQIcAQAE3QwCHQgcAR0FHAIAAfoJAgAD3QwBHQIcBQAB3QwBHQgcAR0FHAgAAd0MAdUMARwGAAHdDAccAR0B3QwBHQQcAQABIgcAAR0BHAcABxwB1QwBAAHVDAQcAQAEIgUAARwHAAccAd0MAQAB3QwEHAEABiIDAAEdBwAGHAEdAwAEHAEAByICAAHVDAcABhwB1QwDAAQcAgACIgEABCIDAAEiAQACIgIABhwB3QwDAAEdAxwCAAIiAgADIgIACCIFHAQAAR0CHAHVDAIAASICAAgiBQACIgMcAR0EAAHdDAIcAR0CAAoiBgAB+gkCIgIcAR0FAAEdARwB3QwCAAUiAfoJCwADIgEdAd0MBQACHQMABSIMAAH6CQIiAR0GAAHdDAHVDAIABiINAAHdDAEiAd0MBwAB3QwCAAQiEAABIgsAASISAAIiCwACIhEAAiILAAIiEQACIgsAAfoJHhwCAB4cAgAeHAIAAR0dHAIAAR0DHAHVDBkcAgAB3QwDHAEdEhwBHQYcAwABHQIcAd0MEhwBHQYcAwABHQIcAQASHAHdDAYcAwAB3QwCHAHVDBIcAQAGHAQAAhwBHRkcBAACHAHdDBkcBAACHAEABBwB1QwUHAQAAyIDHAIdFBwEAAQiAhwBHQHdDBQcAwAGIgEcAfoJAQAB1QwEHAHVDAccAR0GHAMAASIBAALdDAIiARwCAAEdBBwBHQccAh0FHAMAAfoJAgAEIgIAAd0MAR0BHAEdARwB3QwGHAEdAd0MAR0FHAYABCIDAAMdARwBAAHVDAUcAR0BAAHdDAUcAwACIgIAAyIDAAHdDAEdAd0MARwBAAHVDAUcAd0MAgAFHAIABSICAAEiBAAB3QwBAAEcAQAB3QwFHAMABRwCAAYiCAABHAIABBwB1QwDAAUcAgAGIggAARwCAAQcAR0DAAEdBBwCAAciAgAIIgQcAd0MAwABHQQcAgALIgQAAyICHAEdBAAB3QwEHAMAAt0MByIGAAMiARwBHQUABBwEAALdDAIiAfoJCgACIgEcAd0MBQAEHAQAAt0MASINAAIiBgABHQMcAgAFIg0AAiIGAAEdAxwBAAMiEAACIgYAAd0MAxwBAAIiEQACIgcAAR0BHAEdAQACIhEAAiIHAAIdAdUMAQAB3QwBIhEAASIB3QwHAAHdDAEdAd0MAQAB1QweHAEAAdUMHhwBAAHdDB4cAgAeHAIAHhwCAAEdHRwCAAHVDB0cAgAB+gkOHAEdDhwDAA4cAR0OHAMAAR0NHAHdDA4cAwABHQ0cAQAOHAMAAd0MHBwEAAYcAR0VHAQAARwDIgIcAR0OHAEdBhwEAAUiARwB3QwBHQwcAdUMAR0GHAQAAfoJBSIBAAEdBRwBHQYcAR0B3QwGHAYABSIB3QwFHAHVDAEdBBwB1QwB3QwBAAYcBgAB3QwEIgEAAR0EHAHdDAEdAdUMAxwBHQIAAR0FHAcABSIBHQQcAQAB3QwBHQMcAd0MAgABHQUcCAAEIgHdDAQcAgAB3QwBHQEcAdUMAwAB3QwFHAMAAiIDAAQiAQAEHAMAAR0B1QwBHQQABRwCAAMiAwABIgIAASIBAAEcAiIBHAMAAd0MAR0B3QwEAAUcAgAEIgQACCIDAAHdDAUABRwCAAsiAgAB+gkDIggABRwDAAHdDAciBgADIgcAAR0EHAQAAd0MAdEDAyIIAAH6CQMiBgABHQQcBAAC3QwCIgsAAiIGAAHdDAQcAgAFIg0AASIHAAQcAQADIgEtAfoJDgABIgcABBwBAAIiAS0QAAEiBwABHQMcAQAB3QwBIgEtEAABIgcAAdUMAxwCAAIiDwACIgcAAd0MAxwBAB8cAQAfHAEAAR0eHAEAAR0eHAEAAd0MHhwCAB4cAgAeHAIAAdUMHRwCAAEdHRwCAAHdDB0cAwAB1QwcHAMAAR0cHAMAAfoJFBwBHQHVDAYcBAABHRIcAdUMAR0B1QwGHAQAAh0OHAEdAdUMAh0C3QwGHAQAAd0MAR0B1QwEIggcAdUMAx0B3QwCAAYcBQAB3QwBHQUiBhwCHQPdDAMABhwGAAHdDAUiBhwB1QwB3QwGAAYcBwAGIgUcAfoJBwAB1QwFHAgABSIFHAgAAR0FHAcABiIFHAgAAd0MBRwDAAIiAgAIIgMcCQAFHAIAAyICAAsiCQAFHAIAAyICAAUiAQAB+gkBHQQiCAAFHAMAAd0MCCIDAAEiASgDIgcABRwEAAHdDAEAAiIJAAEoAiIHAAEdBBwEAAHdDAHRAwEiAfoJCgADIgYAAR0EHAIABSIMAAIiBgAB3QwEHAIAAiICLQ0AAiIHAAQcAgABIgEtDwACIgcABBwCAAIiDwACIgcAAdUMAhwB1QwCAAIiDwACIgcAAR0CHAEdAQAfHAEAAR0WHAEdBxwBAAEdFhwB1QwHHAEAAfoJFhwB3QwHHAIAAdUMFRwBAAccAgAB1QwVHAEABxwCAAHdDAYcAR0OHAEABxwDAAYcAR0WHAMABhwB3QwWHAMABhwBABYcAwABHQUcAQAWHAMAAR0FHAHVDA4cAdUMAR0GHAMAAd0MBRwCHQwcAx0GHAQAAR0EHAHdDAEdCRwEHQLdDAYcBAABHQMcAR0BAAHdDAgcAh0B1QwBHQHdDAIABhwEAAHdDAQdAgAIHAEdAd0MAfoJAd0MAwAGHAUAAx0B3QwCAAccAR0B3QwGAAYcBQAB+gkC3QwDAAIiBBwCHQcAAdUMBRwJAAQiBBwBHQHdDAcAAR0FHAkABCIEHAHdDAgAAd0MBRwJAAQiBBwKAAUcBAABIgQABiICHAoABRwDAAMiAgAEIgEoBCIKAAUcAwADIgEABSIBAAEoAR0B+gkCIgkABRwDAAIiAdEDBiICAAEdAQADIggAAR0EHAMAAiIB0QMDIgUAAd0MAQADIggAAR0EHAMABSIIAAEoAyIHAAHdDAQcAgAGIgoAAiIIAAQcAgAFIgsAAiIIAAEdAxwCAAHdDAMiDAACIggAAR0CHAEdAwADIgwAAiIIAAHdDAIcAdUMAwADIgwAAiIJAAEcAR0B+gkBAAHVDB4cAQABHR4cAQAB3QweHAIAAR0dHAIAAdUMHRwCAAHdDAYcAR0WHAMABhwBHRYcAwAGHAHdDBYcAwABHQUcAQAWHAMAAdUMBRwBABYcAwAB3QwFHAEADxwBHQYcBAAFHAEAAdUMDRwCHQYcBAAFHAEAAR0NHAEdAd0MBhwEAAEdAxwBHQEAAd0MCRwCHQLVDAHdDAEABhwEAALVDAEcAR0B1QwCAAgcAR0B1QwDHQIAAdUMBRwEAAHdDAMdAd0MAgABHQYcAh0E3QwCAAEdBRwFAAHdDAEdAd0MAwABHQYcAR0B3QwGAAHdDAUcBgAB3QwEAAHdDAEdBRwB3QwIAAUcDAABHQUcCQAFHAwAAd0MAxwCHQkABRwNAAMcAdUMAR0JAAUcBQABIgUABCIBHALdDAkAAR0EHAQAAyIDAAYiCwABHQQcBAANIgoAAd0MBBwEAAMiAQAEIgIoBCIKAAQcBAAHIgEoAt0MAigCIgoAAR0DHAQABiIGAAMiCQAB1QwDHAMABiIIAAIiCQAB3QwBHQEcAdUMAwAFIgH6CQgAAiIKAAMdAwAC3QwDIgkAAiIKAAHdDAEdAd0MBQACIgoAAiILAAHdDAYAAiIKAAIiDgABHR4cAQAB3QwBHR0cAgABHR0cAgAB+gkB1QwcHAMAAdUMHBwDAAHdDBwcBAAcHAQAHBwEABwcBAABHRscBAABHQUcAR0VHAQAAd0MAxwB1QwBHAEdDRwCHQHVDAUcBQADHAIdAd0MDRwCHQHVDAUcBQABHQHVDAEdAd0MAR0BAAHVDAUcAR0B1QwFHAPdDAUcBQAB1QwCHQEAAd0MAQABHQUcAR0B1QwEHAEdAwAFHAUAAfoJAt0MAwAB3QwBHQQcAt0MAR0DHAEdAwAFHAwAAdUMBBwCAAHVDAEdARwBHQHdDAMAAR0EHAwAAd0MAR0DHAIAAd0MAR0C1QwEAAHVDAQcDQABHQHVDAIcAwAB3QwB1QwB3QwEAAHdDAQcDQAB3QwCHQHVDAQAAd0MBgAEHA4AAd0MAh0LAAQcDwAC3QwLAAEdAhwBHQUAAiIEAAQiDQABHQIcAR0FAAsiDAAB3QwBHAEdAd0MBQAB3QwKIg0AAh0HAAHdDAoiDAAB1QwB3QwIAAHdDAQiAQAFIgsAAfoJCQAFIgIABCIVAAQiBAADIhQABSIEAAMiFAAEIgUAAyIUAAHdDAQiBAAEIg4AAd0MAR0dHAIAAd0MHRwDAAEdHBwDAAEdHBwDAAHdDBwcBAABHRscBAACHQIcAh0WHAQAAd0MAR0CHAEdAtUMFRwFAAHdDAEdARwC3QwBHRUcBgACHQIAAd0MAR0OHAIdBBwGAAHdDAEdAwABHQ0cAx0EHAcAAd0MAwAB3QwNHAEdAt0MBBwMAAEdDBwB3QwCAAQcDAAB1QwBHQMcAR0HHAMABBwMAAHdDAEdAxwBHQYcAR0DAAEdAxwNAAHdDAEdAhwB3QwB1QwFHAEdAwACHQEcAR0OAAIdARwBAAEdBRwB3QwDAAHdDAMdDgAB3QwBHQEcAQAB3QwBHQMcAR0FAAH6CQEdAd0MDwAB3QwBHAIAAR0DHAEdBgAB+gkRAAEdAgAB3QwB1QwBHAHVDAHdDBgAAR0DAAHVDAEdAdUMGQAB3QwDAAHdDAEdAd0MHgAB3Qw1AAMiHQAEIhsABiIZAAciGQAIIhgACCIYAAgiGAAIIhEAAh0XHAEdBBwCAALdDAHVDBYcAR0EHAQAAR0WHAHdDAQcBAAB3QwWHAEABBwFABYcAQAEHAUAAdUMARwB1QwBHAHVDAYcAR0JHAEdAQABHQMcBQAFHQYcAR0JHAEdAQAB1QwCHAHVDAUAAd0MAR0B3QwBHQHdDAEdAdUMBBwB3QwJHAHdDAEAAd0MAx0GAAH6CQEAAd0MAQAB1QwCHQMcAQAJHAMAAdUMAR0B3QwKAALdDAIdAhwBAAkcAwAB+gkB3QwNAAHdDAEdAdUMARwBAAkcEwAB3QwCHQkcAR0UAAHdDAHVDAIdBxwBHRUAAd0MAtUMBxwB3QwWAALdDAccGQAHHBkAAR0FHAEdGQABHQUcAR0ZAAHdDAUcAd0MGgABHQMcAR0bAAEdAxwB1QwbAAHdDAHVDAEcAR0B3QwcAAMdHQAB3QwBHQH6CR4AAfoJ7QEAAd0MAdUMFhwB+gkD3QwB+gkEAAHdDAEdFRwKAAEdFRwKAAH6CRUcCwACHQYcAR0MHAsAAh0FHAMdAdUMCRwB1QwLAALdDAUcAR0B3QwCHQkcAR0NAAQcAR0B3QwBAAHdDAH6CQkcAd0MDQADHAEdAdUMBAAJHA4AAxwBHQHdDAQACRwOAAMcAd0MBQAJHA4AAhwB1QwGAAkcDgACHAEdBgABHQccAR0OAAIcAd0MBgABHQccAdUMDgACHQcAAd0MBxwB3QwOAALVDAgABxwPAALdDAgABxwZAAEdBRwBHRkAAdUMBRwBHRkAAd0MAR0DHAEdAd0MGgABHQIcAh0bAAHdDAEcAtUMAd0MHAAB1QwBHQHdDB0AAR0B+gkeAAHdDO8BAAH6CQHVDAkcAd0MCxwB3QwJAAHVDAgcAdUMAQALHAoAAd0MCBwBHQEACxwLAAccAR0B3QwBAAEdChwLAAEdBhwBHQIAAR0KHAsAAdUMBhwB3QwCAAHdDAkcAR0LAAHdDAUcAR0EAAkcAR0MAAUcAdUMBAAJHAH6CQwABRwB3QwEAAkcDQAFHAUACRwNAAUcBQABHQccAR0NAAUcBQAB1QwHHAHVDA0ABRwFAAHdDAccAd0MDQAFHAYABxwOAAUcBgAHHA4ABRwGAAYcAdUMDgABHQMcAR0GAAEdBRwBHQ4AAR0DHAEdBgABHQUcAd0MDgAB3QwDHAHdDAYAAd0MBBwBHRAAAR0CHAgAAdUMAhwBHQHVDBAAAdUMAh0IAAEdARwCHQHdDBAAAd0MAdUMAR0IAAHdDAIdAd0MEgAC3QwJAAEdAd0MHgAB+gmLAgA=")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gEgAARwfAAHVDB8AAR0fAAHdDJ8HAAIcHgACHB4AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BAACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wMAAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAH6CR4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8DAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDN8DAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8EAAIcHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQABHB8AAR0fAAEdHwAB+gmfBwAB+gn/BwABHAEdAfoJHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDJ8GAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDP8DAAQcHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8CAAQcHAAEHBwABBwcAAQcHAAEHBwAAxwBHRwAAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAEcAdUMHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDL8CAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAMcAR0cAAMcAR0cAAMcAfoJHAADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgABHAHVDB4AARwB1QweAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MPwAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAEcAR0eAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAHVDB8AAR0fAAHdDD8ABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAH6CR0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AAR0fAAEdHwAB3QxfAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgAB1QwB3QweAAEdHwAB3Qz/AQADHAEdHAADHAEdHAACHAEdAd0MHAACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAAhwBHQH6CRwAAhwBHR0AARwB1QwB3QwdAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/AwABHAEdAfoJHQABHAHdDB4AAR0fAAEdHwAB3Qz/FgA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("hBAAAR0fAAHVDB8AAd0MvgcAAR0BHAEdHQAB+gkBHAEdHgABHQHdDB4AAR0fAAH6Cf8GAAHdDIQwAAYiAd0MGQAC3QwEIhwABN0MtwcABiIDAAEiAt0MFAAC3QwHIgHdDBgAAt0MBSIbAAXdDJYHAAMiCQAC3QwSAAUiGwAB3QwKIhYAAt0MCCIYAAjdDPMGAAQiCwACIg8AAd0MBCIKAALdDBAACCIYAALdDAoiFgAC3QwIIhgACN0M0gYAAd0MAyINAAEiAd0MDgAEIgEtCwAB3QwPAAkiFwAC3QwMIhQAAt0MCSIB3QwWAAndDNIGAAMiDgACIg0ABCICAAEtCgABIgHdDA0AAd0MBiIBLQkAAd0MDwAB3QwJIgQAASISAALdDAwiFAAC3QwHIgPdDBYAB90MswYAAiIPAAIiDQADIg4AASIB3QwNAAHdDAUiAS0KAAHdDA8AAd0MBiIaAALdDAwiFAAC3QwJIgHdDBYACd0MsQYAASIRAAEiAd0MDAACIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAEiAd0MEAAC3QwNIhMAAd0MCiIC3QwUAArdDLAGAAHdDAEiEQABIgHdDAwAAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCQACIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QyvBgAB3QwBIhEAASIB3QwMAAIiDwACIg0AAd0MBCIMAAEiAd0MDgAB3QwFIgkAAiIQAALdDA0iAd0MEgAB3QwLIgHdDBQAC90MrwYAAiIRAAEiAd0MCwAB3QwCIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAIiEAAC3QwNIgHdDBIAAd0MCyIB3QwUAAvdDK8GAAIiEQABIgHdDAsAAd0MAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCAADIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QywBgACIg8AAiIJAAHdDAMAAiIPAAIiDQAB3QwEIgsAAiIB3QwOAAHdDAUiBQAGIhAAAt0MDSIB3QwSAAHdDAoiAt0MFAAK3QyxBgACIg8AAiIHAAHdDAMdAgAB3QwCIg4AASIB3QwIAAMdAwAEIgsAAiIJAAH6CQLdDAMAAd0MByIBAAciAd0MEAAC3QwNIhMABN0MByIC3QwXAAfdDLEGAAHdDAIiDgABIgHdDAcAAd0MAhwB3QwDAAIiDQACIgkAAR0BHAQAAd0MAyIJAAQiCQACHQUAAt0MDSIB3QwJAAHdDAHVDAcAAd0MCyIB3QwLAAHdDAgAC90M0QYAAd0MASIB3QwMAAIiCQAB1QwBHQUAAd0MDQACIgkAAR0B3QwRAAMiAd0MCQAB3QwLAAkiAd0MFgAC3QwGIgHdDBkABt0M1AYAAt0MCgACIh0AAyIXAAgiAd0MFwAHIgHdDBgAB90M9gYAAt0MAyIDAAQiFgAC3QwHIgHdDBgABiIB3QwZAAbdDJgHAAgiGAAC3QwFIgHdDBoABd0MsB8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("BQABHQccAd0MAfoJAQALHAHdDAkAAd0MBxwDAAHVDAkcAR0LAAccAwABHQkcAdUMCwAHHAMAAd0MCRwB3QwLAAccBAAJHAwABxwEAAgcAR0MAAccBAAIHAHVDAwABxwEAAgcAd0MDAAHHAQAAR0HHA0ABxwEAAHVDAccDQAB1QwGHAQAAd0MBxwNAAEdBRwBHQUABxwNAAHdDAUcAR0FAAccDgAFHAHdDAUABhwBHQ4ABRwGAAHVDAUcAdUMDgAFHAYAAR0EHAEdAd0MDgAFHAYAAd0MAxwCHQ8ABRwHAAIdARwBHQHdDA8ABRwHAAHVDAIdAfoJEAAFHAcAAt0MAR0RAAEdBBwJAAHdDBEAAR0EHBsAAd0MBBwcAAMcAR0cAAMcAR0cAAMcAd0MHAABHQIcHQABHQIcHQAB3QwCHB4AAh0eAAEdAdUMHgAB+gkB3QwaAAHdDAccAfoJAgAJHALVDAH6CQoABxwDAAHVDAgcAR0B3QwLAAccAwACHQccAd0MDAAHHAMAAd0MAR0HHA0ABxwEAAHdDAYcAR0NAAccBQAGHAEdDQAHHAUABhwB3QwNAAccBQAGHA4ABxwFAAEdBRwOAAccBQABHQUcDgAHHAUAAfoJBRwOAAccBgAEHAEdDgAHHAYABBwBHQ4AAR0FHAEdBgAEHAHdDA4AAR0FHAHVDAYAAh0BHAEdDwAB3QwFHAHdDAYAAx0B1QwQAAUcBwAC3QwBHQHdDBAABRwJAAHdDBEABRwbAAUcGwAFHBsABRwbAAUcGwABHQQcGwABHQMcAR0bAAHdDAMcAR0cAAMcAd0MHAADHB0AAdUMAhwdAAEdAhwdAAHdDAEdARweAAHVDAEcGgAB+gkHHAQAAdUMBhwCHQwABxwEAAH6CQYcAR0B3QwMAAccBQABHQUcAfoJDQAHHAUAAdUMBRwOAAccBQAB3QwEHAHVDA4ABxwGAAMcAh0OAAccBgADHAEdAd0MDgAHHAYAAxwB3QwPAAccBgABHQIcEAAHHAYAAx0QAAccBgAB3QwB1QwBHRAAAR0FHAEdBwAB+gkB3QwQAAEdBRwBHRkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAh0CHAEdGwAB+gkBHQIcAd0MHAAB3QwCHB4AAhweAAIcHgACHR4AAh0eAAHdDAH6CRsABxwFAAHdDAHVDAMcAR0B3QwB+gkMAAccBgABHQIcAR0B3QwOAAccBgAB3QwCHAEdDwAHHAcAAhwB3QwPAAEdBRwBHQcAAh0QAAEdBRwB1QwHAAIdEAAB3QwFHAHdDAcAAt0MEQAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAxwdAAMcHQABHQEcAdUMHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MnAEABhwaAAEdBRwaAAEdBRwaAAHdDAUcGwAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAEdARwBHR0AAdUMARwBHR0AAd0MAR0B3QweAAEdHwAB3QyW3AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("iQgAAd0MAR0fAAEdHwAB3Qy19wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          ruinSnowMedium1: GD("ruinSnowMedium1", {
            x: 13,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinSnowMedium2: GD("ruinSnowMedium2", {
            x: 34,
            y: 21,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }]),
          ruinSnowSmall1: GD("ruinSnowSmall1", {
            x: 12,
            y: 7,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("gQgAASIBhgEGAAEiGAAB3gzeBwABjAUBIgEABd0MAQABIgGMBRUAASMJAAEjFQABgQEJAAGBAR8AAYYBHwAB3gz2BgABIgXdDAECAd0MGgAF3QwdAAHfDLsHAAPdDAECAd0MAwIB3QwYAALdDAGMBQHdDAGMBQLdDBwAAdAFugcAAd0MAgIBzgEC3QwEAgHdDBYAAt0MAYwFAt0MAowFAt0MGgABzwUBjAUBzQUBAAHfDBwAAdEFmgcAAd0MAwIC3QwEAgHdDBYAAt0MAQIB3QwBzwEBAgPdDBcAAd8MAgABzwUB0QwBzQUeAAHRBZoHAAHdDAUCAd0MAwIB3QwWAAPdDAKMBQLdDAECAd0MGQAB3wwBzwUBjAUBzQUeAAHRBZsHAAHdDAICAd0MAQIB3QwCAgHdDBgAA90MAYwFAd0MAQIB3QwcAAHOBQIAAd8MtwcAAiIH3QwaAAXdDBwAAd8MuwcAAYwFAQABIgXdDAIAAYwFFQABIwkAASMVAAGBAQkAAYEBFQABhgEfAAHeDIAHAAEiBgACIvWnAQA=")
          }]),
          ruinSnowSmall2: GD("ruinSnowSmall2", {
            x: 14,
            y: 19,
            z: 14
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("gQgABd0MAx0F3QwYAAHdDAHVDAH6CR4AAd0MuQcAAt0MAx0FHAPdDBUACB0CAAHfDBUAAfoJAt0MAdUMAx0B1QwbAAEdA90MAR0bAAGIAQEAAdEMAd8MAYEBGwABgQEDAAGIARsAAYEBAwABiAEbAAGIAQMAAYEBGwABiAEDAAGBARsAAoEBAQACgQEcAAKIAQGBAbcFAAHdDAEdCRwC3QwUAAHdDAMdBBwCHRcAAx0C1QwEHRcAA90MAR0C1QwBHQLdDJUHAAHdDAEdCRwBHQHdDBQAAR0B1QwHHAEdAfoJFQAB3QwFHQHVDAMdFwAB3QwBHQHVDAQdAdUMAd0MGAAB+gkC3QwDHAHdDAHfDPUGAAHdDAEdCRwBHQHdDBQAAh0HHAIdFQAB3QwCHQHVDAIdAdUMAx0B3QwVAAHfDAHdDAcdAd0MGAAD3QwDHAHdDBsAAd8MAxwB3wwdAAHPAbgGAAEdAdUMCRwB1QwB3QwTAAHdDAHVDAkcAR0VAAHdDAHVDAgdAd0MFgAEHQLVDAMdFwAD3QwEHAHVDAH6CRgAAd8MAQAEHAHdDBsAARwB3gwBHAHeDBwAAhwB3gwBHRwAAR0B3gwBHAHeDBwAAR0BHAHeDAHVDBwAAd0MAd4MAdUMAR0dAAIdAd0MHQABHQHdDB4AAd0M2QQAAh0JHAEdAd0MEwAB3QwBHQkcAR0VAAHdDAQdAdUMBB0B3QwWAALVDAUdAtUMAd8MFgAD3QwFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwACHAHMAQEcHAACHAIdHAACHAIdHAABHAEdAt0MHAACHR4AAR0B+gkeAAHdDJoEAAEdAdUMCRwBHQHdDBMAAd0MAR0JHAEdFQAB3QwFHQHVDAMdAd0MFgAC1QwCHQHVDAQdFwAB+gkC3QwFHAHdDBkAAd8MBRwbAAUcGwAEHAEdGwAEHAHVDBsABBwB3QwbAAEcAR0BHAEdHAABHAMdHAABHQHdDAEdAd0MHAABHQEAAd0MHQAB3Qy6BAABHQHVDAkcAR0B3QwTAAHdDAEdAdUMBxwCHQHfDBQAAd0MAR0B1QwBHQHVDAUdAd0MFQAB3wwB3QwDHQPVDAEdAd0MGAAC3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAABHQEcAh0cAAEdARwBHQHdDBwAAfoJAR0B3QweAAEdHwAB3Qy5BAAB1QwBHQkcAdUMAd0MEwAB+gkBHQHVDAccAtUMFQAB3QwJHQH6CRYAAd0MBx0B3QwYAALdDAHVDAMcAR0B3wwYAAHfDAEAAdUMAxwB3QwbAAHdDAEdARwBHR0AAh0B1QwdAAHdDAHVDAHdDB4AAfoJ2AUAAd0MAdUMCRwBHQHdDBQAAd0MAh0EHAQdFgADHQLVDAQdAd0MFgAB+gkB3QwEHQPdDBkAAt0MAvoJAQAB3wz2BgAC3QwBHQccAh0B3QwVAAcdAdUMAR0B3QwWAAHdDAMdAtUMAh0B+gkYAAHdDAH6CQXdDBwAAd8M+QYAA90MCB0C3QwWAAHdDAIdBd0MGQAC3Qy5lwEA")
          }]),
          ruinSnowSmall3: GD("ruinSnowSmall3", {
            x: 13,
            y: 14,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("BAAC3Qz7BwAD3QwB1QwDHQLVDBoAAfoJBd0M1gcAAt0MAdUMBR0C1QwBHQHdDBYAAh0B1QwBHQXdDBcAAfoJA90MugcAAt0MAdUMAR0DAgHVDAEdAdUMAh0WAAEdAdUMAwIDHQLdDBYAAt0MAR0BLgHVDAHdDAH6CQHdDBsAAYEBHwABiAEfAAGBAR8AAYYBHgABgQECiAEeAAGIAfoFAAHdDAHVDAMCAdUMAwIB1QwBHQHVDBUAAd0MAwIBHQMCAh0B3QwWAAEdAdUMAR0B3QwBgQEBHQECAt0MFwABiAEBzQEEAAGIARkAAYEBBQABiAEZAAGBAQUAAYgBGQABhgEFAAGGARkAAYgBAYEBAwABgQEBiAEZAAGBAQUAAYgB9wUAAd0MAdUMAQIB1QwDAgEdAQIBHQHVDAEdFQAB1QwBAgEdAwIBHQECAh0B3QwVAAHdDAEdAd0MA+MHAd0MAR0B3QwB+gmXAQABiAEFAAGBAZcGAAHdDAcCAdUMAQICHRUAAR0GAgEdAQIBHQHdDBUAAR0B1QwF4wcB3QwBHQHdDBYAAYEBfwABiAEHAAGBAZYGAAHdDAcCAR0BAgEdAd0MFQABHQYCAdUMAQIBHRYAAR0B1QwC4wcB0QwC4wcB3QwBAgHdDBYAAYgBBwABgQEXAAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGIAQcAAYEBFwABiAEHAAGBAfYFAAHdDAECAR0HAgEdAd0MFQACHQcCAd0MFgAB1QwB3QwF4wcCHZcBAAGIAQcAAYEBlgYAAd0MAdUMBwICHRYAAd0MBwIB3QwB+gkXAAIdA+MHAdUMAR2ZAQABgQEFAAGBAZcGAAHdDAIdAQIBHQECAdUMAgIB3QwXAAH6CQHdDAECAR0BAgEdAQIBHRkAAh0B3QwBHQHdDAHVDAEdGQABiAEFAAGBARkAAYgBBQABgQEZAAGIAQUAAYEBGQABhgECAAGBAQIAAYYBGQACgQEBAAHPAQEAAYEBAYgBGQABgQEFAAGIAfgFAAMdAdUMAR0B1QwBHQHdDBgAAt0MBB0B3QwbAAHdDAMdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGIAQKBAR4AAYgB/QUAAd0MAx0B3QwcAAHVDAH6CQHdDB0AAfoJu58BAA==")
          }]),
          ruinSnowSmall4: GD("ruinSnowSmall4", {
            x: 11,
            y: 9,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AwAH3Qz5BwABHAPdDAEdARwC3QwYAAEcAwAB3QwBHRoAARwEAAEdGgABHAQAAd0MGgABHP4GAAUdAxwBHQHdDBYAASID3QwCHQHVDAIdFwABIgMAAd0MAx0B3QwXAAEiBAAD3QwYAAEiBgABHfcGAAEiAdUMBB0CHAEdARwB3QwVAAEiAtUMBx0WAAEiBd0MAR0B1QwB3QwBHRYAASICAAHQBQIAAt0MAQIB3QwdAAEdAYwFAdUMHwAB0wXVBgAB3QwBHQHVDAMdAdUMAhwBHQEcAR0VAAHVDAIdAd0MAtUMAR0B1QwCHQHVDBUAA90MAYwFAt0MAdUMAR0BjAUBHQHdDBcAAc8FAYwFAc0FAd8MAt0MAYwFAd0MGQAB0QUDAAHVDAGMBQHVDB8AAdMF1QYAAd0MBB0B1QwBHQIcAdUMARwBHRUAAd0MAh0B3QwFHQHVDAEdFgAC3QwBzQEC3QwCHQHdDAEdAd0MFwABzwUB0QwBzQUBAALdDAECAd0MGQAB0QUDAAEdAYwFAR0fAAHTBdUGAAHdDAYdBBwB1QwVAAHdDAHVDAEdAd0MBx0VAAHfDALdDAGMBQLdDAHVDAEdAdUMAR0B3QwXAAHPBQGMBQHNBQEABN0MAd8MGAAB0QUEAAEd9wYABB0B1QwBHQQcAdUMFQAB3QwBHQHVDAYdAdUMAR0WAAXdDAQdAd0MGAABzgUBAAHfDATdDB0AAd8M+QYAAR0B1QwIHRYAAt0MBB0B1QwCHQHdDBgAB90MuAcAAdUMAR0C1QwEHQEiFwAI3QwBIhgAAd8MAgAB3wwDAAEcHwABHJkHAAXdDAEiHwABIh8AASK1rwEA")
          }]),
          ruinStoneLarge1: GD("ruinStoneLarge1", {
            x: 26,
            y: 33,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }]),
          ruinStoneLarge2: GD("ruinStoneLarge2", {
            x: 38,
            y: 31,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("lwgAAQIBAAQCGgABIwWzBwEjGQABIwGzBwEcAR0CswcBIxkAASMBhwEBswcBhwEBHQEcASMZAAEjAR0BhwEB5AcCHQEjGQABIwGBAQEdAeQHAbMHAYcBASMZAAEjAYEBAbMHAYEBAhwBIxkAASMCgQEBhwEBHAGHAQEjGQABIwKBAQGzBwGHAQEcASMZAAEjA4EBAYcBARwBIxkAASMDgQEChwEBIxkAASMBgQEBiAECgQEBhwEBIxkAASMBiAEBgQEB5AcCgQEBIxkAASMCgQEB5AcBiAEBgQEBIxkAASMFgQEBIxkAASMFgQEBIxkAASMCgQEBiAEBgQEBiAEBIxkAASMCgQEBhwECgQEBIxkAASMBhwECiAECgQEBIxkAASMDgQEBiAEBgQEBIxkAASMBgQEBiAEB5AcBiAEBAAEjGQABIwGBAQGHAQHkBwGIARsAASMBiAEBhwEBiAEcAAEjAYEBAYgBHgABgQEBhwH9AQAEAgEAAQINAAETBQABEwQAAt4BArMHAoEBA7MHCwABZAETBQABEwHeAQIAA94BAbMHBQABswcIAAFkAgABZAETBQABEwHeAQEABN4BAYcBAhgDEgEcDAABZAETAwABEwEAAd4BAQAE3gEBHAUAAYcBBwABZAYAARMBAAETBAAE3gEBhwEFAAEcBwABZAcAARMFAATeAQGHAQUAARwVAATeAQGHAQEAAxIBAAGHARcAAt4BAYcBBQABHBcAAt4BAYcBBQABHBgAAd4BBgABhwEZAAGHAQIYAxIBhwEZAAGHAQUAAYEBGQABhwEFAAGBARkAAYcBBQABgQEZAAGHAQEAARgCEgEAAYEBGQABgQEFAAGBARkAAYEBBQABgQEZAAGBAQUAAYEBGQABgQECGAMSAYgBGQABgQECAAGIAQIAAYcBGQABgQEFAAGBARkAAYcBBQABiAEZAAGHAQUAAYEBiQIAAwIBAAMCAQACAgEABAICAAYCBgABIwWzBwEjBbMHASMBhwEGswcEgQEBiAEBswcFAAHdAQEjArMHARwBswcBhwEBIwHkBwIAAd4BAeQHASMBHAGHAQGzBwKHAQGzBwGHAQESBAABswcFAAHdAQEjAbMHARwChwEBHAEjAuQHAQAB3gEB5AcBIwOHAQEcAYcBARwBhwEBAAMSAQABswcFAAHdAQEjAQAEhwEBIwGHAQHkBwEAAd4BARwBIwGBAQEcBYcBBAABGAGHAQYAASMCAAGHAQGIAQGBAQEjAoEBAeQHAd4BAYEBASMBAAGBAQOHAQEcAYcBBQABHAYAASMCAAGIAQKBAQEjA4EBAt4BASMBAAGBAQIcA4cBBQABswcGAAojAt4BASMBgQEBHAKBAQOHAQEAAxIBAAGHAQYAAYEBAQABgQEBAAGIAQEAAYEBAQABgQEDAAEjAoEBAQABgQEDhwEFAAGHARIAASMBgQEBAAKBAQOHAQUAAYcBEgABIwSBAQOHAQESBAABhwESAAEjBYEBAQABhwEBAAMSAQABiAESAAEjBYEBAYcBAYEBBAABEgGBARIAASMEgQEDhwEFAAGIARQAAoEBBIcBBQABgQEVAAKBAQKHAQGBAQEAARgCEgEAAYEBFgADIwGBAQUAAYEBFgABgQEBAAGBAQGHAQUAAYEBGQABhwEBEgQAAYgBAVQYAAGBAQEAAhICAAGHAQFUGAABiAEEAAESAYEBAVQYAAGHAQUAAYgBAVQYAAGIAQUAAYEBARMYAAGBAQEAAhICAAGBARkAAYEBAQACgQECAAGBARkAAYgBBQABgQHKAQAFAgEAAQIBAA4CBgABswcBgQEBswcBgQEBswcCgQEFHQGBAQYCAYEBARIBgQEBrAEBgQEBiAEBswcFAAHdAQEcBQIBgQEFAAGBAQYCARwCAAEjAgABswcFAAHdAQGBAQUCARwFAAGzBwYCAYEBAgABIwIAAbMHBQAB3QEDAAMCAYcBBQABHAYCAYEBAgABIwIAAYcBBQAB3QEDAAMCAYEBBQABgQEGAgGBAQIAASMBAAEYAbMHBQAB3QECAAKBAQEcA4EBBAABgQEGAgGBAQIAASMCAAEcBQAB3QEBIwUAASMGgQEGAgGBAQEAARIBIwESAQAB5AcNAAEjAoEBAgABgQEGAgGBAQIAASMCAAHkBw4AASMEgQEGAgGBAQESAQABIwIAAYEBDwABIwOBAQYCAYEBAgABIwIAAR0QAAEjAoEBBRIBAgGBAQEAARIBzQEBGAEAAYEBEQABIwGIAQIAA6AIAoEBAgABIwIAAYEBEgABgQEFAAGHAQGBAQIAASMBAAESAYEBGAABiAEBgQECAAEjAQABvQcBgQEVAAWBAQEAARIBIwESAQAB5AcZAAGBAQIAASMCAAHkBxkAAYEBARgBAAEjAgABgQEBMxgAAYEBAgABswcCAAGBAQEzGAABiAEBAAESASMBEgEAAYEBATMYAAHkBwIAASMCAAGBAQEzGAAB5AcCAAEjAQABEgGBAQEzGAABiAECAAEjAgABhwEBExgAAYEBAQABEgEjARIBAAHkBwHPARgAAYcBAgABIwGBAQEAAeQHGQABiAECAAHRDAIAAYEBGQABgQEFAAGIARkAAYEBjAEAAQIBAAECAQACAgIAAwIBAAECAQACAgIAAgIBAAUCBgACswcLgQEGAgKBAQGIAQKBAQKzBwYAAbMHBQIBgQEFHQGBAQYCAYEBBQABswcFAAHdAQGHAQUCAbMHBQABHAYCARwFAAGHAQUAAd0BAQAFAgGIAQUAAYgBBgIBgQEFAAEcBQAB3QEBAAHbAQQCARwFAAEcBgIBgQEFAAGHAQUAAd0BAQAB2wEBgQEBHAGIAQEcAoEBBAABgQEGAgGBAQQAARIBhwEFAAHdAQEjAdsBBQABHQGBAQMAAYEBBgIBgQEBAAISARgBAAEdBQAB3QEBiAEB2wEGAAEdAYEBAgABgQEGAgGBAQEYBAABgQEPAAEdAYEBAQABgQEGAgGBAQUAAR0QAAEdAoEBBgIBiAEFAAGBAREAAR0BgQEBEgEYARIBGAESAQIBgQEBAAEYARIBGAEAAYEBFwABoAgCgQEFAAGBARcAAc4BAoEBBQABiAEYAAKBAQQAARIBgQEUAAaBAQEAAxIBAAGBARkAAYEBARIEAAGBARkAAYEBBQABgQEZAAGHAQUAAYEBAVQYAAGBAQIAAhIBAAGBAQFUGAABhwEFAAGBAQFUGAABiAEFAAGHAQFUGAABhwEEAAESAYgBARMYAAGBAQEAAxIBAAGHARkAAYcBAYgBAYEBAYgBAgABgQEZAAGBAQUAAYEBGQABgQGsAQAEAgEAAQIDAAECAwACAgEAAQIFAAECAQABAgcAArMHC4EBBgICgQEBiAEDgQEBswcGAAGzBwUCAYEBBR0BgQEGAgGBAQUAAYcBBgABHQUCAYEBAwAB3AEBAAGzBwYCAYEBBQABhwEGAAGBAQUCAYgBAwAB3AEBAAEdBgIBgQEFAAGHAQYAAYEBBQIBiAEDAAHcAQEAAYgBBgIBgQEFAAGHAQcAAoEBAYgBBIEBAgAB3AEBAAGBAQYCAYEBBQABhwEGAAEjBgABHQGBAQEAAdwBAQABgQEGAgGBAQESAhgCEgGBAQYAAdwBBwABHQGBAQHcAQEAAYEBBgIBgQEFAAGBAQ8AAR0B3AEBAAGBAQYCAYEBBQABgQEQAAEdAoEBBgIBgQEFAAGBAREAAR0BiAEFEgECAYEBAQABGAISAQABgQETAAHdAQMAAaAIAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQGBAQEAAYgBA4EBAhICGAESAYEBGQABgQEFAAGBARkAAYEBBQABgQEZAAGIAQUAAYEBGQABgQEBAAESAQABEgEAAYcBGQABhwEFAAGHARkAAYEBBQABhwEZAAGIAQUAAYEBGQABhwECEgEAAhIBgQEZAAGBAQEwAgABiAEBAAGBARkAAYEBAogBAwABiAHGAQABAgEAAQIBAAYCAQAKAgIAAQIIAAGzBwuBAQEjAwIBgQECAgEjBIEBAbMHASMGAAEcBQIBgQEFAgEjARwDgQECHAEjAYEBAwABgQEBIwYAAR0FAgGBAQUdASMCgQEBHAOBAQEjAYEBAwABgQEBIwYAAYcBBQIBHAQAAdwBAbMHAYEBAYgBAoEBAYgBAYEBASMCgQEBAAGBAQGHAQEjBgABgQEFAgEdBAAB3AEBHQKIAQGBAQGIAQKBAQEjAYcBAYEBASMCgQEBIwYAA4EBAQABiAECgQEEAAHcAQGIAQaBAQEjA4cBAoEBASMGAAEjBgABHQMAAdwBAYEBBgIBgQEChwEDgQEBIwYAAYEBBwABHQIAAdwBARwGAgWBAQGIAQEjDwABHQEAAdwBAYEBBgICgQECiAECgQEBIxEAAdwBAYEBBgIGgQEBIxEAAR0BgQEDEgEYARIBAgaBAQEjEQAB3gEB3QEFAAOBAQGIAQGABAGIAQGBAQEjEgAB3QEFAAGBAQGIAQKBAQGIBAGIAQGBAQEjEgAB3QEFAAGIAQOBAQEjAoEBASMSAAHdAQOBAQEAAoEBASMFgQEBIxIAAd4BBgABIwGzBwMAAYcBASMZAAEjAYcBAwABhwEBIxkAASMBhwEBgQEBAAKBAQEjGQABIwGBAQGIAQEjAoEBASMZAAEjAoEBAYgBAYcBAYEBASMZAAEjA4EBAYcBAYEBASMZAAEjAYEBAYgBAYcBAogBASMZAAEjAYcBBIEBASMZAAEjAYEBAYgBAQACgQEBIxoAAYEBzAEAEwICAAECCQAUgQEBHAKBAQGIAQGzBwcAAbMHBQIBgQEFAgGBAQGeCAKSCAMAAYEBBAABswcB2wEGAAEcBQIBgQEFHQGBAQYAAYEBBAABhwEB2wEGAAGHAQUCAbMHBAAB3QEBHQYAAYEBBAABHQHbAQYAAYcBBQIBHAQAAd0BAYgBBgABgQEEAAGHAQHbAQYAA4EBAogBAoEBBAAB3QEBgQECiAEEgQEBhwEEAAGBAQHbAQYAASMFAAEjAYEBAwAB3QEBgQEGAgGHAQQAAYEBAdsBDQABIwGBAQIAAd0BAYEBBgIBIwQAAYEBAdsBDgABIwIAAd0BAYEBBgIBgQEEAgGBAQHbAREAAd0BAYEBBgIBgQEEAgGBAQHbAREAAoEBBBIBGAESARgBEgSBAQHbAREAASMBiAEIAAGGAQIAAYgBAdsBEQAB3QEJAAGBAQIAAYEBAdsBEQAB3QEJAAGBAQIAAoEBEQAB3QECgQEBiAEBhwEHgQEBhwEBgQEBHREAAd0BASMB2wELAAEj5gMAAQIBAAECAQAIAgEAAwIDAAUCCAABswcSgQEBHASBAQGzBwHbAQYAAbMHCwIBgQEGAAHkBwQAAbMHAdsBBgABswcLAgGBAQYAAeQHBAABhwEB2wEGAAGHAQUCAYEBBR0BgQEGAAHkBwQAAYcBAdsBBgABgQEFAgGIAQUAAYgBBgABgQEEAAGBAQHbAQYABoEBAR0FAAGIAQEAA4gBAoEBAYcBBAABHAHbAQYAASMLAAEcBgIBhwEEAAGBAQHbAQYAAYEBCwABgQEGAgGHAQQAAYEBAdsBEgABgQEGAgGHAQG9BwMAAYEBAdsBEgABgQEGAgEjBAIBiAEB2wESAAGBAQIYARIBGAQSAYEBAYgBAoEBAdsBEgABhwEIAAH+AwIAAYEBAdsBEgABhwEIAAGGBAIAAeQHAdsBEgABgQEIAAEjAgABgQEB2wESAAKBAQGIAQGBAQGHAQOBAQGIAQGBAQOHAQGBARIAASMHAAHRDAQAASMSAAGBAQwAAYEBxgMAAQICAAkCAQAFAgMAAQIBAAICBwABswcUgQEBiAECgQEBswcB2wEGAAGzBwsCAoEBCgABhwEB2wEGAAEdCwIBHQYAAeQHBAAB5AcB2wEGAAEcBQIBgQEGHQYAAeQHBAAB5AcB2wEGAAGHAQUCAbMHBQABHQYAAYEBBAABgQEB2wEIAAKBAQEAAYEBAYgBBQABiAEBswcBHQEAAogBAoEBBAABgQEB2wEGAAEjCwABHQGzBwECAR0DAgEdBAABgQEB2wESAAGBAQECAbMHAwIBAAGHAQQAAYEBAdsBEQABVAGBAQQCAgABhwEEAAGIAQHbAREAAVQBgQEGAgGHAQQCAYEBAdsBEQABVAGBAQMYAxICGASBAQHbAREAARMBgQEIAAGGAQIAAYEBAdsBEgABgQEIAAGIAQIAAYEBAdsBEgABhwEIAAGBAQIAAYgBAYEBEgAJgQEBiAEBgQEBhwEBiAEBHRIAASMMAAEj5gMAAQICAAUCAQACAgQABAIBAAICAQACAgcAArMHF4EBAdsBBQAB3QEBswcLAgEcAQABgQEEAAG9BwQAAR0B2wEFAAHdAQGHAQsCAYEBCwABhwEB2wEFAAHdAQGHAQsCAYEBCwABHAHbAQgABAIBgQEGHQYAAYEBBAABgQEB2wEIAAGBAQEcAYEBAQABiAEFAAGzBwIAAR0CiAECgQEEAAGBAQHbARIAAh0BAAQCAYEBBAABgQEB2wERAAEzAYEBAbMHAdYDAbMHAgIBAAGBAQQAAYEBAdsBEQABMwGBAQECAbMHAwIBAAGHAQQAAYEBAdsBEQABMwGBAQYCAYcBBAIBgQEB2wERAAEzAYEBA4gBAYEBAgIBIwICAYEBAogBAdsBEQABEwEjAYgBAwABhwECgQEBiAECgQEBAAGBAQHbARIAASMBgQEDAAKBAQGIAQOBAQEAAeQHAdsBEgABIwKBAQEAAYcBBoEBAQABiAEB2wESAAEjAYEBAYcBAoEBAogBAx0CgQEBiAEBgQESAAcjAwABIwIAASMSAAGBAQEAAYEBAQABgQEBAAGBAQMAAYEBAgABgQHHAwAEAgMAAgICAAICAQACAgEAAQIBAAICAQABAggAAbMHE4EBARwDgQEBhwEHAAGHAQsCARwBvQcFAAHkBwIAAdEMAQABhwEHAAEcCwIBgQEGAAHkBwQAAYcBCQAKAgEdBgAB5AcEAAGHAQkABAIBgQEFHQGBAQYAAYEBBAABhwEKAAOBAQGIAQUAAoEBAQACiAEDgQEEAAGBARMAARwBAgGzBwQCAYEBBAABgQETAAGBAQECAbMHAgIBAAECAYEBBAABgQESAAFUAYEBBgIBgQEEAAGBARIAAVQBgQEBAgEAAb0HAwIBHQQCAYgBEgABVAKBAQEdAQACgQEBAAMCA4EBEgABEwEjBQABhwEBgQEBAgKBAQEAAYEBGQAFgQEBAAGBARkAAYEBAYgBAh0BgQEBAAKBARgAAYEBAwADgQEBHRgAASMDAAEjAgABI+YDAAQCAwADAgEAAgICAAYCAgABAggAArMHFYEBAocBBgAB3QEBswcLAgGBAQIcAQABgQEBAAKBAQQAARwGAAHdAQGHAQEACgIBgQEBHAGBAQEdAQADgQEEAAHkBwcAAd4BAQAKAgGBAQIdBYEBBAAB5AcHAAHeAQIACQIBgQEBHQaBAQQAAYEBBwAB3gECAASBAQUdCIEBBAABgQEHAAHeAQsACIEBBAABgQETAAGIAQeBAQQAAYEBEwABiAEHgQEEAAGBARMAAYgBBoEBAR0EAgGIARMAAYEBAogBARwDgQEEAgGIAQGBARMAASMFAAGBAQIAAoEBAQABgQETAAGBAQgAAh0BAAHkBx0AAYEBAQABgQEdAAGHAQGIAQKBARwAASMCAAEjHAABgQECAAGBAcYDAAECAQABAgMAAQIBAAECAQADAgEAAQIBAAUCAQABAgEAAQIHAAGzBxSBAQGIAQKBAQGHAQYAAd0BAbMHCwIBHAYAAeQHBAABHQYAAd0BAYcBCwIBgQEGAAHkBwQAAYcBBgAB3QEBgQEB2wEKAgGBAQYAAeQHBAABgQEGAAHdAQEAAdsBAQAJAgGIAQYAAYEBBAABgQEGAAHdAQEAAdsBAQAHgQEBHAGIAQGBAQUdAoEBBAABgQEGAAHdAQEjAdsBCgAIgQEEAAGBARMAAYgBBoEBAR0EAAGIARQAAYgBBoEBBAABgQEUAAGIAQWBAQEdBAIBiAEUAAKBAQEcAYcBAR0EgQEBAgKBAR0AAR0BAAGBAR0AAR0BAAGIAR0AAYcBAQACgQEcAAGIAQGHAQGIAQEdHAABIwIAASPmAwABAgIAAQIBAAICAQACAgIAAQIBAAMCAQACAgIAAgIIAAGzBxOBAQEAAoEBAocBBwABswcLAgGIAQYAAeQHBAABHQcAAbMHCwIBgQEGAAHkBwQAARwGAAHdAQGHAQEACgIBgQEGAAHkBwQAAYEBBgAB3QEBgQEDAAgCAYEBBgABgQEEAAGBAQsAAoEBAYgBAQADiAECgQEBiAEGgQEEAAEdBwABIwsAB4EBAR0EAAGBAQcAAYEBDAABiAEGgQEEAAGIARUABoEBBAABgQEVAAGIAQWBAQQCAYEBFQABgQEBiAEBgQEBiAEEgQEBAgKBAR0AAR0BAAGBAR0AAYgBAQAB5AcdAAGBAQEAAYEBHQADhwEBgQEcAAEjAgABIxwAAYEBAgABgQHGAwABAgQAAQIBAAECAQADAgMABgIBAAICCAABswcTgQEBiAEDgQEBswcHAAGzBwsCAYEBBgAB5AcEAAGHAQcAAYcBCwIBgQEGAAHkBwQAAeQHBwABHQsCAYEBBgAB5AcEAAHkBwcAAYcBAQAKAgGBAQYAAYEBBAABHQHbAQYAAYEBAgACgQEBiAEBHAGIAQGBAQEcBYEBAR0CAAGBAQGIAQQAAYcBAdsBBgABIwcAASMDAASBAQICAoEBBAABgQEB2wESAAiBAQQAAYEBAdsBEwABiAEGgQEEAAGBAQHbARQABYEBBQIBgQEB2wEUAAKBAQGHAQGBAQEcBoEBAdsBEgABIwkAAR0BAAGHAQHbARwAAYEBAQABgQEB2wEcAAGIAQEAAoEBHAAChwEBgQEBHRwAASMCAAEj5gMAAgIBAAICAQABAgEAAgIDAAICAQACAgIAAQIBAAECAQABAgcAArMHE4EBAYgBARwBgQEBswcHAAGzBwsCAbMHBAABswcBAAHkBwQAAbMHAdsBBgABHAsCAYEBBgAB5AcEAAGHAQHbAQYAAYcBCwIBgQEGAAHkBwQAAR0B2wEGAAEcCwIBgQEGAAGIAQQAAYcBAdsBBgABgQEBAAKBAQOIAQiBAQEdAgABhwEBiAEEAAGHAQHbAQYAASMDAAHRDAMAAYEBAx0BswcDgQECAgKBAQQAAR0B2wEGAAGBAQcAASMDAAeBAQGHAQQAAYgBAdsBEwABiAEFgQEFAgGBAQHbARMABoEBBQIBgQEB2wETAAOBAQEdAYgBAYEBAYcBA4EBAogBAdsBEgABIwkAAYEBAQABhwEB2wESAAGBAQkAAYgBAQAB5AcdAAGIAQEAAYEBHQACgQEBhwEBgQEcAAEjAgABIxwAAYEBAgABgQHGAwABAgEAAwIBAAMCAwACAgEAAQIEAAQCBgABZAEAASMWgQECswcHAAEjAYEBCgIBiAEBnggCkggBzwEBswcBAAGIAQK9BwIAAbMHAQAC3gEEAAEdCwIBgQEEAAEdAQABgQEEAAGBAQLeAQMAAd4BAQABIwsCAYEBBgABgQEEAAGBAQLeAQMAAd4BAWQBIwGHAQoCAYEBBgABiAEEAAEdAt4BAwAB3gEBZAEjCoEBAbMHAoEBAR0CAAKHAQGBAQQAAYcBAd4BBAAC3gEBIwcAArMHAoEBAbMHBgIBhwEEAAGBAQHbAQQAAt4BCAABgQEDHQGzBwsCAYEBAdsBBAAC3gEIAAEjAwAIgQEEAgGIAQHbAQQAAt4BDAAFgQEBAgKBAQQCAYEBBQAC3gEMAAGIAQOBAQGIAQEAB4EBBQAC3gEMAAEjCQABgQEBAAGBAQUAAd4BFwABgQEBAAGHAR0AAYEBAQABhwEBgQEBZBsAAYgBAoEBAR0BZBsAASMCAAEjfgABgQEBAAGBAR0AAR0BgQEBHQGBARwABCMcAAGBAQEAAYgBhgIAAQIBAAQCAQADAgIAAQIBAAECAQACAgIAAwIBAAMCBAABswcLgQEBIwsCBLMHAgAB3QEBAAGHAQuBAQEjAogBA4EBAbMHAYEBAYgBAoEBAYgBA7MHAR0CAAHdAQEcDIEBASMIgQEBiAECgQEBhwEBswcBhwEBswcCAAHdAQEcDIEBASMEgQEBiAEBhwEDgQEBHAKBAQGHAQGBAQGHAQIAAd0BAocBC4EBASMBiAEBgQEEhwEBgQEBHAWBAQIdAgAB3QEBhwECgQEChwEBgQEBhwEDgQEBhwECgQEBIw2BAQKHAQEAAt0BAYcBAYEBAocBAwACgQEEswcBgQELAgOBAQGHAQEAAt0BAYcBAh0BgQEDAAGBAQEcAR0BhwEDgQELAgKBAQGIAQGBAQEAAd0BASMBgQEBHQGIAQKBAQEAAR0BHAKBAQMdBIEBAQIDgQEEAgSBAQEAAd0BASMHgQEBiAECgQEDAAOBAQICA4EBBAIEgQEBAAHdAQEjBYEBAYgBAYEBAYcBAoEBAwABgQEBHQGBAQIAAocBAR0BHAKBAQGIAQOBAQGIAQEAAd0BCyMDAAEjCQABHAEAAoEBAYgBAYEBAQAB3QEBgQEBAAGBAQEAAYEBAQABgQEBAAGBAQEAAYEBAwABgQEJAAGBAQEAAYcBAoEBAYcBGgABgQEBAAOBAQGHARoAAYcBA4EBAYgBAYEBGgABIwEAASMBgQECIxoAAYEBAQABgQEBhwECgQEcAAGBAQOHARwAAYcBAYEBAYcBAYEBGgAGgQEaAAEdBYEBGgACIx4AAYEBiQIAAgIBAAICAQABAgEACwIBAAECAQAFAgQAAbMHFgIDgQEBswcBgQEBswcCAAHdAQHcARQCBYEBAbMHAYEBAbMHAgAB3QEB3AEBABMCBYEBAYcBAYEBAYcBAgAB3QEBABQCCIEBAgAB3QEBABQCCIEBAgAB3QECGAESAxgDEgwCB4EBAYcBAgAB3QEBEwEvARMEAAG9BwHOAQGIAQsCCIEBAgAB3QEBnggCkggGAAGBAQsCCIEBAgAB3QEDEwYABIEBBAIBAAuBAQIAAd0BAZ4IApIIBgABiAEDHQGBAQMCAQAGgQEBLwSBAQIAAd0BAYEBAYgBAYEBAocBAYgBBIEBAwABgQEBHQGBAQIAAYEBAR0EgQEBvQcEgQEaAAEcAQAEgQEaAAGBAQEAA4EBAYgBGgABHAEAA4EBAYcBGgABHASBAQGHARoAAiMEgQEaAAGBAQGHAQKBARwAAYEBAYcBAYEBHQABhwEBgQEeAAGBAR4AAYEBBQABhwEZAAEjqAIABQIBAAECAQAEAgIAAgICAAECBAABAgEAAgIBAAECAwABswcWAgeBAQIAAd0BAbMHFAIIgQECAAHdAQEAFAIIgQECAAHdARUCCIEBAgAB3QEVAgiBAQIAAd0BBBIBGAISAhgMAgiBAQIAAYgBCQABiAELAgiBAQIAAeQHCQABiAELAgiBAQIAAeQHCQABgQEHAgyBAQIAAYcBCQAEgQEEAgyBAQIAAYgBAoEBAR0BAAGIAQGHAQKIAQKBAQMdAoEBAgAMgQECAAEjFQAB3gEBHAGBAQEABIEBAgABgQEVAAHeAQEcAYEBAQAEgQEYAAHeAQGHAQGBAQEAAoEBAYcBAYEBGAAB3gEBHQSBAQGHAQGIARgAAd4BASMFgQEBiAEYAAHeAQEdAQACgQEBiAEaAAHeAQGHAQEAAYEBAYcBGwAB3gEBgQEBiAEBgQEcAAOBAR0AAR0BgQEFAAGIARgAASMfAAGBAYkCAAICAgACAgMAAgIBAAECAQADAgEAAwICAAQCAgABAgIAAbMHFQIIgQECAAGzBxUCCIEBAgABHBUCCIEBAgABiAEVAgiBAQIAAYcBFQIIgQECAAGHAQkSDAIIgQECAAGHAQMTAwADEwGBAQsCCIEBAgABiAEBnggCkggDAAGeCAKSCAGBAQsCCIEBAgABgQEDEwMAAxMBgQEHAgGBAQICCYEBAgABgQEGAAGeCAKSCAGBAQMdBAIMgQECAAGBAQEdAYEBAwABiAEIgQEBAAOBAQEdCoEBAgABIxQAAd0BAYgBAoEBAYAEBIEBFwAB3QEBHQKBAQGIBASBARcAAd0BAR0DgQEBiAECgQEBhwEXAAHdAQGHAQKBAQKIAQKBAQEcFwAB3QEBIwGBAQQjAYEBAYcBFwAB3QEBHQKIAQOBARkAAd0BAYEBAYgBAoEBAYgBGgAB3QECgQEBhwEBgQEcAAKBAQGHARwAA4EBBQABgQEXAAEjqgIABAIBAAMCAwACAgEADQIBAAICAgABswcHgQENAgmBAQMAAbMHAYEBAYcBBIEBDQIJgQEDAAEcAocBBIEBDAIKgQEDAAEcAbMHARwBhwEDgQEMAgqBAQMAAYcBAYgBAbMHAYcBARwCgQEMAgqBAQMAAogBAYcBAYgBAbMHAoEBDAIKgQECAAEjAYcBAYgBA4cBBIEBCgIKgQECAAEjAYEBAYcBA4EBAYcBA4EBCAIMgQECAAEjA4EBAocBBIEBCAIMgQECAAEjAYgBCYEBBwIMgQECAAEjCIEBAQABgQEBhwEBHAKBAQEAARwBiAEBHAuBAQIACCMMAAHdAQGIAQKBAQMAAYgBAoEBAgABgQEBAAGBAQEAAYEBAQABgQENAAHdAQEdAYgBAYEBAwADgQEWAAHdAQOBAQQAAoEBFgAB3QEBHQKBAQQAAoEBFgAB3QEBIwGBAQEjHAAB3QEBHQGBAQGIARwAAd0BAYcBAYEBAogBAYEBGgAB3QEBgQECAAGIAQGBARoAAoEBAYcBBIEBGQABHQOBAQIAA4EBAYcBFgABIx8AAYEBkgIAAwIBAAUCAQABAgIABAICAAMCBAABgQECZAEAAmQCgQEKAguBAQMAAbMHAmQBHwJkAYEBCwILgQEGAANkAYEBDAIKgQEIAAFkAYEBDQIJgQEJAAGBAQ0CCYEBCAABZAGHAQwCCoEBCAABZAGHAQoCDIEBBwACZBeBAQcAAmQXgQEIAAFkAYgBFoEBCQABZAEdAYEBAhwBgQEBhwEBHQ+BAQkAAiMLAAHdAQGIAQKBAQMAAYgBAhIJAAGBAQwAAd0BA4EBBAACgQEWAAHdAQEcAoEBBAABgQEBHBYAAd0BARwCgQEcAAHdAQMjHAAB3QEBHAKBARwAAd0BAoEBAYcBHAAB3QEEgQEbAAeBARkAAoEBAYcBBIEBAYgBAoEBFgABI6wCAAICBAADAgIABQIDAAECAgABAgEAAwIBAAECAwABhwEBswcDAAFkAoEBCgILgQEHAAJkBIEBCAILgQEIAAFkA4EBCQILgQEJABeBAQgAAWQBhwEBAhWBAQgAAWQCiAEVgQEIAAFkF4EBCQAXgQEJAAGHARaBAQkAF4EBCQACgQEBHQGIAQSBAQEcDoEBCQABIwF+ASMJAAKBAQESAxgFEhUAAd0BAYEBBwABHAGBARUAAd0BAYEBHgAB3QEBgQEeAAHdAQEjHgAB3QEBgQEeAAHdAQGBAR4AAd0BAYcBA4EBGwAIgQEYAAEdA4EBAocBBYEBFQABIx8AAYEBjQIAAQIFAAICAQABAgEABQICAAICAgAFAgUAARwBAAGBAQMAF4EBCAABZAGzBxaBAQkAF4EBCAABZBeBAQgAAWQBhwEWgQEJAAEcA4EBAYcBEoEBCQADgQEBiAEQgQEBswcCgQEJAAGIAQOBAQGIAQ+BAQEdAoEBCQACgQEBhwEBgQEBhwEQgQEBMAGBAQkAAYEBAYcBAYgBAYcBAQIBiAECgQEBAg6BAQkAAYEBATABgQEBiAEBAAGIAQKBAQEAAoEBAYgBC4EBCQABIwF+ASMJAAGBAQESARgEEgEYAxIJAAGBAQwAAeQHAgAHnQgWAAHkBx4AAd0BAeQHHgAB3QEB5AceAAHdAQEjHQABVAHdAQGHAR0AAVQB3QEBiAECgQEbAAFUAd0BB4EBFwABVAKBAQGHAQMCAYcBAYEBAYcBAYEBAYgBFAABEwEjAgABuwKxAgACAgEABAIDAAECAQAKAgkAAbMHAoEBAYcBAYgBAYcBBIEBAocBC4EBCQABswcBiAEBgQEBiAEEgQEBhwEBswcBhwEMgQEJAAGzBwKIAQKHAQKBAQKHAQGBAQGHAQGBAQGHAQqBAQkAA4EBAYcBBIEBAYgBAYEBAYcBDIEBCQAChwEBiAEEgQECiAEChwEMgQEJAAGzBwGBAQGHAQWBAQKHAQEdDIEBCQABhwEIgQEChwEBHQeBAQGzBwGBAQGzBwGBAQkABoEBAYcBA4EBAR0BhwEBiAEGgQEBHAOBAQkABoEBAgIBhwEBgQECiAEIgQEBvQcBAAGBAQkAAoEBAYgBAYcBAoEBAh0BhwEBgQEBiAEJgQEBvQcCgQEJAAKBAQIdAYEBAx0MgQEBvQcCgQEJAAIjAwABVgYAAYEBAxIBAAISARgBAAESARgYAAGdCAEAA50IAQACnQg1AAHdAR8AAd0BAeQHHQABMwHdAQHkBx0AATMB3QEBIx0AATMB3QEBhwECgQEbAAEzCIEBFwABMwEdAoEBAwIDgQEBiAEVAAETASMBzAEDAAG7AhoAAYEBmAIAAgIBAAECAQACAgEABQICAAECAQABAgkACIEBArMHAocBAbMHCoEBCQABswcGgQEBhwECswcBHQIACoEBCAABZAKHAQaBAQGHAQGzBwGHAQIACoEBCAAB3QEChwEEgQEBhwEBgQEBAAGBAQFkAgABhwEIgQEBAggAAd0BARwChwEFgQEFAAmBAQECCAAB3QEDhwEFgQEDAAFkAQAKgQEIAAHdAQKHAQaBAQQAAWQHgQEBswcCgQEIAAHdAQGIAQeBAQQAAWQJgQEBiAEIAAHdAQGHAQWBAQGHARCBAQoAAYEBAYgBAoEBAQIRgQEJAAKBAQQdAYEBAx0NgQEJAAEjBgABpAEEAAGBAQEYARIBGAcSCQABgQELAAHdAQHkBwEAA50IAQACnQgXAAHdAQHkBx4AAd0BAeQHHgAB3QEB5AceAAHdAQEjHQABVAHdAQGIAR0AAVQB3QEBgQEBAAGBARsAAVQB3QEBgQEBAAWBARcAAVQCgQEBAAMCA4EBFgABEwEjAQABkggBAAK7Aq8CAAQCAQADAgMAAQICAAUCAQACAgkAAocBBYEBA7MHAgABhwEJgQEBAggAAWQBswcFgQEBhwEBgQEEAAFkAYcBCIEBAQIIAAFkBoEBAYcBAYEBBAABZAmBAQECCAAB3QEBswcGgQEBHQUAAYcBCIEBCQAB3QEDhwEDgQEBiAEBgQEFAAGHAQiBAQkAAd0BAYEBAocBA4EBAYgBAYEBBQABhwEJgQEIAAHdAQEcBYEBAocBBQAKgQEIAAHdAQiBAQUAAR0JgQEKAAeBAQQAAR0JgQEBiAEKAAGBAQGIAQGzBwGBAQGHAQKBAQQAAYEBAYcBCIEBAYgBCgABgQEDswcChwEQgQEJAAEjBbMHByMBgQECEgEYARICGAISCgABIwUAASMBgQEBAAGBAQEAAYEBAd0BAYEBEgABIwUAASMFAAHdAQGBARIABx8FAAHdAQGHAR4AAd0BASMeAAHdAQGBAR4AAd0BAYcBHgAB3QEDgQEcAAGBAQGHAQaBARgAAR0BgQEBhwEDAgGBAQGHAQGIARcAASMBqAEBkggdAAGBAZMCAAICAQABAgEAAwIGAAMCDgABZAGzBweBAQIAAdwBAgABZAWBAQGzBwGBAQICCQACswcGgQED3AECAAFkAYcBBoEBAbMHAR0JAAGzBwaBAQGHAQPcAQIAAWQBhwEFgQEBswcBAgoAAYcBB4EBA9wBAgABhwEIgQEKAAEcAYcBBIEBAYgBAR0D3AECAAGHAQiBAQoAAYcBBoEBAYcBA9wBAgABHQeBAQGIAQoAAYgBBYEBAYgBAYcBA9wBAgABHQGHAQeBAQoABoEBAYcBBNwBAgABgQEBhwEHgQELAAaBAQEAA9wBAgAJgQELAAGBAQKHAQOBAQEAA9wBAgAJgQELAAOBAQGzBwGHAQGBAQEAA9wBAwABhwEHgQELAAGzBwPXAwGzBwEjAQAD3AEDAAGBAQESARgFEgEYCgAB5AcDAAHkBwGBAQcAAYEBHwABhwESAAYfBwABgQEfAAEjHwABgQEfAAGBAR8AAoEBHQAGgQEBiAEZAAGBAQGHAQMCAYEBAYgBGQABIwGeCAG7AgEAAbsCrgIABAICAAECCQADAgIAAgIGAAFkAQABgQEBswcBgQEBswcEgQEBiAEGAASBAQWzBwgAAYEBAbMHBoEBAbMHAdsBBAABZAGHAQSBAQGzBwGBAQoAARwGgQEChwEB2wEFAAaBAQsAAR0CgQEBhwEEgQEBhwEB2wEEAAGHAQeBAQoAAd0BAYcBAoEBAYcBBIEBBQABswcHgQEKAAHdAQiBAQUACIEBAYgBCQAB3QEEgQEBhwECgQEGAAEcAYcBB4EBCQAB3QEBhwEGgQEBZAUAAYEBAYgBBYEBAogBCQAB3QEBhwEGgQEGAAGBAQGHAQeBAQkAAd0BAYEBAYcBBYEBBwAIgQELAAKBAQGHAQOBAQcACIEBCwAFswcBIwcAAYEBBBgBEgIYARIKAAXkBwgAAYEBEgAF5AcIAAGHARQABB8HAAGHAR8AASMfAAGBAR4AAWQCgQEeAAKBAR0ABYEBAYgBGgABHQGBAQGHAQGBAQKIARoAASMfAAGBAYkCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gJUBAAGBAR8AAR0fAAEjHwABiAGfAgACAh4AA7MHAYEBHAABHQGzBwGHAR0AAh0BswcdAAGBAQEdAYcBHQABhwEBHR4AAocBHgABhwEBgQEeAAKBAR4AAoEBHgACgQEeAAKIAR4AAYgBHwABgQEfAAGHAR8AAYEBHwABIx8AAYgBHwABhwEBAAJkHAABgQEBAAJkHAADgQEBZBwAA4EBHgACIx8AAYEBnQIAAQIBAAICHAABgQEBswcBgQEBhwEcAAKBAQKHARwAAYEBAocBAR0cAAKBAQGzBx0AA4EBHQABhwECgQEdAAOBAR0AA4EBHQABgQEBiAEBgQEdAAOBAR0AAYEBAocBHQABgQEBhwEBgQEdAAKIAQGBAR0AAYcBAYEBAYgBHQABhwEBgQEBiAEdAAGHAQIjHgAChwEeAAGBAQGIAR4AAYgBAYEBHgACgQEBZBwAAYcBAYgBAoEBHwABI74CAAECHQAEgQEcAAOBAQGHARwAA4EBAYcBHAAEgQEcAAOBAQGzBxwABIEBHAADgQEBiAEcAAOBAQGIARwABIEBHAADgQEBiAEcAASBARwABIEBHAADgQEBhwEcAAGBAQKIAQGHARwAAYcBAYgBAYEBAYcBHAABiAEBgQEBAAEjHwABgQEfAAGHAR8AAYgBHwABgQEcAAGIAQGHAQGIAQGBAd4CAAICHAAEgQEcAASBARwAA4EBAYcBHAAEgQEcAASBARwABIEBHAAEgQEcAAOBAQGIARwABIEBHAADgQEdAASBARwAA4EBAYgBHAAEgQEcAAGBAQKIAQGBARwAARwBiAEeAAGHAQGIAZ4BAAGBAQGIAd4CAAECAQACAhwABIEBHAAEgQEcAAOBAR0AA4EBHQADgQEdAAKBAQGIAR0AA4EBHQAEgQEcAASBARwABIEBHAAEgQEcAAKBAQISHAABgQEBiAEeAAGHAQGIAR4AAYgBAYEBvgEAAYgB4QIAAQIdAAOBAQECHAACgQEBAgEdHAADgQEdAAKBAR4AAoEBHgACgQEeAAOBAR0ABIEBHAADgQEdAASBARwAA4EBAYgBHAACEgEYARIcAAGBAQGIAR4AARwBgQHeAQABiAHfAgABAgEAAgIcAAKBAQECAbMHHAABgQECAh0AAoEBAQIdAAKBAR4AAoEBHgACgQEeAAOBAR0AA4EBHQADgQEBiAEcAASBARwABIEBHAACEgEYARIcAAKBAf4BAAGBAd8CAAECAQACAhwAAYEBAgIBswccAAGBAQECAR0dAAGBAQGzBx4AAQIfAAGBAR8AAoEBHgABgQEBiAEBgQEdAAOBAQGIARwABIEBHAAEgQEcAASBARwAARIBGAISHAADnQjeBAACAh0AAYEBAQIBswcdAAGBAQGzBx4AAQIfAAEdPwABgQEfAAGBAR8AAYEBAYgBHgABiAEDgQEcAAOBAQGIARwAA4EBAYgBHAACEgEYARIcAAGdCN8EAAICHgACAgGzBx0AAQIBswceAAEdXwABgQG/AQABGAIS/QQAAwIdAAICAbMHHQACswe+AgABEv8EAAICHgACswfeDwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("CAACAgIABQIIAAMCCwABZAGzBwEjA7MHAoEBASMBHQYAAWQDgQEBswcMAAEdASMDswcCgQEBIwGzBwYAAWQDgQEBswcMAAEcASMBHQGzBwKIAQGBAQEjCAABiAEEgQELAAHdAQEjAYcBAYgBARwCgQEBIwcAAogBA4EBAYgBCwAB3QEBIwGBAQMcAYEBASMHAAGHAQWBAQsAAd0BASMCgQEBHAGIAQGHAQEjBgABHAaBAQsAAd0BASMCgQEBhwEBHAGHAQEjAWQFAAKHAQSBAQGIAQsAAd0BASMBgQEBhwEBiAEChwEBIwYAAYcBBoEBCwAB3QEBIwSBAQGIAQEjBgABHQaBAQsAAd0BASMFgQEBIwcAAYEBAYgBAYcBAoEBAYgBCwAB3QEBIwEABIEBASMIAAKHAQOBAQwAASMCAAQjCAABhwECEgEYAQACEgoAASMDAAGBAQEAASMIAAGIARAAASMFAAEjCAABiAEVAAIfCAABgQEeAAFkASMeAAFkAYEBHgABZAGHAR4AAWQBgQEfAAKBAR4AAoEBAogB0wIAAQIJAAMCDgAB3AEBAAHcAQEAAYcBAR0IAAFkAYEBArMHDgAB3AEBAALcAQGBAQGHAQcAAWQDgQEBswcNAALcAQEAAdwBCgABswcDgQEOAALcAQEAAdwBAWQJAAKzBwKBAQ4AAtwBAQAB3AEKAAGzBwGBAQGIAQGBAQ4AAtwBAQAB3AEKAAKHAQOBAQGIAQwAAtwBAQAB3AEKAAGHAQGBAQGHAQOBAQwAAtwBAQAC3AEBAAFkBwABhwEFgQEMAALcAQEAAtwBCgAEgQEBiAEMAALcAQEAAtwBCgAEhwEBgQEMAAHcAQIAAtwBCwABhwEDgQEPAALcAQsAAYcBAhIBGAESGgABZAGBAR4AAWQBhwEfAAGHAR8AASMeAAFkAYEBHwABgQEfAAGIAR4AAoEBgAMAAwIaAAJkAQABgQEBswcBgQERAAFkCQACZAKBAR4AAYEBAYcBHAABZAEAAocBHgABgQEBiAEdAAFkAoEBHgABHQGBAQGIAR0AAogBAYEBGwABhwEDgQEdAAFkAocBHgACgQEeAAKBAQESHQABhwEBgQEeAAGBAQGHAR4AAoEBHgACIx4AAocBHgABiAEBhwEeAAKIAbIDAAFkCAABZAQAAYcBGwABZAEAAWQBAAGzBx8AAbMHHwABgQEfAAEcHgABgQEfAAGBAT4AAWQfAAFkQQABhwEfAAGBAR8AAYcBHwABgQEfAAEjHwABhwEfAAGBAaPjAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          ruinStoneLarge3: GD("ruinStoneLarge3", {
            x: 38,
            y: 39,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gFEAARwfAAEcHwABhwEfAAGHAR8AAYcBHwABhwEfAAGHAb8NAAECHwABhwF/AAHbAR8AAdsBHwAB2wGhBgABAh0AAYcBArMHXQAB2wEfAAHbAR8AAdsBHwAB2wGgBgACAh0AAoEBAhwfAAEcngEAAYgBHwABHB8AARwfAAEcHwABiAEfAAGIAR8AAYgBHwABiAEfAAGIAR8AASP9AwABAgIAAQIcAAOHAQEcHQABHAKHAR0AA4cBHgABhwEfAAGHAR4AAocBHQACgQEBhwEdAAKBAQGIAQGBARwABIEBHAACgQEBiAEBgQEcAAKBAQEfAYEBHAAEgQEcAAKBAQGIAQGBARwAAoEBAYgBARwcAAOBAQEcHAABiAECgQEBIxwAAogBARwdAAGIAQGBAQEcHQADgQEdAAKBAQGIAR0AAYEBAogBHQACiAEBHB0AAYEBAYgBARwdAAIKARwfAAGIAR8AAYEBHwABiAEfAAGIAR4AAYYBAYgBHQABHwKIAR0AAYEBAYgBAeQHHgACAh0AARkBHAGHAR4AARwfAAEcHwABhwEfAAGHAR8AAYcBHwABgQEgAAGIAR8AARwfAAGBAR8AAYEBHwABiAEfAAGIAR8AAYgBHwABgQEfAAEcHwABgQEfAAFtHwABgQEfAAGBAR8AAYgBHwABgQEdAAITARwfAAEKnwEAAYYBHwABgQEfAAGBAR0AAQIfAAEZAocBXgABhwEfAAGHAR8AAYEBQAABiAEfAAGIAR8AARwfAAGBAR8AAYEBAWQeAAGIAR0AAhIBgQEfAAGBAR8AAYEBHwABbR8AAeIHHwABbR8AAYEBHwABgQEfAAEcHQACEwGBAR8AAQq/AQABHx8AAYEBHQABAgGsAR4AARkChwEeAAGHAQHbAR4AAYcBAdsBHgABhwEB2wEeAAGIAQHbAX8AAYgBHwABiAEfAAHiBx8AAeIHIAABZBwAARgBEgGBAQFkHAABgQEBLwEcHQABgQEBAAFtHQABgQEBAAHiBx0AAYEBAQAB4gcdAAGBAQEAAeIHHQABgQEBAAFtHQABgQEBAAGIAR0AAYEBAQABgQEdAAEZARMBgQEfAAEKXQABYx8AAWMfAAFjHwABYyEAAYYBHwABAh0AARkChwFeAAEcAdsBnwEAAYgBHwABgQEfAAGBAR8AAYEBHwABgQEdAAISAYEBHwABgQEfAAGBAR8AAW0fAAHiBx8AAW0fAAGIAR8AAYgBHwABiAEdAAIZAYEBHwABCr8BAAEfHwABgQEfAAECHQABEwGBAQGHAR4AAYcBAdsBHgABgQEB2wEeAAGIAQHbAR4AAYEBAdsBXwABHB8AAYgBHwABiAEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAW0fAAGIAR8AAYgBHwABiAEfAAGBAR0AAhkBgQEfAAEKnwEAAYYBHwABgQEfAAGBAR8AAgIcAAKBAQIcHQAChwEBHB0AA4cBHgABhwEfAAGBAR0AAdsBAQABgQEdAAHbAQEAAYEBAYgBHAACgQECiAEcAAKBAQKIARwAA4EBAYgBHAACgQEBHwGBARwABIEBHAAEgQEcAASBARwABIEBHAABiAECgQEBIxwAA4gBHQADiAEdAAKBAQGIAR0AAoEBAYgBHQABgQEBHAGBAR0AARwBgQEBHB0AAoEBARwdAAIKAYEBHwABgQEfAAGBAR8AAYEBHwABHB4AAYYBARwdAAEfAoEBHQACgQEB5Ac9AAOHAQEcfAAB2wEfAAHbAR8AAdsBIQABiAEfAAEcHwABgQEfAAGBAR8AARwfAAEcHwABHB8AARwfAAEjnQQAAYcBARwBswfdBwABAh8AAYcB/wcAAYcBHwAB3gEfAAHeAZ8HAAECHwABhwEB2wEeAAEcAdsBHgABswcfAAEcHwABhwEfAAGHAR8AAYcBHwABiAEfAAGIAR8AAYEB3wUAAbMHAdsB3icA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("nXgAAuQHART8BwAB5AcDFB0AARQBAAEUHQAB5Ae+BwAB5AcBFAGzBx8AARoBswceAAEUARoeAAHkB50HAAEUARofAAEaAbMHHwABGgHWAx8AARQfAAHkBx8AAeQH3AYAAeQHARoBswcfAAEaAbMHHgACGh4AAeQHnQcAAeQHAxodAAEaAQABFB0AAeQHvwcAAuQHARTgVwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gHgAAuQH/gcAAhQB5AceAAEUHwAB5Ae+BwABswcBFAHkBx0AARQfAAEUHwAB5AegBwACFB0AAbMHARQeAAEavwcAAbMHARQB5AcdAAEaHwABFB8AAeQHnwcAAhQB5AceAAEUHwAB5Ae+BwAC5Af+VwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("EgAFAgEAAQIWAAGzBwEcARMBGQUTAYcBAbMHAWQUAAGzBwEcAS8BAAQQAc4BARwXAAGzBwGSCAEABZIIAbMHFwABgQEHAAGHARcAAYEBBwABhwEXAAGHAQcAAYcBFwABgQEHAAGHARcAAYEBBwABgQEXAAGBAQcAAYEBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQcAAYEBHwABgQEeAAEUAYEBHQACGgGzBxwAAhodAAGBAQEaHgABswcfAAHkB5wDAAMCAQACAgEAAgIVAAeHAQEcAYEBAYcBARwVAAGHAQEcAoEBAocBARwBgQEDHBUAC7MHFQADgQECcAHuBwJwAYcBAhwVAAOHAQFvAeUHAe4HAeUHAW8BgQEBhwEBHBUAA4cBAW8B5QcB7gcB5QcBbwOHARUAA4cBAW8B5QcB7gcB5QcBbwGBAQKHARUAA4EBAW8B5QcB7gcB5QcBbwKBAQGHARUAARwCgQEBbwHlBwHuBwHlBwFvA4EBFQABHAKBAQFvAeUHAe4HAeUHAW8DhwEVAAGBAQIfAXAB5QcB7gcB5QcBcAIfAYcBFQADgQEBhgEBcAHuBwFwAYYBA4cBFwACgQEBHwHuBwEfBIEBGAACgQEBhgEFgQEZAASBAQEaAbMHASMaAAKBAQEaAQAB5AcbAAGBAQEaHgABswcfAAHkB5sDAAICAQABAgEAAQIBAAECFwABswcBhwECswcBHAKzBwEcAbMHARwWAAHdAQGHAQcAARwB2wEWAAGzBwcAAbMHAdsBFQAB3QEBhwEHAAGHAQHbARUAAd0BAYcBBwABhwEXAAGHAQHcAQYAAYcBFwABhwEB3AEEAALcAQGHARcAAYcBAdwBBAAC3AEBgQEXAAGBAQLcAQMAAtwBAYcBFwABgQEC3AECAAPcAQGHARcAAYEBAtwBAgAD3AEBhwEXAAGBAQPcAQEAA9wBAYcBGAABFAXcAQEUAYcBGQABFAPcAQEUAVgBgQEaAAEUAdwBARQBUAEUASMaAAFYARQBWAEaHQABUAEUHgAB5AfbAwAC3AEFAALcARcAAdwBBwAB3AEXAAHcAQcAAdwBFwAB3AEHAAHcARcAAdwBHwAB3AEfAAHcAQIAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AFfAAHcAR8AAdwBjOQBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, AD.b)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, AD.b)("gIACAA==")
          }]),
          ruinStoneMedium1: GD("ruinStoneMedium1", {
            x: 11,
            y: 16,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("BAABAgEAAgIBAAECAgABAhcAA7MHAYgBAQACswcBiAECswcBAAGHARUAArMHAYgBAwABiAEBHQGzBwEAAYcBFwABiAEDAAGBAQEAAR0BAAGIARcAAYEBAwABiAEDAAGHARcAAYcBAwABgQEDAAGBARcAAYEBBwABiAEXAAGHAQcAAYgBFwABhwH7BQAFAgEAAQICAAMCFAABiAEEIgGzBwUiArMHEwABhwEBHAMiAbMHAR0BswcDIgGzBxQAAYgBArMHARwCIgKzBwEiARwBIgEcFAABgQECHAGzBwEiARwBswcBHAEiAbMHARwBswcUAAGBAQEiARwCIgGzBwIcASIBswcCHBQAAYEBBSIBHAIiAhwVAAGIAQMAARwCIgGzBwMiHgACIvcFAAciAQICAAICEQABHQwiArMHEQABswcLIgEcAR0TAAEdCiIBHBQACyIBHBQADCIUAAEiARwBIgEECCIYAAEcASICBAQiHAABHAEEASL1BQAJIhYAAbMHBSIDswcEIgGzBxIAAR0FIgOzBwQiAR0SAAGzBwUiArMHARwEIgEdEgABHAUiARwBswcBHAMiAR0TAAIiAQQDIgIcAbMHAyIBHBYAAiIBswcBIgEcBSIZAAciHAABHAEEAiLyBQALIgEAAwIRAAGHAQQiAbMHAYgBA7MHAYEBAyIBiAERAAGHAQQiAbMHAYgBArMHAQABiAEDIgGIAREAAR0EIgGzBwGIAQMAAYgBAyIBiAERAAGBAQUiAYEBAwABgQEDIgGIAREAAYgBAiICBAGzBwGBAQMAAYgBAyIBiAERAAGIAQUAAYEBAwABgQEDIgGBAREAAYEBBQABiAEDAAGBAQMiAYEBFwABiAEDAAGHAQMiAYgBGwABhwECHAEiAYcBGwABiAEDAAGHARsAAYEBAwABhwEbAAGIAQMAAYcBHwABhwHSBAABAgIAAgICAAMiFQABswcDIgGBAQGzBwQAArMHAiIBHREAAR0DIgYAA7MHASIBswcRAAEdAyIBiAEGAAEcAiIBHREAASIBBAGzBwEiAYcBBgABswcBIgEcFgABhwEGAAEcASIBswcWAAGIAQYAAiIBHB0AAiIBHB0AAyIcAAGHAQEiAbMHASIBhwEbAAGHAQMAAYcBOwABgQEjAAGHAdAEAAICAgABAgEAAQICAAMiAQITAAGzBwUiAYgBBAACswcCIgGzBxEAAR0DIgHPAQGIAQQAArMHAiIBHREAAbMHBCIBgQEFAAGzBwIiAbMHEQAEIgEAAYcBBQABHAEiAR0dAAEcASIBHB0AARwCIh0AAyIdAAMiHQABIgHRDAEiHAABhwEDAAGBAbAFAAICAQACAgEAAgIBAAMiBAIQAAEdBiIBswcDAAWzBxAAArMHBiIEAAOzBwEdEQABHQEiAQQBswcBHAYAAbMHARwBswcSAAEiARwKAAEcAR0eAAGzBwEcHgACHB0AASIBHAEiHQADIhwAAYEBAyIBgQEbAAGBAQEAAc8BAQABgQGxBQABAgIAAQICAAICAyIBAgIAAS8RAAKzBwQiAYEBAiIBAAGIAQOzBwGIARIAAbMHAiIBswcBIgEcAwABhwEBAAKzBwGIARIAASIBBAEiBgABhwEDAAGIAR8AAYcBHwABhwEfAAGBAR8AAYEBGwABgQEDAAGBARsAAoEBAQABhwEBgQEbAAKBAQOHAR8AAYcBHgABgQEBiAEeAAGBAdQEAAQCAQABAgIAAbMHFwABiAEEswcCIhkAAYgBAbMHAiIcAAGHAR8AAYcBgwcAAQIfAAEiARzXrwEA")
          }]),
          ruinStoneMedium10: GD("ruinStoneMedium10", {
            x: 13,
            y: 30,
            z: 28
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinStoneMedium11: GD("ruinStoneMedium11", {
            x: 11,
            y: 20,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("KQAB3gECAAHeAQMAAd4BATAXAALeAQEAAd4BAwAC3gEBAAHeARQAA94BAQAC3gECAALeAQEAAd4BFAAD3gEBAALeAQIAAt4BAQAB3gEUAAPeAQIAAd4BBQAB3gEVAALeAQIAAd4BBQAB3gGzBgABAgIAAQIBAAECAQABAgEAAwIBAAICAgABAgEAAgIFAAKBAQIcAQABHAEdAhwDHQIcAR0CHAEdARwCHQIcAR0BAAIdBgABgQECAAEdARwBgQEBHAGBAQEdAhwBHQGBAQEcAR0BHAKBAQEdARwBHQGIAQEdARwBHQcAAYEBAxwCgQEBHQEcAQABHAKBAQIdAgABgQEBHQEcAh0BgQEBHAIdCAACgQEBHQIcAYEBAR0DgQEBHAGBAQEcAYEBAxwBgQEBHAGIAQEcAR0BAAHbAQoAAYEBAR0DgQECHQEAAYEBARwBgQEBHAGBAQEAAR0BHAEAARwBgQECAAHbAQkAAYEBARwBiAEBHAHeAQGBAQEcAYEBAR0BgQECHAGBAQIdAYEBAR0BHAEdARwCAAHbAQsAAYEBARwBgQECAAEdAYEBAQABiAEBgQEBiAEBHQGBAQEAAYgBAYEBAYgBAoEBARwB2wEMAAEcBIEBAYgBAoEBARwFgQEBHAGIAQEcAYEBAYgBCwAEiAEBHAiBAQEcA4gBAoEBAYgBCwABiAEBgQEBHAKBAQGIAQiBAQKIAQEcAYEBAogBAYEBCwADgQEBiAEDgQEBiAEDgQEBiAEHgQEBiAECgQEKAAGBAQGIAQaBAQEAAYEBAYgBAoEBAYgBAoEBAYgBA4EBAQABgQEKAAiBAQGIAQEABIEBAYgBBIEBAcwBDAABiAEBgQEBiAECgQEBiAECgQEBAAmBARAAB4EBAQACgQECAAaBAQ8AAYEBAogBAoEBBgADgQEBiAEEgQENAAGIAQEAAYEBAQABgQEGAAGBAQEAAYgBAQABgQEBAAGBAcwDAAECAgABAgwAAgINAAJCAQACQgwAAkIBAAJCCgABQgE/AUIBOwFCAQAC3AECAAEzBgABQgE7AUIBPwFCCwABQgE7AkIBAALcAQEAAVQCMwUAAkIBOwFCCwABQgE7AUIBOwEzAUIC3AECVAIzAVQDAAFCATMBOwFCATsBQgsAAkIDMwFCAdwBAlQCMwJUAQABQgMzAUIB3AEBQg0AAUIDMwFCAlQCMwJUAUIDMwFCAQAC3AEKAAQMAUICMwFCAlQCMwJUAUIBMwEvAUICDALcAQoAAoMBAQACgwEDQgJUAjMBvQcB3AEDQgWDAQoABwwBGgJUATMBvQcBAAHcAQEaBwwKAAaBAQEaAQwCVAIzAQAB3AEBDAEaA4EBA4gBCgAGVAEMARQCVAHNAQEzAVQB3AEBFAEMBFQBAAFUDAAGFAJUAjMCVAYUDwAFVAYfBVQXAAKBARwAAYEBAVQCFAFUAYEBGQABgQEGAAGIAfIDAAEUBAACFAEAARQBAAQUAQACFBoAAtwBBgAB3AENAAHcAQkAAtwBBgAC3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBFAAB3AEJAALcARQAAdwBCQAC3AEyAAGBAUEAAYgBIAABiAEgAAGIASAAAYEBBAACgQEaAAOBAQFUAhQBVAKBAQGIARcAAYgBAwAB0QwBAAHdAQGBAfEDAAEcAQABHAcAARwBAAIcAQACHAEAAhwWAAHRDJYCAAGIASAAAYgBIAABgQEgAAGBASAAAYgBBAACgQEEAAGIARUAAoEBAYgBAVQCFAEAAYgBAYEBAYgBFwABgQEFAAHdAQGBAfUDAAECAgABAgYAAQIVAAFUAgABgwEBvQcDAAGDAQEAAYMBAb0HAYMBAVQB2wERAAGBAQgAARwBAAGBAQEAARwB2wEQAAHdAQGBAQgAAdwBAwABgQEB2wEQAAHdAQEcCAAB3AEDAAGIAQHbARAAAd0BARwIAAHcAQMAARwB2wEQAAHdAQEcCAAB3AEVAAHdAQGIAQgAAdwBAwABiAERAAHdAQGIAQgAAdwBAwABiAEOAAGBAQIAAd0BAYgBCAAB3AEDAAGBAQ4AASMBgQEBAAHdAQGBAQgAAdwBAwABgQEPAAEjAYEBAd0BAYEBCAAB3AEDAAGBARAAASMCgQEIAAHcAQMAAoEBEAABIwGBAQgAAdwBAwABgQEBIxEAASMBgQEEAAKBAQEAAdwBAgABgQEBIxMAASMCgQEBiAEBVAEvARQBVAHcAQKBAQEjFQABIwGIAQUAAd0BAYEBASOfBAAB3AEfAALcAR8AAdwBEAAB3AEOAAHcARAAAdwBDgAB3AEQAALcAQ0AAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEQAB3AEBAAHcAQsAAdwBHwAB3AEfAAHcARkAAoEBBAAB3AEWAAGBAQGIAQFUAc8BARQBVAGIAQGBAR4AAd0BAYEBmwUAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBAYEBHAABgQEBAAIUAVQBiAEBgQEfAAGBAbsHAAKBAR0AAVQCFAFUAoEBHwABgQG7BwACgQEgAAFUj7QBAA==")
          }]),
          ruinStoneMedium2: GD("ruinStoneMedium2", {
            x: 19,
            y: 15,
            z: 19
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinStoneMedium3: GD("ruinStoneMedium3", {
            x: 16,
            y: 18,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("JwABZPsHAALeAQMAAmQNAALeAQEAAmQHAAHeAQcAAd4BCwAB3gELAAHeAQcAAd4BHwABZB8AAWQfAAFktwYAAS4BAgMAAgIBAAECBwACAgIAAwIJAAGIAQGzBwEcAbMHAYgBAbMHARwBswcBiAEHAAGIAQGzBwEcAbMHAYgBAbMHARwBswcBiAEBZAUAAd0BAYgBAd4BAgABgQEB3gECZAGIAQcAAYgBAwABiAEB3gEBAAFkAYgBBgAB3QEBgQEDAAGBAQHeAQEAAWQBiAEB2wEGAAGIAQMAAYEBAd4BAQABZAGBAQYAAd0BAYEBAwABgQECAAFkAYEBBwABgQEDAAGHAQMAAYEBBgAB3QEBhgEBhwEBAAGHAQGGAQGBAQEAAYEBAYYBAYEBBQABgQEBhgEBgQEBAAGBAQGGAQGHAQEAAYEBAYYBBgAB3QECgQEDhwECgQECZAKBAQMABoEBA4cBAoEBDwABZJgGAAECAQABAgEAAQIBAAECBwABAgEAAgIBAAECAgABAggACbMHBgABHQmzBwgAAbMHAQADswcBZAOzBwUAA7MHAQADswcBZAGzBwkAAbMHAQABIgEcAbMHAQAEIgMAARwBswcBHAEiAQABswcBHAGzBwEAASIHAAHdAQEAASIBAAEiAhwBAAQiAgAEHAEiAQACHAEiAQABIgcAAd0BAYEBAiICHAIiARwBBAEiBgADIgMcAiIBgQEGAAHdAQGBAQUAAWQRAAGBAakGAAICAQABAgIAAgIGAAMCAQACAgEAAgIHAAEcCLMHAR0FAAmzBwEcCQAIswcEAAmzBwsAAbMHAxwBswcCHAGzBwEiAwAEHAEdAhwCswcLAAGzBwMcAbMHARwDIgMABBwBswcDHAGzBwgAAd0BAQABIgEEAhwCBAEiAhwBIgMAAxwCBAIcASIBHAEiBwAB3QEBgQEBAAHRDBMAAdEMAQABgQGqBgAFAggAAQIDAAUCBwACswcBzwEHswcGAAmzBwgAAbMHAQADswcBZAEcAbMHBwACswcB3AEFswcJAAIiAxwBZAGzBwIcBQABIgEcAbMHAQADHAIiCQACIgMcAQABHAIiBQADHAEAAxwCIggAAYEBASIBHAEiAQQDHAEEAyICAAIcAQQBIgIcAQQCHAEiAYEBBwABgQEXAAGBAacGAAICAQACAgEAAQIJAAECAQAGAggAAYgBASIBZAEiAYgBAbMHARwBswcBiAEBZAYAAYgBAR0BHAGzBwGIAQOzBwGIAQcAAYgBASIBAAEcAYgBAdwBAQABZAGIAQcAAYgBAdwBAQAB3AEBiAEDswcBhwEHAAGIAQEiAhwBgQEB3AECAAGIAQcAAYEBAgAB3AEBiAEBHAIiAYcBBwABgQEBIgIcAYEBAwABgQEHAAGBAQMAAYEBARwCIgGHAQHbAQYAAYYBARwBIgEAAYYBAYEBAQABhwEBhgEBgQEFAAGBAQGGAQGBAQEAAYEBAYYBAiIBBAGGAQcAAYEBAwACgQEDhwECgQEDAAeBAQMAAYEBqAYAAQIBAAECEAAEAgkAAR0BAAEdAwACZAsABbMHCAABHAEAAbMHEQABHQKzBwHcAQgAAbMHAhwRAAEdARwBswcB3AEIAAMcEQADIgHcARsAAYEBASIBBAEiAYEBGwABgQEDAAGBAbwGAAQCGwABHAOzBwEcHQABswcB3AEJAAMcEgABswcB3AEKAAIiEgABswcB2wEdAAEcAQQBHBwAAYEBAgABZAGBAaoGAAECEAADAgoAASIBswcBHRAABbMHCAADswcRAAOzBwkAARwBswcBHBEAAxwdAAMcHAABgQEBHAEEARwBgQEbAAGBAQJkAQABgQEbAALeAR4AAt4BHgAC3gHLBQAEAg8ABQIHAAGIAQOzBwGIAQ4AAWQBiAEDswcBHQcAAYgBASIBswcBHAGHAQ8AAYgBA7MHAYgBBwABgQEBIgEcAQABhwEPAAGBAQMcAYEBBwABgQEDAAGHAQ8AAYEBAxwBhwEbAAGGAQMcAYYBGwABiAEDHAGHARsAAYgBARwBZAEcAYcBGwABiAEBHAEAASIBgQEbAAGBAQEiAQABIgGBARsAAYEBAwABgQEbAAGBAQMAAYEBGwABgQEDAAGHARsAAocBAgABhwEcAAKHAQEAAYEBqAQAAQIBAAECEQACAgoAArMHAR0PAAFkBLMHAR0IAAEiAbMHAR0PAAJkA7MHHQABswcCHB0AAxwcAAGBAQMcAYcBGwABgQEDHAGHARsAAd0BASICHAFkGwAB3QEBHAFkARwdAAEiAQABIhwAAYEBAwABgQFfAAGHAR8AAYcBuwQAAgIBAAECCgABswcBHQ4AAWQBAAEcA7MHARwJAAIcEQABZAEdHgABZAEdHwABswceAAMcHAABhwEDHAGBAQFkGgAB3QEDHAFkHAADIgFkGwABgQEBIgFkASIBgQEbAAGBAQNkAYEBHwAB3gGIBQABAgEAAQIQAAQCCQABswcBHQGzBxAABbMHHAABswcBAAEdHQABHQEAAbMHHQABswcBAAEcHAABhwEDHAGBARsAAYcBAxwBgQEcAAIcASIdAAIiARwdAAMiAWQbAAGBAQEAAc8BAWQBgQEBZB4AAWQB2wGaBQABLwICAQABAggAAhwRAAGIAQGzBwEcAbMHAYgBGwABiAECAAHdAQGIARsAAYEBAgAB3QEBiAEbAAGBAQIAAd0BAYEBAdwBGgACgQEBAAGBAQGGAQHcARoAAocBAoEBAYgBAdwBGgABhwECAAHcAQGIAQHcARoAAYgBAgAB3AEBgQEB3AEaAAGBAQEAAYEBAQABgQEB3AEaAAGIAQOBAQGIAQHcARoAAYEBAwABgQEB2wEaAAGBAQMAAYEBGwAChwEBAAKBARsAAYEBAocBAoEB/gQAAdwBHwAB3AEfAALcAR4AAtwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAaSFAQA=")
          }]),
          ruinStoneMedium4: GD("ruinStoneMedium4", {
            x: 20,
            y: 15,
            z: 23
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinStoneMedium5: GD("ruinStoneMedium5", {
            x: 16,
            y: 24,
            z: 18
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinStoneMedium6: GD("ruinStoneMedium6", {
            x: 21,
            y: 15,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinStoneMedium7: GD("ruinStoneMedium7", {
            x: 16,
            y: 23,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("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")
          }]),
          ruinStoneMedium8: GD("ruinStoneMedium8", {
            x: 14,
            y: 18,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("JAACZN4HAAMCHQABIgGBAQEiHwABgQG7BwABAgEAAwIaAAGBAQUiAYEBHAABIgEEASIeAAGWAZsHAAQCAQABAhkAAWQHIhkAAYgBASIBBAEiAgQBgQEbAAGWAQHRDF0AAbMHHwABswcBAAIcHAABswcBAAIcHAABswcBAAKzBxwAAbMHAQACHRwAAbMHAQACHR4AAh38BAACAgEAAwIZAAGHAQUiAYcBGgABBAIiAQQBIhsAAZYBAQAB3gEB1QgeAAHeAQHWCBwAAbMHAQAB3gEdAAGzBwEAAd4BHQABHQEAAhwcAAEdAQACHBwAAR0BAAKzBxwAAR0BAAIdHAABswcBAAIdHgACHfsEAAcCGAABZAciGQABgQEFIgGBARsAAd0BAhwcAAGzBwEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABswcBAAIdHAABHQEAAh0cAAGzBwEAAh0eAAIdHQAEHBwAAxwdAAIcnAQAAQICAAMCGgABhwEFIgGHARoABSIbAAGzBwEAAhwcAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwBzAEBAAEcugQAAQICAAMCGgAGIhoAAYgBAc4BAyIBBBsAAbMHAcwBAgABlgEbAAEdAdsBHgABHQHbAR4AAR0B2wEeAAGzBwEvArMHHAABHQHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwCAAEcugQAAQIBAAECAQABAhsAAYgBBSIbAAECAyIBBBsAAbMHAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHNoEAAICAQABAgEAAQIaAAYiGgABgQEFIhwAAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAEdAd0BArMHHAABHQHdAQKzBxwAAR0B3QECswccAAGzBwHdAQIdHAABHQHdAQIdHAABswcB3QECHR4AAh0dAAQcHgACHL0EAAICGgABZAGBAQUiAYcBGgABBAEiAQQBIgEEGwAB3AEfAAHcAR8AAbMHHwABswcfAAEdAQACHBwAAR0BAAIcHAABHQEAArMHHAABHQEAAh0cAAGzBwEAAh0eAAId/QQABQIZAAciGQABgQEBIgIEASIBBAGIARoAAdwBAQAB0QwBAAGWARsAAdwBHwAB3AEfAAGzBx8AAbMHAQACHBwAAbMHAQACHBwAAbMHAQACswccAAGzBwEAAh0cAAGzBwEAAh0eAAId+wQAAgIBAAMCGgABiAEFIgGIARoAASIBBAMiHAABlgGgBwACAhwAASIBgQEBIgGBAQEiGwABiAEBAAGBAQEAAYEBuZcBAA==")
          }]),
          ruinStoneMedium9: GD("ruinStoneMedium9", {
            x: 14,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AgACAh4AA7MHHQABswcBHQGBAR0AARwB4gceAAEdHwACgQEeAAGIAQGBAQGIAR0AAoEBAYgBHQABgQEB4gf+BQACAh0AAbMHARkBEwEAAYEBGwABgQEDAAEcGwABHAMAAYgBGwABiAEDAAGBARsAAR0DAAGBARsAAYEBAhMBAAGBARsAAYEBAcwBHgABiAH/BQACAh0AAbMHARkCEwEAARMBswcZAAGzBwG9BwQAARwZAAGIAQUAAR0ZAAGBAQUAAYgBHwABgQHcBgABAgIAAQIZAAGzBwETARkDEwGBARkAAYEBAgAB0QwCAAGIARkAAeIHBQABgQEfAAGBAfoGAAICAQACAgEAAgIBAAICFAABgQEBGQQTAQACgQEDHAGBARMAARwGAAOBARYAAYEBBgABiAGZBwABzQEKAAECFAABgQECAAETARkGAAGzBxQAAYEBHwABiAEfAAGIAR8AAYEBHwABgQHABgADAh0AAbMHAYEBARMHAAGBARUAAYEBARwIAAEcFQABHAGHAR4AAoEBHgABiAEBgQEfAAGBAcAGAAECBQABAgEAAQIXAAGHAQUAARMBGQGzBxYAAWQBgQEHAAGHARYAAZYBARwfAAGBAf8GAAMCAwADAhcAAYEBARkBEwEAAxMBGQGzBxcAAR0HAAGIARcAAYEBnwcABAICAAMCFwABswcFEwEZARMBswcXAAEdBAAB0QwCAAEcHwABgQGaBwAFAhgAAYcBAgAFEwGHAR4AAaAIARwfAAGBAR8AAYgB9wYAAQICAAICAgACAhcAAYcBAgACEwEZAhMBswccAAGkAQEAAc4BAYEBHwABgQEfAAGBAfcGAAQCAQACAgEAAQIXAAGzBwGHAQOzBwEdAbMHAh0ZAAGBAQMdAocBAR0ZAAGBAQGIAQGBAQLiBwEdARwbAAGBAQGIAQOBAR0AAoEBAYgB+wYAAmQfAAGWAbaXAQA=")
          }]),
          ruinStoneSmall1: GD("ruinStoneSmall1", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("ghAAAQICAAGzBwEuAR0aAAGHAQMAAYgBHwABiAEfAAGBAR8AAYYBHgAChwEBgQEeAAGHAbsGAAICAbMHAYEBARwCHRkAAocBBQABiAEZAAGHAQUAAYcBHwABhwEfAAGGAR4AAYEBAYgBHwABgQG5BgABswcBzAED6AcBHAGzBxoAAYcB3QcAAR0BHAXoBwEdAQIXAAFkBwABgQF3AAGBAQcAAYcB2AYAARwF6AcBswcBAhYAAWQBiAEDAAHRDAMAAYgBFgABZAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQYAAWQBhwEXAAGBAQcAAYcBtwYAAbMHAR0F6AcBHAGzBxUAAmRIAAFkHwABZBcAAYEBBgABZAGHAR8AAWS4BgACHQPoBwEdAbMHmQEAAYcBBQABgQEBZB4AAWS5BgABAgGzBwEAAR0BHAEdGgABiAECAAHPAQIAAYgBGQABgQEFAAGIARkAAYEBBQABiAEZAAGGAQUAAYYBGQAChwEDAAKBARkAAYcBBQABgQG7BgABswcBAgEdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGHAQGBAdmuAQA=")
          }]),
          ruinStoneSmall2: GD("ruinStoneSmall2", {
            x: 11,
            y: 8,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AgACAgGzBwEdAgACAhcAAYgBAbMHAR0DAAGzBwEdAYgBAbMHFgABiAECIgMAARwBIgGIAQGzBxYAAocBBQABIgGBARcAAYYBBwABhgEfAAGBAdYGAAECBgABHQIAAbMHAS4UAAGzBwEcCQABhwEUAAEiAcwBCQABhwEUAAEiCgABgQGUBwABAgEAAR0IAAECFAABHQGzBwkAAYcBFAABswe/BwABswcEAAEd/gcAAbMHAQACHfsHAAMCAc8BAgIBswcZAAGzBwMdAbMHAYgBAmQZAAGzBwEcAiIBiAEdAAEingcAArMHAQACAhkAAbMHAYgBAdEMAgABHQGIAQFkGAABswcBiAEDAAGzBwGBAQFkGQABgQEDAAEiAYcBGgABhgEEAAGHARoAAYcB3wYAArMHAgABswcBAhgAAWQBswcBzQEEAAEiAmQXAAEcBQABswe5BwABAgIAAbMHGgACZAEdBQABswcYAAFkAbMHBQABHBkAASKfBwABswcBAh4AAWQCswceAAGzBwEcurcBAA==")
          }]),
          ruinStoneSmall3: GD("ruinStoneSmall3", {
            x: 12,
            y: 9,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("BgADAh0AArMHAYgBHQABIgEAAYEBuAcAAQIBAAECAQABAgEdAQABswcYAAGHAQEAArMHAYcBAc0BGgABgQEBAAIiAYgBHQABIgEAAYEBnAcAAQICAAEdAbMHAR0aAAGHAQEcHgABiAEfAAGBAR8AAYYB/wYAAQIBswcCAAGzBxoAAWQBswcfAAEiwAcAAgIEAAECFgACZAKzBwEcBAABhwEBiAEXAAGzBwEiBQABhwG6BwABAgEdAwACAhcAAWQCswcEAAGHAQGzBxcAAWQBIgGzBwUAAbMHGQABIgUAASKYBwABAgHNAQGzBwEdAgABswcXAAJkAYEBARwFAAGzBxgAAYEBBgABIhgAAYgBBgABIhgAAYYBBgABIhgAAocBHwABhwHABgABswcCAAGzBwEdAQIXAAFkAbMHAdEMBQACHRcAASIHAAEiFwABIgcAASKZBwACAgIAAbMHAQIYAAFkArMHARwDAAEcAbMHGAABHAEiBQABswcfAAEimAcAAwIDAAGzBwECGAAChwEBgQEEAAGHARkAAocBBAABiAEfAAGBAR8AAYYB/wYAAS4eAAGIAQGHAV8AAYcB9K4BAA==")
          }]),
          ruinStoneSmall4: GD("ruinStoneSmall4", {
            x: 9,
            y: 10,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("AgACAh4AASIBHR4AArMHHgABIp4HAAECHwABHQEcHgABIgHRDB4AASKeBwABAgHMAR4AARwBHR8AAbMHRAABZB4AAWQeAAJkuwYAAQIfAAGIAQMAAYgBGwABiAEDAAGIARsAAYEBAwABiAEBZBoAAYEBAwABgQEBZBoAAYYBAYcBAQABgQEBhgEbAAOHAQGBAQGIAR0AAmSgBgABAh8AAR0CZB0AAR0BZB4AASI8AAFkHwACZOAGAAEcAbMHAWQdAAHOAQEiHwABIpwHAAEuAQACAhwAAbMHAh0BHBwAARwBAAGzBx8AASKbzwEA")
          }]),
          ruinStoneSmall5: GD("ruinStoneSmall5", {
            x: 13,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("JwABZBsAAd4BAwABlgEbAAHeAQYAAWQfAAFkIAABZNcGAAUCAQADAhUAAbMHAYEBAbMHAYEBA7MHAR0DswcVAAGBAQEdAoEBBB0BgQECHBUAAR0BgQEBHQGBAQEdAoEBA4gBARwBZBMAAd0BAYEBAYgBAQADgQEBiAECgQEBiAEBHRQAAd0BAYgBAwABiAEGgQEaAASBAQKIARoAAogBA4EBAYgBGwABgQEBAAGBAQEAAYEB9QUAAgIBAAMCAQAEAhUAAbMHAhUDDwMVAQ8BswcUAAHdAQEdAwABDwMAAc0BAQABHRQAAd0BAYEBBAABFQQAAR0UAAHdAQGBAQUAARUDAAGIARQAAd0BAYgBBgABDwIAAYEBHQACDwGIAR8AAYEBlQYAAQIBAAQCAQACAgEAAQIUAAFkARwCFQMPAhUBDwEVARwVAAGBAQMAARUFAAGBARUAAeIHBAABDwQAAeIHFQABiAEFAAEPAwABiAEcAAEPAgABgQEcAAG9BwEVAQ8BgQEfAAGBAR8AAYEB9QUAAgIBAAICAwABAhcAAR0BDwEVBA8CFQEPAR0VAAEdCQABHRUAAeIHCQAB4gcVAAGBAQkAAR0fAAGBARsABBUBgQEfAAGIAZUGAAcCAQABAhcAAbMHAw8BFQHMAQEPARUBDwEVAbMHFQABgQEBpAEBAAHeAQEAAQkEAAEdFQAB4gcCAAHeAQEAAQkEAAHiBxUAAYEBAgAB3gEBAAEJBAABgQEYAAHeAQEAAQkEAAGBARgAAd4BAQ8CFQEPARUBDwGIAR8AAYEBHwABgQH2BQACAgEAAwIBAAECAQABAhUAAbMHAQ8BFQMPARUBAAEVAQ8BswcVAAEdAQAB3QECAAGgCAQAAYEBFQABgQEBAAHdAQIAAaAIBAABgQEVAAGBAQEAAd0BBwABiAEXAAHdAQcAAYgBFwAB3QEBDwEVBA8BAAGBARkAAdEMAQABzwEDAAGBAZUGAAMCAgAFAhYAAbMHAQ8DFQEPBBUBHBUAAYEBBAABoAgEAAGzBxUAAYEBCQABHRcAAd0BBwABiAEXAAHdAQcAAYEBFwAB3QEBDwIVAg8CAAGIAR8AAYEBHwABgQH1BQABAgIABAICAAECFgABiAEDFQIPARUBAAEVAQ8BHRUAAR0JAAGIARUAAR0JAAGzBx8AAR0YAAHcAQYAAYEBGAAB3AEGAAGIAR8AAYgBlgYAAwIBAAECAwACAhYAAw8BAAEJAwABFQGzBxoAAQkEAAGzBxoAAQkEAAEdHwABHR8AAYEBHwABgQEfAAGBAR8AAYEB9gUAAQIfAAEVBwABFQGzBx8AAR0fAAGIAR8AAYEBHwABgQEfAAGBAb8GAAECHwABgQEfAAGIAR8AAYEBnwcAAQIfAAEdHwABgQG0nwEA")
          }]),
          ruinStoneSmall6: GD("ruinStoneSmall6", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, AD.b)("JQAB3gEfAAHeAb4HAAECAQABAhwAAWQBswcBhwEBHRwAAZYBAYEBAYgBAYEBHQABgQEB4gcBiAEdAAGBAQHiBwGBAR4AAYgBAYEBHgABgQG9BgABAgMAAQIZAAHdAQGHAQGBAQEAAhQCswceAAGBAQEdHgABgQEBhgEeAAKBARwAARIBGAGBAQGIAR4AAYEBvQYAAgIBAAECGQABgQEBAAEUAhoBFAGBARgAAd4BBgABhwEYAAHeAQYAAYEBHwABgQEcAAEYAhIBgQEeAAHOAQGHAbcGAAICAgABAgEAAQIBAAICFgABswcBhwECAAEaAxQBGgEdFwABhwEB2wEEAAGgCAEAAYcBFwABgQEB2wEGAAGIAR0AAb0HAQABgQEXAAGBAQIAARIBGAESARgBEgGHAdcGAAECAgADAgEAAgIWAAGzBwGIAQEAARoDFAHOAQEUAbMHHAAB2QEBCwHPAQGIARwAAdkBAQsBAAGGARcAAYEBBQABCwEAAYEBFwABiAECAAISAd4EAhIBhwEfAAGHAbYGAAoCFgABswcBhwEDFAEaAxQBswcBZBYAAYcBBQABoAgBAAGBARcAAYcBBwABgQEXAAGBAQcAAYEBFwABgQECAAEYAxIBGAGHAdgGAAcCGQABhwEBGgIUARoBFAGBAR8AAYEBHwABgQEfAAGBARkAAYcBAQABGAESAhgBgQEZAAGHAQIAAdEMAgABgQG6BgACAgEAAQIbAAGHAQGzBwEaARQBGgKzBx4AAYEBAYgBHgABgQEBhgEeAAKBARoAAYcBAhIBGAGBAQGIARoAAYcBAwABgQG9BgACAhwAAWQBswcBhwEBswcBAAFkHQABgQEeAAHiBwGIAR0AAYEBAeIHAYEBHQABgQEBiAEBgQH+BgAC3AEeAALcAR0AA9wBHQAD3AEdAAPcAdmuAQA=")
          }])
        };

        function nD(DD, zD, wD) {
          const pD = new RD.d;
          for (const KD of wD) {
            const DD = pD.get(KD.chunkX, KD.chunkY, KD.chunkZ);
            if (!(0, sD.B)(DD)) throw new Error(`Duplicate chunk at ${KD.chunkX}, ${KD.chunkY}, ${KD.chunkZ}`);
            pD.set(KD.chunkX, KD.chunkY, KD.chunkZ, KD.rle)
          }
          return new gD.e(DD, {
            x: 0,
            y: 0,
            z: 0
          }, zD, pD)
        }
        const MD = {
            dungeonDraugrLarge1: nD("dungeonDraugrLarge1", {
              x: 21,
              y: 14,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, AD.b)("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")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, AD.b)("IAAEHBwABxwZAAEdBxwbAAEdHgACHRwAAR0BAAIdHAAEHZwGAAIcHgAGHBoACBwYAAgcGAACfwEfAR0cAAJ/AYEBAR0cAAJ/AYEBAR0cAAJ/AR8dAAMf/QUABRwbAAccGQAIHBgAAxwBHQQcGAADfwEdHAADfwEdHAADfx0AA38dAAIcAR/9BQAGHBoABxwZAAgcGAADHAEdBBwYAAN/AR0cAAN/AR0cAAN/AR0cAAN/HQACHAEf/QUABhwaAAgcGAAIHBgABBwCHQIcGAADfwIAAx0YAAN/AQAEHRgAA38CwgIDHRgAA38FHRkAARwBHx0ABB0cAAHCAgMdHgACHR8AAR0fAAEd3AQABhwaAAgcGAAIHBgACBwYAAJ/AR8DfwEfAR0YAAJ/AYEBA38BgQEBHRgAAn8BgQEDfwGBAQEdGAACfwEfA38BHwEdGAAHHxkAAn8BHwEdHAACfwGBAQEdHAACfwGBAQEdHAABfwG9BwEfAR0cAAMfAR3cBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/GQAHfwEdGAAHfwEdGAACfwEfAxwBHxkAA38BHRwAA38BHRwAAn8BvQcBHRwAAX8CvQcBHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/GQAHfxkAB38BHRgAAX8BvRMFfwEdGAABfwHJEwEfAQACHAEfAR0YAAN/AR0cAAN/AR0cAAN/AR0cAAJ/Ab0HAR0cAAIcAR8BHdwEAAccGQAIHBgACBwYAAccAR0YAAd/GQAHfwEdGAAHfwHCAhgAB38BHRgAAn8BHAMAAR8BHRgAA38dAAN/AR0cAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAHHAEdGAAHfwEdGAAHfwHCAhgAB38BwgIYAAd/GQACfwEcAwABHwEdGAADfx0AA38dAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAIHBgABn8BzgEBHRgAB38BwgIYAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfx0AA38BHRwAA38BHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfwEdHAADfwEdHAADfwEdHgABHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/AR0YAAd/GQACfwEfAQACHAEfGQADfwEdHAADfwEdHAADfwEdHAADfx8AAR/dBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/AR0YAAd/AR0YAAF/Ab0TBX8BwgIYAAF/AckTAR8DHAEfGQADfwHCAhwAA38BHRwAA38dAAN/HwABH90EAAccGQAIHBgACBwYAAgcGAAHfxkAB38ZAAd/AR0YAAd/AcICGAACfwEfAxwBHxkAA38BwgIcAAN/AcICHAADfx0AA38eAAEcAR/dBAAGHBoACBwYAAgcGAAIHBgAAn8BHwN/AR8ZAAJ/AYEBA38BgQEZAAJ/AYEBA38BgQEBHRgAAn8BHwN/AR8BHRgABx8ZAAJ/AR8BHRwAAn8BgQEBHRwAAn8BgQEBHRwAAn8BHx0AAx/dBAAGHBoACBwYAAgcGAAIHBgAA38BAALCAgEdGQADfwEAAR0BwgICHRgAA38FHRgAA38CHRwAARwBHz0AAR0CAAEdHAAEHRwAAR0BwgICHRwABB3cBAAGHBoABxwZAAgcGAAIHBgAA38dAAN/AR0cAAN/AR0cAAN/AR0cAAIcAR/9BQAFHBsABxwZAAgcGAAIHBgAA38BHRwAA38BHRwAA38BwgIcAAN/AcICHAACHAEf/QUAAhweAAYcGgAIHBgACBwYAAJ/AR8BHRwAAn8BgQEBHRwAAX8BvQcBgQEBHRwAAr0HAR8BHRwAAx+dBgAEHBwABxwZAAEcAx0EHBgAAsICAh0cAAEdAcICAh0cAAEdAgABHbxeAA==")
            }]),
            dungeonDraugrMedium1: nD("dungeonDraugrMedium1", {
              x: 27,
              y: 14,
              z: 27
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, AD.b)("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")
            }]),
            dungeonDraugrSmall1: nD("dungeonDraugrSmall1", {
              x: 11,
              y: 7,
              z: 11
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, AD.b)("AgAGHBoAAsICBgABHRYAAh0CwgICAAIdAQABHRUABR0BAAMdFwADHQMAAh0BwgIBHRYAAR0FAAEdAsICAR0dAAMdtwYACRwXAAEfB38BHwEdFQABHQGBAQd/AYEBAR0VAAEdAYEBB38BgQEBHRUAAR0BgQEHfwGBAQEdFQABHQGBAQd/AYEBFgABHQUfAhwCHwEdtgYACRwBHRYACX8BHRUAAR0JfwEdFQABHQG9Bwh/AcICFQABHQG9Bwh/AR0VAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYAChwBHRYACX8BHRUAAcICCX8BHRUAAcICCX8BwgIVAAEdAb0HCH8BwgIVAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYABBwDHwMcAR0WAAl/AR0WAAl/FgABwgIJfxYAAR0JfwHCAhYACX8BHRYAAR8BHAYAAR8BHbUGAAQcAx8EHBYABH8B0QwEfxcACX8XAAl/FwAJfxcACX8XAAEfBwABHLYGAAQcAx8EHBUAAR0JfwEdFQABHQl/AR0WAAl/FwAJfxcACX8XAAEfBgACHLYGAAEdCRwBHRUAAR0BzAEIfwHCAhUAAR0JfwEdFQABHQl/FwAJfwEdFgAJfwEdFgABHAQAAxwBHwEdtgYACRwBHRUAAcICCX8BwgIVAAEdCX8WAAEdCX8XAAh/Ab0HAR0WAAl/AR0WAAEfAwAEHAEfAR22BgAJHBYAAR0BHwd/AR8WAAEdAYEBB38BgQEXAAGBAQd/AYEBFwABgQEHfwGBARYAAR0BgQEHfwGBAQEdFQABHQYfARwCHwEdtwYAAx0DHBgABR0FAAEdFQADHQLCAgIAAh0ZAALCAgIABB0cAAIdAcICAR0WAAEdBQABHQLCAhcAAh0FAAMdtq4BAA==")
            }]),
            dungeonMagmaLarge1: nD("dungeonMagmaLarge1", {
              x: 40,
              y: 23,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, AD.b)("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AdMLAtcDAdMLBdcDAhwFABl/BAAdfwMAHX8CAB9/AQAffwIAHn8CAB5/AgAefwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwYAGn8KABR/xQIAChwG1wMDHATXAwYcAQAJHAHXAwEAAdEDBtMLA9cDBNMLAdcDAQAC1wMLHAHXAxTTCwHXAwocAdcDFNMLAdcDChwB1wMU0wsB1wMLHAbXAwPTCwLXAwHTCwjXAwIcAwAJfwHRDA5/AdEMAn8EABx/BAAcfwQAHn8CAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BgAafwoAB38FAAh/xQIADBwC1wMPHAEAChwB1wMCAAHXAwLTCwzXAw0cAdcDEtMLAdcDCxwB1wMT0wsB1wMLHAHXAxTTCwHXAwscFNcDAhwDABt/BAAcfwQAHH8EAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BQAbfwYAGn8KAAV/CQAGf8UCAB0cAQALHAbXAwUcBdcDDxwB1wMG0wsF1wMF0wsB1wMNHALXAwfTCwPXAwfTCwHXAwwcAdcDEtMLAdcDDRwS1wMDHAMAGn8GABp/BgAafwUAHn8CAB5/AwAdfwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwQAHH8FABt/BgALfwMADH8LAAN/CwAFf8UCAB0cAQANHALXAxwcAtcDAtMLAtcDBRwF1wMQHAHXAwTTCwLXAwMcAtcDA9MLAtcDDhwC1wME0wsG1wME0wsC1wMQHATXAwYcBNcDBRwEAA9/BAAEfwkAEH8CAAV/CAAZfwcAHX8DAB1/AwAdfwMAHX8EABx/BAAcfwQAHH8EABx/BAAcfwUADn8CAAt/BQANfwQACn8GAAp/CAAIfxoAA3/GAgAdHAEALRwC1wMdHATXAwccA9cDEhwF1wMFHATXAyUcBQANfxIADn8SAA9/EQAcfwQAHH8EABx/BAAcfwQAHH8EAA9/AgALfwQAD38DAAp/BQANfwQACn8FAA1/BAAKfwUADH8GAAl/BQAMfwYACX8HAAl/CQAHf+ACAA==")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, AD.b)("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")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, AD.b)("AwAdHAEAnwEcBQAJfwQABBwPAA1/BBwPAA1/BBwPAA1/BBwKfwQAD38DHAp/BAAPfwMcCn8EAA9/AhwBAAp/BQANfwQACn8FAA1/BAAKfwUADX8EAAp/BQANfwQACn8GAAt/BgAJfwYAC38GAAl/BgAKfwcACX8JAAZ/CgAHf+QCABwcAQCfARwGAAF/Ac8BBX8FAAQcDwANfwQcDwANfwQcDwANfwQcCn8FAA1/BBwKfwUADX8EHAp/BQANfwEAAhwBAAp/BQANfwQACn8FAA1/BAAKfwYADH8EAAp/BgALfwUACn8GAAt/BgAJfwcACn8GAAl/CAAIfwcACX8LAAN/DAAEf+YCABwcAgCeARwIAAN/BwAEHBEAC38EHBAADH8EHBAADH8EHAp/BgAMfwQcCn8GAAx/AxwLfwYADH8BAAIcC38HAAt/AwALfwcAC38EAAp/BwALfwQACn8IAAl/BQAKfwgACX8FAAp/CQAHfwcACX8KAAZ/CAAIf4UDABscAgAeHAEAfxwSAAQcEwAHfwIABBwTAAl/BBwSAAp/AxwLfwgACn8DHAt/CAALfwIcC38IAAt/AgALfwgAC38CAAt/CQAKfwIAC38JAAl/AwALfwkACX8DAAt/CgAHfwUACn8LAAN/CQAIfxsAA3+KAwAZHAIAHhwCAH4cLAADfxwACX8XABN/DAAUfwwAFH8MABV/CwAVfwwAFH8MABN/DgAHfwIACX8PAAN/BgAHfxsABH/HAwAdHAIAfhwuAAF/HwAFfxoADn8SAA9/EQAPfxEAD38SAA1/EwANfxQAC38XAAJ/AgADf40EABscAgAeHAIAHhwBAD8cTwAEfxwACX8XAAl/FwAIfxkAB38bAAR/kAUAGhwDAB0cAQAfHAEAHxzAxgEA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, AD.b)("BRwbAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AA38dAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABBwcAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/ngMABBwcAAccGQAHHBkACBwYAAgcGAAIHHgAAX8fAAF/HwACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgABfx8AAX+/AwADHB0ABhwaAAccGQAIHBgACBwYAAgceAABfx8AAX8fAAF/HwABfx8AAX8fAAF/HwABf58EAAEcHwAGHBoABxwZAAgcGAAIHBgACBz4BgAFHBsABxwZAAccGQAIHBgACBz4BgACHB4ABBwcAAYcGgAIHBgACByYBwADHB0ABhwaAAYcGgAHHNnGAQA=")
            }])
          },
          OD = {
            treeMapleLarge1: {
              schematic: fD.treeMapleLarge1,
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
              schematic: fD.treeMapleLarge2,
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
              schematic: fD.treeSpectralLarge1,
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
              schematic: fD.treeSpectralLarge2,
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
              schematic: fD.treePineLarge1,
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
              schematic: fD.treePineLarge2,
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
              schematic: fD.treeJungleLarge1,
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
              schematic: fD.treeJungleLarge2,
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
              schematic: fD.treePalmLarge1,
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
              schematic: fD.treePalmLarge2,
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
              schematic: BD.rockSnowLarge1,
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
              schematic: BD.rockSnowLarge2,
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
              schematic: BD.rockSnowLarge3,
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
              schematic: BD.rockJungleLarge1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 4,
                localZ: 13,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 16,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 22,
                localY: 4,
                localZ: 9,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge2: {
              schematic: BD.rockJungleLarge2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge3: {
              schematic: BD.rockJungleLarge3,
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
              schematic: BD.rockJungleLarge4,
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
              schematic: BD.rockJungleLarge5,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge6: {
              schematic: BD.rockJungleLarge6,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            ruinSnowSmall1: {
              schematic: hD.ruinSnowSmall1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 6,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 2,
                localZ: 6,
                mobTypeDistribution: new rD.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall2: {
              schematic: hD.ruinSnowSmall2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 9,
                localZ: 8,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 2,
                localY: 4,
                localZ: 8,
                mobTypeDistribution: new rD.e([{
                  value: "Frost Golem",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall3: {
              schematic: hD.ruinSnowSmall3,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 10,
                localY: 7,
                localZ: 5,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 2,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Frost Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall4: {
              schematic: hD.ruinSnowSmall4,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new rD.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium1: {
              schematic: hD.ruinSnowMedium1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 4,
                localZ: 21,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 6,
                localZ: 8,
                mobTypeDistribution: new rD.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium2: {
              schematic: hD.ruinSnowMedium2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 6,
                localZ: 3,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 6,
                localZ: 13,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 15,
                localY: 2,
                localZ: 8,
                mobTypeDistribution: new rD.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge1: {
              schematic: hD.ruinSnowLarge1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 21,
                localY: 20,
                localZ: 27,
                qualityDistribution: new rD.e([{
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 21,
                localY: 20,
                localZ: 14,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge2: {
              schematic: hD.ruinSnowLarge2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 27,
                localZ: 2,
                qualityDistribution: new rD.e([{
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 16,
                localY: 25,
                localZ: 9,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall1: {
              schematic: hD.ruinStoneSmall1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 0,
                localZ: 4,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 6,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall2: {
              schematic: hD.ruinStoneSmall2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 1,
                localZ: 4,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 6,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall3: {
              schematic: hD.ruinStoneSmall3,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 0,
                localZ: 4,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 1,
                localZ: 4,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall4: {
              schematic: hD.ruinStoneSmall4,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 0,
                localZ: 1,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 1,
                localY: 2,
                localZ: 2,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall5: {
              schematic: hD.ruinStoneSmall5,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 7,
                localZ: 7,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 6,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 7,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall6: {
              schematic: hD.ruinStoneSmall6,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 8,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 7,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium1: {
              schematic: hD.ruinStoneMedium1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 2,
                localZ: 5,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 9,
                localZ: 13,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium2: {
              schematic: hD.ruinStoneMedium2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 16,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 0,
                localZ: 9,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 7,
                localZ: 10,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium3: {
              schematic: hD.ruinStoneMedium3,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 5,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 6,
                localZ: 25,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium4: {
              schematic: hD.ruinStoneMedium4,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }])
              }, {
                localX: 3,
                localY: 1,
                localZ: 10,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 6,
                localZ: 19,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium5: {
              schematic: hD.ruinStoneMedium5,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 4,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium6: {
              schematic: hD.ruinStoneMedium6,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 3,
                localZ: 20,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 12,
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 9,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 16,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium7: {
              schematic: hD.ruinStoneMedium7,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 18,
                localZ: 9,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 5,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium8: {
              schematic: hD.ruinStoneMedium8,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 6,
                localY: 14,
                localZ: 4,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 2,
                localZ: 2,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 1
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium9: {
              schematic: hD.ruinStoneMedium9,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 2,
                localZ: 11,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 1,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 2,
                localZ: 3,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 2,
                localZ: 9,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium10: {
              schematic: hD.ruinStoneMedium10,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 11,
                localZ: 13,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 23,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 19,
                localZ: 23,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 1
                }, {
                  value: sD.f.EPIC,
                  weight: 2
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 15,
                localZ: 23,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 20,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 3,
                localZ: 2,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium11: {
              schematic: hD.ruinStoneMedium11,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 11,
                localZ: 14,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 14,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 16,
                localZ: 15,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 1,
                localZ: 14,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge1: {
              schematic: hD.ruinStoneLarge1,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 13,
                localZ: 11,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 22,
                localZ: 19,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 1
                }, {
                  value: sD.f.EPIC,
                  weight: 2
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 18,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 1
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 22,
                localZ: 17,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 14,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 16,
                localZ: 14,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge2: {
              schematic: hD.ruinStoneLarge2,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 13,
                localZ: 21,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 22,
                localZ: 22,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 23,
                localZ: 30,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 20,
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 1
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 11,
                localZ: 26,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 1
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 25,
                localZ: 26,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 16,
                localZ: 24,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 2,
                localZ: 26,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 7,
                localZ: 8,
                mobTypeDistribution: new rD.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge3: {
              schematic: hD.ruinStoneLarge3,
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
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 24,
                localZ: 31,
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 1
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 13,
                localZ: 5,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 15,
                localZ: 20,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 1,
                localZ: 22,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 32,
                localY: 2,
                localZ: 23,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 17,
                localY: 2,
                localZ: 13,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 30,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 15,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 25,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 24,
                localZ: 31,
                mobTypeDistribution: new rD.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrSmall1: {
              schematic: MD.dungeonDraugrSmall1,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                cD: -15,
                LD: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 7,
                localY: 1,
                localZ: 1,
                qualityDistribution: new rD.e([{
                  value: sD.f.COMMON,
                  weight: 1
                }, {
                  value: sD.f.UNCOMMON,
                  weight: 2
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new rD.e([{
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
              schematic: MD.dungeonDraugrMedium1,
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
                cD: -40,
                LD: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 1,
                localZ: 8,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 1,
                localZ: 18,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 13,
                localY: 1,
                localZ: 13,
                mobTypeDistribution: new rD.e([{
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
              schematic: MD.dungeonDraugrLarge1,
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
                cD: -60,
                LD: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 4,
                localZ: 30,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 1,
                qualityDistribution: new rD.e([{
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 4,
                localZ: 9,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 38,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 2
                }, {
                  value: sD.f.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 10,
                localY: 4,
                localZ: 9,
                mobTypeDistribution: new rD.e([{
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
                mobTypeDistribution: new rD.e([{
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
              schematic: MD.dungeonMagmaLarge1,
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
                cD: -70,
                LD: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 6,
                localZ: 32,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 33,
                localY: 6,
                localZ: 7,
                qualityDistribution: new rD.e([{
                  value: sD.f.UNCOMMON,
                  weight: 1
                }, {
                  value: sD.f.RARE,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 6,
                localZ: 20,
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 2
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 6,
                localZ: 18,
                qualityDistribution: new rD.e([{
                  value: sD.f.EPIC,
                  weight: 2
                }, {
                  value: sD.f.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 12,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new rD.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new rD.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new rD.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new rD.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }]
            }
          },
          JD = [{
            pD: "ruinStoneSmall1",
            frequency: .15
          }, {
            pD: "ruinStoneSmall2",
            frequency: .15
          }, {
            pD: "ruinStoneSmall3",
            frequency: .15
          }, {
            pD: "ruinStoneSmall4",
            frequency: .15
          }, {
            pD: "ruinStoneMedium1",
            frequency: .15
          }, {
            pD: "ruinStoneSmall5",
            frequency: .15
          }, {
            pD: "ruinStoneSmall6",
            frequency: .15
          }, {
            pD: "ruinStoneMedium2",
            frequency: .15
          }, {
            pD: "ruinStoneMedium3",
            frequency: .15
          }, {
            pD: "ruinStoneMedium4",
            frequency: .15
          }, {
            pD: "ruinStoneMedium5",
            frequency: .15
          }, {
            pD: "ruinStoneMedium6",
            frequency: .15
          }, {
            pD: "ruinStoneMedium7",
            frequency: .15
          }, {
            pD: "ruinStoneMedium8",
            frequency: .15
          }, {
            pD: "ruinStoneMedium9",
            frequency: .15
          }, {
            pD: "ruinStoneMedium10",
            frequency: .15
          }, {
            pD: "ruinStoneMedium11",
            frequency: .15
          }, {
            pD: "ruinStoneLarge1",
            frequency: .15
          }, {
            pD: "ruinStoneLarge2",
            frequency: .15
          }, {
            pD: "ruinStoneLarge3",
            frequency: .15
          }],
          ED = [{
            pD: "treeMapleLarge1",
            frequency: 1
          }, {
            pD: "treeMapleLarge2",
            frequency: 1.5
          }],
          QD = {
            ruins: [{
              pD: "ruinStoneSmall1",
              frequency: .3
            }, {
              pD: "ruinStoneSmall2",
              frequency: .3
            }, {
              pD: "ruinStoneSmall3",
              frequency: .3
            }, {
              pD: "ruinStoneSmall4",
              frequency: .3
            }, {
              pD: "ruinStoneMedium1",
              frequency: .3
            }, {
              pD: "ruinStoneSmall5",
              frequency: .3
            }, {
              pD: "ruinStoneSmall6",
              frequency: .3
            }, {
              pD: "ruinStoneMedium2",
              frequency: .3
            }, {
              pD: "ruinStoneMedium3",
              frequency: .3
            }, {
              pD: "ruinStoneMedium4",
              frequency: .3
            }, {
              pD: "ruinStoneMedium5",
              frequency: .3
            }, {
              pD: "ruinStoneMedium6",
              frequency: .3
            }, {
              pD: "ruinStoneMedium7",
              frequency: .3
            }, {
              pD: "ruinStoneMedium8",
              frequency: .3
            }, {
              pD: "ruinStoneMedium9",
              frequency: .3
            }, {
              pD: "ruinStoneMedium10",
              frequency: .3
            }, {
              pD: "ruinStoneMedium11",
              frequency: .3
            }, {
              pD: "ruinStoneLarge1",
              frequency: .3
            }, {
              pD: "ruinStoneLarge2",
              frequency: .3
            }, {
              pD: "ruinStoneLarge3",
              frequency: .3
            }],
            trees: [{
              pD: "treeMapleLarge1",
              frequency: 2
            }, {
              pD: "treeMapleLarge2",
              frequency: 3
            }]
          },
          XD = {
            ruins: QD.ruins,
            trees: [{
              pD: "treePineLarge1",
              frequency: 5
            }, {
              pD: "treePineLarge2",
              frequency: 5
            }]
          },
          VD = [{
            pD: "dungeonDraugrSmall1",
            frequency: 45
          }, {
            pD: "dungeonDraugrMedium1",
            frequency: 10
          }, {
            pD: "dungeonDraugrLarge1",
            frequency: 10
          }, {
            pD: "dungeonMagmaLarge1",
            frequency: 25
          }],
          PD = JD.map((DD => {
            let {
              pD: zD
            } = DD;
            return zD
          }));

        function CD(DD) {
          for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
          return xD(DD, wD.flat().map((DD => {
            let {
              pD: zD,
              frequency: wD
            } = DD;
            return {
              prefab: zD,
              frequency: wD
            }
          })))
        }

        function xD(DD, zD) {
          let wD = 0;
          for (const pD of zD) wD += pD.frequency;
          if (wD > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${wD}`);
          return {
            density: DD,
            frequencyParams: {
              noPrefabFrequency: 100 - wD,
              prefabFrequencies: zD
            }
          }
        }
        class TD {
          constructor(DD, zD, wD, pD, sD) {
            let {
              oreGenerator: KD
            } = sD, LD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.CI = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.CI = DD, this.blockMetadata = zD, this.seed = pD, this.topsoilBlockType = zD["Grass Block"].id, this.lowsoilBlockType = zD.Dirt.id, this.topwaterBlockType = zD.Water.id, this.worldGenerator = wD, this.oreGenerator = KD;
            const gD = Math.ceil(wD.prefabSize / 2),
              RD = {
                [cD.o.SURFACE]: LD,
                [cD.o.UNDERGROUND]: CD(cD.l.MEDIUM, VD)
              };
            this.prefabDataPerType = Object.fromEntries(Object.values(cD.o).filter((DD => Number.isInteger(DD))).map((DD => Number(DD))).map((DD => {
              const zD = RD[DD];
              if (!zD || 0 === zD.frequencyParams.prefabFrequencies.length) return [DD, null];
              const {
                density: pD,
                frequencyParams: sD
              } = zD;
              return [DD, {
                density: pD,
                distribution: new rD.e([...sD.noPrefabFrequency > 0 ? [{
                  weight: sD.noPrefabFrequency,
                  value: null
                }] : [], ...sD.prefabFrequencies.map((DD => {
                  let {
                    prefab: zD,
                    frequency: pD
                  } = DD;
                  const sD = "string" === typeof zD ? {
                      ...OD[zD],
                      name: zD
                    } : zD,
                    KD = sD.name;
                  if ("string" !== typeof zD && Object.hasOwn(OD, KD)) throw new Error(`Prefab definition "${KD}" has a built-in prefab's name`);
                  const rD = Math.floor(Math.sqrt(sD.clearingRadiusSquared));
                  if (rD > gD) throw new Error(`Prefab ${KD} has clearing radius ${rD} which is greater than the world generator's prefab radius ${gD}`);
                  if (sD.groundingRadius > wD.maxPrefabGroundingRadius) throw new Error(`Prefab ${KD} has grounding radius ${sD.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${wD.maxPrefabGroundingRadius}`);
                  if ("centre" !== sD.groundingPoints && 0 === sD.groundingPoints.length) throw new Error(`Prefab ${KD} has no grounding points`);
                  const LD = sD.schematic.dimensions;
                  if (LD.x > wD.prefabSize || LD.y > wD.prefabSize || LD.z > wD.prefabSize) throw new Error(`Prefab ${KD} has dimensions ${JSON.stringify(LD)} which are too large for the world generator's prefab size of ${wD.prefabSize}`);
                  return {
                    weight: pD,
                    value: {
                      ...sD,
                      dimensionX: LD.x,
                      dimensionY: LD.y,
                      dimensionZ: LD.z
                    }
                  }
                }))])
              }]
            })))
          }
          init() {
            this.floraGenerator = new LD(this.blockMetadata, this.CI, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
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
              treeType: sD.p.Maple,
              chance: this.mapleTreeChance
            }, {
              treeType: sD.p.Pine,
              chance: this.pineTreeChance
            }, {
              treeType: sD.p.Plum,
              chance: this.plumTreeChance
            }, {
              treeType: sD.p.Cedar,
              chance: this.cedarTreeChance
            }, {
              treeType: sD.p.Aspen,
              chance: this.aspenTreeChance
            }, {
              treeType: sD.p.Jungle,
              chance: this.jungleTreeChance
            }, {
              treeType: sD.p.Palm,
              chance: this.palmTreeChance
            }, {
              treeType: sD.p.AutumnMaple,
              chance: this.autumnMapleTreeChance
            }, {
              treeType: sD.p.Pear,
              chance: this.pearTreeChance
            }, {
              treeType: sD.p.Cherry,
              chance: this.cherryTreeChance
            }, {
              treeType: sD.p.Spectral,
              chance: this.spectralTreeChance
            }, {
              treeType: sD.p.Mango,
              chance: this.mangoTreeChance
            }, {
              treeType: sD.p.AutumnAspen,
              chance: this.autumnAspenTreeChance
            }, {
              treeType: sD.p.Dead,
              chance: this.deadTreeChance
            }, {
              treeType: sD.p.FallenLog,
              chance: this.fallenLogChance
            }], this.totalTreeChance = 0;
            for (const {
                chance: DD
              }
              of this.treeChances) this.totalTreeChance += DD
          }
          xzId(DD, zD) {
            return `${DD}|${zD}`
          }
          getHeightmapVal(DD, zD) {
            return this.offsettedHeight + this._heightmapSimplex.getOctaves(DD, zD)
          }
          carveGround(DD, zD, wD) {
            return null
          }
          getTopsoilBlock(DD, zD, wD) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(DD, zD, wD, pD) {
            return this.lowsoilBlockType
          }
          getStrataBlock(DD, zD, wD, pD) {
            return 0
          }
          getDryBedBlock(DD, zD, wD) {
            return this.getTopsoilBlock(DD, zD, wD)
          }
          getTotalTreeChance() {
            return this.totalTreeChance
          }
          hasPrefabs(DD, zD) {
            const wD = this.prefabDataPerType[DD];
            return null !== wD && wD.density === zD
          }
          canPlaceSurfacePrefab(DD, zD) {
            return !0
          }
          allowsPrefab(DD, zD, wD, pD, sD) {
            return !0
          }
          getRandomPrefab(DD, zD, wD) {
            const pD = this.prefabDataPerType[zD];
            return null === pD || pD.density !== wD ? null : pD.distribution.sample(DD)
          }
        }
        class bD extends TD {
          constructor(DD, zD, wD, sD, KD) {
            super(DD, zD, wD, `${sD}Desert`, KD, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = zD.Sand.id, this.lowsoilBlockType = zD.Sand.id, this._heightmapSimplex = new pD.j([{
              amplitude: 2,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${sD}DesertBiomeHeightMap`)
          }
        }
        class jD extends bD {
          constructor() {
            super(...arguments), this.key = "manyCactusDesert", this.cactusChance = .05
          }
        }
        class dD extends bD {
          constructor(DD, zD, wD, KD, rD) {
            super(DD, zD, wD, KD, rD, CD(cD.l.VERY_HIGH, [{
              pD: "treePalmLarge1",
              frequency: 45
            }, {
              pD: "treePalmLarge2",
              frequency: 45
            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(sD.c.OASIS), this._heightmapSimplex = new pD.j([{
              amplitude: 1,
              frequency: 1 / 90
            }, {
              amplitude: .5,
              frequency: 1 / 35
            }], `${KD}OasisBiomeHeightMap`)
          }
          canPlaceSurfacePrefab(DD, zD) {
            return !(this.worldGenerator.getDistToLakeEdge(DD, zD, this.maxPrefabDistFromLakeEdge) > this.maxPrefabDistFromLakeEdge)
          }
        }
        class SD extends bD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, `${pD}RedDesert`, sD), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = zD["Red Sand"].id, this.lowsoilBlockType = zD["Red Sand"].id
          }
        }
        class iD extends TD {
          constructor(DD, zD, wD, KD, rD) {
            super(DD, zD, wD, `${KD}Plains`, rD, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CD(cD.l.MEDIUM, JD, ED)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(sD.c.PLAINS), this.topsoilBlockType = zD["Grass Block"].id, this.lowsoilBlockType = zD.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new pD.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${KD}PlainsBiomeHeightMap`)
          }
        }
        class lD extends iD {
          constructor() {
            super(...arguments), this.key = "tallGrassPlains", this.grassChance = .06, this.tallGrassChance = .12
          }
        }
        class WD extends iD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD, sD, CD(cD.l.MEDIUM, [{
              pD: "treeMapleLarge1",
              frequency: 6
            }, {
              pD: "treeMapleLarge2",
              frequency: 9
            }])), this.key = "meadowPlains", this.grassChance = .12, this.tallGrassChance = .24, this.cornChance = 25e-5, this.flowerPatchDistApart = 5
          }
        }
        class ND extends iD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD, sD, CD(cD.l.MEDIUM, ED)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = zD.Snow.id, this.topwaterBlockType = zD.Ice.id
          }
        }
        class ZD extends TD {
          constructor(DD, zD, wD, sD, KD) {
            super(DD, zD, wD, `${sD}Forest`, KD, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CD(cD.l.MEDIUM, QD.ruins, QD.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = zD["Grass Block"].id, this.lowsoilBlockType = zD.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new pD.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${sD}ForestBiomeHeightMap`)
          }
        }
        class yD extends ZD {
          constructor() {
            super(...arguments), this.key = "plumForest", this.pumpkinChance = 30, this.melonChance = 0, this.aspenTreeChance = 0, this.plumTreeChance = 1
          }
        }
        class kD extends ZD {
          constructor() {
            super(...arguments), this.key = "pearForest", this.melonChance = 30, this.aspenTreeChance = 0, this.pearTreeChance = 1
          }
        }
        class mD extends ZD {
          constructor(DD, zD, wD, pD, KD) {
            super(DD, zD, wD, pD, KD, CD(cD.l.MEDIUM, QD.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(sD.c.AUTUMN)
          }
        }
        class eD extends ZD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD, sD, CD(cD.l.HIGH, [{
              pD: "treeJungleLarge1",
              frequency: 20
            }, {
              pD: "treeJungleLarge2",
              frequency: 20
            }, {
              pD: "rockJungleLarge1",
              frequency: 8
            }, {
              pD: "rockJungleLarge2",
              frequency: 8
            }, {
              pD: "rockJungleLarge3",
              frequency: 8
            }, {
              pD: "rockJungleLarge4",
              frequency: 8
            }, {
              pD: "rockJungleLarge5",
              frequency: 8
            }, {
              pD: "rockJungleLarge6",
              frequency: 8
            }])), this.key = "jungleForest", this.minDistanceFromOrigin = 200, this.grassChance = .01, this.tallGrassChance = .02, this.jungleTallGrassChance = .04, this.catnipChance = .02, this.flowerPatchDistApart = 12, this.melonChance = 0, this.fatRedMushroomChance = 12, this.fatBrownMushroomChance = 12, this.aspenTreeChance = 0, this.mapleTreeChance = 0, this.jungleTreeChance = 10, this.palmTreeChance = 2, this.mangoTreeChance = 2, this.topsoilBlockType = zD["Jungle Grass Block"].id
          }
        }
        class oD extends ZD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD, sD, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CD(cD.l.MEDIUM, XD.ruins, XD.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = zD["Pine Grass Block"].id
          }
        }
        class aD extends oD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD, sD), this.key = "snowyPineForest", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cranberryChance = 10, this.fallenPineConeChance = 5, this.pineGrassChance = .004, this.pineFernChance = .001, this.topsoilBlockType = zD.Snow.id, this.topwaterBlockType = zD.Ice.id
          }
        }
        class uD extends ZD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, `${pD}Blue`, sD), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class vD extends ZD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD, sD, CD(cD.l.MEDIUM, QD.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class tD extends TD {
          constructor(DD, zD, wD, sD, KD) {
            super(DD, zD, wD, `${sD}RollingHills`, KD), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = zD["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new pD.j([{
              amplitude: 20,
              frequency: .005
            }, {
              amplitude: 4,
              frequency: 1 / 70
            }], `${sD}RollingHillsBiomeHeightMap`)
          }
        }
        class FD extends TD {
          constructor(DD, zD, wD, sD, KD) {
            super(DD, zD, wD, `${sD}SnowyMountains`, KD), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new pD.j([{
              amplitude: 80,
              frequency: .005
            }], `${sD}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new pD.j([{
              amplitude: 20,
              frequency: 1 / 120
            }], `${sD}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new pD.j([{
              amplitude: 8,
              frequency: 1 / 120
            }], `${sD}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, pD.D)(this.ridgedNoiseOctave1) + (0, pD.D)(this.ridgedNoiseOctave2)
          }
          getHeightmapVal(DD, zD) {
            const wD = this.ridgedNoiseAmplitude - Math.abs(this.ridgedNoiseOctave1.getOctaves(DD, zD)) - Math.abs(this.ridgedNoiseOctave2.getOctaves(DD, zD));
            return this.offsettedHeight + wD + this.nonRidgedNoise.getOctaves(DD, zD)
          }
          getTopsoilBlock(DD, zD, wD) {
            return zD > 80 ? this.blockMetadata.Snow.id : zD > 60 ? this.blockMetadata.Stone.id : this.blockMetadata["Grass Block"].id
          }
          getLowsoilBlockType(DD, zD, wD, pD) {
            return zD > 85 && zD >= pD - 2 ? this.blockMetadata.Snow.id : zD > 57 ? this.blockMetadata.Stone.id : zD > 53 ? this.blockMetadata["Rocky Dirt"].id : this.blockMetadata.Dirt.id
          }
        }
        class YD extends iD {
          constructor(DD, zD, wD, sD, KD) {
            super(DD, zD, wD, sD, KD, CD(cD.l.HIGH, [{
              pD: "treeSpectralLarge1",
              frequency: 4
            }, {
              pD: "treeSpectralLarge2",
              frequency: 4
            }, {
              pD: "rockSnowLarge1",
              frequency: 18
            }, {
              pD: "rockSnowLarge2",
              frequency: 18
            }, {
              pD: "rockSnowLarge3",
              frequency: 18
            }, {
              pD: "ruinSnowSmall1",
              frequency: 4
            }, {
              pD: "ruinSnowSmall2",
              frequency: 4
            }, {
              pD: "ruinSnowSmall3",
              frequency: 4
            }, {
              pD: "ruinSnowSmall4",
              frequency: 4
            }, {
              pD: "ruinSnowMedium1",
              frequency: 4
            }, {
              pD: "ruinSnowMedium2",
              frequency: 4
            }, {
              pD: "ruinSnowLarge1",
              frequency: 3
            }, {
              pD: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = zD["Packed Snow"].id, this.lowsoilBlockType = zD.Snow.id, this.topwaterBlockType = zD.Ice.id, this._heightmapSimplex = new pD.j([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${sD}FrozenBadlandsPlainsHeightMap`)
          }
        }
        class HD extends ZD {
          constructor(DD, zD, wD, sD, KD) {
            super(DD, zD, wD, sD, KD, CD(cD.l.HIGH, [{
              pD: "treeSpectralLarge1",
              frequency: 8
            }, {
              pD: "treeSpectralLarge2",
              frequency: 8
            }, {
              pD: "rockSnowLarge1",
              frequency: 4
            }, {
              pD: "rockSnowLarge2",
              frequency: 4
            }, {
              pD: "rockSnowLarge3",
              frequency: 4
            }, {
              pD: "ruinSnowSmall1",
              frequency: 6
            }, {
              pD: "ruinSnowSmall2",
              frequency: 6
            }, {
              pD: "ruinSnowSmall3",
              frequency: 6
            }, {
              pD: "ruinSnowSmall4",
              frequency: 6
            }, {
              pD: "ruinSnowMedium1",
              frequency: 4
            }, {
              pD: "ruinSnowMedium2",
              frequency: 4
            }, {
              pD: "ruinSnowLarge1",
              frequency: 3
            }, {
              pD: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = zD["Packed Snow"].id, this.lowsoilBlockType = zD.Snow.id, this.topwaterBlockType = zD.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new pD.j([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${sD}FrozenBadlandsForestHeightMap`)
          }
        }
        class qD extends TD {
          constructor(DD, zD, wD, KD, rD, LD) {
            super(DD, zD, wD, `${KD}Custom_${LD.bD}_${LD.jD}`, rD), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, sD.w)(LD.bD, zD), this.lowsoilBlockType = (0, sD.w)(LD.jD, zD), this._heightmapSimplex = new pD.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${KD}CustomBiomeHeightMap`)
          }
        }
      },
      39701: (DD, zD, wD) => {
        wD.d(zD, {
          d: () => RD,
          e: () => BD,
          i: () => ID,
          j: () => UD
        });
        var pD = wD(39653),
          sD = wD(39635),
          KD = wD(39625),
          rD = wD(619),
          LD = wD(39657),
          cD = wD(4263),
          gD = wD(39698);
        class RD {
          constructor(DD, zD, wD, sD, rD, cD) {
            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.xD = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.CI = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = wD, this.blockMetadata = rD, this.CI = sD, this.biomePointGen = new LD.c("biome", 150, !1, !0, wD, 3, sD), this.biomeOffsetSimplex = new KD.j([{
              amplitude: 1,
              frequency: .2
            }, {
              amplitude: 5,
              frequency: 1 / 70
            }], `${wD}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, KD.D)(this.biomeOffsetSimplex)), this.baseBiome = new pD.g(sD, rD, DD, wD, {
              oreGenerator: zD
            }), this.baseBiome.init(), this.xD = cD, this.anyStrata = cD.some((DD => {
              let {
                biome: zD
              } = DD;
              return zD.strataDepth > 0
            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.xD.length);
            for (let pD = 0; pD < this.xD.length; pD++) {
              const DD = this.xD[pD],
                {
                  biome: zD,
                  frequency: wD,
                  altBiome: sD
                } = DD;
              if (this.biomeFrequencies[pD] = wD, null !== sD) {
                if (sD.init(), sD.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${pD}`);
                let DD = !1;
                for (let zD = 0; zD < this.xD.length; zD++)
                  if (this.xD[zD].biome === sD) {
                    DD = !0;
                    break
                  } if (!DD) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${pD}`)
              } else if (zD.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${pD}`);
              this.biomesTotalFrequency += wD, zD.init()
            }
          }
          generate(DD, zD) {
            const [wD, pD] = this.getBiomeOffsets(DD, zD), sD = this.biomePointGen.getKClosestPointsWithWeights(DD + wD, zD + pD, 60), KD = [];
            for (let rD = 0; rD < sD.length; rD++) {
              const DD = sD[rD],
                {
                  biome: zD,
                  biomeId: wD
                } = this.getBiomeForBiomePoint(DD.pt),
                pD = {
                  weight: DD.weight,
                  biome: zD,
                  biomeId: wD,
                  biomeModifiers: null
                };
              0 === rD && (pD.biomeModifiers = this.getBiomeModifiersForBiomePoint(DD.pt)), KD.push(pD)
            }
            return KD
          }
          getBiome(DD, zD) {
            const [wD, pD] = this.getBiomeOffsets(DD, zD), sD = this.biomePointGen.getClosestPoint(DD + wD, zD + pD);
            return this.getBiomeForBiomePoint(sD)
          }
          regionMayHaveScatteredLakes(DD, zD) {
            const wD = this.biomePointGen.gridSize;
            if (DD >= this.lastScatteredLakeCellX * wD + this.biomeOffsetBound && DD < (this.lastScatteredLakeCellX + 1) * wD - this.biomeOffsetBound && zD >= this.lastScatteredLakeCellZ * wD + this.biomeOffsetBound && zD < (this.lastScatteredLakeCellZ + 1) * wD - this.biomeOffsetBound) return this.lastScatteredLakeCellResult;
            const [pD, sD] = this.getBiomeOffsets(DD, zD), KD = DD + pD, rD = zD + sD, LD = this.biomePointGen.getCellCoordFromGlobalCoord(KD, rD), cD = LD[0], gD = LD[1];
            if (cD === this.lastScatteredLakeCellX && gD === this.lastScatteredLakeCellZ) return this.lastScatteredLakeCellResult;
            let RD = !1;
            for (const AD of this.biomePointGen.getPointsAroundPoint(KD, rD))
              if (this.getBiomeForBiomePoint(AD).biome.hasScatteredLakes) {
                RD = !0;
                break
              } return this.lastScatteredLakeCellX = cD, this.lastScatteredLakeCellZ = gD, this.lastScatteredLakeCellResult = RD, RD
          }
          regionMayHaveVeryHighSurfacePrefabs(DD, zD, wD, pD) {
            const KD = this.biomePointGen.gridSize,
              rD = Math.floor((DD - this.biomeOffsetBound) / KD),
              LD = Math.floor((zD - this.biomeOffsetBound) / KD),
              cD = Math.floor((wD + this.biomeOffsetBound) / KD),
              gD = Math.floor((pD + this.biomeOffsetBound) / KD);
            for (let RD = rD; RD <= cD; RD++)
              for (let DD = LD; DD <= gD; DD++) {
                const zD = this.biomePointGen.getPointsAroundPoint(RD * KD, DD * KD);
                let wD = this.veryHighSurfacePrefabCells.get(zD);
                if (void 0 === wD) {
                  wD = !1;
                  for (const DD of zD)
                    if (this.getBiomeForBiomePoint(DD).biome.hasPrefabs(sD.o.SURFACE, sD.l.VERY_HIGH)) {
                      wD = !0;
                      break
                    } this.veryHighSurfacePrefabCells.set(zD, wD)
                }
                if (wD) return !0
              }
            return !1
          }
          getBiomeOffsets(DD, zD) {
            if (DD === this.lastBiomeOffsetAtX && zD === this.lastBiomeOffsetAtZ) return this.lastBiomeOffsets;
            const wD = Math.floor(this.biomeOffsetSimplex.getOctaves(DD, zD)),
              pD = Math.floor(this.biomeOffsetSimplex.getOctaves(DD + 500, zD + 860));
            return this.lastBiomeOffsetAtX = DD, this.lastBiomeOffsetAtZ = zD, this.lastBiomeOffsets[0] = wD, this.lastBiomeOffsets[1] = pD, this.lastBiomeOffsets
          }
          getBiomeForBiomePoint(DD) {
            if (this.mostRecentlyAccessedBiome && DD[0] === this.mostRecentlyAccessedPtForBiome[0] && DD[1] === this.mostRecentlyAccessedPtForBiome[1]) return this.mostRecentlyAccessedBiome;
            const zD = (0, gD.f)(DD[0], DD[1]);
            let wD = this.biomesByPoint.get(zD);
            return void 0 === wD && (wD = this.pickBiomeForBiomePoint(DD), this.biomesByPoint.size >= 1024 && this.biomesByPoint.clear(), this.biomesByPoint.set(zD, wD)), this.mostRecentlyAccessedBiome = wD, this.mostRecentlyAccessedPtForBiome[0] = DD[0], this.mostRecentlyAccessedPtForBiome[1] = DD[1], wD
          }
          pickBiomeForBiomePoint(DD) {
            const zD = Math.max(Math.abs(DD[0]), Math.abs(DD[1])),
              wD = new cD.g(`${DD[0]}|${DD[1]}|${this.seed}`);
            let pD = fD(this.biomeFrequencies, this.biomesTotalFrequency, wD),
              sD = this.xD[pD].biome;
            if (zD < sD.minDistanceFromOrigin) {
              sD = this.xD[pD].altBiome;
              for (let DD = 0; DD < this.xD.length; DD++)
                if (this.xD[DD].biome === sD) {
                  pD = DD;
                  break
                }
            }
            return {
              biome: sD,
              biomeId: pD
            }
          }
          getBiomeModifiersForBiomePoint(DD) {
            if (this.mostRecentlyAccessedModifier && DD[0] === this.mostRecentlyAccessedModifierPt[0] && DD[1] === this.mostRecentlyAccessedModifierPt[1]) return this.mostRecentlyAccessedModifier;
            const {
              biomeId: zD
            } = this.getBiomeForBiomePoint(DD), {
              dD: wD,
              stoneFrequencies: pD,
              stonesTotalFrequency: sD
            } = this.xD[zD], KD = {
              stoneTypeId: wD[fD(pD, sD, new cD.g(`${DD[0]}|${DD[1]}|${this.seed}Modifiers`))].stoneId
            };
            return this.mostRecentlyAccessedModifier = KD, this.mostRecentlyAccessedModifierPt[0] = DD[0], this.mostRecentlyAccessedModifierPt[1] = DD[1], KD
          }
          getBiomeInfoForChunkFill(DD, zD, wD) {
            const pD = {
              biomeIds: new KD.i(this.CI, [DD, zD]),
              stoneTypeIds: new KD.i(this.CI, [DD, zD])
            };
            for (let sD = DD; sD < DD + this.CI; sD++)
              for (let DD = zD; DD < zD + this.CI; DD++) {
                const zD = wD.getOrGenerate(sD, DD)[0];
                pD.biomeIds.set(sD, DD, zD.biomeId), pD.stoneTypeIds.set(sD, DD, zD.biomeModifiers.stoneTypeId)
              }
            return pD
          }
          getBiomeFromId(DD) {
            return this.xD[DD].biome
          }
        }

        function AD(DD) {
          let zD = 0;
          const wD = [];
          for (const pD of DD) zD += pD.frequency, wD.push(pD.frequency);
          return {
            dD: DD,
            stoneFrequencies: wD,
            stonesTotalFrequency: zD
          }
        }

        function UD(DD) {
          return AD(function(DD) {
            return [{
              stoneId: DD.Stone.id,
              frequency: 100
            }, {
              stoneId: DD.Andesite.id,
              frequency: 4
            }, {
              stoneId: DD.Diorite.id,
              frequency: 2
            }, {
              stoneId: DD.Granite.id,
              frequency: 1
            }]
          }(DD))
        }

        function fD(DD, zD, wD) {
          const pD = wD.next() * zD;
          let sD = 0,
            KD = 0;
          for (; sD <= pD;) sD += DD[KD], KD++;
          return KD - 1
        }

        function ID(DD) {
          let {
            CI: zD,
            blockMetadata: wD,
            worldGenerator: sD,
            seed: KD,
            biomeOpts: rD
          } = DD;
          const LD = new pD.p(zD, wD, sD, KD, rD),
            cD = new pD.C(zD, wD, sD, KD, rD),
            gD = new pD.H(zD, wD, sD, KD, rD),
            RD = new pD.W(zD, wD, sD, KD, rD),
            AD = new pD.Q(zD, wD, sD, KD, rD),
            fD = new pD.s(zD, wD, sD, KD, rD),
            ID = new pD.S(zD, wD, sD, KD, rD),
            BD = new pD.L(zD, wD, sD, KD, rD),
            GD = new pD.P(zD, wD, sD, KD, rD),
            hD = new pD.bb(zD, wD, sD, KD, rD),
            nD = new pD.y(zD, wD, sD, KD, rD),
            MD = new pD.c(zD, wD, sD, KD, rD),
            OD = new pD.Y(zD, wD, sD, KD, rD),
            JD = new pD.Z(zD, wD, sD, KD, rD),
            ED = new pD.i(zD, wD, sD, KD, rD),
            QD = new pD.k(zD, wD, sD, KD, rD),
            XD = new pD.db(zD, wD, sD, KD, rD),
            VD = new pD.fb(zD, wD, sD, KD, rD),
            PD = new pD.G(zD, wD, sD, KD, rD),
            CD = new pD.x(zD, wD, sD, KD, rD),
            xD = new pD.v(zD, wD, sD, KD, rD),
            TD = UD(wD);
          return [{
            biome: nD,
            frequency: 2,
            altBiome: fD
          }, {
            biome: LD,
            frequency: 23,
            altBiome: null
          }, {
            biome: gD,
            frequency: 8,
            altBiome: null
          }, {
            biome: CD,
            frequency: 2,
            altBiome: AD
          }, {
            biome: cD,
            frequency: 1,
            altBiome: null
          }, {
            biome: RD,
            frequency: 4,
            altBiome: null
          }, {
            biome: nD,
            frequency: 6,
            altBiome: fD
          }, {
            biome: AD,
            frequency: 62,
            altBiome: null
          }, {
            biome: CD,
            frequency: 2,
            altBiome: AD
          }, {
            biome: PD,
            frequency: 4,
            altBiome: null
          }, {
            biome: VD,
            frequency: 2,
            altBiome: null
          }, {
            biome: XD,
            frequency: 4,
            altBiome: null
          }, {
            biome: fD,
            frequency: 16,
            altBiome: null
          }, {
            biome: QD,
            frequency: 4,
            altBiome: null
          }, {
            biome: BD,
            frequency: 6,
            altBiome: null
          }, {
            biome: MD,
            frequency: 6,
            altBiome: null
          }, {
            biome: ID,
            frequency: 24,
            altBiome: null
          }, {
            biome: xD,
            frequency: 2,
            altBiome: fD
          }, {
            biome: QD,
            frequency: 2,
            altBiome: null
          }, {
            biome: nD,
            frequency: 4,
            altBiome: fD
          }, {
            biome: GD,
            frequency: 12,
            altBiome: fD
          }, {
            biome: xD,
            frequency: 2,
            altBiome: fD
          }, {
            biome: hD,
            frequency: 2,
            altBiome: fD
          }, {
            biome: OD,
            frequency: 32,
            altBiome: null
          }, {
            biome: JD,
            frequency: 16,
            altBiome: null
          }, {
            biome: ED,
            frequency: 4,
            altBiome: null
          }].map((DD => ({
            ...DD,
            ...TD
          })))
        }

        function BD(DD, zD) {
          let {
            CI: wD,
            blockMetadata: sD,
            worldGenerator: KD,
            seed: LD,
            biomeOpts: cD
          } = zD;
          if (0 === DD.length) throw new Error("buildCustomBiomes requires at least one custom biome");
          return DD.map((DD => {
            const zD = new pD.l(wD, sD, KD, LD, cD, DD),
              gD = DD.dD.map((DD => ({
                stoneId: (0, rD.w)(DD.blockName, sD),
                frequency: DD.frequency
              })));
            return {
              biome: zD,
              frequency: DD.frequency,
              altBiome: null,
              ...AD(gD)
            }
          }))
        }
      },
      39715: (DD, zD, wD) => {
        wD.d(zD, {
          e: () => BD
        });
        var pD = wD(39625),
          sD = wD(619),
          KD = wD(39635),
          rD = wD(39633),
          LD = wD(4263);
        class cD {
          constructor(DD, zD, wD, pD) {
            this.CI = DD, this.pointsGenerator = zD, this.seed = pD, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * wD / this.CI) + 1
          }
          getChunkCoordFromGlobalCoord(DD, zD) {
            return this.tempChunkCoord[0] = Math.floor(DD / this.CI), this.tempChunkCoord[1] = Math.floor(zD / this.CI), this.tempChunkCoord
          }
          getSurroundingFeatures(DD, zD) {
            const wD = this.getChunkCoordFromGlobalCoord(DD, zD),
              pD = [];
            for (let sD = wD[0] - this.chunkSearchRadius; sD <= wD[0] + this.chunkSearchRadius; sD++)
              for (let DD = wD[1] - this.chunkSearchRadius; DD <= wD[1] + this.chunkSearchRadius; DD++) this.pointsGenerator.isPoint(sD, DD) && pD.push(this.getRandomPointInChunk(sD, DD));
            return pD
          }
          getRandomPointInChunk(DD, zD) {
            const wD = DD * this.CI,
              pD = zD * this.CI,
              sD = new LD.g(`${DD}|${zD}|${this.seed}`);
            return [wD + Math.floor(sD.next() * this.CI), pD + Math.floor(sD.next() * this.CI)]
          }
        }
        var gD = wD(39657),
          RD = wD(39698);
        class AD {
          constructor(DD, zD, wD, pD) {
            this.numCaveTypes = DD, this.caveTypeToBlockIds = zD, this.caveTypePrioritization = wD, this.CI = pD
          }
        }
        class UD extends AD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD), this.data = sD
          }
          getOrGenerate(DD, zD, wD, pD) {
            return this.data.getOrGenerate(DD, zD, wD, pD)
          }
          viewJustInnerChunk() {
            return new fD(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.CI, this.data.viewJustInnerChunk())
          }
        }
        class fD extends AD {
          constructor(DD, zD, wD, pD, sD) {
            super(DD, zD, wD, pD), this.data = sD
          }
          getOrGenerate(DD, zD, wD, pD) {
            return this.data.get(DD, zD, wD, pD)
          }
        }

        function ID(DD) {
          const zD = DD.high - DD.low;
          return {
            low: DD.low,
            high: DD.high,
            midpoint: (DD.low + DD.high) / 2,
            width: zD,
            halfWidth: zD / 2
          }
        }
        class BD {
          constructor(DD, zD, wD, pD) {
            this.CI = zD, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new MD(DD, zD, wD, pD)
          }
          static isInCave(DD, zD, wD, pD) {
            for (let sD = 0; sD < pD.numCaveTypes; sD++) {
              const rD = pD.getOrGenerate(DD, wD, sD, KD.d.FloorY),
                LD = pD.getOrGenerate(DD, wD, sD, KD.d.CeilingY);
              if (rD <= zD && zD <= LD) return !0
            }
            return !1
          }
          static addCavesToChunk(DD, zD, wD, pD, sD, cD) {
            const gD = new LD.g(`caveBlocks${zD}|${wD}|${pD}`);
            for (let LD = zD; LD < zD + cD.CI; LD++)
              for (let RD = pD; RD < pD + cD.CI; RD++) {
                const AD = sD.get(LD, RD, KD.h.GroundHeight);
                for (const sD of cD.caveTypePrioritization) {
                  const UD = cD.getOrGenerate(LD, RD, sD, KD.d.FloorY);
                  if (UD === rD.m) continue;
                  const fD = cD.getOrGenerate(LD, RD, sD, KD.d.CeilingY),
                    ID = Math.min(fD + 1, wD + cD.CI, AD + 1),
                    BD = cD.caveTypeToBlockIds[sD];
                  for (let sD = Math.max(UD, wD); sD < ID; sD++) {
                    const KD = "number" === typeof BD ? BD : BD.sample(gD);
                    DD.set(LD - zD, sD - wD, RD - pD, KD)
                  }
                }
              }
          }
          getCaveHeightmapVals(DD, zD, wD) {
            const sD = [DD, zD],
              rD = new GD(this.caveMetadataForChunkCache, wD, this.CI),
              LD = this.caveMetadataForChunkCache.numCaveTypes,
              cD = this.caveMetadataForChunkCache.caveTypeToBlockId,
              gD = this.caveMetadataForChunkCache.caveTypePrioritization,
              RD = pD.e.create(this.CI, sD, LD, KD.d.NumFields, rD);
            return new UD(LD, cD, gD, this.CI, RD)
          }
        }
        class GD {
          constructor(DD, zD, wD) {
            if (this.caveMetadataForChunkCache = DD, this.heightmapVals = zD, this.caveGeneratorsPerChunk = [], wD !== sD.r) throw new Error(`Cave generation is not supported for chunk sizes other than ${sD.r}`)
          }
          generateAndSet(DD, zD, wD) {
            const pD = (0, sD.L)(DD),
              KD = (0, sD.L)(zD);
            this.getOrCreateCaveGeneratorForChunk(pD, KD).generateAndSet(DD, zD, wD)
          }
          getOrCreateCaveGeneratorForChunk(DD, zD) {
            return void 0 === this.caveGeneratorsPerChunk[DD] && (this.caveGeneratorsPerChunk[DD] = []), void 0 === this.caveGeneratorsPerChunk[DD][zD] && (this.caveGeneratorsPerChunk[DD][zD] = this.caveMetadataForChunkCache.getOrCreateCaveGeneratorForChunk(DD, zD, this.heightmapVals)), this.caveGeneratorsPerChunk[DD][zD]
          }
        }
        class hD {
          constructor(DD, zD, wD, pD, sD, KD) {
            this.heightmapVals = DD, this.spaghettiCaveMetadataForChunk = zD, this.pitCaveMetadataForChunk = wD, this.ravineCaveMetadataForChunk = pD, this.sphereCaveMetadataForChunk = sD, this.numCaveTypes = KD
          }
          generateAndSet(DD, zD, wD) {
            this.setDefaultCaves(DD, zD, wD), this.generateAndSetSpaghettiCaves(DD, zD, wD), this.generateAndSetPitCaves(DD, zD, wD), this.generateAndSetRavineCaves(DD, zD, wD), this.generateAndSetSphereCaves(DD, zD, wD), this.removeCavesNearWater(DD, zD, wD)
          }
          setDefaultCaves(DD, zD, wD) {
            for (let pD = 0; pD < this.numCaveTypes; pD++) wD.set(DD, zD, pD, KD.d.FloorY, rD.m), wD.set(DD, zD, pD, KD.d.CeilingY, rD.m)
          }
          generateAndSetSpaghettiCaves(DD, zD, wD) {
            for (const pD of this.spaghettiCaveMetadataForChunk) {
              const sD = pD.caveEdgeNoiseGenerator.getOctaves(DD, zD);
              if (sD >= hD.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
              const LD = pD.caveHeightNoiseGenerator.getOctaves(DD, zD);
              if (LD === rD.b) continue;
              if (!(pD.caveHeightThreshold.low < LD && LD < pD.caveHeightThreshold.high)) continue;
              let cD;
              {
                let DD = 1 - Math.abs(LD - pD.caveHeightThreshold.midpoint) / pD.caveHeightThreshold.halfWidth;
                DD = Math.min(pD.caveHeightPercentageUpperBound, DD), cD = pD.caveHeightMax * DD
              }
              sD > 0 && (cD *= (hD.SPAGHETTI_CAVE_EDGE_CUTOFF - sD) / hD.SPAGHETTI_CAVE_EDGE_CUTOFF);
              const gD = pD.caveXZPerturbNoiseGenerator.getOctaves(DD, zD),
                RD = pD.caveXZPerturbNoiseGenerator.getOctaves(DD + 980, zD - 370),
                AD = pD.caveYPerturbNoiseGenerator.getOctaves(DD + gD, zD + RD),
                UD = Math.floor(pD.caveCentreY + AD - cD);
              let fD = Math.floor(pD.caveCentreY + AD + cD);
              fD + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) && fD++, wD.set(DD, zD, pD.caveType, KD.d.FloorY, UD), wD.set(DD, zD, pD.caveType, KD.d.CeilingY, fD)
            }
          }
          generateAndSetPitCaves(DD, zD, wD) {
            for (const pD of this.pitCaveMetadataForChunk) {
              const sD = pD.pitMinX,
                rD = pD.pitMaxX,
                LD = pD.pitMinZ,
                cD = pD.pitMaxZ;
              if (DD < pD.reachMinX || DD > pD.reachMaxX || zD < pD.reachMinZ || zD > pD.reachMaxZ) continue;
              const gD = DD + pD.pitXZPerturbNoiseGenerator.getOctaves(DD, zD),
                RD = zD + pD.pitXZPerturbNoiseGenerator.getOctaves(DD + 430, zD - 330);
              if (gD < sD || gD > rD || RD < LD || RD > cD) continue;
              const AD = null === pD.pitHeightPerturbNoiseGenerator,
                UD = pD.pitFloorYPerturbNoiseGenerator.getOctaves(DD, zD),
                fD = AD ? 0 : pD.pitHeightPerturbNoiseGenerator.getOctaves(DD, zD);
              let ID = pD.pitFloorY + UD,
                BD = pD.pitFloorY + pD.pitHeight + fD;
              const GD = 4,
                hD = Math.min(gD - sD, rD - gD),
                nD = Math.min(RD - LD, cD - RD),
                MD = Math.min(hD, nD);
              if (MD < GD) {
                const wD = 1 - MD / GD;
                ID += (5 + pD.pitMidpointYPerturbNoiseGenerator.getOctaves(DD, zD)) * wD, AD || (BD -= (BD - ID) * wD)
              }
              ID = Math.floor(ID), BD = Math.floor(BD), (AD || BD + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight)) && BD++;
              let OD = pD.caveType;
              null !== pD.wallType && (hD <= .9 || nD <= .9) ? OD = pD.wallType : pD.pitCeilingThickness > 0 && (BD -= pD.pitCeilingThickness, wD.set(DD, zD, pD.ceilingType, KD.d.FloorY, BD), wD.set(DD, zD, pD.ceilingType, KD.d.CeilingY, BD + pD.pitCeilingThickness)), wD.set(DD, zD, OD, KD.d.FloorY, ID), wD.set(DD, zD, OD, KD.d.CeilingY, BD)
            }
          }
          generateAndSetRavineCaves(DD, zD, wD) {
            for (const sD of this.ravineCaveMetadataForChunk) {
              const rD = sD.ravineCentre,
                LD = sD.ravineWidth,
                cD = sD.ravineLength,
                gD = DD - rD[0],
                RD = zD - rD[1];
              if (gD * gD + RD * RD > sD.reachDistanceSquared) continue;
              if (Math.abs(gD * sD.axisNormalX + RD * sD.axisNormalZ) > sD.reachFromAxis) continue;
              const AD = DD + sD.ravineXZPerturbNoiseGenerator.getOctaves(DD, zD),
                UD = zD + sD.ravineXZPerturbNoiseGenerator.getOctaves(DD + 430, zD - 330),
                fD = (0, pD.J)(rD, AD, UD);
              if (fD > cD) continue;
              const ID = [AD, UD],
                BD = rD,
                GD = [rD[0] + sD.ravineDirection[0], rD[1] + sD.ravineDirection[1]],
                hD = (0, pD.w)(ID, BD, GD),
                nD = LD * (1 - fD / cD);
              if (hD > nD) continue;
              const MD = sD.ravineYPerturbNoiseGenerator.getOctaves(DD, zD);
              let OD = sD.ravineFloorY + MD,
                JD = sD.ravineFloorY + sD.ravineHeight + MD;
              const ED = 3,
                QD = nD - hD;
              if (QD < ED) {
                const DD = 1 - QD / ED;
                OD += sD.ravineHeight * DD
              }
              OD = Math.floor(OD), JD = Math.floor(JD), JD + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) && JD++, wD.set(DD, zD, sD.caveType, KD.d.FloorY, OD), wD.set(DD, zD, sD.caveType, KD.d.CeilingY, JD)
            }
          }
          generateAndSetSphereCaves(DD, zD, wD) {
            for (const pD of this.sphereCaveMetadataForChunk) {
              const sD = DD - pD.sphereCentreX,
                rD = zD - pD.sphereCentreZ;
              if (sD * sD + rD * rD > pD.reachDistanceSquared) continue;
              const LD = DD + pD.sphereXZPerturbNoiseGenerator.getOctaves(DD, zD),
                cD = zD + pD.sphereXZPerturbNoiseGenerator.getOctaves(DD + 430, zD - 330),
                gD = pD.sphereCentreX - LD,
                RD = pD.sphereCentreZ - cD,
                AD = gD * gD + RD * RD;
              if (AD > pD.sphereRadiusSquared) continue;
              const UD = Math.sqrt(pD.sphereRadiusSquared - AD),
                fD = Math.floor(pD.sphereCentreY - UD);
              let ID = Math.floor(pD.sphereCentreY + UD);
              ID + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) && ID++, wD.set(DD, zD, pD.caveType, KD.d.FloorY, fD), wD.set(DD, zD, pD.caveType, KD.d.CeilingY, ID)
            }
          }
          removeCavesNearWater(DD, zD, wD) {
            const pD = this.heightmapVals.getOrGenerate(DD, zD, KD.h.CavesAllowedBelowY);
            if (pD !== rD.k)
              for (let sD = 0; sD < this.numCaveTypes; sD++) {
                if (wD.get(DD, zD, sD, KD.d.CeilingY) <= pD) continue;
                wD.get(DD, zD, sD, KD.d.FloorY) <= pD ? wD.set(DD, zD, sD, KD.d.CeilingY, pD) : (wD.set(DD, zD, sD, KD.d.FloorY, rD.m), wD.set(DD, zD, sD, KD.d.CeilingY, rD.m))
              }
          }
        }
        hD.SPAGHETTI_CAVE_EDGE_CUTOFF = .08;
        const nD = new RD.e("cave chunk metadata", 100, 6e4);
        class MD {
          constructor(DD, zD, wD, KD) {
            this.seed = DD, this.spaghettiCaveMetadata = void 0, this.pitCaveMetadata = void 0, this.ravineCaveMetadata = void 0, this.sphereCaveMetadata = void 0, this.numCaveTypes = void 0, this.caveTypeToBlockId = void 0, this.caveTypePrioritization = void 0, this.perChunkCache = nD.partition();
            let rD = 0;
            const RD = [],
              AD = [];
            {
              const {
                spaghettiCaveMetadata: zD,
                nextCaveType: wD
              } = function(DD, zD) {
                const wD = {
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
                  sD = [...[{
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
                  }].map((DD => ({
                    ...wD,
                    ...DD
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
                  KD = [];
                for (let rD = 0; rD < sD.length; rD++) {
                  const wD = sD[rD];
                  let LD = 0;
                  for (const DD of wD.caveYPerturbNoiseParams) LD += DD.amplitude;
                  for (let sD = 0; sD < wD.count; sD++) KD.push({
                    caveType: zD++,
                    caveEdgeNoiseGenerator: new pD.j(wD.caveEdgeNoiseParams, `${DD}CaveCutoff${rD}${sD}`),
                    caveHeightNoiseGenerator: new pD.m(wD.caveHeightNoiseParams, wD.caveHeightNoiseThresholdParams, `${DD}Cave${rD}${sD}`),
                    caveHeightThreshold: ID(wD.caveHeightNoiseThresholdParams),
                    caveHeightMax: wD.caveHeightMax,
                    caveHeightPercentageUpperBound: wD.caveHeightPercentageUpperBound,
                    caveXZPerturbNoiseGenerator: new pD.j(wD.caveXZPerturbNoiseParams, `${DD}CaveHeightPerturb${rD}${sD}`),
                    caveYPerturbNoiseGenerator: new pD.j(wD.caveYPerturbNoiseParams, `${DD}CaveHeightNoise${rD}${sD}`),
                    caveCentreY: wD.caveCentreYMin + LD
                  })
                }
                return {
                  spaghettiCaveMetadata: KD,
                  nextCaveType: zD
                }
              }(DD, rD);
              this.spaghettiCaveMetadata = zD, rD = wD
            } {
              const {
                pitCaveMetadata: UD,
                nextCaveType: fD
              } = function(DD, zD, wD, KD, rD, RD, AD) {
                const UD = [{
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
                    fillBlockId: (0, sD.w)(KD, wD),
                    wallBlockIds: new LD.e([{
                      value: wD.Stone.id,
                      weight: 3
                    }, {
                      value: wD["Compressed Messy Stone"].id,
                      weight: 5
                    }, {
                      value: wD.Magma.id,
                      weight: 1
                    }]),
                    ceilingParams: {
                      blockIds: 0,
                      minThickness: 2,
                      maxThickness: 5
                    },
                    numChunksBetweenPits: 2
                  }],
                  fD = [];
                for (const sD of UD) {
                  let wD = 0;
                  for (const DD of sD.pitXZPerturbNoiseParams) wD += DD.amplitude;
                  for (let KD = 0; KD < sD.count; KD++) {
                    const KD = fD.length,
                      UD = new pD.j(sD.pitXZPerturbNoiseParams, `${DD}DistPitPerturb${KD}`),
                      ID = `${DD}PitGen${KD}`,
                      BD = new gD.c("cavePit", sD.numChunksBetweenPits, !0, !1, ID, 100, zD),
                      GD = new cD(zD, BD, sD.pitMaxWidth + 2 * wD, ID);
                    console.assert(GD.chunkSearchRadius <= sD.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${GD.chunkSearchRadius} ${sD.numChunksBetweenPits/2}`);
                    const hD = new LD.k(sD.pitMinWidth, sD.pitMaxWidth),
                      nD = new LD.k(sD.pitMinFloorY, sD.pitMaxFloorY),
                      MD = new LD.k(sD.pitMinHeight, sD.pitMaxHeight),
                      OD = new pD.j(sD.pitFloorYPerturbNoiseParams, `${DD}yPitPerturb${KD}`);
                    let JD = null;
                    null !== sD.pitHeightPerturbNoiseParams && (JD = new pD.j(sD.pitHeightPerturbNoiseParams, `${DD}heightPitPerturb${KD}`));
                    const ED = new pD.j(sD.pitMidpointNoiseParams, `${DD}edgesPitPerturb${KD}`),
                      QD = rD++;
                    RD[QD] = sD.fillBlockId;
                    let XD = null;
                    null !== sD.wallBlockIds && (XD = rD++, RD[XD] = sD.wallBlockIds);
                    let VD = null,
                      PD = null;
                    null !== sD.ceilingParams && (VD = rD++, PD = new LD.k(sD.ceilingParams.minThickness, sD.ceilingParams.maxThickness), RD[VD] = sD.ceilingParams.blockIds), void 0 !== sD.priority && (AD[QD] = sD.priority, null !== XD && (AD[XD] = sD.priority), null !== VD && (AD[VD] = sD.priority)), fD.push({
                      caveType: QD,
                      wallType: XD,
                      ceilingType: VD,
                      pitCeilingThicknessDistribution: PD,
                      pitPointGenerator: GD,
                      pitXZPerturbNoiseGenerator: UD,
                      pitWidthDistribution: hD,
                      pitLengthDistribution: hD,
                      pitFloorYDistribution: nD,
                      pitHeightDistribution: MD,
                      pitFloorYPerturbNoiseGenerator: OD,
                      pitHeightPerturbNoiseGenerator: JD,
                      pitMidpointYPerturbNoiseGenerator: ED
                    })
                  }
                }
                return {
                  pitCaveMetadata: fD,
                  nextCaveType: rD
                }
              }(DD, zD, wD, KD, rD, RD, AD);
              this.pitCaveMetadata = UD, rD = fD
            } {
              const {
                ravineCaveMetadata: wD,
                nextCaveType: sD
              } = function(DD, zD, wD) {
                const sD = {
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
                  KD = [];
                for (let rD = 0; rD < sD.count; rD++) {
                  const RD = sD,
                    AD = new pD.j(RD.ravineXZPerturbNoiseParams, `${DD}DistRavPerturb${rD}`);
                  let UD = 0;
                  for (const DD of RD.ravineXZPerturbNoiseParams) UD += DD.amplitude;
                  const fD = new pD.j(RD.ravineYPerturbNoiseParams, `${DD}yRavinePerturb${rD}`),
                    ID = `${DD}RavineGen${rD}`,
                    BD = new gD.c("caveRav", RD.numChunksBetweenRavines, !0, !1, ID, 100, zD),
                    GD = new cD(zD, BD, Math.max(RD.ravineMaxLength, RD.ravineMaxWidth) + 2 * UD, ID);
                  console.assert(GD.chunkSearchRadius <= RD.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${GD.chunkSearchRadius} ${RD.numChunksBetweenRavines/2}`);
                  const hD = new LD.k(RD.ravineMinWidth, RD.ravineMaxWidth),
                    nD = new LD.k(RD.ravineMinLength, RD.ravineMaxLength),
                    MD = new LD.k(RD.ravineMinFloorY, RD.ravineMaxFloorY, !0),
                    OD = new LD.k(RD.ravineMinHeight, RD.ravineMaxHeight),
                    JD = new LD.l(-1, 1);
                  KD.push({
                    caveType: wD++,
                    ravinePointGenerator: GD,
                    ravineXZPerturbNoiseGenerator: AD,
                    ravineYPerturbNoiseGenerator: fD,
                    ravineWidthDistribution: hD,
                    ravineLengthDistribution: nD,
                    ravineFloorYDistribution: MD,
                    ravineHeightDistribution: OD,
                    ravineXZDirectionDistribution: JD
                  })
                }
                return {
                  ravineCaveMetadata: KD,
                  nextCaveType: wD
                }
              }(DD, zD, rD);
              this.ravineCaveMetadata = wD, rD = sD
            } {
              const {
                sphereCaveMetadata: wD,
                nextCaveType: sD
              } = function(DD, zD, wD) {
                const sD = {
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
                  KD = [];
                for (let rD = 0; rD < sD.count; rD++) {
                  const RD = sD,
                    AD = new pD.j(RD.sphereXZPerturbNoiseParams, `${DD}DistSpherePerturb${rD}`);
                  let UD = 0;
                  for (const DD of RD.sphereXZPerturbNoiseParams) UD += DD.amplitude;
                  const fD = `${DD}SphereGen${rD}`,
                    ID = new gD.c("caveSph", RD.numChunksBetweenSpheres, !0, !1, fD, 100, zD),
                    BD = new cD(zD, ID, 2 * (RD.sphereMaxRadius + UD), fD);
                  console.assert(BD.chunkSearchRadius <= RD.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${BD.chunkSearchRadius} ${RD.numChunksBetweenSpheres/2}`);
                  const GD = new LD.k(RD.sphereMinRadius, RD.sphereMaxRadius, !0),
                    hD = new LD.k(RD.sphereMinCentreY, RD.sphereMaxCentreY);
                  KD.push({
                    caveType: wD,
                    spherePointGenerator: BD,
                    sphereXZPerturbNoiseGenerator: AD,
                    sphereRadiusDistribution: GD,
                    sphereCentreYDistribution: hD
                  })
                }
                return {
                  sphereCaveMetadata: KD,
                  nextCaveType: wD
                }
              }(DD, zD, rD);
              this.sphereCaveMetadata = wD, rD = sD
            }
            this.numCaveTypes = rD;
            for (let pD = 0; pD < this.numCaveTypes; pD++) void 0 === RD[pD] && (RD[pD] = 0), void 0 === AD[pD] && (AD[pD] = 0);
            this.caveTypeToBlockId = RD, this.caveTypePrioritization = AD.map(((DD, zD) => ({
              caveType: zD,
              priority: DD
            }))).sort(((DD, zD) => DD.priority - zD.priority)).map((DD => {
              let {
                caveType: zD
              } = DD;
              return zD
            }))
          }
          getOrCreateCaveGeneratorForChunk(DD, zD, wD) {
            const pD = this.getOrBuildCaveMetadataForChunk(DD, zD);
            return new hD(wD, pD.spaghettiCaveMetadataForChunk, pD.pitCaveMetadataForChunk, pD.ravineCaveMetadataForChunk, pD.sphereCaveMetadataForChunk, this.numCaveTypes)
          }
          getOrBuildCaveMetadataForChunk(DD, zD) {
            const wD = this.perChunkCache.get(DD, zD);
            if (!(0, sD.B)(wD)) return wD;
            const pD = [(0, sD.q)(DD), (0, sD.q)(zD)],
              KD = {
                spaghettiCaveMetadataForChunk: this.spaghettiCaveMetadata,
                pitCaveMetadataForChunk: this.buildPitCaveMetadataForChunk(pD),
                ravineCaveMetadataForChunk: this.buildRavineCaveMetadataForChunk(pD),
                sphereCaveMetadataForChunk: this.buildSphereCaveMetadataForChunk(pD)
              };
            return this.perChunkCache.set(DD, zD, KD), KD
          }
          buildPitCaveMetadataForChunk(DD) {
            const zD = [];
            for (let sD = 0; sD < this.pitCaveMetadata.length; sD++) {
              const KD = this.pitCaveMetadata[sD],
                rD = KD.pitPointGenerator.getSurroundingFeatures(DD[0], DD[1]);
              for (const DD of rD) {
                var wD, pD;
                const rD = DD[0],
                  cD = DD[1],
                  gD = new LD.g(`pit${rD}|${cD}|${sD}${this.seed}`),
                  RD = KD.pitWidthDistribution.sample(gD) >> 1,
                  AD = KD.pitLengthDistribution.sample(gD) >> 1,
                  UD = rD - RD,
                  fD = rD + RD,
                  ID = cD - AD,
                  BD = cD + AD,
                  GD = KD.pitXZPerturbNoiseGenerator.maxMagnitude(),
                  hD = KD.pitFloorYDistribution.sample(gD),
                  nD = KD.pitHeightDistribution.sample(gD),
                  MD = null !== (wD = null === (pD = KD.pitCeilingThicknessDistribution) || void 0 === pD ? void 0 : pD.sample(gD)) && void 0 !== wD ? wD : 0;
                zD.push({
                  caveType: KD.caveType,
                  wallType: KD.wallType,
                  ceilingType: KD.ceilingType,
                  pitCeilingThickness: MD,
                  pitMinX: UD,
                  pitMaxX: fD,
                  pitMinZ: ID,
                  pitMaxZ: BD,
                  reachMinX: UD - GD,
                  reachMaxX: fD + GD,
                  reachMinZ: ID - GD,
                  reachMaxZ: BD + GD,
                  pitFloorY: hD,
                  pitHeight: nD,
                  pitXZPerturbNoiseGenerator: KD.pitXZPerturbNoiseGenerator,
                  pitFloorYPerturbNoiseGenerator: KD.pitFloorYPerturbNoiseGenerator,
                  pitHeightPerturbNoiseGenerator: KD.pitHeightPerturbNoiseGenerator,
                  pitMidpointYPerturbNoiseGenerator: KD.pitMidpointYPerturbNoiseGenerator
                })
              }
            }
            return zD
          }
          buildRavineCaveMetadataForChunk(DD) {
            const zD = [];
            for (let wD = 0; wD < this.ravineCaveMetadata.length; wD++) {
              const sD = this.ravineCaveMetadata[wD],
                KD = sD.ravinePointGenerator.getSurroundingFeatures(DD[0], DD[1]);
              for (const DD of KD) {
                const KD = DD[0],
                  rD = DD[1],
                  cD = new LD.g(`rav${KD}|${rD}|${wD}${this.seed}`),
                  gD = sD.ravineWidthDistribution.sample(cD),
                  RD = sD.ravineLengthDistribution.sample(cD),
                  AD = sD.ravineFloorYDistribution.sample(cD),
                  UD = sD.ravineHeightDistribution.sample(cD),
                  fD = [sD.ravineXZDirectionDistribution.sample(cD), sD.ravineXZDirectionDistribution.sample(cD)];
                (0, pD.G)(fD);
                const ID = Math.SQRT2 * sD.ravineXZPerturbNoiseGenerator.maxMagnitude(),
                  BD = RD + ID,
                  GD = Math.hypot(fD[0], fD[1]);
                zD.push({
                  caveType: sD.caveType,
                  ravineCentre: DD,
                  ravineWidth: gD,
                  ravineLength: RD,
                  ravineFloorY: AD,
                  ravineHeight: UD,
                  ravineDirection: fD,
                  reachDistanceSquared: BD * BD,
                  axisNormalX: -fD[1] / GD,
                  axisNormalZ: fD[0] / GD,
                  reachFromAxis: Math.max(gD, 0) + ID,
                  ravineXZPerturbNoiseGenerator: sD.ravineXZPerturbNoiseGenerator,
                  ravineYPerturbNoiseGenerator: sD.ravineYPerturbNoiseGenerator
                })
              }
            }
            return zD
          }
          buildSphereCaveMetadataForChunk(DD) {
            const zD = [];
            for (let wD = 0; wD < this.sphereCaveMetadata.length; wD++) {
              const pD = this.sphereCaveMetadata[wD],
                sD = pD.spherePointGenerator.getSurroundingFeatures(DD[0], DD[1]);
              for (const DD of sD) {
                const sD = DD[0],
                  KD = DD[1],
                  rD = new LD.g(`sph${sD}|${KD}|${wD}${this.seed}`),
                  cD = pD.sphereRadiusDistribution.sample(rD),
                  gD = cD * cD,
                  RD = pD.sphereCentreYDistribution.sample(rD),
                  AD = cD + Math.SQRT2 * pD.sphereXZPerturbNoiseGenerator.maxMagnitude();
                zD.push({
                  caveType: pD.caveType,
                  sphereRadiusSquared: gD,
                  sphereCentreX: sD,
                  sphereCentreY: RD,
                  sphereCentreZ: KD,
                  reachDistanceSquared: AD * AD,
                  sphereXZPerturbNoiseGenerator: pD.sphereXZPerturbNoiseGenerator
                })
              }
            }
            return zD
          }
        }
      },
      39641: (DD, zD, wD) => {
        wD.d(zD, {
          b: () => GD
        });
        var pD = wD(39635),
          sD = wD(39625),
          KD = wD(1661),
          rD = wD.n(KD),
          LD = wD(619),
          cD = wD(2839),
          gD = wD.n(cD),
          RD = wD(37713),
          AD = wD(39647),
          UD = wD(39104),
          fD = wD(39650);

        function ID(DD, zD, wD) {
          const pD = new UD.d;
          for (const sD of wD) {
            const DD = pD.get(sD.chunkX, sD.chunkY, sD.chunkZ);
            if (!(0, LD.B)(DD)) throw new Error(`Duplicate chunk at ${sD.chunkX}, ${sD.chunkY}, ${sD.chunkZ}`);
            pD.set(sD.chunkX, sD.chunkY, sD.chunkZ, sD.rle)
          }
          return new AD.e(DD, {
            x: 0,
            y: 0,
            z: 0
          }, zD, pD)
        }
        const BD = {
          platformStone: ID("platformStone", {
            x: 41,
            y: 14,
            z: 41
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, fD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, fD.b)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB1gjdBgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAApYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBHRoABQQBgQEfAAEf+gYABQIBgQEaAAUCAYEBGgAFAgGIARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAHVCAEfHgAB1gjbBgAFAgGBARoABQIBiAEaAAUCAYEBGgAFBAGBAR4AAZYBAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgKBARkABQICgQEZAAUCAYEBAR0ZAAUEAYEBAYgBHQADgQEdAAMfHQADHB0AAxwdAAEcAh0dAAId2gUABQICgQEZAAUCAoEBGQAFAgKBARkABB8BAgKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHQEcHgACHboFAAUcBIEBFwAFHAOBAQEfFwAFHAKBAQEfGAAFHAKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHAIdHQACHboFAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAGHAEiGQAGHJoHAAkcFwAHHAEiGAAGHAEiGQAGHJoHAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAHHBkABhyaBwAJHBcACBwYAAYcASIZAAYcmgcACRwXAAgcGAAGHAEiGQADHAIiARyaBwAFHASBARcABRwDgQEBHxcABRwCgQEBHxgAASIBHAIiARwCgQEdAAKBAQGIAR0AAx8dAAMcHQABHQIcHQACHQEcHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAQfAQICgQEdAAOBAR0AAx8dAAMcHQABHQIcHgABHAEdHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAUEAoEBHQADgQEdAAMfHQADHB0AAh0BHB4AAh35BQAFAgEdGgAFAgGIARoABQIBgQEaAAUEAYEBHgAB1QgBHx4AAdYI2wYABQIBiAEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBARoAApYBAwABHfoGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBGgAB1QgBlgEDAAEfGgAB1gjfBgA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, fD.b)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwBIgIcAR8GBAMAAR0BlgECAAGWAQYAAZYB9AYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYgBCwQBHwkcAR8GBA0AAZYBAdUICwABlgETAAHWCNQGAAKBAQsCCRwHAgMAAoEBCwIJHAcCAwACgQELAgkcBwIDAAEdAYgBCgQBAgEcASIHHAECBgQGAAKWAQMAAZYBAQAB1QgDgQEHAAOBAQHVCAGWARAAAdYIAx8HAAMfAdYIEgADHAcAAxwTAAMdBwADHBUAAR0HAAMcHQABHAIdHQACHaoFAA2BAQccCIEBBAAHgQEBiAEFgQEHHAiBAQQABoEBAYgBAR0FgQEHHAiBAQQAAR0BiAELgQECIgUcCIEBBwABHQYfA4EBBwADgQEFHw4AAx8HAAMfEwADHAcAAxwTAAEdAhwHAAMcEwABHQEcAR0HAAIcAR0UAAIdBwABHQEcAR0dAAIdtAUAA4EBBxwDgQETAAOBAQccAoEBAYgBEwADgQECIgIcAiIBHAKBAQEdEwADgQEHAAKBAQGIARMAAYgBAoEBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAIdARwHAAMdFAACHQcAAR3XBQABgQEHHAGBARcAAYEBBBwBIgIcAYEBFwABHwcAAR+3BwABgQEHHAGBARcAAR8HAAEfx78BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, fD.b)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI3QYABYEBGwAFgQEbAAOBAQGIAQEdGwAEgQEBiAEbAAUf+9YBAA==")
          }]),
          smp2SpawnHub: ID("smp2SpawnHub", {
            x: 64,
            y: 24,
            z: 64
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, fD.b)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, fD.b)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, fD.b)("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AgEAGwQBHwMCDgABlwGxBwABBB8CAQAXBAgCCQABlgEOAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAEEHwIBABcECAICAAGWAQUAAZYBAwABlwEKAAGWAQWBAQMcGAAFgQEDHBgAAR8DgQEBHxwAAxwdAAMcHQACHAEdHQACHB4AAhwBHR0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARsAAYEBARwBgQEBHASBARgAAYEBBBwBgQECHBgAAYgBA4EBARwDgQEbAAGBAQQcGwAFgQGAAgACBB4CAgAWBAgCGAAFgQEDHBgABYEBAxwYAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGwAIgQEYAAiBARgACIEBGwAFgQEbAAWBAYACAAIEHgICABYECAIWAAGWAQEABYEBAxwYAAGIAQSBAQMcGAABHwOBAQEfHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHgACHB0AAR0CHB0AAxwdAAMcHQADHBwAAR8DHAEfGwABiAEBHAGBAQEcAYEBGwABgQEBHAGBAQEcBIEBGAABgQEEHAGBAQIcGAAEgQEBHAOBARsAAYEBBBwbAAGIAQSBAYACAAMEDAIGBAsCAwAMBAYAAwQIAhgAAYgBA4EBAYgBAxwYAAEdAYgBA4EBGwAFH5sDAAUfGwABHQEAAYEBAQABgQEbAAGIAQEAAYEBAQAEgQEYAAGBAQQAAYEBGgAEgQEBAAKBAQGIARsAAYgBHwABHQGIAQOBAYACAAcEBQIKBAoCBwAFBAoACgTABwAgBOAHAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, fD.b)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEBgIMHwEdAwIBHQIfBQIBBAEAAh0CHBUAAYgBA4EBAR0bAASBAQGIARsABR+bAwAFHxsABYEBGwAFgQEcAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAASBAQGIAYICAB8CAQQGAgEfDAQCAgQEBQIBBBoABIEBAYgBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxwAARwBgQEBHB0AARwBgQEBHB0AARwBgQEBHBwABYEBGwAEgQEBiAEbAAOBAQGIAQEdggIAHwIBBAYCAR8MBAICBAQFAgEEGgAFgQEbAAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHBwAAR8DHAEfGwAFgQEbAAWBARwAARwBgQEBHBwABYEBwgIAHgICBAMCBB8MBAICBAQEAgGBARsAAYgBBIEBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAEdAhweAAIcHQABHQIcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8cAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAAGIAQSBAcICAB4CAgQDAgEfDwQCAgQEBAIBgQENAAGWAQ0AAR0BiAEDgQEbAAGIAQOBAQGIARsABR+bAwAFHxsABIEBAR0bAAWBARsAAYgBBIEBGwABHQGIAQOBAcICAB4CAgQDAgEfDwQCAgkEHQABlgGkBwAeAgIEAwIBHw8EAgIJBMIHAB4CAgQDAgEfDwQCAgkECwABmwG2BwAeAgIEAwIBHw8EAgIJBAwAAZsBBAABlgGwBwAeAgIEAwIBHw8EAgIJBAkAAZYBuAcAHwIBBAMCAR8PBAICCgQHAAGWARYAAZYBogcAHwIBBAMCAR8PBAICCgQdAAGWAaMHAB8CAQQDAgEfDwQCAgoEwQcAHwIBBAMCAR0PBAICCgQPAAIwsAcAHwIBBAMCAR8PBAICCgQPAAIwsAcAHwIBBAMCAR0OBAMCCgQbAAGdAaUHAB4CAgQVAgkEGwABnQEBAAGdAaQHAB4CAgQUAgoEwgcAHgICBAQCCAQGAgwEwgcAHQIDBAMCAR0ZBA4AARkGEwEZGAABGQYAARkYAAEZBgABGRcAAdUQARkGAAEZAdMQFgAB4RACNAQAAjQB3xAYAAY0jgYAHQIDBAMCAR8IBAYCCwQOAAETBgABEwGWAVYAAZ0RCAABmxEWAAGpEQI3BAACNwGnERgABjeOBgAcAgQEAwIBHwgEBgIKBA8AARMGAAETVwAB1RAIAAHTEBYAAeEQAjQEAAI0Ad8QGAAGNI4GABsCBQQIAgQEBgIJBAUAAxwBHQGIAQOBAQMAARMGAAETEAABiAEDgQEBiAEbAAUfIgABnREIAAGbERYAAakRAjcEAAI3AacRGAAGN7ECAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAGwIFBAgCEwQFAAMcBYEBAwABGQYTARkNAAMcBYEBAwABGQYAARkQAAEfA4EBAR8DAAEZBgABGREAAxwDAAHVEAEZBgABGQHTEBAAAxwDAAHhEAI0BAACNAHfEBAAAxwFAAY0EgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8bAAGBAQEcAYEBARwBgQEYAASBAQEcAYEBARwBgQEYAAIcAYEBBBwBgQEYAAOBAQEcBIEBGAAEHAGBARsABIEBAYgBmwIAGwIFBAgCEwQFAAMcBYEBBAABlgELAAGWAQcAAxwFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGAAIgQEYAAiBARgACIEBGAAFgQEbAAWBAZsCABoCBgQIAhIEBgADHASBAQGIAREAAZYBBgADHAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAhwBHR0AAhweAAIcAR0dAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARgABIEBARwBgQEBHAGBARgAAhwBgQEEHAGBARgAA4EBARwDgQEBiAEYAAQcAYEBGwAFgQGbAgAYAggECAIQBAgAAxwBiAECgQEBiAEBHRsABIEBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAYEBGAAEgQEBAAGBAQEAAYEBGgABgQEEAAGIARgAAR0BiAEBgQEBAAKBAQGIAQEdHAABgQEbAAWBAZsCAAoCBAQGAhYEBAAGBAgAAZwBCAABlgG6BwAgBBsAAZwBxAcA")
          }])
        };
        class GD {
          constructor(DD, zD) {
            this.CI = zD, this.chunkToFixedPointPrefabs = void 0;
            const wD = {},
              pD = zD + nD;
            for (const {
                pD: sD,
                x: KD,
                y: rD,
                z: LD
              }
              of DD) {
              const DD = BD[sD];
              if (void 0 === DD) throw new Error(`Fixed-point prefab "${sD}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
              const {
                dimensions: cD
              } = DD, gD = cD.x, RD = cD.y, AD = cD.z, UD = KD - (gD >> 1), fD = LD - (AD >> 1), ID = UD + gD - 1, GD = fD + AD - 1, hD = {
                schematic: DD,
                bottomLeftX: UD,
                bottomLeftZ: fD,
                floorY: rD,
                ceilingY: rD + RD - 1,
                topRightX: ID,
                topRightZ: GD
              }, nD = UD - pD, MD = ID + pD, OD = fD - pD, JD = GD + pD, ED = Math.floor(nD / zD) * zD, QD = Math.floor(OD / zD) * zD;
              for (let pD = ED; pD <= MD; pD += zD)
                for (let DD = QD; DD <= JD; DD += zD) {
                  const zD = this.getKeyForChunk(pD, DD);
                  wD[zD] ??= [], wD[zD].push(hD)
                }
            }
            this.chunkToFixedPointPrefabs = wD
          }
          getFixedPointPrefabInfoForChunk(DD, zD) {
            const wD = this.getKeyForChunk(DD, zD),
              KD = this.chunkToFixedPointPrefabs[wD];
            if (void 0 === KD) return {
              decodedFixedPointPrefabsForChunk: [],
              nearestFixedPrefabInfoForChunk: null
            };
            const rD = [];
            for (const pD of KD) {
              const {
                schematic: DD,
                bottomLeftX: zD,
                bottomLeftZ: wD,
                floorY: sD,
                ceilingY: KD,
                topRightX: LD,
                topRightZ: cD
              } = pD, gD = this.getDecodedPrefabSchematic(DD);
              rD.push({
                decodedPrefabSchematic: gD,
                bottomLeftX: zD,
                bottomLeftZ: wD,
                floorY: sD,
                ceilingY: KD,
                topRightX: LD,
                topRightZ: cD
              })
            }
            const LD = new hD(KD);
            return {
              decodedFixedPointPrefabsForChunk: rD,
              nearestFixedPrefabInfoForChunk: sD.r.create(this.CI, [DD, zD], pD.k.NumFields, LD)
            }
          }
          static smoothHeightmapForFixedPointPrefab(DD, zD, wD, sD) {
            if (null === sD) return null;
            const KD = sD.getOrGenerate(DD, zD, pD.k.DistanceToNearestFixedPrefab);
            if (KD > nD) return null;
            let rD = KD / nD;
            rD *= rD;
            const LD = sD.getOrGenerate(DD, zD, pD.k.HeightOfNearestFixedPrefab);
            return Math.floor(wD * rD + (1 - rD) * LD)
          }
          static isNearFixedPointPrefab(DD, zD, wD) {
            if (null === wD) return !1;
            return wD.getOrGenerate(DD, zD, pD.k.DistanceToNearestFixedPrefab) <= nD
          }
          static isWithinFixedPointPrefab(DD, zD, wD) {
            if (null === wD) return !1;
            return 0 === wD.getOrGenerate(DD, zD, pD.k.DistanceToNearestFixedPrefab)
          }
          static getBlockFromFixedPointPrefab(DD, zD, wD, pD) {
            const {
              bottomLeftX: sD,
              bottomLeftZ: KD,
              floorY: rD,
              ceilingY: LD,
              topRightX: cD,
              topRightZ: gD
            } = pD;
            if (DD < sD || cD < DD || zD < rD || LD < zD || wD < KD || gD < wD) return 0;
            const RD = DD - sD,
              AD = zD - rD,
              UD = wD - KD;
            return pD.decodedPrefabSchematic.get(RD, AD, UD)
          }
          getKeyForChunk(DD, zD) {
            return `${DD}|${zD}`
          }
          getDecodedPrefabSchematic(DD) {
            const zD = DD.name,
              wD = GD.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(zD);
            if (!(0, LD.B)(wD)) return wD;
            const {
              dimensions: pD
            } = DD, sD = gD()(new Uint16Array(pD.x * pD.y * pD.z), [pD.x, pD.y, pD.z]);
            for (let KD = 0; KD < pD.x; KD += LD.r)
              for (let zD = 0; zD < pD.y; zD += LD.r)
                for (let wD = 0; wD < pD.z; wD += LD.r) {
                  const rD = gD()(new Uint16Array(LD.r * LD.r * LD.r), [LD.r, LD.r, LD.r]),
                    cD = DD.getRLEChunk((0, LD.L)(KD), (0, LD.L)(zD), (0, LD.L)(wD));
                  RD.decode(cD, rD.data);
                  const AD = Math.min(LD.r, pD.x - KD),
                    UD = Math.min(LD.r, pD.y - zD),
                    fD = Math.min(LD.r, pD.z - wD);
                  for (let DD = 0; DD < AD; DD++)
                    for (let pD = 0; pD < UD; pD++)
                      for (let LD = 0; LD < fD; LD++) {
                        const cD = rD.get(DD, pD, LD),
                          gD = KD + DD,
                          RD = zD + pD,
                          AD = wD + LD;
                        sD.set(gD, RD, AD, cD)
                      }
                }
            return GD.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.set(zD, sD), sD
          }
        }
        GD.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE = new(rD())({
          max: 100,
          ttl: 6e4,
          updateAgeOnGet: !0
        });
        class hD {
          constructor(DD) {
            this.fixedPointPrefabsForChunk = DD
          }
          generateAndSet(DD, zD, wD) {
            let sD = nD + 1,
              KD = 0;
            for (const pD of this.fixedPointPrefabsForChunk) {
              const {
                bottomLeftX: wD,
                bottomLeftZ: rD,
                topRightX: LD,
                topRightZ: cD
              } = pD, gD = Math.max(wD - DD, 0, DD - LD) + Math.max(rD - zD, 0, zD - cD);
              gD < sD && (sD = gD, KD = pD.floorY)
            }
            wD.set(DD, zD, pD.k.DistanceToNearestFixedPrefab, sD), wD.set(DD, zD, pD.k.HeightOfNearestFixedPrefab, KD)
          }
        }
        const nD = 12
      },
      39616: (DD, zD, wD) => {
        wD.d(zD, {
          b: () => gD,
          e: () => cD,
          i: () => LD
        });
        var pD = wD(39625),
          sD = wD(39635),
          KD = wD(39633),
          rD = wD(39641);

        function LD(DD) {
          return new pD.j([{
            amplitude: 11,
            frequency: 1 / 4e3
          }, {
            amplitude: 4,
            frequency: .001
          }], `${DD}GlobalHeightmapOffset`)
        }
        class cD {
          constructor(DD) {
            this.globalHeightmap = DD
          }
          getNoWaterHeightmapVal(DD, zD, wD) {
            const pD = DD,
              sD = zD;
            let KD = 0;
            for (const {
                biome: LD,
                weight: cD
              }
              of wD) KD += LD.getHeightmapVal(pD, sD) * cD;
            const rD = this.globalHeightmap.getOctaves(pD, sD);
            return Math.floor(KD) + Math.floor(rD)
          }
        }
        class gD {
          constructor(DD, zD, wD, pD, sD) {
            this.closestBiomesForChunk = DD, this.nearestFixedPrefabInfoForChunk = zD, this.noWaterHeightmapGenerator = wD, this.heightmapPerturb = pD, this.waterBodyGenerator = sD
          }
          generateAndSet(DD, zD, wD) {
            const pD = this.closestBiomesForChunk.getOrGenerate(DD, zD),
              sD = Math.floor(this.heightmapPerturb.getOctaves(DD, zD)),
              rD = Math.floor(this.heightmapPerturb.getOctaves(DD + 200, zD + 778)),
              LD = this.waterBodyGenerator.columnMayHaveScatteredLakes(pD, DD, zD),
              cD = this.getWithWaterHeightmapVal(DD + sD, zD + rD, pD, LD);
            let {
              groundHeight: gD,
              waterHeight: RD,
              cavesAllowedBelowY: AD,
              isLake: UD
            } = cD;
            const fD = pD[0].biome.carveGround(DD, zD, gD);
            null !== fD && (gD = fD, RD = KD.n, AD = fD - KD.f, UD = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(DD, zD, sD, rD, wD, gD, RD, AD, UD)
          }
          getWithWaterHeightmapVal(DD, zD, wD, pD) {
            const sD = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(DD, zD, wD),
              {
                distFromWater: rD,
                waterRadius: LD,
                waterHeight: cD,
                waterbedHeight: gD,
                isLake: RD,
                needOutsideWaterDist: AD
              } = this.waterBodyGenerator.getInfoNeededForWaterGen(DD, zD, pD);
            let UD = 0,
              fD = KD.n,
              ID = KD.k,
              BD = 0;
            const GD = LD + AD;
            if (rD <= GD) {
              const DD = LD + 4,
                zD = cD + 2;
              if (rD <= LD) {
                let DD = rD / LD;
                RD ? (DD *= DD * DD, UD = Math.floor(gD + (cD - gD) * DD - 2)) : (DD *= DD, UD = Math.floor(gD + (cD - gD) * DD)), fD = cD, BD = RD ? 1 : 0;
                const zD = wD[0].biome.waterKept;
                zD < 1 && (fD = gD + Math.floor((cD - gD) * zD), UD >= fD && (fD = KD.n, BD = KD.h))
              } else if (rD <= DD) {
                const wD = (rD - LD) / (DD - LD);
                UD = cD + Math.ceil((zD - cD) * wD)
              } else {
                const wD = (rD - DD) / (GD - DD);
                UD = zD + Math.ceil((sD - zD) * wD)
              }
              ID = UD - KD.f
            } else UD = sD;
            return {
              groundHeight: UD,
              waterHeight: fD,
              cavesAllowedBelowY: ID,
              isLake: BD
            }
          }
          setHeightmapValuesWithFixedPrefabSmoothing(DD, zD, wD, pD, LD, cD, gD, RD, AD) {
            const UD = rD.b.smoothHeightmapForFixedPointPrefab(Math.round(DD + wD / 4), Math.round(zD + pD / 4), cD, this.nearestFixedPrefabInfoForChunk);
            null !== UD && gD > (cD = UD) && (gD = KD.n, AD = 0), LD.set(DD, zD, sD.h.GroundHeight, cD), LD.set(DD, zD, sD.h.WaterHeight, gD), LD.set(DD, zD, sD.h.CavesAllowedBelowY, RD), LD.set(DD, zD, sD.h.IsLake, AD), this.shouldCurtailCave(DD, zD, null !== UD) && LD.set(DD, zD, sD.h.CavesAllowedBelowY, cD - KD.f)
          }
          shouldCurtailCave(DD, zD, wD) {
            if (wD) return !0;
            const pD = Math.max(Math.abs(DD), Math.abs(zD));
            if (pD < 50) return !0;
            const sD = Math.min(Math.abs((DD - 300) % 1e3), 1e3 - Math.abs((DD - 300) % 1e3)),
              KD = Math.min(Math.abs((zD - 300) % 1e3), 1e3 - Math.abs((zD - 300) % 1e3));
            return pD > 1e4 && Math.max(sD, KD) < 50
          }
        }
      },
      39657: (DD, zD, wD) => {
        wD.d(zD, {
          c: () => gD
        });
        var pD = wD(39625),
          sD = wD(39659),
          KD = wD.n(sD),
          rD = wD(4263),
          LD = wD(39698);
        const cD = new LD.e("point cells", 500, 6e4);
        class gD {
          constructor(DD, zD, wD, pD, sD, KD, rD) {
            let LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              gD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              RD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : void 0;
            if (this.name = DD, this.seed = sD, this.minDist = void 0, this.variableDensitySettings = void 0, this.gridSize = void 0, this.cachedCells = cD.partition(), this._tempCellCoord = [0, 0], this.useIsPoint = void 0, this.useKthClosestPoint = void 0, this.useJitteredGrid = void 0, this.customCellGap = void 0, this.mostRecentlyAccessedCell = null, console.assert(Number.isInteger(zD)), this.minDist = zD, this.variableDensitySettings = LD, this.customCellGap = RD, this.useJitteredGrid = gD, this.gridSize = Math.floor(Math.sqrt(KD * Math.pow(zD, 2))), gD) {
              const DD = this.gridSize % zD;
              0 !== DD && (this.gridSize += zD - DD)
            } else {
              const DD = this.gridSize % rD;
              0 !== DD && (this.gridSize += rD - DD)
            }
            this.useIsPoint = wD, this.useKthClosestPoint = pD
          }
          assertReachableFromChunkCentre(DD, zD) {
            const wD = DD / 2 + zD - 1;
            if (this.gridSize < wD) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${wD} (chunkSize=${DD}, halfBox=${zD}). Points near chunk edges would be missed.`)
          }
          isPoint(DD, zD) {
            const wD = this.getCellCoordFromGlobalCoord(DD, zD),
              {
                pointsSet: pD
              } = this.getCell(wD[0], wD[1]);
            return !!pD.has((0, LD.f)(DD, zD))
          }
          getClosestPoint(DD, zD) {
            const wD = this.getCellCoordFromGlobalCoord(DD, zD),
              sD = this.getCell(wD[0], wD[1]),
              KD = this._getPointsSurroundingCell(wD, sD);
            let rD = [0, 0],
              LD = 1e4;
            for (const cD of KD) {
              const wD = (0, pD.J)(cD, DD, zD);
              wD < LD && (rD = cD, LD = wD)
            }
            return rD
          }
          getKClosestPointsWithWeights(DD, zD, wD) {
            const pD = this.getCellCoordFromGlobalCoord(DD, zD),
              sD = this.getCell(pD[0], pD[1]);
            return this._getPointsSurroundingCell(pD, sD), this._getClosestPointsForGeneratedCell(sD, DD, zD, wD)
          }
          getPointsAroundPoint(DD, zD) {
            const wD = this.getCellCoordFromGlobalCoord(DD, zD),
              pD = this.getCell(wD[0], wD[1]);
            return this._getPointsSurroundingCell(wD, pD)
          }
          _getPointsSurroundingCell(DD, zD) {
            if (!zD.surroundingPoints) {
              const KD = [...zD.points];
              for (let zD = DD[0] - 1; zD <= DD[0] + 1; zD++)
                for (let rD = DD[1] - 1; rD <= DD[1] + 1; rD++) pD = zD, sD = rD, ((wD = DD)[0] !== pD || wD[1] !== sD) && KD.push(...this.getCell(zD, rD).points);
              zD.surroundingPoints = KD
            }
            var wD, pD, sD;
            return zD.surroundingPoints
          }
          _getClosestPointsForGeneratedCell(DD, zD, wD, sD) {
            let KD = [0, 0],
              rD = 1e5;
            for (const gD of DD.surroundingPoints) {
              const DD = (0, pD.J)(gD, zD, wD);
              DD < rD && (KD = gD, rD = DD)
            }
            const LD = [{
              pt: KD,
              distDiffFromFirstPt: 0,
              weight: 0
            }];
            let cD = sD;
            for (let gD = 0; gD < DD.surroundingPoints.length; gD++) {
              const RD = DD.surroundingPoints[gD];
              if (RD[0] === KD[0] && RD[1] === KD[1]) continue;
              const AD = (0, pD.J)(RD, zD, wD) - rD;
              AD < sD && (LD.push({
                pt: RD,
                distDiffFromFirstPt: AD,
                weight: 0
              }), cD += sD - AD)
            }
            for (const pD of LD) pD.weight = (sD - pD.distDiffFromFirstPt) / cD;
            return LD
          }
          getCellCoordFromGlobalCoord(DD, zD) {
            return this._tempCellCoord[0] = Math.floor(DD / this.gridSize), this._tempCellCoord[1] = Math.floor(zD / this.gridSize), this._tempCellCoord
          }
          getCell(DD, zD) {
            if (this.mostRecentlyAccessedCell && this.mostRecentlyAccessedCell.coord[0] === DD && this.mostRecentlyAccessedCell.coord[1] === zD) return this.mostRecentlyAccessedCell;
            const wD = this.cachedCells.get(DD, zD);
            if (wD) return this.mostRecentlyAccessedCell = wD, wD;
            const {
              points: pD,
              pointsSet: sD
            } = this.generateRandomPointsForCell(DD, zD), KD = {
              coord: [DD, zD],
              points: pD,
              pointsSet: sD,
              surroundingPoints: null
            };
            return this.cachedCells.set(DD, zD, KD), this.mostRecentlyAccessedCell = KD, KD
          }
          generateRandomPointsForCell(DD, zD) {
            const wD = DD * this.gridSize,
              pD = zD * this.gridSize;
            let sD, cD;
            if (this.useJitteredGrid) {
              const KD = new rD.g(`${DD}${zD}${this.seed}jitter`);
              sD = [];
              const LD = wD + this.gridSize,
                cD = pD + this.gridSize;
              for (let DD = wD; DD < LD; DD += this.minDist)
                for (let zD = pD; zD < cD; zD += this.minDist) {
                  const wD = DD + Math.floor(KD.next() * this.minDist),
                    pD = zD + Math.floor(KD.next() * this.minDist);
                  sD.push([wD, pD])
                }
            } else {
              const LD = new rD.g(`${DD}${zD}${this.seed}pts`),
                cD = () => LD.next();
              let gD;
              const RD = this.gridSize - (this.customCellGap || this.minDist);
              if (null === this.variableDensitySettings) gD = new(KD())({
                shape: [RD, RD],
                minDistance: this.minDist,
                maxDistance: this.minDist,
                tries: 40
              }, cD);
              else {
                const DD = this.variableDensitySettings.min,
                  zD = this.variableDensitySettings.max,
                  sD = zD - DD,
                  rD = this.variableDensitySettings.func,
                  LD = zD => (rD([zD[0] + wD, zD[1] + pD]) - DD) / sD;
                gD = new(KD())({
                  shape: [RD, RD],
                  minDistance: DD,
                  maxDistance: zD,
                  tries: 10,
                  distanceFunction: LD
                }, cD)
              }
              sD = gD.fill().map((DD => [Math.floor(wD + DD[0]), Math.floor(pD + DD[1])]))
            }
            if (this.useIsPoint) {
              cD = new Set;
              for (const DD of sD) cD.add((0, LD.f)(DD[0], DD[1]))
            }
            return {
              pointsSet: cD,
              points: this.useKthClosestPoint ? sD : null
            }
          }
        }
      },
      39724: (DD, zD, wD) => {
        wD.r(zD), wD.d(zD, {
          WorldGenerator: () => tz
        });
        var pD = wD(39625),
          sD = wD(39657),
          KD = wD(39635),
          rD = wD(39633),
          LD = wD(37713),
          cD = wD(39715),
          gD = wD(596),
          RD = wD(619),
          AD = wD(39104),
          UD = wD(4263);
        let fD = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto.getRandomValues(new Uint8Array(DD)).reduce(((DD, zD) => DD += (zD &= 63) < 36 ? zD.toString(36) : zD < 62 ? (zD - 26).toString(36).toUpperCase() : zD > 62 ? "-" : "_"), "")
        };
        class ID {
          constructor(DD) {
            this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(DD).map((DD => {
              let [zD, wD] = DD;
              const pD = wD.name;
              return void 0 !== BD[pD] ? [zD, pD] : [zD, pD.split(" ").at(-1)]
            })))
          }
          getPossibleEnchantmentsForItem(DD) {
            var zD;
            return null !== (zD = BD[this.suffixMapping[DD]]) && void 0 !== zD ? zD : []
          }
          chooseRandomEnchantmentAttributes(DD, zD, wD) {
            const pD = [...wD],
              sD = {
                enchantments: {},
                enchantmentTier: zD,
                id: fD()
              },
              KD = GD[zD];
            for (let LD = 0; LD < KD; LD++) {
              var rD;
              if (0 === pD.length) {
                console.warn("Ran out of enchantments to choose from");
                break
              }
              const {
                enchantments: zD
              } = sD, wD = pD[Math.floor(DD.next() * pD.length)];
              zD[wD] = (null !== (rD = zD[wD]) && void 0 !== rD ? rD : 0) + 1, zD[wD] >= hD && pD.splice(pD.indexOf(wD), 1)
            }
            return sD
          }
        }
        const BD = {
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
          GD = {
            "Tier 1": 1,
            "Tier 2": 2,
            "Tier 3": 3,
            "Tier 4": 4,
            "Tier 5": 5
          },
          hD = 3;
        const nD = [0, 90, 180, 270],
          MD = /^(meta\|rot\d)\|([lrud]+)$/,
          OD = "nesw",
          JD = /^meta\|([nesw]*)\|?(Stacked)?$/,
          ED = function(DD) {
            const zD = new WeakMap;
            return (wD, pD) => {
              let sD = zD.get(wD);
              return void 0 === sD && (sD = DD(wD, pD), zD.set(wD, sD)), sD
            }
          }((DD => new QD(DD)));
        class QD {
          constructor(DD) {
            this.blockMetadata = DD, this.blockIdMappings = new Map, this.maxBlockId = void 0;
            const zD = new Set(Object.keys(DD).map((zD => DD[zD].id)));
            zD.add(0), this.maxBlockId = Math.max(...zD)
          }
          static
          for (DD) {
            return ED(DD)
          }
          getBlockIdMapping(DD, zD) {
            const wD = this.getBlockIdMappingKey(DD, zD);
            let pD = this.blockIdMappings.get(wD);
            return void 0 === pD && nD.includes(DD) && (pD = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, DD, zD), this.blockIdMappings.set(wD, pD)), pD
          }
          turnBlockId(DD, zD, wD) {
            return this.mapBlockId(this.blockMetadata[DD], zD, this.getRotationMapping(zD, wD), wD)
          }
          getBlockIdMappingKey(DD, zD) {
            return `r${DD}|m${Number(zD)}`
          }
          createBlockIdMapping(DD, zD, wD, pD) {
            const sD = new Uint16Array(zD + 1),
              KD = this.getRotationMapping(wD, pD);
            for (const rD in DD) {
              const zD = DD[rD];
              sD[zD.id] = this.mapBlockId(zD, wD, KD, pD)
            }
            return sD
          }
          getRotationMapping(DD, zD) {
            const wD = Math.round(DD / 90),
              pD = new Uint8Array(4);
            for (let sD = 0; sD < 4; sD++) pD[sD] = (4 + sD - wD) % 4;
            if (zD) {
              let DD = pD[0];
              pD[0] = pD[1], pD[1] = DD, DD = pD[2], pD[2] = pD[3], pD[3] = DD
            }
            return pD
          }
          mapBlockId(DD, zD, wD, pD) {
            var sD;
            const {
              blockMetadata: KD
            } = this, rD = Math.round(zD / 90), {
              id: LD,
              meta: cD
            } = DD, {
              rot: gD,
              rootName: RD,
              metaStr: AD
            } = cD;
            let UD;
            const [, fD, ID] = null !== (sD = JD.exec(AD)) && void 0 !== sD ? sD : [];
            if (void 0 !== fD) {
              var BD, GD;
              UD = null !== (BD = null === (GD = KD[`${RD}|meta|${[OD.split("").filter(((DD,zD)=>fD.split("").some((DD=>{const wD=OD.indexOf(DD);return((pD?3-wD:wD)+rD)%4===zD})))).join(""),ID].filter(Boolean).join("|")}`]) || void 0 === GD ? void 0 : GD.id) && void 0 !== BD ? BD : LD
            } else if (null === gD) UD = LD;
            else {
              var hD, nD;
              const DD = wD[gD - 1] + 1;
              let zD = AD.replace(`rot${gD}`, `rot${DD}`);
              pD && cD.stairsCorner && (zD = zD.replace(/(Left|Right)$/, (DD => "Left" === DD ? "Right" : "Left"))), pD && "Chest" === RD && (zD = zD.replace(/\|(left|right)$/, ((DD, zD) => "left" === zD ? "|right" : "|left")));
              const sD = MD.exec(zD);
              if (pD && null !== sD) {
                const DD = "lrud".split("").filter((DD => sD[2].includes("l" === DD ? "r" : "r" === DD ? "l" : DD)));
                zD = `${sD[1]}|${DD.join("")}`
              }
              const rD = `${RD}|${zD}`;
              if (UD = null !== (hD = null === (nD = KD[rD]) || void 0 === nD ? void 0 : nD.id) && void 0 !== hD ? hD : null, null === UD) {
                const DD = KD[RD];
                UD = DD.rootMetaDesc === rD ? DD.id : LD
              }
            }
            return UD
          }
        }
        var XD = wD(2839),
          VD = wD.n(XD),
          PD = wD(39641);

        function CD(DD, zD, wD, pD, sD) {
          for (let LD = 0; LD < wD.numCaveTypes; LD++) {
            if (pD && 0 !== wD.caveTypeToBlockIds[LD]) continue;
            const cD = wD.getOrGenerate(DD, zD, LD, KD.d.FloorY);
            if (cD === rD.m) continue;
            TD(sD, cD, wD.getOrGenerate(DD, zD, LD, KD.d.CeilingY))
          }
        }

        function xD(DD, zD, wD, pD) {
          const sD = [];
          return CD(DD, zD, wD, pD, sD), sD
        }

        function TD(DD, zD, wD) {
          let pD = 0;
          for (; pD < DD.length;) {
            const sD = DD[pD];
            if (zD > sD.ceilingY) break;
            wD < sD.floorY ? pD++ : (zD = Math.min(sD.floorY, zD), wD = Math.max(sD.ceilingY, wD), DD.splice(pD, 1))
          }
          DD.splice(pD, 0, {
            floorY: zD,
            ceilingY: wD
          })
        }
        const bD = new UD.e([{
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
          jD = new UD.e([{
            value: !1,
            weight: 1
          }, {
            value: !0,
            weight: 1
          }]);
        let dD, SD = function(DD) {
          return DD[DD.GUARANTEED_AIR = -1] = "GUARANTEED_AIR", DD
        }({});
        const iD = new UD.e(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((DD => ({
          value: DD,
          weight: 1
        }))));
        class lD {
          constructor(DD) {
            this.mobType = DD
          }
          sample(DD) {
            const zD = `${iD.sample(DD)} ${this.mobType}`;
            return {
              customDisplayName: zD,
              customAttributes: {
                mobSettings: {
                  name: zD
                }
              }
            }
          }
        }
        class WD {
          constructor(DD) {
            this.itemCategoryDistributions = void 0, this.shouldEnchantDistribution = void 0, this.enchantmentTier = void 0;
            const zD = [];
            for (const pD of DD.itemCategories) {
              const DD = new UD.k(pD.minItems, pD.maxItems + 1),
                sD = [];
              for (const zD of pD.items) {
                var wD;
                const DD = zD.amount ? new UD.k(zD.amount.min, zD.amount.max + 1) : null,
                  pD = null !== (wD = zD.itemAttributesDistribution) && void 0 !== wD ? wD : null;
                sD.push({
                  weight: zD.frequency,
                  value: {
                    name: zD.name,
                    amountDistribution: DD,
                    attributesDistribution: pD
                  }
                })
              }
              const KD = new UD.e(sD);
              zD.push({
                numItemsDistribution: DD,
                itemDistribution: KD
              })
            }
            this.itemCategoryDistributions = zD, this.shouldEnchantDistribution = new UD.c(DD.enchantmentProbability), this.enchantmentTier = DD.enchantmentTier
          }
          sample(DD) {
            const zD = Array(RD.g).fill(null);
            let wD = 0;
            for (const gD of this.itemCategoryDistributions) {
              const RD = gD.numItemsDistribution.sample(DD);
              for (let AD = 0; AD < RD; AD++, wD++) {
                var pD, sD, KD, rD, LD, cD;
                const RD = gD.itemDistribution.sample(DD),
                  AD = RD.name,
                  UD = null !== (pD = null === (sD = RD.amountDistribution) || void 0 === sD ? void 0 : sD.sample(DD)) && void 0 !== pD ? pD : null,
                  fD = null !== (KD = null === (rD = RD.attributesDistribution) || void 0 === rD ? void 0 : rD.sample(DD)) && void 0 !== KD ? KD : {},
                  ID = null !== (LD = this.getEnchantmentAttributesForItem(DD, AD)) && void 0 !== LD ? LD : {};
                zD[wD] = {
                  name: AD,
                  amount: UD,
                  attributes: {
                    ...fD,
                    customAttributes: {
                      ...null !== (cD = fD.customAttributes) && void 0 !== cD ? cD : {},
                      ...ID
                    }
                  }
                }
              }
            }
            return (0, UD.n)(zD, DD), zD
          }
          getEnchantmentAttributesForItem(DD, zD) {
            if (!this.shouldEnchantDistribution.sample(DD)) return null;
            const wD = dD.getPossibleEnchantmentsForItem(zD);
            return 0 === wD.length ? null : dD.chooseRandomEnchantmentAttributes(DD, this.enchantmentTier, wD)
          }
        }

        function ND(DD, zD) {
          let wD = 0;
          for (const KD of DD) wD += KD.frequency;
          const pD = zD / wD,
            sD = [];
          for (const KD of DD) sD.push({
            ...KD,
            frequency: KD.frequency * pD
          });
          return sD
        }
        var ZD = function(DD) {
          return DD.WOOD = "Wood", DD.STONE = "Stone", DD.IRON = "Iron", DD.GOLD = "Gold", DD.DIAMOND = "Diamond", DD
        }(ZD || {});
        const yD = {
            name: "Coal",
            frequency: 1,
            amount: {
              min: 5,
              max: 15
            }
          },
          kD = {
            name: "Iron Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          mD = {
            name: "Gold Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          eD = {
            name: "Diamond",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          },
          oD = {
            name: "Spirit Saddle",
            frequency: .5,
            amount: null
          };

        function aD(DD) {
          return ND([{
            name: "Aura XP Potion",
            frequency: 4,
            amount: null
          }, {
            name: "Aura XP Potion II",
            frequency: 1,
            amount: null
          }], DD)
        }

        function uD(DD) {
          return ND([...ND([{
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
          }], 4), ...ND([{
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
          }], 2), ...ND([{
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
          }], 1), ...ND([{
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
          }], 2)], DD)
        }

        function vD(DD) {
          const zD = {
              min: 2,
              max: 4
            },
            wD = [{
              name: "Carrot",
              frequency: 1,
              amount: zD
            }, {
              name: "Raw Potato",
              frequency: 1,
              amount: zD
            }, {
              name: "Beetroot",
              frequency: 1,
              amount: zD
            }];
          return ND([...ND([{
            name: "Apple",
            frequency: 1,
            amount: zD
          }, {
            name: "Bowl of Rice",
            frequency: 1,
            amount: null
          }, {
            name: "Bread",
            frequency: 1,
            amount: zD
          }, {
            name: "Cherry",
            frequency: 1,
            amount: zD
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
            amount: zD
          }, {
            name: "Plum",
            frequency: 1,
            amount: zD
          }, {
            name: "Pumpkin Pie",
            frequency: 1,
            amount: zD
          }], 2), ...ND(wD, 1)], DD)
        }

        function tD(DD) {
          return ND([{
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
          }], DD)
        }

        function FD(DD) {
          const zD = [
              ["White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete"],
              ["Green Glass", "White Glass", "Light Gray Glass", "Gray Glass", "Black Glass", "Brown Glass", "Red Glass", "Orange Glass", "Yellow Glass", "Lime Glass", "Cyan Glass", "Light Blue Glass", "Blue Glass", "Purple Glass", "Magenta Glass", "Pink Glass"],
              ["Patterned Green Glass", "Patterned White Glass", "Patterned Light Gray Glass", "Patterned Gray Glass", "Patterned Black Glass", "Patterned Brown Glass", "Patterned Red Glass", "Patterned Orange Glass", "Patterned Yellow Glass", "Patterned Lime Glass", "Patterned Cyan Glass", "Patterned Light Blue Glass", "Patterned Blue Glass", "Patterned Purple Glass", "Patterned Magenta Glass", "Patterned Pink Glass"],
              ["White Baked Clay", "Orange Baked Clay", "Magenta Baked Clay", "Light Blue Baked Clay", "Yellow Baked Clay", "Lime Baked Clay", "Pink Baked Clay", "Gray Baked Clay", "Light Gray Baked Clay", "Cyan Baked Clay", "Purple Baked Clay", "Blue Baked Clay", "Brown Baked Clay", "Green Baked Clay", "Red Baked Clay", "Black Baked Clay"],
              ["White Ceramic", "Orange Ceramic", "Magenta Ceramic", "Light Blue Ceramic", "Yellow Ceramic", "Lime Ceramic", "Pink Ceramic", "Gray Ceramic", "Light Gray Ceramic", "Cyan Ceramic", "Purple Ceramic", "Blue Ceramic", "Brown Ceramic", "Green Ceramic", "Red Ceramic", "Black Ceramic"],
              ["Stone Bricks", "Engraved Stone", "Mossy Stone Bricks", "Cracked Stone Bricks", "Mossy Messy Stone", "Compressed Messy Stone", "Extra Compressed Messy Stone", "Smooth Sandstone", "Engraved Sandstone", "Marked Sandstone", "Sandstone Bricks", "Smooth Red Sandstone", "Engraved Red Sandstone", "Marked Red Sandstone", "Red Sandstone Bricks", "Engraved Diorite", "Diorite Bricks", "Engraved Andesite", "Andesite Bricks", "Engraved Granite", "Granite Bricks", "Ice Bricks", "Dark Red Stone", "Dark Red Brick"],
              ["White Chalk", "Orange Chalk", "Magenta Chalk", "Light Blue Chalk", "Yellow Chalk", "Lime Chalk", "Pink Chalk", "Gray Chalk", "Light Gray Chalk", "Cyan Chalk", "Purple Chalk", "Blue Chalk", "Brown Chalk", "Green Chalk", "Red Chalk", "Black Chalk"]
            ],
            wD = [];
          for (const KD of zD) {
            const DD = [];
            for (const zD of KD) DD.push({
              name: zD,
              frequency: 1,
              amount: {
                min: 10,
                max: 25
              }
            });
            wD.push(...ND(DD, 1))
          }
          const pD = ["Super Compressed Messy Stone", "Hyper Compressed Messy Stone", "Ultra Compressed Messy Stone"],
            sD = [];
          for (const KD of pD) sD.push({
            name: KD,
            frequency: 1,
            amount: {
              min: 1,
              max: 1
            }
          });
          return [...ND(wD, .999 * DD), ...ND(sD, .001 * DD)]
        }

        function YD(DD, zD) {
          return ND([{
            name: `${DD} Pickaxe`,
            frequency: 1,
            amount: null
          }, {
            name: `${DD} Axe`,
            frequency: .9,
            amount: null
          }, {
            name: `${DD} Spade`,
            frequency: .7,
            amount: null
          }, {
            name: `${DD} Hoe`,
            frequency: .2,
            amount: null
          }], zD)
        }

        function HD(DD, zD) {
          if (zD < 0 || zD > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${zD}`);
          const wD = [{
              name: "Arrow",
              frequency: 1 - zD,
              amount: {
                min: 15,
                max: 25
              }
            }],
            pD = ["Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Instant Damage"],
            sD = [];
          for (const KD of pD) sD.push({
            name: KD,
            frequency: 1,
            amount: {
              min: 10,
              max: 15
            }
          });
          return wD.push(...ND(sD, zD)), ND(wD, DD)
        }

        function qD(DD, zD) {
          return ND([{
            name: `${DD} Sword`,
            frequency: .75,
            amount: null
          }, {
            name: `${DD} Bow`,
            frequency: .6,
            amount: null
          }, {
            name: `${DD} Crossbow`,
            frequency: .15,
            amount: null
          }, ...HD(1, {
            [ZD.WOOD]: .05,
            [ZD.STONE]: .1,
            [ZD.IRON]: .3,
            [ZD.GOLD]: .5,
            [ZD.DIAMOND]: .7
          } [DD])], zD)
        }

        function Dz(DD, zD) {
          if (DD === ZD.STONE) throw new Error(`${DD} armour is not supported`);
          const wD = [{
              name: `${DD} Helmet`,
              frequency: 1,
              amount: null
            }, {
              name: `${DD} Chestplate`,
              frequency: 1,
              amount: null
            }, {
              name: `${DD} Gauntlets`,
              frequency: 1,
              amount: null
            }, {
              name: `${DD} Leggings`,
              frequency: 1,
              amount: null
            }, {
              name: `${DD} Boots`,
              frequency: 1,
              amount: null
            }],
            pD = [...qD(DD, 1), ...ND(wD, 1.5)];
          return ND(pD, zD)
        }
        const zz = {
          [RD.f.COMMON]: new WD({
            enchantmentTier: "Tier 1",
            enchantmentProbability: 1,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: aD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: vD(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: tD(1)
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...YD(ZD.WOOD, 1), ...YD(ZD.STONE, 1), ...Dz(ZD.WOOD, 1), ...qD(ZD.STONE, 1)]
            }, {
              minItems: 1,
              maxItems: 2,
              items: [yD]
            }]
          }),
          [RD.f.UNCOMMON]: new WD({
            enchantmentTier: "Tier 2",
            enchantmentProbability: .9,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: aD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: vD(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...tD(2), ...FD(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...YD(ZD.STONE, 1), ...YD(ZD.IRON, 1), ...qD(ZD.STONE, 1), ...Dz(ZD.IRON, 1)]
            }, {
              minItems: 2,
              maxItems: 3,
              items: [yD, kD]
            }]
          }),
          [RD.f.RARE]: new WD({
            enchantmentTier: "Tier 3",
            enchantmentProbability: .75,
            itemCategories: [{
              minItems: 2,
              maxItems: 3,
              items: aD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: uD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: vD(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...FD(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...YD(ZD.IRON, 1), ...YD(ZD.GOLD, 1), ...Dz(ZD.IRON, 1), ...Dz(ZD.GOLD, 1)]
            }, {
              minItems: 2,
              maxItems: 4,
              items: [yD, kD, mD, oD]
            }]
          }),
          [RD.f.EPIC]: new WD({
            enchantmentTier: "Tier 4",
            enchantmentProbability: .6,
            itemCategories: [{
              minItems: 3,
              maxItems: 4,
              items: aD(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: uD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: vD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...FD(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...YD(ZD.GOLD, 1), ...YD(ZD.DIAMOND, 1), ...Dz(ZD.GOLD, 1), ...Dz(ZD.DIAMOND, 1), ...ND([{
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
              items: [mD, eD, oD]
            }]
          }),
          [RD.f.LEGENDARY]: new WD({
            enchantmentTier: "Tier 5",
            enchantmentProbability: .5,
            itemCategories: [{
              minItems: 4,
              maxItems: 5,
              items: aD(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...FD(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...YD(ZD.DIAMOND, 1), ...Dz(ZD.DIAMOND, 2), ...ND([{
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
              items: [mD, eD, {
                name: "Moonstone",
                frequency: 1,
                amount: {
                  min: 2,
                  max: 4
                }
              }, oD]
            }, {
              minItems: 1,
              maxItems: 1,
              items: (wz = 1, ND([{
                name: "Caught Mob Spirit_Golem Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new lD("Spirit Golem")
              }, {
                name: "Caught Mob Spirit_Wolf Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new lD("Spirit Wolf")
              }, {
                name: "Caught Mob Spirit_Bear Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new lD("Spirit Bear")
              }, {
                name: "Caught Mob Spirit_Stag Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new lD("Spirit Stag")
              }, {
                name: "Caught Mob Spirit_Gorilla Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new lD("Spirit Gorilla")
              }], wz))
            }, {
              minItems: 2,
              maxItems: 3,
              items: function(DD) {
                return ND([{
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
                }], DD)
              }(1)
            }]
          })
        };
        var wz;
        class pz {
          constructor(DD, zD, wD, pD, sD, KD) {
            this.lootChestBlockId = DD, this.seed = zD, this.x = wD, this.y = pD, this.z = sD, this.chestQuality = KD, this.lootChestInventoryDistribution = void 0, this.lootChestInventoryDistribution = zz[KD]
          }
          getBlockId() {
            return this.lootChestBlockId
          }
          generate() {
            const DD = new UD.g(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
              zD = this.lootChestInventoryDistribution.sample(DD);
            return {
              data: {
                persisted: {
                  chestStr: (0, RD.v)(zD),
                  lootQuality: this.chestQuality
                }
              },
              persisted: !0
            }
          }
        }
        class sz {
          constructor(DD) {
            this.seed = void 0, this.CI = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
            const {
              seed: zD,
              CI: wD,
              blockMetadata: pD,
              itemMetadata: rD,
              prefabSize: LD,
              typeSettings: cD
            } = DD;
            sz.BLOCK_ID_MAPPINGS || (sz.BLOCK_ID_MAPPINGS = new QD(pD)), dD || (dD = new ID(rD)), this.seed = zD, this.CI = wD, this.invisibleSolidBlockId = pD["Invisible Solid"].id, this.emptySpawnerBlockId = pD["Empty Spawner Block"].id, this.chestToLootChestBlockId = new gD.e({
              [pD.Chest.id]: pD["Loot Chest"].id,
              [pD["Chest|meta|rot2"].id]: pD["Loot Chest|meta|rot2"].id,
              [pD["Chest|meta|rot3"].id]: pD["Loot Chest|meta|rot3"].id,
              [pD["Chest|meta|rot4"].id]: pD["Loot Chest|meta|rot4"].id
            }, "number");
            const RD = {};
            for (const sD of KD.r) RD[sD] = pD[`${sD} Spawner Block`].id;
            this.mobTypeToSpawnerBlockId = RD, this.defaultSpawnerBlockId = this.mobTypeToSpawnerBlockId[sz.DEFAULT_MOB_TYPE], this.prefabRadius = Math.ceil(LD / 2);
            const AD = {};
            for (const KD in cD) {
              const DD = Number(KD);
              AD[DD] = {};
              const {
                densitySettings: pD
              } = cD[DD];
              for (const KD in pD) {
                const rD = Number(KD),
                  LD = pD[rD];
                let cD = null;
                if (null !== LD) {
                  const pD = Math.ceil(400 / LD.minDistanceBetweenPrefabs);
                  cD = new sD.c(`prefab|${DD}|${rD}`, LD.minDistanceBetweenPrefabs, !1, !0, zD, pD, wD, null, !0)
                }
                AD[DD][rD] = cD
              }
            }
            this.prefabCentrePointGeneratorPerDensityPerType = AD
          }
          static isWithinPrefabClearing(DD, zD, wD) {
            for (const pD of wD) {
              if ((DD - pD.centreX) ** 2 + (zD - pD.centreZ) ** 2 < pD.prefab.clearingRadiusSquared) return !0
            }
            return !1
          }
          prefabRandomAt(DD, zD) {
            return new UD.g(`${DD}|${zD}|${this.seed}|prefabGenerator`)
          }
          getLootPrefabCentres(DD, zD, wD, pD, sD) {
            const KD = [];
            for (const rD in this.prefabCentrePointGeneratorPerDensityPerType) {
              const LD = Number(rD),
                cD = this.prefabCentrePointGeneratorPerDensityPerType[LD];
              for (const rD in cD) {
                const gD = Number(rD),
                  RD = cD[gD];
                if (null === RD) continue;
                const AD = RD.gridSize;
                for (let rD = Math.floor(DD / AD); rD <= Math.floor((wD - 1) / AD); rD++)
                  for (let cD = Math.floor(zD / AD); cD <= Math.floor((pD - 1) / AD); cD++)
                    for (const [AD, UD] of RD.getCell(rD, cD).points) {
                      if (AD < DD || AD >= wD || UD < zD || UD >= pD) continue;
                      const rD = sD.generate(AD, UD)[0].biome.getRandomPrefab(this.prefabRandomAt(AD, UD), LD, gD);
                      null !== rD && rD.chestLocations.length > 0 && KD.push({
                        x: AD,
                        z: UD,
                        prefab: rD
                      })
                    }
              }
            }
            return KD
          }
          getPrefabsForChunk(DD, zD, wD, pD, sD, rD, LD) {
            const cD = [],
              gD = this.CI >> 1,
              RD = DD - this.prefabRadius,
              UD = DD + this.CI + this.prefabRadius,
              fD = zD - this.prefabRadius,
              ID = zD + this.CI + this.prefabRadius;
            for (const BD in this.prefabCentrePointGeneratorPerDensityPerType) {
              const GD = Number(BD),
                hD = this.prefabCentrePointGeneratorPerDensityPerType[GD];
              for (const BD in hD) {
                const nD = Number(BD),
                  MD = hD[nD];
                if (null === MD) continue;
                if (GD === KD.o.SURFACE && nD === KD.l.VERY_HIGH && !LD.regionMayHaveVeryHighSurfacePrefabs(RD, fD, UD, ID)) continue;
                const OD = MD.getPointsAroundPoint(DD + gD, zD + gD);
                for (const DD of OD) {
                  const zD = DD[0],
                    LD = DD[1];
                  if (zD < RD || zD >= UD || LD < fD || LD >= ID) continue;
                  const gD = pD.getOrGenerate(zD, LD)[0].biome,
                    BD = this.prefabRandomAt(zD, LD),
                    hD = gD.getRandomPrefab(BD, GD, nD);
                  if (null === hD) continue;
                  if (GD === KD.o.SURFACE && !gD.canPlaceSurfacePrefab(zD, LD)) continue;
                  const MD = hD.transformationsEnabled ? bD.sample(BD) : 0,
                    OD = !!hD.transformationsEnabled && jD.sample(BD);
                  let JD = null,
                    ED = null,
                    QD = OD;
                  switch (MD) {
                    case 0:
                      break;
                    case 90:
                      JD = hD.dimensionX - 1, QD = !QD;
                      break;
                    case 180:
                      JD = hD.dimensionX - 1, ED = hD.dimensionZ - 1;
                      break;
                    case 270:
                      ED = hD.dimensionZ - 1, QD = !QD;
                      break;
                    default:
                      console.error(`Invalid prefab rotation: ${MD}`)
                  }
                  const XD = {
                      centreX: zD,
                      centreZ: LD,
                      anchorX: zD - (hD.dimensionX >> 1),
                      anchorZ: LD - (hD.dimensionZ >> 1),
                      prefab: hD,
                      xRotationOffset: JD,
                      zRotationOffset: ED,
                      shouldSwapXZ: QD
                    },
                    {
                      anchorY: VD,
                      isOnSolidGround: PD
                    } = this.getPrefabGroundingInfo(XD, BD, wD, sD, rD);
                  if (!PD) continue;
                  if (GD === KD.o.SURFACE && null !== gD.maxSurfacePrefabRelief) {
                    const DD = XD.shouldSwapXZ ? hD.dimensionZ : hD.dimensionX,
                      pD = XD.shouldSwapXZ ? hD.dimensionX : hD.dimensionZ;
                    if (sz.footprintRelief(zD, LD, DD, pD, wD) > gD.maxSurfacePrefabRelief) continue
                  }
                  const CD = Math.ceil(Math.sqrt(hD.dimensionX * hD.dimensionX + hD.dimensionZ * hD.dimensionZ) / 2);
                  if (!gD.allowsPrefab(zD, LD, CD, VD, VD + hD.dimensionY - 1)) continue;
                  const xD = new AD.d;
                  for (const DD of hD.chestLocations) {
                    const zD = Lz(XD, DD.localX, DD.localZ),
                      wD = cz(XD, DD.localX, DD.localZ),
                      pD = VD + DD.localY,
                      sD = DD.qualityDistribution.sample(BD);
                    xD.set(zD, pD, wD, sD)
                  }
                  const TD = new AD.d;
                  for (const DD of hD.spawnerBlockLocations) {
                    const zD = Lz(XD, DD.localX, DD.localZ),
                      wD = cz(XD, DD.localX, DD.localZ),
                      pD = VD + DD.localY,
                      sD = DD.mobTypeDistribution.sample(BD),
                      KD = this.mobTypeToSpawnerBlockId[sD];
                    TD.set(zD, pD, wD, KD)
                  }
                  let dD = null;
                  (0 !== MD || OD) && (dD = sz.BLOCK_ID_MAPPINGS.getBlockIdMapping(MD, OD)), cD.push({
                    ...XD,
                    anchorY: VD,
                    chestLocationToQuality: xD,
                    spawnerBlockLocationToBlockId: TD,
                    blockIdMapping: dD,
                    decodedPrefabSchematic: this.getDecodedPrefabSchematic(hD)
                  })
                }
              }
            }
            return cD
          }
          static footprintRelief(DD, zD, wD, pD, sD) {
            let rD = 1 / 0,
              LD = -1 / 0;
            const cD = wD >> 1,
              gD = pD >> 1;
            for (let RD = -cD; RD <= cD; RD += Math.max(1, cD))
              for (let wD = -gD; wD <= gD; wD += Math.max(1, gD)) {
                const pD = sD.getOrGenerate(DD + RD, zD + wD, KD.h.GroundHeight);
                rD = Math.min(rD, pD), LD = Math.max(LD, pD)
              }
            return LD - rD
          }
          getPrefabGroundingInfo(DD, zD, wD, pD, sD) {
            const KD = DD.prefab,
              rD = DD.centreX,
              LD = DD.centreZ,
              cD = [];
            if ("centre" === KD.groundingPoints) cD.push([rD, LD]);
            else
              for (const AD of KD.groundingPoints) {
                const zD = Lz(DD, AD.localX, AD.localZ),
                  wD = cz(DD, AD.localX, AD.localZ);
                cD.push([zD, wD])
              }
            let gD;
            const RD = KD.undergroundYInterval;
            if (null !== RD) {
              const {
                LD: DD,
                cD: wD
              } = RD;
              gD = this.getCaveGroundingInfoFromGroundingPoints(cD, KD.groundingRadius, zD, DD, wD, pD)
            } else gD = this.getSurfaceGroundingInfoFromGroundingPoints(cD, KD.groundingRadius, wD, pD, sD);
            return gD.anchorY += KD.yOffset, gD
          }
          getSurfaceGroundingInfoFromGroundingPoints(DD, zD, wD, pD, sD) {
            let LD = 1e4;
            for (const gD of DD) {
              const DD = gD[0],
                RD = gD[1];
              for (let gD = DD - zD; gD < DD + zD; gD++)
                for (let DD = RD - zD; DD < RD + zD; DD++) {
                  if (wD.getOrGenerate(gD, DD, KD.h.WaterHeight) !== rD.n) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  const zD = wD.getOrGenerate(gD, DD, KD.h.GroundHeight);
                  if (cD.e.isInCave(gD, zD, DD, pD)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  if (PD.b.isNearFixedPointPrefab(gD, DD, sD)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  LD = Math.min(LD, zD)
                }
            }
            return {
              anchorY: LD,
              isOnSolidGround: !0
            }
          }
          getCaveGroundingInfoFromGroundingPoints(DD, zD, wD, pD, sD, KD) {
            const rD = [];
            for (const cD of DD) {
              const DD = cD[0],
                wD = cD[1];
              for (let pD = DD - zD; pD < DD + zD; pD++)
                for (let DD = wD - zD; DD < wD + zD; DD++) CD(pD, DD, KD, !1, rD)
            }

            function LD(DD, zD) {
              return Math.floor(wD.next() * (zD - DD + 1)) + DD
            }
            if (0 === rD.length) return {
              anchorY: LD(pD, sD),
              isOnSolidGround: !0
            };
            if (function(DD, zD, wD) {
                for (let pD = 0; pD < DD.length; pD++) {
                  const sD = DD[pD];
                  (sD.floorY < zD || sD.floorY > wD) && (DD.splice(pD, 1), pD--)
                }
              }(rD, pD, sD), 0 === rD.length) return {
              anchorY: -1e4,
              isOnSolidGround: !1
            };
            return {
              anchorY: rD[LD(0, rD.length - 1)].floorY,
              isOnSolidGround: !0
            }
          }
          getBlockFromPrefabAtPoint(DD, zD, wD, pD, sD) {
            var KD, rD;
            let LD = this.getPrefabBlock(DD, zD, wD, pD);
            if (0 === LD) return LD;
            var cD;
            if (LD === this.emptySpawnerBlockId && (LD = null !== (cD = pD.spawnerBlockLocationToBlockId.get(DD, zD, wD)) && void 0 !== cD ? cD : this.defaultSpawnerBlockId), LD < 0) return LD;
            if (LD = null !== (KD = null === (rD = pD.blockIdMapping) || void 0 === rD ? void 0 : rD[LD]) && void 0 !== KD ? KD : LD, void 0 !== this.chestToLootChestBlockId.reverseGet(LD)) {
              var gD;
              const KD = null !== (gD = pD.chestLocationToQuality.get(DD, zD, wD)) && void 0 !== gD ? gD : sz.DEFAULT_CHEST_QUALITY,
                rD = new pz(LD, this.seed, DD, zD, wD, KD);
              sD.set(DD, zD, wD, rD)
            }
            return LD
          }
          getPrefabBlock(DD, zD, wD, pD) {
            const sD = pD.prefab,
              KD = zD - pD.anchorY;
            if (KD < 0 || KD >= sD.dimensionY) return 0;
            const rD = function(DD, zD, wD) {
                if (DD.shouldSwapXZ) return rz(DD, wD);
                return Kz(DD, zD)
              }(pD, DD, wD),
              LD = function(DD, zD, wD) {
                if (DD.shouldSwapXZ) return Kz(DD, zD);
                return rz(DD, wD)
              }(pD, DD, wD);
            return rD < 0 || rD >= sD.dimensionX || LD < 0 || LD >= sD.dimensionZ ? 0 : pD.decodedPrefabSchematic.get(rD, KD, LD)
          }
          getDecodedPrefabSchematic(DD) {
            const zD = sz.DECODED_PREFAB_SCHEMATIC_CACHE.get(DD.schematic);
            if (void 0 !== zD) return zD;
            const {
              dimensionX: wD,
              dimensionY: pD,
              dimensionZ: sD
            } = DD, KD = VD()(new Int32Array(wD * pD * sD), [wD, pD, sD]), rD = new AD.d;
            for (const LD of DD.chestLocations) rD.set(LD.localX, LD.localY, LD.localZ, !0);
            const cD = new AD.d;
            for (const LD of DD.spawnerBlockLocations) cD.set(LD.localX, LD.localY, LD.localZ, !0);
            for (let gD = 0; gD < wD; gD += RD.r)
              for (let zD = 0; zD < pD; zD += RD.r)
                for (let AD = 0; AD < sD; AD += RD.r) {
                  const UD = VD()(new Uint16Array(RD.r * RD.r * RD.r), [RD.r, RD.r, RD.r]),
                    fD = DD.schematic.getRLEChunk((0, RD.L)(gD), (0, RD.L)(zD), (0, RD.L)(AD));
                  LD.decode(fD, UD.data);
                  const ID = Math.min(RD.r, wD - gD),
                    BD = Math.min(RD.r, pD - zD),
                    GD = Math.min(RD.r, sD - AD);
                  for (let wD = 0; wD < ID; wD++)
                    for (let pD = 0; pD < BD; pD++)
                      for (let sD = 0; sD < GD; sD++) {
                        let LD = UD.get(wD, pD, sD);
                        const RD = gD + wD,
                          fD = zD + pD,
                          ID = AD + sD;
                        if (this.invisibleSolidBlockId === LD) LD = SD.GUARANTEED_AIR;
                        else if (this.emptySpawnerBlockId === LD) cD.get(RD, fD, ID) || console.error(`Empty spawner block found in prefab ${DD.schematic.name} at (${RD}, ${fD}, ${ID}) with no mob type specified. Defaulting to "${sz.DEFAULT_MOB_TYPE}" mob type.`);
                        else {
                          const zD = this.chestToLootChestBlockId.get(LD);
                          void 0 !== zD && (rD.get(RD, fD, ID) || console.error(`Chest found in prefab ${DD.schematic.name} at (${RD}, ${fD}, ${ID}) with no quality specified. Defaulting to "${sz.DEFAULT_CHEST_QUALITY}" quality.`), LD = zD)
                        }
                        KD.set(RD, fD, ID, LD)
                      }
                }
            return sz.DECODED_PREFAB_SCHEMATIC_CACHE.set(DD.schematic, KD), KD
          }
        }

        function Kz(DD, zD) {
          let wD = zD - DD.anchorX;
          return null !== DD.xRotationOffset && (wD = DD.xRotationOffset - wD), wD
        }

        function rz(DD, zD) {
          let wD = zD - DD.anchorZ;
          return null !== DD.zRotationOffset && (wD = DD.zRotationOffset - wD), wD
        }

        function Lz(DD, zD, wD) {
          return function(DD, zD) {
            null !== DD.xRotationOffset && (zD = DD.xRotationOffset - zD);
            return zD + DD.anchorX
          }(DD, DD.shouldSwapXZ ? wD : zD)
        }

        function cz(DD, zD, wD) {
          return function(DD, zD) {
            null !== DD.zRotationOffset && (zD = DD.zRotationOffset - zD);
            return zD + DD.anchorZ
          }(DD, DD.shouldSwapXZ ? zD : wD)
        }
        sz.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, sz.BLOCK_ID_MAPPINGS = void 0, sz.DEFAULT_MOB_TYPE = "Draugr Zombie", sz.DEFAULT_CHEST_QUALITY = RD.f.COMMON;
        var gz = function(DD) {
            return DD[DD.STANDARD = 0] = "STANDARD", DD[DD.FRILLED = 1] = "FRILLED", DD[DD.TALL = 2] = "TALL", DD[DD.FLAT = 3] = "FLAT", DD[DD.DROOPY = 4] = "DROOPY", DD
          }(gz || {}),
          Rz = function(DD) {
            return DD[DD.TOP = 0] = "TOP", DD[DD.UPPER_MIDDLE = 1] = "UPPER_MIDDLE", DD[DD.MIDDLE = 2] = "MIDDLE", DD[DD.LOWER_MIDDLE = 3] = "LOWER_MIDDLE", DD[DD.BOTTOM = 4] = "BOTTOM", DD
          }(Rz || {}),
          Az = function(DD) {
            return DD[DD.CIRCLE = 0] = "CIRCLE", DD[DD.DIAMOND = 1] = "DIAMOND", DD
          }(Az || {}),
          Uz = function(DD) {
            return DD[DD.ALWAYS = 0] = "ALWAYS", DD[DD.SOMETIMES = 1] = "SOMETIMES", DD[DD.NEVER = 2] = "NEVER", DD
          }(Uz || {});
        class fz {
          static initCanopyGenerationSchemaByShape(DD, zD, wD, pD) {
            return this.initCanopyGenerationSchemaByFunction(wD, ((wD, sD) => {
              const KD = pD === Az.CIRCLE ? Math.sqrt(wD * wD + sD * sD) : Math.max(Math.abs(wD - sD), Math.abs(wD + sD));
              return KD < DD ? Uz.ALWAYS : KD < zD ? Uz.SOMETIMES : Uz.NEVER
            }))
          }
          static initCanopyGenerationSchemaByFunction(DD, zD) {
            const wD = new pD.i(2 * DD + 1, [-DD, -DD]);
            for (let pD = -DD; pD <= DD; pD++)
              for (let sD = -DD; sD <= DD; sD++) {
                const DD = zD(pD, sD);
                wD.set(pD, sD, DD)
              }
            return wD
          }
          constructor(DD, zD, wD, pD, KD) {
            this.CI = wD, this.seed = pD, this.blockMetadata = KD, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
            const rD = 1 / 30;
            if (this.treeInfos = {
                [RD.p.Maple]: {
                  trunkBlockId: KD["Maple Log"].id,
                  trunkBaseId: KD["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: KD["Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Fruity Maple Leaves"].id,
                  canopyType: gz.STANDARD,
                  vineProbability: rD
                },
                [RD.p.Pine]: {
                  trunkBlockId: KD["Pine Log"].id,
                  trunkBaseId: KD["Pine Log|TreeBase|Pine"].id,
                  canopyLeavesId: KD["Pine Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Pine Cone Leaves"].id,
                  canopyType: gz.FRILLED,
                  vineProbability: 0,
                  minHeight: 5,
                  maxHeight: 7
                },
                [RD.p.Plum]: {
                  trunkBlockId: KD["Plum Log"].id,
                  trunkBaseId: KD["Plum Log|TreeBase|Plum"].id,
                  canopyLeavesId: KD["Plum Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Fruity Plum Leaves"].id,
                  canopyType: gz.STANDARD,
                  vineProbability: rD
                },
                [RD.p.Cedar]: {
                  trunkBlockId: KD["Cedar Log"].id,
                  trunkBaseId: KD["Cedar Log|TreeBase|Cedar"].id,
                  canopyLeavesId: KD["Cedar Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.STANDARD,
                  vineProbability: rD
                },
                [RD.p.Aspen]: {
                  trunkBlockId: KD["Aspen Log"].id,
                  trunkBaseId: KD["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: KD["Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.FRILLED,
                  vineProbability: rD,
                  minHeight: 5,
                  maxHeight: 6
                },
                [RD.p.Jungle]: {
                  trunkBlockId: KD["Jungle Log"].id,
                  trunkBaseId: KD["Jungle Log|TreeBase|Jungle"].id,
                  canopyLeavesId: KD["Jungle Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.FLAT,
                  vineProbability: .5,
                  minHeight: 2,
                  maxHeight: 7
                },
                [RD.p.Palm]: {
                  trunkBlockId: KD["Palm Log"].id,
                  trunkBaseId: KD["Palm Log|TreeBase|Palm"].id,
                  canopyLeavesId: KD["Palm Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Fruity Palm Leaves"].id,
                  canopyType: gz.DROOPY,
                  vineProbability: 1 / 3,
                  minHeight: 4,
                  maxHeight: 6
                },
                [RD.p.AutumnMaple]: {
                  trunkBlockId: KD["Maple Log"].id,
                  trunkBaseId: KD["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: KD["Autumn Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.STANDARD,
                  vineProbability: rD
                },
                [RD.p.Pear]: {
                  trunkBlockId: KD["Pear Log"].id,
                  trunkBaseId: KD["Pear Log|TreeBase|Pear"].id,
                  canopyLeavesId: KD["Pear Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Fruity Pear Leaves"].id,
                  canopyType: gz.TALL,
                  vineProbability: rD,
                  minHeight: 3,
                  maxHeight: 5
                },
                [RD.p.Cherry]: {
                  trunkBlockId: KD["Cherry Log"].id,
                  trunkBaseId: KD["Cherry Log|TreeBase|Cherry"].id,
                  canopyLeavesId: KD["Cherry Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Fruity Cherry Leaves"].id,
                  canopyType: gz.DROOPY,
                  vineProbability: 0,
                  minHeight: 4,
                  maxHeight: 6
                },
                [RD.p.Spectral]: {
                  trunkBlockId: KD["Spectral Log"].id,
                  trunkBaseId: KD["Spectral Log|TreeBase|Spectral"].id,
                  canopyLeavesId: KD["Spectral Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.STANDARD,
                  vineProbability: 0
                },
                [RD.p.Mango]: {
                  trunkBlockId: KD["Mango Log"].id,
                  trunkBaseId: KD["Mango Log|TreeBase|Mango"].id,
                  canopyLeavesId: KD["Mango Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: KD["Fruity Mango Leaves"].id,
                  canopyType: gz.TALL,
                  vineProbability: .2,
                  minHeight: 3,
                  maxHeight: 6
                },
                [RD.p.AutumnAspen]: {
                  trunkBlockId: KD["Aspen Log"].id,
                  trunkBaseId: KD["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: KD["Autumn Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.FRILLED,
                  vineProbability: rD,
                  minHeight: 5,
                  maxHeight: 6
                },
                [RD.p.Dead]: {
                  trunkBlockId: KD["Barkless Maple Log"].id,
                  trunkBaseId: KD["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 7
                },
                [RD.p.FallenLog]: {
                  trunkBlockId: KD["Barkless Maple Log"].id,
                  trunkBaseId: KD["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: gz.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 6
                }
              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((DD => KD[DD].id)), this.maxTreeRadius = DD.maxTreeRadius, this.CI <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
            if (this.CI <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
            this.canopyInfos = {
              [gz.STANDARD]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Rz.TOP]: fz.initCanopyGenerationSchemaByShape(.2, 1.1, 2, Az.CIRCLE),
                  [Rz.UPPER_MIDDLE]: null,
                  [Rz.MIDDLE]: fz.initCanopyGenerationSchemaByShape(1.2, 1.7, 2, Az.CIRCLE),
                  [Rz.LOWER_MIDDLE]: null,
                  [Rz.BOTTOM]: fz.initCanopyGenerationSchemaByShape(2.8, 3, 2, Az.CIRCLE)
                }
              },
              [gz.FRILLED]: {
                canopyBottomOffset: -3,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Rz.TOP]: fz.initCanopyGenerationSchemaByShape(.1, .1, 2, Az.CIRCLE),
                  [Rz.UPPER_MIDDLE]: fz.initCanopyGenerationSchemaByShape(2, 2, 2, Az.DIAMOND),
                  [Rz.MIDDLE]: null,
                  [Rz.LOWER_MIDDLE]: fz.initCanopyGenerationSchemaByShape(3, 3, 2, Az.DIAMOND),
                  [Rz.BOTTOM]: fz.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, Az.CIRCLE)
                }
              },
              [gz.TALL]: {
                canopyBottomOffset: -1,
                canopyTopOffset: 2,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Rz.TOP]: fz.initCanopyGenerationSchemaByShape(.8, 2, 2, Az.DIAMOND),
                  [Rz.UPPER_MIDDLE]: fz.initCanopyGenerationSchemaByShape(1.7, 1.7, 2, Az.CIRCLE),
                  [Rz.MIDDLE]: null,
                  [Rz.LOWER_MIDDLE]: fz.initCanopyGenerationSchemaByShape(1.7, 2.2, 2, Az.CIRCLE),
                  [Rz.BOTTOM]: fz.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, Az.CIRCLE)
                }
              },
              [gz.FLAT]: {
                canopyBottomOffset: 0,
                canopyTopOffset: 1,
                radius: 3,
                canopyLevelToGenerationSchema: {
                  [Rz.TOP]: fz.initCanopyGenerationSchemaByShape(2.2, 2.5, 3, Az.CIRCLE),
                  [Rz.UPPER_MIDDLE]: fz.initCanopyGenerationSchemaByFunction(3, ((DD, zD) => {
                    if (Math.sqrt(DD * DD + zD * zD) > 3.2) return Uz.NEVER;
                    const wD = Math.abs(DD),
                      pD = Math.abs(zD);
                    return 1 === wD && 3 === pD || 3 === wD && 1 === pD ? Uz.SOMETIMES : Uz.ALWAYS
                  })),
                  [Rz.MIDDLE]: null,
                  [Rz.LOWER_MIDDLE]: null,
                  [Rz.BOTTOM]: null
                }
              },
              [gz.DROOPY]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Rz.TOP]: fz.initCanopyGenerationSchemaByShape(2, 2, 2, Az.CIRCLE),
                  [Rz.UPPER_MIDDLE]: fz.initCanopyGenerationSchemaByShape(2.2, 2.8, 2, Az.CIRCLE),
                  [Rz.MIDDLE]: null,
                  [Rz.LOWER_MIDDLE]: fz.initCanopyGenerationSchemaByFunction(2, ((DD, zD) => 2 === Math.abs(DD) && 2 === Math.abs(zD) ? Uz.SOMETIMES : Uz.ALWAYS)),
                  [Rz.BOTTOM]: fz.initCanopyGenerationSchemaByFunction(2, ((DD, zD) => {
                    const wD = Math.abs(DD),
                      pD = Math.abs(zD);
                    return 2 === wD && 2 === pD || 0 === wD && 1 === pD || 1 === wD && 0 === pD ? Uz.ALWAYS : Uz.NEVER
                  }))
                }
              }
            };
            for (const sD in this.canopyInfos) {
              const DD = this.canopyInfos[sD];
              if (DD.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${DD.radius} for canopy type "${sD}" is larger than tree radius ${this.maxTreeRadius}`)
            }
            let LD = 1e5,
              cD = 0;
            for (const sD of DD.biomeSelector.xD) sD.biome.treeMinDist && (LD = Math.min(LD, sD.biome.treeMinDist), cD = Math.max(cD, sD.biome.treeMinDist));
            this.treePointGen = new sD.c("tree", 6, !0, !1, pD, 300, wD, {
              func: DD => zD.getBiome(DD[0], DD[1]).biome.treeMinDist || cD,
              min: LD,
              max: cD
            }, !1, 2)
          }
          getTreesForChunk(DD, zD, wD, pD, sD, LD, gD) {
            const AD = [];
            for (let fD = DD - this.maxTreeRadius; fD < DD + this.CI + this.maxTreeRadius; fD++)
              for (let DD = zD - this.maxTreeRadius; DD < zD + this.CI + this.maxTreeRadius; DD++) {
                const zD = pD.getOrGenerate(fD, DD)[0].biome;
                if (null !== zD.treeMinDist) {
                  if (zD.getTotalTreeChance() <= 0 && console.error("Biome", zD, "has 0 total tree chance"), !this.treePointGen.isPoint(fD, DD)) continue;
                  if (wD.getOrGenerate(fD, DD, KD.h.WaterHeight) !== rD.n) continue;
                  const pD = wD.getOrGenerate(fD, DD, KD.h.GroundHeight);
                  if (cD.e.isInCave(fD, pD, DD, sD)) continue;
                  if (sz.isWithinPrefabClearing(fD, DD, LD)) continue;
                  if (PD.b.isNearFixedPointPrefab(fD, DD, gD)) continue;
                  const ID = new UD.g(`${fD}${DD}${this.seed}treeHeight`),
                    BD = fz.getTreeTypeFromBiome(zD, ID);
                  let {
                    height: GD,
                    vineDir: hD
                  } = this.getRandTreeInfo(ID, BD);
                  if (BD === RD.p.FallenLog) {
                    hD = ID.next() < .5 ? 0 : 1;
                    for (let zD = -1; zD < GD - 1; zD++) {
                      if (wD.getOrGenerate(0 === hD ? fD + zD : fD, 0 === hD ? DD : DD + zD, KD.h.GroundHeight) !== pD) {
                        GD = 1;
                        break
                      }
                    }
                  }
                  AD.push({
                    treeX: fD,
                    treeZ: DD,
                    trunkBase: pD + 1,
                    height: GD,
                    vineDir: hD,
                    treeType: BD
                  })
                }
              }
            return AD
          }
          getRandTreeInfo(DD, zD) {
            var wD, pD;
            const sD = this.treeInfos[zD],
              KD = null !== (wD = sD.minHeight) && void 0 !== wD ? wD : this.minTreeHeight,
              rD = null !== (pD = sD.maxHeight) && void 0 !== pD ? pD : this.maxTreeHeight;
            return {
              height: Math.floor(DD.next() * (rD - KD)) + KD,
              vineDir: DD.next() < sD.vineProbability ? Math.floor(4 * DD.next()) : -1
            }
          }
          static getTreeTypeFromBiome(DD, zD) {
            const wD = Math.floor(zD.next() * DD.getTotalTreeChance());
            let pD = 0,
              sD = 0;
            for (; pD <= wD;) pD += DD.treeChances[sD].chance, sD++;
            return DD.treeChances[sD - 1].treeType
          }
          addTreesToChunk(DD, zD, wD, pD, sD) {
            for (const KD of sD) {
              const sD = new UD.g(`${KD.treeX}|${KD.treeZ}|${KD.trunkBase}|tree`);
              if (KD.treeType === RD.p.Dead || KD.treeType === RD.p.FallenLog) {
                this.addDeadTreeToChunk(DD, zD, wD, pD, KD, sD);
                continue
              }
              const rD = this.addTreeCanopyToChunk(DD, zD, wD, pD, KD, sD);
              this.addTreeTrunkToChunk(DD, zD, wD, pD, KD, rD)
            }
          }
          addDeadTreeToChunk(DD, zD, wD, pD, sD, KD) {
            const rD = this.deadWoodIds[Math.floor(KD.next() * this.deadWoodIds.length)],
              {
                treeX: LD,
                treeZ: cD,
                trunkBase: gD,
                height: AD
              } = sD,
              UD = (sD, KD, LD) => {
                sD >= zD && sD < zD + this.CI && KD >= wD && KD < wD + this.CI && LD >= pD && LD < pD + this.CI && DD.set(sD - zD, KD - wD, LD - pD, rD)
              };
            if (sD.treeType === RD.p.FallenLog) {
              if (AD <= 1) return void UD(LD, gD, cD);
              for (let DD = -1; DD < AD - 1; DD++) UD(0 === sD.vineDir ? LD + DD : LD, gD, 0 === sD.vineDir ? cD : cD + DD);
              return
            }
            for (let RD = gD; RD < gD + AD; RD++) UD(LD, RD, cD);
            const fD = AD <= 3 ? 1 : 1 + Math.floor(3 * KD.next()),
              ID = gD + (AD >> 1);
            for (let RD = 0; RD < fD; RD++) {
              const DD = ID + Math.floor(KD.next() * (gD + AD - ID)),
                zD = Math.floor(4 * KD.next()),
                wD = 0 === zD ? 1 : 1 === zD ? -1 : 0,
                pD = 2 === zD ? 1 : 3 === zD ? -1 : 0;
              UD(LD + wD, DD, cD + pD), KD.next() < .5 && UD(LD + 2 * wD, DD + (KD.next() < .6 ? 1 : 0), cD + 2 * pD)
            }
            KD.next() < .35 && UD(LD, gD + AD, cD)
          }
          addTreeCanopyToChunk(DD, zD, wD, pD, sD, KD) {
            const rD = sD.treeX,
              LD = sD.treeZ,
              cD = sD.trunkBase,
              gD = cD + sD.height - 1,
              RD = this.treeInfos[sD.treeType],
              AD = this.canopyInfos[RD.canopyType],
              UD = cD + sD.height + AD.canopyBottomOffset,
              fD = cD + sD.height + AD.canopyTopOffset,
              ID = Math.max(UD, wD),
              BD = Math.min(fD, wD + this.CI - 1);
            if (BD < ID) return UD;
            const GD = Math.max(rD - AD.radius, zD),
              hD = Math.min(rD + AD.radius, zD + this.CI - 1);
            if (GD > hD) return UD;
            const nD = Math.max(LD - AD.radius, pD),
              MD = Math.min(LD + AD.radius, pD + this.CI - 1);
            if (nD > MD) return UD;
            const OD = RD.canopyLeavesId,
              JD = RD.canopyLeavesWithDropId;
            return RD.canopyType === gz.FRILLED ? this.addFrilledCanopyToChunk(DD, zD, wD, pD, rD, LD, GD, hD, nD, MD, gD, OD, JD, ID, BD, fD, AD.canopyLevelToGenerationSchema, KD) : RD.canopyType === gz.TALL || RD.canopyType === gz.DROOPY ? this.addTallOrDroopyCanopyToChunk(DD, zD, wD, pD, rD, LD, GD, hD, nD, MD, gD, OD, JD, ID, BD, fD, AD.canopyLevelToGenerationSchema, KD) : RD.canopyType === gz.FLAT ? this.addFlatCanopyToChunk(DD, zD, wD, pD, rD, LD, GD, hD, nD, MD, gD, OD, JD, ID, BD, fD, AD.canopyLevelToGenerationSchema, KD) : this.addStandardCanopyToChunk(DD, zD, wD, pD, rD, LD, GD, hD, nD, MD, gD, OD, JD, ID, BD, fD, AD.canopyLevelToGenerationSchema, KD), UD
          }
          addStandardCanopyToChunk(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD) {
            for (let nD = rD; nD <= LD; nD++) {
              const rD = nD - sD;
              for (let sD = fD; sD <= ID; sD++) {
                let LD;
                LD = sD === BD ? Rz.TOP : sD === BD - 1 ? Rz.MIDDLE : Rz.BOTTOM;
                const fD = GD[LD];
                for (let ID = cD; ID <= gD; ID++) {
                  const LD = ID - KD;
                  this.applyCanopyGenerationSchema(DD, zD, wD, pD, nD, sD, ID, RD, AD, UD, rD, LD, fD, hD)
                }
              }
            }
          }
          addFrilledCanopyToChunk(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD) {
            const nD = hD.next() < .7;
            for (let MD = rD; MD <= LD; MD++) {
              const rD = MD - sD;
              for (let sD = fD; sD <= ID; sD++) {
                const LD = BD - sD;
                let fD;
                if (0 === LD) fD = Rz.TOP;
                else if (2 === LD) {
                  if (!nD) continue;
                  fD = Rz.LOWER_MIDDLE
                } else fD = 4 === LD ? Rz.BOTTOM : Rz.UPPER_MIDDLE;
                const ID = GD[fD];
                for (let BD = cD; BD <= gD; BD++) {
                  const LD = BD - KD;
                  this.applyCanopyGenerationSchema(DD, zD, wD, pD, MD, sD, BD, RD, AD, UD, rD, LD, ID, hD)
                }
              }
            }
          }
          addTallOrDroopyCanopyToChunk(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD) {
            for (let nD = rD; nD <= LD; nD++) {
              const rD = nD - sD;
              for (let sD = fD; sD <= ID; sD++) {
                let LD;
                LD = sD === BD ? Rz.TOP : sD === BD - 1 ? Rz.UPPER_MIDDLE : sD === BD - 2 ? Rz.LOWER_MIDDLE : Rz.BOTTOM;
                const fD = GD[LD];
                for (let ID = cD; ID <= gD; ID++) {
                  const LD = ID - KD;
                  this.applyCanopyGenerationSchema(DD, zD, wD, pD, nD, sD, ID, RD, AD, UD, rD, LD, fD, hD)
                }
              }
            }
          }
          addFlatCanopyToChunk(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD) {
            for (let nD = rD; nD <= LD; nD++) {
              const rD = nD - sD;
              for (let sD = fD; sD <= ID; sD++) {
                let LD;
                sD === BD ? LD = Rz.TOP : sD === BD - 1 && (LD = Rz.UPPER_MIDDLE);
                const fD = GD[LD];
                for (let ID = cD; ID <= gD; ID++) {
                  const LD = ID - KD;
                  this.applyCanopyGenerationSchema(DD, zD, wD, pD, nD, sD, ID, RD, AD, UD, rD, LD, fD, hD)
                }
              }
            }
          }
          applyCanopyGenerationSchema(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD) {
            if (KD <= LD && 0 === RD && 0 === AD) return;
            let ID;
            const BD = UD.get(RD, AD);
            if (BD === Uz.ALWAYS) ID = cD;
            else {
              if (BD === Uz.NEVER) return;
              if (BD !== Uz.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${BD}`);
              if (!(fD.next() < .8)) return;
              ID = cD
            }
            null !== gD && fD.next() < 1 / 15 && (ID = gD), DD.set(sD - zD, KD - wD, rD - pD, ID)
          }
          addTreeTrunkToChunk(DD, zD, wD, pD, sD, KD) {
            const rD = zD + this.CI,
              LD = wD + this.CI,
              cD = pD + this.CI,
              gD = sD.treeX,
              RD = sD.trunkBase,
              AD = sD.treeZ,
              UD = this.treeInfos[sD.treeType],
              fD = zD <= gD && gD < rD && pD <= AD && AD < cD,
              ID = wD <= RD && RD < LD,
              BD = Math.max(RD + 1, wD),
              GD = Math.min(RD + sD.height, LD) - 1;
            if (KD = Math.min(KD, LD), fD) {
              ID && DD.set(gD - zD, RD - wD, AD - pD, UD.trunkBaseId);
              for (let sD = BD; sD <= GD; sD++) DD.set(gD - zD, sD - wD, AD - pD, UD.trunkBlockId)
            }
            const hD = sD.vineDir;
            if (-1 === hD) return;
            let nD, MD = 0,
              OD = 0;
            0 === hD ? (MD = -1, nD = this.blockMetadata["Vines|meta|rot4"].id) : 1 === hD ? (OD = 1, nD = this.blockMetadata.Vines.id) : 2 === hD ? (MD = 1, nD = this.blockMetadata["Vines|meta|rot2"].id) : 3 === hD && (OD = -1, nD = this.blockMetadata["Vines|meta|rot3"].id);
            const JD = gD + MD,
              ED = AD + OD;
            if (!(JD < zD || JD >= rD || ED < pD || ED >= cD)) {
              ID && DD.set(JD - zD, RD - wD, ED - pD, nD);
              for (let sD = BD; sD < KD; sD++) DD.set(JD - zD, sD - wD, ED - pD, nD)
            }
          }
          getAllBlocksForTree(DD) {
            const zD = this.CI >> 1,
              wD = DD.treeX - zD,
              pD = DD.trunkBase,
              sD = DD.treeZ - zD,
              KD = [],
              rD = new Iz(KD, wD, pD, sD);
            return this.addTreesToChunk(rD, wD, pD, sD, [DD]), KD
          }
        }
        class Iz {
          constructor(DD, zD, wD, pD) {
            this.treeBlocks = DD, this.startX = zD, this.startY = wD, this.startZ = pD
          }
          set(DD, zD, wD, pD) {
            this.treeBlocks.push({
              x: DD + this.startX,
              y: zD + this.startY,
              z: wD + this.startZ,
              id: pD
            })
          }
        }
        var Bz = wD(39698);
        let Gz = null;
        class hz {
          constructor(DD, zD, wD, KD, rD, LD, cD, gD) {
            this.biomeSelector = DD, this.noWaterHeightmapGenerator = zD, this.hydrology = wD, this.lakeRadiusNoiseModifier = KD, this.seed = rD, this.needOutsideWaterDist = cD, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, Gz || (Gz = new Bz.e("scattered lakes", gD ? 4e3 : 500, 6e4)), this.lakes = Gz.partition(), this.pointGenerator = new sD.c("oasisLake", this.distApart, !1, !0, `${rD}oasisLake`, 6, LD), this.lakeRadiusNoiseAmplitude = (0, pD.D)(KD)
          }
          getWaterGenInfo(DD, zD, wD) {
            const sD = this.maxRadius + wD,
              KD = sD * sD;
            let rD, LD = null,
              cD = 0,
              gD = 0,
              RD = 1e4;
            for (const AD of this.pointGenerator.getPointsAroundPoint(DD, zD)) {
              if ((0, pD.M)(AD, DD, zD) > KD) continue;
              const wD = this.getLakeAtOrigin(AD);
              if (null === wD) continue;
              void 0 === rD && (rD = this.lakeRadiusNoiseModifier.getOctaves(DD, zD) + this.lakeRadiusNoiseAmplitude);
              const sD = (0, pD.J)(wD.origin, DD, zD),
                UD = rD * (wD.radius / this.maxRadius),
                fD = wD.radius - UD,
                ID = sD - fD;
              ID >= RD || (RD = ID, LD = wD, cD = sD, gD = fD)
            }
            return null === LD ? null : {
              distFromWater: cD,
              waterRadius: gD,
              waterHeight: LD.waterHeight,
              waterbedHeight: LD.bedHeight,
              isLake: !0,
              needOutsideWaterDist: this.needOutsideWaterDist
            }
          }
          getLakeAtOrigin(DD) {
            const zD = this.lakes.get(DD[0], DD[1]);
            if (!(0, RD.B)(zD)) return zD.lake;
            const wD = this.buildLake(DD);
            return this.lakes.set(DD[0], DD[1], {
              lake: wD
            }), wD
          }
          buildLake(DD) {
            const zD = this.biomeSelector.generate(DD[0], DD[1]);
            if (!zD[0].biome.hasScatteredLakes) return null;
            const {
              minRadius: wD,
              maxRadius: pD,
              minGapFromHydrologyWater: sD
            } = this, KD = new UD.g(`${DD[0]}|${DD[1]}${this.seed}oasisLake`), rD = this.hydrology.getHydrologyWaterGenInfo(DD[0], DD[1]), LD = Math.floor(rD.distFromWater - rD.waterRadius - sD);
            if (LD < wD) return null;
            const cD = Math.min(wD + Math.floor(KD.next() * (pD - wD + 1)), LD),
              gD = Math.floor(this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(DD[0], DD[1], zD) - 7);
            return {
              origin: [DD[0], DD[1]],
              radius: cD,
              waterHeight: gD,
              bedHeight: Math.floor(gD - (4 + .35 * cD))
            }
          }
        }
        class nz {
          constructor() {
            this.hasLake = !1, this.lakeCreationHasBeenAttempted = !1, this.lakeWaterHeight = 0, this.lakeRadius = 0, this.lakeBedHeight = 0
          }
        }
        let Mz = null;
        class Oz {
          constructor(DD, zD, wD, sD, KD, rD, LD, cD) {
            this.biomeSelector = DD, this.noWaterHeightmapGenerator = zD, this.needOutsideWaterBodyDist = rD, this.RD = cD, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
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
            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Mz || (Mz = new Bz.e("water cells", LD ? 800 : 60, 6e4)), this.waterBodyInfos = Mz.partition();
            const gD = Math.max(this.lakeSettings.maxRadius, this.maxRiverSettings.width / 2 + this.widthOffset) + rD + KD;
            this.cellCenterMaxOffset = this.gridSize / 2 - gD, this.seed = wD, this.lakeRadiusNoiseModifier = new pD.j([{
              amplitude: 10,
              frequency: 1 / 55
            }, {
              amplitude: 4,
              frequency: .04
            }], `${wD}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, pD.D)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new hz(DD, zD, this, this.lakeRadiusNoiseModifier, wD, sD, rD, LD)
          }
          getInfoNeededForWaterGen(DD, zD) {
            let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!this.RD) return Ez(this.needOutsideWaterBodyDist);
            const pD = this.getHydrologyWaterGenInfo(DD, zD);
            if (!wD) return pD;
            const sD = this.scatteredLakes.getWaterGenInfo(DD, zD, this.needOutsideWaterBodyDist);
            return null === sD || Jz(pD) <= Jz(sD) ? pD : sD
          }
          columnMayHaveScatteredLakes(DD, zD, wD) {
            for (const {
                biome: pD
              }
              of DD)
              if (pD.hasScatteredLakes) return !0;
            return this.biomeSelector.regionMayHaveScatteredLakes(zD, wD)
          }
          getDistToScatteredLakeEdge(DD, zD, wD) {
            const pD = this.scatteredLakes.getWaterGenInfo(DD, zD, wD);
            return null === pD ? 1e4 : Jz(pD)
          }
          getHydrologyWaterGenInfo(DD, zD) {
            const wD = [DD, zD],
              sD = this.getWaterInfo(DD, zD, !0);
            let KD = 1e4,
              rD = 0,
              LD = 0,
              cD = 0,
              gD = 0,
              RD = 0,
              AD = 0;
            if (sD.downhill) {
              const {
                HR: DD,
                fracAlong: zD,
                lineSegmentLength: UD
              } = (0, pD.A)(wD, sD.origin, sD.downhill.origin);
              rD = Math.floor(DD);
              let fD = sD.incomingFlux;
              if (fD += zD * sD.selfFlux, cD = Math.min(1, fD / this.maxRiverSettings.atFlux), LD = Math.max(1, Math.ceil(cD * this.maxRiverSettings.width)), KD = rD - LD / 2, RD = sD.originNoWaterHeight + -3, sD.downhill.lakeInfo.hasLake) {
                AD = sD.downhill.lakeInfo.lakeWaterHeight;
                const DD = UD - sD.downhill.lakeInfo.lakeRadius,
                  wD = UD * zD;
                gD = Math.min(1, wD / DD)
              } else AD = sD.downhill.originNoWaterHeight + -3, gD = zD
            }
            for (const UD of sD.uphills) {
              const {
                HR: DD,
                fracAlong: zD,
                lineSegmentLength: fD
              } = (0, pD.A)(wD, UD.origin, sD.origin), ID = Math.floor(DD);
              let BD = UD.incomingFlux;
              BD += zD * UD.selfFlux;
              const GD = Math.min(1, BD / this.maxRiverSettings.atFlux),
                hD = Math.max(1, Math.ceil(GD * this.maxRiverSettings.width)),
                nD = ID - hD / 2;
              if (nD < KD)
                if (KD = nD, rD = ID, cD = GD, LD = hD, RD = UD.originNoWaterHeight + -3, sD.lakeInfo.hasLake) {
                  AD = sD.lakeInfo.lakeWaterHeight;
                  const DD = fD - sD.lakeInfo.lakeRadius,
                    wD = fD * zD;
                  gD = Math.min(1, wD / DD)
                } else AD = sD.originNoWaterHeight + -3, gD = zD
            }
            if (1e4 !== KD) {
              let wD = 1e4,
                UD = 0;
              if (sD.lakeInfo.hasLake) {
                const KD = sD.lakeInfo;
                let rD = this.lakeRadiusNoiseModifier.getOctaves(DD, zD);
                rD += this.lakeRadiusNoiseAmplitude;
                rD *= KD.lakeRadius / this.lakeSettings.maxRadius, UD = KD.lakeRadius - rD, wD = (0, pD.J)(sD.origin, DD, zD) - UD
              }
              const fD = Math.floor(AD + (RD - AD) * (1 - gD)),
                ID = fD - (Math.ceil(10 * cD) + 2);
              if (KD < wD) {
                return {
                  distFromWater: rD,
                  waterRadius: (LD + this.widthOffset) / 2,
                  waterHeight: fD,
                  waterbedHeight: ID,
                  isLake: !1,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              } {
                const wD = (0, pD.J)(sD.origin, DD, zD),
                  KD = sD.lakeInfo;
                return {
                  distFromWater: wD,
                  waterRadius: UD,
                  waterHeight: KD.lakeWaterHeight,
                  waterbedHeight: KD.lakeBedHeight,
                  isLake: !0,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              }
            }
            return Ez(this.needOutsideWaterBodyDist)
          }
          getWaterInfo(DD, zD, wD) {
            const pD = Math.floor(DD / this.gridSize),
              sD = Math.floor(zD / this.gridSize),
              KD = this.getCellInfo(pD, sD);
            if (KD.uphills || this.fillInUphillInfo(pD, sD, KD), KD.downhill || KD.lakeInfo.lakeCreationHasBeenAttempted || (this.fillInLakeInfo(KD), KD.lakeInfo.lakeCreationHasBeenAttempted = !0), wD && KD.downhill) {
              const DD = this.getWaterInfo(KD.downhill.origin[0], KD.downhill.origin[1], !1);
              KD.downhill.lakeInfo = DD.lakeInfo
            }
            return KD
          }
          getCellInfo(DD, zD) {
            if (DD === this.lastReadInfo.cellX && zD === this.lastReadInfo.cellZ) return this.lastReadInfo.info;
            const wD = this.waterBodyInfos.get(DD, zD);
            if (!(0, RD.B)(wD)) return this.lastReadInfo.cellX = DD, this.lastReadInfo.cellZ = zD, this.lastReadInfo.info = wD, wD;
            const pD = this.getCellOrigin(DD, zD),
              sD = this.biomeSelector.generate(pD[0], pD[1]),
              KD = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(pD[0], pD[1], sD),
              rD = {
                origin: pD,
                originNoWaterHeight: KD,
                downhill: this.getDownhillFromCell(DD, zD, KD),
                uphills: null,
                incomingFlux: null,
                selfFlux: this.getRainfall(pD[0], pD[1]),
                lakeInfo: new nz
              };
            return this.lastReadInfo.cellX = DD, this.lastReadInfo.cellZ = zD, this.lastReadInfo.info = rD, this.waterBodyInfos.set(DD, zD, rD), rD
          }
          fillInUphillInfo(DD, zD, wD) {
            const pD = this.getUphillsFromCell(DD, zD);
            let sD = 0;
            for (const {
                incomingFlux: KD,
                selfFlux: rD
              }
              of pD) sD += KD + rD;
            wD.uphills = pD, wD.incomingFlux = sD
          }
          getUphillsFromCell(DD, zD) {
            const wD = [];
            for (let KD = -1; KD <= 1; KD++)
              for (let rD = -1; rD <= 1; rD++) {
                var pD, sD;
                const LD = DD + KD,
                  cD = zD + rD,
                  gD = Math.abs(KD) + Math.abs(rD);
                if (2 === gD || 0 === gD) continue;
                const RD = this.getCellInfo(LD, cD);
                (null === (pD = RD.downhill) || void 0 === pD ? void 0 : pD.cell[0]) === DD && (null === (sD = RD.downhill) || void 0 === sD ? void 0 : sD.cell[1]) === zD && (RD.uphills || this.fillInUphillInfo(LD, cD, RD), wD.push({
                  incomingFlux: RD.incomingFlux,
                  selfFlux: RD.selfFlux,
                  origin: RD.origin,
                  originNoWaterHeight: RD.originNoWaterHeight
                }))
              }
            return wD
          }
          getDownhillFromCell(DD, zD, wD) {
            const pD = {
              cell: [0, 0],
              origin: null,
              originNoWaterHeight: 0,
              lakeInfo: new nz
            };
            let sD = -1;
            for (let KD = -1; KD <= 1; KD++)
              for (let rD = -1; rD <= 1; rD++) {
                const LD = DD + KD,
                  cD = zD + rD,
                  gD = Math.abs(KD) + Math.abs(rD);
                if (2 === gD || 0 === gD) continue;
                const RD = this.getCellOrigin(LD, cD),
                  AD = this.biomeSelector.generate(RD[0], RD[1]),
                  UD = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(RD[0], RD[1], AD),
                  fD = wD - UD;
                fD > 0 && fD > sD && (sD = fD, pD.cell[0] = LD, pD.cell[1] = cD, pD.origin = RD, pD.originNoWaterHeight = UD)
              }
            return -1 !== sD ? pD : null
          }
          getCellOrigin(DD, zD) {
            const wD = DD * this.gridSize + this.gridSize / 2,
              pD = zD * this.gridSize + this.gridSize / 2,
              sD = new UD.g(`${DD}${zD}${this.seed}riverCell`);
            return [wD + Math.floor(sD.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset), pD + Math.floor(sD.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset)]
          }
          fillInLakeInfo(DD) {
            const zD = DD.lakeInfo,
              wD = DD.incomingFlux + DD.selfFlux;
            if (wD < this.lakeSettings.noLakeFluxCutoff) return;
            zD.hasLake = !0;
            const pD = wD / this.lakeSettings.maxRadiusAtFlux,
              sD = this.lakeSettings.minRadius + Math.ceil(pD * (this.lakeSettings.maxRadius - this.lakeSettings.minRadius));
            zD.lakeRadius = sD, zD.lakeWaterHeight = Math.floor(DD.originNoWaterHeight - 7);
            const KD = 4 + .35 * sD;
            zD.lakeBedHeight = Math.floor(zD.lakeWaterHeight - KD)
          }
          getRainfall(DD, zD) {
            return 100
          }
        }

        function Jz(DD) {
          let {
            distFromWater: zD,
            waterRadius: wD
          } = DD;
          return zD - wD
        }

        function Ez(DD) {
          return {
            distFromWater: 1e4,
            waterRadius: 0,
            waterHeight: 0,
            waterbedHeight: 0,
            isLake: !1,
            needOutsideWaterDist: DD
          }
        }
        const Qz = [{
          blockName: "Moonstone Ore",
          radius: 2,
          WD: 40,
          LD: -85,
          cD: -85,
          ND: .5
        }, {
          blockName: "Diamond Ore",
          radius: 2,
          WD: 13,
          LD: -100,
          cD: -85,
          ND: .28
        }, {
          blockName: "Gold Ore",
          radius: 2,
          WD: 10,
          LD: -100,
          cD: -75,
          ND: .4
        }, {
          blockName: "Iron Ore",
          radius: 2,
          WD: 5,
          LD: -80,
          cD: 15,
          ND: .5
        }, {
          blockName: "Coal Ore",
          radius: 3,
          WD: 4,
          LD: -60,
          cD: 40,
          ND: .5
        }];
        class Xz {
          constructor(DD, zD, wD, pD) {
            this.seed = zD, this.CI = wD, this.iD = void 0, this.iD = pD.map((pD => {
              const KD = new sD.c("ore", pD.WD, !1, !0, `${zD}${pD.blockName}`, 20, wD, null, !0);
              return KD.assertReachableFromChunkCentre(wD, pD.radius), {
                fR: (0, RD.w)(pD.blockName, DD),
                radius: pD.radius,
                WD: pD.WD,
                LD: pD.LD,
                cD: pD.cD,
                ND: pD.ND,
                pointGenerator: KD
              }
            }))
          }
          getOreBlocksForChunk(DD, zD) {
            const wD = [],
              sD = new UD.g(`${DD}${zD}${this.seed}oreExists`);
            for (const KD of this.iD) {
              const rD = KD.pointGenerator.getPointsAroundPoint(DD + this.CI / 2, zD + this.CI / 2),
                LD = DD + this.CI + KD.radius,
                cD = DD - KD.radius - 1,
                gD = zD + this.CI + KD.radius,
                RD = zD - KD.radius - 1;
              for (const AD of rD) {
                if (AD[0] >= LD || AD[0] <= cD || AD[1] >= gD || AD[1] <= RD) continue;
                const rD = new UD.g(`${AD[0]}${AD[1]}${this.seed}ore`),
                  fD = Math.floor(rD.next() * (KD.cD + 1 - KD.LD)) + KD.LD,
                  ID = Math.max(DD, AD[0] - KD.radius),
                  BD = Math.min(DD + this.CI - 1, AD[0] + KD.radius),
                  GD = Math.max(zD, AD[1] - KD.radius),
                  hD = Math.min(zD + this.CI - 1, AD[1] + KD.radius);
                for (let DD = ID; DD <= BD; DD++)
                  for (let zD = GD; zD <= hD; zD++) {
                    (0, pD.F)(AD, DD, zD) > KD.radius || (sD.next() >= KD.ND || wD.push(DD, fD, zD, KD.fR))
                  }
              }
            }
            return new Int32Array(wD)
          }
          addOresToChunk(DD, zD, wD, pD, sD, rD, LD) {
            const cD = wD + this.CI,
              gD = LD.length;
            for (let RD = 0; RD < gD; RD += 4) {
              const gD = LD[RD + 1];
              if (gD < wD || gD >= cD) continue;
              const AD = LD[RD],
                UD = LD[RD + 2];
              if (gD < rD.get(AD, UD, KD.h.GroundHeight) - sD) {
                const sD = LD[RD + 3];
                DD.set(AD - zD, gD - wD, UD - pD, sD)
              }
            }
          }
        }
        var Vz = wD(39701);
        const Pz = [0, -1, 0],
          Cz = [0, 1, 0],
          xz = [-1, 0, 0],
          Tz = [1, 0, 0],
          bz = [0, 0, -1],
          jz = [0, 0, 1];

        function dz(DD, zD) {
          const {
            OD: wD,
            VD: pD,
            shallowClusterY: sD,
            deepClusterY: KD
          } = DD;
          if (void 0 === pD || void 0 === sD || void 0 === KD) return wD;
          return wD + (pD - wD) * Math.max(0, Math.min(1, (sD - zD) / (sD - KD)))
        }

        function Sz(DD, zD, wD) {
          const pD = [];
          return wD.hD && pD.push({
            offset: Pz,
            fR: DD[zD].id
          }), wD.nD && pD.push({
            offset: xz,
            fR: DD[`${zD}|meta|rot2|side`].id
          }, {
            offset: Tz,
            fR: DD[`${zD}|meta|rot4|side`].id
          }, {
            offset: bz,
            fR: DD[`${zD}|meta|rot1|side`].id
          }, {
            offset: jz,
            fR: DD[`${zD}|meta|rot3|side`].id
          }), wD.MD && pD.push({
            offset: Cz,
            fR: DD[`${zD}|meta|rot1|top`].id
          }), pD
        }

        function iz(DD, zD) {
          return null === zD ? function(DD) {
            return [{
              seedPrefix: "crystal",
              anchorOptions: Sz(DD, "Crystal", {
                hD: !0,
                nD: !0,
                MD: !0
              }),
              clusterBoxSize: 4,
              JD: .8,
              ED: 0,
              OD: .12,
              VD: .25,
              shallowClusterY: -20,
              deepClusterY: -85
            }, {
              seedPrefix: "mushroom",
              anchorOptions: Sz(DD, "Glowing Mushroom", {
                hD: !0,
                nD: !0,
                MD: !1
              }),
              clusterBoxSize: 4,
              JD: .7,
              ED: 2,
              OD: .58
            }]
          }(DD) : zD.map((zD => function(DD, zD) {
            const wD = zD.QD;
            return {
              seedPrefix: zD.blockName,
              anchorOptions: Sz(DD, zD.blockName, {
                hD: zD.hD,
                nD: zD.nD,
                MD: zD.MD
              }),
              clusterBoxSize: 4,
              JD: zD.JD,
              ED: zD.ED,
              OD: zD.OD,
              VD: null === wD || void 0 === wD ? void 0 : wD.VD,
              shallowClusterY: null === wD || void 0 === wD ? void 0 : wD.PD,
              deepClusterY: null === wD || void 0 === wD ? void 0 : wD.CD
            }
          }(DD, zD)))
        }
        class lz {
          constructor(DD) {
            this.caveHeightmapVals = DD
          }
          generate(DD, zD) {
            return xD(DD, zD, this.caveHeightmapVals, !1)
          }
        }
        class Wz {
          constructor(DD, zD, wD, pD) {
            this.caveHeightmapVals = DD, this.heightmapVals = zD, this.surfaceMargin = wD, this.minCaveHeight = pD
          }
          generate(DD, zD) {
            const wD = xD(DD, zD, this.caveHeightmapVals, !0);
            if (0 === wD.length) return wD;
            const pD = this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) - this.surfaceMargin,
              {
                minCaveHeight: sD
              } = this,
              rD = [];
            for (const KD of wD) {
              const DD = Math.min(KD.ceilingY, pD);
              DD - KD.floorY + 1 < sD || rD.push(DD === KD.ceilingY ? KD : {
                floorY: KD.floorY,
                ceilingY: DD
              })
            }
            return rD
          }
        }
        class Nz {
          constructor(DD, zD, wD, sD) {
            this.heightmapVals = DD, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new pD.p(new lz(zD)), this.decoratableCavesCache = new pD.p(new Wz(zD, DD, wD, sD))
          }
          getAllCaves(DD, zD) {
            return this.allCavesCache.getOrGenerate(DD, zD)
          }
          getGroundHeight(DD, zD) {
            return this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight)
          }
          getDecoratableCaves(DD, zD) {
            return this.decoratableCavesCache.getOrGenerate(DD, zD)
          }
        }

        function Zz(DD, zD, wD, pD) {
          if (zD > pD.getGroundHeight(DD, wD)) return !1;
          const sD = pD.getAllCaves(DD, wD);
          for (const KD of sD)
            if (zD >= KD.floorY && zD <= KD.ceilingY) return !1;
          return !0
        }

        function yz(DD, zD, wD, pD, sD, KD) {
          let rD = null;
          const LD = [];
          for (const cD of pD) {
            Zz(DD + cD.offset[0], zD + cD.offset[1], wD + cD.offset[2], KD) && (cD.offset === Pz ? rD = cD : LD.push(cD))
          }
          return null !== rD ? rD : 0 === LD.length ? null : LD[Math.floor(sD * LD.length)]
        }
        class kz {
          constructor(DD, zD, wD) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.CI = zD, this.seed = wD, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
            const KD = iz(DD, pD);
            let rD = 0,
              LD = 0;
            for (const sD of KD) {
              var cD;
              if (!Number.isInteger(sD.clusterBoxSize) || sD.clusterBoxSize < 2 || sD.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${sD.seedPrefix}" has invalid clusterBoxSize (${sD.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
              const DD = sD.clusterBoxSize >> 1;
              DD > rD && (rD = DD), LD += Math.max(sD.OD, null !== (cD = sD.VD) && void 0 !== cD ? cD : sD.OD)
            }
            if (LD > 1) throw new Error(`Cave decoration cluster chances sum to ${LD} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
            this.pointsGen = new sD.c("caveDeco", 10, !1, !0, wD, 4, zD, null, !0), this.pointsGen.assertReachableFromChunkCentre(zD, rD), this.configs = KD, this.maxHalfBox = rD
          }
          getDecorationsForChunkColumn(DD, zD, wD, pD) {
            const sD = [],
              KD = this.CI,
              rD = DD + KD,
              LD = zD + KD,
              cD = new Nz(wD, pD, 4, 3),
              gD = DD + (KD >> 1),
              RD = zD + (KD >> 1),
              AD = this.pointsGen.getPointsAroundPoint(gD, RD),
              UD = this.maxHalfBox;
            for (const fD of AD) {
              const wD = fD[0],
                pD = fD[1];
              wD + UD <= DD || wD - UD >= rD || pD + UD <= zD || pD - UD >= LD || this.collectClusterPlacements(wD, pD, DD, rD, zD, LD, cD, sD)
            }
            return sD
          }
          static addCaveDecorationsToChunk(DD, zD, wD, pD, sD, KD) {
            const rD = wD + sD;
            for (const LD of KD) LD.y >= wD && LD.y < rD && DD.set(LD.x - zD, LD.y - wD, LD.z - pD, LD.fR)
          }
          collectClusterPlacements(DD, zD, wD, pD, sD, KD, rD, LD) {
            const cD = rD.getDecoratableCaves(DD, zD);
            if (0 === cD.length) return;
            const gD = new UD.g(`${this.seed}|${DD}|${zD}|cluster`),
              RD = gD.next(),
              AD = gD.next(),
              fD = gD.next(),
              ID = cD[Math.floor(RD * cD.length)],
              BD = ID.floorY + Math.floor(AD * (ID.ceilingY - ID.floorY + 1));
            let GD = 0,
              hD = null;
            for (const UD of this.configs)
              if (GD += dz(UD, BD), fD < GD) {
                hD = UD;
                break
              } if (null === hD) return;
            const nD = [];
            if (this.scatterClusterCells(DD, BD, zD, hD, rD, gD, nD), !(nD.length < hD.ED))
              for (const UD of nD) UD.x >= wD && UD.x < pD && UD.z >= sD && UD.z < KD && LD.push(UD)
          }
          scatterClusterCells(DD, zD, wD, pD, sD, KD, rD) {
            const {
              clusterBoxSize: LD,
              JD: cD,
              anchorOptions: gD
            } = pD, RD = LD >> 1, AD = DD - RD, UD = zD - RD, fD = wD - RD;
            for (let ID = 0; ID < RD; ID++)
              for (let DD = 0; DD < RD; DD++)
                for (let zD = 0; zD < RD; zD++) {
                  const wD = KD.next(),
                    pD = KD.next(),
                    LD = KD.next();
                  if (wD >= cD) continue;
                  const RD = Math.floor(8 * pD),
                    BD = AD + 2 * ID + (1 & RD),
                    GD = UD + 2 * DD + (RD >> 1 & 1),
                    hD = fD + 2 * zD + (RD >> 2 & 1);
                  if (!mz(BD, GD, hD, sD)) continue;
                  const nD = yz(BD, GD, hD, gD, LD, sD);
                  null !== nD && rD.push({
                    x: BD,
                    y: GD,
                    z: hD,
                    fR: nD.fR
                  })
                }
          }
        }

        function mz(DD, zD, wD, pD) {
          const sD = pD.getDecoratableCaves(DD, wD);
          for (const KD of sD)
            if (zD >= KD.floorY && zD <= KD.ceilingY) return !0;
          return !1
        }
        class ez {
          constructor(DD, zD, wD, pD, KD, rD, LD) {
            this.prefabGenerator = pD, this.seed = void 0, this.CI = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = LD, this.CI = DD, this.biomeSelector = zD, this.treeGenerator = wD, this.blockMetadata = KD, this.oreGenerator = rD, this.bedrockId = KD.Bedrock.id, this.waterId = KD.Water.id, this.sandId = KD.Sand.id, this.clayId = KD.Clay.id, this.chalkId = KD.Chalk.id, this.grassBlockId = KD["Grass Block"].id, this.dirtId = KD.Dirt.id, this.riverbedFeatureGenerator = new sD.c("clay", 50, !1, !0, LD, 4, DD, null, !0)
          }
          fillChunk(DD, zD, wD, sD, LD, gD, RD, fD, ID, BD, GD, hD, nD) {
            if (wD + this.CI <= rD.q.bedrockLevel) return {
              specialBlocks: []
            };
            const MD = new AD.d,
              OD = nD.minTerrainHeight,
              JD = nD.maxTerrainHeight,
              ED = nD.hasWater;
            if (JD >= wD && OD < wD + this.CI)
              for (let pD = zD; pD < zD + this.CI; pD++)
                for (let cD = sD; cD < sD + this.CI; cD++) {
                  const gD = BD.biomeIds.get(pD, cD),
                    RD = this.biomeSelector.getBiomeFromId(gD),
                    AD = LD.get(pD, cD, KD.h.GroundHeight);
                  if (AD >= wD && AD < wD + this.CI) {
                    const gD = LD.get(pD, cD, KD.h.IsLake) === rD.h ? RD.getDryBedBlock(pD, AD, cD) : RD.getTopsoilBlock(pD, AD, cD);
                    DD.set(pD - zD, AD - wD, cD - sD, gD)
                  }
                }
            if (JD + 1 >= wD && OD - 4 < wD + this.CI)
              for (let pD = zD; pD < zD + this.CI; pD++)
                for (let rD = sD; rD < sD + this.CI; rD++) {
                  const cD = BD.biomeIds.get(pD, rD),
                    gD = this.biomeSelector.getBiomeFromId(cD),
                    RD = LD.get(pD, rD, KD.h.GroundHeight),
                    AD = Math.min(RD, wD + this.CI);
                  for (let KD = Math.max(RD - 4, wD); KD < AD; KD++) DD.set(pD - zD, KD - wD, rD - sD, gD.getLowsoilBlockType(pD, KD, rD, RD))
                }
            const QD = nD.banks;
            for (let pD = 0; pD < QD.length; pD += 3) {
              const zD = QD[pD],
                sD = QD[pD + 1] - wD,
                KD = QD[pD + 2];
              for (let wD = Math.max(sD - 4, 0); wD < Math.min(sD, this.CI); wD++) DD.set(zD, wD, KD, this.dirtId);
              sD >= 0 && sD < this.CI && DD.set(zD, sD, KD, this.grassBlockId)
            }
            if (JD - 4 >= wD) {
              const pD = this.biomeSelector.anyStrata;
              for (let rD = zD; rD < zD + this.CI; rD++)
                for (let cD = sD; cD < sD + this.CI; cD++) {
                  const gD = BD.stoneTypeIds.get(rD, cD),
                    RD = LD.get(rD, cD, KD.h.GroundHeight),
                    AD = Math.min(RD - 4, wD + this.CI),
                    UD = pD ? this.biomeSelector.getBiomeFromId(BD.biomeIds.get(rD, cD)) : null,
                    fD = null !== UD && UD.strataDepth > 0 ? RD - 4 - UD.strataDepth : AD;
                  for (let pD = wD; pD < AD; pD++) {
                    const KD = pD >= fD ? UD.getStrataBlock(rD, pD, cD, RD) : 0;
                    DD.set(rD - zD, pD - wD, cD - sD, 0 !== KD ? KD : gD)
                  }
                }
            }
            if (JD - 4 >= wD && this.oreGenerator.addOresToChunk(DD, zD, wD, sD, 4, LD, ID), JD >= wD && (cD.e.addCavesToChunk(DD, zD, wD, sD, LD, fD), kz.addCaveDecorationsToChunk(DD, zD, wD, sD, this.CI, hD)), rD.q.bedrockLevel >= wD && rD.q.bedrockLevel < wD + this.CI)
              for (let pD = zD; pD < zD + this.CI; pD++)
                for (let KD = sD; KD < sD + this.CI; KD++) DD.set(pD - zD, rD.q.bedrockLevel - wD, KD - sD, this.bedrockId);
            this.addSurfaceBlocks(DD, wD, nD.flora);
            for (const pD of RD)
              for (let KD = zD; KD < zD + this.CI; KD++)
                for (let rD = wD; rD < wD + this.CI; rD++)
                  for (let LD = sD; LD < sD + this.CI; LD++) {
                    const cD = this.prefabGenerator.getBlockFromPrefabAtPoint(KD, rD, LD, pD, MD);
                    0 !== cD && DD.set(KD - zD, rD - wD, LD - sD, cD === SD.GUARANTEED_AIR ? 0 : cD)
                  }
            JD + this.treeGenerator.maxTreeHeight >= wD && this.treeGenerator.addTreesToChunk(DD, zD, wD, sD, gD);
            const XD = nD.water;
            for (let pD = 0; pD < XD.length; pD += 5) {
              const zD = XD[pD],
                sD = XD[pD + 1],
                KD = XD[pD + 2] - wD,
                rD = XD[pD + 3] - wD;
              for (let wD = Math.max(KD, 0); wD < Math.min(rD, this.CI); wD++) DD.set(zD, wD, sD, this.waterId);
              rD >= 0 && rD < this.CI && DD.set(zD, rD, sD, XD[pD + 4])
            }
            let VD, CD, xD;
            if (this.addSurfaceBlocks(DD, wD, nD.lilyPads), ED && JD >= wD && OD < wD + this.CI)
              for (let cD = zD; cD < zD + this.CI; cD++)
                for (let gD = sD; gD < sD + this.CI; gD++) {
                  const RD = LD.get(cD, gD, KD.h.WaterHeight),
                    AD = LD.get(cD, gD, KD.h.GroundHeight);
                  if (RD !== rD.n && AD >= wD && AD < wD + this.CI)
                    if (RD === AD) DD.set(cD - zD, AD - wD, gD - sD, this.sandId);
                    else {
                      const KD = this.riverbedFeatureGenerator.getClosestPoint(cD, gD);
                      if ((0, pD.M)(KD, cD, gD) < 100) VD === KD[0] && CD === KD[1] || (VD = KD[0], CD = KD[1], xD = new UD.g(`${this.seed}${VD}${CD}`).next() < .3 ? this.chalkId : this.clayId), DD.set(cD - zD, AD - wD, gD - sD, xD), AD - 1 >= wD && DD.set(cD - zD, AD - 1 - wD, gD - sD, xD), AD - 2 >= wD && DD.set(cD - zD, AD - 2 - wD, gD - sD, xD);
                      else {
                        const pD = BD.biomeIds.get(cD, gD),
                          KD = this.biomeSelector.getBiomeFromId(pD);
                        DD.set(cD - zD, AD - wD, gD - sD, KD.getLowsoilBlockType(cD, AD, gD, AD))
                      }
                    }
                }
            for (const pD of GD)
              for (let KD = zD; KD < zD + this.CI; KD++)
                for (let rD = wD; rD < wD + this.CI; rD++)
                  for (let LD = sD; LD < sD + this.CI; LD++) {
                    const cD = PD.b.getBlockFromFixedPointPrefab(KD, rD, LD, pD);
                    0 !== cD && DD.set(KD - zD, rD - wD, LD - sD, cD)
                  }
            const TD = [];
            for (const pD of MD) {
              const KD = pD.val;
              if (DD.get(pD.x - zD, pD.y - wD, pD.z - sD) !== KD.getBlockId()) continue;
              const rD = KD.generate(),
                LD = [pD.x, pD.y, pD.z];
              TD.push({
                pos: LD,
                ...rD
              })
            }
            return {
              specialBlocks: TD
            }
          }
          addSurfaceBlocks(DD, zD, wD) {
            for (let pD = 0; pD < wD.length; pD += 4) {
              const sD = wD[pD + 1] - zD;
              sD >= 0 && sD < this.CI && DD.set(wD[pD], sD, wD[pD + 2], wD[pD + 3])
            }
          }
        }
        class oz {
          constructor() {
            this.blocks = [], this.startY = 0
          }
          set(DD, zD, wD, pD) {
            return this.blocks.push(DD, this.startY + zD, wD, pD), pD
          }
        }
        class az {
          constructor(DD, zD, wD, pD) {
            this.CI = DD, this.biomeSelector = zD, this.seed = wD, this.random = new UD.g(""), this.lilyPadId = void 0, this.lilyPadId = pD["Lily Pad"].id
          }
          getInfoForChunkColumn(DD, zD, wD, pD, sD, LD) {
            const gD = [],
              RD = [],
              AD = [],
              UD = new oz;
            let fD = 1 / 0,
              ID = -1 / 0,
              BD = !1;
            for (let GD = DD; GD < DD + this.CI; GD++)
              for (let hD = zD; hD < zD + this.CI; hD++) {
                const nD = this.biomeSelector.getBiomeFromId(sD.biomeIds.get(GD, hD)),
                  MD = wD.getOrGenerate(GD, hD, KD.h.GroundHeight),
                  OD = wD.getOrGenerate(GD, hD, KD.h.WaterHeight);
                fD = Math.min(fD, MD), ID = Math.max(ID, MD);
                const JD = GD - DD,
                  ED = hD - zD;
                if (OD !== rD.n) {
                  BD = !0, MD < OD && gD.push(JD, ED, MD + 1, OD, nD.topwaterBlockType), nD.hasScatteredLakes && 1 === wD.getOrGenerate(GD, hD, KD.h.IsLake) && (this.random.reseed(`${GD}|${hD}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(GD, hD, wD) && AD.push(JD, OD + 1, ED, this.lilyPadId));
                  continue
                }
                let QD = nD.floraGenerator;
                if (nD.hasScatteredLakes && this.isBesideLake(GD, hD, wD) && (this.random.reseed(`${GD}|${hD}|${this.seed}oasisShore`), this.random.next() < .85 && (RD.push(JD, MD, ED), QD = this.biomeSelector.baseBiome.floraGenerator)), !cD.e.isInCave(GD, MD, hD, pD) && !PD.b.isWithinFixedPointPrefab(GD, hD, LD))
                  for (let wD = MD + 1; wD <= MD + nD.maxFloraHeight; wD += this.CI) UD.startY = wD, QD.addBiomeFloraToColumn(UD, DD, zD, GD, wD, hD, MD)
              }
            return {
              minTerrainHeight: fD,
              maxTerrainHeight: ID,
              hasWater: BD,
              water: new Int32Array(gD),
              banks: new Int32Array(RD),
              flora: new Int32Array(UD.blocks),
              lilyPads: new Int32Array(AD)
            }
          }
          isInsideWater(DD, zD, wD) {
            return wD.getOrGenerate(DD + 1, zD, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD - 1, zD, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD, zD + 1, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD, zD - 1, KD.h.WaterHeight) !== rD.n
          }
          isBesideLake(DD, zD, wD) {
            return this.isLakeWater(DD + 1, zD, wD) || this.isLakeWater(DD - 1, zD, wD) || this.isLakeWater(DD, zD + 1, wD) || this.isLakeWater(DD, zD - 1, wD)
          }
          isLakeWater(DD, zD, wD) {
            return wD.getOrGenerate(DD, zD, KD.h.WaterHeight) !== rD.n && 1 === wD.getOrGenerate(DD, zD, KD.h.IsLake)
          }
        }
        var uz = wD(39616);
        let vz = null;
        class tz {
          constructor(DD, zD, wD, sD, rD, LD, gD, RD, AD) {
            var UD, fD, ID, BD, GD, hD, nD;
            if (this.CI = DD, this.hashChunkContents = AD, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !vz) {
              const DD = rD ? 1750 : 125;
              vz = new Bz.e("chunk columns", DD, 4e4)
            }
            this.chunkColumnInfos = vz.partition(), this.caveGenerator = new cD.e(sD, DD, zD, null !== (UD = null === gD || void 0 === gD ? void 0 : gD.AD.fD) && void 0 !== UD ? UD : "Lava");
            const MD = new Xz(zD, sD, DD, null !== (fD = null === gD || void 0 === gD ? void 0 : gD.iD) && void 0 !== fD ? fD : [...Qz, ...null !== (ID = null === RD || void 0 === RD ? void 0 : RD.eD) && void 0 !== ID ? ID : []]),
              OD = {
                CI: DD,
                blockMetadata: zD,
                worldGenerator: this,
                seed: sD,
                biomeOpts: {
                  oreGenerator: MD
                }
              },
              JD = null !== (BD = null === gD || void 0 === gD ? void 0 : gD.xD) && void 0 !== BD ? BD : null,
              ED = null !== (GD = null === RD || void 0 === RD ? void 0 : RD.buildBiomes) && void 0 !== GD ? GD : null,
              QD = null !== JD ? (0, Vz.e)(JD, OD) : null !== ED ? this.buildTerrainBiomes(ED, OD) : (0, Vz.i)(OD);
            this.biomeSelector = new Vz.d(this, MD, sD, DD, zD, QD), this.treeGenerator = new fz(this, this.biomeSelector, DD, sD, zD), this.fixedPointPrefabTracker = new PD.b(LD, DD), this.prefabGenerator = new sz({
              seed: sD,
              CI: DD,
              blockMetadata: zD,
              itemMetadata: wD,
              typeSettings: {
                [KD.o.SURFACE]: {
                  densitySettings: {
                    [KD.l.MEDIUM]: {
                      minDistanceBetweenPrefabs: 100
                    },
                    [KD.l.HIGH]: {
                      minDistanceBetweenPrefabs: 50
                    },
                    [KD.l.VERY_HIGH]: {
                      minDistanceBetweenPrefabs: 25
                    }
                  }
                },
                [KD.o.UNDERGROUND]: {
                  densitySettings: {
                    [KD.l.MEDIUM]: {
                      minDistanceBetweenPrefabs: 80
                    },
                    [KD.l.HIGH]: null,
                    [KD.l.VERY_HIGH]: null
                  }
                }
              },
              prefabSize: this.prefabSize
            }), this.noWaterHeightmapGenerator = new uz.e((0, uz.i)(sD)), this.heightmapPerturb = new pD.j([{
              amplitude: 1,
              frequency: 1 / 14
            }, {
              amplitude: 5,
              frequency: 1 / 65
            }, {
              amplitude: 20,
              frequency: .004
            }], `${sD}HeightmapPerturb`);
            let XD = 0;
            for (const {
                amplitude: pD
              }
              of this.heightmapPerturb.customOctaves) XD += pD;
            this.waterBodyGenerator = new Oz(this.biomeSelector, this.noWaterHeightmapGenerator, sD, DD, XD, this.needOutsideWaterDist, rD, null === (hD = null === gD || void 0 === gD ? void 0 : gD.RD) || void 0 === hD || hD), this.caveDecorationGenerator = new kz(zD, DD, sD, null !== (nD = null === gD || void 0 === gD ? void 0 : gD.AD.BD) && void 0 !== nD ? nD : null), this.surfaceGenerator = new az(DD, this.biomeSelector, sD, zD), this.chunkFiller = new ez(DD, this.biomeSelector, this.treeGenerator, this.prefabGenerator, zD, MD, sD)
          }
          getChunk(DD, zD, wD, pD) {
            try {
              const {
                specialBlocks: sD
              } = this.getChunkInternal(DD, zD, wD, pD);
              return {
                hash: this.hashChunkContents(DD.data, JSON.stringify(sD)),
                specialBlocks: sD
              }
            } catch (sD) {
              return console.log(sD.stack), void console.error(sD.stack)
            }
          }
          getDistToLakeEdge(DD, zD, wD) {
            return this.waterBodyGenerator.getDistToScatteredLakeEdge(DD, zD, wD)
          }
          getOresForChunkColumn(DD, zD) {
            const wD = this.CI,
              pD = Math.floor(DD / wD) * wD,
              sD = Math.floor(zD / wD) * wD,
              KD = Math.floor(wD / 2);
            return this.getClosestBiomesForChunk(pD, sD).getOrGenerate(pD + KD, sD + KD)[0].biome.oreGenerator.getOreBlocksForChunk(pD, sD)
          }
          buildTerrainBiomes(DD, zD) {
            const wD = DD({
              ...zD,
              biomeAt: (DD, zD) => this.biomeSelector.getBiome(DD, zD).biome
            });
            if (0 === wD.length) throw new Error("A world-gen terrain must build at least one biome");
            const pD = new Map;
            for (const {
                biome: KD
              }
              of wD) {
              var sD;
              if ((null !== (sD = pD.get(KD.key)) && void 0 !== sD ? sD : KD) !== KD) throw new Error(`A world-gen terrain built two biomes keyed "${KD.key}"`);
              pD.set(KD.key, KD)
            }
            return [...wD]
          }
          getPrefabLootChests(DD, zD, wD, pD, sD) {
            const KD = new Map;
            for (const cD of this.prefabGenerator.getLootPrefabCentres(DD, zD, wD, pD, this.biomeSelector)) {
              var rD;
              if (void 0 !== sD && cD.prefab.name !== sD) continue;
              const DD = `${Math.floor(cD.x/this.CI)}|${Math.floor(cD.z/this.CI)}`,
                zD = null !== (rD = KD.get(DD)) && void 0 !== rD ? rD : [];
              zD.push(cD), KD.set(DD, zD)
            }
            const LD = [];
            for (const cD of KD.values()) {
              const DD = Math.floor(cD[0].x / this.CI) * this.CI,
                zD = Math.floor(cD[0].z / this.CI) * this.CI,
                wD = this.getClosestBiomesForChunk(DD, zD),
                {
                  nearestFixedPrefabInfoForChunk: pD
                } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(DD, zD),
                sD = this.getHeightMapVals(DD, zD, wD, pD),
                KD = this.caveGenerator.getCaveHeightmapVals(DD, zD, sD),
                rD = this.prefabGenerator.getPrefabsForChunk(DD, zD, sD, wD, KD, pD, this.biomeSelector);
              for (const gD of rD) {
                if (!cD.some((DD => DD.x === gD.centreX && DD.z === gD.centreZ && DD.prefab === gD.prefab))) continue;
                const DD = null !== gD.prefab.undergroundYInterval;
                for (const {
                    x: zD,
                    y: wD,
                    z: pD
                  }
                  of gD.chestLocationToQuality.entries()) LD.push({
                  x: zD,
                  y: wD,
                  z: pD,
                  underground: DD,
                  pD: gD.prefab.name
                })
              }
            }
            return LD
          }
          getChunkInternal(DD, zD, wD, pD) {
            const {
              biomeInfos: sD,
              heightmapVals: KD,
              caveHeightmapVals: rD,
              treesForChunk: LD,
              chunkPrefabs: cD,
              chunkOres: gD,
              decodedFixedPointPrefabsForChunk: RD,
              caveDecorations: AD,
              surface: UD
            } = this.getInfoForChunkColumn(zD, pD);
            return this.chunkFiller.fillChunk(DD, zD, wD, pD, KD, LD, cD, rD, gD, sD, RD, AD, UD)
          }
          getInfoForChunkColumn(DD, zD) {
            if (this.mostRecentlyAccessedChunkColumn && this.mostRecentlyAccessedChunkColumnPos[0] === DD && this.mostRecentlyAccessedChunkColumnPos[1] === zD) return this.mostRecentlyAccessedChunkColumn;
            const wD = this.chunkColumnInfos.get(DD, zD);
            if (wD) return this.mostRecentlyAccessedChunkColumnPos[0] = DD, this.mostRecentlyAccessedChunkColumnPos[1] = zD, this.mostRecentlyAccessedChunkColumn = wD, wD;
            const pD = this.getClosestBiomesForChunk(DD, zD),
              {
                nearestFixedPrefabInfoForChunk: sD,
                decodedFixedPointPrefabsForChunk: KD
              } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(DD, zD),
              rD = this.getHeightMapVals(DD, zD, pD, sD),
              LD = this.caveGenerator.getCaveHeightmapVals(DD, zD, rD),
              cD = this.prefabGenerator.getPrefabsForChunk(DD, zD, rD, pD, LD, sD, this.biomeSelector),
              gD = this.treeGenerator.getTreesForChunk(DD, zD, rD, pD, LD, cD, sD),
              RD = pD.getOrGenerate(DD + Math.floor(this.CI / 2), zD + Math.floor(this.CI / 2))[0].biome.oreGenerator.getOreBlocksForChunk(DD, zD),
              AD = this.caveDecorationGenerator.getDecorationsForChunkColumn(DD, zD, rD, LD),
              UD = this.biomeSelector.getBiomeInfoForChunkFill(DD, zD, pD),
              fD = this.surfaceGenerator.getInfoForChunkColumn(DD, zD, rD, LD, UD, sD),
              ID = {
                biomeInfos: UD,
                heightmapVals: rD.viewJustInnerChunk(),
                caveHeightmapVals: LD.viewJustInnerChunk(),
                treesForChunk: gD,
                chunkPrefabs: cD,
                chunkOres: RD,
                decodedFixedPointPrefabsForChunk: KD,
                caveDecorations: AD,
                surface: fD
              };
            return this.mostRecentlyAccessedChunkColumnPos[0] = DD, this.mostRecentlyAccessedChunkColumnPos[1] = zD, this.mostRecentlyAccessedChunkColumn = ID, this.chunkColumnInfos.set(DD, zD, ID), ID
          }
          getClosestBiomesForChunk(DD, zD) {
            return pD.t.create(this.CI, [DD, zD], this.biomeSelector)
          }
          getHeightMapVals(DD, zD, wD, sD) {
            const rD = new uz.b(wD, sD, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
            return pD.r.create(this.CI, [DD, zD], KD.h.NumFields, rD)
          }
        }
      },
      39625: (DD, zD, wD) => {
        wD.d(zD, {
          e: () => ZD,
          i: () => VD,
          j: () => QD,
          m: () => XD,
          p: () => bD,
          r: () => iD,
          t: () => TD,
          w: () => OD,
          A: () => MD,
          D: () => ED,
          F: () => BD,
          G: () => JD,
          J: () => nD,
          M: () => hD
        });
        var pD = wD(2839),
          sD = wD.n(pD);
        const KD = .5 * (Math.sqrt(3) - 1),
          rD = (3 - Math.sqrt(3)) / 6,
          LD = 1 / 3,
          cD = 1 / 6,
          gD = (Math.sqrt(5) - 1) / 4,
          RD = (5 - Math.sqrt(5)) / 20,
          AD = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
          UD = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
        const fD = class {
          constructor() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
            const zD = "function" == typeof DD ? DD : function(DD) {
              let zD = 0,
                wD = 0,
                pD = 0,
                sD = 1;
              const KD = function() {
                let DD = 4022871197;
                return function(zD) {
                  zD = zD.toString();
                  for (let wD = 0; wD < zD.length; wD++) {
                    DD += zD.charCodeAt(wD);
                    let pD = .02519603282416938 * DD;
                    DD = pD >>> 0, pD -= DD, pD *= DD, DD = pD >>> 0, pD -= DD, DD += 4294967296 * pD
                  }
                  return 2.3283064365386963e-10 * (DD >>> 0)
                }
              }();
              zD = KD(" "), wD = KD(" "), pD = KD(" "), zD -= KD(DD), zD < 0 && (zD += 1);
              wD -= KD(DD), wD < 0 && (wD += 1);
              pD -= KD(DD), pD < 0 && (pD += 1);
              return function() {
                const DD = 2091639 * zD + 2.3283064365386963e-10 * sD;
                return zD = wD, wD = pD, pD = DD - (sD = 0 | DD)
              }
            }(DD);
            this.p = function(DD) {
              const zD = new Uint8Array(256);
              for (let wD = 0; wD < 256; wD++) zD[wD] = wD;
              for (let wD = 0; wD < 255; wD++) {
                const pD = wD + ~~(DD() * (256 - wD)),
                  sD = zD[wD];
                zD[wD] = zD[pD], zD[pD] = sD
              }
              return zD
            }(zD), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (let wD = 0; wD < 512; wD++) this.perm[wD] = this.p[255 & wD], this.permMod12[wD] = this.perm[wD] % 12
          }
          noise2D(DD, zD) {
            const wD = this.permMod12,
              pD = this.perm;
            let sD = 0,
              LD = 0,
              cD = 0;
            const gD = (DD + zD) * KD,
              RD = Math.floor(DD + gD),
              UD = Math.floor(zD + gD),
              fD = (RD + UD) * rD,
              ID = DD - (RD - fD),
              BD = zD - (UD - fD);
            let GD, hD;
            ID > BD ? (GD = 1, hD = 0) : (GD = 0, hD = 1);
            const nD = ID - GD + rD,
              MD = BD - hD + rD,
              OD = ID - 1 + 2 * rD,
              JD = BD - 1 + 2 * rD,
              ED = 255 & RD,
              QD = 255 & UD;
            let XD = .5 - ID * ID - BD * BD;
            if (XD >= 0) {
              const DD = 3 * wD[ED + pD[QD]];
              XD *= XD, sD = XD * XD * (AD[DD] * ID + AD[DD + 1] * BD)
            }
            let VD = .5 - nD * nD - MD * MD;
            if (VD >= 0) {
              const DD = 3 * wD[ED + GD + pD[QD + hD]];
              VD *= VD, LD = VD * VD * (AD[DD] * nD + AD[DD + 1] * MD)
            }
            let PD = .5 - OD * OD - JD * JD;
            if (PD >= 0) {
              const DD = 3 * wD[ED + 1 + pD[QD + 1]];
              PD *= PD, cD = PD * PD * (AD[DD] * OD + AD[DD + 1] * JD)
            }
            return 70 * (sD + LD + cD)
          }
          noise3D(DD, zD, wD) {
            const pD = this.permMod12,
              sD = this.perm;
            let KD, rD, gD, RD;
            const UD = (DD + zD + wD) * LD,
              fD = Math.floor(DD + UD),
              ID = Math.floor(zD + UD),
              BD = Math.floor(wD + UD),
              GD = (fD + ID + BD) * cD,
              hD = DD - (fD - GD),
              nD = zD - (ID - GD),
              MD = wD - (BD - GD);
            let OD, JD, ED, QD, XD, VD;
            hD >= nD ? nD >= MD ? (OD = 1, JD = 0, ED = 0, QD = 1, XD = 1, VD = 0) : hD >= MD ? (OD = 1, JD = 0, ED = 0, QD = 1, XD = 0, VD = 1) : (OD = 0, JD = 0, ED = 1, QD = 1, XD = 0, VD = 1) : nD < MD ? (OD = 0, JD = 0, ED = 1, QD = 0, XD = 1, VD = 1) : hD < MD ? (OD = 0, JD = 1, ED = 0, QD = 0, XD = 1, VD = 1) : (OD = 0, JD = 1, ED = 0, QD = 1, XD = 1, VD = 0);
            const PD = hD - OD + cD,
              CD = nD - JD + cD,
              xD = MD - ED + cD,
              TD = hD - QD + 2 * cD,
              bD = nD - XD + 2 * cD,
              jD = MD - VD + 2 * cD,
              dD = hD - 1 + .5,
              SD = nD - 1 + .5,
              iD = MD - 1 + .5,
              lD = 255 & fD,
              WD = 255 & ID,
              ND = 255 & BD;
            let ZD = .6 - hD * hD - nD * nD - MD * MD;
            if (ZD < 0) KD = 0;
            else {
              const DD = 3 * pD[lD + sD[WD + sD[ND]]];
              ZD *= ZD, KD = ZD * ZD * (AD[DD] * hD + AD[DD + 1] * nD + AD[DD + 2] * MD)
            }
            let yD = .6 - PD * PD - CD * CD - xD * xD;
            if (yD < 0) rD = 0;
            else {
              const DD = 3 * pD[lD + OD + sD[WD + JD + sD[ND + ED]]];
              yD *= yD, rD = yD * yD * (AD[DD] * PD + AD[DD + 1] * CD + AD[DD + 2] * xD)
            }
            let kD = .6 - TD * TD - bD * bD - jD * jD;
            if (kD < 0) gD = 0;
            else {
              const DD = 3 * pD[lD + QD + sD[WD + XD + sD[ND + VD]]];
              kD *= kD, gD = kD * kD * (AD[DD] * TD + AD[DD + 1] * bD + AD[DD + 2] * jD)
            }
            let mD = .6 - dD * dD - SD * SD - iD * iD;
            if (mD < 0) RD = 0;
            else {
              const DD = 3 * pD[lD + 1 + sD[WD + 1 + sD[ND + 1]]];
              mD *= mD, RD = mD * mD * (AD[DD] * dD + AD[DD + 1] * SD + AD[DD + 2] * iD)
            }
            return 32 * (KD + rD + gD + RD)
          }
          noise4D(DD, zD, wD, pD) {
            const sD = this.perm;
            let KD, rD, LD, cD, AD;
            const fD = (DD + zD + wD + pD) * gD,
              ID = Math.floor(DD + fD),
              BD = Math.floor(zD + fD),
              GD = Math.floor(wD + fD),
              hD = Math.floor(pD + fD),
              nD = (ID + BD + GD + hD) * RD,
              MD = DD - (ID - nD),
              OD = zD - (BD - nD),
              JD = wD - (GD - nD),
              ED = pD - (hD - nD);
            let QD = 0,
              XD = 0,
              VD = 0,
              PD = 0;
            MD > OD ? QD++ : XD++, MD > JD ? QD++ : VD++, MD > ED ? QD++ : PD++, OD > JD ? XD++ : VD++, OD > ED ? XD++ : PD++, JD > ED ? VD++ : PD++;
            const CD = QD >= 3 ? 1 : 0,
              xD = XD >= 3 ? 1 : 0,
              TD = VD >= 3 ? 1 : 0,
              bD = PD >= 3 ? 1 : 0,
              jD = QD >= 2 ? 1 : 0,
              dD = XD >= 2 ? 1 : 0,
              SD = VD >= 2 ? 1 : 0,
              iD = PD >= 2 ? 1 : 0,
              lD = QD >= 1 ? 1 : 0,
              WD = XD >= 1 ? 1 : 0,
              ND = VD >= 1 ? 1 : 0,
              ZD = PD >= 1 ? 1 : 0,
              yD = MD - CD + RD,
              kD = OD - xD + RD,
              mD = JD - TD + RD,
              eD = ED - bD + RD,
              oD = MD - jD + 2 * RD,
              aD = OD - dD + 2 * RD,
              uD = JD - SD + 2 * RD,
              vD = ED - iD + 2 * RD,
              tD = MD - lD + 3 * RD,
              FD = OD - WD + 3 * RD,
              YD = JD - ND + 3 * RD,
              HD = ED - ZD + 3 * RD,
              qD = MD - 1 + 4 * RD,
              Dz = OD - 1 + 4 * RD,
              zz = JD - 1 + 4 * RD,
              wz = ED - 1 + 4 * RD,
              pz = 255 & ID,
              sz = 255 & BD,
              Kz = 255 & GD,
              rz = 255 & hD;
            let Lz = .6 - MD * MD - OD * OD - JD * JD - ED * ED;
            if (Lz < 0) KD = 0;
            else {
              const DD = sD[pz + sD[sz + sD[Kz + sD[rz]]]] % 32 * 4;
              Lz *= Lz, KD = Lz * Lz * (UD[DD] * MD + UD[DD + 1] * OD + UD[DD + 2] * JD + UD[DD + 3] * ED)
            }
            let cz = .6 - yD * yD - kD * kD - mD * mD - eD * eD;
            if (cz < 0) rD = 0;
            else {
              const DD = sD[pz + CD + sD[sz + xD + sD[Kz + TD + sD[rz + bD]]]] % 32 * 4;
              cz *= cz, rD = cz * cz * (UD[DD] * yD + UD[DD + 1] * kD + UD[DD + 2] * mD + UD[DD + 3] * eD)
            }
            let gz = .6 - oD * oD - aD * aD - uD * uD - vD * vD;
            if (gz < 0) LD = 0;
            else {
              const DD = sD[pz + jD + sD[sz + dD + sD[Kz + SD + sD[rz + iD]]]] % 32 * 4;
              gz *= gz, LD = gz * gz * (UD[DD] * oD + UD[DD + 1] * aD + UD[DD + 2] * uD + UD[DD + 3] * vD)
            }
            let Rz = .6 - tD * tD - FD * FD - YD * YD - HD * HD;
            if (Rz < 0) cD = 0;
            else {
              const DD = sD[pz + lD + sD[sz + WD + sD[Kz + ND + sD[rz + ZD]]]] % 32 * 4;
              Rz *= Rz, cD = Rz * Rz * (UD[DD] * tD + UD[DD + 1] * FD + UD[DD + 2] * YD + UD[DD + 3] * HD)
            }
            let Az = .6 - qD * qD - Dz * Dz - zz * zz - wz * wz;
            if (Az < 0) AD = 0;
            else {
              const DD = sD[pz + 1 + sD[sz + 1 + sD[Kz + 1 + sD[rz + 1]]]] % 32 * 4;
              Az *= Az, AD = Az * Az * (UD[DD] * qD + UD[DD + 1] * Dz + UD[DD + 2] * zz + UD[DD + 3] * wz)
            }
            return 27 * (KD + rD + LD + cD + AD)
          }
        };
        var ID = wD(39633);

        function BD(DD, zD, wD) {
          return Math.abs(DD[0] - zD) + Math.abs(DD[1] - wD)
        }

        function GD(DD, zD) {
          const wD = DD[0] - zD[0],
            pD = DD[1] - zD[1];
          return wD * wD + pD * pD
        }

        function hD(DD, zD, wD) {
          const pD = DD[0] - zD,
            sD = DD[1] - wD;
          return pD * pD + sD * sD
        }

        function nD(DD, zD, wD) {
          const pD = DD[0] - zD,
            sD = DD[1] - wD;
          return Math.sqrt(pD * pD + sD * sD)
        }

        function MD(DD, zD, wD) {
          const pD = GD(zD, wD),
            sD = ((DD[0] - zD[0]) * (wD[0] - zD[0]) + (DD[1] - zD[1]) * (wD[1] - zD[1])) / pD;
          let KD, rD, LD;
          return sD < 0 ? (KD = zD[0], rD = zD[1], LD = 0) : sD > 1 ? (KD = wD[0], rD = wD[1], LD = 1) : (KD = zD[0] + sD * (wD[0] - zD[0]), rD = zD[1] + sD * (wD[1] - zD[1]), LD = sD), {
            HR: nD(DD, KD, rD),
            fracAlong: LD,
            lineSegmentLength: Math.sqrt(pD)
          }
        }

        function OD(DD, zD, wD) {
          const pD = GD(zD, wD),
            sD = ((DD[0] - zD[0]) * (wD[0] - zD[0]) + (DD[1] - zD[1]) * (wD[1] - zD[1])) / pD;
          return nD(DD, zD[0] + sD * (wD[0] - zD[0]), zD[1] + sD * (wD[1] - zD[1]))
        }

        function JD(DD) {
          if (Math.abs(DD[0]) < 1e-4) DD[0] = 0, DD[1] = 1;
          else {
            const zD = Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1]);
            DD[0] = DD[0] / zD, DD[1] = DD[1] / zD
          }
        }

        function ED(DD) {
          let zD = 0;
          for (const {
              amplitude: wD
            }
            of DD.customOctaves) zD += wD;
          return zD
        }
        class QD {
          constructor(DD, zD) {
            this.customOctaves = void 0, this._simplexes = [], console.assert(void 0 !== zD, "Seed must be defined"), this.customOctaves = DD;
            for (let wD = 0; wD < DD.length; wD++) this._simplexes.push(new fD(`${zD}${wD}`))
          }
          maxMagnitude() {
            let DD = 1;
            for (const {
                amplitude: zD
              }
              of this.customOctaves) DD += Math.abs(zD);
            return DD
          }
          getOctaves(DD, zD) {
            let wD = 0;
            for (let pD = 0; pD < this.customOctaves.length; pD++) {
              const {
                amplitude: sD,
                frequency: KD
              } = this.customOctaves[pD];
              wD += this._simplexes[pD].noise2D(DD * KD, zD * KD) * sD
            }
            return wD
          }
        }
        class XD {
          constructor(DD, zD, wD) {
            this.customOctaves = void 0, this._simplexes = [], this.remainingAmplitudes = void 0, this.threshold = void 0, console.assert(void 0 !== wD, "Seed must be defined"), this.customOctaves = DD, this.threshold = zD;
            for (let sD = 0; sD < DD.length; sD++) this._simplexes.push(new fD(`${wD}${sD}`));
            this.remainingAmplitudes = new Array(DD.length);
            let pD = 0;
            for (let sD = this.remainingAmplitudes.length - 1; sD >= 0; sD--) pD += this.customOctaves[sD].amplitude, this.remainingAmplitudes[sD] = pD
          }
          getOctaves(DD, zD) {
            let wD = 0;
            for (let pD = 0; pD < this.customOctaves.length; pD++) {
              if (wD - this.remainingAmplitudes[pD] > this.threshold.high || wD + this.remainingAmplitudes[pD] < this.threshold.low) return ID.b;
              const {
                amplitude: sD,
                frequency: KD
              } = this.customOctaves[pD];
              wD += this._simplexes[pD].noise2D(DD * KD, zD * KD) * sD
            }
            return wD
          }
        }
        class VD {
          constructor(DD, zD) {
            this.chunkBottomLeft = zD, this.array = void 0;
            const wD = DD;
            this.array = sD()(new Int16Array(wD * wD), [wD, wD])
          }
          set(DD, zD, wD) {
            this.array.set(DD - this.chunkBottomLeft[0], zD - this.chunkBottomLeft[1], wD)
          }
          get(DD, zD) {
            return this.array.get(DD - this.chunkBottomLeft[0], zD - this.chunkBottomLeft[1])
          }
        }
        class PD {
          constructor(DD, zD, wD, pD) {
            this.chunkBottomLeft = zD, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + DD - 1, this.chunkBottomLeft[1] + DD - 1], this.array = sD()(new Int16Array(DD * DD * wD * pD), [DD, DD, wD, pD])
          }
          isInBounds(DD, zD) {
            return DD >= this.chunkBottomLeft[0] && DD <= this.chunkTopRight[0] && zD >= this.chunkBottomLeft[1] && zD <= this.chunkTopRight[1]
          }
          set(DD, zD, wD, pD, sD) {
            this.array.set(DD - this.chunkBottomLeft[0], zD - this.chunkBottomLeft[1], wD, pD, sD)
          }
          get(DD, zD, wD, pD) {
            return this.array.get(DD - this.chunkBottomLeft[0], zD - this.chunkBottomLeft[1], wD, pD)
          }
          fill(DD) {
            for (let zD = 0; zD < this.array.shape[0]; zD++)
              for (let wD = 0; wD < this.array.shape[1]; wD++)
                for (let pD = 0; pD < this.array.shape[2]; pD++)
                  for (let sD = 0; sD < this.array.shape[3]; sD++) this.array.set(zD, wD, pD, sD, DD)
          }
        }
        class CD {
          constructor(DD, zD, wD) {
            this.chunkBottomLeft = zD, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + DD - 1, this.chunkBottomLeft[1] + DD - 1], this.array = sD()(new Int16Array(DD * DD * wD), [DD, DD, wD])
          }
          isInBounds(DD, zD) {
            return DD >= this.chunkBottomLeft[0] && DD <= this.chunkTopRight[0] && zD >= this.chunkBottomLeft[1] && zD <= this.chunkTopRight[1]
          }
          set(DD, zD, wD, pD) {
            this.array.set(DD - this.chunkBottomLeft[0], zD - this.chunkBottomLeft[1], wD, pD)
          }
          get(DD, zD, wD) {
            return this.array.get(DD - this.chunkBottomLeft[0], zD - this.chunkBottomLeft[1], wD)
          }
        }
        class xD {
          constructor(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.chunkBottomLeft = zD, this.needOutsideChunkDist = wD, this.chunkTopRight = void 0, this.array = void 0;
            const pD = DD + 2 * wD,
              KD = new Array(pD * pD);
            this.chunkTopRight = [this.chunkBottomLeft[0] + DD - 1, this.chunkBottomLeft[1] + DD - 1], this.array = sD()(KD, [pD, pD])
          }
          isInBounds(DD, zD) {
            return DD >= this.chunkBottomLeft[0] && DD <= this.chunkTopRight[0] && zD >= this.chunkBottomLeft[1] && zD <= this.chunkTopRight[1]
          }
          set(DD, zD, wD) {
            this.array.set(DD - this.chunkBottomLeft[0] + this.needOutsideChunkDist, zD - this.chunkBottomLeft[1] + this.needOutsideChunkDist, wD)
          }
          get(DD, zD) {
            return this.array.get(DD - this.chunkBottomLeft[0] + this.needOutsideChunkDist, zD - this.chunkBottomLeft[1] + this.needOutsideChunkDist)
          }
        }
        class TD {
          constructor(DD, zD) {
            this.innerContiguousArray = DD, this.generator = zD, this.outerSparseArray = []
          }
          static create(DD, zD, wD) {
            const pD = new xD(DD, zD);
            for (let sD = zD[0]; sD < zD[0] + DD; sD++)
              for (let KD = zD[1]; KD < zD[1] + DD; KD++) {
                const DD = wD.generate(sD, KD);
                pD.set(sD, KD, DD)
              }
            return new TD(pD, wD)
          }
          getOrGenerate(DD, zD) {
            var wD;
            if (this.innerContiguousArray.isInBounds(DD, zD)) return this.innerContiguousArray.get(DD, zD);
            let pD = null === (wD = this.outerSparseArray[DD]) || void 0 === wD ? void 0 : wD[zD];
            return void 0 !== pD || (pD = this.generator.generate(DD, zD), this.outerSparseArray[DD] || (this.outerSparseArray[DD] = []), this.outerSparseArray[DD][zD] = pD), pD
          }
        }
        class bD {
          constructor(DD) {
            this.generator = DD, this.cache = new Map
          }
          getOrGenerate(DD, zD) {
            let wD = this.cache.get(DD);
            if (void 0 !== wD) {
              const DD = wD.get(zD);
              if (void 0 !== DD) return DD
            } else wD = new Map, this.cache.set(DD, wD);
            const pD = this.generator.generate(DD, zD);
            return wD.set(zD, pD), pD
          }
        }
        class jD {
          constructor() {
            this.array = []
          }
          get(DD, zD, wD) {
            var pD, sD;
            return null === (pD = this.array[DD]) || void 0 === pD || null === (sD = pD[zD]) || void 0 === sD ? void 0 : sD[wD]
          }
          set(DD, zD, wD, pD) {
            this.array[DD] || (this.array[DD] = []), this.array[DD][zD] || (this.array[DD][zD] = []), this.array[DD][zD][wD] = pD
          }
        }
        class dD {
          constructor(DD, zD) {
            this.outerSparseArray = DD, this.innerContiguousArray = zD
          }
          get(DD, zD, wD) {
            if (this.innerContiguousArray.isInBounds(DD, zD)) return this.innerContiguousArray.get(DD, zD, wD);
            const pD = this.outerSparseArray.get(DD, zD, wD);
            if (void 0 === pD) throw new Error(`Number not found for x=${DD}, z=${zD}, thirdIndex=${wD}`);
            return pD
          }
        }
        const SD = new class {
          get(DD, zD, wD) {}
        };
        class iD {
          constructor(DD, zD) {
            this.innerContiguousArray = DD, this.generator = zD, this.outerSparseArray = new jD
          }
          static create(DD, zD, wD, pD) {
            const sD = new CD(DD, zD, wD);
            for (let KD = zD[0]; KD < zD[0] + DD; KD++)
              for (let wD = zD[1]; wD < zD[1] + DD; wD++) pD.generateAndSet(KD, wD, sD);
            return new iD(sD, pD)
          }
          getOrGenerate(DD, zD, wD) {
            if (this.innerContiguousArray.isInBounds(DD, zD)) return this.innerContiguousArray.get(DD, zD, wD);
            {
              const pD = this.outerSparseArray.get(DD, zD, wD);
              if (void 0 !== pD) return pD
            }
            return this.generator.generateAndSet(DD, zD, this.outerSparseArray), this.outerSparseArray.get(DD, zD, wD)
          }
          viewJustInnerChunk() {
            return new dD(SD, this.innerContiguousArray)
          }
        }
        class lD {
          constructor() {
            this.array = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
          }
          get(DD, zD, wD, pD) {
            var sD, KD, rD;
            return null === (sD = this.array[DD]) || void 0 === sD || null === (KD = sD[zD]) || void 0 === KD || null === (rD = KD[wD]) || void 0 === rD ? void 0 : rD[pD]
          }
          set(DD, zD, wD, pD, sD) {
            let KD = this.lastColumn;
            DD === this.lastX && zD === this.lastZ || (this.array[DD] || (this.array[DD] = []), KD = this.array[DD][zD] ??= [], this.lastX = DD, this.lastZ = zD, this.lastColumn = KD), KD[wD] || (KD[wD] = []), KD[wD][pD] = sD
          }
        }
        class WD {
          constructor(DD, zD) {
            this.outerSparseArray = DD, this.innerContiguousArray = zD
          }
          get(DD, zD, wD, pD) {
            if (this.innerContiguousArray.isInBounds(DD, zD)) return this.innerContiguousArray.get(DD, zD, wD, pD);
            const sD = this.outerSparseArray.get(DD, zD, wD, pD);
            if (void 0 === sD) throw new Error(`Number not found for x=${DD}, z=${zD}, thirdIndex=${wD}, fourthIndex=${pD}`);
            return sD
          }
        }
        const ND = new class {
          get(DD, zD, wD, pD) {}
        };
        class ZD {
          constructor(DD, zD) {
            this.innerContiguousArray = DD, this.generator = zD, this.outerSparseArray = new lD
          }
          static create(DD, zD, wD, pD, sD) {
            const KD = new PD(DD, zD, wD, pD);
            for (let rD = zD[0]; rD < zD[0] + DD; rD++)
              for (let wD = zD[1]; wD < zD[1] + DD; wD++) sD.generateAndSet(rD, wD, KD);
            return new ZD(KD, sD)
          }
          getOrGenerate(DD, zD, wD, pD) {
            if (this.innerContiguousArray.isInBounds(DD, zD)) return this.innerContiguousArray.get(DD, zD, wD, pD);
            {
              const sD = this.outerSparseArray.get(DD, zD, wD, pD);
              if (void 0 !== sD) return sD
            }
            return this.generator.generateAndSet(DD, zD, this.outerSparseArray), this.outerSparseArray.get(DD, zD, wD, pD)
          }
          viewJustInnerChunk() {
            return new WD(ND, this.innerContiguousArray)
          }
        }
      },
      39633: (DD, zD, wD) => {
        wD.d(zD, {
          b: () => cD,
          f: () => rD,
          h: () => gD,
          k: () => KD,
          m: () => LD,
          n: () => sD,
          q: () => pD
        });
        const pD = {
            seaLevel: 0,
            bedrockLevel: -100
          },
          sD = -1e4,
          KD = 1e4,
          rD = 15,
          LD = -1e4,
          cD = -1e4,
          gD = 2
      },
      39635: (DD, zD, wD) => {
        wD.d(zD, {
          d: () => sD,
          h: () => pD,
          k: () => cD,
          l: () => LD,
          o: () => rD,
          r: () => KD
        });
        let pD = function(DD) {
            return DD[DD.GroundHeight = 0] = "GroundHeight", DD[DD.WaterHeight = 1] = "WaterHeight", DD[DD.CavesAllowedBelowY = 2] = "CavesAllowedBelowY", DD[DD.IsLake = 3] = "IsLake", DD[DD.NumFields = 4] = "NumFields", DD
          }({}),
          sD = function(DD) {
            return DD[DD.FloorY = 0] = "FloorY", DD[DD.CeilingY = 1] = "CeilingY", DD[DD.NumFields = 2] = "NumFields", DD
          }({});
        const KD = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem"];
        let rD = function(DD) {
            return DD[DD.SURFACE = 0] = "SURFACE", DD[DD.UNDERGROUND = 1] = "UNDERGROUND", DD
          }({}),
          LD = function(DD) {
            return DD[DD.HIGH = 0] = "HIGH", DD[DD.MEDIUM = 1] = "MEDIUM", DD[DD.VERY_HIGH = 2] = "VERY_HIGH", DD
          }({}),
          cD = function(DD) {
            return DD[DD.DistanceToNearestFixedPrefab = 0] = "DistanceToNearestFixedPrefab", DD[DD.HeightOfNearestFixedPrefab = 1] = "HeightOfNearestFixedPrefab", DD[DD.NumFields = 2] = "NumFields", DD
          }({})
      },
      4263: (DD, zD, wD) => {
        wD.d(zD, {
          c: () => cD,
          e: () => KD,
          g: () => pD,
          k: () => LD,
          l: () => rD,
          n: () => sD
        });
        class pD {
          constructor(DD) {
            this.a = void 0, this.reseed(DD)
          }
          reseed(DD) {
            let zD = 2166136261;
            for (let wD = 0; wD < DD.length; wD++) zD = Math.imul(zD ^ DD.charCodeAt(wD), 16777619);
            this.a = zD
          }
          next() {
            let DD = this.a += 1831565813;
            return DD = Math.imul(DD ^ DD >>> 15, 1 | DD), DD ^= DD + Math.imul(DD ^ DD >>> 7, 61 | DD), ((DD ^ DD >>> 14) >>> 0) / 4294967296
          }
        }

        function sD(DD, zD) {
          for (let wD = 0; wD < DD.length; wD++) {
            const pD = wD + Math.floor(zD.next() * (DD.length - wD));
            [DD[wD], DD[pD]] = [DD[pD], DD[wD]]
          }
          return DD
        }
        class KD {
          constructor(DD) {
            if (this.distribution = void 0, DD.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(DD)}`);
            const zD = new Set;
            let wD = 0;
            for (const sD of DD) {
              const pD = sD.value;
              if (zD.has(pD)) throw new Error(`Values must be unique: ${JSON.stringify(DD)}`);
              zD.add(pD);
              const KD = sD.weight;
              if (KD <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(DD)}`);
              wD += KD
            }
            let pD = 0;
            this.distribution = DD.map((DD => {
              let {
                weight: zD,
                value: sD
              } = DD;
              return pD += zD / wD, {
                cumulativeProbability: pD,
                value: sD
              }
            }))
          }
          sample(DD) {
            const zD = DD.next();
            for (const wD of this.distribution)
              if (zD < wD.cumulativeProbability) return wD.value;
            return this.distribution[this.distribution.length - 1].value
          }
        }
        class rD {
          constructor(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.offset = void 0, this.multiplier = void 0, DD > zD) throw new Error(`Min must be less than or equal to Max, but Min=${DD} and Max=${zD}`);
            wD ? (this.multiplier = DD - zD, this.offset = zD) : (this.multiplier = zD - DD, this.offset = DD)
          }
          sample(DD) {
            return DD.next() * this.multiplier + this.offset
          }
        }
        class LD {
          constructor(DD, zD) {
            let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new rD(DD, zD, wD), !Number.isInteger(DD) || !Number.isInteger(zD)) throw new Error(`Min and Max must be integers, but Min=${DD} and Max=${zD}`)
          }
          sample(DD) {
            const zD = this.uniformRealDistribution.sample(DD);
            return Math.floor(zD)
          }
        }
        class cD {
          constructor(DD) {
            this.probability = DD
          }
          sample(DD) {
            return DD.next() < this.probability
          }
        }
      },
      619: (DD, zD, wD) => {
        wD.d(zD, {
          B: () => cD,
          L: () => AD,
          c: () => LD,
          f: () => rD,
          g: () => sD,
          p: () => KD,
          q: () => UD,
          r: () => gD,
          v: () => fD,
          w: () => ID
        });
        var pD = wD(625);
        const sD = 36;
        let KD = function(DD) {
            return DD[DD.Maple = 0] = "Maple", DD[DD.Pine = 1] = "Pine", DD[DD.Plum = 2] = "Plum", DD[DD.Cedar = 4] = "Cedar", DD[DD.Aspen = 5] = "Aspen", DD[DD.Jungle = 6] = "Jungle", DD[DD.Palm = 7] = "Palm", DD[DD.AutumnMaple = 8] = "AutumnMaple", DD[DD.Pear = 9] = "Pear", DD[DD.Cherry = 10] = "Cherry", DD[DD.Spectral = 11] = "Spectral", DD[DD.Mango = 12] = "Mango", DD[DD.AutumnAspen = 13] = "AutumnAspen", DD[DD.Dead = 14] = "Dead", DD[DD.FallenLog = 15] = "FallenLog", DD
          }({}),
          rD = function(DD) {
            return DD[DD.COMMON = 0] = "COMMON", DD[DD.UNCOMMON = 1] = "UNCOMMON", DD[DD.RARE = 2] = "RARE", DD[DD.EPIC = 3] = "EPIC", DD[DD.LEGENDARY = 4] = "LEGENDARY", DD
          }({}),
          LD = function(DD) {
            return DD[DD.PLAINS = 0] = "PLAINS", DD[DD.AUTUMN = 1] = "AUTUMN", DD[DD.OASIS = 2] = "OASIS", DD
          }({});

        function cD(DD) {
          return void 0 === DD || null === DD
        }
        const gD = 32,
          RD = 0 | Math.log2(gD);

        function AD(DD) {
          return DD >> RD
        }

        function UD(DD) {
          return DD << RD
        }

        function fD(DD) {
          return JSON.stringify(DD)
        }
        fD(new Array(sD).fill(null));
        pD.e, Number(atob("NQ==")), Number(atob("MTM="));

        function ID(DD, zD) {
          if ("Air" === DD) return 0;
          const wD = zD[DD];
          return null === wD || void 0 === wD ? void 0 : wD.id
        }
      },
      625: (DD, zD, wD) => {
        wD.d(zD, {
          e: () => pD
        });
        const pD = 871
      },
      227: (DD, zD, wD) => {
        var pD = {
          "./localConfigValues.ts.clientRelease": 234
        };

        function sD(DD) {
          var zD = KD(DD);
          return wD(zD)
        }

        function KD(DD) {
          if (!wD.o(pD, DD)) {
            var zD = new Error("Cannot find module '" + DD + "'");
            throw zD.code = "MODULE_NOT_FOUND", zD
          }
          return pD[DD]
        }
        sD.keys = function() {
          return Object.keys(pD)
        }, sD.resolve = KD, DD.exports = sD, sD.id = 227
      },
      234: (DD, zD, wD) => {
        DD.exports = wD.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
      }
    },
    zD = {};

  function wD(pD) {
    var sD = zD[pD];
    if (void 0 !== sD) return sD.exports;
    var KD = zD[pD] = {
      exports: {}
    };
    return DD[pD](KD, KD.exports, wD), KD.exports
  }
  wD.m = DD, wD.n = DD => {
    var zD = DD && DD.__esModule ? () => DD.default : () => DD;
    return wD.d(zD, {
      a: zD
    }), zD
  }, wD.d = (DD, zD) => {
    for (var pD in zD) wD.o(zD, pD) && !wD.o(DD, pD) && Object.defineProperty(DD, pD, {
      enumerable: !0,
      get: zD[pD]
    })
  }, wD.f = {}, wD.e = DD => Promise.all(Object.keys(wD.f).reduce(((zD, pD) => (wD.f[pD](DD, zD), zD)), [])), wD.u = DD => "static/js/tz47m9." + (69 === DD ? "worldgenTables" : DD) + "." + {
    69: "0211c1fa",
    72: "1e626967",
    73: "a76e93bb",
    74: "865b0d48",
    75: "c22f39ed"
  } [DD] + ".chunk.js", wD.miniCssF = DD => {}, wD.o = (DD, zD) => Object.prototype.hasOwnProperty.call(DD, zD), wD.r = DD => {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(DD, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(DD, "__esModule", {
      value: !0
    })
  }, wD.j = 70, wD.p = "/", (() => {
    var DD = wD.u,
      zD = wD.e,
      pD = {},
      sD = {};
    wD.u = function(zD) {
      return DD(zD) + (pD.hasOwnProperty(zD) ? "?" + pD[zD] : "")
    }, wD.e = function(KD) {
      return zD(KD).catch((function(zD) {
        var rD = sD.hasOwnProperty(KD) ? sD[KD] : 4;
        if (rD < 1) {
          var LD = DD(KD);
          if (zD.message = "Loading chunk " + KD + " failed after 4 retries.\n(" + LD + ")", zD.request = LD, pD[KD] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete sD[KD]
            }), 0), "CSS_CHUNK_LOAD_FAILED" === zD.code) {
            var cD = wD.miniCssF(KD);
            zD.message = zD.message.replace("Loading chunk", "Loading CSS chunk").replace(LD, cD), zD.request = cD
          }
          throw zD
        }
        return new Promise((function(DD) {
          var zD = 4 - rD + 1;
          setTimeout((function() {
            var zD = "cache-bust=" + Date.now();
            pD[KD] = zD, sD[KD] = rD - 1, DD(wD.e(KD))
          }), function(DD) {
            return 500 * Math.pow(2, DD)
          }(zD))
        }))
      }))
    }
  })(), (() => {
    var DD = {
        70: 0
      },
      zD = zD => {
        var pD, sD, KD = zD.ids,
          rD = zD.modules,
          LD = zD.runtime,
          cD = 0;
        for (pD in rD) wD.o(rD, pD) && (wD.m[pD] = rD[pD]);
        for (LD && LD(wD); cD < KD.length; cD++) sD = KD[cD], wD.o(DD, sD) && DD[sD] && DD[sD][0](), DD[KD[cD]] = 0
      };
    wD.f.j = (pD, sD) => {
      var KD = wD.o(DD, pD) ? DD[pD] : void 0;
      if (0 !== KD)
        if (KD) sD.push(KD[1]);
        else {
          var rD = import("../../" + wD.u(pD)).then(zD, (zD => {
            throw 0 !== DD[pD] && (DD[pD] = void 0), zD
          }));
          rD = Promise.race([rD, new Promise((zD => KD = DD[pD] = [zD]))]);
          sD.push(KD[1] = rD)
        }
    }
  })();
  var pD = {};

  function sD(DD, zD, wD) {
    zD in DD || Object.defineProperty(DD, zD, {
      value: wD,
      writable: !0,
      configurable: !0
    })
  }

  function KD(DD) {
    const zD = Math.trunc(DD) || 0,
      wD = zD < 0 ? this.length + zD : zD;
    return wD < 0 || wD >= this.length ? void 0 : this[wD]
  }

  function rD(DD, zD) {
    for (let wD = this.length - 1; wD >= 0; wD--)
      if (DD.call(zD, this[wD], wD, this)) return wD;
    return -1
  }

  function LD(DD, zD) {
    const wD = rD.call(this, DD, zD);
    return -1 === wD ? void 0 : this[wD]
  }
  wD.r(pD), wD.d(pD, {
    VG: () => ND,
    PG: () => ZD,
    UA: () => yD,
    default: () => Jz,
    initSync: () => Oz,
    fA: () => kD,
    IA: () => mD,
    BA: () => eD,
    hA: () => oD,
    nA: () => aD,
    MA: () => uD,
    OA: () => vD,
    JA: () => tD,
    VA: () => FD,
    CA: () => YD,
    xA: () => HD
  }), sD(Object, "hasOwn", ((DD, zD) => Object.prototype.hasOwnProperty.call(DD, zD)));
  const cD = Object.getPrototypeOf(Uint8Array.prototype);
  for (const fw of [Array.prototype, cD]) sD(fw, "at", KD), sD(fw, "findLast", LD), sD(fw, "findLastIndex", rD);
  sD(String.prototype, "at", KD);
  var gD = wD(2839),
    RD = wD.n(gD);
  class AD extends Error {
    retryable;
    constructor(DD, zD, wD) {
      super(DD, wD), this.retryable = zD
    }
  }
  class UD extends AD {}
  class fD extends Error {}
  globalThis.crypto, globalThis.isSecureContext, Reflect.apply, Object.defineProperty, "undefined" === typeof Response || Response.prototype.arrayBuffer, Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get, "undefined" === typeof Response || Response.prototype.clone, "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "body"), "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "type"), "undefined" === typeof ReadableStream || ReadableStream.prototype.getReader, "undefined" === typeof ReadableStreamDefaultReader || ReadableStreamDefaultReader.prototype.read, Uint8Array.prototype.set, "undefined" === typeof fetch || fetch, "undefined" === typeof WebAssembly || WebAssembly, Array.from({
    length: 256
  }, ((DD, zD) => zD.toString(16).padStart(2, "0"))), new Set;
  let ID = "unloaded",
    BD = null,
    GD = null,
    hD = null,
    nD = null;
  const MD = new Set;
  new Set;
  let OD = null,
    JD = null,
    ED = null,
    QD = !1,
    XD = 0;

  function VD() {
    return "ready" === ID
  }

  function PD() {
    return ID
  }

  function CD() {
    return null === BD ? "not failed" : `${BD}: ${(DD=GD)instanceof Error?`${DD.name}: ${DD.message}`:String(DD)}`;
    var DD
  }

  function xD() {
    if (!VD()) throw new Error(`Bloxd wasm is not ready (${PD()}): check isBloxdWasmReady() first`);
    return OD
  }

  function TD() {
    if (!nD) throw new Error("Bloxd wasm has not been instantiated");
    return nD
  }

  function bD(DD, zD) {
    let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (jD()) {
      let sD;
      try {
        sD = DD()
      } catch (pD) {
        return SD(pD, function(DD) {
          return DD instanceof fD ? "integrity" : DD instanceof UD ? "timeout" : DD instanceof AD ? "fetch" : "compile"
        }(pD)), !1
      }
      try {
        dD(wD, zD, sD, zD.initSync({
          module: sD
        }))
      } catch (pD) {
        SD(pD, "instantiate")
      }
    }
    return VD()
  }

  function jD() {
    return "unloaded" === ID && (ID = "loading", !0)
  }

  function dD(DD, zD, wD, pD) {
    JD = DD, OD = zD, hD = wD, nD = pD.memory;
    const {
      VA: sD
    } = zD;
    XD = "function" === typeof sD ? sD() : 0, ID = "ready",
      function() {
        if (QD) return;
        QD = !0;
        const DD = console.error;
        console.error = function() {
          for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
          const [sD] = wD;
          "string" === typeof sD && sD.startsWith("panicked at") && (ED = sD, function() {
            if (!nD || 0 === XD) return 0;
            const DD = new Uint32Array(nD.buffer, XD, 1),
              zD = DD[0] ?? 0;
            DD[0] = 0
          }()), DD.apply(console, wD)
        }
      }()
  }

  function SD(DD, zD) {
    ID = "failed", BD = zD, GD = DD, console.error(`Bloxd wasm failed (${zD}):`, DD);
    const wD = [...MD];
    MD.clear();
    for (const pD of wD) iD(pD)
  }

  function iD(DD) {
    try {
      DD()
    } catch (zD) {
      console.error("A Bloxd wasm failure listener threw:", zD)
    }
  }
  const lD = ["none", "idle", "now"];

  function WD() {
    const DD = () => xD();
    return {
      memoryBytes: () => TD().buffer.byteLength,
      reserveUpFront: zD => DD().hA(zD),
      reserveAhead: zD => DD().BA(zD),
      setCeiling: zD => {
        DD().nA(zD)
      },
      lowWater: () => lD[DD().IA()] ?? "none",
      stats: () => function(DD) {
        const zD = new Uint32Array(TD().buffer, DD, 17),
          wD = DD => zD[DD] ?? 0,
          pD = DD => ({
            upFront: wD(DD),
            ahead: wD(DD + 1),
            onDemandInFrame: wD(DD + 2),
            onDemand: wD(DD + 3)
          });
        return {
          memoryBytes: wD(0),
          initialBytes: wD(1),
          liveBytes: wD(2),
          peakLiveBytes: wD(3),
          headroomBytes: wD(4),
          unusedBytes: wD(5),
          ceilingBytes: wD(6),
          reservesRefused: wD(7),
          grows: pD(8),
          grownBytes: pD(12),
          allocationsRefused: wD(16)
        }
      }(DD().MA()),
      takeBallast: () => DD().OA(),
      takePressure: () => DD().JA()
    }
  }
  class ND {
    __destroy_into_raw() {
      const DD = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Dz.unregister(this), DD
    }
    free() {
      const DD = this.__destroy_into_raw();
      hz.w7ja(DD, 0)
    }
    encode(DD) {
      const zD = gz(DD, hz.a6rW, hz.soPk),
        wD = nz;
      hz.vHFB(this.__wbg_ptr, zD, wD)
    }
    xG() {
      return hz.gOAO(this.__wbg_ptr) >>> 0
    }
    constructor() {
      const DD = hz.keJk();
      return this.__wbg_ptr = DD, Dz.register(this, this.__wbg_ptr, this), this
    }
    TG() {
      return hz.okRs(this.__wbg_ptr) >>> 0
    }
    bG() {
      return hz.OgxQ(this.__wbg_ptr) >>> 0
    }
    CG() {
      return hz.U057(this.__wbg_ptr) >>> 0
    }
  }
  Symbol.dispose && (ND.prototype[Symbol.dispose] = ND.prototype.free);
  class ZD {
    __destroy_into_raw() {
      const DD = this.__wbg_ptr;
      return this.__wbg_ptr = 0, zz.unregister(this), DD
    }
    free() {
      const DD = this.__destroy_into_raw();
      hz.jIJl(DD, 0)
    }
    init(DD) {
      return hz.fKME(this.__wbg_ptr, DD) >>> 0
    }
    oA(DD) {
      return hz.mkqj(this.__wbg_ptr, DD) >>> 0
    }
    constructor(DD) {
      const zD = hz.IR2Z(void 0 === (wD = DD) || null === wD ? Number.MAX_SAFE_INTEGER : DD >>> 0);
      var wD;
      return this.__wbg_ptr = zD, zz.register(this, this.__wbg_ptr, this), this
    }
    FA() {
      return hz.FnZq(this.__wbg_ptr) >>> 0
    }
    uA() {
      return hz.vk9h(this.__wbg_ptr) >>> 0
    }
    run(DD) {
      return hz.MM8F(this.__wbg_ptr, DD) >>> 0
    }
  }

  function yD(DD, zD) {
    const wD = gz(DD, hz.a6rW, hz.soPk),
      pD = nz,
      sD = hz.UFIx(wD, pD, zD);
    if (sD[1]) throw Rz(sD[0])
  }

  function kD() {
    hz.wTEx()
  }

  function mD() {
    return hz.EAcR() >>> 0
  }

  function eD(DD) {
    return 0 !== hz.hPq5(DD)
  }

  function oD(DD) {
    return 0 !== hz.ekAo(DD)
  }

  function aD(DD) {
    hz.sXfA(DD)
  }

  function uD() {
    return hz.B4Ld() >>> 0
  }

  function vD() {
    return hz.RrSu() >>> 0
  }

  function tD() {
    return 0 !== hz.hF9N()
  }

  function FD() {
    return hz.onUH() >>> 0
  }

  function YD() {
    let DD, zD;
    try {
      const wD = hz.bWOe();
      return DD = wD[0], zD = wD[1], pz(wD[0], wD[1])
    } finally {
      hz.n4s5(DD, zD, 1)
    }
  }

  function HD(DD) {
    hz.i2Z3(wz(DD))
  }

  function qD() {
    return {
      __proto__: null,
      iyqV: {
        __proto__: null,
        eiqh: function(DD, zD) {
          return wz(Error(pz(DD, zD)))
        },
        E2O5: function(DD, zD) {
          throw new Error(pz(DD, zD))
        },
        OWxh: function(DD) {
          rz(DD).call()
        },
        cTYN: function(DD, zD) {
          console.error(pz(DD, zD))
        },
        QE98: function(DD) {
          Rz(DD)
        }
      }
    }
  }
  Symbol.dispose && (ZD.prototype[Symbol.dispose] = ZD.prototype.free);
  const Dz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => hz.w7ja(DD, 1))),
    zz = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => hz.jIJl(DD, 1)));

  function wz(DD) {
    cz === Lz.length && Lz.push(Lz.length + 1);
    const zD = cz;
    return cz = Lz[zD], Lz[zD] = DD, zD
  }

  function pz(DD, zD) {
    return function(DD, zD) {
      fz += zD, fz >= Uz && (Az = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }), Az.decode(), fz = zD);
      return Az.decode(Kz().subarray(DD, DD + zD))
    }(DD >>> 0, zD)
  }
  let sz = null;

  function Kz() {
    return null !== sz && 0 !== sz.byteLength || (sz = new Uint8Array(hz.memory.buffer)), sz
  }

  function rz(DD) {
    return Lz[DD]
  }
  let Lz = new Array(1024).fill(void 0);
  Lz.push(void 0, null, !0, !1);
  let cz = Lz.length;

  function gz(DD, zD, wD) {
    if (void 0 === wD) {
      const wD = Iz.encode(DD),
        pD = zD(wD.length, 1) >>> 0;
      return Kz().subarray(pD, pD + wD.length).set(wD), nz = wD.length, pD
    }
    let pD = DD.length,
      sD = zD(pD, 1) >>> 0;
    const KD = Kz();
    let rD = 0;
    for (; rD < pD; rD++) {
      const zD = DD.charCodeAt(rD);
      if (zD > 127) break;
      KD[sD + rD] = zD
    }
    if (rD !== pD) {
      0 !== rD && (DD = DD.slice(rD)), sD = wD(sD, pD, pD = rD + 3 * DD.length, 1) >>> 0;
      const zD = Kz().subarray(sD + rD, sD + pD);
      rD += Iz.encodeInto(DD, zD).written, sD = wD(sD, pD, rD, 1) >>> 0
    }
    return nz = rD, sD
  }

  function Rz(DD) {
    const zD = rz(DD);
    return function(DD) {
      DD < 1028 || (Lz[DD] = cz, cz = DD)
    }(DD), zD
  }
  let Az = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  });
  Az.decode();
  const Uz = 2146435072;
  let fz = 0;
  const Iz = new TextEncoder;
  "encodeInto" in Iz || (Iz.encodeInto = function(DD, zD) {
    const wD = Iz.encode(DD);
    return zD.set(wD), {
      read: DD.length,
      written: wD.length
    }
  });
  let Bz, Gz, hz, nz = 0;

  function Mz(DD, zD) {
    return Gz = DD, hz = DD.exports, Bz = zD, sz = null, hz.pV3p(), hz
  }

  function Oz(DD) {
    if (void 0 !== hz) return hz;
    void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
      module: DD
    } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const zD = qD();
    DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
    return Mz(new WebAssembly.Instance(DD, zD), DD)
  }
  async function Jz(DD) {
    if (void 0 !== hz) return hz;
    void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
      module_or_path: DD
    } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
    const zD = qD();
    ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
    const {
      instance: wD,
      module: pD
    } = await async function(DD, zD) {
      if ("function" === typeof Response && DD instanceof Response) {
        if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
        if ("function" === typeof WebAssembly.instantiateStreaming) try {
          return await WebAssembly.instantiateStreaming(DD, zD)
        } catch (wD) {
          if (! function(DD) {
              switch (DD) {
                case "basic":
                case "cors":
                case "default":
                  return !0
              }
              return !1
            }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw wD;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wD)
        }
        const pD = await DD.arrayBuffer();
        return await WebAssembly.instantiate(pD, zD)
      } {
        const wD = await WebAssembly.instantiate(DD, zD);
        return wD instanceof WebAssembly.Instance ? {
          instance: wD,
          module: DD
        } : wD
      }
    }(await DD, zD);
    return Mz(wD, pD)
  }

  function Ez() {
    return function(DD, zD) {
      if (!VD()) throw new Error(`Bloxd wasm is not ready (${PD()}): check isBloxdWasmReady() first`);
      if (OD !== DD) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${zD}`)
    }(pD, "the wasm client's workers' exports"), pD
  }
  var Qz = wD(619);
  class Xz {
    constructor(DD, zD, pD, sD, KD, rD, LD, cD, gD) {
      var RD, AD;
      this.defaultGenerator = void 0, this.layerEntries = void 0;
      const {
        WorldGenerator: UD
      } = wD(39724), fD = function(DD, zD, wD) {
        if (null === DD) return null;
        for (const LD of DD.eD) bz(LD, wD);
        const pD = DD.terrain;
        if (null === pD) return {
          eD: DD.eD,
          buildBiomes: null
        };
        const sD = Object.hasOwn(zD, pD.name) ? zD[pD.name] : void 0;
        if (void 0 === sD) {
          const DD = Object.keys(zD);
          throw new Error(`Custom world-gen terrain "${pD.name}" is not in this generator's catalogue (${DD.length>0?DD.join(", "):"empty"})`)
        }
        const KD = sD(),
          rD = function(DD, zD) {
            if (!zD.parseOptions) {
              if (null !== DD.mD) throw new Error(`Custom world-gen terrain "${DD.name}" takes no options`);
              return null
            }
            let wD = null;
            if (null !== DD.mD) try {
              wD = JSON.parse(DD.mD)
            } catch (pD) {
              throw new Error(`Custom world-gen terrain "${DD.name}" has invalid optionsJson: ${String(pD)}`, {
                cause: pD
              })
            }
            return zD.parseOptions(wD)
          }(pD, KD);
        return {
          eD: DD.eD,
          buildBiomes: DD => KD.buildBiomes(DD, rD)
        }
      }(null !== (RD = null === LD || void 0 === LD ? void 0 : LD.ZD) && void 0 !== RD ? RD : null, cD, zD);
      this.defaultGenerator = new UD(DD, zD, pD, sD, KD, rD, null, fD, gD);
      const ID = null !== (AD = null === LD || void 0 === LD ? void 0 : LD.layers) && void 0 !== AD ? AD : [];
      ! function(DD, zD) {
        for (const pD of DD) Vz(pD, zD);
        const wD = [...DD].sort(((DD, zD) => DD.LD - zD.LD));
        for (let pD = 1; pD < wD.length; pD++)
          if (wD[pD].LD < wD[pD - 1].cD) throw new Error(`Custom world-gen layers overlap: [${wD[pD-1].LD}, ${wD[pD-1].cD}) and [${wD[pD].LD}, ${wD[pD].cD})`)
      }(ID, zD), this.layerEntries = ID.map((wD => ({
        layer: wD,
        generator: new UD(DD, zD, pD, sD, KD, rD, wD, null, gD)
      })))
    }
    getChunk(DD, zD, wD, pD) {
      for (const {
          layer: sD,
          generator: KD
        }
        of this.layerEntries)
        if (wD >= sD.LD && wD < sD.cD) return KD.getChunk(DD, zD, wD - sD.gD, pD);
      return this.defaultGenerator.getChunk(DD, zD, wD, pD)
    }
    getBiomeSelector() {
      return this.defaultGenerator.biomeSelector
    }
    getPrefabLootChests(DD, zD, wD, pD, sD) {
      return this.defaultGenerator.getPrefabLootChests(DD, zD, wD, pD, sD)
    }
    getTreeGenerator() {
      return this.defaultGenerator.treeGenerator
    }
    getOresForChunkColumn(DD, zD) {
      return this.defaultGenerator.getOresForChunkColumn(DD, zD)
    }
  }

  function Vz(DD, zD) {
    if (DD.LD >= DD.cD) throw new Error(`Custom world-gen layer has minY (${DD.LD}) >= maxY (${DD.cD})`);
    if (DD.LD % Qz.r !== 0 || DD.cD % Qz.r !== 0 || DD.gD % Qz.r !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Qz.r}); got minY=${DD.LD}, maxY=${DD.cD}, groundY=${DD.gD}`);
    if (function(DD, zD) {
        if (void 0 === (0, Qz.w)(DD.fD, zD)) throw new Error(`Custom world-gen caves lavaPitBlock "${DD.fD}" not found in blockMetadata`);
        if (DD.BD)
          for (const wD of DD.BD) Pz(wD, zD)
      }(DD.AD, zD), 0 === DD.xD.length) throw new Error("Custom world-gen layer must have at least one biome");
    let wD = 0;
    for (const pD of DD.xD) Tz(pD, zD), wD += pD.frequency;
    if (wD <= 0) throw new Error("Custom world-gen layer biome frequencies must sum to > 0");
    for (const pD of DD.iD) bz(pD, zD)
  }

  function Pz(DD, zD) {
    const {
      blockName: wD,
      hD: pD,
      nD: sD,
      MD: KD
    } = DD;
    if (void 0 === (0, Qz.w)(wD, zD)) throw new Error(`Custom world-gen cave decoration blockName "${wD}" not found in blockMetadata`);
    if (!pD && !sD && !KD) throw new Error(`Custom world-gen cave decoration "${wD}" must allow at least one of floor/walls/ceiling anchoring`);
    if (sD)
      for (const rD of ["meta|rot1|side", "meta|rot2|side", "meta|rot3|side", "meta|rot4|side"]) Cz(wD, rD, zD);
    if (KD && Cz(wD, "meta|rot1|top", zD), xz(DD.OD, wD, "OD"), xz(DD.JD, wD, "JD"), !Number.isInteger(DD.ED) || DD.ED < 0) throw new Error(`Custom world-gen cave decoration "${wD}" minPlacements must be a non-negative integer, got ${DD.ED}`);
    if (!(0, Qz.B)(DD.QD) && (xz(DD.QD.VD, wD, "depthRamp.deepClusterChance"), DD.QD.PD <= DD.QD.CD)) throw new Error(`Custom world-gen cave decoration "${wD}" deepY must be strictly smaller than shallowY, but ${DD.QD.PD} <= ${DD.QD.CD} `)
  }

  function Cz(DD, zD, wD) {
    const pD = `${DD}|${zD}`;
    if (void 0 === (0, Qz.w)(pD, wD)) throw new Error(`Custom world-gen cave decoration "${DD}" is missing directional variant "${pD}" required for wall/ceiling anchoring`)
  }

  function xz(DD, zD, wD) {
    if (DD < 0 || DD > 1) throw new Error(`Custom world-gen cave decoration "${zD}" ${wD} must be in [0, 1], got ${DD}`)
  }

  function Tz(DD, zD) {
    if (DD.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${DD.frequency}`);
    if (void 0 === (0, Qz.w)(DD.bD, zD)) throw new Error(`Custom world-gen biome topsoilBlock "${DD.bD}" not found in blockMetadata`);
    if (void 0 === (0, Qz.w)(DD.jD, zD)) throw new Error(`Custom world-gen biome lowsoilBlock "${DD.jD}" not found in blockMetadata`);
    if (0 === DD.dD.length) throw new Error("Custom world-gen biome must have at least one stoneType");
    for (const wD of DD.dD) {
      if (wD.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${wD.frequency}`);
      if (void 0 === (0, Qz.w)(wD.blockName, zD)) throw new Error(`Custom world-gen biome stoneType blockName "${wD.blockName}" not found in blockMetadata`)
    }
  }

  function bz(DD, zD) {
    if (void 0 === (0, Qz.w)(DD.blockName, zD)) throw new Error(`Custom world-gen ore blockName "${DD.blockName}" not found in blockMetadata`);
    if (DD.radius < 0) throw new Error(`Custom world-gen ore "${DD.blockName}" radius must be >= 0, got ${DD.radius}`);
    if (DD.WD <= 0) throw new Error(`Custom world-gen ore "${DD.blockName}" minDistBetweenDeposits must be > 0, got ${DD.WD}`);
    if (DD.LD > DD.cD) throw new Error(`Custom world-gen ore "${DD.blockName}" minY (${DD.LD}) must be <= maxY (${DD.cD})`);
    if (DD.ND < 0 || DD.ND > 1) throw new Error(`Custom world-gen ore "${DD.blockName}" spawnChance must be in [0, 1], got ${DD.ND}`)
  }
  const jz = "buildAFactory2/wasteland",
    dz = {
      blockName: "Uranium Ore",
      radius: 2,
      WD: 10,
      LD: -98,
      cD: -78,
      ND: .4
    },
    Sz = [{
      blockName: "Copper Ore",
      radius: 2,
      WD: 6,
      LD: -40,
      cD: 20,
      ND: .6
    }, {
      blockName: "Voltite Ore",
      radius: 2,
      WD: 10,
      LD: -75,
      cD: -55,
      ND: .4
    }],
    iz = {
      name: jz,
      mD: null
    };
  const lz = {
    [jz]: () => wD(39613).b
  };
  Math.round(29.999999999999996);
  const Wz = 0,
    Nz = 1,
    Zz = 2,
    yz = 32;
  const kz = 1048576;
  const mz = "1336701983750492191";

  function ez() {
    {
      if ("undefined" === typeof window) return !1;
      const DD = window.location.hostname;
      return DD.includes("preprod") || DD.includes(mz)
    }
  }
  const oz = [8, 11, 15, 16, 17, 18, 19],
    az = [];
  for (let fw = 0; fw <= 30; fw++) oz.includes(fw) || az.push(10 * fw);
  const uz = az;
  uz.filter((DD => 0 !== DD));
  const vz = function(DD) {
      if (void 0 === DD || "" === DD) return 0;
      const zD = Number(DD);
      if (!uz.includes(zD)) throw new Error(`Invalid port offset "${DD}". Must be one of: ${uz.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
      return zD
    }("0"),
    tz = 4500;

  function Fz(DD, zD) {
    const wD = {};
    for (const pD of Object.keys(DD)) wD[pD] = DD[pD] + zD;
    return wD
  }
  const Yz = {
      1: 6585,
      2: 6586,
      3: 6587
    },
    Hz = {
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
    qz = {
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
  ! function(DD) {
    const zD = ez() ? Yz : Hz;
    Fz(zD, DD), Fz(qz, DD)
  }(vz);
  const Dw = {
    localGameName: null,
    devOnlyGameNames: ["testGym", "schematicTester"],
    allowDuplicateIds: !1,
    useLocalDatabase: !1,
    useBillingSandbox: !1,
    useBillingTestProjects: !1,
    greenlightChecksEnabled: !0,
    offlineMode: !1,
    useYoutubeApi: !1,
    localDomain: "localhost",
    useAdsInDev: !1,
    msnDevPublicKey: null
  };
  !0 === Dw.offlineMode && (console.log("Booting in offline mode..."), !1 === Dw.useLocalDatabase && console.log("useLocalDatabase is false in offline mode. Setting useLocalDatabase to true."), Dw.useLocalDatabase = !0, !0 === Dw.greenlightChecksEnabled && console.log("greenlightChecksEnabled is true in offline mode. Setting greenlightChecksEnabled to false."), Dw.greenlightChecksEnabled = !1, Dw.useBillingSandbox = !0);
  const zw = 10,
    ww = 3,
    pw = (Dw.greenlightChecksEnabled, Dw.greenlightChecksEnabled, {
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
  const sw = new Set;
  for (const fw in pw) {
    const DD = pw[fw].code;
    if (sw.has(DD)) throw new Error(`Duplicate leave code: ${DD}`);
    sw.add(DD)
  }! function() {
    const DD = rw(zw + 1, ww + 1);
    let zD = DD;
    for (; Kw(zD) < DD;) zD++
  }();

  function Kw(DD) {
    return DD - Math.floor(DD / 6)
  }

  function rw(DD, zD) {
    const wD = Math.max(DD, zD);
    let pD = 0;
    for (let sD = -wD; sD <= wD; sD++)
      for (let KD = -wD; KD <= wD; KD++)
        for (let rD = -wD; rD <= wD; rD++) Lw(DD, zD, sD, KD, rD) && pD++;
    return pD
  }

  function Lw(DD, zD, wD, pD, sD) {
    const KD = wD * wD + sD * sD;
    return DD === zD ? KD + pD * pD <= DD * DD : DD > zD ? Math.abs(pD) <= zD && KD + pD * pD <= DD * DD : KD <= DD * DD && KD + pD * pD <= zD * zD
  }
  const gw = 65536;
  ! function(DD) {
    const zD = 6815744 + (wD = DD, Math.floor(33554432 * wD / 6144)) + 135680 * DD;
    var wD;
    Math.ceil((85983232 + zD) / gw)
  }(6144);
  const Rw = 16 * kz;

  function Aw(DD) {
    return function(DD) {
      return bD((() => DD), pD)
    }(DD)
  }
  const Uw = globalThis.WorkerGlobalScope;
  if (void 0 !== Uw && globalThis instanceof Uw) {
    const DD = Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(69)]).then((() => wD(39708))).then((DD => {
      let {
        worldGenMetadata: zD
      } = DD;
      return zD
    }));
    DD.catch((() => {})),
      function(DD, zD) {
        let {
          initWasm: wD = Aw,
          terrains: pD,
          loadTables: sD,
          now: KD
        } = zD, rD = 0, LD = null, cD = null, gD = null, AD = new Uint16Array(0), UD = !1, fD = !1;
        const ID = function(DD, zD, wD) {
            let pD = 0,
              sD = -1,
              KD = !1;
            const rD = () => {
              if (KD) return;
              let rD;
              pD = 0;
              try {
                rD = DD.stats()
              } catch (LD) {
                return KD = !0, void wD(LD)
              }
              sD = rD.memoryBytes, zD(rD)
            };
            return {
              now: rD,
              afterJob: () => {
                pD++, (pD >= 64 || DD.memoryBytes() !== sD) && rD()
              }
            }
          }(WD(), (zD => {
            DD.postMessage({
              type: "memory",
              stats: zD
            })
          }), (zD => {
            fD = !0, cD = null, DD.postMessage({
              type: "lost",
              reason: `its memory stats trapped (${String(zD)})`
            })
          })),
          BD = (DD, zD) => {
            if (!cD) throw new Error("no encoder");
            try {
              const wD = cD.CG();
              new Uint16Array(TD().buffer, wD, DD.length).set(DD), cD.encode(zD);
              const pD = function(DD) {
                return String.fromCharCode(...new Uint8Array(TD().buffer, DD.xG(), 32))
              }(cD);
              return UD = !0, pD
            } catch (wD) {
              throw fD = !0, wD
            }
          };
        DD.onmessage = zD => {
          let {
            data: GD
          } = zD;
          switch (GD.type) {
            case "start":
              rD = GD.CI, AD = new Uint16Array(rD * rD * rD),
                function(zD) {
                  if (32 === rD)
                    if (wD(zD)) {
                      try {
                        WD().setCeiling(Rw)
                      } catch (pD) {
                        return void DD.postMessage({
                          type: "lost",
                          reason: `the memory ceiling was not set (${String(pD)})`
                        })
                      }
                      try {
                        cD = new(Ez().VG)
                      } catch (pD) {
                        return void DD.postMessage({
                          type: "lost",
                          reason: `GeneratedChunkEncoder did not start (${String(pD)})`
                        })
                      }
                      sD().then((zD => {
                        LD = zD, DD.postMessage({
                          type: "started"
                        }), ID.now()
                      }), (zD => {
                        DD.postMessage({
                          type: "lost",
                          reason: `the block and item tables did not load (${String(zD)})`
                        })
                      }))
                    } else DD.postMessage({
                      type: "lost",
                      reason: `wasm did not start (${CD()})`
                    });
                  else DD.postMessage({
                    type: "lost",
                    reason: `chunk size ${rD} is not the encoder's 32`
                  })
                }(GD.module);
              break;
            case "seed": {
              const {
                settings: DD
              } = GD;
              if (gD = null, null === DD) break;
              if (null === LD) throw new Error("a map's seed before the block and item tables loaded");
              try {
                gD = new Xz(rD, LD.blockMetadata, LD.itemMetadata, DD.zD, !1, DD.wD, DD.sD, pD, BD)
              } catch (hD) {
                console.error("[bloxd-wasm-client] the map's world generator did not start", hD)
              }
              break
            }
            case "generate":
              ! function(zD, wD, pD, sD, LD) {
                if (fD || !cD) return void DD.postMessage({
                  type: "result",
                  ticket: zD,
                  status: Zz,
                  workerUs: 0,
                  bytes: LD,
                  len: 0
                }, [LD]);
                UD = !1;
                const BD = KD();
                let GD = !1;
                gD && (AD.fill(0), GD = void 0 !== gD.getChunk(RD()(AD, [rD, rD, rD]), wD, pD, sD));
                const hD = (nD = BD, MD = KD(), Math.min(4294967295, Math.max(0, Math.round(1e3 * (MD - nD)))));
                var nD, MD;
                let OD = null;
                if (!fD && GD && UD) try {
                  OD = function(DD, zD) {
                    const wD = DD.TG(),
                      pD = yz + wD,
                      sD = zD.byteLength >= pD ? zD : new ArrayBuffer(pD),
                      KD = TD().buffer,
                      rD = new Uint8Array(sD, 0, pD);
                    return rD.set(new Uint8Array(KD, DD.xG(), yz)), rD.set(new Uint8Array(KD, DD.bG(), wD), yz), {
                      bytes: sD,
                      len: pD
                    }
                  }(cD, LD)
                } catch {
                  fD = !0
                }
                fD ? (cD = null, DD.postMessage({
                  type: "result",
                  ticket: zD,
                  status: Zz,
                  workerUs: hD,
                  bytes: LD,
                  len: 0
                }, [LD])) : null === OD ? DD.postMessage({
                  type: "result",
                  ticket: zD,
                  status: Nz,
                  workerUs: hD,
                  bytes: LD,
                  len: 0
                }, [LD]) : OD.bytes === LD ? DD.postMessage({
                  type: "result",
                  ticket: zD,
                  status: Wz,
                  workerUs: hD,
                  bytes: LD,
                  len: OD.len
                }, [LD]) : DD.postMessage({
                  type: "result",
                  ticket: zD,
                  status: Wz,
                  workerUs: hD,
                  bytes: OD.bytes,
                  len: OD.len,
                  spare: LD
                }, [OD.bytes, LD]), fD || ID.afterJob()
              }(GD.ticket, GD.x, GD.y, GD.z, GD.bytes)
          }
        }
      }(globalThis, {
        terrains: lz,
        loadTables: () => DD,
        now: () => performance.now()
      })
  }
})();