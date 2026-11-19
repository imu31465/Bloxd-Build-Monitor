export const id = 264;
export const ids = [264];
export const modules = {
  40298: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => fz,
      g: () => az,
      h: () => Kz,
      k: () => wz,
      m: () => dz,
      o: () => Rz,
      q: () => Zz,
      t: () => Fz
    });
    var Ez = bz(36519),
      nz = bz(36715),
      iz = bz(36553),
      lz = bz(40300),
      Mz = bz(39384),
      tz = bz(39180),
      Hz = bz(39208),
      Oz = bz(39182),
      pz = bz(36564);
    const dz = Object.freeze(new Ez.h(0, 0, 0, 0)),
      Fz = Object.freeze(Ez.n.Zero()),
      Zz = Object.freeze(Ez.m.Zero()),
      Rz = Object.freeze(tz.e.Zero()),
      Kz = Object.freeze(nz.c.Black()),
      wz = Object.freeze(new nz.g(0, 0, 0, 0)),
      Xz = {
        key: 0,
        repeatCount: 0,
        gi: 2
      };
    class fz {
      static _PrepareAnimation(zz, uz, bz, iz, lz, Mz, Hz, Oz) {
        let pz;
        if (!isNaN(parseFloat(lz)) && isFinite(lz) ? pz = fz.ANIMATIONTYPE_FLOAT : lz instanceof Ez.h ? pz = fz.ANIMATIONTYPE_QUATERNION : lz instanceof Ez.n ? pz = fz.ANIMATIONTYPE_VECTOR3 : lz instanceof Ez.m ? pz = fz.ANIMATIONTYPE_VECTOR2 : lz instanceof nz.c ? pz = fz.ANIMATIONTYPE_COLOR3 : lz instanceof nz.g ? pz = fz.ANIMATIONTYPE_COLOR4 : lz instanceof tz.e && (pz = fz.ANIMATIONTYPE_SIZE), void 0 == pz) return null;
        const dz = new fz(zz, uz, bz, pz, Hz),
          Fz = [{
            frame: 0,
            value: lz
          }, {
            frame: iz,
            value: Mz
          }];
        return dz.setKeys(Fz), void 0 !== Oz && dz.setEasingFunction(Oz), dz
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const zz of this._runtimeAnimations)
          if (!zz.isStopped()) return !0;
        return !1
      }
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.name = zz, this.targetProperty = uz, this.framePerSecond = bz, this.dataType = Ez, this.gi = nz, this.enableBlending = iz, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = uz.split("."), this.dataType = Ez, this.gi = void 0 === nz ? fz.ANIMATIONLOOPMODE_CYCLE : nz, this.uniqueId = fz._UniqueIdGenerator++
      }
      toString(zz) {
        let uz = "Name: " + this.name + ", property: " + this.targetProperty;
        if (uz += ", datatype: " + ["Float", "ER", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], uz += ", nKeys: " + (this._keys ? this._keys.length : "none"), uz += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), zz) {
          uz += ", Ranges: {";
          let zz = !0;
          for (const bz in this._ranges) zz || (uz += ", "), zz = !1, uz += bz;
          uz += "}"
        }
        return uz
      }
      addEvent(zz) {
        this._events.push(zz), this._events.sort(((zz, uz) => zz.frame - uz.frame))
      }
      removeEvents(zz) {
        for (let uz = 0; uz < this._events.length; uz++) this._events[uz].frame === zz && (this._events.splice(uz, 1), uz--)
      }
      getEvents() {
        return this._events
      }
      createRange(zz, uz, bz) {
        this._ranges[zz] || (this._ranges[zz] = new lz.e(zz, uz, bz))
      }
      deleteRange(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const bz = this._ranges[zz];
        if (bz) {
          if (uz) {
            const zz = bz.from,
              uz = bz.to;
            for (let bz = this._keys.length - 1; bz >= 0; bz--) this._keys[bz].frame >= zz && this._keys[bz].frame <= uz && this._keys.splice(bz, 1)
          }
          this._ranges[zz] = null
        }
      }
      getRange(zz) {
        return this._ranges[zz]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let zz = 0;
        for (let uz = 0, bz = this._keys.length; uz < bz; uz++) zz < this._keys[uz].frame && (zz = this._keys[uz].frame);
        return zz
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(zz) {
        this._easingFunction = zz
      }
      floatInterpolateFunction(zz, uz, bz) {
        return (0, iz.Lerp)(zz, uz, bz)
      }
      floatInterpolateFunctionWithTangents(zz, uz, bz, Ez, nz) {
        return (0, iz.Hermite)(zz, uz, bz, Ez, nz)
      }
      quaternionInterpolateFunction(zz, uz, bz) {
        return Ez.h.Slerp(zz, uz, bz)
      }
      quaternionInterpolateFunctionWithTangents(zz, uz, bz, nz, iz) {
        return Ez.h.Hermite(zz, uz, bz, nz, iz).normalize()
      }
      vector3InterpolateFunction(zz, uz, bz) {
        return Ez.n.Lerp(zz, uz, bz)
      }
      vector3InterpolateFunctionWithTangents(zz, uz, bz, nz, iz) {
        return Ez.n.Hermite(zz, uz, bz, nz, iz)
      }
      vector2InterpolateFunction(zz, uz, bz) {
        return Ez.m.Lerp(zz, uz, bz)
      }
      vector2InterpolateFunctionWithTangents(zz, uz, bz, nz, iz) {
        return Ez.m.Hermite(zz, uz, bz, nz, iz)
      }
      sizeInterpolateFunction(zz, uz, bz) {
        return tz.e.Lerp(zz, uz, bz)
      }
      color3InterpolateFunction(zz, uz, bz) {
        return nz.c.Lerp(zz, uz, bz)
      }
      color3InterpolateFunctionWithTangents(zz, uz, bz, Ez, iz) {
        return nz.c.Hermite(zz, uz, bz, Ez, iz)
      }
      color4InterpolateFunction(zz, uz, bz) {
        return nz.g.Lerp(zz, uz, bz)
      }
      color4InterpolateFunctionWithTangents(zz, uz, bz, Ez, iz) {
        return nz.g.Hermite(zz, uz, bz, Ez, iz)
      }
      _getKeyValue(zz) {
        return "function" === typeof zz ? zz() : zz
      }
      evaluate(zz) {
        return Xz.key = 0, this._interpolate(zz, Xz)
      }
      _interpolate(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (uz.gi === fz.ANIMATIONLOOPMODE_CONSTANT && uz.repeatCount > 0) return uz.highLimitValue.clone ? uz.highLimitValue.clone() : uz.highLimitValue;
        const Ez = this._keys;
        let nz;
        if (this._coreAnimation) nz = this._coreAnimation._key;
        else {
          const iz = Ez.length;
          for (nz = uz.key; nz >= 0 && zz < Ez[nz].frame;) --nz;
          for (; nz + 1 <= iz - 1 && zz >= Ez[nz + 1].frame;) ++nz;
          if (uz.key = nz, nz < 0) return bz ? void 0 : this._getKeyValue(Ez[0].value);
          if (nz + 1 > iz - 1) return bz ? void 0 : this._getKeyValue(Ez[iz - 1].value);
          this._key = nz
        }
        const iz = Ez[nz],
          lz = Ez[nz + 1];
        if (bz && (zz === iz.frame || zz === lz.frame)) return;
        const Mz = this._getKeyValue(iz.value),
          tz = this._getKeyValue(lz.value);
        if (1 === iz.interpolation) return lz.frame > zz ? Mz : tz;
        const Hz = void 0 !== iz.outTangent && void 0 !== lz.inTangent,
          Oz = lz.frame - iz.frame;
        let pz = (zz - iz.frame) / Oz;
        const Xz = iz.easingFunction || this.getEasingFunction();
        switch (Xz && (pz = Xz.ease(pz)), this.dataType) {
          case fz.ANIMATIONTYPE_FLOAT: {
            const zz = Hz ? this.floatInterpolateFunctionWithTangents(Mz, iz.outTangent * Oz, tz, lz.inTangent * Oz, pz) : this.floatInterpolateFunction(Mz, tz, pz);
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (uz.offsetValue ?? 0) * uz.repeatCount + zz
            }
            break
          }
          case fz.ANIMATIONTYPE_QUATERNION: {
            const zz = Hz ? this.quaternionInterpolateFunctionWithTangents(Mz, iz.outTangent.scale(Oz), tz, lz.inTangent.scale(Oz), pz) : this.quaternionInterpolateFunction(Mz, tz, pz);
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.addInPlace((uz.offsetValue || dz).scale(uz.repeatCount))
            }
            return zz
          }
          case fz.ANIMATIONTYPE_VECTOR3: {
            const zz = Hz ? this.vector3InterpolateFunctionWithTangents(Mz, iz.outTangent.scale(Oz), tz, lz.inTangent.scale(Oz), pz) : this.vector3InterpolateFunction(Mz, tz, pz);
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((uz.offsetValue || Fz).scale(uz.repeatCount))
            }
            break
          }
          case fz.ANIMATIONTYPE_VECTOR2: {
            const zz = Hz ? this.vector2InterpolateFunctionWithTangents(Mz, iz.outTangent.scale(Oz), tz, lz.inTangent.scale(Oz), pz) : this.vector2InterpolateFunction(Mz, tz, pz);
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((uz.offsetValue || Zz).scale(uz.repeatCount))
            }
            break
          }
          case fz.ANIMATIONTYPE_SIZE:
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Mz, tz, pz);
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Mz, tz, pz).add((uz.offsetValue || Rz).scale(uz.repeatCount))
            }
            break;
          case fz.ANIMATIONTYPE_COLOR3: {
            const zz = Hz ? this.color3InterpolateFunctionWithTangents(Mz, iz.outTangent.scale(Oz), tz, lz.inTangent.scale(Oz), pz) : this.color3InterpolateFunction(Mz, tz, pz);
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((uz.offsetValue || Kz).scale(uz.repeatCount))
            }
            break
          }
          case fz.ANIMATIONTYPE_COLOR4: {
            const zz = Hz ? this.color4InterpolateFunctionWithTangents(Mz, iz.outTangent.scale(Oz), tz, lz.inTangent.scale(Oz), pz) : this.color4InterpolateFunction(Mz, tz, pz);
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((uz.offsetValue || wz).scale(uz.repeatCount))
            }
            break
          }
          case fz.ANIMATIONTYPE_MATRIX:
            switch (uz.gi) {
              case fz.ANIMATIONLOOPMODE_CYCLE:
              case fz.ANIMATIONLOOPMODE_CONSTANT:
              case fz.ANIMATIONLOOPMODE_YOYO:
                return fz.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Mz, tz, pz, uz.workValue) : Mz;
              case fz.ANIMATIONLOOPMODE_RELATIVE:
              case fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Mz
            }
        }
        return 0
      }
      matrixInterpolateFunction(zz, uz, bz, nz) {
        return fz.AllowMatrixDecomposeForInterpolation ? nz ? (Ez.d.DecomposeLerpToRef(zz, uz, bz, nz), nz) : Ez.d.DecomposeLerp(zz, uz, bz) : nz ? (Ez.d.LerpToRef(zz, uz, bz, nz), nz) : Ez.d.Lerp(zz, uz, bz)
      }
      clone() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = new fz(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.gi);
        if (uz.enableBlending = this.enableBlending, uz.blendingSpeed = this.blendingSpeed, this._keys && uz.setKeys(this._keys, !1, zz), this._ranges) {
          uz._ranges = {};
          for (const zz in this._ranges) {
            const bz = this._ranges[zz];
            bz && (uz._ranges[zz] = bz.clone())
          }
        }
        return uz
      }
      setKeys(zz) {
        let uz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = zz;
        else if (this._keys = zz.slice(0), uz)
          for (let bz = 0; bz < this._keys.length; bz++) {
            const zz = this._keys[bz];
            this._keys[bz] = {
              frame: zz.frame,
              value: zz.value.clone ? zz.value.clone() : zz.value,
              inTangent: zz.inTangent && zz.inTangent.clone ? zz.inTangent.clone() : zz.inTangent,
              outTangent: zz.outTangent && zz.outTangent.clone ? zz.outTangent.clone() : zz.outTangent,
              interpolation: zz.interpolation,
              lockedTangent: zz.lockedTangent,
              easingFunction: zz.easingFunction
            }
          }
      }
      createKeyForFrame(zz) {
        Xz.key = 0;
        const uz = this._interpolate(zz, Xz, !0);
        if (!uz) return this._keys[Xz.key].frame === zz ? Xz.key : Xz.key + 1;
        const bz = {
          frame: zz,
          value: uz.clone ? uz.clone() : uz
        };
        return this._keys.splice(Xz.key + 1, 0, bz), Xz.key + 1
      }
      serialize() {
        const zz = {};
        zz.name = this.name, zz.property = this.targetProperty, zz.framePerSecond = this.framePerSecond, zz.dataType = this.dataType, zz.loopBehavior = this.gi, zz.enableBlending = this.enableBlending, zz.blendingSpeed = this.blendingSpeed;
        const uz = this.dataType;
        zz.keys = [];
        const bz = this.getKeys();
        for (let Ez = 0; Ez < bz.length; Ez++) {
          const nz = bz[Ez],
            iz = {};
          switch (iz.frame = nz.frame, uz) {
            case fz.ANIMATIONTYPE_FLOAT:
              iz.values = [nz.value], void 0 !== nz.inTangent && iz.values.push(nz.inTangent), void 0 !== nz.outTangent && (void 0 === nz.inTangent && iz.values.push(void 0), iz.values.push(nz.outTangent)), void 0 !== nz.interpolation && (void 0 === nz.inTangent && iz.values.push(void 0), void 0 === nz.outTangent && iz.values.push(void 0), iz.values.push(nz.interpolation));
              break;
            case fz.ANIMATIONTYPE_QUATERNION:
            case fz.ANIMATIONTYPE_MATRIX:
            case fz.ANIMATIONTYPE_VECTOR3:
            case fz.ANIMATIONTYPE_COLOR3:
            case fz.ANIMATIONTYPE_COLOR4:
              iz.values = nz.value.obz(), void 0 != nz.inTangent && iz.values.push(nz.inTangent.obz()), void 0 != nz.outTangent && (void 0 === nz.inTangent && iz.values.push(void 0), iz.values.push(nz.outTangent.obz())), void 0 !== nz.interpolation && (void 0 === nz.inTangent && iz.values.push(void 0), void 0 === nz.outTangent && iz.values.push(void 0), iz.values.push(nz.interpolation))
          }
          zz.keys.push(iz)
        }
        zz.al = [];
        for (const Ez in this._ranges) {
          const uz = this._ranges[Ez];
          if (!uz) continue;
          const bz = {};
          bz.name = Ez, bz.from = uz.from, bz.to = uz.to, zz.al.push(bz)
        }
        return zz
      }
      static _UniversalLerp(zz, uz, bz) {
        const Ez = zz.constructor;
        return Ez.Lerp ? Ez.Lerp(zz, uz, bz) : Ez.Slerp ? Ez.Slerp(zz, uz, bz) : zz.toFixed ? zz * (1 - bz) + bz * uz : uz
      }
    }

    function sz(zz, uz, bz) {
      let nz;
      nz = "object" === typeof uz ? uz : {
        referenceFrame: uz ?? 0,
        range: bz,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let iz = zz;
      nz.cloneOriginalAnimation && (iz = zz.clone(), iz.name = nz.clonedAnimationName || iz.name);
      const lz = iz.getKeys();
      if (!lz.length) return iz;
      const Mz = nz.referenceFrame && nz.referenceFrame >= 0 ? nz.referenceFrame : 0;
      let tz = 0;
      const Hz = lz[0];
      let Oz = lz.length - 1;
      const pz = lz[Oz],
        dz = {
          referenceValue: Hz.value,
          referencePosition: Ez.l.ER[0],
          referenceQuaternion: Ez.l.Quaternion[0],
          referenceScaling: Ez.l.ER[1],
          keyPosition: Ez.l.ER[2],
          keyQuaternion: Ez.l.Quaternion[1],
          keyScaling: Ez.l.ER[3]
        };
      let Fz = Hz.frame,
        Zz = pz.frame;
      if (nz.range) {
        const zz = iz.getRange(nz.range);
        zz && (Fz = zz.from, Zz = zz.to)
      } else Fz = nz.fromFrame ?? Fz, Zz = nz.toFrame ?? Zz;
      Fz !== Hz.frame && (tz = iz.createKeyForFrame(Fz)), Zz !== pz.frame && (Oz = iz.createKeyForFrame(Zz));
      const Rz = iz.getKeys();
      if (1 === Rz.length) {
        const zz = iz._getKeyValue(Rz[0].value);
        dz.referenceValue = zz.clone ? zz.clone() : zz
      } else if (Mz <= Hz.frame) {
        const zz = iz._getKeyValue(Hz.value);
        dz.referenceValue = zz.clone ? zz.clone() : zz
      } else if (Mz >= pz.frame) {
        const zz = iz._getKeyValue(pz.value);
        dz.referenceValue = zz.clone ? zz.clone() : zz
      } else {
        Xz.key = 0;
        const zz = iz._interpolate(Mz, Xz);
        dz.referenceValue = zz.clone ? zz.clone() : zz
      }
      iz.dataType === fz.ANIMATIONTYPE_QUATERNION ? dz.referenceValue.normalize().conjugateInPlace() : iz.dataType === fz.ANIMATIONTYPE_MATRIX && (dz.referenceValue.decompose(dz.referenceScaling, dz.referenceQuaternion, dz.referencePosition), dz.referenceQuaternion.normalize().conjugateInPlace());
      let Kz = Number.MAX_VALUE;
      const wz = nz.clipKeys ? [] : null;
      for (let Xz = tz; Xz <= Oz; Xz++) {
        let zz = Rz[Xz];
        if ((wz || nz.cloneOriginalAnimation) && (zz = {
            frame: zz.frame,
            value: zz.value.clone ? zz.value.clone() : zz.value,
            inTangent: zz.inTangent,
            outTangent: zz.outTangent,
            interpolation: zz.interpolation,
            lockedTangent: zz.lockedTangent,
            easingFunction: zz.easingFunction
          }, wz && (Kz === Number.MAX_VALUE && (Kz = zz.frame), zz.frame -= Kz, wz.push(zz))), !Xz || iz.dataType === fz.ANIMATIONTYPE_FLOAT || zz.value !== Hz.value) switch (iz.dataType) {
          case fz.ANIMATIONTYPE_MATRIX:
            zz.value.decompose(dz.keyScaling, dz.keyQuaternion, dz.keyPosition), dz.keyPosition.Qbz(dz.referencePosition), dz.keyScaling.divideInPlace(dz.referenceScaling), dz.referenceQuaternion.multiplyToRef(dz.keyQuaternion, dz.keyQuaternion), Ez.d.ComposeToRef(dz.keyScaling, dz.keyQuaternion, dz.keyPosition, zz.value);
            break;
          case fz.ANIMATIONTYPE_QUATERNION:
            dz.referenceValue.multiplyToRef(zz.value, zz.value);
            break;
          case fz.ANIMATIONTYPE_VECTOR2:
          case fz.ANIMATIONTYPE_VECTOR3:
          case fz.ANIMATIONTYPE_COLOR3:
          case fz.ANIMATIONTYPE_COLOR4:
            zz.value.subtractToRef(dz.referenceValue, zz.value);
            break;
          case fz.ANIMATIONTYPE_SIZE:
            zz.value.width -= dz.referenceValue.width, zz.value.height -= dz.referenceValue.height;
            break;
          default:
            zz.value -= dz.referenceValue
        }
      }
      return wz && iz.setKeys(wz, !0), iz
    }

    function rz(zz, uz, bz, Ez) {
      const nz = new fz(zz + "Animation", zz, bz, uz, fz.ANIMATIONLOOPMODE_CONSTANT);
      return nz.setEasingFunction(Ez), nz
    }

    function oz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
      const pz = fz._PrepareAnimation(zz, bz, Ez, nz, iz, lz, Mz, tz);
      return pz ? (uz.XT && (Oz = uz.XT()), Oz ? Oz.beginDirectAnimation(uz, [pz], 0, nz, pz.gi !== fz.ANIMATIONLOOPMODE_CONSTANT, 1, Hz) : null) : null
    }

    function Nz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
      const pz = fz._PrepareAnimation(zz, Ez, nz, iz, lz, Mz, tz, Hz);
      if (!pz) return null;
      return uz.XT().beginDirectHierarchyAnimation(uz, bz, [pz], 0, iz, 1 === pz.gi, 1, Oz)
    }

    function vz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
      const Oz = fz._PrepareAnimation(zz, bz, Ez, nz, iz, lz, Mz, tz);
      return Oz ? (uz.animations.push(Oz), uz.XT().beginAnimation(uz, 0, nz, 1 === Oz.gi, 1, Hz)) : null
    }

    function xz(zz, uz, bz, Ez, nz, iz, lz) {
      let Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        tz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Hz = arguments.length > 9 ? arguments[9] : void 0;
      if (lz <= 0) return bz[zz] = uz, Mz && Mz(), null;
      const Oz = nz * (lz / 1e3);
      iz.setKeys(Hz ?? [{
        frame: 0,
        value: bz[zz].clone ? bz[zz].clone() : bz[zz]
      }, {
        frame: Oz,
        value: uz
      }]), bz.animations || (bz.animations = []), bz.animations.push(iz);
      return Ez.beginAnimation(bz, 0, Oz, !1, 1, Mz ?? void 0, void 0, tz)
    }

    function Jz(zz, uz) {
      Oz.e.AppendSerializedAnimations(zz, uz)
    }

    function Az(zz) {
      const uz = new fz(zz.name, zz.property, zz.framePerSecond, zz.dataType, zz.loopBehavior),
        bz = zz.dataType,
        iz = [];
      let lz, Mz;
      for (zz.enableBlending && (uz.enableBlending = zz.enableBlending), zz.blendingSpeed && (uz.blendingSpeed = zz.blendingSpeed), Mz = 0; Mz < zz.keys.length; Mz++) {
        const uz = zz.keys[Mz];
        let tz, Hz, Oz;
        switch (bz) {
          case fz.ANIMATIONTYPE_FLOAT:
            lz = uz.values[0], uz.values.length >= 2 && (tz = uz.values[1]), uz.values.length >= 3 && (Hz = uz.values[2]), uz.values.length >= 4 && (Oz = uz.values[3]);
            break;
          case fz.ANIMATIONTYPE_QUATERNION:
            if (lz = Ez.h.FromArray(uz.values), uz.values.length >= 8) {
              const zz = Ez.h.FromArray(uz.values.slice(4, 8));
              zz.equals(Ez.h.Zero()) || (tz = zz)
            }
            if (uz.values.length >= 12) {
              const zz = Ez.h.FromArray(uz.values.slice(8, 12));
              zz.equals(Ez.h.Zero()) || (Hz = zz)
            }
            uz.values.length >= 13 && (Oz = uz.values[12]);
            break;
          case fz.ANIMATIONTYPE_MATRIX:
            lz = Ez.d.FromArray(uz.values), uz.values.length >= 17 && (Oz = uz.values[16]);
            break;
          case fz.ANIMATIONTYPE_COLOR3:
            lz = nz.c.FromArray(uz.values), uz.values[3] && (tz = nz.c.FromArray(uz.values[3])), uz.values[4] && (Hz = nz.c.FromArray(uz.values[4])), uz.values[5] && (Oz = uz.values[5]);
            break;
          case fz.ANIMATIONTYPE_COLOR4:
            lz = nz.g.FromArray(uz.values), uz.values[4] && (tz = nz.g.FromArray(uz.values[4])), uz.values[5] && (Hz = nz.g.FromArray(uz.values[5])), uz.values[6] && (Oz = uz.values[6]);
            break;
          case fz.ANIMATIONTYPE_VECTOR3:
          default:
            lz = Ez.n.FromArray(uz.values), uz.values[3] && (tz = Ez.n.FromArray(uz.values[3])), uz.values[4] && (Hz = Ez.n.FromArray(uz.values[4])), uz.values[5] && (Oz = uz.values[5])
        }
        const pz = {};
        pz.frame = uz.frame, pz.value = lz, void 0 != tz && (pz.inTangent = tz), void 0 != Hz && (pz.outTangent = Hz), void 0 != Oz && (pz.interpolation = Oz), iz.push(pz)
      }
      if (uz.setKeys(iz), zz.al)
        for (Mz = 0; Mz < zz.al.length; Mz++) lz = zz.al[Mz], uz.createRange(lz.name, lz.from, lz.to);
      return uz
    }
    async function Tz(zz, uz) {
      return await new Promise(((bz, Ez) => {
        const nz = new Hz.b;
        nz.addEventListener("readystatechange", (() => {
          if (4 == nz.readyState)
            if (200 == nz.status) {
              let uz = JSON.parse(nz.responseText);
              if (uz.animations && (uz = uz.animations), uz.length) {
                const zz = [];
                for (const bz of uz) zz.push(Az(bz));
                bz(zz)
              } else {
                const Ez = Az(uz);
                zz && (Ez.name = zz), bz(Ez)
              }
            } else Ez("Unable to load the animation")
        })), nz.open("GET", uz), nz.send()
      }))
    }
    async function Lz(zz) {
      const uz = this?.SnippetUrl ?? fz.SnippetUrl;
      return await new Promise(((bz, Ez) => {
        const nz = new Hz.b;
        nz.addEventListener("readystatechange", (() => {
          if (4 == nz.readyState)
            if (200 == nz.status) {
              const uz = JSON.parse(JSON.parse(nz.responseText).jsonPayload);
              if (uz.animations) {
                const Ez = JSON.parse(uz.animations),
                  nz = [];
                for (const uz of Ez.animations) {
                  const bz = Az(uz);
                  bz.snippetId = zz, nz.push(bz)
                }
                bz(nz)
              } else {
                const Ez = Az(JSON.parse(uz.animation));
                Ez.snippetId = zz, bz(Ez)
              }
            } else Ez("Unable to load the snippet " + zz)
        })), nz.open("GET", uz + "/" + zz.replace(/#/g, "/")), nz.send()
      }))
    }
    fz._UniqueIdGenerator = 0, fz.AllowMatricesInterpolation = !1, fz.AllowMatrixDecomposeForInterpolation = !0, fz.InheritOriginalValueFromActiveAnimations = !1, fz.SnippetUrl = "https://snippet.babylonjs.com", fz.ANIMATIONTYPE_FLOAT = 0, fz.ANIMATIONTYPE_VECTOR3 = 1, fz.ANIMATIONTYPE_QUATERNION = 2, fz.ANIMATIONTYPE_MATRIX = 3, fz.ANIMATIONTYPE_COLOR3 = 4, fz.ANIMATIONTYPE_COLOR4 = 7, fz.ANIMATIONTYPE_VECTOR2 = 5, fz.ANIMATIONTYPE_SIZE = 6, fz.ANIMATIONLOOPMODE_RELATIVE = 0, fz.ANIMATIONLOOPMODE_CYCLE = 1, fz.ANIMATIONLOOPMODE_CONSTANT = 2, fz.ANIMATIONLOOPMODE_YOYO = 4, fz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Pz = Lz;
    let Gz = !1;

    function az() {
      Gz || (Gz = !0, fz.Parse = Az, fz.ParseFromFileAsync = Tz, fz.ParseFromSnippetAsync = Lz, fz.CreateFromSnippetAsync = Pz, fz.CreateAnimation = rz, fz.CreateAndStartAnimation = oz, fz.CreateAndStartHierarchyAnimation = Nz, fz.CreateMergeAndStartAnimation = vz, fz.MakeAnimationAdditive = sz, fz.TransitionTo = xz, fz.AppendSerializedAnimations = Jz, (0, pz.c)("BABYLON.Animation", fz), Mz.c._AnimationRangeFactory = (zz, uz, bz) => new lz.e(zz, uz, bz))
    }
  },
  40300: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz) {
        this.name = zz, this.from = uz, this.to = bz
      }
      clone() {
        return new Ez(this.name, this.from, this.to)
      }
    }
  },
  40360: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.c,
      d: () => Ez.j
    });
    var Ez = bz(39299);
    (0, Ez.f)()
  },
  40341: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez.e
    });
    var Ez = bz(39636);
    (0, Ez.d)()
  },
  40310: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.e
    });
    var Ez = bz(39631);
    (0, Ez.g)()
  },
  40369: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez.c
    });
    var Ez = bz(39584);
    (0, Ez.g)()
  },
  40308: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez.g
    });
    var Ez = bz(39618);
    (0, Ez.d)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);