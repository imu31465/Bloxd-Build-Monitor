export const id = 303;
export const ids = [303];
export const modules = {
  42172: (ee, ie, He) => {
    He.d(ie, {
      b: () => Be,
      d: () => Ve,
      g: () => pe,
      j: () => Xe,
      m: () => ke,
      p: () => Te,
      s: () => fe,
      w: () => qe
    });
    var ye = He(37917),
      be = He(38022),
      Me = He(37938),
      Ke = He(42174),
      Ue = He(41323),
      Fe = He(41137),
      Je = He(41161),
      oe = He(41141),
      Re = He(37949);
    const ke = Object.freeze(new ye.f(0, 0, 0, 0)),
      qe = Object.freeze(ye.p.Zero()),
      fe = Object.freeze(ye.n.Zero()),
      Te = Object.freeze(Fe.e.Zero()),
      pe = Object.freeze(be.c.Black()),
      Xe = Object.freeze(new be.g(0, 0, 0, 0)),
      ze = {
        key: 0,
        repeatCount: 0,
        tH: 2
      };
    class Be {
      static _PrepareAnimation(ee, ie, He, Me, Ke, Ue, Je, oe) {
        let Re;
        if (!isNaN(parseFloat(Ke)) && isFinite(Ke) ? Re = Be.ANIMATIONTYPE_FLOAT : Ke instanceof ye.f ? Re = Be.ANIMATIONTYPE_QUATERNION : Ke instanceof ye.p ? Re = Be.ANIMATIONTYPE_VECTOR3 : Ke instanceof ye.n ? Re = Be.ANIMATIONTYPE_VECTOR2 : Ke instanceof be.c ? Re = Be.ANIMATIONTYPE_COLOR3 : Ke instanceof be.g ? Re = Be.ANIMATIONTYPE_COLOR4 : Ke instanceof Fe.e && (Re = Be.ANIMATIONTYPE_SIZE), void 0 == Re) return null;
        const ke = new Be(ee, ie, He, Re, Je),
          qe = [{
            frame: 0,
            value: Ke
          }, {
            frame: Me,
            value: Ue
          }];
        return ke.setKeys(qe), void 0 !== oe && ke.setEasingFunction(oe), ke
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const ee of this._runtimeAnimations)
          if (!ee.isStopped()) return !0;
        return !1
      }
      constructor(ee, ie, He, ye, be, Me) {
        this.name = ee, this.targetProperty = ie, this.framePerSecond = He, this.dataType = ye, this.tH = be, this.enableBlending = Me, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = ie.split("."), this.dataType = ye, this.tH = void 0 === be ? Be.ANIMATIONLOOPMODE_CYCLE : be, this.uniqueId = Be._UniqueIdGenerator++
      }
      toString(ee) {
        let ie = "Name: " + this.name + ", property: " + this.targetProperty;
        if (ie += ", datatype: " + ["Float", "rf", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], ie += ", nKeys: " + (this._keys ? this._keys.length : "none"), ie += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), ee) {
          ie += ", Ranges: {";
          let ee = !0;
          for (const He in this._ranges) ee || (ie += ", "), ee = !1, ie += He;
          ie += "}"
        }
        return ie
      }
      addEvent(ee) {
        this._events.push(ee), this._events.sort(((ee, ie) => ee.frame - ie.frame))
      }
      removeEvents(ee) {
        for (let ie = 0; ie < this._events.length; ie++) this._events[ie].frame === ee && (this._events.splice(ie, 1), ie--)
      }
      getEvents() {
        return this._events
      }
      createRange(ee, ie, He) {
        this._ranges[ee] || (this._ranges[ee] = new Ke.e(ee, ie, He))
      }
      deleteRange(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = this._ranges[ee];
        if (He) {
          if (ie) {
            const ee = He.from,
              ie = He.to;
            for (let He = this._keys.length - 1; He >= 0; He--) this._keys[He].frame >= ee && this._keys[He].frame <= ie && this._keys.splice(He, 1)
          }
          this._ranges[ee] = null
        }
      }
      getRange(ee) {
        return this._ranges[ee]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let ee = 0;
        for (let ie = 0, He = this._keys.length; ie < He; ie++) ee < this._keys[ie].frame && (ee = this._keys[ie].frame);
        return ee
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(ee) {
        this._easingFunction = ee
      }
      floatInterpolateFunction(ee, ie, He) {
        return (0, Me.Lerp)(ee, ie, He)
      }
      floatInterpolateFunctionWithTangents(ee, ie, He, ye, be) {
        return (0, Me.Hermite)(ee, ie, He, ye, be)
      }
      quaternionInterpolateFunction(ee, ie, He) {
        return ye.f.Slerp(ee, ie, He)
      }
      quaternionInterpolateFunctionWithTangents(ee, ie, He, be, Me) {
        return ye.f.Hermite(ee, ie, He, be, Me).normalize()
      }
      vector3InterpolateFunction(ee, ie, He) {
        return ye.p.Lerp(ee, ie, He)
      }
      vector3InterpolateFunctionWithTangents(ee, ie, He, be, Me) {
        return ye.p.Hermite(ee, ie, He, be, Me)
      }
      vector2InterpolateFunction(ee, ie, He) {
        return ye.n.Lerp(ee, ie, He)
      }
      vector2InterpolateFunctionWithTangents(ee, ie, He, be, Me) {
        return ye.n.Hermite(ee, ie, He, be, Me)
      }
      sizeInterpolateFunction(ee, ie, He) {
        return Fe.e.Lerp(ee, ie, He)
      }
      color3InterpolateFunction(ee, ie, He) {
        return be.c.Lerp(ee, ie, He)
      }
      color3InterpolateFunctionWithTangents(ee, ie, He, ye, Me) {
        return be.c.Hermite(ee, ie, He, ye, Me)
      }
      color4InterpolateFunction(ee, ie, He) {
        return be.g.Lerp(ee, ie, He)
      }
      color4InterpolateFunctionWithTangents(ee, ie, He, ye, Me) {
        return be.g.Hermite(ee, ie, He, ye, Me)
      }
      _getKeyValue(ee) {
        return "function" === typeof ee ? ee() : ee
      }
      evaluate(ee) {
        return ze.key = 0, this._interpolate(ee, ze)
      }
      _interpolate(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ie.tH === Be.ANIMATIONLOOPMODE_CONSTANT && ie.repeatCount > 0) return ie.highLimitValue.clone ? ie.highLimitValue.clone() : ie.highLimitValue;
        const ye = this._keys;
        let be;
        if (this._coreAnimation) be = this._coreAnimation._key;
        else {
          const Me = ye.length;
          for (be = ie.key; be >= 0 && ee < ye[be].frame;) --be;
          for (; be + 1 <= Me - 1 && ee >= ye[be + 1].frame;) ++be;
          if (ie.key = be, be < 0) return He ? void 0 : this._getKeyValue(ye[0].value);
          if (be + 1 > Me - 1) return He ? void 0 : this._getKeyValue(ye[Me - 1].value);
          this._key = be
        }
        const Me = ye[be],
          Ke = ye[be + 1];
        if (He && (ee === Me.frame || ee === Ke.frame)) return;
        const Ue = this._getKeyValue(Me.value),
          Fe = this._getKeyValue(Ke.value);
        if (1 === Me.interpolation) return Ke.frame > ee ? Ue : Fe;
        const Je = void 0 !== Me.outTangent && void 0 !== Ke.inTangent,
          oe = Ke.frame - Me.frame;
        let Re = (ee - Me.frame) / oe;
        const ze = Me.easingFunction || this.getEasingFunction();
        switch (ze && (Re = ze.ease(Re)), this.dataType) {
          case Be.ANIMATIONTYPE_FLOAT: {
            const ee = Je ? this.floatInterpolateFunctionWithTangents(Ue, Me.outTangent * oe, Fe, Ke.inTangent * oe, Re) : this.floatInterpolateFunction(Ue, Fe, Re);
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return ee;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (ie.offsetValue ?? 0) * ie.repeatCount + ee
            }
            break
          }
          case Be.ANIMATIONTYPE_QUATERNION: {
            const ee = Je ? this.quaternionInterpolateFunctionWithTangents(Ue, Me.outTangent.scale(oe), Fe, Ke.inTangent.scale(oe), Re) : this.quaternionInterpolateFunction(Ue, Fe, Re);
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return ee;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return ee.addInPlace((ie.offsetValue || ke).scale(ie.repeatCount))
            }
            return ee
          }
          case Be.ANIMATIONTYPE_VECTOR3: {
            const ee = Je ? this.vector3InterpolateFunctionWithTangents(Ue, Me.outTangent.scale(oe), Fe, Ke.inTangent.scale(oe), Re) : this.vector3InterpolateFunction(Ue, Fe, Re);
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return ee;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return ee.add((ie.offsetValue || qe).scale(ie.repeatCount))
            }
            break
          }
          case Be.ANIMATIONTYPE_VECTOR2: {
            const ee = Je ? this.vector2InterpolateFunctionWithTangents(Ue, Me.outTangent.scale(oe), Fe, Ke.inTangent.scale(oe), Re) : this.vector2InterpolateFunction(Ue, Fe, Re);
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return ee;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return ee.add((ie.offsetValue || fe).scale(ie.repeatCount))
            }
            break
          }
          case Be.ANIMATIONTYPE_SIZE:
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Ue, Fe, Re);
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Ue, Fe, Re).add((ie.offsetValue || Te).scale(ie.repeatCount))
            }
            break;
          case Be.ANIMATIONTYPE_COLOR3: {
            const ee = Je ? this.color3InterpolateFunctionWithTangents(Ue, Me.outTangent.scale(oe), Fe, Ke.inTangent.scale(oe), Re) : this.color3InterpolateFunction(Ue, Fe, Re);
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return ee;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return ee.add((ie.offsetValue || pe).scale(ie.repeatCount))
            }
            break
          }
          case Be.ANIMATIONTYPE_COLOR4: {
            const ee = Je ? this.color4InterpolateFunctionWithTangents(Ue, Me.outTangent.scale(oe), Fe, Ke.inTangent.scale(oe), Re) : this.color4InterpolateFunction(Ue, Fe, Re);
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return ee;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return ee.add((ie.offsetValue || Xe).scale(ie.repeatCount))
            }
            break
          }
          case Be.ANIMATIONTYPE_MATRIX:
            switch (ie.tH) {
              case Be.ANIMATIONLOOPMODE_CYCLE:
              case Be.ANIMATIONLOOPMODE_CONSTANT:
              case Be.ANIMATIONLOOPMODE_YOYO:
                return Be.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Ue, Fe, Re, ie.workValue) : Ue;
              case Be.ANIMATIONLOOPMODE_RELATIVE:
              case Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Ue
            }
        }
        return 0
      }
      matrixInterpolateFunction(ee, ie, He, be) {
        return Be.AllowMatrixDecomposeForInterpolation ? be ? (ye.b.DecomposeLerpToRef(ee, ie, He, be), be) : ye.b.DecomposeLerp(ee, ie, He) : be ? (ye.b.LerpToRef(ee, ie, He, be), be) : ye.b.Lerp(ee, ie, He)
      }
      clone() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = new Be(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.tH);
        if (ie.enableBlending = this.enableBlending, ie.blendingSpeed = this.blendingSpeed, this._keys && ie.setKeys(this._keys, !1, ee), this._ranges) {
          ie._ranges = {};
          for (const ee in this._ranges) {
            const He = this._ranges[ee];
            He && (ie._ranges[ee] = He.clone())
          }
        }
        return ie
      }
      setKeys(ee) {
        let ie = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = ee;
        else if (this._keys = ee.slice(0), ie)
          for (let He = 0; He < this._keys.length; He++) {
            const ee = this._keys[He];
            this._keys[He] = {
              frame: ee.frame,
              value: ee.value.clone ? ee.value.clone() : ee.value,
              inTangent: ee.inTangent && ee.inTangent.clone ? ee.inTangent.clone() : ee.inTangent,
              outTangent: ee.outTangent && ee.outTangent.clone ? ee.outTangent.clone() : ee.outTangent,
              interpolation: ee.interpolation,
              lockedTangent: ee.lockedTangent,
              easingFunction: ee.easingFunction
            }
          }
      }
      createKeyForFrame(ee) {
        ze.key = 0;
        const ie = this._interpolate(ee, ze, !0);
        if (!ie) return this._keys[ze.key].frame === ee ? ze.key : ze.key + 1;
        const He = {
          frame: ee,
          value: ie.clone ? ie.clone() : ie
        };
        return this._keys.splice(ze.key + 1, 0, He), ze.key + 1
      }
      serialize() {
        const ee = {};
        ee.name = this.name, ee.property = this.targetProperty, ee.framePerSecond = this.framePerSecond, ee.dataType = this.dataType, ee.loopBehavior = this.tH, ee.enableBlending = this.enableBlending, ee.blendingSpeed = this.blendingSpeed;
        const ie = this.dataType;
        ee.keys = [];
        const He = this.getKeys();
        for (let ye = 0; ye < He.length; ye++) {
          const be = He[ye],
            Me = {};
          switch (Me.frame = be.frame, ie) {
            case Be.ANIMATIONTYPE_FLOAT:
              Me.values = [be.value], void 0 !== be.inTangent && Me.values.push(be.inTangent), void 0 !== be.outTangent && (void 0 === be.inTangent && Me.values.push(void 0), Me.values.push(be.outTangent)), void 0 !== be.interpolation && (void 0 === be.inTangent && Me.values.push(void 0), void 0 === be.outTangent && Me.values.push(void 0), Me.values.push(be.interpolation));
              break;
            case Be.ANIMATIONTYPE_QUATERNION:
            case Be.ANIMATIONTYPE_MATRIX:
            case Be.ANIMATIONTYPE_VECTOR3:
            case Be.ANIMATIONTYPE_COLOR3:
            case Be.ANIMATIONTYPE_COLOR4:
              Me.values = be.value.Qbe(), void 0 != be.inTangent && Me.values.push(be.inTangent.Qbe()), void 0 != be.outTangent && (void 0 === be.inTangent && Me.values.push(void 0), Me.values.push(be.outTangent.Qbe())), void 0 !== be.interpolation && (void 0 === be.inTangent && Me.values.push(void 0), void 0 === be.outTangent && Me.values.push(void 0), Me.values.push(be.interpolation))
          }
          ee.keys.push(Me)
        }
        ee.zp = [];
        for (const ye in this._ranges) {
          const ie = this._ranges[ye];
          if (!ie) continue;
          const He = {};
          He.name = ye, He.from = ie.from, He.to = ie.to, ee.zp.push(He)
        }
        return ee
      }
      static _UniversalLerp(ee, ie, He) {
        const ye = ee.constructor;
        return ye.Lerp ? ye.Lerp(ee, ie, He) : ye.Slerp ? ye.Slerp(ee, ie, He) : ee.toFixed ? ee * (1 - He) + He * ie : ie
      }
    }

    function Ee(ee, ie, He) {
      let be;
      be = "object" === typeof ie ? ie : {
        referenceFrame: ie ?? 0,
        range: He,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Me = ee;
      be.cloneOriginalAnimation && (Me = ee.clone(), Me.name = be.clonedAnimationName || Me.name);
      const Ke = Me.getKeys();
      if (!Ke.length) return Me;
      const Ue = be.referenceFrame && be.referenceFrame >= 0 ? be.referenceFrame : 0;
      let Fe = 0;
      const Je = Ke[0];
      let oe = Ke.length - 1;
      const Re = Ke[oe],
        ke = {
          referenceValue: Je.value,
          referencePosition: ye.j.rf[0],
          referenceQuaternion: ye.j.Quaternion[0],
          referenceScaling: ye.j.rf[1],
          keyPosition: ye.j.rf[2],
          keyQuaternion: ye.j.Quaternion[1],
          keyScaling: ye.j.rf[3]
        };
      let qe = Je.frame,
        fe = Re.frame;
      if (be.range) {
        const ee = Me.getRange(be.range);
        ee && (qe = ee.from, fe = ee.to)
      } else qe = be.fromFrame ?? qe, fe = be.toFrame ?? fe;
      qe !== Je.frame && (Fe = Me.createKeyForFrame(qe)), fe !== Re.frame && (oe = Me.createKeyForFrame(fe));
      const Te = Me.getKeys();
      if (1 === Te.length) {
        const ee = Me._getKeyValue(Te[0].value);
        ke.referenceValue = ee.clone ? ee.clone() : ee
      } else if (Ue <= Je.frame) {
        const ee = Me._getKeyValue(Je.value);
        ke.referenceValue = ee.clone ? ee.clone() : ee
      } else if (Ue >= Re.frame) {
        const ee = Me._getKeyValue(Re.value);
        ke.referenceValue = ee.clone ? ee.clone() : ee
      } else {
        ze.key = 0;
        const ee = Me._interpolate(Ue, ze);
        ke.referenceValue = ee.clone ? ee.clone() : ee
      }
      Me.dataType === Be.ANIMATIONTYPE_QUATERNION ? ke.referenceValue.normalize().conjugateInPlace() : Me.dataType === Be.ANIMATIONTYPE_MATRIX && (ke.referenceValue.decompose(ke.referenceScaling, ke.referenceQuaternion, ke.referencePosition), ke.referenceQuaternion.normalize().conjugateInPlace());
      let pe = Number.MAX_VALUE;
      const Xe = be.clipKeys ? [] : null;
      for (let ze = Fe; ze <= oe; ze++) {
        let ee = Te[ze];
        if ((Xe || be.cloneOriginalAnimation) && (ee = {
            frame: ee.frame,
            value: ee.value.clone ? ee.value.clone() : ee.value,
            inTangent: ee.inTangent,
            outTangent: ee.outTangent,
            interpolation: ee.interpolation,
            lockedTangent: ee.lockedTangent,
            easingFunction: ee.easingFunction
          }, Xe && (pe === Number.MAX_VALUE && (pe = ee.frame), ee.frame -= pe, Xe.push(ee))), !ze || Me.dataType === Be.ANIMATIONTYPE_FLOAT || ee.value !== Je.value) switch (Me.dataType) {
          case Be.ANIMATIONTYPE_MATRIX:
            ee.value.decompose(ke.keyScaling, ke.keyQuaternion, ke.keyPosition), ke.keyPosition.XMe(ke.referencePosition), ke.keyScaling.divideInPlace(ke.referenceScaling), ke.referenceQuaternion.multiplyToRef(ke.keyQuaternion, ke.keyQuaternion), ye.b.ComposeToRef(ke.keyScaling, ke.keyQuaternion, ke.keyPosition, ee.value);
            break;
          case Be.ANIMATIONTYPE_QUATERNION:
            ke.referenceValue.multiplyToRef(ee.value, ee.value);
            break;
          case Be.ANIMATIONTYPE_VECTOR2:
          case Be.ANIMATIONTYPE_VECTOR3:
          case Be.ANIMATIONTYPE_COLOR3:
          case Be.ANIMATIONTYPE_COLOR4:
            ee.value.subtractToRef(ke.referenceValue, ee.value);
            break;
          case Be.ANIMATIONTYPE_SIZE:
            ee.value.width -= ke.referenceValue.width, ee.value.height -= ke.referenceValue.height;
            break;
          default:
            ee.value -= ke.referenceValue
        }
      }
      return Xe && Me.setKeys(Xe, !0), Me
    }

    function ge(ee, ie, He, ye) {
      const be = new Be(ee + "Animation", ee, He, ie, Be.ANIMATIONLOOPMODE_CONSTANT);
      return be.setEasingFunction(ye), be
    }

    function Oe(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
      const Re = Be._PrepareAnimation(ee, He, ye, be, Me, Ke, Ue, Fe);
      return Re ? (ie.Xx && (oe = ie.Xx()), oe ? oe.beginDirectAnimation(ie, [Re], 0, be, Re.tH !== Be.ANIMATIONLOOPMODE_CONSTANT, 1, Je) : null) : null
    }

    function de(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
      const Re = Be._PrepareAnimation(ee, ye, be, Me, Ke, Ue, Fe, Je);
      if (!Re) return null;
      return ie.Xx().beginDirectHierarchyAnimation(ie, He, [Re], 0, Me, 1 === Re.tH, 1, oe)
    }

    function We(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
      const oe = Be._PrepareAnimation(ee, He, ye, be, Me, Ke, Ue, Fe);
      return oe ? (ie.animations.push(oe), ie.Xx().beginAnimation(ie, 0, be, 1 === oe.tH, 1, Je)) : null
    }

    function te(ee, ie, He, ye, be, Me, Ke) {
      let Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Fe = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Je = arguments.length > 9 ? arguments[9] : void 0;
      if (Ke <= 0) return He[ee] = ie, Ue && Ue(), null;
      const oe = be * (Ke / 1e3);
      Me.setKeys(Je ?? [{
        frame: 0,
        value: He[ee].clone ? He[ee].clone() : He[ee]
      }, {
        frame: oe,
        value: ie
      }]), He.animations || (He.animations = []), He.animations.push(Me);
      return ye.beginAnimation(He, 0, oe, !1, 1, Ue ?? void 0, void 0, Fe)
    }

    function Ze(ee, ie) {
      oe.c.AppendSerializedAnimations(ee, ie)
    }

    function we(ee) {
      const ie = new Be(ee.name, ee.property, ee.framePerSecond, ee.dataType, ee.loopBehavior),
        He = ee.dataType,
        Me = [];
      let Ke, Ue;
      for (ee.enableBlending && (ie.enableBlending = ee.enableBlending), ee.blendingSpeed && (ie.blendingSpeed = ee.blendingSpeed), Ue = 0; Ue < ee.keys.length; Ue++) {
        const ie = ee.keys[Ue];
        let Fe, Je, oe;
        switch (He) {
          case Be.ANIMATIONTYPE_FLOAT:
            Ke = ie.values[0], ie.values.length >= 2 && (Fe = ie.values[1]), ie.values.length >= 3 && (Je = ie.values[2]), ie.values.length >= 4 && (oe = ie.values[3]);
            break;
          case Be.ANIMATIONTYPE_QUATERNION:
            if (Ke = ye.f.FromArray(ie.values), ie.values.length >= 8) {
              const ee = ye.f.FromArray(ie.values.slice(4, 8));
              ee.equals(ye.f.Zero()) || (Fe = ee)
            }
            if (ie.values.length >= 12) {
              const ee = ye.f.FromArray(ie.values.slice(8, 12));
              ee.equals(ye.f.Zero()) || (Je = ee)
            }
            ie.values.length >= 13 && (oe = ie.values[12]);
            break;
          case Be.ANIMATIONTYPE_MATRIX:
            Ke = ye.b.FromArray(ie.values), ie.values.length >= 17 && (oe = ie.values[16]);
            break;
          case Be.ANIMATIONTYPE_COLOR3:
            Ke = be.c.FromArray(ie.values), ie.values[3] && (Fe = be.c.FromArray(ie.values[3])), ie.values[4] && (Je = be.c.FromArray(ie.values[4])), ie.values[5] && (oe = ie.values[5]);
            break;
          case Be.ANIMATIONTYPE_COLOR4:
            Ke = be.g.FromArray(ie.values), ie.values[4] && (Fe = be.g.FromArray(ie.values[4])), ie.values[5] && (Je = be.g.FromArray(ie.values[5])), ie.values[6] && (oe = ie.values[6]);
            break;
          case Be.ANIMATIONTYPE_VECTOR3:
          default:
            Ke = ye.p.FromArray(ie.values), ie.values[3] && (Fe = ye.p.FromArray(ie.values[3])), ie.values[4] && (Je = ye.p.FromArray(ie.values[4])), ie.values[5] && (oe = ie.values[5])
        }
        const Re = {};
        Re.frame = ie.frame, Re.value = Ke, void 0 != Fe && (Re.inTangent = Fe), void 0 != Je && (Re.outTangent = Je), void 0 != oe && (Re.interpolation = oe), Me.push(Re)
      }
      if (ie.setKeys(Me), ee.zp)
        for (Ue = 0; Ue < ee.zp.length; Ue++) Ke = ee.zp[Ue], ie.createRange(Ke.name, Ke.from, Ke.to);
      return ie
    }
    async function De(ee, ie) {
      return await new Promise(((He, ye) => {
        const be = new Je.c;
        be.addEventListener("readystatechange", (() => {
          if (4 == be.readyState)
            if (200 == be.status) {
              let ie = JSON.parse(be.responseText);
              if (ie.animations && (ie = ie.animations), ie.length) {
                const ee = [];
                for (const He of ie) ee.push(we(He));
                He(ee)
              } else {
                const ye = we(ie);
                ee && (ye.name = ee), He(ye)
              }
            } else ye("Unable to load the animation")
        })), be.open("GET", ie), be.send()
      }))
    }
    async function Pe(ee) {
      const ie = this?.SnippetUrl ?? Be.SnippetUrl;
      return await new Promise(((He, ye) => {
        const be = new Je.c;
        be.addEventListener("readystatechange", (() => {
          if (4 == be.readyState)
            if (200 == be.status) {
              const ie = JSON.parse(JSON.parse(be.responseText).jsonPayload);
              if (ie.animations) {
                const ye = JSON.parse(ie.animations),
                  be = [];
                for (const ie of ye.animations) {
                  const He = we(ie);
                  He.snippetId = ee, be.push(He)
                }
                He(be)
              } else {
                const ye = we(JSON.parse(ie.animation));
                ye.snippetId = ee, He(ye)
              }
            } else ye("Unable to load the snippet " + ee)
        })), be.open("GET", ie + "/" + ee.replace(/#/g, "/")), be.send()
      }))
    }
    Be._UniqueIdGenerator = 0, Be.AllowMatricesInterpolation = !1, Be.AllowMatrixDecomposeForInterpolation = !0, Be.InheritOriginalValueFromActiveAnimations = !1, Be.SnippetUrl = "https://snippet.babylonjs.com", Be.ANIMATIONTYPE_FLOAT = 0, Be.ANIMATIONTYPE_VECTOR3 = 1, Be.ANIMATIONTYPE_QUATERNION = 2, Be.ANIMATIONTYPE_MATRIX = 3, Be.ANIMATIONTYPE_COLOR3 = 4, Be.ANIMATIONTYPE_COLOR4 = 7, Be.ANIMATIONTYPE_VECTOR2 = 5, Be.ANIMATIONTYPE_SIZE = 6, Be.ANIMATIONLOOPMODE_RELATIVE = 0, Be.ANIMATIONLOOPMODE_CYCLE = 1, Be.ANIMATIONLOOPMODE_CONSTANT = 2, Be.ANIMATIONLOOPMODE_YOYO = 4, Be.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Ae = Pe;
    let Ye = !1;

    function Ve() {
      Ye || (Ye = !0, Be.Parse = we, Be.ParseFromFileAsync = De, Be.ParseFromSnippetAsync = Pe, Be.CreateFromSnippetAsync = Ae, Be.CreateAnimation = ge, Be.CreateAndStartAnimation = Oe, Be.CreateAndStartHierarchyAnimation = de, Be.CreateMergeAndStartAnimation = We, Be.MakeAnimationAdditive = Ee, Be.TransitionTo = te, Be.AppendSerializedAnimations = Ze, (0, Re.e)("BABYLON.Animation", Be), Ue.d._AnimationRangeFactory = (ee, ie, He) => new Ke.e(ee, ie, He))
    }
  },
  42174: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      constructor(ee, ie, He) {
        this.name = ee, this.from = ie, this.to = He
      }
      clone() {
        return new ye(this.name, this.from, this.to)
      }
    }
  },
  42233: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.b,
      f: () => ye.h
    });
    var ye = He(41247);
    (0, ye.c)()
  },
  42217: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye.e
    });
    var ye = He(41593);
    (0, ye.c)()
  },
  42193: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye.c
    });
    var ye = He(41581);
    (0, ye.d)()
  },
  42240: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.b
    });
    var ye = He(41524);
    (0, ye.c)()
  },
  42177: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye.d
    });
    var ye = He(41559);
    (0, ye.c)()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);