export const id = 254;
export const ids = [254];
export const modules = {
  39882: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      g: () => WC,
      h: () => oC,
      i: () => MC,
      k: () => qC,
      m: () => fC,
      o: () => FC
    });
    var QC = ZC(38507),
      wC = ZC(39889);

    function bC(CC, zC, ZC, QC) {
      switch (zC) {
        case 5120: {
          let zC = CC.getInt8(ZC);
          return QC && (zC = Math.max(zC / 127, -1)), zC
        }
        case 5121: {
          let zC = CC.getUint8(ZC);
          return QC && (zC /= 255), zC
        }
        case 5122: {
          let zC = CC.getInt16(ZC, !0);
          return QC && (zC = Math.max(zC / 32767, -1)), zC
        }
        case 5123: {
          let zC = CC.getUint16(ZC, !0);
          return QC && (zC /= 65535), zC
        }
        case 5131:
          return (0, wC.e)(CC.getUint16(ZC, !0));
        case 5124:
          return CC.getInt32(ZC, !0);
        case 5125:
          return CC.getUint32(ZC, !0);
        case 5126:
          return CC.getFloat32(ZC, !0);
        default:
          throw new Error(`Invalid component type ${zC}`)
      }
    }

    function nC(CC, zC, ZC, QC, bC) {
      switch (zC) {
        case 5120:
          QC && (bC = Math.round(127 * bC)), CC.setInt8(ZC, bC);
          break;
        case 5121:
          QC && (bC = Math.round(255 * bC)), CC.setUint8(ZC, bC);
          break;
        case 5122:
          QC && (bC = Math.round(32767 * bC)), CC.setInt16(ZC, bC, !0);
          break;
        case 5123:
          QC && (bC = Math.round(65535 * bC)), CC.setUint16(ZC, bC, !0);
          break;
        case 5131:
          CC.setUint16(ZC, (0, wC.k)(bC), !0);
          break;
        case 5124:
          CC.setInt32(ZC, bC, !0);
          break;
        case 5125:
          CC.setUint32(ZC, bC, !0);
          break;
        case 5126:
          CC.setFloat32(ZC, bC, !0);
          break;
        default:
          throw new Error(`Invalid component type ${zC}`)
      }
    }

    function fC(CC) {
      switch (CC) {
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
          throw new Error(`Invalid type '${CC}'`)
      }
    }

    function oC(CC, zC, ZC, QC, wC, oC, qC, FC) {
      const WC = new Array(QC),
        NC = new Array(QC);
      if (CC instanceof Array) {
        let wC = zC / 4;
        const bC = ZC / 4;
        for (let zC = 0; zC < oC; zC += QC) {
          for (let zC = 0; zC < QC; zC++) WC[zC] = NC[zC] = CC[wC + zC];
          FC(NC, zC);
          for (let zC = 0; zC < QC; zC++) WC[zC] !== NC[zC] && (CC[wC + zC] = NC[zC]);
          wC += bC
        }
      } else {
        const MC = ArrayBuffer.isView(CC) ? new DataView(CC.buffer, CC.byteOffset, CC.byteLength) : new DataView(CC),
          gC = fC(wC);
        for (let CC = 0; CC < oC; CC += QC) {
          for (let CC = 0, ZC = zC; CC < QC; CC++, ZC += gC) WC[CC] = NC[CC] = bC(MC, wC, ZC, qC);
          FC(NC, CC);
          for (let CC = 0, ZC = zC; CC < QC; CC++, ZC += gC) WC[CC] !== NC[CC] && nC(MC, wC, ZC, qC, NC[CC]);
          zC += ZC
        }
      }
    }

    function qC(CC, zC, ZC, wC, bC, nC, qC, FC) {
      const WC = zC * fC(ZC),
        NC = qC * zC;
      if (5126 !== ZC || bC !== WC) {
        const QC = new Float32Array(NC);
        return oC(CC, wC, bC, zC, ZC, NC, nC, ((CC, ZC) => {
          for (let wC = 0; wC < zC; wC++) QC[ZC + wC] = CC[wC]
        })), QC
      }
      if (!(CC instanceof Array || CC instanceof Float32Array) || 0 !== wC || CC.length !== NC) {
        if (CC instanceof Array) {
          const zC = wC / 4;
          return CC.slice(zC, zC + NC)
        }
        if (ArrayBuffer.isView(CC)) {
          const zC = CC.byteOffset + wC;
          return 0 !== (3 & zC) && (QC.c.Warn("Float array must be aligned to 4-bytes border"), FC = !0), FC ? new Float32Array(CC.buffer.slice(zC, zC + NC * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(CC.buffer, zC, NC)
        }
        return new Float32Array(CC, wC, NC)
      }
      return FC ? CC.slice() : CC
    }

    function FC(CC, zC, ZC, wC, bC, nC, qC) {
      const FC = fC(ZC),
        WC = function(CC) {
          switch (CC) {
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
              throw new Error(`Invalid component type '${CC}'`)
          }
        }(ZC),
        NC = nC * zC;
      if (Array.isArray(CC)) {
        if (0 !== (3 & wC) || 0 !== (3 & bC)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const QC = wC / 4,
          fC = bC / 4;
        if (QC + (nC - 1) * fC + zC > CC.length) throw new Error("Last accessed index is out of bounds.");
        if (fC < zC) throw new Error("Data stride cannot be smaller than the component size.");
        if (fC !== zC) {
          const QC = new WC(NC);
          return oC(CC, wC, bC, zC, ZC, NC, !1, ((CC, ZC) => {
            for (let wC = 0; wC < zC; wC++) QC[ZC + wC] = CC[wC]
          })), QC
        }
        return new WC(CC.slice(QC, QC + NC))
      }
      let MC, gC = wC;
      ArrayBuffer.isView(CC) ? (MC = CC.buffer, gC += CC.byteOffset) : MC = CC;
      if (gC + (nC - 1) * bC + zC * FC > MC.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const SC = zC * FC;
      if (bC < SC) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (bC !== SC) {
        const CC = new WC(NC),
          ZC = new Uint8Array(MC, gC),
          QC = new Uint8Array(CC.buffer),
          wC = zC * FC;
        for (let zC = 0, fC = 0, oC = 0; zC < nC; zC++, fC += bC, oC += wC) QC.set(ZC.subarray(fC, fC + wC), oC);
        return CC
      }
      return 1 !== FC && 0 !== (gC & FC - 1) && (QC.c.Warn("Array must be aligned to border of element size. Data will be copied."), qC = !0), qC ? new WC(MC.slice(gC, gC + NC * FC)) : new WC(MC, gC, NC)
    }

    function WC(CC, zC, ZC, wC, bC, nC, qC, FC) {
      const WC = zC * fC(ZC),
        NC = qC * zC;
      if (FC.length !== NC) throw new Error("Output length is not valid");
      if (5126 === ZC && bC === WC)
        if (CC instanceof Array) {
          const zC = wC / 4;
          FC.set(CC, zC)
        } else if (ArrayBuffer.isView(CC)) {
        const zC = CC.byteOffset + wC;
        if (0 !== (3 & zC)) return QC.c.Warn("Float array must be aligned to 4-bytes border"), void FC.set(new Float32Array(CC.buffer.slice(zC, zC + NC * Float32Array.BYTES_PER_ELEMENT)));
        const ZC = new Float32Array(CC.buffer, zC, NC);
        FC.set(ZC)
      } else {
        const zC = new Float32Array(CC, wC, NC);
        FC.set(zC)
      } else oC(CC, wC, bC, zC, ZC, NC, nC, ((CC, ZC) => {
        for (let QC = 0; QC < zC; QC++) FC[ZC + QC] = CC[QC]
      }))
    }

    function NC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(CC)) {
        for (let wC = 0; wC < zC; wC++)
          if (CC[ZC + wC] - QC > 65535) return !0;
        return !1
      }
      return 4 === CC.BYTES_PER_ELEMENT
    }

    function MC(CC) {
      const zC = CC.buffer;
      if (zC instanceof ArrayBuffer) return CC;
      const ZC = new ArrayBuffer(CC.byteLength);
      return new Uint8Array(ZC).set(new Uint8Array(zC, CC.byteOffset, CC.byteLength)), ZC
    }
  },
  39703: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => iC,
      f: () => JC,
      n: () => IC,
      j: () => mC,
      o: () => HC
    });
    class QC {
      constructor() {
        this.children = []
      }
      isValid(CC) {
        return !0
      }
      process(CC, zC, ZC) {
        let QC = "";
        if (this.line) {
          let ZC = this.line;
          const wC = zC.processor;
          if (wC) {
            wC.lineProcessor && (ZC = wC.lineProcessor(ZC, zC.isFragment, zC.processingContext));
            const QC = zC.processor?.attributeKeywordName ?? "attribute",
              bC = zC.isFragment && zC.processor?.varyingFragmentKeywordName ? zC.processor?.varyingFragmentKeywordName : !zC.isFragment && zC.processor?.varyingVertexKeywordName ? zC.processor?.varyingVertexKeywordName : "varying";
            if (!zC.isFragment && wC.attributeProcessor && this.line.startsWith(QC)) ZC = wC.attributeProcessor(this.line, CC, zC.processingContext);
            else if (wC.varyingProcessor && (wC.varyingCheck?.(this.line, zC.isFragment) || !wC.varyingCheck && this.line.startsWith(bC))) ZC = wC.varyingProcessor(this.line, zC.isFragment, CC, zC.processingContext);
            else if (wC.uniformProcessor && wC.uniformRegexp && wC.uniformRegexp.test(this.line)) zC.lookForClosingBracketForUniformBuffer || (ZC = wC.uniformProcessor(this.line, zC.isFragment, CC, zC.processingContext));
            else if (wC.uniformBufferProcessor && wC.uniformBufferRegexp && wC.uniformBufferRegexp.test(this.line)) zC.lookForClosingBracketForUniformBuffer || (ZC = wC.uniformBufferProcessor(this.line, zC.isFragment, zC.processingContext), zC.lookForClosingBracketForUniformBuffer = !0);
            else if (wC.textureProcessor && wC.textureRegexp && wC.textureRegexp.test(this.line)) ZC = wC.textureProcessor(this.line, zC.isFragment, CC, zC.processingContext);
            else if ((wC.uniformProcessor || wC.uniformBufferProcessor) && this.line.startsWith("uniform") && !zC.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? wC.uniformProcessor && (ZC = wC.uniformProcessor(this.line, zC.isFragment, CC, zC.processingContext)) : wC.uniformBufferProcessor && (ZC = wC.uniformBufferProcessor(this.line, zC.isFragment, zC.processingContext), zC.lookForClosingBracketForUniformBuffer = !0)
            }
            zC.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (zC.lookForClosingBracketForUniformBuffer = !1, wC.endOfUniformBufferProcessor && (ZC = wC.endOfUniformBufferProcessor(this.line, zC.isFragment, zC.processingContext)))
          }
          QC += ZC + "\n"
        }
        for (const wC of this.children) QC += wC.process(CC, zC, ZC);
        return this.additionalDefineKey && (CC[this.additionalDefineKey] = this.additionalDefineValue || "true", ZC[this.additionalDefineKey] = CC[this.additionalDefineKey]), QC
      }
    }
    class wC {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(CC) {
        this._lines.length = 0;
        for (const zC of CC) {
          if (!zC || "\r" === zC) continue;
          if ("#" === zC[0]) {
            this._lines.push(zC);
            continue
          }
          const CC = zC.trim();
          if (!CC) continue;
          if (CC.startsWith("//")) {
            this._lines.push(zC);
            continue
          }
          const ZC = CC.indexOf(";");
          if (-1 === ZC) this._lines.push(CC);
          else if (ZC === CC.length - 1) CC.length > 1 && this._lines.push(CC);
          else {
            const CC = zC.split(";");
            for (let zC = 0; zC < CC.length; zC++) {
              let ZC = CC[zC];
              ZC && (ZC = ZC.trim(), ZC && this._lines.push(ZC + (zC !== CC.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class bC extends QC {
      process(CC, zC, ZC) {
        for (let QC = 0; QC < this.children.length; QC++) {
          const wC = this.children[QC];
          if (wC.isValid(CC)) return wC.process(CC, zC, ZC)
        }
        return ""
      }
    }
    class nC extends QC {
      isValid(CC) {
        return this.testExpression.isTrue(CC)
      }
    }
    class fC {
      isTrue(CC) {
        return !0
      }
      static postfixToInfix(CC) {
        const zC = [];
        for (const ZC of CC)
          if (void 0 === fC._OperatorPriority[ZC]) zC.push(ZC);
          else {
            const CC = zC[zC.length - 1],
              QC = zC[zC.length - 2];
            zC.length -= 2, zC.push(`(${QC}${ZC}${CC})`)
          } return zC[zC.length - 1]
      }
      static infixToPostfix(CC) {
        const zC = fC._InfixToPostfixCache.get(CC);
        if (zC) return zC.accessTime = Date.now(), zC.result;
        if (!CC.includes("&&") && !CC.includes("||") && !CC.includes(")") && !CC.includes("(")) return [CC];
        const ZC = [];
        let QC = -1;
        const wC = () => {
            FC = FC.trim(), "" !== FC && (ZC.push(FC), FC = "")
          },
          bC = CC => {
            QC < fC._Stack.length - 1 && (fC._Stack[++QC] = CC)
          },
          nC = () => fC._Stack[QC],
          oC = () => -1 === QC ? "!!INVALID EXPRESSION!!" : fC._Stack[QC--];
        let qC = 0,
          FC = "";
        for (; qC < CC.length;) {
          const zC = CC.charAt(qC),
            WC = qC < CC.length - 1 ? CC.substring(qC, 2 + qC) : "";
          if ("(" === zC) FC = "", bC(zC);
          else if (")" === zC) {
            for (wC(); - 1 !== QC && "(" !== nC();) ZC.push(oC());
            oC()
          } else if (fC._OperatorPriority[WC] > 1) {
            for (wC(); - 1 !== QC && fC._OperatorPriority[nC()] >= fC._OperatorPriority[WC];) ZC.push(oC());
            bC(WC), qC++
          } else FC += zC;
          qC++
        }
        for (wC(); - 1 !== QC;) "(" === nC() ? oC() : ZC.push(oC());
        return fC._InfixToPostfixCache.size >= fC.InfixToPostfixCacheLimitSize && fC.ClearCache(), fC._InfixToPostfixCache.set(CC, {
          result: ZC,
          accessTime: Date.now()
        }), ZC
      }
      static ClearCache() {
        const CC = Array.from(fC._InfixToPostfixCache.entries()).sort(((CC, zC) => CC[1].accessTime - zC[1].accessTime));
        for (let zC = 0; zC < fC.InfixToPostfixCacheCleanupSize; zC++) fC._InfixToPostfixCache.delete(CC[zC][0])
      }
    }
    fC.InfixToPostfixCacheLimitSize = 5e4, fC.InfixToPostfixCacheCleanupSize = 25e3, fC._InfixToPostfixCache = new Map, fC._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, fC._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class oC extends fC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = CC, this.not = zC
      }
      isTrue(CC) {
        let zC = void 0 !== CC[this.define];
        return this.not && (zC = !zC), zC
      }
    }
    class qC extends fC {
      isTrue(CC) {
        return this.leftOperand.isTrue(CC) || this.rightOperand.isTrue(CC)
      }
    }
    class FC extends fC {
      isTrue(CC) {
        return this.leftOperand.isTrue(CC) && this.rightOperand.isTrue(CC)
      }
    }
    class WC extends fC {
      constructor(CC, zC, ZC) {
        super(), this.define = CC, this.operand = zC, this.testValue = ZC
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(CC) {
        let zC = !1;
        const ZC = parseInt(void 0 != CC[this.define] ? CC[this.define] : this.define),
          QC = parseInt(void 0 != CC[this.testValue] ? CC[this.testValue] : this.testValue);
        if (isNaN(ZC) || isNaN(QC)) return !1;
        switch (this.operand) {
          case ">":
            zC = ZC > QC;
            break;
          case "<":
            zC = ZC < QC;
            break;
          case "<=":
            zC = ZC <= QC;
            break;
          case ">=":
            zC = ZC >= QC;
            break;
          case "==":
            zC = ZC === QC;
            break;
          case "!=":
            zC = ZC !== QC
        }
        return zC
      }
    }
    var NC = ZC(39694),
      MC = ZC(39692);
    const gC = /defined\s*?\((.+?)\)/g,
      SC = /defined\s*?\[(.+?)\]/g,
      pC = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      PC = /__decl__/,
      GC = /light\{X\}.(\w*)/g,
      RC = /\{X\}/g,
      AC = [],
      xC = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function JC(CC) {
      CC.processor && CC.processor.initializeShaders && CC.processor.initializeShaders(CC.processingContext)
    }

    function IC(CC, zC, ZC, QC) {
      zC.processor?.preProcessShaderCode && (CC = zC.processor.preProcessShaderCode(CC, zC.isFragment)), mC(CC, zC, (CC => {
        zC.processCodeAfterIncludes && (CC = zC.processCodeAfterIncludes(zC.isFragment ? "fragment" : "vertex", CC, zC.defines));
        const wC = function(CC, zC, ZC) {
          let QC = function(CC, zC) {
            if (zC.processor?.noPrecision) return CC;
            const ZC = zC.shouldUseHighPrecisionShader; - 1 === CC.indexOf("precision highp float") ? CC = ZC ? "precision highp float;\n" + CC : "precision mediump float;\n" + CC : ZC || (CC = CC.replace("precision highp float", "precision mediump float"));
            return CC
          }(CC, zC);
          if (!zC.processor) return QC;
          if (0 === zC.processor.shaderLanguage && -1 !== QC.indexOf("#version 3") && (QC = QC.replace("#version 300 es", ""), !zC.processor.parseGLES3)) return QC;
          const wC = zC.defines,
            bC = dC(zC, ZC);
          zC.processor.preProcessor && (QC = zC.processor.preProcessor(QC, wC, bC, zC.isFragment, zC.processingContext));
          const nC = {};
          QC = YC(QC, bC, zC, nC), zC.processor.postProcessor && (QC = zC.processor.postProcessor(QC, wC, zC.isFragment, zC.processingContext, ZC ? {
            drawBuffersExtensionDisabled: !ZC.getCaps().drawBuffersExtension
          } : {}, bC, nC));
          ZC?._features.needShaderCodeInlining && (QC = ZC.inlineShaderCode(QC));
          return QC
        }(CC, zC, QC);
        ZC(wC, CC)
      }))
    }

    function iC(CC, zC, ZC) {
      return ZC.processor && ZC.processor.finalizeShaders ? ZC.processor.finalizeShaders(CC, zC, ZC.processingContext) : {
        vertexCode: CC,
        fragmentCode: zC
      }
    }

    function vC(CC) {
      const zC = /defined\((.+)\)/.exec(CC);
      if (zC && zC.length) return new oC(zC[1].trim(), "!" === CC[0]);
      const ZC = ["==", "!=", ">=", "<=", "<", ">"];
      let QC = "",
        wC = 0;
      for (QC of ZC)
        if (wC = CC.indexOf(QC), wC > -1) break;
      if (-1 === wC) return new oC(CC);
      const bC = CC.substring(0, wC).trim(),
        nC = CC.substring(wC + QC.length).trim();
      return new WC(bC, QC, nC)
    }

    function eC(CC, zC) {
      const ZC = new nC,
        QC = CC.substring(0, zC);
      let wC = CC.substring(zC);
      return wC = wC.substring(0, (wC.indexOf("//") + 1 || wC.length + 1) - 1).trim(), ZC.testExpression = "#ifdef" === QC ? new oC(wC) : "#ifndef" === QC ? new oC(wC, !0) : function(CC) {
        CC = CC.replace(gC, "defined[$1]");
        const zC = fC.infixToPostfix(CC),
          ZC = [];
        for (const wC of zC)
          if ("||" !== wC && "&&" !== wC) ZC.push(wC);
          else if (ZC.length >= 2) {
          let CC = ZC[ZC.length - 1],
            zC = ZC[ZC.length - 2];
          ZC.length -= 2;
          const QC = "&&" == wC ? new FC : new qC;
          "string" === typeof CC && (CC = CC.replace(SC, "defined($1)")), "string" === typeof zC && (zC = zC.replace(SC, "defined($1)")), QC.leftOperand = "string" === typeof zC ? vC(zC) : zC, QC.rightOperand = "string" === typeof CC ? vC(CC) : CC, ZC.push(QC)
        }
        let QC = ZC[ZC.length - 1];
        return "string" === typeof QC && (QC = QC.replace(SC, "defined($1)")), "string" === typeof QC ? vC(QC) : QC
      }(wC), ZC
    }

    function hC(CC, zC, ZC, wC) {
      let bC;
      for (; KC(CC, ZC, wC);) {
        bC = CC.currentLine;
        const nC = bC.substring(0, 5).toLowerCase();
        if ("#else" === nC) {
          const ZC = new QC;
          return zC.children.push(ZC), void KC(CC, ZC, wC)
        }
        if ("#elif" === nC) {
          const CC = eC(bC, 5);
          zC.children.push(CC), ZC = CC
        }
      }
    }

    function KC(CC, zC, ZC) {
      for (; CC.canRead;) {
        CC.lineIndex++;
        const wC = CC.currentLine;
        if (wC.indexOf("#") >= 0) {
          const QC = xC.exec(wC);
          if (QC && QC.length) {
            switch (QC[0]) {
              case "#ifdef": {
                const QC = new bC;
                zC.children.push(QC);
                const nC = eC(wC, 6);
                QC.children.push(nC), hC(CC, QC, nC, ZC);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const QC = new bC;
                zC.children.push(QC);
                const nC = eC(wC, 7);
                QC.children.push(nC), hC(CC, QC, nC, ZC);
                break
              }
              case "#if": {
                const QC = new bC,
                  nC = eC(wC, 3);
                zC.children.push(QC), QC.children.push(nC), hC(CC, QC, nC, ZC);
                break
              }
            }
            continue
          }
        }
        const nC = new QC;
        if (nC.line = wC, zC.children.push(nC), "#" === wC[0] && "d" === wC[1]) {
          const CC = wC.replace(";", "").split(" ");
          nC.additionalDefineKey = CC[1], 3 === CC.length && (nC.additionalDefineValue = CC[2])
        }
      }
      return !1
    }

    function YC(CC, zC, ZC, bC) {
      const nC = new QC,
        fC = new wC;
      return fC.lineIndex = -1, fC.lines = CC.split("\n"), KC(fC, nC, bC), nC.process(zC, ZC, bC)
    }

    function dC(CC, zC) {
      const ZC = CC.defines,
        QC = {};
      for (const wC of ZC) {
        const CC = wC.replace("#define", "").replace(";", "").trim().split(" ");
        QC[CC[0]] = CC.length > 1 ? CC[1] : ""
      }
      return 0 === CC.processor?.shaderLanguage && (QC.GL_ES = "true"), QC.__VERSION__ = CC.version, QC[CC.platformName] = "true", (0, MC.l)(QC, zC?.isNDCHalfZRange, zC?.BZC, zC?.useExactSrgbConversions), QC
    }

    function mC(CC, zC, ZC) {
      let QC;
      for (AC.length = 0; null !== (QC = pC.exec(CC));) AC.push(QC);
      let wC = [CC],
        bC = !1;
      for (const fC of AC) {
        let CC = fC[1];
        if (-1 !== CC.indexOf("__decl__") && (CC = CC.replace(PC, ""), zC.supportsUniformBuffers && (CC = CC.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), CC += "Declaration"), !zC.includesShadersStore[CC]) {
          const QC = zC.shadersRepository + "ShadersInclude/" + CC + ".fx";
          return void HC.loadFile(QC, (QC => {
            zC.includesShadersStore[CC] = QC, mC(wC.join(""), zC, ZC)
          }))
        } {
          let ZC = zC.includesShadersStore[CC];
          if (fC[2]) {
            const CC = fC[3].split(",");
            for (let zC = 0; zC < CC.length; zC += 2) {
              const QC = new RegExp(CC[zC], "g"),
                wC = CC[zC + 1];
              ZC = ZC.replace(QC, wC)
            }
          }
          if (fC[4]) {
            const CC = fC[5];
            if (-1 !== CC.indexOf("..")) {
              const QC = CC.split(".."),
                wC = parseInt(QC[0]);
              let bC = parseInt(QC[1]),
                nC = ZC.slice(0);
              ZC = "", isNaN(bC) && (bC = zC.indexParameters[QC[1]]);
              for (let CC = wC; CC < bC; CC++) zC.supportsUniformBuffers || (nC = nC.replace(GC, ((CC, zC) => zC + "{X}"))), ZC += nC.replace(RC, CC.toString()) + "\n"
            } else zC.supportsUniformBuffers || (ZC = ZC.replace(GC, ((CC, zC) => zC + "{X}"))), ZC = ZC.replace(RC, CC)
          }
          const QC = [];
          for (const CC of wC) {
            const zC = CC.split(fC[0]);
            for (let CC = 0; CC < zC.length - 1; CC++) QC.push(zC[CC]), QC.push(ZC);
            QC.push(zC[zC.length - 1])
          }
          wC = QC, bC = bC || ZC.indexOf("#include<") >= 0 || ZC.indexOf("#include <") >= 0
        }
      }
      AC.length = 0;
      const nC = wC.join("");
      bC ? mC(nC.toString(), zC, ZC) : ZC(nC)
    }
    const HC = {
      loadFile: (CC, zC, ZC, QC, wC, bC) => {
        throw (0, NC.i)("FileTools")
      }
    }
  },
  39692: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      h: () => bC,
      l: () => fC,
      n: () => nC,
      o: () => oC
    });
    var QC = ZC(39694);
    const wC = {};

    function bC(CC, zC) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (zC ? zC + "\n" : "") + CC
    }

    function nC(CC, zC, ZC, bC, nC, fC, oC) {
      const qC = oC || wC.loadFile;
      if (!qC) throw (0, QC.i)("FileTools");
      return qC(CC, zC, ZC, bC, nC, fC)
    }

    function fC(CC, zC, ZC, QC) {
      if (CC) return zC ? CC.IS_NDC_HALF_ZRANGE = "" : delete CC.IS_NDC_HALF_ZRANGE, ZC ? CC.USE_REVERSE_DEPTHBUFFER = "" : delete CC.USE_REVERSE_DEPTHBUFFER, void(QC ? CC.USE_EXACT_SRGB_CONVERSIONS = "" : delete CC.USE_EXACT_SRGB_CONVERSIONS);
      {
        let CC = "";
        return zC && (CC += "#define IS_NDC_HALF_ZRANGE"), ZC && (CC && (CC += "\n"), CC += "#define USE_REVERSE_DEPTHBUFFER"), QC && (CC && (CC += "\n"), CC += "#define USE_EXACT_SRGB_CONVERSIONS"), CC
      }
    }

    function oC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        QC = arguments.length > 3 ? arguments[3] : void 0;
      switch (CC) {
        case 3: {
          const CC = new Int8Array(zC);
          return QC && CC.set(new Int8Array(QC)), CC
        }
        case 0: {
          const CC = new Uint8Array(zC);
          return QC && CC.set(new Uint8Array(QC)), CC
        }
        case 4: {
          const CC = "number" !== typeof zC ? new Int16Array(zC) : new Int16Array(ZC ? zC / 2 : zC);
          return QC && CC.set(new Int16Array(QC)), CC
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const CC = "number" !== typeof zC ? new Uint16Array(zC) : new Uint16Array(ZC ? zC / 2 : zC);
          return QC && CC.set(new Uint16Array(QC)), CC
        }
        case 6: {
          const CC = "number" !== typeof zC ? new Int32Array(zC) : new Int32Array(ZC ? zC / 4 : zC);
          return QC && CC.set(new Int32Array(QC)), CC
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const CC = "number" !== typeof zC ? new Uint32Array(zC) : new Uint32Array(ZC ? zC / 4 : zC);
          return QC && CC.set(new Uint32Array(QC)), CC
        }
        case 1: {
          const CC = "number" !== typeof zC ? new Float32Array(zC) : new Float32Array(ZC ? zC / 4 : zC);
          return QC && CC.set(new Float32Array(QC)), CC
        }
      }
      const wC = new Uint8Array(zC);
      return QC && wC.set(new Uint8Array(QC)), wC
    }
  },
  39694: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC,
      d: () => FC,
      f: () => oC,
      i: () => wC
    });
    const QC = {};

    function wC(CC) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !QC[CC]) return QC[CC] = !0, `${CC} needs to be imported before as it contains a side-effect required by your code.`
    }
    const bC = {};
    let nC = !1,
      fC = 0;

    function oC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const QC = function() {
        if ((ZC || nC) && 0 === fC) {
          const ZC = `${CC}.${zC}`;
          bC[ZC] || (bC[ZC] = !0, console.warn(`[Babylon.js] ${ZC}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return QC.__isSideEffectStub = !0, QC
    }

    function qC(CC) {
      return !!CC && !CC.__isSideEffectStub
    }

    function FC(CC, zC) {
      return {
        get() {},
        set(CC) {
          Object.defineProperty(this, zC, {
            value: CC,
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
  39680: (CC, zC, ZC) => {
    function QC() {
      return "undefined" !== typeof window
    }

    function wC() {
      return "undefined" !== typeof navigator
    }

    function bC() {
      return "undefined" !== typeof document
    }

    function nC(CC) {
      let zC = "",
        ZC = CC.firstChild;
      for (; ZC;) 3 === ZC.nodeType && (zC += ZC.textContent), ZC = ZC.nextSibling;
      return zC
    }
    ZC.d(zC, {
      e: () => nC,
      f: () => bC,
      h: () => wC,
      k: () => QC
    })
  },
  39872: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC,
      f: () => wC,
      j: () => bC
    });
    class QC extends Error {}
    QC._setPrototypeOf = Object.setPrototypeOf || ((CC, zC) => (CC.__proto__ = zC, CC));
    const wC = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class bC extends QC {
      constructor(CC, zC, ZC) {
        super(CC), this.errorCode = zC, this.innerError = ZC, this.name = "RuntimeError", QC._setPrototypeOf(this, bC.prototype)
      }
    }
  },
  39865: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => dC,
      e: () => RC,
      g: () => eC,
      h: () => KC,
      i: () => iC,
      m: () => JC,
      o: () => IC,
      p: () => XC,
      r: () => vC,
      v: () => AC
    });
    var QC = ZC(39867),
      wC = ZC(39680),
      bC = ZC(36987);
    class nC {}
    nC.FilesToLoad = {};
    var fC = ZC(39872),
      oC = ZC(39878),
      qC = ZC(36985),
      FC = ZC(39692),
      WC = ZC(39703),
      NC = ZC(38507),
      MC = ZC(39712),
      gC = ZC(39882);
    const SC = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class pC extends fC.j {
      constructor(CC, zC) {
        super(CC, fC.f.LoadFileError), this.name = "LoadFileError", fC.d._setPrototypeOf(this, pC.prototype), zC instanceof QC.d ? this.request = zC : this.file = zC
      }
    }
    class PC extends fC.j {
      constructor(CC, zC) {
        super(CC, fC.f.RequestFileError), this.request = zC, this.name = "RequestFileError", fC.d._setPrototypeOf(this, PC.prototype)
      }
    }
    class GC extends fC.j {
      constructor(CC, zC) {
        super(CC, fC.f.ReadFileError), this.file = zC, this.name = "ReadFileError", fC.d._setPrototypeOf(this, GC.prototype)
      }
    }
    const RC = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (ZC, QC, wC) => 0 !== QC.status || wC >= CC || -1 !== ZC.indexOf("file:") ? -1 : Math.pow(2, wC) * zC
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: CC => CC,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: CC => CC,
        CleanUrl: CC => CC = CC.replace(/#/gm, "%23")
      },
      AC = (CC, zC) => {
        if ((!CC || 0 !== CC.indexOf("data:")) && RC.CorsBehavior)
          if ("string" === typeof RC.CorsBehavior || RC.CorsBehavior instanceof String) zC.crossOrigin = RC.CorsBehavior;
          else {
            const ZC = RC.CorsBehavior(CC);
            ZC && (zC.crossOrigin = ZC)
          }
      },
      xC = {
        getRequiredSize: null
      },
      JC = function(CC, zC, ZC, wC) {
        let bC, fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          FC = arguments.length > 5 ? arguments[5] : void 0,
          WC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qC.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !WC?._features.forceBitmapOverHTMLImageElement) return ZC("LoadImage is only supported in web or BabylonNative environments."), null;
        if (WC?._features.forceBitmapOverHTMLImageElement && "string" !== typeof CC && "undefined" !== typeof Blob) {
          let QC;
          if (CC instanceof Blob) QC = CC;
          else {
            const zC = CC instanceof ArrayBuffer ? CC : (0, gC.i)(CC);
            QC = new Blob([zC], {
              type: fC
            })
          }
          return WC.createImageBitmap(QC, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...FC
          }).then(zC).catch((zC => {
            ZC && ZC("Error while trying to load image: " + CC, zC)
          })), null
        }
        let NC = !1;
        if (CC instanceof ArrayBuffer || ArrayBuffer.isView(CC))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let zC;
            zC = CC instanceof ArrayBuffer ? CC : (0, gC.i)(CC), bC = URL.createObjectURL(new Blob([zC], {
              type: fC
            })), NC = !0
          } else bC = `data:${fC};base64,` + (0, oC.i)(CC);
        else CC instanceof Blob ? (bC = URL.createObjectURL(CC), NC = !0) : (bC = RC.CleanUrl(CC), bC = RC.PreprocessUrl(bC));
        const MC = zC => {
          if (ZC) {
            const QC = bC || CC.toString();
            ZC(`Error while trying to load image: ${0===QC.indexOf("http")||QC.length<=128?QC:QC.slice(0,128)+"..."}`, zC)
          }
        };
        if (WC?._features.forceBitmapOverHTMLImageElement) return iC(bC, (QC => {
          WC.createImageBitmap(new Blob([QC], {
            type: fC
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...FC
          }).then((CC => {
            zC(CC), NC && URL.revokeObjectURL(bC)
          })).catch((zC => {
            ZC && ZC("Error while trying to load image: " + CC, zC)
          }))
        }), void 0, wC || void 0, !0, ((CC, zC) => {
          MC(zC)
        })), null;
        const SC = new Image;
        if (xC.getRequiredSize) {
          const zC = xC.getRequiredSize(CC);
          zC.width && (SC.width = zC.width), zC.height && (SC.height = zC.height)
        }
        AC(bC, SC);
        const pC = [],
          PC = () => {
            for (const CC of pC) CC.target.removeEventListener(CC.name, CC.handler);
            pC.length = 0
          };
        pC.push({
          target: SC,
          name: "load",
          handler: () => {
            PC(), zC(SC), NC && SC.src && URL.revokeObjectURL(SC.src)
          }
        }), pC.push({
          target: SC,
          name: "error",
          handler: CC => {
            PC(), MC(CC), NC && SC.src && URL.revokeObjectURL(SC.src)
          }
        }), pC.push({
          target: document,
          name: "securitypolicyviolation",
          handler: CC => {
            if (CC.blockedURI !== SC.src || "Cg" === CC.disposition) return;
            PC();
            const zC = new Error(`CSP violation of policy ${CC.effectiveDirective} ${CC.blockedURI}. Current policy is ${CC.originalPolicy}`);
            qC.c.UseFallbackTexture = !1, MC(zC), NC && SC.src && URL.revokeObjectURL(SC.src), SC.src = ""
          }
        }), (() => {
          for (const CC of pC) CC.target.addEventListener(CC.name, CC.handler)
        })();
        const GC = "blob:" === bC.substring(0, 5),
          JC = "data:" === bC.substring(0, 5),
          IC = () => {
            GC || JC || !QC.d.IsCustomRequestAvailable ? SC.src = bC : iC(bC, ((CC, zC, ZC) => {
              const QC = new Blob([CC], {
                  type: !fC && ZC ? ZC : fC
                }),
                wC = URL.createObjectURL(QC);
              NC = !0, SC.src = wC
            }), void 0, wC || void 0, !0, ((CC, zC) => {
              MC(zC)
            }))
          },
          vC = () => {
            wC && wC.loadImage(bC, SC)
          };
        if (!GC && !JC && wC && wC.enableTexturesOffline) wC.open(vC, IC);
        else {
          if (-1 !== bC.indexOf("file:")) {
            const CC = decodeURIComponent(bC.substring(5).toLowerCase());
            if (nC.FilesToLoad[CC] && "undefined" !== typeof URL) {
              try {
                let zC;
                try {
                  zC = URL.createObjectURL(nC.FilesToLoad[CC])
                } catch (eC) {
                  zC = URL.createObjectURL(nC.FilesToLoad[CC])
                }
                SC.src = zC, NC = !0
              } catch (hC) {
                SC.src = ""
              }
              return SC
            }
          }
          IC()
        }
        return SC
      },
      IC = (CC, zC, ZC, QC, wC) => {
        const nC = new FileReader,
          fC = {
            onCompleteObservable: new bC.d,
            abort: () => nC.abort()
          };
        return nC.onloadend = () => fC.onCompleteObservable.notifyObservers(fC), wC && (nC.onerror = () => {
          wC(new GC(`Unable to read ${CC.name}`, CC))
        }), nC.onload = CC => {
          zC(CC.target.result)
        }, ZC && (nC.onprogress = ZC), QC ? nC.readAsArrayBuffer(CC) : nC.readAsText(CC), fC
      },
      iC = (CC, zC, ZC, QC, wC, oC, qC) => {
        if (CC.name) return IC(CC, zC, ZC, wC, oC ? CC => {
          oC(void 0, CC)
        } : void 0);
        const FC = CC;
        if (-1 !== FC.indexOf("file:")) {
          let CC = decodeURIComponent(FC.substring(5).toLowerCase());
          0 === CC.indexOf("./") && (CC = CC.substring(2));
          const QC = nC.FilesToLoad[CC];
          if (QC) return IC(QC, zC, ZC, wC, oC ? CC => oC(void 0, new pC(CC.message, CC.file)) : void 0)
        }
        const {
          match: WC,
          type: gC
        } = YC(FC);
        if (WC) {
          const CC = {
            onCompleteObservable: new bC.d,
            abort: () => () => {}
          };
          try {
            const CC = wC ? dC(FC) : mC(FC);
            zC(CC, void 0, gC)
          } catch (fC) {
            oC ? oC(void 0, fC) : NC.c.Error(fC.message || "Failed to parse the Data URL")
          }
          return MC.d.SetImmediate((() => {
            CC.onCompleteObservable.notifyObservers(CC)
          })), CC
        }
        return vC(FC, ((CC, ZC) => {
          zC(CC, ZC?.responseURL, ZC?.getResponseHeader("content-type"))
        }), ZC, QC, wC, oC ? CC => {
          oC(CC.request, new pC(CC.message, CC.request))
        } : void 0, qC)
      },
      vC = (CC, zC, ZC, nC, fC, oC, FC) => {
        null !== nC && (nC ?? (nC = qC.c.LastCreatedScene?.offlineProvider)), CC = RC.CleanUrl(CC), CC = RC.PreprocessUrl(CC);
        const WC = RC.BaseUrl + CC;
        let MC = !1;
        const gC = {
            onCompleteObservable: new bC.d,
            abort: () => MC = !0
          },
          SC = () => {
            let CC, bC = new QC.d,
              nC = null;
            const qC = () => {
              bC && (ZC && bC.removeEventListener("progress", ZC), CC && bC.removeEventListener("readystatechange", CC), bC.removeEventListener("loadend", SC))
            };
            let SC = () => {
              qC(), gC.onCompleteObservable.notifyObservers(gC), gC.onCompleteObservable.clear(), ZC = void 0, CC = null, SC = null, oC = void 0, FC = void 0, zC = void 0
            };
            gC.abort = () => {
              MC = !0, SC && SC(), bC && bC.readyState !== (XMLHttpRequest.DONE || 4) && bC.abort(), null !== nC && (clearTimeout(nC), nC = null), bC = null
            };
            const pC = CC => {
                const zC = CC.message || "Unknown error";
                oC && bC ? oC(new PC(zC, bC)) : NC.c.Error(zC)
              },
              GC = NC => {
                if (bC) {
                  if (bC.open("GET", WC), FC) try {
                    FC(bC)
                  } catch (gC) {
                    return void pC(gC)
                  }
                  fC && (bC.responseType = "arraybuffer"), ZC && bC.addEventListener("progress", ZC), SC && bC.addEventListener("loadend", SC), CC = () => {
                    if (!MC && bC && bC.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (CC && bC.removeEventListener("readystatechange", CC), bC.status >= 200 && bC.status < 300 || 0 === bC.status && (!(0, wC.k)() || hC())) {
                        const CC = fC ? bC.response : bC.responseText;
                        if (null !== CC) {
                          try {
                            zC && zC(CC, bC)
                          } catch (gC) {
                            pC(gC)
                          }
                          return
                        }
                      }
                      const ZC = RC.DefaultRetryStrategy;
                      if (ZC) {
                        const CC = ZC(WC, bC, NC);
                        if (-1 !== CC) return qC(), bC = new QC.d, void(nC = setTimeout((() => GC(NC + 1)), CC))
                      }
                      const FC = new PC("Error status: " + bC.status + " " + bC.statusText + " - Unable to load " + WC, bC);
                      oC && oC(FC)
                    }
                  }, bC.addEventListener("readystatechange", CC), bC.send()
                }
              };
            GC(0)
          };
        if (nC && nC.enableSceneOffline && !CC.startsWith("blob:")) {
          const QC = CC => {
              CC && CC.status > 400 ? oC && oC(CC) : SC()
            },
            wC = () => {
              nC && nC.loadFile(RC.BaseUrl + CC, (CC => {
                !MC && zC && zC(CC), gC.onCompleteObservable.notifyObservers(gC)
              }), ZC ? CC => {
                !MC && ZC && ZC(CC)
              } : void 0, QC, fC)
            };
          nC.open(wC, QC)
        } else SC();
        return gC
      },
      eC = CC => {
        const {
          match: zC,
          type: ZC
        } = YC(CC);
        if (zC) return ZC || void 0;
        const QC = CC.lastIndexOf(".");
        switch (CC.substring(QC + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "Wm":
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
      hC = () => "undefined" !== typeof location && "file:" === location.protocol,
      KC = CC => SC.test(CC),
      YC = CC => {
        const zC = SC.exec(CC);
        if (null === zC || 0 === zC.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: zC[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function dC(CC) {
      return (0, oC.d)(CC.split(",")[1])
    }
    const mC = CC => (0, oC.f)(CC.split(",")[1]);
    let HC;
    const EC = (CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) => {
      HC = {
        DecodeBase64UrlToBinary: CC,
        DecodeBase64UrlToString: zC,
        DefaultRetryStrategy: ZC.DefaultRetryStrategy,
        BaseUrl: ZC.BaseUrl,
        CorsBehavior: ZC.CorsBehavior,
        PreprocessUrl: ZC.PreprocessUrl,
        IsBase64DataUrl: QC,
        IsFileURL: wC,
        LoadFile: bC,
        LoadImage: nC,
        ReadFile: fC,
        RequestFile: oC,
        SetCorsBehavior: qC
      }, Object.defineProperty(HC, "DefaultRetryStrategy", {
        get: function() {
          return ZC.DefaultRetryStrategy
        },
        set: function(CC) {
          ZC.DefaultRetryStrategy = CC
        }
      }), Object.defineProperty(HC, "BaseUrl", {
        get: function() {
          return ZC.BaseUrl
        },
        set: function(CC) {
          ZC.BaseUrl = CC
        }
      }), Object.defineProperty(HC, "PreprocessUrl", {
        get: function() {
          return ZC.PreprocessUrl
        },
        set: function(CC) {
          ZC.PreprocessUrl = CC
        }
      }), Object.defineProperty(HC, "CorsBehavior", {
        get: function() {
          return ZC.CorsBehavior
        },
        set: function(CC) {
          ZC.CorsBehavior = CC
        }
      })
    };
    let lC = !1;

    function XC() {
      lC || (lC = !0, EC(dC, mC, RC, KC, hC, iC, JC, IC, vC, AC), FC.e.loadFile = iC, FC.e.loadImage = JC, WC.o.loadFile = iC)
    }
  },
  39889: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC,
      h: () => bC,
      k: () => nC
    });
    let QC = null;

    function wC() {
      if (QC) return QC;
      const CC = new ArrayBuffer(4),
        zC = new Float32Array(CC),
        ZC = new Uint32Array(CC),
        wC = new Uint32Array(512),
        bC = new Uint32Array(512);
      for (let QC = 0; QC < 256; ++QC) {
        const CC = QC - 127;
        CC < -24 ? (wC[QC] = 0, wC[256 | QC] = 32768, bC[QC] = 24, bC[256 | QC] = 24) : CC < -14 ? (wC[QC] = 1024 >> -CC - 14, wC[256 | QC] = 1024 >> -CC - 14 | 32768, bC[QC] = -CC - 1, bC[256 | QC] = -CC - 1) : CC <= 15 ? (wC[QC] = CC + 15 << 10, wC[256 | QC] = CC + 15 << 10 | 32768, bC[QC] = 13, bC[256 | QC] = 13) : CC < 128 ? (wC[QC] = 31744, wC[256 | QC] = 64512, bC[QC] = 24, bC[256 | QC] = 24) : (wC[QC] = 31744, wC[256 | QC] = 64512, bC[QC] = 13, bC[256 | QC] = 13)
      }
      const nC = new Uint32Array(2048),
        fC = new Uint32Array(64),
        oC = new Uint32Array(64);
      for (let QC = 1; QC < 1024; ++QC) {
        let CC = QC << 13,
          zC = 0;
        for (; 0 === (8388608 & CC);) CC <<= 1, zC -= 8388608;
        CC &= -8388609, zC += 947912704, nC[QC] = CC | zC
      }
      for (let QC = 1024; QC < 2048; ++QC) nC[QC] = 939524096 + (QC - 1024 << 13);
      for (let QC = 1; QC < 31; ++QC) fC[QC] = QC << 23;
      fC[31] = 1199570944, fC[32] = 2147483648;
      for (let QC = 33; QC < 63; ++QC) fC[QC] = 2147483648 + (QC - 32 << 23);
      fC[63] = 3347054592;
      for (let QC = 1; QC < 64; ++QC) 32 !== QC && (oC[QC] = 1024);
      return QC = {
        floatView: zC,
        uint32View: ZC,
        baseTable: wC,
        shiftTable: bC,
        mantissaTable: nC,
        exponentTable: fC,
        offsetTable: oC
      }, QC
    }
    const bC = 65504;

    function nC(CC) {
      const zC = wC();
      zC.floatView[0] = CC;
      const ZC = zC.uint32View[0],
        QC = ZC >> 23 & 511;
      return zC.baseTable[QC] + ((8388607 & ZC) >> zC.shiftTable[QC])
    }

    function fC(CC) {
      const zC = wC();
      return zC.uint32View[0] = zC.mantissaTable[zC.offsetTable[CC >> 10] + (1023 & CC)] + zC.exponentTable[CC >> 10], zC.floatView[0]
    }
  },
  39878: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      f: () => wC,
      i: () => QC
    });
    const QC = CC => {
        const zC = ArrayBuffer.isView(CC) ? new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength) : new Uint8Array(CC);
        return "function" === typeof zC.toBase64 ? zC.toBase64() : function(CC) {
          const zC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let ZC, QC, wC, bC, nC, fC, oC, qC = "",
            FC = 0;
          for (; FC < CC.length;) ZC = CC[FC++], QC = FC < CC.length ? CC[FC++] : Number.NaN, wC = FC < CC.length ? CC[FC++] : Number.NaN, bC = ZC >> 2, nC = (3 & ZC) << 4 | QC >> 4, fC = (15 & QC) << 2 | wC >> 6, oC = 63 & wC, isNaN(QC) ? fC = oC = 64 : isNaN(wC) && (oC = 64), qC += zC.charAt(bC) + zC.charAt(nC) + zC.charAt(fC) + zC.charAt(oC);
          return qC
        }(zC)
      },
      wC = CC => atob(CC),
      bC = CC => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(CC).buffer : function(CC) {
        const zC = wC(CC),
          ZC = zC.length,
          QC = new Uint8Array(new ArrayBuffer(ZC));
        for (let wC = 0; wC < ZC; wC++) QC[wC] = zC.charCodeAt(wC);
        return QC.buffer
      }(CC)
  },
  39712: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      g: () => nC
    });
    let QC = [];
    class wC {
      static SetImmediate(CC) {
        0 === QC.length && setTimeout((() => {
          const CC = QC;
          QC = [];
          for (const zC of CC) zC()
        }), 1), QC.push(CC)
      }
    }

    function bC(CC, zC, ZC) {
      try {
        if (CC()) return zC(), !0
      } catch (QC) {
        return ZC?.(QC), !0
      }
      return !1
    }
    const nC = function(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        nC = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && bC(CC, zC, ZC)) return null;
      const fC = setInterval((() => {
        bC(CC, zC, ZC) ? clearInterval(fC) : (wC -= QC, wC < 0 && (clearInterval(fC), ZC?.(new Error("Operation timed out after maximum retries. " + (nC || "")), !0)))
      }), QC);
      return () => clearInterval(fC)
    }
  },
  39867: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(QC.CustomRequestHeaders).length > 0 || QC.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(CC) {
        return CC = (CC = CC.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(CC) {
        return QC.SkipRequestModificationForBabylonCDN && (CC.includes("preview.babylonjs.com") || CC.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(CC) {
        const zC = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (QC._ShouldSkipRequestModifications(CC)) return {
          url: CC,
          headers: zC
        };
        for (const wC in QC.CustomRequestHeaders) {
          const CC = QC.CustomRequestHeaders[wC];
          CC && (zC[wC] = CC)
        }
        const ZC = {
          setRequestHeader: (CC, ZC) => {
            zC[CC] = ZC
          }
        };
        for (const wC of QC.CustomRequestModifiers) {
          if (QC._ShouldSkipRequestModifications(CC)) break;
          const zC = wC(ZC, CC);
          "string" === typeof zC && (CC = zC)
        }
        return {
          url: CC,
          headers: zC
        }
      }
      static async FetchAsync(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ZC = zC.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: wC,
            headers: bC
          } = QC._CollectCustomizations(QC._CleanUrl(CC), zC.headers ?? {});
          return await fetch(wC, {
            method: ZC,
            headers: bC,
            body: zC.body ?? void 0
          })
        }
        return await new Promise(((wC, bC) => {
          const nC = new QC;
          nC.responseType = "arraybuffer", nC.addEventListener("readystatechange", (() => {
            if (4 === nC.readyState)
              if (nC.status >= 200 && nC.status < 300) {
                const CC = "undefined" !== typeof Headers ? new Headers : void 0,
                  zC = nC.getResponseHeader("Content-Type");
                zC && CC && CC.set("Content-Type", zC), "undefined" !== typeof Response ? wC(new Response(nC.response, {
                  status: nC.status,
                  statusText: nC.statusText,
                  headers: CC
                })) : wC({
                  ok: !0,
                  status: nC.status,
                  statusText: nC.statusText,
                  headers: {
                    get: CC => nC.getResponseHeader(CC)
                  },
                  arrayBuffer: async () => await Promise.resolve(nC.response)
                })
              } else bC(new Error(`HTTP ${nC.status} loading '${nC.requestURL}': ${nC.statusText}`))
          })), nC.open(ZC, CC, zC.headers), nC.send(zC.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(CC) {
        this._xhr.onprogress = CC
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
      set responseType(CC) {
        this._xhr.responseType = CC
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(CC) {
        this._xhr.timeout = CC
      }
      addEventListener(CC, zC, ZC) {
        this._xhr.addEventListener(CC, zC, ZC)
      }
      removeEventListener(CC, zC, ZC) {
        this._xhr.removeEventListener(CC, zC, ZC)
      }
      abort() {
        this._xhr.abort()
      }
      send(CC) {
        this._xhr.send(CC)
      }
      open(CC, zC, ZC) {
        const {
          url: wC,
          headers: bC
        } = QC._CollectCustomizations(zC, ZC);
        this._requestURL = QC._CleanUrl(wC), this._xhr.open(CC, this._requestURL, !0);
        for (const QC in bC) this._xhr.setRequestHeader(QC, bC[QC])
      }
      setRequestHeader(CC, zC) {
        this._xhr.setRequestHeader(CC, zC)
      }
      getResponseHeader(CC) {
        return this._xhr.getResponseHeader(CC)
      }
    }
    QC.CustomRequestHeaders = {}, QC.CustomRequestModifiers = new Array, QC.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);