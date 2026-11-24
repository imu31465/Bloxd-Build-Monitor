/*! For license information please see mpd96o.worldgenWorker.04a9e2f7.chunk.js.LICENSE.txt */
(() => {
  var mm = {
      1649: mm => {
        const Tm = "object" === typeof performance && performance && "function" === typeof performance.now ? performance : Date,
          fm = () => Tm.now(),
          hm = mm => mm === 1 / 0 || (mm => mm && mm === Math.floor(mm) && mm > 0 && isFinite(mm))(mm);
        class Am {
          constructor() {
            let {
              max: mm = 1 / 0,
              ttl: Tm,
              updateAgeOnGet: fm = !1,
              checkAgeOnGet: Am = !1,
              noUpdateTTL: am = !1,
              dispose: xm,
              noDisposeOnSet: wm = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.expirations = Object.create(null), this.data = new Map, this.expirationMap = new Map, void 0 !== Tm && !hm(Tm)) throw new TypeError("ttl must be positive integer or Infinity if set");
            if (!hm(mm)) throw new TypeError("max must be positive integer or Infinity");
            if (this.ttl = Tm, this.max = mm, this.updateAgeOnGet = !!fm, this.checkAgeOnGet = !!Am, this.noUpdateTTL = !!am, this.noDisposeOnSet = !!wm, void 0 !== xm) {
              if ("function" !== typeof xm) throw new TypeError("dispose must be function if set");
              this.dispose = xm
            }
            this.timer = void 0, this.timerExpiration = void 0
          }
          setTimer(mm, Tm) {
            if (this.timerExpiration < mm) return;
            this.timer && clearTimeout(this.timer);
            const hm = setTimeout((() => {
              this.timer = void 0, this.timerExpiration = void 0, this.purgeStale();
              for (const mm in this.expirations) {
                this.setTimer(mm, Math.max(0, mm - fm()));
                break
              }
            }), Tm);
            hm.unref && hm.unref(), this.timerExpiration = mm, this.timer = hm
          }
          cancelTimer() {
            this.timer && (clearTimeout(this.timer), this.timerExpiration = void 0, this.timer = void 0)
          }
          cancelTimers() {
            return process.emitWarning('TTLCache.cancelTimers has been renamed to TTLCache.cancelTimer (no "s"), and will be removed in the next major version update'), this.cancelTimer()
          }
          clear() {
            const mm = this.dispose !== Am.prototype.dispose ? [...this] : [];
            this.data.clear(), this.expirationMap.clear(), this.cancelTimer(), this.expirations = Object.create(null);
            for (const [Tm, fm] of mm) this.dispose(fm, Tm, "delete")
          }
          setTTL(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ttl;
            const hm = this.expirationMap.get(mm);
            if (void 0 !== hm) {
              const Tm = this.expirations[hm];
              !Tm || Tm.length <= 1 ? delete this.expirations[hm] : this.expirations[hm] = Tm.filter((Tm => Tm !== mm))
            }
            if (Tm !== 1 / 0) {
              const hm = Math.floor(fm() + Tm);
              this.expirationMap.set(mm, hm), this.expirations[hm] || (this.expirations[hm] = [], this.setTimer(hm, Tm)), this.expirations[hm].push(mm)
            } else this.expirationMap.set(mm, 1 / 0)
          }
          set(mm, Tm) {
            let {
              ttl: fm = this.ttl,
              noUpdateTTL: Am = this.noUpdateTTL,
              noDisposeOnSet: am = this.noDisposeOnSet
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!hm(fm)) throw new TypeError("ttl must be positive integer or Infinity");
            if (this.expirationMap.has(mm)) {
              Am || this.setTTL(mm, fm);
              const hm = this.data.get(mm);
              hm !== Tm && (this.data.set(mm, Tm), am || this.dispose(hm, mm, "set"))
            } else this.setTTL(mm, fm), this.data.set(mm, Tm);
            for (; this.size > this.max;) this.purgeToCapacity();
            return this
          }
          has(mm) {
            return this.data.has(mm)
          }
          getRemainingTTL(mm) {
            const Tm = this.expirationMap.get(mm);
            return Tm === 1 / 0 ? Tm : void 0 !== Tm ? Math.max(0, Math.ceil(Tm - fm())) : 0
          }
          get(mm) {
            let {
              updateAgeOnGet: Tm = this.updateAgeOnGet,
              ttl: fm = this.ttl,
              checkAgeOnGet: hm = this.checkAgeOnGet
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Am = this.data.get(mm);
            if (!hm || 0 !== this.getRemainingTTL(mm)) return Tm && this.setTTL(mm, fm), Am;
            this.delete(mm)
          }
          dispose(mm, Tm) {}
          delete(mm) {
            const Tm = this.expirationMap.get(mm);
            if (void 0 !== Tm) {
              const fm = this.data.get(mm);
              this.data.delete(mm), this.expirationMap.delete(mm);
              const hm = this.expirations[Tm];
              return hm && (hm.length <= 1 ? delete this.expirations[Tm] : this.expirations[Tm] = hm.filter((Tm => Tm !== mm))), this.dispose(fm, mm, "delete"), 0 === this.size && this.cancelTimer(), !0
            }
            return !1
          }
          purgeToCapacity() {
            for (const mm in this.expirations) {
              const Tm = this.expirations[mm];
              if (!(this.size - Tm.length >= this.max)) {
                const mm = this.size - this.max,
                  fm = [];
                for (const hm of Tm.splice(0, mm)) fm.push([hm, this.data.get(hm)]), this.data.delete(hm), this.expirationMap.delete(hm);
                for (const [Tm, hm] of fm) this.dispose(hm, Tm, "evict");
                return
              } {
                delete this.expirations[mm];
                const fm = [];
                for (const mm of Tm) fm.push([mm, this.data.get(mm)]), this.data.delete(mm), this.expirationMap.delete(mm);
                for (const [mm, Tm] of fm) this.dispose(Tm, mm, "evict")
              }
            }
          }
          get size() {
            return this.data.size
          }
          purgeStale() {
            const mm = Math.ceil(fm());
            for (const Tm in this.expirations) {
              if ("Infinity" === Tm || Tm > mm) return;
              const fm = [...this.expirations[Tm] || []],
                hm = [];
              delete this.expirations[Tm];
              for (const mm of fm) hm.push([mm, this.data.get(mm)]), this.data.delete(mm), this.expirationMap.delete(mm);
              for (const [mm, Tm] of hm) this.dispose(Tm, mm, "stale")
            }
            0 === this.size && this.cancelTimer()
          }* entries() {
            for (const mm in this.expirations)
              for (const Tm of this.expirations[mm]) yield [Tm, this.data.get(Tm)]
          }* keys() {
            for (const mm in this.expirations)
              for (const Tm of this.expirations[mm]) yield Tm
          }* values() {
            for (const mm in this.expirations)
              for (const Tm of this.expirations[mm]) yield this.data.get(Tm)
          } [Symbol.iterator]() {
            return this.entries()
          }
        }
        mm.exports = Am
      },
      2847: mm => {
        mm.exports = function(mm) {
          for (var Tm = new Array(mm), fm = 0; fm < mm; ++fm) Tm[fm] = fm;
          return Tm
        }
      },
      2850: mm => {
        function Tm(mm) {
          return !!mm.constructor && "function" === typeof mm.constructor.isBuffer && mm.constructor.isBuffer(mm)
        }
        mm.exports = function(mm) {
          return null != mm && (Tm(mm) || function(mm) {
            return "function" === typeof mm.readFloatLE && "function" === typeof mm.slice && Tm(mm.slice(0, 0))
          }(mm) || !!mm._isBuffer)
        }
      },
      39862: mm => {
        mm.exports = function(mm, Tm) {
          Tm = Tm || 2;
          for (var fm = 2 * (mm = mm || 1) + 1, hm = Math.pow(fm, Tm) - 1, Am = new Array(hm), am = 0; am < hm; am++)
            for (var xm = Am[am] = new Array(Tm), wm = am < hm / 2 ? am : am + 1, Dm = 1; Dm <= Tm; Dm++) {
              var im = wm % Math.pow(fm, Dm);
              xm[Dm - 1] = im / Math.pow(fm, Dm - 1) - mm, wm -= im
            }
          return Am
        }
      },
      2839: (mm, Tm, fm) => {
        var hm = fm(2847),
          Am = fm(2850),
          am = "undefined" !== typeof Float64Array;

        function xm(mm, Tm) {
          return mm[0] - Tm[0]
        }

        function wm() {
          var mm, Tm = this.stride,
            fm = new Array(Tm.length);
          for (mm = 0; mm < fm.length; ++mm) fm[mm] = [Math.abs(Tm[mm]), mm];
          fm.sort(xm);
          var hm = new Array(fm.length);
          for (mm = 0; mm < hm.length; ++mm) hm[mm] = fm[mm][1];
          return hm
        }

        function Dm(mm, Tm) {
          var fm = ["View", Tm, "d", mm].join("");
          Tm < 0 && (fm = "View_Nil" + mm);
          var Am = "generic" === mm;
          if (-1 === Tm) {
            var am = "function " + fm + "(a){this.data=a;};var proto=" + fm + ".prototype;proto.dtype='" + mm + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + fm + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + fm + "(a){return new " + fm + "(a);}";
            return new Function(am)()
          }
          if (0 === Tm) {
            am = "function " + fm + "(a,d) {this.data = a;this.offset = d};var proto=" + fm + ".prototype;proto.dtype='" + mm + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + fm + "_copy() {return new " + fm + "(this.data,this.offset)};proto.pick=function " + fm + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + fm + "_get(){return " + (Am ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + fm + "_set(v){return " + (Am ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + fm + "(a,b,c,d){return new " + fm + "(a,d)}";
            return new Function("TrivialArray", am)(im[mm][0])
          }
          am = ["'use strict'"];
          var xm = hm(Tm),
            Dm = xm.map((function(mm) {
              return "i" + mm
            })),
            Rm = "this.offset+" + xm.map((function(mm) {
              return "this.stride[" + mm + "]*i" + mm
            })).join("+"),
            pm = xm.map((function(mm) {
              return "b" + mm
            })).join(","),
            Em = xm.map((function(mm) {
              return "c" + mm
            })).join(",");
          am.push("function " + fm + "(a," + pm + "," + Em + ",d){this.data=a", "this.shape=[" + pm + "]", "this.stride=[" + Em + "]", "this.offset=d|0}", "var proto=" + fm + ".prototype", "proto.dtype='" + mm + "'", "proto.dimension=" + Tm), am.push("Object.defineProperty(proto,'size',{get:function " + fm + "_size(){return " + xm.map((function(mm) {
            return "this.shape[" + mm + "]"
          })).join("*"), "}})"), 1 === Tm ? am.push("proto.order=[0]") : (am.push("Object.defineProperty(proto,'order',{get:"), Tm < 4 ? (am.push("function " + fm + "_order(){"), 2 === Tm ? am.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === Tm && am.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : am.push("ORDER})")), am.push("proto.set=function " + fm + "_set(" + Dm.join(",") + ",v){"), Am ? am.push("return this.data.set(" + Rm + ",v)}") : am.push("return this.data[" + Rm + "]=v}"), am.push("proto.get=function " + fm + "_get(" + Dm.join(",") + "){"), Am ? am.push("return this.data.get(" + Rm + ")}") : am.push("return this.data[" + Rm + "]}"), am.push("proto.index=function " + fm + "_index(", Dm.join(), "){return " + Rm + "}"), am.push("proto.hi=function " + fm + "_hi(" + Dm.join(",") + "){return new " + fm + "(this.data," + xm.map((function(mm) {
            return ["(typeof i", mm, "!=='number'||i", mm, "<0)?this.shape[", mm, "]:i", mm, "|0"].join("")
          })).join(",") + "," + xm.map((function(mm) {
            return "this.stride[" + mm + "]"
          })).join(",") + ",this.offset)}");
          var om = xm.map((function(mm) {
              return "a" + mm + "=this.shape[" + mm + "]"
            })),
            Om = xm.map((function(mm) {
              return "c" + mm + "=this.stride[" + mm + "]"
            }));
          am.push("proto.lo=function " + fm + "_lo(" + Dm.join(",") + "){var b=this.offset,d=0," + om.join(",") + "," + Om.join(","));
          for (var Ym = 0; Ym < Tm; ++Ym) am.push("if(typeof i" + Ym + "==='number'&&i" + Ym + ">=0){d=i" + Ym + "|0;b+=c" + Ym + "*d;a" + Ym + "-=d}");
          am.push("return new " + fm + "(this.data," + xm.map((function(mm) {
            return "a" + mm
          })).join(",") + "," + xm.map((function(mm) {
            return "c" + mm
          })).join(",") + ",b)}"), am.push("proto.step=function " + fm + "_step(" + Dm.join(",") + "){var " + xm.map((function(mm) {
            return "a" + mm + "=this.shape[" + mm + "]"
          })).join(",") + "," + xm.map((function(mm) {
            return "b" + mm + "=this.stride[" + mm + "]"
          })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
          for (Ym = 0; Ym < Tm; ++Ym) am.push("if(typeof i" + Ym + "==='number'){d=i" + Ym + "|0;if(d<0){c+=b" + Ym + "*(a" + Ym + "-1);a" + Ym + "=ceil(-a" + Ym + "/d)}else{a" + Ym + "=ceil(a" + Ym + "/d)}b" + Ym + "*=d}");
          am.push("return new " + fm + "(this.data," + xm.map((function(mm) {
            return "a" + mm
          })).join(",") + "," + xm.map((function(mm) {
            return "b" + mm
          })).join(",") + ",c)}");
          var qm = new Array(Tm),
            jm = new Array(Tm);
          for (Ym = 0; Ym < Tm; ++Ym) qm[Ym] = "a[i" + Ym + "]", jm[Ym] = "b[i" + Ym + "]";
          am.push("proto.transpose=function " + fm + "_transpose(" + Dm + "){" + Dm.map((function(mm, Tm) {
            return mm + "=(" + mm + "===undefined?" + Tm + ":" + mm + "|0)"
          })).join(";"), "var a=this.shape,b=this.stride;return new " + fm + "(this.data," + qm.join(",") + "," + jm.join(",") + ",this.offset)}"), am.push("proto.pick=function " + fm + "_pick(" + Dm + "){var a=[],b=[],c=this.offset");
          for (Ym = 0; Ym < Tm; ++Ym) am.push("if(typeof i" + Ym + "==='number'&&i" + Ym + ">=0){c=(c+this.stride[" + Ym + "]*i" + Ym + ")|0}else{a.push(this.shape[" + Ym + "]);b.push(this.stride[" + Ym + "])}");
          return am.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), am.push("return function construct_" + fm + "(data,shape,stride,offset){return new " + fm + "(data," + xm.map((function(mm) {
            return "shape[" + mm + "]"
          })).join(",") + "," + xm.map((function(mm) {
            return "stride[" + mm + "]"
          })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", am.join("\n"))(im[mm], wm)
        }
        var im = {
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
        mm.exports = function(mm, Tm, fm, hm) {
          if (void 0 === mm) return (0, im.array[0])([]);
          "number" === typeof mm && (mm = [mm]), void 0 === Tm && (Tm = [mm.length]);
          var xm = Tm.length;
          if (void 0 === fm) {
            fm = new Array(xm);
            for (var wm = xm - 1, Rm = 1; wm >= 0; --wm) fm[wm] = Rm, Rm *= Tm[wm]
          }
          if (void 0 === hm) {
            hm = 0;
            for (wm = 0; wm < xm; ++wm) fm[wm] < 0 && (hm -= (Tm[wm] - 1) * fm[wm])
          }
          for (var pm = function(mm) {
              if (Am(mm)) return "buffer";
              if (am) switch (Object.prototype.toString.call(mm)) {
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
              return Array.isArray(mm) ? "array" : "generic"
            }(mm), Em = im[pm]; Em.length <= xm + 1;) Em.push(Dm(pm, Em.length - 1));
          return (0, Em[xm + 1])(mm, Tm, fm, hm)
        }
      },
      39843: (mm, Tm, fm) => {
        var hm = fm(39850).integer,
          Am = fm(39854),
          am = fm(39858);

        function xm(mm, Tm) {
          for (var fm = 0, hm = 0; hm < mm.length; hm++) fm += Math.pow(mm[hm] - Tm[hm], 2);
          return fm
        }

        function wm(mm, Tm) {
          if ("function" === typeof mm.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
          this.shape = mm.shape, this.minDistance = mm.minDistance, this.maxDistance = mm.maxDistance || 2 * mm.minDistance, this.maxTries = Math.ceil(Math.max(1, mm.tries || 30)), this.rng = Tm || Math.random, this.dimension = this.shape.length, this.squaredMinDistance = this.minDistance * this.minDistance, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.minDistance / Math.sqrt(this.dimension), this.neighbourhood = am(this.dimension), this.currentPoint = null, this.processList = [], this.samplePoints = [], this.gridShape = [];
          for (var fm = 0; fm < this.dimension; fm++) this.gridShape.push(Math.ceil(this.shape[fm] / this.cellSize));
          this.grid = hm(this.gridShape)
        }
        wm.prototype.shape = null, wm.prototype.dimension = null, wm.prototype.minDistance = null, wm.prototype.maxDistance = null, wm.prototype.minDistancePlusEpsilon = null, wm.prototype.squaredMinDistance = null, wm.prototype.deltaDistance = null, wm.prototype.cellSize = null, wm.prototype.maxTries = null, wm.prototype.rng = null, wm.prototype.neighbourhood = null, wm.prototype.currentPoint = null, wm.prototype.processList = null, wm.prototype.samplePoints = null, wm.prototype.gridShape = null, wm.prototype.grid = null, wm.prototype.addRandomPoint = function() {
          for (var mm = new Array(this.dimension), Tm = 0; Tm < this.dimension; Tm++) mm[Tm] = this.rng() * this.shape[Tm];
          return this.directAddPoint(mm)
        }, wm.prototype.addPoint = function(mm) {
          var Tm, fm = !0;
          if (mm.length === this.dimension)
            for (Tm = 0; Tm < this.dimension && fm; Tm++) fm = mm[Tm] >= 0 && mm[Tm] <= this.shape[Tm];
          else fm = !1;
          return fm ? this.directAddPoint(mm) : null
        }, wm.prototype.directAddPoint = function(mm) {
          var Tm, fm = 0,
            hm = this.grid.stride;
          for (this.processList.push(mm), this.samplePoints.push(mm), Tm = 0; Tm < this.dimension; Tm++) fm += (mm[Tm] / this.cellSize | 0) * hm[Tm];
          return this.grid.data[fm] = this.samplePoints.length, mm
        }, wm.prototype.inNeighbourhood = function(mm) {
          var Tm, fm, hm, Am, am = this.dimension,
            wm = this.grid.stride;
          for (Tm = 0; Tm < this.neighbourhood.length; Tm++) {
            for (fm = 0, hm = 0; hm < am; hm++) {
              if ((Am = (mm[hm] / this.cellSize | 0) + this.neighbourhood[Tm][hm]) < 0 || Am >= this.gridShape[hm]) {
                fm = -1;
                break
              }
              fm += Am * wm[hm]
            }
            if (-1 !== fm && 0 !== this.grid.data[fm] && xm(mm, this.samplePoints[this.grid.data[fm] - 1]) < this.squaredMinDistance) return !0
          }
          return !1
        }, wm.prototype.next = function() {
          for (var mm, Tm, fm, hm, am, xm, wm; this.processList.length > 0;) {
            for (null === this.currentPoint && (this.currentPoint = this.processList.shift()), hm = this.currentPoint, mm = 0; mm < this.maxTries; mm++) {
              for (xm = !0, fm = this.minDistancePlusEpsilon + this.deltaDistance * this.rng(), 2 === this.dimension ? (Tm = this.rng() * Math.PI * 2, am = [Math.cos(Tm), Math.sin(Tm)]) : am = Am(this.dimension, this.rng), wm = 0; xm && wm < this.dimension; wm++) am[wm] = hm[wm] + am[wm] * fm, xm = am[wm] >= 0 && am[wm] < this.shape[wm];
              if (xm && !this.inNeighbourhood(am)) return this.directAddPoint(am)
            }
            mm === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, wm.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, wm.prototype.getAllPoints = function() {
          return this.samplePoints
        }, wm.prototype.getAllPointsWithDistance = function() {
          throw new Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation")
        }, wm.prototype.reset = function() {
          var mm = this.grid.data,
            Tm = 0;
          for (Tm = 0; Tm < mm.length; Tm++) mm[Tm] = 0;
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, mm.exports = wm
      },
      39868: (mm, Tm, fm) => {
        var hm = fm(39850).array,
          Am = fm(39854),
          am = fm(39858);

        function xm(mm, Tm) {
          for (var fm = 0, hm = 0; hm < mm.length; hm++) fm += Math.pow(mm[hm] - Tm[hm], 2);
          return Math.sqrt(fm)
        }

        function wm(mm, Tm) {
          if ("function" !== typeof mm.distanceFunction) throw new Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
          this.shape = mm.shape, this.minDistance = mm.minDistance, this.maxDistance = mm.maxDistance || 2 * mm.minDistance, this.maxTries = Math.ceil(Math.max(1, mm.tries || 30)), this.distanceFunction = mm.distanceFunction, this.bias = Math.max(0, Math.min(1, mm.bias || 0)), this.rng = Tm || Math.random, this.dimension = this.shape.length, this.minDistancePlusEpsilon = this.minDistance + 2e-14, this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon), this.cellSize = this.maxDistance / Math.sqrt(this.dimension), this.neighbourhood = am(this.dimension), this.currentPoint = null, this.currentDistance = 0, this.processList = [], this.samplePoints = [], this.sampleDistance = [], this.gridShape = [];
          for (var fm = 0; fm < this.dimension; fm++) this.gridShape.push(Math.ceil(this.shape[fm] / this.cellSize));
          this.grid = hm(this.gridShape)
        }
        wm.prototype.shape = null, wm.prototype.dimension = null, wm.prototype.minDistance = null, wm.prototype.maxDistance = null, wm.prototype.minDistancePlusEpsilon = null, wm.prototype.deltaDistance = null, wm.prototype.cellSize = null, wm.prototype.maxTries = null, wm.prototype.distanceFunction = null, wm.prototype.bias = null, wm.prototype.rng = null, wm.prototype.neighbourhood = null, wm.prototype.currentPoint = null, wm.prototype.currentDistance = null, wm.prototype.processList = null, wm.prototype.samplePoints = null, wm.prototype.sampleDistance = null, wm.prototype.gridShape = null, wm.prototype.grid = null, wm.prototype.addRandomPoint = function() {
          for (var mm = new Array(this.dimension), Tm = 0; Tm < this.dimension; Tm++) mm[Tm] = this.rng() * this.shape[Tm];
          return this.directAddPoint(mm)
        }, wm.prototype.addPoint = function(mm) {
          var Tm, fm = !0;
          if (mm.length === this.dimension)
            for (Tm = 0; Tm < this.dimension && fm; Tm++) fm = mm[Tm] >= 0 && mm[Tm] <= this.shape[Tm];
          else fm = !1;
          return fm ? this.directAddPoint(mm) : null
        }, wm.prototype.directAddPoint = function(mm) {
          var Tm, fm = 0,
            hm = this.grid.stride,
            Am = this.samplePoints.length;
          for (this.processList.push(Am), this.samplePoints.push(mm), this.sampleDistance.push(this.distanceFunction(mm)), Tm = 0; Tm < this.dimension; Tm++) fm += (mm[Tm] / this.cellSize | 0) * hm[Tm];
          return this.grid.data[fm].push(Am), mm
        }, wm.prototype.inNeighbourhood = function(mm) {
          var Tm, fm, hm, Am, am, wm, Dm = this.dimension,
            im = this.grid.stride,
            Rm = this.distanceFunction(mm);
          for (Tm = 0; Tm < this.neighbourhood.length; Tm++) {
            for (fm = 0, hm = 0; hm < Dm; hm++) {
              if ((Am = (mm[hm] / this.cellSize | 0) + this.neighbourhood[Tm][hm]) < 0 || Am >= this.gridShape[hm]) {
                fm = -1;
                break
              }
              fm += Am * im[hm]
            }
            if (-1 !== fm && this.grid.data[fm].length > 0)
              for (var pm = 0; pm < this.grid.data[fm].length; pm++) {
                am = this.samplePoints[this.grid.data[fm][pm]], wm = this.sampleDistance[this.grid.data[fm][pm]];
                var Em = Math.min(wm, Rm),
                  om = Em + (Math.max(wm, Rm) - Em) * this.bias;
                if (xm(mm, am) < this.minDistance + this.deltaDistance * om) return !0
              }
          }
          return !1
        }, wm.prototype.next = function() {
          for (var mm, Tm, fm, hm, am, xm, wm, Dm; this.processList.length > 0;) {
            if (null === this.currentPoint) {
              var im = this.processList.shift();
              this.currentPoint = this.samplePoints[im], this.currentDistance = this.sampleDistance[im]
            }
            for (hm = this.currentPoint, am = this.currentDistance, mm = 0; mm < this.maxTries; mm++) {
              for (wm = !0, fm = this.minDistancePlusEpsilon + this.deltaDistance * (am + (1 - am) * this.bias), 2 === this.dimension ? (Tm = this.rng() * Math.PI * 2, xm = [Math.cos(Tm), Math.sin(Tm)]) : xm = Am(this.dimension, this.rng), Dm = 0; wm && Dm < this.dimension; Dm++) xm[Dm] = hm[Dm] + xm[Dm] * fm, wm = xm[Dm] >= 0 && xm[Dm] < this.shape[Dm];
              if (wm && !this.inNeighbourhood(xm)) return this.directAddPoint(xm)
            }
            mm === this.maxTries && (this.currentPoint = null)
          }
          return null
        }, wm.prototype.fill = function() {
          for (0 === this.samplePoints.length && this.addRandomPoint(); this.next(););
          return this.samplePoints
        }, wm.prototype.getAllPoints = function() {
          return this.samplePoints
        }, wm.prototype.getAllPointsWithDistance = function() {
          var mm, Tm = new Array(this.samplePoints.length),
            fm = 0,
            hm = 0;
          for (fm = 0; fm < this.samplePoints.length; fm++) {
            for (mm = new Array(this.dimension + 1), hm = 0; hm < this.dimension; hm++) mm[hm] = this.samplePoints[fm][hm];
            mm[this.dimension] = this.sampleDistance[fm], Tm[fm] = mm
          }
          return Tm
        }, wm.prototype.reset = function() {
          var mm = this.grid.data,
            Tm = 0;
          for (Tm = 0; Tm < mm.length; Tm++) mm[Tm] = [];
          this.samplePoints = [], this.currentPoint = null, this.processList.length = 0
        }, mm.exports = wm
      },
      39858: (mm, Tm, fm) => {
        var hm = fm(39862);
        var Am = {};
        mm.exports = function(mm) {
          return Am[mm] || (Am[mm] = function(mm) {
            var Tm, fm = hm(2, mm),
              Am = [];
            for (fm = fm.filter((function(Tm) {
                for (var fm = 0, hm = 0; hm < mm; hm++) fm += Math.pow(Math.max(0, Math.abs(Tm[hm]) - 1), 2);
                return fm < mm
              })), Tm = 0; Tm < mm; Tm++) Am.push(0);
            return fm.push(Am), fm.sort((function(Tm, fm) {
              var hm, Am = 0,
                am = 0;
              for (hm = 0; hm < mm; hm++) Am += Math.pow(Tm[hm], 2), am += Math.pow(fm[hm], 2);
              return Am < am ? -1 : Am > am ? 1 : 0
            })), fm
          }(mm)), Am[mm]
        }
      },
      39838: (mm, Tm, fm) => {
        var hm = fm(39843),
          Am = fm(39868);

        function am(mm, Tm) {
          this.shape = mm.shape, "function" === typeof mm.distanceFunction ? this.implementation = new Am(mm, Tm) : this.implementation = new hm(mm, Tm)
        }
        am.prototype.implementation = null, am.prototype.addRandomPoint = function() {
          return this.implementation.addRandomPoint()
        }, am.prototype.addPoint = function(mm) {
          return this.implementation.addPoint(mm)
        }, am.prototype.next = function() {
          return this.implementation.next()
        }, am.prototype.fill = function() {
          return this.implementation.fill()
        }, am.prototype.getAllPoints = function() {
          return this.implementation.getAllPoints()
        }, am.prototype.getAllPointsWithDistance = function() {
          return this.implementation.getAllPointsWithDistance()
        }, am.prototype.reset = function() {
          this.implementation.reset()
        }, mm.exports = am
      },
      39854: mm => {
        mm.exports = function(mm, Tm) {
          var fm, hm, Am, am, xm, wm = new Array(mm),
            Dm = Math.floor(mm / 2) << 1,
            im = 0;
          for (xm = 0; xm < Dm; xm += 2) fm = -2 * Math.log(Tm()), hm = Math.sqrt(fm), Am = 2 * Math.PI * Tm(), im += fm, wm[xm] = hm * Math.cos(Am), wm[xm + 1] = hm * Math.sin(Am);
          if (mm % 2) {
            var Rm = Math.sqrt(-2 * Math.log(Tm())) * Math.cos(2 * Math.PI * Tm());
            wm[mm - 1] = Rm, im += Math.pow(Rm, 2)
          }
          for (am = 1 / Math.sqrt(im), xm = 0; xm < mm; ++xm) wm[xm] *= am;
          return wm
        }
      },
      39850: mm => {
        mm.exports = {
          integer: function(mm) {
            var Tm, fm = mm.length,
              hm = 1,
              Am = new Array(fm);
            for (Tm = fm; Tm > 0; Tm--) Am[Tm - 1] = hm, hm *= mm[Tm - 1];
            return {
              stride: Am,
              data: new Uint32Array(hm)
            }
          },
          array: function(mm) {
            var Tm, fm, hm = mm.length,
              Am = 1,
              am = new Array(hm),
              xm = [];
            for (Tm = hm; Tm > 0; Tm--) am[Tm - 1] = Am, Am *= mm[Tm - 1];
            for (fm = 0; fm < Am; fm++) xm.push([]);
            return {
              stride: am,
              data: xm
            }
          }
        }
      },
      37783: (mm, Tm, fm) => {
        var hm = fm(37785);

        function Am(mm) {
          for (var Tm, fm, Am = 0, am = mm.length, xm = 0; xm < mm.length;) {
            for (Tm = mm[xm], fm = 0; xm < am && mm[xm] === Tm;) ++xm, ++fm;
            Am += hm.log2(fm) / 7 | 0, Am += hm.log2(Tm >>> 0) / 7 | 0, Am += 2
          }
          return Am
        }
        Tm.size = Am, Tm.encode = function(mm, Tm) {
          Tm || (Tm = new Uint8Array(Am(mm)));
          for (var fm, hm, am = 0, xm = Tm.length, wm = 0; wm < mm.length;) {
            for (fm = mm[wm], hm = 0; wm < mm.length && mm[wm] === fm;) ++wm, ++hm;
            for (; am < xm && hm >= 128;) Tm[am++] = 128 + (127 & hm), hm >>>= 7;
            if (am >= xm) throw new Error("RLE buffer overflow");
            for (Tm[am++] = hm, fm >>>= 0; am < xm && fm >= 128;) Tm[am++] = 128 + (127 & fm), fm >>>= 7;
            if (am >= xm) throw new Error("RLE buffer overflow");
            Tm[am++] = fm
          }
          return Tm
        }, Tm.decode = function(mm, Tm) {
          for (var fm, hm, Am, am, xm = Tm.length, wm = mm.length, Dm = 0, im = 0; im < wm;) {
            for (fm = 0, hm = 0; im < wm && mm[im] >= 128;) fm += (127 & mm[im++]) << hm, hm += 7;
            if (fm += mm[im++] << hm, im >= wm) throw new Error("RLE buffer underrun");
            if (Dm + fm > xm) throw new Error("Chunk buffer overflow");
            for (Am = 0, hm = 0; im < wm && mm[im] >= 128;) Am += (127 & mm[im++]) << hm, hm += 7;
            if (im >= wm) throw new Error("RLE buffer underrun");
            for (Am += mm[im++] << hm, am = 0; am < fm; ++am) Tm[Dm++] = Am
          }
          return Tm
        }
      },
      37785: (mm, Tm) => {
        function fm(mm) {
          var Tm = 32;
          return (mm &= -mm) && Tm--, 65535 & mm && (Tm -= 16), 16711935 & mm && (Tm -= 8), 252645135 & mm && (Tm -= 4), 858993459 & mm && (Tm -= 2), 1431655765 & mm && (Tm -= 1), Tm
        }
        Tm.INT_BITS = 32, Tm.INT_MAX = 2147483647, Tm.INT_MIN = -1 << 31, Tm.sign = function(mm) {
          return (mm > 0) - (mm < 0)
        }, Tm.abs = function(mm) {
          var Tm = mm >> 31;
          return (mm ^ Tm) - Tm
        }, Tm.min = function(mm, Tm) {
          return Tm ^ (mm ^ Tm) & -(mm < Tm)
        }, Tm.max = function(mm, Tm) {
          return mm ^ (mm ^ Tm) & -(mm < Tm)
        }, Tm.isPow2 = function(mm) {
          return !(mm & mm - 1) && !!mm
        }, Tm.log2 = function(mm) {
          var Tm, fm;
          return Tm = (mm > 65535) << 4, Tm |= fm = ((mm >>>= Tm) > 255) << 3, Tm |= fm = ((mm >>>= fm) > 15) << 2, (Tm |= fm = ((mm >>>= fm) > 3) << 1) | (mm >>>= fm) >> 1
        }, Tm.log10 = function(mm) {
          return mm >= 1e9 ? 9 : mm >= 1e8 ? 8 : mm >= 1e7 ? 7 : mm >= 1e6 ? 6 : mm >= 1e5 ? 5 : mm >= 1e4 ? 4 : mm >= 1e3 ? 3 : mm >= 100 ? 2 : mm >= 10 ? 1 : 0
        }, Tm.popCount = function(mm) {
          return 16843009 * ((mm = (858993459 & (mm -= mm >>> 1 & 1431655765)) + (mm >>> 2 & 858993459)) + (mm >>> 4) & 252645135) >>> 24
        }, Tm.countTrailingZeros = fm, Tm.nextPow2 = function(mm) {
          return mm += 0 === mm, --mm, mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) + 1
        }, Tm.prevPow2 = function(mm) {
          return mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) - (mm >>> 1)
        }, Tm.parity = function(mm) {
          return mm ^= mm >>> 16, mm ^= mm >>> 8, mm ^= mm >>> 4, 27030 >>> (mm &= 15) & 1
        };
        var hm = new Array(256);
        ! function(mm) {
          for (var Tm = 0; Tm < 256; ++Tm) {
            var fm = Tm,
              hm = Tm,
              Am = 7;
            for (fm >>>= 1; fm; fm >>>= 1) hm <<= 1, hm |= 1 & fm, --Am;
            mm[Tm] = hm << Am & 255
          }
        }(hm), Tm.reverse = function(mm) {
          return hm[255 & mm] << 24 | hm[mm >>> 8 & 255] << 16 | hm[mm >>> 16 & 255] << 8 | hm[mm >>> 24 & 255]
        }, Tm.interleave2 = function(mm, Tm) {
          return (mm = 1431655765 & ((mm = 858993459 & ((mm = 252645135 & ((mm = 16711935 & ((mm &= 65535) | mm << 8)) | mm << 4)) | mm << 2)) | mm << 1)) | (Tm = 1431655765 & ((Tm = 858993459 & ((Tm = 252645135 & ((Tm = 16711935 & ((Tm &= 65535) | Tm << 8)) | Tm << 4)) | Tm << 2)) | Tm << 1)) << 1
        }, Tm.deinterleave2 = function(mm, Tm) {
          return (mm = 65535 & ((mm = 16711935 & ((mm = 252645135 & ((mm = 858993459 & ((mm = mm >>> Tm & 1431655765) | mm >>> 1)) | mm >>> 2)) | mm >>> 4)) | mm >>> 16)) << 16 >> 16
        }, Tm.interleave3 = function(mm, Tm, fm) {
          return mm = 1227133513 & ((mm = 3272356035 & ((mm = 251719695 & ((mm = 4278190335 & ((mm &= 1023) | mm << 16)) | mm << 8)) | mm << 4)) | mm << 2), (mm |= (Tm = 1227133513 & ((Tm = 3272356035 & ((Tm = 251719695 & ((Tm = 4278190335 & ((Tm &= 1023) | Tm << 16)) | Tm << 8)) | Tm << 4)) | Tm << 2)) << 1) | (fm = 1227133513 & ((fm = 3272356035 & ((fm = 251719695 & ((fm = 4278190335 & ((fm &= 1023) | fm << 16)) | fm << 8)) | fm << 4)) | fm << 2)) << 2
        }, Tm.deinterleave3 = function(mm, Tm) {
          return (mm = 1023 & ((mm = 4278190335 & ((mm = 251719695 & ((mm = 3272356035 & ((mm = mm >>> Tm & 1227133513) | mm >>> 2)) | mm >>> 4)) | mm >>> 8)) | mm >>> 16)) << 22 >> 22
        }, Tm.nextCombination = function(mm) {
          var Tm = mm | mm - 1;
          return Tm + 1 | (~Tm & -~Tm) - 1 >>> fm(mm) + 1
        }
      },
      39789: (mm, Tm, fm) => {
        fm.d(Tm, {
          c: () => pT
        });
        var hm = fm(39812),
          Am = fm(39802),
          am = fm(39880);

        function xm(mm) {
          let Tm = 2166136261;
          for (let fm = 0; fm < mm.length; fm++) Tm = Math.imul(Tm ^ mm.charCodeAt(fm), 16777619);
          return Tm
        }

        function wm(mm) {
          return xm(`${mm}Wasteland`)
        }

        function Dm(mm, Tm, fm) {
          let hm = Math.imul(mm, 668265261) ^ Math.imul(Tm, 374761393) ^ fm;
          return hm = Math.imul(hm ^ hm >>> 15, 2246822507), hm = Math.imul(hm ^ hm >>> 13, 3266489909), hm ^= hm >>> 16, (hm >>> 0) / 4294967296
        }

        function im(mm, Tm, fm, hm) {
          return Dm(mm, fm, hm ^ Math.imul(Tm, 1540483477))
        }
        const Rm = {
          dustFlats: 30,
          scorchedMesa: 18,
          shatteredHighlands: 14,
          ruinFields: 12,
          saltFlats: 7,
          survivorGrove: 5
        };
        const pm = .3,
          Em = 528734635,
          om = {
            dustFlats: .75,
            scorchedMesa: pm,
            shatteredHighlands: pm,
            ruinFields: pm,
            saltFlats: pm,
            survivorGrove: 0
          };

        function Om(mm, Tm, fm) {
          return Dm(mm, Tm, fm ^ Em)
        }

        function Ym(mm, Tm, fm, hm) {
          return 36 * (1 === hm ? mm : Tm) + 2 + Math.floor(32 * Dm(mm, Tm, fm ^ Em ^ hm))
        }
        var qm = fm(39797),
          jm = fm(39805);
        const Vm = 160,
          Im = 10,
          Km = 3 * (Math.ceil(50 / 6) + 1) + 2 + Im,
          Qm = .9238795325112867,
          nm = .7071067811865476,
          Jm = .3826834323650898,
          cm = [
            [1, 0],
            [Qm, Jm],
            [nm, nm],
            [Jm, Qm]
          ].flatMap((mm => {
            let [Tm, fm] = mm;
            return [
              [Tm, fm],
              [-fm, Tm],
              [-Tm, -fm],
              [fm, -Tm]
            ]
          }));
        let zm = null,
          Zm = null,
          km = 0;

        function bm(mm, Tm, fm) {
          ! function(mm) {
            mm !== zm && (zm = mm, Zm = (0, qm.g)(mm), km = wm(mm))
          }(mm);
          const hm = 625341585 ^ km,
            Am = Vm - 2 * Km,
            am = Tm * Vm + Km + Math.floor(Dm(Tm, fm, 1 ^ hm) * Am),
            xm = fm * Vm + Km + Math.floor(Dm(Tm, fm, 2 ^ hm) * Am),
            im = Math.round(-8 + Zm.getOctaves(am, xm)),
            Rm = -46 + Math.floor(7 * Dm(Tm, fm, 3 ^ hm)),
            pm = im - Rm;
          if (pm < 20 || pm > 50) return null;
          const Em = Math.ceil(pm / 6);
          return {
            x: am,
            z: xm,
            topY: im,
            floorY: Rm,
            turns: Em,
            pitch: pm / Em,
            radius: 3 * (Em + 1) + 2
          }
        }

        function Sm(mm, Tm, fm, hm) {
          const Am = bm(mm, Tm, fm);
          if (!Am || "saltFlats" !== hm(Am.x, Am.z)) return null;
          const am = Am.radius + Im + 2;
          for (const [xm, wm] of cm)
            for (const mm of [am, am / 2])
              if ("saltFlats" !== hm(Math.round(Am.x + xm * mm), Math.round(Am.z + wm * mm))) return null;
          return Am
        }

        function em(mm, Tm, fm, hm) {
          const Am = Tm - mm.x,
            am = fm - mm.z,
            xm = Math.sqrt(Am * Am + am * am);
          if (xm >= mm.radius + Im) return null;
          if (xm >= mm.radius) {
            const Tm = xm - mm.radius,
              fm = Math.floor(Tm),
              Am = Math.min(Math.max(hm, mm.topY - fm), mm.topY + fm);
            return Am + Math.round((hm - Am) * Tm / Im)
          }
          const wm = function(mm, Tm) {
              const fm = Math.abs(mm),
                hm = Math.abs(Tm);
              if (0 === fm && 0 === hm) return 0;
              const Am = Math.min(fm, hm) / Math.max(fm, hm);
              let am = Am * (Math.PI / 4 + .273 * (1 - Am)) / (2 * Math.PI);
              return hm > fm && (am = .25 - am), mm < 0 && (am = .5 - am), Tm < 0 ? 1 - am : am
            }(Am, am),
            Dm = (mm.radius - xm) / 3 - wm,
            im = Math.floor(Dm);
          if (im < 0) return mm.topY;
          if (im >= mm.turns) return mm.floorY;
          const Rm = 3 * (Dm - im) >= 2 ? 1 : 0;
          return Math.round(mm.topY - mm.pitch * (im + wm)) + Rm
        }

        function Nm(mm, Tm, fm) {
          const hm = mm.radius + Im,
            Am = Tm - mm.x,
            am = fm - mm.z;
          return Am * Am + am * am < hm * hm
        }
        const Gm = ["White Baked Clay", "Clay", "Sand", "Light Gray Baked Clay", "Clay", "White Baked Clay", "Andesite", "Light Gray Baked Clay", "Stone", "Andesite", "Stone"],
          Xm = ["Chalk", "Sand", "Clay"],
          Pm = -40,
          Hm = -20,
          ym = .05;
        class Cm {
          constructor(mm, Tm, fm, hm) {
            this.seed = mm, this.fine = fm, this.lookAt = hm, this.salt = void 0, this.cells = new Map, this.lastCellX = NaN, this.lastCellZ = NaN, this.lastHole = null, this.upperBandIds = void 0, this.bandIds = void 0, this.copperId = void 0, this.clayId = void 0, this.gravelId = void 0, this.salt = wm(mm);
            const Am = mm => Tm[mm].id;
            this.upperBandIds = Xm.map(Am), this.bandIds = Gm.map(Am), this.copperId = Am("Copper Ore"), this.clayId = Am("Clay"), this.gravelId = Am("Gravel")
          }
          carveGround(mm, Tm, fm) {
            const hm = this.cellHole(mm, Tm);
            return hm ? em(hm, mm, Tm, fm) : null
          }
          taking(mm, Tm) {
            const fm = this.cellHole(mm, Tm);
            return fm && Nm(fm, mm, Tm) ? fm : null
          }
          clearsPrefab(mm, Tm, fm, hm, Am) {
            const am = fm + Km;
            for (let xm = Math.floor((mm - am) / Vm); xm <= Math.floor((mm + am) / Vm); xm++)
              for (let wm = Math.floor((Tm - am) / Vm); wm <= Math.floor((Tm + am) / Vm); wm++) {
                const am = this.holeIn(xm, wm);
                if (am && Am >= am.floorY - jm.f && hm <= am.topY + Im) {
                  const hm = am.radius + Im + fm;
                  if ((am.x - mm) ** 2 + (am.z - Tm) ** 2 < hm * hm) return !1
                }
              }
            return !0
          }
          wallBlock(mm, Tm, fm, hm) {
            const Am = this.taking(mm, fm);
            if (!Am || hm >= Am.topY) return 0;
            if (Tm === hm && Tm <= Am.floorY) return this.fine(mm, fm) > .2 ? this.clayId : this.gravelId;
            if (Tm >= Pm && Tm <= Hm && im(mm, Tm, fm, 1779033703 ^ this.salt) < ym) return this.copperId;
            const am = Math.floor((-10 - Tm - Math.round(this.fine(mm, fm))) / 3);
            return am < 0 ? this.upperBandIds[-am % this.upperBandIds.length] : this.bandIds[Math.min(am, this.bandIds.length - 1)]
          }
          cellHole(mm, Tm) {
            return this.holeIn(Math.floor(mm / Vm), Math.floor(Tm / Vm))
          }
          holeIn(mm, Tm) {
            if (mm === this.lastCellX && Tm === this.lastCellZ) return this.lastHole;
            const fm = 65536 * mm + Tm;
            let hm = this.cells.get(fm);
            return void 0 === hm && (this.cells.size >= 4096 && this.cells.clear(), hm = Sm(this.seed, mm, Tm, this.lookAt), this.cells.set(fm, hm)), this.lastCellX = mm, this.lastCellZ = Tm, this.lastHole = hm, hm
          }
        }
        var rm = fm(39828);
        const sm = new Set(["rock", "rubble", "dryCactus", "bone"]);
        class lm {
          constructor(mm, Tm, fm, hm, Am, am) {
            this.MO = Tm, this.chances = Am, this.mound = am, this.order = ["deadBush", "rock", "rubble", "dryCactus", "bone", "grass", "tallGrass"], this.ids = void 0, this.salt = void 0, this.sinkholes = void 0, this.salt = fm.salt ^ xm(hm), this.sinkholes = fm.sinkholes;
            const wm = Tm => mm[Tm].id;
            this.ids = {
              deadBush: wm("Dead Bush"),
              rock1: wm("Andesite"),
              rock2: wm("Stone"),
              rock3: wm("Messy Stone"),
              rubble1: wm("Mossy Messy Stone"),
              rubble2: wm("Cracked Stone Bricks"),
              rubble3: wm("Messy Stone"),
              dryCactus: wm("Dry Fat Cactus"),
              bone: wm("Bone Block"),
              grass: wm("Grass"),
              tallGrass: wm("Tall Grass"),
              tallGrassTop: wm("Tall Grass|Top")
            }
          }
          addBiomeFloraToColumn(mm, Tm, fm, hm, Am, am, xm) {
            const wm = this.mound(hm, am);
            if (wm) {
              const Dm = xm + 1 - Am;
              for (let Am = 0; Am < wm.height && Dm + Am < this.MO; Am++) Dm + Am >= 0 && mm.set(hm - Tm, Dm + Am, am - fm, wm.block);
              return
            }
            const im = Dm(hm, am, this.salt);
            let Rm = 0;
            for (const Em of this.order) {
              var pm;
              if (Rm += null !== (pm = this.chances[Em]) && void 0 !== pm ? pm : 0, im < Rm) return void(sm.has(Em) && this.sinkholes.taking(hm, am) || this.place(mm, hm - Tm, xm + 1 - Am, am - fm, Em, Dm(hm, am, 1540483477 ^ this.salt)))
            }
          }
          place(mm, Tm, fm, hm, Am, am) {
            const xm = (Am, am) => {
                fm + Am >= 0 && fm + Am < this.MO && mm.set(Tm, fm + Am, hm, am)
              },
              wm = this.ids;
            if ("rock" === Am) {
              const mm = am < .5 ? wm.rock1 : am < .8 ? wm.rock2 : wm.rock3;
              xm(0, mm), am < .3 && xm(1, mm)
            } else "rubble" === Am ? xm(0, am < .55 ? wm.rubble1 : am < .75 ? wm.rubble2 : wm.rubble3) : "dryCactus" === Am ? (xm(0, wm.dryCactus), am < .5 && xm(1, wm.dryCactus)) : "tallGrass" === Am ? (xm(0, wm.tallGrass), xm(1, wm.tallGrassTop)) : xm(0, wm[Am])
          }
        }
        class Mm extends rm.h {
          constructor(mm, Tm, fm, hm, Am, am) {
            super(mm, Tm, fm, hm, Am, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null), this.noise = am, this.grassChance = 0, this.tallGrassChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = null, this.maxFloraHeight = 3, this.waterKept = .25, this.maxSurfacePrefabRelief = 6, this.floraChances = void 0, this.canyonStrength = 1, this.canyonDepth = 26, this.outcropChance = void 0, this.ids = void 0;
            const xm = {};
            for (const wm of ["Dry Grass Block", "Overgrown Dry Grass Block", "Grass Block", "Dirt", "Messy Dirt", "Rocky Dirt", "Gravel", "Sand", "Red Sand", "Clay", "Chalk", "Stone", "Andesite", "Messy Stone", "Mossy Messy Stone", "Cracked Stone Bricks", "Baked Clay", "Orange Baked Clay", "Brown Baked Clay", "Red Baked Clay", "Yellow Baked Clay", "Light Gray Baked Clay", "White Baked Clay", "Copper Ore", "Gold Ore", "Coal Ore", "Iron Ore"]) xm[wm] = Tm[wm].id;
            this.ids = xm, this.lowsoilBlockType = xm.Dirt
          }
          init() {
            super.init(), this.floraGenerator = new lm(this.blockMetadata, this.MO, this.noise, this.seed, this.floraChances, ((mm, Tm) => this.mound(mm, Tm)))
          }
          getHeightmapVal(mm, Tm) {
            const fm = this.getGroundHeight(mm, Tm);
            return this.canyonStrength > 0 ? fm - this.canyonStrength * this.canyonDepth * this.noise.canyonDepth(mm, Tm) : fm
          }
          carveGround(mm, Tm, fm) {
            return this.noise.sinkholes.carveGround(mm, Tm, fm)
          }
          allowsPrefab(mm, Tm, fm, hm, Am) {
            return this.noise.sinkholes.clearsPrefab(mm, Tm, fm, hm, Am)
          }
          getTopsoilBlock(mm, Tm, fm) {
            const hm = this.noise.sinkholes.wallBlock(mm, Tm, fm, Tm);
            return hm || (this.outcropDistance(mm, fm) <= 2 ? function(mm, Tm, fm, hm) {
              return im(mm, Tm, fm, hm ^ Em) < .85
            }(mm, Tm, fm, this.noise.salt) ? this.ids["Copper Ore"] : this.ids.Andesite : this.soilTop(mm, Tm, fm))
          }
          soilTop(mm, Tm, fm) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(mm, Tm, fm, hm) {
            const Am = this.noise.sinkholes.wallBlock(mm, Tm, fm, hm);
            return Am || (Tm >= hm - 2 && this.outcropDistance(mm, fm) <= 1 ? this.ids["Copper Ore"] : this.soilBelow(mm, Tm, fm, hm))
          }
          soilBelow(mm, Tm, fm, hm) {
            return this.copperSeam(mm, Tm, fm) || this.lowsoilBlockType
          }
          outcropDistance(mm, Tm) {
            const fm = function(mm, Tm, fm, hm) {
              const Am = Math.floor(mm / 36),
                am = Math.floor(Tm / 36);
              return Om(Am, am, fm) >= hm ? 1 / 0 : Math.abs(mm - Ym(Am, am, fm, 1)) + Math.abs(Tm - Ym(Am, am, fm, 2))
            }(mm, Tm, this.noise.salt, this.outcropChance);
            return fm <= 2 && this.noise.sinkholes.taking(mm, Tm) ? 1 / 0 : fm
          }
          mound(mm, Tm) {
            const fm = function(mm, Tm, fm, hm) {
              return 0 === hm || 1 === hm && Dm(mm, Tm, fm ^ Em ^ 3) < .5 ? 2 - hm : 0
            }(mm, Tm, this.noise.salt, this.outcropDistance(mm, Tm));
            return fm > 0 ? {
              block: this.ids["Copper Ore"],
              height: fm
            } : null
          }
          copperSeam(mm, Tm, fm) {
            return function(mm, Tm, fm, hm, Am) {
              const am = 1013904242 ^ hm;
              if ((7 & Tm) !== (7 & am) || im(mm >> 3, Tm, fm >> 3, am) >= .5) return !1;
              const xm = Am(mm, fm);
              return xm > .05 && xm < .95 && im(mm, Tm, fm, am) < .75
            }(mm, Tm, fm, this.noise.salt, ((mm, Tm) => this.noise.canyonDepth(mm, Tm))) ? this.ids["Copper Ore"] : 0
          }
          getDryBedBlock(mm, Tm, fm) {
            const hm = this.noise.patch(mm + 900, fm);
            return hm > .45 ? this.ids.Sand : hm < -.6 ? this.ids.Clay : this.ids.Gravel
          }
        }

        function um(mm) {
          return mm < 0 ? 0 : mm > 1 ? 1 : mm
        }
        class Bm {
          constructor(mm, Tm, fm) {
            this.salt = void 0, this.sinkholes = void 0, this.canyon = void 0, this.canyonWarp = void 0, this.canyonMask = void 0, this.patchNoise = void 0, this.fineNoise = void 0, this.canyonAtX = NaN, this.canyonAtZ = NaN, this.canyonAt = 0, this.salt = wm(mm), this.sinkholes = new Cm(mm, Tm, ((mm, Tm) => this.fine(mm, Tm)), ((mm, Tm) => {
              return hm = fm(mm, Tm), Object.hasOwn(Rm, hm.key) ? hm.key : null;
              var hm
            })), this.canyon = new Am.j([{
              amplitude: 1,
              frequency: 1 / 260
            }], `${mm}WastelandCanyon`), this.canyonWarp = new Am.j([{
              amplitude: 28,
              frequency: 1 / 90
            }], `${mm}WastelandCanyonWarp`), this.canyonMask = new Am.j([{
              amplitude: 1,
              frequency: 1 / 650
            }], `${mm}WastelandCanyonMask`), this.patchNoise = new Am.j([{
              amplitude: 1,
              frequency: 1 / 48
            }, {
              amplitude: .4,
              frequency: 1 / 14
            }], `${mm}WastelandPatch`), this.fineNoise = new Am.j([{
              amplitude: .75,
              frequency: 1 / 16
            }, {
              amplitude: .25,
              frequency: .2
            }], `${mm}WastelandFine`)
          }
          canyonDepth(mm, Tm) {
            if (mm === this.canyonAtX && Tm === this.canyonAtZ) return this.canyonAt;
            let fm = 0;
            const hm = um(2.5 * (this.canyonMask.getOctaves(mm, Tm) + .15));
            if (hm > 0) {
              const Am = Math.abs(this.canyon.getOctaves(mm + this.canyonWarp.getOctaves(mm, Tm), Tm + this.canyonWarp.getOctaves(mm + 311, Tm - 173))),
                am = .09 * hm;
              if (Am < am) {
                const mm = um((am - Am) / (.45 * am));
                fm = mm * mm * (3 - 2 * mm)
              }
            }
            return this.canyonAtX = mm, this.canyonAtZ = Tm, this.canyonAt = fm, fm
          }
          patch(mm, Tm) {
            return this.patchNoise.getOctaves(mm, Tm)
          }
          fine(mm, Tm) {
            return this.fineNoise.getOctaves(mm, Tm)
          }
        }
        var Lm = fm(4184),
          tm = fm(653),
          Um = fm(39269),
          dm = fm(39821);
        const gm = "oldWorks";

        function Wm(mm) {
          return Uint8Array.from(atob(mm), (mm => mm.charCodeAt(0)))
        }
        let Fm = null;

        function mT() {
          return Fm ??= function() {
            const mm = new Um.c;
            return mm.set(0, 0, 0, Wm("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")), mm.set(0, 1, 0, Wm("isgBAAOAAR0AA4ABHQADgAEdAAOAAR0AAYABAlYdAAJWAYABHQADVh4AAYABngYAAYABAX8BgAEdAAGAAQF/AYABHQABgAEBfwGAAR0AAYABAX8BgAEdAAGAAQF/AVYdAAFWAX8BgAEdAAFWAX8eAAFWAX8BVp0GAAOAAR0AA4ABHQADgAEdAAOAAR0AA1YdAAGAAQJWHQADgAEeAAFWlCYA")), new dm.b(gm, {
              x: 0,
              y: 0,
              z: 0
            }, {
              x: 29,
              y: 40,
              z: 29
            }, mm)
          }(), Fm
        }
        const TT = 3,
          fT = 6,
          hT = {
            name: gm,
            get schematic() {
              return mT()
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
              qualityDistribution: new Lm.i([{
                value: tm.h.UNCOMMON,
                weight: 1
              }, {
                value: tm.h.RARE,
                weight: 2
              }, {
                value: tm.h.EPIC,
                weight: 1
              }])
            }],
            spawnerBlockLocations: [{
              localX: 10,
              localY: 2,
              localZ: 16,
              mobTypeDistribution: new Lm.i([{
                value: "Draugr Zombie",
                weight: 1
              }])
            }]
          };

        function AT(mm, Tm, fm) {
          return (0, rm.jb)(mm, [{
            prefab: hT,
            frequency: fm
          }, ...rm.f.map((mm => ({
            prefab: mm,
            frequency: Tm
          })))])
        }
        class aT extends Mm {
          constructor(mm, Tm, fm, am, xm, wm) {
            super(mm, Tm, fm, `${am}DustFlats`, xm, wm, AT(hm.m.MEDIUM, 1.25, TT)), this.key = "dustFlats", this.floraChances = {
              deadBush: .012,
              rock: .0015,
              bone: 2e-4
            }, this.deadTreeChance = 3, this.fallenLogChance = 1, this.outcropChance = om.dustFlats, this.height = void 0, this.treeMinDist = 20, this.topsoilBlockType = this.ids["Dry Grass Block"], this.height = new Am.j([{
              amplitude: 5,
              frequency: 1 / 90
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${am}DustFlatsHeight`)
          }
          getGroundHeight(mm, Tm) {
            return -2 + this.height.getOctaves(mm, Tm)
          }
          soilTop(mm, Tm, fm) {
            const hm = this.noise.patch(mm, fm);
            if (hm > .45) return this.ids.Gravel;
            if (hm < -.55) return this.ids.Sand;
            const Am = this.noise.fine(mm, fm);
            return Am > .3 ? this.ids["Messy Dirt"] : Am < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
        }
        class xT extends Mm {
          constructor(mm, Tm, fm, hm, am, xm) {
            super(mm, Tm, fm, `${hm}ScorchedMesa`, am, xm), this.key = "scorchedMesa", this.floraChances = {
              deadBush: .015,
              dryCactus: .0012,
              rock: 8e-4
            }, this.outcropChance = om.scorchedMesa, this.deadTreeChance = 1, this.strataDepth = 90, this.canyonStrength = 1.3, this.height = void 0, this.bandPalette = void 0, this.treeMinDist = 45, this.topsoilBlockType = this.ids["Red Sand"], this.lowsoilBlockType = this.ids["Orange Baked Clay"], this.height = new Am.j([{
              amplitude: 40,
              frequency: 1 / 300
            }, {
              amplitude: 12,
              frequency: 1 / 80
            }], `${hm}ScorchedMesaHeight`);
            const wm = this.ids;
            this.bandPalette = [wm["Orange Baked Clay"], wm["Baked Clay"], wm["Orange Baked Clay"], wm["Brown Baked Clay"], wm["Red Baked Clay"], wm["Orange Baked Clay"], wm["Yellow Baked Clay"], wm["Baked Clay"], wm["Light Gray Baked Clay"], wm["Red Baked Clay"], wm["White Baked Clay"], wm["Brown Baked Clay"]]
          }
          getGroundHeight(mm, Tm) {
            const fm = this.height.getOctaves(mm, Tm) + 8;
            if (fm <= 6) return .6 * fm;
            const hm = (fm - 6) / 9,
              Am = Math.floor(hm);
            return 3.6 + 9 * (Am + um((hm - Am - .7) / .3)) * 1.5
          }
          soilTop(mm, Tm, fm) {
            return Tm >= 12 ? this.ids["Red Sand"] : this.noise.fine(mm, fm) > .45 ? this.ids["Messy Dirt"] : this.ids["Red Sand"]
          }
          soilBelow(mm, Tm, fm, hm) {
            return Tm >= hm - 1 ? this.ids["Red Sand"] : this.getStrataBlock(mm, Tm, fm, hm) || this.lowsoilBlockType
          }
          getStrataBlock(mm, Tm, fm, hm) {
            if (Tm < -8) return 0;
            const Am = this.noise.patch(.25 * mm, .25 * fm),
              am = Math.floor((Tm + 4 * Am) / 3);
            return function(mm, Tm, fm, hm, Am, am, xm) {
              const wm = 1541459225 ^ hm;
              return Am > .15 && Tm >= xm - 16 && Dm(am, 1, wm) < .25 && im(mm, Tm, fm, wm) < .06
            }(mm, Tm, fm, this.noise.salt, Am, am, hm) ? this.ids["Gold Ore"] : this.bandPalette[Math.floor(Dm(am, 0, this.noise.salt) * this.bandPalette.length)]
          }
          getDryBedBlock(mm, Tm, fm) {
            return this.ids["Red Sand"]
          }
        }
        class wT extends Mm {
          constructor(mm, Tm, fm, hm, am, xm) {
            super(mm, Tm, fm, `${hm}ShatteredHighlands`, am, xm), this.key = "shatteredHighlands", this.floraChances = {
              deadBush: .006,
              rock: .004
            }, this.outcropChance = om.shatteredHighlands, this.deadTreeChance = 2, this.fallenLogChance = 1, this.strataDepth = 24, this.canyonStrength = .3, this.ridge1 = void 0, this.ridge2 = void 0, this.bumps = void 0, this.treeMinDist = 30, this.topsoilBlockType = this.ids["Rocky Dirt"], this.ridge1 = new Am.j([{
              amplitude: 60,
              frequency: 1 / 240
            }], `${hm}HighlandsRidge1`), this.ridge2 = new Am.j([{
              amplitude: 25,
              frequency: 1 / 110
            }], `${hm}HighlandsRidge2`), this.bumps = new Am.j([{
              amplitude: 6,
              frequency: .02
            }], `${hm}HighlandsBumps`)
          }
          getGroundHeight(mm, Tm) {
            return 1.2 * (85 - Math.abs(this.ridge1.getOctaves(mm, Tm)) - Math.abs(this.ridge2.getOctaves(mm, Tm))) - 25 + this.bumps.getOctaves(mm, Tm)
          }
          soilTop(mm, Tm, fm) {
            const hm = this.noise.fine(mm, fm);
            return Tm > 58 ? hm > .35 ? this.ids.Gravel : hm < -.4 ? this.ids.Andesite : this.ids.Stone : Tm > 36 ? hm > .25 ? this.ids.Gravel : hm < -.45 ? this.ids.Stone : this.ids["Rocky Dirt"] : hm > .3 ? this.ids["Messy Dirt"] : hm < -.5 ? this.ids["Rocky Dirt"] : this.ids["Dry Grass Block"]
          }
          soilBelow(mm, Tm, fm, hm) {
            const Am = this.peakSeam(mm, Tm, fm);
            return 0 !== Am ? Am : Tm > 50 ? this.ids.Stone : Tm > 34 ? this.ids["Rocky Dirt"] : this.ids.Dirt
          }
          getStrataBlock(mm, Tm, fm, hm) {
            return this.peakSeam(mm, Tm, fm)
          }
          peakSeam(mm, Tm, fm) {
            const hm = function(mm, Tm, fm, hm) {
              if (Tm <= 40 || Tm % 3 !== 0) return null;
              const Am = 2600822924 ^ hm,
                am = Dm(Tm, 0, Am),
                xm = am < .4 ? "Coal Ore" : am < .7 ? "Iron Ore" : null;
              return null === xm || im(mm >> 2, Tm, fm >> 2, Am) >= .25 ? null : im(mm, Tm, fm, Am) < .65 ? xm : null
            }(mm, Tm, fm, this.noise.salt);
            return hm ? this.ids[hm] : 0
          }
        }
        class DT extends Mm {
          constructor(mm, Tm, fm, am, xm, wm) {
            super(mm, Tm, fm, `${am}RuinFields`, xm, wm, AT(hm.m.HIGH, 2.25, fT)), this.key = "ruinFields", this.floraChances = {
              deadBush: .02,
              rubble: .008,
              rock: .001,
              bone: 3e-4
            }, this.outcropChance = om.ruinFields, this.deadTreeChance = 3, this.fallenLogChance = 2, this.canyonStrength = .45, this.height = void 0, this.treeMinDist = 12, this.topsoilBlockType = this.ids["Overgrown Dry Grass Block"], this.height = new Am.j([{
              amplitude: 3,
              frequency: 1 / 80
            }, {
              amplitude: 1.5,
              frequency: .04
            }], `${am}RuinFieldsHeight`)
          }
          getGroundHeight(mm, Tm) {
            return -3 + this.height.getOctaves(mm, Tm)
          }
          soilTop(mm, Tm, fm) {
            const hm = Dm(mm, fm, 461845907 ^ this.noise.salt);
            return hm < .05 ? this.ids["Mossy Messy Stone"] : hm < .08 ? this.ids["Messy Stone"] : hm < .09 ? this.ids["Cracked Stone Bricks"] : this.noise.fine(mm, fm) > -.1 ? this.ids["Overgrown Dry Grass Block"] : this.ids["Dry Grass Block"]
          }
        }
        class iT extends Mm {
          constructor(mm, Tm, fm, hm, am, xm) {
            super(mm, Tm, fm, `${hm}SaltFlats`, am, xm), this.key = "saltFlats", this.floraChances = {
              deadBush: .002,
              bone: 6e-4
            }, this.outcropChance = om.saltFlats, this.canyonStrength = 0, this.strataDepth = 6, this.height = void 0, this.treeMinDist = null, this.topsoilBlockType = this.ids.Chalk, this.lowsoilBlockType = this.ids.Sand, this.height = new Am.j([{
              amplitude: 1.5,
              frequency: 1 / 120
            }, {
              amplitude: .6,
              frequency: .05
            }], `${hm}SaltFlatsHeight`)
          }
          getGroundHeight(mm, Tm) {
            return -8 + this.height.getOctaves(mm, Tm)
          }
          soilTop(mm, Tm, fm) {
            const hm = this.noise.patch(mm, fm);
            return hm > .5 ? this.ids.Sand : hm < -.55 ? this.ids.Clay : this.ids.Chalk
          }
          soilBelow(mm, Tm, fm, hm) {
            return Tm >= hm - 2 ? this.ids.Sand : this.ids.Clay
          }
          getStrataBlock(mm, Tm, fm, hm) {
            return this.noise.sinkholes.wallBlock(mm, Tm, fm, hm)
          }
        }
        class RT extends Mm {
          constructor(mm, Tm, fm, hm, am, xm) {
            super(mm, Tm, fm, `${hm}SurvivorGrove`, am, xm), this.key = "survivorGrove", this.floraChances = {
              grass: .12,
              tallGrass: .015,
              deadBush: .004
            }, this.mapleTreeChance = 6, this.deadTreeChance = 1, this.canyonStrength = .3, this.outcropChance = om.survivorGrove, this.height = void 0, this.treeMinDist = 9, this.topsoilBlockType = this.ids["Grass Block"], this.height = new Am.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${hm}SurvivorGroveHeight`)
          }
          getGroundHeight(mm, Tm) {
            return -3 + this.height.getOctaves(mm, Tm)
          }
          soilTop(mm, Tm, fm) {
            return this.noise.fine(mm, fm) < -.6 ? this.ids["Dry Grass Block"] : this.ids["Grass Block"]
          }
          getDryBedBlock(mm, Tm, fm) {
            return this.ids.Dirt
          }
        }
        const pT = {
          buildBiomes: function(mm) {
            let {
              MO: Tm,
              blockMetadata: fm,
              worldGenerator: hm,
              seed: Am,
              biomeOpts: xm,
              biomeAt: wm
            } = mm;
            const Dm = [Tm, fm, hm, Am, xm, new Bm(Am, fm, wm)],
              im = {
                dustFlats: new aT(...Dm),
                scorchedMesa: new xT(...Dm),
                shatteredHighlands: new wT(...Dm),
                ruinFields: new DT(...Dm),
                saltFlats: new iT(...Dm),
                survivorGrove: new RT(...Dm)
              },
              pm = (0, am.f)(fm);
            return Object.keys(Rm).map((mm => ({
              biome: im[mm],
              frequency: Rm[mm],
              altBiome: null,
              ...pm
            })))
          }
        }
      },
      637: (mm, Tm, fm) => {
        fm.d(Tm, {
          c: () => hm
        });
        class hm {
          constructor(mm, Tm) {
            this.keyToValueTable = mm, this.valueToKeyTable = void 0;
            const fm = {};
            for (const hm in this.keyToValueTable) {
              const mm = this.keyToValueTable[hm];
              if (void 0 !== fm[mm]) throw new Error(`Duplicate value found in bi-directional table: ${String(mm)}`);
              fm[mm] = "string" === Tm ? hm : Number(hm)
            }
            this.valueToKeyTable = fm
          }
          get(mm) {
            return this.keyToValueTable[mm]
          }
          reverseGet(mm) {
            return this.valueToKeyTable[mm]
          }
        }
      },
      39821: (mm, Tm, fm) => {
        fm.d(Tm, {
          b: () => Am
        });
        var hm = fm(39269);
        class Am {
          constructor(mm, Tm, fm, Am) {
            let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new hm.c,
              xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                x: 0,
                y: 0,
                z: 0
              },
              wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              Dm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            this.name = mm, this.startOffset = Tm, this.dimensions = fm, this.rleChunkStorage = Am, this.blockData = am, this.pasteOffset = xm, this.lobbyCode = wm, this.disjoint = Dm
          }
          getRLEChunk(mm, Tm, fm) {
            return this.rleChunkStorage.get(mm, Tm, fm)
          }
          getNumRLEChunks() {
            return this.rleChunkStorage.getNumItems()
          }* getRLECoords() {
            const mm = [0, 0, 0];
            for (const {
                x: Tm,
                y: fm,
                z: hm
              }
              of this.rleChunkStorage) mm[0] = Tm, mm[1] = fm, mm[2] = hm, yield mm
          }
        }
      },
      39269: (mm, Tm, fm) => {
        fm.d(Tm, {
          c: () => hm
        });
        class hm {
          constructor() {
            this.storage = new Map, this.zeroStorage = new Map, this.mutationCountMask = 2147483647, this.mutationCount = 0, this.itemCount = 0, this.hasBoxes = !1
          }
          set(mm, Tm, fm, hm) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const xm = 1023 & mm | (1023 & Tm) << 10 | (1023 & fm) << 20;
            let wm = hm;
            if (Am(mm) && Am(Tm) && Am(fm) || (wm = new am(mm, Tm, fm, hm), this.hasBoxes = !0), Math.abs(mm) < 512 && Math.abs(Tm) < 512 && Math.abs(fm) < 512) {
              const mm = this.unbox(this.zeroStorage.get(xm));
              return this.zeroStorage.has(xm) || this.itemCount++, this.zeroStorage.set(xm, wm), mm
            }
            const Dm = mm >> 10 & 1023 | (Tm >> 10 & 1023) << 10 | (fm >> 10 & 1023) << 20;
            let im = this.storage.get(Dm);
            im || (im = new Map, this.storage.set(Dm, im));
            const Rm = this.unbox(im.get(xm));
            return im.has(xm) || this.itemCount++, im.set(xm, wm), Rm
          }
          get(mm, Tm, fm) {
            var hm;
            const Am = 1023 & mm | (1023 & Tm) << 10 | (1023 & fm) << 20;
            if (Math.abs(mm) < 512 && Math.abs(Tm) < 512 && Math.abs(fm) < 512) return this.unbox(this.zeroStorage.get(Am));
            const am = mm >> 10 & 1023 | (Tm >> 10 & 1023) << 10 | (fm >> 10 & 1023) << 20;
            return this.unbox(null === (hm = this.storage.get(am)) || void 0 === hm ? void 0 : hm.get(Am))
          }
          remove(mm, Tm, fm) {
            this.mutationCount = this.mutationCount + 1 & this.mutationCountMask;
            const hm = 1023 & mm | (1023 & Tm) << 10 | (1023 & fm) << 20;
            if (Math.abs(mm) < 512 && Math.abs(Tm) < 512 && Math.abs(fm) < 512) return void(this.zeroStorage.delete(hm) && this.itemCount--);
            const Am = mm >> 10 & 1023 | (Tm >> 10 & 1023) << 10 | (fm >> 10 & 1023) << 20,
              am = this.storage.get(Am);
            am && am.delete(hm) && this.itemCount--
          }
          removeBy(mm) {
            for (const {
                x: Tm,
                y: fm,
                z: hm,
                val: Am
              }
              of this.iterate(!0)) {
              mm(Tm, fm, hm, Am) && this.remove(Tm, fm, hm)
            }
          }
          unbox(mm) {
            return this.hasBoxes && wm(mm) ? mm.val : mm
          }* iterate(mm) {
            const Tm = this.mutationCount;
            for (const fm of Dm(this.zeroStorage)) {
              if (!this.zeroStorage.has(fm)) continue;
              const hm = this.zeroStorage.get(fm);
              if (this.hasBoxes && wm(hm) ? yield {
                  x: hm.x,
                  y: hm.y,
                  z: hm.z,
                  val: hm.val
                } : yield {
                  x: fm << 22 >> 22,
                  y: fm << 12 >> 22,
                  z: fm << 2 >> 22,
                  val: hm
                }, !mm && Tm !== this.mutationCount) throw new im
            }
            for (const fm of Dm(this.storage)) {
              const hm = this.storage.get(fm);
              if (hm)
                for (const Am of Dm(hm)) {
                  if (!hm.has(Am)) continue;
                  const am = hm.get(Am);
                  if (this.hasBoxes && wm(am) ? yield {
                      x: am.x,
                      y: am.y,
                      z: am.z,
                      val: am.val
                    } : yield {
                      x: ((1023 & fm) << 10 | 1023 & Am) << 12 >> 12,
                      y: ((fm >> 10 & 1023) << 10 | Am >> 10 & 1023) << 12 >> 12,
                      z: ((fm >> 20 & 1023) << 10 | Am >> 20 & 1023) << 12 >> 12,
                      val: am
                    }, !mm && Tm !== this.mutationCount) throw new im
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
            let mm = 0;
            for (const Tm of this.storage.values()) mm += Tm.size;
            return mm += this.zeroStorage.size, mm
          }
        }

        function Am(mm) {
          return mm << 12 >> 12 === mm && (0 !== mm || 1 / mm > 0)
        }
        class am {
          constructor(mm, Tm, fm, hm) {
            this.x = mm, this.y = Tm, this.z = fm, this.val = hm, xm.add(this)
          }
        }
        const xm = new WeakSet;

        function wm(mm) {
          return "object" === typeof mm && null !== mm && xm.has(mm)
        }

        function Dm(mm) {
          return Array.from(mm.keys()).sort(((mm, Tm) => mm - Tm))
        }
        class im extends Error {
          constructor() {
            super(`${hm.name} has been mutated during iteration`)
          }
        }
      },
      39875: (mm, Tm, fm) => {
        fm.d(Tm, {
          b: () => hm,
          e: () => xm
        });
        class hm {
          constructor(mm, Tm, fm) {
            var hm;
            this.name = mm, this.max = Tm, this.idleMs = fm, this.head = new wm(0, null, null), this.size = 0, this.epoch = 0, this.epochStartMs = Date.now(), this.hits = 0, this.misses = 0;
            const Am = setInterval((() => {
              this.dropIdleEntriesIfDue(Date.now())
            }), fm);
            null === (hm = Am.unref) || void 0 === hm || hm.call(Am)
          }
          setMax(mm) {
            for (this.max = mm; this.size > mm;) this.drop(this.head.prev)
          }
          partition() {
            return new Am(this)
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
          recordLookup(mm) {
            if (void 0 !== mm) return this.hits++, mm.epoch = this.epoch, this.head.next !== mm && (Dm(mm), this.linkFirst(mm)), mm.value;
            this.misses++
          }
          add(mm) {
            this.dropIdleEntriesIfDue(Date.now()), mm.epoch = this.epoch, this.linkFirst(mm), this.size++, this.size > this.max && this.drop(this.head.prev)
          }
          replace(mm, Tm) {
            Dm(mm), this.size--, this.add(Tm)
          }
          dropIdleEntriesIfDue(mm) {
            mm - this.epochStartMs >= this.idleMs && (this.dropEntriesIdleSince(this.epoch - 1), this.epoch++, this.epochStartMs = mm)
          }
          dropEntriesIdleSince(mm) {
            for (; this.size > 0 && this.head.prev.epoch < mm;) this.drop(this.head.prev)
          }
          drop(mm) {
            Dm(mm), mm.entries.delete(mm.key), this.size--
          }
          linkFirst(mm) {
            const Tm = this.head.next;
            mm.prev = this.head, mm.next = Tm, Tm.prev = mm, this.head.next = mm
          }
        }
        class Am {
          constructor(mm) {
            this.partitioner = mm, this.entries = new Map
          }
          get(mm, Tm) {
            return this.partitioner.recordLookup(this.entries.get(xm(mm, Tm)))
          }
          set(mm, Tm, fm) {
            const hm = xm(mm, Tm),
              Am = new wm(hm, fm, this.entries),
              am = this.entries.get(hm);
            this.entries.set(hm, Am), void 0 === am ? this.partitioner.add(Am) : this.partitioner.replace(am, Am)
          }
        }
        const am = 2 ** 25;

        function xm(mm, Tm) {
          return mm > -am && mm < am && Tm > -am && Tm < am ? mm * (2 * am) + Tm : `${mm}|${Tm}`
        }
        class wm {
          constructor(mm, Tm, fm) {
            this.key = mm, this.value = Tm, this.entries = fm, this.prev = this, this.next = this, this.epoch = 0
          }
        }

        function Dm(mm) {
          mm.prev.next = mm.next, mm.next.prev = mm.prev
        }
      },
      39823: (mm, Tm, fm) => {
        function hm(mm) {
          const Tm = atob(mm),
            fm = new Uint8Array(Tm.length);
          for (let hm = 0; hm < Tm.length; hm++) fm[hm] = Tm.charCodeAt(hm);
          return fm
        }
        fm.d(Tm, {
          c: () => hm
        })
      },
      39828: (mm, Tm, fm) => {
        fm.d(Tm, {
          e: () => Mm,
          f: () => Zm,
          h: () => Sm,
          i: () => tm,
          m: () => Um,
          p: () => mT,
          t: () => em,
          v: () => rm,
          z: () => Fm,
          C: () => Wm,
          D: () => um,
          F: () => Nm,
          J: () => ym,
          K: () => Gm,
          M: () => lm,
          Q: () => Bm,
          S: () => Pm,
          T: () => sm,
          W: () => Xm,
          Z: () => dm,
          bb: () => gm,
          eb: () => Lm,
          fb: () => Cm,
          ib: () => Hm,
          jb: () => bm
        });
        var hm = fm(39802),
          Am = fm(653),
          am = fm(39830),
          xm = fm(4184);
        class wm {
          constructor(mm, Tm, fm, hm, Am, wm, Dm, im, Rm, pm, Em, om, Om, Ym) {
            let {
              cactusChance: qm,
              maxCactusHeight: jm
            } = Om;
            this.columnRandom = new xm.k(""), this.flowerPatchRandom = new xm.k(""), this.cactusRandom = new xm.k(""), this.blockMetadata = void 0, this.seed = void 0, this.grassChance = void 0, this.tallGrassChance = void 0, this.cornChance = void 0, this.spectralGrassChance = void 0, this.pineGrassChance = void 0, this.pineFernChance = void 0, this.jungleTallGrassChance = void 0, this.catnipChance = void 0, this.autumnFernChance = void 0, this.cactusChance = void 0, this.maxCactusHeight = void 0, this.doFlowerGen = void 0, this.flowerInfos = void 0, this.totalFlowerPatchChance = void 0, this.flowerPatchPointGen = void 0, this.MO = void 0, this.maxPatchRadius = void 0, this.grassId = void 0, this.tallGrassId = void 0, this.tallGrassTopId = void 0, this.cornSeedsId = void 0, this.cornPlantId = void 0, this.spectralGrassId = void 0, this.pineGrassId = void 0, this.pineFernId = void 0, this.jungleTallGrassId = void 0, this.jungleTallGrassTopId = void 0, this.catnipId = void 0, this.autumnFernId = void 0, this.cactusId = void 0, this.fatCactusId = void 0, this.blockMetadata = mm, this.seed = fm, this.grassChance = hm, this.tallGrassChance = Am, this.cornChance = wm, this.spectralGrassChance = Dm, this.pineGrassChance = im, this.pineFernChance = Rm, this.jungleTallGrassChance = pm, this.catnipChance = Em, this.autumnFernChance = om, this.cactusChance = qm, this.maxCactusHeight = jm, this.MO = Tm, this.flowerInfos = [{
              flower: "Dandelion",
              patchChance: Ym.dandelionChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Poppy",
              patchChance: Ym.poppyChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Forget-me-not",
              patchChance: Ym.forgetMeNotChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Red Tulip",
              patchChance: Ym.redTulipChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Pink Tulip",
              patchChance: Ym.pinkTulipChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "White Tulip",
              patchChance: Ym.whiteTulipChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Orange Tulip",
              patchChance: Ym.orangeTulipChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Daisy",
              patchChance: Ym.daisyChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Allium",
              patchChance: Ym.alliumChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Shadow Rose",
              patchChance: Ym.shadowRoseChance,
              insidePatchSpawnChance: Ym.defaultFlowerInsidePatchSpawnChance,
              patchRadius: Ym.defaultFlowerPatchRadius
            }, {
              flower: "Bluebell",
              patchChance: Ym.bluebellChance,
              insidePatchSpawnChance: .85,
              patchRadius: 8
            }, {
              flower: "Fallen Maple Leaves",
              patchChance: Ym.fallenMapleLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fallen Cherry Leaves",
              patchChance: Ym.fallenCherryLeavesChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Melon",
              patchChance: Ym.melonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Watermelon",
              patchChance: Ym.watermelonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Pumpkin",
              patchChance: Ym.pumpkinChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Rice|FreshlyGrown",
              patchChance: Ym.riceChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cranberries_stage2",
              patchChance: Ym.cranberryChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Red Mushroom",
              patchChance: Ym.redMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Brown Mushroom",
              patchChance: Ym.brownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Red Mushroom",
              patchChance: Ym.fatRedMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Fat Brown Mushroom",
              patchChance: Ym.fatBrownMushroomChance,
              insidePatchSpawnChance: .5,
              patchRadius: 2
            }, {
              flower: "Cotton_stage3",
              patchChance: Ym.cottonChance,
              insidePatchSpawnChance: .5,
              patchRadius: 3
            }, {
              flower: "Chili Pepper Plant|FreshlyGrown",
              patchChance: Ym.chiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Chili Pepper Plant|Lava|FreshlyGrown",
              patchChance: Ym.lavaChiliPepperChance,
              insidePatchSpawnChance: .2,
              patchRadius: 5
            }, {
              flower: "Fallen Pine Cone",
              patchChance: Ym.fallenPineConeChance,
              insidePatchSpawnChance: .4,
              patchRadius: 3
            }], this.maxPatchRadius = 0;
            for (const {
                patchRadius: am
              }
              of this.flowerInfos) this.maxPatchRadius = Math.max(this.maxPatchRadius, am);
            this.totalFlowerPatchChance = 0;
            for (const {
                patchChance: am
              }
              of this.flowerInfos) this.totalFlowerPatchChance += am;
            this.doFlowerGen = null !== Ym.flowerPatchDistApart, this.doFlowerGen && (this.flowerPatchPointGen = new am.d("flwrPtch", Ym.flowerPatchDistApart, !1, !0, fm, 4, Tm)), this.grassId = mm.Grass.id, this.tallGrassId = mm["Tall Grass"].id, this.tallGrassTopId = mm["Tall Grass|Top"].id, this.cornSeedsId = mm["Corn Seeds|FreshlyGrown"].id, this.cornPlantId = mm["Corn Plant|FreshlyGrown"].id, this.spectralGrassId = mm["Spectral Grass"].id, this.pineGrassId = mm["Pine Grass"].id, this.pineFernId = mm["Pine Fern"].id, this.jungleTallGrassId = mm["Jungle Tall Grass"].id, this.jungleTallGrassTopId = mm["Jungle Tall Grass|Top"].id, this.catnipId = mm.Catnip.id, this.autumnFernId = mm["Autumn Fern"].id, this.cactusId = mm.Cactus.id, this.fatCactusId = mm["Fat Cactus"].id
          }
          addBiomeFloraToColumn(mm, Tm, fm, Am, am, xm, wm) {
            if (wm + 3 >= am && wm + 1 < am + this.MO) {
              const Dm = this.columnRandom;
              Dm.reseed(`${Am}${xm}${this.seed}flora`);
              const im = Dm.next();
              if (im < this.grassChance) {
                const hm = wm + 1 - am;
                0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.grassId)
              } else {
                if (im < this.grassChance + this.tallGrassChance) {
                  {
                    const hm = wm + 1 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.tallGrassId)
                  } {
                    const hm = wm + 2 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.tallGrassTopId)
                  }
                  return
                }
                if (im < this.grassChance + this.tallGrassChance + this.cornChance) {
                  {
                    const hm = wm + 1 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.cornSeedsId)
                  } {
                    const hm = wm + 2 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.cornPlantId)
                  } {
                    const hm = wm + 3 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.cornPlantId)
                  }
                  return
                }
                if (im < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance) {
                  const hm = wm + 1 - am;
                  0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.spectralGrassId)
                } else if (im < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance) {
                  const hm = wm + 1 - am;
                  0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.pineGrassId)
                } else if (im < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance) {
                  const hm = wm + 1 - am;
                  0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.pineFernId)
                } else {
                  if (im < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance) {
                    {
                      const hm = wm + 1 - am;
                      0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.jungleTallGrassId)
                    } {
                      const hm = wm + 2 - am;
                      0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.jungleTallGrassTopId)
                    }
                    return
                  }
                  if (im < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance) {
                    const hm = wm + 1 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.catnipId)
                  } else if (im < this.grassChance + this.tallGrassChance + this.cornChance + this.spectralGrassChance + this.pineGrassChance + this.pineFernChance + this.jungleTallGrassChance + this.catnipChance + this.autumnFernChance) {
                    const hm = wm + 1 - am;
                    0 <= hm && hm < this.MO && mm.set(Am - Tm, hm, xm - fm, this.autumnFernId)
                  }
                }
              }
              if (this.doFlowerGen && this.totalFlowerPatchChance > 0 && wm + 1 >= am) {
                const im = this.flowerPatchPointGen.getClosestPoint(Am, xm),
                  Rm = (0, hm.D)(im, Am, xm);
                if (Rm < this.maxPatchRadius) {
                  const hm = this.flowerPatchRandom;
                  hm.reseed(`${im[0]}${im[1]}${this.seed}flowerpatch`);
                  const pm = Math.floor(hm.next() * this.totalFlowerPatchChance);
                  let Em = 0,
                    om = 0;
                  for (; Em <= pm;) Em += this.flowerInfos[om].patchChance, om++;
                  const Om = this.flowerInfos[om - 1];
                  if (Rm < Om.patchRadius && Dm.next() < Om.insidePatchSpawnChance) {
                    const hm = Om.flower;
                    mm.set(Am - Tm, wm + 1 - am, xm - fm, this.blockMetadata[hm].id)
                  }
                }
              }
            }
            if (0 !== this.cactusChance) {
              const hm = this.cactusRandom;
              hm.reseed(`${Am}${xm}${this.seed}cactus`);
              const Dm = hm.next();
              if (Dm < this.cactusChance) {
                const im = Math.floor(hm.next() * (this.maxCactusHeight - 1)) + 1,
                  Rm = Math.min(wm + im + 1, am + this.MO),
                  pm = Dm < this.cactusChance * (2 / 3);
                for (let hm = Math.max(wm + 1, am); hm < Rm; hm++) mm.set(Am - Tm, hm - am, xm - fm, pm ? this.fatCactusId : this.cactusId)
              }
            }
          }
        }
        var Dm = fm(39812),
          im = fm(39821),
          Rm = fm(39269),
          pm = fm(39823);

        function Em(mm, Tm, fm) {
          const hm = new Rm.c;
          for (const am of fm) {
            const mm = hm.get(am.chunkX, am.chunkY, am.chunkZ);
            if (!(0, Am.H)(mm)) throw new Error(`Duplicate chunk at ${am.chunkX}, ${am.chunkY}, ${am.chunkZ}`);
            hm.set(am.chunkX, am.chunkY, am.chunkZ, am.rle)
          }
          return new im.b(mm, {
            x: 0,
            y: 0,
            z: 0
          }, Tm, hm)
        }
        const om = {
          treeJungleLarge1: Em("treeJungleLarge1", {
            x: 31,
            y: 33,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }]),
          treeJungleLarge2: Em("treeJungleLarge2", {
            x: 28,
            y: 35,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }]),
          treeMapleLarge1: Em("treeMapleLarge1", {
            x: 24,
            y: 27,
            z: 24
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          treeMapleLarge2: Em("treeMapleLarge2", {
            x: 32,
            y: 34,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("iB4AAdIBAgAB0gEdAAHSAQEAAdIBHAAB0gGeBwAB0gEeAATSAQIAAdIBGQAB4w8BAALSAQIAAdIBGQAG0gEeAAHSAeoFAAHSAQIAAeMPAQAC0gEaAAHSAQIAAdIBAQAB0gEZAAHSARkAAdIBBAAB4w8B0gEZAAHSAQQAAdIBEQAB0gEDAAHSARwABdIBGQAB0gEBAAXSARoACNIBGQAB0gEBAAHSAQEAAtIBHAAB0gEBAAHSAY0FAALSAR0AAdIBAgAB0gEYAAHSAQEAAdIBAQAE0gEXAAjSARMAAtIBAgAB0gECAAHSAQQAAtIBEgAB0gEBAAHSAQMAA9IBAwAB0gETAAHSAQoAAdIBDAAD0gECAAHSAQEAAdIBGAAD0gEBAATSARkAAtIBAeMPAdIBAQAD0gEWAAHSAQEAAtIBBQAB4w8YAAHjDwHSAQEAAdIBHwAB0gEBAAHSAaoFAAHSAQIAAdIBAQAB0gEOAAHSAQYAAdIBAwAB0gECAALSAQHjDw0AAdIBBAAC0gEEAAHSAQIAA9IBAQAC0gENAAHSAQQAAeMPAQAB0gEBAAfSARQABNIBAQAC0gEBAAPSAQEAAtIBFAAC0gECAAPSAQEAAdIBAQAB0gEMAAHSAQEAAdIBAeMPAdIBAwAB0gEBAAHSAQMAAdIBEQAB0gECAAHSAQHjDwEAAtIBFgAD0gEBAAHSAQMAAtIBFgAB0gECAALSAQEAAdIBGQAB0gEFAALSAQEAAdIBHAAD0gEdAAHSAR8AAdIB3QQAAdIBAQAB0gEGAAHSAQUAAQkDAAHSAQwAA9IBBAAB0gEBAALSAQMAAdIBAQAB0gEBAAHSAQ4AAtIBBAAB0gEBAAHSAQMAAuMPAQAB0gEB4w8B0gEB4w8MAAHSAQUAAdIBAQAB0gECAAHSAQEABdIBFAAB0gEBAAHSAQMABdIBAgAB4w8UAAHSAQIAAtIBAQAD0gEPAAHjDwcAAdIBBAAC0gEQAALSAQEAAtIBAQAB0gEXAAHjDwEABdIBAQAB0gEYAAHSAQHjDwHSAQEAAtIBAQAC0gEWAAXSAQIAAdIBGgAC0gEfAAHSAQIAAdIBAQAB0gEdAAHSAb0DAAHSAQIAAdIBHQAB0gF9AALSAQEAAdIBBgAC0gEBAAHSAQEAAQkBAAHSAQ0AAdIBAgABCQHSAQQAAtIBAQAB0gEBAAHSAQMAAtIBDgAC0gEGAALSAQIAAtIBAgAB0gENAAHSAQEAAdIBAQAB0gECAAEJAtIBAQAB0gECAAHSAQEAAtIBAQAB0gEMAAHSAQcAAdIBAwAG0gEVAAHSAQQAA9IBAQAB4w8B0gEcAAHjDwLSAQ4AAtIBAeMPAQAB0gEBCQIAAtIBFgAE0gEBAAHSAQEAA9IBFwAB0gEBAAPSAQEAAdIBAQAB0gEWAALSAQEABNIBGQAB0gEBAAXSARkAAdIBAQAC0gEBAAPSARsAAdIBAgAB4w+9AwAC0gEdAAPSAQEAAdIBHAAB0gFgAALSAQMAAQkB0gEBAAHSAQIAAgkDAAHSAQsAAdIBAQkB0gEBCQYABtIBAQABCQEAA9IBCQAB0gEBAAXSAQQABNIBAeMPBAAB4w8B0gEMAAHjDwHSAQEAAtIBAgkD0gEDAAHSAQYAAdIBCwAB0gEFAAHSAQEJBAAC0gEBAAHSAQQAAdIBEQAD0gEDAAPSAREAAtIBAQkDAAHSAQEAAdIBBQAC0gENAAHSAQEAAtIBAgABCQHSAQEAAdIBFgAB0gEB4w8G0gEBAAHSAQEAAdIBFQAC0gECAAPSAQEAAdIBFwAC0gEBAATSARkAAtIBAQAG0gEYAAHSAQEABNIBGwAB4w8BAAHSAQEAAdIBvAMAAdIBAQAD0gEbAAPSAR4AAtIBAeMPSQAB0gERAALSAQIJBAABCQMAAgkB4w8DAAHSAQwAAtIBAQkB0gEBAAHSAQEJBAAB0gEDAALSAQIAAeMPAdIBDgAD0gEBCQMAAdIBAwAC0gECAAHSAQEAAtIBCgAB0gEBAATSAQIAA9IBAgAC0gEB4w8BAAHSAQEABNIBCwAB0gELAAHSAQIAAdIBAgAB4w8C0gERAAHjDwLSAQMAAdIBAgAB0gEBAALSAQ0AAdIBAQkBAAHjDwIAAdIBAeMPAwAB4w8B0gEQAALSAQEABdIBAeMPAQAB0gEVAALSAQMABdIBGgAC0gEB4w8B0gECAAHSARUAAdIBAwAB0gEBAALSARkAAeMPAdIBAeMPAdIBAQAB0gEcAAXSARsABNIBHgAB4w+eAwAB0gEBCQHSAR0AAdIBAQAC0gEbAALSAQEAAdIBHQAB0gEFAAEJHwADCQQAAdIBEQAB0gEBAAEJBwABCQEAAdIBAQAB0gEQAAPSAQEAAdIBAQkHAAHj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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }]),
          treePalmLarge1: Em("treePalmLarge1", {
            x: 11,
            y: 14,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("xQoAAeYP/gcAA/ADnQgAA/AD2wcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AOdBQAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMbAAHmDwHwAwIAAfYDAgAB8AMB5g8ZAAXwAx0AAfADvAcAAfADBQAB8AMaAAHwAwEAAfADAQAB8AP8BwAD8APdBwAD8AP+BwAB5g+6tQEA")
          }]),
          treePalmLarge2: Em("treePalmLarge2", {
            x: 13,
            y: 16,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("hgsAAeYP/gcAA/ADnQgAA/AD/QcAA/AD2gcAAfADBwAB8AMYAALwAwEAAfADAQAC8APcBAAB9wMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDHwAB9gMfAAH2Ax8AAfYDGgAB5g8B8AMDAAH2AwMAAfADAeYPFwAH8AMcAAHwA7sHAAHwAwcAAfADGAAC8AMBAAHwAwEAAvAD+wcAA/AD/QcAA/AD3QcAA/AD/gcAAeYP+aQBAA==")
          }]),
          treePineLarge1: Em("treePineLarge1", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("zUgAA9AB/AcAAdABAagNBNABGwAD0AGdBwAB0AEgAALQARsAAeQPBtABGgAD0AEBCgHQAR0AAtABHgAC0AEfAAHkD7wGAALQAQIKHQAB0AECCgHQARsAAtABAgoC0AEBqA0ZAAHQAQMKAtABGwAC0AEBCgHQAR0AAdABAQoB0AEdAAPQAR4AAeQPnQYAAdABAgoB0AEbAAHQAQHkDwIKAtABGQAD0AECCgPQARkAAtABAwoB0AEcAAPQAR4AAtABHgAB0AEfAAHQAb0GAAHQAQEAAagNAdABGgAD0AEB5A8E0AEaAAHQAQEKA9ABHAAD0AG7BwAG0AEcAAHQAQEAAdABj4cBAA==")
          }]),
          treePineLarge2: Em("treePineLarge2", {
            x: 30,
            y: 40,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("y1AAA9ABvAcAAtABAagNPAABqA0F0AEbAAHkDwLQAZwHAAPQAQHkDx4AAtABGwAG0AEbAAHQAQHkDwHQAQEKAdABHAAD0AH7BgAD0AECCh0AAdABAgoB0AEaAAHkDwLQAQIKAtABGgAB0AEDCgLQARoAAtABAgoB0AEcAAPQAR4AAdABHwAB0AGcBgAB0AEB5A8B0AECCgHQAQGoDRsAAdABAgoB0AEaAAPQAQIKA9ABGQAC0AEDCgHQARoAAdABAwoB0AEcAAHQAQEKAdABHQAB0AEB5A8B0AEdAALQAZwGAAfQARwAAdABHAAC0AEB5A8F0AEZAALQAQEKAdABAeQPAtABGgAB0AEB5A8BCgHQAR0AAtAB2wYAB9ABOgAC0AEB5A8C0AEdAAHQAQHkDwLQAR0AAdAB/QYAA9ABAeQP8ncA")
          }]),
          treeSpectralLarge1: Em("treeSpectralLarge1", {
            x: 37,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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AuAMAv8MAwAD/wwTAAH/DAEAA+AMBQAC4AwB/wwTAAH/DAEAA+AMBAAF/wwHAAL/DAkAAv8MAuAMAf8MAQAB/wwCAAH/DAHgDAEAAeAMCAAD/wwDAAHgDAQAAf8MAgAB4AwFAAT/DAgABP8MAQAD4AwDAAH/DAEAAf8MAQAB/wwEAAHdDALgDAH/DAcABv8MA+AMAwAB/wwBAAHgDAH/DAEAAeAMBwAB/wwFAALgDAP/DAMAAuAMCAAB/wwLAAH/DAEAAf8MAuAMBQAB/wwXAAHgDAL/DBsAAf8MAgAB/wwB4AwB/wwGAATgDAQAAf8MDgAB4AwBAAH/DAYABOAMBAAB/wwSAAPgDAMABv8MAQAB/wwNAAH/DAHgDAIAA+AMAf8MAgAH/wwBAAH/DMcDAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAB/wwCAAH/DBYAAf8MBQAC/wwB4AwB/wwUAALgDAH/DAUAAf8MAuAMAv8MEgAE4AwFAAb/DBEAA+AMAQAB/wwFAAHgDAb/DAMAAv8MCAAB/wwD4AwD/wwDAAHgDAMAAf8MAwAC4AwCAAP/DAMAAuAMAgAD4AwBAAHgDAH/DAHgDAQAAf8MBgAC/wwC4AwD/wwB4AwCAATgDAEAAf8MAwAB/wwLAAP/DAEAAuAMBQAD4AwCAAH/DAMAAf8MDgAB4AwD/wwFAAHgDBcAAf8MAeAMAf8MBgAB4AwUAAH/DAHgDAH/DAcAA+AMDAAB/wwIAAHgDAQAAeAMAf8MAQAB3QwD4AwCAAH/DAgAAf8MAwAB/wwIAAPgDAIAAd0MA/8MAQAB/wwIAAH/DAMAAf8MAwAB/wwB4AwB/wwCAALgDAL/DAEABv8MiQUAAuAMFAAC4AwGAAL/DAPgDAEAAf8MDwAD4AwIAAT/DALgDA4AB+AMBAAB/wwBAAL/DAEAAv8MAuAMAf8MAQAC4AwBAAHgDAMABuAMAv8MAQAB/wwBAAH/DAQAAf8MAeAMAwAC4AwBAAbgDAEABuAMAQAB/wwOAAL/DAEAA+AMAQAH4AwDAAH/DBEAAf8MAuAMAf8MBQAB4AwFAAP/DAEAAf8MDQAB/wwGAAPgDAQAA/8MAQAB/wwMAAL/DAUABOAMBAAD/wwBAAH/DAwAAf8MAwAB/wwD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/wwCAAL/DAHgDAH/DAkAAv8MAgAB/wwDAAL/DAEAAf8MAuAMAQAB/wwBAAHgDAEAAeAMAf8MAeAMAf8MCQAD/wwFAAHgDAEAAv8MAQAC4AwB/wwB4AwB/wwCAAHgDAL/DAwAAv8MBAAB/wwB4AwD/wwBAAL/DAEAAf8MAQAD/wwJAAL/DAHdDAYAAf8MAQAB3QwBAALgDAL/DAEAA/8MVgAH4AwaAAXgDPgDAAHgDB8AAuAMIAAB4AwyAAH/DAEAAf8MHwAB4AwdAAH/DAEAAv8MAQAB/wwbAAP/DAHgDAoAAuAMEAAB4AwBAAH/DAgAAv8MBOAMBQAB/wwUAAH/DAEAAf8MBuAMAf8MAgAB/wwSAAn/DAHgDAEAA+AMEgAB/wwBAAL/DAHgDAEAAf8MAeAMAQAC/wwB3QwUAAH/DAMAAd0MAf8MAd0MAf8MAQAB3QwB/wxYAAXgDJAEAAH/DB8AAf8MEgAB/wwMAAH/DBIAAf8MDAAB/wwKAAH/DAcAAf8MCwAB/wwB4AwKAAH/DAcAAf8MCwAB4AwB/wwBAAH/DAgAAf8MBwAB/wwLAAL/DAoAAf8MBwAB/wwOAAH/DAgAAf8MAeAMBgAB/wwNAAH/DAcAAf8MAQAG4AwB/wwB4AwB/wwYAAH/DAfgDBcAAeAMAv8MA+AMAv8MAQAC/wwVAAHgDAH/DAEAA/8MAQAD/wwYAAL/DAHdDAH/DAHgDJkGAAH/DBMAAf8MAQAB4AwJAAH/DBMAAeAMCwAB/wwfAAL/DAMAA+AMAf8MFAAC4AwBAAP/DAbgDAH/DBMAAv8MAQAC4AwD/wwD4AwC/wwUAAv/DBkAA/8MAd0MAf8MAeAMAf8M2gUAAf8MHwAB/wwCAAH/DBMAAf8MCAAB/wwCAAH/DAIAAf8MEAAB/wwIAAH/DAIAAf8MAgAB/wwQAAH/DAcAAf8MAeAMAgAB/wwCAAH/DBAAAf8MAQAD/wwHAAH/DAEAAv8MDwAB/wwC4AwD/wwB4AwBAAH/DAEAAf8MAQAD4AwBAAH/DA8ABv8MAuAMAgAB/wwB4AwB/wwC4AwC/wwRAAH/DAEAAv8MAeAMAf8MAeAMBP8MAeAMAQAB4AwB/wwRAAHdDAL/DAHdDAIAAd0MAf8MAt0MAQAD/wyvBgAB/wwfAAH/DAMAA/8MAwAB/wwVAAH/DAIABf8MAgAB/wwEAAH/DBAAAf8MAQAB4AwF/wwB4AwBAAH/DAIAAf8MAgAB/wwQAAf/DALgDAH/DAHgDAX/DBEAAf8MAQAD/wwC4AwD/wwCAAHdDAH/DAHdDBIABf8MAgAB3QzZBQAB/wwfAAH/DB8AAf8MCwAB/wwTAAH/DAsAAf8MEgAB4AwD/wwJAAH/DBEABv8MCAAB4AwQAAH/DAHgDAX/DALgDAQAAv8MAeAMEAAH/wwF4AwBAAHgDAH/DBEAAd0MBv8MA+AMAf8MBAAB/wwRAAHdDAH/DALdDAL/DAHdDAL/DEgA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("w18AAf8M3wcAAf8MPAAB/wzBBgAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MHQAB4AwBAAH/DL0HAAH/DAHgDAEAAf8MHQAD4AwB/wwbAAX/DPsFAAH/DB8AAf8MYAAB/ww/AAPgDAH/DBsABeAMHAAD4AycBwAB/wwfAALgDAP/DBsABOAMHAAC4AwD/wybBgAB/wwfAAH/DCIAAf8MHAAB/wwB4AwBAAH/DBwAAf8MAQAC/wwcAAHgDAIAAf8MHAAD4AwB/wwcAAHgDAP/DJwFAAH/DB8AAf8MHwAB/wwfAAH/DB8AAf8MXwAB/wwfAAHgDAH/DB4AAf8MHwAC/wwBAAHgDBwABP8MnAYAAf8MfwAB/wwfAAH/DB8AAf8MAeAMAf8MHQAB/wygDwAB/wwfAAH/DB8AAf8MHwAB/wzeDgAB/ww/AAH/DL8IAAH/DB8AAf8M3wYAAf8MHwAB/wwfAAHgDP8wAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("EgAB/wwfAAH/DN8HAALgDAH/DB0AAeAMAd0M3QcAAf8MA+AMAf8MHAAB/wwB4AwC3QwcAAH/DAHgDB4AAd0MngcAAf8MA+AMAf8MGwAC/wwB4AwB/wwcAAH/DALgDAL/DBsAAf8MnQcAAeAMAQAE4AwB/wwEAAL/DBQAAv8MAuAMBQAB4AwXAAH/DAHgDAL/DAUAAd0MAf8MFQAD/wwB3QwdAAH/DP0GAAH/DAPgDAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAC/wwB4AwBAAHgDAQAAd0MAuAMEwAB4AwD/wwB4AwB/wwFAAL/DBUAAf8MAQAB3QwB/wwGAAH/DBQAAf8MAd0M/QYAAf8MAeAMA/8MAwAD/wwC4AwB/wwB4AwQAAH/DAEABP8MBAAC/wwB4AwC/wwRAAb/DAQABP8MFAAC/wwJAAHdDBQAAv8M/QYAAeAMBf8MBAAC4AwTAAf/DAMAAuAMA/8MEQAH/wwDAAHdDAIAAf8MEwAE/wwB3QwcAAHdDPwGAAH/DALgDAX/DAEAAeAMBP8MAQAC4AwPAAL/DAHgDAX/DAIAAv8MAt0MAf8MEQAB/wwB4AwG/wwKAAH/DA8AAf8MAd0MA/8MCwAB/wwPAAH/DA8AAf8M5gYAAv8MBgAC4AwF/wwB4AwBAAX/DAsAAf8MBQAB/wwBAAHgDAX/DAMAAv8MAd0MDAAB3QwFAAHgDAEABv8MEAAB/wwIAAH/DAHdDAEAAf8MAd0MAf8MGgAB/wz2BgAB/wwHAAH/DALgDAEAA/8MAQAH/wwDAAH/DAQAAv8MAuAMBAAC/wwB4AwB/wwBAAP/DAEAAv8MAd0MA/8MBAAB/wwEAAH/DAHgDAHdDAL/DAIAA/8MAuAMAQAD/wwLAAH/DAQAAv8MBwAB4AwB/wwB3QwBAAH/DAwAAv8MHwAB/wzmBgAB4AwBAAL/DAMAAf8MAuAMAf8MAeAMAgAI/wwJAAL/DALgDAQABP8MAwAH/wwKAAP/DAQAAv8MAeAMAf8MBQAB3QwC/wwEAAL/DALgDAYAAf8MBQAC4AwD/wwMAAPgDA0AAd0MEAAC3QzpBgAC4AwB/wwBAAH/DAEAAeAMAf8MAwAH/wwBAAH/DAsAAeAMAf8MAQAB/wwBAAL/DAHgDAH/DAMABf8MAwAB/wwB4AwB/wwIAAP/DAMAAf8MAd0MAv8MBAAD/wwB3QwB/wwCAALgDAEAAf8MBwAC/wwDAAH/DAIAAt0MCAAB/wwDAAH/DAEAAf8MHwAB/wziBgAB/wwDAAH/DAEAAf8MAQAD/wwDAAH/DAHdDAH/DAEABv8MAQAB4AwGAAL/DAIAAv8MAQAE/wwB4AwB/wwB4AwB/wwDAAb/DAIAAuAMBAAC/wwCAAf/DAHdDAP/DAQACP8MBgAB/wwBAAL/DAkAAf8MCAAB3QwC/wwIAAP/DBMAAv8MCQAB/wwB3QwUAAH/DAHdDMwGAAX/DAEAAv8MAeAMAwAE/wwE4AwBAAH/DAMAAf8MAeAMAf8MBOAMBf8MAuAMAf8MBAAE/wwCAALgDAQAAf8MAQAB/wwC4AwI/wwBAAHdDAH/DAUAAd0MAv8MAQAC4AwB/wwB4AwEAAb/DAIAA/8MCgAD/wwB4AwC/wwGAAX/DBEAAf8MAd0MAeAMAQAC/wwEAAHdDAEAA/8MEwAB3QwIAAL/DBYAAf8MpgYAAf8MAQAE4AwF/wwBAAH/DAEAAf8MBgAF4AwBAAL/DAIAAeAMAf8MBOAMBv8MAQAC4AwGAAH/DAEABeAMBQAE4AwH/wwJAAH/DAEAAf8MAQAE4AwCAAHgDAH/DAPgDAL/DAHdDAH/DAHdDAL/DAoAAf8MAgAC/wwBAAHgDAH/DAMAAv8MAQAB/wwBAAH/DBAAAv8MAQAC/wwB4AwBAAH/DAMAAf8MAeAMAf8MAeAMAf8MEwAF/wwEAAHdDAH/DBUAAv8MAd0MqAYAA+AMBf8MCQAB/wwE4AwBAAH/DAEAAf8MAwAB/wwBAATgDAX/DAkAAeAMBP8MA+AMAf8MAgAC/wwC4AwBAAf/DAkAAd0MBP8MA+AMAgAB/wwCAAH/DAHgDAL/DAHgDAHdDAL/DAHdDAsAAf8MAeAMA/8MA+AMAQAB3QwBAAT/DAHgDAH/DBAAAd0MAQAB/wwBAAP/DAIAAv8MAwAC/wwRAAH/DAHdDAIAAf8MAeAMBAAB/wwC3QwVAAL/DKgGAAH/DAPgDAf/DAcACP8MBgAH/wwBAAP/DAYABv8MAQAC4AwEAAL/DAMABP8MCwAC/wwB3QwB/wwE4AwDAAb/DBIAAf8MBOAMBAAB4AwB/wwBAAHgDAL/DBEAAeAMAf8MAuAMAf8MBAAB/wwB3QwC/wwB3QwSAAL/DAHgDAH/DAcAAd0MFQAC/wwB3QwB/wypBgAB/wwB3QwB/wwBAAX/DAcABP8MAQAB4AwB/wwGAAL/DAUABf8MBgAB/wwB3QwB/wwB4AwCAAHgDAgAAv8MBQAB/wwB3QwB/wwKAAL/DAPgDAYAA/8MEgAC/wwD4AwGAAHgDAH/DBMAAf8MAeAMA/8MBgAC/wwTAAHdDAP/DB4AAv8MqgYAAd0MAgAG/wwIAAHgDAEAAeAMAf8MAeAMAf8MDQAD/wwB3QwB/wwIAAP/DAEAAuAMDgAC/wwLAAL/DAPgDBwAAf8MA+AMHAAD/wweAAHdDAH/DAHdDMwGAAb/DAcAAv8MAgAB/wwQAAL/DAoAAd0MAv8MAQAB/wwB4AwOAAHdDA0AAv8MAuAMHQAC/wwB4AwcAAH/DAHdDAH/DAHgDB4AAv8MzgYAAv8MAd0MCQAB/wwBAAH/DCIAAeAMHgAC4AwdAAL/DAHgDBwAAf8MAQAC/wweAAHdDP8GAAL/DB8AAeAMHQAC/wwB4AwfAAHgDP4GAAH/DB8AAf8MHwAB4AwgAAH/DB4AAv8M3wcAAf8MgD8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("oDgAAf8MHwAB/wwfAAHgDB8AAv8M3gcAAeAMAf8MHgAB4AwB3QyfBwAB/wwfAAH/DB4AAeAMAf8MHgAB/wwB4Ay+BwAB4AwfAAHgDAH/DJ4PAAH/DP8HAAH/DAIAAv8MHAAB/wwB3QzdBwAC/wwBAAH/DAHgDBwAAd0MAeAMAd0M3AcAA+AMAv8MGwAB3QwB/wwB3QwC/wzbBwAE/wwB4AwbAAHdDAL/DAHgDNwHAAL/DAHgDAH/DBwAAf8MAd0MAf8MAd0MHAAB/wwfAAH/DD8AAf8M3wYAAf8MAeAMAv8MHAAB4AwC/wxdAAH/DP8GAAH/DAIAAf8MHAAD/wwdAAHgDAH/DAHdDB0AAeAMHwAB/wwfAAHdDOAGAAH/DB4AAv8MHgAB4AwB/wwfAAH/DB4AAf8MHwAB/wzgBgAB/wweAAL/DB4AAeAMAv8MHQAC/wwfAAH/DB4AAd0MgAcAAf8MPgAC/wweAAH/DL8HAAH/DB8AAf8MAQAB/wweAAH/DP4GAAH/DB8AAf8MHwAB/wwgAAH/DB4AAf8M/z4A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("zgQAAf8MHwAB/wwfAAH/DB8AAeAMHQAC/wwB4AwFAAH/DBcAAv8MAQAB/wwEAAH/DBcAA/8MAgAE/wwYAALgDAEABf8MGQAH/wwBAALgDAEAAf8MAgAC/wwRAAb/DALgDAEAAf8MAeAMFgAB3QwE/wwBAAHgDB0AAd0MAeAMAf8MAeAM9QUAA/8MHQAC4AwB/wwdAAT/DBsAAf8MAeAMAQAB4AwcAAT/DAEAA/8MGQAB4AwB3QwB/wwBAAP/DBwABP8MAgAB4AwdAAH/DAEAAf8MAeAMHgAB3QwB/wzYBAAB/wwcAAH/DAIAAf8MHAAB/wwCAAH/DBwAAf8MAgAB/wwcAAH/DAIAAf8MHAAC/wwB4AwB/wwcAAH/DALgDAL/DBsABv8MGgAB/wwB4AwG/wwXAAHgDAH/DAHdDAEAAf8MAwAC4AwXAAH/DAYAAv8MAeAMHAAD/wwB3QwB4AwfAAH/DB8AAf8MlwYAAuAMHAAC/wwD4AwBAAH/DBoABP8MAuAMGgAB3QwC/wwBAAL/DALgDAH/DBgAAf8MAeAMAwAC4AwB/wwdAAHdDAH/DAHdDAHgDB8AAf8MvgUAAf8MFgAB/wwIAAH/DBYAAf8MCAAB/wwWAAH/DAgAAf8MFgAB/wwBAAHgDAL/DAQAAf8MFgAB/wwB4AwB/wwBAAL/DAMAAf8MFwAB/wwC4AwB/wwB4AwC/wwBAAH/DBgAAf8MAeAMAf8MAQAB4AwD/wwZAAHdDAIAAd0MAf8MAd0MqtkBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          treeSpectralLarge2: Em("treeSpectralLarge2", {
            x: 34,
            y: 40,
            z: 37
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("4EcAAf8MwR4AAf8MHwAB/wwfAAH/DB8AAf8MHQAB/wwBAAH/DP0GAAL/DB4AAv8MHgAC/wweAALgDAH/DB0AAf8MHwAB4AwBAAH/DB0AAf8MAQAB/wyABgAB/wwcAAL/DAEAAf8MHAAE/wwcAAT/DBwABP8MHAAC/wwB4AwB/wwcAAPgDAH/DBwAA/8MHQAC/wyeBgAC/wweAAP/DB0AA/8MHQAD/wwdAAL/DB4AAeAMAv8MHQAB/wwCAAH/DBwAAf8MwAUAAf8MHwAB/wwfAAH/DB4AAv8MHgAD/wwdAAP/DB0AA/8MHQAC/wweAAP/DB0AAv8MHgAD/wz/BQAB/wwfAAL/DBwABP8MHAAC/wwB3QwdAAL/DB4AAv8MHgAB/wwfAAHgDAH/DB4AAv8MoAYAAuAMHAAD/wwdAAL/DB4AAf8MAd0MHgAB/wwfAAH/DB8AAf8MHwAB/wyBBgAB/wwfAAL/DBwAA+AMHgAB4AweAAH/DL8HAAH/DAEAAf8MHQAC/wy+WQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gEAAAf8MHwAB/wwfAAH/DB8AAf8MHwAB/wwfAAH/DL8HAAHgDB8AAeAMHwAB4AwfAAH/DP8GAAHgDB8AAuAMHgAB4AwfAAL/DB4AAf8M4AYAAf8MHwAB/wweAAHgDAH/DB4AAv8MHgAB/wwB3QzeBwAB/wwfAAH/DN8WAAL/DP4HAAHdDAH/DP4HAAH/DP93AA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("7wMAAf8MHwAB/wwfAAH/DB8AAf8MHAAB4AwCAAH/DBsAAf8MAuAMAv8MHAAB/wwC4AwcAAT/DAHgDBsABP8MHQAD3QydBgAB/wwfAAH/DB8AAf8MHwAB/wwgAAH/DEAAAf8MHQAD/wzx8QEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }])
        };

        function Om(mm, Tm, fm) {
          const hm = new Rm.c;
          for (const am of fm) {
            const mm = hm.get(am.chunkX, am.chunkY, am.chunkZ);
            if (!(0, Am.H)(mm)) throw new Error(`Duplicate chunk at ${am.chunkX}, ${am.chunkY}, ${am.chunkZ}`);
            hm.set(am.chunkX, am.chunkY, am.chunkZ, am.rle)
          }
          return new im.b(mm, {
            x: 0,
            y: 0,
            z: 0
          }, Tm, hm)
        }
        const Ym = {
          rockJungleLarge1: Om("rockJungleLarge1", {
            x: 30,
            y: 19,
            z: 30
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          rockJungleLarge2: Om("rockJungleLarge2", {
            x: 29,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          rockJungleLarge3: Om("rockJungleLarge3", {
            x: 29,
            y: 22,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          rockJungleLarge4: Om("rockJungleLarge4", {
            x: 29,
            y: 24,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          rockJungleLarge5: Om("rockJungleLarge5", {
            x: 32,
            y: 25,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          rockJungleLarge6: Om("rockJungleLarge6", {
            x: 30,
            y: 28,
            z: 32
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("zhIAAWcDAAFnGwAFZxwAA2ciAAFnAwABZxsABWccAANnkgQAAQIFHAECAQABAgUcAQIRAAGjDwECAxwCAgEAAgIDHAICEgABAgMcAQIDAAECAxwBAhMAAaMPAwIBow8DAAGjDwMCAaMPDgABZwMAAWcBAAMCBQADAgGWAQ4ABWcBAAOjDwUAA6MPEAADZwQAAZYBBQABlgF7AAFnHQAFZxsABWccAANnBAABZxIAAWcDAAFnBgAFZxAABmcDAAFnAQAFZxEAA2cBAAVnAgADZxcAA2fXAwABAg8cAQIPAAECDxwBAg8AAaMPDxwBow8QAAECDRwBAgGWAQ4AAWcBAAECBhwBAgYcAQINAARnAaMPBRwDAgUcAaMPDQAFZwECBBwBAgGjDwECBBwBAgFnAwABZwoAA2cBAAICAxwBow8BAAGjDwQcAQIFZw4AAaMPBAIBDgIABAIBow8BAANnEAABow8DAgEOAgAEAhYAA6MPAQ4BZwEABKMPFwAFZwMAAQ4XAAVnAwABDhgAA2cDAAFnAQ4BZxMAAWcIAAVnEAAFZwIAAWcDAAVnEAAKZwIAA2cSAANnAQAFZxwAA2cfAAFnAwABZxsABWccAANn0wIAAQIRHAECDQABow8RHAECDQABDhEcDgABDhAcAQINAAFnAQ4QHAECDAADZwECDxwBow8MAANnAQIPHAEAAWcMAAJnAaMPAQINHAECBGcNAAECDRwBAgRnDQABow8DAgkcAQIBow8DZw8ABgIGHAECEwADow8JAgGjDxMAAQ4CAAOjDwYCFAABDgMAAmcGow8TAAFnAQ4BZwMAAQ4DAAVnEAAFZwEAAWcBDgFnAgAFZxAACmcCAANnEgADZwEABWccAANnIQABZx0ABWcbAAVnHAADZ7ICAAGjDwIcDgIDHA0AAxwMAgMcAQINAAQcCwIDHAECDQASHAGjDw0AEhwBDgsAAmcSHAEOCwACZxEcAQIBDgFnCwABZwICDxwBAgNnCwACAg8cAaMPA2cLAAKjDw4cAQIDZw4ADhwBAhEADhwBow8RAAECDBwBAhIAAgILHAECAWcRAAGjDwwCAaMPAWcQAAJnAaMPCwIBZxEAA2cLow8TAANnAQAFZwEOAgABZwMAAWcUAANnAQABDgIABWcXAAFnAQ4BZwIAA2cXAAVnGwAFZxwAA2exAgACow8BHA8CAxwNAAEcDwIDHA0AAxwNAgMcDQAEHAUCAxwDAgMcAQILAAFnAQASHAECCwACZxIcAaMPDAABZxIcAWcNABEcAQIDZwsAAQIQHAECA2cHAAFnAwABAhAcAaMPA2cHAARnAaMPEBwDZwkAA2cBAA8cAQIQAA8cAQIQAAICDRwBow8QAAMCBRwDAgMcAQIRAAKjDw0CEgABZwGjDwUCA6MPAwIBow8UAAWjDwFnAgADow8BAAFnDQABZwMAAWcLAAVnCwAFZwgAAWcCAAVnDAADZwIAAWcDAAZnAQADZxIACmcXAANnAgADZ7ACAAKjDwIcEAICHAwAAhwPAgMcDAAEHA0CAxwMAAUcBQIDHAMCAxwBAgwAAQISHAECDAABAhIcAaMPDAABow8SHAIAAWcLABIcA2cLAAYcAc0BAQAJHAECAmcKAAFnAQABAgUcAgAJHAECA2cHAARnAQIFHAIACRwBow8DZwUAAWcBAARnAaMPEBwDZwYABmcBAA8cAQIKAANnAwACAg0cAQIQAAMCBRwDAgMcAQIBow8QAAKjDw0CAQ4SAAGjDwUCA6MPAwIBow8BDhMABaMPAQAClgEDow8BZwEOAWcOAAFnDQAFZwsABWcGAAFnAwAGZwsABWcDAAFnAgAFZwEAA2cNAANnAgAFZwEAA2cXAAVnswIAAqMPAhwRAgIcCwACHBECAhwLAAUcDgICHAsABhwFAgMcBQIBHAECCwABAhMcAQIFAAFnAwABZwEAAQITHAGjDwUABWcBAAGjDxMcAQ4GAANnAgABDhMcAQ4LAAEOBxwCAAocAQ4BZwkAAWcBDgECBRwDAAocA2cHAANnAQIFHAQACBwBAgNnBwADZwGjDxEcAQICZwYABmcRHAGjDwgABWcBAAMCDhwKAANnAgAEAgUcAwIFHA8AA6MPDgIPAAEOAgABow8FAgOjDwUCDwABDgMABaMPAgABlgEFow8OAAFnAQ4BZwQAAQ4FAAGWAQEABWcLAAVnAwABDgcABWcLAAVnAgABZwEOAWcHAANnDQADZwIABWcbAAVnsgIAAQIDHBMCARwIAAGjDwMcEgICHAkABxwOAgIcCQANHAECAhwFAgEcAQIJAA0cAQIIHAECBwABZwEADRwBAggcAaMPBQAEZwECFRwGAARnAQIJHAMACRwHAANnAaMPAQIHHAQACRwBZwkAAQ4CAgQcBgAJHANnBwABZwGjDwECBBwGAAkcA2cGAANnAaMPExwCZwYABWcSHAECCAAFZwQCDhwBAgkAA2cBAA0CBRwBow8NAASjDw4CCQABZwMAAWcEAAmjDwUCCQAFZwYAApYBAQABlgEDAAWjDwEAAWcIAANnAgABZw0ABWcLAAVnDAADZwEAAWcKAAVnAwABZwgABWcLAANnAgAFZwcAA2cRAAVnsQIAAQICHAkCBBwDAgEcAwICHAECBgABAgIcCAIFHAMCARwDAgIcAQIGAAGjDw8cAwIBHAMCAhwBAgYAAQ4BAg4cAQIBHAECARwDAgIcBwABDgECDhwBAggcBgABZwEOAaMPCBwHfgccAQIFAARnCBwHfgIcAQIDHAICAwABZwEABGcBAgccB34CHAECAxwBAgGjDwRnAgADZwECBxwHfgIcAaMPAxwBow8BAANnBgABow8HHAd+AhwBAAMcBGcHAAFnBxwHfgccAmcIAAFnBxwHfgccCAADZwccB34HHAgAA2cHAgd+BhwBAgkAAmcHAgd+AQIFHAECCwAHow8HfgYCAaMPCgABZwUAAZYBAgABfgEAAX4BAAF+AQABow8FAgkABWcNAAWjDwkABWcDAAFnGAAIZw4AAWcNAANnAgABZwMAAWcGAAVnEAAFZwYABWcRAANnCAADZ6YCAAECAxwHAgccBwICHAECBAABow8DHAYCCBwHAgIcAQIFABIcBgICHAYAAQIMHAMCAhwBAgYcAQIGAAECCxwEAgIcAQIGHAECBgABow8JHAd+ARwBAgYcAaMPBAADZwkcB34BHAECBhwBAAFnAwADZwECCBwHfgEcAQIFHAECBGcCAAJnAQIIHAd+ARwBAgUcAQIEZwQAAaMPCBwHfgEcAQIFHAGjDwNnBgAIHAd+ARwBAAUcCAABZwEAAQIHHAd+BxwIAAJnAQIGHAECB34HHAkAAWcBow8HAgd+AQIGHAoAAQ4GAgGjDwd+BwIKAAEOBqMPAZYBB34Bow8GAgkAAWcBDgFnDQABlgEGow8IAAVnEAABlgEBAAEOCAAFZxIAAQ4JAANnEgABZwEOAWcRAAFnAQADZwYABWcRAARnBgAFZxIAAmcIAANnpgIAAxwHAgkcBgICHAECBAABAgIcBwIJHAYCAhwBAgQAAQICHAUCCxwGAgIcAQIEAAGjDwkcBwIKHAECBQAJHAh+CRwBDgMAAWcBAAkcCH4JHAEOAwACZwECCBwIAAECBxwBAgEOAWcDAAFnAQIIHAgAAQIHHAECA2cDAAGjDwgcCAABow8HHAGjDwNnBAABAgccCQAHHANnBQABAgccCQAHHAgAAaMPBxwJAAYcAQIJAAccCQAGHAECCQAFHAICCQAGHAGjDwkABwIDAAHgDwUABgIKAAUCAqMPAwAB4A8FAAYCCgAFow8BlgEEAAHgDwUABqMPCAAFZwcAAeAPEwAFZwcAAeAPFAADZwgAAeAPAwABZwMAAWcCAAFnFAAOZxIABGcBAANnAQAFZxwAA2emAgADHAYCChwGAgMcBAADHAYCChwGAgMcBAADHAUCAxwEAgQcBgIDHAQAAQIDHAICBBwHAgQcAwIDHAECBAABAgkcCH4JHAECBAABow8JHAgACRwBow8FAAkcCAAJHAFnBQABAggcCAABAgccAQIDZwMAAQIHHAECCAABAgccAQIDZwEAAmcBow8HHAECCAABow8HHAGjDwJnAgADZwccAaMPBQAB4A8DAAccCAABAgYcAZYBBQAB4A8DAAYcAQIIAAECBhwGAAHgDwMABhwBAgIAAWcFAAGjDwUcAQIGAAHgDwMABhwBow8DZwYAAQICHAMCBgAB4A8DAAICAxwBAgNnBwAFAgGjDwYAAeAPAwAGAggAAWcBAAGjDwICAqMPBwAB4A8DAAKjDwMCAaMPCAADZwKjDwkAAeAPBQADow8KAANnCgAB4A8fAAHgDwMAAWcCAAFnAwABZwcAAWcDAAFnBwANZwcABWcHAAhnAQADZwkAA2cMAANnqwIAAxwGAgocBgIDHAQAAxwGAgocBgIDHAQAAxwFAgMcBgICHAYCAxwEAAECAxwCAgQcCAIDHAMCAxwBAgQAAQIJHAh+CRwBAgQAAaMPCRwIAAkcAaMPBQAJHAgACRwCAAFnAwAJHAgACRwDZwIAAWcBAgccAQIIAAECBxwBAgJnAgACZwECBxwBAggAAQIHHAECBAACZwGjDwccAaMPCAABow8HHAGjDwQAA2cBAgYcCgAGHAECCAABAgYcCgAGHAECAWcHAAGjDwUcAQIKAAYcAaMPA2cFAAGWAQECAhwDAgoAAgIDHAECBGcGAAUCAaMPCgAGAgNnBwABow8CAgKjDwsAAqMPAwIBow8LAAKjDwGWAQwAAQ4BAAOjDw0AAZYBDQABDh4AAWcBDgFnDwABZwwABWcMAAVnCQAGZwwABWcLAANnqwIAAxwFAgscBgIDHAQAAxwFAgscBgIDHAQABBwEAgMcBgICHAYCAxwEAAECAxwCAgQcCAIDHAMCAxwBAgQAAQIJHAh+CRwBAgQAAaMPCRwIAAkcAaMPBAABDgkcCAAJHAGWAQQAAQ4BAggcCAABAgccAQIEAAFnAQ4BAgccAQIIAAECBxwBAgEAAWcCAAJnAaMPBxwBAggAAaMPBxwBow8CZwIAA2cHHAGjDwkABxwCZwMAA2cBAgUcAQIKAAYcAQIBDgcAAQIFHAECCgAGHAECAQ4BZwYAAaMPAQIEHAGjDwoABhwBow8DZwYAAQICHAICAZYBCgACAgMcAQIEZwUAAWcBow8EAgsABgIDZwYAAmcCAgKjDwsAAqMPAwIBow8BZwkAAWcCow8PAAOjDwJnCgABDhEAA2cLAAEODgABZw8AAWcBDgFnCwAFZwwABWcKAAVnDAAFZwsAA2erAgADHAUCDBwFAgIcAQIEAAECAxwDAg0cBAIDHAECBAABAgQcAQIEHAcCAxwEAgMcAQIEAAGjDwkcCAIJHAECBQAJHAh+CRwGAAkcCAAJHAYAAQIIHAgAAQIHHAECBgABAgccAQIIAAECBxwBAgUAAWcBow8HHAECCAABow8HHAGjDwQAA2cBAgYcAaMPCQABAgUcAQIDZwIAA2cBAgUcAQIKAAECBRwBAgNnAgADZwGjDwUcAQIJAAFnAaMPBRwBow8CZwcAAQIDHAECAaMPCQACZwQcAQIBAAFnCAACAgEcAgIBlgEIAAHgDwEAAWcEHAECBGcGAAGjDwMCAaMPCQAB4A8CAAQCAaMPBGcHAAGjDwECAaMPCgAB4A8CAAQCAQADZwYAA2cBow8BZwoAAeAPAgAEow8KAAVnCgAB4A8CAAGWAQVnCQADZwsAAeAPAwAFZxcAAWcDAARnCwABZwwABWcMAAVnCwADZw0ABWe5AgABAhkcAgIEAAGjDxkcAgIFAAkcBwIJHAECBgABAgccCQIIHAECBgABAgccAQIIfgECBxwBAgYAAaMPBxwBow8IAAECBxwBAgYAAWcHHAkAAaMPBxwBDgYAAWcBAgYcCgABAgUcAQIBDgcAAQIFHAECCgABAgUcAQIBDgFnAwADZwGjDwECAxwCAgoAAaMPAQIDHAECAaMPA2cCAANnAQABAgMcAQIBow8LAAECAxwBAgRnBgABow8DAgGjDwGWAQsAAaMPAwIBow8DZwcAAZYBAwILAANnAwIBZwMAAWcHAAOjDwsAA2cDow8FZwcAAQ4OAANnAQABDgEAA2cHAAFnAQ4BZxEAAQ4KAAVnDwABZwEOAWcJAAVnDgAFZwkAA2cPAAVnHAADZwkAAWcDAAFnGwAFZxwAA2e7AgABAhccAgIGAAECFxwCAgYAAaMPCBwHAggcAgIHAAECBRwLAgYcAQIIAAECBRwCAgh+AgIFHAECCAABow8FHAKjDwgAAaMPAQIFHAECCQABAgMcAQIBlgEKAAGjDwECAxwBAggAAmcCAgEcAgILAAGWAQICARwCAggAAmcBow8DAgGjDwwAAaMPAwIBow8BAAFnBwACZwGjDwECAaMPCwAB4A8BAAEOAaMPAQIBow8FZwgAAaMPDAAB4A8BAAEOAQABow8BAAVnCAABlgEMAAHgDwFnAQ4BZwMAA2cWAAVnGwAFZxwAA2cOAAFnHQAFZxAAAWcKAAVnDgAFZwkAA2cPAAVnHAADZ4kDAAECFhwBAggAAaMPAQIUHAICCQABAgMcDQIEHAECCgABow8UAgGjDwoAAQ4DAgGjDwt+AaMPBAILAAEOA6MPDQAEow8KAAFnAQ4BZxAAAZYBAQABlgEJAAVnGwAFZxIAAWcDAAFnBQADZxMABWccAANnGAABZx0ABWcbAAVnHAADZwwAAWcDAAFnGwAFZw4AAWcDAAFnCQADZw8ABWccAANnqgMAAaMPAQIRHAECDQABow8BAg8cAgIOABECAaMPDgABow8PAgGjDxAAAqMPBn4Cow8DfgKjDxoAAZYBBAABlgEOAAFnHQAFZxsABWccAANnTQABZwMAAWcbAAVnHAADZ84EAAECEBwCAg0AAaMPAgINHAICAaMPDgAQAgGjDwGWAQ4AAqMPDQIBow8SAAOjDwN+BaMPAX4Bow8VAAGWARcAAWcDAAFnBgABZwMAAWcQAAVnBgAFZwIAAWcOAANnCAAHZxwAA2fRBQABow8BAg8cAgIOAAMCDBwCAgGjDw4AAaMPDwIBow8QAAKjDwwCAaMPEwAMow8BlgEPAAFnAwABZwMAAWcXAAlnAQABZxYAA2cBAAlnGgAIZxkAB2ccAANnsQUAAaMPAgINHAICAaMPDgAGAgMcAwIBHAQCDwACow8NAgKjDxEABKMPAwIDow8BAgKjDxcAA6MPAQ4BlgEBAAGjDxQAAWcDAAFnAwABDgIAAQ4SAApnAQ4BZwEAAQ4SAA1nAQ4BZxIAA2cBAAtnGQAHZxwAA2eyBQABow8KAgMcAwIBow8PAA8CAaMPEAAKow8DAgKjDxEAAQ4DAAEOBQADow8TAAEOAwABDgcAAZYBEgABZwEOAWcBAAFnAQ4BZxgACWcBAAFnFQAOZxMAA2cBAAtnGQAHZxwAA2ezBQACow8EAgGjDwgCAaMPEgAEow8BAAKjDwUCAaMPGgAFow9SAAFnAwABZxkACWcDAAFnEwANZwIAAWcRAANnAQADZwEAB2ccAANn2wUAAqMPAwIdAAOjD3EAAWcDAAFnAwABZxcACWcYAANnAQADZ5MmAA==")
          }]),
          rockSnowLarge1: Om("rockSnowLarge1", {
            x: 36,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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AR0LHBQAAR0KHAEdFAAB3QwBHQkcAdUMFQACHQHVDAccAd0MFQAB3QwDHQYcFwAC3QwBHQYcGQAB3QwFHAEdGgABHQQcAdUMGgACHQIcAdUMAd0MGgAB3QwBHQEcAdUMAR0SABMcBh0GHAEAExwE3QwCHQYcAQATHAQAAt0MBhwBAAEdERwBHQYABhwBAAEdERwBHQYABhwBAAHdDBEcAd0MBgAGHAIAERwHAAYcAgARHAcABhwCABEcBwABHQUcAgABHQ8cAdUMBwABHQUcAgABHQ8cAR0HAAHdDAUcAgAB3QwPHAHdDAgABRwDAA8cCQAFHAMADxwJAAUcAwAPHAkAAR0EHAMAAdUMDRwBHQkAAdUMBBwDAAEdDRwBHQkAAd0MBBwDAAHdDA0cAd0MCgADHAHVDAQADRwLAAIcAh0EAA0cCwACHAEdAd0MBAABHQwcCwABHAEdAd0MBQABHQwcCwACHQYAAd0MDBwLAAEdAd0MBwAMHAsAAd0MCAABHQocAR0UAAEdChwBHRQAAd0MAR0JHAHdDBUAAdUMCRwWAAHdDAEdBxwBHRcAAh0GHAEdFwAB3QwBHQYcAd0MGAAB3QwB1QwEHAEdEgATHAMdAdUMAh0GHAEAExwF3QwB1QwGHAEAExwFAAHdDAYcAQATHAYABhwBAAEdERwBHQYABhwBAAHVDBEcAR0GAAYcAQAB3QwRHAHdDAYABhwCABEcBwABHQUcAgARHAcAAR0FHAIAERwHAAHdDAUcAgARHAgABRwCAAEdDxwB1QwIAAUcAgAB1QwPHAEdCAAFHAIAAd0MDxwB3QwIAAUcAwAPHAkAAdUMAxwBHQMADxwJAAEdAxwBHQMAAR0NHAHVDAkAAd0MAxwB3QwDAAEdDRwB1QwKAAMcBAAB3QwNHAHdDAoAAdUMARwB1QwFAA0cCwABHQHVDAEdBQANHAsAAd0MAR0B3QwFAAEdDBwMAAHdDAYAAR0MHBMAAd0MDBwUAAscAR0UAAEdChwBHRQAAR0KHAHdDBQAAd0MAR0JHBYAAR0IHAHVDBYAAd0MAdUMBxwBHRcAAdUMBhwBHQHdDBcAAd0MBhwBHRIAExwB3QwBHQLVDAIdBhwBABMcAQAE3QwBHQYcAQATHAUAAd0MAR0FHAEAExwGAAEdBRwBABMcBgAB3QwFHAEAAR0RHAEdBwAFHAEAAR0RHAEdBwAFHAEAAd0MERwB3QwHAAUcAgARHAgABRwCABEcCAAFHAIAAR0QHAgAAR0DHAEdAgABHQ8cAR0IAAEdAxwBHQIAAd0MDxwBHQgAAd0MAxwB3QwDAA8cAd0MCQADHAQADxwKAAHVDAEcAR0EAA8cCgABHQEcAdUMBAAPHAoAAd0MAdUMAd0MBAABHQ0cAR0LAAEdBQABHQ0cAR0LAAHdDAUAAd0MDRwB3QwSAA0cEwANHBMAAR0LHAEdEwABHQscAR0TAAHdDAEdChwB3QwUAAEdChwVAAHdDAocFgABHQkcFgABHQgcAR0WAAHdDAgcAR0XAAccAR0B3QwXAAHVDAYcAR0SABMcAR0B3QwCHQHVDAEdBhwBABMcAd0MAQAE3QwBHQUcAQATHAYAAh0DHAEdAQATHAYAAd0MAR0DHAEdAQABHREcAR0HAAHdDAMcAd0MAQAB1QwRHAEdCAADHAIAAd0MERwB3QwIAAMcAwARHAkAAR0BHAEdAwARHAkAAx0DAAEdEBwJAAHdDAEdAd0MAwABHRAcCgAB3QwEAAHdDA8cAR0QAA8cAR0QAA8cAd0MEAAPHBEADxwRAAEdDRwB1QwRAAEdDRwB1QwRAAHdDA0cAd0MEgABHQwcEwABHQwcEwAB3QwLHAEdFAALHAEdFAAB1QwKHAHdDBQAAdUMChwVAAHdDAEdCBwBHRYAAR0IHAHVDBYAAd0MCBwB3QwXAAgcGAAHHAEdGAABHQYcAR0YAAEdBRwBHQHdDBIAAR0SHAcdBRwBAAHdDBIcAh0E3QwFHQEcAgASHALdDAQAAd0MAx0B1QwBHQIAERwB1QwHAATdDAEdAgARHAEdCwAB3QwCABEcAd0MDgARHA8AERwPAAEdEBwPAAEdDxwBHQ8AAd0MDxwBHRAADxwB3QwQAAEdDhwRAAEdDhwRAAHdDA4cEgANHAEdEgANHAEdEgAB1QwMHAHdDBIAAR0MHBMAAd0MDBwUAAscAR0UAAscAR0UAAIdCRwB3QwUAAIdCRwVAALdDAgcAR0XAAgcAR0XAAEdBxwB3QwXAAEdBxwYAAHdDAYcAR0ZAAYcAR0ZAAUcAR0B3QwZAAEdBBwBHRMAAd0MFBwFHQHVDAQcAgAUHAXdDAEdBBwCABIcAR0B1QwFAAHdDAEdAxwCABIcAR0B1QwGAAEdAxwCABIcAt0MBgAB3QwDHAIAAR0RHAkAAxwCAAHVDBEcCQADHAIAAd0MERwJAAMcAwAPHAHVDAEcCQABHQIcAwABHQ4cAdUMARwJAAEdAhwDAAEdDhwB3QwBHAkAAd0MAh0DAAHdDA4cAQABHQoAAh0EAA4cAQAB1QwKAALdDAQADRwB1QwBAAHdDBAAAR0MHAEdEgABHQwcAd0MEgAB3QwMHBQADBwUAAscAR0UAAMdCBwBHRQAAx0IHAHdDBQAA90MCBwYAAccAR0YAAccAR0YAAEdBhwB3QwYAAEdBhwZAAHdDAUcAR0aAAUcAR0aAAQcAdUMAd0MGgAEHAHVDBsAAR0CHAEdAd0MGwABHQEcAh0VABQcAdUMBR0EHAIAFBwBHQXdDAQcAgAUHAHdDAUABBwCAAEdEhwBHQYABBwCAAEdEhwB1QwGAAQcAgAB3QwBHQ4cAR0CHAHdDAYABBwDAAEdDhwBHQIcBwABHQMcAwAB3QwOHAHdDAIcBwABHQMcBAAOHAEAAhwHAAHdDAMcBAABHQ0cAQACHAgAAxwEAAIdDBwBAAEcAR0IAAEdARwBHQQAAd0MAdUMCxwBHQEAARwBHQgAAR0BHAHVDAUAAd0MCxwBHQEAARwB3QwIAAHdDAHVDAHdDAYACxwB3QwBAAEcCgABHQcACxwCAAEcCgAB3QwHAAscAgABHBIAChwBHQIAAdUMEgABHQkcAdUMAgABHRIAAh0IHAHdDAIAAd0MEgAB3QwB1QwBHQccFwAB3QwBHQYcAdUMGAAB3QwBHQUcAR0ZAAEdBRwB3QwZAAHdDAQcAR0bAAQcAR0bAAMcAR0B3QwbAAEdAhwB1QwcAAEdARwBHQHdDBwAAd0MARwBHR4AAR0B3QweAAEdHwAB3QwWAAHVDBQcBB0B1QwEHAIAAR0THAIdBN0MBBwCAAHdDBMcAR0B3QwEAAQcAwATHAHdDAUABBwDAAEdEhwGAAQcAwABHRIcBgAEHAMAAd0MEhwGAAQcBAAB1QwMHAEdAxwB1QwGAAEdAxwEAAEdDBwB1QwDHAHVDAYAAR0DHAQAAd0MAR0LHAHdDAMcAd0MBgAB3QwDHAUAAR0LHAEAAxwIAAMcBQAB3QwLHAEAAxwIAAMcBgABHQkcAR0BAAMcCAABHQEcAdUMBgACHQgcAR0BAAMcCAABHQEcAR0GAAHdDAHVDAgcAd0MAQACHAEdCAAB3QwBHQHdDAcAAd0MCBwCAAIcAR0JAAEdCQAHHAEdAgACHAHdDAkAAd0MCQABHQYcAR0CAAIcFAAB1QwBHQUcAd0MAgACHBQAAd0MAh0EHAMAARwBHRUAAd0MAR0DHAEdAwABHAEdFgAB3QwDHAEdAwABHAHdDBcAAx0B3QwDAAEcGAABHQLVDAQAAR0YAAPdDAQAAR0fAAHdDM8BAAHdDBUcAdUMAx0EHAMAAR0SHAEdAdUMAR0C3QwBHQQcAwABHRIcAh0B3QwCAAHdDAQcAwAB3QwNHAEdBBwC3QwEAAQcBAABHQwcAR0EHAYABBwEAAHVDAwcAd0MBBwGAAEdAxwEAAHdDAwcAQAEHAYAAR0DHAUAAR0LHAEABBwGAAHdDAMcBQABHQocAR0BAAMcAR0HAAMcBQAB3QwKHAEdAQADHAEdBwADHAYAAR0JHAHdDAEAAxwB3QwHAAHVDAEcAR0GAAHVDAkcAgADHAgAAR0BHAEdBgAB3QwBHQccAR0CAAMcCAAB3QwBHQHdDAcAAR0HHAEdAgADHAkAAR0IAAHdDAccAd0MAgADHAkAAd0MCQABHQYcAwADHBMAAR0FHAHVDAMAAhwB1QwTAAHdDAHVDAQcAR0DAAIcAdUMFAABHQHVDAIcAR0B3QwDAAIcAd0MFAAB3QwB1QwCHAEdBAACHBYAAd0MAh0B3QwEAAEcAR0XAAIdBQABHAEdFwAC3QwFAAEcAd0MHgABHR8AAR0fAAHdDNABAAHdDBUcBB0DHAQAAR0SHAIdAt0MAh0DHAQAAR0RHAMdAgAC3QwDHAQAAd0MCxwB1QwFHAEdAt0MBAADHAUAAR0KHAEdBRwB3QwGAAMcBQABHQocAd0MBRwHAAEdAhwFAAHdDAocAQAFHAcAAR0BHAEdBgAJHAIdBRwHAAHdDAIdBgABHQgcAh0EHAEdCAABHQHdDAYAAR0IHALdDAQcAR0IAAHdDAcAAd0MAR0HHAIABBwB3QwRAAEdBhwBHQIABBwSAAHdDAEdBRwBHQIABBwTAAEdBBwB1QwB3QwCAAQcEwAB3QwB1QwDHAEdAwADHAEdFAABHQIcAR0B3QwDAAMcAR0UAAHdDAMdBAADHAHdDBUAAh0B3QwEAAMcFgAC3QwFAAMcHQACHAEdHQABHQHVDAEdHQACHQHdDB0AAt0MsgIAFxwCAAIcBQAXHAIAAR0BHAUAAR0WHAIAAh0FAAEdFRwBHQIAAd0MAR0FAAHdDBUcAR0DAAHdDAYAAdUMFBwB3QwKAAEdDxwB1QwDHAEdCwAB3QwBHQYcAh0FHAHVDAEdAhwCHQwAAR0FHAEdAdUMAR0FHAEdAd0MAtUMAR0B3QwMAAHdDAEdAxwC1QwC3QwFHAHdDAEAAh0B3QwOAAEdAxwBHQHdDAIABBwBHQIAAt0MDwAB3QwB1QwCHQHdDAMAAR0DHAEdFAADHQQAAR0DHAHdDBQAA90MBAAB3QwDHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MswMAAR0OHAEABxwB1QwCHAYAAd0MFhwB3QwCHAcAAR0VHAEAAhwHAAHVDAEdExwBHQEAAh0HAAHdDAIdARwEHQ0cAR0BAAIdCAAB3QwDHQLVDAIdDBwB3QwBAALdDAkAAd0MAR0E3QwBHQwcDgAB3QwEAAHdDAEdBBwB1QwGHBQAAR0C1QwEHQUcFAAB3QwBHQLVDAEdAd0MAdUMBRwVAATdDAEAAd0MBRwbAAUcGwAB1QwEHBsAAR0EHBsAAd0MBBwcAAQcHAAEHBwAAR0CHAEdHAABHQIcAR0cAAHdDAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AARwfAAEcHwABHR8AAR0fAAHdDKsBAAEdGRwGAAEdGRwGAAHdDAHVDBgcBwADHRMcAR0CHAcAAd0MAx0B1QwCHQ8cAdUMAhwIAALdDAEdAtUMAR0B1QwOHAHdDAIcCgAE3QwBHQHVDAwcAR0BAAIcDgAB3QwB1QwMHAEdAQABHQEcDwAB3QwEHAIdAdUMBRwB3QwBAAEdARwQAAEdAxwDHQUcAgAB3QwBHRAAAR0DHAPdDAUcAwAB1QwQAAHdDAMcAwAFHAMAAd0MEQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwBHQHdDAMABRwWAAEdBAAFHBYAAd0MBAAFHBsAAR0EHBsAAdUMBBwbAAHdDAQcHAAEHBwABBwcAAEdAhwB1QwcAAEdAhwBHRwAAd0MAR0BHAHdDB0AAR0BHB4AAd0MARwfAAEdHwABHR8AAd0MSAAB3QwcHAQAHBwEAAQcAR0XHAQABBwCHRYcBAADHAEdAd0MAdUMAR0VHAQAAR0BHALVDAEAAd0MAdUMEhwBHQIcBAABHQEcAR0B3QwCAAHdDAMcAdUMAR0NHAEdAhwEAAHdDAEdAd0MBAABHQEcAdUMAh0FHAEdBhwBHQHdDAIcBQAB1QwFAAEdARwB1QwC3QwFHAEdBhwBHQEAAhwFAAHdDAUAAd0MAR0B3QwCAAUcAd0MBhwB3QwBAAHVDAEcDAABHQMABRwBAAEdBRwCAALVDAwAAd0MAwAFHAEAAR0FHAIAAd0MAR0QAAEdAxwBHQEAAd0MBRwDAAHdDBAAAR0DHAEdAgAFHBQAAd0MAxwB3QwCAAUcFQABHQEcAR0DAAUcFQABHQEcAR0DAAUcFQAB3QwB1QwB3QwDAAUcFgABHQQABRwWAAHdDAQAAR0DHAHVDBsAAdUMAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MiQEAHRwDAB0cAwAFHAIdFhwDAAUcAdUMAR0THAHVDAIcAwAFHALdDAEdEhwB1QwCHAMAAR0DHAEdAgABHRIcAd0MAhwDAAEdAxwBHQIAAd0MAxwCHQUcAR0GHAHVDAEAAhwDAAHdDAMcAd0MAwADHALVDAUcAR0GHAHVDAEAAR0BHAQAAxwEAAMcAt0MBRwB3QwBHQUcAd0MAQABHQEcBAADHAQAAR0BHAEdAgAFHAEAAR0FHAIAAd0MAdUMBAAB1QwBHAEdBAADHQIABRwBAAHdDAUcAwABHQQAAR0BHAEdBAAB3QwBHQHdDAIABRwCAAUcAwAB3QwEAAHdDAEdAd0MBQAB3QwDAAUcAgAFHAkAAR0KAAEdAxwB1QwCAAUcCQAB3QwKAAEdAxwBHQIABRwUAAHdDAMcAd0MAgAFHBUAAxwDAAUcFQABHQEcAdUMAwABHQMcAR0VAAMdAwAB1QwDHAHVDBUAAd0MAR0B3QwDAAHdDAMcAd0MFgAB3QwFAAMcHQADHB0AAR0BHAEdHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MqQEAHRwDAB0cAwAFHAEdAdUMFhwDAAUcAdUMAR0THAIdARwDAAUcAt0MAR0DHAEdDRwEHQMABRwCAAEdAxwBHQYcAh0FHAEdAt0MAdUMAwAFHAIAAd0MAxwB3QwBHQUcAh0FHAHdDAIAAd0MAwABHQMcAR0DAAMcAQABHQUcAt0MBRwHAAHVDAMcAdUMAwABHQEcAR0BAAHdDAUcAgAFHAcAAd0MAxwB3QwDAAMdAgAFHAIABRwIAAMcBAAB3QwB1QwB3QwCAAUcAgAFHAgAAxwFAAHdDAMABRwCAAQcAR0IAAEdAhwJAAEdAxwB1QwCAAEdAxwB1QwIAAHVDAIcCQAB1QwDHAHVDAIAAR0DHAHdDAgAAd0MARwBHQkAAd0MAxwB3QwCAAHdDAMcCgABHAHVDAoAAdUMARwBHQQAAxwKAAEdAd0MCgABHQEcAR0EAAMcCgAB1QwLAAHdDAEdAd0MBAABHQEcAR0KAAHdDAwAAR0FAAEdARwBHRcAAd0MBQAB3QwBHQHdDB4AAR0fAAHdDMkCAB0cAwAdHAMABhwBHRQcAR0B1QwDAAUcAx0DHAHVDAEdDBwB1QwDHQMABRwBHQHdDAHVDAEdAdUMAx0FHAEdAdUMBBwB1QwCHQLdDAMAAR0DHAEdAd0MAQAB3QwC1QwBHQLdDAUcAx0DHAEdAt0MBQABHQMcAR0DAAPdDAIABRwC3QwBHQMcAd0MBwAB3QwDHAHdDAgABRwCAAHdDAMcCQADHAkAAR0DHAEdAwAB1QwBHAEdCQADHAkAAR0DHAEdAwABHQEcAdUMCQAC1QwBHAkAAd0MAxwB3QwDAAHdDAEdAd0MCQAC1QwBHAoAAxwFAAEdCgAC3QwBHQoAAdUMARwBHQUAAd0MDAAB1QwKAAHVDAIdEgAB3QwKAAHdDAEdAd0MHgAB3QyQBAAB3QwGHAIAFBwEAAYcAR0BAAEdCxwBHQccBAAFHAIdAdUMAx0B1QwHHAEdAtUMBhwEAAQcAh0D3QwE1QwEHAMdAd0MAdUMBRwBHQQABBwB1QwB3QwDAAPdDAEdBBwCHQHdDAEAAd0MAh0DHAEdBAAB1QwDHAHdDAcAAd0MAR0BHAIdAt0MAwAB1QwBHQIcAdUMAd0MBAAB1QwCHAHVDAkABB0FAALdDAEdARwBHQUAAd0MAdUMARwBHQkAAd0MAdUMAt0MBwACHQHdDAYAAR0BHAHdDAoAAd0MCQAB3QwBHQcAAd0MARwWAAHdDAgAAR0fAAEdHwAB3Qz+BAAFHAEdDRwBHQccBQAFHAHdDAUcAR0B1QwBHQUcAR0HHAUABRwBAAQcAR0B1QwCHQHVDAIcAh0B3QwHHAUABBwBHQEAAxwB1QwBHQPdDAIdAdUMAh0BAAEdBhwFAAEdAxwBHQEAAxwBHQHdDAMAAd0MAdUMAR0C3QwBAAEdBhwFAAEdAxwB3QwBAAMcAd0MBQAC3QwDAAHdDAYcBQAB3QwDHAIAAdUMARwBHQwABhwGAAHVDAEcAR0CAAMdDAAB1QwFHAYAAR0BHAEdAgAB3QwB1QwB3QwMAAHVDAUcBgAB3QwB1QwB3QwDAAHdDA0AAd0MBRwHAAEdEwAFHAcAAd0MEwAFHBsAAR0DHAEdGwABHQMcAdUMGwAB3QwBHQEcAR0B3QwcAAMdHQAB3QwBHQHdDB4AAd0MxwMACxwCHQ4cBQAKHAEdAdUMAx0MHAUAChwB1QwC3QwB1QwBHQwcBQAKHAHdDAIAAt0MAR0LHAUAAR0DHAEdBRwFAAEdCxwFAAEdAxwB1QwFHAUAAd0MAR0KHAUAAd0MAxwB3QwB1QwDHAEdBgABHQocBgADHAEAAR0DHAHVDAYAAd0MAR0CHAEdBhwGAAMcAQAB3QwDHAHdDAcAAh0BHAEdBhwGAAEdARwBHQIAAxwIAAHdDAHVDAEdAd0MBhwGAAMdAgABHQEcAR0JAAHdDAEdAQAGHAYAAd0MAR0B3QwCAAEdARwBHQoAAd0MAQAGHAcAAd0MAwAB3QwBHQHdDAwABhwMAAEdDQABHQUcDAAB3QwNAAHVDAUcGgAB3QwFHBsABRwbAAUcGwABHQMcAR0bAAHVDAMcAdUMGwAB3QwBHQEcAR0B3QwcAAEdAdUMAR0dAAHdDAHVDAHdDB4AAd0MhwIACxwDHQ0cBQAKHAEdAdUMAh0B1QwMHAUAChwBHQPdDAEdDBwFAAEdCRwB3QwDAAHdDAwcBQAB1QwDHAHVDAUcBQAB1QwLHAUAAd0MAxwB1QwFHAUAAR0LHAYAAxwB3QwFHAUAAd0MCxwGAAEdARwBHQEAAdUMAxwBHQYACxwGAAMdAQABHQMcAR0GAAscBgAB3QwB1QwB3QwBAAHdDAMcAd0MBgALHAcAAd0MAwADHAcAAdUMChwLAAEdAhwHAAEdChwLAAEdARwBHQcAAd0MAhwCHQYcCwAB3QwCHQgAAhwB1QwBHQYcDAABHQHdDAgAAR0BHALdDAYcDAAB3QwJAAEdARwCAAYcFgAB3QwBHQIABhwXAAEdAgAGHBcAAd0MAgABHQUcGgABHQUcGgAB3QwEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAR0BHAEdHQACHQHVDB0AAd0MAR0B3QweAAHdDGYAAd0MAdUMChwCHQHVDAEdDBwFAAHdDAMcAR0FHAIdAdUMAd0MAdUMDBwGAAMcAR0FHAEdAt0MAQAB3QwMHAYAAR0BHAEdAd0MBRwB3QwEAAwcBgADHQEABRwFAAwcBgAB3QwBHQHdDAEAAR0DHAEdBQAMHAcAAd0MAgABHQMcAdUMBQAEHAEdBxwKAAHdDAMcAd0MBQABHQMcAR0HHAsAAxwGAAEdAxwB3QwHHAsAAR0CHAYAAd0MAxwBAAccCwABHQEcAR0HAAscCwAB3QwCHQcACxwMAAHVDAHdDAcACxwMAAHdDAgAAxwBHQccFQAB1QwCHAIdBhwVAAEdAhwB3QwBHQYcFQAB3QwCHAEAAd0MBhwWAAIcAgAGHBYAAhwCAAYcFgABHQEcAgAGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwB1QwbAAHVDAMcAd0MGwAB3QwBHQEcAR0dAALVDAEdHQAB3QwBHQHdDB4AAd0MJgAC3QwBAAPdDAEdBxwBHQHVDAwcCgABHQYcAR0C3QwMHAoAAd0MBhwBHQIADBwLAAYcAd0MAgAMHAsABhwDAAwcCwABHQEcAR0CHAEdAwAMHAsAAR0BHAHVDAIcAR0DAAwcCwAB3QwBHQHdDAIdAd0MAwAMHAwAAR0BAAIdBAABHQscDAAB3QwBAALdDAQAAR0LHBQAAd0MCxwVAAMcAR0HHBUAAxwBHQccFQADHAHdDAccFQADHAEABxwVAAMcAQABHQYcFQABHQIcAQABHQYcFQABHQIcAQAB3QwGHBUAAd0MAhwCAAYcFgACHAIABhwWAAEdARwCAAYcFgAB1QwBHAIAAdUMBRwWAAHdDAEcAgABHQUcFwABHQIAAd0MBRwXAAHVDAMABRwXAAHdDAMABBwBHRsAAR0DHAHVDBsAAR0DHAHdDBsAAd0MAR0BHAEdHQADHR0AAd0MAR0B3QweAAHdDAMAAt0MAR0DHAEdAwABHQYcAt0MDBwDAAHdDAMcAd0MAwAB3QwGHAIADBwEAAMcBQABHQUcAgAMHAQAAxwFAAEdBRwCAAwcBAADHAUAAd0MBRwCAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAABHQEcAdUMBgABHQMcAR0CAAwcBAAB3QwB1QwB3QwGAAHdDAMcAd0MAgABHQscBQABHQgAAxwDAAEdCxwFAAHdDAgAAxwDAAHdDAscDgABHQEcAR0EAAMcAR0HHA4AAR0BHAEdBAADHAEdBxwOAAHdDAEdAd0MBAADHAHdDAccDwABHQUAAxwBAAccDwAB3QwFAAEdAhwBAAccFQAB1QwCHAEABxwVAAHdDAIcAQAHHBYAAhwBAAEdBhwWAAIcAQABHQYcFgABHQEcAQAB3QwGHBYAAh0CAAEdBRwWAAHdDAEdAgABHQUcFwAB3QwCAAHdDAUcGwAFHBsABBwBHRsAAdUMAxwBHRsAAR0DHAHdDBsAAd0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MIgAC3QwB1QwFHAMAAR0GHALdDAwcAgAB3QwFHAMAAdUMBhwCAAwcAwAFHAMAAd0MAR0FHAIAAR0LHAMABRwEAAHVDAUcAgABHQscAwAFHAQAAd0MBRwCAAHdDAMcAR0HHAMAAdUMAxwBHQUABRwDAAMcAdUMBxwDAAEdAxwBHQUABRwDAAMcAd0MBxwDAAHdDAMcAd0MBQAEHAEdAwADHAEABxwEAAMcBgAEHAHVDAMAAxwBAAccBAADHAYABBwB3QwDAAMcAQAHHAQAAdUMARwBHQYAAR0DHAQAAR0CHAEABxwEAAEdARwBHQYAAR0DHAQAAR0CHAEABxwEAAHdDAEcAd0MBgAB3QwBHQEcAR0EAAHdDAIcAQAHHAUAAR0IAAEdARwBHQUAAhwBAAccBQABHQgAAd0MAR0B3QwFAAEdARwBAAccBQAB3QwJAAEdBgABHQEcAQAHHA8AAd0MBgAB3QwBHQEAAR0GHBcAAR0BAAEdBhwXAAHdDAEAAd0MAR0FHBoAAR0EHAEdGgAB3QwEHAHVDBsABBwB3QwbAAEdAxwcAAEdAxwcAAHdDAIcAR0dAAMdHQACHQHdDB0AAt0MggEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gCgAARwfAAEcHwAB1QwfAAEdHwAB3Qz/BgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8FAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB3QzfBQABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAR0dAAEcAdUMAR0dAAEdAdUMAd0MHQABHQHdDB4AAd0M/wYAAhwBHQHdDBwAAhwB1QwdAAHVDAEdAd0MHQACHR4AAt0M/gYAAhwBHQHdDBwAARwBHQHVDB0AAh0B3QwdAAEdAd0MHgAB3Qz/BgABHAEdAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDP8EAAEcAdUMAt0MHAABHAHVDB4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/BAACHAEdAd0MHAABHAIdHQABHAEdAd0MHQABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MvwUAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAEdAd0MHgAB3QzfBgACHAEdAd0MHAABHAIdHQAB1QwBHQHdDB0AAdUMAd0MHgAB3Qz/BgACHAHdDB0AARwBHR4AAR0B1QweAAEdAd0MHgAB3Qz/BgABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M3wUAAhwB3QwdAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MnwUAARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3QzfBQABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8GAAEdHwAB1QwfAAHdDL8HAAEcAd0MHgAB1QwfAAEdHwAB3QyfBwABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAdUMHwAB3Qz/BQACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEdHwAB1QwfAAHdDJ8EAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3QyfAwADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDP8CAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAHVDB0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwB1QweAAEcAd0MHgABHB8AAR0fAAEdHwAB3QzfAgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQACHAHVDB0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwAB1QwfAAEdHwAB3QyfAgADHB0AAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHB8AAR0fAAEdHwAB3Qz/AQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("jigAAd0M/AcAAd0MAR0B1QwB3QwdAAEdAd0MHgAB3Qy8BwAB1QwBHAEdAhwBHRoAAd0MBB0B3QwbAAEdAd0MAh0cAAHdDAEAAt0MmgcAAR0FHAHdDBkAAh0BHAEdAdUMAR0aAAHdDAEdAdUMAx0bAAHdDAHVDAPdDBwAAd0M/AYAAR0B1QwFHAHdDBgAAd0MAh0DHAEdGgAB3QwBHQMcAR0bAAHdDAIcAR0B3QwcAAEcAh0dAAHVDAEdAd0MHQABHQHdDB4AAd0MnAYAAd0MAdUMBBwBHRoAAh0CHAEdAd0MGgAB3QwCHQEcAR0cAAHdDALVDAHdDB0AAd0MAR0fAAHdDNwGAAMdARwBHQHdDBoAAd0MAx0B1QwcAALdDAEdAd0MHgAB3QydBwAB3QwCHQHdDB0AAR0B3QweAAHdDLWfAQA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AQAB3QwBHQUcAgAB3QwBHQYcAwALHAIAAd0MBRwDAAEdBhwDAAscAwAFHAMAAd0MAR0FHAMAAdUMChwDAAUcBAABHQUcAwABHQocAwAFHAQAAd0MBRwDAAHdDAocAwAFHAUABBwBHQQAChwDAAUcBQAEHAEdBAAKHAMABBwBHQUABBwB3QwEAAEdAhwBHQYcAwAEHAEdBQAEHAUAAh0BHAHVDAYcAwAEHAHdDAUAAR0DHAUAAd0MAR0B1QwB3QwGHAMAAdUMAxwGAAHVDAEdAhwGAAHdDAEdAQAGHAMAAdUMAxwGAAHdDAEdARwBHQcAAd0MAQAGHAMAAd0MAR0BHAEdBwAB3QwCHQkABhwEAAEdARwBHQgAAR0B3QwJAAYcBAAB3QwBHQHdDAgAAd0MCgAGHAUAAdUMFAAGHAUAAd0MFAAGHBoABhwaAAIdBBwaAAEdAdUMBBwaAALdDAEdARwBHQEcHAADHQEcHAAB3QwBHQHdDAHVDB0AAd0MAQAB1QwfAAHdDOIBAAHdDAUcAd0MAQAB3QwB1QwGHAcAAR0GHAMABRwDAAIdBRwHAAHVDAYcAwAFHAMAAd0MAR0EHAEdBwAB3QwGHAMABRwEAAHdDAQcAR0IAAYcAwAFHAUAAdUMAxwB3QwIAAYcAwAEHAEdBQABHQMcCQAGHAMABBwB1QwFAAHdDAMcCQAGHAMABBwB3QwGAAMcCQABHQUcAwAEHAcAAxwJAAEdBRwDAAEdAxwHAAIcAR0JAAHdDAUcAwABHQIcAR0HAAHVDAIdCgAFHAMAAd0MAhwBHQcAAh0B3QwKAAUcBAABHAEdAd0MBwAC3QwLAAUcBAABHAEdFQAFHAQAARwB3QwVAAUcBAABHRYABRwEAAHVDBYAAdUMBBwEAAHdDBYAAR0BHAHVDAIcGwAB3QwCHQIcHAABHQHdDAIcHAAB3QwBAAEdARweAAHVDAEdHgAB3QwBHR8AAd0MggIAAd0MBRwB3QwBAALdDAMdAd0MCgAB3QwFHAMAAR0DHAEdBAADHQwABRwDAAEdAxwBHQQAA90MDAAFHAMAAd0MAxwB3QwTAAUcBAADHBQAAR0EHAQAAxwUAAHVDAQcBAADHBQAAd0MBBwEAAMcFQABHQMcBAACHAEdFQABHQMcBAACHAEdFQAB3QwDHQQAAhwB3QwWAAMdBAABHAEdFwAD3QwEAAIdHgABHQHdDB4AAd0MvgQAAt0MAR0B1QwBHQMAA90MFwAB3QwC1QweAALdDLjnAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("AxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AARwB1QweAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0M/wEAAhweAAIcHgACHB4AAhweAAIcHgABHAHVDB4AARwBHR4AARwB3QweAAEcHwAB1QwfAAHVDB8AAd0MnwUAARwfAAEdHwAB1QwfAAHdDJ/vAQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          rockSnowLarge2: Om("rockSnowLarge2", {
            x: 36,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("BgACHAHVDAHdDBwAAR0BHAEdHQABHQHVDAHdDB0AAd0MAR0fAAH6Cf4GAAUcAR0GAATdDAcAAR0CHAYABRwB3QwRAAHdDAIcBgAFHBMAAhwGAAUcEwACHAYAAR0EHBMAAdUMARwGAAIdAhwBHRMAAdUMARwGAAHdDAHVDAIcAR0TAAHdDAEdBwAB3QwBHQEcAd0MFAAB1QwIAAHVDAEcFQAB3QwIAAHdDAEdHwAB1QwfAAHdDJwFAAEdBRwEAAccAd0MBAAB3QwDHAYAAR0FHAQAAR0GHAYAAxwGAAHdDAUcBAABHQYcBgADHAcABRwEAAHdDAUcAR0GAAMcBwAEHAEdBQADHAEdARwB1QwGAAHVDAIcBwAEHAEdBQABHQEcAh0BHAHdDAYAAdUMAhwHAAQcAd0MBQADHQHdDAEdBwAB3QwCHAcAAR0DHAYAAfoJAR0B3QwBAAEdCAACHAcAAR0DHAcAAd0MAgAB+gkIAAIcBwAB+gkBHQEcAR0TAAEdARwIAAMdEwAB1QwBHQgAAd0MAR0B3QwTAAHdDAEdCQAB3QwVAAHdDOYEAAHdDAUcAwAIHAHdDAQAAd0MAxwHAAUcAwAB1QwHHAYAAxwHAAUcAwABHQccBgADHAcABRwDAAHdDAccBgADHAcABRwEAAccBgADHAcABRwEAAccBgADHAcAAdUMAxwBHQQABhwBHQYAAR0CHAcAAR0DHAHVDAQAAR0DHAMdBgABHQIcBwAB3QwDHAHdDAQAAR0DHAIdAd0MBgAB3QwCHAgAAxwFAAHdDAMcAt0MCAACHAgAAdUMARwBHQYAAxwKAAEdARwIAAEdARwBHQYAAxwKAAEdARwIAAHdDAEdAd0MBgADHAoAAd0MAR0JAAHVDAcAAxwLAAEdCQAB+gkHAAMcCwAB3QwRAAMcCwAB3gwRAAMcCwAB3gwRAAIcAR0LAAHeDBEAARwCHR0AARwBHQH6CR0AAR0B3QweAAEdHwAB+gmvAgAB3QwFAAUcAwAIHAHdDAUAAxwHAAUcAwAIHAYAAxwHAAUcAwAIHAYAAxwHAAUcAwAHHAEdBgADHAcAAR0DHAEdAwAHHAEdBgABHQIcBwABHQMcAR0DAAHVDAUcAR0B3QwGAAEdAhwHAAHdDAMcAd0MAwABHQUcAR0HAAHdDAIcCAADHAQAAd0MBRwB3QwIAAIcCAADHAUABRwJAAIcCAABHQEcAR0FAAUcCQABHQEcCAACHQHVDAUABRwJAAIdCAAB3QwBHQHdDAUAAR0BHAEtAhwJAAHdDAEdCQAB3QwGAAEdARwBLQIcCgAB3QwQAAHdDAEcAS0CHBwAAxwBHRwAAxwBHRwAARwBHQHVDAHdDBwAAx0dAAHVDALdDB0AAd0MjgMAAR0BHAEdAd0MAwABHQMcAR0BAALdDAccAd0MBgABHQIcAdUMARwB1QwEAAHdDAMcAd0MAwAHHAcAAd0MAhwB3QwBHQHdDAUAAxwEAAccCAACHAEAAR0GAAMcBAAHHAgAAhwBAAH6CQYAAdUMARwBHQQABxwIAAEdARwIAAEdARwBHQQABxwIAAEdARwIAAHdDAEdAd0MBAABHQUcAR0IAAHdDAHVDAkAAR0FAAEdBRwBHQkAAR0JAAHdDAUAAd0MBRwB3QwJAAHdDBAABRwbAAUcGwAFHBsAAR0DHAHVDBsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAHVDAEcAdUMHQAC1QwBHR0AAd0MAR0B3QweAAHdDI0DAAUcAR0DAAHdDAEAAd0MAR0BHAEdBxwCAAH6CQEAAd0MBAAB+gkFHAHdDAYAAh0B1QwHHAoAAR0EHAcAAd0MAdUMAd0MBxwKAAEdBBwIAAHdDAEABxwKAAHdDAEcAR0BHAEdCgAHHAsAAh0BHAHVDAoAAR0FHAHVDAsAAR0B3QwBHQH6CQoAAR0FHAHVDAsAAd0MAQAB1QwLAAHdDAUcAd0MDQAB3QwMAAUcGwAFHBsABRwbAAHVDAMcAR0bAAEdAxwB1QwbAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAR0B+gkeAAHdDK0DAAEdBRwDAA0cAgAB3QwB1QwBHAEdBAABHQUcAwAFHAIdBRwBHQMAAdUMARwB1QwEAAH6CQUcAwAFHAIdBRwB1QwDAAHdDAEdAd0MBQAFHAMAAR0DHAEdAt0MBRwB3QwEAAEdBgABHQMcAR0DAAEdAxwBHQIABRwFAAHdDAYAAdUMAxwB1QwDAAHdDAMcAd0MAgAFHAwAAd0MAxwB3QwEAAMcAwAFHA0AAxwFAAMcAwAB1QwDHAEdDQADHAUAAxwDAAEdAxwBHQ0AAR0BHAEdBQADHAMAAd0MAxwB3QwNAAEdARwBHQUAAR0CHAQA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GgABHQUcGgAB3QwB1QwDHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAR0BHAEdHQADHR0AAd0MAdUMAd0MHgAB3QxyAAHdDAEdAd0MAwAB+gkMHAHdDAEAAfoJAd0MBAABHAUAAR0FAAEdCxwIAAEcBQAB3QwFAAEdCxwIAAEcCwAB3QwLHAgAARwMAAscCAABHAwAAR0JHAEdCAABHAwAAdUMCRwB1QwIAAEcDAAB3QwJHAHdDAgAARwNAAkcCQABHA0ACRwJAAEdDQAJHAkAAR0NAAkcCQAB3QwNAAkcFwAJHBcAAR0HHAHVDBcAAdUMBxwBHRcAAd0MBxwB3QwYAAccGQAHHBkABxwZAAccGQABHQUcAdUMGQAB1QwFHAHVDBkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAEdBBwbAAIdAxwbAAHdDAEdAdUMAhwbAAHeDAHdDAMdHQAB3QwCHRAABRwCAAHdDAwcAR0GAAEcBAAB1QwDHAEdAwAMHAEdBgABHAQAAdUMAxwBHQMACxwBHQHdDAYAARwEAAHdDAMcAd0MAwALHAEdBwABHAUAAxwEAAscAd0MBwABHAUAAR0BHAEdBAALHAgAARwFAAMdBAALHAgAARwFAAHdDAHVDAHdDAQACxwIAAEcBgAB3QwFAAEdCRwBHQgAARwMAAEdCRwBHQgAARwMAAHdDAkcAd0MCAABHQ0ACRwJAAEdDQAJHAkAAd0MDQAJHBcACRwXAAkcFwAJHBcAAR0HHAEdFwABHQccAR0XAAHdDAccAd0MGAAHHBkABxwZAAccGQAHHBkABxwZAAEdBhwZAAEdBhwZAAHdDAYcGgAGHBoABhwaAAEdAxwBHQEcGgAB1QwDHAEdAdUMDgAHHAEAAd0MDRwB3QwDAAH6CQHdDAEcAwABHQUcAR0CAA0cBgABHAMAAR0FHAEdAgAMHAHVDAYAARwDAAHdDAUcAd0MAgAMHAHVDAYAARwEAAUcAwALHAEdAd0MBgABHAQABRwDAAscAdUMBwABHAQABRwDAAscAd0MBwABHAQAAR0DHAHVDAMACxwIAAEcBAAB1QwDHAEdAwALHAgAARwEAAHdDAMcAd0MAwABHQkcAR0IAAEdBQADHAQAAR0JHAEdCAAB1QwFAAEdARwBHQQAAd0MCRwB3QwIAAHdDAUAAR0B1QwBHQUA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AR0EAAEdBRwQAAUcAR0EAAHdDAEdBBwQAAEdBBwB3QwFAAEdBBwQAAHVDAMcAR0GAAHdDAQcEAAB3QwDHAHVDAcABBwRAAMcAd0MBwAEHBEAAhwBHQgAAR0CHAEdEQADHQgAAR0CHAEdEQAB1QwBHQH6CQgAAd0MARwB1QwB3QwRAAHdDAH6CQoAAdUMAR0eAAEdAd0MHgAB3Qz7AgABHQccBQAB3QwB1QwB3QwGAAccAgABHAHdDAccBgAB3QwHAAHVDAUcAR0CAAEdAQAHHA4AAR0FHAEdAgABHQEABxwOAAHdDAUcAfoJAgAB3QwBAAccDwAFHAUABxwPAAUcBQAHHA8ABRwFAAccDwABHQQcBQAHHA8AAdUMBBwFAAHVDAUcAR0PAAHdDAQcBQABHQUcAR0QAAEdAxwFAAHdDAUcAd0MEAACHQHVDAEcBgAFHBEAAd0MAh0BHAYABRwSAALdDAHVDAYABRwUAAEdBgAB1QwEHBQAAd0MBgABHQQcGwAB3QwEHBwAAxwB1QwcAAMcAR0cAAMcAd0MHAAB1QwCHB0AAdUMAhwdAAHdDAEcAR0eAAIdHgABHQHdDB4AAd0MuwEA")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("kYABAAHeDAHdDAH6CfsHAAHdDAIcAR0B3QwBHRsAAR0BHAEdAQAB3QwbAAEdARwB3QwBAAHeDBsAAfoJAR0CAAHeDBwAAR0CAAHeDBwAAd0MHwAB3gy9BgABHQEcAfoJARwB1QwBHRoAAd0MARwBLQEcAt0MGwAB1QwBLQEdHQABHQEtAR0dAAHdDAEtAd0MHgABLR8AAR0fAAHdDJ0GAAHdDAIcAdUMAd0MHAAB1QwBHAH6CQHeDBwAAR0BHB4AAd0MARwfAAHVDB8AAR0fAAH6Cb0GAAEcAd0MAR0B3QwcAAEdAQAB3QwdAAEdAQAB3gwdAAHdDB8AAd4MHwAB3gwfAAHeDLBeAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AR0HHA8ABRwB3QwDAAEdBxwPAAEdAxwBHQQAAd0MBxwPAAHVDAMcAR0FAAccDwAB+gkDHAHdDAUABxwQAAMcBgAHHBAAAR0CHAYABxwQAALVDAEcBgAHHBAAAd0MAR0BHAYABxwRAAHdDAEdBgABHQYcEgABHQYAAR0FHAEdEgAB3QwGAAHdDAUcAdUMGgAFHAHdDBoABRwbAAUcGwAFHBsABRwbAAEdBBwbAAEdAxwBHRsAAd0MAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAEdAhwdAAEdARwBHR0AAd0MARwBHR4AAR0B3QweAAEdAd4MHgAB3QwB3gwfAAHeDDoAAR0HHBgAAd0MBxwZAAccGQAHHBkABxwZAAccGQAHHBkABxwZAAccGQABHQUcAR0ZAAEdBRwB1QwZAAHdDAUcAd0MGgAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAR0DHAEdGwAB3QwDHAHdDBwAAxwdAAMcHQADHB0AAdUMARwBHR0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDJsBAAHdDAccGQAHHBkABxwZAAEdBRwBHRkAAR0FHAEdGQAB3QwFHAHdDBoABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAEdARwBHR0AAx0dAAHdDAHVDAHdDB4AAd0M/QIABRwB3QwaAAUcGwAFHBsAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAADHB0AAxwdAAMcHQADHB0AAdUMAhwdAAEdAhwdAAHdDAIcHgACHB4AAhweAAHVDAEdHgAB1QwBHR4AAt0M2uMBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("AhwBHQHdDBwAAhwB1QwdAAIcAd0MHQACHB4AAhweAAIdHgAC1QweAAHdDAH6CZ8GAALdDP33AQA=")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          rockSnowLarge3: Om("rockSnowLarge3", {
            x: 38,
            y: 40,
            z: 33
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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AR0ZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAh0DHBsAAh0DHBsAAt0MAR0BHAEdHQABHQHVDAEdHQAB3QwBHQHdDB4AAd0MjAEAAd0MChwBHQHVDAwcCAABHQHVDAEdBBwCHQHVDAIdDBwIAAMdAdUMARwEHQHVDALdDAwcCAAD3QwBHQHVDAIdA90MAgAMHAsAAd0MAR0C3QwFAAscAdUMDAAB3QwHAAEdChwBHRQAAdUMChwB3QwUAAHdDAocFgAKHBYACRwBHRYACRwBHRYACRwB3QwWAAHVDAgcFwABHQgcFwAB3QwIHBgACBwYAAccAdUMGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAdUMBBwB1QwaAAEdBBwB1QwaAAHdDAEdAxwB3QwbAAEdAxwcAAHdDAIcAdUMHQABHQEcAR0dAAEdAdUMAd0MHQAB3QwBHQ8AAR0HHAIdDBwKAAHVDAEdBhwCHQwcCgAB3QwBHQYcAt0MDBwLAAHdDAUcAR0CAAwcDAAEHAIdAgAMHAwAAhwBHQHVDAEdAd0MAgABHQscDAAEHQHdDAMAAR0KHAEdDAABHQHVDALdDAQAAd0MChwBHQwAAt0MBwAKHAHdDBUACRwBHRYACRwBHRYACRwB3QwWAAkcFwABHQgcFwABHQgcFwAB3QwIHBgACBwYAAgcGAAHHAEdGAAHHAHVDBgAAR0GHAHdDBgAAR0GHBkAAd0MBhwaAAYcGgAGHBoAAR0EHAEdGgABHQQcAR0aAAHdDAQcAd0MGwABHQMcHAABHQMcHAAB3QwCHAEdHQABHQEcAR0OAAEdBxwCHQwcCgAB3QwHHALdDAwcCwAHHAIADBwLAAccAgAMHAsAAR0FHAEdAgAMHAsAAR0EHAIdAgAB1QwLHAsAAd0MAdUMAR0BHAIdAd0MAgAB1QwKHAHVDAwABB0B3QwDAAHdDAocAR0MAALdDAEdAd0MBQAKHAHdDA4AAd0MBgAKHBYAChwWAAkcAR0WAAEdCBwBHRYAAR0IHAHdDBYAAd0MCBwYAAgcGAAIHBgACBwYAAgcGAABHQccGAABHQYcAR0YAAHdDAYcAdUMGQAGHAHdDBkAAR0FHBoAAR0EHAEdGgAB3QwEHAEdGwAEHAHdDBsAAR0DHBwAAR0DHBwAAd0MAR0BHAHVDB0AAR0BHAHVDB0AAd0MAR0B3QwNAAIdBxwCHQwcCQAB3QwBHQccAt0MDBwKAAHdDAccAgAMHAsABxwCAAEdCxwLAAEdBhwCAAHVDAscCwABHQUcAR0CAAHdDAscCwAB3QwB1QwDHALVDAMAChwBHQwAAh0CHAEdAd0MAwAKHAEdDAAB3QwBHQEcAR0B3QwEAAocAd0MDQAB3QwBHAEdBQAKHA8AARwB3QwFAAEdCBwBHQ8AAdUMBgABHQgcAR0PAAEdBgAB3QwIHAHdDA8AAd0MBwAIHBgACBwYAAHVDAccGAABHQccGAAB3QwHHBkABhwBHRkABhwB1QwZAAYcAd0MGQABHQUcGgAB1QwEHAEdGgAB3QwBHQMcAR0bAAEdAxwB3QwbAAHdDAMcHQABHQEcAR0dAAEdARwBHR0AAd0MAR0B3QweAAHVDB8AAd0MLQACHQgcAR0B1QwMHAgAAd0MAh0HHALdDAwcCQAB3QwBHQccAgAB1QwLHAoAAd0MBxwCAAEdCxwLAAccAgAB3QwKHAEdCwABHQUcAdUMAwAKHAEdCwABHQUcAR0DAAHVDAkcAd0MCwAB3QwB1QwDHAEdAd0MAwAB1QwJHA0AAR0DHAEdBAAB3QwJHA0AAd0MAxwB3QwFAAgcAdUMDgADHAYACBwBHQ4AAdUMARwBHQYAAR0HHAHdDA4AAh0B1QwGAAEdBxwPAAHdDAEdAd0MBgAB3QwHHBAAAd0MCAAHHBkABxwZAAEdBhwZAAEdBRwB1QwZAAHdDAUcAR0aAAUcAd0MGgAFHBsAAR0EHBsAAh0CHAEdGwAB3QwB1QwCHAEdHAAB3QwCHQHdDB0AAh0eAALdDKcBAAHVDA4cAh0LHAHVDAMAAd0MDhwC3QwLHAHdDAQABRwC1QwGHAHVDAIAAdUMChwFAAEdBBwBHQHVDAYcAR0CAAHVDAEdCRwFAAHVDAMcAR0C3QwGHAHdDAIAAd0MAdUMCRwFAAHdDAEdAhwB1QwCAAYcBAAB3QwJHAYAAdUMAR0B1QwB3QwCAAEdBBwBHQUACBwBHQYAAd0MAdUMAR0DAAEdBBwBHQUACBwBHQcAAt0MAwAB3QwBHQMcAd0MBQABHQccAd0MDQABHQMcBgAB1QwGHAEdDgAB3QwBHQEcAR0GAAHdDAYcAdUMDwAC1QwBHQcAAdUMBRwB3QwPAAHdDAEd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CxwB3QwMAAEdAxwBHQMACxwNAAHdDAEdARwB1QwB3QwDAAscDgAB1QwCHQQACxwOAAHdDAHVDAHdDAQACxwPAAHdDAUACxwVAAscFQABHQkcAR0VAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwAJHBcAAdUMCBwXAAEdCBwXAAHdDAgcGAAHHAEdGAAHHAEdGAAHHAHdDBgAAR0GHBkAAR0GHBkAAd0MBRwBHRoABRwBHRoAAR0EHAHdDBYADRwBAAccAx0GHAEdAQANHAEAAR0GHAPdDAYcAR0BAA0cAQAB1QwBHQQcAR0DAAYcAd0MAQANHAEAAd0MAdUMBBwB1QwDAAYcAgANHAIAAd0MBBwB3QwDAAYcAgANHAMABBwEAAEdBRwCAAEdCxwBHQMAAxwBHQQAAR0FHAIAAR0LHAEdAwADHAEdBAAB3QwFHAIAAd0MCxwB3QwDAAEdARwBHQHdDAUABRwDAAscBAADHQYAAR0DHAEdAwALHAQAAd0MAR0B3QwGAAHVDAMcAR0DAAscBQAB3QwHAAHdDAEdARwBHQHdDAMACxwOAAHVDAIdBAALHA4AAd0MAR0B3QwEAAscDwAB3QwFAAEdCRwB1QwVAAEdCRwBHRUAAd0MCRwB3QwWAAkcFwABHQgcFwABHQccAdUMFwAB3QwHHAEdGAABHQYcAd0MGAACHQUcGQAB3QwBHQUcGgAB3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwXAA0cAQAHHAMdBhwBHQEADBwB1QwBAAEdBhwD3QwGHAHdDAEADBwBHQEAAR0GHAMABhwCAAEdCxwB3QwBAAHdDAUcAR0DAAYcAgABHQscAwAFHAEdAwABHQUcAgAB3QwLHAMABRwB3QwDAAEdBRwDAAscAwAFHAQAAd0MBRwDAAscAwAFHAUABRwDAAscAwABHQIcAh0FAAEdAxwB1QwDAAscAwABHQIcAdUMAR0FAAEdAxwB1QwDAAscAwAB3QwBHQHVDALdDAUAAd0MAR0BHAHVDAHdDAMAChwBHQQAAR0B1QwIAAMdBAAKHAEdBAAC3QwIAAHdDAEdAd0MBAAB1QwJHAHdDA8AAd0MBQABHQkcFgAB3QwJHBcACRwXAAkcFwABHQccAR0XAAHVDAccAdUMFwAB3QwHHAHdDBgABhwBHRkAAx0DHAEdGQADHQMcAd0MGQAD3QwDHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAR0BHB4AAh0YAAEdCxwDHQYcAR0B3QwBAAYcAgAB3QwLHALdDAEdBhwB3QwBAAHdDAYcAwALHAIAAd0MBhwDAAEdBRwDAAscAwAGHAMAAdUMBRwDAAscAwAFHAEdAwAB3QwFHAMAAR0KHAMABRwBHQQABBwBHQMAAR0KHAMABRwB3QwEAAEdAxwBHQMAAd0MChwDAAQcAR0FAAEdAxwB3QwEAAocAwAEHAEdBQAB3QwBHQEcAdUMBQAJHAEdAwABHQIcAR0B3QwGAAMdBQAJHAHVDAMAAR0B1QwBHAHVDAcAAd0MAR0B3QwFAAkcAd0MAwAB3QwBHQEcAd0MCAAB3QwGAAgcAR0FAAHdDAHVDBAACBwB1QwGAAEdEAAIHAHdDAYAAd0MEAAIHBgAAdUMBxwYAAEdBxwYAAHdDAYcAR0ZAAEdBRwB1QwZAAMdAxwB3QwZAAHdDAIdAhwBHRsAAt0MAhwBHR0AAdUMAR0B3QwdAAIdHgAC3QzZAQALHAEAAd0MAR0HHAMABBwEAAEdCRwBHQIAAd0MBxwDAAQcBAABHQkcAR0DAAEdBhwDAAEdAxwEAAHdDAkcAd0MAwABHQQcAR0BHAMAAR0DHAUACRwEAAHdDAQcAR0B3QwDAAIdARwBHQUACRwFAAQcAd0MBAAEHQUACRwFAAQcBQABHQHdDAHVDAHdDAUAAR0IHAUAAxwBHQUAAd0MAQAB3QwGAAEdCBwFAAIcAh0OAAHdDAgcBQACHAHVDAHdDA8ABxwBHQUAAhwB3QwQAAccAdUMBQABHAEdEQAB1QwFHAEdAd0MBQABHAEdEQABHQUcAR0GAAEdAd0MEQAB3QwFHAHdDAYAAR0TAAUcBwAB3QwTAAUcGwAFHBsAAh0CHAEdGwACHQIcAR0bAALdDAIcAd0MHQABHQEcHgAB1QwBHR4AAd0MAdUMHwAB3Qz6AQAB1QwIHAMAAd0MAR0JHAEAAx0FAAEdCBwEAAEdCRwBAAPdDAUAAd0MCBwEAAHdDAHVDAIcAR0B3QwEHAoABxwBHQUAAR0CHAHdDAEABBwKAAccAdUMBQAB3QwCHAIABBwKAAccAd0MBgACHAIABBwKAAccBwACHAIABBwKAAccBwAB1QwBHQIABBwKAAccBwAB1QwBHQIABBwKAAEdBRwBHQcAAt0MAgAEHAoAAR0FHAEdCwABHQMcCgAB3QwCHQMcAd0MCwABHQMcCwAB1QwBHQMcDAAB3QwDHAsAAt0MAhwBHQ0AAxwNAAIcAdUMDQADHA0AARwBHQHdDA0AAxwNAAIdDgADHA0AAR0B3QwOAAMcDQAB3QwPAAMcHQACHAEdHQABHQEcAR0dAALVDAHdDB0AAd0MAR0fAAHdDIgCAA==")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gHAAARwfAAHVDB8AAR0fAAHdDJ8HAAEcHwABHB8AAdUMHwABHR8AAd0M/wYAARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wYAARwfAAEcHwABHR8AAdUMHwAB3Qz/BgABHR8AAR0fAAHdDL9vAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("mngAAd0M/gcAAh0B3QwdAAHdDAEdHwAB3Qy/BwAB1QwfAAHdDMo3AAMcAd0MHAABHQEcAR0dAAHVDAIdHQAB3QwBHQHdDB4AAd0M/QYAAR0DHAEdGwABHQMcAR0bAAHdDAMcAd0MHAABHQEcAR0dAAIdAdUMHQAB3QwBHQHdDB4AAd0MvQYAAR0EHBsAAd0MAxwBHRwAAxwBHRwAAxwB3QwcAAHVDAEcAR0dAAMdHQAB3QwBHQHdDB4AAd0MngYAAxwB1QwcAAEdAhwBHRwAAR0CHAHdDBwAAd0MARwBHR4AAh0eAAEdAd0MHgAB3Qy/BgAB3QwB1QwfAAHdDNgfAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AwABHQUcAR0EAAHdDAIdAdUMAx0EHAoAAd0MBRwB3QwFAALdDAQdBBwLAAHVDAQcCAAE3QwEHAsAAR0DHAHVDAwABBwLAAHdDAQdDAAEHAwAAdUMAh0B3QwMAAQcDAAD3QwNAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwB1QwdAAHVDAEcAd0MHQACHR4AAd0MAR0fAAHdDLYBAAHdDAUcAR0EHBYABRwB1QwEHBYAAR0DHAEdAd0MBBwWAAEdAxwBHQEABBwWAAHdDAMcAd0MAQAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAxwCAAQcFwADHAIABBwXAAMcAgAEHBcAAhwBHQIAAR0DHBcAAR0BHAHVDAIAAR0DHBcAAdUMARwB3QwCAAHdDAMcFwAB3QwBHQQAAxwYAAEdBAADHBgAAd0MBAADHB0AAhwB1QwdAAIcAR0dAAHVDAEcAd0MHQABHQEcHgAB3QwBHB8AAR0fAAEdHwAB3Qz2AQABHQUcAR0EHBUAAd0MBRwB3QwEHBYABRwBAAQcFgAFHAEAAR0DHBYABRwBAAEdAxwWAAUcAQAB3QwDHBYABRwCAAMcFgAFHAIAAxwWAAUcAgACHAEdFgAEHAHVDAIAAhwBHRYABBwBHQIAARwBHQHdDBYABBwB3QwCAAIdFwAEHAMAAR0B3QwXAAQcAwAB3QwYAAEdAxwcAAHVDAMcHAAB3QwDHB0AAxwdAAMcHQADHB0AAR0CHB0AAR0BHAEdHQAB3QwBHAEdHgABHQHdDB4AAR0fAAHdDNsBAAHdDAEdBRwEHQEcFQAB3QwFHATdDBcABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwAEHBwABBwcAAQcHAAEHBwABBwcAAEdAxwcAAEdAxwcAAHdDAMcHQADHB0AAxwdAAMcHQADHB0AAR0BHAHVDB0AAR0BHAEdHQAB3QwBHQHdDB4AAR0fAAHdDHsAAd0MAR0FHAMdAd0MFgAB3QwFHAPdDBgABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsABBwcAAQcHAAEHBwABBwcAAQcHAAB1QwDHBwAAR0DHBwAAd0MAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHQABHQEcAdUMHQAB3QwBHAEdHgAB1QwB3QweAAEdHwAB3QybAQAC3QwFHAHVDAHdDBkABRwB3QwaAAEdAxwB1QwbAAEdAxwBHRsAAd0MAxwB3QwcAAMcHQADHB0AAxwdAAMcHQADHB0AAhwBHR0AAR0BHAHVDB0AAR0B1QwB3QwdAAHdDAEdHwAB3Qyu1AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }])
        };

        function qm(mm, Tm, fm) {
          const hm = new Rm.c;
          for (const am of fm) {
            const mm = hm.get(am.chunkX, am.chunkY, am.chunkZ);
            if (!(0, Am.H)(mm)) throw new Error(`Duplicate chunk at ${am.chunkX}, ${am.chunkY}, ${am.chunkZ}`);
            hm.set(am.chunkX, am.chunkY, am.chunkZ, am.rle)
          }
          return new im.b(mm, {
            x: 0,
            y: 0,
            z: 0
          }, Tm, hm)
        }
        const jm = {
          ruinSnowLarge1: qm("ruinSnowLarge1", {
            x: 37,
            y: 40,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gBAAAd0M/wcAAR0B3QweAAEdHwAB+gm/BwABHAEdAd0MHQABHAEdHgABHQHdDB4AAR0fAAHdDP8GAAIcAdUMAd0MHAACHAEdHQAB1QwBHQHdDB0AAh0eAALdDP4GAAMcAR0cAAIcAh0cAAIcAR0B3QwcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0M/wQAASIfAAEiHwABIh8AASIfAAEiHwABIh8ABBwBHRsABBwB3QwbAAMcAR0cAAIcAh0cAAIcAR0B+gkcAAEcAR0B3QwdAAHVDAEdHgABHQHdDB4AAd0MnwQAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIeAAQcAR0bAAQcAdUMGwAEHAHdDBsAAxwBHRwAAhwCHRwAAhwB1QwB3QwcAAEcAR0B3QwdAAIdHgABHQHdDB4AAd0MvwMAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4ABRwB3QwaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAhwCHRwAAhwBHQHVDBwAAtUMAt0MHAACHR4AAt0M/gIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAyIeAAIiHgACIh4AASIB3QweAAEiHgAFHAEdGgAFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAAEHRwAAR0B1QwBHQHdDBwAA90M/QIAASIfAAIiHgACIh4AAiIeAAMiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAGHBoABhwaAAUcAR0aAAUcAR0aAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAABHAMdHAABHAEdAdUMAd0MHAAB1QwC3QwdAAEdHwAB3QyfAQABIh8AASIfAAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIfAAEiHwABIh8AASIeAAIiHQAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAEHAEdAd0MGgAEHAEdGwADHAEdAd0MGwADHAEdHAABHAHVDAEdAd0MHAABHAIdHQABHQLdDB0AAR0fAAHdDH8AASIfAAIiHgACIh4AAiIeAAIiHgADIh4AAiIeAAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAEHAHVDAH6CRoABBwBHRsAAxwBHQHdDBsAAhwC1QwcAAEcAh0B3QwcAAIdAd0MHQABHQHdDB4AAd0MfwABIh8AAiIeAAIiHgACIh4AAyIdAAHdDAIiHgACIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwB1QwaAAUcAfoJGgAEHAEdGwADHAIdGwADHAEdAfoJGwACHAEdAd0MHAABHAIdHQABHAHVDAHdDB0AAR0B3QweAAEdHwAB3QxfAAIiHgADIh0AAyIdAAMiHQAB3QwCIh4AAd0MAiIeAAIiHgACIh4AAiIeAAIiHgACIh8AASIfAAHdDDwABhwaAAYcGgAGHBoABhwaAAUcAR0aAAUcAdUMGgAFHAHdDBoABBwBHRsABBwBHRsAAxwBHQH6CRsAAxwBHRwAAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AAh0eAAHVDAHdDB4AAd0MPwACIh4AAyIdAAMiHQADIh0AAd0MAyIdAAHdDAIiHgACIh4AAd0MASIfAAEiHwABIh8AAd0MfAAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAACHAHVDAHdDBwAAhwBHR0AASIBHAHdDB0AASIBHB4AAiIeAAIiHgADIh0AAyIdAAEiAd0MAiIcAALdDAIiHgACIh4AAiIeAAHdDAEiHwABIh8AASIfAAHdDJwBAAYcGgAGHBoABhwaAAYcGgAFHAEdGgAFHAEdGgAFHAHdDBoABRwbAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAASIBHAHVDAHdDBwAAiIBHR0AAiIB3QwdAAIiHgACIh4AAyIdAAQiHAAEIhwAAt0MAiIeAAIiHgAB3QwBIh8AASIfAAEiHwABIh8AAd0MnAEABhwaAAYcGgAGHBoABhwaAAUcAdUMGgAFHAEdGgAFHAHdDBoABBwBHRsABBwBHRsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAABIgEcAR0dAAIiAR0dAAIiAd0MHQABHAEiHgABHAIiHQABHAIiHQABHQMiHAABHQMiHAAB3QwDIh0AAt0MASIfAAEiHwABIh8AASIfAAIiHgAC3QybAQAGHBoABhwaAAYcGgAGHBoABRwBHRoABRwBHRoABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAH6CRwAAhwBHR0AASIBHAHVDB0AAiIB3QwdAAIiHgADIh0AAyIdAAMiHQAEIhwAAd0MAyIdAALdDAEiHwABIh8AASIfAAEiHwACIh4AAiIeAAEiAd0MHgAB3QxcAAYcGgAGHBoABRwBHRoABRwBHRoABRwB+gkaAAUcGwAEHAEdGwAEHAEdGwAEHAHdDBsAAxwBHRwAAxwBHRwAAxwB3QwcAAIcAR0dAAIcAR0dAAEiARwB3QwdAAIiHgACIh4AAiIeAAMiHQADIh0AAyIdAAQiHAAC3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AASIB3QweAAHdDDwABhwaAAUcAR0aAAUcAR0aAAUcAd0MGgAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAADHAEdHAADHAHVDBwAAxwB3QwcAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAEiARweAAIiHgACIh4AAiIeAAMiHQADIh0ABCIcAAHdDAMiHQAB3QwCIh4AAiIeAAHdDAEiHwABIh8AASIfAAIiHgACIh4AAiIeAAEiAd0MGwAFHAEdGgAFHAHVDBoABRwB3QwaAAQcAdUMGwAEHAHVDBsABBwB3QwbAAMcAR0cAAMcAR0cAAMcAd0MHAADHB0AAxwdAAIcAR0dAAIcAR0dAAEcAR0B+gkdAAEcAR0eAAEcAd0MHgABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQAEIhwABCIdAAMiHgACIh4AAiIfAAEiHwABIh8AAiIeAAEiAd0MHgABIhwABRwBHRoABRwB1QwaAAQcAR0B+gkaAAQcAR0bAAQcAd0MGwADHAEdHAADHAEdHAADHAHdDBwAAxwdAAIcAR0dAAIcAR0dAAIcAd0MHQACHB4AARwBHR4AARwBHR4AARwB3QweAAEiHwABIh8AAiIeAAIiHgADIh0AAyIdAAMiHQADIh0AASIBAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIhwABRwB3QwaAAQcAdUMGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAR0cAAMcAd0MHAACHAHVDB0AAhwB1QwdAAIcAd0MHQACHB4AAhweAAEcAR0eAAEcAR0eAAHVDAHdDB4AAR0fAAHdDD8AASIfAAEiHwACIh4AAyIdAAMiHQADIh0AAyIeAAIiHwACIh4AAiIeAAIiHgACIh4AAiIeAAIiHAAEHAEdGwAEHAEdGwAEHAHdDBsAAxwB1QwcAAMcAdUMHAADHAHdDBwAAhwB1QwdAAIcAR0dAAIcAfoJHQABHAHVDB4AARwBHR4AARwB3QweAAEcHwABHR8AAdUMHwAB3Qx/AAEiHwABIh8AAiIeAAIiHgADIh4AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHQAEHAEdGwAEHAH6CRsAAxwB1QwcAAMcAR0cAAIcAR0B3QwcAAIcAR0dAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0M3wEAASIfAAEiHwACIh4AAiIeAAIiHgACIh4AAiIfAAEiHwACIh4AAiIeAAIiHQADIh0ABBwBHRsAAxwBHQHdDBsAAhwCHRwAAhwB1QwB3QwcAAIcAd0MHQABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAASIfAAEiHwABIh8AAiIeAAIiHgACIh4AAiIeAAIiHgACIh4AAiIeAAIiHgADHAEdHAACHAIdHAACHAEdAd0MHAABHAEdAd0MHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDL8DAAEiHwABIh8AASIfAAEiHwABIh8AASIfAAEiHwABIh8AAhwBHQHdDBwAAhwBHR0AARwBHQHdDB0AARwBHR4AARwB3QweAAEdHwABHR8AAd0MnwYAAhwB3QwdAAEcAR0eAAEcAR0eAAEdAd0MHgAB1QwfAAHdDN8GAAEcAd0MHgAB1QwfAAEdHwAB+gmfBwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("DgAC3QwJIgLdDBUACd0M0wcAAd0MDyIB3QwQAA8iEQAC3QwLIgLdDBMAC90MoAcABCIPABAiAd0MDwAPIgHdDBAAA90MCSID3QwUAAciAt0MFwAH3QzRBgACIhIAAyIJAAHdDAIiEAADIgHdDAoAAd0MAyILAAUiAd0MDAAB3QwRIgHdDA4AAt0MBiID3QwEIgLdDBEADd0MzQYAAd0MAiITAAIiCQADIhEAAyIJAAHdDAMiDwADIgHdDAoAAd0MBiICAAsiAd0MDAAC3QwBIgPdDAIiB90MAiIC3QwPAAXdDAEiCd0MEwAL3QyuBgACIhUAAiIHAAMiEwADIgcAAd0MAyIRAAMiAd0MCAAB3QwHIgcAByIB3QwKAAHdDAIiBN0MByIF3QwBIgHdDAwAB90MASIL3QwPAA/dDKsGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAHdDAYiCwAGIgHdDAgAAd0MAyIC3QwLIgTdDAEiAd0MCgAC3QwBIgXdDAEiDN0MDQAR3QwVAAXdDI8GAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwCIhUAAiIHAAQiEAAFIgcAAd0MByIJAAMiAt0MAiIB3QwIAALdDAIiA90MCSIH3QwLABPdDBEAC90MjAYAAiIeAAHdDAIiFwABIgYAAyIVAAIiBgAB3QwDIhIABCIHAAHdDAYiCwADIgHdDAIiAd0MCAAB3QwCIgPdDAsiBN0MASIB3QwKABXdDA8ADd0MiwYAAiIeAAIiHgAB3QwCIhcAASIGAAUiEgADIgYAAd0MASID3QwBIg8ABSIHAAXdDAMiCQADIgLdDAEiAt0MCQAG3QwJIgbdDA4AD90MiQYAAiIeAAHdDAIiHgADIhcAASIFAAHdDAQiEwADIgYABN0MAiIPAAIiAt0MASIHAAXdDAIiCwACIgXdDAgABt0MCyIG3QwMABHdDIgGAAIiHgADIh0AAd0MAiIeAAQiFQACIgUAAd0MASIC3QwCIhEAAiIC3QwGAAXdDAIiDQACIgTdDAcABt0MBCIFAAQiBt0MCwAG3QwFAAbdDIcGAAMiHQAB3QwCIh4AAyIdAAHdDAQiFQACIgUAAd0MASIC3QwBIhMAASIC3QwGAATdDAIiDwACIgPdDAcABd0MBCIHAAQiBd0MCAAI3QwHAAXdDIcGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGAABIgUAAd0MBCITAAIiAd0MBgAE3QwCIg8AAiID3QwHAAXdDAMiCQADIgXdDAgAB90MCQAF3QyGBgACIh4AAiIeAAHdDAIiHgADIhgAASIEAAHdDAUiEwADIgUAAd0MAyIB3QwCIg8AAiID3QwGAALdDAEiA90MAiILAAIiBd0MCAAG3QwLAAXdDIUGAAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAIiHgACIh4AAyIdAAHdDAMiGAABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAyILAAMiBN0MBwAH3QwLAAXdDIQGAAHdDAEiHwACIh4AAyIdAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAyIWAAEiAd0MBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAIiHgAB3QwCIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIQGAAHdDAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MAiIXAAIiBQAB3QwFIhEAAiIC3QwGAAHdDAIiAt0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAEiHwACIh4AAiIeAAHdDAIiGQABIgQAAd0MBCIVAAIiBQAB3QwCIgHdDAIiEQACIgLdDAYABd0MAiINAAIiBN0MBwAG3QwNAATdDIUGAAIiHgACIh4AAyIdAAHdDAIiGQABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAIiEQACIgLdDAYABd0MAyILAAMiBN0MBwAH3QwLAAXdDIUGAAIiHgACIh4AAd0MAiIeAAMiGAABIgQAAd0MBCIVAAEiAd0MBQAB3QwBIgLdDAMiDwADIgLdDAYABt0MAiILAAIiBd0MBwAH3QwLAAXdDIUGAAIiHgAB3QwCIh4AAiIeAAMiGAABIgQAAd0MBSITAAIiAd0MBQAB3QwBIgPdDAIiDwACIgPdDAYABt0MAyIJAAMiBd0MCgAF3QwJAAXdDIcGAAIiHgACIh4AAyIdAAHdDAMiFgACIgUAAd0MBSIRAAIiAt0MBgAB3QwBIgPdDAIiDQACIgTdDAcABt0MDSIG3QwKABPdDIcGAAHdDAIiHgACIh4AAyIXAAEiBQAB3QwCIhUAAyIGAAHdDAUiDwACIgLdDAEiBwAB3QwBIgPdDAMiCQADIgXdDAgAB90MCSIH3QwMABHdDIkGAAMiFwABIgUAAyIXAAEiBQAB3QwDIhUAAiIGAAHdDAIiEwAEIgcAByIMAAIiA90MASIHAAHdDAEiBd0MDCIG3QwIABfdDKcGAAMiFQACIgYAAd0MAiIVAAIiBwADIhMAAyIHAAQiDwAGIgcAAd0MCyICAAUiBt0MCAAB3QwBIgndDAIiA90MAiIF3QwKABXdDKkGAAMiEwADIgcABCIRAAQiBwAB3QwEIg8ABCIB3QwIAAoiAwAKIgkAAt0MAiIF3QwKIgTdDAsAAd0MASIF3QwJIgPdDA4AEd0MrAYABiILAAYiCQAB3QwIIgUACCIB3QwKABUiCwAB3QwTIgHdDAwAAt0MASID3QwLIgLdDA8AD90M0AYAESIB3QwOABEiDwAC3QwNIgLdDBEAAd0MCyIB3QwUAAvdDOcGAA==")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gDAAASIfAAHdDN8HAAEiAd0MHgABIh8AAd0MvwcAAiIeAAEiAd0MHgABIh8AAd0MnwcAAiIeAAIiHgABIgHdDB4AASIfAAHdDIAHAAIiHQACIgHdDB0AAiIeAAEiAd0MHgAB3QyABwACIh0AAyIdAAIiAd0MHQACIh4AASIB3QweAAHdDOAGAAIiAd0MHQACIh0AAyIdAAIiAd0MHQABIgHdDB4AAd0M4QYAASIB3QwdAAIiHgACIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh8AASIeAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzhBgABIh4AAiIdAAMiHQACIgHdDB0AAt0MHgAB3QyABwACIh0AAyIdAAHdDAEiAd0MHQAC3QweAAHdDIAHAAIiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAASIfAAEiHQADIh0AAd0MASIB3QwdAALdDB4AAd0M4QYAAiIeAAEiAd0MHAADIh0AA90MHQAC3QweAAHdDOEGAAIiHgACIhwAAyIB3QwcAAPdDB0AAt0MHgAB3QzCBgABIh4AAiIeAAIiHAADIgHdDBwAA90MHQAC3QweAAHdDMEGAAIiHgACIh0AAyIcAAMiAd0MHAAB3QwBIgHdDB0AAt0MHgAB3QzBBgACIh4AAiIdAAIiAd0MHAADIh0AAiIB3QwdAAEiAd0MHgAB3QzBBgACIh0AAiIB3QwdAAIiHQADIh0AAiIB3QwdAAEiAd0MHgAB3QzABgACIh4AAiIdAAMiHQACIgHdDB0AASIB3QweAAHdDN8GAAIiAd0MHQACIh4AAiIeAAEiAd0MHgAB3Qz/BgACIh4AAiIeAAEiAd0MHgAB3QyfBwABIh8AAd0M3x8A")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("BwACHRYcAR0HAAHdDAEdFRwCHQgAAd0MFRwB1QwB3QwJAAEdExwBHQHdDAoAAdUMAR0B1QwRHAHVDAsAAd0MAx0PHAEdAd0MDAAC3QwBHQHVDA0cAh0PAAHdDAIdCxwBHQHVDAHdDBAAAd0MAdUMChwBHQHVDAHdDBIAAd0MAh0GHAMdAfoJFAADHQHVDAMcAh0B1QwB+gkVAALdDAMdAhwBHQLdDBgAAt0MAx0B3QwcAAHdDAIdHgAC3QyaAQAHIhYADSITAA4iEgAPIhEAAyIB3QwBAAPdDAciEQABIgLdDAUAAd0MByIQAAHdDAkAAd0MBSIZAAciFwAIIgHdDBYACSIWAAoiFAAMIhEADiIB3QwLAAH6CQEdFRwB1QwB3QwIAAHdDAEdExwCHQoAAR0B1QwBHRAcAdUMAR0B3QwKAAHdDAHVDAIdDxwBHQHdDAwAAt0MAh0NHAEdAfoJDwAB+gkCHQkcBB0RAAHdDAIdAdUMBxwCHQHVDAHdDBIAAd0MAx0FHAEdA90MFAAC3QwFHQHVDAEdGQAB3QwEHQHVDAHdDBoABd0MugIABSIaAAciGQAJIhcACiIWAAPdDAciGQAB3QwGIhoAAd0MBSIaAAUiAd0MGQAEIgLdDBoABCIcAAMiAd0MHAAB3QwBIgHdDBMAAh0RHAIdAfoJCgAC3QwCHQ4cAdUMAR0B3QwNAAEdAdUMAh0KHAMdAd0MDgAC3QwC1QwBHQgcAx0B3QwRAALdDAIdBhwBHQHVDALdDBQAAd0MAdUMBRwCHQHdDBcAAd0MAx0BHAHVDAEdAd0MGQABHQHVDAIdAdUMAd0MGgAB+gkC3QwB1QwB3QweAAHdDNYFAALVDAIdCxwCHQ8AA90MAh0IHAMdAd0MEgAB3QwCHQUcBB0B3QwUAAHdDAIdAdUMAhwDHQLdDBYAAd0MBR0C3QwZAALdDAIdAd0MHQAC3Qy4BgAB3QwDHQHVDAMcBB0B3QwUAAH6CQHdDAgdAd0MFwAC3QwDHQPdDBoAAvoJAd0Mi98BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("Ad0M/wcAAfoJ//cBAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("DQANIgHdDBIAAd0MCyIB3QwUAAsiFQAL3QybBwAB3Qzr9wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          ruinSnowLarge2: qm("ruinSnowLarge2", {
            x: 37,
            y: 40,
            z: 36
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gEgAARwfAAHVDB8AAR0fAAHdDJ8HAAIcHgACHB4AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BAACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AARwBHR4AARwBHR4AARwB3QweAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAHVDB8AAd0M3wMAAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAH6CR4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8DAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDN8DAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AARwfAAEcHwABHR8AAR0fAAHdDL8EAAIcHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AAR0fAAEdHwAB+gm/BQABHB8AAR0fAAEdHwAB+gmfBwAB+gn/BwABHAEdAfoJHQABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDJ8GAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDP8DAAQcHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAIcAdUMHQACHAEdHQACHAHdDB0AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHR8AAR0fAAHdDN8CAAQcHAAEHBwABBwcAAQcHAAEHBwAAxwBHRwAAxwBHRwAAxwB3QwcAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAEcAdUMHgABHAEdHgABHAHdDB4AARwfAAEdHwAB1QwfAAHdDL8CAAQcHAAEHBwABBwcAAQcHAAEHBwABBwcAAMcAR0cAAMcAR0cAAMcAfoJHAADHB0AAxwdAAMcHQADHB0AAhwBHR0AAhwBHR0AAhwB3QwdAAIcHgABHAHVDB4AARwB1QweAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEdHwABHR8AAd0MPwAEHBwABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAIcAR0dAAIcAdUMHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAEcAR0eAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAHVDB8AAR0fAAHdDD8ABBwcAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQADHB0AAxwdAAMcHQACHAEdHQACHAEdHQACHAH6CR0AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEcHwABHB8AAR0fAAEdHwAB3QxfAAQcHAAEHBwABBwcAAQcHAADHAEdHAADHAEdHAADHAHdDBwAAxwdAAMcHQACHAEdHQACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgAB1QwB3QweAAEdHwAB3Qz/AQADHAEdHAADHAEdHAACHAEdAd0MHAACHAEdHQACHAHdDB0AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgACHB4AAhweAAIcHgABHAEdHgABHAEdHgABHAHdDB4AARwfAAEdHwABHR8AAd0MvwIAAhwBHQH6CRwAAhwBHR0AARwB1QwB3QwdAAEcAR0eAAEcAd0MHgABHB8AARwfAAEcHwABHB8AARwfAAEcHwABHB8AARwfAAEcHwAB1QwfAAEdHwAB3Qz/AwABHAEdAfoJHQABHAHdDB4AAR0fAAEdHwAB3Qz/FgA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("hBAAAR0fAAHVDB8AAd0MvgcAAR0BHAEdHQAB+gkBHAEdHgABHQHdDB4AAR0fAAH6Cf8GAAHdDIQwAAYiAd0MGQAC3QwEIhwABN0MtwcABiIDAAEiAt0MFAAC3QwHIgHdDBgAAt0MBSIbAAXdDJYHAAMiCQAC3QwSAAUiGwAB3QwKIhYAAt0MCCIYAAjdDPMGAAQiCwACIg8AAd0MBCIKAALdDBAACCIYAALdDAoiFgAC3QwIIhgACN0M0gYAAd0MAyINAAEiAd0MDgAEIgEtCwAB3QwPAAkiFwAC3QwMIhQAAt0MCSIB3QwWAAndDNIGAAMiDgACIg0ABCICAAEtCgABIgHdDA0AAd0MBiIBLQkAAd0MDwAB3QwJIgQAASISAALdDAwiFAAC3QwHIgPdDBYAB90MswYAAiIPAAIiDQADIg4AASIB3QwNAAHdDAUiAS0KAAHdDA8AAd0MBiIaAALdDAwiFAAC3QwJIgHdDBYACd0MsQYAASIRAAEiAd0MDAACIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAEiAd0MEAAC3QwNIhMAAd0MCiIC3QwUAArdDLAGAAHdDAEiEQABIgHdDAwAAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCQACIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QyvBgAB3QwBIhEAASIB3QwMAAIiDwACIg0AAd0MBCIMAAEiAd0MDgAB3QwFIgkAAiIQAALdDA0iAd0MEgAB3QwLIgHdDBQAC90MrwYAAiIRAAEiAd0MCwAB3QwCIg8AAiINAAHdDAQiDAABIgHdDA4AAd0MBSIJAAIiEAAC3QwNIgHdDBIAAd0MCyIB3QwUAAvdDK8GAAIiEQABIgHdDAsAAd0MAiIPAAIiDQAB3QwEIgwAASIB3QwOAAHdDAUiCAADIhAAAt0MDSIB3QwSAAHdDAsiAd0MFAAL3QywBgACIg8AAiIJAAHdDAMAAiIPAAIiDQAB3QwEIgsAAiIB3QwOAAHdDAUiBQAGIhAAAt0MDSIB3QwSAAHdDAoiAt0MFAAK3QyxBgACIg8AAiIHAAHdDAMdAgAB3QwCIg4AASIB3QwIAAMdAwAEIgsAAiIJAAH6CQLdDAMAAd0MByIBAAciAd0MEAAC3QwNIhMABN0MByIC3QwXAAfdDLEGAAHdDAIiDgABIgHdDAcAAd0MAhwB3QwDAAIiDQACIgkAAR0BHAQAAd0MAyIJAAQiCQACHQUAAt0MDSIB3QwJAAHdDAHVDAcAAd0MCyIB3QwLAAHdDAgAC90M0QYAAd0MASIB3QwMAAIiCQAB1QwBHQUAAd0MDQACIgkAAR0B3QwRAAMiAd0MCQAB3QwLAAkiAd0MFgAC3QwGIgHdDBkABt0M1AYAAt0MCgACIh0AAyIXAAgiAd0MFwAHIgHdDBgAB90M9gYAAt0MAyIDAAQiFgAC3QwHIgHdDBgABiIB3QwZAAbdDJgHAAgiGAAC3QwFIgHdDBoABd0MsB8A")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("BQABHQccAd0MAfoJAQALHAHdDAkAAd0MBxwDAAHVDAkcAR0LAAccAwABHQkcAdUMCwAHHAMAAd0MCRwB3QwLAAccBAAJHAwABxwEAAgcAR0MAAccBAAIHAHVDAwABxwEAAgcAd0MDAAHHAQAAR0HHA0ABxwEAAHVDAccDQAB1QwGHAQAAd0MBxwNAAEdBRwBHQUABxwNAAHdDAUcAR0FAAccDgAFHAHdDAUABhwBHQ4ABRwGAAHVDAUcAdUMDgAFHAYAAR0EHAEdAd0MDgAFHAYAAd0MAxwCHQ8ABRwHAAIdARwBHQHdDA8ABRwHAAHVDAIdAfoJEAAFHAcAAt0MAR0RAAEdBBwJAAHdDBEAAR0EHBsAAd0MBBwcAAMcAR0cAAMcAR0cAAMcAd0MHAABHQIcHQABHQIcHQAB3QwCHB4AAh0eAAEdAdUMHgAB+gkB3QwaAAHdDAccAfoJAgAJHALVDAH6CQoABxwDAAHVDAgcAR0B3QwLAAccAwACHQccAd0MDAAHHAMAAd0MAR0HHA0ABxwEAAHdDAYcAR0NAAccBQAGHAEdDQAHHAUABhwB3QwNAAccBQAGHA4ABxwFAAEdBRwOAAccBQABHQUcDgAHHAUAAfoJBRwOAAccBgAEHAEdDgAHHAYABBwBHQ4AAR0FHAEdBgAEHAHdDA4AAR0FHAHVDAYAAh0BHAEdDwAB3QwFHAHdDAYAAx0B1QwQAAUcBwAC3QwBHQHdDBAABRwJAAHdDBEABRwbAAUcGwAFHBsABRwbAAUcGwABHQQcGwABHQMcAR0bAAHdDAMcAR0cAAMcAd0MHAADHB0AAdUMAhwdAAEdAhwdAAHdDAEdARweAAHVDAEcGgAB+gkHHAQAAdUMBhwCHQwABxwEAAH6CQYcAR0B3QwMAAccBQABHQUcAfoJDQAHHAUAAdUMBRwOAAccBQAB3QwEHAHVDA4ABxwGAAMcAh0OAAccBgADHAEdAd0MDgAHHAYAAxwB3QwPAAccBgABHQIcEAAHHAYAAx0QAAccBgAB3QwB1QwBHRAAAR0FHAEdBwAB+gkB3QwQAAEdBRwBHRkAAd0MBRwB+gkaAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAEdAxwBHRsAAh0CHAEdGwAB+gkBHQIcAd0MHAAB3QwCHB4AAhweAAIcHgACHR4AAh0eAAHdDAH6CRsABxwFAAHdDAHVDAMcAR0B3QwB+gkMAAccBgABHQIcAR0B3QwOAAccBgAB3QwCHAEdDwAHHAcAAhwB3QwPAAEdBRwBHQcAAh0QAAEdBRwB1QwHAAIdEAAB3QwFHAHdDAcAAt0MEQAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAFHBsABRwbAAUcGwAEHAEdGwAEHAEdGwABHQMcAd0MGwABHQMcHAAB3QwDHB0AAxwdAAMcHQABHQEcAdUMHQABHQEcAR0dAAHdDAEdAd0MHgABHR8AAd0MnAEABhwaAAEdBRwaAAEdBRwaAAHdDAUcGwAEHAHVDBsABBwBHRsABBwB3QwbAAQcHAAEHBwAAR0DHBwAAdUMAxwcAAHdDAEdARwBHR0AAdUMARwBHR0AAd0MAR0B3QweAAEdHwAB3QyW3AEA")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("iQgAAd0MAR0fAAEdHwAB3Qy19wEA")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          ruinSnowMedium1: qm("ruinSnowMedium1", {
            x: 13,
            y: 19,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinSnowMedium2: qm("ruinSnowMedium2", {
            x: 34,
            y: 21,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }]),
          ruinSnowSmall1: qm("ruinSnowSmall1", {
            x: 12,
            y: 7,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("gQgAASIBhgEGAAEiGAAB3gzeBwABjAUBIgEABd0MAQABIgGMBRUAASMJAAEjFQABgQEJAAGBAR8AAYYBHwAB3gz2BgABIgXdDAECAd0MGgAF3QwdAAHfDLsHAAPdDAECAd0MAwIB3QwYAALdDAGMBQHdDAGMBQLdDBwAAdAFugcAAd0MAgIBzgEC3QwEAgHdDBYAAt0MAYwFAt0MAowFAt0MGgABzwUBjAUBzQUBAAHfDBwAAdEFmgcAAd0MAwIC3QwEAgHdDBYAAt0MAQIB3QwBzwEBAgPdDBcAAd8MAgABzwUB0QwBzQUeAAHRBZoHAAHdDAUCAd0MAwIB3QwWAAPdDAKMBQLdDAECAd0MGQAB3wwBzwUBjAUBzQUeAAHRBZsHAAHdDAICAd0MAQIB3QwCAgHdDBgAA90MAYwFAd0MAQIB3QwcAAHOBQIAAd8MtwcAAiIH3QwaAAXdDBwAAd8MuwcAAYwFAQABIgXdDAIAAYwFFQABIwkAASMVAAGBAQkAAYEBFQABhgEfAAHeDIAHAAEiBgACIvWnAQA=")
          }]),
          ruinSnowSmall2: qm("ruinSnowSmall2", {
            x: 14,
            y: 19,
            z: 14
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("gQgABd0MAx0F3QwYAAHdDAHVDAH6CR4AAd0MuQcAAt0MAx0FHAPdDBUACB0CAAHfDBUAAfoJAt0MAdUMAx0B1QwbAAEdA90MAR0bAAGIAQEAAdEMAd8MAYEBGwABgQEDAAGIARsAAYEBAwABiAEbAAGIAQMAAYEBGwABiAEDAAGBARsAAoEBAQACgQEcAAKIAQGBAbcFAAHdDAEdCRwC3QwUAAHdDAMdBBwCHRcAAx0C1QwEHRcAA90MAR0C1QwBHQLdDJUHAAHdDAEdCRwBHQHdDBQAAR0B1QwHHAEdAfoJFQAB3QwFHQHVDAMdFwAB3QwBHQHVDAQdAdUMAd0MGAAB+gkC3QwDHAHdDAHfDPUGAAHdDAEdCRwBHQHdDBQAAh0HHAIdFQAB3QwCHQHVDAIdAdUMAx0B3QwVAAHfDAHdDAcdAd0MGAAD3QwDHAHdDBsAAd8MAxwB3wwdAAHPAbgGAAEdAdUMCRwB1QwB3QwTAAHdDAHVDAkcAR0VAAHdDAHVDAgdAd0MFgAEHQLVDAMdFwAD3QwEHAHVDAH6CRgAAd8MAQAEHAHdDBsAARwB3gwBHAHeDBwAAhwB3gwBHRwAAR0B3gwBHAHeDBwAAR0BHAHeDAHVDBwAAd0MAd4MAdUMAR0dAAIdAd0MHQABHQHdDB4AAd0M2QQAAh0JHAEdAd0MEwAB3QwBHQkcAR0VAAHdDAQdAdUMBB0B3QwWAALVDAUdAtUMAd8MFgAD3QwFHAHdDBoABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwACHAHMAQEcHAACHAIdHAACHAIdHAABHAEdAt0MHAACHR4AAR0B+gkeAAHdDJoEAAEdAdUMCRwBHQHdDBMAAd0MAR0JHAEdFQAB3QwFHQHVDAMdAd0MFgAC1QwCHQHVDAQdFwAB+gkC3QwFHAHdDBkAAd8MBRwbAAUcGwAEHAEdGwAEHAHVDBsABBwB3QwbAAEcAR0BHAEdHAABHAMdHAABHQHdDAEdAd0MHAABHQEAAd0MHQAB3Qy6BAABHQHVDAkcAR0B3QwTAAHdDAEdAdUMBxwCHQHfDBQAAd0MAR0B1QwBHQHVDAUdAd0MFQAB3wwB3QwDHQPVDAEdAd0MGAAC3QwFHBsABRwbAAQcAR0bAAQcAR0bAAQcAd0MGwADHAEdHAABHQEcAh0cAAEdARwBHQHdDBwAAfoJAR0B3QweAAEdHwAB3Qy5BAAB1QwBHQkcAdUMAd0MEwAB+gkBHQHVDAccAtUMFQAB3QwJHQH6CRYAAd0MBx0B3QwYAALdDAHVDAMcAR0B3wwYAAHfDAEAAdUMAxwB3QwbAAHdDAEdARwBHR0AAh0B1QwdAAHdDAHVDAHdDB4AAfoJ2AUAAd0MAdUMCRwBHQHdDBQAAd0MAh0EHAQdFgADHQLVDAQdAd0MFgAB+gkB3QwEHQPdDBkAAt0MAvoJAQAB3wz2BgAC3QwBHQccAh0B3QwVAAcdAdUMAR0B3QwWAAHdDAMdAtUMAh0B+gkYAAHdDAH6CQXdDBwAAd8M+QYAA90MCB0C3QwWAAHdDAIdBd0MGQAC3Qy5lwEA")
          }]),
          ruinSnowSmall3: qm("ruinSnowSmall3", {
            x: 13,
            y: 14,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("BAAC3Qz7BwAD3QwB1QwDHQLVDBoAAfoJBd0M1gcAAt0MAdUMBR0C1QwBHQHdDBYAAh0B1QwBHQXdDBcAAfoJA90MugcAAt0MAdUMAR0DAgHVDAEdAdUMAh0WAAEdAdUMAwIDHQLdDBYAAt0MAR0BLgHVDAHdDAH6CQHdDBsAAYEBHwABiAEfAAGBAR8AAYYBHgABgQECiAEeAAGIAfoFAAHdDAHVDAMCAdUMAwIB1QwBHQHVDBUAAd0MAwIBHQMCAh0B3QwWAAEdAdUMAR0B3QwBgQEBHQECAt0MFwABiAEBzQEEAAGIARkAAYEBBQABiAEZAAGBAQUAAYgBGQABhgEFAAGGARkAAYgBAYEBAwABgQEBiAEZAAGBAQUAAYgB9wUAAd0MAdUMAQIB1QwDAgEdAQIBHQHVDAEdFQAB1QwBAgEdAwIBHQECAh0B3QwVAAHdDAEdAd0MA+MHAd0MAR0B3QwB+gmXAQABiAEFAAGBAZcGAAHdDAcCAdUMAQICHRUAAR0GAgEdAQIBHQHdDBUAAR0B1QwF4wcB3QwBHQHdDBYAAYEBfwABiAEHAAGBAZYGAAHdDAcCAR0BAgEdAd0MFQABHQYCAdUMAQIBHRYAAR0B1QwC4wcB0QwC4wcB3QwBAgHdDBYAAYgBBwABgQEXAAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGIAQcAAYEBFwABiAEHAAGBAfYFAAHdDAECAR0HAgEdAd0MFQACHQcCAd0MFgAB1QwB3QwF4wcCHZcBAAGIAQcAAYEBlgYAAd0MAdUMBwICHRYAAd0MBwIB3QwB+gkXAAIdA+MHAdUMAR2ZAQABgQEFAAGBAZcGAAHdDAIdAQIBHQECAdUMAgIB3QwXAAH6CQHdDAECAR0BAgEdAQIBHRkAAh0B3QwBHQHdDAHVDAEdGQABiAEFAAGBARkAAYgBBQABgQEZAAGIAQUAAYEBGQABhgECAAGBAQIAAYYBGQACgQEBAAHPAQEAAYEBAYgBGQABgQEFAAGIAfgFAAMdAdUMAR0B1QwBHQHdDBgAAt0MBB0B3QwbAAHdDAMdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGIAQKBAR4AAYgB/QUAAd0MAx0B3QwcAAHVDAH6CQHdDB0AAfoJu58BAA==")
          }]),
          ruinSnowSmall4: qm("ruinSnowSmall4", {
            x: 11,
            y: 9,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AwAH3Qz5BwABHAPdDAEdARwC3QwYAAEcAwAB3QwBHRoAARwEAAEdGgABHAQAAd0MGgABHP4GAAUdAxwBHQHdDBYAASID3QwCHQHVDAIdFwABIgMAAd0MAx0B3QwXAAEiBAAD3QwYAAEiBgABHfcGAAEiAdUMBB0CHAEdARwB3QwVAAEiAtUMBx0WAAEiBd0MAR0B1QwB3QwBHRYAASICAAHQBQIAAt0MAQIB3QwdAAEdAYwFAdUMHwAB0wXVBgAB3QwBHQHVDAMdAdUMAhwBHQEcAR0VAAHVDAIdAd0MAtUMAR0B1QwCHQHVDBUAA90MAYwFAt0MAdUMAR0BjAUBHQHdDBcAAc8FAYwFAc0FAd8MAt0MAYwFAd0MGQAB0QUDAAHVDAGMBQHVDB8AAdMF1QYAAd0MBB0B1QwBHQIcAdUMARwBHRUAAd0MAh0B3QwFHQHVDAEdFgAC3QwBzQEC3QwCHQHdDAEdAd0MFwABzwUB0QwBzQUBAALdDAECAd0MGQAB0QUDAAEdAYwFAR0fAAHTBdUGAAHdDAYdBBwB1QwVAAHdDAHVDAEdAd0MBx0VAAHfDALdDAGMBQLdDAHVDAEdAdUMAR0B3QwXAAHPBQGMBQHNBQEABN0MAd8MGAAB0QUEAAEd9wYABB0B1QwBHQQcAdUMFQAB3QwBHQHVDAYdAdUMAR0WAAXdDAQdAd0MGAABzgUBAAHfDATdDB0AAd8M+QYAAR0B1QwIHRYAAt0MBB0B1QwCHQHdDBgAB90MuAcAAdUMAR0C1QwEHQEiFwAI3QwBIhgAAd8MAgAB3wwDAAEcHwABHJkHAAXdDAEiHwABIh8AASK1rwEA")
          }]),
          ruinStoneLarge1: qm("ruinStoneLarge1", {
            x: 26,
            y: 33,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }]),
          ruinStoneLarge2: qm("ruinStoneLarge2", {
            x: 38,
            y: 31,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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AAEjBgABHQGBAQEAAdwBAQABgQEGAgGBAQESAhgCEgGBAQYAAdwBBwABHQGBAQHcAQEAAYEBBgIBgQEFAAGBAQ8AAR0B3AEBAAGBAQYCAYEBBQABgQEQAAEdAoEBBgIBgQEFAAGBAREAAR0BiAEFEgECAYEBAQABGAISAQABgQETAAHdAQMAAaAIAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQQAAoEBBQABgQETAAHdAQGBAQEAAYgBA4EBAhICGAESAYEBGQABgQEFAAGBARkAAYEBBQABgQEZAAGIAQUAAYEBGQABgQEBAAESAQABEgEAAYcBGQABhwEFAAGHARkAAYEBBQABhwEZAAGIAQUAAYEBGQABhwECEgEAAhIBgQEZAAGBAQEwAgABiAEBAAGBARkAAYEBAogBAwABiAHGAQABAgEAAQIBAAYCAQAKAgIAAQIIAAGzBwuBAQEjAwIBgQECAgEjBIEBAbMHASMGAAEcBQIBgQEFAgEjARwDgQECHAEjAYEBAwABgQEBIwYAAR0FAgGBAQUdASMCgQEBHAOBAQEjAYEBAwABgQEBIwYAAYcBBQIBHAQAAdwBAbMHAYEBAYgBAoEBAYgBAYEBASMCgQEBAAGBAQGHAQEjBgABgQEFAgEdBAAB3AEBHQKIAQGBAQGIAQKBAQEjAYcBAYEBASMCgQEBIwYAA4EBAQABiAECgQEEAAHcAQGIAQaBAQEjA4cBAoEBASMGAAEjBgABHQMAAdwBAYEBBgIBgQEChwEDgQEBIwYAAYEBBwABHQIAAdwBARwGAgWBAQGIAQEjDwABHQEAAdwBAYEBBgICgQECiAECgQEBIxEAAdwBAYEBBgIGgQEBIxEAAR0BgQEDEgEYARIBAgaBAQEjEQAB3gEB3QEFAAOBAQGIAQGABAGIAQGBAQEjEgAB3QEFAAGBAQGIAQKBAQGIBAGIAQGBAQEjEgAB3QEFAAGIAQOBAQEjAoEBASMSAAHdAQOBAQEAAoEBASMFgQEBIxIAAd4BBgABIwGzBwMAAYcBASMZAAEjAYcBAwABhwEBIxkAASMBhwEBgQEBAAKBAQEjGQABIwGBAQGIAQEjAoEBASMZAAEjAoEBAYgBAYcBAYEBASMZAAEjA4EBAYcBAYEBASMZAAEjAYEBAYgBAYcBAogBASMZAAEjAYcBBIEBASMZ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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gJUBAAGBAR8AAR0fAAEjHwABiAGfAgACAh4AA7MHAYEBHAABHQGzBwGHAR0AAh0BswcdAAGBAQEdAYcBHQABhwEBHR4AAocBHgABhwEBgQEeAAKBAR4AAoEBHgACgQEeAAKIAR4AAYgBHwABgQEfAAGHAR8AAYEBHwABIx8AAYgBHwABhwEBAAJkHAABgQEBAAJkHAADgQEBZBwAA4EBHgACIx8AAYEBnQIAAQIBAAICHAABgQEBswcBgQEBhwEcAAKBAQKHARwAAYEBAocBAR0cAAKBAQGzBx0AA4EBHQABhwECgQEdAAOBAR0AA4EBHQABgQEBiAEBgQEdAAOBAR0AAYEBAocBHQABgQEBhwEBgQEdAAKIAQGBAR0AAYcBAYEBAYgBHQABhwEBgQEBiAEdAAGHAQIjHgAChwEeAAGBAQGIAR4AAYgBAYEBHgACgQEBZBwAAYcBAYgBAoEBHwABI74CAAECHQAEgQEcAAOBAQGHARwAA4EBAYcBHAAEgQEcAAOBAQGzBxwABIEBHAADgQEBiAEcAAOBAQGIARwABIEBHAADgQEBiAEcAASBARwABIEBHAADgQEBhwEcAAGBAQKIAQGHARwAAYcBAYgBAYEBAYcBHAABiAEBgQEBAAEjHwABgQEfAAGHAR8AAYgBHwABgQEcAAGIAQGHAQGIAQGBAd4CAAICHAAEgQEcAASBARwAA4EBAYcBHAAEgQEcAASBARwABIEBHAAEgQEcAAOBAQGIARwABIEBHAADgQEdAASBARwAA4EBAYgBHAAEgQEcAAGBAQKIAQGBARwAARwBiAEeAAGHAQGIAZ4BAAGBAQGIAd4CAAECAQACAhwABIEBHAAEgQEcAAOBAR0AA4EBHQADgQEdAAKBAQGIAR0AA4EBHQAEgQEcAASBARwABIEBHAAEgQEcAAKBAQISHAABgQEBiAEeAAGHAQGIAR4AAYgBAYEBvgEAAYgB4QIAAQIdAAOBAQECHAACgQEBAgEdHAADgQEdAAKBAR4AAoEBHgACgQEeAAOBAR0ABIEBHAADgQEdAASBARwAA4EBAYgBHAACEgEYARIcAAGBAQGIAR4AARwBgQHeAQABiAHfAgABAgEAAgIcAAKBAQECAbMHHAABgQECAh0AAoEBAQIdAAKBAR4AAoEBHgACgQEeAAOBAR0AA4EBHQADgQEBiAEcAASBARwABIEBHAACEgEYARIcAAKBAf4BAAGBAd8CAAECAQACAhwAAYEBAgIBswccAAGBAQECAR0dAAGBAQGzBx4AAQIfAAGBAR8AAoEBHgABgQEBiAEBgQEdAAOBAQGIARwABIEBHAAEgQEcAASBARwAARIBGAISHAADnQjeBAACAh0AAYEBAQIBswcdAAGBAQGzBx4AAQIfAAEdPwABgQEfAAGBAR8AAYEBAYgBHgABiAEDgQEcAAOBAQGIARwAA4EBAYgBHAACEgEYARIcAAGdCN8EAAICHgACAgGzBx0AAQIBswceAAEdXwABgQG/AQABGAIS/QQAAwIdAAICAbMHHQACswe+AgABEv8EAAICHgACswfeDwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("CAACAgIABQIIAAMCCwABZAGzBwEjA7MHAoEBASMBHQYAAWQDgQEBswcMAAEdASMDswcCgQEBIwGzBwYAAWQDgQEBswcMAAEcASMBHQGzBwKIAQGBAQEjCAABiAEEgQELAAHdAQEjAYcBAYgBARwCgQEBIwcAAogBA4EBAYgBCwAB3QEBIwGBAQMcAYEBASMHAAGHAQWBAQsAAd0BASMCgQEBHAGIAQGHAQEjBgABHAaBAQsAAd0BASMCgQEBhwEBHAGHAQEjAWQFAAKHAQSBAQGIAQsAAd0BASMBgQEBhwEBiAEChwEBIwYAAYcBBoEBCwAB3QEBIwSBAQGIAQEjBgABHQaBAQsAAd0BASMFgQEBIwcAAYEBAYgBAYcBAoEBAYgBCwAB3QEBIwEABIEBASMIAAKHAQOBAQwAASMCAAQjCAABhwECEgEYAQACEgoAASMDAAGBAQEAASMIAAGIARAAASMFAAEjCAABiAEVAAIfCAABgQEeAAFkASMeAAFkAYEBHgABZAGHAR4AAWQBgQEfAAKBAR4AAoEBAogB0wIAAQIJAAMCDgAB3AEBAAHcAQEAAYcBAR0IAAFkAYEBArMHDgAB3AEBAALcAQGBAQGHAQcAAWQDgQEBswcNAALcAQEAAdwBCgABswcDgQEOAALcAQEAAdwBAWQJAAKzBwKBAQ4AAtwBAQAB3AEKAAGzBwGBAQGIAQGBAQ4AAtwBAQAB3AEKAAKHAQOBAQGIAQwAAtwBAQAB3AEKAAGHAQGBAQGHAQOBAQwAAtwBAQAC3AEBAAFkBwABhwEFgQEMAALcAQEAAtwBCgAEgQEBiAEMAALcAQEAAtwBCgAEhwEBgQEMAAHcAQIAAtwBCwABhwEDgQEPAALcAQsAAYcBAhIBGAESGgABZAGBAR4AAWQBhwEfAAGHAR8AASMeAAFkAYEBHwABgQEfAAGIAR4AAoEBgAMAAwIaAAJkAQABgQEBswcBgQERAAFkCQACZAKBAR4AAYEBAYcBHAABZAEAAocBHgABgQEBiAEdAAFkAoEBHgABHQGBAQGIAR0AAogBAYEBGwABhwEDgQEdAAFkAocBHgACgQEeAAKBAQESHQABhwEBgQEeAAGBAQGHAR4AAoEBHgACIx4AAocBHgABiAEBhwEeAAKIAbIDAAFkCAABZAQAAYcBGwABZAEAAWQBAAGzBx8AAbMHHwABgQEfAAEcHgABgQEfAAGBAT4AAWQfAAFkQQABhwEfAAGBAR8AAYcBHwABgQEfAAEjHwABhwEfAAGBAaPjAQA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          ruinStoneLarge3: qm("ruinStoneLarge3", {
            x: 38,
            y: 39,
            z: 38
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gFEAARwfAAEcHwABhwEfAAGHAR8AAYcBHwABhwEfAAGHAb8NAAECHwABhwF/AAHbAR8AAdsBHwAB2wGhBgABAh0AAYcBArMHXQAB2wEfAAHbAR8AAdsBHwAB2wGgBgACAh0AAoEBAhwfAAEcngEAAYgBHwABHB8AARwfAAEcHwABiAEfAAGIAR8AAYgBHwABiAEfAAGIAR8AASP9AwABAgIAAQIcAAOHAQEcHQABHAKHAR0AA4cBHgABhwEfAAGHAR4AAocBHQACgQEBhwEdAAKBAQGIAQGBARwABIEBHAACgQEBiAEBgQEcAAKBAQEfAYEBHAAEgQEcAAKBAQGIAQGBARwAAoEBAYgBARwcAAOBAQEcHAABiAECgQEBIxwAAogBARwdAAGIAQGBAQEcHQADgQEdAAKBAQGIAR0AAYEBAogBHQACiAEBHB0AAYEBAYgBARwdAAIKARwfAAGIAR8AAYEBHwABiAEfAAGIAR4AAYYBAYgBHQABHwKIAR0AAYEBAYgBAeQHHgACAh0AARkBHAGHAR4AARwfAAEcHwABhwEfAAGHAR8AAYcBHwABgQEgAAGIAR8AARwfAAGBAR8AAYEBHwABiAEfAAGIAR8AAYgBHwABgQEfAAEcHwABgQEfAAFtHwABgQEfAAGBAR8AAYgBHwABgQEdAAITARwfAAEKnwEAAYYBHwABgQEfAAGBAR0AAQIfAAEZAocBXgABhwEfAAGHAR8AAYEBQAABiAEfAAGIAR8AARwfAAGBAR8AAYEBAWQeAAGIAR0AAhIBgQEfAAGBAR8AAYEBHwABbR8AAeIHHwABbR8AAYEBHwABgQEfAAEcHQACEwGBAR8AAQq/AQABHx8AAYEBHQABAgGsAR4AARkChwEeAAGHAQHbAR4AAYcBAdsBHgABhwEB2wEeAAGIAQHbAX8AAYgBHwABiAEfAAHiBx8AAeIHIAABZBwAARgBEgGBAQFkHAABgQEBLwEcHQABgQEBAAFtHQABgQEBAAHiBx0AAYEBAQAB4gcdAAGBAQEAAeIHHQABgQEBAAFtHQABgQEBAAGIAR0AAYEBAQABgQEdAAEZARMBgQEfAAEKXQABYx8AAWMfAAFjHwABYyEAAYYBHwABAh0AARkChwFeAAEcAdsBnwEAAYgBHwABgQEfAAGBAR8AAYEBHwABgQEdAAISAYEBHwABgQEfAAGBAR8AAW0fAAHiBx8AAW0fAAGIAR8AAYgBHwABiAEdAAIZAYEBHwABCr8BAAEfHwABgQEfAAECHQABEwGBAQGHAR4AAYcBAdsBHgABgQEB2wEeAAGIAQHbAR4AAYEBAdsBXwABHB8AAYgBHwABiAEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAYEBHwABgQEfAAGBAR8AAW0fAAGIAR8AAYgBHwABiAEfAAGBAR0AAhkBgQEfAAEKnwEAAYYBHwABgQEfAAGBAR8AAgIcAAKBAQIcHQAChwEBHB0AA4cBHgABhwEfAAGBAR0AAdsBAQABgQEdAAHbAQEAAYEBAYgBHAACgQECiAEcAAKBAQKIARwAA4EBAYgBHAACgQEBHwGBARwABIEBHAAEgQEcAASBARwABIEBHAABiAECgQEBIxwAA4gBHQADiAEdAAKBAQGIAR0AAoEBAYgBHQABgQEBHAGBAR0AARwBgQEBHB0AAoEBARwdAAIKAYEBHwABgQEfAAGBAR8AAYEBHwABHB4AAYYBARwdAAEfAoEBHQACgQEB5Ac9AAOHAQEcfAAB2wEfAAHbAR8AAdsBIQABiAEfAAEcHwABgQEfAAGBAR8AARwfAAEcHwABHB8AARwfAAEjnQQAAYcBARwBswfdBwABAh8AAYcB/wcAAYcBHwAB3gEfAAHeAZ8HAAECHwABhwEB2wEeAAEcAdsBHgABswcfAAEcHwABhwEfAAGHAR8AAYcBHwABiAEfAAGIAR8AAYEB3wUAAbMHAdsB3icA")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("nXgAAuQHART8BwAB5AcDFB0AARQBAAEUHQAB5Ae+BwAB5AcBFAGzBx8AARoBswceAAEUARoeAAHkB50HAAEUARofAAEaAbMHHwABGgHWAx8AARQfAAHkBx8AAeQH3AYAAeQHARoBswcfAAEaAbMHHgACGh4AAeQHnQcAAeQHAxodAAEaAQABFB0AAeQHvwcAAuQHARTgVwA=")
          }, {
            chunkX: 0,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gHgAAuQH/gcAAhQB5AceAAEUHwAB5Ae+BwABswcBFAHkBx0AARQfAAEUHwAB5AegBwACFB0AAbMHARQeAAEavwcAAbMHARQB5AcdAAEaHwABFB8AAeQHnwcAAhQB5AceAAEUHwAB5Ae+BwAC5Af+VwA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("EgAFAgEAAQIWAAGzBwEcARMBGQUTAYcBAbMHAWQUAAGzBwEcAS8BAAQQAc4BARwXAAGzBwGSCAEABZIIAbMHFwABgQEHAAGHARcAAYEBBwABhwEXAAGHAQcAAYcBFwABgQEHAAGHARcAAYEBBwABgQEXAAGBAQcAAYEBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQcAAYEBHwABgQEeAAEUAYEBHQACGgGzBxwAAhodAAGBAQEaHgABswcfAAHkB5wDAAMCAQACAgEAAgIVAAeHAQEcAYEBAYcBARwVAAGHAQEcAoEBAocBARwBgQEDHBUAC7MHFQADgQECcAHuBwJwAYcBAhwVAAOHAQFvAeUHAe4HAeUHAW8BgQEBhwEBHBUAA4cBAW8B5QcB7gcB5QcBbwOHARUAA4cBAW8B5QcB7gcB5QcBbwGBAQKHARUAA4EBAW8B5QcB7gcB5QcBbwKBAQGHARUAARwCgQEBbwHlBwHuBwHlBwFvA4EBFQABHAKBAQFvAeUHAe4HAeUHAW8DhwEVAAGBAQIfAXAB5QcB7gcB5QcBcAIfAYcBFQADgQEBhgEBcAHuBwFwAYYBA4cBFwACgQEBHwHuBwEfBIEBGAACgQEBhgEFgQEZAASBAQEaAbMHASMaAAKBAQEaAQAB5AcbAAGBAQEaHgABswcfAAHkB5sDAAICAQABAgEAAQIBAAECFwABswcBhwECswcBHAKzBwEcAbMHARwWAAHdAQGHAQcAARwB2wEWAAGzBwcAAbMHAdsBFQAB3QEBhwEHAAGHAQHbARUAAd0BAYcBBwABhwEXAAGHAQHcAQYAAYcBFwABhwEB3AEEAALcAQGHARcAAYcBAdwBBAAC3AEBgQEXAAGBAQLcAQMAAtwBAYcBFwABgQEC3AECAAPcAQGHARcAAYEBAtwBAgAD3AEBhwEXAAGBAQPcAQEAA9wBAYcBGAABFAXcAQEUAYcBGQABFAPcAQEUAVgBgQEaAAEUAdwBARQBUAEUASMaAAFYARQBWAEaHQABUAEUHgAB5AfbAwAC3AEFAALcARcAAdwBBwAB3AEXAAHcAQcAAdwBFwAB3AEHAAHcARcAAdwBHwAB3AEfAAHcAQIAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AFfAAHcAR8AAdwBjOQBAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 0,
            rle: (0, pm.c)("gIACAA==")
          }, {
            chunkX: 1,
            chunkY: 1,
            chunkZ: 1,
            rle: (0, pm.c)("gIACAA==")
          }]),
          ruinStoneMedium1: qm("ruinStoneMedium1", {
            x: 11,
            y: 16,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("BAABAgEAAgIBAAECAgABAhcAA7MHAYgBAQACswcBiAECswcBAAGHARUAArMHAYgBAwABiAEBHQGzBwEAAYcBFwABiAEDAAGBAQEAAR0BAAGIARcAAYEBAwABiAEDAAGHARcAAYcBAwABgQEDAAGBARcAAYEBBwABiAEXAAGHAQcAAYgBFwABhwH7BQAFAgEAAQICAAMCFAABiAEEIgGzBwUiArMHEwABhwEBHAMiAbMHAR0BswcDIgGzBxQAAYgBArMHARwCIgKzBwEiARwBIgEcFAABgQECHAGzBwEiARwBswcBHAEiAbMHARwBswcUAAGBAQEiARwCIgGzBwIcASIBswcCHBQAAYEBBSIBHAIiAhwVAAGIAQMAARwCIgGzBwMiHgACIvcFAAciAQICAAICEQABHQwiArMHEQABswcLIgEcAR0TAAEdCiIBHBQACyIBHBQADCIUAAEiARwBIgEECCIYAAEcASICBAQiHAABHAEEASL1BQAJIhYAAbMHBSIDswcEIgGzBxIAAR0FIgOzBwQiAR0SAAGzBwUiArMHARwEIgEdEgABHAUiARwBswcBHAMiAR0TAAIiAQQDIgIcAbMHAyIBHBYAAiIBswcBIgEcBSIZAAciHAABHAEEAiLyBQALIgEAAwIRAAGHAQQiAbMHAYgBA7MHAYEBAyIBiAERAAGHAQQiAbMHAYgBArMHAQABiAEDIgGIAREAAR0EIgGzBwGIAQMAAYgBAyIBiAERAAGBAQUiAYEBAwABgQEDIgGIAREAAYgBAiICBAGzBwGBAQMAAYgBAyIBiAERAAGIAQUAAYEBAwABgQEDIgGBAREAAYEBBQABiAEDAAGBAQMiAYEBFwABiAEDAAGHAQMiAYgBGwABhwECHAEiAYcBGwABiAEDAAGHARsAAYEBAwABhwEbAAGIAQMAAYcBHwABhwHSBAABAgIAAgICAAMiFQABswcDIgGBAQGzBwQAArMHAiIBHREAAR0DIgYAA7MHASIBswcRAAEdAyIBiAEGAAEcAiIBHREAASIBBAGzBwEiAYcBBgABswcBIgEcFgABhwEGAAEcASIBswcWAAGIAQYAAiIBHB0AAiIBHB0AAyIcAAGHAQEiAbMHASIBhwEbAAGHAQMAAYcBOwABgQEjAAGHAdAEAAICAgABAgEAAQICAAMiAQITAAGzBwUiAYgBBAACswcCIgGzBxEAAR0DIgHPAQGIAQQAArMHAiIBHREAAbMHBCIBgQEFAAGzBwIiAbMHEQAEIgEAAYcBBQABHAEiAR0dAAEcASIBHB0AARwCIh0AAyIdAAMiHQABIgHRDAEiHAABhwEDAAGBAbAFAAICAQACAgEAAgIBAAMiBAIQAAEdBiIBswcDAAWzBxAAArMHBiIEAAOzBwEdEQABHQEiAQQBswcBHAYAAbMHARwBswcSAAEiARwKAAEcAR0eAAGzBwEcHgACHB0AASIBHAEiHQADIhwAAYEBAyIBgQEbAAGBAQEAAc8BAQABgQGxBQABAgIAAQICAAICAyIBAgIAAS8RAAKzBwQiAYEBAiIBAAGIAQOzBwGIARIAAbMHAiIBswcBIgEcAwABhwEBAAKzBwGIARIAASIBBAEiBgABhwEDAAGIAR8AAYcBHwABhwEfAAGBAR8AAYEBGwABgQEDAAGBARsAAoEBAQABhwEBgQEbAAKBAQOHAR8AAYcBHgABgQEBiAEeAAGBAdQEAAQCAQABAgIAAbMHFwABiAEEswcCIhkAAYgBAbMHAiIcAAGHAR8AAYcBgwcAAQIfAAEiARzXrwEA")
          }]),
          ruinStoneMedium10: qm("ruinStoneMedium10", {
            x: 13,
            y: 30,
            z: 28
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium11: qm("ruinStoneMedium11", {
            x: 11,
            y: 20,
            z: 31
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("KQAB3gECAAHeAQMAAd4BATAXAALeAQEAAd4BAwAC3gEBAAHeARQAA94BAQAC3gECAALeAQEAAd4BFAAD3gEBAALeAQIAAt4BAQAB3gEUAAPeAQIAAd4BBQAB3gEVAALeAQIAAd4BBQAB3gGzBgABAgIAAQIBAAECAQABAgEAAwIBAAICAgABAgEAAgIFAAKBAQIcAQABHAEdAhwDHQIcAR0CHAEdARwCHQIcAR0BAAIdBgABgQECAAEdARwBgQEBHAGBAQEdAhwBHQGBAQEcAR0BHAKBAQEdARwBHQGIAQEdARwBHQcAAYEBAxwCgQEBHQEcAQABHAKBAQIdAgABgQEBHQEcAh0BgQEBHAIdCAACgQEBHQIcAYEBAR0DgQEBHAGBAQEcAYEBAxwBgQEBHAGIAQEcAR0BAAHbAQoAAYEBAR0DgQECHQEAAYEBARwBgQEBHAGBAQEAAR0BHAEAARwBgQECAAHbAQkAAYEBARwBiAEBHAHeAQGBAQEcAYEBAR0BgQECHAGBAQIdAYEBAR0BHAEdARwCAAHbAQsAAYEBARwBgQECAAEdAYEBAQABiAEBgQEBiAEBHQGBAQEAAYgBAYEBAYgBAoEBARwB2wEMAAEcBIEBAYgBAoEBARwFgQEBHAGIAQEcAYEBAYgBCwAEiAEBHAiBAQEcA4gBAoEBAYgBCwABiAEBgQEBHAKBAQGIAQiBAQKIAQEcAYEBAogBAYEBCwADgQEBiAEDgQEBiAEDgQEBiAEHgQEBiAECgQEKAAGBAQGIAQaBAQEAAYEBAYgBAoEBAYgBAoEBAYgBA4EBAQABgQEKAAiBAQGIAQEABIEBAYgBBIEBAcwBDAABiAEBgQEBiAECgQEBiAECgQEBAAmBARAAB4EBAQACgQECAAaBAQ8AAYEBAogBAoEBBgADgQEBiAEEgQENAAGIAQEAAYEBAQABgQEGAAGBAQEAAYgBAQABgQEBAAGBAcwDAAECAgABAgwAAgINAAJCAQACQgwAAkIBAAJCCgABQgE/AUIBOwFCAQAC3AECAAEzBgABQgE7AUIBPwFCCwABQgE7AkIBAALcAQEAAVQCMwUAAkIBOwFCCwABQgE7AUIBOwEzAUIC3AECVAIzAVQDAAFCATMBOwFCATsBQgsAAkIDMwFCAdwBAlQCMwJUAQABQgMzAUIB3AEBQg0AAUIDMwFCAlQCMwJUAUIDMwFCAQAC3AEKAAQMAUICMwFCAlQCMwJUAUIBMwEvAUICDALcAQoAAoMBAQACgwEDQgJUAjMBvQcB3AEDQgWDAQoABwwBGgJUATMBvQcBAAHcAQEaBwwKAAaBAQEaAQwCVAIzAQAB3AEBDAEaA4EBA4gBCgAGVAEMARQCVAHNAQEzAVQB3AEBFAEMBFQBAAFUDAAGFAJUAjMCVAYUDwAFVAYfBVQXAAKBARwAAYEBAVQCFAFUAYEBGQABgQEGAAGIAfIDAAEUBAACFAEAARQBAAQUAQACFBoAAtwBBgAB3AENAAHcAQkAAtwBBgAC3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBBwAB3AEMAAHcAQkAAtwBFAAB3AEJAALcARQAAdwBCQAC3AEyAAGBAUEAAYgBIAABiAEgAAGIASAAAYEBBAACgQEaAAOBAQFUAhQBVAKBAQGIARcAAYgBAwAB0QwBAAHdAQGBAfEDAAEcAQABHAcAARwBAAIcAQACHAEAAhwWAAHRDJYCAAGIASAAAYgBIAABgQEgAAGBASAAAYgBBAACgQEEAAGIARUAAoEBAYgBAVQCFAEAAYgBAYEBAYgBFwABgQEFAAHdAQGBAfUDAAECAgABAgYAAQIVAAFUAgABgwEBvQcDAAGDAQEAAYMBAb0HAYMBAVQB2wERAAGBAQgAARwBAAGBAQEAARwB2wEQAAHdAQGBAQgAAdwBAwABgQEB2wEQAAHdAQEcCAAB3AEDAAGIAQHbARAAAd0BARwIAAHcAQMAARwB2wEQAAHdAQEcCAAB3AEVAAHdAQGIAQgAAdwBAwABiAERAAHdAQGIAQgAAdwBAwABiAEOAAGBAQIAAd0BAYgBCAAB3AEDAAGBAQ4AASMBgQEBAAHdAQGBAQgAAdwBAwABgQEPAAEjAYEBAd0BAYEBCAAB3AEDAAGBARAAASMCgQEIAAHcAQMAAoEBEAABIwGBAQgAAdwBAwABgQEBIxEAASMBgQEEAAKBAQEAAdwBAgABgQEBIxMAASMCgQEBiAEBVAEvARQBVAHcAQKBAQEjFQABIwGIAQUAAd0BAYEBASOfBAAB3AEfAALcAR8AAdwBEAAB3AEOAAHcARAAAdwBDgAB3AEQAALcAQ0AAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEAAC3AEBAAHcAQsAAdwBEQAB3AEBAAHcAQsAAdwBHwAB3AEfAAHcARkAAoEBBAAB3AEWAAGBAQGIAQFUAc8BARQBVAGIAQGBAR4AAd0BAYEBmwUAAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBHwAB3AEfAAHcAR8AAdwBAYEBHAABgQEBAAIUAVQBiAEBgQEfAAGBAbsHAAKBAR0AAVQCFAFUAoEBHwABgQG7BwACgQEgAAFUj7QBAA==")
          }]),
          ruinStoneMedium2: qm("ruinStoneMedium2", {
            x: 19,
            y: 15,
            z: 19
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium3: qm("ruinStoneMedium3", {
            x: 16,
            y: 18,
            z: 29
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium4: qm("ruinStoneMedium4", {
            x: 20,
            y: 15,
            z: 23
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium5: qm("ruinStoneMedium5", {
            x: 16,
            y: 24,
            z: 18
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium6: qm("ruinStoneMedium6", {
            x: 21,
            y: 15,
            z: 26
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium7: qm("ruinStoneMedium7", {
            x: 16,
            y: 23,
            z: 17
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("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")
          }]),
          ruinStoneMedium8: qm("ruinStoneMedium8", {
            x: 14,
            y: 18,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("JAACZN4HAAMCHQABIgGBAQEiHwABgQG7BwABAgEAAwIaAAGBAQUiAYEBHAABIgEEASIeAAGWAZsHAAQCAQABAhkAAWQHIhkAAYgBASIBBAEiAgQBgQEbAAGWAQHRDF0AAbMHHwABswcBAAIcHAABswcBAAIcHAABswcBAAKzBxwAAbMHAQACHRwAAbMHAQACHR4AAh38BAACAgEAAwIZAAGHAQUiAYcBGgABBAIiAQQBIhsAAZYBAQAB3gEB1QgeAAHeAQHWCBwAAbMHAQAB3gEdAAGzBwEAAd4BHQABHQEAAhwcAAEdAQACHBwAAR0BAAKzBxwAAR0BAAIdHAABswcBAAIdHgACHfsEAAcCGAABZAciGQABgQEFIgGBARsAAd0BAhwcAAGzBwEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABHQEAArMHHAABswcBAAIdHAABHQEAAh0cAAGzBwEAAh0eAAIdHQAEHBwAAxwdAAIcnAQAAQICAAMCGgABhwEFIgGHARoABSIbAAGzBwEAAhwcAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECswccAAGzBwHbAQKzBxwAAR0B2wECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwBzAEBAAEcugQAAQICAAMCGgAGIhoAAYgBAc4BAyIBBBsAAbMHAcwBAgABlgEbAAEdAdsBHgABHQHbAR4AAR0B2wEeAAGzBwEvArMHHAABHQHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHBwAARwCAAEcugQAAQIBAAECAQABAhsAAYgBBSIbAAECAyIBBBsAAbMHAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECswccAAGzBwHdAQKzBxwAAR0B3QECHRwAAR0B2wECHRwAAbMHAdsBAh0eAAIdHQAEHNoEAAICAQABAgEAAQIaAAYiGgABgQEFIhwAAd0BAhwcAAGzBwHdAQKzBxwAAR0B3QECswccAAEdAd0BArMHHAABHQHdAQKzBxwAAR0B3QECswccAAGzBwHdAQIdHAABHQHdAQIdHAABswcB3QECHR4AAh0dAAQcHgACHL0EAAICGgABZAGBAQUiAYcBGgABBAEiAQQBIgEEGwAB3AEfAAHcAR8AAbMHHwABswcfAAEdAQACHBwAAR0BAAIcHAABHQEAArMHHAABHQEAAh0cAAGzBwEAAh0eAAId/QQABQIZAAciGQABgQEBIgIEASIBBAGIARoAAdwBAQAB0QwBAAGWARsAAdwBHwAB3AEfAAGzBx8AAbMHAQACHBwAAbMHAQACHBwAAbMHAQACswccAAGzBwEAAh0cAAGzBwEAAh0eAAId+wQAAgIBAAMCGgABiAEFIgGIARoAASIBBAMiHAABlgGgBwACAhwAASIBgQEBIgGBAQEiGwABiAEBAAGBAQEAAYEBuZcBAA==")
          }]),
          ruinStoneMedium9: qm("ruinStoneMedium9", {
            x: 14,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AgACAh4AA7MHHQABswcBHQGBAR0AARwB4gceAAEdHwACgQEeAAGIAQGBAQGIAR0AAoEBAYgBHQABgQEB4gf+BQACAh0AAbMHARkBEwEAAYEBGwABgQEDAAEcGwABHAMAAYgBGwABiAEDAAGBARsAAR0DAAGBARsAAYEBAhMBAAGBARsAAYEBAcwBHgABiAH/BQACAh0AAbMHARkCEwEAARMBswcZAAGzBwG9BwQAARwZAAGIAQUAAR0ZAAGBAQUAAYgBHwABgQHcBgABAgIAAQIZAAGzBwETARkDEwGBARkAAYEBAgAB0QwCAAGIARkAAeIHBQABgQEfAAGBAfoGAAICAQACAgEAAgIBAAICFAABgQEBGQQTAQACgQEDHAGBARMAARwGAAOBARYAAYEBBgABiAGZBwABzQEKAAECFAABgQECAAETARkGAAGzBxQAAYEBHwABiAEfAAGIAR8AAYEBHwABgQHABgADAh0AAbMHAYEBARMHAAGBARUAAYEBARwIAAEcFQABHAGHAR4AAoEBHgABiAEBgQEfAAGBAcAGAAECBQABAgEAAQIXAAGHAQUAARMBGQGzBxYAAWQBgQEHAAGHARYAAZYBARwfAAGBAf8GAAMCAwADAhcAAYEBARkBEwEAAxMBGQGzBxcAAR0HAAGIARcAAYEBnwcABAICAAMCFwABswcFEwEZARMBswcXAAEdBAAB0QwCAAEcHwABgQGaBwAFAhgAAYcBAgAFEwGHAR4AAaAIARwfAAGBAR8AAYgB9wYAAQICAAICAgACAhcAAYcBAgACEwEZAhMBswccAAGkAQEAAc4BAYEBHwABgQEfAAGBAfcGAAQCAQACAgEAAQIXAAGzBwGHAQOzBwEdAbMHAh0ZAAGBAQMdAocBAR0ZAAGBAQGIAQGBAQLiBwEdARwbAAGBAQGIAQOBAR0AAoEBAYgB+wYAAmQfAAGWAbaXAQA=")
          }]),
          ruinStoneSmall1: qm("ruinStoneSmall1", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("ghAAAQICAAGzBwEuAR0aAAGHAQMAAYgBHwABiAEfAAGBAR8AAYYBHgAChwEBgQEeAAGHAbsGAAICAbMHAYEBARwCHRkAAocBBQABiAEZAAGHAQUAAYcBHwABhwEfAAGGAR4AAYEBAYgBHwABgQG5BgABswcBzAED6AcBHAGzBxoAAYcB3QcAAR0BHAXoBwEdAQIXAAFkBwABgQF3AAGBAQcAAYcB2AYAARwF6AcBswcBAhYAAWQBiAEDAAHRDAMAAYgBFgABZAGIAQcAAYgBFwABgQEHAAGBARcAAYYBBwABhgEXAAGBAQYAAWQBhwEXAAGBAQcAAYcBtwYAAbMHAR0F6AcBHAGzBxUAAmRIAAFkHwABZBcAAYEBBgABZAGHAR8AAWS4BgACHQPoBwEdAbMHmQEAAYcBBQABgQEBZB4AAWS5BgABAgGzBwEAAR0BHAEdGgABiAECAAHPAQIAAYgBGQABgQEFAAGIARkAAYEBBQABiAEZAAGGAQUAAYYBGQAChwEDAAKBARkAAYcBBQABgQG7BgABswcBAgEdHgABiAEfAAGIAR8AAYEBHwABhgEeAAGHAQGBAdmuAQA=")
          }]),
          ruinStoneSmall2: qm("ruinStoneSmall2", {
            x: 11,
            y: 8,
            z: 12
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AgACAgGzBwEdAgACAhcAAYgBAbMHAR0DAAGzBwEdAYgBAbMHFgABiAECIgMAARwBIgGIAQGzBxYAAocBBQABIgGBARcAAYYBBwABhgEfAAGBAdYGAAECBgABHQIAAbMHAS4UAAGzBwEcCQABhwEUAAEiAcwBCQABhwEUAAEiCgABgQGUBwABAgEAAR0IAAECFAABHQGzBwkAAYcBFAABswe/BwABswcEAAEd/gcAAbMHAQACHfsHAAMCAc8BAgIBswcZAAGzBwMdAbMHAYgBAmQZAAGzBwEcAiIBiAEdAAEingcAArMHAQACAhkAAbMHAYgBAdEMAgABHQGIAQFkGAABswcBiAEDAAGzBwGBAQFkGQABgQEDAAEiAYcBGgABhgEEAAGHARoAAYcB3wYAArMHAgABswcBAhgAAWQBswcBzQEEAAEiAmQXAAEcBQABswe5BwABAgIAAbMHGgACZAEdBQABswcYAAFkAbMHBQABHBkAASKfBwABswcBAh4AAWQCswceAAGzBwEcurcBAA==")
          }]),
          ruinStoneSmall3: qm("ruinStoneSmall3", {
            x: 12,
            y: 9,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("BgADAh0AArMHAYgBHQABIgEAAYEBuAcAAQIBAAECAQABAgEdAQABswcYAAGHAQEAArMHAYcBAc0BGgABgQEBAAIiAYgBHQABIgEAAYEBnAcAAQICAAEdAbMHAR0aAAGHAQEcHgABiAEfAAGBAR8AAYYB/wYAAQIBswcCAAGzBxoAAWQBswcfAAEiwAcAAgIEAAECFgACZAKzBwEcBAABhwEBiAEXAAGzBwEiBQABhwG6BwABAgEdAwACAhcAAWQCswcEAAGHAQGzBxcAAWQBIgGzBwUAAbMHGQABIgUAASKYBwABAgHNAQGzBwEdAgABswcXAAJkAYEBARwFAAGzBxgAAYEBBgABIhgAAYgBBgABIhgAAYYBBgABIhgAAocBHwABhwHABgABswcCAAGzBwEdAQIXAAFkAbMHAdEMBQACHRcAASIHAAEiFwABIgcAASKZBwACAgIAAbMHAQIYAAFkArMHARwDAAEcAbMHGAABHAEiBQABswcfAAEimAcAAwIDAAGzBwECGAAChwEBgQEEAAGHARkAAocBBAABiAEfAAGBAR8AAYYB/wYAAS4eAAGIAQGHAV8AAYcB9K4BAA==")
          }]),
          ruinStoneSmall4: qm("ruinStoneSmall4", {
            x: 9,
            y: 10,
            z: 8
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("AgACAh4AASIBHR4AArMHHgABIp4HAAECHwABHQEcHgABIgHRDB4AASKeBwABAgHMAR4AARwBHR8AAbMHRAABZB4AAWQeAAJkuwYAAQIfAAGIAQMAAYgBGwABiAEDAAGIARsAAYEBAwABiAEBZBoAAYEBAwABgQEBZBoAAYYBAYcBAQABgQEBhgEbAAOHAQGBAQGIAR0AAmSgBgABAh8AAR0CZB0AAR0BZB4AASI8AAFkHwACZOAGAAEcAbMHAWQdAAHOAQEiHwABIpwHAAEuAQACAhwAAbMHAh0BHBwAARwBAAGzBx8AASKbzwEA")
          }]),
          ruinStoneSmall5: qm("ruinStoneSmall5", {
            x: 13,
            y: 11,
            z: 13
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("JwABZBsAAd4BAwABlgEbAAHeAQYAAWQfAAFkIAABZNcGAAUCAQADAhUAAbMHAYEBAbMHAYEBA7MHAR0DswcVAAGBAQEdAoEBBB0BgQECHBUAAR0BgQEBHQGBAQEdAoEBA4gBARwBZBMAAd0BAYEBAYgBAQADgQEBiAECgQEBiAEBHRQAAd0BAYgBAwABiAEGgQEaAASBAQKIARoAAogBA4EBAYgBGwABgQEBAAGBAQEAAYEB9QUAAgIBAAMCAQAEAhUAAbMHAhUDDwMVAQ8BswcUAAHdAQEdAwABDwMAAc0BAQABHRQAAd0BAYEBBAABFQQAAR0UAAHdAQGBAQUAARUDAAGIARQAAd0BAYgBBgABDwIAAYEBHQACDwGIAR8AAYEBlQYAAQIBAAQCAQACAgEAAQIUAAFkARwCFQMPAhUBDwEVARwVAAGBAQMAARUFAAGBARUAAeIHBAABDwQAAeIHFQABiAEFAAEPAwABiAEcAAEPAgABgQEcAAG9BwEVAQ8BgQEfAAGBAR8AAYEB9QUAAgIBAAICAwABAhcAAR0BDwEVBA8CFQEPAR0VAAEdCQABHRUAAeIHCQAB4gcVAAGBAQkAAR0fAAGBARsABBUBgQEfAAGIAZUGAAcCAQABAhcAAbMHAw8BFQHMAQEPARUBDwEVAbMHFQABgQEBpAEBAAHeAQEAAQkEAAEdFQAB4gcCAAHeAQEAAQkEAAHiBxUAAYEBAgAB3gEBAAEJBAABgQEYAAHeAQEAAQkEAAGBARgAAd4BAQ8CFQEPARUBDwGIAR8AAYEBHwABgQH2BQACAgEAAwIBAAECAQABAhUAAbMHAQ8BFQMPARUBAAEVAQ8BswcVAAEdAQAB3QECAAGgCAQAAYEBFQABgQEBAAHdAQIAAaAIBAABgQEVAAGBAQEAAd0BBwABiAEXAAHdAQcAAYgBFwAB3QEBDwEVBA8BAAGBARkAAdEMAQABzwEDAAGBAZUGAAMCAgAFAhYAAbMHAQ8DFQEPBBUBHBUAAYEBBAABoAgEAAGzBxUAAYEBCQABHRcAAd0BBwABiAEXAAHdAQcAAYEBFwAB3QEBDwIVAg8CAAGIAR8AAYEBHwABgQH1BQABAgIABAICAAECFgABiAEDFQIPARUBAAEVAQ8BHRUAAR0JAAGIARUAAR0JAAGzBx8AAR0YAAHcAQYAAYEBGAAB3AEGAAGIAR8AAYgBlgYAAwIBAAECAwACAhYAAw8BAAEJAwABFQGzBxoAAQkEAAGzBxoAAQkEAAEdHwABHR8AAYEBHwABgQEfAAGBAR8AAYEB9gUAAQIfAAEVBwABFQGzBx8AAR0fAAGIAR8AAYEBHwABgQEfAAGBAb8GAAECHwABgQEfAAGIAR8AAYEBnwcAAQIfAAEdHwABgQG0nwEA")
          }]),
          ruinStoneSmall6: qm("ruinStoneSmall6", {
            x: 11,
            y: 9,
            z: 11
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, pm.c)("JQAB3gEfAAHeAb4HAAECAQABAhwAAWQBswcBhwEBHRwAAZYBAYEBAYgBAYEBHQABgQEB4gcBiAEdAAGBAQHiBwGBAR4AAYgBAYEBHgABgQG9BgABAgMAAQIZAAHdAQGHAQGBAQEAAhQCswceAAGBAQEdHgABgQEBhgEeAAKBARwAARIBGAGBAQGIAR4AAYEBvQYAAgIBAAECGQABgQEBAAEUAhoBFAGBARgAAd4BBgABhwEYAAHeAQYAAYEBHwABgQEcAAEYAhIBgQEeAAHOAQGHAbcGAAICAgABAgEAAQIBAAICFgABswcBhwECAAEaAxQBGgEdFwABhwEB2wEEAAGgCAEAAYcBFwABgQEB2wEGAAGIAR0AAb0HAQABgQEXAAGBAQIAARIBGAESARgBEgGHAdcGAAECAgADAgEAAgIWAAGzBwGIAQEAARoDFAHOAQEUAbMHHAAB2QEBCwHPAQGIARwAAdkBAQsBAAGGARcAAYEBBQABCwEAAYEBFwABiAECAAISAd4EAhIBhwEfAAGHAbYGAAoCFgABswcBhwEDFAEaAxQBswcBZBYAAYcBBQABoAgBAAGBARcAAYcBBwABgQEXAAGBAQcAAYEBFwABgQECAAEYAxIBGAGHAdgGAAcCGQABhwEBGgIUARoBFAGBAR8AAYEBHwABgQEfAAGBARkAAYcBAQABGAESAhgBgQEZAAGHAQIAAdEMAgABgQG6BgACAgEAAQIbAAGHAQGzBwEaARQBGgKzBx4AAYEBAYgBHgABgQEBhgEeAAKBARoAAYcBAhIBGAGBAQGIARoAAYcBAwABgQG9BgACAhwAAWQBswcBhwEBswcBAAFkHQABgQEeAAHiBwGIAR0AAYEBAeIHAYEBHQABgQEBiAEBgQH+BgAC3AEeAALcAR0AA9wBHQAD3AEdAAPcAdmuAQA=")
          }])
        };

        function Vm(mm, Tm, fm) {
          const hm = new Rm.c;
          for (const am of fm) {
            const mm = hm.get(am.chunkX, am.chunkY, am.chunkZ);
            if (!(0, Am.H)(mm)) throw new Error(`Duplicate chunk at ${am.chunkX}, ${am.chunkY}, ${am.chunkZ}`);
            hm.set(am.chunkX, am.chunkY, am.chunkZ, am.rle)
          }
          return new im.b(mm, {
            x: 0,
            y: 0,
            z: 0
          }, Tm, hm)
        }
        const Im = {
            dungeonDraugrLarge1: Vm("dungeonDraugrLarge1", {
              x: 21,
              y: 14,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pm.c)("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")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, pm.c)("IAAEHBwABxwZAAEdBxwbAAEdHgACHRwAAR0BAAIdHAAEHZwGAAIcHgAGHBoACBwYAAgcGAACfwEfAR0cAAJ/AYEBAR0cAAJ/AYEBAR0cAAJ/AR8dAAMf/QUABRwbAAccGQAIHBgAAxwBHQQcGAADfwEdHAADfwEdHAADfx0AA38dAAIcAR/9BQAGHBoABxwZAAgcGAADHAEdBBwYAAN/AR0cAAN/AR0cAAN/AR0cAAN/HQACHAEf/QUABhwaAAgcGAAIHBgABBwCHQIcGAADfwIAAx0YAAN/AQAEHRgAA38CwgIDHRgAA38FHRkAARwBHx0ABB0cAAHCAgMdHgACHR8AAR0fAAEd3AQABhwaAAgcGAAIHBgACBwYAAJ/AR8DfwEfAR0YAAJ/AYEBA38BgQEBHRgAAn8BgQEDfwGBAQEdGAACfwEfA38BHwEdGAAHHxkAAn8BHwEdHAACfwGBAQEdHAACfwGBAQEdHAABfwG9BwEfAR0cAAMfAR3cBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/GQAHfwEdGAAHfwEdGAACfwEfAxwBHxkAA38BHRwAA38BHRwAAn8BvQcBHRwAAX8CvQcBHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/GQAHfxkAB38BHRgAAX8BvRMFfwEdGAABfwHJEwEfAQACHAEfAR0YAAN/AR0cAAN/AR0cAAN/AR0cAAJ/Ab0HAR0cAAIcAR8BHdwEAAccGQAIHBgACBwYAAccAR0YAAd/GQAHfwEdGAAHfwHCAhgAB38BHRgAAn8BHAMAAR8BHRgAA38dAAN/AR0cAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAHHAEdGAAHfwEdGAAHfwHCAhgAB38BwgIYAAd/GQACfwEcAwABHwEdGAADfx0AA38dAAN/AcICHAADfwEdHAACHAEfAR3cBAAHHBkACBwYAAgcGAAIHBgABn8BzgEBHRgAB38BwgIYAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfx0AA38BHRwAA38BHRwAAhwBHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/GQAHfxkAAn8BHwMAAR8ZAAN/HQADfwEdHAADfwEdHAADfwEdHgABHwEd3AQABxwZAAgcGAAIHBgACBwYAAd/AR0YAAd/AR0YAAd/AR0YAAd/GQACfwEfAQACHAEfGQADfwEdHAADfwEdHAADfwEdHAADfx8AAR/dBAAHHBkACBwYAAgcGAAIHBgAB38ZAAd/AR0YAAd/AR0YAAF/Ab0TBX8BwgIYAAF/AckTAR8DHAEfGQADfwHCAhwAA38BHRwAA38dAAN/HwABH90EAAccGQAIHBgACBwYAAgcGAAHfxkAB38ZAAd/AR0YAAd/AcICGAACfwEfAxwBHxkAA38BwgIcAAN/AcICHAADfx0AA38eAAEcAR/dBAAGHBoACBwYAAgcGAAIHBgAAn8BHwN/AR8ZAAJ/AYEBA38BgQEZAAJ/AYEBA38BgQEBHRgAAn8BHwN/AR8BHRgABx8ZAAJ/AR8BHRwAAn8BgQEBHRwAAn8BgQEBHRwAAn8BHx0AAx/dBAAGHBoACBwYAAgcGAAIHBgAA38BAALCAgEdGQADfwEAAR0BwgICHRgAA38FHRgAA38CHRwAARwBHz0AAR0CAAEdHAAEHRwAAR0BwgICHRwABB3cBAAGHBoABxwZAAgcGAAIHBgAA38dAAN/AR0cAAN/AR0cAAN/AR0cAAIcAR/9BQAFHBsABxwZAAgcGAAIHBgAA38BHRwAA38BHRwAA38BwgIcAAN/AcICHAACHAEf/QUAAhweAAYcGgAIHBgACBwYAAJ/AR8BHRwAAn8BgQEBHRwAAX8BvQcBgQEBHRwAAr0HAR8BHRwAAx+dBgAEHBwABxwZAAEcAx0EHBgAAsICAh0cAAEdAcICAh0cAAEdAgABHbxeAA==")
            }]),
            dungeonDraugrMedium1: Vm("dungeonDraugrMedium1", {
              x: 27,
              y: 14,
              z: 27
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pm.c)("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")
            }]),
            dungeonDraugrSmall1: Vm("dungeonDraugrSmall1", {
              x: 11,
              y: 7,
              z: 11
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pm.c)("AgAGHBoAAsICBgABHRYAAh0CwgICAAIdAQABHRUABR0BAAMdFwADHQMAAh0BwgIBHRYAAR0FAAEdAsICAR0dAAMdtwYACRwXAAEfB38BHwEdFQABHQGBAQd/AYEBAR0VAAEdAYEBB38BgQEBHRUAAR0BgQEHfwGBAQEdFQABHQGBAQd/AYEBFgABHQUfAhwCHwEdtgYACRwBHRYACX8BHRUAAR0JfwEdFQABHQG9Bwh/AcICFQABHQG9Bwh/AR0VAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYAChwBHRYACX8BHRUAAcICCX8BHRUAAcICCX8BwgIVAAEdAb0HCH8BwgIVAAEdCX8BHRUAAR0BHwIcBQABHwEdtQYABBwDHwMcAR0WAAl/AR0WAAl/FgABwgIJfxYAAR0JfwHCAhYACX8BHRYAAR8BHAYAAR8BHbUGAAQcAx8EHBYABH8B0QwEfxcACX8XAAl/FwAJfxcACX8XAAEfBwABHLYGAAQcAx8EHBUAAR0JfwEdFQABHQl/AR0WAAl/FwAJfxcACX8XAAEfBgACHLYGAAEdCRwBHRUAAR0BzAEIfwHCAhUAAR0JfwEdFQABHQl/FwAJfwEdFgAJfwEdFgABHAQAAxwBHwEdtgYACRwBHRUAAcICCX8BwgIVAAEdCX8WAAEdCX8XAAh/Ab0HAR0WAAl/AR0WAAEfAwAEHAEfAR22BgAJHBYAAR0BHwd/AR8WAAEdAYEBB38BgQEXAAGBAQd/AYEBFwABgQEHfwGBARYAAR0BgQEHfwGBAQEdFQABHQYfARwCHwEdtwYAAx0DHBgABR0FAAEdFQADHQLCAgIAAh0ZAALCAgIABB0cAAIdAcICAR0WAAEdBQABHQLCAhcAAh0FAAMdtq4BAA==")
            }]),
            dungeonMagmaLarge1: Vm("dungeonMagmaLarge1", {
              x: 40,
              y: 23,
              z: 40
            }, [{
              chunkX: 0,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pm.c)("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AdMLAtcDAdMLBdcDAhwFABl/BAAdfwMAHX8CAB9/AQAffwIAHn8CAB5/AgAefwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwYAGn8KABR/xQIAChwG1wMDHATXAwYcAQAJHAHXAwEAAdEDBtMLA9cDBNMLAdcDAQAC1wMLHAHXAxTTCwHXAwocAdcDFNMLAdcDChwB1wMU0wsB1wMLHAbXAwPTCwLXAwHTCwjXAwIcAwAJfwHRDA5/AdEMAn8EABx/BAAcfwQAHn8CAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BgAafwoAB38FAAh/xQIADBwC1wMPHAEAChwB1wMCAAHXAwLTCwzXAw0cAdcDEtMLAdcDCxwB1wMT0wsB1wMLHAHXAxTTCwHXAwscFNcDAhwDABt/BAAcfwQAHH8EAB5/AgAefwIAHn8CAB5/AwAdfwMAHX8DAB1/BAAcfwQAHH8EABx/BQAbfwYAGn8KAAV/CQAGf8UCAB0cAQALHAbXAwUcBdcDDxwB1wMG0wsF1wMF0wsB1wMNHALXAwfTCwPXAwfTCwHXAwwcAdcDEtMLAdcDDRwS1wMDHAMAGn8GABp/BgAafwUAHn8CAB5/AwAdfwMAHX8DAB1/AwAdfwQAHH8EABx/BAAcfwQAHH8FABt/BgALfwMADH8LAAN/CwAFf8UCAB0cAQANHALXAxwcAtcDAtMLAtcDBRwF1wMQHAHXAwTTCwLXAwMcAtcDA9MLAtcDDhwC1wME0wsG1wME0wsC1wMQHATXAwYcBNcDBRwEAA9/BAAEfwkAEH8CAAV/CAAZfwcAHX8DAB1/AwAdfwMAHX8EABx/BAAcfwQAHH8EABx/BAAcfwUADn8CAAt/BQANfwQACn8GAAp/CAAIfxoAA3/GAgAdHAEALRwC1wMdHATXAwccA9cDEhwF1wMFHATXAyUcBQANfxIADn8SAA9/EQAcfwQAHH8EABx/BAAcfwQAHH8EAA9/AgALfwQAD38DAAp/BQANfwQACn8FAA1/BAAKfwUADH8GAAl/BQAMfwYACX8HAAl/CQAHf+ACAA==")
            }, {
              chunkX: 0,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, pm.c)("QAACHB4ABRwbAAccGQAHHPkGAAMcHQAGHBoABhwaAAccGQAIHPgGAAUcGwAGHBoACBwYAAgcGAAIHNgGAAEcHwAGHBoABhwaAAgcGAAIHBgACBzYBgADHB0ABhwaAAccGQAIHBgACBwYAAgc2AYABBwcAAYcGgAIHBgACBwYAAgcGAAIHDgAAX8fAAJ/HgACfx4AAn8eAAJ/HgACfx4AAX8fAAF/HwABf58EAAQcHAAHHBkACBwYAAgcGAAIHBgACBwYAAHNAQF/HgADfx0AA38dAAN/HQADfx0AA38dAAN/HQADfx0AA38dAAJ/HgACfx4AAn8eAAF/vwMABRwbAAccGQAIHBgACBwYAAgcGAAIHBgAA38dAAN/HQADfx0AA38dAAR/HAAEfxwABH8cAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABRwbAAccGQAIHBgACBwYAAgcGAAIHBgAA38dAAR/HAAEfxwABH8cAAR/HAAEfxwABH8cAAR/HAAEfxwABH8cAAN/HQADfx0AA38dAAN/HQABf/8CAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAR/HAAEfxwABX8bAAV/GwAFfxsABX8bAAV/GwAEfxwABH8cAAR/HAAEfxwABH8cAAN/HQADfx0AAn/+AgAFHBsABxwZAAgcGAAIHBgACBwYAAgcGAAFfxsABX8bAAV/GwAGfxoABn8aAAV/GwAFfxsABX8bAAV/GwAEfxwABH8cAAR/HAAEfxwAA38dAAJ//gIABRwbAAccGQAIHBgACBwYAAgcGAAIHBgABX8bAAZ/GgAGfxoABn8aAAZ/GgAGfxoABn8aAAV/GwAFfxsABX8bAAR/HAAEfxwABH8cAAN/HQACf/4CAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAR/HAAGfxoABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABX8bAAV/GwAFfxsABH8cAAR/HAAEfxwAAn/+AgAFHBsABxwZAAgcGAAIHBgACBwYAAgcGAACfx4AB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoABn8aAAV/GwAFfxsABX8bAAR/HAAEfxwABH8cAAJ//gIABRwbAAccGQAIHBgACBwYAAgcGAAIHBgAAX8fAAd/GQAHfxkAB38ZAAd/GQAHfxkABn8aAAZ/GgAGfxoABX8bAAV/GwAEfxwABH8cAAN/HQACf/4CAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAF/HwAFfxsAB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAR/HAADfx0AAX//AgAFHBsABxwZAAgcGAAIHBgACBwYAAgcOAADfx0AB38ZAAd/GQAHfxkAB38ZAAd/GQAGfxoABn8aAAV/GwAEfxwABH8cAAR/HAACf54DAAUcGwAHHBkACBwYAAgcGAAIHBgACBw4AAJ/HgAHfxkAB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoABX8bAAR/HAABf98DAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAQcHAAEHBwABBwDfxkAAxwEfxkAAxwEfxkAAhwFfxsABX8bAAR/HQADf7oEAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAQcHAAEHBwABBwBfxsABBwDfxkABBwDfxkABBwDfxkAAxwBAAN/HgABf9oEAAUcGwAHHBkACBwYAAgcGAAIHBgACBwYAAQcHAAEHBwABBwcAAQcA38ZAAQcA38ZAAQcA38ZAAMcAQADfx4AAX/aBAAFHBsABxwZAAgcGAAIHBgACBwYAAgcGAAEHBwABBwcAAQcHAAEHAN/GQABfwMcA38ZAAF/AhwEfxkAAX8CAAR/HAADfx4AAn8fAAF/mgQABRwbAAccGQAIHBgACBwYAAgcGAAIHHgAB38ZAAd/GQAHfxkAB38ZAAZ/GgAGfxoAAX8CAAN/GgABf/8DAAUcGwAHHBkACBwYAAgcGAAIHBgACBx4AAd/GQAHfxkAB38ZAAd/GQAGfxoABn8aAAZ/GgAFfxsAAn8eAAF/vwMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAd/GQAHfxkAB38ZAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAJ/ngMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABn8aAAV/GwAFfxsABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABn8aAAZ/GgAGfxoABn8aAAZ/GgAGfxoABX8bAAV/GwAFfxsABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABX8bAAV/GwAGfxoABn8aAAV/GwAFfxsABX8bAAV/GwAEfxwABH8cAAN/nQMABRwbAAccGQAIHBgACBwYAAgcGAAIHHgABH8cAAV/GwAFfxsABX8bAAV/GwAFfxsABH8cAAR/HAAEfxwAA38dAAN/HQACf/4CAAUcGwAHHBkACBwYAAgcGAAIHBgACBx4AAR/HAAEfxwABH8cAAR/HAAEfxwABH8cAAR/HAADfx0AA38dAAN/HQADfx0AAX//AgAFHBsABxwZAAgcGAAIHBgACBwYAAgceAADfx0AA38dAAN/HQADfx0AA38dAAN/HQADfx0AA38dAAN/HQADfx0AAn8eAAF//wIA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 0,
              rle: (0, pm.c)("AwAdHAEAnwEcBQAJfwQABBwPAA1/BBwPAA1/BBwPAA1/BBwKfwQAD38DHAp/BAAPfwMcCn8EAA9/AhwBAAp/BQANfwQACn8FAA1/BAAKfwUADX8EAAp/BQANfwQACn8GAAt/BgAJfwYAC38GAAl/BgAKfwcACX8JAAZ/CgAHf+QCABwcAQCfARwGAAF/Ac8BBX8FAAQcDwANfwQcDwANfwQcDwANfwQcCn8FAA1/BBwKfwUADX8EHAp/BQANfwEAAhwBAAp/BQANfwQACn8FAA1/BAAKfwYADH8EAAp/BgALfwUACn8GAAt/BgAJfwcACn8GAAl/CAAIfwcACX8LAAN/DAAEf+YCABwcAgCeARwIAAN/BwAEHBEAC38EHBAADH8EHBAADH8EHAp/BgAMfwQcCn8GAAx/AxwLfwYADH8BAAIcC38HAAt/AwALfwcAC38EAAp/BwALfwQACn8IAAl/BQAKfwgACX8FAAp/CQAHfwcACX8KAAZ/CAAIf4UDABscAgAeHAEAfxwSAAQcEwAHfwIABBwTAAl/BBwSAAp/AxwLfwgACn8DHAt/CAALfwIcC38IAAt/AgALfwgAC38CAAt/CQAKfwIAC38JAAl/AwALfwkACX8DAAt/CgAHfwUACn8LAAN/CQAIfxsAA3+KAwAZHAIAHhwCAH4cLAADfxwACX8XABN/DAAUfwwAFH8MABV/CwAVfwwAFH8MABN/DgAHfwIACX8PAAN/BgAHfxsABH/HAwAdHAIAfhwuAAF/HwAFfxoADn8SAA9/EQAPfxEAD38SAA1/EwANfxQAC38XAAJ/AgADf40EABscAgAeHAIAHhwBAD8cTwAEfxwACX8XAAl/FwAIfxkAB38bAAR/kAUAGhwDAB0cAQAfHAEAHxzAxgEA")
            }, {
              chunkX: 1,
              chunkY: 0,
              chunkZ: 1,
              rle: (0, pm.c)("BRwbAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AA38dAAN/HQADfx0AA38dAAN/HQACfx4AAn8eAAJ/ngMABBwcAAccGQAIHBgACBwYAAgcGAAIHHgAAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/ngMABBwcAAccGQAHHBkACBwYAAgcGAAIHHgAAX8fAAF/HwACfx4AAn8eAAJ/HgACfx4AAn8eAAJ/HgABfx8AAX+/AwADHB0ABhwaAAccGQAIHBgACBwYAAgceAABfx8AAX8fAAF/HwABfx8AAX8fAAF/HwABf58EAAEcHwAGHBoABxwZAAgcGAAIHBgACBz4BgAFHBsABxwZAAccGQAIHBgACBz4BgACHB4ABBwcAAYcGgAIHBgACByYBwADHB0ABhwaAAYcGgAHHNnGAQA=")
            }])
          },
          Km = {
            treeMapleLarge1: {
              schematic: om.treeMapleLarge1,
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
              schematic: om.treeMapleLarge2,
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
              schematic: om.treeSpectralLarge1,
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
              schematic: om.treeSpectralLarge2,
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
              schematic: om.treePineLarge1,
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
              schematic: om.treePineLarge2,
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
              schematic: om.treeJungleLarge1,
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
              schematic: om.treeJungleLarge2,
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
              schematic: om.treePalmLarge1,
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
              schematic: om.treePalmLarge2,
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
              schematic: Ym.rockSnowLarge1,
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
              schematic: Ym.rockSnowLarge2,
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
              schematic: Ym.rockSnowLarge3,
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
              schematic: Ym.rockJungleLarge1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 4,
                localZ: 13,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 16,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 22,
                localY: 4,
                localZ: 9,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge2: {
              schematic: Ym.rockJungleLarge2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge3: {
              schematic: Ym.rockJungleLarge3,
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
              schematic: Ym.rockJungleLarge4,
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
              schematic: Ym.rockJungleLarge5,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            rockJungleLarge6: {
              schematic: Ym.rockJungleLarge6,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: []
            },
            ruinSnowSmall1: {
              schematic: jm.ruinSnowSmall1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 6,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 2,
                localZ: 6,
                mobTypeDistribution: new xm.i([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall2: {
              schematic: jm.ruinSnowSmall2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 9,
                localZ: 8,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 2,
                localY: 4,
                localZ: 8,
                mobTypeDistribution: new xm.i([{
                  value: "Frost Golem",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall3: {
              schematic: jm.ruinSnowSmall3,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 10,
                localY: 7,
                localZ: 5,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 2,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Frost Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinSnowSmall4: {
              schematic: jm.ruinSnowSmall4,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new xm.i([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium1: {
              schematic: jm.ruinSnowMedium1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 4,
                localZ: 21,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 6,
                localZ: 8,
                mobTypeDistribution: new xm.i([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowMedium2: {
              schematic: jm.ruinSnowMedium2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 6,
                localZ: 3,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 6,
                localZ: 13,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 15,
                localY: 2,
                localZ: 8,
                mobTypeDistribution: new xm.i([{
                  value: "Frost Zombie",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge1: {
              schematic: jm.ruinSnowLarge1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 21,
                localY: 20,
                localZ: 27,
                qualityDistribution: new xm.i([{
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 21,
                localY: 20,
                localZ: 14,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinSnowLarge2: {
              schematic: jm.ruinSnowLarge2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 27,
                localZ: 2,
                qualityDistribution: new xm.i([{
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 16,
                localY: 25,
                localZ: 9,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Knight",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall1: {
              schematic: jm.ruinStoneSmall1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 0,
                localZ: 4,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 6,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall2: {
              schematic: jm.ruinStoneSmall2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 1,
                localZ: 4,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 6,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall3: {
              schematic: jm.ruinStoneSmall3,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 0,
                localZ: 4,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 1,
                localZ: 4,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall4: {
              schematic: jm.ruinStoneSmall4,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 0,
                localZ: 1,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 1,
                localY: 2,
                localZ: 2,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall5: {
              schematic: jm.ruinStoneSmall5,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 7,
                localZ: 7,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 6,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 7,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneSmall6: {
              schematic: jm.ruinStoneSmall6,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 8,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 7,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 7,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium1: {
              schematic: jm.ruinStoneMedium1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 2,
                localZ: 5,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 6,
                localY: 9,
                localZ: 13,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium2: {
              schematic: jm.ruinStoneMedium2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 16,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 0,
                localZ: 9,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 7,
                localZ: 10,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium3: {
              schematic: jm.ruinStoneMedium3,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 5,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 6,
                localZ: 25,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium4: {
              schematic: jm.ruinStoneMedium4,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }])
              }, {
                localX: 3,
                localY: 1,
                localZ: 10,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 6,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 6,
                localZ: 19,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium5: {
              schematic: jm.ruinStoneMedium5,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 1,
                localZ: 4,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium6: {
              schematic: jm.ruinStoneMedium6,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 3,
                localZ: 20,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 12,
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 6,
                localZ: 9,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 13,
                localY: 1,
                localZ: 16,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium7: {
              schematic: jm.ruinStoneMedium7,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 18,
                localZ: 9,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 1,
                localZ: 5,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 9,
                localY: 1,
                localZ: 7,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 13,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium8: {
              schematic: jm.ruinStoneMedium8,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }])
              }, {
                localX: 6,
                localY: 14,
                localZ: 4,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 2,
                localZ: 2,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 1
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 3,
                localZ: 4,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium9: {
              schematic: jm.ruinStoneMedium9,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 11,
                localY: 2,
                localZ: 11,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 0,
                localZ: 1,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 2,
                localZ: 3,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 2,
                localZ: 9,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium10: {
              schematic: jm.ruinStoneMedium10,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 11,
                localZ: 13,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 23,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 19,
                localZ: 23,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 1
                }, {
                  value: Am.h.EPIC,
                  weight: 2
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 15,
                localZ: 23,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 2,
                localZ: 20,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 3,
                localZ: 2,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }]
            },
            ruinStoneMedium11: {
              schematic: jm.ruinStoneMedium11,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 2,
                localY: 11,
                localZ: 14,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 15,
                localZ: 14,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 3,
                localY: 16,
                localZ: 15,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 1,
                localZ: 14,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge1: {
              schematic: jm.ruinStoneLarge1,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 15,
                localY: 13,
                localZ: 11,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 6,
                localY: 22,
                localZ: 19,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 1
                }, {
                  value: Am.h.EPIC,
                  weight: 2
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 7,
                localY: 0,
                localZ: 18,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 1
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 8,
                localY: 22,
                localZ: 17,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 14,
                localY: 1,
                localZ: 8,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 16,
                localZ: 14,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge2: {
              schematic: jm.ruinStoneLarge2,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 5,
                localY: 13,
                localZ: 21,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 22,
                localZ: 22,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 23,
                localZ: 30,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 20,
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 1
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 11,
                localZ: 26,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 1
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 4,
                localY: 25,
                localZ: 26,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 9,
                localY: 16,
                localZ: 24,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 2,
                localZ: 26,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 17,
                localY: 7,
                localZ: 8,
                mobTypeDistribution: new xm.i([{
                  value: "Cave Golem",
                  weight: 1
                }])
              }]
            },
            ruinStoneLarge3: {
              schematic: jm.ruinStoneLarge3,
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
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 1
                }])
              }, {
                localX: 16,
                localY: 24,
                localZ: 31,
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 1
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 13,
                localZ: 5,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 4,
                localY: 15,
                localZ: 20,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 1,
                localZ: 22,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 32,
                localY: 2,
                localZ: 23,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 17,
                localY: 2,
                localZ: 13,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 2,
                localZ: 30,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Zombie",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 15,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 18,
                localY: 15,
                localZ: 25,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 24,
                localZ: 31,
                mobTypeDistribution: new xm.i([{
                  value: "Draugr Skeleton",
                  weight: 1
                }])
              }]
            },
            dungeonDraugrSmall1: {
              schematic: Im.dungeonDraugrSmall1,
              groundingPoints: "centre",
              groundingRadius: 4,
              clearingRadiusSquared: 0,
              undergroundYInterval: {
                im: -15,
                Dm: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 7,
                localY: 1,
                localZ: 1,
                qualityDistribution: new xm.i([{
                  value: Am.h.COMMON,
                  weight: 1
                }, {
                  value: Am.h.UNCOMMON,
                  weight: 2
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 5,
                localY: 1,
                localZ: 5,
                mobTypeDistribution: new xm.i([{
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
              schematic: Im.dungeonDraugrMedium1,
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
                im: -40,
                Dm: -97
              },
              yOffset: -2,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 1,
                localZ: 8,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 1,
                localZ: 18,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 13,
                localY: 1,
                localZ: 13,
                mobTypeDistribution: new xm.i([{
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
              schematic: Im.dungeonDraugrLarge1,
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
                im: -60,
                Dm: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 1,
                localY: 4,
                localZ: 30,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 1,
                qualityDistribution: new xm.i([{
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 4,
                localZ: 9,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }, {
                localX: 10,
                localY: 4,
                localZ: 38,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 2
                }, {
                  value: Am.h.EPIC,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 10,
                localY: 4,
                localZ: 9,
                mobTypeDistribution: new xm.i([{
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
                mobTypeDistribution: new xm.i([{
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
              schematic: Im.dungeonMagmaLarge1,
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
                im: -70,
                Dm: -95
              },
              yOffset: -4,
              transformationsEnabled: !0,
              chestLocations: [{
                localX: 6,
                localY: 6,
                localZ: 32,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 33,
                localY: 6,
                localZ: 7,
                qualityDistribution: new xm.i([{
                  value: Am.h.UNCOMMON,
                  weight: 1
                }, {
                  value: Am.h.RARE,
                  weight: 1
                }])
              }, {
                localX: 19,
                localY: 6,
                localZ: 20,
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 2
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }, {
                localX: 20,
                localY: 6,
                localZ: 18,
                qualityDistribution: new xm.i([{
                  value: Am.h.EPIC,
                  weight: 2
                }, {
                  value: Am.h.LEGENDARY,
                  weight: 1
                }])
              }],
              spawnerBlockLocations: [{
                localX: 12,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new xm.i([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 12,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new xm.i([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 12,
                mobTypeDistribution: new xm.i([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }, {
                localX: 27,
                localY: 6,
                localZ: 27,
                mobTypeDistribution: new xm.i([{
                  value: "Magma Golem",
                  weight: 1
                }])
              }]
            }
          },
          Qm = [{
            Am: "ruinStoneSmall1",
            frequency: .15
          }, {
            Am: "ruinStoneSmall2",
            frequency: .15
          }, {
            Am: "ruinStoneSmall3",
            frequency: .15
          }, {
            Am: "ruinStoneSmall4",
            frequency: .15
          }, {
            Am: "ruinStoneMedium1",
            frequency: .15
          }, {
            Am: "ruinStoneSmall5",
            frequency: .15
          }, {
            Am: "ruinStoneSmall6",
            frequency: .15
          }, {
            Am: "ruinStoneMedium2",
            frequency: .15
          }, {
            Am: "ruinStoneMedium3",
            frequency: .15
          }, {
            Am: "ruinStoneMedium4",
            frequency: .15
          }, {
            Am: "ruinStoneMedium5",
            frequency: .15
          }, {
            Am: "ruinStoneMedium6",
            frequency: .15
          }, {
            Am: "ruinStoneMedium7",
            frequency: .15
          }, {
            Am: "ruinStoneMedium8",
            frequency: .15
          }, {
            Am: "ruinStoneMedium9",
            frequency: .15
          }, {
            Am: "ruinStoneMedium10",
            frequency: .15
          }, {
            Am: "ruinStoneMedium11",
            frequency: .15
          }, {
            Am: "ruinStoneLarge1",
            frequency: .15
          }, {
            Am: "ruinStoneLarge2",
            frequency: .15
          }, {
            Am: "ruinStoneLarge3",
            frequency: .15
          }],
          nm = [{
            Am: "treeMapleLarge1",
            frequency: 1
          }, {
            Am: "treeMapleLarge2",
            frequency: 1.5
          }],
          Jm = {
            ruins: [{
              Am: "ruinStoneSmall1",
              frequency: .3
            }, {
              Am: "ruinStoneSmall2",
              frequency: .3
            }, {
              Am: "ruinStoneSmall3",
              frequency: .3
            }, {
              Am: "ruinStoneSmall4",
              frequency: .3
            }, {
              Am: "ruinStoneMedium1",
              frequency: .3
            }, {
              Am: "ruinStoneSmall5",
              frequency: .3
            }, {
              Am: "ruinStoneSmall6",
              frequency: .3
            }, {
              Am: "ruinStoneMedium2",
              frequency: .3
            }, {
              Am: "ruinStoneMedium3",
              frequency: .3
            }, {
              Am: "ruinStoneMedium4",
              frequency: .3
            }, {
              Am: "ruinStoneMedium5",
              frequency: .3
            }, {
              Am: "ruinStoneMedium6",
              frequency: .3
            }, {
              Am: "ruinStoneMedium7",
              frequency: .3
            }, {
              Am: "ruinStoneMedium8",
              frequency: .3
            }, {
              Am: "ruinStoneMedium9",
              frequency: .3
            }, {
              Am: "ruinStoneMedium10",
              frequency: .3
            }, {
              Am: "ruinStoneMedium11",
              frequency: .3
            }, {
              Am: "ruinStoneLarge1",
              frequency: .3
            }, {
              Am: "ruinStoneLarge2",
              frequency: .3
            }, {
              Am: "ruinStoneLarge3",
              frequency: .3
            }],
            trees: [{
              Am: "treeMapleLarge1",
              frequency: 2
            }, {
              Am: "treeMapleLarge2",
              frequency: 3
            }]
          },
          cm = {
            ruins: Jm.ruins,
            trees: [{
              Am: "treePineLarge1",
              frequency: 5
            }, {
              Am: "treePineLarge2",
              frequency: 5
            }]
          },
          zm = [{
            Am: "dungeonDraugrSmall1",
            frequency: 45
          }, {
            Am: "dungeonDraugrMedium1",
            frequency: 10
          }, {
            Am: "dungeonDraugrLarge1",
            frequency: 10
          }, {
            Am: "dungeonMagmaLarge1",
            frequency: 25
          }],
          Zm = Qm.map((mm => {
            let {
              Am: Tm
            } = mm;
            return Tm
          }));

        function km(mm) {
          for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
          return bm(mm, fm.flat().map((mm => {
            let {
              Am: Tm,
              frequency: fm
            } = mm;
            return {
              prefab: Tm,
              frequency: fm
            }
          })))
        }

        function bm(mm, Tm) {
          let fm = 0;
          for (const hm of Tm) fm += hm.frequency;
          if (fm > 100) throw new Error(`Total frequency of prefabs exceeds 100: ${fm}`);
          return {
            density: mm,
            frequencyParams: {
              noPrefabFrequency: 100 - fm,
              prefabFrequencies: Tm
            }
          }
        }
        class Sm {
          constructor(mm, Tm, fm, hm, Am) {
            let {
              oreGenerator: am
            } = Am, wm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            this.minDistanceFromOrigin = 0, this.offsettedHeight = -5, this.topsoilBlockType = void 0, this.lowsoilBlockType = void 0, this.topwaterBlockType = void 0, this.blockMetadata = void 0, this.MO = void 0, this.treeMinDist = 5, this.hasScatteredLakes = !1, this._heightmapSimplex = void 0, this.worldGenerator = void 0, this.oreGenerator = void 0, this.floraGenerator = void 0, this.maxCactusHeight = 4, this.grassChance = .0225, this.tallGrassChance = .0025, this.cornChance = 0, this.spectralGrassChance = 0, this.pineGrassChance = 0, this.pineFernChance = 0, this.jungleTallGrassChance = 0, this.catnipChance = 0, this.autumnFernChance = 0, this.maxFloraHeight = this.maxCactusHeight, this.flowerPatchDistApart = 35, this.defaultFlowerInsidePatchSpawnChance = .5, this.defaultFlowerPatchRadius = 3, this.poppyChance = 100, this.daisyChance = 100, this.pinkTulipChance = 100, this.cactusChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.bluebellChance = 0, this.alliumChance = 0, this.fallenMapleLeavesChance = 0, this.fallenCherryLeavesChance = 0, this.melonChance = 0, this.watermelonChance = 0, this.pumpkinChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cottonChance = 0, this.chiliPepperChance = 0, this.lavaChiliPepperChance = 0, this.shadowRoseChance = 0, this.fallenPineConeChance = 0, this.mapleTreeChance = 1, this.pineTreeChance = 0, this.plumTreeChance = 0, this.cedarTreeChance = 0, this.aspenTreeChance = 0, this.jungleTreeChance = 0, this.palmTreeChance = 0, this.autumnMapleTreeChance = 0, this.pearTreeChance = 0, this.cherryTreeChance = 0, this.spectralTreeChance = 0, this.mangoTreeChance = 0, this.autumnAspenTreeChance = 0, this.deadTreeChance = 0, this.fallenLogChance = 0, this.waterKept = 1, this.strataDepth = 0, this.maxSurfacePrefabRelief = null, this.key = "base", this.seed = void 0, this.tags = [], this.totalTreeChance = void 0, this.treeChances = void 0, this.prefabDataPerType = void 0, this.MO = mm, this.blockMetadata = Tm, this.seed = hm, this.topsoilBlockType = Tm["Grass Block"].id, this.lowsoilBlockType = Tm.Dirt.id, this.topwaterBlockType = Tm.Water.id, this.worldGenerator = fm, this.oreGenerator = am;
            const im = Math.ceil(fm.prefabSize / 2),
              Rm = {
                [Dm.n.SURFACE]: wm,
                [Dm.n.UNDERGROUND]: km(Dm.m.MEDIUM, zm)
              };
            this.prefabDataPerType = Object.fromEntries(Object.values(Dm.n).filter((mm => Number.isInteger(mm))).map((mm => Number(mm))).map((mm => {
              const Tm = Rm[mm];
              if (!Tm || 0 === Tm.frequencyParams.prefabFrequencies.length) return [mm, null];
              const {
                density: hm,
                frequencyParams: Am
              } = Tm;
              return [mm, {
                density: hm,
                distribution: new xm.i([...Am.noPrefabFrequency > 0 ? [{
                  weight: Am.noPrefabFrequency,
                  value: null
                }] : [], ...Am.prefabFrequencies.map((mm => {
                  let {
                    prefab: Tm,
                    frequency: hm
                  } = mm;
                  const Am = "string" === typeof Tm ? {
                      ...Km[Tm],
                      name: Tm
                    } : Tm,
                    am = Am.name;
                  if ("string" !== typeof Tm && Object.hasOwn(Km, am)) throw new Error(`Prefab definition "${am}" has a built-in prefab's name`);
                  const xm = Math.floor(Math.sqrt(Am.clearingRadiusSquared));
                  if (xm > im) throw new Error(`Prefab ${am} has clearing radius ${xm} which is greater than the world generator's prefab radius ${im}`);
                  if (Am.groundingRadius > fm.maxPrefabGroundingRadius) throw new Error(`Prefab ${am} has grounding radius ${Am.groundingRadius} which is greater than the world generator's max prefab grounding radius of ${fm.maxPrefabGroundingRadius}`);
                  if ("centre" !== Am.groundingPoints && 0 === Am.groundingPoints.length) throw new Error(`Prefab ${am} has no grounding points`);
                  const wm = Am.schematic.dimensions;
                  if (wm.x > fm.prefabSize || wm.y > fm.prefabSize || wm.z > fm.prefabSize) throw new Error(`Prefab ${am} has dimensions ${JSON.stringify(wm)} which are too large for the world generator's prefab size of ${fm.prefabSize}`);
                  return {
                    weight: hm,
                    value: {
                      ...Am,
                      dimensionX: wm.x,
                      dimensionY: wm.y,
                      dimensionZ: wm.z
                    }
                  }
                }))])
              }]
            })))
          }
          init() {
            this.floraGenerator = new wm(this.blockMetadata, this.MO, `${this.seed}flora`, this.grassChance, this.tallGrassChance, this.cornChance, this.spectralGrassChance, this.pineGrassChance, this.pineFernChance, this.jungleTallGrassChance, this.catnipChance, this.autumnFernChance, {
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
              treeType: Am.u.Maple,
              chance: this.mapleTreeChance
            }, {
              treeType: Am.u.Pine,
              chance: this.pineTreeChance
            }, {
              treeType: Am.u.Plum,
              chance: this.plumTreeChance
            }, {
              treeType: Am.u.Cedar,
              chance: this.cedarTreeChance
            }, {
              treeType: Am.u.Aspen,
              chance: this.aspenTreeChance
            }, {
              treeType: Am.u.Jungle,
              chance: this.jungleTreeChance
            }, {
              treeType: Am.u.Palm,
              chance: this.palmTreeChance
            }, {
              treeType: Am.u.AutumnMaple,
              chance: this.autumnMapleTreeChance
            }, {
              treeType: Am.u.Pear,
              chance: this.pearTreeChance
            }, {
              treeType: Am.u.Cherry,
              chance: this.cherryTreeChance
            }, {
              treeType: Am.u.Spectral,
              chance: this.spectralTreeChance
            }, {
              treeType: Am.u.Mango,
              chance: this.mangoTreeChance
            }, {
              treeType: Am.u.AutumnAspen,
              chance: this.autumnAspenTreeChance
            }, {
              treeType: Am.u.Dead,
              chance: this.deadTreeChance
            }, {
              treeType: Am.u.FallenLog,
              chance: this.fallenLogChance
            }], this.totalTreeChance = 0;
            for (const {
                chance: mm
              }
              of this.treeChances) this.totalTreeChance += mm
          }
          xzId(mm, Tm) {
            return `${mm}|${Tm}`
          }
          getHeightmapVal(mm, Tm) {
            return this.offsettedHeight + this._heightmapSimplex.getOctaves(mm, Tm)
          }
          carveGround(mm, Tm, fm) {
            return null
          }
          getTopsoilBlock(mm, Tm, fm) {
            return this.topsoilBlockType
          }
          getLowsoilBlockType(mm, Tm, fm, hm) {
            return this.lowsoilBlockType
          }
          getStrataBlock(mm, Tm, fm, hm) {
            return 0
          }
          getDryBedBlock(mm, Tm, fm) {
            return this.getTopsoilBlock(mm, Tm, fm)
          }
          getTotalTreeChance() {
            return this.totalTreeChance
          }
          hasPrefabs(mm, Tm) {
            const fm = this.prefabDataPerType[mm];
            return null !== fm && fm.density === Tm
          }
          canPlaceSurfacePrefab(mm, Tm) {
            return !0
          }
          allowsPrefab(mm, Tm, fm, hm, Am) {
            return !0
          }
          getRandomPrefab(mm, Tm, fm) {
            const hm = this.prefabDataPerType[Tm];
            return null === hm || hm.density !== fm ? null : hm.distribution.sample(mm)
          }
        }
        class em extends Sm {
          constructor(mm, Tm, fm, Am, am) {
            super(mm, Tm, fm, `${Am}Desert`, am, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null), this.key = "desert", this.grassChance = 0, this.tallGrassChance = 0, this.cactusChance = 6e-4, this.flowerPatchDistApart = 200, this.chiliPepperChance = 30, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.treeMinDist = null, this.topsoilBlockType = Tm.Sand.id, this.lowsoilBlockType = Tm.Sand.id, this._heightmapSimplex = new hm.j([{
              amplitude: 2,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${Am}DesertBiomeHeightMap`)
          }
        }
        class Nm extends em {
          constructor() {
            super(...arguments), this.key = "manyCactusDesert", this.cactusChance = .05
          }
        }
        class Gm extends em {
          constructor(mm, Tm, fm, am, xm) {
            super(mm, Tm, fm, am, xm, km(Dm.m.VERY_HIGH, [{
              Am: "treePalmLarge1",
              frequency: 45
            }, {
              Am: "treePalmLarge2",
              frequency: 45
            }])), this.key = "oasis", this.hasScatteredLakes = !0, this.maxPrefabDistFromLakeEdge = 18, this.tags.push(Am.b.OASIS), this._heightmapSimplex = new hm.j([{
              amplitude: 1,
              frequency: 1 / 90
            }, {
              amplitude: .5,
              frequency: 1 / 35
            }], `${am}OasisBiomeHeightMap`)
          }
          canPlaceSurfacePrefab(mm, Tm) {
            return !(this.worldGenerator.getDistToLakeEdge(mm, Tm, this.maxPrefabDistFromLakeEdge) > this.maxPrefabDistFromLakeEdge)
          }
        }
        class Xm extends em {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, `${hm}RedDesert`, Am), this.key = "redDesert", this.chiliPepperChance = 30, this.lavaChiliPepperChance = 30, this.topsoilBlockType = Tm["Red Sand"].id, this.lowsoilBlockType = Tm["Red Sand"].id
          }
        }
        class Pm extends Sm {
          constructor(mm, Tm, fm, am, xm) {
            super(mm, Tm, fm, `${am}Plains`, xm, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : km(Dm.m.MEDIUM, Qm, nm)), this.key = "plains", this.grassChance = .162, this.tallGrassChance = .016, this.flowerPatchDistApart = 20, this.forgetMeNotChance = 100, this.whiteTulipChance = 100, this.orangeTulipChance = 100, this.redTulipChance = 100, this.dandelionChance = 100, this.alliumChance = 100, this.watermelonChance = 20, this.cottonChance = 30, this.tags.push(Am.b.PLAINS), this.topsoilBlockType = Tm["Grass Block"].id, this.lowsoilBlockType = Tm.Dirt.id, this.treeMinDist = 75, this._heightmapSimplex = new hm.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${am}PlainsBiomeHeightMap`)
          }
        }
        class Hm extends Pm {
          constructor() {
            super(...arguments), this.key = "tallGrassPlains", this.grassChance = .06, this.tallGrassChance = .12
          }
        }
        class ym extends Pm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm, Am, km(Dm.m.MEDIUM, [{
              Am: "treeMapleLarge1",
              frequency: 6
            }, {
              Am: "treeMapleLarge2",
              frequency: 9
            }])), this.key = "meadowPlains", this.grassChance = .12, this.tallGrassChance = .24, this.cornChance = 25e-5, this.flowerPatchDistApart = 5
          }
        }
        class Cm extends Pm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm, Am, km(Dm.m.MEDIUM, nm)), this.key = "snowyPlains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 9e-4, this.tallGrassChance = 1e-4, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 10, this.cottonChance = 0, this.topsoilBlockType = Tm.Snow.id, this.topwaterBlockType = Tm.Ice.id
          }
        }
        class rm extends Sm {
          constructor(mm, Tm, fm, Am, am) {
            super(mm, Tm, fm, `${Am}Forest`, am, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : km(Dm.m.MEDIUM, Jm.ruins, Jm.trees)), this.key = "forest", this.mapleTreeChance = 15, this.aspenTreeChance = 1, this.flowerPatchDistApart = 28, this.redMushroomChance = 8, this.brownMushroomChance = 8, this.fatRedMushroomChance = 8, this.fatBrownMushroomChance = 8, this.melonChance = 30, this.topsoilBlockType = Tm["Grass Block"].id, this.lowsoilBlockType = Tm.Dirt.id, this.treeMinDist = 6, this._heightmapSimplex = new hm.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${Am}ForestBiomeHeightMap`)
          }
        }
        class sm extends rm {
          constructor() {
            super(...arguments), this.key = "plumForest", this.pumpkinChance = 30, this.melonChance = 0, this.aspenTreeChance = 0, this.plumTreeChance = 1
          }
        }
        class lm extends rm {
          constructor() {
            super(...arguments), this.key = "pearForest", this.melonChance = 30, this.aspenTreeChance = 0, this.pearTreeChance = 1
          }
        }
        class Mm extends rm {
          constructor(mm, Tm, fm, hm, am) {
            super(mm, Tm, fm, hm, am, km(Dm.m.MEDIUM, Jm.ruins)), this.key = "autumnForest", this.flowerPatchDistApart = 13, this.fallenMapleLeavesChance = 800, this.pumpkinChance = 30, this.melonChance = 0, this.autumnFernChance = .01, this.autumnMapleTreeChance = 15, this.autumnAspenTreeChance = 1, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.tags.push(Am.b.AUTUMN)
          }
        }
        class um extends rm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm, Am, km(Dm.m.HIGH, [{
              Am: "treeJungleLarge1",
              frequency: 20
            }, {
              Am: "treeJungleLarge2",
              frequency: 20
            }, {
              Am: "rockJungleLarge1",
              frequency: 8
            }, {
              Am: "rockJungleLarge2",
              frequency: 8
            }, {
              Am: "rockJungleLarge3",
              frequency: 8
            }, {
              Am: "rockJungleLarge4",
              frequency: 8
            }, {
              Am: "rockJungleLarge5",
              frequency: 8
            }, {
              Am: "rockJungleLarge6",
              frequency: 8
            }])), this.key = "jungleForest", this.minDistanceFromOrigin = 200, this.grassChance = .01, this.tallGrassChance = .02, this.jungleTallGrassChance = .04, this.catnipChance = .02, this.flowerPatchDistApart = 12, this.melonChance = 0, this.fatRedMushroomChance = 12, this.fatBrownMushroomChance = 12, this.aspenTreeChance = 0, this.mapleTreeChance = 0, this.jungleTreeChance = 10, this.palmTreeChance = 2, this.mangoTreeChance = 2, this.topsoilBlockType = Tm["Jungle Grass Block"].id
          }
        }
        class Bm extends rm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm, Am, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : km(Dm.m.MEDIUM, cm.ruins, cm.trees)), this.key = "pineForest", this.minDistanceFromOrigin = 200, this.grassChance = 0, this.tallGrassChance = 0, this.pineGrassChance = .02, this.pineFernChance = .01, this.flowerPatchDistApart = 15, this.melonChance = 0, this.fallenPineConeChance = 250, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.pineTreeChance = 15, this.cedarTreeChance = 1, this.cranberryChance = 1, this.topsoilBlockType = Tm["Pine Grass Block"].id
          }
        }
        class Lm extends Bm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm, Am), this.key = "snowyPineForest", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.brownMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.cranberryChance = 10, this.fallenPineConeChance = 5, this.pineGrassChance = .004, this.pineFernChance = .001, this.topsoilBlockType = Tm.Snow.id, this.topwaterBlockType = Tm.Ice.id
          }
        }
        class tm extends rm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, `${hm}Blue`, Am), this.key = "bluebellForest", this.bluebellChance = 10, this.melonChance = 0, this.flowerPatchDistApart = 12, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class Um extends rm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm, Am, km(Dm.m.MEDIUM, Jm.trees)), this.key = "cherryForest", this.mapleTreeChance = 1, this.aspenTreeChance = 1, this.cherryTreeChance = 15, this.flowerPatchDistApart = 12, this.defaultFlowerInsidePatchSpawnChance = .4, this.defaultFlowerPatchRadius = 10, this.fallenCherryLeavesChance = 500, this.melonChance = 0, this.poppyChance = 0, this.daisyChance = 50, this.pinkTulipChance = 150, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.fatBrownMushroomChance = 0, this.brownMushroomChance = 0
          }
        }
        class dm extends Sm {
          constructor(mm, Tm, fm, Am, am) {
            super(mm, Tm, fm, `${Am}RollingHills`, am), this.key = "rollingHills", this.riceChance = 30, this.topsoilBlockType = Tm["Grass Block"].id, this.treeMinDist = 25, this.offsettedHeight = 20, this._heightmapSimplex = new hm.j([{
              amplitude: 20,
              frequency: .005
            }, {
              amplitude: 4,
              frequency: 1 / 70
            }], `${Am}RollingHillsBiomeHeightMap`)
          }
        }
        class gm extends Sm {
          constructor(mm, Tm, fm, Am, am) {
            super(mm, Tm, fm, `${Am}SnowyMountains`, am), this.key = "snowyMountains", this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.ridgedNoiseAmplitude = void 0, this.ridgedNoiseOctave1 = void 0, this.ridgedNoiseOctave2 = void 0, this.nonRidgedNoise = void 0, this.treeMinDist = 50, this.offsettedHeight = 0, this.ridgedNoiseOctave1 = new hm.j([{
              amplitude: 80,
              frequency: .005
            }], `${Am}SnowyMountainsBiomeRidgedNoise`), this.ridgedNoiseOctave2 = new hm.j([{
              amplitude: 20,
              frequency: 1 / 120
            }], `${Am}SnowyMountainsBiomeRidgedNoiseOctave2`), this.nonRidgedNoise = new hm.j([{
              amplitude: 8,
              frequency: 1 / 120
            }], `${Am}SnowyMountainsBiomeNonRidgedNoise`), this.ridgedNoiseAmplitude = (0, hm.A)(this.ridgedNoiseOctave1) + (0, hm.A)(this.ridgedNoiseOctave2)
          }
          getHeightmapVal(mm, Tm) {
            const fm = this.ridgedNoiseAmplitude - Math.abs(this.ridgedNoiseOctave1.getOctaves(mm, Tm)) - Math.abs(this.ridgedNoiseOctave2.getOctaves(mm, Tm));
            return this.offsettedHeight + fm + this.nonRidgedNoise.getOctaves(mm, Tm)
          }
          getTopsoilBlock(mm, Tm, fm) {
            return Tm > 80 ? this.blockMetadata.Snow.id : Tm > 60 ? this.blockMetadata.Stone.id : this.blockMetadata["Grass Block"].id
          }
          getLowsoilBlockType(mm, Tm, fm, hm) {
            return Tm > 85 && Tm >= hm - 2 ? this.blockMetadata.Snow.id : Tm > 57 ? this.blockMetadata.Stone.id : Tm > 53 ? this.blockMetadata["Rocky Dirt"].id : this.blockMetadata.Dirt.id
          }
        }
        class Wm extends Pm {
          constructor(mm, Tm, fm, Am, am) {
            super(mm, Tm, fm, Am, am, km(Dm.m.HIGH, [{
              Am: "treeSpectralLarge1",
              frequency: 4
            }, {
              Am: "treeSpectralLarge2",
              frequency: 4
            }, {
              Am: "rockSnowLarge1",
              frequency: 18
            }, {
              Am: "rockSnowLarge2",
              frequency: 18
            }, {
              Am: "rockSnowLarge3",
              frequency: 18
            }, {
              Am: "ruinSnowSmall1",
              frequency: 4
            }, {
              Am: "ruinSnowSmall2",
              frequency: 4
            }, {
              Am: "ruinSnowSmall3",
              frequency: 4
            }, {
              Am: "ruinSnowSmall4",
              frequency: 4
            }, {
              Am: "ruinSnowMedium1",
              frequency: 4
            }, {
              Am: "ruinSnowMedium2",
              frequency: 4
            }, {
              Am: "ruinSnowLarge1",
              frequency: 3
            }, {
              Am: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsPlains", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.mapleTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .02, this.spectralTreeChance = 1, this.shadowRoseChance = 8, this.topsoilBlockType = Tm["Packed Snow"].id, this.lowsoilBlockType = Tm.Snow.id, this.topwaterBlockType = Tm.Ice.id, this._heightmapSimplex = new hm.j([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${Am}FrozenBadlandsPlainsHeightMap`)
          }
        }
        class Fm extends rm {
          constructor(mm, Tm, fm, Am, am) {
            super(mm, Tm, fm, Am, am, km(Dm.m.HIGH, [{
              Am: "treeSpectralLarge1",
              frequency: 8
            }, {
              Am: "treeSpectralLarge2",
              frequency: 8
            }, {
              Am: "rockSnowLarge1",
              frequency: 4
            }, {
              Am: "rockSnowLarge2",
              frequency: 4
            }, {
              Am: "rockSnowLarge3",
              frequency: 4
            }, {
              Am: "ruinSnowSmall1",
              frequency: 6
            }, {
              Am: "ruinSnowSmall2",
              frequency: 6
            }, {
              Am: "ruinSnowSmall3",
              frequency: 6
            }, {
              Am: "ruinSnowSmall4",
              frequency: 6
            }, {
              Am: "ruinSnowMedium1",
              frequency: 4
            }, {
              Am: "ruinSnowMedium2",
              frequency: 4
            }, {
              Am: "ruinSnowLarge1",
              frequency: 3
            }, {
              Am: "ruinSnowLarge2",
              frequency: 3
            }])), this.key = "frozenBadlandsForest", this.minDistanceFromOrigin = 400, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.grassChance = 0, this.tallGrassChance = 0, this.forgetMeNotChance = 0, this.whiteTulipChance = 0, this.orangeTulipChance = 0, this.redTulipChance = 0, this.dandelionChance = 0, this.alliumChance = 0, this.watermelonChance = 0, this.riceChance = 0, this.cranberryChance = 0, this.cottonChance = 0, this.melonChance = 0, this.redMushroomChance = 0, this.fatRedMushroomChance = 0, this.brownMushroomChance = 0, this.fatBrownMushroomChance = 0, this.mapleTreeChance = 0, this.aspenTreeChance = 0, this.flowerPatchDistApart = 35, this.spectralGrassChance = .08, this.spectralTreeChance = 8, this.shadowRoseChance = 8, this.topsoilBlockType = Tm["Packed Snow"].id, this.lowsoilBlockType = Tm.Snow.id, this.topwaterBlockType = Tm.Ice.id, this.treeMinDist = 7, this._heightmapSimplex = new hm.j([{
              amplitude: 3,
              frequency: 1 / 70
            }, {
              amplitude: 1,
              frequency: 1 / 30
            }], `${Am}FrozenBadlandsForestHeightMap`)
          }
        }
        class mT extends Sm {
          constructor(mm, Tm, fm, am, xm, wm) {
            super(mm, Tm, fm, `${am}Custom_${wm.Gm}_${wm.Xm}`, xm), this.key = "custom", this.grassChance = 0, this.tallGrassChance = 0, this.mapleTreeChance = 0, this.poppyChance = 0, this.daisyChance = 0, this.pinkTulipChance = 0, this.flowerPatchDistApart = null, this.treeMinDist = null, this.topsoilBlockType = (0, Am.B)(wm.Gm, Tm), this.lowsoilBlockType = (0, Am.B)(wm.Xm, Tm), this._heightmapSimplex = new hm.j([{
              amplitude: 4,
              frequency: 1 / 70
            }, {
              amplitude: 2,
              frequency: 1 / 30
            }], `${am}CustomBiomeHeightMap`)
          }
        }
      },
      39880: (mm, Tm, fm) => {
        fm.d(Tm, {
          c: () => Rm,
          d: () => Ym,
          e: () => Om,
          f: () => Em
        });
        var hm = fm(39828),
          Am = fm(39812),
          am = fm(39802),
          xm = fm(653),
          wm = fm(39830),
          Dm = fm(4184),
          im = fm(39875);
        class Rm {
          constructor(mm, Tm, fm, Am, xm, Dm) {
            this.biomePointGen = void 0, this.biomeOffsetSimplex = void 0, this.biomeOffsetBound = void 0, this.veryHighSurfacePrefabCells = new WeakMap, this.baseBiome = void 0, this.biomesTotalFrequency = void 0, this.Sm = void 0, this.anyStrata = void 0, this.biomeFrequencies = void 0, this.seed = void 0, this.blockMetadata = void 0, this.MO = void 0, this.mostRecentlyAccessedPtForBiome = [0, 0], this.mostRecentlyAccessedBiome = void 0, this.biomesByPoint = new Map, this.mostRecentlyAccessedModifierPt = [0, 0], this.mostRecentlyAccessedModifier = void 0, this.lastBiomeOffsetAtX = NaN, this.lastBiomeOffsetAtZ = NaN, this.lastBiomeOffsets = [0, 0], this.lastScatteredLakeCellX = NaN, this.lastScatteredLakeCellZ = NaN, this.lastScatteredLakeCellResult = !1, this.seed = fm, this.blockMetadata = xm, this.MO = Am, this.biomePointGen = new wm.d("biome", 150, !1, !0, fm, 3, Am), this.biomeOffsetSimplex = new am.j([{
              amplitude: 1,
              frequency: .2
            }, {
              amplitude: 5,
              frequency: 1 / 70
            }], `${fm}BiomeOffsetSimplex`), this.biomeOffsetBound = Math.ceil((0, am.A)(this.biomeOffsetSimplex)), this.baseBiome = new hm.h(Am, xm, mm, fm, {
              oreGenerator: Tm
            }), this.baseBiome.init(), this.Sm = Dm, this.anyStrata = Dm.some((mm => {
              let {
                biome: Tm
              } = mm;
              return Tm.strataDepth > 0
            })), this.biomesTotalFrequency = 0, this.biomeFrequencies = new Array(this.Sm.length);
            for (let hm = 0; hm < this.Sm.length; hm++) {
              const mm = this.Sm[hm],
                {
                  biome: Tm,
                  frequency: fm,
                  altBiome: Am
                } = mm;
              if (this.biomeFrequencies[hm] = fm, null !== Am) {
                if (Am.init(), Am.minDistanceFromOrigin > 0) throw new Error(`Alt Biomes cannot have non-zero minDistanceFromOrigin: biomeId = ${hm}`);
                let mm = !1;
                for (let Tm = 0; Tm < this.Sm.length; Tm++)
                  if (this.Sm[Tm].biome === Am) {
                    mm = !0;
                    break
                  } if (!mm) throw new Error(`Alt Biome not found in list of biomes: biomeId = ${hm}`)
              } else if (Tm.minDistanceFromOrigin > 0) throw new Error(`Biome has non-zero minDistanceFromOrigin, but no altBiome: biomeId = ${hm}`);
              this.biomesTotalFrequency += fm, Tm.init()
            }
          }
          generate(mm, Tm) {
            const [fm, hm] = this.getBiomeOffsets(mm, Tm), Am = this.biomePointGen.getKClosestPointsWithWeights(mm + fm, Tm + hm, 60), am = [];
            for (let xm = 0; xm < Am.length; xm++) {
              const mm = Am[xm],
                {
                  biome: Tm,
                  biomeId: fm
                } = this.getBiomeForBiomePoint(mm.pt),
                hm = {
                  weight: mm.weight,
                  biome: Tm,
                  biomeId: fm,
                  biomeModifiers: null
                };
              0 === xm && (hm.biomeModifiers = this.getBiomeModifiersForBiomePoint(mm.pt)), am.push(hm)
            }
            return am
          }
          getBiome(mm, Tm) {
            const [fm, hm] = this.getBiomeOffsets(mm, Tm), Am = this.biomePointGen.getClosestPoint(mm + fm, Tm + hm);
            return this.getBiomeForBiomePoint(Am)
          }
          regionMayHaveScatteredLakes(mm, Tm) {
            const fm = this.biomePointGen.gridSize;
            if (mm >= this.lastScatteredLakeCellX * fm + this.biomeOffsetBound && mm < (this.lastScatteredLakeCellX + 1) * fm - this.biomeOffsetBound && Tm >= this.lastScatteredLakeCellZ * fm + this.biomeOffsetBound && Tm < (this.lastScatteredLakeCellZ + 1) * fm - this.biomeOffsetBound) return this.lastScatteredLakeCellResult;
            const [hm, Am] = this.getBiomeOffsets(mm, Tm), am = mm + hm, xm = Tm + Am, wm = this.biomePointGen.getCellCoordFromGlobalCoord(am, xm), Dm = wm[0], im = wm[1];
            if (Dm === this.lastScatteredLakeCellX && im === this.lastScatteredLakeCellZ) return this.lastScatteredLakeCellResult;
            let Rm = !1;
            for (const pm of this.biomePointGen.getPointsAroundPoint(am, xm))
              if (this.getBiomeForBiomePoint(pm).biome.hasScatteredLakes) {
                Rm = !0;
                break
              } return this.lastScatteredLakeCellX = Dm, this.lastScatteredLakeCellZ = im, this.lastScatteredLakeCellResult = Rm, Rm
          }
          regionMayHaveVeryHighSurfacePrefabs(mm, Tm, fm, hm) {
            const am = this.biomePointGen.gridSize,
              xm = Math.floor((mm - this.biomeOffsetBound) / am),
              wm = Math.floor((Tm - this.biomeOffsetBound) / am),
              Dm = Math.floor((fm + this.biomeOffsetBound) / am),
              im = Math.floor((hm + this.biomeOffsetBound) / am);
            for (let Rm = xm; Rm <= Dm; Rm++)
              for (let mm = wm; mm <= im; mm++) {
                const Tm = this.biomePointGen.getPointsAroundPoint(Rm * am, mm * am);
                let fm = this.veryHighSurfacePrefabCells.get(Tm);
                if (void 0 === fm) {
                  fm = !1;
                  for (const mm of Tm)
                    if (this.getBiomeForBiomePoint(mm).biome.hasPrefabs(Am.n.SURFACE, Am.m.VERY_HIGH)) {
                      fm = !0;
                      break
                    } this.veryHighSurfacePrefabCells.set(Tm, fm)
                }
                if (fm) return !0
              }
            return !1
          }
          getBiomeOffsets(mm, Tm) {
            if (mm === this.lastBiomeOffsetAtX && Tm === this.lastBiomeOffsetAtZ) return this.lastBiomeOffsets;
            const fm = Math.floor(this.biomeOffsetSimplex.getOctaves(mm, Tm)),
              hm = Math.floor(this.biomeOffsetSimplex.getOctaves(mm + 500, Tm + 860));
            return this.lastBiomeOffsetAtX = mm, this.lastBiomeOffsetAtZ = Tm, this.lastBiomeOffsets[0] = fm, this.lastBiomeOffsets[1] = hm, this.lastBiomeOffsets
          }
          getBiomeForBiomePoint(mm) {
            if (this.mostRecentlyAccessedBiome && mm[0] === this.mostRecentlyAccessedPtForBiome[0] && mm[1] === this.mostRecentlyAccessedPtForBiome[1]) return this.mostRecentlyAccessedBiome;
            const Tm = (0, im.e)(mm[0], mm[1]);
            let fm = this.biomesByPoint.get(Tm);
            return void 0 === fm && (fm = this.pickBiomeForBiomePoint(mm), this.biomesByPoint.size >= 1024 && this.biomesByPoint.clear(), this.biomesByPoint.set(Tm, fm)), this.mostRecentlyAccessedBiome = fm, this.mostRecentlyAccessedPtForBiome[0] = mm[0], this.mostRecentlyAccessedPtForBiome[1] = mm[1], fm
          }
          pickBiomeForBiomePoint(mm) {
            const Tm = Math.max(Math.abs(mm[0]), Math.abs(mm[1])),
              fm = new Dm.k(`${mm[0]}|${mm[1]}|${this.seed}`);
            let hm = om(this.biomeFrequencies, this.biomesTotalFrequency, fm),
              Am = this.Sm[hm].biome;
            if (Tm < Am.minDistanceFromOrigin) {
              Am = this.Sm[hm].altBiome;
              for (let mm = 0; mm < this.Sm.length; mm++)
                if (this.Sm[mm].biome === Am) {
                  hm = mm;
                  break
                }
            }
            return {
              biome: Am,
              biomeId: hm
            }
          }
          getBiomeModifiersForBiomePoint(mm) {
            if (this.mostRecentlyAccessedModifier && mm[0] === this.mostRecentlyAccessedModifierPt[0] && mm[1] === this.mostRecentlyAccessedModifierPt[1]) return this.mostRecentlyAccessedModifier;
            const {
              biomeId: Tm
            } = this.getBiomeForBiomePoint(mm), {
              Pm: fm,
              stoneFrequencies: hm,
              stonesTotalFrequency: Am
            } = this.Sm[Tm], am = {
              stoneTypeId: fm[om(hm, Am, new Dm.k(`${mm[0]}|${mm[1]}|${this.seed}Modifiers`))].stoneId
            };
            return this.mostRecentlyAccessedModifier = am, this.mostRecentlyAccessedModifierPt[0] = mm[0], this.mostRecentlyAccessedModifierPt[1] = mm[1], am
          }
          getBiomeInfoForChunkFill(mm, Tm, fm) {
            const hm = {
              biomeIds: new am.f(this.MO, [mm, Tm]),
              stoneTypeIds: new am.f(this.MO, [mm, Tm])
            };
            for (let Am = mm; Am < mm + this.MO; Am++)
              for (let mm = Tm; mm < Tm + this.MO; mm++) {
                const Tm = fm.getOrGenerate(Am, mm)[0];
                hm.biomeIds.set(Am, mm, Tm.biomeId), hm.stoneTypeIds.set(Am, mm, Tm.biomeModifiers.stoneTypeId)
              }
            return hm
          }
          getBiomeFromId(mm) {
            return this.Sm[mm].biome
          }
        }

        function pm(mm) {
          let Tm = 0;
          const fm = [];
          for (const hm of mm) Tm += hm.frequency, fm.push(hm.frequency);
          return {
            Pm: mm,
            stoneFrequencies: fm,
            stonesTotalFrequency: Tm
          }
        }

        function Em(mm) {
          return pm(function(mm) {
            return [{
              stoneId: mm.Stone.id,
              frequency: 100
            }, {
              stoneId: mm.Andesite.id,
              frequency: 4
            }, {
              stoneId: mm.Diorite.id,
              frequency: 2
            }, {
              stoneId: mm.Granite.id,
              frequency: 1
            }]
          }(mm))
        }

        function om(mm, Tm, fm) {
          const hm = fm.next() * Tm;
          let Am = 0,
            am = 0;
          for (; Am <= hm;) Am += mm[am], am++;
          return am - 1
        }

        function Om(mm) {
          let {
            MO: Tm,
            blockMetadata: fm,
            worldGenerator: Am,
            seed: am,
            biomeOpts: xm
          } = mm;
          const wm = new hm.t(Tm, fm, Am, am, xm),
            Dm = new hm.F(Tm, fm, Am, am, xm),
            im = new hm.K(Tm, fm, Am, am, xm),
            Rm = new hm.W(Tm, fm, Am, am, xm),
            pm = new hm.S(Tm, fm, Am, am, xm),
            om = new hm.v(Tm, fm, Am, am, xm),
            Om = new hm.T(Tm, fm, Am, am, xm),
            Ym = new hm.M(Tm, fm, Am, am, xm),
            qm = new hm.Q(Tm, fm, Am, am, xm),
            jm = new hm.eb(Tm, fm, Am, am, xm),
            Vm = new hm.D(Tm, fm, Am, am, xm),
            Im = new hm.e(Tm, fm, Am, am, xm),
            Km = new hm.Z(Tm, fm, Am, am, xm),
            Qm = new hm.bb(Tm, fm, Am, am, xm),
            nm = new hm.i(Tm, fm, Am, am, xm),
            Jm = new hm.m(Tm, fm, Am, am, xm),
            cm = new hm.fb(Tm, fm, Am, am, xm),
            zm = new hm.ib(Tm, fm, Am, am, xm),
            Zm = new hm.J(Tm, fm, Am, am, xm),
            km = new hm.C(Tm, fm, Am, am, xm),
            bm = new hm.z(Tm, fm, Am, am, xm),
            Sm = Em(fm);
          return [{
            biome: Vm,
            frequency: 2,
            altBiome: om
          }, {
            biome: wm,
            frequency: 23,
            altBiome: null
          }, {
            biome: im,
            frequency: 8,
            altBiome: null
          }, {
            biome: km,
            frequency: 2,
            altBiome: pm
          }, {
            biome: Dm,
            frequency: 1,
            altBiome: null
          }, {
            biome: Rm,
            frequency: 4,
            altBiome: null
          }, {
            biome: Vm,
            frequency: 6,
            altBiome: om
          }, {
            biome: pm,
            frequency: 62,
            altBiome: null
          }, {
            biome: km,
            frequency: 2,
            altBiome: pm
          }, {
            biome: Zm,
            frequency: 4,
            altBiome: null
          }, {
            biome: zm,
            frequency: 2,
            altBiome: null
          }, {
            biome: cm,
            frequency: 4,
            altBiome: null
          }, {
            biome: om,
            frequency: 16,
            altBiome: null
          }, {
            biome: Jm,
            frequency: 4,
            altBiome: null
          }, {
            biome: Ym,
            frequency: 6,
            altBiome: null
          }, {
            biome: Im,
            frequency: 6,
            altBiome: null
          }, {
            biome: Om,
            frequency: 24,
            altBiome: null
          }, {
            biome: bm,
            frequency: 2,
            altBiome: om
          }, {
            biome: Jm,
            frequency: 2,
            altBiome: null
          }, {
            biome: Vm,
            frequency: 4,
            altBiome: om
          }, {
            biome: qm,
            frequency: 12,
            altBiome: om
          }, {
            biome: bm,
            frequency: 2,
            altBiome: om
          }, {
            biome: jm,
            frequency: 2,
            altBiome: om
          }, {
            biome: Km,
            frequency: 32,
            altBiome: null
          }, {
            biome: Qm,
            frequency: 16,
            altBiome: null
          }, {
            biome: nm,
            frequency: 4,
            altBiome: null
          }].map((mm => ({
            ...mm,
            ...Sm
          })))
        }

        function Ym(mm, Tm) {
          let {
            MO: fm,
            blockMetadata: Am,
            worldGenerator: am,
            seed: wm,
            biomeOpts: Dm
          } = Tm;
          if (0 === mm.length) throw new Error("buildCustomBiomes requires at least one custom biome");
          return mm.map((mm => {
            const Tm = new hm.p(fm, Am, am, wm, Dm, mm),
              im = mm.Pm.map((mm => ({
                stoneId: (0, xm.B)(mm.blockName, Am),
                frequency: mm.frequency
              })));
            return {
              biome: Tm,
              frequency: mm.frequency,
              altBiome: null,
              ...pm(im)
            }
          }))
        }
      },
      39892: (mm, Tm, fm) => {
        fm.d(Tm, {
          d: () => Ym
        });
        var hm = fm(39802),
          Am = fm(653),
          am = fm(39812),
          xm = fm(39805),
          wm = fm(4184);
        class Dm {
          constructor(mm, Tm, fm, hm) {
            this.MO = mm, this.pointsGenerator = Tm, this.seed = hm, this.tempChunkCoord = [0, 0], this.chunkSearchRadius = void 0, this.chunkSearchRadius = Math.floor(.5 * fm / this.MO) + 1
          }
          getChunkCoordFromGlobalCoord(mm, Tm) {
            return this.tempChunkCoord[0] = Math.floor(mm / this.MO), this.tempChunkCoord[1] = Math.floor(Tm / this.MO), this.tempChunkCoord
          }
          getSurroundingFeatures(mm, Tm) {
            const fm = this.getChunkCoordFromGlobalCoord(mm, Tm),
              hm = [];
            for (let Am = fm[0] - this.chunkSearchRadius; Am <= fm[0] + this.chunkSearchRadius; Am++)
              for (let mm = fm[1] - this.chunkSearchRadius; mm <= fm[1] + this.chunkSearchRadius; mm++) this.pointsGenerator.isPoint(Am, mm) && hm.push(this.getRandomPointInChunk(Am, mm));
            return hm
          }
          getRandomPointInChunk(mm, Tm) {
            const fm = mm * this.MO,
              hm = Tm * this.MO,
              Am = new wm.k(`${mm}|${Tm}|${this.seed}`);
            return [fm + Math.floor(Am.next() * this.MO), hm + Math.floor(Am.next() * this.MO)]
          }
        }
        var im = fm(39830),
          Rm = fm(39875);
        class pm {
          constructor(mm, Tm, fm, hm) {
            this.numCaveTypes = mm, this.caveTypeToBlockIds = Tm, this.caveTypePrioritization = fm, this.MO = hm
          }
        }
        class Em extends pm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm), this.data = Am
          }
          getOrGenerate(mm, Tm, fm, hm) {
            return this.data.getOrGenerate(mm, Tm, fm, hm)
          }
          viewJustInnerChunk() {
            return new om(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.MO, this.data.viewJustInnerChunk())
          }
        }
        class om extends pm {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, fm, hm), this.data = Am
          }
          getOrGenerate(mm, Tm, fm, hm) {
            return this.data.get(mm, Tm, fm, hm)
          }
        }

        function Om(mm) {
          const Tm = mm.high - mm.low;
          return {
            low: mm.low,
            high: mm.high,
            midpoint: (mm.low + mm.high) / 2,
            width: Tm,
            halfWidth: Tm / 2
          }
        }
        class Ym {
          constructor(mm, Tm, fm, hm) {
            this.MO = Tm, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new Im(mm, Tm, fm, hm)
          }
          static isInCave(mm, Tm, fm, hm) {
            for (let Am = 0; Am < hm.numCaveTypes; Am++) {
              const xm = hm.getOrGenerate(mm, fm, Am, am.d.FloorY),
                wm = hm.getOrGenerate(mm, fm, Am, am.d.CeilingY);
              if (xm <= Tm && Tm <= wm) return !0
            }
            return !1
          }
          static addCavesToChunk(mm, Tm, fm, hm, Am, Dm) {
            const im = new wm.k(`caveBlocks${Tm}|${fm}|${hm}`);
            for (let wm = Tm; wm < Tm + Dm.MO; wm++)
              for (let Rm = hm; Rm < hm + Dm.MO; Rm++) {
                const pm = Am.get(wm, Rm, am.g.GroundHeight);
                for (const Am of Dm.caveTypePrioritization) {
                  const Em = Dm.getOrGenerate(wm, Rm, Am, am.d.FloorY);
                  if (Em === xm.o) continue;
                  const om = Dm.getOrGenerate(wm, Rm, Am, am.d.CeilingY),
                    Om = Math.min(om + 1, fm + Dm.MO, pm + 1),
                    Ym = Dm.caveTypeToBlockIds[Am];
                  for (let Am = Math.max(Em, fm); Am < Om; Am++) {
                    const am = "number" === typeof Ym ? Ym : Ym.sample(im);
                    mm.set(wm - Tm, Am - fm, Rm - hm, am)
                  }
                }
              }
          }
          getCaveHeightmapVals(mm, Tm, fm) {
            const Am = [mm, Tm],
              xm = new qm(this.caveMetadataForChunkCache, fm, this.MO),
              wm = this.caveMetadataForChunkCache.numCaveTypes,
              Dm = this.caveMetadataForChunkCache.caveTypeToBlockId,
              im = this.caveMetadataForChunkCache.caveTypePrioritization,
              Rm = hm.b.create(this.MO, Am, wm, am.d.NumFields, xm);
            return new Em(wm, Dm, im, this.MO, Rm)
          }
        }
        class qm {
          constructor(mm, Tm, fm) {
            if (this.caveMetadataForChunkCache = mm, this.heightmapVals = Tm, this.caveGeneratorsPerChunk = [], fm !== Am.x) throw new Error(`Cave generation is not supported for chunk sizes other than ${Am.x}`)
          }
          generateAndSet(mm, Tm, fm) {
            const hm = (0, Am.M)(mm),
              am = (0, Am.M)(Tm);
            this.getOrCreateCaveGeneratorForChunk(hm, am).generateAndSet(mm, Tm, fm)
          }
          getOrCreateCaveGeneratorForChunk(mm, Tm) {
            return void 0 === this.caveGeneratorsPerChunk[mm] && (this.caveGeneratorsPerChunk[mm] = []), void 0 === this.caveGeneratorsPerChunk[mm][Tm] && (this.caveGeneratorsPerChunk[mm][Tm] = this.caveMetadataForChunkCache.getOrCreateCaveGeneratorForChunk(mm, Tm, this.heightmapVals)), this.caveGeneratorsPerChunk[mm][Tm]
          }
        }
        class jm {
          constructor(mm, Tm, fm, hm, Am, am) {
            this.heightmapVals = mm, this.spaghettiCaveMetadataForChunk = Tm, this.pitCaveMetadataForChunk = fm, this.ravineCaveMetadataForChunk = hm, this.sphereCaveMetadataForChunk = Am, this.numCaveTypes = am
          }
          generateAndSet(mm, Tm, fm) {
            this.setDefaultCaves(mm, Tm, fm), this.generateAndSetSpaghettiCaves(mm, Tm, fm), this.generateAndSetPitCaves(mm, Tm, fm), this.generateAndSetRavineCaves(mm, Tm, fm), this.generateAndSetSphereCaves(mm, Tm, fm), this.removeCavesNearWater(mm, Tm, fm)
          }
          setDefaultCaves(mm, Tm, fm) {
            for (let hm = 0; hm < this.numCaveTypes; hm++) fm.set(mm, Tm, hm, am.d.FloorY, xm.o), fm.set(mm, Tm, hm, am.d.CeilingY, xm.o)
          }
          generateAndSetSpaghettiCaves(mm, Tm, fm) {
            for (const hm of this.spaghettiCaveMetadataForChunk) {
              const Am = hm.caveEdgeNoiseGenerator.getOctaves(mm, Tm);
              if (Am >= jm.SPAGHETTI_CAVE_EDGE_CUTOFF) continue;
              const wm = hm.caveHeightNoiseGenerator.getOctaves(mm, Tm);
              if (wm === xm.b) continue;
              if (!(hm.caveHeightThreshold.low < wm && wm < hm.caveHeightThreshold.high)) continue;
              let Dm;
              {
                let mm = 1 - Math.abs(wm - hm.caveHeightThreshold.midpoint) / hm.caveHeightThreshold.halfWidth;
                mm = Math.min(hm.caveHeightPercentageUpperBound, mm), Dm = hm.caveHeightMax * mm
              }
              Am > 0 && (Dm *= (jm.SPAGHETTI_CAVE_EDGE_CUTOFF - Am) / jm.SPAGHETTI_CAVE_EDGE_CUTOFF);
              const im = hm.caveXZPerturbNoiseGenerator.getOctaves(mm, Tm),
                Rm = hm.caveXZPerturbNoiseGenerator.getOctaves(mm + 980, Tm - 370),
                pm = hm.caveYPerturbNoiseGenerator.getOctaves(mm + im, Tm + Rm),
                Em = Math.floor(hm.caveCentreY + pm - Dm);
              let om = Math.floor(hm.caveCentreY + pm + Dm);
              om + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) && om++, fm.set(mm, Tm, hm.caveType, am.d.FloorY, Em), fm.set(mm, Tm, hm.caveType, am.d.CeilingY, om)
            }
          }
          generateAndSetPitCaves(mm, Tm, fm) {
            for (const hm of this.pitCaveMetadataForChunk) {
              const Am = hm.pitMinX,
                xm = hm.pitMaxX,
                wm = hm.pitMinZ,
                Dm = hm.pitMaxZ;
              if (mm < hm.reachMinX || mm > hm.reachMaxX || Tm < hm.reachMinZ || Tm > hm.reachMaxZ) continue;
              const im = mm + hm.pitXZPerturbNoiseGenerator.getOctaves(mm, Tm),
                Rm = Tm + hm.pitXZPerturbNoiseGenerator.getOctaves(mm + 430, Tm - 330);
              if (im < Am || im > xm || Rm < wm || Rm > Dm) continue;
              const pm = null === hm.pitHeightPerturbNoiseGenerator,
                Em = hm.pitFloorYPerturbNoiseGenerator.getOctaves(mm, Tm),
                om = pm ? 0 : hm.pitHeightPerturbNoiseGenerator.getOctaves(mm, Tm);
              let Om = hm.pitFloorY + Em,
                Ym = hm.pitFloorY + hm.pitHeight + om;
              const qm = 4,
                jm = Math.min(im - Am, xm - im),
                Vm = Math.min(Rm - wm, Dm - Rm),
                Im = Math.min(jm, Vm);
              if (Im < qm) {
                const fm = 1 - Im / qm;
                Om += (5 + hm.pitMidpointYPerturbNoiseGenerator.getOctaves(mm, Tm)) * fm, pm || (Ym -= (Ym - Om) * fm)
              }
              Om = Math.floor(Om), Ym = Math.floor(Ym), (pm || Ym + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight)) && Ym++;
              let Km = hm.caveType;
              null !== hm.wallType && (jm <= .9 || Vm <= .9) ? Km = hm.wallType : hm.pitCeilingThickness > 0 && (Ym -= hm.pitCeilingThickness, fm.set(mm, Tm, hm.ceilingType, am.d.FloorY, Ym), fm.set(mm, Tm, hm.ceilingType, am.d.CeilingY, Ym + hm.pitCeilingThickness)), fm.set(mm, Tm, Km, am.d.FloorY, Om), fm.set(mm, Tm, Km, am.d.CeilingY, Ym)
            }
          }
          generateAndSetRavineCaves(mm, Tm, fm) {
            for (const Am of this.ravineCaveMetadataForChunk) {
              const xm = Am.ravineCentre,
                wm = Am.ravineWidth,
                Dm = Am.ravineLength,
                im = mm - xm[0],
                Rm = Tm - xm[1];
              if (im * im + Rm * Rm > Am.reachDistanceSquared) continue;
              if (Math.abs(im * Am.axisNormalX + Rm * Am.axisNormalZ) > Am.reachFromAxis) continue;
              const pm = mm + Am.ravineXZPerturbNoiseGenerator.getOctaves(mm, Tm),
                Em = Tm + Am.ravineXZPerturbNoiseGenerator.getOctaves(mm + 430, Tm - 330),
                om = (0, hm.I)(xm, pm, Em);
              if (om > Dm) continue;
              const Om = [pm, Em],
                Ym = xm,
                qm = [xm[0] + Am.ravineDirection[0], xm[1] + Am.ravineDirection[1]],
                jm = (0, hm.t)(Om, Ym, qm),
                Vm = wm * (1 - om / Dm);
              if (jm > Vm) continue;
              const Im = Am.ravineYPerturbNoiseGenerator.getOctaves(mm, Tm);
              let Km = Am.ravineFloorY + Im,
                Qm = Am.ravineFloorY + Am.ravineHeight + Im;
              const nm = 3,
                Jm = Vm - jm;
              if (Jm < nm) {
                const mm = 1 - Jm / nm;
                Km += Am.ravineHeight * mm
              }
              Km = Math.floor(Km), Qm = Math.floor(Qm), Qm + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) && Qm++, fm.set(mm, Tm, Am.caveType, am.d.FloorY, Km), fm.set(mm, Tm, Am.caveType, am.d.CeilingY, Qm)
            }
          }
          generateAndSetSphereCaves(mm, Tm, fm) {
            for (const hm of this.sphereCaveMetadataForChunk) {
              const Am = mm - hm.sphereCentreX,
                xm = Tm - hm.sphereCentreZ;
              if (Am * Am + xm * xm > hm.reachDistanceSquared) continue;
              const wm = mm + hm.sphereXZPerturbNoiseGenerator.getOctaves(mm, Tm),
                Dm = Tm + hm.sphereXZPerturbNoiseGenerator.getOctaves(mm + 430, Tm - 330),
                im = hm.sphereCentreX - wm,
                Rm = hm.sphereCentreZ - Dm,
                pm = im * im + Rm * Rm;
              if (pm > hm.sphereRadiusSquared) continue;
              const Em = Math.sqrt(hm.sphereRadiusSquared - pm),
                om = Math.floor(hm.sphereCentreY - Em);
              let Om = Math.floor(hm.sphereCentreY + Em);
              Om + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) && Om++, fm.set(mm, Tm, hm.caveType, am.d.FloorY, om), fm.set(mm, Tm, hm.caveType, am.d.CeilingY, Om)
            }
          }
          removeCavesNearWater(mm, Tm, fm) {
            const hm = this.heightmapVals.getOrGenerate(mm, Tm, am.g.CavesAllowedBelowY);
            if (hm !== xm.k)
              for (let Am = 0; Am < this.numCaveTypes; Am++) {
                if (fm.get(mm, Tm, Am, am.d.CeilingY) <= hm) continue;
                fm.get(mm, Tm, Am, am.d.FloorY) <= hm ? fm.set(mm, Tm, Am, am.d.CeilingY, hm) : (fm.set(mm, Tm, Am, am.d.FloorY, xm.o), fm.set(mm, Tm, Am, am.d.CeilingY, xm.o))
              }
          }
        }
        jm.SPAGHETTI_CAVE_EDGE_CUTOFF = .08;
        const Vm = new Rm.b("cave chunk metadata", 100, 6e4);
        class Im {
          constructor(mm, Tm, fm, am) {
            this.seed = mm, this.spaghettiCaveMetadata = void 0, this.pitCaveMetadata = void 0, this.ravineCaveMetadata = void 0, this.sphereCaveMetadata = void 0, this.numCaveTypes = void 0, this.caveTypeToBlockId = void 0, this.caveTypePrioritization = void 0, this.perChunkCache = Vm.partition();
            let xm = 0;
            const Rm = [],
              pm = [];
            {
              const {
                spaghettiCaveMetadata: Tm,
                nextCaveType: fm
              } = function(mm, Tm) {
                const fm = {
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
                  Am = [...[{
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
                  }].map((mm => ({
                    ...fm,
                    ...mm
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
                  am = [];
                for (let xm = 0; xm < Am.length; xm++) {
                  const fm = Am[xm];
                  let wm = 0;
                  for (const mm of fm.caveYPerturbNoiseParams) wm += mm.amplitude;
                  for (let Am = 0; Am < fm.count; Am++) am.push({
                    caveType: Tm++,
                    caveEdgeNoiseGenerator: new hm.j(fm.caveEdgeNoiseParams, `${mm}CaveCutoff${xm}${Am}`),
                    caveHeightNoiseGenerator: new hm.k(fm.caveHeightNoiseParams, fm.caveHeightNoiseThresholdParams, `${mm}Cave${xm}${Am}`),
                    caveHeightThreshold: Om(fm.caveHeightNoiseThresholdParams),
                    caveHeightMax: fm.caveHeightMax,
                    caveHeightPercentageUpperBound: fm.caveHeightPercentageUpperBound,
                    caveXZPerturbNoiseGenerator: new hm.j(fm.caveXZPerturbNoiseParams, `${mm}CaveHeightPerturb${xm}${Am}`),
                    caveYPerturbNoiseGenerator: new hm.j(fm.caveYPerturbNoiseParams, `${mm}CaveHeightNoise${xm}${Am}`),
                    caveCentreY: fm.caveCentreYMin + wm
                  })
                }
                return {
                  spaghettiCaveMetadata: am,
                  nextCaveType: Tm
                }
              }(mm, xm);
              this.spaghettiCaveMetadata = Tm, xm = fm
            } {
              const {
                pitCaveMetadata: Em,
                nextCaveType: om
              } = function(mm, Tm, fm, am, xm, Rm, pm) {
                const Em = [{
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
                    fillBlockId: (0, Am.B)(am, fm),
                    wallBlockIds: new wm.i([{
                      value: fm.Stone.id,
                      weight: 3
                    }, {
                      value: fm["Compressed Messy Stone"].id,
                      weight: 5
                    }, {
                      value: fm.Magma.id,
                      weight: 1
                    }]),
                    ceilingParams: {
                      blockIds: 0,
                      minThickness: 2,
                      maxThickness: 5
                    },
                    numChunksBetweenPits: 2
                  }],
                  om = [];
                for (const Am of Em) {
                  let fm = 0;
                  for (const mm of Am.pitXZPerturbNoiseParams) fm += mm.amplitude;
                  for (let am = 0; am < Am.count; am++) {
                    const am = om.length,
                      Em = new hm.j(Am.pitXZPerturbNoiseParams, `${mm}DistPitPerturb${am}`),
                      Om = `${mm}PitGen${am}`,
                      Ym = new im.d("cavePit", Am.numChunksBetweenPits, !0, !1, Om, 100, Tm),
                      qm = new Dm(Tm, Ym, Am.pitMaxWidth + 2 * fm, Om);
                    console.assert(qm.chunkSearchRadius <= Am.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${qm.chunkSearchRadius} ${Am.numChunksBetweenPits/2}`);
                    const jm = new wm.m(Am.pitMinWidth, Am.pitMaxWidth),
                      Vm = new wm.m(Am.pitMinFloorY, Am.pitMaxFloorY),
                      Im = new wm.m(Am.pitMinHeight, Am.pitMaxHeight),
                      Km = new hm.j(Am.pitFloorYPerturbNoiseParams, `${mm}yPitPerturb${am}`);
                    let Qm = null;
                    null !== Am.pitHeightPerturbNoiseParams && (Qm = new hm.j(Am.pitHeightPerturbNoiseParams, `${mm}heightPitPerturb${am}`));
                    const nm = new hm.j(Am.pitMidpointNoiseParams, `${mm}edgesPitPerturb${am}`),
                      Jm = xm++;
                    Rm[Jm] = Am.fillBlockId;
                    let cm = null;
                    null !== Am.wallBlockIds && (cm = xm++, Rm[cm] = Am.wallBlockIds);
                    let zm = null,
                      Zm = null;
                    null !== Am.ceilingParams && (zm = xm++, Zm = new wm.m(Am.ceilingParams.minThickness, Am.ceilingParams.maxThickness), Rm[zm] = Am.ceilingParams.blockIds), void 0 !== Am.priority && (pm[Jm] = Am.priority, null !== cm && (pm[cm] = Am.priority), null !== zm && (pm[zm] = Am.priority)), om.push({
                      caveType: Jm,
                      wallType: cm,
                      ceilingType: zm,
                      pitCeilingThicknessDistribution: Zm,
                      pitPointGenerator: qm,
                      pitXZPerturbNoiseGenerator: Em,
                      pitWidthDistribution: jm,
                      pitLengthDistribution: jm,
                      pitFloorYDistribution: Vm,
                      pitHeightDistribution: Im,
                      pitFloorYPerturbNoiseGenerator: Km,
                      pitHeightPerturbNoiseGenerator: Qm,
                      pitMidpointYPerturbNoiseGenerator: nm
                    })
                  }
                }
                return {
                  pitCaveMetadata: om,
                  nextCaveType: xm
                }
              }(mm, Tm, fm, am, xm, Rm, pm);
              this.pitCaveMetadata = Em, xm = om
            } {
              const {
                ravineCaveMetadata: fm,
                nextCaveType: Am
              } = function(mm, Tm, fm) {
                const Am = {
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
                  am = [];
                for (let xm = 0; xm < Am.count; xm++) {
                  const Rm = Am,
                    pm = new hm.j(Rm.ravineXZPerturbNoiseParams, `${mm}DistRavPerturb${xm}`);
                  let Em = 0;
                  for (const mm of Rm.ravineXZPerturbNoiseParams) Em += mm.amplitude;
                  const om = new hm.j(Rm.ravineYPerturbNoiseParams, `${mm}yRavinePerturb${xm}`),
                    Om = `${mm}RavineGen${xm}`,
                    Ym = new im.d("caveRav", Rm.numChunksBetweenRavines, !0, !1, Om, 100, Tm),
                    qm = new Dm(Tm, Ym, Math.max(Rm.ravineMaxLength, Rm.ravineMaxWidth) + 2 * Em, Om);
                  console.assert(qm.chunkSearchRadius <= Rm.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${qm.chunkSearchRadius} ${Rm.numChunksBetweenRavines/2}`);
                  const jm = new wm.m(Rm.ravineMinWidth, Rm.ravineMaxWidth),
                    Vm = new wm.m(Rm.ravineMinLength, Rm.ravineMaxLength),
                    Im = new wm.m(Rm.ravineMinFloorY, Rm.ravineMaxFloorY, !0),
                    Km = new wm.m(Rm.ravineMinHeight, Rm.ravineMaxHeight),
                    Qm = new wm.n(-1, 1);
                  am.push({
                    caveType: fm++,
                    ravinePointGenerator: qm,
                    ravineXZPerturbNoiseGenerator: pm,
                    ravineYPerturbNoiseGenerator: om,
                    ravineWidthDistribution: jm,
                    ravineLengthDistribution: Vm,
                    ravineFloorYDistribution: Im,
                    ravineHeightDistribution: Km,
                    ravineXZDirectionDistribution: Qm
                  })
                }
                return {
                  ravineCaveMetadata: am,
                  nextCaveType: fm
                }
              }(mm, Tm, xm);
              this.ravineCaveMetadata = fm, xm = Am
            } {
              const {
                sphereCaveMetadata: fm,
                nextCaveType: Am
              } = function(mm, Tm, fm) {
                const Am = {
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
                  am = [];
                for (let xm = 0; xm < Am.count; xm++) {
                  const Rm = Am,
                    pm = new hm.j(Rm.sphereXZPerturbNoiseParams, `${mm}DistSpherePerturb${xm}`);
                  let Em = 0;
                  for (const mm of Rm.sphereXZPerturbNoiseParams) Em += mm.amplitude;
                  const om = `${mm}SphereGen${xm}`,
                    Om = new im.d("caveSph", Rm.numChunksBetweenSpheres, !0, !1, om, 100, Tm),
                    Ym = new Dm(Tm, Om, 2 * (Rm.sphereMaxRadius + Em), om);
                  console.assert(Ym.chunkSearchRadius <= Rm.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${Ym.chunkSearchRadius} ${Rm.numChunksBetweenSpheres/2}`);
                  const qm = new wm.m(Rm.sphereMinRadius, Rm.sphereMaxRadius, !0),
                    jm = new wm.m(Rm.sphereMinCentreY, Rm.sphereMaxCentreY);
                  am.push({
                    caveType: fm,
                    spherePointGenerator: Ym,
                    sphereXZPerturbNoiseGenerator: pm,
                    sphereRadiusDistribution: qm,
                    sphereCentreYDistribution: jm
                  })
                }
                return {
                  sphereCaveMetadata: am,
                  nextCaveType: fm
                }
              }(mm, Tm, xm);
              this.sphereCaveMetadata = fm, xm = Am
            }
            this.numCaveTypes = xm;
            for (let hm = 0; hm < this.numCaveTypes; hm++) void 0 === Rm[hm] && (Rm[hm] = 0), void 0 === pm[hm] && (pm[hm] = 0);
            this.caveTypeToBlockId = Rm, this.caveTypePrioritization = pm.map(((mm, Tm) => ({
              caveType: Tm,
              priority: mm
            }))).sort(((mm, Tm) => mm.priority - Tm.priority)).map((mm => {
              let {
                caveType: Tm
              } = mm;
              return Tm
            }))
          }
          getOrCreateCaveGeneratorForChunk(mm, Tm, fm) {
            const hm = this.getOrBuildCaveMetadataForChunk(mm, Tm);
            return new jm(fm, hm.spaghettiCaveMetadataForChunk, hm.pitCaveMetadataForChunk, hm.ravineCaveMetadataForChunk, hm.sphereCaveMetadataForChunk, this.numCaveTypes)
          }
          getOrBuildCaveMetadataForChunk(mm, Tm) {
            const fm = this.perChunkCache.get(mm, Tm);
            if (!(0, Am.H)(fm)) return fm;
            const hm = [(0, Am.v)(mm), (0, Am.v)(Tm)],
              am = {
                spaghettiCaveMetadataForChunk: this.spaghettiCaveMetadata,
                pitCaveMetadataForChunk: this.buildPitCaveMetadataForChunk(hm),
                ravineCaveMetadataForChunk: this.buildRavineCaveMetadataForChunk(hm),
                sphereCaveMetadataForChunk: this.buildSphereCaveMetadataForChunk(hm)
              };
            return this.perChunkCache.set(mm, Tm, am), am
          }
          buildPitCaveMetadataForChunk(mm) {
            const Tm = [];
            for (let Am = 0; Am < this.pitCaveMetadata.length; Am++) {
              const am = this.pitCaveMetadata[Am],
                xm = am.pitPointGenerator.getSurroundingFeatures(mm[0], mm[1]);
              for (const mm of xm) {
                var fm, hm;
                const xm = mm[0],
                  Dm = mm[1],
                  im = new wm.k(`pit${xm}|${Dm}|${Am}${this.seed}`),
                  Rm = am.pitWidthDistribution.sample(im) >> 1,
                  pm = am.pitLengthDistribution.sample(im) >> 1,
                  Em = xm - Rm,
                  om = xm + Rm,
                  Om = Dm - pm,
                  Ym = Dm + pm,
                  qm = am.pitXZPerturbNoiseGenerator.maxMagnitude(),
                  jm = am.pitFloorYDistribution.sample(im),
                  Vm = am.pitHeightDistribution.sample(im),
                  Im = null !== (fm = null === (hm = am.pitCeilingThicknessDistribution) || void 0 === hm ? void 0 : hm.sample(im)) && void 0 !== fm ? fm : 0;
                Tm.push({
                  caveType: am.caveType,
                  wallType: am.wallType,
                  ceilingType: am.ceilingType,
                  pitCeilingThickness: Im,
                  pitMinX: Em,
                  pitMaxX: om,
                  pitMinZ: Om,
                  pitMaxZ: Ym,
                  reachMinX: Em - qm,
                  reachMaxX: om + qm,
                  reachMinZ: Om - qm,
                  reachMaxZ: Ym + qm,
                  pitFloorY: jm,
                  pitHeight: Vm,
                  pitXZPerturbNoiseGenerator: am.pitXZPerturbNoiseGenerator,
                  pitFloorYPerturbNoiseGenerator: am.pitFloorYPerturbNoiseGenerator,
                  pitHeightPerturbNoiseGenerator: am.pitHeightPerturbNoiseGenerator,
                  pitMidpointYPerturbNoiseGenerator: am.pitMidpointYPerturbNoiseGenerator
                })
              }
            }
            return Tm
          }
          buildRavineCaveMetadataForChunk(mm) {
            const Tm = [];
            for (let fm = 0; fm < this.ravineCaveMetadata.length; fm++) {
              const Am = this.ravineCaveMetadata[fm],
                am = Am.ravinePointGenerator.getSurroundingFeatures(mm[0], mm[1]);
              for (const mm of am) {
                const am = mm[0],
                  xm = mm[1],
                  Dm = new wm.k(`rav${am}|${xm}|${fm}${this.seed}`),
                  im = Am.ravineWidthDistribution.sample(Dm),
                  Rm = Am.ravineLengthDistribution.sample(Dm),
                  pm = Am.ravineFloorYDistribution.sample(Dm),
                  Em = Am.ravineHeightDistribution.sample(Dm),
                  om = [Am.ravineXZDirectionDistribution.sample(Dm), Am.ravineXZDirectionDistribution.sample(Dm)];
                (0, hm.H)(om);
                const Om = Math.SQRT2 * Am.ravineXZPerturbNoiseGenerator.maxMagnitude(),
                  Ym = Rm + Om,
                  qm = Math.hypot(om[0], om[1]);
                Tm.push({
                  caveType: Am.caveType,
                  ravineCentre: mm,
                  ravineWidth: im,
                  ravineLength: Rm,
                  ravineFloorY: pm,
                  ravineHeight: Em,
                  ravineDirection: om,
                  reachDistanceSquared: Ym * Ym,
                  axisNormalX: -om[1] / qm,
                  axisNormalZ: om[0] / qm,
                  reachFromAxis: Math.max(im, 0) + Om,
                  ravineXZPerturbNoiseGenerator: Am.ravineXZPerturbNoiseGenerator,
                  ravineYPerturbNoiseGenerator: Am.ravineYPerturbNoiseGenerator
                })
              }
            }
            return Tm
          }
          buildSphereCaveMetadataForChunk(mm) {
            const Tm = [];
            for (let fm = 0; fm < this.sphereCaveMetadata.length; fm++) {
              const hm = this.sphereCaveMetadata[fm],
                Am = hm.spherePointGenerator.getSurroundingFeatures(mm[0], mm[1]);
              for (const mm of Am) {
                const Am = mm[0],
                  am = mm[1],
                  xm = new wm.k(`sph${Am}|${am}|${fm}${this.seed}`),
                  Dm = hm.sphereRadiusDistribution.sample(xm),
                  im = Dm * Dm,
                  Rm = hm.sphereCentreYDistribution.sample(xm),
                  pm = Dm + Math.SQRT2 * hm.sphereXZPerturbNoiseGenerator.maxMagnitude();
                Tm.push({
                  caveType: hm.caveType,
                  sphereRadiusSquared: im,
                  sphereCentreX: Am,
                  sphereCentreY: Rm,
                  sphereCentreZ: am,
                  reachDistanceSquared: pm * pm,
                  sphereXZPerturbNoiseGenerator: hm.sphereXZPerturbNoiseGenerator
                })
              }
            }
            return Tm
          }
        }
      },
      39817: (mm, Tm, fm) => {
        fm.d(Tm, {
          e: () => qm
        });
        var hm = fm(39812),
          Am = fm(39802),
          am = fm(1649),
          xm = fm.n(am),
          wm = fm(653),
          Dm = fm(2839),
          im = fm.n(Dm),
          Rm = fm(37783),
          pm = fm(39821),
          Em = fm(39269),
          om = fm(39823);

        function Om(mm, Tm, fm) {
          const hm = new Em.c;
          for (const Am of fm) {
            const mm = hm.get(Am.chunkX, Am.chunkY, Am.chunkZ);
            if (!(0, wm.H)(mm)) throw new Error(`Duplicate chunk at ${Am.chunkX}, ${Am.chunkY}, ${Am.chunkZ}`);
            hm.set(Am.chunkX, Am.chunkY, Am.chunkZ, Am.rle)
          }
          return new pm.b(mm, {
            x: 0,
            y: 0,
            z: 0
          }, Tm, hm)
        }
        const Ym = {
          platformStone: Om("platformStone", {
            x: 41,
            y: 14,
            z: 41
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, om.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, om.c)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB1gjdBgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAApYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBHRoABQQBgQEfAAEf+gYABQIBgQEaAAUCAYEBGgAFAgGIARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAHVCAEfHgAB1gjbBgAFAgGBARoABQIBiAEaAAUCAYEBGgAFBAGBAR4AAZYBAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgKBARkABQICgQEZAAUCAYEBAR0ZAAUEAYEBAYgBHQADgQEdAAMfHQADHB0AAxwdAAEcAh0dAAId2gUABQICgQEZAAUCAoEBGQAFAgKBARkABB8BAgKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHQEcHgACHboFAAUcBIEBFwAFHAOBAQEfFwAFHAKBAQEfGAAFHAKBAR0AA4EBHQADHx0AAxwdAAMcHQACHAEdHQABHAIdHQACHboFAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAGHAEiGQAGHJoHAAkcFwAHHAEiGAAGHAEiGQAGHJoHAAkcFwAIHBgABxwZAAYcmgcACRwXAAgcGAAHHBkABhyaBwAJHBcACBwYAAYcASIZAAYcmgcACRwXAAgcGAAGHAEiGQADHAIiARyaBwAFHASBARcABRwDgQEBHxcABRwCgQEBHxgAASIBHAIiARwCgQEdAAKBAQGIAR0AAx8dAAMcHQABHQIcHQACHQEcHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAQfAQICgQEdAAOBAR0AAx8dAAMcHQABHQIcHgABHAEdHgACHdkFAAUCAoEBGQAFAgKBARkABQICgQEZAAUEAoEBHQADgQEdAAMfHQADHB0AAh0BHB4AAh35BQAFAgEdGgAFAgGIARoABQIBgQEaAAUEAYEBHgAB1QgBHx4AAdYI2wYABQIBiAEaAAUCAYEBGgAFAgGBARoABQQBgQEeAAGWAQEf+gYABQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBARoAApYBAwABHfoGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBGgAB1QgBlgEDAAEfGgAB1gjfBgA=")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, om.c)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwBIgIcAR8GBAMAAR0BlgECAAGWAQYAAZYB9AYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYgBCwQBHwkcAR8GBA0AAZYBAdUICwABlgETAAHWCNQGAAKBAQsCCRwHAgMAAoEBCwIJHAcCAwACgQELAgkcBwIDAAEdAYgBCgQBAgEcASIHHAECBgQGAAKWAQMAAZYBAQAB1QgDgQEHAAOBAQHVCAGWARAAAdYIAx8HAAMfAdYIEgADHAcAAxwTAAMdBwADHBUAAR0HAAMcHQABHAIdHQACHaoFAA2BAQccCIEBBAAHgQEBiAEFgQEHHAiBAQQABoEBAYgBAR0FgQEHHAiBAQQAAR0BiAELgQECIgUcCIEBBwABHQYfA4EBBwADgQEFHw4AAx8HAAMfEwADHAcAAxwTAAEdAhwHAAMcEwABHQEcAR0HAAIcAR0UAAIdBwABHQEcAR0dAAIdtAUAA4EBBxwDgQETAAOBAQccAoEBAYgBEwADgQECIgIcAiIBHAKBAQEdEwADgQEHAAKBAQGIARMAAYgBAoEBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAIdARwHAAMdFAACHQcAAR3XBQABgQEHHAGBARcAAYEBBBwBIgIcAYEBFwABHwcAAR+3BwABgQEHHAGBARcAAR8HAAEfx78BAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, om.c)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI3QYABYEBGwAFgQEbAAOBAQGIAQEdGwAEgQEBiAEbAAUf+9YBAA==")
          }]),
          smp2SpawnHub: Om("smp2SpawnHub", {
            x: 64,
            y: 24,
            z: 64
          }, [{
            chunkX: 0,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, om.c)("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")
          }, {
            chunkX: 0,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, om.c)("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")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 0,
            rle: (0, om.c)("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AgEAGwQBHwMCDgABlwGxBwABBB8CAQAXBAgCCQABlgEOAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAEEHwIBABcECAICAAGWAQUAAZYBAwABlwEKAAGWAQWBAQMcGAAFgQEDHBgAAR8DgQEBHxwAAxwdAAMcHQACHAEdHQACHB4AAhwBHR0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARsAAYEBARwBgQEBHASBARgAAYEBBBwBgQECHBgAAYgBA4EBARwDgQEbAAGBAQQcGwAFgQGAAgACBB4CAgAWBAgCGAAFgQEDHBgABYEBAxwYAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGwAIgQEYAAiBARgACIEBGwAFgQEbAAWBAYACAAIEHgICABYECAIWAAGWAQEABYEBAxwYAAGIAQSBAQMcGAABHwOBAQEfHAADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQABHQIcHgACHB0AAR0CHB0AAxwdAAMcHQADHBwAAR8DHAEfGwABiAEBHAGBAQEcAYEBGwABgQEBHAGBAQEcBIEBGAABgQEEHAGBAQIcGAAEgQEBHAOBARsAAYEBBBwbAAGIAQSBAYACAAMEDAIGBAsCAwAMBAYAAwQIAhgAAYgBA4EBAYgBAxwYAAEdAYgBA4EBGwAFH5sDAAUfGwABHQEAAYEBAQABgQEbAAGIAQEAAYEBAQAEgQEYAAGBAQQAAYEBGgAEgQEBAAKBAQGIARsAAYgBHwABHQGIAQOBAYACAAcEBQIKBAoCBwAFBAoACgTABwAgBOAHAA==")
          }, {
            chunkX: 1,
            chunkY: 0,
            chunkZ: 1,
            rle: (0, om.c)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEBgIMHwEdAwIBHQIfBQIBBAEAAh0CHBUAAYgBA4EBAR0bAASBAQGIARsABR+bAwAFHxsABYEBGwAFgQEcAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAASBAQGIAYICAB8CAQQGAgEfDAQCAgQEBQIBBBoABIEBAYgBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxwAARwBgQEBHB0AARwBgQEBHB0AARwBgQEBHBwABYEBGwAEgQEBiAEbAAOBAQGIAQEdggIAHwIBBAYCAR8MBAICBAQFAgEEGgAFgQEbAAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHBwAAR8DHAEfGwAFgQEbAAWBARwAARwBgQEBHBwABYEBwgIAHgICBAMCBB8MBAICBAQEAgGBARsAAYgBBIEBGwAFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAEdAhweAAIcHQABHQIcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8cAAEcAYEBARwdAAEcAYEBARwdAAEcAYEBARwcAAGIAQSBAcICAB4CAgQDAgEfDwQCAgQEBAIBgQENAAGWAQ0AAR0BiAEDgQEbAAGIAQOBAQGIARsABR+bAwAFHxsABIEBAR0bAAWBARsAAYgBBIEBGwABHQGIAQOBAcICAB4CAgQDAgEfDwQCAgkEHQABlgGkBwAeAgIEAwIBHw8EAgIJBMIHAB4CAgQDAgEfDwQCAgkECwABmwG2BwAeAgIEAwIBHw8EAgIJBAwAAZsBBAABlgGwBwAeAgIEAwIBHw8EAgIJBAkAAZYBuAcAHwIBBAMCAR8PBAICCgQHAAGWARYAAZYBogcAHwIBBAMCAR8PBAICCgQdAAGWAaMHAB8CAQQDAgEfDwQCAgoEwQcAHwIBBAMCAR0PBAICCgQPAAIwsAcAHwIBBAMCAR8PBAICCgQPAAIwsAcAHwIBBAMCAR0OBAMCCgQbAAGdAaUHAB4CAgQVAgkEGwABnQEBAAGdAaQHAB4CAgQUAgoEwgcAHgICBAQCCAQGAgwEwgcAHQIDBAMCAR0ZBA4AARkGEwEZGAABGQYAARkYAAEZBgABGRcAAdUQARkGAAEZAdMQFgAB4RACNAQAAjQB3xAYAAY0jgYAHQIDBAMCAR8IBAYCCwQOAAETBgABEwGWAVYAAZ0RCAABmxEWAAGpEQI3BAACNwGnERgABjeOBgAcAgQEAwIBHwgEBgIKBA8AARMGAAETVwAB1RAIAAHTEBYAAeEQAjQEAAI0Ad8QGAAGNI4GABsCBQQIAgQEBgIJBAUAAxwBHQGIAQOBAQMAARMGAAETEAABiAEDgQEBiAEbAAUfIgABnREIAAGbERYAAakRAjcEAAI3AacRGAAGN7ECAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAGwIFBAgCEwQFAAMcBYEBAwABGQYTARkNAAMcBYEBAwABGQYAARkQAAEfA4EBAR8DAAEZBgABGREAAxwDAAHVEAEZBgABGQHTEBAAAxwDAAHhEAI0BAACNAHfEBAAAxwFAAY0EgADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHAABHwMcAR8bAAGBAQEcAYEBARwBgQEYAASBAQEcAYEBARwBgQEYAAIcAYEBBBwBgQEYAAOBAQEcBIEBGAAEHAGBARsABIEBAYgBmwIAGwIFBAgCEwQFAAMcBYEBBAABlgELAAGWAQcAAxwFgQEbAAEfA4EBAR8cAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsABYEBGAAIgQEYAAiBARgACIEBGAAFgQEbAAWBAZsCABoCBgQIAhIEBgADHASBAQGIAREAAZYBBgADHAWBARsAAR8DgQEBHxwAAxwdAAMcHQADHB0AAhwBHR0AAhweAAIcAR0dAAMcHQADHB0AAxwdAAMcHQADHB0AAxwcAAEfAxwBHxsAAYEBARwBgQEBHAGBARgABIEBARwBgQEBHAGBARgAAhwBgQEEHAGBARgAA4EBARwDgQEBiAEYAAQcAYEBGwAFgQGbAgAYAggECAIQBAgAAxwBiAECgQEBiAEBHRsABIEBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAYEBGAAEgQEBAAGBAQEAAYEBGgABgQEEAAGIARgAAR0BiAEBgQEBAAKBAQGIAQEdHAABgQEbAAWBAZsCAAoCBAQGAhYEBAAGBAgAAZwBCAABlgG6BwAgBBsAAZwBxAcA")
          }])
        };
        class qm {
          constructor(mm, Tm) {
            this.MO = Tm, this.chunkToFixedPointPrefabs = void 0;
            const fm = {},
              hm = Tm + Vm;
            for (const {
                Am: Am,
                x: am,
                y: xm,
                z: wm
              }
              of mm) {
              const mm = Ym[Am];
              if (void 0 === mm) throw new Error(`Fixed-point prefab "${Am}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
              const {
                dimensions: Dm
              } = mm, im = Dm.x, Rm = Dm.y, pm = Dm.z, Em = am - (im >> 1), om = wm - (pm >> 1), Om = Em + im - 1, qm = om + pm - 1, jm = {
                schematic: mm,
                bottomLeftX: Em,
                bottomLeftZ: om,
                floorY: xm,
                ceilingY: xm + Rm - 1,
                topRightX: Om,
                topRightZ: qm
              }, Vm = Em - hm, Im = Om + hm, Km = om - hm, Qm = qm + hm, nm = Math.floor(Vm / Tm) * Tm, Jm = Math.floor(Km / Tm) * Tm;
              for (let hm = nm; hm <= Im; hm += Tm)
                for (let mm = Jm; mm <= Qm; mm += Tm) {
                  const Tm = this.getKeyForChunk(hm, mm);
                  fm[Tm] ??= [], fm[Tm].push(jm)
                }
            }
            this.chunkToFixedPointPrefabs = fm
          }
          getFixedPointPrefabInfoForChunk(mm, Tm) {
            const fm = this.getKeyForChunk(mm, Tm),
              am = this.chunkToFixedPointPrefabs[fm];
            if (void 0 === am) return {
              decodedFixedPointPrefabsForChunk: [],
              nearestFixedPrefabInfoForChunk: null
            };
            const xm = [];
            for (const hm of am) {
              const {
                schematic: mm,
                bottomLeftX: Tm,
                bottomLeftZ: fm,
                floorY: Am,
                ceilingY: am,
                topRightX: wm,
                topRightZ: Dm
              } = hm, im = this.getDecodedPrefabSchematic(mm);
              xm.push({
                decodedPrefabSchematic: im,
                bottomLeftX: Tm,
                bottomLeftZ: fm,
                floorY: Am,
                ceilingY: am,
                topRightX: wm,
                topRightZ: Dm
              })
            }
            const wm = new jm(am);
            return {
              decodedFixedPointPrefabsForChunk: xm,
              nearestFixedPrefabInfoForChunk: Am.p.create(this.MO, [mm, Tm], hm.j.NumFields, wm)
            }
          }
          static smoothHeightmapForFixedPointPrefab(mm, Tm, fm, Am) {
            if (null === Am) return null;
            const am = Am.getOrGenerate(mm, Tm, hm.j.DistanceToNearestFixedPrefab);
            if (am > Vm) return null;
            let xm = am / Vm;
            xm *= xm;
            const wm = Am.getOrGenerate(mm, Tm, hm.j.HeightOfNearestFixedPrefab);
            return Math.floor(fm * xm + (1 - xm) * wm)
          }
          static isNearFixedPointPrefab(mm, Tm, fm) {
            if (null === fm) return !1;
            return fm.getOrGenerate(mm, Tm, hm.j.DistanceToNearestFixedPrefab) <= Vm
          }
          static isWithinFixedPointPrefab(mm, Tm, fm) {
            if (null === fm) return !1;
            return 0 === fm.getOrGenerate(mm, Tm, hm.j.DistanceToNearestFixedPrefab)
          }
          static getBlockFromFixedPointPrefab(mm, Tm, fm, hm) {
            const {
              bottomLeftX: Am,
              bottomLeftZ: am,
              floorY: xm,
              ceilingY: wm,
              topRightX: Dm,
              topRightZ: im
            } = hm;
            if (mm < Am || Dm < mm || Tm < xm || wm < Tm || fm < am || im < fm) return 0;
            const Rm = mm - Am,
              pm = Tm - xm,
              Em = fm - am;
            return hm.decodedPrefabSchematic.get(Rm, pm, Em)
          }
          getKeyForChunk(mm, Tm) {
            return `${mm}|${Tm}`
          }
          getDecodedPrefabSchematic(mm) {
            const Tm = mm.name,
              fm = qm.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.get(Tm);
            if (!(0, wm.H)(fm)) return fm;
            const {
              dimensions: hm
            } = mm, Am = im()(new Uint16Array(hm.x * hm.y * hm.z), [hm.x, hm.y, hm.z]);
            for (let am = 0; am < hm.x; am += wm.x)
              for (let Tm = 0; Tm < hm.y; Tm += wm.x)
                for (let fm = 0; fm < hm.z; fm += wm.x) {
                  const xm = im()(new Uint16Array(wm.x * wm.x * wm.x), [wm.x, wm.x, wm.x]),
                    Dm = mm.getRLEChunk((0, wm.M)(am), (0, wm.M)(Tm), (0, wm.M)(fm));
                  Rm.decode(Dm, xm.data);
                  const pm = Math.min(wm.x, hm.x - am),
                    Em = Math.min(wm.x, hm.y - Tm),
                    om = Math.min(wm.x, hm.z - fm);
                  for (let mm = 0; mm < pm; mm++)
                    for (let hm = 0; hm < Em; hm++)
                      for (let wm = 0; wm < om; wm++) {
                        const Dm = xm.get(mm, hm, wm),
                          im = am + mm,
                          Rm = Tm + hm,
                          pm = fm + wm;
                        Am.set(im, Rm, pm, Dm)
                      }
                }
            return qm.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE.set(Tm, Am), Am
          }
        }
        qm.DECODED_FIXED_POINT_PREFAB_SCHEMATIC_CACHE = new(xm())({
          max: 100,
          ttl: 6e4,
          updateAgeOnGet: !0
        });
        class jm {
          constructor(mm) {
            this.fixedPointPrefabsForChunk = mm
          }
          generateAndSet(mm, Tm, fm) {
            let Am = Vm + 1,
              am = 0;
            for (const hm of this.fixedPointPrefabsForChunk) {
              const {
                bottomLeftX: fm,
                bottomLeftZ: xm,
                topRightX: wm,
                topRightZ: Dm
              } = hm, im = Math.max(fm - mm, 0, mm - wm) + Math.max(xm - Tm, 0, Tm - Dm);
              im < Am && (Am = im, am = hm.floorY)
            }
            fm.set(mm, Tm, hm.j.DistanceToNearestFixedPrefab, Am), fm.set(mm, Tm, hm.j.HeightOfNearestFixedPrefab, am)
          }
        }
        const Vm = 12
      },
      39797: (mm, Tm, fm) => {
        fm.d(Tm, {
          d: () => im,
          e: () => Dm,
          g: () => wm
        });
        var hm = fm(39802),
          Am = fm(39812),
          am = fm(39805),
          xm = fm(39817);

        function wm(mm) {
          return new hm.j([{
            amplitude: 11,
            frequency: 1 / 4e3
          }, {
            amplitude: 4,
            frequency: .001
          }], `${mm}GlobalHeightmapOffset`)
        }
        class Dm {
          constructor(mm) {
            this.globalHeightmap = mm
          }
          getNoWaterHeightmapVal(mm, Tm, fm) {
            const hm = mm,
              Am = Tm;
            let am = 0;
            for (const {
                biome: wm,
                weight: Dm
              }
              of fm) am += wm.getHeightmapVal(hm, Am) * Dm;
            const xm = this.globalHeightmap.getOctaves(hm, Am);
            return Math.floor(am) + Math.floor(xm)
          }
        }
        class im {
          constructor(mm, Tm, fm, hm, Am) {
            this.closestBiomesForChunk = mm, this.nearestFixedPrefabInfoForChunk = Tm, this.noWaterHeightmapGenerator = fm, this.heightmapPerturb = hm, this.waterBodyGenerator = Am
          }
          generateAndSet(mm, Tm, fm) {
            const hm = this.closestBiomesForChunk.getOrGenerate(mm, Tm),
              Am = Math.floor(this.heightmapPerturb.getOctaves(mm, Tm)),
              xm = Math.floor(this.heightmapPerturb.getOctaves(mm + 200, Tm + 778)),
              wm = this.waterBodyGenerator.columnMayHaveScatteredLakes(hm, mm, Tm),
              Dm = this.getWithWaterHeightmapVal(mm + Am, Tm + xm, hm, wm);
            let {
              groundHeight: im,
              waterHeight: Rm,
              cavesAllowedBelowY: pm,
              isLake: Em
            } = Dm;
            const om = hm[0].biome.carveGround(mm, Tm, im);
            null !== om && (im = om, Rm = am.p, pm = om - am.f, Em = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(mm, Tm, Am, xm, fm, im, Rm, pm, Em)
          }
          getWithWaterHeightmapVal(mm, Tm, fm, hm) {
            const Am = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(mm, Tm, fm),
              {
                distFromWater: xm,
                waterRadius: wm,
                waterHeight: Dm,
                waterbedHeight: im,
                isLake: Rm,
                needOutsideWaterDist: pm
              } = this.waterBodyGenerator.getInfoNeededForWaterGen(mm, Tm, hm);
            let Em = 0,
              om = am.p,
              Om = am.k,
              Ym = 0;
            const qm = wm + pm;
            if (xm <= qm) {
              const mm = wm + 4,
                Tm = Dm + 2;
              if (xm <= wm) {
                let mm = xm / wm;
                Rm ? (mm *= mm * mm, Em = Math.floor(im + (Dm - im) * mm - 2)) : (mm *= mm, Em = Math.floor(im + (Dm - im) * mm)), om = Dm, Ym = Rm ? 1 : 0;
                const Tm = fm[0].biome.waterKept;
                Tm < 1 && (om = im + Math.floor((Dm - im) * Tm), Em >= om && (om = am.p, Ym = am.h))
              } else if (xm <= mm) {
                const fm = (xm - wm) / (mm - wm);
                Em = Dm + Math.ceil((Tm - Dm) * fm)
              } else {
                const fm = (xm - mm) / (qm - mm);
                Em = Tm + Math.ceil((Am - Tm) * fm)
              }
              Om = Em - am.f
            } else Em = Am;
            return {
              groundHeight: Em,
              waterHeight: om,
              cavesAllowedBelowY: Om,
              isLake: Ym
            }
          }
          setHeightmapValuesWithFixedPrefabSmoothing(mm, Tm, fm, hm, wm, Dm, im, Rm, pm) {
            const Em = xm.e.smoothHeightmapForFixedPointPrefab(Math.round(mm + fm / 4), Math.round(Tm + hm / 4), Dm, this.nearestFixedPrefabInfoForChunk);
            null !== Em && im > (Dm = Em) && (im = am.p, pm = 0), wm.set(mm, Tm, Am.g.GroundHeight, Dm), wm.set(mm, Tm, Am.g.WaterHeight, im), wm.set(mm, Tm, Am.g.CavesAllowedBelowY, Rm), wm.set(mm, Tm, Am.g.IsLake, pm), this.shouldCurtailCave(mm, Tm, null !== Em) && wm.set(mm, Tm, Am.g.CavesAllowedBelowY, Dm - am.f)
          }
          shouldCurtailCave(mm, Tm, fm) {
            if (fm) return !0;
            const hm = Math.max(Math.abs(mm), Math.abs(Tm));
            if (hm < 50) return !0;
            const Am = Math.min(Math.abs((mm - 300) % 1e3), 1e3 - Math.abs((mm - 300) % 1e3)),
              am = Math.min(Math.abs((Tm - 300) % 1e3), 1e3 - Math.abs((Tm - 300) % 1e3));
            return hm > 1e4 && Math.max(Am, am) < 50
          }
        }
      },
      39830: (mm, Tm, fm) => {
        fm.d(Tm, {
          d: () => im
        });
        var hm = fm(39802),
          Am = fm(39838),
          am = fm.n(Am),
          xm = fm(4184),
          wm = fm(39875);
        const Dm = new wm.b("point cells", 500, 6e4);
        class im {
          constructor(mm, Tm, fm, hm, Am, am, xm) {
            let wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              im = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              Rm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : void 0;
            if (this.name = mm, this.seed = Am, this.minDist = void 0, this.variableDensitySettings = void 0, this.gridSize = void 0, this.cachedCells = Dm.partition(), this._tempCellCoord = [0, 0], this.useIsPoint = void 0, this.useKthClosestPoint = void 0, this.useJitteredGrid = void 0, this.customCellGap = void 0, this.mostRecentlyAccessedCell = null, console.assert(Number.isInteger(Tm)), this.minDist = Tm, this.variableDensitySettings = wm, this.customCellGap = Rm, this.useJitteredGrid = im, this.gridSize = Math.floor(Math.sqrt(am * Math.pow(Tm, 2))), im) {
              const mm = this.gridSize % Tm;
              0 !== mm && (this.gridSize += Tm - mm)
            } else {
              const mm = this.gridSize % xm;
              0 !== mm && (this.gridSize += xm - mm)
            }
            this.useIsPoint = fm, this.useKthClosestPoint = hm
          }
          assertReachableFromChunkCentre(mm, Tm) {
            const fm = mm / 2 + Tm - 1;
            if (this.gridSize < fm) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${fm} (chunkSize=${mm}, halfBox=${Tm}). Points near chunk edges would be missed.`)
          }
          isPoint(mm, Tm) {
            const fm = this.getCellCoordFromGlobalCoord(mm, Tm),
              {
                pointsSet: hm
              } = this.getCell(fm[0], fm[1]);
            return !!hm.has((0, wm.e)(mm, Tm))
          }
          getClosestPoint(mm, Tm) {
            const fm = this.getCellCoordFromGlobalCoord(mm, Tm),
              Am = this.getCell(fm[0], fm[1]),
              am = this._getPointsSurroundingCell(fm, Am);
            let xm = [0, 0],
              wm = 1e4;
            for (const Dm of am) {
              const fm = (0, hm.I)(Dm, mm, Tm);
              fm < wm && (xm = Dm, wm = fm)
            }
            return xm
          }
          getKClosestPointsWithWeights(mm, Tm, fm) {
            const hm = this.getCellCoordFromGlobalCoord(mm, Tm),
              Am = this.getCell(hm[0], hm[1]);
            return this._getPointsSurroundingCell(hm, Am), this._getClosestPointsForGeneratedCell(Am, mm, Tm, fm)
          }
          getPointsAroundPoint(mm, Tm) {
            const fm = this.getCellCoordFromGlobalCoord(mm, Tm),
              hm = this.getCell(fm[0], fm[1]);
            return this._getPointsSurroundingCell(fm, hm)
          }
          _getPointsSurroundingCell(mm, Tm) {
            if (!Tm.surroundingPoints) {
              const am = [...Tm.points];
              for (let Tm = mm[0] - 1; Tm <= mm[0] + 1; Tm++)
                for (let xm = mm[1] - 1; xm <= mm[1] + 1; xm++) hm = Tm, Am = xm, ((fm = mm)[0] !== hm || fm[1] !== Am) && am.push(...this.getCell(Tm, xm).points);
              Tm.surroundingPoints = am
            }
            var fm, hm, Am;
            return Tm.surroundingPoints
          }
          _getClosestPointsForGeneratedCell(mm, Tm, fm, Am) {
            let am = [0, 0],
              xm = 1e5;
            for (const im of mm.surroundingPoints) {
              const mm = (0, hm.I)(im, Tm, fm);
              mm < xm && (am = im, xm = mm)
            }
            const wm = [{
              pt: am,
              distDiffFromFirstPt: 0,
              weight: 0
            }];
            let Dm = Am;
            for (let im = 0; im < mm.surroundingPoints.length; im++) {
              const Rm = mm.surroundingPoints[im];
              if (Rm[0] === am[0] && Rm[1] === am[1]) continue;
              const pm = (0, hm.I)(Rm, Tm, fm) - xm;
              pm < Am && (wm.push({
                pt: Rm,
                distDiffFromFirstPt: pm,
                weight: 0
              }), Dm += Am - pm)
            }
            for (const hm of wm) hm.weight = (Am - hm.distDiffFromFirstPt) / Dm;
            return wm
          }
          getCellCoordFromGlobalCoord(mm, Tm) {
            return this._tempCellCoord[0] = Math.floor(mm / this.gridSize), this._tempCellCoord[1] = Math.floor(Tm / this.gridSize), this._tempCellCoord
          }
          getCell(mm, Tm) {
            if (this.mostRecentlyAccessedCell && this.mostRecentlyAccessedCell.coord[0] === mm && this.mostRecentlyAccessedCell.coord[1] === Tm) return this.mostRecentlyAccessedCell;
            const fm = this.cachedCells.get(mm, Tm);
            if (fm) return this.mostRecentlyAccessedCell = fm, fm;
            const {
              points: hm,
              pointsSet: Am
            } = this.generateRandomPointsForCell(mm, Tm), am = {
              coord: [mm, Tm],
              points: hm,
              pointsSet: Am,
              surroundingPoints: null
            };
            return this.cachedCells.set(mm, Tm, am), this.mostRecentlyAccessedCell = am, am
          }
          generateRandomPointsForCell(mm, Tm) {
            const fm = mm * this.gridSize,
              hm = Tm * this.gridSize;
            let Am, Dm;
            if (this.useJitteredGrid) {
              const am = new xm.k(`${mm}${Tm}${this.seed}jitter`);
              Am = [];
              const wm = fm + this.gridSize,
                Dm = hm + this.gridSize;
              for (let mm = fm; mm < wm; mm += this.minDist)
                for (let Tm = hm; Tm < Dm; Tm += this.minDist) {
                  const fm = mm + Math.floor(am.next() * this.minDist),
                    hm = Tm + Math.floor(am.next() * this.minDist);
                  Am.push([fm, hm])
                }
            } else {
              const wm = new xm.k(`${mm}${Tm}${this.seed}pts`),
                Dm = () => wm.next();
              let im;
              const Rm = this.gridSize - (this.customCellGap || this.minDist);
              if (null === this.variableDensitySettings) im = new(am())({
                shape: [Rm, Rm],
                minDistance: this.minDist,
                maxDistance: this.minDist,
                tries: 40
              }, Dm);
              else {
                const mm = this.variableDensitySettings.min,
                  Tm = this.variableDensitySettings.max,
                  Am = Tm - mm,
                  xm = this.variableDensitySettings.func,
                  wm = Tm => (xm([Tm[0] + fm, Tm[1] + hm]) - mm) / Am;
                im = new(am())({
                  shape: [Rm, Rm],
                  minDistance: mm,
                  maxDistance: Tm,
                  tries: 10,
                  distanceFunction: wm
                }, Dm)
              }
              Am = im.fill().map((mm => [Math.floor(fm + mm[0]), Math.floor(hm + mm[1])]))
            }
            if (this.useIsPoint) {
              Dm = new Set;
              for (const mm of Am) Dm.add((0, wm.e)(mm[0], mm[1]))
            }
            return {
              pointsSet: Dm,
              points: this.useKthClosestPoint ? Am : null
            }
          }
        }
      },
      39898: (mm, Tm, fm) => {
        fm.r(Tm), fm.d(Tm, {
          WorldGenerator: () => dT
        });
        var hm = fm(39802),
          Am = fm(39830),
          am = fm(39812),
          xm = fm(39805),
          wm = fm(37783),
          Dm = fm(39892),
          im = fm(637),
          Rm = fm(653),
          pm = fm(39269),
          Em = fm(4184);
        let om = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto.getRandomValues(new Uint8Array(mm)).reduce(((mm, Tm) => mm += (Tm &= 63) < 36 ? Tm.toString(36) : Tm < 62 ? (Tm - 26).toString(36).toUpperCase() : Tm > 62 ? "-" : "_"), "")
        };
        class Om {
          constructor(mm) {
            this.suffixMapping = void 0, this.suffixMapping = Object.fromEntries(Object.entries(mm).map((mm => {
              let [Tm, fm] = mm;
              const hm = fm.name;
              return void 0 !== Ym[hm] ? [Tm, hm] : [Tm, hm.split(" ").at(-1)]
            })))
          }
          getPossibleEnchantmentsForItem(mm) {
            var Tm;
            return null !== (Tm = Ym[this.suffixMapping[mm]]) && void 0 !== Tm ? Tm : []
          }
          chooseRandomEnchantmentAttributes(mm, Tm, fm) {
            const hm = [...fm],
              Am = {
                enchantments: {},
                enchantmentTier: Tm,
                id: om()
              },
              am = qm[Tm];
            for (let wm = 0; wm < am; wm++) {
              var xm;
              if (0 === hm.length) {
                console.warn("Ran out of enchantments to choose from");
                break
              }
              const {
                enchantments: Tm
              } = Am, fm = hm[Math.floor(mm.next() * hm.length)];
              Tm[fm] = (null !== (xm = Tm[fm]) && void 0 !== xm ? xm : 0) + 1, Tm[fm] >= jm && hm.splice(hm.indexOf(fm), 1)
            }
            return Am
          }
        }
        const Ym = {
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
          qm = {
            "Tier 1": 1,
            "Tier 2": 2,
            "Tier 3": 3,
            "Tier 4": 4,
            "Tier 5": 5
          },
          jm = 3;
        const Vm = [0, 90, 180, 270],
          Im = /^(meta\|rot\d)\|([lrud]+)$/,
          Km = "nesw",
          Qm = /^meta\|([nesw]*)\|?(Stacked)?$/,
          nm = function(mm) {
            const Tm = new WeakMap;
            return (fm, hm) => {
              let Am = Tm.get(fm);
              return void 0 === Am && (Am = mm(fm, hm), Tm.set(fm, Am)), Am
            }
          }((mm => new Jm(mm)));
        class Jm {
          constructor(mm) {
            this.blockMetadata = mm, this.blockIdMappings = new Map, this.maxBlockId = void 0;
            const Tm = new Set(Object.keys(mm).map((Tm => mm[Tm].id)));
            Tm.add(0), this.maxBlockId = Math.max(...Tm)
          }
          static
          for (mm) {
            return nm(mm)
          }
          getBlockIdMapping(mm, Tm) {
            const fm = this.getBlockIdMappingKey(mm, Tm);
            let hm = this.blockIdMappings.get(fm);
            return void 0 === hm && Vm.includes(mm) && (hm = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, mm, Tm), this.blockIdMappings.set(fm, hm)), hm
          }
          turnBlockId(mm, Tm, fm) {
            return this.mapBlockId(this.blockMetadata[mm], Tm, this.getRotationMapping(Tm, fm), fm)
          }
          getBlockIdMappingKey(mm, Tm) {
            return `r${mm}|m${Number(Tm)}`
          }
          createBlockIdMapping(mm, Tm, fm, hm) {
            const Am = new Uint16Array(Tm + 1),
              am = this.getRotationMapping(fm, hm);
            for (const xm in mm) {
              const Tm = mm[xm];
              Am[Tm.id] = this.mapBlockId(Tm, fm, am, hm)
            }
            return Am
          }
          getRotationMapping(mm, Tm) {
            const fm = Math.round(mm / 90),
              hm = new Uint8Array(4);
            for (let Am = 0; Am < 4; Am++) hm[Am] = (4 + Am - fm) % 4;
            if (Tm) {
              let mm = hm[0];
              hm[0] = hm[1], hm[1] = mm, mm = hm[2], hm[2] = hm[3], hm[3] = mm
            }
            return hm
          }
          mapBlockId(mm, Tm, fm, hm) {
            var Am;
            const {
              blockMetadata: am
            } = this, xm = Math.round(Tm / 90), {
              id: wm,
              meta: Dm
            } = mm, {
              rot: im,
              rootName: Rm,
              metaStr: pm
            } = Dm;
            let Em;
            const [, om, Om] = null !== (Am = Qm.exec(pm)) && void 0 !== Am ? Am : [];
            if (void 0 !== om) {
              var Ym, qm;
              Em = null !== (Ym = null === (qm = am[`${Rm}|meta|${[Km.split("").filter(((mm,Tm)=>om.split("").some((mm=>{const fm=Km.indexOf(mm);return((hm?3-fm:fm)+xm)%4===Tm})))).join(""),Om].filter(Boolean).join("|")}`]) || void 0 === qm ? void 0 : qm.id) && void 0 !== Ym ? Ym : wm
            } else if (null === im) Em = wm;
            else {
              var jm, Vm;
              const mm = fm[im - 1] + 1;
              let Tm = pm.replace(`rot${im}`, `rot${mm}`);
              hm && Dm.stairsCorner && (Tm = Tm.replace(/(Left|Right)$/, (mm => "Left" === mm ? "Right" : "Left"))), hm && "Chest" === Rm && (Tm = Tm.replace(/\|(left|right)$/, ((mm, Tm) => "left" === Tm ? "|right" : "|left")));
              const Am = Im.exec(Tm);
              if (hm && null !== Am) {
                const mm = "lrud".split("").filter((mm => Am[2].includes("l" === mm ? "r" : "r" === mm ? "l" : mm)));
                Tm = `${Am[1]}|${mm.join("")}`
              }
              const xm = `${Rm}|${Tm}`;
              if (Em = null !== (jm = null === (Vm = am[xm]) || void 0 === Vm ? void 0 : Vm.id) && void 0 !== jm ? jm : null, null === Em) {
                const mm = am[Rm];
                Em = mm.rootMetaDesc === xm ? mm.id : wm
              }
            }
            return Em
          }
        }
        var cm = fm(2839),
          zm = fm.n(cm),
          Zm = fm(39817);

        function km(mm, Tm, fm, hm, Am) {
          for (let wm = 0; wm < fm.numCaveTypes; wm++) {
            if (hm && 0 !== fm.caveTypeToBlockIds[wm]) continue;
            const Dm = fm.getOrGenerate(mm, Tm, wm, am.d.FloorY);
            if (Dm === xm.o) continue;
            Sm(Am, Dm, fm.getOrGenerate(mm, Tm, wm, am.d.CeilingY))
          }
        }

        function bm(mm, Tm, fm, hm) {
          const Am = [];
          return km(mm, Tm, fm, hm, Am), Am
        }

        function Sm(mm, Tm, fm) {
          let hm = 0;
          for (; hm < mm.length;) {
            const Am = mm[hm];
            if (Tm > Am.ceilingY) break;
            fm < Am.floorY ? hm++ : (Tm = Math.min(Am.floorY, Tm), fm = Math.max(Am.ceilingY, fm), mm.splice(hm, 1))
          }
          mm.splice(hm, 0, {
            floorY: Tm,
            ceilingY: fm
          })
        }
        const em = new Em.i([{
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
          Nm = new Em.i([{
            value: !1,
            weight: 1
          }, {
            value: !0,
            weight: 1
          }]);
        let Gm, Xm = function(mm) {
          return mm[mm.GUARANTEED_AIR = -1] = "GUARANTEED_AIR", mm
        }({});
        const Pm = new Em.i(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Otherworldly", "Runic", "Fabled", "Primordial", "Cosmic", "Enkindled"].map((mm => ({
          value: mm,
          weight: 1
        }))));
        class Hm {
          constructor(mm) {
            this.mobType = mm
          }
          sample(mm) {
            const Tm = `${Pm.sample(mm)} ${this.mobType}`;
            return {
              customDisplayName: Tm,
              customAttributes: {
                mobSettings: {
                  name: Tm
                }
              }
            }
          }
        }
        class ym {
          constructor(mm) {
            this.itemCategoryDistributions = void 0, this.shouldEnchantDistribution = void 0, this.enchantmentTier = void 0;
            const Tm = [];
            for (const hm of mm.itemCategories) {
              const mm = new Em.m(hm.minItems, hm.maxItems + 1),
                Am = [];
              for (const Tm of hm.items) {
                var fm;
                const mm = Tm.amount ? new Em.m(Tm.amount.min, Tm.amount.max + 1) : null,
                  hm = null !== (fm = Tm.itemAttributesDistribution) && void 0 !== fm ? fm : null;
                Am.push({
                  weight: Tm.frequency,
                  value: {
                    name: Tm.name,
                    amountDistribution: mm,
                    attributesDistribution: hm
                  }
                })
              }
              const am = new Em.i(Am);
              Tm.push({
                numItemsDistribution: mm,
                itemDistribution: am
              })
            }
            this.itemCategoryDistributions = Tm, this.shouldEnchantDistribution = new Em.e(mm.enchantmentProbability), this.enchantmentTier = mm.enchantmentTier
          }
          sample(mm) {
            const Tm = Array(Rm.k).fill(null);
            let fm = 0;
            for (const im of this.itemCategoryDistributions) {
              const Rm = im.numItemsDistribution.sample(mm);
              for (let pm = 0; pm < Rm; pm++, fm++) {
                var hm, Am, am, xm, wm, Dm;
                const Rm = im.itemDistribution.sample(mm),
                  pm = Rm.name,
                  Em = null !== (hm = null === (Am = Rm.amountDistribution) || void 0 === Am ? void 0 : Am.sample(mm)) && void 0 !== hm ? hm : null,
                  om = null !== (am = null === (xm = Rm.attributesDistribution) || void 0 === xm ? void 0 : xm.sample(mm)) && void 0 !== am ? am : {},
                  Om = null !== (wm = this.getEnchantmentAttributesForItem(mm, pm)) && void 0 !== wm ? wm : {};
                Tm[fm] = {
                  name: pm,
                  amount: Em,
                  attributes: {
                    ...om,
                    customAttributes: {
                      ...null !== (Dm = om.customAttributes) && void 0 !== Dm ? Dm : {},
                      ...Om
                    }
                  }
                }
              }
            }
            return (0, Em.o)(Tm, mm), Tm
          }
          getEnchantmentAttributesForItem(mm, Tm) {
            if (!this.shouldEnchantDistribution.sample(mm)) return null;
            const fm = Gm.getPossibleEnchantmentsForItem(Tm);
            return 0 === fm.length ? null : Gm.chooseRandomEnchantmentAttributes(mm, this.enchantmentTier, fm)
          }
        }

        function Cm(mm, Tm) {
          let fm = 0;
          for (const am of mm) fm += am.frequency;
          const hm = Tm / fm,
            Am = [];
          for (const am of mm) Am.push({
            ...am,
            frequency: am.frequency * hm
          });
          return Am
        }
        var rm = function(mm) {
          return mm.WOOD = "Wood", mm.STONE = "Stone", mm.IRON = "Iron", mm.GOLD = "Gold", mm.DIAMOND = "Diamond", mm
        }(rm || {});
        const sm = {
            name: "Coal",
            frequency: 1,
            amount: {
              min: 5,
              max: 15
            }
          },
          lm = {
            name: "Iron Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          Mm = {
            name: "Gold Bar",
            frequency: 2,
            amount: {
              min: 3,
              max: 6
            }
          },
          um = {
            name: "Diamond",
            frequency: 1,
            amount: {
              min: 2,
              max: 4
            }
          },
          Bm = {
            name: "Spirit Saddle",
            frequency: .5,
            amount: null
          };

        function Lm(mm) {
          return Cm([{
            name: "Aura XP Potion",
            frequency: 4,
            amount: null
          }, {
            name: "Aura XP Potion II",
            frequency: 1,
            amount: null
          }], mm)
        }

        function tm(mm) {
          return Cm([...Cm([{
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
          }], 4), ...Cm([{
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
          }], 2), ...Cm([{
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
          }], 1), ...Cm([{
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
          }], 2)], mm)
        }

        function Um(mm) {
          const Tm = {
              min: 2,
              max: 4
            },
            fm = [{
              name: "Carrot",
              frequency: 1,
              amount: Tm
            }, {
              name: "Raw Potato",
              frequency: 1,
              amount: Tm
            }, {
              name: "Beetroot",
              frequency: 1,
              amount: Tm
            }];
          return Cm([...Cm([{
            name: "Apple",
            frequency: 1,
            amount: Tm
          }, {
            name: "Bowl of Rice",
            frequency: 1,
            amount: null
          }, {
            name: "Bread",
            frequency: 1,
            amount: Tm
          }, {
            name: "Cherry",
            frequency: 1,
            amount: Tm
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
            amount: Tm
          }, {
            name: "Plum",
            frequency: 1,
            amount: Tm
          }, {
            name: "Pumpkin Pie",
            frequency: 1,
            amount: Tm
          }], 2), ...Cm(fm, 1)], mm)
        }

        function dm(mm) {
          return Cm([{
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
          }], mm)
        }

        function gm(mm) {
          const Tm = [
              ["White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete"],
              ["Green Glass", "White Glass", "Light Gray Glass", "Gray Glass", "Black Glass", "Brown Glass", "Red Glass", "Orange Glass", "Yellow Glass", "Lime Glass", "Cyan Glass", "Light Blue Glass", "Blue Glass", "Purple Glass", "Magenta Glass", "Pink Glass"],
              ["Patterned Green Glass", "Patterned White Glass", "Patterned Light Gray Glass", "Patterned Gray Glass", "Patterned Black Glass", "Patterned Brown Glass", "Patterned Red Glass", "Patterned Orange Glass", "Patterned Yellow Glass", "Patterned Lime Glass", "Patterned Cyan Glass", "Patterned Light Blue Glass", "Patterned Blue Glass", "Patterned Purple Glass", "Patterned Magenta Glass", "Patterned Pink Glass"],
              ["White Baked Clay", "Orange Baked Clay", "Magenta Baked Clay", "Light Blue Baked Clay", "Yellow Baked Clay", "Lime Baked Clay", "Pink Baked Clay", "Gray Baked Clay", "Light Gray Baked Clay", "Cyan Baked Clay", "Purple Baked Clay", "Blue Baked Clay", "Brown Baked Clay", "Green Baked Clay", "Red Baked Clay", "Black Baked Clay"],
              ["White Ceramic", "Orange Ceramic", "Magenta Ceramic", "Light Blue Ceramic", "Yellow Ceramic", "Lime Ceramic", "Pink Ceramic", "Gray Ceramic", "Light Gray Ceramic", "Cyan Ceramic", "Purple Ceramic", "Blue Ceramic", "Brown Ceramic", "Green Ceramic", "Red Ceramic", "Black Ceramic"],
              ["Stone Bricks", "Engraved Stone", "Mossy Stone Bricks", "Cracked Stone Bricks", "Mossy Messy Stone", "Compressed Messy Stone", "Extra Compressed Messy Stone", "Smooth Sandstone", "Engraved Sandstone", "Marked Sandstone", "Sandstone Bricks", "Smooth Red Sandstone", "Engraved Red Sandstone", "Marked Red Sandstone", "Red Sandstone Bricks", "Engraved Diorite", "Diorite Bricks", "Engraved Andesite", "Andesite Bricks", "Engraved Granite", "Granite Bricks", "Ice Bricks", "Dark Red Stone", "Dark Red Brick"],
              ["White Chalk", "Orange Chalk", "Magenta Chalk", "Light Blue Chalk", "Yellow Chalk", "Lime Chalk", "Pink Chalk", "Gray Chalk", "Light Gray Chalk", "Cyan Chalk", "Purple Chalk", "Blue Chalk", "Brown Chalk", "Green Chalk", "Red Chalk", "Black Chalk"]
            ],
            fm = [];
          for (const am of Tm) {
            const mm = [];
            for (const Tm of am) mm.push({
              name: Tm,
              frequency: 1,
              amount: {
                min: 10,
                max: 25
              }
            });
            fm.push(...Cm(mm, 1))
          }
          const hm = ["Super Compressed Messy Stone", "Hyper Compressed Messy Stone", "Ultra Compressed Messy Stone"],
            Am = [];
          for (const am of hm) Am.push({
            name: am,
            frequency: 1,
            amount: {
              min: 1,
              max: 1
            }
          });
          return [...Cm(fm, .999 * mm), ...Cm(Am, .001 * mm)]
        }

        function Wm(mm, Tm) {
          return Cm([{
            name: `${mm} Pickaxe`,
            frequency: 1,
            amount: null
          }, {
            name: `${mm} Axe`,
            frequency: .9,
            amount: null
          }, {
            name: `${mm} Spade`,
            frequency: .7,
            amount: null
          }, {
            name: `${mm} Hoe`,
            frequency: .2,
            amount: null
          }], Tm)
        }

        function Fm(mm, Tm) {
          if (Tm < 0 || Tm > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${Tm}`);
          const fm = [{
              name: "Arrow",
              frequency: 1 - Tm,
              amount: {
                min: 15,
                max: 25
              }
            }],
            hm = ["Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Instant Damage"],
            Am = [];
          for (const am of hm) Am.push({
            name: am,
            frequency: 1,
            amount: {
              min: 10,
              max: 15
            }
          });
          return fm.push(...Cm(Am, Tm)), Cm(fm, mm)
        }

        function mT(mm, Tm) {
          return Cm([{
            name: `${mm} Sword`,
            frequency: .75,
            amount: null
          }, {
            name: `${mm} Bow`,
            frequency: .6,
            amount: null
          }, {
            name: `${mm} Crossbow`,
            frequency: .15,
            amount: null
          }, ...Fm(1, {
            [rm.WOOD]: .05,
            [rm.STONE]: .1,
            [rm.IRON]: .3,
            [rm.GOLD]: .5,
            [rm.DIAMOND]: .7
          } [mm])], Tm)
        }

        function TT(mm, Tm) {
          if (mm === rm.STONE) throw new Error(`${mm} armour is not supported`);
          const fm = [{
              name: `${mm} Helmet`,
              frequency: 1,
              amount: null
            }, {
              name: `${mm} Chestplate`,
              frequency: 1,
              amount: null
            }, {
              name: `${mm} Gauntlets`,
              frequency: 1,
              amount: null
            }, {
              name: `${mm} Leggings`,
              frequency: 1,
              amount: null
            }, {
              name: `${mm} Boots`,
              frequency: 1,
              amount: null
            }],
            hm = [...mT(mm, 1), ...Cm(fm, 1.5)];
          return Cm(hm, Tm)
        }
        const fT = {
          [Rm.h.COMMON]: new ym({
            enchantmentTier: "Tier 1",
            enchantmentProbability: 1,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: Lm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Um(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: dm(1)
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...Wm(rm.WOOD, 1), ...Wm(rm.STONE, 1), ...TT(rm.WOOD, 1), ...mT(rm.STONE, 1)]
            }, {
              minItems: 1,
              maxItems: 2,
              items: [sm]
            }]
          }),
          [Rm.h.UNCOMMON]: new ym({
            enchantmentTier: "Tier 2",
            enchantmentProbability: .9,
            itemCategories: [{
              minItems: 1,
              maxItems: 2,
              items: Lm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Um(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...dm(2), ...gm(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...Wm(rm.STONE, 1), ...Wm(rm.IRON, 1), ...mT(rm.STONE, 1), ...TT(rm.IRON, 1)]
            }, {
              minItems: 2,
              maxItems: 3,
              items: [sm, lm]
            }]
          }),
          [Rm.h.RARE]: new ym({
            enchantmentTier: "Tier 3",
            enchantmentProbability: .75,
            itemCategories: [{
              minItems: 2,
              maxItems: 3,
              items: Lm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: tm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Um(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: [...gm(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...Wm(rm.IRON, 1), ...Wm(rm.GOLD, 1), ...TT(rm.IRON, 1), ...TT(rm.GOLD, 1)]
            }, {
              minItems: 2,
              maxItems: 4,
              items: [sm, lm, Mm, Bm]
            }]
          }),
          [Rm.h.EPIC]: new ym({
            enchantmentTier: "Tier 4",
            enchantmentProbability: .6,
            itemCategories: [{
              minItems: 3,
              maxItems: 4,
              items: Lm(1)
            }, {
              minItems: 1,
              maxItems: 2,
              items: tm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: Um(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...gm(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...Wm(rm.GOLD, 1), ...Wm(rm.DIAMOND, 1), ...TT(rm.GOLD, 1), ...TT(rm.DIAMOND, 1), ...Cm([{
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
              items: [Mm, um, Bm]
            }]
          }),
          [Rm.h.LEGENDARY]: new ym({
            enchantmentTier: "Tier 5",
            enchantmentProbability: .5,
            itemCategories: [{
              minItems: 4,
              maxItems: 5,
              items: Lm(1)
            }, {
              minItems: 2,
              maxItems: 3,
              items: [...gm(1)]
            }, {
              minItems: 3,
              maxItems: 4,
              items: [...Wm(rm.DIAMOND, 1), ...TT(rm.DIAMOND, 2), ...Cm([{
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
              items: [Mm, um, {
                name: "Moonstone",
                frequency: 1,
                amount: {
                  min: 2,
                  max: 4
                }
              }, Bm]
            }, {
              minItems: 1,
              maxItems: 1,
              items: (hT = 1, Cm([{
                name: "Caught Mob Spirit_Golem Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Hm("Spirit Golem")
              }, {
                name: "Caught Mob Spirit_Wolf Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Hm("Spirit Wolf")
              }, {
                name: "Caught Mob Spirit_Bear Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Hm("Spirit Bear")
              }, {
                name: "Caught Mob Spirit_Stag Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Hm("Spirit Stag")
              }, {
                name: "Caught Mob Spirit_Gorilla Default",
                frequency: 1,
                amount: null,
                itemAttributesDistribution: new Hm("Spirit Gorilla")
              }], hT))
            }, {
              minItems: 2,
              maxItems: 3,
              items: function(mm) {
                return Cm([{
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
                }], mm)
              }(1)
            }]
          })
        };
        var hT;
        class AT {
          constructor(mm, Tm, fm, hm, Am, am) {
            this.lootChestBlockId = mm, this.seed = Tm, this.x = fm, this.y = hm, this.z = Am, this.chestQuality = am, this.lootChestInventoryDistribution = void 0, this.lootChestInventoryDistribution = fT[am]
          }
          getBlockId() {
            return this.lootChestBlockId
          }
          generate() {
            const mm = new Em.k(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
              Tm = this.lootChestInventoryDistribution.sample(mm);
            return {
              data: {
                persisted: {
                  chestStr: (0, Rm.A)(Tm),
                  lootQuality: this.chestQuality
                }
              },
              persisted: !0
            }
          }
        }
        class aT {
          constructor(mm) {
            this.seed = void 0, this.MO = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCentrePointGeneratorPerDensityPerType = void 0;
            const {
              seed: Tm,
              MO: fm,
              blockMetadata: hm,
              itemMetadata: xm,
              prefabSize: wm,
              typeSettings: Dm
            } = mm;
            aT.BLOCK_ID_MAPPINGS || (aT.BLOCK_ID_MAPPINGS = new Jm(hm)), Gm || (Gm = new Om(xm)), this.seed = Tm, this.MO = fm, this.invisibleSolidBlockId = hm["Invisible Solid"].id, this.emptySpawnerBlockId = hm["Empty Spawner Block"].id, this.chestToLootChestBlockId = new im.c({
              [hm.Chest.id]: hm["Loot Chest"].id,
              [hm["Chest|meta|rot2"].id]: hm["Loot Chest|meta|rot2"].id,
              [hm["Chest|meta|rot3"].id]: hm["Loot Chest|meta|rot3"].id,
              [hm["Chest|meta|rot4"].id]: hm["Loot Chest|meta|rot4"].id
            }, "number");
            const Rm = {};
            for (const Am of am.r) Rm[Am] = hm[`${Am} Spawner Block`].id;
            this.mobTypeToSpawnerBlockId = Rm, this.defaultSpawnerBlockId = this.mobTypeToSpawnerBlockId[aT.DEFAULT_MOB_TYPE], this.prefabRadius = Math.ceil(wm / 2);
            const pm = {};
            for (const am in Dm) {
              const mm = Number(am);
              pm[mm] = {};
              const {
                densitySettings: hm
              } = Dm[mm];
              for (const am in hm) {
                const xm = Number(am),
                  wm = hm[xm];
                let Dm = null;
                if (null !== wm) {
                  const hm = Math.ceil(400 / wm.minDistanceBetweenPrefabs);
                  Dm = new Am.d(`prefab|${mm}|${xm}`, wm.minDistanceBetweenPrefabs, !1, !0, Tm, hm, fm, null, !0)
                }
                pm[mm][xm] = Dm
              }
            }
            this.prefabCentrePointGeneratorPerDensityPerType = pm
          }
          static isWithinPrefabClearing(mm, Tm, fm) {
            for (const hm of fm) {
              if ((mm - hm.centreX) ** 2 + (Tm - hm.centreZ) ** 2 < hm.prefab.clearingRadiusSquared) return !0
            }
            return !1
          }
          prefabRandomAt(mm, Tm) {
            return new Em.k(`${mm}|${Tm}|${this.seed}|prefabGenerator`)
          }
          getLootPrefabCentres(mm, Tm, fm, hm, Am) {
            const am = [];
            for (const xm in this.prefabCentrePointGeneratorPerDensityPerType) {
              const wm = Number(xm),
                Dm = this.prefabCentrePointGeneratorPerDensityPerType[wm];
              for (const xm in Dm) {
                const im = Number(xm),
                  Rm = Dm[im];
                if (null === Rm) continue;
                const pm = Rm.gridSize;
                for (let xm = Math.floor(mm / pm); xm <= Math.floor((fm - 1) / pm); xm++)
                  for (let Dm = Math.floor(Tm / pm); Dm <= Math.floor((hm - 1) / pm); Dm++)
                    for (const [pm, Em] of Rm.getCell(xm, Dm).points) {
                      if (pm < mm || pm >= fm || Em < Tm || Em >= hm) continue;
                      const xm = Am.generate(pm, Em)[0].biome.getRandomPrefab(this.prefabRandomAt(pm, Em), wm, im);
                      null !== xm && xm.chestLocations.length > 0 && am.push({
                        x: pm,
                        z: Em,
                        prefab: xm
                      })
                    }
              }
            }
            return am
          }
          getPrefabsForChunk(mm, Tm, fm, hm, Am, xm, wm) {
            const Dm = [],
              im = this.MO >> 1,
              Rm = mm - this.prefabRadius,
              Em = mm + this.MO + this.prefabRadius,
              om = Tm - this.prefabRadius,
              Om = Tm + this.MO + this.prefabRadius;
            for (const Ym in this.prefabCentrePointGeneratorPerDensityPerType) {
              const qm = Number(Ym),
                jm = this.prefabCentrePointGeneratorPerDensityPerType[qm];
              for (const Ym in jm) {
                const Vm = Number(Ym),
                  Im = jm[Vm];
                if (null === Im) continue;
                if (qm === am.n.SURFACE && Vm === am.m.VERY_HIGH && !wm.regionMayHaveVeryHighSurfacePrefabs(Rm, om, Em, Om)) continue;
                const Km = Im.getPointsAroundPoint(mm + im, Tm + im);
                for (const mm of Km) {
                  const Tm = mm[0],
                    wm = mm[1];
                  if (Tm < Rm || Tm >= Em || wm < om || wm >= Om) continue;
                  const im = hm.getOrGenerate(Tm, wm)[0].biome,
                    Ym = this.prefabRandomAt(Tm, wm),
                    jm = im.getRandomPrefab(Ym, qm, Vm);
                  if (null === jm) continue;
                  if (qm === am.n.SURFACE && !im.canPlaceSurfacePrefab(Tm, wm)) continue;
                  const Im = jm.transformationsEnabled ? em.sample(Ym) : 0,
                    Km = !!jm.transformationsEnabled && Nm.sample(Ym);
                  let Qm = null,
                    nm = null,
                    Jm = Km;
                  switch (Im) {
                    case 0:
                      break;
                    case 90:
                      Qm = jm.dimensionX - 1, Jm = !Jm;
                      break;
                    case 180:
                      Qm = jm.dimensionX - 1, nm = jm.dimensionZ - 1;
                      break;
                    case 270:
                      nm = jm.dimensionZ - 1, Jm = !Jm;
                      break;
                    default:
                      console.error(`Invalid prefab rotation: ${Im}`)
                  }
                  const cm = {
                      centreX: Tm,
                      centreZ: wm,
                      anchorX: Tm - (jm.dimensionX >> 1),
                      anchorZ: wm - (jm.dimensionZ >> 1),
                      prefab: jm,
                      xRotationOffset: Qm,
                      zRotationOffset: nm,
                      shouldSwapXZ: Jm
                    },
                    {
                      anchorY: zm,
                      isOnSolidGround: Zm
                    } = this.getPrefabGroundingInfo(cm, Ym, fm, Am, xm);
                  if (!Zm) continue;
                  if (qm === am.n.SURFACE && null !== im.maxSurfacePrefabRelief) {
                    const mm = cm.shouldSwapXZ ? jm.dimensionZ : jm.dimensionX,
                      hm = cm.shouldSwapXZ ? jm.dimensionX : jm.dimensionZ;
                    if (aT.footprintRelief(Tm, wm, mm, hm, fm) > im.maxSurfacePrefabRelief) continue
                  }
                  const km = Math.ceil(Math.sqrt(jm.dimensionX * jm.dimensionX + jm.dimensionZ * jm.dimensionZ) / 2);
                  if (!im.allowsPrefab(Tm, wm, km, zm, zm + jm.dimensionY - 1)) continue;
                  const bm = new pm.c;
                  for (const mm of jm.chestLocations) {
                    const Tm = DT(cm, mm.localX, mm.localZ),
                      fm = iT(cm, mm.localX, mm.localZ),
                      hm = zm + mm.localY,
                      Am = mm.qualityDistribution.sample(Ym);
                    bm.set(Tm, hm, fm, Am)
                  }
                  const Sm = new pm.c;
                  for (const mm of jm.spawnerBlockLocations) {
                    const Tm = DT(cm, mm.localX, mm.localZ),
                      fm = iT(cm, mm.localX, mm.localZ),
                      hm = zm + mm.localY,
                      Am = mm.mobTypeDistribution.sample(Ym),
                      am = this.mobTypeToSpawnerBlockId[Am];
                    Sm.set(Tm, hm, fm, am)
                  }
                  let Gm = null;
                  (0 !== Im || Km) && (Gm = aT.BLOCK_ID_MAPPINGS.getBlockIdMapping(Im, Km)), Dm.push({
                    ...cm,
                    anchorY: zm,
                    chestLocationToQuality: bm,
                    spawnerBlockLocationToBlockId: Sm,
                    blockIdMapping: Gm,
                    decodedPrefabSchematic: this.getDecodedPrefabSchematic(jm)
                  })
                }
              }
            }
            return Dm
          }
          static footprintRelief(mm, Tm, fm, hm, Am) {
            let xm = 1 / 0,
              wm = -1 / 0;
            const Dm = fm >> 1,
              im = hm >> 1;
            for (let Rm = -Dm; Rm <= Dm; Rm += Math.max(1, Dm))
              for (let fm = -im; fm <= im; fm += Math.max(1, im)) {
                const hm = Am.getOrGenerate(mm + Rm, Tm + fm, am.g.GroundHeight);
                xm = Math.min(xm, hm), wm = Math.max(wm, hm)
              }
            return wm - xm
          }
          getPrefabGroundingInfo(mm, Tm, fm, hm, Am) {
            const am = mm.prefab,
              xm = mm.centreX,
              wm = mm.centreZ,
              Dm = [];
            if ("centre" === am.groundingPoints) Dm.push([xm, wm]);
            else
              for (const pm of am.groundingPoints) {
                const Tm = DT(mm, pm.localX, pm.localZ),
                  fm = iT(mm, pm.localX, pm.localZ);
                Dm.push([Tm, fm])
              }
            let im;
            const Rm = am.undergroundYInterval;
            if (null !== Rm) {
              const {
                Dm: mm,
                im: fm
              } = Rm;
              im = this.getCaveGroundingInfoFromGroundingPoints(Dm, am.groundingRadius, Tm, mm, fm, hm)
            } else im = this.getSurfaceGroundingInfoFromGroundingPoints(Dm, am.groundingRadius, fm, hm, Am);
            return im.anchorY += am.yOffset, im
          }
          getSurfaceGroundingInfoFromGroundingPoints(mm, Tm, fm, hm, Am) {
            let wm = 1e4;
            for (const im of mm) {
              const mm = im[0],
                Rm = im[1];
              for (let im = mm - Tm; im < mm + Tm; im++)
                for (let mm = Rm - Tm; mm < Rm + Tm; mm++) {
                  if (fm.getOrGenerate(im, mm, am.g.WaterHeight) !== xm.p) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  const Tm = fm.getOrGenerate(im, mm, am.g.GroundHeight);
                  if (Dm.d.isInCave(im, Tm, mm, hm)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  if (Zm.e.isNearFixedPointPrefab(im, mm, Am)) return {
                    anchorY: -1e4,
                    isOnSolidGround: !1
                  };
                  wm = Math.min(wm, Tm)
                }
            }
            return {
              anchorY: wm,
              isOnSolidGround: !0
            }
          }
          getCaveGroundingInfoFromGroundingPoints(mm, Tm, fm, hm, Am, am) {
            const xm = [];
            for (const Dm of mm) {
              const mm = Dm[0],
                fm = Dm[1];
              for (let hm = mm - Tm; hm < mm + Tm; hm++)
                for (let mm = fm - Tm; mm < fm + Tm; mm++) km(hm, mm, am, !1, xm)
            }

            function wm(mm, Tm) {
              return Math.floor(fm.next() * (Tm - mm + 1)) + mm
            }
            if (0 === xm.length) return {
              anchorY: wm(hm, Am),
              isOnSolidGround: !0
            };
            if (function(mm, Tm, fm) {
                for (let hm = 0; hm < mm.length; hm++) {
                  const Am = mm[hm];
                  (Am.floorY < Tm || Am.floorY > fm) && (mm.splice(hm, 1), hm--)
                }
              }(xm, hm, Am), 0 === xm.length) return {
              anchorY: -1e4,
              isOnSolidGround: !1
            };
            return {
              anchorY: xm[wm(0, xm.length - 1)].floorY,
              isOnSolidGround: !0
            }
          }
          getBlockFromPrefabAtPoint(mm, Tm, fm, hm, Am) {
            var am, xm;
            let wm = this.getPrefabBlock(mm, Tm, fm, hm);
            if (0 === wm) return wm;
            var Dm;
            if (wm === this.emptySpawnerBlockId && (wm = null !== (Dm = hm.spawnerBlockLocationToBlockId.get(mm, Tm, fm)) && void 0 !== Dm ? Dm : this.defaultSpawnerBlockId), wm < 0) return wm;
            if (wm = null !== (am = null === (xm = hm.blockIdMapping) || void 0 === xm ? void 0 : xm[wm]) && void 0 !== am ? am : wm, void 0 !== this.chestToLootChestBlockId.reverseGet(wm)) {
              var im;
              const am = null !== (im = hm.chestLocationToQuality.get(mm, Tm, fm)) && void 0 !== im ? im : aT.DEFAULT_CHEST_QUALITY,
                xm = new AT(wm, this.seed, mm, Tm, fm, am);
              Am.set(mm, Tm, fm, xm)
            }
            return wm
          }
          getPrefabBlock(mm, Tm, fm, hm) {
            const Am = hm.prefab,
              am = Tm - hm.anchorY;
            if (am < 0 || am >= Am.dimensionY) return 0;
            const xm = function(mm, Tm, fm) {
                if (mm.shouldSwapXZ) return wT(mm, fm);
                return xT(mm, Tm)
              }(hm, mm, fm),
              wm = function(mm, Tm, fm) {
                if (mm.shouldSwapXZ) return xT(mm, Tm);
                return wT(mm, fm)
              }(hm, mm, fm);
            return xm < 0 || xm >= Am.dimensionX || wm < 0 || wm >= Am.dimensionZ ? 0 : hm.decodedPrefabSchematic.get(xm, am, wm)
          }
          getDecodedPrefabSchematic(mm) {
            const Tm = aT.DECODED_PREFAB_SCHEMATIC_CACHE.get(mm.schematic);
            if (void 0 !== Tm) return Tm;
            const {
              dimensionX: fm,
              dimensionY: hm,
              dimensionZ: Am
            } = mm, am = zm()(new Int32Array(fm * hm * Am), [fm, hm, Am]), xm = new pm.c;
            for (const wm of mm.chestLocations) xm.set(wm.localX, wm.localY, wm.localZ, !0);
            const Dm = new pm.c;
            for (const wm of mm.spawnerBlockLocations) Dm.set(wm.localX, wm.localY, wm.localZ, !0);
            for (let im = 0; im < fm; im += Rm.x)
              for (let Tm = 0; Tm < hm; Tm += Rm.x)
                for (let pm = 0; pm < Am; pm += Rm.x) {
                  const Em = zm()(new Uint16Array(Rm.x * Rm.x * Rm.x), [Rm.x, Rm.x, Rm.x]),
                    om = mm.schematic.getRLEChunk((0, Rm.M)(im), (0, Rm.M)(Tm), (0, Rm.M)(pm));
                  wm.decode(om, Em.data);
                  const Om = Math.min(Rm.x, fm - im),
                    Ym = Math.min(Rm.x, hm - Tm),
                    qm = Math.min(Rm.x, Am - pm);
                  for (let fm = 0; fm < Om; fm++)
                    for (let hm = 0; hm < Ym; hm++)
                      for (let Am = 0; Am < qm; Am++) {
                        let wm = Em.get(fm, hm, Am);
                        const Rm = im + fm,
                          om = Tm + hm,
                          Om = pm + Am;
                        if (this.invisibleSolidBlockId === wm) wm = Xm.GUARANTEED_AIR;
                        else if (this.emptySpawnerBlockId === wm) Dm.get(Rm, om, Om) || console.error(`Empty spawner block found in prefab ${mm.schematic.name} at (${Rm}, ${om}, ${Om}) with no mob type specified. Defaulting to "${aT.DEFAULT_MOB_TYPE}" mob type.`);
                        else {
                          const Tm = this.chestToLootChestBlockId.get(wm);
                          void 0 !== Tm && (xm.get(Rm, om, Om) || console.error(`Chest found in prefab ${mm.schematic.name} at (${Rm}, ${om}, ${Om}) with no quality specified. Defaulting to "${aT.DEFAULT_CHEST_QUALITY}" quality.`), wm = Tm)
                        }
                        am.set(Rm, om, Om, wm)
                      }
                }
            return aT.DECODED_PREFAB_SCHEMATIC_CACHE.set(mm.schematic, am), am
          }
        }

        function xT(mm, Tm) {
          let fm = Tm - mm.anchorX;
          return null !== mm.xRotationOffset && (fm = mm.xRotationOffset - fm), fm
        }

        function wT(mm, Tm) {
          let fm = Tm - mm.anchorZ;
          return null !== mm.zRotationOffset && (fm = mm.zRotationOffset - fm), fm
        }

        function DT(mm, Tm, fm) {
          return function(mm, Tm) {
            null !== mm.xRotationOffset && (Tm = mm.xRotationOffset - Tm);
            return Tm + mm.anchorX
          }(mm, mm.shouldSwapXZ ? fm : Tm)
        }

        function iT(mm, Tm, fm) {
          return function(mm, Tm) {
            null !== mm.zRotationOffset && (Tm = mm.zRotationOffset - Tm);
            return Tm + mm.anchorZ
          }(mm, mm.shouldSwapXZ ? Tm : fm)
        }
        aT.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, aT.BLOCK_ID_MAPPINGS = void 0, aT.DEFAULT_MOB_TYPE = "Draugr Zombie", aT.DEFAULT_CHEST_QUALITY = Rm.h.COMMON;
        var RT = function(mm) {
            return mm[mm.STANDARD = 0] = "STANDARD", mm[mm.FRILLED = 1] = "FRILLED", mm[mm.TALL = 2] = "TALL", mm[mm.FLAT = 3] = "FLAT", mm[mm.DROOPY = 4] = "DROOPY", mm
          }(RT || {}),
          pT = function(mm) {
            return mm[mm.TOP = 0] = "TOP", mm[mm.UPPER_MIDDLE = 1] = "UPPER_MIDDLE", mm[mm.MIDDLE = 2] = "MIDDLE", mm[mm.LOWER_MIDDLE = 3] = "LOWER_MIDDLE", mm[mm.BOTTOM = 4] = "BOTTOM", mm
          }(pT || {}),
          ET = function(mm) {
            return mm[mm.CIRCLE = 0] = "CIRCLE", mm[mm.DIAMOND = 1] = "DIAMOND", mm
          }(ET || {}),
          oT = function(mm) {
            return mm[mm.ALWAYS = 0] = "ALWAYS", mm[mm.SOMETIMES = 1] = "SOMETIMES", mm[mm.NEVER = 2] = "NEVER", mm
          }(oT || {});
        class OT {
          static initCanopyGenerationSchemaByShape(mm, Tm, fm, hm) {
            return this.initCanopyGenerationSchemaByFunction(fm, ((fm, Am) => {
              const am = hm === ET.CIRCLE ? Math.sqrt(fm * fm + Am * Am) : Math.max(Math.abs(fm - Am), Math.abs(fm + Am));
              return am < mm ? oT.ALWAYS : am < Tm ? oT.SOMETIMES : oT.NEVER
            }))
          }
          static initCanopyGenerationSchemaByFunction(mm, Tm) {
            const fm = new hm.f(2 * mm + 1, [-mm, -mm]);
            for (let hm = -mm; hm <= mm; hm++)
              for (let Am = -mm; Am <= mm; Am++) {
                const mm = Tm(hm, Am);
                fm.set(hm, Am, mm)
              }
            return fm
          }
          constructor(mm, Tm, fm, hm, am) {
            this.MO = fm, this.seed = hm, this.blockMetadata = am, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
            const xm = 1 / 30;
            if (this.treeInfos = {
                [Rm.u.Maple]: {
                  trunkBlockId: am["Maple Log"].id,
                  trunkBaseId: am["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: am["Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Fruity Maple Leaves"].id,
                  canopyType: RT.STANDARD,
                  vineProbability: xm
                },
                [Rm.u.Pine]: {
                  trunkBlockId: am["Pine Log"].id,
                  trunkBaseId: am["Pine Log|TreeBase|Pine"].id,
                  canopyLeavesId: am["Pine Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Pine Cone Leaves"].id,
                  canopyType: RT.FRILLED,
                  vineProbability: 0,
                  minHeight: 5,
                  maxHeight: 7
                },
                [Rm.u.Plum]: {
                  trunkBlockId: am["Plum Log"].id,
                  trunkBaseId: am["Plum Log|TreeBase|Plum"].id,
                  canopyLeavesId: am["Plum Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Fruity Plum Leaves"].id,
                  canopyType: RT.STANDARD,
                  vineProbability: xm
                },
                [Rm.u.Cedar]: {
                  trunkBlockId: am["Cedar Log"].id,
                  trunkBaseId: am["Cedar Log|TreeBase|Cedar"].id,
                  canopyLeavesId: am["Cedar Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.STANDARD,
                  vineProbability: xm
                },
                [Rm.u.Aspen]: {
                  trunkBlockId: am["Aspen Log"].id,
                  trunkBaseId: am["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: am["Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.FRILLED,
                  vineProbability: xm,
                  minHeight: 5,
                  maxHeight: 6
                },
                [Rm.u.Jungle]: {
                  trunkBlockId: am["Jungle Log"].id,
                  trunkBaseId: am["Jungle Log|TreeBase|Jungle"].id,
                  canopyLeavesId: am["Jungle Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.FLAT,
                  vineProbability: .5,
                  minHeight: 2,
                  maxHeight: 7
                },
                [Rm.u.Palm]: {
                  trunkBlockId: am["Palm Log"].id,
                  trunkBaseId: am["Palm Log|TreeBase|Palm"].id,
                  canopyLeavesId: am["Palm Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Fruity Palm Leaves"].id,
                  canopyType: RT.DROOPY,
                  vineProbability: 1 / 3,
                  minHeight: 4,
                  maxHeight: 6
                },
                [Rm.u.AutumnMaple]: {
                  trunkBlockId: am["Maple Log"].id,
                  trunkBaseId: am["Maple Log|TreeBase|Maple"].id,
                  canopyLeavesId: am["Autumn Maple Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.STANDARD,
                  vineProbability: xm
                },
                [Rm.u.Pear]: {
                  trunkBlockId: am["Pear Log"].id,
                  trunkBaseId: am["Pear Log|TreeBase|Pear"].id,
                  canopyLeavesId: am["Pear Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Fruity Pear Leaves"].id,
                  canopyType: RT.TALL,
                  vineProbability: xm,
                  minHeight: 3,
                  maxHeight: 5
                },
                [Rm.u.Cherry]: {
                  trunkBlockId: am["Cherry Log"].id,
                  trunkBaseId: am["Cherry Log|TreeBase|Cherry"].id,
                  canopyLeavesId: am["Cherry Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Fruity Cherry Leaves"].id,
                  canopyType: RT.DROOPY,
                  vineProbability: 0,
                  minHeight: 4,
                  maxHeight: 6
                },
                [Rm.u.Spectral]: {
                  trunkBlockId: am["Spectral Log"].id,
                  trunkBaseId: am["Spectral Log|TreeBase|Spectral"].id,
                  canopyLeavesId: am["Spectral Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.STANDARD,
                  vineProbability: 0
                },
                [Rm.u.Mango]: {
                  trunkBlockId: am["Mango Log"].id,
                  trunkBaseId: am["Mango Log|TreeBase|Mango"].id,
                  canopyLeavesId: am["Mango Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: am["Fruity Mango Leaves"].id,
                  canopyType: RT.TALL,
                  vineProbability: .2,
                  minHeight: 3,
                  maxHeight: 6
                },
                [Rm.u.AutumnAspen]: {
                  trunkBlockId: am["Aspen Log"].id,
                  trunkBaseId: am["Aspen Log|TreeBase|Aspen"].id,
                  canopyLeavesId: am["Autumn Aspen Leaves|TreeCanopy"].id,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.FRILLED,
                  vineProbability: xm,
                  minHeight: 5,
                  maxHeight: 6
                },
                [Rm.u.Dead]: {
                  trunkBlockId: am["Barkless Maple Log"].id,
                  trunkBaseId: am["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 7
                },
                [Rm.u.FallenLog]: {
                  trunkBlockId: am["Barkless Maple Log"].id,
                  trunkBaseId: am["Barkless Maple Log"].id,
                  canopyLeavesId: 0,
                  canopyLeavesWithDropId: null,
                  canopyType: RT.STANDARD,
                  vineProbability: 0,
                  minHeight: 3,
                  maxHeight: 6
                }
              }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((mm => am[mm].id)), this.maxTreeRadius = mm.maxTreeRadius, this.MO <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk size");
            if (this.MO <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
            this.canopyInfos = {
              [RT.STANDARD]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [pT.TOP]: OT.initCanopyGenerationSchemaByShape(.2, 1.1, 2, ET.CIRCLE),
                  [pT.UPPER_MIDDLE]: null,
                  [pT.MIDDLE]: OT.initCanopyGenerationSchemaByShape(1.2, 1.7, 2, ET.CIRCLE),
                  [pT.LOWER_MIDDLE]: null,
                  [pT.BOTTOM]: OT.initCanopyGenerationSchemaByShape(2.8, 3, 2, ET.CIRCLE)
                }
              },
              [RT.FRILLED]: {
                canopyBottomOffset: -3,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [pT.TOP]: OT.initCanopyGenerationSchemaByShape(.1, .1, 2, ET.CIRCLE),
                  [pT.UPPER_MIDDLE]: OT.initCanopyGenerationSchemaByShape(2, 2, 2, ET.DIAMOND),
                  [pT.MIDDLE]: null,
                  [pT.LOWER_MIDDLE]: OT.initCanopyGenerationSchemaByShape(3, 3, 2, ET.DIAMOND),
                  [pT.BOTTOM]: OT.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, ET.CIRCLE)
                }
              },
              [RT.TALL]: {
                canopyBottomOffset: -1,
                canopyTopOffset: 2,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [pT.TOP]: OT.initCanopyGenerationSchemaByShape(.8, 2, 2, ET.DIAMOND),
                  [pT.UPPER_MIDDLE]: OT.initCanopyGenerationSchemaByShape(1.7, 1.7, 2, ET.CIRCLE),
                  [pT.MIDDLE]: null,
                  [pT.LOWER_MIDDLE]: OT.initCanopyGenerationSchemaByShape(1.7, 2.2, 2, ET.CIRCLE),
                  [pT.BOTTOM]: OT.initCanopyGenerationSchemaByShape(2.8, 2.8, 2, ET.CIRCLE)
                }
              },
              [RT.FLAT]: {
                canopyBottomOffset: 0,
                canopyTopOffset: 1,
                radius: 3,
                canopyLevelToGenerationSchema: {
                  [pT.TOP]: OT.initCanopyGenerationSchemaByShape(2.2, 2.5, 3, ET.CIRCLE),
                  [pT.UPPER_MIDDLE]: OT.initCanopyGenerationSchemaByFunction(3, ((mm, Tm) => {
                    if (Math.sqrt(mm * mm + Tm * Tm) > 3.2) return oT.NEVER;
                    const fm = Math.abs(mm),
                      hm = Math.abs(Tm);
                    return 1 === fm && 3 === hm || 3 === fm && 1 === hm ? oT.SOMETIMES : oT.ALWAYS
                  })),
                  [pT.MIDDLE]: null,
                  [pT.LOWER_MIDDLE]: null,
                  [pT.BOTTOM]: null
                }
              },
              [RT.DROOPY]: {
                canopyBottomOffset: -2,
                canopyTopOffset: 1,
                radius: 2,
                canopyLevelToGenerationSchema: {
                  [pT.TOP]: OT.initCanopyGenerationSchemaByShape(2, 2, 2, ET.CIRCLE),
                  [pT.UPPER_MIDDLE]: OT.initCanopyGenerationSchemaByShape(2.2, 2.8, 2, ET.CIRCLE),
                  [pT.MIDDLE]: null,
                  [pT.LOWER_MIDDLE]: OT.initCanopyGenerationSchemaByFunction(2, ((mm, Tm) => 2 === Math.abs(mm) && 2 === Math.abs(Tm) ? oT.SOMETIMES : oT.ALWAYS)),
                  [pT.BOTTOM]: OT.initCanopyGenerationSchemaByFunction(2, ((mm, Tm) => {
                    const fm = Math.abs(mm),
                      hm = Math.abs(Tm);
                    return 2 === fm && 2 === hm || 0 === fm && 1 === hm || 1 === fm && 0 === hm ? oT.ALWAYS : oT.NEVER
                  }))
                }
              }
            };
            for (const Am in this.canopyInfos) {
              const mm = this.canopyInfos[Am];
              if (mm.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${mm.radius} for canopy type "${Am}" is larger than tree radius ${this.maxTreeRadius}`)
            }
            let wm = 1e5,
              Dm = 0;
            for (const Am of mm.biomeSelector.Sm) Am.biome.treeMinDist && (wm = Math.min(wm, Am.biome.treeMinDist), Dm = Math.max(Dm, Am.biome.treeMinDist));
            this.treePointGen = new Am.d("tree", 6, !0, !1, hm, 300, fm, {
              func: mm => Tm.getBiome(mm[0], mm[1]).biome.treeMinDist || Dm,
              min: wm,
              max: Dm
            }, !1, 2)
          }
          getTreesForChunk(mm, Tm, fm, hm, Am, wm, im) {
            const pm = [];
            for (let om = mm - this.maxTreeRadius; om < mm + this.MO + this.maxTreeRadius; om++)
              for (let mm = Tm - this.maxTreeRadius; mm < Tm + this.MO + this.maxTreeRadius; mm++) {
                const Tm = hm.getOrGenerate(om, mm)[0].biome;
                if (null !== Tm.treeMinDist) {
                  if (Tm.getTotalTreeChance() <= 0 && console.error("Biome", Tm, "has 0 total tree chance"), !this.treePointGen.isPoint(om, mm)) continue;
                  if (fm.getOrGenerate(om, mm, am.g.WaterHeight) !== xm.p) continue;
                  const hm = fm.getOrGenerate(om, mm, am.g.GroundHeight);
                  if (Dm.d.isInCave(om, hm, mm, Am)) continue;
                  if (aT.isWithinPrefabClearing(om, mm, wm)) continue;
                  if (Zm.e.isNearFixedPointPrefab(om, mm, im)) continue;
                  const Om = new Em.k(`${om}${mm}${this.seed}treeHeight`),
                    Ym = OT.getTreeTypeFromBiome(Tm, Om);
                  let {
                    height: qm,
                    vineDir: jm
                  } = this.getRandTreeInfo(Om, Ym);
                  if (Ym === Rm.u.FallenLog) {
                    jm = Om.next() < .5 ? 0 : 1;
                    for (let Tm = -1; Tm < qm - 1; Tm++) {
                      if (fm.getOrGenerate(0 === jm ? om + Tm : om, 0 === jm ? mm : mm + Tm, am.g.GroundHeight) !== hm) {
                        qm = 1;
                        break
                      }
                    }
                  }
                  pm.push({
                    treeX: om,
                    treeZ: mm,
                    trunkBase: hm + 1,
                    height: qm,
                    vineDir: jm,
                    treeType: Ym
                  })
                }
              }
            return pm
          }
          getRandTreeInfo(mm, Tm) {
            var fm, hm;
            const Am = this.treeInfos[Tm],
              am = null !== (fm = Am.minHeight) && void 0 !== fm ? fm : this.minTreeHeight,
              xm = null !== (hm = Am.maxHeight) && void 0 !== hm ? hm : this.maxTreeHeight;
            return {
              height: Math.floor(mm.next() * (xm - am)) + am,
              vineDir: mm.next() < Am.vineProbability ? Math.floor(4 * mm.next()) : -1
            }
          }
          static getTreeTypeFromBiome(mm, Tm) {
            const fm = Math.floor(Tm.next() * mm.getTotalTreeChance());
            let hm = 0,
              Am = 0;
            for (; hm <= fm;) hm += mm.treeChances[Am].chance, Am++;
            return mm.treeChances[Am - 1].treeType
          }
          addTreesToChunk(mm, Tm, fm, hm, Am) {
            for (const am of Am) {
              const Am = new Em.k(`${am.treeX}|${am.treeZ}|${am.trunkBase}|tree`);
              if (am.treeType === Rm.u.Dead || am.treeType === Rm.u.FallenLog) {
                this.addDeadTreeToChunk(mm, Tm, fm, hm, am, Am);
                continue
              }
              const xm = this.addTreeCanopyToChunk(mm, Tm, fm, hm, am, Am);
              this.addTreeTrunkToChunk(mm, Tm, fm, hm, am, xm)
            }
          }
          addDeadTreeToChunk(mm, Tm, fm, hm, Am, am) {
            const xm = this.deadWoodIds[Math.floor(am.next() * this.deadWoodIds.length)],
              {
                treeX: wm,
                treeZ: Dm,
                trunkBase: im,
                height: pm
              } = Am,
              Em = (Am, am, wm) => {
                Am >= Tm && Am < Tm + this.MO && am >= fm && am < fm + this.MO && wm >= hm && wm < hm + this.MO && mm.set(Am - Tm, am - fm, wm - hm, xm)
              };
            if (Am.treeType === Rm.u.FallenLog) {
              if (pm <= 1) return void Em(wm, im, Dm);
              for (let mm = -1; mm < pm - 1; mm++) Em(0 === Am.vineDir ? wm + mm : wm, im, 0 === Am.vineDir ? Dm : Dm + mm);
              return
            }
            for (let Rm = im; Rm < im + pm; Rm++) Em(wm, Rm, Dm);
            const om = pm <= 3 ? 1 : 1 + Math.floor(3 * am.next()),
              Om = im + (pm >> 1);
            for (let Rm = 0; Rm < om; Rm++) {
              const mm = Om + Math.floor(am.next() * (im + pm - Om)),
                Tm = Math.floor(4 * am.next()),
                fm = 0 === Tm ? 1 : 1 === Tm ? -1 : 0,
                hm = 2 === Tm ? 1 : 3 === Tm ? -1 : 0;
              Em(wm + fm, mm, Dm + hm), am.next() < .5 && Em(wm + 2 * fm, mm + (am.next() < .6 ? 1 : 0), Dm + 2 * hm)
            }
            am.next() < .35 && Em(wm, im + pm, Dm)
          }
          addTreeCanopyToChunk(mm, Tm, fm, hm, Am, am) {
            const xm = Am.treeX,
              wm = Am.treeZ,
              Dm = Am.trunkBase,
              im = Dm + Am.height - 1,
              Rm = this.treeInfos[Am.treeType],
              pm = this.canopyInfos[Rm.canopyType],
              Em = Dm + Am.height + pm.canopyBottomOffset,
              om = Dm + Am.height + pm.canopyTopOffset,
              Om = Math.max(Em, fm),
              Ym = Math.min(om, fm + this.MO - 1);
            if (Ym < Om) return Em;
            const qm = Math.max(xm - pm.radius, Tm),
              jm = Math.min(xm + pm.radius, Tm + this.MO - 1);
            if (qm > jm) return Em;
            const Vm = Math.max(wm - pm.radius, hm),
              Im = Math.min(wm + pm.radius, hm + this.MO - 1);
            if (Vm > Im) return Em;
            const Km = Rm.canopyLeavesId,
              Qm = Rm.canopyLeavesWithDropId;
            return Rm.canopyType === RT.FRILLED ? this.addFrilledCanopyToChunk(mm, Tm, fm, hm, xm, wm, qm, jm, Vm, Im, im, Km, Qm, Om, Ym, om, pm.canopyLevelToGenerationSchema, am) : Rm.canopyType === RT.TALL || Rm.canopyType === RT.DROOPY ? this.addTallOrDroopyCanopyToChunk(mm, Tm, fm, hm, xm, wm, qm, jm, Vm, Im, im, Km, Qm, Om, Ym, om, pm.canopyLevelToGenerationSchema, am) : Rm.canopyType === RT.FLAT ? this.addFlatCanopyToChunk(mm, Tm, fm, hm, xm, wm, qm, jm, Vm, Im, im, Km, Qm, Om, Ym, om, pm.canopyLevelToGenerationSchema, am) : this.addStandardCanopyToChunk(mm, Tm, fm, hm, xm, wm, qm, jm, Vm, Im, im, Km, Qm, Om, Ym, om, pm.canopyLevelToGenerationSchema, am), Em
          }
          addStandardCanopyToChunk(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm) {
            for (let Vm = xm; Vm <= wm; Vm++) {
              const xm = Vm - Am;
              for (let Am = om; Am <= Om; Am++) {
                let wm;
                wm = Am === Ym ? pT.TOP : Am === Ym - 1 ? pT.MIDDLE : pT.BOTTOM;
                const om = qm[wm];
                for (let Om = Dm; Om <= im; Om++) {
                  const wm = Om - am;
                  this.applyCanopyGenerationSchema(mm, Tm, fm, hm, Vm, Am, Om, Rm, pm, Em, xm, wm, om, jm)
                }
              }
            }
          }
          addFrilledCanopyToChunk(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm) {
            const Vm = jm.next() < .7;
            for (let Im = xm; Im <= wm; Im++) {
              const xm = Im - Am;
              for (let Am = om; Am <= Om; Am++) {
                const wm = Ym - Am;
                let om;
                if (0 === wm) om = pT.TOP;
                else if (2 === wm) {
                  if (!Vm) continue;
                  om = pT.LOWER_MIDDLE
                } else om = 4 === wm ? pT.BOTTOM : pT.UPPER_MIDDLE;
                const Om = qm[om];
                for (let Ym = Dm; Ym <= im; Ym++) {
                  const wm = Ym - am;
                  this.applyCanopyGenerationSchema(mm, Tm, fm, hm, Im, Am, Ym, Rm, pm, Em, xm, wm, Om, jm)
                }
              }
            }
          }
          addTallOrDroopyCanopyToChunk(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm) {
            for (let Vm = xm; Vm <= wm; Vm++) {
              const xm = Vm - Am;
              for (let Am = om; Am <= Om; Am++) {
                let wm;
                wm = Am === Ym ? pT.TOP : Am === Ym - 1 ? pT.UPPER_MIDDLE : Am === Ym - 2 ? pT.LOWER_MIDDLE : pT.BOTTOM;
                const om = qm[wm];
                for (let Om = Dm; Om <= im; Om++) {
                  const wm = Om - am;
                  this.applyCanopyGenerationSchema(mm, Tm, fm, hm, Vm, Am, Om, Rm, pm, Em, xm, wm, om, jm)
                }
              }
            }
          }
          addFlatCanopyToChunk(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm) {
            for (let Vm = xm; Vm <= wm; Vm++) {
              const xm = Vm - Am;
              for (let Am = om; Am <= Om; Am++) {
                let wm;
                Am === Ym ? wm = pT.TOP : Am === Ym - 1 && (wm = pT.UPPER_MIDDLE);
                const om = qm[wm];
                for (let Om = Dm; Om <= im; Om++) {
                  const wm = Om - am;
                  this.applyCanopyGenerationSchema(mm, Tm, fm, hm, Vm, Am, Om, Rm, pm, Em, xm, wm, om, jm)
                }
              }
            }
          }
          applyCanopyGenerationSchema(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om) {
            if (am <= wm && 0 === Rm && 0 === pm) return;
            let Om;
            const Ym = Em.get(Rm, pm);
            if (Ym === oT.ALWAYS) Om = Dm;
            else {
              if (Ym === oT.NEVER) return;
              if (Ym !== oT.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Ym}`);
              if (!(om.next() < .8)) return;
              Om = Dm
            }
            null !== im && om.next() < 1 / 15 && (Om = im), mm.set(Am - Tm, am - fm, xm - hm, Om)
          }
          addTreeTrunkToChunk(mm, Tm, fm, hm, Am, am) {
            const xm = Tm + this.MO,
              wm = fm + this.MO,
              Dm = hm + this.MO,
              im = Am.treeX,
              Rm = Am.trunkBase,
              pm = Am.treeZ,
              Em = this.treeInfos[Am.treeType],
              om = Tm <= im && im < xm && hm <= pm && pm < Dm,
              Om = fm <= Rm && Rm < wm,
              Ym = Math.max(Rm + 1, fm),
              qm = Math.min(Rm + Am.height, wm) - 1;
            if (am = Math.min(am, wm), om) {
              Om && mm.set(im - Tm, Rm - fm, pm - hm, Em.trunkBaseId);
              for (let Am = Ym; Am <= qm; Am++) mm.set(im - Tm, Am - fm, pm - hm, Em.trunkBlockId)
            }
            const jm = Am.vineDir;
            if (-1 === jm) return;
            let Vm, Im = 0,
              Km = 0;
            0 === jm ? (Im = -1, Vm = this.blockMetadata["Vines|meta|rot4"].id) : 1 === jm ? (Km = 1, Vm = this.blockMetadata.Vines.id) : 2 === jm ? (Im = 1, Vm = this.blockMetadata["Vines|meta|rot2"].id) : 3 === jm && (Km = -1, Vm = this.blockMetadata["Vines|meta|rot3"].id);
            const Qm = im + Im,
              nm = pm + Km;
            if (!(Qm < Tm || Qm >= xm || nm < hm || nm >= Dm)) {
              Om && mm.set(Qm - Tm, Rm - fm, nm - hm, Vm);
              for (let Am = Ym; Am < am; Am++) mm.set(Qm - Tm, Am - fm, nm - hm, Vm)
            }
          }
          getAllBlocksForTree(mm) {
            const Tm = this.MO >> 1,
              fm = mm.treeX - Tm,
              hm = mm.trunkBase,
              Am = mm.treeZ - Tm,
              am = [],
              xm = new YT(am, fm, hm, Am);
            return this.addTreesToChunk(xm, fm, hm, Am, [mm]), am
          }
        }
        class YT {
          constructor(mm, Tm, fm, hm) {
            this.treeBlocks = mm, this.startX = Tm, this.startY = fm, this.startZ = hm
          }
          set(mm, Tm, fm, hm) {
            this.treeBlocks.push({
              x: mm + this.startX,
              y: Tm + this.startY,
              z: fm + this.startZ,
              id: hm
            })
          }
        }
        var qT = fm(39875);
        let jT = null;
        class VT {
          constructor(mm, Tm, fm, am, xm, wm, Dm, im) {
            this.biomeSelector = mm, this.noWaterHeightmapGenerator = Tm, this.hydrology = fm, this.lakeRadiusNoiseModifier = am, this.seed = xm, this.needOutsideWaterDist = Dm, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, this.pointGenerator = void 0, this.lakes = void 0, this.lakeRadiusNoiseAmplitude = void 0, jT || (jT = new qT.b("scattered lakes", im ? 4e3 : 500, 6e4)), this.lakes = jT.partition(), this.pointGenerator = new Am.d("oasisLake", this.distApart, !1, !0, `${xm}oasisLake`, 6, wm), this.lakeRadiusNoiseAmplitude = (0, hm.A)(am)
          }
          getWaterGenInfo(mm, Tm, fm) {
            const Am = this.maxRadius + fm,
              am = Am * Am;
            let xm, wm = null,
              Dm = 0,
              im = 0,
              Rm = 1e4;
            for (const pm of this.pointGenerator.getPointsAroundPoint(mm, Tm)) {
              if ((0, hm.J)(pm, mm, Tm) > am) continue;
              const fm = this.getLakeAtOrigin(pm);
              if (null === fm) continue;
              void 0 === xm && (xm = this.lakeRadiusNoiseModifier.getOctaves(mm, Tm) + this.lakeRadiusNoiseAmplitude);
              const Am = (0, hm.I)(fm.origin, mm, Tm),
                Em = xm * (fm.radius / this.maxRadius),
                om = fm.radius - Em,
                Om = Am - om;
              Om >= Rm || (Rm = Om, wm = fm, Dm = Am, im = om)
            }
            return null === wm ? null : {
              distFromWater: Dm,
              waterRadius: im,
              waterHeight: wm.waterHeight,
              waterbedHeight: wm.bedHeight,
              isLake: !0,
              needOutsideWaterDist: this.needOutsideWaterDist
            }
          }
          getLakeAtOrigin(mm) {
            const Tm = this.lakes.get(mm[0], mm[1]);
            if (!(0, Rm.H)(Tm)) return Tm.lake;
            const fm = this.buildLake(mm);
            return this.lakes.set(mm[0], mm[1], {
              lake: fm
            }), fm
          }
          buildLake(mm) {
            const Tm = this.biomeSelector.generate(mm[0], mm[1]);
            if (!Tm[0].biome.hasScatteredLakes) return null;
            const {
              minRadius: fm,
              maxRadius: hm,
              minGapFromHydrologyWater: Am
            } = this, am = new Em.k(`${mm[0]}|${mm[1]}${this.seed}oasisLake`), xm = this.hydrology.getHydrologyWaterGenInfo(mm[0], mm[1]), wm = Math.floor(xm.distFromWater - xm.waterRadius - Am);
            if (wm < fm) return null;
            const Dm = Math.min(fm + Math.floor(am.next() * (hm - fm + 1)), wm),
              im = Math.floor(this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(mm[0], mm[1], Tm) - 7);
            return {
              origin: [mm[0], mm[1]],
              radius: Dm,
              waterHeight: im,
              bedHeight: Math.floor(im - (4 + .35 * Dm))
            }
          }
        }
        class IT {
          constructor() {
            this.hasLake = !1, this.lakeCreationHasBeenAttempted = !1, this.lakeWaterHeight = 0, this.lakeRadius = 0, this.lakeBedHeight = 0
          }
        }
        let KT = null;
        class QT {
          constructor(mm, Tm, fm, Am, am, xm, wm, Dm) {
            this.biomeSelector = mm, this.noWaterHeightmapGenerator = Tm, this.needOutsideWaterBodyDist = xm, this.pm = Dm, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
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
            }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, KT || (KT = new qT.b("water cells", wm ? 800 : 60, 6e4)), this.waterBodyInfos = KT.partition();
            const im = Math.max(this.lakeSettings.maxRadius, this.maxRiverSettings.width / 2 + this.widthOffset) + xm + am;
            this.cellCenterMaxOffset = this.gridSize / 2 - im, this.seed = fm, this.lakeRadiusNoiseModifier = new hm.j([{
              amplitude: 10,
              frequency: 1 / 55
            }, {
              amplitude: 4,
              frequency: .04
            }], `${fm}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, hm.A)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new VT(mm, Tm, this, this.lakeRadiusNoiseModifier, fm, Am, xm, wm)
          }
          getInfoNeededForWaterGen(mm, Tm) {
            let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (!this.pm) return JT(this.needOutsideWaterBodyDist);
            const hm = this.getHydrologyWaterGenInfo(mm, Tm);
            if (!fm) return hm;
            const Am = this.scatteredLakes.getWaterGenInfo(mm, Tm, this.needOutsideWaterBodyDist);
            return null === Am || nT(hm) <= nT(Am) ? hm : Am
          }
          columnMayHaveScatteredLakes(mm, Tm, fm) {
            for (const {
                biome: hm
              }
              of mm)
              if (hm.hasScatteredLakes) return !0;
            return this.biomeSelector.regionMayHaveScatteredLakes(Tm, fm)
          }
          getDistToScatteredLakeEdge(mm, Tm, fm) {
            const hm = this.scatteredLakes.getWaterGenInfo(mm, Tm, fm);
            return null === hm ? 1e4 : nT(hm)
          }
          getHydrologyWaterGenInfo(mm, Tm) {
            const fm = [mm, Tm],
              Am = this.getWaterInfo(mm, Tm, !0);
            let am = 1e4,
              xm = 0,
              wm = 0,
              Dm = 0,
              im = 0,
              Rm = 0,
              pm = 0;
            if (Am.downhill) {
              const {
                Tp: mm,
                fracAlong: Tm,
                lineSegmentLength: Em
              } = (0, hm.w)(fm, Am.origin, Am.downhill.origin);
              xm = Math.floor(mm);
              let om = Am.incomingFlux;
              if (om += Tm * Am.selfFlux, Dm = Math.min(1, om / this.maxRiverSettings.atFlux), wm = Math.max(1, Math.ceil(Dm * this.maxRiverSettings.width)), am = xm - wm / 2, Rm = Am.originNoWaterHeight + -3, Am.downhill.lakeInfo.hasLake) {
                pm = Am.downhill.lakeInfo.lakeWaterHeight;
                const mm = Em - Am.downhill.lakeInfo.lakeRadius,
                  fm = Em * Tm;
                im = Math.min(1, fm / mm)
              } else pm = Am.downhill.originNoWaterHeight + -3, im = Tm
            }
            for (const Em of Am.uphills) {
              const {
                Tp: mm,
                fracAlong: Tm,
                lineSegmentLength: om
              } = (0, hm.w)(fm, Em.origin, Am.origin), Om = Math.floor(mm);
              let Ym = Em.incomingFlux;
              Ym += Tm * Em.selfFlux;
              const qm = Math.min(1, Ym / this.maxRiverSettings.atFlux),
                jm = Math.max(1, Math.ceil(qm * this.maxRiverSettings.width)),
                Vm = Om - jm / 2;
              if (Vm < am)
                if (am = Vm, xm = Om, Dm = qm, wm = jm, Rm = Em.originNoWaterHeight + -3, Am.lakeInfo.hasLake) {
                  pm = Am.lakeInfo.lakeWaterHeight;
                  const mm = om - Am.lakeInfo.lakeRadius,
                    fm = om * Tm;
                  im = Math.min(1, fm / mm)
                } else pm = Am.originNoWaterHeight + -3, im = Tm
            }
            if (1e4 !== am) {
              let fm = 1e4,
                Em = 0;
              if (Am.lakeInfo.hasLake) {
                const am = Am.lakeInfo;
                let xm = this.lakeRadiusNoiseModifier.getOctaves(mm, Tm);
                xm += this.lakeRadiusNoiseAmplitude;
                xm *= am.lakeRadius / this.lakeSettings.maxRadius, Em = am.lakeRadius - xm, fm = (0, hm.I)(Am.origin, mm, Tm) - Em
              }
              const om = Math.floor(pm + (Rm - pm) * (1 - im)),
                Om = om - (Math.ceil(10 * Dm) + 2);
              if (am < fm) {
                return {
                  distFromWater: xm,
                  waterRadius: (wm + this.widthOffset) / 2,
                  waterHeight: om,
                  waterbedHeight: Om,
                  isLake: !1,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              } {
                const fm = (0, hm.I)(Am.origin, mm, Tm),
                  am = Am.lakeInfo;
                return {
                  distFromWater: fm,
                  waterRadius: Em,
                  waterHeight: am.lakeWaterHeight,
                  waterbedHeight: am.lakeBedHeight,
                  isLake: !0,
                  needOutsideWaterDist: this.needOutsideWaterBodyDist
                }
              }
            }
            return JT(this.needOutsideWaterBodyDist)
          }
          getWaterInfo(mm, Tm, fm) {
            const hm = Math.floor(mm / this.gridSize),
              Am = Math.floor(Tm / this.gridSize),
              am = this.getCellInfo(hm, Am);
            if (am.uphills || this.fillInUphillInfo(hm, Am, am), am.downhill || am.lakeInfo.lakeCreationHasBeenAttempted || (this.fillInLakeInfo(am), am.lakeInfo.lakeCreationHasBeenAttempted = !0), fm && am.downhill) {
              const mm = this.getWaterInfo(am.downhill.origin[0], am.downhill.origin[1], !1);
              am.downhill.lakeInfo = mm.lakeInfo
            }
            return am
          }
          getCellInfo(mm, Tm) {
            if (mm === this.lastReadInfo.cellX && Tm === this.lastReadInfo.cellZ) return this.lastReadInfo.info;
            const fm = this.waterBodyInfos.get(mm, Tm);
            if (!(0, Rm.H)(fm)) return this.lastReadInfo.cellX = mm, this.lastReadInfo.cellZ = Tm, this.lastReadInfo.info = fm, fm;
            const hm = this.getCellOrigin(mm, Tm),
              Am = this.biomeSelector.generate(hm[0], hm[1]),
              am = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(hm[0], hm[1], Am),
              xm = {
                origin: hm,
                originNoWaterHeight: am,
                downhill: this.getDownhillFromCell(mm, Tm, am),
                uphills: null,
                incomingFlux: null,
                selfFlux: this.getRainfall(hm[0], hm[1]),
                lakeInfo: new IT
              };
            return this.lastReadInfo.cellX = mm, this.lastReadInfo.cellZ = Tm, this.lastReadInfo.info = xm, this.waterBodyInfos.set(mm, Tm, xm), xm
          }
          fillInUphillInfo(mm, Tm, fm) {
            const hm = this.getUphillsFromCell(mm, Tm);
            let Am = 0;
            for (const {
                incomingFlux: am,
                selfFlux: xm
              }
              of hm) Am += am + xm;
            fm.uphills = hm, fm.incomingFlux = Am
          }
          getUphillsFromCell(mm, Tm) {
            const fm = [];
            for (let am = -1; am <= 1; am++)
              for (let xm = -1; xm <= 1; xm++) {
                var hm, Am;
                const wm = mm + am,
                  Dm = Tm + xm,
                  im = Math.abs(am) + Math.abs(xm);
                if (2 === im || 0 === im) continue;
                const Rm = this.getCellInfo(wm, Dm);
                (null === (hm = Rm.downhill) || void 0 === hm ? void 0 : hm.cell[0]) === mm && (null === (Am = Rm.downhill) || void 0 === Am ? void 0 : Am.cell[1]) === Tm && (Rm.uphills || this.fillInUphillInfo(wm, Dm, Rm), fm.push({
                  incomingFlux: Rm.incomingFlux,
                  selfFlux: Rm.selfFlux,
                  origin: Rm.origin,
                  originNoWaterHeight: Rm.originNoWaterHeight
                }))
              }
            return fm
          }
          getDownhillFromCell(mm, Tm, fm) {
            const hm = {
              cell: [0, 0],
              origin: null,
              originNoWaterHeight: 0,
              lakeInfo: new IT
            };
            let Am = -1;
            for (let am = -1; am <= 1; am++)
              for (let xm = -1; xm <= 1; xm++) {
                const wm = mm + am,
                  Dm = Tm + xm,
                  im = Math.abs(am) + Math.abs(xm);
                if (2 === im || 0 === im) continue;
                const Rm = this.getCellOrigin(wm, Dm),
                  pm = this.biomeSelector.generate(Rm[0], Rm[1]),
                  Em = this.noWaterHeightmapGenerator.getNoWaterHeightmapVal(Rm[0], Rm[1], pm),
                  om = fm - Em;
                om > 0 && om > Am && (Am = om, hm.cell[0] = wm, hm.cell[1] = Dm, hm.origin = Rm, hm.originNoWaterHeight = Em)
              }
            return -1 !== Am ? hm : null
          }
          getCellOrigin(mm, Tm) {
            const fm = mm * this.gridSize + this.gridSize / 2,
              hm = Tm * this.gridSize + this.gridSize / 2,
              Am = new Em.k(`${mm}${Tm}${this.seed}riverCell`);
            return [fm + Math.floor(Am.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset), hm + Math.floor(Am.next() * this.cellCenterMaxOffset * 2 - this.cellCenterMaxOffset)]
          }
          fillInLakeInfo(mm) {
            const Tm = mm.lakeInfo,
              fm = mm.incomingFlux + mm.selfFlux;
            if (fm < this.lakeSettings.noLakeFluxCutoff) return;
            Tm.hasLake = !0;
            const hm = fm / this.lakeSettings.maxRadiusAtFlux,
              Am = this.lakeSettings.minRadius + Math.ceil(hm * (this.lakeSettings.maxRadius - this.lakeSettings.minRadius));
            Tm.lakeRadius = Am, Tm.lakeWaterHeight = Math.floor(mm.originNoWaterHeight - 7);
            const am = 4 + .35 * Am;
            Tm.lakeBedHeight = Math.floor(Tm.lakeWaterHeight - am)
          }
          getRainfall(mm, Tm) {
            return 100
          }
        }

        function nT(mm) {
          let {
            distFromWater: Tm,
            waterRadius: fm
          } = mm;
          return Tm - fm
        }

        function JT(mm) {
          return {
            distFromWater: 1e4,
            waterRadius: 0,
            waterHeight: 0,
            waterbedHeight: 0,
            isLake: !1,
            needOutsideWaterDist: mm
          }
        }
        const cT = [{
          blockName: "Moonstone Ore",
          radius: 2,
          rm: 40,
          Dm: -85,
          im: -85,
          sm: .5
        }, {
          blockName: "Diamond Ore",
          radius: 2,
          rm: 13,
          Dm: -100,
          im: -85,
          sm: .28
        }, {
          blockName: "Gold Ore",
          radius: 2,
          rm: 10,
          Dm: -100,
          im: -75,
          sm: .4
        }, {
          blockName: "Iron Ore",
          radius: 2,
          rm: 5,
          Dm: -80,
          im: 15,
          sm: .5
        }, {
          blockName: "Coal Ore",
          radius: 3,
          rm: 4,
          Dm: -60,
          im: 40,
          sm: .5
        }];
        class zT {
          constructor(mm, Tm, fm, hm) {
            this.seed = Tm, this.MO = fm, this.ym = void 0, this.ym = hm.map((hm => {
              const am = new Am.d("ore", hm.rm, !1, !0, `${Tm}${hm.blockName}`, 20, fm, null, !0);
              return am.assertReachableFromChunkCentre(fm, hm.radius), {
                jR: (0, Rm.B)(hm.blockName, mm),
                radius: hm.radius,
                rm: hm.rm,
                Dm: hm.Dm,
                im: hm.im,
                sm: hm.sm,
                pointGenerator: am
              }
            }))
          }
          getOreBlocksForChunk(mm, Tm) {
            const fm = [],
              Am = new Em.k(`${mm}${Tm}${this.seed}oreExists`);
            for (const am of this.ym) {
              const xm = am.pointGenerator.getPointsAroundPoint(mm + this.MO / 2, Tm + this.MO / 2),
                wm = mm + this.MO + am.radius,
                Dm = mm - am.radius - 1,
                im = Tm + this.MO + am.radius,
                Rm = Tm - am.radius - 1;
              for (const pm of xm) {
                if (pm[0] >= wm || pm[0] <= Dm || pm[1] >= im || pm[1] <= Rm) continue;
                const xm = new Em.k(`${pm[0]}${pm[1]}${this.seed}ore`),
                  om = Math.floor(xm.next() * (am.im + 1 - am.Dm)) + am.Dm,
                  Om = Math.max(mm, pm[0] - am.radius),
                  Ym = Math.min(mm + this.MO - 1, pm[0] + am.radius),
                  qm = Math.max(Tm, pm[1] - am.radius),
                  jm = Math.min(Tm + this.MO - 1, pm[1] + am.radius);
                for (let mm = Om; mm <= Ym; mm++)
                  for (let Tm = qm; Tm <= jm; Tm++) {
                    (0, hm.D)(pm, mm, Tm) > am.radius || (Am.next() >= am.sm || fm.push(mm, om, Tm, am.jR))
                  }
              }
            }
            return new Int32Array(fm)
          }
          addOresToChunk(mm, Tm, fm, hm, Am, xm, wm) {
            const Dm = fm + this.MO,
              im = wm.length;
            for (let Rm = 0; Rm < im; Rm += 4) {
              const im = wm[Rm + 1];
              if (im < fm || im >= Dm) continue;
              const pm = wm[Rm],
                Em = wm[Rm + 2];
              if (im < xm.get(pm, Em, am.g.GroundHeight) - Am) {
                const Am = wm[Rm + 3];
                mm.set(pm - Tm, im - fm, Em - hm, Am)
              }
            }
          }
        }
        var ZT = fm(39880);
        const kT = [0, -1, 0],
          bT = [0, 1, 0],
          ST = [-1, 0, 0],
          eT = [1, 0, 0],
          NT = [0, 0, -1],
          GT = [0, 0, 1];

        function XT(mm, Tm) {
          const {
            Km: fm,
            Zm: hm,
            shallowClusterY: Am,
            deepClusterY: am
          } = mm;
          if (void 0 === hm || void 0 === Am || void 0 === am) return fm;
          return fm + (hm - fm) * Math.max(0, Math.min(1, (Am - Tm) / (Am - am)))
        }

        function PT(mm, Tm, fm) {
          const hm = [];
          return fm.jm && hm.push({
            offset: kT,
            jR: mm[Tm].id
          }), fm.Vm && hm.push({
            offset: ST,
            jR: mm[`${Tm}|meta|rot2|side`].id
          }, {
            offset: eT,
            jR: mm[`${Tm}|meta|rot4|side`].id
          }, {
            offset: NT,
            jR: mm[`${Tm}|meta|rot1|side`].id
          }, {
            offset: GT,
            jR: mm[`${Tm}|meta|rot3|side`].id
          }), fm.Im && hm.push({
            offset: bT,
            jR: mm[`${Tm}|meta|rot1|top`].id
          }), hm
        }

        function HT(mm, Tm) {
          return null === Tm ? function(mm) {
            return [{
              seedPrefix: "crystal",
              anchorOptions: PT(mm, "Crystal", {
                jm: !0,
                Vm: !0,
                Im: !0
              }),
              clusterBoxSize: 4,
              Qm: .8,
              nm: 0,
              Km: .12,
              Zm: .25,
              shallowClusterY: -20,
              deepClusterY: -85
            }, {
              seedPrefix: "mushroom",
              anchorOptions: PT(mm, "Glowing Mushroom", {
                jm: !0,
                Vm: !0,
                Im: !1
              }),
              clusterBoxSize: 4,
              Qm: .7,
              nm: 2,
              Km: .58
            }]
          }(mm) : Tm.map((Tm => function(mm, Tm) {
            const fm = Tm.Jm;
            return {
              seedPrefix: Tm.blockName,
              anchorOptions: PT(mm, Tm.blockName, {
                jm: Tm.jm,
                Vm: Tm.Vm,
                Im: Tm.Im
              }),
              clusterBoxSize: 4,
              Qm: Tm.Qm,
              nm: Tm.nm,
              Km: Tm.Km,
              Zm: null === fm || void 0 === fm ? void 0 : fm.Zm,
              shallowClusterY: null === fm || void 0 === fm ? void 0 : fm.km,
              deepClusterY: null === fm || void 0 === fm ? void 0 : fm.bm
            }
          }(mm, Tm)))
        }
        class yT {
          constructor(mm) {
            this.caveHeightmapVals = mm
          }
          generate(mm, Tm) {
            return bm(mm, Tm, this.caveHeightmapVals, !1)
          }
        }
        class CT {
          constructor(mm, Tm, fm, hm) {
            this.caveHeightmapVals = mm, this.heightmapVals = Tm, this.surfaceMargin = fm, this.minCaveHeight = hm
          }
          generate(mm, Tm) {
            const fm = bm(mm, Tm, this.caveHeightmapVals, !0);
            if (0 === fm.length) return fm;
            const hm = this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) - this.surfaceMargin,
              {
                minCaveHeight: Am
              } = this,
              xm = [];
            for (const am of fm) {
              const mm = Math.min(am.ceilingY, hm);
              mm - am.floorY + 1 < Am || xm.push(mm === am.ceilingY ? am : {
                floorY: am.floorY,
                ceilingY: mm
              })
            }
            return xm
          }
        }
        class rT {
          constructor(mm, Tm, fm, Am) {
            this.heightmapVals = mm, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new hm.o(new yT(Tm)), this.decoratableCavesCache = new hm.o(new CT(Tm, mm, fm, Am))
          }
          getAllCaves(mm, Tm) {
            return this.allCavesCache.getOrGenerate(mm, Tm)
          }
          getGroundHeight(mm, Tm) {
            return this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight)
          }
          getDecoratableCaves(mm, Tm) {
            return this.decoratableCavesCache.getOrGenerate(mm, Tm)
          }
        }

        function sT(mm, Tm, fm, hm) {
          if (Tm > hm.getGroundHeight(mm, fm)) return !1;
          const Am = hm.getAllCaves(mm, fm);
          for (const am of Am)
            if (Tm >= am.floorY && Tm <= am.ceilingY) return !1;
          return !0
        }

        function lT(mm, Tm, fm, hm, Am, am) {
          let xm = null;
          const wm = [];
          for (const Dm of hm) {
            sT(mm + Dm.offset[0], Tm + Dm.offset[1], fm + Dm.offset[2], am) && (Dm.offset === kT ? xm = Dm : wm.push(Dm))
          }
          return null !== xm ? xm : 0 === wm.length ? null : wm[Math.floor(Am * wm.length)]
        }
        class MT {
          constructor(mm, Tm, fm) {
            let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            this.MO = Tm, this.seed = fm, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
            const am = HT(mm, hm);
            let xm = 0,
              wm = 0;
            for (const Am of am) {
              var Dm;
              if (!Number.isInteger(Am.clusterBoxSize) || Am.clusterBoxSize < 2 || Am.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Am.seedPrefix}" has invalid clusterBoxSize (${Am.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs at least one cell per axis).`);
              const mm = Am.clusterBoxSize >> 1;
              mm > xm && (xm = mm), wm += Math.max(Am.Km, null !== (Dm = Am.Zm) && void 0 !== Dm ? Dm : Am.Km)
            }
            if (wm > 1) throw new Error(`Cave decoration cluster chances sum to ${wm} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
            this.pointsGen = new Am.d("caveDeco", 10, !1, !0, fm, 4, Tm, null, !0), this.pointsGen.assertReachableFromChunkCentre(Tm, xm), this.configs = am, this.maxHalfBox = xm
          }
          getDecorationsForChunkColumn(mm, Tm, fm, hm) {
            const Am = [],
              am = this.MO,
              xm = mm + am,
              wm = Tm + am,
              Dm = new rT(fm, hm, 4, 3),
              im = mm + (am >> 1),
              Rm = Tm + (am >> 1),
              pm = this.pointsGen.getPointsAroundPoint(im, Rm),
              Em = this.maxHalfBox;
            for (const om of pm) {
              const fm = om[0],
                hm = om[1];
              fm + Em <= mm || fm - Em >= xm || hm + Em <= Tm || hm - Em >= wm || this.collectClusterPlacements(fm, hm, mm, xm, Tm, wm, Dm, Am)
            }
            return Am
          }
          static addCaveDecorationsToChunk(mm, Tm, fm, hm, Am, am) {
            const xm = fm + Am;
            for (const wm of am) wm.y >= fm && wm.y < xm && mm.set(wm.x - Tm, wm.y - fm, wm.z - hm, wm.jR)
          }
          collectClusterPlacements(mm, Tm, fm, hm, Am, am, xm, wm) {
            const Dm = xm.getDecoratableCaves(mm, Tm);
            if (0 === Dm.length) return;
            const im = new Em.k(`${this.seed}|${mm}|${Tm}|cluster`),
              Rm = im.next(),
              pm = im.next(),
              om = im.next(),
              Om = Dm[Math.floor(Rm * Dm.length)],
              Ym = Om.floorY + Math.floor(pm * (Om.ceilingY - Om.floorY + 1));
            let qm = 0,
              jm = null;
            for (const Em of this.configs)
              if (qm += XT(Em, Ym), om < qm) {
                jm = Em;
                break
              } if (null === jm) return;
            const Vm = [];
            if (this.scatterClusterCells(mm, Ym, Tm, jm, xm, im, Vm), !(Vm.length < jm.nm))
              for (const Em of Vm) Em.x >= fm && Em.x < hm && Em.z >= Am && Em.z < am && wm.push(Em)
          }
          scatterClusterCells(mm, Tm, fm, hm, Am, am, xm) {
            const {
              clusterBoxSize: wm,
              Qm: Dm,
              anchorOptions: im
            } = hm, Rm = wm >> 1, pm = mm - Rm, Em = Tm - Rm, om = fm - Rm;
            for (let Om = 0; Om < Rm; Om++)
              for (let mm = 0; mm < Rm; mm++)
                for (let Tm = 0; Tm < Rm; Tm++) {
                  const fm = am.next(),
                    hm = am.next(),
                    wm = am.next();
                  if (fm >= Dm) continue;
                  const Rm = Math.floor(8 * hm),
                    Ym = pm + 2 * Om + (1 & Rm),
                    qm = Em + 2 * mm + (Rm >> 1 & 1),
                    jm = om + 2 * Tm + (Rm >> 2 & 1);
                  if (!uT(Ym, qm, jm, Am)) continue;
                  const Vm = lT(Ym, qm, jm, im, wm, Am);
                  null !== Vm && xm.push({
                    x: Ym,
                    y: qm,
                    z: jm,
                    jR: Vm.jR
                  })
                }
          }
        }

        function uT(mm, Tm, fm, hm) {
          const Am = hm.getDecoratableCaves(mm, fm);
          for (const am of Am)
            if (Tm >= am.floorY && Tm <= am.ceilingY) return !0;
          return !1
        }
        class BT {
          constructor(mm, Tm, fm, hm, am, xm, wm) {
            this.prefabGenerator = hm, this.seed = void 0, this.MO = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0, this.sandId = void 0, this.clayId = void 0, this.chalkId = void 0, this.grassBlockId = void 0, this.dirtId = void 0, this.seed = wm, this.MO = mm, this.biomeSelector = Tm, this.treeGenerator = fm, this.blockMetadata = am, this.oreGenerator = xm, this.bedrockId = am.Bedrock.id, this.waterId = am.Water.id, this.sandId = am.Sand.id, this.clayId = am.Clay.id, this.chalkId = am.Chalk.id, this.grassBlockId = am["Grass Block"].id, this.dirtId = am.Dirt.id, this.riverbedFeatureGenerator = new Am.d("clay", 50, !1, !0, wm, 4, mm, null, !0)
          }
          fillChunk(mm, Tm, fm, Am, wm, im, Rm, om, Om, Ym, qm, jm, Vm) {
            if (fm + this.MO <= xm.r.bedrockLevel) return {
              specialBlocks: []
            };
            const Im = new pm.c,
              Km = Vm.minTerrainHeight,
              Qm = Vm.maxTerrainHeight,
              nm = Vm.hasWater;
            if (Qm >= fm && Km < fm + this.MO)
              for (let hm = Tm; hm < Tm + this.MO; hm++)
                for (let Dm = Am; Dm < Am + this.MO; Dm++) {
                  const im = Ym.biomeIds.get(hm, Dm),
                    Rm = this.biomeSelector.getBiomeFromId(im),
                    pm = wm.get(hm, Dm, am.g.GroundHeight);
                  if (pm >= fm && pm < fm + this.MO) {
                    const im = wm.get(hm, Dm, am.g.IsLake) === xm.h ? Rm.getDryBedBlock(hm, pm, Dm) : Rm.getTopsoilBlock(hm, pm, Dm);
                    mm.set(hm - Tm, pm - fm, Dm - Am, im)
                  }
                }
            if (Qm + 1 >= fm && Km - 4 < fm + this.MO)
              for (let hm = Tm; hm < Tm + this.MO; hm++)
                for (let xm = Am; xm < Am + this.MO; xm++) {
                  const Dm = Ym.biomeIds.get(hm, xm),
                    im = this.biomeSelector.getBiomeFromId(Dm),
                    Rm = wm.get(hm, xm, am.g.GroundHeight),
                    pm = Math.min(Rm, fm + this.MO);
                  for (let am = Math.max(Rm - 4, fm); am < pm; am++) mm.set(hm - Tm, am - fm, xm - Am, im.getLowsoilBlockType(hm, am, xm, Rm))
                }
            const Jm = Vm.banks;
            for (let hm = 0; hm < Jm.length; hm += 3) {
              const Tm = Jm[hm],
                Am = Jm[hm + 1] - fm,
                am = Jm[hm + 2];
              for (let fm = Math.max(Am - 4, 0); fm < Math.min(Am, this.MO); fm++) mm.set(Tm, fm, am, this.dirtId);
              Am >= 0 && Am < this.MO && mm.set(Tm, Am, am, this.grassBlockId)
            }
            if (Qm - 4 >= fm) {
              const hm = this.biomeSelector.anyStrata;
              for (let xm = Tm; xm < Tm + this.MO; xm++)
                for (let Dm = Am; Dm < Am + this.MO; Dm++) {
                  const im = Ym.stoneTypeIds.get(xm, Dm),
                    Rm = wm.get(xm, Dm, am.g.GroundHeight),
                    pm = Math.min(Rm - 4, fm + this.MO),
                    Em = hm ? this.biomeSelector.getBiomeFromId(Ym.biomeIds.get(xm, Dm)) : null,
                    om = null !== Em && Em.strataDepth > 0 ? Rm - 4 - Em.strataDepth : pm;
                  for (let hm = fm; hm < pm; hm++) {
                    const am = hm >= om ? Em.getStrataBlock(xm, hm, Dm, Rm) : 0;
                    mm.set(xm - Tm, hm - fm, Dm - Am, 0 !== am ? am : im)
                  }
                }
            }
            if (Qm - 4 >= fm && this.oreGenerator.addOresToChunk(mm, Tm, fm, Am, 4, wm, Om), Qm >= fm && (Dm.d.addCavesToChunk(mm, Tm, fm, Am, wm, om), MT.addCaveDecorationsToChunk(mm, Tm, fm, Am, this.MO, jm)), xm.r.bedrockLevel >= fm && xm.r.bedrockLevel < fm + this.MO)
              for (let hm = Tm; hm < Tm + this.MO; hm++)
                for (let am = Am; am < Am + this.MO; am++) mm.set(hm - Tm, xm.r.bedrockLevel - fm, am - Am, this.bedrockId);
            this.addSurfaceBlocks(mm, fm, Vm.flora);
            for (const hm of Rm)
              for (let am = Tm; am < Tm + this.MO; am++)
                for (let xm = fm; xm < fm + this.MO; xm++)
                  for (let wm = Am; wm < Am + this.MO; wm++) {
                    const Dm = this.prefabGenerator.getBlockFromPrefabAtPoint(am, xm, wm, hm, Im);
                    0 !== Dm && mm.set(am - Tm, xm - fm, wm - Am, Dm === Xm.GUARANTEED_AIR ? 0 : Dm)
                  }
            Qm + this.treeGenerator.maxTreeHeight >= fm && this.treeGenerator.addTreesToChunk(mm, Tm, fm, Am, im);
            const cm = Vm.water;
            for (let hm = 0; hm < cm.length; hm += 5) {
              const Tm = cm[hm],
                Am = cm[hm + 1],
                am = cm[hm + 2] - fm,
                xm = cm[hm + 3] - fm;
              for (let fm = Math.max(am, 0); fm < Math.min(xm, this.MO); fm++) mm.set(Tm, fm, Am, this.waterId);
              xm >= 0 && xm < this.MO && mm.set(Tm, xm, Am, cm[hm + 4])
            }
            let zm, km, bm;
            if (this.addSurfaceBlocks(mm, fm, Vm.lilyPads), nm && Qm >= fm && Km < fm + this.MO)
              for (let Dm = Tm; Dm < Tm + this.MO; Dm++)
                for (let im = Am; im < Am + this.MO; im++) {
                  const Rm = wm.get(Dm, im, am.g.WaterHeight),
                    pm = wm.get(Dm, im, am.g.GroundHeight);
                  if (Rm !== xm.p && pm >= fm && pm < fm + this.MO)
                    if (Rm === pm) mm.set(Dm - Tm, pm - fm, im - Am, this.sandId);
                    else {
                      const am = this.riverbedFeatureGenerator.getClosestPoint(Dm, im);
                      if ((0, hm.J)(am, Dm, im) < 100) zm === am[0] && km === am[1] || (zm = am[0], km = am[1], bm = new Em.k(`${this.seed}${zm}${km}`).next() < .3 ? this.chalkId : this.clayId), mm.set(Dm - Tm, pm - fm, im - Am, bm), pm - 1 >= fm && mm.set(Dm - Tm, pm - 1 - fm, im - Am, bm), pm - 2 >= fm && mm.set(Dm - Tm, pm - 2 - fm, im - Am, bm);
                      else {
                        const hm = Ym.biomeIds.get(Dm, im),
                          am = this.biomeSelector.getBiomeFromId(hm);
                        mm.set(Dm - Tm, pm - fm, im - Am, am.getLowsoilBlockType(Dm, pm, im, pm))
                      }
                    }
                }
            for (const hm of qm)
              for (let am = Tm; am < Tm + this.MO; am++)
                for (let xm = fm; xm < fm + this.MO; xm++)
                  for (let wm = Am; wm < Am + this.MO; wm++) {
                    const Dm = Zm.e.getBlockFromFixedPointPrefab(am, xm, wm, hm);
                    0 !== Dm && mm.set(am - Tm, xm - fm, wm - Am, Dm)
                  }
            const Sm = [];
            for (const hm of Im) {
              const am = hm.val;
              if (mm.get(hm.x - Tm, hm.y - fm, hm.z - Am) !== am.getBlockId()) continue;
              const xm = am.generate(),
                wm = [hm.x, hm.y, hm.z];
              Sm.push({
                pos: wm,
                ...xm
              })
            }
            return {
              specialBlocks: Sm
            }
          }
          addSurfaceBlocks(mm, Tm, fm) {
            for (let hm = 0; hm < fm.length; hm += 4) {
              const Am = fm[hm + 1] - Tm;
              Am >= 0 && Am < this.MO && mm.set(fm[hm], Am, fm[hm + 2], fm[hm + 3])
            }
          }
        }
        class LT {
          constructor() {
            this.blocks = [], this.startY = 0
          }
          set(mm, Tm, fm, hm) {
            return this.blocks.push(mm, this.startY + Tm, fm, hm), hm
          }
        }
        class vT {
          constructor(mm, Tm, fm, hm) {
            this.MO = mm, this.biomeSelector = Tm, this.seed = fm, this.random = new Em.k(""), this.lilyPadId = void 0, this.lilyPadId = hm["Lily Pad"].id
          }
          getInfoForChunkColumn(mm, Tm, fm, hm, Am, wm) {
            const im = [],
              Rm = [],
              pm = [],
              Em = new LT;
            let om = 1 / 0,
              Om = -1 / 0,
              Ym = !1;
            for (let qm = mm; qm < mm + this.MO; qm++)
              for (let jm = Tm; jm < Tm + this.MO; jm++) {
                const Vm = this.biomeSelector.getBiomeFromId(Am.biomeIds.get(qm, jm)),
                  Im = fm.getOrGenerate(qm, jm, am.g.GroundHeight),
                  Km = fm.getOrGenerate(qm, jm, am.g.WaterHeight);
                om = Math.min(om, Im), Om = Math.max(Om, Im);
                const Qm = qm - mm,
                  nm = jm - Tm;
                if (Km !== xm.p) {
                  Ym = !0, Im < Km && im.push(Qm, nm, Im + 1, Km, Vm.topwaterBlockType), Vm.hasScatteredLakes && 1 === fm.getOrGenerate(qm, jm, am.g.IsLake) && (this.random.reseed(`${qm}|${jm}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(qm, jm, fm) && pm.push(Qm, Km + 1, nm, this.lilyPadId));
                  continue
                }
                let Jm = Vm.floraGenerator;
                if (Vm.hasScatteredLakes && this.isBesideLake(qm, jm, fm) && (this.random.reseed(`${qm}|${jm}|${this.seed}oasisShore`), this.random.next() < .85 && (Rm.push(Qm, Im, nm), Jm = this.biomeSelector.baseBiome.floraGenerator)), !Dm.d.isInCave(qm, Im, jm, hm) && !Zm.e.isWithinFixedPointPrefab(qm, jm, wm))
                  for (let fm = Im + 1; fm <= Im + Vm.maxFloraHeight; fm += this.MO) Em.startY = fm, Jm.addBiomeFloraToColumn(Em, mm, Tm, qm, fm, jm, Im)
              }
            return {
              minTerrainHeight: om,
              maxTerrainHeight: Om,
              hasWater: Ym,
              water: new Int32Array(im),
              banks: new Int32Array(Rm),
              flora: new Int32Array(Em.blocks),
              lilyPads: new Int32Array(pm)
            }
          }
          isInsideWater(mm, Tm, fm) {
            return fm.getOrGenerate(mm + 1, Tm, am.g.WaterHeight) !== xm.p && fm.getOrGenerate(mm - 1, Tm, am.g.WaterHeight) !== xm.p && fm.getOrGenerate(mm, Tm + 1, am.g.WaterHeight) !== xm.p && fm.getOrGenerate(mm, Tm - 1, am.g.WaterHeight) !== xm.p
          }
          isBesideLake(mm, Tm, fm) {
            return this.isLakeWater(mm + 1, Tm, fm) || this.isLakeWater(mm - 1, Tm, fm) || this.isLakeWater(mm, Tm + 1, fm) || this.isLakeWater(mm, Tm - 1, fm)
          }
          isLakeWater(mm, Tm, fm) {
            return fm.getOrGenerate(mm, Tm, am.g.WaterHeight) !== xm.p && 1 === fm.getOrGenerate(mm, Tm, am.g.IsLake)
          }
        }
        var tT = fm(39797);
        let UT = null;
        class dT {
          constructor(mm, Tm, fm, Am, xm, wm, im, Rm, pm) {
            var Em, om, Om, Ym, qm, jm, Vm;
            if (this.MO = mm, this.hashChunkContents = pm, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSelector = void 0, this.fixedPointPrefabTracker = void 0, this.noWaterHeightmapGenerator = void 0, this.heightmapPerturb = void 0, this.waterBodyGenerator = void 0, this.needOutsideWaterDist = 15, this.mostRecentlyAccessedChunkColumnPos = [0, 0], this.mostRecentlyAccessedChunkColumn = null, this.chunkColumnInfos = void 0, this.chunkFiller = void 0, this.surfaceGenerator = void 0, !UT) {
              const mm = xm ? 1750 : 125;
              UT = new qT.b("chunk columns", mm, 4e4)
            }
            this.chunkColumnInfos = UT.partition(), this.caveGenerator = new Dm.d(Am, mm, Tm, null !== (Em = null === im || void 0 === im ? void 0 : im.Em.Om) && void 0 !== Em ? Em : "Lava");
            const Im = new zT(Tm, Am, mm, null !== (om = null === im || void 0 === im ? void 0 : im.ym) && void 0 !== om ? om : [...cT, ...null !== (Om = null === Rm || void 0 === Rm ? void 0 : Rm.Lm) && void 0 !== Om ? Om : []]),
              Km = {
                MO: mm,
                blockMetadata: Tm,
                worldGenerator: this,
                seed: Am,
                biomeOpts: {
                  oreGenerator: Im
                }
              },
              Qm = null !== (Ym = null === im || void 0 === im ? void 0 : im.Sm) && void 0 !== Ym ? Ym : null,
              nm = null !== (qm = null === Rm || void 0 === Rm ? void 0 : Rm.buildBiomes) && void 0 !== qm ? qm : null,
              Jm = null !== Qm ? (0, ZT.d)(Qm, Km) : null !== nm ? this.buildTerrainBiomes(nm, Km) : (0, ZT.e)(Km);
            this.biomeSelector = new ZT.c(this, Im, Am, mm, Tm, Jm), this.treeGenerator = new OT(this, this.biomeSelector, mm, Am, Tm), this.fixedPointPrefabTracker = new Zm.e(wm, mm), this.prefabGenerator = new aT({
              seed: Am,
              MO: mm,
              blockMetadata: Tm,
              itemMetadata: fm,
              typeSettings: {
                [am.n.SURFACE]: {
                  densitySettings: {
                    [am.m.MEDIUM]: {
                      minDistanceBetweenPrefabs: 100
                    },
                    [am.m.HIGH]: {
                      minDistanceBetweenPrefabs: 50
                    },
                    [am.m.VERY_HIGH]: {
                      minDistanceBetweenPrefabs: 25
                    }
                  }
                },
                [am.n.UNDERGROUND]: {
                  densitySettings: {
                    [am.m.MEDIUM]: {
                      minDistanceBetweenPrefabs: 80
                    },
                    [am.m.HIGH]: null,
                    [am.m.VERY_HIGH]: null
                  }
                }
              },
              prefabSize: this.prefabSize
            }), this.noWaterHeightmapGenerator = new tT.e((0, tT.g)(Am)), this.heightmapPerturb = new hm.j([{
              amplitude: 1,
              frequency: 1 / 14
            }, {
              amplitude: 5,
              frequency: 1 / 65
            }, {
              amplitude: 20,
              frequency: .004
            }], `${Am}HeightmapPerturb`);
            let cm = 0;
            for (const {
                amplitude: hm
              }
              of this.heightmapPerturb.customOctaves) cm += hm;
            this.waterBodyGenerator = new QT(this.biomeSelector, this.noWaterHeightmapGenerator, Am, mm, cm, this.needOutsideWaterDist, xm, null === (jm = null === im || void 0 === im ? void 0 : im.pm) || void 0 === jm || jm), this.caveDecorationGenerator = new MT(Tm, mm, Am, null !== (Vm = null === im || void 0 === im ? void 0 : im.Em.Ym) && void 0 !== Vm ? Vm : null), this.surfaceGenerator = new vT(mm, this.biomeSelector, Am, Tm), this.chunkFiller = new BT(mm, this.biomeSelector, this.treeGenerator, this.prefabGenerator, Tm, Im, Am)
          }
          getChunk(mm, Tm, fm, hm) {
            try {
              const {
                specialBlocks: Am
              } = this.getChunkInternal(mm, Tm, fm, hm);
              return {
                hash: this.hashChunkContents(mm.data, JSON.stringify(Am)),
                specialBlocks: Am
              }
            } catch (Am) {
              return console.log(Am.stack), void console.error(Am.stack)
            }
          }
          getDistToLakeEdge(mm, Tm, fm) {
            return this.waterBodyGenerator.getDistToScatteredLakeEdge(mm, Tm, fm)
          }
          getOresForChunkColumn(mm, Tm) {
            const fm = this.MO,
              hm = Math.floor(mm / fm) * fm,
              Am = Math.floor(Tm / fm) * fm,
              am = Math.floor(fm / 2);
            return this.getClosestBiomesForChunk(hm, Am).getOrGenerate(hm + am, Am + am)[0].biome.oreGenerator.getOreBlocksForChunk(hm, Am)
          }
          buildTerrainBiomes(mm, Tm) {
            const fm = mm({
              ...Tm,
              biomeAt: (mm, Tm) => this.biomeSelector.getBiome(mm, Tm).biome
            });
            if (0 === fm.length) throw new Error("A world-gen terrain must build at least one biome");
            const hm = new Map;
            for (const {
                biome: am
              }
              of fm) {
              var Am;
              if ((null !== (Am = hm.get(am.key)) && void 0 !== Am ? Am : am) !== am) throw new Error(`A world-gen terrain built two biomes keyed "${am.key}"`);
              hm.set(am.key, am)
            }
            return [...fm]
          }
          getPrefabLootChests(mm, Tm, fm, hm, Am) {
            const am = new Map;
            for (const Dm of this.prefabGenerator.getLootPrefabCentres(mm, Tm, fm, hm, this.biomeSelector)) {
              var xm;
              if (void 0 !== Am && Dm.prefab.name !== Am) continue;
              const mm = `${Math.floor(Dm.x/this.MO)}|${Math.floor(Dm.z/this.MO)}`,
                Tm = null !== (xm = am.get(mm)) && void 0 !== xm ? xm : [];
              Tm.push(Dm), am.set(mm, Tm)
            }
            const wm = [];
            for (const Dm of am.values()) {
              const mm = Math.floor(Dm[0].x / this.MO) * this.MO,
                Tm = Math.floor(Dm[0].z / this.MO) * this.MO,
                fm = this.getClosestBiomesForChunk(mm, Tm),
                {
                  nearestFixedPrefabInfoForChunk: hm
                } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(mm, Tm),
                Am = this.getHeightMapVals(mm, Tm, fm, hm),
                am = this.caveGenerator.getCaveHeightmapVals(mm, Tm, Am),
                xm = this.prefabGenerator.getPrefabsForChunk(mm, Tm, Am, fm, am, hm, this.biomeSelector);
              for (const im of xm) {
                if (!Dm.some((mm => mm.x === im.centreX && mm.z === im.centreZ && mm.prefab === im.prefab))) continue;
                const mm = null !== im.prefab.undergroundYInterval;
                for (const {
                    x: Tm,
                    y: fm,
                    z: hm
                  }
                  of im.chestLocationToQuality.entries()) wm.push({
                  x: Tm,
                  y: fm,
                  z: hm,
                  underground: mm,
                  Am: im.prefab.name
                })
              }
            }
            return wm
          }
          getChunkInternal(mm, Tm, fm, hm) {
            const {
              biomeInfos: Am,
              heightmapVals: am,
              caveHeightmapVals: xm,
              treesForChunk: wm,
              chunkPrefabs: Dm,
              chunkOres: im,
              decodedFixedPointPrefabsForChunk: Rm,
              caveDecorations: pm,
              surface: Em
            } = this.getInfoForChunkColumn(Tm, hm);
            return this.chunkFiller.fillChunk(mm, Tm, fm, hm, am, wm, Dm, xm, im, Am, Rm, pm, Em)
          }
          getInfoForChunkColumn(mm, Tm) {
            if (this.mostRecentlyAccessedChunkColumn && this.mostRecentlyAccessedChunkColumnPos[0] === mm && this.mostRecentlyAccessedChunkColumnPos[1] === Tm) return this.mostRecentlyAccessedChunkColumn;
            const fm = this.chunkColumnInfos.get(mm, Tm);
            if (fm) return this.mostRecentlyAccessedChunkColumnPos[0] = mm, this.mostRecentlyAccessedChunkColumnPos[1] = Tm, this.mostRecentlyAccessedChunkColumn = fm, fm;
            const hm = this.getClosestBiomesForChunk(mm, Tm),
              {
                nearestFixedPrefabInfoForChunk: Am,
                decodedFixedPointPrefabsForChunk: am
              } = this.fixedPointPrefabTracker.getFixedPointPrefabInfoForChunk(mm, Tm),
              xm = this.getHeightMapVals(mm, Tm, hm, Am),
              wm = this.caveGenerator.getCaveHeightmapVals(mm, Tm, xm),
              Dm = this.prefabGenerator.getPrefabsForChunk(mm, Tm, xm, hm, wm, Am, this.biomeSelector),
              im = this.treeGenerator.getTreesForChunk(mm, Tm, xm, hm, wm, Dm, Am),
              Rm = hm.getOrGenerate(mm + Math.floor(this.MO / 2), Tm + Math.floor(this.MO / 2))[0].biome.oreGenerator.getOreBlocksForChunk(mm, Tm),
              pm = this.caveDecorationGenerator.getDecorationsForChunkColumn(mm, Tm, xm, wm),
              Em = this.biomeSelector.getBiomeInfoForChunkFill(mm, Tm, hm),
              om = this.surfaceGenerator.getInfoForChunkColumn(mm, Tm, xm, wm, Em, Am),
              Om = {
                biomeInfos: Em,
                heightmapVals: xm.viewJustInnerChunk(),
                caveHeightmapVals: wm.viewJustInnerChunk(),
                treesForChunk: im,
                chunkPrefabs: Dm,
                chunkOres: Rm,
                decodedFixedPointPrefabsForChunk: am,
                caveDecorations: pm,
                surface: om
              };
            return this.mostRecentlyAccessedChunkColumnPos[0] = mm, this.mostRecentlyAccessedChunkColumnPos[1] = Tm, this.mostRecentlyAccessedChunkColumn = Om, this.chunkColumnInfos.set(mm, Tm, Om), Om
          }
          getClosestBiomesForChunk(mm, Tm) {
            return hm.q.create(this.MO, [mm, Tm], this.biomeSelector)
          }
          getHeightMapVals(mm, Tm, fm, Am) {
            const xm = new tT.d(fm, Am, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
            return hm.p.create(this.MO, [mm, Tm], am.g.NumFields, xm)
          }
        }
      },
      39802: (mm, Tm, fm) => {
        fm.d(Tm, {
          b: () => rm,
          f: () => zm,
          j: () => Jm,
          k: () => cm,
          o: () => em,
          p: () => Pm,
          q: () => Sm,
          t: () => Km,
          w: () => Im,
          A: () => nm,
          D: () => Ym,
          H: () => Qm,
          I: () => Vm,
          J: () => jm
        });
        var hm = fm(2839),
          Am = fm.n(hm);
        const am = .5 * (Math.sqrt(3) - 1),
          xm = (3 - Math.sqrt(3)) / 6,
          wm = 1 / 3,
          Dm = 1 / 6,
          im = (Math.sqrt(5) - 1) / 4,
          Rm = (5 - Math.sqrt(5)) / 20,
          pm = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
          Em = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
        const om = class {
          constructor() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
            const Tm = "function" == typeof mm ? mm : function(mm) {
              let Tm = 0,
                fm = 0,
                hm = 0,
                Am = 1;
              const am = function() {
                let mm = 4022871197;
                return function(Tm) {
                  Tm = Tm.toString();
                  for (let fm = 0; fm < Tm.length; fm++) {
                    mm += Tm.charCodeAt(fm);
                    let hm = .02519603282416938 * mm;
                    mm = hm >>> 0, hm -= mm, hm *= mm, mm = hm >>> 0, hm -= mm, mm += 4294967296 * hm
                  }
                  return 2.3283064365386963e-10 * (mm >>> 0)
                }
              }();
              Tm = am(" "), fm = am(" "), hm = am(" "), Tm -= am(mm), Tm < 0 && (Tm += 1);
              fm -= am(mm), fm < 0 && (fm += 1);
              hm -= am(mm), hm < 0 && (hm += 1);
              return function() {
                const mm = 2091639 * Tm + 2.3283064365386963e-10 * Am;
                return Tm = fm, fm = hm, hm = mm - (Am = 0 | mm)
              }
            }(mm);
            this.p = function(mm) {
              const Tm = new Uint8Array(256);
              for (let fm = 0; fm < 256; fm++) Tm[fm] = fm;
              for (let fm = 0; fm < 255; fm++) {
                const hm = fm + ~~(mm() * (256 - fm)),
                  Am = Tm[fm];
                Tm[fm] = Tm[hm], Tm[hm] = Am
              }
              return Tm
            }(Tm), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
            for (let fm = 0; fm < 512; fm++) this.perm[fm] = this.p[255 & fm], this.permMod12[fm] = this.perm[fm] % 12
          }
          noise2D(mm, Tm) {
            const fm = this.permMod12,
              hm = this.perm;
            let Am = 0,
              wm = 0,
              Dm = 0;
            const im = (mm + Tm) * am,
              Rm = Math.floor(mm + im),
              Em = Math.floor(Tm + im),
              om = (Rm + Em) * xm,
              Om = mm - (Rm - om),
              Ym = Tm - (Em - om);
            let qm, jm;
            Om > Ym ? (qm = 1, jm = 0) : (qm = 0, jm = 1);
            const Vm = Om - qm + xm,
              Im = Ym - jm + xm,
              Km = Om - 1 + 2 * xm,
              Qm = Ym - 1 + 2 * xm,
              nm = 255 & Rm,
              Jm = 255 & Em;
            let cm = .5 - Om * Om - Ym * Ym;
            if (cm >= 0) {
              const mm = 3 * fm[nm + hm[Jm]];
              cm *= cm, Am = cm * cm * (pm[mm] * Om + pm[mm + 1] * Ym)
            }
            let zm = .5 - Vm * Vm - Im * Im;
            if (zm >= 0) {
              const mm = 3 * fm[nm + qm + hm[Jm + jm]];
              zm *= zm, wm = zm * zm * (pm[mm] * Vm + pm[mm + 1] * Im)
            }
            let Zm = .5 - Km * Km - Qm * Qm;
            if (Zm >= 0) {
              const mm = 3 * fm[nm + 1 + hm[Jm + 1]];
              Zm *= Zm, Dm = Zm * Zm * (pm[mm] * Km + pm[mm + 1] * Qm)
            }
            return 70 * (Am + wm + Dm)
          }
          noise3D(mm, Tm, fm) {
            const hm = this.permMod12,
              Am = this.perm;
            let am, xm, im, Rm;
            const Em = (mm + Tm + fm) * wm,
              om = Math.floor(mm + Em),
              Om = Math.floor(Tm + Em),
              Ym = Math.floor(fm + Em),
              qm = (om + Om + Ym) * Dm,
              jm = mm - (om - qm),
              Vm = Tm - (Om - qm),
              Im = fm - (Ym - qm);
            let Km, Qm, nm, Jm, cm, zm;
            jm >= Vm ? Vm >= Im ? (Km = 1, Qm = 0, nm = 0, Jm = 1, cm = 1, zm = 0) : jm >= Im ? (Km = 1, Qm = 0, nm = 0, Jm = 1, cm = 0, zm = 1) : (Km = 0, Qm = 0, nm = 1, Jm = 1, cm = 0, zm = 1) : Vm < Im ? (Km = 0, Qm = 0, nm = 1, Jm = 0, cm = 1, zm = 1) : jm < Im ? (Km = 0, Qm = 1, nm = 0, Jm = 0, cm = 1, zm = 1) : (Km = 0, Qm = 1, nm = 0, Jm = 1, cm = 1, zm = 0);
            const Zm = jm - Km + Dm,
              km = Vm - Qm + Dm,
              bm = Im - nm + Dm,
              Sm = jm - Jm + 2 * Dm,
              em = Vm - cm + 2 * Dm,
              Nm = Im - zm + 2 * Dm,
              Gm = jm - 1 + .5,
              Xm = Vm - 1 + .5,
              Pm = Im - 1 + .5,
              Hm = 255 & om,
              ym = 255 & Om,
              Cm = 255 & Ym;
            let rm = .6 - jm * jm - Vm * Vm - Im * Im;
            if (rm < 0) am = 0;
            else {
              const mm = 3 * hm[Hm + Am[ym + Am[Cm]]];
              rm *= rm, am = rm * rm * (pm[mm] * jm + pm[mm + 1] * Vm + pm[mm + 2] * Im)
            }
            let sm = .6 - Zm * Zm - km * km - bm * bm;
            if (sm < 0) xm = 0;
            else {
              const mm = 3 * hm[Hm + Km + Am[ym + Qm + Am[Cm + nm]]];
              sm *= sm, xm = sm * sm * (pm[mm] * Zm + pm[mm + 1] * km + pm[mm + 2] * bm)
            }
            let lm = .6 - Sm * Sm - em * em - Nm * Nm;
            if (lm < 0) im = 0;
            else {
              const mm = 3 * hm[Hm + Jm + Am[ym + cm + Am[Cm + zm]]];
              lm *= lm, im = lm * lm * (pm[mm] * Sm + pm[mm + 1] * em + pm[mm + 2] * Nm)
            }
            let Mm = .6 - Gm * Gm - Xm * Xm - Pm * Pm;
            if (Mm < 0) Rm = 0;
            else {
              const mm = 3 * hm[Hm + 1 + Am[ym + 1 + Am[Cm + 1]]];
              Mm *= Mm, Rm = Mm * Mm * (pm[mm] * Gm + pm[mm + 1] * Xm + pm[mm + 2] * Pm)
            }
            return 32 * (am + xm + im + Rm)
          }
          noise4D(mm, Tm, fm, hm) {
            const Am = this.perm;
            let am, xm, wm, Dm, pm;
            const om = (mm + Tm + fm + hm) * im,
              Om = Math.floor(mm + om),
              Ym = Math.floor(Tm + om),
              qm = Math.floor(fm + om),
              jm = Math.floor(hm + om),
              Vm = (Om + Ym + qm + jm) * Rm,
              Im = mm - (Om - Vm),
              Km = Tm - (Ym - Vm),
              Qm = fm - (qm - Vm),
              nm = hm - (jm - Vm);
            let Jm = 0,
              cm = 0,
              zm = 0,
              Zm = 0;
            Im > Km ? Jm++ : cm++, Im > Qm ? Jm++ : zm++, Im > nm ? Jm++ : Zm++, Km > Qm ? cm++ : zm++, Km > nm ? cm++ : Zm++, Qm > nm ? zm++ : Zm++;
            const km = Jm >= 3 ? 1 : 0,
              bm = cm >= 3 ? 1 : 0,
              Sm = zm >= 3 ? 1 : 0,
              em = Zm >= 3 ? 1 : 0,
              Nm = Jm >= 2 ? 1 : 0,
              Gm = cm >= 2 ? 1 : 0,
              Xm = zm >= 2 ? 1 : 0,
              Pm = Zm >= 2 ? 1 : 0,
              Hm = Jm >= 1 ? 1 : 0,
              ym = cm >= 1 ? 1 : 0,
              Cm = zm >= 1 ? 1 : 0,
              rm = Zm >= 1 ? 1 : 0,
              sm = Im - km + Rm,
              lm = Km - bm + Rm,
              Mm = Qm - Sm + Rm,
              um = nm - em + Rm,
              Bm = Im - Nm + 2 * Rm,
              Lm = Km - Gm + 2 * Rm,
              tm = Qm - Xm + 2 * Rm,
              Um = nm - Pm + 2 * Rm,
              dm = Im - Hm + 3 * Rm,
              gm = Km - ym + 3 * Rm,
              Wm = Qm - Cm + 3 * Rm,
              Fm = nm - rm + 3 * Rm,
              mT = Im - 1 + 4 * Rm,
              TT = Km - 1 + 4 * Rm,
              fT = Qm - 1 + 4 * Rm,
              hT = nm - 1 + 4 * Rm,
              AT = 255 & Om,
              aT = 255 & Ym,
              xT = 255 & qm,
              wT = 255 & jm;
            let DT = .6 - Im * Im - Km * Km - Qm * Qm - nm * nm;
            if (DT < 0) am = 0;
            else {
              const mm = Am[AT + Am[aT + Am[xT + Am[wT]]]] % 32 * 4;
              DT *= DT, am = DT * DT * (Em[mm] * Im + Em[mm + 1] * Km + Em[mm + 2] * Qm + Em[mm + 3] * nm)
            }
            let iT = .6 - sm * sm - lm * lm - Mm * Mm - um * um;
            if (iT < 0) xm = 0;
            else {
              const mm = Am[AT + km + Am[aT + bm + Am[xT + Sm + Am[wT + em]]]] % 32 * 4;
              iT *= iT, xm = iT * iT * (Em[mm] * sm + Em[mm + 1] * lm + Em[mm + 2] * Mm + Em[mm + 3] * um)
            }
            let RT = .6 - Bm * Bm - Lm * Lm - tm * tm - Um * Um;
            if (RT < 0) wm = 0;
            else {
              const mm = Am[AT + Nm + Am[aT + Gm + Am[xT + Xm + Am[wT + Pm]]]] % 32 * 4;
              RT *= RT, wm = RT * RT * (Em[mm] * Bm + Em[mm + 1] * Lm + Em[mm + 2] * tm + Em[mm + 3] * Um)
            }
            let pT = .6 - dm * dm - gm * gm - Wm * Wm - Fm * Fm;
            if (pT < 0) Dm = 0;
            else {
              const mm = Am[AT + Hm + Am[aT + ym + Am[xT + Cm + Am[wT + rm]]]] % 32 * 4;
              pT *= pT, Dm = pT * pT * (Em[mm] * dm + Em[mm + 1] * gm + Em[mm + 2] * Wm + Em[mm + 3] * Fm)
            }
            let ET = .6 - mT * mT - TT * TT - fT * fT - hT * hT;
            if (ET < 0) pm = 0;
            else {
              const mm = Am[AT + 1 + Am[aT + 1 + Am[xT + 1 + Am[wT + 1]]]] % 32 * 4;
              ET *= ET, pm = ET * ET * (Em[mm] * mT + Em[mm + 1] * TT + Em[mm + 2] * fT + Em[mm + 3] * hT)
            }
            return 27 * (am + xm + wm + Dm + pm)
          }
        };
        var Om = fm(39805);

        function Ym(mm, Tm, fm) {
          return Math.abs(mm[0] - Tm) + Math.abs(mm[1] - fm)
        }

        function qm(mm, Tm) {
          const fm = mm[0] - Tm[0],
            hm = mm[1] - Tm[1];
          return fm * fm + hm * hm
        }

        function jm(mm, Tm, fm) {
          const hm = mm[0] - Tm,
            Am = mm[1] - fm;
          return hm * hm + Am * Am
        }

        function Vm(mm, Tm, fm) {
          const hm = mm[0] - Tm,
            Am = mm[1] - fm;
          return Math.sqrt(hm * hm + Am * Am)
        }

        function Im(mm, Tm, fm) {
          const hm = qm(Tm, fm),
            Am = ((mm[0] - Tm[0]) * (fm[0] - Tm[0]) + (mm[1] - Tm[1]) * (fm[1] - Tm[1])) / hm;
          let am, xm, wm;
          return Am < 0 ? (am = Tm[0], xm = Tm[1], wm = 0) : Am > 1 ? (am = fm[0], xm = fm[1], wm = 1) : (am = Tm[0] + Am * (fm[0] - Tm[0]), xm = Tm[1] + Am * (fm[1] - Tm[1]), wm = Am), {
            Tp: Vm(mm, am, xm),
            fracAlong: wm,
            lineSegmentLength: Math.sqrt(hm)
          }
        }

        function Km(mm, Tm, fm) {
          const hm = qm(Tm, fm),
            Am = ((mm[0] - Tm[0]) * (fm[0] - Tm[0]) + (mm[1] - Tm[1]) * (fm[1] - Tm[1])) / hm;
          return Vm(mm, Tm[0] + Am * (fm[0] - Tm[0]), Tm[1] + Am * (fm[1] - Tm[1]))
        }

        function Qm(mm) {
          if (Math.abs(mm[0]) < 1e-4) mm[0] = 0, mm[1] = 1;
          else {
            const Tm = Math.sqrt(mm[0] * mm[0] + mm[1] * mm[1]);
            mm[0] = mm[0] / Tm, mm[1] = mm[1] / Tm
          }
        }

        function nm(mm) {
          let Tm = 0;
          for (const {
              amplitude: fm
            }
            of mm.customOctaves) Tm += fm;
          return Tm
        }
        class Jm {
          constructor(mm, Tm) {
            this.customOctaves = void 0, this._simplexes = [], console.assert(void 0 !== Tm, "Seed must be defined"), this.customOctaves = mm;
            for (let fm = 0; fm < mm.length; fm++) this._simplexes.push(new om(`${Tm}${fm}`))
          }
          maxMagnitude() {
            let mm = 1;
            for (const {
                amplitude: Tm
              }
              of this.customOctaves) mm += Math.abs(Tm);
            return mm
          }
          getOctaves(mm, Tm) {
            let fm = 0;
            for (let hm = 0; hm < this.customOctaves.length; hm++) {
              const {
                amplitude: Am,
                frequency: am
              } = this.customOctaves[hm];
              fm += this._simplexes[hm].noise2D(mm * am, Tm * am) * Am
            }
            return fm
          }
        }
        class cm {
          constructor(mm, Tm, fm) {
            this.customOctaves = void 0, this._simplexes = [], this.remainingAmplitudes = void 0, this.threshold = void 0, console.assert(void 0 !== fm, "Seed must be defined"), this.customOctaves = mm, this.threshold = Tm;
            for (let Am = 0; Am < mm.length; Am++) this._simplexes.push(new om(`${fm}${Am}`));
            this.remainingAmplitudes = new Array(mm.length);
            let hm = 0;
            for (let Am = this.remainingAmplitudes.length - 1; Am >= 0; Am--) hm += this.customOctaves[Am].amplitude, this.remainingAmplitudes[Am] = hm
          }
          getOctaves(mm, Tm) {
            let fm = 0;
            for (let hm = 0; hm < this.customOctaves.length; hm++) {
              if (fm - this.remainingAmplitudes[hm] > this.threshold.high || fm + this.remainingAmplitudes[hm] < this.threshold.low) return Om.b;
              const {
                amplitude: Am,
                frequency: am
              } = this.customOctaves[hm];
              fm += this._simplexes[hm].noise2D(mm * am, Tm * am) * Am
            }
            return fm
          }
        }
        class zm {
          constructor(mm, Tm) {
            this.chunkBottomLeft = Tm, this.array = void 0;
            const fm = mm;
            this.array = Am()(new Int16Array(fm * fm), [fm, fm])
          }
          set(mm, Tm, fm) {
            this.array.set(mm - this.chunkBottomLeft[0], Tm - this.chunkBottomLeft[1], fm)
          }
          get(mm, Tm) {
            return this.array.get(mm - this.chunkBottomLeft[0], Tm - this.chunkBottomLeft[1])
          }
        }
        class Zm {
          constructor(mm, Tm, fm, hm) {
            this.chunkBottomLeft = Tm, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + mm - 1, this.chunkBottomLeft[1] + mm - 1], this.array = Am()(new Int16Array(mm * mm * fm * hm), [mm, mm, fm, hm])
          }
          isInBounds(mm, Tm) {
            return mm >= this.chunkBottomLeft[0] && mm <= this.chunkTopRight[0] && Tm >= this.chunkBottomLeft[1] && Tm <= this.chunkTopRight[1]
          }
          set(mm, Tm, fm, hm, Am) {
            this.array.set(mm - this.chunkBottomLeft[0], Tm - this.chunkBottomLeft[1], fm, hm, Am)
          }
          get(mm, Tm, fm, hm) {
            return this.array.get(mm - this.chunkBottomLeft[0], Tm - this.chunkBottomLeft[1], fm, hm)
          }
          fill(mm) {
            for (let Tm = 0; Tm < this.array.shape[0]; Tm++)
              for (let fm = 0; fm < this.array.shape[1]; fm++)
                for (let hm = 0; hm < this.array.shape[2]; hm++)
                  for (let Am = 0; Am < this.array.shape[3]; Am++) this.array.set(Tm, fm, hm, Am, mm)
          }
        }
        class km {
          constructor(mm, Tm, fm) {
            this.chunkBottomLeft = Tm, this.chunkTopRight = void 0, this.array = void 0, this.chunkTopRight = [this.chunkBottomLeft[0] + mm - 1, this.chunkBottomLeft[1] + mm - 1], this.array = Am()(new Int16Array(mm * mm * fm), [mm, mm, fm])
          }
          isInBounds(mm, Tm) {
            return mm >= this.chunkBottomLeft[0] && mm <= this.chunkTopRight[0] && Tm >= this.chunkBottomLeft[1] && Tm <= this.chunkTopRight[1]
          }
          set(mm, Tm, fm, hm) {
            this.array.set(mm - this.chunkBottomLeft[0], Tm - this.chunkBottomLeft[1], fm, hm)
          }
          get(mm, Tm, fm) {
            return this.array.get(mm - this.chunkBottomLeft[0], Tm - this.chunkBottomLeft[1], fm)
          }
        }
        class bm {
          constructor(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.chunkBottomLeft = Tm, this.needOutsideChunkDist = fm, this.chunkTopRight = void 0, this.array = void 0;
            const hm = mm + 2 * fm,
              am = new Array(hm * hm);
            this.chunkTopRight = [this.chunkBottomLeft[0] + mm - 1, this.chunkBottomLeft[1] + mm - 1], this.array = Am()(am, [hm, hm])
          }
          isInBounds(mm, Tm) {
            return mm >= this.chunkBottomLeft[0] && mm <= this.chunkTopRight[0] && Tm >= this.chunkBottomLeft[1] && Tm <= this.chunkTopRight[1]
          }
          set(mm, Tm, fm) {
            this.array.set(mm - this.chunkBottomLeft[0] + this.needOutsideChunkDist, Tm - this.chunkBottomLeft[1] + this.needOutsideChunkDist, fm)
          }
          get(mm, Tm) {
            return this.array.get(mm - this.chunkBottomLeft[0] + this.needOutsideChunkDist, Tm - this.chunkBottomLeft[1] + this.needOutsideChunkDist)
          }
        }
        class Sm {
          constructor(mm, Tm) {
            this.innerContiguousArray = mm, this.generator = Tm, this.outerSparseArray = []
          }
          static create(mm, Tm, fm) {
            const hm = new bm(mm, Tm);
            for (let Am = Tm[0]; Am < Tm[0] + mm; Am++)
              for (let am = Tm[1]; am < Tm[1] + mm; am++) {
                const mm = fm.generate(Am, am);
                hm.set(Am, am, mm)
              }
            return new Sm(hm, fm)
          }
          getOrGenerate(mm, Tm) {
            var fm;
            if (this.innerContiguousArray.isInBounds(mm, Tm)) return this.innerContiguousArray.get(mm, Tm);
            let hm = null === (fm = this.outerSparseArray[mm]) || void 0 === fm ? void 0 : fm[Tm];
            return void 0 !== hm || (hm = this.generator.generate(mm, Tm), this.outerSparseArray[mm] || (this.outerSparseArray[mm] = []), this.outerSparseArray[mm][Tm] = hm), hm
          }
        }
        class em {
          constructor(mm) {
            this.generator = mm, this.cache = new Map
          }
          getOrGenerate(mm, Tm) {
            let fm = this.cache.get(mm);
            if (void 0 !== fm) {
              const mm = fm.get(Tm);
              if (void 0 !== mm) return mm
            } else fm = new Map, this.cache.set(mm, fm);
            const hm = this.generator.generate(mm, Tm);
            return fm.set(Tm, hm), hm
          }
        }
        class Nm {
          constructor() {
            this.array = []
          }
          get(mm, Tm, fm) {
            var hm, Am;
            return null === (hm = this.array[mm]) || void 0 === hm || null === (Am = hm[Tm]) || void 0 === Am ? void 0 : Am[fm]
          }
          set(mm, Tm, fm, hm) {
            this.array[mm] || (this.array[mm] = []), this.array[mm][Tm] || (this.array[mm][Tm] = []), this.array[mm][Tm][fm] = hm
          }
        }
        class Gm {
          constructor(mm, Tm) {
            this.outerSparseArray = mm, this.innerContiguousArray = Tm
          }
          get(mm, Tm, fm) {
            if (this.innerContiguousArray.isInBounds(mm, Tm)) return this.innerContiguousArray.get(mm, Tm, fm);
            const hm = this.outerSparseArray.get(mm, Tm, fm);
            if (void 0 === hm) throw new Error(`Number not found for x=${mm}, z=${Tm}, thirdIndex=${fm}`);
            return hm
          }
        }
        const Xm = new class {
          get(mm, Tm, fm) {}
        };
        class Pm {
          constructor(mm, Tm) {
            this.innerContiguousArray = mm, this.generator = Tm, this.outerSparseArray = new Nm
          }
          static create(mm, Tm, fm, hm) {
            const Am = new km(mm, Tm, fm);
            for (let am = Tm[0]; am < Tm[0] + mm; am++)
              for (let fm = Tm[1]; fm < Tm[1] + mm; fm++) hm.generateAndSet(am, fm, Am);
            return new Pm(Am, hm)
          }
          getOrGenerate(mm, Tm, fm) {
            if (this.innerContiguousArray.isInBounds(mm, Tm)) return this.innerContiguousArray.get(mm, Tm, fm);
            {
              const hm = this.outerSparseArray.get(mm, Tm, fm);
              if (void 0 !== hm) return hm
            }
            return this.generator.generateAndSet(mm, Tm, this.outerSparseArray), this.outerSparseArray.get(mm, Tm, fm)
          }
          viewJustInnerChunk() {
            return new Gm(Xm, this.innerContiguousArray)
          }
        }
        class Hm {
          constructor() {
            this.array = [], this.lastX = NaN, this.lastZ = NaN, this.lastColumn = void 0
          }
          get(mm, Tm, fm, hm) {
            var Am, am, xm;
            return null === (Am = this.array[mm]) || void 0 === Am || null === (am = Am[Tm]) || void 0 === am || null === (xm = am[fm]) || void 0 === xm ? void 0 : xm[hm]
          }
          set(mm, Tm, fm, hm, Am) {
            let am = this.lastColumn;
            mm === this.lastX && Tm === this.lastZ || (this.array[mm] || (this.array[mm] = []), am = this.array[mm][Tm] ??= [], this.lastX = mm, this.lastZ = Tm, this.lastColumn = am), am[fm] || (am[fm] = []), am[fm][hm] = Am
          }
        }
        class ym {
          constructor(mm, Tm) {
            this.outerSparseArray = mm, this.innerContiguousArray = Tm
          }
          get(mm, Tm, fm, hm) {
            if (this.innerContiguousArray.isInBounds(mm, Tm)) return this.innerContiguousArray.get(mm, Tm, fm, hm);
            const Am = this.outerSparseArray.get(mm, Tm, fm, hm);
            if (void 0 === Am) throw new Error(`Number not found for x=${mm}, z=${Tm}, thirdIndex=${fm}, fourthIndex=${hm}`);
            return Am
          }
        }
        const Cm = new class {
          get(mm, Tm, fm, hm) {}
        };
        class rm {
          constructor(mm, Tm) {
            this.innerContiguousArray = mm, this.generator = Tm, this.outerSparseArray = new Hm
          }
          static create(mm, Tm, fm, hm, Am) {
            const am = new Zm(mm, Tm, fm, hm);
            for (let xm = Tm[0]; xm < Tm[0] + mm; xm++)
              for (let fm = Tm[1]; fm < Tm[1] + mm; fm++) Am.generateAndSet(xm, fm, am);
            return new rm(am, Am)
          }
          getOrGenerate(mm, Tm, fm, hm) {
            if (this.innerContiguousArray.isInBounds(mm, Tm)) return this.innerContiguousArray.get(mm, Tm, fm, hm);
            {
              const Am = this.outerSparseArray.get(mm, Tm, fm, hm);
              if (void 0 !== Am) return Am
            }
            return this.generator.generateAndSet(mm, Tm, this.outerSparseArray), this.outerSparseArray.get(mm, Tm, fm, hm)
          }
          viewJustInnerChunk() {
            return new ym(Cm, this.innerContiguousArray)
          }
        }
      },
      39805: (mm, Tm, fm) => {
        fm.d(Tm, {
          b: () => Dm,
          f: () => xm,
          h: () => im,
          k: () => am,
          o: () => wm,
          p: () => Am,
          r: () => hm
        });
        const hm = {
            seaLevel: 0,
            bedrockLevel: -100
          },
          Am = -1e4,
          am = 1e4,
          xm = 15,
          wm = -1e4,
          Dm = -1e4,
          im = 2
      },
      39812: (mm, Tm, fm) => {
        fm.d(Tm, {
          d: () => Am,
          g: () => hm,
          j: () => Dm,
          m: () => wm,
          n: () => xm,
          r: () => am
        });
        let hm = function(mm) {
            return mm[mm.GroundHeight = 0] = "GroundHeight", mm[mm.WaterHeight = 1] = "WaterHeight", mm[mm.CavesAllowedBelowY = 2] = "CavesAllowedBelowY", mm[mm.IsLake = 3] = "IsLake", mm[mm.NumFields = 4] = "NumFields", mm
          }({}),
          Am = function(mm) {
            return mm[mm.FloorY = 0] = "FloorY", mm[mm.CeilingY = 1] = "CeilingY", mm[mm.NumFields = 2] = "NumFields", mm
          }({});
        const am = ["Cave Golem", "Draugr Zombie", "Draugr Skeleton", "Frost Golem", "Frost Zombie", "Frost Skeleton", "Draugr Knight", "Draugr Huntress", "Magma Golem"];
        let xm = function(mm) {
            return mm[mm.SURFACE = 0] = "SURFACE", mm[mm.UNDERGROUND = 1] = "UNDERGROUND", mm
          }({}),
          wm = function(mm) {
            return mm[mm.HIGH = 0] = "HIGH", mm[mm.MEDIUM = 1] = "MEDIUM", mm[mm.VERY_HIGH = 2] = "VERY_HIGH", mm
          }({}),
          Dm = function(mm) {
            return mm[mm.DistanceToNearestFixedPrefab = 0] = "DistanceToNearestFixedPrefab", mm[mm.HeightOfNearestFixedPrefab = 1] = "HeightOfNearestFixedPrefab", mm[mm.NumFields = 2] = "NumFields", mm
          }({})
      },
      4184: (mm, Tm, fm) => {
        fm.d(Tm, {
          e: () => Dm,
          i: () => am,
          k: () => hm,
          m: () => wm,
          n: () => xm,
          o: () => Am
        });
        class hm {
          constructor(mm) {
            this.a = void 0, this.reseed(mm)
          }
          reseed(mm) {
            let Tm = 2166136261;
            for (let fm = 0; fm < mm.length; fm++) Tm = Math.imul(Tm ^ mm.charCodeAt(fm), 16777619);
            this.a = Tm
          }
          next() {
            let mm = this.a += 1831565813;
            return mm = Math.imul(mm ^ mm >>> 15, 1 | mm), mm ^= mm + Math.imul(mm ^ mm >>> 7, 61 | mm), ((mm ^ mm >>> 14) >>> 0) / 4294967296
          }
        }

        function Am(mm, Tm) {
          for (let fm = 0; fm < mm.length; fm++) {
            const hm = fm + Math.floor(Tm.next() * (mm.length - fm));
            [mm[fm], mm[hm]] = [mm[hm], mm[fm]]
          }
          return mm
        }
        class am {
          constructor(mm) {
            if (this.distribution = void 0, mm.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(mm)}`);
            const Tm = new Set;
            let fm = 0;
            for (const Am of mm) {
              const hm = Am.value;
              if (Tm.has(hm)) throw new Error(`Values must be unique: ${JSON.stringify(mm)}`);
              Tm.add(hm);
              const am = Am.weight;
              if (am <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(mm)}`);
              fm += am
            }
            let hm = 0;
            this.distribution = mm.map((mm => {
              let {
                weight: Tm,
                value: Am
              } = mm;
              return hm += Tm / fm, {
                cumulativeProbability: hm,
                value: Am
              }
            }))
          }
          sample(mm) {
            const Tm = mm.next();
            for (const fm of this.distribution)
              if (Tm < fm.cumulativeProbability) return fm.value;
            return this.distribution[this.distribution.length - 1].value
          }
        }
        class xm {
          constructor(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.offset = void 0, this.multiplier = void 0, mm > Tm) throw new Error(`Min must be less than or equal to Max, but Min=${mm} and Max=${Tm}`);
            fm ? (this.multiplier = mm - Tm, this.offset = Tm) : (this.multiplier = Tm - mm, this.offset = mm)
          }
          sample(mm) {
            return mm.next() * this.multiplier + this.offset
          }
        }
        class wm {
          constructor(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new xm(mm, Tm, fm), !Number.isInteger(mm) || !Number.isInteger(Tm)) throw new Error(`Min and Max must be integers, but Min=${mm} and Max=${Tm}`)
          }
          sample(mm) {
            const Tm = this.uniformRealDistribution.sample(mm);
            return Math.floor(Tm)
          }
        }
        class Dm {
          constructor(mm) {
            this.probability = mm
          }
          sample(mm) {
            return mm.next() < this.probability
          }
        }
      },
      653: (mm, Tm, fm) => {
        fm.d(Tm, {
          A: () => om,
          B: () => Om,
          H: () => Dm,
          M: () => pm,
          b: () => wm,
          h: () => xm,
          k: () => Am,
          u: () => am,
          v: () => Em,
          x: () => im
        });
        var hm = fm(658);
        const Am = 36;
        let am = function(mm) {
            return mm[mm.Maple = 0] = "Maple", mm[mm.Pine = 1] = "Pine", mm[mm.Plum = 2] = "Plum", mm[mm.Cedar = 4] = "Cedar", mm[mm.Aspen = 5] = "Aspen", mm[mm.Jungle = 6] = "Jungle", mm[mm.Palm = 7] = "Palm", mm[mm.AutumnMaple = 8] = "AutumnMaple", mm[mm.Pear = 9] = "Pear", mm[mm.Cherry = 10] = "Cherry", mm[mm.Spectral = 11] = "Spectral", mm[mm.Mango = 12] = "Mango", mm[mm.AutumnAspen = 13] = "AutumnAspen", mm[mm.Dead = 14] = "Dead", mm[mm.FallenLog = 15] = "FallenLog", mm
          }({}),
          xm = function(mm) {
            return mm[mm.COMMON = 0] = "COMMON", mm[mm.UNCOMMON = 1] = "UNCOMMON", mm[mm.RARE = 2] = "RARE", mm[mm.EPIC = 3] = "EPIC", mm[mm.LEGENDARY = 4] = "LEGENDARY", mm
          }({}),
          wm = function(mm) {
            return mm[mm.PLAINS = 0] = "PLAINS", mm[mm.AUTUMN = 1] = "AUTUMN", mm[mm.OASIS = 2] = "OASIS", mm
          }({});

        function Dm(mm) {
          return void 0 === mm || null === mm
        }
        const im = 32,
          Rm = 0 | Math.log2(im);

        function pm(mm) {
          return mm >> Rm
        }

        function Em(mm) {
          return mm << Rm
        }

        function om(mm) {
          return JSON.stringify(mm)
        }
        om(new Array(Am).fill(null));
        hm.d, Number(atob("NQ==")), Number(atob("MTM="));

        function Om(mm, Tm) {
          if ("Air" === mm) return 0;
          const fm = Tm[mm];
          return null === fm || void 0 === fm ? void 0 : fm.id
        }
      },
      658: (mm, Tm, fm) => {
        fm.d(Tm, {
          d: () => hm
        });
        const hm = 871
      },
      225: (mm, Tm, fm) => {
        var hm = {
          "./localConfigValues.ts.clientRelease": 233
        };

        function Am(mm) {
          var Tm = am(mm);
          return fm(Tm)
        }

        function am(mm) {
          if (!fm.o(hm, mm)) {
            var Tm = new Error("Cannot find module '" + mm + "'");
            throw Tm.code = "MODULE_NOT_FOUND", Tm
          }
          return hm[mm]
        }
        Am.keys = function() {
          return Object.keys(hm)
        }, Am.resolve = am, mm.exports = Am, Am.id = 225
      },
      233: (mm, Tm, fm) => {
        mm.exports = fm.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
      }
    },
    Tm = {};

  function fm(hm) {
    var Am = Tm[hm];
    if (void 0 !== Am) return Am.exports;
    var am = Tm[hm] = {
      exports: {}
    };
    return mm[hm](am, am.exports, fm), am.exports
  }
  fm.m = mm, fm.n = mm => {
    var Tm = mm && mm.__esModule ? () => mm.default : () => mm;
    return fm.d(Tm, {
      a: Tm
    }), Tm
  }, fm.d = (mm, Tm) => {
    for (var hm in Tm) fm.o(Tm, hm) && !fm.o(mm, hm) && Object.defineProperty(mm, hm, {
      enumerable: !0,
      get: Tm[hm]
    })
  }, fm.f = {}, fm.e = mm => Promise.all(Object.keys(fm.f).reduce(((Tm, hm) => (fm.f[hm](mm, Tm), Tm)), [])), fm.u = mm => "static/js/mpd96o." + (69 === mm ? "worldgenTables" : mm) + "." + {
    69: "3d0e50bb",
    72: "3ba7e611",
    73: "140a7a1d",
    74: "5b7d911a",
    75: "aaa372b8"
  } [mm] + ".chunk.js", fm.miniCssF = mm => {}, fm.o = (mm, Tm) => Object.prototype.hasOwnProperty.call(mm, Tm), fm.r = mm => {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(mm, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(mm, "__esModule", {
      value: !0
    })
  }, fm.j = 70, fm.p = "/", (() => {
    var mm = fm.u,
      Tm = fm.e,
      hm = {},
      Am = {};
    fm.u = function(Tm) {
      return mm(Tm) + (hm.hasOwnProperty(Tm) ? "?" + hm[Tm] : "")
    }, fm.e = function(am) {
      return Tm(am).catch((function(Tm) {
        var xm = Am.hasOwnProperty(am) ? Am[am] : 4;
        if (xm < 1) {
          var wm = mm(am);
          throw Tm.message = "Loading chunk " + am + " failed after 4 retries.\n(" + wm + ")", Tm.request = wm, hm[am] = "cache-bust=" + Date.now(), setTimeout((function() {
            delete Am[am]
          }), 0), Tm
        }
        return new Promise((function(mm) {
          var Tm = 4 - xm + 1;
          setTimeout((function() {
            var Tm = "cache-bust=" + Date.now();
            hm[am] = Tm, Am[am] = xm - 1, mm(fm.e(am))
          }), function(mm) {
            return 500 * Math.pow(2, mm)
          }(Tm))
        }))
      }))
    }
  })(), (() => {
    var mm = {
        70: 0
      },
      Tm = Tm => {
        var hm, Am, am = Tm.ids,
          xm = Tm.modules,
          wm = Tm.runtime,
          Dm = 0;
        for (hm in xm) fm.o(xm, hm) && (fm.m[hm] = xm[hm]);
        for (wm && wm(fm); Dm < am.length; Dm++) Am = am[Dm], fm.o(mm, Am) && mm[Am] && mm[Am][0](), mm[am[Dm]] = 0
      };
    fm.f.j = (hm, Am) => {
      var am = fm.o(mm, hm) ? mm[hm] : void 0;
      if (0 !== am)
        if (am) Am.push(am[1]);
        else {
          var xm = import("../../" + fm.u(hm)).then(Tm, (Tm => {
            throw 0 !== mm[hm] && (mm[hm] = void 0), Tm
          }));
          xm = Promise.race([xm, new Promise((Tm => am = mm[hm] = [Tm]))]);
          Am.push(am[1] = xm)
        }
    }
  })();
  var hm = {};

  function Am(mm, Tm, fm) {
    Tm in mm || Object.defineProperty(mm, Tm, {
      value: fm,
      writable: !0,
      configurable: !0
    })
  }

  function am(mm) {
    const Tm = Math.trunc(mm) || 0,
      fm = Tm < 0 ? this.length + Tm : Tm;
    return fm < 0 || fm >= this.length ? void 0 : this[fm]
  }

  function xm(mm, Tm) {
    for (let fm = this.length - 1; fm >= 0; fm--)
      if (mm.call(Tm, this[fm], fm, this)) return fm;
    return -1
  }

  function wm(mm, Tm) {
    const fm = xm.call(this, mm, Tm);
    return -1 === fm ? void 0 : this[fm]
  }
  fm.r(hm), fm.d(hm, {
    Gq: () => Cm,
    Xq: () => rm,
    Vp: () => sm,
    default: () => nT,
    initSync: () => QT,
    Ip: () => lm,
    Kp: () => Mm,
    Qp: () => um,
    np: () => Bm,
    Jp: () => Lm,
    cp: () => tm,
    zp: () => Um,
    Zp: () => dm,
    Np: () => gm,
    Xp: () => Wm,
    Pp: () => Fm
  }), Am(Object, "hasOwn", ((mm, Tm) => Object.prototype.hasOwnProperty.call(mm, Tm)));
  const Dm = Object.getPrototypeOf(Uint8Array.prototype);
  for (const Of of [Array.prototype, Dm]) Am(Of, "at", am), Am(Of, "findLast", wm), Am(Of, "findLastIndex", xm);
  Am(String.prototype, "at", am);
  var im = fm(2839),
    Rm = fm.n(im);
  class pm extends Error {
    retryable;
    constructor(mm, Tm, fm) {
      super(mm, fm), this.retryable = Tm
    }
  }
  class Em extends pm {}
  class om extends Error {}
  globalThis.crypto, globalThis.isSecureContext, Reflect.apply, Object.defineProperty, "undefined" === typeof Response || Response.prototype.arrayBuffer, Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get, "undefined" === typeof Response || Response.prototype.clone, "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "body"), "undefined" === typeof Response || Object.getOwnPropertyDescriptor(Response.prototype, "type"), "undefined" === typeof ReadableStream || ReadableStream.prototype.getReader, "undefined" === typeof ReadableStreamDefaultReader || ReadableStreamDefaultReader.prototype.read, Uint8Array.prototype.set, "undefined" === typeof fetch || fetch, "undefined" === typeof WebAssembly || WebAssembly, Array.from({
    length: 256
  }, ((mm, Tm) => Tm.toString(16).padStart(2, "0"))), new Set;
  let Om = "unloaded",
    Ym = null,
    qm = null,
    jm = null,
    Vm = null;
  const Im = new Set;
  new Set;
  let Km = null,
    Qm = null,
    nm = null,
    Jm = !1,
    cm = 0;

  function zm() {
    return "ready" === Om
  }

  function Zm() {
    return Om
  }

  function km() {
    return null === Ym ? "not failed" : `${Ym}: ${(mm=qm)instanceof Error?`${mm.name}: ${mm.message}`:String(mm)}`;
    var mm
  }

  function bm() {
    if (!zm()) throw new Error(`Bloxd wasm is not ready (${Zm()}): check isBloxdWasmReady() first`);
    return Km
  }

  function Sm() {
    if (!Vm) throw new Error("Bloxd wasm has not been instantiated");
    return Vm
  }

  function em(mm, Tm) {
    let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (Nm()) {
      let Am;
      try {
        Am = mm()
      } catch (hm) {
        return Xm(hm, function(mm) {
          return mm instanceof om ? "integrity" : mm instanceof Em ? "timeout" : mm instanceof pm ? "fetch" : "compile"
        }(hm)), !1
      }
      try {
        Gm(fm, Tm, Am, Tm.initSync({
          module: Am
        }))
      } catch (hm) {
        Xm(hm, "instantiate")
      }
    }
    return zm()
  }

  function Nm() {
    return "unloaded" === Om && (Om = "loading", !0)
  }

  function Gm(mm, Tm, fm, hm) {
    Qm = mm, Km = Tm, jm = fm, Vm = hm.memory;
    const {
      Np: Am
    } = Tm;
    cm = "function" === typeof Am ? Am() : 0, Om = "ready",
      function() {
        if (Jm) return;
        Jm = !0;
        const mm = console.error;
        console.error = function() {
          for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
          const [Am] = fm;
          "string" === typeof Am && Am.startsWith("panicked at") && (nm = Am, function() {
            if (!Vm || 0 === cm) return 0;
            const mm = new Uint32Array(Vm.buffer, cm, 1),
              Tm = mm[0] ?? 0;
            mm[0] = 0
          }()), mm.apply(console, fm)
        }
      }()
  }

  function Xm(mm, Tm) {
    Om = "failed", Ym = Tm, qm = mm, console.error(`Bloxd wasm failed (${Tm}):`, mm);
    const fm = [...Im];
    Im.clear();
    for (const hm of fm) Pm(hm)
  }

  function Pm(mm) {
    try {
      mm()
    } catch (Tm) {
      console.error("A Bloxd wasm failure listener threw:", Tm)
    }
  }
  const Hm = ["none", "idle", "now"];

  function ym() {
    const mm = () => bm();
    return {
      memoryBytes: () => Sm().buffer.byteLength,
      reserveUpFront: Tm => mm().np(Tm),
      reserveAhead: Tm => mm().Qp(Tm),
      setCeiling: Tm => {
        mm().Jp(Tm)
      },
      lowWater: () => Hm[mm().Kp()] ?? "none",
      stats: () => function(mm) {
        const Tm = new Uint32Array(Sm().buffer, mm, 17),
          fm = mm => Tm[mm] ?? 0,
          hm = mm => ({
            upFront: fm(mm),
            ahead: fm(mm + 1),
            onDemandInFrame: fm(mm + 2),
            onDemand: fm(mm + 3)
          });
        return {
          memoryBytes: fm(0),
          initialBytes: fm(1),
          liveBytes: fm(2),
          peakLiveBytes: fm(3),
          headroomBytes: fm(4),
          unusedBytes: fm(5),
          ceilingBytes: fm(6),
          reservesRefused: fm(7),
          grows: hm(8),
          grownBytes: hm(12),
          allocationsRefused: fm(16)
        }
      }(mm().cp()),
      takeBallast: () => mm().zp(),
      takePressure: () => mm().Zp()
    }
  }
  class Cm {
    __destroy_into_raw() {
      const mm = this.__wbg_ptr;
      return this.__wbg_ptr = 0, TT.unregister(this), mm
    }
    free() {
      const mm = this.__destroy_into_raw();
      VT.OKp0(mm, 0)
    }
    encode(mm) {
      const Tm = RT(mm, VT.sXun, VT.dbzZ),
        fm = IT;
      VT.vXOU(this.__wbg_ptr, Tm, fm)
    }
    Hq() {
      return VT.ynKp(this.__wbg_ptr) >>> 0
    }
    constructor() {
      const mm = VT.vZEd();
      return this.__wbg_ptr = mm, TT.register(this, this.__wbg_ptr, this), this
    }
    yq() {
      return VT.LhHA(this.__wbg_ptr) >>> 0
    }
    Cq() {
      return VT.TxIz(this.__wbg_ptr) >>> 0
    }
    Pq() {
      return VT.EcJJ(this.__wbg_ptr) >>> 0
    }
  }
  Symbol.dispose && (Cm.prototype[Symbol.dispose] = Cm.prototype.free);
  class rm {
    __destroy_into_raw() {
      const mm = this.__wbg_ptr;
      return this.__wbg_ptr = 0, fT.unregister(this), mm
    }
    free() {
      const mm = this.__destroy_into_raw();
      VT.dFZf(mm, 0)
    }
    init(mm) {
      return VT.vbhE(this.__wbg_ptr, mm) >>> 0
    }
    Fp(mm) {
      return VT.p3tD(this.__wbg_ptr, mm) >>> 0
    }
    constructor(mm) {
      const Tm = VT.VZV0(void 0 === (fm = mm) || null === fm ? Number.MAX_SAFE_INTEGER : mm >>> 0);
      var fm;
      return this.__wbg_ptr = Tm, fT.register(this, this.__wbg_ptr, this), this
    }
    AE() {
      return VT.CZ1e(this.__wbg_ptr) >>> 0
    }
    TE() {
      return VT.TKNu(this.__wbg_ptr) >>> 0
    }
    run(mm) {
      return VT.jLuF(this.__wbg_ptr, mm) >>> 0
    }
  }

  function sm(mm, Tm) {
    const fm = RT(mm, VT.sXun, VT.dbzZ),
      hm = IT,
      Am = VT.BaS9(fm, hm, Tm);
    if (Am[1]) throw pT(Am[0])
  }

  function lm() {
    VT.jMhD()
  }

  function Mm() {
    return VT.ZZvs() >>> 0
  }

  function um(mm) {
    return 0 !== VT.bRfJ(mm)
  }

  function Bm(mm) {
    return 0 !== VT.zIZi(mm)
  }

  function Lm(mm) {
    VT.h9hB(mm)
  }

  function tm() {
    return VT.QltQ() >>> 0
  }

  function Um() {
    return VT.TqNc() >>> 0
  }

  function dm() {
    return 0 !== VT.hk84()
  }

  function gm() {
    return VT.likM() >>> 0
  }

  function Wm() {
    let mm, Tm;
    try {
      const fm = VT.pxgK();
      return mm = fm[0], Tm = fm[1], AT(fm[0], fm[1])
    } finally {
      VT.AnxH(mm, Tm, 1)
    }
  }

  function Fm(mm) {
    VT.zpFD(hT(mm))
  }

  function mT() {
    return {
      __proto__: null,
      hWOW: {
        __proto__: null,
        zr3x: function(mm, Tm) {
          return hT(Error(AT(mm, Tm)))
        },
        aKHn: function(mm, Tm) {
          throw new Error(AT(mm, Tm))
        },
        a5CX: function(mm) {
          wT(mm).call()
        },
        ZM0L: function(mm, Tm) {
          console.error(AT(mm, Tm))
        },
        XA5L: function(mm) {
          pT(mm)
        }
      }
    }
  }
  Symbol.dispose && (rm.prototype[Symbol.dispose] = rm.prototype.free);
  const TT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((mm => VT.OKp0(mm, 1))),
    fT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((mm => VT.dFZf(mm, 1)));

  function hT(mm) {
    iT === DT.length && DT.push(DT.length + 1);
    const Tm = iT;
    return iT = DT[Tm], DT[Tm] = mm, Tm
  }

  function AT(mm, Tm) {
    return function(mm, Tm) {
      OT += Tm, OT >= oT && (ET = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      }), ET.decode(), OT = Tm);
      return ET.decode(xT().subarray(mm, mm + Tm))
    }(mm >>> 0, Tm)
  }
  let aT = null;

  function xT() {
    return null !== aT && 0 !== aT.byteLength || (aT = new Uint8Array(VT.memory.buffer)), aT
  }

  function wT(mm) {
    return DT[mm]
  }
  let DT = new Array(1024).fill(void 0);
  DT.push(void 0, null, !0, !1);
  let iT = DT.length;

  function RT(mm, Tm, fm) {
    if (void 0 === fm) {
      const fm = YT.encode(mm),
        hm = Tm(fm.length, 1) >>> 0;
      return xT().subarray(hm, hm + fm.length).set(fm), IT = fm.length, hm
    }
    let hm = mm.length,
      Am = Tm(hm, 1) >>> 0;
    const am = xT();
    let xm = 0;
    for (; xm < hm; xm++) {
      const Tm = mm.charCodeAt(xm);
      if (Tm > 127) break;
      am[Am + xm] = Tm
    }
    if (xm !== hm) {
      0 !== xm && (mm = mm.slice(xm)), Am = fm(Am, hm, hm = xm + 3 * mm.length, 1) >>> 0;
      const Tm = xT().subarray(Am + xm, Am + hm);
      xm += YT.encodeInto(mm, Tm).written, Am = fm(Am, hm, xm, 1) >>> 0
    }
    return IT = xm, Am
  }

  function pT(mm) {
    const Tm = wT(mm);
    return function(mm) {
      mm < 1028 || (DT[mm] = iT, iT = mm)
    }(mm), Tm
  }
  let ET = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
  });
  ET.decode();
  const oT = 2146435072;
  let OT = 0;
  const YT = new TextEncoder;
  "encodeInto" in YT || (YT.encodeInto = function(mm, Tm) {
    const fm = YT.encode(mm);
    return Tm.set(fm), {
      read: mm.length,
      written: fm.length
    }
  });
  let qT, jT, VT, IT = 0;

  function KT(mm, Tm) {
    return jT = mm, VT = mm.exports, qT = Tm, aT = null, VT.Bvr4(), VT
  }

  function QT(mm) {
    if (void 0 !== VT) return VT;
    void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
      module: mm
    } = mm) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const Tm = mT();
    mm instanceof WebAssembly.Module || (mm = new WebAssembly.Module(mm));
    return KT(new WebAssembly.Instance(mm, Tm), mm)
  }
  async function nT(mm) {
    if (void 0 !== VT) return VT;
    void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
      module_or_path: mm
    } = mm) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
    const Tm = mT();
    ("string" === typeof mm || "function" === typeof Request && mm instanceof Request || "function" === typeof URL && mm instanceof URL) && (mm = fetch(mm));
    const {
      instance: fm,
      module: hm
    } = await async function(mm, Tm) {
      if ("function" === typeof Response && mm instanceof Response) {
        if (!mm.ok) throw new Error(`failed to fetch Wasm: ${mm.status} ${mm.statusText} fetching '${mm.url}'`);
        if ("function" === typeof WebAssembly.instantiateStreaming) try {
          return await WebAssembly.instantiateStreaming(mm, Tm)
        } catch (fm) {
          if (! function(mm) {
              switch (mm) {
                case "basic":
                case "cors":
                case "default":
                  return !0
              }
              return !1
            }(mm.type) || "application/wasm" === mm.headers.get("Content-Type")) throw fm;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", fm)
        }
        const hm = await mm.arrayBuffer();
        return await WebAssembly.instantiate(hm, Tm)
      } {
        const fm = await WebAssembly.instantiate(mm, Tm);
        return fm instanceof WebAssembly.Instance ? {
          instance: fm,
          module: mm
        } : fm
      }
    }(await mm, Tm);
    return KT(fm, hm)
  }

  function JT() {
    return function(mm, Tm) {
      if (!zm()) throw new Error(`Bloxd wasm is not ready (${Zm()}): check isBloxdWasmReady() first`);
      if (Km !== mm) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${Tm}`)
    }(hm, "the wasm client's workers' exports"), hm
  }
  var cT = fm(653);
  class zT {
    constructor(mm, Tm, hm, Am, am, xm, wm, Dm, im) {
      var Rm, pm;
      this.defaultGenerator = void 0, this.layerEntries = void 0;
      const {
        WorldGenerator: Em
      } = fm(39898), om = function(mm, Tm, fm) {
        if (null === mm) return null;
        for (const wm of mm.Lm) NT(wm, fm);
        const hm = mm.terrain;
        if (null === hm) return {
          Lm: mm.Lm,
          buildBiomes: null
        };
        const Am = Object.hasOwn(Tm, hm.name) ? Tm[hm.name] : void 0;
        if (void 0 === Am) {
          const mm = Object.keys(Tm);
          throw new Error(`Custom world-gen terrain "${hm.name}" is not in this generator's catalogue (${mm.length>0?mm.join(", "):"empty"})`)
        }
        const am = Am(),
          xm = function(mm, Tm) {
            if (!Tm.parseOptions) {
              if (null !== mm.Bm) throw new Error(`Custom world-gen terrain "${mm.name}" takes no options`);
              return null
            }
            let fm = null;
            if (null !== mm.Bm) try {
              fm = JSON.parse(mm.Bm)
            } catch (hm) {
              throw new Error(`Custom world-gen terrain "${mm.name}" has invalid optionsJson: ${String(hm)}`, {
                cause: hm
              })
            }
            return Tm.parseOptions(fm)
          }(hm, am);
        return {
          Lm: mm.Lm,
          buildBiomes: mm => am.buildBiomes(mm, xm)
        }
      }(null !== (Rm = null === wm || void 0 === wm ? void 0 : wm.lm) && void 0 !== Rm ? Rm : null, Dm, Tm);
      this.defaultGenerator = new Em(mm, Tm, hm, Am, am, xm, null, om, im);
      const Om = null !== (pm = null === wm || void 0 === wm ? void 0 : wm.layers) && void 0 !== pm ? pm : [];
      ! function(mm, Tm) {
        for (const hm of mm) ZT(hm, Tm);
        const fm = [...mm].sort(((mm, Tm) => mm.Dm - Tm.Dm));
        for (let hm = 1; hm < fm.length; hm++)
          if (fm[hm].Dm < fm[hm - 1].im) throw new Error(`Custom world-gen layers overlap: [${fm[hm-1].Dm}, ${fm[hm-1].im}) and [${fm[hm].Dm}, ${fm[hm].im})`)
      }(Om, Tm), this.layerEntries = Om.map((fm => ({
        layer: fm,
        generator: new Em(mm, Tm, hm, Am, am, xm, fm, null, im)
      })))
    }
    getChunk(mm, Tm, fm, hm) {
      for (const {
          layer: Am,
          generator: am
        }
        of this.layerEntries)
        if (fm >= Am.Dm && fm < Am.im) return am.getChunk(mm, Tm, fm - Am.Rm, hm);
      return this.defaultGenerator.getChunk(mm, Tm, fm, hm)
    }
    getBiomeSelector() {
      return this.defaultGenerator.biomeSelector
    }
    getPrefabLootChests(mm, Tm, fm, hm, Am) {
      return this.defaultGenerator.getPrefabLootChests(mm, Tm, fm, hm, Am)
    }
    getTreeGenerator() {
      return this.defaultGenerator.treeGenerator
    }
    getOresForChunkColumn(mm, Tm) {
      return this.defaultGenerator.getOresForChunkColumn(mm, Tm)
    }
  }

  function ZT(mm, Tm) {
    if (mm.Dm >= mm.im) throw new Error(`Custom world-gen layer has minY (${mm.Dm}) >= maxY (${mm.im})`);
    if (mm.Dm % cT.x !== 0 || mm.im % cT.x !== 0 || mm.Rm % cT.x !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${cT.x}); got minY=${mm.Dm}, maxY=${mm.im}, groundY=${mm.Rm}`);
    if (function(mm, Tm) {
        if (void 0 === (0, cT.B)(mm.Om, Tm)) throw new Error(`Custom world-gen caves lavaPitBlock "${mm.Om}" not found in blockMetadata`);
        if (mm.Ym)
          for (const fm of mm.Ym) kT(fm, Tm)
      }(mm.Em, Tm), 0 === mm.Sm.length) throw new Error("Custom world-gen layer must have at least one biome");
    let fm = 0;
    for (const hm of mm.Sm) eT(hm, Tm), fm += hm.frequency;
    if (fm <= 0) throw new Error("Custom world-gen layer biome frequencies must sum to > 0");
    for (const hm of mm.ym) NT(hm, Tm)
  }

  function kT(mm, Tm) {
    const {
      blockName: fm,
      jm: hm,
      Vm: Am,
      Im: am
    } = mm;
    if (void 0 === (0, cT.B)(fm, Tm)) throw new Error(`Custom world-gen cave decoration blockName "${fm}" not found in blockMetadata`);
    if (!hm && !Am && !am) throw new Error(`Custom world-gen cave decoration "${fm}" must allow at least one of floor/walls/ceiling anchoring`);
    if (Am)
      for (const xm of ["meta|rot1|side", "meta|rot2|side", "meta|rot3|side", "meta|rot4|side"]) bT(fm, xm, Tm);
    if (am && bT(fm, "meta|rot1|top", Tm), ST(mm.Km, fm, "Km"), ST(mm.Qm, fm, "Qm"), !Number.isInteger(mm.nm) || mm.nm < 0) throw new Error(`Custom world-gen cave decoration "${fm}" minPlacements must be a non-negative integer, got ${mm.nm}`);
    if (!(0, cT.H)(mm.Jm) && (ST(mm.Jm.Zm, fm, "depthRamp.deepClusterChance"), mm.Jm.km <= mm.Jm.bm)) throw new Error(`Custom world-gen cave decoration "${fm}" deepY must be strictly smaller than shallowY, but ${mm.Jm.km} <= ${mm.Jm.bm} `)
  }

  function bT(mm, Tm, fm) {
    const hm = `${mm}|${Tm}`;
    if (void 0 === (0, cT.B)(hm, fm)) throw new Error(`Custom world-gen cave decoration "${mm}" is missing directional variant "${hm}" required for wall/ceiling anchoring`)
  }

  function ST(mm, Tm, fm) {
    if (mm < 0 || mm > 1) throw new Error(`Custom world-gen cave decoration "${Tm}" ${fm} must be in [0, 1], got ${mm}`)
  }

  function eT(mm, Tm) {
    if (mm.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${mm.frequency}`);
    if (void 0 === (0, cT.B)(mm.Gm, Tm)) throw new Error(`Custom world-gen biome topsoilBlock "${mm.Gm}" not found in blockMetadata`);
    if (void 0 === (0, cT.B)(mm.Xm, Tm)) throw new Error(`Custom world-gen biome lowsoilBlock "${mm.Xm}" not found in blockMetadata`);
    if (0 === mm.Pm.length) throw new Error("Custom world-gen biome must have at least one stoneType");
    for (const fm of mm.Pm) {
      if (fm.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${fm.frequency}`);
      if (void 0 === (0, cT.B)(fm.blockName, Tm)) throw new Error(`Custom world-gen biome stoneType blockName "${fm.blockName}" not found in blockMetadata`)
    }
  }

  function NT(mm, Tm) {
    if (void 0 === (0, cT.B)(mm.blockName, Tm)) throw new Error(`Custom world-gen ore blockName "${mm.blockName}" not found in blockMetadata`);
    if (mm.radius < 0) throw new Error(`Custom world-gen ore "${mm.blockName}" radius must be >= 0, got ${mm.radius}`);
    if (mm.rm <= 0) throw new Error(`Custom world-gen ore "${mm.blockName}" minDistBetweenDeposits must be > 0, got ${mm.rm}`);
    if (mm.Dm > mm.im) throw new Error(`Custom world-gen ore "${mm.blockName}" minY (${mm.Dm}) must be <= maxY (${mm.im})`);
    if (mm.sm < 0 || mm.sm > 1) throw new Error(`Custom world-gen ore "${mm.blockName}" spawnChance must be in [0, 1], got ${mm.sm}`)
  }
  const GT = "buildAFactory2/wasteland",
    XT = {
      blockName: "Uranium Ore",
      radius: 2,
      rm: 10,
      Dm: -98,
      im: -78,
      sm: .4
    },
    PT = [{
      blockName: "Copper Ore",
      radius: 2,
      rm: 6,
      Dm: -40,
      im: 20,
      sm: .6
    }, {
      blockName: "Voltite Ore",
      radius: 2,
      rm: 10,
      Dm: -75,
      im: -55,
      sm: .4
    }],
    HT = {
      name: GT,
      Bm: null
    };
  const yT = {
    [GT]: () => fm(39789).c
  };
  Math.round(29.999999999999996);
  const CT = 0,
    rT = 1,
    sT = 2,
    lT = 32;
  const MT = 1048576;
  const uT = "1336701983750492191";

  function BT() {
    {
      if ("undefined" === typeof window) return !1;
      const mm = window.location.hostname;
      return mm.includes("preprod") || mm.includes(uT)
    }
  }
  const LT = [8, 11, 15, 16, 17, 18, 19],
    vT = [];
  for (let Of = 0; Of <= 30; Of++) LT.includes(Of) || vT.push(10 * Of);
  const tT = vT;
  tT.filter((mm => 0 !== mm));
  const UT = function(mm) {
      if (void 0 === mm || "" === mm) return 0;
      const Tm = Number(mm);
      if (!tT.includes(Tm)) throw new Error(`Invalid port offset "${mm}". Must be one of: ${tT.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
      return Tm
    }("0"),
    dT = 4500;

  function gT(mm, Tm) {
    const fm = {};
    for (const hm of Object.keys(mm)) fm[hm] = mm[hm] + Tm;
    return fm
  }
  const WT = {
      1: 6585,
      2: 6586,
      3: 6587
    },
    FT = {
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
    mf = {
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
  ! function(mm) {
    const Tm = BT() ? WT : FT;
    gT(Tm, mm), gT(mf, mm)
  }(UT);
  const Tf = {
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
  !0 === Tf.offlineMode && (console.log("Booting in offline mode..."), !1 === Tf.useLocalDatabase && console.log("useLocalDatabase is false in offline mode. Setting useLocalDatabase to true."), Tf.useLocalDatabase = !0, !0 === Tf.greenlightChecksEnabled && console.log("greenlightChecksEnabled is true in offline mode. Setting greenlightChecksEnabled to false."), Tf.greenlightChecksEnabled = !1, Tf.useBillingSandbox = !0);
  const ff = 10,
    hf = 3,
    Af = (Tf.greenlightChecksEnabled, Tf.greenlightChecksEnabled, {
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
  const af = new Set;
  for (const Of in Af) {
    const mm = Af[Of].code;
    if (af.has(mm)) throw new Error(`Duplicate leave code: ${mm}`);
    af.add(mm)
  }! function() {
    const mm = wf(ff + 1, hf + 1);
    let Tm = mm;
    for (; xf(Tm) < mm;) Tm++
  }();

  function xf(mm) {
    return mm - Math.floor(mm / 6)
  }

  function wf(mm, Tm) {
    const fm = Math.max(mm, Tm);
    let hm = 0;
    for (let Am = -fm; Am <= fm; Am++)
      for (let am = -fm; am <= fm; am++)
        for (let xm = -fm; xm <= fm; xm++) Df(mm, Tm, Am, am, xm) && hm++;
    return hm
  }

  function Df(mm, Tm, fm, hm, Am) {
    const am = fm * fm + Am * Am;
    return mm === Tm ? am + hm * hm <= mm * mm : mm > Tm ? Math.abs(hm) <= Tm && am + hm * hm <= mm * mm : am <= mm * mm && am + hm * hm <= Tm * Tm
  }
  const Rf = 65536;
  ! function(mm) {
    const Tm = 6815744 + (fm = mm, Math.floor(33554432 * fm / 6144)) + 135680 * mm;
    var fm;
    Math.ceil((85983232 + Tm) / Rf)
  }(6144);
  const pf = 16 * MT;

  function Ef(mm) {
    return function(mm) {
      return em((() => mm), hm)
    }(mm)
  }
  const of = globalThis.WorkerGlobalScope;
  if (void 0 !== of && globalThis instanceof of ) {
    const mm = Promise.all([fm.e(72), fm.e(75), fm.e(74), fm.e(73), fm.e(69)]).then((() => fm(39883))).then((mm => {
      let {
        worldGenMetadata: Tm
      } = mm;
      return Tm
    }));
    mm.catch((() => {})),
      function(mm, Tm) {
        let {
          initWasm: fm = Ef,
          terrains: hm,
          loadTables: Am,
          now: am
        } = Tm, xm = 0, wm = null, Dm = null, im = null, pm = new Uint16Array(0), Em = !1, om = !1;
        const Om = function(mm, Tm, fm) {
            let hm = 0,
              Am = -1,
              am = !1;
            const xm = () => {
              if (am) return;
              let xm;
              hm = 0;
              try {
                xm = mm.stats()
              } catch (wm) {
                return am = !0, void fm(wm)
              }
              Am = xm.memoryBytes, Tm(xm)
            };
            return {
              now: xm,
              afterJob: () => {
                hm++, (hm >= 64 || mm.memoryBytes() !== Am) && xm()
              }
            }
          }(ym(), (Tm => {
            mm.postMessage({
              type: "memory",
              stats: Tm
            })
          }), (Tm => {
            om = !0, Dm = null, mm.postMessage({
              type: "lost",
              reason: `its memory stats trapped (${String(Tm)})`
            })
          })),
          Ym = (mm, Tm) => {
            if (!Dm) throw new Error("no encoder");
            try {
              const fm = Dm.Pq();
              new Uint16Array(Sm().buffer, fm, mm.length).set(mm), Dm.encode(Tm);
              const hm = function(mm) {
                return String.fromCharCode(...new Uint8Array(Sm().buffer, mm.Hq(), 32))
              }(Dm);
              return Em = !0, hm
            } catch (fm) {
              throw om = !0, fm
            }
          };
        mm.onmessage = Tm => {
          let {
            data: qm
          } = Tm;
          switch (qm.type) {
            case "start":
              xm = qm.MO, pm = new Uint16Array(xm * xm * xm),
                function(Tm) {
                  if (32 === xm)
                    if (fm(Tm)) {
                      try {
                        ym().setCeiling(pf)
                      } catch (hm) {
                        return void mm.postMessage({
                          type: "lost",
                          reason: `the memory ceiling was not set (${String(hm)})`
                        })
                      }
                      try {
                        Dm = new(JT().Gq)
                      } catch (hm) {
                        return void mm.postMessage({
                          type: "lost",
                          reason: `GeneratedChunkEncoder did not start (${String(hm)})`
                        })
                      }
                      Am().then((Tm => {
                        wm = Tm, mm.postMessage({
                          type: "started"
                        }), Om.now()
                      }), (Tm => {
                        mm.postMessage({
                          type: "lost",
                          reason: `the block and item tables did not load (${String(Tm)})`
                        })
                      }))
                    } else mm.postMessage({
                      type: "lost",
                      reason: `wasm did not start (${km()})`
                    });
                  else mm.postMessage({
                    type: "lost",
                    reason: `chunk size ${xm} is not the encoder's 32`
                  })
                }(qm.module);
              break;
            case "seed": {
              const {
                settings: mm
              } = qm;
              if (im = null, null === mm) break;
              if (null === wm) throw new Error("a map's seed before the block and item tables loaded");
              try {
                im = new zT(xm, wm.blockMetadata, wm.itemMetadata, mm.fm, !1, mm.hm, mm.am, hm, Ym)
              } catch (jm) {
                console.error("[bloxd-wasm-client] the map's world generator did not start", jm)
              }
              break
            }
            case "generate":
              ! function(Tm, fm, hm, Am, wm) {
                if (om || !Dm) return void mm.postMessage({
                  type: "result",
                  ticket: Tm,
                  status: sT,
                  workerUs: 0,
                  bytes: wm,
                  len: 0
                }, [wm]);
                Em = !1;
                const Ym = am();
                let qm = !1;
                im && (pm.fill(0), qm = void 0 !== im.getChunk(Rm()(pm, [xm, xm, xm]), fm, hm, Am));
                const jm = (Vm = Ym, Im = am(), Math.min(4294967295, Math.max(0, Math.round(1e3 * (Im - Vm)))));
                var Vm, Im;
                let Km = null;
                if (!om && qm && Em) try {
                  Km = function(mm, Tm) {
                    const fm = mm.yq(),
                      hm = lT + fm,
                      Am = Tm.byteLength >= hm ? Tm : new ArrayBuffer(hm),
                      am = Sm().buffer,
                      xm = new Uint8Array(Am, 0, hm);
                    return xm.set(new Uint8Array(am, mm.Hq(), lT)), xm.set(new Uint8Array(am, mm.Cq(), fm), lT), {
                      bytes: Am,
                      len: hm
                    }
                  }(Dm, wm)
                } catch {
                  om = !0
                }
                om ? (Dm = null, mm.postMessage({
                  type: "result",
                  ticket: Tm,
                  status: sT,
                  workerUs: jm,
                  bytes: wm,
                  len: 0
                }, [wm])) : null === Km ? mm.postMessage({
                  type: "result",
                  ticket: Tm,
                  status: rT,
                  workerUs: jm,
                  bytes: wm,
                  len: 0
                }, [wm]) : Km.bytes === wm ? mm.postMessage({
                  type: "result",
                  ticket: Tm,
                  status: CT,
                  workerUs: jm,
                  bytes: wm,
                  len: Km.len
                }, [wm]) : mm.postMessage({
                  type: "result",
                  ticket: Tm,
                  status: CT,
                  workerUs: jm,
                  bytes: Km.bytes,
                  len: Km.len,
                  spare: wm
                }, [Km.bytes, wm]), om || Om.afterJob()
              }(qm.ticket, qm.x, qm.y, qm.z, qm.bytes)
          }
        }
      }(globalThis, {
        terrains: yT,
        loadTables: () => mm,
        now: () => performance.now()
      })
  }
})();