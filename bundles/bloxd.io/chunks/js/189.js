export const id = 189;
export const ids = [189];
export const modules = {
  40655: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      e: () => NS,
      g: () => xS
    });
    var tS = gS(40658),
      bS = gS(4926),
      XS = gS(40664);

    function xS(SS) {
      return SS.payloadKind === bS.xc.Msgpack ? (0, tS.c)(SS.payload) : void 0
    }

    function NS(SS, HS) {
      if (HS.payloadKind === bS.xc.Bytes || HS.payloadKind === bS.xc.MsgpackBin) return (0, XS.d)(SS, HS.payload)
    }

    function qS(SS) {
      return null !== SS && "object" === typeof SS
    }
  },
  40666: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS,
      f: () => kS,
      h: () => aS,
      l: () => IS,
      m: () => GS
    });
    var tS = gS(4926),
      bS = gS(40672);
    const XS = new Map,
      xS = new Set,
      NS = new Set;
    let qS = 0,
      uS = 0;

    function IS(SS, HS) {
      let gS = XS.get(SS);
      return gS || (gS = new Set, XS.set(SS, gS)), gS.add(HS), () => {
        gS.delete(HS)
      }
    }

    function fS() {
      return 0 !== qS
    }

    function kS(SS) {
      return xS.add(SS), () => {
        xS.delete(SS)
      }
    }

    function aS(SS) {
      return NS.add(SS), () => {
        NS.delete(SS)
      }
    }
    const KS = "A raw message listener threw";

    function jS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xS;
      for (const tS of HS) try {
        tS()
      } catch (gS) {
        SS ? (0, bS.j)(gS, KS) : console.error(KS, gS)
      }
    }
    const GS = {
      fire: function(SS) {
        if ("connection" === SS.type) {
          const HS = SS.phase === tS.E.Activated && SS.conn !== qS && SS.conn > uS,
            gS = (SS.phase === tS.E.Left || SS.phase === tS.E.Closed) && SS.conn === qS;
          return void(HS || gS ? (qS = HS ? SS.conn : 0, jS(!0)) : SS.phase === tS.E.Resumed && 0 !== qS && SS.conn > uS && (qS = SS.conn, jS(!0, NS)))
        }
        const HS = XS.get(SS.Ju);
        if (HS && SS.conn === qS && 0 !== qS)
          for (const tS of HS) try {
            tS(SS)
          } catch (gS) {
            (0, bS.j)(gS, KS)
          }
      },
      close: function(SS) {
        uS = Math.max(uS, SS, qS), 0 !== qS && (qS = 0, jS(!1))
      }
    }
  },
  40643: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      e: () => qS,
      h: () => NS
    });
    var tS = gS(1348),
      bS = gS(40612);
    const XS = new TextDecoder,
      xS = new TextEncoder;

    function NS(SS, HS) {
      const gS = SS.queries.entityName(HS);
      if (gS === bS.Fc) return;
      const xS = SS.memoryData(SS.scratch(), 4 + gS, 4, "entity_name's answer");
      if (!xS) return;
      const NS = xS.getUint32(0, !0),
        qS = XS.decode(new Uint8Array(xS.buffer, xS.byteOffset + 4, gS));
      return (0, tS.d)(qS, !1, NS === bS.Nd ? null : NS)
    }

    function qS(SS, HS, gS) {
      const tS = xS.encode(gS);
      if (tS.length > bS.ob) return !1;
      const XS = SS.memoryView(Uint8Array, SS.scratch(), tS.length, "has_effect's name");
      return !!XS && (XS.set(tS), 1 === SS.queries.hasEffect(HS, tS.length))
    }

    function uS(SS, HS, gS, tS) {
      const xS = SS.queries.blockData(HS, gS, tS);
      if (xS === bS.Fc) return;
      const NS = SS.memoryView(Uint8Array, SS.scratch(), xS, "block_data's answer");
      return NS ? JSON.parse(XS.decode(NS)) : void 0
    }
  },
  40658: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      f: () => IS
    });
    const tS = new TextDecoder;

    function bS(SS) {
      const HS = new XS(SS),
        gS = HS.value();
      if (HS.at !== SS.length) throw new Error(`msgpack: ${SS.length-HS.at} bytes after the value`);
      return gS
    }
    class XS {
      constructor(SS) {
        this.bytes = SS, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(SS.buffer, SS.byteOffset, SS.byteLength)
      }
      value() {
        const SS = this.u8();
        if (SS <= 127) return SS;
        if (SS >= 224) return SS - 256;
        if (SS >= 128 && SS <= 143) return this.map(15 & SS);
        if (SS >= 144 && SS <= 159) return this.array(15 & SS);
        if (SS >= 160 && SS <= 191) return this.str(31 & SS);
        switch (SS) {
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
            throw new Error(`msgpack: unknown byte 0x${SS.toString(16)} at ${this.at-1}`)
        }
      }
      take(SS) {
        const HS = this.at;
        if (HS + SS > this.bytes.length) throw new Error(`msgpack: ${SS} bytes past the end at ${HS}`);
        return this.at = HS + SS, HS
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
      int64(SS) {
        const HS = this.take(8);
        return SS ? this.view.getBigInt64(HS, !1) : this.view.getBigUint64(HS, !1)
      }
      str(SS) {
        const HS = this.take(SS),
          gS = this.bytes;
        if (SS < 16) {
          let bS = "";
          for (let XS = HS; XS < HS + SS; XS++) {
            const xS = gS[XS];
            if (xS >= 128) return tS.decode(gS.subarray(HS, HS + SS));
            bS += String.fromCharCode(xS)
          }
          return bS
        }
        return tS.decode(gS.subarray(HS, HS + SS))
      }
      bin(SS) {
        const HS = this.take(SS);
        return this.bytes.subarray(HS, HS + SS)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(SS) {
        this.enter();
        const HS = [];
        for (let gS = 0; gS < SS; gS++) HS.push(this.value());
        return this.depth--, HS
      }
      map(SS) {
        this.enter();
        const HS = {};
        for (let gS = 0; gS < SS; gS++) {
          const SS = this.value(),
            gS = this.value();
          HS["__proto__" === SS ? "__proto_" : String(SS)] = gS
        }
        return this.depth--, HS
      }
      ext(SS) {
        const HS = this.view.getInt8(this.take(1)),
          gS = this.take(SS);
        if (0 !== HS) {
          if (-1 === HS) {
            if (1 === SS) return new Date(NaN);
            if (4 === SS) return new Date(1e3 * this.view.getUint32(gS, !1));
            if (8 === SS) {
              const SS = this.view.getUint32(gS, !1),
                HS = SS >>> 2,
                tS = 4294967296 * (3 & SS) + this.view.getUint32(gS + 4, !1);
              return new Date(1e3 * tS + HS / 1e6)
            }
            if (12 === SS) {
              const SS = this.view.getUint32(gS, !1),
                HS = 4294967296 * this.view.getInt32(gS + 4, !1) + this.view.getUint32(gS + 8, !1);
              return new Date(1e3 * HS + SS / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${HS} of ${SS} bytes`)
        }
      }
    }
    const xS = new TextEncoder,
      NS = -(2n ** 63n),
      qS = 2n ** 63n - 1n,
      uS = 2n ** 64n - 1n;

    function IS(SS) {
      const HS = new fS;
      return HS.value(SS, 0), HS.bytes()
    }
    class fS {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(SS, HS) {
        if (HS > 512) throw new Error("msgpack: nested too deep");
        switch (typeof SS) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(SS ? 195 : 194);
          case "number":
            return void this.number(SS);
          case "bigint":
            return void this.bigint(SS);
          case "string":
            return void this.string(SS);
          case "object":
            if (null === SS) this.u8(192);
            else if (SS instanceof Uint8Array) this.head(SS.length, 196, -1, 197, 198), this.room(SS.length), this.buf.set(SS, this.at), this.at += SS.length;
            else if (Array.isArray(SS)) {
              this.head(SS.length, 220, 144, 220, 221);
              for (const gS of SS) this.value(gS, HS + 1)
            } else {
              var gS, tS;
              if (Object.getPrototypeOf(SS) !== Object.prototype && null !== Object.getPrototypeOf(SS)) throw new Error(`msgpack: can't encode a ${null!==(gS=null===(tS=SS.constructor)||void 0===tS?void 0:tS.name)&&void 0!==gS?gS:"object"}`);
              {
                const gS = Object.keys(SS);
                this.head(gS.length, 222, 128, 222, 223);
                for (const tS of gS) this.string(tS), this.value(SS[tS], HS + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof SS)
        }
      }
      number(SS) {
        Number.isInteger(SS) && SS >= -2147483648 && SS <= 4294967295 ? SS >= 0 ? SS < 128 ? this.u8(SS) : SS < 256 ? (this.u8(204), this.u8(SS)) : SS < 65536 ? (this.u8(205), this.u16(SS)) : (this.u8(206), this.u32(SS)) : SS >= -32 ? this.u8(SS + 256) : SS >= -128 ? (this.u8(208), this.u8(SS + 256)) : SS >= -32768 ? (this.u8(209), this.u16(SS + 65536)) : (this.u8(210), this.u32(SS >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, SS, !1), this.at += 8)
      }
      bigint(SS) {
        const HS = SS >= NS && SS <= qS;
        if (!HS && (SS < 0n || SS > uS)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(HS ? 211 : 207), this.room(8), HS ? this.view.setBigInt64(this.at, SS, !1) : this.view.setBigUint64(this.at, SS, !1), this.at += 8
      }
      string(SS) {
        const HS = xS.encode(SS);
        this.head(HS.length, 217, 160, 218, 219), this.room(HS.length), this.buf.set(HS, this.at), this.at += HS.length
      }
      head(SS, HS, gS, tS, bS) {
        gS >= 0 && SS < (160 === gS ? 32 : 16) ? this.u8(gS | SS) : HS !== tS && SS < 256 ? (this.u8(HS), this.u8(SS)) : SS < 65536 ? (this.u8(tS), this.u16(SS)) : (this.u8(bS), this.u32(SS))
      }
      room(SS) {
        if (this.at + SS <= this.buf.length) return;
        let HS = 2 * this.buf.length;
        for (; HS < this.at + SS;) HS *= 2;
        const gS = new Uint8Array(HS);
        gS.set(this.buf.subarray(0, this.at)), this.buf = gS, this.view = new DataView(gS.buffer)
      }
      u8(SS) {
        this.room(1), this.buf[this.at++] = SS
      }
      u16(SS) {
        this.room(2), this.view.setUint16(this.at, SS, !1), this.at += 2
      }
      u32(SS) {
        this.room(4), this.view.setUint32(this.at, SS, !1), this.at += 4
      }
    }
  },
  40664: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(40649);
    const bS = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class XS {
      constructor(SS) {
        this.buf = SS, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let SS = this.u8(),
          HS = 127 & SS,
          gS = 128;
        for (; 128 & SS;) {
          if (gS > 2 ** 63) throw new RangeError("avro: varint too long");
          SS = this.u8(), HS += (127 & SS) * gS, gS *= 128
        }
        return HS % 2 === 1 ? -(HS + 1) / 2 : HS / 2
      }
      float() {
        const SS = this.take(4);
        return this.floats().getFloat32(SS, !0)
      }
      double() {
        const SS = this.take(8);
        return this.floats().getFloat64(SS, !0)
      }
      str() {
        const SS = this.size(),
          HS = this.take(SS),
          gS = HS + SS;
        if (SS <= 32) {
          let SS = "";
          for (let tS = HS; tS < gS; tS++) {
            const XS = this.buf[tS];
            if (XS >= 128) return bS.decode(this.buf.subarray(HS, gS));
            SS += String.fromCharCode(XS)
          }
          return SS
        }
        return bS.decode(this.buf.subarray(HS, gS))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(SS) {
        const HS = this.take(SS);
        return this.buf.slice(HS, HS + SS)
      }
      index(SS) {
        const HS = this.long();
        if (!(HS >= 0 && HS < SS)) throw new RangeError(`avro: index ${HS} of ${SS}`);
        return HS
      }
      PK(SS) {
        const HS = [];
        for (let gS = this.long(); 0 !== gS; gS = this.long()) {
          gS = this.block(gS);
          for (let tS = 0; tS < gS; tS++) HS.push(SS(this))
        }
        return HS
      }
      map(SS) {
        const HS = {};
        for (let gS = this.long(); 0 !== gS; gS = this.long()) {
          gS = this.block(gS);
          for (let tS = 0; tS < gS; tS++) {
            HS[this.str()] = SS(this)
          }
        }
        return HS
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(SS) {
        let HS = SS;
        if (HS < 0 && (HS = -HS, this.long()), HS > this.buf.length - this.at) throw new RangeError(`avro: block of ${HS} items in ${this.buf.length-this.at} bytes`);
        return HS
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const SS = this.long();
        if (SS < 0) throw new RangeError(`avro: length ${SS}`);
        return SS
      }
      u8() {
        const SS = this.buf[this.at];
        if (void 0 === SS) throw new RangeError("avro: truncated");
        return this.at++, SS
      }
      take(SS) {
        const HS = this.at;
        if (SS > this.buf.length - HS) throw new RangeError("avro: truncated");
        return this.at = HS + SS, HS
      }
    }

    function xS(SS, HS) {
      const gS = new XS(HS),
        bS = (0, tS.rb)(SS, gS);
      return gS.end(), bS
    }
  },
  40649: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => kS,
      D: () => uS,
      G: () => xS,
      H: () => dS,
      K: () => bS,
      O: () => NS,
      S: () => aS,
      W: () => JS,
      X: () => ZS,
      Z: () => wS,
      _: () => IS,
      bb: () => fS,
      cb: () => OS,
      d: () => DS,
      fb: () => KS,
      g: () => GS,
      gb: () => PS,
      jb: () => jS,
      k: () => CS,
      nb: () => qS,
      o: () => nS,
      rb: () => cS,
      s: () => hS,
      v: () => tS,
      w: () => XS,
      z: () => QS
    });
    const tS = 2,
      bS = 12,
      XS = 27,
      xS = 40,
      NS = 52,
      qS = 59,
      uS = 63,
      IS = 83,
      fS = 84,
      kS = 89,
      aS = 91,
      KS = 93,
      jS = 94,
      GS = 95,
      CS = 97,
      nS = 101,
      PS = 102,
      QS = 73,
      DS = 16,
      wS = 86,
      hS = 60,
      ZS = 17,
      JS = 56,
      OS = 100,
      dS = 81;

    function cS(SS, HS) {
      switch (SS) {
        case tS:
          return function(SS) {
            return {
              cX: oS(SS),
              vX: SS.float(),
              EX: SS.long()
            }
          }(HS);
        case bS:
          return function(SS) {
            return {
              Vb: AS(SS),
              ib: AS(SS)
            }
          }(HS);
        case XS:
          return function(SS) {
            return {
              Ab: SS.bool(),
              yb: AS(SS)
            }
          }(HS);
        case xS:
          return HS.str();
        case NS:
          return function(SS) {
            return {
              id: SS.long(),
              Gg: xH(SS)
            }
          }(HS);
        case qS:
          return function(SS) {
            return {
              tb: AS(SS),
              bb: qH(SS)
            }
          }(HS);
        case uS:
          return HS.str();
        case IS:
        case fS:
          return HS.long();
        case kS:
          return function(SS) {
            return {
              Bt: SS.long(),
              Mt: SS.bool(),
              Ft: SS.float()
            }
          }(HS);
        case aS:
          return HS.long();
        case KS:
          return function(SS) {
            return {
              Pt: SS.bool(),
              Qt: fH(SS)
            }
          }(HS);
        case jS:
          return function(SS) {
            return {
              id: SS.str(),
              position: IH(SS),
              ut: kH(SS),
              style: US(SS),
              kt: SS.bool()
            }
          }(HS);
        case GS:
          return function(SS) {
            return {
              id: AS(SS)
            }
          }(HS);
        case CS:
          return function(SS) {
            return {
              BX: SS.long(),
              MX: SS.str(),
              FX: bH(SS),
              RX: bH(SS),
              TX: AS(SS),
              oX: AS(SS),
              lX: AS(SS),
              mX: AS(SS),
              eX: AS(SS),
              rX: bH(SS),
              Sx: bH(SS),
              Hx: AS(SS),
              gx: AS(SS),
              tx: AS(SS)
            }
          }(HS);
        case nS:
          return HS.str();
        case PS:
          return HS.long();
        case QS:
          return function(SS) {
            return {
              oS: SS.long(),
              lS: SS.str(),
              mS: SS.float()
            }
          }(HS);
        case DS:
          return function(SS) {
            return {
              Zt: SS.bool(),
              Jt: AS(SS),
              Ot: SS.str(),
              dt: KH(SS),
              ct: KH(SS),
              vt: SS.bool(),
              Et: SS.long(),
              Lt: jH(SS)
            }
          }(HS);
        case wS:
          return function(SS) {
            return {
              JX: AS(SS)
            }
          }(HS);
        case hS:
          return function(SS) {
            return {
              Kt: SS.str(),
              jt: SS.str(),
              Gt: GH(SS),
              Ob: SS.str(),
              cb: eS(SS),
              Eb: SS.float()
            }
          }(HS);
        case ZS:
          return function(SS) {
            return {
              Kt: SS.str(),
              jt: SS.str(),
              Gt: GH(SS)
            }
          }(HS);
        case JS:
          return function(SS) {
            return SS.PK(CH)
          }(HS);
        case OS:
          return function(SS) {
            return {
              og: PH(SS),
              St: BS(SS)
            }
          }(HS);
        case dS:
          return function(SS) {
            return {
              SS: SS.bool(),
              HS: AS(SS),
              gS: DH(SS),
              bS: iH(SS)
            }
          }(HS);
        default:
          throw new Error(`no reader for to-client message ${SS}`)
      }
    }

    function vS(SS) {
      return {
        entityName: SS.str()
      }
    }

    function ES(SS) {
      const HS = SS.index(4);
      return 0 === HS ? SS.str() : 1 === HS ? SS.long() : 2 === HS ? SS.bool() : vS(SS)
    }

    function LS(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return SS.map(ES)
      }(SS)
    }

    function YS(SS) {
      return {
        translationKey: SS.str(),
        params: LS(SS)
      }
    }

    function AS(SS) {
      return 0 === SS.index(2) ? null : SS.str()
    }

    function yS(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          color: AS(SS),
          colour: AS(SS),
          fontSize: AS(SS)
        }
      }(SS)
    }

    function VS(SS) {
      return {
        icon: SS.str(),
        style: yS(SS)
      }
    }

    function iS(SS) {
      const HS = SS.index(3);
      return 0 === HS ? {
        string: SS.str()
      } : 1 === HS ? {
        styledEntityName: vS(SS)
      } : {
        styledTranslatedText: YS(SS)
      }
    }

    function WS(SS) {
      const HS = SS.index(3);
      return 0 === HS ? null : 1 === HS ? SS.str() : SS.long()
    }

    function zS(SS) {
      return 0 === SS.index(2) ? null : SS.float()
    }

    function US(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          color: AS(SS),
          colour: AS(SS),
          fontWeight: WS(SS),
          fontStyle: AS(SS),
          fontSize: AS(SS),
          opacity: zS(SS)
        }
      }(SS)
    }

    function pS(SS) {
      return {
        str: iS(SS),
        style: US(SS),
        clickableUrl: AS(SS)
      }
    }

    function sS(SS) {
      return SS.str()
    }

    function BS(SS) {
      return SS.PK(sS)
    }

    function MS(SS) {
      return 0 === SS.index(2) ? null : BS(SS)
    }

    function FS(SS) {
      return {
        type: SS.str(),
        progress: SS.float(),
        width: AS(SS),
        height: AS(SS),
        colours: MS(SS),
        backgroundColour: AS(SS)
      }
    }

    function RS(SS) {
      return {
        type: SS.str(),
        action: SS.str(),
        style: US(SS)
      }
    }

    function TS(SS) {
      const HS = SS.index(7);
      return 0 === HS ? {
        string: SS.str()
      } : 1 === HS ? {
        entityName: vS(SS)
      } : 2 === HS ? {
        translatedText: YS(SS)
      } : 3 === HS ? {
        styledIcon: VS(SS)
      } : 4 === HS ? {
        Zg: pS(SS)
      } : 5 === HS ? {
        styledProgressBar: FS(SS)
      } : {
        styledKeyBinding: RS(SS)
      }
    }

    function oS(SS) {
      return SS.PK(TS)
    }
    const lS = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function mS(SS) {
      return lS[SS.index(5)]
    }

    function eS(SS) {
      return 0 === SS.index(2) ? null : SS.double()
    }

    function rS(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          Qg: eS(SS),
          Dg: SS.double(),
          wg: SS.double(),
          hg: SS.bool(),
          description: oS(SS),
          Og: SS.str(),
          scale: eS(SS),
          rotation: eS(SS)
        }
      }(SS)
    }

    function SH(SS) {
      return 0 === SS.index(2) ? null : SS.bool()
    }

    function HH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          vg: SS.double(),
          icon: SS.str(),
          label: oS(SS),
          Eg: SS.bool(),
          scale: eS(SS),
          rotation: eS(SS),
          Lg: SH(SS)
        }
      }(SS)
    }

    function gH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          Qg: eS(SS),
          Ag: SS.double(),
          yg: SS.double(),
          Vg: SS.double(),
          gravity: SS.double(),
          ig: SS.double(),
          Wg: SS.double(),
          zg: SS.double(),
          hg: SS.bool(),
          description: oS(SS),
          icon: AS(SS)
        }
      }(SS)
    }

    function tH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          speed: SS.double(),
          sg: SS.double(),
          label: oS(SS),
          icon: AS(SS),
          scale: eS(SS),
          rotation: eS(SS)
        }
      }(SS)
    }

    function bH(SS) {
      return 0 === SS.index(2) ? null : SS.long()
    }

    function XH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          Mg: SS.long(),
          Fg: SS.double(),
          Rg: SS.double(),
          Tg: bH(SS),
          label: oS(SS),
          icon: AS(SS)
        }
      }(SS)
    }

    function xH(SS) {
      return {
        type: mS(SS),
        progressBar: rS(SS),
        timedClick: HH(SS),
        gravityBar: gH(SS),
        precisionBar: tH(SS),
        rhythmClick: XH(SS)
      }
    }
    const NH = ["playerGone", "rateLimited"];

    function qH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return NH[SS.index(2)]
      }(SS)
    }

    function uH(SS) {
      return SS.float()
    }

    function IH(SS) {
      return SS.PK(uH)
    }

    function fH(SS) {
      return 0 === SS.index(2) ? null : IH(SS)
    }

    function kH(SS) {
      return 0 === SS.index(2) ? null : oS(SS)
    }

    function aH(SS) {
      return SS.long()
    }

    function KH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return SS.PK(aH)
      }(SS)
    }

    function jH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          gt: SS.str(),
          qt: SS.long()
        }
      }(SS)
    }

    function GH(SS) {
      const HS = SS.index(3);
      return 0 === HS ? null : 1 === HS ? SS.str() : YS(SS)
    }

    function CH(SS) {
      return {
        Dt: SS.str(),
        wt: SS.str(),
        ht: SS.str()
      }
    }

    function nH(SS) {
      return {
        lg: SS.str(),
        mg: AS(SS),
        eg: AS(SS),
        rg: BS(SS)
      }
    }

    function PH(SS) {
      return SS.PK(nH)
    }

    function QH(SS) {
      return {
        tS: SS.str(),
        x: SS.long(),
        y: SS.long(),
        z: SS.long()
      }
    }

    function DH(SS) {
      return SS.PK(QH)
    }

    function wH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          ZS: SS.float(),
          OS: SS.long(),
          dS: SS.long()
        }
      }(SS)
    }

    function hH(SS) {
      return {
        blockName: SS.str(),
        GS: SS.bool(),
        CS: SS.bool(),
        nS: SS.bool(),
        PS: SS.float(),
        QS: SS.float(),
        DS: SS.long(),
        wS: wH(SS)
      }
    }

    function ZH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return SS.PK(hH)
      }(SS)
    }

    function JH(SS) {
      return {
        aS: SS.str(),
        KS: ZH(SS)
      }
    }

    function OH(SS) {
      return {
        blockName: SS.str(),
        frequency: SS.float()
      }
    }

    function dH(SS) {
      return SS.PK(OH)
    }

    function cH(SS) {
      return {
        ES: SS.str(),
        LS: SS.str(),
        frequency: SS.float(),
        YS: dH(SS)
      }
    }

    function vH(SS) {
      return SS.PK(cH)
    }

    function EH(SS) {
      return {
        blockName: SS.str(),
        radius: SS.long(),
        iS: SS.long(),
        NS: SS.long(),
        qS: SS.long(),
        WS: SS.float()
      }
    }

    function LH(SS) {
      return SS.PK(EH)
    }

    function YH(SS) {
      return {
        NS: SS.long(),
        qS: SS.long(),
        uS: SS.long(),
        IS: SS.bool(),
        fS: JH(SS),
        cS: vH(SS),
        yS: LH(SS)
      }
    }

    function AH(SS) {
      return SS.PK(YH)
    }

    function yH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          name: SS.str(),
          sS: AS(SS)
        }
      }(SS)
    }

    function VH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          terrain: yH(SS),
          BS: LH(SS)
        }
      }(SS)
    }

    function iH(SS) {
      return 0 === SS.index(2) ? null : function(SS) {
        return {
          layers: AH(SS),
          zS: VH(SS)
        }
      }(SS)
    }
  },
  40632: (SS, HS, gS) => {
    gS.d(HS, {
      $: () => PS,
      A: () => hS,
      B: () => vS,
      F: () => QS,
      G: () => DS,
      K: () => GS,
      M: () => OS,
      P: () => LS,
      Q: () => KS,
      U: () => AS,
      W: () => nS,
      _: () => CS,
      b: () => bS,
      db: () => wS,
      e: () => YS,
      i: () => ES,
      l: () => aS,
      m: () => jS,
      o: () => cS,
      r: () => ZS,
      t: () => dS,
      x: () => JS
    });
    var tS = gS(3140);
    const bS = {
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

    function XS(SS, HS) {
      return !ArrayBuffer.isView(SS) || SS instanceof DataView ? Array.isArray(SS) ? SS.map((SS => HS(SS))) : SS : Array.from(SS, (SS => HS(SS)))
    }

    function xS(SS) {
      if ("string" !== typeof SS) return SS;
      for (let HS = 0; HS < SS.length; HS++) {
        const gS = SS.charCodeAt(HS);
        if (gS >= 55296 && gS <= 57343) return qS.decode(NS.encode(SS))
      }
      return SS
    }
    const NS = new TextEncoder,
      qS = new TextDecoder;

    function uS(SS) {
      return SS
    }
    let IS;

    function fS(SS) {
      return null === SS || "object" !== typeof SS ? SS : [xS(SS.Mq), xS(SS.Fq)]
    }

    function kS(SS) {
      return null === SS || "object" !== typeof SS ? SS : [XS(SS.dt, uS), XS(SS.Xx, uS)]
    }

    function aS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Ju), xS(HS.Ou)];
      var HS
    }

    function KS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.id, HS.GI];
      var HS
    }

    function jS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.BX, xS(HS.MX), HS.FX, xS(HS.oX), HS.rX, HS.Sx, HS.Fx, xS(HS.Rx), xS(HS.Tx)];
      var HS
    }

    function GS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.bI, uS), HS.XI];
      var HS
    }

    function CS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.ju, (SS => xS(SS))), xS(HS.Gu), HS.Cu];
      var HS
    }

    function nS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [XS(HS.sx, uS), xS(HS.Bx), HS.Mx];
      var HS
    }

    function PS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.wt), xS(HS.ht)];
      var HS
    }

    function QS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.gN)];
      var HS
    }

    function DS(SS) {
      return xS(SS)
    }

    function wS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Fu), xS(HS.Ru), xS(HS.Mq), xS(HS.Fq)];
      var HS
    }

    function hS(SS) {
      return fS(SS)
    }

    function ZS(SS) {
      return fS(SS)
    }

    function JS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.bx)];
      var HS
    }

    function OS(SS) {
      return SS
    }

    function dS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Ex), xS(HS.Lx)];
      var HS
    }

    function cS(SS) {
      return xS(SS)
    }

    function vS(SS) {
      return kS(SS)
    }

    function ES(SS) {
      return kS(SS)
    }

    function LS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [xS(HS.Tu)];
      var HS
    }

    function YS(SS) {
      return (IS ??= (0, tS.e)().map((SS => SS.name)), IS).map((HS => {
        return "string" === typeof(gS = SS[HS]) ? xS(gS) : XS(gS, uS);
        var gS
      }))
    }

    function AS(SS) {
      return null === (HS = SS) || "object" !== typeof HS ? HS : [HS.Vu, HS.iu, HS.Wu];
      var HS
    }
  },
  9465: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      g: () => XS
    });
    var tS = gS(9411);
    const bS = "Air",
      XS = Object.freeze(new tS.e(bS, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39248: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      e: () => NS
    });
    var tS = gS(387),
      bS = gS(4586);
    const XS = new Set(bS.m),
      xS = new Map;

    function NS(SS, HS) {
      let gS = xS.get(HS);
      void 0 === gS && (gS = new Map, xS.set(HS, gS));
      let bS = gS.get(SS);
      return void 0 === bS && (bS = `${SS}${(0,tS.u)(HS)}`, gS.set(SS, bS)), bS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);