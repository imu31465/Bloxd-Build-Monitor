export const id = 294;
export const ids = [294];
export const modules = {
  41183: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(39667),
      Ku = yu(41191);
    class Qu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = yu, this.wEu = [], this._maxBlockCapacity = Ru || 64, this._selectionContent = new Eu.e(1024), this._creationFunc = uu
      }
      update(uu, Ru, yu) {
        Ku.d._CreateBlocks(uu, Ru, yu, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      MEu(uu) {
        for (let Ru = 0; Ru < this.blocks.length; Ru++) {
          this.blocks[Ru].addEntry(uu)
        }
      }
      rM(uu) {
        for (let Ru = 0; Ru < this.blocks.length; Ru++) {
          this.blocks[Ru].removeEntry(uu)
        }
      }
      select(uu, Ru) {
        this._selectionContent.reset();
        for (let yu = 0; yu < this.blocks.length; yu++) {
          this.blocks[yu].select(uu, this._selectionContent, Ru)
        }
        return Ru ? this._selectionContent.concat(this.wEu) : this._selectionContent.concatWithNoDuplicate(this.wEu), this._selectionContent
      }
      intersects(uu, Ru, yu) {
        this._selectionContent.reset();
        for (let Eu = 0; Eu < this.blocks.length; Eu++) {
          this.blocks[Eu].intersects(uu, Ru, this._selectionContent, yu)
        }
        return yu ? this._selectionContent.concat(this.wEu) : this._selectionContent.concatWithNoDuplicate(this.wEu), this._selectionContent
      }
      intersectsRay(uu) {
        this._selectionContent.reset();
        for (let Ru = 0; Ru < this.blocks.length; Ru++) {
          this.blocks[Ru].intersectsRay(uu, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.wEu), this._selectionContent
      }
    }
    Qu.CreationFuncForMeshes = (uu, Ru) => {
      const yu = uu.vI();
      !uu.isBlocked && yu.boundingBox.intersectsMinMax(Ru.sEu, Ru.nEu) && Ru.entries.push(uu)
    }, Qu.CreationFuncForSubMeshes = (uu, Ru) => {
      uu.vI().boundingBox.intersectsMinMax(Ru.sEu, Ru.nEu) && Ru.entries.push(uu)
    }
  },
  41191: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(36830),
      Ku = yu(39886);
    class Qu {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.entries = [], this.ZEu = new Array, this._capacity = yu, this._depth = Eu, this._maxDepth = Ku, this._creationFunc = Qu, this._minPoint = uu, this._maxPoint = Ru, this.ZEu.push(uu.clone()), this.ZEu.push(Ru.clone()), this.ZEu.push(uu.clone()), this.ZEu[2].x = Ru.x, this.ZEu.push(uu.clone()), this.ZEu[3].y = Ru.y, this.ZEu.push(uu.clone()), this.ZEu[4].z = Ru.z, this.ZEu.push(Ru.clone()), this.ZEu[5].z = uu.z, this.ZEu.push(Ru.clone()), this.ZEu[6].x = uu.x, this.ZEu.push(Ru.clone()), this.ZEu[7].y = uu.y
      }
      get Nr() {
        return this._capacity
      }
      get sEu() {
        return this._minPoint
      }
      get nEu() {
        return this._maxPoint
      }
      addEntry(uu) {
        if (this.blocks)
          for (let Ru = 0; Ru < this.blocks.length; Ru++) {
            this.blocks[Ru].addEntry(uu)
          } else this._creationFunc(uu, this), this.entries.length > this.Nr && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(uu) {
        if (this.blocks) {
          for (let Ru = 0; Ru < this.blocks.length; Ru++) {
            this.blocks[Ru].removeEntry(uu)
          }
          return
        }
        const Ru = this.entries.indexOf(uu);
        Ru > -1 && this.entries.splice(Ru, 1)
      }
      addEntries(uu) {
        for (let Ru = 0; Ru < uu.length; Ru++) {
          const yu = uu[Ru];
          this.addEntry(yu)
        }
      }
      select(uu, Ru, yu) {
        if (Ku.e.IsInFrustum(this.ZEu, uu)) {
          if (this.blocks) {
            for (let Eu = 0; Eu < this.blocks.length; Eu++) {
              this.blocks[Eu].select(uu, Ru, yu)
            }
            return
          }
          yu ? Ru.concat(this.entries) : Ru.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(uu, Ru, yu, Eu) {
        if (Ku.e.IntersectsSphere(this._minPoint, this._maxPoint, uu, Ru)) {
          if (this.blocks) {
            for (let Ku = 0; Ku < this.blocks.length; Ku++) {
              this.blocks[Ku].intersects(uu, Ru, yu, Eu)
            }
            return
          }
          Eu ? yu.concat(this.entries) : yu.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(uu, Ru) {
        if (uu.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let yu = 0; yu < this.blocks.length; yu++) {
              this.blocks[yu].intersectsRay(uu, Ru)
            }
            return
          }
          Ru.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Qu._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(uu, Ru, yu, Ku, mu, Ju, Nu, Xu) {
        Nu.blocks = new Array;
        const Vu = new Eu.p((Ru.x - uu.x) / 2, (Ru.y - uu.y) / 2, (Ru.z - uu.z) / 2);
        for (let Eu = 0; Eu < 2; Eu++)
          for (let Ru = 0; Ru < 2; Ru++)
            for (let ru = 0; ru < 2; ru++) {
              const Bu = uu.add(Vu.multiplyByFloats(Eu, Ru, ru)),
                xu = uu.add(Vu.multiplyByFloats(Eu + 1, Ru + 1, ru + 1)),
                Su = new Qu(Bu, xu, Ku, mu + 1, Ju, Xu);
              Su.addEntries(yu), Nu.blocks.push(Su)
            }
      }
    }
  },
  41193: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu
    });
    var Eu = yu(39647),
      Ku = yu(36830),
      Qu = yu(40008),
      mu = yu(41140),
      Ju = yu(39736),
      Nu = yu(36851),
      Xu = yu(41183);
    class Vu {
      constructor(uu) {
        this.name = Ju.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new mu.B(Ku.p.Zero(), new Ku.p(1, 1, 1)), (uu = uu || Nu.b.LastCreatedScene) && (this.cp = uu, this.cp.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.cp.getActiveSubMeshCandidates = uu => this.getActiveSubMeshCandidates(uu), this.cp.getCollidingSubMeshCandidates = (uu, Ru) => this.getCollidingSubMeshCandidates(uu, Ru), this.cp.getIntersectingSubMeshCandidates = (uu, Ru) => this.getIntersectingSubMeshCandidates(uu, Ru))
      }
      register() {
        this.cp.onMeshRemovedObservable.add((uu => {
          const Ru = this.cp.selectionOctree;
          if (void 0 !== Ru && null !== Ru) {
            const yu = Ru.wEu.indexOf(uu); - 1 !== yu && Ru.wEu.splice(yu, 1)
          }
        })), this.cp.onMeshImportedObservable.add((uu => {
          const Ru = this.cp.selectionOctree;
          void 0 !== Ru && null !== Ru && Ru.MEu(uu)
        }))
      }
      getActiveMeshCandidates() {
        return this.cp.OEu?.select(this.cp.frustumPlanes) || this.cp._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(uu) {
        if (uu._submeshesOctree && uu.useOctreeForRenderingSelection) {
          return uu._submeshesOctree.select(this.cp.frustumPlanes)
        }
        return this.cp._getDefaultSubMeshCandidates(uu)
      }
      getIntersectingSubMeshCandidates(uu, Ru) {
        if (uu._submeshesOctree && uu.useOctreeForPicking) {
          mu.B.TransformToRef(Ru, uu.getWorldMatrix(), this._tempRay);
          return uu._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.cp._getDefaultSubMeshCandidates(uu)
      }
      getCollidingSubMeshCandidates(uu, Ru) {
        if (uu._submeshesOctree && uu.useOctreeForCollisions) {
          const yu = Ru._velocityWorldLength + Math.max(Ru._radius.x, Ru._radius.y, Ru._radius.z);
          return uu._submeshesOctree.intersects(Ru._basePointWorld, yu)
        }
        return this.cp._getDefaultSubMeshCandidates(uu)
      }
      rebuild() {}
      dispose() {}
    }
    let ru = !1;
    ru || (ru = !0, Eu.i.prototype.createOrUpdateSelectionOctree = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        yu = this._getComponent(Ju.c.NAME_OCTREE);
      yu || (yu = new Vu(this), this.BEu(yu)), this.OEu || (this.OEu = new Xu.d(Xu.d.CreationFuncForMeshes, uu, Ru));
      const Eu = this.getWorldExtends();
      return this.OEu.update(Eu.min, Eu.max, this.meshes), this.OEu
    }, Object.defineProperty(Eu.i.prototype, "selectionOctree", {
      get: function() {
        return this.OEu
      },
      enumerable: !0,
      configurable: !0
    }), Qu.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const yu = this.lD();
      let Eu = yu._getComponent(Ju.c.NAME_OCTREE);
      Eu || (Eu = new Vu(yu), yu.BEu(Eu)), this._submeshesOctree || (this._submeshesOctree = new Xu.d(Xu.d.CreationFuncForSubMeshes, uu, Ru)), this.computeWorldMatrix(!0);
      const Ku = this.vI().boundingBox;
      return this._submeshesOctree.update(Ku.minimumWorld, Ku.maximumWorld, this.mC), this._submeshesOctree
    })
  },
  41140: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => ru,
      d: () => Gu,
      e: () => pu,
      h: () => Su,
      i: () => xu,
      k: () => Mu,
      o: () => Du,
      r: () => ku,
      v: () => Au,
      z: () => eu
    });
    var Eu = yu(36833),
      Ku = yu(36830),
      Qu = yu(36842),
      mu = yu(39870),
      Ju = yu(39698),
      Nu = yu(36851),
      Xu = yu(39762);
    const Vu = {
      internalPickerForMesh: void 0
    };
    class ru {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Eu.d;
        this.origin = uu, this.direction = Ru, this.length = yu, this.epsilon = Ku
      }
      clone() {
        return new ru(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Eu = ru._TmpVector3[0].muu(uu.x - yu, uu.y - yu, uu.z - yu),
          Ku = ru._TmpVector3[1].muu(Ru.x + yu, Ru.y + yu, Ru.z + yu);
        let Qu, mu, Ju, Nu, Xu = 0,
          Vu = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Eu.x || this.origin.x > Ku.x) return !1
        } else if (Qu = 1 / this.direction.x, mu = (Eu.x - this.origin.x) * Qu, Ju = (Ku.x - this.origin.x) * Qu, Ju === -1 / 0 && (Ju = 1 / 0), mu > Ju && (Nu = mu, mu = Ju, Ju = Nu), Xu = Math.max(mu, Xu), Vu = Math.min(Ju, Vu), Xu > Vu) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Eu.y || this.origin.y > Ku.y) return !1
        } else if (Qu = 1 / this.direction.y, mu = (Eu.y - this.origin.y) * Qu, Ju = (Ku.y - this.origin.y) * Qu, Ju === -1 / 0 && (Ju = 1 / 0), mu > Ju && (Nu = mu, mu = Ju, Ju = Nu), Xu = Math.max(mu, Xu), Vu = Math.min(Ju, Vu), Xu > Vu) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Eu.z || this.origin.z > Ku.z) return !1
        } else if (Qu = 1 / this.direction.z, mu = (Eu.z - this.origin.z) * Qu, Ju = (Ku.z - this.origin.z) * Qu, Ju === -1 / 0 && (Ju = 1 / 0), mu > Ju && (Nu = mu, mu = Ju, Ju = Nu), Xu = Math.max(mu, Xu), Vu = Math.min(Ju, Vu), Xu > Vu) return !1;
        return !0
      }
      intersectsBox(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(uu.minimum, uu.maximum, Ru)
      }
      intersectsSphere(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = uu.center.x - this.origin.x,
          Eu = uu.center.y - this.origin.y,
          Ku = uu.center.z - this.origin.z,
          Qu = yu * yu + Eu * Eu + Ku * Ku,
          mu = uu.radius + Ru,
          Ju = mu * mu;
        if (Qu <= Ju) return !0;
        const Nu = yu * this.direction.x + Eu * this.direction.y + Ku * this.direction.z;
        if (Nu < 0) return !1;
        return Qu - Nu * Nu <= Ju
      }
      intersectsTriangle(uu, Ru, yu) {
        const Eu = ru._TmpVector3[0],
          Qu = ru._TmpVector3[1],
          Ju = ru._TmpVector3[2],
          Nu = ru._TmpVector3[3],
          Xu = ru._TmpVector3[4];
        Ru.subtractToRef(uu, Eu), yu.subtractToRef(uu, Qu), Ku.p.CrossToRef(this.direction, Qu, Ju);
        const Vu = Ku.p.Dot(Eu, Ju);
        if (0 === Vu) return null;
        const Bu = 1 / Vu;
        this.origin.subtractToRef(uu, Nu);
        const xu = Ku.p.Dot(Nu, Ju) * Bu;
        if (xu < -this.epsilon || xu > 1 + this.epsilon) return null;
        Ku.p.CrossToRef(Nu, Eu, Xu);
        const Su = Ku.p.Dot(this.direction, Xu) * Bu;
        if (Su < -this.epsilon || xu + Su > 1 + this.epsilon) return null;
        const pu = Ku.p.Dot(Qu, Xu) * Bu;
        return pu > this.length || pu < 0 ? null : new mu.d(1 - xu - Su, xu, pu)
      }
      intersectsPlane(uu) {
        let Ru;
        const yu = Ku.p.Dot(uu.normal, this.direction);
        if (Math.abs(yu) < 9.99999997475243e-7) return null;
        {
          const Eu = Ku.p.Dot(uu.normal, this.origin);
          return Ru = (-uu.d - Eu) / yu, Ru < 0 ? Ru < -9.99999997475243e-7 ? null : 0 : Ru
        }
      }
      intersectsAxis(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (uu) {
          case "y": {
            const uu = (this.origin.y - Ru) / this.direction.y;
            return uu > 0 ? null : new Ku.p(this.origin.x + this.direction.x * -uu, Ru, this.origin.z + this.direction.z * -uu)
          }
          case "x": {
            const uu = (this.origin.x - Ru) / this.direction.x;
            return uu > 0 ? null : new Ku.p(Ru, this.origin.y + this.direction.y * -uu, this.origin.z + this.direction.z * -uu)
          }
          case "z": {
            const uu = (this.origin.z - Ru) / this.direction.z;
            return uu > 0 ? null : new Ku.p(this.origin.x + this.direction.x * -uu, this.origin.y + this.direction.y * -uu, Ru)
          }
          default:
            return null
        }
      }
      xKu(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Qu = arguments.length > 4 ? arguments[4] : void 0,
          mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ju = Ku.m.Matrix[0];
        return uu.getWorldMatrix().invertToRef(Ju), this._tmpRay ? ru.TransformToRef(this, Ju, this._tmpRay) : this._tmpRay = ru.Transform(this, Ju), uu.intersects(this._tmpRay, Ru, yu, Eu, Qu, mu)
      }
      intersectsMeshes(uu, Ru, yu) {
        yu ? yu.length = 0 : yu = [];
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const Ku = this.xKu(uu[Eu], Ru);
          Ku.hit && yu.push(Ku)
        }
        return yu.sort(this._comparePickingInfo), yu
      }
      _comparePickingInfo(uu, Ru) {
        return uu.distance < Ru.distance ? -1 : uu.distance > Ru.distance ? 1 : 0
      }
      intersectionSegment(uu, Ru, yu) {
        const Eu = this.origin,
          Qu = Ku.m.MS[0],
          mu = Ku.m.MS[1],
          Ju = Ku.m.MS[2],
          Nu = Ku.m.MS[3];
        Ru.subtractToRef(uu, Qu), this.direction.scaleToRef(ru._Rayl, Ju), Eu.addToRef(Ju, mu), uu.subtractToRef(Eu, Nu);
        const Xu = Ku.p.Dot(Qu, Qu),
          Vu = Ku.p.Dot(Qu, Ju),
          Bu = Ku.p.Dot(Ju, Ju),
          xu = Ku.p.Dot(Qu, Nu),
          Su = Ku.p.Dot(Ju, Nu),
          pu = Xu * Bu - Vu * Vu;
        let Tu, Wu, ju = pu,
          Hu = pu;
        pu < ru._Smallnum ? (Tu = 0, ju = 1, Wu = Su, Hu = Bu) : (Tu = Vu * Su - Bu * xu, Wu = Xu * Su - Vu * xu, Tu < 0 ? (Tu = 0, Wu = Su, Hu = Bu) : Tu > ju && (Tu = ju, Wu = Su + Vu, Hu = Bu)), Wu < 0 ? (Wu = 0, -xu < 0 ? Tu = 0 : -xu > Xu ? Tu = ju : (Tu = -xu, ju = Xu)) : Wu > Hu && (Wu = Hu, -xu + Vu < 0 ? Tu = 0 : -xu + Vu > Xu ? Tu = ju : (Tu = -xu + Vu, ju = Xu));
        const du = Math.abs(Tu) < ru._Smallnum ? 0 : Tu / ju,
          bu = Math.abs(Wu) < ru._Smallnum ? 0 : Wu / Hu,
          Cu = Ku.m.MS[4];
        Ju.scaleToRef(bu, Cu);
        const ku = Ku.m.MS[5];
        Qu.scaleToRef(du, ku), ku.addInPlace(Nu);
        const eu = Ku.m.MS[6];
        ku.subtractToRef(Cu, eu);
        return bu > 0 && bu <= this.length && eu.lengthSquared() < yu * yu ? ku.length() : -1
      }
      update(uu, Ru, yu, Eu, Qu, mu, Ju) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          ru._RayDistant || (ru._RayDistant = ru.Zero()), ru._RayDistant.unprojectRayToRef(uu, Ru, yu, Eu, Ku.d.IdentityReadOnly, mu, Ju);
          const Nu = Ku.m.Matrix[0];
          Qu.invertToRef(Nu), ru.TransformToRef(ru._RayDistant, Nu, this)
        } else this.unprojectRayToRef(uu, Ru, yu, Eu, Qu, mu, Ju);
        return this
      }
      static Zero() {
        return new ru(Ku.p.Zero(), Ku.p.Zero())
      }
      static CreateNew(uu, Ru, yu, Eu, Ku, Qu, mu) {
        return ru.Zero().update(uu, Ru, yu, Eu, Ku, Qu, mu)
      }
      static CreateNewFromTo(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.d.IdentityReadOnly;
        const Eu = new ru(new Ku.p(0, 0, 0), new Ku.p(0, 0, 0));
        return ru.CreateFromToToRef(uu, Ru, Eu, yu)
      }
      static CreateFromToToRef(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ku.d.IdentityReadOnly;
        yu.origin.Oyu(uu);
        const Qu = Ru.subtractToRef(uu, yu.direction),
          mu = Math.sqrt(Qu.x * Qu.x + Qu.y * Qu.y + Qu.z * Qu.z);
        return yu.length = mu, yu.direction.normalize(), ru.TransformToRef(yu, Eu, yu)
      }
      static Transform(uu, Ru) {
        const yu = new ru(new Ku.p(0, 0, 0), new Ku.p(0, 0, 0));
        return ru.TransformToRef(uu, Ru, yu), yu
      }
      static TransformToRef(uu, Ru, yu) {
        Ku.p.TransformCoordinatesToRef(uu.origin, Ru, yu.origin), Ku.p.TransformNormalToRef(uu.direction, Ru, yu.direction), yu.length = uu.length, yu.epsilon = uu.epsilon;
        const Eu = yu.direction,
          Qu = Eu.length();
        if (0 !== Qu && 1 !== Qu) {
          const uu = 1 / Qu;
          Eu.x *= uu, Eu.y *= uu, Eu.z *= uu, yu.length *= Qu
        }
        return yu
      }
      unprojectRayToRef(uu, Ru, yu, Eu, Qu, mu, Ju) {
        const Xu = Ku.m.Matrix[0];
        Qu.multiplyToRef(mu, Xu), Xu.multiplyToRef(Ju, Xu), Xu.invert();
        const Vu = Nu.b.LastCreatedEngine,
          ru = Ku.m.MS[0];
        ru.x = uu / yu * 2 - 1, ru.y = -(Ru / Eu * 2 - 1), ru.z = Vu?.CEu ? 1 : Vu?.isNDCHalfZRange ? 0 : -1;
        const Bu = Ku.m.MS[1].muu(ru.x, ru.y, 1 - 1e-8),
          xu = Ku.m.MS[2],
          Su = Ku.m.MS[3];
        Ku.p.TransformCoordinatesToRef(ru, Xu, xu), Ku.p.TransformCoordinatesToRef(Bu, Xu, Su), this.origin.Oyu(xu), Su.subtractToRef(xu, this.direction), this.direction.normalize()
      }
    }

    function Bu(uu, Ru, yu, Eu, Ku) {
      let Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const mu = ru.Zero();
      return xu(uu, Ru, yu, Eu, mu, Ku, Qu), mu
    }

    function xu(uu, Ru, yu, Eu, Qu, mu) {
      let Ju = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Nu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Xu = uu.eS();
      if (!mu && !(mu = uu.activeCamera) && !(mu = uu.cameraToUseForPointers)) return uu;
      const Vu = mu.viewport,
        ru = Xu.getRenderHeight(),
        {
          x: Bu,
          y: xu,
          width: Su,
          height: pu
        } = Vu.toGlobal(Xu.getRenderWidth(), ru),
        Tu = 1 / Xu.getHardwareScalingLevel();
      return Ru = Ru * Tu - Bu, yu = yu * Tu - (ru - xu - pu), Qu.update(Ru, yu, Su, pu, Eu || Ku.d.IdentityReadOnly, Ju ? Ku.d.IdentityReadOnly : mu.getViewMatrix(), mu.getProjectionMatrix(), Nu), uu
    }

    function Su(uu, Ru, yu, Eu) {
      const Ku = ru.Zero();
      return pu(uu, Ru, yu, Ku, Eu), Ku
    }

    function pu(uu, Ru, yu, Eu, Qu) {
      if (!Ju.c) return uu;
      const mu = uu.eS();
      if (!Qu && !(Qu = uu.activeCamera) && !(Qu = uu.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Nu = Qu.viewport,
        Xu = mu.getRenderHeight(),
        {
          x: Vu,
          y: ru,
          width: Bu,
          height: xu
        } = Nu.toGlobal(mu.getRenderWidth(), Xu),
        Su = Ku.d.Identity(),
        pu = 1 / mu.getHardwareScalingLevel();
      return Ru = Ru * pu - Vu, yu = yu * pu - (Xu - ru - xu), Eu.update(Ru, yu, Bu, xu, Su, Su, Qu.getProjectionMatrix()), uu
    }

    function Tu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      return Wu(uu, yu, Eu, Ru(Eu, yu.enableDistantPicking), Ku, Qu, mu, Ju)
    }

    function Wu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
      const Nu = Ru.intersects(Eu, Ku, mu, Qu, yu, Ju);
      return Nu && Nu.hit ? !Ku && null != uu && Nu.distance >= uu.distance ? null : Nu : null
    }

    function ju(uu, Ru) {
      return "InstancedLinesMesh" === uu || "LinesMesh" === uu ? Ru.intersectionThreshold : 0
    }

    function Hu(uu) {
      const Ru = uu.getClassName();
      if ("GreasedLineMesh" === Ru) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const yu = uu.rawBoundingInfo;
      return {
        rawBoundingInfo: yu,
        intersectionThreshold: yu ? ju(Ru, uu) : 0
      }
    }

    function du(uu, Ru, yu, Eu, Ku) {
      const Qu = uu(yu, Ru.enableDistantPicking);
      return Qu.intersectsSphere(Eu.aEu, Ku) && Qu.intersectsBox(Eu.boundingBox, Ku) ? Qu : null
    }

    function bu(uu, Ru, yu, Eu, Qu, mu) {
      let Nu = null;
      const Xu = !!(uu.activeCameras && uu.activeCameras.length > 1 && uu.cameraToUseForPointers !== uu.activeCamera),
        ru = uu.cameraToUseForPointers || uu.activeCamera,
        Bu = Vu.internalPickerForMesh || Tu,
        xu = Bu === Tu;
      for (let Ju = 0; Ju < uu.meshes.length; Ju++) {
        const Vu = uu.meshes[Ju];
        if (yu) {
          if (!yu(Vu, -1)) continue
        } else if (!Vu.isEnabled() || !Vu.isVisible || !Vu.zp) continue;
        const Su = Xu && Vu.isWorldMatrixCameraDependent(),
          pu = Vu.computeWorldMatrix(Su, ru);
        if (Vu.hasThinInstances && Vu.YRu) {
          const uu = Bu(Nu, Ru, Vu, pu, !0, !0, mu);
          if (uu) {
            if (Qu) return uu;
            const {
              rawBoundingInfo: Ju,
              intersectionThreshold: Xu
            } = Hu(Vu), ru = Vu._thinInstanceDataStorage.matrixData;
            if (ru) {
              const uu = Ku.m.Matrix[0],
                Su = Ku.m.Matrix[1],
                Tu = Math.min(Vu.F_, ru.length >> 4);
              for (let ju = 0; ju < Tu; ju++) {
                if (yu && !yu(Vu, ju)) continue;
                Ku.d.FromArrayToRef(ru, ju << 4, uu), uu.multiplyToRef(pu, Su);
                const Tu = xu && Ju ? du(Ru, Vu, Su, Ju, Xu) : null;
                if (xu && Ju && !Tu) continue;
                const Hu = xu && Tu ? Wu(Nu, Vu, Su, Tu, Eu, Qu, mu, !0) : Bu(Nu, Ru, Vu, Su, Eu, Qu, mu, !0);
                if (Hu && (Nu = Hu, Nu.thinInstanceIndex = ju, Eu)) return Nu
              }
            }
          }
        } else {
          const uu = Bu(Nu, Ru, Vu, pu, Eu, Qu, mu);
          if (uu && (Nu = uu, Eu)) return Nu
        }
      }
      return Nu || new Ju.c
    }

    function Cu(uu, Ru, yu, Eu) {
      if (!Ju.c) return null;
      const Qu = [],
        mu = !!(uu.activeCameras && uu.activeCameras.length > 1 && uu.cameraToUseForPointers !== uu.activeCamera),
        Nu = uu.cameraToUseForPointers || uu.activeCamera,
        Xu = Vu.internalPickerForMesh || Tu,
        ru = Xu === Tu;
      for (let Ju = 0; Ju < uu.meshes.length; Ju++) {
        const Vu = uu.meshes[Ju];
        if (yu) {
          if (!yu(Vu, -1)) continue
        } else if (!Vu.isEnabled() || !Vu.isVisible || !Vu.zp) continue;
        const Bu = mu && Vu.isWorldMatrixCameraDependent(),
          xu = Vu.computeWorldMatrix(Bu, Nu);
        if (Vu.hasThinInstances && Vu.YRu) {
          if (Xu(null, Ru, Vu, xu, !0, !0, Eu)) {
            const {
              rawBoundingInfo: uu,
              intersectionThreshold: mu
            } = Hu(Vu), Ju = Vu._thinInstanceDataStorage.matrixData;
            if (Ju) {
              const Nu = Ku.m.Matrix[0],
                Bu = Ku.m.Matrix[1],
                Su = Math.min(Vu.F_, Ju.length >> 4);
              for (let pu = 0; pu < Su; pu++) {
                if (yu && !yu(Vu, pu)) continue;
                Ku.d.FromArrayToRef(Ju, pu << 4, Nu), Nu.multiplyToRef(xu, Bu);
                const Su = ru && uu ? du(Ru, Vu, Bu, uu, mu) : null;
                if (ru && uu && !Su) continue;
                const Tu = ru && Su ? Wu(null, Vu, Bu, Su, !1, !1, Eu, !0) : Xu(null, Ru, Vu, Bu, !1, !1, Eu, !0);
                Tu && (Tu.thinInstanceIndex = pu, Qu.push(Tu))
              }
            }
          }
        } else {
          const uu = Xu(null, Ru, Vu, xu, !1, !1, Eu);
          uu && Qu.push(uu)
        }
      }
      return Qu
    }

    function ku(uu, Ru, yu, Eu, Qu, mu) {
      if (!Ju.c) return null;
      const Nu = bu(uu, (Eu => (uu._tempPickingRay || (uu._tempPickingRay = ru.Zero()), xu(uu, Ru, yu, Eu, uu._tempPickingRay, mu || null), uu._tempPickingRay)), Eu, Qu, !0);
      return Nu && (Nu.ray = Bu(uu, Ru, yu, Ku.d.Identity(), mu || null)), Nu
    }

    function eu(uu, Ru, yu, Eu, Qu, mu, Ju) {
      const Nu = bu(uu, ((Eu, Ku) => (uu._tempPickingRay || (uu._tempPickingRay = ru.Zero()), xu(uu, Ru, yu, Eu, uu._tempPickingRay, mu || null, !1, Ku), uu._tempPickingRay)), Eu, Qu, !1, Ju);
      return Nu && (Nu.ray = Bu(uu, Ru, yu, Ku.d.Identity(), mu || null)), Nu
    }

    function Au(uu, Ru, yu, Eu, Qu) {
      const mu = bu(uu, (yu => (uu._pickWithRayInverseMatrix || (uu._pickWithRayInverseMatrix = Ku.d.Identity()), yu.invertToRef(uu._pickWithRayInverseMatrix), uu._cachedRayForTransform || (uu._cachedRayForTransform = ru.Zero()), ru.TransformToRef(Ru, uu._pickWithRayInverseMatrix, uu._cachedRayForTransform), uu._cachedRayForTransform)), yu, Eu, !1, Qu);
      return mu && (mu.ray = Ru), mu
    }

    function Du(uu, Ru, yu, Eu, Ku, Qu) {
      return Cu(uu, (Eu => Bu(uu, Ru, yu, Eu, Ku || null)), Eu, Qu)
    }

    function Mu(uu, Ru, yu, Eu) {
      return Cu(uu, (yu => (uu._pickWithRayInverseMatrix || (uu._pickWithRayInverseMatrix = Ku.d.Identity()), yu.invertToRef(uu._pickWithRayInverseMatrix), uu._cachedRayForTransform || (uu._cachedRayForTransform = ru.Zero()), ru.TransformToRef(Ru, uu._pickWithRayInverseMatrix, uu._cachedRayForTransform), uu._cachedRayForTransform)), yu, Eu)
    }

    function Iu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Eu = arguments.length > 3 ? arguments[3] : void 0,
        Qu = arguments.length > 4 ? arguments[4] : void 0;
      Eu || (Eu = uu.getWorldMatrix()), Ru.length = yu, Qu ? Ru.origin.Oyu(Qu) : Ru.origin.Oyu(uu.position);
      const mu = Ku.m.MS[2];
      mu.set(0, 0, uu._scene.useRightHandedSystem ? -1 : 1);
      const Ju = Ku.m.MS[3];
      return Ku.p.TransformNormalToRef(mu, Eu, Ju), Ku.p.NormalizeToRef(Ju, Ru.direction), Ru
    }

    function Gu(uu, Ru) {
      Ru && (Ru.prototype.getForwardRay = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        return Iu(this, new ru(Ku.p.Zero(), Ku.p.Zero(), uu), uu, Ru, yu)
      }, Ru.prototype.getForwardRayToRef = function(uu) {
        return Iu(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), uu && (Xu.b._IsPickingAvailable = !0, uu.prototype.createPickingRay = function(uu, Ru, yu, Eu) {
        return Bu(this, uu, Ru, yu, Eu, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    ru._TmpVector3 = (0, Qu.b)(6, Ku.p.Zero), ru._RayDistant = ru.Zero(), ru._Smallnum = 1e-8, ru._Rayl = 1e9
  },
  41135: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu.B
    });
    var Eu = yu(39647),
      Ku = yu(39774),
      Qu = yu(41140);
    let mu = !1;
    mu || (mu = !0, (0, Qu.d)(Eu.i, Ku.c), Eu.i.prototype.createPickingRayToRef = function(uu, Ru, yu, Eu, Ku) {
      let mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ju = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Qu.i)(this, uu, Ru, yu, Eu, Ku, mu, Ju)
    }, Eu.i.prototype.createPickingRayInCameraSpace = function(uu, Ru, yu) {
      return (0, Qu.h)(this, uu, Ru, yu)
    }, Eu.i.prototype.createPickingRayInCameraSpaceToRef = function(uu, Ru, yu, Eu) {
      return (0, Qu.e)(this, uu, Ru, yu, Eu)
    }, Eu.i.prototype.pickWithBoundingInfo = function(uu, Ru, yu, Eu, Ku) {
      return (0, Qu.r)(this, uu, Ru, yu, Eu, Ku)
    }, Eu.i.prototype.cB = function(uu, Ru, yu, Eu, Ku, mu) {
      let Ju = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Qu.z)(this, uu, Ru, yu, Eu, Ku, mu, Ju)
    }, Eu.i.prototype.pickWithRay = function(uu, Ru, yu, Eu) {
      return (0, Qu.v)(this, uu, Ru, yu, Eu)
    }, Eu.i.prototype.multiPick = function(uu, Ru, yu, Eu, Ku) {
      return (0, Qu.o)(this, uu, Ru, yu, Eu, Ku)
    }, Eu.i.prototype.multiPickWithRay = function(uu, Ru, yu) {
      return (0, Qu.k)(this, uu, Ru, yu)
    })
  },
  41145: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(39823),
      Ju = yu(41151),
      Nu = yu(39780),
      Xu = yu(36871);
    let Vu = (() => {
        var uu;
        let Ru, yu, Nu, Xu, Vu, ru, Bu, xu, Su = Ju.e,
          pu = [],
          Tu = [],
          Wu = [],
          ju = [],
          Hu = [],
          du = [],
          bu = [],
          Cu = [],
          ku = [],
          eu = [],
          Au = [],
          Du = [],
          Mu = [];
        return uu = class extends Su {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(uu) {
            this._shadowFrustumSize = uu, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(uu) {
            this._shadowOrthoScale = uu, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(uu) {
            this._orthoLeft = uu
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(uu) {
            this._orthoRight = uu
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(uu) {
            this._orthoTop = uu
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(uu) {
            this._orthoBottom = uu
          }
          constructor(uu, Ru, yu, Ku) {
            super(uu, yu, Ku), this._shadowFrustumSize = ((0, Eu.l)(this, pu), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Eu.l)(this, Tu, !0), this.autoCalcShadowZBounds = ((0, Eu.l)(this, Wu), (0, Eu.l)(this, ju, !1)), this._orthoLeft = ((0, Eu.l)(this, Hu), (0, Eu.l)(this, du, Number.MAX_VALUE)), this._orthoRight = ((0, Eu.l)(this, bu), (0, Eu.l)(this, Cu, Number.MIN_VALUE)), this._orthoTop = ((0, Eu.l)(this, ku), (0, Eu.l)(this, eu, Number.MIN_VALUE)), this._orthoBottom = ((0, Eu.l)(this, Au), (0, Eu.l)(this, Du, Number.MAX_VALUE)), (0, Eu.l)(this, Mu), this.position = Ru.scale(-1), this.direction = Ru
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return mu.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(uu, Ru, yu) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(uu) : this._setDefaultAutoExtendShadowProjectionMatrix(uu, Ru, yu)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(uu) {
            const Ru = this.lD().activeCamera;
            Qu.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Ru ? Ru.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Ru ? Ru.maxZ : 1e4, uu, this.lD().eS().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(uu, Ru, yu) {
            const Eu = this.lD().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const uu = Qu.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Eu = Number.MAX_VALUE,
                Ku = -Number.MAX_VALUE;
              for (let mu = 0; mu < yu.length; mu++) {
                const Ju = yu[mu];
                if (!Ju) continue;
                const Nu = Ju.vI().boundingBox;
                for (let yu = 0; yu < Nu.vectorsWorld.length; yu++) Qu.p.TransformCoordinatesToRef(Nu.vectorsWorld[yu], Ru, uu), uu.x < this._orthoLeft && (this._orthoLeft = uu.x), uu.y < this._orthoBottom && (this._orthoBottom = uu.y), uu.x > this._orthoRight && (this._orthoRight = uu.x), uu.y > this._orthoTop && (this._orthoTop = uu.y), this.autoCalcShadowZBounds && (uu.z < Eu && (Eu = uu.z), uu.z > Ku && (Ku = uu.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Eu, this._shadowMaxZ = Ku)
            }
            const Ku = this._orthoRight - this._orthoLeft,
              mu = this._orthoTop - this._orthoBottom,
              Ju = void 0 !== this.shadowMinZ ? this.shadowMinZ : Eu?.minZ || 0,
              Nu = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Eu?.maxZ || 1e4,
              Xu = this.lD().eS().CEu;
            Qu.d.OrthoOffCenterLHToRef(this._orthoLeft - Ku * this.shadowOrthoScale, this._orthoRight + Ku * this.shadowOrthoScale, this._orthoBottom - mu * this.shadowOrthoScale, this._orthoTop + mu * this.shadowOrthoScale, Xu ? Nu : Ju, Xu ? Ju : Nu, uu, this.lD().eS().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(uu, Ru) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Ru), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Ru), this)
          }
          transferToNodeMaterialEffect(uu, Ru) {
            return this.computeTransformedInformation() ? (uu.setFloat3(Ru, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (uu.setFloat3(Ru, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(uu) {
            const Ru = this._scene.eS();
            return !Ru.CEu && Ru.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(uu) {
            const Ru = this._scene.eS();
            return Ru.CEu && Ru.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(uu, Ru) {
            uu["DIRLIGHT" + Ru] = !0
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Su[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], Vu = [(0, Ku.K)("orthoLeft")], ru = [(0, Ku.K)("orthoRight")], Bu = [(0, Ku.K)("orthoTop")], xu = [(0, Ku.K)("orthoBottom")], (0, Eu.h)(uu, null, Ru, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: uu => "shadowFrustumSize" in uu,
              get: uu => uu.shadowFrustumSize
            },
            metadata: Qu
          }, null, pu), (0, Eu.h)(uu, null, yu, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "shadowOrthoScale" in uu,
              get: uu => uu.shadowOrthoScale
            },
            metadata: Qu
          }, null, pu), (0, Eu.h)(null, null, Nu, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: uu => "autoUpdateExtends" in uu,
              get: uu => uu.autoUpdateExtends,
              set: (uu, Ru) => {
                uu.autoUpdateExtends = Ru
              }
            },
            metadata: Qu
          }, Tu, Wu), (0, Eu.h)(null, null, Xu, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: uu => "autoCalcShadowZBounds" in uu,
              get: uu => uu.autoCalcShadowZBounds,
              set: (uu, Ru) => {
                uu.autoCalcShadowZBounds = Ru
              }
            },
            metadata: Qu
          }, ju, Hu), (0, Eu.h)(null, null, Vu, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoLeft" in uu,
              get: uu => uu._orthoLeft,
              set: (uu, Ru) => {
                uu._orthoLeft = Ru
              }
            },
            metadata: Qu
          }, du, bu), (0, Eu.h)(null, null, ru, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoRight" in uu,
              get: uu => uu._orthoRight,
              set: (uu, Ru) => {
                uu._orthoRight = Ru
              }
            },
            metadata: Qu
          }, Cu, ku), (0, Eu.h)(null, null, Bu, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoTop" in uu,
              get: uu => uu._orthoTop,
              set: (uu, Ru) => {
                uu._orthoTop = Ru
              }
            },
            metadata: Qu
          }, eu, Au), (0, Eu.h)(null, null, xu, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoBottom" in uu,
              get: uu => uu._orthoBottom,
              set: (uu, Ru) => {
                uu._orthoBottom = Ru
              }
            },
            metadata: Qu
          }, Du, Mu), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      ru = !1;
    ru || (ru = !0, Nu.e.AddNodeConstructor("Light_Type_1", ((uu, Ru) => () => new Vu(uu, Qu.p.Zero(), Ru))), (0, Xu.c)("BABYLON.DirectionalLight", Vu))
  },
  41162: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => iR
    });
    var Eu = yu(38471),
      Ku = yu(36858),
      Qu = yu(36830),
      mu = yu(39706),
      Ju = yu(41165),
      Nu = yu(36851),
      Xu = yu(39845),
      Vu = yu(36991),
      ru = yu(38479),
      Bu = yu(38444),
      xu = yu(36865);
    class Su {
      constructor() {
        this.direction1 = new Qu.p(0, 1, 0), this.direction2 = new Qu.p(0, 1, 0)
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = (0, xu.RandomRange)(this.direction1.x, this.direction2.x),
          mu = (0, xu.RandomRange)(this.direction1.y, this.direction2.y),
          Ju = (0, xu.RandomRange)(this.direction1.z, this.direction2.z);
        Eu ? Ru.muu(Ku, mu, Ju) : Qu.p.TransformNormalFromFloatsToRef(Ku, mu, Ju, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Eu) {
        Eu ? Ru.muu(0, 0, 0) : Qu.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, uu, Ru)
      }
      clone() {
        const uu = new Su;
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(uu) {
        uu.addUniform("direction1", 3), uu.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.direction1 = this.direction1.AEu(), uu.direction2 = this.direction2.AEu(), uu
      }
      parse(uu) {
        Qu.p.FromArrayToRef(uu.direction1, 0, this.direction1), Qu.p.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
    class pu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = uu, this.radiusRange = Ru, this.directionRandomizer = yu
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = yu.position.subtract(uu.getTranslation()).normalize(),
          mu = (0, xu.RandomRange)(0, this.directionRandomizer),
          Ju = (0, xu.RandomRange)(0, this.directionRandomizer),
          Nu = (0, xu.RandomRange)(0, this.directionRandomizer);
        Ku.x += mu, Ku.y += Ju, Ku.z += Nu, Ku.normalize(), Eu ? Ru.Oyu(Ku) : Qu.p.TransformNormalFromFloatsToRef(Ku.x, Ku.y, Ku.z, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Eu) {
        const Ku = this.radius - (0, xu.RandomRange)(0, this.radius * this.radiusRange),
          mu = (0, xu.RandomRange)(0, 1),
          Ju = (0, xu.RandomRange)(0, 2 * Math.PI),
          Nu = Math.acos(2 * mu - 1),
          Xu = Ku * Math.cos(Ju) * Math.sin(Nu),
          Vu = Ku * Math.cos(Nu),
          ru = Ku * Math.sin(Ju) * Math.sin(Nu);
        Eu ? Ru.muu(Xu, Math.abs(Vu), ru) : Qu.p.TransformCoordinatesFromFloatsToRef(Xu, Math.abs(Vu), ru, uu, Ru)
      }
      clone() {
        const uu = new pu(this.radius, this.directionRandomizer);
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("radiusRange", this.radiusRange), uu.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("radiusRange", 1), uu.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.radius = this.radius, uu.radiusRange = this.radiusRange, uu.directionRandomizer = this.directionRandomizer, uu
      }
      parse(uu) {
        this.radius = uu.radius, this.radiusRange = uu.radiusRange, this.directionRandomizer = uu.directionRandomizer
      }
    }
    class Tu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = uu, this.radiusRange = Ru, this.directionRandomizer = yu
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = yu.position.subtract(uu.getTranslation()).normalize(),
          mu = (0, xu.RandomRange)(0, this.directionRandomizer),
          Ju = (0, xu.RandomRange)(0, this.directionRandomizer),
          Nu = (0, xu.RandomRange)(0, this.directionRandomizer);
        Ku.x += mu, Ku.y += Ju, Ku.z += Nu, Ku.normalize(), Eu ? Ru.Oyu(Ku) : Qu.p.TransformNormalFromFloatsToRef(Ku.x, Ku.y, Ku.z, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Eu) {
        const Ku = this.radius - (0, xu.RandomRange)(0, this.radius * this.radiusRange),
          mu = (0, xu.RandomRange)(0, 1),
          Ju = (0, xu.RandomRange)(0, 2 * Math.PI),
          Nu = Math.acos(2 * mu - 1),
          Xu = Ku * Math.cos(Ju) * Math.sin(Nu),
          Vu = Ku * Math.cos(Nu),
          ru = Ku * Math.sin(Ju) * Math.sin(Nu);
        Eu ? Ru.muu(Xu, Vu, ru) : Qu.p.TransformCoordinatesFromFloatsToRef(Xu, Vu, ru, uu, Ru)
      }
      clone() {
        const uu = new Tu(this.radius, this.directionRandomizer);
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("radiusRange", this.radiusRange), uu.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("radiusRange", 1), uu.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.radius = this.radius, uu.radiusRange = this.radiusRange, uu.directionRandomizer = this.directionRandomizer, uu
      }
      parse(uu) {
        this.radius = uu.radius, this.radiusRange = uu.radiusRange, this.directionRandomizer = uu.directionRandomizer
      }
    }
    class Wu extends Tu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Qu.p(0, 1, 0),
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Qu.p(0, 1, 0);
        super(uu), this.direction1 = Ru, this.direction2 = yu
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = (0, xu.RandomRange)(this.direction1.x, this.direction2.x),
          mu = (0, xu.RandomRange)(this.direction1.y, this.direction2.y),
          Ju = (0, xu.RandomRange)(this.direction1.z, this.direction2.z);
        Eu ? Ru.muu(Ku, mu, Ju) : Qu.p.TransformNormalFromFloatsToRef(Ku, mu, Ju, uu, Ru)
      }
      clone() {
        const uu = new Wu(this.radius, this.direction1, this.direction2);
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("radiusRange", this.radiusRange), uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("radiusRange", 1), uu.addUniform("direction1", 3), uu.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const uu = super.serialize();
        return uu.direction1 = this.direction1.AEu(), uu.direction2 = this.direction2.AEu(), uu
      }
      parse(uu) {
        super.parse(uu), Qu.p.FromArrayToRef(uu.direction1, 0, this.direction1), Qu.p.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
    var ju = yu(38440);
    class Hu {
      get radius() {
        return this._radius
      }
      set radius(uu) {
        this._radius = uu, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(uu) {
        this._angle = uu, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = yu, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Ru, this.radius = uu
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = yu.position.subtract(uu.getTranslation()).normalize(),
          mu = (0, xu.RandomRange)(0, this.directionRandomizer),
          Ju = (0, xu.RandomRange)(0, this.directionRandomizer),
          Nu = (0, xu.RandomRange)(0, this.directionRandomizer);
        Ku.x += mu, Ku.y += Ju, Ku.z += Nu, Ku.normalize(), Eu ? Ru.Oyu(Ku) : Qu.p.TransformNormalFromFloatsToRef(Ku.x, Ku.y, Ku.z, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Eu) {
        const Ku = (0, xu.RandomRange)(0, 2 * Math.PI);
        let mu;
        this.emitFromSpawnPointOnly ? mu = 1e-4 : (mu = (0, xu.RandomRange)(0, this.heightRange), mu = 1 - mu * mu);
        let Ju = this._radius - (0, xu.RandomRange)(0, this._radius * this.radiusRange);
        Ju *= mu;
        const Nu = Ju * Math.sin(Ku),
          Xu = Ju * Math.cos(Ku),
          Vu = mu * this._height;
        if (Eu) return Ru.x = Nu, Ru.y = Vu, void(Ru.z = Xu);
        Qu.p.TransformCoordinatesFromFloatsToRef(Nu, Vu, Xu, uu, Ru)
      }
      clone() {
        const uu = new Hu(this._radius, this._angle, this.directionRandomizer);
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat2("radius", this._radius, this.radiusRange), uu.setFloat("coneAngle", this._angle), uu.setFloat2("height", this._height, this.heightRange), uu.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 2), uu.addUniform("coneAngle", 1), uu.addUniform("height", 2), uu.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let uu = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (uu += "\n#define CONEEMITTERSPAWNPOINT"), uu
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.radius = this._radius, uu.angle = this._angle, uu.directionRandomizer = this.directionRandomizer, uu.radiusRange = this.radiusRange, uu.heightRange = this.heightRange, uu.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, uu
      }
      parse(uu) {
        this.radius = uu.radius, this.angle = uu.angle, this.directionRandomizer = uu.directionRandomizer, this.radiusRange = void 0 !== uu.radiusRange ? uu.radiusRange : 1, this.heightRange = void 0 !== uu.heightRange ? uu.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== uu.emitFromSpawnPointOnly && uu.emitFromSpawnPointOnly
      }
    }
    class du extends Hu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Qu.p(0, 1, 0),
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Qu.p(0, 1, 0);
        super(uu, Ru), this.direction1 = yu, this.direction2 = Eu
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = (0, xu.RandomRange)(this.direction1.x, this.direction2.x),
          mu = (0, xu.RandomRange)(this.direction1.y, this.direction2.y),
          Ju = (0, xu.RandomRange)(this.direction1.z, this.direction2.z);
        Eu ? Ru.muu(Ku, mu, Ju) : Qu.p.TransformNormalFromFloatsToRef(Ku, mu, Ju, uu, Ru)
      }
      clone() {
        const uu = new du(this.radius, this.angle, this.direction1, this.direction2);
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        super.applyToShader(uu), uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(uu) {
        super.buildUniformLayout(uu), uu.addUniform("direction1", 3), uu.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const uu = super.serialize();
        return uu.direction1 = this.direction1.AEu(), uu.direction2 = this.direction2.AEu(), uu
      }
      parse(uu) {
        super.parse(uu), Qu.p.FromArrayToRef(uu.direction1, 0, this.direction1), Qu.p.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
    class bu {
      get mesh() {
        return this._mesh
      }
      set mesh(uu) {
        this._mesh !== uu && (this._mesh = uu, uu ? (this._indices = uu.DEu(), this._positions = uu.getVerticesData(mu.h.PositionKind), this._normals = uu.getVerticesData(mu.h.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Qu.p.Zero(), this._mesh = null, this.direction1 = new Qu.p(0, 1, 0), this.direction2 = new Qu.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = uu
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        if (this.useMeshNormalsForDirection && this._normals) return void Qu.p.TransformNormalToRef(this._storedNormal, uu, Ru);
        const Ku = (0, xu.RandomRange)(this.direction1.x, this.direction2.x),
          mu = (0, xu.RandomRange)(this.direction1.y, this.direction2.y),
          Ju = (0, xu.RandomRange)(this.direction1.z, this.direction2.z);
        Eu ? Ru.muu(Ku, mu, Ju) : Qu.p.TransformNormalFromFloatsToRef(Ku, mu, Ju, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Eu) {
        if (!this._indices || !this._positions) return;
        const Ku = 3 * (Math.random() * (this._indices.length / 3) | 0),
          mu = Math.random(),
          Ju = Math.random() * (1 - mu),
          Nu = 1 - mu - Ju,
          Xu = this._indices[Ku],
          Vu = this._indices[Ku + 1],
          ru = this._indices[Ku + 2],
          Bu = Qu.m.MS[0],
          xu = Qu.m.MS[1],
          Su = Qu.m.MS[2],
          pu = Qu.m.MS[3];
        Qu.p.FromArrayToRef(this._positions, 3 * Xu, Bu), Qu.p.FromArrayToRef(this._positions, 3 * Vu, xu), Qu.p.FromArrayToRef(this._positions, 3 * ru, Su), pu.x = mu * Bu.x + Ju * xu.x + Nu * Su.x, pu.y = mu * Bu.y + Ju * xu.y + Nu * Su.y, pu.z = mu * Bu.z + Ju * xu.z + Nu * Su.z, Eu ? Ru.muu(pu.x, pu.y, pu.z) : Qu.p.TransformCoordinatesFromFloatsToRef(pu.x, pu.y, pu.z, uu, Ru), this.useMeshNormalsForDirection && this._normals && (Qu.p.FromArrayToRef(this._normals, 3 * Xu, Bu), Qu.p.FromArrayToRef(this._normals, 3 * Vu, xu), Qu.p.FromArrayToRef(this._normals, 3 * ru, Su), this._storedNormal.x = mu * Bu.x + Ju * xu.x + Nu * Su.x, this._storedNormal.y = mu * Bu.y + Ju * xu.y + Nu * Su.y, this._storedNormal.z = mu * Bu.z + Ju * xu.z + Nu * Su.z)
      }
      clone() {
        const uu = new bu(this.mesh);
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(uu) {
        uu.addUniform("direction1", 3), uu.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.direction1 = this.direction1.AEu(), uu.direction2 = this.direction2.AEu(), uu.meshId = this.mesh?.id, uu.useMeshNormalsForDirection = this.useMeshNormalsForDirection, uu
      }
      parse(uu, Ru) {
        Qu.p.FromArrayToRef(uu.direction1, 0, this.direction1), Qu.p.FromArrayToRef(uu.direction2, 0, this.direction2), uu.meshId && Ru && (this.mesh = Ru.getLastMeshById(uu.meshId)), this.useMeshNormalsForDirection = uu.useMeshNormalsForDirection
      }
    }
    class Cu {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(uu) {
        this._targetStopDuration !== uu && (this._targetStopDuration = uu)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(uu) {
        this._noiseTexture !== uu && (this._noiseTexture = uu, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(uu) {
        this._attractors.push(uu)
      }
      removeAttractor(uu) {
        const Ru = this._attractors.indexOf(uu); - 1 !== Ru && this._attractors.splice(Ru, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(uu) {
        this._animationSheetEnabled !== uu && (this._animationSheetEnabled = uu)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(uu) {
        this._isAnimationSheetEnabled != uu && (this._isAnimationSheetEnabled = uu, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(uu) {
        this._useLogarithmicDepth = uu && this.lD().eS().getCaps().fragmentDepthSupported
      }
      lD() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(uu) {
        switch (uu) {
          case Cu.BLENDMODE_MULTIPLYADD:
            return;
          case Cu.BLENDMODE_ADD:
            uu = 1;
            break;
          case Cu.BLENDMODE_ONEONE:
            uu = 6;
            break;
          case Cu.BLENDMODE_STANDARD:
            uu = 2;
            break;
          case Cu.BLENDMODE_MULTIPLY:
            uu = 4;
            break;
          case Cu.BLENDMODE_SUBTRACT:
            uu = 3
        }
        this._engine.setAlphaMode(uu)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(uu, Ru, yu) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, uu, Ru, yu), this
      }
      removeEmitRateGradient(uu) {
        return this._removeFactorGradient(this._emitRateGradients, uu), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Qu.p.Zero()
      }
      set direction1(uu) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = uu)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Qu.p.Zero()
      }
      set direction2(uu) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = uu)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Qu.p.Zero()
      }
      set minEmitBox(uu) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = uu)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Qu.p.Zero()
      }
      set maxEmitBox(uu) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = uu)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(uu) {
        this._billboardMode !== uu && (this._billboardMode = uu, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(uu) {
        this._isBillboardBased !== uu && (this._isBillboardBased = uu, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(uu) {
        this._attachImageProcessingConfiguration(uu)
      }
      _attachImageProcessingConfiguration(uu) {
        uu !== this._imageProcessingConfiguration && (!uu && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = uu)
      }
      _reset() {}
      _addFactorGradient(uu, Ru, yu, Ku) {
        const Qu = new Eu.g(Ru, yu, Ku);
        uu.push(Qu), uu.sort(((uu, Ru) => uu.gradient < Ru.gradient ? -1 : uu.gradient > Ru.gradient ? 1 : 0))
      }
      _removeFactorGradient(uu, Ru) {
        if (!uu) return;
        let yu = 0;
        for (const Eu of uu) {
          if (Eu.gradient === Ru) {
            uu.splice(yu, 1);
            break
          }
          yu++
        }
      }
      _removeGradientAndTexture(uu, Ru, yu) {
        if (!Ru) return this;
        let Eu = 0;
        for (const Ku of Ru) {
          if (Ku.gradient === uu) {
            Ru.splice(Eu, 1);
            break
          }
          Eu++
        }
        return yu && yu.dispose(), this
      }
      constructor(uu) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Qu.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Qu.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = Cu.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Qu.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Qu.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Qu.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Vu.h(1, 1, 1, 1), this.color2 = new Vu.h(1, 1, 1, 1), this.colorDead = new Vu.h(0, 0, 0, 1), this.textureMask = new Vu.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Xu.b, this.id = uu, this.name = uu
      }
      createPointEmitter(uu, Ru) {
        const yu = function(uu, Ru) {
          const yu = new Su;
          return yu.direction1 = uu, yu.direction2 = Ru, yu
        }(uu, Ru);
        return this.particleEmitterType = yu, yu
      }
      createHemisphericEmitter() {
        const uu = function() {
          return new pu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = uu, uu
      }
      createSphereEmitter() {
        const uu = function() {
          return new Tu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = uu, uu
      }
      createDirectedSphereEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Qu.p(0, 1, 0),
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Qu.p(0, 1, 0);
          return new Wu(uu, Ru, yu)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Qu.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Qu.p(0, 1, 0));
        return this.particleEmitterType = uu, uu
      }
      createCylinderEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new ju.h(uu, Ru, yu, Eu)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = uu, uu
      }
      createDirectedCylinderEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Qu.p(0, 1, 0),
            Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Qu.p(0, 1, 0);
          return new ju.d(uu, Ru, yu, Eu, Ku)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Qu.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Qu.p(0, 1, 0));
        return this.particleEmitterType = uu, uu
      }
      createConeEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Hu(uu, Ru)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = uu, uu
      }
      createDirectedConeEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Qu.p(0, 1, 0),
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Qu.p(0, 1, 0);
          return new du(uu, Ru, yu, Eu)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Qu.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Qu.p(0, 1, 0));
        return this.particleEmitterType = uu, uu
      }
      createBoxEmitter(uu, Ru, yu, Eu) {
        const Ku = new ru.b;
        return this.particleEmitterType = Ku, this.direction1 = uu, this.direction2 = Ru, this.minEmitBox = yu, this.maxEmitBox = Eu, Ku
      }
      createMeshEmitter() {
        const uu = function() {
          return new bu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = uu, uu
      }
    }
    Cu.BLENDMODE_ONEONE = 0, Cu.BLENDMODE_STANDARD = 1, Cu.BLENDMODE_ADD = 2, Cu.BLENDMODE_MULTIPLY = 3, Cu.BLENDMODE_MULTIPLYADD = 4, Cu.BLENDMODE_SUBTRACT = -1;
    class ku {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Vu.h(0, 0, 0, 0), this.currentColor2 = new Vu.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Qu.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class eu {
      constructor(uu) {
        this.particleSystem = uu, this.position = Qu.p.Zero(), this.direction = Qu.p.Zero(), this.color = new Vu.h(0, 0, 0, 0), this.colorStep = new Vu.h(0, 0, 0, 0), this.initialColor = new Vu.h(0, 0, 0, 0), this.colorDead = new Vu.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Qu.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new ku, this.id = eu._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let uu = this.age,
          Ru = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Ru ? (Ru = 1, uu = this._properties.randomCellOffset) : uu += this._properties.randomCellOffset);
        const yu = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Eu;
        Eu = this._properties.initialSpriteCellLoop ? (0, xu.Clamp)(uu * Ru % this.lifeTime / this.lifeTime) : (0, xu.Clamp)(uu * Ru / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Eu * yu | 0
      }
      _inheritParticleInfoToSubEmitter(uu) {
        if (uu.particleSystem.emitter.position) {
          const Ru = uu.particleSystem.emitter;
          if (Ru.position.Oyu(this.position), uu.inheritDirection) {
            const uu = Qu.m.MS[0];
            this.direction.normalizeToRef(uu), Ru.setDirection(uu, 0, Math.PI / 2)
          }
        } else {
          uu.particleSystem.emitter.Oyu(this.position)
        }
        this.direction.scaleToRef(uu.inheritedVelocityAmount / 2, Qu.m.MS[0]), uu.particleSystem._inheritedVelocityOffset.Oyu(Qu.m.MS[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const uu of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(uu)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = eu._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(uu) {
        uu.position.Oyu(this.position), this._properties.initialDirection ? uu._properties.initialDirection ? uu._properties.initialDirection.Oyu(this._properties.initialDirection) : uu._properties.initialDirection = this._properties.initialDirection.clone() : uu._properties.initialDirection = null, uu.direction.Oyu(this.direction), this._properties.localPosition && (uu._properties.localPosition ? uu._properties.localPosition.Oyu(this._properties.localPosition) : uu._properties.localPosition = this._properties.localPosition.clone()), uu.color.Oyu(this.color), uu.colorStep.Oyu(this.colorStep), uu.initialColor.Oyu(this.initialColor), uu.colorDead.Oyu(this.colorDead), uu.lifeTime = this.lifeTime, uu.age = this.age, uu._properties.randomCellOffset = this._properties.randomCellOffset, uu.size = this.size, uu.scale.Oyu(this.scale), uu.angle = this.angle, uu.angularSpeed = this.angularSpeed, uu.particleSystem = this.particleSystem, uu.cellIndex = this.cellIndex, uu.id = this.id, uu._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (uu._properties.currentColorGradient = this._properties.currentColorGradient, uu._properties.currentColor1.Oyu(this._properties.currentColor1), uu._properties.currentColor2.Oyu(this._properties.currentColor2)), this._properties.currentSizeGradient && (uu._properties.currentSizeGradient = this._properties.currentSizeGradient, uu._properties.currentSize1 = this._properties.currentSize1, uu._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (uu._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, uu._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, uu._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (uu._properties.currentVelocityGradient = this._properties.currentVelocityGradient, uu._properties.currentVelocity1 = this._properties.currentVelocity1, uu._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (uu._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, uu._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, uu._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (uu._properties.currentDragGradient = this._properties.currentDragGradient, uu._properties.currentDrag1 = this._properties.currentDrag1, uu._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (uu._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, uu._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, uu._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (uu.remapData && this.remapData ? uu.remapData.Oyu(this.remapData) : uu.remapData = new Qu.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (uu._properties.randomNoiseCoordinates1 && uu._properties.randomNoiseCoordinates2 ? (uu._properties.randomNoiseCoordinates1.Oyu(this._properties.randomNoiseCoordinates1), uu._properties.randomNoiseCoordinates2.Oyu(this._properties.randomNoiseCoordinates2)) : (uu._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), uu._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), uu.metadata = this.metadata
      }
    }
    eu._Count = 0;
    var Au = yu(40668);
    class Du {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(uu, Ru, yu, Eu) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Ru, this.Av = uu, this._scene = yu, this._host = Eu, this._activeTargets = [], Ru._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            WQ: this._getCorrectLoopMode()
          }, this._animation.dataType === Au.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Qu.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const uu = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, uu)
        }
        if (this.Av instanceof Array) {
          let uu = 0;
          for (const Ru of this.Av) this._preparePath(Ru, uu), this._getOriginalValues(uu), uu++;
          this._targetIsArray = !0
        } else this._preparePath(this.Av), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Ku = Ru.getEvents();
        if (Ku && Ku.length > 0)
          for (const Qu of Ku) this._events.push(Qu._clone());
        this._enableBlending = uu && uu.animationPropertiesOverride ? uu.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = this._animation.targetPropertyPath;
        if (yu.length > 1) {
          let Eu = uu;
          for (let uu = 0; uu < yu.length - 1; uu++) {
            const Ru = yu[uu];
            if (Eu = Eu[Ru], void 0 === Eu) throw new Error(`Invalid property (${Ru}) in property path (${yu.join(".")})`)
          }
          this._targetPath = yu[yu.length - 1], this._activeTargets[Ru] = Eu
        } else this._targetPath = yu[0], this._activeTargets[Ru] = uu;
        if (void 0 === this._activeTargets[Ru][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${yu.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.Av instanceof Array) {
            let uu = 0;
            for (const Ru of this.Av) void 0 !== this._originalValue[uu] && this._setValue(Ru, this._activeTargets[uu], this._originalValue[uu], -1, uu), uu++
          } else void 0 !== this._originalValue[0] && this._setValue(this.Av, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let uu = 0; uu < this._events.length; uu++) this._events[uu].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const uu = this._animation.runtimeAnimations.indexOf(this);
        uu > -1 && this._animation.runtimeAnimations.splice(uu, 1)
      }
      setValue(uu, Ru) {
        if (this._targetIsArray)
          for (let yu = 0; yu < this.Av.length; yu++) {
            const Eu = this.Av[yu];
            this._setValue(Eu, this._activeTargets[yu], uu, Ru, yu)
          } else this._setValue(this.Av, this._directTarget, uu, Ru, 0)
      }
      _getOriginalValues() {
        let uu, Ru = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const yu = this._activeTargets[Ru];
        if (Au.d.InheritOriginalValueFromActiveAnimations) {
          const uu = this._scene._activeAnimatables;
          for (let Eu = 0; Eu < uu.length; Eu++) {
            const Ku = uu[Eu]._runtimeAnimations;
            for (let uu = 0; uu < Ku.length; uu++) {
              const Eu = Ku[uu];
              if (Eu !== this && Eu._targetPath === this._targetPath)
                for (let uu = 0; uu < Eu._activeTargets.length; uu++)
                  if (Eu._activeTargets[uu] === yu && void 0 !== Eu._originalValue[uu]) return void(Eu._originalValue[uu] && Eu._originalValue[uu].clone ? this._originalValue[Ru] = Eu._originalValue[uu].clone() : this._originalValue[Ru] = Eu._originalValue[uu])
            }
          }
        }
        uu = yu.getLocalMatrix && "_matrix" === this._targetPath ? yu.getLocalMatrix() : yu[this._targetPath], uu && uu.clone ? this._originalValue[Ru] = uu.clone() : this._originalValue[Ru] = uu
      }
      _registerTargetForLateAnimationBinding(uu, Ru) {
        const yu = uu.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(yu), yu._lateAnimationHolders || (yu._lateAnimationHolders = {}), yu._lateAnimationHolders[uu.targetPath] || (yu._lateAnimationHolders[uu.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Ru
        }), uu.isAdditive ? (yu._lateAnimationHolders[uu.targetPath].additiveAnimations.push(uu), yu._lateAnimationHolders[uu.targetPath].totalAdditiveWeight += uu.weight) : (yu._lateAnimationHolders[uu.targetPath].animations.push(uu), yu._lateAnimationHolders[uu.targetPath].totalWeight += uu.weight)
      }
      _setValue(uu, Ru, yu, Eu, Ku) {
        const mu = this._scene._animationWrites,
          Ju = this._scene._animationWriteCount++;
        let Nu = mu[Ju];
        if (Nu || (Nu = mu[Ju] = {
            runtimeAnimation: this,
            target: uu,
            weight: Eu,
            additive: !1,
            blendingFactor: 1,
            NT: !1
          }), Nu.runtimeAnimation = this, Nu.target = uu, Nu.weight = Eu, Nu.additive = this.isAdditive, Nu.NT = !1, this._currentActiveTarget = Ru, this._weight = Eu, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const uu = Ru[this._targetPath];
            uu.clone ? this._originalBlendValue = uu.clone() : this._originalBlendValue = uu
          }
          this._originalBlendValue.m ? Au.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Qu.d.DecomposeLerpToRef(this._originalBlendValue, yu, this._blendingFactor, this._currentValue) : this._currentValue = Qu.d.DecomposeLerp(this._originalBlendValue, yu, this._blendingFactor) : this._currentValue ? Qu.d.LerpToRef(this._originalBlendValue, yu, this._blendingFactor, this._currentValue) : this._currentValue = Qu.d.Lerp(this._originalBlendValue, yu, this._blendingFactor) : this._currentValue = Au.d._UniversalLerp(this._originalBlendValue, yu, this._blendingFactor);
          const Eu = uu && uu.animationPropertiesOverride ? uu.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Nu.blendingFactor = this._blendingFactor, this._blendingFactor += Eu
        } else Nu.blendingFactor = 1, this._currentValue ? this._currentValue.Oyu ? this._currentValue.Oyu(yu) : this._currentValue = yu : this._currentValue = yu?.clone ? yu.clone() : yu; - 1 !== Eu ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Ku]) : this._animationState.WQ === Au.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Ku], Ru[this._targetPath]) : Ru[this._targetPath] = this._originalValue[Ku] + this._currentValue : Ru[this._targetPath] = this._currentValue, uu.Eyu && uu.Eyu(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.Av && this.Av.animationPropertiesOverride) {
          return "MorphTarget" === this.Av.getClassName?.() && null == this.Av._animationPropertiesOverride ? this._animation.WQ : this.Av.animationPropertiesOverride.WQ
        }
        return this._animation.WQ
      }
      goToFrame(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const yu = this._animation.getKeys();
        uu < yu[0].frame ? uu = yu[0].frame : uu > yu[yu.length - 1].frame && (uu = yu[yu.length - 1].frame);
        const Eu = this._events;
        if (Eu.length)
          for (let Qu = 0; Qu < Eu.length; Qu++) Eu[Qu].onlyOnce || (Eu[Qu].isDone = Eu[Qu].frame < uu);
        this._currentFrame = uu;
        const Ku = this._animation._interpolate(uu, this._animationState);
        this.setValue(Ku, Ru)
      }
      _prepareForSpeedRatioChange(uu) {
        const Ru = this._previousElapsedTime * (this._animation.framePerSecond * uu) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Ru
      }
      animate(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const mu = this._animation,
          Ju = mu.targetPropertyPath;
        if (!Ju || Ju.length < 1) return this._stopped = !0, !1;
        let Nu, Xu = !0;
        const Vu = this._events;
        let ru;
        if (this._coreRuntimeAnimation) ru = yu - Ru, Nu = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Nu, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Qu;
          (Ru < this._minFrame || Ru > this._maxFrame) && (Ru = this._minFrame), (yu < this._minFrame || yu > this._maxFrame) && (yu = this._maxFrame), ru = yu - Ru;
          let Ju = uu * (mu.framePerSecond * Ku) / 1e3 + this._absoluteFrameOffset,
            Bu = 0,
            xu = !1;
          const Su = Eu && this._animationState.WQ === Au.d.ANIMATIONLOOPMODE_YOYO;
          if (Su) {
            const uu = (Ju - Ru) / ru,
              yu = Math.sin(uu * Math.PI);
            Ju = Math.abs(yu) * ru + Ru;
            const Eu = yu >= 0 ? 1 : -1;
            this._yoyoDirection !== Eu && (xu = !0), this._yoyoDirection = Eu
          }
          if (this._previousElapsedTime = uu, this._previousAbsoluteFrame = Ju, !Eu && yu >= Ru && (Ju >= ru && Ku > 0 || Ju <= 0 && Ku < 0)) Xu = !1, Bu = mu.evaluate(yu);
          else if (!Eu && Ru >= yu && (Ju <= ru && Ku < 0 || Ju >= 0 && Ku > 0)) Xu = !1, Bu = mu.evaluate(Ru);
          else if (this._animationState.WQ !== Au.d.ANIMATIONLOOPMODE_CYCLE) {
            const uu = yu.toString() + Ru.toString();
            if (!this._offsetsCache[uu]) {
              this._animationState.repeatCount = 0, this._animationState.WQ = Au.d.ANIMATIONLOOPMODE_CYCLE;
              const Eu = mu._interpolate(Ru, this._animationState),
                Ku = mu._interpolate(yu, this._animationState);
              switch (this._animationState.WQ = this._getCorrectLoopMode(), mu.dataType) {
                case Au.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[uu] = Ku - Eu;
                  break;
                case Au.d.ANIMATIONTYPE_QUATERNION:
                case Au.d.ANIMATIONTYPE_VECTOR3:
                case Au.d.ANIMATIONTYPE_VECTOR2:
                case Au.d.ANIMATIONTYPE_SIZE:
                case Au.d.ANIMATIONTYPE_COLOR3:
                case Au.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[uu] = Ku.subtract(Eu)
              }
              this._highLimitsCache[uu] = Ku
            }
            Bu = this._highLimitsCache[uu], Qu = this._offsetsCache[uu]
          }
          if (void 0 === Qu) switch (mu.dataType) {
            case Au.d.ANIMATIONTYPE_FLOAT:
              Qu = 0;
              break;
            case Au.d.ANIMATIONTYPE_QUATERNION:
              Qu = Au.k;
              break;
            case Au.d.ANIMATIONTYPE_VECTOR3:
              Qu = Au.s;
              break;
            case Au.d.ANIMATIONTYPE_VECTOR2:
              Qu = Au.q;
              break;
            case Au.d.ANIMATIONTYPE_SIZE:
              Qu = Au.n;
              break;
            case Au.d.ANIMATIONTYPE_COLOR3:
              Qu = Au.i;
              break;
            case Au.d.ANIMATIONTYPE_COLOR4:
              Qu = Au.j
          }
          const pu = this._host ? this._host.syncRoot : null;
          let Tu, Wu = this._playbackFrames,
            ju = !1;
          if (pu) {
            const uu = pu.toFrame - pu.fromFrame,
              yu = pu.masterFrame,
              Eu = (yu - pu.fromFrame) / uu;
            Nu = Ru + ru * Eu;
            const Ku = pu.getAnimations()[0];
            if (Ku && 0 !== uu) {
              const uu = ru * Eu,
                Ru = Ku._playbackTo - Ku._playbackFrom;
              if (0 !== Ru && Ku._playbackFrom <= pu.fromFrame && Ku._playbackTo >= pu.toFrame) {
                Wu = ru * Math.round((Ku._playbackFrames - (Ku._currentFrame - Ku._playbackFrom)) / Ru) + uu
              } else ju = (yu - this._playbackSyncMasterFrame) * (Ku._playbackFrames - this._playbackSyncMasterPlayed) < 0, Wu = uu;
              ju = ju || Ku._playbackJumped, this._playbackSyncMasterPlayed = Ku._playbackFrames, this._playbackSyncMasterFrame = yu
            }
          } else Nu = Ju > 0 && Ru > yu || Ju < 0 && Ru < yu ? Xu && 0 !== ru ? yu + Ju % ru : Ru : Xu && 0 !== ru ? Ru + Ju % ru : yu;
          if (!Su && (Ku > 0 && this.currentFrame > Nu || Ku < 0 && this.currentFrame < Nu) || Su && xu) {
            this._onLoop();
            for (let uu = 0; uu < Vu.length; uu++) Vu[uu].onlyOnce || (Vu[uu].isDone = !1);
            this._animationState.key = Ku > 0 ? 0 : mu.getKeys().length - 1
          }
          if (this._currentFrame = Nu, this._animationState.repeatCount = 0 === ru ? 0 : Ju / ru | 0, this._animationState.highLimitValue = Bu, this._animationState.offsetValue = Qu, this._playbackFrom = Ru, this._playbackTo = yu, this._playbackJumped = ju, this._playbackSyncRoot = pu, pu) Tu = Wu;
          else if (Xu) Tu = Su ? Nu === Ru && Ju === yu ? ru : Nu - Ru : Ju;
          else {
            const uu = 0 !== ru ? Math.floor(this._playbackFrames / ru) : 0;
            Tu = (Nu === yu ? uu + 1 : uu) * ru
          }
          this._playbackFrames = Tu, this._playbackProgress = this._animationState.WQ === Au.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? ru : Tu
        }
        const Bu = mu._interpolate(Nu, this._animationState);
        if (this.setValue(Bu, Qu), Vu.length)
          for (let xu = 0; xu < Vu.length; xu++)
            if (ru >= 0 && Nu >= Vu[xu].frame && Vu[xu].frame >= Ru || ru < 0 && Nu <= Vu[xu].frame && Vu[xu].frame <= Ru) {
              const uu = Vu[xu];
              uu.isDone || (uu.onlyOnce && (Vu.splice(xu, 1), xu--), uu.isDone = !0, uu.action(Nu))
            } return Xu || (this._stopped = !0), Xu
      }
    }
    var Mu = yu(39458);
    class Iu {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(uu) {
        this._weight = -1 !== uu ? Math.min(Math.max(uu, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(uu) {
        for (let Ru = 0; Ru < this._runtimeAnimations.length; Ru++) {
          this._runtimeAnimations[Ru]._prepareForSpeedRatioChange(uu)
        }
        this._speedRatio = uu, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ju = arguments.length > 6 ? arguments[6] : void 0,
          Nu = arguments.length > 7 ? arguments[7] : void 0,
          Xu = arguments.length > 8 ? arguments[8] : void 0,
          Vu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          ru = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Ru, this.fromFrame = yu, this.toFrame = Eu, this.loopAnimation = Qu, this.onAnimationEnd = Ju, this.onAnimationLoop = Xu, this.isAdditive = Vu, this.playOrder = ru, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.iH = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Ku.b, this.onAnimationLoopObservable = new Ku.b, this._scene = uu, Nu && this.appendAnimations(Ru, Nu), this._speedRatio = mu, uu._activeAnimatables.push(this)
      }
      syncWith(uu) {
        if (this._syncRoot = uu, uu) {
          const uu = this._scene._activeAnimatables.indexOf(this);
          uu > -1 && (this._scene._activeAnimatables.splice(uu, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(uu, Ru) {
        for (let yu = 0; yu < Ru.length; yu++) {
          const Eu = Ru[yu],
            Ku = new Du(uu, Eu, this._scene, this);
          Ku._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Ku)
        }
      }
      getAnimationByTargetProperty(uu) {
        const Ru = this._runtimeAnimations;
        for (let yu = 0; yu < Ru.length; yu++)
          if (Ru[yu].animation.targetProperty === uu) return Ru[yu].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(uu) {
        const Ru = this._runtimeAnimations;
        for (let yu = 0; yu < Ru.length; yu++)
          if (Ru[yu].animation.targetProperty === uu) return Ru[yu];
        return null
      }
      reset() {
        const uu = this._runtimeAnimations;
        for (let Ru = 0; Ru < uu.length; Ru++) uu[Ru].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(uu) {
        const Ru = this._runtimeAnimations;
        for (let yu = 0; yu < Ru.length; yu++) Ru[yu].animation.enableBlending = !0, Ru[yu].animation.blendingSpeed = uu
      }
      disableBlending() {
        const uu = this._runtimeAnimations;
        for (let Ru = 0; Ru < uu.length; Ru++) uu[Ru].animation.enableBlending = !1
      }
      goToFrame(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this._runtimeAnimations;
        if (yu[0]) {
          const Ru = yu[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? yu[0].currentFrame;
          const Eu = 0 === this.speedRatio ? 0 : (uu - this._frameToSyncFromJump) / Ru * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Eu
        }
        for (let Eu = 0; Eu < yu.length; Eu++) yu[Eu].goToFrame(uu, Ru ? this._weight : -1);
        this._goToFrame = uu
      }
      get paused() {
        return this.iH
      }
      pause() {
        this.iH || (this.iH = !0)
      }
      restart() {
        this.iH = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (uu || Ru) {
          const Ku = this._scene._activeAnimatables.indexOf(this);
          if (Ku > -1) {
            const Qu = this._runtimeAnimations;
            for (let yu = Qu.length - 1; yu >= 0; yu--) {
              const Eu = Qu[yu];
              uu && Eu.animation.name != uu || (Ru && !Ru(Eu.target) || (Eu.dispose(), Qu.splice(yu, 1)))
            }
            0 == Qu.length && (yu || this._scene._activeAnimatables.splice(Ku, 1), Eu || this._raiseOnAnimationEnd())
          }
        } else {
          const uu = this._scene._activeAnimatables.indexOf(this);
          if (uu > -1) {
            yu || this._scene._activeAnimatables.splice(uu, 1);
            const Ru = this._runtimeAnimations;
            for (let uu = 0; uu < Ru.length; uu++) Ru[uu].dispose();
            this._runtimeAnimations.length = 0, Eu || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((uu => {
          this.onAnimationEndObservable.add((() => {
            uu(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(uu) {
        if (this.iH) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = uu), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = uu, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += uu - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Iu.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Ru = !1;
        const yu = this._runtimeAnimations;
        let Eu;
        for (Eu = 0; Eu < yu.length; Eu++) {
          const Ku = yu[Eu].animate(uu - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Ru = Ru || Ku
        }
        if (this.animationStarted = Ru, !Ru) {
          if (this.disposeOnEnd)
            for (Eu = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Eu, 1), Eu = 0; Eu < yu.length; Eu++) yu[Eu].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Ru
      }
    }

    function Gu(uu) {
      if (0 === uu.totalWeight && 0 === uu.totalAdditiveWeight) return uu.originalValue;
      let Ru = 1;
      const yu = Qu.m.MS[0],
        Eu = Qu.m.MS[1],
        Ku = Qu.m.Quaternion[0];
      let mu = 0;
      const Ju = uu.animations[0],
        Nu = uu.originalValue;
      let Xu, Vu = !1;
      if (uu.totalWeight < 1) Xu = 1 - uu.totalWeight, Nu.decompose(Eu, Ku, yu);
      else {
        if (mu = 1, Ru = uu.totalWeight, Xu = Ju.weight / Ru, 1 == Xu) {
          if (!uu.totalAdditiveWeight) return Ju.currentValue;
          Vu = !0
        }
        Ju.currentValue.decompose(Eu, Ku, yu)
      }
      if (!Vu) {
        Eu.scaleInPlace(Xu), yu.scaleInPlace(Xu), Ku.scaleInPlace(Xu);
        for (let Ju = mu; Ju < uu.animations.length; Ju++) {
          const mu = uu.animations[Ju];
          if (0 === mu.weight) continue;
          Xu = mu.weight / Ru;
          const Nu = Qu.m.MS[2],
            Vu = Qu.m.MS[3],
            ru = Qu.m.Quaternion[1];
          mu.currentValue.decompose(Vu, ru, Nu), Vu.scaleAndAddToRef(Xu, Eu), ru.scaleAndAddToRef(Qu.f.Dot(Ku, ru) > 0 ? Xu : -Xu, Ku), Nu.scaleAndAddToRef(Xu, yu)
        }
        Ku.normalize()
      }
      for (let Bu = 0; Bu < uu.additiveAnimations.length; Bu++) {
        const Ru = uu.additiveAnimations[Bu];
        if (0 === Ru.weight) continue;
        const mu = Qu.m.MS[2],
          Ju = Qu.m.MS[3],
          Nu = Qu.m.Quaternion[1];
        Ru.currentValue.decompose(Ju, Nu, mu), Ju.multiplyToRef(Eu, Ju), Qu.p.LerpToRef(Eu, Ju, Ru.weight, Eu), Ku.multiplyToRef(Nu, Nu), Qu.f.SlerpToRef(Ku, Nu, Ru.weight, Ku), mu.scaleAndAddToRef(Ru.weight, yu)
      }
      const ru = Ju ? Ju._animationState.workValue : Qu.m.Matrix[0].clone();
      return Qu.d.ComposeToRef(Eu, Ku, yu, ru), ru
    }

    function Uu(uu, Ru) {
      if (0 === uu.totalWeight && 0 === uu.totalAdditiveWeight) return Ru;
      const yu = uu.animations[0],
        Eu = uu.originalValue;
      let Ku = Ru;
      if (0 === uu.totalWeight && uu.totalAdditiveWeight > 0) Ku.Oyu(Eu);
      else if (1 === uu.animations.length) {
        if (Qu.f.SlerpToRef(Eu, yu.currentValue, Math.min(1, uu.totalWeight), Ku), 0 === uu.totalAdditiveWeight) return Ku
      } else if (uu.animations.length > 1) {
        let yu, mu, Ju = 1;
        if (uu.totalWeight < 1) {
          const Ru = 1 - uu.totalWeight;
          yu = [], mu = [], yu.push(Eu), mu.push(Ru)
        } else {
          if (2 === uu.animations.length && (Qu.f.SlerpToRef(uu.animations[0].currentValue, uu.animations[1].currentValue, uu.animations[1].weight / uu.totalWeight, Ru), 0 === uu.totalAdditiveWeight)) return Ru;
          yu = [], mu = [], Ju = uu.totalWeight
        }
        for (let Ru = 0; Ru < uu.animations.length; Ru++) {
          const Eu = uu.animations[Ru];
          yu.push(Eu.currentValue), mu.push(Eu.weight / Ju)
        }
        let Nu = 0;
        for (let uu = 0; uu < yu.length;) uu ? (Nu += mu[uu], Qu.f.SlerpToRef(Ku, yu[uu], mu[uu] / Nu, Ku), uu++) : (Qu.f.SlerpToRef(yu[uu], yu[uu + 1], mu[uu + 1] / (mu[uu] + mu[uu + 1]), Ru), Ku = Ru, Nu = mu[uu] + mu[uu + 1], uu += 2)
      }
      for (let mu = 0; mu < uu.additiveAnimations.length; mu++) {
        const Ru = uu.additiveAnimations[mu];
        0 !== Ru.weight && (Ku.multiplyToRef(Ru.currentValue, Qu.m.Quaternion[0]), Qu.f.SlerpToRef(Ku, Qu.m.Quaternion[0], Ru.weight, Ku))
      }
      return Ku
    }

    function nu(uu, Ru) {
      Ru && (Ru.prototype.copyAnimationRange = function(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Au.d(this.name, "_matrix", uu.animations[0].framePerSecond, Au.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Qu = uu.animations[0].getRange(Ru);
        if (!Qu) return !1;
        const mu = Qu.from,
          Ju = Qu.to,
          Nu = uu.animations[0].getKeys(),
          Xu = uu.length,
          Vu = uu.getParent(),
          ru = this.getParent(),
          Bu = Eu && Vu && Xu && this.length && Xu !== this.length,
          xu = Bu && ru && Vu ? ru.length / Vu.length : 1,
          Su = Eu && !ru && Ku && (1 !== Ku.x || 1 !== Ku.y || 1 !== Ku.z),
          pu = this.animations[0].getKeys();
        let Tu, Wu, ju;
        for (let Hu = 0, du = Nu.length; Hu < du; Hu++) Tu = Nu[Hu], Tu.frame >= mu && Tu.frame <= Ju && (Eu ? (ju = Tu.value.clone(), Bu ? (Wu = ju.getTranslation(), ju.setTranslation(Wu.scaleInPlace(xu))) : Su && Ku ? (Wu = ju.getTranslation(), ju.setTranslation(Wu.multiplyInPlace(Ku))) : ju = Tu.value) : ju = Tu.value, pu.push({
          frame: Tu.frame + yu,
          value: ju
        }));
        return this.animations[0].createRange(Ru, mu + yu, Ju + yu), !0
      }), uu && (uu.prototype._animate = function(uu) {
        const Ru = this._animationWrites,
          yu = this._animationWriteCount;
        let Eu = 0;
        for (let Qu = this._animationStepWriteCount; Qu < yu; Qu++) {
          const uu = Ru[Qu];
          uu.NT && -1 === uu.weight || (uu.NT = !0, Ru[Qu] = Ru[Eu], Ru[Eu] = uu, Eu++)
        }
        for (let Qu = Eu; Qu < yu; Qu++) {
          const uu = Ru[Qu];
          uu.runtimeAnimation = null, uu.target = null
        }
        if (this._animationWriteCount = Eu, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Ku = Mu.b.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Ku
        }
        this.deltaTime = void 0 !== uu ? uu : this.useConstantAnimationDeltaTime ? 16 : (Ku - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Ku;
        const mu = this._activeAnimatables;
        if (0 === mu.length) return;
        this._animationTime += this.deltaTime;
        const Ju = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Qu = 0; Qu < mu.length; Qu++) {
          const uu = mu[Qu];
          !uu._animate(Ju) && uu.disposeOnEnd && Qu--
        }! function(uu) {
          if (uu._registeredForLateAnimationBindings.length) {
            for (let Ru = 0; Ru < uu._registeredForLateAnimationBindings.length; Ru++) {
              const yu = uu._registeredForLateAnimationBindings.data[Ru];
              for (const uu in yu._lateAnimationHolders) {
                const Ru = yu._lateAnimationHolders[uu],
                  Eu = Ru.animations[0],
                  Ku = Ru.originalValue;
                if (void 0 === Ku || null === Ku) continue;
                const mu = Au.d.AllowMatrixDecomposeForInterpolation && Ku.m;
                let Ju = yu[uu];
                if (mu) Ju = Gu(Ru);
                else if (void 0 !== Ku.w) Ju = Uu(Ru, Ju || Qu.f.Identity());
                else {
                  let uu = 0,
                    yu = 1;
                  const Qu = Eu && Eu._animationState.WQ === Au.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Ru.totalWeight < 1) Ju = Qu ? Ku.clone ? Ku.clone() : Ku : Eu && Ku.scale ? Ku.scale(1 - Ru.totalWeight) : Eu ? Ku * (1 - Ru.totalWeight) : Ku.clone ? Ku.clone() : Ku;
                  else if (Eu) {
                    yu = Ru.totalWeight;
                    const mu = Eu.weight / yu;
                    Ju = 1 !== mu ? Eu.currentValue.scale ? Eu.currentValue.scale(mu) : Eu.currentValue * mu : (Ru.animations.length > 1 || Ru.additiveAnimations.length > 0) && Eu.currentValue.clone ? Eu.currentValue.clone() : Eu.currentValue, Qu && (Ju.addToRef ? Ju.addToRef(Ku, Ju) : Ju += Ku), uu = 1
                  }
                  for (let Eu = uu; Eu < Ru.animations.length; Eu++) {
                    const uu = Ru.animations[Eu],
                      Ku = uu.weight / yu;
                    Ku && (uu.currentValue.scaleAndAddToRef ? uu.currentValue.scaleAndAddToRef(Ku, Ju) : Ju += uu.currentValue * Ku)
                  }
                  for (let Eu = 0; Eu < Ru.additiveAnimations.length; Eu++) {
                    const uu = Ru.additiveAnimations[Eu],
                      yu = uu.weight;
                    yu && (uu.currentValue.scaleAndAddToRef ? uu.currentValue.scaleAndAddToRef(yu, Ju) : Ju += uu.currentValue * yu)
                  }
                }
                yu[uu] = Ju
              }
              yu._lateAnimationHolders = {}
            }
            uu._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, uu.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((uu, Ru) => uu.playOrder - Ru.playOrder))
      }, uu.prototype.beginWeightedAnimation = function(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 ? arguments[7] : void 0,
          Nu = arguments.length > 8 ? arguments[8] : void 0,
          Xu = arguments.length > 9 ? arguments[9] : void 0,
          Vu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ru = this.beginAnimation(uu, Ru, yu, Ku, Qu, mu, Ju, !1, Nu, Xu, Vu);
        return ru.weight = Eu, ru
      }, uu.prototype.beginAnimation = function(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Qu = arguments.length > 5 ? arguments[5] : void 0,
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nu = arguments.length > 8 ? arguments[8] : void 0,
          Xu = arguments.length > 9 ? arguments[9] : void 0,
          Vu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Ku < 0) {
          const uu = Ru;
          Ru = yu, yu = uu, Ku = -Ku
        }
        Ru > yu && (Ku = -Ku), Ju && this.stopAnimation(uu, void 0, Nu), mu || (mu = new Iu(this, uu, Ru, yu, Eu, Ku, Qu, void 0, Xu, Vu));
        const ru = !Nu || Nu(uu);
        if (uu.animations && ru && mu.appendAnimations(uu, uu.animations), uu.getAnimatables) {
          const Vu = uu.getAnimatables();
          for (let uu = 0; uu < Vu.length; uu++) this.beginAnimation(Vu[uu], Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu)
        }
        return mu.reset(), mu
      }, uu.prototype.beginHierarchyAnimation = function(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          mu = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 ? arguments[7] : void 0,
          Nu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Xu = arguments.length > 9 ? arguments[9] : void 0,
          Vu = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const ru = uu.getDescendants(Ru),
          Bu = [];
        Bu.push(this.beginAnimation(uu, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, void 0, Vu));
        for (const xu of ru) Bu.push(this.beginAnimation(xu, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, void 0, Vu));
        return Bu
      }, uu.prototype.beginDirectAnimation = function(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Qu < 0) {
          const uu = yu;
          yu = Eu, Eu = uu, Qu = -Qu
        }
        yu > Eu && (Qu = -Qu);
        return new Iu(this, uu, yu, Eu, Ku, Qu, arguments.length > 6 ? arguments[6] : void 0, Ru, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, uu.prototype.beginDirectHierarchyAnimation = function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        let Xu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Vu = uu.getDescendants(Ru),
          ru = [];
        ru.push(this.beginDirectAnimation(uu, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu));
        for (const Bu of Vu) ru.push(this.beginDirectAnimation(Bu, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu));
        return ru
      }, uu.prototype.getAnimatableByTarget = function(uu) {
        for (let Ru = 0; Ru < this._activeAnimatables.length; Ru++)
          if (this._activeAnimatables[Ru].target === uu) return this._activeAnimatables[Ru];
        return null
      }, uu.prototype.getAllAnimatablesByTarget = function(uu) {
        const Ru = [];
        for (let yu = 0; yu < this._activeAnimatables.length; yu++) this._activeAnimatables[yu].target === uu && Ru.push(this._activeAnimatables[yu]);
        return Ru
      }, uu.prototype.stopAnimation = function(uu, Ru, yu) {
        const Eu = this.getAllAnimatablesByTarget(uu);
        for (const Ku of Eu) Ku.stop(Ru, yu)
      }, uu.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let uu = 0; uu < this._activeAnimatables.length; uu++) this._activeAnimatables[uu].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const uu of this.animationGroups) uu.stop()
      })
    }
    Iu.ProcessPausedAnimatables = !1;
    var su, tu = yu(36842),
      lu = yu(39780),
      gu = yu(39430);
    class cu extends lu.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(uu) {
        (uu.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Oyu(uu), this._markAsDirtyAndDecompose())
      }
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(uu, Ru.lD(), !1), this.name = uu, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Ru, this._localMatrix = Eu?.clone() ?? Qu.d.Identity(), this._restMatrix = Ku ?? this._localMatrix.clone(), this._bindMatrix = mu ?? this._localMatrix.clone(), this._index = Ju, this._absoluteMatrix = new Qu.d, this._absoluteBindMatrix = new Qu.d, this._absoluteInverseBindMatrix = new Qu.d, this._finalMatrix = new Qu.d, Ru.bones.push(this), this.setParent(yu, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(uu) {
        this.setParent(uu)
      }
      setParent(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== uu) {
          if (this.parent) {
            const uu = this.parent.children.indexOf(this); - 1 !== uu && this.parent.children.splice(uu, 1)
          }
          this._parentNode = uu, this.parent && this.parent.children.push(this), Ru && this._updateAbsoluteBindMatrices(), this.Eyu()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(uu) {
        this._restMatrix.Oyu(uu)
      }
      setRestPose(uu) {
        this.setRestMatrix(uu)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(uu) {
        this.v_(uu)
      }
      setBindPose(uu) {
        this.setBindMatrix(uu)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const uu = Qu.m.MS[0],
            Ru = Qu.m.Quaternion[0],
            yu = Qu.m.MS[1];
          this.getRestMatrix().decompose(uu, Ru, yu), this._linkedTransformNode.position.Oyu(yu), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Qu.f.Identity(), this._linkedTransformNode.rotationQuaternion.Oyu(Ru), this._linkedTransformNode.pp.Oyu(uu)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(uu) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = uu, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.pRu
      }
      set position(uu) {
        this._decompose(), this.pRu.Oyu(uu), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(uu) {
        this.setRotation(uu)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(uu) {
        this.setRotationQuaternion(uu)
      }
      get pp() {
        return this.getScale()
      }
      set pp(uu) {
        this.setScale(uu)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Qu.p.Zero(), this._localRotation = Qu.f.Zero(), this.pRu = Qu.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.pRu))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Qu.d.ComposeToRef(this._localScaling, this._localRotation, this.pRu, this._localMatrix)) : this._needToCompose = !1)
      }
      v_(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Oyu(uu), Ru && this._updateAbsoluteBindMatrices(), yu ? this._matrix = uu : this.Eyu()
      }
      _updateAbsoluteBindMatrices(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (uu || (uu = this._bindMatrix), this.parent ? uu.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Oyu(uu), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Ru)
          for (let yu = 0; yu < this.children.length; yu++) this.children[yu]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      Eyu() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.Eyu(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.Eyu(), this._needToDecompose = !0
      }
      _updatePosition(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ku = this.getLocalMatrix();
        if (0 == Ru) Eu ? (Ku.addAtIndex(12, uu.x), Ku.addAtIndex(13, uu.y), Ku.addAtIndex(14, uu.z)) : Ku.setTranslationFromFloats(uu.x, uu.y, uu.z);
        else {
          const Ru = cu._TmpMats[0],
            mu = cu._TmpVecs[0];
          this.parent ? (Ru.Oyu(this.parent.getAbsoluteMatrix()), yu && Ru.multiplyToRef(yu.getWorldMatrix(), Ru)) : Qu.d.IdentityToRef(Ru), Eu && Ru.setTranslationFromFloats(0, 0, 0), Ru.invert(), Qu.p.TransformCoordinatesToRef(uu, Ru, mu), Eu ? (Ku.addAtIndex(12, mu.x), Ku.addAtIndex(13, mu.y), Ku.addAtIndex(14, mu.z)) : Ku.setTranslationFromFloats(mu.x, mu.y, mu.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(uu, Ru, yu, !0)
      }
      setPosition(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(uu, Ru, yu, !1)
      }
      setAbsolutePosition(uu, Ru) {
        this.setPosition(uu, 1, Ru)
      }
      scale(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ku = this.getLocalMatrix(),
          mu = cu._TmpMats[0];
        Qu.d.ScalingToRef(uu, Ru, yu, mu), mu.multiplyToRef(Ku, Ku), mu.invert();
        for (const Qu of this.children) {
          const Eu = Qu.getLocalMatrix();
          Eu.multiplyToRef(mu, Eu), Eu.multiplyAtIndex(12, uu), Eu.multiplyAtIndex(13, Ru), Eu.multiplyAtIndex(14, yu), Qu._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Eu)
          for (const Qu of this.children) Qu.scale(uu, Ru, yu, Eu)
      }
      setScale(uu) {
        this._decompose(), this._localScaling.Oyu(uu), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(uu) {
        this._decompose(), uu.Oyu(this._localScaling)
      }
      setYawPitchRoll(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Eu) {
          const mu = cu._TmpQuat;
          return Qu.f.RotationYawPitchRollToRef(uu, Ru, yu, mu), void this.setRotationQuaternion(mu, Eu, Ku)
        }
        const mu = cu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(mu, Ku)) return;
        const Ju = cu._TmpMats[1];
        Qu.d.RotationYawPitchRollToRef(uu, Ru, yu, Ju), mu.multiplyToRef(Ju, Ju), this._rotateWithMatrix(Ju, Eu, Ku)
      }
      rotate(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        const Ku = cu._TmpMats[0];
        Ku.setTranslationFromFloats(0, 0, 0), Qu.d.RotationAxisToRef(uu, Ru, Ku), this._rotateWithMatrix(Ku, yu, Eu)
      }
      setAxisAngle(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === yu) {
          const Ku = cu._TmpQuat;
          return Qu.f.RotationAxisToRef(uu, Ru, Ku), void this.setRotationQuaternion(Ku, yu, Eu)
        }
        const Ku = cu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ku, Eu)) return;
        const mu = cu._TmpMats[1];
        Qu.d.RotationAxisToRef(uu, Ru, mu), Ku.multiplyToRef(mu, mu), this._rotateWithMatrix(mu, yu, Eu)
      }
      setRotation(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(uu.y, uu.x, uu.z, Ru, yu)
      }
      setRotationQuaternion(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Ru) return this._decompose(), this._localRotation.Oyu(uu), void this._markAsDirtyAndCompose();
        const Eu = cu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Eu, yu)) return;
        const Ku = cu._TmpMats[1];
        Qu.d.FromQuaternionToRef(uu, Ku), Eu.multiplyToRef(Ku, Ku), this._rotateWithMatrix(Ku, Ru, yu)
      }
      setRotationMatrix(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Ru) {
          const Eu = cu._TmpQuat;
          return Qu.f.FromRotationMatrixToRef(uu, Eu), void this.setRotationQuaternion(Eu, Ru, yu)
        }
        const Eu = cu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Eu, yu)) return;
        const Ku = cu._TmpMats[1];
        Ku.Oyu(uu), Eu.multiplyToRef(uu, Ku), this._rotateWithMatrix(Ku, Ru, yu)
      }
      _rotateWithMatrix(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = this.getLocalMatrix(),
          Ku = Eu.m[12],
          Qu = Eu.m[13],
          mu = Eu.m[14],
          Ju = this.getParent(),
          Nu = cu._TmpMats[3],
          Xu = cu._TmpMats[4];
        Ju && 1 == Ru ? (yu ? (Nu.Oyu(yu.getWorldMatrix()), Ju.getAbsoluteMatrix().multiplyToRef(Nu, Nu)) : Nu.Oyu(Ju.getAbsoluteMatrix()), Xu.Oyu(Nu), Xu.invert(), Eu.multiplyToRef(Nu, Eu), Eu.multiplyToRef(uu, Eu), Eu.multiplyToRef(Xu, Eu)) : 1 == Ru && yu ? (Nu.Oyu(yu.getWorldMatrix()), Xu.Oyu(Nu), Xu.invert(), Eu.multiplyToRef(Nu, Eu), Eu.multiplyToRef(uu, Eu), Eu.multiplyToRef(Xu, Eu)) : Eu.multiplyToRef(uu, Eu), Eu.setTranslationFromFloats(Ku, Qu, mu), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(uu, Ru) {
        const yu = cu._TmpMats[2];
        return uu.Oyu(this.getAbsoluteMatrix()), Ru ? (uu.multiplyToRef(Ru.getWorldMatrix(), uu), Qu.d.ScalingToRef(Ru.pp.x, Ru.pp.y, Ru.pp.z, yu)) : Qu.d.IdentityToRef(yu), uu.invert(), !isNaN(uu.m[0]) && (yu.multiplyAtIndex(0, this._scalingDeterminant), uu.multiplyToRef(yu, uu), !0)
      }
      mH() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = Qu.p.Zero();
        return this.getPositionToRef(uu, Ru, yu), yu
      }
      getPositionToRef() {
        let uu = arguments.length > 1 ? arguments[1] : void 0,
          Ru = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const uu = this.getLocalMatrix();
          Ru.x = uu.m[12], Ru.y = uu.m[13], Ru.z = uu.m[14]
        } else {
          const yu = cu._TmpMats[0].Oyu(this.getAbsoluteMatrix());
          uu && yu.multiplyToRef(uu.getWorldMatrix(), yu), Ru.x = yu.m[12], Ru.y = yu.m[13], Ru.z = yu.m[14]
        }
      }
      getAbsolutePosition() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Ru = Qu.p.Zero();
        return this.getPositionToRef(1, uu, Ru), Ru
      }
      getAbsolutePositionToRef(uu, Ru) {
        this.getPositionToRef(1, uu, Ru)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Oyu(this._localMatrix);
          const uu = this._skeleton.getPoseMatrix();
          uu && this._absoluteMatrix.multiplyToRef(uu, this._absoluteMatrix)
        }
        const uu = this.children,
          Ru = uu.length;
        for (let yu = 0; yu < Ru; yu++) uu[yu].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Mq(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = Qu.p.Zero();
        return this.getDirectionToRef(uu, Ru, yu), yu
      }
      getDirectionToRef(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = cu._TmpMats[0].Oyu(this.getAbsoluteMatrix());
        Ru && Eu.multiplyToRef(Ru.getWorldMatrix(), Eu), Qu.p.TransformNormalToRef(uu, Eu, yu), yu.normalize()
      }
      getRotation() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = Qu.p.Zero();
        return this.getRotationToRef(uu, Ru, yu), yu
      }
      getRotationToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = cu._TmpQuat;
        this.getRotationQuaternionToRef(uu, Ru, Eu), Eu.toEulerAnglesToRef(yu)
      }
      getRotationQuaternion() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = Qu.f.Identity();
        return this.getRotationQuaternionToRef(uu, Ru, yu), yu
      }
      getRotationQuaternionToRef() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ru = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Ru.Oyu(this._localRotation);
        else {
          const yu = cu._TmpMats[0],
            Eu = this.getAbsoluteMatrix();
          uu ? Eu.multiplyToRef(uu.getWorldMatrix(), yu) : yu.Oyu(Eu), yu.multiplyAtIndex(0, this._scalingDeterminant), yu.multiplyAtIndex(1, this._scalingDeterminant), yu.multiplyAtIndex(2, this._scalingDeterminant), yu.decompose(void 0, Ru, void 0)
        }
      }
      getRotationMatrix() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 ? arguments[1] : void 0;
        const yu = Qu.d.Identity();
        return this.getRotationMatrixToRef(uu, Ru, yu), yu
      }
      getRotationMatrixToRef() {
        let uu = arguments.length > 1 ? arguments[1] : void 0,
          Ru = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Ru);
        else {
          const yu = cu._TmpMats[0],
            Eu = this.getAbsoluteMatrix();
          uu ? Eu.multiplyToRef(uu.getWorldMatrix(), yu) : yu.Oyu(Eu), yu.multiplyAtIndex(0, this._scalingDeterminant), yu.multiplyAtIndex(1, this._scalingDeterminant), yu.multiplyAtIndex(2, this._scalingDeterminant), yu.getRotationMatrixToRef(Ru)
        }
      }
      getAbsolutePositionFromLocal(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = Qu.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(uu, Ru, yu), yu
      }
      getAbsolutePositionFromLocalToRef(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = cu._TmpMats[0].Oyu(this.getAbsoluteMatrix());
        Ru && Eu.multiplyToRef(Ru.getWorldMatrix(), Eu), Qu.p.TransformCoordinatesToRef(uu, Eu, yu)
      }
      getLocalPositionFromAbsolute(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const yu = Qu.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(uu, Ru, yu), yu
      }
      getLocalPositionFromAbsoluteToRef(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = cu._TmpMats[0].Oyu(this.getAbsoluteMatrix());
        Ru && Eu.multiplyToRef(Ru.getWorldMatrix(), Eu), Eu.invert(), Qu.p.TransformCoordinatesToRef(uu, Eu, yu)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const uu = this._skeleton.bones.indexOf(this);
        if (-1 !== uu && this._skeleton.bones.splice(uu, 1), this._parentNode && this._parentNode.children) {
          const uu = this._parentNode.children,
            Ru = uu.indexOf(this); - 1 !== Ru && uu.splice(Ru, 1)
        }
        super.dispose()
      }
    }
    cu._TmpVecs = (0, tu.b)(2, Qu.p.Zero), cu._TmpQuat = Qu.f.Identity(), cu._TmpMats = (0, tu.b)(5, Qu.d.Identity), (su = cu.prototype).copyAnimationRange ?? (su.copyAnimationRange = (0, gu.i)("Bone", "copyAnimationRange"));
    var Lu = yu(39647);
    let zu = !1;
    var Fu = yu(39526),
      wu = yu(39899),
      Zu = yu(39913),
      hu = yu(39905),
      Pu = yu(39687);

    function iu(uu, Ru) {
      const yu = (0, xu.RandomRange)(0, 1);
      Vu.h.LerpToRef(Ru.color1, Ru.color2, yu, uu.color)
    }

    function Yu(uu, Ru) {
      Ru.colorDead.subtractToRef(uu.color, Ru._colorDiff), Ru._colorDiff.scaleToRef(1 / uu.lifeTime, uu.colorStep)
    }

    function ou(uu, Ru) {
      uu._properties.currentColorGradient = Ru._colorGradients[0], uu._properties.currentColorGradient.getColorToRef(uu.color), uu._properties.currentColor1.Oyu(uu.color), Ru._colorGradients.length > 1 ? Ru._colorGradients[1].getColorToRef(uu._properties.currentColor2) : uu._properties.currentColor2.Oyu(uu.color)
    }

    function qu(uu, Ru) {
      const yu = Ru._colorGradients;
      Eu.i.GetCurrentGradient(Ru._ratio, yu, ((Ru, yu, Eu) => {
        Ru !== uu._properties.currentColorGradient && (uu._properties.currentColor1.Oyu(uu._properties.currentColor2), yu.getColorToRef(uu._properties.currentColor2), uu._properties.currentColorGradient = Ru), Vu.h.LerpToRef(uu._properties.currentColor1, uu._properties.currentColor2, Eu, uu.color), uu.color.a < 0 && (uu.color.a = 0)
      }))
    }

    function Ou(uu, Ru) {
      uu.colorStep.scaleToRef(Ru._scaledUpdateSpeed, Ru._scaledColorStep), uu.color.addInPlace(Ru._scaledColorStep), uu.color.a < 0 && (uu.color.a = 0)
    }

    function vu(uu, Ru) {
      Eu.i.GetCurrentGradient(Ru._ratio, Ru._angularSpeedGradients, ((Ru, yu, Eu) => {
        Ru !== uu._properties.currentAngularSpeedGradient && (uu._properties.currentAngularSpeed1 = uu._properties.currentAngularSpeed2, uu._properties.currentAngularSpeed2 = yu.getFactor(), uu._properties.currentAngularSpeedGradient = Ru), uu.angularSpeed = (0, xu.Lerp)(uu._properties.currentAngularSpeed1, uu._properties.currentAngularSpeed2, Eu)
      }))
    }

    function au(uu, Ru) {
      uu.angle += uu.angularSpeed * Ru._scaledUpdateSpeed
    }

    function fu(uu, Ru) {
      Ru.particleEmitterType.startDirectionFunction(Ru._emitterWorldMatrix, uu.direction, uu, Ru.isLocal, Ru._emitterInverseWorldMatrix)
    }

    function uR(uu, Ru) {
      Ru.startDirectionFunction(Ru._emitterWorldMatrix, uu.direction, uu, Ru.isLocal)
    }

    function RR(uu, Ru) {
      uu._properties.currentVelocityGradient = Ru._velocityGradients[0], uu._properties.currentVelocity1 = uu._properties.currentVelocityGradient.getFactor(), Ru._velocityGradients.length > 1 ? uu._properties.currentVelocity2 = Ru._velocityGradients[1].getFactor() : uu._properties.currentVelocity2 = uu._properties.currentVelocity1
    }

    function yR(uu, Ru) {
      uu._properties.currentLimitVelocityGradient = Ru._limitVelocityGradients[0], uu._properties.currentLimitVelocity1 = uu._properties.currentLimitVelocityGradient.getFactor(), Ru._limitVelocityGradients.length > 1 ? uu._properties.currentLimitVelocity2 = Ru._limitVelocityGradients[1].getFactor() : uu._properties.currentLimitVelocity2 = uu._properties.currentLimitVelocity1
    }

    function ER(uu, Ru) {
      Eu.i.GetCurrentGradient(Ru._ratio, Ru._velocityGradients, ((Ru, yu, Eu) => {
        Ru !== uu._properties.currentVelocityGradient && (uu._properties.currentVelocity1 = uu._properties.currentVelocity2, uu._properties.currentVelocity2 = yu.getFactor(), uu._properties.currentVelocityGradient = Ru), uu._properties.directionScale *= (0, xu.Lerp)(uu._properties.currentVelocity1, uu._properties.currentVelocity2, Eu)
      }))
    }

    function KR(uu, Ru) {
      Eu.i.GetCurrentGradient(Ru._ratio, Ru._limitVelocityGradients, ((yu, Eu, Ku) => {
        yu !== uu._properties.currentLimitVelocityGradient && (uu._properties.currentLimitVelocity1 = uu._properties.currentLimitVelocity2, uu._properties.currentLimitVelocity2 = Eu.getFactor(), uu._properties.currentLimitVelocityGradient = yu);
        const Qu = (0, xu.Lerp)(uu._properties.currentLimitVelocity1, uu._properties.currentLimitVelocity2, Ku);
        uu.direction.length() > Qu && uu.direction.scaleInPlace(Ru.limitVelocityDamping)
      }))
    }

    function QR(uu) {
      uu.direction.scaleToRef(uu._properties.directionScale, uu._properties.scaledDirection)
    }

    function mR(uu, Ru) {
      Ru.particleEmitterType.startPositionFunction(Ru._emitterWorldMatrix, uu.position, uu, Ru.isLocal)
    }

    function JR(uu, Ru) {
      Ru.startPositionFunction(Ru._emitterWorldMatrix, uu.position, uu, Ru.isLocal)
    }

    function NR(uu, Ru) {
      uu._properties.localPosition ? uu._properties.localPosition.Oyu(uu.position) : uu._properties.localPosition = uu.position.clone(), Qu.p.TransformCoordinatesToRef(uu._properties.localPosition, Ru._emitterWorldMatrix, uu.position)
    }

    function XR(uu, Ru) {
      Ru.isLocal && uu._properties.localPosition ? (uu._properties.localPosition.addInPlace(uu._properties.scaledDirection), Qu.p.TransformCoordinatesToRef(uu._properties.localPosition, Ru._emitterWorldMatrix, uu.position)) : uu.position.addInPlace(uu._properties.scaledDirection)
    }

    function VR(uu, Ru) {
      uu._properties.currentDragGradient = Ru._dragGradients[0], uu._properties.currentDrag1 = uu._properties.currentDragGradient.getFactor(), Ru._dragGradients.length > 1 ? uu._properties.currentDrag2 = Ru._dragGradients[1].getFactor() : uu._properties.currentDrag2 = uu._properties.currentDrag1
    }

    function rR(uu, Ru) {
      Eu.i.GetCurrentGradient(Ru._ratio, Ru._dragGradients, ((Ru, yu, Eu) => {
        Ru !== uu._properties.currentDragGradient && (uu._properties.currentDrag1 = uu._properties.currentDrag2, uu._properties.currentDrag2 = yu.getFactor(), uu._properties.currentDragGradient = Ru);
        const Ku = (0, xu.Lerp)(uu._properties.currentDrag1, uu._properties.currentDrag2, Eu);
        uu._properties.scaledDirection.scaleInPlace(1 - Ku)
      }))
    }

    function BR(uu, Ru) {
      uu._properties.randomNoiseCoordinates1 && uu._properties.randomNoiseCoordinates2 ? (uu._properties.randomNoiseCoordinates1.muu(Math.random(), Math.random(), Math.random()), uu._properties.randomNoiseCoordinates2.muu(Math.random(), Math.random(), Math.random())) : (uu._properties.randomNoiseCoordinates1 = new Qu.p(Math.random(), Math.random(), Math.random()), uu._properties.randomNoiseCoordinates2 = new Qu.p(Math.random(), Math.random(), Math.random()))
    }

    function xR(uu, Ru) {
      const yu = Ru._noiseTextureData,
        Eu = Ru._noiseTextureSize;
      if (yu && Eu && uu._properties.randomNoiseCoordinates1 && uu._properties.randomNoiseCoordinates2) {
        const Ku = Ru._fetchR(uu._properties.randomNoiseCoordinates1.x, uu._properties.randomNoiseCoordinates1.y, Eu.width, Eu.height, yu),
          mu = Ru._fetchR(uu._properties.randomNoiseCoordinates1.z, uu._properties.randomNoiseCoordinates2.x, Eu.width, Eu.height, yu),
          Ju = Ru._fetchR(uu._properties.randomNoiseCoordinates2.y, uu._properties.randomNoiseCoordinates2.z, Eu.width, Eu.height, yu),
          Nu = Qu.m.MS[0],
          Xu = Qu.m.MS[1];
        Nu.muu((2 * Ku - 1) * Ru.noiseStrength.x, (2 * mu - 1) * Ru.noiseStrength.y, (2 * Ju - 1) * Ru.noiseStrength.z), Nu.scaleToRef(Ru._tempScaledUpdateSpeed, Xu), uu.direction.addInPlace(Xu)
      }
    }

    function SR(uu, Ru) {
      Ru.gravity.scaleToRef(Ru._tempScaledUpdateSpeed, Ru._scaledGravity), uu.direction.addInPlace(Ru._scaledGravity)
    }

    function pR(uu, Ru) {
      uu.size = (0, xu.RandomRange)(Ru.minSize, Ru.maxSize), uu.scale.muu((0, xu.RandomRange)(Ru.minScaleX, Ru.maxScaleX), (0, xu.RandomRange)(Ru.minScaleY, Ru.maxScaleY))
    }

    function TR(uu, Ru) {
      uu._properties.currentSizeGradient = Ru._sizeGradients[0], uu._properties.currentSize1 = uu._properties.currentSizeGradient.getFactor(), uu.size = uu._properties.currentSize1, Ru._sizeGradients.length > 1 ? uu._properties.currentSize2 = Ru._sizeGradients[1].getFactor() : uu._properties.currentSize2 = uu._properties.currentSize1, uu.scale.muu((0, xu.RandomRange)(Ru.minScaleX, Ru.maxScaleX), (0, xu.RandomRange)(Ru.minScaleY, Ru.maxScaleY))
    }

    function WR(uu, Ru) {
      const yu = Ru._actualFrame / Ru.targetStopDuration;
      Eu.i.GetCurrentGradient(yu, Ru._startSizeGradients, ((yu, Eu, Ku) => {
        yu !== Ru._currentStartSizeGradient && (Ru._currentStartSize1 = Ru._currentStartSize2, Ru._currentStartSize2 = Eu.getFactor(), Ru._currentStartSizeGradient = yu);
        const Qu = (0, xu.Lerp)(Ru._currentStartSize1, Ru._currentStartSize2, Ku);
        uu.scale.scaleInPlace(Qu)
      }))
    }

    function jR(uu, Ru) {
      Eu.i.GetCurrentGradient(Ru._ratio, Ru._sizeGradients, ((Ru, yu, Eu) => {
        Ru !== uu._properties.currentSizeGradient && (uu._properties.currentSize1 = uu._properties.currentSize2, uu._properties.currentSize2 = yu.getFactor(), uu._properties.currentSizeGradient = Ru), uu.size = (0, xu.Lerp)(uu._properties.currentSize1, uu._properties.currentSize2, Eu)
      }))
    }

    function HR(uu, Ru) {
      uu.remapData = new Qu.r(0, 1, 0, 1)
    }

    function dR(uu, Ru) {
      Ru._colorRemapGradients && Ru._colorRemapGradients.length > 0 && Eu.i.GetCurrentGradient(Ru._ratio, Ru._colorRemapGradients, ((Ru, yu, Eu) => {
        const Ku = (0, xu.Lerp)(Ru.factor1, yu.factor1, Eu),
          Qu = (0, xu.Lerp)(Ru.factor2, yu.factor2, Eu);
        uu.remapData.x = Ku, uu.remapData.y = Qu - Ku
      })), Ru._alphaRemapGradients && Ru._alphaRemapGradients.length > 0 && Eu.i.GetCurrentGradient(Ru._ratio, Ru._alphaRemapGradients, ((Ru, yu, Eu) => {
        const Ku = (0, xu.Lerp)(Ru.factor1, yu.factor1, Eu),
          Qu = (0, xu.Lerp)(Ru.factor2, yu.factor2, Eu);
        uu.remapData.z = Ku, uu.remapData.w = Qu - Ku
      }))
    }

    function bR(uu, Ru) {
      const yu = (0, xu.Clamp)(Ru._actualFrame / Ru.targetStopDuration);
      Eu.i.GetCurrentGradient(yu, Ru._lifeTimeGradients, ((Ru, Eu) => {
        const Ku = Ru,
          Qu = Eu,
          mu = Ku.getFactor(),
          Ju = Qu.getFactor(),
          Nu = (yu - Ku.gradient) / (Qu.gradient - Ku.gradient);
        uu.lifeTime = (0, xu.Lerp)(mu, Ju, Nu)
      })), Ru._emitPower = (0, xu.RandomRange)(Ru.minEmitPower, Ru.maxEmitPower)
    }

    function CR(uu, Ru) {
      uu.lifeTime = (0, xu.RandomRange)(Ru.minLifeTime, Ru.maxLifeTime), Ru._emitPower = (0, xu.RandomRange)(Ru.minEmitPower, Ru.maxEmitPower)
    }

    function kR(uu, Ru) {
      0 === Ru._emitPower ? (uu._properties.initialDirection ? uu._properties.initialDirection.Oyu(uu.direction) : uu._properties.initialDirection = uu.direction.clone(), uu.direction.set(0, 0, 0)) : (uu._properties.initialDirection = null, uu.direction.scaleInPlace(Ru._emitPower)), uu.direction.addInPlace(Ru._inheritedVelocityOffset)
    }

    function eR(uu, Ru) {
      uu.angularSpeed = (0, xu.RandomRange)(Ru.minAngularSpeed, Ru.maxAngularSpeed), uu.angle = (0, xu.RandomRange)(Ru.minInitialRotation, Ru.maxInitialRotation)
    }

    function AR(uu, Ru) {
      uu._properties.currentAngularSpeedGradient = Ru._angularSpeedGradients[0], uu.angularSpeed = uu._properties.currentAngularSpeedGradient.getFactor(), uu._properties.currentAngularSpeed1 = uu.angularSpeed, Ru._angularSpeedGradients.length > 1 ? uu._properties.currentAngularSpeed2 = Ru._angularSpeedGradients[1].getFactor() : uu._properties.currentAngularSpeed2 = uu._properties.currentAngularSpeed1, uu.angle = (0, xu.RandomRange)(Ru.minInitialRotation, Ru.maxInitialRotation)
    }

    function DR(uu, Ru) {
      uu._properties.initialStartSpriteCellId = Ru.startSpriteCellID, uu._properties.initialEndSpriteCellId = Ru.endSpriteCellID, uu._properties.initialSpriteCellLoop = Ru.spriteCellLoop
    }

    function MR(uu, Ru) {
      uu.previousItem = Ru.previousItem, uu.nextItem = Ru, Ru.previousItem && (Ru.previousItem.nextItem = uu), Ru.previousItem = uu
    }

    function IR(uu, Ru) {
      uu.previousItem = Ru, uu.nextItem = Ru.nextItem, Ru.nextItem && (Ru.nextItem.previousItem = uu), Ru.nextItem = uu
    }

    function GR(uu) {
      uu.previousItem && (uu.previousItem.nextItem = uu.nextItem), uu.nextItem && (uu.nextItem.previousItem = uu.previousItem)
    }
    var UR = yu(39951);
    class nR extends Cu {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(uu) {
        this._startDirectionFunction !== uu && (this._startDirectionFunction = uu, this._directionCreation.process = uu ? uR : fu)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(uu) {
        this._startPositionFunction !== uu && (this._startPositionFunction = uu, this._positionCreation.process = uu ? JR : mR)
      }
      set onDispose(uu) {
        this._onDisposeObserver && this.zD.remove(this._onDisposeObserver), this._onDisposeObserver = this.zD.add(uu)
      }
      get wyu() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(uu) {
        this._useRampGradients !== uu && (this._useRampGradients = uu, this._resetEffect(), uu ? (this._rampCreation = {
          process: HR,
          previousItem: null,
          nextItem: null
        }, IR(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: dR,
          previousItem: null,
          nextItem: null
        }, IR(this._remapGradientProcessing, this._gravityProcessing))) : (GR(this._rampCreation), GR(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(uu) {
        this._isLocal !== uu && (this._isLocal = uu, uu ? (this._isLocalCreation = {
          process: NR,
          previousItem: null,
          nextItem: null
        }, IR(this._isLocalCreation, this._positionCreation)) : GR(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(uu) {
        this._animationSheetEnabled !== uu && (this._animationSheetEnabled = uu, uu ? (this._sheetCreation = {
          process: DR,
          previousItem: null,
          nextItem: null
        }, IR(this._sheetCreation, this._colorDeadCreation)) : GR(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[uu]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[uu] ?? this._customWrappers[0]
      }
      setCustomEffect(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Ru] = new wu.b(this._engine), this._customWrappers[Ru].effect = uu, this._customWrappers[Ru].drawContext && (this._customWrappers[Ru].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Ku.b), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(uu) {
        if (this.noiseTexture !== uu) {
          if (this._noiseTexture = uu, !uu) return GR(this._noiseCreation), void GR(this._noiseProcessing);
          this._noiseCreation = {
            process: BR,
            previousItem: null,
            nextItem: null
          }, IR(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: xR,
            previousItem: null,
            nextItem: null
          }, IR(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ju = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zu || (zu = !0, nu(Lu.i, cu)), (0, Fu.d)(), super(uu), this._emitterInverseWorldMatrix = Qu.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Qu.p, this.zD = new Ku.b, this.onStoppedObservable = new Ku.b, this.onStartedObservable = new Ku.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Vu.h(0, 0, 0, 0), this._colorDiff = new Vu.h(0, 0, 0, 0), this._scaledGravity = Qu.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = uu => {}, this.recycleParticle = uu => {
          const Ru = this._particles.pop();
          Ru !== uu && Ru.copyTo(uu), Ru.metadata = null, this._stockParticles.push(Ru)
        }, this._createParticle = () => {
          let uu;
          return 0 !== this._stockParticles.length ? (uu = this._stockParticles.pop(), uu._reset()) : uu = new eu(this), this._prepareParticle(uu), uu
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Ru, this._epsilon = Ju, yu && "Scene" !== yu.getClassName() ? (this._engine = yu, this.defaultProjectionMatrix = Qu.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = yu || Nu.b.LastCreatedScene, this._engine = this._scene.eS(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.JC.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: CR,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: mR,
          previousItem: null,
          nextItem: null
        }, IR(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: fu,
          previousItem: null,
          nextItem: null
        }, IR(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: kR,
          previousItem: null,
          nextItem: null
        }, IR(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: pR,
          previousItem: null,
          nextItem: null
        }, IR(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: eR,
          previousItem: null,
          nextItem: null
        }, IR(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: iu,
          previousItem: null,
          nextItem: null
        }, IR(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Yu,
          previousItem: null,
          nextItem: null
        }, IR(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Xu || (this._colorProcessing = {
          process: Ou,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: au,
          previousItem: null,
          nextItem: null
        }, IR(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: QR,
          previousItem: null,
          nextItem: null
        }, IR(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: XR,
          previousItem: null,
          nextItem: null
        }, IR(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: SR,
          previousItem: null,
          nextItem: null
        }, IR(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = mu, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new wu.b(this._engine)
        }, this._customWrappers[0].effect = Eu, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new ru.b, this.updateFunction = uu => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((uu => {
            this._noiseTextureData = uu
          })));
          const Ru = uu === this._particles;
          for (let yu = 0; yu < uu.length; yu++) {
            const Eu = uu[yu];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Ku = Eu.age;
            if (Eu.age += this._tempScaledUpdateSpeed, Eu.age > Eu.lifeTime) {
              const uu = Eu.age - Ku,
                Ru = Eu.lifeTime - Ku;
              this._tempScaledUpdateSpeed = Ru * this._tempScaledUpdateSpeed / uu, Eu.age = Eu.lifeTime
            }
            this._ratio = Eu.age / Eu.lifeTime, Eu._properties.directionScale = this._tempScaledUpdateSpeed;
            let Qu = this._updateQueueStart;
            for (; Qu;) Qu.process(Eu, this), Qu = Qu.nextItem;
            if (this._isAnimationSheetEnabled && !Xu && Eu.updateCellIndex(), Eu._inheritParticleInfoToSubEmitters(), Eu.age >= Eu.lifeTime) {
              if (this._emitFromParticle(Eu), Eu._properties.attachedSubEmitters) {
                for (const uu of Eu._properties.attachedSubEmitters) uu.particleSystem.disposeOnStop = !0, uu.particleSystem.stop();
                Eu._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Eu), Ru && yu--
            } else;
          }
        }
      }
      serialize(uu) {
        throw new Error("Method not implemented.")
      }
      clone(uu, Ru) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = bR : this._lifeTimeCreation.process = CR
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: WR,
          previousItem: null,
          nextItem: null
        }, IR(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (GR(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(uu) {
        this.targetStopDuration !== uu && (this._targetStopDuration = uu, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(uu, Ru, yu) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, uu, Ru, yu), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(uu) {
        return this._removeFactorGradient(this._lifeTimeGradients, uu), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(uu, Ru, yu) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = TR, this._sizeGradientProcessing = {
          process: jR,
          previousItem: null,
          nextItem: null
        }, MR(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, uu, Ru, yu), this
      }
      removeSizeGradient(uu) {
        return this._removeFactorGradient(this._sizeGradients, uu), 0 === this._sizeGradients?.length && (GR(this._sizeGradientProcessing), this._sizeCreation.process = pR), this
      }
      addColorRemapGradient(uu, Ru, yu) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, uu, Ru, yu), this
      }
      removeColorRemapGradient(uu) {
        return this._removeFactorGradient(this._colorRemapGradients, uu), this
      }
      addAlphaRemapGradient(uu, Ru, yu) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, uu, Ru, yu), this
      }
      removeAlphaRemapGradient(uu) {
        return this._removeFactorGradient(this._alphaRemapGradients, uu), this
      }
      addAngularSpeedGradient(uu, Ru, yu) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = AR, this._angularSpeedGradientProcessing = {
          process: vu,
          previousItem: null,
          nextItem: null
        }, MR(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, uu, Ru, yu), this
      }
      removeAngularSpeedGradient(uu) {
        return this._removeFactorGradient(this._angularSpeedGradients, uu), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = eR, GR(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(uu, Ru, yu) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: RR,
          previousItem: null,
          nextItem: null
        }, IR(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: ER,
          previousItem: null,
          nextItem: null
        }, MR(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, uu, Ru, yu), this
      }
      removeVelocityGradient(uu) {
        return this._removeFactorGradient(this._velocityGradients, uu), 0 === this._velocityGradients?.length && (GR(this._velocityCreation), GR(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(uu, Ru, yu) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: yR,
          previousItem: null,
          nextItem: null
        }, IR(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: KR,
          previousItem: null,
          nextItem: null
        }, IR(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, uu, Ru, yu), this
      }
      removeLimitVelocityGradient(uu) {
        return this._removeFactorGradient(this._limitVelocityGradients, uu), 0 === this._limitVelocityGradients?.length && (GR(this._limitVelocityCreation), GR(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(uu, Ru, yu) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: VR,
          previousItem: null,
          nextItem: null
        }, MR(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: rR,
          previousItem: null,
          nextItem: null
        }, MR(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, uu, Ru, yu), this
      }
      removeDragGradient(uu) {
        return this._removeFactorGradient(this._dragGradients, uu), 0 === this._dragGradients?.length && (GR(this._dragCreation), GR(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(uu, Ru, yu) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, uu, Ru, yu), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(uu) {
        return this._removeFactorGradient(this._startSizeGradients, uu), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const uu = new Uint8Array(4 * this._rawTextureWidth),
          Ru = Vu.m.Color3[0];
        for (let yu = 0; yu < this._rawTextureWidth; yu++) {
          const Ku = yu / this._rawTextureWidth;
          Eu.i.GetCurrentGradient(Ku, this._rampGradients, ((Eu, Ku, Qu) => {
            Vu.d.LerpToRef(Eu.color, Ku.color, Qu, Ru), uu[4 * yu] = 255 * Ru.r, uu[4 * yu + 1] = 255 * Ru.g, uu[4 * yu + 2] = 255 * Ru.b, uu[4 * yu + 3] = 255
          }))
        }
        this._rampGradientsTexture = Ju.d.CreateRGBATexture(uu, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((uu, Ru) => uu.gradient < Ru.gradient ? -1 : uu.gradient > Ru.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(uu, Ru) {
        this._rampGradients || (this._rampGradients = []);
        const yu = new Eu.f(uu, Ru);
        return this._rampGradients.push(yu), this._syncRampGradientTexture(), this
      }
      removeRampGradient(uu) {
        return this._removeGradientAndTexture(uu, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(uu, Ru, yu) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = ou, this._colorProcessing.process = qu);
        const Ku = new Eu.c(uu, Ru, yu);
        return this._colorGradients.push(Ku), this._colorGradients.sort(((uu, Ru) => uu.gradient < Ru.gradient ? -1 : uu.gradient > Ru.gradient ? 1 : 0)), this
      }
      removeColorGradient(uu) {
        if (!this._colorGradients) return this;
        let Ru = 0;
        for (const yu of this._colorGradients) {
          if (yu.gradient === uu) {
            this._colorGradients.splice(Ru, 1);
            break
          }
          Ru++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = iu, this._colorProcessing.process = Ou), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const uu of this._drawWrappers)
            if (uu)
              for (const Ru of uu) Ru?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(uu, Ru, yu, Eu, Ku) {
        return Ku[4 * (((uu = .5 * Math.abs(uu) + .5) * yu % yu | 0) + ((Ru = .5 * Math.abs(Ru) + .5) * Eu % Eu | 0) * yu)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const uu = this._engine,
          Ru = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Ru), this._vertexBuffer = new mu.c(uu, this._vertexData, !0, Ru);
        let yu = 0;
        const Eu = this._vertexBuffer.createVertexBuffer(mu.h.PositionKind, yu, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[mu.h.PositionKind] = Eu, yu += 3;
        const Ku = this._vertexBuffer.createVertexBuffer(mu.h.ColorKind, yu, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[mu.h.ColorKind] = Ku, yu += 4;
        const Qu = this._vertexBuffer.createVertexBuffer("angle", yu, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Qu, yu += 1;
        const Ju = this._vertexBuffer.createVertexBuffer("size", yu, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Ju, yu += 2, this._isAnimationSheetEnabled) {
          const uu = this._vertexBuffer.createVertexBuffer("cellIndex", yu, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = uu, yu += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const uu = this._vertexBuffer.createVertexBuffer("direction", yu, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = uu, yu += 3
        }
        if (this._useRampGradients) {
          const uu = this._vertexBuffer.createVertexBuffer("remapData", yu, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = uu, yu += 4
        }
        let Nu;
        if (this._useInstancing) {
          const Ru = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new mu.c(uu, Ru, !1, 2), Nu = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Nu = this._vertexBuffer.createVertexBuffer("offset", yu, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Nu, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const uu = [],
          Ru = [];
        let yu = 0;
        for (let Eu = 0; Eu < this._capacity; Eu++) uu.push(yu), uu.push(yu + 1), uu.push(yu + 2), uu.push(yu), uu.push(yu + 2), uu.push(yu + 3), Ru.push(yu, yu + 1, yu + 1, yu + 2, yu + 2, yu + 3, yu + 3, yu, yu, yu + 3), yu += 4;
        this._indexBuffer = this._engine.createIndexBuffer(uu), this._linesIndexBuffer = this._engine.createIndexBuffer(Ru)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (uu) return this.startDelay = uu, void setTimeout((() => {
          this.start(0)
        }), uu);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const uu = this.noiseTexture;
          if (uu && uu.onGeneratedObservable) uu.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let Ru = 0; Ru < this.preWarmCycles; Ru++) this.animate(!0), uu.render()
            }))
          }));
          else
            for (let Ru = 0; Ru < this.preWarmCycles; Ru++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(uu))
      }
      _postStop(uu) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(uu, Ru, yu, Eu) {
        let Ku = uu * this._vertexBufferSize;
        const mu = Qu.m.MS[0].Oyu(this._scene?.floatingOriginOffset || Qu.p.ZeroReadOnly);
        if (this._vertexData[Ku++] = Ru.position.x + this.worldOffset.x - mu.x, this._vertexData[Ku++] = Ru.position.y + this.worldOffset.y - mu.y, this._vertexData[Ku++] = Ru.position.z + this.worldOffset.z - mu.z, this._vertexData[Ku++] = Ru.color.r, this._vertexData[Ku++] = Ru.color.g, this._vertexData[Ku++] = Ru.color.b, this._vertexData[Ku++] = Ru.color.a, this._vertexData[Ku++] = Ru.angle, this._vertexData[Ku++] = Ru.scale.x * Ru.size, this._vertexData[Ku++] = Ru.scale.y * Ru.size, this._isAnimationSheetEnabled && (this._vertexData[Ku++] = Ru.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Ku++] = Ru.direction.x, this._vertexData[Ku++] = Ru.direction.y, this._vertexData[Ku++] = Ru.direction.z);
        else if (Ru._properties.initialDirection) {
          let uu = Ru._properties.initialDirection;
          this.isLocal && (Qu.p.TransformNormalToRef(uu, this._emitterWorldMatrix, Qu.m.MS[0]), uu = Qu.m.MS[0]), 0 === uu.x && 0 === uu.z && (uu.x = .001), this._vertexData[Ku++] = uu.x, this._vertexData[Ku++] = uu.y, this._vertexData[Ku++] = uu.z
        } else {
          let uu = Ru.direction;
          this.isLocal && (Qu.p.TransformNormalToRef(uu, this._emitterWorldMatrix, Qu.m.MS[0]), uu = Qu.m.MS[0]), 0 === uu.x && 0 === uu.z && (uu.x = .001), this._vertexData[Ku++] = uu.x, this._vertexData[Ku++] = uu.y, this._vertexData[Ku++] = uu.z
        }
        this._useRampGradients && Ru.remapData && (this._vertexData[Ku++] = Ru.remapData.x, this._vertexData[Ku++] = Ru.remapData.y, this._vertexData[Ku++] = Ru.remapData.z, this._vertexData[Ku++] = Ru.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === yu ? yu = this._epsilon : 1 === yu && (yu = 1 - this._epsilon), 0 === Eu ? Eu = this._epsilon : 1 === Eu && (Eu = 1 - this._epsilon)), this._vertexData[Ku++] = yu, this._vertexData[Ku] = Eu)
      }
      _prepareParticle(uu) {}
      _createNewOnes(uu) {
        let Ru;
        for (let yu = 0; yu < uu && this._particles.length !== this._capacity; yu++) {
          Ru = this._createParticle(), this._particles.push(Ru);
          let uu = this._createQueueStart;
          for (; uu;) uu.process(Ru, this), uu = uu.nextItem;
          Ru._inheritParticleInfoToSubEmitters()
        }
      }
      _update(uu) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const uu = this.emitter;
          this._emitterWorldMatrix = uu.getWorldMatrix()
        } else {
          const uu = this.emitter;
          this._emitterWorldMatrix = Qu.d.Translation(uu.x, uu.y, uu.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(uu)
      }
      static _GetAttributeNamesOrOptions() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = [mu.h.PositionKind, mu.h.ColorKind, "angle", "offset", "size"];
        return uu && Eu.push("cellIndex"), Ru || Eu.push("direction"), yu && Eu.push("remapData"), Eu
      }
      static _GetEffectCreationOptions() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Zu.c)(Eu), uu && Eu.push("particlesInfos"), Ru && Eu.push("logarithmicDepthConstant"), yu && (Eu.push("vFogInfos"), Eu.push("vFogColor")), Eu
      }
      fillDefines(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Zu.k)(this, this._scene, uu), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && uu.push("#define FOG")), this._isAnimationSheetEnabled && uu.push("#define ANIMATESHEET"), this.useLogarithmicDepth && uu.push("#define LOGARITHMICDEPTH"), Ru === Cu.BLENDMODE_MULTIPLY && uu.push("#define BLENDMULTIPLYMODE"), this.isLocal && uu.push("#define LOCAL"), this._useRampGradients && uu.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (uu.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            uu.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            uu.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && uu.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            uu.push("#define BILLBOARDMODE_ALL")
        }
        yu && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), uu.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(uu, Ru, yu) {
        Ru.push(...nR._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), uu.push(...nR._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), yu.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, Pu.f)(uu, this._imageProcessingConfigurationDefines), (0, Pu.e)(yu, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(uu) {
        var Ru;
        const yu = this._getCustomDrawWrapper(uu);
        if (yu?.effect) return yu;
        const Eu = [];
        this.fillDefines(Eu, uu);
        const Qu = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          mu = UR.b._PrepareStringDefines(Qu, Eu),
          Ju = mu ? UR.b.GetConfiguration(Qu) : void 0;
        let Nu = this._drawWrappers[Qu];
        Nu || (Nu = this._drawWrappers[Qu] = [], 0 === Qu || this._renderPassObserver || (this._renderPassObserver = ((Ru = this._engine)._onReleaseRenderPassObservable ?? (Ru._onReleaseRenderPassObservable = new Ku.b)).add((uu => {
          const Ru = this._drawWrappers[uu];
          if (Ru) {
            for (const uu of Ru) uu?.dispose();
            delete this._drawWrappers[uu]
          }
        }))));
        let Xu = Nu[uu];
        Xu || (Xu = new wu.b(this._engine), Xu.drawContext && (Xu.drawContext.useInstancing = this._useInstancing), Nu[uu] = Xu);
        const Vu = Eu.join("\n");
        if (Xu.defines !== Vu) {
          const uu = [],
            Ru = [],
            yu = [];
          this.fillUniformsAttributesAndSamplerNames(Ru, uu, yu), mu && (Ru.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Ju?.defines.PREPASS_LOCAL_POSITION_INDEX && Ru.push("inverseEmitterWM", "geometryWorldOffset")), Xu.setEffect(this._engine.createEffect("particles", {
            attributes: uu,
            uniformsNames: Ru,
            samplers: yu,
            defines: Vu,
            shaderLanguage: this._shaderLanguage,
            multiTarget: mu,
            indexParameters: mu ? {
              buffersCount: Ju?._mrtCount ?? 0
            } : void 0
          }, this._engine), Vu)
        }
        return Xu
      }
      _bindGeometryRendering(uu) {
        const Ru = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          yu = UR.b.GetConfiguration(Ru);
        if (!yu?._defines) return;
        uu.setFloat("objectId", 0), uu.setInt("meshBlendTag", 0);
        const Eu = this._scene?.activeCamera;
        if (uu.setFloat2("cameraInfo", Eu?.minZ ?? 0, Eu?.maxZ ?? 1), this.isLocal && void 0 !== yu.defines.PREPASS_LOCAL_POSITION_INDEX) {
          uu.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Ru = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Qu.p.ZeroReadOnly, Qu.m.MS[0]);
          uu.setVector3("geometryWorldOffset", Ru)
        }
      }
      animate() {
        let uu, Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Ru && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Ru ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) uu = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Ru = this._calculateEmitRate();
            uu = Ru * this._scaledUpdateSpeed | 0, this._newPartsExcess += Ru * this._scaledUpdateSpeed - uu
          }
          if (this._newPartsExcess > 1 && (uu += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? uu = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(uu), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Ru) {
            let uu = 0;
            for (let Ru = 0; Ru < this._particles.length; Ru++) {
              const yu = this._particles[Ru];
              this._appendParticleVertices(uu, yu), uu += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const uu = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Ru = this._particles.length;
                Ru < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Ru * uu, this._fixedCapacityHighWaterMark * uu), this._fixedCapacityHighWaterMark = Ru, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const uu = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * uu), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let uu = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const Ru = this._actualFrame / this.targetStopDuration;
          Eu.i.GetCurrentGradient(Ru, this._emitRateGradients, ((Ru, yu, Eu) => {
            Ru !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = yu.getFactor(), this._currentEmitRateGradient = Ru), uu = (0, xu.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Eu)
          }))
        }
        return uu
      }
      _appendParticleVertices(uu, Ru) {
        this._appendParticleVertex(uu++, Ru, 0, 0), this._useInstancing || (this._appendParticleVertex(uu++, Ru, 1, 0), this._appendParticleVertex(uu++, Ru, 1, 1), this._appendParticleVertex(uu, Ru, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !nR.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([yu.e(336).then((() => yu(61044))), yu.e(330).then((() => yu(61053)))])) : await Promise.all([yu.e(319).then((() => yu(61058))), Promise.all([yu.e(312), yu.e(348)]).then((() => yu(61060)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== Cu.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(Cu.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(Cu.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(uu) {
        const Ru = this._getWrapper(uu),
          yu = Ru.effect,
          Eu = this._engine;
        Eu.enableEffect(Ru);
        const Ku = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        yu.setTexture("diffuseSampler", this.particleTexture), yu.setMatrix("view", Ku);
        const mu = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (yu.setMatrix("projection", mu), this._isAnimationSheetEnabled && this.particleTexture) {
          const uu = this.particleTexture.getBaseSize();
          yu.setFloat3("particlesInfos", this.spriteCellWidth / uu.width, this.spriteCellHeight / uu.height, this.spriteCellWidth / uu.width)
        }
        if (yu.setVector2("translationPivot", this.translationPivot), yu.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const uu = this._scene.activeCamera;
          yu.setVector3("eyePosition", uu.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), yu.setTexture("rampSampler", this._rampGradientsTexture));
        const Ju = yu.defines;
        this._scene && ((0, Zu.f)(yu, this, this._scene), this.applyFog && (0, hu.g)(this._scene, void 0, yu)), Ju.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Ku.invertToRef(Qu.m.Matrix[0]), yu.setMatrix("invView", Qu.m.Matrix[0])), yu._multiTarget && this._bindGeometryRendering(yu), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Eu.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, yu) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, yu)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Eu.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, yu) : Eu.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, yu), this.useLogarithmicDepth && this._scene && (0, hu.u)(Ju, yu, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(yu), this._setEngineBasedOnBlendMode(uu), yu._multiTarget && UR.b._BindZeroAlphaDiscard(Eu, yu);
        let Nu = !1;
        try {
          UR.b._BindAttachmentsForEffect(Eu, yu) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(yu), this._useInstancing ? this._scene?.forceWireframe ? Eu.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Eu.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Eu.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Eu.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Nu = !0)
        } finally {
          UR.b._RestoreAttachments(Eu)
        }
        return Nu ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const uu = this._engine;
        let Ru;
        return uu.setState && (uu.setState(!1), this.forceDepthWrite && uu.setDepthWrite(!0)), Ru = this.blendMode === Cu.BLENDMODE_MULTIPLYADD ? this._render(Cu.BLENDMODE_MULTIPLY) + this._render(Cu.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Ru
      }
      _onDispose() {}
      dispose() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), uu && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), uu && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Ru, yu), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const uu = this._scene.JC.indexOf(this);
          uu > -1 && this._scene.JC.splice(uu, 1), this._scene._activeParticleSystems.dispose()
        }
        this.zD.notifyObservers(this), this.zD.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    nR.ForceGLSL = !1;
    var sR, tR = yu(36871);
    ! function(uu) {
      uu[uu.ATTACHED = 0] = "ATTACHED", uu[uu.END = 1] = "END"
    }(sR || (sR = {}));
    class lR {
      constructor(uu) {
        if (this.particleSystem = uu, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !uu.emitter || !uu.emitter.dispose) {
          const Ru = (0, tR.b)("BABYLON.AbstractMesh");
          uu.emitter = new Ru("SubemitterSystemEmitter", uu.lD()), uu._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let uu = this.particleSystem.emitter;
        if (uu) {
          if (uu instanceof Qu.p) uu = uu.clone();
          else if (-1 !== uu.getClassName().indexOf("Mesh")) {
            uu = new((0, tR.b)("BABYLON.Mesh"))("", uu.lD()), uu.isVisible = !1
          }
        } else uu = new Qu.p;
        const Ru = new lR(this.particleSystem.clone(this.particleSystem.name, uu));
        return Ru.particleSystem.name += "Clone", Ru.type = this.type, Ru.inheritDirection = this.inheritDirection, Ru.inheritedVelocityAmount = this.inheritedVelocityAmount, Ru.particleSystem._disposeEmitterOnDispose = !0, Ru.particleSystem.disposeOnStop = !0, Ru
      }
      serialize() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = {};
        return Ru.type = this.type, Ru.inheritDirection = this.inheritDirection, Ru.inheritedVelocityAmount = this.inheritedVelocityAmount, Ru.particleSystem = this.particleSystem.serialize(uu), Ru
      }
      static _ParseParticleSystem(uu, Ru, yu) {
        throw (0, gu.k)("ParseParticle")
      }
      static Parse(uu, Ru, yu) {
        const Eu = uu.particleSystem,
          Ku = new lR(lR._ParseParticleSystem(Eu, Ru, yu, !0));
        return Ku.type = uu.type, Ku.inheritDirection = uu.inheritDirection, Ku.inheritedVelocityAmount = uu.inheritedVelocityAmount, Ku.particleSystem._isSubEmitter = !0, Ku
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var gR = yu(39455),
      cR = yu(39582);
    const LR = () => {};
    class zR {
      constructor() {
        this.particlePositionGenerator = LR, this.particleDestinationGenerator = LR, this.particleDirectionGenerator = LR
      }
      startDirectionFunction(uu, Ru, yu, Eu) {
        const Ku = Qu.m.MS[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== LR) this.particleDirectionGenerator(-1, yu, Ku);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== LR) {
          this.particleDestinationGenerator(-1, yu, Ku);
          const uu = Qu.m.MS[1];
          Ku.subtractToRef(yu.position, uu), uu.scaleToRef(1 / yu.lifeTime, Ku)
        } else Ku.set(0, 0, 0);
        Eu ? Ru.Oyu(Ku) : Qu.p.TransformNormalToRef(Ku, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Eu) {
        const Ku = Qu.m.MS[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== LR ? this.particlePositionGenerator(-1, yu, Ku) : Ku.set(0, 0, 0), Eu ? Ru.Oyu(Ku) : Qu.p.TransformCoordinatesToRef(Ku, uu, Ru)
      }
      clone() {
        const uu = new zR;
        return Bu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {}
      buildUniformLayout(uu) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.particlePositionGenerator = this.particlePositionGenerator, uu.particleDestinationGenerator = this.particleDestinationGenerator, uu
      }
      parse(uu) {
        uu.particlePositionGenerator && (this.particlePositionGenerator = uu.particlePositionGenerator), uu.particleDestinationGenerator && (this.particleDestinationGenerator = uu.particleDestinationGenerator)
      }
    }
    const FR = Qu.p.Zero(),
      wR = Qu.p.Zero(),
      ZR = Qu.p.Zero();
    class hR {
      constructor() {
        this.strength = 0, this.position = Qu.p.Zero()
      }
      _processParticle(uu, Ru) {
        this.position.subtractToRef(uu.position, FR);
        const yu = FR.lengthSquared() + 1;
        FR.normalize().scaleToRef(this.strength / yu, wR), wR.scaleToRef(Ru._tempScaledUpdateSpeed, ZR), uu.direction.addInPlace(ZR)
      }
      serialize() {
        return {
          position: this.position.AEu(),
          strength: this.strength
        }
      }
    }
    const PR = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class iR extends nR {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = uu => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Ru = Math.floor(Math.random() * this._subEmitters.length);
          for (const yu of this._subEmitters[Ru])
            if (1 === yu.type) {
              const Ru = yu.clone();
              uu._inheritParticleInfoToSubEmitter(Ru), Ru.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Ru.particleSystem), Ru.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(uu) {
        this._flowMap !== uu && (this._flowMap = uu, this._flowMapUpdate && (GR(this._flowMapUpdate), this._flowMapUpdate = null), uu && (this._flowMapUpdate = {
          process: uu => {
            const Ru = this.lD()?.getTransformMatrix();
            this._flowMap._processParticle(uu, this.flowMapStrength * this._tempScaledUpdateSpeed, Ru)
          },
          previousItem: null,
          nextItem: null
        }, IR(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(uu) {
        super.addAttractor(uu), 1 === this._attractors.length && (this._attractorUpdate = {
          process: uu => {
            for (const Ru of this._attractors) Ru._processParticle(uu, this)
          },
          previousItem: null,
          nextItem: null
        }, IR(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(uu) {
        super.removeAttractor(uu), 0 === this._attractors.length && this._attractorUpdate && GR(this._attractorUpdate)
      }
      start() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(uu)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const uu of this.subEmitters) uu instanceof iR ? this._subEmitters.push([new lR(uu)]) : uu instanceof lR ? this._subEmitters.push([uu]) : uu instanceof Array && this._subEmitters.push(uu)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const uu of this.activeSubSystems) uu.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const uu = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== uu && this._rootParticleSystem.activeSubSystems.splice(uu, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(uu) {
        uu && this._stopSubEmitters()
      }
      _prepareParticle(uu) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const Ru = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          uu._properties.attachedSubEmitters = [];
          for (const yu of Ru)
            if (0 === yu.type) {
              const Ru = yu.clone();
              uu._properties.attachedSubEmitters.push(Ru), Ru.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), uu && this.particles)
          for (const yu of this.particles)
            if (yu._properties.attachedSubEmitters)
              for (let uu = yu._properties.attachedSubEmitters.length - 1; uu >= 0; uu -= 1) yu._properties.attachedSubEmitters[uu].dispose();
        if (Ru && this.activeSubSystems)
          for (let yu = this.activeSubSystems.length - 1; yu >= 0; yu -= 1) this.activeSubSystems[yu].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let uu = 0; uu < this._subEmitters.length; uu++)
            for (const Ru of this._subEmitters[uu]) Ru.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(uu, Ru, yu, Eu) {
        let Ku;
        Ku = yu instanceof gR.d ? null : yu;
        const mu = (0, tR.b)("BABYLON.Texture");
        if (mu && Ku)
          if (uu.texture) Ru.particleTexture = mu.Parse(uu.texture, Ku, Eu);
          else if (uu.textureName) {
          const yu = uu.textureSettings;
          if (Ru.particleTexture = new mu(Eu + uu.textureName, Ku, !1, void 0 === uu.invertY || uu.invertY, yu ? yu.samplingMode : void 0), Ru.particleTexture.name = uu.textureName, yu) {
            const uu = Ru.particleTexture;
            for (const Ru of PR) void 0 !== yu[Ru] && (uu[Ru] = yu[Ru])
          }
        }
        if (uu.emitterId || 0 === uu.emitterId || void 0 !== uu.emitter ? (uu.emitterId || 0 === uu.emitterId) && Ku ? (Ru.emitter = Ku.getLastMeshById(uu.emitterId), Ru.emitter || (Ru.emitter = Qu.p.Zero())) : Ru.emitter = Qu.p.FromArray(uu.emitter) : Ru.emitter = Qu.p.Zero(), Ru.isLocal = !!uu.isLocal, void 0 !== uu.renderingGroupId && (Ru.renderingGroupId = uu.renderingGroupId), void 0 !== uu.isBillboardBased && (Ru.isBillboardBased = uu.isBillboardBased), void 0 !== uu.billboardMode && (Ru.billboardMode = uu.billboardMode), void 0 !== uu.useLogarithmicDepth && (Ru.useLogarithmicDepth = uu.useLogarithmicDepth), uu.animations) {
          for (let yu = 0; yu < uu.animations.length; yu++) {
            const Eu = uu.animations[yu],
              Ku = (0, tR.b)("BABYLON.Animation");
            Ku && Ru.animations.push(Ku.Parse(Eu))
          }
          Ru.beginAnimationOnStart = uu.beginAnimationOnStart, Ru.beginAnimationFrom = uu.beginAnimationFrom, Ru.beginAnimationTo = uu.beginAnimationTo, Ru.beginAnimationLoop = uu.beginAnimationLoop
        }
        if (uu.autoAnimate && Ku && Ku.beginAnimation(Ru, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), Ru.startDelay = 0 | uu.startDelay, Ru.minAngularSpeed = uu.minAngularSpeed, Ru.maxAngularSpeed = uu.maxAngularSpeed, Ru.minSize = uu.minSize, Ru.maxSize = uu.maxSize, uu.minScaleX && (Ru.minScaleX = uu.minScaleX, Ru.maxScaleX = uu.maxScaleX, Ru.minScaleY = uu.minScaleY, Ru.maxScaleY = uu.maxScaleY), void 0 !== uu.preWarmCycles && (Ru.preWarmCycles = uu.preWarmCycles, Ru.preWarmStepOffset = uu.preWarmStepOffset), void 0 !== uu.minInitialRotation && (Ru.minInitialRotation = uu.minInitialRotation, Ru.maxInitialRotation = uu.maxInitialRotation), Ru.minLifeTime = uu.minLifeTime, Ru.maxLifeTime = uu.maxLifeTime, Ru.minEmitPower = uu.minEmitPower, Ru.maxEmitPower = uu.maxEmitPower, Ru.emitRate = uu.emitRate, Ru.gravity = Qu.p.FromArray(uu.gravity), uu.noiseStrength && (Ru.noiseStrength = Qu.p.FromArray(uu.noiseStrength)), Ru.color1 = Vu.h.FromArray(uu.color1), Ru.color2 = Vu.h.FromArray(uu.color2), Ru.colorDead = Vu.h.FromArray(uu.colorDead), Ru.updateSpeed = uu.updateSpeed, Ru.targetStopDuration = uu.targetStopDuration, Ru.blendMode = uu.blendMode, uu.colorGradients)
          for (const Qu of uu.colorGradients) Ru.addColorGradient(Qu.gradient, Vu.h.FromArray(Qu.color1), Qu.color2 ? Vu.h.FromArray(Qu.color2) : void 0);
        if (uu.rampGradients) {
          for (const yu of uu.rampGradients) Ru.addRampGradient(yu.gradient, Vu.d.FromArray(yu.color));
          Ru.useRampGradients = uu.useRampGradients
        }
        if (uu.colorRemapGradients)
          for (const Qu of uu.colorRemapGradients) Ru.addColorRemapGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.alphaRemapGradients)
          for (const Qu of uu.alphaRemapGradients) Ru.addAlphaRemapGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.sizeGradients)
          for (const Qu of uu.sizeGradients) Ru.addSizeGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.angularSpeedGradients)
          for (const Qu of uu.angularSpeedGradients) Ru.addAngularSpeedGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.velocityGradients)
          for (const Qu of uu.velocityGradients) Ru.addVelocityGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.dragGradients)
          for (const Qu of uu.dragGradients) Ru.addDragGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.emitRateGradients)
          for (const Qu of uu.emitRateGradients) Ru.addEmitRateGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.startSizeGradients)
          for (const Qu of uu.startSizeGradients) Ru.addStartSizeGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.lifeTimeGradients)
          for (const Qu of uu.lifeTimeGradients) Ru.addLifeTimeGradient(Qu.gradient, void 0 !== Qu.factor1 ? Qu.factor1 : Qu.factor, Qu.factor2);
        if (uu.limitVelocityGradients) {
          for (const yu of uu.limitVelocityGradients) Ru.addLimitVelocityGradient(yu.gradient, void 0 !== yu.factor1 ? yu.factor1 : yu.factor, yu.factor2);
          Ru.limitVelocityDamping = uu.limitVelocityDamping
        }
        if (uu.noiseTexture && Ku) {
          const yu = (0, tR.b)("BABYLON.ProceduralTexture");
          Ru.noiseTexture = yu.Parse(uu.noiseTexture, Ku, Eu)
        }
        let Ju;
        if (uu.particleEmitterType) {
          switch (uu.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Ju = new Tu;
              break;
            case "SphereDirectedParticleEmitter":
              Ju = new Wu;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Ju = new Hu;
              break;
            case "ConeDirectedParticleEmitter":
              Ju = new du;
              break;
            case "CylinderParticleEmitter":
              Ju = new ju.h;
              break;
            case "CylinderDirectedParticleEmitter":
              Ju = new ju.d;
              break;
            case "HemisphericParticleEmitter":
              Ju = new pu;
              break;
            case "PointParticleEmitter":
              Ju = new Su;
              break;
            case "MeshParticleEmitter":
              Ju = new bu;
              break;
            case "CustomParticleEmitter":
              Ju = new zR;
              break;
            default:
              Ju = new ru.b
          }
          Ju.parse(uu.particleEmitterType, Ku)
        } else Ju = new ru.b, Ju.parse(uu, Ku);
        Ru.particleEmitterType = Ju, Ru.startSpriteCellID = uu.startSpriteCellID, Ru.endSpriteCellID = uu.endSpriteCellID, Ru.spriteCellLoop = uu.spriteCellLoop ?? !0, Ru.spriteCellWidth = uu.spriteCellWidth, Ru.spriteCellHeight = uu.spriteCellHeight, Ru.spriteCellChangeSpeed = uu.spriteCellChangeSpeed, Ru.spriteRandomStartCell = uu.spriteRandomStartCell, Ru.disposeOnStop = uu.disposeOnStop ?? !1, Ru.manualEmitCount = uu.manualEmitCount ?? -1
      }
      static Parse(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ku = arguments.length > 4 ? arguments[4] : void 0;
        const mu = uu.name;
        let Ju, Nu, Xu = null,
          ru = null;
        if (Ru instanceof gR.d ? Ju = Ru : (Nu = Ru, Ju = Nu.eS()), uu.customShader && (0, gu.c)(Ju.createEffectForParticles)) {
          ru = uu.customShader;
          const Ru = ru.shaderOptions.defines.length > 0 ? ru.shaderOptions.defines.join("\n") : "";
          Xu = Ju.createEffectForParticles(ru.shaderPath.fragmentElement, ru.shaderOptions.uniforms, ru.shaderOptions.samplers, Ru)
        }
        const Bu = new iR(mu, Ku || uu.Nr, Ru, Xu, uu.isAnimationSheetEnabled);
        if (Bu.customShader = ru, Bu._rootUrl = yu, uu.id && (Bu.id = uu.id), uu.subEmitters) {
          Bu.subEmitters = [];
          for (const Eu of uu.subEmitters) {
            const uu = [];
            for (const Ku of Eu) uu.push(lR.Parse(Ku, Ru, yu));
            Bu.subEmitters.push(uu)
          }
        }
        if (uu.attractors)
          for (const Vu of uu.attractors) {
            const uu = new hR;
            uu.position = Qu.p.FromArray(Vu.position), uu.strength = Vu.strength, Bu.addAttractor(uu)
          }
        return iR._Parse(uu, Bu, Ru, yu), uu.textureMask && (Bu.textureMask = Vu.h.FromArray(uu.textureMask)), uu.worldOffset && (Bu.worldOffset = Qu.p.FromArray(uu.worldOffset)), uu.preventAutoStart && (Bu.preventAutoStart = uu.preventAutoStart), uu.metadata && (Bu.metadata = uu.metadata), Eu || Bu.preventAutoStart || Bu.start(), Bu
      }
      serialize() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = {};
        if (iR._Serialize(Ru, this, uu), Ru.textureMask = this.textureMask.AEu(), Ru.customShader = this.customShader, Ru.preventAutoStart = this.preventAutoStart, Ru.worldOffset = this.worldOffset.AEu(), this.metadata && (Ru.metadata = this.metadata), this.subEmitters) {
          Ru.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const yu of this._subEmitters) {
            const Eu = [];
            for (const Ru of yu) Ru.particleSystem.doNotSerialize || Eu.push(Ru.serialize(uu));
            Ru.subEmitters.push(Eu)
          }
        }
        if (this._attractors && this._attractors.length) {
          Ru.attractors = [];
          for (const uu of this._attractors) Ru.attractors.push(uu.serialize())
        }
        return Ru
      }
      static _Serialize(uu, Ru, yu) {
        if (uu.name = Ru.name, uu.id = Ru.id, uu.Nr = Ru.getCapacity(), uu.disposeOnStop = Ru.disposeOnStop, uu.manualEmitCount = Ru.manualEmitCount, Ru.emitter.position) {
          const yu = Ru.emitter;
          uu.emitterId = yu.id
        } else {
          const yu = Ru.emitter;
          uu.emitter = yu.AEu()
        }
        if (Ru.particleEmitterType && (uu.particleEmitterType = Ru.particleEmitterType.serialize()), Ru.particleTexture)
          if (yu) uu.texture = Ru.particleTexture.serialize();
          else {
            const yu = Ru.particleTexture;
            uu.textureName = Ru.particleTexture.name, uu.invertY = !!yu._invertY;
            const Eu = {};
            for (const uu of PR) Eu[uu] = yu[uu];
            Eu.samplingMode = yu.samplingMode, uu.textureSettings = Eu
          } uu.isLocal = Ru.isLocal, cR.c.AppendSerializedAnimations(Ru, uu), uu.beginAnimationOnStart = Ru.beginAnimationOnStart, uu.beginAnimationFrom = Ru.beginAnimationFrom, uu.beginAnimationTo = Ru.beginAnimationTo, uu.beginAnimationLoop = Ru.beginAnimationLoop, uu.startDelay = Ru.startDelay, uu.renderingGroupId = Ru.renderingGroupId, uu.isBillboardBased = Ru.isBillboardBased, uu.billboardMode = Ru.billboardMode, uu.minAngularSpeed = Ru.minAngularSpeed, uu.maxAngularSpeed = Ru.maxAngularSpeed, uu.minSize = Ru.minSize, uu.maxSize = Ru.maxSize, uu.minScaleX = Ru.minScaleX, uu.maxScaleX = Ru.maxScaleX, uu.minScaleY = Ru.minScaleY, uu.maxScaleY = Ru.maxScaleY, uu.minEmitPower = Ru.minEmitPower, uu.maxEmitPower = Ru.maxEmitPower, uu.minLifeTime = Ru.minLifeTime, uu.maxLifeTime = Ru.maxLifeTime, uu.emitRate = Ru.emitRate, uu.gravity = Ru.gravity.AEu(), uu.noiseStrength = Ru.noiseStrength.AEu(), uu.color1 = Ru.color1.AEu(), uu.color2 = Ru.color2.AEu(), uu.colorDead = Ru.colorDead.AEu(), uu.updateSpeed = Ru.updateSpeed, uu.targetStopDuration = Ru.targetStopDuration, uu.blendMode = Ru.blendMode, uu.preWarmCycles = Ru.preWarmCycles, uu.preWarmStepOffset = Ru.preWarmStepOffset, uu.minInitialRotation = Ru.minInitialRotation, uu.maxInitialRotation = Ru.maxInitialRotation, uu.startSpriteCellID = Ru.startSpriteCellID, uu.spriteCellLoop = Ru.spriteCellLoop, uu.endSpriteCellID = Ru.endSpriteCellID, uu.spriteCellChangeSpeed = Ru.spriteCellChangeSpeed, uu.spriteCellWidth = Ru.spriteCellWidth, uu.spriteCellHeight = Ru.spriteCellHeight, uu.spriteRandomStartCell = Ru.spriteRandomStartCell, uu.isAnimationSheetEnabled = Ru.isAnimationSheetEnabled, uu.useLogarithmicDepth = Ru.useLogarithmicDepth;
        const Eu = Ru.getColorGradients();
        if (Eu) {
          uu.colorGradients = [];
          for (const Ru of Eu) {
            const yu = {
              gradient: Ru.gradient,
              color1: Ru.color1.AEu()
            };
            Ru.color2 ? yu.color2 = Ru.color2.AEu() : yu.color2 = Ru.color1.AEu(), uu.colorGradients.push(yu)
          }
        }
        const Ku = Ru.getRampGradients();
        if (Ku) {
          uu.rampGradients = [];
          for (const Ru of Ku) {
            const yu = {
              gradient: Ru.gradient,
              color: Ru.color.AEu()
            };
            uu.rampGradients.push(yu)
          }
          uu.useRampGradients = Ru.useRampGradients
        }
        const Qu = Ru.getColorRemapGradients();
        if (Qu) {
          uu.colorRemapGradients = [];
          for (const Ru of Qu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.colorRemapGradients.push(yu)
          }
        }
        const mu = Ru.getAlphaRemapGradients();
        if (mu) {
          uu.alphaRemapGradients = [];
          for (const Ru of mu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.alphaRemapGradients.push(yu)
          }
        }
        const Ju = Ru.getSizeGradients();
        if (Ju) {
          uu.sizeGradients = [];
          for (const Ru of Ju) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.sizeGradients.push(yu)
          }
        }
        const Nu = Ru.getAngularSpeedGradients();
        if (Nu) {
          uu.angularSpeedGradients = [];
          for (const Ru of Nu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.angularSpeedGradients.push(yu)
          }
        }
        const Xu = Ru.getVelocityGradients();
        if (Xu) {
          uu.velocityGradients = [];
          for (const Ru of Xu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.velocityGradients.push(yu)
          }
        }
        const Vu = Ru.getDragGradients();
        if (Vu) {
          uu.dragGradients = [];
          for (const Ru of Vu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.dragGradients.push(yu)
          }
        }
        const ru = Ru.getEmitRateGradients();
        if (ru) {
          uu.emitRateGradients = [];
          for (const Ru of ru) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.emitRateGradients.push(yu)
          }
        }
        const Bu = Ru.getStartSizeGradients();
        if (Bu) {
          uu.startSizeGradients = [];
          for (const Ru of Bu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.startSizeGradients.push(yu)
          }
        }
        const xu = Ru.getLifeTimeGradients();
        if (xu) {
          uu.lifeTimeGradients = [];
          for (const Ru of xu) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.lifeTimeGradients.push(yu)
          }
        }
        const Su = Ru.getLimitVelocityGradients();
        if (Su) {
          uu.limitVelocityGradients = [];
          for (const Ru of Su) {
            const yu = {
              gradient: Ru.gradient,
              factor1: Ru.factor1
            };
            void 0 !== Ru.factor2 ? yu.factor2 = Ru.factor2 : yu.factor2 = Ru.factor1, uu.limitVelocityGradients.push(yu)
          }
          uu.limitVelocityDamping = Ru.limitVelocityDamping
        }
        Ru.noiseTexture && (uu.noiseTexture = Ru.noiseTexture.serialize())
      }
      clone(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = {
          ...this._customWrappers
        };
        let Ku = null;
        const Qu = this._engine;
        if ((0, gu.c)(Qu.createEffectForParticles) && null != this.customShader) {
          Ku = this.customShader;
          const uu = Ku.shaderOptions.defines.length > 0 ? Ku.shaderOptions.defines.join("\n") : "",
            Ru = Qu.createEffectForParticles(Ku.shaderPath.fragmentElement, Ku.shaderOptions.uniforms, Ku.shaderOptions.samplers, uu);
          Eu[0] ? Eu[0].effect = Ru : this.setCustomEffect(Ru, 0)
        }
        const mu = this.serialize(yu),
          Ju = !1 === yu && this.particleTexture ? this.particleTexture.clone() : null;
        Ju && (mu.textureName = void 0);
        const Nu = iR.Parse(mu, this._scene || this._engine, this._rootUrl);
        return Nu.name = uu, Nu.customShader = Ku, Nu._customWrappers = Eu, Ju && (Nu.particleTexture = Ju), void 0 === Ru && (Ru = this.emitter), this.noiseTexture && (Nu.noiseTexture = this.noiseTexture.clone()), Nu.emitter = Ru, this.preventAutoStart || Nu.start(), Nu
      }
    }
    iR.BILLBOARDMODE_Y = 2, iR.BILLBOARDMODE_ALL = 7, iR.BILLBOARDMODE_STRETCHED = 8, iR.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let YR = !1;
    YR || (YR = !0, lR._ParseParticleSystem = iR.Parse)
  },
  41206: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      SkyMaterial: () => Hu,
      _MaxColorValueForRenderTarget: () => ju
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39582),
      mu = yu(36828),
      Ju = yu(39854),
      Nu = yu(39923),
      Xu = yu(41171),
      Vu = yu(40732),
      ru = yu(39643),
      Bu = yu(36871),
      xu = yu(39948),
      Su = yu(39931),
      pu = yu(39913),
      Tu = yu(39905);
    class Wu extends Ju.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function ju(uu) {
      switch (uu) {
        case Xu.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Xu.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Hu = (() => {
      var uu;
      let Ru, Ju, Xu, Bu, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu = Nu.e,
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [],
        wu = [],
        Zu = [],
        hu = [],
        Pu = [],
        iu = [],
        Yu = [],
        ou = [],
        qu = [],
        Ou = [],
        vu = [],
        au = [],
        fu = [],
        uR = [],
        RR = [],
        yR = [],
        ER = [],
        KR = [],
        QR = [],
        mR = [],
        JR = [],
        NR = [];
      return uu = class extends Uu {
        constructor(uu, Ru) {
          super(uu, Ru, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Eu.l)(this, nu, 1), this.turbidity = ((0, Eu.l)(this, su), (0, Eu.l)(this, tu, 10)), this.rayleigh = ((0, Eu.l)(this, lu), (0, Eu.l)(this, gu, 2)), this.mieCoefficient = ((0, Eu.l)(this, cu), (0, Eu.l)(this, Lu, .005)), this.mieDirectionalG = ((0, Eu.l)(this, zu), (0, Eu.l)(this, Fu, .8)), this.distance = ((0, Eu.l)(this, wu), (0, Eu.l)(this, Zu, 500)), this.inclination = ((0, Eu.l)(this, hu), (0, Eu.l)(this, Pu, .49)), this.azimuth = ((0, Eu.l)(this, iu), (0, Eu.l)(this, Yu, .25)), this.sunPosition = ((0, Eu.l)(this, ou), (0, Eu.l)(this, qu, new mu.MS(0, 100, 0))), this.useSunPosition = ((0, Eu.l)(this, Ou), (0, Eu.l)(this, vu, !1)), this.cameraOffset = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, mu.MS.Zero())), this.up = ((0, Eu.l)(this, uR), (0, Eu.l)(this, RR, mu.MS.Up())), this.dithering = ((0, Eu.l)(this, yR), (0, Eu.l)(this, ER, !1)), this.rawHdrOutput = ((0, Eu.l)(this, KR), (0, Eu.l)(this, QR, !1)), this.cloudiness = ((0, Eu.l)(this, mR), (0, Eu.l)(this, JR, 0)), this._cameraPosition = ((0, Eu.l)(this, NR), mu.MS.Zero()), this._skyOrientation = new mu.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(Ru, yu) {
          const Eu = yu._drawWrapper;
          if (this.isFrozen && Eu.effect && Eu._wasPreviouslyReady) return !0;
          yu.materialDefines || (yu.materialDefines = new Wu);
          const Ku = yu.materialDefines,
            Qu = this.lD();
          if (this._isReadyForSubMesh(yu)) return !0;
          if ((0, Tu.jb)(Ru, Qu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Ku, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Tu.X)(Ru, Ku, !0, !1), Ku.IMAGEPROCESSINGPOSTPROCESS !== Qu.imageProcessingConfiguration.applyByPostProcess && Ku.markAsMiscDirty(), Ku.DITHER !== this.dithering && Ku.markAsMiscDirty(), Ku.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Ku.markAsMiscDirty(), Ku.isDirty) {
            Ku.markAsProcessed(), Qu.resetCachedMaterial();
            const Ru = new Su.d;
            Ku.FOG && Ru.addFallback(1, "FOG"), Ku.IMAGEPROCESSINGPOSTPROCESS = Qu.imageProcessingConfiguration.applyByPostProcess, Ku.DITHER = this.dithering, Ku.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Eu = [Vu.d.PositionKind];
            Ku.VERTEXCOLOR && Eu.push(Vu.d.ColorKind);
            const mu = "sky",
              Ju = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, pu.c)(Ju);
            const Nu = Ku.toString();
            yu.setEffect(Qu.eS().createEffect(mu, {
              attributes: Eu,
              uniformsNames: Ju,
              uniformBuffersNames: [],
              samplers: [],
              defines: Nu,
              fallbacks: Ru,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Qu.eS()), Ku, this._materialContext)
          }
          return !(!yu.effect || !yu.effect.isReady()) && (Ku._renderId = Qu.getRenderId(), Eu._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(uu, Ru, yu) {
          const Eu = this.lD(),
            Ku = yu.materialDefines;
          if (!Ku) return;
          const Qu = yu.effect;
          if (!Qu) return;
          this._activeEffect = Qu, this.bindOnlyWorldMatrix(uu), this._activeEffect.setMatrix("viewProjection", Eu.getTransformMatrix()), this._mustRebind(Eu, Qu, yu) && ((0, pu.f)(Qu, this, Eu), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Tu.u)(Ku, Qu, Eu)), Eu.fogEnabled && Ru.applyFog && Eu.fogMode !== ru.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Eu.getViewMatrix()), (0, Tu.g)(Eu, Ru, this._activeEffect, this.rawHdrOutput);
          const Ju = Eu.activeCamera;
          if (Ju) {
            const uu = Ju.getWorldMatrix();
            this._cameraPosition.x = uu.m[12], this._cameraPosition.y = uu.m[13], this._cameraPosition.z = uu.m[14], this._activeEffect.setVector3("cameraPosition", mu.TmpVectors.MS[0].Oyu(this._cameraPosition).oEu(Eu.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const uu = Eu.eS()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", ju(uu?.texture?.type))
          }
          if (!this.useSunPosition) {
            const uu = Math.PI * (this.inclination - .5),
              Ru = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Ru) * Math.cos(uu), this.sunPosition.y = this.distance * Math.sin(-uu), this.sunPosition.z = this.distance * Math.sin(Ru) * Math.cos(uu), mu.Quaternion.FromUnitVectorsToRef(mu.MS.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Ru, this._activeEffect, yu)
        }
        getAnimatables() {
          return []
        }
        dispose(uu) {
          super.dispose(uu)
        }
        clone(Ru) {
          return Qu.c.Clone((() => new uu(Ru, this.lD())), this)
        }
        serialize() {
          const uu = super.serialize();
          return uu.customType = "BABYLON.SkyMaterial", uu
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Ru, yu, Eu) {
          return Qu.c.Parse((() => new uu(Ru.name, yu)), Ru, yu, Eu)
        }
      }, (() => {
        const yu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Ku.K)()], Ju = [(0, Ku.K)()], Xu = [(0, Ku.K)()], Bu = [(0, Ku.K)()], Hu = [(0, Ku.K)()], du = [(0, Ku.K)()], bu = [(0, Ku.K)()], Cu = [(0, Ku.K)()], ku = [(0, Ku.G)()], eu = [(0, Ku.K)()], Au = [(0, Ku.G)()], Du = [(0, Ku.G)()], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], Gu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: uu => "luminance" in uu,
            get: uu => uu.luminance,
            set: (uu, Ru) => {
              uu.luminance = Ru
            }
          },
          metadata: yu
        }, nu, su), (0, Eu.h)(null, null, Ju, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: uu => "turbidity" in uu,
            get: uu => uu.turbidity,
            set: (uu, Ru) => {
              uu.turbidity = Ru
            }
          },
          metadata: yu
        }, tu, lu), (0, Eu.h)(null, null, Xu, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: uu => "rayleigh" in uu,
            get: uu => uu.rayleigh,
            set: (uu, Ru) => {
              uu.rayleigh = Ru
            }
          },
          metadata: yu
        }, gu, cu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: uu => "mieCoefficient" in uu,
            get: uu => uu.mieCoefficient,
            set: (uu, Ru) => {
              uu.mieCoefficient = Ru
            }
          },
          metadata: yu
        }, Lu, zu), (0, Eu.h)(null, null, Hu, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: uu => "mieDirectionalG" in uu,
            get: uu => uu.mieDirectionalG,
            set: (uu, Ru) => {
              uu.mieDirectionalG = Ru
            }
          },
          metadata: yu
        }, Fu, wu), (0, Eu.h)(null, null, du, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: uu => "distance" in uu,
            get: uu => uu.distance,
            set: (uu, Ru) => {
              uu.distance = Ru
            }
          },
          metadata: yu
        }, Zu, hu), (0, Eu.h)(null, null, bu, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: uu => "inclination" in uu,
            get: uu => uu.inclination,
            set: (uu, Ru) => {
              uu.inclination = Ru
            }
          },
          metadata: yu
        }, Pu, iu), (0, Eu.h)(null, null, Cu, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: uu => "azimuth" in uu,
            get: uu => uu.azimuth,
            set: (uu, Ru) => {
              uu.azimuth = Ru
            }
          },
          metadata: yu
        }, Yu, ou), (0, Eu.h)(null, null, ku, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: uu => "sunPosition" in uu,
            get: uu => uu.sunPosition,
            set: (uu, Ru) => {
              uu.sunPosition = Ru
            }
          },
          metadata: yu
        }, qu, Ou), (0, Eu.h)(null, null, eu, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSunPosition" in uu,
            get: uu => uu.useSunPosition,
            set: (uu, Ru) => {
              uu.useSunPosition = Ru
            }
          },
          metadata: yu
        }, vu, au), (0, Eu.h)(null, null, Au, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: uu => "cameraOffset" in uu,
            get: uu => uu.cameraOffset,
            set: (uu, Ru) => {
              uu.cameraOffset = Ru
            }
          },
          metadata: yu
        }, fu, uR), (0, Eu.h)(null, null, Du, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: uu => "up" in uu,
            get: uu => uu.up,
            set: (uu, Ru) => {
              uu.up = Ru
            }
          },
          metadata: yu
        }, RR, yR), (0, Eu.h)(null, null, Mu, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: uu => "dithering" in uu,
            get: uu => uu.dithering,
            set: (uu, Ru) => {
              uu.dithering = Ru
            }
          },
          metadata: yu
        }, ER, KR), (0, Eu.h)(null, null, Iu, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: uu => "rawHdrOutput" in uu,
            get: uu => uu.rawHdrOutput,
            set: (uu, Ru) => {
              uu.rawHdrOutput = Ru
            }
          },
          metadata: yu
        }, QR, mR), (0, Eu.h)(null, null, Gu, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: uu => "cloudiness" in uu,
            get: uu => uu.cloudiness,
            set: (uu, Ru) => {
              uu.cloudiness = Ru
            }
          },
          metadata: yu
        }, JR, NR), yu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yu
        })
      })(), uu._ShaderLoader = new xu.d((() => [yu.e(320).then((() => yu(61062))), yu.e(313).then((() => yu(61071)))]), (() => [yu.e(337).then((() => yu(61075))), yu.e(331).then((() => yu(61079)))])), uu
    })();
    (0, Bu.c)("BABYLON.SkyMaterial", Hu)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);