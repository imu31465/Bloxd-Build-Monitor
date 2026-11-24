export const id = 303;
export const ids = [303];
export const modules = {
  41638: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(40144),
      bS = gS(41640);
    class XS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = gS, this.ftS = [], this._maxBlockCapacity = HS || 64, this._selectionContent = new tS.b(1024), this._creationFunc = SS
      }
      update(SS, HS, gS) {
        bS.c._CreateBlocks(SS, HS, gS, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      egS(SS) {
        for (let HS = 0; HS < this.blocks.length; HS++) {
          this.blocks[HS].addEntry(SS)
        }
      }
      ZY(SS) {
        for (let HS = 0; HS < this.blocks.length; HS++) {
          this.blocks[HS].removeEntry(SS)
        }
      }
      select(SS, HS) {
        this._selectionContent.reset();
        for (let gS = 0; gS < this.blocks.length; gS++) {
          this.blocks[gS].select(SS, this._selectionContent, HS)
        }
        return HS ? this._selectionContent.concat(this.ftS) : this._selectionContent.concatWithNoDuplicate(this.ftS), this._selectionContent
      }
      intersects(SS, HS, gS) {
        this._selectionContent.reset();
        for (let tS = 0; tS < this.blocks.length; tS++) {
          this.blocks[tS].intersects(SS, HS, this._selectionContent, gS)
        }
        return gS ? this._selectionContent.concat(this.ftS) : this._selectionContent.concatWithNoDuplicate(this.ftS), this._selectionContent
      }
      intersectsRay(SS) {
        this._selectionContent.reset();
        for (let HS = 0; HS < this.blocks.length; HS++) {
          this.blocks[HS].intersectsRay(SS, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.ftS), this._selectionContent
      }
    }
    XS.CreationFuncForMeshes = (SS, HS) => {
      const gS = SS.hA();
      !SS.isBlocked && gS.boundingBox.intersectsMinMax(HS.btS, HS.ttS) && HS.entries.push(SS)
    }, XS.CreationFuncForSubMeshes = (SS, HS) => {
      SS.hA().boundingBox.intersectsMinMax(HS.btS, HS.ttS) && HS.entries.push(SS)
    }
  },
  41640: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(37117),
      bS = gS(40352);
    class XS {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.entries = [], this.ktS = new Array, this._capacity = gS, this._depth = tS, this._maxDepth = bS, this._creationFunc = XS, this._minPoint = SS, this._maxPoint = HS, this.ktS.push(SS.clone()), this.ktS.push(HS.clone()), this.ktS.push(SS.clone()), this.ktS[2].x = HS.x, this.ktS.push(SS.clone()), this.ktS[3].y = HS.y, this.ktS.push(SS.clone()), this.ktS[4].z = HS.z, this.ktS.push(HS.clone()), this.ktS[5].z = SS.z, this.ktS.push(HS.clone()), this.ktS[6].x = SS.x, this.ktS.push(HS.clone()), this.ktS[7].y = SS.y
      }
      get hf() {
        return this._capacity
      }
      get btS() {
        return this._minPoint
      }
      get ttS() {
        return this._maxPoint
      }
      addEntry(SS) {
        if (this.blocks)
          for (let HS = 0; HS < this.blocks.length; HS++) {
            this.blocks[HS].addEntry(SS)
          } else this._creationFunc(SS, this), this.entries.length > this.hf && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(SS) {
        if (this.blocks) {
          for (let HS = 0; HS < this.blocks.length; HS++) {
            this.blocks[HS].removeEntry(SS)
          }
          return
        }
        const HS = this.entries.indexOf(SS);
        HS > -1 && this.entries.splice(HS, 1)
      }
      addEntries(SS) {
        for (let HS = 0; HS < SS.length; HS++) {
          const gS = SS[HS];
          this.addEntry(gS)
        }
      }
      select(SS, HS, gS) {
        if (bS.c.IsInFrustum(this.ktS, SS)) {
          if (this.blocks) {
            for (let tS = 0; tS < this.blocks.length; tS++) {
              this.blocks[tS].select(SS, HS, gS)
            }
            return
          }
          gS ? HS.concat(this.entries) : HS.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(SS, HS, gS, tS) {
        if (bS.c.IntersectsSphere(this._minPoint, this._maxPoint, SS, HS)) {
          if (this.blocks) {
            for (let bS = 0; bS < this.blocks.length; bS++) {
              this.blocks[bS].intersects(SS, HS, gS, tS)
            }
            return
          }
          tS ? gS.concat(this.entries) : gS.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(SS, HS) {
        if (SS.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let gS = 0; gS < this.blocks.length; gS++) {
              this.blocks[gS].intersectsRay(SS, HS)
            }
            return
          }
          HS.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        XS._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(SS, HS, gS, bS, xS, NS, qS, uS) {
        qS.blocks = new Array;
        const IS = new tS.n((HS.x - SS.x) / 2, (HS.y - SS.y) / 2, (HS.z - SS.z) / 2);
        for (let tS = 0; tS < 2; tS++)
          for (let HS = 0; HS < 2; HS++)
            for (let fS = 0; fS < 2; fS++) {
              const kS = SS.add(IS.multiplyByFloats(tS, HS, fS)),
                aS = SS.add(IS.multiplyByFloats(tS + 1, HS + 1, fS + 1)),
                KS = new XS(kS, aS, bS, xS + 1, NS, uS);
              KS.addEntries(gS), qS.blocks.push(KS)
            }
      }
    }
  },
  41648: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => IS
    });
    var tS = gS(40131),
      bS = gS(37117),
      XS = gS(40468),
      xS = gS(41581),
      NS = gS(40213),
      qS = gS(37138),
      uS = gS(41638);
    class IS {
      constructor(SS) {
        this.name = NS.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new xS.D(bS.n.Zero(), new bS.n(1, 1, 1)), (SS = SS || qS.d.LastCreatedScene) && (this.Bj = SS, this.Bj.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Bj.getActiveSubMeshCandidates = SS => this.getActiveSubMeshCandidates(SS), this.Bj.getCollidingSubMeshCandidates = (SS, HS) => this.getCollidingSubMeshCandidates(SS, HS), this.Bj.getIntersectingSubMeshCandidates = (SS, HS) => this.getIntersectingSubMeshCandidates(SS, HS))
      }
      register() {
        this.Bj.onMeshRemovedObservable.add((SS => {
          const HS = this.Bj.selectionOctree;
          if (void 0 !== HS && null !== HS) {
            const gS = HS.ftS.indexOf(SS); - 1 !== gS && HS.ftS.splice(gS, 1)
          }
        })), this.Bj.onMeshImportedObservable.add((SS => {
          const HS = this.Bj.selectionOctree;
          void 0 !== HS && null !== HS && HS.egS(SS)
        }))
      }
      getActiveMeshCandidates() {
        return this.Bj.ntS?.select(this.Bj.frustumPlanes) || this.Bj._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(SS) {
        if (SS._submeshesOctree && SS.useOctreeForRenderingSelection) {
          return SS._submeshesOctree.select(this.Bj.frustumPlanes)
        }
        return this.Bj._getDefaultSubMeshCandidates(SS)
      }
      getIntersectingSubMeshCandidates(SS, HS) {
        if (SS._submeshesOctree && SS.useOctreeForPicking) {
          xS.D.TransformToRef(HS, SS.getWorldMatrix(), this._tempRay);
          return SS._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Bj._getDefaultSubMeshCandidates(SS)
      }
      getCollidingSubMeshCandidates(SS, HS) {
        if (SS._submeshesOctree && SS.useOctreeForCollisions) {
          const gS = HS._velocityWorldLength + Math.max(HS._radius.x, HS._radius.y, HS._radius.z);
          return SS._submeshesOctree.intersects(HS._basePointWorld, gS)
        }
        return this.Bj._getDefaultSubMeshCandidates(SS)
      }
      rebuild() {}
      dispose() {}
    }
    let fS = !1;
    fS || (fS = !0, tS.i.prototype.createOrUpdateSelectionOctree = function() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        gS = this._getComponent(NS.e.NAME_OCTREE);
      gS || (gS = new IS(this), this.igS(gS)), this.ntS || (this.ntS = new uS.d(uS.d.CreationFuncForMeshes, SS, HS));
      const tS = this.getWorldExtends();
      return this.ntS.update(tS.min, tS.max, this.meshes), this.ntS
    }, Object.defineProperty(tS.i.prototype, "selectionOctree", {
      get: function() {
        return this.ntS
      },
      enumerable: !0,
      configurable: !0
    }), XS.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const gS = this.lL();
      let tS = gS._getComponent(NS.e.NAME_OCTREE);
      tS || (tS = new IS(gS), gS.igS(tS)), this._submeshesOctree || (this._submeshesOctree = new uS.d(uS.d.CreationFuncForSubMeshes, SS, HS)), this.computeWorldMatrix(!0);
      const bS = this.hA().boundingBox;
      return this._submeshesOctree.update(bS.minimumWorld, bS.maximumWorld, this.dD), this._submeshesOctree
    })
  },
  41581: (SS, HS, gS) => {
    gS.d(HS, {
      D: () => fS,
      b: () => vS,
      e: () => jS,
      g: () => KS,
      i: () => aS,
      m: () => dS,
      q: () => OS,
      u: () => hS,
      w: () => JS,
      z: () => ZS
    });
    var tS = gS(37123),
      bS = gS(37117),
      XS = gS(37129),
      xS = gS(40343),
      NS = gS(40176),
      qS = gS(37138),
      uS = gS(40227);
    const IS = {
      internalPickerForMesh: void 0
    };
    class fS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tS.d;
        this.origin = SS, this.direction = HS, this.length = gS, this.epsilon = bS
      }
      clone() {
        return new fS(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const tS = fS._TmpVector3[0].I5(SS.x - gS, SS.y - gS, SS.z - gS),
          bS = fS._TmpVector3[1].I5(HS.x + gS, HS.y + gS, HS.z + gS);
        let XS, xS, NS, qS, uS = 0,
          IS = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < tS.x || this.origin.x > bS.x) return !1
        } else if (XS = 1 / this.direction.x, xS = (tS.x - this.origin.x) * XS, NS = (bS.x - this.origin.x) * XS, NS === -1 / 0 && (NS = 1 / 0), xS > NS && (qS = xS, xS = NS, NS = qS), uS = Math.max(xS, uS), IS = Math.min(NS, IS), uS > IS) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < tS.y || this.origin.y > bS.y) return !1
        } else if (XS = 1 / this.direction.y, xS = (tS.y - this.origin.y) * XS, NS = (bS.y - this.origin.y) * XS, NS === -1 / 0 && (NS = 1 / 0), xS > NS && (qS = xS, xS = NS, NS = qS), uS = Math.max(xS, uS), IS = Math.min(NS, IS), uS > IS) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < tS.z || this.origin.z > bS.z) return !1
        } else if (XS = 1 / this.direction.z, xS = (tS.z - this.origin.z) * XS, NS = (bS.z - this.origin.z) * XS, NS === -1 / 0 && (NS = 1 / 0), xS > NS && (qS = xS, xS = NS, NS = qS), uS = Math.max(xS, uS), IS = Math.min(NS, IS), uS > IS) return !1;
        return !0
      }
      intersectsBox(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(SS.minimum, SS.maximum, HS)
      }
      intersectsSphere(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = SS.center.x - this.origin.x,
          tS = SS.center.y - this.origin.y,
          bS = SS.center.z - this.origin.z,
          XS = gS * gS + tS * tS + bS * bS,
          xS = SS.radius + HS,
          NS = xS * xS;
        if (XS <= NS) return !0;
        const qS = gS * this.direction.x + tS * this.direction.y + bS * this.direction.z;
        if (qS < 0) return !1;
        return XS - qS * qS <= NS
      }
      intersectsTriangle(SS, HS, gS) {
        const tS = fS._TmpVector3[0],
          XS = fS._TmpVector3[1],
          NS = fS._TmpVector3[2],
          qS = fS._TmpVector3[3],
          uS = fS._TmpVector3[4];
        HS.subtractToRef(SS, tS), gS.subtractToRef(SS, XS), bS.n.CrossToRef(this.direction, XS, NS);
        const IS = bS.n.Dot(tS, NS);
        if (0 === IS) return null;
        const kS = 1 / IS;
        this.origin.subtractToRef(SS, qS);
        const aS = bS.n.Dot(qS, NS) * kS;
        if (aS < -this.epsilon || aS > 1 + this.epsilon) return null;
        bS.n.CrossToRef(qS, tS, uS);
        const KS = bS.n.Dot(this.direction, uS) * kS;
        if (KS < -this.epsilon || aS + KS > 1 + this.epsilon) return null;
        const jS = bS.n.Dot(XS, uS) * kS;
        return jS > this.length || jS < 0 ? null : new xS.e(1 - aS - KS, aS, jS)
      }
      intersectsPlane(SS) {
        let HS;
        const gS = bS.n.Dot(SS.normal, this.direction);
        if (Math.abs(gS) < 9.99999997475243e-7) return null;
        {
          const tS = bS.n.Dot(SS.normal, this.origin);
          return HS = (-SS.d - tS) / gS, HS < 0 ? HS < -9.99999997475243e-7 ? null : 0 : HS
        }
      }
      intersectsAxis(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (SS) {
          case "y": {
            const SS = (this.origin.y - HS) / this.direction.y;
            return SS > 0 ? null : new bS.n(this.origin.x + this.direction.x * -SS, HS, this.origin.z + this.direction.z * -SS)
          }
          case "x": {
            const SS = (this.origin.x - HS) / this.direction.x;
            return SS > 0 ? null : new bS.n(HS, this.origin.y + this.direction.y * -SS, this.origin.z + this.direction.z * -SS)
          }
          case "z": {
            const SS = (this.origin.z - HS) / this.direction.z;
            return SS > 0 ? null : new bS.n(this.origin.x + this.direction.x * -SS, this.origin.y + this.direction.y * -SS, HS)
          }
          default:
            return null
        }
      }
      itS(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          XS = arguments.length > 4 ? arguments[4] : void 0,
          xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const NS = bS.l.Matrix[0];
        return SS.getWorldMatrix().invertToRef(NS), this._tmpRay ? fS.TransformToRef(this, NS, this._tmpRay) : this._tmpRay = fS.Transform(this, NS), SS.intersects(this._tmpRay, HS, gS, tS, XS, xS)
      }
      intersectsMeshes(SS, HS, gS) {
        gS ? gS.length = 0 : gS = [];
        for (let tS = 0; tS < SS.length; tS++) {
          const bS = this.itS(SS[tS], HS);
          bS.hit && gS.push(bS)
        }
        return gS.sort(this._comparePickingInfo), gS
      }
      _comparePickingInfo(SS, HS) {
        return SS.distance < HS.distance ? -1 : SS.distance > HS.distance ? 1 : 0
      }
      intersectionSegment(SS, HS, gS) {
        const tS = this.origin,
          XS = bS.l.VK[0],
          xS = bS.l.VK[1],
          NS = bS.l.VK[2],
          qS = bS.l.VK[3];
        HS.subtractToRef(SS, XS), this.direction.scaleToRef(fS._Rayl, NS), tS.addToRef(NS, xS), SS.subtractToRef(tS, qS);
        const uS = bS.n.Dot(XS, XS),
          IS = bS.n.Dot(XS, NS),
          kS = bS.n.Dot(NS, NS),
          aS = bS.n.Dot(XS, qS),
          KS = bS.n.Dot(NS, qS),
          jS = uS * kS - IS * IS;
        let GS, CS, nS = jS,
          PS = jS;
        jS < fS._Smallnum ? (GS = 0, nS = 1, CS = KS, PS = kS) : (GS = IS * KS - kS * aS, CS = uS * KS - IS * aS, GS < 0 ? (GS = 0, CS = KS, PS = kS) : GS > nS && (GS = nS, CS = KS + IS, PS = kS)), CS < 0 ? (CS = 0, -aS < 0 ? GS = 0 : -aS > uS ? GS = nS : (GS = -aS, nS = uS)) : CS > PS && (CS = PS, -aS + IS < 0 ? GS = 0 : -aS + IS > uS ? GS = nS : (GS = -aS + IS, nS = uS));
        const QS = Math.abs(GS) < fS._Smallnum ? 0 : GS / nS,
          DS = Math.abs(CS) < fS._Smallnum ? 0 : CS / PS,
          wS = bS.l.VK[4];
        NS.scaleToRef(DS, wS);
        const hS = bS.l.VK[5];
        XS.scaleToRef(QS, hS), hS.addInPlace(qS);
        const ZS = bS.l.VK[6];
        hS.subtractToRef(wS, ZS);
        return DS > 0 && DS <= this.length && ZS.lengthSquared() < gS * gS ? hS.length() : -1
      }
      update(SS, HS, gS, tS, XS, xS, NS) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          fS._RayDistant || (fS._RayDistant = fS.Zero()), fS._RayDistant.unprojectRayToRef(SS, HS, gS, tS, bS.e.IdentityReadOnly, xS, NS);
          const qS = bS.l.Matrix[0];
          XS.invertToRef(qS), fS.TransformToRef(fS._RayDistant, qS, this)
        } else this.unprojectRayToRef(SS, HS, gS, tS, XS, xS, NS);
        return this
      }
      static Zero() {
        return new fS(bS.n.Zero(), bS.n.Zero())
      }
      static CreateNew(SS, HS, gS, tS, bS, XS, xS) {
        return fS.Zero().update(SS, HS, gS, tS, bS, XS, xS)
      }
      static CreateNewFromTo(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.e.IdentityReadOnly;
        const tS = new fS(new bS.n(0, 0, 0), new bS.n(0, 0, 0));
        return fS.CreateFromToToRef(SS, HS, tS, gS)
      }
      static CreateFromToToRef(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bS.e.IdentityReadOnly;
        gS.origin.dJ(SS);
        const XS = HS.subtractToRef(SS, gS.direction),
          xS = Math.sqrt(XS.x * XS.x + XS.y * XS.y + XS.z * XS.z);
        return gS.length = xS, gS.direction.normalize(), fS.TransformToRef(gS, tS, gS)
      }
      static Transform(SS, HS) {
        const gS = new fS(new bS.n(0, 0, 0), new bS.n(0, 0, 0));
        return fS.TransformToRef(SS, HS, gS), gS
      }
      static TransformToRef(SS, HS, gS) {
        bS.n.TransformCoordinatesToRef(SS.origin, HS, gS.origin), bS.n.TransformNormalToRef(SS.direction, HS, gS.direction), gS.length = SS.length, gS.epsilon = SS.epsilon;
        const tS = gS.direction,
          XS = tS.length();
        if (0 !== XS && 1 !== XS) {
          const SS = 1 / XS;
          tS.x *= SS, tS.y *= SS, tS.z *= SS, gS.length *= XS
        }
        return gS
      }
      unprojectRayToRef(SS, HS, gS, tS, XS, xS, NS) {
        const uS = bS.l.Matrix[0];
        XS.multiplyToRef(xS, uS), uS.multiplyToRef(NS, uS), uS.invert();
        const IS = qS.d.LastCreatedEngine,
          fS = bS.l.VK[0];
        fS.x = SS / gS * 2 - 1, fS.y = -(HS / tS * 2 - 1), fS.z = IS?.RgS ? 1 : IS?.isNDCHalfZRange ? 0 : -1;
        const kS = bS.l.VK[1].I5(fS.x, fS.y, 1 - 1e-8),
          aS = bS.l.VK[2],
          KS = bS.l.VK[3];
        bS.n.TransformCoordinatesToRef(fS, uS, aS), bS.n.TransformCoordinatesToRef(kS, uS, KS), this.origin.dJ(aS), KS.subtractToRef(aS, this.direction), this.direction.normalize()
      }
    }

    function kS(SS, HS, gS, tS, bS) {
      let XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const xS = fS.Zero();
      return aS(SS, HS, gS, tS, xS, bS, XS), xS
    }

    function aS(SS, HS, gS, tS, XS, xS) {
      let NS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const uS = SS.AK();
      if (!xS && !(xS = SS.activeCamera) && !(xS = SS.cameraToUseForPointers)) return SS;
      const IS = xS.viewport,
        fS = uS.getRenderHeight(),
        {
          x: kS,
          y: aS,
          width: KS,
          height: jS
        } = IS.toGlobal(uS.getRenderWidth(), fS),
        GS = 1 / uS.getHardwareScalingLevel();
      return HS = HS * GS - kS, gS = gS * GS - (fS - aS - jS), XS.update(HS, gS, KS, jS, tS || bS.e.IdentityReadOnly, NS ? bS.e.IdentityReadOnly : xS.getViewMatrix(), xS.getProjectionMatrix(), qS), SS
    }

    function KS(SS, HS, gS, tS) {
      const bS = fS.Zero();
      return jS(SS, HS, gS, bS, tS), bS
    }

    function jS(SS, HS, gS, tS, XS) {
      if (!NS.c) return SS;
      const xS = SS.AK();
      if (!XS && !(XS = SS.activeCamera) && !(XS = SS.cameraToUseForPointers)) throw new Error("Active camera not set");
      const qS = XS.viewport,
        uS = xS.getRenderHeight(),
        {
          x: IS,
          y: fS,
          width: kS,
          height: aS
        } = qS.toGlobal(xS.getRenderWidth(), uS),
        KS = bS.e.Identity(),
        jS = 1 / xS.getHardwareScalingLevel();
      return HS = HS * jS - IS, gS = gS * jS - (uS - fS - aS), tS.update(HS, gS, kS, aS, KS, KS, XS.getProjectionMatrix()), SS
    }

    function GS(SS, HS, gS, tS, bS, XS, xS, NS) {
      return CS(SS, gS, tS, HS(tS, gS.enableDistantPicking), bS, XS, xS, NS)
    }

    function CS(SS, HS, gS, tS, bS, XS, xS, NS) {
      const qS = HS.intersects(tS, bS, xS, XS, gS, NS);
      return qS && qS.hit ? !bS && null != SS && qS.distance >= SS.distance ? null : qS : null
    }

    function nS(SS, HS) {
      return "InstancedLinesMesh" === SS || "LinesMesh" === SS ? HS.intersectionThreshold : 0
    }

    function PS(SS) {
      const HS = SS.getClassName();
      if ("GreasedLineMesh" === HS) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const gS = SS.rawBoundingInfo;
      return {
        rawBoundingInfo: gS,
        intersectionThreshold: gS ? nS(HS, SS) : 0
      }
    }

    function QS(SS, HS, gS, tS, bS) {
      const XS = SS(gS, HS.enableDistantPicking);
      return XS.intersectsSphere(tS.QtS, bS) && XS.intersectsBox(tS.boundingBox, bS) ? XS : null
    }

    function DS(SS, HS, gS, tS, XS, xS) {
      let qS = null;
      const uS = !!(SS.activeCameras && SS.activeCameras.length > 1 && SS.cameraToUseForPointers !== SS.activeCamera),
        fS = SS.cameraToUseForPointers || SS.activeCamera,
        kS = IS.internalPickerForMesh || GS,
        aS = kS === GS;
      for (let NS = 0; NS < SS.meshes.length; NS++) {
        const IS = SS.meshes[NS];
        if (gS) {
          if (!gS(IS, -1)) continue
        } else if (!IS.isEnabled() || !IS.isVisible || !IS.Fj) continue;
        const KS = uS && IS.isWorldMatrixCameraDependent(),
          jS = IS.computeWorldMatrix(KS, fS);
        if (IS.hasThinInstances && IS.CHS) {
          const SS = kS(qS, HS, IS, jS, !0, !0, xS);
          if (SS) {
            if (XS) return SS;
            const {
              rawBoundingInfo: NS,
              intersectionThreshold: uS
            } = PS(IS), fS = IS._thinInstanceDataStorage.matrixData;
            if (fS) {
              const SS = bS.l.Matrix[0],
                KS = bS.l.Matrix[1],
                GS = Math.min(IS.O4, fS.length >> 4);
              for (let nS = 0; nS < GS; nS++) {
                if (gS && !gS(IS, nS)) continue;
                bS.e.FromArrayToRef(fS, nS << 4, SS), SS.multiplyToRef(jS, KS);
                const GS = aS && NS ? QS(HS, IS, KS, NS, uS) : null;
                if (aS && NS && !GS) continue;
                const PS = aS && GS ? CS(qS, IS, KS, GS, tS, XS, xS, !0) : kS(qS, HS, IS, KS, tS, XS, xS, !0);
                if (PS && (qS = PS, qS.thinInstanceIndex = nS, tS)) return qS
              }
            }
          }
        } else {
          const SS = kS(qS, HS, IS, jS, tS, XS, xS);
          if (SS && (qS = SS, tS)) return qS
        }
      }
      return qS || new NS.c
    }

    function wS(SS, HS, gS, tS) {
      if (!NS.c) return null;
      const XS = [],
        xS = !!(SS.activeCameras && SS.activeCameras.length > 1 && SS.cameraToUseForPointers !== SS.activeCamera),
        qS = SS.cameraToUseForPointers || SS.activeCamera,
        uS = IS.internalPickerForMesh || GS,
        fS = uS === GS;
      for (let NS = 0; NS < SS.meshes.length; NS++) {
        const IS = SS.meshes[NS];
        if (gS) {
          if (!gS(IS, -1)) continue
        } else if (!IS.isEnabled() || !IS.isVisible || !IS.Fj) continue;
        const kS = xS && IS.isWorldMatrixCameraDependent(),
          aS = IS.computeWorldMatrix(kS, qS);
        if (IS.hasThinInstances && IS.CHS) {
          if (uS(null, HS, IS, aS, !0, !0, tS)) {
            const {
              rawBoundingInfo: SS,
              intersectionThreshold: xS
            } = PS(IS), NS = IS._thinInstanceDataStorage.matrixData;
            if (NS) {
              const qS = bS.l.Matrix[0],
                kS = bS.l.Matrix[1],
                KS = Math.min(IS.O4, NS.length >> 4);
              for (let jS = 0; jS < KS; jS++) {
                if (gS && !gS(IS, jS)) continue;
                bS.e.FromArrayToRef(NS, jS << 4, qS), qS.multiplyToRef(aS, kS);
                const KS = fS && SS ? QS(HS, IS, kS, SS, xS) : null;
                if (fS && SS && !KS) continue;
                const GS = fS && KS ? CS(null, IS, kS, KS, !1, !1, tS, !0) : uS(null, HS, IS, kS, !1, !1, tS, !0);
                GS && (GS.thinInstanceIndex = jS, XS.push(GS))
              }
            }
          }
        } else {
          const SS = uS(null, HS, IS, aS, !1, !1, tS);
          SS && XS.push(SS)
        }
      }
      return XS
    }

    function hS(SS, HS, gS, tS, XS, xS) {
      if (!NS.c) return null;
      const qS = DS(SS, (tS => (SS._tempPickingRay || (SS._tempPickingRay = fS.Zero()), aS(SS, HS, gS, tS, SS._tempPickingRay, xS || null), SS._tempPickingRay)), tS, XS, !0);
      return qS && (qS.ray = kS(SS, HS, gS, bS.e.Identity(), xS || null)), qS
    }

    function ZS(SS, HS, gS, tS, XS, xS, NS) {
      const qS = DS(SS, ((tS, bS) => (SS._tempPickingRay || (SS._tempPickingRay = fS.Zero()), aS(SS, HS, gS, tS, SS._tempPickingRay, xS || null, !1, bS), SS._tempPickingRay)), tS, XS, !1, NS);
      return qS && (qS.ray = kS(SS, HS, gS, bS.e.Identity(), xS || null)), qS
    }

    function JS(SS, HS, gS, tS, XS) {
      const xS = DS(SS, (gS => (SS._pickWithRayInverseMatrix || (SS._pickWithRayInverseMatrix = bS.e.Identity()), gS.invertToRef(SS._pickWithRayInverseMatrix), SS._cachedRayForTransform || (SS._cachedRayForTransform = fS.Zero()), fS.TransformToRef(HS, SS._pickWithRayInverseMatrix, SS._cachedRayForTransform), SS._cachedRayForTransform)), gS, tS, !1, XS);
      return xS && (xS.ray = HS), xS
    }

    function OS(SS, HS, gS, tS, bS, XS) {
      return wS(SS, (tS => kS(SS, HS, gS, tS, bS || null)), tS, XS)
    }

    function dS(SS, HS, gS, tS) {
      return wS(SS, (gS => (SS._pickWithRayInverseMatrix || (SS._pickWithRayInverseMatrix = bS.e.Identity()), gS.invertToRef(SS._pickWithRayInverseMatrix), SS._cachedRayForTransform || (SS._cachedRayForTransform = fS.Zero()), fS.TransformToRef(HS, SS._pickWithRayInverseMatrix, SS._cachedRayForTransform), SS._cachedRayForTransform)), gS, tS)
    }

    function cS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        tS = arguments.length > 3 ? arguments[3] : void 0,
        XS = arguments.length > 4 ? arguments[4] : void 0;
      tS || (tS = SS.getWorldMatrix()), HS.length = gS, XS ? HS.origin.dJ(XS) : HS.origin.dJ(SS.position);
      const xS = bS.l.VK[2];
      xS.set(0, 0, SS._scene.useRightHandedSystem ? -1 : 1);
      const NS = bS.l.VK[3];
      return bS.n.TransformNormalToRef(xS, tS, NS), bS.n.NormalizeToRef(NS, HS.direction), HS
    }

    function vS(SS, HS) {
      HS && (HS.prototype.getForwardRay = function() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        return cS(this, new fS(bS.n.Zero(), bS.n.Zero(), SS), SS, HS, gS)
      }, HS.prototype.getForwardRayToRef = function(SS) {
        return cS(this, SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), SS && (uS.e._IsPickingAvailable = !0, SS.prototype.createPickingRay = function(SS, HS, gS, tS) {
        return kS(this, SS, HS, gS, tS, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    fS._TmpVector3 = (0, XS.d)(6, bS.n.Zero), fS._RayDistant = fS.Zero(), fS._Smallnum = 1e-8, fS._Rayl = 1e9
  },
  41579: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS.D
    });
    var tS = gS(40131),
      bS = gS(40248),
      XS = gS(41581);
    let xS = !1;
    xS || (xS = !0, (0, XS.b)(tS.i, bS.b), tS.i.prototype.createPickingRayToRef = function(SS, HS, gS, tS, bS) {
      let xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        NS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, XS.i)(this, SS, HS, gS, tS, bS, xS, NS)
    }, tS.i.prototype.createPickingRayInCameraSpace = function(SS, HS, gS) {
      return (0, XS.g)(this, SS, HS, gS)
    }, tS.i.prototype.createPickingRayInCameraSpaceToRef = function(SS, HS, gS, tS) {
      return (0, XS.e)(this, SS, HS, gS, tS)
    }, tS.i.prototype.pickWithBoundingInfo = function(SS, HS, gS, tS, bS) {
      return (0, XS.u)(this, SS, HS, gS, tS, bS)
    }, tS.i.prototype.Sa = function(SS, HS, gS, tS, bS, xS) {
      let NS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, XS.z)(this, SS, HS, gS, tS, bS, xS, NS)
    }, tS.i.prototype.pickWithRay = function(SS, HS, gS, tS) {
      return (0, XS.w)(this, SS, HS, gS, tS)
    }, tS.i.prototype.multiPick = function(SS, HS, gS, tS, bS) {
      return (0, XS.q)(this, SS, HS, gS, tS, bS)
    }, tS.i.prototype.multiPickWithRay = function(SS, HS, gS) {
      return (0, XS.m)(this, SS, HS, gS)
    })
  },
  41589: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => IS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(40304),
      NS = gS(41591),
      qS = gS(40256),
      uS = gS(37164);
    let IS = (() => {
        var SS;
        let HS, gS, qS, uS, IS, fS, kS, aS, KS = NS.b,
          jS = [],
          GS = [],
          CS = [],
          nS = [],
          PS = [],
          QS = [],
          DS = [],
          wS = [],
          hS = [],
          ZS = [],
          JS = [],
          OS = [],
          dS = [];
        return SS = class extends KS {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(SS) {
            this._shadowFrustumSize = SS, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(SS) {
            this._shadowOrthoScale = SS, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(SS) {
            this._orthoLeft = SS
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(SS) {
            this._orthoRight = SS
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(SS) {
            this._orthoTop = SS
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(SS) {
            this._orthoBottom = SS
          }
          constructor(SS, HS, gS, bS) {
            super(SS, gS, bS), this._shadowFrustumSize = ((0, tS.k)(this, jS), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, tS.k)(this, GS, !0), this.autoCalcShadowZBounds = ((0, tS.k)(this, CS), (0, tS.k)(this, nS, !1)), this._orthoLeft = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, Number.MAX_VALUE)), this._orthoRight = ((0, tS.k)(this, DS), (0, tS.k)(this, wS, Number.MIN_VALUE)), this._orthoTop = ((0, tS.k)(this, hS), (0, tS.k)(this, ZS, Number.MIN_VALUE)), this._orthoBottom = ((0, tS.k)(this, JS), (0, tS.k)(this, OS, Number.MAX_VALUE)), (0, tS.k)(this, dS), this.position = HS.scale(-1), this.direction = HS
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return xS.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(SS, HS, gS) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(SS) : this._setDefaultAutoExtendShadowProjectionMatrix(SS, HS, gS)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(SS) {
            const HS = this.lL().activeCamera;
            XS.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : HS ? HS.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : HS ? HS.maxZ : 1e4, SS, this.lL().AK().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(SS, HS, gS) {
            const tS = this.lL().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const SS = XS.n.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let tS = Number.MAX_VALUE,
                bS = -Number.MAX_VALUE;
              for (let xS = 0; xS < gS.length; xS++) {
                const NS = gS[xS];
                if (!NS) continue;
                const qS = NS.hA().boundingBox;
                for (let gS = 0; gS < qS.vectorsWorld.length; gS++) XS.n.TransformCoordinatesToRef(qS.vectorsWorld[gS], HS, SS), SS.x < this._orthoLeft && (this._orthoLeft = SS.x), SS.y < this._orthoBottom && (this._orthoBottom = SS.y), SS.x > this._orthoRight && (this._orthoRight = SS.x), SS.y > this._orthoTop && (this._orthoTop = SS.y), this.autoCalcShadowZBounds && (SS.z < tS && (tS = SS.z), SS.z > bS && (bS = SS.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = tS, this._shadowMaxZ = bS)
            }
            const bS = this._orthoRight - this._orthoLeft,
              xS = this._orthoTop - this._orthoBottom,
              NS = void 0 !== this.shadowMinZ ? this.shadowMinZ : tS?.minZ || 0,
              qS = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : tS?.maxZ || 1e4,
              uS = this.lL().AK().RgS;
            XS.e.OrthoOffCenterLHToRef(this._orthoLeft - bS * this.shadowOrthoScale, this._orthoRight + bS * this.shadowOrthoScale, this._orthoBottom - xS * this.shadowOrthoScale, this._orthoTop + xS * this.shadowOrthoScale, uS ? qS : NS, uS ? NS : qS, SS, this.lL().AK().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(SS, HS) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, HS), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, HS), this)
          }
          transferToNodeMaterialEffect(SS, HS) {
            return this.computeTransformedInformation() ? (SS.setFloat3(HS, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (SS.setFloat3(HS, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(SS) {
            const HS = this._scene.AK();
            return !HS.RgS && HS.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(SS) {
            const HS = this._scene.AK();
            return HS.RgS && HS.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(SS, HS) {
            SS["DIRLIGHT" + HS] = !0
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(KS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)("orthoLeft")], fS = [(0, bS.M)("orthoRight")], kS = [(0, bS.M)("orthoTop")], aS = [(0, bS.M)("orthoBottom")], (0, tS.j)(SS, null, HS, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: SS => "shadowFrustumSize" in SS,
              get: SS => SS.shadowFrustumSize
            },
            metadata: XS
          }, null, jS), (0, tS.j)(SS, null, gS, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: SS => "shadowOrthoScale" in SS,
              get: SS => SS.shadowOrthoScale
            },
            metadata: XS
          }, null, jS), (0, tS.j)(null, null, qS, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: SS => "autoUpdateExtends" in SS,
              get: SS => SS.autoUpdateExtends,
              set: (SS, HS) => {
                SS.autoUpdateExtends = HS
              }
            },
            metadata: XS
          }, GS, CS), (0, tS.j)(null, null, uS, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: SS => "autoCalcShadowZBounds" in SS,
              get: SS => SS.autoCalcShadowZBounds,
              set: (SS, HS) => {
                SS.autoCalcShadowZBounds = HS
              }
            },
            metadata: XS
          }, nS, PS), (0, tS.j)(null, null, IS, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: SS => "_orthoLeft" in SS,
              get: SS => SS._orthoLeft,
              set: (SS, HS) => {
                SS._orthoLeft = HS
              }
            },
            metadata: XS
          }, QS, DS), (0, tS.j)(null, null, fS, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: SS => "_orthoRight" in SS,
              get: SS => SS._orthoRight,
              set: (SS, HS) => {
                SS._orthoRight = HS
              }
            },
            metadata: XS
          }, wS, hS), (0, tS.j)(null, null, kS, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: SS => "_orthoTop" in SS,
              get: SS => SS._orthoTop,
              set: (SS, HS) => {
                SS._orthoTop = HS
              }
            },
            metadata: XS
          }, ZS, JS), (0, tS.j)(null, null, aS, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: SS => "_orthoBottom" in SS,
              get: SS => SS._orthoBottom,
              set: (SS, HS) => {
                SS._orthoBottom = HS
              }
            },
            metadata: XS
          }, OS, dS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      fS = !1;
    fS || (fS = !0, qS.e.AddNodeConstructor("Light_Type_1", ((SS, HS) => () => new IS(SS, XS.n.Zero(), HS))), (0, uS.f)("BABYLON.DirectionalLight", IS))
  },
  41605: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => FH
    });
    var tS = gS(38715),
      bS = gS(37144),
      XS = gS(37117),
      xS = gS(40183),
      NS = gS(41613),
      qS = gS(37138),
      uS = gS(40320),
      IS = gS(37300),
      fS = gS(38721),
      kS = gS(38683),
      aS = gS(37149);
    class KS {
      constructor() {
        this.direction1 = new XS.n(0, 1, 0), this.direction2 = new XS.n(0, 1, 0)
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = (0, aS.RandomRange)(this.direction1.x, this.direction2.x),
          xS = (0, aS.RandomRange)(this.direction1.y, this.direction2.y),
          NS = (0, aS.RandomRange)(this.direction1.z, this.direction2.z);
        tS ? HS.I5(bS, xS, NS) : XS.n.TransformNormalFromFloatsToRef(bS, xS, NS, SS, HS)
      }
      startPositionFunction(SS, HS, gS, tS) {
        tS ? HS.I5(0, 0, 0) : XS.n.TransformCoordinatesFromFloatsToRef(0, 0, 0, SS, HS)
      }
      clone() {
        const SS = new KS;
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setVector3("direction1", this.direction1), SS.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(SS) {
        SS.addUniform("direction1", 3), SS.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.direction1 = this.direction1.lgS(), SS.direction2 = this.direction2.lgS(), SS
      }
      parse(SS) {
        XS.n.FromArrayToRef(SS.direction1, 0, this.direction1), XS.n.FromArrayToRef(SS.direction2, 0, this.direction2)
      }
    }
    class jS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = SS, this.radiusRange = HS, this.directionRandomizer = gS
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = gS.position.subtract(SS.getTranslation()).normalize(),
          xS = (0, aS.RandomRange)(0, this.directionRandomizer),
          NS = (0, aS.RandomRange)(0, this.directionRandomizer),
          qS = (0, aS.RandomRange)(0, this.directionRandomizer);
        bS.x += xS, bS.y += NS, bS.z += qS, bS.normalize(), tS ? HS.dJ(bS) : XS.n.TransformNormalFromFloatsToRef(bS.x, bS.y, bS.z, SS, HS)
      }
      startPositionFunction(SS, HS, gS, tS) {
        const bS = this.radius - (0, aS.RandomRange)(0, this.radius * this.radiusRange),
          xS = (0, aS.RandomRange)(0, 1),
          NS = (0, aS.RandomRange)(0, 2 * Math.PI),
          qS = Math.acos(2 * xS - 1),
          uS = bS * Math.cos(NS) * Math.sin(qS),
          IS = bS * Math.cos(qS),
          fS = bS * Math.sin(NS) * Math.sin(qS);
        tS ? HS.I5(uS, Math.abs(IS), fS) : XS.n.TransformCoordinatesFromFloatsToRef(uS, Math.abs(IS), fS, SS, HS)
      }
      clone() {
        const SS = new jS(this.radius, this.directionRandomizer);
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setFloat("radius", this.radius), SS.setFloat("radiusRange", this.radiusRange), SS.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(SS) {
        SS.addUniform("radius", 1), SS.addUniform("radiusRange", 1), SS.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.radius = this.radius, SS.radiusRange = this.radiusRange, SS.directionRandomizer = this.directionRandomizer, SS
      }
      parse(SS) {
        this.radius = SS.radius, this.radiusRange = SS.radiusRange, this.directionRandomizer = SS.directionRandomizer
      }
    }
    class GS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = SS, this.radiusRange = HS, this.directionRandomizer = gS
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = gS.position.subtract(SS.getTranslation()).normalize(),
          xS = (0, aS.RandomRange)(0, this.directionRandomizer),
          NS = (0, aS.RandomRange)(0, this.directionRandomizer),
          qS = (0, aS.RandomRange)(0, this.directionRandomizer);
        bS.x += xS, bS.y += NS, bS.z += qS, bS.normalize(), tS ? HS.dJ(bS) : XS.n.TransformNormalFromFloatsToRef(bS.x, bS.y, bS.z, SS, HS)
      }
      startPositionFunction(SS, HS, gS, tS) {
        const bS = this.radius - (0, aS.RandomRange)(0, this.radius * this.radiusRange),
          xS = (0, aS.RandomRange)(0, 1),
          NS = (0, aS.RandomRange)(0, 2 * Math.PI),
          qS = Math.acos(2 * xS - 1),
          uS = bS * Math.cos(NS) * Math.sin(qS),
          IS = bS * Math.cos(qS),
          fS = bS * Math.sin(NS) * Math.sin(qS);
        tS ? HS.I5(uS, IS, fS) : XS.n.TransformCoordinatesFromFloatsToRef(uS, IS, fS, SS, HS)
      }
      clone() {
        const SS = new GS(this.radius, this.directionRandomizer);
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setFloat("radius", this.radius), SS.setFloat("radiusRange", this.radiusRange), SS.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(SS) {
        SS.addUniform("radius", 1), SS.addUniform("radiusRange", 1), SS.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.radius = this.radius, SS.radiusRange = this.radiusRange, SS.directionRandomizer = this.directionRandomizer, SS
      }
      parse(SS) {
        this.radius = SS.radius, this.radiusRange = SS.radiusRange, this.directionRandomizer = SS.directionRandomizer
      }
    }
    class CS extends GS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new XS.n(0, 1, 0),
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XS.n(0, 1, 0);
        super(SS), this.direction1 = HS, this.direction2 = gS
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = (0, aS.RandomRange)(this.direction1.x, this.direction2.x),
          xS = (0, aS.RandomRange)(this.direction1.y, this.direction2.y),
          NS = (0, aS.RandomRange)(this.direction1.z, this.direction2.z);
        tS ? HS.I5(bS, xS, NS) : XS.n.TransformNormalFromFloatsToRef(bS, xS, NS, SS, HS)
      }
      clone() {
        const SS = new CS(this.radius, this.direction1, this.direction2);
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setFloat("radius", this.radius), SS.setFloat("radiusRange", this.radiusRange), SS.setVector3("direction1", this.direction1), SS.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(SS) {
        SS.addUniform("radius", 1), SS.addUniform("radiusRange", 1), SS.addUniform("direction1", 3), SS.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const SS = super.serialize();
        return SS.direction1 = this.direction1.lgS(), SS.direction2 = this.direction2.lgS(), SS
      }
      parse(SS) {
        super.parse(SS), XS.n.FromArrayToRef(SS.direction1, 0, this.direction1), XS.n.FromArrayToRef(SS.direction2, 0, this.direction2)
      }
    }
    var nS = gS(38678);
    class PS {
      get radius() {
        return this._radius
      }
      set radius(SS) {
        this._radius = SS, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(SS) {
        this._angle = SS, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = gS, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = HS, this.radius = SS
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = gS.position.subtract(SS.getTranslation()).normalize(),
          xS = (0, aS.RandomRange)(0, this.directionRandomizer),
          NS = (0, aS.RandomRange)(0, this.directionRandomizer),
          qS = (0, aS.RandomRange)(0, this.directionRandomizer);
        bS.x += xS, bS.y += NS, bS.z += qS, bS.normalize(), tS ? HS.dJ(bS) : XS.n.TransformNormalFromFloatsToRef(bS.x, bS.y, bS.z, SS, HS)
      }
      startPositionFunction(SS, HS, gS, tS) {
        const bS = (0, aS.RandomRange)(0, 2 * Math.PI);
        let xS;
        this.emitFromSpawnPointOnly ? xS = 1e-4 : (xS = (0, aS.RandomRange)(0, this.heightRange), xS = 1 - xS * xS);
        let NS = this._radius - (0, aS.RandomRange)(0, this._radius * this.radiusRange);
        NS *= xS;
        const qS = NS * Math.sin(bS),
          uS = NS * Math.cos(bS),
          IS = xS * this._height;
        if (tS) return HS.x = qS, HS.y = IS, void(HS.z = uS);
        XS.n.TransformCoordinatesFromFloatsToRef(qS, IS, uS, SS, HS)
      }
      clone() {
        const SS = new PS(this._radius, this._angle, this.directionRandomizer);
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setFloat2("radius", this._radius, this.radiusRange), SS.setFloat("coneAngle", this._angle), SS.setFloat2("height", this._height, this.heightRange), SS.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(SS) {
        SS.addUniform("radius", 2), SS.addUniform("coneAngle", 1), SS.addUniform("height", 2), SS.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let SS = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (SS += "\n#define CONEEMITTERSPAWNPOINT"), SS
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.radius = this._radius, SS.angle = this._angle, SS.directionRandomizer = this.directionRandomizer, SS.radiusRange = this.radiusRange, SS.heightRange = this.heightRange, SS.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, SS
      }
      parse(SS) {
        this.radius = SS.radius, this.angle = SS.angle, this.directionRandomizer = SS.directionRandomizer, this.radiusRange = void 0 !== SS.radiusRange ? SS.radiusRange : 1, this.heightRange = void 0 !== SS.heightRange ? SS.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== SS.emitFromSpawnPointOnly && SS.emitFromSpawnPointOnly
      }
    }
    class QS extends PS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XS.n(0, 1, 0),
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XS.n(0, 1, 0);
        super(SS, HS), this.direction1 = gS, this.direction2 = tS
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = (0, aS.RandomRange)(this.direction1.x, this.direction2.x),
          xS = (0, aS.RandomRange)(this.direction1.y, this.direction2.y),
          NS = (0, aS.RandomRange)(this.direction1.z, this.direction2.z);
        tS ? HS.I5(bS, xS, NS) : XS.n.TransformNormalFromFloatsToRef(bS, xS, NS, SS, HS)
      }
      clone() {
        const SS = new QS(this.radius, this.angle, this.direction1, this.direction2);
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        super.applyToShader(SS), SS.setVector3("direction1", this.direction1), SS.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(SS) {
        super.buildUniformLayout(SS), SS.addUniform("direction1", 3), SS.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const SS = super.serialize();
        return SS.direction1 = this.direction1.lgS(), SS.direction2 = this.direction2.lgS(), SS
      }
      parse(SS) {
        super.parse(SS), XS.n.FromArrayToRef(SS.direction1, 0, this.direction1), XS.n.FromArrayToRef(SS.direction2, 0, this.direction2)
      }
    }
    class DS {
      get mesh() {
        return this._mesh
      }
      set mesh(SS) {
        this._mesh !== SS && (this._mesh = SS, SS ? (this._indices = SS.mgS(), this._positions = SS.getVerticesData(xS.h.PositionKind), this._normals = SS.getVerticesData(xS.h.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = XS.n.Zero(), this._mesh = null, this.direction1 = new XS.n(0, 1, 0), this.direction2 = new XS.n(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = SS
      }
      startDirectionFunction(SS, HS, gS, tS) {
        if (this.useMeshNormalsForDirection && this._normals) return void XS.n.TransformNormalToRef(this._storedNormal, SS, HS);
        const bS = (0, aS.RandomRange)(this.direction1.x, this.direction2.x),
          xS = (0, aS.RandomRange)(this.direction1.y, this.direction2.y),
          NS = (0, aS.RandomRange)(this.direction1.z, this.direction2.z);
        tS ? HS.I5(bS, xS, NS) : XS.n.TransformNormalFromFloatsToRef(bS, xS, NS, SS, HS)
      }
      startPositionFunction(SS, HS, gS, tS) {
        if (!this._indices || !this._positions) return;
        const bS = 3 * (Math.random() * (this._indices.length / 3) | 0),
          xS = Math.random(),
          NS = Math.random() * (1 - xS),
          qS = 1 - xS - NS,
          uS = this._indices[bS],
          IS = this._indices[bS + 1],
          fS = this._indices[bS + 2],
          kS = XS.l.VK[0],
          aS = XS.l.VK[1],
          KS = XS.l.VK[2],
          jS = XS.l.VK[3];
        XS.n.FromArrayToRef(this._positions, 3 * uS, kS), XS.n.FromArrayToRef(this._positions, 3 * IS, aS), XS.n.FromArrayToRef(this._positions, 3 * fS, KS), jS.x = xS * kS.x + NS * aS.x + qS * KS.x, jS.y = xS * kS.y + NS * aS.y + qS * KS.y, jS.z = xS * kS.z + NS * aS.z + qS * KS.z, tS ? HS.I5(jS.x, jS.y, jS.z) : XS.n.TransformCoordinatesFromFloatsToRef(jS.x, jS.y, jS.z, SS, HS), this.useMeshNormalsForDirection && this._normals && (XS.n.FromArrayToRef(this._normals, 3 * uS, kS), XS.n.FromArrayToRef(this._normals, 3 * IS, aS), XS.n.FromArrayToRef(this._normals, 3 * fS, KS), this._storedNormal.x = xS * kS.x + NS * aS.x + qS * KS.x, this._storedNormal.y = xS * kS.y + NS * aS.y + qS * KS.y, this._storedNormal.z = xS * kS.z + NS * aS.z + qS * KS.z)
      }
      clone() {
        const SS = new DS(this.mesh);
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setVector3("direction1", this.direction1), SS.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(SS) {
        SS.addUniform("direction1", 3), SS.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.direction1 = this.direction1.lgS(), SS.direction2 = this.direction2.lgS(), SS.meshId = this.mesh?.id, SS.useMeshNormalsForDirection = this.useMeshNormalsForDirection, SS
      }
      parse(SS, HS) {
        XS.n.FromArrayToRef(SS.direction1, 0, this.direction1), XS.n.FromArrayToRef(SS.direction2, 0, this.direction2), SS.meshId && HS && (this.mesh = HS.getLastMeshById(SS.meshId)), this.useMeshNormalsForDirection = SS.useMeshNormalsForDirection
      }
    }
    class wS {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(SS) {
        this._targetStopDuration !== SS && (this._targetStopDuration = SS)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(SS) {
        this._noiseTexture !== SS && (this._noiseTexture = SS, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(SS) {
        this._attractors.push(SS)
      }
      removeAttractor(SS) {
        const HS = this._attractors.indexOf(SS); - 1 !== HS && this._attractors.splice(HS, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(SS) {
        this._animationSheetEnabled !== SS && (this._animationSheetEnabled = SS)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(SS) {
        this._isAnimationSheetEnabled != SS && (this._isAnimationSheetEnabled = SS, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(SS) {
        this._useLogarithmicDepth = SS && this.lL().AK().getCaps().fragmentDepthSupported
      }
      lL() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(SS) {
        switch (SS) {
          case wS.BLENDMODE_MULTIPLYADD:
            return;
          case wS.BLENDMODE_ADD:
            SS = 1;
            break;
          case wS.BLENDMODE_ONEONE:
            SS = 6;
            break;
          case wS.BLENDMODE_STANDARD:
            SS = 2;
            break;
          case wS.BLENDMODE_MULTIPLY:
            SS = 4;
            break;
          case wS.BLENDMODE_SUBTRACT:
            SS = 3
        }
        this._engine.setAlphaMode(SS)
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
      addEmitRateGradient(SS, HS, gS) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, SS, HS, gS), this
      }
      removeEmitRateGradient(SS) {
        return this._removeFactorGradient(this._emitRateGradients, SS), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : XS.n.Zero()
      }
      set direction1(SS) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = SS)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : XS.n.Zero()
      }
      set direction2(SS) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = SS)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : XS.n.Zero()
      }
      set minEmitBox(SS) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = SS)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : XS.n.Zero()
      }
      set maxEmitBox(SS) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = SS)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(SS) {
        this._billboardMode !== SS && (this._billboardMode = SS, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(SS) {
        this._isBillboardBased !== SS && (this._isBillboardBased = SS, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(SS) {
        this._attachImageProcessingConfiguration(SS)
      }
      _attachImageProcessingConfiguration(SS) {
        SS !== this._imageProcessingConfiguration && (!SS && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = SS)
      }
      _reset() {}
      _addFactorGradient(SS, HS, gS, bS) {
        const XS = new tS.j(HS, gS, bS);
        SS.push(XS), SS.sort(((SS, HS) => SS.gradient < HS.gradient ? -1 : SS.gradient > HS.gradient ? 1 : 0))
      }
      _removeFactorGradient(SS, HS) {
        if (!SS) return;
        let gS = 0;
        for (const tS of SS) {
          if (tS.gradient === HS) {
            SS.splice(gS, 1);
            break
          }
          gS++
        }
      }
      _removeGradientAndTexture(SS, HS, gS) {
        if (!HS) return this;
        let tS = 0;
        for (const bS of HS) {
          if (bS.gradient === SS) {
            HS.splice(tS, 1);
            break
          }
          tS++
        }
        return gS && gS.dispose(), this
      }
      constructor(SS) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = XS.n.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new XS.n(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = wS.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new XS.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new XS.n(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = XS.n.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new IS.c(1, 1, 1, 1), this.color2 = new IS.c(1, 1, 1, 1), this.colorDead = new IS.c(0, 0, 0, 1), this.textureMask = new IS.c(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new uS.c, this.id = SS, this.name = SS
      }
      createPointEmitter(SS, HS) {
        const gS = function(SS, HS) {
          const gS = new KS;
          return gS.direction1 = SS, gS.direction2 = HS, gS
        }(SS, HS);
        return this.particleEmitterType = gS, gS
      }
      createHemisphericEmitter() {
        const SS = function() {
          return new jS(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = SS, SS
      }
      createSphereEmitter() {
        const SS = function() {
          return new GS(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = SS, SS
      }
      createDirectedSphereEmitter() {
        const SS = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new XS.n(0, 1, 0),
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XS.n(0, 1, 0);
          return new CS(SS, HS, gS)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new XS.n(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XS.n(0, 1, 0));
        return this.particleEmitterType = SS, SS
      }
      createCylinderEmitter() {
        const SS = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new nS.e(SS, HS, gS, tS)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = SS, SS
      }
      createDirectedCylinderEmitter() {
        const SS = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XS.n(0, 1, 0),
            bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new XS.n(0, 1, 0);
          return new nS.d(SS, HS, gS, tS, bS)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XS.n(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new XS.n(0, 1, 0));
        return this.particleEmitterType = SS, SS
      }
      createConeEmitter() {
        const SS = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new PS(SS, HS)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = SS, SS
      }
      createDirectedConeEmitter() {
        const SS = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XS.n(0, 1, 0),
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XS.n(0, 1, 0);
          return new QS(SS, HS, gS, tS)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new XS.n(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new XS.n(0, 1, 0));
        return this.particleEmitterType = SS, SS
      }
      createBoxEmitter(SS, HS, gS, tS) {
        const bS = new fS.b;
        return this.particleEmitterType = bS, this.direction1 = SS, this.direction2 = HS, this.minEmitBox = gS, this.maxEmitBox = tS, bS
      }
      createMeshEmitter() {
        const SS = function() {
          return new DS(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = SS, SS
      }
    }
    wS.BLENDMODE_ONEONE = 0, wS.BLENDMODE_STANDARD = 1, wS.BLENDMODE_ADD = 2, wS.BLENDMODE_MULTIPLY = 3, wS.BLENDMODE_MULTIPLYADD = 4, wS.BLENDMODE_SUBTRACT = -1;
    class hS {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new IS.c(0, 0, 0, 0), this.currentColor2 = new IS.c(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = XS.n.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class ZS {
      constructor(SS) {
        this.particleSystem = SS, this.position = XS.n.Zero(), this.direction = XS.n.Zero(), this.color = new IS.c(0, 0, 0, 0), this.colorStep = new IS.c(0, 0, 0, 0), this.initialColor = new IS.c(0, 0, 0, 0), this.colorDead = new IS.c(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new XS.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new hS, this.id = ZS._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let SS = this.age,
          HS = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === HS ? (HS = 1, SS = this._properties.randomCellOffset) : SS += this._properties.randomCellOffset);
        const gS = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let tS;
        tS = this._properties.initialSpriteCellLoop ? (0, aS.Clamp)(SS * HS % this.lifeTime / this.lifeTime) : (0, aS.Clamp)(SS * HS / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + tS * gS | 0
      }
      _inheritParticleInfoToSubEmitter(SS) {
        if (SS.particleSystem.emitter.position) {
          const HS = SS.particleSystem.emitter;
          if (HS.position.dJ(this.position), SS.inheritDirection) {
            const SS = XS.l.VK[0];
            this.direction.normalizeToRef(SS), HS.setDirection(SS, 0, Math.PI / 2)
          }
        } else {
          SS.particleSystem.emitter.dJ(this.position)
        }
        this.direction.scaleToRef(SS.inheritedVelocityAmount / 2, XS.l.VK[0]), SS.particleSystem._inheritedVelocityOffset.dJ(XS.l.VK[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const SS of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(SS)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = ZS._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(SS) {
        SS.position.dJ(this.position), this._properties.initialDirection ? SS._properties.initialDirection ? SS._properties.initialDirection.dJ(this._properties.initialDirection) : SS._properties.initialDirection = this._properties.initialDirection.clone() : SS._properties.initialDirection = null, SS.direction.dJ(this.direction), this._properties.localPosition && (SS._properties.localPosition ? SS._properties.localPosition.dJ(this._properties.localPosition) : SS._properties.localPosition = this._properties.localPosition.clone()), SS.color.dJ(this.color), SS.colorStep.dJ(this.colorStep), SS.initialColor.dJ(this.initialColor), SS.colorDead.dJ(this.colorDead), SS.lifeTime = this.lifeTime, SS.age = this.age, SS._properties.randomCellOffset = this._properties.randomCellOffset, SS.size = this.size, SS.scale.dJ(this.scale), SS.angle = this.angle, SS.angularSpeed = this.angularSpeed, SS.particleSystem = this.particleSystem, SS.cellIndex = this.cellIndex, SS.id = this.id, SS._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (SS._properties.currentColorGradient = this._properties.currentColorGradient, SS._properties.currentColor1.dJ(this._properties.currentColor1), SS._properties.currentColor2.dJ(this._properties.currentColor2)), this._properties.currentSizeGradient && (SS._properties.currentSizeGradient = this._properties.currentSizeGradient, SS._properties.currentSize1 = this._properties.currentSize1, SS._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (SS._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, SS._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, SS._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (SS._properties.currentVelocityGradient = this._properties.currentVelocityGradient, SS._properties.currentVelocity1 = this._properties.currentVelocity1, SS._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (SS._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, SS._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, SS._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (SS._properties.currentDragGradient = this._properties.currentDragGradient, SS._properties.currentDrag1 = this._properties.currentDrag1, SS._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (SS._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, SS._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, SS._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (SS.remapData && this.remapData ? SS.remapData.dJ(this.remapData) : SS.remapData = new XS.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (SS._properties.randomNoiseCoordinates1 && SS._properties.randomNoiseCoordinates2 ? (SS._properties.randomNoiseCoordinates1.dJ(this._properties.randomNoiseCoordinates1), SS._properties.randomNoiseCoordinates2.dJ(this._properties.randomNoiseCoordinates2)) : (SS._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), SS._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), SS.metadata = this.metadata
      }
    }
    ZS._Count = 0;
    var JS = gS(41111);
    class OS {
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
      constructor(SS, HS, gS, tS) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = HS, this.wT = SS, this._scene = gS, this._host = tS, this._activeTargets = [], HS._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            qX: this._getCorrectLoopMode()
          }, this._animation.dataType === JS.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = XS.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const SS = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, SS)
        }
        if (this.wT instanceof Array) {
          let SS = 0;
          for (const HS of this.wT) this._preparePath(HS, SS), this._getOriginalValues(SS), SS++;
          this._targetIsArray = !0
        } else this._preparePath(this.wT), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const bS = HS.getEvents();
        if (bS && bS.length > 0)
          for (const XS of bS) this._events.push(XS._clone());
        this._enableBlending = SS && SS.animationPropertiesOverride ? SS.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = this._animation.targetPropertyPath;
        if (gS.length > 1) {
          let tS = SS;
          for (let SS = 0; SS < gS.length - 1; SS++) {
            const HS = gS[SS];
            if (tS = tS[HS], void 0 === tS) throw new Error(`Invalid property (${HS}) in property path (${gS.join(".")})`)
          }
          this._targetPath = gS[gS.length - 1], this._activeTargets[HS] = tS
        } else this._targetPath = gS[0], this._activeTargets[HS] = SS;
        if (void 0 === this._activeTargets[HS][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${gS.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.wT instanceof Array) {
            let SS = 0;
            for (const HS of this.wT) void 0 !== this._originalValue[SS] && this._setValue(HS, this._activeTargets[SS], this._originalValue[SS], -1, SS), SS++
          } else void 0 !== this._originalValue[0] && this._setValue(this.wT, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let SS = 0; SS < this._events.length; SS++) this._events[SS].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const SS = this._animation.runtimeAnimations.indexOf(this);
        SS > -1 && this._animation.runtimeAnimations.splice(SS, 1)
      }
      setValue(SS, HS) {
        if (this._targetIsArray)
          for (let gS = 0; gS < this.wT.length; gS++) {
            const tS = this.wT[gS];
            this._setValue(tS, this._activeTargets[gS], SS, HS, gS)
          } else this._setValue(this.wT, this._directTarget, SS, HS, 0)
      }
      _getOriginalValues() {
        let SS, HS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const gS = this._activeTargets[HS];
        if (JS.d.InheritOriginalValueFromActiveAnimations) {
          const SS = this._scene._activeAnimatables;
          for (let tS = 0; tS < SS.length; tS++) {
            const bS = SS[tS]._runtimeAnimations;
            for (let SS = 0; SS < bS.length; SS++) {
              const tS = bS[SS];
              if (tS !== this && tS._targetPath === this._targetPath)
                for (let SS = 0; SS < tS._activeTargets.length; SS++)
                  if (tS._activeTargets[SS] === gS && void 0 !== tS._originalValue[SS]) return void(tS._originalValue[SS] && tS._originalValue[SS].clone ? this._originalValue[HS] = tS._originalValue[SS].clone() : this._originalValue[HS] = tS._originalValue[SS])
            }
          }
        }
        SS = gS.getLocalMatrix && "_matrix" === this._targetPath ? gS.getLocalMatrix() : gS[this._targetPath], SS && SS.clone ? this._originalValue[HS] = SS.clone() : this._originalValue[HS] = SS
      }
      _registerTargetForLateAnimationBinding(SS, HS) {
        const gS = SS.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(gS), gS._lateAnimationHolders || (gS._lateAnimationHolders = {}), gS._lateAnimationHolders[SS.targetPath] || (gS._lateAnimationHolders[SS.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: HS
        }), SS.isAdditive ? (gS._lateAnimationHolders[SS.targetPath].additiveAnimations.push(SS), gS._lateAnimationHolders[SS.targetPath].totalAdditiveWeight += SS.weight) : (gS._lateAnimationHolders[SS.targetPath].animations.push(SS), gS._lateAnimationHolders[SS.targetPath].totalWeight += SS.weight)
      }
      _setValue(SS, HS, gS, tS, bS) {
        const xS = this._scene._animationWrites,
          NS = this._scene._animationWriteCount++;
        let qS = xS[NS];
        if (qS || (qS = xS[NS] = {
            runtimeAnimation: this,
            target: SS,
            weight: tS,
            additive: !1,
            blendingFactor: 1,
            NG: !1
          }), qS.runtimeAnimation = this, qS.target = SS, qS.weight = tS, qS.additive = this.isAdditive, qS.NG = !1, this._currentActiveTarget = HS, this._weight = tS, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const SS = HS[this._targetPath];
            SS.clone ? this._originalBlendValue = SS.clone() : this._originalBlendValue = SS
          }
          this._originalBlendValue.m ? JS.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? XS.e.DecomposeLerpToRef(this._originalBlendValue, gS, this._blendingFactor, this._currentValue) : this._currentValue = XS.e.DecomposeLerp(this._originalBlendValue, gS, this._blendingFactor) : this._currentValue ? XS.e.LerpToRef(this._originalBlendValue, gS, this._blendingFactor, this._currentValue) : this._currentValue = XS.e.Lerp(this._originalBlendValue, gS, this._blendingFactor) : this._currentValue = JS.d._UniversalLerp(this._originalBlendValue, gS, this._blendingFactor);
          const tS = SS && SS.animationPropertiesOverride ? SS.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          qS.blendingFactor = this._blendingFactor, this._blendingFactor += tS
        } else qS.blendingFactor = 1, this._currentValue ? this._currentValue.dJ ? this._currentValue.dJ(gS) : this._currentValue = gS : this._currentValue = gS?.clone ? gS.clone() : gS; - 1 !== tS ? this._registerTargetForLateAnimationBinding(this, this._originalValue[bS]) : this._animationState.qX === JS.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[bS], HS[this._targetPath]) : HS[this._targetPath] = this._originalValue[bS] + this._currentValue : HS[this._targetPath] = this._currentValue, SS.OHS && SS.OHS(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.wT && this.wT.animationPropertiesOverride) {
          return "MorphTarget" === this.wT.getClassName?.() && null == this.wT._animationPropertiesOverride ? this._animation.qX : this.wT.animationPropertiesOverride.qX
        }
        return this._animation.qX
      }
      goToFrame(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const gS = this._animation.getKeys();
        SS < gS[0].frame ? SS = gS[0].frame : SS > gS[gS.length - 1].frame && (SS = gS[gS.length - 1].frame);
        const tS = this._events;
        if (tS.length)
          for (let XS = 0; XS < tS.length; XS++) tS[XS].onlyOnce || (tS[XS].isDone = tS[XS].frame < SS);
        this._currentFrame = SS;
        const bS = this._animation._interpolate(SS, this._animationState);
        this.setValue(bS, HS)
      }
      _prepareForSpeedRatioChange(SS) {
        const HS = this._previousElapsedTime * (this._animation.framePerSecond * SS) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - HS
      }
      animate(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const xS = this._animation,
          NS = xS.targetPropertyPath;
        if (!NS || NS.length < 1) return this._stopped = !0, !1;
        let qS, uS = !0;
        const IS = this._events;
        let fS;
        if (this._coreRuntimeAnimation) fS = gS - HS, qS = this._coreRuntimeAnimation.currentFrame, this._currentFrame = qS, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let XS;
          (HS < this._minFrame || HS > this._maxFrame) && (HS = this._minFrame), (gS < this._minFrame || gS > this._maxFrame) && (gS = this._maxFrame), fS = gS - HS;
          let NS = SS * (xS.framePerSecond * bS) / 1e3 + this._absoluteFrameOffset,
            kS = 0,
            aS = !1;
          const KS = tS && this._animationState.qX === JS.d.ANIMATIONLOOPMODE_YOYO;
          if (KS) {
            const SS = (NS - HS) / fS,
              gS = Math.sin(SS * Math.PI);
            NS = Math.abs(gS) * fS + HS;
            const tS = gS >= 0 ? 1 : -1;
            this._yoyoDirection !== tS && (aS = !0), this._yoyoDirection = tS
          }
          if (this._previousElapsedTime = SS, this._previousAbsoluteFrame = NS, !tS && gS >= HS && (NS >= fS && bS > 0 || NS <= 0 && bS < 0)) uS = !1, kS = xS.evaluate(gS);
          else if (!tS && HS >= gS && (NS <= fS && bS < 0 || NS >= 0 && bS > 0)) uS = !1, kS = xS.evaluate(HS);
          else if (this._animationState.qX !== JS.d.ANIMATIONLOOPMODE_CYCLE) {
            const SS = gS.toString() + HS.toString();
            if (!this._offsetsCache[SS]) {
              this._animationState.repeatCount = 0, this._animationState.qX = JS.d.ANIMATIONLOOPMODE_CYCLE;
              const tS = xS._interpolate(HS, this._animationState),
                bS = xS._interpolate(gS, this._animationState);
              switch (this._animationState.qX = this._getCorrectLoopMode(), xS.dataType) {
                case JS.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[SS] = bS - tS;
                  break;
                case JS.d.ANIMATIONTYPE_QUATERNION:
                case JS.d.ANIMATIONTYPE_VECTOR3:
                case JS.d.ANIMATIONTYPE_VECTOR2:
                case JS.d.ANIMATIONTYPE_SIZE:
                case JS.d.ANIMATIONTYPE_COLOR3:
                case JS.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[SS] = bS.subtract(tS)
              }
              this._highLimitsCache[SS] = bS
            }
            kS = this._highLimitsCache[SS], XS = this._offsetsCache[SS]
          }
          if (void 0 === XS) switch (xS.dataType) {
            case JS.d.ANIMATIONTYPE_FLOAT:
              XS = 0;
              break;
            case JS.d.ANIMATIONTYPE_QUATERNION:
              XS = JS.k;
              break;
            case JS.d.ANIMATIONTYPE_VECTOR3:
              XS = JS.q;
              break;
            case JS.d.ANIMATIONTYPE_VECTOR2:
              XS = JS.o;
              break;
            case JS.d.ANIMATIONTYPE_SIZE:
              XS = JS.n;
              break;
            case JS.d.ANIMATIONTYPE_COLOR3:
              XS = JS.g;
              break;
            case JS.d.ANIMATIONTYPE_COLOR4:
              XS = JS.j
          }
          const jS = this._host ? this._host.syncRoot : null;
          let GS, CS = this._playbackFrames,
            nS = !1;
          if (jS) {
            const SS = jS.toFrame - jS.fromFrame,
              gS = jS.masterFrame,
              tS = (gS - jS.fromFrame) / SS;
            qS = HS + fS * tS;
            const bS = jS.getAnimations()[0];
            if (bS && 0 !== SS) {
              const SS = fS * tS,
                HS = bS._playbackTo - bS._playbackFrom;
              if (0 !== HS && bS._playbackFrom <= jS.fromFrame && bS._playbackTo >= jS.toFrame) {
                CS = fS * Math.round((bS._playbackFrames - (bS._currentFrame - bS._playbackFrom)) / HS) + SS
              } else nS = (gS - this._playbackSyncMasterFrame) * (bS._playbackFrames - this._playbackSyncMasterPlayed) < 0, CS = SS;
              nS = nS || bS._playbackJumped, this._playbackSyncMasterPlayed = bS._playbackFrames, this._playbackSyncMasterFrame = gS
            }
          } else qS = NS > 0 && HS > gS || NS < 0 && HS < gS ? uS && 0 !== fS ? gS + NS % fS : HS : uS && 0 !== fS ? HS + NS % fS : gS;
          if (!KS && (bS > 0 && this.currentFrame > qS || bS < 0 && this.currentFrame < qS) || KS && aS) {
            this._onLoop();
            for (let SS = 0; SS < IS.length; SS++) IS[SS].onlyOnce || (IS[SS].isDone = !1);
            this._animationState.key = bS > 0 ? 0 : xS.getKeys().length - 1
          }
          if (this._currentFrame = qS, this._animationState.repeatCount = 0 === fS ? 0 : NS / fS | 0, this._animationState.highLimitValue = kS, this._animationState.offsetValue = XS, this._playbackFrom = HS, this._playbackTo = gS, this._playbackJumped = nS, this._playbackSyncRoot = jS, jS) GS = CS;
          else if (uS) GS = KS ? qS === HS && NS === gS ? fS : qS - HS : NS;
          else {
            const SS = 0 !== fS ? Math.floor(this._playbackFrames / fS) : 0;
            GS = (qS === gS ? SS + 1 : SS) * fS
          }
          this._playbackFrames = GS, this._playbackProgress = this._animationState.qX === JS.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? fS : GS
        }
        const kS = xS._interpolate(qS, this._animationState);
        if (this.setValue(kS, XS), IS.length)
          for (let aS = 0; aS < IS.length; aS++)
            if (fS >= 0 && qS >= IS[aS].frame && IS[aS].frame >= HS || fS < 0 && qS <= IS[aS].frame && IS[aS].frame <= HS) {
              const SS = IS[aS];
              SS.isDone || (SS.onlyOnce && (IS.splice(aS, 1), aS--), SS.isDone = !0, SS.action(qS))
            } return uS || (this._stopped = !0), uS
      }
    }
    var dS = gS(39946);
    class cS {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(SS) {
        this._weight = -1 !== SS ? Math.min(Math.max(SS, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(SS) {
        for (let HS = 0; HS < this._runtimeAnimations.length; HS++) {
          this._runtimeAnimations[HS]._prepareForSpeedRatioChange(SS)
        }
        this._speedRatio = SS, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          NS = arguments.length > 6 ? arguments[6] : void 0,
          qS = arguments.length > 7 ? arguments[7] : void 0,
          uS = arguments.length > 8 ? arguments[8] : void 0,
          IS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          fS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = HS, this.fromFrame = gS, this.toFrame = tS, this.loopAnimation = XS, this.onAnimationEnd = NS, this.onAnimationLoop = uS, this.isAdditive = IS, this.playOrder = fS, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.KD = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new bS.e, this.onAnimationLoopObservable = new bS.e, this._scene = SS, qS && this.appendAnimations(HS, qS), this._speedRatio = xS, SS._activeAnimatables.push(this)
      }
      syncWith(SS) {
        if (this._syncRoot = SS, SS) {
          const SS = this._scene._activeAnimatables.indexOf(this);
          SS > -1 && (this._scene._activeAnimatables.splice(SS, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(SS, HS) {
        for (let gS = 0; gS < HS.length; gS++) {
          const tS = HS[gS],
            bS = new OS(SS, tS, this._scene, this);
          bS._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(bS)
        }
      }
      getAnimationByTargetProperty(SS) {
        const HS = this._runtimeAnimations;
        for (let gS = 0; gS < HS.length; gS++)
          if (HS[gS].animation.targetProperty === SS) return HS[gS].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(SS) {
        const HS = this._runtimeAnimations;
        for (let gS = 0; gS < HS.length; gS++)
          if (HS[gS].animation.targetProperty === SS) return HS[gS];
        return null
      }
      reset() {
        const SS = this._runtimeAnimations;
        for (let HS = 0; HS < SS.length; HS++) SS[HS].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(SS) {
        const HS = this._runtimeAnimations;
        for (let gS = 0; gS < HS.length; gS++) HS[gS].animation.enableBlending = !0, HS[gS].animation.blendingSpeed = SS
      }
      disableBlending() {
        const SS = this._runtimeAnimations;
        for (let HS = 0; HS < SS.length; HS++) SS[HS].animation.enableBlending = !1
      }
      goToFrame(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this._runtimeAnimations;
        if (gS[0]) {
          const HS = gS[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? gS[0].currentFrame;
          const tS = 0 === this.speedRatio ? 0 : (SS - this._frameToSyncFromJump) / HS * 1e3 / this.speedRatio;
          this._manualJumpDelay = -tS
        }
        for (let tS = 0; tS < gS.length; tS++) gS[tS].goToFrame(SS, HS ? this._weight : -1);
        this._goToFrame = SS
      }
      get paused() {
        return this.KD
      }
      pause() {
        this.KD || (this.KD = !0)
      }
      restart() {
        this.KD = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (SS || HS) {
          const bS = this._scene._activeAnimatables.indexOf(this);
          if (bS > -1) {
            const XS = this._runtimeAnimations;
            for (let gS = XS.length - 1; gS >= 0; gS--) {
              const tS = XS[gS];
              SS && tS.animation.name != SS || (HS && !HS(tS.target) || (tS.dispose(), XS.splice(gS, 1)))
            }
            0 == XS.length && (gS || this._scene._activeAnimatables.splice(bS, 1), tS || this._raiseOnAnimationEnd())
          }
        } else {
          const SS = this._scene._activeAnimatables.indexOf(this);
          if (SS > -1) {
            gS || this._scene._activeAnimatables.splice(SS, 1);
            const HS = this._runtimeAnimations;
            for (let SS = 0; SS < HS.length; SS++) HS[SS].dispose();
            this._runtimeAnimations.length = 0, tS || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((SS => {
          this.onAnimationEndObservable.add((() => {
            SS(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(SS) {
        if (this.KD) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = SS), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = SS, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += SS - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !cS.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let HS = !1;
        const gS = this._runtimeAnimations;
        let tS;
        for (tS = 0; tS < gS.length; tS++) {
          const bS = gS[tS].animate(SS - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          HS = HS || bS
        }
        if (this.animationStarted = HS, !HS) {
          if (this.disposeOnEnd)
            for (tS = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(tS, 1), tS = 0; tS < gS.length; tS++) gS[tS].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return HS
      }
    }

    function vS(SS) {
      if (0 === SS.totalWeight && 0 === SS.totalAdditiveWeight) return SS.originalValue;
      let HS = 1;
      const gS = XS.l.VK[0],
        tS = XS.l.VK[1],
        bS = XS.l.Quaternion[0];
      let xS = 0;
      const NS = SS.animations[0],
        qS = SS.originalValue;
      let uS, IS = !1;
      if (SS.totalWeight < 1) uS = 1 - SS.totalWeight, qS.decompose(tS, bS, gS);
      else {
        if (xS = 1, HS = SS.totalWeight, uS = NS.weight / HS, 1 == uS) {
          if (!SS.totalAdditiveWeight) return NS.currentValue;
          IS = !0
        }
        NS.currentValue.decompose(tS, bS, gS)
      }
      if (!IS) {
        tS.scaleInPlace(uS), gS.scaleInPlace(uS), bS.scaleInPlace(uS);
        for (let NS = xS; NS < SS.animations.length; NS++) {
          const xS = SS.animations[NS];
          if (0 === xS.weight) continue;
          uS = xS.weight / HS;
          const qS = XS.l.VK[2],
            IS = XS.l.VK[3],
            fS = XS.l.Quaternion[1];
          xS.currentValue.decompose(IS, fS, qS), IS.scaleAndAddToRef(uS, tS), fS.scaleAndAddToRef(XS.i.Dot(bS, fS) > 0 ? uS : -uS, bS), qS.scaleAndAddToRef(uS, gS)
        }
        bS.normalize()
      }
      for (let kS = 0; kS < SS.additiveAnimations.length; kS++) {
        const HS = SS.additiveAnimations[kS];
        if (0 === HS.weight) continue;
        const xS = XS.l.VK[2],
          NS = XS.l.VK[3],
          qS = XS.l.Quaternion[1];
        HS.currentValue.decompose(NS, qS, xS), NS.multiplyToRef(tS, NS), XS.n.LerpToRef(tS, NS, HS.weight, tS), bS.multiplyToRef(qS, qS), XS.i.SlerpToRef(bS, qS, HS.weight, bS), xS.scaleAndAddToRef(HS.weight, gS)
      }
      const fS = NS ? NS._animationState.workValue : XS.l.Matrix[0].clone();
      return XS.e.ComposeToRef(tS, bS, gS, fS), fS
    }

    function ES(SS, HS) {
      if (0 === SS.totalWeight && 0 === SS.totalAdditiveWeight) return HS;
      const gS = SS.animations[0],
        tS = SS.originalValue;
      let bS = HS;
      if (0 === SS.totalWeight && SS.totalAdditiveWeight > 0) bS.dJ(tS);
      else if (1 === SS.animations.length) {
        if (XS.i.SlerpToRef(tS, gS.currentValue, Math.min(1, SS.totalWeight), bS), 0 === SS.totalAdditiveWeight) return bS
      } else if (SS.animations.length > 1) {
        let gS, xS, NS = 1;
        if (SS.totalWeight < 1) {
          const HS = 1 - SS.totalWeight;
          gS = [], xS = [], gS.push(tS), xS.push(HS)
        } else {
          if (2 === SS.animations.length && (XS.i.SlerpToRef(SS.animations[0].currentValue, SS.animations[1].currentValue, SS.animations[1].weight / SS.totalWeight, HS), 0 === SS.totalAdditiveWeight)) return HS;
          gS = [], xS = [], NS = SS.totalWeight
        }
        for (let HS = 0; HS < SS.animations.length; HS++) {
          const tS = SS.animations[HS];
          gS.push(tS.currentValue), xS.push(tS.weight / NS)
        }
        let qS = 0;
        for (let SS = 0; SS < gS.length;) SS ? (qS += xS[SS], XS.i.SlerpToRef(bS, gS[SS], xS[SS] / qS, bS), SS++) : (XS.i.SlerpToRef(gS[SS], gS[SS + 1], xS[SS + 1] / (xS[SS] + xS[SS + 1]), HS), bS = HS, qS = xS[SS] + xS[SS + 1], SS += 2)
      }
      for (let xS = 0; xS < SS.additiveAnimations.length; xS++) {
        const HS = SS.additiveAnimations[xS];
        0 !== HS.weight && (bS.multiplyToRef(HS.currentValue, XS.l.Quaternion[0]), XS.i.SlerpToRef(bS, XS.l.Quaternion[0], HS.weight, bS))
      }
      return bS
    }

    function LS(SS, HS) {
      HS && (HS.prototype.copyAnimationRange = function(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new JS.d(this.name, "_matrix", SS.animations[0].framePerSecond, JS.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const XS = SS.animations[0].getRange(HS);
        if (!XS) return !1;
        const xS = XS.from,
          NS = XS.to,
          qS = SS.animations[0].getKeys(),
          uS = SS.length,
          IS = SS.getParent(),
          fS = this.getParent(),
          kS = tS && IS && uS && this.length && uS !== this.length,
          aS = kS && fS && IS ? fS.length / IS.length : 1,
          KS = tS && !fS && bS && (1 !== bS.x || 1 !== bS.y || 1 !== bS.z),
          jS = this.animations[0].getKeys();
        let GS, CS, nS;
        for (let PS = 0, QS = qS.length; PS < QS; PS++) GS = qS[PS], GS.frame >= xS && GS.frame <= NS && (tS ? (nS = GS.value.clone(), kS ? (CS = nS.getTranslation(), nS.setTranslation(CS.scaleInPlace(aS))) : KS && bS ? (CS = nS.getTranslation(), nS.setTranslation(CS.multiplyInPlace(bS))) : nS = GS.value) : nS = GS.value, jS.push({
          frame: GS.frame + gS,
          value: nS
        }));
        return this.animations[0].createRange(HS, xS + gS, NS + gS), !0
      }), SS && (SS.prototype._animate = function(SS) {
        const HS = this._animationWrites,
          gS = this._animationWriteCount;
        let tS = 0;
        for (let XS = this._animationStepWriteCount; XS < gS; XS++) {
          const SS = HS[XS];
          SS.NG && -1 === SS.weight || (SS.NG = !0, HS[XS] = HS[tS], HS[tS] = SS, tS++)
        }
        for (let XS = tS; XS < gS; XS++) {
          const SS = HS[XS];
          SS.runtimeAnimation = null, SS.target = null
        }
        if (this._animationWriteCount = tS, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const bS = dS.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = bS
        }
        this.deltaTime = void 0 !== SS ? SS : this.useConstantAnimationDeltaTime ? 16 : (bS - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = bS;
        const xS = this._activeAnimatables;
        if (0 === xS.length) return;
        this._animationTime += this.deltaTime;
        const NS = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let XS = 0; XS < xS.length; XS++) {
          const SS = xS[XS];
          !SS._animate(NS) && SS.disposeOnEnd && XS--
        }! function(SS) {
          if (SS._registeredForLateAnimationBindings.length) {
            for (let HS = 0; HS < SS._registeredForLateAnimationBindings.length; HS++) {
              const gS = SS._registeredForLateAnimationBindings.data[HS];
              for (const SS in gS._lateAnimationHolders) {
                const HS = gS._lateAnimationHolders[SS],
                  tS = HS.animations[0],
                  bS = HS.originalValue;
                if (void 0 === bS || null === bS) continue;
                const xS = JS.d.AllowMatrixDecomposeForInterpolation && bS.m;
                let NS = gS[SS];
                if (xS) NS = vS(HS);
                else if (void 0 !== bS.w) NS = ES(HS, NS || XS.i.Identity());
                else {
                  let SS = 0,
                    gS = 1;
                  const XS = tS && tS._animationState.qX === JS.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (HS.totalWeight < 1) NS = XS ? bS.clone ? bS.clone() : bS : tS && bS.scale ? bS.scale(1 - HS.totalWeight) : tS ? bS * (1 - HS.totalWeight) : bS.clone ? bS.clone() : bS;
                  else if (tS) {
                    gS = HS.totalWeight;
                    const xS = tS.weight / gS;
                    NS = 1 !== xS ? tS.currentValue.scale ? tS.currentValue.scale(xS) : tS.currentValue * xS : (HS.animations.length > 1 || HS.additiveAnimations.length > 0) && tS.currentValue.clone ? tS.currentValue.clone() : tS.currentValue, XS && (NS.addToRef ? NS.addToRef(bS, NS) : NS += bS), SS = 1
                  }
                  for (let tS = SS; tS < HS.animations.length; tS++) {
                    const SS = HS.animations[tS],
                      bS = SS.weight / gS;
                    bS && (SS.currentValue.scaleAndAddToRef ? SS.currentValue.scaleAndAddToRef(bS, NS) : NS += SS.currentValue * bS)
                  }
                  for (let tS = 0; tS < HS.additiveAnimations.length; tS++) {
                    const SS = HS.additiveAnimations[tS],
                      gS = SS.weight;
                    gS && (SS.currentValue.scaleAndAddToRef ? SS.currentValue.scaleAndAddToRef(gS, NS) : NS += SS.currentValue * gS)
                  }
                }
                gS[SS] = NS
              }
              gS._lateAnimationHolders = {}
            }
            SS._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, SS.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((SS, HS) => SS.playOrder - HS.playOrder))
      }, SS.prototype.beginWeightedAnimation = function(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 ? arguments[7] : void 0,
          qS = arguments.length > 8 ? arguments[8] : void 0,
          uS = arguments.length > 9 ? arguments[9] : void 0,
          IS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const fS = this.beginAnimation(SS, HS, gS, bS, XS, xS, NS, !1, qS, uS, IS);
        return fS.weight = tS, fS
      }, SS.prototype.beginAnimation = function(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          XS = arguments.length > 5 ? arguments[5] : void 0,
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qS = arguments.length > 8 ? arguments[8] : void 0,
          uS = arguments.length > 9 ? arguments[9] : void 0,
          IS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (bS < 0) {
          const SS = HS;
          HS = gS, gS = SS, bS = -bS
        }
        HS > gS && (bS = -bS), NS && this.stopAnimation(SS, void 0, qS), xS || (xS = new cS(this, SS, HS, gS, tS, bS, XS, void 0, uS, IS));
        const fS = !qS || qS(SS);
        if (SS.animations && fS && xS.appendAnimations(SS, SS.animations), SS.getAnimatables) {
          const IS = SS.getAnimatables();
          for (let SS = 0; SS < IS.length; SS++) this.beginAnimation(IS[SS], HS, gS, tS, bS, XS, xS, NS, qS, uS)
        }
        return xS.reset(), xS
      }, SS.prototype.beginHierarchyAnimation = function(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 ? arguments[7] : void 0,
          qS = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          uS = arguments.length > 9 ? arguments[9] : void 0,
          IS = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const fS = SS.getDescendants(HS),
          kS = [];
        kS.push(this.beginAnimation(SS, gS, tS, bS, XS, xS, NS, qS, uS, void 0, IS));
        for (const aS of fS) kS.push(this.beginAnimation(aS, gS, tS, bS, XS, xS, NS, qS, uS, void 0, IS));
        return kS
      }, SS.prototype.beginDirectAnimation = function(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (XS < 0) {
          const SS = gS;
          gS = tS, tS = SS, XS = -XS
        }
        gS > tS && (XS = -XS);
        return new cS(this, SS, gS, tS, bS, XS, arguments.length > 6 ? arguments[6] : void 0, HS, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, SS.prototype.beginDirectHierarchyAnimation = function(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
        let uS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const IS = SS.getDescendants(HS),
          fS = [];
        fS.push(this.beginDirectAnimation(SS, gS, tS, bS, XS, xS, NS, qS, uS));
        for (const kS of IS) fS.push(this.beginDirectAnimation(kS, gS, tS, bS, XS, xS, NS, qS, uS));
        return fS
      }, SS.prototype.getAnimatableByTarget = function(SS) {
        for (let HS = 0; HS < this._activeAnimatables.length; HS++)
          if (this._activeAnimatables[HS].target === SS) return this._activeAnimatables[HS];
        return null
      }, SS.prototype.getAllAnimatablesByTarget = function(SS) {
        const HS = [];
        for (let gS = 0; gS < this._activeAnimatables.length; gS++) this._activeAnimatables[gS].target === SS && HS.push(this._activeAnimatables[gS]);
        return HS
      }, SS.prototype.stopAnimation = function(SS, HS, gS) {
        const tS = this.getAllAnimatablesByTarget(SS);
        for (const bS of tS) bS.stop(HS, gS)
      }, SS.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let SS = 0; SS < this._activeAnimatables.length; SS++) this._activeAnimatables[SS].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const SS of this.animationGroups) SS.stop()
      })
    }
    cS.ProcessPausedAnimatables = !1;
    var YS, AS = gS(37129),
      yS = gS(40256),
      VS = gS(39926);
    class iS extends yS.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(SS) {
        (SS.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.dJ(SS), this._markAsDirtyAndDecompose())
      }
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(SS, HS.lL(), !1), this.name = SS, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = HS, this._localMatrix = tS?.clone() ?? XS.e.Identity(), this._restMatrix = bS ?? this._localMatrix.clone(), this._bindMatrix = xS ?? this._localMatrix.clone(), this._index = NS, this._absoluteMatrix = new XS.e, this._absoluteBindMatrix = new XS.e, this._absoluteInverseBindMatrix = new XS.e, this._finalMatrix = new XS.e, HS.bones.push(this), this.setParent(gS, !1), this._updateAbsoluteBindMatrices()
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
      set parent(SS) {
        this.setParent(SS)
      }
      setParent(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== SS) {
          if (this.parent) {
            const SS = this.parent.children.indexOf(this); - 1 !== SS && this.parent.children.splice(SS, 1)
          }
          this._parentNode = SS, this.parent && this.parent.children.push(this), HS && this._updateAbsoluteBindMatrices(), this.OHS()
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
      setRestMatrix(SS) {
        this._restMatrix.dJ(SS)
      }
      setRestPose(SS) {
        this.setRestMatrix(SS)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(SS) {
        this.J7(SS)
      }
      setBindPose(SS) {
        this.setBindMatrix(SS)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const SS = XS.l.VK[0],
            HS = XS.l.Quaternion[0],
            gS = XS.l.VK[1];
          this.getRestMatrix().decompose(SS, HS, gS), this._linkedTransformNode.position.dJ(gS), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? XS.i.Identity(), this._linkedTransformNode.rotationQuaternion.dJ(HS), this._linkedTransformNode.nf.dJ(SS)
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
      linkTransformNode(SS) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = SS, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.zSS
      }
      set position(SS) {
        this._decompose(), this.zSS.dJ(SS), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(SS) {
        this.setRotation(SS)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(SS) {
        this.setRotationQuaternion(SS)
      }
      get nf() {
        return this.getScale()
      }
      set nf(SS) {
        this.setScale(SS)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = XS.n.Zero(), this._localRotation = XS.i.Zero(), this.zSS = XS.n.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.zSS))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, XS.e.ComposeToRef(this._localScaling, this._localRotation, this.zSS, this._localMatrix)) : this._needToCompose = !1)
      }
      J7(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.dJ(SS), HS && this._updateAbsoluteBindMatrices(), gS ? this._matrix = SS : this.OHS()
      }
      _updateAbsoluteBindMatrices(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (SS || (SS = this._bindMatrix), this.parent ? SS.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.dJ(SS), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), HS)
          for (let gS = 0; gS < this.children.length; gS++) this.children[gS]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      OHS() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.OHS(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.OHS(), this._needToDecompose = !0
      }
      _updatePosition(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const bS = this.getLocalMatrix();
        if (0 == HS) tS ? (bS.addAtIndex(12, SS.x), bS.addAtIndex(13, SS.y), bS.addAtIndex(14, SS.z)) : bS.setTranslationFromFloats(SS.x, SS.y, SS.z);
        else {
          const HS = iS._TmpMats[0],
            xS = iS._TmpVecs[0];
          this.parent ? (HS.dJ(this.parent.getAbsoluteMatrix()), gS && HS.multiplyToRef(gS.getWorldMatrix(), HS)) : XS.e.IdentityToRef(HS), tS && HS.setTranslationFromFloats(0, 0, 0), HS.invert(), XS.n.TransformCoordinatesToRef(SS, HS, xS), tS ? (bS.addAtIndex(12, xS.x), bS.addAtIndex(13, xS.y), bS.addAtIndex(14, xS.z)) : bS.setTranslationFromFloats(xS.x, xS.y, xS.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(SS, HS, gS, !0)
      }
      setPosition(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(SS, HS, gS, !1)
      }
      setAbsolutePosition(SS, HS) {
        this.setPosition(SS, 1, HS)
      }
      scale(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const bS = this.getLocalMatrix(),
          xS = iS._TmpMats[0];
        XS.e.ScalingToRef(SS, HS, gS, xS), xS.multiplyToRef(bS, bS), xS.invert();
        for (const XS of this.children) {
          const tS = XS.getLocalMatrix();
          tS.multiplyToRef(xS, tS), tS.multiplyAtIndex(12, SS), tS.multiplyAtIndex(13, HS), tS.multiplyAtIndex(14, gS), XS._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), tS)
          for (const XS of this.children) XS.scale(SS, HS, gS, tS)
      }
      setScale(SS) {
        this._decompose(), this._localScaling.dJ(SS), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(SS) {
        this._decompose(), SS.dJ(this._localScaling)
      }
      setYawPitchRoll(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === tS) {
          const xS = iS._TmpQuat;
          return XS.i.RotationYawPitchRollToRef(SS, HS, gS, xS), void this.setRotationQuaternion(xS, tS, bS)
        }
        const xS = iS._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(xS, bS)) return;
        const NS = iS._TmpMats[1];
        XS.e.RotationYawPitchRollToRef(SS, HS, gS, NS), xS.multiplyToRef(NS, NS), this._rotateWithMatrix(NS, tS, bS)
      }
      rotate(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        const bS = iS._TmpMats[0];
        bS.setTranslationFromFloats(0, 0, 0), XS.e.RotationAxisToRef(SS, HS, bS), this._rotateWithMatrix(bS, gS, tS)
      }
      setAxisAngle(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === gS) {
          const bS = iS._TmpQuat;
          return XS.i.RotationAxisToRef(SS, HS, bS), void this.setRotationQuaternion(bS, gS, tS)
        }
        const bS = iS._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(bS, tS)) return;
        const xS = iS._TmpMats[1];
        XS.e.RotationAxisToRef(SS, HS, xS), bS.multiplyToRef(xS, xS), this._rotateWithMatrix(xS, gS, tS)
      }
      setRotation(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(SS.y, SS.x, SS.z, HS, gS)
      }
      setRotationQuaternion(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === HS) return this._decompose(), this._localRotation.dJ(SS), void this._markAsDirtyAndCompose();
        const tS = iS._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(tS, gS)) return;
        const bS = iS._TmpMats[1];
        XS.e.FromQuaternionToRef(SS, bS), tS.multiplyToRef(bS, bS), this._rotateWithMatrix(bS, HS, gS)
      }
      setRotationMatrix(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === HS) {
          const tS = iS._TmpQuat;
          return XS.i.FromRotationMatrixToRef(SS, tS), void this.setRotationQuaternion(tS, HS, gS)
        }
        const tS = iS._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(tS, gS)) return;
        const bS = iS._TmpMats[1];
        bS.dJ(SS), tS.multiplyToRef(SS, bS), this._rotateWithMatrix(bS, HS, gS)
      }
      _rotateWithMatrix(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = this.getLocalMatrix(),
          bS = tS.m[12],
          XS = tS.m[13],
          xS = tS.m[14],
          NS = this.getParent(),
          qS = iS._TmpMats[3],
          uS = iS._TmpMats[4];
        NS && 1 == HS ? (gS ? (qS.dJ(gS.getWorldMatrix()), NS.getAbsoluteMatrix().multiplyToRef(qS, qS)) : qS.dJ(NS.getAbsoluteMatrix()), uS.dJ(qS), uS.invert(), tS.multiplyToRef(qS, tS), tS.multiplyToRef(SS, tS), tS.multiplyToRef(uS, tS)) : 1 == HS && gS ? (qS.dJ(gS.getWorldMatrix()), uS.dJ(qS), uS.invert(), tS.multiplyToRef(qS, tS), tS.multiplyToRef(SS, tS), tS.multiplyToRef(uS, tS)) : tS.multiplyToRef(SS, tS), tS.setTranslationFromFloats(bS, XS, xS), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(SS, HS) {
        const gS = iS._TmpMats[2];
        return SS.dJ(this.getAbsoluteMatrix()), HS ? (SS.multiplyToRef(HS.getWorldMatrix(), SS), XS.e.ScalingToRef(HS.nf.x, HS.nf.y, HS.nf.z, gS)) : XS.e.IdentityToRef(gS), SS.invert(), !isNaN(SS.m[0]) && (gS.multiplyAtIndex(0, this._scalingDeterminant), SS.multiplyToRef(gS, SS), !0)
      }
      lC() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = XS.n.Zero();
        return this.getPositionToRef(SS, HS, gS), gS
      }
      getPositionToRef() {
        let SS = arguments.length > 1 ? arguments[1] : void 0,
          HS = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const SS = this.getLocalMatrix();
          HS.x = SS.m[12], HS.y = SS.m[13], HS.z = SS.m[14]
        } else {
          const gS = iS._TmpMats[0].dJ(this.getAbsoluteMatrix());
          SS && gS.multiplyToRef(SS.getWorldMatrix(), gS), HS.x = gS.m[12], HS.y = gS.m[13], HS.z = gS.m[14]
        }
      }
      getAbsolutePosition() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const HS = XS.n.Zero();
        return this.getPositionToRef(1, SS, HS), HS
      }
      getAbsolutePositionToRef(SS, HS) {
        this.getPositionToRef(1, SS, HS)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.dJ(this._localMatrix);
          const SS = this._skeleton.getPoseMatrix();
          SS && this._absoluteMatrix.multiplyToRef(SS, this._absoluteMatrix)
        }
        const SS = this.children,
          HS = SS.length;
        for (let gS = 0; gS < HS; gS++) SS[gS].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      uR(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = XS.n.Zero();
        return this.getDirectionToRef(SS, HS, gS), gS
      }
      getDirectionToRef(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = iS._TmpMats[0].dJ(this.getAbsoluteMatrix());
        HS && tS.multiplyToRef(HS.getWorldMatrix(), tS), XS.n.TransformNormalToRef(SS, tS, gS), gS.normalize()
      }
      getRotation() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = XS.n.Zero();
        return this.getRotationToRef(SS, HS, gS), gS
      }
      getRotationToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = iS._TmpQuat;
        this.getRotationQuaternionToRef(SS, HS, tS), tS.toEulerAnglesToRef(gS)
      }
      getRotationQuaternion() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = XS.i.Identity();
        return this.getRotationQuaternionToRef(SS, HS, gS), gS
      }
      getRotationQuaternionToRef() {
        let SS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          HS = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), HS.dJ(this._localRotation);
        else {
          const gS = iS._TmpMats[0],
            tS = this.getAbsoluteMatrix();
          SS ? tS.multiplyToRef(SS.getWorldMatrix(), gS) : gS.dJ(tS), gS.multiplyAtIndex(0, this._scalingDeterminant), gS.multiplyAtIndex(1, this._scalingDeterminant), gS.multiplyAtIndex(2, this._scalingDeterminant), gS.decompose(void 0, HS, void 0)
        }
      }
      getRotationMatrix() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 ? arguments[1] : void 0;
        const gS = XS.e.Identity();
        return this.getRotationMatrixToRef(SS, HS, gS), gS
      }
      getRotationMatrixToRef() {
        let SS = arguments.length > 1 ? arguments[1] : void 0,
          HS = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(HS);
        else {
          const gS = iS._TmpMats[0],
            tS = this.getAbsoluteMatrix();
          SS ? tS.multiplyToRef(SS.getWorldMatrix(), gS) : gS.dJ(tS), gS.multiplyAtIndex(0, this._scalingDeterminant), gS.multiplyAtIndex(1, this._scalingDeterminant), gS.multiplyAtIndex(2, this._scalingDeterminant), gS.getRotationMatrixToRef(HS)
        }
      }
      getAbsolutePositionFromLocal(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = XS.n.Zero();
        return this.getAbsolutePositionFromLocalToRef(SS, HS, gS), gS
      }
      getAbsolutePositionFromLocalToRef(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = iS._TmpMats[0].dJ(this.getAbsoluteMatrix());
        HS && tS.multiplyToRef(HS.getWorldMatrix(), tS), XS.n.TransformCoordinatesToRef(SS, tS, gS)
      }
      getLocalPositionFromAbsolute(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = XS.n.Zero();
        return this.getLocalPositionFromAbsoluteToRef(SS, HS, gS), gS
      }
      getLocalPositionFromAbsoluteToRef(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = iS._TmpMats[0].dJ(this.getAbsoluteMatrix());
        HS && tS.multiplyToRef(HS.getWorldMatrix(), tS), tS.invert(), XS.n.TransformCoordinatesToRef(SS, tS, gS)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const SS = this._skeleton.bones.indexOf(this);
        if (-1 !== SS && this._skeleton.bones.splice(SS, 1), this._parentNode && this._parentNode.children) {
          const SS = this._parentNode.children,
            HS = SS.indexOf(this); - 1 !== HS && SS.splice(HS, 1)
        }
        super.dispose()
      }
    }
    iS._TmpVecs = (0, AS.d)(2, XS.n.Zero), iS._TmpQuat = XS.i.Identity(), iS._TmpMats = (0, AS.d)(5, XS.e.Identity), (YS = iS.prototype).copyAnimationRange ?? (YS.copyAnimationRange = (0, VS.i)("Bone", "copyAnimationRange"));
    var WS = gS(40131);
    let zS = !1;
    var US = gS(40007),
      pS = gS(40364),
      sS = gS(40375),
      BS = gS(40367),
      MS = gS(40163);

    function FS(SS, HS) {
      const gS = (0, aS.RandomRange)(0, 1);
      IS.c.LerpToRef(HS.color1, HS.color2, gS, SS.color)
    }

    function RS(SS, HS) {
      HS.colorDead.subtractToRef(SS.color, HS._colorDiff), HS._colorDiff.scaleToRef(1 / SS.lifeTime, SS.colorStep)
    }

    function TS(SS, HS) {
      SS._properties.currentColorGradient = HS._colorGradients[0], SS._properties.currentColorGradient.getColorToRef(SS.color), SS._properties.currentColor1.dJ(SS.color), HS._colorGradients.length > 1 ? HS._colorGradients[1].getColorToRef(SS._properties.currentColor2) : SS._properties.currentColor2.dJ(SS.color)
    }

    function oS(SS, HS) {
      const gS = HS._colorGradients;
      tS.n.GetCurrentGradient(HS._ratio, gS, ((HS, gS, tS) => {
        HS !== SS._properties.currentColorGradient && (SS._properties.currentColor1.dJ(SS._properties.currentColor2), gS.getColorToRef(SS._properties.currentColor2), SS._properties.currentColorGradient = HS), IS.c.LerpToRef(SS._properties.currentColor1, SS._properties.currentColor2, tS, SS.color), SS.color.a < 0 && (SS.color.a = 0)
      }))
    }

    function lS(SS, HS) {
      SS.colorStep.scaleToRef(HS._scaledUpdateSpeed, HS._scaledColorStep), SS.color.addInPlace(HS._scaledColorStep), SS.color.a < 0 && (SS.color.a = 0)
    }

    function mS(SS, HS) {
      tS.n.GetCurrentGradient(HS._ratio, HS._angularSpeedGradients, ((HS, gS, tS) => {
        HS !== SS._properties.currentAngularSpeedGradient && (SS._properties.currentAngularSpeed1 = SS._properties.currentAngularSpeed2, SS._properties.currentAngularSpeed2 = gS.getFactor(), SS._properties.currentAngularSpeedGradient = HS), SS.angularSpeed = (0, aS.Lerp)(SS._properties.currentAngularSpeed1, SS._properties.currentAngularSpeed2, tS)
      }))
    }

    function eS(SS, HS) {
      SS.angle += SS.angularSpeed * HS._scaledUpdateSpeed
    }

    function rS(SS, HS) {
      HS.particleEmitterType.startDirectionFunction(HS._emitterWorldMatrix, SS.direction, SS, HS.isLocal, HS._emitterInverseWorldMatrix)
    }

    function SH(SS, HS) {
      HS.startDirectionFunction(HS._emitterWorldMatrix, SS.direction, SS, HS.isLocal)
    }

    function HH(SS, HS) {
      SS._properties.currentVelocityGradient = HS._velocityGradients[0], SS._properties.currentVelocity1 = SS._properties.currentVelocityGradient.getFactor(), HS._velocityGradients.length > 1 ? SS._properties.currentVelocity2 = HS._velocityGradients[1].getFactor() : SS._properties.currentVelocity2 = SS._properties.currentVelocity1
    }

    function gH(SS, HS) {
      SS._properties.currentLimitVelocityGradient = HS._limitVelocityGradients[0], SS._properties.currentLimitVelocity1 = SS._properties.currentLimitVelocityGradient.getFactor(), HS._limitVelocityGradients.length > 1 ? SS._properties.currentLimitVelocity2 = HS._limitVelocityGradients[1].getFactor() : SS._properties.currentLimitVelocity2 = SS._properties.currentLimitVelocity1
    }

    function tH(SS, HS) {
      tS.n.GetCurrentGradient(HS._ratio, HS._velocityGradients, ((HS, gS, tS) => {
        HS !== SS._properties.currentVelocityGradient && (SS._properties.currentVelocity1 = SS._properties.currentVelocity2, SS._properties.currentVelocity2 = gS.getFactor(), SS._properties.currentVelocityGradient = HS), SS._properties.directionScale *= (0, aS.Lerp)(SS._properties.currentVelocity1, SS._properties.currentVelocity2, tS)
      }))
    }

    function bH(SS, HS) {
      tS.n.GetCurrentGradient(HS._ratio, HS._limitVelocityGradients, ((gS, tS, bS) => {
        gS !== SS._properties.currentLimitVelocityGradient && (SS._properties.currentLimitVelocity1 = SS._properties.currentLimitVelocity2, SS._properties.currentLimitVelocity2 = tS.getFactor(), SS._properties.currentLimitVelocityGradient = gS);
        const XS = (0, aS.Lerp)(SS._properties.currentLimitVelocity1, SS._properties.currentLimitVelocity2, bS);
        SS.direction.length() > XS && SS.direction.scaleInPlace(HS.limitVelocityDamping)
      }))
    }

    function XH(SS) {
      SS.direction.scaleToRef(SS._properties.directionScale, SS._properties.scaledDirection)
    }

    function xH(SS, HS) {
      HS.particleEmitterType.startPositionFunction(HS._emitterWorldMatrix, SS.position, SS, HS.isLocal)
    }

    function NH(SS, HS) {
      HS.startPositionFunction(HS._emitterWorldMatrix, SS.position, SS, HS.isLocal)
    }

    function qH(SS, HS) {
      SS._properties.localPosition ? SS._properties.localPosition.dJ(SS.position) : SS._properties.localPosition = SS.position.clone(), XS.n.TransformCoordinatesToRef(SS._properties.localPosition, HS._emitterWorldMatrix, SS.position)
    }

    function uH(SS, HS) {
      HS.isLocal && SS._properties.localPosition ? (SS._properties.localPosition.addInPlace(SS._properties.scaledDirection), XS.n.TransformCoordinatesToRef(SS._properties.localPosition, HS._emitterWorldMatrix, SS.position)) : SS.position.addInPlace(SS._properties.scaledDirection)
    }

    function IH(SS, HS) {
      SS._properties.currentDragGradient = HS._dragGradients[0], SS._properties.currentDrag1 = SS._properties.currentDragGradient.getFactor(), HS._dragGradients.length > 1 ? SS._properties.currentDrag2 = HS._dragGradients[1].getFactor() : SS._properties.currentDrag2 = SS._properties.currentDrag1
    }

    function fH(SS, HS) {
      tS.n.GetCurrentGradient(HS._ratio, HS._dragGradients, ((HS, gS, tS) => {
        HS !== SS._properties.currentDragGradient && (SS._properties.currentDrag1 = SS._properties.currentDrag2, SS._properties.currentDrag2 = gS.getFactor(), SS._properties.currentDragGradient = HS);
        const bS = (0, aS.Lerp)(SS._properties.currentDrag1, SS._properties.currentDrag2, tS);
        SS._properties.scaledDirection.scaleInPlace(1 - bS)
      }))
    }

    function kH(SS, HS) {
      SS._properties.randomNoiseCoordinates1 && SS._properties.randomNoiseCoordinates2 ? (SS._properties.randomNoiseCoordinates1.I5(Math.random(), Math.random(), Math.random()), SS._properties.randomNoiseCoordinates2.I5(Math.random(), Math.random(), Math.random())) : (SS._properties.randomNoiseCoordinates1 = new XS.n(Math.random(), Math.random(), Math.random()), SS._properties.randomNoiseCoordinates2 = new XS.n(Math.random(), Math.random(), Math.random()))
    }

    function aH(SS, HS) {
      const gS = HS._noiseTextureData,
        tS = HS._noiseTextureSize;
      if (gS && tS && SS._properties.randomNoiseCoordinates1 && SS._properties.randomNoiseCoordinates2) {
        const bS = HS._fetchR(SS._properties.randomNoiseCoordinates1.x, SS._properties.randomNoiseCoordinates1.y, tS.width, tS.height, gS),
          xS = HS._fetchR(SS._properties.randomNoiseCoordinates1.z, SS._properties.randomNoiseCoordinates2.x, tS.width, tS.height, gS),
          NS = HS._fetchR(SS._properties.randomNoiseCoordinates2.y, SS._properties.randomNoiseCoordinates2.z, tS.width, tS.height, gS),
          qS = XS.l.VK[0],
          uS = XS.l.VK[1];
        qS.I5((2 * bS - 1) * HS.noiseStrength.x, (2 * xS - 1) * HS.noiseStrength.y, (2 * NS - 1) * HS.noiseStrength.z), qS.scaleToRef(HS._tempScaledUpdateSpeed, uS), SS.direction.addInPlace(uS)
      }
    }

    function KH(SS, HS) {
      HS.gravity.scaleToRef(HS._tempScaledUpdateSpeed, HS._scaledGravity), SS.direction.addInPlace(HS._scaledGravity)
    }

    function jH(SS, HS) {
      SS.size = (0, aS.RandomRange)(HS.minSize, HS.maxSize), SS.scale.I5((0, aS.RandomRange)(HS.minScaleX, HS.maxScaleX), (0, aS.RandomRange)(HS.minScaleY, HS.maxScaleY))
    }

    function GH(SS, HS) {
      SS._properties.currentSizeGradient = HS._sizeGradients[0], SS._properties.currentSize1 = SS._properties.currentSizeGradient.getFactor(), SS.size = SS._properties.currentSize1, HS._sizeGradients.length > 1 ? SS._properties.currentSize2 = HS._sizeGradients[1].getFactor() : SS._properties.currentSize2 = SS._properties.currentSize1, SS.scale.I5((0, aS.RandomRange)(HS.minScaleX, HS.maxScaleX), (0, aS.RandomRange)(HS.minScaleY, HS.maxScaleY))
    }

    function CH(SS, HS) {
      const gS = HS._actualFrame / HS.targetStopDuration;
      tS.n.GetCurrentGradient(gS, HS._startSizeGradients, ((gS, tS, bS) => {
        gS !== HS._currentStartSizeGradient && (HS._currentStartSize1 = HS._currentStartSize2, HS._currentStartSize2 = tS.getFactor(), HS._currentStartSizeGradient = gS);
        const XS = (0, aS.Lerp)(HS._currentStartSize1, HS._currentStartSize2, bS);
        SS.scale.scaleInPlace(XS)
      }))
    }

    function nH(SS, HS) {
      tS.n.GetCurrentGradient(HS._ratio, HS._sizeGradients, ((HS, gS, tS) => {
        HS !== SS._properties.currentSizeGradient && (SS._properties.currentSize1 = SS._properties.currentSize2, SS._properties.currentSize2 = gS.getFactor(), SS._properties.currentSizeGradient = HS), SS.size = (0, aS.Lerp)(SS._properties.currentSize1, SS._properties.currentSize2, tS)
      }))
    }

    function PH(SS, HS) {
      SS.remapData = new XS.r(0, 1, 0, 1)
    }

    function QH(SS, HS) {
      HS._colorRemapGradients && HS._colorRemapGradients.length > 0 && tS.n.GetCurrentGradient(HS._ratio, HS._colorRemapGradients, ((HS, gS, tS) => {
        const bS = (0, aS.Lerp)(HS.factor1, gS.factor1, tS),
          XS = (0, aS.Lerp)(HS.factor2, gS.factor2, tS);
        SS.remapData.x = bS, SS.remapData.y = XS - bS
      })), HS._alphaRemapGradients && HS._alphaRemapGradients.length > 0 && tS.n.GetCurrentGradient(HS._ratio, HS._alphaRemapGradients, ((HS, gS, tS) => {
        const bS = (0, aS.Lerp)(HS.factor1, gS.factor1, tS),
          XS = (0, aS.Lerp)(HS.factor2, gS.factor2, tS);
        SS.remapData.z = bS, SS.remapData.w = XS - bS
      }))
    }

    function DH(SS, HS) {
      const gS = (0, aS.Clamp)(HS._actualFrame / HS.targetStopDuration);
      tS.n.GetCurrentGradient(gS, HS._lifeTimeGradients, ((HS, tS) => {
        const bS = HS,
          XS = tS,
          xS = bS.getFactor(),
          NS = XS.getFactor(),
          qS = (gS - bS.gradient) / (XS.gradient - bS.gradient);
        SS.lifeTime = (0, aS.Lerp)(xS, NS, qS)
      })), HS._emitPower = (0, aS.RandomRange)(HS.minEmitPower, HS.maxEmitPower)
    }

    function wH(SS, HS) {
      SS.lifeTime = (0, aS.RandomRange)(HS.minLifeTime, HS.maxLifeTime), HS._emitPower = (0, aS.RandomRange)(HS.minEmitPower, HS.maxEmitPower)
    }

    function hH(SS, HS) {
      0 === HS._emitPower ? (SS._properties.initialDirection ? SS._properties.initialDirection.dJ(SS.direction) : SS._properties.initialDirection = SS.direction.clone(), SS.direction.set(0, 0, 0)) : (SS._properties.initialDirection = null, SS.direction.scaleInPlace(HS._emitPower)), SS.direction.addInPlace(HS._inheritedVelocityOffset)
    }

    function ZH(SS, HS) {
      SS.angularSpeed = (0, aS.RandomRange)(HS.minAngularSpeed, HS.maxAngularSpeed), SS.angle = (0, aS.RandomRange)(HS.minInitialRotation, HS.maxInitialRotation)
    }

    function JH(SS, HS) {
      SS._properties.currentAngularSpeedGradient = HS._angularSpeedGradients[0], SS.angularSpeed = SS._properties.currentAngularSpeedGradient.getFactor(), SS._properties.currentAngularSpeed1 = SS.angularSpeed, HS._angularSpeedGradients.length > 1 ? SS._properties.currentAngularSpeed2 = HS._angularSpeedGradients[1].getFactor() : SS._properties.currentAngularSpeed2 = SS._properties.currentAngularSpeed1, SS.angle = (0, aS.RandomRange)(HS.minInitialRotation, HS.maxInitialRotation)
    }

    function OH(SS, HS) {
      SS._properties.initialStartSpriteCellId = HS.startSpriteCellID, SS._properties.initialEndSpriteCellId = HS.endSpriteCellID, SS._properties.initialSpriteCellLoop = HS.spriteCellLoop
    }

    function dH(SS, HS) {
      SS.previousItem = HS.previousItem, SS.nextItem = HS, HS.previousItem && (HS.previousItem.nextItem = SS), HS.previousItem = SS
    }

    function cH(SS, HS) {
      SS.previousItem = HS, SS.nextItem = HS.nextItem, HS.nextItem && (HS.nextItem.previousItem = SS), HS.nextItem = SS
    }

    function vH(SS) {
      SS.previousItem && (SS.previousItem.nextItem = SS.nextItem), SS.nextItem && (SS.nextItem.previousItem = SS.previousItem)
    }
    var EH = gS(40414);
    class LH extends wS {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(SS) {
        this._startDirectionFunction !== SS && (this._startDirectionFunction = SS, this._directionCreation.process = SS ? SH : rS)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(SS) {
        this._startPositionFunction !== SS && (this._startPositionFunction = SS, this._positionCreation.process = SS ? NH : xH)
      }
      set onDispose(SS) {
        this._onDisposeObserver && this.bY.remove(this._onDisposeObserver), this._onDisposeObserver = this.bY.add(SS)
      }
      get Ow() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(SS) {
        this._useRampGradients !== SS && (this._useRampGradients = SS, this._resetEffect(), SS ? (this._rampCreation = {
          process: PH,
          previousItem: null,
          nextItem: null
        }, cH(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: QH,
          previousItem: null,
          nextItem: null
        }, cH(this._remapGradientProcessing, this._gravityProcessing))) : (vH(this._rampCreation), vH(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(SS) {
        this._isLocal !== SS && (this._isLocal = SS, SS ? (this._isLocalCreation = {
          process: qH,
          previousItem: null,
          nextItem: null
        }, cH(this._isLocalCreation, this._positionCreation)) : vH(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(SS) {
        this._animationSheetEnabled !== SS && (this._animationSheetEnabled = SS, SS ? (this._sheetCreation = {
          process: OH,
          previousItem: null,
          nextItem: null
        }, cH(this._sheetCreation, this._colorDeadCreation)) : vH(this._sheetCreation), this._reset())
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
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[SS]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[SS] ?? this._customWrappers[0]
      }
      setCustomEffect(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[HS] = new pS.d(this._engine), this._customWrappers[HS].effect = SS, this._customWrappers[HS].drawContext && (this._customWrappers[HS].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new bS.e), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(SS) {
        if (this.noiseTexture !== SS) {
          if (this._noiseTexture = SS, !SS) return vH(this._noiseCreation), void vH(this._noiseProcessing);
          this._noiseCreation = {
            process: kH,
            previousItem: null,
            nextItem: null
          }, cH(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: aH,
            previousItem: null,
            nextItem: null
          }, cH(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          NS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          uS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zS || (zS = !0, LS(WS.i, iS)), (0, US.c)(), super(SS), this._emitterInverseWorldMatrix = XS.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new XS.n, this.bY = new bS.e, this.onStoppedObservable = new bS.e, this.onStartedObservable = new bS.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new IS.c(0, 0, 0, 0), this._colorDiff = new IS.c(0, 0, 0, 0), this._scaledGravity = XS.n.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = SS => {}, this.recycleParticle = SS => {
          const HS = this._particles.pop();
          HS !== SS && HS.copyTo(SS), HS.metadata = null, this._stockParticles.push(HS)
        }, this._createParticle = () => {
          let SS;
          return 0 !== this._stockParticles.length ? (SS = this._stockParticles.pop(), SS._reset()) : SS = new ZS(this), this._prepareParticle(SS), SS
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = HS, this._epsilon = NS, gS && "Scene" !== gS.getClassName() ? (this._engine = gS, this.defaultProjectionMatrix = XS.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = gS || qS.d.LastCreatedScene, this._engine = this._scene.AK(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.zD.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: wH,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: xH,
          previousItem: null,
          nextItem: null
        }, cH(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: rS,
          previousItem: null,
          nextItem: null
        }, cH(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: hH,
          previousItem: null,
          nextItem: null
        }, cH(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: jH,
          previousItem: null,
          nextItem: null
        }, cH(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: ZH,
          previousItem: null,
          nextItem: null
        }, cH(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: FS,
          previousItem: null,
          nextItem: null
        }, cH(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: RS,
          previousItem: null,
          nextItem: null
        }, cH(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, uS || (this._colorProcessing = {
          process: lS,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: eS,
          previousItem: null,
          nextItem: null
        }, cH(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: XH,
          previousItem: null,
          nextItem: null
        }, cH(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: uH,
          previousItem: null,
          nextItem: null
        }, cH(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: KH,
          previousItem: null,
          nextItem: null
        }, cH(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = xS, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new pS.d(this._engine)
        }, this._customWrappers[0].effect = tS, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new fS.b, this.updateFunction = SS => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((SS => {
            this._noiseTextureData = SS
          })));
          const HS = SS === this._particles;
          for (let gS = 0; gS < SS.length; gS++) {
            const tS = SS[gS];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const bS = tS.age;
            if (tS.age += this._tempScaledUpdateSpeed, tS.age > tS.lifeTime) {
              const SS = tS.age - bS,
                HS = tS.lifeTime - bS;
              this._tempScaledUpdateSpeed = HS * this._tempScaledUpdateSpeed / SS, tS.age = tS.lifeTime
            }
            this._ratio = tS.age / tS.lifeTime, tS._properties.directionScale = this._tempScaledUpdateSpeed;
            let XS = this._updateQueueStart;
            for (; XS;) XS.process(tS, this), XS = XS.nextItem;
            if (this._isAnimationSheetEnabled && !uS && tS.updateCellIndex(), tS._inheritParticleInfoToSubEmitters(), tS.age >= tS.lifeTime) {
              if (this._emitFromParticle(tS), tS._properties.attachedSubEmitters) {
                for (const SS of tS._properties.attachedSubEmitters) SS.particleSystem.disposeOnStop = !0, SS.particleSystem.stop();
                tS._properties.attachedSubEmitters = null
              }
              this.recycleParticle(tS), HS && gS--
            } else;
          }
        }
      }
      serialize(SS) {
        throw new Error("Method not implemented.")
      }
      clone(SS, HS) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = DH : this._lifeTimeCreation.process = wH
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: CH,
          previousItem: null,
          nextItem: null
        }, cH(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (vH(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(SS) {
        this.targetStopDuration !== SS && (this._targetStopDuration = SS, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(SS, HS, gS) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, SS, HS, gS), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(SS) {
        return this._removeFactorGradient(this._lifeTimeGradients, SS), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(SS, HS, gS) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = GH, this._sizeGradientProcessing = {
          process: nH,
          previousItem: null,
          nextItem: null
        }, dH(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, SS, HS, gS), this
      }
      removeSizeGradient(SS) {
        return this._removeFactorGradient(this._sizeGradients, SS), 0 === this._sizeGradients?.length && (vH(this._sizeGradientProcessing), this._sizeCreation.process = jH), this
      }
      addColorRemapGradient(SS, HS, gS) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, SS, HS, gS), this
      }
      removeColorRemapGradient(SS) {
        return this._removeFactorGradient(this._colorRemapGradients, SS), this
      }
      addAlphaRemapGradient(SS, HS, gS) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, SS, HS, gS), this
      }
      removeAlphaRemapGradient(SS) {
        return this._removeFactorGradient(this._alphaRemapGradients, SS), this
      }
      addAngularSpeedGradient(SS, HS, gS) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = JH, this._angularSpeedGradientProcessing = {
          process: mS,
          previousItem: null,
          nextItem: null
        }, dH(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, SS, HS, gS), this
      }
      removeAngularSpeedGradient(SS) {
        return this._removeFactorGradient(this._angularSpeedGradients, SS), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = ZH, vH(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(SS, HS, gS) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: HH,
          previousItem: null,
          nextItem: null
        }, cH(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: tH,
          previousItem: null,
          nextItem: null
        }, dH(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, SS, HS, gS), this
      }
      removeVelocityGradient(SS) {
        return this._removeFactorGradient(this._velocityGradients, SS), 0 === this._velocityGradients?.length && (vH(this._velocityCreation), vH(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(SS, HS, gS) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: gH,
          previousItem: null,
          nextItem: null
        }, cH(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: bH,
          previousItem: null,
          nextItem: null
        }, cH(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, SS, HS, gS), this
      }
      removeLimitVelocityGradient(SS) {
        return this._removeFactorGradient(this._limitVelocityGradients, SS), 0 === this._limitVelocityGradients?.length && (vH(this._limitVelocityCreation), vH(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(SS, HS, gS) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: IH,
          previousItem: null,
          nextItem: null
        }, dH(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: fH,
          previousItem: null,
          nextItem: null
        }, dH(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, SS, HS, gS), this
      }
      removeDragGradient(SS) {
        return this._removeFactorGradient(this._dragGradients, SS), 0 === this._dragGradients?.length && (vH(this._dragCreation), vH(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(SS, HS, gS) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, SS, HS, gS), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(SS) {
        return this._removeFactorGradient(this._startSizeGradients, SS), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const SS = new Uint8Array(4 * this._rawTextureWidth),
          HS = IS.i.Color3[0];
        for (let gS = 0; gS < this._rawTextureWidth; gS++) {
          const bS = gS / this._rawTextureWidth;
          tS.n.GetCurrentGradient(bS, this._rampGradients, ((tS, bS, XS) => {
            IS.b.LerpToRef(tS.color, bS.color, XS, HS), SS[4 * gS] = 255 * HS.r, SS[4 * gS + 1] = 255 * HS.g, SS[4 * gS + 2] = 255 * HS.b, SS[4 * gS + 3] = 255
          }))
        }
        this._rampGradientsTexture = NS.d.CreateRGBATexture(SS, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((SS, HS) => SS.gradient < HS.gradient ? -1 : SS.gradient > HS.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(SS, HS) {
        this._rampGradients || (this._rampGradients = []);
        const gS = new tS.f(SS, HS);
        return this._rampGradients.push(gS), this._syncRampGradientTexture(), this
      }
      removeRampGradient(SS) {
        return this._removeGradientAndTexture(SS, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(SS, HS, gS) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = TS, this._colorProcessing.process = oS);
        const bS = new tS.c(SS, HS, gS);
        return this._colorGradients.push(bS), this._colorGradients.sort(((SS, HS) => SS.gradient < HS.gradient ? -1 : SS.gradient > HS.gradient ? 1 : 0)), this
      }
      removeColorGradient(SS) {
        if (!this._colorGradients) return this;
        let HS = 0;
        for (const gS of this._colorGradients) {
          if (gS.gradient === SS) {
            this._colorGradients.splice(HS, 1);
            break
          }
          HS++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = FS, this._colorProcessing.process = lS), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const SS of this._drawWrappers)
            if (SS)
              for (const HS of SS) HS?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(SS, HS, gS, tS, bS) {
        return bS[4 * (((SS = .5 * Math.abs(SS) + .5) * gS % gS | 0) + ((HS = .5 * Math.abs(HS) + .5) * tS % tS | 0) * gS)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const SS = this._engine,
          HS = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * HS), this._vertexBuffer = new xS.b(SS, this._vertexData, !0, HS);
        let gS = 0;
        const tS = this._vertexBuffer.createVertexBuffer(xS.h.PositionKind, gS, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[xS.h.PositionKind] = tS, gS += 3;
        const bS = this._vertexBuffer.createVertexBuffer(xS.h.ColorKind, gS, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[xS.h.ColorKind] = bS, gS += 4;
        const XS = this._vertexBuffer.createVertexBuffer("angle", gS, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = XS, gS += 1;
        const NS = this._vertexBuffer.createVertexBuffer("size", gS, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = NS, gS += 2, this._isAnimationSheetEnabled) {
          const SS = this._vertexBuffer.createVertexBuffer("cellIndex", gS, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = SS, gS += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const SS = this._vertexBuffer.createVertexBuffer("direction", gS, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = SS, gS += 3
        }
        if (this._useRampGradients) {
          const SS = this._vertexBuffer.createVertexBuffer("remapData", gS, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = SS, gS += 4
        }
        let qS;
        if (this._useInstancing) {
          const HS = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new xS.b(SS, HS, !1, 2), qS = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else qS = this._vertexBuffer.createVertexBuffer("offset", gS, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = qS, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const SS = [],
          HS = [];
        let gS = 0;
        for (let tS = 0; tS < this._capacity; tS++) SS.push(gS), SS.push(gS + 1), SS.push(gS + 2), SS.push(gS), SS.push(gS + 2), SS.push(gS + 3), HS.push(gS, gS + 1, gS + 1, gS + 2, gS + 2, gS + 3, gS + 3, gS, gS, gS + 3), gS += 4;
        this._indexBuffer = this._engine.createIndexBuffer(SS), this._linesIndexBuffer = this._engine.createIndexBuffer(HS)
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
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (SS) return this.startDelay = SS, void setTimeout((() => {
          this.start(0)
        }), SS);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const SS = this.noiseTexture;
          if (SS && SS.onGeneratedObservable) SS.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let HS = 0; HS < this.preWarmCycles; HS++) this.animate(!0), SS.render()
            }))
          }));
          else
            for (let HS = 0; HS < this.preWarmCycles; HS++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(SS))
      }
      _postStop(SS) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(SS, HS, gS, tS) {
        let bS = SS * this._vertexBufferSize;
        const xS = XS.l.VK[0].dJ(this._scene?.floatingOriginOffset || XS.n.ZeroReadOnly);
        if (this._vertexData[bS++] = HS.position.x + this.worldOffset.x - xS.x, this._vertexData[bS++] = HS.position.y + this.worldOffset.y - xS.y, this._vertexData[bS++] = HS.position.z + this.worldOffset.z - xS.z, this._vertexData[bS++] = HS.color.r, this._vertexData[bS++] = HS.color.g, this._vertexData[bS++] = HS.color.b, this._vertexData[bS++] = HS.color.a, this._vertexData[bS++] = HS.angle, this._vertexData[bS++] = HS.scale.x * HS.size, this._vertexData[bS++] = HS.scale.y * HS.size, this._isAnimationSheetEnabled && (this._vertexData[bS++] = HS.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[bS++] = HS.direction.x, this._vertexData[bS++] = HS.direction.y, this._vertexData[bS++] = HS.direction.z);
        else if (HS._properties.initialDirection) {
          let SS = HS._properties.initialDirection;
          this.isLocal && (XS.n.TransformNormalToRef(SS, this._emitterWorldMatrix, XS.l.VK[0]), SS = XS.l.VK[0]), 0 === SS.x && 0 === SS.z && (SS.x = .001), this._vertexData[bS++] = SS.x, this._vertexData[bS++] = SS.y, this._vertexData[bS++] = SS.z
        } else {
          let SS = HS.direction;
          this.isLocal && (XS.n.TransformNormalToRef(SS, this._emitterWorldMatrix, XS.l.VK[0]), SS = XS.l.VK[0]), 0 === SS.x && 0 === SS.z && (SS.x = .001), this._vertexData[bS++] = SS.x, this._vertexData[bS++] = SS.y, this._vertexData[bS++] = SS.z
        }
        this._useRampGradients && HS.remapData && (this._vertexData[bS++] = HS.remapData.x, this._vertexData[bS++] = HS.remapData.y, this._vertexData[bS++] = HS.remapData.z, this._vertexData[bS++] = HS.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === gS ? gS = this._epsilon : 1 === gS && (gS = 1 - this._epsilon), 0 === tS ? tS = this._epsilon : 1 === tS && (tS = 1 - this._epsilon)), this._vertexData[bS++] = gS, this._vertexData[bS] = tS)
      }
      _prepareParticle(SS) {}
      _createNewOnes(SS) {
        let HS;
        for (let gS = 0; gS < SS && this._particles.length !== this._capacity; gS++) {
          HS = this._createParticle(), this._particles.push(HS);
          let SS = this._createQueueStart;
          for (; SS;) SS.process(HS, this), SS = SS.nextItem;
          HS._inheritParticleInfoToSubEmitters()
        }
      }
      _update(SS) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const SS = this.emitter;
          this._emitterWorldMatrix = SS.getWorldMatrix()
        } else {
          const SS = this.emitter;
          this._emitterWorldMatrix = XS.e.Translation(SS.x, SS.y, SS.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(SS)
      }
      static _GetAttributeNamesOrOptions() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = [xS.h.PositionKind, xS.h.ColorKind, "angle", "offset", "size"];
        return SS && tS.push("cellIndex"), HS || tS.push("direction"), gS && tS.push("remapData"), tS
      }
      static _GetEffectCreationOptions() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, sS.e)(tS), SS && tS.push("particlesInfos"), HS && tS.push("logarithmicDepthConstant"), gS && (tS.push("vFogInfos"), tS.push("vFogColor")), tS
      }
      fillDefines(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, sS.j)(this, this._scene, SS), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && SS.push("#define FOG")), this._isAnimationSheetEnabled && SS.push("#define ANIMATESHEET"), this.useLogarithmicDepth && SS.push("#define LOGARITHMICDEPTH"), HS === wS.BLENDMODE_MULTIPLY && SS.push("#define BLENDMULTIPLYMODE"), this.isLocal && SS.push("#define LOCAL"), this._useRampGradients && SS.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (SS.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            SS.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            SS.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && SS.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            SS.push("#define BILLBOARDMODE_ALL")
        }
        gS && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), SS.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(SS, HS, gS) {
        HS.push(...LH._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), SS.push(...LH._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), gS.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, MS.e)(SS, this._imageProcessingConfigurationDefines), (0, MS.d)(gS, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(SS) {
        var HS;
        const gS = this._getCustomDrawWrapper(SS);
        if (gS?.effect) return gS;
        const tS = [];
        this.fillDefines(tS, SS);
        const XS = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          xS = EH.d._PrepareStringDefines(XS, tS),
          NS = xS ? EH.d.GetConfiguration(XS) : void 0;
        let qS = this._drawWrappers[XS];
        qS || (qS = this._drawWrappers[XS] = [], 0 === XS || this._renderPassObserver || (this._renderPassObserver = ((HS = this._engine)._onReleaseRenderPassObservable ?? (HS._onReleaseRenderPassObservable = new bS.e)).add((SS => {
          const HS = this._drawWrappers[SS];
          if (HS) {
            for (const SS of HS) SS?.dispose();
            delete this._drawWrappers[SS]
          }
        }))));
        let uS = qS[SS];
        uS || (uS = new pS.d(this._engine), uS.drawContext && (uS.drawContext.useInstancing = this._useInstancing), qS[SS] = uS);
        const IS = tS.join("\n");
        if (uS.defines !== IS) {
          const SS = [],
            HS = [],
            gS = [];
          this.fillUniformsAttributesAndSamplerNames(HS, SS, gS), xS && (HS.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== NS?.defines.PREPASS_LOCAL_POSITION_INDEX && HS.push("inverseEmitterWM", "geometryWorldOffset")), uS.setEffect(this._engine.createEffect("particles", {
            attributes: SS,
            uniformsNames: HS,
            samplers: gS,
            defines: IS,
            shaderLanguage: this._shaderLanguage,
            multiTarget: xS,
            indexParameters: xS ? {
              buffersCount: NS?._mrtCount ?? 0
            } : void 0
          }, this._engine), IS)
        }
        return uS
      }
      _bindGeometryRendering(SS) {
        const HS = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          gS = EH.d.GetConfiguration(HS);
        if (!gS?._defines) return;
        SS.setFloat("objectId", 0), SS.setInt("meshBlendTag", 0);
        const tS = this._scene?.activeCamera;
        if (SS.setFloat2("cameraInfo", tS?.minZ ?? 0, tS?.maxZ ?? 1), this.isLocal && void 0 !== gS.defines.PREPASS_LOCAL_POSITION_INDEX) {
          SS.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const HS = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || XS.n.ZeroReadOnly, XS.l.VK[0]);
          SS.setVector3("geometryWorldOffset", HS)
        }
      }
      animate() {
        let SS, HS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!HS && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (HS ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) SS = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const HS = this._calculateEmitRate();
            SS = HS * this._scaledUpdateSpeed | 0, this._newPartsExcess += HS * this._scaledUpdateSpeed - SS
          }
          if (this._newPartsExcess > 1 && (SS += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? SS = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(SS), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !HS) {
            let SS = 0;
            for (let HS = 0; HS < this._particles.length; HS++) {
              const gS = this._particles[HS];
              this._appendParticleVertices(SS, gS), SS += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const SS = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  HS = this._particles.length;
                HS < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, HS * SS, this._fixedCapacityHighWaterMark * SS), this._fixedCapacityHighWaterMark = HS, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const SS = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * SS), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let SS = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const HS = this._actualFrame / this.targetStopDuration;
          tS.n.GetCurrentGradient(HS, this._emitRateGradients, ((HS, gS, tS) => {
            HS !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = gS.getFactor(), this._currentEmitRateGradient = HS), SS = (0, aS.Lerp)(this._currentEmitRate1, this._currentEmitRate2, tS)
          }))
        }
        return SS
      }
      _appendParticleVertices(SS, HS) {
        this._appendParticleVertex(SS++, HS, 0, 0), this._useInstancing || (this._appendParticleVertex(SS++, HS, 1, 0), this._appendParticleVertex(SS++, HS, 1, 1), this._appendParticleVertex(SS, HS, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !LH.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([gS.e(346).then((() => gS(61365))), gS.e(340).then((() => gS(61369)))])) : await Promise.all([gS.e(329).then((() => gS(61372))), Promise.all([gS.e(322), gS.e(356)]).then((() => gS(61374)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== wS.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(wS.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(wS.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(SS) {
        const HS = this._getWrapper(SS),
          gS = HS.effect,
          tS = this._engine;
        tS.enableEffect(HS);
        const bS = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        gS.setTexture("diffuseSampler", this.particleTexture), gS.setMatrix("view", bS);
        const xS = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (gS.setMatrix("projection", xS), this._isAnimationSheetEnabled && this.particleTexture) {
          const SS = this.particleTexture.getBaseSize();
          gS.setFloat3("particlesInfos", this.spriteCellWidth / SS.width, this.spriteCellHeight / SS.height, this.spriteCellWidth / SS.width)
        }
        if (gS.setVector2("translationPivot", this.translationPivot), gS.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const SS = this._scene.activeCamera;
          gS.setVector3("eyePosition", SS.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), gS.setTexture("rampSampler", this._rampGradientsTexture));
        const NS = gS.defines;
        this._scene && ((0, sS.f)(gS, this, this._scene), this.applyFog && (0, BS.i)(this._scene, void 0, gS)), NS.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (bS.invertToRef(XS.l.Matrix[0]), gS.setMatrix("invView", XS.l.Matrix[0])), gS._multiTarget && this._bindGeometryRendering(gS), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? tS.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, gS) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, gS)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? tS.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, gS) : tS.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, gS), this.useLogarithmicDepth && this._scene && (0, BS.q)(NS, gS, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(gS), this._setEngineBasedOnBlendMode(SS), gS._multiTarget && EH.d._BindZeroAlphaDiscard(tS, gS);
        let qS = !1;
        try {
          EH.d._BindAttachmentsForEffect(tS, gS) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(gS), this._useInstancing ? this._scene?.forceWireframe ? tS.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : tS.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? tS.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : tS.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), qS = !0)
        } finally {
          EH.d._RestoreAttachments(tS)
        }
        return qS ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const SS = this._engine;
        let HS;
        return SS.setState && (SS.setState(!1), this.forceDepthWrite && SS.setDepthWrite(!0)), HS = this.blendMode === wS.BLENDMODE_MULTIPLYADD ? this._render(wS.BLENDMODE_MULTIPLY) + this._render(wS.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), HS
      }
      _onDispose() {}
      dispose() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), SS && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), SS && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(HS, gS), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const SS = this._scene.zD.indexOf(this);
          SS > -1 && this._scene.zD.splice(SS, 1), this._scene._activeParticleSystems.dispose()
        }
        this.bY.notifyObservers(this), this.bY.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    LH.ForceGLSL = !1;
    var YH, AH = gS(37164);
    ! function(SS) {
      SS[SS.ATTACHED = 0] = "ATTACHED", SS[SS.END = 1] = "END"
    }(YH || (YH = {}));
    class yH {
      constructor(SS) {
        if (this.particleSystem = SS, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !SS.emitter || !SS.emitter.dispose) {
          const HS = (0, AH.d)("BABYLON.AbstractMesh");
          SS.emitter = new HS("SubemitterSystemEmitter", SS.lL()), SS._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let SS = this.particleSystem.emitter;
        if (SS) {
          if (SS instanceof XS.n) SS = SS.clone();
          else if (-1 !== SS.getClassName().indexOf("Mesh")) {
            SS = new((0, AH.d)("BABYLON.Mesh"))("", SS.lL()), SS.isVisible = !1
          }
        } else SS = new XS.n;
        const HS = new yH(this.particleSystem.clone(this.particleSystem.name, SS));
        return HS.particleSystem.name += "Clone", HS.type = this.type, HS.inheritDirection = this.inheritDirection, HS.inheritedVelocityAmount = this.inheritedVelocityAmount, HS.particleSystem._disposeEmitterOnDispose = !0, HS.particleSystem.disposeOnStop = !0, HS
      }
      serialize() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = {};
        return HS.type = this.type, HS.inheritDirection = this.inheritDirection, HS.inheritedVelocityAmount = this.inheritedVelocityAmount, HS.particleSystem = this.particleSystem.serialize(SS), HS
      }
      static _ParseParticleSystem(SS, HS, gS) {
        throw (0, VS.l)("ParseParticle")
      }
      static Parse(SS, HS, gS) {
        const tS = SS.particleSystem,
          bS = new yH(yH._ParseParticleSystem(tS, HS, gS, !0));
        return bS.type = SS.type, bS.inheritDirection = SS.inheritDirection, bS.inheritedVelocityAmount = SS.inheritedVelocityAmount, bS.particleSystem._isSubEmitter = !0, bS
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var VH = gS(39939),
      iH = gS(40068);
    const WH = () => {};
    class zH {
      constructor() {
        this.particlePositionGenerator = WH, this.particleDestinationGenerator = WH, this.particleDirectionGenerator = WH
      }
      startDirectionFunction(SS, HS, gS, tS) {
        const bS = XS.l.VK[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== WH) this.particleDirectionGenerator(-1, gS, bS);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== WH) {
          this.particleDestinationGenerator(-1, gS, bS);
          const SS = XS.l.VK[1];
          bS.subtractToRef(gS.position, SS), SS.scaleToRef(1 / gS.lifeTime, bS)
        } else bS.set(0, 0, 0);
        tS ? HS.dJ(bS) : XS.n.TransformNormalToRef(bS, SS, HS)
      }
      startPositionFunction(SS, HS, gS, tS) {
        const bS = XS.l.VK[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== WH ? this.particlePositionGenerator(-1, gS, bS) : bS.set(0, 0, 0), tS ? HS.dJ(bS) : XS.n.TransformCoordinatesToRef(bS, SS, HS)
      }
      clone() {
        const SS = new zH;
        return kS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {}
      buildUniformLayout(SS) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.particlePositionGenerator = this.particlePositionGenerator, SS.particleDestinationGenerator = this.particleDestinationGenerator, SS
      }
      parse(SS) {
        SS.particlePositionGenerator && (this.particlePositionGenerator = SS.particlePositionGenerator), SS.particleDestinationGenerator && (this.particleDestinationGenerator = SS.particleDestinationGenerator)
      }
    }
    const UH = XS.n.Zero(),
      pH = XS.n.Zero(),
      sH = XS.n.Zero();
    class BH {
      constructor() {
        this.strength = 0, this.position = XS.n.Zero()
      }
      _processParticle(SS, HS) {
        this.position.subtractToRef(SS.position, UH);
        const gS = UH.lengthSquared() + 1;
        UH.normalize().scaleToRef(this.strength / gS, pH), pH.scaleToRef(HS._tempScaledUpdateSpeed, sH), SS.direction.addInPlace(sH)
      }
      serialize() {
        return {
          position: this.position.lgS(),
          strength: this.strength
        }
      }
    }
    const MH = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class FH extends LH {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = SS => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const HS = Math.floor(Math.random() * this._subEmitters.length);
          for (const gS of this._subEmitters[HS])
            if (1 === gS.type) {
              const HS = gS.clone();
              SS._inheritParticleInfoToSubEmitter(HS), HS.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(HS.particleSystem), HS.particleSystem.start()
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
      set flowMap(SS) {
        this._flowMap !== SS && (this._flowMap = SS, this._flowMapUpdate && (vH(this._flowMapUpdate), this._flowMapUpdate = null), SS && (this._flowMapUpdate = {
          process: SS => {
            const HS = this.lL()?.getTransformMatrix();
            this._flowMap._processParticle(SS, this.flowMapStrength * this._tempScaledUpdateSpeed, HS)
          },
          previousItem: null,
          nextItem: null
        }, cH(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(SS) {
        super.addAttractor(SS), 1 === this._attractors.length && (this._attractorUpdate = {
          process: SS => {
            for (const HS of this._attractors) HS._processParticle(SS, this)
          },
          previousItem: null,
          nextItem: null
        }, cH(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(SS) {
        super.removeAttractor(SS), 0 === this._attractors.length && this._attractorUpdate && vH(this._attractorUpdate)
      }
      start() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(SS)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const SS of this.subEmitters) SS instanceof FH ? this._subEmitters.push([new yH(SS)]) : SS instanceof yH ? this._subEmitters.push([SS]) : SS instanceof Array && this._subEmitters.push(SS)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const SS of this.activeSubSystems) SS.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const SS = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== SS && this._rootParticleSystem.activeSubSystems.splice(SS, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(SS) {
        SS && this._stopSubEmitters()
      }
      _prepareParticle(SS) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const HS = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          SS._properties.attachedSubEmitters = [];
          for (const gS of HS)
            if (0 === gS.type) {
              const HS = gS.clone();
              SS._properties.attachedSubEmitters.push(HS), HS.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), SS && this.particles)
          for (const gS of this.particles)
            if (gS._properties.attachedSubEmitters)
              for (let SS = gS._properties.attachedSubEmitters.length - 1; SS >= 0; SS -= 1) gS._properties.attachedSubEmitters[SS].dispose();
        if (HS && this.activeSubSystems)
          for (let gS = this.activeSubSystems.length - 1; gS >= 0; gS -= 1) this.activeSubSystems[gS].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let SS = 0; SS < this._subEmitters.length; SS++)
            for (const HS of this._subEmitters[SS]) HS.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(SS, HS, gS, tS) {
        let bS;
        bS = gS instanceof VH.b ? null : gS;
        const xS = (0, AH.d)("BABYLON.Texture");
        if (xS && bS)
          if (SS.texture) HS.particleTexture = xS.Parse(SS.texture, bS, tS);
          else if (SS.textureName) {
          const gS = SS.textureSettings;
          if (HS.particleTexture = new xS(tS + SS.textureName, bS, !1, void 0 === SS.invertY || SS.invertY, gS ? gS.samplingMode : void 0), HS.particleTexture.name = SS.textureName, gS) {
            const SS = HS.particleTexture;
            for (const HS of MH) void 0 !== gS[HS] && (SS[HS] = gS[HS])
          }
        }
        if (SS.emitterId || 0 === SS.emitterId || void 0 !== SS.emitter ? (SS.emitterId || 0 === SS.emitterId) && bS ? (HS.emitter = bS.getLastMeshById(SS.emitterId), HS.emitter || (HS.emitter = XS.n.Zero())) : HS.emitter = XS.n.FromArray(SS.emitter) : HS.emitter = XS.n.Zero(), HS.isLocal = !!SS.isLocal, void 0 !== SS.renderingGroupId && (HS.renderingGroupId = SS.renderingGroupId), void 0 !== SS.isBillboardBased && (HS.isBillboardBased = SS.isBillboardBased), void 0 !== SS.billboardMode && (HS.billboardMode = SS.billboardMode), void 0 !== SS.useLogarithmicDepth && (HS.useLogarithmicDepth = SS.useLogarithmicDepth), SS.animations) {
          for (let gS = 0; gS < SS.animations.length; gS++) {
            const tS = SS.animations[gS],
              bS = (0, AH.d)("BABYLON.Animation");
            bS && HS.animations.push(bS.Parse(tS))
          }
          HS.beginAnimationOnStart = SS.beginAnimationOnStart, HS.beginAnimationFrom = SS.beginAnimationFrom, HS.beginAnimationTo = SS.beginAnimationTo, HS.beginAnimationLoop = SS.beginAnimationLoop
        }
        if (SS.autoAnimate && bS && bS.beginAnimation(HS, SS.autoAnimateFrom, SS.autoAnimateTo, SS.autoAnimateLoop, SS.autoAnimateSpeed || 1), HS.startDelay = 0 | SS.startDelay, HS.minAngularSpeed = SS.minAngularSpeed, HS.maxAngularSpeed = SS.maxAngularSpeed, HS.minSize = SS.minSize, HS.maxSize = SS.maxSize, SS.minScaleX && (HS.minScaleX = SS.minScaleX, HS.maxScaleX = SS.maxScaleX, HS.minScaleY = SS.minScaleY, HS.maxScaleY = SS.maxScaleY), void 0 !== SS.preWarmCycles && (HS.preWarmCycles = SS.preWarmCycles, HS.preWarmStepOffset = SS.preWarmStepOffset), void 0 !== SS.minInitialRotation && (HS.minInitialRotation = SS.minInitialRotation, HS.maxInitialRotation = SS.maxInitialRotation), HS.minLifeTime = SS.minLifeTime, HS.maxLifeTime = SS.maxLifeTime, HS.minEmitPower = SS.minEmitPower, HS.maxEmitPower = SS.maxEmitPower, HS.emitRate = SS.emitRate, HS.gravity = XS.n.FromArray(SS.gravity), SS.noiseStrength && (HS.noiseStrength = XS.n.FromArray(SS.noiseStrength)), HS.color1 = IS.c.FromArray(SS.color1), HS.color2 = IS.c.FromArray(SS.color2), HS.colorDead = IS.c.FromArray(SS.colorDead), HS.updateSpeed = SS.updateSpeed, HS.targetStopDuration = SS.targetStopDuration, HS.blendMode = SS.blendMode, SS.colorGradients)
          for (const XS of SS.colorGradients) HS.addColorGradient(XS.gradient, IS.c.FromArray(XS.color1), XS.color2 ? IS.c.FromArray(XS.color2) : void 0);
        if (SS.rampGradients) {
          for (const gS of SS.rampGradients) HS.addRampGradient(gS.gradient, IS.b.FromArray(gS.color));
          HS.useRampGradients = SS.useRampGradients
        }
        if (SS.colorRemapGradients)
          for (const XS of SS.colorRemapGradients) HS.addColorRemapGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.alphaRemapGradients)
          for (const XS of SS.alphaRemapGradients) HS.addAlphaRemapGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.sizeGradients)
          for (const XS of SS.sizeGradients) HS.addSizeGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.angularSpeedGradients)
          for (const XS of SS.angularSpeedGradients) HS.addAngularSpeedGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.velocityGradients)
          for (const XS of SS.velocityGradients) HS.addVelocityGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.dragGradients)
          for (const XS of SS.dragGradients) HS.addDragGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.emitRateGradients)
          for (const XS of SS.emitRateGradients) HS.addEmitRateGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.startSizeGradients)
          for (const XS of SS.startSizeGradients) HS.addStartSizeGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.lifeTimeGradients)
          for (const XS of SS.lifeTimeGradients) HS.addLifeTimeGradient(XS.gradient, void 0 !== XS.factor1 ? XS.factor1 : XS.factor, XS.factor2);
        if (SS.limitVelocityGradients) {
          for (const gS of SS.limitVelocityGradients) HS.addLimitVelocityGradient(gS.gradient, void 0 !== gS.factor1 ? gS.factor1 : gS.factor, gS.factor2);
          HS.limitVelocityDamping = SS.limitVelocityDamping
        }
        if (SS.noiseTexture && bS) {
          const gS = (0, AH.d)("BABYLON.ProceduralTexture");
          HS.noiseTexture = gS.Parse(SS.noiseTexture, bS, tS)
        }
        let NS;
        if (SS.particleEmitterType) {
          switch (SS.particleEmitterType.type) {
            case "SphereParticleEmitter":
              NS = new GS;
              break;
            case "SphereDirectedParticleEmitter":
              NS = new CS;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              NS = new PS;
              break;
            case "ConeDirectedParticleEmitter":
              NS = new QS;
              break;
            case "CylinderParticleEmitter":
              NS = new nS.e;
              break;
            case "CylinderDirectedParticleEmitter":
              NS = new nS.d;
              break;
            case "HemisphericParticleEmitter":
              NS = new jS;
              break;
            case "PointParticleEmitter":
              NS = new KS;
              break;
            case "MeshParticleEmitter":
              NS = new DS;
              break;
            case "CustomParticleEmitter":
              NS = new zH;
              break;
            default:
              NS = new fS.b
          }
          NS.parse(SS.particleEmitterType, bS)
        } else NS = new fS.b, NS.parse(SS, bS);
        HS.particleEmitterType = NS, HS.startSpriteCellID = SS.startSpriteCellID, HS.endSpriteCellID = SS.endSpriteCellID, HS.spriteCellLoop = SS.spriteCellLoop ?? !0, HS.spriteCellWidth = SS.spriteCellWidth, HS.spriteCellHeight = SS.spriteCellHeight, HS.spriteCellChangeSpeed = SS.spriteCellChangeSpeed, HS.spriteRandomStartCell = SS.spriteRandomStartCell, HS.disposeOnStop = SS.disposeOnStop ?? !1, HS.manualEmitCount = SS.manualEmitCount ?? -1
      }
      static Parse(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bS = arguments.length > 4 ? arguments[4] : void 0;
        const xS = SS.name;
        let NS, qS, uS = null,
          fS = null;
        if (HS instanceof VH.b ? NS = HS : (qS = HS, NS = qS.AK()), SS.customShader && (0, VS.c)(NS.createEffectForParticles)) {
          fS = SS.customShader;
          const HS = fS.shaderOptions.defines.length > 0 ? fS.shaderOptions.defines.join("\n") : "";
          uS = NS.createEffectForParticles(fS.shaderPath.fragmentElement, fS.shaderOptions.uniforms, fS.shaderOptions.samplers, HS)
        }
        const kS = new FH(xS, bS || SS.hf, HS, uS, SS.isAnimationSheetEnabled);
        if (kS.customShader = fS, kS._rootUrl = gS, SS.id && (kS.id = SS.id), SS.subEmitters) {
          kS.subEmitters = [];
          for (const tS of SS.subEmitters) {
            const SS = [];
            for (const bS of tS) SS.push(yH.Parse(bS, HS, gS));
            kS.subEmitters.push(SS)
          }
        }
        if (SS.attractors)
          for (const IS of SS.attractors) {
            const SS = new BH;
            SS.position = XS.n.FromArray(IS.position), SS.strength = IS.strength, kS.addAttractor(SS)
          }
        return FH._Parse(SS, kS, HS, gS), SS.textureMask && (kS.textureMask = IS.c.FromArray(SS.textureMask)), SS.worldOffset && (kS.worldOffset = XS.n.FromArray(SS.worldOffset)), SS.preventAutoStart && (kS.preventAutoStart = SS.preventAutoStart), SS.metadata && (kS.metadata = SS.metadata), tS || kS.preventAutoStart || kS.start(), kS
      }
      serialize() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = {};
        if (FH._Serialize(HS, this, SS), HS.textureMask = this.textureMask.lgS(), HS.customShader = this.customShader, HS.preventAutoStart = this.preventAutoStart, HS.worldOffset = this.worldOffset.lgS(), this.metadata && (HS.metadata = this.metadata), this.subEmitters) {
          HS.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const gS of this._subEmitters) {
            const tS = [];
            for (const HS of gS) HS.particleSystem.doNotSerialize || tS.push(HS.serialize(SS));
            HS.subEmitters.push(tS)
          }
        }
        if (this._attractors && this._attractors.length) {
          HS.attractors = [];
          for (const SS of this._attractors) HS.attractors.push(SS.serialize())
        }
        return HS
      }
      static _Serialize(SS, HS, gS) {
        if (SS.name = HS.name, SS.id = HS.id, SS.hf = HS.getCapacity(), SS.disposeOnStop = HS.disposeOnStop, SS.manualEmitCount = HS.manualEmitCount, HS.emitter.position) {
          const gS = HS.emitter;
          SS.emitterId = gS.id
        } else {
          const gS = HS.emitter;
          SS.emitter = gS.lgS()
        }
        if (HS.particleEmitterType && (SS.particleEmitterType = HS.particleEmitterType.serialize()), HS.particleTexture)
          if (gS) SS.texture = HS.particleTexture.serialize();
          else {
            const gS = HS.particleTexture;
            SS.textureName = HS.particleTexture.name, SS.invertY = !!gS._invertY;
            const tS = {};
            for (const SS of MH) tS[SS] = gS[SS];
            tS.samplingMode = gS.samplingMode, SS.textureSettings = tS
          } SS.isLocal = HS.isLocal, iH.b.AppendSerializedAnimations(HS, SS), SS.beginAnimationOnStart = HS.beginAnimationOnStart, SS.beginAnimationFrom = HS.beginAnimationFrom, SS.beginAnimationTo = HS.beginAnimationTo, SS.beginAnimationLoop = HS.beginAnimationLoop, SS.startDelay = HS.startDelay, SS.renderingGroupId = HS.renderingGroupId, SS.isBillboardBased = HS.isBillboardBased, SS.billboardMode = HS.billboardMode, SS.minAngularSpeed = HS.minAngularSpeed, SS.maxAngularSpeed = HS.maxAngularSpeed, SS.minSize = HS.minSize, SS.maxSize = HS.maxSize, SS.minScaleX = HS.minScaleX, SS.maxScaleX = HS.maxScaleX, SS.minScaleY = HS.minScaleY, SS.maxScaleY = HS.maxScaleY, SS.minEmitPower = HS.minEmitPower, SS.maxEmitPower = HS.maxEmitPower, SS.minLifeTime = HS.minLifeTime, SS.maxLifeTime = HS.maxLifeTime, SS.emitRate = HS.emitRate, SS.gravity = HS.gravity.lgS(), SS.noiseStrength = HS.noiseStrength.lgS(), SS.color1 = HS.color1.lgS(), SS.color2 = HS.color2.lgS(), SS.colorDead = HS.colorDead.lgS(), SS.updateSpeed = HS.updateSpeed, SS.targetStopDuration = HS.targetStopDuration, SS.blendMode = HS.blendMode, SS.preWarmCycles = HS.preWarmCycles, SS.preWarmStepOffset = HS.preWarmStepOffset, SS.minInitialRotation = HS.minInitialRotation, SS.maxInitialRotation = HS.maxInitialRotation, SS.startSpriteCellID = HS.startSpriteCellID, SS.spriteCellLoop = HS.spriteCellLoop, SS.endSpriteCellID = HS.endSpriteCellID, SS.spriteCellChangeSpeed = HS.spriteCellChangeSpeed, SS.spriteCellWidth = HS.spriteCellWidth, SS.spriteCellHeight = HS.spriteCellHeight, SS.spriteRandomStartCell = HS.spriteRandomStartCell, SS.isAnimationSheetEnabled = HS.isAnimationSheetEnabled, SS.useLogarithmicDepth = HS.useLogarithmicDepth;
        const tS = HS.getColorGradients();
        if (tS) {
          SS.colorGradients = [];
          for (const HS of tS) {
            const gS = {
              gradient: HS.gradient,
              color1: HS.color1.lgS()
            };
            HS.color2 ? gS.color2 = HS.color2.lgS() : gS.color2 = HS.color1.lgS(), SS.colorGradients.push(gS)
          }
        }
        const bS = HS.getRampGradients();
        if (bS) {
          SS.rampGradients = [];
          for (const HS of bS) {
            const gS = {
              gradient: HS.gradient,
              color: HS.color.lgS()
            };
            SS.rampGradients.push(gS)
          }
          SS.useRampGradients = HS.useRampGradients
        }
        const XS = HS.getColorRemapGradients();
        if (XS) {
          SS.colorRemapGradients = [];
          for (const HS of XS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.colorRemapGradients.push(gS)
          }
        }
        const xS = HS.getAlphaRemapGradients();
        if (xS) {
          SS.alphaRemapGradients = [];
          for (const HS of xS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.alphaRemapGradients.push(gS)
          }
        }
        const NS = HS.getSizeGradients();
        if (NS) {
          SS.sizeGradients = [];
          for (const HS of NS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.sizeGradients.push(gS)
          }
        }
        const qS = HS.getAngularSpeedGradients();
        if (qS) {
          SS.angularSpeedGradients = [];
          for (const HS of qS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.angularSpeedGradients.push(gS)
          }
        }
        const uS = HS.getVelocityGradients();
        if (uS) {
          SS.velocityGradients = [];
          for (const HS of uS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.velocityGradients.push(gS)
          }
        }
        const IS = HS.getDragGradients();
        if (IS) {
          SS.dragGradients = [];
          for (const HS of IS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.dragGradients.push(gS)
          }
        }
        const fS = HS.getEmitRateGradients();
        if (fS) {
          SS.emitRateGradients = [];
          for (const HS of fS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.emitRateGradients.push(gS)
          }
        }
        const kS = HS.getStartSizeGradients();
        if (kS) {
          SS.startSizeGradients = [];
          for (const HS of kS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.startSizeGradients.push(gS)
          }
        }
        const aS = HS.getLifeTimeGradients();
        if (aS) {
          SS.lifeTimeGradients = [];
          for (const HS of aS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.lifeTimeGradients.push(gS)
          }
        }
        const KS = HS.getLimitVelocityGradients();
        if (KS) {
          SS.limitVelocityGradients = [];
          for (const HS of KS) {
            const gS = {
              gradient: HS.gradient,
              factor1: HS.factor1
            };
            void 0 !== HS.factor2 ? gS.factor2 = HS.factor2 : gS.factor2 = HS.factor1, SS.limitVelocityGradients.push(gS)
          }
          SS.limitVelocityDamping = HS.limitVelocityDamping
        }
        HS.noiseTexture && (SS.noiseTexture = HS.noiseTexture.serialize())
      }
      clone(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = {
          ...this._customWrappers
        };
        let bS = null;
        const XS = this._engine;
        if ((0, VS.c)(XS.createEffectForParticles) && null != this.customShader) {
          bS = this.customShader;
          const SS = bS.shaderOptions.defines.length > 0 ? bS.shaderOptions.defines.join("\n") : "",
            HS = XS.createEffectForParticles(bS.shaderPath.fragmentElement, bS.shaderOptions.uniforms, bS.shaderOptions.samplers, SS);
          tS[0] ? tS[0].effect = HS : this.setCustomEffect(HS, 0)
        }
        const xS = this.serialize(gS),
          NS = !1 === gS && this.particleTexture ? this.particleTexture.clone() : null;
        NS && (xS.textureName = void 0);
        const qS = FH.Parse(xS, this._scene || this._engine, this._rootUrl);
        return qS.name = SS, qS.customShader = bS, qS._customWrappers = tS, NS && (qS.particleTexture = NS), void 0 === HS && (HS = this.emitter), this.noiseTexture && (qS.noiseTexture = this.noiseTexture.clone()), qS.emitter = HS, this.preventAutoStart || qS.start(), qS
      }
    }
    FH.BILLBOARDMODE_Y = 2, FH.BILLBOARDMODE_ALL = 7, FH.BILLBOARDMODE_STRETCHED = 8, FH.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let RH = !1;
    RH || (RH = !0, yH._ParseParticleSystem = FH.Parse)
  },
  41653: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      SkyMaterial: () => PS,
      _MaxColorValueForRenderTarget: () => nS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(40068),
      xS = gS(37113),
      NS = gS(40324),
      qS = gS(40386),
      uS = gS(41617),
      IS = gS(41157),
      fS = gS(40129),
      kS = gS(37164),
      aS = gS(40412),
      KS = gS(40392),
      jS = gS(40375),
      GS = gS(40367);
    class CS extends NS.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function nS(SS) {
      switch (SS) {
        case uS.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case uS.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let PS = (() => {
      var SS;
      let HS, NS, uS, kS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS, ES = qS.d,
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [],
        zS = [],
        US = [],
        pS = [],
        sS = [],
        BS = [],
        MS = [],
        FS = [],
        RS = [],
        TS = [],
        oS = [],
        lS = [],
        mS = [],
        eS = [],
        rS = [],
        SH = [],
        HH = [],
        gH = [],
        tH = [],
        bH = [],
        XH = [],
        xH = [],
        NH = [],
        qH = [];
      return SS = class extends ES {
        constructor(SS, HS) {
          super(SS, HS, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, tS.k)(this, LS, 1), this.turbidity = ((0, tS.k)(this, YS), (0, tS.k)(this, AS, 10)), this.rayleigh = ((0, tS.k)(this, yS), (0, tS.k)(this, VS, 2)), this.mieCoefficient = ((0, tS.k)(this, iS), (0, tS.k)(this, WS, .005)), this.mieDirectionalG = ((0, tS.k)(this, zS), (0, tS.k)(this, US, .8)), this.distance = ((0, tS.k)(this, pS), (0, tS.k)(this, sS, 500)), this.inclination = ((0, tS.k)(this, BS), (0, tS.k)(this, MS, .49)), this.azimuth = ((0, tS.k)(this, FS), (0, tS.k)(this, RS, .25)), this.sunPosition = ((0, tS.k)(this, TS), (0, tS.k)(this, oS, new xS.VK(0, 100, 0))), this.useSunPosition = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, !1)), this.cameraOffset = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, xS.VK.Zero())), this.up = ((0, tS.k)(this, SH), (0, tS.k)(this, HH, xS.VK.Up())), this.dithering = ((0, tS.k)(this, gH), (0, tS.k)(this, tH, !1)), this.rawHdrOutput = ((0, tS.k)(this, bH), (0, tS.k)(this, XH, !1)), this.cloudiness = ((0, tS.k)(this, xH), (0, tS.k)(this, NH, 0)), this._cameraPosition = ((0, tS.k)(this, qH), xS.VK.Zero()), this._skyOrientation = new xS.Quaternion
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
        isReadyForSubMesh(HS, gS) {
          const tS = gS._drawWrapper;
          if (this.isFrozen && tS.effect && tS._wasPreviouslyReady) return !0;
          gS.materialDefines || (gS.materialDefines = new CS);
          const bS = gS.materialDefines,
            XS = this.lL();
          if (this._isReadyForSubMesh(gS)) return !0;
          if ((0, GS.Z)(HS, XS, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, bS, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, GS.O)(HS, bS, !0, !1), bS.IMAGEPROCESSINGPOSTPROCESS !== XS.imageProcessingConfiguration.applyByPostProcess && bS.markAsMiscDirty(), bS.DITHER !== this.dithering && bS.markAsMiscDirty(), bS.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && bS.markAsMiscDirty(), bS.isDirty) {
            bS.markAsProcessed(), XS.resetCachedMaterial();
            const HS = new KS.c;
            bS.FOG && HS.addFallback(1, "FOG"), bS.IMAGEPROCESSINGPOSTPROCESS = XS.imageProcessingConfiguration.applyByPostProcess, bS.DITHER = this.dithering, bS.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const tS = [IS.f.PositionKind];
            bS.VERTEXCOLOR && tS.push(IS.f.ColorKind);
            const xS = "sky",
              NS = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, jS.e)(NS);
            const qS = bS.toString();
            gS.setEffect(XS.AK().createEffect(xS, {
              attributes: tS,
              uniformsNames: NS,
              uniformBuffersNames: [],
              samplers: [],
              defines: qS,
              fallbacks: HS,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: SS._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, XS.AK()), bS, this._materialContext)
          }
          return !(!gS.effect || !gS.effect.isReady()) && (bS._renderId = XS.getRenderId(), tS._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(SS, HS, gS) {
          const tS = this.lL(),
            bS = gS.materialDefines;
          if (!bS) return;
          const XS = gS.effect;
          if (!XS) return;
          this._activeEffect = XS, this.bindOnlyWorldMatrix(SS), this._activeEffect.setMatrix("viewProjection", tS.getTransformMatrix()), this._mustRebind(tS, XS, gS) && ((0, jS.f)(XS, this, tS), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, GS.q)(bS, XS, tS)), tS.fogEnabled && HS.applyFog && tS.fogMode !== fS.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", tS.getViewMatrix()), (0, GS.i)(tS, HS, this._activeEffect, this.rawHdrOutput);
          const NS = tS.activeCamera;
          if (NS) {
            const SS = NS.getWorldMatrix();
            this._cameraPosition.x = SS.m[12], this._cameraPosition.y = SS.m[13], this._cameraPosition.z = SS.m[14], this._activeEffect.setVector3("cameraPosition", xS.TmpVectors.VK[0].dJ(this._cameraPosition).GtS(tS.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const SS = tS.AK()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", nS(SS?.texture?.type))
          }
          if (!this.useSunPosition) {
            const SS = Math.PI * (this.inclination - .5),
              HS = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(HS) * Math.cos(SS), this.sunPosition.y = this.distance * Math.sin(-SS), this.sunPosition.z = this.distance * Math.sin(HS) * Math.cos(SS), xS.Quaternion.FromUnitVectorsToRef(xS.VK.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(HS, this._activeEffect, gS)
        }
        getAnimatables() {
          return []
        }
        dispose(SS) {
          super.dispose(SS)
        }
        clone(HS) {
          return XS.b.Clone((() => new SS(HS, this.lL())), this)
        }
        serialize() {
          const SS = super.serialize();
          return SS.customType = "BABYLON.SkyMaterial", SS
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(HS, gS, tS) {
          return XS.b.Parse((() => new SS(HS.name, gS)), HS, gS, tS)
        }
      }, (() => {
        const gS = "function" === typeof Symbol && Symbol.metadata ? Object.create(ES[Symbol.metadata] ?? null) : void 0;
        HS = [(0, bS.M)()], NS = [(0, bS.M)()], uS = [(0, bS.M)()], kS = [(0, bS.M)()], PS = [(0, bS.M)()], QS = [(0, bS.M)()], DS = [(0, bS.M)()], wS = [(0, bS.M)()], hS = [(0, bS.I)()], ZS = [(0, bS.M)()], JS = [(0, bS.I)()], OS = [(0, bS.I)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: SS => "luminance" in SS,
            get: SS => SS.luminance,
            set: (SS, HS) => {
              SS.luminance = HS
            }
          },
          metadata: gS
        }, LS, YS), (0, tS.j)(null, null, NS, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: SS => "turbidity" in SS,
            get: SS => SS.turbidity,
            set: (SS, HS) => {
              SS.turbidity = HS
            }
          },
          metadata: gS
        }, AS, yS), (0, tS.j)(null, null, uS, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: SS => "rayleigh" in SS,
            get: SS => SS.rayleigh,
            set: (SS, HS) => {
              SS.rayleigh = HS
            }
          },
          metadata: gS
        }, VS, iS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: SS => "mieCoefficient" in SS,
            get: SS => SS.mieCoefficient,
            set: (SS, HS) => {
              SS.mieCoefficient = HS
            }
          },
          metadata: gS
        }, WS, zS), (0, tS.j)(null, null, PS, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: SS => "mieDirectionalG" in SS,
            get: SS => SS.mieDirectionalG,
            set: (SS, HS) => {
              SS.mieDirectionalG = HS
            }
          },
          metadata: gS
        }, US, pS), (0, tS.j)(null, null, QS, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: SS => "distance" in SS,
            get: SS => SS.distance,
            set: (SS, HS) => {
              SS.distance = HS
            }
          },
          metadata: gS
        }, sS, BS), (0, tS.j)(null, null, DS, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: SS => "inclination" in SS,
            get: SS => SS.inclination,
            set: (SS, HS) => {
              SS.inclination = HS
            }
          },
          metadata: gS
        }, MS, FS), (0, tS.j)(null, null, wS, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: SS => "azimuth" in SS,
            get: SS => SS.azimuth,
            set: (SS, HS) => {
              SS.azimuth = HS
            }
          },
          metadata: gS
        }, RS, TS), (0, tS.j)(null, null, hS, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: SS => "sunPosition" in SS,
            get: SS => SS.sunPosition,
            set: (SS, HS) => {
              SS.sunPosition = HS
            }
          },
          metadata: gS
        }, oS, lS), (0, tS.j)(null, null, ZS, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: SS => "useSunPosition" in SS,
            get: SS => SS.useSunPosition,
            set: (SS, HS) => {
              SS.useSunPosition = HS
            }
          },
          metadata: gS
        }, mS, eS), (0, tS.j)(null, null, JS, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: SS => "cameraOffset" in SS,
            get: SS => SS.cameraOffset,
            set: (SS, HS) => {
              SS.cameraOffset = HS
            }
          },
          metadata: gS
        }, rS, SH), (0, tS.j)(null, null, OS, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: SS => "up" in SS,
            get: SS => SS.up,
            set: (SS, HS) => {
              SS.up = HS
            }
          },
          metadata: gS
        }, HH, gH), (0, tS.j)(null, null, dS, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: SS => "dithering" in SS,
            get: SS => SS.dithering,
            set: (SS, HS) => {
              SS.dithering = HS
            }
          },
          metadata: gS
        }, tH, bH), (0, tS.j)(null, null, cS, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: SS => "rawHdrOutput" in SS,
            get: SS => SS.rawHdrOutput,
            set: (SS, HS) => {
              SS.rawHdrOutput = HS
            }
          },
          metadata: gS
        }, XH, xH), (0, tS.j)(null, null, vS, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: SS => "cloudiness" in SS,
            get: SS => SS.cloudiness,
            set: (SS, HS) => {
              SS.cloudiness = HS
            }
          },
          metadata: gS
        }, NH, qH), gS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gS
        })
      })(), SS._ShaderLoader = new aS.e((() => [gS.e(330).then((() => gS(61377))), gS.e(323).then((() => gS(61385)))]), (() => [gS.e(347).then((() => gS(61390))), gS.e(341).then((() => gS(61392)))])), SS
    })();
    (0, kS.f)("BABYLON.SkyMaterial", PS)
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);