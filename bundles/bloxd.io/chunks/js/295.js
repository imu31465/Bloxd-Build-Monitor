export const id = 295;
export const ids = [295];
export const modules = {
  41021: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(39518),
      qQ = wQ(41027);
    class oQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = wQ, this.fLQ = [], this._maxBlockCapacity = FQ || 64, this._selectionContent = new LQ.b(1024), this._creationFunc = QQ
      }
      update(QQ, FQ, wQ) {
        qQ.e._CreateBlocks(QQ, FQ, wQ, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      sLQ(QQ) {
        for (let FQ = 0; FQ < this.blocks.length; FQ++) {
          this.blocks[FQ].addEntry(QQ)
        }
      }
      yN(QQ) {
        for (let FQ = 0; FQ < this.blocks.length; FQ++) {
          this.blocks[FQ].removeEntry(QQ)
        }
      }
      select(QQ, FQ) {
        this._selectionContent.reset();
        for (let wQ = 0; wQ < this.blocks.length; wQ++) {
          this.blocks[wQ].select(QQ, this._selectionContent, FQ)
        }
        return FQ ? this._selectionContent.concat(this.fLQ) : this._selectionContent.concatWithNoDuplicate(this.fLQ), this._selectionContent
      }
      intersects(QQ, FQ, wQ) {
        this._selectionContent.reset();
        for (let LQ = 0; LQ < this.blocks.length; LQ++) {
          this.blocks[LQ].intersects(QQ, FQ, this._selectionContent, wQ)
        }
        return wQ ? this._selectionContent.concat(this.fLQ) : this._selectionContent.concatWithNoDuplicate(this.fLQ), this._selectionContent
      }
      intersectsRay(QQ) {
        this._selectionContent.reset();
        for (let FQ = 0; FQ < this.blocks.length; FQ++) {
          this.blocks[FQ].intersectsRay(QQ, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.fLQ), this._selectionContent
      }
    }
    oQ.CreationFuncForMeshes = (QQ, FQ) => {
      const wQ = QQ.sK();
      !QQ.isBlocked && wQ.boundingBox.intersectsMinMax(FQ.TLQ, FQ.NLQ) && FQ.entries.push(QQ)
    }, oQ.CreationFuncForSubMeshes = (QQ, FQ) => {
      QQ.sK().boundingBox.intersectsMinMax(FQ.TLQ, FQ.NLQ) && FQ.entries.push(QQ)
    }
  },
  41027: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(36696),
      qQ = wQ(39736);
    class oQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.entries = [], this.hLQ = new Array, this._capacity = wQ, this._depth = LQ, this._maxDepth = qQ, this._creationFunc = oQ, this._minPoint = QQ, this._maxPoint = FQ, this.hLQ.push(QQ.clone()), this.hLQ.push(FQ.clone()), this.hLQ.push(QQ.clone()), this.hLQ[2].x = FQ.x, this.hLQ.push(QQ.clone()), this.hLQ[3].y = FQ.y, this.hLQ.push(QQ.clone()), this.hLQ[4].z = FQ.z, this.hLQ.push(FQ.clone()), this.hLQ[5].z = QQ.z, this.hLQ.push(FQ.clone()), this.hLQ[6].x = QQ.x, this.hLQ.push(FQ.clone()), this.hLQ[7].y = QQ.y
      }
      get MH() {
        return this._capacity
      }
      get TLQ() {
        return this._minPoint
      }
      get NLQ() {
        return this._maxPoint
      }
      addEntry(QQ) {
        if (this.blocks)
          for (let FQ = 0; FQ < this.blocks.length; FQ++) {
            this.blocks[FQ].addEntry(QQ)
          } else this._creationFunc(QQ, this), this.entries.length > this.MH && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(QQ) {
        if (this.blocks) {
          for (let FQ = 0; FQ < this.blocks.length; FQ++) {
            this.blocks[FQ].removeEntry(QQ)
          }
          return
        }
        const FQ = this.entries.indexOf(QQ);
        FQ > -1 && this.entries.splice(FQ, 1)
      }
      addEntries(QQ) {
        for (let FQ = 0; FQ < QQ.length; FQ++) {
          const wQ = QQ[FQ];
          this.addEntry(wQ)
        }
      }
      select(QQ, FQ, wQ) {
        if (qQ.e.IsInFrustum(this.hLQ, QQ)) {
          if (this.blocks) {
            for (let LQ = 0; LQ < this.blocks.length; LQ++) {
              this.blocks[LQ].select(QQ, FQ, wQ)
            }
            return
          }
          wQ ? FQ.concat(this.entries) : FQ.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(QQ, FQ, wQ, LQ) {
        if (qQ.e.IntersectsSphere(this._minPoint, this._maxPoint, QQ, FQ)) {
          if (this.blocks) {
            for (let qQ = 0; qQ < this.blocks.length; qQ++) {
              this.blocks[qQ].intersects(QQ, FQ, wQ, LQ)
            }
            return
          }
          LQ ? wQ.concat(this.entries) : wQ.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(QQ, FQ) {
        if (QQ.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let wQ = 0; wQ < this.blocks.length; wQ++) {
              this.blocks[wQ].intersectsRay(QQ, FQ)
            }
            return
          }
          FQ.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        oQ._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(QQ, FQ, wQ, qQ, DQ, kQ, vQ, mQ) {
        vQ.blocks = new Array;
        const uQ = new LQ.p((FQ.x - QQ.x) / 2, (FQ.y - QQ.y) / 2, (FQ.z - QQ.z) / 2);
        for (let LQ = 0; LQ < 2; LQ++)
          for (let FQ = 0; FQ < 2; FQ++)
            for (let HQ = 0; HQ < 2; HQ++) {
              const bQ = QQ.add(uQ.multiplyByFloats(LQ, FQ, HQ)),
                YQ = QQ.add(uQ.multiplyByFloats(LQ + 1, FQ + 1, HQ + 1)),
                xQ = new oQ(bQ, YQ, qQ, DQ + 1, kQ, mQ);
              xQ.addEntries(wQ), vQ.blocks.push(xQ)
            }
      }
    }
  },
  41033: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ
    });
    var LQ = wQ(39496),
      qQ = wQ(36696),
      oQ = wQ(39855),
      DQ = wQ(40972),
      kQ = wQ(39589),
      vQ = wQ(36720),
      mQ = wQ(41021);
    class uQ {
      constructor(QQ) {
        this.name = kQ.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new DQ.A(qQ.p.Zero(), new qQ.p(1, 1, 1)), (QQ = QQ || vQ.d.LastCreatedScene) && (this.lA = QQ, this.lA.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.lA.getActiveSubMeshCandidates = QQ => this.getActiveSubMeshCandidates(QQ), this.lA.getCollidingSubMeshCandidates = (QQ, FQ) => this.getCollidingSubMeshCandidates(QQ, FQ), this.lA.getIntersectingSubMeshCandidates = (QQ, FQ) => this.getIntersectingSubMeshCandidates(QQ, FQ))
      }
      register() {
        this.lA.onMeshRemovedObservable.add((QQ => {
          const FQ = this.lA.selectionOctree;
          if (void 0 !== FQ && null !== FQ) {
            const wQ = FQ.fLQ.indexOf(QQ); - 1 !== wQ && FQ.fLQ.splice(wQ, 1)
          }
        })), this.lA.onMeshImportedObservable.add((QQ => {
          const FQ = this.lA.selectionOctree;
          void 0 !== FQ && null !== FQ && FQ.sLQ(QQ)
        }))
      }
      getActiveMeshCandidates() {
        return this.lA.ZLQ?.select(this.lA.frustumPlanes) || this.lA._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(QQ) {
        if (QQ._submeshesOctree && QQ.useOctreeForRenderingSelection) {
          return QQ._submeshesOctree.select(this.lA.frustumPlanes)
        }
        return this.lA._getDefaultSubMeshCandidates(QQ)
      }
      getIntersectingSubMeshCandidates(QQ, FQ) {
        if (QQ._submeshesOctree && QQ.useOctreeForPicking) {
          DQ.A.TransformToRef(FQ, QQ.getWorldMatrix(), this._tempRay);
          return QQ._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.lA._getDefaultSubMeshCandidates(QQ)
      }
      getCollidingSubMeshCandidates(QQ, FQ) {
        if (QQ._submeshesOctree && QQ.useOctreeForCollisions) {
          const wQ = FQ._velocityWorldLength + Math.max(FQ._radius.x, FQ._radius.y, FQ._radius.z);
          return QQ._submeshesOctree.intersects(FQ._basePointWorld, wQ)
        }
        return this.lA._getDefaultSubMeshCandidates(QQ)
      }
      rebuild() {}
      dispose() {}
    }
    let HQ = !1;
    HQ || (HQ = !0, LQ.e.prototype.createOrUpdateSelectionOctree = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        wQ = this._getComponent(kQ.b.NAME_OCTREE);
      wQ || (wQ = new uQ(this), this.HLQ(wQ)), this.ZLQ || (this.ZLQ = new mQ.e(mQ.e.CreationFuncForMeshes, QQ, FQ));
      const LQ = this.getWorldExtends();
      return this.ZLQ.update(LQ.min, LQ.max, this.meshes), this.ZLQ
    }, Object.defineProperty(LQ.e.prototype, "selectionOctree", {
      get: function() {
        return this.ZLQ
      },
      enumerable: !0,
      configurable: !0
    }), oQ.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const wQ = this.iN();
      let LQ = wQ._getComponent(kQ.b.NAME_OCTREE);
      LQ || (LQ = new uQ(wQ), wQ.HLQ(LQ)), this._submeshesOctree || (this._submeshesOctree = new mQ.e(mQ.e.CreationFuncForSubMeshes, QQ, FQ)), this.computeWorldMatrix(!0);
      const qQ = this.sK().boundingBox;
      return this._submeshesOctree.update(qQ.minimumWorld, qQ.maximumWorld, this.lC), this._submeshesOctree
    })
  },
  40972: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => HQ,
      e: () => rQ,
      g: () => AQ,
      i: () => xQ,
      k: () => YQ,
      l: () => OQ,
      o: () => RQ,
      r: () => SQ,
      s: () => WQ,
      w: () => iQ
    });
    var LQ = wQ(36705),
      qQ = wQ(36696),
      oQ = wQ(36709),
      DQ = wQ(39729),
      kQ = wQ(39552),
      vQ = wQ(36720),
      mQ = wQ(39617);
    const uQ = {
      internalPickerForMesh: void 0
    };
    class HQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LQ.b;
        this.origin = QQ, this.direction = FQ, this.length = wQ, this.epsilon = qQ
      }
      clone() {
        return new HQ(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const LQ = HQ._TmpVector3[0].vQQ(QQ.x - wQ, QQ.y - wQ, QQ.z - wQ),
          qQ = HQ._TmpVector3[1].vQQ(FQ.x + wQ, FQ.y + wQ, FQ.z + wQ);
        let oQ, DQ, kQ, vQ, mQ = 0,
          uQ = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < LQ.x || this.origin.x > qQ.x) return !1
        } else if (oQ = 1 / this.direction.x, DQ = (LQ.x - this.origin.x) * oQ, kQ = (qQ.x - this.origin.x) * oQ, kQ === -1 / 0 && (kQ = 1 / 0), DQ > kQ && (vQ = DQ, DQ = kQ, kQ = vQ), mQ = Math.max(DQ, mQ), uQ = Math.min(kQ, uQ), mQ > uQ) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < LQ.y || this.origin.y > qQ.y) return !1
        } else if (oQ = 1 / this.direction.y, DQ = (LQ.y - this.origin.y) * oQ, kQ = (qQ.y - this.origin.y) * oQ, kQ === -1 / 0 && (kQ = 1 / 0), DQ > kQ && (vQ = DQ, DQ = kQ, kQ = vQ), mQ = Math.max(DQ, mQ), uQ = Math.min(kQ, uQ), mQ > uQ) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < LQ.z || this.origin.z > qQ.z) return !1
        } else if (oQ = 1 / this.direction.z, DQ = (LQ.z - this.origin.z) * oQ, kQ = (qQ.z - this.origin.z) * oQ, kQ === -1 / 0 && (kQ = 1 / 0), DQ > kQ && (vQ = DQ, DQ = kQ, kQ = vQ), mQ = Math.max(DQ, mQ), uQ = Math.min(kQ, uQ), mQ > uQ) return !1;
        return !0
      }
      intersectsBox(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(QQ.minimum, QQ.maximum, FQ)
      }
      intersectsSphere(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = QQ.center.x - this.origin.x,
          LQ = QQ.center.y - this.origin.y,
          qQ = QQ.center.z - this.origin.z,
          oQ = wQ * wQ + LQ * LQ + qQ * qQ,
          DQ = QQ.radius + FQ,
          kQ = DQ * DQ;
        if (oQ <= kQ) return !0;
        const vQ = wQ * this.direction.x + LQ * this.direction.y + qQ * this.direction.z;
        if (vQ < 0) return !1;
        return oQ - vQ * vQ <= kQ
      }
      intersectsTriangle(QQ, FQ, wQ) {
        const LQ = HQ._TmpVector3[0],
          oQ = HQ._TmpVector3[1],
          kQ = HQ._TmpVector3[2],
          vQ = HQ._TmpVector3[3],
          mQ = HQ._TmpVector3[4];
        FQ.subtractToRef(QQ, LQ), wQ.subtractToRef(QQ, oQ), qQ.p.CrossToRef(this.direction, oQ, kQ);
        const uQ = qQ.p.Dot(LQ, kQ);
        if (0 === uQ) return null;
        const bQ = 1 / uQ;
        this.origin.subtractToRef(QQ, vQ);
        const YQ = qQ.p.Dot(vQ, kQ) * bQ;
        if (YQ < -this.epsilon || YQ > 1 + this.epsilon) return null;
        qQ.p.CrossToRef(vQ, LQ, mQ);
        const xQ = qQ.p.Dot(this.direction, mQ) * bQ;
        if (xQ < -this.epsilon || YQ + xQ > 1 + this.epsilon) return null;
        const AQ = qQ.p.Dot(oQ, mQ) * bQ;
        return AQ > this.length || AQ < 0 ? null : new DQ.c(1 - YQ - xQ, YQ, AQ)
      }
      intersectsPlane(QQ) {
        let FQ;
        const wQ = qQ.p.Dot(QQ.normal, this.direction);
        if (Math.abs(wQ) < 9.99999997475243e-7) return null;
        {
          const LQ = qQ.p.Dot(QQ.normal, this.origin);
          return FQ = (-QQ.d - LQ) / wQ, FQ < 0 ? FQ < -9.99999997475243e-7 ? null : 0 : FQ
        }
      }
      intersectsAxis(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (QQ) {
          case "y": {
            const QQ = (this.origin.y - FQ) / this.direction.y;
            return QQ > 0 ? null : new qQ.p(this.origin.x + this.direction.x * -QQ, FQ, this.origin.z + this.direction.z * -QQ)
          }
          case "x": {
            const QQ = (this.origin.x - FQ) / this.direction.x;
            return QQ > 0 ? null : new qQ.p(FQ, this.origin.y + this.direction.y * -QQ, this.origin.z + this.direction.z * -QQ)
          }
          case "z": {
            const QQ = (this.origin.z - FQ) / this.direction.z;
            return QQ > 0 ? null : new qQ.p(this.origin.x + this.direction.x * -QQ, this.origin.y + this.direction.y * -QQ, FQ)
          }
          default:
            return null
        }
      }
      YqQ(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oQ = arguments.length > 4 ? arguments[4] : void 0,
          DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const kQ = qQ.k.Matrix[0];
        return QQ.getWorldMatrix().invertToRef(kQ), this._tmpRay ? HQ.TransformToRef(this, kQ, this._tmpRay) : this._tmpRay = HQ.Transform(this, kQ), QQ.intersects(this._tmpRay, FQ, wQ, LQ, oQ, DQ)
      }
      intersectsMeshes(QQ, FQ, wQ) {
        wQ ? wQ.length = 0 : wQ = [];
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          const qQ = this.YqQ(QQ[LQ], FQ);
          qQ.hit && wQ.push(qQ)
        }
        return wQ.sort(this._comparePickingInfo), wQ
      }
      _comparePickingInfo(QQ, FQ) {
        return QQ.distance < FQ.distance ? -1 : QQ.distance > FQ.distance ? 1 : 0
      }
      intersectionSegment(QQ, FQ, wQ) {
        const LQ = this.origin,
          oQ = qQ.k.Ox[0],
          DQ = qQ.k.Ox[1],
          kQ = qQ.k.Ox[2],
          vQ = qQ.k.Ox[3];
        FQ.subtractToRef(QQ, oQ), this.direction.scaleToRef(HQ._Rayl, kQ), LQ.addToRef(kQ, DQ), QQ.subtractToRef(LQ, vQ);
        const mQ = qQ.p.Dot(oQ, oQ),
          uQ = qQ.p.Dot(oQ, kQ),
          bQ = qQ.p.Dot(kQ, kQ),
          YQ = qQ.p.Dot(oQ, vQ),
          xQ = qQ.p.Dot(kQ, vQ),
          AQ = mQ * bQ - uQ * uQ;
        let tQ, eQ, MQ = AQ,
          GQ = AQ;
        AQ < HQ._Smallnum ? (tQ = 0, MQ = 1, eQ = xQ, GQ = bQ) : (tQ = uQ * xQ - bQ * YQ, eQ = mQ * xQ - uQ * YQ, tQ < 0 ? (tQ = 0, eQ = xQ, GQ = bQ) : tQ > MQ && (tQ = MQ, eQ = xQ + uQ, GQ = bQ)), eQ < 0 ? (eQ = 0, -YQ < 0 ? tQ = 0 : -YQ > mQ ? tQ = MQ : (tQ = -YQ, MQ = mQ)) : eQ > GQ && (eQ = GQ, -YQ + uQ < 0 ? tQ = 0 : -YQ + uQ > mQ ? tQ = MQ : (tQ = -YQ + uQ, MQ = mQ));
        const pQ = Math.abs(tQ) < HQ._Smallnum ? 0 : tQ / MQ,
          cQ = Math.abs(eQ) < HQ._Smallnum ? 0 : eQ / GQ,
          CQ = qQ.k.Ox[4];
        kQ.scaleToRef(cQ, CQ);
        const SQ = qQ.k.Ox[5];
        oQ.scaleToRef(pQ, SQ), SQ.addInPlace(vQ);
        const iQ = qQ.k.Ox[6];
        SQ.subtractToRef(CQ, iQ);
        return cQ > 0 && cQ <= this.length && iQ.lengthSquared() < wQ * wQ ? SQ.length() : -1
      }
      update(QQ, FQ, wQ, LQ, oQ, DQ, kQ) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          HQ._RayDistant || (HQ._RayDistant = HQ.Zero()), HQ._RayDistant.unprojectRayToRef(QQ, FQ, wQ, LQ, qQ.c.IdentityReadOnly, DQ, kQ);
          const vQ = qQ.k.Matrix[0];
          oQ.invertToRef(vQ), HQ.TransformToRef(HQ._RayDistant, vQ, this)
        } else this.unprojectRayToRef(QQ, FQ, wQ, LQ, oQ, DQ, kQ);
        return this
      }
      static Zero() {
        return new HQ(qQ.p.Zero(), qQ.p.Zero())
      }
      static CreateNew(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        return HQ.Zero().update(QQ, FQ, wQ, LQ, qQ, oQ, DQ)
      }
      static CreateNewFromTo(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.c.IdentityReadOnly;
        const LQ = new HQ(new qQ.p(0, 0, 0), new qQ.p(0, 0, 0));
        return HQ.CreateFromToToRef(QQ, FQ, LQ, wQ)
      }
      static CreateFromToToRef(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qQ.c.IdentityReadOnly;
        wQ.origin.Qs(QQ);
        const oQ = FQ.subtractToRef(QQ, wQ.direction),
          DQ = Math.sqrt(oQ.x * oQ.x + oQ.y * oQ.y + oQ.z * oQ.z);
        return wQ.length = DQ, wQ.direction.normalize(), HQ.TransformToRef(wQ, LQ, wQ)
      }
      static Transform(QQ, FQ) {
        const wQ = new HQ(new qQ.p(0, 0, 0), new qQ.p(0, 0, 0));
        return HQ.TransformToRef(QQ, FQ, wQ), wQ
      }
      static TransformToRef(QQ, FQ, wQ) {
        qQ.p.TransformCoordinatesToRef(QQ.origin, FQ, wQ.origin), qQ.p.TransformNormalToRef(QQ.direction, FQ, wQ.direction), wQ.length = QQ.length, wQ.epsilon = QQ.epsilon;
        const LQ = wQ.direction,
          oQ = LQ.length();
        if (0 !== oQ && 1 !== oQ) {
          const QQ = 1 / oQ;
          LQ.x *= QQ, LQ.y *= QQ, LQ.z *= QQ, wQ.length *= oQ
        }
        return wQ
      }
      unprojectRayToRef(QQ, FQ, wQ, LQ, oQ, DQ, kQ) {
        const mQ = qQ.k.Matrix[0];
        oQ.multiplyToRef(DQ, mQ), mQ.multiplyToRef(kQ, mQ), mQ.invert();
        const uQ = vQ.d.LastCreatedEngine,
          HQ = qQ.k.Ox[0];
        HQ.x = QQ / wQ * 2 - 1, HQ.y = -(FQ / LQ * 2 - 1), HQ.z = uQ?.SLQ ? 1 : uQ?.isNDCHalfZRange ? 0 : -1;
        const bQ = qQ.k.Ox[1].vQQ(HQ.x, HQ.y, 1 - 1e-8),
          YQ = qQ.k.Ox[2],
          xQ = qQ.k.Ox[3];
        qQ.p.TransformCoordinatesToRef(HQ, mQ, YQ), qQ.p.TransformCoordinatesToRef(bQ, mQ, xQ), this.origin.Qs(YQ), xQ.subtractToRef(YQ, this.direction), this.direction.normalize()
      }
    }

    function bQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const DQ = HQ.Zero();
      return YQ(QQ, FQ, wQ, LQ, DQ, qQ, oQ), DQ
    }

    function YQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      let kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const mQ = QQ.Wx();
      if (!DQ && !(DQ = QQ.activeCamera) && !(DQ = QQ.cameraToUseForPointers)) return QQ;
      const uQ = DQ.viewport,
        HQ = mQ.getRenderHeight(),
        {
          x: bQ,
          y: YQ,
          width: xQ,
          height: AQ
        } = uQ.toGlobal(mQ.getRenderWidth(), HQ),
        tQ = 1 / mQ.getHardwareScalingLevel();
      return FQ = FQ * tQ - bQ, wQ = wQ * tQ - (HQ - YQ - AQ), oQ.update(FQ, wQ, xQ, AQ, LQ || qQ.c.IdentityReadOnly, kQ ? qQ.c.IdentityReadOnly : DQ.getViewMatrix(), DQ.getProjectionMatrix(), vQ), QQ
    }

    function xQ(QQ, FQ, wQ, LQ) {
      const qQ = HQ.Zero();
      return AQ(QQ, FQ, wQ, qQ, LQ), qQ
    }

    function AQ(QQ, FQ, wQ, LQ, oQ) {
      if (!kQ.d) return QQ;
      const DQ = QQ.Wx();
      if (!oQ && !(oQ = QQ.activeCamera) && !(oQ = QQ.cameraToUseForPointers)) throw new Error("Active camera not set");
      const vQ = oQ.viewport,
        mQ = DQ.getRenderHeight(),
        {
          x: uQ,
          y: HQ,
          width: bQ,
          height: YQ
        } = vQ.toGlobal(DQ.getRenderWidth(), mQ),
        xQ = qQ.c.Identity(),
        AQ = 1 / DQ.getHardwareScalingLevel();
      return FQ = FQ * AQ - uQ, wQ = wQ * AQ - (mQ - HQ - YQ), LQ.update(FQ, wQ, bQ, YQ, xQ, xQ, oQ.getProjectionMatrix()), QQ
    }

    function tQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
      return eQ(QQ, wQ, LQ, FQ(LQ, wQ.enableDistantPicking), qQ, oQ, DQ, kQ)
    }

    function eQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
      const vQ = FQ.intersects(LQ, qQ, DQ, oQ, wQ, kQ);
      return vQ && vQ.hit ? !qQ && null != QQ && vQ.distance >= QQ.distance ? null : vQ : null
    }

    function MQ(QQ, FQ) {
      return "InstancedLinesMesh" === QQ || "LinesMesh" === QQ ? FQ.intersectionThreshold : 0
    }

    function GQ(QQ) {
      const FQ = QQ.getClassName();
      if ("GreasedLineMesh" === FQ) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const wQ = QQ.rawBoundingInfo;
      return {
        rawBoundingInfo: wQ,
        intersectionThreshold: wQ ? MQ(FQ, QQ) : 0
      }
    }

    function pQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ(wQ, FQ.enableDistantPicking);
      return oQ.intersectsSphere(LQ.BLQ, qQ) && oQ.intersectsBox(LQ.boundingBox, qQ) ? oQ : null
    }

    function cQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      let vQ = null;
      const mQ = !!(QQ.activeCameras && QQ.activeCameras.length > 1 && QQ.cameraToUseForPointers !== QQ.activeCamera),
        HQ = QQ.cameraToUseForPointers || QQ.activeCamera,
        bQ = uQ.internalPickerForMesh || tQ,
        YQ = bQ === tQ;
      for (let kQ = 0; kQ < QQ.meshes.length; kQ++) {
        const uQ = QQ.meshes[kQ];
        if (wQ) {
          if (!wQ(uQ, -1)) continue
        } else if (!uQ.isEnabled() || !uQ.isVisible || !uQ.aA) continue;
        const xQ = mQ && uQ.isWorldMatrixCameraDependent(),
          AQ = uQ.computeWorldMatrix(xQ, HQ);
        if (uQ.hasThinInstances && uQ.hFQ) {
          const QQ = bQ(vQ, FQ, uQ, AQ, !0, !0, DQ);
          if (QQ) {
            if (oQ) return QQ;
            const {
              rawBoundingInfo: kQ,
              intersectionThreshold: mQ
            } = GQ(uQ), HQ = uQ._thinInstanceDataStorage.matrixData;
            if (HQ) {
              const QQ = qQ.k.Matrix[0],
                xQ = qQ.k.Matrix[1],
                tQ = Math.min(uQ.o4, HQ.length >> 4);
              for (let MQ = 0; MQ < tQ; MQ++) {
                if (wQ && !wQ(uQ, MQ)) continue;
                qQ.c.FromArrayToRef(HQ, MQ << 4, QQ), QQ.multiplyToRef(AQ, xQ);
                const tQ = YQ && kQ ? pQ(FQ, uQ, xQ, kQ, mQ) : null;
                if (YQ && kQ && !tQ) continue;
                const GQ = YQ && tQ ? eQ(vQ, uQ, xQ, tQ, LQ, oQ, DQ, !0) : bQ(vQ, FQ, uQ, xQ, LQ, oQ, DQ, !0);
                if (GQ && (vQ = GQ, vQ.thinInstanceIndex = MQ, LQ)) return vQ
              }
            }
          }
        } else {
          const QQ = bQ(vQ, FQ, uQ, AQ, LQ, oQ, DQ);
          if (QQ && (vQ = QQ, LQ)) return vQ
        }
      }
      return vQ || new kQ.d
    }

    function CQ(QQ, FQ, wQ, LQ) {
      if (!kQ.d) return null;
      const oQ = [],
        DQ = !!(QQ.activeCameras && QQ.activeCameras.length > 1 && QQ.cameraToUseForPointers !== QQ.activeCamera),
        vQ = QQ.cameraToUseForPointers || QQ.activeCamera,
        mQ = uQ.internalPickerForMesh || tQ,
        HQ = mQ === tQ;
      for (let kQ = 0; kQ < QQ.meshes.length; kQ++) {
        const uQ = QQ.meshes[kQ];
        if (wQ) {
          if (!wQ(uQ, -1)) continue
        } else if (!uQ.isEnabled() || !uQ.isVisible || !uQ.aA) continue;
        const bQ = DQ && uQ.isWorldMatrixCameraDependent(),
          YQ = uQ.computeWorldMatrix(bQ, vQ);
        if (uQ.hasThinInstances && uQ.hFQ) {
          if (mQ(null, FQ, uQ, YQ, !0, !0, LQ)) {
            const {
              rawBoundingInfo: QQ,
              intersectionThreshold: DQ
            } = GQ(uQ), kQ = uQ._thinInstanceDataStorage.matrixData;
            if (kQ) {
              const vQ = qQ.k.Matrix[0],
                bQ = qQ.k.Matrix[1],
                xQ = Math.min(uQ.o4, kQ.length >> 4);
              for (let AQ = 0; AQ < xQ; AQ++) {
                if (wQ && !wQ(uQ, AQ)) continue;
                qQ.c.FromArrayToRef(kQ, AQ << 4, vQ), vQ.multiplyToRef(YQ, bQ);
                const xQ = HQ && QQ ? pQ(FQ, uQ, bQ, QQ, DQ) : null;
                if (HQ && QQ && !xQ) continue;
                const tQ = HQ && xQ ? eQ(null, uQ, bQ, xQ, !1, !1, LQ, !0) : mQ(null, FQ, uQ, bQ, !1, !1, LQ, !0);
                tQ && (tQ.thinInstanceIndex = AQ, oQ.push(tQ))
              }
            }
          }
        } else {
          const QQ = mQ(null, FQ, uQ, YQ, !1, !1, LQ);
          QQ && oQ.push(QQ)
        }
      }
      return oQ
    }

    function SQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      if (!kQ.d) return null;
      const vQ = cQ(QQ, (LQ => (QQ._tempPickingRay || (QQ._tempPickingRay = HQ.Zero()), YQ(QQ, FQ, wQ, LQ, QQ._tempPickingRay, DQ || null), QQ._tempPickingRay)), LQ, oQ, !0);
      return vQ && (vQ.ray = bQ(QQ, FQ, wQ, qQ.c.Identity(), DQ || null)), vQ
    }

    function iQ(QQ, FQ, wQ, LQ, oQ, DQ, kQ) {
      const vQ = cQ(QQ, ((LQ, qQ) => (QQ._tempPickingRay || (QQ._tempPickingRay = HQ.Zero()), YQ(QQ, FQ, wQ, LQ, QQ._tempPickingRay, DQ || null, !1, qQ), QQ._tempPickingRay)), LQ, oQ, !1, kQ);
      return vQ && (vQ.ray = bQ(QQ, FQ, wQ, qQ.c.Identity(), DQ || null)), vQ
    }

    function WQ(QQ, FQ, wQ, LQ, oQ) {
      const DQ = cQ(QQ, (wQ => (QQ._pickWithRayInverseMatrix || (QQ._pickWithRayInverseMatrix = qQ.c.Identity()), wQ.invertToRef(QQ._pickWithRayInverseMatrix), QQ._cachedRayForTransform || (QQ._cachedRayForTransform = HQ.Zero()), HQ.TransformToRef(FQ, QQ._pickWithRayInverseMatrix, QQ._cachedRayForTransform), QQ._cachedRayForTransform)), wQ, LQ, !1, oQ);
      return DQ && (DQ.ray = FQ), DQ
    }

    function RQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      return CQ(QQ, (LQ => bQ(QQ, FQ, wQ, LQ, qQ || null)), LQ, oQ)
    }

    function OQ(QQ, FQ, wQ, LQ) {
      return CQ(QQ, (wQ => (QQ._pickWithRayInverseMatrix || (QQ._pickWithRayInverseMatrix = qQ.c.Identity()), wQ.invertToRef(QQ._pickWithRayInverseMatrix), QQ._cachedRayForTransform || (QQ._cachedRayForTransform = HQ.Zero()), HQ.TransformToRef(FQ, QQ._pickWithRayInverseMatrix, QQ._cachedRayForTransform), QQ._cachedRayForTransform)), wQ, LQ)
    }

    function sQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        LQ = arguments.length > 3 ? arguments[3] : void 0,
        oQ = arguments.length > 4 ? arguments[4] : void 0;
      LQ || (LQ = QQ.getWorldMatrix()), FQ.length = wQ, oQ ? FQ.origin.Qs(oQ) : FQ.origin.Qs(QQ.position);
      const DQ = qQ.k.Ox[2];
      DQ.set(0, 0, QQ._scene.useRightHandedSystem ? -1 : 1);
      const kQ = qQ.k.Ox[3];
      return qQ.p.TransformNormalToRef(DQ, LQ, kQ), qQ.p.NormalizeToRef(kQ, FQ.direction), FQ
    }

    function rQ(QQ, FQ) {
      FQ && (FQ.prototype.getForwardRay = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        return sQ(this, new HQ(qQ.p.Zero(), qQ.p.Zero(), QQ), QQ, FQ, wQ)
      }, FQ.prototype.getForwardRayToRef = function(QQ) {
        return sQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), QQ && (mQ.c._IsPickingAvailable = !0, QQ.prototype.createPickingRay = function(QQ, FQ, wQ, LQ) {
        return bQ(this, QQ, FQ, wQ, LQ, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    HQ._TmpVector3 = (0, oQ.b)(6, qQ.p.Zero), HQ._RayDistant = HQ.Zero(), HQ._Smallnum = 1e-8, HQ._Rayl = 1e9
  },
  40970: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ.A
    });
    var LQ = wQ(39496),
      qQ = wQ(39642),
      oQ = wQ(40972);
    let DQ = !1;
    DQ || (DQ = !0, (0, oQ.e)(LQ.e, qQ.e), LQ.e.prototype.createPickingRayToRef = function(QQ, FQ, wQ, LQ, qQ) {
      let DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, oQ.k)(this, QQ, FQ, wQ, LQ, qQ, DQ, kQ)
    }, LQ.e.prototype.createPickingRayInCameraSpace = function(QQ, FQ, wQ) {
      return (0, oQ.i)(this, QQ, FQ, wQ)
    }, LQ.e.prototype.createPickingRayInCameraSpaceToRef = function(QQ, FQ, wQ, LQ) {
      return (0, oQ.g)(this, QQ, FQ, wQ, LQ)
    }, LQ.e.prototype.pickWithBoundingInfo = function(QQ, FQ, wQ, LQ, qQ) {
      return (0, oQ.r)(this, QQ, FQ, wQ, LQ, qQ)
    }, LQ.e.prototype.Vb = function(QQ, FQ, wQ, LQ, qQ, DQ) {
      let kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, oQ.w)(this, QQ, FQ, wQ, LQ, qQ, DQ, kQ)
    }, LQ.e.prototype.pickWithRay = function(QQ, FQ, wQ, LQ) {
      return (0, oQ.s)(this, QQ, FQ, wQ, LQ)
    }, LQ.e.prototype.multiPick = function(QQ, FQ, wQ, LQ, qQ) {
      return (0, oQ.o)(this, QQ, FQ, wQ, LQ, qQ)
    }, LQ.e.prototype.multiPickWithRay = function(QQ, FQ, wQ) {
      return (0, oQ.l)(this, QQ, FQ, wQ)
    })
  },
  40981: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(39690),
      kQ = wQ(40986),
      vQ = wQ(39650),
      mQ = wQ(36741);
    let uQ = (() => {
        var QQ;
        let FQ, wQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ = kQ.b,
          AQ = [],
          tQ = [],
          eQ = [],
          MQ = [],
          GQ = [],
          pQ = [],
          cQ = [],
          CQ = [],
          SQ = [],
          iQ = [],
          WQ = [],
          RQ = [],
          OQ = [];
        return QQ = class extends xQ {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(QQ) {
            this._shadowFrustumSize = QQ, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(QQ) {
            this._shadowOrthoScale = QQ, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(QQ) {
            this._orthoLeft = QQ
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(QQ) {
            this._orthoRight = QQ
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(QQ) {
            this._orthoTop = QQ
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(QQ) {
            this._orthoBottom = QQ
          }
          constructor(QQ, FQ, wQ, qQ) {
            super(QQ, wQ, qQ), this._shadowFrustumSize = ((0, LQ.l)(this, AQ), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, LQ.l)(this, tQ, !0), this.autoCalcShadowZBounds = ((0, LQ.l)(this, eQ), (0, LQ.l)(this, MQ, !1)), this._orthoLeft = ((0, LQ.l)(this, GQ), (0, LQ.l)(this, pQ, Number.MAX_VALUE)), this._orthoRight = ((0, LQ.l)(this, cQ), (0, LQ.l)(this, CQ, Number.MIN_VALUE)), this._orthoTop = ((0, LQ.l)(this, SQ), (0, LQ.l)(this, iQ, Number.MIN_VALUE)), this._orthoBottom = ((0, LQ.l)(this, WQ), (0, LQ.l)(this, RQ, Number.MAX_VALUE)), (0, LQ.l)(this, OQ), this.position = FQ.scale(-1), this.direction = FQ
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return DQ.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(QQ, FQ, wQ) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(QQ) : this._setDefaultAutoExtendShadowProjectionMatrix(QQ, FQ, wQ)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(QQ) {
            const FQ = this.iN().activeCamera;
            oQ.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : FQ ? FQ.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : FQ ? FQ.maxZ : 1e4, QQ, this.iN().Wx().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(QQ, FQ, wQ) {
            const LQ = this.iN().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const QQ = oQ.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let LQ = Number.MAX_VALUE,
                qQ = -Number.MAX_VALUE;
              for (let DQ = 0; DQ < wQ.length; DQ++) {
                const kQ = wQ[DQ];
                if (!kQ) continue;
                const vQ = kQ.sK().boundingBox;
                for (let wQ = 0; wQ < vQ.vectorsWorld.length; wQ++) oQ.p.TransformCoordinatesToRef(vQ.vectorsWorld[wQ], FQ, QQ), QQ.x < this._orthoLeft && (this._orthoLeft = QQ.x), QQ.y < this._orthoBottom && (this._orthoBottom = QQ.y), QQ.x > this._orthoRight && (this._orthoRight = QQ.x), QQ.y > this._orthoTop && (this._orthoTop = QQ.y), this.autoCalcShadowZBounds && (QQ.z < LQ && (LQ = QQ.z), QQ.z > qQ && (qQ = QQ.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = LQ, this._shadowMaxZ = qQ)
            }
            const qQ = this._orthoRight - this._orthoLeft,
              DQ = this._orthoTop - this._orthoBottom,
              kQ = void 0 !== this.shadowMinZ ? this.shadowMinZ : LQ?.minZ || 0,
              vQ = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : LQ?.maxZ || 1e4,
              mQ = this.iN().Wx().SLQ;
            oQ.c.OrthoOffCenterLHToRef(this._orthoLeft - qQ * this.shadowOrthoScale, this._orthoRight + qQ * this.shadowOrthoScale, this._orthoBottom - DQ * this.shadowOrthoScale, this._orthoTop + DQ * this.shadowOrthoScale, mQ ? vQ : kQ, mQ ? kQ : vQ, QQ, this.iN().Wx().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(QQ, FQ) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, FQ), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, FQ), this)
          }
          transferToNodeMaterialEffect(QQ, FQ) {
            return this.computeTransformedInformation() ? (QQ.setFloat3(FQ, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (QQ.setFloat3(FQ, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(QQ) {
            const FQ = this._scene.Wx();
            return !FQ.SLQ && FQ.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(QQ) {
            const FQ = this._scene.Wx();
            return FQ.SLQ && FQ.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(QQ, FQ) {
            QQ["DIRLIGHT" + FQ] = !0
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(xQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], uQ = [(0, qQ.I)("orthoLeft")], HQ = [(0, qQ.I)("orthoRight")], bQ = [(0, qQ.I)("orthoTop")], YQ = [(0, qQ.I)("orthoBottom")], (0, LQ.i)(QQ, null, FQ, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: QQ => "shadowFrustumSize" in QQ,
              get: QQ => QQ.shadowFrustumSize
            },
            metadata: oQ
          }, null, AQ), (0, LQ.i)(QQ, null, wQ, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "shadowOrthoScale" in QQ,
              get: QQ => QQ.shadowOrthoScale
            },
            metadata: oQ
          }, null, AQ), (0, LQ.i)(null, null, vQ, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: QQ => "autoUpdateExtends" in QQ,
              get: QQ => QQ.autoUpdateExtends,
              set: (QQ, FQ) => {
                QQ.autoUpdateExtends = FQ
              }
            },
            metadata: oQ
          }, tQ, eQ), (0, LQ.i)(null, null, mQ, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: QQ => "autoCalcShadowZBounds" in QQ,
              get: QQ => QQ.autoCalcShadowZBounds,
              set: (QQ, FQ) => {
                QQ.autoCalcShadowZBounds = FQ
              }
            },
            metadata: oQ
          }, MQ, GQ), (0, LQ.i)(null, null, uQ, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoLeft" in QQ,
              get: QQ => QQ._orthoLeft,
              set: (QQ, FQ) => {
                QQ._orthoLeft = FQ
              }
            },
            metadata: oQ
          }, pQ, cQ), (0, LQ.i)(null, null, HQ, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoRight" in QQ,
              get: QQ => QQ._orthoRight,
              set: (QQ, FQ) => {
                QQ._orthoRight = FQ
              }
            },
            metadata: oQ
          }, CQ, SQ), (0, LQ.i)(null, null, bQ, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoTop" in QQ,
              get: QQ => QQ._orthoTop,
              set: (QQ, FQ) => {
                QQ._orthoTop = FQ
              }
            },
            metadata: oQ
          }, iQ, WQ), (0, LQ.i)(null, null, YQ, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoBottom" in QQ,
              get: QQ => QQ._orthoBottom,
              set: (QQ, FQ) => {
                QQ._orthoBottom = FQ
              }
            },
            metadata: oQ
          }, RQ, OQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      HQ = !1;
    HQ || (HQ = !0, vQ.c.AddNodeConstructor("Light_Type_1", ((QQ, FQ) => () => new uQ(QQ, oQ.p.Zero(), FQ))), (0, mQ.e)("BABYLON.DirectionalLight", uQ))
  },
  40992: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => EF
    });
    var LQ = wQ(38236),
      qQ = wQ(36722),
      oQ = wQ(36696),
      DQ = wQ(39561),
      kQ = wQ(40998),
      vQ = wQ(36720),
      mQ = wQ(39708),
      uQ = wQ(36873),
      HQ = wQ(38244),
      bQ = wQ(38200),
      YQ = wQ(36729);
    class xQ {
      constructor() {
        this.direction1 = new oQ.p(0, 1, 0), this.direction2 = new oQ.p(0, 1, 0)
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = (0, YQ.RandomRange)(this.direction1.x, this.direction2.x),
          DQ = (0, YQ.RandomRange)(this.direction1.y, this.direction2.y),
          kQ = (0, YQ.RandomRange)(this.direction1.z, this.direction2.z);
        LQ ? FQ.vQQ(qQ, DQ, kQ) : oQ.p.TransformNormalFromFloatsToRef(qQ, DQ, kQ, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, LQ) {
        LQ ? FQ.vQQ(0, 0, 0) : oQ.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, QQ, FQ)
      }
      clone() {
        const QQ = new xQ;
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setVector3("direction1", this.direction1), QQ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("direction1", 3), QQ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.direction1 = this.direction1.RLQ(), QQ.direction2 = this.direction2.RLQ(), QQ
      }
      parse(QQ) {
        oQ.p.FromArrayToRef(QQ.direction1, 0, this.direction1), oQ.p.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
    class AQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = QQ, this.radiusRange = FQ, this.directionRandomizer = wQ
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = wQ.position.subtract(QQ.getTranslation()).normalize(),
          DQ = (0, YQ.RandomRange)(0, this.directionRandomizer),
          kQ = (0, YQ.RandomRange)(0, this.directionRandomizer),
          vQ = (0, YQ.RandomRange)(0, this.directionRandomizer);
        qQ.x += DQ, qQ.y += kQ, qQ.z += vQ, qQ.normalize(), LQ ? FQ.Qs(qQ) : oQ.p.TransformNormalFromFloatsToRef(qQ.x, qQ.y, qQ.z, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, LQ) {
        const qQ = this.radius - (0, YQ.RandomRange)(0, this.radius * this.radiusRange),
          DQ = (0, YQ.RandomRange)(0, 1),
          kQ = (0, YQ.RandomRange)(0, 2 * Math.PI),
          vQ = Math.acos(2 * DQ - 1),
          mQ = qQ * Math.cos(kQ) * Math.sin(vQ),
          uQ = qQ * Math.cos(vQ),
          HQ = qQ * Math.sin(kQ) * Math.sin(vQ);
        LQ ? FQ.vQQ(mQ, Math.abs(uQ), HQ) : oQ.p.TransformCoordinatesFromFloatsToRef(mQ, Math.abs(uQ), HQ, QQ, FQ)
      }
      clone() {
        const QQ = new AQ(this.radius, this.directionRandomizer);
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setFloat("radius", this.radius), QQ.setFloat("radiusRange", this.radiusRange), QQ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("radius", 1), QQ.addUniform("radiusRange", 1), QQ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.radius = this.radius, QQ.radiusRange = this.radiusRange, QQ.directionRandomizer = this.directionRandomizer, QQ
      }
      parse(QQ) {
        this.radius = QQ.radius, this.radiusRange = QQ.radiusRange, this.directionRandomizer = QQ.directionRandomizer
      }
    }
    class tQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = QQ, this.radiusRange = FQ, this.directionRandomizer = wQ
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = wQ.position.subtract(QQ.getTranslation()).normalize(),
          DQ = (0, YQ.RandomRange)(0, this.directionRandomizer),
          kQ = (0, YQ.RandomRange)(0, this.directionRandomizer),
          vQ = (0, YQ.RandomRange)(0, this.directionRandomizer);
        qQ.x += DQ, qQ.y += kQ, qQ.z += vQ, qQ.normalize(), LQ ? FQ.Qs(qQ) : oQ.p.TransformNormalFromFloatsToRef(qQ.x, qQ.y, qQ.z, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, LQ) {
        const qQ = this.radius - (0, YQ.RandomRange)(0, this.radius * this.radiusRange),
          DQ = (0, YQ.RandomRange)(0, 1),
          kQ = (0, YQ.RandomRange)(0, 2 * Math.PI),
          vQ = Math.acos(2 * DQ - 1),
          mQ = qQ * Math.cos(kQ) * Math.sin(vQ),
          uQ = qQ * Math.cos(vQ),
          HQ = qQ * Math.sin(kQ) * Math.sin(vQ);
        LQ ? FQ.vQQ(mQ, uQ, HQ) : oQ.p.TransformCoordinatesFromFloatsToRef(mQ, uQ, HQ, QQ, FQ)
      }
      clone() {
        const QQ = new tQ(this.radius, this.directionRandomizer);
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setFloat("radius", this.radius), QQ.setFloat("radiusRange", this.radiusRange), QQ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("radius", 1), QQ.addUniform("radiusRange", 1), QQ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.radius = this.radius, QQ.radiusRange = this.radiusRange, QQ.directionRandomizer = this.directionRandomizer, QQ
      }
      parse(QQ) {
        this.radius = QQ.radius, this.radiusRange = QQ.radiusRange, this.directionRandomizer = QQ.directionRandomizer
      }
    }
    class eQ extends tQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oQ.p(0, 1, 0),
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oQ.p(0, 1, 0);
        super(QQ), this.direction1 = FQ, this.direction2 = wQ
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = (0, YQ.RandomRange)(this.direction1.x, this.direction2.x),
          DQ = (0, YQ.RandomRange)(this.direction1.y, this.direction2.y),
          kQ = (0, YQ.RandomRange)(this.direction1.z, this.direction2.z);
        LQ ? FQ.vQQ(qQ, DQ, kQ) : oQ.p.TransformNormalFromFloatsToRef(qQ, DQ, kQ, QQ, FQ)
      }
      clone() {
        const QQ = new eQ(this.radius, this.direction1, this.direction2);
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setFloat("radius", this.radius), QQ.setFloat("radiusRange", this.radiusRange), QQ.setVector3("direction1", this.direction1), QQ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("radius", 1), QQ.addUniform("radiusRange", 1), QQ.addUniform("direction1", 3), QQ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const QQ = super.serialize();
        return QQ.direction1 = this.direction1.RLQ(), QQ.direction2 = this.direction2.RLQ(), QQ
      }
      parse(QQ) {
        super.parse(QQ), oQ.p.FromArrayToRef(QQ.direction1, 0, this.direction1), oQ.p.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
    var MQ = wQ(38192);
    class GQ {
      get radius() {
        return this._radius
      }
      set radius(QQ) {
        this._radius = QQ, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(QQ) {
        this._angle = QQ, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = wQ, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = FQ, this.radius = QQ
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = wQ.position.subtract(QQ.getTranslation()).normalize(),
          DQ = (0, YQ.RandomRange)(0, this.directionRandomizer),
          kQ = (0, YQ.RandomRange)(0, this.directionRandomizer),
          vQ = (0, YQ.RandomRange)(0, this.directionRandomizer);
        qQ.x += DQ, qQ.y += kQ, qQ.z += vQ, qQ.normalize(), LQ ? FQ.Qs(qQ) : oQ.p.TransformNormalFromFloatsToRef(qQ.x, qQ.y, qQ.z, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, LQ) {
        const qQ = (0, YQ.RandomRange)(0, 2 * Math.PI);
        let DQ;
        this.emitFromSpawnPointOnly ? DQ = 1e-4 : (DQ = (0, YQ.RandomRange)(0, this.heightRange), DQ = 1 - DQ * DQ);
        let kQ = this._radius - (0, YQ.RandomRange)(0, this._radius * this.radiusRange);
        kQ *= DQ;
        const vQ = kQ * Math.sin(qQ),
          mQ = kQ * Math.cos(qQ),
          uQ = DQ * this._height;
        if (LQ) return FQ.x = vQ, FQ.y = uQ, void(FQ.z = mQ);
        oQ.p.TransformCoordinatesFromFloatsToRef(vQ, uQ, mQ, QQ, FQ)
      }
      clone() {
        const QQ = new GQ(this._radius, this._angle, this.directionRandomizer);
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setFloat2("radius", this._radius, this.radiusRange), QQ.setFloat("coneAngle", this._angle), QQ.setFloat2("height", this._height, this.heightRange), QQ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("radius", 2), QQ.addUniform("coneAngle", 1), QQ.addUniform("height", 2), QQ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let QQ = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (QQ += "\n#define CONEEMITTERSPAWNPOINT"), QQ
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.radius = this._radius, QQ.angle = this._angle, QQ.directionRandomizer = this.directionRandomizer, QQ.radiusRange = this.radiusRange, QQ.heightRange = this.heightRange, QQ.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, QQ
      }
      parse(QQ) {
        this.radius = QQ.radius, this.angle = QQ.angle, this.directionRandomizer = QQ.directionRandomizer, this.radiusRange = void 0 !== QQ.radiusRange ? QQ.radiusRange : 1, this.heightRange = void 0 !== QQ.heightRange ? QQ.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== QQ.emitFromSpawnPointOnly && QQ.emitFromSpawnPointOnly
      }
    }
    class pQ extends GQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oQ.p(0, 1, 0),
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oQ.p(0, 1, 0);
        super(QQ, FQ), this.direction1 = wQ, this.direction2 = LQ
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = (0, YQ.RandomRange)(this.direction1.x, this.direction2.x),
          DQ = (0, YQ.RandomRange)(this.direction1.y, this.direction2.y),
          kQ = (0, YQ.RandomRange)(this.direction1.z, this.direction2.z);
        LQ ? FQ.vQQ(qQ, DQ, kQ) : oQ.p.TransformNormalFromFloatsToRef(qQ, DQ, kQ, QQ, FQ)
      }
      clone() {
        const QQ = new pQ(this.radius, this.angle, this.direction1, this.direction2);
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        super.applyToShader(QQ), QQ.setVector3("direction1", this.direction1), QQ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(QQ) {
        super.buildUniformLayout(QQ), QQ.addUniform("direction1", 3), QQ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const QQ = super.serialize();
        return QQ.direction1 = this.direction1.RLQ(), QQ.direction2 = this.direction2.RLQ(), QQ
      }
      parse(QQ) {
        super.parse(QQ), oQ.p.FromArrayToRef(QQ.direction1, 0, this.direction1), oQ.p.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
    class cQ {
      get mesh() {
        return this._mesh
      }
      set mesh(QQ) {
        this._mesh !== QQ && (this._mesh = QQ, QQ ? (this._indices = QQ.OLQ(), this._positions = QQ.getVerticesData(DQ.h.PositionKind), this._normals = QQ.getVerticesData(DQ.h.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = oQ.p.Zero(), this._mesh = null, this.direction1 = new oQ.p(0, 1, 0), this.direction2 = new oQ.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = QQ
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        if (this.useMeshNormalsForDirection && this._normals) return void oQ.p.TransformNormalToRef(this._storedNormal, QQ, FQ);
        const qQ = (0, YQ.RandomRange)(this.direction1.x, this.direction2.x),
          DQ = (0, YQ.RandomRange)(this.direction1.y, this.direction2.y),
          kQ = (0, YQ.RandomRange)(this.direction1.z, this.direction2.z);
        LQ ? FQ.vQQ(qQ, DQ, kQ) : oQ.p.TransformNormalFromFloatsToRef(qQ, DQ, kQ, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, LQ) {
        if (!this._indices || !this._positions) return;
        const qQ = 3 * (Math.random() * (this._indices.length / 3) | 0),
          DQ = Math.random(),
          kQ = Math.random() * (1 - DQ),
          vQ = 1 - DQ - kQ,
          mQ = this._indices[qQ],
          uQ = this._indices[qQ + 1],
          HQ = this._indices[qQ + 2],
          bQ = oQ.k.Ox[0],
          YQ = oQ.k.Ox[1],
          xQ = oQ.k.Ox[2],
          AQ = oQ.k.Ox[3];
        oQ.p.FromArrayToRef(this._positions, 3 * mQ, bQ), oQ.p.FromArrayToRef(this._positions, 3 * uQ, YQ), oQ.p.FromArrayToRef(this._positions, 3 * HQ, xQ), AQ.x = DQ * bQ.x + kQ * YQ.x + vQ * xQ.x, AQ.y = DQ * bQ.y + kQ * YQ.y + vQ * xQ.y, AQ.z = DQ * bQ.z + kQ * YQ.z + vQ * xQ.z, LQ ? FQ.vQQ(AQ.x, AQ.y, AQ.z) : oQ.p.TransformCoordinatesFromFloatsToRef(AQ.x, AQ.y, AQ.z, QQ, FQ), this.useMeshNormalsForDirection && this._normals && (oQ.p.FromArrayToRef(this._normals, 3 * mQ, bQ), oQ.p.FromArrayToRef(this._normals, 3 * uQ, YQ), oQ.p.FromArrayToRef(this._normals, 3 * HQ, xQ), this._storedNormal.x = DQ * bQ.x + kQ * YQ.x + vQ * xQ.x, this._storedNormal.y = DQ * bQ.y + kQ * YQ.y + vQ * xQ.y, this._storedNormal.z = DQ * bQ.z + kQ * YQ.z + vQ * xQ.z)
      }
      clone() {
        const QQ = new cQ(this.mesh);
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setVector3("direction1", this.direction1), QQ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("direction1", 3), QQ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.direction1 = this.direction1.RLQ(), QQ.direction2 = this.direction2.RLQ(), QQ.meshId = this.mesh?.id, QQ.useMeshNormalsForDirection = this.useMeshNormalsForDirection, QQ
      }
      parse(QQ, FQ) {
        oQ.p.FromArrayToRef(QQ.direction1, 0, this.direction1), oQ.p.FromArrayToRef(QQ.direction2, 0, this.direction2), QQ.meshId && FQ && (this.mesh = FQ.getLastMeshById(QQ.meshId)), this.useMeshNormalsForDirection = QQ.useMeshNormalsForDirection
      }
    }
    class CQ {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(QQ) {
        this._targetStopDuration !== QQ && (this._targetStopDuration = QQ)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(QQ) {
        this._noiseTexture !== QQ && (this._noiseTexture = QQ, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(QQ) {
        this._attractors.push(QQ)
      }
      removeAttractor(QQ) {
        const FQ = this._attractors.indexOf(QQ); - 1 !== FQ && this._attractors.splice(FQ, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(QQ) {
        this._animationSheetEnabled !== QQ && (this._animationSheetEnabled = QQ)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(QQ) {
        this._isAnimationSheetEnabled != QQ && (this._isAnimationSheetEnabled = QQ, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(QQ) {
        this._useLogarithmicDepth = QQ && this.iN().Wx().getCaps().fragmentDepthSupported
      }
      iN() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(QQ) {
        switch (QQ) {
          case CQ.BLENDMODE_MULTIPLYADD:
            return;
          case CQ.BLENDMODE_ADD:
            QQ = 1;
            break;
          case CQ.BLENDMODE_ONEONE:
            QQ = 6;
            break;
          case CQ.BLENDMODE_STANDARD:
            QQ = 2;
            break;
          case CQ.BLENDMODE_MULTIPLY:
            QQ = 4;
            break;
          case CQ.BLENDMODE_SUBTRACT:
            QQ = 3
        }
        this._engine.setAlphaMode(QQ)
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
      addEmitRateGradient(QQ, FQ, wQ) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, QQ, FQ, wQ), this
      }
      removeEmitRateGradient(QQ) {
        return this._removeFactorGradient(this._emitRateGradients, QQ), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : oQ.p.Zero()
      }
      set direction1(QQ) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = QQ)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : oQ.p.Zero()
      }
      set direction2(QQ) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = QQ)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : oQ.p.Zero()
      }
      set minEmitBox(QQ) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = QQ)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : oQ.p.Zero()
      }
      set maxEmitBox(QQ) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = QQ)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(QQ) {
        this._billboardMode !== QQ && (this._billboardMode = QQ, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(QQ) {
        this._isBillboardBased !== QQ && (this._isBillboardBased = QQ, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(QQ) {
        this._attachImageProcessingConfiguration(QQ)
      }
      _attachImageProcessingConfiguration(QQ) {
        QQ !== this._imageProcessingConfiguration && (!QQ && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = QQ)
      }
      _reset() {}
      _addFactorGradient(QQ, FQ, wQ, qQ) {
        const oQ = new LQ.j(FQ, wQ, qQ);
        QQ.push(oQ), QQ.sort(((QQ, FQ) => QQ.gradient < FQ.gradient ? -1 : QQ.gradient > FQ.gradient ? 1 : 0))
      }
      _removeFactorGradient(QQ, FQ) {
        if (!QQ) return;
        let wQ = 0;
        for (const LQ of QQ) {
          if (LQ.gradient === FQ) {
            QQ.splice(wQ, 1);
            break
          }
          wQ++
        }
      }
      _removeGradientAndTexture(QQ, FQ, wQ) {
        if (!FQ) return this;
        let LQ = 0;
        for (const qQ of FQ) {
          if (qQ.gradient === QQ) {
            FQ.splice(LQ, 1);
            break
          }
          LQ++
        }
        return wQ && wQ.dispose(), this
      }
      constructor(QQ) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = oQ.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new oQ.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = CQ.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new oQ.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new oQ.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = oQ.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new uQ.e(1, 1, 1, 1), this.color2 = new uQ.e(1, 1, 1, 1), this.colorDead = new uQ.e(0, 0, 0, 1), this.textureMask = new uQ.e(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new mQ.b, this.id = QQ, this.name = QQ
      }
      createPointEmitter(QQ, FQ) {
        const wQ = function(QQ, FQ) {
          const wQ = new xQ;
          return wQ.direction1 = QQ, wQ.direction2 = FQ, wQ
        }(QQ, FQ);
        return this.particleEmitterType = wQ, wQ
      }
      createHemisphericEmitter() {
        const QQ = function() {
          return new AQ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = QQ, QQ
      }
      createSphereEmitter() {
        const QQ = function() {
          return new tQ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = QQ, QQ
      }
      createDirectedSphereEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oQ.p(0, 1, 0),
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oQ.p(0, 1, 0);
          return new eQ(QQ, FQ, wQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oQ.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oQ.p(0, 1, 0));
        return this.particleEmitterType = QQ, QQ
      }
      createCylinderEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new MQ.e(QQ, FQ, wQ, LQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = QQ, QQ
      }
      createDirectedCylinderEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oQ.p(0, 1, 0),
            qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new oQ.p(0, 1, 0);
          return new MQ.d(QQ, FQ, wQ, LQ, qQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oQ.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new oQ.p(0, 1, 0));
        return this.particleEmitterType = QQ, QQ
      }
      createConeEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new GQ(QQ, FQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = QQ, QQ
      }
      createDirectedConeEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oQ.p(0, 1, 0),
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oQ.p(0, 1, 0);
          return new pQ(QQ, FQ, wQ, LQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oQ.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oQ.p(0, 1, 0));
        return this.particleEmitterType = QQ, QQ
      }
      createBoxEmitter(QQ, FQ, wQ, LQ) {
        const qQ = new HQ.d;
        return this.particleEmitterType = qQ, this.direction1 = QQ, this.direction2 = FQ, this.minEmitBox = wQ, this.maxEmitBox = LQ, qQ
      }
      createMeshEmitter() {
        const QQ = function() {
          return new cQ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = QQ, QQ
      }
    }
    CQ.BLENDMODE_ONEONE = 0, CQ.BLENDMODE_STANDARD = 1, CQ.BLENDMODE_ADD = 2, CQ.BLENDMODE_MULTIPLY = 3, CQ.BLENDMODE_MULTIPLYADD = 4, CQ.BLENDMODE_SUBTRACT = -1;
    class SQ {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new uQ.e(0, 0, 0, 0), this.currentColor2 = new uQ.e(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = oQ.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class iQ {
      constructor(QQ) {
        this.particleSystem = QQ, this.position = oQ.p.Zero(), this.direction = oQ.p.Zero(), this.color = new uQ.e(0, 0, 0, 0), this.colorStep = new uQ.e(0, 0, 0, 0), this.initialColor = new uQ.e(0, 0, 0, 0), this.colorDead = new uQ.e(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new oQ.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new SQ, this.id = iQ._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let QQ = this.age,
          FQ = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === FQ ? (FQ = 1, QQ = this._properties.randomCellOffset) : QQ += this._properties.randomCellOffset);
        const wQ = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let LQ;
        LQ = this._properties.initialSpriteCellLoop ? (0, YQ.Clamp)(QQ * FQ % this.lifeTime / this.lifeTime) : (0, YQ.Clamp)(QQ * FQ / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + LQ * wQ | 0
      }
      _inheritParticleInfoToSubEmitter(QQ) {
        if (QQ.particleSystem.emitter.position) {
          const FQ = QQ.particleSystem.emitter;
          if (FQ.position.Qs(this.position), QQ.inheritDirection) {
            const QQ = oQ.k.Ox[0];
            this.direction.normalizeToRef(QQ), FQ.setDirection(QQ, 0, Math.PI / 2)
          }
        } else {
          QQ.particleSystem.emitter.Qs(this.position)
        }
        this.direction.scaleToRef(QQ.inheritedVelocityAmount / 2, oQ.k.Ox[0]), QQ.particleSystem._inheritedVelocityOffset.Qs(oQ.k.Ox[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const QQ of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(QQ)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = iQ._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(QQ) {
        QQ.position.Qs(this.position), this._properties.initialDirection ? QQ._properties.initialDirection ? QQ._properties.initialDirection.Qs(this._properties.initialDirection) : QQ._properties.initialDirection = this._properties.initialDirection.clone() : QQ._properties.initialDirection = null, QQ.direction.Qs(this.direction), this._properties.localPosition && (QQ._properties.localPosition ? QQ._properties.localPosition.Qs(this._properties.localPosition) : QQ._properties.localPosition = this._properties.localPosition.clone()), QQ.color.Qs(this.color), QQ.colorStep.Qs(this.colorStep), QQ.initialColor.Qs(this.initialColor), QQ.colorDead.Qs(this.colorDead), QQ.lifeTime = this.lifeTime, QQ.age = this.age, QQ._properties.randomCellOffset = this._properties.randomCellOffset, QQ.size = this.size, QQ.scale.Qs(this.scale), QQ.angle = this.angle, QQ.angularSpeed = this.angularSpeed, QQ.particleSystem = this.particleSystem, QQ.cellIndex = this.cellIndex, QQ.id = this.id, QQ._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (QQ._properties.currentColorGradient = this._properties.currentColorGradient, QQ._properties.currentColor1.Qs(this._properties.currentColor1), QQ._properties.currentColor2.Qs(this._properties.currentColor2)), this._properties.currentSizeGradient && (QQ._properties.currentSizeGradient = this._properties.currentSizeGradient, QQ._properties.currentSize1 = this._properties.currentSize1, QQ._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (QQ._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, QQ._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, QQ._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (QQ._properties.currentVelocityGradient = this._properties.currentVelocityGradient, QQ._properties.currentVelocity1 = this._properties.currentVelocity1, QQ._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (QQ._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, QQ._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, QQ._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (QQ._properties.currentDragGradient = this._properties.currentDragGradient, QQ._properties.currentDrag1 = this._properties.currentDrag1, QQ._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (QQ._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, QQ._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, QQ._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (QQ.remapData && this.remapData ? QQ.remapData.Qs(this.remapData) : QQ.remapData = new oQ.t(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (QQ._properties.randomNoiseCoordinates1 && QQ._properties.randomNoiseCoordinates2 ? (QQ._properties.randomNoiseCoordinates1.Qs(this._properties.randomNoiseCoordinates1), QQ._properties.randomNoiseCoordinates2.Qs(this._properties.randomNoiseCoordinates2)) : (QQ._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), QQ._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), QQ.metadata = this.metadata
      }
    }
    iQ._Count = 0;
    var WQ = wQ(40506);
    class RQ {
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
      constructor(QQ, FQ, wQ, LQ) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = FQ, this.K8 = QQ, this._scene = wQ, this._host = LQ, this._activeTargets = [], FQ._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            xQ: this._getCorrectLoopMode()
          }, this._animation.dataType === WQ.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = oQ.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const QQ = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, QQ)
        }
        if (this.K8 instanceof Array) {
          let QQ = 0;
          for (const FQ of this.K8) this._preparePath(FQ, QQ), this._getOriginalValues(QQ), QQ++;
          this._targetIsArray = !0
        } else this._preparePath(this.K8), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const qQ = FQ.getEvents();
        if (qQ && qQ.length > 0)
          for (const oQ of qQ) this._events.push(oQ._clone());
        this._enableBlending = QQ && QQ.animationPropertiesOverride ? QQ.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = this._animation.targetPropertyPath;
        if (wQ.length > 1) {
          let LQ = QQ;
          for (let QQ = 0; QQ < wQ.length - 1; QQ++) {
            const FQ = wQ[QQ];
            if (LQ = LQ[FQ], void 0 === LQ) throw new Error(`Invalid property (${FQ}) in property path (${wQ.join(".")})`)
          }
          this._targetPath = wQ[wQ.length - 1], this._activeTargets[FQ] = LQ
        } else this._targetPath = wQ[0], this._activeTargets[FQ] = QQ;
        if (void 0 === this._activeTargets[FQ][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${wQ.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.K8 instanceof Array) {
            let QQ = 0;
            for (const FQ of this.K8) void 0 !== this._originalValue[QQ] && this._setValue(FQ, this._activeTargets[QQ], this._originalValue[QQ], -1, QQ), QQ++
          } else void 0 !== this._originalValue[0] && this._setValue(this.K8, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let QQ = 0; QQ < this._events.length; QQ++) this._events[QQ].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const QQ = this._animation.runtimeAnimations.indexOf(this);
        QQ > -1 && this._animation.runtimeAnimations.splice(QQ, 1)
      }
      setValue(QQ, FQ) {
        if (this._targetIsArray)
          for (let wQ = 0; wQ < this.K8.length; wQ++) {
            const LQ = this.K8[wQ];
            this._setValue(LQ, this._activeTargets[wQ], QQ, FQ, wQ)
          } else this._setValue(this.K8, this._directTarget, QQ, FQ, 0)
      }
      _getOriginalValues() {
        let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const wQ = this._activeTargets[FQ];
        if (WQ.d.InheritOriginalValueFromActiveAnimations) {
          const QQ = this._scene._activeAnimatables;
          for (let LQ = 0; LQ < QQ.length; LQ++) {
            const qQ = QQ[LQ]._runtimeAnimations;
            for (let QQ = 0; QQ < qQ.length; QQ++) {
              const LQ = qQ[QQ];
              if (LQ !== this && LQ._targetPath === this._targetPath)
                for (let QQ = 0; QQ < LQ._activeTargets.length; QQ++)
                  if (LQ._activeTargets[QQ] === wQ && void 0 !== LQ._originalValue[QQ]) return void(LQ._originalValue[QQ] && LQ._originalValue[QQ].clone ? this._originalValue[FQ] = LQ._originalValue[QQ].clone() : this._originalValue[FQ] = LQ._originalValue[QQ])
            }
          }
        }
        QQ = wQ.getLocalMatrix && "_matrix" === this._targetPath ? wQ.getLocalMatrix() : wQ[this._targetPath], QQ && QQ.clone ? this._originalValue[FQ] = QQ.clone() : this._originalValue[FQ] = QQ
      }
      _registerTargetForLateAnimationBinding(QQ, FQ) {
        const wQ = QQ.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(wQ), wQ._lateAnimationHolders || (wQ._lateAnimationHolders = {}), wQ._lateAnimationHolders[QQ.targetPath] || (wQ._lateAnimationHolders[QQ.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: FQ
        }), QQ.isAdditive ? (wQ._lateAnimationHolders[QQ.targetPath].additiveAnimations.push(QQ), wQ._lateAnimationHolders[QQ.targetPath].totalAdditiveWeight += QQ.weight) : (wQ._lateAnimationHolders[QQ.targetPath].animations.push(QQ), wQ._lateAnimationHolders[QQ.targetPath].totalWeight += QQ.weight)
      }
      _setValue(QQ, FQ, wQ, LQ, qQ) {
        const DQ = this._scene._animationWrites,
          kQ = this._scene._animationWriteCount++;
        let vQ = DQ[kQ];
        if (vQ || (vQ = DQ[kQ] = {
            runtimeAnimation: this,
            target: QQ,
            weight: LQ,
            additive: !1,
            blendingFactor: 1,
            Ft: !1
          }), vQ.runtimeAnimation = this, vQ.target = QQ, vQ.weight = LQ, vQ.additive = this.isAdditive, vQ.Ft = !1, this._currentActiveTarget = FQ, this._weight = LQ, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const QQ = FQ[this._targetPath];
            QQ.clone ? this._originalBlendValue = QQ.clone() : this._originalBlendValue = QQ
          }
          this._originalBlendValue.m ? WQ.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? oQ.c.DecomposeLerpToRef(this._originalBlendValue, wQ, this._blendingFactor, this._currentValue) : this._currentValue = oQ.c.DecomposeLerp(this._originalBlendValue, wQ, this._blendingFactor) : this._currentValue ? oQ.c.LerpToRef(this._originalBlendValue, wQ, this._blendingFactor, this._currentValue) : this._currentValue = oQ.c.Lerp(this._originalBlendValue, wQ, this._blendingFactor) : this._currentValue = WQ.d._UniversalLerp(this._originalBlendValue, wQ, this._blendingFactor);
          const LQ = QQ && QQ.animationPropertiesOverride ? QQ.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          vQ.blendingFactor = this._blendingFactor, this._blendingFactor += LQ
        } else vQ.blendingFactor = 1, this._currentValue ? this._currentValue.Qs ? this._currentValue.Qs(wQ) : this._currentValue = wQ : this._currentValue = wQ?.clone ? wQ.clone() : wQ; - 1 !== LQ ? this._registerTargetForLateAnimationBinding(this, this._originalValue[qQ]) : this._animationState.xQ === WQ.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[qQ], FQ[this._targetPath]) : FQ[this._targetPath] = this._originalValue[qQ] + this._currentValue : FQ[this._targetPath] = this._currentValue, QQ.dFQ && QQ.dFQ(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.K8 && this.K8.animationPropertiesOverride) {
          return "MorphTarget" === this.K8.getClassName?.() && null == this.K8._animationPropertiesOverride ? this._animation.xQ : this.K8.animationPropertiesOverride.xQ
        }
        return this._animation.xQ
      }
      goToFrame(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const wQ = this._animation.getKeys();
        QQ < wQ[0].frame ? QQ = wQ[0].frame : QQ > wQ[wQ.length - 1].frame && (QQ = wQ[wQ.length - 1].frame);
        const LQ = this._events;
        if (LQ.length)
          for (let oQ = 0; oQ < LQ.length; oQ++) LQ[oQ].onlyOnce || (LQ[oQ].isDone = LQ[oQ].frame < QQ);
        this._currentFrame = QQ;
        const qQ = this._animation._interpolate(QQ, this._animationState);
        this.setValue(qQ, FQ)
      }
      _prepareForSpeedRatioChange(QQ) {
        const FQ = this._previousElapsedTime * (this._animation.framePerSecond * QQ) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - FQ
      }
      animate(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const DQ = this._animation,
          kQ = DQ.targetPropertyPath;
        if (!kQ || kQ.length < 1) return this._stopped = !0, !1;
        let vQ, mQ = !0;
        const uQ = this._events;
        let HQ;
        if (this._coreRuntimeAnimation) HQ = wQ - FQ, vQ = this._coreRuntimeAnimation.currentFrame, this._currentFrame = vQ, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let oQ;
          (FQ < this._minFrame || FQ > this._maxFrame) && (FQ = this._minFrame), (wQ < this._minFrame || wQ > this._maxFrame) && (wQ = this._maxFrame), HQ = wQ - FQ;
          let kQ = QQ * (DQ.framePerSecond * qQ) / 1e3 + this._absoluteFrameOffset,
            bQ = 0,
            YQ = !1;
          const xQ = LQ && this._animationState.xQ === WQ.d.ANIMATIONLOOPMODE_YOYO;
          if (xQ) {
            const QQ = (kQ - FQ) / HQ,
              wQ = Math.sin(QQ * Math.PI);
            kQ = Math.abs(wQ) * HQ + FQ;
            const LQ = wQ >= 0 ? 1 : -1;
            this._yoyoDirection !== LQ && (YQ = !0), this._yoyoDirection = LQ
          }
          if (this._previousElapsedTime = QQ, this._previousAbsoluteFrame = kQ, !LQ && wQ >= FQ && (kQ >= HQ && qQ > 0 || kQ <= 0 && qQ < 0)) mQ = !1, bQ = DQ.evaluate(wQ);
          else if (!LQ && FQ >= wQ && (kQ <= HQ && qQ < 0 || kQ >= 0 && qQ > 0)) mQ = !1, bQ = DQ.evaluate(FQ);
          else if (this._animationState.xQ !== WQ.d.ANIMATIONLOOPMODE_CYCLE) {
            const QQ = wQ.toString() + FQ.toString();
            if (!this._offsetsCache[QQ]) {
              this._animationState.repeatCount = 0, this._animationState.xQ = WQ.d.ANIMATIONLOOPMODE_CYCLE;
              const LQ = DQ._interpolate(FQ, this._animationState),
                qQ = DQ._interpolate(wQ, this._animationState);
              switch (this._animationState.xQ = this._getCorrectLoopMode(), DQ.dataType) {
                case WQ.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[QQ] = qQ - LQ;
                  break;
                case WQ.d.ANIMATIONTYPE_QUATERNION:
                case WQ.d.ANIMATIONTYPE_VECTOR3:
                case WQ.d.ANIMATIONTYPE_VECTOR2:
                case WQ.d.ANIMATIONTYPE_SIZE:
                case WQ.d.ANIMATIONTYPE_COLOR3:
                case WQ.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[QQ] = qQ.subtract(LQ)
              }
              this._highLimitsCache[QQ] = qQ
            }
            bQ = this._highLimitsCache[QQ], oQ = this._offsetsCache[QQ]
          }
          if (void 0 === oQ) switch (DQ.dataType) {
            case WQ.d.ANIMATIONTYPE_FLOAT:
              oQ = 0;
              break;
            case WQ.d.ANIMATIONTYPE_QUATERNION:
              oQ = WQ.q;
              break;
            case WQ.d.ANIMATIONTYPE_VECTOR3:
              oQ = WQ.A;
              break;
            case WQ.d.ANIMATIONTYPE_VECTOR2:
              oQ = WQ.w;
              break;
            case WQ.d.ANIMATIONTYPE_SIZE:
              oQ = WQ.u;
              break;
            case WQ.d.ANIMATIONTYPE_COLOR3:
              oQ = WQ.l;
              break;
            case WQ.d.ANIMATIONTYPE_COLOR4:
              oQ = WQ.p
          }
          const AQ = this._host ? this._host.syncRoot : null;
          let tQ, eQ = this._playbackFrames,
            MQ = !1;
          if (AQ) {
            const QQ = AQ.toFrame - AQ.fromFrame,
              wQ = AQ.masterFrame,
              LQ = (wQ - AQ.fromFrame) / QQ;
            vQ = FQ + HQ * LQ;
            const qQ = AQ.getAnimations()[0];
            if (qQ && 0 !== QQ) {
              const QQ = HQ * LQ,
                FQ = qQ._playbackTo - qQ._playbackFrom;
              if (0 !== FQ && qQ._playbackFrom <= AQ.fromFrame && qQ._playbackTo >= AQ.toFrame) {
                eQ = HQ * Math.round((qQ._playbackFrames - (qQ._currentFrame - qQ._playbackFrom)) / FQ) + QQ
              } else MQ = (wQ - this._playbackSyncMasterFrame) * (qQ._playbackFrames - this._playbackSyncMasterPlayed) < 0, eQ = QQ;
              MQ = MQ || qQ._playbackJumped, this._playbackSyncMasterPlayed = qQ._playbackFrames, this._playbackSyncMasterFrame = wQ
            }
          } else vQ = kQ > 0 && FQ > wQ || kQ < 0 && FQ < wQ ? mQ && 0 !== HQ ? wQ + kQ % HQ : FQ : mQ && 0 !== HQ ? FQ + kQ % HQ : wQ;
          if (!xQ && (qQ > 0 && this.currentFrame > vQ || qQ < 0 && this.currentFrame < vQ) || xQ && YQ) {
            this._onLoop();
            for (let QQ = 0; QQ < uQ.length; QQ++) uQ[QQ].onlyOnce || (uQ[QQ].isDone = !1);
            this._animationState.key = qQ > 0 ? 0 : DQ.getKeys().length - 1
          }
          if (this._currentFrame = vQ, this._animationState.repeatCount = 0 === HQ ? 0 : kQ / HQ | 0, this._animationState.highLimitValue = bQ, this._animationState.offsetValue = oQ, this._playbackFrom = FQ, this._playbackTo = wQ, this._playbackJumped = MQ, this._playbackSyncRoot = AQ, AQ) tQ = eQ;
          else if (mQ) tQ = xQ ? vQ === FQ && kQ === wQ ? HQ : vQ - FQ : kQ;
          else {
            const QQ = 0 !== HQ ? Math.floor(this._playbackFrames / HQ) : 0;
            tQ = (vQ === wQ ? QQ + 1 : QQ) * HQ
          }
          this._playbackFrames = tQ, this._playbackProgress = this._animationState.xQ === WQ.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? HQ : tQ
        }
        const bQ = DQ._interpolate(vQ, this._animationState);
        if (this.setValue(bQ, oQ), uQ.length)
          for (let YQ = 0; YQ < uQ.length; YQ++)
            if (HQ >= 0 && vQ >= uQ[YQ].frame && uQ[YQ].frame >= FQ || HQ < 0 && vQ <= uQ[YQ].frame && uQ[YQ].frame <= FQ) {
              const QQ = uQ[YQ];
              QQ.isDone || (QQ.onlyOnce && (uQ.splice(YQ, 1), YQ--), QQ.isDone = !0, QQ.action(vQ))
            } return mQ || (this._stopped = !0), mQ
      }
    }
    var OQ = wQ(39303);
    class sQ {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(QQ) {
        this._weight = -1 !== QQ ? Math.min(Math.max(QQ, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(QQ) {
        for (let FQ = 0; FQ < this._runtimeAnimations.length; FQ++) {
          this._runtimeAnimations[FQ]._prepareForSpeedRatioChange(QQ)
        }
        this._speedRatio = QQ, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          kQ = arguments.length > 6 ? arguments[6] : void 0,
          vQ = arguments.length > 7 ? arguments[7] : void 0,
          mQ = arguments.length > 8 ? arguments[8] : void 0,
          uQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          HQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = FQ, this.fromFrame = wQ, this.toFrame = LQ, this.loopAnimation = oQ, this.onAnimationEnd = kQ, this.onAnimationLoop = mQ, this.isAdditive = uQ, this.playOrder = HQ, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.WC = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new qQ.e, this.onAnimationLoopObservable = new qQ.e, this._scene = QQ, vQ && this.appendAnimations(FQ, vQ), this._speedRatio = DQ, QQ._activeAnimatables.push(this)
      }
      syncWith(QQ) {
        if (this._syncRoot = QQ, QQ) {
          const QQ = this._scene._activeAnimatables.indexOf(this);
          QQ > -1 && (this._scene._activeAnimatables.splice(QQ, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(QQ, FQ) {
        for (let wQ = 0; wQ < FQ.length; wQ++) {
          const LQ = FQ[wQ],
            qQ = new RQ(QQ, LQ, this._scene, this);
          qQ._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(qQ)
        }
      }
      getAnimationByTargetProperty(QQ) {
        const FQ = this._runtimeAnimations;
        for (let wQ = 0; wQ < FQ.length; wQ++)
          if (FQ[wQ].animation.targetProperty === QQ) return FQ[wQ].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(QQ) {
        const FQ = this._runtimeAnimations;
        for (let wQ = 0; wQ < FQ.length; wQ++)
          if (FQ[wQ].animation.targetProperty === QQ) return FQ[wQ];
        return null
      }
      reset() {
        const QQ = this._runtimeAnimations;
        for (let FQ = 0; FQ < QQ.length; FQ++) QQ[FQ].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(QQ) {
        const FQ = this._runtimeAnimations;
        for (let wQ = 0; wQ < FQ.length; wQ++) FQ[wQ].animation.enableBlending = !0, FQ[wQ].animation.blendingSpeed = QQ
      }
      disableBlending() {
        const QQ = this._runtimeAnimations;
        for (let FQ = 0; FQ < QQ.length; FQ++) QQ[FQ].animation.enableBlending = !1
      }
      goToFrame(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this._runtimeAnimations;
        if (wQ[0]) {
          const FQ = wQ[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? wQ[0].currentFrame;
          const LQ = 0 === this.speedRatio ? 0 : (QQ - this._frameToSyncFromJump) / FQ * 1e3 / this.speedRatio;
          this._manualJumpDelay = -LQ
        }
        for (let LQ = 0; LQ < wQ.length; LQ++) wQ[LQ].goToFrame(QQ, FQ ? this._weight : -1);
        this._goToFrame = QQ
      }
      get paused() {
        return this.WC
      }
      pause() {
        this.WC || (this.WC = !0)
      }
      restart() {
        this.WC = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (QQ || FQ) {
          const qQ = this._scene._activeAnimatables.indexOf(this);
          if (qQ > -1) {
            const oQ = this._runtimeAnimations;
            for (let wQ = oQ.length - 1; wQ >= 0; wQ--) {
              const LQ = oQ[wQ];
              QQ && LQ.animation.name != QQ || (FQ && !FQ(LQ.target) || (LQ.dispose(), oQ.splice(wQ, 1)))
            }
            0 == oQ.length && (wQ || this._scene._activeAnimatables.splice(qQ, 1), LQ || this._raiseOnAnimationEnd())
          }
        } else {
          const QQ = this._scene._activeAnimatables.indexOf(this);
          if (QQ > -1) {
            wQ || this._scene._activeAnimatables.splice(QQ, 1);
            const FQ = this._runtimeAnimations;
            for (let QQ = 0; QQ < FQ.length; QQ++) FQ[QQ].dispose();
            this._runtimeAnimations.length = 0, LQ || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((QQ => {
          this.onAnimationEndObservable.add((() => {
            QQ(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(QQ) {
        if (this.WC) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = QQ), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = QQ, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += QQ - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !sQ.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let FQ = !1;
        const wQ = this._runtimeAnimations;
        let LQ;
        for (LQ = 0; LQ < wQ.length; LQ++) {
          const qQ = wQ[LQ].animate(QQ - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          FQ = FQ || qQ
        }
        if (this.animationStarted = FQ, !FQ) {
          if (this.disposeOnEnd)
            for (LQ = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(LQ, 1), LQ = 0; LQ < wQ.length; LQ++) wQ[LQ].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return FQ
      }
    }

    function rQ(QQ) {
      if (0 === QQ.totalWeight && 0 === QQ.totalAdditiveWeight) return QQ.originalValue;
      let FQ = 1;
      const wQ = oQ.k.Ox[0],
        LQ = oQ.k.Ox[1],
        qQ = oQ.k.Quaternion[0];
      let DQ = 0;
      const kQ = QQ.animations[0],
        vQ = QQ.originalValue;
      let mQ, uQ = !1;
      if (QQ.totalWeight < 1) mQ = 1 - QQ.totalWeight, vQ.decompose(LQ, qQ, wQ);
      else {
        if (DQ = 1, FQ = QQ.totalWeight, mQ = kQ.weight / FQ, 1 == mQ) {
          if (!QQ.totalAdditiveWeight) return kQ.currentValue;
          uQ = !0
        }
        kQ.currentValue.decompose(LQ, qQ, wQ)
      }
      if (!uQ) {
        LQ.scaleInPlace(mQ), wQ.scaleInPlace(mQ), qQ.scaleInPlace(mQ);
        for (let kQ = DQ; kQ < QQ.animations.length; kQ++) {
          const DQ = QQ.animations[kQ];
          if (0 === DQ.weight) continue;
          mQ = DQ.weight / FQ;
          const vQ = oQ.k.Ox[2],
            uQ = oQ.k.Ox[3],
            HQ = oQ.k.Quaternion[1];
          DQ.currentValue.decompose(uQ, HQ, vQ), uQ.scaleAndAddToRef(mQ, LQ), HQ.scaleAndAddToRef(oQ.e.Dot(qQ, HQ) > 0 ? mQ : -mQ, qQ), vQ.scaleAndAddToRef(mQ, wQ)
        }
        qQ.normalize()
      }
      for (let bQ = 0; bQ < QQ.additiveAnimations.length; bQ++) {
        const FQ = QQ.additiveAnimations[bQ];
        if (0 === FQ.weight) continue;
        const DQ = oQ.k.Ox[2],
          kQ = oQ.k.Ox[3],
          vQ = oQ.k.Quaternion[1];
        FQ.currentValue.decompose(kQ, vQ, DQ), kQ.multiplyToRef(LQ, kQ), oQ.p.LerpToRef(LQ, kQ, FQ.weight, LQ), qQ.multiplyToRef(vQ, vQ), oQ.e.SlerpToRef(qQ, vQ, FQ.weight, qQ), DQ.scaleAndAddToRef(FQ.weight, wQ)
      }
      const HQ = kQ ? kQ._animationState.workValue : oQ.k.Matrix[0].clone();
      return oQ.c.ComposeToRef(LQ, qQ, wQ, HQ), HQ
    }

    function IQ(QQ, FQ) {
      if (0 === QQ.totalWeight && 0 === QQ.totalAdditiveWeight) return FQ;
      const wQ = QQ.animations[0],
        LQ = QQ.originalValue;
      let qQ = FQ;
      if (0 === QQ.totalWeight && QQ.totalAdditiveWeight > 0) qQ.Qs(LQ);
      else if (1 === QQ.animations.length) {
        if (oQ.e.SlerpToRef(LQ, wQ.currentValue, Math.min(1, QQ.totalWeight), qQ), 0 === QQ.totalAdditiveWeight) return qQ
      } else if (QQ.animations.length > 1) {
        let wQ, DQ, kQ = 1;
        if (QQ.totalWeight < 1) {
          const FQ = 1 - QQ.totalWeight;
          wQ = [], DQ = [], wQ.push(LQ), DQ.push(FQ)
        } else {
          if (2 === QQ.animations.length && (oQ.e.SlerpToRef(QQ.animations[0].currentValue, QQ.animations[1].currentValue, QQ.animations[1].weight / QQ.totalWeight, FQ), 0 === QQ.totalAdditiveWeight)) return FQ;
          wQ = [], DQ = [], kQ = QQ.totalWeight
        }
        for (let FQ = 0; FQ < QQ.animations.length; FQ++) {
          const LQ = QQ.animations[FQ];
          wQ.push(LQ.currentValue), DQ.push(LQ.weight / kQ)
        }
        let vQ = 0;
        for (let QQ = 0; QQ < wQ.length;) QQ ? (vQ += DQ[QQ], oQ.e.SlerpToRef(qQ, wQ[QQ], DQ[QQ] / vQ, qQ), QQ++) : (oQ.e.SlerpToRef(wQ[QQ], wQ[QQ + 1], DQ[QQ + 1] / (DQ[QQ] + DQ[QQ + 1]), FQ), qQ = FQ, vQ = DQ[QQ] + DQ[QQ + 1], QQ += 2)
      }
      for (let DQ = 0; DQ < QQ.additiveAnimations.length; DQ++) {
        const FQ = QQ.additiveAnimations[DQ];
        0 !== FQ.weight && (qQ.multiplyToRef(FQ.currentValue, oQ.k.Quaternion[0]), oQ.e.SlerpToRef(qQ, oQ.k.Quaternion[0], FQ.weight, qQ))
      }
      return qQ
    }

    function UQ(QQ, FQ) {
      FQ && (FQ.prototype.copyAnimationRange = function(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new WQ.d(this.name, "_matrix", QQ.animations[0].framePerSecond, WQ.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const oQ = QQ.animations[0].getRange(FQ);
        if (!oQ) return !1;
        const DQ = oQ.from,
          kQ = oQ.to,
          vQ = QQ.animations[0].getKeys(),
          mQ = QQ.length,
          uQ = QQ.getParent(),
          HQ = this.getParent(),
          bQ = LQ && uQ && mQ && this.length && mQ !== this.length,
          YQ = bQ && HQ && uQ ? HQ.length / uQ.length : 1,
          xQ = LQ && !HQ && qQ && (1 !== qQ.x || 1 !== qQ.y || 1 !== qQ.z),
          AQ = this.animations[0].getKeys();
        let tQ, eQ, MQ;
        for (let GQ = 0, pQ = vQ.length; GQ < pQ; GQ++) tQ = vQ[GQ], tQ.frame >= DQ && tQ.frame <= kQ && (LQ ? (MQ = tQ.value.clone(), bQ ? (eQ = MQ.getTranslation(), MQ.setTranslation(eQ.scaleInPlace(YQ))) : xQ && qQ ? (eQ = MQ.getTranslation(), MQ.setTranslation(eQ.multiplyInPlace(qQ))) : MQ = tQ.value) : MQ = tQ.value, AQ.push({
          frame: tQ.frame + wQ,
          value: MQ
        }));
        return this.animations[0].createRange(FQ, DQ + wQ, kQ + wQ), !0
      }), QQ && (QQ.prototype._animate = function(QQ) {
        const FQ = this._animationWrites,
          wQ = this._animationWriteCount;
        let LQ = 0;
        for (let oQ = this._animationStepWriteCount; oQ < wQ; oQ++) {
          const QQ = FQ[oQ];
          QQ.Ft && -1 === QQ.weight || (QQ.Ft = !0, FQ[oQ] = FQ[LQ], FQ[LQ] = QQ, LQ++)
        }
        for (let oQ = LQ; oQ < wQ; oQ++) {
          const QQ = FQ[oQ];
          QQ.runtimeAnimation = null, QQ.target = null
        }
        if (this._animationWriteCount = LQ, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const qQ = OQ.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = qQ
        }
        this.deltaTime = void 0 !== QQ ? QQ : this.useConstantAnimationDeltaTime ? 16 : (qQ - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = qQ;
        const DQ = this._activeAnimatables;
        if (0 === DQ.length) return;
        this._animationTime += this.deltaTime;
        const kQ = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let oQ = 0; oQ < DQ.length; oQ++) {
          const QQ = DQ[oQ];
          !QQ._animate(kQ) && QQ.disposeOnEnd && oQ--
        }! function(QQ) {
          if (QQ._registeredForLateAnimationBindings.length) {
            for (let FQ = 0; FQ < QQ._registeredForLateAnimationBindings.length; FQ++) {
              const wQ = QQ._registeredForLateAnimationBindings.data[FQ];
              for (const QQ in wQ._lateAnimationHolders) {
                const FQ = wQ._lateAnimationHolders[QQ],
                  LQ = FQ.animations[0],
                  qQ = FQ.originalValue;
                if (void 0 === qQ || null === qQ) continue;
                const DQ = WQ.d.AllowMatrixDecomposeForInterpolation && qQ.m;
                let kQ = wQ[QQ];
                if (DQ) kQ = rQ(FQ);
                else if (void 0 !== qQ.w) kQ = IQ(FQ, kQ || oQ.e.Identity());
                else {
                  let QQ = 0,
                    wQ = 1;
                  const oQ = LQ && LQ._animationState.xQ === WQ.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (FQ.totalWeight < 1) kQ = oQ ? qQ.clone ? qQ.clone() : qQ : LQ && qQ.scale ? qQ.scale(1 - FQ.totalWeight) : LQ ? qQ * (1 - FQ.totalWeight) : qQ.clone ? qQ.clone() : qQ;
                  else if (LQ) {
                    wQ = FQ.totalWeight;
                    const DQ = LQ.weight / wQ;
                    kQ = 1 !== DQ ? LQ.currentValue.scale ? LQ.currentValue.scale(DQ) : LQ.currentValue * DQ : (FQ.animations.length > 1 || FQ.additiveAnimations.length > 0) && LQ.currentValue.clone ? LQ.currentValue.clone() : LQ.currentValue, oQ && (kQ.addToRef ? kQ.addToRef(qQ, kQ) : kQ += qQ), QQ = 1
                  }
                  for (let LQ = QQ; LQ < FQ.animations.length; LQ++) {
                    const QQ = FQ.animations[LQ],
                      qQ = QQ.weight / wQ;
                    qQ && (QQ.currentValue.scaleAndAddToRef ? QQ.currentValue.scaleAndAddToRef(qQ, kQ) : kQ += QQ.currentValue * qQ)
                  }
                  for (let LQ = 0; LQ < FQ.additiveAnimations.length; LQ++) {
                    const QQ = FQ.additiveAnimations[LQ],
                      wQ = QQ.weight;
                    wQ && (QQ.currentValue.scaleAndAddToRef ? QQ.currentValue.scaleAndAddToRef(wQ, kQ) : kQ += QQ.currentValue * wQ)
                  }
                }
                wQ[QQ] = kQ
              }
              wQ._lateAnimationHolders = {}
            }
            QQ._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, QQ.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((QQ, FQ) => QQ.playOrder - FQ.playOrder))
      }, QQ.prototype.beginWeightedAnimation = function(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 ? arguments[7] : void 0,
          vQ = arguments.length > 8 ? arguments[8] : void 0,
          mQ = arguments.length > 9 ? arguments[9] : void 0,
          uQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const HQ = this.beginAnimation(QQ, FQ, wQ, qQ, oQ, DQ, kQ, !1, vQ, mQ, uQ);
        return HQ.weight = LQ, HQ
      }, QQ.prototype.beginAnimation = function(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          oQ = arguments.length > 5 ? arguments[5] : void 0,
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vQ = arguments.length > 8 ? arguments[8] : void 0,
          mQ = arguments.length > 9 ? arguments[9] : void 0,
          uQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (qQ < 0) {
          const QQ = FQ;
          FQ = wQ, wQ = QQ, qQ = -qQ
        }
        FQ > wQ && (qQ = -qQ), kQ && this.stopAnimation(QQ, void 0, vQ), DQ || (DQ = new sQ(this, QQ, FQ, wQ, LQ, qQ, oQ, void 0, mQ, uQ));
        const HQ = !vQ || vQ(QQ);
        if (QQ.animations && HQ && DQ.appendAnimations(QQ, QQ.animations), QQ.getAnimatables) {
          const uQ = QQ.getAnimatables();
          for (let QQ = 0; QQ < uQ.length; QQ++) this.beginAnimation(uQ[QQ], FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ)
        }
        return DQ.reset(), DQ
      }, QQ.prototype.beginHierarchyAnimation = function(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 ? arguments[7] : void 0,
          vQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          mQ = arguments.length > 9 ? arguments[9] : void 0,
          uQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const HQ = QQ.getDescendants(FQ),
          bQ = [];
        bQ.push(this.beginAnimation(QQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, void 0, uQ));
        for (const YQ of HQ) bQ.push(this.beginAnimation(YQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, void 0, uQ));
        return bQ
      }, QQ.prototype.beginDirectAnimation = function(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (oQ < 0) {
          const QQ = wQ;
          wQ = LQ, LQ = QQ, oQ = -oQ
        }
        wQ > LQ && (oQ = -oQ);
        return new sQ(this, QQ, wQ, LQ, qQ, oQ, arguments.length > 6 ? arguments[6] : void 0, FQ, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, QQ.prototype.beginDirectHierarchyAnimation = function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ) {
        let mQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const uQ = QQ.getDescendants(FQ),
          HQ = [];
        HQ.push(this.beginDirectAnimation(QQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ));
        for (const bQ of uQ) HQ.push(this.beginDirectAnimation(bQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ));
        return HQ
      }, QQ.prototype.getAnimatableByTarget = function(QQ) {
        for (let FQ = 0; FQ < this._activeAnimatables.length; FQ++)
          if (this._activeAnimatables[FQ].target === QQ) return this._activeAnimatables[FQ];
        return null
      }, QQ.prototype.getAllAnimatablesByTarget = function(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < this._activeAnimatables.length; wQ++) this._activeAnimatables[wQ].target === QQ && FQ.push(this._activeAnimatables[wQ]);
        return FQ
      }, QQ.prototype.stopAnimation = function(QQ, FQ, wQ) {
        const LQ = this.getAllAnimatablesByTarget(QQ);
        for (const qQ of LQ) qQ.stop(FQ, wQ)
      }, QQ.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let QQ = 0; QQ < this._activeAnimatables.length; QQ++) this._activeAnimatables[QQ].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const QQ of this.animationGroups) QQ.stop()
      })
    }
    sQ.ProcessPausedAnimatables = !1;
    var NQ, TQ = wQ(36709),
      KQ = wQ(39650),
      zQ = wQ(39277);
    class lQ extends KQ.c {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(QQ) {
        (QQ.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Qs(QQ), this._markAsDirtyAndDecompose())
      }
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(QQ, FQ.iN(), !1), this.name = QQ, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = FQ, this._localMatrix = LQ?.clone() ?? oQ.c.Identity(), this._restMatrix = qQ ?? this._localMatrix.clone(), this._bindMatrix = DQ ?? this._localMatrix.clone(), this._index = kQ, this._absoluteMatrix = new oQ.c, this._absoluteBindMatrix = new oQ.c, this._absoluteInverseBindMatrix = new oQ.c, this._finalMatrix = new oQ.c, FQ.bones.push(this), this.setParent(wQ, !1), this._updateAbsoluteBindMatrices()
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
      set parent(QQ) {
        this.setParent(QQ)
      }
      setParent(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== QQ) {
          if (this.parent) {
            const QQ = this.parent.children.indexOf(this); - 1 !== QQ && this.parent.children.splice(QQ, 1)
          }
          this._parentNode = QQ, this.parent && this.parent.children.push(this), FQ && this._updateAbsoluteBindMatrices(), this.dFQ()
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
      setRestMatrix(QQ) {
        this._restMatrix.Qs(QQ)
      }
      setRestPose(QQ) {
        this.setRestMatrix(QQ)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(QQ) {
        this.Y5(QQ)
      }
      setBindPose(QQ) {
        this.setBindMatrix(QQ)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const QQ = oQ.k.Ox[0],
            FQ = oQ.k.Quaternion[0],
            wQ = oQ.k.Ox[1];
          this.getRestMatrix().decompose(QQ, FQ, wQ), this._linkedTransformNode.position.Qs(wQ), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? oQ.e.Identity(), this._linkedTransformNode.rotationQuaternion.Qs(FQ), this._linkedTransformNode.ck.Qs(QQ)
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
      linkTransformNode(QQ) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = QQ, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.xFQ
      }
      set position(QQ) {
        this._decompose(), this.xFQ.Qs(QQ), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(QQ) {
        this.setRotation(QQ)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(QQ) {
        this.setRotationQuaternion(QQ)
      }
      get ck() {
        return this.getScale()
      }
      set ck(QQ) {
        this.setScale(QQ)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = oQ.p.Zero(), this._localRotation = oQ.e.Zero(), this.xFQ = oQ.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.xFQ))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, oQ.c.ComposeToRef(this._localScaling, this._localRotation, this.xFQ, this._localMatrix)) : this._needToCompose = !1)
      }
      Y5(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.Qs(QQ), FQ && this._updateAbsoluteBindMatrices(), wQ ? this._matrix = QQ : this.dFQ()
      }
      _updateAbsoluteBindMatrices(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (QQ || (QQ = this._bindMatrix), this.parent ? QQ.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.Qs(QQ), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), FQ)
          for (let wQ = 0; wQ < this.children.length; wQ++) this.children[wQ]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      dFQ() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.dFQ(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.dFQ(), this._needToDecompose = !0
      }
      _updatePosition(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qQ = this.getLocalMatrix();
        if (0 == FQ) LQ ? (qQ.addAtIndex(12, QQ.x), qQ.addAtIndex(13, QQ.y), qQ.addAtIndex(14, QQ.z)) : qQ.setTranslationFromFloats(QQ.x, QQ.y, QQ.z);
        else {
          const FQ = lQ._TmpMats[0],
            DQ = lQ._TmpVecs[0];
          this.parent ? (FQ.Qs(this.parent.getAbsoluteMatrix()), wQ && FQ.multiplyToRef(wQ.getWorldMatrix(), FQ)) : oQ.c.IdentityToRef(FQ), LQ && FQ.setTranslationFromFloats(0, 0, 0), FQ.invert(), oQ.p.TransformCoordinatesToRef(QQ, FQ, DQ), LQ ? (qQ.addAtIndex(12, DQ.x), qQ.addAtIndex(13, DQ.y), qQ.addAtIndex(14, DQ.z)) : qQ.setTranslationFromFloats(DQ.x, DQ.y, DQ.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(QQ, FQ, wQ, !0)
      }
      setPosition(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(QQ, FQ, wQ, !1)
      }
      setAbsolutePosition(QQ, FQ) {
        this.setPosition(QQ, 1, FQ)
      }
      scale(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = this.getLocalMatrix(),
          DQ = lQ._TmpMats[0];
        oQ.c.ScalingToRef(QQ, FQ, wQ, DQ), DQ.multiplyToRef(qQ, qQ), DQ.invert();
        for (const oQ of this.children) {
          const LQ = oQ.getLocalMatrix();
          LQ.multiplyToRef(DQ, LQ), LQ.multiplyAtIndex(12, QQ), LQ.multiplyAtIndex(13, FQ), LQ.multiplyAtIndex(14, wQ), oQ._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), LQ)
          for (const oQ of this.children) oQ.scale(QQ, FQ, wQ, LQ)
      }
      setScale(QQ) {
        this._decompose(), this._localScaling.Qs(QQ), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(QQ) {
        this._decompose(), QQ.Qs(this._localScaling)
      }
      setYawPitchRoll(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === LQ) {
          const DQ = lQ._TmpQuat;
          return oQ.e.RotationYawPitchRollToRef(QQ, FQ, wQ, DQ), void this.setRotationQuaternion(DQ, LQ, qQ)
        }
        const DQ = lQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(DQ, qQ)) return;
        const kQ = lQ._TmpMats[1];
        oQ.c.RotationYawPitchRollToRef(QQ, FQ, wQ, kQ), DQ.multiplyToRef(kQ, kQ), this._rotateWithMatrix(kQ, LQ, qQ)
      }
      rotate(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        const qQ = lQ._TmpMats[0];
        qQ.setTranslationFromFloats(0, 0, 0), oQ.c.RotationAxisToRef(QQ, FQ, qQ), this._rotateWithMatrix(qQ, wQ, LQ)
      }
      setAxisAngle(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === wQ) {
          const qQ = lQ._TmpQuat;
          return oQ.e.RotationAxisToRef(QQ, FQ, qQ), void this.setRotationQuaternion(qQ, wQ, LQ)
        }
        const qQ = lQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(qQ, LQ)) return;
        const DQ = lQ._TmpMats[1];
        oQ.c.RotationAxisToRef(QQ, FQ, DQ), qQ.multiplyToRef(DQ, DQ), this._rotateWithMatrix(DQ, wQ, LQ)
      }
      setRotation(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(QQ.y, QQ.x, QQ.z, FQ, wQ)
      }
      setRotationQuaternion(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === FQ) return this._decompose(), this._localRotation.Qs(QQ), void this._markAsDirtyAndCompose();
        const LQ = lQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(LQ, wQ)) return;
        const qQ = lQ._TmpMats[1];
        oQ.c.FromQuaternionToRef(QQ, qQ), LQ.multiplyToRef(qQ, qQ), this._rotateWithMatrix(qQ, FQ, wQ)
      }
      setRotationMatrix(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === FQ) {
          const LQ = lQ._TmpQuat;
          return oQ.e.FromRotationMatrixToRef(QQ, LQ), void this.setRotationQuaternion(LQ, FQ, wQ)
        }
        const LQ = lQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(LQ, wQ)) return;
        const qQ = lQ._TmpMats[1];
        qQ.Qs(QQ), LQ.multiplyToRef(QQ, qQ), this._rotateWithMatrix(qQ, FQ, wQ)
      }
      _rotateWithMatrix(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = this.getLocalMatrix(),
          qQ = LQ.m[12],
          oQ = LQ.m[13],
          DQ = LQ.m[14],
          kQ = this.getParent(),
          vQ = lQ._TmpMats[3],
          mQ = lQ._TmpMats[4];
        kQ && 1 == FQ ? (wQ ? (vQ.Qs(wQ.getWorldMatrix()), kQ.getAbsoluteMatrix().multiplyToRef(vQ, vQ)) : vQ.Qs(kQ.getAbsoluteMatrix()), mQ.Qs(vQ), mQ.invert(), LQ.multiplyToRef(vQ, LQ), LQ.multiplyToRef(QQ, LQ), LQ.multiplyToRef(mQ, LQ)) : 1 == FQ && wQ ? (vQ.Qs(wQ.getWorldMatrix()), mQ.Qs(vQ), mQ.invert(), LQ.multiplyToRef(vQ, LQ), LQ.multiplyToRef(QQ, LQ), LQ.multiplyToRef(mQ, LQ)) : LQ.multiplyToRef(QQ, LQ), LQ.setTranslationFromFloats(qQ, oQ, DQ), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(QQ, FQ) {
        const wQ = lQ._TmpMats[2];
        return QQ.Qs(this.getAbsoluteMatrix()), FQ ? (QQ.multiplyToRef(FQ.getWorldMatrix(), QQ), oQ.c.ScalingToRef(FQ.ck.x, FQ.ck.y, FQ.ck.z, wQ)) : oQ.c.IdentityToRef(wQ), QQ.invert(), !isNaN(QQ.m[0]) && (wQ.multiplyAtIndex(0, this._scalingDeterminant), QQ.multiplyToRef(wQ, QQ), !0)
      }
      Qp() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = oQ.p.Zero();
        return this.getPositionToRef(QQ, FQ, wQ), wQ
      }
      getPositionToRef() {
        let QQ = arguments.length > 1 ? arguments[1] : void 0,
          FQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const QQ = this.getLocalMatrix();
          FQ.x = QQ.m[12], FQ.y = QQ.m[13], FQ.z = QQ.m[14]
        } else {
          const wQ = lQ._TmpMats[0].Qs(this.getAbsoluteMatrix());
          QQ && wQ.multiplyToRef(QQ.getWorldMatrix(), wQ), FQ.x = wQ.m[12], FQ.y = wQ.m[13], FQ.z = wQ.m[14]
        }
      }
      getAbsolutePosition() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const FQ = oQ.p.Zero();
        return this.getPositionToRef(1, QQ, FQ), FQ
      }
      getAbsolutePositionToRef(QQ, FQ) {
        this.getPositionToRef(1, QQ, FQ)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.Qs(this._localMatrix);
          const QQ = this._skeleton.getPoseMatrix();
          QQ && this._absoluteMatrix.multiplyToRef(QQ, this._absoluteMatrix)
        }
        const QQ = this.children,
          FQ = QQ.length;
        for (let wQ = 0; wQ < FQ; wQ++) QQ[wQ].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Py(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = oQ.p.Zero();
        return this.getDirectionToRef(QQ, FQ, wQ), wQ
      }
      getDirectionToRef(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = lQ._TmpMats[0].Qs(this.getAbsoluteMatrix());
        FQ && LQ.multiplyToRef(FQ.getWorldMatrix(), LQ), oQ.p.TransformNormalToRef(QQ, LQ, wQ), wQ.normalize()
      }
      getRotation() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = oQ.p.Zero();
        return this.getRotationToRef(QQ, FQ, wQ), wQ
      }
      getRotationToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = lQ._TmpQuat;
        this.getRotationQuaternionToRef(QQ, FQ, LQ), LQ.toEulerAnglesToRef(wQ)
      }
      getRotationQuaternion() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = oQ.e.Identity();
        return this.getRotationQuaternionToRef(QQ, FQ, wQ), wQ
      }
      getRotationQuaternionToRef() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          FQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), FQ.Qs(this._localRotation);
        else {
          const wQ = lQ._TmpMats[0],
            LQ = this.getAbsoluteMatrix();
          QQ ? LQ.multiplyToRef(QQ.getWorldMatrix(), wQ) : wQ.Qs(LQ), wQ.multiplyAtIndex(0, this._scalingDeterminant), wQ.multiplyAtIndex(1, this._scalingDeterminant), wQ.multiplyAtIndex(2, this._scalingDeterminant), wQ.decompose(void 0, FQ, void 0)
        }
      }
      getRotationMatrix() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 ? arguments[1] : void 0;
        const wQ = oQ.c.Identity();
        return this.getRotationMatrixToRef(QQ, FQ, wQ), wQ
      }
      getRotationMatrixToRef() {
        let QQ = arguments.length > 1 ? arguments[1] : void 0,
          FQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(FQ);
        else {
          const wQ = lQ._TmpMats[0],
            LQ = this.getAbsoluteMatrix();
          QQ ? LQ.multiplyToRef(QQ.getWorldMatrix(), wQ) : wQ.Qs(LQ), wQ.multiplyAtIndex(0, this._scalingDeterminant), wQ.multiplyAtIndex(1, this._scalingDeterminant), wQ.multiplyAtIndex(2, this._scalingDeterminant), wQ.getRotationMatrixToRef(FQ)
        }
      }
      getAbsolutePositionFromLocal(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = oQ.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(QQ, FQ, wQ), wQ
      }
      getAbsolutePositionFromLocalToRef(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = lQ._TmpMats[0].Qs(this.getAbsoluteMatrix());
        FQ && LQ.multiplyToRef(FQ.getWorldMatrix(), LQ), oQ.p.TransformCoordinatesToRef(QQ, LQ, wQ)
      }
      getLocalPositionFromAbsolute(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = oQ.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(QQ, FQ, wQ), wQ
      }
      getLocalPositionFromAbsoluteToRef(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = lQ._TmpMats[0].Qs(this.getAbsoluteMatrix());
        FQ && LQ.multiplyToRef(FQ.getWorldMatrix(), LQ), LQ.invert(), oQ.p.TransformCoordinatesToRef(QQ, LQ, wQ)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const QQ = this._skeleton.bones.indexOf(this);
        if (-1 !== QQ && this._skeleton.bones.splice(QQ, 1), this._parentNode && this._parentNode.children) {
          const QQ = this._parentNode.children,
            FQ = QQ.indexOf(this); - 1 !== FQ && QQ.splice(FQ, 1)
        }
        super.dispose()
      }
    }
    lQ._TmpVecs = (0, TQ.b)(2, oQ.p.Zero), lQ._TmpQuat = oQ.e.Identity(), lQ._TmpMats = (0, TQ.b)(5, oQ.c.Identity), (NQ = lQ.prototype).copyAnimationRange ?? (NQ.copyAnimationRange = (0, zQ.g)("Bone", "copyAnimationRange"));
    var jQ = wQ(39496);
    let aQ = !1;
    var XQ = wQ(39367),
      fQ = wQ(39748),
      VQ = wQ(39754),
      hQ = wQ(39752),
      JQ = wQ(39542);

    function EQ(QQ, FQ) {
      const wQ = (0, YQ.RandomRange)(0, 1);
      uQ.e.LerpToRef(FQ.color1, FQ.color2, wQ, QQ.color)
    }

    function nQ(QQ, FQ) {
      FQ.colorDead.subtractToRef(QQ.color, FQ._colorDiff), FQ._colorDiff.scaleToRef(1 / QQ.lifeTime, QQ.colorStep)
    }

    function gQ(QQ, FQ) {
      QQ._properties.currentColorGradient = FQ._colorGradients[0], QQ._properties.currentColorGradient.getColorToRef(QQ.color), QQ._properties.currentColor1.Qs(QQ.color), FQ._colorGradients.length > 1 ? FQ._colorGradients[1].getColorToRef(QQ._properties.currentColor2) : QQ._properties.currentColor2.Qs(QQ.color)
    }

    function PQ(QQ, FQ) {
      const wQ = FQ._colorGradients;
      LQ.k.GetCurrentGradient(FQ._ratio, wQ, ((FQ, wQ, LQ) => {
        FQ !== QQ._properties.currentColorGradient && (QQ._properties.currentColor1.Qs(QQ._properties.currentColor2), wQ.getColorToRef(QQ._properties.currentColor2), QQ._properties.currentColorGradient = FQ), uQ.e.LerpToRef(QQ._properties.currentColor1, QQ._properties.currentColor2, LQ, QQ.color), QQ.color.a < 0 && (QQ.color.a = 0)
      }))
    }

    function ZQ(QQ, FQ) {
      QQ.colorStep.scaleToRef(FQ._scaledUpdateSpeed, FQ._scaledColorStep), QQ.color.addInPlace(FQ._scaledColorStep), QQ.color.a < 0 && (QQ.color.a = 0)
    }

    function yQ(QQ, FQ) {
      LQ.k.GetCurrentGradient(FQ._ratio, FQ._angularSpeedGradients, ((FQ, wQ, LQ) => {
        FQ !== QQ._properties.currentAngularSpeedGradient && (QQ._properties.currentAngularSpeed1 = QQ._properties.currentAngularSpeed2, QQ._properties.currentAngularSpeed2 = wQ.getFactor(), QQ._properties.currentAngularSpeedGradient = FQ), QQ.angularSpeed = (0, YQ.Lerp)(QQ._properties.currentAngularSpeed1, QQ._properties.currentAngularSpeed2, LQ)
      }))
    }

    function BQ(QQ, FQ) {
      QQ.angle += QQ.angularSpeed * FQ._scaledUpdateSpeed
    }

    function dQ(QQ, FQ) {
      FQ.particleEmitterType.startDirectionFunction(FQ._emitterWorldMatrix, QQ.direction, QQ, FQ.isLocal, FQ._emitterInverseWorldMatrix)
    }

    function QF(QQ, FQ) {
      FQ.startDirectionFunction(FQ._emitterWorldMatrix, QQ.direction, QQ, FQ.isLocal)
    }

    function FF(QQ, FQ) {
      QQ._properties.currentVelocityGradient = FQ._velocityGradients[0], QQ._properties.currentVelocity1 = QQ._properties.currentVelocityGradient.getFactor(), FQ._velocityGradients.length > 1 ? QQ._properties.currentVelocity2 = FQ._velocityGradients[1].getFactor() : QQ._properties.currentVelocity2 = QQ._properties.currentVelocity1
    }

    function wF(QQ, FQ) {
      QQ._properties.currentLimitVelocityGradient = FQ._limitVelocityGradients[0], QQ._properties.currentLimitVelocity1 = QQ._properties.currentLimitVelocityGradient.getFactor(), FQ._limitVelocityGradients.length > 1 ? QQ._properties.currentLimitVelocity2 = FQ._limitVelocityGradients[1].getFactor() : QQ._properties.currentLimitVelocity2 = QQ._properties.currentLimitVelocity1
    }

    function LF(QQ, FQ) {
      LQ.k.GetCurrentGradient(FQ._ratio, FQ._velocityGradients, ((FQ, wQ, LQ) => {
        FQ !== QQ._properties.currentVelocityGradient && (QQ._properties.currentVelocity1 = QQ._properties.currentVelocity2, QQ._properties.currentVelocity2 = wQ.getFactor(), QQ._properties.currentVelocityGradient = FQ), QQ._properties.directionScale *= (0, YQ.Lerp)(QQ._properties.currentVelocity1, QQ._properties.currentVelocity2, LQ)
      }))
    }

    function qF(QQ, FQ) {
      LQ.k.GetCurrentGradient(FQ._ratio, FQ._limitVelocityGradients, ((wQ, LQ, qQ) => {
        wQ !== QQ._properties.currentLimitVelocityGradient && (QQ._properties.currentLimitVelocity1 = QQ._properties.currentLimitVelocity2, QQ._properties.currentLimitVelocity2 = LQ.getFactor(), QQ._properties.currentLimitVelocityGradient = wQ);
        const oQ = (0, YQ.Lerp)(QQ._properties.currentLimitVelocity1, QQ._properties.currentLimitVelocity2, qQ);
        QQ.direction.length() > oQ && QQ.direction.scaleInPlace(FQ.limitVelocityDamping)
      }))
    }

    function oF(QQ) {
      QQ.direction.scaleToRef(QQ._properties.directionScale, QQ._properties.scaledDirection)
    }

    function DF(QQ, FQ) {
      FQ.particleEmitterType.startPositionFunction(FQ._emitterWorldMatrix, QQ.position, QQ, FQ.isLocal)
    }

    function kF(QQ, FQ) {
      FQ.startPositionFunction(FQ._emitterWorldMatrix, QQ.position, QQ, FQ.isLocal)
    }

    function vF(QQ, FQ) {
      QQ._properties.localPosition ? QQ._properties.localPosition.Qs(QQ.position) : QQ._properties.localPosition = QQ.position.clone(), oQ.p.TransformCoordinatesToRef(QQ._properties.localPosition, FQ._emitterWorldMatrix, QQ.position)
    }

    function mF(QQ, FQ) {
      FQ.isLocal && QQ._properties.localPosition ? (QQ._properties.localPosition.addInPlace(QQ._properties.scaledDirection), oQ.p.TransformCoordinatesToRef(QQ._properties.localPosition, FQ._emitterWorldMatrix, QQ.position)) : QQ.position.addInPlace(QQ._properties.scaledDirection)
    }

    function uF(QQ, FQ) {
      QQ._properties.currentDragGradient = FQ._dragGradients[0], QQ._properties.currentDrag1 = QQ._properties.currentDragGradient.getFactor(), FQ._dragGradients.length > 1 ? QQ._properties.currentDrag2 = FQ._dragGradients[1].getFactor() : QQ._properties.currentDrag2 = QQ._properties.currentDrag1
    }

    function HF(QQ, FQ) {
      LQ.k.GetCurrentGradient(FQ._ratio, FQ._dragGradients, ((FQ, wQ, LQ) => {
        FQ !== QQ._properties.currentDragGradient && (QQ._properties.currentDrag1 = QQ._properties.currentDrag2, QQ._properties.currentDrag2 = wQ.getFactor(), QQ._properties.currentDragGradient = FQ);
        const qQ = (0, YQ.Lerp)(QQ._properties.currentDrag1, QQ._properties.currentDrag2, LQ);
        QQ._properties.scaledDirection.scaleInPlace(1 - qQ)
      }))
    }

    function bF(QQ, FQ) {
      QQ._properties.randomNoiseCoordinates1 && QQ._properties.randomNoiseCoordinates2 ? (QQ._properties.randomNoiseCoordinates1.vQQ(Math.random(), Math.random(), Math.random()), QQ._properties.randomNoiseCoordinates2.vQQ(Math.random(), Math.random(), Math.random())) : (QQ._properties.randomNoiseCoordinates1 = new oQ.p(Math.random(), Math.random(), Math.random()), QQ._properties.randomNoiseCoordinates2 = new oQ.p(Math.random(), Math.random(), Math.random()))
    }

    function YF(QQ, FQ) {
      const wQ = FQ._noiseTextureData,
        LQ = FQ._noiseTextureSize;
      if (wQ && LQ && QQ._properties.randomNoiseCoordinates1 && QQ._properties.randomNoiseCoordinates2) {
        const qQ = FQ._fetchR(QQ._properties.randomNoiseCoordinates1.x, QQ._properties.randomNoiseCoordinates1.y, LQ.width, LQ.height, wQ),
          DQ = FQ._fetchR(QQ._properties.randomNoiseCoordinates1.z, QQ._properties.randomNoiseCoordinates2.x, LQ.width, LQ.height, wQ),
          kQ = FQ._fetchR(QQ._properties.randomNoiseCoordinates2.y, QQ._properties.randomNoiseCoordinates2.z, LQ.width, LQ.height, wQ),
          vQ = oQ.k.Ox[0],
          mQ = oQ.k.Ox[1];
        vQ.vQQ((2 * qQ - 1) * FQ.noiseStrength.x, (2 * DQ - 1) * FQ.noiseStrength.y, (2 * kQ - 1) * FQ.noiseStrength.z), vQ.scaleToRef(FQ._tempScaledUpdateSpeed, mQ), QQ.direction.addInPlace(mQ)
      }
    }

    function xF(QQ, FQ) {
      FQ.gravity.scaleToRef(FQ._tempScaledUpdateSpeed, FQ._scaledGravity), QQ.direction.addInPlace(FQ._scaledGravity)
    }

    function AF(QQ, FQ) {
      QQ.size = (0, YQ.RandomRange)(FQ.minSize, FQ.maxSize), QQ.scale.vQQ((0, YQ.RandomRange)(FQ.minScaleX, FQ.maxScaleX), (0, YQ.RandomRange)(FQ.minScaleY, FQ.maxScaleY))
    }

    function tF(QQ, FQ) {
      QQ._properties.currentSizeGradient = FQ._sizeGradients[0], QQ._properties.currentSize1 = QQ._properties.currentSizeGradient.getFactor(), QQ.size = QQ._properties.currentSize1, FQ._sizeGradients.length > 1 ? QQ._properties.currentSize2 = FQ._sizeGradients[1].getFactor() : QQ._properties.currentSize2 = QQ._properties.currentSize1, QQ.scale.vQQ((0, YQ.RandomRange)(FQ.minScaleX, FQ.maxScaleX), (0, YQ.RandomRange)(FQ.minScaleY, FQ.maxScaleY))
    }

    function eF(QQ, FQ) {
      const wQ = FQ._actualFrame / FQ.targetStopDuration;
      LQ.k.GetCurrentGradient(wQ, FQ._startSizeGradients, ((wQ, LQ, qQ) => {
        wQ !== FQ._currentStartSizeGradient && (FQ._currentStartSize1 = FQ._currentStartSize2, FQ._currentStartSize2 = LQ.getFactor(), FQ._currentStartSizeGradient = wQ);
        const oQ = (0, YQ.Lerp)(FQ._currentStartSize1, FQ._currentStartSize2, qQ);
        QQ.scale.scaleInPlace(oQ)
      }))
    }

    function MF(QQ, FQ) {
      LQ.k.GetCurrentGradient(FQ._ratio, FQ._sizeGradients, ((FQ, wQ, LQ) => {
        FQ !== QQ._properties.currentSizeGradient && (QQ._properties.currentSize1 = QQ._properties.currentSize2, QQ._properties.currentSize2 = wQ.getFactor(), QQ._properties.currentSizeGradient = FQ), QQ.size = (0, YQ.Lerp)(QQ._properties.currentSize1, QQ._properties.currentSize2, LQ)
      }))
    }

    function GF(QQ, FQ) {
      QQ.remapData = new oQ.t(0, 1, 0, 1)
    }

    function pF(QQ, FQ) {
      FQ._colorRemapGradients && FQ._colorRemapGradients.length > 0 && LQ.k.GetCurrentGradient(FQ._ratio, FQ._colorRemapGradients, ((FQ, wQ, LQ) => {
        const qQ = (0, YQ.Lerp)(FQ.factor1, wQ.factor1, LQ),
          oQ = (0, YQ.Lerp)(FQ.factor2, wQ.factor2, LQ);
        QQ.remapData.x = qQ, QQ.remapData.y = oQ - qQ
      })), FQ._alphaRemapGradients && FQ._alphaRemapGradients.length > 0 && LQ.k.GetCurrentGradient(FQ._ratio, FQ._alphaRemapGradients, ((FQ, wQ, LQ) => {
        const qQ = (0, YQ.Lerp)(FQ.factor1, wQ.factor1, LQ),
          oQ = (0, YQ.Lerp)(FQ.factor2, wQ.factor2, LQ);
        QQ.remapData.z = qQ, QQ.remapData.w = oQ - qQ
      }))
    }

    function cF(QQ, FQ) {
      const wQ = (0, YQ.Clamp)(FQ._actualFrame / FQ.targetStopDuration);
      LQ.k.GetCurrentGradient(wQ, FQ._lifeTimeGradients, ((FQ, LQ) => {
        const qQ = FQ,
          oQ = LQ,
          DQ = qQ.getFactor(),
          kQ = oQ.getFactor(),
          vQ = (wQ - qQ.gradient) / (oQ.gradient - qQ.gradient);
        QQ.lifeTime = (0, YQ.Lerp)(DQ, kQ, vQ)
      })), FQ._emitPower = (0, YQ.RandomRange)(FQ.minEmitPower, FQ.maxEmitPower)
    }

    function CF(QQ, FQ) {
      QQ.lifeTime = (0, YQ.RandomRange)(FQ.minLifeTime, FQ.maxLifeTime), FQ._emitPower = (0, YQ.RandomRange)(FQ.minEmitPower, FQ.maxEmitPower)
    }

    function SF(QQ, FQ) {
      0 === FQ._emitPower ? (QQ._properties.initialDirection ? QQ._properties.initialDirection.Qs(QQ.direction) : QQ._properties.initialDirection = QQ.direction.clone(), QQ.direction.set(0, 0, 0)) : (QQ._properties.initialDirection = null, QQ.direction.scaleInPlace(FQ._emitPower)), QQ.direction.addInPlace(FQ._inheritedVelocityOffset)
    }

    function iF(QQ, FQ) {
      QQ.angularSpeed = (0, YQ.RandomRange)(FQ.minAngularSpeed, FQ.maxAngularSpeed), QQ.angle = (0, YQ.RandomRange)(FQ.minInitialRotation, FQ.maxInitialRotation)
    }

    function WF(QQ, FQ) {
      QQ._properties.currentAngularSpeedGradient = FQ._angularSpeedGradients[0], QQ.angularSpeed = QQ._properties.currentAngularSpeedGradient.getFactor(), QQ._properties.currentAngularSpeed1 = QQ.angularSpeed, FQ._angularSpeedGradients.length > 1 ? QQ._properties.currentAngularSpeed2 = FQ._angularSpeedGradients[1].getFactor() : QQ._properties.currentAngularSpeed2 = QQ._properties.currentAngularSpeed1, QQ.angle = (0, YQ.RandomRange)(FQ.minInitialRotation, FQ.maxInitialRotation)
    }

    function RF(QQ, FQ) {
      QQ._properties.initialStartSpriteCellId = FQ.startSpriteCellID, QQ._properties.initialEndSpriteCellId = FQ.endSpriteCellID, QQ._properties.initialSpriteCellLoop = FQ.spriteCellLoop
    }

    function OF(QQ, FQ) {
      QQ.previousItem = FQ.previousItem, QQ.nextItem = FQ, FQ.previousItem && (FQ.previousItem.nextItem = QQ), FQ.previousItem = QQ
    }

    function sF(QQ, FQ) {
      QQ.previousItem = FQ, QQ.nextItem = FQ.nextItem, FQ.nextItem && (FQ.nextItem.previousItem = QQ), FQ.nextItem = QQ
    }

    function rF(QQ) {
      QQ.previousItem && (QQ.previousItem.nextItem = QQ.nextItem), QQ.nextItem && (QQ.nextItem.previousItem = QQ.previousItem)
    }
    var IF = wQ(39796);
    class UF extends CQ {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(QQ) {
        this._startDirectionFunction !== QQ && (this._startDirectionFunction = QQ, this._directionCreation.process = QQ ? QF : dQ)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(QQ) {
        this._startPositionFunction !== QQ && (this._startPositionFunction = QQ, this._positionCreation.process = QQ ? kF : DF)
      }
      set onDispose(QQ) {
        this._onDisposeObserver && this.zN.remove(this._onDisposeObserver), this._onDisposeObserver = this.zN.add(QQ)
      }
      get vW() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(QQ) {
        this._useRampGradients !== QQ && (this._useRampGradients = QQ, this._resetEffect(), QQ ? (this._rampCreation = {
          process: GF,
          previousItem: null,
          nextItem: null
        }, sF(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: pF,
          previousItem: null,
          nextItem: null
        }, sF(this._remapGradientProcessing, this._gravityProcessing))) : (rF(this._rampCreation), rF(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(QQ) {
        this._isLocal !== QQ && (this._isLocal = QQ, QQ ? (this._isLocalCreation = {
          process: vF,
          previousItem: null,
          nextItem: null
        }, sF(this._isLocalCreation, this._positionCreation)) : rF(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(QQ) {
        this._animationSheetEnabled !== QQ && (this._animationSheetEnabled = QQ, QQ ? (this._sheetCreation = {
          process: RF,
          previousItem: null,
          nextItem: null
        }, sF(this._sheetCreation, this._colorDeadCreation)) : rF(this._sheetCreation), this._reset())
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[QQ]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[QQ] ?? this._customWrappers[0]
      }
      setCustomEffect(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[FQ] = new fQ.d(this._engine), this._customWrappers[FQ].effect = QQ, this._customWrappers[FQ].drawContext && (this._customWrappers[FQ].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new qQ.e), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(QQ) {
        if (this.noiseTexture !== QQ) {
          if (this._noiseTexture = QQ, !QQ) return rF(this._noiseCreation), void rF(this._noiseProcessing);
          this._noiseCreation = {
            process: bF,
            previousItem: null,
            nextItem: null
          }, sF(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: YF,
            previousItem: null,
            nextItem: null
          }, sF(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          kQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          mQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        aQ || (aQ = !0, UQ(jQ.e, lQ)), (0, XQ.b)(), super(QQ), this._emitterInverseWorldMatrix = oQ.c.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new oQ.p, this.zN = new qQ.e, this.onStoppedObservable = new qQ.e, this.onStartedObservable = new qQ.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new uQ.e(0, 0, 0, 0), this._colorDiff = new uQ.e(0, 0, 0, 0), this._scaledGravity = oQ.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = QQ => {}, this.recycleParticle = QQ => {
          const FQ = this._particles.pop();
          FQ !== QQ && FQ.copyTo(QQ), FQ.metadata = null, this._stockParticles.push(FQ)
        }, this._createParticle = () => {
          let QQ;
          return 0 !== this._stockParticles.length ? (QQ = this._stockParticles.pop(), QQ._reset()) : QQ = new iQ(this), this._prepareParticle(QQ), QQ
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = FQ, this._epsilon = kQ, wQ && "Scene" !== wQ.getClassName() ? (this._engine = wQ, this.defaultProjectionMatrix = oQ.c.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = wQ || vQ.d.LastCreatedScene, this._engine = this._scene.Wx(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.fC.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: CF,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: DF,
          previousItem: null,
          nextItem: null
        }, sF(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: dQ,
          previousItem: null,
          nextItem: null
        }, sF(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: SF,
          previousItem: null,
          nextItem: null
        }, sF(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: AF,
          previousItem: null,
          nextItem: null
        }, sF(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: iF,
          previousItem: null,
          nextItem: null
        }, sF(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: EQ,
          previousItem: null,
          nextItem: null
        }, sF(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: nQ,
          previousItem: null,
          nextItem: null
        }, sF(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, mQ || (this._colorProcessing = {
          process: ZQ,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: BQ,
          previousItem: null,
          nextItem: null
        }, sF(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: oF,
          previousItem: null,
          nextItem: null
        }, sF(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: mF,
          previousItem: null,
          nextItem: null
        }, sF(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: xF,
          previousItem: null,
          nextItem: null
        }, sF(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = DQ, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new fQ.d(this._engine)
        }, this._customWrappers[0].effect = LQ, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new HQ.d, this.updateFunction = QQ => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((QQ => {
            this._noiseTextureData = QQ
          })));
          const FQ = QQ === this._particles;
          for (let wQ = 0; wQ < QQ.length; wQ++) {
            const LQ = QQ[wQ];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const qQ = LQ.age;
            if (LQ.age += this._tempScaledUpdateSpeed, LQ.age > LQ.lifeTime) {
              const QQ = LQ.age - qQ,
                FQ = LQ.lifeTime - qQ;
              this._tempScaledUpdateSpeed = FQ * this._tempScaledUpdateSpeed / QQ, LQ.age = LQ.lifeTime
            }
            this._ratio = LQ.age / LQ.lifeTime, LQ._properties.directionScale = this._tempScaledUpdateSpeed;
            let oQ = this._updateQueueStart;
            for (; oQ;) oQ.process(LQ, this), oQ = oQ.nextItem;
            if (this._isAnimationSheetEnabled && !mQ && LQ.updateCellIndex(), LQ._inheritParticleInfoToSubEmitters(), LQ.age >= LQ.lifeTime) {
              if (this._emitFromParticle(LQ), LQ._properties.attachedSubEmitters) {
                for (const QQ of LQ._properties.attachedSubEmitters) QQ.particleSystem.disposeOnStop = !0, QQ.particleSystem.stop();
                LQ._properties.attachedSubEmitters = null
              }
              this.recycleParticle(LQ), FQ && wQ--
            } else;
          }
        }
      }
      serialize(QQ) {
        throw new Error("Method not implemented.")
      }
      clone(QQ, FQ) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = cF : this._lifeTimeCreation.process = CF
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: eF,
          previousItem: null,
          nextItem: null
        }, sF(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (rF(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(QQ) {
        this.targetStopDuration !== QQ && (this._targetStopDuration = QQ, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(QQ, FQ, wQ) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, QQ, FQ, wQ), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(QQ) {
        return this._removeFactorGradient(this._lifeTimeGradients, QQ), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(QQ, FQ, wQ) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = tF, this._sizeGradientProcessing = {
          process: MF,
          previousItem: null,
          nextItem: null
        }, OF(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, QQ, FQ, wQ), this
      }
      removeSizeGradient(QQ) {
        return this._removeFactorGradient(this._sizeGradients, QQ), 0 === this._sizeGradients?.length && (rF(this._sizeGradientProcessing), this._sizeCreation.process = AF), this
      }
      addColorRemapGradient(QQ, FQ, wQ) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, QQ, FQ, wQ), this
      }
      removeColorRemapGradient(QQ) {
        return this._removeFactorGradient(this._colorRemapGradients, QQ), this
      }
      addAlphaRemapGradient(QQ, FQ, wQ) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, QQ, FQ, wQ), this
      }
      removeAlphaRemapGradient(QQ) {
        return this._removeFactorGradient(this._alphaRemapGradients, QQ), this
      }
      addAngularSpeedGradient(QQ, FQ, wQ) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = WF, this._angularSpeedGradientProcessing = {
          process: yQ,
          previousItem: null,
          nextItem: null
        }, OF(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, QQ, FQ, wQ), this
      }
      removeAngularSpeedGradient(QQ) {
        return this._removeFactorGradient(this._angularSpeedGradients, QQ), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = iF, rF(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(QQ, FQ, wQ) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: FF,
          previousItem: null,
          nextItem: null
        }, sF(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: LF,
          previousItem: null,
          nextItem: null
        }, OF(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, QQ, FQ, wQ), this
      }
      removeVelocityGradient(QQ) {
        return this._removeFactorGradient(this._velocityGradients, QQ), 0 === this._velocityGradients?.length && (rF(this._velocityCreation), rF(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(QQ, FQ, wQ) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: wF,
          previousItem: null,
          nextItem: null
        }, sF(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: qF,
          previousItem: null,
          nextItem: null
        }, sF(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, QQ, FQ, wQ), this
      }
      removeLimitVelocityGradient(QQ) {
        return this._removeFactorGradient(this._limitVelocityGradients, QQ), 0 === this._limitVelocityGradients?.length && (rF(this._limitVelocityCreation), rF(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(QQ, FQ, wQ) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: uF,
          previousItem: null,
          nextItem: null
        }, OF(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: HF,
          previousItem: null,
          nextItem: null
        }, OF(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, QQ, FQ, wQ), this
      }
      removeDragGradient(QQ) {
        return this._removeFactorGradient(this._dragGradients, QQ), 0 === this._dragGradients?.length && (rF(this._dragCreation), rF(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(QQ, FQ, wQ) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, QQ, FQ, wQ), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(QQ) {
        return this._removeFactorGradient(this._startSizeGradients, QQ), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const QQ = new Uint8Array(4 * this._rawTextureWidth),
          FQ = uQ.i.Color3[0];
        for (let wQ = 0; wQ < this._rawTextureWidth; wQ++) {
          const qQ = wQ / this._rawTextureWidth;
          LQ.k.GetCurrentGradient(qQ, this._rampGradients, ((LQ, qQ, oQ) => {
            uQ.b.LerpToRef(LQ.color, qQ.color, oQ, FQ), QQ[4 * wQ] = 255 * FQ.r, QQ[4 * wQ + 1] = 255 * FQ.g, QQ[4 * wQ + 2] = 255 * FQ.b, QQ[4 * wQ + 3] = 255
          }))
        }
        this._rampGradientsTexture = kQ.c.CreateRGBATexture(QQ, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((QQ, FQ) => QQ.gradient < FQ.gradient ? -1 : QQ.gradient > FQ.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(QQ, FQ) {
        this._rampGradients || (this._rampGradients = []);
        const wQ = new LQ.f(QQ, FQ);
        return this._rampGradients.push(wQ), this._syncRampGradientTexture(), this
      }
      removeRampGradient(QQ) {
        return this._removeGradientAndTexture(QQ, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(QQ, FQ, wQ) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = gQ, this._colorProcessing.process = PQ);
        const qQ = new LQ.e(QQ, FQ, wQ);
        return this._colorGradients.push(qQ), this._colorGradients.sort(((QQ, FQ) => QQ.gradient < FQ.gradient ? -1 : QQ.gradient > FQ.gradient ? 1 : 0)), this
      }
      removeColorGradient(QQ) {
        if (!this._colorGradients) return this;
        let FQ = 0;
        for (const wQ of this._colorGradients) {
          if (wQ.gradient === QQ) {
            this._colorGradients.splice(FQ, 1);
            break
          }
          FQ++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = EQ, this._colorProcessing.process = ZQ), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const QQ of this._drawWrappers)
            if (QQ)
              for (const FQ of QQ) FQ?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(QQ, FQ, wQ, LQ, qQ) {
        return qQ[4 * (((QQ = .5 * Math.abs(QQ) + .5) * wQ % wQ | 0) + ((FQ = .5 * Math.abs(FQ) + .5) * LQ % LQ | 0) * wQ)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const QQ = this._engine,
          FQ = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * FQ), this._vertexBuffer = new DQ.c(QQ, this._vertexData, !0, FQ);
        let wQ = 0;
        const LQ = this._vertexBuffer.createVertexBuffer(DQ.h.PositionKind, wQ, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[DQ.h.PositionKind] = LQ, wQ += 3;
        const qQ = this._vertexBuffer.createVertexBuffer(DQ.h.ColorKind, wQ, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[DQ.h.ColorKind] = qQ, wQ += 4;
        const oQ = this._vertexBuffer.createVertexBuffer("angle", wQ, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = oQ, wQ += 1;
        const kQ = this._vertexBuffer.createVertexBuffer("size", wQ, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = kQ, wQ += 2, this._isAnimationSheetEnabled) {
          const QQ = this._vertexBuffer.createVertexBuffer("cellIndex", wQ, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = QQ, wQ += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const QQ = this._vertexBuffer.createVertexBuffer("direction", wQ, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = QQ, wQ += 3
        }
        if (this._useRampGradients) {
          const QQ = this._vertexBuffer.createVertexBuffer("remapData", wQ, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = QQ, wQ += 4
        }
        let vQ;
        if (this._useInstancing) {
          const FQ = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new DQ.c(QQ, FQ, !1, 2), vQ = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else vQ = this._vertexBuffer.createVertexBuffer("offset", wQ, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = vQ, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const QQ = [],
          FQ = [];
        let wQ = 0;
        for (let LQ = 0; LQ < this._capacity; LQ++) QQ.push(wQ), QQ.push(wQ + 1), QQ.push(wQ + 2), QQ.push(wQ), QQ.push(wQ + 2), QQ.push(wQ + 3), FQ.push(wQ, wQ + 1, wQ + 1, wQ + 2, wQ + 2, wQ + 3, wQ + 3, wQ, wQ, wQ + 3), wQ += 4;
        this._indexBuffer = this._engine.createIndexBuffer(QQ), this._linesIndexBuffer = this._engine.createIndexBuffer(FQ)
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (QQ) return this.startDelay = QQ, void setTimeout((() => {
          this.start(0)
        }), QQ);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const QQ = this.noiseTexture;
          if (QQ && QQ.onGeneratedObservable) QQ.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let FQ = 0; FQ < this.preWarmCycles; FQ++) this.animate(!0), QQ.render()
            }))
          }));
          else
            for (let FQ = 0; FQ < this.preWarmCycles; FQ++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(QQ))
      }
      _postStop(QQ) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(QQ, FQ, wQ, LQ) {
        let qQ = QQ * this._vertexBufferSize;
        const DQ = oQ.k.Ox[0].Qs(this._scene?.floatingOriginOffset || oQ.p.ZeroReadOnly);
        if (this._vertexData[qQ++] = FQ.position.x + this.worldOffset.x - DQ.x, this._vertexData[qQ++] = FQ.position.y + this.worldOffset.y - DQ.y, this._vertexData[qQ++] = FQ.position.z + this.worldOffset.z - DQ.z, this._vertexData[qQ++] = FQ.color.r, this._vertexData[qQ++] = FQ.color.g, this._vertexData[qQ++] = FQ.color.b, this._vertexData[qQ++] = FQ.color.a, this._vertexData[qQ++] = FQ.angle, this._vertexData[qQ++] = FQ.scale.x * FQ.size, this._vertexData[qQ++] = FQ.scale.y * FQ.size, this._isAnimationSheetEnabled && (this._vertexData[qQ++] = FQ.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[qQ++] = FQ.direction.x, this._vertexData[qQ++] = FQ.direction.y, this._vertexData[qQ++] = FQ.direction.z);
        else if (FQ._properties.initialDirection) {
          let QQ = FQ._properties.initialDirection;
          this.isLocal && (oQ.p.TransformNormalToRef(QQ, this._emitterWorldMatrix, oQ.k.Ox[0]), QQ = oQ.k.Ox[0]), 0 === QQ.x && 0 === QQ.z && (QQ.x = .001), this._vertexData[qQ++] = QQ.x, this._vertexData[qQ++] = QQ.y, this._vertexData[qQ++] = QQ.z
        } else {
          let QQ = FQ.direction;
          this.isLocal && (oQ.p.TransformNormalToRef(QQ, this._emitterWorldMatrix, oQ.k.Ox[0]), QQ = oQ.k.Ox[0]), 0 === QQ.x && 0 === QQ.z && (QQ.x = .001), this._vertexData[qQ++] = QQ.x, this._vertexData[qQ++] = QQ.y, this._vertexData[qQ++] = QQ.z
        }
        this._useRampGradients && FQ.remapData && (this._vertexData[qQ++] = FQ.remapData.x, this._vertexData[qQ++] = FQ.remapData.y, this._vertexData[qQ++] = FQ.remapData.z, this._vertexData[qQ++] = FQ.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === wQ ? wQ = this._epsilon : 1 === wQ && (wQ = 1 - this._epsilon), 0 === LQ ? LQ = this._epsilon : 1 === LQ && (LQ = 1 - this._epsilon)), this._vertexData[qQ++] = wQ, this._vertexData[qQ] = LQ)
      }
      _prepareParticle(QQ) {}
      _createNewOnes(QQ) {
        let FQ;
        for (let wQ = 0; wQ < QQ && this._particles.length !== this._capacity; wQ++) {
          FQ = this._createParticle(), this._particles.push(FQ);
          let QQ = this._createQueueStart;
          for (; QQ;) QQ.process(FQ, this), QQ = QQ.nextItem;
          FQ._inheritParticleInfoToSubEmitters()
        }
      }
      _update(QQ) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const QQ = this.emitter;
          this._emitterWorldMatrix = QQ.getWorldMatrix()
        } else {
          const QQ = this.emitter;
          this._emitterWorldMatrix = oQ.c.Translation(QQ.x, QQ.y, QQ.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(QQ)
      }
      static _GetAttributeNamesOrOptions() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = [DQ.h.PositionKind, DQ.h.ColorKind, "angle", "offset", "size"];
        return QQ && LQ.push("cellIndex"), FQ || LQ.push("direction"), wQ && LQ.push("remapData"), LQ
      }
      static _GetEffectCreationOptions() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, VQ.d)(LQ), QQ && LQ.push("particlesInfos"), FQ && LQ.push("logarithmicDepthConstant"), wQ && (LQ.push("vFogInfos"), LQ.push("vFogColor")), LQ
      }
      fillDefines(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, VQ.o)(this, this._scene, QQ), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && QQ.push("#define FOG")), this._isAnimationSheetEnabled && QQ.push("#define ANIMATESHEET"), this.useLogarithmicDepth && QQ.push("#define LOGARITHMICDEPTH"), FQ === CQ.BLENDMODE_MULTIPLY && QQ.push("#define BLENDMULTIPLYMODE"), this.isLocal && QQ.push("#define LOCAL"), this._useRampGradients && QQ.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (QQ.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            QQ.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            QQ.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && QQ.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            QQ.push("#define BILLBOARDMODE_ALL")
        }
        wQ && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), QQ.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(QQ, FQ, wQ) {
        FQ.push(...UF._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), QQ.push(...UF._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), wQ.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, JQ.e)(QQ, this._imageProcessingConfigurationDefines), (0, JQ.c)(wQ, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(QQ) {
        var FQ;
        const wQ = this._getCustomDrawWrapper(QQ);
        if (wQ?.effect) return wQ;
        const LQ = [];
        this.fillDefines(LQ, QQ);
        const oQ = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          DQ = IF.b._PrepareStringDefines(oQ, LQ),
          kQ = DQ ? IF.b.GetConfiguration(oQ) : void 0;
        let vQ = this._drawWrappers[oQ];
        vQ || (vQ = this._drawWrappers[oQ] = [], 0 === oQ || this._renderPassObserver || (this._renderPassObserver = ((FQ = this._engine)._onReleaseRenderPassObservable ?? (FQ._onReleaseRenderPassObservable = new qQ.e)).add((QQ => {
          const FQ = this._drawWrappers[QQ];
          if (FQ) {
            for (const QQ of FQ) QQ?.dispose();
            delete this._drawWrappers[QQ]
          }
        }))));
        let mQ = vQ[QQ];
        mQ || (mQ = new fQ.d(this._engine), mQ.drawContext && (mQ.drawContext.useInstancing = this._useInstancing), vQ[QQ] = mQ);
        const uQ = LQ.join("\n");
        if (mQ.defines !== uQ) {
          const QQ = [],
            FQ = [],
            wQ = [];
          this.fillUniformsAttributesAndSamplerNames(FQ, QQ, wQ), DQ && (FQ.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== kQ?.defines.PREPASS_LOCAL_POSITION_INDEX && FQ.push("inverseEmitterWM", "geometryWorldOffset")), mQ.setEffect(this._engine.createEffect("particles", {
            attributes: QQ,
            uniformsNames: FQ,
            samplers: wQ,
            defines: uQ,
            shaderLanguage: this._shaderLanguage,
            multiTarget: DQ,
            indexParameters: DQ ? {
              buffersCount: kQ?._mrtCount ?? 0
            } : void 0
          }, this._engine), uQ)
        }
        return mQ
      }
      _bindGeometryRendering(QQ) {
        const FQ = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          wQ = IF.b.GetConfiguration(FQ);
        if (!wQ?._defines) return;
        QQ.setFloat("objectId", 0), QQ.setInt("meshBlendTag", 0);
        const LQ = this._scene?.activeCamera;
        if (QQ.setFloat2("cameraInfo", LQ?.minZ ?? 0, LQ?.maxZ ?? 1), this.isLocal && void 0 !== wQ.defines.PREPASS_LOCAL_POSITION_INDEX) {
          QQ.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const FQ = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || oQ.p.ZeroReadOnly, oQ.k.Ox[0]);
          QQ.setVector3("geometryWorldOffset", FQ)
        }
      }
      animate() {
        let QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!FQ && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (FQ ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) QQ = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const FQ = this._calculateEmitRate();
            QQ = FQ * this._scaledUpdateSpeed | 0, this._newPartsExcess += FQ * this._scaledUpdateSpeed - QQ
          }
          if (this._newPartsExcess > 1 && (QQ += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? QQ = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(QQ), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !FQ) {
            let QQ = 0;
            for (let FQ = 0; FQ < this._particles.length; FQ++) {
              const wQ = this._particles[FQ];
              this._appendParticleVertices(QQ, wQ), QQ += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const QQ = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  FQ = this._particles.length;
                FQ < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, FQ * QQ, this._fixedCapacityHighWaterMark * QQ), this._fixedCapacityHighWaterMark = FQ, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const QQ = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * QQ), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let QQ = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const FQ = this._actualFrame / this.targetStopDuration;
          LQ.k.GetCurrentGradient(FQ, this._emitRateGradients, ((FQ, wQ, LQ) => {
            FQ !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = wQ.getFactor(), this._currentEmitRateGradient = FQ), QQ = (0, YQ.Lerp)(this._currentEmitRate1, this._currentEmitRate2, LQ)
          }))
        }
        return QQ
      }
      _appendParticleVertices(QQ, FQ) {
        this._appendParticleVertex(QQ++, FQ, 0, 0), this._useInstancing || (this._appendParticleVertex(QQ++, FQ, 1, 0), this._appendParticleVertex(QQ++, FQ, 1, 1), this._appendParticleVertex(QQ, FQ, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !UF.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([wQ.e(337).then((() => wQ(60676))), wQ.e(331).then((() => wQ(60680)))])) : await Promise.all([wQ.e(320).then((() => wQ(60684))), Promise.all([wQ.e(313), wQ.e(349)]).then((() => wQ(60691)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== CQ.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(CQ.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(CQ.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(QQ) {
        const FQ = this._getWrapper(QQ),
          wQ = FQ.effect,
          LQ = this._engine;
        LQ.enableEffect(FQ);
        const qQ = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        wQ.setTexture("diffuseSampler", this.particleTexture), wQ.setMatrix("view", qQ);
        const DQ = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (wQ.setMatrix("projection", DQ), this._isAnimationSheetEnabled && this.particleTexture) {
          const QQ = this.particleTexture.getBaseSize();
          wQ.setFloat3("particlesInfos", this.spriteCellWidth / QQ.width, this.spriteCellHeight / QQ.height, this.spriteCellWidth / QQ.width)
        }
        if (wQ.setVector2("translationPivot", this.translationPivot), wQ.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const QQ = this._scene.activeCamera;
          wQ.setVector3("eyePosition", QQ.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), wQ.setTexture("rampSampler", this._rampGradientsTexture));
        const kQ = wQ.defines;
        this._scene && ((0, VQ.h)(wQ, this, this._scene), this.applyFog && (0, hQ.g)(this._scene, void 0, wQ)), kQ.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (qQ.invertToRef(oQ.k.Matrix[0]), wQ.setMatrix("invView", oQ.k.Matrix[0])), wQ._multiTarget && this._bindGeometryRendering(wQ), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? LQ.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, wQ) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, wQ)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? LQ.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, wQ) : LQ.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, wQ), this.useLogarithmicDepth && this._scene && (0, hQ.r)(kQ, wQ, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(wQ), this._setEngineBasedOnBlendMode(QQ), wQ._multiTarget && IF.b._BindZeroAlphaDiscard(LQ, wQ);
        let vQ = !1;
        try {
          IF.b._BindAttachmentsForEffect(LQ, wQ) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(wQ), this._useInstancing ? this._scene?.forceWireframe ? LQ.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : LQ.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? LQ.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : LQ.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), vQ = !0)
        } finally {
          IF.b._RestoreAttachments(LQ)
        }
        return vQ ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const QQ = this._engine;
        let FQ;
        return QQ.setState && (QQ.setState(!1), this.forceDepthWrite && QQ.setDepthWrite(!0)), FQ = this.blendMode === CQ.BLENDMODE_MULTIPLYADD ? this._render(CQ.BLENDMODE_MULTIPLY) + this._render(CQ.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), FQ
      }
      _onDispose() {}
      dispose() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), QQ && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), QQ && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(FQ, wQ), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const QQ = this._scene.fC.indexOf(this);
          QQ > -1 && this._scene.fC.splice(QQ, 1), this._scene._activeParticleSystems.dispose()
        }
        this.zN.notifyObservers(this), this.zN.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    UF.ForceGLSL = !1;
    var NF, TF = wQ(36741);
    ! function(QQ) {
      QQ[QQ.ATTACHED = 0] = "ATTACHED", QQ[QQ.END = 1] = "END"
    }(NF || (NF = {}));
    class KF {
      constructor(QQ) {
        if (this.particleSystem = QQ, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !QQ.emitter || !QQ.emitter.dispose) {
          const FQ = (0, TF.b)("BABYLON.AbstractMesh");
          QQ.emitter = new FQ("SubemitterSystemEmitter", QQ.iN()), QQ._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let QQ = this.particleSystem.emitter;
        if (QQ) {
          if (QQ instanceof oQ.p) QQ = QQ.clone();
          else if (-1 !== QQ.getClassName().indexOf("Mesh")) {
            QQ = new((0, TF.b)("BABYLON.Mesh"))("", QQ.iN()), QQ.isVisible = !1
          }
        } else QQ = new oQ.p;
        const FQ = new KF(this.particleSystem.clone(this.particleSystem.name, QQ));
        return FQ.particleSystem.name += "Clone", FQ.type = this.type, FQ.inheritDirection = this.inheritDirection, FQ.inheritedVelocityAmount = this.inheritedVelocityAmount, FQ.particleSystem._disposeEmitterOnDispose = !0, FQ.particleSystem.disposeOnStop = !0, FQ
      }
      serialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = {};
        return FQ.type = this.type, FQ.inheritDirection = this.inheritDirection, FQ.inheritedVelocityAmount = this.inheritedVelocityAmount, FQ.particleSystem = this.particleSystem.serialize(QQ), FQ
      }
      static _ParseParticleSystem(QQ, FQ, wQ) {
        throw (0, zQ.k)("ParseParticle")
      }
      static Parse(QQ, FQ, wQ) {
        const LQ = QQ.particleSystem,
          qQ = new KF(KF._ParseParticleSystem(LQ, FQ, wQ, !0));
        return qQ.type = QQ.type, qQ.inheritDirection = QQ.inheritDirection, qQ.inheritedVelocityAmount = QQ.inheritedVelocityAmount, qQ.particleSystem._isSubEmitter = !0, qQ
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var zF = wQ(39295),
      lF = wQ(39426);
    const jF = () => {};
    class aF {
      constructor() {
        this.particlePositionGenerator = jF, this.particleDestinationGenerator = jF, this.particleDirectionGenerator = jF
      }
      startDirectionFunction(QQ, FQ, wQ, LQ) {
        const qQ = oQ.k.Ox[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== jF) this.particleDirectionGenerator(-1, wQ, qQ);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== jF) {
          this.particleDestinationGenerator(-1, wQ, qQ);
          const QQ = oQ.k.Ox[1];
          qQ.subtractToRef(wQ.position, QQ), QQ.scaleToRef(1 / wQ.lifeTime, qQ)
        } else qQ.set(0, 0, 0);
        LQ ? FQ.Qs(qQ) : oQ.p.TransformNormalToRef(qQ, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, LQ) {
        const qQ = oQ.k.Ox[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== jF ? this.particlePositionGenerator(-1, wQ, qQ) : qQ.set(0, 0, 0), LQ ? FQ.Qs(qQ) : oQ.p.TransformCoordinatesToRef(qQ, QQ, FQ)
      }
      clone() {
        const QQ = new aF;
        return bQ.b.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {}
      buildUniformLayout(QQ) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.particlePositionGenerator = this.particlePositionGenerator, QQ.particleDestinationGenerator = this.particleDestinationGenerator, QQ
      }
      parse(QQ) {
        QQ.particlePositionGenerator && (this.particlePositionGenerator = QQ.particlePositionGenerator), QQ.particleDestinationGenerator && (this.particleDestinationGenerator = QQ.particleDestinationGenerator)
      }
    }
    const XF = oQ.p.Zero(),
      fF = oQ.p.Zero(),
      VF = oQ.p.Zero();
    class hF {
      constructor() {
        this.strength = 0, this.position = oQ.p.Zero()
      }
      _processParticle(QQ, FQ) {
        this.position.subtractToRef(QQ.position, XF);
        const wQ = XF.lengthSquared() + 1;
        XF.normalize().scaleToRef(this.strength / wQ, fF), fF.scaleToRef(FQ._tempScaledUpdateSpeed, VF), QQ.direction.addInPlace(VF)
      }
      serialize() {
        return {
          position: this.position.RLQ(),
          strength: this.strength
        }
      }
    }
    const JF = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class EF extends UF {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = QQ => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const FQ = Math.floor(Math.random() * this._subEmitters.length);
          for (const wQ of this._subEmitters[FQ])
            if (1 === wQ.type) {
              const FQ = wQ.clone();
              QQ._inheritParticleInfoToSubEmitter(FQ), FQ.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(FQ.particleSystem), FQ.particleSystem.start()
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
      set flowMap(QQ) {
        this._flowMap !== QQ && (this._flowMap = QQ, this._flowMapUpdate && (rF(this._flowMapUpdate), this._flowMapUpdate = null), QQ && (this._flowMapUpdate = {
          process: QQ => {
            const FQ = this.iN()?.getTransformMatrix();
            this._flowMap._processParticle(QQ, this.flowMapStrength * this._tempScaledUpdateSpeed, FQ)
          },
          previousItem: null,
          nextItem: null
        }, sF(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(QQ) {
        super.addAttractor(QQ), 1 === this._attractors.length && (this._attractorUpdate = {
          process: QQ => {
            for (const FQ of this._attractors) FQ._processParticle(QQ, this)
          },
          previousItem: null,
          nextItem: null
        }, sF(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(QQ) {
        super.removeAttractor(QQ), 0 === this._attractors.length && this._attractorUpdate && rF(this._attractorUpdate)
      }
      start() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(QQ)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const QQ of this.subEmitters) QQ instanceof EF ? this._subEmitters.push([new KF(QQ)]) : QQ instanceof KF ? this._subEmitters.push([QQ]) : QQ instanceof Array && this._subEmitters.push(QQ)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const QQ of this.activeSubSystems) QQ.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const QQ = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== QQ && this._rootParticleSystem.activeSubSystems.splice(QQ, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(QQ) {
        QQ && this._stopSubEmitters()
      }
      _prepareParticle(QQ) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const FQ = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          QQ._properties.attachedSubEmitters = [];
          for (const wQ of FQ)
            if (0 === wQ.type) {
              const FQ = wQ.clone();
              QQ._properties.attachedSubEmitters.push(FQ), FQ.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), QQ && this.particles)
          for (const wQ of this.particles)
            if (wQ._properties.attachedSubEmitters)
              for (let QQ = wQ._properties.attachedSubEmitters.length - 1; QQ >= 0; QQ -= 1) wQ._properties.attachedSubEmitters[QQ].dispose();
        if (FQ && this.activeSubSystems)
          for (let wQ = this.activeSubSystems.length - 1; wQ >= 0; wQ -= 1) this.activeSubSystems[wQ].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let QQ = 0; QQ < this._subEmitters.length; QQ++)
            for (const FQ of this._subEmitters[QQ]) FQ.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(QQ, FQ, wQ, LQ) {
        let qQ;
        qQ = wQ instanceof zF.e ? null : wQ;
        const DQ = (0, TF.b)("BABYLON.Texture");
        if (DQ && qQ)
          if (QQ.texture) FQ.particleTexture = DQ.Parse(QQ.texture, qQ, LQ);
          else if (QQ.textureName) {
          const wQ = QQ.textureSettings;
          if (FQ.particleTexture = new DQ(LQ + QQ.textureName, qQ, !1, void 0 === QQ.invertY || QQ.invertY, wQ ? wQ.samplingMode : void 0), FQ.particleTexture.name = QQ.textureName, wQ) {
            const QQ = FQ.particleTexture;
            for (const FQ of JF) void 0 !== wQ[FQ] && (QQ[FQ] = wQ[FQ])
          }
        }
        if (QQ.emitterId || 0 === QQ.emitterId || void 0 !== QQ.emitter ? (QQ.emitterId || 0 === QQ.emitterId) && qQ ? (FQ.emitter = qQ.getLastMeshById(QQ.emitterId), FQ.emitter || (FQ.emitter = oQ.p.Zero())) : FQ.emitter = oQ.p.FromArray(QQ.emitter) : FQ.emitter = oQ.p.Zero(), FQ.isLocal = !!QQ.isLocal, void 0 !== QQ.renderingGroupId && (FQ.renderingGroupId = QQ.renderingGroupId), void 0 !== QQ.isBillboardBased && (FQ.isBillboardBased = QQ.isBillboardBased), void 0 !== QQ.billboardMode && (FQ.billboardMode = QQ.billboardMode), void 0 !== QQ.useLogarithmicDepth && (FQ.useLogarithmicDepth = QQ.useLogarithmicDepth), QQ.animations) {
          for (let wQ = 0; wQ < QQ.animations.length; wQ++) {
            const LQ = QQ.animations[wQ],
              qQ = (0, TF.b)("BABYLON.Animation");
            qQ && FQ.animations.push(qQ.Parse(LQ))
          }
          FQ.beginAnimationOnStart = QQ.beginAnimationOnStart, FQ.beginAnimationFrom = QQ.beginAnimationFrom, FQ.beginAnimationTo = QQ.beginAnimationTo, FQ.beginAnimationLoop = QQ.beginAnimationLoop
        }
        if (QQ.autoAnimate && qQ && qQ.beginAnimation(FQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), FQ.startDelay = 0 | QQ.startDelay, FQ.minAngularSpeed = QQ.minAngularSpeed, FQ.maxAngularSpeed = QQ.maxAngularSpeed, FQ.minSize = QQ.minSize, FQ.maxSize = QQ.maxSize, QQ.minScaleX && (FQ.minScaleX = QQ.minScaleX, FQ.maxScaleX = QQ.maxScaleX, FQ.minScaleY = QQ.minScaleY, FQ.maxScaleY = QQ.maxScaleY), void 0 !== QQ.preWarmCycles && (FQ.preWarmCycles = QQ.preWarmCycles, FQ.preWarmStepOffset = QQ.preWarmStepOffset), void 0 !== QQ.minInitialRotation && (FQ.minInitialRotation = QQ.minInitialRotation, FQ.maxInitialRotation = QQ.maxInitialRotation), FQ.minLifeTime = QQ.minLifeTime, FQ.maxLifeTime = QQ.maxLifeTime, FQ.minEmitPower = QQ.minEmitPower, FQ.maxEmitPower = QQ.maxEmitPower, FQ.emitRate = QQ.emitRate, FQ.gravity = oQ.p.FromArray(QQ.gravity), QQ.noiseStrength && (FQ.noiseStrength = oQ.p.FromArray(QQ.noiseStrength)), FQ.color1 = uQ.e.FromArray(QQ.color1), FQ.color2 = uQ.e.FromArray(QQ.color2), FQ.colorDead = uQ.e.FromArray(QQ.colorDead), FQ.updateSpeed = QQ.updateSpeed, FQ.targetStopDuration = QQ.targetStopDuration, FQ.blendMode = QQ.blendMode, QQ.colorGradients)
          for (const oQ of QQ.colorGradients) FQ.addColorGradient(oQ.gradient, uQ.e.FromArray(oQ.color1), oQ.color2 ? uQ.e.FromArray(oQ.color2) : void 0);
        if (QQ.rampGradients) {
          for (const wQ of QQ.rampGradients) FQ.addRampGradient(wQ.gradient, uQ.b.FromArray(wQ.color));
          FQ.useRampGradients = QQ.useRampGradients
        }
        if (QQ.colorRemapGradients)
          for (const oQ of QQ.colorRemapGradients) FQ.addColorRemapGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.alphaRemapGradients)
          for (const oQ of QQ.alphaRemapGradients) FQ.addAlphaRemapGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.sizeGradients)
          for (const oQ of QQ.sizeGradients) FQ.addSizeGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.angularSpeedGradients)
          for (const oQ of QQ.angularSpeedGradients) FQ.addAngularSpeedGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.velocityGradients)
          for (const oQ of QQ.velocityGradients) FQ.addVelocityGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.dragGradients)
          for (const oQ of QQ.dragGradients) FQ.addDragGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.emitRateGradients)
          for (const oQ of QQ.emitRateGradients) FQ.addEmitRateGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.startSizeGradients)
          for (const oQ of QQ.startSizeGradients) FQ.addStartSizeGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.lifeTimeGradients)
          for (const oQ of QQ.lifeTimeGradients) FQ.addLifeTimeGradient(oQ.gradient, void 0 !== oQ.factor1 ? oQ.factor1 : oQ.factor, oQ.factor2);
        if (QQ.limitVelocityGradients) {
          for (const wQ of QQ.limitVelocityGradients) FQ.addLimitVelocityGradient(wQ.gradient, void 0 !== wQ.factor1 ? wQ.factor1 : wQ.factor, wQ.factor2);
          FQ.limitVelocityDamping = QQ.limitVelocityDamping
        }
        if (QQ.noiseTexture && qQ) {
          const wQ = (0, TF.b)("BABYLON.ProceduralTexture");
          FQ.noiseTexture = wQ.Parse(QQ.noiseTexture, qQ, LQ)
        }
        let kQ;
        if (QQ.particleEmitterType) {
          switch (QQ.particleEmitterType.type) {
            case "SphereParticleEmitter":
              kQ = new tQ;
              break;
            case "SphereDirectedParticleEmitter":
              kQ = new eQ;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              kQ = new GQ;
              break;
            case "ConeDirectedParticleEmitter":
              kQ = new pQ;
              break;
            case "CylinderParticleEmitter":
              kQ = new MQ.e;
              break;
            case "CylinderDirectedParticleEmitter":
              kQ = new MQ.d;
              break;
            case "HemisphericParticleEmitter":
              kQ = new AQ;
              break;
            case "PointParticleEmitter":
              kQ = new xQ;
              break;
            case "MeshParticleEmitter":
              kQ = new cQ;
              break;
            case "CustomParticleEmitter":
              kQ = new aF;
              break;
            default:
              kQ = new HQ.d
          }
          kQ.parse(QQ.particleEmitterType, qQ)
        } else kQ = new HQ.d, kQ.parse(QQ, qQ);
        FQ.particleEmitterType = kQ, FQ.startSpriteCellID = QQ.startSpriteCellID, FQ.endSpriteCellID = QQ.endSpriteCellID, FQ.spriteCellLoop = QQ.spriteCellLoop ?? !0, FQ.spriteCellWidth = QQ.spriteCellWidth, FQ.spriteCellHeight = QQ.spriteCellHeight, FQ.spriteCellChangeSpeed = QQ.spriteCellChangeSpeed, FQ.spriteRandomStartCell = QQ.spriteRandomStartCell, FQ.disposeOnStop = QQ.disposeOnStop ?? !1, FQ.manualEmitCount = QQ.manualEmitCount ?? -1
      }
      static Parse(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        const DQ = QQ.name;
        let kQ, vQ, mQ = null,
          HQ = null;
        if (FQ instanceof zF.e ? kQ = FQ : (vQ = FQ, kQ = vQ.Wx()), QQ.customShader && (0, zQ.b)(kQ.createEffectForParticles)) {
          HQ = QQ.customShader;
          const FQ = HQ.shaderOptions.defines.length > 0 ? HQ.shaderOptions.defines.join("\n") : "";
          mQ = kQ.createEffectForParticles(HQ.shaderPath.fragmentElement, HQ.shaderOptions.uniforms, HQ.shaderOptions.samplers, FQ)
        }
        const bQ = new EF(DQ, qQ || QQ.MH, FQ, mQ, QQ.isAnimationSheetEnabled);
        if (bQ.customShader = HQ, bQ._rootUrl = wQ, QQ.id && (bQ.id = QQ.id), QQ.subEmitters) {
          bQ.subEmitters = [];
          for (const LQ of QQ.subEmitters) {
            const QQ = [];
            for (const qQ of LQ) QQ.push(KF.Parse(qQ, FQ, wQ));
            bQ.subEmitters.push(QQ)
          }
        }
        if (QQ.attractors)
          for (const uQ of QQ.attractors) {
            const QQ = new hF;
            QQ.position = oQ.p.FromArray(uQ.position), QQ.strength = uQ.strength, bQ.addAttractor(QQ)
          }
        return EF._Parse(QQ, bQ, FQ, wQ), QQ.textureMask && (bQ.textureMask = uQ.e.FromArray(QQ.textureMask)), QQ.worldOffset && (bQ.worldOffset = oQ.p.FromArray(QQ.worldOffset)), QQ.preventAutoStart && (bQ.preventAutoStart = QQ.preventAutoStart), QQ.metadata && (bQ.metadata = QQ.metadata), LQ || bQ.preventAutoStart || bQ.start(), bQ
      }
      serialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = {};
        if (EF._Serialize(FQ, this, QQ), FQ.textureMask = this.textureMask.RLQ(), FQ.customShader = this.customShader, FQ.preventAutoStart = this.preventAutoStart, FQ.worldOffset = this.worldOffset.RLQ(), this.metadata && (FQ.metadata = this.metadata), this.subEmitters) {
          FQ.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const wQ of this._subEmitters) {
            const LQ = [];
            for (const FQ of wQ) FQ.particleSystem.doNotSerialize || LQ.push(FQ.serialize(QQ));
            FQ.subEmitters.push(LQ)
          }
        }
        if (this._attractors && this._attractors.length) {
          FQ.attractors = [];
          for (const QQ of this._attractors) FQ.attractors.push(QQ.serialize())
        }
        return FQ
      }
      static _Serialize(QQ, FQ, wQ) {
        if (QQ.name = FQ.name, QQ.id = FQ.id, QQ.MH = FQ.getCapacity(), QQ.disposeOnStop = FQ.disposeOnStop, QQ.manualEmitCount = FQ.manualEmitCount, FQ.emitter.position) {
          const wQ = FQ.emitter;
          QQ.emitterId = wQ.id
        } else {
          const wQ = FQ.emitter;
          QQ.emitter = wQ.RLQ()
        }
        if (FQ.particleEmitterType && (QQ.particleEmitterType = FQ.particleEmitterType.serialize()), FQ.particleTexture)
          if (wQ) QQ.texture = FQ.particleTexture.serialize();
          else {
            const wQ = FQ.particleTexture;
            QQ.textureName = FQ.particleTexture.name, QQ.invertY = !!wQ._invertY;
            const LQ = {};
            for (const QQ of JF) LQ[QQ] = wQ[QQ];
            LQ.samplingMode = wQ.samplingMode, QQ.textureSettings = LQ
          } QQ.isLocal = FQ.isLocal, lF.c.AppendSerializedAnimations(FQ, QQ), QQ.beginAnimationOnStart = FQ.beginAnimationOnStart, QQ.beginAnimationFrom = FQ.beginAnimationFrom, QQ.beginAnimationTo = FQ.beginAnimationTo, QQ.beginAnimationLoop = FQ.beginAnimationLoop, QQ.startDelay = FQ.startDelay, QQ.renderingGroupId = FQ.renderingGroupId, QQ.isBillboardBased = FQ.isBillboardBased, QQ.billboardMode = FQ.billboardMode, QQ.minAngularSpeed = FQ.minAngularSpeed, QQ.maxAngularSpeed = FQ.maxAngularSpeed, QQ.minSize = FQ.minSize, QQ.maxSize = FQ.maxSize, QQ.minScaleX = FQ.minScaleX, QQ.maxScaleX = FQ.maxScaleX, QQ.minScaleY = FQ.minScaleY, QQ.maxScaleY = FQ.maxScaleY, QQ.minEmitPower = FQ.minEmitPower, QQ.maxEmitPower = FQ.maxEmitPower, QQ.minLifeTime = FQ.minLifeTime, QQ.maxLifeTime = FQ.maxLifeTime, QQ.emitRate = FQ.emitRate, QQ.gravity = FQ.gravity.RLQ(), QQ.noiseStrength = FQ.noiseStrength.RLQ(), QQ.color1 = FQ.color1.RLQ(), QQ.color2 = FQ.color2.RLQ(), QQ.colorDead = FQ.colorDead.RLQ(), QQ.updateSpeed = FQ.updateSpeed, QQ.targetStopDuration = FQ.targetStopDuration, QQ.blendMode = FQ.blendMode, QQ.preWarmCycles = FQ.preWarmCycles, QQ.preWarmStepOffset = FQ.preWarmStepOffset, QQ.minInitialRotation = FQ.minInitialRotation, QQ.maxInitialRotation = FQ.maxInitialRotation, QQ.startSpriteCellID = FQ.startSpriteCellID, QQ.spriteCellLoop = FQ.spriteCellLoop, QQ.endSpriteCellID = FQ.endSpriteCellID, QQ.spriteCellChangeSpeed = FQ.spriteCellChangeSpeed, QQ.spriteCellWidth = FQ.spriteCellWidth, QQ.spriteCellHeight = FQ.spriteCellHeight, QQ.spriteRandomStartCell = FQ.spriteRandomStartCell, QQ.isAnimationSheetEnabled = FQ.isAnimationSheetEnabled, QQ.useLogarithmicDepth = FQ.useLogarithmicDepth;
        const LQ = FQ.getColorGradients();
        if (LQ) {
          QQ.colorGradients = [];
          for (const FQ of LQ) {
            const wQ = {
              gradient: FQ.gradient,
              color1: FQ.color1.RLQ()
            };
            FQ.color2 ? wQ.color2 = FQ.color2.RLQ() : wQ.color2 = FQ.color1.RLQ(), QQ.colorGradients.push(wQ)
          }
        }
        const qQ = FQ.getRampGradients();
        if (qQ) {
          QQ.rampGradients = [];
          for (const FQ of qQ) {
            const wQ = {
              gradient: FQ.gradient,
              color: FQ.color.RLQ()
            };
            QQ.rampGradients.push(wQ)
          }
          QQ.useRampGradients = FQ.useRampGradients
        }
        const oQ = FQ.getColorRemapGradients();
        if (oQ) {
          QQ.colorRemapGradients = [];
          for (const FQ of oQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.colorRemapGradients.push(wQ)
          }
        }
        const DQ = FQ.getAlphaRemapGradients();
        if (DQ) {
          QQ.alphaRemapGradients = [];
          for (const FQ of DQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.alphaRemapGradients.push(wQ)
          }
        }
        const kQ = FQ.getSizeGradients();
        if (kQ) {
          QQ.sizeGradients = [];
          for (const FQ of kQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.sizeGradients.push(wQ)
          }
        }
        const vQ = FQ.getAngularSpeedGradients();
        if (vQ) {
          QQ.angularSpeedGradients = [];
          for (const FQ of vQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.angularSpeedGradients.push(wQ)
          }
        }
        const mQ = FQ.getVelocityGradients();
        if (mQ) {
          QQ.velocityGradients = [];
          for (const FQ of mQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.velocityGradients.push(wQ)
          }
        }
        const uQ = FQ.getDragGradients();
        if (uQ) {
          QQ.dragGradients = [];
          for (const FQ of uQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.dragGradients.push(wQ)
          }
        }
        const HQ = FQ.getEmitRateGradients();
        if (HQ) {
          QQ.emitRateGradients = [];
          for (const FQ of HQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.emitRateGradients.push(wQ)
          }
        }
        const bQ = FQ.getStartSizeGradients();
        if (bQ) {
          QQ.startSizeGradients = [];
          for (const FQ of bQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.startSizeGradients.push(wQ)
          }
        }
        const YQ = FQ.getLifeTimeGradients();
        if (YQ) {
          QQ.lifeTimeGradients = [];
          for (const FQ of YQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.lifeTimeGradients.push(wQ)
          }
        }
        const xQ = FQ.getLimitVelocityGradients();
        if (xQ) {
          QQ.limitVelocityGradients = [];
          for (const FQ of xQ) {
            const wQ = {
              gradient: FQ.gradient,
              factor1: FQ.factor1
            };
            void 0 !== FQ.factor2 ? wQ.factor2 = FQ.factor2 : wQ.factor2 = FQ.factor1, QQ.limitVelocityGradients.push(wQ)
          }
          QQ.limitVelocityDamping = FQ.limitVelocityDamping
        }
        FQ.noiseTexture && (QQ.noiseTexture = FQ.noiseTexture.serialize())
      }
      clone(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = {
          ...this._customWrappers
        };
        let qQ = null;
        const oQ = this._engine;
        if ((0, zQ.b)(oQ.createEffectForParticles) && null != this.customShader) {
          qQ = this.customShader;
          const QQ = qQ.shaderOptions.defines.length > 0 ? qQ.shaderOptions.defines.join("\n") : "",
            FQ = oQ.createEffectForParticles(qQ.shaderPath.fragmentElement, qQ.shaderOptions.uniforms, qQ.shaderOptions.samplers, QQ);
          LQ[0] ? LQ[0].effect = FQ : this.setCustomEffect(FQ, 0)
        }
        const DQ = this.serialize(wQ),
          kQ = !1 === wQ && this.particleTexture ? this.particleTexture.clone() : null;
        kQ && (DQ.textureName = void 0);
        const vQ = EF.Parse(DQ, this._scene || this._engine, this._rootUrl);
        return vQ.name = QQ, vQ.customShader = qQ, vQ._customWrappers = LQ, kQ && (vQ.particleTexture = kQ), void 0 === FQ && (FQ = this.emitter), this.noiseTexture && (vQ.noiseTexture = this.noiseTexture.clone()), vQ.emitter = FQ, this.preventAutoStart || vQ.start(), vQ
      }
    }
    EF.BILLBOARDMODE_Y = 2, EF.BILLBOARDMODE_ALL = 7, EF.BILLBOARDMODE_STRETCHED = 8, EF.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let nF = !1;
    nF || (nF = !0, KF._ParseParticleSystem = EF.Parse)
  },
  41048: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      SkyMaterial: () => GQ,
      _MaxColorValueForRenderTarget: () => MQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39426),
      DQ = wQ(36688),
      kQ = wQ(39711),
      vQ = wQ(39768),
      mQ = wQ(41005),
      uQ = wQ(40554),
      HQ = wQ(39491),
      bQ = wQ(36741),
      YQ = wQ(39790),
      xQ = wQ(39770),
      AQ = wQ(39754),
      tQ = wQ(39752);
    class eQ extends kQ.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function MQ(QQ) {
      switch (QQ) {
        case mQ.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case mQ.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let GQ = (() => {
      var QQ;
      let FQ, kQ, mQ, bQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ = vQ.e,
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [],
        fQ = [],
        VQ = [],
        hQ = [],
        JQ = [],
        EQ = [],
        nQ = [],
        gQ = [],
        PQ = [],
        ZQ = [],
        yQ = [],
        BQ = [],
        dQ = [],
        QF = [],
        FF = [],
        wF = [],
        LF = [],
        qF = [],
        oF = [],
        DF = [],
        kF = [],
        vF = [];
      return QQ = class extends IQ {
        constructor(QQ, FQ) {
          super(QQ, FQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, LQ.l)(this, UQ, 1), this.turbidity = ((0, LQ.l)(this, NQ), (0, LQ.l)(this, TQ, 10)), this.rayleigh = ((0, LQ.l)(this, KQ), (0, LQ.l)(this, zQ, 2)), this.mieCoefficient = ((0, LQ.l)(this, lQ), (0, LQ.l)(this, jQ, .005)), this.mieDirectionalG = ((0, LQ.l)(this, aQ), (0, LQ.l)(this, XQ, .8)), this.distance = ((0, LQ.l)(this, fQ), (0, LQ.l)(this, VQ, 500)), this.inclination = ((0, LQ.l)(this, hQ), (0, LQ.l)(this, JQ, .49)), this.azimuth = ((0, LQ.l)(this, EQ), (0, LQ.l)(this, nQ, .25)), this.sunPosition = ((0, LQ.l)(this, gQ), (0, LQ.l)(this, PQ, new DQ.Ox(0, 100, 0))), this.useSunPosition = ((0, LQ.l)(this, ZQ), (0, LQ.l)(this, yQ, !1)), this.cameraOffset = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, DQ.Ox.Zero())), this.up = ((0, LQ.l)(this, QF), (0, LQ.l)(this, FF, DQ.Ox.Up())), this.dithering = ((0, LQ.l)(this, wF), (0, LQ.l)(this, LF, !1)), this.rawHdrOutput = ((0, LQ.l)(this, qF), (0, LQ.l)(this, oF, !1)), this.cloudiness = ((0, LQ.l)(this, DF), (0, LQ.l)(this, kF, 0)), this._cameraPosition = ((0, LQ.l)(this, vF), DQ.Ox.Zero()), this._skyOrientation = new DQ.Quaternion
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
        isReadyForSubMesh(FQ, wQ) {
          const LQ = wQ._drawWrapper;
          if (this.isFrozen && LQ.effect && LQ._wasPreviouslyReady) return !0;
          wQ.materialDefines || (wQ.materialDefines = new eQ);
          const qQ = wQ.materialDefines,
            oQ = this.iN();
          if (this._isReadyForSubMesh(wQ)) return !0;
          if ((0, tQ.Y)(FQ, oQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, qQ, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, tQ.N)(FQ, qQ, !0, !1), qQ.IMAGEPROCESSINGPOSTPROCESS !== oQ.imageProcessingConfiguration.applyByPostProcess && qQ.markAsMiscDirty(), qQ.DITHER !== this.dithering && qQ.markAsMiscDirty(), qQ.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && qQ.markAsMiscDirty(), qQ.isDirty) {
            qQ.markAsProcessed(), oQ.resetCachedMaterial();
            const FQ = new xQ.d;
            qQ.FOG && FQ.addFallback(1, "FOG"), qQ.IMAGEPROCESSINGPOSTPROCESS = oQ.imageProcessingConfiguration.applyByPostProcess, qQ.DITHER = this.dithering, qQ.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const LQ = [uQ.d.PositionKind];
            qQ.VERTEXCOLOR && LQ.push(uQ.d.ColorKind);
            const DQ = "sky",
              kQ = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, AQ.d)(kQ);
            const vQ = qQ.toString();
            wQ.setEffect(oQ.Wx().createEffect(DQ, {
              attributes: LQ,
              uniformsNames: kQ,
              uniformBuffersNames: [],
              samplers: [],
              defines: vQ,
              fallbacks: FQ,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, oQ.Wx()), qQ, this._materialContext)
          }
          return !(!wQ.effect || !wQ.effect.isReady()) && (qQ._renderId = oQ.getRenderId(), LQ._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(QQ, FQ, wQ) {
          const LQ = this.iN(),
            qQ = wQ.materialDefines;
          if (!qQ) return;
          const oQ = wQ.effect;
          if (!oQ) return;
          this._activeEffect = oQ, this.bindOnlyWorldMatrix(QQ), this._activeEffect.setMatrix("viewProjection", LQ.getTransformMatrix()), this._mustRebind(LQ, oQ, wQ) && ((0, AQ.h)(oQ, this, LQ), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, tQ.r)(qQ, oQ, LQ)), LQ.fogEnabled && FQ.applyFog && LQ.fogMode !== HQ.d.FOGMODE_NONE && this._activeEffect.setMatrix("view", LQ.getViewMatrix()), (0, tQ.g)(LQ, FQ, this._activeEffect, this.rawHdrOutput);
          const kQ = LQ.activeCamera;
          if (kQ) {
            const QQ = kQ.getWorldMatrix();
            this._cameraPosition.x = QQ.m[12], this._cameraPosition.y = QQ.m[13], this._cameraPosition.z = QQ.m[14], this._activeEffect.setVector3("cameraPosition", DQ.TmpVectors.Ox[0].Qs(this._cameraPosition).gLQ(LQ.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const QQ = LQ.Wx()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", MQ(QQ?.texture?.type))
          }
          if (!this.useSunPosition) {
            const QQ = Math.PI * (this.inclination - .5),
              FQ = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(FQ) * Math.cos(QQ), this.sunPosition.y = this.distance * Math.sin(-QQ), this.sunPosition.z = this.distance * Math.sin(FQ) * Math.cos(QQ), DQ.Quaternion.FromUnitVectorsToRef(DQ.Ox.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(FQ, this._activeEffect, wQ)
        }
        getAnimatables() {
          return []
        }
        dispose(QQ) {
          super.dispose(QQ)
        }
        clone(FQ) {
          return oQ.c.Clone((() => new QQ(FQ, this.iN())), this)
        }
        serialize() {
          const QQ = super.serialize();
          return QQ.customType = "BABYLON.SkyMaterial", QQ
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(FQ, wQ, LQ) {
          return oQ.c.Parse((() => new QQ(FQ.name, wQ)), FQ, wQ, LQ)
        }
      }, (() => {
        const wQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(IQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], SQ = [(0, qQ.F)()], iQ = [(0, qQ.I)()], WQ = [(0, qQ.F)()], RQ = [(0, qQ.F)()], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "luminance" in QQ,
            get: QQ => QQ.luminance,
            set: (QQ, FQ) => {
              QQ.luminance = FQ
            }
          },
          metadata: wQ
        }, UQ, NQ), (0, LQ.i)(null, null, kQ, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "turbidity" in QQ,
            get: QQ => QQ.turbidity,
            set: (QQ, FQ) => {
              QQ.turbidity = FQ
            }
          },
          metadata: wQ
        }, TQ, KQ), (0, LQ.i)(null, null, mQ, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: QQ => "rayleigh" in QQ,
            get: QQ => QQ.rayleigh,
            set: (QQ, FQ) => {
              QQ.rayleigh = FQ
            }
          },
          metadata: wQ
        }, zQ, lQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mieCoefficient" in QQ,
            get: QQ => QQ.mieCoefficient,
            set: (QQ, FQ) => {
              QQ.mieCoefficient = FQ
            }
          },
          metadata: wQ
        }, jQ, aQ), (0, LQ.i)(null, null, GQ, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mieDirectionalG" in QQ,
            get: QQ => QQ.mieDirectionalG,
            set: (QQ, FQ) => {
              QQ.mieDirectionalG = FQ
            }
          },
          metadata: wQ
        }, XQ, fQ), (0, LQ.i)(null, null, pQ, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "distance" in QQ,
            get: QQ => QQ.distance,
            set: (QQ, FQ) => {
              QQ.distance = FQ
            }
          },
          metadata: wQ
        }, VQ, hQ), (0, LQ.i)(null, null, cQ, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: QQ => "inclination" in QQ,
            get: QQ => QQ.inclination,
            set: (QQ, FQ) => {
              QQ.inclination = FQ
            }
          },
          metadata: wQ
        }, JQ, EQ), (0, LQ.i)(null, null, CQ, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: QQ => "azimuth" in QQ,
            get: QQ => QQ.azimuth,
            set: (QQ, FQ) => {
              QQ.azimuth = FQ
            }
          },
          metadata: wQ
        }, nQ, gQ), (0, LQ.i)(null, null, SQ, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: QQ => "sunPosition" in QQ,
            get: QQ => QQ.sunPosition,
            set: (QQ, FQ) => {
              QQ.sunPosition = FQ
            }
          },
          metadata: wQ
        }, PQ, ZQ), (0, LQ.i)(null, null, iQ, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSunPosition" in QQ,
            get: QQ => QQ.useSunPosition,
            set: (QQ, FQ) => {
              QQ.useSunPosition = FQ
            }
          },
          metadata: wQ
        }, yQ, BQ), (0, LQ.i)(null, null, WQ, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "cameraOffset" in QQ,
            get: QQ => QQ.cameraOffset,
            set: (QQ, FQ) => {
              QQ.cameraOffset = FQ
            }
          },
          metadata: wQ
        }, dQ, QF), (0, LQ.i)(null, null, RQ, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: QQ => "up" in QQ,
            get: QQ => QQ.up,
            set: (QQ, FQ) => {
              QQ.up = FQ
            }
          },
          metadata: wQ
        }, FF, wF), (0, LQ.i)(null, null, OQ, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: QQ => "dithering" in QQ,
            get: QQ => QQ.dithering,
            set: (QQ, FQ) => {
              QQ.dithering = FQ
            }
          },
          metadata: wQ
        }, LF, qF), (0, LQ.i)(null, null, sQ, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: QQ => "rawHdrOutput" in QQ,
            get: QQ => QQ.rawHdrOutput,
            set: (QQ, FQ) => {
              QQ.rawHdrOutput = FQ
            }
          },
          metadata: wQ
        }, oF, DF), (0, LQ.i)(null, null, rQ, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "cloudiness" in QQ,
            get: QQ => QQ.cloudiness,
            set: (QQ, FQ) => {
              QQ.cloudiness = FQ
            }
          },
          metadata: wQ
        }, kF, vF), wQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wQ
        })
      })(), QQ._ShaderLoader = new YQ.b((() => [wQ.e(321).then((() => wQ(60695))), wQ.e(314).then((() => wQ(60699)))]), (() => [wQ.e(338).then((() => wQ(60704))), wQ.e(332).then((() => wQ(60709)))])), QQ
    })();
    (0, bQ.e)("BABYLON.SkyMaterial", GQ)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);