export const id = 244;
export const ids = [244];
export const modules = {
  39226: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => dz,
      h: () => pz,
      k: () => tz,
      o: () => Fz,
      p: () => Hz,
      t: () => Mz,
      u: () => Oz
    });
    var Ez = bz(38060),
      nz = bz(39231);

    function iz(zz, uz, bz, Ez) {
      switch (uz) {
        case 5120: {
          let uz = zz.getInt8(bz);
          return Ez && (uz = Math.max(uz / 127, -1)), uz
        }
        case 5121: {
          let uz = zz.getUint8(bz);
          return Ez && (uz /= 255), uz
        }
        case 5122: {
          let uz = zz.getInt16(bz, !0);
          return Ez && (uz = Math.max(uz / 32767, -1)), uz
        }
        case 5123: {
          let uz = zz.getUint16(bz, !0);
          return Ez && (uz /= 65535), uz
        }
        case 5131:
          return (0, nz.e)(zz.getUint16(bz, !0));
        case 5124:
          return zz.getInt32(bz, !0);
        case 5125:
          return zz.getUint32(bz, !0);
        case 5126:
          return zz.getFloat32(bz, !0);
        default:
          throw new Error(`Invalid component type ${uz}`)
      }
    }

    function lz(zz, uz, bz, Ez, iz) {
      switch (uz) {
        case 5120:
          Ez && (iz = Math.round(127 * iz)), zz.setInt8(bz, iz);
          break;
        case 5121:
          Ez && (iz = Math.round(255 * iz)), zz.setUint8(bz, iz);
          break;
        case 5122:
          Ez && (iz = Math.round(32767 * iz)), zz.setInt16(bz, iz, !0);
          break;
        case 5123:
          Ez && (iz = Math.round(65535 * iz)), zz.setUint16(bz, iz, !0);
          break;
        case 5131:
          zz.setUint16(bz, (0, nz.i)(iz), !0);
          break;
        case 5124:
          zz.setInt32(bz, iz, !0);
          break;
        case 5125:
          zz.setUint32(bz, iz, !0);
          break;
        case 5126:
          zz.setFloat32(bz, iz, !0);
          break;
        default:
          throw new Error(`Invalid component type ${uz}`)
      }
    }

    function Mz(zz) {
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

    function tz(zz, uz, bz, Ez, nz, tz, Hz, Oz) {
      const pz = new Array(Ez),
        dz = new Array(Ez);
      if (zz instanceof Array) {
        let nz = uz / 4;
        const iz = bz / 4;
        for (let uz = 0; uz < tz; uz += Ez) {
          for (let uz = 0; uz < Ez; uz++) pz[uz] = dz[uz] = zz[nz + uz];
          Oz(dz, uz);
          for (let uz = 0; uz < Ez; uz++) pz[uz] !== dz[uz] && (zz[nz + uz] = dz[uz]);
          nz += iz
        }
      } else {
        const Fz = ArrayBuffer.isView(zz) ? new DataView(zz.buffer, zz.byteOffset, zz.byteLength) : new DataView(zz),
          Zz = Mz(nz);
        for (let zz = 0; zz < tz; zz += Ez) {
          for (let zz = 0, bz = uz; zz < Ez; zz++, bz += Zz) pz[zz] = dz[zz] = iz(Fz, nz, bz, Hz);
          Oz(dz, zz);
          for (let zz = 0, bz = uz; zz < Ez; zz++, bz += Zz) pz[zz] !== dz[zz] && lz(Fz, nz, bz, Hz, dz[zz]);
          uz += bz
        }
      }
    }

    function Hz(zz, uz, bz, nz, iz, lz, Hz, Oz) {
      const pz = uz * Mz(bz),
        dz = Hz * uz;
      if (5126 !== bz || iz !== pz) {
        const Ez = new Float32Array(dz);
        return tz(zz, nz, iz, uz, bz, dz, lz, ((zz, bz) => {
          for (let nz = 0; nz < uz; nz++) Ez[bz + nz] = zz[nz]
        })), Ez
      }
      if (!(zz instanceof Array || zz instanceof Float32Array) || 0 !== nz || zz.length !== dz) {
        if (zz instanceof Array) {
          const uz = nz / 4;
          return zz.slice(uz, uz + dz)
        }
        if (ArrayBuffer.isView(zz)) {
          const uz = zz.byteOffset + nz;
          return 0 !== (3 & uz) && (Ez.e.Warn("Float array must be aligned to 4-bytes border"), Oz = !0), Oz ? new Float32Array(zz.buffer.slice(uz, uz + dz * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(zz.buffer, uz, dz)
        }
        return new Float32Array(zz, nz, dz)
      }
      return Oz ? zz.slice() : zz
    }

    function Oz(zz, uz, bz, nz, iz, lz, Hz) {
      const Oz = Mz(bz),
        pz = function(zz) {
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
        }(bz),
        dz = lz * uz;
      if (Array.isArray(zz)) {
        if (0 !== (3 & nz) || 0 !== (3 & iz)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Ez = nz / 4,
          Mz = iz / 4;
        if (Ez + (lz - 1) * Mz + uz > zz.length) throw new Error("Last accessed index is out of bounds.");
        if (Mz < uz) throw new Error("Data stride cannot be smaller than the component size.");
        if (Mz !== uz) {
          const Ez = new pz(dz);
          return tz(zz, nz, iz, uz, bz, dz, !1, ((zz, bz) => {
            for (let nz = 0; nz < uz; nz++) Ez[bz + nz] = zz[nz]
          })), Ez
        }
        return new pz(zz.slice(Ez, Ez + dz))
      }
      let Fz, Zz = nz;
      ArrayBuffer.isView(zz) ? (Fz = zz.buffer, Zz += zz.byteOffset) : Fz = zz;
      if (Zz + (lz - 1) * iz + uz * Oz > Fz.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Rz = uz * Oz;
      if (iz < Rz) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (iz !== Rz) {
        const zz = new pz(dz),
          bz = new Uint8Array(Fz, Zz),
          Ez = new Uint8Array(zz.buffer),
          nz = uz * Oz;
        for (let uz = 0, Mz = 0, tz = 0; uz < lz; uz++, Mz += iz, tz += nz) Ez.set(bz.subarray(Mz, Mz + nz), tz);
        return zz
      }
      return 1 !== Oz && 0 !== (Zz & Oz - 1) && (Ez.e.Warn("Array must be aligned to border of element size. Data will be copied."), Hz = !0), Hz ? new pz(Fz.slice(Zz, Zz + dz * Oz)) : new pz(Fz, Zz, dz)
    }

    function pz(zz, uz, bz, nz, iz, lz, Hz, Oz) {
      const pz = uz * Mz(bz),
        dz = Hz * uz;
      if (Oz.length !== dz) throw new Error("Output length is not valid");
      if (5126 === bz && iz === pz)
        if (zz instanceof Array) {
          const uz = nz / 4;
          Oz.set(zz, uz)
        } else if (ArrayBuffer.isView(zz)) {
        const uz = zz.byteOffset + nz;
        if (0 !== (3 & uz)) return Ez.e.Warn("Float array must be aligned to 4-bytes border"), void Oz.set(new Float32Array(zz.buffer.slice(uz, uz + dz * Float32Array.BYTES_PER_ELEMENT)));
        const bz = new Float32Array(zz.buffer, uz, dz);
        Oz.set(bz)
      } else {
        const uz = new Float32Array(zz, nz, dz);
        Oz.set(uz)
      } else tz(zz, nz, iz, uz, bz, dz, lz, ((zz, bz) => {
        for (let Ez = 0; Ez < uz; Ez++) Oz[bz + Ez] = zz[Ez]
      }))
    }

    function dz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(zz)) {
        for (let nz = 0; nz < uz; nz++)
          if (zz[bz + nz] - Ez > 65535) return !0;
        return !1
      }
      return 4 === zz.BYTES_PER_ELEMENT
    }

    function Fz(zz) {
      const uz = zz.buffer;
      if (uz instanceof ArrayBuffer) return zz;
      const bz = new ArrayBuffer(zz.byteLength);
      return new Uint8Array(bz).set(new Uint8Array(uz, zz.byteOffset, zz.byteLength)), bz
    }
  },
  39064: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => vz,
      f: () => oz,
      h: () => Nz,
      g: () => Gz,
      i: () => az
    });
    class Ez {
      constructor() {
        this.children = []
      }
      isValid(zz) {
        return !0
      }
      process(zz, uz, bz) {
        let Ez = "";
        if (this.line) {
          let bz = this.line;
          const nz = uz.processor;
          if (nz) {
            nz.lineProcessor && (bz = nz.lineProcessor(bz, uz.isFragment, uz.processingContext));
            const Ez = uz.processor?.attributeKeywordName ?? "attribute",
              iz = uz.isFragment && uz.processor?.varyingFragmentKeywordName ? uz.processor?.varyingFragmentKeywordName : !uz.isFragment && uz.processor?.varyingVertexKeywordName ? uz.processor?.varyingVertexKeywordName : "varying";
            if (!uz.isFragment && nz.attributeProcessor && this.line.startsWith(Ez)) bz = nz.attributeProcessor(this.line, zz, uz.processingContext);
            else if (nz.varyingProcessor && (nz.varyingCheck?.(this.line, uz.isFragment) || !nz.varyingCheck && this.line.startsWith(iz))) bz = nz.varyingProcessor(this.line, uz.isFragment, zz, uz.processingContext);
            else if (nz.uniformProcessor && nz.uniformRegexp && nz.uniformRegexp.test(this.line)) uz.lookForClosingBracketForUniformBuffer || (bz = nz.uniformProcessor(this.line, uz.isFragment, zz, uz.processingContext));
            else if (nz.uniformBufferProcessor && nz.uniformBufferRegexp && nz.uniformBufferRegexp.test(this.line)) uz.lookForClosingBracketForUniformBuffer || (bz = nz.uniformBufferProcessor(this.line, uz.isFragment, uz.processingContext), uz.lookForClosingBracketForUniformBuffer = !0);
            else if (nz.textureProcessor && nz.textureRegexp && nz.textureRegexp.test(this.line)) bz = nz.textureProcessor(this.line, uz.isFragment, zz, uz.processingContext);
            else if ((nz.uniformProcessor || nz.uniformBufferProcessor) && this.line.startsWith("uniform") && !uz.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? nz.uniformProcessor && (bz = nz.uniformProcessor(this.line, uz.isFragment, zz, uz.processingContext)) : nz.uniformBufferProcessor && (bz = nz.uniformBufferProcessor(this.line, uz.isFragment, uz.processingContext), uz.lookForClosingBracketForUniformBuffer = !0)
            }
            uz.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (uz.lookForClosingBracketForUniformBuffer = !1, nz.endOfUniformBufferProcessor && (bz = nz.endOfUniformBufferProcessor(this.line, uz.isFragment, uz.processingContext)))
          }
          Ez += bz + "\n"
        }
        for (const nz of this.children) Ez += nz.process(zz, uz, bz);
        return this.additionalDefineKey && (zz[this.additionalDefineKey] = this.additionalDefineValue || "true", bz[this.additionalDefineKey] = zz[this.additionalDefineKey]), Ez
      }
    }
    class nz {
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
        for (const uz of zz) {
          if (!uz || "\r" === uz) continue;
          if ("#" === uz[0]) {
            this._lines.push(uz);
            continue
          }
          const zz = uz.trim();
          if (!zz) continue;
          if (zz.startsWith("//")) {
            this._lines.push(uz);
            continue
          }
          const bz = zz.indexOf(";");
          if (-1 === bz) this._lines.push(zz);
          else if (bz === zz.length - 1) zz.length > 1 && this._lines.push(zz);
          else {
            const zz = uz.split(";");
            for (let uz = 0; uz < zz.length; uz++) {
              let bz = zz[uz];
              bz && (bz = bz.trim(), bz && this._lines.push(bz + (uz !== zz.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class iz extends Ez {
      process(zz, uz, bz) {
        for (let Ez = 0; Ez < this.children.length; Ez++) {
          const nz = this.children[Ez];
          if (nz.isValid(zz)) return nz.process(zz, uz, bz)
        }
        return ""
      }
    }
    class lz extends Ez {
      isValid(zz) {
        return this.testExpression.isTrue(zz)
      }
    }
    class Mz {
      isTrue(zz) {
        return !0
      }
      static postfixToInfix(zz) {
        const uz = [];
        for (const bz of zz)
          if (void 0 === Mz._OperatorPriority[bz]) uz.push(bz);
          else {
            const zz = uz[uz.length - 1],
              Ez = uz[uz.length - 2];
            uz.length -= 2, uz.push(`(${Ez}${bz}${zz})`)
          } return uz[uz.length - 1]
      }
      static infixToPostfix(zz) {
        const uz = Mz._InfixToPostfixCache.get(zz);
        if (uz) return uz.accessTime = Date.now(), uz.result;
        if (!zz.includes("&&") && !zz.includes("||") && !zz.includes(")") && !zz.includes("(")) return [zz];
        const bz = [];
        let Ez = -1;
        const nz = () => {
            Oz = Oz.trim(), "" !== Oz && (bz.push(Oz), Oz = "")
          },
          iz = zz => {
            Ez < Mz._Stack.length - 1 && (Mz._Stack[++Ez] = zz)
          },
          lz = () => Mz._Stack[Ez],
          tz = () => -1 === Ez ? "!!INVALID EXPRESSION!!" : Mz._Stack[Ez--];
        let Hz = 0,
          Oz = "";
        for (; Hz < zz.length;) {
          const uz = zz.charAt(Hz),
            pz = Hz < zz.length - 1 ? zz.substring(Hz, 2 + Hz) : "";
          if ("(" === uz) Oz = "", iz(uz);
          else if (")" === uz) {
            for (nz(); - 1 !== Ez && "(" !== lz();) bz.push(tz());
            tz()
          } else if (Mz._OperatorPriority[pz] > 1) {
            for (nz(); - 1 !== Ez && Mz._OperatorPriority[lz()] >= Mz._OperatorPriority[pz];) bz.push(tz());
            iz(pz), Hz++
          } else Oz += uz;
          Hz++
        }
        for (nz(); - 1 !== Ez;) "(" === lz() ? tz() : bz.push(tz());
        return Mz._InfixToPostfixCache.size >= Mz.InfixToPostfixCacheLimitSize && Mz.ClearCache(), Mz._InfixToPostfixCache.set(zz, {
          result: bz,
          accessTime: Date.now()
        }), bz
      }
      static ClearCache() {
        const zz = Array.from(Mz._InfixToPostfixCache.entries()).sort(((zz, uz) => zz[1].accessTime - uz[1].accessTime));
        for (let uz = 0; uz < Mz.InfixToPostfixCacheCleanupSize; uz++) Mz._InfixToPostfixCache.delete(zz[uz][0])
      }
    }
    Mz.InfixToPostfixCacheLimitSize = 5e4, Mz.InfixToPostfixCacheCleanupSize = 25e3, Mz._InfixToPostfixCache = new Map, Mz._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Mz._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class tz extends Mz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = zz, this.not = uz
      }
      isTrue(zz) {
        let uz = void 0 !== zz[this.define];
        return this.not && (uz = !uz), uz
      }
    }
    class Hz extends Mz {
      isTrue(zz) {
        return this.leftOperand.isTrue(zz) || this.rightOperand.isTrue(zz)
      }
    }
    class Oz extends Mz {
      isTrue(zz) {
        return this.leftOperand.isTrue(zz) && this.rightOperand.isTrue(zz)
      }
    }
    class pz extends Mz {
      constructor(zz, uz, bz) {
        super(), this.define = zz, this.operand = uz, this.testValue = bz
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(zz) {
        let uz = !1;
        const bz = parseInt(void 0 != zz[this.define] ? zz[this.define] : this.define),
          Ez = parseInt(void 0 != zz[this.testValue] ? zz[this.testValue] : this.testValue);
        if (isNaN(bz) || isNaN(Ez)) return !1;
        switch (this.operand) {
          case ">":
            uz = bz > Ez;
            break;
          case "<":
            uz = bz < Ez;
            break;
          case "<=":
            uz = bz <= Ez;
            break;
          case ">=":
            uz = bz >= Ez;
            break;
          case "==":
            uz = bz === Ez;
            break;
          case "!=":
            uz = bz !== Ez
        }
        return uz
      }
    }
    var dz = bz(39061),
      Fz = bz(39057);
    const Zz = /defined\s*?\((.+?)\)/g,
      Rz = /defined\s*?\[(.+?)\]/g,
      Kz = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      wz = /__decl__/,
      Xz = /light\{X\}.(\w*)/g,
      fz = /\{X\}/g,
      sz = [],
      rz = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function oz(zz) {
      zz.processor && zz.processor.initializeShaders && zz.processor.initializeShaders(zz.processingContext)
    }

    function Nz(zz, uz, bz, Ez) {
      uz.processor?.preProcessShaderCode && (zz = uz.processor.preProcessShaderCode(zz, uz.isFragment)), Gz(zz, uz, (zz => {
        uz.processCodeAfterIncludes && (zz = uz.processCodeAfterIncludes(uz.isFragment ? "fragment" : "vertex", zz, uz.defines));
        const nz = function(zz, uz, bz) {
          let Ez = function(zz, uz) {
            if (uz.processor?.noPrecision) return zz;
            const bz = uz.shouldUseHighPrecisionShader; - 1 === zz.indexOf("precision highp float") ? zz = bz ? "precision highp float;\n" + zz : "precision mediump float;\n" + zz : bz || (zz = zz.replace("precision highp float", "precision mediump float"));
            return zz
          }(zz, uz);
          if (!uz.processor) return Ez;
          if (0 === uz.processor.shaderLanguage && -1 !== Ez.indexOf("#version 3") && (Ez = Ez.replace("#version 300 es", ""), !uz.processor.parseGLES3)) return Ez;
          const nz = uz.defines,
            iz = Pz(uz, bz);
          uz.processor.preProcessor && (Ez = uz.processor.preProcessor(Ez, nz, iz, uz.isFragment, uz.processingContext));
          const lz = {};
          Ez = Lz(Ez, iz, uz, lz), uz.processor.postProcessor && (Ez = uz.processor.postProcessor(Ez, nz, uz.isFragment, uz.processingContext, bz ? {
            drawBuffersExtensionDisabled: !bz.getCaps().drawBuffersExtension
          } : {}, iz, lz));
          bz?._features.needShaderCodeInlining && (Ez = bz.inlineShaderCode(Ez));
          return Ez
        }(zz, uz, Ez);
        bz(nz, zz)
      }))
    }

    function vz(zz, uz, bz) {
      return bz.processor && bz.processor.finalizeShaders ? bz.processor.finalizeShaders(zz, uz, bz.processingContext) : {
        vertexCode: zz,
        fragmentCode: uz
      }
    }

    function xz(zz) {
      const uz = /defined\((.+)\)/.exec(zz);
      if (uz && uz.length) return new tz(uz[1].trim(), "!" === zz[0]);
      const bz = ["==", "!=", ">=", "<=", "<", ">"];
      let Ez = "",
        nz = 0;
      for (Ez of bz)
        if (nz = zz.indexOf(Ez), nz > -1) break;
      if (-1 === nz) return new tz(zz);
      const iz = zz.substring(0, nz).trim(),
        lz = zz.substring(nz + Ez.length).trim();
      return new pz(iz, Ez, lz)
    }

    function Jz(zz, uz) {
      const bz = new lz,
        Ez = zz.substring(0, uz);
      let nz = zz.substring(uz);
      return nz = nz.substring(0, (nz.indexOf("//") + 1 || nz.length + 1) - 1).trim(), bz.testExpression = "#ifdef" === Ez ? new tz(nz) : "#ifndef" === Ez ? new tz(nz, !0) : function(zz) {
        zz = zz.replace(Zz, "defined[$1]");
        const uz = Mz.infixToPostfix(zz),
          bz = [];
        for (const nz of uz)
          if ("||" !== nz && "&&" !== nz) bz.push(nz);
          else if (bz.length >= 2) {
          let zz = bz[bz.length - 1],
            uz = bz[bz.length - 2];
          bz.length -= 2;
          const Ez = "&&" == nz ? new Oz : new Hz;
          "string" === typeof zz && (zz = zz.replace(Rz, "defined($1)")), "string" === typeof uz && (uz = uz.replace(Rz, "defined($1)")), Ez.leftOperand = "string" === typeof uz ? xz(uz) : uz, Ez.rightOperand = "string" === typeof zz ? xz(zz) : zz, bz.push(Ez)
        }
        let Ez = bz[bz.length - 1];
        return "string" === typeof Ez && (Ez = Ez.replace(Rz, "defined($1)")), "string" === typeof Ez ? xz(Ez) : Ez
      }(nz), bz
    }

    function Az(zz, uz, bz, nz) {
      let iz;
      for (; Tz(zz, bz, nz);) {
        iz = zz.currentLine;
        const lz = iz.substring(0, 5).toLowerCase();
        if ("#else" === lz) {
          const bz = new Ez;
          return uz.children.push(bz), void Tz(zz, bz, nz)
        }
        if ("#elif" === lz) {
          const zz = Jz(iz, 5);
          uz.children.push(zz), bz = zz
        }
      }
    }

    function Tz(zz, uz, bz) {
      for (; zz.canRead;) {
        zz.lineIndex++;
        const nz = zz.currentLine;
        if (nz.indexOf("#") >= 0) {
          const Ez = rz.exec(nz);
          if (Ez && Ez.length) {
            switch (Ez[0]) {
              case "#ifdef": {
                const Ez = new iz;
                uz.children.push(Ez);
                const lz = Jz(nz, 6);
                Ez.children.push(lz), Az(zz, Ez, lz, bz);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Ez = new iz;
                uz.children.push(Ez);
                const lz = Jz(nz, 7);
                Ez.children.push(lz), Az(zz, Ez, lz, bz);
                break
              }
              case "#if": {
                const Ez = new iz,
                  lz = Jz(nz, 3);
                uz.children.push(Ez), Ez.children.push(lz), Az(zz, Ez, lz, bz);
                break
              }
            }
            continue
          }
        }
        const lz = new Ez;
        if (lz.line = nz, uz.children.push(lz), "#" === nz[0] && "d" === nz[1]) {
          const zz = nz.replace(";", "").split(" ");
          lz.additionalDefineKey = zz[1], 3 === zz.length && (lz.additionalDefineValue = zz[2])
        }
      }
      return !1
    }

    function Lz(zz, uz, bz, iz) {
      const lz = new Ez,
        Mz = new nz;
      return Mz.lineIndex = -1, Mz.lines = zz.split("\n"), Tz(Mz, lz, iz), lz.process(uz, bz, iz)
    }

    function Pz(zz, uz) {
      const bz = zz.defines,
        Ez = {};
      for (const nz of bz) {
        const zz = nz.replace("#define", "").replace(";", "").trim().split(" ");
        Ez[zz[0]] = zz.length > 1 ? zz[1] : ""
      }
      return 0 === zz.processor?.shaderLanguage && (Ez.GL_ES = "true"), Ez.__VERSION__ = zz.version, Ez[zz.platformName] = "true", (0, Fz.l)(Ez, uz?.isNDCHalfZRange, uz?.fbz, uz?.useExactSrgbConversions), Ez
    }

    function Gz(zz, uz, bz) {
      let Ez;
      for (sz.length = 0; null !== (Ez = Kz.exec(zz));) sz.push(Ez);
      let nz = [zz],
        iz = !1;
      for (const Mz of sz) {
        let zz = Mz[1];
        if (-1 !== zz.indexOf("__decl__") && (zz = zz.replace(wz, ""), uz.supportsUniformBuffers && (zz = zz.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), zz += "Declaration"), !uz.includesShadersStore[zz]) {
          const Ez = uz.shadersRepository + "ShadersInclude/" + zz + ".fx";
          return void az.loadFile(Ez, (Ez => {
            uz.includesShadersStore[zz] = Ez, Gz(nz.join(""), uz, bz)
          }))
        } {
          let bz = uz.includesShadersStore[zz];
          if (Mz[2]) {
            const zz = Mz[3].split(",");
            for (let uz = 0; uz < zz.length; uz += 2) {
              const Ez = new RegExp(zz[uz], "g"),
                nz = zz[uz + 1];
              bz = bz.replace(Ez, nz)
            }
          }
          if (Mz[4]) {
            const zz = Mz[5];
            if (-1 !== zz.indexOf("..")) {
              const Ez = zz.split(".."),
                nz = parseInt(Ez[0]);
              let iz = parseInt(Ez[1]),
                lz = bz.slice(0);
              bz = "", isNaN(iz) && (iz = uz.indexParameters[Ez[1]]);
              for (let zz = nz; zz < iz; zz++) uz.supportsUniformBuffers || (lz = lz.replace(Xz, ((zz, uz) => uz + "{X}"))), bz += lz.replace(fz, zz.toString()) + "\n"
            } else uz.supportsUniformBuffers || (bz = bz.replace(Xz, ((zz, uz) => uz + "{X}"))), bz = bz.replace(fz, zz)
          }
          const Ez = [];
          for (const zz of nz) {
            const uz = zz.split(Mz[0]);
            for (let zz = 0; zz < uz.length - 1; zz++) Ez.push(uz[zz]), Ez.push(bz);
            Ez.push(uz[uz.length - 1])
          }
          nz = Ez, iz = iz || bz.indexOf("#include<") >= 0 || bz.indexOf("#include <") >= 0
        }
      }
      sz.length = 0;
      const lz = nz.join("");
      iz ? Gz(lz.toString(), uz, bz) : bz(lz)
    }
    const az = {
      loadFile: (zz, uz, bz, Ez, nz, iz) => {
        throw (0, dz.l)("FileTools")
      }
    }
  },
  39057: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      h: () => iz,
      l: () => Mz,
      o: () => lz,
      s: () => tz
    });
    var Ez = bz(39061);
    const nz = {};

    function iz(zz, uz) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (uz ? uz + "\n" : "") + zz
    }

    function lz(zz, uz, bz, iz, lz, Mz, tz) {
      const Hz = tz || nz.loadFile;
      if (!Hz) throw (0, Ez.l)("FileTools");
      return Hz(zz, uz, bz, iz, lz, Mz)
    }

    function Mz(zz, uz, bz, Ez) {
      if (zz) return uz ? zz.IS_NDC_HALF_ZRANGE = "" : delete zz.IS_NDC_HALF_ZRANGE, bz ? zz.USE_REVERSE_DEPTHBUFFER = "" : delete zz.USE_REVERSE_DEPTHBUFFER, void(Ez ? zz.USE_EXACT_SRGB_CONVERSIONS = "" : delete zz.USE_EXACT_SRGB_CONVERSIONS);
      {
        let zz = "";
        return uz && (zz += "#define IS_NDC_HALF_ZRANGE"), bz && (zz && (zz += "\n"), zz += "#define USE_REVERSE_DEPTHBUFFER"), Ez && (zz && (zz += "\n"), zz += "#define USE_EXACT_SRGB_CONVERSIONS"), zz
      }
    }

    function tz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ez = arguments.length > 3 ? arguments[3] : void 0;
      switch (zz) {
        case 3: {
          const zz = new Int8Array(uz);
          return Ez && zz.set(new Int8Array(Ez)), zz
        }
        case 0: {
          const zz = new Uint8Array(uz);
          return Ez && zz.set(new Uint8Array(Ez)), zz
        }
        case 4: {
          const zz = "number" !== typeof uz ? new Int16Array(uz) : new Int16Array(bz ? uz / 2 : uz);
          return Ez && zz.set(new Int16Array(Ez)), zz
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const zz = "number" !== typeof uz ? new Uint16Array(uz) : new Uint16Array(bz ? uz / 2 : uz);
          return Ez && zz.set(new Uint16Array(Ez)), zz
        }
        case 6: {
          const zz = "number" !== typeof uz ? new Int32Array(uz) : new Int32Array(bz ? uz / 4 : uz);
          return Ez && zz.set(new Int32Array(Ez)), zz
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const zz = "number" !== typeof uz ? new Uint32Array(uz) : new Uint32Array(bz ? uz / 4 : uz);
          return Ez && zz.set(new Uint32Array(Ez)), zz
        }
        case 1: {
          const zz = "number" !== typeof uz ? new Float32Array(uz) : new Float32Array(bz ? uz / 4 : uz);
          return Ez && zz.set(new Float32Array(Ez)), zz
        }
      }
      const nz = new Uint8Array(uz);
      return Ez && nz.set(new Uint8Array(Ez)), nz
    }
  },
  39061: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Hz,
      f: () => Oz,
      h: () => tz,
      l: () => nz
    });
    const Ez = {};

    function nz(zz) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Ez[zz]) return Ez[zz] = !0, `${zz} needs to be imported before as it contains a side-effect required by your code.`
    }
    const iz = {};
    let lz = !1,
      Mz = 0;

    function tz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ez = function() {
        if ((bz || lz) && 0 === Mz) {
          const bz = `${zz}.${uz}`;
          iz[bz] || (iz[bz] = !0, console.warn(`[Babylon.js] ${bz}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Ez.__isSideEffectStub = !0, Ez
    }

    function Hz(zz) {
      return !!zz && !zz.__isSideEffectStub
    }

    function Oz(zz, uz) {
      return {
        get() {},
        set(zz) {
          Object.defineProperty(this, uz, {
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
  39043: (zz, uz, bz) => {
    function Ez() {
      return "undefined" !== typeof window
    }

    function nz() {
      return "undefined" !== typeof navigator
    }

    function iz() {
      return "undefined" !== typeof document
    }

    function lz(zz) {
      let uz = "",
        bz = zz.firstChild;
      for (; bz;) 3 === bz.nodeType && (uz += bz.textContent), bz = bz.nextSibling;
      return uz
    }
    bz.d(uz, {
      d: () => lz,
      e: () => iz,
      h: () => nz,
      i: () => Ez
    })
  },
  39212: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => nz,
      j: () => iz
    });
    class Ez extends Error {}
    Ez._setPrototypeOf = Object.setPrototypeOf || ((zz, uz) => (zz.__proto__ = uz, zz));
    const nz = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class iz extends Ez {
      constructor(zz, uz, bz) {
        super(zz), this.errorCode = uz, this.innerError = bz, this.name = "RuntimeError", Ez._setPrototypeOf(this, iz.prototype)
      }
    }
  },
  39202: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Pz,
      f: () => fz,
      j: () => Jz,
      n: () => Tz,
      r: () => vz,
      t: () => oz,
      v: () => Nz,
      z: () => qz,
      A: () => xz,
      B: () => sz
    });
    var Ez = bz(39208),
      nz = bz(39043),
      iz = bz(36547);
    class lz {}
    lz.FilesToLoad = {};
    var Mz = bz(39212),
      tz = bz(39221),
      Hz = bz(36543),
      Oz = bz(39057),
      pz = bz(39064),
      dz = bz(38060),
      Fz = bz(39071),
      Zz = bz(39226);
    const Rz = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Kz extends Mz.j {
      constructor(zz, uz) {
        super(zz, Mz.f.LoadFileError), this.name = "LoadFileError", Mz.b._setPrototypeOf(this, Kz.prototype), uz instanceof Ez.b ? this.request = uz : this.file = uz
      }
    }
    class wz extends Mz.j {
      constructor(zz, uz) {
        super(zz, Mz.f.RequestFileError), this.request = uz, this.name = "RequestFileError", Mz.b._setPrototypeOf(this, wz.prototype)
      }
    }
    class Xz extends Mz.j {
      constructor(zz, uz) {
        super(zz, Mz.f.ReadFileError), this.file = uz, this.name = "ReadFileError", Mz.b._setPrototypeOf(this, Xz.prototype)
      }
    }
    const fz = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (bz, Ez, nz) => 0 !== Ez.status || nz >= zz || -1 !== bz.indexOf("file:") ? -1 : Math.pow(2, nz) * uz
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: zz => zz,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: zz => zz,
        CleanUrl: zz => zz = zz.replace(/#/gm, "%23")
      },
      sz = (zz, uz) => {
        if ((!zz || 0 !== zz.indexOf("data:")) && fz.CorsBehavior)
          if ("string" === typeof fz.CorsBehavior || fz.CorsBehavior instanceof String) uz.crossOrigin = fz.CorsBehavior;
          else {
            const bz = fz.CorsBehavior(zz);
            bz && (uz.crossOrigin = bz)
          }
      },
      rz = {
        getRequiredSize: null
      },
      oz = function(zz, uz, bz, nz) {
        let iz, Mz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Oz = arguments.length > 5 ? arguments[5] : void 0,
          pz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Hz.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !pz?._features.forceBitmapOverHTMLImageElement) return bz("LoadImage is only supported in web or BabylonNative environments."), null;
        if (pz?._features.forceBitmapOverHTMLImageElement && "string" !== typeof zz && "undefined" !== typeof Blob) {
          let Ez;
          if (zz instanceof Blob) Ez = zz;
          else {
            const uz = zz instanceof ArrayBuffer ? zz : (0, Zz.o)(zz);
            Ez = new Blob([uz], {
              type: Mz
            })
          }
          return pz.createImageBitmap(Ez, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Oz
          }).then(uz).catch((uz => {
            bz && bz("Error while trying to load image: " + zz, uz)
          })), null
        }
        let dz = !1;
        if (zz instanceof ArrayBuffer || ArrayBuffer.isView(zz))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let uz;
            uz = zz instanceof ArrayBuffer ? zz : (0, Zz.o)(zz), iz = URL.createObjectURL(new Blob([uz], {
              type: Mz
            })), dz = !0
          } else iz = `data:${Mz};base64,` + (0, tz.h)(zz);
        else zz instanceof Blob ? (iz = URL.createObjectURL(zz), dz = !0) : (iz = fz.CleanUrl(zz), iz = fz.PreprocessUrl(iz));
        const Fz = uz => {
          if (bz) {
            const Ez = iz || zz.toString();
            bz(`Error while trying to load image: ${0===Ez.indexOf("http")||Ez.length<=128?Ez:Ez.slice(0,128)+"..."}`, uz)
          }
        };
        if (pz?._features.forceBitmapOverHTMLImageElement) return vz(iz, (Ez => {
          pz.createImageBitmap(new Blob([Ez], {
            type: Mz
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Oz
          }).then((zz => {
            uz(zz), dz && URL.revokeObjectURL(iz)
          })).catch((uz => {
            bz && bz("Error while trying to load image: " + zz, uz)
          }))
        }), void 0, nz || void 0, !0, ((zz, uz) => {
          Fz(uz)
        })), null;
        const Rz = new Image;
        if (rz.getRequiredSize) {
          const uz = rz.getRequiredSize(zz);
          uz.width && (Rz.width = uz.width), uz.height && (Rz.height = uz.height)
        }
        sz(iz, Rz);
        const Kz = [],
          wz = () => {
            for (const zz of Kz) zz.target.removeEventListener(zz.name, zz.handler);
            Kz.length = 0
          };
        Kz.push({
          target: Rz,
          name: "load",
          handler: () => {
            wz(), uz(Rz), dz && Rz.src && URL.revokeObjectURL(Rz.src)
          }
        }), Kz.push({
          target: Rz,
          name: "error",
          handler: zz => {
            wz(), Fz(zz), dz && Rz.src && URL.revokeObjectURL(Rz.src)
          }
        }), Kz.push({
          target: document,
          name: "securitypolicyviolation",
          handler: zz => {
            if (zz.blockedURI !== Rz.src || "xZ" === zz.disposition) return;
            wz();
            const uz = new Error(`CSP violation of policy ${zz.effectiveDirective} ${zz.blockedURI}. Current policy is ${zz.originalPolicy}`);
            Hz.d.UseFallbackTexture = !1, Fz(uz), dz && Rz.src && URL.revokeObjectURL(Rz.src), Rz.src = ""
          }
        }), (() => {
          for (const zz of Kz) zz.target.addEventListener(zz.name, zz.handler)
        })();
        const Xz = "blob:" === iz.substring(0, 5),
          oz = "data:" === iz.substring(0, 5),
          Nz = () => {
            Xz || oz || !Ez.b.IsCustomRequestAvailable ? Rz.src = iz : vz(iz, ((zz, uz, bz) => {
              const Ez = new Blob([zz], {
                  type: !Mz && bz ? bz : Mz
                }),
                nz = URL.createObjectURL(Ez);
              dz = !0, Rz.src = nz
            }), void 0, nz || void 0, !0, ((zz, uz) => {
              Fz(uz)
            }))
          },
          xz = () => {
            nz && nz.loadImage(iz, Rz)
          };
        if (!Xz && !oz && nz && nz.enableTexturesOffline) nz.open(xz, Nz);
        else {
          if (-1 !== iz.indexOf("file:")) {
            const zz = decodeURIComponent(iz.substring(5).toLowerCase());
            if (lz.FilesToLoad[zz] && "undefined" !== typeof URL) {
              try {
                let uz;
                try {
                  uz = URL.createObjectURL(lz.FilesToLoad[zz])
                } catch (Jz) {
                  uz = URL.createObjectURL(lz.FilesToLoad[zz])
                }
                Rz.src = uz, dz = !0
              } catch (Az) {
                Rz.src = ""
              }
              return Rz
            }
          }
          Nz()
        }
        return Rz
      },
      Nz = (zz, uz, bz, Ez, nz) => {
        const lz = new FileReader,
          Mz = {
            onCompleteObservable: new iz.b,
            abort: () => lz.abort()
          };
        return lz.onloadend = () => Mz.onCompleteObservable.notifyObservers(Mz), nz && (lz.onerror = () => {
          nz(new Xz(`Unable to read ${zz.name}`, zz))
        }), lz.onload = zz => {
          uz(zz.target.result)
        }, bz && (lz.onprogress = bz), Ez ? lz.readAsArrayBuffer(zz) : lz.readAsText(zz), Mz
      },
      vz = (zz, uz, bz, Ez, nz, tz, Hz) => {
        if (zz.name) return Nz(zz, uz, bz, nz, tz ? zz => {
          tz(void 0, zz)
        } : void 0);
        const Oz = zz;
        if (-1 !== Oz.indexOf("file:")) {
          let zz = decodeURIComponent(Oz.substring(5).toLowerCase());
          0 === zz.indexOf("./") && (zz = zz.substring(2));
          const Ez = lz.FilesToLoad[zz];
          if (Ez) return Nz(Ez, uz, bz, nz, tz ? zz => tz(void 0, new Kz(zz.message, zz.file)) : void 0)
        }
        const {
          match: pz,
          type: Zz
        } = Lz(Oz);
        if (pz) {
          const zz = {
            onCompleteObservable: new iz.b,
            abort: () => () => {}
          };
          try {
            const zz = nz ? Pz(Oz) : Gz(Oz);
            uz(zz, void 0, Zz)
          } catch (Mz) {
            tz ? tz(void 0, Mz) : dz.e.Error(Mz.message || "Failed to parse the Data URL")
          }
          return Fz.c.SetImmediate((() => {
            zz.onCompleteObservable.notifyObservers(zz)
          })), zz
        }
        return xz(Oz, ((zz, bz) => {
          uz(zz, bz?.responseURL, bz?.getResponseHeader("content-type"))
        }), bz, Ez, nz, tz ? zz => {
          tz(zz.request, new Kz(zz.message, zz.request))
        } : void 0, Hz)
      },
      xz = (zz, uz, bz, lz, Mz, tz, Oz) => {
        null !== lz && (lz ?? (lz = Hz.d.LastCreatedScene?.offlineProvider)), zz = fz.CleanUrl(zz), zz = fz.PreprocessUrl(zz);
        const pz = fz.BaseUrl + zz;
        let Fz = !1;
        const Zz = {
            onCompleteObservable: new iz.b,
            abort: () => Fz = !0
          },
          Rz = () => {
            let zz, iz = new Ez.b,
              lz = null;
            const Hz = () => {
              iz && (bz && iz.removeEventListener("progress", bz), zz && iz.removeEventListener("readystatechange", zz), iz.removeEventListener("loadend", Rz))
            };
            let Rz = () => {
              Hz(), Zz.onCompleteObservable.notifyObservers(Zz), Zz.onCompleteObservable.clear(), bz = void 0, zz = null, Rz = null, tz = void 0, Oz = void 0, uz = void 0
            };
            Zz.abort = () => {
              Fz = !0, Rz && Rz(), iz && iz.readyState !== (XMLHttpRequest.DONE || 4) && iz.abort(), null !== lz && (clearTimeout(lz), lz = null), iz = null
            };
            const Kz = zz => {
                const uz = zz.message || "Unknown error";
                tz && iz ? tz(new wz(uz, iz)) : dz.e.Error(uz)
              },
              Xz = dz => {
                if (iz) {
                  if (iz.open("GET", pz), Oz) try {
                    Oz(iz)
                  } catch (Zz) {
                    return void Kz(Zz)
                  }
                  Mz && (iz.responseType = "arraybuffer"), bz && iz.addEventListener("progress", bz), Rz && iz.addEventListener("loadend", Rz), zz = () => {
                    if (!Fz && iz && iz.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (zz && iz.removeEventListener("readystatechange", zz), iz.status >= 200 && iz.status < 300 || 0 === iz.status && (!(0, nz.i)() || Az())) {
                        const zz = Mz ? iz.response : iz.responseText;
                        if (null !== zz) {
                          try {
                            uz && uz(zz, iz)
                          } catch (Zz) {
                            Kz(Zz)
                          }
                          return
                        }
                      }
                      const bz = fz.DefaultRetryStrategy;
                      if (bz) {
                        const zz = bz(pz, iz, dz);
                        if (-1 !== zz) return Hz(), iz = new Ez.b, void(lz = setTimeout((() => Xz(dz + 1)), zz))
                      }
                      const Oz = new wz("Error status: " + iz.status + " " + iz.statusText + " - Unable to load " + pz, iz);
                      tz && tz(Oz)
                    }
                  }, iz.addEventListener("readystatechange", zz), iz.send()
                }
              };
            Xz(0)
          };
        if (lz && lz.enableSceneOffline && !zz.startsWith("blob:")) {
          const Ez = zz => {
              zz && zz.status > 400 ? tz && tz(zz) : Rz()
            },
            nz = () => {
              lz && lz.loadFile(fz.BaseUrl + zz, (zz => {
                !Fz && uz && uz(zz), Zz.onCompleteObservable.notifyObservers(Zz)
              }), bz ? zz => {
                !Fz && bz && bz(zz)
              } : void 0, Ez, Mz)
            };
          lz.open(nz, Ez)
        } else Rz();
        return Zz
      },
      Jz = zz => {
        const {
          match: uz,
          type: bz
        } = Lz(zz);
        if (uz) return bz || void 0;
        const Ez = zz.lastIndexOf(".");
        switch (zz.substring(Ez + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "JA":
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
      Az = () => "undefined" !== typeof location && "file:" === location.protocol,
      Tz = zz => Rz.test(zz),
      Lz = zz => {
        const uz = Rz.exec(zz);
        if (null === uz || 0 === uz.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: uz[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Pz(zz) {
      return (0, tz.e)(zz.split(",")[1])
    }
    const Gz = zz => (0, tz.f)(zz.split(",")[1]);
    let az;
    const Vz = (zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) => {
      az = {
        DecodeBase64UrlToBinary: zz,
        DecodeBase64UrlToString: uz,
        DefaultRetryStrategy: bz.DefaultRetryStrategy,
        BaseUrl: bz.BaseUrl,
        CorsBehavior: bz.CorsBehavior,
        PreprocessUrl: bz.PreprocessUrl,
        IsBase64DataUrl: Ez,
        IsFileURL: nz,
        LoadFile: iz,
        LoadImage: lz,
        ReadFile: Mz,
        RequestFile: tz,
        SetCorsBehavior: Hz
      }, Object.defineProperty(az, "DefaultRetryStrategy", {
        get: function() {
          return bz.DefaultRetryStrategy
        },
        set: function(zz) {
          bz.DefaultRetryStrategy = zz
        }
      }), Object.defineProperty(az, "BaseUrl", {
        get: function() {
          return bz.BaseUrl
        },
        set: function(zz) {
          bz.BaseUrl = zz
        }
      }), Object.defineProperty(az, "PreprocessUrl", {
        get: function() {
          return bz.PreprocessUrl
        },
        set: function(zz) {
          bz.PreprocessUrl = zz
        }
      }), Object.defineProperty(az, "CorsBehavior", {
        get: function() {
          return bz.CorsBehavior
        },
        set: function(zz) {
          bz.CorsBehavior = zz
        }
      })
    };
    let mz = !1;

    function qz() {
      mz || (mz = !0, Vz(Pz, Gz, fz, Tz, Az, vz, oz, Nz, xz, sz), Oz.d.loadFile = vz, Oz.d.loadImage = oz, pz.i.loadFile = vz)
    }
  },
  39231: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      f: () => iz,
      i: () => lz
    });
    let Ez = null;

    function nz() {
      if (Ez) return Ez;
      const zz = new ArrayBuffer(4),
        uz = new Float32Array(zz),
        bz = new Uint32Array(zz),
        nz = new Uint32Array(512),
        iz = new Uint32Array(512);
      for (let Ez = 0; Ez < 256; ++Ez) {
        const zz = Ez - 127;
        zz < -24 ? (nz[Ez] = 0, nz[256 | Ez] = 32768, iz[Ez] = 24, iz[256 | Ez] = 24) : zz < -14 ? (nz[Ez] = 1024 >> -zz - 14, nz[256 | Ez] = 1024 >> -zz - 14 | 32768, iz[Ez] = -zz - 1, iz[256 | Ez] = -zz - 1) : zz <= 15 ? (nz[Ez] = zz + 15 << 10, nz[256 | Ez] = zz + 15 << 10 | 32768, iz[Ez] = 13, iz[256 | Ez] = 13) : zz < 128 ? (nz[Ez] = 31744, nz[256 | Ez] = 64512, iz[Ez] = 24, iz[256 | Ez] = 24) : (nz[Ez] = 31744, nz[256 | Ez] = 64512, iz[Ez] = 13, iz[256 | Ez] = 13)
      }
      const lz = new Uint32Array(2048),
        Mz = new Uint32Array(64),
        tz = new Uint32Array(64);
      for (let Ez = 1; Ez < 1024; ++Ez) {
        let zz = Ez << 13,
          uz = 0;
        for (; 0 === (8388608 & zz);) zz <<= 1, uz -= 8388608;
        zz &= -8388609, uz += 947912704, lz[Ez] = zz | uz
      }
      for (let Ez = 1024; Ez < 2048; ++Ez) lz[Ez] = 939524096 + (Ez - 1024 << 13);
      for (let Ez = 1; Ez < 31; ++Ez) Mz[Ez] = Ez << 23;
      Mz[31] = 1199570944, Mz[32] = 2147483648;
      for (let Ez = 33; Ez < 63; ++Ez) Mz[Ez] = 2147483648 + (Ez - 32 << 23);
      Mz[63] = 3347054592;
      for (let Ez = 1; Ez < 64; ++Ez) 32 !== Ez && (tz[Ez] = 1024);
      return Ez = {
        floatView: uz,
        uint32View: bz,
        baseTable: nz,
        shiftTable: iz,
        mantissaTable: lz,
        exponentTable: Mz,
        offsetTable: tz
      }, Ez
    }
    const iz = 65504;

    function lz(zz) {
      const uz = nz();
      uz.floatView[0] = zz;
      const bz = uz.uint32View[0],
        Ez = bz >> 23 & 511;
      return uz.baseTable[Ez] + ((8388607 & bz) >> uz.shiftTable[Ez])
    }

    function Mz(zz) {
      const uz = nz();
      return uz.uint32View[0] = uz.mantissaTable[uz.offsetTable[zz >> 10] + (1023 & zz)] + uz.exponentTable[zz >> 10], uz.floatView[0]
    }
  },
  39221: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz,
      f: () => nz,
      h: () => Ez
    });
    const Ez = zz => {
        const uz = ArrayBuffer.isView(zz) ? new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength) : new Uint8Array(zz);
        return "function" === typeof uz.toBase64 ? uz.toBase64() : function(zz) {
          const uz = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let bz, Ez, nz, iz, lz, Mz, tz, Hz = "",
            Oz = 0;
          for (; Oz < zz.length;) bz = zz[Oz++], Ez = Oz < zz.length ? zz[Oz++] : Number.NaN, nz = Oz < zz.length ? zz[Oz++] : Number.NaN, iz = bz >> 2, lz = (3 & bz) << 4 | Ez >> 4, Mz = (15 & Ez) << 2 | nz >> 6, tz = 63 & nz, isNaN(Ez) ? Mz = tz = 64 : isNaN(nz) && (tz = 64), Hz += uz.charAt(iz) + uz.charAt(lz) + uz.charAt(Mz) + uz.charAt(tz);
          return Hz
        }(uz)
      },
      nz = zz => atob(zz),
      iz = zz => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(zz).buffer : function(zz) {
        const uz = nz(zz),
          bz = uz.length,
          Ez = new Uint8Array(new ArrayBuffer(bz));
        for (let nz = 0; nz < bz; nz++) Ez[nz] = uz.charCodeAt(nz);
        return Ez.buffer
      }(zz)
  },
  39071: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      g: () => lz
    });
    let Ez = [];
    class nz {
      static SetImmediate(zz) {
        0 === Ez.length && setTimeout((() => {
          const zz = Ez;
          Ez = [];
          for (const uz of zz) uz()
        }), 1), Ez.push(zz)
      }
    }

    function iz(zz, uz, bz) {
      try {
        if (zz()) return uz(), !0
      } catch (Ez) {
        return bz?.(Ez), !0
      }
      return !1
    }
    const lz = function(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        lz = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && iz(zz, uz, bz)) return null;
      const Mz = setInterval((() => {
        iz(zz, uz, bz) ? clearInterval(Mz) : (nz -= Ez, nz < 0 && (clearInterval(Mz), bz?.(new Error("Operation timed out after maximum retries. " + (lz || "")), !0)))
      }), Ez);
      return () => clearInterval(Mz)
    }
  },
  39208: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    class Ez {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Ez.CustomRequestHeaders).length > 0 || Ez.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(zz) {
        return zz = (zz = zz.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(zz) {
        return Ez.SkipRequestModificationForBabylonCDN && (zz.includes("preview.babylonjs.com") || zz.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(zz) {
        const uz = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Ez._ShouldSkipRequestModifications(zz)) return {
          url: zz,
          headers: uz
        };
        for (const nz in Ez.CustomRequestHeaders) {
          const zz = Ez.CustomRequestHeaders[nz];
          zz && (uz[nz] = zz)
        }
        const bz = {
          setRequestHeader: (zz, bz) => {
            uz[zz] = bz
          }
        };
        for (const nz of Ez.CustomRequestModifiers) {
          if (Ez._ShouldSkipRequestModifications(zz)) break;
          const uz = nz(bz, zz);
          "string" === typeof uz && (zz = uz)
        }
        return {
          url: zz,
          headers: uz
        }
      }
      static async FetchAsync(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const bz = uz.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: nz,
            headers: iz
          } = Ez._CollectCustomizations(Ez._CleanUrl(zz), uz.headers ?? {});
          return await fetch(nz, {
            method: bz,
            headers: iz,
            body: uz.body ?? void 0
          })
        }
        return await new Promise(((nz, iz) => {
          const lz = new Ez;
          lz.responseType = "arraybuffer", lz.addEventListener("readystatechange", (() => {
            if (4 === lz.readyState)
              if (lz.status >= 200 && lz.status < 300) {
                const zz = "undefined" !== typeof Headers ? new Headers : void 0,
                  uz = lz.getResponseHeader("Content-Type");
                uz && zz && zz.set("Content-Type", uz), "undefined" !== typeof Response ? nz(new Response(lz.response, {
                  status: lz.status,
                  statusText: lz.statusText,
                  headers: zz
                })) : nz({
                  ok: !0,
                  status: lz.status,
                  statusText: lz.statusText,
                  headers: {
                    get: zz => lz.getResponseHeader(zz)
                  },
                  arrayBuffer: async () => await Promise.resolve(lz.response)
                })
              } else iz(new Error(`HTTP ${lz.status} loading '${lz.requestURL}': ${lz.statusText}`))
          })), lz.open(bz, zz, uz.headers), lz.send(uz.body ?? null)
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
      addEventListener(zz, uz, bz) {
        this._xhr.addEventListener(zz, uz, bz)
      }
      removeEventListener(zz, uz, bz) {
        this._xhr.removeEventListener(zz, uz, bz)
      }
      abort() {
        this._xhr.abort()
      }
      send(zz) {
        this._xhr.send(zz)
      }
      open(zz, uz, bz) {
        const {
          url: nz,
          headers: iz
        } = Ez._CollectCustomizations(uz, bz);
        this._requestURL = Ez._CleanUrl(nz), this._xhr.open(zz, this._requestURL, !0);
        for (const Ez in iz) this._xhr.setRequestHeader(Ez, iz[Ez])
      }
      setRequestHeader(zz, uz) {
        this._xhr.setRequestHeader(zz, uz)
      }
      getResponseHeader(zz) {
        return this._xhr.getResponseHeader(zz)
      }
    }
    Ez.CustomRequestHeaders = {}, Ez.CustomRequestModifiers = new Array, Ez.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);