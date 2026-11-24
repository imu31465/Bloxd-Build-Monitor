export const id = 189;
export const ids = [189];
export const modules = {
  40692: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      f: () => wm,
      j: () => xm
    });
    var hm = fm(40695),
      Am = fm(4732),
      am = fm(40701);

    function xm(mm) {
      return mm.payloadKind === Am.gc.Msgpack ? (0, hm.e)(mm.payload) : void 0
    }

    function wm(mm, Tm) {
      if (Tm.payloadKind === Am.gc.Bytes || Tm.payloadKind === Am.gc.MsgpackBin) return (0, am.d)(mm, Tm.payload)
    }

    function Dm(mm) {
      return null !== mm && "object" === typeof mm
    }
  },
  40709: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm,
      c: () => Em,
      e: () => om,
      g: () => Rm,
      k: () => qm
    });
    var hm = fm(4732),
      Am = fm(40716);
    const am = new Map,
      xm = new Set,
      wm = new Set;
    let Dm = 0,
      im = 0;

    function Rm(mm, Tm) {
      let fm = am.get(mm);
      return fm || (fm = new Set, am.set(mm, fm)), fm.add(Tm), () => {
        fm.delete(Tm)
      }
    }

    function pm() {
      return 0 !== Dm
    }

    function Em(mm) {
      return xm.add(mm), () => {
        xm.delete(mm)
      }
    }

    function om(mm) {
      return wm.add(mm), () => {
        wm.delete(mm)
      }
    }
    const Om = "A raw message listener threw";

    function Ym(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xm;
      for (const hm of Tm) try {
        hm()
      } catch (fm) {
        mm ? (0, Am.m)(fm, Om) : console.error(Om, fm)
      }
    }
    const qm = {
      fire: function(mm) {
        if ("connection" === mm.type) {
          const Tm = mm.phase === hm.L.Activated && mm.conn !== Dm && mm.conn > im,
            fm = (mm.phase === hm.L.Left || mm.phase === hm.L.Closed) && mm.conn === Dm;
          return void(Tm || fm ? (Dm = Tm ? mm.conn : 0, Ym(!0)) : mm.phase === hm.L.Resumed && 0 !== Dm && mm.conn > im && (Dm = mm.conn, Ym(!0, wm)))
        }
        const Tm = am.get(mm.Hi);
        if (Tm && mm.conn === Dm && 0 !== Dm)
          for (const hm of Tm) try {
            hm(mm)
          } catch (fm) {
            (0, Am.m)(fm, Om)
          }
      },
      close: function(mm) {
        im = Math.max(im, mm, Dm), 0 !== Dm && (Dm = 0, Ym(!1))
      }
    }
  },
  40681: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      h: () => Dm,
      k: () => wm
    });
    var hm = fm(1270),
      Am = fm(40663);
    const am = new TextDecoder,
      xm = new TextEncoder;

    function wm(mm, Tm) {
      const fm = mm.queries.entityName(Tm);
      if (fm === Am.Vc) return;
      const xm = mm.memoryData(mm.scratch(), 4 + fm, 4, "entity_name's answer");
      if (!xm) return;
      const wm = xm.getUint32(0, !0),
        Dm = am.decode(new Uint8Array(xm.buffer, xm.byteOffset + 4, fm));
      return (0, hm.e)(Dm, !1, wm === Am.$d ? null : wm)
    }

    function Dm(mm, Tm, fm) {
      const hm = xm.encode(fm);
      if (hm.length > Am.Kb) return !1;
      const am = mm.memoryView(Uint8Array, mm.scratch(), hm.length, "has_effect's name");
      return !!am && (am.set(hm), 1 === mm.queries.hasEffect(Tm, hm.length))
    }

    function im(mm, Tm, fm, hm) {
      const xm = mm.queries.blockData(Tm, fm, hm);
      if (xm === Am.Vc) return;
      const wm = mm.memoryView(Uint8Array, mm.scratch(), xm, "block_data's answer");
      return wm ? JSON.parse(am.decode(wm)) : void 0
    }
  },
  40695: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => Rm
    });
    const hm = new TextDecoder;

    function Am(mm) {
      const Tm = new am(mm),
        fm = Tm.value();
      if (Tm.at !== mm.length) throw new Error(`msgpack: ${mm.length-Tm.at} bytes after the value`);
      return fm
    }
    class am {
      constructor(mm) {
        this.bytes = mm, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(mm.buffer, mm.byteOffset, mm.byteLength)
      }
      value() {
        const mm = this.u8();
        if (mm <= 127) return mm;
        if (mm >= 224) return mm - 256;
        if (mm >= 128 && mm <= 143) return this.map(15 & mm);
        if (mm >= 144 && mm <= 159) return this.array(15 & mm);
        if (mm >= 160 && mm <= 191) return this.str(31 & mm);
        switch (mm) {
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
            throw new Error(`msgpack: unknown byte 0x${mm.toString(16)} at ${this.at-1}`)
        }
      }
      take(mm) {
        const Tm = this.at;
        if (Tm + mm > this.bytes.length) throw new Error(`msgpack: ${mm} bytes past the end at ${Tm}`);
        return this.at = Tm + mm, Tm
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
      int64(mm) {
        const Tm = this.take(8);
        return mm ? this.view.getBigInt64(Tm, !1) : this.view.getBigUint64(Tm, !1)
      }
      str(mm) {
        const Tm = this.take(mm),
          fm = this.bytes;
        if (mm < 16) {
          let Am = "";
          for (let am = Tm; am < Tm + mm; am++) {
            const xm = fm[am];
            if (xm >= 128) return hm.decode(fm.subarray(Tm, Tm + mm));
            Am += String.fromCharCode(xm)
          }
          return Am
        }
        return hm.decode(fm.subarray(Tm, Tm + mm))
      }
      bin(mm) {
        const Tm = this.take(mm);
        return this.bytes.subarray(Tm, Tm + mm)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(mm) {
        this.enter();
        const Tm = [];
        for (let fm = 0; fm < mm; fm++) Tm.push(this.value());
        return this.depth--, Tm
      }
      map(mm) {
        this.enter();
        const Tm = {};
        for (let fm = 0; fm < mm; fm++) {
          const mm = this.value(),
            fm = this.value();
          Tm["__proto__" === mm ? "__proto_" : String(mm)] = fm
        }
        return this.depth--, Tm
      }
      ext(mm) {
        const Tm = this.view.getInt8(this.take(1)),
          fm = this.take(mm);
        if (0 !== Tm) {
          if (-1 === Tm) {
            if (1 === mm) return new Date(NaN);
            if (4 === mm) return new Date(1e3 * this.view.getUint32(fm, !1));
            if (8 === mm) {
              const mm = this.view.getUint32(fm, !1),
                Tm = mm >>> 2,
                hm = 4294967296 * (3 & mm) + this.view.getUint32(fm + 4, !1);
              return new Date(1e3 * hm + Tm / 1e6)
            }
            if (12 === mm) {
              const mm = this.view.getUint32(fm, !1),
                Tm = 4294967296 * this.view.getInt32(fm + 4, !1) + this.view.getUint32(fm + 8, !1);
              return new Date(1e3 * Tm + mm / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Tm} of ${mm} bytes`)
        }
      }
    }
    const xm = new TextEncoder,
      wm = -(2n ** 63n),
      Dm = 2n ** 63n - 1n,
      im = 2n ** 64n - 1n;

    function Rm(mm) {
      const Tm = new pm;
      return Tm.value(mm, 0), Tm.bytes()
    }
    class pm {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(mm, Tm) {
        if (Tm > 512) throw new Error("msgpack: nested too deep");
        switch (typeof mm) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(mm ? 195 : 194);
          case "number":
            return void this.number(mm);
          case "bigint":
            return void this.bigint(mm);
          case "string":
            return void this.string(mm);
          case "object":
            if (null === mm) this.u8(192);
            else if (mm instanceof Uint8Array) this.head(mm.length, 196, -1, 197, 198), this.room(mm.length), this.buf.set(mm, this.at), this.at += mm.length;
            else if (Array.isArray(mm)) {
              this.head(mm.length, 220, 144, 220, 221);
              for (const fm of mm) this.value(fm, Tm + 1)
            } else {
              var fm, hm;
              if (Object.getPrototypeOf(mm) !== Object.prototype && null !== Object.getPrototypeOf(mm)) throw new Error(`msgpack: can't encode a ${null!==(fm=null===(hm=mm.constructor)||void 0===hm?void 0:hm.name)&&void 0!==fm?fm:"object"}`);
              {
                const fm = Object.keys(mm);
                this.head(fm.length, 222, 128, 222, 223);
                for (const hm of fm) this.string(hm), this.value(mm[hm], Tm + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof mm)
        }
      }
      number(mm) {
        Number.isInteger(mm) && mm >= -2147483648 && mm <= 4294967295 ? mm >= 0 ? mm < 128 ? this.u8(mm) : mm < 256 ? (this.u8(204), this.u8(mm)) : mm < 65536 ? (this.u8(205), this.u16(mm)) : (this.u8(206), this.u32(mm)) : mm >= -32 ? this.u8(mm + 256) : mm >= -128 ? (this.u8(208), this.u8(mm + 256)) : mm >= -32768 ? (this.u8(209), this.u16(mm + 65536)) : (this.u8(210), this.u32(mm >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, mm, !1), this.at += 8)
      }
      bigint(mm) {
        const Tm = mm >= wm && mm <= Dm;
        if (!Tm && (mm < 0n || mm > im)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Tm ? 211 : 207), this.room(8), Tm ? this.view.setBigInt64(this.at, mm, !1) : this.view.setBigUint64(this.at, mm, !1), this.at += 8
      }
      string(mm) {
        const Tm = xm.encode(mm);
        this.head(Tm.length, 217, 160, 218, 219), this.room(Tm.length), this.buf.set(Tm, this.at), this.at += Tm.length
      }
      head(mm, Tm, fm, hm, Am) {
        fm >= 0 && mm < (160 === fm ? 32 : 16) ? this.u8(fm | mm) : Tm !== hm && mm < 256 ? (this.u8(Tm), this.u8(mm)) : mm < 65536 ? (this.u8(hm), this.u16(mm)) : (this.u8(Am), this.u32(mm))
      }
      room(mm) {
        if (this.at + mm <= this.buf.length) return;
        let Tm = 2 * this.buf.length;
        for (; Tm < this.at + mm;) Tm *= 2;
        const fm = new Uint8Array(Tm);
        fm.set(this.buf.subarray(0, this.at)), this.buf = fm, this.view = new DataView(fm.buffer)
      }
      u8(mm) {
        this.room(1), this.buf[this.at++] = mm
      }
      u16(mm) {
        this.room(2), this.view.setUint16(this.at, mm, !1), this.at += 2
      }
      u32(mm) {
        this.room(4), this.view.setUint32(this.at, mm, !1), this.at += 4
      }
    }
  },
  40701: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm
    });
    var hm = fm(40684);
    const Am = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class am {
      constructor(mm) {
        this.buf = mm, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let mm = this.u8(),
          Tm = 127 & mm,
          fm = 128;
        for (; 128 & mm;) {
          if (fm > 2 ** 63) throw new RangeError("avro: varint too long");
          mm = this.u8(), Tm += (127 & mm) * fm, fm *= 128
        }
        return Tm % 2 === 1 ? -(Tm + 1) / 2 : Tm / 2
      }
      float() {
        const mm = this.take(4);
        return this.floats().getFloat32(mm, !0)
      }
      double() {
        const mm = this.take(8);
        return this.floats().getFloat64(mm, !0)
      }
      str() {
        const mm = this.size(),
          Tm = this.take(mm),
          fm = Tm + mm;
        if (mm <= 32) {
          let mm = "";
          for (let hm = Tm; hm < fm; hm++) {
            const am = this.buf[hm];
            if (am >= 128) return Am.decode(this.buf.subarray(Tm, fm));
            mm += String.fromCharCode(am)
          }
          return mm
        }
        return Am.decode(this.buf.subarray(Tm, fm))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(mm) {
        const Tm = this.take(mm);
        return this.buf.slice(Tm, Tm + mm)
      }
      index(mm) {
        const Tm = this.long();
        if (!(Tm >= 0 && Tm < mm)) throw new RangeError(`avro: index ${Tm} of ${mm}`);
        return Tm
      }
      HO(mm) {
        const Tm = [];
        for (let fm = this.long(); 0 !== fm; fm = this.long()) {
          fm = this.block(fm);
          for (let hm = 0; hm < fm; hm++) Tm.push(mm(this))
        }
        return Tm
      }
      map(mm) {
        const Tm = {};
        for (let fm = this.long(); 0 !== fm; fm = this.long()) {
          fm = this.block(fm);
          for (let hm = 0; hm < fm; hm++) {
            Tm[this.str()] = mm(this)
          }
        }
        return Tm
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(mm) {
        let Tm = mm;
        if (Tm < 0 && (Tm = -Tm, this.long()), Tm > this.buf.length - this.at) throw new RangeError(`avro: block of ${Tm} items in ${this.buf.length-this.at} bytes`);
        return Tm
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const mm = this.long();
        if (mm < 0) throw new RangeError(`avro: length ${mm}`);
        return mm
      }
      u8() {
        const mm = this.buf[this.at];
        if (void 0 === mm) throw new RangeError("avro: truncated");
        return this.at++, mm
      }
      take(mm) {
        const Tm = this.at;
        if (mm > this.buf.length - Tm) throw new RangeError("avro: truncated");
        return this.at = Tm + mm, Tm
      }
    }

    function xm(mm, Tm) {
      const fm = new am(Tm),
        Am = (0, hm.sb)(mm, fm);
      return fm.end(), Am
    }
  },
  40684: (mm, Tm, fm) => {
    fm.d(Tm, {
      $: () => pm,
      A: () => im,
      D: () => xm,
      E: () => km,
      I: () => Am,
      L: () => wm,
      P: () => om,
      R: () => zm,
      S: () => cm,
      V: () => nm,
      X: () => Rm,
      ab: () => Zm,
      e: () => Qm,
      eb: () => Om,
      hb: () => Im,
      i: () => qm,
      k: () => jm,
      l: () => Vm,
      lb: () => Ym,
      o: () => Jm,
      pb: () => Dm,
      r: () => hm,
      sb: () => bm,
      u: () => am,
      x: () => Km,
      y: () => Em
    });
    const hm = 2,
      Am = 12,
      am = 27,
      xm = 40,
      wm = 52,
      Dm = 59,
      im = 63,
      Rm = 83,
      pm = 84,
      Em = 89,
      om = 91,
      Om = 93,
      Ym = 94,
      qm = 95,
      jm = 97,
      Vm = 101,
      Im = 102,
      Km = 73,
      Qm = 16,
      nm = 86,
      Jm = 60,
      cm = 17,
      zm = 56,
      Zm = 100,
      km = 81;

    function bm(mm, Tm) {
      switch (mm) {
        case hm:
          return function(mm) {
            return {
              Na: dm(mm),
              Ga: mm.float(),
              Xa: mm.long()
            }
          }(Tm);
        case Am:
          return function(mm) {
            return {
              rA: Xm(mm),
              sA: Xm(mm)
            }
          }(Tm);
        case am:
          return function(mm) {
            return {
              yA: mm.bool(),
              CA: Xm(mm)
            }
          }(Tm);
        case xm:
          return Tm.str();
        case wm:
          return function(mm) {
            return {
              id: mm.long(),
              zf: wT(mm)
            }
          }(Tm);
        case Dm:
          return function(mm) {
            return {
              DA: Xm(mm),
              iA: iT(mm)
            }
          }(Tm);
        case im:
          return Tm.str();
        case Rm:
        case pm:
          return Tm.long();
        case Em:
          return function(mm) {
            return {
              dh: mm.long(),
              gh: mm.bool(),
              Wh: mm.float()
            }
          }(Tm);
        case om:
          return Tm.long();
        case Om:
          return function(mm) {
            return {
              Zh: mm.bool(),
              kh: ET(mm)
            }
          }(Tm);
        case Ym:
          return function(mm) {
            return {
              id: mm.str(),
              position: pT(mm),
              jh: oT(mm),
              style: sm(mm),
              Ih: mm.bool()
            }
          }(Tm);
        case qm:
          return function(mm) {
            return {
              id: Xm(mm)
            }
          }(Tm);
        case jm:
          return function(mm) {
            return {
              va: mm.long(),
              Ua: mm.str(),
              da: aT(mm),
              ga: aT(mm),
              Wa: Xm(mm),
              Fa: Xm(mm),
              mx: Xm(mm),
              Tx: Xm(mm),
              hx: Xm(mm),
              Ax: aT(mm),
              wx: aT(mm),
              Dx: Xm(mm),
              ix: Xm(mm),
              Rx: Xm(mm)
            }
          }(Tm);
        case Vm:
          return Tm.str();
        case Im:
          return Tm.long();
        case Km:
          return function(mm) {
            return {
              Wm: mm.long(),
              Fm: mm.str(),
              mT: mm.float()
            }
          }(Tm);
        case Qm:
          return function(mm) {
            return {
              Nh: mm.bool(),
              Gh: Xm(mm),
              Xh: mm.str(),
              Ph: YT(mm),
              Hh: YT(mm),
              yh: mm.bool(),
              Ch: mm.long(),
              rh: qT(mm)
            }
          }(Tm);
        case nm:
          return function(mm) {
            return {
              ba: Xm(mm)
            }
          }(Tm);
        case Jm:
          return function(mm) {
            return {
              Kh: mm.str(),
              Qh: mm.str(),
              nh: jT(mm),
              eA: mm.str(),
              NA: Fm(mm),
              XA: mm.float()
            }
          }(Tm);
        case cm:
          return function(mm) {
            return {
              Kh: mm.str(),
              Qh: mm.str(),
              nh: jT(mm)
            }
          }(Tm);
        case zm:
          return function(mm) {
            return mm.HO(VT)
          }(Tm);
        case Zm:
          return function(mm) {
            return {
              fh: KT(mm),
              Dh: um(mm)
            }
          }(Tm);
        case km:
          return function(mm) {
            return {
              Tm: mm.bool(),
              fm: Xm(mm),
              hm: nT(mm),
              am: CT(mm)
            }
          }(Tm);
        default:
          throw new Error(`no reader for to-client message ${mm}`)
      }
    }

    function Sm(mm) {
      return {
        entityName: mm.str()
      }
    }

    function em(mm) {
      const Tm = mm.index(4);
      return 0 === Tm ? mm.str() : 1 === Tm ? mm.long() : 2 === Tm ? mm.bool() : Sm(mm)
    }

    function Nm(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return mm.map(em)
      }(mm)
    }

    function Gm(mm) {
      return {
        translationKey: mm.str(),
        params: Nm(mm)
      }
    }

    function Xm(mm) {
      return 0 === mm.index(2) ? null : mm.str()
    }

    function Pm(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          color: Xm(mm),
          colour: Xm(mm),
          fontSize: Xm(mm)
        }
      }(mm)
    }

    function Hm(mm) {
      return {
        icon: mm.str(),
        style: Pm(mm)
      }
    }

    function ym(mm) {
      const Tm = mm.index(3);
      return 0 === Tm ? {
        string: mm.str()
      } : 1 === Tm ? {
        styledEntityName: Sm(mm)
      } : {
        styledTranslatedText: Gm(mm)
      }
    }

    function Cm(mm) {
      const Tm = mm.index(3);
      return 0 === Tm ? null : 1 === Tm ? mm.str() : mm.long()
    }

    function rm(mm) {
      return 0 === mm.index(2) ? null : mm.float()
    }

    function sm(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          color: Xm(mm),
          colour: Xm(mm),
          fontWeight: Cm(mm),
          fontStyle: Xm(mm),
          fontSize: Xm(mm),
          opacity: rm(mm)
        }
      }(mm)
    }

    function lm(mm) {
      return {
        str: ym(mm),
        style: sm(mm),
        clickableUrl: Xm(mm)
      }
    }

    function Mm(mm) {
      return mm.str()
    }

    function um(mm) {
      return mm.HO(Mm)
    }

    function Bm(mm) {
      return 0 === mm.index(2) ? null : um(mm)
    }

    function Lm(mm) {
      return {
        type: mm.str(),
        progress: mm.float(),
        width: Xm(mm),
        height: Xm(mm),
        colours: Bm(mm),
        backgroundColour: Xm(mm)
      }
    }

    function tm(mm) {
      return {
        type: mm.str(),
        action: mm.str(),
        style: sm(mm)
      }
    }

    function Um(mm) {
      const Tm = mm.index(7);
      return 0 === Tm ? {
        string: mm.str()
      } : 1 === Tm ? {
        entityName: Sm(mm)
      } : 2 === Tm ? {
        translatedText: Gm(mm)
      } : 3 === Tm ? {
        styledIcon: Hm(mm)
      } : 4 === Tm ? {
        Xf: lm(mm)
      } : 5 === Tm ? {
        styledProgressBar: Lm(mm)
      } : {
        styledKeyBinding: tm(mm)
      }
    }

    function dm(mm) {
      return mm.HO(Um)
    }
    const gm = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Wm(mm) {
      return gm[mm.index(5)]
    }

    function Fm(mm) {
      return 0 === mm.index(2) ? null : mm.double()
    }

    function mT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          Sf: Fm(mm),
          ef: mm.double(),
          Nf: mm.double(),
          Gf: mm.bool(),
          description: dm(mm),
          Hf: mm.str(),
          scale: Fm(mm),
          rotation: Fm(mm)
        }
      }(mm)
    }

    function TT(mm) {
      return 0 === mm.index(2) ? null : mm.bool()
    }

    function fT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          Cf: mm.double(),
          icon: mm.str(),
          label: dm(mm),
          rf: mm.bool(),
          scale: Fm(mm),
          rotation: Fm(mm),
          sf: TT(mm)
        }
      }(mm)
    }

    function hT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          Sf: Fm(mm),
          Mf: mm.double(),
          uf: mm.double(),
          Bf: mm.double(),
          gravity: mm.double(),
          Lf: mm.double(),
          vf: mm.double(),
          tf: mm.double(),
          Gf: mm.bool(),
          description: dm(mm),
          icon: Xm(mm)
        }
      }(mm)
    }

    function AT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          speed: mm.double(),
          df: mm.double(),
          label: dm(mm),
          icon: Xm(mm),
          scale: Fm(mm),
          rotation: Fm(mm)
        }
      }(mm)
    }

    function aT(mm) {
      return 0 === mm.index(2) ? null : mm.long()
    }

    function xT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          Wf: mm.long(),
          Ff: mm.double(),
          mh: mm.double(),
          Th: aT(mm),
          label: dm(mm),
          icon: Xm(mm)
        }
      }(mm)
    }

    function wT(mm) {
      return {
        type: Wm(mm),
        progressBar: mT(mm),
        timedClick: fT(mm),
        gravityBar: hT(mm),
        precisionBar: AT(mm),
        rhythmClick: xT(mm)
      }
    }
    const DT = ["playerGone", "rateLimited"];

    function iT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return DT[mm.index(2)]
      }(mm)
    }

    function RT(mm) {
      return mm.float()
    }

    function pT(mm) {
      return mm.HO(RT)
    }

    function ET(mm) {
      return 0 === mm.index(2) ? null : pT(mm)
    }

    function oT(mm) {
      return 0 === mm.index(2) ? null : dm(mm)
    }

    function OT(mm) {
      return mm.long()
    }

    function YT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return mm.HO(OT)
      }(mm)
    }

    function qT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          Rh: mm.str(),
          qh: mm.long()
        }
      }(mm)
    }

    function jT(mm) {
      const Tm = mm.index(3);
      return 0 === Tm ? null : 1 === Tm ? mm.str() : Gm(mm)
    }

    function VT(mm) {
      return {
        bh: mm.str(),
        Sh: mm.str(),
        eh: mm.str()
      }
    }

    function IT(mm) {
      return {
        hh: mm.str(),
        Ah: Xm(mm),
        ah: Xm(mm),
        xh: um(mm)
      }
    }

    function KT(mm) {
      return mm.HO(IT)
    }

    function QT(mm) {
      return {
        Am: mm.str(),
        x: mm.long(),
        y: mm.long(),
        z: mm.long()
      }
    }

    function nT(mm) {
      return mm.HO(QT)
    }

    function JT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          Zm: mm.float(),
          km: mm.long(),
          bm: mm.long()
        }
      }(mm)
    }

    function cT(mm) {
      return {
        blockName: mm.str(),
        jm: mm.bool(),
        Vm: mm.bool(),
        Im: mm.bool(),
        Km: mm.float(),
        Qm: mm.float(),
        nm: mm.long(),
        Jm: JT(mm)
      }
    }

    function zT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return mm.HO(cT)
      }(mm)
    }

    function ZT(mm) {
      return {
        Om: mm.str(),
        Ym: zT(mm)
      }
    }

    function kT(mm) {
      return {
        blockName: mm.str(),
        frequency: mm.float()
      }
    }

    function bT(mm) {
      return mm.HO(kT)
    }

    function ST(mm) {
      return {
        Gm: mm.str(),
        Xm: mm.str(),
        frequency: mm.float(),
        Pm: bT(mm)
      }
    }

    function eT(mm) {
      return mm.HO(ST)
    }

    function NT(mm) {
      return {
        blockName: mm.str(),
        radius: mm.long(),
        rm: mm.long(),
        Dm: mm.long(),
        im: mm.long(),
        sm: mm.float()
      }
    }

    function GT(mm) {
      return mm.HO(NT)
    }

    function XT(mm) {
      return {
        Dm: mm.long(),
        im: mm.long(),
        Rm: mm.long(),
        pm: mm.bool(),
        Em: ZT(mm),
        Sm: eT(mm),
        ym: GT(mm)
      }
    }

    function PT(mm) {
      return mm.HO(XT)
    }

    function HT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          name: mm.str(),
          Bm: Xm(mm)
        }
      }(mm)
    }

    function yT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          terrain: HT(mm),
          Lm: GT(mm)
        }
      }(mm)
    }

    function CT(mm) {
      return 0 === mm.index(2) ? null : function(mm) {
        return {
          layers: PT(mm),
          lm: yT(mm)
        }
      }(mm)
    }
  },
  40675: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => Jm,
      B: () => Sm,
      D: () => Km,
      G: () => Qm,
      J: () => qm,
      M: () => Zm,
      P: () => Nm,
      S: () => Om,
      W: () => Xm,
      _: () => Vm,
      ab: () => jm,
      bb: () => Im,
      cb: () => nm,
      e: () => Am,
      h: () => Gm,
      j: () => em,
      k: () => om,
      n: () => Ym,
      q: () => bm,
      t: () => cm,
      w: () => km,
      y: () => zm
    });
    var hm = fm(2987);
    const Am = {
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

    function am(mm, Tm) {
      return !ArrayBuffer.isView(mm) || mm instanceof DataView ? Array.isArray(mm) ? mm.map((mm => Tm(mm))) : mm : Array.from(mm, (mm => Tm(mm)))
    }

    function xm(mm) {
      if ("string" !== typeof mm) return mm;
      for (let Tm = 0; Tm < mm.length; Tm++) {
        const fm = mm.charCodeAt(Tm);
        if (fm >= 55296 && fm <= 57343) return Dm.decode(wm.encode(mm))
      }
      return mm
    }
    const wm = new TextEncoder,
      Dm = new TextDecoder;

    function im(mm) {
      return mm
    }
    let Rm;

    function pm(mm) {
      return null === mm || "object" !== typeof mm ? mm : [xm(mm.dD), xm(mm.gD)]
    }

    function Em(mm) {
      return null === mm || "object" !== typeof mm ? mm : [am(mm.Ph, im), am(mm.Ox, im)]
    }

    function om(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Hi), xm(Tm.yi)];
      var Tm
    }

    function Om(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [Tm.id, Tm.bR];
      var Tm
    }

    function Ym(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [Tm.va, xm(Tm.Ua), Tm.da, xm(Tm.Fa), Tm.Ax, Tm.wx, Tm.Fx, xm(Tm.mw), xm(Tm.Tw)];
      var Tm
    }

    function qm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [am(Tm.qR, im), Tm.jR];
      var Tm
    }

    function jm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [am(Tm.Ji, (mm => xm(mm))), xm(Tm.zi), Tm.Zi];
      var Tm
    }

    function Vm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [am(Tm.Ux, im), xm(Tm.gx), Tm.Wx];
      var Tm
    }

    function Im(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Sh), xm(Tm.eh)];
      var Tm
    }

    function Km(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.xw)];
      var Tm
    }

    function Qm(mm) {
      return xm(mm)
    }

    function nm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.hR), xm(Tm.AR), xm(Tm.dD), xm(Tm.gD)];
      var Tm
    }

    function Jm(mm) {
      return pm(mm)
    }

    function cm(mm) {
      return pm(mm)
    }

    function zm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Ex)];
      var Tm
    }

    function Zm(mm) {
      return mm
    }

    function km(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.Hx), xm(Tm.yx)];
      var Tm
    }

    function bm(mm) {
      return xm(mm)
    }

    function Sm(mm) {
      return Em(mm)
    }

    function em(mm) {
      return Em(mm)
    }

    function Nm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [xm(Tm.aR)];
      var Tm
    }

    function Gm(mm) {
      return (Rm ??= (0, hm.h)().map((mm => mm.name)), Rm).map((Tm => {
        return "string" === typeof(fm = mm[Tm]) ? xm(fm) : am(fm, im);
        var fm
      }))
    }

    function Xm(mm) {
      return null === (Tm = mm) || "object" !== typeof Tm ? Tm : [Tm.Li, Tm.Ui, Tm.gi];
      var Tm
    }
  },
  9240: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(9184);
    const Am = "Air",
      am = Object.freeze(new hm.g(Am, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39366: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      f: () => wm
    });
    var hm = fm(354),
      Am = fm(4399);
    const am = new Set(Am.m),
      xm = new Map;

    function wm(mm, Tm) {
      let fm = xm.get(Tm);
      void 0 === fm && (fm = new Map, xm.set(Tm, fm));
      let Am = fm.get(mm);
      return void 0 === Am && (Am = `${mm}${(0,hm.C)(Tm)}`, fm.set(mm, Am)), Am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);