export const id = 205;
export const ids = [205];
export const modules = {
  41704: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM,
      d: () => PM,
      f: () => aM
    });
    var OM = iM(41706),
      SM = iM(5198),
      jM = iM(41710);

    function aM(MM) {
      return MM.payloadKind === SM.hc.Msgpack ? (0, OM.c)(MM.payload) : void 0
    }

    function PM(MM, rM) {
      if (rM.payloadKind === SM.hc.Bytes || rM.payloadKind === SM.hc.MsgpackBin) return (0, jM.d)(MM, rM.payload)
    }

    function nM(MM) {
      return null !== MM && "object" === typeof MM
    }
  },
  41712: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      c: () => mM,
      e: () => HM,
      h: () => zM,
      i: () => dM
    });
    var OM = iM(5198),
      SM = iM(41714);
    const jM = new Map,
      aM = new Set,
      PM = new Set;
    let nM = 0,
      QM = 0;

    function zM(MM, rM) {
      let iM = jM.get(MM);
      return iM || (iM = new Set, jM.set(MM, iM)), iM.add(rM), () => {
        iM.delete(rM)
      }
    }

    function LM() {
      return 0 !== nM
    }

    function mM(MM) {
      return aM.add(MM), () => {
        aM.delete(MM)
      }
    }

    function HM(MM) {
      return PM.add(MM), () => {
        PM.delete(MM)
      }
    }
    const hM = "A raw message listener threw";

    function JM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM;
      for (const OM of rM) try {
        OM()
      } catch (iM) {
        MM ? (0, SM.k)(iM, hM) : console.error(hM, iM)
      }
    }
    const dM = {
      fire: function(MM) {
        if ("connection" === MM.type) {
          const rM = MM.phase === OM.F.Activated && MM.conn !== nM && MM.conn > QM,
            iM = (MM.phase === OM.F.Left || MM.phase === OM.F.Closed) && MM.conn === nM;
          return void(rM || iM ? (nM = rM ? MM.conn : 0, JM(!0)) : MM.phase === OM.F.Resumed && 0 !== nM && MM.conn > QM && (nM = MM.conn, JM(!0, PM)))
        }
        const rM = jM.get(MM.Kz);
        if (rM && MM.conn === nM && 0 !== nM)
          for (const OM of rM) try {
            OM(MM)
          } catch (iM) {
            (0, SM.k)(iM, hM)
          }
      },
      close: function(MM) {
        QM = Math.max(QM, MM, nM), 0 !== nM && (nM = 0, JM(!1))
      }
    }
  },
  41695: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM,
      i: () => nM,
      j: () => PM
    });
    var OM = iM(1279),
      SM = iM(41669);
    const jM = new TextDecoder,
      aM = new TextEncoder;

    function PM(MM, rM) {
      const iM = MM.queries.entityName(rM);
      if (iM === SM.xc) return;
      const aM = MM.memoryData(MM.scratch(), 4 + iM, 4, "entity_name's answer");
      if (!aM) return;
      const PM = aM.getUint32(0, !0),
        nM = jM.decode(new Uint8Array(aM.buffer, aM.byteOffset + 4, iM));
      return (0, OM.e)(nM, !1, PM === SM.Ld ? null : PM)
    }

    function nM(MM, rM, iM) {
      const OM = aM.encode(iM);
      if (OM.length > SM.zb) return !1;
      const jM = MM.memoryView(Uint8Array, MM.scratch(), OM.length, "has_effect's name");
      return !!jM && (jM.set(OM), 1 === MM.queries.hasEffect(rM, OM.length))
    }

    function QM(MM, rM, iM, OM) {
      const aM = MM.queries.blockData(rM, iM, OM);
      if (aM === SM.xc) return;
      const PM = MM.memoryView(Uint8Array, MM.scratch(), aM, "block_data's answer");
      return PM ? JSON.parse(jM.decode(PM)) : void 0
    }
  },
  41706: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      f: () => zM
    });
    const OM = new TextDecoder;

    function SM(MM) {
      const rM = new jM(MM),
        iM = rM.value();
      if (rM.at !== MM.length) throw new Error(`msgpack: ${MM.length-rM.at} bytes after the value`);
      return iM
    }
    class jM {
      constructor(MM) {
        this.bytes = MM, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(MM.buffer, MM.byteOffset, MM.byteLength)
      }
      value() {
        const MM = this.u8();
        if (MM <= 127) return MM;
        if (MM >= 224) return MM - 256;
        if (MM >= 128 && MM <= 143) return this.map(15 & MM);
        if (MM >= 144 && MM <= 159) return this.array(15 & MM);
        if (MM >= 160 && MM <= 191) return this.str(31 & MM);
        switch (MM) {
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
            throw new Error(`msgpack: unknown byte 0x${MM.toString(16)} at ${this.at-1}`)
        }
      }
      take(MM) {
        const rM = this.at;
        if (rM + MM > this.bytes.length) throw new Error(`msgpack: ${MM} bytes past the end at ${rM}`);
        return this.at = rM + MM, rM
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
      int64(MM) {
        const rM = this.take(8);
        return MM ? this.view.getBigInt64(rM, !1) : this.view.getBigUint64(rM, !1)
      }
      str(MM) {
        const rM = this.take(MM),
          iM = this.bytes;
        if (MM < 16) {
          let SM = "";
          for (let jM = rM; jM < rM + MM; jM++) {
            const aM = iM[jM];
            if (aM >= 128) return OM.decode(iM.subarray(rM, rM + MM));
            SM += String.fromCharCode(aM)
          }
          return SM
        }
        return OM.decode(iM.subarray(rM, rM + MM))
      }
      bin(MM) {
        const rM = this.take(MM);
        return this.bytes.subarray(rM, rM + MM)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(MM) {
        this.enter();
        const rM = [];
        for (let iM = 0; iM < MM; iM++) rM.push(this.value());
        return this.depth--, rM
      }
      map(MM) {
        this.enter();
        const rM = {};
        for (let iM = 0; iM < MM; iM++) {
          const MM = this.value(),
            iM = this.value();
          rM["__proto__" === MM ? "__proto_" : String(MM)] = iM
        }
        return this.depth--, rM
      }
      ext(MM) {
        const rM = this.view.getInt8(this.take(1)),
          iM = this.take(MM);
        if (0 !== rM) {
          if (-1 === rM) {
            if (1 === MM) return new Date(NaN);
            if (4 === MM) return new Date(1e3 * this.view.getUint32(iM, !1));
            if (8 === MM) {
              const MM = this.view.getUint32(iM, !1),
                rM = MM >>> 2,
                OM = 4294967296 * (3 & MM) + this.view.getUint32(iM + 4, !1);
              return new Date(1e3 * OM + rM / 1e6)
            }
            if (12 === MM) {
              const MM = this.view.getUint32(iM, !1),
                rM = 4294967296 * this.view.getInt32(iM + 4, !1) + this.view.getUint32(iM + 8, !1);
              return new Date(1e3 * rM + MM / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${rM} of ${MM} bytes`)
        }
      }
    }
    const aM = new TextEncoder,
      PM = -(2n ** 63n),
      nM = 2n ** 63n - 1n,
      QM = 2n ** 64n - 1n;

    function zM(MM) {
      const rM = new LM;
      return rM.value(MM, 0), rM.bytes()
    }
    class LM {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(MM, rM) {
        if (rM > 512) throw new Error("msgpack: nested too deep");
        switch (typeof MM) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(MM ? 195 : 194);
          case "number":
            return void this.number(MM);
          case "bigint":
            return void this.bigint(MM);
          case "string":
            return void this.string(MM);
          case "object":
            if (null === MM) this.u8(192);
            else if (MM instanceof Uint8Array) this.head(MM.length, 196, -1, 197, 198), this.room(MM.length), this.buf.set(MM, this.at), this.at += MM.length;
            else if (Array.isArray(MM)) {
              this.head(MM.length, 220, 144, 220, 221);
              for (const iM of MM) this.value(iM, rM + 1)
            } else {
              var iM, OM;
              if (Object.getPrototypeOf(MM) !== Object.prototype && null !== Object.getPrototypeOf(MM)) throw new Error(`msgpack: can't encode a ${null!==(iM=null===(OM=MM.constructor)||void 0===OM?void 0:OM.name)&&void 0!==iM?iM:"object"}`);
              {
                const iM = Object.keys(MM);
                this.head(iM.length, 222, 128, 222, 223);
                for (const OM of iM) this.string(OM), this.value(MM[OM], rM + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof MM)
        }
      }
      number(MM) {
        Number.isInteger(MM) && MM >= -2147483648 && MM <= 4294967295 ? MM >= 0 ? MM < 128 ? this.u8(MM) : MM < 256 ? (this.u8(204), this.u8(MM)) : MM < 65536 ? (this.u8(205), this.u16(MM)) : (this.u8(206), this.u32(MM)) : MM >= -32 ? this.u8(MM + 256) : MM >= -128 ? (this.u8(208), this.u8(MM + 256)) : MM >= -32768 ? (this.u8(209), this.u16(MM + 65536)) : (this.u8(210), this.u32(MM >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, MM, !1), this.at += 8)
      }
      bigint(MM) {
        const rM = MM >= PM && MM <= nM;
        if (!rM && (MM < 0n || MM > QM)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(rM ? 211 : 207), this.room(8), rM ? this.view.setBigInt64(this.at, MM, !1) : this.view.setBigUint64(this.at, MM, !1), this.at += 8
      }
      string(MM) {
        const rM = aM.encode(MM);
        this.head(rM.length, 217, 160, 218, 219), this.room(rM.length), this.buf.set(rM, this.at), this.at += rM.length
      }
      head(MM, rM, iM, OM, SM) {
        iM >= 0 && MM < (160 === iM ? 32 : 16) ? this.u8(iM | MM) : rM !== OM && MM < 256 ? (this.u8(rM), this.u8(MM)) : MM < 65536 ? (this.u8(OM), this.u16(MM)) : (this.u8(SM), this.u32(MM))
      }
      room(MM) {
        if (this.at + MM <= this.buf.length) return;
        let rM = 2 * this.buf.length;
        for (; rM < this.at + MM;) rM *= 2;
        const iM = new Uint8Array(rM);
        iM.set(this.buf.subarray(0, this.at)), this.buf = iM, this.view = new DataView(iM.buffer)
      }
      u8(MM) {
        this.room(1), this.buf[this.at++] = MM
      }
      u16(MM) {
        this.room(2), this.view.setUint16(this.at, MM, !1), this.at += 2
      }
      u32(MM) {
        this.room(4), this.view.setUint32(this.at, MM, !1), this.at += 4
      }
    }
  },
  41710: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(41697);
    const SM = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class jM {
      constructor(MM) {
        this.buf = MM, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let MM = this.u8(),
          rM = 127 & MM,
          iM = 128;
        for (; 128 & MM;) {
          if (iM > 2 ** 63) throw new RangeError("avro: varint too long");
          MM = this.u8(), rM += (127 & MM) * iM, iM *= 128
        }
        return rM % 2 === 1 ? -(rM + 1) / 2 : rM / 2
      }
      float() {
        const MM = this.take(4);
        return this.floats().getFloat32(MM, !0)
      }
      double() {
        const MM = this.take(8);
        return this.floats().getFloat64(MM, !0)
      }
      str() {
        const MM = this.size(),
          rM = this.take(MM),
          iM = rM + MM;
        if (MM <= 32) {
          let MM = "";
          for (let OM = rM; OM < iM; OM++) {
            const jM = this.buf[OM];
            if (jM >= 128) return SM.decode(this.buf.subarray(rM, iM));
            MM += String.fromCharCode(jM)
          }
          return MM
        }
        return SM.decode(this.buf.subarray(rM, iM))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(MM) {
        const rM = this.take(MM);
        return this.buf.slice(rM, rM + MM)
      }
      index(MM) {
        const rM = this.long();
        if (!(rM >= 0 && rM < MM)) throw new RangeError(`avro: index ${rM} of ${MM}`);
        return rM
      }
      OL(MM) {
        const rM = [];
        for (let iM = this.long(); 0 !== iM; iM = this.long()) {
          iM = this.block(iM);
          for (let OM = 0; OM < iM; OM++) rM.push(MM(this))
        }
        return rM
      }
      map(MM) {
        const rM = {};
        for (let iM = this.long(); 0 !== iM; iM = this.long()) {
          iM = this.block(iM);
          for (let OM = 0; OM < iM; OM++) {
            rM[this.str()] = MM(this)
          }
        }
        return rM
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(MM) {
        let rM = MM;
        if (rM < 0 && (rM = -rM, this.long()), rM > this.buf.length - this.at) throw new RangeError(`avro: block of ${rM} items in ${this.buf.length-this.at} bytes`);
        return rM
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const MM = this.long();
        if (MM < 0) throw new RangeError(`avro: length ${MM}`);
        return MM
      }
      u8() {
        const MM = this.buf[this.at];
        if (void 0 === MM) throw new RangeError("avro: truncated");
        return this.at++, MM
      }
      take(MM) {
        const rM = this.at;
        if (MM > this.buf.length - rM) throw new RangeError("avro: truncated");
        return this.at = rM + MM, rM
      }
    }

    function aM(MM, rM) {
      const iM = new jM(rM),
        SM = (0, OM.kb)(MM, iM);
      return iM.end(), SM
    }
  },
  41697: (MM, rM, iM) => {
    iM.d(rM, {
      C: () => aM,
      D: () => gM,
      F: () => SM,
      J: () => PM,
      M: () => HM,
      O: () => wM,
      P: () => bM,
      R: () => CM,
      U: () => zM,
      V: () => LM,
      W: () => tM,
      _: () => hM,
      b: () => GM,
      bb: () => EM,
      f: () => dM,
      fb: () => JM,
      gb: () => nM,
      h: () => yM,
      i: () => lM,
      k: () => eM,
      kb: () => uM,
      n: () => OM,
      q: () => jM,
      u: () => UM,
      w: () => mM,
      z: () => QM
    });
    const OM = 2,
      SM = 12,
      jM = 27,
      aM = 40,
      PM = 52,
      nM = 59,
      QM = 63,
      zM = 83,
      LM = 84,
      mM = 89,
      HM = 91,
      hM = 93,
      JM = 94,
      dM = 95,
      yM = 97,
      lM = 101,
      EM = 102,
      UM = 73,
      GM = 16,
      CM = 86,
      eM = 60,
      bM = 17,
      wM = 56,
      tM = 100,
      gM = 81;

    function uM(MM, rM) {
      switch (MM) {
        case OM:
          return function(MM) {
            return {
              Di: KM(MM),
              oi: MM.float(),
              Yi: MM.long()
            }
          }(rM);
        case SM:
          return function(MM) {
            return {
              Wr: DM(MM),
              sr: DM(MM)
            }
          }(rM);
        case jM:
          return function(MM) {
            return {
              OS: MM.bool(),
              SS: DM(MM)
            }
          }(rM);
        case aM:
          return rM.str();
        case PM:
          return function(MM) {
            return {
              id: MM.long(),
              bO: ar(MM)
            }
          }(rM);
        case nM:
          return function(MM) {
            return {
              LM: DM(MM),
              mM: nr(MM)
            }
          }(rM);
        case QM:
          return rM.str();
        case zM:
        case LM:
          return rM.long();
        case mM:
          return function(MM) {
            return {
              QO: MM.long(),
              zO: MM.bool(),
              LO: MM.float()
            }
          }(rM);
        case HM:
          return rM.long();
        case hM:
          return function(MM) {
            return {
              mO: MM.bool(),
              HO: Lr(MM)
            }
          }(rM);
        case JM:
          return function(MM) {
            return {
              id: MM.str(),
              position: zr(MM),
              hO: mr(MM),
              style: NM(MM),
              dO: MM.bool()
            }
          }(rM);
        case dM:
          return function(MM) {
            return {
              id: DM(MM)
            }
          }(rM);
        case yM:
          return function(MM) {
            return {
              hM: MM.long(),
              JM: MM.str(),
              dM: Sr(MM),
              yM: Sr(MM),
              lM: DM(MM),
              EM: DM(MM),
              UM: DM(MM),
              GM: DM(MM),
              CM: DM(MM),
              eM: Sr(MM),
              bM: Sr(MM),
              wM: DM(MM),
              tM: DM(MM),
              gM: DM(MM)
            }
          }(rM);
        case lM:
          return rM.str();
        case EM:
          return rM.long();
        case UM:
          return function(MM) {
            return {
              Aj: MM.long(),
              xj: MM.str(),
              vj: MM.float()
            }
          }(rM);
        case GM:
          return function(MM) {
            return {
              ei: MM.bool(),
              bi: DM(MM),
              wi: MM.str(),
              ti: hr(MM),
              gi: hr(MM),
              ui: MM.bool(),
              Ri: MM.long(),
              Wi: Jr(MM)
            }
          }(rM);
        case CM:
          return function(MM) {
            return {
              nS: DM(MM)
            }
          }(rM);
        case eM:
          return function(MM) {
            return {
              Pi: MM.str(),
              ni: MM.str(),
              Qi: dr(MM),
              Ui: MM.str(),
              Gi: VM(MM),
              Ci: MM.float()
            }
          }(rM);
        case bM:
          return function(MM) {
            return {
              Pi: MM.str(),
              ni: MM.str(),
              Qi: dr(MM)
            }
          }(rM);
        case wM:
          return function(MM) {
            return MM.OL(yr)
          }(rM);
        case tM:
          return function(MM) {
            return {
              MM: Er(MM),
              jM: vM(MM)
            }
          }(rM);
        case gM:
          return function(MM) {
            return {
              fS: MM.bool(),
              YS: DM(MM),
              NS: Gr(MM),
              vS: or(MM)
            }
          }(rM);
        default:
          throw new Error(`no reader for to-client message ${MM}`)
      }
    }

    function RM(MM) {
      return {
        entityName: MM.str()
      }
    }

    function pM(MM) {
      const rM = MM.index(4);
      return 0 === rM ? MM.str() : 1 === rM ? MM.long() : 2 === rM ? MM.bool() : RM(MM)
    }

    function WM(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return MM.map(pM)
      }(MM)
    }

    function sM(MM) {
      return {
        translationKey: MM.str(),
        params: WM(MM)
      }
    }

    function DM(MM) {
      return 0 === MM.index(2) ? null : MM.str()
    }

    function kM(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          color: DM(MM),
          colour: DM(MM),
          fontSize: DM(MM)
        }
      }(MM)
    }

    function ZM(MM) {
      return {
        icon: MM.str(),
        style: kM(MM)
      }
    }

    function oM(MM) {
      const rM = MM.index(3);
      return 0 === rM ? {
        string: MM.str()
      } : 1 === rM ? {
        styledEntityName: RM(MM)
      } : {
        styledTranslatedText: sM(MM)
      }
    }

    function fM(MM) {
      const rM = MM.index(3);
      return 0 === rM ? null : 1 === rM ? MM.str() : MM.long()
    }

    function YM(MM) {
      return 0 === MM.index(2) ? null : MM.float()
    }

    function NM(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          color: DM(MM),
          colour: DM(MM),
          fontWeight: fM(MM),
          fontStyle: DM(MM),
          fontSize: DM(MM),
          opacity: YM(MM)
        }
      }(MM)
    }

    function AM(MM) {
      return {
        str: oM(MM),
        style: NM(MM),
        clickableUrl: DM(MM)
      }
    }

    function xM(MM) {
      return MM.str()
    }

    function vM(MM) {
      return MM.OL(xM)
    }

    function FM(MM) {
      return 0 === MM.index(2) ? null : vM(MM)
    }

    function BM(MM) {
      return {
        type: MM.str(),
        progress: MM.float(),
        width: DM(MM),
        height: DM(MM),
        colours: FM(MM),
        backgroundColour: DM(MM)
      }
    }

    function XM(MM) {
      return {
        type: MM.str(),
        action: MM.str(),
        style: NM(MM)
      }
    }

    function IM(MM) {
      const rM = MM.index(7);
      return 0 === rM ? {
        string: MM.str()
      } : 1 === rM ? {
        entityName: RM(MM)
      } : 2 === rM ? {
        translatedText: sM(MM)
      } : 3 === rM ? {
        styledIcon: ZM(MM)
      } : 4 === rM ? {
        ki: AM(MM)
      } : 5 === rM ? {
        styledProgressBar: BM(MM)
      } : {
        styledKeyBinding: XM(MM)
      }
    }

    function KM(MM) {
      return MM.OL(IM)
    }
    const qM = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function TM(MM) {
      return qM[MM.index(5)]
    }

    function VM(MM) {
      return 0 === MM.index(2) ? null : MM.double()
    }

    function cM(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          uO: VM(MM),
          RO: MM.double(),
          pO: MM.double(),
          WO: MM.bool(),
          description: KM(MM),
          sO: MM.str(),
          scale: VM(MM),
          rotation: VM(MM)
        }
      }(MM)
    }

    function Mr(MM) {
      return 0 === MM.index(2) ? null : MM.bool()
    }

    function rr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          kO: MM.double(),
          icon: MM.str(),
          label: KM(MM),
          ZO: MM.bool(),
          scale: VM(MM),
          rotation: VM(MM),
          oO: Mr(MM)
        }
      }(MM)
    }

    function ir(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          uO: VM(MM),
          YO: MM.double(),
          AO: MM.double(),
          xO: MM.double(),
          gravity: MM.double(),
          vO: MM.double(),
          FO: MM.double(),
          BO: MM.double(),
          WO: MM.bool(),
          description: KM(MM),
          icon: DM(MM)
        }
      }(MM)
    }

    function Or(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          speed: MM.double(),
          IO: MM.double(),
          label: KM(MM),
          icon: DM(MM),
          scale: VM(MM),
          rotation: VM(MM)
        }
      }(MM)
    }

    function Sr(MM) {
      return 0 === MM.index(2) ? null : MM.long()
    }

    function jr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          qO: MM.long(),
          VO: MM.double(),
          cO: MM.double(),
          MS: Sr(MM),
          label: KM(MM),
          icon: DM(MM)
        }
      }(MM)
    }

    function ar(MM) {
      return {
        type: TM(MM),
        progressBar: cM(MM),
        timedClick: rr(MM),
        gravityBar: ir(MM),
        precisionBar: Or(MM),
        rhythmClick: jr(MM)
      }
    }
    const Pr = ["playerGone", "rateLimited"];

    function nr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return Pr[MM.index(2)]
      }(MM)
    }

    function Qr(MM) {
      return MM.float()
    }

    function zr(MM) {
      return MM.OL(Qr)
    }

    function Lr(MM) {
      return 0 === MM.index(2) ? null : zr(MM)
    }

    function mr(MM) {
      return 0 === MM.index(2) ? null : KM(MM)
    }

    function Hr(MM) {
      return MM.long()
    }

    function hr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return MM.OL(Hr)
      }(MM)
    }

    function Jr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          br: MM.str(),
          pr: MM.long()
        }
      }(MM)
    }

    function dr(MM) {
      const rM = MM.index(3);
      return 0 === rM ? null : 1 === rM ? MM.str() : sM(MM)
    }

    function yr(MM) {
      return {
        Xi: MM.str(),
        Ii: MM.str(),
        Ki: MM.str()
      }
    }

    function lr(MM) {
      return {
        rM: MM.str(),
        iM: DM(MM),
        OM: DM(MM),
        SM: vM(MM)
      }
    }

    function Er(MM) {
      return MM.OL(lr)
    }

    function Ur(MM) {
      return {
        xS: MM.str(),
        x: MM.long(),
        y: MM.long(),
        z: MM.long()
      }
    }

    function Gr(MM) {
      return MM.OL(Ur)
    }

    function Cr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          mj: MM.float(),
          Hj: MM.long(),
          hj: MM.long()
        }
      }(MM)
    }

    function er(MM) {
      return {
        blockName: MM.str(),
        Sj: MM.bool(),
        jj: MM.bool(),
        aj: MM.bool(),
        Pj: MM.float(),
        nj: MM.float(),
        Qj: MM.long(),
        zj: Cr(MM)
      }
    }

    function br(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return MM.OL(er)
      }(MM)
    }

    function wr(MM) {
      return {
        rj: MM.str(),
        ij: br(MM)
      }
    }

    function tr(MM) {
      return {
        blockName: MM.str(),
        frequency: MM.float()
      }
    }

    function gr(MM) {
      return MM.OL(tr)
    }

    function ur(MM) {
      return {
        yj: MM.str(),
        lj: MM.str(),
        frequency: MM.float(),
        Ej: gr(MM)
      }
    }

    function Rr(MM) {
      return MM.OL(ur)
    }

    function pr(MM) {
      return {
        blockName: MM.str(),
        radius: MM.long(),
        ej: MM.long(),
        XS: MM.long(),
        KS: MM.long(),
        bj: MM.float()
      }
    }

    function Wr(MM) {
      return MM.OL(pr)
    }

    function sr(MM) {
      return {
        XS: MM.long(),
        KS: MM.long(),
        qS: MM.long(),
        VS: MM.bool(),
        cS: wr(MM),
        Jj: Rr(MM),
        Gj: Wr(MM)
      }
    }

    function Dr(MM) {
      return MM.OL(sr)
    }

    function kr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          name: MM.str(),
          uj: DM(MM)
        }
      }(MM)
    }

    function Zr(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          terrain: kr(MM),
          Rj: Wr(MM)
        }
      }(MM)
    }

    function or(MM) {
      return 0 === MM.index(2) ? null : function(MM) {
        return {
          layers: Dr(MM),
          wj: Zr(MM)
        }
      }(MM)
    }
  },
  41682: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => eM,
      B: () => RM,
      D: () => UM,
      H: () => GM,
      K: () => dM,
      N: () => tM,
      O: () => WM,
      P: () => hM,
      S: () => DM,
      U: () => lM,
      X: () => yM,
      _: () => EM,
      ab: () => CM,
      d: () => SM,
      h: () => sM,
      j: () => pM,
      k: () => HM,
      l: () => JM,
      n: () => uM,
      p: () => bM,
      s: () => gM,
      w: () => wM
    });
    var OM = iM(3349);
    const SM = {
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

    function jM(MM, rM) {
      return !ArrayBuffer.isView(MM) || MM instanceof DataView ? Array.isArray(MM) ? MM.map((MM => rM(MM))) : MM : Array.from(MM, (MM => rM(MM)))
    }

    function aM(MM) {
      if ("string" !== typeof MM) return MM;
      for (let rM = 0; rM < MM.length; rM++) {
        const iM = MM.charCodeAt(rM);
        if (iM >= 55296 && iM <= 57343) return nM.decode(PM.encode(MM))
      }
      return MM
    }
    const PM = new TextEncoder,
      nM = new TextDecoder;

    function QM(MM) {
      return MM
    }
    let zM;

    function LM(MM) {
      return null === MM || "object" !== typeof MM ? MM : [aM(MM.lQ), aM(MM.EQ)]
    }

    function mM(MM) {
      return null === MM || "object" !== typeof MM ? MM : [jM(MM.ti, QM), jM(MM.oa, QM)]
    }

    function HM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Kz), aM(rM.qz)];
      var rM
    }

    function hM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.id, rM.IQ];
      var rM
    }

    function JM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.hM, aM(rM.JM), rM.dM, aM(rM.EM), rM.eM, rM.bM, rM.cn, aM(rM.MQ), aM(rM.rQ)];
      var rM
    }

    function dM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.SP, QM), rM.jP];
      var rM
    }

    function yM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.aQ, (MM => aM(MM))), aM(rM.nQ), rM.QQ];
      var rM
    }

    function lM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [jM(rM.mQ, QM), aM(rM.hQ), rM.JQ];
      var rM
    }

    function EM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ii), aM(rM.Ki)];
      var rM
    }

    function UM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ua)];
      var rM
    }

    function GM(MM) {
      return aM(MM)
    }

    function CM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.dQ), aM(rM.yQ), aM(rM.lQ), aM(rM.EQ)];
      var rM
    }

    function eM(MM) {
      return LM(MM)
    }

    function bM(MM) {
      return LM(MM)
    }

    function wM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.KQ)];
      var rM
    }

    function tM(MM) {
      return MM
    }

    function gM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.Ja), aM(rM.da)];
      var rM
    }

    function uM(MM) {
      return aM(MM)
    }

    function RM(MM) {
      return mM(MM)
    }

    function pM(MM) {
      return mM(MM)
    }

    function WM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [aM(rM.vQ)];
      var rM
    }

    function sM(MM) {
      return (zM ??= (0, OM.f)().map((MM => MM.name)), zM).map((rM => {
        return "string" === typeof(iM = MM[rM]) ? aM(iM) : jM(iM, QM);
        var iM
      }))
    }

    function DM(MM) {
      return null === (rM = MM) || "object" !== typeof rM ? rM : [rM.fa, rM.Ya, rM.Na];
      var rM
    }
  },
  9918: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => jM
    });
    var OM = iM(9863);
    const SM = "Air",
      jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40325: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => PM
    });
    var OM = iM(332),
      SM = iM(4843);
    const jM = new Set(SM.n),
      aM = new Map;

    function PM(MM, rM) {
      let iM = aM.get(rM);
      void 0 === iM && (iM = new Map, aM.set(rM, iM));
      let SM = iM.get(MM);
      return void 0 === SM && (SM = `${MM}${(0,OM.A)(rM)}`, iM.set(MM, SM)), SM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);