export const id = 244;
export const ids = [244];
export const modules = {
  39213: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      f: () => BD,
      j: () => QD,
      k: () => MD,
      o: () => wD,
      r: () => bD,
      u: () => SD
    });
    var ID = cD(38048),
      pD = cD(39215);

    function iD(DD, CD, cD, ID) {
      switch (CD) {
        case 5120: {
          let CD = DD.getInt8(cD);
          return ID && (CD = Math.max(CD / 127, -1)), CD
        }
        case 5121: {
          let CD = DD.getUint8(cD);
          return ID && (CD /= 255), CD
        }
        case 5122: {
          let CD = DD.getInt16(cD, !0);
          return ID && (CD = Math.max(CD / 32767, -1)), CD
        }
        case 5123: {
          let CD = DD.getUint16(cD, !0);
          return ID && (CD /= 65535), CD
        }
        case 5131:
          return (0, pD.c)(DD.getUint16(cD, !0));
        case 5124:
          return DD.getInt32(cD, !0);
        case 5125:
          return DD.getUint32(cD, !0);
        case 5126:
          return DD.getFloat32(cD, !0);
        default:
          throw new Error(`Invalid component type ${CD}`)
      }
    }

    function fD(DD, CD, cD, ID, iD) {
      switch (CD) {
        case 5120:
          ID && (iD = Math.round(127 * iD)), DD.setInt8(cD, iD);
          break;
        case 5121:
          ID && (iD = Math.round(255 * iD)), DD.setUint8(cD, iD);
          break;
        case 5122:
          ID && (iD = Math.round(32767 * iD)), DD.setInt16(cD, iD, !0);
          break;
        case 5123:
          ID && (iD = Math.round(65535 * iD)), DD.setUint16(cD, iD, !0);
          break;
        case 5131:
          DD.setUint16(cD, (0, pD.i)(iD), !0);
          break;
        case 5124:
          DD.setInt32(cD, iD, !0);
          break;
        case 5125:
          DD.setUint32(cD, iD, !0);
          break;
        case 5126:
          DD.setFloat32(cD, iD, !0);
          break;
        default:
          throw new Error(`Invalid component type ${CD}`)
      }
    }

    function bD(DD) {
      switch (DD) {
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
          throw new Error(`Invalid type '${DD}'`)
      }
    }

    function QD(DD, CD, cD, ID, pD, QD, wD, SD) {
      const BD = new Array(ID),
        yD = new Array(ID);
      if (DD instanceof Array) {
        let pD = CD / 4;
        const iD = cD / 4;
        for (let CD = 0; CD < QD; CD += ID) {
          for (let CD = 0; CD < ID; CD++) BD[CD] = yD[CD] = DD[pD + CD];
          SD(yD, CD);
          for (let CD = 0; CD < ID; CD++) BD[CD] !== yD[CD] && (DD[pD + CD] = yD[CD]);
          pD += iD
        }
      } else {
        const MD = ArrayBuffer.isView(DD) ? new DataView(DD.buffer, DD.byteOffset, DD.byteLength) : new DataView(DD),
          tD = bD(pD);
        for (let DD = 0; DD < QD; DD += ID) {
          for (let DD = 0, cD = CD; DD < ID; DD++, cD += tD) BD[DD] = yD[DD] = iD(MD, pD, cD, wD);
          SD(yD, DD);
          for (let DD = 0, cD = CD; DD < ID; DD++, cD += tD) BD[DD] !== yD[DD] && fD(MD, pD, cD, wD, yD[DD]);
          CD += cD
        }
      }
    }

    function wD(DD, CD, cD, pD, iD, fD, wD, SD) {
      const BD = CD * bD(cD),
        yD = wD * CD;
      if (5126 !== cD || iD !== BD) {
        const ID = new Float32Array(yD);
        return QD(DD, pD, iD, CD, cD, yD, fD, ((DD, cD) => {
          for (let pD = 0; pD < CD; pD++) ID[cD + pD] = DD[pD]
        })), ID
      }
      if (!(DD instanceof Array || DD instanceof Float32Array) || 0 !== pD || DD.length !== yD) {
        if (DD instanceof Array) {
          const CD = pD / 4;
          return DD.slice(CD, CD + yD)
        }
        if (ArrayBuffer.isView(DD)) {
          const CD = DD.byteOffset + pD;
          return 0 !== (3 & CD) && (ID.e.Warn("Float array must be aligned to 4-bytes border"), SD = !0), SD ? new Float32Array(DD.buffer.slice(CD, CD + yD * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(DD.buffer, CD, yD)
        }
        return new Float32Array(DD, pD, yD)
      }
      return SD ? DD.slice() : DD
    }

    function SD(DD, CD, cD, pD, iD, fD, wD) {
      const SD = bD(cD),
        BD = function(DD) {
          switch (DD) {
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
              throw new Error(`Invalid component type '${DD}'`)
          }
        }(cD),
        yD = fD * CD;
      if (Array.isArray(DD)) {
        if (0 !== (3 & pD) || 0 !== (3 & iD)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const ID = pD / 4,
          bD = iD / 4;
        if (ID + (fD - 1) * bD + CD > DD.length) throw new Error("Last accessed index is out of bounds.");
        if (bD < CD) throw new Error("Data stride cannot be smaller than the component size.");
        if (bD !== CD) {
          const ID = new BD(yD);
          return QD(DD, pD, iD, CD, cD, yD, !1, ((DD, cD) => {
            for (let pD = 0; pD < CD; pD++) ID[cD + pD] = DD[pD]
          })), ID
        }
        return new BD(DD.slice(ID, ID + yD))
      }
      let MD, tD = pD;
      ArrayBuffer.isView(DD) ? (MD = DD.buffer, tD += DD.byteOffset) : MD = DD;
      if (tD + (fD - 1) * iD + CD * SD > MD.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const ZD = CD * SD;
      if (iD < ZD) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (iD !== ZD) {
        const DD = new BD(yD),
          cD = new Uint8Array(MD, tD),
          ID = new Uint8Array(DD.buffer),
          pD = CD * SD;
        for (let CD = 0, bD = 0, QD = 0; CD < fD; CD++, bD += iD, QD += pD) ID.set(cD.subarray(bD, bD + pD), QD);
        return DD
      }
      return 1 !== SD && 0 !== (tD & SD - 1) && (ID.e.Warn("Array must be aligned to border of element size. Data will be copied."), wD = !0), wD ? new BD(MD.slice(tD, tD + yD * SD)) : new BD(MD, tD, yD)
    }

    function BD(DD, CD, cD, pD, iD, fD, wD, SD) {
      const BD = CD * bD(cD),
        yD = wD * CD;
      if (SD.length !== yD) throw new Error("Output length is not valid");
      if (5126 === cD && iD === BD)
        if (DD instanceof Array) {
          const CD = pD / 4;
          SD.set(DD, CD)
        } else if (ArrayBuffer.isView(DD)) {
        const CD = DD.byteOffset + pD;
        if (0 !== (3 & CD)) return ID.e.Warn("Float array must be aligned to 4-bytes border"), void SD.set(new Float32Array(DD.buffer.slice(CD, CD + yD * Float32Array.BYTES_PER_ELEMENT)));
        const cD = new Float32Array(DD.buffer, CD, yD);
        SD.set(cD)
      } else {
        const CD = new Float32Array(DD, pD, yD);
        SD.set(CD)
      } else QD(DD, pD, iD, CD, cD, yD, fD, ((DD, cD) => {
        for (let ID = 0; ID < CD; ID++) SD[cD + ID] = DD[ID]
      }))
    }

    function yD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(DD)) {
        for (let pD = 0; pD < CD; pD++)
          if (DD[cD + pD] - ID > 65535) return !0;
        return !1
      }
      return 4 === DD.BYTES_PER_ELEMENT
    }

    function MD(DD) {
      const CD = DD.buffer;
      if (CD instanceof ArrayBuffer) return DD;
      const cD = new ArrayBuffer(DD.byteLength);
      return new Uint8Array(cD).set(new Uint8Array(CD, DD.byteOffset, DD.byteLength)), cD
    }
  },
  39035: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => PD,
      c: () => nD,
      k: () => OD,
      g: () => aD,
      o: () => VD
    });
    class ID {
      constructor() {
        this.children = []
      }
      isValid(DD) {
        return !0
      }
      process(DD, CD, cD) {
        let ID = "";
        if (this.line) {
          let cD = this.line;
          const pD = CD.processor;
          if (pD) {
            pD.lineProcessor && (cD = pD.lineProcessor(cD, CD.isFragment, CD.processingContext));
            const ID = CD.processor?.attributeKeywordName ?? "attribute",
              iD = CD.isFragment && CD.processor?.varyingFragmentKeywordName ? CD.processor?.varyingFragmentKeywordName : !CD.isFragment && CD.processor?.varyingVertexKeywordName ? CD.processor?.varyingVertexKeywordName : "varying";
            if (!CD.isFragment && pD.attributeProcessor && this.line.startsWith(ID)) cD = pD.attributeProcessor(this.line, DD, CD.processingContext);
            else if (pD.varyingProcessor && (pD.varyingCheck?.(this.line, CD.isFragment) || !pD.varyingCheck && this.line.startsWith(iD))) cD = pD.varyingProcessor(this.line, CD.isFragment, DD, CD.processingContext);
            else if (pD.uniformProcessor && pD.uniformRegexp && pD.uniformRegexp.test(this.line)) CD.lookForClosingBracketForUniformBuffer || (cD = pD.uniformProcessor(this.line, CD.isFragment, DD, CD.processingContext));
            else if (pD.uniformBufferProcessor && pD.uniformBufferRegexp && pD.uniformBufferRegexp.test(this.line)) CD.lookForClosingBracketForUniformBuffer || (cD = pD.uniformBufferProcessor(this.line, CD.isFragment, CD.processingContext), CD.lookForClosingBracketForUniformBuffer = !0);
            else if (pD.textureProcessor && pD.textureRegexp && pD.textureRegexp.test(this.line)) cD = pD.textureProcessor(this.line, CD.isFragment, DD, CD.processingContext);
            else if ((pD.uniformProcessor || pD.uniformBufferProcessor) && this.line.startsWith("uniform") && !CD.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? pD.uniformProcessor && (cD = pD.uniformProcessor(this.line, CD.isFragment, DD, CD.processingContext)) : pD.uniformBufferProcessor && (cD = pD.uniformBufferProcessor(this.line, CD.isFragment, CD.processingContext), CD.lookForClosingBracketForUniformBuffer = !0)
            }
            CD.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (CD.lookForClosingBracketForUniformBuffer = !1, pD.endOfUniformBufferProcessor && (cD = pD.endOfUniformBufferProcessor(this.line, CD.isFragment, CD.processingContext)))
          }
          ID += cD + "\n"
        }
        for (const pD of this.children) ID += pD.process(DD, CD, cD);
        return this.additionalDefineKey && (DD[this.additionalDefineKey] = this.additionalDefineValue || "true", cD[this.additionalDefineKey] = DD[this.additionalDefineKey]), ID
      }
    }
    class pD {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(DD) {
        this._lines.length = 0;
        for (const CD of DD) {
          if (!CD || "\r" === CD) continue;
          if ("#" === CD[0]) {
            this._lines.push(CD);
            continue
          }
          const DD = CD.trim();
          if (!DD) continue;
          if (DD.startsWith("//")) {
            this._lines.push(CD);
            continue
          }
          const cD = DD.indexOf(";");
          if (-1 === cD) this._lines.push(DD);
          else if (cD === DD.length - 1) DD.length > 1 && this._lines.push(DD);
          else {
            const DD = CD.split(";");
            for (let CD = 0; CD < DD.length; CD++) {
              let cD = DD[CD];
              cD && (cD = cD.trim(), cD && this._lines.push(cD + (CD !== DD.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class iD extends ID {
      process(DD, CD, cD) {
        for (let ID = 0; ID < this.children.length; ID++) {
          const pD = this.children[ID];
          if (pD.isValid(DD)) return pD.process(DD, CD, cD)
        }
        return ""
      }
    }
    class fD extends ID {
      isValid(DD) {
        return this.testExpression.isTrue(DD)
      }
    }
    class bD {
      isTrue(DD) {
        return !0
      }
      static postfixToInfix(DD) {
        const CD = [];
        for (const cD of DD)
          if (void 0 === bD._OperatorPriority[cD]) CD.push(cD);
          else {
            const DD = CD[CD.length - 1],
              ID = CD[CD.length - 2];
            CD.length -= 2, CD.push(`(${ID}${cD}${DD})`)
          } return CD[CD.length - 1]
      }
      static infixToPostfix(DD) {
        const CD = bD._InfixToPostfixCache.get(DD);
        if (CD) return CD.accessTime = Date.now(), CD.result;
        if (!DD.includes("&&") && !DD.includes("||") && !DD.includes(")") && !DD.includes("(")) return [DD];
        const cD = [];
        let ID = -1;
        const pD = () => {
            SD = SD.trim(), "" !== SD && (cD.push(SD), SD = "")
          },
          iD = DD => {
            ID < bD._Stack.length - 1 && (bD._Stack[++ID] = DD)
          },
          fD = () => bD._Stack[ID],
          QD = () => -1 === ID ? "!!INVALID EXPRESSION!!" : bD._Stack[ID--];
        let wD = 0,
          SD = "";
        for (; wD < DD.length;) {
          const CD = DD.charAt(wD),
            BD = wD < DD.length - 1 ? DD.substring(wD, 2 + wD) : "";
          if ("(" === CD) SD = "", iD(CD);
          else if (")" === CD) {
            for (pD(); - 1 !== ID && "(" !== fD();) cD.push(QD());
            QD()
          } else if (bD._OperatorPriority[BD] > 1) {
            for (pD(); - 1 !== ID && bD._OperatorPriority[fD()] >= bD._OperatorPriority[BD];) cD.push(QD());
            iD(BD), wD++
          } else SD += CD;
          wD++
        }
        for (pD(); - 1 !== ID;) "(" === fD() ? QD() : cD.push(QD());
        return bD._InfixToPostfixCache.size >= bD.InfixToPostfixCacheLimitSize && bD.ClearCache(), bD._InfixToPostfixCache.set(DD, {
          result: cD,
          accessTime: Date.now()
        }), cD
      }
      static ClearCache() {
        const DD = Array.from(bD._InfixToPostfixCache.entries()).sort(((DD, CD) => DD[1].accessTime - CD[1].accessTime));
        for (let CD = 0; CD < bD.InfixToPostfixCacheCleanupSize; CD++) bD._InfixToPostfixCache.delete(DD[CD][0])
      }
    }
    bD.InfixToPostfixCacheLimitSize = 5e4, bD.InfixToPostfixCacheCleanupSize = 25e3, bD._InfixToPostfixCache = new Map, bD._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, bD._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class QD extends bD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = DD, this.not = CD
      }
      isTrue(DD) {
        let CD = void 0 !== DD[this.define];
        return this.not && (CD = !CD), CD
      }
    }
    class wD extends bD {
      isTrue(DD) {
        return this.leftOperand.isTrue(DD) || this.rightOperand.isTrue(DD)
      }
    }
    class SD extends bD {
      isTrue(DD) {
        return this.leftOperand.isTrue(DD) && this.rightOperand.isTrue(DD)
      }
    }
    class BD extends bD {
      constructor(DD, CD, cD) {
        super(), this.define = DD, this.operand = CD, this.testValue = cD
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(DD) {
        let CD = !1;
        const cD = parseInt(void 0 != DD[this.define] ? DD[this.define] : this.define),
          ID = parseInt(void 0 != DD[this.testValue] ? DD[this.testValue] : this.testValue);
        if (isNaN(cD) || isNaN(ID)) return !1;
        switch (this.operand) {
          case ">":
            CD = cD > ID;
            break;
          case "<":
            CD = cD < ID;
            break;
          case "<=":
            CD = cD <= ID;
            break;
          case ">=":
            CD = cD >= ID;
            break;
          case "==":
            CD = cD === ID;
            break;
          case "!=":
            CD = cD !== ID
        }
        return CD
      }
    }
    var yD = cD(39027),
      MD = cD(39023);
    const tD = /defined\s*?\((.+?)\)/g,
      ZD = /defined\s*?\[(.+?)\]/g,
      oD = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      vD = /__decl__/,
      ND = /light\{X\}.(\w*)/g,
      gD = /\{X\}/g,
      XD = [],
      mD = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function nD(DD) {
      DD.processor && DD.processor.initializeShaders && DD.processor.initializeShaders(DD.processingContext)
    }

    function OD(DD, CD, cD, ID) {
      CD.processor?.preProcessShaderCode && (DD = CD.processor.preProcessShaderCode(DD, CD.isFragment)), aD(DD, CD, (DD => {
        CD.processCodeAfterIncludes && (DD = CD.processCodeAfterIncludes(CD.isFragment ? "fragment" : "vertex", DD, CD.defines));
        const pD = function(DD, CD, cD) {
          let ID = function(DD, CD) {
            if (CD.processor?.noPrecision) return DD;
            const cD = CD.shouldUseHighPrecisionShader; - 1 === DD.indexOf("precision highp float") ? DD = cD ? "precision highp float;\n" + DD : "precision mediump float;\n" + DD : cD || (DD = DD.replace("precision highp float", "precision mediump float"));
            return DD
          }(DD, CD);
          if (!CD.processor) return ID;
          if (0 === CD.processor.shaderLanguage && -1 !== ID.indexOf("#version 3") && (ID = ID.replace("#version 300 es", ""), !CD.processor.parseGLES3)) return ID;
          const pD = CD.defines,
            iD = KD(CD, cD);
          CD.processor.preProcessor && (ID = CD.processor.preProcessor(ID, pD, iD, CD.isFragment, CD.processingContext));
          const fD = {};
          ID = JD(ID, iD, CD, fD), CD.processor.postProcessor && (ID = CD.processor.postProcessor(ID, pD, CD.isFragment, CD.processingContext, cD ? {
            drawBuffersExtensionDisabled: !cD.getCaps().drawBuffersExtension
          } : {}, iD, fD));
          cD?._features.needShaderCodeInlining && (ID = cD.inlineShaderCode(ID));
          return ID
        }(DD, CD, ID);
        cD(pD, DD)
      }))
    }

    function PD(DD, CD, cD) {
      return cD.processor && cD.processor.finalizeShaders ? cD.processor.finalizeShaders(DD, CD, cD.processingContext) : {
        vertexCode: DD,
        fragmentCode: CD
      }
    }

    function HD(DD) {
      const CD = /defined\((.+)\)/.exec(DD);
      if (CD && CD.length) return new QD(CD[1].trim(), "!" === DD[0]);
      const cD = ["==", "!=", ">=", "<=", "<", ">"];
      let ID = "",
        pD = 0;
      for (ID of cD)
        if (pD = DD.indexOf(ID), pD > -1) break;
      if (-1 === pD) return new QD(DD);
      const iD = DD.substring(0, pD).trim(),
        fD = DD.substring(pD + ID.length).trim();
      return new BD(iD, ID, fD)
    }

    function UD(DD, CD) {
      const cD = new fD,
        ID = DD.substring(0, CD);
      let pD = DD.substring(CD);
      return pD = pD.substring(0, (pD.indexOf("//") + 1 || pD.length + 1) - 1).trim(), cD.testExpression = "#ifdef" === ID ? new QD(pD) : "#ifndef" === ID ? new QD(pD, !0) : function(DD) {
        DD = DD.replace(tD, "defined[$1]");
        const CD = bD.infixToPostfix(DD),
          cD = [];
        for (const pD of CD)
          if ("||" !== pD && "&&" !== pD) cD.push(pD);
          else if (cD.length >= 2) {
          let DD = cD[cD.length - 1],
            CD = cD[cD.length - 2];
          cD.length -= 2;
          const ID = "&&" == pD ? new SD : new wD;
          "string" === typeof DD && (DD = DD.replace(ZD, "defined($1)")), "string" === typeof CD && (CD = CD.replace(ZD, "defined($1)")), ID.leftOperand = "string" === typeof CD ? HD(CD) : CD, ID.rightOperand = "string" === typeof DD ? HD(DD) : DD, cD.push(ID)
        }
        let ID = cD[cD.length - 1];
        return "string" === typeof ID && (ID = ID.replace(ZD, "defined($1)")), "string" === typeof ID ? HD(ID) : ID
      }(pD), cD
    }

    function xD(DD, CD, cD, pD) {
      let iD;
      for (; qD(DD, cD, pD);) {
        iD = DD.currentLine;
        const fD = iD.substring(0, 5).toLowerCase();
        if ("#else" === fD) {
          const cD = new ID;
          return CD.children.push(cD), void qD(DD, cD, pD)
        }
        if ("#elif" === fD) {
          const DD = UD(iD, 5);
          CD.children.push(DD), cD = DD
        }
      }
    }

    function qD(DD, CD, cD) {
      for (; DD.canRead;) {
        DD.lineIndex++;
        const pD = DD.currentLine;
        if (pD.indexOf("#") >= 0) {
          const ID = mD.exec(pD);
          if (ID && ID.length) {
            switch (ID[0]) {
              case "#ifdef": {
                const ID = new iD;
                CD.children.push(ID);
                const fD = UD(pD, 6);
                ID.children.push(fD), xD(DD, ID, fD, cD);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const ID = new iD;
                CD.children.push(ID);
                const fD = UD(pD, 7);
                ID.children.push(fD), xD(DD, ID, fD, cD);
                break
              }
              case "#if": {
                const ID = new iD,
                  fD = UD(pD, 3);
                CD.children.push(ID), ID.children.push(fD), xD(DD, ID, fD, cD);
                break
              }
            }
            continue
          }
        }
        const fD = new ID;
        if (fD.line = pD, CD.children.push(fD), "#" === pD[0] && "d" === pD[1]) {
          const DD = pD.replace(";", "").split(" ");
          fD.additionalDefineKey = DD[1], 3 === DD.length && (fD.additionalDefineValue = DD[2])
        }
      }
      return !1
    }

    function JD(DD, CD, cD, iD) {
      const fD = new ID,
        bD = new pD;
      return bD.lineIndex = -1, bD.lines = DD.split("\n"), qD(bD, fD, iD), fD.process(CD, cD, iD)
    }

    function KD(DD, CD) {
      const cD = DD.defines,
        ID = {};
      for (const pD of cD) {
        const DD = pD.replace("#define", "").replace(";", "").trim().split(" ");
        ID[DD[0]] = DD.length > 1 ? DD[1] : ""
      }
      return 0 === DD.processor?.shaderLanguage && (ID.GL_ES = "true"), ID.__VERSION__ = DD.version, ID[DD.platformName] = "true", (0, MD.l)(ID, CD?.isNDCHalfZRange, CD?.vcD, CD?.useExactSrgbConversions), ID
    }

    function aD(DD, CD, cD) {
      let ID;
      for (XD.length = 0; null !== (ID = oD.exec(DD));) XD.push(ID);
      let pD = [DD],
        iD = !1;
      for (const bD of XD) {
        let DD = bD[1];
        if (-1 !== DD.indexOf("__decl__") && (DD = DD.replace(vD, ""), CD.supportsUniformBuffers && (DD = DD.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), DD += "Declaration"), !CD.includesShadersStore[DD]) {
          const ID = CD.shadersRepository + "ShadersInclude/" + DD + ".fx";
          return void VD.loadFile(ID, (ID => {
            CD.includesShadersStore[DD] = ID, aD(pD.join(""), CD, cD)
          }))
        } {
          let cD = CD.includesShadersStore[DD];
          if (bD[2]) {
            const DD = bD[3].split(",");
            for (let CD = 0; CD < DD.length; CD += 2) {
              const ID = new RegExp(DD[CD], "g"),
                pD = DD[CD + 1];
              cD = cD.replace(ID, pD)
            }
          }
          if (bD[4]) {
            const DD = bD[5];
            if (-1 !== DD.indexOf("..")) {
              const ID = DD.split(".."),
                pD = parseInt(ID[0]);
              let iD = parseInt(ID[1]),
                fD = cD.slice(0);
              cD = "", isNaN(iD) && (iD = CD.indexParameters[ID[1]]);
              for (let DD = pD; DD < iD; DD++) CD.supportsUniformBuffers || (fD = fD.replace(ND, ((DD, CD) => CD + "{X}"))), cD += fD.replace(gD, DD.toString()) + "\n"
            } else CD.supportsUniformBuffers || (cD = cD.replace(ND, ((DD, CD) => CD + "{X}"))), cD = cD.replace(gD, DD)
          }
          const ID = [];
          for (const DD of pD) {
            const CD = DD.split(bD[0]);
            for (let DD = 0; DD < CD.length - 1; DD++) ID.push(CD[DD]), ID.push(cD);
            ID.push(CD[CD.length - 1])
          }
          pD = ID, iD = iD || cD.indexOf("#include<") >= 0 || cD.indexOf("#include <") >= 0
        }
      }
      XD.length = 0;
      const fD = pD.join("");
      iD ? aD(fD.toString(), CD, cD) : cD(fD)
    }
    const VD = {
      loadFile: (DD, CD, cD, ID, pD, iD) => {
        throw (0, yD.m)("FileTools")
      }
    }
  },
  39023: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      h: () => iD,
      l: () => bD,
      n: () => fD,
      p: () => QD
    });
    var ID = cD(39027);
    const pD = {};

    function iD(DD, CD) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (CD ? CD + "\n" : "") + DD
    }

    function fD(DD, CD, cD, iD, fD, bD, QD) {
      const wD = QD || pD.loadFile;
      if (!wD) throw (0, ID.m)("FileTools");
      return wD(DD, CD, cD, iD, fD, bD)
    }

    function bD(DD, CD, cD, ID) {
      if (DD) return CD ? DD.IS_NDC_HALF_ZRANGE = "" : delete DD.IS_NDC_HALF_ZRANGE, cD ? DD.USE_REVERSE_DEPTHBUFFER = "" : delete DD.USE_REVERSE_DEPTHBUFFER, void(ID ? DD.USE_EXACT_SRGB_CONVERSIONS = "" : delete DD.USE_EXACT_SRGB_CONVERSIONS);
      {
        let DD = "";
        return CD && (DD += "#define IS_NDC_HALF_ZRANGE"), cD && (DD && (DD += "\n"), DD += "#define USE_REVERSE_DEPTHBUFFER"), ID && (DD && (DD += "\n"), DD += "#define USE_EXACT_SRGB_CONVERSIONS"), DD
      }
    }

    function QD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ID = arguments.length > 3 ? arguments[3] : void 0;
      switch (DD) {
        case 3: {
          const DD = new Int8Array(CD);
          return ID && DD.set(new Int8Array(ID)), DD
        }
        case 0: {
          const DD = new Uint8Array(CD);
          return ID && DD.set(new Uint8Array(ID)), DD
        }
        case 4: {
          const DD = "number" !== typeof CD ? new Int16Array(CD) : new Int16Array(cD ? CD / 2 : CD);
          return ID && DD.set(new Int16Array(ID)), DD
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const DD = "number" !== typeof CD ? new Uint16Array(CD) : new Uint16Array(cD ? CD / 2 : CD);
          return ID && DD.set(new Uint16Array(ID)), DD
        }
        case 6: {
          const DD = "number" !== typeof CD ? new Int32Array(CD) : new Int32Array(cD ? CD / 4 : CD);
          return ID && DD.set(new Int32Array(ID)), DD
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const DD = "number" !== typeof CD ? new Uint32Array(CD) : new Uint32Array(cD ? CD / 4 : CD);
          return ID && DD.set(new Uint32Array(ID)), DD
        }
        case 1: {
          const DD = "number" !== typeof CD ? new Float32Array(CD) : new Float32Array(cD ? CD / 4 : CD);
          return ID && DD.set(new Float32Array(ID)), DD
        }
      }
      const pD = new Uint8Array(CD);
      return ID && pD.set(new Uint8Array(ID)), pD
    }
  },
  39027: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      g: () => SD,
      j: () => QD,
      m: () => pD
    });
    const ID = {};

    function pD(DD) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !ID[DD]) return ID[DD] = !0, `${DD} needs to be imported before as it contains a side-effect required by your code.`
    }
    const iD = {};
    let fD = !1,
      bD = 0;

    function QD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const ID = function() {
        if ((cD || fD) && 0 === bD) {
          const cD = `${DD}.${CD}`;
          iD[cD] || (iD[cD] = !0, console.warn(`[Babylon.js] ${cD}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return ID.__isSideEffectStub = !0, ID
    }

    function wD(DD) {
      return !!DD && !DD.__isSideEffectStub
    }

    function SD(DD, CD) {
      return {
        get() {},
        set(DD) {
          Object.defineProperty(this, CD, {
            value: DD,
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
  39010: (DD, CD, cD) => {
    function ID() {
      return "undefined" !== typeof window
    }

    function pD() {
      return "undefined" !== typeof navigator
    }

    function iD() {
      return "undefined" !== typeof document
    }

    function fD(DD) {
      let CD = "",
        cD = DD.firstChild;
      for (; cD;) 3 === cD.nodeType && (CD += cD.textContent), cD = cD.nextSibling;
      return CD
    }
    cD.d(CD, {
      c: () => fD,
      e: () => iD,
      i: () => pD,
      m: () => ID
    })
  },
  39206: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID,
      c: () => pD,
      f: () => iD
    });
    class ID extends Error {}
    ID._setPrototypeOf = Object.setPrototypeOf || ((DD, CD) => (DD.__proto__ = CD, DD));
    const pD = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class iD extends ID {
      constructor(DD, CD, cD) {
        super(DD), this.errorCode = CD, this.innerError = cD, this.name = "RuntimeError", ID._setPrototypeOf(this, iD.prototype)
      }
    }
  },
  39193: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => KD,
      f: () => gD,
      i: () => UD,
      m: () => qD,
      n: () => PD,
      q: () => nD,
      s: () => OD,
      t: () => lD,
      u: () => HD,
      v: () => XD
    });
    var ID = cD(39198),
      pD = cD(39010),
      iD = cD(36473);
    class fD {}
    fD.FilesToLoad = {};
    var bD = cD(39206),
      QD = cD(39208),
      wD = cD(36464),
      SD = cD(39023),
      BD = cD(39035),
      yD = cD(38048),
      MD = cD(39039),
      tD = cD(39213);
    const ZD = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class oD extends bD.f {
      constructor(DD, CD) {
        super(DD, bD.c.LoadFileError), this.name = "LoadFileError", bD.b._setPrototypeOf(this, oD.prototype), CD instanceof ID.b ? this.request = CD : this.file = CD
      }
    }
    class vD extends bD.f {
      constructor(DD, CD) {
        super(DD, bD.c.RequestFileError), this.request = CD, this.name = "RequestFileError", bD.b._setPrototypeOf(this, vD.prototype)
      }
    }
    class ND extends bD.f {
      constructor(DD, CD) {
        super(DD, bD.c.ReadFileError), this.file = CD, this.name = "ReadFileError", bD.b._setPrototypeOf(this, ND.prototype)
      }
    }
    const gD = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (cD, ID, pD) => 0 !== ID.status || pD >= DD || -1 !== cD.indexOf("file:") ? -1 : Math.pow(2, pD) * CD
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: DD => DD,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: DD => DD,
        CleanUrl: DD => DD = DD.replace(/#/gm, "%23")
      },
      XD = (DD, CD) => {
        if ((!DD || 0 !== DD.indexOf("data:")) && gD.CorsBehavior)
          if ("string" === typeof gD.CorsBehavior || gD.CorsBehavior instanceof String) CD.crossOrigin = gD.CorsBehavior;
          else {
            const cD = gD.CorsBehavior(DD);
            cD && (CD.crossOrigin = cD)
          }
      },
      mD = {
        getRequiredSize: null
      },
      nD = function(DD, CD, cD, pD) {
        let iD, bD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          SD = arguments.length > 5 ? arguments[5] : void 0,
          BD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : wD.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !BD?._features.forceBitmapOverHTMLImageElement) return cD("LoadImage is only supported in web or BabylonNative environments."), null;
        if (BD?._features.forceBitmapOverHTMLImageElement && "string" !== typeof DD && "undefined" !== typeof Blob) {
          let ID;
          if (DD instanceof Blob) ID = DD;
          else {
            const CD = DD instanceof ArrayBuffer ? DD : (0, tD.k)(DD);
            ID = new Blob([CD], {
              type: bD
            })
          }
          return BD.createImageBitmap(ID, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...SD
          }).then(CD).catch((CD => {
            cD && cD("Error while trying to load image: " + DD, CD)
          })), null
        }
        let yD = !1;
        if (DD instanceof ArrayBuffer || ArrayBuffer.isView(DD))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let CD;
            CD = DD instanceof ArrayBuffer ? DD : (0, tD.k)(DD), iD = URL.createObjectURL(new Blob([CD], {
              type: bD
            })), yD = !0
          } else iD = `data:${bD};base64,` + (0, QD.k)(DD);
        else DD instanceof Blob ? (iD = URL.createObjectURL(DD), yD = !0) : (iD = gD.CleanUrl(DD), iD = gD.PreprocessUrl(iD));
        const MD = CD => {
          if (cD) {
            const ID = iD || DD.toString();
            cD(`Error while trying to load image: ${0===ID.indexOf("http")||ID.length<=128?ID:ID.slice(0,128)+"..."}`, CD)
          }
        };
        if (BD?._features.forceBitmapOverHTMLImageElement) return PD(iD, (ID => {
          BD.createImageBitmap(new Blob([ID], {
            type: bD
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...SD
          }).then((DD => {
            CD(DD), yD && URL.revokeObjectURL(iD)
          })).catch((CD => {
            cD && cD("Error while trying to load image: " + DD, CD)
          }))
        }), void 0, pD || void 0, !0, ((DD, CD) => {
          MD(CD)
        })), null;
        const ZD = new Image;
        if (mD.getRequiredSize) {
          const CD = mD.getRequiredSize(DD);
          CD.width && (ZD.width = CD.width), CD.height && (ZD.height = CD.height)
        }
        XD(iD, ZD);
        const oD = [],
          vD = () => {
            for (const DD of oD) DD.target.removeEventListener(DD.name, DD.handler);
            oD.length = 0
          };
        oD.push({
          target: ZD,
          name: "load",
          handler: () => {
            vD(), CD(ZD), yD && ZD.src && URL.revokeObjectURL(ZD.src)
          }
        }), oD.push({
          target: ZD,
          name: "error",
          handler: DD => {
            vD(), MD(DD), yD && ZD.src && URL.revokeObjectURL(ZD.src)
          }
        }), oD.push({
          target: document,
          name: "securitypolicyviolation",
          handler: DD => {
            if (DD.blockedURI !== ZD.src || "Nt" === DD.disposition) return;
            vD();
            const CD = new Error(`CSP violation of policy ${DD.effectiveDirective} ${DD.blockedURI}. Current policy is ${DD.originalPolicy}`);
            wD.b.UseFallbackTexture = !1, MD(CD), yD && ZD.src && URL.revokeObjectURL(ZD.src), ZD.src = ""
          }
        }), (() => {
          for (const DD of oD) DD.target.addEventListener(DD.name, DD.handler)
        })();
        const ND = "blob:" === iD.substring(0, 5),
          nD = "data:" === iD.substring(0, 5),
          OD = () => {
            ND || nD || !ID.b.IsCustomRequestAvailable ? ZD.src = iD : PD(iD, ((DD, CD, cD) => {
              const ID = new Blob([DD], {
                  type: !bD && cD ? cD : bD
                }),
                pD = URL.createObjectURL(ID);
              yD = !0, ZD.src = pD
            }), void 0, pD || void 0, !0, ((DD, CD) => {
              MD(CD)
            }))
          },
          HD = () => {
            pD && pD.loadImage(iD, ZD)
          };
        if (!ND && !nD && pD && pD.enableTexturesOffline) pD.open(HD, OD);
        else {
          if (-1 !== iD.indexOf("file:")) {
            const DD = decodeURIComponent(iD.substring(5).toLowerCase());
            if (fD.FilesToLoad[DD] && "undefined" !== typeof URL) {
              try {
                let CD;
                try {
                  CD = URL.createObjectURL(fD.FilesToLoad[DD])
                } catch (UD) {
                  CD = URL.createObjectURL(fD.FilesToLoad[DD])
                }
                ZD.src = CD, yD = !0
              } catch (xD) {
                ZD.src = ""
              }
              return ZD
            }
          }
          OD()
        }
        return ZD
      },
      OD = (DD, CD, cD, ID, pD) => {
        const fD = new FileReader,
          bD = {
            onCompleteObservable: new iD.c,
            abort: () => fD.abort()
          };
        return fD.onloadend = () => bD.onCompleteObservable.notifyObservers(bD), pD && (fD.onerror = () => {
          pD(new ND(`Unable to read ${DD.name}`, DD))
        }), fD.onload = DD => {
          CD(DD.target.result)
        }, cD && (fD.onprogress = cD), ID ? fD.readAsArrayBuffer(DD) : fD.readAsText(DD), bD
      },
      PD = (DD, CD, cD, ID, pD, QD, wD) => {
        if (DD.name) return OD(DD, CD, cD, pD, QD ? DD => {
          QD(void 0, DD)
        } : void 0);
        const SD = DD;
        if (-1 !== SD.indexOf("file:")) {
          let DD = decodeURIComponent(SD.substring(5).toLowerCase());
          0 === DD.indexOf("./") && (DD = DD.substring(2));
          const ID = fD.FilesToLoad[DD];
          if (ID) return OD(ID, CD, cD, pD, QD ? DD => QD(void 0, new oD(DD.message, DD.file)) : void 0)
        }
        const {
          match: BD,
          type: tD
        } = JD(SD);
        if (BD) {
          const DD = {
            onCompleteObservable: new iD.c,
            abort: () => () => {}
          };
          try {
            const DD = pD ? KD(SD) : aD(SD);
            CD(DD, void 0, tD)
          } catch (bD) {
            QD ? QD(void 0, bD) : yD.e.Error(bD.message || "Failed to parse the Data URL")
          }
          return MD.d.SetImmediate((() => {
            DD.onCompleteObservable.notifyObservers(DD)
          })), DD
        }
        return HD(SD, ((DD, cD) => {
          CD(DD, cD?.responseURL, cD?.getResponseHeader("content-type"))
        }), cD, ID, pD, QD ? DD => {
          QD(DD.request, new oD(DD.message, DD.request))
        } : void 0, wD)
      },
      HD = (DD, CD, cD, fD, bD, QD, SD) => {
        null !== fD && (fD ?? (fD = wD.b.LastCreatedScene?.offlineProvider)), DD = gD.CleanUrl(DD), DD = gD.PreprocessUrl(DD);
        const BD = gD.BaseUrl + DD;
        let MD = !1;
        const tD = {
            onCompleteObservable: new iD.c,
            abort: () => MD = !0
          },
          ZD = () => {
            let DD, iD = new ID.b,
              fD = null;
            const wD = () => {
              iD && (cD && iD.removeEventListener("progress", cD), DD && iD.removeEventListener("readystatechange", DD), iD.removeEventListener("loadend", ZD))
            };
            let ZD = () => {
              wD(), tD.onCompleteObservable.notifyObservers(tD), tD.onCompleteObservable.clear(), cD = void 0, DD = null, ZD = null, QD = void 0, SD = void 0, CD = void 0
            };
            tD.abort = () => {
              MD = !0, ZD && ZD(), iD && iD.readyState !== (XMLHttpRequest.DONE || 4) && iD.abort(), null !== fD && (clearTimeout(fD), fD = null), iD = null
            };
            const oD = DD => {
                const CD = DD.message || "Unknown error";
                QD && iD ? QD(new vD(CD, iD)) : yD.e.Error(CD)
              },
              ND = yD => {
                if (iD) {
                  if (iD.open("GET", BD), SD) try {
                    SD(iD)
                  } catch (tD) {
                    return void oD(tD)
                  }
                  bD && (iD.responseType = "arraybuffer"), cD && iD.addEventListener("progress", cD), ZD && iD.addEventListener("loadend", ZD), DD = () => {
                    if (!MD && iD && iD.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (DD && iD.removeEventListener("readystatechange", DD), iD.status >= 200 && iD.status < 300 || 0 === iD.status && (!(0, pD.m)() || xD())) {
                        const DD = bD ? iD.response : iD.responseText;
                        if (null !== DD) {
                          try {
                            CD && CD(DD, iD)
                          } catch (tD) {
                            oD(tD)
                          }
                          return
                        }
                      }
                      const cD = gD.DefaultRetryStrategy;
                      if (cD) {
                        const DD = cD(BD, iD, yD);
                        if (-1 !== DD) return wD(), iD = new ID.b, void(fD = setTimeout((() => ND(yD + 1)), DD))
                      }
                      const SD = new vD("Error status: " + iD.status + " " + iD.statusText + " - Unable to load " + BD, iD);
                      QD && QD(SD)
                    }
                  }, iD.addEventListener("readystatechange", DD), iD.send()
                }
              };
            ND(0)
          };
        if (fD && fD.enableSceneOffline && !DD.startsWith("blob:")) {
          const ID = DD => {
              DD && DD.status > 400 ? QD && QD(DD) : ZD()
            },
            pD = () => {
              fD && fD.loadFile(gD.BaseUrl + DD, (DD => {
                !MD && CD && CD(DD), tD.onCompleteObservable.notifyObservers(tD)
              }), cD ? DD => {
                !MD && cD && cD(DD)
              } : void 0, ID, bD)
            };
          fD.open(pD, ID)
        } else ZD();
        return tD
      },
      UD = DD => {
        const {
          match: CD,
          type: cD
        } = JD(DD);
        if (CD) return cD || void 0;
        const ID = DD.lastIndexOf(".");
        switch (DD.substring(ID + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "Jq":
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
      xD = () => "undefined" !== typeof location && "file:" === location.protocol,
      qD = DD => ZD.test(DD),
      JD = DD => {
        const CD = ZD.exec(DD);
        if (null === CD || 0 === CD.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: CD[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function KD(DD) {
      return (0, QD.e)(DD.split(",")[1])
    }
    const aD = DD => (0, QD.h)(DD.split(",")[1]);
    let VD;
    const zD = (DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) => {
      VD = {
        DecodeBase64UrlToBinary: DD,
        DecodeBase64UrlToString: CD,
        DefaultRetryStrategy: cD.DefaultRetryStrategy,
        BaseUrl: cD.BaseUrl,
        CorsBehavior: cD.CorsBehavior,
        PreprocessUrl: cD.PreprocessUrl,
        IsBase64DataUrl: ID,
        IsFileURL: pD,
        LoadFile: iD,
        LoadImage: fD,
        ReadFile: bD,
        RequestFile: QD,
        SetCorsBehavior: wD
      }, Object.defineProperty(VD, "DefaultRetryStrategy", {
        get: function() {
          return cD.DefaultRetryStrategy
        },
        set: function(DD) {
          cD.DefaultRetryStrategy = DD
        }
      }), Object.defineProperty(VD, "BaseUrl", {
        get: function() {
          return cD.BaseUrl
        },
        set: function(DD) {
          cD.BaseUrl = DD
        }
      }), Object.defineProperty(VD, "PreprocessUrl", {
        get: function() {
          return cD.PreprocessUrl
        },
        set: function(DD) {
          cD.PreprocessUrl = DD
        }
      }), Object.defineProperty(VD, "CorsBehavior", {
        get: function() {
          return cD.CorsBehavior
        },
        set: function(DD) {
          cD.CorsBehavior = DD
        }
      })
    };
    let jD = !1;

    function lD() {
      jD || (jD = !0, zD(KD, aD, gD, qD, xD, PD, nD, OD, HD, XD), SD.d.loadFile = PD, SD.d.loadImage = nD, BD.o.loadFile = PD)
    }
  },
  39215: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      f: () => iD,
      i: () => fD
    });
    let ID = null;

    function pD() {
      if (ID) return ID;
      const DD = new ArrayBuffer(4),
        CD = new Float32Array(DD),
        cD = new Uint32Array(DD),
        pD = new Uint32Array(512),
        iD = new Uint32Array(512);
      for (let ID = 0; ID < 256; ++ID) {
        const DD = ID - 127;
        DD < -24 ? (pD[ID] = 0, pD[256 | ID] = 32768, iD[ID] = 24, iD[256 | ID] = 24) : DD < -14 ? (pD[ID] = 1024 >> -DD - 14, pD[256 | ID] = 1024 >> -DD - 14 | 32768, iD[ID] = -DD - 1, iD[256 | ID] = -DD - 1) : DD <= 15 ? (pD[ID] = DD + 15 << 10, pD[256 | ID] = DD + 15 << 10 | 32768, iD[ID] = 13, iD[256 | ID] = 13) : DD < 128 ? (pD[ID] = 31744, pD[256 | ID] = 64512, iD[ID] = 24, iD[256 | ID] = 24) : (pD[ID] = 31744, pD[256 | ID] = 64512, iD[ID] = 13, iD[256 | ID] = 13)
      }
      const fD = new Uint32Array(2048),
        bD = new Uint32Array(64),
        QD = new Uint32Array(64);
      for (let ID = 1; ID < 1024; ++ID) {
        let DD = ID << 13,
          CD = 0;
        for (; 0 === (8388608 & DD);) DD <<= 1, CD -= 8388608;
        DD &= -8388609, CD += 947912704, fD[ID] = DD | CD
      }
      for (let ID = 1024; ID < 2048; ++ID) fD[ID] = 939524096 + (ID - 1024 << 13);
      for (let ID = 1; ID < 31; ++ID) bD[ID] = ID << 23;
      bD[31] = 1199570944, bD[32] = 2147483648;
      for (let ID = 33; ID < 63; ++ID) bD[ID] = 2147483648 + (ID - 32 << 23);
      bD[63] = 3347054592;
      for (let ID = 1; ID < 64; ++ID) 32 !== ID && (QD[ID] = 1024);
      return ID = {
        floatView: CD,
        uint32View: cD,
        baseTable: pD,
        shiftTable: iD,
        mantissaTable: fD,
        exponentTable: bD,
        offsetTable: QD
      }, ID
    }
    const iD = 65504;

    function fD(DD) {
      const CD = pD();
      CD.floatView[0] = DD;
      const cD = CD.uint32View[0],
        ID = cD >> 23 & 511;
      return CD.baseTable[ID] + ((8388607 & cD) >> CD.shiftTable[ID])
    }

    function bD(DD) {
      const CD = pD();
      return CD.uint32View[0] = CD.mantissaTable[CD.offsetTable[DD >> 10] + (1023 & DD)] + CD.exponentTable[DD >> 10], CD.floatView[0]
    }
  },
  39208: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      h: () => pD,
      k: () => ID
    });
    const ID = DD => {
        const CD = ArrayBuffer.isView(DD) ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : new Uint8Array(DD);
        return "function" === typeof CD.toBase64 ? CD.toBase64() : function(DD) {
          const CD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let cD, ID, pD, iD, fD, bD, QD, wD = "",
            SD = 0;
          for (; SD < DD.length;) cD = DD[SD++], ID = SD < DD.length ? DD[SD++] : Number.NaN, pD = SD < DD.length ? DD[SD++] : Number.NaN, iD = cD >> 2, fD = (3 & cD) << 4 | ID >> 4, bD = (15 & ID) << 2 | pD >> 6, QD = 63 & pD, isNaN(ID) ? bD = QD = 64 : isNaN(pD) && (QD = 64), wD += CD.charAt(iD) + CD.charAt(fD) + CD.charAt(bD) + CD.charAt(QD);
          return wD
        }(CD)
      },
      pD = DD => atob(DD),
      iD = DD => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(DD).buffer : function(DD) {
        const CD = pD(DD),
          cD = CD.length,
          ID = new Uint8Array(new ArrayBuffer(cD));
        for (let pD = 0; pD < cD; pD++) ID[pD] = CD.charCodeAt(pD);
        return ID.buffer
      }(DD)
  },
  39039: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      e: () => fD
    });
    let ID = [];
    class pD {
      static SetImmediate(DD) {
        0 === ID.length && setTimeout((() => {
          const DD = ID;
          ID = [];
          for (const CD of DD) CD()
        }), 1), ID.push(DD)
      }
    }

    function iD(DD, CD, cD) {
      try {
        if (DD()) return CD(), !0
      } catch (ID) {
        return cD?.(ID), !0
      }
      return !1
    }
    const fD = function(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        fD = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && iD(DD, CD, cD)) return null;
      const bD = setInterval((() => {
        iD(DD, CD, cD) ? clearInterval(bD) : (pD -= ID, pD < 0 && (clearInterval(bD), cD?.(new Error("Operation timed out after maximum retries. " + (fD || "")), !0)))
      }), ID);
      return () => clearInterval(bD)
    }
  },
  39198: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    class ID {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(ID.CustomRequestHeaders).length > 0 || ID.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(DD) {
        return DD = (DD = DD.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(DD) {
        return ID.SkipRequestModificationForBabylonCDN && (DD.includes("preview.babylonjs.com") || DD.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(DD) {
        const CD = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (ID._ShouldSkipRequestModifications(DD)) return {
          url: DD,
          headers: CD
        };
        for (const pD in ID.CustomRequestHeaders) {
          const DD = ID.CustomRequestHeaders[pD];
          DD && (CD[pD] = DD)
        }
        const cD = {
          setRequestHeader: (DD, cD) => {
            CD[DD] = cD
          }
        };
        for (const pD of ID.CustomRequestModifiers) {
          if (ID._ShouldSkipRequestModifications(DD)) break;
          const CD = pD(cD, DD);
          "string" === typeof CD && (DD = CD)
        }
        return {
          url: DD,
          headers: CD
        }
      }
      static async FetchAsync(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const cD = CD.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: pD,
            headers: iD
          } = ID._CollectCustomizations(ID._CleanUrl(DD), CD.headers ?? {});
          return await fetch(pD, {
            method: cD,
            headers: iD,
            body: CD.body ?? void 0
          })
        }
        return await new Promise(((pD, iD) => {
          const fD = new ID;
          fD.responseType = "arraybuffer", fD.addEventListener("readystatechange", (() => {
            if (4 === fD.readyState)
              if (fD.status >= 200 && fD.status < 300) {
                const DD = "undefined" !== typeof Headers ? new Headers : void 0,
                  CD = fD.getResponseHeader("Content-Type");
                CD && DD && DD.set("Content-Type", CD), "undefined" !== typeof Response ? pD(new Response(fD.response, {
                  status: fD.status,
                  statusText: fD.statusText,
                  headers: DD
                })) : pD({
                  ok: !0,
                  status: fD.status,
                  statusText: fD.statusText,
                  headers: {
                    get: DD => fD.getResponseHeader(DD)
                  },
                  arrayBuffer: async () => await Promise.resolve(fD.response)
                })
              } else iD(new Error(`HTTP ${fD.status} loading '${fD.requestURL}': ${fD.statusText}`))
          })), fD.open(cD, DD, CD.headers), fD.send(CD.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(DD) {
        this._xhr.onprogress = DD
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
      set responseType(DD) {
        this._xhr.responseType = DD
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(DD) {
        this._xhr.timeout = DD
      }
      addEventListener(DD, CD, cD) {
        this._xhr.addEventListener(DD, CD, cD)
      }
      removeEventListener(DD, CD, cD) {
        this._xhr.removeEventListener(DD, CD, cD)
      }
      abort() {
        this._xhr.abort()
      }
      send(DD) {
        this._xhr.send(DD)
      }
      open(DD, CD, cD) {
        const {
          url: pD,
          headers: iD
        } = ID._CollectCustomizations(CD, cD);
        this._requestURL = ID._CleanUrl(pD), this._xhr.open(DD, this._requestURL, !0);
        for (const ID in iD) this._xhr.setRequestHeader(ID, iD[ID])
      }
      setRequestHeader(DD, CD) {
        this._xhr.setRequestHeader(DD, CD)
      }
      getResponseHeader(DD) {
        return this._xhr.getResponseHeader(DD)
      }
    }
    ID.CustomRequestHeaders = {}, ID.CustomRequestModifiers = new Array, ID.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);