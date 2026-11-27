export const id = 207;
export const ids = [207];
export const modules = {
  41728: (ee, ie, He) => {
    He.d(ie, {
      c: () => Fe,
      g: () => Ue,
      h: () => Ke
    });
    var ye = He(41734),
      be = He(5271),
      Me = He(41736);

    function Ke(ee) {
      return ee.payloadKind === be.dc.Msgpack ? (0, ye.b)(ee.payload) : void 0
    }

    function Ue(ee, ie) {
      if (ie.payloadKind === be.dc.Bytes || ie.payloadKind === be.dc.MsgpackBin) return (0, Me.d)(ee, ie.payload)
    }

    function Fe(ee) {
      return null !== ee && "object" === typeof ee
    }
  },
  41739: (ee, ie, He) => {
    He.d(ie, {
      e: () => Re,
      g: () => ke,
      i: () => qe,
      j: () => oe,
      k: () => pe
    });
    var ye = He(5271),
      be = He(41743);
    const Me = new Map,
      Ke = new Set,
      Ue = new Set;
    let Fe = 0,
      Je = 0;

    function oe(ee, ie) {
      let He = Me.get(ee);
      return He || (He = new Set, Me.set(ee, He)), He.add(ie), () => {
        He.delete(ie)
      }
    }

    function Re() {
      return 0 !== Fe
    }

    function ke(ee) {
      return Ke.add(ee), () => {
        Ke.delete(ee)
      }
    }

    function qe(ee) {
      return Ue.add(ee), () => {
        Ue.delete(ee)
      }
    }
    const fe = "A raw message listener threw";

    function Te(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke;
      for (const ye of ie) try {
        ye()
      } catch (He) {
        ee ? (0, be.j)(He, fe) : console.error(fe, He)
      }
    }
    const pe = {
      fire: function(ee) {
        if ("connection" === ee.type) {
          const ie = ee.phase === ye.x.Activated && ee.conn !== Fe && ee.conn > Je,
            He = (ee.phase === ye.x.Left || ee.phase === ye.x.Closed) && ee.conn === Fe;
          return void(ie || He ? (Fe = ie ? ee.conn : 0, Te(!0)) : ee.phase === ye.x.Resumed && 0 !== Fe && ee.conn > Je && (Fe = ee.conn, Te(!0, Ue)))
        }
        const ie = Me.get(ee.nF);
        if (ie && ee.conn === Fe && 0 !== Fe)
          for (const ye of ie) try {
            ye(ee)
          } catch (He) {
            (0, be.j)(He, fe)
          }
      },
      close: function(ee) {
        Je = Math.max(Je, ee, Fe), 0 !== Fe && (Fe = 0, Te(!1))
      }
    }
  },
  41721: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      e: () => Fe,
      i: () => Ue
    });
    var ye = He(1207),
      be = He(41694);
    const Me = new TextDecoder,
      Ke = new TextEncoder;

    function Ue(ee, ie) {
      const He = ee.queries.entityName(ie);
      if (He === be.Ic) return;
      const Ke = ee.memoryData(ee.scratch(), 4 + He, 4, "entity_name's answer");
      if (!Ke) return;
      const Ue = Ke.getUint32(0, !0),
        Fe = Me.decode(new Uint8Array(Ke.buffer, Ke.byteOffset + 4, He));
      return (0, ye.e)(Fe, !1, Ue === be.be ? null : Ue)
    }

    function Fe(ee, ie, He) {
      const ye = Ke.encode(He);
      if (ye.length > be.xb) return !1;
      const Me = ee.memoryView(Uint8Array, ee.scratch(), ye.length, "has_effect's name");
      return !!Me && (Me.set(ye), 1 === ee.queries.hasEffect(ie, ye.length))
    }

    function Je(ee, ie, He, ye) {
      const Ke = ee.queries.blockData(ie, He, ye);
      if (Ke === be.Ic) return;
      const Ue = ee.memoryView(Uint8Array, ee.scratch(), Ke, "block_data's answer");
      return Ue ? JSON.parse(Me.decode(Ue)) : void 0
    }
  },
  41734: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      f: () => oe
    });
    const ye = new TextDecoder;

    function be(ee) {
      const ie = new Me(ee),
        He = ie.value();
      if (ie.at !== ee.length) throw new Error(`msgpack: ${ee.length-ie.at} bytes after the value`);
      return He
    }
    class Me {
      constructor(ee) {
        this.bytes = ee, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(ee.buffer, ee.byteOffset, ee.byteLength)
      }
      value() {
        const ee = this.u8();
        if (ee <= 127) return ee;
        if (ee >= 224) return ee - 256;
        if (ee >= 128 && ee <= 143) return this.map(15 & ee);
        if (ee >= 144 && ee <= 159) return this.array(15 & ee);
        if (ee >= 160 && ee <= 191) return this.str(31 & ee);
        switch (ee) {
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
            throw new Error(`msgpack: unknown byte 0x${ee.toString(16)} at ${this.at-1}`)
        }
      }
      take(ee) {
        const ie = this.at;
        if (ie + ee > this.bytes.length) throw new Error(`msgpack: ${ee} bytes past the end at ${ie}`);
        return this.at = ie + ee, ie
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
      int64(ee) {
        const ie = this.take(8);
        return ee ? this.view.getBigInt64(ie, !1) : this.view.getBigUint64(ie, !1)
      }
      str(ee) {
        const ie = this.take(ee),
          He = this.bytes;
        if (ee < 16) {
          let be = "";
          for (let Me = ie; Me < ie + ee; Me++) {
            const Ke = He[Me];
            if (Ke >= 128) return ye.decode(He.subarray(ie, ie + ee));
            be += String.fromCharCode(Ke)
          }
          return be
        }
        return ye.decode(He.subarray(ie, ie + ee))
      }
      bin(ee) {
        const ie = this.take(ee);
        return this.bytes.subarray(ie, ie + ee)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(ee) {
        this.enter();
        const ie = [];
        for (let He = 0; He < ee; He++) ie.push(this.value());
        return this.depth--, ie
      }
      map(ee) {
        this.enter();
        const ie = {};
        for (let He = 0; He < ee; He++) {
          const ee = this.value(),
            He = this.value();
          ie["__proto__" === ee ? "__proto_" : String(ee)] = He
        }
        return this.depth--, ie
      }
      ext(ee) {
        const ie = this.view.getInt8(this.take(1)),
          He = this.take(ee);
        if (0 !== ie) {
          if (-1 === ie) {
            if (1 === ee) return new Date(NaN);
            if (4 === ee) return new Date(1e3 * this.view.getUint32(He, !1));
            if (8 === ee) {
              const ee = this.view.getUint32(He, !1),
                ie = ee >>> 2,
                ye = 4294967296 * (3 & ee) + this.view.getUint32(He + 4, !1);
              return new Date(1e3 * ye + ie / 1e6)
            }
            if (12 === ee) {
              const ee = this.view.getUint32(He, !1),
                ie = 4294967296 * this.view.getInt32(He + 4, !1) + this.view.getUint32(He + 8, !1);
              return new Date(1e3 * ie + ee / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ie} of ${ee} bytes`)
        }
      }
    }
    const Ke = new TextEncoder,
      Ue = -(2n ** 63n),
      Fe = 2n ** 63n - 1n,
      Je = 2n ** 64n - 1n;

    function oe(ee) {
      const ie = new Re;
      return ie.value(ee, 0), ie.bytes()
    }
    class Re {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(ee, ie) {
        if (ie > 512) throw new Error("msgpack: nested too deep");
        switch (typeof ee) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(ee ? 195 : 194);
          case "number":
            return void this.number(ee);
          case "bigint":
            return void this.bigint(ee);
          case "string":
            return void this.string(ee);
          case "object":
            if (null === ee) this.u8(192);
            else if (ee instanceof Uint8Array) this.head(ee.length, 196, -1, 197, 198), this.room(ee.length), this.buf.set(ee, this.at), this.at += ee.length;
            else if (Array.isArray(ee)) {
              this.head(ee.length, 220, 144, 220, 221);
              for (const He of ee) this.value(He, ie + 1)
            } else {
              var He, ye;
              if (Object.getPrototypeOf(ee) !== Object.prototype && null !== Object.getPrototypeOf(ee)) throw new Error(`msgpack: can't encode a ${null!==(He=null===(ye=ee.constructor)||void 0===ye?void 0:ye.name)&&void 0!==He?He:"object"}`);
              {
                const He = Object.keys(ee);
                this.head(He.length, 222, 128, 222, 223);
                for (const ye of He) this.string(ye), this.value(ee[ye], ie + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof ee)
        }
      }
      number(ee) {
        Number.isInteger(ee) && ee >= -2147483648 && ee <= 4294967295 ? ee >= 0 ? ee < 128 ? this.u8(ee) : ee < 256 ? (this.u8(204), this.u8(ee)) : ee < 65536 ? (this.u8(205), this.u16(ee)) : (this.u8(206), this.u32(ee)) : ee >= -32 ? this.u8(ee + 256) : ee >= -128 ? (this.u8(208), this.u8(ee + 256)) : ee >= -32768 ? (this.u8(209), this.u16(ee + 65536)) : (this.u8(210), this.u32(ee >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, ee, !1), this.at += 8)
      }
      bigint(ee) {
        const ie = ee >= Ue && ee <= Fe;
        if (!ie && (ee < 0n || ee > Je)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ie ? 211 : 207), this.room(8), ie ? this.view.setBigInt64(this.at, ee, !1) : this.view.setBigUint64(this.at, ee, !1), this.at += 8
      }
      string(ee) {
        const ie = Ke.encode(ee);
        this.head(ie.length, 217, 160, 218, 219), this.room(ie.length), this.buf.set(ie, this.at), this.at += ie.length
      }
      head(ee, ie, He, ye, be) {
        He >= 0 && ee < (160 === He ? 32 : 16) ? this.u8(He | ee) : ie !== ye && ee < 256 ? (this.u8(ie), this.u8(ee)) : ee < 65536 ? (this.u8(ye), this.u16(ee)) : (this.u8(be), this.u32(ee))
      }
      room(ee) {
        if (this.at + ee <= this.buf.length) return;
        let ie = 2 * this.buf.length;
        for (; ie < this.at + ee;) ie *= 2;
        const He = new Uint8Array(ie);
        He.set(this.buf.subarray(0, this.at)), this.buf = He, this.view = new DataView(He.buffer)
      }
      u8(ee) {
        this.room(1), this.buf[this.at++] = ee
      }
      u16(ee) {
        this.room(2), this.view.setUint16(this.at, ee, !1), this.at += 2
      }
      u32(ee) {
        this.room(4), this.view.setUint32(this.at, ee, !1), this.at += 4
      }
    }
  },
  41736: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(41725);
    const be = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Me {
      constructor(ee) {
        this.buf = ee, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let ee = this.u8(),
          ie = 127 & ee,
          He = 128;
        for (; 128 & ee;) {
          if (He > 2 ** 63) throw new RangeError("avro: varint too long");
          ee = this.u8(), ie += (127 & ee) * He, He *= 128
        }
        return ie % 2 === 1 ? -(ie + 1) / 2 : ie / 2
      }
      float() {
        const ee = this.take(4);
        return this.floats().getFloat32(ee, !0)
      }
      double() {
        const ee = this.take(8);
        return this.floats().getFloat64(ee, !0)
      }
      str() {
        const ee = this.size(),
          ie = this.take(ee),
          He = ie + ee;
        if (ee <= 32) {
          let ee = "";
          for (let ye = ie; ye < He; ye++) {
            const Me = this.buf[ye];
            if (Me >= 128) return be.decode(this.buf.subarray(ie, He));
            ee += String.fromCharCode(Me)
          }
          return ee
        }
        return be.decode(this.buf.subarray(ie, He))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(ee) {
        const ie = this.take(ee);
        return this.buf.slice(ie, ie + ee)
      }
      index(ee) {
        const ie = this.long();
        if (!(ie >= 0 && ie < ee)) throw new RangeError(`avro: index ${ie} of ${ee}`);
        return ie
      }
      JR(ee) {
        const ie = [];
        for (let He = this.long(); 0 !== He; He = this.long()) {
          He = this.block(He);
          for (let ye = 0; ye < He; ye++) ie.push(ee(this))
        }
        return ie
      }
      map(ee) {
        const ie = {};
        for (let He = this.long(); 0 !== He; He = this.long()) {
          He = this.block(He);
          for (let ye = 0; ye < He; ye++) {
            ie[this.str()] = ee(this)
          }
        }
        return ie
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(ee) {
        let ie = ee;
        if (ie < 0 && (ie = -ie, this.long()), ie > this.buf.length - this.at) throw new RangeError(`avro: block of ${ie} items in ${this.buf.length-this.at} bytes`);
        return ie
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const ee = this.long();
        if (ee < 0) throw new RangeError(`avro: length ${ee}`);
        return ee
      }
      u8() {
        const ee = this.buf[this.at];
        if (void 0 === ee) throw new RangeError("avro: truncated");
        return this.at++, ee
      }
      take(ee) {
        const ie = this.at;
        if (ee > this.buf.length - ie) throw new RangeError("avro: truncated");
        return this.at = ie + ee, ie
      }
    }

    function Ke(ee, ie) {
      const He = new Me(ie),
        be = (0, ye.gb)(ee, He);
      return He.end(), be
    }
  },
  41725: (ee, ie, He) => {
    He.d(ie, {
      $: () => fe,
      A: () => we,
      C: () => be,
      E: () => Ue,
      H: () => qe,
      K: () => te,
      N: () => We,
      Q: () => Oe,
      T: () => oe,
      V: () => Re,
      X: () => Ze,
      ab: () => Be,
      db: () => Te,
      e: () => ge,
      fb: () => Fe,
      gb: () => De,
      h: () => pe,
      i: () => Xe,
      j: () => ze,
      l: () => de,
      o: () => ye,
      p: () => Me,
      t: () => Ee,
      v: () => ke,
      x: () => Je,
      z: () => Ke
    });
    const ye = 2,
      be = 12,
      Me = 27,
      Ke = 40,
      Ue = 52,
      Fe = 59,
      Je = 63,
      oe = 83,
      Re = 84,
      ke = 89,
      qe = 91,
      fe = 93,
      Te = 94,
      pe = 95,
      Xe = 97,
      ze = 101,
      Be = 102,
      Ee = 73,
      ge = 16,
      Oe = 86,
      de = 60,
      We = 17,
      te = 56,
      Ze = 100,
      we = 81;

    function De(ee, ie) {
      switch (ee) {
        case ye:
          return function(ee) {
            return {
              ze: he(ee),
              ge: ee.float(),
              Oe: ee.long()
            }
          }(ie);
        case be:
          return function(ee) {
            return {
              ee: ae(ee),
              ie: ae(ee)
            }
          }(ie);
        case Me:
          return function(ee) {
            return {
              Yi: ee.bool(),
              Vi: ae(ee)
            }
          }(ie);
        case Ke:
          return ie.str();
        case Ue:
          return function(ee) {
            return {
              id: ee.long(),
              Ci: Ki(ee)
            }
          }(ie);
        case Fe:
          return function(ee) {
            return {
              Yy: ae(ee),
              Vy: Fi(ee)
            }
          }(ie);
        case Je:
          return ie.str();
        case oe:
        case Re:
          return ie.long();
        case ke:
          return function(ee) {
            return {
              Ky: ee.long(),
              Uy: ee.bool(),
              Fy: ee.float()
            }
          }(ie);
        case qe:
          return ie.long();
        case fe:
          return function(ee) {
            return {
              Tb: ee.bool(),
              QH: Ri(ee)
            }
          }(ie);
        case Te:
          return function(ee) {
            return {
              id: ee.str(),
              position: oi(ee),
              Ji: ki(ee),
              style: ue(ee),
              Ri: ee.bool()
            }
          }(ie);
        case pe:
          return function(ee) {
            return {
              id: ae(ee)
            }
          }(ie);
        case Xe:
          return function(ee) {
            return {
              ue: ee.long(),
              Se: ee.str(),
              ne: bi(ee),
              je: bi(ee),
              se: ae(ee),
              Ie: ae(ee),
              he: ae(ee),
              Ne: ae(ee),
              Ge: ae(ee),
              Qe: bi(ee),
              ei: bi(ee),
              ii: ae(ee),
              Hi: ae(ee),
              yi: ae(ee)
            }
          }(ie);
        case ze:
          return ie.str();
        case Be:
          return ie.long();
        case Ee:
          return function(ee) {
            return {
              Ly: ee.long(),
              Cy: ee.str(),
              vy: ee.float()
            }
          }(ie);
        case ge:
          return function(ee) {
            return {
              Ei: ee.bool(),
              gi: ae(ee),
              Oi: ee.str(),
              di: fi(ee),
              Wi: fi(ee),
              ti: ee.bool(),
              Zi: ee.long(),
              wi: Ti(ee)
            }
          }(ie);
        case Oe:
          return function(ee) {
            return {
              SM: ae(ee)
            }
          }(ie);
        case de:
          return function(ee) {
            return {
              Oy: ee.str(),
              Wy: ee.str(),
              ty: Xi(ee),
              Zy: ee.str(),
              wy: re(ee),
              Dy: ee.float()
            }
          }(ie);
        case We:
          return function(ee) {
            return {
              Oy: ee.str(),
              Wy: ee.str(),
              ty: Xi(ee)
            }
          }(ie);
        case te:
          return function(ee) {
            return ee.JR(zi)
          }(ie);
        case Ze:
          return function(ee) {
            return {
              oy: Ei(ee),
              py: Se(ee)
            }
          }(ie);
        case we:
          return function(ee) {
            return {
              nb: ee.bool(),
              jb: ae(ee),
              sb: Oi(ee),
              hb: Ci(ee)
            }
          }(ie);
        default:
          throw new Error(`no reader for to-client message ${ee}`)
      }
    }

    function Pe(ee) {
      return {
        entityName: ee.str()
      }
    }

    function Ae(ee) {
      const ie = ee.index(4);
      return 0 === ie ? ee.str() : 1 === ie ? ee.long() : 2 === ie ? ee.bool() : Pe(ee)
    }

    function Ye(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return ee.map(Ae)
      }(ee)
    }

    function Ve(ee) {
      return {
        translationKey: ee.str(),
        params: Ye(ee)
      }
    }

    function ae(ee) {
      return 0 === ee.index(2) ? null : ee.str()
    }

    function ce(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          color: ae(ee),
          colour: ae(ee),
          fontSize: ae(ee)
        }
      }(ee)
    }

    function xe(ee) {
      return {
        icon: ee.str(),
        style: ce(ee)
      }
    }

    function Le(ee) {
      const ie = ee.index(3);
      return 0 === ie ? {
        string: ee.str()
      } : 1 === ie ? {
        styledEntityName: Pe(ee)
      } : {
        styledTranslatedText: Ve(ee)
      }
    }

    function Ce(ee) {
      const ie = ee.index(3);
      return 0 === ie ? null : 1 === ie ? ee.str() : ee.long()
    }

    function ve(ee) {
      return 0 === ee.index(2) ? null : ee.float()
    }

    function ue(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          color: ae(ee),
          colour: ae(ee),
          fontWeight: Ce(ee),
          fontStyle: ae(ee),
          fontSize: ae(ee),
          opacity: ve(ee)
        }
      }(ee)
    }

    function me(ee) {
      return {
        str: Le(ee),
        style: ue(ee),
        clickableUrl: ae(ee)
      }
    }

    function le(ee) {
      return ee.str()
    }

    function Se(ee) {
      return ee.JR(le)
    }

    function ne(ee) {
      return 0 === ee.index(2) ? null : Se(ee)
    }

    function je(ee) {
      return {
        type: ee.str(),
        progress: ee.float(),
        width: ae(ee),
        height: ae(ee),
        colours: ne(ee),
        backgroundColour: ae(ee)
      }
    }

    function se(ee) {
      return {
        type: ee.str(),
        action: ee.str(),
        style: ue(ee)
      }
    }

    function Ie(ee) {
      const ie = ee.index(7);
      return 0 === ie ? {
        string: ee.str()
      } : 1 === ie ? {
        entityName: Pe(ee)
      } : 2 === ie ? {
        translatedText: Ve(ee)
      } : 3 === ie ? {
        styledIcon: xe(ee)
      } : 4 === ie ? {
        Be: me(ee)
      } : 5 === ie ? {
        styledProgressBar: je(ee)
      } : {
        styledKeyBinding: se(ee)
      }
    }

    function he(ee) {
      return ee.JR(Ie)
    }
    const Ne = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Ge(ee) {
      return Ne[ee.index(5)]
    }

    function re(ee) {
      return 0 === ee.index(2) ? null : ee.double()
    }

    function Qe(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          Si: re(ee),
          ni: ee.double(),
          ji: ee.double(),
          si: ee.bool(),
          description: he(ee),
          Ii: ee.str(),
          scale: re(ee),
          rotation: re(ee)
        }
      }(ee)
    }

    function ei(ee) {
      return 0 === ee.index(2) ? null : ee.bool()
    }

    function ii(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          Gi: ee.double(),
          icon: ee.str(),
          label: he(ee),
          ri: ee.bool(),
          scale: re(ee),
          rotation: re(ee),
          Qi: ei(ee)
        }
      }(ee)
    }

    function Hi(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          Si: re(ee),
          iH: ee.double(),
          HH: ee.double(),
          yH: ee.double(),
          gravity: ee.double(),
          bH: ee.double(),
          KH: ee.double(),
          UH: ee.double(),
          si: ee.bool(),
          description: he(ee),
          icon: ae(ee)
        }
      }(ee)
    }

    function yi(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          speed: ee.double(),
          JH: ee.double(),
          label: he(ee),
          icon: ae(ee),
          scale: re(ee),
          rotation: re(ee)
        }
      }(ee)
    }

    function bi(ee) {
      return 0 === ee.index(2) ? null : ee.long()
    }

    function Mi(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          RH: ee.long(),
          kH: ee.double(),
          qH: ee.double(),
          fH: bi(ee),
          label: he(ee),
          icon: ae(ee)
        }
      }(ee)
    }

    function Ki(ee) {
      return {
        type: Ge(ee),
        progressBar: Qe(ee),
        timedClick: ii(ee),
        gravityBar: Hi(ee),
        precisionBar: yi(ee),
        rhythmClick: Mi(ee)
      }
    }
    const Ui = ["playerGone", "rateLimited"];

    function Fi(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return Ui[ee.index(2)]
      }(ee)
    }

    function Ji(ee) {
      return ee.float()
    }

    function oi(ee) {
      return ee.JR(Ji)
    }

    function Ri(ee) {
      return 0 === ee.index(2) ? null : oi(ee)
    }

    function ki(ee) {
      return 0 === ee.index(2) ? null : he(ee)
    }

    function qi(ee) {
      return ee.long()
    }

    function fi(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return ee.JR(qi)
      }(ee)
    }

    function Ti(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          Pi: ee.str(),
          Ai: ee.long()
        }
      }(ee)
    }

    function Xi(ee) {
      const ie = ee.index(3);
      return 0 === ie ? null : 1 === ie ? ee.str() : Ve(ee)
    }

    function zi(ee) {
      return {
        de: ee.str(),
        te: ee.str(),
        Ze: ee.str()
      }
    }

    function Bi(ee) {
      return {
        Ry: ee.str(),
        ky: ae(ee),
        qy: ae(ee),
        Ty: Se(ee)
      }
    }

    function Ei(ee) {
      return ee.JR(Bi)
    }

    function gi(ee) {
      return {
        Ib: ee.str(),
        x: ee.long(),
        y: ee.long(),
        z: ee.long()
      }
    }

    function Oi(ee) {
      return ee.JR(gi)
    }

    function di(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          TM: ee.float(),
          pM: ee.long(),
          XM: ee.long()
        }
      }(ee)
    }

    function Wi(ee) {
      return {
        blockName: ee.str(),
        UM: ee.bool(),
        FM: ee.bool(),
        JM: ee.bool(),
        oM: ee.float(),
        RM: ee.float(),
        kM: ee.long(),
        qM: di(ee)
      }
    }

    function ti(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return ee.JR(Wi)
      }(ee)
    }

    function Zi(ee) {
      return {
        bM: ee.str(),
        MM: ti(ee)
      }
    }

    function wi(ee) {
      return {
        blockName: ee.str(),
        frequency: ee.float()
      }
    }

    function Di(ee) {
      return ee.JR(wi)
    }

    function Pi(ee) {
      return {
        EM: ee.str(),
        gM: ee.str(),
        frequency: ee.float(),
        OM: Di(ee)
      }
    }

    function Ai(ee) {
      return ee.JR(Pi)
    }

    function Yi(ee) {
      return {
        blockName: ee.str(),
        radius: ee.long(),
        ZM: ee.long(),
        rb: ee.long(),
        Qb: ee.long(),
        wM: ee.float()
      }
    }

    function Vi(ee) {
      return ee.JR(Yi)
    }

    function ai(ee) {
      return {
        rb: ee.long(),
        Qb: ee.long(),
        eM: ee.long(),
        iM: ee.bool(),
        HM: Zi(ee),
        zM: Ai(ee),
        WM: Vi(ee)
      }
    }

    function ci(ee) {
      return ee.JR(ai)
    }

    function xi(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          name: ee.str(),
          YM: ae(ee)
        }
      }(ee)
    }

    function Li(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          terrain: xi(ee),
          VM: Vi(ee)
        }
      }(ee)
    }

    function Ci(ee) {
      return 0 === ee.index(2) ? null : function(ee) {
        return {
          layers: ci(ee),
          DM: Li(ee)
        }
      }(ee)
    }
  },
  41712: (ee, ie, He) => {
    He.d(ie, {
      $: () => Xe,
      B: () => de,
      D: () => Pe,
      E: () => Ee,
      F: () => ge,
      I: () => pe,
      J: () => Ze,
      N: () => Ye,
      R: () => fe,
      U: () => ae,
      X: () => ze,
      ab: () => Be,
      db: () => Oe,
      e: () => be,
      g: () => Ve,
      i: () => Ae,
      j: () => qe,
      m: () => Te,
      p: () => De,
      r: () => We,
      v: () => we,
      x: () => te
    });
    var ye = He(3246);
    const be = {
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

    function Me(ee, ie) {
      return !ArrayBuffer.isView(ee) || ee instanceof DataView ? Array.isArray(ee) ? ee.map((ee => ie(ee))) : ee : Array.from(ee, (ee => ie(ee)))
    }

    function Ke(ee) {
      if ("string" !== typeof ee) return ee;
      for (let ie = 0; ie < ee.length; ie++) {
        const He = ee.charCodeAt(ie);
        if (He >= 55296 && He <= 57343) return Fe.decode(Ue.encode(ee))
      }
      return ee
    }
    const Ue = new TextEncoder,
      Fe = new TextDecoder;

    function Je(ee) {
      return ee
    }
    let oe;

    function Re(ee) {
      return null === ee || "object" !== typeof ee ? ee : [Ke(ee.policy), Ke(ee.UF)]
    }

    function ke(ee) {
      return null === ee || "object" !== typeof ee ? ee : [Me(ee.di, Je), Me(ee.SF, Je)]
    }

    function qe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.nF), Ke(ie.jF)];
      var ie
    }

    function fe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [ie.id, ie.pJ];
      var ie
    }

    function Te(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [ie.ue, Ke(ie.Se), ie.ne, Ke(ie.Ie), ie.Qe, ie.ei, ie.zF, Ke(ie.BF), Ke(ie.EF)];
      var ie
    }

    function pe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Me(ie.fo, Je), ie.po];
      var ie
    }

    function Xe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Me(ie.BJ, (ee => Ke(ee))), Ke(ie.EJ), ie.gJ];
      var ie
    }

    function ze(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Me(ie.iJ, Je), Ke(ie.HJ), ie.yJ];
      var ie
    }

    function Be(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.te), Ke(ie.Ze)];
      var ie
    }

    function Ee(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.oo)];
      var ie
    }

    function ge(ee) {
      return Ke(ee)
    }

    function Oe(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.mF), Ke(ie.lF), Ke(ie.policy), Ke(ie.UF)];
      var ie
    }

    function de(ee) {
      return Re(ee)
    }

    function We(ee) {
      return Re(ee)
    }

    function te(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.Xo)];
      var ie
    }

    function Ze(ee) {
      return ee
    }

    function we(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.bJ), Ke(ie.MJ)];
      var ie
    }

    function De(ee) {
      return Ke(ee)
    }

    function Pe(ee) {
      return ke(ee)
    }

    function Ae(ee) {
      return ke(ee)
    }

    function Ye(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [Ke(ie.XJ)];
      var ie
    }

    function Ve(ee) {
      return (oe ??= (0, ye.f)().map((ee => ee.name)), oe).map((ie => {
        return "string" === typeof(He = ee[ie]) ? Ke(He) : Me(He, Je);
        var He
      }))
    }

    function ae(ee) {
      return null === (ie = ee) || "object" !== typeof ie ? ie : [ie.Ro, ie.ko, ie.qo];
      var ie
    }
  },
  10063: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Me
    });
    var ye = He(10008);
    const be = "Air",
      Me = Object.freeze(new ye.e(be, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40091: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      h: () => Ue
    });
    var ye = He(347),
      be = He(4861);
    const Me = new Set(be.p),
      Ke = new Map;

    function Ue(ee, ie) {
      let He = Ke.get(ie);
      void 0 === He && (He = new Map, Ke.set(ie, He));
      let be = He.get(ee);
      return void 0 === be && (be = `${ee}${(0,ye.G)(ie)}`, He.set(ee, be)), be
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);