export const id = 308;
export const ids = [308];
export const modules = {
  41875: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(40366),
      Uu = ju(41877);
    class Zu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = ju, this.msu = [], this._maxBlockCapacity = Eu || 64, this._selectionContent = new su.e(1024), this._creationFunc = uu
      }
      update(uu, Eu, ju) {
        Uu.d._CreateBlocks(uu, Eu, ju, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      hsu(uu) {
        for (let Eu = 0; Eu < this.blocks.length; Eu++) {
          this.blocks[Eu].addEntry(uu)
        }
      }
      rV(uu) {
        for (let Eu = 0; Eu < this.blocks.length; Eu++) {
          this.blocks[Eu].removeEntry(uu)
        }
      }
      select(uu, Eu) {
        this._selectionContent.reset();
        for (let ju = 0; ju < this.blocks.length; ju++) {
          this.blocks[ju].select(uu, this._selectionContent, Eu)
        }
        return Eu ? this._selectionContent.concat(this.msu) : this._selectionContent.concatWithNoDuplicate(this.msu), this._selectionContent
      }
      intersects(uu, Eu, ju) {
        this._selectionContent.reset();
        for (let su = 0; su < this.blocks.length; su++) {
          this.blocks[su].intersects(uu, Eu, this._selectionContent, ju)
        }
        return ju ? this._selectionContent.concat(this.msu) : this._selectionContent.concatWithNoDuplicate(this.msu), this._selectionContent
      }
      intersectsRay(uu) {
        this._selectionContent.reset();
        for (let Eu = 0; Eu < this.blocks.length; Eu++) {
          this.blocks[Eu].intersectsRay(uu, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.msu), this._selectionContent
      }
    }
    Zu.CreationFuncForMeshes = (uu, Eu) => {
      const ju = uu.EW();
      !uu.isBlocked && ju.boundingBox.intersectsMinMax(Eu.wsu, Eu.Gsu) && Eu.entries.push(uu)
    }, Zu.CreationFuncForSubMeshes = (uu, Eu) => {
      uu.EW().boundingBox.intersectsMinMax(Eu.wsu, Eu.Gsu) && Eu.entries.push(uu)
    }
  },
  41877: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(37494),
      Uu = ju(40581);
    class Zu {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.entries = [], this.vsu = new Array, this._capacity = ju, this._depth = su, this._maxDepth = Uu, this._creationFunc = Zu, this._minPoint = uu, this._maxPoint = Eu, this.vsu.push(uu.clone()), this.vsu.push(Eu.clone()), this.vsu.push(uu.clone()), this.vsu[2].x = Eu.x, this.vsu.push(uu.clone()), this.vsu[3].y = Eu.y, this.vsu.push(uu.clone()), this.vsu[4].z = Eu.z, this.vsu.push(Eu.clone()), this.vsu[5].z = uu.z, this.vsu.push(Eu.clone()), this.vsu[6].x = uu.x, this.vsu.push(Eu.clone()), this.vsu[7].y = uu.y
      }
      get Mb() {
        return this._capacity
      }
      get wsu() {
        return this._minPoint
      }
      get Gsu() {
        return this._maxPoint
      }
      addEntry(uu) {
        if (this.blocks)
          for (let Eu = 0; Eu < this.blocks.length; Eu++) {
            this.blocks[Eu].addEntry(uu)
          } else this._creationFunc(uu, this), this.entries.length > this.Mb && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(uu) {
        if (this.blocks) {
          for (let Eu = 0; Eu < this.blocks.length; Eu++) {
            this.blocks[Eu].removeEntry(uu)
          }
          return
        }
        const Eu = this.entries.indexOf(uu);
        Eu > -1 && this.entries.splice(Eu, 1)
      }
      addEntries(uu) {
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const ju = uu[Eu];
          this.addEntry(ju)
        }
      }
      select(uu, Eu, ju) {
        if (Uu.e.IsInFrustum(this.vsu, uu)) {
          if (this.blocks) {
            for (let su = 0; su < this.blocks.length; su++) {
              this.blocks[su].select(uu, Eu, ju)
            }
            return
          }
          ju ? Eu.concat(this.entries) : Eu.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(uu, Eu, ju, su) {
        if (Uu.e.IntersectsSphere(this._minPoint, this._maxPoint, uu, Eu)) {
          if (this.blocks) {
            for (let Uu = 0; Uu < this.blocks.length; Uu++) {
              this.blocks[Uu].intersects(uu, Eu, ju, su)
            }
            return
          }
          su ? ju.concat(this.entries) : ju.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(uu, Eu) {
        if (uu.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let ju = 0; ju < this.blocks.length; ju++) {
              this.blocks[ju].intersectsRay(uu, Eu)
            }
            return
          }
          Eu.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Zu._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(uu, Eu, ju, Uu, Xu, lu, qu, fu) {
        qu.blocks = new Array;
        const Cu = new su.t((Eu.x - uu.x) / 2, (Eu.y - uu.y) / 2, (Eu.z - uu.z) / 2);
        for (let su = 0; su < 2; su++)
          for (let Eu = 0; Eu < 2; Eu++)
            for (let bu = 0; bu < 2; bu++) {
              const cu = uu.add(Cu.multiplyByFloats(su, Eu, bu)),
                Nu = uu.add(Cu.multiplyByFloats(su + 1, Eu + 1, bu + 1)),
                Ou = new Zu(cu, Nu, Uu, Xu + 1, lu, fu);
              Ou.addEntries(ju), qu.blocks.push(Ou)
            }
      }
    }
  },
  41885: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu
    });
    var su = ju(40350),
      Uu = ju(37494),
      Zu = ju(40699),
      Xu = ju(41823),
      lu = ju(40422),
      qu = ju(37506),
      fu = ju(41875);
    class Cu {
      constructor(uu) {
        this.name = lu.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Xu.u(Uu.t.Zero(), new Uu.t(1, 1, 1)), (uu = uu || qu.b.LastCreatedScene) && (this.vY = uu, this.vY.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.vY.getActiveSubMeshCandidates = uu => this.getActiveSubMeshCandidates(uu), this.vY.getCollidingSubMeshCandidates = (uu, Eu) => this.getCollidingSubMeshCandidates(uu, Eu), this.vY.getIntersectingSubMeshCandidates = (uu, Eu) => this.getIntersectingSubMeshCandidates(uu, Eu))
      }
      register() {
        this.vY.onMeshRemovedObservable.add((uu => {
          const Eu = this.vY.selectionOctree;
          if (void 0 !== Eu && null !== Eu) {
            const ju = Eu.msu.indexOf(uu); - 1 !== ju && Eu.msu.splice(ju, 1)
          }
        })), this.vY.onMeshImportedObservable.add((uu => {
          const Eu = this.vY.selectionOctree;
          void 0 !== Eu && null !== Eu && Eu.hsu(uu)
        }))
      }
      getActiveMeshCandidates() {
        return this.vY.Wsu?.select(this.vY.frustumPlanes) || this.vY._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(uu) {
        if (uu._submeshesOctree && uu.useOctreeForRenderingSelection) {
          return uu._submeshesOctree.select(this.vY.frustumPlanes)
        }
        return this.vY._getDefaultSubMeshCandidates(uu)
      }
      getIntersectingSubMeshCandidates(uu, Eu) {
        if (uu._submeshesOctree && uu.useOctreeForPicking) {
          Xu.u.TransformToRef(Eu, uu.getWorldMatrix(), this._tempRay);
          return uu._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.vY._getDefaultSubMeshCandidates(uu)
      }
      getCollidingSubMeshCandidates(uu, Eu) {
        if (uu._submeshesOctree && uu.useOctreeForCollisions) {
          const ju = Eu._velocityWorldLength + Math.max(Eu._radius.x, Eu._radius.y, Eu._radius.z);
          return uu._submeshesOctree.intersects(Eu._basePointWorld, ju)
        }
        return this.vY._getDefaultSubMeshCandidates(uu)
      }
      rebuild() {}
      dispose() {}
    }
    let bu = !1;
    bu || (bu = !0, su.f.prototype.createOrUpdateSelectionOctree = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        ju = this._getComponent(lu.b.NAME_OCTREE);
      ju || (ju = new Cu(this), this.usu(ju)), this.Wsu || (this.Wsu = new fu.c(fu.c.CreationFuncForMeshes, uu, Eu));
      const su = this.getWorldExtends();
      return this.Wsu.update(su.min, su.max, this.meshes), this.Wsu
    }, Object.defineProperty(su.f.prototype, "selectionOctree", {
      get: function() {
        return this.Wsu
      },
      enumerable: !0,
      configurable: !0
    }), Zu.e.prototype.createOrUpdateSubmeshesOctree = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const ju = this.hV();
      let su = ju._getComponent(lu.b.NAME_OCTREE);
      su || (su = new Cu(ju), ju.usu(su)), this._submeshesOctree || (this._submeshesOctree = new fu.c(fu.c.CreationFuncForSubMeshes, uu, Eu)), this.computeWorldMatrix(!0);
      const Uu = this.EW().boundingBox;
      return this._submeshesOctree.update(Uu.minimumWorld, Uu.maximumWorld, this.iG), this._submeshesOctree
    })
  },
  41823: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => ku,
      f: () => Yu,
      g: () => Ou,
      j: () => Nu,
      k: () => Pu,
      n: () => au,
      o: () => wu,
      p: () => du,
      r: () => Ju,
      u: () => bu
    });
    var su = ju(37496),
      Uu = ju(37494),
      Zu = ju(37498),
      Xu = ju(40565),
      lu = ju(40393),
      qu = ju(37506),
      fu = ju(40448);
    const Cu = {
      internalPickerForMesh: void 0
    };
    class bu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : su.c;
        this.origin = uu, this.direction = Eu, this.length = ju, this.epsilon = Uu
      }
      clone() {
        return new bu(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const su = bu._TmpVector3[0].T6(uu.x - ju, uu.y - ju, uu.z - ju),
          Uu = bu._TmpVector3[1].T6(Eu.x + ju, Eu.y + ju, Eu.z + ju);
        let Zu, Xu, lu, qu, fu = 0,
          Cu = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < su.x || this.origin.x > Uu.x) return !1
        } else if (Zu = 1 / this.direction.x, Xu = (su.x - this.origin.x) * Zu, lu = (Uu.x - this.origin.x) * Zu, lu === -1 / 0 && (lu = 1 / 0), Xu > lu && (qu = Xu, Xu = lu, lu = qu), fu = Math.max(Xu, fu), Cu = Math.min(lu, Cu), fu > Cu) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < su.y || this.origin.y > Uu.y) return !1
        } else if (Zu = 1 / this.direction.y, Xu = (su.y - this.origin.y) * Zu, lu = (Uu.y - this.origin.y) * Zu, lu === -1 / 0 && (lu = 1 / 0), Xu > lu && (qu = Xu, Xu = lu, lu = qu), fu = Math.max(Xu, fu), Cu = Math.min(lu, Cu), fu > Cu) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < su.z || this.origin.z > Uu.z) return !1
        } else if (Zu = 1 / this.direction.z, Xu = (su.z - this.origin.z) * Zu, lu = (Uu.z - this.origin.z) * Zu, lu === -1 / 0 && (lu = 1 / 0), Xu > lu && (qu = Xu, Xu = lu, lu = qu), fu = Math.max(Xu, fu), Cu = Math.min(lu, Cu), fu > Cu) return !1;
        return !0
      }
      intersectsBox(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(uu.minimum, uu.maximum, Eu)
      }
      intersectsSphere(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = uu.center.x - this.origin.x,
          su = uu.center.y - this.origin.y,
          Uu = uu.center.z - this.origin.z,
          Zu = ju * ju + su * su + Uu * Uu,
          Xu = uu.radius + Eu,
          lu = Xu * Xu;
        if (Zu <= lu) return !0;
        const qu = ju * this.direction.x + su * this.direction.y + Uu * this.direction.z;
        if (qu < 0) return !1;
        return Zu - qu * qu <= lu
      }
      intersectsTriangle(uu, Eu, ju) {
        const su = bu._TmpVector3[0],
          Zu = bu._TmpVector3[1],
          lu = bu._TmpVector3[2],
          qu = bu._TmpVector3[3],
          fu = bu._TmpVector3[4];
        Eu.subtractToRef(uu, su), ju.subtractToRef(uu, Zu), Uu.t.CrossToRef(this.direction, Zu, lu);
        const Cu = Uu.t.Dot(su, lu);
        if (0 === Cu) return null;
        const cu = 1 / Cu;
        this.origin.subtractToRef(uu, qu);
        const Nu = Uu.t.Dot(qu, lu) * cu;
        if (Nu < -this.epsilon || Nu > 1 + this.epsilon) return null;
        Uu.t.CrossToRef(qu, su, fu);
        const Ou = Uu.t.Dot(this.direction, fu) * cu;
        if (Ou < -this.epsilon || Nu + Ou > 1 + this.epsilon) return null;
        const Yu = Uu.t.Dot(Zu, fu) * cu;
        return Yu > this.length || Yu < 0 ? null : new Xu.c(1 - Nu - Ou, Nu, Yu)
      }
      intersectsPlane(uu) {
        let Eu;
        const ju = Uu.t.Dot(uu.normal, this.direction);
        if (Math.abs(ju) < 9.99999997475243e-7) return null;
        {
          const su = Uu.t.Dot(uu.normal, this.origin);
          return Eu = (-uu.d - su) / ju, Eu < 0 ? Eu < -9.99999997475243e-7 ? null : 0 : Eu
        }
      }
      intersectsAxis(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (uu) {
          case "y": {
            const uu = (this.origin.y - Eu) / this.direction.y;
            return uu > 0 ? null : new Uu.t(this.origin.x + this.direction.x * -uu, Eu, this.origin.z + this.direction.z * -uu)
          }
          case "x": {
            const uu = (this.origin.x - Eu) / this.direction.x;
            return uu > 0 ? null : new Uu.t(Eu, this.origin.y + this.direction.y * -uu, this.origin.z + this.direction.z * -uu)
          }
          case "z": {
            const uu = (this.origin.z - Eu) / this.direction.z;
            return uu > 0 ? null : new Uu.t(this.origin.x + this.direction.x * -uu, this.origin.y + this.direction.y * -uu, Eu)
          }
          default:
            return null
        }
      }
      sUu(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Zu = arguments.length > 4 ? arguments[4] : void 0,
          Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const lu = Uu.m.Matrix[0];
        return uu.getWorldMatrix().invertToRef(lu), this._tmpRay ? bu.TransformToRef(this, lu, this._tmpRay) : this._tmpRay = bu.Transform(this, lu), uu.intersects(this._tmpRay, Eu, ju, su, Zu, Xu)
      }
      intersectsMeshes(uu, Eu, ju) {
        ju ? ju.length = 0 : ju = [];
        for (let su = 0; su < uu.length; su++) {
          const Uu = this.sUu(uu[su], Eu);
          Uu.hit && ju.push(Uu)
        }
        return ju.sort(this._comparePickingInfo), ju
      }
      _comparePickingInfo(uu, Eu) {
        return uu.distance < Eu.distance ? -1 : uu.distance > Eu.distance ? 1 : 0
      }
      intersectionSegment(uu, Eu, ju) {
        const su = this.origin,
          Zu = Uu.m.dO[0],
          Xu = Uu.m.dO[1],
          lu = Uu.m.dO[2],
          qu = Uu.m.dO[3];
        Eu.subtractToRef(uu, Zu), this.direction.scaleToRef(bu._Rayl, lu), su.addToRef(lu, Xu), uu.subtractToRef(su, qu);
        const fu = Uu.t.Dot(Zu, Zu),
          Cu = Uu.t.Dot(Zu, lu),
          cu = Uu.t.Dot(lu, lu),
          Nu = Uu.t.Dot(Zu, qu),
          Ou = Uu.t.Dot(lu, qu),
          Yu = fu * cu - Cu * Cu;
        let hu, Du, gu = Yu,
          Mu = Yu;
        Yu < bu._Smallnum ? (hu = 0, gu = 1, Du = Ou, Mu = cu) : (hu = Cu * Ou - cu * Nu, Du = fu * Ou - Cu * Nu, hu < 0 ? (hu = 0, Du = Ou, Mu = cu) : hu > gu && (hu = gu, Du = Ou + Cu, Mu = cu)), Du < 0 ? (Du = 0, -Nu < 0 ? hu = 0 : -Nu > fu ? hu = gu : (hu = -Nu, gu = fu)) : Du > Mu && (Du = Mu, -Nu + Cu < 0 ? hu = 0 : -Nu + Cu > fu ? hu = gu : (hu = -Nu + Cu, gu = fu));
        const eu = Math.abs(hu) < bu._Smallnum ? 0 : hu / gu,
          Gu = Math.abs(Du) < bu._Smallnum ? 0 : Du / Mu,
          pu = Uu.m.dO[4];
        lu.scaleToRef(Gu, pu);
        const wu = Uu.m.dO[5];
        Zu.scaleToRef(eu, wu), wu.addInPlace(qu);
        const Ju = Uu.m.dO[6];
        wu.subtractToRef(pu, Ju);
        return Gu > 0 && Gu <= this.length && Ju.lengthSquared() < ju * ju ? wu.length() : -1
      }
      update(uu, Eu, ju, su, Zu, Xu, lu) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          bu._RayDistant || (bu._RayDistant = bu.Zero()), bu._RayDistant.unprojectRayToRef(uu, Eu, ju, su, Uu.e.IdentityReadOnly, Xu, lu);
          const qu = Uu.m.Matrix[0];
          Zu.invertToRef(qu), bu.TransformToRef(bu._RayDistant, qu, this)
        } else this.unprojectRayToRef(uu, Eu, ju, su, Zu, Xu, lu);
        return this
      }
      static Zero() {
        return new bu(Uu.t.Zero(), Uu.t.Zero())
      }
      static CreateNew(uu, Eu, ju, su, Uu, Zu, Xu) {
        return bu.Zero().update(uu, Eu, ju, su, Uu, Zu, Xu)
      }
      static CreateNewFromTo(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uu.e.IdentityReadOnly;
        const su = new bu(new Uu.t(0, 0, 0), new Uu.t(0, 0, 0));
        return bu.CreateFromToToRef(uu, Eu, su, ju)
      }
      static CreateFromToToRef(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Uu.e.IdentityReadOnly;
        ju.origin.yJ(uu);
        const Zu = Eu.subtractToRef(uu, ju.direction),
          Xu = Math.sqrt(Zu.x * Zu.x + Zu.y * Zu.y + Zu.z * Zu.z);
        return ju.length = Xu, ju.direction.normalize(), bu.TransformToRef(ju, su, ju)
      }
      static Transform(uu, Eu) {
        const ju = new bu(new Uu.t(0, 0, 0), new Uu.t(0, 0, 0));
        return bu.TransformToRef(uu, Eu, ju), ju
      }
      static TransformToRef(uu, Eu, ju) {
        Uu.t.TransformCoordinatesToRef(uu.origin, Eu, ju.origin), Uu.t.TransformNormalToRef(uu.direction, Eu, ju.direction), ju.length = uu.length, ju.epsilon = uu.epsilon;
        const su = ju.direction,
          Zu = su.length();
        if (0 !== Zu && 1 !== Zu) {
          const uu = 1 / Zu;
          su.x *= uu, su.y *= uu, su.z *= uu, ju.length *= Zu
        }
        return ju
      }
      unprojectRayToRef(uu, Eu, ju, su, Zu, Xu, lu) {
        const fu = Uu.m.Matrix[0];
        Zu.multiplyToRef(Xu, fu), fu.multiplyToRef(lu, fu), fu.invert();
        const Cu = qu.b.LastCreatedEngine,
          bu = Uu.m.dO[0];
        bu.x = uu / ju * 2 - 1, bu.y = -(Eu / su * 2 - 1), bu.z = Cu?.bsu ? 1 : Cu?.isNDCHalfZRange ? 0 : -1;
        const cu = Uu.m.dO[1].T6(bu.x, bu.y, 1 - 1e-8),
          Nu = Uu.m.dO[2],
          Ou = Uu.m.dO[3];
        Uu.t.TransformCoordinatesToRef(bu, fu, Nu), Uu.t.TransformCoordinatesToRef(cu, fu, Ou), this.origin.yJ(Nu), Ou.subtractToRef(Nu, this.direction), this.direction.normalize()
      }
    }

    function cu(uu, Eu, ju, su, Uu) {
      let Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Xu = bu.Zero();
      return Nu(uu, Eu, ju, su, Xu, Uu, Zu), Xu
    }

    function Nu(uu, Eu, ju, su, Zu, Xu) {
      let lu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const fu = uu.wO();
      if (!Xu && !(Xu = uu.activeCamera) && !(Xu = uu.cameraToUseForPointers)) return uu;
      const Cu = Xu.viewport,
        bu = fu.getRenderHeight(),
        {
          x: cu,
          y: Nu,
          width: Ou,
          height: Yu
        } = Cu.toGlobal(fu.getRenderWidth(), bu),
        hu = 1 / fu.getHardwareScalingLevel();
      return Eu = Eu * hu - cu, ju = ju * hu - (bu - Nu - Yu), Zu.update(Eu, ju, Ou, Yu, su || Uu.e.IdentityReadOnly, lu ? Uu.e.IdentityReadOnly : Xu.getViewMatrix(), Xu.getProjectionMatrix(), qu), uu
    }

    function Ou(uu, Eu, ju, su) {
      const Uu = bu.Zero();
      return Yu(uu, Eu, ju, Uu, su), Uu
    }

    function Yu(uu, Eu, ju, su, Zu) {
      if (!lu.b) return uu;
      const Xu = uu.wO();
      if (!Zu && !(Zu = uu.activeCamera) && !(Zu = uu.cameraToUseForPointers)) throw new Error("Active camera not set");
      const qu = Zu.viewport,
        fu = Xu.getRenderHeight(),
        {
          x: Cu,
          y: bu,
          width: cu,
          height: Nu
        } = qu.toGlobal(Xu.getRenderWidth(), fu),
        Ou = Uu.e.Identity(),
        Yu = 1 / Xu.getHardwareScalingLevel();
      return Eu = Eu * Yu - Cu, ju = ju * Yu - (fu - bu - Nu), su.update(Eu, ju, cu, Nu, Ou, Ou, Zu.getProjectionMatrix()), uu
    }

    function hu(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
      return Du(uu, ju, su, Eu(su, ju.enableDistantPicking), Uu, Zu, Xu, lu)
    }

    function Du(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
      const qu = Eu.intersects(su, Uu, Xu, Zu, ju, lu);
      return qu && qu.hit ? !Uu && null != uu && qu.distance >= uu.distance ? null : qu : null
    }

    function gu(uu, Eu) {
      return "InstancedLinesMesh" === uu || "LinesMesh" === uu ? Eu.intersectionThreshold : 0
    }

    function Mu(uu) {
      const Eu = uu.getClassName();
      if ("GreasedLineMesh" === Eu) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const ju = uu.rawBoundingInfo;
      return {
        rawBoundingInfo: ju,
        intersectionThreshold: ju ? gu(Eu, uu) : 0
      }
    }

    function eu(uu, Eu, ju, su, Uu) {
      const Zu = uu(ju, Eu.enableDistantPicking);
      return Zu.intersectsSphere(su.Isu, Uu) && Zu.intersectsBox(su.boundingBox, Uu) ? Zu : null
    }

    function Gu(uu, Eu, ju, su, Zu, Xu) {
      let qu = null;
      const fu = !!(uu.activeCameras && uu.activeCameras.length > 1 && uu.cameraToUseForPointers !== uu.activeCamera),
        bu = uu.cameraToUseForPointers || uu.activeCamera,
        cu = Cu.internalPickerForMesh || hu,
        Nu = cu === hu;
      for (let lu = 0; lu < uu.meshes.length; lu++) {
        const Cu = uu.meshes[lu];
        if (ju) {
          if (!ju(Cu, -1)) continue
        } else if (!Cu.isEnabled() || !Cu.isVisible || !Cu.VY) continue;
        const Ou = fu && Cu.isWorldMatrixCameraDependent(),
          Yu = Cu.computeWorldMatrix(Ou, bu);
        if (Cu.hasThinInstances && Cu.rEu) {
          const uu = cu(qu, Eu, Cu, Yu, !0, !0, Xu);
          if (uu) {
            if (Zu) return uu;
            const {
              rawBoundingInfo: lu,
              intersectionThreshold: fu
            } = Mu(Cu), bu = Cu._thinInstanceDataStorage.matrixData;
            if (bu) {
              const uu = Uu.m.Matrix[0],
                Ou = Uu.m.Matrix[1],
                hu = Math.min(Cu.F_, bu.length >> 4);
              for (let gu = 0; gu < hu; gu++) {
                if (ju && !ju(Cu, gu)) continue;
                Uu.e.FromArrayToRef(bu, gu << 4, uu), uu.multiplyToRef(Yu, Ou);
                const hu = Nu && lu ? eu(Eu, Cu, Ou, lu, fu) : null;
                if (Nu && lu && !hu) continue;
                const Mu = Nu && hu ? Du(qu, Cu, Ou, hu, su, Zu, Xu, !0) : cu(qu, Eu, Cu, Ou, su, Zu, Xu, !0);
                if (Mu && (qu = Mu, qu.thinInstanceIndex = gu, su)) return qu
              }
            }
          }
        } else {
          const uu = cu(qu, Eu, Cu, Yu, su, Zu, Xu);
          if (uu && (qu = uu, su)) return qu
        }
      }
      return qu || new lu.b
    }

    function pu(uu, Eu, ju, su) {
      if (!lu.b) return null;
      const Zu = [],
        Xu = !!(uu.activeCameras && uu.activeCameras.length > 1 && uu.cameraToUseForPointers !== uu.activeCamera),
        qu = uu.cameraToUseForPointers || uu.activeCamera,
        fu = Cu.internalPickerForMesh || hu,
        bu = fu === hu;
      for (let lu = 0; lu < uu.meshes.length; lu++) {
        const Cu = uu.meshes[lu];
        if (ju) {
          if (!ju(Cu, -1)) continue
        } else if (!Cu.isEnabled() || !Cu.isVisible || !Cu.VY) continue;
        const cu = Xu && Cu.isWorldMatrixCameraDependent(),
          Nu = Cu.computeWorldMatrix(cu, qu);
        if (Cu.hasThinInstances && Cu.rEu) {
          if (fu(null, Eu, Cu, Nu, !0, !0, su)) {
            const {
              rawBoundingInfo: uu,
              intersectionThreshold: Xu
            } = Mu(Cu), lu = Cu._thinInstanceDataStorage.matrixData;
            if (lu) {
              const qu = Uu.m.Matrix[0],
                cu = Uu.m.Matrix[1],
                Ou = Math.min(Cu.F_, lu.length >> 4);
              for (let Yu = 0; Yu < Ou; Yu++) {
                if (ju && !ju(Cu, Yu)) continue;
                Uu.e.FromArrayToRef(lu, Yu << 4, qu), qu.multiplyToRef(Nu, cu);
                const Ou = bu && uu ? eu(Eu, Cu, cu, uu, Xu) : null;
                if (bu && uu && !Ou) continue;
                const hu = bu && Ou ? Du(null, Cu, cu, Ou, !1, !1, su, !0) : fu(null, Eu, Cu, cu, !1, !1, su, !0);
                hu && (hu.thinInstanceIndex = Yu, Zu.push(hu))
              }
            }
          }
        } else {
          const uu = fu(null, Eu, Cu, Nu, !1, !1, su);
          uu && Zu.push(uu)
        }
      }
      return Zu
    }

    function wu(uu, Eu, ju, su, Zu, Xu) {
      if (!lu.b) return null;
      const qu = Gu(uu, (su => (uu._tempPickingRay || (uu._tempPickingRay = bu.Zero()), Nu(uu, Eu, ju, su, uu._tempPickingRay, Xu || null), uu._tempPickingRay)), su, Zu, !0);
      return qu && (qu.ray = cu(uu, Eu, ju, Uu.e.Identity(), Xu || null)), qu
    }

    function Ju(uu, Eu, ju, su, Zu, Xu, lu) {
      const qu = Gu(uu, ((su, Uu) => (uu._tempPickingRay || (uu._tempPickingRay = bu.Zero()), Nu(uu, Eu, ju, su, uu._tempPickingRay, Xu || null, !1, Uu), uu._tempPickingRay)), su, Zu, !1, lu);
      return qu && (qu.ray = cu(uu, Eu, ju, Uu.e.Identity(), Xu || null)), qu
    }

    function du(uu, Eu, ju, su, Zu) {
      const Xu = Gu(uu, (ju => (uu._pickWithRayInverseMatrix || (uu._pickWithRayInverseMatrix = Uu.e.Identity()), ju.invertToRef(uu._pickWithRayInverseMatrix), uu._cachedRayForTransform || (uu._cachedRayForTransform = bu.Zero()), bu.TransformToRef(Eu, uu._pickWithRayInverseMatrix, uu._cachedRayForTransform), uu._cachedRayForTransform)), ju, su, !1, Zu);
      return Xu && (Xu.ray = Eu), Xu
    }

    function au(uu, Eu, ju, su, Uu, Zu) {
      return pu(uu, (su => cu(uu, Eu, ju, su, Uu || null)), su, Zu)
    }

    function Pu(uu, Eu, ju, su) {
      return pu(uu, (ju => (uu._pickWithRayInverseMatrix || (uu._pickWithRayInverseMatrix = Uu.e.Identity()), ju.invertToRef(uu._pickWithRayInverseMatrix), uu._cachedRayForTransform || (uu._cachedRayForTransform = bu.Zero()), bu.TransformToRef(Eu, uu._pickWithRayInverseMatrix, uu._cachedRayForTransform), uu._cachedRayForTransform)), ju, su)
    }

    function ou(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        su = arguments.length > 3 ? arguments[3] : void 0,
        Zu = arguments.length > 4 ? arguments[4] : void 0;
      su || (su = uu.getWorldMatrix()), Eu.length = ju, Zu ? Eu.origin.yJ(Zu) : Eu.origin.yJ(uu.position);
      const Xu = Uu.m.dO[2];
      Xu.set(0, 0, uu._scene.useRightHandedSystem ? -1 : 1);
      const lu = Uu.m.dO[3];
      return Uu.t.TransformNormalToRef(Xu, su, lu), Uu.t.NormalizeToRef(lu, Eu.direction), Eu
    }

    function ku(uu, Eu) {
      Eu && (Eu.prototype.getForwardRay = function() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        return ou(this, new bu(Uu.t.Zero(), Uu.t.Zero(), uu), uu, Eu, ju)
      }, Eu.prototype.getForwardRayToRef = function(uu) {
        return ou(this, uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), uu && (fu.d._IsPickingAvailable = !0, uu.prototype.createPickingRay = function(uu, Eu, ju, su) {
        return cu(this, uu, Eu, ju, su, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    bu._TmpVector3 = (0, Zu.e)(6, Uu.t.Zero), bu._RayDistant = bu.Zero(), bu._Smallnum = 1e-8, bu._Rayl = 1e9
  },
  41814: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu.u
    });
    var su = ju(40350),
      Uu = ju(40462),
      Zu = ju(41823);
    let Xu = !1;
    Xu || (Xu = !0, (0, Zu.b)(su.f, Uu.e), su.f.prototype.createPickingRayToRef = function(uu, Eu, ju, su, Uu) {
      let Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Zu.j)(this, uu, Eu, ju, su, Uu, Xu, lu)
    }, su.f.prototype.createPickingRayInCameraSpace = function(uu, Eu, ju) {
      return (0, Zu.g)(this, uu, Eu, ju)
    }, su.f.prototype.createPickingRayInCameraSpaceToRef = function(uu, Eu, ju, su) {
      return (0, Zu.f)(this, uu, Eu, ju, su)
    }, su.f.prototype.pickWithBoundingInfo = function(uu, Eu, ju, su, Uu) {
      return (0, Zu.o)(this, uu, Eu, ju, su, Uu)
    }, su.f.prototype.Hc = function(uu, Eu, ju, su, Uu, Xu) {
      let lu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Zu.r)(this, uu, Eu, ju, su, Uu, Xu, lu)
    }, su.f.prototype.pickWithRay = function(uu, Eu, ju, su) {
      return (0, Zu.p)(this, uu, Eu, ju, su)
    }, su.f.prototype.multiPick = function(uu, Eu, ju, su, Uu) {
      return (0, Zu.n)(this, uu, Eu, ju, su, Uu)
    }, su.f.prototype.multiPickWithRay = function(uu, Eu, ju) {
      return (0, Zu.k)(this, uu, Eu, ju)
    })
  },
  41825: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37494),
      Xu = ju(40508),
      lu = ju(41829),
      qu = ju(40467),
      fu = ju(37532);
    let Cu = (() => {
        var uu;
        let Eu, ju, qu, fu, Cu, bu, cu, Nu, Ou = lu.b,
          Yu = [],
          hu = [],
          Du = [],
          gu = [],
          Mu = [],
          eu = [],
          Gu = [],
          pu = [],
          wu = [],
          Ju = [],
          du = [],
          au = [],
          Pu = [];
        return uu = class extends Ou {
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
          constructor(uu, Eu, ju, Uu) {
            super(uu, ju, Uu), this._shadowFrustumSize = ((0, su.g)(this, Yu), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, su.g)(this, hu, !0), this.autoCalcShadowZBounds = ((0, su.g)(this, Du), (0, su.g)(this, gu, !1)), this._orthoLeft = ((0, su.g)(this, Mu), (0, su.g)(this, eu, Number.MAX_VALUE)), this._orthoRight = ((0, su.g)(this, Gu), (0, su.g)(this, pu, Number.MIN_VALUE)), this._orthoTop = ((0, su.g)(this, wu), (0, su.g)(this, Ju, Number.MIN_VALUE)), this._orthoBottom = ((0, su.g)(this, du), (0, su.g)(this, au, Number.MAX_VALUE)), (0, su.g)(this, Pu), this.position = Eu.scale(-1), this.direction = Eu
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Xu.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(uu, Eu, ju) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(uu) : this._setDefaultAutoExtendShadowProjectionMatrix(uu, Eu, ju)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(uu) {
            const Eu = this.hV().activeCamera;
            Zu.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : Eu ? Eu.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Eu ? Eu.maxZ : 1e4, uu, this.hV().wO().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(uu, Eu, ju) {
            const su = this.hV().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const uu = Zu.t.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let su = Number.MAX_VALUE,
                Uu = -Number.MAX_VALUE;
              for (let Xu = 0; Xu < ju.length; Xu++) {
                const lu = ju[Xu];
                if (!lu) continue;
                const qu = lu.EW().boundingBox;
                for (let ju = 0; ju < qu.vectorsWorld.length; ju++) Zu.t.TransformCoordinatesToRef(qu.vectorsWorld[ju], Eu, uu), uu.x < this._orthoLeft && (this._orthoLeft = uu.x), uu.y < this._orthoBottom && (this._orthoBottom = uu.y), uu.x > this._orthoRight && (this._orthoRight = uu.x), uu.y > this._orthoTop && (this._orthoTop = uu.y), this.autoCalcShadowZBounds && (uu.z < su && (su = uu.z), uu.z > Uu && (Uu = uu.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = su, this._shadowMaxZ = Uu)
            }
            const Uu = this._orthoRight - this._orthoLeft,
              Xu = this._orthoTop - this._orthoBottom,
              lu = void 0 !== this.shadowMinZ ? this.shadowMinZ : su?.minZ || 0,
              qu = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : su?.maxZ || 1e4,
              fu = this.hV().wO().bsu;
            Zu.e.OrthoOffCenterLHToRef(this._orthoLeft - Uu * this.shadowOrthoScale, this._orthoRight + Uu * this.shadowOrthoScale, this._orthoBottom - Xu * this.shadowOrthoScale, this._orthoTop + Xu * this.shadowOrthoScale, fu ? qu : lu, fu ? lu : qu, uu, this.hV().wO().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(uu, Eu) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, Eu), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, Eu), this)
          }
          transferToNodeMaterialEffect(uu, Eu) {
            return this.computeTransformedInformation() ? (uu.setFloat3(Eu, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (uu.setFloat3(Eu, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(uu) {
            const Eu = this._scene.wO();
            return !Eu.bsu && Eu.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(uu) {
            const Eu = this._scene.wO();
            return Eu.bsu && Eu.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(uu, Eu) {
            uu["DIRLIGHT" + Eu] = !0
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ou[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], qu = [(0, Uu.E)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.E)("orthoLeft")], bu = [(0, Uu.E)("orthoRight")], cu = [(0, Uu.E)("orthoTop")], Nu = [(0, Uu.E)("orthoBottom")], (0, su.e)(uu, null, Eu, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: uu => "shadowFrustumSize" in uu,
              get: uu => uu.shadowFrustumSize
            },
            metadata: Zu
          }, null, Yu), (0, su.e)(uu, null, ju, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "shadowOrthoScale" in uu,
              get: uu => uu.shadowOrthoScale
            },
            metadata: Zu
          }, null, Yu), (0, su.e)(null, null, qu, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: uu => "autoUpdateExtends" in uu,
              get: uu => uu.autoUpdateExtends,
              set: (uu, Eu) => {
                uu.autoUpdateExtends = Eu
              }
            },
            metadata: Zu
          }, hu, Du), (0, su.e)(null, null, fu, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: uu => "autoCalcShadowZBounds" in uu,
              get: uu => uu.autoCalcShadowZBounds,
              set: (uu, Eu) => {
                uu.autoCalcShadowZBounds = Eu
              }
            },
            metadata: Zu
          }, gu, Mu), (0, su.e)(null, null, Cu, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoLeft" in uu,
              get: uu => uu._orthoLeft,
              set: (uu, Eu) => {
                uu._orthoLeft = Eu
              }
            },
            metadata: Zu
          }, eu, Gu), (0, su.e)(null, null, bu, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoRight" in uu,
              get: uu => uu._orthoRight,
              set: (uu, Eu) => {
                uu._orthoRight = Eu
              }
            },
            metadata: Zu
          }, pu, wu), (0, su.e)(null, null, cu, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoTop" in uu,
              get: uu => uu._orthoTop,
              set: (uu, Eu) => {
                uu._orthoTop = Eu
              }
            },
            metadata: Zu
          }, Ju, du), (0, su.e)(null, null, Nu, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: uu => "_orthoBottom" in uu,
              get: uu => uu._orthoBottom,
              set: (uu, Eu) => {
                uu._orthoBottom = Eu
              }
            },
            metadata: Zu
          }, au, Pu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      bu = !1;
    bu || (bu = !0, qu.c.AddNodeConstructor("Light_Type_1", ((uu, Eu) => () => new Cu(uu, Zu.t.Zero(), Eu))), (0, fu.f)("BABYLON.DirectionalLight", Cu))
  },
  41847: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => xE
    });
    var su = ju(39056),
      Uu = ju(37514),
      Zu = ju(37494),
      Xu = ju(40399),
      lu = ju(41855),
      qu = ju(37506),
      fu = ju(40535),
      Cu = ju(37680),
      bu = ju(39061),
      cu = ju(39030),
      Nu = ju(37519);
    class Ou {
      constructor() {
        this.direction1 = new Zu.t(0, 1, 0), this.direction2 = new Zu.t(0, 1, 0)
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = (0, Nu.RandomRange)(this.direction1.x, this.direction2.x),
          Xu = (0, Nu.RandomRange)(this.direction1.y, this.direction2.y),
          lu = (0, Nu.RandomRange)(this.direction1.z, this.direction2.z);
        su ? Eu.T6(Uu, Xu, lu) : Zu.t.TransformNormalFromFloatsToRef(Uu, Xu, lu, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, su) {
        su ? Eu.T6(0, 0, 0) : Zu.t.TransformCoordinatesFromFloatsToRef(0, 0, 0, uu, Eu)
      }
      clone() {
        const uu = new Ou;
        return cu.d.DeepCopy(this, uu), uu
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
        return uu.type = this.getClassName(), uu.direction1 = this.direction1.Osu(), uu.direction2 = this.direction2.Osu(), uu
      }
      parse(uu) {
        Zu.t.FromArrayToRef(uu.direction1, 0, this.direction1), Zu.t.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
    class Yu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = uu, this.radiusRange = Eu, this.directionRandomizer = ju
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = ju.position.subtract(uu.getTranslation()).normalize(),
          Xu = (0, Nu.RandomRange)(0, this.directionRandomizer),
          lu = (0, Nu.RandomRange)(0, this.directionRandomizer),
          qu = (0, Nu.RandomRange)(0, this.directionRandomizer);
        Uu.x += Xu, Uu.y += lu, Uu.z += qu, Uu.normalize(), su ? Eu.yJ(Uu) : Zu.t.TransformNormalFromFloatsToRef(Uu.x, Uu.y, Uu.z, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, su) {
        const Uu = this.radius - (0, Nu.RandomRange)(0, this.radius * this.radiusRange),
          Xu = (0, Nu.RandomRange)(0, 1),
          lu = (0, Nu.RandomRange)(0, 2 * Math.PI),
          qu = Math.acos(2 * Xu - 1),
          fu = Uu * Math.cos(lu) * Math.sin(qu),
          Cu = Uu * Math.cos(qu),
          bu = Uu * Math.sin(lu) * Math.sin(qu);
        su ? Eu.T6(fu, Math.abs(Cu), bu) : Zu.t.TransformCoordinatesFromFloatsToRef(fu, Math.abs(Cu), bu, uu, Eu)
      }
      clone() {
        const uu = new Yu(this.radius, this.directionRandomizer);
        return cu.d.DeepCopy(this, uu), uu
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
    class hu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = uu, this.radiusRange = Eu, this.directionRandomizer = ju
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = ju.position.subtract(uu.getTranslation()).normalize(),
          Xu = (0, Nu.RandomRange)(0, this.directionRandomizer),
          lu = (0, Nu.RandomRange)(0, this.directionRandomizer),
          qu = (0, Nu.RandomRange)(0, this.directionRandomizer);
        Uu.x += Xu, Uu.y += lu, Uu.z += qu, Uu.normalize(), su ? Eu.yJ(Uu) : Zu.t.TransformNormalFromFloatsToRef(Uu.x, Uu.y, Uu.z, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, su) {
        const Uu = this.radius - (0, Nu.RandomRange)(0, this.radius * this.radiusRange),
          Xu = (0, Nu.RandomRange)(0, 1),
          lu = (0, Nu.RandomRange)(0, 2 * Math.PI),
          qu = Math.acos(2 * Xu - 1),
          fu = Uu * Math.cos(lu) * Math.sin(qu),
          Cu = Uu * Math.cos(qu),
          bu = Uu * Math.sin(lu) * Math.sin(qu);
        su ? Eu.T6(fu, Cu, bu) : Zu.t.TransformCoordinatesFromFloatsToRef(fu, Cu, bu, uu, Eu)
      }
      clone() {
        const uu = new hu(this.radius, this.directionRandomizer);
        return cu.d.DeepCopy(this, uu), uu
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
    class Du extends hu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zu.t(0, 1, 0),
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zu.t(0, 1, 0);
        super(uu), this.direction1 = Eu, this.direction2 = ju
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = (0, Nu.RandomRange)(this.direction1.x, this.direction2.x),
          Xu = (0, Nu.RandomRange)(this.direction1.y, this.direction2.y),
          lu = (0, Nu.RandomRange)(this.direction1.z, this.direction2.z);
        su ? Eu.T6(Uu, Xu, lu) : Zu.t.TransformNormalFromFloatsToRef(Uu, Xu, lu, uu, Eu)
      }
      clone() {
        const uu = new Du(this.radius, this.direction1, this.direction2);
        return cu.d.DeepCopy(this, uu), uu
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
        return uu.direction1 = this.direction1.Osu(), uu.direction2 = this.direction2.Osu(), uu
      }
      parse(uu) {
        super.parse(uu), Zu.t.FromArrayToRef(uu.direction1, 0, this.direction1), Zu.t.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
    var gu = ju(39022);
    class Mu {
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
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = ju, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = Eu, this.radius = uu
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = ju.position.subtract(uu.getTranslation()).normalize(),
          Xu = (0, Nu.RandomRange)(0, this.directionRandomizer),
          lu = (0, Nu.RandomRange)(0, this.directionRandomizer),
          qu = (0, Nu.RandomRange)(0, this.directionRandomizer);
        Uu.x += Xu, Uu.y += lu, Uu.z += qu, Uu.normalize(), su ? Eu.yJ(Uu) : Zu.t.TransformNormalFromFloatsToRef(Uu.x, Uu.y, Uu.z, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, su) {
        const Uu = (0, Nu.RandomRange)(0, 2 * Math.PI);
        let Xu;
        this.emitFromSpawnPointOnly ? Xu = 1e-4 : (Xu = (0, Nu.RandomRange)(0, this.heightRange), Xu = 1 - Xu * Xu);
        let lu = this._radius - (0, Nu.RandomRange)(0, this._radius * this.radiusRange);
        lu *= Xu;
        const qu = lu * Math.sin(Uu),
          fu = lu * Math.cos(Uu),
          Cu = Xu * this._height;
        if (su) return Eu.x = qu, Eu.y = Cu, void(Eu.z = fu);
        Zu.t.TransformCoordinatesFromFloatsToRef(qu, Cu, fu, uu, Eu)
      }
      clone() {
        const uu = new Mu(this._radius, this._angle, this.directionRandomizer);
        return cu.d.DeepCopy(this, uu), uu
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
    class eu extends Mu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zu.t(0, 1, 0),
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zu.t(0, 1, 0);
        super(uu, Eu), this.direction1 = ju, this.direction2 = su
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = (0, Nu.RandomRange)(this.direction1.x, this.direction2.x),
          Xu = (0, Nu.RandomRange)(this.direction1.y, this.direction2.y),
          lu = (0, Nu.RandomRange)(this.direction1.z, this.direction2.z);
        su ? Eu.T6(Uu, Xu, lu) : Zu.t.TransformNormalFromFloatsToRef(Uu, Xu, lu, uu, Eu)
      }
      clone() {
        const uu = new eu(this.radius, this.angle, this.direction1, this.direction2);
        return cu.d.DeepCopy(this, uu), uu
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
        return uu.direction1 = this.direction1.Osu(), uu.direction2 = this.direction2.Osu(), uu
      }
      parse(uu) {
        super.parse(uu), Zu.t.FromArrayToRef(uu.direction1, 0, this.direction1), Zu.t.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
    class Gu {
      get mesh() {
        return this._mesh
      }
      set mesh(uu) {
        this._mesh !== uu && (this._mesh = uu, uu ? (this._indices = uu.Ysu(), this._positions = uu.getVerticesData(Xu.j.PositionKind), this._normals = uu.getVerticesData(Xu.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Zu.t.Zero(), this._mesh = null, this.direction1 = new Zu.t(0, 1, 0), this.direction2 = new Zu.t(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = uu
      }
      startDirectionFunction(uu, Eu, ju, su) {
        if (this.useMeshNormalsForDirection && this._normals) return void Zu.t.TransformNormalToRef(this._storedNormal, uu, Eu);
        const Uu = (0, Nu.RandomRange)(this.direction1.x, this.direction2.x),
          Xu = (0, Nu.RandomRange)(this.direction1.y, this.direction2.y),
          lu = (0, Nu.RandomRange)(this.direction1.z, this.direction2.z);
        su ? Eu.T6(Uu, Xu, lu) : Zu.t.TransformNormalFromFloatsToRef(Uu, Xu, lu, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, su) {
        if (!this._indices || !this._positions) return;
        const Uu = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Xu = Math.random(),
          lu = Math.random() * (1 - Xu),
          qu = 1 - Xu - lu,
          fu = this._indices[Uu],
          Cu = this._indices[Uu + 1],
          bu = this._indices[Uu + 2],
          cu = Zu.m.dO[0],
          Nu = Zu.m.dO[1],
          Ou = Zu.m.dO[2],
          Yu = Zu.m.dO[3];
        Zu.t.FromArrayToRef(this._positions, 3 * fu, cu), Zu.t.FromArrayToRef(this._positions, 3 * Cu, Nu), Zu.t.FromArrayToRef(this._positions, 3 * bu, Ou), Yu.x = Xu * cu.x + lu * Nu.x + qu * Ou.x, Yu.y = Xu * cu.y + lu * Nu.y + qu * Ou.y, Yu.z = Xu * cu.z + lu * Nu.z + qu * Ou.z, su ? Eu.T6(Yu.x, Yu.y, Yu.z) : Zu.t.TransformCoordinatesFromFloatsToRef(Yu.x, Yu.y, Yu.z, uu, Eu), this.useMeshNormalsForDirection && this._normals && (Zu.t.FromArrayToRef(this._normals, 3 * fu, cu), Zu.t.FromArrayToRef(this._normals, 3 * Cu, Nu), Zu.t.FromArrayToRef(this._normals, 3 * bu, Ou), this._storedNormal.x = Xu * cu.x + lu * Nu.x + qu * Ou.x, this._storedNormal.y = Xu * cu.y + lu * Nu.y + qu * Ou.y, this._storedNormal.z = Xu * cu.z + lu * Nu.z + qu * Ou.z)
      }
      clone() {
        const uu = new Gu(this.mesh);
        return cu.d.DeepCopy(this, uu), uu
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
        return uu.type = this.getClassName(), uu.direction1 = this.direction1.Osu(), uu.direction2 = this.direction2.Osu(), uu.meshId = this.mesh?.id, uu.useMeshNormalsForDirection = this.useMeshNormalsForDirection, uu
      }
      parse(uu, Eu) {
        Zu.t.FromArrayToRef(uu.direction1, 0, this.direction1), Zu.t.FromArrayToRef(uu.direction2, 0, this.direction2), uu.meshId && Eu && (this.mesh = Eu.getLastMeshById(uu.meshId)), this.useMeshNormalsForDirection = uu.useMeshNormalsForDirection
      }
    }
    class pu {
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
        const Eu = this._attractors.indexOf(uu); - 1 !== Eu && this._attractors.splice(Eu, 1)
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
        this._useLogarithmicDepth = uu && this.hV().wO().getCaps().fragmentDepthSupported
      }
      hV() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(uu) {
        switch (uu) {
          case pu.BLENDMODE_MULTIPLYADD:
            return;
          case pu.BLENDMODE_ADD:
            uu = 1;
            break;
          case pu.BLENDMODE_ONEONE:
            uu = 6;
            break;
          case pu.BLENDMODE_STANDARD:
            uu = 2;
            break;
          case pu.BLENDMODE_MULTIPLY:
            uu = 4;
            break;
          case pu.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(uu, Eu, ju) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, uu, Eu, ju), this
      }
      removeEmitRateGradient(uu) {
        return this._removeFactorGradient(this._emitRateGradients, uu), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Zu.t.Zero()
      }
      set direction1(uu) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = uu)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Zu.t.Zero()
      }
      set direction2(uu) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = uu)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Zu.t.Zero()
      }
      set minEmitBox(uu) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = uu)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Zu.t.Zero()
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
      _addFactorGradient(uu, Eu, ju, Uu) {
        const Zu = new su.i(Eu, ju, Uu);
        uu.push(Zu), uu.sort(((uu, Eu) => uu.gradient < Eu.gradient ? -1 : uu.gradient > Eu.gradient ? 1 : 0))
      }
      _removeFactorGradient(uu, Eu) {
        if (!uu) return;
        let ju = 0;
        for (const su of uu) {
          if (su.gradient === Eu) {
            uu.splice(ju, 1);
            break
          }
          ju++
        }
      }
      _removeGradientAndTexture(uu, Eu, ju) {
        if (!Eu) return this;
        let su = 0;
        for (const Uu of Eu) {
          if (Uu.gradient === uu) {
            Eu.splice(su, 1);
            break
          }
          su++
        }
        return ju && ju.dispose(), this
      }
      constructor(uu) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Zu.t.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Zu.t(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = pu.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Zu.p(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Zu.t(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Zu.t.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Cu.g(1, 1, 1, 1), this.color2 = new Cu.g(1, 1, 1, 1), this.colorDead = new Cu.g(0, 0, 0, 1), this.textureMask = new Cu.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new fu.c, this.id = uu, this.name = uu
      }
      createPointEmitter(uu, Eu) {
        const ju = function(uu, Eu) {
          const ju = new Ou;
          return ju.direction1 = uu, ju.direction2 = Eu, ju
        }(uu, Eu);
        return this.particleEmitterType = ju, ju
      }
      createHemisphericEmitter() {
        const uu = function() {
          return new Yu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = uu, uu
      }
      createSphereEmitter() {
        const uu = function() {
          return new hu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = uu, uu
      }
      createDirectedSphereEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zu.t(0, 1, 0),
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zu.t(0, 1, 0);
          return new Du(uu, Eu, ju)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zu.t(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zu.t(0, 1, 0));
        return this.particleEmitterType = uu, uu
      }
      createCylinderEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new gu.e(uu, Eu, ju, su)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = uu, uu
      }
      createDirectedCylinderEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zu.t(0, 1, 0),
            Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zu.t(0, 1, 0);
          return new gu.d(uu, Eu, ju, su, Uu)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zu.t(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zu.t(0, 1, 0));
        return this.particleEmitterType = uu, uu
      }
      createConeEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Mu(uu, Eu)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = uu, uu
      }
      createDirectedConeEmitter() {
        const uu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zu.t(0, 1, 0),
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zu.t(0, 1, 0);
          return new eu(uu, Eu, ju, su)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zu.t(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zu.t(0, 1, 0));
        return this.particleEmitterType = uu, uu
      }
      createBoxEmitter(uu, Eu, ju, su) {
        const Uu = new bu.d;
        return this.particleEmitterType = Uu, this.direction1 = uu, this.direction2 = Eu, this.minEmitBox = ju, this.maxEmitBox = su, Uu
      }
      createMeshEmitter() {
        const uu = function() {
          return new Gu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = uu, uu
      }
    }
    pu.BLENDMODE_ONEONE = 0, pu.BLENDMODE_STANDARD = 1, pu.BLENDMODE_ADD = 2, pu.BLENDMODE_MULTIPLY = 3, pu.BLENDMODE_MULTIPLYADD = 4, pu.BLENDMODE_SUBTRACT = -1;
    class wu {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Cu.g(0, 0, 0, 0), this.currentColor2 = new Cu.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Zu.t.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class Ju {
      constructor(uu) {
        this.particleSystem = uu, this.position = Zu.t.Zero(), this.direction = Zu.t.Zero(), this.color = new Cu.g(0, 0, 0, 0), this.colorStep = new Cu.g(0, 0, 0, 0), this.initialColor = new Cu.g(0, 0, 0, 0), this.colorDead = new Cu.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Zu.p(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new wu, this.id = Ju._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let uu = this.age,
          Eu = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === Eu ? (Eu = 1, uu = this._properties.randomCellOffset) : uu += this._properties.randomCellOffset);
        const ju = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let su;
        su = this._properties.initialSpriteCellLoop ? (0, Nu.Clamp)(uu * Eu % this.lifeTime / this.lifeTime) : (0, Nu.Clamp)(uu * Eu / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + su * ju | 0
      }
      _inheritParticleInfoToSubEmitter(uu) {
        if (uu.particleSystem.emitter.position) {
          const Eu = uu.particleSystem.emitter;
          if (Eu.position.yJ(this.position), uu.inheritDirection) {
            const uu = Zu.m.dO[0];
            this.direction.normalizeToRef(uu), Eu.setDirection(uu, 0, Math.PI / 2)
          }
        } else {
          uu.particleSystem.emitter.yJ(this.position)
        }
        this.direction.scaleToRef(uu.inheritedVelocityAmount / 2, Zu.m.dO[0]), uu.particleSystem._inheritedVelocityOffset.yJ(Zu.m.dO[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const uu of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(uu)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = Ju._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(uu) {
        uu.position.yJ(this.position), this._properties.initialDirection ? uu._properties.initialDirection ? uu._properties.initialDirection.yJ(this._properties.initialDirection) : uu._properties.initialDirection = this._properties.initialDirection.clone() : uu._properties.initialDirection = null, uu.direction.yJ(this.direction), this._properties.localPosition && (uu._properties.localPosition ? uu._properties.localPosition.yJ(this._properties.localPosition) : uu._properties.localPosition = this._properties.localPosition.clone()), uu.color.yJ(this.color), uu.colorStep.yJ(this.colorStep), uu.initialColor.yJ(this.initialColor), uu.colorDead.yJ(this.colorDead), uu.lifeTime = this.lifeTime, uu.age = this.age, uu._properties.randomCellOffset = this._properties.randomCellOffset, uu.size = this.size, uu.scale.yJ(this.scale), uu.angle = this.angle, uu.angularSpeed = this.angularSpeed, uu.particleSystem = this.particleSystem, uu.cellIndex = this.cellIndex, uu.id = this.id, uu._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (uu._properties.currentColorGradient = this._properties.currentColorGradient, uu._properties.currentColor1.yJ(this._properties.currentColor1), uu._properties.currentColor2.yJ(this._properties.currentColor2)), this._properties.currentSizeGradient && (uu._properties.currentSizeGradient = this._properties.currentSizeGradient, uu._properties.currentSize1 = this._properties.currentSize1, uu._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (uu._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, uu._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, uu._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (uu._properties.currentVelocityGradient = this._properties.currentVelocityGradient, uu._properties.currentVelocity1 = this._properties.currentVelocity1, uu._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (uu._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, uu._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, uu._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (uu._properties.currentDragGradient = this._properties.currentDragGradient, uu._properties.currentDrag1 = this._properties.currentDrag1, uu._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (uu._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, uu._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, uu._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (uu.remapData && this.remapData ? uu.remapData.yJ(this.remapData) : uu.remapData = new Zu.u(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (uu._properties.randomNoiseCoordinates1 && uu._properties.randomNoiseCoordinates2 ? (uu._properties.randomNoiseCoordinates1.yJ(this._properties.randomNoiseCoordinates1), uu._properties.randomNoiseCoordinates2.yJ(this._properties.randomNoiseCoordinates2)) : (uu._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), uu._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), uu.metadata = this.metadata
      }
    }
    Ju._Count = 0;
    var du = ju(41319);
    class au {
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
      constructor(uu, Eu, ju, su) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = Eu, this.bR = uu, this._scene = ju, this._host = su, this._activeTargets = [], Eu._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            ZU: this._getCorrectLoopMode()
          }, this._animation.dataType === du.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Zu.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const uu = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, uu)
        }
        if (this.bR instanceof Array) {
          let uu = 0;
          for (const Eu of this.bR) this._preparePath(Eu, uu), this._getOriginalValues(uu), uu++;
          this._targetIsArray = !0
        } else this._preparePath(this.bR), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Uu = Eu.getEvents();
        if (Uu && Uu.length > 0)
          for (const Zu of Uu) this._events.push(Zu._clone());
        this._enableBlending = uu && uu.animationPropertiesOverride ? uu.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = this._animation.targetPropertyPath;
        if (ju.length > 1) {
          let su = uu;
          for (let uu = 0; uu < ju.length - 1; uu++) {
            const Eu = ju[uu];
            if (su = su[Eu], void 0 === su) throw new Error(`Invalid property (${Eu}) in property path (${ju.join(".")})`)
          }
          this._targetPath = ju[ju.length - 1], this._activeTargets[Eu] = su
        } else this._targetPath = ju[0], this._activeTargets[Eu] = uu;
        if (void 0 === this._activeTargets[Eu][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ju.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.bR instanceof Array) {
            let uu = 0;
            for (const Eu of this.bR) void 0 !== this._originalValue[uu] && this._setValue(Eu, this._activeTargets[uu], this._originalValue[uu], -1, uu), uu++
          } else void 0 !== this._originalValue[0] && this._setValue(this.bR, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(uu, Eu) {
        if (this._targetIsArray)
          for (let ju = 0; ju < this.bR.length; ju++) {
            const su = this.bR[ju];
            this._setValue(su, this._activeTargets[ju], uu, Eu, ju)
          } else this._setValue(this.bR, this._directTarget, uu, Eu, 0)
      }
      _getOriginalValues() {
        let uu, Eu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ju = this._activeTargets[Eu];
        if (du.e.InheritOriginalValueFromActiveAnimations) {
          const uu = this._scene._activeAnimatables;
          for (let su = 0; su < uu.length; su++) {
            const Uu = uu[su]._runtimeAnimations;
            for (let uu = 0; uu < Uu.length; uu++) {
              const su = Uu[uu];
              if (su !== this && su._targetPath === this._targetPath)
                for (let uu = 0; uu < su._activeTargets.length; uu++)
                  if (su._activeTargets[uu] === ju && void 0 !== su._originalValue[uu]) return void(su._originalValue[uu] && su._originalValue[uu].clone ? this._originalValue[Eu] = su._originalValue[uu].clone() : this._originalValue[Eu] = su._originalValue[uu])
            }
          }
        }
        uu = ju.getLocalMatrix && "_matrix" === this._targetPath ? ju.getLocalMatrix() : ju[this._targetPath], uu && uu.clone ? this._originalValue[Eu] = uu.clone() : this._originalValue[Eu] = uu
      }
      _registerTargetForLateAnimationBinding(uu, Eu) {
        const ju = uu.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(ju), ju._lateAnimationHolders || (ju._lateAnimationHolders = {}), ju._lateAnimationHolders[uu.targetPath] || (ju._lateAnimationHolders[uu.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: Eu
        }), uu.isAdditive ? (ju._lateAnimationHolders[uu.targetPath].additiveAnimations.push(uu), ju._lateAnimationHolders[uu.targetPath].totalAdditiveWeight += uu.weight) : (ju._lateAnimationHolders[uu.targetPath].animations.push(uu), ju._lateAnimationHolders[uu.targetPath].totalWeight += uu.weight)
      }
      _setValue(uu, Eu, ju, su, Uu) {
        const Xu = this._scene._animationWrites,
          lu = this._scene._animationWriteCount++;
        let qu = Xu[lu];
        if (qu || (qu = Xu[lu] = {
            runtimeAnimation: this,
            target: uu,
            weight: su,
            additive: !1,
            blendingFactor: 1,
            uh: !1
          }), qu.runtimeAnimation = this, qu.target = uu, qu.weight = su, qu.additive = this.isAdditive, qu.uh = !1, this._currentActiveTarget = Eu, this._weight = su, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const uu = Eu[this._targetPath];
            uu.clone ? this._originalBlendValue = uu.clone() : this._originalBlendValue = uu
          }
          this._originalBlendValue.m ? du.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Zu.e.DecomposeLerpToRef(this._originalBlendValue, ju, this._blendingFactor, this._currentValue) : this._currentValue = Zu.e.DecomposeLerp(this._originalBlendValue, ju, this._blendingFactor) : this._currentValue ? Zu.e.LerpToRef(this._originalBlendValue, ju, this._blendingFactor, this._currentValue) : this._currentValue = Zu.e.Lerp(this._originalBlendValue, ju, this._blendingFactor) : this._currentValue = du.e._UniversalLerp(this._originalBlendValue, ju, this._blendingFactor);
          const su = uu && uu.animationPropertiesOverride ? uu.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          qu.blendingFactor = this._blendingFactor, this._blendingFactor += su
        } else qu.blendingFactor = 1, this._currentValue ? this._currentValue.yJ ? this._currentValue.yJ(ju) : this._currentValue = ju : this._currentValue = ju?.clone ? ju.clone() : ju; - 1 !== su ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Uu]) : this._animationState.ZU === du.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Uu], Eu[this._targetPath]) : Eu[this._targetPath] = this._originalValue[Uu] + this._currentValue : Eu[this._targetPath] = this._currentValue, uu.tEu && uu.tEu(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.bR && this.bR.animationPropertiesOverride) {
          return "MorphTarget" === this.bR.getClassName?.() && null == this.bR._animationPropertiesOverride ? this._animation.ZU : this.bR.animationPropertiesOverride.ZU
        }
        return this._animation.ZU
      }
      goToFrame(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const ju = this._animation.getKeys();
        uu < ju[0].frame ? uu = ju[0].frame : uu > ju[ju.length - 1].frame && (uu = ju[ju.length - 1].frame);
        const su = this._events;
        if (su.length)
          for (let Zu = 0; Zu < su.length; Zu++) su[Zu].onlyOnce || (su[Zu].isDone = su[Zu].frame < uu);
        this._currentFrame = uu;
        const Uu = this._animation._interpolate(uu, this._animationState);
        this.setValue(Uu, Eu)
      }
      _prepareForSpeedRatioChange(uu) {
        const Eu = this._previousElapsedTime * (this._animation.framePerSecond * uu) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - Eu
      }
      animate(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Xu = this._animation,
          lu = Xu.targetPropertyPath;
        if (!lu || lu.length < 1) return this._stopped = !0, !1;
        let qu, fu = !0;
        const Cu = this._events;
        let bu;
        if (this._coreRuntimeAnimation) bu = ju - Eu, qu = this._coreRuntimeAnimation.currentFrame, this._currentFrame = qu, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Zu;
          (Eu < this._minFrame || Eu > this._maxFrame) && (Eu = this._minFrame), (ju < this._minFrame || ju > this._maxFrame) && (ju = this._maxFrame), bu = ju - Eu;
          let lu = uu * (Xu.framePerSecond * Uu) / 1e3 + this._absoluteFrameOffset,
            cu = 0,
            Nu = !1;
          const Ou = su && this._animationState.ZU === du.e.ANIMATIONLOOPMODE_YOYO;
          if (Ou) {
            const uu = (lu - Eu) / bu,
              ju = Math.sin(uu * Math.PI);
            lu = Math.abs(ju) * bu + Eu;
            const su = ju >= 0 ? 1 : -1;
            this._yoyoDirection !== su && (Nu = !0), this._yoyoDirection = su
          }
          if (this._previousElapsedTime = uu, this._previousAbsoluteFrame = lu, !su && ju >= Eu && (lu >= bu && Uu > 0 || lu <= 0 && Uu < 0)) fu = !1, cu = Xu.evaluate(ju);
          else if (!su && Eu >= ju && (lu <= bu && Uu < 0 || lu >= 0 && Uu > 0)) fu = !1, cu = Xu.evaluate(Eu);
          else if (this._animationState.ZU !== du.e.ANIMATIONLOOPMODE_CYCLE) {
            const uu = ju.toString() + Eu.toString();
            if (!this._offsetsCache[uu]) {
              this._animationState.repeatCount = 0, this._animationState.ZU = du.e.ANIMATIONLOOPMODE_CYCLE;
              const su = Xu._interpolate(Eu, this._animationState),
                Uu = Xu._interpolate(ju, this._animationState);
              switch (this._animationState.ZU = this._getCorrectLoopMode(), Xu.dataType) {
                case du.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[uu] = Uu - su;
                  break;
                case du.e.ANIMATIONTYPE_QUATERNION:
                case du.e.ANIMATIONTYPE_VECTOR3:
                case du.e.ANIMATIONTYPE_VECTOR2:
                case du.e.ANIMATIONTYPE_SIZE:
                case du.e.ANIMATIONTYPE_COLOR3:
                case du.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[uu] = Uu.subtract(su)
              }
              this._highLimitsCache[uu] = Uu
            }
            cu = this._highLimitsCache[uu], Zu = this._offsetsCache[uu]
          }
          if (void 0 === Zu) switch (Xu.dataType) {
            case du.e.ANIMATIONTYPE_FLOAT:
              Zu = 0;
              break;
            case du.e.ANIMATIONTYPE_QUATERNION:
              Zu = du.o;
              break;
            case du.e.ANIMATIONTYPE_VECTOR3:
              Zu = du.u;
              break;
            case du.e.ANIMATIONTYPE_VECTOR2:
              Zu = du.t;
              break;
            case du.e.ANIMATIONTYPE_SIZE:
              Zu = du.r;
              break;
            case du.e.ANIMATIONTYPE_COLOR3:
              Zu = du.g;
              break;
            case du.e.ANIMATIONTYPE_COLOR4:
              Zu = du.k
          }
          const Yu = this._host ? this._host.syncRoot : null;
          let hu, Du = this._playbackFrames,
            gu = !1;
          if (Yu) {
            const uu = Yu.toFrame - Yu.fromFrame,
              ju = Yu.masterFrame,
              su = (ju - Yu.fromFrame) / uu;
            qu = Eu + bu * su;
            const Uu = Yu.getAnimations()[0];
            if (Uu && 0 !== uu) {
              const uu = bu * su,
                Eu = Uu._playbackTo - Uu._playbackFrom;
              if (0 !== Eu && Uu._playbackFrom <= Yu.fromFrame && Uu._playbackTo >= Yu.toFrame) {
                Du = bu * Math.round((Uu._playbackFrames - (Uu._currentFrame - Uu._playbackFrom)) / Eu) + uu
              } else gu = (ju - this._playbackSyncMasterFrame) * (Uu._playbackFrames - this._playbackSyncMasterPlayed) < 0, Du = uu;
              gu = gu || Uu._playbackJumped, this._playbackSyncMasterPlayed = Uu._playbackFrames, this._playbackSyncMasterFrame = ju
            }
          } else qu = lu > 0 && Eu > ju || lu < 0 && Eu < ju ? fu && 0 !== bu ? ju + lu % bu : Eu : fu && 0 !== bu ? Eu + lu % bu : ju;
          if (!Ou && (Uu > 0 && this.currentFrame > qu || Uu < 0 && this.currentFrame < qu) || Ou && Nu) {
            this._onLoop();
            for (let uu = 0; uu < Cu.length; uu++) Cu[uu].onlyOnce || (Cu[uu].isDone = !1);
            this._animationState.key = Uu > 0 ? 0 : Xu.getKeys().length - 1
          }
          if (this._currentFrame = qu, this._animationState.repeatCount = 0 === bu ? 0 : lu / bu | 0, this._animationState.highLimitValue = cu, this._animationState.offsetValue = Zu, this._playbackFrom = Eu, this._playbackTo = ju, this._playbackJumped = gu, this._playbackSyncRoot = Yu, Yu) hu = Du;
          else if (fu) hu = Ou ? qu === Eu && lu === ju ? bu : qu - Eu : lu;
          else {
            const uu = 0 !== bu ? Math.floor(this._playbackFrames / bu) : 0;
            hu = (qu === ju ? uu + 1 : uu) * bu
          }
          this._playbackFrames = hu, this._playbackProgress = this._animationState.ZU === du.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? bu : hu
        }
        const cu = Xu._interpolate(qu, this._animationState);
        if (this.setValue(cu, Zu), Cu.length)
          for (let Nu = 0; Nu < Cu.length; Nu++)
            if (bu >= 0 && qu >= Cu[Nu].frame && Cu[Nu].frame >= Eu || bu < 0 && qu <= Cu[Nu].frame && Cu[Nu].frame <= Eu) {
              const uu = Cu[Nu];
              uu.isDone || (uu.onlyOnce && (Cu.splice(Nu, 1), Nu--), uu.isDone = !0, uu.action(qu))
            } return fu || (this._stopped = !0), fu
      }
    }
    var Pu = ju(40170);
    class ou {
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
        for (let Eu = 0; Eu < this._runtimeAnimations.length; Eu++) {
          this._runtimeAnimations[Eu]._prepareForSpeedRatioChange(uu)
        }
        this._speedRatio = uu, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Zu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          lu = arguments.length > 6 ? arguments[6] : void 0,
          qu = arguments.length > 7 ? arguments[7] : void 0,
          fu = arguments.length > 8 ? arguments[8] : void 0,
          Cu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          bu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = Eu, this.fromFrame = ju, this.toFrame = su, this.loopAnimation = Zu, this.onAnimationEnd = lu, this.onAnimationLoop = fu, this.isAdditive = Cu, this.playOrder = bu, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.aG = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Uu.d, this.onAnimationLoopObservable = new Uu.d, this._scene = uu, qu && this.appendAnimations(Eu, qu), this._speedRatio = Xu, uu._activeAnimatables.push(this)
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
      appendAnimations(uu, Eu) {
        for (let ju = 0; ju < Eu.length; ju++) {
          const su = Eu[ju],
            Uu = new au(uu, su, this._scene, this);
          Uu._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Uu)
        }
      }
      getAnimationByTargetProperty(uu) {
        const Eu = this._runtimeAnimations;
        for (let ju = 0; ju < Eu.length; ju++)
          if (Eu[ju].animation.targetProperty === uu) return Eu[ju].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(uu) {
        const Eu = this._runtimeAnimations;
        for (let ju = 0; ju < Eu.length; ju++)
          if (Eu[ju].animation.targetProperty === uu) return Eu[ju];
        return null
      }
      reset() {
        const uu = this._runtimeAnimations;
        for (let Eu = 0; Eu < uu.length; Eu++) uu[Eu].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(uu) {
        const Eu = this._runtimeAnimations;
        for (let ju = 0; ju < Eu.length; ju++) Eu[ju].animation.enableBlending = !0, Eu[ju].animation.blendingSpeed = uu
      }
      disableBlending() {
        const uu = this._runtimeAnimations;
        for (let Eu = 0; Eu < uu.length; Eu++) uu[Eu].animation.enableBlending = !1
      }
      goToFrame(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this._runtimeAnimations;
        if (ju[0]) {
          const Eu = ju[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? ju[0].currentFrame;
          const su = 0 === this.speedRatio ? 0 : (uu - this._frameToSyncFromJump) / Eu * 1e3 / this.speedRatio;
          this._manualJumpDelay = -su
        }
        for (let su = 0; su < ju.length; su++) ju[su].goToFrame(uu, Eu ? this._weight : -1);
        this._goToFrame = uu
      }
      get paused() {
        return this.aG
      }
      pause() {
        this.aG || (this.aG = !0)
      }
      restart() {
        this.aG = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (uu || Eu) {
          const Uu = this._scene._activeAnimatables.indexOf(this);
          if (Uu > -1) {
            const Zu = this._runtimeAnimations;
            for (let ju = Zu.length - 1; ju >= 0; ju--) {
              const su = Zu[ju];
              uu && su.animation.name != uu || (Eu && !Eu(su.target) || (su.dispose(), Zu.splice(ju, 1)))
            }
            0 == Zu.length && (ju || this._scene._activeAnimatables.splice(Uu, 1), su || this._raiseOnAnimationEnd())
          }
        } else {
          const uu = this._scene._activeAnimatables.indexOf(this);
          if (uu > -1) {
            ju || this._scene._activeAnimatables.splice(uu, 1);
            const Eu = this._runtimeAnimations;
            for (let uu = 0; uu < Eu.length; uu++) Eu[uu].dispose();
            this._runtimeAnimations.length = 0, su || this._raiseOnAnimationEnd()
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
        if (this.aG) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = uu), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = uu, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += uu - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !ou.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let Eu = !1;
        const ju = this._runtimeAnimations;
        let su;
        for (su = 0; su < ju.length; su++) {
          const Uu = ju[su].animate(uu - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          Eu = Eu || Uu
        }
        if (this.animationStarted = Eu, !Eu) {
          if (this.disposeOnEnd)
            for (su = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(su, 1), su = 0; su < ju.length; su++) ju[su].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return Eu
      }
    }

    function ku(uu) {
      if (0 === uu.totalWeight && 0 === uu.totalAdditiveWeight) return uu.originalValue;
      let Eu = 1;
      const ju = Zu.m.dO[0],
        su = Zu.m.dO[1],
        Uu = Zu.m.Quaternion[0];
      let Xu = 0;
      const lu = uu.animations[0],
        qu = uu.originalValue;
      let fu, Cu = !1;
      if (uu.totalWeight < 1) fu = 1 - uu.totalWeight, qu.decompose(su, Uu, ju);
      else {
        if (Xu = 1, Eu = uu.totalWeight, fu = lu.weight / Eu, 1 == fu) {
          if (!uu.totalAdditiveWeight) return lu.currentValue;
          Cu = !0
        }
        lu.currentValue.decompose(su, Uu, ju)
      }
      if (!Cu) {
        su.scaleInPlace(fu), ju.scaleInPlace(fu), Uu.scaleInPlace(fu);
        for (let lu = Xu; lu < uu.animations.length; lu++) {
          const Xu = uu.animations[lu];
          if (0 === Xu.weight) continue;
          fu = Xu.weight / Eu;
          const qu = Zu.m.dO[2],
            Cu = Zu.m.dO[3],
            bu = Zu.m.Quaternion[1];
          Xu.currentValue.decompose(Cu, bu, qu), Cu.scaleAndAddToRef(fu, su), bu.scaleAndAddToRef(Zu.i.Dot(Uu, bu) > 0 ? fu : -fu, Uu), qu.scaleAndAddToRef(fu, ju)
        }
        Uu.normalize()
      }
      for (let cu = 0; cu < uu.additiveAnimations.length; cu++) {
        const Eu = uu.additiveAnimations[cu];
        if (0 === Eu.weight) continue;
        const Xu = Zu.m.dO[2],
          lu = Zu.m.dO[3],
          qu = Zu.m.Quaternion[1];
        Eu.currentValue.decompose(lu, qu, Xu), lu.multiplyToRef(su, lu), Zu.t.LerpToRef(su, lu, Eu.weight, su), Uu.multiplyToRef(qu, qu), Zu.i.SlerpToRef(Uu, qu, Eu.weight, Uu), Xu.scaleAndAddToRef(Eu.weight, ju)
      }
      const bu = lu ? lu._animationState.workValue : Zu.m.Matrix[0].clone();
      return Zu.e.ComposeToRef(su, Uu, ju, bu), bu
    }

    function mu(uu, Eu) {
      if (0 === uu.totalWeight && 0 === uu.totalAdditiveWeight) return Eu;
      const ju = uu.animations[0],
        su = uu.originalValue;
      let Uu = Eu;
      if (0 === uu.totalWeight && uu.totalAdditiveWeight > 0) Uu.yJ(su);
      else if (1 === uu.animations.length) {
        if (Zu.i.SlerpToRef(su, ju.currentValue, Math.min(1, uu.totalWeight), Uu), 0 === uu.totalAdditiveWeight) return Uu
      } else if (uu.animations.length > 1) {
        let ju, Xu, lu = 1;
        if (uu.totalWeight < 1) {
          const Eu = 1 - uu.totalWeight;
          ju = [], Xu = [], ju.push(su), Xu.push(Eu)
        } else {
          if (2 === uu.animations.length && (Zu.i.SlerpToRef(uu.animations[0].currentValue, uu.animations[1].currentValue, uu.animations[1].weight / uu.totalWeight, Eu), 0 === uu.totalAdditiveWeight)) return Eu;
          ju = [], Xu = [], lu = uu.totalWeight
        }
        for (let Eu = 0; Eu < uu.animations.length; Eu++) {
          const su = uu.animations[Eu];
          ju.push(su.currentValue), Xu.push(su.weight / lu)
        }
        let qu = 0;
        for (let uu = 0; uu < ju.length;) uu ? (qu += Xu[uu], Zu.i.SlerpToRef(Uu, ju[uu], Xu[uu] / qu, Uu), uu++) : (Zu.i.SlerpToRef(ju[uu], ju[uu + 1], Xu[uu + 1] / (Xu[uu] + Xu[uu + 1]), Eu), Uu = Eu, qu = Xu[uu] + Xu[uu + 1], uu += 2)
      }
      for (let Xu = 0; Xu < uu.additiveAnimations.length; Xu++) {
        const Eu = uu.additiveAnimations[Xu];
        0 !== Eu.weight && (Uu.multiplyToRef(Eu.currentValue, Zu.m.Quaternion[0]), Zu.i.SlerpToRef(Uu, Zu.m.Quaternion[0], Eu.weight, Uu))
      }
      return Uu
    }

    function vu(uu, Eu) {
      Eu && (Eu.prototype.copyAnimationRange = function(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new du.e(this.name, "_matrix", uu.animations[0].framePerSecond, du.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Zu = uu.animations[0].getRange(Eu);
        if (!Zu) return !1;
        const Xu = Zu.from,
          lu = Zu.to,
          qu = uu.animations[0].getKeys(),
          fu = uu.length,
          Cu = uu.getParent(),
          bu = this.getParent(),
          cu = su && Cu && fu && this.length && fu !== this.length,
          Nu = cu && bu && Cu ? bu.length / Cu.length : 1,
          Ou = su && !bu && Uu && (1 !== Uu.x || 1 !== Uu.y || 1 !== Uu.z),
          Yu = this.animations[0].getKeys();
        let hu, Du, gu;
        for (let Mu = 0, eu = qu.length; Mu < eu; Mu++) hu = qu[Mu], hu.frame >= Xu && hu.frame <= lu && (su ? (gu = hu.value.clone(), cu ? (Du = gu.getTranslation(), gu.setTranslation(Du.scaleInPlace(Nu))) : Ou && Uu ? (Du = gu.getTranslation(), gu.setTranslation(Du.multiplyInPlace(Uu))) : gu = hu.value) : gu = hu.value, Yu.push({
          frame: hu.frame + ju,
          value: gu
        }));
        return this.animations[0].createRange(Eu, Xu + ju, lu + ju), !0
      }), uu && (uu.prototype._animate = function(uu) {
        const Eu = this._animationWrites,
          ju = this._animationWriteCount;
        let su = 0;
        for (let Zu = this._animationStepWriteCount; Zu < ju; Zu++) {
          const uu = Eu[Zu];
          uu.uh && -1 === uu.weight || (uu.uh = !0, Eu[Zu] = Eu[su], Eu[su] = uu, su++)
        }
        for (let Zu = su; Zu < ju; Zu++) {
          const uu = Eu[Zu];
          uu.runtimeAnimation = null, uu.target = null
        }
        if (this._animationWriteCount = su, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Uu = Pu.c.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Uu
        }
        this.deltaTime = void 0 !== uu ? uu : this.useConstantAnimationDeltaTime ? 16 : (Uu - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Uu;
        const Xu = this._activeAnimatables;
        if (0 === Xu.length) return;
        this._animationTime += this.deltaTime;
        const lu = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Zu = 0; Zu < Xu.length; Zu++) {
          const uu = Xu[Zu];
          !uu._animate(lu) && uu.disposeOnEnd && Zu--
        }! function(uu) {
          if (uu._registeredForLateAnimationBindings.length) {
            for (let Eu = 0; Eu < uu._registeredForLateAnimationBindings.length; Eu++) {
              const ju = uu._registeredForLateAnimationBindings.data[Eu];
              for (const uu in ju._lateAnimationHolders) {
                const Eu = ju._lateAnimationHolders[uu],
                  su = Eu.animations[0],
                  Uu = Eu.originalValue;
                if (void 0 === Uu || null === Uu) continue;
                const Xu = du.e.AllowMatrixDecomposeForInterpolation && Uu.m;
                let lu = ju[uu];
                if (Xu) lu = ku(Eu);
                else if (void 0 !== Uu.w) lu = mu(Eu, lu || Zu.i.Identity());
                else {
                  let uu = 0,
                    ju = 1;
                  const Zu = su && su._animationState.ZU === du.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (Eu.totalWeight < 1) lu = Zu ? Uu.clone ? Uu.clone() : Uu : su && Uu.scale ? Uu.scale(1 - Eu.totalWeight) : su ? Uu * (1 - Eu.totalWeight) : Uu.clone ? Uu.clone() : Uu;
                  else if (su) {
                    ju = Eu.totalWeight;
                    const Xu = su.weight / ju;
                    lu = 1 !== Xu ? su.currentValue.scale ? su.currentValue.scale(Xu) : su.currentValue * Xu : (Eu.animations.length > 1 || Eu.additiveAnimations.length > 0) && su.currentValue.clone ? su.currentValue.clone() : su.currentValue, Zu && (lu.addToRef ? lu.addToRef(Uu, lu) : lu += Uu), uu = 1
                  }
                  for (let su = uu; su < Eu.animations.length; su++) {
                    const uu = Eu.animations[su],
                      Uu = uu.weight / ju;
                    Uu && (uu.currentValue.scaleAndAddToRef ? uu.currentValue.scaleAndAddToRef(Uu, lu) : lu += uu.currentValue * Uu)
                  }
                  for (let su = 0; su < Eu.additiveAnimations.length; su++) {
                    const uu = Eu.additiveAnimations[su],
                      ju = uu.weight;
                    ju && (uu.currentValue.scaleAndAddToRef ? uu.currentValue.scaleAndAddToRef(ju, lu) : lu += uu.currentValue * ju)
                  }
                }
                ju[uu] = lu
              }
              ju._lateAnimationHolders = {}
            }
            uu._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, uu.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((uu, Eu) => uu.playOrder - Eu.playOrder))
      }, uu.prototype.beginWeightedAnimation = function(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 ? arguments[7] : void 0,
          qu = arguments.length > 8 ? arguments[8] : void 0,
          fu = arguments.length > 9 ? arguments[9] : void 0,
          Cu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const bu = this.beginAnimation(uu, Eu, ju, Uu, Zu, Xu, lu, !1, qu, fu, Cu);
        return bu.weight = su, bu
      }, uu.prototype.beginAnimation = function(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Zu = arguments.length > 5 ? arguments[5] : void 0,
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qu = arguments.length > 8 ? arguments[8] : void 0,
          fu = arguments.length > 9 ? arguments[9] : void 0,
          Cu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Uu < 0) {
          const uu = Eu;
          Eu = ju, ju = uu, Uu = -Uu
        }
        Eu > ju && (Uu = -Uu), lu && this.stopAnimation(uu, void 0, qu), Xu || (Xu = new ou(this, uu, Eu, ju, su, Uu, Zu, void 0, fu, Cu));
        const bu = !qu || qu(uu);
        if (uu.animations && bu && Xu.appendAnimations(uu, uu.animations), uu.getAnimatables) {
          const Cu = uu.getAnimatables();
          for (let uu = 0; uu < Cu.length; uu++) this.beginAnimation(Cu[uu], Eu, ju, su, Uu, Zu, Xu, lu, qu, fu)
        }
        return Xu.reset(), Xu
      }, uu.prototype.beginHierarchyAnimation = function(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Xu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 ? arguments[7] : void 0,
          qu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          fu = arguments.length > 9 ? arguments[9] : void 0,
          Cu = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const bu = uu.getDescendants(Eu),
          cu = [];
        cu.push(this.beginAnimation(uu, ju, su, Uu, Zu, Xu, lu, qu, fu, void 0, Cu));
        for (const Nu of bu) cu.push(this.beginAnimation(Nu, ju, su, Uu, Zu, Xu, lu, qu, fu, void 0, Cu));
        return cu
      }, uu.prototype.beginDirectAnimation = function(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Zu < 0) {
          const uu = ju;
          ju = su, su = uu, Zu = -Zu
        }
        ju > su && (Zu = -Zu);
        return new ou(this, uu, ju, su, Uu, Zu, arguments.length > 6 ? arguments[6] : void 0, Eu, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, uu.prototype.beginDirectHierarchyAnimation = function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        let fu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Cu = uu.getDescendants(Eu),
          bu = [];
        bu.push(this.beginDirectAnimation(uu, ju, su, Uu, Zu, Xu, lu, qu, fu));
        for (const cu of Cu) bu.push(this.beginDirectAnimation(cu, ju, su, Uu, Zu, Xu, lu, qu, fu));
        return bu
      }, uu.prototype.getAnimatableByTarget = function(uu) {
        for (let Eu = 0; Eu < this._activeAnimatables.length; Eu++)
          if (this._activeAnimatables[Eu].target === uu) return this._activeAnimatables[Eu];
        return null
      }, uu.prototype.getAllAnimatablesByTarget = function(uu) {
        const Eu = [];
        for (let ju = 0; ju < this._activeAnimatables.length; ju++) this._activeAnimatables[ju].target === uu && Eu.push(this._activeAnimatables[ju]);
        return Eu
      }, uu.prototype.stopAnimation = function(uu, Eu, ju) {
        const su = this.getAllAnimatablesByTarget(uu);
        for (const Uu of su) Uu.stop(Eu, ju)
      }, uu.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let uu = 0; uu < this._activeAnimatables.length; uu++) this._activeAnimatables[uu].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const uu of this.animationGroups) uu.stop()
      })
    }
    ou.ProcessPausedAnimatables = !1;
    var Ku, Vu = ju(37498),
      ru = ju(40467),
      Qu = ju(40153);
    class iu extends ru.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(uu) {
        (uu.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.yJ(uu), this._markAsDirtyAndDecompose())
      }
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(uu, Eu.hV(), !1), this.name = uu, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = Eu, this._localMatrix = su?.clone() ?? Zu.e.Identity(), this._restMatrix = Uu ?? this._localMatrix.clone(), this._bindMatrix = Xu ?? this._localMatrix.clone(), this._index = lu, this._absoluteMatrix = new Zu.e, this._absoluteBindMatrix = new Zu.e, this._absoluteInverseBindMatrix = new Zu.e, this._finalMatrix = new Zu.e, Eu.bones.push(this), this.setParent(ju, !1), this._updateAbsoluteBindMatrices()
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
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== uu) {
          if (this.parent) {
            const uu = this.parent.children.indexOf(this); - 1 !== uu && this.parent.children.splice(uu, 1)
          }
          this._parentNode = uu, this.parent && this.parent.children.push(this), Eu && this._updateAbsoluteBindMatrices(), this.tEu()
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
        this._restMatrix.yJ(uu)
      }
      setRestPose(uu) {
        this.setRestMatrix(uu)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(uu) {
        this.y_(uu)
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
          const uu = Zu.m.dO[0],
            Eu = Zu.m.Quaternion[0],
            ju = Zu.m.dO[1];
          this.getRestMatrix().decompose(uu, Eu, ju), this._linkedTransformNode.position.yJ(ju), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Zu.i.Identity(), this._linkedTransformNode.rotationQuaternion.yJ(Eu), this._linkedTransformNode.Of.yJ(uu)
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
        return this._decompose(), this.XEu
      }
      set position(uu) {
        this._decompose(), this.XEu.yJ(uu), this._markAsDirtyAndCompose()
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
      get Of() {
        return this.getScale()
      }
      set Of(uu) {
        this.setScale(uu)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Zu.t.Zero(), this._localRotation = Zu.i.Zero(), this.XEu = Zu.t.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.XEu))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Zu.e.ComposeToRef(this._localScaling, this._localRotation, this.XEu, this._localMatrix)) : this._needToCompose = !1)
      }
      y_(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.yJ(uu), Eu && this._updateAbsoluteBindMatrices(), ju ? this._matrix = uu : this.tEu()
      }
      _updateAbsoluteBindMatrices(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (uu || (uu = this._bindMatrix), this.parent ? uu.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.yJ(uu), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), Eu)
          for (let ju = 0; ju < this.children.length; ju++) this.children[ju]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      tEu() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.tEu(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.tEu(), this._needToDecompose = !0
      }
      _updatePosition(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Uu = this.getLocalMatrix();
        if (0 == Eu) su ? (Uu.addAtIndex(12, uu.x), Uu.addAtIndex(13, uu.y), Uu.addAtIndex(14, uu.z)) : Uu.setTranslationFromFloats(uu.x, uu.y, uu.z);
        else {
          const Eu = iu._TmpMats[0],
            Xu = iu._TmpVecs[0];
          this.parent ? (Eu.yJ(this.parent.getAbsoluteMatrix()), ju && Eu.multiplyToRef(ju.getWorldMatrix(), Eu)) : Zu.e.IdentityToRef(Eu), su && Eu.setTranslationFromFloats(0, 0, 0), Eu.invert(), Zu.t.TransformCoordinatesToRef(uu, Eu, Xu), su ? (Uu.addAtIndex(12, Xu.x), Uu.addAtIndex(13, Xu.y), Uu.addAtIndex(14, Xu.z)) : Uu.setTranslationFromFloats(Xu.x, Xu.y, Xu.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(uu, Eu, ju, !0)
      }
      setPosition(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(uu, Eu, ju, !1)
      }
      setAbsolutePosition(uu, Eu) {
        this.setPosition(uu, 1, Eu)
      }
      scale(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Uu = this.getLocalMatrix(),
          Xu = iu._TmpMats[0];
        Zu.e.ScalingToRef(uu, Eu, ju, Xu), Xu.multiplyToRef(Uu, Uu), Xu.invert();
        for (const Zu of this.children) {
          const su = Zu.getLocalMatrix();
          su.multiplyToRef(Xu, su), su.multiplyAtIndex(12, uu), su.multiplyAtIndex(13, Eu), su.multiplyAtIndex(14, ju), Zu._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), su)
          for (const Zu of this.children) Zu.scale(uu, Eu, ju, su)
      }
      setScale(uu) {
        this._decompose(), this._localScaling.yJ(uu), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(uu) {
        this._decompose(), uu.yJ(this._localScaling)
      }
      setYawPitchRoll(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === su) {
          const Xu = iu._TmpQuat;
          return Zu.i.RotationYawPitchRollToRef(uu, Eu, ju, Xu), void this.setRotationQuaternion(Xu, su, Uu)
        }
        const Xu = iu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Xu, Uu)) return;
        const lu = iu._TmpMats[1];
        Zu.e.RotationYawPitchRollToRef(uu, Eu, ju, lu), Xu.multiplyToRef(lu, lu), this._rotateWithMatrix(lu, su, Uu)
      }
      rotate(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        const Uu = iu._TmpMats[0];
        Uu.setTranslationFromFloats(0, 0, 0), Zu.e.RotationAxisToRef(uu, Eu, Uu), this._rotateWithMatrix(Uu, ju, su)
      }
      setAxisAngle(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === ju) {
          const Uu = iu._TmpQuat;
          return Zu.i.RotationAxisToRef(uu, Eu, Uu), void this.setRotationQuaternion(Uu, ju, su)
        }
        const Uu = iu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Uu, su)) return;
        const Xu = iu._TmpMats[1];
        Zu.e.RotationAxisToRef(uu, Eu, Xu), Uu.multiplyToRef(Xu, Xu), this._rotateWithMatrix(Xu, ju, su)
      }
      setRotation(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(uu.y, uu.x, uu.z, Eu, ju)
      }
      setRotationQuaternion(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Eu) return this._decompose(), this._localRotation.yJ(uu), void this._markAsDirtyAndCompose();
        const su = iu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(su, ju)) return;
        const Uu = iu._TmpMats[1];
        Zu.e.FromQuaternionToRef(uu, Uu), su.multiplyToRef(Uu, Uu), this._rotateWithMatrix(Uu, Eu, ju)
      }
      setRotationMatrix(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === Eu) {
          const su = iu._TmpQuat;
          return Zu.i.FromRotationMatrixToRef(uu, su), void this.setRotationQuaternion(su, Eu, ju)
        }
        const su = iu._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(su, ju)) return;
        const Uu = iu._TmpMats[1];
        Uu.yJ(uu), su.multiplyToRef(uu, Uu), this._rotateWithMatrix(Uu, Eu, ju)
      }
      _rotateWithMatrix(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = this.getLocalMatrix(),
          Uu = su.m[12],
          Zu = su.m[13],
          Xu = su.m[14],
          lu = this.getParent(),
          qu = iu._TmpMats[3],
          fu = iu._TmpMats[4];
        lu && 1 == Eu ? (ju ? (qu.yJ(ju.getWorldMatrix()), lu.getAbsoluteMatrix().multiplyToRef(qu, qu)) : qu.yJ(lu.getAbsoluteMatrix()), fu.yJ(qu), fu.invert(), su.multiplyToRef(qu, su), su.multiplyToRef(uu, su), su.multiplyToRef(fu, su)) : 1 == Eu && ju ? (qu.yJ(ju.getWorldMatrix()), fu.yJ(qu), fu.invert(), su.multiplyToRef(qu, su), su.multiplyToRef(uu, su), su.multiplyToRef(fu, su)) : su.multiplyToRef(uu, su), su.setTranslationFromFloats(Uu, Zu, Xu), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(uu, Eu) {
        const ju = iu._TmpMats[2];
        return uu.yJ(this.getAbsoluteMatrix()), Eu ? (uu.multiplyToRef(Eu.getWorldMatrix(), uu), Zu.e.ScalingToRef(Eu.Of.x, Eu.Of.y, Eu.Of.z, ju)) : Zu.e.IdentityToRef(ju), uu.invert(), !isNaN(uu.m[0]) && (ju.multiplyAtIndex(0, this._scalingDeterminant), uu.multiplyToRef(ju, uu), !0)
      }
      bM() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = Zu.t.Zero();
        return this.getPositionToRef(uu, Eu, ju), ju
      }
      getPositionToRef() {
        let uu = arguments.length > 1 ? arguments[1] : void 0,
          Eu = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const uu = this.getLocalMatrix();
          Eu.x = uu.m[12], Eu.y = uu.m[13], Eu.z = uu.m[14]
        } else {
          const ju = iu._TmpMats[0].yJ(this.getAbsoluteMatrix());
          uu && ju.multiplyToRef(uu.getWorldMatrix(), ju), Eu.x = ju.m[12], Eu.y = ju.m[13], Eu.z = ju.m[14]
        }
      }
      getAbsolutePosition() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const Eu = Zu.t.Zero();
        return this.getPositionToRef(1, uu, Eu), Eu
      }
      getAbsolutePositionToRef(uu, Eu) {
        this.getPositionToRef(1, uu, Eu)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.yJ(this._localMatrix);
          const uu = this._skeleton.getPoseMatrix();
          uu && this._absoluteMatrix.multiplyToRef(uu, this._absoluteMatrix)
        }
        const uu = this.children,
          Eu = uu.length;
        for (let ju = 0; ju < Eu; ju++) uu[ju].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Gy(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = Zu.t.Zero();
        return this.getDirectionToRef(uu, Eu, ju), ju
      }
      getDirectionToRef(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = iu._TmpMats[0].yJ(this.getAbsoluteMatrix());
        Eu && su.multiplyToRef(Eu.getWorldMatrix(), su), Zu.t.TransformNormalToRef(uu, su, ju), ju.normalize()
      }
      getRotation() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = Zu.t.Zero();
        return this.getRotationToRef(uu, Eu, ju), ju
      }
      getRotationToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = iu._TmpQuat;
        this.getRotationQuaternionToRef(uu, Eu, su), su.toEulerAnglesToRef(ju)
      }
      getRotationQuaternion() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = Zu.i.Identity();
        return this.getRotationQuaternionToRef(uu, Eu, ju), ju
      }
      getRotationQuaternionToRef() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Eu = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), Eu.yJ(this._localRotation);
        else {
          const ju = iu._TmpMats[0],
            su = this.getAbsoluteMatrix();
          uu ? su.multiplyToRef(uu.getWorldMatrix(), ju) : ju.yJ(su), ju.multiplyAtIndex(0, this._scalingDeterminant), ju.multiplyAtIndex(1, this._scalingDeterminant), ju.multiplyAtIndex(2, this._scalingDeterminant), ju.decompose(void 0, Eu, void 0)
        }
      }
      getRotationMatrix() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 ? arguments[1] : void 0;
        const ju = Zu.e.Identity();
        return this.getRotationMatrixToRef(uu, Eu, ju), ju
      }
      getRotationMatrixToRef() {
        let uu = arguments.length > 1 ? arguments[1] : void 0,
          Eu = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(Eu);
        else {
          const ju = iu._TmpMats[0],
            su = this.getAbsoluteMatrix();
          uu ? su.multiplyToRef(uu.getWorldMatrix(), ju) : ju.yJ(su), ju.multiplyAtIndex(0, this._scalingDeterminant), ju.multiplyAtIndex(1, this._scalingDeterminant), ju.multiplyAtIndex(2, this._scalingDeterminant), ju.getRotationMatrixToRef(Eu)
        }
      }
      getAbsolutePositionFromLocal(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = Zu.t.Zero();
        return this.getAbsolutePositionFromLocalToRef(uu, Eu, ju), ju
      }
      getAbsolutePositionFromLocalToRef(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = iu._TmpMats[0].yJ(this.getAbsoluteMatrix());
        Eu && su.multiplyToRef(Eu.getWorldMatrix(), su), Zu.t.TransformCoordinatesToRef(uu, su, ju)
      }
      getLocalPositionFromAbsolute(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ju = Zu.t.Zero();
        return this.getLocalPositionFromAbsoluteToRef(uu, Eu, ju), ju
      }
      getLocalPositionFromAbsoluteToRef(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = iu._TmpMats[0].yJ(this.getAbsoluteMatrix());
        Eu && su.multiplyToRef(Eu.getWorldMatrix(), su), su.invert(), Zu.t.TransformCoordinatesToRef(uu, su, ju)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const uu = this._skeleton.bones.indexOf(this);
        if (-1 !== uu && this._skeleton.bones.splice(uu, 1), this._parentNode && this._parentNode.children) {
          const uu = this._parentNode.children,
            Eu = uu.indexOf(this); - 1 !== Eu && uu.splice(Eu, 1)
        }
        super.dispose()
      }
    }
    iu._TmpVecs = (0, Vu.e)(2, Zu.t.Zero), iu._TmpQuat = Zu.i.Identity(), iu._TmpMats = (0, Vu.e)(5, Zu.e.Identity), (Ku = iu.prototype).copyAnimationRange ?? (Ku.copyAnimationRange = (0, Qu.g)("Bone", "copyAnimationRange"));
    var Wu = ju(40350);
    let Su = !1;
    var Iu = ju(40228),
      Fu = ju(40589),
      Bu = ju(40596),
      Lu = ju(40592),
      tu = ju(40381);

    function xu(uu, Eu) {
      const ju = (0, Nu.RandomRange)(0, 1);
      Cu.g.LerpToRef(Eu.color1, Eu.color2, ju, uu.color)
    }

    function Tu(uu, Eu) {
      Eu.colorDead.subtractToRef(uu.color, Eu._colorDiff), Eu._colorDiff.scaleToRef(1 / uu.lifeTime, uu.colorStep)
    }

    function Hu(uu, Eu) {
      uu._properties.currentColorGradient = Eu._colorGradients[0], uu._properties.currentColorGradient.getColorToRef(uu.color), uu._properties.currentColor1.yJ(uu.color), Eu._colorGradients.length > 1 ? Eu._colorGradients[1].getColorToRef(uu._properties.currentColor2) : uu._properties.currentColor2.yJ(uu.color)
    }

    function Au(uu, Eu) {
      const ju = Eu._colorGradients;
      su.m.GetCurrentGradient(Eu._ratio, ju, ((Eu, ju, su) => {
        Eu !== uu._properties.currentColorGradient && (uu._properties.currentColor1.yJ(uu._properties.currentColor2), ju.getColorToRef(uu._properties.currentColor2), uu._properties.currentColorGradient = Eu), Cu.g.LerpToRef(uu._properties.currentColor1, uu._properties.currentColor2, su, uu.color), uu.color.a < 0 && (uu.color.a = 0)
      }))
    }

    function nu(uu, Eu) {
      uu.colorStep.scaleToRef(Eu._scaledUpdateSpeed, Eu._scaledColorStep), uu.color.addInPlace(Eu._scaledColorStep), uu.color.a < 0 && (uu.color.a = 0)
    }

    function yu(uu, Eu) {
      su.m.GetCurrentGradient(Eu._ratio, Eu._angularSpeedGradients, ((Eu, ju, su) => {
        Eu !== uu._properties.currentAngularSpeedGradient && (uu._properties.currentAngularSpeed1 = uu._properties.currentAngularSpeed2, uu._properties.currentAngularSpeed2 = ju.getFactor(), uu._properties.currentAngularSpeedGradient = Eu), uu.angularSpeed = (0, Nu.Lerp)(uu._properties.currentAngularSpeed1, uu._properties.currentAngularSpeed2, su)
      }))
    }

    function zu(uu, Eu) {
      uu.angle += uu.angularSpeed * Eu._scaledUpdateSpeed
    }

    function Ru(uu, Eu) {
      Eu.particleEmitterType.startDirectionFunction(Eu._emitterWorldMatrix, uu.direction, uu, Eu.isLocal, Eu._emitterInverseWorldMatrix)
    }

    function uE(uu, Eu) {
      Eu.startDirectionFunction(Eu._emitterWorldMatrix, uu.direction, uu, Eu.isLocal)
    }

    function EE(uu, Eu) {
      uu._properties.currentVelocityGradient = Eu._velocityGradients[0], uu._properties.currentVelocity1 = uu._properties.currentVelocityGradient.getFactor(), Eu._velocityGradients.length > 1 ? uu._properties.currentVelocity2 = Eu._velocityGradients[1].getFactor() : uu._properties.currentVelocity2 = uu._properties.currentVelocity1
    }

    function jE(uu, Eu) {
      uu._properties.currentLimitVelocityGradient = Eu._limitVelocityGradients[0], uu._properties.currentLimitVelocity1 = uu._properties.currentLimitVelocityGradient.getFactor(), Eu._limitVelocityGradients.length > 1 ? uu._properties.currentLimitVelocity2 = Eu._limitVelocityGradients[1].getFactor() : uu._properties.currentLimitVelocity2 = uu._properties.currentLimitVelocity1
    }

    function sE(uu, Eu) {
      su.m.GetCurrentGradient(Eu._ratio, Eu._velocityGradients, ((Eu, ju, su) => {
        Eu !== uu._properties.currentVelocityGradient && (uu._properties.currentVelocity1 = uu._properties.currentVelocity2, uu._properties.currentVelocity2 = ju.getFactor(), uu._properties.currentVelocityGradient = Eu), uu._properties.directionScale *= (0, Nu.Lerp)(uu._properties.currentVelocity1, uu._properties.currentVelocity2, su)
      }))
    }

    function UE(uu, Eu) {
      su.m.GetCurrentGradient(Eu._ratio, Eu._limitVelocityGradients, ((ju, su, Uu) => {
        ju !== uu._properties.currentLimitVelocityGradient && (uu._properties.currentLimitVelocity1 = uu._properties.currentLimitVelocity2, uu._properties.currentLimitVelocity2 = su.getFactor(), uu._properties.currentLimitVelocityGradient = ju);
        const Zu = (0, Nu.Lerp)(uu._properties.currentLimitVelocity1, uu._properties.currentLimitVelocity2, Uu);
        uu.direction.length() > Zu && uu.direction.scaleInPlace(Eu.limitVelocityDamping)
      }))
    }

    function ZE(uu) {
      uu.direction.scaleToRef(uu._properties.directionScale, uu._properties.scaledDirection)
    }

    function XE(uu, Eu) {
      Eu.particleEmitterType.startPositionFunction(Eu._emitterWorldMatrix, uu.position, uu, Eu.isLocal)
    }

    function lE(uu, Eu) {
      Eu.startPositionFunction(Eu._emitterWorldMatrix, uu.position, uu, Eu.isLocal)
    }

    function qE(uu, Eu) {
      uu._properties.localPosition ? uu._properties.localPosition.yJ(uu.position) : uu._properties.localPosition = uu.position.clone(), Zu.t.TransformCoordinatesToRef(uu._properties.localPosition, Eu._emitterWorldMatrix, uu.position)
    }

    function fE(uu, Eu) {
      Eu.isLocal && uu._properties.localPosition ? (uu._properties.localPosition.addInPlace(uu._properties.scaledDirection), Zu.t.TransformCoordinatesToRef(uu._properties.localPosition, Eu._emitterWorldMatrix, uu.position)) : uu.position.addInPlace(uu._properties.scaledDirection)
    }

    function CE(uu, Eu) {
      uu._properties.currentDragGradient = Eu._dragGradients[0], uu._properties.currentDrag1 = uu._properties.currentDragGradient.getFactor(), Eu._dragGradients.length > 1 ? uu._properties.currentDrag2 = Eu._dragGradients[1].getFactor() : uu._properties.currentDrag2 = uu._properties.currentDrag1
    }

    function bE(uu, Eu) {
      su.m.GetCurrentGradient(Eu._ratio, Eu._dragGradients, ((Eu, ju, su) => {
        Eu !== uu._properties.currentDragGradient && (uu._properties.currentDrag1 = uu._properties.currentDrag2, uu._properties.currentDrag2 = ju.getFactor(), uu._properties.currentDragGradient = Eu);
        const Uu = (0, Nu.Lerp)(uu._properties.currentDrag1, uu._properties.currentDrag2, su);
        uu._properties.scaledDirection.scaleInPlace(1 - Uu)
      }))
    }

    function cE(uu, Eu) {
      uu._properties.randomNoiseCoordinates1 && uu._properties.randomNoiseCoordinates2 ? (uu._properties.randomNoiseCoordinates1.T6(Math.random(), Math.random(), Math.random()), uu._properties.randomNoiseCoordinates2.T6(Math.random(), Math.random(), Math.random())) : (uu._properties.randomNoiseCoordinates1 = new Zu.t(Math.random(), Math.random(), Math.random()), uu._properties.randomNoiseCoordinates2 = new Zu.t(Math.random(), Math.random(), Math.random()))
    }

    function NE(uu, Eu) {
      const ju = Eu._noiseTextureData,
        su = Eu._noiseTextureSize;
      if (ju && su && uu._properties.randomNoiseCoordinates1 && uu._properties.randomNoiseCoordinates2) {
        const Uu = Eu._fetchR(uu._properties.randomNoiseCoordinates1.x, uu._properties.randomNoiseCoordinates1.y, su.width, su.height, ju),
          Xu = Eu._fetchR(uu._properties.randomNoiseCoordinates1.z, uu._properties.randomNoiseCoordinates2.x, su.width, su.height, ju),
          lu = Eu._fetchR(uu._properties.randomNoiseCoordinates2.y, uu._properties.randomNoiseCoordinates2.z, su.width, su.height, ju),
          qu = Zu.m.dO[0],
          fu = Zu.m.dO[1];
        qu.T6((2 * Uu - 1) * Eu.noiseStrength.x, (2 * Xu - 1) * Eu.noiseStrength.y, (2 * lu - 1) * Eu.noiseStrength.z), qu.scaleToRef(Eu._tempScaledUpdateSpeed, fu), uu.direction.addInPlace(fu)
      }
    }

    function OE(uu, Eu) {
      Eu.gravity.scaleToRef(Eu._tempScaledUpdateSpeed, Eu._scaledGravity), uu.direction.addInPlace(Eu._scaledGravity)
    }

    function YE(uu, Eu) {
      uu.size = (0, Nu.RandomRange)(Eu.minSize, Eu.maxSize), uu.scale.T6((0, Nu.RandomRange)(Eu.minScaleX, Eu.maxScaleX), (0, Nu.RandomRange)(Eu.minScaleY, Eu.maxScaleY))
    }

    function hE(uu, Eu) {
      uu._properties.currentSizeGradient = Eu._sizeGradients[0], uu._properties.currentSize1 = uu._properties.currentSizeGradient.getFactor(), uu.size = uu._properties.currentSize1, Eu._sizeGradients.length > 1 ? uu._properties.currentSize2 = Eu._sizeGradients[1].getFactor() : uu._properties.currentSize2 = uu._properties.currentSize1, uu.scale.T6((0, Nu.RandomRange)(Eu.minScaleX, Eu.maxScaleX), (0, Nu.RandomRange)(Eu.minScaleY, Eu.maxScaleY))
    }

    function DE(uu, Eu) {
      const ju = Eu._actualFrame / Eu.targetStopDuration;
      su.m.GetCurrentGradient(ju, Eu._startSizeGradients, ((ju, su, Uu) => {
        ju !== Eu._currentStartSizeGradient && (Eu._currentStartSize1 = Eu._currentStartSize2, Eu._currentStartSize2 = su.getFactor(), Eu._currentStartSizeGradient = ju);
        const Zu = (0, Nu.Lerp)(Eu._currentStartSize1, Eu._currentStartSize2, Uu);
        uu.scale.scaleInPlace(Zu)
      }))
    }

    function gE(uu, Eu) {
      su.m.GetCurrentGradient(Eu._ratio, Eu._sizeGradients, ((Eu, ju, su) => {
        Eu !== uu._properties.currentSizeGradient && (uu._properties.currentSize1 = uu._properties.currentSize2, uu._properties.currentSize2 = ju.getFactor(), uu._properties.currentSizeGradient = Eu), uu.size = (0, Nu.Lerp)(uu._properties.currentSize1, uu._properties.currentSize2, su)
      }))
    }

    function ME(uu, Eu) {
      uu.remapData = new Zu.u(0, 1, 0, 1)
    }

    function eE(uu, Eu) {
      Eu._colorRemapGradients && Eu._colorRemapGradients.length > 0 && su.m.GetCurrentGradient(Eu._ratio, Eu._colorRemapGradients, ((Eu, ju, su) => {
        const Uu = (0, Nu.Lerp)(Eu.factor1, ju.factor1, su),
          Zu = (0, Nu.Lerp)(Eu.factor2, ju.factor2, su);
        uu.remapData.x = Uu, uu.remapData.y = Zu - Uu
      })), Eu._alphaRemapGradients && Eu._alphaRemapGradients.length > 0 && su.m.GetCurrentGradient(Eu._ratio, Eu._alphaRemapGradients, ((Eu, ju, su) => {
        const Uu = (0, Nu.Lerp)(Eu.factor1, ju.factor1, su),
          Zu = (0, Nu.Lerp)(Eu.factor2, ju.factor2, su);
        uu.remapData.z = Uu, uu.remapData.w = Zu - Uu
      }))
    }

    function GE(uu, Eu) {
      const ju = (0, Nu.Clamp)(Eu._actualFrame / Eu.targetStopDuration);
      su.m.GetCurrentGradient(ju, Eu._lifeTimeGradients, ((Eu, su) => {
        const Uu = Eu,
          Zu = su,
          Xu = Uu.getFactor(),
          lu = Zu.getFactor(),
          qu = (ju - Uu.gradient) / (Zu.gradient - Uu.gradient);
        uu.lifeTime = (0, Nu.Lerp)(Xu, lu, qu)
      })), Eu._emitPower = (0, Nu.RandomRange)(Eu.minEmitPower, Eu.maxEmitPower)
    }

    function pE(uu, Eu) {
      uu.lifeTime = (0, Nu.RandomRange)(Eu.minLifeTime, Eu.maxLifeTime), Eu._emitPower = (0, Nu.RandomRange)(Eu.minEmitPower, Eu.maxEmitPower)
    }

    function wE(uu, Eu) {
      0 === Eu._emitPower ? (uu._properties.initialDirection ? uu._properties.initialDirection.yJ(uu.direction) : uu._properties.initialDirection = uu.direction.clone(), uu.direction.set(0, 0, 0)) : (uu._properties.initialDirection = null, uu.direction.scaleInPlace(Eu._emitPower)), uu.direction.addInPlace(Eu._inheritedVelocityOffset)
    }

    function JE(uu, Eu) {
      uu.angularSpeed = (0, Nu.RandomRange)(Eu.minAngularSpeed, Eu.maxAngularSpeed), uu.angle = (0, Nu.RandomRange)(Eu.minInitialRotation, Eu.maxInitialRotation)
    }

    function dE(uu, Eu) {
      uu._properties.currentAngularSpeedGradient = Eu._angularSpeedGradients[0], uu.angularSpeed = uu._properties.currentAngularSpeedGradient.getFactor(), uu._properties.currentAngularSpeed1 = uu.angularSpeed, Eu._angularSpeedGradients.length > 1 ? uu._properties.currentAngularSpeed2 = Eu._angularSpeedGradients[1].getFactor() : uu._properties.currentAngularSpeed2 = uu._properties.currentAngularSpeed1, uu.angle = (0, Nu.RandomRange)(Eu.minInitialRotation, Eu.maxInitialRotation)
    }

    function aE(uu, Eu) {
      uu._properties.initialStartSpriteCellId = Eu.startSpriteCellID, uu._properties.initialEndSpriteCellId = Eu.endSpriteCellID, uu._properties.initialSpriteCellLoop = Eu.spriteCellLoop
    }

    function PE(uu, Eu) {
      uu.previousItem = Eu.previousItem, uu.nextItem = Eu, Eu.previousItem && (Eu.previousItem.nextItem = uu), Eu.previousItem = uu
    }

    function oE(uu, Eu) {
      uu.previousItem = Eu, uu.nextItem = Eu.nextItem, Eu.nextItem && (Eu.nextItem.previousItem = uu), Eu.nextItem = uu
    }

    function kE(uu) {
      uu.previousItem && (uu.previousItem.nextItem = uu.nextItem), uu.nextItem && (uu.nextItem.previousItem = uu.previousItem)
    }
    var mE = ju(40634);
    class vE extends pu {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(uu) {
        this._startDirectionFunction !== uu && (this._startDirectionFunction = uu, this._directionCreation.process = uu ? uE : Ru)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(uu) {
        this._startPositionFunction !== uu && (this._startPositionFunction = uu, this._positionCreation.process = uu ? lE : XE)
      }
      set onDispose(uu) {
        this._onDisposeObserver && this.wV.remove(this._onDisposeObserver), this._onDisposeObserver = this.wV.add(uu)
      }
      get Gw() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(uu) {
        this._useRampGradients !== uu && (this._useRampGradients = uu, this._resetEffect(), uu ? (this._rampCreation = {
          process: ME,
          previousItem: null,
          nextItem: null
        }, oE(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: eE,
          previousItem: null,
          nextItem: null
        }, oE(this._remapGradientProcessing, this._gravityProcessing))) : (kE(this._rampCreation), kE(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(uu) {
        this._isLocal !== uu && (this._isLocal = uu, uu ? (this._isLocalCreation = {
          process: qE,
          previousItem: null,
          nextItem: null
        }, oE(this._isLocalCreation, this._positionCreation)) : kE(this._isLocalCreation))
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
          process: aE,
          previousItem: null,
          nextItem: null
        }, oE(this._sheetCreation, this._colorDeadCreation)) : kE(this._sheetCreation), this._reset())
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[Eu] = new Fu.b(this._engine), this._customWrappers[Eu].effect = uu, this._customWrappers[Eu].drawContext && (this._customWrappers[Eu].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Uu.d), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = uu, !uu) return kE(this._noiseCreation), void kE(this._noiseProcessing);
          this._noiseCreation = {
            process: cE,
            previousItem: null,
            nextItem: null
          }, oE(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: NE,
            previousItem: null,
            nextItem: null
          }, oE(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          fu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        Su || (Su = !0, vu(Wu.f, iu)), (0, Iu.d)(), super(uu), this._emitterInverseWorldMatrix = Zu.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Zu.t, this.wV = new Uu.d, this.onStoppedObservable = new Uu.d, this.onStartedObservable = new Uu.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Cu.g(0, 0, 0, 0), this._colorDiff = new Cu.g(0, 0, 0, 0), this._scaledGravity = Zu.t.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = uu => {}, this.recycleParticle = uu => {
          const Eu = this._particles.pop();
          Eu !== uu && Eu.copyTo(uu), Eu.metadata = null, this._stockParticles.push(Eu)
        }, this._createParticle = () => {
          let uu;
          return 0 !== this._stockParticles.length ? (uu = this._stockParticles.pop(), uu._reset()) : uu = new Ju(this), this._prepareParticle(uu), uu
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = Eu, this._epsilon = lu, ju && "Scene" !== ju.getClassName() ? (this._engine = ju, this.defaultProjectionMatrix = Zu.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = ju || qu.b.LastCreatedScene, this._engine = this._scene.wO(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.WG.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: pE,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: XE,
          previousItem: null,
          nextItem: null
        }, oE(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Ru,
          previousItem: null,
          nextItem: null
        }, oE(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: wE,
          previousItem: null,
          nextItem: null
        }, oE(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: YE,
          previousItem: null,
          nextItem: null
        }, oE(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: JE,
          previousItem: null,
          nextItem: null
        }, oE(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: xu,
          previousItem: null,
          nextItem: null
        }, oE(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Tu,
          previousItem: null,
          nextItem: null
        }, oE(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, fu || (this._colorProcessing = {
          process: nu,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: zu,
          previousItem: null,
          nextItem: null
        }, oE(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: ZE,
          previousItem: null,
          nextItem: null
        }, oE(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: fE,
          previousItem: null,
          nextItem: null
        }, oE(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: OE,
          previousItem: null,
          nextItem: null
        }, oE(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Xu, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Fu.b(this._engine)
        }, this._customWrappers[0].effect = su, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new bu.d, this.updateFunction = uu => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((uu => {
            this._noiseTextureData = uu
          })));
          const Eu = uu === this._particles;
          for (let ju = 0; ju < uu.length; ju++) {
            const su = uu[ju];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Uu = su.age;
            if (su.age += this._tempScaledUpdateSpeed, su.age > su.lifeTime) {
              const uu = su.age - Uu,
                Eu = su.lifeTime - Uu;
              this._tempScaledUpdateSpeed = Eu * this._tempScaledUpdateSpeed / uu, su.age = su.lifeTime
            }
            this._ratio = su.age / su.lifeTime, su._properties.directionScale = this._tempScaledUpdateSpeed;
            let Zu = this._updateQueueStart;
            for (; Zu;) Zu.process(su, this), Zu = Zu.nextItem;
            if (this._isAnimationSheetEnabled && !fu && su.updateCellIndex(), su._inheritParticleInfoToSubEmitters(), su.age >= su.lifeTime) {
              if (this._emitFromParticle(su), su._properties.attachedSubEmitters) {
                for (const uu of su._properties.attachedSubEmitters) uu.particleSystem.disposeOnStop = !0, uu.particleSystem.stop();
                su._properties.attachedSubEmitters = null
              }
              this.recycleParticle(su), Eu && ju--
            } else;
          }
        }
      }
      serialize(uu) {
        throw new Error("Method not implemented.")
      }
      clone(uu, Eu) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = GE : this._lifeTimeCreation.process = pE
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: DE,
          previousItem: null,
          nextItem: null
        }, oE(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (kE(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(uu) {
        this.targetStopDuration !== uu && (this._targetStopDuration = uu, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(uu, Eu, ju) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, uu, Eu, ju), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(uu) {
        return this._removeFactorGradient(this._lifeTimeGradients, uu), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(uu, Eu, ju) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = hE, this._sizeGradientProcessing = {
          process: gE,
          previousItem: null,
          nextItem: null
        }, PE(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, uu, Eu, ju), this
      }
      removeSizeGradient(uu) {
        return this._removeFactorGradient(this._sizeGradients, uu), 0 === this._sizeGradients?.length && (kE(this._sizeGradientProcessing), this._sizeCreation.process = YE), this
      }
      addColorRemapGradient(uu, Eu, ju) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, uu, Eu, ju), this
      }
      removeColorRemapGradient(uu) {
        return this._removeFactorGradient(this._colorRemapGradients, uu), this
      }
      addAlphaRemapGradient(uu, Eu, ju) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, uu, Eu, ju), this
      }
      removeAlphaRemapGradient(uu) {
        return this._removeFactorGradient(this._alphaRemapGradients, uu), this
      }
      addAngularSpeedGradient(uu, Eu, ju) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = dE, this._angularSpeedGradientProcessing = {
          process: yu,
          previousItem: null,
          nextItem: null
        }, PE(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, uu, Eu, ju), this
      }
      removeAngularSpeedGradient(uu) {
        return this._removeFactorGradient(this._angularSpeedGradients, uu), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = JE, kE(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(uu, Eu, ju) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: EE,
          previousItem: null,
          nextItem: null
        }, oE(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: sE,
          previousItem: null,
          nextItem: null
        }, PE(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, uu, Eu, ju), this
      }
      removeVelocityGradient(uu) {
        return this._removeFactorGradient(this._velocityGradients, uu), 0 === this._velocityGradients?.length && (kE(this._velocityCreation), kE(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(uu, Eu, ju) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: jE,
          previousItem: null,
          nextItem: null
        }, oE(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: UE,
          previousItem: null,
          nextItem: null
        }, oE(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, uu, Eu, ju), this
      }
      removeLimitVelocityGradient(uu) {
        return this._removeFactorGradient(this._limitVelocityGradients, uu), 0 === this._limitVelocityGradients?.length && (kE(this._limitVelocityCreation), kE(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(uu, Eu, ju) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: CE,
          previousItem: null,
          nextItem: null
        }, PE(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: bE,
          previousItem: null,
          nextItem: null
        }, PE(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, uu, Eu, ju), this
      }
      removeDragGradient(uu) {
        return this._removeFactorGradient(this._dragGradients, uu), 0 === this._dragGradients?.length && (kE(this._dragCreation), kE(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(uu, Eu, ju) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, uu, Eu, ju), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(uu) {
        return this._removeFactorGradient(this._startSizeGradients, uu), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const uu = new Uint8Array(4 * this._rawTextureWidth),
          Eu = Cu.m.Color3[0];
        for (let ju = 0; ju < this._rawTextureWidth; ju++) {
          const Uu = ju / this._rawTextureWidth;
          su.m.GetCurrentGradient(Uu, this._rampGradients, ((su, Uu, Zu) => {
            Cu.c.LerpToRef(su.color, Uu.color, Zu, Eu), uu[4 * ju] = 255 * Eu.r, uu[4 * ju + 1] = 255 * Eu.g, uu[4 * ju + 2] = 255 * Eu.b, uu[4 * ju + 3] = 255
          }))
        }
        this._rampGradientsTexture = lu.d.CreateRGBATexture(uu, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((uu, Eu) => uu.gradient < Eu.gradient ? -1 : uu.gradient > Eu.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(uu, Eu) {
        this._rampGradients || (this._rampGradients = []);
        const ju = new su.h(uu, Eu);
        return this._rampGradients.push(ju), this._syncRampGradientTexture(), this
      }
      removeRampGradient(uu) {
        return this._removeGradientAndTexture(uu, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(uu, Eu, ju) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Hu, this._colorProcessing.process = Au);
        const Uu = new su.d(uu, Eu, ju);
        return this._colorGradients.push(Uu), this._colorGradients.sort(((uu, Eu) => uu.gradient < Eu.gradient ? -1 : uu.gradient > Eu.gradient ? 1 : 0)), this
      }
      removeColorGradient(uu) {
        if (!this._colorGradients) return this;
        let Eu = 0;
        for (const ju of this._colorGradients) {
          if (ju.gradient === uu) {
            this._colorGradients.splice(Eu, 1);
            break
          }
          Eu++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = xu, this._colorProcessing.process = nu), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const uu of this._drawWrappers)
            if (uu)
              for (const Eu of uu) Eu?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(uu, Eu, ju, su, Uu) {
        return Uu[4 * (((uu = .5 * Math.abs(uu) + .5) * ju % ju | 0) + ((Eu = .5 * Math.abs(Eu) + .5) * su % su | 0) * ju)] / 255
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
          Eu = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * Eu), this._vertexBuffer = new Xu.b(uu, this._vertexData, !0, Eu);
        let ju = 0;
        const su = this._vertexBuffer.createVertexBuffer(Xu.j.PositionKind, ju, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Xu.j.PositionKind] = su, ju += 3;
        const Uu = this._vertexBuffer.createVertexBuffer(Xu.j.ColorKind, ju, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Xu.j.ColorKind] = Uu, ju += 4;
        const Zu = this._vertexBuffer.createVertexBuffer("angle", ju, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Zu, ju += 1;
        const lu = this._vertexBuffer.createVertexBuffer("size", ju, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = lu, ju += 2, this._isAnimationSheetEnabled) {
          const uu = this._vertexBuffer.createVertexBuffer("cellIndex", ju, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = uu, ju += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const uu = this._vertexBuffer.createVertexBuffer("direction", ju, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = uu, ju += 3
        }
        if (this._useRampGradients) {
          const uu = this._vertexBuffer.createVertexBuffer("remapData", ju, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = uu, ju += 4
        }
        let qu;
        if (this._useInstancing) {
          const Eu = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Xu.b(uu, Eu, !1, 2), qu = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else qu = this._vertexBuffer.createVertexBuffer("offset", ju, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = qu, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const uu = [],
          Eu = [];
        let ju = 0;
        for (let su = 0; su < this._capacity; su++) uu.push(ju), uu.push(ju + 1), uu.push(ju + 2), uu.push(ju), uu.push(ju + 2), uu.push(ju + 3), Eu.push(ju, ju + 1, ju + 1, ju + 2, ju + 2, ju + 3, ju + 3, ju, ju, ju + 3), ju += 4;
        this._indexBuffer = this._engine.createIndexBuffer(uu), this._linesIndexBuffer = this._engine.createIndexBuffer(Eu)
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
              for (let Eu = 0; Eu < this.preWarmCycles; Eu++) this.animate(!0), uu.render()
            }))
          }));
          else
            for (let Eu = 0; Eu < this.preWarmCycles; Eu++) this.animate(!0)
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
      _appendParticleVertex(uu, Eu, ju, su) {
        let Uu = uu * this._vertexBufferSize;
        const Xu = Zu.m.dO[0].yJ(this._scene?.floatingOriginOffset || Zu.t.ZeroReadOnly);
        if (this._vertexData[Uu++] = Eu.position.x + this.worldOffset.x - Xu.x, this._vertexData[Uu++] = Eu.position.y + this.worldOffset.y - Xu.y, this._vertexData[Uu++] = Eu.position.z + this.worldOffset.z - Xu.z, this._vertexData[Uu++] = Eu.color.r, this._vertexData[Uu++] = Eu.color.g, this._vertexData[Uu++] = Eu.color.b, this._vertexData[Uu++] = Eu.color.a, this._vertexData[Uu++] = Eu.angle, this._vertexData[Uu++] = Eu.scale.x * Eu.size, this._vertexData[Uu++] = Eu.scale.y * Eu.size, this._isAnimationSheetEnabled && (this._vertexData[Uu++] = Eu.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Uu++] = Eu.direction.x, this._vertexData[Uu++] = Eu.direction.y, this._vertexData[Uu++] = Eu.direction.z);
        else if (Eu._properties.initialDirection) {
          let uu = Eu._properties.initialDirection;
          this.isLocal && (Zu.t.TransformNormalToRef(uu, this._emitterWorldMatrix, Zu.m.dO[0]), uu = Zu.m.dO[0]), 0 === uu.x && 0 === uu.z && (uu.x = .001), this._vertexData[Uu++] = uu.x, this._vertexData[Uu++] = uu.y, this._vertexData[Uu++] = uu.z
        } else {
          let uu = Eu.direction;
          this.isLocal && (Zu.t.TransformNormalToRef(uu, this._emitterWorldMatrix, Zu.m.dO[0]), uu = Zu.m.dO[0]), 0 === uu.x && 0 === uu.z && (uu.x = .001), this._vertexData[Uu++] = uu.x, this._vertexData[Uu++] = uu.y, this._vertexData[Uu++] = uu.z
        }
        this._useRampGradients && Eu.remapData && (this._vertexData[Uu++] = Eu.remapData.x, this._vertexData[Uu++] = Eu.remapData.y, this._vertexData[Uu++] = Eu.remapData.z, this._vertexData[Uu++] = Eu.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === ju ? ju = this._epsilon : 1 === ju && (ju = 1 - this._epsilon), 0 === su ? su = this._epsilon : 1 === su && (su = 1 - this._epsilon)), this._vertexData[Uu++] = ju, this._vertexData[Uu] = su)
      }
      _prepareParticle(uu) {}
      _createNewOnes(uu) {
        let Eu;
        for (let ju = 0; ju < uu && this._particles.length !== this._capacity; ju++) {
          Eu = this._createParticle(), this._particles.push(Eu);
          let uu = this._createQueueStart;
          for (; uu;) uu.process(Eu, this), uu = uu.nextItem;
          Eu._inheritParticleInfoToSubEmitters()
        }
      }
      _update(uu) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const uu = this.emitter;
          this._emitterWorldMatrix = uu.getWorldMatrix()
        } else {
          const uu = this.emitter;
          this._emitterWorldMatrix = Zu.e.Translation(uu.x, uu.y, uu.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(uu)
      }
      static _GetAttributeNamesOrOptions() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = [Xu.j.PositionKind, Xu.j.ColorKind, "angle", "offset", "size"];
        return uu && su.push("cellIndex"), Eu || su.push("direction"), ju && su.push("remapData"), su
      }
      static _GetEffectCreationOptions() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, Bu.e)(su), uu && su.push("particlesInfos"), Eu && su.push("logarithmicDepthConstant"), ju && (su.push("vFogInfos"), su.push("vFogColor")), su
      }
      fillDefines(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, Bu.k)(this, this._scene, uu), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && uu.push("#define FOG")), this._isAnimationSheetEnabled && uu.push("#define ANIMATESHEET"), this.useLogarithmicDepth && uu.push("#define LOGARITHMICDEPTH"), Eu === pu.BLENDMODE_MULTIPLY && uu.push("#define BLENDMULTIPLYMODE"), this.isLocal && uu.push("#define LOCAL"), this._useRampGradients && uu.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (uu.push("#define BILLBOARD"), this.billboardMode) {
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
        ju && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), uu.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(uu, Eu, ju) {
        Eu.push(...vE._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), uu.push(...vE._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), ju.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, tu.f)(uu, this._imageProcessingConfigurationDefines), (0, tu.b)(ju, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(uu) {
        var Eu;
        const ju = this._getCustomDrawWrapper(uu);
        if (ju?.effect) return ju;
        const su = [];
        this.fillDefines(su, uu);
        const Zu = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Xu = mE.c._PrepareStringDefines(Zu, su),
          lu = Xu ? mE.c.GetConfiguration(Zu) : void 0;
        let qu = this._drawWrappers[Zu];
        qu || (qu = this._drawWrappers[Zu] = [], 0 === Zu || this._renderPassObserver || (this._renderPassObserver = ((Eu = this._engine)._onReleaseRenderPassObservable ?? (Eu._onReleaseRenderPassObservable = new Uu.d)).add((uu => {
          const Eu = this._drawWrappers[uu];
          if (Eu) {
            for (const uu of Eu) uu?.dispose();
            delete this._drawWrappers[uu]
          }
        }))));
        let fu = qu[uu];
        fu || (fu = new Fu.b(this._engine), fu.drawContext && (fu.drawContext.useInstancing = this._useInstancing), qu[uu] = fu);
        const Cu = su.join("\n");
        if (fu.defines !== Cu) {
          const uu = [],
            Eu = [],
            ju = [];
          this.fillUniformsAttributesAndSamplerNames(Eu, uu, ju), Xu && (Eu.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== lu?.defines.PREPASS_LOCAL_POSITION_INDEX && Eu.push("inverseEmitterWM", "geometryWorldOffset")), fu.setEffect(this._engine.createEffect("particles", {
            attributes: uu,
            uniformsNames: Eu,
            samplers: ju,
            defines: Cu,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Xu,
            indexParameters: Xu ? {
              buffersCount: lu?._mrtCount ?? 0
            } : void 0
          }, this._engine), Cu)
        }
        return fu
      }
      _bindGeometryRendering(uu) {
        const Eu = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          ju = mE.c.GetConfiguration(Eu);
        if (!ju?._defines) return;
        uu.setFloat("objectId", 0), uu.setInt("meshBlendTag", 0);
        const su = this._scene?.activeCamera;
        if (uu.setFloat2("cameraInfo", su?.minZ ?? 0, su?.maxZ ?? 1), this.isLocal && void 0 !== ju.defines.PREPASS_LOCAL_POSITION_INDEX) {
          uu.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const Eu = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Zu.t.ZeroReadOnly, Zu.m.dO[0]);
          uu.setVector3("geometryWorldOffset", Eu)
        }
      }
      animate() {
        let uu, Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!Eu && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (Eu ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) uu = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const Eu = this._calculateEmitRate();
            uu = Eu * this._scaledUpdateSpeed | 0, this._newPartsExcess += Eu * this._scaledUpdateSpeed - uu
          }
          if (this._newPartsExcess > 1 && (uu += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? uu = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(uu), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !Eu) {
            let uu = 0;
            for (let Eu = 0; Eu < this._particles.length; Eu++) {
              const ju = this._particles[Eu];
              this._appendParticleVertices(uu, ju), uu += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const uu = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  Eu = this._particles.length;
                Eu < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, Eu * uu, this._fixedCapacityHighWaterMark * uu), this._fixedCapacityHighWaterMark = Eu, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const Eu = this._actualFrame / this.targetStopDuration;
          su.m.GetCurrentGradient(Eu, this._emitRateGradients, ((Eu, ju, su) => {
            Eu !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = ju.getFactor(), this._currentEmitRateGradient = Eu), uu = (0, Nu.Lerp)(this._currentEmitRate1, this._currentEmitRate2, su)
          }))
        }
        return uu
      }
      _appendParticleVertices(uu, Eu) {
        this._appendParticleVertex(uu++, Eu, 0, 0), this._useInstancing || (this._appendParticleVertex(uu++, Eu, 1, 0), this._appendParticleVertex(uu++, Eu, 1, 1), this._appendParticleVertex(uu, Eu, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !vE.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ju.e(351).then((() => ju(61533))), ju.e(345).then((() => ju(61542)))])) : await Promise.all([ju.e(334).then((() => ju(61547))), Promise.all([ju.e(327), ju.e(360)]).then((() => ju(61553)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== pu.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(pu.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(pu.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(uu) {
        const Eu = this._getWrapper(uu),
          ju = Eu.effect,
          su = this._engine;
        su.enableEffect(Eu);
        const Uu = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        ju.setTexture("diffuseSampler", this.particleTexture), ju.setMatrix("view", Uu);
        const Xu = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (ju.setMatrix("projection", Xu), this._isAnimationSheetEnabled && this.particleTexture) {
          const uu = this.particleTexture.getBaseSize();
          ju.setFloat3("particlesInfos", this.spriteCellWidth / uu.width, this.spriteCellHeight / uu.height, this.spriteCellWidth / uu.width)
        }
        if (ju.setVector2("translationPivot", this.translationPivot), ju.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const uu = this._scene.activeCamera;
          ju.setVector3("eyePosition", uu.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), ju.setTexture("rampSampler", this._rampGradientsTexture));
        const lu = ju.defines;
        this._scene && ((0, Bu.f)(ju, this, this._scene), this.applyFog && (0, Lu.j)(this._scene, void 0, ju)), lu.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Uu.invertToRef(Zu.m.Matrix[0]), ju.setMatrix("invView", Zu.m.Matrix[0])), ju._multiTarget && this._bindGeometryRendering(ju), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? su.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, ju) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, ju)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? su.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, ju) : su.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, ju), this.useLogarithmicDepth && this._scene && (0, Lu.u)(lu, ju, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(ju), this._setEngineBasedOnBlendMode(uu), ju._multiTarget && mE.c._BindZeroAlphaDiscard(su, ju);
        let qu = !1;
        try {
          mE.c._BindAttachmentsForEffect(su, ju) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(ju), this._useInstancing ? this._scene?.forceWireframe ? su.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : su.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? su.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : su.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), qu = !0)
        } finally {
          mE.c._RestoreAttachments(su)
        }
        return qu ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const uu = this._engine;
        let Eu;
        return uu.setState && (uu.setState(!1), this.forceDepthWrite && uu.setDepthWrite(!0)), Eu = this.blendMode === pu.BLENDMODE_MULTIPLYADD ? this._render(pu.BLENDMODE_MULTIPLY) + this._render(pu.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), Eu
      }
      _onDispose() {}
      dispose() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), uu && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), uu && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(Eu, ju), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const uu = this._scene.WG.indexOf(this);
          uu > -1 && this._scene.WG.splice(uu, 1), this._scene._activeParticleSystems.dispose()
        }
        this.wV.notifyObservers(this), this.wV.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    vE.ForceGLSL = !1;
    var KE, VE = ju(37532);
    ! function(uu) {
      uu[uu.ATTACHED = 0] = "ATTACHED", uu[uu.END = 1] = "END"
    }(KE || (KE = {}));
    class rE {
      constructor(uu) {
        if (this.particleSystem = uu, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !uu.emitter || !uu.emitter.dispose) {
          const Eu = (0, VE.d)("BABYLON.AbstractMesh");
          uu.emitter = new Eu("SubemitterSystemEmitter", uu.hV()), uu._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let uu = this.particleSystem.emitter;
        if (uu) {
          if (uu instanceof Zu.t) uu = uu.clone();
          else if (-1 !== uu.getClassName().indexOf("Mesh")) {
            uu = new((0, VE.d)("BABYLON.Mesh"))("", uu.hV()), uu.isVisible = !1
          }
        } else uu = new Zu.t;
        const Eu = new rE(this.particleSystem.clone(this.particleSystem.name, uu));
        return Eu.particleSystem.name += "Clone", Eu.type = this.type, Eu.inheritDirection = this.inheritDirection, Eu.inheritedVelocityAmount = this.inheritedVelocityAmount, Eu.particleSystem._disposeEmitterOnDispose = !0, Eu.particleSystem.disposeOnStop = !0, Eu
      }
      serialize() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = {};
        return Eu.type = this.type, Eu.inheritDirection = this.inheritDirection, Eu.inheritedVelocityAmount = this.inheritedVelocityAmount, Eu.particleSystem = this.particleSystem.serialize(uu), Eu
      }
      static _ParseParticleSystem(uu, Eu, ju) {
        throw (0, Qu.h)("ParseParticle")
      }
      static Parse(uu, Eu, ju) {
        const su = uu.particleSystem,
          Uu = new rE(rE._ParseParticleSystem(su, Eu, ju, !0));
        return Uu.type = uu.type, Uu.inheritDirection = uu.inheritDirection, Uu.inheritedVelocityAmount = uu.inheritedVelocityAmount, Uu.particleSystem._isSubEmitter = !0, Uu
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var QE = ju(40168),
      iE = ju(40272);
    const WE = () => {};
    class SE {
      constructor() {
        this.particlePositionGenerator = WE, this.particleDestinationGenerator = WE, this.particleDirectionGenerator = WE
      }
      startDirectionFunction(uu, Eu, ju, su) {
        const Uu = Zu.m.dO[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== WE) this.particleDirectionGenerator(-1, ju, Uu);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== WE) {
          this.particleDestinationGenerator(-1, ju, Uu);
          const uu = Zu.m.dO[1];
          Uu.subtractToRef(ju.position, uu), uu.scaleToRef(1 / ju.lifeTime, Uu)
        } else Uu.set(0, 0, 0);
        su ? Eu.yJ(Uu) : Zu.t.TransformNormalToRef(Uu, uu, Eu)
      }
      startPositionFunction(uu, Eu, ju, su) {
        const Uu = Zu.m.dO[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== WE ? this.particlePositionGenerator(-1, ju, Uu) : Uu.set(0, 0, 0), su ? Eu.yJ(Uu) : Zu.t.TransformCoordinatesToRef(Uu, uu, Eu)
      }
      clone() {
        const uu = new SE;
        return cu.d.DeepCopy(this, uu), uu
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
    const IE = Zu.t.Zero(),
      FE = Zu.t.Zero(),
      BE = Zu.t.Zero();
    class LE {
      constructor() {
        this.strength = 0, this.position = Zu.t.Zero()
      }
      _processParticle(uu, Eu) {
        this.position.subtractToRef(uu.position, IE);
        const ju = IE.lengthSquared() + 1;
        IE.normalize().scaleToRef(this.strength / ju, FE), FE.scaleToRef(Eu._tempScaledUpdateSpeed, BE), uu.direction.addInPlace(BE)
      }
      serialize() {
        return {
          position: this.position.Osu(),
          strength: this.strength
        }
      }
    }
    const tE = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class xE extends vE {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = uu => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const Eu = Math.floor(Math.random() * this._subEmitters.length);
          for (const ju of this._subEmitters[Eu])
            if (1 === ju.type) {
              const Eu = ju.clone();
              uu._inheritParticleInfoToSubEmitter(Eu), Eu.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(Eu.particleSystem), Eu.particleSystem.start()
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
        this._flowMap !== uu && (this._flowMap = uu, this._flowMapUpdate && (kE(this._flowMapUpdate), this._flowMapUpdate = null), uu && (this._flowMapUpdate = {
          process: uu => {
            const Eu = this.hV()?.getTransformMatrix();
            this._flowMap._processParticle(uu, this.flowMapStrength * this._tempScaledUpdateSpeed, Eu)
          },
          previousItem: null,
          nextItem: null
        }, oE(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(uu) {
        super.addAttractor(uu), 1 === this._attractors.length && (this._attractorUpdate = {
          process: uu => {
            for (const Eu of this._attractors) Eu._processParticle(uu, this)
          },
          previousItem: null,
          nextItem: null
        }, oE(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(uu) {
        super.removeAttractor(uu), 0 === this._attractors.length && this._attractorUpdate && kE(this._attractorUpdate)
      }
      start() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(uu)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const uu of this.subEmitters) uu instanceof xE ? this._subEmitters.push([new rE(uu)]) : uu instanceof rE ? this._subEmitters.push([uu]) : uu instanceof Array && this._subEmitters.push(uu)
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
          const Eu = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          uu._properties.attachedSubEmitters = [];
          for (const ju of Eu)
            if (0 === ju.type) {
              const Eu = ju.clone();
              uu._properties.attachedSubEmitters.push(Eu), Eu.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), uu && this.particles)
          for (const ju of this.particles)
            if (ju._properties.attachedSubEmitters)
              for (let uu = ju._properties.attachedSubEmitters.length - 1; uu >= 0; uu -= 1) ju._properties.attachedSubEmitters[uu].dispose();
        if (Eu && this.activeSubSystems)
          for (let ju = this.activeSubSystems.length - 1; ju >= 0; ju -= 1) this.activeSubSystems[ju].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let uu = 0; uu < this._subEmitters.length; uu++)
            for (const Eu of this._subEmitters[uu]) Eu.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(uu, Eu, ju, su) {
        let Uu;
        Uu = ju instanceof QE.d ? null : ju;
        const Xu = (0, VE.d)("BABYLON.Texture");
        if (Xu && Uu)
          if (uu.texture) Eu.particleTexture = Xu.Parse(uu.texture, Uu, su);
          else if (uu.textureName) {
          const ju = uu.textureSettings;
          if (Eu.particleTexture = new Xu(su + uu.textureName, Uu, !1, void 0 === uu.invertY || uu.invertY, ju ? ju.samplingMode : void 0), Eu.particleTexture.name = uu.textureName, ju) {
            const uu = Eu.particleTexture;
            for (const Eu of tE) void 0 !== ju[Eu] && (uu[Eu] = ju[Eu])
          }
        }
        if (uu.emitterId || 0 === uu.emitterId || void 0 !== uu.emitter ? (uu.emitterId || 0 === uu.emitterId) && Uu ? (Eu.emitter = Uu.getLastMeshById(uu.emitterId), Eu.emitter || (Eu.emitter = Zu.t.Zero())) : Eu.emitter = Zu.t.FromArray(uu.emitter) : Eu.emitter = Zu.t.Zero(), Eu.isLocal = !!uu.isLocal, void 0 !== uu.renderingGroupId && (Eu.renderingGroupId = uu.renderingGroupId), void 0 !== uu.isBillboardBased && (Eu.isBillboardBased = uu.isBillboardBased), void 0 !== uu.billboardMode && (Eu.billboardMode = uu.billboardMode), void 0 !== uu.useLogarithmicDepth && (Eu.useLogarithmicDepth = uu.useLogarithmicDepth), uu.animations) {
          for (let ju = 0; ju < uu.animations.length; ju++) {
            const su = uu.animations[ju],
              Uu = (0, VE.d)("BABYLON.Animation");
            Uu && Eu.animations.push(Uu.Parse(su))
          }
          Eu.beginAnimationOnStart = uu.beginAnimationOnStart, Eu.beginAnimationFrom = uu.beginAnimationFrom, Eu.beginAnimationTo = uu.beginAnimationTo, Eu.beginAnimationLoop = uu.beginAnimationLoop
        }
        if (uu.autoAnimate && Uu && Uu.beginAnimation(Eu, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), Eu.startDelay = 0 | uu.startDelay, Eu.minAngularSpeed = uu.minAngularSpeed, Eu.maxAngularSpeed = uu.maxAngularSpeed, Eu.minSize = uu.minSize, Eu.maxSize = uu.maxSize, uu.minScaleX && (Eu.minScaleX = uu.minScaleX, Eu.maxScaleX = uu.maxScaleX, Eu.minScaleY = uu.minScaleY, Eu.maxScaleY = uu.maxScaleY), void 0 !== uu.preWarmCycles && (Eu.preWarmCycles = uu.preWarmCycles, Eu.preWarmStepOffset = uu.preWarmStepOffset), void 0 !== uu.minInitialRotation && (Eu.minInitialRotation = uu.minInitialRotation, Eu.maxInitialRotation = uu.maxInitialRotation), Eu.minLifeTime = uu.minLifeTime, Eu.maxLifeTime = uu.maxLifeTime, Eu.minEmitPower = uu.minEmitPower, Eu.maxEmitPower = uu.maxEmitPower, Eu.emitRate = uu.emitRate, Eu.gravity = Zu.t.FromArray(uu.gravity), uu.noiseStrength && (Eu.noiseStrength = Zu.t.FromArray(uu.noiseStrength)), Eu.color1 = Cu.g.FromArray(uu.color1), Eu.color2 = Cu.g.FromArray(uu.color2), Eu.colorDead = Cu.g.FromArray(uu.colorDead), Eu.updateSpeed = uu.updateSpeed, Eu.targetStopDuration = uu.targetStopDuration, Eu.blendMode = uu.blendMode, uu.colorGradients)
          for (const Zu of uu.colorGradients) Eu.addColorGradient(Zu.gradient, Cu.g.FromArray(Zu.color1), Zu.color2 ? Cu.g.FromArray(Zu.color2) : void 0);
        if (uu.rampGradients) {
          for (const ju of uu.rampGradients) Eu.addRampGradient(ju.gradient, Cu.c.FromArray(ju.color));
          Eu.useRampGradients = uu.useRampGradients
        }
        if (uu.colorRemapGradients)
          for (const Zu of uu.colorRemapGradients) Eu.addColorRemapGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.alphaRemapGradients)
          for (const Zu of uu.alphaRemapGradients) Eu.addAlphaRemapGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.sizeGradients)
          for (const Zu of uu.sizeGradients) Eu.addSizeGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.angularSpeedGradients)
          for (const Zu of uu.angularSpeedGradients) Eu.addAngularSpeedGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.velocityGradients)
          for (const Zu of uu.velocityGradients) Eu.addVelocityGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.dragGradients)
          for (const Zu of uu.dragGradients) Eu.addDragGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.emitRateGradients)
          for (const Zu of uu.emitRateGradients) Eu.addEmitRateGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.startSizeGradients)
          for (const Zu of uu.startSizeGradients) Eu.addStartSizeGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.lifeTimeGradients)
          for (const Zu of uu.lifeTimeGradients) Eu.addLifeTimeGradient(Zu.gradient, void 0 !== Zu.factor1 ? Zu.factor1 : Zu.factor, Zu.factor2);
        if (uu.limitVelocityGradients) {
          for (const ju of uu.limitVelocityGradients) Eu.addLimitVelocityGradient(ju.gradient, void 0 !== ju.factor1 ? ju.factor1 : ju.factor, ju.factor2);
          Eu.limitVelocityDamping = uu.limitVelocityDamping
        }
        if (uu.noiseTexture && Uu) {
          const ju = (0, VE.d)("BABYLON.ProceduralTexture");
          Eu.noiseTexture = ju.Parse(uu.noiseTexture, Uu, su)
        }
        let lu;
        if (uu.particleEmitterType) {
          switch (uu.particleEmitterType.type) {
            case "SphereParticleEmitter":
              lu = new hu;
              break;
            case "SphereDirectedParticleEmitter":
              lu = new Du;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              lu = new Mu;
              break;
            case "ConeDirectedParticleEmitter":
              lu = new eu;
              break;
            case "CylinderParticleEmitter":
              lu = new gu.e;
              break;
            case "CylinderDirectedParticleEmitter":
              lu = new gu.d;
              break;
            case "HemisphericParticleEmitter":
              lu = new Yu;
              break;
            case "PointParticleEmitter":
              lu = new Ou;
              break;
            case "MeshParticleEmitter":
              lu = new Gu;
              break;
            case "CustomParticleEmitter":
              lu = new SE;
              break;
            default:
              lu = new bu.d
          }
          lu.parse(uu.particleEmitterType, Uu)
        } else lu = new bu.d, lu.parse(uu, Uu);
        Eu.particleEmitterType = lu, Eu.startSpriteCellID = uu.startSpriteCellID, Eu.endSpriteCellID = uu.endSpriteCellID, Eu.spriteCellLoop = uu.spriteCellLoop ?? !0, Eu.spriteCellWidth = uu.spriteCellWidth, Eu.spriteCellHeight = uu.spriteCellHeight, Eu.spriteCellChangeSpeed = uu.spriteCellChangeSpeed, Eu.spriteRandomStartCell = uu.spriteRandomStartCell, Eu.disposeOnStop = uu.disposeOnStop ?? !1, Eu.manualEmitCount = uu.manualEmitCount ?? -1
      }
      static Parse(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Uu = arguments.length > 4 ? arguments[4] : void 0;
        const Xu = uu.name;
        let lu, qu, fu = null,
          bu = null;
        if (Eu instanceof QE.d ? lu = Eu : (qu = Eu, lu = qu.wO()), uu.customShader && (0, Qu.b)(lu.createEffectForParticles)) {
          bu = uu.customShader;
          const Eu = bu.shaderOptions.defines.length > 0 ? bu.shaderOptions.defines.join("\n") : "";
          fu = lu.createEffectForParticles(bu.shaderPath.fragmentElement, bu.shaderOptions.uniforms, bu.shaderOptions.samplers, Eu)
        }
        const cu = new xE(Xu, Uu || uu.Mb, Eu, fu, uu.isAnimationSheetEnabled);
        if (cu.customShader = bu, cu._rootUrl = ju, uu.id && (cu.id = uu.id), uu.subEmitters) {
          cu.subEmitters = [];
          for (const su of uu.subEmitters) {
            const uu = [];
            for (const Uu of su) uu.push(rE.Parse(Uu, Eu, ju));
            cu.subEmitters.push(uu)
          }
        }
        if (uu.attractors)
          for (const Cu of uu.attractors) {
            const uu = new LE;
            uu.position = Zu.t.FromArray(Cu.position), uu.strength = Cu.strength, cu.addAttractor(uu)
          }
        return xE._Parse(uu, cu, Eu, ju), uu.textureMask && (cu.textureMask = Cu.g.FromArray(uu.textureMask)), uu.worldOffset && (cu.worldOffset = Zu.t.FromArray(uu.worldOffset)), uu.preventAutoStart && (cu.preventAutoStart = uu.preventAutoStart), uu.metadata && (cu.metadata = uu.metadata), su || cu.preventAutoStart || cu.start(), cu
      }
      serialize() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = {};
        if (xE._Serialize(Eu, this, uu), Eu.textureMask = this.textureMask.Osu(), Eu.customShader = this.customShader, Eu.preventAutoStart = this.preventAutoStart, Eu.worldOffset = this.worldOffset.Osu(), this.metadata && (Eu.metadata = this.metadata), this.subEmitters) {
          Eu.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const ju of this._subEmitters) {
            const su = [];
            for (const Eu of ju) Eu.particleSystem.doNotSerialize || su.push(Eu.serialize(uu));
            Eu.subEmitters.push(su)
          }
        }
        if (this._attractors && this._attractors.length) {
          Eu.attractors = [];
          for (const uu of this._attractors) Eu.attractors.push(uu.serialize())
        }
        return Eu
      }
      static _Serialize(uu, Eu, ju) {
        if (uu.name = Eu.name, uu.id = Eu.id, uu.Mb = Eu.getCapacity(), uu.disposeOnStop = Eu.disposeOnStop, uu.manualEmitCount = Eu.manualEmitCount, Eu.emitter.position) {
          const ju = Eu.emitter;
          uu.emitterId = ju.id
        } else {
          const ju = Eu.emitter;
          uu.emitter = ju.Osu()
        }
        if (Eu.particleEmitterType && (uu.particleEmitterType = Eu.particleEmitterType.serialize()), Eu.particleTexture)
          if (ju) uu.texture = Eu.particleTexture.serialize();
          else {
            const ju = Eu.particleTexture;
            uu.textureName = Eu.particleTexture.name, uu.invertY = !!ju._invertY;
            const su = {};
            for (const uu of tE) su[uu] = ju[uu];
            su.samplingMode = ju.samplingMode, uu.textureSettings = su
          } uu.isLocal = Eu.isLocal, iE.e.AppendSerializedAnimations(Eu, uu), uu.beginAnimationOnStart = Eu.beginAnimationOnStart, uu.beginAnimationFrom = Eu.beginAnimationFrom, uu.beginAnimationTo = Eu.beginAnimationTo, uu.beginAnimationLoop = Eu.beginAnimationLoop, uu.startDelay = Eu.startDelay, uu.renderingGroupId = Eu.renderingGroupId, uu.isBillboardBased = Eu.isBillboardBased, uu.billboardMode = Eu.billboardMode, uu.minAngularSpeed = Eu.minAngularSpeed, uu.maxAngularSpeed = Eu.maxAngularSpeed, uu.minSize = Eu.minSize, uu.maxSize = Eu.maxSize, uu.minScaleX = Eu.minScaleX, uu.maxScaleX = Eu.maxScaleX, uu.minScaleY = Eu.minScaleY, uu.maxScaleY = Eu.maxScaleY, uu.minEmitPower = Eu.minEmitPower, uu.maxEmitPower = Eu.maxEmitPower, uu.minLifeTime = Eu.minLifeTime, uu.maxLifeTime = Eu.maxLifeTime, uu.emitRate = Eu.emitRate, uu.gravity = Eu.gravity.Osu(), uu.noiseStrength = Eu.noiseStrength.Osu(), uu.color1 = Eu.color1.Osu(), uu.color2 = Eu.color2.Osu(), uu.colorDead = Eu.colorDead.Osu(), uu.updateSpeed = Eu.updateSpeed, uu.targetStopDuration = Eu.targetStopDuration, uu.blendMode = Eu.blendMode, uu.preWarmCycles = Eu.preWarmCycles, uu.preWarmStepOffset = Eu.preWarmStepOffset, uu.minInitialRotation = Eu.minInitialRotation, uu.maxInitialRotation = Eu.maxInitialRotation, uu.startSpriteCellID = Eu.startSpriteCellID, uu.spriteCellLoop = Eu.spriteCellLoop, uu.endSpriteCellID = Eu.endSpriteCellID, uu.spriteCellChangeSpeed = Eu.spriteCellChangeSpeed, uu.spriteCellWidth = Eu.spriteCellWidth, uu.spriteCellHeight = Eu.spriteCellHeight, uu.spriteRandomStartCell = Eu.spriteRandomStartCell, uu.isAnimationSheetEnabled = Eu.isAnimationSheetEnabled, uu.useLogarithmicDepth = Eu.useLogarithmicDepth;
        const su = Eu.getColorGradients();
        if (su) {
          uu.colorGradients = [];
          for (const Eu of su) {
            const ju = {
              gradient: Eu.gradient,
              color1: Eu.color1.Osu()
            };
            Eu.color2 ? ju.color2 = Eu.color2.Osu() : ju.color2 = Eu.color1.Osu(), uu.colorGradients.push(ju)
          }
        }
        const Uu = Eu.getRampGradients();
        if (Uu) {
          uu.rampGradients = [];
          for (const Eu of Uu) {
            const ju = {
              gradient: Eu.gradient,
              color: Eu.color.Osu()
            };
            uu.rampGradients.push(ju)
          }
          uu.useRampGradients = Eu.useRampGradients
        }
        const Zu = Eu.getColorRemapGradients();
        if (Zu) {
          uu.colorRemapGradients = [];
          for (const Eu of Zu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.colorRemapGradients.push(ju)
          }
        }
        const Xu = Eu.getAlphaRemapGradients();
        if (Xu) {
          uu.alphaRemapGradients = [];
          for (const Eu of Xu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.alphaRemapGradients.push(ju)
          }
        }
        const lu = Eu.getSizeGradients();
        if (lu) {
          uu.sizeGradients = [];
          for (const Eu of lu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.sizeGradients.push(ju)
          }
        }
        const qu = Eu.getAngularSpeedGradients();
        if (qu) {
          uu.angularSpeedGradients = [];
          for (const Eu of qu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.angularSpeedGradients.push(ju)
          }
        }
        const fu = Eu.getVelocityGradients();
        if (fu) {
          uu.velocityGradients = [];
          for (const Eu of fu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.velocityGradients.push(ju)
          }
        }
        const Cu = Eu.getDragGradients();
        if (Cu) {
          uu.dragGradients = [];
          for (const Eu of Cu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.dragGradients.push(ju)
          }
        }
        const bu = Eu.getEmitRateGradients();
        if (bu) {
          uu.emitRateGradients = [];
          for (const Eu of bu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.emitRateGradients.push(ju)
          }
        }
        const cu = Eu.getStartSizeGradients();
        if (cu) {
          uu.startSizeGradients = [];
          for (const Eu of cu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.startSizeGradients.push(ju)
          }
        }
        const Nu = Eu.getLifeTimeGradients();
        if (Nu) {
          uu.lifeTimeGradients = [];
          for (const Eu of Nu) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.lifeTimeGradients.push(ju)
          }
        }
        const Ou = Eu.getLimitVelocityGradients();
        if (Ou) {
          uu.limitVelocityGradients = [];
          for (const Eu of Ou) {
            const ju = {
              gradient: Eu.gradient,
              factor1: Eu.factor1
            };
            void 0 !== Eu.factor2 ? ju.factor2 = Eu.factor2 : ju.factor2 = Eu.factor1, uu.limitVelocityGradients.push(ju)
          }
          uu.limitVelocityDamping = Eu.limitVelocityDamping
        }
        Eu.noiseTexture && (uu.noiseTexture = Eu.noiseTexture.serialize())
      }
      clone(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = {
          ...this._customWrappers
        };
        let Uu = null;
        const Zu = this._engine;
        if ((0, Qu.b)(Zu.createEffectForParticles) && null != this.customShader) {
          Uu = this.customShader;
          const uu = Uu.shaderOptions.defines.length > 0 ? Uu.shaderOptions.defines.join("\n") : "",
            Eu = Zu.createEffectForParticles(Uu.shaderPath.fragmentElement, Uu.shaderOptions.uniforms, Uu.shaderOptions.samplers, uu);
          su[0] ? su[0].effect = Eu : this.setCustomEffect(Eu, 0)
        }
        const Xu = this.serialize(ju),
          lu = !1 === ju && this.particleTexture ? this.particleTexture.clone() : null;
        lu && (Xu.textureName = void 0);
        const qu = xE.Parse(Xu, this._scene || this._engine, this._rootUrl);
        return qu.name = uu, qu.customShader = Uu, qu._customWrappers = su, lu && (qu.particleTexture = lu), void 0 === Eu && (Eu = this.emitter), this.noiseTexture && (qu.noiseTexture = this.noiseTexture.clone()), qu.emitter = Eu, this.preventAutoStart || qu.start(), qu
      }
    }
    xE.BILLBOARDMODE_Y = 2, xE.BILLBOARDMODE_ALL = 7, xE.BILLBOARDMODE_STRETCHED = 8, xE.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let TE = !1;
    TE || (TE = !0, rE._ParseParticleSystem = xE.Parse)
  },
  41892: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      SkyMaterial: () => Mu,
      _MaxColorValueForRenderTarget: () => gu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40272),
      Xu = ju(37488),
      lu = ju(40543),
      qu = ju(40604),
      fu = ju(41857),
      Cu = ju(41378),
      bu = ju(40346),
      cu = ju(37532),
      Nu = ju(40628),
      Ou = ju(40610),
      Yu = ju(40596),
      hu = ju(40592);
    class Du extends lu.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function gu(uu) {
      switch (uu) {
        case fu.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case fu.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Mu = (() => {
      var uu;
      let Eu, lu, fu, cu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku, mu = qu.c,
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [],
        Fu = [],
        Bu = [],
        Lu = [],
        tu = [],
        xu = [],
        Tu = [],
        Hu = [],
        Au = [],
        nu = [],
        yu = [],
        zu = [],
        Ru = [],
        uE = [],
        EE = [],
        jE = [],
        sE = [],
        UE = [],
        ZE = [],
        XE = [],
        lE = [],
        qE = [];
      return uu = class extends mu {
        constructor(uu, Eu) {
          super(uu, Eu, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, su.g)(this, vu, 1), this.turbidity = ((0, su.g)(this, Ku), (0, su.g)(this, Vu, 10)), this.rayleigh = ((0, su.g)(this, ru), (0, su.g)(this, Qu, 2)), this.mieCoefficient = ((0, su.g)(this, iu), (0, su.g)(this, Wu, .005)), this.mieDirectionalG = ((0, su.g)(this, Su), (0, su.g)(this, Iu, .8)), this.distance = ((0, su.g)(this, Fu), (0, su.g)(this, Bu, 500)), this.inclination = ((0, su.g)(this, Lu), (0, su.g)(this, tu, .49)), this.azimuth = ((0, su.g)(this, xu), (0, su.g)(this, Tu, .25)), this.sunPosition = ((0, su.g)(this, Hu), (0, su.g)(this, Au, new Xu.dO(0, 100, 0))), this.useSunPosition = ((0, su.g)(this, nu), (0, su.g)(this, yu, !1)), this.cameraOffset = ((0, su.g)(this, zu), (0, su.g)(this, Ru, Xu.dO.Zero())), this.up = ((0, su.g)(this, uE), (0, su.g)(this, EE, Xu.dO.Up())), this.dithering = ((0, su.g)(this, jE), (0, su.g)(this, sE, !1)), this.rawHdrOutput = ((0, su.g)(this, UE), (0, su.g)(this, ZE, !1)), this.cloudiness = ((0, su.g)(this, XE), (0, su.g)(this, lE, 0)), this._cameraPosition = ((0, su.g)(this, qE), Xu.dO.Zero()), this._skyOrientation = new Xu.Quaternion
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
        isReadyForSubMesh(Eu, ju) {
          const su = ju._drawWrapper;
          if (this.isFrozen && su.effect && su._wasPreviouslyReady) return !0;
          ju.materialDefines || (ju.materialDefines = new Du);
          const Uu = ju.materialDefines,
            Zu = this.hV();
          if (this._isReadyForSubMesh(ju)) return !0;
          if ((0, hu.kb)(Eu, Zu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Uu, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, hu.Z)(Eu, Uu, !0, !1), Uu.IMAGEPROCESSINGPOSTPROCESS !== Zu.imageProcessingConfiguration.applyByPostProcess && Uu.markAsMiscDirty(), Uu.DITHER !== this.dithering && Uu.markAsMiscDirty(), Uu.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Uu.markAsMiscDirty(), Uu.isDirty) {
            Uu.markAsProcessed(), Zu.resetCachedMaterial();
            const Eu = new Ou.e;
            Uu.FOG && Eu.addFallback(1, "FOG"), Uu.IMAGEPROCESSINGPOSTPROCESS = Zu.imageProcessingConfiguration.applyByPostProcess, Uu.DITHER = this.dithering, Uu.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const su = [Cu.e.PositionKind];
            Uu.VERTEXCOLOR && su.push(Cu.e.ColorKind);
            const Xu = "sky",
              lu = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Yu.e)(lu);
            const qu = Uu.toString();
            ju.setEffect(Zu.wO().createEffect(Xu, {
              attributes: su,
              uniformsNames: lu,
              uniformBuffersNames: [],
              samplers: [],
              defines: qu,
              fallbacks: Eu,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Zu.wO()), Uu, this._materialContext)
          }
          return !(!ju.effect || !ju.effect.isReady()) && (Uu._renderId = Zu.getRenderId(), su._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(uu, Eu, ju) {
          const su = this.hV(),
            Uu = ju.materialDefines;
          if (!Uu) return;
          const Zu = ju.effect;
          if (!Zu) return;
          this._activeEffect = Zu, this.bindOnlyWorldMatrix(uu), this._activeEffect.setMatrix("viewProjection", su.getTransformMatrix()), this._mustRebind(su, Zu, ju) && ((0, Yu.f)(Zu, this, su), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, hu.u)(Uu, Zu, su)), su.fogEnabled && Eu.applyFog && su.fogMode !== bu.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", su.getViewMatrix()), (0, hu.j)(su, Eu, this._activeEffect, this.rawHdrOutput);
          const lu = su.activeCamera;
          if (lu) {
            const uu = lu.getWorldMatrix();
            this._cameraPosition.x = uu.m[12], this._cameraPosition.y = uu.m[13], this._cameraPosition.z = uu.m[14], this._activeEffect.setVector3("cameraPosition", Xu.TmpVectors.dO[0].yJ(this._cameraPosition).Qsu(su.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const uu = su.wO()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", gu(uu?.texture?.type))
          }
          if (!this.useSunPosition) {
            const uu = Math.PI * (this.inclination - .5),
              Eu = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(Eu) * Math.cos(uu), this.sunPosition.y = this.distance * Math.sin(-uu), this.sunPosition.z = this.distance * Math.sin(Eu) * Math.cos(uu), Xu.Quaternion.FromUnitVectorsToRef(Xu.dO.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(Eu, this._activeEffect, ju)
        }
        getAnimatables() {
          return []
        }
        dispose(uu) {
          super.dispose(uu)
        }
        clone(Eu) {
          return Zu.e.Clone((() => new uu(Eu, this.hV())), this)
        }
        serialize() {
          const uu = super.serialize();
          return uu.customType = "BABYLON.SkyMaterial", uu
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(Eu, ju, su) {
          return Zu.e.Parse((() => new uu(Eu.name, ju)), Eu, ju, su)
        }
      }, (() => {
        const ju = "function" === typeof Symbol && Symbol.metadata ? Object.create(mu[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, Uu.E)()], lu = [(0, Uu.E)()], fu = [(0, Uu.E)()], cu = [(0, Uu.E)()], Mu = [(0, Uu.E)()], eu = [(0, Uu.E)()], Gu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.A)()], Ju = [(0, Uu.E)()], du = [(0, Uu.A)()], au = [(0, Uu.A)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], ku = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: uu => "luminance" in uu,
            get: uu => uu.luminance,
            set: (uu, Eu) => {
              uu.luminance = Eu
            }
          },
          metadata: ju
        }, vu, Ku), (0, su.e)(null, null, lu, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: uu => "turbidity" in uu,
            get: uu => uu.turbidity,
            set: (uu, Eu) => {
              uu.turbidity = Eu
            }
          },
          metadata: ju
        }, Vu, ru), (0, su.e)(null, null, fu, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: uu => "rayleigh" in uu,
            get: uu => uu.rayleigh,
            set: (uu, Eu) => {
              uu.rayleigh = Eu
            }
          },
          metadata: ju
        }, Qu, iu), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: uu => "mieCoefficient" in uu,
            get: uu => uu.mieCoefficient,
            set: (uu, Eu) => {
              uu.mieCoefficient = Eu
            }
          },
          metadata: ju
        }, Wu, Su), (0, su.e)(null, null, Mu, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: uu => "mieDirectionalG" in uu,
            get: uu => uu.mieDirectionalG,
            set: (uu, Eu) => {
              uu.mieDirectionalG = Eu
            }
          },
          metadata: ju
        }, Iu, Fu), (0, su.e)(null, null, eu, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: uu => "distance" in uu,
            get: uu => uu.distance,
            set: (uu, Eu) => {
              uu.distance = Eu
            }
          },
          metadata: ju
        }, Bu, Lu), (0, su.e)(null, null, Gu, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: uu => "inclination" in uu,
            get: uu => uu.inclination,
            set: (uu, Eu) => {
              uu.inclination = Eu
            }
          },
          metadata: ju
        }, tu, xu), (0, su.e)(null, null, pu, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: uu => "azimuth" in uu,
            get: uu => uu.azimuth,
            set: (uu, Eu) => {
              uu.azimuth = Eu
            }
          },
          metadata: ju
        }, Tu, Hu), (0, su.e)(null, null, wu, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: uu => "sunPosition" in uu,
            get: uu => uu.sunPosition,
            set: (uu, Eu) => {
              uu.sunPosition = Eu
            }
          },
          metadata: ju
        }, Au, nu), (0, su.e)(null, null, Ju, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSunPosition" in uu,
            get: uu => uu.useSunPosition,
            set: (uu, Eu) => {
              uu.useSunPosition = Eu
            }
          },
          metadata: ju
        }, yu, zu), (0, su.e)(null, null, du, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: uu => "cameraOffset" in uu,
            get: uu => uu.cameraOffset,
            set: (uu, Eu) => {
              uu.cameraOffset = Eu
            }
          },
          metadata: ju
        }, Ru, uE), (0, su.e)(null, null, au, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: uu => "up" in uu,
            get: uu => uu.up,
            set: (uu, Eu) => {
              uu.up = Eu
            }
          },
          metadata: ju
        }, EE, jE), (0, su.e)(null, null, Pu, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: uu => "dithering" in uu,
            get: uu => uu.dithering,
            set: (uu, Eu) => {
              uu.dithering = Eu
            }
          },
          metadata: ju
        }, sE, UE), (0, su.e)(null, null, ou, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: uu => "rawHdrOutput" in uu,
            get: uu => uu.rawHdrOutput,
            set: (uu, Eu) => {
              uu.rawHdrOutput = Eu
            }
          },
          metadata: ju
        }, ZE, XE), (0, su.e)(null, null, ku, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: uu => "cloudiness" in uu,
            get: uu => uu.cloudiness,
            set: (uu, Eu) => {
              uu.cloudiness = Eu
            }
          },
          metadata: ju
        }, lE, qE), ju && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ju
        })
      })(), uu._ShaderLoader = new Nu.b((() => [ju.e(335).then((() => ju(61559))), ju.e(328).then((() => ju(61564)))]), (() => [ju.e(352).then((() => ju(61566))), ju.e(346).then((() => ju(61571)))])), uu
    })();
    (0, cu.f)("BABYLON.SkyMaterial", Mu)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);