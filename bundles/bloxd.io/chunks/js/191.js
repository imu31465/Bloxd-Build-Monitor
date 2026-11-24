export const id = 191;
export const ids = [191];
export const modules = {
  40804: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt,
      h: () => dt,
      k: () => mt
    });
    var Ot = Vt(40812),
      qt = Vt(4960),
      Dt = Vt(40816);

    function mt(tt) {
      return tt.payloadKind === qt.wc.Msgpack ? (0, Ot.c)(tt.payload) : void 0
    }

    function dt(tt, et) {
      if (et.payloadKind === qt.wc.Bytes || et.payloadKind === qt.wc.MsgpackBin) return (0, Dt.c)(tt, et.payload)
    }

    function jt(tt) {
      return null !== tt && "object" === typeof tt
    }
  },
  40824: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt,
      f: () => lt,
      g: () => Et,
      j: () => Xt,
      m: () => yt
    });
    var Ot = Vt(4960),
      qt = Vt(40831);
    const Dt = new Map,
      mt = new Set,
      dt = new Set;
    let jt = 0,
      Ht = 0;

    function Xt(tt, et) {
      let Vt = Dt.get(tt);
      return Vt || (Vt = new Set, Dt.set(tt, Vt)), Vt.add(et), () => {
        Vt.delete(et)
      }
    }

    function Qt() {
      return 0 !== jt
    }

    function lt(tt) {
      return mt.add(tt), () => {
        mt.delete(tt)
      }
    }

    function Et(tt) {
      return dt.add(tt), () => {
        dt.delete(tt)
      }
    }
    const ft = "A raw message listener threw";

    function wt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt;
      for (const Ot of et) try {
        Ot()
      } catch (Vt) {
        tt ? (0, qt.n)(Vt, ft) : console.error(ft, Vt)
      }
    }
    const yt = {
      fire: function(tt) {
        if ("connection" === tt.type) {
          const et = tt.phase === Ot.H.Activated && tt.conn !== jt && tt.conn > Ht,
            Vt = (tt.phase === Ot.H.Left || tt.phase === Ot.H.Closed) && tt.conn === jt;
          return void(et || Vt ? (jt = et ? tt.conn : 0, wt(!0)) : tt.phase === Ot.H.Resumed && 0 !== jt && tt.conn > Ht && (jt = tt.conn, wt(!0, dt)))
        }
        const et = Dt.get(tt.kX);
        if (et && tt.conn === jt && 0 !== jt)
          for (const Ot of et) try {
            Ot(tt)
          } catch (Vt) {
            (0, qt.n)(Vt, ft)
          }
      },
      close: function(tt) {
        Ht = Math.max(Ht, tt, jt), 0 !== jt && (jt = 0, wt(!1))
      }
    }
  },
  40792: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      g: () => jt,
      h: () => dt
    });
    var Ot = Vt(1363),
      qt = Vt(40761);
    const Dt = new TextDecoder,
      mt = new TextEncoder;

    function dt(tt, et) {
      const Vt = tt.queries.entityName(et);
      if (Vt === qt.Qc) return;
      const mt = tt.memoryData(tt.scratch(), 4 + Vt, 4, "entity_name's answer");
      if (!mt) return;
      const dt = mt.getUint32(0, !0),
        jt = Dt.decode(new Uint8Array(mt.buffer, mt.byteOffset + 4, Vt));
      return (0, Ot.e)(jt, !1, dt === qt.de ? null : dt)
    }

    function jt(tt, et, Vt) {
      const Ot = mt.encode(Vt);
      if (Ot.length > qt.Fb) return !1;
      const Dt = tt.memoryView(Uint8Array, tt.scratch(), Ot.length, "has_effect's name");
      return !!Dt && (Dt.set(Ot), 1 === tt.queries.hasEffect(et, Ot.length))
    }

    function Ht(tt, et, Vt, Ot) {
      const mt = tt.queries.blockData(et, Vt, Ot);
      if (mt === qt.Qc) return;
      const dt = tt.memoryView(Uint8Array, tt.scratch(), mt, "block_data's answer");
      return dt ? JSON.parse(Dt.decode(dt)) : void 0
    }
  },
  40812: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      g: () => Xt
    });
    const Ot = new TextDecoder;

    function qt(tt) {
      const et = new Dt(tt),
        Vt = et.value();
      if (et.at !== tt.length) throw new Error(`msgpack: ${tt.length-et.at} bytes after the value`);
      return Vt
    }
    class Dt {
      constructor(tt) {
        this.bytes = tt, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(tt.buffer, tt.byteOffset, tt.byteLength)
      }
      value() {
        const tt = this.u8();
        if (tt <= 127) return tt;
        if (tt >= 224) return tt - 256;
        if (tt >= 128 && tt <= 143) return this.map(15 & tt);
        if (tt >= 144 && tt <= 159) return this.array(15 & tt);
        if (tt >= 160 && tt <= 191) return this.str(31 & tt);
        switch (tt) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${tt.toString(16)} at ${this.at-1}`)
        }
      }
      take(tt) {
        const et = this.at;
        if (et + tt > this.bytes.length) throw new Error(`msgpack: ${tt} bytes past the end at ${et}`);
        return this.at = et + tt, et
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(tt) {
        const et = this.take(8);
        return tt ? this.view.getBigInt64(et, !1) : this.view.getBigUint64(et, !1)
      }
      str(tt) {
        const et = this.take(tt),
          Vt = this.bytes;
        if (tt < 16) {
          let qt = "";
          for (let Dt = et; Dt < et + tt; Dt++) {
            const mt = Vt[Dt];
            if (mt >= 128) return Ot.decode(Vt.subarray(et, et + tt));
            qt += String.fromCharCode(mt)
          }
          return qt
        }
        return Ot.decode(Vt.subarray(et, et + tt))
      }
      bin(tt) {
        const et = this.take(tt);
        return this.bytes.subarray(et, et + tt)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(tt) {
        this.enter();
        const et = [];
        for (let Vt = 0; Vt < tt; Vt++) et.push(this.value());
        return this.depth--, et
      }
      map(tt) {
        this.enter();
        const et = {};
        for (let Vt = 0; Vt < tt; Vt++) {
          const tt = this.value(),
            Vt = this.value();
          et["__proto__" === tt ? "__proto_" : String(tt)] = Vt
        }
        return this.depth--, et
      }
      ext(tt) {
        const et = this.view.getInt8(this.take(1)),
          Vt = this.take(tt);
        if (0 !== et) {
          if (-1 === et) {
            if (1 === tt) return new Date(NaN);
            if (4 === tt) return new Date(1e3 * this.view.getUint32(Vt, !1));
            if (8 === tt) {
              const tt = this.view.getUint32(Vt, !1),
                et = tt >>> 2,
                Ot = 4294967296 * (3 & tt) + this.view.getUint32(Vt + 4, !1);
              return new Date(1e3 * Ot + et / 1e6)
            }
            if (12 === tt) {
              const tt = this.view.getUint32(Vt, !1),
                et = 4294967296 * this.view.getInt32(Vt + 4, !1) + this.view.getUint32(Vt + 8, !1);
              return new Date(1e3 * et + tt / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${et} of ${tt} bytes`)
        }
      }
    }
    const mt = new TextEncoder,
      dt = -(2n ** 63n),
      jt = 2n ** 63n - 1n,
      Ht = 2n ** 64n - 1n;

    function Xt(tt) {
      const et = new Qt;
      return et.value(tt, 0), et.bytes()
    }
    class Qt {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(tt, et) {
        if (et > 512) throw new Error("msgpack: nested too deep");
        switch (typeof tt) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(tt ? 195 : 194);
          case "number":
            return void this.number(tt);
          case "bigint":
            return void this.bigint(tt);
          case "string":
            return void this.string(tt);
          case "object":
            if (null === tt) this.u8(192);
            else if (tt instanceof Uint8Array) this.head(tt.length, 196, -1, 197, 198), this.room(tt.length), this.buf.set(tt, this.at), this.at += tt.length;
            else if (Array.isArray(tt)) {
              this.head(tt.length, 220, 144, 220, 221);
              for (const Vt of tt) this.value(Vt, et + 1)
            } else {
              var Vt, Ot;
              if (Object.getPrototypeOf(tt) !== Object.prototype && null !== Object.getPrototypeOf(tt)) throw new Error(`msgpack: can't encode a ${null!==(Vt=null===(Ot=tt.constructor)||void 0===Ot?void 0:Ot.name)&&void 0!==Vt?Vt:"object"}`);
              {
                const Vt = Object.keys(tt);
                this.head(Vt.length, 222, 128, 222, 223);
                for (const Ot of Vt) this.string(Ot), this.value(tt[Ot], et + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof tt)
        }
      }
      number(tt) {
        Number.isInteger(tt) && tt >= -2147483648 && tt <= 4294967295 ? tt >= 0 ? tt < 128 ? this.u8(tt) : tt < 256 ? (this.u8(204), this.u8(tt)) : tt < 65536 ? (this.u8(205), this.u16(tt)) : (this.u8(206), this.u32(tt)) : tt >= -32 ? this.u8(tt + 256) : tt >= -128 ? (this.u8(208), this.u8(tt + 256)) : tt >= -32768 ? (this.u8(209), this.u16(tt + 65536)) : (this.u8(210), this.u32(tt >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, tt, !1), this.at += 8)
      }
      bigint(tt) {
        const et = tt >= dt && tt <= jt;
        if (!et && (tt < 0n || tt > Ht)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(et ? 211 : 207), this.room(8), et ? this.view.setBigInt64(this.at, tt, !1) : this.view.setBigUint64(this.at, tt, !1), this.at += 8
      }
      string(tt) {
        const et = mt.encode(tt);
        this.head(et.length, 217, 160, 218, 219), this.room(et.length), this.buf.set(et, this.at), this.at += et.length
      }
      head(tt, et, Vt, Ot, qt) {
        Vt >= 0 && tt < (160 === Vt ? 32 : 16) ? this.u8(Vt | tt) : et !== Ot && tt < 256 ? (this.u8(et), this.u8(tt)) : tt < 65536 ? (this.u8(Ot), this.u16(tt)) : (this.u8(qt), this.u32(tt))
      }
      room(tt) {
        if (this.at + tt <= this.buf.length) return;
        let et = 2 * this.buf.length;
        for (; et < this.at + tt;) et *= 2;
        const Vt = new Uint8Array(et);
        Vt.set(this.buf.subarray(0, this.at)), this.buf = Vt, this.view = new DataView(Vt.buffer)
      }
      u8(tt) {
        this.room(1), this.buf[this.at++] = tt
      }
      u16(tt) {
        this.room(2), this.view.setUint16(this.at, tt, !1), this.at += 2
      }
      u32(tt) {
        this.room(4), this.view.setUint32(this.at, tt, !1), this.at += 4
      }
    }
  },
  40816: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(40797);
    const qt = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Dt {
      constructor(tt) {
        this.buf = tt, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let tt = this.u8(),
          et = 127 & tt,
          Vt = 128;
        for (; 128 & tt;) {
          if (Vt > 2 ** 63) throw new RangeError("avro: varint too long");
          tt = this.u8(), et += (127 & tt) * Vt, Vt *= 128
        }
        return et % 2 === 1 ? -(et + 1) / 2 : et / 2
      }
      float() {
        const tt = this.take(4);
        return this.floats().getFloat32(tt, !0)
      }
      double() {
        const tt = this.take(8);
        return this.floats().getFloat64(tt, !0)
      }
      str() {
        const tt = this.size(),
          et = this.take(tt),
          Vt = et + tt;
        if (tt <= 32) {
          let tt = "";
          for (let Ot = et; Ot < Vt; Ot++) {
            const Dt = this.buf[Ot];
            if (Dt >= 128) return qt.decode(this.buf.subarray(et, Vt));
            tt += String.fromCharCode(Dt)
          }
          return tt
        }
        return qt.decode(this.buf.subarray(et, Vt))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(tt) {
        const et = this.take(tt);
        return this.buf.slice(et, et + tt)
      }
      index(tt) {
        const et = this.long();
        if (!(et >= 0 && et < tt)) throw new RangeError(`avro: index ${et} of ${tt}`);
        return et
      }
      jf(tt) {
        const et = [];
        for (let Vt = this.long(); 0 !== Vt; Vt = this.long()) {
          Vt = this.block(Vt);
          for (let Ot = 0; Ot < Vt; Ot++) et.push(tt(this))
        }
        return et
      }
      map(tt) {
        const et = {};
        for (let Vt = this.long(); 0 !== Vt; Vt = this.long()) {
          Vt = this.block(Vt);
          for (let Ot = 0; Ot < Vt; Ot++) {
            et[this.str()] = tt(this)
          }
        }
        return et
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(tt) {
        let et = tt;
        if (et < 0 && (et = -et, this.long()), et > this.buf.length - this.at) throw new RangeError(`avro: block of ${et} items in ${this.buf.length-this.at} bytes`);
        return et
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const tt = this.long();
        if (tt < 0) throw new RangeError(`avro: length ${tt}`);
        return tt
      }
      u8() {
        const tt = this.buf[this.at];
        if (void 0 === tt) throw new RangeError("avro: truncated");
        return this.at++, tt
      }
      take(tt) {
        const et = this.at;
        if (tt > this.buf.length - et) throw new RangeError("avro: truncated");
        return this.at = et + tt, et
      }
    }

    function mt(tt, et) {
      const Vt = new Dt(et),
        qt = (0, Ot.fb)(tt, Vt);
      return Vt.end(), qt
    }
  },
  40797: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => mt,
      D: () => St,
      E: () => qt,
      H: () => dt,
      J: () => Et,
      K: () => vt,
      O: () => ht,
      Q: () => ut,
      T: () => Xt,
      V: () => Qt,
      X: () => Wt,
      Y: () => ft,
      _: () => bt,
      bb: () => wt,
      d: () => Ct,
      e: () => yt,
      eb: () => jt,
      f: () => Nt,
      fb: () => ct,
      h: () => Mt,
      l: () => Kt,
      o: () => Ot,
      p: () => Dt,
      s: () => Jt,
      v: () => lt,
      z: () => Ht
    });
    const Ot = 2,
      qt = 12,
      Dt = 27,
      mt = 40,
      dt = 52,
      jt = 59,
      Ht = 63,
      Xt = 83,
      Qt = 84,
      lt = 89,
      Et = 91,
      ft = 93,
      wt = 94,
      yt = 95,
      Nt = 97,
      Mt = 101,
      bt = 102,
      Jt = 73,
      Ct = 16,
      ut = 86,
      Kt = 60,
      ht = 17,
      vt = 56,
      Wt = 100,
      St = 81;

    function ct(tt, et) {
      switch (tt) {
        case Ot:
          return function(tt) {
            return {
              zD: Tt(tt),
              oD: tt.float(),
              rD: tt.long()
            }
          }(et);
        case qt:
          return function(tt) {
            return {
              iq: Lt(tt),
              Yq: Lt(tt)
            }
          }(et);
        case Dt:
          return function(tt) {
            return {
              jt: tt.bool(),
              Ht: Lt(tt)
            }
          }(et);
        case mt:
          return et.str();
        case dt:
          return function(tt) {
            return {
              id: tt.long(),
              gt: de(tt)
            }
          }(et);
        case jt:
          return function(tt) {
            return {
              Dm: Lt(tt),
              dm: He(tt)
            }
          }(et);
        case Ht:
          return et.str();
        case Xt:
        case Qt:
          return et.long();
        case lt:
          return function(tt) {
            return {
              zq: tt.long(),
              oq: tt.bool(),
              rq: tt.float()
            }
          }(et);
        case Et:
          return et.long();
        case ft:
          return function(tt) {
            return {
              ne: tt.bool(),
              St: le(tt)
            }
          }(et);
        case wt:
          return function(tt) {
            return {
              id: tt.str(),
              position: Qe(tt),
              Ae: Ee(tt),
              style: rt(tt),
              Ye: tt.bool()
            }
          }(et);
        case yt:
          return function(tt) {
            return {
              id: Lt(tt)
            }
          }(et);
        case Nt:
          return function(tt) {
            return {
              mD: tt.long(),
              dD: tt.str(),
              jD: De(tt),
              HD: De(tt),
              XD: Lt(tt),
              QD: Lt(tt),
              lD: Lt(tt),
              ED: Lt(tt),
              fD: Lt(tt),
              wD: De(tt),
              yD: De(tt),
              ND: Lt(tt),
              aD: Lt(tt),
              MD: Lt(tt)
            }
          }(et);
        case Mt:
          return et.str();
        case bt:
          return et.long();
        case Jt:
          return function(tt) {
            return {
              vV: tt.long(),
              WV: tt.str(),
              SV: tt.float()
            }
          }(et);
        case Ct:
          return function(tt) {
            return {
              Bq: tt.bool(),
              pq: Lt(tt),
              xq: tt.str(),
              Tq: we(tt),
              nq: we(tt),
              tD: tt.bool(),
              eD: tt.long(),
              VD: ye(tt)
            }
          }(et);
        case ut:
          return function(tt) {
            return {
              Gq: Lt(tt)
            }
          }(et);
        case Kt:
          return function(tt) {
            return {
              Ft: tt.str(),
              kt: tt.str(),
              Gt: Ne(tt),
              tV: tt.str(),
              eV: nt(tt),
              VV: tt.float()
            }
          }(et);
        case ht:
          return function(tt) {
            return {
              Ft: tt.str(),
              kt: tt.str(),
              Gt: Ne(tt)
            }
          }(et);
        case vt:
          return function(tt) {
            return tt.jf(ae)
          }(et);
        case Wt:
          return function(tt) {
            return {
              zt: be(tt),
              Bt: it(tt)
            }
          }(et);
        case St:
          return function(tt) {
            return {
              OO: tt.bool(),
              qO: Lt(tt),
              DO: Ce(tt),
              dO: Ge(tt)
            }
          }(et);
        default:
          throw new Error(`no reader for to-client message ${tt}`)
      }
    }

    function Rt(tt) {
      return {
        entityName: tt.str()
      }
    }

    function It(tt) {
      const et = tt.index(4);
      return 0 === et ? tt.str() : 1 === et ? tt.long() : 2 === et ? tt.bool() : Rt(tt)
    }

    function Pt(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return tt.map(It)
      }(tt)
    }

    function Zt(tt) {
      return {
        translationKey: tt.str(),
        params: Pt(tt)
      }
    }

    function Lt(tt) {
      return 0 === tt.index(2) ? null : tt.str()
    }

    function Ft(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          color: Lt(tt),
          colour: Lt(tt),
          fontSize: Lt(tt)
        }
      }(tt)
    }

    function kt(tt) {
      return {
        icon: tt.str(),
        style: Ft(tt)
      }
    }

    function Gt(tt) {
      const et = tt.index(3);
      return 0 === et ? {
        string: tt.str()
      } : 1 === et ? {
        styledEntityName: Rt(tt)
      } : {
        styledTranslatedText: Zt(tt)
      }
    }

    function zt(tt) {
      const et = tt.index(3);
      return 0 === et ? null : 1 === et ? tt.str() : tt.long()
    }

    function ot(tt) {
      return 0 === tt.index(2) ? null : tt.float()
    }

    function rt(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          color: Lt(tt),
          colour: Lt(tt),
          fontWeight: zt(tt),
          fontStyle: Lt(tt),
          fontSize: Lt(tt),
          opacity: ot(tt)
        }
      }(tt)
    }

    function Ut(tt) {
      return {
        str: Gt(tt),
        style: rt(tt),
        clickableUrl: Lt(tt)
      }
    }

    function At(tt) {
      return tt.str()
    }

    function it(tt) {
      return tt.jf(At)
    }

    function Yt(tt) {
      return 0 === tt.index(2) ? null : it(tt)
    }

    function Bt(tt) {
      return {
        type: tt.str(),
        progress: tt.float(),
        width: Lt(tt),
        height: Lt(tt),
        colours: Yt(tt),
        backgroundColour: Lt(tt)
      }
    }

    function pt(tt) {
      return {
        type: tt.str(),
        action: tt.str(),
        style: rt(tt)
      }
    }

    function xt(tt) {
      const et = tt.index(7);
      return 0 === et ? {
        string: tt.str()
      } : 1 === et ? {
        entityName: Rt(tt)
      } : 2 === et ? {
        translatedText: Zt(tt)
      } : 3 === et ? {
        styledIcon: kt(tt)
      } : 4 === et ? {
        de: Ut(tt)
      } : 5 === et ? {
        styledProgressBar: Bt(tt)
      } : {
        styledKeyBinding: pt(tt)
      }
    }

    function Tt(tt) {
      return tt.jf(xt)
    }
    const gt = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function st(tt) {
      return gt[tt.index(5)]
    }

    function nt(tt) {
      return 0 === tt.index(2) ? null : tt.double()
    }

    function te(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          Ve: nt(tt),
          Oe: tt.double(),
          qe: tt.double(),
          De: tt.bool(),
          description: Tt(tt),
          He: tt.str(),
          scale: nt(tt),
          rotation: nt(tt)
        }
      }(tt)
    }

    function ee(tt) {
      return 0 === tt.index(2) ? null : tt.bool()
    }

    function Ve(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          Qe: tt.double(),
          icon: tt.str(),
          label: Tt(tt),
          le: tt.bool(),
          scale: nt(tt),
          rotation: nt(tt),
          Ee: ee(tt)
        }
      }(tt)
    }

    function Oe(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          Ve: nt(tt),
          ye: tt.double(),
          Ne: tt.double(),
          ae: tt.double(),
          gravity: tt.double(),
          Me: tt.double(),
          Je: tt.double(),
          Ce: tt.double(),
          De: tt.bool(),
          description: Tt(tt),
          icon: Lt(tt)
        }
      }(tt)
    }

    function qe(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          speed: tt.double(),
          Ke: tt.double(),
          label: Tt(tt),
          icon: Lt(tt),
          scale: nt(tt),
          rotation: nt(tt)
        }
      }(tt)
    }

    function De(tt) {
      return 0 === tt.index(2) ? null : tt.long()
    }

    function me(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          ve: tt.long(),
          Se: tt.double(),
          ce: tt.double(),
          Ie: De(tt),
          label: Tt(tt),
          icon: Lt(tt)
        }
      }(tt)
    }

    function de(tt) {
      return {
        type: st(tt),
        progressBar: te(tt),
        timedClick: Ve(tt),
        gravityBar: Oe(tt),
        precisionBar: qe(tt),
        rhythmClick: me(tt)
      }
    }
    const je = ["playerGone", "rateLimited"];

    function He(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return je[tt.index(2)]
      }(tt)
    }

    function Xe(tt) {
      return tt.float()
    }

    function Qe(tt) {
      return tt.jf(Xe)
    }

    function le(tt) {
      return 0 === tt.index(2) ? null : Qe(tt)
    }

    function Ee(tt) {
      return 0 === tt.index(2) ? null : Tt(tt)
    }

    function fe(tt) {
      return tt.long()
    }

    function we(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return tt.jf(fe)
      }(tt)
    }

    function ye(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          qD: tt.str(),
          DD: tt.long()
        }
      }(tt)
    }

    function Ne(tt) {
      const et = tt.index(3);
      return 0 === et ? null : 1 === et ? tt.str() : Zt(tt)
    }

    function ae(tt) {
      return {
        FD: tt.str(),
        kD: tt.str(),
        GD: tt.str()
      }
    }

    function Me(tt) {
      return {
        ot: tt.str(),
        rt: Lt(tt),
        Ut: Lt(tt),
        Yt: it(tt)
      }
    }

    function be(tt) {
      return tt.jf(Me)
    }

    function Je(tt) {
      return {
        mO: tt.str(),
        x: tt.long(),
        y: tt.long(),
        z: tt.long()
      }
    }

    function Ce(tt) {
      return tt.jf(Je)
    }

    function ue(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          WO: tt.float(),
          SO: tt.long(),
          cO: tt.long()
        }
      }(tt)
    }

    function Ke(tt) {
      return {
        blockName: tt.str(),
        MO: tt.bool(),
        bO: tt.bool(),
        JO: tt.bool(),
        CO: tt.float(),
        uO: tt.float(),
        KO: tt.long(),
        hO: ue(tt)
      }
    }

    function he(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return tt.jf(Ke)
      }(tt)
    }

    function ve(tt) {
      return {
        yO: tt.str(),
        NO: he(tt)
      }
    }

    function We(tt) {
      return {
        blockName: tt.str(),
        frequency: tt.float()
      }
    }

    function Se(tt) {
      return tt.jf(We)
    }

    function ce(tt) {
      return {
        PO: tt.str(),
        ZO: tt.str(),
        frequency: tt.float(),
        LO: Se(tt)
      }
    }

    function Re(tt) {
      return tt.jf(ce)
    }

    function Ie(tt) {
      return {
        blockName: tt.str(),
        radius: tt.long(),
        zO: tt.long(),
        XO: tt.long(),
        QO: tt.long(),
        oO: tt.float()
      }
    }

    function Pe(tt) {
      return tt.jf(Ie)
    }

    function Ze(tt) {
      return {
        XO: tt.long(),
        QO: tt.long(),
        lO: tt.long(),
        EO: tt.bool(),
        fO: ve(tt),
        RO: Re(tt),
        kO: Pe(tt)
      }
    }

    function Le(tt) {
      return tt.jf(Ze)
    }

    function Fe(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          name: tt.str(),
          YO: Lt(tt)
        }
      }(tt)
    }

    function ke(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          terrain: Fe(tt),
          BO: Pe(tt)
        }
      }(tt)
    }

    function Ge(tt) {
      return 0 === tt.index(2) ? null : function(tt) {
        return {
          layers: Le(tt),
          rO: ke(tt)
        }
      }(tt)
    }
  },
  40777: (tt, et, Vt) => {
    Vt.d(et, {
      D: () => Jt,
      F: () => Ct,
      I: () => yt,
      J: () => Wt,
      N: () => Pt,
      P: () => ft,
      Q: () => Lt,
      S: () => Mt,
      T: () => Nt,
      W: () => bt,
      _: () => ut,
      c: () => qt,
      f: () => Zt,
      j: () => It,
      l: () => Et,
      n: () => wt,
      o: () => ct,
      q: () => ht,
      s: () => St,
      t: () => vt,
      w: () => Kt,
      z: () => Rt
    });
    var Ot = Vt(3064);
    const qt = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function Dt(tt, et) {
      return !ArrayBuffer.isView(tt) || tt instanceof DataView ? Array.isArray(tt) ? tt.map((tt => et(tt))) : tt : Array.from(tt, (tt => et(tt)))
    }

    function mt(tt) {
      if ("string" !== typeof tt) return tt;
      for (let et = 0; et < tt.length; et++) {
        const Vt = tt.charCodeAt(et);
        if (Vt >= 55296 && Vt <= 57343) return jt.decode(dt.encode(tt))
      }
      return tt
    }
    const dt = new TextEncoder,
      jt = new TextDecoder;

    function Ht(tt) {
      return tt
    }
    let Xt;

    function Qt(tt) {
      return null === tt || "object" !== typeof tt ? tt : [mt(tt.Ed), mt(tt.fd)]
    }

    function lt(tt) {
      return null === tt || "object" !== typeof tt ? tt : [Dt(tt.Tq, Ht), Dt(tt.Rd, Ht)]
    }

    function Et(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.kX), mt(et.GX)];
      var et
    }

    function ft(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [et.id, et.KX];
      var et
    }

    function wt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [et.mD, mt(et.dD), et.jD, mt(et.QD), et.wD, et.yD, et.ZX, mt(et.LX), mt(et.FX)];
      var et
    }

    function yt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [Dt(et.Od, Ht), et.qd];
      var et
    }

    function Nt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [Dt(et.nm, (tt => mt(tt))), mt(et.td), et.Vd];
      var et
    }

    function Mt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [Dt(et.Rj, Ht), mt(et.Ij), et.Pj];
      var et
    }

    function bt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.kD), mt(et.GD)];
      var et
    }

    function Jt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.rd)];
      var et
    }

    function Ct(tt) {
      return mt(tt)
    }

    function ut(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.JX), mt(et.CX), mt(et.Ed), mt(et.fd)];
      var et
    }

    function Kt(tt) {
      return Qt(tt)
    }

    function ht(tt) {
      return Qt(tt)
    }

    function vt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.Jj)];
      var et
    }

    function Wt(tt) {
      return tt
    }

    function St(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.Qd), mt(et.ld)];
      var et
    }

    function ct(tt) {
      return mt(tt)
    }

    function Rt(tt) {
      return lt(tt)
    }

    function It(tt) {
      return lt(tt)
    }

    function Pt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [mt(et.Zj)];
      var et
    }

    function Zt(tt) {
      return (Xt ??= (0, Ot.e)().map((tt => tt.name)), Xt).map((et => {
        return "string" === typeof(Vt = tt[et]) ? mt(Vt) : Dt(Vt, Ht);
        var Vt
      }))
    }

    function Lt(tt) {
      return null === (et = tt) || "object" !== typeof et ? et : [et.aj, et.Mj, et.bj];
      var et
    }
  },
  9512: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt
    });
    var Ot = Vt(9466);
    const qt = "Air",
      Dt = Object.freeze(new Ot.d(qt, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39441: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      h: () => dt
    });
    var Ot = Vt(391),
      qt = Vt(4599);
    const Dt = new Set(qt.o),
      mt = new Map;

    function dt(tt, et) {
      let Vt = mt.get(et);
      void 0 === Vt && (Vt = new Map, mt.set(et, Vt));
      let qt = Vt.get(tt);
      return void 0 === qt && (qt = `${tt}${(0,Ot.F)(et)}`, Vt.set(tt, qt)), qt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);