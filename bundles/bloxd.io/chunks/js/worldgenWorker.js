/*! For license information please see wp3j0a.worldgenWorker.c3b77bb6.chunk.js.LICENSE.txt */
(() => {
  var GG = {
      1589: GG => {
        const bG = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
          ZG = () => bG.now(),
          wG = GG => GG === 1 / 0 || (GG => GG && GG === Math.floor(GG) && GG > 0 && isFinite(GG))(GG);
        class SG {
          constructor() {
            let {
              max: GG = 1 / 0,
              ttl: bG,
              updateAgeOnGet: ZG = !1,
              checkAgeOnGet: SG = !1,
              noUpdateTTL: LG = !1,
              dispose: yG,
              noDisposeOnSet: kG = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.expirations = Object.create(null), this.data = new Map, this.expirationMap = new Map, void 0 !== bG && !wG(bG)) throw new TypeError("ttl must be positive integer or Infinity if set");
            if (!wG(GG)) throw new TypeError("max must be positive integer or Infinity");
            if (this.ttl = bG, this.max = GG, this.updateAgeOnGet = !!ZG, this.checkAgeOnGet = !!SG, this.noUpdateTTL = !!LG, this.noDisposeOnSet = !!kG, void 0 !== yG) {
              if ("function" !== typeof yG) throw new TypeError("dispose must be function if set");
              this.dispose = yG
            }
            this.timer = void 0, this.timerExpiration = void 0
          }
          setTimer(GG, bG) {
            if (this.timerExpiration < GG) return;
            this.timer && clearTimeout(this.timer);
            const wG = setTimeout((() => {
              this.timer = void 0, this.timerExpiration = void 0, this.purgeStale();
              for (const GG in this.expirations) {
                this.setTimer(GG, Math.max(0, GG - ZG()));
                break
              }
            }), bG);
            wG.unref && wG.unref(), this.timerExpiration = GG, this.timer = wG
          }
          cancelTimer() {
            this.timer && (clearTimeout(this.timer), this.timerExpiration = void 0, this.timer = void 0)
          }
          cancelTimers() {
            return process.emitWarning('TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no "s"), and will be removed in the next major version update'), this.cancelTimer()
          }
          clear() {
            const GG = this.dispose !== SG.prototype.dispose ? [...this] : [];
            this.data.clear(), this.expirationMap.clear(), this.cancelTimer(), this.expirations = Object.create(null);
            for (const [bG, ZG] of GG) this.dispose(ZG, bG, "delete")
          }
          setTTL(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ttl;
            const wG = this.expirationMap.get(GG);
            if (void 0 !== wG) {
              const bG = this.expirations[wG];
              !bG || bG.length <= 1 ? delete this.expirations[wG] : this.expirations[wG] = bG.filter((bG => bG !== GG))
            }
            if (bG !== 1 / 0) {
              const wG = Math.floor(ZG() + bG);
              this.expirationMap.set(GG, wG), this.expirations[wG] || (this.expirations[wG] = [], this.setTimer(wG, bG)), this.expirations[wG].push(GG)
            } else this.expirationMap.set(GG, 1 / 0)
          }
          set(GG, bG) {
            let {
              ttl: ZG = this.ttl,
              noUpdateTTL: SG = this.noUpdateTTL,
              noDisposeOnSet: LG = this.noDisposeOnSet
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!wG(ZG)) throw new TypeError("ttl must be positive integer or Infinity");
            if (this.expirationMap.has(GG)) {
              SG || this.setTTL(GG, ZG);
              const wG = this.data.get(GG);
              wG !== bG && (this.data.set(GG, bG), LG || this.dispose(wG, GG, "set"))
            } else this.setTTL(GG, ZG), this.data.set(GG, bG);
            for (; this.size > this.max;) this.purgeToCapacity();
            return this
          }
          has(GG) {
            return this.data.has(GG)
          }
          getRemainingTTL(GG) {
            const bG = this.expirationMap.get(GG);
            return bG === 1 / 0 ? bG : void 0 !== bG ? Math.max(0, Math.ceil(bG - ZG())) : 0
          }
          get(GG) {
            let {
              updateAgeOnGet: bG = this.updateAgeOnGet,
              ttl: ZG = this.ttl,
              checkAgeOnGet: wG = this.checkAgeOnGet
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const SG = this.data.get(GG);
            if (!wG || 0 !== this.getRemainingTTL(GG)) return bG && this.setTTL(GG, ZG), SG;
            this.delete(GG)
          }
          dispose(GG, bG) {}
          delete(GG) {
            const bG = this.expirationMap.get(GG);
            if (void 0 !== bG) {
              const ZG = this.data.get(GG);
              this.data.delete(GG), this.expirationMap.delete(GG);
              const wG = this.expirations[bG];
              return wG && (wG.length <= 1 ? delete this.expirations[bG] : this.expirations[bG] = wG.filter((bG => bG !== GG))), this.dispose(ZG, GG, "delete"), 0 === this.size && this.cancelTimer(), !0
            }
            return !1
          }
          purgeToCapacity() {
            for (const GG in this.expirations) {
              const bG = this.expirations[GG];
              if (!(this.size - bG.length >= this.max)) {
                const GG = this.size - this.max,
                  ZG = [];
                for (const wG of bG.splice(0, GG)) ZG.push([wG, this.data.get(wG)]), this.data.delete(wG), this.expirationMap.delete(wG);
                for (const [bG, wG] of ZG) this.dispose(wG, bG, "evict");
                return
              } {
                delete this.expirations[GG];
                const ZG = [];
                for (const GG of bG) ZG.push([GG, this.data.get(GG)]), this.data.delete(GG), this.expirationMap.delete(GG);
                for (const [GG, bG] of ZG) this.dispose(bG, GG, "evict")
              }
            }
          }
          get size() {
            return this.data.size
          }
          purgeStale() {
            const GG = Math.ceil(ZG());
            for (const bG in this.expirations) {
              if ("Infinity" === bG || bG > GG) return;
              const ZG = [...this.expirations[bG] || []],
                wG = [];
              delete this.expirations[bG];
              for (const GG of ZG) wG.push([GG, this.data.get(GG)]), this.data.delete(GG), this.expirationMap.delete(GG);
              for (const [GG, bG] of wG) this.dispose(bG, GG, "stale")
            }
            0 === this.size && this.cancelTimer()
          }* entries() {
            for (const GG in this.expirations)
              for (const bG of this.expirations[GG]) yield [bG, this.data.get(bG)]
          }* keys() {
            for (const GG in this.expirations)
              for (const bG of this.expirations[GG]) yield bG
          }* values() {
            for (const GG in this.expirations)
              for (const bG of this.expirations[GG]) yield this.data.get(bG)
          } [Symbol.iterator]() {
            return this.entries()
          }
        }
        GG.exports = SG
      },
      2845: GG => {
        GG.exports = function(GG) {
          for (var bG = new Array(GG), ZG = 0; ZG < GG; ++ZG) bG[ZG] = ZG;
          return bG
        }
      },
      2848: GG => {
        function bG(GG) {
          return !!GG.constructor && "function" === typeof GG.constructor.isBuffer && GG.constructor.isBuffer(GG)
        }
        GG.exports = function(GG) {
          return null != GG && (bG(GG) || function(GG) {
            return "function" === typeof GG.readFloatLE && "function" === typeof GG.slice && bG(GG.slice(0, 0))
          }(GG) || !!GG._isBuffer)
        }
      },
      40141: GG => {
        GG.exports = function(GG, bG) {
          bG = bG || 2;
          for (var ZG = 2 * (GG = GG || 1) + 1, wG = Math.pow(ZG, bG) - 1, SG = new Array(wG), LG = 0; LG < wG; LG++)
            for (var yG = SG[LG] = new Array(bG), kG = LG < wG / 2 ? LG : LG + 1, UG = 1; UG <= bG; UG++) {
              var YG = kG % Math.pow(ZG, UG);
              yG[UG - 1] = YG / Math.pow(ZG, UG - 1) - GG, kG -= YG
            }
          return SG
        }
      },
      2837: (GG, bG, ZG) => {
        var wG = ZG(2845),
          SG = ZG(2848),
          LG = "undefined" !== typeof Float64Array;

        function yG(GG, bG) {
          return GG[0] - bG[0]
        }

        function kG() {
          var GG, bG = this.stride,
            ZG = new Array(bG.length);
          for (GG = 0; GG < ZG.length; ++GG) ZG[GG] = [Math.abs(bG[GG]), GG];
          ZG.sort(yG);
          var wG = new Array(ZG.length);
          for (GG = 0; GG < wG.length; ++GG) wG[GG] = ZG[GG][1];
          return wG
        }

        function UG(GG, bG) {
          var ZG = ["View", bG, "d", GG].join("");
          bG < 0 && (ZG = "View_Nil" + GG);
          var SG = "generic" === GG;
          if (-1 === bG) {
            var LG = "function " + ZG + "(a){this.data=a;};var proto=" + ZG + ".prototype;proto.dtype='" + GG + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + ZG + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + ZG + "(a){return new " + ZG + "(a);}";
            return new Function(LG)()
          }
          if (0 === bG) {
            LG = "function " + ZG + "(a,d) {this.data = a;this.offset = d};var proto=" + ZG + ".prototype;proto.dtype='" + GG + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + ZG + "_copy() {return new " + ZG + "(this.data,this.offset)};proto.pick=function " + ZG + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + ZG + "_get(){return " + (SG ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + ZG + "_set(v){return " + (SG ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + ZG + "(a,b,c,d){return new " + ZG + "(a,d)}";
            return new Function("TrivialArray", LG)(YG[GG][0])
          }
          LG = ["'use strict'"];
          var yG = wG(bG),
            UG = yG.map((function(GG) {
              return "i" + GG
            })),
            VG = "this.offset+" + yG.map((function(GG) {
              return "this.stride[" + GG + "]*i" + GG
            })).join("+"),
            pG = yG.map((function(GG) {
              return "b" + GG
            })).join(","),
            fG = yG.map((function(GG) {
              return "c" + GG
            })).join(",");
          LG.push("function " + ZG + "(a," + pG + "," + fG + ",d){this.data=a", "this.shape=[" + pG + "]", "this.stride=[" + fG + "]", "this.offset=d|0}", "var proto=" + ZG + ".prototype", "proto.dtype='" + GG + "'", "proto.dimension=" + bG), LG.push("Object.defineProperty(proto,'size',{get:function " + ZG + "_size(){return " + yG.map((function(GG) {
            return "this.shape[" + GG + "]"
          })).join("*"), "}})"), 1 === bG ? LG.push("proto.order=[0]") : (LG.push("Object.defineProperty(proto,'order',{get:"), bG < 4 ? (LG.push("function " + ZG + "_order(){"), 2 === bG ? LG.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === bG && LG.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : LG.push("ORDER})")), LG.push("proto.set=function " + ZG + "_set(" + UG.join(",") + ",v){"), SG ? LG.push("return this.data.set(" + VG + ",v)}") : LG.push("return this.data[" + VG + "]=v}"), LG.push("proto.get=function " + ZG + "_get(" + UG.join(",") + "){"), SG ? LG.push("return this.data.get(" + VG + ")}") : LG.push("return this.data[" + VG + "]}"), LG.push("proto.index=function " + ZG + "_index(", UG.join(), "){return " + VG + "}"), LG.push("proto.hi=function " + ZG + "_hi(" + UG.join(",") + "){return new " + ZG + "(this.data," + yG.map((function(GG) {
            return ["(typeof i", GG, "!=='number'||i", GG, "<0)?this.shape[", GG, "]:i", GG, "|0"].join("")
          })).join(",") + "," + yG.map((function(GG) {
            return "this.stride[" + GG + "]"
          })).join(",") + ",this.offset)}");
          var QG = yG.map((function(GG) {
              return "a" + GG + "=this.shape[" + GG + "]"
            })),
            KG = yG.map((function(GG) {
              return "c" + GG + "=this.stride[" + GG + "]"
            }));
          LG.push("proto.lo=function " + ZG + "_lo(" + UG.join(",") + "){var b=this.offset,d=0," + QG.join(",") + "," + KG.join(","));
          for (var hG = 0; hG < bG; ++hG) LG.push("if(typeof i" + hG + "==='number'&&i" + hG + ">=0){d=i" + hG + "|0;b+=c" + hG + "*d;a" + hG + "-=d}");
          LG.push("return new " + ZG + "(this.data," + yG.map((function(GG) {
            return "a" + GG
          })).join(",") + "," + yG.map((function(GG) {
            return "c" + GG
          })).join(",") + ",b)}"), LG.push("proto.step=function " + ZG + "_step(" + UG.join(",") + "){var " + yG.map((function(GG) {
            return "a" + GG + "=this.shape[" + GG + "]"
          })).join(",") + "," + yG.map((function(GG) {
            return "b" + GG + "=this.stride[" + GG + "]"
          })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
          for (hG = 0; hG < bG; ++hG) LG.push("if(typeof i" + hG + "==='number'){d=i" + hG + "|0;if(d<0){c+=b" + hG + "*(a" + hG + "-1);a" + hG + "=ceil(-a" + hG + "/d)}else{a" + hG + "=ceil(a" + hG + "/d)}b" + hG + "*=d}");
          LG.push("return new " + ZG + "(this.data," + yG.map((function(GG) {
            return "a" + GG
          })).join(",") + "," + yG.map((function(GG) {
            return "b" + GG
          })).join(",") + ",c)}");
          var dG = new Array(bG),
            JG = new Array(bG);
          for (hG = 0; hG < bG; ++hG) dG[hG] = "a[i" + hG + "]", JG[hG] = "b[i" + hG + "]";
          LG.push("proto.transpose=function " + ZG + "_transpose(" + UG + "){" + UG.map((function(GG, bG) {
            return GG + "=(" + GG + "===undefined?" + bG + ":" + GG + "|0)"
          })).join(";"), "var a=this.shape,b=this.stride;return new " + ZG + "(this.data," + dG.join(",") + "," + JG.join(",") + ",this.offset)}"), LG.push("proto.pick=function " + ZG + "_pick(" + UG + "){var a=[],b=[],c=this.offset");
          for (hG = 0; hG < bG; ++hG) LG.push("if(typeof i" + hG + "==='number'&&i" + hG + ">=0){c=(c+this.stride[" + hG + "]*i" + hG + ")|0}else{a.push(this.shape[" + hG + "]);b.push(this.stride[" + hG + "])}");
          return LG.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), LG.push("return function construct_" + ZG + "(data,shape,stride,offset){return new " + ZG + "(data," + yG.map((function(GG) {
            return "shape[" + GG + "]"
          })).join(",") + "," + yG.map((function(GG) {
            return "stride[" + GG + "]"
          })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", LG.join("\n"))(YG[GG], kG)
        }
        var YG = {
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
        GG.exports = function(GG, bG, ZG, wG) {
          if (void 0 === GG) return (0, YG.array[0])([]);
          "number" === typeof GG && (GG = [GG]), void 0 === bG && (bG = [GG.length]);
          var yG = bG.length;
          if (void 0 === ZG) {
            ZG = new Array(yG);
            for (var kG = yG - 1, VG = 1; kG >= 0; --kG) ZG[kG] = VG, VG *= bG[kG]
          }
          if (void 0 === wG) {
            wG = 0;
            for (kG = 0; kG < yG; ++kG) ZG[kG] < 0 && (wG -= (bG[kG] - 1) * ZG[kG])
          }
          for (var pG = function(GG) {
              if (SG(GG)) return "buffer";
              if (LG) switch (Object.prototype.toString.call(GG)) {
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
              return Array.isArray(GG) ? "array" : "generic"
            }(GG), fG = YG[pG]; fG.length <= yG + 1;) fG.push(UG(pG, fG.length - 1));
          return (0, fG[yG + 1])(GG, bG, ZG, wG)
        }
      },
      40119: (GG, bG, ZG) => {
        var wG = ZG(40126).integer,
          SG = ZG(40134),
          LG = ZG(40139);

        function yG(GG, bG) {
          for (var ZG = 0, wG = 0; wG < GG.length; wG++) ZG += Math.pow(GG[wG] - bG[wG], 2);
          return ZG
        }

        function kG(GG, bG) {
          if ("function" === typeof GG.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
          this.shape = GG.shape, this.minDistance = GG.minDistance, this.maxDistance = GG.maxDistance || 2 * GG.minDistance, this.maxTries = Math.ceil(Math.max(1, GG.tries || 30)), this.rng = bG || Math.random, this.dimension = this.shape.length, this.squaredMinDistance = this.minDistance * this.minDistance, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.minDistance / Math.sqrt(this.dimension), this.neighbourhood = LG(this.dimension), this.currentPoint = null, this.processList = [], this.samplePoints = [], this.gridShape = [];
          for (var ZG = 0; ZG < this.dimension; ZG++) this.gridShape.push(Math.ceil(this.shape[ZG] / this.cellSize));
          this.grid = wG(this.gridShape)
        }
        kG.prototype.shape = null, kG.prototype.dimension = null, kG.prototype.minDistance = null, kG.prototype.maxDistance = null, kG.prototype.minDistancePlusEpsilon = null, kG.prototype.squaredMinDistance = null, kG.prototype.deltaDistance = null, kG.prototype.cellSize = null, kG.prototype.maxTries = null, kG.prototype.rng = null, kG.prototype.neighbourhood = null, kG.prototype.currentPoint = null, kG.prototype.processList = null, kG.prototype.samplePoints = null, kG.prototype.gridShape = null, kG.prototype.grid = null, kG.prototype.addRandomPoint = function() {
          for (var GG = new Array(this.dimension), bG = 0; bG < this.dimension; bG++) GG[bG] = this.rng() * this.shape[bG];
          return this.directAddPoint(GG)
        }, kG.prototype.addPoint = function(GG) {
          var bG, ZG = !0;
          if (GG.length === this.dimension)
            for (bG = 0; bG < this.dimension && ZG; bG++) ZG = GG[bG] >= 0 && GG[bG] <= this.shape[bG];
          else ZG = !1;
          return ZG ? this.directAddPoint(GG) : null
        }, kG.prototype.directAddPoint = function(GG) {
          var bG, ZG = 0,
            wG = this.grid.stride;
          for (this.processList.push(GG), this.samplePoints.push(GG), bG = 0; bG < this.dimension; bG++) ZG += (GG[bG] / this.cellSize | 0) * wG[bG];
          return this.grid.data[ZG] = this.samplePoints.length, GG
        }, kG.prototype.inNeighbourhood = function(GG) {
          var bG, ZG, wG, SG, LG = this.dimension,
            kG = this.grid.stride;
          for (bG = 0; bG < this.neighbourhood.length; bG++) {
            for (ZG = 0, wG = 0; wG < LG; wG++) {
              if ((SG = (GG[wG] / this.cellSize | 0) + this.neighbourhood[bG][wG]) < 0 || SG >= this.gridShape[wG]) {
                ZG = -1;
                break
              }
              ZG += SG * kG[wG]
            }
            if (-1 !== ZG && 0 !== this.grid.data[ZG] && yG(GG, this.samplePoints[this.grid.data[ZG] - 1]) < this.squaredMinDistance) return !0
          }
          return !1
        }, kG.prototype.next = function() {
          for (var GG, bG, ZG, wG, LG, yG, kG; this.processList.length > 0;) {
            for (null === this.currentPoint && (this.currentPoint = this.processList.shift()), wG = this.currentPoint, GG = 0; GG < this.maxTries; GG++) {
              for (yG = !0, ZG = this.minDistancePlusEpsilon + this.deltaDistance * this.rng(), 2 === this.dimension ? (bG = this.rng() * Math.PI * 2, LG = [Math.cos(bG), Math.sin(bG)]) : LG = SG(this.dimension, this.rng), kG = 0; yG && kG < this.dimension; kG++) LG[kG] = wG[kG] + LG[kG] * ZG, yG = LG[kG] >= 0 && LG[kG] < this.shape[kG];
              if (yG && !this.inNeighbourhood(LG)) return this.directAddPoint(LG)
            }
            GG === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, kG.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, kG.prototype.getAllPoints = function() {
          return this.samplePoints
        }, kG.prototype.getAllPointsWithDistance = function() {
          throw new Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation")
        }, kG.prototype.reset = function() {
          var GG = this.grid.data,
            bG = 0;
          for (bG = 0; bG < GG.length; bG++) GG[bG] = 0;
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, GG.exports = kG
      },
      40144: (GG, bG, ZG) => {
        var wG = ZG(40126).array,
          SG = ZG(40134),
          LG = ZG(40139);

        function yG(GG, bG) {
          for (var ZG = 0, wG = 0; wG < GG.length; wG++) ZG += Math.pow(GG[wG] - bG[wG], 2);
          return Math.sqrt(ZG)
        }

        function kG(GG, bG) {
          if ("function" !== typeof GG.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
          this.shape = GG.shape, this.minDistance = GG.minDistance, this.maxDistance = GG.maxDistance || 2 * GG.minDistance, this.maxTries = Math.ceil(Math.max(1, GG.tries || 30)), this.distanceFunction = GG.distanceFunction, this.bias = Math.max(0, Math.min(1, GG.bias || 0)), this.rng = bG || Math.random, this.dimension = this.shape.length, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.maxDistance / Math.sqrt(this.dimension), this.neighbourhood = LG(this.dimension), this.currentPoint = null, this.currentDistance = 0, this.processList = [], this.samplePoints = [], this.sampleDistance = [], this.gridShape = [];
          for (var ZG = 0; ZG < this.dimension; ZG++) this.gridShape.push(Math.ceil(this.shape[ZG] / this.cellSize));
          this.grid = wG(this.gridShape)
        }
        kG.prototype.shape = null, kG.prototype.dimension = null, kG.prototype.minDistance = null, kG.prototype.maxDistance = null, kG.prototype.minDistancePlusEpsilon = null, kG.prototype.deltaDistance = null, kG.prototype.cellSize = null, kG.prototype.maxTries = null, kG.prototype.distanceFunction = null, kG.prototype.bias = null, kG.prototype.rng = null, kG.prototype.neighbourhood = null, kG.prototype.currentPoint = null, kG.prototype.currentDistance = null, kG.prototype.processList = null, kG.prototype.samplePoints = null, kG.prototype.sampleDistance = null, kG.prototype.gridShape = null, kG.prototype.grid = null, kG.prototype.addRandomPoint = function() {
          for (var GG = new Array(this.dimension), bG = 0; bG < this.dimension; bG++) GG[bG] = this.rng() * this.shape[bG];
          return this.directAddPoint(GG)
        }, kG.prototype.addPoint = function(GG) {
          var bG, ZG = !0;
          if (GG.length === this.dimension)
            for (bG = 0; bG < this.dimension && ZG; bG++) ZG = GG[bG] >= 0 && GG[bG] <= this.shape[bG];
          else ZG = !1;
          return ZG ? this.directAddPoint(GG) : null
        }, kG.prototype.directAddPoint = function(GG) {
          var bG, ZG = 0,
            wG = this.grid.stride,
            SG = this.samplePoints.length;
          for (this.processList.push(SG), this.samplePoints.push(GG), this.sampleDistance.push(this.distanceFunction(GG)), bG = 0; bG < this.dimension; bG++) ZG += (GG[bG] / this.cellSize | 0) * wG[bG];
          return this.grid.data[ZG].push(SG), GG
        }, kG.prototype.inNeighbourhood = function(GG) {
          var bG, ZG, wG, SG, LG, kG, UG = this.dimension,
            YG = this.grid.stride,
            VG = this.distanceFunction(GG);
          for (bG = 0; bG < this.neighbourhood.length; bG++) {
            for (ZG = 0, wG = 0; wG < UG; wG++) {
              if ((SG = (GG[wG] / this.cellSize | 0) + this.neighbourhood[bG][wG]) < 0 || SG >= this.gridShape[wG]) {
                ZG = -1;
                break
              }
              ZG += SG * YG[wG]
            }
            if (-1 !== ZG && this.grid.data[ZG].length > 0)
              for (var pG = 0; pG < this.grid.data[ZG].length; pG++) {
                LG = this.samplePoints[this.grid.data[ZG][pG]], kG = this.sampleDistance[this.grid.data[ZG][pG]];
                var fG = Math.min(kG, VG),
                  QG = fG + (Math.max(kG, VG) - fG) * this.bias;
                if (yG(GG, LG) < this.minDistance + this.deltaDistance * QG) return !0
              }
          }
          return !1
        }, kG.prototype.next = function() {
          for (var GG, bG, ZG, wG, LG, yG, kG, UG; this.processList.length > 0;) {
            if (null === this.currentPoint) {
              var YG = this.processList.shift();
              this.currentPoint = this.samplePoints[YG], this.currentDistance = this.sampleDistance[YG]
            }
            for (wG = this.currentPoint, LG = this.currentDistance, GG = 0; GG < this.maxTries; GG++) {
              for (kG = !0, ZG = this.minDistancePlusEpsilon + this.deltaDistance * (LG + (1 - LG) * this.bias), 2 === this.dimension ? (bG = this.rng() * Math.PI * 2, yG = [Math.cos(bG), Math.sin(bG)]) : yG = SG(this.dimension, this.rng), UG = 0; kG && UG < this.dimension; UG++) yG[UG] = wG[UG] + yG[UG] * ZG, kG = yG[UG] >= 0 && yG[UG] < this.shape[UG];
              if (kG && !this.inNeighbourhood(yG)) return this.directAddPoint(yG)
            }
            GG === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, kG.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, kG.prototype.getAllPoints = function() {
          return this.samplePoints
        }, kG.prototype.getAllPointsWithDistance = function() {
          var GG, bG = new Array(this.samplePoints.length),
            ZG = 0,
            wG = 0;
          for (ZG = 0; ZG < this.samplePoints.length; ZG++) {
            for (GG = new Array(this.dimension + 1), wG = 0; wG < this.dimension; wG++) GG[wG] = this.samplePoints[ZG][wG];
            GG[this.dimension] = this.sampleDistance[ZG], bG[ZG] = GG
          }
          return bG
        }, kG.prototype.reset = function() {
          var GG = this.grid.data,
            bG = 0;
          for (bG = 0; bG < GG.length; bG++) GG[bG] = [];
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, GG.exports = kG
      },
      40139: (GG, bG, ZG) => {
        var wG = ZG(40141);
        var SG = {};
        GG.exports = function(GG) {
          return SG[GG] || (SG[GG] = function(GG) {
            var bG, ZG = wG(2, GG),
              SG = [];
            for (ZG = ZG.filter((function(bG) {
                for (var ZG = 0, wG = 0; wG < GG; wG++) ZG += Math.pow(Math.max(0, Math.abs(bG[wG]) - 1), 2);
                return ZG < GG
              })), bG = 0; bG < GG; bG++) SG.push(0);
            return ZG.push(SG), ZG.sort((function(bG, ZG) {
              var wG, SG = 0,
                LG = 0;
              for (wG = 0; wG < GG; wG++) SG += Math.pow(bG[wG], 2), LG += Math.pow(ZG[wG], 2);
              return SG < LG ? -1 : SG > LG ? 1 : 0
            })), ZG
          }(GG)), SG[GG]
        }
      },
      40114: (GG, bG, ZG) => {
        var wG = ZG(40119),
          SG = ZG(40144);

        function LG(GG, bG) {
          this.shape = GG.shape, "function" === typeof GG.distanceFunction ? this.implementation = new SG(GG, bG) : this.implementation = new wG(GG, bG)
        }
        LG.prototype.implementation = null, LG.prototype.addRandomPoint = function() {
          return this.implementation.addRandomPoint()
        }, LG.prototype.addPoint = function(GG) {
          return this.implementation.addPoint(GG)
        }, LG.prototype.next = function() {
          return this.implementation.next()
        }, LG.prototype.fill = function() {
          return this.implementation.fill()
        }, LG.prototype.getAllPoints = function() {
          return this.implementation.getAllPoints()
        }, LG.prototype.getAllPointsWithDistance = function() {
          return this.implementation.getAllPointsWithDistance()
        }, LG.prototype.reset = function() {
          this.implementation.reset()
        }, GG.exports = LG
      },
      40134: GG => {
        GG.exports = function(GG, bG) {
          var ZG, wG, SG, LG, yG, kG = new Array(GG),
            UG = Math.floor(GG / 2) << 1,
            YG = 0;
          for (yG = 0; yG < UG; yG += 2) ZG = -2 * Math.log(bG()), wG = Math.sqrt(ZG), SG = 2 * Math.PI * bG(), YG += ZG, kG[yG] = wG * Math.cos(SG), kG[yG + 1] = wG * Math.sin(SG);
          if (GG % 2) {
            var VG = Math.sqrt(-2 * Math.log(bG())) * Math.cos(2 * Math.PI * bG());
            kG[GG - 1] = VG, YG += Math.pow(VG, 2)
          }
          for (LG = 1 / Math.sqrt(YG), yG = 0; yG < GG; ++yG) kG[yG] *= LG;
          return kG
        }
      },
      40126: GG => {
        GG.exports = {
          integer: function(GG) {
            var bG, ZG = GG.length,
              wG = 1,
              SG = new Array(ZG);
            for (bG = ZG; bG > 0; bG--) SG[bG - 1] = wG, wG *= GG[bG - 1];
            return {
              stride: SG,
              data: new Uint32Array(wG)
            }
          },
          array: function(GG) {
            var bG, ZG, wG = GG.length,
              SG = 1,
              LG = new Array(wG),
              yG = [];
            for (bG = wG; bG > 0; bG--) LG[bG - 1] = SG, SG *= GG[bG - 1];
            for (ZG = 0; ZG < SG; ZG++) yG.push([]);
            return {
              stride: LG,
              data: yG
            }
          }
        }
      },
      38135: (GG, bG, ZG) => {
        var wG = ZG(38141);

        function SG(GG) {
          for (var bG, ZG, SG = 0, LG = GG.length, yG = 0; yG < GG.length;) {
            for (bG = GG[yG], ZG = 0; yG < LG && GG[yG] === bG;) ++yG, ++ZG;
            SG += wG.log2(ZG) / 7 | 0, SG += wG.log2(bG >>> 0) / 7 | 0, SG += 2
          }
          return SG
        }
        bG.size = SG, bG.encode = function(GG, bG) {
          bG || (bG = new Uint8Array(SG(GG)));
          for (var ZG, wG, LG = 0, yG = bG.length, kG = 0; kG < GG.length;) {
            for (ZG = GG[kG], wG = 0; kG < GG.length && GG[kG] === ZG;) ++kG, ++wG;
            for (; LG < yG && wG >= 128;) bG[LG++] = 128 + (127 & wG), wG >>>= 7;
            if (LG >= yG) throw new Error("RLE buffer overflow");
            for (bG[LG++] = wG, ZG >>>= 0; LG < yG && ZG >= 128;) bG[LG++] = 128 + (127 & ZG), ZG >>>= 7;
            if (LG >= yG) throw new Error("RLE buffer overflow");
            bG[LG++] = ZG
          }
          return bG
        }, bG.decode = function(GG, bG) {
          for (var ZG, wG, SG, LG, yG = bG.length, kG = GG.length, UG = 0, YG = 0; YG < kG;) {
            for (ZG = 0, wG = 0; YG < kG && GG[YG] >= 128;) ZG += (127 & GG[YG++]) << wG, wG += 7;
            if (ZG += GG[YG++] << wG, YG >= kG) throw new Error("RLE buffer underrun");
            if (UG + ZG > yG) throw new Error("Chunk buffer overflow");
            for (SG = 0, wG = 0; YG < kG && GG[YG] >= 128;) SG += (127 & GG[YG++]) << wG, wG += 7;
            if (YG >= kG) throw new Error("RLE buffer underrun");
            for (SG += GG[YG++] << wG, LG = 0; LG < ZG; ++LG) bG[UG++] = SG
          }
          return bG
        }
      },
      38141: (GG, bG) => {
        function ZG(GG) {
          var bG = 32;
          return (GG &= -GG) && bG--, 65535 & GG && (bG -= 16), 16711935 & GG && (bG -= 8), 252645135 & GG && (bG -= 4), 858993459 & GG && (bG -= 2), 1431655765 & GG && (bG -= 1), bG
        }
        bG.INT_BITS = 32, bG.INT_MAX = 2147483647, bG.INT_MIN = -1 << 31, bG.sign = function(GG) {
          return (GG > 0) - (GG < 0)
        }, bG.abs = function(GG) {
          var bG = GG >> 31;
          return (GG ^ bG) - bG
        }, bG.min = function(GG, bG) {
          return bG ^ (GG ^ bG) & -(GG < bG)
        }, bG.max = function(GG, bG) {
          return GG ^ (GG ^ bG) & -(GG < bG)
        }, bG.isPow2 = function(GG) {
          return !(GG & GG - 1) && !!GG
        }, bG.log2 = function(GG) {
          var bG, ZG;
          return bG = (GG > 65535) << 4, bG |= ZG = ((GG >>>= bG) > 255) << 3, bG |= ZG = ((GG >>>= ZG) > 15) << 2, (bG |= ZG = ((GG >>>= ZG) > 3) << 1) | (GG >>>= ZG) >> 1
        }, bG.log10 = function(GG) {
          return GG >= 1e9 ? 9 : GG >= 1e8 ? 8 : GG >= 1e7 ? 7 : GG >= 1e6 ? 6 : GG >= 1e5 ? 5 : GG >= 1e4 ? 4 : GG >= 1e3 ? 3 : GG >= 100 ? 2 : GG >= 10 ? 1 : 0
        }, bG.popCount = function(GG) {
          return 16843009 * ((GG = (858993459 & (GG -= GG >>> 1 & 1431655765)) + (GG >>> 2 & 858993459)) + (GG >>> 4) & 252645135) >>> 24
        }, bG.countTrailingZeros = ZG, bG.nextPow2 = function(GG) {
          return GG += 0 === GG, --GG, GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) + 1
        }, bG.prevPow2 = function(GG) {
          return GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) - (GG >>> 1)
        }, bG.parity = function(GG) {
          return GG ^= GG >>> 16, GG ^= GG >>> 8, GG ^= GG >>> 4, 27030 >>> (GG &= 15) & 1
        };
        var wG = new Array(256);
        ! function(GG) {
          for (var bG = 0; bG < 256; ++bG) {
            var ZG = bG,
              wG = bG,
              SG = 7;
            for (ZG >>>= 1; ZG; ZG >>>= 1) wG <<= 1, wG |= 1 & ZG, --SG;
            GG[bG] = wG << SG & 255
          }
        }(wG), bG.reverse = function(GG) {
          return wG[255 & GG] << 24 | wG[GG >>> 8 & 255] << 16 | wG[GG >>> 16 & 255] << 8 | wG[GG >>> 24 & 255]
        }, bG.interleave2 = function(GG, bG) {
          return (GG = 1431655765 & ((GG = 858993459 & ((GG = 252645135 & ((GG = 16711935 & ((GG &= 65535) | GG << 8)) | GG << 4)) | GG << 2)) | GG << 1)) | (bG = 1431655765 & ((bG = 858993459 & ((bG = 252645135 & ((bG = 16711935 & ((bG &= 65535) | bG << 8)) | bG << 4)) | bG << 2)) | bG << 1)) << 1
        }, bG.deinterleave2 = function(GG, bG) {
          return (GG = 65535 & ((GG = 16711935 & ((GG = 252645135 & ((GG = 858993459 & ((GG = GG >>> bG & 1431655765) | GG >>> 1)) | GG >>> 2)) | GG >>> 4)) | GG >>> 16)) << 16 >> 16
        }, bG.interleave3 = function(GG, bG, ZG) {
          return GG = 1227133513 & ((GG = 3272356035 & ((GG = 251719695 & ((GG = 4278190335 & ((GG &= 1023) | GG << 16)) | GG << 8)) | GG << 4)) | GG << 2), (GG |= (bG = 1227133513 & ((bG = 3272356035 & ((bG = 251719695 & ((bG = 4278190335 & ((bG &= 1023) | bG << 16)) | bG << 8)) | bG << 4)) | bG << 2)) << 1) | (ZG = 1227133513 & ((ZG = 3272356035 & ((ZG = 251719695 & ((ZG = 4278190335 & ((ZG &= 1023) | ZG << 16)) | ZG << 8)) | ZG << 4)) | ZG << 2)) << 2
        }, bG.deinterleave3 = function(GG, bG) {
          return (GG = 1023 & ((GG = 4278190335 & ((GG = 251719695 & ((GG = 3272356035 & ((GG = GG >>> bG & 1227133513) | GG >>> 2)) | GG >>> 4)) | GG >>> 8)) | GG >>> 16)) << 22 >> 22
        }, bG.nextCombination = function(GG) {
          var bG = GG | GG - 1;
          return bG + 1 | (~bG & -~bG) - 1 >>> ZG(GG) + 1
        }
      },
      40048: (GG, bG, ZG) => {
        ZG.d(bG, {
          c: () => Vb
        });
        var wG = ZG(40077),
          SG = ZG(40061),
          LG = ZG(40154);

        function yG(GG) {
          let bG = 2166136261;
          for (let ZG = 0; ZG < GG.length; ZG++) bG = Math.imul(bG ^ GG.charCodeAt(ZG), 16777619);
          return bG
        }

        function kG(GG) {
          return yG(`${GG}Wasteland`)
        }

        function UG(GG, bG, ZG) {
          let wG = Math.imul(GG, 668265261) ^ Math.imul(bG, 374761393) ^ ZG;
          return wG = Math.imul(wG ^ wG >>> 15, 2246822507), wG = Math.imul(wG ^ wG >>> 13, 3266489909), wG ^= wG >>> 16, (wG >>> 0) / 4294967296
        }

        function YG(GG, bG, ZG, wG) {
          return UG(GG, ZG, wG ^ Math.imul(bG, 1540483477))
        }
        const VG = {
          dustFlats: 30,
          scorchedMesa: 18,
          shatteredHighlands: 14,
          ruinFields: 12,
          saltFlats: 7,
          survivorGrove: 5
        };
        const pG = .3,
          fG = 528734635,
          QG = {
            dustFlats: .75,
            scorchedMesa: pG,
            shatteredHighlands: pG,
            ruinFields: pG,
            saltFlats: pG,
            survivorGrove: 0
          };

        function KG(GG, bG, ZG) {
          return UG(GG, bG, ZG ^ fG)
        }

        function hG(GG, bG, ZG, wG) {
          return 36 * (1 === wG ? GG : bG) + 2 + Math.floor(32 * UG(GG, bG, ZG ^ fG ^ wG))
        }
        var dG = ZG(40053),
          JG = ZG(40068);
        const rG = 160,
          zG = 10,
          EG = 3 * (Math.ceil(50 / 6) + 1) + 2 + zG,
          oG = .9238795325112867,
          XG = .7071067811865476,
          uG = .3826834323650898,
          iG = [
            [1, 0],
            [oG, uG],
            [XG, XG],
            [uG, oG]
          ].flatMap((GG => {
            let [bG, ZG] = GG;
            return [
              [bG, ZG],
              [-ZG, bG],
              [-bG, -ZG],
              [ZG, -bG]
            ]
          }));
        let CG = null,
          WG = null,
          mG = 0;

        function IG(GG, bG, ZG) {
          ! function(GG) {
            GG !== CG && (CG = GG, WG = (0, dG.f)(GG), mG = kG(GG))
          }(GG);
          const wG = 625341585 ^ mG,
            SG = rG - 2 * EG,
            LG = bG * rG + EG + Math.floor(UG(bG, ZG, 1 ^ wG) * SG),
            yG = ZG * rG + EG + Math.floor(UG(bG, ZG, 2 ^ wG) * SG),
            YG = Math.round(-8 + WG.getOctaves(LG, yG)),
            VG = -46 + Math.floor(7 * UG(bG, ZG, 3 ^ wG)),
            pG = YG - VG;
          if (pG < 20 || pG > 50) return null;
          const fG = Math.ceil(pG / 6);
          return {
            x: LG,
            z: yG,
            topY: YG,
            floorY: VG,
            turns: fG,
            pitch: pG / fG,
            radius: 3 * (fG + 1) + 2
          }
        }

        function FG(GG, bG, ZG, wG) {
          const SG = IG(GG, bG, ZG);
          if (!SG || "saltFlats" !== wG(SG.x, SG.z)) return null;
          const LG = SG.radius + zG + 2;
          for (const [yG, kG] of iG)
            for (const GG of [LG, LG / 2])
              if ("saltFlats" !== wG(Math.round(SG.x + yG * GG), Math.round(SG.z + kG * GG))) return null;
          return SG
        }

        function vG(GG, bG, ZG, wG) {
          const SG = bG - GG.x,
            LG = ZG - GG.z,
            yG = Math.sqrt(SG * SG + LG * LG);
          if (yG >= GG.radius + zG) return null;
          if (yG >= GG.radius) {
            const bG = yG - GG.radius,
              ZG = Math.floor(bG),
              SG = Math.min(Math.max(wG, GG.topY - ZG), GG.topY + ZG);
            return SG + Math.round((wG - SG) * bG / zG)
          }
          const kG = function(GG, bG) {
              const ZG = Math.abs(GG),
                wG = Math.abs(bG);
              if (0 === ZG && 0 === wG) return 0;
              const SG = Math.min(ZG, wG) / Math.max(ZG, wG);
              let LG = SG * (Math.PI / 4 + .273 * (1 - SG)) / (2 * Math.PI);
              return wG > ZG && (LG = .25 - LG), GG < 0 && (LG = .5 - LG), bG < 0 ? 1 - LG : LG
            }(SG, LG),
            UG = (GG.radius - yG) / 3 - kG,
            YG = Math.floor(UG);
          if (YG < 0) return GG.topY;
          if (YG >= GG.turns) return GG.floorY;
          const VG = 3 * (UG - YG) >= 2 ? 1 : 0;
          return Math.round(GG.topY - GG.pitch * (YG + kG)) + VG
        }

        function aG(GG, bG, ZG) {
          const wG = GG.radius + zG,
            SG = bG - GG.x,
            LG = ZG - GG.z;
          return SG * SG + LG * LG < wG * wG
        }
        const cG = ["White Baked Clay", "Clay", "Sand", "Light Gray Baked Clay", "Clay", "White Baked Clay", "Andesite", "Light Gray Baked Clay", "Stone", "Andesite", "Stone"],
          lG = ["Chalk", "Sand", "Clay"],
          jG = -40,
          PG = -20,
          MG = .05;
        class AG {
          constructor(GG, bG, ZG, wG) {
            this.seed = GG, this.fine = ZG, this.lookAt = wG, this.salt = void 0, this.cells = new Map, this.lastCellX = NaN, this.lastCellZ = NaN, this.lastHole = null, this.upperBandIds = void 0, this.bandIds = void 0, this.copperId = void 0, this.clayId = void 0, this.gravelId = void 0, this.salt = kG(GG);
            const SG = GG => bG[GG].id;
            this.upperBandIds = lG.map(SG), this.bandIds = cG.map(SG), this.copperId = SG("Copper Ore"), this.clayId = SG("Clay"), this.gravelId = SG("Gravel")
          }
          carveGround(GG, bG, ZG) {
            const wG = this.cellHole(GG, bG);
            return wG ? vG(wG, GG, bG, ZG) : null
          }
          taking(GG, bG) {
            const ZG = this.cellHole(GG, bG);
            return ZG && aG(ZG, GG, bG) ? ZG : null
          }
          clearsPrefab(GG, bG, ZG, wG, SG) {
            const LG = ZG + EG;
            for (let yG = Math.floor((GG - LG) / rG); yG <= Math.floor((GG + LG) / rG); yG++)
              for (let kG = Math.floor((bG - LG) / rG); kG <= Math.floor((bG + LG) / rG); kG++) {
                const LG = this.holeIn(yG, kG);
                if (LG && SG >= LG.floorY - JG.g && wG <= LG.topY + zG) {
                  const wG = LG.radius + zG + ZG;
                  if ((LG.x - GG) ** 2 + (LG.z - bG) ** 2 < wG * wG) return !1
                }
              }
            return !0
          }
          wallBlock(GG, bG, ZG, wG) {
            const SG = this.taking(GG, ZG);
            if (!SG || wG >= SG.topY) return 0;
            if (bG === wG && bG <= SG.floorY) return this.fine(GG, ZG) > .2 ? this.clayId : this.gravelId;
            if (bG >= jG && bG <= PG && YG(GG, bG, ZG, 1779033703 ^ this.salt) < MG) return this.copperId;
            const LG = Math.floor((-10 - bG - Math.round(this.fine(GG, ZG))) / 3);
            return LG < 0 ? this.upperBandIds[-LG % this.upperBandIds.length] : this.bandIds[Math.min(LG, this.bandIds.length - 1)]
          }
          cellHole(GG, bG) {
            return this.holeIn(Math.floor(GG / rG), Math.floor(bG / rG))
          }
          holeIn(GG, bG) {
            if (GG === this.lastCellX && bG === this.lastCellZ) return this.lastHole;
            const ZG = 65536 * GG + bG;
            let wG = this.cells.get(ZG);
            return void 0 === wG && (this.cells.size >= 4096 && this.cells.clear(), wG = FG(this.seed, GG, bG, this.lookAt), this.cells.set(ZG, wG)), this.lastCellX = GG, this.lastCellZ = bG, this.lastHole = wG, wG
          }
        }
        var sG = ZG(40105);
        const qG = new Set(["rock", "rubble", "dryCactus", "bone"]);
        class nG {
          constructor(GG, bG, ZG, wG, SG, LG) {
            this.rK = bG, this.chances = SG, this.mound = LG, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = ZG.salt ^ yG(wG), this.sinkholes = ZG.sinkholes;
            const kG = bG => GG[bG].id;
            this.ids = {
              deadBush: kG("Dead Bush"),
              rock1: kG("Andesite"),
              rock2: kG("Stone"),
              rock3: kG("Messy Stone"),
              rubble1: kG("Mossy Messy Stone"),
              rubble2: kG("Cracked Stone Bricks"),
              rubble3: kG("Messy Stone"),
              dryCactus: kG("Dry Fat Cactus"),
              bone: kG("Bone Block"),
              grass: kG("Grass"),
              tallGrass: kG("Tall Grass"),
              tallGrassTop: kG("Tall Grass|Top")
            }
          }
          addBiomeFloraToColumn(GG, bG, ZG, wG, SG, LG, yG) {
            const kG = this.mound(wG, LG);
            if (kG) {
              const UG = yG + 1 - SG;
              for (let SG = 0; SG < kG.height && UG + SG < this.rK; SG++) UG + SG >= 0 && GG.set(wG - bG, UG + SG, LG - ZG, kG.block);
              return
            }
            const YG = UG(wG, LG, this.salt);
            let VG = 0;
            for (const fG of this.order) {
              var pG;
              if (VG += null !== (pG = this.chances[fG]) && void 0 !== pG ? pG : 0, YG < VG) return void(qG.has(fG) && this.sinkholes.taking(wG, LG) || this.place(GG, wG - bG, yG + 1 - SG, LG - ZG, fG, UG(wG, LG, 1540483477 ^ this.salt)))
            }
          }
          place(GG, bG, ZG, wG, SG, LG) {
            const yG = (SG, LG) => {
                ZG + SG >= 0 && ZG + SG < this.rK && GG.set(bG, ZG + SG, wG, LG)
              },
              kG = this.ids;
            if ("rock" === SG) {
              const GG = LG < .5 ? kG.rock1 : LG < .8 ? kG.rock2 : kG.rock3;
              yG(0, GG), LG < .3 && yG(1, GG)
            } else "rubble" === SG ? yG(0, LG < .55 ? kG.rubble1 : LG < .75 ? kG.rubble2 : kG.rubble3) : "dryCactus" === SG ? (yG(0, kG.dryCactus), LG < .5 && yG(1, kG.dryCactus)) : "tallGrass" === SG ? (yG(0, kG.tallGrass), yG(1, kG.tallGrassTop)) : yG(0, kG[SG])
          }
        }
        class gG extends sG.k {
          constructor(GG, bG, ZG, wG, SG, LG) {
            super(GG, bG, ZG, wG, SG, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null), this.noise = LG, this.grassChance = 0, this.tallGrassChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = null, this.maxFloraHeight = 3, this.waterKept = .25, this.maxSurfacePrefabRelief = 6, this.floraChances = void 0, this.canyonStrength = 1, this.canyonDepth = 26, this.outcropChance = void 0, this.ids = void 0;
            const yG = {};
            for (const kG of ["Dry Grass Block", "Overgrown Dry Grass Block", "Grass Block", "Dirt", "Messy Dirt", "Rocky Dirt", "Gravel", "Sand", "Red Sand", "Clay", "Chalk", "Stone", "Andesite", "Messy Stone", "Mossy Messy Stone", "Cracked Stone Bricks", "Baked Clay", "Orange Baked Clay", "Brown Baked Clay", "Red Baked Clay", "Yellow Baked Clay", "Light Gray Baked Clay", "White Baked Clay", "Copper Ore", "Gold Ore", "Coal Ore", "Iron Ore"]) yG[kG] = bG[kG].id;
            this.ids = yG, this.lowsoilBlockType = yG.Dirt
          }
          init() {
            super.init(), this.floraGenerator = new nG(this.blockMetadata, this.rK, this.noise, this.seed, this.floraChances, ((GG, bG) => this.mound(GG, bG)))
          }
          getHeightmapVal(GG, bG) {
            const ZG = this.getGroundHeight(GG, bG);
            return this.canyonStrength > 0 ? ZG - this.canyonStrength * this.canyonDepth * this.noise.canyonDepth(GG, bG) : ZG
          }
          carveGround(GG, bG, ZG) {
            return this.noise.sinkholes.carveGround(GG, bG, ZG)
          }
          allowsPrefab(GG, bG, ZG, wG, SG) {
            return this.noise.sinkholes.clearsPrefab(GG, bG, ZG, wG, SG)
          }
          getTopsoilBlock(GG, bG, ZG) {
            const wG = this.noise.sinkholes.wallBlock(GG, bG, ZG, bG);
            return wG || (this.outcropDistance(GG, ZG) <= 2 ? function(GG, bG, ZG, wG) {
              return YG(GG, bG, ZG, wG ^ fG) < .85
            }(GG, bG, ZG, this.noise.salt) ? this.ids["Copper Ore"] : this.ids.Andesite : this.soilTop(GG, bG, ZG))
          }
          soilTop(GG, bG, ZG) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(GG, bG, ZG, wG) {
            const SG = this.noise.sinkholes.wallBlock(GG, bG, ZG, wG);
            return SG || (bG >= wG - 2 && this.outcropDistance(GG, ZG) <= 1 ? this.ids["Copper Ore"] : this.soilBelow(GG, bG, ZG, wG))
          }
          soilBelow(GG, bG, ZG, wG) {
            return this.copperSeam(GG, bG, ZG) || this.lowsoilBlockType
          }
          outcropDistance(GG, bG) {
            const ZG = function(GG, bG, ZG, wG) {
              const SG = Math.floor(GG / 36),
                LG = Math.floor(bG / 36);
              return KG(SG, LG, ZG) >= wG ? 1 / 0 : Math.abs(GG - hG(SG, LG, ZG, 1)) + Math.abs(bG - hG(SG, LG, ZG, 2))
            }(GG, bG, this.noise.salt, this.outcropChance);
            return ZG <= 2 && this.noise.sinkholes.taking(GG, bG) ? 1 / 0 : ZG
          }
          mound(GG, bG) {
            const ZG = function(GG, bG, ZG, wG) {
              return 0 === wG || 1 === wG && UG(GG, bG, ZG ^ fG ^ 3) < .5 ? 2 - wG : 0
            }(GG, bG, this.noise.salt, this.outcropDistance(GG, bG));
            return ZG > 0 ? {
              block: this.ids["Copper Ore"],
              height: ZG
            } : null
          }
          copperSeam(GG, bG, ZG) {
            return function(GG, bG, ZG, wG, SG) {
              const LG = 1013904242 ^ wG;
              if ((7 & bG) !== (7 & LG) || YG(GG >> 3, bG, ZG >> 3, LG) >= .5) return !1;
              const yG = SG(GG, ZG);
              return yG > .05 && yG < .95 && YG(GG, bG, ZG, LG) < .75
            }(GG, bG, ZG, this.noise.salt, ((GG, bG) => this.noise.canyonDepth(GG, bG))) ? this.ids["Copper Ore"] : 0
          }
          getDryBedBlock(GG, bG, ZG) {
            const wG = this.noise.patch(GG + 900, ZG);
            return wG > .45 ? this.ids.Sand : wG < -.6 ? this.ids.Clay : this.ids.Gravel
          }
        }

        function eG(GG) {
          return GG < 0 ? 0 : GG > 1 ? 1 : GG
        }
        class RG {
          constructor(GG, bG, ZG) {
            this.salt = void 0, this.sinkholes = void 0, this.canyon = void 0, this.canyonWarp = void 0, this.canyonMask = void 0, this.patchNoise = void 0, this.fineNoise = void 0, this.canyonAtX = NaN, this.canyonAtZ = NaN, this.canyonAt = 0, this.salt = kG(GG), this.sinkholes = new AG(GG, bG, ((GG, bG) => this.fine(GG, bG)), ((GG, bG) => {
              return wG = ZG(GG, bG), Object.hasOwn(VG, wG.key) ? wG.key : null;
              var wG
            })), this.canyon = new SG.g([{
              amplitude: 1,
              frequency: 1 / 260
            }], `${GG}WastelandCanyon`), this.canyonWarp = new SG.g([{
              amplitude: 28,
              frequency: 1 / 90
            }], `${GG}WastelandCanyonWarp`), this.canyonMask = new SG.g([{
              amplitude: 1,
              frequency: 1 / 650
            }], `${GG}WastelandCanyonMask`), this.patchNoise = new SG.g([{
              amplitude: 1,
              frequency: 1 / 48
            }, {
              amplitude: .4,
              frequency: 1 / 14
            }], `${GG}WastelandPatch`), this.fineNoise = new SG.g([{
              amplitude: .75,
              frequency: 1 / 16
            }, {
              amplitude: .25,
              frequency: .2
            }], `${GG}WastelandFine`)
          }
          canyonDepth(GG, bG) {
            if (GG === this.canyonAtX && bG === this.canyonAtZ) return this.canyonAt;
            let ZG = 0;
            const wG = eG(2.5 * (this.canyonMask.getOctaves(GG, bG) + .15));
            if (wG > 0) {
              const SG = Math.abs(this.canyon.getOctaves(GG + this.canyonWarp.getOctaves(GG, bG), bG + this.canyonWarp.getOctaves(GG + 311, bG - 173))),
                LG = .09 * wG;
              if (SG < LG) {
                const GG = eG((LG - SG) / (.45 * LG));
                ZG = GG * GG * (3 - 2 * GG)
              }
            }
            return this.canyonAtX = GG, this.canyonAtZ = bG, this.canyonAt = ZG, ZG
          }
          patch(GG, bG) {
            return this.patchNoise.getOctaves(GG, bG)
          }
          fine(GG, bG) {
            return this.fineNoise.getOctaves(GG, bG)
          }
        }
        var TG = ZG(4265),
          HG = ZG(604),
          tG = ZG(39551),
          DG = ZG(40088);
        const NG = "oldWorks";

        function OG(GG) {
          return Uint8Array.from(atob(GG), (GG => GG.charCodeAt(0)))
        }
        let xG = null;

        function BG() {
          return xG ??= function() {
            const GG = new tG.c;
            return GG.set(0, 0, 0, OG("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")), GG.set(0, 1, 0, OG("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new DG.c(NG, {
              x: 0,
              y: 0,
              z: 0
            }, {
              x: 29,
              y: 40,
              z: 29
            }, GG)
          }(), xG
        }
        const Gb = 3,
          bb = 6,
          Zb = {
            name: NG,
            get schematic() {
              return BG()
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
              qualityDistribution: new TG.e([{
                value: HG.l.UNCOMMON,
                weight: 1
              }, {
                value: HG.l.RARE,
                weight: 2
              }, {
                value: HG.l.EPIC,
                weight: 1
              }])
            }],
            spawnerBlockLocations: [{
              localX: 10,
              localY: 2,
              localZ: 16,
              mobTypeDistribution: new TG.e([{
                value: "Draugr Zombie",
                weight: 1
              }])
            }]
          };

        function wb(GG, bG, ZG) {
          return (0, sG.pb)(GG, [{
            prefab: Zb,
            frequency: ZG
          }, ...sG.i.map((GG => ({
            prefab: GG,
            frequency: bG
          })))])
        }
        class Sb extends gG {
          constructor(GG, bG, ZG, LG, yG, kG) {
            super(GG, bG, ZG, `${LG}DustFlats`, yG, kG, wb(wG.h.MEDIUM, 1.25, Gb)), this.key = "dustFlats", this.floraChances = {
              deadBush: .012,
              rock: .0015,
              bone: 2e-4
            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = QG.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new SG.g([{
              amplitude: 5,
              frequency: 1 / 90
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${LG}DustFlatsHeight`)
          }
          getGroundHeight(GG, bG) {
            return -2 + this.height.getOctaves(GG, bG)
          }
          soilTop(GG, bG, ZG) {
            const wG = this.noise.patch(GG, ZG);
            if (wG > .45) return this.ids.Gravel;
            if (wG < -.55) return this.ids.Sand;
            const SG = this.noise.fine(GG, ZG);
            return SG > .3 ? this.ids["Messy Dirt"] : SG < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
        }
        class Lb extends gG {
          constructor(GG, bG, ZG, wG, LG, yG) {
            super(GG, bG, ZG, `${wG}ScorchedMesa`, LG, yG), this.key = "scorchedMesa", this.floraChances = {
              deadBush: .015,
              dryCactus: .0012,
              rock: 8e-4
            }, this.outcropChance = QG.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new SG.g([{
              amplitude: 40,
              frequency: 1 / 300
            }, {
              amplitude: 12,
              frequency: 1 / 80
            }], `${wG}ScorchedMesaHeight`);
            const kG = this.ids;
            this.bandPalette = [kG["Orange Baked Clay"], kG["Baked Clay"], kG["Orange Baked Clay"], kG["Brown Baked Clay"], kG["Red Baked Clay"], kG["Orange Baked Clay"], kG["Yellow Baked Clay"], kG["Baked Clay"], kG["Light Gray Baked Clay"], kG["Red Baked Clay"], kG["White Baked Clay"], kG["Brown Baked Clay"]]
          }
          getGroundHeight(GG, bG) {
            const ZG = this.height.getOctaves(GG, bG) + 8;
            if (ZG <= 6) return .6 * ZG;
            const wG = (ZG - 6) / 9,
              SG = Math.floor(wG);
            return 3.6 + 9 * (SG + eG((wG - SG - .7) / .3)) * 1.5
          }
          soilTop(GG, bG, ZG) {
            return bG >= 12 ? this.ids["Red Sand"] : this.noise.fine(GG, ZG) > .45 ? this.ids["Messy Dirt"] : this.ids["Red Sand"]
          }
          soilBelow(GG, bG, ZG, wG) {
            return bG >= wG - 1 ? this.ids["Red Sand"] : this.getStrataBlock(GG, bG, ZG, wG) || this.lowsoilBlockType
          }
          getStrataBlock(GG, bG, ZG, wG) {
            if (bG < -8) return 0;
            const SG = this.noise.patch(.25 * GG, .25 * ZG),
              LG = Math.floor((bG + 4 * SG) / 3);
            return function(GG, bG, ZG, wG, SG, LG, yG) {
              const kG = 1541459225 ^ wG;
              return SG > .15 && bG >= yG - 16 && UG(LG, 1, kG) < .25 && YG(GG, bG, ZG, kG) < .06
            }(GG, bG, ZG, this.noise.salt, SG, LG, wG) ? this.ids["Gold Ore"] : this.bandPalette[Math.floor(UG(LG, 0, this.noise.salt) * this.bandPalette.length)]
          }
          getDryBedBlock(GG, bG, ZG) {
            return this.ids["Red Sand"]
          }
        }
        class yb extends gG {
          constructor(GG, bG, ZG, wG, LG, yG) {
            super(GG, bG, ZG, `${wG}ShatteredHighlands`, LG, yG), this.key = "shatteredHighlands", this.floraChances = {
              deadBush: .006,
              rock: .004
            }, this.outcropChance = QG.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new SG.g([{
              amplitude: 60,
              frequency: 1 / 240
            }], `${wG}HighlandsRidge1`), this.ridge2 = new SG.g([{
              amplitude: 25,
              frequency: 1 / 110
            }], `${wG}HighlandsRidge2`), this.bumps = new SG.g([{
              amplitude: 6,
              frequency: .02
            }], `${wG}HighlandsBumps`)
          }
          getGroundHeight(GG, bG) {
            return 1.2 * (85 - Math.abs(this.ridge1.getOctaves(GG, bG)) - Math.abs(this.ridge2.getOctaves(GG, bG))) - 25 + this.bumps.getOctaves(GG, bG)
          }
          soilTop(GG, bG, ZG) {
            const wG = this.noise.fine(GG, ZG);
            return bG > 58 ? wG > .35 ? this.ids.Gravel : wG < -.4 ? this.ids.Andesite : this.ids.Stone : bG > 36 ? wG > .25 ? this.ids.Gravel : wG < -.45 ? this.ids.Stone : this.ids["Rocky Dirt"] : wG > .3 ? this.ids["Messy Dirt"] : wG < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
          soilBelow(GG, bG, ZG, wG) {
            const SG = this.peakSeam(GG, bG, ZG);
            return 0 !== SG ? SG : bG > 50 ? this.ids.Stone : bG > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
          }
          getStrataBlock(GG, bG, ZG, wG) {
            return this.peakSeam(GG, bG, ZG)
          }
          peakSeam(GG, bG, ZG) {
            const wG = function(GG, bG, ZG, wG) {
              if (bG <= 40 || bG % 3 !== 0) return null;
              const SG = 2600822924 ^ wG,
                LG = UG(bG, 0, SG),
                yG = LG < .4 ? "Coal Ore" : LG < .7 ? "Iron Ore" : null;
              return null === yG || YG(GG >> 2, bG, ZG >> 2, SG) >= .25 ? null : YG(GG, bG, ZG, SG) < .65 ? yG : null
            }(GG, bG, ZG, this.noise.salt);
            return wG ? this.ids[wG] : 0
          }
        }
        class kb extends gG {
          constructor(GG, bG, ZG, LG, yG, kG) {
            super(GG, bG, ZG, `${LG}RuinFields`, yG, kG, wb(wG.h.HIGH, 2.25, bb)), this.key = "ruinFields", this.floraChances = {
              deadBush: .02,
              rubble: .008,
              rock: .001,
              bone: 3e-4
            }, this.outcropChance = QG.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new SG.g([{
              amplitude: 3,
              frequency: 1 / 80
            }, {
              amplitude: 1.5,
              frequency: .04
            }], `${LG}RuinFieldsHeight`)
          }
          getGroundHeight(GG, bG) {
            return -3 + this.height.getOctaves(GG, bG)
          }
          soilTop(GG, bG, ZG) {
            const wG = UG(GG, ZG, 461845907 ^ this.noise.salt);
            return wG < .05 ? this.ids["Mossy Messy Stone"] : wG < .08 ? this.ids["Messy Stone"] : wG < .09 ? this.ids["Cracked Stone Bricks"] : this.noise.fine(GG, ZG) > -.1 ? this.ids["Overgrown Dry Grass Block"] : this.ids["Dry Grass Block"]
          }
        }
        class Ub extends gG {
          constructor(GG, bG, ZG, wG, LG, yG) {
            super(GG, bG, ZG, `${wG}SaltFlats`, LG, yG), this.key = "saltFlats", this.floraChances = {
              deadBush: .002,
              bone: 6e-4
            }, this.outcropChance = QG.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new SG.g([{
              amplitude: 1.5,
              frequency: 1 / 120
            }, {
              amplitude: .6,
              frequency: .05
            }], `${wG}SaltFlatsHeight`)
          }
          getGroundHeight(GG, bG) {
            return -8 + this.height.getOctaves(GG, bG)
          }
          soilTop(GG, bG, ZG) {
            const wG = this.noise.patch(GG, ZG);
            return wG > .5 ? this.ids.Sand : wG < -.55 ? this.ids.Clay : this.ids.Chalk
          }
          soilBelow(GG, bG, ZG, wG) {
            return bG >= wG - 2 ? this.ids.Sand : this.ids.Clay
          }
          getStrataBlock(GG, bG, ZG, wG) {
            return this.noise.sinkholes.wallBlock(GG, bG, ZG, wG)
          }
        }
        class Yb extends gG {
          constructor(GG, bG, ZG, wG, LG, yG) {
            super(GG, bG, ZG, `${wG}SurvivorGrove`, LG, yG), this.key = "survivorGrove", this.floraChances = {
              grass: .12,
              tallGrass: .015,
              deadBush: .004
            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = QG.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new SG.g([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${wG}SurvivorGroveHeight`)
          }
          getGroundHeight(GG, bG) {
            return -3 + this.height.getOctaves(GG, bG)
          }
          soilTop(GG, bG, ZG) {
            return this.noise.fine(GG, ZG) < -.6 ? this.ids["Dry Grass Block"] : this.ids["Grass Block"]
          }
          getDryBedBlock(GG, bG, ZG) {
            return this.ids.Dirt
          }
        }
        const Vb = {
          buildBiomes: function(GG) {
            let {
              rK: bG,
              blockMetadata: ZG,
              worldGenerator: wG,
              seed: SG,
              biomeOpts: yG,
              biomeAt: kG
            } = GG;
            const UG = [bG, ZG, wG, SG, yG, new RG(SG, ZG, kG)],
              YG = {
                dustFlats: new Sb(...UG),
                scorchedMesa: new Lb(...UG),
                shatteredHighlands: new yb(...UG),
                ruinFields: new kb(...UG),
                saltFlats: new Ub(...UG),
                survivorGrove: new Yb(...UG)
              },
              pG = (0, LG.i)(ZG);
            return Object.keys(VG).map((GG => ({
              biome: YG[GG],
              frequency: VG[GG],
              altBiome: null,
              ...pG
            })))
          }
        }
      },
      572: (GG, bG, ZG) => {
        ZG.d(bG, {
          d: () => wG
        });
        class wG {
          constructor(GG, bG) {
            this.keyToValueTable = GG, this.valueToKeyTable = void 0;
            const ZG = {};
            for (const wG in this.keyToValueTable) {
              const GG = this.keyToValueTable[wG];
              if (void 0 !== ZG[GG]) throw new Error(`Duplicate value found in bi-directional table: ${String(GG)}`);
              ZG[GG] = "string" === bG ? wG : Number(wG)
            }
            this.valueToKeyTable = ZG
          }
          get(GG) {
            return this.keyToValueTable[GG]
          }
          reverseGet(GG) {
            return this.valueToKeyTable[GG]
          }
        }
      },
      40088: (GG, bG, ZG) => {
        ZG.d(bG, {
          c: () => SG
        });
        var wG = ZG(39551);
        class SG {
          constructor(GG, bG, ZG, SG) {
            let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new wG.c,
              yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                x: 0,
                y: 0,
                z: 0
              },
              kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            this.name = GG, this.startOffset = bG, this.dimensions = ZG, this.rleChunkStorage = SG, this.blockData = LG, this.pasteOffset = yG, this.lobbyCode = kG, this.disjoint = UG
          }
          getRLEChunk(GG, bG, ZG) {
            return this.rleChunkStorage.get(GG, bG, ZG)
          }
          getNumRLEChunks() {
            return this.rleChunkStorage.getNumItems()
          }* getRLECoords() {
            const GG = [0, 0, 0];
            for (const {
                x: bG,
                y: ZG,
                z: wG
              }
              of this.rleChunkStorage) GG[0] = bG, GG[1] = ZG, GG[2] = wG, yield GG
          }
        }
      },
      39551: (GG, bG, ZG) => {
        ZG.d(bG, {
          c: () => wG
        });
        class wG {
          constructor() {
            this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
          }
          set(GG, bG, ZG, wG) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const yG = 1023 & GG | (1023 & bG) << 10 | (1023 & ZG) << 20;
            let kG = wG;
            if (SG(GG) && SG(bG) && SG(ZG) || (kG = new LG(GG, bG, ZG, wG), this.hasBoxes = !0), Math.abs(GG) < 512 && Math.abs(bG) < 512 && Math.abs(ZG) < 512) {
              const GG = this.unbox(this.zeroStorage.get(yG));
              return this.zeroStorage.has(yG) || this.itemCount++, this.zeroStorage.set(yG, kG), GG
            }
            const UG = GG >> 10 & 1023 | (bG >> 10 & 1023) << 10 | (ZG >> 10 & 1023) << 20;
            let YG = this.storage.get(UG);
            YG || (YG = new Map, this.storage.set(UG, YG));
            const VG = this.unbox(YG.get(yG));
            return YG.has(yG) || this.itemCount++, YG.set(yG, kG), VG
          }
          get(GG, bG, ZG) {
            var wG;
            const SG = 1023 & GG | (1023 & bG) << 10 | (1023 & ZG) << 20;
            if (Math.abs(GG) < 512 && Math.abs(bG) < 512 && Math.abs(ZG) < 512) return this.unbox(this.zeroStorage.get(SG));
            const LG = GG >> 10 & 1023 | (bG >> 10 & 1023) << 10 | (ZG >> 10 & 1023) << 20;
            return this.unbox(null === (wG = this.storage.get(LG)) || void 0 === wG ? void 0 : wG.get(SG))
          }
          remove(GG, bG, ZG) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const wG = 1023 & GG | (1023 & bG) << 10 | (1023 & ZG) << 20;
            if (Math.abs(GG) < 512 && Math.abs(bG) < 512 && Math.abs(ZG) < 512) return void(this.zeroStorage.delete(wG) && this.itemCount--);
            const SG = GG >> 10 & 1023 | (bG >> 10 & 1023) << 10 | (ZG >> 10 & 1023) << 20,
              LG = this.storage.get(SG);
            LG && LG.delete(wG) && this.itemCount--
          }
          removeBy(GG) {
            for (const {
                x: bG,
                y: ZG,
                z: wG,
                val: SG
              }
              of this.iterate(!0)) {
              GG(bG, ZG, wG, SG) && this.remove(bG, ZG, wG)
            }
          }
          unbox(GG) {
            return this.hasBoxes && kG(GG) ? GG.val : GG
          }* iterate(GG) {
            const bG = this.mutationCount;
            for (const ZG of UG(this.zeroStorage)) {
              if (!this.zeroStorage.has(ZG)) continue;
              const wG = this.zeroStorage.get(ZG);
              if (this.hasBoxes && kG(wG) ? yield {
                  x: wG.x,
                  y: wG.y,
                  z: wG.z,
                  val: wG.val
                } : yield {
                  x: ZG << 22 >> 22,
                  y: ZG << 12 >> 22,
                  z: ZG << 2 >> 22,
                  val: wG
                }, !GG && bG !== this.mutationCount) throw new YG
            }
            for (const ZG of UG(this.storage)) {
              const wG = this.storage.get(ZG);
              if (wG)
                for (const SG of UG(wG)) {
                  if (!wG.has(SG)) continue;
                  const LG = wG.get(SG);
                  if (this.hasBoxes && kG(LG) ? yield {
                      x: LG.x,
                      y: LG.y,
                      z: LG.z,
                      val: LG.val
                    } : yield {
                      x: ((1023 & ZG) << 10 | 1023 & SG) << 12 >> 12,
                      y: ((ZG >> 10 & 1023) << 10 | SG >> 10 & 1023) << 12 >> 12,
                      z: ((ZG >> 20 & 1023) << 10 | SG >> 20 & 1023) << 12 >> 12,
                      val: LG
                    }, !GG && bG !== this.mutationCount) throw new YG
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
            let GG = 0;
            for (const bG of this.storage.values()) GG += bG.size;
            return GG += this.zeroStorage.size, GG
          }
        }

        function SG(GG) {
          return GG << 12 >> 12 === GG && (0 !== GG || 1 / GG > 0)
        }
        class LG {
          constructor(GG, bG, ZG, wG) {
            this.x = GG, this.y = bG, this.z = ZG, this.val = wG, yG.add(this)
          }
        }
        const yG = new WeakSet;

        function kG(GG) {
          return "object" === typeof GG && null !== GG && yG.has(GG)
        }

        function UG(GG) {
          return Array.from(GG.keys()).sort(((GG, bG) => GG - bG))
        }
        class YG extends Error {
          constructor() {
            super(`${wG.name} has been mutated during iteration`)
          }
        }
      },
      40148: (GG, bG, ZG) => {
        ZG.d(bG, {
          b: () => wG,
          d: () => yG
        });
        class wG {
          constructor(GG, bG, ZG) {
            var wG;
            this.name = GG, this.max = bG, this.idleMs = ZG, this.head = new kG(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
            const SG = setInterval((() => {
              this.dropIdleEntriesIfDue(Date.now())
            }), ZG);
            null === (wG = SG.unref) || void 0 === wG || wG.call(SG)
          }
          setMax(GG) {
            for (this.max = GG; this.size > GG;) this.drop(this.head.prev)
          }
          partition() {
            return new SG(this)
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
          recordLookup(GG) {
            if (void 0 !== GG) return this.hits++, GG.epoch = this.epoch, this.head.next !== GG && (UG(GG), this.linkFirst(GG)), GG.value;
            this.misses++
          }
          add(GG) {
            this.dropIdleEntriesIfDue(Date.now()), GG.epoch = this.epoch, this.linkFirst(GG), this.size++, this.size > this.max && this.drop(this.head.prev)
          }
          replace(GG, bG) {
            UG(GG), this.size--, this.add(bG)
          }
          dropIdleEntriesIfDue(GG) {
            GG - this.epochStartMs >= this.idleMs && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = GG)
          }
          dropEntriesIdleSince(GG) {
            for (; this.size > 0 && this.head.prev.epoch < GG;) this.drop(this.head.prev)
          }
          drop(GG) {
            UG(GG), GG.entries.delete(GG.key), this.size--
          }
          linkFirst(GG) {
            const bG = this.head.next;
            GG.prev = this.head, GG.next = bG, bG.prev = GG, this.head.next = GG
          }
        }
        class SG {
          constructor(GG) {
            this.partitioner = GG, this.entries = new Map
          }
          get(GG, bG) {
            return this.partitioner.recordLookup(this.entries.get(yG(GG, bG)))
          }
          set(GG, bG, ZG) {
            const wG = yG(GG, bG),
              SG = new kG(wG, ZG, this.entries),
              LG = this.entries.get(wG);
            this.entries.set(wG, SG), void 0 === LG ? this.partitioner.add(SG) : this.partitioner.replace(LG, SG)
          }
        }
        const LG = 2 ** 25;

        function yG(GG, bG) {
          return GG > -LG && GG < LG && bG > -LG && bG < LG ? GG * (2 * LG) + bG : `${GG}|${bG}`
        }
        class kG {
          constructor(GG, bG, ZG) {
            this.key = GG, this.value = bG, this.entries = ZG, this.prev = this, this.next = this, this.epoch = 0
          }
        }

        function UG(GG) {
          GG.prev.next = GG.next, GG.next.prev = GG.prev
        }
      },
      40097: (GG, bG, ZG) => {
        function wG(GG) {
          const bG = atob(GG),
            ZG = new Uint8Array(bG.length);
          for (let wG = 0; wG < bG.length; wG++) ZG[wG] = bG.charCodeAt(wG);
          return ZG
        }
        ZG.d(bG, {
          c: () => wG
        })
      },
      40105: (GG, bG, ZG) => {
        ZG.d(bG, {
          e: () => gG,
          i: () => WG,
          k: () => FG,
          o: () => HG,
          p: () => tG,
          r: () => BG,
          v: () => vG,
          z: () => sG,
          D: () => xG,
          G: () => OG,
          H: () => eG,
          K: () => aG,
          M: () => MG,
          O: () => cG,
          S: () => nG,
          W: () => RG,
          Z: () => jG,
          bb: () => qG,
          fb: () => lG,
          hb: () => DG,
          ib: () => NG,
          lb: () => TG,
          mb: () => AG,
          ob: () => PG,
          pb: () => IG
        });
        var wG = ZG(40061),
          SG = ZG(604),
          LG = ZG(40109),
          yG = ZG(4265);
        class kG {
          constructor(GG, bG, ZG, wG, SG, kG, UG, YG, VG, pG, fG, QG, KG, hG) {
            let {
              cactusChance: dG,
              maxCactusHeight: JG
            } = KG;
            this.columnRandom = new yG.f(""), this.flowerPatchRandom = new yG.f(""), this.cactusRandom = new yG.f(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.rK = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = GG, this.seed = ZG, this.grassChance = wG, this.tallGrassChance = SG, this.cornChance = kG, this.spectralGrassChance = UG, this.pineGrassChance = YG, this.pineFernChance = VG, this.jungleTallGrassChance = pG, this.catnipChance = fG, this.autumnFernChance = QG, this.cactusChance = dG, this.maxCactusHeight = JG, this.rK = bG, this.flowerInfos = [{
              flower: "Dandelion",
              patchChance: hG.dandelionChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Poppy",
              patchChance: hG.poppyChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Forget-me-not",
              patchChance: hG.forgetMeNotChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Red Tulip",
              patchChance: hG.redTulipChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Pink Tulip",
              patchChance: hG.pinkTulipChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "White Tulip",
              patchChance: hG.whiteTulipChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Orange Tulip",
              patchChance: hG.orangeTulipChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Daisy",
              patchChance: hG.daisyChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Allium",
              patchChance: hG.alliumChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Shadow Rose",
              patchChance: hG.shadowRoseChance,
              insidePatchSpawnChance: hG.defaultFlowerInsidePatchSpawnChance,
              patchRadius: hG.defaultFlowerPatchRadius
            }, {
              flower: "Bluebell",
              patchChance: hG.bluebellChance,
              insidePatchSpawnChance: .85,
              patchRadius: 8
            }, {
              flower: "Fallen Maple Leaves",
              patchChance: hG.fallenMapleLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fallen Cherry Leaves",
              patchChance: hG.fallenCherryLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Melon",
              patchChance: hG.melonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Watermelon",
              patchChance: hG.watermelonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Pumpkin",
              patchChance: hG.pumpkinChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Rice|FreshlyGrown",
              patchChance: hG.riceChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cranberries_stage2",
              patchChance: hG.cranberryChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Red Mushroom",
              patchChance: hG.redMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Brown Mushroom",
              patchChance: hG.brownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Red Mushroom",
              patchChance: hG.fatRedMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Brown Mushroom",
              patchChance: hG.fatBrownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cotton_stage3",
              patchChance: hG.cottonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 3
            }, {
              flower: "Chili Pepper Plant|FreshlyGrown",
              patchChance: hG.chiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Chili Pepper Plant|Lava|FreshlyGrown",
              patchChance: hG.lavaChiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Fallen Pine Cone",
              patchChance: hG.fallenPineConeChance,
              insidePatchSpawnChance: .4,
              patchRadius: 3
            }], this.maxPatchRadius = 0;
            for (const {
                patchRadius: LG
              }
              of this.flowerInfos) this.maxPatchRadius = Math.max(this.maxPatchRadius, LG);
            this.totalFlowerPatchChance = 0;
            for (const {
                patchChance: LG
              }
              of this.flowerInfos) this.totalFlowerPatchChance += LG;
            this.doFlowerGen = null !== hG.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new LG.d("flwrPtch", hG.flowerPatchDistApart, !1, !0, ZG, 4, bG)), this.grassId = GG.Grass.id, this.tallGrassId = GG["Tall Grass"].id, this.tallGrassTopId = GG["Tall Grass|Top"].id, this.cornSeedsId = GG["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = GG["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = GG["Spectral Grass"].id, this.pineGrassId = GG["Pine Grass"].id, this.pineFernId = GG["Pine Fern"].id, this.jungleTallGrassId = GG["Jungle Tall Grass"].id, this.jungleTallGrassTopId = GG["Jungle Tall Grass|Top"].id, this.catnipId = GG.Catnip.id, this.autumnFernId = GG["Autumn Fern"].id, this.cactusId = GG.Cactus.id, this.fatCactusId = GG["Fat Cactus"].id
          }
          addBiomeFloraToColumn(GG, bG, ZG, SG, LG, yG, kG) {
            if (kG + 3 >= LG && kG + 1 < LG + this.rK) {
              const UG = this.columnRandom;
              UG.reseed(`${SG}${yG}${this.seed}flora`);
              const YG = UG.next();
              if (YG < this.grassChance) {
                const wG = kG + 1 - LG;
                0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.grassId)
              } else {
                if (YG < this.grassChance + this.tallGrassChance) {
                  {
                    const wG = kG + 1 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.tallGrassId)
                  } {
                    const wG = kG + 2 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.tallGrassTopId)
                  }
                  return
                }
                if (YG < this.grassChance + this.tallGrassChance + this.cornChance) {
                  {
                    const wG = kG + 1 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.cornSeedsId)
                  } {
                    const wG = kG + 2 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.cornPlantId)
                  } {
                    const wG = kG + 3 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.cornPlantId)
                  }
                  return
                }
                if (YG < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance) {
                  const wG = kG + 1 - LG;
                  0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.spectralGrassId)
                } else if (YG < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance) {
                  const wG = kG + 1 - LG;
                  0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.pineGrassId)
                } else if (YG < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance) {
                  const wG = kG + 1 - LG;
                  0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.pineFernId)
                } else {
                  if (YG < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance) {
                    {
                      const wG = kG + 1 - LG;
                      0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.jungleTallGrassId)
                    } {
                      const wG = kG + 2 - LG;
                      0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.jungleTallGrassTopId)
                    }
                    return
                  }
                  if (YG < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance) {
                    const wG = kG + 1 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.catnipId)
                  } else if (YG < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance + this.autumnFernChance) {
                    const wG = kG + 1 - LG;
                    0 <= wG && wG < this.rK && GG.set(SG - bG, wG, yG - ZG, this.autumnFernId)
                  }
                }
              }
              if (this.doFlowerGen && this.totalFlowerPatchChance > 0 && kG + 1 >= LG) {
                const YG = this.flowerPatchPointGen.getClosestPoint(SG, yG),
                  VG = (0, wG.x)(YG, SG, yG);
                if (VG < this.maxPatchRadius) {
                  const wG = this.flowerPatchRandom;
                  wG.reseed(`${YG[0]}${YG[1]}${this.seed}flowerpatch`);
                  const pG = Math.floor(wG.next() * this.totalFlowerPatchChance);
                  let fG = 0,
                    QG = 0;
                  for (; fG <= pG;) fG += this.flowerInfos[QG].patchChance, QG++;
                  const KG = this.flowerInfos[QG - 1];
                  if (VG < KG.patchRadius && UG.next() < KG.insidePatchSpawnChance) {
                    const wG = KG.flower;
                    GG.set(SG - bG, kG + 1 - LG, yG - ZG, this.blockMetadata[wG].id)
                  }
                }
              }
            }
            if (0 !== this.cactusChance) {
              const wG = this.cactusRandom;
              wG.reseed(`${SG}${yG}${this.seed}cactus`);
              const UG = wG.next();
              if (UG < this.cactusChance) {
                const YG = Math.floor(wG.next() * (this.maxCactusHeight - 1)) + 1,
                  VG = Math.min(kG + YG + 1, LG + this.rK),
                  pG = UG < this.cactusChance * (2 / 3);
                for (let wG = Math.max(kG + 1, LG); wG < VG; wG++) GG.set(SG - bG, wG - LG, yG - ZG, pG ? this.fatCactusId : this.cactusId)
              }
            }
          }
        }
        var UG = ZG(40077),
          YG = ZG(40088),
          VG = ZG(39551),
          pG = ZG(40097);

        function fG(GG, bG, ZG) {
          const wG = new VG.c;
          for (const LG of ZG) {
            const GG = wG.get(LG.chunkX, LG.chunkY, LG.chunkZ);
            if (!(0, SG.L)(GG)) throw new Error(`Duplicate chunk at ${LG.chunkX}, ${LG.chunkY}, ${LG.chunkZ}`);
            wG.set(LG.chunkX, LG.chunkY, LG.chunkZ, LG.rle)
          }
          return new YG.c(GG, {
            x: 0,
            y: 0,
            z: 0
          }, bG, wG)
        }
        const QG = {
          treeJungleLarge1: fG("treeJungleLarge1", {
            x: 31,
            y: 33,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }]),
          treeJungleLarge2: fG("treeJungleLarge2", {
            x: 28,
            y: 35,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }]),
          treeMapleLarge1: fG("treeMapleLarge1", {
            x: 24,
            y: 27,
            z: 24
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          treeMapleLarge2: fG("treeMapleLarge2", {
            x: 32,
            y: 34,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0AAdIBAgAB0gEYAAHSAQEAAdIBAQAE0gEXAAjSARMAAtIBAgAB0gECAAHSAQQAAtIBEgAB0gEBAAHSAQMAA9IBAwAB0gETAAHSAQoAAdIBDAAD0gECAAHSAQEAAdIBGAAD0gEBAATSARkAAtIBAeMPAdIBAQAD0gEWAAHSAQEAAtIBBQAB4w8YAAHjDwHSAQEAAdIBHwAB0gEBAAHSAaoFAAHSAQIAAdIBAQAB0gEOAAHSAQYAAdIBAwAB0gECAALSAQHjDw0AAdIBBAAC0gEEAAHSAQIAA9IBAQAC0gENAAHSAQQAAeMPAQAB0gEBAAfSARQABNIBAQAC0gEBAAPSAQEAAtIBFAAC0gECAAPSAQEAAdIBAQAB0gEMAAHSAQEAAdIBAeMPAdIBAwAB0gEBAAHSAQMAAdIBEQAB0gECAAHSAQHjDwEAAtIBFgAD0gEBAAHSAQMAAtIBFgAB0gECAALSAQEAAdIBGQAB0gEFAALSAQEAAdIBHAAD0gEdAAHSAR8AAdIB3QQAAdIBAQAB0gEGAAHSAQUAAQkDAAHSAQwAA9IBBAAB0gEBAALSAQMAAdIBAQAB0gEBAAHSAQ4AAtIBBAAB0gEBAAHSAQMAAuMPAQAB0gEB4w8B0gEB4w8MAAHSAQUAAdIBAQAB0gECAAHSAQEABdIBFAAB0gEBAAHSAQMABdIBAgAB4w8UAAHSAQIAAtIBAQAD0gEPAAHjDwcAAdIBBAAC0gEQAALSAQEAAtIBAQAB0gEXAAHjDwEABdIBAQAB0gEYAAHSAQHjDwHSAQEAAtIBAQAC0gEWAAXSAQIAAdIBGgAC0gEfAAHSAQIAAdIBAQAB0gEdAAHSAb0DAAHSAQIAAdIBHQAB0gF9AALSAQEAAdIBBgAC0gEBAAHSAQEAAQkBAAHSAQ0AAdIBAgABCQHSAQQAAtIBAQAB0gEBAAHSAQMAAtIBDgAC0gEGAALSAQIAAtIBAgAB0gENAAHSAQEAAdIBAQAB0gECAAEJAtIBAQAB0gECAAHSAQEAAtIBAQAB0gEMAAHSAQcAAdIBAwAG0gEVAAHSAQQAA9IBAQAB4w8B0gEcAAHjDwLSAQ4AAtIBAeMPAQAB0gEBCQIAAtIBFgAE0gEBAAHSAQEAA9IBFwAB0gEBAAPSAQEAAdIBAQAB0gEWAALSAQEABNIBGQAB0gEBAAXSARkAAdIBAQAC0gEBAAPSARsAAdIBAgAB4w+9AwAC0gEdAAPSAQEAAdIBHAAB0gFgAALSAQMAAQkB0gEBAAHSAQIAAgkDAAHSAQsAAdIBAQkB0gEBCQYABtIBAQABCQEAA9IBCQAB0gEBAAXSAQQABNIBAeMPBAAB4w8B0gEMAAHjDwHSAQEAAtIBAgkD0gEDAAHSAQYAAdIBCwAB0gEFAAHSAQEJBAAC0gEBAAHSAQQAAdIBEQAD0gEDAAPSAREAAtIBAQkDAAHSAQEAAdIBBQAC0gENAAHSAQEAAtIBAgABCQHSAQEAAdIBFgAB0gEB4w8G0gEBAAHSAQEAAdIBFQAC0gECAAPSAQEAAdIBFwAC0gEBAATSARkAAtIBAQAG0gEYAAHSAQEABNIBGwAB4w8BAAHSAQEAAdIBvAMAAdIBAQAD0gEbAAPSAR4AAtIBAeMPSQAB0gERAALSAQIJBAABCQMAAgkB4w8DAAHSAQwAAtIBAQkB0gEBAAHSAQEJBAAB0gEDAALSAQIAAeMPAdIBDgAD0gEBCQMAAdIBAwAC0gECAAHSAQEAAtIBCgAB0gEBAATSAQIAA9IBAgAC0gEB4w8BAAHSAQEABNIBCwAB0gELAAHSAQIAAdIBAgAB4w8C0gERAAHjDwLSAQMAAdIBAgAB0gEBAALSAQ0AAdIBAQkBAAHjDwIAAdIBAeMPAwAB4w8B0gEQAALSAQEABdIBAeMPAQAB0gEVAALSAQMABdIBGgAC0gEB4w8B0gECAAHSARUAAdIBAwAB0gEBAALSARkAAeMPAdIBAeMPAdIBAQAB0gEcAAXSARsABNIBHgAB4w+eAwAB0gEBCQHSAR0AAdIBAQAC0gEbAALSAQEAAdIBHQAB0gEFAAEJHwADCQQAAdIBEQAB0gEBAAEJBwABCQEAAdIBAQAB0gEQAAPSAQEAAdIBAQkHAAHj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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }]),
          treePalmLarge1: fG("treePalmLarge1", {
            x: 11,
            y: 14,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
          }]),
          treePalmLarge2: fG("treePalmLarge2", {
            x: 13,
            y: 16,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcAAeYP+aQBAA==")
          }]),
          treePineLarge1: fG("treePineLarge1", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4AAtABHgAB0AEfAAHQAb0GAAHQAQEAAagNAdABGgAD0AEB5A8E0AEaAAHQAQEKA9ABHAAD0AG7BwAG0AEcAAHQAQEAAdABj4cBAA==")
          }]),
          treePineLarge2: fG("treePineLarge2", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("y1AAA9ABvAcAAtABAagNPAABqA0F0AEbAAHkDwLQAZwHAAPQAQHkDx4AAtABGwAG0AEbAAHQAQHkDwHQAQEKAdABHAAD0AH7BgAD0AECCh0AAdABAgoB0AEaAAHkDwLQAQIKAtABGgAB0AEDCgLQARoAAtABAgoB0AEcAAPQAR4AAdABHwAB0AGcBgAB0AEB5A8B0AECCgHQAQGoDRsAAdABAgoB0AEaAAPQAQIKA9ABGQAC0AEDCgHQARoAAdABAwoB0AEcAAHQAQEKAdABHQAB0AEB5A8B0AEdAALQAZwGAAfQARwAAdABHAAC0AEB5A8F0AEZAALQAQEKAdABAeQPAtABGgAB0AEB5A8BCgHQAR0AAtAB2wYAB9ABOgAC0AEB5A8C0AEdAAHQAQHkDwLQAR0AAdAB/QYAA9ABAeQP8ncA")
          }]),
          treeSpectralLarge1: fG("treeSpectralLarge1", {
            x: 37,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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AuAMAv8MAwAD/wwTAAH/DAEAA+AMBQAC4AwB/wwTAAH/DAEAA+AMBAAF/wwHAAL/DAkAAv8MAuAMAf8MAQAB/wwCAAH/DAHgDAEAAeAMCAAD/wwDAAHgDAQAAf8MAgAB4AwFAAT/DAgABP8MAQAD4AwDAAH/DAEAAf8MAQAB/wwEAAHdDALgDAH/DAcABv8MA+AMAwAB/wwBAAHgDAH/DAEAAeAMBwAB/wwFAALgDAP/DAMAAuAMCAAB/wwLAAH/DAEAAf8MAuAMBQAB/wwXAAHgDAL/DBsAAf8MAgAB/wwB4AwB/wwGAATgDAQAAf8MDgAB4AwBAAH/DAYABOAMBAAB/wwSAAPgDAMABv8MAQAB/wwNAAH/DAHgDAIAA+AMAf8MAgAH/wwBAAH/DMcDAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAC/wwB4AwB/wwUAALgDAH/DAUAAf8MAuAMAv8MEgAE4AwFAAb/DBEAA+AMAQAB/wwFAAHgDAb/DAMAAv8MCAAB/wwD4AwD/wwDAAHgDAMAAf8MAwAC4AwCAAP/DAMAAuAMAgAD4AwBAAHgDAH/DAHgDAQAAf8MBgAC/wwC4AwD/wwB4AwCAATgDAEAAf8MAwAB/wwLAAP/DAEAAuAMBQAD4AwCAAH/DAMAAf8MDgAB4AwD/wwFAAHgDBcAAf8MAeAMAf8MBgAB4AwUAAH/DAHgDAH/DAcAA+AMDAAB/wwIAAHgDAQAAeAMAf8MAQAB3QwD4AwCAAH/DAgAAf8MAwAB/wwIAAPgDAIAAd0MA/8MAQAB/wwIAAH/DAMAAf8MAwAB/wwB4AwB/wwCAALgDAL/DAEABv8MiQUAAuAMFAAC4AwGAAL/DAPgDAEAAf8MDwAD4AwIAAT/DALgDA4AB+AMBAAB/wwBAAL/DAEAAv8MAuAMAf8MAQAC4AwBAAHgDAMABuAMAv8MAQAB/wwBAAH/DAQAAf8MAeAMAwAC4AwBAAbgDAEABuAMAQAB/wwOAAL/DAEAA+AMAQAH4AwDAAH/DBEAAf8MAuAMAf8MBQAB4AwFAAP/DAEAAf8MDQAB/wwGAAPgDAQAA/8MAQAB/wwMAAL/DAUABOAMBAAD/wwBAAH/DAwAAf8MAwAB/wwD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/wwCAAL/DAHgDAH/DAkAAv8MAgAB/wwDAAL/DAEAAf8MAuAMAQAB/wwBAAHgDAEAAeAMAf8MAeAMAf8MCQAD/wwFAAHgDAEAAv8MAQAC4AwB/wwB4AwB/wwCAAHgDAL/DAwAAv8MBAAB/wwB4AwD/wwBAAL/DAEAAf8MAQAD/wwJAAL/DAHdDAYAAf8MAQAB3QwBAALgDAL/DAEAA/8MVgAH4AwaAAXgDPgDAAHgDB8AAuAMIAAB4AwyAAH/DAEAAf8MHwAB4AwdAAH/DAEAAv8MAQAB/wwbAAP/DAHgDAoAAuAMEAAB4AwBAAH/DAgAAv8MBOAMBQAB/wwUAAH/DAEAAf8MBuAMAf8MAgAB/wwSAAn/DAHgDAEAA+AMEgAB/wwBAAL/DAHgDAEAAf8MAeAMAQAC/wwB3QwUAAH/DAMAAd0MAf8MAd0MAf8MAQAB3QwB/wxYAAXgDJAEAAH/DB8AAf8MEgAB/wwMAAH/DBIAAf8MDAAB/wwKAAH/DAcAAf8MCwAB/wwB4AwKAAH/DAcAAf8MCwAB4AwB/wwBAAH/DAgAAf8MBwAB/wwLAAL/DAoAAf8MBwAB/wwOAAH/DAgAAf8MAeAMBgAB/wwNAAH/DAcAAf8MAQAG4AwB/wwB4AwB/wwYAAH/DAfgDBcAAeAMAv8MA+AMAv8MAQAC/wwVAAHgDAH/DAEAA/8MAQAD/wwYAAL/DAHdDAH/DAHgDJkGAAH/DBMAAf8MAQAB4AwJAAH/DBMAAeAMCwAB/wwfAAL/DAMAA+AMAf8MFAAC4AwBAAP/DAbgDAH/DBMAAv8MAQAC4AwD/wwD4AwC/wwUAAv/DBkAA/8MAd0MAf8MAeAMAf8M2gUAAf8MHwAB/wwCAAH/DBMAAf8MCAAB/wwCAAH/DAIAAf8MEAAB/wwIAAH/DAIAAf8MAgAB/wwQAAH/DAcAAf8MAeAMAgAB/wwCAAH/DBAAAf8MAQAD/wwHAAH/DAEAAv8MDwAB/wwC4AwD/wwB4AwBAAH/DAEAAf8MAQAD4AwBAAH/DA8ABv8MAuAMAgAB/wwB4AwB/wwC4AwC/wwRAAH/DAEAAv8MAeAMAf8MAeAMBP8MAeAMAQAB4AwB/wwRAAHdDAL/DAHdDAIAAd0MAf8MAt0MAQAD/wyvBgAB/wwfAAH/DAMAA/8MAwAB/wwVAAH/DAIABf8MAgAB/wwEAAH/DBAAAf8MAQAB4AwF/wwB4AwBAAH/DAIAAf8MAgAB/wwQAAf/DALgDAH/DAHgDAX/DBEAAf8MAQAD/wwC4AwD/wwCAAHdDAH/DAHdDBIABf8MAgAB3QzZBQAB/wwfAAH/DB8AAf8MCwAB/wwTAAH/DAsAAf8MEgAB4AwD/wwJAAH/DBEABv8MCAAB4AwQAAH/DAHgDAX/DALgDAQAAv8MAeAMEAAH/wwF4AwBAAHgDAH/DBEAAd0MBv8MA+AMAf8MBAAB/wwRAAHdDAH/DALdDAL/DAHdDAL/DEgA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("w18AAf8M3wcAAf8MPAAB/wzBBgAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MHQAB4AwBAAH/DL0HAAH/DAHgDAEAAf8MHQAD4AwB/wwbAAX/DPsFAAH/DB8AAf8MYAAB/ww/AAPgDAH/DBsABeAMHAAD4AycBwAB/wwfAALgDAP/DBsABOAMHAAC4AwD/wybBgAB/wwfAAH/DCIAAf8MHAAB/wwB4AwBAAH/DBwAAf8MAQAC/wwcAAHgDAIAAf8MHAAD4AwB/wwcAAHgDAP/DJwFAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MXwAB/wwfAAHgDAH/DB4AAf8MHwAC/wwBAAHgDBwABP8MnAYAAf8MfwAB/wwfAAH/DB8AAf8MAeAMAf8MHQAB/wygDwAB/wwfAAH/DB8AAf8MHwAB/wzeDgAB/ww/AAH/DL8IAAH/DB8AAf8M3wYAAf8MHwAB/wwfAAHgDP8wAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("EgAB/wwfAAH/DN8HAALgDAH/DB0AAeAMAd0M3QcAAf8MA+AMAf8MHAAB/wwB4AwC3QwcAAH/DAHgDB4AAd0MngcAAf8MA+AMAf8MGwAC/wwB4AwB/wwcAAH/DALgDAL/DBsAAf8MnQcAAeAMAQAE4AwB/wwEAAL/DBQAAv8MAuAMBQAB4AwXAAH/DAHgDAL/DAUAAd0MAf8MFQAD/wwB3QwdAAH/DP0GAAH/DAPgDAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAC/wwB4AwBAAHgDAQAAd0MAuAMEwAB4AwD/wwB4AwB/wwFAAL/DBUAAf8MAQAB3QwB/wwGAAH/DBQAAf8MAd0M/QYAAf8MAeAMA/8MAwAD/wwC4AwB/wwB4AwQAAH/DAEABP8MBAAC/wwB4AwC/wwRAAb/DAQABP8MFAAC/wwJAAHdDBQAAv8M/QYAAeAMBf8MBAAC4AwTAAf/DAMAAuAMA/8MEQAH/wwDAAHdDAIAAf8MEwAE/wwB3QwcAAHdDPwGAAH/DALgDAX/DAEAAeAMBP8MAQAC4AwPAAL/DAHgDAX/DAIAAv8MAt0MAf8MEQAB/wwB4AwG/wwKAAH/DA8AAf8MAd0MA/8MCwAB/wwPAAH/DA8AAf8M5gYAAv8MBgAC4AwF/wwB4AwBAAX/DAsAAf8MBQAB/wwBAAHgDAX/DAMAAv8MAd0MDAAB3QwFAAHgDAEABv8MEAAB/wwIAAH/DAHdDAEAAf8MAd0MAf8MGgAB/wz2BgAB/wwHAAH/DALgDAEAA/8MAQAH/wwDAAH/DAQAAv8MAuAMBAAC/wwB4AwB/wwBAAP/DAEAAv8MAd0MA/8MBAAB/wwEAAH/DAHgDAHdDAL/DAIAA/8MAuAMAQAD/wwLAAH/DAQAAv8MBwAB4AwB/wwB3QwBAAH/DAwAAv8MHwAB/wzmBgAB4AwBAAL/DAMAAf8MAuAMAf8MAeAMAgAI/wwJAAL/DALgDAQABP8MAwAH/wwKAAP/DAQAAv8MAeAMAf8MBQAB3QwC/wwEAAL/DALgDAYAAf8MBQAC4AwD/wwMAAPgDA0AAd0MEAAC3QzpBgAC4AwB/wwBAAH/DAEAAeAMAf8MAwAH/wwBAAH/DAsAAeAMAf8MAQAB/wwBAAL/DAHgDAH/DAMABf8MAwAB/wwB4AwB/wwIAAP/DAMAAf8MAd0MAv8MBAAD/wwB3QwB/wwCAALgDAEAAf8MBwAC/wwDAAH/DAIAAt0MCAAB/wwDAAH/DAEAAf8MHwAB/wziBgAB/wwDAAH/DAEAAf8MAQAD/wwDAAH/DAHdDAH/DAEABv8MAQAB4AwGAAL/DAIAAv8MAQAE/wwB4AwB/wwB4AwB/wwDAAb/DAIAAuAMBAAC/wwCAAf/DAHdDAP/DAQACP8MBgAB/wwBAAL/DAkAAf8MCAAB3QwC/wwIAAP/DBMAAv8MCQAB/wwB3QwUAAH/DAHdDMwGAAX/DAEAAv8MAeAMAwAE/wwE4AwBAAH/DAMAAf8MAeAMAf8MBOAMBf8MAuAMAf8MBAAE/wwCAALgDAQAAf8MAQAB/wwC4AwI/wwBAAHdDAH/DAUAAd0MAv8MAQAC4AwB/wwB4AwEAAb/DAIAA/8MCgAD/wwB4AwC/wwGAAX/DBEAAf8MAd0MAeAMAQAC/wwEAAHdDAEAA/8MEwAB3QwIAAL/DBYAAf8MpgYAAf8MAQAE4AwF/wwBAAH/DAEAAf8MBgAF4AwBAAL/DAIAAeAMAf8MBOAMBv8MAQAC4AwGAAH/DAEABeAMBQAE4AwH/wwJAAH/DAEAAf8MAQAE4AwCAAHgDAH/DAPgDAL/DAHdDAH/DAHdDAL/DAoAAf8MAgAC/wwBAAHgDAH/DAMAAv8MAQAB/wwBAAH/DBAAAv8MAQAC/wwB4AwBAAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAF/wwEAAHdDAH/DBUAAv8MAd0MqAYAA+AMBf8MCQAB/wwE4AwBAAH/DAEAAf8MAwAB/wwBAATgDAX/DAkAAeAMBP8MA+AMAf8MAgAC/wwC4AwBAAf/DAkAAd0MBP8MA+AMAgAB/wwCAAH/DAHgDAL/DAHgDAHdDAL/DAHdDAsAAf8MAeAMA/8MA+AMAQAB3QwBAAT/DAHgDAH/DBAAAd0MAQAB/wwBAAP/DAIAAv8MAwAC/wwRAAH/DAHdDAIAAf8MAeAMBAAB/wwC3QwVAAL/DKgGAAH/DAPgDAf/DAcACP8MBgAH/wwBAAP/DAYABv8MAQAC4AwEAAL/DAMABP8MCwAC/wwB3QwB/wwE4AwDAAb/DBIAAf8MBOAMBAAB4AwB/wwBAAHgDAL/DBEAAeAMAf8MAuAMAf8MBAAB/wwB3QwC/wwB3QwSAAL/DAHgDAH/DAcAAd0MFQAC/wwB3QwB/wypBgAB/wwB3QwB/wwBAAX/DAcABP8MAQAB4AwB/wwGAAL/DAUABf8MBgAB/wwB3QwB/wwB4AwCAAHgDAgAAv8MBQAB/wwB3QwB/wwKAAL/DAPgDAYAA/8MEgAC/wwD4AwGAAHgDAH/DBMAAf8MAeAMA/8MBgAC/wwTAAHdDAP/DB4AAv8MqgYAAd0MAgAG/wwIAAHgDAEAAeAMAf8MAeAMAf8MDQAD/wwB3QwB/wwIAAP/DAEAAuAMDgAC/wwLAAL/DAPgDBwAAf8MA+AMHAAD/wweAAHdDAH/DAHdDMwGAAb/DAcAAv8MAgAB/wwQAAL/DAoAAd0MAv8MAQAB/wwB4AwOAAHdDA0AAv8MAuAMHQAC/wwB4AwcAAH/DAHdDAH/DAHgDB4AAv8MzgYAAv8MAd0MCQAB/wwBAAH/DCIAAeAMHgAC4AwdAAL/DAHgDBwAAf8MAQAC/wweAAHdDP8GAAL/DB8AAeAMHQAC/wwB4AwfAAHgDP4GAAH/DB8AAf8MHwAB4AwgAAH/DB4AAv8M3wcAAf8MgD8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("oDgAAf8MHwAB/wwfAAHgDB8AAv8M3gcAAeAMAf8MHgAB4AwB3QyfBwAB/wwfAAH/DB4AAeAMAf8MHgAB/wwB4Ay+BwAB4AwfAAHgDAH/DJ4PAAH/DP8HAAH/DAIAAv8MHAAB/wwB3QzdBwAC/wwBAAH/DAHgDBwAAd0MAeAMAd0M3AcAA+AMAv8MGwAB3QwB/wwB3QwC/wzbBwAE/wwB4AwbAAHdDAL/DAHgDNwHAAL/DAHgDAH/DBwAAf8MAd0MAf8MAd0MHAAB/wwfAAH/DD8AAf8M3wYAAf8MAeAMAv8MHAAB4AwC/wxdAAH/DP8GAAH/DAIAAf8MHAAD/wwdAAHgDAH/DAHdDB0AAeAMHwAB/wwfAAHdDOAGAAH/DB4AAv8MHgAB4AwB/wwfAAH/DB4AAf8MHwAB/wzgBgAB/wweAAL/DB4AAeAMAv8MHQAC/wwfAAH/DB4AAd0MgAcAAf8MPgAC/wweAAH/DL8HAAH/DB8AAf8MAQAB/wweAAH/DP4GAAH/DB8AAf8MHwAB/wwgAAH/DB4AAf8M/z4A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("zgQAAf8MHwAB/wwfAAH/DB8AAeAMHQAC/wwB4AwFAAH/DBcAAv8MAQAB/wwEAAH/DBcAA/8MAgAE/wwYAALgDAEABf8MGQAH/wwBAALgDAEAAf8MAgAC/wwRAAb/DALgDAEAAf8MAeAMFgAB3QwE/wwBAAHgDB0AAd0MAeAMAf8MAeAM9QUAA/8MHQAC4AwB/wwdAAT/DBsAAf8MAeAMAQAB4AwcAAT/DAEAA/8MGQAB4AwB3QwB/wwBAAP/DBwABP8MAgAB4AwdAAH/DAEAAf8MAeAMHgAB3QwB/wzYBAAB/wwcAAH/DAIAAf8MHAAB/wwCAAH/DBwAAf8MAgAB/wwcAAH/DAIAAf8MHAAC/wwB4AwB/wwcAAH/DALgDAL/DBsABv8MGgAB/wwB4AwG/wwXAAHgDAH/DAHdDAEAAf8MAwAC4AwXAAH/DAYAAv8MAeAMHAAD/wwB3QwB4AwfAAH/DB8AAf8MlwYAAuAMHAAC/wwD4AwBAAH/DBoABP8MAuAMGgAB3QwC/wwBAAL/DALgDAH/DBgAAf8MAeAMAwAC4AwB/wwdAAHdDAH/DAHdDAHgDB8AAf8MvgUAAf8MFgAB/wwIAAH/DBYAAf8MCAAB/wwWAAH/DAgAAf8MFgAB/wwBAAHgDAL/DAQAAf8MFgAB/wwB4AwB/wwBAAL/DAMAAf8MFwAB/wwC4AwB/wwB4AwC/wwBAAH/DBgAAf8MAeAMAf8MAQAB4AwD/wwZAAHdDAIAAd0MAf8MAd0MqtkBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          treeSpectralLarge2: fG("treeSpectralLarge2", {
            x: 34,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("rgUAAv8MHgAD/wwdAAL/DAHgDJkBAAH/DB8AAf8MHAAC/wwBAAH/DBwAAuAMBP8MwQQAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DAHgDAH/DB0AAuAMAf8MHQAB4AwC/wwdAAH/DKABAAH/DBcAAf8MAeAMAf8MAgAB4AwCAAH/DMoFAAH/DBIAA/8MCgAB/wwTAAHgDAH/DAoAAf8MEgAB/wwB4AwB/wwKAAH/DBIAAf8MDAAB/wwNAAH/DBAAAf8MAeAMAf8MDAAB/wwQAAL/DA0AAf8MEAAB/wwB3QwNAAH/DBAAAd0MDgAB4AwB/wwfAAHgDAH/DAEAAuAMgQUAAf8MGAAB/wwGAAH/DBgAAf8MBgAB/wwYAAH/DAUAAeAMAf8MGAAB/wwB4AwDAAP/DB0AA/8MHQAC4AwB/wwFAAH/DBcAA/8MAwAB/wwBAAH/DAQAAeAMAf8MEgAB4AwGAAL/DAIAAf8MAuAMEgAB/wwDAAH/DAcAAeAMEwAB/wwJAAL/DAHgDA0AAf8MBQAB/wwaAAHgDAH/DAEAAuAMAf8MnQUAAf8MHwAB/wwFAAH/DBYAAf8MAgAB/wwFAAH/DBQAAuAMAwAB/wwFAAH/DAUAAf8MDgAC/wwDAAHgDAEAAf8MAwAB/wwFAAH/DA8AAv8MAwAB/wwB4AwDAAL/DAQAAf8MAQAB/wwRAAH/DAPgDAIAAuAMBAAB/wwCAAH/DBMAAf8MAwAB4AwC/wwCAAH/DALgDAH/DBQAAf8MAQAB4AwC/wwDAAH/DAHgDAH/DBYAAf8MAwAB/wwCAAH/DAHgDA8AAv8MAQAB/wwMAAHdDAHgDA4AAeAMAv8MAQAC4Ay4BAAB/wwfAAH/DB8AAf8MHwAB/wwNAAH/DBEAAf8MDQAB/wwRAAH/DA0AAf8MEQAC4AwMAAH/DBAABP8MCwAB/wwFAAH/DAsAAv8MAeAMAQAB/wwBAAH/DAMAAv8MAeAMAv8MBQAB/wwPAAH/DAMAAeAMAgAD4AwC/wwEAAH/DA8AAf8MBgAB/wwB4AwB/wwB4AwFAAH/DA8AAf8MAwAE/wwB4AwCAAH/DAMAAf8MEAAB4AwEAAH/DAEAA/8MAwAB/wwB4AwB/wwQAAL/DALgDAMAA/8MBAAB3QwB/wwOAAH/DAbgDAIAA/8MlAUAAf8MHwAB/wwcAAH/DAIAAf8MGwAF/wwcAAH/DALgDAH/DAkAAf8MEgAD/wwHAAH/DAEAAf8MAeAMEgAB/wwIAAHgDAEABOAMAf8MGQAD4AwB/wwB4AwB/wwBAAH/DBcACv8MEgAB/wwEAAn/DBEAAf8MAwAC4AwCAAf/DALgDBEAAf8MBOAMAQAF/wwCAAL/DIoFAAH/DB8AAf8MAgAB/wwbAAH/DCEAAv8MAQAB/wwdAAH/DAHgDAH/DAgAAv8MAQAB/wwBAAH/DA8AAf8MAeAMCAAB/wwCAAHgDBIAA/8MAgAD/wwCAAH/DAEAA+AMAf8MAQAB/wwOAAH/DAHdDAH/DAIABP8MAQAB4AwBAAPgDAP/DBMAA/8MAgAB4AwBAAf/DBEAA/8MBAAI/wwB4AwB/wwPAAP/DAHgDAMACP8MAeAMAf8MDwAD/wwC4AwCAAr/DKgFAAH/DAHgDAH/DB0AAv8MAeAMHgAD/wweAAL/DCAAAeAMAwAD/wwFAAHgDBMAAf8MAeAMAQAF/wwDAAH/DAHgDAL/DAUAAf8MCgAB/wwB4AwCAAX/DAMAA+AMA/8MAwAB/wwKAAH/DAHdDAIABf8MAQAB4AwBAAj/DAEAAeAMDQAF/wwDAAj/DAEAAeAMDgAF/wwB4AwCAAr/DA4ABf8MAeAMAf8MAQAL/wzKBAAB/wwfAAH/DB4AAv8MGgAB/wwBAAH/DAEAAf8MAeAMGgAB/wwBAAHgDAL/DAEAAf8MAgAC/wwVAAH/DAEAAf8MAQAD4AwCAAP/DBUABP8MBAAD/wwHAAL/DA0AA/8MBQAD/wwDAAH/DAEAAf8MDgAB/wwBAAHdDAL/DAEAAeAMAQAF/wwCAAH/DAEAAeAMEQAC3QwBAAH/DAEABf8MAwAD4AwD/wwOAAHdDAH/DAIABf8MAQAB4AwBAAH/DAHgDAX/DA4AAd0MAQAF/wwB4AwDAAj/DAHgDAH/DAEAAf8MCwAF/wwC4AwCAAn/DAIAAf8MCwAH/wwCAAr/DAEAAf8MhAQAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wweAAHgDAH/DAMAAeAMAwAC/wwVAAH/DAbgDAEAA/8MFQAD/wwF4AwE/wwUAAP/DAXgDAX/DAsAAf8MBwAC/wwBAAH/DAUABP8MCAAB/wwCAAH/DAkABP8MAgAB4AwF/wwGAAH/DAMAAf8MCQAC/wwBAAH/DAEAAuAMBf8MAgAB/wwBAAPgDAMAAf8MCwAC/wwBAAf/DAIAAf8MAQAC4AwD/wwBAAH/DAHgDAwAAf8MAeAMBf8MAuAMAQAB/wwBAAX/DAIAAeAMDAAC3QwF/wwD4AwK/wwOAAb/DALgDAv/DO8EAAH/DB8AAf8MFgAE4AwEAAP/DBMAAf8MBuAMAgAE/wwTAAL/DAfgDAT/DBMAAeAMAv8MAQAB/wwB4AwB/wwC4AwF/wwUAAP/DAMAAuAMA/8MFQAB/wwCAAL/DAEAAf8MAuAMA/8MBgAB/wwPAAH/DAEAAv8MAeAMAf8MAQAD/wwGAAPgDBAAB/8MBQAE4AwC/wwBAALgDAkAAf8MAd0MBv8MBgAD/wwBAAH/DAHgDAH/DAEAAeAMCwAH/wwD4AwBAAf/DAEAAeAMDQAH/wwD4AwJ/wymBQAB/wwBAAL/DAEAAf8MAwAD/wwTAAH/DAXgDAMABf8MEgAF/wwB4AwCAAHgDAX/DBMABP8MAwAB4AwF/wwTAAL/DAEAAf8MAQAB4AwBAALgDAP/DBYABP8MAQAB/wwD4AwHAAL/DAEAAeAMDAAB/wwDAAT/DAoAA+AMAQAB/wwMAAf/DAcABOAMAQAC4AwKAAn/DAYAAv8MAeAMAv8MBQAB4AwB/wwGAAf/DAQAAuAMBf8MAQAB/wwEAAH/DAgAB/8MAQAE4AwJ/wzoBAAB/wwfAAH/DB8AAf8MGwAB/wwB4AwBAAL/DAEAAf8MAwAD/wwUAAL/DAUAAeAMAQAD/wwUAAH/DAEAAf8MAgAB/wwCAAHgDAP/DBEAAf8MAwAB/wwBAAHgDAH/DAMAA+AMBAAB/wwNAAL/DAMAAv8MAQAD/wwE4AwDAAH/DAQAAf8MBAAB/wwDAAL/DAcAA/8MAuAMAf8MAwAB/wwBAAH/DAIAAf8MAuAMAgAB/wwDAAL/DAYAB/8MAwAB/wwEAAH/DATgDAH/DAMAAv8MBgAH/wwDAAH/DAEAAeAMAgAC/wwB4AwGAAH/DAcAB/8MAwAB/wwD4AwBAAL/DAEAAf8MBgAB/wwHAAH/DAHdDAT/DAMAAf8MAuAMAwAB3QwE/wwDAAL/DIcFAAH/DB8AAf8MBAAB/wwZAAL/DAQAAf8MFwAD/wwC4AwDAAH/DAYAAf8MBQAC/wwKAAH/DAEAAf8MBAAB/wwGAAH/DAUAA/8MAwAB/wwKAALgDAH/DAYAAf8MBQAD/wwCAAL/DAoAA+AMBgAB/wwKAAL/DAcABP8MA+AMBQAB4AwBAAH/DAEAAeAMAf8MBAAD/wwGAAb/DAEAAuAMBwAD4AwEAAP/DAYACP8MBAAC4AwBAAL/DAHgDAL/DAUAAf8MBgAB3QwF/wwFAATgDAL/DAUAA/8MCAAF/wwGAALgDAHdDAcAA/8MowUAAeAMIAAB/wwBAAH/DALgDBoAAeAMAQAD/wwB4AwB/wwPAAH/DAsABf8MDwAB/wwBAAL/DAMAAf8MBQAC4AwEAAH/DAHgDAsABf8MAQAC/wwIAAHgDAEAAf8MA+AMCwAH/wwKAAH/DATgDAgAAeAMAwAF/wwHAAP/DAIABOAMBgAD4AwDAAHgDAH/DAHgDAH/DAcAA/8MAQAB/wwBAAXgDAEABeAMBAAD/wwB4AwHAAP/DAEAAeAMAgAB/wwBAAbgDAEAAv8MAgAF/wwOAAH/DALgDALdDALgDAHdDAIAAf8MAgAF/wzCBAAB/wwfAAH/DB0AAf8MAQAB/wwdAAP/DAPgDBoAAf8MAQAB/wwCAAHgDAH/DBIAAf8MBgAJ/wwPAAP/DAUAAf8MAQAE/wwB4AwB/wwQAAX/DAIAAf8MBAAB3QwB4AwSAAX/DAEAAv8MCQAB/wwBAAH/DA0ABP8MAQAC/wwJAAH/DAIAAuAMCwAB4AwC/wwBAAHgDAL/DA0ABeAMAwAD4AwB/wwB4AwD/wwC4AwB/wwOAAXgDAEABOAMAf8MAwAD/wwB4AwPAAjgDAQABf8MDgAE4AwC3QwB4AwC3QwE4AwF/wzLBAAB/wwfAAH/DBcAAf8MBwAB/wwOAAH/DAcAAeAMBAAD/wwBAAH/DA4AAf8MBgAD/wwB4AwB/wwBAAP/DAEAAf8MDgAB/wwFAAL/DAHgDAP/DAEAA/8MAQAB/wwMAAH/DAEAAv8MBAAC/wwB3QwB/wwBAAH/DAHgDAQAAf8MDAAB/wwBAAL/DAQAAf8MAwAC/wwSAAX/DAIAAf8MGQAE/wwB4AwBAAH/DBgAAv8MAgAD4AwB/wwRAAXgDAEAAf8MAgAB/wwBAAH/DAPgDA8ACOAMAf8MAwAF/wwQAAvgDAX/DAwAA/8MA+AMAd0MAQAB4AwBAAXgDAX/DAsAA+AM+wMAAf8MHwAB/wwfAAH/DB8AAf8MHQAD/wwYAAL/DAIABf8MFwAC/wwCAAX/DBUABf8MAQAG/wwNAAP/DAQAAuAMAt0MAv8MAQAD/wwC4AwB/wwMAAP/DAgAAf8MBQAB4AwB/wwNAAP/DAMAAf8MDQAB/wwMAAH/DAEAAuAMAf8MDQAB/wwFAAPgDAYABOAMAf8MEgAD4AwEAAH/DAEAAf8MAuAMAf8MDQAB/wwEAAfgDAL/DAEABP8MDgAC/wwCAAjgDAb/DA0AA/8MAgAB3QwDAAHdDATgDAb/DAkABuAMHQAD4AyDBAAB4AwSAAH/DAsAAuAMEgAB/wwKAAPgDBIAAf8MAQAD/wwGAALgDBMABv8MBQAC4AwQAAH/DAEAB/8MDgAB/wwGAAbgDAX/DA4AAf8MBgAB4AwB/wwBAAP/DAEAA/8MAeAMAv8MDAAB/wwGAAH/DAEAA/8MBgAC4AwMAAH/DAMAA/8MAQAB/wwIAAL/DAHgDAUAA+AMAwAC/wwBAALgDAEAAuAMCwAB/wwGAAPgDAMABuAMAf8MDwAI4AwCAAH/DAEAAf8MAuAMAgAB/wwIAAP/DAIAAeAMAv8MAQAG4AwC/wwB4AwG/wwIAAP/DAcABuAMB/8MCQAD/wwBAAP/DAMAAd0MA+AMAQAB4AwBAAX/DAoACOAMGQAH4AwcAAPgDKMDAALgDB0AA+AMHAAE4AwbAAXgDBYAAf8MBAAF4AwTAAT/DAQABOAMEgAB4AwF/wwEAAPgDBMAAeAMBf8MBAAB4AwOAAH/DAIAAf8MAgAB4AwBAAX/DBMAAf8MAgAB/wwC4AwC/wwBAAP/DBQAAf8MAgAC/wwC3QwB4AwEAAH/DAcAA+AMCQAB/wwNAAHgDAUAA+AMAwAD4AwDAAH/DAHgDAwAAeAMAQAP4AwLAAP/DAEACuAMAgAD4AwBAAHgDAL/DAgAB/8MCeAMBv8MAQAB/wwIAAf/DAEAAf8MAgAE4AwB/wwCAAf/DAcAB/8MAeAMAwAD4AwB3QwBAAH/DAEABv8MCQAJ4AwXAAjgDBkABuAM4wIAAuAMHQAE4AwcAAXgDBsABOAMGwAF4AwaAAbgDBkABuAMFQAB/wwEAAXgDBIAAf8MAeAMA/8MBAAE4AwTAALgDAT/DAMABOAMEgAG/wwHAAHgDAoAAf8MBQAB/wwBAAP/DAoAA+AMCAAB/wwFAAX/DAoABOAMBwAB/wwUAAjgDAMAAf8MDwAD4AwCAArgDAEAAf8MCwAD/wwO4AwDAAH/DAoABf8MA+AMAwAG4AwCAAP/DAoABv8MAeAMAf8MBAAE4AwBAAHgDAX/DAkABv8MBQAC4AwDAAf/DAoACeAMFwAI4AwZAAbgDB0AAeAMAQAB4AzCAgAD4AwdAAXgDBoABeAMHAAE4AwbAAXgDBMAAf8MBgAG4AwTAAH/DAYABeAMFAAB/wwBAAH/DAMABeAMEAAB/wwEAAH/DAHgDAH/DAIABuAMEAAB/wwCAAPgDAL/DAMABeAMEAAB/wwLAAXgDA8AAf8MAgAB/wwJAATgDBEAAf8MCgAF4AwOAAH/DAwABeAMFAAD4AwFAAjgDAwABv8MBOAMAwAF4AwB/wwNAAv/DAQABeAMDAAL/wwGAATgDAT/DAkACP8MAwAC4AwCAAL/DALgDAP/DAsACeAMFwAI4AwZAAfgDBsABOAMogIAA+AMHAAG4AwaAAbgDBoABeAMHAAE4AwcAATgDBsAA+AMHQAC4AwcAATgDBwABeAMFwAB/wwDAAbgDBMAAeAMBwAF4AwPAALgDAsABeAMGwAG4AwNAAL/DAQAAeAMBwAF4AwHAAH/DAQAAf8MAQAE/wwD4AwGAATgDAgAAf8MBgAF/wwD4AwB/wwGAALgDAgAAf8MBgAJ/wwBAAH/DAcAA+AMAf8MAwAB/wwGAAf/DAEAAf8MAuAMAwAB4AwDAAbgDAEAAf8MBwAJ/wwDAAPgDAMABuAMAf8MCgAJ4AwYAAfgDBsABeAMGwAG4AwbAAXgDB4AAuAM3wEABuAMGgAF4AwcAATgDBwABOAMGQAB/wwCAATgDBkAAf8MAgAC4AwZAAH/DAEAAf8MAgAB4AwZAAP/DAHgDB0AAf8MAQAB4AwfAAXgDBsABeAMEAAC4AwCAAHgDAcABeAMDgAF4AwJAATgDAEAAeAMDAAB/wwC4AwMAAbgDAsAA/8MBAAB4AwHAAbgDAoAB/8MA+AMBAAB/wwDAAPgDA0ABv8MAeAMAf8MBAAB/wwTAAHdDAj/DAEAAf8MAQAB/wwIAAH/DAsACf8MAeAMAQAB/wwCAAHgDAQAAuAMAwAB/wwIAAH/DAHdDAb/DAHgDAEAAf8MAQAD4AwDAAL/DATgDA4ABeAMGwAF4AwbAAXgDBsABuAMGwAF4AwbAAbgDB0AA+AMHgAC4AweAAHgDF8AA+AMHAAG4AwbAAXgDBwABOAMFgAB/wwFAATgDBYAAf8MHwAB/wwfAAH/DCAAAuAMCgAB/wwSAAH/DAEAAf8MAeAMAf8MCAAB/wwUAAL/DALgDAcAAf8MFgAE4AwCAAH/DAIAAf8MCQAB/wwBAAPgDAgABOAMAwAB/wwBAAHgDAgAAv8MBeAMCAAD4AwBAAH/DALgDAH/DAHgDAgAA/8MBuAMCAAB4AwBAATgDAkABf8MAgAD4AwJAAPgDAoAB/8MA+AMCQAB/wwC3QwLAALdDAX/DAHgDAwAAeAMDQAG/wwBAAH/DBgACP8MBwAB/wwRAAHdDAP/DAHgDAL/DAUAAuAMAf8MAgAB/wwGAAH/DA4ABOAMHAAD4AwdAATgDBwABeAMGwAF4AwbAAbgDBsABeAMHAAF4AwcAATgDB0AAuAMHQAE4AwcAAXgDBsABuAMGgAF4AwcAATgDFkAAf8MHgAC/wwdAAH/DAEAAf8MFAAB/wwJAAT/DBIAAf8MCwAC4AwSAAH/DAoAAeAMBwAB/wwMAAH/DA4AAeAMAgAC4AwB/wwLAAL/DAXgDAsAA+AMCwAD/wwF4AwKAAH/DALgDAEAAf8MBQAB/wwCAAL/DALgDAH/DAXgDAgAAv8MAeAMAQAB/wwBAAH/DAQAAf8MAgAD/wwB3QwB/wwBAAH/DAEAAeAMCgAB/wwB3QwB4AwCAAH/DAQAAf8MBQAE/wwBAAH/DAkAAf8MAgAB/wwB4AwBAAH/DAQAAf8MBgAD/wwBAAH/DAsAAf8MAwAB/wwEAAH/DAYABf8MAeAMDgAB/wwBAAHgDAH/DAEAAf8MCAAB3QwB4AwC/wwGAAHgDAgAAf8MAgAC/wwOAALgDF4AA+AMHQAE4AwcAAXgDBsABeAMGwAG4AwaAAbgDBwABOAMHAAF4AwbAAbgDBsABOAMHAAE4AwdAALgDNwBAAHgDB4AAf8MBQAB4AwC/wwNAAH/DA4AA+AMAf8MDQAB/wwDAAHgDAoAAf8MA+AMAQAB/wwLAAH/DAEABOAMCQAC/wwB4AwD/wwKAAT/DAEAAuAMBgAB4AwCAAHgDAT/DAMAAf8MCAAF/wwLAAHdDAP/DAMAAf8MCAAC/wwBAAP/DAwAAf8MBAAB/wwJAAL/DAIAAf8MCwAC/wwEAAH/DAkAAv8MAeAMAv8MEQAB/wwNAAH/DAEAAf8MDwAB/wyyAQAD4AwdAATgDBwABeAMGgAG4AwbAAbgDBsABeAMHAAE4AwcAATgDB0AA+AMHgAB4AzbAQAB/wwB4AwGAAH/DBAAAf8MBgAC/wwBAATgDAEAAf8MEAAB/wwGAAL/DAEAAf8MBeAMEAAB/wwIAAH/DAEAAf8MA+AMAf8MEAAB/wwB4AwGAAT/DAEAAv8MAeAMDwAC/wwHAAH/DAIABP8MAQAB/wwOAAH/DAHgDAwAA/8MAeAMDgAC/wwLAAH/DAIAAv8MDgAB/wwLAAH/DAMAAf8MEAAB/wwKAAH/DB8AAf8M/AEAA+AMHQAD4AwcAAXgDBsABeAMHQAD4AweAALgDB8AAeAMuQEAAf8MCAAB/wwWAAL/DAcAAf8MFgAB/wwBAAL/DAEAAuAMAgAB/wwXAAL/DAXgDAEAAf8MFgAE/wwBAATgDAH/DBcAAeAMAQAC/wwCAAP/DBkABf8MGQAB/wwBAAH/DAEAAuAMBP8MEQAB/wwKAAX/DBsABP8MEAAB/wyIAwAC4AwdAAPgDB4AAuAMWQAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DAYAAf8MGAAB/wwB4AwFAAH/DBgAAf8MAuAMAQAB/wwCAAH/DBoABeAMAv8MFwAC/wwBAAXgDBkAA/8MA+AMA/8MGQAB/wwB4AwE/wwBAAH/DBYAAf8MAQAB/wwBAAH/DAEAAf8MAeAMAf8MGQAC/wwBAAH/DAMAAf8MHAAB/wwBAAP/DB0AAf8MAd0MAeAMWAAB/wzcBAAB4AwB/wwcAAH/DAPgDBwAAf8MBOAMAQAB/wwaAAH/DATgDB0ABeAMAf8MGAAD4AwC/wwBAAH/DBkAAf8MAeAMAQAB/wwB3QwC/wwaAAL/DAMAAv8MAeAMGQAB/wwCAAH/DAEAAv8MeAAB/wwfAAH/DBMA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("4EcAAf8MwR4AAf8MHwAB/wwfAAH/DB8AAf8MHQAB/wwBAAH/DP0GAAL/DB4AAv8MHgAC/wweAALgDAH/DB0AAf8MHwAB4AwBAAH/DB0AAf8MAQAB/wyABgAB/wwcAAL/DAEAAf8MHAAE/wwcAAT/DBwABP8MHAAC/wwB4AwB/wwcAAPgDAH/DBwAA/8MHQAC/wyeBgAC/wweAAP/DB0AA/8MHQAD/wwdAAL/DB4AAeAMAv8MHQAB/wwCAAH/DBwAAf8MwAUAAf8MHwAB/wwfAAH/DB4AAv8MHgAD/wwdAAP/DB0AA/8MHQAC/wweAAP/DB0AAv8MHgAD/wz/BQAB/wwfAAL/DBwABP8MHAAC/wwB3QwdAAL/DB4AAv8MHgAB/wwfAAHgDAH/DB4AAv8MoAYAAuAMHAAD/wwdAAL/DB4AAf8MAd0MHgAB/wwfAAH/DB8AAf8MHwAB/wyBBgAB/wwfAAL/DBwAA+AMHgAB4AweAAH/DL8HAAH/DAEAAf8MHQAC/wy+WQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gEAAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DL8HAAHgDB8AAeAMHwAB4AwfAAH/DP8GAAHgDB8AAuAMHgAB4AwfAAL/DB4AAf8M4AYAAf8MHwAB/wweAAHgDAH/DB4AAv8MHgAB/wwB3QzeBwAB/wwfAAH/DN8WAAL/DP4HAAHdDAH/DP4HAAH/DP93AA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("7wMAAf8MHwAB/wwfAAH/DB8AAf8MHAAB4AwCAAH/DBsAAf8MAuAMAv8MHAAB/wwC4AwcAAT/DAHgDBsABP8MHQAD3QydBgAB/wwfAAH/DB8AAf8MHwAB/wwgAAH/DEAAAf8MHQAD/wzx8QEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }])
        };

        function KG(GG, bG, ZG) {
          const wG = new VG.c;
          for (const LG of ZG) {
            const GG = wG.get(LG.chunkX, LG.chunkY, LG.chunkZ);
            if (!(0, SG.L)(GG)) throw new Error(`Duplicate chunk at ${LG.chunkX}, ${LG.chunkY}, ${LG.chunkZ}`);
            wG.set(LG.chunkX, LG.chunkY, LG.chunkZ, LG.rle)
          }
          return new YG.c(GG, {
            x: 0,
            y: 0,
            z: 0
          }, bG, wG)
        }
        const hG = {
          rockJungleLarge1: KG("rockJungleLarge1", {
            x: 30,
            y: 19,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          rockJungleLarge2: KG("rockJungleLarge2", {
            x: 29,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          rockJungleLarge3: KG("rockJungleLarge3", {
            x: 29,
            y: 22,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          rockJungleLarge4: KG("rockJungleLarge4", {
            x: 29,
            y: 24,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          rockJungleLarge5: KG("rockJungleLarge5", {
            x: 32,
            y: 25,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          rockJungleLarge6: KG("rockJungleLarge6", {
            x: 30,
            y: 28,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          rockSnowLarge1: KG("rockSnowLarge1", {
            x: 36,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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AR0LHBQAAR0KHAEdFAAB3QwBHQkcAdUMFQACHQHVDAccAd0MFQAB3QwDHQYcFwAC3QwBHQYcGQAB3QwFHAEdGgABHQQcAdUMGgACHQIcAdUMAd0MGgAB3QwBHQEcAdUMAR0SABMcBh0GHAEAExwE3QwCHQYcAQATHAQAAt0MBhwBAAEdERwBHQYABhwBAAEdERwBHQYABhwBAAHdDBEcAd0MBgAGHAIAERwHAAYcAgARHAcABhwCABEcBwABHQUcAgABHQ8cAdUMBwABHQUcAgABHQ8cAR0HAAHdDAUcAgAB3QwPHAHdDAgABRwDAA8cCQAFHAMADxwJAAUcAwAPHAkAAR0EHAMAAdUMDRwBHQkAAdUMBBwDAAEdDRwBHQkAAd0MBBwDAAHdDA0cAd0MCgADHAHVDAQADRwLAAIcAh0EAA0cCwACHAEdAd0MBAABHQwcCwABHAEdAd0MBQABHQwcCwACHQYAAd0MDBwLAAEdAd0MBwAMHAsAAd0MCAABHQocAR0UAAEdChwBHRQAAd0MAR0JHAHdDBUAAdUMCRwWAAHdDAEdBxwBHRcAAh0GHAEdFwAB3QwBHQYcAd0MGAAB3QwB1QwEHAEdEgATHAMdAdUMAh0GHAEAExwF3QwB1QwGHAEAExwFAAHdDAYcAQATHAYABhwBAAEdERwBHQYABhwBAAHVDBEcAR0GAAYcAQAB3QwRHAHdDAYABhwCABEcBwABHQUcAgARHAcAAR0FHAIAERwHAAHdDAUcAgARHAgABRwCAAEdDxwB1QwIAAUcAgAB1QwPHAEdCAAFHAIAAd0MDxwB3QwIAAUcAwAPHAkAAdUMAxwBHQMADxwJAAEdAxwBHQMAAR0NHAHVDAkAAd0MAxwB3QwDAAEdDRwB1QwKAAMcBAAB3QwNHAHdDAoAAdUMARwB1QwFAA0cCwABHQHVDAEdBQANHAsAAd0MAR0B3QwFAAEdDBwMAAHdDAYAAR0MHBMAAd0MDBwUAAscAR0UAAEdChwBHRQAAR0KHAHdDBQAAd0MAR0JHBYAAR0IHAHVDBYAAd0MAdUMBxwBHRcAAdUMBhwBHQHdDBcAAd0MBhwBHRIAExwB3QwBHQLVDAIdBhwBABMcAQAE3QwBHQYcAQATHAUAAd0MAR0FHAEAExwGAAEdBRwBABMcBgAB3QwFHAEAAR0RHAEdBwAFHAEAAR0RHAEdBwAFHAEAAd0MERwB3QwHAAUcAgARHAgABRwCABEcCAAFHAIAAR0QHAgAAR0DHAEdAgABHQ8cAR0IAAEdAxwBHQIAAd0MDxwBHQgAAd0MAxwB3QwDAA8cAd0MCQADHAQADxwKAAHVDAEcAR0EAA8cCgABHQEcAdUMBAAPHAoAAd0MAdUMAd0MBAABHQ0cAR0LAAEdBQABHQ0cAR0LAAHdDAUAAd0MDRwB3QwSAA0cEwANHBMAAR0LHAEdEwABHQscAR0TAAHdDAEdChwB3QwUAAEdChwVAAHdDAocFgABHQkcFgABHQgcAR0WAAHdDAgcAR0XAAccAR0B3QwXAAHVDAYcAR0SABMcAR0B3QwCHQHVDAEdBhwBABMcAd0MAQAE3QwBHQUcAQATHAYAAh0DHAEdAQATHAYAAd0MAR0DHAEdAQABHREcAR0HAAHdDAMcAd0MAQAB1QwRHAEdCAADHAIAAd0MERwB3QwIAAMcAwARHAkAAR0BHAEdAwARHAkAAx0DAAEdEBwJAAHdDAEdAd0MAwABHRAcCgAB3QwEAAHdDA8cAR0QAA8cAR0QAA8cAd0MEAAPHBEADxwRAAEdDRwB1QwRAAEdDRwB1QwRAAHdDA0cAd0MEgABHQwcEwABHQwcEwAB3QwLHAEdFAALHAEdFAAB1QwKHAHdDBQAAdUMChwVAAHdDAEdCBwBHRYAAR0IHAHVDBYAAd0MCBwB3QwXAAgcGAAHHAEdGAABHQYcAR0YAAEdBRwBHQHdDBIAAR0SHAcdBRwBAAHdDBIcAh0E3QwFHQEcAgASHALdDAQAAd0MAx0B1QwBHQIAERwB1QwHAATdDAEdAgARHAEdCwAB3QwCABEcAd0MDgARHA8AERwPAAEdEBwPAAEdDxwBHQ8AAd0MDxwBHRAADxwB3QwQAAEdDhwRAAEdDhwRAAHdDA4cEgANHAEdEgANHAEdEgAB1QwMHAHdDBIAAR0MHBMAAd0MDBwUAAscAR0UAAscAR0UAAIdCRwB3QwUAAIdCRwVAALdDAgcAR0XAAgcAR0XAAEdBxwB3QwXAAEdBxwYAAHdDAYcAR0ZAAYcAR0ZAAUcAR0B3QwZAAEdBBwBHRMAAd0MFBwFHQHVDAQcAgAUHAXdDAEdBBwCABIcAR0B1QwFAAHdDAEdAxwCABIcAR0B1QwGAAEdAxwCABIcAt0MBgAB3QwDHAIAAR0RHAkAAxwCAAHVDBEcCQADHAIAAd0MERwJAAMcAwAPHAHVDAEcCQABHQIcAwABHQ4cAdUMARwJAAEdAhwDAAEdDhwB3QwBHAkAAd0MAh0DAAHdDA4cAQABHQoAAh0EAA4cAQAB1QwKAALdDAQADRwB1QwBAAHdDBAAAR0MHAEdEgABHQwcAd0MEgAB3QwMHBQADBwUAAscAR0UAAMdCBwBHRQAAx0IHAHdDBQAA90MCBwYAAccAR0YAAccAR0YAAEdBhwB3QwYAAEdBhwZAAHdDAUcAR0aAAUcAR0aAAQcAdUMAd0MGgAEHAHVDBsAAR0CHAEdAd0MGwABHQEcAh0VABQcAdUMBR0EHAIAFBwBHQXdDAQcAgAUHAHdDAUABBwCAAEdEhwBHQYABBwCAAEdEhwB1QwGAAQcAgAB3QwBHQ4cAR0CHAHdDAYABBwDAAEdDhwBHQIcBwABHQMcAwAB3QwOHAHdDAIcBwABHQMcBAAOHAEAAhwHAAHdDAMcBAABHQ0cAQACHAgAAxwEAAIdDBwBAAEcAR0IAAEdARwBHQQAAd0MAdUMCxwBHQEAARwBHQgAAR0BHAHVDAUAAd0MCxwBHQEAARwB3QwIAAHdDAHVDAHdDAYACxwB3QwBAAEcCgABHQcACxwCAAEcCgAB3QwHAAscAgABHBIAChwBHQIAAdUMEgABHQkcAdUMAgABHRIAAh0IHAHdDAIAAd0MEgAB3QwB1QwBHQccFwAB3QwBHQYcAdUMGAAB3QwBHQUcAR0ZAAEdBRwB3QwZAAHdDAQcAR0bAAQcAR0bAAMcAR0B3QwbAAEdAhwB1QwcAAEdARwBHQHdDBwAAd0MARwBHR4AAR0B3QweAAEdHwAB3QwWAAHVDBQcBB0B1QwEHAIAAR0THAIdBN0MBBwCAAHdDBMcAR0B3QwEAAQcAwATHAHdDAUABBwDAAEdEhwGAAQcAwABHRIcBgAEHAMAAd0MEhwGAAQcBAAB1QwMHAEdAxwB1QwGAAEdAxwEAAEdDBwB1QwDHAHVDAYAAR0DHAQAAd0MAR0LHAHdDAMcAd0MBgAB3QwDHAUAAR0LHAEAAxwIAAMcBQAB3QwLHAEAAxwIAAMcBgABHQkcAR0BAAMcCAABHQEcAdUMBgACHQgcAR0BAAMcCAABHQEcAR0GAAHdDAHVDAgcAd0MAQACHAEdCAAB3QwBHQHdDAcAAd0MCBwCAAIcAR0JAAEdCQAHHAEdAgACHAHdDAkAAd0MCQABHQYcAR0CAAIcFAAB1QwBHQUcAd0MAgACHBQAAd0MAh0EHAMAARwBHRUAAd0MAR0DHAEdAwABHAEdFgAB3QwDHAEdAwABHAHdDBcAAx0B3QwDAAEcGAABHQLVDAQAAR0YAAPdDAQAAR0fAAHdDM8BAAHdDBUcAdUMAx0EHAMAAR0SHAEdAdUMAR0C3QwBHQQcAwABHRIcAh0B3QwCAAHdDAQcAwAB3QwNHAEdBBwC3QwEAAQcBAABHQwcAR0EHAYABBwEAAHVDAwcAd0MBBwGAAEdAxwEAAHdDAwcAQAEHAYAAR0DHAUAAR0LHAEABBwGAAHdDAMcBQABHQocAR0BAAMcAR0HAAMcBQAB3QwKHAEdAQADHAEdBwADHAYAAR0JHAHdDAEAAxwB3QwHAAHVDAEcAR0GAAHVDAkcAgADHAgAAR0BHAEdBgAB3QwBHQccAR0CAAMcCAAB3QwBHQHdDAcAAR0HHAEdAgADHAkAAR0IAAHdDAccAd0MAgADHAkAAd0MCQABHQYcAwADHBMAAR0FHAHVDAMAAhwB1QwTAAHdDAHVDAQcAR0DAAIcAdUMFAABHQHVDAIcAR0B3QwDAAIcAd0MFAAB3QwB1QwCHAEdBAACHBYAAd0MAh0B3QwEAAEcAR0XAAIdBQABHAEdFwAC3QwFAAEcAd0MHgABHR8AAR0fAAHdDNABAAHdDBUcBB0DHAQAAR0SHAIdAt0MAh0DHAQAAR0RHAMdAgAC3QwDHAQAAd0MCxwB1QwFHAEdAt0MBAADHAUAAR0KHAEdBRwB3QwGAAMcBQABHQocAd0MBRwHAAEdAhwFAAHdDAocAQAFHAcAAR0BHAEdBgAJHAIdBRwHAAHdDAIdBgABHQgcAh0EHAEdCAABHQHdDAYAAR0IHALdDAQcAR0IAAHdDAcAAd0MAR0HHAIABBwB3QwRAAEdBhwBHQIABBwSAAHdDAEdBRwBHQIABBwTAAEdBBwB1QwB3QwCAAQcEwAB3QwB1QwDHAEdAwADHAEdFAABHQIcAR0B3QwDAAMcAR0UAAHdDAMdBAADHAHdDBUAAh0B3QwEAAMcFgAC3QwFAAMcHQACHAEdHQABHQHVDAEdHQACHQHdDB0AAt0MsgIAFxwCAAIcBQAXHAIAAR0BHAUAAR0WHAIAAh0FAAEdFRwBHQIAAd0MAR0FAAHdDBUcAR0DAAHdDAYAAdUMFBwB3QwKAAEdDxwB1QwDHAEdCwAB3QwBHQYcAh0FHAHVDAEdAhwCHQwAAR0FHAEdAdUMAR0FHAEdAd0MAtUMAR0B3QwMAAHdDAEdAxwC1QwC3QwFHAHdDAEAAh0B3QwOAAEdAxwBHQHdDAIABBwBHQIAAt0MDwAB3QwB1QwCHQHdDAMAAR0DHAEdFAADHQQAAR0DHAHdDBQAA90MBAAB3QwDHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MswMAAR0OHAEABxwB1QwCHAYAAd0MFhwB3QwCHAcAAR0VHAEAAhwHAAHVDAEdExwBHQEAAh0HAAHdDAIdARwEHQ0cAR0BAAIdCAAB3QwDHQLVDAIdDBwB3QwBAALdDAkAAd0MAR0E3QwBHQwcDgAB3QwEAAHdDAEdBBwB1QwGHBQAAR0C1QwEHQUcFAAB3QwBHQLVDAEdAd0MAdUMBRwVAATdDAEAAd0MBRwbAAUcGwAB1QwEHBsAAR0EHBsAAd0MBBwcAAQcHAAEHBwAAR0CHAEdHAABHQIcAR0cAAHdDAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AARwfAAEcHwABHR8AAR0fAAHdDKsBAAEdGRwGAAEdGRwGAAHdDAHVDBgcBwADHRMcAR0CHAcAAd0MAx0B1QwCHQ8cAdUMAhwIAALdDAEdAtUMAR0B1QwOHAHdDAIcCgAE3QwBHQHVDAwcAR0BAAIcDgAB3QwB1QwMHAEdAQABHQEcDwAB3QwEHAIdAdUMBRwB3QwBAAEdARwQAAEdAxwDHQUcAgAB3QwBHRAAAR0DHAPdDAUcAwAB1QwQAAHdDAMcAwAFHAMAAd0MEQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwBHQHdDAMABRwWAAEdBAAFHBYAAd0MBAAFHBsAAR0EHBsAAdUMBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwB1QwcAAEdAhwBHRwAAd0MAR0BHAHdDB0AAR0BHB4AAd0MARwfAAEdHwABHR8AAd0MSAAB3QwcHAQAHBwEAAQcAR0XHAQABBwCHRYcBAADHAEdAd0MAdUMAR0VHAQAAR0BHALVDAEAAd0MAdUMEhwBHQIcBAABHQEcAR0B3QwCAAHdDAMcAdUMAR0NHAEdAhwEAAHdDAEdAd0MBAABHQEcAdUMAh0FHAEdBhwBHQHdDAIcBQAB1QwFAAEdARwB1QwC3QwFHAEdBhwBHQEAAhwFAAHdDAUAAd0MAR0B3QwCAAUcAd0MBhwB3QwBAAHVDAEcDAABHQMABRwBAAEdBRwCAALVDAwAAd0MAwAFHAEAAR0FHAIAAd0MAR0QAAEdAxwBHQEAAd0MBRwDAAHdDBAAAR0DHAEdAgAFHBQAAd0MAxwB3QwCAAUcFQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwB1QwB3QwDAAUcFgABHQQABRwWAAHdDAQAAR0DHAHVDBsAAdUMAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MiQEAHRwDAB0cAwAFHAIdFhwDAAUcAdUMAR0THAHVDAIcAwAFHALdDAEdEhwB1QwCHAMAAR0DHAEdAgABHRIcAd0MAhwDAAEdAxwBHQIAAd0MAxwCHQUcAR0GHAHVDAEAAhwDAAHdDAMcAd0MAwADHALVDAUcAR0GHAHVDAEAAR0BHAQAAxwEAAMcAt0MBRwB3QwBHQUcAd0MAQABHQEcBAADHAQAAR0BHAEdAgAFHAEAAR0FHAIAAd0MAdUMBAAB1QwBHAEdBAADHQIABRwBAAHdDAUcAwABHQQAAR0BHAEdBAAB3QwBHQHdDAIABRwCAAUcAwAB3QwEAAHdDAEdAd0MBQAB3QwDAAUcAgAFHAkAAR0KAAEdAxwB1QwCAAUcCQAB3QwKAAEdAxwBHQIABRwUAAHdDAMcAd0MAgAFHBUAAxwDAAUcFQABHQEcAdUMAwABHQMcAR0VAAMdAwAB1QwDHAHVDBUAAd0MAR0B3QwDAAHdDAMcAd0MFgAB3QwFAAMcHQADHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MqQEAHRwDAB0cAwAFHAEdAdUMFhwDAAUcAdUMAR0THAIdARwDAAUcAt0MAR0DHAEdDRwEHQMABRwCAAEdAxwBHQYcAh0FHAEdAt0MAdUMAwAFHAIAAd0MAxwB3QwBHQUcAh0FHAHdDAIAAd0MAwABHQMcAR0DAAMcAQABHQUcAt0MBRwHAAHVDAMcAdUMAwABHQEcAR0BAAHdDAUcAgAFHAcAAd0MAxwB3QwDAAMdAgAFHAIABRwIAAMcBAAB3QwB1QwB3QwCAAUcAgAFHAgAAxwFAAHdDAMABRwCAAQcAR0IAAEdAhwJAAEdAxwB1QwCAAEdAxwB1QwIAAHVDAIcCQAB1QwDHAHVDAIAAR0DHAHdDAgAAd0MARwBHQkAAd0MAxwB3QwCAAHdDAMcCgABHAHVDAoAAdUMARwBHQQAAxwKAAEdAd0MCgABHQEcAR0EAAMcCgAB1QwLAAHdDAEdAd0MBAABHQEcAR0KAAHdDAwAAR0FAAEdARwBHRcAAd0MBQAB3QwBHQHdDB4AAR0fAAHdDMkCAB0cAwAdHAMABhwBHRQcAR0B1QwDAAUcAx0DHAHVDAEdDBwB1QwDHQMABRwBHQHdDAHVDAEdAdUMAx0FHAEdAdUMBBwB1QwCHQLdDAMAAR0DHAEdAd0MAQAB3QwC1QwBHQLdDAUcAx0DHAEdAt0MBQABHQMcAR0DAAPdDAIABRwC3QwBHQMcAd0MBwAB3QwDHAHdDAgABRwCAAHdDAMcCQADHAkAAR0DHAEdAwAB1QwBHAEdCQADHAkAAR0DHAEdAwABHQEcAdUMCQAC1QwBHAkAAd0MAxwB3QwDAAHdDAEdAd0MCQAC1QwBHAoAAxwFAAEdCgAC3QwBHQoAAdUMARwBHQUAAd0MDAAB1QwKAAHVDAIdEgAB3QwKAAHdDAEdAd0MHgAB3QyQBAAB3QwGHAIAFBwEAAYcAR0BAAEdCxwBHQccBAAFHAIdAdUMAx0B1QwHHAEdAtUMBhwEAAQcAh0D3QwE1QwEHAMdAd0MAdUMBRwBHQQABBwB1QwB3QwDAAPdDAEdBBwCHQHdDAEAAd0MAh0DHAEdBAAB1QwDHAHdDAcAAd0MAR0BHAIdAt0MAwAB1QwBHQIcAdUMAd0MBAAB1QwCHAHVDAkABB0FAALdDAEdARwBHQUAAd0MAdUMARwBHQkAAd0MAdUMAt0MBwACHQHdDAYAAR0BHAHdDAoAAd0MCQAB3QwBHQcAAd0MARwWAAHdDAgAAR0fAAEdHwAB3Qz+BAAFHAEdDRwBHQccBQAFHAHdDAUcAR0B1QwBHQUcAR0HHAUABRwBAAQcAR0B1QwCHQHVDAIcAh0B3QwHHAUABBwBHQEAAxwB1QwBHQPdDAIdAdUMAh0BAAEdBhwFAAEdAxwBHQEAAxwBHQHdDAMAAd0MAdUMAR0C3QwBAAEdBhwFAAEdAxwB3QwBAAMcAd0MBQAC3QwDAAHdDAYcBQAB3QwDHAIAAdUMARwBHQwABhwGAAHVDAEcAR0CAAMdDAAB1QwFHAYAAR0BHAEdAgAB3QwB1QwB3QwMAAHVDAUcBgAB3QwB1QwB3QwDAAHdDA0AAd0MBRwHAAEdEwAFHAcAAd0MEwAFHBsAAR0DHAEdGwABHQMcAdUMGwAB3QwBHQEcAR0B3QwcAAMdHQAB3QwBHQHdDB4AAd0MxwMACxwCHQ4cBQAKHAEdAdUMAx0MHAUAChwB1QwC3QwB1QwBHQwcBQAKHAHdDAIAAt0MAR0LHAUAAR0DHAEdBRwFAAEdCxwFAAEdAxwB1QwFHAUAAd0MAR0KHAUAAd0MAxwB3QwB1QwDHAEdBgABHQocBgADHAEAAR0DHAHVDAYAAd0MAR0CHAEdBhwGAAMcAQAB3QwDHAHdDAcAAh0BHAEdBhwGAAEdARwBHQIAAxwIAAHdDAHVDAEdAd0MBhwGAAMdAgABHQEcAR0JAAHdDAEdAQAGHAYAAd0MAR0B3QwCAAEdARwBHQoAAd0MAQAGHAcAAd0MAwAB3QwBHQHdDAwABhwMAAEdDQABHQUcDAAB3QwNAAHVDAUcGgAB3QwFHBsABRwbAAUcGwABHQMcAR0bAAHVDAMcAdUMGwAB3QwBHQEcAR0B3QwcAAEdAdUMAR0dAAHdDAHVDAHdDB4AAd0MhwIACxwDHQ0cBQAKHAEdAdUMAh0B1QwMHAUAChwBHQPdDAEdDBwFAAEdCRwB3QwDAAHdDAwcBQAB1QwDHAHVDAUcBQAB1QwLHAUAAd0MAxwB1QwFHAUAAR0LHAYAAxwB3QwFHAUAAd0MCxwGAAEdARwBHQEAAdUMAxwBHQYACxwGAAMdAQABHQMcAR0GAAscBgAB3QwB1QwB3QwBAAHdDAMcAd0MBgALHAcAAd0MAwADHAcAAdUMChwLAAEdAhwHAAEdChwLAAEdARwBHQcAAd0MAhwCHQYcCwAB3QwCHQgAAhwB1QwBHQYcDAABHQHdDAgAAR0BHALdDAYcDAAB3QwJAAEdARwCAAYcFgAB3QwBHQIABhwXAAEdAgAGHBcAAd0MAgABHQUcGgABHQUcGgAB3QwEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAR0BHAEdHQACHQHVDB0AAd0MAR0B3QweAAHdDGYAAd0MAdUMChwCHQHVDAEdDBwFAAHdDAMcAR0FHAIdAdUMAd0MAdUMDBwGAAMcAR0FHAEdAt0MAQAB3QwMHAYAAR0BHAEdAd0MBRwB3QwEAAwcBgADHQEABRwFAAwcBgAB3QwBHQHdDAEAAR0DHAEdBQAMHAcAAd0MAgABHQMcAdUMBQAEHAEdBxwKAAHdDAMcAd0MBQABHQMcAR0HHAsAAxwGAAEdAxwB3QwHHAsAAR0CHAYAAd0MAxwBAAccCwABHQEcAR0HAAscCwAB3QwCHQcACxwMAAHVDAHdDAcACxwMAAHdDAgAAxwBHQccFQAB1QwCHAIdBhwVAAEdAhwB3QwBHQYcFQAB3QwCHAEAAd0MBhwWAAIcAgAGHBYAAhwCAAYcFgABHQEcAgAGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwB1QwbAAHVDAMcAd0MGwAB3QwBHQEcAR0dAALVDAEdHQAB3QwBHQHdDB4AAd0MJgAC3QwBAAPdDAEdBxwBHQHVDAwcCgABHQYcAR0C3QwMHAoAAd0MBhwBHQIADBwLAAYcAd0MAgAMHAsABhwDAAwcCwABHQEcAR0CHAEdAwAMHAsAAR0BHAHVDAIcAR0DAAwcCwAB3QwBHQHdDAIdAd0MAwAMHAwAAR0BAAIdBAABHQscDAAB3QwBAALdDAQAAR0LHBQAAd0MCxwVAAMcAR0HHBUAAxwBHQccFQADHAHdDAccFQADHAEABxwVAAMcAQABHQYcFQABHQIcAQABHQYcFQABHQIcAQAB3QwGHBUAAd0MAhwCAAYcFgACHAIABhwWAAEdARwCAAYcFgAB1QwBHAIAAdUMBRwWAAHdDAEcAgABHQUcFwABHQIAAd0MBRwXAAHVDAMABRwXAAHdDAMABBwBHRsAAR0DHAHVDBsAAR0DHAHdDBsAAd0MAR0BHAEdHQADHR0AAd0MAR0B3QweAAHdDAMAAt0MAR0DHAEdAwABHQYcAt0MDBwDAAHdDAMcAd0MAwAB3QwGHAIADBwEAAMcBQABHQUcAgAMHAQAAxwFAAEdBRwCAAwcBAADHAUAAd0MBRwCAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAAB3QwB1QwB3QwGAAHdDAMcAd0MAgABHQscBQABHQgAAxwDAAEdCxwFAAHdDAgAAxwDAAHdDAscDgABHQEcAR0EAAMcAR0HHA4AAR0BHAEdBAADHAEdBxwOAAHdDAEdAd0MBAADHAHdDAccDwABHQUAAxwBAAccDwAB3QwFAAEdAhwBAAccFQAB1QwCHAEABxwVAAHdDAIcAQAHHBYAAhwBAAEdBhwWAAIcAQABHQYcFgABHQEcAQAB3QwGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwBHRsAAR0DHAHdDBsAAd0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MIgAC3QwB1QwFHAMAAR0GHALdDAwcAgAB3QwFHAMAAdUMBhwCAAwcAwAFHAMAAd0MAR0FHAIAAR0LHAMABRwEAAHVDAUcAgABHQscAwAFHAQAAd0MBRwCAAHdDAMcAR0HHAMAAdUMAxwBHQUABRwDAAMcAdUMBxwDAAEdAxwBHQUABRwDAAMcAd0MBxwDAAHdDAMcAd0MBQAEHAEdAwADHAEABxwEAAMcBgAEHAHVDAMAAxwBAAccBAADHAYABBwB3QwDAAMcAQAHHAQAAdUMARwBHQYAAR0DHAQAAR0CHAEABxwEAAEdARwBHQYAAR0DHAQAAR0CHAEABxwEAAHdDAEcAd0MBgAB3QwBHQEcAR0EAAHdDAIcAQAHHAUAAR0IAAEdARwBHQUAAhwBAAccBQABHQgAAd0MAR0B3QwFAAEdARwBAAccBQAB3QwJAAEdBgABHQEcAQAHHA8AAd0MBgAB3QwBHQEAAR0GHBcAAR0BAAEdBhwXAAHdDAEAAd0MAR0FHBoAAR0EHAEdGgAB3QwEHAHVDBsABBwB3QwbAAEdAxwcAAEdAxwcAAHdDAIcAR0dAAMdHQACHQHdDB0AAt0MggEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gCgAARwfAAEcHwAB1QwfAAEdHwAB3Qz/BgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8FAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB3QzfBQABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAR0dAAEcAdUMAR0dAAEdAdUMAd0MHQABHQHdDB4AAd0M/wYAAhwBHQHdDBwAAhwB1QwdAAHVDAEdAd0MHQACHR4AAt0M/gYAAhwBHQHdDBwAARwBHQHVDB0AAh0B3QwdAAEdAd0MHgAB3Qz/BgABHAEdAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8EAAEcAdUMAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/BAACHAEdAd0MHAABHAIdHQABHAEdAd0MHQABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MvwUAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAEdAd0MHgAB3QzfBgACHAEdAd0MHAABHAIdHQAB1QwBHQHdDB0AAdUMAd0MHgAB3Qz/BgACHAHdDB0AARwBHR4AAR0B1QweAAEdAd0MHgAB3Qz/BgABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M3wUAAhwB3QwdAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MnwUAARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8GAAEdHwAB1QwfAAHdDL8HAAEcAd0MHgAB1QwfAAEdHwAB3QyfBwABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAdUMHwAB3Qz/BQACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwAB1QwfAAHdDJ8EAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3QyfAwADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDP8CAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAHVDB0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwB1QweAAEcAd0MHgABHB8AAR0fAAEdHwAB3QzfAgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAHVDB0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwAB1QwfAAEdHwAB3QyfAgADHB0AAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3Qz/AQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("jigAAd0M/AcAAd0MAR0B1QwB3QwdAAEdAd0MHgAB3Qy8BwAB1QwBHAEdAhwBHRoAAd0MBB0B3QwbAAEdAd0MAh0cAAHdDAEAAt0MmgcAAR0FHAHdDBkAAh0BHAEdAdUMAR0aAAHdDAEdAdUMAx0bAAHdDAHVDAPdDBwAAd0M/AYAAR0B1QwFHAHdDBgAAd0MAh0DHAEdGgAB3QwBHQMcAR0bAAHdDAIcAR0B3QwcAAEcAh0dAAHVDAEdAd0MHQABHQHdDB4AAd0MnAYAAd0MAdUMBBwBHRoAAh0CHAEdAd0MGgAB3QwCHQEcAR0cAAHdDALVDAHdDB0AAd0MAR0fAAHdDNwGAAMdARwBHQHdDBoAAd0MAx0B1QwcAALdDAEdAd0MHgAB3QydBwAB3QwCHQHdDB0AAR0B3QweAAHdDLWfAQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AQAB3QwBHQUcAgAB3QwBHQYcAwALHAIAAd0MBRwDAAEdBhwDAAscAwAFHAMAAd0MAR0FHAMAAdUMChwDAAUcBAABHQUcAwABHQocAwAFHAQAAd0MBRwDAAHdDAocAwAFHAUABBwBHQQAChwDAAUcBQAEHAEdBAAKHAMABBwBHQUABBwB3QwEAAEdAhwBHQYcAwAEHAEdBQAEHAUAAh0BHAHVDAYcAwAEHAHdDAUAAR0DHAUAAd0MAR0B1QwB3QwGHAMAAdUMAxwGAAHVDAEdAhwGAAHdDAEdAQAGHAMAAdUMAxwGAAHdDAEdARwBHQcAAd0MAQAGHAMAAd0MAR0BHAEdBwAB3QwCHQkABhwEAAEdARwBHQgAAR0B3QwJAAYcBAAB3QwBHQHdDAgAAd0MCgAGHAUAAdUMFAAGHAUAAd0MFAAGHBoABhwaAAIdBBwaAAEdAdUMBBwaAALdDAEdARwBHQEcHAADHQEcHAAB3QwBHQHdDAHVDB0AAd0MAQAB1QwfAAHdDOIBAAHdDAUcAd0MAQAB3QwB1QwGHAcAAR0GHAMABRwDAAIdBRwHAAHVDAYcAwAFHAMAAd0MAR0EHAEdBwAB3QwGHAMABRwEAAHdDAQcAR0IAAYcAwAFHAUAAdUMAxwB3QwIAAYcAwAEHAEdBQABHQMcCQAGHAMABBwB1QwFAAHdDAMcCQAGHAMABBwB3QwGAAMcCQABHQUcAwAEHAcAAxwJAAEdBRwDAAEdAxwHAAIcAR0JAAHdDAUcAwABHQIcAR0HAAHVDAIdCgAFHAMAAd0MAhwBHQcAAh0B3QwKAAUcBAABHAEdAd0MBwAC3QwLAAUcBAABHAEdFQAFHAQAARwB3QwVAAUcBAABHRYABRwEAAHVDBYAAdUMBBwEAAHdDBYAAR0BHAHVDAIcGwAB3QwCHQIcHAABHQHdDAIcHAAB3QwBAAEdARweAAHVDAEdHgAB3QwBHR8AAd0MggIAAd0MBRwB3QwBAALdDAMdAd0MCgAB3QwFHAMAAR0DHAEdBAADHQwABRwDAAEdAxwBHQQAA90MDAAFHAMAAd0MAxwB3QwTAAUcBAADHBQAAR0EHAQAAxwUAAHVDAQcBAADHBQAAd0MBBwEAAMcFQABHQMcBAACHAEdFQABHQMcBAACHAEdFQAB3QwDHQQAAhwB3QwWAAMdBAABHAEdFwAD3QwEAAIdHgABHQHdDB4AAd0MvgQAAt0MAR0B1QwBHQMAA90MFwAB3QwC1QweAALdDLjnAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("AxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AARwB1QweAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M/wEAAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwAB1QwfAAHVDB8AAd0MnwUAARwfAAEdHwAB1QwfAAHdDJ/vAQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          rockSnowLarge2: KG("rockSnowLarge2", {
            x: 36,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BgACHAHVDAHdDBwAAR0BHAEdHQABHQHVDAHdDB0AAd0MAR0fAAH6Cf4GAAUcAR0GAATdDAcAAR0CHAYABRwB3QwRAAHdDAIcBgAFHBMAAhwGAAUcEwACHAYAAR0EHBMAAdUMARwGAAIdAhwBHRMAAdUMARwGAAHdDAHVDAIcAR0TAAHdDAEdBwAB3QwBHQEcAd0MFAAB1QwIAAHVDAEcFQAB3QwIAAHdDAEdHwAB1QwfAAHdDJwFAAEdBRwEAAccAd0MBAAB3QwDHAYAAR0FHAQAAR0GHAYAAxwGAAHdDAUcBAABHQYcBgADHAcABRwEAAHdDAUcAR0GAAMcBwAEHAEdBQADHAEdARwB1QwGAAHVDAIcBwAEHAEdBQABHQEcAh0BHAHdDAYAAdUMAhwHAAQcAd0MBQADHQHdDAEdBwAB3QwCHAcAAR0DHAYAAfoJAR0B3QwBAAEdCAACHAcAAR0DHAcAAd0MAgAB+gkIAAIcBwAB+gkBHQEcAR0TAAEdARwIAAMdEwAB1QwBHQgAAd0MAR0B3QwTAAHdDAEdCQAB3QwVAAHdDOYEAAHdDAUcAwAIHAHdDAQAAd0MAxwHAAUcAwAB1QwHHAYAAxwHAAUcAwABHQccBgADHAcABRwDAAHdDAccBgADHAcABRwEAAccBgADHAcABRwEAAccBgADHAcAAdUMAxwBHQQABhwBHQYAAR0CHAcAAR0DHAHVDAQAAR0DHAMdBgABHQIcBwAB3QwDHAHdDAQAAR0DHAIdAd0MBgAB3QwCHAgAAxwFAAHdDAMcAt0MCAACHAgAAdUMARwBHQYAAxwKAAEdARwIAAEdARwBHQYAAxwKAAEdARwIAAHdDAEdAd0MBgADHAoAAd0MAR0JAAHVDAcAAxwLAAEdCQAB+gkHAAMcCwAB3QwRAAMcCwAB3gwRAAMcCwAB3gwRAAIcAR0LAAHeDBEAARwCHR0AARwBHQH6CR0AAR0B3QweAAEdHwAB+gmvAgAB3QwFAAUcAwAIHAHdDAUAAxwHAAUcAwAIHAYAAxwHAAUcAwAIHAYAAxwHAAUcAwAHHAEdBgADHAcAAR0DHAEdAwAHHAEdBgABHQIcBwABHQMcAR0DAAHVDAUcAR0B3QwGAAEdAhwHAAHdDAMcAd0MAwABHQUcAR0HAAHdDAIcCAADHAQAAd0MBRwB3QwIAAIcCAADHAUABRwJAAIcCAABHQEcAR0FAAUcCQABHQEcCAACHQHVDAUABRwJAAIdCAAB3QwBHQHdDAUAAR0BHAEtAhwJAAHdDAEdCQAB3QwGAAEdARwBLQIcCgAB3QwQAAHdDAEcAS0CHBwAAxwBHRwAAxwBHRwAARwBHQHVDAHdDBwAAx0dAAHVDALdDB0AAd0MjgMAAR0BHAEdAd0MAwABHQMcAR0BAALdDAccAd0MBgABHQIcAdUMARwB1QwEAAHdDAMcAd0MAwAHHAcAAd0MAhwB3QwBHQHdDAUAAxwEAAccCAACHAEAAR0GAAMcBAAHHAgAAhwBAAH6CQYAAdUMARwBHQQABxwIAAEdARwIAAEdARwBHQQABxwIAAEdARwIAAHdDAEdAd0MBAABHQUcAR0IAAHdDAHVDAkAAR0FAAEdBRwBHQkAAR0JAAHdDAUAAd0MBRwB3QwJAAHdDBAABRwbAAUcGwAFHBsAAR0DHAHVDBsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAHVDAEcAdUMHQAC1QwBHR0AAd0MAR0B3QweAAHdDI0DAAUcAR0DAAHdDAEAAd0MAR0BHAEdBxwCAAH6CQEAAd0MBAAB+gkFHAHdDAYAAh0B1QwHHAoAAR0EHAcAAd0MAdUMAd0MBxwKAAEdBBwIAAHdDAEABxwKAAHdDAEcAR0BHAEdCgAHHAsAAh0BHAHVDAoAAR0FHAHVDAsAAR0B3QwBHQH6CQoAAR0FHAHVDAsAAd0MAQAB1QwLAAHdDAUcAd0MDQAB3QwMAAUcGwAFHBsABRwbAAHVDAMcAR0bAAEdAxwB1QwbAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAR0B+gkeAAHdDK0DAAEdBRwDAA0cAgAB3QwB1QwBHAEdBAABHQUcAwAFHAIdBRwBHQMAAdUMARwB1QwEAAH6CQUcAwAFHAIdBRwB1QwDAAHdDAEdAd0MBQAFHAMAAR0DHAEdAt0MBRwB3QwEAAEdBgABHQMcAR0DAAEdAxwBHQIABRwFAAHdDAYAAdUMAxwB1QwDAAHdDAMcAd0MAgAFHAwAAd0MAxwB3QwEAAMcAwAFHA0AAxwFAAMcAwAB1QwDHAEdDQADHAUAAxwDAAEdAxwBHQ0AAR0BHAEdBQADHAMAAd0MAxwB3QwNAAEdARwBHQUAAR0CHAQA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GgABHQUcGgAB3QwB1QwDHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAdUMAd0MHgAB3QxyAAHdDAEdAd0MAwAB+gkMHAHdDAEAAfoJAd0MBAABHAUAAR0FAAEdCxwIAAEcBQAB3QwFAAEdCxwIAAEcCwAB3QwLHAgAARwMAAscCAABHAwAAR0JHAEdCAABHAwAAdUMCRwB1QwIAAEcDAAB3QwJHAHdDAgAARwNAAkcCQABHA0ACRwJAAEdDQAJHAkAAR0NAAkcCQAB3QwNAAkcFwAJHBcAAR0HHAHVDBcAAdUMBxwBHRcAAd0MBxwB3QwYAAccGQAHHBkABxwZAAccGQABHQUcAdUMGQAB1QwFHAHVDBkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAEdBBwbAAIdAxwbAAHdDAEdAdUMAhwbAAHeDAHdDAMdHQAB3QwCHRAABRwCAAHdDAwcAR0GAAEcBAAB1QwDHAEdAwAMHAEdBgABHAQAAdUMAxwBHQMACxwBHQHdDAYAARwEAAHdDAMcAd0MAwALHAEdBwABHAUAAxwEAAscAd0MBwABHAUAAR0BHAEdBAALHAgAARwFAAMdBAALHAgAARwFAAHdDAHVDAHdDAQACxwIAAEcBgAB3QwFAAEdCRwBHQgAARwMAAEdCRwBHQgAARwMAAHdDAkcAd0MCAABHQ0ACRwJAAEdDQAJHAkAAd0MDQAJHBcACRwXAAkcFwAJHBcAAR0HHAEdFwABHQccAR0XAAHdDAccAd0MGAAHHBkABxwZAAccGQAHHBkABxwZAAEdBhwZAAEdBhwZAAHdDAYcGgAGHBoABhwaAAEdAxwBHQEcGgAB1QwDHAEdAdUMDgAHHAEAAd0MDRwB3QwDAAH6CQHdDAEcAwABHQUcAR0CAA0cBgABHAMAAR0FHAEdAgAMHAHVDAYAARwDAAHdDAUcAd0MAgAMHAHVDAYAARwEAAUcAwALHAEdAd0MBgABHAQABRwDAAscAdUMBwABHAQABRwDAAscAd0MBwABHAQAAR0DHAHVDAMACxwIAAEcBAAB1QwDHAEdAwALHAgAARwEAAHdDAMcAd0MAwABHQkcAR0IAAEdBQADHAQAAR0JHAEdCAAB1QwFAAEdARwBHQQAAd0MCRwB3QwIAAHdDAUAAR0B1QwBHQUA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AR0EAAEdBRwQAAUcAR0EAAHdDAEdBBwQAAEdBBwB3QwFAAEdBBwQAAHVDAMcAR0GAAHdDAQcEAAB3QwDHAHVDAcABBwRAAMcAd0MBwAEHBEAAhwBHQgAAR0CHAEdEQADHQgAAR0CHAEdEQAB1QwBHQH6CQgAAd0MARwB1QwB3QwRAAHdDAH6CQoAAdUMAR0eAAEdAd0MHgAB3Qz7AgABHQccBQAB3QwB1QwB3QwGAAccAgABHAHdDAccBgAB3QwHAAHVDAUcAR0CAAEdAQAHHA4AAR0FHAEdAgABHQEABxwOAAHdDAUcAfoJAgAB3QwBAAccDwAFHAUABxwPAAUcBQAHHA8ABRwFAAccDwABHQQcBQAHHA8AAdUMBBwFAAHVDAUcAR0PAAHdDAQcBQABHQUcAR0QAAEdAxwFAAHdDAUcAd0MEAACHQHVDAEcBgAFHBEAAd0MAh0BHAYABRwSAALdDAHVDAYABRwUAAEdBgAB1QwEHBQAAd0MBgABHQQcGwAB3QwEHBwAAxwB1QwcAAMcAR0cAAMcAd0MHAAB1QwCHB0AAdUMAhwdAAHdDAEcAR0eAAIdHgABHQHdDB4AAd0MuwEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("kYABAAHeDAHdDAH6CfsHAAHdDAIcAR0B3QwBHRsAAR0BHAEdAQAB3QwbAAEdARwB3QwBAAHeDBsAAfoJAR0CAAHeDBwAAR0CAAHeDBwAAd0MHwAB3gy9BgABHQEcAfoJARwB1QwBHRoAAd0MARwBLQEcAt0MGwAB1QwBLQEdHQABHQEtAR0dAAHdDAEtAd0MHgABLR8AAR0fAAHdDJ0GAAHdDAIcAdUMAd0MHAAB1QwBHAH6CQHeDBwAAR0BHB4AAd0MARwfAAHVDB8AAR0fAAH6Cb0GAAEcAd0MAR0B3QwcAAEdAQAB3QwdAAEdAQAB3gwdAAHdDB8AAd4MHwAB3gwfAAHeDLBeAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AR0HHA8ABRwB3QwDAAEdBxwPAAEdAxwBHQQAAd0MBxwPAAHVDAMcAR0FAAccDwAB+gkDHAHdDAUABxwQAAMcBgAHHBAAAR0CHAYABxwQAALVDAEcBgAHHBAAAd0MAR0BHAYABxwRAAHdDAEdBgABHQYcEgABHQYAAR0FHAEdEgAB3QwGAAHdDAUcAdUMGgAFHAHdDBoABRwbAAUcGwAFHBsABRwbAAEdBBwbAAEdAxwBHRsAAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAEdAhwdAAEdARwBHR0AAd0MARwBHR4AAR0B3QweAAEdAd4MHgAB3QwB3gwfAAHeDDoAAR0HHBgAAd0MBxwZAAccGQAHHBkABxwZAAccGQAHHBkABxwZAAccGQABHQUcAR0ZAAEdBRwB1QwZAAHdDAUcAd0MGgAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAdUMARwBHR0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDJsBAAHdDAccGQAHHBkABxwZAAEdBRwBHRkAAR0FHAEdGQAB3QwFHAHdDBoABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAEdARwBHR0AAx0dAAHdDAHVDAHdDB4AAd0M/QIABRwB3QwaAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAMcHQADHB0AAdUMAhwdAAEdAhwdAAHdDAIcHgACHB4AAhweAAHVDAEdHgAB1QwBHR4AAt0M2uMBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("AhwBHQHdDBwAAhwB1QwdAAIcAd0MHQACHB4AAhweAAIdHgAC1QweAAHdDAH6CZ8GAALdDP33AQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          rockSnowLarge3: KG("rockSnowLarge3", {
            x: 38,
            y: 40,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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AR0ZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAh0DHBsAAh0DHBsAAt0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MjAEAAd0MChwBHQHVDAwcCAABHQHVDAEdBBwCHQHVDAIdDBwIAAMdAdUMARwEHQHVDALdDAwcCAAD3QwBHQHVDAIdA90MAgAMHAsAAd0MAR0C3QwFAAscAdUMDAAB3QwHAAEdChwBHRQAAdUMChwB3QwUAAHdDAocFgAKHBYACRwBHRYACRwBHRYACRwB3QwWAAHVDAgcFwABHQgcFwAB3QwIHBgACBwYAAccAdUMGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAdUMBBwB1QwaAAEdBBwB1QwaAAHdDAEdAxwB3QwbAAEdAxwcAAHdDAIcAdUMHQABHQEcAR0dAAEdAdUMAd0MHQAB3QwBHQ8AAR0HHAIdDBwKAAHVDAEdBhwCHQwcCgAB3QwBHQYcAt0MDBwLAAHdDAUcAR0CAAwcDAAEHAIdAgAMHAwAAhwBHQHVDAEdAd0MAgABHQscDAAEHQHdDAMAAR0KHAEdDAABHQHVDALdDAQAAd0MChwBHQwAAt0MBwAKHAHdDBUACRwBHRYACRwBHRYACRwB3QwWAAkcFwABHQgcFwABHQgcFwAB3QwIHBgACBwYAAgcGAAHHAEdGAAHHAHVDBgAAR0GHAHdDBgAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAR0EHAEdGgABHQQcAR0aAAHdDAQcAd0MGwABHQMcHAABHQMcHAAB3QwCHAEdHQABHQEcAR0OAAEdBxwCHQwcCgAB3QwHHALdDAwcCwAHHAIADBwLAAccAgAMHAsAAR0FHAEdAgAMHAsAAR0EHAIdAgAB1QwLHAsAAd0MAdUMAR0BHAIdAd0MAgAB1QwKHAHVDAwABB0B3QwDAAHdDAocAR0MAALdDAEdAd0MBQAKHAHdDA4AAd0MBgAKHBYAChwWAAkcAR0WAAEdCBwBHRYAAR0IHAHdDBYAAd0MCBwYAAgcGAAIHBgACBwYAAgcGAABHQccGAABHQYcAR0YAAHdDAYcAdUMGQAGHAHdDBkAAR0FHBoAAR0EHAEdGgAB3QwEHAEdGwAEHAHdDBsAAR0DHBwAAR0DHBwAAd0MAR0BHAHVDB0AAR0BHAHVDB0AAd0MAR0B3QwNAAIdBxwCHQwcCQAB3QwBHQccAt0MDBwKAAHdDAccAgAMHAsABxwCAAEdCxwLAAEdBhwCAAHVDAscCwABHQUcAR0CAAHdDAscCwAB3QwB1QwDHALVDAMAChwBHQwAAh0CHAEdAd0MAwAKHAEdDAAB3QwBHQEcAR0B3QwEAAocAd0MDQAB3QwBHAEdBQAKHA8AARwB3QwFAAEdCBwBHQ8AAdUMBgABHQgcAR0PAAEdBgAB3QwIHAHdDA8AAd0MBwAIHBgACBwYAAHVDAccGAABHQccGAAB3QwHHBkABhwBHRkABhwB1QwZAAYcAd0MGQABHQUcGgAB1QwEHAEdGgAB3QwBHQMcAR0bAAEdAxwB3QwbAAHdDAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAR0B3QweAAHVDB8AAd0MLQACHQgcAR0B1QwMHAgAAd0MAh0HHALdDAwcCQAB3QwBHQccAgAB1QwLHAoAAd0MBxwCAAEdCxwLAAccAgAB3QwKHAEdCwABHQUcAdUMAwAKHAEdCwABHQUcAR0DAAHVDAkcAd0MCwAB3QwB1QwDHAEdAd0MAwAB1QwJHA0AAR0DHAEdBAAB3QwJHA0AAd0MAxwB3QwFAAgcAdUMDgADHAYACBwBHQ4AAdUMARwBHQYAAR0HHAHdDA4AAh0B1QwGAAEdBxwPAAHdDAEdAd0MBgAB3QwHHBAAAd0MCAAHHBkABxwZAAEdBhwZAAEdBRwB1QwZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAR0EHBsAAh0CHAEdGwAB3QwB1QwCHAEdHAAB3QwCHQHdDB0AAh0eAALdDKcBAAHVDA4cAh0LHAHVDAMAAd0MDhwC3QwLHAHdDAQABRwC1QwGHAHVDAIAAdUMChwFAAEdBBwBHQHVDAYcAR0CAAHVDAEdCRwFAAHVDAMcAR0C3QwGHAHdDAIAAd0MAdUMCRwFAAHdDAEdAhwB1QwCAAYcBAAB3QwJHAYAAdUMAR0B1QwB3QwCAAEdBBwBHQUACBwBHQYAAd0MAdUMAR0DAAEdBBwBHQUACBwBHQcAAt0MAwAB3QwBHQMcAd0MBQABHQccAd0MDQABHQMcBgAB1QwGHAEdDgAB3QwBHQEcAR0GAAHdDAYcAdUMDwAC1QwBHQcAAdUMBRwB3QwPAAHdDAEd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CxwB3QwMAAEdAxwBHQMACxwNAAHdDAEdARwB1QwB3QwDAAscDgAB1QwCHQQACxwOAAHdDAHVDAHdDAQACxwPAAHdDAUACxwVAAscFQABHQkcAR0VAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwAJHBcAAdUMCBwXAAEdCBwXAAHdDAgcGAAHHAEdGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBRwBHRoABRwBHRoAAR0EHAHdDBYADRwBAAccAx0GHAEdAQANHAEAAR0GHAPdDAYcAR0BAA0cAQAB1QwBHQQcAR0DAAYcAd0MAQANHAEAAd0MAdUMBBwB1QwDAAYcAgANHAIAAd0MBBwB3QwDAAYcAgANHAMABBwEAAEdBRwCAAEdCxwBHQMAAxwBHQQAAR0FHAIAAR0LHAEdAwADHAEdBAAB3QwFHAIAAd0MCxwB3QwDAAEdARwBHQHdDAUABRwDAAscBAADHQYAAR0DHAEdAwALHAQAAd0MAR0B3QwGAAHVDAMcAR0DAAscBQAB3QwHAAHdDAEdARwBHQHdDAMACxwOAAHVDAIdBAALHA4AAd0MAR0B3QwEAAscDwAB3QwFAAEdCRwB1QwVAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwABHQgcFwABHQccAdUMFwAB3QwHHAEdGAABHQYcAd0MGAACHQUcGQAB3QwBHQUcGgAB3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwXAA0cAQAHHAMdBhwBHQEADBwB1QwBAAEdBhwD3QwGHAHdDAEADBwBHQEAAR0GHAMABhwCAAEdCxwB3QwBAAHdDAUcAR0DAAYcAgABHQscAwAFHAEdAwABHQUcAgAB3QwLHAMABRwB3QwDAAEdBRwDAAscAwAFHAQAAd0MBRwDAAscAwAFHAUABRwDAAscAwABHQIcAh0FAAEdAxwB1QwDAAscAwABHQIcAdUMAR0FAAEdAxwB1QwDAAscAwAB3QwBHQHVDALdDAUAAd0MAR0BHAHVDAHdDAMAChwBHQQAAR0B1QwIAAMdBAAKHAEdBAAC3QwIAAHdDAEdAd0MBAAB1QwJHAHdDA8AAd0MBQABHQkcFgAB3QwJHBcACRwXAAkcFwABHQccAR0XAAHVDAccAdUMFwAB3QwHHAHdDBgABhwBHRkAAx0DHAEdGQADHQMcAd0MGQAD3QwDHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAR0BHB4AAh0YAAEdCxwDHQYcAR0B3QwBAAYcAgAB3QwLHALdDAEdBhwB3QwBAAHdDAYcAwALHAIAAd0MBhwDAAEdBRwDAAscAwAGHAMAAdUMBRwDAAscAwAFHAEdAwAB3QwFHAMAAR0KHAMABRwBHQQABBwBHQMAAR0KHAMABRwB3QwEAAEdAxwBHQMAAd0MChwDAAQcAR0FAAEdAxwB3QwEAAocAwAEHAEdBQAB3QwBHQEcAdUMBQAJHAEdAwABHQIcAR0B3QwGAAMdBQAJHAHVDAMAAR0B1QwBHAHVDAcAAd0MAR0B3QwFAAkcAd0MAwAB3QwBHQEcAd0MCAAB3QwGAAgcAR0FAAHdDAHVDBAACBwB1QwGAAEdEAAIHAHdDAYAAd0MEAAIHBgAAdUMBxwYAAEdBxwYAAHdDAYcAR0ZAAEdBRwB1QwZAAMdAxwB3QwZAAHdDAIdAhwBHRsAAt0MAhwBHR0AAdUMAR0B3QwdAAIdHgAC3QzZAQALHAEAAd0MAR0HHAMABBwEAAEdCRwBHQIAAd0MBxwDAAQcBAABHQkcAR0DAAEdBhwDAAEdAxwEAAHdDAkcAd0MAwABHQQcAR0BHAMAAR0DHAUACRwEAAHdDAQcAR0B3QwDAAIdARwBHQUACRwFAAQcAd0MBAAEHQUACRwFAAQcBQABHQHdDAHVDAHdDAUAAR0IHAUAAxwBHQUAAd0MAQAB3QwGAAEdCBwFAAIcAh0OAAHdDAgcBQACHAHVDAHdDA8ABxwBHQUAAhwB3QwQAAccAdUMBQABHAEdEQAB1QwFHAEdAd0MBQABHAEdEQABHQUcAR0GAAEdAd0MEQAB3QwFHAHdDAYAAR0TAAUcBwAB3QwTAAUcGwAFHBsAAh0CHAEdGwACHQIcAR0bAALdDAIcAd0MHQABHQEcHgAB1QwBHR4AAd0MAdUMHwAB3Qz6AQAB1QwIHAMAAd0MAR0JHAEAAx0FAAEdCBwEAAEdCRwBAAPdDAUAAd0MCBwEAAHdDAHVDAIcAR0B3QwEHAoABxwBHQUAAR0CHAHdDAEABBwKAAccAdUMBQAB3QwCHAIABBwKAAccAd0MBgACHAIABBwKAAccBwACHAIABBwKAAccBwAB1QwBHQIABBwKAAccBwAB1QwBHQIABBwKAAEdBRwBHQcAAt0MAgAEHAoAAR0FHAEdCwABHQMcCgAB3QwCHQMcAd0MCwABHQMcCwAB1QwBHQMcDAAB3QwDHAsAAt0MAhwBHQ0AAxwNAAIcAdUMDQADHA0AARwBHQHdDA0AAxwNAAIdDgADHA0AAR0B3QwOAAMcDQAB3QwPAAMcHQACHAEdHQABHQEcAR0dAALVDAHdDB0AAd0MAR0fAAHdDIgCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gHAAARwfAAHVDB8AAR0fAAHdDJ8HAAEcHwABHB8AAdUMHwABHR8AAd0M/wYAARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wYAARwfAAEcHwABHR8AAdUMHwAB3Qz/BgABHR8AAR0fAAHdDL9vAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("mngAAd0M/gcAAh0B3QwdAAHdDAEdHwAB3Qy/BwAB1QwfAAHdDMo3AAMcAd0MHAABHQEcAR0dAAHVDAIdHQAB3QwBHQHdDB4AAd0M/QYAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAABHQEcAR0dAAIdAdUMHQAB3QwBHQHdDB4AAd0MvQYAAR0EHBsAAd0MAxwBHRwAAxwBHRwAAxwB3QwcAAHVDAEcAR0dAAMdHQAB3QwBHQHdDB4AAd0MngYAAxwB1QwcAAEdAhwBHRwAAR0CHAHdDBwAAd0MARwBHR4AAh0eAAEdAd0MHgAB3Qy/BgAB3QwB1QwfAAHdDNgfAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AwABHQUcAR0EAAHdDAIdAdUMAx0EHAoAAd0MBRwB3QwFAALdDAQdBBwLAAHVDAQcCAAE3QwEHAsAAR0DHAHVDAwABBwLAAHdDAQdDAAEHAwAAdUMAh0B3QwMAAQcDAAD3QwNAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwB1QwdAAHVDAEcAd0MHQACHR4AAd0MAR0fAAHdDLYBAAHdDAUcAR0EHBYABRwB1QwEHBYAAR0DHAEdAd0MBBwWAAEdAxwBHQEABBwWAAHdDAMcAd0MAQAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAhwBHQIAAR0DHBcAAR0BHAHVDAIAAR0DHBcAAdUMARwB3QwCAAHdDAMcFwAB3QwBHQQAAxwYAAEdBAADHBgAAd0MBAADHB0AAhwB1QwdAAIcAR0dAAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AAR0fAAEdHwAB3Qz2AQABHQUcAR0EHBUAAd0MBRwB3QwEHBYABRwBAAQcFgAFHAEAAR0DHBYABRwBAAEdAxwWAAUcAQAB3QwDHBYABRwCAAMcFgAFHAIAAxwWAAUcAgACHAEdFgAEHAHVDAIAAhwBHRYABBwBHQIAARwBHQHdDBYABBwB3QwCAAIdFwAEHAMAAR0B3QwXAAQcAwAB3QwYAAEdAxwcAAHVDAMcHAAB3QwDHB0AAxwdAAMcHQADHB0AAR0CHB0AAR0BHAEdHQAB3QwBHAEdHgABHQHdDB4AAR0fAAHdDNsBAAHdDAEdBRwEHQEcFQAB3QwFHATdDBcABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwcAAQcHAAEHBwABBwcAAEdAxwcAAEdAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAR0BHAHVDB0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDHsAAd0MAR0FHAMdAd0MFgAB3QwFHAPdDBgABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsABBwcAAQcHAAEHBwABBwcAAQcHAAB1QwDHBwAAR0DHBwAAd0MAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHQABHQEcAdUMHQAB3QwBHAEdHgAB1QwB3QweAAEdHwAB3QybAQAC3QwFHAHVDAHdDBkABRwB3QwaAAEdAxwB1QwbAAEdAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAR0BHAHVDB0AAR0B1QwB3QwdAAHdDAEdHwAB3Qyu1AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }])
        };

        function dG(GG, bG, ZG) {
          const wG = new VG.c;
          for (const LG of ZG) {
            const GG = wG.get(LG.chunkX, LG.chunkY, LG.chunkZ);
            if (!(0, SG.L)(GG)) throw new Error(`Duplicate chunk at ${LG.chunkX}, ${LG.chunkY}, ${LG.chunkZ}`);
            wG.set(LG.chunkX, LG.chunkY, LG.chunkZ, LG.rle)
          }
          return new YG.c(GG, {
            x: 0,
            y: 0,
            z: 0
          }, bG, wG)
        }
        const JG = {
          ruinSnowLarge1: dG("ruinSnowLarge1", {
            x: 37,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gBAAAd0M/wcAAR0B3QweAAEdHwAB+gm/BwABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAdUMAd0MHAACHAEdHQAB1QwBHQHdDB0AAh0eAALdDP4GAAMcAR0cAAIcAh0cAAIcAR0B3QwcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0M/wQAASIfAAEiHwABIh8AASIfAAEiHwABIh8ABBwBHRsABBwB3QwbAAMcAR0cAAIcAh0cAAIcAR0B+gkcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0MnwQAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIeAAQcAR0bAAQcAdUMGwAEHAHdDBsAAxwBHRwAAhwCHRwAAhwB1QwB3QwcAAEcAR0B3QwdAAIdHgABHQHdDB4AAd0MvwMAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4ABRwB3QwaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAhwCHRwAAhwBHQHVDBwAAtUMAt0MHAACHR4AAt0M/gIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAyIeAAIiHgACIh4AASIB3QweAAEiHgAFHAEdGgAFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAAEHRwAAR0B1QwBHQHdDBwAA90M/QIAASIfAAIiHgACIh4AAiIeAAMiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAGHBoABhwaAAUcAR0aAAUcAR0aAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAABHAMdHAABHAEdAdUMAd0MHAAB1QwC3QwdAAEdHwAB3QyfAQABIh8AASIfAAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIfAAEiHwABIh8AASIeAAIiHQAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAEHAEdAd0MGgAEHAEdGwADHAEdAd0MGwADHAEdHAABHAHVDAEdAd0MHAABHAIdHQABHQLdDB0AAR0fAAHdDH8AASIfAAIiHgACIh4AAiIeAAIiHgADIh4AAiIeAAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAEHAHVDAH6CRoABBwBHRsAAxwBHQHdDBsAAhwC1QwcAAEcAh0B3QwcAAIdAd0MHQABHQHdDB4AAd0MfwABIh8AAiIeAAIiHgACIh4AAyIdAAHdDAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwB1QwaAAUcAfoJGgAEHAEdGwADHAIdGwADHAEdAfoJGwACHAEdAd0MHAABHAIdHQABHAHVDAHdDB0AAR0B3QweAAEdHwAB3QxfAAIiHgADIh0AAyIdAAMiHQAB3QwCIh4AAd0MAiIeAAIiHgACIh4AAiIeAAIiHgACIh8AASIfAAHdDDwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAFHAHdDBoABBwBHRsABBwBHRsAAxwBHQH6CRsAAxwBHRwAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAHVDAHdDB4AAd0MPwACIh4AAyIdAAMiHQADIh0AAd0MAyIdAAHdDAIiHgACIh4AAd0MASIfAAEiHwABIh8AAd0MfAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAACHAHVDAHdDBwAAhwBHR0AASIBHAHdDB0AASIBHB4AAiIeAAIiHgADIh0AAyIdAAEiAd0MAiIcAALdDAIiHgACIh4AAiIeAAHdDAEiHwABIh8AASIfAAHdDJwBAAYcGgAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAFHAHdDBoABRwbAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAASIBHAHVDAHdDBwAAiIBHR0AAiIB3QwdAAIiHgACIh4AAyIdAAQiHAAEIhwAAt0MAiIeAAIiHgAB3QwBIh8AASIfAAEiHwABIh8AAd0MnAEABhwaAAYcGgAGHBoABhwaAAUcAdUMGgAFHAEdGgAFHAHdDBoABBwBHRsABBwBHRsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAABIgEcAR0dAAIiAR0dAAIiAd0MHQABHAEiHgABHAIiHQABHAIiHQABHQMiHAABHQMiHAAB3QwDIh0AAt0MASIfAAEiHwABIh8AASIfAAIiHgAC3QybAQAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAH6CRwAAhwBHR0AASIBHAHVDB0AAiIB3QwdAAIiHgADIh0AAyIdAAMiHQAEIhwAAd0MAyIdAALdDAEiHwABIh8AASIfAAEiHwACIh4AAiIeAAEiAd0MHgAB3QxcAAYcGgAGHBoABRwBHRoABRwBHRoABRwB+gkaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAAxwB3QwcAAIcAR0dAAIcAR0dAAEiARwB3QwdAAIiHgACIh4AAiIeAAMiHQADIh0AAyIdAAQiHAAC3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AASIB3QweAAHdDDwABhwaAAUcAR0aAAUcAR0aAAUcAd0MGgAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAADHAEdHAADHAHVDBwAAxwB3QwcAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAEiARweAAIiHgACIh4AAiIeAAMiHQADIh0ABCIcAAHdDAMiHQAB3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AAiIeAAEiAd0MGwAFHAEdGgAFHAHVDBoABRwB3QwaAAQcAdUMGwAEHAHVDBsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAADHB0AAxwdAAIcAR0dAAIcAR0dAAEcAR0B+gkdAAEcAR0eAAEcAd0MHgABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQAEIhwABCIdAAMiHgACIh4AAiIfAAEiHwABIh8AAiIeAAEiAd0MHgABIhwABRwBHRoABRwB1QwaAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAADHAHdDBwAAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AARwBHR4AARwBHR4AARwB3QweAAEiHwABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQADIh0AASIBAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAR0cAAMcAd0MHAACHAHVDB0AAhwB1QwdAAIcAd0MHQACHB4AAhweAAEcAR0eAAEcAR0eAAHVDAHdDB4AAR0fAAHdDD8AASIfAAEiHwACIh4AAyIdAAMiHQADIh0AAyIeAAIiHwACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAEHAEdGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAHdDBwAAhwB1QwdAAIcAR0dAAIcAfoJHQABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHR8AAdUMHwAB3Qx/AAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAEHAEdGwAEHAH6CRsAAxwB1QwcAAMcAR0cAAIcAR0B3QwcAAIcAR0dAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0M3wEAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIfAAEiHwACIh4AAiIeAAIiHQADIh0ABBwBHRsAAxwBHQHdDBsAAhwCHRwAAhwB1QwB3QwcAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgADHAEdHAACHAIdHAACHAEdAd0MHAABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDL8DAAEiHwABIh8AASIfAAEiHwABIh8AASIfAAEiHwABIh8AAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AARwBHR4AARwB3QweAAEdHwABHR8AAd0MnwYAAhwB3QwdAAEcAR0eAAEcAR0eAAEdAd0MHgAB1QwfAAHdDN8GAAEcAd0MHgAB1QwfAAEdHwAB+gmfBwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("DgAC3QwJIgLdDBUACd0M0wcAAd0MDyIB3QwQAA8iEQAC3QwLIgLdDBMAC90MoAcABCIPABAiAd0MDwAPIgHdDBAAA90MCSID3QwUAAciAt0MFwAH3QzRBgACIhIAAyIJAAHdDAIiEAADIgHdDAoAAd0MAyILAAUiAd0MDAAB3QwRIgHdDA4AAt0MBiID3QwEIgLdDBEADd0MzQYAAd0MAiITAAIiCQADIhEAAyIJAAHdDAMiDwADIgHdDAoAAd0MBiICAAsiAd0MDAAC3QwBIgPdDAIiB90MAiIC3QwPAAXdDAEiCd0MEwAL3QyuBgACIhUAAiIHAAMiEwADIgcAAd0MAyIRAAMiAd0MCAAB3QwHIgcAByIB3QwKAAHdDAIiBN0MByIF3QwBIgHdDAwAB90MASIL3QwPAA/dDKsGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAHdDAYiCwAGIgHdDAgAAd0MAyIC3QwLIgTdDAEiAd0MCgAC3QwBIgXdDAEiDN0MDQAR3QwVAAXdDI8GAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwCIhUAAiIHAAQiEAAFIgcAAd0MByIJAAMiAt0MAiIB3QwIAALdDAIiA90MCSIH3QwLABPdDBEAC90MjAYAAiIeAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwDIhIABCIHAAHdDAYiCwADIgHdDAIiAd0MCAAB3QwCIgPdDAsiBN0MASIB3QwKABXdDA8ADd0MiwYAAiIeAAIiHgAB3QwCIhcAASIGAAUiEgADIgYAAd0MASID3QwBIg8ABSIHAAXdDAMiCQADIgLdDAEiAt0MCQAG3QwJIgbdDA4AD90MiQYAAiIeAAHdDAIiHgADIhcAASIFAAHdDAQiEwADIgYABN0MAiIPAAIiAt0MASIHAAXdDAIiCwACIgXdDAgABt0MCyIG3QwMABHdDIgGAAIiHgADIh0AAd0MAiIeAAQiFQACIgUAAd0MASIC3QwCIhEAAiIC3QwGAAXdDAIiDQACIgTdDAcABt0MBCIFAAQiBt0MCwAG3QwFAAbdDIcGAAMiHQAB3QwCIh4AAyIdAAHdDAQiFQACIgUAAd0MASIC3QwBIhMAASIC3QwGAATdDAIiDwACIgPdDAcABd0MBCIHAAQiBd0MCAAI3QwHAAXdDIcGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGAABIgUAAd0MBCITAAIiAd0MBgAE3QwCIg8AAiID3QwHAAXdDAMiCQADIgXdDAgAB90MCQAF3QyGBgACIh4AAiIeAAHdDAIiHgADIhgAASIEAAHdDAUiEwADIgUAAd0MAyIB3QwCIg8AAiID3QwGAALdDAEiA90MAiILAAIiBd0MCAAG3QwLAAXdDIUGAAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAEiHwACIh4AAyIdAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAHdDAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MBCIVAAIiBQAB3QwCIgHdDAIiEQACIgLdDAYABd0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAIiHgACIh4AAyIdAAHdDAIiGQABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAIiEQACIgLdDAYABd0MAyILAAMiBN0MBwAH3QwLAAXdDIUGAAIiHgACIh4AAd0MAiIeAAMiGAABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAMiDwADIgLdDAYABt0MAiILAAIiBd0MBwAH3QwLAAXdDIUGAAIiHgAB3QwCIh4AAiIeAAMiGAABIgQAAd0MBSITAAIiAd0MBQAB3QwBIgPdDAIiDwACIgPdDAYABt0MAyIJAAMiBd0MCgAF3QwJAAXdDIcGAAIiHgACIh4AAyIdAAHdDAMiFgACIgUAAd0MBSIRAAIiAt0MBgAB3QwBIgPdDAIiDQACIgTdDAcABt0MDSIG3QwKABPdDIcGAAHdDAIiHgACIh4AAyIXAAEiBQAB3QwCIhUAAyIGAAHdDAUiDwACIgLdDAEiBwAB3QwBIgPdDAMiCQADIgXdDAgAB90MCSIH3QwMABHdDIkGAAMiFwABIgUAAyIXAAEiBQAB3QwDIhUAAiIGAAHdDAIiEwAEIgcAByIMAAIiA90MASIHAAHdDAEiBd0MDCIG3QwIABfdDKcGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAQiDwAGIgcAAd0MCyICAAUiBt0MCAAB3QwBIgndDAIiA90MAiIF3QwKABXdDKkGAAMiEwADIgcABCIRAAQiBwAB3QwEIg8ABCIB3QwIAAoiAwAKIgkAAt0MAiIF3QwKIgTdDAsAAd0MASIF3QwJIgPdDA4AEd0MrAYABiILAAYiCQAB3QwIIgUACCIB3QwKABUiCwAB3QwTIgHdDAwAAt0MASID3QwLIgLdDA8AD90M0AYAESIB3QwOABEiDwAC3QwNIgLdDBEAAd0MCyIB3QwUAAvdDOcGAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gDAAASIfAAHdDN8HAAEiAd0MHgABIh8AAd0MvwcAAiIeAAEiAd0MHgABIh8AAd0MnwcAAiIeAAIiHgABIgHdDB4AASIfAAHdDIAHAAIiHQACIgHdDB0AAiIeAAEiAd0MHgAB3QyABwACIh0AAyIdAAIiAd0MHQACIh4AASIB3QweAAHdDOAGAAIiAd0MHQACIh0AAyIdAAIiAd0MHQABIgHdDB4AAd0M4QYAASIB3QwdAAIiHgACIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh8AASIeAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh4AAiIdAAMiHQACIgHdDB0AAt0MHgAB3QyABwACIh0AAyIdAAHdDAEiAd0MHQAC3QweAAHdDIAHAAIiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAASIfAAEiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAAiIeAAEiAd0MHAADIh0AA90MHQAC3QweAAHdDOEGAAIiHgACIhwAAyIB3QwcAAPdDB0AAt0MHgAB3QzCBgABIh4AAiIeAAIiHAADIgHdDBwAA90MHQAC3QweAAHdDMEGAAIiHgACIh0AAyIcAAMiAd0MHAAB3QwBIgHdDB0AAt0MHgAB3QzBBgACIh4AAiIdAAIiAd0MHAADIh0AAiIB3QwdAAEiAd0MHgAB3QzBBgACIh0AAiIB3QwdAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzABgACIh4AAiIdAAMiHQACIgHdDB0AASIB3QweAAHdDN8GAAIiAd0MHQACIh4AAiIeAAEiAd0MHgAB3Qz/BgACIh4AAiIeAAEiAd0MHgAB3QyfBwABIh8AAd0M3x8A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BwACHRYcAR0HAAHdDAEdFRwCHQgAAd0MFRwB1QwB3QwJAAEdExwBHQHdDAoAAdUMAR0B1QwRHAHVDAsAAd0MAx0PHAEdAd0MDAAC3QwBHQHVDA0cAh0PAAHdDAIdCxwBHQHVDAHdDBAAAd0MAdUMChwBHQHVDAHdDBIAAd0MAh0GHAMdAfoJFAADHQHVDAMcAh0B1QwB+gkVAALdDAMdAhwBHQLdDBgAAt0MAx0B3QwcAAHdDAIdHgAC3QyaAQAHIhYADSITAA4iEgAPIhEAAyIB3QwBAAPdDAciEQABIgLdDAUAAd0MByIQAAHdDAkAAd0MBSIZAAciFwAIIgHdDBYACSIWAAoiFAAMIhEADiIB3QwLAAH6CQEdFRwB1QwB3QwIAAHdDAEdExwCHQoAAR0B1QwBHRAcAdUMAR0B3QwKAAHdDAHVDAIdDxwBHQHdDAwAAt0MAh0NHAEdAfoJDwAB+gkCHQkcBB0RAAHdDAIdAdUMBxwCHQHVDAHdDBIAAd0MAx0FHAEdA90MFAAC3QwFHQHVDAEdGQAB3QwEHQHVDAHdDBoABd0MugIABSIaAAciGQAJIhcACiIWAAPdDAciGQAB3QwGIhoAAd0MBSIaAAUiAd0MGQAEIgLdDBoABCIcAAMiAd0MHAAB3QwBIgHdDBMAAh0RHAIdAfoJCgAC3QwCHQ4cAdUMAR0B3QwNAAEdAdUMAh0KHAMdAd0MDgAC3QwC1QwBHQgcAx0B3QwRAALdDAIdBhwBHQHVDALdDBQAAd0MAdUMBRwCHQHdDBcAAd0MAx0BHAHVDAEdAd0MGQABHQHVDAIdAdUMAd0MGgAB+gkC3QwB1QwB3QweAAHdDNYFAALVDAIdCxwCHQ8AA90MAh0IHAMdAd0MEgAB3QwCHQUcBB0B3QwUAAHdDAIdAdUMAhwDHQLdDBYAAd0MBR0C3QwZAALdDAIdAd0MHQAC3Qy4BgAB3QwDHQHVDAMcBB0B3QwUAAH6CQHdDAgdAd0MFwAC3QwDHQPdDBoAAvoJAd0Mi98BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("Ad0M/wcAAfoJ//cBAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("DQANIgHdDBIAAd0MCyIB3QwUAAsiFQAL3QybBwAB3Qzr9wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          ruinSnowLarge2: dG("ruinSnowLarge2", {
            x: 37,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gEgAARwfAAHVDB8AAR0fAAHdDJ8HAAIcHgACHB4AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BAACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wMAAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAH6CR4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8DAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDN8DAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8EAAIcHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQABHB8AAR0fAAEdHwAB+gmfBwAB+gn/BwABHAEdAfoJHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDJ8GAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDP8DAAQcHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8CAAQcHAAEHBwABBwcAAQcHAAEHBwAAxwBHRwAAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAEcAdUMHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDL8CAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAMcAR0cAAMcAR0cAAMcAfoJHAADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgABHAHVDB4AARwB1QweAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MPwAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAEcAR0eAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAHVDB8AAR0fAAHdDD8ABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAH6CR0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AAR0fAAEdHwAB3QxfAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgAB1QwB3QweAAEdHwAB3Qz/AQADHAEdHAADHAEdHAACHAEdAd0MHAACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAAhwBHQH6CRwAAhwBHR0AARwB1QwB3QwdAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/AwABHAEdAfoJHQABHAHdDB4AAR0fAAEdHwAB3Qz/FgA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("hBAAAR0fAAHVDB8AAd0MvgcAAR0BHAEdHQAB+gkBHAEdHgABHQHdDB4AAR0fAAH6Cf8GAAHdDIQwAAYiAd0MGQAC3QwEIhwABN0MtwcABiIDAAEiAt0MFAAC3QwHIgHdDBgAAt0MBSIbAAXdDJYHAAMiCQAC3QwSAAUiGwAB3QwKIhYAAt0MCCIYAAjdDPMGAAQiCwACIg8AAd0MBCIKAALdDBAACCIYAALdDAoiFgAC3QwIIhgACN0M0gYAAd0MAyINAAEiAd0MDgAEIgEtCwAB3QwPAAkiFwAC3QwMIhQAAt0MCSIB3QwWAAndDNIGAAMiDgACIg0ABCICAAEtCgABIgHdDA0AAd0MBiIBLQkAAd0MDwAB3QwJIgQAASISAALdDAwiFAAC3QwHIgPdDBYAB90MswYAAiIPAAIiDQADIg4AASIB3QwNAAHdDAUiAS0KAAHdDA8AAd0MBiIaAALdDAwiFAAC3QwJIgHdDBYACd0MsQYAASIRAAEiAd0MDAACIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAEiAd0MEAAC3QwNIhMAAd0MCiIC3QwUAArdDLAGAAHdDAEiEQABIgHdDAwAAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCQACIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QyvBgAB3QwBIhEAASIB3QwMAAIiDwACIg0AAd0MBCIMAAEiAd0MDgAB3QwFIgkAAiIQAALdDA0iAd0MEgAB3QwLIgHdDBQAC90MrwYAAiIRAAEiAd0MCwAB3QwCIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAIiEAAC3QwNIgHdDBIAAd0MCyIB3QwUAAvdDK8GAAIiEQABIgHdDAsAAd0MAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCAADIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QywBgACIg8AAiIJAAHdDAMAAiIPAAIiDQAB3QwEIgsAAiIB3QwOAAHdDAUiBQAGIhAAAt0MDSIB3QwSAAHdDAoiAt0MFAAK3QyxBgACIg8AAiIHAAHdDAMdAgAB3QwCIg4AASIB3QwIAAMdAwAEIgsAAiIJAAH6CQLdDAMAAd0MByIBAAciAd0MEAAC3QwNIhMABN0MByIC3QwXAAfdDLEGAAHdDAIiDgABIgHdDAcAAd0MAhwB3QwDAAIiDQACIgkAAR0BHAQAAd0MAyIJAAQiCQACHQUAAt0MDSIB3QwJAAHdDAHVDAcAAd0MCyIB3QwLAAHdDAgAC90M0QYAAd0MASIB3QwMAAIiCQAB1QwBHQUAAd0MDQACIgkAAR0B3QwRAAMiAd0MCQAB3QwLAAkiAd0MFgAC3QwGIgHdDBkABt0M1AYAAt0MCgACIh0AAyIXAAgiAd0MFwAHIgHdDBgAB90M9gYAAt0MAyIDAAQiFgAC3QwHIgHdDBgABiIB3QwZAAbdDJgHAAgiGAAC3QwFIgHdDBoABd0MsB8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BQABHQccAd0MAfoJAQALHAHdDAkAAd0MBxwDAAHVDAkcAR0LAAccAwABHQkcAdUMCwAHHAMAAd0MCRwB3QwLAAccBAAJHAwABxwEAAgcAR0MAAccBAAIHAHVDAwABxwEAAgcAd0MDAAHHAQAAR0HHA0ABxwEAAHVDAccDQAB1QwGHAQAAd0MBxwNAAEdBRwBHQUABxwNAAHdDAUcAR0FAAccDgAFHAHdDAUABhwBHQ4ABRwGAAHVDAUcAdUMDgAFHAYAAR0EHAEdAd0MDgAFHAYAAd0MAxwCHQ8ABRwHAAIdARwBHQHdDA8ABRwHAAHVDAIdAfoJEAAFHAcAAt0MAR0RAAEdBBwJAAHdDBEAAR0EHBsAAd0MBBwcAAMcAR0cAAMcAR0cAAMcAd0MHAABHQIcHQABHQIcHQAB3QwCHB4AAh0eAAEdAdUMHgAB+gkB3QwaAAHdDAccAfoJAgAJHALVDAH6CQoABxwDAAHVDAgcAR0B3QwLAAccAwACHQccAd0MDAAHHAMAAd0MAR0HHA0ABxwEAAHdDAYcAR0NAAccBQAGHAEdDQAHHAUABhwB3QwNAAccBQAGHA4ABxwFAAEdBRwOAAccBQABHQUcDgAHHAUAAfoJBRwOAAccBgAEHAEdDgAHHAYABBwBHQ4AAR0FHAEdBgAEHAHdDA4AAR0FHAHVDAYAAh0BHAEdDwAB3QwFHAHdDAYAAx0B1QwQAAUcBwAC3QwBHQHdDBAABRwJAAHdDBEABRwbAAUcGwAFHBsABRwbAAUcGwABHQQcGwABHQMcAR0bAAHdDAMcAR0cAAMcAd0MHAADHB0AAdUMAhwdAAEdAhwdAAHdDAEdARweAAHVDAEcGgAB+gkHHAQAAdUMBhwCHQwABxwEAAH6CQYcAR0B3QwMAAccBQABHQUcAfoJDQAHHAUAAdUMBRwOAAccBQAB3QwEHAHVDA4ABxwGAAMcAh0OAAccBgADHAEdAd0MDgAHHAYAAxwB3QwPAAccBgABHQIcEAAHHAYAAx0QAAccBgAB3QwB1QwBHRAAAR0FHAEdBwAB+gkB3QwQAAEdBRwBHRkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAh0CHAEdGwAB+gkBHQIcAd0MHAAB3QwCHB4AAhweAAIcHgACHR4AAh0eAAHdDAH6CRsABxwFAAHdDAHVDAMcAR0B3QwB+gkMAAccBgABHQIcAR0B3QwOAAccBgAB3QwCHAEdDwAHHAcAAhwB3QwPAAEdBRwBHQcAAh0QAAEdBRwB1QwHAAIdEAAB3QwFHAHdDAcAAt0MEQAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAxwdAAMcHQABHQEcAdUMHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MnAEABhwaAAEdBRwaAAEdBRwaAAHdDAUcGwAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAEdARwBHR0AAdUMARwBHR0AAd0MAR0B3QweAAEdHwAB3QyW3AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("iQgAAd0MAR0fAAEdHwAB3Qy19wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          ruinSnowMedium1: dG("ruinSnowMedium1", {
            x: 13,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          ruinSnowMedium2: dG("ruinSnowMedium2", {
            x: 34,
            y: 21,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }]),
          ruinSnowSmall1: dG("ruinSnowSmall1", {
            x: 12,
            y: 7,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("gQgAASIBhgEGAAEiGAAB3gzeBwABjAUBIgEABd0MAQABIgGMBRUAASMJAAEjFQABgQEJAAGBAR8AAYYBHwAB3gz2BgABIgXdDAECAd0MGgAF3QwdAAHfDLsHAAPdDAECAd0MAwIB3QwYAALdDAGMBQHdDAGMBQLdDBwAAdAFugcAAd0MAgIBzgEC3QwEAgHdDBYAAt0MAYwFAt0MAowFAt0MGgABzwUBjAUBzQUBAAHfDBwAAdEFmgcAAd0MAwIC3QwEAgHdDBYAAt0MAQIB3QwBzwEBAgPdDBcAAd8MAgABzwUB0QwBzQUeAAHRBZoHAAHdDAUCAd0MAwIB3QwWAAPdDAKMBQLdDAECAd0MGQAB3wwBzwUBjAUBzQUeAAHRBZsHAAHdDAICAd0MAQIB3QwCAgHdDBgAA90MAYwFAd0MAQIB3QwcAAHOBQIAAd8MtwcAAiIH3QwaAAXdDBwAAd8MuwcAAYwFAQABIgXdDAIAAYwFFQABIwkAASMVAAGBAQkAAYEBFQABhgEfAAHeDIAHAAEiBgACIvWnAQA=")
          }]),
          ruinSnowSmall2: dG("ruinSnowSmall2", {
            x: 14,
            y: 19,
            z: 14
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("gQgABd0MAx0F3QwYAAHdDAHVDAH6CR4AAd0MuQcAAt0MAx0FHAPdDBUACB0CAAHfDBUAAfoJAt0MAdUMAx0B1QwbAAEdA90MAR0bAAGIAQEAAdEMAd8MAYEBGwABgQEDAAGIARsAAYEBAwABiAEbAAGIAQMAAYEBGwABiAEDAAGBARsAAoEBAQACgQEcAAKIAQGBAbcFAAHdDAEdCRwC3QwUAAHdDAMdBBwCHRcAAx0C1QwEHRcAA90MAR0C1QwBHQLdDJUHAAHdDAEdCRwBHQHdDBQAAR0B1QwHHAEdAfoJFQAB3QwFHQHVDAMdFwAB3QwBHQHVDAQdAdUMAd0MGAAB+gkC3QwDHAHdDAHfDPUGAAHdDAEdCRwBHQHdDBQAAh0HHAIdFQAB3QwCHQHVDAIdAdUMAx0B3QwVAAHfDAHdDAcdAd0MGAAD3QwDHAHdDBsAAd8MAxwB3wwdAAHPAbgGAAEdAdUMCRwB1QwB3QwTAAHdDAHVDAkcAR0VAAHdDAHVDAgdAd0MFgAEHQLVDAMdFwAD3QwEHAHVDAH6CRgAAd8MAQAEHAHdDBsAARwB3gwBHAHeDBwAAhwB3gwBHRwAAR0B3gwBHAHeDBwAAR0BHAHeDAHVDBwAAd0MAd4MAdUMAR0dAAIdAd0MHQABHQHdDB4AAd0M2QQAAh0JHAEdAd0MEwAB3QwBHQkcAR0VAAHdDAQdAdUMBB0B3QwWAALVDAUdAtUMAd8MFgAD3QwFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwACHAHMAQEcHAACHAIdHAACHAIdHAABHAEdAt0MHAACHR4AAR0B+gkeAAHdDJoEAAEdAdUMCRwBHQHdDBMAAd0MAR0JHAEdFQAB3QwFHQHVDAMdAd0MFgAC1QwCHQHVDAQdFwAB+gkC3QwFHAHdDBkAAd8MBRwbAAUcGwAEHAEdGwAEHAHVDBsABBwB3QwbAAEcAR0BHAEdHAABHAMdHAABHQHdDAEdAd0MHAABHQEAAd0MHQAB3Qy6BAABHQHVDAkcAR0B3QwTAAHdDAEdAdUMBxwCHQHfDBQAAd0MAR0B1QwBHQHVDAUdAd0MFQAB3wwB3QwDHQPVDAEdAd0MGAAC3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAABHQEcAh0cAAEdARwBHQHdDBwAAfoJAR0B3QweAAEdHwAB3Qy5BAAB1QwBHQkcAdUMAd0MEwAB+gkBHQHVDAccAtUMFQAB3QwJHQH6CRYAAd0MBx0B3QwYAALdDAHVDAMcAR0B3wwYAAHfDAEAAdUMAxwB3QwbAAHdDAEdARwBHR0AAh0B1QwdAAHdDAHVDAHdDB4AAfoJ2AUAAd0MAdUMCRwBHQHdDBQAAd0MAh0EHAQdFgADHQLVDAQdAd0MFgAB+gkB3QwEHQPdDBkAAt0MAvoJAQAB3wz2BgAC3QwBHQccAh0B3QwVAAcdAdUMAR0B3QwWAAHdDAMdAtUMAh0B+gkYAAHdDAH6CQXdDBwAAd8M+QYAA90MCB0C3QwWAAHdDAIdBd0MGQAC3Qy5lwEA")
          }]),
          ruinSnowSmall3: dG("ruinSnowSmall3", {
            x: 13,
            y: 14,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BAAC3Qz7BwAD3QwB1QwDHQLVDBoAAfoJBd0M1gcAAt0MAdUMBR0C1QwBHQHdDBYAAh0B1QwBHQXdDBcAAfoJA90MugcAAt0MAdUMAR0DAgHVDAEdAdUMAh0WAAEdAdUMAwIDHQLdDBYAAt0MAR0BLgHVDAHdDAH6CQHdDBsAAYEBHwABiAEfAAGBAR8AAYYBHgABgQECiAEeAAGIAfoFAAHdDAHVDAMCAdUMAwIB1QwBHQHVDBUAAd0MAwIBHQMCAh0B3QwWAAEdAdUMAR0B3QwBgQEBHQECAt0MFwABiAEBzQEEAAGIARkAAYEBBQABiAEZAAGBAQUAAYgBGQABhgEFAAGGARkAAYgBAYEBAwABgQEBiAEZAAGBAQUAAYgB9wUAAd0MAdUMAQIB1QwDAgEdAQIBHQHVDAEdFQAB1QwBAgEdAwIBHQECAh0B3QwVAAHdDAEdAd0MA+MHAd0MAR0B3QwB+gmXAQABiAEFAAGBAZcGAAHdDAcCAdUMAQICHRUAAR0GAgEdAQIBHQHdDBUAAR0B1QwF4wcB3QwBHQHdDBYAAYEBfwABiAEHAAGBAZYGAAHdDAcCAR0BAgEdAd0MFQABHQYCAdUMAQIBHRYAAR0B1QwC4wcB0QwC4wcB3QwBAgHdDBYAAYgBBwABgQEXAAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGIAQcAAYEBFwABiAEHAAGBAfYFAAHdDAECAR0HAgEdAd0MFQACHQcCAd0MFgAB1QwB3QwF4wcCHZcBAAGIAQcAAYEBlgYAAd0MAdUMBwICHRYAAd0MBwIB3QwB+gkXAAIdA+MHAdUMAR2ZAQABgQEFAAGBAZcGAAHdDAIdAQIBHQECAdUMAgIB3QwXAAH6CQHdDAECAR0BAgEdAQIBHRkAAh0B3QwBHQHdDAHVDAEdGQABiAEFAAGBARkAAYgBBQABgQEZAAGIAQUAAYEBGQABhgECAAGBAQIAAYYBGQACgQEBAAHPAQEAAYEBAYgBGQABgQEFAAGIAfgFAAMdAdUMAR0B1QwBHQHdDBgAAt0MBB0B3QwbAAHdDAMdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGIAQKBAR4AAYgB/QUAAd0MAx0B3QwcAAHVDAH6CQHdDB0AAfoJu58BAA==")
          }]),
          ruinSnowSmall4: dG("ruinSnowSmall4", {
            x: 11,
            y: 9,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AwAH3Qz5BwABHAPdDAEdARwC3QwYAAEcAwAB3QwBHRoAARwEAAEdGgABHAQAAd0MGgABHP4GAAUdAxwBHQHdDBYAASID3QwCHQHVDAIdFwABIgMAAd0MAx0B3QwXAAEiBAAD3QwYAAEiBgABHfcGAAEiAdUMBB0CHAEdARwB3QwVAAEiAtUMBx0WAAEiBd0MAR0B1QwB3QwBHRYAASICAAHQBQIAAt0MAQIB3QwdAAEdAYwFAdUMHwAB0wXVBgAB3QwBHQHVDAMdAdUMAhwBHQEcAR0VAAHVDAIdAd0MAtUMAR0B1QwCHQHVDBUAA90MAYwFAt0MAdUMAR0BjAUBHQHdDBcAAc8FAYwFAc0FAd8MAt0MAYwFAd0MGQAB0QUDAAHVDAGMBQHVDB8AAdMF1QYAAd0MBB0B1QwBHQIcAdUMARwBHRUAAd0MAh0B3QwFHQHVDAEdFgAC3QwBzQEC3QwCHQHdDAEdAd0MFwABzwUB0QwBzQUBAALdDAECAd0MGQAB0QUDAAEdAYwFAR0fAAHTBdUGAAHdDAYdBBwB1QwVAAHdDAHVDAEdAd0MBx0VAAHfDALdDAGMBQLdDAHVDAEdAdUMAR0B3QwXAAHPBQGMBQHNBQEABN0MAd8MGAAB0QUEAAEd9wYABB0B1QwBHQQcAdUMFQAB3QwBHQHVDAYdAdUMAR0WAAXdDAQdAd0MGAABzgUBAAHfDATdDB0AAd8M+QYAAR0B1QwIHRYAAt0MBB0B1QwCHQHdDBgAB90MuAcAAdUMAR0C1QwEHQEiFwAI3QwBIhgAAd8MAgAB3wwDAAEcHwABHJkHAAXdDAEiHwABIh8AASK1rwEA")
          }]),
          ruinStoneLarge1: dG("ruinStoneLarge1", {
            x: 26,
            y: 33,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }]),
          ruinStoneLarge2: dG("ruinStoneLarge2", {
            x: 38,
            y: 31,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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AAEjBgABHQGBAQEAAdwBAQABgQEGAgGBAQESAhgCEgGBAQYAAdwBBwABHQGBAQHcAQEAAYEBBgIBgQEFAAGBAQ8AAR0B3AEBAAGBAQYCAYEBBQABgQEQAAEdAoEBBgIBgQEFAAGBAREAAR0BiAEFEgECAYEBAQABGAISAQABgQETAAHdAQMAAaAIAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQGBAQEAAYgBA4EBAhICGAESAYEBGQABgQEFAAGBARkAAYEBBQABgQEZAAGIAQUAAYEBGQABgQEBAAESAQABEgEAAYcBGQABhwEFAAGHARkAAYEBBQABhwEZAAGIAQUAAYEBGQABhwECEgEAAhIBgQEZAAGBAQEwAgABiAEBAAGBARkAAYEBAogBAwABiAHGAQABAgEAAQIBAAYCAQAKAgIAAQIIAAGzBwuBAQEjAwIBgQECAgEjBIEBAbMHASMGAAEcBQIBgQEFAgEjARwDgQECHAEjAYEBAwABgQEBIwYAAR0FAgGBAQUdASMCgQEBHAOBAQEjAYEBAwABgQEBIwYAAYcBBQIBHAQAAdwBAbMHAYEBAYgBAoEBAYgBAYEBASMCgQEBAAGBAQGHAQEjBgABgQEFAgEdBAAB3AEBHQKIAQGBAQGIAQKBAQEjAYcBAYEBASMCgQEBIwYAA4EBAQABiAECgQEEAAHcAQGIAQaBAQEjA4cBAoEBASMGAAEjBgABHQMAAdwBAYEBBgIBgQEChwEDgQEBIwYAAYEBBwABHQIAAdwBARwGAgWBAQGIAQEjDwABHQEAAdwBAYEBBgICgQECiAECgQEBIxEAAdwBAYEBBgIGgQEBIxEAAR0BgQEDEgEYARIBAgaBAQEjEQAB3gEB3QEFAAOBAQGIAQGABAGIAQGBAQEjEgAB3QEFAAGBAQGIAQKBAQGIBAGIAQGBAQEjEgAB3QEFAAGIAQOBAQEjAoEBASMSAAHdAQOBAQEAAoEBASMFgQEBIxIAAd4BBgABIwGzBwMAAYcBASMZAAEjAYcBAwABhwEBIxkAASMBhwEBgQEBAAKBAQEjGQABIwGBAQGIAQEjAoEBASMZAAEjAoEBAYgBAYcBAYEBASMZAAEjA4EBAYcBAYEBASMZAAEjAYEBAYgBAYcBAogBASMZAAEjAYcBBIEBASMZAAEjAYEBAYgBAQACgQEBIxoAAYEBzAEAEwICAAECCQAUgQEBHAKBAQGIAQGzBwcAAbMHBQIBgQEFAgGBAQGeCAKSCAMAAYEBBAABswcB2wEGAAEcBQIBgQEFHQGBAQYAAYEBBAABhwEB2wEGAAGHAQUCAbMHBAAB3QEBHQYAAYEBBAABHQHbAQYAAYcBBQIBHAQAAd0BAYgBBgABgQEEAAGHAQHbAQYAA4EBAogBAoEBBAAB3QEBgQECiAEEgQEBhwEEAAGBAQHbAQYAASMFAAEjAYEBAwAB3QEBgQEGAgGHAQQAAYEBAdsBDQABIwGBAQIAAd0BAYEBBgIBIwQAAYEBAdsBDgABIwIAAd0BAYEBBgIBgQEEAgGBAQHbAREAAd0BAYEBBgIBgQEEAgGBAQHbAREAAoEBBBIBGAESARgBEgSBAQHbAREAASMBiAEIAAGGAQIAAYgBAdsBEQAB3QEJAAGBAQIAAYEBAdsBEQAB3QEJAAGBAQIAAoEBEQAB3QECgQEBiAEBhwEHgQEBhwEBgQEBHREAAd0BASMB2wELAAEj5gMAAQIBAAECAQAIAgEAAwIDAAUCCAABswcSgQEBHASBAQGzBwHbAQYAAbMHCwIBgQEGAAHkBwQAAbMHAdsBBgABswcLAgGBAQYAAeQHBAABhwEB2wEGAAGHAQUCAYEBBR0BgQEGAAHkBwQAAYcBAdsBBgABgQEFAgGIAQUAAYgBBgABgQEEAAGBAQHbAQYABoEBAR0FAAGIAQEAA4gBAoEBAYcBBAABHAHbAQYAASMLAAEcBgIBhwEEAAGBAQHbAQYAAYEBCwABgQEGAgGHAQQAAYEBAdsBEgABgQEGAgGHAQG9BwMAAYEBAdsBEgABgQEGAgEjBAIBiAEB2wESAAGBAQIYARIBGAQSAYEBAYgBAoEBAdsBEgABhwEIAAH+AwIAAYEBAdsBEgABhwEIAAGGBAIAAeQHAdsBEgABgQEIAAEjAgABgQEB2wESAAKBAQGIAQGBAQGHAQOBAQGIAQGBAQOHAQGBARIAASMHAAHRDAQAASMSAAGBAQwAAYEBxgMAAQICAAkCAQAFAgMAAQIBAAICBwABswcUgQEBiAECgQEBswcB2wEGAAGzBwsCAoEBCgABhwEB2wEGAAEdCwIBHQYAAeQHBAAB5AcB2wEGAAEcBQIBgQEGHQYAAeQHBAAB5AcB2wEGAAGHAQUCAbMHBQABHQYAAYEBBAABgQEB2wEIAAKBAQEAAYEBAYgBBQABiAEBswcBHQEAAogBAoEBBAABgQEB2wEGAAEjCwABHQGzBwECAR0DAgEdBAABgQEB2wESAAGBAQECAbMHAwIBAAGHAQQAAYEBAdsBEQABVAGBAQQCAgABhwEEAAGIAQHbAREAAVQBgQEGAgGHAQQCAYEBAdsBEQABVAGBAQMYAxICGASBAQHbAREAARMBgQEIAAGGAQIAAYEBAdsBEgABgQEIAAGIAQIAAYEBAdsBEgABhwEIAAGBAQIAAYgBAYEBEgAJgQEBiAEBgQEBhwEBiAEBHRIAASMMAAEj5gMAAQICAAUCAQACAgQABAIBAAICAQACAgcAArMHF4EBAdsBBQAB3QEBswcLAgEcAQABgQEEAAG9BwQAAR0B2wEFAAHdAQGHAQsCAYEBCwABhwEB2wEFAAHdAQGHAQsCAYEBCwABHAHbAQgABAIBgQEGHQYAAYEBBAABgQEB2wEIAAGBAQEcAYEBAQABiAEFAAGzBwIAAR0CiAECgQEEAAGBAQHbARIAAh0BAAQCAYEBBAABgQEB2wERAAEzAYEBAbMHAdYDAbMHAgIBAAGBAQQAAYEBAdsBEQABMwGBAQECAbMHAwIBAAGHAQQAAYEBAdsBEQABMwGBAQYCAYcBBAIBgQEB2wERAAEzAYEBA4gBAYEBAgIBIwICAYEBAogBAdsBEQABEwEjAYgBAwABhwECgQEBiAECgQEBAAGBAQHbARIAASMBgQEDAAKBAQGIAQOBAQEAAeQHAdsBEgABIwKBAQEAAYcBBoEBAQABiAEB2wESAAEjAYEBAYcBAoEBAogBAx0CgQEBiAEBgQESAAcjAwABIwIAASMSAAGBAQEAAYEBAQABgQEBAAGBAQMAAYEBAgABgQHHAwAEAgMAAgICAAICAQACAgEAAQIBAAICAQABAggAAbMHE4EBARwDgQEBhwEHAAGHAQsCARwBvQcFAAHkBwIAAdEMAQABhwEHAAEcCwIBgQEGAAHkBwQAAYcBCQAKAgEdBgAB5AcEAAGHAQkABAIBgQEFHQGBAQYAAYEBBAABhwEKAAOBAQGIAQUAAoEBAQACiAEDgQEEAAGBARMAARwBAgGzBwQCAYEBBAABgQETAAGBAQECAbMHAgIBAAECAYEBBAABgQESAAFUAYEBBgIBgQEEAAGBARIAAVQBgQEBAgEAAb0HAwIBHQQCAYgBEgABVAKBAQEdAQACgQEBAAMCA4EBEgABEwEjBQABhwEBgQEBAgKBAQEAAYEBGQAFgQEBAAGBARkAAYEBAYgBAh0BgQEBAAKBARgAAYEBAwADgQEBHRgAASMDAAEjAgABI+YDAAQCAwADAgEAAgICAAYCAgABAggAArMHFYEBAocBBgAB3QEBswcLAgGBAQIcAQABgQEBAAKBAQQAARwGAAHdAQGHAQEACgIBgQEBHAGBAQEdAQADgQEEAAHkBwcAAd4BAQAKAgGBAQIdBYEBBAAB5AcHAAHeAQIACQIBgQEBHQaBAQQAAYEBBwAB3gECAASBAQUdCIEBBAABgQEHAAHeAQsACIEBBAABgQETAAGIAQeBAQQAAYEBEwABiAEHgQEEAAGBARMAAYgBBoEBAR0EAgGIARMAAYEBAogBARwDgQEEAgGIAQGBARMAASMFAAGBAQIAAoEBAQABgQETAAGBAQgAAh0BAAHkBx0AAYEBAQABgQEdAAGHAQGIAQKBARwAASMCAAEjHAABgQECAAGBAcYDAAECAQABAgMAAQIBAAECAQADAgEAAQIBAAUCAQABAgEAAQIHAAGzBxSBAQGIAQKBAQGHAQYAAd0BAbMHCwIBHAYAAeQHBAABHQYAAd0BAYcBCwIBgQEGAAHkBwQAAYcBBgAB3QEBgQEB2wEKAgGBAQYAAeQHBAABgQEGAAHdAQEAAdsBAQAJAgGIAQYAAYEBBAABgQEGAAHdAQEAAdsBAQAHgQEBHAGIAQGBAQUdAoEBBAABgQEGAAHdAQEjAdsBCgAIgQEEAAGBARMAAYgBBoEBAR0EAAGIARQAAYgBBoEBBAABgQEUAAGIAQWBAQEdBAIBiAEUAAKBAQEcAYcBAR0EgQEBAgKBAR0AAR0BAAGBAR0AAR0BAAGIAR0AAYcBAQACgQEcAAGIAQGHAQGIAQEdHAABIwIAASPmAwABAgIAAQIBAAICAQACAgIAAQIBAAMCAQACAgIAAgIIAAGzBxOBAQEAAoEBAocBBwABswcLAgGIAQYAAeQHBAABHQcAAbMHCwIBgQEGAAHkBwQAARwGAAHdAQGHAQEACgIBgQEGAAHkBwQAAYEBBgAB3QEBgQEDAAgCAYEBBgABgQEEAAGBAQsAAoEBAYgBAQADiAECgQEBiAEGgQEEAAEdBwABIwsAB4EBAR0EAAGBAQcAAYEBDAABiAEGgQEEAAGIARUABoEBBAABgQEVAAGIAQWBAQQCAYEBFQABgQEBiAEBgQEBiAEEgQEBAgKBAR0AAR0BAAGBAR0AAYgBAQAB5AcdAAGBAQEAAYEBHQADhwEBgQEcAAEjAgABIxwAAYEBAgABgQHGAwABAgQAAQIBAAECAQADAgMABgIBAAICCAABswcTgQEBiAEDgQEBswcHAAGzBwsCAYEBBgAB5AcEAAGHAQcAAYcBCwIBgQEGAAHkBwQAAeQHBwABHQsCAYEBBgAB5AcEAAHkBwcAAYcBAQAKAgGBAQYAAYEBBAABHQHbAQYAAYEBAgACgQEBiAEBHAGIAQGBAQEcBYEBAR0CAAGBAQGIAQQAAYcBAdsBBgABIwcAASMDAASBAQICAoEBBAABgQEB2wESAAiBAQQAAYEBAdsBEwABiAEGgQEEAAGBAQHbARQABYEBBQIBgQEB2wEUAAKBAQGHAQGBAQEcBoEBAdsBEgABIwkAAR0BAAGHAQHbARwAAYEBAQABgQEB2wEcAAGIAQEAAoEBHAAChwEBgQEBHRwAASMCAAEj5gMAAgIBAAICAQABAgEAAgIDAAICAQACAgIAAQIBAAECAQABAgcAArMHE4EBAYgBARwBgQEBswcHAAGzBwsCAbMHBAABswcBAAHkBwQAAbMHAdsBBgABHAsCAYEBBgAB5AcEAAGHAQHbAQYAAYcBCwIBgQEGAAHkBwQAAR0B2wEGAAEcCwIBgQEGAAGIAQQAAYcBAdsBBgABgQEBAAKBAQOIAQiBAQEdAgABhwEBiAEEAAGHAQHbAQYAASMDAAHRDAMAAYEBAx0BswcDgQECAgKBAQQAAR0B2wEGAAGBAQcAASMDAAeBAQGHAQQAAYgBAdsBEwABiAEFgQEFAgGBAQHbARMABoEBBQIBgQEB2wETAAOBAQEdAYgBAYEBAYcBA4EBAogBAdsBEgABIwkAAYEBAQABhwEB2wESAAGBAQkAAYgBAQAB5AcdAAGIAQEAAYEBHQACgQEBhwEBgQEcAAEjAgABIxwAAYEBAgABgQHGAwABAgEAAwIBAAMCAwACAgEAAQIEAAQCBgABZAEAASMWgQECswcHAAEjAYEBCgIBiAEBnggCkggBzwEBswcBAAGIAQK9BwIAAbMHAQAC3gEEAAEdCwIBgQEEAAEdAQABgQEEAAGBAQLeAQMAAd4BAQABIwsCAYEBBgABgQEEAAGBAQLeAQMAAd4BAWQBIwGHAQoCAYEBBgABiAEEAAEdAt4BAwAB3gEBZAEjCoEBAbMHAoEBAR0CAAKHAQGBAQQAAYcBAd4BBAAC3gEBIwcAArMHAoEBAbMHBgIBhwEEAAGBAQHbAQQAAt4BCAABgQEDHQGzBwsCAYEBAdsBBAAC3gEIAAEjAwAIgQEEAgGIAQHbAQQAAt4BDAAFgQEBAgKBAQQCAYEBBQAC3gEMAAGIAQOBAQGIAQEAB4EBBQAC3gEMAAEjCQABgQEBAAGBAQUAAd4BFwABgQEBAAGHAR0AAYEBAQABhwEBgQEBZBsAAYgBAoEBAR0BZBsAASMCAAEjfgABgQEBAAGBAR0AAR0BgQEBHQGBARwABCMcAAGBAQEAAYgBhgIAAQIBAAQCAQADAgIAAQIBAAECAQACAgIAAwIBAAMCBAABswcLgQEBIwsCBLMHAgAB3QEBAAGHAQuBAQEjAogBA4EBAbMHAYEBAYgBAoEBAYgBA7MHAR0CAAHdAQEcDIEBASMIgQEBiAECgQEBhwEBswcBhwEBswcCAAHdAQEcDIEBASMEgQEBiAEBhwEDgQEBHAKBAQGHAQGBAQGHAQIAAd0BAocBC4EBASMBiAEBgQEEhwEBgQEBHAWBAQIdAgAB3QEBhwECgQEChwEBgQEBhwEDgQEBhwECgQEBIw2BAQKHAQEAAt0BAYcBAYEBAocBAwACgQEEswcBgQELAgOBAQGHAQEAAt0BAYcBAh0BgQEDAAGBAQEcAR0BhwEDgQELAgKBAQGIAQGBAQEAAd0BASMBgQEBHQGIAQKBAQEAAR0BHAKBAQMdBIEBAQIDgQEEAgSBAQEAAd0BASMHgQEBiAECgQEDAAOBAQICA4EBBAIEgQEBAAHdAQEjBYEBAYgBAYEBAYcBAoEBAwABgQEBHQGBAQIAAocBAR0BHAKBAQGIAQOBAQGIAQEAAd0BCyMDAAEjCQABHAEAAoEBAYgBAYEBAQAB3QEBgQEBAAGBAQEAAYEBAQABgQEBAAGBAQEAAYEBAwABgQEJAAGBAQEAAYcBAoEBAYcBGgABgQEBAAOBAQGHARoAAYcBA4EBAYgBAYEBGgABIwEAASMBgQECIxoAAYEBAQABgQEBhwECgQEcAAGBAQOHARwAAYcBAYEBAYcBAYEBGgAGgQEaAAEdBYEBGgACIx4AAYEBiQIAAgIBAAICAQABAgEACwIBAAECAQAFAgQAAbMHFgIDgQEBswcBgQEBswcCAAHdAQHcARQCBYEBAbMHAYEBAbMHAgAB3QEB3AEBABMCBYEBAYcBAYEBAYcBAgAB3QEBABQCCIEBAgAB3QEBABQCCIEBAgAB3QECGAESAxgDEgwCB4EBAYcBAgAB3QEBEwEvARMEAAG9BwHOAQGIAQsCCIEBAgAB3QEBnggCkggGAAGBAQsCCIEBAgAB3QEDEwYABIEBBAIBAAuBAQIAAd0BAZ4IApIIBgABiAEDHQGBAQMCAQAGgQEBLwSBAQIAAd0BAYEBAYgBAYEBAocBAYgBBIEBAwABgQEBHQGBAQIAAYEBAR0EgQEBvQcEgQEaAAEcAQAEgQEaAAGBAQEAA4EBAYgBGgABHAEAA4EBAYcBGgABHASBAQGHARoAAiMEgQEaAAGBAQGHAQKBARwAAYEBAYcBAYEBHQABhwEBgQEeAAGBAR4AAYEBBQABhwEZAAEjqAIABQIBAAECAQAEAgIAAgICAAECBAABAgEAAgIBAAECAwABswcWAgeBAQIAAd0BAbMHFAIIgQECAAHdAQEAFAIIgQECAAHdARUCCIEBAgAB3QEVAgiBAQIAAd0BBBIBGAISAhgMAgiBAQIAAYgBCQABiAELAgiBAQIAAeQHCQABiAELAgiBAQIAAeQHCQABgQEHAgyBAQIAAYcBCQAEgQEEAgyBAQIAAYgBAoEBAR0BAAGIAQGHAQKIAQKBAQMdAoEBAgAMgQECAAEjFQAB3gEBHAGBAQEABIEBAgABgQEVAAHeAQEcAYEBAQAEgQEYAAHeAQGHAQGBAQEAAoEBAYcBAYEBGAAB3gEBHQSBAQGHAQGIARgAAd4BASMFgQEBiAEYAAHeAQEdAQACgQEBiAEaAAHeAQGHAQEAAYEBAYcBGwAB3gEBgQEBiAEBgQEcAAOBAR0AAR0BgQEFAAGIARgAASMfAAGBAYkCAAICAgACAgMAAgIBAAECAQADAgEAAwICAAQCAgABAgIAAbMHFQIIgQECAAGzBxUCCIEBAgABHBUCCIEBAgABiAEVAgiBAQIAAYcBFQIIgQECAAGHAQkSDAIIgQECAAGHAQMTAwADEwGBAQsCCIEBAgABiAEBnggCkggDAAGeCAKSCAGBAQsCCIEBAgABgQEDEwMAAxMBgQEHAgGBAQICCYEBAgABgQEGAAGeCAKSCAGBAQMdBAIMgQECAAGBAQEdAYEBAwABiAEIgQEBAAOBAQEdCoEBAgABIxQAAd0BAYgBAoEBAYAEBIEBFwAB3QEBHQKBAQGIBASBARcAAd0BAR0DgQEBiAECgQEBhwEXAAHdAQGHAQKBAQKIAQKBAQEcFwAB3QEBIwGBAQQjAYEBAYcBFwAB3QEBHQKIAQOBARkAAd0BAYEBAYgBAoEBAYgBGgAB3QECgQEBhwEBgQEcAAKBAQGHARwAA4EBBQABgQEXAAEjqgIABAIBAAMCAwACAgEADQIBAAICAgABswcHgQENAgmBAQMAAbMHAYEBAYcBBIEBDQIJgQEDAAEcAocBBIEBDAIKgQEDAAEcAbMHARwBhwEDgQEMAgqBAQMAAYcBAYgBAbMHAYcBARwCgQEMAgqBAQMAAogBAYcBAYgBAbMHAoEBDAIKgQECAAEjAYcBAYgBA4cBBIEBCgIKgQECAAEjAYEBAYcBA4EBAYcBA4EBCAIMgQECAAEjA4EBAocBBIEBCAIMgQECAAEjAYgBCYEBBwIMgQECAAEjCIEBAQABgQEBhwEBHAKBAQEAARwBiAEBHAuBAQIACCMMAAHdAQGIAQKBAQMAAYgBAoEBAgABgQEBAAGBAQEAAYEBAQABgQENAAHdAQEdAYgBAYEBAwADgQEWAAHdAQOBAQQAAoEBFgAB3QEBHQKBAQQAAoEBFgAB3QEBIwGBAQEjHAAB3QEBHQGBAQGIARwAAd0BAYcBAYEBAogBAYEBGgAB3QEBgQECAAGIAQGBARoAAoEBAYcBBIEBGQABHQOBAQIAA4EBAYcBFgABIx8AAYEBkgIAAwIBAAUCAQABAgIABAICAAMCBAABgQECZAEAAmQCgQEKAguBAQMAAbMHAmQBHwJkAYEBCwILgQEGAANkAYEBDAIKgQEIAAFkAYEBDQIJgQEJAAGBAQ0CCYEBCAABZAGHAQwCCoEBCAABZAGHAQoCDIEBBwACZBeBAQcAAmQXgQEIAAFkAYgBFoEBCQABZAEdAYEBAhwBgQEBhwEBHQ+BAQkAAiMLAAHdAQGIAQKBAQMAAYgBAhIJAAGBAQwAAd0BA4EBBAACgQEWAAHdAQEcAoEBBAABgQEBHBYAAd0BARwCgQEcAAHdAQMjHAAB3QEBHAKBARwAAd0BAoEBAYcBHAAB3QEEgQEbAAeBARkAAoEBAYcBBIEBAYgBAoEBFgABI6wCAAICBAADAgIABQIDAAECAgABAgEAAwIBAAECAwABhwEBswcDAAFkAoEBCgILgQEHAAJkBIEBCAILgQEIAAFkA4EBCQILgQEJABeBAQgAAWQBhwEBAhWBAQgAAWQCiAEVgQEIAAFkF4EBCQAXgQEJAAGHARaBAQkAF4EBCQACgQEBHQGIAQSBAQEcDoEBCQABIwF+ASMJAAKBAQESAxgFEhUAAd0BAYEBBwABHAGBARUAAd0BAYEBHgAB3QEBgQEeAAHdAQEjHgAB3QEBgQEeAAHdAQGBAR4AAd0BAYcBA4EBGwAIgQEYAAEdA4EBAocBBYEBFQABIx8AAYEBjQIAAQIFAAICAQABAgEABQICAAICAgAFAgUAARwBAAGBAQMAF4EBCAABZAGzBxaBAQkAF4EBCAABZBeBAQgAAWQBhwEWgQEJAAEcA4EBAYcBEoEBCQADgQEBiAEQgQEBswcCgQEJAAGIAQOBAQGIAQ+BAQEdAoEBCQACgQEBhwEBgQEBhwEQgQEBMAGBAQkAAYEBAYcBAYgBAYcBAQIBiAECgQEBAg6BAQkAAYEBATABgQEBiAEBAAGIAQKBAQEAAoEBAYgBC4EBCQABIwF+ASMJAAGBAQESARgEEgEYAxIJAAGBAQwAAeQHAgAHnQgWAAHkBx4AAd0BAeQHHgAB3QEB5AceAAHdAQEjHQABVAHdAQGHAR0AAVQB3QEBiAECgQEbAAFUAd0BB4EBFwABVAKBAQGHAQMCAYcBAYEBAYcBAYEBAYgBFAABEwEjAgABuwKxAgACAgEABAIDAAECAQAKAgkAAbMHAoEBAYcBAYgBAYcBBIEBAocBC4EBCQABswcBiAEBgQEBiAEEgQEBhwEBswcBhwEMgQEJAAGzBwKIAQKHAQKBAQKHAQGBAQGHAQGBAQGHAQqBAQkAA4EBAYcBBIEBAYgBAYEBAYcBDIEBCQAChwEBiAEEgQECiAEChwEMgQEJAAGzBwGBAQGHAQWBAQKHAQEdDIEBCQABhwEIgQEChwEBHQeBAQGzBwGBAQGzBwGBAQkABoEBAYcBA4EBAR0BhwEBiAEGgQEBHAOBAQkABoEBAgIBhwEBgQECiAEIgQEBvQcBAAGBAQkAAoEBAYgBAYcBAoEBAh0BhwEBgQEBiAEJgQEBvQcCgQEJAAKBAQIdAYEBAx0MgQEBvQcCgQEJAAIjAwABVgYAAYEBAxIBAAISARgBAAESARgYAAGdCAEAA50IAQACnQg1AAHdAR8AAd0BAeQHHQABMwHdAQHkBx0AATMB3QEBIx0AATMB3QEBhwECgQEbAAEzCIEBFwABMwEdAoEBAwIDgQEBiAEVAAETASMBzAEDAAG7AhoAAYEBmAIAAgIBAAECAQACAgEABQICAAECAQABAgkACIEBArMHAocBAbMHCoEBCQABswcGgQEBhwECswcBHQIACoEBCAABZAKHAQaBAQGHAQGzBwGHAQIACoEBCAAB3QEChwEEgQEBhwEBgQEBAAGBAQFkAgABhwEIgQEBAggAAd0BARwChwEFgQEFAAmBAQECCAAB3QEDhwEFgQEDAAFkAQAKgQEIAAHdAQKHAQaBAQQAAWQHgQEBswcCgQEIAAHdAQGIAQeBAQQAAWQJgQEBiAEIAAHdAQGHAQWBAQGHARCBAQoAAYEBAYgBAoEBAQIRgQEJAAKBAQQdAYEBAx0NgQEJAAEjBgABpAEEAAGBAQEYARIBGAcSCQABgQELAAHdAQHkBwEAA50IAQACnQgXAAHdAQHkBx4AAd0BAeQHHgAB3QEB5AceAAHdAQEjHQABVAHdAQGIAR0AAVQB3QEBgQEBAAGBARsAAVQB3QEBgQEBAAWBARcAAVQCgQEBAAMCA4EBFgABEwEjAQABkggBAAK7Aq8CAAQCAQADAgMAAQICAAUCAQACAgkAAocBBYEBA7MHAgABhwEJgQEBAggAAWQBswcFgQEBhwEBgQEEAAFkAYcBCIEBAQIIAAFkBoEBAYcBAYEBBAABZAmBAQECCAAB3QEBswcGgQEBHQUAAYcBCIEBCQAB3QEDhwEDgQEBiAEBgQEFAAGHAQiBAQkAAd0BAYEBAocBA4EBAYgBAYEBBQABhwEJgQEIAAHdAQEcBYEBAocBBQAKgQEIAAHdAQiBAQUAAR0JgQEKAAeBAQQAAR0JgQEBiAEKAAGBAQGIAQGzBwGBAQGHAQKBAQQAAYEBAYcBCIEBAYgBCgABgQEDswcChwEQgQEJAAEjBbMHByMBgQECEgEYARICGAISCgABIwUAASMBgQEBAAGBAQEAAYEBAd0BAYEBEgABIwUAASMFAAHdAQGBARIABx8FAAHdAQGHAR4AAd0BASMeAAHdAQGBAR4AAd0BAYcBHgAB3QEDgQEcAAGBAQGHAQaBARgAAR0BgQEBhwEDAgGBAQGHAQGIARcAASMBqAEBkggdAAGBAZMCAAICAQABAgEAAwIGAAMCDgABZAGzBweBAQIAAdwBAgABZAWBAQGzBwGBAQICCQACswcGgQED3AECAAFkAYcBBoEBAbMHAR0JAAGzBwaBAQGHAQPcAQIAAWQBhwEFgQEBswcBAgoAAYcBB4EBA9wBAgABhwEIgQEKAAEcAYcBBIEBAYgBAR0D3AECAAGHAQiBAQoAAYcBBoEBAYcBA9wBAgABHQeBAQGIAQoAAYgBBYEBAYgBAYcBA9wBAgABHQGHAQeBAQoABoEBAYcBBNwBAgABgQEBhwEHgQELAAaBAQEAA9wBAgAJgQELAAGBAQKHAQOBAQEAA9wBAgAJgQELAAOBAQGzBwGHAQGBAQEAA9wBAwABhwEHgQELAAGzBwPXAwGzBwEjAQAD3AEDAAGBAQESARgFEgEYCgAB5AcDAAHkBwGBAQcAAYEBHwABhwESAAYfBwABgQEfAAEjHwABgQEfAAGBAR8AAoEBHQAGgQEBiAEZAAGBAQGHAQMCAYEBAYgBGQABIwGeCAG7AgEAAbsCrgIABAICAAECCQADAgIAAgIGAAFkAQABgQEBswcBgQEBswcEgQEBiAEGAASBAQWzBwgAAYEBAbMHBoEBAbMHAdsBBAABZAGHAQSBAQGzBwGBAQoAARwGgQEChwEB2wEFAAaBAQsAAR0CgQEBhwEEgQEBhwEB2wEEAAGHAQeBAQoAAd0BAYcBAoEBAYcBBIEBBQABswcHgQEKAAHdAQiBAQUACIEBAYgBCQAB3QEEgQEBhwECgQEGAAEcAYcBB4EBCQAB3QEBhwEGgQEBZAUAAYEBAYgBBYEBAogBCQAB3QEBhwEGgQEGAAGBAQGHAQeBAQkAAd0BAYEBAYcBBYEBBwAIgQELAAKBAQGHAQOBAQcACIEBCwAFswcBIwcAAYEBBBgBEgIYARIKAAXkBwgAAYEBEgAF5AcIAAGHARQABB8HAAGHAR8AASMfAAGBAR4AAWQCgQEeAAKBAR0ABYEBAYgBGgABHQGBAQGHAQGBAQKIARoAASMfAAGBAYkCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gJUBAAGBAR8AAR0fAAEjHwABiAGfAgACAh4AA7MHAYEBHAABHQGzBwGHAR0AAh0BswcdAAGBAQEdAYcBHQABhwEBHR4AAocBHgABhwEBgQEeAAKBAR4AAoEBHgACgQEeAAKIAR4AAYgBHwABgQEfAAGHAR8AAYEBHwABIx8AAYgBHwABhwEBAAJkHAABgQEBAAJkHAADgQEBZBwAA4EBHgACIx8AAYEBnQIAAQIBAAICHAABgQEBswcBgQEBhwEcAAKBAQKHARwAAYEBAocBAR0cAAKBAQGzBx0AA4EBHQABhwECgQEdAAOBAR0AA4EBHQABgQEBiAEBgQEdAAOBAR0AAYEBAocBHQABgQEBhwEBgQEdAAKIAQGBAR0AAYcBAYEBAYgBHQABhwEBgQEBiAEdAAGHAQIjHgAChwEeAAGBAQGIAR4AAYgBAYEBHgACgQEBZBwAAYcBAYgBAoEBHwABI74CAAECHQAEgQEcAAOBAQGHARwAA4EBAYcBHAAEgQEcAAOBAQGzBxwABIEBHAADgQEBiAEcAAOBAQGIARwABIEBHAADgQEBiAEcAASBARwABIEBHAADgQEBhwEcAAGBAQKIAQGHARwAAYcBAYgBAYEBAYcBHAABiAEBgQEBAAEjHwABgQEfAAGHAR8AAYgBHwABgQEcAAGIAQGHAQGIAQGBAd4CAAICHAAEgQEcAASBARwAA4EBAYcBHAAEgQEcAASBARwABIEBHAAEgQEcAAOBAQGIARwABIEBHAADgQEdAASBARwAA4EBAYgBHAAEgQEcAAGBAQKIAQGBARwAARwBiAEeAAGHAQGIAZ4BAAGBAQGIAd4CAAECAQACAhwABIEBHAAEgQEcAAOBAR0AA4EBHQADgQEdAAKBAQGIAR0AA4EBHQAEgQEcAASBARwABIEBHAAEgQEcAAKBAQISHAABgQEBiAEeAAGHAQGIAR4AAYgBAYEBvgEAAYgB4QIAAQIdAAOBAQECHAACgQEBAgEdHAADgQEdAAKBAR4AAoEBHgACgQEeAAOBAR0ABIEBHAADgQEdAASBARwAA4EBAYgBHAACEgEYARIcAAGBAQGIAR4AARwBgQHeAQABiAHfAgABAgEAAgIcAAKBAQECAbMHHAABgQECAh0AAoEBAQIdAAKBAR4AAoEBHgACgQEeAAOBAR0AA4EBHQADgQEBiAEcAASBARwABIEBHAACEgEYARIcAAKBAf4BAAGBAd8CAAECAQACAhwAAYEBAgIBswccAAGBAQECAR0dAAGBAQGzBx4AAQIfAAGBAR8AAoEBHgABgQEBiAEBgQEdAAOBAQGIARwABIEBHAAEgQEcAASBARwAARIBGAISHAADnQjeBAACAh0AAYEBAQIBswcdAAGBAQGzBx4AAQIfAAEdPwABgQEfAAGBAR8AAYEBAYgBHgABiAEDgQEcAAOBAQGIARwAA4EBAYgBHAACEgEYARIcAAGdCN8EAAICHgACAgGzBx0AAQIBswceAAEdXwABgQG/AQABGAIS/QQAAwIdAAICAbMHHQACswe+AgABEv8EAAICHgACswfeDwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("CAACAgIABQIIAAMCCwABZAGzBwEjA7MHAoEBASMBHQYAAWQDgQEBswcMAAEdASMDswcCgQEBIwGzBwYAAWQDgQEBswcMAAEcASMBHQGzBwKIAQGBAQEjCAABiAEEgQELAAHdAQEjAYcBAYgBARwCgQEBIwcAAogBA4EBAYgBCwAB3QEBIwGBAQMcAYEBASMHAAGHAQWBAQsAAd0BASMCgQEBHAGIAQGHAQEjBgABHAaBAQsAAd0BASMCgQEBhwEBHAGHAQEjAWQFAAKHAQSBAQGIAQsAAd0BASMBgQEBhwEBiAEChwEBIwYAAYcBBoEBCwAB3QEBIwSBAQGIAQEjBgABHQaBAQsAAd0BASMFgQEBIwcAAYEBAYgBAYcBAoEBAYgBCwAB3QEBIwEABIEBASMIAAKHAQOBAQwAASMCAAQjCAABhwECEgEYAQACEgoAASMDAAGBAQEAASMIAAGIARAAASMFAAEjCAABiAEVAAIfCAABgQEeAAFkASMeAAFkAYEBHgABZAGHAR4AAWQBgQEfAAKBAR4AAoEBAogB0wIAAQIJAAMCDgAB3AEBAAHcAQEAAYcBAR0IAAFkAYEBArMHDgAB3AEBAALcAQGBAQGHAQcAAWQDgQEBswcNAALcAQEAAdwBCgABswcDgQEOAALcAQEAAdwBAWQJAAKzBwKBAQ4AAtwBAQAB3AEKAAGzBwGBAQGIAQGBAQ4AAtwBAQAB3AEKAAKHAQOBAQGIAQwAAtwBAQAB3AEKAAGHAQGBAQGHAQOBAQwAAtwBAQAC3AEBAAFkBwABhwEFgQEMAALcAQEAAtwBCgAEgQEBiAEMAALcAQEAAtwBCgAEhwEBgQEMAAHcAQIAAtwBCwABhwEDgQEPAALcAQsAAYcBAhIBGAESGgABZAGBAR4AAWQBhwEfAAGHAR8AASMeAAFkAYEBHwABgQEfAAGIAR4AAoEBgAMAAwIaAAJkAQABgQEBswcBgQERAAFkCQACZAKBAR4AAYEBAYcBHAABZAEAAocBHgABgQEBiAEdAAFkAoEBHgABHQGBAQGIAR0AAogBAYEBGwABhwEDgQEdAAFkAocBHgACgQEeAAKBAQESHQABhwEBgQEeAAGBAQGHAR4AAoEBHgACIx4AAocBHgABiAEBhwEeAAKIAbIDAAFkCAABZAQAAYcBGwABZAEAAWQBAAGzBx8AAbMHHwABgQEfAAEcHgABgQEfAAGBAT4AAWQfAAFkQQABhwEfAAGBAR8AAYcBHwABgQEfAAEjHwABhwEfAAGBAaPjAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          ruinStoneLarge3: dG("ruinStoneLarge3", {
            x: 38,
            y: 39,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gFEAARwfAAEcHwABhwEfAAGHAR8AAYcBHwABhwEfAAGHAb8NAAECHwABhwF/AAHbAR8AAdsBHwAB2wGhBgABAh0AAYcBArMHXQAB2wEfAAHbAR8AAdsBHwAB2wGgBgACAh0AAoEBAhwfAAEcngEAAYgBHwABHB8AARwfAAEcHwABiAEfAAGIAR8AAYgBHwABiAEfAAGIAR8AASP9AwABAgIAAQIcAAOHAQEcHQABHAKHAR0AA4cBHgABhwEfAAGHAR4AAocBHQACgQEBhwEdAAKBAQGIAQGBARwABIEBHAACgQEBiAEBgQEcAAKBAQEfAYEBHAAEgQEcAAKBAQGIAQGBARwAAoEBAYgBARwcAAOBAQEcHAABiAECgQEBIxwAAogBARwdAAGIAQGBAQEcHQADgQEdAAKBAQGIAR0AAYEBAogBHQACiAEBHB0AAYEBAYgBARwdAAIKARwfAAGIAR8AAYEBHwABiAEfAAGIAR4AAYYBAYgBHQABHwKIAR0AAYEBAYgBAeQHHgACAh0AARkBHAGHAR4AARwfAAEcHwABhwEfAAGHAR8AAYcBHwABgQEgAAGIAR8AARwfAAGBAR8AAYEBHwABiAEfAAGIAR8AAYgBHwABgQEfAAEcHwABgQEfAAFtHwABgQEfAAGBAR8AAYgBHwABgQEdAAITARwfAAEKnwEAAYYBHwABgQEfAAGBAR0AAQIfAAEZAocBXgABhwEfAAGHAR8AAYEBQAABiAEfAAGIAR8AARwfAAGBAR8AAYEBAWQeAAGIAR0AAhIBgQEfAAGBAR8AAYEBHwABbR8AAeIHHwABbR8AAYEBHwABgQEfAAEcHQACEwGBAR8AAQq/AQABHx8AAYEBHQABAgGsAR4AARkChwEeAAGHAQHbAR4AAYcBAdsBHgABhwEB2wEeAAGIAQHbAX8AAYgBHwABiAEfAAHiBx8AAeIHIAABZBwAARgBEgGBAQFkHAABgQEBLwEcHQABgQEBAAFtHQABgQEBAAHiBx0AAYEBAQAB4gcdAAGBAQEAAeIHHQABgQEBAAFtHQABgQEBAAGIAR0AAYEBAQABgQEdAAEZARMBgQEfAAEKXQABYx8AAWMfAAFjHwABYyEAAYYBHwABAh0AARkChwFeAAEcAdsBnwEAAYgBHwABgQEfAAGBAR8AAYEBHwABgQEdAAISAYEBHwABgQEfAAGBAR8AAW0fAAHiBx8AAW0fAAGIAR8AAYgBHwABiAEdAAIZAYEBHwABCr8BAAEfHwABgQEfAAECHQABEwGBAQGHAR4AAYcBAdsBHgABgQEB2wEeAAGIAQHbAR4AAYEBAdsBXwABHB8AAYgBHwABiAEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAW0fAAGIAR8AAYgBHwABiAEfAAGBAR0AAhkBgQEfAAEKnwEAAYYBHwABgQEfAAGBAR8AAgIcAAKBAQIcHQAChwEBHB0AA4cBHgABhwEfAAGBAR0AAdsBAQABgQEdAAHbAQEAAYEBAYgBHAACgQECiAEcAAKBAQKIARwAA4EBAYgBHAACgQEBHwGBARwABIEBHAAEgQEcAASBARwABIEBHAABiAECgQEBIxwAA4gBHQADiAEdAAKBAQGIAR0AAoEBAYgBHQABgQEBHAGBAR0AARwBgQEBHB0AAoEBARwdAAIKAYEBHwABgQEfAAGBAR8AAYEBHwABHB4AAYYBARwdAAEfAoEBHQACgQEB5Ac9AAOHAQEcfAAB2wEfAAHbAR8AAdsBIQABiAEfAAEcHwABgQEfAAGBAR8AARwfAAEcHwABHB8AARwfAAEjnQQAAYcBARwBswfdBwABAh8AAYcB/wcAAYcBHwAB3gEfAAHeAZ8HAAECHwABhwEB2wEeAAEcAdsBHgABswcfAAEcHwABhwEfAAGHAR8AAYcBHwABiAEfAAGIAR8AAYEB3wUAAbMHAdsB3icA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("nXgAAuQHART8BwAB5AcDFB0AARQBAAEUHQAB5Ae+BwAB5AcBFAGzBx8AARoBswceAAEUARoeAAHkB50HAAEUARofAAEaAbMHHwABGgHWAx8AARQfAAHkBx8AAeQH3AYAAeQHARoBswcfAAEaAbMHHgACGh4AAeQHnQcAAeQHAxodAAEaAQABFB0AAeQHvwcAAuQHARTgVwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gHgAAuQH/gcAAhQB5AceAAEUHwAB5Ae+BwABswcBFAHkBx0AARQfAAEUHwAB5AegBwACFB0AAbMHARQeAAEavwcAAbMHARQB5AcdAAEaHwABFB8AAeQHnwcAAhQB5AceAAEUHwAB5Ae+BwAC5Af+VwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("EgAFAgEAAQIWAAGzBwEcARMBGQUTAYcBAbMHAWQUAAGzBwEcAS8BAAQQAc4BARwXAAGzBwGSCAEABZIIAbMHFwABgQEHAAGHARcAAYEBBwABhwEXAAGHAQcAAYcBFwABgQEHAAGHARcAAYEBBwABgQEXAAGBAQcAAYEBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQcAAYEBHwABgQEeAAEUAYEBHQACGgGzBxwAAhodAAGBAQEaHgABswcfAAHkB5wDAAMCAQACAgEAAgIVAAeHAQEcAYEBAYcBARwVAAGHAQEcAoEBAocBARwBgQEDHBUAC7MHFQADgQECcAHuBwJwAYcBAhwVAAOHAQFvAeUHAe4HAeUHAW8BgQEBhwEBHBUAA4cBAW8B5QcB7gcB5QcBbwOHARUAA4cBAW8B5QcB7gcB5QcBbwGBAQKHARUAA4EBAW8B5QcB7gcB5QcBbwKBAQGHARUAARwCgQEBbwHlBwHuBwHlBwFvA4EBFQABHAKBAQFvAeUHAe4HAeUHAW8DhwEVAAGBAQIfAXAB5QcB7gcB5QcBcAIfAYcBFQADgQEBhgEBcAHuBwFwAYYBA4cBFwACgQEBHwHuBwEfBIEBGAACgQEBhgEFgQEZAASBAQEaAbMHASMaAAKBAQEaAQAB5AcbAAGBAQEaHgABswcfAAHkB5sDAAICAQABAgEAAQIBAAECFwABswcBhwECswcBHAKzBwEcAbMHARwWAAHdAQGHAQcAARwB2wEWAAGzBwcAAbMHAdsBFQAB3QEBhwEHAAGHAQHbARUAAd0BAYcBBwABhwEXAAGHAQHcAQYAAYcBFwABhwEB3AEEAALcAQGHARcAAYcBAdwBBAAC3AEBgQEXAAGBAQLcAQMAAtwBAYcBFwABgQEC3AECAAPcAQGHARcAAYEBAtwBAgAD3AEBhwEXAAGBAQPcAQEAA9wBAYcBGAABFAXcAQEUAYcBGQABFAPcAQEUAVgBgQEaAAEUAdwBARQBUAEUASMaAAFYARQBWAEaHQABUAEUHgAB5AfbAwAC3AEFAALcARcAAdwBBwAB3AEXAAHcAQcAAdwBFwAB3AEHAAHcARcAAdwBHwAB3AEfAAHcAQIAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AFfAAHcAR8AAdwBjOQBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pG.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pG.c)("gIACAA==")
          }]),
          ruinStoneMedium1: dG("ruinStoneMedium1", {
            x: 11,
            y: 16,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BAABAgEAAgIBAAECAgABAhcAA7MHAYgBAQACswcBiAECswcBAAGHARUAArMHAYgBAwABiAEBHQGzBwEAAYcBFwABiAEDAAGBAQEAAR0BAAGIARcAAYEBAwABiAEDAAGHARcAAYcBAwABgQEDAAGBARcAAYEBBwABiAEXAAGHAQcAAYgBFwABhwH7BQAFAgEAAQICAAMCFAABiAEEIgGzBwUiArMHEwABhwEBHAMiAbMHAR0BswcDIgGzBxQAAYgBArMHARwCIgKzBwEiARwBIgEcFAABgQECHAGzBwEiARwBswcBHAEiAbMHARwBswcUAAGBAQEiARwCIgGzBwIcASIBswcCHBQAAYEBBSIBHAIiAhwVAAGIAQMAARwCIgGzBwMiHgACIvcFAAciAQICAAICEQABHQwiArMHEQABswcLIgEcAR0TAAEdCiIBHBQACyIBHBQADCIUAAEiARwBIgEECCIYAAEcASICBAQiHAABHAEEASL1BQAJIhYAAbMHBSIDswcEIgGzBxIAAR0FIgOzBwQiAR0SAAGzBwUiArMHARwEIgEdEgABHAUiARwBswcBHAMiAR0TAAIiAQQDIgIcAbMHAyIBHBYAAiIBswcBIgEcBSIZAAciHAABHAEEAiLyBQALIgEAAwIRAAGHAQQiAbMHAYgBA7MHAYEBAyIBiAERAAGHAQQiAbMHAYgBArMHAQABiAEDIgGIAREAAR0EIgGzBwGIAQMAAYgBAyIBiAERAAGBAQUiAYEBAwABgQEDIgGIAREAAYgBAiICBAGzBwGBAQMAAYgBAyIBiAERAAGIAQUAAYEBAwABgQEDIgGBAREAAYEBBQABiAEDAAGBAQMiAYEBFwABiAEDAAGHAQMiAYgBGwABhwECHAEiAYcBGwABiAEDAAGHARsAAYEBAwABhwEbAAGIAQMAAYcBHwABhwHSBAABAgIAAgICAAMiFQABswcDIgGBAQGzBwQAArMHAiIBHREAAR0DIgYAA7MHASIBswcRAAEdAyIBiAEGAAEcAiIBHREAASIBBAGzBwEiAYcBBgABswcBIgEcFgABhwEGAAEcASIBswcWAAGIAQYAAiIBHB0AAiIBHB0AAyIcAAGHAQEiAbMHASIBhwEbAAGHAQMAAYcBOwABgQEjAAGHAdAEAAICAgABAgEAAQICAAMiAQITAAGzBwUiAYgBBAACswcCIgGzBxEAAR0DIgHPAQGIAQQAArMHAiIBHREAAbMHBCIBgQEFAAGzBwIiAbMHEQAEIgEAAYcBBQABHAEiAR0dAAEcASIBHB0AARwCIh0AAyIdAAMiHQABIgHRDAEiHAABhwEDAAGBAbAFAAICAQACAgEAAgIBAAMiBAIQAAEdBiIBswcDAAWzBxAAArMHBiIEAAOzBwEdEQABHQEiAQQBswcBHAYAAbMHARwBswcSAAEiARwKAAEcAR0eAAGzBwEcHgACHB0AASIBHAEiHQADIhwAAYEBAyIBgQEbAAGBAQEAAc8BAQABgQGxBQABAgIAAQICAAICAyIBAgIAAS8RAAKzBwQiAYEBAiIBAAGIAQOzBwGIARIAAbMHAiIBswcBIgEcAwABhwEBAAKzBwGIARIAASIBBAEiBgABhwEDAAGIAR8AAYcBHwABhwEfAAGBAR8AAYEBGwABgQEDAAGBARsAAoEBAQABhwEBgQEbAAKBAQOHAR8AAYcBHgABgQEBiAEeAAGBAdQEAAQCAQABAgIAAbMHFwABiAEEswcCIhkAAYgBAbMHAiIcAAGHAR8AAYcBgwcAAQIfAAEiARzXrwEA")
          }]),
          ruinStoneMedium10: dG("ruinStoneMedium10", {
            x: 13,
            y: 30,
            z: 28
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          ruinStoneMedium11: dG("ruinStoneMedium11", {
            x: 11,
            y: 20,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("KQAB3gECAAHeAQMAAd4BATAXAALeAQEAAd4BAwAC3gEBAAHeARQAA94BAQAC3gECAALeAQEAAd4BFAAD3gEBAALeAQIAAt4BAQAB3gEUAAPeAQIAAd4BBQAB3gEVAALeAQIAAd4BBQAB3gGzBgABAgIAAQIBAAECAQABAgEAAwIBAAICAgABAgEAAgIFAAKBAQIcAQABHAEdAhwDHQIcAR0CHAEdARwCHQIcAR0BAAIdBgABgQECAAEdARwBgQEBHAGBAQEdAhwBHQGBAQEcAR0BHAKBAQEdARwBHQGIAQEdARwBHQcAAYEBAxwCgQEBHQEcAQABHAKBAQIdAgABgQEBHQEcAh0BgQEBHAIdCAACgQEBHQIcAYEBAR0DgQEBHAGBAQEcAYEBAxwBgQEBHAGIAQEcAR0BAAHbAQoAAYEBAR0DgQECHQEAAYEBARwBgQEBHAGBAQEAAR0BHAEAARwBgQECAAHbAQkAAYEBARwBiAEBHAHeAQGBAQEcAYEBAR0BgQECHAGBAQIdAYEBAR0BHAEdARwCAAHbAQsAAYEBARwBgQECAAEdAYEBAQABiAEBgQEBiAEBHQGBAQEAAYgBAYEBAYgBAoEBARwB2wEMAAEcBIEBAYgBAoEBARwFgQEBHAGIAQEcAYEBAYgBCwAEiAEBHAiBAQEcA4gBAoEBAYgBCwABiAEBgQEBHAKBAQGIAQiBAQKIAQEcAYEBAogBAYEBCwADgQEBiAEDgQEBiAEDgQEBiAEHgQEBiAECgQEKAAGBAQGIAQaBAQEAAYEBAYgBAoEBAYgBAoEBAYgBA4EBAQABgQEKAAiBAQGIAQEABIEBAYgBBIEBAcwBDAABiAEBgQEBiAECgQEBiAECgQEBAAmBARAAB4EBAQACgQECAAaBAQ8AAYEBAogBAoEBBgADgQEBiAEEgQENAAGIAQEAAYEBAQABgQEGAAGBAQEAAYgBAQABgQEBAAGBAcwDAAECAgABAgwAAgINAAJCAQACQgwAAkIBAAJCCgABQgE/AUIBOwFCAQAC3AECAAEzBgABQgE7AUIBPwFCCwABQgE7AkIBAALcAQEAAVQCMwUAAkIBOwFCCwABQgE7AUIBOwEzAUIC3AECVAIzAVQDAAFCATMBOwFCATsBQgsAAkIDMwFCAdwBAlQCMwJUAQABQgMzAUIB3AEBQg0AAUIDMwFCAlQCMwJUAUIDMwFCAQAC3AEKAAQMAUICMwFCAlQCMwJUAUIBMwEvAUICDALcAQoAAoMBAQACgwEDQgJUAjMBvQcB3AEDQgWDAQoABwwBGgJUATMBvQcBAAHcAQEaBwwKAAaBAQEaAQwCVAIzAQAB3AEBDAEaA4EBA4gBCgAGVAEMARQCVAHNAQEzAVQB3AEBFAEMBFQBAAFUDAAGFAJUAjMCVAYUDwAFVAYfBVQXAAKBARwAAYEBAVQCFAFUAYEBGQABgQEGAAGIAfIDAAEUBAACFAEAARQBAAQUAQACFBoAAtwBBgAB3AENAAHcAQkAAtwBBgAC3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBFAAB3AEJAALcARQAAdwBCQAC3AEyAAGBAUEAAYgBIAABiAEgAAGIASAAAYEBBAACgQEaAAOBAQFUAhQBVAKBAQGIARcAAYgBAwAB0QwBAAHdAQGBAfEDAAEcAQABHAcAARwBAAIcAQACHAEAAhwWAAHRDJYCAAGIASAAAYgBIAABgQEgAAGBASAAAYgBBAACgQEEAAGIARUAAoEBAYgBAVQCFAEAAYgBAYEBAYgBFwABgQEFAAHdAQGBAfUDAAECAgABAgYAAQIVAAFUAgABgwEBvQcDAAGDAQEAAYMBAb0HAYMBAVQB2wERAAGBAQgAARwBAAGBAQEAARwB2wEQAAHdAQGBAQgAAdwBAwABgQEB2wEQAAHdAQEcCAAB3AEDAAGIAQHbARAAAd0BARwIAAHcAQMAARwB2wEQAAHdAQEcCAAB3AEVAAHdAQGIAQgAAdwBAwABiAERAAHdAQGIAQgAAdwBAwABiAEOAAGBAQIAAd0BAYgBCAAB3AEDAAGBAQ4AASMBgQEBAAHdAQGBAQgAAdwBAwABgQEPAAEjAYEBAd0BAYEBCAAB3AEDAAGBARAAASMCgQEIAAHcAQMAAoEBEAABIwGBAQgAAdwBAwABgQEBIxEAASMBgQEEAAKBAQEAAdwBAgABgQEBIxMAASMCgQEBiAEBVAEvARQBVAHcAQKBAQEjFQABIwGIAQUAAd0BAYEBASOfBAAB3AEfAALcAR8AAdwBEAAB3AEOAAHcARAAAdwBDgAB3AEQAALcAQ0AAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEQAB3AEBAAHcAQsAAdwBHwAB3AEfAAHcARkAAoEBBAAB3AEWAAGBAQGIAQFUAc8BARQBVAGIAQGBAR4AAd0BAYEBmwUAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBAYEBHAABgQEBAAIUAVQBiAEBgQEfAAGBAbsHAAKBAR0AAVQCFAFUAoEBHwABgQG7BwACgQEgAAFUj7QBAA==")
          }]),
          ruinStoneMedium2: dG("ruinStoneMedium2", {
            x: 19,
            y: 15,
            z: 19
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          ruinStoneMedium3: dG("ruinStoneMedium3", {
            x: 16,
            y: 18,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          ruinStoneMedium4: dG("ruinStoneMedium4", {
            x: 20,
            y: 15,
            z: 23
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          ruinStoneMedium5: dG("ruinStoneMedium5", {
            x: 16,
            y: 24,
            z: 18
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("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")
          }]),
          ruinStoneMedium6: dG("ruinStoneMedium6", {
            x: 21,
            y: 15,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BwABHIAIAAEcLQABZAsAAWQfAAGWAZ8HAAMCAwACHAMAAQIBAAICAQAFAgsAAYgBAR0BHAEdAYgBA94BAYgBAR0BHAEdAYgBAR0BHAEdAYgBAR0BHAEdAYgBAWQKAAGIAQFkAt4BAYcBA94BAYEBAQAC3gEBiAEB3gECAAGBAQFkAt4BAYgBAZYBCgABgQED3gEBhwED3gEBgQEBAALeAQGIAQHeAQQAAt4BDAABgQED3gEBgQED3gEBhwEBAALeAQGBAQUAAd4BAdsBAYcBCwABhgEBgQEB3gEBgQEBhgEBgQEB3gEBhwEBhgEBgQEB3gEBhwEBhgEBgQEEAAHeAQGHAQGGAQsACoEBAYcBA4EBBQACgQELAAGBAQMAAYEBAwABgQEDAAGBAQcAAYEBiQYAAQIBAAQCAQABHAYABQIBAAECAQABAgkAAR0BAAQdAdsBAwAB7AMMHQoAAR0BZAEdAQABHQHbAQEAAd4BAQAB3QEBHAEAAx0BAAMdAd0BAR0BZAwAAR0BAAEdAdsBAQAB3gEBAAHdAQEdAQADHQEAARwDAAEdAdsBCwABHQEcAQACHQEcAd4BASICHQEAARwBHRMAAYEBATAGHAEAARwBHQEcAR0FAAEcASIBgQELAAGBARIAAR0BgQELAAFkoAYAAQIDAAECARwCAAMCAgACAgEAAgIBAAECCwABHAEdAQABMAHbAQMAAesDCx0BHAsAAR0BAAGzBwEdAdsBAwAB3QEBHQGzBwMdAbMHAx0BswcBAAHbAQsAAd0BAQABswcBHQHbAQMAAd0BAR0BswcDHQGzBwMdAbMHAWQB2wELAAIdAbMHAh0CAAEiAh0BswcDHQGzBwIAAR0CAAHbAQsAAYYBAcwBAb0HAQABHAEAAR0CHAIAAhwBIgEdAgABHAEAASIB2wELAAGBAQYAAdEMDAABgQGqBgABAgEABAIBAAIcAgADAgEABgILAAMdAQABHQQAAWYCHQEvCR0LAAFmAx0B2wEBAAHcAQEAAd0BAR0CAAIdAQAFHQFlCwAB3QEBHAIdAdsBAQAB3AEBAAHdAQEdAQABHAIdAQABHAMdDQAB3QECHQEcAR0BHAHcAQEiAR0BHAEAASIBHQEiAQAEHQEiDAABgQECIgEdAQACHAEiAxwBIgGzBwEdASIBHAEiAQACHAGBAQsAAYEBBAABHQ4AAYEBqwYAAgIBAAECAQADHAcCAgABAgIAAQILAAEaAWQBAAFkARoDAAEaAR0BHAEdAYgBAR0BHAEdARoBAAJkARoLAAEaAwABGgMAARoB3AEBAAHcAQGIAQHcAQEAAewDARoCAAHsAwEaCwABGgMAARoDAAEaAdwBAQAB3AEBhwEB3AEBAAHcAQEaAwABGgsAARoDAAEaAwABGgHcAQEAAdwBAYcBAdwBAQAB3AEBGgMdARoLAAGGAQGBAQGzBwGHAQGGAQGBAQEAAYEBAYYBAYEBAQABgQEBhgEBgQEBAAGBAQGGAQEdARwBIgGGAQsAAYEBAwADhwEIgQEChwEDAAGBAQsAAYEBAwABgQEDAAGBAQMAAYEBAwABhwEDAAGBAYkGAAEcAQABHAIAARwKAAECAQABHAEAARwBAgIcAQABHAgAAd0BCAABZAIAAWQBAAGWAQEAAd0BAQAB3QEBAAHbAQsAAd0BCwABZAMAAd0BAQAB3QEBAAHbAQsAAd0BAwAB2wELAAHdAQEAAd0BAQAB2wELAAHdAQIdASIB2wELAAHdAQIdASIB2wELAAGHAQEdASIBswcBgQELAAGHAQEiAR0BswcBgQELAAGHAQMAAYEBCwABhwEDAAGBAaoGAAEcAQACHAEAAhwBAAEcAQABHAEAAQIDAAEcAQABHAEAAxwKAAHdAQEAAd0BDwAB3QEBAAHbAQsAAd0BAQAB3QEPAAHdAQEAAdsBCwAB3QEBAAHdAQ8AAd0BAQAB2wELAAHdAQEAAd0BDwAB3QEBAAHbAQsAAd0BAR0BAAEcDAABhgEBIgEAARwB2wELAAGHAQMAAYEBCwABhwEBHQEAAb0HAYEBqgYAARwBAAMcAQIDHAEAAxwBAAEcAgABAgIcAQABHAEAARwNAAHbAQsAAd0BAwAB2wEPAAHbAQsAAd0BAwAB2wEPAAHbAQsAAd0BAwAB2wELAAHdAQEcAh0B2wELAAHdAQEcAh0B2wELAAGBAQEcAbMHARwBhwELAAGBAQEcAR0BHAGHAQsAAYcBAwABgQELAAGHAQMAAYEBrAYAAgIBAAECAwABHAIAAhwBAAEcAwABAgEAAQILAAEaAwABGgsAARoB7AMBAAHsAwEaCwABGgMAARoLAAEaAwABGgsAARoDAAEaCwABGgMAARoLAAEaAx0BGgsAARoDHQEaCwABhgECHAEAAYYBCwABhgECHAEAAYYBDwABgQELAAGBAQMAAYEBDwABgQELAAGBAQMAAYEBiwYAAQIBAAECAQABAgIAARwBAAECAgACHAIAAQIBAAECAQABAgsABR0LAAUdCwABZgMdAdsBCwAB3QEDHQHbAQwAARwCHQHbAQsAAd0BARwCHQHbAQwAARwBHQEcAdsBCwAB3QEBHAEAARwB2wEMAAMcAYcBCwABgQEBHAEAARwBgQEPAAGBAQsAAYEBAwABgQGrBgAFAgIAARwFAAIcAQADAgEAAQILAAEcAx0BHAUAAbMHAWQEAAEcAx0BHA0AAbMHAQAB2wEGAAGWAQYAAbMHDwABswcBAAHbAQ0AAbMHDwABswcBAAHbAQ0AAbMHDgABswcBAAEcAdsBDAABHQIcEAABgQELAAGHAQMAAYEBqwYAAwIEAAEcAwABAgEAAhwBAAICAQACAgsABR0BAAHRDAIAAbMHAc8BAbMHAgAB0QwBAAUdDAADHQFkBQABswcFAAHdAQMdDQABHQEvASIB2wEFAAEjBQAB3QECHQ4AAx0B2wEFAAGBAQUAAd0BAx0OAAEcAR0BgQEFAAGGAQUAAYcBAhwBHQGBAQ4AAb0HAYEBBQABhgIFAAGBAQMAAYEBrAYAAQIBAAICAQABHAEAARwBAAECAQABAgIcBAACAgoAAWQBiAEDHQGIAQUAAbMHBQABiAEDHQGIAQoAAZYBAYcBAx0BhwELAAGIAQMdAYEBHAACHQ4AAR0BAAEdAYEBCwABhwEBHQGzBwEdAYEBDQABHAGzBwwAAYYBAwABhgEPAAEjCwABIwMAAYEBDwABgQELAAGHAQMAAYEBDwABgQELAAGBARMAAYEBCwABhwETAAGBAQsAAYcBrwUAAQIBAAMCAQADHAECAgADHAEAAgIBAAICCwAFHQsABR0MAAMdAWQLAAQdHQADHQ0AAx0OAAIdDAABgQEBswcCHAGBAQsAAYEBARwBAAEcAYEBCwABgQETAAGBAW8AAYcBCwABhwETAAGIAQsAAYcBjwUAAQIBAAMCAQABAgIcAwACHAECAQACAgIAAQILAAEcAx0BHAFkCgAEHQEcCwACZAGzBwFkAdsBCwAB3QEBHQGzBwEAAdsBDQABswcBAAHbAQ0AAc8BAQAB2wENAAGzBwEiAdsBDQABswcBIgHbAQwAARwBHQEiAYEBCwABgQECHAEdDAABgQETAAGBAY8BAAGIAZwFAAECAQACAgEAARwBAAMcAQIBHAMAAwIBAAECCwAFHQsABR0LAAFkAR0BAAEdAdsBCwACHQFkAQAB2wELAAFkAR0BAAEdAdsBCwAB3QEBAAEiAR0B2wELAAHbAQEcAQABIgHbAQsAAd0BAQABHQEiAdsBCwABgQEBHAGzBwEiAYEBCwADHAEiAYEBCwABhwETAAGBAW8AAYgBHwABgQGfBQABAgMAAQIEHAQAAQIBAAECDAABiAEDHQGIAQsAAYgBAR0BAAEdAYgBCwABiAEB3AEBAAHcAQGIAQsAAYgBAwABiAELAAGHAQHcAQEAAdwBAYgBCwABhwEDAAGIAQsAAYcBAdwBAQAB3AEBhwEMAAFkAgABgQELAAGGAQGBAQEAAYEBAYYBCwABhgEBhwEBAAGBAQGGAQwAAocBAYEBASMLAAEjA4cBAYEBDwABhwELAAGBAQMAAYEBDwABhwELAAGBARMAAYEBHwABgQHFBQABHAQAAQISAAJkEAABZB8AAZYBsgcAARwBAAEcAgABHPFfAA==")
          }]),
          ruinStoneMedium7: dG("ruinStoneMedium7", {
            x: 16,
            y: 23,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("JAABZEAAAmSeBwADHAECAhwZAASzBxwAA7MHHQADswcdAAIcASIdAAGBAQEcHgACgQEeAAEcAYEBHgACHP0FAAYcAQIBAAIcFgAFswcGAAGzBxQAAR0EswcbAAEdARwDswccAAEdARwCIgFkAQABZAMAAWQYAAEiARwBHR8AARwBHVkAAoEB3AUAChwBAgEcAgITAAazBwUAArMHEgABHQazBwUAArMHAWQRAAEdARwBswcBAAOzBwUAArMHFAABHQEAAiIBAAFkBAACHBcAARwBAAEcBAABHBoAARwCHQEcAQABgQEBZBwAAh0BgQEfAAGBARYAAR0BHAcAAYEBFQACgQEIAAEc2AEAAYEBHgADFB0AAYEBAQABgQGYAwAIHAEAAgIDAAECEgAHswcFAAKzBxEAAWQHswcGAAGzBwHcAREAAR0CswcCHAKzBwYAAbMHAdsBEwABHAGBAQIdAbMHBgABswcBZBUAArMHAhwFAAGzBxYAAR0DswcBAAIdAgABgQEWAAGzBwIdAgABHQMcAYEBFgABHAEdAbMHBgABgQEWAAGBAQEcAR0GAAGBARUAAoEBAR0BIgYAARwWAAGBAQEcAR0FAAEdFwABHAEUARweAAHkBwEiHwABgQEfAAGBARwAAYEBAiIBgQEbAAGBAQGHAQGBAQIiAYEBGgACFAMAAhQZAAGBAQUAAYEBlgMABhwBAgEcAgABAgEcAQABHAECEQAGswcBLwGzBwUAAd0BAbMHEQAGswcBAAGzBwHbAQQAAd0BAbMHEwABHQGIAQGzBwEdAQABswcB2wEEAAHdAQGzBwHbARMAAYgBAR0CAAKzBwQAAd0BAWQB2wETAAGHAQEdAwABHAEdGQABiAEBHQEAAhwBHQEcAR0YAAGHAQEcAgABzQEBswcBhwECHAEAAR0VAAGHAQEcAwABHAGHARkAAYgBAYEBAwABHQGBARkAAYEBARwDAAEcAYEBGQABgQEBHAMAAR0BiAEDAAEcFQABiAEBIgMAASIBiAEBAAKBARYAAYgBASIDAAKBARkAAYcBBAACgQEZAAGIAQGBAQMAAoEBGQABhwEBIgGBAQEiAQABgQEBiAEYAAGBAQEvAYEBAgABIgGBAQGIARgAARQFAAHPAQFkARS0AwAHHAEAAQIDHAECARwSAAWzBwHNAQGzBxkAAR0BHAOzBwEAAbMHHAABHQGzBwoAAdwBEwAB3QEBswcDAAEdARwFAAHcARMAAd0BAR0EAAIdGQABHQUAAR0ZAAGzBwUAAhwBIgEdFgABHAUAAR0BswcYAAEcBQABHRkAAYEBBQABHBkAAYEBBQABHBkAAYEBBQABIgIAAYEBFgABIgUAARwBAAGBARcAAYEBBQABIgGBARgAAYEBBQABIhgAAYEBAiIDAAGBAQEiGAACgQEDAAMiAYcBFwABFAcAARQXAAGBAQcAAYEBlAMABhwBAgQAAxwSAAazBxsAAR0BHAGzBx4AAd0BAbMHHgAB3QEBswcEAAEdGQAB3QEBswcHAAGzBwEdFgABswcBHAUAARwDHRUAAR0B2wEGAAEcASIBHAGBARQAAR0B2wEGAAIcFgABHQHbAQYAARwXAAEcAdsBBgABswcXAAGBAQHbAQQAAWQBHAEdFwABgQEB2wEEAAFkAQABHRcAAYEBAdsBBgABIgGBARYAAR0HAAEiFwABHQYAAWQBIhcAAiIBgQEEAAIiFwABIgUAAYEBAQABIhYAARQBZAcAAWS0AwAHHAICBBwTAAWzBwIAAd4BGgAB3QEBswcDAAHeARoAAd0BBAAB3gEaAAHdAQGzBwMAAd4BGgAB3QEBHAMAAd4BAgABHAIdFQAB3QEDHAEAAd4BAgABHAEwAQABHRQAAd0BAbMHARwGAAEdAQACgQETAAHdAQEcAbMHBgABHBYAAd0BASIHAAGzBxcAARwHAAEiFgABZAIcBQACHBcAARQBHAEdAwABHAEiARQXAAHeAQUAAmQ4AAHkBx8AAiIFAAFkFwABgQEBIgHbAR0AARQfAAGBAZ0DAAQcAQIBAAIcAQIDHAECFAADswcDAAHRDAHdARoAAdwBBAAB3QEZAAHdAQUAAd0BGQAB3QEFAAHdARkAAd0BBQAB3QEBAAEdAbMHFgAB3QEBHAEAAhwBHQHdAQEdAhwBHRUAAd0BAR0BMAGzBwUAAh0VAAHdAQEdAbMHBgABHQGBAQEdAYEBEwAB3QEBHQEcBgABswcWAAHdAQEcBwABswcWAAHdAQIcBQACHBYAAWQBIgQcAR0DHBYAAWQBgQEB3AEB0QwEAAFkARwXAAEiAdwBAd4BHQABIgHcAQHeAR0AASIB3AEB3gEdAAEiAd4BHQABFL0DAAEcAQICHAECAgABHAIAAhwCAnwAAbMHHwABswcZAAEdBRwBswcZAAGzBwEcBAABHRkAAR0FAAEdARwYAAEcBQABHAGzBwEcAYEBFgABIgUAAbMHGAABZAIcAwABHAGzBxkAAxwCHQIcGQABgQEB2wEEAAEcGQABIgHbAQQAASIZAAEiAdsBHAABZAEAASICgQEBHBoAAWQBhwEBgQEB2wEdAAEUHwABgQGdAwABHAEAAhwBAAECARwBAAIcAQABHAECWwACswceAAEdAbMHHgABHAEdGgABswcDHAEdARwZAAGIAQEdARwCAAEcAR0ZAAGHAQEcAwABHQEcGAABZAGIAQEcAwABHQMcAYEBARwVAAGHAQEcAwABHAGHAQEcGAABhwEDHQIcAYcBGQACgQEBHQGBAQEcAbMHAYgBGQABiAEBHAHkBwEAAeQHAbMHAYcBGQABiAEBIgHkBwEAAeQHASIBgQEZAAGBAQEiA+QHAQABiAEZAAGHAQIiHQABhwEDgQEbAAEUvQMAAhwBAAECBRwBAAIcGAAB3AEBAAKzBwEdGwAB3AEBAAKzBxwAAdwBA7MHHAAB3AEDswccAAHcAQKzBwEdHAAB3AEBHAGzBwEdHAAB3AEBswcBHAEdHAAB3AEBHAEdARwFAAEdFQABZAEABBwCAAMcFgABZAIdARwBAAEcAQABHAEAARwXAAMiAQABHBsAAoEBAR1DAAEcHQABiAEBHBoAAoEBHQABhwECgQEcAAIUHgABgQGeAwADHAICAQACHAECAQACAhcAAbMHAdwBBQACswcXAAGzBwHcAQUAAbMHGAAC3AEFAAGzBxgAAtwBAwABZAEAAbMHGAAC3AEDAAJkAR0YAAHcAQUAAWQBHRgAAdwBBQABZAEdGAAB3AECAAEcAgABHAEdGAAB3AEBAAFkAYEBAgABHQEcGAACZAEiAQACHAEdARwYAAMiAQABHAIAARwZAAGBAQEdBAABgQEfAAGBAR4AAYEBHgABgQE7AAGBAR4AAxQdAAGBAQEAAYEBnwMAAhweAAKzBwMAAbMHGgABswcEAAGzBxoAAbMHAWQDAAGzBxoAAbMHA2QcAAGzBx8AAR0fAAGzBx8AAR0DAAEdGgABHQGBAQMAARwaAAGBAQEdAYEBAh0BHBoAARwBgQECHQEAARwbAAGBAQMAARwfAAGBAdwEAAEcHwABswcfAAGzBx8AAWQeAAHcAR8AAtwBHgAC3AEeAALcAR4AAtwBHgAC3AEdAAPcAR0AA9wBloUBAA==")
          }]),
          ruinStoneMedium8: dG("ruinStoneMedium8", {
            x: 14,
            y: 18,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("JAACZN4HAAMCHQABIgGBAQEiHwABgQG7BwABAgEAAwIaAAGBAQUiAYEBHAABIgEEASIeAAGWAZsHAAQCAQABAhkAAWQHIhkAAYgBASIBBAEiAgQBgQEbAAGWAQHRDF0AAbMHHwABswcBAAIcHAABswcBAAIcHAABswcBAAKzBxwAAbMHAQACHRwAAbMHAQACHR4AAh38BAACAgEAAwIZAAGHAQUiAYcBGgABBAIiAQQBIhsAAZYBAQAB3gEB1QgeAAHeAQHWCBwAAbMHAQAB3gEdAAGzBwEAAd4BHQABHQEAAhwcAAEdAQACHBwAAR0BAAKzBxwAAR0BAAIdHAABswcBAAIdHgACHfsEAAcCGAABZAciGQABgQEFIgGBARsAAd0BAhwcAAGzBwEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABswcBAAIdHAABHQEAAh0cAAGzBwEAAh0eAAIdHQAEHBwAAxwdAAIcnAQAAQICAAMCGgABhwEFIgGHARoABSIbAAGzBwEAAhwcAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwBzAEBAAEcugQAAQICAAMCGgAGIhoAAYgBAc4BAyIBBBsAAbMHAcwBAgABlgEbAAEdAdsBHgABHQHbAR4AAR0B2wEeAAGzBwEvArMHHAABHQHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwCAAEcugQAAQIBAAECAQABAhsAAYgBBSIbAAECAyIBBBsAAbMHAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHNoEAAICAQABAgEAAQIaAAYiGgABgQEFIhwAAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAEdAd0BArMHHAABHQHdAQKzBxwAAR0B3QECswccAAGzBwHdAQIdHAABHQHdAQIdHAABswcB3QECHR4AAh0dAAQcHgACHL0EAAICGgABZAGBAQUiAYcBGgABBAEiAQQBIgEEGwAB3AEfAAHcAR8AAbMHHwABswcfAAEdAQACHBwAAR0BAAIcHAABHQEAArMHHAABHQEAAh0cAAGzBwEAAh0eAAId/QQABQIZAAciGQABgQEBIgIEASIBBAGIARoAAdwBAQAB0QwBAAGWARsAAdwBHwAB3AEfAAGzBx8AAbMHAQACHBwAAbMHAQACHBwAAbMHAQACswccAAGzBwEAAh0cAAGzBwEAAh0eAAId+wQAAgIBAAMCGgABiAEFIgGIARoAASIBBAMiHAABlgGgBwACAhwAASIBgQEBIgGBAQEiGwABiAEBAAGBAQEAAYEBuZcBAA==")
          }]),
          ruinStoneMedium9: dG("ruinStoneMedium9", {
            x: 14,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AgACAh4AA7MHHQABswcBHQGBAR0AARwB4gceAAEdHwACgQEeAAGIAQGBAQGIAR0AAoEBAYgBHQABgQEB4gf+BQACAh0AAbMHARkBEwEAAYEBGwABgQEDAAEcGwABHAMAAYgBGwABiAEDAAGBARsAAR0DAAGBARsAAYEBAhMBAAGBARsAAYEBAcwBHgABiAH/BQACAh0AAbMHARkCEwEAARMBswcZAAGzBwG9BwQAARwZAAGIAQUAAR0ZAAGBAQUAAYgBHwABgQHcBgABAgIAAQIZAAGzBwETARkDEwGBARkAAYEBAgAB0QwCAAGIARkAAeIHBQABgQEfAAGBAfoGAAICAQACAgEAAgIBAAICFAABgQEBGQQTAQACgQEDHAGBARMAARwGAAOBARYAAYEBBgABiAGZBwABzQEKAAECFAABgQECAAETARkGAAGzBxQAAYEBHwABiAEfAAGIAR8AAYEBHwABgQHABgADAh0AAbMHAYEBARMHAAGBARUAAYEBARwIAAEcFQABHAGHAR4AAoEBHgABiAEBgQEfAAGBAcAGAAECBQABAgEAAQIXAAGHAQUAARMBGQGzBxYAAWQBgQEHAAGHARYAAZYBARwfAAGBAf8GAAMCAwADAhcAAYEBARkBEwEAAxMBGQGzBxcAAR0HAAGIARcAAYEBnwcABAICAAMCFwABswcFEwEZARMBswcXAAEdBAAB0QwCAAEcHwABgQGaBwAFAhgAAYcBAgAFEwGHAR4AAaAIARwfAAGBAR8AAYgB9wYAAQICAAICAgACAhcAAYcBAgACEwEZAhMBswccAAGkAQEAAc4BAYEBHwABgQEfAAGBAfcGAAQCAQACAgEAAQIXAAGzBwGHAQOzBwEdAbMHAh0ZAAGBAQMdAocBAR0ZAAGBAQGIAQGBAQLiBwEdARwbAAGBAQGIAQOBAR0AAoEBAYgB+wYAAmQfAAGWAbaXAQA=")
          }]),
          ruinStoneSmall1: dG("ruinStoneSmall1", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("ghAAAQICAAGzBwEuAR0aAAGHAQMAAYgBHwABiAEfAAGBAR8AAYYBHgAChwEBgQEeAAGHAbsGAAICAbMHAYEBARwCHRkAAocBBQABiAEZAAGHAQUAAYcBHwABhwEfAAGGAR4AAYEBAYgBHwABgQG5BgABswcBzAED6AcBHAGzBxoAAYcB3QcAAR0BHAXoBwEdAQIXAAFkBwABgQF3AAGBAQcAAYcB2AYAARwF6AcBswcBAhYAAWQBiAEDAAHRDAMAAYgBFgABZAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQYAAWQBhwEXAAGBAQcAAYcBtwYAAbMHAR0F6AcBHAGzBxUAAmRIAAFkHwABZBcAAYEBBgABZAGHAR8AAWS4BgACHQPoBwEdAbMHmQEAAYcBBQABgQEBZB4AAWS5BgABAgGzBwEAAR0BHAEdGgABiAECAAHPAQIAAYgBGQABgQEFAAGIARkAAYEBBQABiAEZAAGGAQUAAYYBGQAChwEDAAKBARkAAYcBBQABgQG7BgABswcBAgEdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGHAQGBAdmuAQA=")
          }]),
          ruinStoneSmall2: dG("ruinStoneSmall2", {
            x: 11,
            y: 8,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AgACAgGzBwEdAgACAhcAAYgBAbMHAR0DAAGzBwEdAYgBAbMHFgABiAECIgMAARwBIgGIAQGzBxYAAocBBQABIgGBARcAAYYBBwABhgEfAAGBAdYGAAECBgABHQIAAbMHAS4UAAGzBwEcCQABhwEUAAEiAcwBCQABhwEUAAEiCgABgQGUBwABAgEAAR0IAAECFAABHQGzBwkAAYcBFAABswe/BwABswcEAAEd/gcAAbMHAQACHfsHAAMCAc8BAgIBswcZAAGzBwMdAbMHAYgBAmQZAAGzBwEcAiIBiAEdAAEingcAArMHAQACAhkAAbMHAYgBAdEMAgABHQGIAQFkGAABswcBiAEDAAGzBwGBAQFkGQABgQEDAAEiAYcBGgABhgEEAAGHARoAAYcB3wYAArMHAgABswcBAhgAAWQBswcBzQEEAAEiAmQXAAEcBQABswe5BwABAgIAAbMHGgACZAEdBQABswcYAAFkAbMHBQABHBkAASKfBwABswcBAh4AAWQCswceAAGzBwEcurcBAA==")
          }]),
          ruinStoneSmall3: dG("ruinStoneSmall3", {
            x: 12,
            y: 9,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("BgADAh0AArMHAYgBHQABIgEAAYEBuAcAAQIBAAECAQABAgEdAQABswcYAAGHAQEAArMHAYcBAc0BGgABgQEBAAIiAYgBHQABIgEAAYEBnAcAAQICAAEdAbMHAR0aAAGHAQEcHgABiAEfAAGBAR8AAYYB/wYAAQIBswcCAAGzBxoAAWQBswcfAAEiwAcAAgIEAAECFgACZAKzBwEcBAABhwEBiAEXAAGzBwEiBQABhwG6BwABAgEdAwACAhcAAWQCswcEAAGHAQGzBxcAAWQBIgGzBwUAAbMHGQABIgUAASKYBwABAgHNAQGzBwEdAgABswcXAAJkAYEBARwFAAGzBxgAAYEBBgABIhgAAYgBBgABIhgAAYYBBgABIhgAAocBHwABhwHABgABswcCAAGzBwEdAQIXAAFkAbMHAdEMBQACHRcAASIHAAEiFwABIgcAASKZBwACAgIAAbMHAQIYAAFkArMHARwDAAEcAbMHGAABHAEiBQABswcfAAEimAcAAwIDAAGzBwECGAAChwEBgQEEAAGHARkAAocBBAABiAEfAAGBAR8AAYYB/wYAAS4eAAGIAQGHAV8AAYcB9K4BAA==")
          }]),
          ruinStoneSmall4: dG("ruinStoneSmall4", {
            x: 9,
            y: 10,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("AgACAh4AASIBHR4AArMHHgABIp4HAAECHwABHQEcHgABIgHRDB4AASKeBwABAgHMAR4AARwBHR8AAbMHRAABZB4AAWQeAAJkuwYAAQIfAAGIAQMAAYgBGwABiAEDAAGIARsAAYEBAwABiAEBZBoAAYEBAwABgQEBZBoAAYYBAYcBAQABgQEBhgEbAAOHAQGBAQGIAR0AAmSgBgABAh8AAR0CZB0AAR0BZB4AASI8AAFkHwACZOAGAAEcAbMHAWQdAAHOAQEiHwABIpwHAAEuAQACAhwAAbMHAh0BHBwAARwBAAGzBx8AASKbzwEA")
          }]),
          ruinStoneSmall5: dG("ruinStoneSmall5", {
            x: 13,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("JwABZBsAAd4BAwABlgEbAAHeAQYAAWQfAAFkIAABZNcGAAUCAQADAhUAAbMHAYEBAbMHAYEBA7MHAR0DswcVAAGBAQEdAoEBBB0BgQECHBUAAR0BgQEBHQGBAQEdAoEBA4gBARwBZBMAAd0BAYEBAYgBAQADgQEBiAECgQEBiAEBHRQAAd0BAYgBAwABiAEGgQEaAASBAQKIARoAAogBA4EBAYgBGwABgQEBAAGBAQEAAYEB9QUAAgIBAAMCAQAEAhUAAbMHAhUDDwMVAQ8BswcUAAHdAQEdAwABDwMAAc0BAQABHRQAAd0BAYEBBAABFQQAAR0UAAHdAQGBAQUAARUDAAGIARQAAd0BAYgBBgABDwIAAYEBHQACDwGIAR8AAYEBlQYAAQIBAAQCAQACAgEAAQIUAAFkARwCFQMPAhUBDwEVARwVAAGBAQMAARUFAAGBARUAAeIHBAABDwQAAeIHFQABiAEFAAEPAwABiAEcAAEPAgABgQEcAAG9BwEVAQ8BgQEfAAGBAR8AAYEB9QUAAgIBAAICAwABAhcAAR0BDwEVBA8CFQEPAR0VAAEdCQABHRUAAeIHCQAB4gcVAAGBAQkAAR0fAAGBARsABBUBgQEfAAGIAZUGAAcCAQABAhcAAbMHAw8BFQHMAQEPARUBDwEVAbMHFQABgQEBpAEBAAHeAQEAAQkEAAEdFQAB4gcCAAHeAQEAAQkEAAHiBxUAAYEBAgAB3gEBAAEJBAABgQEYAAHeAQEAAQkEAAGBARgAAd4BAQ8CFQEPARUBDwGIAR8AAYEBHwABgQH2BQACAgEAAwIBAAECAQABAhUAAbMHAQ8BFQMPARUBAAEVAQ8BswcVAAEdAQAB3QECAAGgCAQAAYEBFQABgQEBAAHdAQIAAaAIBAABgQEVAAGBAQEAAd0BBwABiAEXAAHdAQcAAYgBFwAB3QEBDwEVBA8BAAGBARkAAdEMAQABzwEDAAGBAZUGAAMCAgAFAhYAAbMHAQ8DFQEPBBUBHBUAAYEBBAABoAgEAAGzBxUAAYEBCQABHRcAAd0BBwABiAEXAAHdAQcAAYEBFwAB3QEBDwIVAg8CAAGIAR8AAYEBHwABgQH1BQABAgIABAICAAECFgABiAEDFQIPARUBAAEVAQ8BHRUAAR0JAAGIARUAAR0JAAGzBx8AAR0YAAHcAQYAAYEBGAAB3AEGAAGIAR8AAYgBlgYAAwIBAAECAwACAhYAAw8BAAEJAwABFQGzBxoAAQkEAAGzBxoAAQkEAAEdHwABHR8AAYEBHwABgQEfAAGBAR8AAYEB9gUAAQIfAAEVBwABFQGzBx8AAR0fAAGIAR8AAYEBHwABgQEfAAGBAb8GAAECHwABgQEfAAGIAR8AAYEBnwcAAQIfAAEdHwABgQG0nwEA")
          }]),
          ruinStoneSmall6: dG("ruinStoneSmall6", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pG.c)("JQAB3gEfAAHeAb4HAAECAQABAhwAAWQBswcBhwEBHRwAAZYBAYEBAYgBAYEBHQABgQEB4gcBiAEdAAGBAQHiBwGBAR4AAYgBAYEBHgABgQG9BgABAgMAAQIZAAHdAQGHAQGBAQEAAhQCswceAAGBAQEdHgABgQEBhgEeAAKBARwAARIBGAGBAQGIAR4AAYEBvQYAAgIBAAECGQABgQEBAAEUAhoBFAGBARgAAd4BBgABhwEYAAHeAQYAAYEBHwABgQEcAAEYAhIBgQEeAAHOAQGHAbcGAAICAgABAgEAAQIBAAICFgABswcBhwECAAEaAxQBGgEdFwABhwEB2wEEAAGgCAEAAYcBFwABgQEB2wEGAAGIAR0AAb0HAQABgQEXAAGBAQIAARIBGAESARgBEgGHAdcGAAECAgADAgEAAgIWAAGzBwGIAQEAARoDFAHOAQEUAbMHHAAB2QEBCwHPAQGIARwAAdkBAQsBAAGGARcAAYEBBQABCwEAAYEBFwABiAECAAISAd4EAhIBhwEfAAGHAbYGAAoCFgABswcBhwEDFAEaAxQBswcBZBYAAYcBBQABoAgBAAGBARcAAYcBBwABgQEXAAGBAQcAAYEBFwABgQECAAEYAxIBGAGHAdgGAAcCGQABhwEBGgIUARoBFAGBAR8AAYEBHwABgQEfAAGBARkAAYcBAQABGAESAhgBgQEZAAGHAQIAAdEMAgABgQG6BgACAgEAAQIbAAGHAQGzBwEaARQBGgKzBx4AAYEBAYgBHgABgQEBhgEeAAKBARoAAYcBAhIBGAGBAQGIARoAAYcBAwABgQG9BgACAhwAAWQBswcBhwEBswcBAAFkHQABgQEeAAHiBwGIAR0AAYEBAeIHAYEBHQABgQEBiAEBgQH+BgAC3AEeAALcAR0AA9wBHQAD3AEdAAPcAdmuAQA=")
          }])
        };

        function rG(GG, bG, ZG) {
          const wG = new VG.c;
          for (const LG of ZG) {
            const GG = wG.get(LG.chunkX, LG.chunkY, LG.chunkZ);
            if (!(0, SG.L)(GG)) throw new Error(`Duplicate chunk at ${LG.chunkX}, ${LG.chunkY}, ${LG.chunkZ}`);
            wG.set(LG.chunkX, LG.chunkY, LG.chunkZ, LG.rle)
          }
          return new YG.c(GG, {
            x: 0,
            y: 0,
            z: 0
          }, bG, wG)
        }
        const zG = {
            dungeonDraugrLarge1: rG("dungeonDraugrLarge1", {
              x: 21,
              y: 14,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pG.c)("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")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, pG.c)("IAAEHBwABxwZAAEdBxwbAAEdHgACHRwAAR0BAAIdHAAEHZwGAAIcHgAGHBoACBwYAAgcGAACfwEfAR0cAAJ/AYEBAR0cAAJ/AYEBAR0cAAJ/AR8dAAMf/QUABRwbAAccGQAIHBgAAxwBHQQcGAADfwEdHAADfwEdHAADfx0AA38dAAIcAR/9BQAGHBoABxwZAAgcGAADHAEdBBwYAAN/AR0cAAN/AR0cAAN/AR0cAAN/HQACHAEf/QUABhwaAAgcGAAIHBgABBwCHQIcGAADfwIAAx0YAAN/AQAEHRgAA38CwgIDHRgAA38FHRkAARwBHx0ABB0cAAHCAgMdHgACHR8AAR0fAAEd3AQABhwaAAgcGAAIHBgACBwYAAJ/AR8DfwEfAR0YAAJ/AYEBA38BgQEBHRgAAn8BgQEDfwGBAQEdGAACfwEfA38BHwEdGAAHHxkAAn8BHwEdHAACfwGBAQEdHAACfwGBAQEdHAABfwG9BwEfAR0cAAMfAR3cBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/GQAHfwEdGAAHfwEdGAACfwEfAxwBHxkAA38BHRwAA38BHRwAAn8BvQcBHRwAAX8CvQcBHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/GQAHfxkAB38BHRgAAX8BvRMFfwEdGAABfwHJEwEfAQACHAEfAR0YAAN/AR0cAAN/AR0cAAN/AR0cAAJ/Ab0HAR0cAAIcAR8BHdwEAAccGQAIHBgACBwYAAccAR0YAAd/GQAHfwEdGAAHfwHCAhgAB38BHRgAAn8BHAMAAR8BHRgAA38dAAN/AR0cAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAHHAEdGAAHfwEdGAAHfwHCAhgAB38BwgIYAAd/GQACfwEcAwABHwEdGAADfx0AA38dAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAIHBgABn8BzgEBHRgAB38BwgIYAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfx0AA38BHRwAA38BHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfwEdHAADfwEdHAADfwEdHgABHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/AR0YAAd/GQACfwEfAQACHAEfGQADfwEdHAADfwEdHAADfwEdHAADfx8AAR/dBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/AR0YAAd/AR0YAAF/Ab0TBX8BwgIYAAF/AckTAR8DHAEfGQADfwHCAhwAA38BHRwAA38dAAN/HwABH90EAAccGQAIHBgACBwYAAgcGAAHfxkAB38ZAAd/AR0YAAd/AcICGAACfwEfAxwBHxkAA38BwgIcAAN/AcICHAADfx0AA38eAAEcAR/dBAAGHBoACBwYAAgcGAAIHBgAAn8BHwN/AR8ZAAJ/AYEBA38BgQEZAAJ/AYEBA38BgQEBHRgAAn8BHwN/AR8BHRgABx8ZAAJ/AR8BHRwAAn8BgQEBHRwAAn8BgQEBHRwAAn8BHx0AAx/dBAAGHBoACBwYAAgcGAAIHBgAA38BAALCAgEdGQADfwEAAR0BwgICHRgAA38FHRgAA38CHRwAARwBHz0AAR0CAAEdHAAEHRwAAR0BwgICHRwABB3cBAAGHBoABxwZAAgcGAAIHBgAA38dAAN/AR0cAAN/AR0cAAN/AR0cAAIcAR/9BQAFHBsABxwZAAgcGAAIHBgAA38BHRwAA38BHRwAA38BwgIcAAN/AcICHAACHAEf/QUAAhweAAYcGgAIHBgACBwYAAJ/AR8BHRwAAn8BgQEBHRwAAX8BvQcBgQEBHRwAAr0HAR8BHRwAAx+dBgAEHBwABxwZAAEcAx0EHBgAAsICAh0cAAEdAcICAh0cAAEdAgABHbxeAA==")
            }]),
            dungeonDraugrMedium1: rG("dungeonDraugrMedium1", {
              x: 27,
              y: 14,
              z: 27
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pG.c)("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")
            }]),
            dungeonDraugrSmall1: rG("dungeonDraugrSmall1", {
              x: 11,
              y: 7,
              z: 11
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pG.c)("AgAGHBoAAsICBgABHRYAAh0CwgICAAIdAQABHRUABR0BAAMdFwADHQMAAh0BwgIBHRYAAR0FAAEdAsICAR0dAAMdtwYACRwXAAEfB38BHwEdFQABHQGBAQd/AYEBAR0VAAEdAYEBB38BgQEBHRUAAR0BgQEHfwGBAQEdFQABHQGBAQd/AYEBFgABHQUfAhwCHwEdtgYACRwBHRYACX8BHRUAAR0JfwEdFQABHQG9Bwh/AcICFQABHQG9Bwh/AR0VAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYAChwBHRYACX8BHRUAAcICCX8BHRUAAcICCX8BwgIVAAEdAb0HCH8BwgIVAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYABBwDHwMcAR0WAAl/AR0WAAl/FgABwgIJfxYAAR0JfwHCAhYACX8BHRYAAR8BHAYAAR8BHbUGAAQcAx8EHBYABH8B0QwEfxcACX8XAAl/FwAJfxcACX8XAAEfBwABHLYGAAQcAx8EHBUAAR0JfwEdFQABHQl/AR0WAAl/FwAJfxcACX8XAAEfBgACHLYGAAEdCRwBHRUAAR0BzAEIfwHCAhUAAR0JfwEdFQABHQl/FwAJfwEdFgAJfwEdFgABHAQAAxwBHwEdtgYACRwBHRUAAcICCX8BwgIVAAEdCX8WAAEdCX8XAAh/Ab0HAR0WAAl/AR0WAAEfAwAEHAEfAR22BgAJHBYAAR0BHwd/AR8WAAEdAYEBB38BgQEXAAGBAQd/AYEBFwABgQEHfwGBARYAAR0BgQEHfwGBAQEdFQABHQYfARwCHwEdtwYAAx0DHBgABR0FAAEdFQADHQLCAgIAAh0ZAALCAgIABB0cAAIdAcICAR0WAAEdBQABHQLCAhcAAh0FAAMdtq4BAA==")
            }]),
            dungeonMagmaLarge1: rG("dungeonMagmaLarge1", {
              x: 40,
              y: 23,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pG.c)("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AdMLAtcDAdMLBdcDAhwFABl/BAAdfwMAHX8CAB9/AQAffwIAHn8CAB5/AgAefwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwYAGn8KABR/xQIAChwG1wMDHATXAwYcAQAJHAHXAwEAAdEDBtMLA9cDBNMLAdcDAQAC1wMLHAHXAxTTCwHXAwocAdcDFNMLAdcDChwB1wMU0wsB1wMLHAbXAwPTCwLXAwHTCwjXAwIcAwAJfwHRDA5/AdEMAn8EABx/BAAcfwQAHn8CAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BgAafwoAB38FAAh/xQIADBwC1wMPHAEAChwB1wMCAAHXAwLTCwzXAw0cAdcDEtMLAdcDCxwB1wMT0wsB1wMLHAHXAxTTCwHXAwscFNcDAhwDABt/BAAcfwQAHH8EAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BQAbfwYAGn8KAAV/CQAGf8UCAB0cAQALHAbXAwUcBdcDDxwB1wMG0wsF1wMF0wsB1wMNHALXAwfTCwPXAwfTCwHXAwwcAdcDEtMLAdcDDRwS1wMDHAMAGn8GABp/BgAafwUAHn8CAB5/AwAdfwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwQAHH8FABt/BgALfwMADH8LAAN/CwAFf8UCAB0cAQANHALXAxwcAtcDAtMLAtcDBRwF1wMQHAHXAwTTCwLXAwMcAtcDA9MLAtcDDhwC1wME0wsG1wME0wsC1wMQHATXAwYcBNcDBRwEAA9/BAAEfwkAEH8CAAV/CAAZfwcAHX8DAB1/AwAdfwMAHX8EABx/BAAcfwQAHH8EABx/BAAcfwUADn8CAAt/BQANfwQACn8GAAp/CAAIfxoAA3/GAgAdHAEALRwC1wMdHATXAwccA9cDEhwF1wMFHATXAyUcBQANfxIADn8SAA9/EQAcfwQAHH8EABx/BAAcfwQAHH8EAA9/AgALfwQAD38DAAp/BQANfwQACn8FAA1/BAAKfwUADH8GAAl/BQAMfwYACX8HAAl/CQAHf+ACAA==")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, pG.c)("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")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pG.c)("AwAdHAEAnwEcBQAJfwQABBwPAA1/BBwPAA1/BBwPAA1/BBwKfwQAD38DHAp/BAAPfwMcCn8EAA9/AhwBAAp/BQANfwQACn8FAA1/BAAKfwUADX8EAAp/BQANfwQACn8GAAt/BgAJfwYAC38GAAl/BgAKfwcACX8JAAZ/CgAHf+QCABwcAQCfARwGAAF/Ac8BBX8FAAQcDwANfwQcDwANfwQcDwANfwQcCn8FAA1/BBwKfwUADX8EHAp/BQANfwEAAhwBAAp/BQANfwQACn8FAA1/BAAKfwYADH8EAAp/BgALfwUACn8GAAt/BgAJfwcACn8GAAl/CAAIfwcACX8LAAN/DAAEf+YCABwcAgCeARwIAAN/BwAEHBEAC38EHBAADH8EHBAADH8EHAp/BgAMfwQcCn8GAAx/AxwLfwYADH8BAAIcC38HAAt/AwALfwcAC38EAAp/BwALfwQACn8IAAl/BQAKfwgACX8FAAp/CQAHfwcACX8KAAZ/CAAIf4UDABscAgAeHAEAfxwSAAQcEwAHfwIABBwTAAl/BBwSAAp/AxwLfwgACn8DHAt/CAALfwIcC38IAAt/AgALfwgAC38CAAt/CQAKfwIAC38JAAl/AwALfwkACX8DAAt/CgAHfwUACn8LAAN/CQAIfxsAA3+KAwAZHAIAHhwCAH4cLAADfxwACX8XABN/DAAUfwwAFH8MABV/CwAVfwwAFH8MABN/DgAHfwIACX8PAAN/BgAHfxsABH/HAwAdHAIAfhwuAAF/HwAFfxoADn8SAA9/EQAPfxEAD38SAA1/EwANfxQAC38XAAJ/AgADf40EABscAgAeHAIAHhwBAD8cTwAEfxwACX8XAAl/FwAIfxkAB38bAAR/kAUAGhwDAB0cAQAfHAEAHxzAxgEA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, pG.c)("BRwbAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AA38dAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABBwcAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/ngMABBwcAAccGQAHHBkACBwYAAgcGAAIHHgAAX8fAAF/HwACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgABfx8AAX+/AwADHB0ABhwaAAccGQAIHBgACBwYAAgceAABfx8AAX8fAAF/HwABfx8AAX8fAAF/HwABf58EAAEcHwAGHBoABxwZAAgcGAAIHBgACBz4BgAFHBsABxwZAAccGQAIHBgACBz4BgACHB4ABBwcAAYcGgAIHBgACByYBwADHB0ABhwaAAYcGgAHHNnGAQA=")
            }])
          },
          EG = {
            treeMapleLarge1: {
              schematic: QG.treeMapleLarge1,
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
              schematic: QG.treeMapleLarge2,
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
              schematic: QG.treeSpectralLarge1,
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
              schematic: QG.treeSpectralLarge2,
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
              schematic: QG.treePineLarge1,
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
              schematic: QG.treePineLarge2,
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
              schematic: QG.treeJungleLarge1,
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
              schematic: QG.treeJungleLarge2,
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
              schematic: QG.treePalmLarge1,
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
              schematic: QG.treePalmLarge2,
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
              schematic: hG.rockSnowLarge1,
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
              schematic: hG.rockSnowLarge2,
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
              schematic: hG.rockSnowLarge3,
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
              schematic: hG.rockJungleLarge1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 4,
                localZ: 13,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 16,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 22,
                localY: 4,
                localZ: 9,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge2: {
              schematic: hG.rockJungleLarge2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge3: {
              schematic: hG.rockJungleLarge3,
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
              schematic: hG.rockJungleLarge4,
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
              schematic: hG.rockJungleLarge5,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge6: {
              schematic: hG.rockJungleLarge6,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            ruinSnowSmall1: {
              schematic: JG.ruinSnowSmall1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 6,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 2,
                localZ: 6,
                mobTypeDistribution: new yG.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall2: {
              schematic: JG.ruinSnowSmall2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 9,
                localZ: 8,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 2,
                localY: 4,
                localZ: 8,
                mobTypeDistribution: new yG.e([{
                  value: "Frost Golem",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall3: {
              schematic: JG.ruinSnowSmall3,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 10,
                localY: 7,
                localZ: 5,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 2,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Frost Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall4: {
              schematic: JG.ruinSnowSmall4,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new yG.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium1: {
              schematic: JG.ruinSnowMedium1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 4,
                localZ: 21,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 6,
                localZ: 8,
                mobTypeDistribution: new yG.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium2: {
              schematic: JG.ruinSnowMedium2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 6,
                localZ: 3,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 6,
                localZ: 13,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 15,
                localY: 2,
                localZ: 8,
                mobTypeDistribution: new yG.e([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge1: {
              schematic: JG.ruinSnowLarge1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 21,
                localY: 20,
                localZ: 27,
                qualityDistribution: new yG.e([{
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 21,
                localY: 20,
                localZ: 14,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge2: {
              schematic: JG.ruinSnowLarge2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 27,
                localZ: 2,
                qualityDistribution: new yG.e([{
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 16,
                localY: 25,
                localZ: 9,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall1: {
              schematic: JG.ruinStoneSmall1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 0,
                localZ: 4,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 6,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall2: {
              schematic: JG.ruinStoneSmall2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 1,
                localZ: 4,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 6,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall3: {
              schematic: JG.ruinStoneSmall3,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 0,
                localZ: 4,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 1,
                localZ: 4,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall4: {
              schematic: JG.ruinStoneSmall4,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 0,
                localZ: 1,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 1,
                localY: 2,
                localZ: 2,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall5: {
              schematic: JG.ruinStoneSmall5,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 7,
                localZ: 7,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 6,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 7,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall6: {
              schematic: JG.ruinStoneSmall6,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 8,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 7,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium1: {
              schematic: JG.ruinStoneMedium1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 2,
                localZ: 5,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 9,
                localZ: 13,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium2: {
              schematic: JG.ruinStoneMedium2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 16,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 0,
                localZ: 9,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 7,
                localZ: 10,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium3: {
              schematic: JG.ruinStoneMedium3,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 5,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 6,
                localZ: 25,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium4: {
              schematic: JG.ruinStoneMedium4,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }])
              }, {
                localX: 3,
                localY: 1,
                localZ: 10,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 6,
                localZ: 19,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium5: {
              schematic: JG.ruinStoneMedium5,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 4,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium6: {
              schematic: JG.ruinStoneMedium6,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 3,
                localZ: 20,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 12,
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 9,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 16,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium7: {
              schematic: JG.ruinStoneMedium7,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 18,
                localZ: 9,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 5,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium8: {
              schematic: JG.ruinStoneMedium8,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 6,
                localY: 14,
                localZ: 4,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 2,
                localZ: 2,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 1
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium9: {
              schematic: JG.ruinStoneMedium9,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 2,
                localZ: 11,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 1,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 2,
                localZ: 3,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 2,
                localZ: 9,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium10: {
              schematic: JG.ruinStoneMedium10,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 11,
                localZ: 13,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 23,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 19,
                localZ: 23,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 1
                }, {
                  value: SG.l.EPIC,
                  weight: 2
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 15,
                localZ: 23,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 20,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 3,
                localZ: 2,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium11: {
              schematic: JG.ruinStoneMedium11,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 11,
                localZ: 14,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 14,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 16,
                localZ: 15,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 1,
                localZ: 14,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge1: {
              schematic: JG.ruinStoneLarge1,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 13,
                localZ: 11,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 22,
                localZ: 19,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 1
                }, {
                  value: SG.l.EPIC,
                  weight: 2
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 18,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 1
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 22,
                localZ: 17,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 14,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 16,
                localZ: 14,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge2: {
              schematic: JG.ruinStoneLarge2,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 13,
                localZ: 21,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 22,
                localZ: 22,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 23,
                localZ: 30,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 20,
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 1
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 11,
                localZ: 26,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 1
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 25,
                localZ: 26,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 16,
                localZ: 24,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 2,
                localZ: 26,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 7,
                localZ: 8,
                mobTypeDistribution: new yG.e([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge3: {
              schematic: JG.ruinStoneLarge3,
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
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 24,
                localZ: 31,
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 1
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 13,
                localZ: 5,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 15,
                localZ: 20,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 1,
                localZ: 22,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 32,
                localY: 2,
                localZ: 23,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 17,
                localY: 2,
                localZ: 13,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 30,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 15,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 25,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 24,
                localZ: 31,
                mobTypeDistribution: new yG.e([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrSmall1: {
              schematic: zG.dungeonDraugrSmall1,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                ww: -15,
                Zw: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 7,
                localY: 1,
                localZ: 1,
                qualityDistribution: new yG.e([{
                  value: SG.l.COMMON,
                  weight: 1
                }, {
                  value: SG.l.UNCOMMON,
                  weight: 2
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new yG.e([{
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
              schematic: zG.dungeonDraugrMedium1,
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
                ww: -40,
                Zw: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 1,
                localZ: 8,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 1,
                localZ: 18,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 13,
                localY: 1,
                localZ: 13,
                mobTypeDistribution: new yG.e([{
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
              schematic: zG.dungeonDraugrLarge1,
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
                ww: -60,
                Zw: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 4,
                localZ: 30,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 1,
                qualityDistribution: new yG.e([{
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 4,
                localZ: 9,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 38,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 2
                }, {
                  value: SG.l.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 10,
                localY: 4,
                localZ: 9,
                mobTypeDistribution: new yG.e([{
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
                mobTypeDistribution: new yG.e([{
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
              schematic: zG.dungeonMagmaLarge1,
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
                ww: -70,
                Zw: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 6,
                localZ: 32,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 33,
                localY: 6,
                localZ: 7,
                qualityDistribution: new yG.e([{
                  value: SG.l.UNCOMMON,
                  weight: 1
                }, {
                  value: SG.l.RARE,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 6,
                localZ: 20,
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 2
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 6,
                localZ: 18,
                qualityDistribution: new yG.e([{
                  value: SG.l.EPIC,
                  weight: 2
                }, {
                  value: SG.l.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 12,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new yG.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new yG.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new yG.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new yG.e([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }]
            }
          },
          oG = [{
            xZ: "ruinStoneSmall1",
            frequency: .15
          }, {
            xZ: "ruinStoneSmall2",
            frequency: .15
          }, {
            xZ: "ruinStoneSmall3",
            frequency: .15
          }, {
            xZ: "ruinStoneSmall4",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium1",
            frequency: .15
          }, {
            xZ: "ruinStoneSmall5",
            frequency: .15
          }, {
            xZ: "ruinStoneSmall6",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium2",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium3",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium4",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium5",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium6",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium7",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium8",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium9",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium10",
            frequency: .15
          }, {
            xZ: "ruinStoneMedium11",
            frequency: .15
          }, {
            xZ: "ruinStoneLarge1",
            frequency: .15
          }, {
            xZ: "ruinStoneLarge2",
            frequency: .15
          }, {
            xZ: "ruinStoneLarge3",
            frequency: .15
          }],
          XG = [{
            xZ: "treeMapleLarge1",
            frequency: 1
          }, {
            xZ: "treeMapleLarge2",
            frequency: 1.5
          }],
          uG = {
            ruins: [{
              xZ: "ruinStoneSmall1",
              frequency: .3
            }, {
              xZ: "ruinStoneSmall2",
              frequency: .3
            }, {
              xZ: "ruinStoneSmall3",
              frequency: .3
            }, {
              xZ: "ruinStoneSmall4",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium1",
              frequency: .3
            }, {
              xZ: "ruinStoneSmall5",
              frequency: .3
            }, {
              xZ: "ruinStoneSmall6",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium2",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium3",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium4",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium5",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium6",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium7",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium8",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium9",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium10",
              frequency: .3
            }, {
              xZ: "ruinStoneMedium11",
              frequency: .3
            }, {
              xZ: "ruinStoneLarge1",
              frequency: .3
            }, {
              xZ: "ruinStoneLarge2",
              frequency: .3
            }, {
              xZ: "ruinStoneLarge3",
              frequency: .3
            }],
            trees: [{
              xZ: "treeMapleLarge1",
              frequency: 2
            }, {
              xZ: "treeMapleLarge2",
              frequency: 3
            }]
          },
          iG = {
            ruins: uG.ruins,
            trees: [{
              xZ: "treePineLarge1",
              frequency: 5
            }, {
              xZ: "treePineLarge2",
              frequency: 5
            }]
          },
          CG = [{
            xZ: "dungeonDraugrSmall1",
            frequency: 45
          }, {
            xZ: "dungeonDraugrMedium1",
            frequency: 10
          }, {
            xZ: "dungeonDraugrLarge1",
            frequency: 10
          }, {
            xZ: "dungeonMagmaLarge1",
            frequency: 25
          }],
          WG = oG.map((GG => {
            let {
              xZ: bG
            } = GG;
            return bG
          }));

        function mG(GG) {
          for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
          return IG(GG, ZG.flat().map((GG => {
            let {
              xZ: bG,
              frequency: ZG
            } = GG;
            return {
              prefab: bG,
              frequency: ZG
            }
          })))
        }

        function IG(GG, bG) {
          let ZG = 0;
          for (const wG of bG) ZG += wG.frequency;
          if (ZG > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${ZG}`);
          return {
            density: GG,
            frequencyParams: {
              noPrefabFrequency: 100 - ZG,
              prefabFrequencies: bG
            }
          }
        }
        class FG {
          constructor(GG, bG, ZG, wG, SG) {
            let {
              oreGenerator: LG
            } = SG, kG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.rK = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.rK = GG, this.blockMetadata = bG, this.seed = wG, this.topsoilBlockType = bG["Grass Block"].id, this.lowsoilBlockType = bG.Dirt.id, this.topwaterBlockType = bG.Water.id, this.worldGenerator = ZG, this.oreGenerator = LG;
            const YG = Math.ceil(ZG.prefabSize / 2),
              VG = {
                [UG.i.SURFACE]: kG,
                [UG.i.UNDERGROUND]: mG(UG.h.MEDIUM, CG)
              };
            this.prefabDataPerType = Object.fromEntries(Object.values(UG.i).filter((GG => Number.isInteger(GG))).map((GG => Number(GG))).map((GG => {
              const bG = VG[GG];
              if (!bG || 0 === bG.frequencyParams.prefabFrequencies.length) return [GG, null];
              const {
                density: wG,
                frequencyParams: SG
              } = bG;
              return [GG, {
                density: wG,
                distribution: new yG.e([...SG.noPrefabFrequency > 0 ? [{
                  weight: SG.noPrefabFrequency,
                  value: null
                }] : [], ...SG.prefabFrequencies.map((GG => {
                  let {
                    prefab: bG,
                    frequency: wG
                  } = GG;
                  const SG = "string" === typeof bG ? {
                      ...EG[bG],
                      name: bG
                    } : bG,
                    LG = SG.name;
                  if ("string" !== typeof bG && Object.hasOwn(EG, LG)) throw new Error(`Prefab definition "${LG}" has a built-in prefab's name`);
                  const yG = Math.floor(Math.sqrt(SG.clearingRadiusSquared));
                  if (yG > YG) throw new Error(`Prefab ${LG} has clearing radius ${yG} which is greater than the world generator's prefab radius ${YG}`);
                  if (SG.groundingRadius > ZG.maxPrefabGroundingRadius) throw new Error(`Prefab ${LG} has grounding radius ${SG.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${ZG.maxPrefabGroundingRadius}`);
                  if ("centre" !== SG.groundingPoints && 0 === SG.groundingPoints.length) throw new Error(`Prefab ${LG} has no grounding points`);
                  const kG = SG.schematic.dimensions;
                  if (kG.x > ZG.prefabSize || kG.y > ZG.prefabSize || kG.z > ZG.prefabSize) throw new Error(`Prefab ${LG} has dimensions ${JSON.stringify(kG)} which are too large for the world generator's prefab size of ${ZG.prefabSize}`);
                  return {
                    weight: wG,
                    value: {
                      ...SG,
                      dimensionX: kG.x,
                      dimensionY: kG.y,
                      dimensionZ: kG.z
                    }
                  }
                }))])
              }]
            })))
          }
          init() {
            this.floraGenerator = new kG(this.blockMetadata, this.rK, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
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
              treeType: SG.w.Maple,
              chance: this.mapleTreeChance
            }, {
              treeType: SG.w.Pine,
              chance: this.pineTreeChance
            }, {
              treeType: SG.w.Plum,
              chance: this.plumTreeChance
            }, {
              treeType: SG.w.Cedar,
              chance: this.cedarTreeChance
            }, {
              treeType: SG.w.Aspen,
              chance: this.aspenTreeChance
            }, {
              treeType: SG.w.Jungle,
              chance: this.jungleTreeChance
            }, {
              treeType: SG.w.Palm,
              chance: this.palmTreeChance
            }, {
              treeType: SG.w.AutumnMaple,
              chance: this.autumnMapleTreeChance
            }, {
              treeType: SG.w.Pear,
              chance: this.pearTreeChance
            }, {
              treeType: SG.w.Cherry,
              chance: this.cherryTreeChance
            }, {
              treeType: SG.w.Spectral,
              chance: this.spectralTreeChance
            }, {
              treeType: SG.w.Mango,
              chance: this.mangoTreeChance
            }, {
              treeType: SG.w.AutumnAspen,
              chance: this.autumnAspenTreeChance
            }, {
              treeType: SG.w.Dead,
              chance: this.deadTreeChance
            }, {
              treeType: SG.w.FallenLog,
              chance: this.fallenLogChance
            }], this.totalTreeChance = 0;
            for (const {
                chance: GG
              }
              of this.treeChances) this.totalTreeChance += GG
          }
          xzId(GG, bG) {
            return `${GG}|${bG}`
          }
          getHeightmapVal(GG, bG) {
            return this.offsettedHeight + this._heightmapSimplex.getOctaves(GG, bG)
          }
          carveGround(GG, bG, ZG) {
            return null
          }
          getTopsoilBlock(GG, bG, ZG) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(GG, bG, ZG, wG) {
            return this.lowsoilBlockType
          }
          getStrataBlock(GG, bG, ZG, wG) {
            return 0
          }
          getDryBedBlock(GG, bG, ZG) {
            return this.getTopsoilBlock(GG, bG, ZG)
          }
          getTotalTreeChance() {
            return this.totalTreeChance
          }
          hasPrefabs(GG, bG) {
            const ZG = this.prefabDataPerType[GG];
            return null !== ZG && ZG.density === bG
          }
          canPlaceSurfacePrefab(GG, bG) {
            return !0
          }
          allowsPrefab(GG, bG, ZG, wG, SG) {
            return !0
          }
          getRandomPrefab(GG, bG, ZG) {
            const wG = this.prefabDataPerType[bG];
            return null === wG || wG.density !== ZG ? null : wG.distribution.sample(GG)
          }
        }
        class vG extends FG {
          constructor(GG, bG, ZG, SG, LG) {
            super(GG, bG, ZG, `${SG}Desert`, LG, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = bG.Sand.id, this.lowsoilBlockType = bG.Sand.id, this._heightmapSimplex = new wG.g([{
              amplitude: 2,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${SG}DesertBiomeHeightMap`)
          }
        }
        class aG extends vG {
          constructor() {
            super(...arguments), this.key = "manyCactusDesert", this.cactusChance = .05
          }
        }
        class cG extends vG {
          constructor(GG, bG, ZG, LG, yG) {
            super(GG, bG, ZG, LG, yG, mG(UG.h.VERY_HIGH, [{
              xZ: "treePalmLarge1",
              frequency: 45
            }, {
              xZ: "treePalmLarge2",
              frequency: 45
            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(SG.e.OASIS), this._heightmapSimplex = new wG.g([{
              amplitude: 1,
              frequency: 1 / 90
            }, {
              amplitude: .5,
              frequency: 1 / 35
            }], `${LG}OasisBiomeHeightMap`)
          }
          canPlaceSurfacePrefab(GG, bG) {
            return !(this.worldGenerator.getDistToLakeEdge(GG, bG, this.maxPrefabDistFromLakeEdge) > this.maxPrefabDistFromLakeEdge)
          }
        }
        class lG extends vG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, `${wG}RedDesert`, SG), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = bG["Red Sand"].id, this.lowsoilBlockType = bG["Red Sand"].id
          }
        }
        class jG extends FG {
          constructor(GG, bG, ZG, LG, yG) {
            super(GG, bG, ZG, `${LG}Plains`, yG, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mG(UG.h.MEDIUM, oG, XG)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(SG.e.PLAINS), this.topsoilBlockType = bG["Grass Block"].id, this.lowsoilBlockType = bG.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new wG.g([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${LG}PlainsBiomeHeightMap`)
          }
        }
        class PG extends jG {
          constructor() {
            super(...arguments), this.key = "tallGrassPlains", this.grassChance = .06, this.tallGrassChance = .12
          }
        }
        class MG extends jG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG, SG, mG(UG.h.MEDIUM, [{
              xZ: "treeMapleLarge1",
              frequency: 6
            }, {
              xZ: "treeMapleLarge2",
              frequency: 9
            }])), this.key = "meadowPlains", this.grassChance = .12, this.tallGrassChance = .24, this.cornChance = 25e-5, this.flowerPatchDistApart = 5
          }
        }
        class AG extends jG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG, SG, mG(UG.h.MEDIUM, XG)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = bG.Snow.id, this.topwaterBlockType = bG.Ice.id
          }
        }
        class sG extends FG {
          constructor(GG, bG, ZG, SG, LG) {
            super(GG, bG, ZG, `${SG}Forest`, LG, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mG(UG.h.MEDIUM, uG.ruins, uG.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = bG["Grass Block"].id, this.lowsoilBlockType = bG.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new wG.g([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${SG}ForestBiomeHeightMap`)
          }
        }
        class qG extends sG {
          constructor() {
            super(...arguments), this.key = "plumForest", this.pumpkinChance = 30, this.melonChance = 0, this.aspenTreeChance = 0, this.plumTreeChance = 1
          }
        }
        class nG extends sG {
          constructor() {
            super(...arguments), this.key = "pearForest", this.melonChance = 30, this.aspenTreeChance = 0, this.pearTreeChance = 1
          }
        }
        class gG extends sG {
          constructor(GG, bG, ZG, wG, LG) {
            super(GG, bG, ZG, wG, LG, mG(UG.h.MEDIUM, uG.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(SG.e.AUTUMN)
          }
        }
        class eG extends sG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG, SG, mG(UG.h.HIGH, [{
              xZ: "treeJungleLarge1",
              frequency: 20
            }, {
              xZ: "treeJungleLarge2",
              frequency: 20
            }, {
              xZ: "rockJungleLarge1",
              frequency: 8
            }, {
              xZ: "rockJungleLarge2",
              frequency: 8
            }, {
              xZ: "rockJungleLarge3",
              frequency: 8
            }, {
              xZ: "rockJungleLarge4",
              frequency: 8
            }, {
              xZ: "rockJungleLarge5",
              frequency: 8
            }, {
              xZ: "rockJungleLarge6",
              frequency: 8
            }])), this.key = "jungleForest", this.minDistanceFromOrigin = 200, this.grassChance = .01, this.tallGrassChance = .02, this.jungleTallGrassChance = .04, this.catnipChance = .02, this.flowerPatchDistApart = 12, this.melonChance = 0, this.fatRedMushroomChance = 12, this.fatBrownMushroomChance = 12, this.aspenTreeChance = 0, this.mapleTreeChance = 0, this.jungleTreeChance = 10, this.palmTreeChance = 2, this.mangoTreeChance = 2, this.topsoilBlockType = bG["Jungle Grass Block"].id
          }
        }
        class RG extends sG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG, SG, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mG(UG.h.MEDIUM, iG.ruins, iG.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = bG["Pine Grass Block"].id
          }
        }
        class TG extends RG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG, SG), this.key = "snowyPineForest", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cranberryChance = 10, this.fallenPineConeChance = 5, this.pineGrassChance = .004, this.pineFernChance = .001, this.topsoilBlockType = bG.Snow.id, this.topwaterBlockType = bG.Ice.id
          }
        }
        class HG extends sG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, `${wG}Blue`, SG), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class tG extends sG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG, SG, mG(UG.h.MEDIUM, uG.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class DG extends FG {
          constructor(GG, bG, ZG, SG, LG) {
            super(GG, bG, ZG, `${SG}RollingHills`, LG), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = bG["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new wG.g([{
              amplitude: 20,
              frequency: .005
            }, {
              amplitude: 4,
              frequency: 1 / 70
            }], `${SG}RollingHillsBiomeHeightMap`)
          }
        }
        class NG extends FG {
          constructor(GG, bG, ZG, SG, LG) {
            super(GG, bG, ZG, `${SG}SnowyMountains`, LG), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new wG.g([{
              amplitude: 80,
              frequency: .005
            }], `${SG}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new wG.g([{
              amplitude: 20,
              frequency: 1 / 120
            }], `${SG}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new wG.g([{
              amplitude: 8,
              frequency: 1 / 120
            }], `${SG}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, wG.w)(this.ridgedNoiseOctave1) + (0, wG.w)(this.ridgedNoiseOctave2)
          }
          getHeightmapVal(GG, bG) {
            const ZG = this.ridgedNoiseAmplitude - Math.abs(this.ridgedNoiseOctave1.getOctaves(GG, bG)) - Math.abs(this.ridgedNoiseOctave2.getOctaves(GG, bG));
            return this.offsettedHeight + ZG + this.nonRidgedNoise.getOctaves(GG, bG)
          }
          getTopsoilBlock(GG, bG, ZG) {
            return bG > 80 ? this.blockMetadata.Snow.id : bG > 60 ? this.blockMetadata.Stone.id : this.blockMetadata["Grass Block"].id
          }
          getLowsoilBlockType(GG, bG, ZG, wG) {
            return bG > 85 && bG >= wG - 2 ? this.blockMetadata.Snow.id : bG > 57 ? this.blockMetadata.Stone.id : bG > 53 ? this.blockMetadata["Rocky Dirt"].id : this.blockMetadata.Dirt.id
          }
        }
        class OG extends jG {
          constructor(GG, bG, ZG, SG, LG) {
            super(GG, bG, ZG, SG, LG, mG(UG.h.HIGH, [{
              xZ: "treeSpectralLarge1",
              frequency: 4
            }, {
              xZ: "treeSpectralLarge2",
              frequency: 4
            }, {
              xZ: "rockSnowLarge1",
              frequency: 18
            }, {
              xZ: "rockSnowLarge2",
              frequency: 18
            }, {
              xZ: "rockSnowLarge3",
              frequency: 18
            }, {
              xZ: "ruinSnowSmall1",
              frequency: 4
            }, {
              xZ: "ruinSnowSmall2",
              frequency: 4
            }, {
              xZ: "ruinSnowSmall3",
              frequency: 4
            }, {
              xZ: "ruinSnowSmall4",
              frequency: 4
            }, {
              xZ: "ruinSnowMedium1",
              frequency: 4
            }, {
              xZ: "ruinSnowMedium2",
              frequency: 4
            }, {
              xZ: "ruinSnowLarge1",
              frequency: 3
            }, {
              xZ: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = bG["Packed Snow"].id, this.lowsoilBlockType = bG.Snow.id, this.topwaterBlockType = bG.Ice.id, this._heightmapSimplex = new wG.g([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${SG}FrozenBadlandsPlainsHeightMap`)
          }
        }
        class xG extends sG {
          constructor(GG, bG, ZG, SG, LG) {
            super(GG, bG, ZG, SG, LG, mG(UG.h.HIGH, [{
              xZ: "treeSpectralLarge1",
              frequency: 8
            }, {
              xZ: "treeSpectralLarge2",
              frequency: 8
            }, {
              xZ: "rockSnowLarge1",
              frequency: 4
            }, {
              xZ: "rockSnowLarge2",
              frequency: 4
            }, {
              xZ: "rockSnowLarge3",
              frequency: 4
            }, {
              xZ: "ruinSnowSmall1",
              frequency: 6
            }, {
              xZ: "ruinSnowSmall2",
              frequency: 6
            }, {
              xZ: "ruinSnowSmall3",
              frequency: 6
            }, {
              xZ: "ruinSnowSmall4",
              frequency: 6
            }, {
              xZ: "ruinSnowMedium1",
              frequency: 4
            }, {
              xZ: "ruinSnowMedium2",
              frequency: 4
            }, {
              xZ: "ruinSnowLarge1",
              frequency: 3
            }, {
              xZ: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = bG["Packed Snow"].id, this.lowsoilBlockType = bG.Snow.id, this.topwaterBlockType = bG.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new wG.g([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${SG}FrozenBadlandsForestHeightMap`)
          }
        }
        class BG extends FG {
          constructor(GG, bG, ZG, LG, yG, kG) {
            super(GG, bG, ZG, `${LG}Custom_${kG.iw}_${kG.Cw}`, yG), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, SG.I)(kG.iw, bG), this.lowsoilBlockType = (0, SG.I)(kG.Cw, bG), this._heightmapSimplex = new wG.g([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${LG}CustomBiomeHeightMap`)
          }
        }
      },
      40154: (GG, bG, ZG) => {
        ZG.d(bG, {
          d: () => VG,
          e: () => hG,
          h: () => KG,
          i: () => fG
        });
        var wG = ZG(40105),
          SG = ZG(40077),
          LG = ZG(40061),
          yG = ZG(604),
          kG = ZG(40109),
          UG = ZG(4265),
          YG = ZG(40148);
        class VG {
          constructor(GG, bG, ZG, SG, yG, UG) {
            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.Xw = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.rK = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = ZG, this.blockMetadata = yG, this.rK = SG, this.biomePointGen = new kG.d("biome", 150, !1, !0, ZG, 3, SG), this.biomeOffsetSimplex = new LG.g([{
              amplitude: 1,
              frequency: .2
            }, {
              amplitude: 5,
              frequency: 1 / 70
            }], `${ZG}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, LG.w)(this.biomeOffsetSimplex)), this.baseBiome = new wG.k(SG, yG, GG, ZG, {
              oreGenerator: bG
            }), this.baseBiome.init(), this.Xw = UG, this.anyStrata = UG.some((GG => {
              let {
                biome: bG
              } = GG;
              return bG.strataDepth > 0
            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.Xw.length);
            for (let wG = 0; wG < this.Xw.length; wG++) {
              const GG = this.Xw[wG],
                {
                  biome: bG,
                  frequency: ZG,
                  altBiome: SG
                } = GG;
              if (this.biomeFrequencies[wG] = ZG, null !== SG) {
                if (SG.init(), SG.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${wG}`);
                let GG = !1;
                for (let bG = 0; bG < this.Xw.length; bG++)
                  if (this.Xw[bG].biome === SG) {
                    GG = !0;
                    break
                  } if (!GG) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${wG}`)
              } else if (bG.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${wG}`);
              this.biomesTotalFrequency += ZG, bG.init()
            }
          }
          generate(GG, bG) {
            const [ZG, wG] = this.getBiomeOffsets(GG, bG), SG = this.biomePointGen.getKClosestPointsWithWeights(GG + ZG, bG + wG, 60), LG = [];
            for (let yG = 0; yG < SG.length; yG++) {
              const GG = SG[yG],
                {
                  biome: bG,
                  biomeId: ZG
                } = this.getBiomeForBiomePoint(GG.pt),
                wG = {
                  weight: GG.weight,
                  biome: bG,
                  biomeId: ZG,
                  biomeModifiers: null
                };
              0 === yG && (wG.biomeModifiers = this.getBiomeModifiersForBiomePoint(GG.pt)), LG.push(wG)
            }
            return LG
          }
          getBiome(GG, bG) {
            const [ZG, wG] = this.getBiomeOffsets(GG, bG), SG = this.biomePointGen.getClosestPoint(GG + ZG, bG + wG);
            return this.getBiomeForBiomePoint(SG)
          }
          regionMayHaveScatteredLakes(GG, bG) {
            const ZG = this.biomePointGen.gridSize;
            if (GG >= this.lastScatteredLakeCellX * ZG + this.biomeOffsetBound && GG < (this.lastScatteredLakeCellX + 1) * ZG - this.biomeOffsetBound && bG >= this.lastScatteredLakeCellZ * ZG + this.biomeOffsetBound && bG < (this.lastScatteredLakeCellZ + 1) * ZG - this.biomeOffsetBound) return this.lastScatteredLakeCellResult;
            const [wG, SG] = this.getBiomeOffsets(GG, bG), LG = GG + wG, yG = bG + SG, kG = this.biomePointGen.getCellCoordFromGlobalCoord(LG, yG), UG = kG[0], YG = kG[1];
            if (UG === this.lastScatteredLakeCellX && YG === this.lastScatteredLakeCellZ) return this.lastScatteredLakeCellResult;
            let VG = !1;
            for (const pG of this.biomePointGen.getPointsAroundPoint(LG, yG))
              if (this.getBiomeForBiomePoint(pG).biome.hasScatteredLakes) {
                VG = !0;
                break
              } return this.lastScatteredLakeCellX = UG, this.lastScatteredLakeCellZ = YG, this.lastScatteredLakeCellResult = VG, VG
          }
          regionMayHaveVeryHighSurfacePrefabs(GG, bG, ZG, wG) {
            const LG = this.biomePointGen.gridSize,
              yG = Math.floor((GG - this.biomeOffsetBound) / LG),
              kG = Math.floor((bG - this.biomeOffsetBound) / LG),
              UG = Math.floor((ZG + this.biomeOffsetBound) / LG),
              YG = Math.floor((wG + this.biomeOffsetBound) / LG);
            for (let VG = yG; VG <= UG; VG++)
              for (let GG = kG; GG <= YG; GG++) {
                const bG = this.biomePointGen.getPointsAroundPoint(VG * LG, GG * LG);
                let ZG = this.veryHighSurfacePrefabCells.get(bG);
                if (void 0 === ZG) {
                  ZG = !1;
                  for (const GG of bG)
                    if (this.getBiomeForBiomePoint(GG).biome.hasPrefabs(SG.i.SURFACE, SG.h.VERY_HIGH)) {
                      ZG = !0;
                      break
                    } this.veryHighSurfacePrefabCells.set(bG, ZG)
                }
                if (ZG) return !0
              }
            return !1
          }
          getBiomeOffsets(GG, bG) {
            if (GG === this.lastBiomeOffsetAtX && bG === this.lastBiomeOffsetAtZ) return this.lastBiomeOffsets;
            const ZG = Math.floor(this.biomeOffsetSimplex.getOctaves(GG, bG)),
              wG = Math.floor(this.biomeOffsetSimplex.getOctaves(GG + 500, bG + 860));
            return this.lastBiomeOffsetAtX = GG, this.lastBiomeOffsetAtZ = bG, this.lastBiomeOffsets[0] = ZG, this.lastBiomeOffsets[1] = wG, this.lastBiomeOffsets
          }
          getBiomeForBiomePoint(GG) {
            if (this.mostRecentlyAccessedBiome && GG[0] === this.mostRecentlyAccessedPtForBiome[0] && GG[1] === this.mostRecentlyAccessedPtForBiome[1]) return this.mostRecentlyAccessedBiome;
            const bG = (0, YG.d)(GG[0], GG[1]);
            let ZG = this.biomesByPoint.get(bG);
            return void 0 === ZG && (ZG = this.pickBiomeForBiomePoint(GG), this.biomesByPoint.size >= 1024 && this.biomesByPoint.clear(), this.biomesByPoint.set(bG, ZG)), this.mostRecentlyAccessedBiome = ZG, this.mostRecentlyAccessedPtForBiome[0] = GG[0], this.mostRecentlyAccessedPtForBiome[1] = GG[1], ZG
          }
          pickBiomeForBiomePoint(GG) {
            const bG = Math.max(Math.abs(GG[0]), Math.abs(GG[1])),
              ZG = new UG.f(`${GG[0]}|${GG[1]}|${this.seed}`);
            let wG = QG(this.biomeFrequencies, this.biomesTotalFrequency, ZG),
              SG = this.Xw[wG].biome;
            if (bG < SG.minDistanceFromOrigin) {
              SG = this.Xw[wG].altBiome;
              for (let GG = 0; GG < this.Xw.length; GG++)
                if (this.Xw[GG].biome === SG) {
                  wG = GG;
                  break
                }
            }
            return {
              biome: SG,
              biomeId: wG
            }
          }
          getBiomeModifiersForBiomePoint(GG) {
            if (this.mostRecentlyAccessedModifier && GG[0] === this.mostRecentlyAccessedModifierPt[0] && GG[1] === this.mostRecentlyAccessedModifierPt[1]) return this.mostRecentlyAccessedModifier;
            const {
              biomeId: bG
            } = this.getBiomeForBiomePoint(GG), {
              Ww: ZG,
              stoneFrequencies: wG,
              stonesTotalFrequency: SG
            } = this.Xw[bG], LG = {
              stoneTypeId: ZG[QG(wG, SG, new UG.f(`${GG[0]}|${GG[1]}|${this.seed}Modifiers`))].stoneId
            };
            return this.mostRecentlyAccessedModifier = LG, this.mostRecentlyAccessedModifierPt[0] = GG[0], this.mostRecentlyAccessedModifierPt[1] = GG[1], LG
          }
          getBiomeInfoForChunkFill(GG, bG, ZG) {
            const wG = {
              biomeIds: new LG.e(this.rK, [GG, bG]),
              stoneTypeIds: new LG.e(this.rK, [GG, bG])
            };
            for (let SG = GG; SG < GG + this.rK; SG++)
              for (let GG = bG; GG < bG + this.rK; GG++) {
                const bG = ZG.getOrGenerate(SG, GG)[0];
                wG.biomeIds.set(SG, GG, bG.biomeId), wG.stoneTypeIds.set(SG, GG, bG.biomeModifiers.stoneTypeId)
              }
            return wG
          }
          getBiomeFromId(GG) {
            return this.Xw[GG].biome
          }
        }

        function pG(GG) {
          let bG = 0;
          const ZG = [];
          for (const wG of GG) bG += wG.frequency, ZG.push(wG.frequency);
          return {
            Ww: GG,
            stoneFrequencies: ZG,
            stonesTotalFrequency: bG
          }
        }

        function fG(GG) {
          return pG(function(GG) {
            return [{
              stoneId: GG.Stone.id,
              frequency: 100
            }, {
              stoneId: GG.Andesite.id,
              frequency: 4
            }, {
              stoneId: GG.Diorite.id,
              frequency: 2
            }, {
              stoneId: GG.Granite.id,
              frequency: 1
            }]
          }(GG))
        }

        function QG(GG, bG, ZG) {
          const wG = ZG.next() * bG;
          let SG = 0,
            LG = 0;
          for (; SG <= wG;) SG += GG[LG], LG++;
          return LG - 1
        }

        function KG(GG) {
          let {
            rK: bG,
            blockMetadata: ZG,
            worldGenerator: SG,
            seed: LG,
            biomeOpts: yG
          } = GG;
          const kG = new wG.v(bG, ZG, SG, LG, yG),
            UG = new wG.K(bG, ZG, SG, LG, yG),
            YG = new wG.O(bG, ZG, SG, LG, yG),
            VG = new wG.fb(bG, ZG, SG, LG, yG),
            pG = new wG.Z(bG, ZG, SG, LG, yG),
            QG = new wG.z(bG, ZG, SG, LG, yG),
            KG = new wG.bb(bG, ZG, SG, LG, yG),
            hG = new wG.S(bG, ZG, SG, LG, yG),
            dG = new wG.W(bG, ZG, SG, LG, yG),
            JG = new wG.lb(bG, ZG, SG, LG, yG),
            rG = new wG.H(bG, ZG, SG, LG, yG),
            zG = new wG.e(bG, ZG, SG, LG, yG),
            EG = new wG.hb(bG, ZG, SG, LG, yG),
            oG = new wG.ib(bG, ZG, SG, LG, yG),
            XG = new wG.o(bG, ZG, SG, LG, yG),
            uG = new wG.p(bG, ZG, SG, LG, yG),
            iG = new wG.mb(bG, ZG, SG, LG, yG),
            CG = new wG.ob(bG, ZG, SG, LG, yG),
            WG = new wG.M(bG, ZG, SG, LG, yG),
            mG = new wG.G(bG, ZG, SG, LG, yG),
            IG = new wG.D(bG, ZG, SG, LG, yG),
            FG = fG(ZG);
          return [{
            biome: rG,
            frequency: 2,
            altBiome: QG
          }, {
            biome: kG,
            frequency: 23,
            altBiome: null
          }, {
            biome: YG,
            frequency: 8,
            altBiome: null
          }, {
            biome: mG,
            frequency: 2,
            altBiome: pG
          }, {
            biome: UG,
            frequency: 1,
            altBiome: null
          }, {
            biome: VG,
            frequency: 4,
            altBiome: null
          }, {
            biome: rG,
            frequency: 6,
            altBiome: QG
          }, {
            biome: pG,
            frequency: 62,
            altBiome: null
          }, {
            biome: mG,
            frequency: 2,
            altBiome: pG
          }, {
            biome: WG,
            frequency: 4,
            altBiome: null
          }, {
            biome: CG,
            frequency: 2,
            altBiome: null
          }, {
            biome: iG,
            frequency: 4,
            altBiome: null
          }, {
            biome: QG,
            frequency: 16,
            altBiome: null
          }, {
            biome: uG,
            frequency: 4,
            altBiome: null
          }, {
            biome: hG,
            frequency: 6,
            altBiome: null
          }, {
            biome: zG,
            frequency: 6,
            altBiome: null
          }, {
            biome: KG,
            frequency: 24,
            altBiome: null
          }, {
            biome: IG,
            frequency: 2,
            altBiome: QG
          }, {
            biome: uG,
            frequency: 2,
            altBiome: null
          }, {
            biome: rG,
            frequency: 4,
            altBiome: QG
          }, {
            biome: dG,
            frequency: 12,
            altBiome: QG
          }, {
            biome: IG,
            frequency: 2,
            altBiome: QG
          }, {
            biome: JG,
            frequency: 2,
            altBiome: QG
          }, {
            biome: EG,
            frequency: 32,
            altBiome: null
          }, {
            biome: oG,
            frequency: 16,
            altBiome: null
          }, {
            biome: XG,
            frequency: 4,
            altBiome: null
          }].map((GG => ({
            ...GG,
            ...FG
          })))
        }

        function hG(GG, bG) {
          let {
            rK: ZG,
            blockMetadata: SG,
            worldGenerator: LG,
            seed: kG,
            biomeOpts: UG
          } = bG;
          if (0 === GG.length) throw new Error("buildCustomBiomes requires at least one custom biome");
          return GG.map((GG => {
            const bG = new wG.r(ZG, SG, LG, kG, UG, GG),
              YG = GG.Ww.map((GG => ({
                stoneId: (0, yG.I)(GG.blockName, SG),
                frequency: GG.frequency
              })));
            return {
              biome: bG,
              frequency: GG.frequency,
              altBiome: null,
              ...pG(YG)
            }
          }))
        }
      },
      40168: (GG, bG, ZG) => {
        ZG.d(bG, {
          d: () => hG
        });
        var wG = ZG(40061),
          SG = ZG(604),
          LG = ZG(40077),
          yG = ZG(40068),
          kG = ZG(4265);
        class UG {
          constructor(GG, bG, ZG, wG) {
            this.rK = GG, this.pointsGenerator = bG, this.seed = wG, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * ZG / this.rK) + 1
          }
          getChunkCoordFromGlobalCoord(GG, bG) {
            return this.tempChunkCoord[0] = Math.floor(GG / this.rK), this.tempChunkCoord[1] = Math.floor(bG / this.rK), this.tempChunkCoord
          }
          getSurroundingFeatures(GG, bG) {
            const ZG = this.getChunkCoordFromGlobalCoord(GG, bG),
              wG = [];
            for (let SG = ZG[0] - this.chunkSearchRadius; SG <= ZG[0] + this.chunkSearchRadius; SG++)
              for (let GG = ZG[1] - this.chunkSearchRadius; GG <= ZG[1] + this.chunkSearchRadius; GG++) this.pointsGenerator.isPoint(SG, GG) && wG.push(this.getRandomPointInChunk(SG, GG));
            return wG
          }
          getRandomPointInChunk(GG, bG) {
            const ZG = GG * this.rK,
              wG = bG * this.rK,
              SG = new kG.f(`${GG}|${bG}|${this.seed}`);
            return [ZG + Math.floor(SG.next() * this.rK), wG + Math.floor(SG.next() * this.rK)]
          }
        }
        var YG = ZG(40109),
          VG = ZG(40148);
        class pG {
          constructor(GG, bG, ZG, wG) {
            this.numCaveTypes = GG, this.caveTypeToBlockIds = bG, this.caveTypePrioritization = ZG, this.rK = wG
          }
        }
        class fG extends pG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG), this.data = SG
          }
          getOrGenerate(GG, bG, ZG, wG) {
            return this.data.getOrGenerate(GG, bG, ZG, wG)
          }
          viewJustInnerChunk() {
            return new QG(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.rK, this.data.viewJustInnerChunk())
          }
        }
        class QG extends pG {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, ZG, wG), this.data = SG
          }
          getOrGenerate(GG, bG, ZG, wG) {
            return this.data.get(GG, bG, ZG, wG)
          }
        }

        function KG(GG) {
          const bG = GG.high - GG.low;
          return {
            low: GG.low,
            high: GG.high,
            midpoint: (GG.low + GG.high) / 2,
            width: bG,
            halfWidth: bG / 2
          }
        }
        class hG {
          constructor(GG, bG, ZG, wG) {
            this.rK = bG, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new zG(GG, bG, ZG, wG)
          }
          static isInCave(GG, bG, ZG, wG) {
            for (let SG = 0; SG < wG.numCaveTypes; SG++) {
              const yG = wG.getOrGenerate(GG, ZG, SG, LG.b.FloorY),
                kG = wG.getOrGenerate(GG, ZG, SG, LG.b.CeilingY);
              if (yG <= bG && bG <= kG) return !0
            }
            return !1
          }
          static addCavesToChunk(GG, bG, ZG, wG, SG, UG) {
            const YG = new kG.f(`caveBlocks${bG}|${ZG}|${wG}`);
            for (let kG = bG; kG < bG + UG.rK; kG++)
              for (let VG = wG; VG < wG + UG.rK; VG++) {
                const pG = SG.get(kG, VG, LG.d.GroundHeight);
                for (const SG of UG.caveTypePrioritization) {
                  const fG = UG.getOrGenerate(kG, VG, SG, LG.b.FloorY);
                  if (fG === yG.n) continue;
                  const QG = UG.getOrGenerate(kG, VG, SG, LG.b.CeilingY),
                    KG = Math.min(QG + 1, ZG + UG.rK, pG + 1),
                    hG = UG.caveTypeToBlockIds[SG];
                  for (let SG = Math.max(fG, ZG); SG < KG; SG++) {
                    const LG = "number" === typeof hG ? hG : hG.sample(YG);
                    GG.set(kG - bG, SG - ZG, VG - wG, LG)
                  }
                }
              }
          }
          getCaveHeightmapVals(GG, bG, ZG) {
            const SG = [GG, bG],
              yG = new dG(this.caveMetadataForChunkCache, ZG, this.rK),
              kG = this.caveMetadataForChunkCache.numCaveTypes,
              UG = this.caveMetadataForChunkCache.caveTypeToBlockId,
              YG = this.caveMetadataForChunkCache.caveTypePrioritization,
              VG = wG.b.create(this.rK, SG, kG, LG.b.NumFields, yG);
            return new fG(kG, UG, YG, this.rK, VG)
          }
        }
        class dG {
          constructor(GG, bG, ZG) {
            if (this.caveMetadataForChunkCache = GG, this.heightmapVals = bG, this.caveGeneratorsPerChunk = [], ZG !== SG.D) throw new Error(`Cave generation is not supported for chunk sizes other than ${SG.D}`)
          }
          generateAndSet(GG, bG, ZG) {
            const wG = (0, SG.U)(GG),
              LG = (0, SG.U)(bG);
            this.getOrCreateCaveGeneratorForChunk(wG, LG).generateAndSet(GG, bG, ZG)
          }
          getOrCreateCaveGeneratorForChunk(GG, bG) {
            return void 0 === this.caveGeneratorsPerChunk[GG] && (this.caveGeneratorsPerChunk[GG] = []), void 0 === this.caveGeneratorsPerChunk[GG][bG] && (this.caveGeneratorsPerChunk[GG][bG] = this.caveMetadataForChunkCache.getOrCreateCaveGeneratorForChunk(GG, bG, this.heightmapVals)), this.caveGeneratorsPerChunk[GG][bG]
          }
        }
        class JG {
          constructor(GG, bG, ZG, wG, SG, LG) {
            this.heightmapVals = GG, this.spaghettiCaveMetadataForChunk = bG, this.pitCaveMetadataForChunk = ZG, this.ravineCaveMetadataForChunk = wG, this.sphereCaveMetadataForChunk = SG, this.numCaveTypes = LG
          }
          generateAndSet(GG, bG, ZG) {
            this.setDefaultCaves(GG, bG, ZG), this.generateAndSetSpaghettiCaves(GG, bG, ZG), this.generateAndSetPitCaves(GG, bG, ZG), this.generateAndSetRavineCaves(GG, bG, ZG), this.generateAndSetSphereCaves(GG, bG, ZG), this.removeCavesNearWater(GG, bG, ZG)
          }
          setDefaultCaves(GG, bG, ZG) {
            for (let wG = 0; wG < this.numCaveTypes; wG++) ZG.set(GG, bG, wG, LG.b.FloorY, yG.n), ZG.set(GG, bG, wG, LG.b.CeilingY, yG.n)
          }
          generateAndSetSpaghettiCaves(GG, bG, ZG) {
            for (const wG of this.spaghettiCaveMetadataForChunk) {
              const SG = wG.caveEdgeNoiseGenerator.getOctaves(GG, bG);
              if (SG >= JG.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
              const kG = wG.caveHeightNoiseGenerator.getOctaves(GG, bG);
              if (kG === yG.e) continue;
              if (!(wG.caveHeightThreshold.low < kG && kG < wG.caveHeightThreshold.high)) continue;
              let UG;
              {
                let GG = 1 - Math.abs(kG - wG.caveHeightThreshold.midpoint) / wG.caveHeightThreshold.halfWidth;
                GG = Math.min(wG.caveHeightPercentageUpperBound, GG), UG = wG.caveHeightMax * GG
              }
              SG > 0 && (UG *= (JG.SPAGHETTI_CAVE_EDGE_CUTOFF - SG) / JG.SPAGHETTI_CAVE_EDGE_CUTOFF);
              const YG = wG.caveXZPerturbNoiseGenerator.getOctaves(GG, bG),
                VG = wG.caveXZPerturbNoiseGenerator.getOctaves(GG + 980, bG - 370),
                pG = wG.caveYPerturbNoiseGenerator.getOctaves(GG + YG, bG + VG),
                fG = Math.floor(wG.caveCentreY + pG - UG);
              let QG = Math.floor(wG.caveCentreY + pG + UG);
              QG + 1 === this.heightmapVals.getOrGenerate(GG, bG, LG.d.GroundHeight) && QG++, ZG.set(GG, bG, wG.caveType, LG.b.FloorY, fG), ZG.set(GG, bG, wG.caveType, LG.b.CeilingY, QG)
            }
          }
          generateAndSetPitCaves(GG, bG, ZG) {
            for (const wG of this.pitCaveMetadataForChunk) {
              const SG = wG.pitMinX,
                yG = wG.pitMaxX,
                kG = wG.pitMinZ,
                UG = wG.pitMaxZ;
              if (GG < wG.reachMinX || GG > wG.reachMaxX || bG < wG.reachMinZ || bG > wG.reachMaxZ) continue;
              const YG = GG + wG.pitXZPerturbNoiseGenerator.getOctaves(GG, bG),
                VG = bG + wG.pitXZPerturbNoiseGenerator.getOctaves(GG + 430, bG - 330);
              if (YG < SG || YG > yG || VG < kG || VG > UG) continue;
              const pG = null === wG.pitHeightPerturbNoiseGenerator,
                fG = wG.pitFloorYPerturbNoiseGenerator.getOctaves(GG, bG),
                QG = pG ? 0 : wG.pitHeightPerturbNoiseGenerator.getOctaves(GG, bG);
              let KG = wG.pitFloorY + fG,
                hG = wG.pitFloorY + wG.pitHeight + QG;
              const dG = 4,
                JG = Math.min(YG - SG, yG - YG),
                rG = Math.min(VG - kG, UG - VG),
                zG = Math.min(JG, rG);
              if (zG < dG) {
                const ZG = 1 - zG / dG;
                KG += (5 + wG.pitMidpointYPerturbNoiseGenerator.getOctaves(GG, bG)) * ZG, pG || (hG -= (hG - KG) * ZG)
              }
              KG = Math.floor(KG), hG = Math.floor(hG), (pG || hG + 1 === this.heightmapVals.getOrGenerate(GG, bG, LG.d.GroundHeight)) && hG++;
              let EG = wG.caveType;
              null !== wG.wallType && (JG <= .9 || rG <= .9) ? EG = wG.wallType : wG.pitCeilingThickness > 0 && (hG -= wG.pitCeilingThickness, ZG.set(GG, bG, wG.ceilingType, LG.b.FloorY, hG), ZG.set(GG, bG, wG.ceilingType, LG.b.CeilingY, hG + wG.pitCeilingThickness)), ZG.set(GG, bG, EG, LG.b.FloorY, KG), ZG.set(GG, bG, EG, LG.b.CeilingY, hG)
            }
          }
          generateAndSetRavineCaves(GG, bG, ZG) {
            for (const SG of this.ravineCaveMetadataForChunk) {
              const yG = SG.ravineCentre,
                kG = SG.ravineWidth,
                UG = SG.ravineLength,
                YG = GG - yG[0],
                VG = bG - yG[1];
              if (YG * YG + VG * VG > SG.reachDistanceSquared) continue;
              if (Math.abs(YG * SG.axisNormalX + VG * SG.axisNormalZ) > SG.reachFromAxis) continue;
              const pG = GG + SG.ravineXZPerturbNoiseGenerator.getOctaves(GG, bG),
                fG = bG + SG.ravineXZPerturbNoiseGenerator.getOctaves(GG + 430, bG - 330),
                QG = (0, wG.C)(yG, pG, fG);
              if (QG > UG) continue;
              const KG = [pG, fG],
                hG = yG,
                dG = [yG[0] + SG.ravineDirection[0], yG[1] + SG.ravineDirection[1]],
                JG = (0, wG.t)(KG, hG, dG),
                rG = kG * (1 - QG / UG);
              if (JG > rG) continue;
              const zG = SG.ravineYPerturbNoiseGenerator.getOctaves(GG, bG);
              let EG = SG.ravineFloorY + zG,
                oG = SG.ravineFloorY + SG.ravineHeight + zG;
              const XG = 3,
                uG = rG - JG;
              if (uG < XG) {
                const GG = 1 - uG / XG;
                EG += SG.ravineHeight * GG
              }
              EG = Math.floor(EG), oG = Math.floor(oG), oG + 1 === this.heightmapVals.getOrGenerate(GG, bG, LG.d.GroundHeight) && oG++, ZG.set(GG, bG, SG.caveType, LG.b.FloorY, EG), ZG.set(GG, bG, SG.caveType, LG.b.CeilingY, oG)
            }
          }
          generateAndSetSphereCaves(GG, bG, ZG) {
            for (const wG of this.sphereCaveMetadataForChunk) {
              const SG = GG - wG.sphereCentreX,
                yG = bG - wG.sphereCentreZ;
              if (SG * SG + yG * yG > wG.reachDistanceSquared) continue;
              const kG = GG + wG.sphereXZPerturbNoiseGenerator.getOctaves(GG, bG),
                UG = bG + wG.sphereXZPerturbNoiseGenerator.getOctaves(GG + 430, bG - 330),
                YG = wG.sphereCentreX - kG,
                VG = wG.sphereCentreZ - UG,
                pG = YG * YG + VG * VG;
              if (pG > wG.sphereRadiusSquared) continue;
              const fG = Math.sqrt(wG.sphereRadiusSquared - pG),
                QG = Math.floor(wG.sphereCentreY - fG);
              let KG = Math.floor(wG.sphereCentreY + fG);
              KG + 1 === this.heightmapVals.getOrGenerate(GG, bG, LG.d.GroundHeight) && KG++, ZG.set(GG, bG, wG.caveType, LG.b.FloorY, QG), ZG.set(GG, bG, wG.caveType, LG.b.CeilingY, KG)
            }
          }
          removeCavesNearWater(GG, bG, ZG) {
            const wG = this.heightmapVals.getOrGenerate(GG, bG, LG.d.CavesAllowedBelowY);
            if (wG !== yG.j)
              for (let SG = 0; SG < this.numCaveTypes; SG++) {
                if (ZG.get(GG, bG, SG, LG.b.CeilingY) <= wG) continue;
                ZG.get(GG, bG, SG, LG.b.FloorY) <= wG ? ZG.set(GG, bG, SG, LG.b.CeilingY, wG) : (ZG.set(GG, bG, SG, LG.b.FloorY, yG.n), ZG.set(GG, bG, SG, LG.b.CeilingY, yG.n))
              }
          }
        }
        JG.SPAGHETTI_CAVE_EDGE_CUTOFF = .08;
        const rG = new VG.b("cave chunk metadata", 100, 6e4);
        class zG {
          constructor(GG, bG, ZG, LG) {
            this.seed = GG, this.spaghettiCaveMetadata = void 0, this.pitCaveMetadata = void 0, this.ravineCaveMetadata = void 0, this.sphereCaveMetadata = void 0, this.numCaveTypes = void 0, this.caveTypeToBlockId = void 0, this.caveTypePrioritization = void 0, this.perChunkCache = rG.partition();
            let yG = 0;
            const VG = [],
              pG = [];
            {
              const {
                spaghettiCaveMetadata: bG,
                nextCaveType: ZG
              } = function(GG, bG) {
                const ZG = {
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
                  SG = [...[{
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
                  }].map((GG => ({
                    ...ZG,
                    ...GG
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
                  LG = [];
                for (let yG = 0; yG < SG.length; yG++) {
                  const ZG = SG[yG];
                  let kG = 0;
                  for (const GG of ZG.caveYPerturbNoiseParams) kG += GG.amplitude;
                  for (let SG = 0; SG < ZG.count; SG++) LG.push({
                    caveType: bG++,
                    caveEdgeNoiseGenerator: new wG.g(ZG.caveEdgeNoiseParams, `${GG}CaveCutoff${yG}${SG}`),
                    caveHeightNoiseGenerator: new wG.h(ZG.caveHeightNoiseParams, ZG.caveHeightNoiseThresholdParams, `${GG}Cave${yG}${SG}`),
                    caveHeightThreshold: KG(ZG.caveHeightNoiseThresholdParams),
                    caveHeightMax: ZG.caveHeightMax,
                    caveHeightPercentageUpperBound: ZG.caveHeightPercentageUpperBound,
                    caveXZPerturbNoiseGenerator: new wG.g(ZG.caveXZPerturbNoiseParams, `${GG}CaveHeightPerturb${yG}${SG}`),
                    caveYPerturbNoiseGenerator: new wG.g(ZG.caveYPerturbNoiseParams, `${GG}CaveHeightNoise${yG}${SG}`),
                    caveCentreY: ZG.caveCentreYMin + kG
                  })
                }
                return {
                  spaghettiCaveMetadata: LG,
                  nextCaveType: bG
                }
              }(GG, yG);
              this.spaghettiCaveMetadata = bG, yG = ZG
            } {
              const {
                pitCaveMetadata: fG,
                nextCaveType: QG
              } = function(GG, bG, ZG, LG, yG, VG, pG) {
                const fG = [{
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
                    fillBlockId: (0, SG.I)(LG, ZG),
                    wallBlockIds: new kG.e([{
                      value: ZG.Stone.id,
                      weight: 3
                    }, {
                      value: ZG["Compressed Messy Stone"].id,
                      weight: 5
                    }, {
                      value: ZG.Magma.id,
                      weight: 1
                    }]),
                    ceilingParams: {
                      blockIds: 0,
                      minThickness: 2,
                      maxThickness: 5
                    },
                    numChunksBetweenPits: 2
                  }],
                  QG = [];
                for (const SG of fG) {
                  let ZG = 0;
                  for (const GG of SG.pitXZPerturbNoiseParams) ZG += GG.amplitude;
                  for (let LG = 0; LG < SG.count; LG++) {
                    const LG = QG.length,
                      fG = new wG.g(SG.pitXZPerturbNoiseParams, `${GG}DistPitPerturb${LG}`),
                      KG = `${GG}PitGen${LG}`,
                      hG = new YG.d("cavePit", SG.numChunksBetweenPits, !0, !1, KG, 100, bG),
                      dG = new UG(bG, hG, SG.pitMaxWidth + 2 * ZG, KG);
                    console.assert(dG.chunkSearchRadius <= SG.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${dG.chunkSearchRadius} ${SG.numChunksBetweenPits/2}`);
                    const JG = new kG.g(SG.pitMinWidth, SG.pitMaxWidth),
                      rG = new kG.g(SG.pitMinFloorY, SG.pitMaxFloorY),
                      zG = new kG.g(SG.pitMinHeight, SG.pitMaxHeight),
                      EG = new wG.g(SG.pitFloorYPerturbNoiseParams, `${GG}yPitPerturb${LG}`);
                    let oG = null;
                    null !== SG.pitHeightPerturbNoiseParams && (oG = new wG.g(SG.pitHeightPerturbNoiseParams, `${GG}heightPitPerturb${LG}`));
                    const XG = new wG.g(SG.pitMidpointNoiseParams, `${GG}edgesPitPerturb${LG}`),
                      uG = yG++;
                    VG[uG] = SG.fillBlockId;
                    let iG = null;
                    null !== SG.wallBlockIds && (iG = yG++, VG[iG] = SG.wallBlockIds);
                    let CG = null,
                      WG = null;
                    null !== SG.ceilingParams && (CG = yG++, WG = new kG.g(SG.ceilingParams.minThickness, SG.ceilingParams.maxThickness), VG[CG] = SG.ceilingParams.blockIds), void 0 !== SG.priority && (pG[uG] = SG.priority, null !== iG && (pG[iG] = SG.priority), null !== CG && (pG[CG] = SG.priority)), QG.push({
                      caveType: uG,
                      wallType: iG,
                      ceilingType: CG,
                      pitCeilingThicknessDistribution: WG,
                      pitPointGenerator: dG,
                      pitXZPerturbNoiseGenerator: fG,
                      pitWidthDistribution: JG,
                      pitLengthDistribution: JG,
                      pitFloorYDistribution: rG,
                      pitHeightDistribution: zG,
                      pitFloorYPerturbNoiseGenerator: EG,
                      pitHeightPerturbNoiseGenerator: oG,
                      pitMidpointYPerturbNoiseGenerator: XG
                    })
                  }
                }
                return {
                  pitCaveMetadata: QG,
                  nextCaveType: yG
                }
              }(GG, bG, ZG, LG, yG, VG, pG);
              this.pitCaveMetadata = fG, yG = QG
            } {
              const {
                ravineCaveMetadata: ZG,
                nextCaveType: SG
              } = function(GG, bG, ZG) {
                const SG = {
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
                  LG = [];
                for (let yG = 0; yG < SG.count; yG++) {
                  const VG = SG,
                    pG = new wG.g(VG.ravineXZPerturbNoiseParams, `${GG}DistRavPerturb${yG}`);
                  let fG = 0;
                  for (const GG of VG.ravineXZPerturbNoiseParams) fG += GG.amplitude;
                  const QG = new wG.g(VG.ravineYPerturbNoiseParams, `${GG}yRavinePerturb${yG}`),
                    KG = `${GG}RavineGen${yG}`,
                    hG = new YG.d("caveRav", VG.numChunksBetweenRavines, !0, !1, KG, 100, bG),
                    dG = new UG(bG, hG, Math.max(VG.ravineMaxLength, VG.ravineMaxWidth) + 2 * fG, KG);
                  console.assert(dG.chunkSearchRadius <= VG.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${dG.chunkSearchRadius} ${VG.numChunksBetweenRavines/2}`);
                  const JG = new kG.g(VG.ravineMinWidth, VG.ravineMaxWidth),
                    rG = new kG.g(VG.ravineMinLength, VG.ravineMaxLength),
                    zG = new kG.g(VG.ravineMinFloorY, VG.ravineMaxFloorY, !0),
                    EG = new kG.g(VG.ravineMinHeight, VG.ravineMaxHeight),
                    oG = new kG.j(-1, 1);
                  LG.push({
                    caveType: ZG++,
                    ravinePointGenerator: dG,
                    ravineXZPerturbNoiseGenerator: pG,
                    ravineYPerturbNoiseGenerator: QG,
                    ravineWidthDistribution: JG,
                    ravineLengthDistribution: rG,
                    ravineFloorYDistribution: zG,
                    ravineHeightDistribution: EG,
                    ravineXZDirectionDistribution: oG
                  })
                }
                return {
                  ravineCaveMetadata: LG,
                  nextCaveType: ZG
                }
              }(GG, bG, yG);
              this.ravineCaveMetadata = ZG, yG = SG
            } {
              const {
                sphereCaveMetadata: ZG,
                nextCaveType: SG
              } = function(GG, bG, ZG) {
                const SG = {
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
                  LG = [];
                for (let yG = 0; yG < SG.count; yG++) {
                  const VG = SG,
                    pG = new wG.g(VG.sphereXZPerturbNoiseParams, `${GG}DistSpherePerturb${yG}`);
                  let fG = 0;
                  for (const GG of VG.sphereXZPerturbNoiseParams) fG += GG.amplitude;
                  const QG = `${GG}SphereGen${yG}`,
                    KG = new YG.d("caveSph", VG.numChunksBetweenSpheres, !0, !1, QG, 100, bG),
                    hG = new UG(bG, KG, 2 * (VG.sphereMaxRadius + fG), QG);
                  console.assert(hG.chunkSearchRadius <= VG.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${hG.chunkSearchRadius} ${VG.numChunksBetweenSpheres/2}`);
                  const dG = new kG.g(VG.sphereMinRadius, VG.sphereMaxRadius, !0),
                    JG = new kG.g(VG.sphereMinCentreY, VG.sphereMaxCentreY);
                  LG.push({
                    caveType: ZG,
                    spherePointGenerator: hG,
                    sphereXZPerturbNoiseGenerator: pG,
                    sphereRadiusDistribution: dG,
                    sphereCentreYDistribution: JG
                  })
                }
                return {
                  sphereCaveMetadata: LG,
                  nextCaveType: ZG
                }
              }(GG, bG, yG);
              this.sphereCaveMetadata = ZG, yG = SG
            }
            this.numCaveTypes = yG;
            for (let wG = 0; wG < this.numCaveTypes; wG++) void 0 === VG[wG] && (VG[wG] = 0), void 0 === pG[wG] && (pG[wG] = 0);
            this.caveTypeToBlockId = VG, this.caveTypePrioritization = pG.map(((GG, bG) => ({
              caveType: bG,
              priority: GG
            }))).sort(((GG, bG) => GG.priority - bG.priority)).map((GG => {
              let {
                caveType: bG
              } = GG;
              return bG
            }))
          }
          getOrCreateCaveGeneratorForChunk(GG, bG, ZG) {
            const wG = this.getOrBuildCaveMetadataForChunk(GG, bG);
            return new JG(ZG, wG.spaghettiCaveMetadataForChunk, wG.pitCaveMetadataForChunk, wG.ravineCaveMetadataForChunk, wG.sphereCaveMetadataForChunk, this.numCaveTypes)
          }
          getOrBuildCaveMetadataForChunk(GG, bG) {
            const ZG = this.perChunkCache.get(GG, bG);
            if (!(0, SG.L)(ZG)) return ZG;
            const wG = [(0, SG.z)(GG), (0, SG.z)(bG)],
              LG = {
                spaghettiCaveMetadataForChunk: this.spaghettiCaveMetadata,
                pitCaveMetadataForChunk: this.buildPitCaveMetadataForChunk(wG),
                ravineCaveMetadataForChunk: this.buildRavineCaveMetadataForChunk(wG),
                sphereCaveMetadataForChunk: this.buildSphereCaveMetadataForChunk(wG)
              };
            return this.perChunkCache.set(GG, bG, LG), LG
          }
          buildPitCaveMetadataForChunk(GG) {
            const bG = [];
            for (let SG = 0; SG < this.pitCaveMetadata.length; SG++) {
              const LG = this.pitCaveMetadata[SG],
                yG = LG.pitPointGenerator.getSurroundingFeatures(GG[0], GG[1]);
              for (const GG of yG) {
                var ZG, wG;
                const yG = GG[0],
                  UG = GG[1],
                  YG = new kG.f(`pit${yG}|${UG}|${SG}${this.seed}`),
                  VG = LG.pitWidthDistribution.sample(YG) >> 1,
                  pG = LG.pitLengthDistribution.sample(YG) >> 1,
                  fG = yG - VG,
                  QG = yG + VG,
                  KG = UG - pG,
                  hG = UG + pG,
                  dG = LG.pitXZPerturbNoiseGenerator.maxMagnitude(),
                  JG = LG.pitFloorYDistribution.sample(YG),
                  rG = LG.pitHeightDistribution.sample(YG),
                  zG = null !== (ZG = null === (wG = LG.pitCeilingThicknessDistribution) || void 0 === wG ? void 0 : wG.sample(YG)) && void 0 !== ZG ? ZG : 0;
                bG.push({
                  caveType: LG.caveType,
                  wallType: LG.wallType,
                  ceilingType: LG.ceilingType,
                  pitCeilingThickness: zG,
                  pitMinX: fG,
                  pitMaxX: QG,
                  pitMinZ: KG,
                  pitMaxZ: hG,
                  reachMinX: fG - dG,
                  reachMaxX: QG + dG,
                  reachMinZ: KG - dG,
                  reachMaxZ: hG + dG,
                  pitFloorY: JG,
                  pitHeight: rG,
                  pitXZPerturbNoiseGenerator: LG.pitXZPerturbNoiseGenerator,
                  pitFloorYPerturbNoiseGenerator: LG.pitFloorYPerturbNoiseGenerator,
                  pitHeightPerturbNoiseGenerator: LG.pitHeightPerturbNoiseGenerator,
                  pitMidpointYPerturbNoiseGenerator: LG.pitMidpointYPerturbNoiseGenerator
                })
              }
            }
            return bG
          }
          buildRavineCaveMetadataForChunk(GG) {
            const bG = [];
            for (let ZG = 0; ZG < this.ravineCaveMetadata.length; ZG++) {
              const SG = this.ravineCaveMetadata[ZG],
                LG = SG.ravinePointGenerator.getSurroundingFeatures(GG[0], GG[1]);
              for (const GG of LG) {
                const LG = GG[0],
                  yG = GG[1],
                  UG = new kG.f(`rav${LG}|${yG}|${ZG}${this.seed}`),
                  YG = SG.ravineWidthDistribution.sample(UG),
                  VG = SG.ravineLengthDistribution.sample(UG),
                  pG = SG.ravineFloorYDistribution.sample(UG),
                  fG = SG.ravineHeightDistribution.sample(UG),
                  QG = [SG.ravineXZDirectionDistribution.sample(UG), SG.ravineXZDirectionDistribution.sample(UG)];
                (0, wG.A)(QG);
                const KG = Math.SQRT2 * SG.ravineXZPerturbNoiseGenerator.maxMagnitude(),
                  hG = VG + KG,
                  dG = Math.hypot(QG[0], QG[1]);
                bG.push({
                  caveType: SG.caveType,
                  ravineCentre: GG,
                  ravineWidth: YG,
                  ravineLength: VG,
                  ravineFloorY: pG,
                  ravineHeight: fG,
                  ravineDirection: QG,
                  reachDistanceSquared: hG * hG,
                  axisNormalX: -QG[1] / dG,
                  axisNormalZ: QG[0] / dG,
                  reachFromAxis: Math.max(YG, 0) + KG,
                  ravineXZPerturbNoiseGenerator: SG.ravineXZPerturbNoiseGenerator,
                  ravineYPerturbNoiseGenerator: SG.ravineYPerturbNoiseGenerator
                })
              }
            }
            return bG
          }
          buildSphereCaveMetadataForChunk(GG) {
            const bG = [];
            for (let ZG = 0; ZG < this.sphereCaveMetadata.length; ZG++) {
              const wG = this.sphereCaveMetadata[ZG],
                SG = wG.spherePointGenerator.getSurroundingFeatures(GG[0], GG[1]);
              for (const GG of SG) {
                const SG = GG[0],
                  LG = GG[1],
                  yG = new kG.f(`sph${SG}|${LG}|${ZG}${this.seed}`),
                  UG = wG.sphereRadiusDistribution.sample(yG),
                  YG = UG * UG,
                  VG = wG.sphereCentreYDistribution.sample(yG),
                  pG = UG + Math.SQRT2 * wG.sphereXZPerturbNoiseGenerator.maxMagnitude();
                bG.push({
                  caveType: wG.caveType,
                  sphereRadiusSquared: YG,
                  sphereCentreX: SG,
                  sphereCentreY: VG,
                  sphereCentreZ: LG,
                  reachDistanceSquared: pG * pG,
                  sphereXZPerturbNoiseGenerator: wG.sphereXZPerturbNoiseGenerator
                })
              }
            }
            return bG
          }
        }
      },
      40084: (GG, bG, ZG) => {
        ZG.d(bG, {
          d: () => dG
        });
        var wG = ZG(40077),
          SG = ZG(40061),
          LG = ZG(1589),
          yG = ZG.n(LG),
          kG = ZG(604),
          UG = ZG(2837),
          YG = ZG.n(UG),
          VG = ZG(38135),
          pG = ZG(40088),
          fG = ZG(39551),
          QG = ZG(40097);

        function KG(GG, bG, ZG) {
          const wG = new fG.c;
          for (const SG of ZG) {
            const GG = wG.get(SG.chunkX, SG.chunkY, SG.chunkZ);
            if (!(0, kG.L)(GG)) throw new Error(`Duplicate chunk at ${SG.chunkX}, ${SG.chunkY}, ${SG.chunkZ}`);
            wG.set(SG.chunkX, SG.chunkY, SG.chunkZ, SG.rle)
          }
          return new pG.c(GG, {
            x: 0,
            y: 0,
            z: 0
          }, bG, wG)
        }
        const hG = {
          platformStone: KG("platformStone", {
            x: 41,
            y: 14,
            z: 41
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, QG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, QG.c)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB1gjdBgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAApYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBHRoABQQBgQEfAAEf+gYABQIBgQEaAAUCAYEBGgAFAgGIARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAHVCAEfHgAB1gjbBgAFAgGBARoABQIBiAEaAAUCAYEBGgAFBAGBAR4AAZYBAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgKBARkABQICgQEZAAUCAYEBAR0ZAAUEAYEBAYgBHQADgQEdAAMfHQADHB0AAxwdAAEcAh0dAAId2gUABQICgQEZAAUCAoEBGQAFAgKBARkABB8BAgKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHQEcHgACHboFAAUcBIEBFwAFHAOBAQEfFwAFHAKBAQEfGAAFHAKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHAIdHQACHboFAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAGHAEiGQAGHJoHAAkcFwAHHAEiGAAGHAEiGQAGHJoHAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAHHBkABhyaBwAJHBcACBwYAAYcASIZAAYcmgcACRwXAAgcGAAGHAEiGQADHAIiARyaBwAFHASBARcABRwDgQEBHxcABRwCgQEBHxgAASIBHAIiARwCgQEdAAKBAQGIAR0AAx8dAAMcHQABHQIcHQACHQEcHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAQfAQICgQEdAAOBAR0AAx8dAAMcHQABHQIcHgABHAEdHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAUEAoEBHQADgQEdAAMfHQADHB0AAh0BHB4AAh35BQAFAgEdGgAFAgGIARoABQIBgQEaAAUEAYEBHgAB1QgBHx4AAdYI2wYABQIBiAEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBARoAApYBAwABHfoGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBGgAB1QgBlgEDAAEfGgAB1gjfBgA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, QG.c)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwBIgIcAR8GBAMAAR0BlgECAAGWAQYAAZYB9AYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYgBCwQBHwkcAR8GBA0AAZYBAdUICwABlgETAAHWCNQGAAKBAQsCCRwHAgMAAoEBCwIJHAcCAwACgQELAgkcBwIDAAEdAYgBCgQBAgEcASIHHAECBgQGAAKWAQMAAZYBAQAB1QgDgQEHAAOBAQHVCAGWARAAAdYIAx8HAAMfAdYIEgADHAcAAxwTAAMdBwADHBUAAR0HAAMcHQABHAIdHQACHaoFAA2BAQccCIEBBAAHgQEBiAEFgQEHHAiBAQQABoEBAYgBAR0FgQEHHAiBAQQAAR0BiAELgQECIgUcCIEBBwABHQYfA4EBBwADgQEFHw4AAx8HAAMfEwADHAcAAxwTAAEdAhwHAAMcEwABHQEcAR0HAAIcAR0UAAIdBwABHQEcAR0dAAIdtAUAA4EBBxwDgQETAAOBAQccAoEBAYgBEwADgQECIgIcAiIBHAKBAQEdEwADgQEHAAKBAQGIARMAAYgBAoEBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAIdARwHAAMdFAACHQcAAR3XBQABgQEHHAGBARcAAYEBBBwBIgIcAYEBFwABHwcAAR+3BwABgQEHHAGBARcAAR8HAAEfx78BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, QG.c)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI3QYABYEBGwAFgQEbAAOBAQGIAQEdGwAEgQEBiAEbAAUf+9YBAA==")
          }]),
          smp2SpawnHub: KG("smp2SpawnHub", {
            x: 64,
            y: 24,
            z: 64
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, QG.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, QG.c)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, QG.c)("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AgEAGwQBHwMCDgABlwGxBwABBB8CAQAXBAgCCQABlgEOAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAEEHwIBABcECAICAAGWAQUAAZYBAwABlwEKAAGWAQWBAQMcGAAFgQEDHBgAAR8DgQEBHxwAAxwdAAMcHQACHAEdHQACHB4AAhwBHR0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARsAAYEBARwBgQEBHASBARgAAYEBBBwBgQECHBgAAYgBA4EBARwDgQEbAAGBAQQcGwAFgQGAAgACBB4CAgAWBAgCGAAFgQEDHBgABYEBAxwYAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGwAIgQEYAAiBARgACIEBGwAFgQEbAAWBAYACAAIEHgICABYECAIWAAGWAQEABYEBAxwYAAGIAQSBAQMcGAABHwOBAQEfHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHgACHB0AAR0CHB0AAxwdAAMcHQADHBwAAR8DHAEfGwABiAEBHAGBAQEcAYEBGwABgQEBHAGBAQEcBIEBGAABgQEEHAGBAQIcGAAEgQEBHAOBARsAAYEBBBwbAAGIAQSBAYACAAMEDAIGBAsCAwAMBAYAAwQIAhgAAYgBA4EBAYgBAxwYAAEdAYgBA4EBGwAFH5sDAAUfGwABHQEAAYEBAQABgQEbAAGIAQEAAYEBAQAEgQEYAAGBAQQAAYEBGgAEgQEBAAKBAQGIARsAAYgBHwABHQGIAQOBAYACAAcEBQIKBAoCBwAFBAoACgTABwAgBOAHAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, QG.c)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEBgIMHwEdAwIBHQIfBQIBBAEAAh0CHBUAAYgBA4EBAR0bAASBAQGIARsABR+bAwAFHxsABYEBGwAFgQEcAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAASBAQGIAYICAB8CAQQGAgEfDAQCAgQEBQIBBBoABIEBAYgBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxwAARwBgQEBHB0AARwBgQEBHB0AARwBgQEBHBwABYEBGwAEgQEBiAEbAAOBAQGIAQEdggIAHwIBBAYCAR8MBAICBAQFAgEEGgAFgQEbAAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHBwAAR8DHAEfGwAFgQEbAAWBARwAARwBgQEBHBwABYEBwgIAHgICBAMCBB8MBAICBAQEAgGBARsAAYgBBIEBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAEdAhweAAIcHQABHQIcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8cAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAAGIAQSBAcICAB4CAgQDAgEfDwQCAgQEBAIBgQENAAGWAQ0AAR0BiAEDgQEbAAGIAQOBAQGIARsABR+bAwAFHxsABIEBAR0bAAWBARsAAYgBBIEBGwABHQGIAQOBAcICAB4CAgQDAgEfDwQCAgkEHQABlgGkBwAeAgIEAwIBHw8EAgIJBMIHAB4CAgQDAgEfDwQCAgkECwABmwG2BwAeAgIEAwIBHw8EAgIJBAwAAZsBBAABlgGwBwAeAgIEAwIBHw8EAgIJBAkAAZYBuAcAHwIBBAMCAR8PBAICCgQHAAGWARYAAZYBogcAHwIBBAMCAR8PBAICCgQdAAGWAaMHAB8CAQQDAgEfDwQCAgoEwQcAHwIBBAMCAR0PBAICCgQPAAIwsAcAHwIBBAMCAR8PBAICCgQPAAIwsAcAHwIBBAMCAR0OBAMCCgQbAAGdAaUHAB4CAgQVAgkEGwABnQEBAAGdAaQHAB4CAgQUAgoEwgcAHgICBAQCCAQGAgwEwgcAHQIDBAMCAR0ZBA4AARkGEwEZGAABGQYAARkYAAEZBgABGRcAAdUQARkGAAEZAdMQFgAB4RACNAQAAjQB3xAYAAY0jgYAHQIDBAMCAR8IBAYCCwQOAAETBgABEwGWAVYAAZ0RCAABmxEWAAGpEQI3BAACNwGnERgABjeOBgAcAgQEAwIBHwgEBgIKBA8AARMGAAETVwAB1RAIAAHTEBYAAeEQAjQEAAI0Ad8QGAAGNI4GABsCBQQIAgQEBgIJBAUAAxwBHQGIAQOBAQMAARMGAAETEAABiAEDgQEBiAEbAAUfIgABnREIAAGbERYAAakRAjcEAAI3AacRGAAGN7ECAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAGwIFBAgCEwQFAAMcBYEBAwABGQYTARkNAAMcBYEBAwABGQYAARkQAAEfA4EBAR8DAAEZBgABGREAAxwDAAHVEAEZBgABGQHTEBAAAxwDAAHhEAI0BAACNAHfEBAAAxwFAAY0EgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8bAAGBAQEcAYEBARwBgQEYAASBAQEcAYEBARwBgQEYAAIcAYEBBBwBgQEYAAOBAQEcBIEBGAAEHAGBARsABIEBAYgBmwIAGwIFBAgCEwQFAAMcBYEBBAABlgELAAGWAQcAAxwFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGAAIgQEYAAiBARgACIEBGAAFgQEbAAWBAZsCABoCBgQIAhIEBgADHASBAQGIAREAAZYBBgADHAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAhwBHR0AAhweAAIcAR0dAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARgABIEBARwBgQEBHAGBARgAAhwBgQEEHAGBARgAA4EBARwDgQEBiAEYAAQcAYEBGwAFgQGbAgAYAggECAIQBAgAAxwBiAECgQEBiAEBHRsABIEBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAYEBGAAEgQEBAAGBAQEAAYEBGgABgQEEAAGIARgAAR0BiAEBgQEBAAKBAQGIAQEdHAABgQEbAAWBAZsCAAoCBAQGAhYEBAAGBAgAAZwBCAABlgG6BwAgBBsAAZwBxAcA")
          }])
        };
        class dG {
          constructor(GG, bG) {
            this.rK = bG, this.chunkToFixedPointPrefabs = void 0;
            const ZG = {},
              wG = bG + rG;
            for (const {
                xZ: SG,
                x: LG,
                y: yG,
                z: kG
              }
              of GG) {
              const GG = hG[SG];
              if (void 0 === GG) throw new Error(`Fixed-point prefab "${SG}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
              const {
                dimensions: UG
              } = GG, YG = UG.x, VG = UG.y, pG = UG.z, fG = LG - (YG >> 1), QG = kG - (pG >> 1), KG = fG + YG - 1, dG = QG + pG - 1, JG = {
                schematic: GG,
                bottomLeftX: fG,
                bottomLeftZ: QG,
                floorY: yG,
                ceilingY: yG + VG - 1,
                topRightX: KG,
                topRightZ: dG
              }, rG = fG - wG, zG = KG + wG, EG = QG - wG, oG = dG + wG, XG = Math.floor(rG / bG) * bG, uG = Math.floor(EG / bG) * bG;
              for (let wG = XG; wG <= zG; wG += bG)
                for (let GG = uG; GG <= oG; GG += bG) {
                  const bG = this.getKeyForChunk(wG, GG);
                  ZG[bG] ??= [], ZG[bG].push(JG)
                }
            }
            this.chunkToFixedPointPrefabs = ZG
          }
          getFixedPointPrefabInfoForChunk(GG, bG) {
            const ZG = this.getKeyForChunk(GG, bG),
              LG = this.chunkToFixedPointPrefabs[ZG];
            if (void 0 === LG) return {
              decodedFixedPointPrefabsForChunk: [],
              nearestFixedPrefabInfoForChunk: null
            };
            const yG = [];
            for (const wG of LG) {
              const {
                schematic: GG,
                bottomLeftX: bG,
                bottomLeftZ: ZG,
                floorY: SG,
                ceilingY: LG,
                topRightX: kG,
                topRightZ: UG
              } = wG, YG = this.getDecodedPrefabSchematic(GG);
              yG.push({
                decodedPrefabSchematic: YG,
                bottomLeftX: bG,
                bottomLeftZ: ZG,
                floorY: SG,
                ceilingY: LG,
                topRightX: kG,
                topRightZ: UG
              })
            }
            const kG = new JG(LG);
            return {
              decodedFixedPointPrefabsForChunk: yG,
              nearestFixedPrefabInfoForChunk: SG.o.create(this.rK, [GG, bG], wG.e.NumFields, kG)
            }
          }
          static smoothHeightmapForFixedPointPrefab(GG, bG, ZG, SG) {
            if (null === SG) return null;
            const LG = SG.getOrGenerate(GG, bG, wG.e.DistanceToNearestFixedPrefab);
            if (LG > rG) return null;
            let yG = LG / rG;
            yG *= yG;
            const kG = SG.getOrGenerate(GG, bG, wG.e.HeightOfNearestFixedPrefab);
            return Math.floor(ZG * yG + (1 - yG) * kG)
          }
          static isNearFixedPointPrefab(GG, bG, ZG) {
            if (null === ZG) return !1;
            return ZG.getOrGenerate(GG, bG, wG.e.DistanceToNearestFixedPrefab) <= rG
          }
          static isWithinFixedPointPrefab(GG, bG, ZG) {
            if (null === ZG) return !1;
            return 0 === ZG.getOrGenerate(GG, bG, wG.e.DistanceToNearestFixedPrefab)
          }
          static getBlockFromFixedPointPrefab(GG, bG, ZG, wG) {
            const {
              bottomLeftX: SG,
              bottomLeftZ: LG,
              floorY: yG,
              ceilingY: kG,
              topRightX: UG,
              topRightZ: YG
            } = wG;
            if (GG < SG || UG < GG || bG < yG || kG < bG || ZG < LG || YG < ZG) return 0;
            const VG = GG - SG,
              pG = bG - yG,
              fG = ZG - LG;
            return wG.decodedPrefabSchematic.get(VG, pG, fG)
          }
          getKeyForChunk(GG, bG) {
            return `${GG}|${bG}`
          }
          getDecodedPrefabSchematic(GG) {
            const bG = GG.name,
              ZG = dG.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(bG);
            if (!(0, kG.L)(ZG)) return ZG;
            const {
              dimensions: wG
            } = GG, SG = YG()(new Uint16Array(wG.x * wG.y * wG.z), [wG.x, wG.y, wG.z]);
            for (let LG = 0; LG < wG.x; LG += kG.D)
              for (let bG = 0; bG < wG.y; bG += kG.D)
                for (let ZG = 0; ZG < wG.z; ZG += kG.D) {
                  const yG = YG()(new Uint16Array(kG.D * kG.D * kG.D), [kG.D, kG.D, kG.D]),
                    UG = GG.getRLEChunk((0, kG.U)(LG), (0, kG.U)(bG), (0, kG.U)(ZG));
                  VG.decode(UG, yG.data);
                  const pG = Math.min(kG.D, wG.x - LG),
                    fG = Math.min(kG.D, wG.y - bG),
                    QG = Math.min(kG.D, wG.z - ZG);
                  for (let GG = 0; GG < pG; GG++)
                    for (let wG = 0; wG < fG; wG++)
                      for (let kG = 0; kG < QG; kG++) {
                        const UG = yG.get(GG, wG, kG),
                          YG = LG + GG,
                          VG = bG + wG,
                          pG = ZG + kG;
                        SG.set(YG, VG, pG, UG)
                      }
                }
            return dG.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.set(bG, SG), SG
          }
        }
        dG.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE = new(yG())({
          max: 100,
          ttl: 6e4,
          updateAgeOnGet: !0
        });
        class JG {
          constructor(GG) {
            this.fixedPointPrefabsForChunk = GG
          }
          generateAndSet(GG, bG, ZG) {
            let SG = rG + 1,
              LG = 0;
            for (const wG of this.fixedPointPrefabsForChunk) {
              const {
                bottomLeftX: ZG,
                bottomLeftZ: yG,
                topRightX: kG,
                topRightZ: UG
              } = wG, YG = Math.max(ZG - GG, 0, GG - kG) + Math.max(yG - bG, 0, bG - UG);
              YG < SG && (SG = YG, LG = wG.floorY)
            }
            ZG.set(GG, bG, wG.e.DistanceToNearestFixedPrefab, SG), ZG.set(GG, bG, wG.e.HeightOfNearestFixedPrefab, LG)
          }
        }
        const rG = 12
      },
      40053: (GG, bG, ZG) => {
        ZG.d(bG, {
          c: () => YG,
          e: () => UG,
          f: () => kG
        });
        var wG = ZG(40061),
          SG = ZG(40077),
          LG = ZG(40068),
          yG = ZG(40084);

        function kG(GG) {
          return new wG.g([{
            amplitude: 11,
            frequency: 1 / 4e3
          }, {
            amplitude: 4,
            frequency: .001
          }], `${GG}GlobalHeightmapOffset`)
        }
        class UG {
          constructor(GG) {
            this.globalHeightmap = GG
          }
          getNoWaterHeightmapVal(GG, bG, ZG) {
            const wG = GG,
              SG = bG;
            let LG = 0;
            for (const {
                biome: kG,
                weight: UG
              }
              of ZG) LG += kG.getHeightmapVal(wG, SG) * UG;
            const yG = this.globalHeightmap.getOctaves(wG, SG);
            return Math.floor(LG) + Math.floor(yG)
          }
        }
        class YG {
          constructor(GG, bG, ZG, wG, SG) {
            this.closestBiomesForChunk = GG, this.nearestFixedPrefabInfoForChunk = bG, this.noWaterHeightmapGenerator = ZG, this.heightmapPerturb = wG, this.waterBodyGenerator = SG
          }
          generateAndSet(GG, bG, ZG) {
            const wG = this.closestBiomesForChunk.getOrGenerate(GG, bG),
              SG = Math.floor(this.heightmapPerturb.getOctaves(GG, bG)),
              yG = Math.floor(this.heightmapPerturb.getOctaves(GG + 200, bG + 778)),
              kG = this.waterBodyGenerator.columnMayHaveScatteredLakes(wG, GG, bG),
              UG = this.getWithWaterHeightmapVal(GG + SG, bG + yG, wG, kG);
            let {
              groundHeight: YG,
              waterHeight: VG,
              cavesAllowedBelowY: pG,
              isLake: fG
            } = UG;
            const QG = wG[0].biome.carveGround(GG, bG, YG);
            null !== QG && (YG = QG, VG = LG.p, pG = QG - LG.g, fG = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(GG, bG, SG, yG, ZG, YG, VG, pG, fG)
          }
          getWithWaterHeightmapVal(GG, bG, ZG, wG) {
            const SG = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(GG, bG, ZG),
              {
                distFromWater: yG,
                waterRadius: kG,
                waterHeight: UG,
                waterbedHeight: YG,
                isLake: VG,
                needOutsideWaterDist: pG
              } = this.waterBodyGenerator.getInfoNeededForWaterGen(GG, bG, wG);
            let fG = 0,
              QG = LG.p,
              KG = LG.j,
              hG = 0;
            const dG = kG + pG;
            if (yG <= dG) {
              const GG = kG + 4,
                bG = UG + 2;
              if (yG <= kG) {
                let GG = yG / kG;
                VG ? (GG *= GG * GG, fG = Math.floor(YG + (UG - YG) * GG - 2)) : (GG *= GG, fG = Math.floor(YG + (UG - YG) * GG)), QG = UG, hG = VG ? 1 : 0;
                const bG = ZG[0].biome.waterKept;
                bG < 1 && (QG = YG + Math.floor((UG - YG) * bG), fG >= QG && (QG = LG.p, hG = LG.i))
              } else if (yG <= GG) {
                const ZG = (yG - kG) / (GG - kG);
                fG = UG + Math.ceil((bG - UG) * ZG)
              } else {
                const ZG = (yG - GG) / (dG - GG);
                fG = bG + Math.ceil((SG - bG) * ZG)
              }
              KG = fG - LG.g
            } else fG = SG;
            return {
              groundHeight: fG,
              waterHeight: QG,
              cavesAllowedBelowY: KG,
              isLake: hG
            }
          }
          setHeightmapValuesWithFixedPrefabSmoothing(GG, bG, ZG, wG, kG, UG, YG, VG, pG) {
            const fG = yG.d.smoothHeightmapForFixedPointPrefab(Math.round(GG + ZG / 4), Math.round(bG + wG / 4), UG, this.nearestFixedPrefabInfoForChunk);
            null !== fG && YG > (UG = fG) && (YG = LG.p, pG = 0), kG.set(GG, bG, SG.d.GroundHeight, UG), kG.set(GG, bG, SG.d.WaterHeight, YG), kG.set(GG, bG, SG.d.CavesAllowedBelowY, VG), kG.set(GG, bG, SG.d.IsLake, pG), this.shouldCurtailCave(GG, bG, null !== fG) && kG.set(GG, bG, SG.d.CavesAllowedBelowY, UG - LG.g)
          }
          shouldCurtailCave(GG, bG, ZG) {
            if (ZG) return !0;
            const wG = Math.max(Math.abs(GG), Math.abs(bG));
            if (wG < 50) return !0;
            const SG = Math.min(Math.abs((GG - 300) % 1e3), 1e3 - Math.abs((GG - 300) % 1e3)),
              LG = Math.min(Math.abs((bG - 300) % 1e3), 1e3 - Math.abs((bG - 300) % 1e3));
            return wG > 1e4 && Math.max(SG, LG) < 50
          }
        }
      },
      40109: (GG, bG, ZG) => {
        ZG.d(bG, {
          d: () => YG
        });
        var wG = ZG(40061),
          SG = ZG(40114),
          LG = ZG.n(SG),
          yG = ZG(4265),
          kG = ZG(40148);
        const UG = new kG.b("point cells", 500, 6e4);
        class YG {
          constructor(GG, bG, ZG, wG, SG, LG, yG) {
            let kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              YG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : void 0;
            if (this.name = GG, this.seed = SG, this.minDist = void 0, this.variableDensitySettings = void 0, this.gridSize = void 0, this.cachedCells = UG.partition(), this._tempCellCoord = [0, 0], this.useIsPoint = void 0, this.useKthClosestPoint = void 0, this.useJitteredGrid = void 0, this.customCellGap = void 0, this.mostRecentlyAccessedCell = null, console.assert(Number.isInteger(bG)), this.minDist = bG, this.variableDensitySettings = kG, this.customCellGap = VG, this.useJitteredGrid = YG, this.gridSize = Math.floor(Math.sqrt(LG * Math.pow(bG, 2))), YG) {
              const GG = this.gridSize % bG;
              0 !== GG && (this.gridSize += bG - GG)
            } else {
              const GG = this.gridSize % yG;
              0 !== GG && (this.gridSize += yG - GG)
            }
            this.useIsPoint = ZG, this.useKthClosestPoint = wG
          }
          assertReachableFromChunkCentre(GG, bG) {
            const ZG = GG / 2 + bG - 1;
            if (this.gridSize < ZG) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${ZG} (chunkSize=${GG}, halfBox=${bG}). Points near chunk edges would be missed.`)
          }
          isPoint(GG, bG) {
            const ZG = this.getCellCoordFromGlobalCoord(GG, bG),
              {
                pointsSet: wG
              } = this.getCell(ZG[0], ZG[1]);
            return !!wG.has((0, kG.d)(GG, bG))
          }
          getClosestPoint(GG, bG) {
            const ZG = this.getCellCoordFromGlobalCoord(GG, bG),
              SG = this.getCell(ZG[0], ZG[1]),
              LG = this._getPointsSurroundingCell(ZG, SG);
            let yG = [0, 0],
              kG = 1e4;
            for (const UG of LG) {
              const ZG = (0, wG.C)(UG, GG, bG);
              ZG < kG && (yG = UG, kG = ZG)
            }
            return yG
          }
          getKClosestPointsWithWeights(GG, bG, ZG) {
            const wG = this.getCellCoordFromGlobalCoord(GG, bG),
              SG = this.getCell(wG[0], wG[1]);
            return this._getPointsSurroundingCell(wG, SG), this._getClosestPointsForGeneratedCell(SG, GG, bG, ZG)
          }
          getPointsAroundPoint(GG, bG) {
            const ZG = this.getCellCoordFromGlobalCoord(GG, bG),
              wG = this.getCell(ZG[0], ZG[1]);
            return this._getPointsSurroundingCell(ZG, wG)
          }
          _getPointsSurroundingCell(GG, bG) {
            if (!bG.surroundingPoints) {
              const LG = [...bG.points];
              for (let bG = GG[0] - 1; bG <= GG[0] + 1; bG++)
                for (let yG = GG[1] - 1; yG <= GG[1] + 1; yG++) wG = bG, SG = yG, ((ZG = GG)[0] !== wG || ZG[1] !== SG) && LG.push(...this.getCell(bG, yG).points);
              bG.surroundingPoints = LG
            }
            var ZG, wG, SG;
            return bG.surroundingPoints
          }
          _getClosestPointsForGeneratedCell(GG, bG, ZG, SG) {
            let LG = [0, 0],
              yG = 1e5;
            for (const YG of GG.surroundingPoints) {
              const GG = (0, wG.C)(YG, bG, ZG);
              GG < yG && (LG = YG, yG = GG)
            }
            const kG = [{
              pt: LG,
              distDiffFromFirstPt: 0,
              weight: 0
            }];
            let UG = SG;
            for (let YG = 0; YG < GG.surroundingPoints.length; YG++) {
              const VG = GG.surroundingPoints[YG];
              if (VG[0] === LG[0] && VG[1] === LG[1]) continue;
              const pG = (0, wG.C)(VG, bG, ZG) - yG;
              pG < SG && (kG.push({
                pt: VG,
                distDiffFromFirstPt: pG,
                weight: 0
              }), UG += SG - pG)
            }
            for (const wG of kG) wG.weight = (SG - wG.distDiffFromFirstPt) / UG;
            return kG
          }
          getCellCoordFromGlobalCoord(GG, bG) {
            return this._tempCellCoord[0] = Math.floor(GG / this.gridSize), this._tempCellCoord[1] = Math.floor(bG / this.gridSize), this._tempCellCoord
          }
          getCell(GG, bG) {
            if (this.mostRecentlyAccessedCell && this.mostRecentlyAccessedCell.coord[0] === GG && this.mostRecentlyAccessedCell.coord[1] === bG) return this.mostRecentlyAccessedCell;
            const ZG = this.cachedCells.get(GG, bG);
            if (ZG) return this.mostRecentlyAccessedCell = ZG, ZG;
            const {
              points: wG,
              pointsSet: SG
            } = this.generateRandomPointsForCell(GG, bG), LG = {
              coord: [GG, bG],
              points: wG,
              pointsSet: SG,
              surroundingPoints: null
            };
            return this.cachedCells.set(GG, bG, LG), this.mostRecentlyAccessedCell = LG, LG
          }
          generateRandomPointsForCell(GG, bG) {
            const ZG = GG * this.gridSize,
              wG = bG * this.gridSize;
            let SG, UG;
            if (this.useJitteredGrid) {
              const LG = new yG.f(`${GG}${bG}${this.seed}jitter`);
              SG = [];
              const kG = ZG + this.gridSize,
                UG = wG + this.gridSize;
              for (let GG = ZG; GG < kG; GG += this.minDist)
                for (let bG = wG; bG < UG; bG += this.minDist) {
                  const ZG = GG + Math.floor(LG.next() * this.minDist),
                    wG = bG + Math.floor(LG.next() * this.minDist);
                  SG.push([ZG, wG])
                }
            } else {
              const kG = new yG.f(`${GG}${bG}${this.seed}pts`),
                UG = () => kG.next();
              let YG;
              const VG = this.gridSize - (this.customCellGap || this.minDist);
              if (null === this.variableDensitySettings) YG = new(LG())({
                shape: [VG, VG],
                minDistance: this.minDist,
                maxDistance: this.minDist,
                tries: 40
              }, UG);
              else {
                const GG = this.variableDensitySettings.min,
                  bG = this.variableDensitySettings.max,
                  SG = bG - GG,
                  yG = this.variableDensitySettings.func,
                  kG = bG => (yG([bG[0] + ZG, bG[1] + wG]) - GG) / SG;
                YG = new(LG())({
                  shape: [VG, VG],
                  minDistance: GG,
                  maxDistance: bG,
                  tries: 10,
                  distanceFunction: kG
                }, UG)
              }
              SG = YG.fill().map((GG => [Math.floor(ZG + GG[0]), Math.floor(wG + GG[1])]))
            }
            if (this.useIsPoint) {
              UG = new Set;
              for (const GG of SG) UG.add((0, kG.d)(GG[0], GG[1]))
            }
            return {
              pointsSet: UG,
              points: this.useKthClosestPoint ? SG : null
            }
          }
        }
      },
      40172: (GG, bG, ZG) => {
        ZG.r(bG), ZG.d(bG, {
          WorldGenerator: () => Db
        });
        var wG = ZG(40061),
          SG = ZG(40109),
          LG = ZG(40077),
          yG = ZG(40068),
          kG = ZG(38135),
          UG = ZG(40168),
          YG = ZG(572),
          VG = ZG(604),
          pG = ZG(39551),
          fG = ZG(4265);
        let QG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto.getRandomValues(new Uint8Array(GG)).reduce(((GG, bG) => GG += (bG &= 63) < 36 ? bG.toString(36) : bG < 62 ? (bG - 26).toString(36).toUpperCase() : bG > 62 ? "-" : "_"), "")
        };
        class KG {
          constructor(GG) {
            this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(GG).map((GG => {
              let [bG, ZG] = GG;
              const wG = ZG.name;
              return void 0 !== hG[wG] ? [bG, wG] : [bG, wG.split(" ").at(-1)]
            })))
          }
          getPossibleEnchantmentsForItem(GG) {
            var bG;
            return null !== (bG = hG[this.suffixMapping[GG]]) && void 0 !== bG ? bG : []
          }
          chooseRandomEnchantmentAttributes(GG, bG, ZG) {
            const wG = [...ZG],
              SG = {
                enchantments: {},
                enchantmentTier: bG,
                id: QG()
              },
              LG = dG[bG];
            for (let kG = 0; kG < LG; kG++) {
              var yG;
              if (0 === wG.length) {
                console.warn("Ran out of enchantments to choose from");
                break
              }
              const {
                enchantments: bG
              } = SG, ZG = wG[Math.floor(GG.next() * wG.length)];
              bG[ZG] = (null !== (yG = bG[ZG]) && void 0 !== yG ? yG : 0) + 1, bG[ZG] >= JG && wG.splice(wG.indexOf(ZG), 1)
            }
            return SG
          }
        }
        const hG = {
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
          dG = {
            "Tier 1": 1,
            "Tier 2": 2,
            "Tier 3": 3,
            "Tier 4": 4,
            "Tier 5": 5
          },
          JG = 3;
        const rG = [0, 90, 180, 270],
          zG = /^(meta\|rot\d)\|([lrud]+)$/,
          EG = "nesw",
          oG = /^meta\|([nesw]*)\|?(Stacked)?$/,
          XG = function(GG) {
            const bG = new WeakMap;
            return (ZG, wG) => {
              let SG = bG.get(ZG);
              return void 0 === SG && (SG = GG(ZG, wG), bG.set(ZG, SG)), SG
            }
          }((GG => new uG(GG)));
        class uG {
          constructor(GG) {
            this.blockMetadata = GG, this.blockIdMappings = new Map, this.maxBlockId = void 0;
            const bG = new Set(Object.keys(GG).map((bG => GG[bG].id)));
            bG.add(0), this.maxBlockId = Math.max(...bG)
          }
          static
          for (GG) {
            return XG(GG)
          }
          getBlockIdMapping(GG, bG) {
            const ZG = this.getBlockIdMappingKey(GG, bG);
            let wG = this.blockIdMappings.get(ZG);
            return void 0 === wG && rG.includes(GG) && (wG = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, GG, bG), this.blockIdMappings.set(ZG, wG)), wG
          }
          turnBlockId(GG, bG, ZG) {
            return this.mapBlockId(this.blockMetadata[GG], bG, this.getRotationMapping(bG, ZG), ZG)
          }
          getBlockIdMappingKey(GG, bG) {
            return `r${GG}|m${Number(bG)}`
          }
          createBlockIdMapping(GG, bG, ZG, wG) {
            const SG = new Uint16Array(bG + 1),
              LG = this.getRotationMapping(ZG, wG);
            for (const yG in GG) {
              const bG = GG[yG];
              SG[bG.id] = this.mapBlockId(bG, ZG, LG, wG)
            }
            return SG
          }
          getRotationMapping(GG, bG) {
            const ZG = Math.round(GG / 90),
              wG = new Uint8Array(4);
            for (let SG = 0; SG < 4; SG++) wG[SG] = (4 + SG - ZG) % 4;
            if (bG) {
              let GG = wG[0];
              wG[0] = wG[1], wG[1] = GG, GG = wG[2], wG[2] = wG[3], wG[3] = GG
            }
            return wG
          }
          mapBlockId(GG, bG, ZG, wG) {
            var SG;
            const {
              blockMetadata: LG
            } = this, yG = Math.round(bG / 90), {
              id: kG,
              meta: UG
            } = GG, {
              rot: YG,
              rootName: VG,
              metaStr: pG
            } = UG;
            let fG;
            const [, QG, KG] = null !== (SG = oG.exec(pG)) && void 0 !== SG ? SG : [];
            if (void 0 !== QG) {
              var hG, dG;
              fG = null !== (hG = null === (dG = LG[`${VG}|meta|${[EG.split("").filter(((GG,bG)=>QG.split("").some((GG=>{const ZG=EG.indexOf(GG);return((wG?3-ZG:ZG)+yG)%4===bG})))).join(""),KG].filter(Boolean).join("|")}`]) || void 0 === dG ? void 0 : dG.id) && void 0 !== hG ? hG : kG
            } else if (null === YG) fG = kG;
            else {
              var JG, rG;
              const GG = ZG[YG - 1] + 1;
              let bG = pG.replace(`rot${YG}`, `rot${GG}`);
              wG && UG.stairsCorner && (bG = bG.replace(/(Left|Right)$/, (GG => "Left" === GG ? "Right" : "Left"))), wG && "Chest" === VG && (bG = bG.replace(/\|(left|right)$/, ((GG, bG) => "left" === bG ? "|right" : "|left")));
              const SG = zG.exec(bG);
              if (wG && null !== SG) {
                const GG = "lrud".split("").filter((GG => SG[2].includes("l" === GG ? "r" : "r" === GG ? "l" : GG)));
                bG = `${SG[1]}|${GG.join("")}`
              }
              const yG = `${VG}|${bG}`;
              if (fG = null !== (JG = null === (rG = LG[yG]) || void 0 === rG ? void 0 : rG.id) && void 0 !== JG ? JG : null, null === fG) {
                const GG = LG[VG];
                fG = GG.rootMetaDesc === yG ? GG.id : kG
              }
            }
            return fG
          }
        }
        var iG = ZG(2837),
          CG = ZG.n(iG),
          WG = ZG(40084);

        function mG(GG, bG, ZG, wG, SG) {
          for (let kG = 0; kG < ZG.numCaveTypes; kG++) {
            if (wG && 0 !== ZG.caveTypeToBlockIds[kG]) continue;
            const UG = ZG.getOrGenerate(GG, bG, kG, LG.b.FloorY);
            if (UG === yG.n) continue;
            FG(SG, UG, ZG.getOrGenerate(GG, bG, kG, LG.b.CeilingY))
          }
        }

        function IG(GG, bG, ZG, wG) {
          const SG = [];
          return mG(GG, bG, ZG, wG, SG), SG
        }

        function FG(GG, bG, ZG) {
          let wG = 0;
          for (; wG < GG.length;) {
            const SG = GG[wG];
            if (bG > SG.ceilingY) break;
            ZG < SG.floorY ? wG++ : (bG = Math.min(SG.floorY, bG), ZG = Math.max(SG.ceilingY, ZG), GG.splice(wG, 1))
          }
          GG.splice(wG, 0, {
            floorY: bG,
            ceilingY: ZG
          })
        }
        const vG = new fG.e([{
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
          aG = new fG.e([{
            value: !1,
            weight: 1
          }, {
            value: !0,
            weight: 1
          }]);
        let cG, lG = function(GG) {
          return GG[GG.GUARANTEED_AIR = -1] = "GUARANTEED_AIR", GG
        }({});
        const jG = new fG.e(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((GG => ({
          value: GG,
          weight: 1
        }))));
        class PG {
          constructor(GG) {
            this.mobType = GG
          }
          sample(GG) {
            const bG = `${jG.sample(GG)} ${this.mobType}`;
            return {
              customDisplayName: bG,
              customAttributes: {
                mobSettings: {
                  name: bG
                }
              }
            }
          }
        }
        class MG {
          constructor(GG) {
            this.itemCategoryDistributions = void 0, this.shouldEnchantDistribution = void 0, this.enchantmentTier = void 0;
            const bG = [];
            for (const wG of GG.itemCategories) {
              const GG = new fG.g(wG.minItems, wG.maxItems + 1),
                SG = [];
              for (const bG of wG.items) {
                var ZG;
                const GG = bG.amount ? new fG.g(bG.amount.min, bG.amount.max + 1) : null,
                  wG = null !== (ZG = bG.itemAttributesDistribution) && void 0 !== ZG ? ZG : null;
                SG.push({
                  weight: bG.frequency,
                  value: {
                    name: bG.name,
                    amountDistribution: GG,
                    attributesDistribution: wG
                  }
                })
              }
              const LG = new fG.e(SG);
              bG.push({
                numItemsDistribution: GG,
                itemDistribution: LG
              })
            }
            this.itemCategoryDistributions = bG, this.shouldEnchantDistribution = new fG.b(GG.enchantmentProbability), this.enchantmentTier = GG.enchantmentTier
          }
          sample(GG) {
            const bG = Array(VG.o).fill(null);
            let ZG = 0;
            for (const YG of this.itemCategoryDistributions) {
              const VG = YG.numItemsDistribution.sample(GG);
              for (let pG = 0; pG < VG; pG++, ZG++) {
                var wG, SG, LG, yG, kG, UG;
                const VG = YG.itemDistribution.sample(GG),
                  pG = VG.name,
                  fG = null !== (wG = null === (SG = VG.amountDistribution) || void 0 === SG ? void 0 : SG.sample(GG)) && void 0 !== wG ? wG : null,
                  QG = null !== (LG = null === (yG = VG.attributesDistribution) || void 0 === yG ? void 0 : yG.sample(GG)) && void 0 !== LG ? LG : {},
                  KG = null !== (kG = this.getEnchantmentAttributesForItem(GG, pG)) && void 0 !== kG ? kG : {};
                bG[ZG] = {
                  name: pG,
                  amount: fG,
                  attributes: {
                    ...QG,
                    customAttributes: {
                      ...null !== (UG = QG.customAttributes) && void 0 !== UG ? UG : {},
                      ...KG
                    }
                  }
                }
              }
            }
            return (0, fG.l)(bG, GG), bG
          }
          getEnchantmentAttributesForItem(GG, bG) {
            if (!this.shouldEnchantDistribution.sample(GG)) return null;
            const ZG = cG.getPossibleEnchantmentsForItem(bG);
            return 0 === ZG.length ? null : cG.chooseRandomEnchantmentAttributes(GG, this.enchantmentTier, ZG)
          }
        }

        function AG(GG, bG) {
          let ZG = 0;
          for (const LG of GG) ZG += LG.frequency;
          const wG = bG / ZG,
            SG = [];
          for (const LG of GG) SG.push({
            ...LG,
            frequency: LG.frequency * wG
          });
          return SG
        }
        var sG = function(GG) {
          return GG.WOOD = "Wood", GG.STONE = "Stone", GG.IRON = "Iron", GG.GOLD = "Gold", GG.DIAMOND = "Diamond", GG
        }(sG || {});
        const qG = {
            name: "Coal",
            frequency: 1,
            amount: {
              min: 5,
              max: 15
            }
          },
          nG = {
            name: "Iron Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          gG = {
            name: "Gold Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          eG = {
            name: "Diamond",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          },
          RG = {
            name: "Spirit Saddle",
            frequency: .5,
            amount: null
          };

        function TG(GG) {
          return AG([{
            name: "Aura XP Potion",
            frequency: 4,
            amount: null
          }, {
            name: "Aura XP Potion II",
            frequency: 1,
            amount: null
          }], GG)
        }

        function HG(GG) {
          return AG([...AG([{
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
          }], 4), ...AG([{
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
          }], 2), ...AG([{
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
          }], 1), ...AG([{
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
          }], 2)], GG)
        }

        function tG(GG) {
          const bG = {
              min: 2,
              max: 4
            },
            ZG = [{
              name: "Carrot",
              frequency: 1,
              amount: bG
            }, {
              name: "Raw Potato",
              frequency: 1,
              amount: bG
            }, {
              name: "Beetroot",
              frequency: 1,
              amount: bG
            }];
          return AG([...AG([{
            name: "Apple",
            frequency: 1,
            amount: bG
          }, {
            name: "Bowl of Rice",
            frequency: 1,
            amount: null
          }, {
            name: "Bread",
            frequency: 1,
            amount: bG
          }, {
            name: "Cherry",
            frequency: 1,
            amount: bG
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
            amount: bG
          }, {
            name: "Plum",
            frequency: 1,
            amount: bG
          }, {
            name: "Pumpkin Pie",
            frequency: 1,
            amount: bG
          }], 2), ...AG(ZG, 1)], GG)
        }

        function DG(GG) {
          return AG([{
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
          }], GG)
        }

        function NG(GG) {
          const bG = [
              ["White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete"],
              ["Green Glass", "White Glass", "Light Gray Glass", "Gray Glass", "Black Glass", "Brown Glass", "Red Glass", "Orange Glass", "Yellow Glass", "Lime Glass", "Cyan Glass", "Light Blue Glass", "Blue Glass", "Purple Glass", "Magenta Glass", "Pink Glass"],
              ["Patterned Green Glass", "Patterned White Glass", "Patterned Light Gray Glass", "Patterned Gray Glass", "Patterned Black Glass", "Patterned Brown Glass", "Patterned Red Glass", "Patterned Orange Glass", "Patterned Yellow Glass", "Patterned Lime Glass", "Patterned Cyan Glass", "Patterned Light Blue Glass", "Patterned Blue Glass", "Patterned Purple Glass", "Patterned Magenta Glass", "Patterned Pink Glass"],
              ["White Baked Clay", "Orange Baked Clay", "Magenta Baked Clay", "Light Blue Baked Clay", "Yellow Baked Clay", "Lime Baked Clay", "Pink Baked Clay", "Gray Baked Clay", "Light Gray Baked Clay", "Cyan Baked Clay", "Purple Baked Clay", "Blue Baked Clay", "Brown Baked Clay", "Green Baked Clay", "Red Baked Clay", "Black Baked Clay"],
              ["White Ceramic", "Orange Ceramic", "Magenta Ceramic", "Light Blue Ceramic", "Yellow Ceramic", "Lime Ceramic", "Pink Ceramic", "Gray Ceramic", "Light Gray Ceramic", "Cyan Ceramic", "Purple Ceramic", "Blue Ceramic", "Brown Ceramic", "Green Ceramic", "Red Ceramic", "Black Ceramic"],
              ["Stone Bricks", "Engraved Stone", "Mossy Stone Bricks", "Cracked Stone Bricks", "Mossy Messy Stone", "Compressed Messy Stone", "Extra Compressed Messy Stone", "Smooth Sandstone", "Engraved Sandstone", "Marked Sandstone", "Sandstone Bricks", "Smooth Red Sandstone", "Engraved Red Sandstone", "Marked Red Sandstone", "Red Sandstone Bricks", "Engraved Diorite", "Diorite Bricks", "Engraved Andesite", "Andesite Bricks", "Engraved Granite", "Granite Bricks", "Ice Bricks", "Dark Red Stone", "Dark Red Brick"],
              ["White Chalk", "Orange Chalk", "Magenta Chalk", "Light Blue Chalk", "Yellow Chalk", "Lime Chalk", "Pink Chalk", "Gray Chalk", "Light Gray Chalk", "Cyan Chalk", "Purple Chalk", "Blue Chalk", "Brown Chalk", "Green Chalk", "Red Chalk", "Black Chalk"]
            ],
            ZG = [];
          for (const LG of bG) {
            const GG = [];
            for (const bG of LG) GG.push({
              name: bG,
              frequency: 1,
              amount: {
                min: 10,
                max: 25
              }
            });
            ZG.push(...AG(GG, 1))
          }
          const wG = ["Super Compressed Messy Stone", "Hyper Compressed Messy Stone", "Ultra Compressed Messy Stone"],
            SG = [];
          for (const LG of wG) SG.push({
            name: LG,
            frequency: 1,
            amount: {
              min: 1,
              max: 1
            }
          });
          return [...AG(ZG, .999 * GG), ...AG(SG, .001 * GG)]
        }

        function OG(GG, bG) {
          return AG([{
            name: `${GG} Pickaxe`,
            frequency: 1,
            amount: null
          }, {
            name: `${GG} Axe`,
            frequency: .9,
            amount: null
          }, {
            name: `${GG} Spade`,
            frequency: .7,
            amount: null
          }, {
            name: `${GG} Hoe`,
            frequency: .2,
            amount: null
          }], bG)
        }

        function xG(GG, bG) {
          if (bG < 0 || bG > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${bG}`);
          const ZG = [{
              name: "Arrow",
              frequency: 1 - bG,
              amount: {
                min: 15,
                max: 25
              }
            }],
            wG = ["Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Instant Damage"],
            SG = [];
          for (const LG of wG) SG.push({
            name: LG,
            frequency: 1,
            amount: {
              min: 10,
              max: 15
            }
          });
          return ZG.push(...AG(SG, bG)), AG(ZG, GG)
        }

        function BG(GG, bG) {
          return AG([{
            name: `${GG} Sword`,
            frequency: .75,
            amount: null
          }, {
            name: `${GG} Bow`,
            frequency: .6,
            amount: null
          }, {
            name: `${GG} Crossbow`,
            frequency: .15,
            amount: null
          }, ...xG(1, {
            [sG.WOOD]: .05,
            [sG.STONE]: .1,
            [sG.IRON]: .3,
            [sG.GOLD]: .5,
            [sG.DIAMOND]: .7
          } [GG])], bG)
        }

        function Gb(GG, bG) {
          if (GG === sG.STONE) throw new Error(`${GG} armour is not supported`);
          const ZG = [{
              name: `${GG} Helmet`,
              frequency: 1,
              amount: null
            }, {
              name: `${GG} Chestplate`,
              frequency: 1,
              amount: null
            }, {
              name: `${GG} Gauntlets`,
              frequency: 1,
              amount: null
            }, {
              name: `${GG} Leggings`,
              frequency: 1,
              amount: null
            }, {
              name: `${GG} Boots`,
              frequency: 1,
              amount: null
            }],
            wG = [...BG(GG, 1), ...AG(ZG, 1.5)];
          return AG(wG, bG)
        }
        const bb = {
          [VG.l.COMMON]: new MG({
            enchantmentTier: "Tier 1",
            enchantmentProbability: 1,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: TG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: HG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tG(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: DG(1)
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...OG(sG.WOOD, 1), ...OG(sG.STONE, 1), ...Gb(sG.WOOD, 1), ...BG(sG.STONE, 1)]
            }, {
              minItems: 1,
              maxItems: 2,
              items: [qG]
            }]
          }),
          [VG.l.UNCOMMON]: new MG({
            enchantmentTier: "Tier 2",
            enchantmentProbability: .9,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: TG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: HG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tG(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...DG(2), ...NG(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...OG(sG.STONE, 1), ...OG(sG.IRON, 1), ...BG(sG.STONE, 1), ...Gb(sG.IRON, 1)]
            }, {
              minItems: 2,
              maxItems: 3,
              items: [qG, nG]
            }]
          }),
          [VG.l.RARE]: new MG({
            enchantmentTier: "Tier 3",
            enchantmentProbability: .75,
            itemCategories: [{
              minItems: 2,
              maxItems: 3,
              items: TG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: HG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tG(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...NG(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...OG(sG.IRON, 1), ...OG(sG.GOLD, 1), ...Gb(sG.IRON, 1), ...Gb(sG.GOLD, 1)]
            }, {
              minItems: 2,
              maxItems: 4,
              items: [qG, nG, gG, RG]
            }]
          }),
          [VG.l.EPIC]: new MG({
            enchantmentTier: "Tier 4",
            enchantmentProbability: .6,
            itemCategories: [{
              minItems: 3,
              maxItems: 4,
              items: TG(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: HG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...NG(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...OG(sG.GOLD, 1), ...OG(sG.DIAMOND, 1), ...Gb(sG.GOLD, 1), ...Gb(sG.DIAMOND, 1), ...AG([{
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
              items: [gG, eG, RG]
            }]
          }),
          [VG.l.LEGENDARY]: new MG({
            enchantmentTier: "Tier 5",
            enchantmentProbability: .5,
            itemCategories: [{
              minItems: 4,
              maxItems: 5,
              items: TG(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...NG(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...OG(sG.DIAMOND, 1), ...Gb(sG.DIAMOND, 2), ...AG([{
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
              items: [gG, eG, {
                name: "Moonstone",
                frequency: 1,
                amount: {
                  min: 2,
                  max: 4
                }
              }, RG]
            }, {
              minItems: 1,
              maxItems: 1,
              items: (Zb = 1, AG([{
                name: "Caught Mob Spirit_Golem Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new PG("Spirit Golem")
              }, {
                name: "Caught Mob Spirit_Wolf Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new PG("Spirit Wolf")
              }, {
                name: "Caught Mob Spirit_Bear Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new PG("Spirit Bear")
              }, {
                name: "Caught Mob Spirit_Stag Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new PG("Spirit Stag")
              }, {
                name: "Caught Mob Spirit_Gorilla Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new PG("Spirit Gorilla")
              }], Zb))
            }, {
              minItems: 2,
              maxItems: 3,
              items: function(GG) {
                return AG([{
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
                }], GG)
              }(1)
            }]
          })
        };
        var Zb;
        class wb {
          constructor(GG, bG, ZG, wG, SG, LG) {
            this.lootChestBlockId = GG, this.seed = bG, this.x = ZG, this.y = wG, this.z = SG, this.chestQuality = LG, this.lootChestInventoryDistribution = void 0, this.lootChestInventoryDistribution = bb[LG]
          }
          getBlockId() {
            return this.lootChestBlockId
          }
          generate() {
            const GG = new fG.f(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
              bG = this.lootChestInventoryDistribution.sample(GG);
            return {
              data: {
                persisted: {
                  chestStr: (0, VG.H)(bG),
                  lootQuality: this.chestQuality
                }
              },
              persisted: !0
            }
          }
        }
        class Sb {
          constructor(GG) {
            this.seed = void 0, this.rK = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
            const {
              seed: bG,
              rK: ZG,
              blockMetadata: wG,
              itemMetadata: yG,
              prefabSize: kG,
              typeSettings: UG
            } = GG;
            Sb.BLOCK_ID_MAPPINGS || (Sb.BLOCK_ID_MAPPINGS = new uG(wG)), cG || (cG = new KG(yG)), this.seed = bG, this.rK = ZG, this.invisibleSolidBlockId = wG["Invisible Solid"].id, this.emptySpawnerBlockId = wG["Empty Spawner Block"].id, this.chestToLootChestBlockId = new YG.d({
              [wG.Chest.id]: wG["Loot Chest"].id,
              [wG["Chest|meta|rot2"].id]: wG["Loot Chest|meta|rot2"].id,
              [wG["Chest|meta|rot3"].id]: wG["Loot Chest|meta|rot3"].id,
              [wG["Chest|meta|rot4"].id]: wG["Loot Chest|meta|rot4"].id
            }, "number");
            const VG = {};
            for (const SG of LG.l) VG[SG] = wG[`${SG} Spawner Block`].id;
            this.mobTypeToSpawnerBlockId = VG, this.defaultSpawnerBlockId = this.mobTypeToSpawnerBlockId[Sb.DEFAULT_MOB_TYPE], this.prefabRadius = Math.ceil(kG / 2);
            const pG = {};
            for (const LG in UG) {
              const GG = Number(LG);
              pG[GG] = {};
              const {
                densitySettings: wG
              } = UG[GG];
              for (const LG in wG) {
                const yG = Number(LG),
                  kG = wG[yG];
                let UG = null;
                if (null !== kG) {
                  const wG = Math.ceil(400 / kG.minDistanceBetweenPrefabs);
                  UG = new SG.d(`prefab|${GG}|${yG}`, kG.minDistanceBetweenPrefabs, !1, !0, bG, wG, ZG, null, !0)
                }
                pG[GG][yG] = UG
              }
            }
            this.prefabCentrePointGeneratorPerDensityPerType = pG
          }
          static isWithinPrefabClearing(GG, bG, ZG) {
            for (const wG of ZG) {
              if ((GG - wG.centreX) ** 2 + (bG - wG.centreZ) ** 2 < wG.prefab.clearingRadiusSquared) return !0
            }
            return !1
          }
          prefabRandomAt(GG, bG) {
            return new fG.f(`${GG}|${bG}|${this.seed}|prefabGenerator`)
          }
          getLootPrefabCentres(GG, bG, ZG, wG, SG) {
            const LG = [];
            for (const yG in this.prefabCentrePointGeneratorPerDensityPerType) {
              const kG = Number(yG),
                UG = this.prefabCentrePointGeneratorPerDensityPerType[kG];
              for (const yG in UG) {
                const YG = Number(yG),
                  VG = UG[YG];
                if (null === VG) continue;
                const pG = VG.gridSize;
                for (let yG = Math.floor(GG / pG); yG <= Math.floor((ZG - 1) / pG); yG++)
                  for (let UG = Math.floor(bG / pG); UG <= Math.floor((wG - 1) / pG); UG++)
                    for (const [pG, fG] of VG.getCell(yG, UG).points) {
                      if (pG < GG || pG >= ZG || fG < bG || fG >= wG) continue;
                      const yG = SG.generate(pG, fG)[0].biome.getRandomPrefab(this.prefabRandomAt(pG, fG), kG, YG);
                      null !== yG && yG.chestLocations.length > 0 && LG.push({
                        x: pG,
                        z: fG,
                        prefab: yG
                      })
                    }
              }
            }
            return LG
          }
          getPrefabsForChunk(GG, bG, ZG, wG, SG, yG, kG) {
            const UG = [],
              YG = this.rK >> 1,
              VG = GG - this.prefabRadius,
              fG = GG + this.rK + this.prefabRadius,
              QG = bG - this.prefabRadius,
              KG = bG + this.rK + this.prefabRadius;
            for (const hG in this.prefabCentrePointGeneratorPerDensityPerType) {
              const dG = Number(hG),
                JG = this.prefabCentrePointGeneratorPerDensityPerType[dG];
              for (const hG in JG) {
                const rG = Number(hG),
                  zG = JG[rG];
                if (null === zG) continue;
                if (dG === LG.i.SURFACE && rG === LG.h.VERY_HIGH && !kG.regionMayHaveVeryHighSurfacePrefabs(VG, QG, fG, KG)) continue;
                const EG = zG.getPointsAroundPoint(GG + YG, bG + YG);
                for (const GG of EG) {
                  const bG = GG[0],
                    kG = GG[1];
                  if (bG < VG || bG >= fG || kG < QG || kG >= KG) continue;
                  const YG = wG.getOrGenerate(bG, kG)[0].biome,
                    hG = this.prefabRandomAt(bG, kG),
                    JG = YG.getRandomPrefab(hG, dG, rG);
                  if (null === JG) continue;
                  if (dG === LG.i.SURFACE && !YG.canPlaceSurfacePrefab(bG, kG)) continue;
                  const zG = JG.transformationsEnabled ? vG.sample(hG) : 0,
                    EG = !!JG.transformationsEnabled && aG.sample(hG);
                  let oG = null,
                    XG = null,
                    uG = EG;
                  switch (zG) {
                    case 0:
                      break;
                    case 90:
                      oG = JG.dimensionX - 1, uG = !uG;
                      break;
                    case 180:
                      oG = JG.dimensionX - 1, XG = JG.dimensionZ - 1;
                      break;
                    case 270:
                      XG = JG.dimensionZ - 1, uG = !uG;
                      break;
                    default:
                      console.error(`Invalid prefab rotation: ${zG}`)
                  }
                  const iG = {
                      centreX: bG,
                      centreZ: kG,
                      anchorX: bG - (JG.dimensionX >> 1),
                      anchorZ: kG - (JG.dimensionZ >> 1),
                      prefab: JG,
                      xRotationOffset: oG,
                      zRotationOffset: XG,
                      shouldSwapXZ: uG
                    },
                    {
                      anchorY: CG,
                      isOnSolidGround: WG
                    } = this.getPrefabGroundingInfo(iG, hG, ZG, SG, yG);
                  if (!WG) continue;
                  if (dG === LG.i.SURFACE && null !== YG.maxSurfacePrefabRelief) {
                    const GG = iG.shouldSwapXZ ? JG.dimensionZ : JG.dimensionX,
                      wG = iG.shouldSwapXZ ? JG.dimensionX : JG.dimensionZ;
                    if (Sb.footprintRelief(bG, kG, GG, wG, ZG) > YG.maxSurfacePrefabRelief) continue
                  }
                  const mG = Math.ceil(Math.sqrt(JG.dimensionX * JG.dimensionX + JG.dimensionZ * JG.dimensionZ) / 2);
                  if (!YG.allowsPrefab(bG, kG, mG, CG, CG + JG.dimensionY - 1)) continue;
                  const IG = new pG.c;
                  for (const GG of JG.chestLocations) {
                    const bG = kb(iG, GG.localX, GG.localZ),
                      ZG = Ub(iG, GG.localX, GG.localZ),
                      wG = CG + GG.localY,
                      SG = GG.qualityDistribution.sample(hG);
                    IG.set(bG, wG, ZG, SG)
                  }
                  const FG = new pG.c;
                  for (const GG of JG.spawnerBlockLocations) {
                    const bG = kb(iG, GG.localX, GG.localZ),
                      ZG = Ub(iG, GG.localX, GG.localZ),
                      wG = CG + GG.localY,
                      SG = GG.mobTypeDistribution.sample(hG),
                      LG = this.mobTypeToSpawnerBlockId[SG];
                    FG.set(bG, wG, ZG, LG)
                  }
                  let cG = null;
                  (0 !== zG || EG) && (cG = Sb.BLOCK_ID_MAPPINGS.getBlockIdMapping(zG, EG)), UG.push({
                    ...iG,
                    anchorY: CG,
                    chestLocationToQuality: IG,
                    spawnerBlockLocationToBlockId: FG,
                    blockIdMapping: cG,
                    decodedPrefabSchematic: this.getDecodedPrefabSchematic(JG)
                  })
                }
              }
            }
            return UG
          }
          static footprintRelief(GG, bG, ZG, wG, SG) {
            let yG = 1 / 0,
              kG = -1 / 0;
            const UG = ZG >> 1,
              YG = wG >> 1;
            for (let VG = -UG; VG <= UG; VG += Math.max(1, UG))
              for (let ZG = -YG; ZG <= YG; ZG += Math.max(1, YG)) {
                const wG = SG.getOrGenerate(GG + VG, bG + ZG, LG.d.GroundHeight);
                yG = Math.min(yG, wG), kG = Math.max(kG, wG)
              }
            return kG - yG
          }
          getPrefabGroundingInfo(GG, bG, ZG, wG, SG) {
            const LG = GG.prefab,
              yG = GG.centreX,
              kG = GG.centreZ,
              UG = [];
            if ("centre" === LG.groundingPoints) UG.push([yG, kG]);
            else
              for (const pG of LG.groundingPoints) {
                const bG = kb(GG, pG.localX, pG.localZ),
                  ZG = Ub(GG, pG.localX, pG.localZ);
                UG.push([bG, ZG])
              }
            let YG;
            const VG = LG.undergroundYInterval;
            if (null !== VG) {
              const {
                Zw: GG,
                ww: ZG
              } = VG;
              YG = this.getCaveGroundingInfoFromGroundingPoints(UG, LG.groundingRadius, bG, GG, ZG, wG)
            } else YG = this.getSurfaceGroundingInfoFromGroundingPoints(UG, LG.groundingRadius, ZG, wG, SG);
            return YG.anchorY += LG.yOffset, YG
          }
          getSurfaceGroundingInfoFromGroundingPoints(GG, bG, ZG, wG, SG) {
            let kG = 1e4;
            for (const YG of GG) {
              const GG = YG[0],
                VG = YG[1];
              for (let YG = GG - bG; YG < GG + bG; YG++)
                for (let GG = VG - bG; GG < VG + bG; GG++) {
                  if (ZG.getOrGenerate(YG, GG, LG.d.WaterHeight) !== yG.p) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  const bG = ZG.getOrGenerate(YG, GG, LG.d.GroundHeight);
                  if (UG.d.isInCave(YG, bG, GG, wG)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  if (WG.d.isNearFixedPointPrefab(YG, GG, SG)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  kG = Math.min(kG, bG)
                }
            }
            return {
              anchorY: kG,
              isOnSolidGround: !0
            }
          }
          getCaveGroundingInfoFromGroundingPoints(GG, bG, ZG, wG, SG, LG) {
            const yG = [];
            for (const UG of GG) {
              const GG = UG[0],
                ZG = UG[1];
              for (let wG = GG - bG; wG < GG + bG; wG++)
                for (let GG = ZG - bG; GG < ZG + bG; GG++) mG(wG, GG, LG, !1, yG)
            }

            function kG(GG, bG) {
              return Math.floor(ZG.next() * (bG - GG + 1)) + GG
            }
            if (0 === yG.length) return {
              anchorY: kG(wG, SG),
              isOnSolidGround: !0
            };
            if (function(GG, bG, ZG) {
                for (let wG = 0; wG < GG.length; wG++) {
                  const SG = GG[wG];
                  (SG.floorY < bG || SG.floorY > ZG) && (GG.splice(wG, 1), wG--)
                }
              }(yG, wG, SG), 0 === yG.length) return {
              anchorY: -1e4,
              isOnSolidGround: !1
            };
            return {
              anchorY: yG[kG(0, yG.length - 1)].floorY,
              isOnSolidGround: !0
            }
          }
          getBlockFromPrefabAtPoint(GG, bG, ZG, wG, SG) {
            var LG, yG;
            let kG = this.getPrefabBlock(GG, bG, ZG, wG);
            if (0 === kG) return kG;
            var UG;
            if (kG === this.emptySpawnerBlockId && (kG = null !== (UG = wG.spawnerBlockLocationToBlockId.get(GG, bG, ZG)) && void 0 !== UG ? UG : this.defaultSpawnerBlockId), kG < 0) return kG;
            if (kG = null !== (LG = null === (yG = wG.blockIdMapping) || void 0 === yG ? void 0 : yG[kG]) && void 0 !== LG ? LG : kG, void 0 !== this.chestToLootChestBlockId.reverseGet(kG)) {
              var YG;
              const LG = null !== (YG = wG.chestLocationToQuality.get(GG, bG, ZG)) && void 0 !== YG ? YG : Sb.DEFAULT_CHEST_QUALITY,
                yG = new wb(kG, this.seed, GG, bG, ZG, LG);
              SG.set(GG, bG, ZG, yG)
            }
            return kG
          }
          getPrefabBlock(GG, bG, ZG, wG) {
            const SG = wG.prefab,
              LG = bG - wG.anchorY;
            if (LG < 0 || LG >= SG.dimensionY) return 0;
            const yG = function(GG, bG, ZG) {
                if (GG.shouldSwapXZ) return yb(GG, ZG);
                return Lb(GG, bG)
              }(wG, GG, ZG),
              kG = function(GG, bG, ZG) {
                if (GG.shouldSwapXZ) return Lb(GG, bG);
                return yb(GG, ZG)
              }(wG, GG, ZG);
            return yG < 0 || yG >= SG.dimensionX || kG < 0 || kG >= SG.dimensionZ ? 0 : wG.decodedPrefabSchematic.get(yG, LG, kG)
          }
          getDecodedPrefabSchematic(GG) {
            const bG = Sb.DECODED_PREFAB_SCHEMATIC_CACHE.get(GG.schematic);
            if (void 0 !== bG) return bG;
            const {
              dimensionX: ZG,
              dimensionY: wG,
              dimensionZ: SG
            } = GG, LG = CG()(new Int32Array(ZG * wG * SG), [ZG, wG, SG]), yG = new pG.c;
            for (const kG of GG.chestLocations) yG.set(kG.localX, kG.localY, kG.localZ, !0);
            const UG = new pG.c;
            for (const kG of GG.spawnerBlockLocations) UG.set(kG.localX, kG.localY, kG.localZ, !0);
            for (let YG = 0; YG < ZG; YG += VG.D)
              for (let bG = 0; bG < wG; bG += VG.D)
                for (let pG = 0; pG < SG; pG += VG.D) {
                  const fG = CG()(new Uint16Array(VG.D * VG.D * VG.D), [VG.D, VG.D, VG.D]),
                    QG = GG.schematic.getRLEChunk((0, VG.U)(YG), (0, VG.U)(bG), (0, VG.U)(pG));
                  kG.decode(QG, fG.data);
                  const KG = Math.min(VG.D, ZG - YG),
                    hG = Math.min(VG.D, wG - bG),
                    dG = Math.min(VG.D, SG - pG);
                  for (let ZG = 0; ZG < KG; ZG++)
                    for (let wG = 0; wG < hG; wG++)
                      for (let SG = 0; SG < dG; SG++) {
                        let kG = fG.get(ZG, wG, SG);
                        const VG = YG + ZG,
                          QG = bG + wG,
                          KG = pG + SG;
                        if (this.invisibleSolidBlockId === kG) kG = lG.GUARANTEED_AIR;
                        else if (this.emptySpawnerBlockId === kG) UG.get(VG, QG, KG) || console.error(`Empty spawner block found in prefab ${GG.schematic.name} at (${VG}, ${QG}, ${KG}) with no mob type specified. Defaulting to "${Sb.DEFAULT_MOB_TYPE}" mob type.`);
                        else {
                          const bG = this.chestToLootChestBlockId.get(kG);
                          void 0 !== bG && (yG.get(VG, QG, KG) || console.error(`Chest found in prefab ${GG.schematic.name} at (${VG}, ${QG}, ${KG}) with no quality specified. Defaulting to "${Sb.DEFAULT_CHEST_QUALITY}" quality.`), kG = bG)
                        }
                        LG.set(VG, QG, KG, kG)
                      }
                }
            return Sb.DECODED_PREFAB_SCHEMATIC_CACHE.set(GG.schematic, LG), LG
          }
        }

        function Lb(GG, bG) {
          let ZG = bG - GG.anchorX;
          return null !== GG.xRotationOffset && (ZG = GG.xRotationOffset - ZG), ZG
        }

        function yb(GG, bG) {
          let ZG = bG - GG.anchorZ;
          return null !== GG.zRotationOffset && (ZG = GG.zRotationOffset - ZG), ZG
        }

        function kb(GG, bG, ZG) {
          return function(GG, bG) {
            null !== GG.xRotationOffset && (bG = GG.xRotationOffset - bG);
            return bG + GG.anchorX
          }(GG, GG.shouldSwapXZ ? ZG : bG)
        }

        function Ub(GG, bG, ZG) {
          return function(GG, bG) {
            null !== GG.zRotationOffset && (bG = GG.zRotationOffset - bG);
            return bG + GG.anchorZ
          }(GG, GG.shouldSwapXZ ? bG : ZG)
        }
        Sb.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, Sb.BLOCK_ID_MAPPINGS = void 0, Sb.DEFAULT_MOB_TYPE = "Draugr Zombie", Sb.DEFAULT_CHEST_QUALITY = VG.l.COMMON;
        var Yb = function(GG) {
            return GG[GG.STANDARD = 0] = "STANDARD", GG[GG.FRILLED = 1] = "FRILLED", GG[GG.TALL = 2] = "TALL", GG[GG.FLAT = 3] = "FLAT", GG[GG.DROOPY = 4] = "DROOPY", GG
          }(Yb || {}),
          Vb = function(GG) {
            return GG[GG.TOP = 0] = "TOP", GG[GG.UPPER_MIDDLE = 1] = "UPPER_MIDDLE", GG[GG.MIDDLE = 2] = "MIDDLE", GG[GG.LOWER_MIDDLE = 3] = "LOWER_MIDDLE", GG[GG.BOTTOM = 4] = "BOTTOM", GG
          }(Vb || {}),
          pb = function(GG) {
            return GG[GG.CIRCLE = 0] = "CIRCLE", GG[GG.DIAMOND = 1] = "DIAMOND", GG
          }(pb || {}),
          fb = function(GG) {
            return GG[GG.ALWAYS = 0] = "ALWAYS", GG[GG.SOMETIMES = 1] = "SOMETIMES", GG[GG.NEVER = 2] = "NEVER", GG
          }(fb || {});
        class Qb {
          static initCanopyGenerationSchemaByShape(GG, bG, ZG, wG) {
            return this.initCanopyGenerationSchemaByFunction(ZG, ((ZG, SG) => {
              const LG = wG === pb.CIRCLE ? Math.sqrt(ZG * ZG + SG * SG) : Math.max(Math.abs(ZG - SG), Math.abs(ZG + SG));
              return LG < GG ? fb.ALWAYS : LG < bG ? fb.SOMETIMES : fb.NEVER
            }))
          }
          static initCanopyGenerationSchemaByFunction(GG, bG) {
            const ZG = new wG.e(2 * GG + 1, [-GG, -GG]);
            for (let wG = -GG; wG <= GG; wG++)
              for (let SG = -GG; SG <= GG; SG++) {
                const GG = bG(wG, SG);
                ZG.set(wG, SG, GG)
              }
            return ZG
          }
          constructor(GG, bG, ZG, wG, LG) {
            this.rK = ZG, this.seed = wG, this.blockMetadata = LG, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
            const yG = 1 / 30;
            if (this.treeInfos = {
                [VG.w.Maple]: {
                  trunkBlockId: LG["Maple Log"].id,
                  trunkBaseId: LG["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: LG["Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Fruity Maple Leaves"].id,
                  canopyType: Yb.STANDARD,
                  vineProbability: yG
                },
                [VG.w.Pine]: {
                  trunkBlockId: LG["Pine Log"].id,
                  trunkBaseId: LG["Pine Log|TreeBase|Pine"].id,
                  canopyLeavesId: LG["Pine Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Pine Cone Leaves"].id,
                  canopyType: Yb.FRILLED,
                  vineProbability: 0,
                  minHeight: 5,
                  maxHeight: 7
                },
                [VG.w.Plum]: {
                  trunkBlockId: LG["Plum Log"].id,
                  trunkBaseId: LG["Plum Log|TreeBase|Plum"].id,
                  canopyLeavesId: LG["Plum Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Fruity Plum Leaves"].id,
                  canopyType: Yb.STANDARD,
                  vineProbability: yG
                },
                [VG.w.Cedar]: {
                  trunkBlockId: LG["Cedar Log"].id,
                  trunkBaseId: LG["Cedar Log|TreeBase|Cedar"].id,
                  canopyLeavesId: LG["Cedar Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.STANDARD,
                  vineProbability: yG
                },
                [VG.w.Aspen]: {
                  trunkBlockId: LG["Aspen Log"].id,
                  trunkBaseId: LG["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: LG["Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.FRILLED,
                  vineProbability: yG,
                  minHeight: 5,
                  maxHeight: 6
                },
                [VG.w.Jungle]: {
                  trunkBlockId: LG["Jungle Log"].id,
                  trunkBaseId: LG["Jungle Log|TreeBase|Jungle"].id,
                  canopyLeavesId: LG["Jungle Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.FLAT,
                  vineProbability: .5,
                  minHeight: 2,
                  maxHeight: 7
                },
                [VG.w.Palm]: {
                  trunkBlockId: LG["Palm Log"].id,
                  trunkBaseId: LG["Palm Log|TreeBase|Palm"].id,
                  canopyLeavesId: LG["Palm Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Fruity Palm Leaves"].id,
                  canopyType: Yb.DROOPY,
                  vineProbability: 1 / 3,
                  minHeight: 4,
                  maxHeight: 6
                },
                [VG.w.AutumnMaple]: {
                  trunkBlockId: LG["Maple Log"].id,
                  trunkBaseId: LG["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: LG["Autumn Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.STANDARD,
                  vineProbability: yG
                },
                [VG.w.Pear]: {
                  trunkBlockId: LG["Pear Log"].id,
                  trunkBaseId: LG["Pear Log|TreeBase|Pear"].id,
                  canopyLeavesId: LG["Pear Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Fruity Pear Leaves"].id,
                  canopyType: Yb.TALL,
                  vineProbability: yG,
                  minHeight: 3,
                  maxHeight: 5
                },
                [VG.w.Cherry]: {
                  trunkBlockId: LG["Cherry Log"].id,
                  trunkBaseId: LG["Cherry Log|TreeBase|Cherry"].id,
                  canopyLeavesId: LG["Cherry Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Fruity Cherry Leaves"].id,
                  canopyType: Yb.DROOPY,
                  vineProbability: 0,
                  minHeight: 4,
                  maxHeight: 6
                },
                [VG.w.Spectral]: {
                  trunkBlockId: LG["Spectral Log"].id,
                  trunkBaseId: LG["Spectral Log|TreeBase|Spectral"].id,
                  canopyLeavesId: LG["Spectral Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.STANDARD,
                  vineProbability: 0
                },
                [VG.w.Mango]: {
                  trunkBlockId: LG["Mango Log"].id,
                  trunkBaseId: LG["Mango Log|TreeBase|Mango"].id,
                  canopyLeavesId: LG["Mango Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: LG["Fruity Mango Leaves"].id,
                  canopyType: Yb.TALL,
                  vineProbability: .2,
                  minHeight: 3,
                  maxHeight: 6
                },
                [VG.w.AutumnAspen]: {
                  trunkBlockId: LG["Aspen Log"].id,
                  trunkBaseId: LG["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: LG["Autumn Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.FRILLED,
                  vineProbability: yG,
                  minHeight: 5,
                  maxHeight: 6
                },
                [VG.w.Dead]: {
                  trunkBlockId: LG["Barkless Maple Log"].id,
                  trunkBaseId: LG["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 7
                },
                [VG.w.FallenLog]: {
                  trunkBlockId: LG["Barkless Maple Log"].id,
                  trunkBaseId: LG["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: Yb.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 6
                }
              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((GG => LG[GG].id)), this.maxTreeRadius = GG.maxTreeRadius, this.rK <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
            if (this.rK <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
            this.canopyInfos = {
              [Yb.STANDARD]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Vb.TOP]: Qb.initCanopyGenerationSchemaByShape(.2, 1.1, 2, pb.CIRCLE),
                  [Vb.UPPER_MIDDLE]: null,
                  [Vb.MIDDLE]: Qb.initCanopyGenerationSchemaByShape(1.2, 1.7, 2, pb.CIRCLE),
                  [Vb.LOWER_MIDDLE]: null,
                  [Vb.BOTTOM]: Qb.initCanopyGenerationSchemaByShape(2.8, 3, 2, pb.CIRCLE)
                }
              },
              [Yb.FRILLED]: {
                canopyBottomOffset: -3,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Vb.TOP]: Qb.initCanopyGenerationSchemaByShape(.1, .1, 2, pb.CIRCLE),
                  [Vb.UPPER_MIDDLE]: Qb.initCanopyGenerationSchemaByShape(2, 2, 2, pb.DIAMOND),
                  [Vb.MIDDLE]: null,
                  [Vb.LOWER_MIDDLE]: Qb.initCanopyGenerationSchemaByShape(3, 3, 2, pb.DIAMOND),
                  [Vb.BOTTOM]: Qb.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, pb.CIRCLE)
                }
              },
              [Yb.TALL]: {
                canopyBottomOffset: -1,
                canopyTopOffset: 2,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Vb.TOP]: Qb.initCanopyGenerationSchemaByShape(.8, 2, 2, pb.DIAMOND),
                  [Vb.UPPER_MIDDLE]: Qb.initCanopyGenerationSchemaByShape(1.7, 1.7, 2, pb.CIRCLE),
                  [Vb.MIDDLE]: null,
                  [Vb.LOWER_MIDDLE]: Qb.initCanopyGenerationSchemaByShape(1.7, 2.2, 2, pb.CIRCLE),
                  [Vb.BOTTOM]: Qb.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, pb.CIRCLE)
                }
              },
              [Yb.FLAT]: {
                canopyBottomOffset: 0,
                canopyTopOffset: 1,
                radius: 3,
                canopyLevelToGenerationSchema: {
                  [Vb.TOP]: Qb.initCanopyGenerationSchemaByShape(2.2, 2.5, 3, pb.CIRCLE),
                  [Vb.UPPER_MIDDLE]: Qb.initCanopyGenerationSchemaByFunction(3, ((GG, bG) => {
                    if (Math.sqrt(GG * GG + bG * bG) > 3.2) return fb.NEVER;
                    const ZG = Math.abs(GG),
                      wG = Math.abs(bG);
                    return 1 === ZG && 3 === wG || 3 === ZG && 1 === wG ? fb.SOMETIMES : fb.ALWAYS
                  })),
                  [Vb.MIDDLE]: null,
                  [Vb.LOWER_MIDDLE]: null,
                  [Vb.BOTTOM]: null
                }
              },
              [Yb.DROOPY]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [Vb.TOP]: Qb.initCanopyGenerationSchemaByShape(2, 2, 2, pb.CIRCLE),
                  [Vb.UPPER_MIDDLE]: Qb.initCanopyGenerationSchemaByShape(2.2, 2.8, 2, pb.CIRCLE),
                  [Vb.MIDDLE]: null,
                  [Vb.LOWER_MIDDLE]: Qb.initCanopyGenerationSchemaByFunction(2, ((GG, bG) => 2 === Math.abs(GG) && 2 === Math.abs(bG) ? fb.SOMETIMES : fb.ALWAYS)),
                  [Vb.BOTTOM]: Qb.initCanopyGenerationSchemaByFunction(2, ((GG, bG) => {
                    const ZG = Math.abs(GG),
                      wG = Math.abs(bG);
                    return 2 === ZG && 2 === wG || 0 === ZG && 1 === wG || 1 === ZG && 0 === wG ? fb.ALWAYS : fb.NEVER
                  }))
                }
              }
            };
            for (const SG in this.canopyInfos) {
              const GG = this.canopyInfos[SG];
              if (GG.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${GG.radius} for canopy type "${SG}" is larger than tree radius ${this.maxTreeRadius}`)
            }
            let kG = 1e5,
              UG = 0;
            for (const SG of GG.biomeSelector.Xw) SG.biome.treeMinDist && (kG = Math.min(kG, SG.biome.treeMinDist), UG = Math.max(UG, SG.biome.treeMinDist));
            this.treePointGen = new SG.d("tree", 6, !0, !1, wG, 300, ZG, {
              func: GG => bG.getBiome(GG[0], GG[1]).biome.treeMinDist || UG,
              min: kG,
              max: UG
            }, !1, 2)
          }
          getTreesForChunk(GG, bG, ZG, wG, SG, kG, YG) {
            const pG = [];
            for (let QG = GG - this.maxTreeRadius; QG < GG + this.rK + this.maxTreeRadius; QG++)
              for (let GG = bG - this.maxTreeRadius; GG < bG + this.rK + this.maxTreeRadius; GG++) {
                const bG = wG.getOrGenerate(QG, GG)[0].biome;
                if (null !== bG.treeMinDist) {
                  if (bG.getTotalTreeChance() <= 0 && console.error("Biome", bG, "has 0 total tree chance"), !this.treePointGen.isPoint(QG, GG)) continue;
                  if (ZG.getOrGenerate(QG, GG, LG.d.WaterHeight) !== yG.p) continue;
                  const wG = ZG.getOrGenerate(QG, GG, LG.d.GroundHeight);
                  if (UG.d.isInCave(QG, wG, GG, SG)) continue;
                  if (Sb.isWithinPrefabClearing(QG, GG, kG)) continue;
                  if (WG.d.isNearFixedPointPrefab(QG, GG, YG)) continue;
                  const KG = new fG.f(`${QG}${GG}${this.seed}treeHeight`),
                    hG = Qb.getTreeTypeFromBiome(bG, KG);
                  let {
                    height: dG,
                    vineDir: JG
                  } = this.getRandTreeInfo(KG, hG);
                  if (hG === VG.w.FallenLog) {
                    JG = KG.next() < .5 ? 0 : 1;
                    for (let bG = -1; bG < dG - 1; bG++) {
                      if (ZG.getOrGenerate(0 === JG ? QG + bG : QG, 0 === JG ? GG : GG + bG, LG.d.GroundHeight) !== wG) {
                        dG = 1;
                        break
                      }
                    }
                  }
                  pG.push({
                    treeX: QG,
                    treeZ: GG,
                    trunkBase: wG + 1,
                    height: dG,
                    vineDir: JG,
                    treeType: hG
                  })
                }
              }
            return pG
          }
          getRandTreeInfo(GG, bG) {
            var ZG, wG;
            const SG = this.treeInfos[bG],
              LG = null !== (ZG = SG.minHeight) && void 0 !== ZG ? ZG : this.minTreeHeight,
              yG = null !== (wG = SG.maxHeight) && void 0 !== wG ? wG : this.maxTreeHeight;
            return {
              height: Math.floor(GG.next() * (yG - LG)) + LG,
              vineDir: GG.next() < SG.vineProbability ? Math.floor(4 * GG.next()) : -1
            }
          }
          static getTreeTypeFromBiome(GG, bG) {
            const ZG = Math.floor(bG.next() * GG.getTotalTreeChance());
            let wG = 0,
              SG = 0;
            for (; wG <= ZG;) wG += GG.treeChances[SG].chance, SG++;
            return GG.treeChances[SG - 1].treeType
          }
          addTreesToChunk(GG, bG, ZG, wG, SG) {
            for (const LG of SG) {
              const SG = new fG.f(`${LG.treeX}|${LG.treeZ}|${LG.trunkBase}|tree`);
              if (LG.treeType === VG.w.Dead || LG.treeType === VG.w.FallenLog) {
                this.addDeadTreeToChunk(GG, bG, ZG, wG, LG, SG);
                continue
              }
              const yG = this.addTreeCanopyToChunk(GG, bG, ZG, wG, LG, SG);
              this.addTreeTrunkToChunk(GG, bG, ZG, wG, LG, yG)
            }
          }
          addDeadTreeToChunk(GG, bG, ZG, wG, SG, LG) {
            const yG = this.deadWoodIds[Math.floor(LG.next() * this.deadWoodIds.length)],
              {
                treeX: kG,
                treeZ: UG,
                trunkBase: YG,
                height: pG
              } = SG,
              fG = (SG, LG, kG) => {
                SG >= bG && SG < bG + this.rK && LG >= ZG && LG < ZG + this.rK && kG >= wG && kG < wG + this.rK && GG.set(SG - bG, LG - ZG, kG - wG, yG)
              };
            if (SG.treeType === VG.w.FallenLog) {
              if (pG <= 1) return void fG(kG, YG, UG);
              for (let GG = -1; GG < pG - 1; GG++) fG(0 === SG.vineDir ? kG + GG : kG, YG, 0 === SG.vineDir ? UG : UG + GG);
              return
            }
            for (let VG = YG; VG < YG + pG; VG++) fG(kG, VG, UG);
            const QG = pG <= 3 ? 1 : 1 + Math.floor(3 * LG.next()),
              KG = YG + (pG >> 1);
            for (let VG = 0; VG < QG; VG++) {
              const GG = KG + Math.floor(LG.next() * (YG + pG - KG)),
                bG = Math.floor(4 * LG.next()),
                ZG = 0 === bG ? 1 : 1 === bG ? -1 : 0,
                wG = 2 === bG ? 1 : 3 === bG ? -1 : 0;
              fG(kG + ZG, GG, UG + wG), LG.next() < .5 && fG(kG + 2 * ZG, GG + (LG.next() < .6 ? 1 : 0), UG + 2 * wG)
            }
            LG.next() < .35 && fG(kG, YG + pG, UG)
          }
          addTreeCanopyToChunk(GG, bG, ZG, wG, SG, LG) {
            const yG = SG.treeX,
              kG = SG.treeZ,
              UG = SG.trunkBase,
              YG = UG + SG.height - 1,
              VG = this.treeInfos[SG.treeType],
              pG = this.canopyInfos[VG.canopyType],
              fG = UG + SG.height + pG.canopyBottomOffset,
              QG = UG + SG.height + pG.canopyTopOffset,
              KG = Math.max(fG, ZG),
              hG = Math.min(QG, ZG + this.rK - 1);
            if (hG < KG) return fG;
            const dG = Math.max(yG - pG.radius, bG),
              JG = Math.min(yG + pG.radius, bG + this.rK - 1);
            if (dG > JG) return fG;
            const rG = Math.max(kG - pG.radius, wG),
              zG = Math.min(kG + pG.radius, wG + this.rK - 1);
            if (rG > zG) return fG;
            const EG = VG.canopyLeavesId,
              oG = VG.canopyLeavesWithDropId;
            return VG.canopyType === Yb.FRILLED ? this.addFrilledCanopyToChunk(GG, bG, ZG, wG, yG, kG, dG, JG, rG, zG, YG, EG, oG, KG, hG, QG, pG.canopyLevelToGenerationSchema, LG) : VG.canopyType === Yb.TALL || VG.canopyType === Yb.DROOPY ? this.addTallOrDroopyCanopyToChunk(GG, bG, ZG, wG, yG, kG, dG, JG, rG, zG, YG, EG, oG, KG, hG, QG, pG.canopyLevelToGenerationSchema, LG) : VG.canopyType === Yb.FLAT ? this.addFlatCanopyToChunk(GG, bG, ZG, wG, yG, kG, dG, JG, rG, zG, YG, EG, oG, KG, hG, QG, pG.canopyLevelToGenerationSchema, LG) : this.addStandardCanopyToChunk(GG, bG, ZG, wG, yG, kG, dG, JG, rG, zG, YG, EG, oG, KG, hG, QG, pG.canopyLevelToGenerationSchema, LG), fG
          }
          addStandardCanopyToChunk(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG) {
            for (let rG = yG; rG <= kG; rG++) {
              const yG = rG - SG;
              for (let SG = QG; SG <= KG; SG++) {
                let kG;
                kG = SG === hG ? Vb.TOP : SG === hG - 1 ? Vb.MIDDLE : Vb.BOTTOM;
                const QG = dG[kG];
                for (let KG = UG; KG <= YG; KG++) {
                  const kG = KG - LG;
                  this.applyCanopyGenerationSchema(GG, bG, ZG, wG, rG, SG, KG, VG, pG, fG, yG, kG, QG, JG)
                }
              }
            }
          }
          addFrilledCanopyToChunk(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG) {
            const rG = JG.next() < .7;
            for (let zG = yG; zG <= kG; zG++) {
              const yG = zG - SG;
              for (let SG = QG; SG <= KG; SG++) {
                const kG = hG - SG;
                let QG;
                if (0 === kG) QG = Vb.TOP;
                else if (2 === kG) {
                  if (!rG) continue;
                  QG = Vb.LOWER_MIDDLE
                } else QG = 4 === kG ? Vb.BOTTOM : Vb.UPPER_MIDDLE;
                const KG = dG[QG];
                for (let hG = UG; hG <= YG; hG++) {
                  const kG = hG - LG;
                  this.applyCanopyGenerationSchema(GG, bG, ZG, wG, zG, SG, hG, VG, pG, fG, yG, kG, KG, JG)
                }
              }
            }
          }
          addTallOrDroopyCanopyToChunk(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG) {
            for (let rG = yG; rG <= kG; rG++) {
              const yG = rG - SG;
              for (let SG = QG; SG <= KG; SG++) {
                let kG;
                kG = SG === hG ? Vb.TOP : SG === hG - 1 ? Vb.UPPER_MIDDLE : SG === hG - 2 ? Vb.LOWER_MIDDLE : Vb.BOTTOM;
                const QG = dG[kG];
                for (let KG = UG; KG <= YG; KG++) {
                  const kG = KG - LG;
                  this.applyCanopyGenerationSchema(GG, bG, ZG, wG, rG, SG, KG, VG, pG, fG, yG, kG, QG, JG)
                }
              }
            }
          }
          addFlatCanopyToChunk(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG) {
            for (let rG = yG; rG <= kG; rG++) {
              const yG = rG - SG;
              for (let SG = QG; SG <= KG; SG++) {
                let kG;
                SG === hG ? kG = Vb.TOP : SG === hG - 1 && (kG = Vb.UPPER_MIDDLE);
                const QG = dG[kG];
                for (let KG = UG; KG <= YG; KG++) {
                  const kG = KG - LG;
                  this.applyCanopyGenerationSchema(GG, bG, ZG, wG, rG, SG, KG, VG, pG, fG, yG, kG, QG, JG)
                }
              }
            }
          }
          applyCanopyGenerationSchema(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG) {
            if (LG <= kG && 0 === VG && 0 === pG) return;
            let KG;
            const hG = fG.get(VG, pG);
            if (hG === fb.ALWAYS) KG = UG;
            else {
              if (hG === fb.NEVER) return;
              if (hG !== fb.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${hG}`);
              if (!(QG.next() < .8)) return;
              KG = UG
            }
            null !== YG && QG.next() < 1 / 15 && (KG = YG), GG.set(SG - bG, LG - ZG, yG - wG, KG)
          }
          addTreeTrunkToChunk(GG, bG, ZG, wG, SG, LG) {
            const yG = bG + this.rK,
              kG = ZG + this.rK,
              UG = wG + this.rK,
              YG = SG.treeX,
              VG = SG.trunkBase,
              pG = SG.treeZ,
              fG = this.treeInfos[SG.treeType],
              QG = bG <= YG && YG < yG && wG <= pG && pG < UG,
              KG = ZG <= VG && VG < kG,
              hG = Math.max(VG + 1, ZG),
              dG = Math.min(VG + SG.height, kG) - 1;
            if (LG = Math.min(LG, kG), QG) {
              KG && GG.set(YG - bG, VG - ZG, pG - wG, fG.trunkBaseId);
              for (let SG = hG; SG <= dG; SG++) GG.set(YG - bG, SG - ZG, pG - wG, fG.trunkBlockId)
            }
            const JG = SG.vineDir;
            if (-1 === JG) return;
            let rG, zG = 0,
              EG = 0;
            0 === JG ? (zG = -1, rG = this.blockMetadata["Vines|meta|rot4"].id) : 1 === JG ? (EG = 1, rG = this.blockMetadata.Vines.id) : 2 === JG ? (zG = 1, rG = this.blockMetadata["Vines|meta|rot2"].id) : 3 === JG && (EG = -1, rG = this.blockMetadata["Vines|meta|rot3"].id);
            const oG = YG + zG,
              XG = pG + EG;
            if (!(oG < bG || oG >= yG || XG < wG || XG >= UG)) {
              KG && GG.set(oG - bG, VG - ZG, XG - wG, rG);
              for (let SG = hG; SG < LG; SG++) GG.set(oG - bG, SG - ZG, XG - wG, rG)
            }
          }
          getAllBlocksForTree(GG) {
            const bG = this.rK >> 1,
              ZG = GG.treeX - bG,
              wG = GG.trunkBase,
              SG = GG.treeZ - bG,
              LG = [],
              yG = new Kb(LG, ZG, wG, SG);
            return this.addTreesToChunk(yG, ZG, wG, SG, [GG]), LG
          }
        }
        class Kb {
          constructor(GG, bG, ZG, wG) {
            this.treeBlocks = GG, this.startX = bG, this.startY = ZG, this.startZ = wG
          }
          set(GG, bG, ZG, wG) {
            this.treeBlocks.push({
              x: GG + this.startX,
              y: bG + this.startY,
              z: ZG + this.startZ,
              id: wG
            })
          }
        }
        var hb = ZG(40148);
        let db = null;
        class Jb {
          constructor(GG, bG, ZG, LG, yG, kG, UG, YG) {
            this.biomeSelector = GG, this.noWaterHeightmapGenerator = bG, this.hydrology = ZG, this.lakeRadiusNoiseModifier = LG, this.seed = yG, this.needOutsideWaterDist = UG, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, db || (db = new hb.b("scattered lakes", YG ? 4e3 : 500, 6e4)), this.lakes = db.partition(), this.pointGenerator = new SG.d("oasisLake", this.distApart, !1, !0, `${yG}oasisLake`, 6, kG), this.lakeRadiusNoiseAmplitude = (0, wG.w)(LG)
          }
          getWaterGenInfo(GG, bG, ZG) {
            const SG = this.maxRadius + ZG,
              LG = SG * SG;
            let yG, kG = null,
              UG = 0,
              YG = 0,
              VG = 1e4;
            for (const pG of this.pointGenerator.getPointsAroundPoint(GG, bG)) {
              if ((0, wG.G)(pG, GG, bG) > LG) continue;
              const ZG = this.getLakeAtOrigin(pG);
              if (null === ZG) continue;
              void 0 === yG && (yG = this.lakeRadiusNoiseModifier.getOctaves(GG, bG) + this.lakeRadiusNoiseAmplitude);
              const SG = (0, wG.C)(ZG.origin, GG, bG),
                fG = yG * (ZG.radius / this.maxRadius),
                QG = ZG.radius - fG,
                KG = SG - QG;
              KG >= VG || (VG = KG, kG = ZG, UG = SG, YG = QG)
            }
            return null === kG ? null : {
              distFromWater: UG,
              waterRadius: YG,
              waterHeight: kG.waterHeight,
              waterbedHeight: kG.bedHeight,
              isLake: !0,
              needOutsideWaterDist: this.needOutsideWaterDist
            }
          }
          getLakeAtOrigin(GG) {
            const bG = this.lakes.get(GG[0], GG[1]);
            if (!(0, VG.L)(bG)) return bG.lake;
            const ZG = this.buildLake(GG);
            return this.lakes.set(GG[0], GG[1], {
              lake: ZG
            }), ZG
          }
          buildLake(GG) {
            const bG = this.biomeSelector.generate(GG[0], GG[1]);
            if (!bG[0].biome.hasScatteredLakes) return null;
            const {
              minRadius: ZG,
              maxRadius: wG,
              minGapFromHydrologyWater: SG
            } = this, LG = new fG.f(`${GG[0]}|${GG[1]}${this.seed}oasisLake`), yG = this.hydrology.getHydrologyWaterGenInfo(GG[0], GG[1]), kG = Math.floor(yG.distFromWater - yG.waterRadius - SG);
            if (kG < ZG) return null;
            const UG = Math.min(ZG + Math.floor(LG.next() * (wG - ZG + 1)), kG),
              YG = Math.floor(this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(GG[0], GG[1], bG) - 7);
            return {
              origin: [GG[0], GG[1]],
              radius: UG,
              waterHeight: YG,
              bedHeight: Math.floor(YG - (4 + .35 * UG))
            }
          }
        }
        class rb {
          constructor() {
            this.hasLake = !1, this.lakeCreationHasBeenAttempted = !1, this.lakeWaterHeight = 0, this.lakeRadius = 0, this.lakeBedHeight = 0
          }
        }
        let zb = null;
        class Eb {
          constructor(GG, bG, ZG, SG, LG, yG, kG, UG) {
            this.biomeSelector = GG, this.noWaterHeightmapGenerator = bG, this.needOutsideWaterBodyDist = yG, this.Lw = UG, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
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
            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, zb || (zb = new hb.b("water cells", kG ? 800 : 60, 6e4)), this.waterBodyInfos = zb.partition();
            const YG = Math.max(this.lakeSettings.maxRadius, this.maxRiverSettings.width / 2 + this.widthOffset) + yG + LG;
            this.cellCenterMaxOffset = this.gridSize / 2 - YG, this.seed = ZG, this.lakeRadiusNoiseModifier = new wG.g([{
              amplitude: 10,
              frequency: 1 / 55
            }, {
              amplitude: 4,
              frequency: .04
            }], `${ZG}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, wG.w)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new Jb(GG, bG, this, this.lakeRadiusNoiseModifier, ZG, SG, yG, kG)
          }
          getInfoNeededForWaterGen(GG, bG) {
            let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!this.Lw) return Xb(this.needOutsideWaterBodyDist);
            const wG = this.getHydrologyWaterGenInfo(GG, bG);
            if (!ZG) return wG;
            const SG = this.scatteredLakes.getWaterGenInfo(GG, bG, this.needOutsideWaterBodyDist);
            return null === SG || ob(wG) <= ob(SG) ? wG : SG
          }
          columnMayHaveScatteredLakes(GG, bG, ZG) {
            for (const {
                biome: wG
              }
              of GG)
              if (wG.hasScatteredLakes) return !0;
            return this.biomeSelector.regionMayHaveScatteredLakes(bG, ZG)
          }
          getDistToScatteredLakeEdge(GG, bG, ZG) {
            const wG = this.scatteredLakes.getWaterGenInfo(GG, bG, ZG);
            return null === wG ? 1e4 : ob(wG)
          }
          getHydrologyWaterGenInfo(GG, bG) {
            const ZG = [GG, bG],
              SG = this.getWaterInfo(GG, bG, !0);
            let LG = 1e4,
              yG = 0,
              kG = 0,
              UG = 0,
              YG = 0,
              VG = 0,
              pG = 0;
            if (SG.downhill) {
              const {
                ey: GG,
                fracAlong: bG,
                lineSegmentLength: fG
              } = (0, wG.u)(ZG, SG.origin, SG.downhill.origin);
              yG = Math.floor(GG);
              let QG = SG.incomingFlux;
              if (QG += bG * SG.selfFlux, UG = Math.min(1, QG / this.maxRiverSettings.atFlux), kG = Math.max(1, Math.ceil(UG * this.maxRiverSettings.width)), LG = yG - kG / 2, VG = SG.originNoWaterHeight + -3, SG.downhill.lakeInfo.hasLake) {
                pG = SG.downhill.lakeInfo.lakeWaterHeight;
                const GG = fG - SG.downhill.lakeInfo.lakeRadius,
                  ZG = fG * bG;
                YG = Math.min(1, ZG / GG)
              } else pG = SG.downhill.originNoWaterHeight + -3, YG = bG
            }
            for (const fG of SG.uphills) {
              const {
                ey: GG,
                fracAlong: bG,
                lineSegmentLength: QG
              } = (0, wG.u)(ZG, fG.origin, SG.origin), KG = Math.floor(GG);
              let hG = fG.incomingFlux;
              hG += bG * fG.selfFlux;
              const dG = Math.min(1, hG / this.maxRiverSettings.atFlux),
                JG = Math.max(1, Math.ceil(dG * this.maxRiverSettings.width)),
                rG = KG - JG / 2;
              if (rG < LG)
                if (LG = rG, yG = KG, UG = dG, kG = JG, VG = fG.originNoWaterHeight + -3, SG.lakeInfo.hasLake) {
                  pG = SG.lakeInfo.lakeWaterHeight;
                  const GG = QG - SG.lakeInfo.lakeRadius,
                    ZG = QG * bG;
                  YG = Math.min(1, ZG / GG)
                } else pG = SG.originNoWaterHeight + -3, YG = bG
            }
            if (1e4 !== LG) {
              let ZG = 1e4,
                fG = 0;
              if (SG.lakeInfo.hasLake) {
                const LG = SG.lakeInfo;
                let yG = this.lakeRadiusNoiseModifier.getOctaves(GG, bG);
                yG += this.lakeRadiusNoiseAmplitude;
                yG *= LG.lakeRadius / this.lakeSettings.maxRadius, fG = LG.lakeRadius - yG, ZG = (0, wG.C)(SG.origin, GG, bG) - fG
              }
              const QG = Math.floor(pG + (VG - pG) * (1 - YG)),
                KG = QG - (Math.ceil(10 * UG) + 2);
              if (LG < ZG) {
                return {
                  distFromWater: yG,
                  waterRadius: (kG + this.widthOffset) / 2,
                  waterHeight: QG,
                  waterbedHeight: KG,
                  isLake: !1,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              } {
                const ZG = (0, wG.C)(SG.origin, GG, bG),
                  LG = SG.lakeInfo;
                return {
                  distFromWater: ZG,
                  waterRadius: fG,
                  waterHeight: LG.lakeWaterHeight,
                  waterbedHeight: LG.lakeBedHeight,
                  isLake: !0,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              }
            }
            return Xb(this.needOutsideWaterBodyDist)
          }
          getWaterInfo(GG, bG, ZG) {
            const wG = Math.floor(GG / this.gridSize),
              SG = Math.floor(bG / this.gridSize),
              LG = this.getCellInfo(wG, SG);
            if (LG.uphills || this.fillInUphillInfo(wG, SG, LG), LG.downhill || LG.lakeInfo.lakeCreationHasBeenAttempted || (this.fillInLakeInfo(LG), LG.lakeInfo.lakeCreationHasBeenAttempted = !0), ZG && LG.downhill) {
              const GG = this.getWaterInfo(LG.downhill.origin[0], LG.downhill.origin[1], !1);
              LG.downhill.lakeInfo = GG.lakeInfo
            }
            return LG
          }
          getCellInfo(GG, bG) {
            if (GG === this.lastReadInfo.cellX && bG === this.lastReadInfo.cellZ) return this.lastReadInfo.info;
            const ZG = this.waterBodyInfos.get(GG, bG);
            if (!(0, VG.L)(ZG)) return this.lastReadInfo.cellX = GG, this.lastReadInfo.cellZ = bG, this.lastReadInfo.info = ZG, ZG;
            const wG = this.getCellOrigin(GG, bG),
              SG = this.biomeSelector.generate(wG[0], wG[1]),
              LG = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(wG[0], wG[1], SG),
              yG = {
                origin: wG,
                originNoWaterHeight: LG,
                downhill: this.getDownhillFromCell(GG, bG, LG),
                uphills: null,
                incomingFlux: null,
                selfFlux: this.getRainfall(wG[0], wG[1]),
                lakeInfo: new rb
              };
            return this.lastReadInfo.cellX = GG, this.lastReadInfo.cellZ = bG, this.lastReadInfo.info = yG, this.waterBodyInfos.set(GG, bG, yG), yG
          }
          fillInUphillInfo(GG, bG, ZG) {
            const wG = this.getUphillsFromCell(GG, bG);
            let SG = 0;
            for (const {
                incomingFlux: LG,
                selfFlux: yG
              }
              of wG) SG += LG + yG;
            ZG.uphills = wG, ZG.incomingFlux = SG
          }
          getUphillsFromCell(GG, bG) {
            const ZG = [];
            for (let LG = -1; LG <= 1; LG++)
              for (let yG = -1; yG <= 1; yG++) {
                var wG, SG;
                const kG = GG + LG,
                  UG = bG + yG,
                  YG = Math.abs(LG) + Math.abs(yG);
                if (2 === YG || 0 === YG) continue;
                const VG = this.getCellInfo(kG, UG);
                (null === (wG = VG.downhill) || void 0 === wG ? void 0 : wG.cell[0]) === GG && (null === (SG = VG.downhill) || void 0 === SG ? void 0 : SG.cell[1]) === bG && (VG.uphills || this.fillInUphillInfo(kG, UG, VG), ZG.push({
                  incomingFlux: VG.incomingFlux,
                  selfFlux: VG.selfFlux,
                  origin: VG.origin,
                  originNoWaterHeight: VG.originNoWaterHeight
                }))
              }
            return ZG
          }
          getDownhillFromCell(GG, bG, ZG) {
            const wG = {
              cell: [0, 0],
              origin: null,
              originNoWaterHeight: 0,
              lakeInfo: new rb
            };
            let SG = -1;
            for (let LG = -1; LG <= 1; LG++)
              for (let yG = -1; yG <= 1; yG++) {
                const kG = GG + LG,
                  UG = bG + yG,
                  YG = Math.abs(LG) + Math.abs(yG);
                if (2 === YG || 0 === YG) continue;
                const VG = this.getCellOrigin(kG, UG),
                  pG = this.biomeSelector.generate(VG[0], VG[1]),
                  fG = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(VG[0], VG[1], pG),
                  QG = ZG - fG;
                QG > 0 && QG > SG && (SG = QG, wG.cell[0] = kG, wG.cell[1] = UG, wG.origin = VG, wG.originNoWaterHeight = fG)
              }
            return -1 !== SG ? wG : null
          }
          getCellOrigin(GG, bG) {
            const ZG = GG * this.gridSize + this.gridSize / 2,
              wG = bG * this.gridSize + this.gridSize / 2,
              SG = new fG.f(`${GG}${bG}${this.seed}riverCell`);
            return [ZG + Math.floor(SG.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset), wG + Math.floor(SG.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset)]
          }
          fillInLakeInfo(GG) {
            const bG = GG.lakeInfo,
              ZG = GG.incomingFlux + GG.selfFlux;
            if (ZG < this.lakeSettings.noLakeFluxCutoff) return;
            bG.hasLake = !0;
            const wG = ZG / this.lakeSettings.maxRadiusAtFlux,
              SG = this.lakeSettings.minRadius + Math.ceil(wG * (this.lakeSettings.maxRadius - this.lakeSettings.minRadius));
            bG.lakeRadius = SG, bG.lakeWaterHeight = Math.floor(GG.originNoWaterHeight - 7);
            const LG = 4 + .35 * SG;
            bG.lakeBedHeight = Math.floor(bG.lakeWaterHeight - LG)
          }
          getRainfall(GG, bG) {
            return 100
          }
        }

        function ob(GG) {
          let {
            distFromWater: bG,
            waterRadius: ZG
          } = GG;
          return bG - ZG
        }

        function Xb(GG) {
          return {
            distFromWater: 1e4,
            waterRadius: 0,
            waterHeight: 0,
            waterbedHeight: 0,
            isLake: !1,
            needOutsideWaterDist: GG
          }
        }
        const ub = [{
          blockName: "Moonstone Ore",
          radius: 2,
          aw: 40,
          Zw: -85,
          ww: -85,
          lw: .5
        }, {
          blockName: "Diamond Ore",
          radius: 2,
          aw: 13,
          Zw: -100,
          ww: -85,
          lw: .28
        }, {
          blockName: "Gold Ore",
          radius: 2,
          aw: 10,
          Zw: -100,
          ww: -75,
          lw: .4
        }, {
          blockName: "Iron Ore",
          radius: 2,
          aw: 5,
          Zw: -80,
          ww: 15,
          lw: .5
        }, {
          blockName: "Coal Ore",
          radius: 3,
          aw: 4,
          Zw: -60,
          ww: 40,
          lw: .5
        }];
        class ib {
          constructor(GG, bG, ZG, wG) {
            this.seed = bG, this.rK = ZG, this.Iw = void 0, this.Iw = wG.map((wG => {
              const LG = new SG.d("ore", wG.aw, !1, !0, `${bG}${wG.blockName}`, 20, ZG, null, !0);
              return LG.assertReachableFromChunkCentre(ZG, wG.radius), {
                Gk: (0, VG.I)(wG.blockName, GG),
                radius: wG.radius,
                aw: wG.aw,
                Zw: wG.Zw,
                ww: wG.ww,
                lw: wG.lw,
                pointGenerator: LG
              }
            }))
          }
          getOreBlocksForChunk(GG, bG) {
            const ZG = [],
              SG = new fG.f(`${GG}${bG}${this.seed}oreExists`);
            for (const LG of this.Iw) {
              const yG = LG.pointGenerator.getPointsAroundPoint(GG + this.rK / 2, bG + this.rK / 2),
                kG = GG + this.rK + LG.radius,
                UG = GG - LG.radius - 1,
                YG = bG + this.rK + LG.radius,
                VG = bG - LG.radius - 1;
              for (const pG of yG) {
                if (pG[0] >= kG || pG[0] <= UG || pG[1] >= YG || pG[1] <= VG) continue;
                const yG = new fG.f(`${pG[0]}${pG[1]}${this.seed}ore`),
                  QG = Math.floor(yG.next() * (LG.ww + 1 - LG.Zw)) + LG.Zw,
                  KG = Math.max(GG, pG[0] - LG.radius),
                  hG = Math.min(GG + this.rK - 1, pG[0] + LG.radius),
                  dG = Math.max(bG, pG[1] - LG.radius),
                  JG = Math.min(bG + this.rK - 1, pG[1] + LG.radius);
                for (let GG = KG; GG <= hG; GG++)
                  for (let bG = dG; bG <= JG; bG++) {
                    (0, wG.x)(pG, GG, bG) > LG.radius || (SG.next() >= LG.lw || ZG.push(GG, QG, bG, LG.Gk))
                  }
              }
            }
            return new Int32Array(ZG)
          }
          addOresToChunk(GG, bG, ZG, wG, SG, yG, kG) {
            const UG = ZG + this.rK,
              YG = kG.length;
            for (let VG = 0; VG < YG; VG += 4) {
              const YG = kG[VG + 1];
              if (YG < ZG || YG >= UG) continue;
              const pG = kG[VG],
                fG = kG[VG + 2];
              if (YG < yG.get(pG, fG, LG.d.GroundHeight) - SG) {
                const SG = kG[VG + 3];
                GG.set(pG - bG, YG - ZG, fG - wG, SG)
              }
            }
          }
        }
        var Cb = ZG(40154);
        const Wb = [0, -1, 0],
          mb = [0, 1, 0],
          Ib = [-1, 0, 0],
          Fb = [1, 0, 0],
          vb = [0, 0, -1],
          ab = [0, 0, 1];

        function cb(GG, bG) {
          const {
            Kw: ZG,
            zw: wG,
            shallowClusterY: SG,
            deepClusterY: LG
          } = GG;
          if (void 0 === wG || void 0 === SG || void 0 === LG) return ZG;
          return ZG + (wG - ZG) * Math.max(0, Math.min(1, (SG - bG) / (SG - LG)))
        }

        function lb(GG, bG, ZG) {
          const wG = [];
          return ZG.pw && wG.push({
            offset: Wb,
            Gk: GG[bG].id
          }), ZG.fw && wG.push({
            offset: Ib,
            Gk: GG[`${bG}|meta|rot2|side`].id
          }, {
            offset: Fb,
            Gk: GG[`${bG}|meta|rot4|side`].id
          }, {
            offset: vb,
            Gk: GG[`${bG}|meta|rot1|side`].id
          }, {
            offset: ab,
            Gk: GG[`${bG}|meta|rot3|side`].id
          }), ZG.Qw && wG.push({
            offset: mb,
            Gk: GG[`${bG}|meta|rot1|top`].id
          }), wG
        }

        function jb(GG, bG) {
          return null === bG ? function(GG) {
            return [{
              seedPrefix: "crystal",
              anchorOptions: lb(GG, "Crystal", {
                pw: !0,
                fw: !0,
                Qw: !0
              }),
              clusterBoxSize: 4,
              hw: .8,
              dw: 0,
              Kw: .12,
              zw: .25,
              shallowClusterY: -20,
              deepClusterY: -85
            }, {
              seedPrefix: "mushroom",
              anchorOptions: lb(GG, "Glowing Mushroom", {
                pw: !0,
                fw: !0,
                Qw: !1
              }),
              clusterBoxSize: 4,
              hw: .7,
              dw: 2,
              Kw: .58
            }]
          }(GG) : bG.map((bG => function(GG, bG) {
            const ZG = bG.Jw;
            return {
              seedPrefix: bG.blockName,
              anchorOptions: lb(GG, bG.blockName, {
                pw: bG.pw,
                fw: bG.fw,
                Qw: bG.Qw
              }),
              clusterBoxSize: 4,
              hw: bG.hw,
              dw: bG.dw,
              Kw: bG.Kw,
              zw: null === ZG || void 0 === ZG ? void 0 : ZG.zw,
              shallowClusterY: null === ZG || void 0 === ZG ? void 0 : ZG.Ew,
              deepClusterY: null === ZG || void 0 === ZG ? void 0 : ZG.ow
            }
          }(GG, bG)))
        }
        class Pb {
          constructor(GG) {
            this.caveHeightmapVals = GG
          }
          generate(GG, bG) {
            return IG(GG, bG, this.caveHeightmapVals, !1)
          }
        }
        class Mb {
          constructor(GG, bG, ZG, wG) {
            this.caveHeightmapVals = GG, this.heightmapVals = bG, this.surfaceMargin = ZG, this.minCaveHeight = wG
          }
          generate(GG, bG) {
            const ZG = IG(GG, bG, this.caveHeightmapVals, !0);
            if (0 === ZG.length) return ZG;
            const wG = this.heightmapVals.getOrGenerate(GG, bG, LG.d.GroundHeight) - this.surfaceMargin,
              {
                minCaveHeight: SG
              } = this,
              yG = [];
            for (const LG of ZG) {
              const GG = Math.min(LG.ceilingY, wG);
              GG - LG.floorY + 1 < SG || yG.push(GG === LG.ceilingY ? LG : {
                floorY: LG.floorY,
                ceilingY: GG
              })
            }
            return yG
          }
        }
        class Ab {
          constructor(GG, bG, ZG, SG) {
            this.heightmapVals = GG, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new wG.k(new Pb(bG)), this.decoratableCavesCache = new wG.k(new Mb(bG, GG, ZG, SG))
          }
          getAllCaves(GG, bG) {
            return this.allCavesCache.getOrGenerate(GG, bG)
          }
          getGroundHeight(GG, bG) {
            return this.heightmapVals.getOrGenerate(GG, bG, LG.d.GroundHeight)
          }
          getDecoratableCaves(GG, bG) {
            return this.decoratableCavesCache.getOrGenerate(GG, bG)
          }
        }

        function sb(GG, bG, ZG, wG) {
          if (bG > wG.getGroundHeight(GG, ZG)) return !1;
          const SG = wG.getAllCaves(GG, ZG);
          for (const LG of SG)
            if (bG >= LG.floorY && bG <= LG.ceilingY) return !1;
          return !0
        }

        function qb(GG, bG, ZG, wG, SG, LG) {
          let yG = null;
          const kG = [];
          for (const UG of wG) {
            sb(GG + UG.offset[0], bG + UG.offset[1], ZG + UG.offset[2], LG) && (UG.offset === Wb ? yG = UG : kG.push(UG))
          }
          return null !== yG ? yG : 0 === kG.length ? null : kG[Math.floor(SG * kG.length)]
        }
        class nb {
          constructor(GG, bG, ZG) {
            let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.rK = bG, this.seed = ZG, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
            const LG = jb(GG, wG);
            let yG = 0,
              kG = 0;
            for (const SG of LG) {
              var UG;
              if (!Number.isInteger(SG.clusterBoxSize) || SG.clusterBoxSize < 2 || SG.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${SG.seedPrefix}" has invalid clusterBoxSize (${SG.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
              const GG = SG.clusterBoxSize >> 1;
              GG > yG && (yG = GG), kG += Math.max(SG.Kw, null !== (UG = SG.zw) && void 0 !== UG ? UG : SG.Kw)
            }
            if (kG > 1) throw new Error(`Cave decoration cluster chances sum to ${kG} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
            this.pointsGen = new SG.d("caveDeco", 10, !1, !0, ZG, 4, bG, null, !0), this.pointsGen.assertReachableFromChunkCentre(bG, yG), this.configs = LG, this.maxHalfBox = yG
          }
          getDecorationsForChunkColumn(GG, bG, ZG, wG) {
            const SG = [],
              LG = this.rK,
              yG = GG + LG,
              kG = bG + LG,
              UG = new Ab(ZG, wG, 4, 3),
              YG = GG + (LG >> 1),
              VG = bG + (LG >> 1),
              pG = this.pointsGen.getPointsAroundPoint(YG, VG),
              fG = this.maxHalfBox;
            for (const QG of pG) {
              const ZG = QG[0],
                wG = QG[1];
              ZG + fG <= GG || ZG - fG >= yG || wG + fG <= bG || wG - fG >= kG || this.collectClusterPlacements(ZG, wG, GG, yG, bG, kG, UG, SG)
            }
            return SG
          }
          static addCaveDecorationsToChunk(GG, bG, ZG, wG, SG, LG) {
            const yG = ZG + SG;
            for (const kG of LG) kG.y >= ZG && kG.y < yG && GG.set(kG.x - bG, kG.y - ZG, kG.z - wG, kG.Gk)
          }
          collectClusterPlacements(GG, bG, ZG, wG, SG, LG, yG, kG) {
            const UG = yG.getDecoratableCaves(GG, bG);
            if (0 === UG.length) return;
            const YG = new fG.f(`${this.seed}|${GG}|${bG}|cluster`),
              VG = YG.next(),
              pG = YG.next(),
              QG = YG.next(),
              KG = UG[Math.floor(VG * UG.length)],
              hG = KG.floorY + Math.floor(pG * (KG.ceilingY - KG.floorY + 1));
            let dG = 0,
              JG = null;
            for (const fG of this.configs)
              if (dG += cb(fG, hG), QG < dG) {
                JG = fG;
                break
              } if (null === JG) return;
            const rG = [];
            if (this.scatterClusterCells(GG, hG, bG, JG, yG, YG, rG), !(rG.length < JG.dw))
              for (const fG of rG) fG.x >= ZG && fG.x < wG && fG.z >= SG && fG.z < LG && kG.push(fG)
          }
          scatterClusterCells(GG, bG, ZG, wG, SG, LG, yG) {
            const {
              clusterBoxSize: kG,
              hw: UG,
              anchorOptions: YG
            } = wG, VG = kG >> 1, pG = GG - VG, fG = bG - VG, QG = ZG - VG;
            for (let KG = 0; KG < VG; KG++)
              for (let GG = 0; GG < VG; GG++)
                for (let bG = 0; bG < VG; bG++) {
                  const ZG = LG.next(),
                    wG = LG.next(),
                    kG = LG.next();
                  if (ZG >= UG) continue;
                  const VG = Math.floor(8 * wG),
                    hG = pG + 2 * KG + (1 & VG),
                    dG = fG + 2 * GG + (VG >> 1 & 1),
                    JG = QG + 2 * bG + (VG >> 2 & 1);
                  if (!gb(hG, dG, JG, SG)) continue;
                  const rG = qb(hG, dG, JG, YG, kG, SG);
                  null !== rG && yG.push({
                    x: hG,
                    y: dG,
                    z: JG,
                    Gk: rG.Gk
                  })
                }
          }
        }

        function gb(GG, bG, ZG, wG) {
          const SG = wG.getDecoratableCaves(GG, ZG);
          for (const LG of SG)
            if (bG >= LG.floorY && bG <= LG.ceilingY) return !0;
          return !1
        }
        class eb {
          constructor(GG, bG, ZG, wG, LG, yG, kG) {
            this.prefabGenerator = wG, this.seed = void 0, this.rK = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = kG, this.rK = GG, this.biomeSelector = bG, this.treeGenerator = ZG, this.blockMetadata = LG, this.oreGenerator = yG, this.bedrockId = LG.Bedrock.id, this.waterId = LG.Water.id, this.sandId = LG.Sand.id, this.clayId = LG.Clay.id, this.chalkId = LG.Chalk.id, this.grassBlockId = LG["Grass Block"].id, this.dirtId = LG.Dirt.id, this.riverbedFeatureGenerator = new SG.d("clay", 50, !1, !0, kG, 4, GG, null, !0)
          }
          fillChunk(GG, bG, ZG, SG, kG, YG, VG, QG, KG, hG, dG, JG, rG) {
            if (ZG + this.rK <= yG.s.bedrockLevel) return {
              specialBlocks: []
            };
            const zG = new pG.c,
              EG = rG.minTerrainHeight,
              oG = rG.maxTerrainHeight,
              XG = rG.hasWater;
            if (oG >= ZG && EG < ZG + this.rK)
              for (let wG = bG; wG < bG + this.rK; wG++)
                for (let UG = SG; UG < SG + this.rK; UG++) {
                  const YG = hG.biomeIds.get(wG, UG),
                    VG = this.biomeSelector.getBiomeFromId(YG),
                    pG = kG.get(wG, UG, LG.d.GroundHeight);
                  if (pG >= ZG && pG < ZG + this.rK) {
                    const YG = kG.get(wG, UG, LG.d.IsLake) === yG.i ? VG.getDryBedBlock(wG, pG, UG) : VG.getTopsoilBlock(wG, pG, UG);
                    GG.set(wG - bG, pG - ZG, UG - SG, YG)
                  }
                }
            if (oG + 1 >= ZG && EG - 4 < ZG + this.rK)
              for (let wG = bG; wG < bG + this.rK; wG++)
                for (let yG = SG; yG < SG + this.rK; yG++) {
                  const UG = hG.biomeIds.get(wG, yG),
                    YG = this.biomeSelector.getBiomeFromId(UG),
                    VG = kG.get(wG, yG, LG.d.GroundHeight),
                    pG = Math.min(VG, ZG + this.rK);
                  for (let LG = Math.max(VG - 4, ZG); LG < pG; LG++) GG.set(wG - bG, LG - ZG, yG - SG, YG.getLowsoilBlockType(wG, LG, yG, VG))
                }
            const uG = rG.banks;
            for (let wG = 0; wG < uG.length; wG += 3) {
              const bG = uG[wG],
                SG = uG[wG + 1] - ZG,
                LG = uG[wG + 2];
              for (let ZG = Math.max(SG - 4, 0); ZG < Math.min(SG, this.rK); ZG++) GG.set(bG, ZG, LG, this.dirtId);
              SG >= 0 && SG < this.rK && GG.set(bG, SG, LG, this.grassBlockId)
            }
            if (oG - 4 >= ZG) {
              const wG = this.biomeSelector.anyStrata;
              for (let yG = bG; yG < bG + this.rK; yG++)
                for (let UG = SG; UG < SG + this.rK; UG++) {
                  const YG = hG.stoneTypeIds.get(yG, UG),
                    VG = kG.get(yG, UG, LG.d.GroundHeight),
                    pG = Math.min(VG - 4, ZG + this.rK),
                    fG = wG ? this.biomeSelector.getBiomeFromId(hG.biomeIds.get(yG, UG)) : null,
                    QG = null !== fG && fG.strataDepth > 0 ? VG - 4 - fG.strataDepth : pG;
                  for (let wG = ZG; wG < pG; wG++) {
                    const LG = wG >= QG ? fG.getStrataBlock(yG, wG, UG, VG) : 0;
                    GG.set(yG - bG, wG - ZG, UG - SG, 0 !== LG ? LG : YG)
                  }
                }
            }
            if (oG - 4 >= ZG && this.oreGenerator.addOresToChunk(GG, bG, ZG, SG, 4, kG, KG), oG >= ZG && (UG.d.addCavesToChunk(GG, bG, ZG, SG, kG, QG), nb.addCaveDecorationsToChunk(GG, bG, ZG, SG, this.rK, JG)), yG.s.bedrockLevel >= ZG && yG.s.bedrockLevel < ZG + this.rK)
              for (let wG = bG; wG < bG + this.rK; wG++)
                for (let LG = SG; LG < SG + this.rK; LG++) GG.set(wG - bG, yG.s.bedrockLevel - ZG, LG - SG, this.bedrockId);
            this.addSurfaceBlocks(GG, ZG, rG.flora);
            for (const wG of VG)
              for (let LG = bG; LG < bG + this.rK; LG++)
                for (let yG = ZG; yG < ZG + this.rK; yG++)
                  for (let kG = SG; kG < SG + this.rK; kG++) {
                    const UG = this.prefabGenerator.getBlockFromPrefabAtPoint(LG, yG, kG, wG, zG);
                    0 !== UG && GG.set(LG - bG, yG - ZG, kG - SG, UG === lG.GUARANTEED_AIR ? 0 : UG)
                  }
            oG + this.treeGenerator.maxTreeHeight >= ZG && this.treeGenerator.addTreesToChunk(GG, bG, ZG, SG, YG);
            const iG = rG.water;
            for (let wG = 0; wG < iG.length; wG += 5) {
              const bG = iG[wG],
                SG = iG[wG + 1],
                LG = iG[wG + 2] - ZG,
                yG = iG[wG + 3] - ZG;
              for (let ZG = Math.max(LG, 0); ZG < Math.min(yG, this.rK); ZG++) GG.set(bG, ZG, SG, this.waterId);
              yG >= 0 && yG < this.rK && GG.set(bG, yG, SG, iG[wG + 4])
            }
            let CG, mG, IG;
            if (this.addSurfaceBlocks(GG, ZG, rG.lilyPads), XG && oG >= ZG && EG < ZG + this.rK)
              for (let UG = bG; UG < bG + this.rK; UG++)
                for (let YG = SG; YG < SG + this.rK; YG++) {
                  const VG = kG.get(UG, YG, LG.d.WaterHeight),
                    pG = kG.get(UG, YG, LG.d.GroundHeight);
                  if (VG !== yG.p && pG >= ZG && pG < ZG + this.rK)
                    if (VG === pG) GG.set(UG - bG, pG - ZG, YG - SG, this.sandId);
                    else {
                      const LG = this.riverbedFeatureGenerator.getClosestPoint(UG, YG);
                      if ((0, wG.G)(LG, UG, YG) < 100) CG === LG[0] && mG === LG[1] || (CG = LG[0], mG = LG[1], IG = new fG.f(`${this.seed}${CG}${mG}`).next() < .3 ? this.chalkId : this.clayId), GG.set(UG - bG, pG - ZG, YG - SG, IG), pG - 1 >= ZG && GG.set(UG - bG, pG - 1 - ZG, YG - SG, IG), pG - 2 >= ZG && GG.set(UG - bG, pG - 2 - ZG, YG - SG, IG);
                      else {
                        const wG = hG.biomeIds.get(UG, YG),
                          LG = this.biomeSelector.getBiomeFromId(wG);
                        GG.set(UG - bG, pG - ZG, YG - SG, LG.getLowsoilBlockType(UG, pG, YG, pG))
                      }
                    }
                }
            for (const wG of dG)
              for (let LG = bG; LG < bG + this.rK; LG++)
                for (let yG = ZG; yG < ZG + this.rK; yG++)
                  for (let kG = SG; kG < SG + this.rK; kG++) {
                    const UG = WG.d.getBlockFromFixedPointPrefab(LG, yG, kG, wG);
                    0 !== UG && GG.set(LG - bG, yG - ZG, kG - SG, UG)
                  }
            const FG = [];
            for (const wG of zG) {
              const LG = wG.val;
              if (GG.get(wG.x - bG, wG.y - ZG, wG.z - SG) !== LG.getBlockId()) continue;
              const yG = LG.generate(),
                kG = [wG.x, wG.y, wG.z];
              FG.push({
                pos: kG,
                ...yG
              })
            }
            return {
              specialBlocks: FG
            }
          }
          addSurfaceBlocks(GG, bG, ZG) {
            for (let wG = 0; wG < ZG.length; wG += 4) {
              const SG = ZG[wG + 1] - bG;
              SG >= 0 && SG < this.rK && GG.set(ZG[wG], SG, ZG[wG + 2], ZG[wG + 3])
            }
          }
        }
        class Rb {
          constructor() {
            this.blocks = [], this.startY = 0
          }
          set(GG, bG, ZG, wG) {
            return this.blocks.push(GG, this.startY + bG, ZG, wG), wG
          }
        }
        class Tb {
          constructor(GG, bG, ZG, wG) {
            this.rK = GG, this.biomeSelector = bG, this.seed = ZG, this.random = new fG.f(""), this.lilyPadId = void 0, this.lilyPadId = wG["Lily Pad"].id
          }
          getInfoForChunkColumn(GG, bG, ZG, wG, SG, kG) {
            const YG = [],
              VG = [],
              pG = [],
              fG = new Rb;
            let QG = 1 / 0,
              KG = -1 / 0,
              hG = !1;
            for (let dG = GG; dG < GG + this.rK; dG++)
              for (let JG = bG; JG < bG + this.rK; JG++) {
                const rG = this.biomeSelector.getBiomeFromId(SG.biomeIds.get(dG, JG)),
                  zG = ZG.getOrGenerate(dG, JG, LG.d.GroundHeight),
                  EG = ZG.getOrGenerate(dG, JG, LG.d.WaterHeight);
                QG = Math.min(QG, zG), KG = Math.max(KG, zG);
                const oG = dG - GG,
                  XG = JG - bG;
                if (EG !== yG.p) {
                  hG = !0, zG < EG && YG.push(oG, XG, zG + 1, EG, rG.topwaterBlockType), rG.hasScatteredLakes && 1 === ZG.getOrGenerate(dG, JG, LG.d.IsLake) && (this.random.reseed(`${dG}|${JG}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(dG, JG, ZG) && pG.push(oG, EG + 1, XG, this.lilyPadId));
                  continue
                }
                let uG = rG.floraGenerator;
                if (rG.hasScatteredLakes && this.isBesideLake(dG, JG, ZG) && (this.random.reseed(`${dG}|${JG}|${this.seed}oasisShore`), this.random.next() < .85 && (VG.push(oG, zG, XG), uG = this.biomeSelector.baseBiome.floraGenerator)), !UG.d.isInCave(dG, zG, JG, wG) && !WG.d.isWithinFixedPointPrefab(dG, JG, kG))
                  for (let ZG = zG + 1; ZG <= zG + rG.maxFloraHeight; ZG += this.rK) fG.startY = ZG, uG.addBiomeFloraToColumn(fG, GG, bG, dG, ZG, JG, zG)
              }
            return {
              minTerrainHeight: QG,
              maxTerrainHeight: KG,
              hasWater: hG,
              water: new Int32Array(YG),
              banks: new Int32Array(VG),
              flora: new Int32Array(fG.blocks),
              lilyPads: new Int32Array(pG)
            }
          }
          isInsideWater(GG, bG, ZG) {
            return ZG.getOrGenerate(GG + 1, bG, LG.d.WaterHeight) !== yG.p && ZG.getOrGenerate(GG - 1, bG, LG.d.WaterHeight) !== yG.p && ZG.getOrGenerate(GG, bG + 1, LG.d.WaterHeight) !== yG.p && ZG.getOrGenerate(GG, bG - 1, LG.d.WaterHeight) !== yG.p
          }
          isBesideLake(GG, bG, ZG) {
            return this.isLakeWater(GG + 1, bG, ZG) || this.isLakeWater(GG - 1, bG, ZG) || this.isLakeWater(GG, bG + 1, ZG) || this.isLakeWater(GG, bG - 1, ZG)
          }
          isLakeWater(GG, bG, ZG) {
            return ZG.getOrGenerate(GG, bG, LG.d.WaterHeight) !== yG.p && 1 === ZG.getOrGenerate(GG, bG, LG.d.IsLake)
          }
        }
        var Hb = ZG(40053);
        let tb = null;
        class Db {
          constructor(GG, bG, ZG, SG, yG, kG, YG, VG, pG) {
            var fG, QG, KG, hG, dG, JG, rG;
            if (this.rK = GG, this.hashChunkContents = pG, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !tb) {
              const GG = yG ? 1750 : 125;
              tb = new hb.b("chunk columns", GG, 4e4)
            }
            this.chunkColumnInfos = tb.partition(), this.caveGenerator = new UG.d(SG, GG, bG, null !== (fG = null === YG || void 0 === YG ? void 0 : YG.yw.Uw) && void 0 !== fG ? fG : "Lava");
            const zG = new ib(bG, SG, GG, null !== (QG = null === YG || void 0 === YG ? void 0 : YG.Iw) && void 0 !== QG ? QG : [...ub, ...null !== (KG = null === VG || void 0 === VG ? void 0 : VG.sw) && void 0 !== KG ? KG : []]),
              EG = {
                rK: GG,
                blockMetadata: bG,
                worldGenerator: this,
                seed: SG,
                biomeOpts: {
                  oreGenerator: zG
                }
              },
              oG = null !== (hG = null === YG || void 0 === YG ? void 0 : YG.Xw) && void 0 !== hG ? hG : null,
              XG = null !== (dG = null === VG || void 0 === VG ? void 0 : VG.buildBiomes) && void 0 !== dG ? dG : null,
              uG = null !== oG ? (0, Cb.e)(oG, EG) : null !== XG ? this.buildTerrainBiomes(XG, EG) : (0, Cb.h)(EG);
            this.biomeSelector = new Cb.d(this, zG, SG, GG, bG, uG), this.treeGenerator = new Qb(this, this.biomeSelector, GG, SG, bG), this.fixedPointPrefabTracker = new WG.d(kG, GG), this.prefabGenerator = new Sb({
              seed: SG,
              rK: GG,
              blockMetadata: bG,
              itemMetadata: ZG,
              typeSettings: {
                [LG.i.SURFACE]: {
                  densitySettings: {
                    [LG.h.MEDIUM]: {
                      minDistanceBetweenPrefabs: 100
                    },
                    [LG.h.HIGH]: {
                      minDistanceBetweenPrefabs: 50
                    },
                    [LG.h.VERY_HIGH]: {
                      minDistanceBetweenPrefabs: 25
                    }
                  }
                },
                [LG.i.UNDERGROUND]: {
                  densitySettings: {
                    [LG.h.MEDIUM]: {
                      minDistanceBetweenPrefabs: 80
                    },
                    [LG.h.HIGH]: null,
                    [LG.h.VERY_HIGH]: null
                  }
                }
              },
              prefabSize: this.prefabSize
            }), this.noWaterHeightmapGenerator = new Hb.e((0, Hb.f)(SG)), this.heightmapPerturb = new wG.g([{
              amplitude: 1,
              frequency: 1 / 14
            }, {
              amplitude: 5,
              frequency: 1 / 65
            }, {
              amplitude: 20,
              frequency: .004
            }], `${SG}HeightmapPerturb`);
            let iG = 0;
            for (const {
                amplitude: wG
              }
              of this.heightmapPerturb.customOctaves) iG += wG;
            this.waterBodyGenerator = new Eb(this.biomeSelector, this.noWaterHeightmapGenerator, SG, GG, iG, this.needOutsideWaterDist, yG, null === (JG = null === YG || void 0 === YG ? void 0 : YG.Lw) || void 0 === JG || JG), this.caveDecorationGenerator = new nb(bG, GG, SG, null !== (rG = null === YG || void 0 === YG ? void 0 : YG.yw.Yw) && void 0 !== rG ? rG : null), this.surfaceGenerator = new Tb(GG, this.biomeSelector, SG, bG), this.chunkFiller = new eb(GG, this.biomeSelector, this.treeGenerator, this.prefabGenerator, bG, zG, SG)
          }
          getChunk(GG, bG, ZG, wG) {
            try {
              const {
                specialBlocks: SG
              } = this.getChunkInternal(GG, bG, ZG, wG);
              return {
                hash: this.hashChunkContents(GG.data, JSON.stringify(SG)),
                specialBlocks: SG
              }
            } catch (SG) {
              return console.log(SG.stack), void console.error(SG.stack)
            }
          }
          getDistToLakeEdge(GG, bG, ZG) {
            return this.waterBodyGenerator.getDistToScatteredLakeEdge(GG, bG, ZG)
          }
          getOresForChunkColumn(GG, bG) {
            const ZG = this.rK,
              wG = Math.floor(GG / ZG) * ZG,
              SG = Math.floor(bG / ZG) * ZG,
              LG = Math.floor(ZG / 2);
            return this.getClosestBiomesForChunk(wG, SG).getOrGenerate(wG + LG, SG + LG)[0].biome.oreGenerator.getOreBlocksForChunk(wG, SG)
          }
          buildTerrainBiomes(GG, bG) {
            const ZG = GG({
              ...bG,
              biomeAt: (GG, bG) => this.biomeSelector.getBiome(GG, bG).biome
            });
            if (0 === ZG.length) throw new Error("A world-gen terrain must build at least one biome");
            const wG = new Map;
            for (const {
                biome: LG
              }
              of ZG) {
              var SG;
              if ((null !== (SG = wG.get(LG.key)) && void 0 !== SG ? SG : LG) !== LG) throw new Error(`A world-gen terrain built two biomes keyed "${LG.key}"`);
              wG.set(LG.key, LG)
            }
            return [...ZG]
          }
          getPrefabLootChests(GG, bG, ZG, wG, SG) {
            const LG = new Map;
            for (const UG of this.prefabGenerator.getLootPrefabCentres(GG, bG, ZG, wG, this.biomeSelector)) {
              var yG;
              if (void 0 !== SG && UG.prefab.name !== SG) continue;
              const GG = `${Math.floor(UG.x/this.rK)}|${Math.floor(UG.z/this.rK)}`,
                bG = null !== (yG = LG.get(GG)) && void 0 !== yG ? yG : [];
              bG.push(UG), LG.set(GG, bG)
            }
            const kG = [];
            for (const UG of LG.values()) {
              const GG = Math.floor(UG[0].x / this.rK) * this.rK,
                bG = Math.floor(UG[0].z / this.rK) * this.rK,
                ZG = this.getClosestBiomesForChunk(GG, bG),
                {
                  nearestFixedPrefabInfoForChunk: wG
                } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(GG, bG),
                SG = this.getHeightMapVals(GG, bG, ZG, wG),
                LG = this.caveGenerator.getCaveHeightmapVals(GG, bG, SG),
                yG = this.prefabGenerator.getPrefabsForChunk(GG, bG, SG, ZG, LG, wG, this.biomeSelector);
              for (const YG of yG) {
                if (!UG.some((GG => GG.x === YG.centreX && GG.z === YG.centreZ && GG.prefab === YG.prefab))) continue;
                const GG = null !== YG.prefab.undergroundYInterval;
                for (const {
                    x: bG,
                    y: ZG,
                    z: wG
                  }
                  of YG.chestLocationToQuality.entries()) kG.push({
                  x: bG,
                  y: ZG,
                  z: wG,
                  underground: GG,
                  xZ: YG.prefab.name
                })
              }
            }
            return kG
          }
          getChunkInternal(GG, bG, ZG, wG) {
            const {
              biomeInfos: SG,
              heightmapVals: LG,
              caveHeightmapVals: yG,
              treesForChunk: kG,
              chunkPrefabs: UG,
              chunkOres: YG,
              decodedFixedPointPrefabsForChunk: VG,
              caveDecorations: pG,
              surface: fG
            } = this.getInfoForChunkColumn(bG, wG);
            return this.chunkFiller.fillChunk(GG, bG, ZG, wG, LG, kG, UG, yG, YG, SG, VG, pG, fG)
          }
          getInfoForChunkColumn(GG, bG) {
            if (this.mostRecentlyAccessedChunkColumn && this.mostRecentlyAccessedChunkColumnPos[0] === GG && this.mostRecentlyAccessedChunkColumnPos[1] === bG) return this.mostRecentlyAccessedChunkColumn;
            const ZG = this.chunkColumnInfos.get(GG, bG);
            if (ZG) return this.mostRecentlyAccessedChunkColumnPos[0] = GG, this.mostRecentlyAccessedChunkColumnPos[1] = bG, this.mostRecentlyAccessedChunkColumn = ZG, ZG;
            const wG = this.getClosestBiomesForChunk(GG, bG),
              {
                nearestFixedPrefabInfoForChunk: SG,
                decodedFixedPointPrefabsForChunk: LG
              } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(GG, bG),
              yG = this.getHeightMapVals(GG, bG, wG, SG),
              kG = this.caveGenerator.getCaveHeightmapVals(GG, bG, yG),
              UG = this.prefabGenerator.getPrefabsForChunk(GG, bG, yG, wG, kG, SG, this.biomeSelector),
              YG = this.treeGenerator.getTreesForChunk(GG, bG, yG, wG, kG, UG, SG),
              VG = wG.getOrGenerate(GG + Math.floor(this.rK / 2), bG + Math.floor(this.rK / 2))[0].biome.oreGenerator.getOreBlocksForChunk(GG, bG),
              pG = this.caveDecorationGenerator.getDecorationsForChunkColumn(GG, bG, yG, kG),
              fG = this.biomeSelector.getBiomeInfoForChunkFill(GG, bG, wG),
              QG = this.surfaceGenerator.getInfoForChunkColumn(GG, bG, yG, kG, fG, SG),
              KG = {
                biomeInfos: fG,
                heightmapVals: yG.viewJustInnerChunk(),
                caveHeightmapVals: kG.viewJustInnerChunk(),
                treesForChunk: YG,
                chunkPrefabs: UG,
                chunkOres: VG,
                decodedFixedPointPrefabsForChunk: LG,
                caveDecorations: pG,
                surface: QG
              };
            return this.mostRecentlyAccessedChunkColumnPos[0] = GG, this.mostRecentlyAccessedChunkColumnPos[1] = bG, this.mostRecentlyAccessedChunkColumn = KG, this.chunkColumnInfos.set(GG, bG, KG), KG
          }
          getClosestBiomesForChunk(GG, bG) {
            return wG.r.create(this.rK, [GG, bG], this.biomeSelector)
          }
          getHeightMapVals(GG, bG, ZG, SG) {
            const yG = new Hb.c(ZG, SG, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
            return wG.o.create(this.rK, [GG, bG], LG.d.NumFields, yG)
          }
        }
      },
      40061: (GG, bG, ZG) => {
        ZG.d(bG, {
          b: () => sG,
          e: () => CG,
          g: () => uG,
          h: () => iG,
          k: () => vG,
          o: () => jG,
          r: () => FG,
          t: () => EG,
          u: () => zG,
          w: () => XG,
          x: () => hG,
          A: () => oG,
          C: () => rG,
          G: () => JG
        });
        var wG = ZG(2837),
          SG = ZG.n(wG);
        const LG = .5 * (Math.sqrt(3) - 1),
          yG = (3 - Math.sqrt(3)) / 6,
          kG = 1 / 3,
          UG = 1 / 6,
          YG = (Math.sqrt(5) - 1) / 4,
          VG = (5 - Math.sqrt(5)) / 20,
          pG = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
          fG = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
        const QG = class {
          constructor() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
            const bG = "function" == typeof GG ? GG : function(GG) {
              let bG = 0,
                ZG = 0,
                wG = 0,
                SG = 1;
              const LG = function() {
                let GG = 4022871197;
                return function(bG) {
                  bG = bG.toString();
                  for (let ZG = 0; ZG < bG.length; ZG++) {
                    GG += bG.charCodeAt(ZG);
                    let wG = .02519603282416938 * GG;
                    GG = wG >>> 0, wG -= GG, wG *= GG, GG = wG >>> 0, wG -= GG, GG += 4294967296 * wG
                  }
                  return 2.3283064365386963e-10 * (GG >>> 0)
                }
              }();
              bG = LG(" "), ZG = LG(" "), wG = LG(" "), bG -= LG(GG), bG < 0 && (bG += 1);
              ZG -= LG(GG), ZG < 0 && (ZG += 1);
              wG -= LG(GG), wG < 0 && (wG += 1);
              return function() {
                const GG = 2091639 * bG + 2.3283064365386963e-10 * SG;
                return bG = ZG, ZG = wG, wG = GG - (SG = 0 | GG)
              }
            }(GG);
            this.p = function(GG) {
              const bG = new Uint8Array(256);
              for (let ZG = 0; ZG < 256; ZG++) bG[ZG] = ZG;
              for (let ZG = 0; ZG < 255; ZG++) {
                const wG = ZG + ~~(GG() * (256 - ZG)),
                  SG = bG[ZG];
                bG[ZG] = bG[wG], bG[wG] = SG
              }
              return bG
            }(bG), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (let ZG = 0; ZG < 512; ZG++) this.perm[ZG] = this.p[255 & ZG], this.permMod12[ZG] = this.perm[ZG] % 12
          }
          noise2D(GG, bG) {
            const ZG = this.permMod12,
              wG = this.perm;
            let SG = 0,
              kG = 0,
              UG = 0;
            const YG = (GG + bG) * LG,
              VG = Math.floor(GG + YG),
              fG = Math.floor(bG + YG),
              QG = (VG + fG) * yG,
              KG = GG - (VG - QG),
              hG = bG - (fG - QG);
            let dG, JG;
            KG > hG ? (dG = 1, JG = 0) : (dG = 0, JG = 1);
            const rG = KG - dG + yG,
              zG = hG - JG + yG,
              EG = KG - 1 + 2 * yG,
              oG = hG - 1 + 2 * yG,
              XG = 255 & VG,
              uG = 255 & fG;
            let iG = .5 - KG * KG - hG * hG;
            if (iG >= 0) {
              const GG = 3 * ZG[XG + wG[uG]];
              iG *= iG, SG = iG * iG * (pG[GG] * KG + pG[GG + 1] * hG)
            }
            let CG = .5 - rG * rG - zG * zG;
            if (CG >= 0) {
              const GG = 3 * ZG[XG + dG + wG[uG + JG]];
              CG *= CG, kG = CG * CG * (pG[GG] * rG + pG[GG + 1] * zG)
            }
            let WG = .5 - EG * EG - oG * oG;
            if (WG >= 0) {
              const GG = 3 * ZG[XG + 1 + wG[uG + 1]];
              WG *= WG, UG = WG * WG * (pG[GG] * EG + pG[GG + 1] * oG)
            }
            return 70 * (SG + kG + UG)
          }
          noise3D(GG, bG, ZG) {
            const wG = this.permMod12,
              SG = this.perm;
            let LG, yG, YG, VG;
            const fG = (GG + bG + ZG) * kG,
              QG = Math.floor(GG + fG),
              KG = Math.floor(bG + fG),
              hG = Math.floor(ZG + fG),
              dG = (QG + KG + hG) * UG,
              JG = GG - (QG - dG),
              rG = bG - (KG - dG),
              zG = ZG - (hG - dG);
            let EG, oG, XG, uG, iG, CG;
            JG >= rG ? rG >= zG ? (EG = 1, oG = 0, XG = 0, uG = 1, iG = 1, CG = 0) : JG >= zG ? (EG = 1, oG = 0, XG = 0, uG = 1, iG = 0, CG = 1) : (EG = 0, oG = 0, XG = 1, uG = 1, iG = 0, CG = 1) : rG < zG ? (EG = 0, oG = 0, XG = 1, uG = 0, iG = 1, CG = 1) : JG < zG ? (EG = 0, oG = 1, XG = 0, uG = 0, iG = 1, CG = 1) : (EG = 0, oG = 1, XG = 0, uG = 1, iG = 1, CG = 0);
            const WG = JG - EG + UG,
              mG = rG - oG + UG,
              IG = zG - XG + UG,
              FG = JG - uG + 2 * UG,
              vG = rG - iG + 2 * UG,
              aG = zG - CG + 2 * UG,
              cG = JG - 1 + .5,
              lG = rG - 1 + .5,
              jG = zG - 1 + .5,
              PG = 255 & QG,
              MG = 255 & KG,
              AG = 255 & hG;
            let sG = .6 - JG * JG - rG * rG - zG * zG;
            if (sG < 0) LG = 0;
            else {
              const GG = 3 * wG[PG + SG[MG + SG[AG]]];
              sG *= sG, LG = sG * sG * (pG[GG] * JG + pG[GG + 1] * rG + pG[GG + 2] * zG)
            }
            let qG = .6 - WG * WG - mG * mG - IG * IG;
            if (qG < 0) yG = 0;
            else {
              const GG = 3 * wG[PG + EG + SG[MG + oG + SG[AG + XG]]];
              qG *= qG, yG = qG * qG * (pG[GG] * WG + pG[GG + 1] * mG + pG[GG + 2] * IG)
            }
            let nG = .6 - FG * FG - vG * vG - aG * aG;
            if (nG < 0) YG = 0;
            else {
              const GG = 3 * wG[PG + uG + SG[MG + iG + SG[AG + CG]]];
              nG *= nG, YG = nG * nG * (pG[GG] * FG + pG[GG + 1] * vG + pG[GG + 2] * aG)
            }
            let gG = .6 - cG * cG - lG * lG - jG * jG;
            if (gG < 0) VG = 0;
            else {
              const GG = 3 * wG[PG + 1 + SG[MG + 1 + SG[AG + 1]]];
              gG *= gG, VG = gG * gG * (pG[GG] * cG + pG[GG + 1] * lG + pG[GG + 2] * jG)
            }
            return 32 * (LG + yG + YG + VG)
          }
          noise4D(GG, bG, ZG, wG) {
            const SG = this.perm;
            let LG, yG, kG, UG, pG;
            const QG = (GG + bG + ZG + wG) * YG,
              KG = Math.floor(GG + QG),
              hG = Math.floor(bG + QG),
              dG = Math.floor(ZG + QG),
              JG = Math.floor(wG + QG),
              rG = (KG + hG + dG + JG) * VG,
              zG = GG - (KG - rG),
              EG = bG - (hG - rG),
              oG = ZG - (dG - rG),
              XG = wG - (JG - rG);
            let uG = 0,
              iG = 0,
              CG = 0,
              WG = 0;
            zG > EG ? uG++ : iG++, zG > oG ? uG++ : CG++, zG > XG ? uG++ : WG++, EG > oG ? iG++ : CG++, EG > XG ? iG++ : WG++, oG > XG ? CG++ : WG++;
            const mG = uG >= 3 ? 1 : 0,
              IG = iG >= 3 ? 1 : 0,
              FG = CG >= 3 ? 1 : 0,
              vG = WG >= 3 ? 1 : 0,
              aG = uG >= 2 ? 1 : 0,
              cG = iG >= 2 ? 1 : 0,
              lG = CG >= 2 ? 1 : 0,
              jG = WG >= 2 ? 1 : 0,
              PG = uG >= 1 ? 1 : 0,
              MG = iG >= 1 ? 1 : 0,
              AG = CG >= 1 ? 1 : 0,
              sG = WG >= 1 ? 1 : 0,
              qG = zG - mG + VG,
              nG = EG - IG + VG,
              gG = oG - FG + VG,
              eG = XG - vG + VG,
              RG = zG - aG + 2 * VG,
              TG = EG - cG + 2 * VG,
              HG = oG - lG + 2 * VG,
              tG = XG - jG + 2 * VG,
              DG = zG - PG + 3 * VG,
              NG = EG - MG + 3 * VG,
              OG = oG - AG + 3 * VG,
              xG = XG - sG + 3 * VG,
              BG = zG - 1 + 4 * VG,
              Gb = EG - 1 + 4 * VG,
              bb = oG - 1 + 4 * VG,
              Zb = XG - 1 + 4 * VG,
              wb = 255 & KG,
              Sb = 255 & hG,
              Lb = 255 & dG,
              yb = 255 & JG;
            let kb = .6 - zG * zG - EG * EG - oG * oG - XG * XG;
            if (kb < 0) LG = 0;
            else {
              const GG = SG[wb + SG[Sb + SG[Lb + SG[yb]]]] % 32 * 4;
              kb *= kb, LG = kb * kb * (fG[GG] * zG + fG[GG + 1] * EG + fG[GG + 2] * oG + fG[GG + 3] * XG)
            }
            let Ub = .6 - qG * qG - nG * nG - gG * gG - eG * eG;
            if (Ub < 0) yG = 0;
            else {
              const GG = SG[wb + mG + SG[Sb + IG + SG[Lb + FG + SG[yb + vG]]]] % 32 * 4;
              Ub *= Ub, yG = Ub * Ub * (fG[GG] * qG + fG[GG + 1] * nG + fG[GG + 2] * gG + fG[GG + 3] * eG)
            }
            let Yb = .6 - RG * RG - TG * TG - HG * HG - tG * tG;
            if (Yb < 0) kG = 0;
            else {
              const GG = SG[wb + aG + SG[Sb + cG + SG[Lb + lG + SG[yb + jG]]]] % 32 * 4;
              Yb *= Yb, kG = Yb * Yb * (fG[GG] * RG + fG[GG + 1] * TG + fG[GG + 2] * HG + fG[GG + 3] * tG)
            }
            let Vb = .6 - DG * DG - NG * NG - OG * OG - xG * xG;
            if (Vb < 0) UG = 0;
            else {
              const GG = SG[wb + PG + SG[Sb + MG + SG[Lb + AG + SG[yb + sG]]]] % 32 * 4;
              Vb *= Vb, UG = Vb * Vb * (fG[GG] * DG + fG[GG + 1] * NG + fG[GG + 2] * OG + fG[GG + 3] * xG)
            }
            let pb = .6 - BG * BG - Gb * Gb - bb * bb - Zb * Zb;
            if (pb < 0) pG = 0;
            else {
              const GG = SG[wb + 1 + SG[Sb + 1 + SG[Lb + 1 + SG[yb + 1]]]] % 32 * 4;
              pb *= pb, pG = pb * pb * (fG[GG] * BG + fG[GG + 1] * Gb + fG[GG + 2] * bb + fG[GG + 3] * Zb)
            }
            return 27 * (LG + yG + kG + UG + pG)
          }
        };
        var KG = ZG(40068);

        function hG(GG, bG, ZG) {
          return Math.abs(GG[0] - bG) + Math.abs(GG[1] - ZG)
        }

        function dG(GG, bG) {
          const ZG = GG[0] - bG[0],
            wG = GG[1] - bG[1];
          return ZG * ZG + wG * wG
        }

        function JG(GG, bG, ZG) {
          const wG = GG[0] - bG,
            SG = GG[1] - ZG;
          return wG * wG + SG * SG
        }

        function rG(GG, bG, ZG) {
          const wG = GG[0] - bG,
            SG = GG[1] - ZG;
          return Math.sqrt(wG * wG + SG * SG)
        }

        function zG(GG, bG, ZG) {
          const wG = dG(bG, ZG),
            SG = ((GG[0] - bG[0]) * (ZG[0] - bG[0]) + (GG[1] - bG[1]) * (ZG[1] - bG[1])) / wG;
          let LG, yG, kG;
          return SG < 0 ? (LG = bG[0], yG = bG[1], kG = 0) : SG > 1 ? (LG = ZG[0], yG = ZG[1], kG = 1) : (LG = bG[0] + SG * (ZG[0] - bG[0]), yG = bG[1] + SG * (ZG[1] - bG[1]), kG = SG), {
            ey: rG(GG, LG, yG),
            fracAlong: kG,
            lineSegmentLength: Math.sqrt(wG)
          }
        }

        function EG(GG, bG, ZG) {
          const wG = dG(bG, ZG),
            SG = ((GG[0] - bG[0]) * (ZG[0] - bG[0]) + (GG[1] - bG[1]) * (ZG[1] - bG[1])) / wG;
          return rG(GG, bG[0] + SG * (ZG[0] - bG[0]), bG[1] + SG * (ZG[1] - bG[1]))
        }

        function oG(GG) {
          if (Math.abs(GG[0]) < 1e-4) GG[0] = 0, GG[1] = 1;
          else {
            const bG = Math.sqrt(GG[0] * GG[0] + GG[1] * GG[1]);
            GG[0] = GG[0] / bG, GG[1] = GG[1] / bG
          }
        }

        function XG(GG) {
          let bG = 0;
          for (const {
              amplitude: ZG
            }
            of GG.customOctaves) bG += ZG;
          return bG
        }
        class uG {
          constructor(GG, bG) {
            this.customOctaves = void 0, this._simplexes = [], console.assert(void 0 !== bG, "Seed must be defined"), this.customOctaves = GG;
            for (let ZG = 0; ZG < GG.length; ZG++) this._simplexes.push(new QG(`${bG}${ZG}`))
          }
          maxMagnitude() {
            let GG = 1;
            for (const {
                amplitude: bG
              }
              of this.customOctaves) GG += Math.abs(bG);
            return GG
          }
          getOctaves(GG, bG) {
            let ZG = 0;
            for (let wG = 0; wG < this.customOctaves.length; wG++) {
              const {
                amplitude: SG,
                frequency: LG
              } = this.customOctaves[wG];
              ZG += this._simplexes[wG].noise2D(GG * LG, bG * LG) * SG
            }
            return ZG
          }
        }
        class iG {
          constructor(GG, bG, ZG) {
            this.customOctaves = void 0, this._simplexes = [], this.remainingAmplitudes = void 0, this.threshold = void 0, console.assert(void 0 !== ZG, "Seed must be defined"), this.customOctaves = GG, this.threshold = bG;
            for (let SG = 0; SG < GG.length; SG++) this._simplexes.push(new QG(`${ZG}${SG}`));
            this.remainingAmplitudes = new Array(GG.length);
            let wG = 0;
            for (let SG = this.remainingAmplitudes.length - 1; SG >= 0; SG--) wG += this.customOctaves[SG].amplitude, this.remainingAmplitudes[SG] = wG
          }
          getOctaves(GG, bG) {
            let ZG = 0;
            for (let wG = 0; wG < this.customOctaves.length; wG++) {
              if (ZG - this.remainingAmplitudes[wG] > this.threshold.high || ZG + this.remainingAmplitudes[wG] < this.threshold.low) return KG.e;
              const {
                amplitude: SG,
                frequency: LG
              } = this.customOctaves[wG];
              ZG += this._simplexes[wG].noise2D(GG * LG, bG * LG) * SG
            }
            return ZG
          }
        }
        class CG {
          constructor(GG, bG) {
            this.chunkBottomLeft = bG, this.array = void 0;
            const ZG = GG;
            this.array = SG()(new Int16Array(ZG * ZG), [ZG, ZG])
          }
          set(GG, bG, ZG) {
            this.array.set(GG - this.chunkBottomLeft[0], bG - this.chunkBottomLeft[1], ZG)
          }
          get(GG, bG) {
            return this.array.get(GG - this.chunkBottomLeft[0], bG - this.chunkBottomLeft[1])
          }
        }
        class WG {
          constructor(GG, bG, ZG, wG) {
            this.chunkBottomLeft = bG, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + GG - 1, this.chunkBottomLeft[1] + GG - 1], this.array = SG()(new Int16Array(GG * GG * ZG * wG), [GG, GG, ZG, wG])
          }
          isInBounds(GG, bG) {
            return GG >= this.chunkBottomLeft[0] && GG <= this.chunkTopRight[0] && bG >= this.chunkBottomLeft[1] && bG <= this.chunkTopRight[1]
          }
          set(GG, bG, ZG, wG, SG) {
            this.array.set(GG - this.chunkBottomLeft[0], bG - this.chunkBottomLeft[1], ZG, wG, SG)
          }
          get(GG, bG, ZG, wG) {
            return this.array.get(GG - this.chunkBottomLeft[0], bG - this.chunkBottomLeft[1], ZG, wG)
          }
          fill(GG) {
            for (let bG = 0; bG < this.array.shape[0]; bG++)
              for (let ZG = 0; ZG < this.array.shape[1]; ZG++)
                for (let wG = 0; wG < this.array.shape[2]; wG++)
                  for (let SG = 0; SG < this.array.shape[3]; SG++) this.array.set(bG, ZG, wG, SG, GG)
          }
        }
        class mG {
          constructor(GG, bG, ZG) {
            this.chunkBottomLeft = bG, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + GG - 1, this.chunkBottomLeft[1] + GG - 1], this.array = SG()(new Int16Array(GG * GG * ZG), [GG, GG, ZG])
          }
          isInBounds(GG, bG) {
            return GG >= this.chunkBottomLeft[0] && GG <= this.chunkTopRight[0] && bG >= this.chunkBottomLeft[1] && bG <= this.chunkTopRight[1]
          }
          set(GG, bG, ZG, wG) {
            this.array.set(GG - this.chunkBottomLeft[0], bG - this.chunkBottomLeft[1], ZG, wG)
          }
          get(GG, bG, ZG) {
            return this.array.get(GG - this.chunkBottomLeft[0], bG - this.chunkBottomLeft[1], ZG)
          }
        }
        class IG {
          constructor(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.chunkBottomLeft = bG, this.needOutsideChunkDist = ZG, this.chunkTopRight = void 0, this.array = void 0;
            const wG = GG + 2 * ZG,
              LG = new Array(wG * wG);
            this.chunkTopRight = [this.chunkBottomLeft[0] + GG - 1, this.chunkBottomLeft[1] + GG - 1], this.array = SG()(LG, [wG, wG])
          }
          isInBounds(GG, bG) {
            return GG >= this.chunkBottomLeft[0] && GG <= this.chunkTopRight[0] && bG >= this.chunkBottomLeft[1] && bG <= this.chunkTopRight[1]
          }
          set(GG, bG, ZG) {
            this.array.set(GG - this.chunkBottomLeft[0] + this.needOutsideChunkDist, bG - this.chunkBottomLeft[1] + this.needOutsideChunkDist, ZG)
          }
          get(GG, bG) {
            return this.array.get(GG - this.chunkBottomLeft[0] + this.needOutsideChunkDist, bG - this.chunkBottomLeft[1] + this.needOutsideChunkDist)
          }
        }
        class FG {
          constructor(GG, bG) {
            this.innerContiguousArray = GG, this.generator = bG, this.outerSparseArray = []
          }
          static create(GG, bG, ZG) {
            const wG = new IG(GG, bG);
            for (let SG = bG[0]; SG < bG[0] + GG; SG++)
              for (let LG = bG[1]; LG < bG[1] + GG; LG++) {
                const GG = ZG.generate(SG, LG);
                wG.set(SG, LG, GG)
              }
            return new FG(wG, ZG)
          }
          getOrGenerate(GG, bG) {
            var ZG;
            if (this.innerContiguousArray.isInBounds(GG, bG)) return this.innerContiguousArray.get(GG, bG);
            let wG = null === (ZG = this.outerSparseArray[GG]) || void 0 === ZG ? void 0 : ZG[bG];
            return void 0 !== wG || (wG = this.generator.generate(GG, bG), this.outerSparseArray[GG] || (this.outerSparseArray[GG] = []), this.outerSparseArray[GG][bG] = wG), wG
          }
        }
        class vG {
          constructor(GG) {
            this.generator = GG, this.cache = new Map
          }
          getOrGenerate(GG, bG) {
            let ZG = this.cache.get(GG);
            if (void 0 !== ZG) {
              const GG = ZG.get(bG);
              if (void 0 !== GG) return GG
            } else ZG = new Map, this.cache.set(GG, ZG);
            const wG = this.generator.generate(GG, bG);
            return ZG.set(bG, wG), wG
          }
        }
        class aG {
          constructor() {
            this.array = []
          }
          get(GG, bG, ZG) {
            var wG, SG;
            return null === (wG = this.array[GG]) || void 0 === wG || null === (SG = wG[bG]) || void 0 === SG ? void 0 : SG[ZG]
          }
          set(GG, bG, ZG, wG) {
            this.array[GG] || (this.array[GG] = []), this.array[GG][bG] || (this.array[GG][bG] = []), this.array[GG][bG][ZG] = wG
          }
        }
        class cG {
          constructor(GG, bG) {
            this.outerSparseArray = GG, this.innerContiguousArray = bG
          }
          get(GG, bG, ZG) {
            if (this.innerContiguousArray.isInBounds(GG, bG)) return this.innerContiguousArray.get(GG, bG, ZG);
            const wG = this.outerSparseArray.get(GG, bG, ZG);
            if (void 0 === wG) throw new Error(`Number not found for x=${GG}, z=${bG}, thirdIndex=${ZG}`);
            return wG
          }
        }
        const lG = new class {
          get(GG, bG, ZG) {}
        };
        class jG {
          constructor(GG, bG) {
            this.innerContiguousArray = GG, this.generator = bG, this.outerSparseArray = new aG
          }
          static create(GG, bG, ZG, wG) {
            const SG = new mG(GG, bG, ZG);
            for (let LG = bG[0]; LG < bG[0] + GG; LG++)
              for (let ZG = bG[1]; ZG < bG[1] + GG; ZG++) wG.generateAndSet(LG, ZG, SG);
            return new jG(SG, wG)
          }
          getOrGenerate(GG, bG, ZG) {
            if (this.innerContiguousArray.isInBounds(GG, bG)) return this.innerContiguousArray.get(GG, bG, ZG);
            {
              const wG = this.outerSparseArray.get(GG, bG, ZG);
              if (void 0 !== wG) return wG
            }
            return this.generator.generateAndSet(GG, bG, this.outerSparseArray), this.outerSparseArray.get(GG, bG, ZG)
          }
          viewJustInnerChunk() {
            return new cG(lG, this.innerContiguousArray)
          }
        }
        class PG {
          constructor() {
            this.array = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
          }
          get(GG, bG, ZG, wG) {
            var SG, LG, yG;
            return null === (SG = this.array[GG]) || void 0 === SG || null === (LG = SG[bG]) || void 0 === LG || null === (yG = LG[ZG]) || void 0 === yG ? void 0 : yG[wG]
          }
          set(GG, bG, ZG, wG, SG) {
            let LG = this.lastColumn;
            GG === this.lastX && bG === this.lastZ || (this.array[GG] || (this.array[GG] = []), LG = this.array[GG][bG] ??= [], this.lastX = GG, this.lastZ = bG, this.lastColumn = LG), LG[ZG] || (LG[ZG] = []), LG[ZG][wG] = SG
          }
        }
        class MG {
          constructor(GG, bG) {
            this.outerSparseArray = GG, this.innerContiguousArray = bG
          }
          get(GG, bG, ZG, wG) {
            if (this.innerContiguousArray.isInBounds(GG, bG)) return this.innerContiguousArray.get(GG, bG, ZG, wG);
            const SG = this.outerSparseArray.get(GG, bG, ZG, wG);
            if (void 0 === SG) throw new Error(`Number not found for x=${GG}, z=${bG}, thirdIndex=${ZG}, fourthIndex=${wG}`);
            return SG
          }
        }
        const AG = new class {
          get(GG, bG, ZG, wG) {}
        };
        class sG {
          constructor(GG, bG) {
            this.innerContiguousArray = GG, this.generator = bG, this.outerSparseArray = new PG
          }
          static create(GG, bG, ZG, wG, SG) {
            const LG = new WG(GG, bG, ZG, wG);
            for (let yG = bG[0]; yG < bG[0] + GG; yG++)
              for (let ZG = bG[1]; ZG < bG[1] + GG; ZG++) SG.generateAndSet(yG, ZG, LG);
            return new sG(LG, SG)
          }
          getOrGenerate(GG, bG, ZG, wG) {
            if (this.innerContiguousArray.isInBounds(GG, bG)) return this.innerContiguousArray.get(GG, bG, ZG, wG);
            {
              const SG = this.outerSparseArray.get(GG, bG, ZG, wG);
              if (void 0 !== SG) return SG
            }
            return this.generator.generateAndSet(GG, bG, this.outerSparseArray), this.outerSparseArray.get(GG, bG, ZG, wG)
          }
          viewJustInnerChunk() {
            return new MG(AG, this.innerContiguousArray)
          }
        }
      },
      40068: (GG, bG, ZG) => {
        ZG.d(bG, {
          e: () => UG,
          g: () => yG,
          i: () => YG,
          j: () => LG,
          n: () => kG,
          p: () => SG,
          s: () => wG
        });
        const wG = {
            seaLevel: 0,
            bedrockLevel: -100
          },
          SG = -1e4,
          LG = 1e4,
          yG = 15,
          kG = -1e4,
          UG = -1e4,
          YG = 2
      },
      40077: (GG, bG, ZG) => {
        ZG.d(bG, {
          b: () => SG,
          d: () => wG,
          e: () => UG,
          h: () => kG,
          i: () => yG,
          l: () => LG
        });
        let wG = function(GG) {
            return GG[GG.GroundHeight = 0] = "GroundHeight", GG[GG.WaterHeight = 1] = "WaterHeight", GG[GG.CavesAllowedBelowY = 2] = "CavesAllowedBelowY", GG[GG.IsLake = 3] = "IsLake", GG[GG.NumFields = 4] = "NumFields", GG
          }({}),
          SG = function(GG) {
            return GG[GG.FloorY = 0] = "FloorY", GG[GG.CeilingY = 1] = "CeilingY", GG[GG.NumFields = 2] = "NumFields", GG
          }({});
        const LG = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem"];
        let yG = function(GG) {
            return GG[GG.SURFACE = 0] = "SURFACE", GG[GG.UNDERGROUND = 1] = "UNDERGROUND", GG
          }({}),
          kG = function(GG) {
            return GG[GG.HIGH = 0] = "HIGH", GG[GG.MEDIUM = 1] = "MEDIUM", GG[GG.VERY_HIGH = 2] = "VERY_HIGH", GG
          }({}),
          UG = function(GG) {
            return GG[GG.DistanceToNearestFixedPrefab = 0] = "DistanceToNearestFixedPrefab", GG[GG.HeightOfNearestFixedPrefab = 1] = "HeightOfNearestFixedPrefab", GG[GG.NumFields = 2] = "NumFields", GG
          }({})
      },
      4265: (GG, bG, ZG) => {
        ZG.d(bG, {
          b: () => UG,
          e: () => LG,
          f: () => wG,
          g: () => kG,
          j: () => yG,
          l: () => SG
        });
        class wG {
          constructor(GG) {
            this.a = void 0, this.reseed(GG)
          }
          reseed(GG) {
            let bG = 2166136261;
            for (let ZG = 0; ZG < GG.length; ZG++) bG = Math.imul(bG ^ GG.charCodeAt(ZG), 16777619);
            this.a = bG
          }
          next() {
            let GG = this.a += 1831565813;
            return GG = Math.imul(GG ^ GG >>> 15, 1 | GG), GG ^= GG + Math.imul(GG ^ GG >>> 7, 61 | GG), ((GG ^ GG >>> 14) >>> 0) / 4294967296
          }
        }

        function SG(GG, bG) {
          for (let ZG = 0; ZG < GG.length; ZG++) {
            const wG = ZG + Math.floor(bG.next() * (GG.length - ZG));
            [GG[ZG], GG[wG]] = [GG[wG], GG[ZG]]
          }
          return GG
        }
        class LG {
          constructor(GG) {
            if (this.distribution = void 0, GG.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(GG)}`);
            const bG = new Set;
            let ZG = 0;
            for (const SG of GG) {
              const wG = SG.value;
              if (bG.has(wG)) throw new Error(`Values must be unique: ${JSON.stringify(GG)}`);
              bG.add(wG);
              const LG = SG.weight;
              if (LG <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(GG)}`);
              ZG += LG
            }
            let wG = 0;
            this.distribution = GG.map((GG => {
              let {
                weight: bG,
                value: SG
              } = GG;
              return wG += bG / ZG, {
                cumulativeProbability: wG,
                value: SG
              }
            }))
          }
          sample(GG) {
            const bG = GG.next();
            for (const ZG of this.distribution)
              if (bG < ZG.cumulativeProbability) return ZG.value;
            return this.distribution[this.distribution.length - 1].value
          }
        }
        class yG {
          constructor(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.offset = void 0, this.multiplier = void 0, GG > bG) throw new Error(`Min must be less than or equal to Max, but Min=${GG} and Max=${bG}`);
            ZG ? (this.multiplier = GG - bG, this.offset = bG) : (this.multiplier = bG - GG, this.offset = GG)
          }
          sample(GG) {
            return GG.next() * this.multiplier + this.offset
          }
        }
        class kG {
          constructor(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new yG(GG, bG, ZG), !Number.isInteger(GG) || !Number.isInteger(bG)) throw new Error(`Min and Max must be integers, but Min=${GG} and Max=${bG}`)
          }
          sample(GG) {
            const bG = this.uniformRealDistribution.sample(GG);
            return Math.floor(bG)
          }
        }
        class UG {
          constructor(GG) {
            this.probability = GG
          }
          sample(GG) {
            return GG.next() < this.probability
          }
        }
      },
      604: (GG, bG, ZG) => {
        ZG.d(bG, {
          D: () => YG,
          H: () => QG,
          I: () => KG,
          L: () => UG,
          U: () => pG,
          e: () => kG,
          l: () => yG,
          o: () => SG,
          w: () => LG,
          z: () => fG
        });
        var wG = ZG(612);
        const SG = 36;
        let LG = function(GG) {
            return GG[GG.Maple = 0] = "Maple", GG[GG.Pine = 1] = "Pine", GG[GG.Plum = 2] = "Plum", GG[GG.Cedar = 4] = "Cedar", GG[GG.Aspen = 5] = "Aspen", GG[GG.Jungle = 6] = "Jungle", GG[GG.Palm = 7] = "Palm", GG[GG.AutumnMaple = 8] = "AutumnMaple", GG[GG.Pear = 9] = "Pear", GG[GG.Cherry = 10] = "Cherry", GG[GG.Spectral = 11] = "Spectral", GG[GG.Mango = 12] = "Mango", GG[GG.AutumnAspen = 13] = "AutumnAspen", GG[GG.Dead = 14] = "Dead", GG[GG.FallenLog = 15] = "FallenLog", GG
          }({}),
          yG = function(GG) {
            return GG[GG.COMMON = 0] = "COMMON", GG[GG.UNCOMMON = 1] = "UNCOMMON", GG[GG.RARE = 2] = "RARE", GG[GG.EPIC = 3] = "EPIC", GG[GG.LEGENDARY = 4] = "LEGENDARY", GG
          }({}),
          kG = function(GG) {
            return GG[GG.PLAINS = 0] = "PLAINS", GG[GG.AUTUMN = 1] = "AUTUMN", GG[GG.OASIS = 2] = "OASIS", GG
          }({});

        function UG(GG) {
          return void 0 === GG || null === GG
        }
        const YG = 32,
          VG = 0 | Math.log2(YG);

        function pG(GG) {
          return GG >> VG
        }

        function fG(GG) {
          return GG << VG
        }

        function QG(GG) {
          return JSON.stringify(GG)
        }
        QG(new Array(SG).fill(null));
        wG.e, Number(atob("NQ==")), Number(atob("MTM="));

        function KG(GG, bG) {
          if ("Air" === GG) return 0;
          const ZG = bG[GG];
          return null === ZG || void 0 === ZG ? void 0 : ZG.id
        }
      },
      612: (GG, bG, ZG) => {
        ZG.d(bG, {
          e: () => wG
        });
        const wG = 872
      },
      218: (GG, bG, ZG) => {
        var wG = {
          "./localConfigValues.ts.clientRelease": 227
        };

        function SG(GG) {
          var bG = LG(GG);
          return ZG(bG)
        }

        function LG(GG) {
          if (!ZG.o(wG, GG)) {
            var bG = new Error("Cannot find module '" + GG + "'");
            throw bG.code = "MODULE_NOT_FOUND", bG
          }
          return wG[GG]
        }
        SG.keys = function() {
          return Object.keys(wG)
        }, SG.resolve = LG, GG.exports = SG, SG.id = 218
      },
      227: (GG, bG, ZG) => {
        GG.exports = ZG.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
      }
    },
    bG = {};

  function ZG(wG) {
    var SG = bG[wG];
    if (void 0 !== SG) return SG.exports;
    var LG = bG[wG] = {
      exports: {}
    };
    return GG[wG](LG, LG.exports, ZG), LG.exports
  }
  ZG.m = GG, ZG.n = GG => {
    var bG = GG && GG.__esModule ? () => GG.default : () => GG;
    return ZG.d(bG, {
      a: bG
    }), bG
  }, ZG.d = (GG, bG) => {
    for (var wG in bG) ZG.o(bG, wG) && !ZG.o(GG, wG) && Object.defineProperty(GG, wG, {
      enumerable: !0,
      get: bG[wG]
    })
  }, ZG.f = {}, ZG.e = GG => Promise.all(Object.keys(ZG.f).reduce(((bG, wG) => (ZG.f[wG](GG, bG), bG)), [])), ZG.u = GG => "static/js/wp3j0a." + (70 === GG ? "worldgenTables" : GG) + "." + {
    70: "047ac94f",
    73: "bc994dcf",
    74: "4ed75f3f",
    75: "a5d77140",
    76: "bea1aacd"
  } [GG] + ".chunk.js", ZG.miniCssF = GG => {}, ZG.o = (GG, bG) => Object.prototype.hasOwnProperty.call(GG, bG), ZG.r = GG => {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(GG, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(GG, "__esModule", {
      value: !0
    })
  }, ZG.j = 71, ZG.p = "/", (() => {
    var GG = ZG.u,
      bG = ZG.e,
      wG = {},
      SG = {};
    ZG.u = function(bG) {
      return GG(bG) + (wG.hasOwnProperty(bG) ? "?" + wG[bG] : "")
    }, ZG.e = function(LG) {
      return bG(LG).catch((function(bG) {
        var yG = SG.hasOwnProperty(LG) ? SG[LG] : 4;
        if (yG < 1) {
          var kG = GG(LG);
          if (bG.message = "Loading chunk " + LG + " failed after 4 retries.\n(" + kG + ")", bG.request = kG, wG[LG] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete SG[LG]
            }), 0), "CSS_CHUNK_LOAD_FAILED" === bG.code) {
            var UG = ZG.miniCssF(LG);
            bG.message = bG.message.replace("Loading chunk", "Loading CSS chunk").replace(kG, UG), bG.request = UG
          }
          throw bG
        }
        return new Promise((function(GG) {
          var bG = 4 - yG + 1;
          setTimeout((function() {
            var bG = "cache-bust=" + Date.now();
            wG[LG] = bG, SG[LG] = yG - 1, GG(ZG.e(LG))
          }), function(GG) {
            return 500 * Math.pow(2, GG)
          }(bG))
        }))
      }))
    }
  })(), (() => {
    var GG = {
        71: 0
      },
      bG = bG => {
        var wG, SG, LG = bG.ids,
          yG = bG.modules,
          kG = bG.runtime,
          UG = 0;
        for (wG in yG) ZG.o(yG, wG) && (ZG.m[wG] = yG[wG]);
        for (kG && kG(ZG); UG < LG.length; UG++) SG = LG[UG], ZG.o(GG, SG) && GG[SG] && GG[SG][0](), GG[LG[UG]] = 0
      };
    ZG.f.j = (wG, SG) => {
      var LG = ZG.o(GG, wG) ? GG[wG] : void 0;
      if (0 !== LG)
        if (LG) SG.push(LG[1]);
        else {
          var yG = import("../../" + ZG.u(wG)).then(bG, (bG => {
            throw 0 !== GG[wG] && (GG[wG] = void 0), bG
          }));
          yG = Promise.race([yG, new Promise((bG => LG = GG[wG] = [bG]))]);
          SG.push(LG[1] = yG)
        }
    }
  })();
  var wG = {};

  function SG(GG, bG, ZG) {
    bG in GG || Object.defineProperty(GG, bG, {
      value: ZG,
      writable: !0,
      configurable: !0
    })
  }

  function LG(GG) {
    const bG = Math.trunc(GG) || 0,
      ZG = bG < 0 ? this.length + bG : bG;
    return ZG < 0 || ZG >= this.length ? void 0 : this[ZG]
  }

  function yG(GG, bG) {
    for (let ZG = this.length - 1; ZG >= 0; ZG--)
      if (GG.call(bG, this[ZG], ZG, this)) return ZG;
    return -1
  }

  function kG(GG, bG) {
    const ZG = yG.call(this, GG, bG);
    return -1 === ZG ? void 0 : this[ZG]
  }
  ZG.r(wG), ZG.d(wG, {
    Wd: () => AG,
    Id: () => sG,
    BV: () => qG,
    default: () => ob,
    initSync: () => Eb,
    Gp: () => nG,
    bp: () => gG,
    Zp: () => eG,
    wp: () => RG,
    Sp: () => TG,
    Lp: () => HG,
    yp: () => tG,
    kp: () => DG,
    Qp: () => NG,
    hp: () => OG,
    dp: () => xG
  }), SG(Object, "hasOwn", ((GG, bG) => Object.prototype.hasOwnProperty.call(GG, bG)));
  const UG = Object.getPrototypeOf(Uint8Array.prototype);
  for (const fZ of [Array.prototype, UG]) SG(fZ, "at", LG), SG(fZ, "findLast", kG), SG(fZ, "findLastIndex", yG);
  SG(String.prototype, "at", LG), SG(String.prototype, "toWellFormed", (function() {
    return String(this).replace(/[\uD800-\uDFFF]/gu, "\ufffd")
  }));
  var YG = ZG(2837),
    VG = ZG.n(YG);
  class pG extends Error {
    retryable;
    constructor(GG, bG, ZG) {
      super(GG, ZG), this.retryable = bG
    }
  }
  class fG extends pG {}
  class QG extends Error {}
  globalThis.crypto, globalThis.isSecureContext, Reflect.apply, Object.defineProperty, "undefined" === typeof Response || Response.prototype.arrayBuffer, Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get, "undefined" === typeof Response || Response.prototype.clone, "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "body"), "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "type"), "undefined" === typeof ReadableStream || ReadableStream.prototype.getReader, "undefined" === typeof ReadableStreamDefaultReader || ReadableStreamDefaultReader.prototype.read, Uint8Array.prototype.set, "undefined" === typeof fetch || fetch, "undefined" === typeof WebAssembly || WebAssembly, Array.from({
    length: 256
  }, ((GG, bG) => bG.toString(16).padStart(2, "0"))), new Set;
  let KG = "unloaded",
    hG = null,
    dG = null,
    JG = null,
    rG = null;
  const zG = new Set;
  new Set;
  let EG = null,
    oG = null,
    XG = null,
    uG = !1,
    iG = 0;

  function CG() {
    return "ready" === KG
  }

  function WG() {
    return KG
  }

  function mG() {
    return null === hG ? "not failed" : `${hG}: ${(GG=dG)instanceof Error?`${GG.name}: ${GG.message}`:String(GG)}`;
    var GG
  }

  function IG() {
    if (!CG()) throw new Error(`Bloxd wasm is not ready (${WG()}): check isBloxdWasmReady() first`);
    return EG
  }

  function FG() {
    if (!rG) throw new Error("Bloxd wasm has not been instantiated");
    return rG
  }

  function vG(GG, bG) {
    let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (aG()) {
      let SG;
      try {
        SG = GG()
      } catch (wG) {
        return lG(wG, function(GG) {
          return GG instanceof QG ? "integrity" : GG instanceof fG ? "timeout" : GG instanceof pG ? "fetch" : "compile"
        }(wG)), !1
      }
      try {
        cG(ZG, bG, SG, bG.initSync({
          module: SG
        }))
      } catch (wG) {
        lG(wG, "instantiate")
      }
    }
    return CG()
  }

  function aG() {
    return "unloaded" === KG && (KG = "loading", !0)
  }

  function cG(GG, bG, ZG, wG) {
    oG = GG, EG = bG, JG = ZG, rG = wG.memory;
    const {
      Qp: SG
    } = bG;
    iG = "function" === typeof SG ? SG() : 0, KG = "ready",
      function() {
        if (uG) return;
        uG = !0;
        const GG = console.error;
        console.error = function() {
          for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
          const [SG] = ZG;
          "string" === typeof SG && SG.startsWith("panicked at") && (XG = SG, function() {
            if (!rG || 0 === iG) return 0;
            const GG = new Uint32Array(rG.buffer, iG, 1),
              bG = GG[0] ?? 0;
            GG[0] = 0
          }()), GG.apply(console, ZG)
        }
      }()
  }

  function lG(GG, bG) {
    KG = "failed", hG = bG, dG = GG, console.error(`Bloxd wasm failed (${bG}):`, GG);
    const ZG = [...zG];
    zG.clear();
    for (const wG of ZG) jG(wG)
  }

  function jG(GG) {
    try {
      GG()
    } catch (bG) {
      console.error("A Bloxd wasm failure listener threw:", bG)
    }
  }
  const PG = ["none", "idle", "now"];

  function MG() {
    const GG = () => IG();
    return {
      memoryBytes: () => FG().buffer.byteLength,
      reserveUpFront: bG => GG().wp(bG),
      reserveAhead: bG => GG().Zp(bG),
      setCeiling: bG => {
        GG().Sp(bG)
      },
      lowWater: () => PG[GG().bp()] ?? "none",
      stats: () => function(GG) {
        const bG = new Uint32Array(FG().buffer, GG, 17),
          ZG = GG => bG[GG] ?? 0,
          wG = GG => ({
            upFront: ZG(GG),
            ahead: ZG(GG + 1),
            onDemandInFrame: ZG(GG + 2),
            onDemand: ZG(GG + 3)
          });
        return {
          memoryBytes: ZG(0),
          initialBytes: ZG(1),
          liveBytes: ZG(2),
          peakLiveBytes: ZG(3),
          headroomBytes: ZG(4),
          unusedBytes: ZG(5),
          ceilingBytes: ZG(6),
          reservesRefused: ZG(7),
          grows: wG(8),
          grownBytes: wG(12),
          allocationsRefused: ZG(16)
        }
      }(GG().Lp()),
      takeBallast: () => GG().yp(),
      takePressure: () => GG().kp()
    }
  }
  class AG {
    __destroy_into_raw() {
      const GG = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Gb.unregister(this), GG
    }
    free() {
      const GG = this.__destroy_into_raw();
      Jb.K6EA(GG, 0)
    }
    encode(GG) {
      const bG = Yb(GG, Jb.b1UZ, Jb.kJDL),
        ZG = rb;
      Jb.LaO2(this.__wbg_ptr, bG, ZG)
    }
    vd() {
      return Jb.cr61(this.__wbg_ptr) >>> 0
    }
    constructor() {
      const GG = Jb.bqyf();
      return this.__wbg_ptr = GG, Gb.register(this, this.__wbg_ptr, this), this
    }
    ld() {
      return Jb.vidk(this.__wbg_ptr) >>> 0
    }
    jd() {
      return Jb.Zr4X(this.__wbg_ptr) >>> 0
    }
    Fd() {
      return Jb.i64p(this.__wbg_ptr) >>> 0
    }
  }
  Symbol.dispose && (AG.prototype[Symbol.dispose] = AG.prototype.free);
  class sG {
    __destroy_into_raw() {
      const GG = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bb.unregister(this), GG
    }
    free() {
      const GG = this.__destroy_into_raw();
      Jb.qSBk(GG, 0)
    }
    init(GG) {
      return Jb.IRTB(this.__wbg_ptr, GG) >>> 0
    }
    lp(GG) {
      return Jb.HV30(this.__wbg_ptr, GG) >>> 0
    }
    constructor(GG) {
      const bG = Jb.WCY4(void 0 === (ZG = GG) || null === ZG ? Number.MAX_SAFE_INTEGER : GG >>> 0);
      var ZG;
      return this.__wbg_ptr = bG, bb.register(this, this.__wbg_ptr, this), this
    }
    sp() {
      return Jb.KlwW(this.__wbg_ptr) >>> 0
    }
    Pp() {
      return Jb.hbaU(this.__wbg_ptr) >>> 0
    }
    run(GG) {
      return Jb.Ktq3(this.__wbg_ptr, GG) >>> 0
    }
  }

  function qG(GG, bG) {
    const ZG = Yb(GG, Jb.b1UZ, Jb.kJDL),
      wG = rb,
      SG = Jb.MWWd(ZG, wG, bG);
    if (SG[1]) throw Vb(SG[0])
  }

  function nG() {
    Jb.oAor()
  }

  function gG() {
    return Jb.rE8m() >>> 0
  }

  function eG(GG) {
    return 0 !== Jb.vmsc(GG)
  }

  function RG(GG) {
    return 0 !== Jb.OymI(GG)
  }

  function TG(GG) {
    Jb.LJtQ(GG)
  }

  function HG() {
    return Jb.ppT8() >>> 0
  }

  function tG() {
    return Jb.JC64() >>> 0
  }

  function DG() {
    return 0 !== Jb.Mva2()
  }

  function NG() {
    return Jb.aRot() >>> 0
  }

  function OG() {
    let GG, bG;
    try {
      const ZG = Jb.XK29();
      return GG = ZG[0], bG = ZG[1], wb(ZG[0], ZG[1])
    } finally {
      Jb.EFF4(GG, bG, 1)
    }
  }

  function xG(GG) {
    Jb.Ard9(Zb(GG))
  }

  function BG() {
    return {
      __proto__: null,
      um8z: {
        __proto__: null,
        Ifpu: function(GG, bG) {
          return Zb(Error(wb(GG, bG)))
        },
        nk8M: function(GG, bG) {
          throw new Error(wb(GG, bG))
        },
        euDR: function(GG) {
          yb(GG).call()
        },
        LbUK: function(GG, bG) {
          console.error(wb(GG, bG))
        },
        OADG: function(GG) {
          Vb(GG)
        }
      }
    }
  }
  Symbol.dispose && (sG.prototype[Symbol.dispose] = sG.prototype.free);
  const Gb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((GG => Jb.K6EA(GG, 1))),
    bb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((GG => Jb.qSBk(GG, 1)));

  function Zb(GG) {
    Ub === kb.length && kb.push(kb.length + 1);
    const bG = Ub;
    return Ub = kb[bG], kb[bG] = GG, bG
  }

  function wb(GG, bG) {
    return function(GG, bG) {
      Qb += bG, Qb >= fb && (pb = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }), pb.decode(), Qb = bG);
      return pb.decode(Lb().subarray(GG, GG + bG))
    }(GG >>> 0, bG)
  }
  let Sb = null;

  function Lb() {
    return null !== Sb && 0 !== Sb.byteLength || (Sb = new Uint8Array(Jb.memory.buffer)), Sb
  }

  function yb(GG) {
    return kb[GG]
  }
  let kb = new Array(1024).fill(void 0);
  kb.push(void 0, null, !0, !1);
  let Ub = kb.length;

  function Yb(GG, bG, ZG) {
    if (void 0 === ZG) {
      const ZG = Kb.encode(GG),
        wG = bG(ZG.length, 1) >>> 0;
      return Lb().subarray(wG, wG + ZG.length).set(ZG), rb = ZG.length, wG
    }
    let wG = GG.length,
      SG = bG(wG, 1) >>> 0;
    const LG = Lb();
    let yG = 0;
    for (; yG < wG; yG++) {
      const bG = GG.charCodeAt(yG);
      if (bG > 127) break;
      LG[SG + yG] = bG
    }
    if (yG !== wG) {
      0 !== yG && (GG = GG.slice(yG)), SG = ZG(SG, wG, wG = yG + 3 * GG.length, 1) >>> 0;
      const bG = Lb().subarray(SG + yG, SG + wG);
      yG += Kb.encodeInto(GG, bG).written, SG = ZG(SG, wG, yG, 1) >>> 0
    }
    return rb = yG, SG
  }

  function Vb(GG) {
    const bG = yb(GG);
    return function(GG) {
      GG < 1028 || (kb[GG] = Ub, Ub = GG)
    }(GG), bG
  }
  let pb = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  });
  pb.decode();
  const fb = 2146435072;
  let Qb = 0;
  const Kb = new TextEncoder;
  "encodeInto" in Kb || (Kb.encodeInto = function(GG, bG) {
    const ZG = Kb.encode(GG);
    return bG.set(ZG), {
      read: GG.length,
      written: ZG.length
    }
  });
  let hb, db, Jb, rb = 0;

  function zb(GG, bG) {
    return db = GG, Jb = GG.exports, hb = bG, Sb = null, Jb.P1GV(), Jb
  }

  function Eb(GG) {
    if (void 0 !== Jb) return Jb;
    void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
      module: GG
    } = GG) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const bG = BG();
    GG instanceof WebAssembly.Module || (GG = new WebAssembly.Module(GG));
    return zb(new WebAssembly.Instance(GG, bG), GG)
  }
  async function ob(GG) {
    if (void 0 !== Jb) return Jb;
    void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
      module_or_path: GG
    } = GG) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
    const bG = BG();
    ("string" === typeof GG || "function" === typeof Request && GG instanceof Request || "function" === typeof URL && GG instanceof URL) && (GG = fetch(GG));
    const {
      instance: ZG,
      module: wG
    } = await async function(GG, bG) {
      if ("function" === typeof Response && GG instanceof Response) {
        if (!GG.ok) throw new Error(`failed to fetch Wasm: ${GG.status} ${GG.statusText} fetching '${GG.url}'`);
        if ("function" === typeof WebAssembly.instantiateStreaming) try {
          return await WebAssembly.instantiateStreaming(GG, bG)
        } catch (ZG) {
          if (! function(GG) {
              switch (GG) {
                case "basic":
                case "cors":
                case "default":
                  return !0
              }
              return !1
            }(GG.type) || "application/wasm" === GG.headers.get("Content-Type")) throw ZG;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZG)
        }
        const wG = await GG.arrayBuffer();
        return await WebAssembly.instantiate(wG, bG)
      } {
        const ZG = await WebAssembly.instantiate(GG, bG);
        return ZG instanceof WebAssembly.Instance ? {
          instance: ZG,
          module: GG
        } : ZG
      }
    }(await GG, bG);
    return zb(ZG, wG)
  }

  function Xb() {
    return function(GG, bG) {
      if (!CG()) throw new Error(`Bloxd wasm is not ready (${WG()}): check isBloxdWasmReady() first`);
      if (EG !== GG) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${bG}`)
    }(wG, "the wasm client's workers' exports"), wG
  }
  var ub = ZG(604);
  class ib {
    constructor(GG, bG, wG, SG, LG, yG, kG, UG, YG) {
      var VG, pG;
      this.defaultGenerator = void 0, this.layerEntries = void 0;
      const {
        WorldGenerator: fG
      } = ZG(40172), QG = function(GG, bG, ZG) {
        if (null === GG) return null;
        for (const kG of GG.sw) vb(kG, ZG);
        const wG = GG.terrain;
        if (null === wG) return {
          sw: GG.sw,
          buildBiomes: null
        };
        const SG = Object.hasOwn(bG, wG.name) ? bG[wG.name] : void 0;
        if (void 0 === SG) {
          const GG = Object.keys(bG);
          throw new Error(`Custom world-gen terrain "${wG.name}" is not in this generator's catalogue (${GG.length>0?GG.join(", "):"empty"})`)
        }
        const LG = SG(),
          yG = function(GG, bG) {
            if (!bG.parseOptions) {
              if (null !== GG.Aw) throw new Error(`Custom world-gen terrain "${GG.name}" takes no options`);
              return null
            }
            let ZG = null;
            if (null !== GG.Aw) try {
              ZG = JSON.parse(GG.Aw)
            } catch (wG) {
              throw new Error(`Custom world-gen terrain "${GG.name}" has invalid optionsJson: ${String(wG)}`, {
                cause: wG
              })
            }
            return bG.parseOptions(ZG)
          }(wG, LG);
        return {
          sw: GG.sw,
          buildBiomes: GG => LG.buildBiomes(GG, yG)
        }
      }(null !== (VG = null === kG || void 0 === kG ? void 0 : kG.jw) && void 0 !== VG ? VG : null, UG, bG);
      this.defaultGenerator = new fG(GG, bG, wG, SG, LG, yG, null, QG, YG);
      const KG = null !== (pG = null === kG || void 0 === kG ? void 0 : kG.layers) && void 0 !== pG ? pG : [];
      ! function(GG, bG) {
        for (const wG of GG) Cb(wG, bG);
        const ZG = [...GG].sort(((GG, bG) => GG.Zw - bG.Zw));
        for (let wG = 1; wG < ZG.length; wG++)
          if (ZG[wG].Zw < ZG[wG - 1].ww) throw new Error(`Custom world-gen layers overlap: [${ZG[wG-1].Zw}, ${ZG[wG-1].ww}) and [${ZG[wG].Zw}, ${ZG[wG].ww})`)
      }(KG, bG), this.layerEntries = KG.map((ZG => ({
        layer: ZG,
        generator: new fG(GG, bG, wG, SG, LG, yG, ZG, null, YG)
      })))
    }
    getChunk(GG, bG, ZG, wG) {
      for (const {
          layer: SG,
          generator: LG
        }
        of this.layerEntries)
        if (ZG >= SG.Zw && ZG < SG.ww) return LG.getChunk(GG, bG, ZG - SG.Sw, wG);
      return this.defaultGenerator.getChunk(GG, bG, ZG, wG)
    }
    getBiomeSelector() {
      return this.defaultGenerator.biomeSelector
    }
    getPrefabLootChests(GG, bG, ZG, wG, SG) {
      return this.defaultGenerator.getPrefabLootChests(GG, bG, ZG, wG, SG)
    }
    getTreeGenerator() {
      return this.defaultGenerator.treeGenerator
    }
    getOresForChunkColumn(GG, bG) {
      return this.defaultGenerator.getOresForChunkColumn(GG, bG)
    }
  }

  function Cb(GG, bG) {
    if (GG.Zw >= GG.ww) throw new Error(`Custom world-gen layer has minY (${GG.Zw}) >= maxY (${GG.ww})`);
    if (GG.Zw % ub.D !== 0 || GG.ww % ub.D !== 0 || GG.Sw % ub.D !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${ub.D}); got minY=${GG.Zw}, maxY=${GG.ww}, groundY=${GG.Sw}`);
    if (function(GG, bG) {
        if (void 0 === (0, ub.I)(GG.Uw, bG)) throw new Error(`Custom world-gen caves lavaPitBlock "${GG.Uw}" not found in blockMetadata`);
        if (GG.Yw)
          for (const ZG of GG.Yw) Wb(ZG, bG)
      }(GG.yw, bG), 0 === GG.Xw.length) throw new Error("Custom world-gen layer must have at least one biome");
    let ZG = 0;
    for (const wG of GG.Xw) Fb(wG, bG), ZG += wG.frequency;
    if (ZG <= 0) throw new Error("Custom world-gen layer biome frequencies must sum to > 0");
    for (const wG of GG.Iw) vb(wG, bG)
  }

  function Wb(GG, bG) {
    const {
      blockName: ZG,
      pw: wG,
      fw: SG,
      Qw: LG
    } = GG;
    if (void 0 === (0, ub.I)(ZG, bG)) throw new Error(`Custom world-gen cave decoration blockName "${ZG}" not found in blockMetadata`);
    if (!wG && !SG && !LG) throw new Error(`Custom world-gen cave decoration "${ZG}" must allow at least one of floor/walls/ceiling anchoring`);
    if (SG)
      for (const yG of ["meta|rot1|side", "meta|rot2|side", "meta|rot3|side", "meta|rot4|side"]) mb(ZG, yG, bG);
    if (LG && mb(ZG, "meta|rot1|top", bG), Ib(GG.Kw, ZG, "Kw"), Ib(GG.hw, ZG, "hw"), !Number.isInteger(GG.dw) || GG.dw < 0) throw new Error(`Custom world-gen cave decoration "${ZG}" minPlacements must be a non-negative integer, got ${GG.dw}`);
    if (!(0, ub.L)(GG.Jw) && (Ib(GG.Jw.zw, ZG, "depthRamp.deepClusterChance"), GG.Jw.Ew <= GG.Jw.ow)) throw new Error(`Custom world-gen cave decoration "${ZG}" deepY must be strictly smaller than shallowY, but ${GG.Jw.Ew} <= ${GG.Jw.ow} `)
  }

  function mb(GG, bG, ZG) {
    const wG = `${GG}|${bG}`;
    if (void 0 === (0, ub.I)(wG, ZG)) throw new Error(`Custom world-gen cave decoration "${GG}" is missing directional variant "${wG}" required for wall/ceiling anchoring`)
  }

  function Ib(GG, bG, ZG) {
    if (GG < 0 || GG > 1) throw new Error(`Custom world-gen cave decoration "${bG}" ${ZG} must be in [0, 1], got ${GG}`)
  }

  function Fb(GG, bG) {
    if (GG.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${GG.frequency}`);
    if (void 0 === (0, ub.I)(GG.iw, bG)) throw new Error(`Custom world-gen biome topsoilBlock "${GG.iw}" not found in blockMetadata`);
    if (void 0 === (0, ub.I)(GG.Cw, bG)) throw new Error(`Custom world-gen biome lowsoilBlock "${GG.Cw}" not found in blockMetadata`);
    if (0 === GG.Ww.length) throw new Error("Custom world-gen biome must have at least one stoneType");
    for (const ZG of GG.Ww) {
      if (ZG.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${ZG.frequency}`);
      if (void 0 === (0, ub.I)(ZG.blockName, bG)) throw new Error(`Custom world-gen biome stoneType blockName "${ZG.blockName}" not found in blockMetadata`)
    }
  }

  function vb(GG, bG) {
    if (void 0 === (0, ub.I)(GG.blockName, bG)) throw new Error(`Custom world-gen ore blockName "${GG.blockName}" not found in blockMetadata`);
    if (GG.radius < 0) throw new Error(`Custom world-gen ore "${GG.blockName}" radius must be >= 0, got ${GG.radius}`);
    if (GG.aw <= 0) throw new Error(`Custom world-gen ore "${GG.blockName}" minDistBetweenDeposits must be > 0, got ${GG.aw}`);
    if (GG.Zw > GG.ww) throw new Error(`Custom world-gen ore "${GG.blockName}" minY (${GG.Zw}) must be <= maxY (${GG.ww})`);
    if (GG.lw < 0 || GG.lw > 1) throw new Error(`Custom world-gen ore "${GG.blockName}" spawnChance must be in [0, 1], got ${GG.lw}`)
  }
  const ab = "buildAFactory2/wasteland",
    cb = {
      blockName: "Uranium Ore",
      radius: 2,
      aw: 10,
      Zw: -98,
      ww: -78,
      lw: .4
    },
    lb = [{
      blockName: "Copper Ore",
      radius: 2,
      aw: 6,
      Zw: -40,
      ww: 20,
      lw: .6
    }, {
      blockName: "Voltite Ore",
      radius: 2,
      aw: 10,
      Zw: -75,
      ww: -55,
      lw: .4
    }],
    jb = {
      name: ab,
      Aw: null
    };
  const Pb = {
    [ab]: () => ZG(40048).c
  };
  Math.round(29.999999999999996);
  const Mb = 0,
    Ab = 1,
    sb = 2,
    qb = 32;
  const nb = 1048576;
  const gb = "1336701983750492191";

  function eb() {
    {
      if ("undefined" === typeof window) return !1;
      const GG = window.location.hostname;
      return GG.includes("preprod") || GG.includes(gb)
    }
  }
  const Rb = [8, 11, 15, 16, 17, 18, 19],
    Tb = [];
  for (let fZ = 0; fZ <= 30; fZ++) Rb.includes(fZ) || Tb.push(10 * fZ);
  const Hb = Tb;
  Hb.filter((GG => 0 !== GG));
  const tb = function(GG) {
      if (void 0 === GG || "" === GG) return 0;
      const bG = Number(GG);
      if (!Hb.includes(bG)) throw new Error(`Invalid port offset "${GG}". Must be one of: ${Hb.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
      return bG
    }("0"),
    Db = 4500;

  function Nb(GG, bG) {
    const ZG = {};
    for (const wG of Object.keys(GG)) ZG[wG] = GG[wG] + bG;
    return ZG
  }
  const Ob = {
      1: 6585,
      2: 6586,
      3: 6587
    },
    xb = {
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
    Bb = {
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
  ! function(GG) {
    const bG = eb() ? Ob : xb;
    Nb(bG, GG), Nb(Bb, GG)
  }(tb);
  const GZ = {
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
  !0 === GZ.offlineMode && (console.log("Booting in offline mode..."), !1 === GZ.useLocalDatabase && console.log("useLocalDatabase is false in offline mode. Setting useLocalDatabase to true."), GZ.useLocalDatabase = !0, !0 === GZ.greenlightChecksEnabled && console.log("greenlightChecksEnabled is true in offline mode. Setting greenlightChecksEnabled to false."), GZ.greenlightChecksEnabled = !1, GZ.useBillingSandbox = !0);
  const bZ = 10,
    ZZ = 3,
    wZ = (GZ.greenlightChecksEnabled, GZ.greenlightChecksEnabled, {
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
  const SZ = new Set;
  for (const fZ in wZ) {
    const GG = wZ[fZ].code;
    if (SZ.has(GG)) throw new Error(`Duplicate leave code: ${GG}`);
    SZ.add(GG)
  }! function() {
    const GG = yZ(bZ + 1, ZZ + 1);
    let bG = GG;
    for (; LZ(bG) < GG;) bG++
  }();

  function LZ(GG) {
    return GG - Math.floor(GG / 6)
  }

  function yZ(GG, bG) {
    const ZG = Math.max(GG, bG);
    let wG = 0;
    for (let SG = -ZG; SG <= ZG; SG++)
      for (let LG = -ZG; LG <= ZG; LG++)
        for (let yG = -ZG; yG <= ZG; yG++) kZ(GG, bG, SG, LG, yG) && wG++;
    return wG
  }

  function kZ(GG, bG, ZG, wG, SG) {
    const LG = ZG * ZG + SG * SG;
    return GG === bG ? LG + wG * wG <= GG * GG : GG > bG ? Math.abs(wG) <= bG && LG + wG * wG <= GG * GG : LG <= GG * GG && LG + wG * wG <= bG * bG
  }
  const UZ = 65536;
  ! function(GG) {
    const bG = 6815744 + (ZG = GG, Math.floor(33554432 * ZG / 6144)) + 135680 * GG;
    var ZG;
    Math.ceil((85983232 + bG) / UZ)
  }(6144);
  const YZ = 16 * nb;

  function VZ(GG) {
    return function(GG) {
      return vG((() => GG), wG)
    }(GG)
  }
  const pZ = globalThis.WorkerGlobalScope;
  if (void 0 !== pZ && globalThis instanceof pZ) {
    const GG = Promise.all([ZG.e(73), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(70)]).then((() => ZG(40161))).then((GG => {
      let {
        worldGenMetadata: bG
      } = GG;
      return bG
    }));
    GG.catch((() => {})),
      function(GG, bG) {
        let {
          initWasm: ZG = VZ,
          terrains: wG,
          loadTables: SG,
          now: LG
        } = bG, yG = 0, kG = null, UG = null, YG = null, pG = new Uint16Array(0), fG = !1, QG = !1;
        const KG = function(GG, bG, ZG) {
            let wG = 0,
              SG = -1,
              LG = !1;
            const yG = () => {
              if (LG) return;
              let yG;
              wG = 0;
              try {
                yG = GG.stats()
              } catch (kG) {
                return LG = !0, void ZG(kG)
              }
              SG = yG.memoryBytes, bG(yG)
            };
            return {
              now: yG,
              afterJob: () => {
                wG++, (wG >= 64 || GG.memoryBytes() !== SG) && yG()
              }
            }
          }(MG(), (bG => {
            GG.postMessage({
              type: "memory",
              stats: bG
            })
          }), (bG => {
            QG = !0, UG = null, GG.postMessage({
              type: "lost",
              reason: `its memory stats trapped (${String(bG)})`
            })
          })),
          hG = (GG, bG) => {
            if (!UG) throw new Error("no encoder");
            try {
              const ZG = UG.Fd();
              new Uint16Array(FG().buffer, ZG, GG.length).set(GG), UG.encode(bG);
              const wG = function(GG) {
                return String.fromCharCode(...new Uint8Array(FG().buffer, GG.vd(), 32))
              }(UG);
              return fG = !0, wG
            } catch (ZG) {
              throw QG = !0, ZG
            }
          };
        GG.onmessage = bG => {
          let {
            data: dG
          } = bG;
          switch (dG.type) {
            case "start":
              yG = dG.rK, pG = new Uint16Array(yG * yG * yG),
                function(bG) {
                  if (32 === yG)
                    if (ZG(bG)) {
                      try {
                        MG().setCeiling(YZ)
                      } catch (wG) {
                        return void GG.postMessage({
                          type: "lost",
                          reason: `the memory ceiling was not set (${String(wG)})`
                        })
                      }
                      try {
                        UG = new(Xb().Wd)
                      } catch (wG) {
                        return void GG.postMessage({
                          type: "lost",
                          reason: `GeneratedChunkEncoder did not start (${String(wG)})`
                        })
                      }
                      SG().then((bG => {
                        kG = bG, GG.postMessage({
                          type: "started"
                        }), KG.now()
                      }), (bG => {
                        GG.postMessage({
                          type: "lost",
                          reason: `the block and item tables did not load (${String(bG)})`
                        })
                      }))
                    } else GG.postMessage({
                      type: "lost",
                      reason: `wasm did not start (${mG()})`
                    });
                  else GG.postMessage({
                    type: "lost",
                    reason: `chunk size ${yG} is not the encoder's 32`
                  })
                }(dG.module);
              break;
            case "seed": {
              const {
                settings: GG
              } = dG;
              if (YG = null, null === GG) break;
              if (null === kG) throw new Error("a map's seed before the block and item tables loaded");
              try {
                YG = new ib(yG, kG.blockMetadata, kG.itemMetadata, GG.NZ, !1, GG.OZ, GG.BZ, wG, hG)
              } catch (JG) {
                console.error("[bloxd-wasm-client] the map's world generator did not start", JG)
              }
              break
            }
            case "generate":
              ! function(bG, ZG, wG, SG, kG) {
                if (QG || !UG) return void GG.postMessage({
                  type: "result",
                  ticket: bG,
                  status: sb,
                  workerUs: 0,
                  bytes: kG,
                  len: 0
                }, [kG]);
                fG = !1;
                const hG = LG();
                let dG = !1;
                YG && (pG.fill(0), dG = void 0 !== YG.getChunk(VG()(pG, [yG, yG, yG]), ZG, wG, SG));
                const JG = (rG = hG, zG = LG(), Math.min(4294967295, Math.max(0, Math.round(1e3 * (zG - rG)))));
                var rG, zG;
                let EG = null;
                if (!QG && dG && fG) try {
                  EG = function(GG, bG) {
                    const ZG = GG.ld(),
                      wG = qb + ZG,
                      SG = bG.byteLength >= wG ? bG : new ArrayBuffer(wG),
                      LG = FG().buffer,
                      yG = new Uint8Array(SG, 0, wG);
                    return yG.set(new Uint8Array(LG, GG.vd(), qb)), yG.set(new Uint8Array(LG, GG.jd(), ZG), qb), {
                      bytes: SG,
                      len: wG
                    }
                  }(UG, kG)
                } catch {
                  QG = !0
                }
                QG ? (UG = null, GG.postMessage({
                  type: "result",
                  ticket: bG,
                  status: sb,
                  workerUs: JG,
                  bytes: kG,
                  len: 0
                }, [kG])) : null === EG ? GG.postMessage({
                  type: "result",
                  ticket: bG,
                  status: Ab,
                  workerUs: JG,
                  bytes: kG,
                  len: 0
                }, [kG]) : EG.bytes === kG ? GG.postMessage({
                  type: "result",
                  ticket: bG,
                  status: Mb,
                  workerUs: JG,
                  bytes: kG,
                  len: EG.len
                }, [kG]) : GG.postMessage({
                  type: "result",
                  ticket: bG,
                  status: Mb,
                  workerUs: JG,
                  bytes: EG.bytes,
                  len: EG.len,
                  spare: kG
                }, [EG.bytes, kG]), QG || KG.afterJob()
              }(dG.ticket, dG.x, dG.y, dG.z, dG.bytes)
          }
        }
      }(globalThis, {
        terrains: Pb,
        loadTables: () => GG,
        now: () => performance.now()
      })
  }
})();