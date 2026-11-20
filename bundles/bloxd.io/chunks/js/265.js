export const id = 265;
export const ids = [265];
export const modules = {
  40844: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => oq,
      e: () => Mq,
      f: () => dq,
      g: () => jq,
      h: () => Wq,
      j: () => Vq,
      m: () => aq,
      q: () => Nq
    });
    var Yq = gq(37139),
      lq = gq(37289),
      Oq = gq(37158),
      mq = gq(40851),
      xq = gq(39960),
      Aq = gq(39774),
      cq = gq(39801),
      uq = gq(39779),
      Bq = gq(37171);
    const Wq = Object.freeze(new Yq.h(0, 0, 0, 0)),
      Nq = Object.freeze(Yq.q.Zero()),
      aq = Object.freeze(Yq.p.Zero()),
      Vq = Object.freeze(Aq.b.Zero()),
      dq = Object.freeze(lq.d.Black()),
      jq = Object.freeze(new lq.g(0, 0, 0, 0)),
      Hq = {
        key: 0,
        repeatCount: 0,
        Vq: 2
      };
    class oq {
      static _PrepareAnimation(qq, Eq, gq, Oq, mq, xq, cq, uq) {
        let Bq;
        if (!isNaN(parseFloat(mq)) && isFinite(mq) ? Bq = oq.ANIMATIONTYPE_FLOAT : mq instanceof Yq.h ? Bq = oq.ANIMATIONTYPE_QUATERNION : mq instanceof Yq.q ? Bq = oq.ANIMATIONTYPE_VECTOR3 : mq instanceof Yq.p ? Bq = oq.ANIMATIONTYPE_VECTOR2 : mq instanceof lq.d ? Bq = oq.ANIMATIONTYPE_COLOR3 : mq instanceof lq.g ? Bq = oq.ANIMATIONTYPE_COLOR4 : mq instanceof Aq.b && (Bq = oq.ANIMATIONTYPE_SIZE), void 0 == Bq) return null;
        const Wq = new oq(qq, Eq, gq, Bq, cq),
          Nq = [{
            frame: 0,
            value: mq
          }, {
            frame: Oq,
            value: xq
          }];
        return Wq.setKeys(Nq), void 0 !== uq && Wq.setEasingFunction(uq), Wq
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const qq of this._runtimeAnimations)
          if (!qq.isStopped()) return !0;
        return !1
      }
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.name = qq, this.targetProperty = Eq, this.framePerSecond = gq, this.dataType = Yq, this.Vq = lq, this.enableBlending = Oq, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Eq.split("."), this.dataType = Yq, this.Vq = void 0 === lq ? oq.ANIMATIONLOOPMODE_CYCLE : lq, this.uniqueId = oq._UniqueIdGenerator++
      }
      toString(qq) {
        let Eq = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Eq += ", datatype: " + ["Float", "Na", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Eq += ", nKeys: " + (this._keys ? this._keys.length : "none"), Eq += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), qq) {
          Eq += ", Ranges: {";
          let qq = !0;
          for (const gq in this._ranges) qq || (Eq += ", "), qq = !1, Eq += gq;
          Eq += "}"
        }
        return Eq
      }
      addEvent(qq) {
        this._events.push(qq), this._events.sort(((qq, Eq) => qq.frame - Eq.frame))
      }
      removeEvents(qq) {
        for (let Eq = 0; Eq < this._events.length; Eq++) this._events[Eq].frame === qq && (this._events.splice(Eq, 1), Eq--)
      }
      getEvents() {
        return this._events
      }
      createRange(qq, Eq, gq) {
        this._ranges[qq] || (this._ranges[qq] = new mq.d(qq, Eq, gq))
      }
      deleteRange(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gq = this._ranges[qq];
        if (gq) {
          if (Eq) {
            const qq = gq.from,
              Eq = gq.to;
            for (let gq = this._keys.length - 1; gq >= 0; gq--) this._keys[gq].frame >= qq && this._keys[gq].frame <= Eq && this._keys.splice(gq, 1)
          }
          this._ranges[qq] = null
        }
      }
      getRange(qq) {
        return this._ranges[qq]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let qq = 0;
        for (let Eq = 0, gq = this._keys.length; Eq < gq; Eq++) qq < this._keys[Eq].frame && (qq = this._keys[Eq].frame);
        return qq
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(qq) {
        this._easingFunction = qq
      }
      floatInterpolateFunction(qq, Eq, gq) {
        return (0, Oq.Lerp)(qq, Eq, gq)
      }
      floatInterpolateFunctionWithTangents(qq, Eq, gq, Yq, lq) {
        return (0, Oq.Hermite)(qq, Eq, gq, Yq, lq)
      }
      quaternionInterpolateFunction(qq, Eq, gq) {
        return Yq.h.Slerp(qq, Eq, gq)
      }
      quaternionInterpolateFunctionWithTangents(qq, Eq, gq, lq, Oq) {
        return Yq.h.Hermite(qq, Eq, gq, lq, Oq).normalize()
      }
      vector3InterpolateFunction(qq, Eq, gq) {
        return Yq.q.Lerp(qq, Eq, gq)
      }
      vector3InterpolateFunctionWithTangents(qq, Eq, gq, lq, Oq) {
        return Yq.q.Hermite(qq, Eq, gq, lq, Oq)
      }
      vector2InterpolateFunction(qq, Eq, gq) {
        return Yq.p.Lerp(qq, Eq, gq)
      }
      vector2InterpolateFunctionWithTangents(qq, Eq, gq, lq, Oq) {
        return Yq.p.Hermite(qq, Eq, gq, lq, Oq)
      }
      sizeInterpolateFunction(qq, Eq, gq) {
        return Aq.b.Lerp(qq, Eq, gq)
      }
      color3InterpolateFunction(qq, Eq, gq) {
        return lq.d.Lerp(qq, Eq, gq)
      }
      color3InterpolateFunctionWithTangents(qq, Eq, gq, Yq, Oq) {
        return lq.d.Hermite(qq, Eq, gq, Yq, Oq)
      }
      color4InterpolateFunction(qq, Eq, gq) {
        return lq.g.Lerp(qq, Eq, gq)
      }
      color4InterpolateFunctionWithTangents(qq, Eq, gq, Yq, Oq) {
        return lq.g.Hermite(qq, Eq, gq, Yq, Oq)
      }
      _getKeyValue(qq) {
        return "function" === typeof qq ? qq() : qq
      }
      evaluate(qq) {
        return Hq.key = 0, this._interpolate(qq, Hq)
      }
      _interpolate(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Eq.Vq === oq.ANIMATIONLOOPMODE_CONSTANT && Eq.repeatCount > 0) return Eq.highLimitValue.clone ? Eq.highLimitValue.clone() : Eq.highLimitValue;
        const Yq = this._keys;
        let lq;
        if (this._coreAnimation) lq = this._coreAnimation._key;
        else {
          const Oq = Yq.length;
          for (lq = Eq.key; lq >= 0 && qq < Yq[lq].frame;) --lq;
          for (; lq + 1 <= Oq - 1 && qq >= Yq[lq + 1].frame;) ++lq;
          if (Eq.key = lq, lq < 0) return gq ? void 0 : this._getKeyValue(Yq[0].value);
          if (lq + 1 > Oq - 1) return gq ? void 0 : this._getKeyValue(Yq[Oq - 1].value);
          this._key = lq
        }
        const Oq = Yq[lq],
          mq = Yq[lq + 1];
        if (gq && (qq === Oq.frame || qq === mq.frame)) return;
        const xq = this._getKeyValue(Oq.value),
          Aq = this._getKeyValue(mq.value);
        if (1 === Oq.interpolation) return mq.frame > qq ? xq : Aq;
        const cq = void 0 !== Oq.outTangent && void 0 !== mq.inTangent,
          uq = mq.frame - Oq.frame;
        let Bq = (qq - Oq.frame) / uq;
        const Hq = Oq.easingFunction || this.getEasingFunction();
        switch (Hq && (Bq = Hq.ease(Bq)), this.dataType) {
          case oq.ANIMATIONTYPE_FLOAT: {
            const qq = cq ? this.floatInterpolateFunctionWithTangents(xq, Oq.outTangent * uq, Aq, mq.inTangent * uq, Bq) : this.floatInterpolateFunction(xq, Aq, Bq);
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return qq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Eq.offsetValue ?? 0) * Eq.repeatCount + qq
            }
            break
          }
          case oq.ANIMATIONTYPE_QUATERNION: {
            const qq = cq ? this.quaternionInterpolateFunctionWithTangents(xq, Oq.outTangent.scale(uq), Aq, mq.inTangent.scale(uq), Bq) : this.quaternionInterpolateFunction(xq, Aq, Bq);
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return qq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return qq.addInPlace((Eq.offsetValue || Wq).scale(Eq.repeatCount))
            }
            return qq
          }
          case oq.ANIMATIONTYPE_VECTOR3: {
            const qq = cq ? this.vector3InterpolateFunctionWithTangents(xq, Oq.outTangent.scale(uq), Aq, mq.inTangent.scale(uq), Bq) : this.vector3InterpolateFunction(xq, Aq, Bq);
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return qq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return qq.add((Eq.offsetValue || Nq).scale(Eq.repeatCount))
            }
            break
          }
          case oq.ANIMATIONTYPE_VECTOR2: {
            const qq = cq ? this.vector2InterpolateFunctionWithTangents(xq, Oq.outTangent.scale(uq), Aq, mq.inTangent.scale(uq), Bq) : this.vector2InterpolateFunction(xq, Aq, Bq);
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return qq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return qq.add((Eq.offsetValue || aq).scale(Eq.repeatCount))
            }
            break
          }
          case oq.ANIMATIONTYPE_SIZE:
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(xq, Aq, Bq);
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(xq, Aq, Bq).add((Eq.offsetValue || Vq).scale(Eq.repeatCount))
            }
            break;
          case oq.ANIMATIONTYPE_COLOR3: {
            const qq = cq ? this.color3InterpolateFunctionWithTangents(xq, Oq.outTangent.scale(uq), Aq, mq.inTangent.scale(uq), Bq) : this.color3InterpolateFunction(xq, Aq, Bq);
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return qq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return qq.add((Eq.offsetValue || dq).scale(Eq.repeatCount))
            }
            break
          }
          case oq.ANIMATIONTYPE_COLOR4: {
            const qq = cq ? this.color4InterpolateFunctionWithTangents(xq, Oq.outTangent.scale(uq), Aq, mq.inTangent.scale(uq), Bq) : this.color4InterpolateFunction(xq, Aq, Bq);
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return qq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return qq.add((Eq.offsetValue || jq).scale(Eq.repeatCount))
            }
            break
          }
          case oq.ANIMATIONTYPE_MATRIX:
            switch (Eq.Vq) {
              case oq.ANIMATIONLOOPMODE_CYCLE:
              case oq.ANIMATIONLOOPMODE_CONSTANT:
              case oq.ANIMATIONLOOPMODE_YOYO:
                return oq.AllowMatricesInterpolation ? this.matrixInterpolateFunction(xq, Aq, Bq, Eq.workValue) : xq;
              case oq.ANIMATIONLOOPMODE_RELATIVE:
              case oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return xq
            }
        }
        return 0
      }
      matrixInterpolateFunction(qq, Eq, gq, lq) {
        return oq.AllowMatrixDecomposeForInterpolation ? lq ? (Yq.e.DecomposeLerpToRef(qq, Eq, gq, lq), lq) : Yq.e.DecomposeLerp(qq, Eq, gq) : lq ? (Yq.e.LerpToRef(qq, Eq, gq, lq), lq) : Yq.e.Lerp(qq, Eq, gq)
      }
      clone() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = new oq(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Vq);
        if (Eq.enableBlending = this.enableBlending, Eq.blendingSpeed = this.blendingSpeed, this._keys && Eq.setKeys(this._keys, !1, qq), this._ranges) {
          Eq._ranges = {};
          for (const qq in this._ranges) {
            const gq = this._ranges[qq];
            gq && (Eq._ranges[qq] = gq.clone())
          }
        }
        return Eq
      }
      setKeys(qq) {
        let Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = qq;
        else if (this._keys = qq.slice(0), Eq)
          for (let gq = 0; gq < this._keys.length; gq++) {
            const qq = this._keys[gq];
            this._keys[gq] = {
              frame: qq.frame,
              value: qq.value.clone ? qq.value.clone() : qq.value,
              inTangent: qq.inTangent && qq.inTangent.clone ? qq.inTangent.clone() : qq.inTangent,
              outTangent: qq.outTangent && qq.outTangent.clone ? qq.outTangent.clone() : qq.outTangent,
              interpolation: qq.interpolation,
              lockedTangent: qq.lockedTangent,
              easingFunction: qq.easingFunction
            }
          }
      }
      createKeyForFrame(qq) {
        Hq.key = 0;
        const Eq = this._interpolate(qq, Hq, !0);
        if (!Eq) return this._keys[Hq.key].frame === qq ? Hq.key : Hq.key + 1;
        const gq = {
          frame: qq,
          value: Eq.clone ? Eq.clone() : Eq
        };
        return this._keys.splice(Hq.key + 1, 0, gq), Hq.key + 1
      }
      serialize() {
        const qq = {};
        qq.name = this.name, qq.property = this.targetProperty, qq.framePerSecond = this.framePerSecond, qq.dataType = this.dataType, qq.loopBehavior = this.Vq, qq.enableBlending = this.enableBlending, qq.blendingSpeed = this.blendingSpeed;
        const Eq = this.dataType;
        qq.keys = [];
        const gq = this.getKeys();
        for (let Yq = 0; Yq < gq.length; Yq++) {
          const lq = gq[Yq],
            Oq = {};
          switch (Oq.frame = lq.frame, Eq) {
            case oq.ANIMATIONTYPE_FLOAT:
              Oq.values = [lq.value], void 0 !== lq.inTangent && Oq.values.push(lq.inTangent), void 0 !== lq.outTangent && (void 0 === lq.inTangent && Oq.values.push(void 0), Oq.values.push(lq.outTangent)), void 0 !== lq.interpolation && (void 0 === lq.inTangent && Oq.values.push(void 0), void 0 === lq.outTangent && Oq.values.push(void 0), Oq.values.push(lq.interpolation));
              break;
            case oq.ANIMATIONTYPE_QUATERNION:
            case oq.ANIMATIONTYPE_MATRIX:
            case oq.ANIMATIONTYPE_VECTOR3:
            case oq.ANIMATIONTYPE_COLOR3:
            case oq.ANIMATIONTYPE_COLOR4:
              Oq.values = lq.value.bYq(), void 0 != lq.inTangent && Oq.values.push(lq.inTangent.bYq()), void 0 != lq.outTangent && (void 0 === lq.inTangent && Oq.values.push(void 0), Oq.values.push(lq.outTangent.bYq())), void 0 !== lq.interpolation && (void 0 === lq.inTangent && Oq.values.push(void 0), void 0 === lq.outTangent && Oq.values.push(void 0), Oq.values.push(lq.interpolation))
          }
          qq.keys.push(Oq)
        }
        qq.zV = [];
        for (const Yq in this._ranges) {
          const Eq = this._ranges[Yq];
          if (!Eq) continue;
          const gq = {};
          gq.name = Yq, gq.from = Eq.from, gq.to = Eq.to, qq.zV.push(gq)
        }
        return qq
      }
      static _UniversalLerp(qq, Eq, gq) {
        const Yq = qq.constructor;
        return Yq.Lerp ? Yq.Lerp(qq, Eq, gq) : Yq.Slerp ? Yq.Slerp(qq, Eq, gq) : qq.toFixed ? qq * (1 - gq) + gq * Eq : Eq
      }
    }

    function Pq(qq, Eq, gq) {
      let lq;
      lq = "object" === typeof Eq ? Eq : {
        referenceFrame: Eq ?? 0,
        range: gq,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Oq = qq;
      lq.cloneOriginalAnimation && (Oq = qq.clone(), Oq.name = lq.clonedAnimationName || Oq.name);
      const mq = Oq.getKeys();
      if (!mq.length) return Oq;
      const xq = lq.referenceFrame && lq.referenceFrame >= 0 ? lq.referenceFrame : 0;
      let Aq = 0;
      const cq = mq[0];
      let uq = mq.length - 1;
      const Bq = mq[uq],
        Wq = {
          referenceValue: cq.value,
          referencePosition: Yq.o.Na[0],
          referenceQuaternion: Yq.o.Quaternion[0],
          referenceScaling: Yq.o.Na[1],
          keyPosition: Yq.o.Na[2],
          keyQuaternion: Yq.o.Quaternion[1],
          keyScaling: Yq.o.Na[3]
        };
      let Nq = cq.frame,
        aq = Bq.frame;
      if (lq.range) {
        const qq = Oq.getRange(lq.range);
        qq && (Nq = qq.from, aq = qq.to)
      } else Nq = lq.fromFrame ?? Nq, aq = lq.toFrame ?? aq;
      Nq !== cq.frame && (Aq = Oq.createKeyForFrame(Nq)), aq !== Bq.frame && (uq = Oq.createKeyForFrame(aq));
      const Vq = Oq.getKeys();
      if (1 === Vq.length) {
        const qq = Oq._getKeyValue(Vq[0].value);
        Wq.referenceValue = qq.clone ? qq.clone() : qq
      } else if (xq <= cq.frame) {
        const qq = Oq._getKeyValue(cq.value);
        Wq.referenceValue = qq.clone ? qq.clone() : qq
      } else if (xq >= Bq.frame) {
        const qq = Oq._getKeyValue(Bq.value);
        Wq.referenceValue = qq.clone ? qq.clone() : qq
      } else {
        Hq.key = 0;
        const qq = Oq._interpolate(xq, Hq);
        Wq.referenceValue = qq.clone ? qq.clone() : qq
      }
      Oq.dataType === oq.ANIMATIONTYPE_QUATERNION ? Wq.referenceValue.normalize().conjugateInPlace() : Oq.dataType === oq.ANIMATIONTYPE_MATRIX && (Wq.referenceValue.decompose(Wq.referenceScaling, Wq.referenceQuaternion, Wq.referencePosition), Wq.referenceQuaternion.normalize().conjugateInPlace());
      let dq = Number.MAX_VALUE;
      const jq = lq.clipKeys ? [] : null;
      for (let Hq = Aq; Hq <= uq; Hq++) {
        let qq = Vq[Hq];
        if ((jq || lq.cloneOriginalAnimation) && (qq = {
            frame: qq.frame,
            value: qq.value.clone ? qq.value.clone() : qq.value,
            inTangent: qq.inTangent,
            outTangent: qq.outTangent,
            interpolation: qq.interpolation,
            lockedTangent: qq.lockedTangent,
            easingFunction: qq.easingFunction
          }, jq && (dq === Number.MAX_VALUE && (dq = qq.frame), qq.frame -= dq, jq.push(qq))), !Hq || Oq.dataType === oq.ANIMATIONTYPE_FLOAT || qq.value !== cq.value) switch (Oq.dataType) {
          case oq.ANIMATIONTYPE_MATRIX:
            qq.value.decompose(Wq.keyScaling, Wq.keyQuaternion, Wq.keyPosition), Wq.keyPosition.KYq(Wq.referencePosition), Wq.keyScaling.divideInPlace(Wq.referenceScaling), Wq.referenceQuaternion.multiplyToRef(Wq.keyQuaternion, Wq.keyQuaternion), Yq.e.ComposeToRef(Wq.keyScaling, Wq.keyQuaternion, Wq.keyPosition, qq.value);
            break;
          case oq.ANIMATIONTYPE_QUATERNION:
            Wq.referenceValue.multiplyToRef(qq.value, qq.value);
            break;
          case oq.ANIMATIONTYPE_VECTOR2:
          case oq.ANIMATIONTYPE_VECTOR3:
          case oq.ANIMATIONTYPE_COLOR3:
          case oq.ANIMATIONTYPE_COLOR4:
            qq.value.subtractToRef(Wq.referenceValue, qq.value);
            break;
          case oq.ANIMATIONTYPE_SIZE:
            qq.value.width -= Wq.referenceValue.width, qq.value.height -= Wq.referenceValue.height;
            break;
          default:
            qq.value -= Wq.referenceValue
        }
      }
      return jq && Oq.setKeys(jq, !0), Oq
    }

    function Qq(qq, Eq, gq, Yq) {
      const lq = new oq(qq + "Animation", qq, gq, Eq, oq.ANIMATIONLOOPMODE_CONSTANT);
      return lq.setEasingFunction(Yq), lq
    }

    function yq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
      const Bq = oq._PrepareAnimation(qq, gq, Yq, lq, Oq, mq, xq, Aq);
      return Bq ? (Eq.ZJ && (uq = Eq.ZJ()), uq ? uq.beginDirectAnimation(Eq, [Bq], 0, lq, Bq.Vq !== oq.ANIMATIONLOOPMODE_CONSTANT, 1, cq) : null) : null
    }

    function tq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
      const Bq = oq._PrepareAnimation(qq, Yq, lq, Oq, mq, xq, Aq, cq);
      if (!Bq) return null;
      return Eq.ZJ().beginDirectHierarchyAnimation(Eq, gq, [Bq], 0, Oq, 1 === Bq.Vq, 1, uq)
    }

    function rq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
      const uq = oq._PrepareAnimation(qq, gq, Yq, lq, Oq, mq, xq, Aq);
      return uq ? (Eq.animations.push(uq), Eq.ZJ().beginAnimation(Eq, 0, lq, 1 === uq.Vq, 1, cq)) : null
    }

    function vq(qq, Eq, gq, Yq, lq, Oq, mq) {
      let xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Aq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        cq = arguments.length > 9 ? arguments[9] : void 0;
      if (mq <= 0) return gq[qq] = Eq, xq && xq(), null;
      const uq = lq * (mq / 1e3);
      Oq.setKeys(cq ?? [{
        frame: 0,
        value: gq[qq].clone ? gq[qq].clone() : gq[qq]
      }, {
        frame: uq,
        value: Eq
      }]), gq.animations || (gq.animations = []), gq.animations.push(Oq);
      return Yq.beginAnimation(gq, 0, uq, !1, 1, xq ?? void 0, void 0, Aq)
    }

    function hq(qq, Eq) {
      uq.d.AppendSerializedAnimations(qq, Eq)
    }

    function nq(qq) {
      const Eq = new oq(qq.name, qq.property, qq.framePerSecond, qq.dataType, qq.loopBehavior),
        gq = qq.dataType,
        Oq = [];
      let mq, xq;
      for (qq.enableBlending && (Eq.enableBlending = qq.enableBlending), qq.blendingSpeed && (Eq.blendingSpeed = qq.blendingSpeed), xq = 0; xq < qq.keys.length; xq++) {
        const Eq = qq.keys[xq];
        let Aq, cq, uq;
        switch (gq) {
          case oq.ANIMATIONTYPE_FLOAT:
            mq = Eq.values[0], Eq.values.length >= 2 && (Aq = Eq.values[1]), Eq.values.length >= 3 && (cq = Eq.values[2]), Eq.values.length >= 4 && (uq = Eq.values[3]);
            break;
          case oq.ANIMATIONTYPE_QUATERNION:
            if (mq = Yq.h.FromArray(Eq.values), Eq.values.length >= 8) {
              const qq = Yq.h.FromArray(Eq.values.slice(4, 8));
              qq.equals(Yq.h.Zero()) || (Aq = qq)
            }
            if (Eq.values.length >= 12) {
              const qq = Yq.h.FromArray(Eq.values.slice(8, 12));
              qq.equals(Yq.h.Zero()) || (cq = qq)
            }
            Eq.values.length >= 13 && (uq = Eq.values[12]);
            break;
          case oq.ANIMATIONTYPE_MATRIX:
            mq = Yq.e.FromArray(Eq.values), Eq.values.length >= 17 && (uq = Eq.values[16]);
            break;
          case oq.ANIMATIONTYPE_COLOR3:
            mq = lq.d.FromArray(Eq.values), Eq.values[3] && (Aq = lq.d.FromArray(Eq.values[3])), Eq.values[4] && (cq = lq.d.FromArray(Eq.values[4])), Eq.values[5] && (uq = Eq.values[5]);
            break;
          case oq.ANIMATIONTYPE_COLOR4:
            mq = lq.g.FromArray(Eq.values), Eq.values[4] && (Aq = lq.g.FromArray(Eq.values[4])), Eq.values[5] && (cq = lq.g.FromArray(Eq.values[5])), Eq.values[6] && (uq = Eq.values[6]);
            break;
          case oq.ANIMATIONTYPE_VECTOR3:
          default:
            mq = Yq.q.FromArray(Eq.values), Eq.values[3] && (Aq = Yq.q.FromArray(Eq.values[3])), Eq.values[4] && (cq = Yq.q.FromArray(Eq.values[4])), Eq.values[5] && (uq = Eq.values[5])
        }
        const Bq = {};
        Bq.frame = Eq.frame, Bq.value = mq, void 0 != Aq && (Bq.inTangent = Aq), void 0 != cq && (Bq.outTangent = cq), void 0 != uq && (Bq.interpolation = uq), Oq.push(Bq)
      }
      if (Eq.setKeys(Oq), qq.zV)
        for (xq = 0; xq < qq.zV.length; xq++) mq = qq.zV[xq], Eq.createRange(mq.name, mq.from, mq.to);
      return Eq
    }
    async function bq(qq, Eq) {
      return await new Promise(((gq, Yq) => {
        const lq = new cq.e;
        lq.addEventListener("readystatechange", (() => {
          if (4 == lq.readyState)
            if (200 == lq.status) {
              let Eq = JSON.parse(lq.responseText);
              if (Eq.animations && (Eq = Eq.animations), Eq.length) {
                const qq = [];
                for (const gq of Eq) qq.push(nq(gq));
                gq(qq)
              } else {
                const Yq = nq(Eq);
                qq && (Yq.name = qq), gq(Yq)
              }
            } else Yq("Unable to load the animation")
        })), lq.open("GET", Eq), lq.send()
      }))
    }
    async function iq(qq) {
      const Eq = this?.SnippetUrl ?? oq.SnippetUrl;
      return await new Promise(((gq, Yq) => {
        const lq = new cq.e;
        lq.addEventListener("readystatechange", (() => {
          if (4 == lq.readyState)
            if (200 == lq.status) {
              const Eq = JSON.parse(JSON.parse(lq.responseText).jsonPayload);
              if (Eq.animations) {
                const Yq = JSON.parse(Eq.animations),
                  lq = [];
                for (const Eq of Yq.animations) {
                  const gq = nq(Eq);
                  gq.snippetId = qq, lq.push(gq)
                }
                gq(lq)
              } else {
                const Yq = nq(JSON.parse(Eq.animation));
                Yq.snippetId = qq, gq(Yq)
              }
            } else Yq("Unable to load the snippet " + qq)
        })), lq.open("GET", Eq + "/" + qq.replace(/#/g, "/")), lq.send()
      }))
    }
    oq._UniqueIdGenerator = 0, oq.AllowMatricesInterpolation = !1, oq.AllowMatrixDecomposeForInterpolation = !0, oq.InheritOriginalValueFromActiveAnimations = !1, oq.SnippetUrl = "https://snippet.babylonjs.com", oq.ANIMATIONTYPE_FLOAT = 0, oq.ANIMATIONTYPE_VECTOR3 = 1, oq.ANIMATIONTYPE_QUATERNION = 2, oq.ANIMATIONTYPE_MATRIX = 3, oq.ANIMATIONTYPE_COLOR3 = 4, oq.ANIMATIONTYPE_COLOR4 = 7, oq.ANIMATIONTYPE_VECTOR2 = 5, oq.ANIMATIONTYPE_SIZE = 6, oq.ANIMATIONLOOPMODE_RELATIVE = 0, oq.ANIMATIONLOOPMODE_CYCLE = 1, oq.ANIMATIONLOOPMODE_CONSTANT = 2, oq.ANIMATIONLOOPMODE_YOYO = 4, oq.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Zq = iq;
    let fq = !1;

    function Mq() {
      fq || (fq = !0, oq.Parse = nq, oq.ParseFromFileAsync = bq, oq.ParseFromSnippetAsync = iq, oq.CreateFromSnippetAsync = Zq, oq.CreateAnimation = Qq, oq.CreateAndStartAnimation = yq, oq.CreateAndStartHierarchyAnimation = tq, oq.CreateMergeAndStartAnimation = rq, oq.MakeAnimationAdditive = Pq, oq.TransitionTo = vq, oq.AppendSerializedAnimations = hq, (0, Bq.g)("BABYLON.Animation", oq), xq.c._AnimationRangeFactory = (qq, Eq, gq) => new mq.d(qq, Eq, gq))
    }
  },
  40851: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq) {
        this.name = qq, this.from = Eq, this.to = gq
      }
      clone() {
        return new Yq(this.name, this.from, this.to)
      }
    }
  },
  40901: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq.b,
      f: () => Yq.g
    });
    var Yq = gq(39879);
    (0, Yq.d)()
  },
  40883: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq.d
    });
    var Yq = gq(40233);
    (0, Yq.c)()
  },
  40860: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq.b
    });
    var Yq = gq(40221);
    (0, Yq.c)()
  },
  40905: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq.e
    });
    var Yq = gq(40163);
    (0, Yq.i)()
  },
  40857: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq.g
    });
    var Yq = gq(40199);
    (0, Yq.e)()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);