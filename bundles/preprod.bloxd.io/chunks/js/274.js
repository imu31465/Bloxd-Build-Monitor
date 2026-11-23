export const id = 274;
export const ids = [274];
export const modules = {
  40934: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => RC,
      e: () => HC,
      f: () => pC,
      i: () => PC,
      j: () => NC,
      k: () => SC,
      l: () => gC,
      m: () => MC
    });
    var QC = ZC(36963),
      wC = ZC(37142),
      bC = ZC(36991),
      nC = ZC(40941),
      fC = ZC(40046),
      oC = ZC(39833),
      qC = ZC(39867),
      FC = ZC(39842),
      WC = ZC(37002);
    const NC = Object.freeze(new QC.f(0, 0, 0, 0)),
      MC = Object.freeze(QC.r.Zero()),
      gC = Object.freeze(QC.n.Zero()),
      SC = Object.freeze(oC.d.Zero()),
      pC = Object.freeze(wC.e.Black()),
      PC = Object.freeze(new wC.g(0, 0, 0, 0)),
      GC = {
        key: 0,
        repeatCount: 0,
        zb: 2
      };
    class RC {
      static _PrepareAnimation(CC, zC, ZC, bC, nC, fC, qC, FC) {
        let WC;
        if (!isNaN(parseFloat(nC)) && isFinite(nC) ? WC = RC.ANIMATIONTYPE_FLOAT : nC instanceof QC.f ? WC = RC.ANIMATIONTYPE_QUATERNION : nC instanceof QC.r ? WC = RC.ANIMATIONTYPE_VECTOR3 : nC instanceof QC.n ? WC = RC.ANIMATIONTYPE_VECTOR2 : nC instanceof wC.e ? WC = RC.ANIMATIONTYPE_COLOR3 : nC instanceof wC.g ? WC = RC.ANIMATIONTYPE_COLOR4 : nC instanceof oC.d && (WC = RC.ANIMATIONTYPE_SIZE), void 0 == WC) return null;
        const NC = new RC(CC, zC, ZC, WC, qC),
          MC = [{
            frame: 0,
            value: nC
          }, {
            frame: bC,
            value: fC
          }];
        return NC.setKeys(MC), void 0 !== FC && NC.setEasingFunction(FC), NC
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const CC of this._runtimeAnimations)
          if (!CC.isStopped()) return !0;
        return !1
      }
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.name = CC, this.targetProperty = zC, this.framePerSecond = ZC, this.dataType = QC, this.zb = wC, this.enableBlending = bC, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = zC.split("."), this.dataType = QC, this.zb = void 0 === wC ? RC.ANIMATIONLOOPMODE_CYCLE : wC, this.uniqueId = RC._UniqueIdGenerator++
      }
      toString(CC) {
        let zC = "Name: " + this.name + ", property: " + this.targetProperty;
        if (zC += ", datatype: " + ["Float", "Eg", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], zC += ", nKeys: " + (this._keys ? this._keys.length : "none"), zC += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), CC) {
          zC += ", Ranges: {";
          let CC = !0;
          for (const ZC in this._ranges) CC || (zC += ", "), CC = !1, zC += ZC;
          zC += "}"
        }
        return zC
      }
      addEvent(CC) {
        this._events.push(CC), this._events.sort(((CC, zC) => CC.frame - zC.frame))
      }
      removeEvents(CC) {
        for (let zC = 0; zC < this._events.length; zC++) this._events[zC].frame === CC && (this._events.splice(zC, 1), zC--)
      }
      getEvents() {
        return this._events
      }
      createRange(CC, zC, ZC) {
        this._ranges[CC] || (this._ranges[CC] = new nC.e(CC, zC, ZC))
      }
      deleteRange(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZC = this._ranges[CC];
        if (ZC) {
          if (zC) {
            const CC = ZC.from,
              zC = ZC.to;
            for (let ZC = this._keys.length - 1; ZC >= 0; ZC--) this._keys[ZC].frame >= CC && this._keys[ZC].frame <= zC && this._keys.splice(ZC, 1)
          }
          this._ranges[CC] = null
        }
      }
      getRange(CC) {
        return this._ranges[CC]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let CC = 0;
        for (let zC = 0, ZC = this._keys.length; zC < ZC; zC++) CC < this._keys[zC].frame && (CC = this._keys[zC].frame);
        return CC
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(CC) {
        this._easingFunction = CC
      }
      floatInterpolateFunction(CC, zC, ZC) {
        return (0, bC.Lerp)(CC, zC, ZC)
      }
      floatInterpolateFunctionWithTangents(CC, zC, ZC, QC, wC) {
        return (0, bC.Hermite)(CC, zC, ZC, QC, wC)
      }
      quaternionInterpolateFunction(CC, zC, ZC) {
        return QC.f.Slerp(CC, zC, ZC)
      }
      quaternionInterpolateFunctionWithTangents(CC, zC, ZC, wC, bC) {
        return QC.f.Hermite(CC, zC, ZC, wC, bC).normalize()
      }
      vector3InterpolateFunction(CC, zC, ZC) {
        return QC.r.Lerp(CC, zC, ZC)
      }
      vector3InterpolateFunctionWithTangents(CC, zC, ZC, wC, bC) {
        return QC.r.Hermite(CC, zC, ZC, wC, bC)
      }
      vector2InterpolateFunction(CC, zC, ZC) {
        return QC.n.Lerp(CC, zC, ZC)
      }
      vector2InterpolateFunctionWithTangents(CC, zC, ZC, wC, bC) {
        return QC.n.Hermite(CC, zC, ZC, wC, bC)
      }
      sizeInterpolateFunction(CC, zC, ZC) {
        return oC.d.Lerp(CC, zC, ZC)
      }
      color3InterpolateFunction(CC, zC, ZC) {
        return wC.e.Lerp(CC, zC, ZC)
      }
      color3InterpolateFunctionWithTangents(CC, zC, ZC, QC, bC) {
        return wC.e.Hermite(CC, zC, ZC, QC, bC)
      }
      color4InterpolateFunction(CC, zC, ZC) {
        return wC.g.Lerp(CC, zC, ZC)
      }
      color4InterpolateFunctionWithTangents(CC, zC, ZC, QC, bC) {
        return wC.g.Hermite(CC, zC, ZC, QC, bC)
      }
      _getKeyValue(CC) {
        return "function" === typeof CC ? CC() : CC
      }
      evaluate(CC) {
        return GC.key = 0, this._interpolate(CC, GC)
      }
      _interpolate(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (zC.zb === RC.ANIMATIONLOOPMODE_CONSTANT && zC.repeatCount > 0) return zC.highLimitValue.clone ? zC.highLimitValue.clone() : zC.highLimitValue;
        const QC = this._keys;
        let wC;
        if (this._coreAnimation) wC = this._coreAnimation._key;
        else {
          const bC = QC.length;
          for (wC = zC.key; wC >= 0 && CC < QC[wC].frame;) --wC;
          for (; wC + 1 <= bC - 1 && CC >= QC[wC + 1].frame;) ++wC;
          if (zC.key = wC, wC < 0) return ZC ? void 0 : this._getKeyValue(QC[0].value);
          if (wC + 1 > bC - 1) return ZC ? void 0 : this._getKeyValue(QC[bC - 1].value);
          this._key = wC
        }
        const bC = QC[wC],
          nC = QC[wC + 1];
        if (ZC && (CC === bC.frame || CC === nC.frame)) return;
        const fC = this._getKeyValue(bC.value),
          oC = this._getKeyValue(nC.value);
        if (1 === bC.interpolation) return nC.frame > CC ? fC : oC;
        const qC = void 0 !== bC.outTangent && void 0 !== nC.inTangent,
          FC = nC.frame - bC.frame;
        let WC = (CC - bC.frame) / FC;
        const GC = bC.easingFunction || this.getEasingFunction();
        switch (GC && (WC = GC.ease(WC)), this.dataType) {
          case RC.ANIMATIONTYPE_FLOAT: {
            const CC = qC ? this.floatInterpolateFunctionWithTangents(fC, bC.outTangent * FC, oC, nC.inTangent * FC, WC) : this.floatInterpolateFunction(fC, oC, WC);
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return CC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (zC.offsetValue ?? 0) * zC.repeatCount + CC
            }
            break
          }
          case RC.ANIMATIONTYPE_QUATERNION: {
            const CC = qC ? this.quaternionInterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.quaternionInterpolateFunction(fC, oC, WC);
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return CC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return CC.addInPlace((zC.offsetValue || NC).scale(zC.repeatCount))
            }
            return CC
          }
          case RC.ANIMATIONTYPE_VECTOR3: {
            const CC = qC ? this.vector3InterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.vector3InterpolateFunction(fC, oC, WC);
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return CC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return CC.add((zC.offsetValue || MC).scale(zC.repeatCount))
            }
            break
          }
          case RC.ANIMATIONTYPE_VECTOR2: {
            const CC = qC ? this.vector2InterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.vector2InterpolateFunction(fC, oC, WC);
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return CC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return CC.add((zC.offsetValue || gC).scale(zC.repeatCount))
            }
            break
          }
          case RC.ANIMATIONTYPE_SIZE:
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(fC, oC, WC);
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(fC, oC, WC).add((zC.offsetValue || SC).scale(zC.repeatCount))
            }
            break;
          case RC.ANIMATIONTYPE_COLOR3: {
            const CC = qC ? this.color3InterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.color3InterpolateFunction(fC, oC, WC);
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return CC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return CC.add((zC.offsetValue || pC).scale(zC.repeatCount))
            }
            break
          }
          case RC.ANIMATIONTYPE_COLOR4: {
            const CC = qC ? this.color4InterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.color4InterpolateFunction(fC, oC, WC);
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return CC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return CC.add((zC.offsetValue || PC).scale(zC.repeatCount))
            }
            break
          }
          case RC.ANIMATIONTYPE_MATRIX:
            switch (zC.zb) {
              case RC.ANIMATIONLOOPMODE_CYCLE:
              case RC.ANIMATIONLOOPMODE_CONSTANT:
              case RC.ANIMATIONLOOPMODE_YOYO:
                return RC.AllowMatricesInterpolation ? this.matrixInterpolateFunction(fC, oC, WC, zC.workValue) : fC;
              case RC.ANIMATIONLOOPMODE_RELATIVE:
              case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return fC
            }
        }
        return 0
      }
      matrixInterpolateFunction(CC, zC, ZC, wC) {
        return RC.AllowMatrixDecomposeForInterpolation ? wC ? (QC.b.DecomposeLerpToRef(CC, zC, ZC, wC), wC) : QC.b.DecomposeLerp(CC, zC, ZC) : wC ? (QC.b.LerpToRef(CC, zC, ZC, wC), wC) : QC.b.Lerp(CC, zC, ZC)
      }
      clone() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = new RC(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.zb);
        if (zC.enableBlending = this.enableBlending, zC.blendingSpeed = this.blendingSpeed, this._keys && zC.setKeys(this._keys, !1, CC), this._ranges) {
          zC._ranges = {};
          for (const CC in this._ranges) {
            const ZC = this._ranges[CC];
            ZC && (zC._ranges[CC] = ZC.clone())
          }
        }
        return zC
      }
      setKeys(CC) {
        let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = CC;
        else if (this._keys = CC.slice(0), zC)
          for (let ZC = 0; ZC < this._keys.length; ZC++) {
            const CC = this._keys[ZC];
            this._keys[ZC] = {
              frame: CC.frame,
              value: CC.value.clone ? CC.value.clone() : CC.value,
              inTangent: CC.inTangent && CC.inTangent.clone ? CC.inTangent.clone() : CC.inTangent,
              outTangent: CC.outTangent && CC.outTangent.clone ? CC.outTangent.clone() : CC.outTangent,
              interpolation: CC.interpolation,
              lockedTangent: CC.lockedTangent,
              easingFunction: CC.easingFunction
            }
          }
      }
      createKeyForFrame(CC) {
        GC.key = 0;
        const zC = this._interpolate(CC, GC, !0);
        if (!zC) return this._keys[GC.key].frame === CC ? GC.key : GC.key + 1;
        const ZC = {
          frame: CC,
          value: zC.clone ? zC.clone() : zC
        };
        return this._keys.splice(GC.key + 1, 0, ZC), GC.key + 1
      }
      serialize() {
        const CC = {};
        CC.name = this.name, CC.property = this.targetProperty, CC.framePerSecond = this.framePerSecond, CC.dataType = this.dataType, CC.loopBehavior = this.zb, CC.enableBlending = this.enableBlending, CC.blendingSpeed = this.blendingSpeed;
        const zC = this.dataType;
        CC.keys = [];
        const ZC = this.getKeys();
        for (let QC = 0; QC < ZC.length; QC++) {
          const wC = ZC[QC],
            bC = {};
          switch (bC.frame = wC.frame, zC) {
            case RC.ANIMATIONTYPE_FLOAT:
              bC.values = [wC.value], void 0 !== wC.inTangent && bC.values.push(wC.inTangent), void 0 !== wC.outTangent && (void 0 === wC.inTangent && bC.values.push(void 0), bC.values.push(wC.outTangent)), void 0 !== wC.interpolation && (void 0 === wC.inTangent && bC.values.push(void 0), void 0 === wC.outTangent && bC.values.push(void 0), bC.values.push(wC.interpolation));
              break;
            case RC.ANIMATIONTYPE_QUATERNION:
            case RC.ANIMATIONTYPE_MATRIX:
            case RC.ANIMATIONTYPE_VECTOR3:
            case RC.ANIMATIONTYPE_COLOR3:
            case RC.ANIMATIONTYPE_COLOR4:
              bC.values = wC.value.VZC(), void 0 != wC.inTangent && bC.values.push(wC.inTangent.VZC()), void 0 != wC.outTangent && (void 0 === wC.inTangent && bC.values.push(void 0), bC.values.push(wC.outTangent.VZC())), void 0 !== wC.interpolation && (void 0 === wC.inTangent && bC.values.push(void 0), void 0 === wC.outTangent && bC.values.push(void 0), bC.values.push(wC.interpolation))
          }
          CC.keys.push(bC)
        }
        CC.np = [];
        for (const QC in this._ranges) {
          const zC = this._ranges[QC];
          if (!zC) continue;
          const ZC = {};
          ZC.name = QC, ZC.from = zC.from, ZC.to = zC.to, CC.np.push(ZC)
        }
        return CC
      }
      static _UniversalLerp(CC, zC, ZC) {
        const QC = CC.constructor;
        return QC.Lerp ? QC.Lerp(CC, zC, ZC) : QC.Slerp ? QC.Slerp(CC, zC, ZC) : CC.toFixed ? CC * (1 - ZC) + ZC * zC : zC
      }
    }

    function AC(CC, zC, ZC) {
      let wC;
      wC = "object" === typeof zC ? zC : {
        referenceFrame: zC ?? 0,
        range: ZC,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let bC = CC;
      wC.cloneOriginalAnimation && (bC = CC.clone(), bC.name = wC.clonedAnimationName || bC.name);
      const nC = bC.getKeys();
      if (!nC.length) return bC;
      const fC = wC.referenceFrame && wC.referenceFrame >= 0 ? wC.referenceFrame : 0;
      let oC = 0;
      const qC = nC[0];
      let FC = nC.length - 1;
      const WC = nC[FC],
        NC = {
          referenceValue: qC.value,
          referencePosition: QC.j.Eg[0],
          referenceQuaternion: QC.j.Quaternion[0],
          referenceScaling: QC.j.Eg[1],
          keyPosition: QC.j.Eg[2],
          keyQuaternion: QC.j.Quaternion[1],
          keyScaling: QC.j.Eg[3]
        };
      let MC = qC.frame,
        gC = WC.frame;
      if (wC.range) {
        const CC = bC.getRange(wC.range);
        CC && (MC = CC.from, gC = CC.to)
      } else MC = wC.fromFrame ?? MC, gC = wC.toFrame ?? gC;
      MC !== qC.frame && (oC = bC.createKeyForFrame(MC)), gC !== WC.frame && (FC = bC.createKeyForFrame(gC));
      const SC = bC.getKeys();
      if (1 === SC.length) {
        const CC = bC._getKeyValue(SC[0].value);
        NC.referenceValue = CC.clone ? CC.clone() : CC
      } else if (fC <= qC.frame) {
        const CC = bC._getKeyValue(qC.value);
        NC.referenceValue = CC.clone ? CC.clone() : CC
      } else if (fC >= WC.frame) {
        const CC = bC._getKeyValue(WC.value);
        NC.referenceValue = CC.clone ? CC.clone() : CC
      } else {
        GC.key = 0;
        const CC = bC._interpolate(fC, GC);
        NC.referenceValue = CC.clone ? CC.clone() : CC
      }
      bC.dataType === RC.ANIMATIONTYPE_QUATERNION ? NC.referenceValue.normalize().conjugateInPlace() : bC.dataType === RC.ANIMATIONTYPE_MATRIX && (NC.referenceValue.decompose(NC.referenceScaling, NC.referenceQuaternion, NC.referencePosition), NC.referenceQuaternion.normalize().conjugateInPlace());
      let pC = Number.MAX_VALUE;
      const PC = wC.clipKeys ? [] : null;
      for (let GC = oC; GC <= FC; GC++) {
        let CC = SC[GC];
        if ((PC || wC.cloneOriginalAnimation) && (CC = {
            frame: CC.frame,
            value: CC.value.clone ? CC.value.clone() : CC.value,
            inTangent: CC.inTangent,
            outTangent: CC.outTangent,
            interpolation: CC.interpolation,
            lockedTangent: CC.lockedTangent,
            easingFunction: CC.easingFunction
          }, PC && (pC === Number.MAX_VALUE && (pC = CC.frame), CC.frame -= pC, PC.push(CC))), !GC || bC.dataType === RC.ANIMATIONTYPE_FLOAT || CC.value !== qC.value) switch (bC.dataType) {
          case RC.ANIMATIONTYPE_MATRIX:
            CC.value.decompose(NC.keyScaling, NC.keyQuaternion, NC.keyPosition), NC.keyPosition.RQC(NC.referencePosition), NC.keyScaling.divideInPlace(NC.referenceScaling), NC.referenceQuaternion.multiplyToRef(NC.keyQuaternion, NC.keyQuaternion), QC.b.ComposeToRef(NC.keyScaling, NC.keyQuaternion, NC.keyPosition, CC.value);
            break;
          case RC.ANIMATIONTYPE_QUATERNION:
            NC.referenceValue.multiplyToRef(CC.value, CC.value);
            break;
          case RC.ANIMATIONTYPE_VECTOR2:
          case RC.ANIMATIONTYPE_VECTOR3:
          case RC.ANIMATIONTYPE_COLOR3:
          case RC.ANIMATIONTYPE_COLOR4:
            CC.value.subtractToRef(NC.referenceValue, CC.value);
            break;
          case RC.ANIMATIONTYPE_SIZE:
            CC.value.width -= NC.referenceValue.width, CC.value.height -= NC.referenceValue.height;
            break;
          default:
            CC.value -= NC.referenceValue
        }
      }
      return PC && bC.setKeys(PC, !0), bC
    }

    function xC(CC, zC, ZC, QC) {
      const wC = new RC(CC + "Animation", CC, ZC, zC, RC.ANIMATIONLOOPMODE_CONSTANT);
      return wC.setEasingFunction(QC), wC
    }

    function JC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
      const WC = RC._PrepareAnimation(CC, ZC, QC, wC, bC, nC, fC, oC);
      return WC ? (zC.Km && (FC = zC.Km()), FC ? FC.beginDirectAnimation(zC, [WC], 0, wC, WC.zb !== RC.ANIMATIONLOOPMODE_CONSTANT, 1, qC) : null) : null
    }

    function IC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
      const WC = RC._PrepareAnimation(CC, QC, wC, bC, nC, fC, oC, qC);
      if (!WC) return null;
      return zC.Km().beginDirectHierarchyAnimation(zC, ZC, [WC], 0, bC, 1 === WC.zb, 1, FC)
    }

    function iC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
      const FC = RC._PrepareAnimation(CC, ZC, QC, wC, bC, nC, fC, oC);
      return FC ? (zC.animations.push(FC), zC.Km().beginAnimation(zC, 0, wC, 1 === FC.zb, 1, qC)) : null
    }

    function vC(CC, zC, ZC, QC, wC, bC, nC) {
      let fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        oC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        qC = arguments.length > 9 ? arguments[9] : void 0;
      if (nC <= 0) return ZC[CC] = zC, fC && fC(), null;
      const FC = wC * (nC / 1e3);
      bC.setKeys(qC ?? [{
        frame: 0,
        value: ZC[CC].clone ? ZC[CC].clone() : ZC[CC]
      }, {
        frame: FC,
        value: zC
      }]), ZC.animations || (ZC.animations = []), ZC.animations.push(bC);
      return QC.beginAnimation(ZC, 0, FC, !1, 1, fC ?? void 0, void 0, oC)
    }

    function eC(CC, zC) {
      FC.d.AppendSerializedAnimations(CC, zC)
    }

    function hC(CC) {
      const zC = new RC(CC.name, CC.property, CC.framePerSecond, CC.dataType, CC.loopBehavior),
        ZC = CC.dataType,
        bC = [];
      let nC, fC;
      for (CC.enableBlending && (zC.enableBlending = CC.enableBlending), CC.blendingSpeed && (zC.blendingSpeed = CC.blendingSpeed), fC = 0; fC < CC.keys.length; fC++) {
        const zC = CC.keys[fC];
        let oC, qC, FC;
        switch (ZC) {
          case RC.ANIMATIONTYPE_FLOAT:
            nC = zC.values[0], zC.values.length >= 2 && (oC = zC.values[1]), zC.values.length >= 3 && (qC = zC.values[2]), zC.values.length >= 4 && (FC = zC.values[3]);
            break;
          case RC.ANIMATIONTYPE_QUATERNION:
            if (nC = QC.f.FromArray(zC.values), zC.values.length >= 8) {
              const CC = QC.f.FromArray(zC.values.slice(4, 8));
              CC.equals(QC.f.Zero()) || (oC = CC)
            }
            if (zC.values.length >= 12) {
              const CC = QC.f.FromArray(zC.values.slice(8, 12));
              CC.equals(QC.f.Zero()) || (qC = CC)
            }
            zC.values.length >= 13 && (FC = zC.values[12]);
            break;
          case RC.ANIMATIONTYPE_MATRIX:
            nC = QC.b.FromArray(zC.values), zC.values.length >= 17 && (FC = zC.values[16]);
            break;
          case RC.ANIMATIONTYPE_COLOR3:
            nC = wC.e.FromArray(zC.values), zC.values[3] && (oC = wC.e.FromArray(zC.values[3])), zC.values[4] && (qC = wC.e.FromArray(zC.values[4])), zC.values[5] && (FC = zC.values[5]);
            break;
          case RC.ANIMATIONTYPE_COLOR4:
            nC = wC.g.FromArray(zC.values), zC.values[4] && (oC = wC.g.FromArray(zC.values[4])), zC.values[5] && (qC = wC.g.FromArray(zC.values[5])), zC.values[6] && (FC = zC.values[6]);
            break;
          case RC.ANIMATIONTYPE_VECTOR3:
          default:
            nC = QC.r.FromArray(zC.values), zC.values[3] && (oC = QC.r.FromArray(zC.values[3])), zC.values[4] && (qC = QC.r.FromArray(zC.values[4])), zC.values[5] && (FC = zC.values[5])
        }
        const WC = {};
        WC.frame = zC.frame, WC.value = nC, void 0 != oC && (WC.inTangent = oC), void 0 != qC && (WC.outTangent = qC), void 0 != FC && (WC.interpolation = FC), bC.push(WC)
      }
      if (zC.setKeys(bC), CC.np)
        for (fC = 0; fC < CC.np.length; fC++) nC = CC.np[fC], zC.createRange(nC.name, nC.from, nC.to);
      return zC
    }
    async function KC(CC, zC) {
      return await new Promise(((ZC, QC) => {
        const wC = new qC.d;
        wC.addEventListener("readystatechange", (() => {
          if (4 == wC.readyState)
            if (200 == wC.status) {
              let zC = JSON.parse(wC.responseText);
              if (zC.animations && (zC = zC.animations), zC.length) {
                const CC = [];
                for (const ZC of zC) CC.push(hC(ZC));
                ZC(CC)
              } else {
                const QC = hC(zC);
                CC && (QC.name = CC), ZC(QC)
              }
            } else QC("Unable to load the animation")
        })), wC.open("GET", zC), wC.send()
      }))
    }
    async function YC(CC) {
      const zC = this?.SnippetUrl ?? RC.SnippetUrl;
      return await new Promise(((ZC, QC) => {
        const wC = new qC.d;
        wC.addEventListener("readystatechange", (() => {
          if (4 == wC.readyState)
            if (200 == wC.status) {
              const zC = JSON.parse(JSON.parse(wC.responseText).jsonPayload);
              if (zC.animations) {
                const QC = JSON.parse(zC.animations),
                  wC = [];
                for (const zC of QC.animations) {
                  const ZC = hC(zC);
                  ZC.snippetId = CC, wC.push(ZC)
                }
                ZC(wC)
              } else {
                const QC = hC(JSON.parse(zC.animation));
                QC.snippetId = CC, ZC(QC)
              }
            } else QC("Unable to load the snippet " + CC)
        })), wC.open("GET", zC + "/" + CC.replace(/#/g, "/")), wC.send()
      }))
    }
    RC._UniqueIdGenerator = 0, RC.AllowMatricesInterpolation = !1, RC.AllowMatrixDecomposeForInterpolation = !0, RC.InheritOriginalValueFromActiveAnimations = !1, RC.SnippetUrl = "https://snippet.babylonjs.com", RC.ANIMATIONTYPE_FLOAT = 0, RC.ANIMATIONTYPE_VECTOR3 = 1, RC.ANIMATIONTYPE_QUATERNION = 2, RC.ANIMATIONTYPE_MATRIX = 3, RC.ANIMATIONTYPE_COLOR3 = 4, RC.ANIMATIONTYPE_COLOR4 = 7, RC.ANIMATIONTYPE_VECTOR2 = 5, RC.ANIMATIONTYPE_SIZE = 6, RC.ANIMATIONLOOPMODE_RELATIVE = 0, RC.ANIMATIONLOOPMODE_CYCLE = 1, RC.ANIMATIONLOOPMODE_CONSTANT = 2, RC.ANIMATIONLOOPMODE_YOYO = 4, RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const dC = YC;
    let mC = !1;

    function HC() {
      mC || (mC = !0, RC.Parse = hC, RC.ParseFromFileAsync = KC, RC.ParseFromSnippetAsync = YC, RC.CreateFromSnippetAsync = dC, RC.CreateAnimation = xC, RC.CreateAndStartAnimation = JC, RC.CreateAndStartHierarchyAnimation = IC, RC.CreateMergeAndStartAnimation = iC, RC.MakeAnimationAdditive = AC, RC.TransitionTo = vC, RC.AppendSerializedAnimations = eC, (0, WC.d)("BABYLON.Animation", RC), fC.d._AnimationRangeFactory = (CC, zC, ZC) => new nC.e(CC, zC, ZC))
    }
  },
  40941: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    class QC {
      constructor(CC, zC, ZC) {
        this.name = CC, this.from = zC, this.to = ZC
      }
      clone() {
        return new QC(this.name, this.from, this.to)
      }
    }
  },
  40985: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.c,
      f: () => QC.k
    });
    var QC = ZC(39959);
    (0, QC.e)()
  },
  40968: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.h
    });
    var QC = ZC(40303);
    (0, QC.d)()
  },
  40948: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC.c
    });
    var QC = ZC(40292);
    (0, QC.d)()
  },
  40988: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC.b
    });
    var QC = ZC(40224);
    (0, QC.d)()
  },
  40946: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.e
    });
    var QC = ZC(40272);
    (0, QC.c)()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);