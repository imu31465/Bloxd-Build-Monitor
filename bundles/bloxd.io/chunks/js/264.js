export const id = 264;
export const ids = [264];
export const modules = {
  40171: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => gD,
      f: () => VD,
      g: () => oD,
      i: () => vD,
      j: () => yD,
      n: () => ZD,
      r: () => tD,
      s: () => MD
    });
    var ID = cD(36446),
      pD = cD(36622),
      iD = cD(36479),
      fD = cD(40175),
      bD = cD(39356),
      QD = cD(39166),
      wD = cD(39198),
      SD = cD(39174),
      BD = cD(36488);
    const yD = Object.freeze(new ID.h(0, 0, 0, 0)),
      MD = Object.freeze(ID.p.Zero()),
      tD = Object.freeze(ID.n.Zero()),
      ZD = Object.freeze(QD.c.Zero()),
      oD = Object.freeze(pD.d.Black()),
      vD = Object.freeze(new pD.e(0, 0, 0, 0)),
      ND = {
        key: 0,
        repeatCount: 0,
        ni: 2
      };
    class gD {
      static _PrepareAnimation(DD, CD, cD, iD, fD, bD, wD, SD) {
        let BD;
        if (!isNaN(parseFloat(fD)) && isFinite(fD) ? BD = gD.ANIMATIONTYPE_FLOAT : fD instanceof ID.h ? BD = gD.ANIMATIONTYPE_QUATERNION : fD instanceof ID.p ? BD = gD.ANIMATIONTYPE_VECTOR3 : fD instanceof ID.n ? BD = gD.ANIMATIONTYPE_VECTOR2 : fD instanceof pD.d ? BD = gD.ANIMATIONTYPE_COLOR3 : fD instanceof pD.e ? BD = gD.ANIMATIONTYPE_COLOR4 : fD instanceof QD.c && (BD = gD.ANIMATIONTYPE_SIZE), void 0 == BD) return null;
        const yD = new gD(DD, CD, cD, BD, wD),
          MD = [{
            frame: 0,
            value: fD
          }, {
            frame: iD,
            value: bD
          }];
        return yD.setKeys(MD), void 0 !== SD && yD.setEasingFunction(SD), yD
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const DD of this._runtimeAnimations)
          if (!DD.isStopped()) return !0;
        return !1
      }
      constructor(DD, CD, cD, ID, pD, iD) {
        this.name = DD, this.targetProperty = CD, this.framePerSecond = cD, this.dataType = ID, this.ni = pD, this.enableBlending = iD, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = CD.split("."), this.dataType = ID, this.ni = void 0 === pD ? gD.ANIMATIONLOOPMODE_CYCLE : pD, this.uniqueId = gD._UniqueIdGenerator++
      }
      toString(DD) {
        let CD = "Name: " + this.name + ", property: " + this.targetProperty;
        if (CD += ", datatype: " + ["Float", "cZ", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], CD += ", nKeys: " + (this._keys ? this._keys.length : "none"), CD += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), DD) {
          CD += ", Ranges: {";
          let DD = !0;
          for (const cD in this._ranges) DD || (CD += ", "), DD = !1, CD += cD;
          CD += "}"
        }
        return CD
      }
      addEvent(DD) {
        this._events.push(DD), this._events.sort(((DD, CD) => DD.frame - CD.frame))
      }
      removeEvents(DD) {
        for (let CD = 0; CD < this._events.length; CD++) this._events[CD].frame === DD && (this._events.splice(CD, 1), CD--)
      }
      getEvents() {
        return this._events
      }
      createRange(DD, CD, cD) {
        this._ranges[DD] || (this._ranges[DD] = new fD.d(DD, CD, cD))
      }
      deleteRange(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cD = this._ranges[DD];
        if (cD) {
          if (CD) {
            const DD = cD.from,
              CD = cD.to;
            for (let cD = this._keys.length - 1; cD >= 0; cD--) this._keys[cD].frame >= DD && this._keys[cD].frame <= CD && this._keys.splice(cD, 1)
          }
          this._ranges[DD] = null
        }
      }
      getRange(DD) {
        return this._ranges[DD]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let DD = 0;
        for (let CD = 0, cD = this._keys.length; CD < cD; CD++) DD < this._keys[CD].frame && (DD = this._keys[CD].frame);
        return DD
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(DD) {
        this._easingFunction = DD
      }
      floatInterpolateFunction(DD, CD, cD) {
        return (0, iD.Lerp)(DD, CD, cD)
      }
      floatInterpolateFunctionWithTangents(DD, CD, cD, ID, pD) {
        return (0, iD.Hermite)(DD, CD, cD, ID, pD)
      }
      quaternionInterpolateFunction(DD, CD, cD) {
        return ID.h.Slerp(DD, CD, cD)
      }
      quaternionInterpolateFunctionWithTangents(DD, CD, cD, pD, iD) {
        return ID.h.Hermite(DD, CD, cD, pD, iD).normalize()
      }
      vector3InterpolateFunction(DD, CD, cD) {
        return ID.p.Lerp(DD, CD, cD)
      }
      vector3InterpolateFunctionWithTangents(DD, CD, cD, pD, iD) {
        return ID.p.Hermite(DD, CD, cD, pD, iD)
      }
      vector2InterpolateFunction(DD, CD, cD) {
        return ID.n.Lerp(DD, CD, cD)
      }
      vector2InterpolateFunctionWithTangents(DD, CD, cD, pD, iD) {
        return ID.n.Hermite(DD, CD, cD, pD, iD)
      }
      sizeInterpolateFunction(DD, CD, cD) {
        return QD.c.Lerp(DD, CD, cD)
      }
      color3InterpolateFunction(DD, CD, cD) {
        return pD.d.Lerp(DD, CD, cD)
      }
      color3InterpolateFunctionWithTangents(DD, CD, cD, ID, iD) {
        return pD.d.Hermite(DD, CD, cD, ID, iD)
      }
      color4InterpolateFunction(DD, CD, cD) {
        return pD.e.Lerp(DD, CD, cD)
      }
      color4InterpolateFunctionWithTangents(DD, CD, cD, ID, iD) {
        return pD.e.Hermite(DD, CD, cD, ID, iD)
      }
      _getKeyValue(DD) {
        return "function" === typeof DD ? DD() : DD
      }
      evaluate(DD) {
        return ND.key = 0, this._interpolate(DD, ND)
      }
      _interpolate(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (CD.ni === gD.ANIMATIONLOOPMODE_CONSTANT && CD.repeatCount > 0) return CD.highLimitValue.clone ? CD.highLimitValue.clone() : CD.highLimitValue;
        const ID = this._keys;
        let pD;
        if (this._coreAnimation) pD = this._coreAnimation._key;
        else {
          const iD = ID.length;
          for (pD = CD.key; pD >= 0 && DD < ID[pD].frame;) --pD;
          for (; pD + 1 <= iD - 1 && DD >= ID[pD + 1].frame;) ++pD;
          if (CD.key = pD, pD < 0) return cD ? void 0 : this._getKeyValue(ID[0].value);
          if (pD + 1 > iD - 1) return cD ? void 0 : this._getKeyValue(ID[iD - 1].value);
          this._key = pD
        }
        const iD = ID[pD],
          fD = ID[pD + 1];
        if (cD && (DD === iD.frame || DD === fD.frame)) return;
        const bD = this._getKeyValue(iD.value),
          QD = this._getKeyValue(fD.value);
        if (1 === iD.interpolation) return fD.frame > DD ? bD : QD;
        const wD = void 0 !== iD.outTangent && void 0 !== fD.inTangent,
          SD = fD.frame - iD.frame;
        let BD = (DD - iD.frame) / SD;
        const ND = iD.easingFunction || this.getEasingFunction();
        switch (ND && (BD = ND.ease(BD)), this.dataType) {
          case gD.ANIMATIONTYPE_FLOAT: {
            const DD = wD ? this.floatInterpolateFunctionWithTangents(bD, iD.outTangent * SD, QD, fD.inTangent * SD, BD) : this.floatInterpolateFunction(bD, QD, BD);
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (CD.offsetValue ?? 0) * CD.repeatCount + DD
            }
            break
          }
          case gD.ANIMATIONTYPE_QUATERNION: {
            const DD = wD ? this.quaternionInterpolateFunctionWithTangents(bD, iD.outTangent.scale(SD), QD, fD.inTangent.scale(SD), BD) : this.quaternionInterpolateFunction(bD, QD, BD);
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.addInPlace((CD.offsetValue || yD).scale(CD.repeatCount))
            }
            return DD
          }
          case gD.ANIMATIONTYPE_VECTOR3: {
            const DD = wD ? this.vector3InterpolateFunctionWithTangents(bD, iD.outTangent.scale(SD), QD, fD.inTangent.scale(SD), BD) : this.vector3InterpolateFunction(bD, QD, BD);
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((CD.offsetValue || MD).scale(CD.repeatCount))
            }
            break
          }
          case gD.ANIMATIONTYPE_VECTOR2: {
            const DD = wD ? this.vector2InterpolateFunctionWithTangents(bD, iD.outTangent.scale(SD), QD, fD.inTangent.scale(SD), BD) : this.vector2InterpolateFunction(bD, QD, BD);
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((CD.offsetValue || tD).scale(CD.repeatCount))
            }
            break
          }
          case gD.ANIMATIONTYPE_SIZE:
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(bD, QD, BD);
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(bD, QD, BD).add((CD.offsetValue || ZD).scale(CD.repeatCount))
            }
            break;
          case gD.ANIMATIONTYPE_COLOR3: {
            const DD = wD ? this.color3InterpolateFunctionWithTangents(bD, iD.outTangent.scale(SD), QD, fD.inTangent.scale(SD), BD) : this.color3InterpolateFunction(bD, QD, BD);
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((CD.offsetValue || oD).scale(CD.repeatCount))
            }
            break
          }
          case gD.ANIMATIONTYPE_COLOR4: {
            const DD = wD ? this.color4InterpolateFunctionWithTangents(bD, iD.outTangent.scale(SD), QD, fD.inTangent.scale(SD), BD) : this.color4InterpolateFunction(bD, QD, BD);
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((CD.offsetValue || vD).scale(CD.repeatCount))
            }
            break
          }
          case gD.ANIMATIONTYPE_MATRIX:
            switch (CD.ni) {
              case gD.ANIMATIONLOOPMODE_CYCLE:
              case gD.ANIMATIONLOOPMODE_CONSTANT:
              case gD.ANIMATIONLOOPMODE_YOYO:
                return gD.AllowMatricesInterpolation ? this.matrixInterpolateFunction(bD, QD, BD, CD.workValue) : bD;
              case gD.ANIMATIONLOOPMODE_RELATIVE:
              case gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bD
            }
        }
        return 0
      }
      matrixInterpolateFunction(DD, CD, cD, pD) {
        return gD.AllowMatrixDecomposeForInterpolation ? pD ? (ID.d.DecomposeLerpToRef(DD, CD, cD, pD), pD) : ID.d.DecomposeLerp(DD, CD, cD) : pD ? (ID.d.LerpToRef(DD, CD, cD, pD), pD) : ID.d.Lerp(DD, CD, cD)
      }
      clone() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = new gD(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.ni);
        if (CD.enableBlending = this.enableBlending, CD.blendingSpeed = this.blendingSpeed, this._keys && CD.setKeys(this._keys, !1, DD), this._ranges) {
          CD._ranges = {};
          for (const DD in this._ranges) {
            const cD = this._ranges[DD];
            cD && (CD._ranges[DD] = cD.clone())
          }
        }
        return CD
      }
      setKeys(DD) {
        let CD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = DD;
        else if (this._keys = DD.slice(0), CD)
          for (let cD = 0; cD < this._keys.length; cD++) {
            const DD = this._keys[cD];
            this._keys[cD] = {
              frame: DD.frame,
              value: DD.value.clone ? DD.value.clone() : DD.value,
              inTangent: DD.inTangent && DD.inTangent.clone ? DD.inTangent.clone() : DD.inTangent,
              outTangent: DD.outTangent && DD.outTangent.clone ? DD.outTangent.clone() : DD.outTangent,
              interpolation: DD.interpolation,
              lockedTangent: DD.lockedTangent,
              easingFunction: DD.easingFunction
            }
          }
      }
      createKeyForFrame(DD) {
        ND.key = 0;
        const CD = this._interpolate(DD, ND, !0);
        if (!CD) return this._keys[ND.key].frame === DD ? ND.key : ND.key + 1;
        const cD = {
          frame: DD,
          value: CD.clone ? CD.clone() : CD
        };
        return this._keys.splice(ND.key + 1, 0, cD), ND.key + 1
      }
      serialize() {
        const DD = {};
        DD.name = this.name, DD.property = this.targetProperty, DD.framePerSecond = this.framePerSecond, DD.dataType = this.dataType, DD.loopBehavior = this.ni, DD.enableBlending = this.enableBlending, DD.blendingSpeed = this.blendingSpeed;
        const CD = this.dataType;
        DD.keys = [];
        const cD = this.getKeys();
        for (let ID = 0; ID < cD.length; ID++) {
          const pD = cD[ID],
            iD = {};
          switch (iD.frame = pD.frame, CD) {
            case gD.ANIMATIONTYPE_FLOAT:
              iD.values = [pD.value], void 0 !== pD.inTangent && iD.values.push(pD.inTangent), void 0 !== pD.outTangent && (void 0 === pD.inTangent && iD.values.push(void 0), iD.values.push(pD.outTangent)), void 0 !== pD.interpolation && (void 0 === pD.inTangent && iD.values.push(void 0), void 0 === pD.outTangent && iD.values.push(void 0), iD.values.push(pD.interpolation));
              break;
            case gD.ANIMATIONTYPE_QUATERNION:
            case gD.ANIMATIONTYPE_MATRIX:
            case gD.ANIMATIONTYPE_VECTOR3:
            case gD.ANIMATIONTYPE_COLOR3:
            case gD.ANIMATIONTYPE_COLOR4:
              iD.values = pD.value.XcD(), void 0 != pD.inTangent && iD.values.push(pD.inTangent.XcD()), void 0 != pD.outTangent && (void 0 === pD.inTangent && iD.values.push(void 0), iD.values.push(pD.outTangent.XcD())), void 0 !== pD.interpolation && (void 0 === pD.inTangent && iD.values.push(void 0), void 0 === pD.outTangent && iD.values.push(void 0), iD.values.push(pD.interpolation))
          }
          DD.keys.push(iD)
        }
        DD.df = [];
        for (const ID in this._ranges) {
          const CD = this._ranges[ID];
          if (!CD) continue;
          const cD = {};
          cD.name = ID, cD.from = CD.from, cD.to = CD.to, DD.df.push(cD)
        }
        return DD
      }
      static _UniversalLerp(DD, CD, cD) {
        const ID = DD.constructor;
        return ID.Lerp ? ID.Lerp(DD, CD, cD) : ID.Slerp ? ID.Slerp(DD, CD, cD) : DD.toFixed ? DD * (1 - cD) + cD * CD : CD
      }
    }

    function XD(DD, CD, cD) {
      let pD;
      pD = "object" === typeof CD ? CD : {
        referenceFrame: CD ?? 0,
        range: cD,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let iD = DD;
      pD.cloneOriginalAnimation && (iD = DD.clone(), iD.name = pD.clonedAnimationName || iD.name);
      const fD = iD.getKeys();
      if (!fD.length) return iD;
      const bD = pD.referenceFrame && pD.referenceFrame >= 0 ? pD.referenceFrame : 0;
      let QD = 0;
      const wD = fD[0];
      let SD = fD.length - 1;
      const BD = fD[SD],
        yD = {
          referenceValue: wD.value,
          referencePosition: ID.l.cZ[0],
          referenceQuaternion: ID.l.Quaternion[0],
          referenceScaling: ID.l.cZ[1],
          keyPosition: ID.l.cZ[2],
          keyQuaternion: ID.l.Quaternion[1],
          keyScaling: ID.l.cZ[3]
        };
      let MD = wD.frame,
        tD = BD.frame;
      if (pD.range) {
        const DD = iD.getRange(pD.range);
        DD && (MD = DD.from, tD = DD.to)
      } else MD = pD.fromFrame ?? MD, tD = pD.toFrame ?? tD;
      MD !== wD.frame && (QD = iD.createKeyForFrame(MD)), tD !== BD.frame && (SD = iD.createKeyForFrame(tD));
      const ZD = iD.getKeys();
      if (1 === ZD.length) {
        const DD = iD._getKeyValue(ZD[0].value);
        yD.referenceValue = DD.clone ? DD.clone() : DD
      } else if (bD <= wD.frame) {
        const DD = iD._getKeyValue(wD.value);
        yD.referenceValue = DD.clone ? DD.clone() : DD
      } else if (bD >= BD.frame) {
        const DD = iD._getKeyValue(BD.value);
        yD.referenceValue = DD.clone ? DD.clone() : DD
      } else {
        ND.key = 0;
        const DD = iD._interpolate(bD, ND);
        yD.referenceValue = DD.clone ? DD.clone() : DD
      }
      iD.dataType === gD.ANIMATIONTYPE_QUATERNION ? yD.referenceValue.normalize().conjugateInPlace() : iD.dataType === gD.ANIMATIONTYPE_MATRIX && (yD.referenceValue.decompose(yD.referenceScaling, yD.referenceQuaternion, yD.referencePosition), yD.referenceQuaternion.normalize().conjugateInPlace());
      let oD = Number.MAX_VALUE;
      const vD = pD.clipKeys ? [] : null;
      for (let ND = QD; ND <= SD; ND++) {
        let DD = ZD[ND];
        if ((vD || pD.cloneOriginalAnimation) && (DD = {
            frame: DD.frame,
            value: DD.value.clone ? DD.value.clone() : DD.value,
            inTangent: DD.inTangent,
            outTangent: DD.outTangent,
            interpolation: DD.interpolation,
            lockedTangent: DD.lockedTangent,
            easingFunction: DD.easingFunction
          }, vD && (oD === Number.MAX_VALUE && (oD = DD.frame), DD.frame -= oD, vD.push(DD))), !ND || iD.dataType === gD.ANIMATIONTYPE_FLOAT || DD.value !== wD.value) switch (iD.dataType) {
          case gD.ANIMATIONTYPE_MATRIX:
            DD.value.decompose(yD.keyScaling, yD.keyQuaternion, yD.keyPosition), yD.keyPosition.EcD(yD.referencePosition), yD.keyScaling.divideInPlace(yD.referenceScaling), yD.referenceQuaternion.multiplyToRef(yD.keyQuaternion, yD.keyQuaternion), ID.d.ComposeToRef(yD.keyScaling, yD.keyQuaternion, yD.keyPosition, DD.value);
            break;
          case gD.ANIMATIONTYPE_QUATERNION:
            yD.referenceValue.multiplyToRef(DD.value, DD.value);
            break;
          case gD.ANIMATIONTYPE_VECTOR2:
          case gD.ANIMATIONTYPE_VECTOR3:
          case gD.ANIMATIONTYPE_COLOR3:
          case gD.ANIMATIONTYPE_COLOR4:
            DD.value.subtractToRef(yD.referenceValue, DD.value);
            break;
          case gD.ANIMATIONTYPE_SIZE:
            DD.value.width -= yD.referenceValue.width, DD.value.height -= yD.referenceValue.height;
            break;
          default:
            DD.value -= yD.referenceValue
        }
      }
      return vD && iD.setKeys(vD, !0), iD
    }

    function mD(DD, CD, cD, ID) {
      const pD = new gD(DD + "Animation", DD, cD, CD, gD.ANIMATIONLOOPMODE_CONSTANT);
      return pD.setEasingFunction(ID), pD
    }

    function nD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
      const BD = gD._PrepareAnimation(DD, cD, ID, pD, iD, fD, bD, QD);
      return BD ? (CD.hq && (SD = CD.hq()), SD ? SD.beginDirectAnimation(CD, [BD], 0, pD, BD.ni !== gD.ANIMATIONLOOPMODE_CONSTANT, 1, wD) : null) : null
    }

    function OD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
      const BD = gD._PrepareAnimation(DD, ID, pD, iD, fD, bD, QD, wD);
      if (!BD) return null;
      return CD.hq().beginDirectHierarchyAnimation(CD, cD, [BD], 0, iD, 1 === BD.ni, 1, SD)
    }

    function PD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
      const SD = gD._PrepareAnimation(DD, cD, ID, pD, iD, fD, bD, QD);
      return SD ? (CD.animations.push(SD), CD.hq().beginAnimation(CD, 0, pD, 1 === SD.ni, 1, wD)) : null
    }

    function HD(DD, CD, cD, ID, pD, iD, fD) {
      let bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        QD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        wD = arguments.length > 9 ? arguments[9] : void 0;
      if (fD <= 0) return cD[DD] = CD, bD && bD(), null;
      const SD = pD * (fD / 1e3);
      iD.setKeys(wD ?? [{
        frame: 0,
        value: cD[DD].clone ? cD[DD].clone() : cD[DD]
      }, {
        frame: SD,
        value: CD
      }]), cD.animations || (cD.animations = []), cD.animations.push(iD);
      return ID.beginAnimation(cD, 0, SD, !1, 1, bD ?? void 0, void 0, QD)
    }

    function UD(DD, CD) {
      SD.d.AppendSerializedAnimations(DD, CD)
    }

    function xD(DD) {
      const CD = new gD(DD.name, DD.property, DD.framePerSecond, DD.dataType, DD.loopBehavior),
        cD = DD.dataType,
        iD = [];
      let fD, bD;
      for (DD.enableBlending && (CD.enableBlending = DD.enableBlending), DD.blendingSpeed && (CD.blendingSpeed = DD.blendingSpeed), bD = 0; bD < DD.keys.length; bD++) {
        const CD = DD.keys[bD];
        let QD, wD, SD;
        switch (cD) {
          case gD.ANIMATIONTYPE_FLOAT:
            fD = CD.values[0], CD.values.length >= 2 && (QD = CD.values[1]), CD.values.length >= 3 && (wD = CD.values[2]), CD.values.length >= 4 && (SD = CD.values[3]);
            break;
          case gD.ANIMATIONTYPE_QUATERNION:
            if (fD = ID.h.FromArray(CD.values), CD.values.length >= 8) {
              const DD = ID.h.FromArray(CD.values.slice(4, 8));
              DD.equals(ID.h.Zero()) || (QD = DD)
            }
            if (CD.values.length >= 12) {
              const DD = ID.h.FromArray(CD.values.slice(8, 12));
              DD.equals(ID.h.Zero()) || (wD = DD)
            }
            CD.values.length >= 13 && (SD = CD.values[12]);
            break;
          case gD.ANIMATIONTYPE_MATRIX:
            fD = ID.d.FromArray(CD.values), CD.values.length >= 17 && (SD = CD.values[16]);
            break;
          case gD.ANIMATIONTYPE_COLOR3:
            fD = pD.d.FromArray(CD.values), CD.values[3] && (QD = pD.d.FromArray(CD.values[3])), CD.values[4] && (wD = pD.d.FromArray(CD.values[4])), CD.values[5] && (SD = CD.values[5]);
            break;
          case gD.ANIMATIONTYPE_COLOR4:
            fD = pD.e.FromArray(CD.values), CD.values[4] && (QD = pD.e.FromArray(CD.values[4])), CD.values[5] && (wD = pD.e.FromArray(CD.values[5])), CD.values[6] && (SD = CD.values[6]);
            break;
          case gD.ANIMATIONTYPE_VECTOR3:
          default:
            fD = ID.p.FromArray(CD.values), CD.values[3] && (QD = ID.p.FromArray(CD.values[3])), CD.values[4] && (wD = ID.p.FromArray(CD.values[4])), CD.values[5] && (SD = CD.values[5])
        }
        const BD = {};
        BD.frame = CD.frame, BD.value = fD, void 0 != QD && (BD.inTangent = QD), void 0 != wD && (BD.outTangent = wD), void 0 != SD && (BD.interpolation = SD), iD.push(BD)
      }
      if (CD.setKeys(iD), DD.df)
        for (bD = 0; bD < DD.df.length; bD++) fD = DD.df[bD], CD.createRange(fD.name, fD.from, fD.to);
      return CD
    }
    async function qD(DD, CD) {
      return await new Promise(((cD, ID) => {
        const pD = new wD.b;
        pD.addEventListener("readystatechange", (() => {
          if (4 == pD.readyState)
            if (200 == pD.status) {
              let CD = JSON.parse(pD.responseText);
              if (CD.animations && (CD = CD.animations), CD.length) {
                const DD = [];
                for (const cD of CD) DD.push(xD(cD));
                cD(DD)
              } else {
                const ID = xD(CD);
                DD && (ID.name = DD), cD(ID)
              }
            } else ID("Unable to load the animation")
        })), pD.open("GET", CD), pD.send()
      }))
    }
    async function JD(DD) {
      const CD = this?.SnippetUrl ?? gD.SnippetUrl;
      return await new Promise(((cD, ID) => {
        const pD = new wD.b;
        pD.addEventListener("readystatechange", (() => {
          if (4 == pD.readyState)
            if (200 == pD.status) {
              const CD = JSON.parse(JSON.parse(pD.responseText).jsonPayload);
              if (CD.animations) {
                const ID = JSON.parse(CD.animations),
                  pD = [];
                for (const CD of ID.animations) {
                  const cD = xD(CD);
                  cD.snippetId = DD, pD.push(cD)
                }
                cD(pD)
              } else {
                const ID = xD(JSON.parse(CD.animation));
                ID.snippetId = DD, cD(ID)
              }
            } else ID("Unable to load the snippet " + DD)
        })), pD.open("GET", CD + "/" + DD.replace(/#/g, "/")), pD.send()
      }))
    }
    gD._UniqueIdGenerator = 0, gD.AllowMatricesInterpolation = !1, gD.AllowMatrixDecomposeForInterpolation = !0, gD.InheritOriginalValueFromActiveAnimations = !1, gD.SnippetUrl = "https://snippet.babylonjs.com", gD.ANIMATIONTYPE_FLOAT = 0, gD.ANIMATIONTYPE_VECTOR3 = 1, gD.ANIMATIONTYPE_QUATERNION = 2, gD.ANIMATIONTYPE_MATRIX = 3, gD.ANIMATIONTYPE_COLOR3 = 4, gD.ANIMATIONTYPE_COLOR4 = 7, gD.ANIMATIONTYPE_VECTOR2 = 5, gD.ANIMATIONTYPE_SIZE = 6, gD.ANIMATIONLOOPMODE_RELATIVE = 0, gD.ANIMATIONLOOPMODE_CYCLE = 1, gD.ANIMATIONLOOPMODE_CONSTANT = 2, gD.ANIMATIONLOOPMODE_YOYO = 4, gD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const KD = JD;
    let aD = !1;

    function VD() {
      aD || (aD = !0, gD.Parse = xD, gD.ParseFromFileAsync = qD, gD.ParseFromSnippetAsync = JD, gD.CreateFromSnippetAsync = KD, gD.CreateAnimation = mD, gD.CreateAndStartAnimation = nD, gD.CreateAndStartHierarchyAnimation = OD, gD.CreateMergeAndStartAnimation = PD, gD.MakeAnimationAdditive = XD, gD.TransitionTo = HD, gD.AppendSerializedAnimations = UD, (0, BD.d)("BABYLON.Animation", gD), bD.b._AnimationRangeFactory = (DD, CD, cD) => new fD.d(DD, CD, cD))
    }
  },
  40175: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD, CD, cD) {
        this.name = DD, this.from = CD, this.to = cD
      }
      clone() {
        return new ID(this.name, this.from, this.to)
      }
    }
  },
  40207: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.c,
      e: () => ID.k
    });
    var ID = cD(39286);
    (0, ID.g)()
  },
  40198: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID.c
    });
    var ID = cD(39595);
    (0, ID.b)()
  },
  40180: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID.c
    });
    var ID = cD(39586);
    (0, ID.e)()
  },
  40215: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID.d
    });
    var ID = cD(39531);
    (0, ID.f)()
  },
  40178: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID.g
    });
    var ID = cD(39569);
    (0, ID.e)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);