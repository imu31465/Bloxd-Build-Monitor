export const id = 244;
export const ids = [244];
export const modules = {
  39231: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Nz,
      i: () => uz,
      l: () => vz,
      n: () => bz,
      p: () => Uz,
      q: () => oz,
      s: () => Kz
    });
    var Fz = sz(38097),
      Wz = sz(39234);

    function Xz(zz, tz, sz, Fz) {
      switch (tz) {
        case 5120: {
          let tz = zz.getInt8(sz);
          return Fz && (tz = Math.max(tz / 127, -1)), tz
        }
        case 5121: {
          let tz = zz.getUint8(sz);
          return Fz && (tz /= 255), tz
        }
        case 5122: {
          let tz = zz.getInt16(sz, !0);
          return Fz && (tz = Math.max(tz / 32767, -1)), tz
        }
        case 5123: {
          let tz = zz.getUint16(sz, !0);
          return Fz && (tz /= 65535), tz
        }
        case 5131:
          return (0, Wz.d)(zz.getUint16(sz, !0));
        case 5124:
          return zz.getInt32(sz, !0);
        case 5125:
          return zz.getUint32(sz, !0);
        case 5126:
          return zz.getFloat32(sz, !0);
        default:
          throw new Error(`Invalid component type ${tz}`)
      }
    }

    function Oz(zz, tz, sz, Fz, Xz) {
      switch (tz) {
        case 5120:
          Fz && (Xz = Math.round(127 * Xz)), zz.setInt8(sz, Xz);
          break;
        case 5121:
          Fz && (Xz = Math.round(255 * Xz)), zz.setUint8(sz, Xz);
          break;
        case 5122:
          Fz && (Xz = Math.round(32767 * Xz)), zz.setInt16(sz, Xz, !0);
          break;
        case 5123:
          Fz && (Xz = Math.round(65535 * Xz)), zz.setUint16(sz, Xz, !0);
          break;
        case 5131:
          zz.setUint16(sz, (0, Wz.g)(Xz), !0);
          break;
        case 5124:
          zz.setInt32(sz, Xz, !0);
          break;
        case 5125:
          zz.setUint32(sz, Xz, !0);
          break;
        case 5126:
          zz.setFloat32(sz, Xz, !0);
          break;
        default:
          throw new Error(`Invalid component type ${tz}`)
      }
    }

    function oz(zz) {
      switch (zz) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${zz}'`)
      }
    }

    function vz(zz, tz, sz, Fz, Wz, vz, Uz, Kz) {
      const uz = new Array(Fz),
        Nz = new Array(Fz);
      if (zz instanceof Array) {
        let Wz = tz / 4;
        const Xz = sz / 4;
        for (let tz = 0; tz < vz; tz += Fz) {
          for (let tz = 0; tz < Fz; tz++) uz[tz] = Nz[tz] = zz[Wz + tz];
          Kz(Nz, tz);
          for (let tz = 0; tz < Fz; tz++) uz[tz] !== Nz[tz] && (zz[Wz + tz] = Nz[tz]);
          Wz += Xz
        }
      } else {
        const bz = ArrayBuffer.isView(zz) ? new DataView(zz.buffer, zz.byteOffset, zz.byteLength) : new DataView(zz),
          wz = oz(Wz);
        for (let zz = 0; zz < vz; zz += Fz) {
          for (let zz = 0, sz = tz; zz < Fz; zz++, sz += wz) uz[zz] = Nz[zz] = Xz(bz, Wz, sz, Uz);
          Kz(Nz, zz);
          for (let zz = 0, sz = tz; zz < Fz; zz++, sz += wz) uz[zz] !== Nz[zz] && Oz(bz, Wz, sz, Uz, Nz[zz]);
          tz += sz
        }
      }
    }

    function Uz(zz, tz, sz, Wz, Xz, Oz, Uz, Kz) {
      const uz = tz * oz(sz),
        Nz = Uz * tz;
      if (5126 !== sz || Xz !== uz) {
        const Fz = new Float32Array(Nz);
        return vz(zz, Wz, Xz, tz, sz, Nz, Oz, ((zz, sz) => {
          for (let Wz = 0; Wz < tz; Wz++) Fz[sz + Wz] = zz[Wz]
        })), Fz
      }
      if (!(zz instanceof Array || zz instanceof Float32Array) || 0 !== Wz || zz.length !== Nz) {
        if (zz instanceof Array) {
          const tz = Wz / 4;
          return zz.slice(tz, tz + Nz)
        }
        if (ArrayBuffer.isView(zz)) {
          const tz = zz.byteOffset + Wz;
          return 0 !== (3 & tz) && (Fz.e.Warn("Float array must be aligned to 4-bytes border"), Kz = !0), Kz ? new Float32Array(zz.buffer.slice(tz, tz + Nz * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(zz.buffer, tz, Nz)
        }
        return new Float32Array(zz, Wz, Nz)
      }
      return Kz ? zz.slice() : zz
    }

    function Kz(zz, tz, sz, Wz, Xz, Oz, Uz) {
      const Kz = oz(sz),
        uz = function(zz) {
          switch (zz) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${zz}'`)
          }
        }(sz),
        Nz = Oz * tz;
      if (Array.isArray(zz)) {
        if (0 !== (3 & Wz) || 0 !== (3 & Xz)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Fz = Wz / 4,
          oz = Xz / 4;
        if (Fz + (Oz - 1) * oz + tz > zz.length) throw new Error("Last accessed index is out of bounds.");
        if (oz < tz) throw new Error("Data stride cannot be smaller than the component size.");
        if (oz !== tz) {
          const Fz = new uz(Nz);
          return vz(zz, Wz, Xz, tz, sz, Nz, !1, ((zz, sz) => {
            for (let Wz = 0; Wz < tz; Wz++) Fz[sz + Wz] = zz[Wz]
          })), Fz
        }
        return new uz(zz.slice(Fz, Fz + Nz))
      }
      let bz, wz = Wz;
      ArrayBuffer.isView(zz) ? (bz = zz.buffer, wz += zz.byteOffset) : bz = zz;
      if (wz + (Oz - 1) * Xz + tz * Kz > bz.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Dz = tz * Kz;
      if (Xz < Dz) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Xz !== Dz) {
        const zz = new uz(Nz),
          sz = new Uint8Array(bz, wz),
          Fz = new Uint8Array(zz.buffer),
          Wz = tz * Kz;
        for (let tz = 0, oz = 0, vz = 0; tz < Oz; tz++, oz += Xz, vz += Wz) Fz.set(sz.subarray(oz, oz + Wz), vz);
        return zz
      }
      return 1 !== Kz && 0 !== (wz & Kz - 1) && (Fz.e.Warn("Array must be aligned to border of element size. Data will be copied."), Uz = !0), Uz ? new uz(bz.slice(wz, wz + Nz * Kz)) : new uz(bz, wz, Nz)
    }

    function uz(zz, tz, sz, Wz, Xz, Oz, Uz, Kz) {
      const uz = tz * oz(sz),
        Nz = Uz * tz;
      if (Kz.length !== Nz) throw new Error("Output length is not valid");
      if (5126 === sz && Xz === uz)
        if (zz instanceof Array) {
          const tz = Wz / 4;
          Kz.set(zz, tz)
        } else if (ArrayBuffer.isView(zz)) {
        const tz = zz.byteOffset + Wz;
        if (0 !== (3 & tz)) return Fz.e.Warn("Float array must be aligned to 4-bytes border"), void Kz.set(new Float32Array(zz.buffer.slice(tz, tz + Nz * Float32Array.BYTES_PER_ELEMENT)));
        const sz = new Float32Array(zz.buffer, tz, Nz);
        Kz.set(sz)
      } else {
        const tz = new Float32Array(zz, Wz, Nz);
        Kz.set(tz)
      } else vz(zz, Wz, Xz, tz, sz, Nz, Oz, ((zz, sz) => {
        for (let Fz = 0; Fz < tz; Fz++) Kz[sz + Fz] = zz[Fz]
      }))
    }

    function Nz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(zz)) {
        for (let Wz = 0; Wz < tz; Wz++)
          if (zz[sz + Wz] - Fz > 65535) return !0;
        return !1
      }
      return 4 === zz.BYTES_PER_ELEMENT
    }

    function bz(zz) {
      const tz = zz.buffer;
      if (tz instanceof ArrayBuffer) return zz;
      const sz = new ArrayBuffer(zz.byteLength);
      return new Uint8Array(sz).set(new Uint8Array(tz, zz.byteOffset, zz.byteLength)), sz
    }
  },
  39071: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Jz,
      h: () => xz,
      n: () => mz,
      j: () => cz,
      o: () => jz
    });
    class Fz {
      constructor() {
        this.children = []
      }
      isValid(zz) {
        return !0
      }
      process(zz, tz, sz) {
        let Fz = "";
        if (this.line) {
          let sz = this.line;
          const Wz = tz.processor;
          if (Wz) {
            Wz.lineProcessor && (sz = Wz.lineProcessor(sz, tz.isFragment, tz.processingContext));
            const Fz = tz.processor?.attributeKeywordName ?? "attribute",
              Xz = tz.isFragment && tz.processor?.varyingFragmentKeywordName ? tz.processor?.varyingFragmentKeywordName : !tz.isFragment && tz.processor?.varyingVertexKeywordName ? tz.processor?.varyingVertexKeywordName : "varying";
            if (!tz.isFragment && Wz.attributeProcessor && this.line.startsWith(Fz)) sz = Wz.attributeProcessor(this.line, zz, tz.processingContext);
            else if (Wz.varyingProcessor && (Wz.varyingCheck?.(this.line, tz.isFragment) || !Wz.varyingCheck && this.line.startsWith(Xz))) sz = Wz.varyingProcessor(this.line, tz.isFragment, zz, tz.processingContext);
            else if (Wz.uniformProcessor && Wz.uniformRegexp && Wz.uniformRegexp.test(this.line)) tz.lookForClosingBracketForUniformBuffer || (sz = Wz.uniformProcessor(this.line, tz.isFragment, zz, tz.processingContext));
            else if (Wz.uniformBufferProcessor && Wz.uniformBufferRegexp && Wz.uniformBufferRegexp.test(this.line)) tz.lookForClosingBracketForUniformBuffer || (sz = Wz.uniformBufferProcessor(this.line, tz.isFragment, tz.processingContext), tz.lookForClosingBracketForUniformBuffer = !0);
            else if (Wz.textureProcessor && Wz.textureRegexp && Wz.textureRegexp.test(this.line)) sz = Wz.textureProcessor(this.line, tz.isFragment, zz, tz.processingContext);
            else if ((Wz.uniformProcessor || Wz.uniformBufferProcessor) && this.line.startsWith("uniform") && !tz.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Wz.uniformProcessor && (sz = Wz.uniformProcessor(this.line, tz.isFragment, zz, tz.processingContext)) : Wz.uniformBufferProcessor && (sz = Wz.uniformBufferProcessor(this.line, tz.isFragment, tz.processingContext), tz.lookForClosingBracketForUniformBuffer = !0)
            }
            tz.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (tz.lookForClosingBracketForUniformBuffer = !1, Wz.endOfUniformBufferProcessor && (sz = Wz.endOfUniformBufferProcessor(this.line, tz.isFragment, tz.processingContext)))
          }
          Fz += sz + "\n"
        }
        for (const Wz of this.children) Fz += Wz.process(zz, tz, sz);
        return this.additionalDefineKey && (zz[this.additionalDefineKey] = this.additionalDefineValue || "true", sz[this.additionalDefineKey] = zz[this.additionalDefineKey]), Fz
      }
    }
    class Wz {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(zz) {
        this._lines.length = 0;
        for (const tz of zz) {
          if (!tz || "\r" === tz) continue;
          if ("#" === tz[0]) {
            this._lines.push(tz);
            continue
          }
          const zz = tz.trim();
          if (!zz) continue;
          if (zz.startsWith("//")) {
            this._lines.push(tz);
            continue
          }
          const sz = zz.indexOf(";");
          if (-1 === sz) this._lines.push(zz);
          else if (sz === zz.length - 1) zz.length > 1 && this._lines.push(zz);
          else {
            const zz = tz.split(";");
            for (let tz = 0; tz < zz.length; tz++) {
              let sz = zz[tz];
              sz && (sz = sz.trim(), sz && this._lines.push(sz + (tz !== zz.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Xz extends Fz {
      process(zz, tz, sz) {
        for (let Fz = 0; Fz < this.children.length; Fz++) {
          const Wz = this.children[Fz];
          if (Wz.isValid(zz)) return Wz.process(zz, tz, sz)
        }
        return ""
      }
    }
    class Oz extends Fz {
      isValid(zz) {
        return this.testExpression.isTrue(zz)
      }
    }
    class oz {
      isTrue(zz) {
        return !0
      }
      static postfixToInfix(zz) {
        const tz = [];
        for (const sz of zz)
          if (void 0 === oz._OperatorPriority[sz]) tz.push(sz);
          else {
            const zz = tz[tz.length - 1],
              Fz = tz[tz.length - 2];
            tz.length -= 2, tz.push(`(${Fz}${sz}${zz})`)
          } return tz[tz.length - 1]
      }
      static infixToPostfix(zz) {
        const tz = oz._InfixToPostfixCache.get(zz);
        if (tz) return tz.accessTime = Date.now(), tz.result;
        if (!zz.includes("&&") && !zz.includes("||") && !zz.includes(")") && !zz.includes("(")) return [zz];
        const sz = [];
        let Fz = -1;
        const Wz = () => {
            Kz = Kz.trim(), "" !== Kz && (sz.push(Kz), Kz = "")
          },
          Xz = zz => {
            Fz < oz._Stack.length - 1 && (oz._Stack[++Fz] = zz)
          },
          Oz = () => oz._Stack[Fz],
          vz = () => -1 === Fz ? "!!INVALID EXPRESSION!!" : oz._Stack[Fz--];
        let Uz = 0,
          Kz = "";
        for (; Uz < zz.length;) {
          const tz = zz.charAt(Uz),
            uz = Uz < zz.length - 1 ? zz.substring(Uz, 2 + Uz) : "";
          if ("(" === tz) Kz = "", Xz(tz);
          else if (")" === tz) {
            for (Wz(); - 1 !== Fz && "(" !== Oz();) sz.push(vz());
            vz()
          } else if (oz._OperatorPriority[uz] > 1) {
            for (Wz(); - 1 !== Fz && oz._OperatorPriority[Oz()] >= oz._OperatorPriority[uz];) sz.push(vz());
            Xz(uz), Uz++
          } else Kz += tz;
          Uz++
        }
        for (Wz(); - 1 !== Fz;) "(" === Oz() ? vz() : sz.push(vz());
        return oz._InfixToPostfixCache.size >= oz.InfixToPostfixCacheLimitSize && oz.ClearCache(), oz._InfixToPostfixCache.set(zz, {
          result: sz,
          accessTime: Date.now()
        }), sz
      }
      static ClearCache() {
        const zz = Array.from(oz._InfixToPostfixCache.entries()).sort(((zz, tz) => zz[1].accessTime - tz[1].accessTime));
        for (let tz = 0; tz < oz.InfixToPostfixCacheCleanupSize; tz++) oz._InfixToPostfixCache.delete(zz[tz][0])
      }
    }
    oz.InfixToPostfixCacheLimitSize = 5e4, oz.InfixToPostfixCacheCleanupSize = 25e3, oz._InfixToPostfixCache = new Map, oz._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, oz._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class vz extends oz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = zz, this.not = tz
      }
      isTrue(zz) {
        let tz = void 0 !== zz[this.define];
        return this.not && (tz = !tz), tz
      }
    }
    class Uz extends oz {
      isTrue(zz) {
        return this.leftOperand.isTrue(zz) || this.rightOperand.isTrue(zz)
      }
    }
    class Kz extends oz {
      isTrue(zz) {
        return this.leftOperand.isTrue(zz) && this.rightOperand.isTrue(zz)
      }
    }
    class uz extends oz {
      constructor(zz, tz, sz) {
        super(), this.define = zz, this.operand = tz, this.testValue = sz
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(zz) {
        let tz = !1;
        const sz = parseInt(void 0 != zz[this.define] ? zz[this.define] : this.define),
          Fz = parseInt(void 0 != zz[this.testValue] ? zz[this.testValue] : this.testValue);
        if (isNaN(sz) || isNaN(Fz)) return !1;
        switch (this.operand) {
          case ">":
            tz = sz > Fz;
            break;
          case "<":
            tz = sz < Fz;
            break;
          case "<=":
            tz = sz <= Fz;
            break;
          case ">=":
            tz = sz >= Fz;
            break;
          case "==":
            tz = sz === Fz;
            break;
          case "!=":
            tz = sz !== Fz
        }
        return tz
      }
    }
    var Nz = sz(39065),
      bz = sz(39063);
    const wz = /defined\s*?\((.+?)\)/g,
      Dz = /defined\s*?\[(.+?)\]/g,
      gz = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Hz = /__decl__/,
      Bz = /light\{X\}.(\w*)/g,
      Pz = /\{X\}/g,
      rz = [],
      Yz = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function xz(zz) {
      zz.processor && zz.processor.initializeShaders && zz.processor.initializeShaders(zz.processingContext)
    }

    function mz(zz, tz, sz, Fz) {
      tz.processor?.preProcessShaderCode && (zz = tz.processor.preProcessShaderCode(zz, tz.isFragment)), cz(zz, tz, (zz => {
        tz.processCodeAfterIncludes && (zz = tz.processCodeAfterIncludes(tz.isFragment ? "fragment" : "vertex", zz, tz.defines));
        const Wz = function(zz, tz, sz) {
          let Fz = function(zz, tz) {
            if (tz.processor?.noPrecision) return zz;
            const sz = tz.shouldUseHighPrecisionShader; - 1 === zz.indexOf("precision highp float") ? zz = sz ? "precision highp float;\n" + zz : "precision mediump float;\n" + zz : sz || (zz = zz.replace("precision highp float", "precision mediump float"));
            return zz
          }(zz, tz);
          if (!tz.processor) return Fz;
          if (0 === tz.processor.shaderLanguage && -1 !== Fz.indexOf("#version 3") && (Fz = Fz.replace("#version 300 es", ""), !tz.processor.parseGLES3)) return Fz;
          const Wz = tz.defines,
            Xz = Tz(tz, sz);
          tz.processor.preProcessor && (Fz = tz.processor.preProcessor(Fz, Wz, Xz, tz.isFragment, tz.processingContext));
          const Oz = {};
          Fz = Gz(Fz, Xz, tz, Oz), tz.processor.postProcessor && (Fz = tz.processor.postProcessor(Fz, Wz, tz.isFragment, tz.processingContext, sz ? {
            drawBuffersExtensionDisabled: !sz.getCaps().drawBuffersExtension
          } : {}, Xz, Oz));
          sz?._features.needShaderCodeInlining && (Fz = sz.inlineShaderCode(Fz));
          return Fz
        }(zz, tz, Fz);
        sz(Wz, zz)
      }))
    }

    function Jz(zz, tz, sz) {
      return sz.processor && sz.processor.finalizeShaders ? sz.processor.finalizeShaders(zz, tz, sz.processingContext) : {
        vertexCode: zz,
        fragmentCode: tz
      }
    }

    function Iz(zz) {
      const tz = /defined\((.+)\)/.exec(zz);
      if (tz && tz.length) return new vz(tz[1].trim(), "!" === zz[0]);
      const sz = ["==", "!=", ">=", "<=", "<", ">"];
      let Fz = "",
        Wz = 0;
      for (Fz of sz)
        if (Wz = zz.indexOf(Fz), Wz > -1) break;
      if (-1 === Wz) return new vz(zz);
      const Xz = zz.substring(0, Wz).trim(),
        Oz = zz.substring(Wz + Fz.length).trim();
      return new uz(Xz, Fz, Oz)
    }

    function Cz(zz, tz) {
      const sz = new Oz,
        Fz = zz.substring(0, tz);
      let Wz = zz.substring(tz);
      return Wz = Wz.substring(0, (Wz.indexOf("//") + 1 || Wz.length + 1) - 1).trim(), sz.testExpression = "#ifdef" === Fz ? new vz(Wz) : "#ifndef" === Fz ? new vz(Wz, !0) : function(zz) {
        zz = zz.replace(wz, "defined[$1]");
        const tz = oz.infixToPostfix(zz),
          sz = [];
        for (const Wz of tz)
          if ("||" !== Wz && "&&" !== Wz) sz.push(Wz);
          else if (sz.length >= 2) {
          let zz = sz[sz.length - 1],
            tz = sz[sz.length - 2];
          sz.length -= 2;
          const Fz = "&&" == Wz ? new Kz : new Uz;
          "string" === typeof zz && (zz = zz.replace(Dz, "defined($1)")), "string" === typeof tz && (tz = tz.replace(Dz, "defined($1)")), Fz.leftOperand = "string" === typeof tz ? Iz(tz) : tz, Fz.rightOperand = "string" === typeof zz ? Iz(zz) : zz, sz.push(Fz)
        }
        let Fz = sz[sz.length - 1];
        return "string" === typeof Fz && (Fz = Fz.replace(Dz, "defined($1)")), "string" === typeof Fz ? Iz(Fz) : Fz
      }(Wz), sz
    }

    function ez(zz, tz, sz, Wz) {
      let Xz;
      for (; Zz(zz, sz, Wz);) {
        Xz = zz.currentLine;
        const Oz = Xz.substring(0, 5).toLowerCase();
        if ("#else" === Oz) {
          const sz = new Fz;
          return tz.children.push(sz), void Zz(zz, sz, Wz)
        }
        if ("#elif" === Oz) {
          const zz = Cz(Xz, 5);
          tz.children.push(zz), sz = zz
        }
      }
    }

    function Zz(zz, tz, sz) {
      for (; zz.canRead;) {
        zz.lineIndex++;
        const Wz = zz.currentLine;
        if (Wz.indexOf("#") >= 0) {
          const Fz = Yz.exec(Wz);
          if (Fz && Fz.length) {
            switch (Fz[0]) {
              case "#ifdef": {
                const Fz = new Xz;
                tz.children.push(Fz);
                const Oz = Cz(Wz, 6);
                Fz.children.push(Oz), ez(zz, Fz, Oz, sz);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Fz = new Xz;
                tz.children.push(Fz);
                const Oz = Cz(Wz, 7);
                Fz.children.push(Oz), ez(zz, Fz, Oz, sz);
                break
              }
              case "#if": {
                const Fz = new Xz,
                  Oz = Cz(Wz, 3);
                tz.children.push(Fz), Fz.children.push(Oz), ez(zz, Fz, Oz, sz);
                break
              }
            }
            continue
          }
        }
        const Oz = new Fz;
        if (Oz.line = Wz, tz.children.push(Oz), "#" === Wz[0] && "d" === Wz[1]) {
          const zz = Wz.replace(";", "").split(" ");
          Oz.additionalDefineKey = zz[1], 3 === zz.length && (Oz.additionalDefineValue = zz[2])
        }
      }
      return !1
    }

    function Gz(zz, tz, sz, Xz) {
      const Oz = new Fz,
        oz = new Wz;
      return oz.lineIndex = -1, oz.lines = zz.split("\n"), Zz(oz, Oz, Xz), Oz.process(tz, sz, Xz)
    }

    function Tz(zz, tz) {
      const sz = zz.defines,
        Fz = {};
      for (const Wz of sz) {
        const zz = Wz.replace("#define", "").replace(";", "").trim().split(" ");
        Fz[zz[0]] = zz.length > 1 ? zz[1] : ""
      }
      return 0 === zz.processor?.shaderLanguage && (Fz.GL_ES = "true"), Fz.__VERSION__ = zz.version, Fz[zz.platformName] = "true", (0, bz.f)(Fz, tz?.isNDCHalfZRange, tz?.ysz, tz?.useExactSrgbConversions), Fz
    }

    function cz(zz, tz, sz) {
      let Fz;
      for (rz.length = 0; null !== (Fz = gz.exec(zz));) rz.push(Fz);
      let Wz = [zz],
        Xz = !1;
      for (const oz of rz) {
        let zz = oz[1];
        if (-1 !== zz.indexOf("__decl__") && (zz = zz.replace(Hz, ""), tz.supportsUniformBuffers && (zz = zz.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), zz += "Declaration"), !tz.includesShadersStore[zz]) {
          const Fz = tz.shadersRepository + "ShadersInclude/" + zz + ".fx";
          return void jz.loadFile(Fz, (Fz => {
            tz.includesShadersStore[zz] = Fz, cz(Wz.join(""), tz, sz)
          }))
        } {
          let sz = tz.includesShadersStore[zz];
          if (oz[2]) {
            const zz = oz[3].split(",");
            for (let tz = 0; tz < zz.length; tz += 2) {
              const Fz = new RegExp(zz[tz], "g"),
                Wz = zz[tz + 1];
              sz = sz.replace(Fz, Wz)
            }
          }
          if (oz[4]) {
            const zz = oz[5];
            if (-1 !== zz.indexOf("..")) {
              const Fz = zz.split(".."),
                Wz = parseInt(Fz[0]);
              let Xz = parseInt(Fz[1]),
                Oz = sz.slice(0);
              sz = "", isNaN(Xz) && (Xz = tz.indexParameters[Fz[1]]);
              for (let zz = Wz; zz < Xz; zz++) tz.supportsUniformBuffers || (Oz = Oz.replace(Bz, ((zz, tz) => tz + "{X}"))), sz += Oz.replace(Pz, zz.toString()) + "\n"
            } else tz.supportsUniformBuffers || (sz = sz.replace(Bz, ((zz, tz) => tz + "{X}"))), sz = sz.replace(Pz, zz)
          }
          const Fz = [];
          for (const zz of Wz) {
            const tz = zz.split(oz[0]);
            for (let zz = 0; zz < tz.length - 1; zz++) Fz.push(tz[zz]), Fz.push(sz);
            Fz.push(tz[tz.length - 1])
          }
          Wz = Fz, Xz = Xz || sz.indexOf("#include<") >= 0 || sz.indexOf("#include <") >= 0
        }
      }
      rz.length = 0;
      const Oz = Wz.join("");
      Xz ? cz(Oz.toString(), tz, sz) : sz(Oz)
    }
    const jz = {
      loadFile: (zz, tz, sz, Fz, Wz, Xz) => {
        throw (0, Nz.i)("FileTools")
      }
    }
  },
  39063: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      c: () => Xz,
      f: () => oz,
      g: () => Oz,
      k: () => vz
    });
    var Fz = sz(39065);
    const Wz = {};

    function Xz(zz, tz) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (tz ? tz + "\n" : "") + zz
    }

    function Oz(zz, tz, sz, Xz, Oz, oz, vz) {
      const Uz = vz || Wz.loadFile;
      if (!Uz) throw (0, Fz.i)("FileTools");
      return Uz(zz, tz, sz, Xz, Oz, oz)
    }

    function oz(zz, tz, sz, Fz) {
      if (zz) return tz ? zz.IS_NDC_HALF_ZRANGE = "" : delete zz.IS_NDC_HALF_ZRANGE, sz ? zz.USE_REVERSE_DEPTHBUFFER = "" : delete zz.USE_REVERSE_DEPTHBUFFER, void(Fz ? zz.USE_EXACT_SRGB_CONVERSIONS = "" : delete zz.USE_EXACT_SRGB_CONVERSIONS);
      {
        let zz = "";
        return tz && (zz += "#define IS_NDC_HALF_ZRANGE"), sz && (zz && (zz += "\n"), zz += "#define USE_REVERSE_DEPTHBUFFER"), Fz && (zz && (zz += "\n"), zz += "#define USE_EXACT_SRGB_CONVERSIONS"), zz
      }
    }

    function vz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Fz = arguments.length > 3 ? arguments[3] : void 0;
      switch (zz) {
        case 3: {
          const zz = new Int8Array(tz);
          return Fz && zz.set(new Int8Array(Fz)), zz
        }
        case 0: {
          const zz = new Uint8Array(tz);
          return Fz && zz.set(new Uint8Array(Fz)), zz
        }
        case 4: {
          const zz = "number" !== typeof tz ? new Int16Array(tz) : new Int16Array(sz ? tz / 2 : tz);
          return Fz && zz.set(new Int16Array(Fz)), zz
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const zz = "number" !== typeof tz ? new Uint16Array(tz) : new Uint16Array(sz ? tz / 2 : tz);
          return Fz && zz.set(new Uint16Array(Fz)), zz
        }
        case 6: {
          const zz = "number" !== typeof tz ? new Int32Array(tz) : new Int32Array(sz ? tz / 4 : tz);
          return Fz && zz.set(new Int32Array(Fz)), zz
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const zz = "number" !== typeof tz ? new Uint32Array(tz) : new Uint32Array(sz ? tz / 4 : tz);
          return Fz && zz.set(new Uint32Array(Fz)), zz
        }
        case 1: {
          const zz = "number" !== typeof tz ? new Float32Array(tz) : new Float32Array(sz ? tz / 4 : tz);
          return Fz && zz.set(new Float32Array(Fz)), zz
        }
      }
      const Wz = new Uint8Array(tz);
      return Fz && Wz.set(new Uint8Array(Fz)), Wz
    }
  },
  39065: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz,
      f: () => Kz,
      g: () => vz,
      i: () => Wz
    });
    const Fz = {};

    function Wz(zz) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Fz[zz]) return Fz[zz] = !0, `${zz} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Xz = {};
    let Oz = !1,
      oz = 0;

    function vz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Fz = function() {
        if ((sz || Oz) && 0 === oz) {
          const sz = `${zz}.${tz}`;
          Xz[sz] || (Xz[sz] = !0, console.warn(`[Babylon.js] ${sz}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Fz.__isSideEffectStub = !0, Fz
    }

    function Uz(zz) {
      return !!zz && !zz.__isSideEffectStub
    }

    function Kz(zz, tz) {
      return {
        get() {},
        set(zz) {
          Object.defineProperty(this, tz, {
            value: zz,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  39051: (zz, tz, sz) => {
    function Fz() {
      return "undefined" !== typeof window
    }

    function Wz() {
      return "undefined" !== typeof navigator
    }

    function Xz() {
      return "undefined" !== typeof document
    }

    function Oz(zz) {
      let tz = "",
        sz = zz.firstChild;
      for (; sz;) 3 === sz.nodeType && (tz += sz.textContent), sz = sz.nextSibling;
      return tz
    }
    sz.d(tz, {
      e: () => Oz,
      g: () => Xz,
      i: () => Wz,
      j: () => Fz
    })
  },
  39215: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      g: () => Wz,
      i: () => Xz
    });
    class Fz extends Error {}
    Fz._setPrototypeOf = Object.setPrototypeOf || ((zz, tz) => (zz.__proto__ = tz, zz));
    const Wz = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Xz extends Fz {
      constructor(zz, tz, sz) {
        super(zz), this.errorCode = tz, this.innerError = sz, this.name = "RuntimeError", Fz._setPrototypeOf(this, Xz.prototype)
      }
    }
  },
  39205: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Tz,
      c: () => Pz,
      g: () => Cz,
      i: () => Zz,
      l: () => Jz,
      p: () => xz,
      q: () => mz,
      t: () => Mz,
      u: () => Iz,
      y: () => rz
    });
    var Fz = sz(39213),
      Wz = sz(39051),
      Xz = sz(36505);
    class Oz {}
    Oz.FilesToLoad = {};
    var oz = sz(39215),
      vz = sz(39222),
      Uz = sz(36502),
      Kz = sz(39063),
      uz = sz(39071),
      Nz = sz(38097),
      bz = sz(39074),
      wz = sz(39231);
    const Dz = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class gz extends oz.i {
      constructor(zz, tz) {
        super(zz, oz.g.LoadFileError), this.name = "LoadFileError", oz.e._setPrototypeOf(this, gz.prototype), tz instanceof Fz.d ? this.request = tz : this.file = tz
      }
    }
    class Hz extends oz.i {
      constructor(zz, tz) {
        super(zz, oz.g.RequestFileError), this.request = tz, this.name = "RequestFileError", oz.e._setPrototypeOf(this, Hz.prototype)
      }
    }
    class Bz extends oz.i {
      constructor(zz, tz) {
        super(zz, oz.g.ReadFileError), this.file = tz, this.name = "ReadFileError", oz.e._setPrototypeOf(this, Bz.prototype)
      }
    }
    const Pz = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (sz, Fz, Wz) => 0 !== Fz.status || Wz >= zz || -1 !== sz.indexOf("file:") ? -1 : Math.pow(2, Wz) * tz
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: zz => zz,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: zz => zz,
        CleanUrl: zz => zz = zz.replace(/#/gm, "%23")
      },
      rz = (zz, tz) => {
        if ((!zz || 0 !== zz.indexOf("data:")) && Pz.CorsBehavior)
          if ("string" === typeof Pz.CorsBehavior || Pz.CorsBehavior instanceof String) tz.crossOrigin = Pz.CorsBehavior;
          else {
            const sz = Pz.CorsBehavior(zz);
            sz && (tz.crossOrigin = sz)
          }
      },
      Yz = {
        getRequiredSize: null
      },
      xz = function(zz, tz, sz, Wz) {
        let Xz, oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Kz = arguments.length > 5 ? arguments[5] : void 0,
          uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Uz.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !uz?._features.forceBitmapOverHTMLImageElement) return sz("LoadImage is only supported in web or BabylonNative environments."), null;
        if (uz?._features.forceBitmapOverHTMLImageElement && "string" !== typeof zz && "undefined" !== typeof Blob) {
          let Fz;
          if (zz instanceof Blob) Fz = zz;
          else {
            const tz = zz instanceof ArrayBuffer ? zz : (0, wz.n)(zz);
            Fz = new Blob([tz], {
              type: oz
            })
          }
          return uz.createImageBitmap(Fz, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Kz
          }).then(tz).catch((tz => {
            sz && sz("Error while trying to load image: " + zz, tz)
          })), null
        }
        let Nz = !1;
        if (zz instanceof ArrayBuffer || ArrayBuffer.isView(zz))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let tz;
            tz = zz instanceof ArrayBuffer ? zz : (0, wz.n)(zz), Xz = URL.createObjectURL(new Blob([tz], {
              type: oz
            })), Nz = !0
          } else Xz = `data:${oz};base64,` + (0, vz.g)(zz);
        else zz instanceof Blob ? (Xz = URL.createObjectURL(zz), Nz = !0) : (Xz = Pz.CleanUrl(zz), Xz = Pz.PreprocessUrl(Xz));
        const bz = tz => {
          if (sz) {
            const Fz = Xz || zz.toString();
            sz(`Error while trying to load image: ${0===Fz.indexOf("http")||Fz.length<=128?Fz:Fz.slice(0,128)+"..."}`, tz)
          }
        };
        if (uz?._features.forceBitmapOverHTMLImageElement) return Jz(Xz, (Fz => {
          uz.createImageBitmap(new Blob([Fz], {
            type: oz
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Kz
          }).then((zz => {
            tz(zz), Nz && URL.revokeObjectURL(Xz)
          })).catch((tz => {
            sz && sz("Error while trying to load image: " + zz, tz)
          }))
        }), void 0, Wz || void 0, !0, ((zz, tz) => {
          bz(tz)
        })), null;
        const Dz = new Image;
        if (Yz.getRequiredSize) {
          const tz = Yz.getRequiredSize(zz);
          tz.width && (Dz.width = tz.width), tz.height && (Dz.height = tz.height)
        }
        rz(Xz, Dz);
        const gz = [],
          Hz = () => {
            for (const zz of gz) zz.target.removeEventListener(zz.name, zz.handler);
            gz.length = 0
          };
        gz.push({
          target: Dz,
          name: "load",
          handler: () => {
            Hz(), tz(Dz), Nz && Dz.src && URL.revokeObjectURL(Dz.src)
          }
        }), gz.push({
          target: Dz,
          name: "error",
          handler: zz => {
            Hz(), bz(zz), Nz && Dz.src && URL.revokeObjectURL(Dz.src)
          }
        }), gz.push({
          target: document,
          name: "securitypolicyviolation",
          handler: zz => {
            if (zz.blockedURI !== Dz.src || "Iw" === zz.disposition) return;
            Hz();
            const tz = new Error(`CSP violation of policy ${zz.effectiveDirective} ${zz.blockedURI}. Current policy is ${zz.originalPolicy}`);
            Uz.c.UseFallbackTexture = !1, bz(tz), Nz && Dz.src && URL.revokeObjectURL(Dz.src), Dz.src = ""
          }
        }), (() => {
          for (const zz of gz) zz.target.addEventListener(zz.name, zz.handler)
        })();
        const Bz = "blob:" === Xz.substring(0, 5),
          xz = "data:" === Xz.substring(0, 5),
          mz = () => {
            Bz || xz || !Fz.d.IsCustomRequestAvailable ? Dz.src = Xz : Jz(Xz, ((zz, tz, sz) => {
              const Fz = new Blob([zz], {
                  type: !oz && sz ? sz : oz
                }),
                Wz = URL.createObjectURL(Fz);
              Nz = !0, Dz.src = Wz
            }), void 0, Wz || void 0, !0, ((zz, tz) => {
              bz(tz)
            }))
          },
          Iz = () => {
            Wz && Wz.loadImage(Xz, Dz)
          };
        if (!Bz && !xz && Wz && Wz.enableTexturesOffline) Wz.open(Iz, mz);
        else {
          if (-1 !== Xz.indexOf("file:")) {
            const zz = decodeURIComponent(Xz.substring(5).toLowerCase());
            if (Oz.FilesToLoad[zz] && "undefined" !== typeof URL) {
              try {
                let tz;
                try {
                  tz = URL.createObjectURL(Oz.FilesToLoad[zz])
                } catch (Cz) {
                  tz = URL.createObjectURL(Oz.FilesToLoad[zz])
                }
                Dz.src = tz, Nz = !0
              } catch (ez) {
                Dz.src = ""
              }
              return Dz
            }
          }
          mz()
        }
        return Dz
      },
      mz = (zz, tz, sz, Fz, Wz) => {
        const Oz = new FileReader,
          oz = {
            onCompleteObservable: new Xz.c,
            abort: () => Oz.abort()
          };
        return Oz.onloadend = () => oz.onCompleteObservable.notifyObservers(oz), Wz && (Oz.onerror = () => {
          Wz(new Bz(`Unable to read ${zz.name}`, zz))
        }), Oz.onload = zz => {
          tz(zz.target.result)
        }, sz && (Oz.onprogress = sz), Fz ? Oz.readAsArrayBuffer(zz) : Oz.readAsText(zz), oz
      },
      Jz = (zz, tz, sz, Fz, Wz, vz, Uz) => {
        if (zz.name) return mz(zz, tz, sz, Wz, vz ? zz => {
          vz(void 0, zz)
        } : void 0);
        const Kz = zz;
        if (-1 !== Kz.indexOf("file:")) {
          let zz = decodeURIComponent(Kz.substring(5).toLowerCase());
          0 === zz.indexOf("./") && (zz = zz.substring(2));
          const Fz = Oz.FilesToLoad[zz];
          if (Fz) return mz(Fz, tz, sz, Wz, vz ? zz => vz(void 0, new gz(zz.message, zz.file)) : void 0)
        }
        const {
          match: uz,
          type: wz
        } = Gz(Kz);
        if (uz) {
          const zz = {
            onCompleteObservable: new Xz.c,
            abort: () => () => {}
          };
          try {
            const zz = Wz ? Tz(Kz) : cz(Kz);
            tz(zz, void 0, wz)
          } catch (oz) {
            vz ? vz(void 0, oz) : Nz.e.Error(oz.message || "Failed to parse the Data URL")
          }
          return bz.b.SetImmediate((() => {
            zz.onCompleteObservable.notifyObservers(zz)
          })), zz
        }
        return Iz(Kz, ((zz, sz) => {
          tz(zz, sz?.responseURL, sz?.getResponseHeader("content-type"))
        }), sz, Fz, Wz, vz ? zz => {
          vz(zz.request, new gz(zz.message, zz.request))
        } : void 0, Uz)
      },
      Iz = (zz, tz, sz, Oz, oz, vz, Kz) => {
        null !== Oz && (Oz ?? (Oz = Uz.c.LastCreatedScene?.offlineProvider)), zz = Pz.CleanUrl(zz), zz = Pz.PreprocessUrl(zz);
        const uz = Pz.BaseUrl + zz;
        let bz = !1;
        const wz = {
            onCompleteObservable: new Xz.c,
            abort: () => bz = !0
          },
          Dz = () => {
            let zz, Xz = new Fz.d,
              Oz = null;
            const Uz = () => {
              Xz && (sz && Xz.removeEventListener("progress", sz), zz && Xz.removeEventListener("readystatechange", zz), Xz.removeEventListener("loadend", Dz))
            };
            let Dz = () => {
              Uz(), wz.onCompleteObservable.notifyObservers(wz), wz.onCompleteObservable.clear(), sz = void 0, zz = null, Dz = null, vz = void 0, Kz = void 0, tz = void 0
            };
            wz.abort = () => {
              bz = !0, Dz && Dz(), Xz && Xz.readyState !== (XMLHttpRequest.DONE || 4) && Xz.abort(), null !== Oz && (clearTimeout(Oz), Oz = null), Xz = null
            };
            const gz = zz => {
                const tz = zz.message || "Unknown error";
                vz && Xz ? vz(new Hz(tz, Xz)) : Nz.e.Error(tz)
              },
              Bz = Nz => {
                if (Xz) {
                  if (Xz.open("GET", uz), Kz) try {
                    Kz(Xz)
                  } catch (wz) {
                    return void gz(wz)
                  }
                  oz && (Xz.responseType = "arraybuffer"), sz && Xz.addEventListener("progress", sz), Dz && Xz.addEventListener("loadend", Dz), zz = () => {
                    if (!bz && Xz && Xz.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (zz && Xz.removeEventListener("readystatechange", zz), Xz.status >= 200 && Xz.status < 300 || 0 === Xz.status && (!(0, Wz.j)() || ez())) {
                        const zz = oz ? Xz.response : Xz.responseText;
                        if (null !== zz) {
                          try {
                            tz && tz(zz, Xz)
                          } catch (wz) {
                            gz(wz)
                          }
                          return
                        }
                      }
                      const sz = Pz.DefaultRetryStrategy;
                      if (sz) {
                        const zz = sz(uz, Xz, Nz);
                        if (-1 !== zz) return Uz(), Xz = new Fz.d, void(Oz = setTimeout((() => Bz(Nz + 1)), zz))
                      }
                      const Kz = new Hz("Error status: " + Xz.status + " " + Xz.statusText + " - Unable to load " + uz, Xz);
                      vz && vz(Kz)
                    }
                  }, Xz.addEventListener("readystatechange", zz), Xz.send()
                }
              };
            Bz(0)
          };
        if (Oz && Oz.enableSceneOffline && !zz.startsWith("blob:")) {
          const Fz = zz => {
              zz && zz.status > 400 ? vz && vz(zz) : Dz()
            },
            Wz = () => {
              Oz && Oz.loadFile(Pz.BaseUrl + zz, (zz => {
                !bz && tz && tz(zz), wz.onCompleteObservable.notifyObservers(wz)
              }), sz ? zz => {
                !bz && sz && sz(zz)
              } : void 0, Fz, oz)
            };
          Oz.open(Wz, Fz)
        } else Dz();
        return wz
      },
      Cz = zz => {
        const {
          match: tz,
          type: sz
        } = Gz(zz);
        if (tz) return sz || void 0;
        const Fz = zz.lastIndexOf(".");
        switch (zz.substring(Fz + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "MJ":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      ez = () => "undefined" !== typeof location && "file:" === location.protocol,
      Zz = zz => Dz.test(zz),
      Gz = zz => {
        const tz = Dz.exec(zz);
        if (null === tz || 0 === tz.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: tz[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Tz(zz) {
      return (0, vz.c)(zz.split(",")[1])
    }
    const cz = zz => (0, vz.e)(zz.split(",")[1]);
    let jz;
    const Az = (zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) => {
      jz = {
        DecodeBase64UrlToBinary: zz,
        DecodeBase64UrlToString: tz,
        DefaultRetryStrategy: sz.DefaultRetryStrategy,
        BaseUrl: sz.BaseUrl,
        CorsBehavior: sz.CorsBehavior,
        PreprocessUrl: sz.PreprocessUrl,
        IsBase64DataUrl: Fz,
        IsFileURL: Wz,
        LoadFile: Xz,
        LoadImage: Oz,
        ReadFile: oz,
        RequestFile: vz,
        SetCorsBehavior: Uz
      }, Object.defineProperty(jz, "DefaultRetryStrategy", {
        get: function() {
          return sz.DefaultRetryStrategy
        },
        set: function(zz) {
          sz.DefaultRetryStrategy = zz
        }
      }), Object.defineProperty(jz, "BaseUrl", {
        get: function() {
          return sz.BaseUrl
        },
        set: function(zz) {
          sz.BaseUrl = zz
        }
      }), Object.defineProperty(jz, "PreprocessUrl", {
        get: function() {
          return sz.PreprocessUrl
        },
        set: function(zz) {
          sz.PreprocessUrl = zz
        }
      }), Object.defineProperty(jz, "CorsBehavior", {
        get: function() {
          return sz.CorsBehavior
        },
        set: function(zz) {
          sz.CorsBehavior = zz
        }
      })
    };
    let yz = !1;

    function Mz() {
      yz || (yz = !0, Az(Tz, cz, Pz, Zz, ez, Jz, xz, mz, Iz, rz), Kz.b.loadFile = Jz, Kz.b.loadImage = xz, uz.o.loadFile = Jz)
    }
  },
  39234: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      f: () => Xz,
      g: () => Oz
    });
    let Fz = null;

    function Wz() {
      if (Fz) return Fz;
      const zz = new ArrayBuffer(4),
        tz = new Float32Array(zz),
        sz = new Uint32Array(zz),
        Wz = new Uint32Array(512),
        Xz = new Uint32Array(512);
      for (let Fz = 0; Fz < 256; ++Fz) {
        const zz = Fz - 127;
        zz < -24 ? (Wz[Fz] = 0, Wz[256 | Fz] = 32768, Xz[Fz] = 24, Xz[256 | Fz] = 24) : zz < -14 ? (Wz[Fz] = 1024 >> -zz - 14, Wz[256 | Fz] = 1024 >> -zz - 14 | 32768, Xz[Fz] = -zz - 1, Xz[256 | Fz] = -zz - 1) : zz <= 15 ? (Wz[Fz] = zz + 15 << 10, Wz[256 | Fz] = zz + 15 << 10 | 32768, Xz[Fz] = 13, Xz[256 | Fz] = 13) : zz < 128 ? (Wz[Fz] = 31744, Wz[256 | Fz] = 64512, Xz[Fz] = 24, Xz[256 | Fz] = 24) : (Wz[Fz] = 31744, Wz[256 | Fz] = 64512, Xz[Fz] = 13, Xz[256 | Fz] = 13)
      }
      const Oz = new Uint32Array(2048),
        oz = new Uint32Array(64),
        vz = new Uint32Array(64);
      for (let Fz = 1; Fz < 1024; ++Fz) {
        let zz = Fz << 13,
          tz = 0;
        for (; 0 === (8388608 & zz);) zz <<= 1, tz -= 8388608;
        zz &= -8388609, tz += 947912704, Oz[Fz] = zz | tz
      }
      for (let Fz = 1024; Fz < 2048; ++Fz) Oz[Fz] = 939524096 + (Fz - 1024 << 13);
      for (let Fz = 1; Fz < 31; ++Fz) oz[Fz] = Fz << 23;
      oz[31] = 1199570944, oz[32] = 2147483648;
      for (let Fz = 33; Fz < 63; ++Fz) oz[Fz] = 2147483648 + (Fz - 32 << 23);
      oz[63] = 3347054592;
      for (let Fz = 1; Fz < 64; ++Fz) 32 !== Fz && (vz[Fz] = 1024);
      return Fz = {
        floatView: tz,
        uint32View: sz,
        baseTable: Wz,
        shiftTable: Xz,
        mantissaTable: Oz,
        exponentTable: oz,
        offsetTable: vz
      }, Fz
    }
    const Xz = 65504;

    function Oz(zz) {
      const tz = Wz();
      tz.floatView[0] = zz;
      const sz = tz.uint32View[0],
        Fz = sz >> 23 & 511;
      return tz.baseTable[Fz] + ((8388607 & sz) >> tz.shiftTable[Fz])
    }

    function oz(zz) {
      const tz = Wz();
      return tz.uint32View[0] = tz.mantissaTable[tz.offsetTable[zz >> 10] + (1023 & zz)] + tz.exponentTable[zz >> 10], tz.floatView[0]
    }
  },
  39222: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Wz,
      g: () => Fz
    });
    const Fz = zz => {
        const tz = ArrayBuffer.isView(zz) ? new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength) : new Uint8Array(zz);
        return "function" === typeof tz.toBase64 ? tz.toBase64() : function(zz) {
          const tz = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let sz, Fz, Wz, Xz, Oz, oz, vz, Uz = "",
            Kz = 0;
          for (; Kz < zz.length;) sz = zz[Kz++], Fz = Kz < zz.length ? zz[Kz++] : Number.NaN, Wz = Kz < zz.length ? zz[Kz++] : Number.NaN, Xz = sz >> 2, Oz = (3 & sz) << 4 | Fz >> 4, oz = (15 & Fz) << 2 | Wz >> 6, vz = 63 & Wz, isNaN(Fz) ? oz = vz = 64 : isNaN(Wz) && (vz = 64), Uz += tz.charAt(Xz) + tz.charAt(Oz) + tz.charAt(oz) + tz.charAt(vz);
          return Uz
        }(tz)
      },
      Wz = zz => atob(zz),
      Xz = zz => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(zz).buffer : function(zz) {
        const tz = Wz(zz),
          sz = tz.length,
          Fz = new Uint8Array(new ArrayBuffer(sz));
        for (let Wz = 0; Wz < sz; Wz++) Fz[Wz] = tz.charCodeAt(Wz);
        return Fz.buffer
      }(zz)
  },
  39074: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      e: () => Oz
    });
    let Fz = [];
    class Wz {
      static SetImmediate(zz) {
        0 === Fz.length && setTimeout((() => {
          const zz = Fz;
          Fz = [];
          for (const tz of zz) tz()
        }), 1), Fz.push(zz)
      }
    }

    function Xz(zz, tz, sz) {
      try {
        if (zz()) return tz(), !0
      } catch (Fz) {
        return sz?.(Fz), !0
      }
      return !1
    }
    const Oz = function(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Oz = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Xz(zz, tz, sz)) return null;
      const oz = setInterval((() => {
        Xz(zz, tz, sz) ? clearInterval(oz) : (Wz -= Fz, Wz < 0 && (clearInterval(oz), sz?.(new Error("Operation timed out after maximum retries. " + (Oz || "")), !0)))
      }), Fz);
      return () => clearInterval(oz)
    }
  },
  39213: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Fz.CustomRequestHeaders).length > 0 || Fz.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(zz) {
        return zz = (zz = zz.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(zz) {
        return Fz.SkipRequestModificationForBabylonCDN && (zz.includes("preview.babylonjs.com") || zz.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(zz) {
        const tz = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Fz._ShouldSkipRequestModifications(zz)) return {
          url: zz,
          headers: tz
        };
        for (const Wz in Fz.CustomRequestHeaders) {
          const zz = Fz.CustomRequestHeaders[Wz];
          zz && (tz[Wz] = zz)
        }
        const sz = {
          setRequestHeader: (zz, sz) => {
            tz[zz] = sz
          }
        };
        for (const Wz of Fz.CustomRequestModifiers) {
          if (Fz._ShouldSkipRequestModifications(zz)) break;
          const tz = Wz(sz, zz);
          "string" === typeof tz && (zz = tz)
        }
        return {
          url: zz,
          headers: tz
        }
      }
      static async FetchAsync(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sz = tz.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Wz,
            headers: Xz
          } = Fz._CollectCustomizations(Fz._CleanUrl(zz), tz.headers ?? {});
          return await fetch(Wz, {
            method: sz,
            headers: Xz,
            body: tz.body ?? void 0
          })
        }
        return await new Promise(((Wz, Xz) => {
          const Oz = new Fz;
          Oz.responseType = "arraybuffer", Oz.addEventListener("readystatechange", (() => {
            if (4 === Oz.readyState)
              if (Oz.status >= 200 && Oz.status < 300) {
                const zz = "undefined" !== typeof Headers ? new Headers : void 0,
                  tz = Oz.getResponseHeader("Content-Type");
                tz && zz && zz.set("Content-Type", tz), "undefined" !== typeof Response ? Wz(new Response(Oz.response, {
                  status: Oz.status,
                  statusText: Oz.statusText,
                  headers: zz
                })) : Wz({
                  ok: !0,
                  status: Oz.status,
                  statusText: Oz.statusText,
                  headers: {
                    get: zz => Oz.getResponseHeader(zz)
                  },
                  arrayBuffer: async () => await Promise.resolve(Oz.response)
                })
              } else Xz(new Error(`HTTP ${Oz.status} loading '${Oz.requestURL}': ${Oz.statusText}`))
          })), Oz.open(sz, zz, tz.headers), Oz.send(tz.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(zz) {
        this._xhr.onprogress = zz
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(zz) {
        this._xhr.responseType = zz
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(zz) {
        this._xhr.timeout = zz
      }
      addEventListener(zz, tz, sz) {
        this._xhr.addEventListener(zz, tz, sz)
      }
      removeEventListener(zz, tz, sz) {
        this._xhr.removeEventListener(zz, tz, sz)
      }
      abort() {
        this._xhr.abort()
      }
      send(zz) {
        this._xhr.send(zz)
      }
      open(zz, tz, sz) {
        const {
          url: Wz,
          headers: Xz
        } = Fz._CollectCustomizations(tz, sz);
        this._requestURL = Fz._CleanUrl(Wz), this._xhr.open(zz, this._requestURL, !0);
        for (const Fz in Xz) this._xhr.setRequestHeader(Fz, Xz[Fz])
      }
      setRequestHeader(zz, tz) {
        this._xhr.setRequestHeader(zz, tz)
      }
      getResponseHeader(zz) {
        return this._xhr.getResponseHeader(zz)
      }
    }
    Fz.CustomRequestHeaders = {}, Fz.CustomRequestModifiers = new Array, Fz.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);