export const id = 312;
export const ids = [312];
export const modules = {
  41855: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(40371),
      qQ = XQ(41858);
    class TQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = XQ, this.twQ = [], this._maxBlockCapacity = WQ || 64, this._selectionContent = new wQ.d(1024), this._creationFunc = QQ
      }
      update(QQ, WQ, XQ) {
        qQ.b._CreateBlocks(QQ, WQ, XQ, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      hwQ(QQ) {
        for (let WQ = 0; WQ < this.blocks.length; WQ++) {
          this.blocks[WQ].addEntry(QQ)
        }
      }
      ZE(QQ) {
        for (let WQ = 0; WQ < this.blocks.length; WQ++) {
          this.blocks[WQ].removeEntry(QQ)
        }
      }
      select(QQ, WQ) {
        this._selectionContent.reset();
        for (let XQ = 0; XQ < this.blocks.length; XQ++) {
          this.blocks[XQ].select(QQ, this._selectionContent, WQ)
        }
        return WQ ? this._selectionContent.concat(this.twQ) : this._selectionContent.concatWithNoDuplicate(this.twQ), this._selectionContent
      }
      intersects(QQ, WQ, XQ) {
        this._selectionContent.reset();
        for (let wQ = 0; wQ < this.blocks.length; wQ++) {
          this.blocks[wQ].intersects(QQ, WQ, this._selectionContent, XQ)
        }
        return XQ ? this._selectionContent.concat(this.twQ) : this._selectionContent.concatWithNoDuplicate(this.twQ), this._selectionContent
      }
      intersectsRay(QQ) {
        this._selectionContent.reset();
        for (let WQ = 0; WQ < this.blocks.length; WQ++) {
          this.blocks[WQ].intersectsRay(QQ, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.twQ), this._selectionContent
      }
    }
    TQ.CreationFuncForMeshes = (QQ, WQ) => {
      const XQ = QQ.uC();
      !QQ.isBlocked && XQ.boundingBox.intersectsMinMax(WQ.EwQ, WQ.RwQ) && WQ.entries.push(QQ)
    }, TQ.CreationFuncForSubMeshes = (QQ, WQ) => {
      QQ.uC().boundingBox.intersectsMinMax(WQ.EwQ, WQ.RwQ) && WQ.entries.push(QQ)
    }
  },
  41858: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(37370),
      qQ = XQ(40564);
    class TQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.entries = [], this.owQ = new Array, this._capacity = XQ, this._depth = wQ, this._maxDepth = qQ, this._creationFunc = TQ, this._minPoint = QQ, this._maxPoint = WQ, this.owQ.push(QQ.clone()), this.owQ.push(WQ.clone()), this.owQ.push(QQ.clone()), this.owQ[2].x = WQ.x, this.owQ.push(QQ.clone()), this.owQ[3].y = WQ.y, this.owQ.push(QQ.clone()), this.owQ[4].z = WQ.z, this.owQ.push(WQ.clone()), this.owQ[5].z = QQ.z, this.owQ.push(WQ.clone()), this.owQ[6].x = QQ.x, this.owQ.push(WQ.clone()), this.owQ[7].y = QQ.y
      }
      get yJ() {
        return this._capacity
      }
      get EwQ() {
        return this._minPoint
      }
      get RwQ() {
        return this._maxPoint
      }
      addEntry(QQ) {
        if (this.blocks)
          for (let WQ = 0; WQ < this.blocks.length; WQ++) {
            this.blocks[WQ].addEntry(QQ)
          } else this._creationFunc(QQ, this), this.entries.length > this.yJ && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(QQ) {
        if (this.blocks) {
          for (let WQ = 0; WQ < this.blocks.length; WQ++) {
            this.blocks[WQ].removeEntry(QQ)
          }
          return
        }
        const WQ = this.entries.indexOf(QQ);
        WQ > -1 && this.entries.splice(WQ, 1)
      }
      addEntries(QQ) {
        for (let WQ = 0; WQ < QQ.length; WQ++) {
          const XQ = QQ[WQ];
          this.addEntry(XQ)
        }
      }
      select(QQ, WQ, XQ) {
        if (qQ.b.IsInFrustum(this.owQ, QQ)) {
          if (this.blocks) {
            for (let wQ = 0; wQ < this.blocks.length; wQ++) {
              this.blocks[wQ].select(QQ, WQ, XQ)
            }
            return
          }
          XQ ? WQ.concat(this.entries) : WQ.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(QQ, WQ, XQ, wQ) {
        if (qQ.b.IntersectsSphere(this._minPoint, this._maxPoint, QQ, WQ)) {
          if (this.blocks) {
            for (let qQ = 0; qQ < this.blocks.length; qQ++) {
              this.blocks[qQ].intersects(QQ, WQ, XQ, wQ)
            }
            return
          }
          wQ ? XQ.concat(this.entries) : XQ.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(QQ, WQ) {
        if (QQ.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let XQ = 0; XQ < this.blocks.length; XQ++) {
              this.blocks[XQ].intersectsRay(QQ, WQ)
            }
            return
          }
          WQ.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        TQ._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(QQ, WQ, XQ, qQ, zQ, sQ, FQ, PQ) {
        FQ.blocks = new Array;
        const gQ = new wQ.s((WQ.x - QQ.x) / 2, (WQ.y - QQ.y) / 2, (WQ.z - QQ.z) / 2);
        for (let wQ = 0; wQ < 2; wQ++)
          for (let WQ = 0; WQ < 2; WQ++)
            for (let JQ = 0; JQ < 2; JQ++) {
              const rQ = QQ.add(gQ.multiplyByFloats(wQ, WQ, JQ)),
                IQ = QQ.add(gQ.multiplyByFloats(wQ + 1, WQ + 1, JQ + 1)),
                jQ = new TQ(rQ, IQ, qQ, zQ + 1, sQ, PQ);
              jQ.addEntries(XQ), FQ.blocks.push(jQ)
            }
      }
    }
  },
  41865: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ
    });
    var wQ = XQ(40355),
      qQ = XQ(37370),
      TQ = XQ(40683),
      zQ = XQ(41813),
      sQ = XQ(40432),
      FQ = XQ(37392),
      PQ = XQ(41855);
    class gQ {
      constructor(QQ) {
        this.name = sQ.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new zQ.v(qQ.s.Zero(), new qQ.s(1, 1, 1)), (QQ = QQ || FQ.d.LastCreatedScene) && (this.cB = QQ, this.cB.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.cB.getActiveSubMeshCandidates = QQ => this.getActiveSubMeshCandidates(QQ), this.cB.getCollidingSubMeshCandidates = (QQ, WQ) => this.getCollidingSubMeshCandidates(QQ, WQ), this.cB.getIntersectingSubMeshCandidates = (QQ, WQ) => this.getIntersectingSubMeshCandidates(QQ, WQ))
      }
      register() {
        this.cB.onMeshRemovedObservable.add((QQ => {
          const WQ = this.cB.selectionOctree;
          if (void 0 !== WQ && null !== WQ) {
            const XQ = WQ.twQ.indexOf(QQ); - 1 !== XQ && WQ.twQ.splice(XQ, 1)
          }
        })), this.cB.onMeshImportedObservable.add((QQ => {
          const WQ = this.cB.selectionOctree;
          void 0 !== WQ && null !== WQ && WQ.hwQ(QQ)
        }))
      }
      getActiveMeshCandidates() {
        return this.cB.ZwQ?.select(this.cB.frustumPlanes) || this.cB._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(QQ) {
        if (QQ._submeshesOctree && QQ.useOctreeForRenderingSelection) {
          return QQ._submeshesOctree.select(this.cB.frustumPlanes)
        }
        return this.cB._getDefaultSubMeshCandidates(QQ)
      }
      getIntersectingSubMeshCandidates(QQ, WQ) {
        if (QQ._submeshesOctree && QQ.useOctreeForPicking) {
          zQ.v.TransformToRef(WQ, QQ.getWorldMatrix(), this._tempRay);
          return QQ._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.cB._getDefaultSubMeshCandidates(QQ)
      }
      getCollidingSubMeshCandidates(QQ, WQ) {
        if (QQ._submeshesOctree && QQ.useOctreeForCollisions) {
          const XQ = WQ._velocityWorldLength + Math.max(WQ._radius.x, WQ._radius.y, WQ._radius.z);
          return QQ._submeshesOctree.intersects(WQ._basePointWorld, XQ)
        }
        return this.cB._getDefaultSubMeshCandidates(QQ)
      }
      rebuild() {}
      dispose() {}
    }
    let JQ = !1;
    JQ || (JQ = !0, wQ.h.prototype.createOrUpdateSelectionOctree = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        XQ = this._getComponent(sQ.c.NAME_OCTREE);
      XQ || (XQ = new gQ(this), this.rwQ(XQ)), this.ZwQ || (this.ZwQ = new PQ.d(PQ.d.CreationFuncForMeshes, QQ, WQ));
      const wQ = this.getWorldExtends();
      return this.ZwQ.update(wQ.min, wQ.max, this.meshes), this.ZwQ
    }, Object.defineProperty(wQ.h.prototype, "selectionOctree", {
      get: function() {
        return this.ZwQ
      },
      enumerable: !0,
      configurable: !0
    }), TQ.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const XQ = this.sE();
      let wQ = XQ._getComponent(sQ.c.NAME_OCTREE);
      wQ || (wQ = new gQ(XQ), XQ.rwQ(wQ)), this._submeshesOctree || (this._submeshesOctree = new PQ.d(PQ.d.CreationFuncForSubMeshes, QQ, WQ)), this.computeWorldMatrix(!0);
      const qQ = this.uC().boundingBox;
      return this._submeshesOctree.update(qQ.minimumWorld, qQ.maximumWorld, this.ZD), this._submeshesOctree
    })
  },
  41813: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => iQ,
      c: () => BQ,
      d: () => jQ,
      h: () => IQ,
      l: () => lQ,
      o: () => aQ,
      r: () => vQ,
      s: () => HQ,
      t: () => dQ,
      v: () => JQ
    });
    var wQ = XQ(37374),
      qQ = XQ(37370),
      TQ = XQ(37379),
      zQ = XQ(40557),
      sQ = XQ(40402),
      FQ = XQ(37392),
      PQ = XQ(40462);
    const gQ = {
      internalPickerForMesh: void 0
    };
    class JQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wQ.b;
        this.origin = QQ, this.direction = WQ, this.length = XQ, this.epsilon = qQ
      }
      clone() {
        return new JQ(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const wQ = JQ._TmpVector3[0].XQQ(QQ.x - XQ, QQ.y - XQ, QQ.z - XQ),
          qQ = JQ._TmpVector3[1].XQQ(WQ.x + XQ, WQ.y + XQ, WQ.z + XQ);
        let TQ, zQ, sQ, FQ, PQ = 0,
          gQ = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < wQ.x || this.origin.x > qQ.x) return !1
        } else if (TQ = 1 / this.direction.x, zQ = (wQ.x - this.origin.x) * TQ, sQ = (qQ.x - this.origin.x) * TQ, sQ === -1 / 0 && (sQ = 1 / 0), zQ > sQ && (FQ = zQ, zQ = sQ, sQ = FQ), PQ = Math.max(zQ, PQ), gQ = Math.min(sQ, gQ), PQ > gQ) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < wQ.y || this.origin.y > qQ.y) return !1
        } else if (TQ = 1 / this.direction.y, zQ = (wQ.y - this.origin.y) * TQ, sQ = (qQ.y - this.origin.y) * TQ, sQ === -1 / 0 && (sQ = 1 / 0), zQ > sQ && (FQ = zQ, zQ = sQ, sQ = FQ), PQ = Math.max(zQ, PQ), gQ = Math.min(sQ, gQ), PQ > gQ) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < wQ.z || this.origin.z > qQ.z) return !1
        } else if (TQ = 1 / this.direction.z, zQ = (wQ.z - this.origin.z) * TQ, sQ = (qQ.z - this.origin.z) * TQ, sQ === -1 / 0 && (sQ = 1 / 0), zQ > sQ && (FQ = zQ, zQ = sQ, sQ = FQ), PQ = Math.max(zQ, PQ), gQ = Math.min(sQ, gQ), PQ > gQ) return !1;
        return !0
      }
      intersectsBox(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(QQ.minimum, QQ.maximum, WQ)
      }
      intersectsSphere(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = QQ.center.x - this.origin.x,
          wQ = QQ.center.y - this.origin.y,
          qQ = QQ.center.z - this.origin.z,
          TQ = XQ * XQ + wQ * wQ + qQ * qQ,
          zQ = QQ.radius + WQ,
          sQ = zQ * zQ;
        if (TQ <= sQ) return !0;
        const FQ = XQ * this.direction.x + wQ * this.direction.y + qQ * this.direction.z;
        if (FQ < 0) return !1;
        return TQ - FQ * FQ <= sQ
      }
      intersectsTriangle(QQ, WQ, XQ) {
        const wQ = JQ._TmpVector3[0],
          TQ = JQ._TmpVector3[1],
          sQ = JQ._TmpVector3[2],
          FQ = JQ._TmpVector3[3],
          PQ = JQ._TmpVector3[4];
        WQ.subtractToRef(QQ, wQ), XQ.subtractToRef(QQ, TQ), qQ.s.CrossToRef(this.direction, TQ, sQ);
        const gQ = qQ.s.Dot(wQ, sQ);
        if (0 === gQ) return null;
        const rQ = 1 / gQ;
        this.origin.subtractToRef(QQ, FQ);
        const IQ = qQ.s.Dot(FQ, sQ) * rQ;
        if (IQ < -this.epsilon || IQ > 1 + this.epsilon) return null;
        qQ.s.CrossToRef(FQ, wQ, PQ);
        const jQ = qQ.s.Dot(this.direction, PQ) * rQ;
        if (jQ < -this.epsilon || IQ + jQ > 1 + this.epsilon) return null;
        const BQ = qQ.s.Dot(TQ, PQ) * rQ;
        return BQ > this.length || BQ < 0 ? null : new zQ.c(1 - IQ - jQ, IQ, BQ)
      }
      intersectsPlane(QQ) {
        let WQ;
        const XQ = qQ.s.Dot(QQ.normal, this.direction);
        if (Math.abs(XQ) < 9.99999997475243e-7) return null;
        {
          const wQ = qQ.s.Dot(QQ.normal, this.origin);
          return WQ = (-QQ.d - wQ) / XQ, WQ < 0 ? WQ < -9.99999997475243e-7 ? null : 0 : WQ
        }
      }
      intersectsAxis(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (QQ) {
          case "y": {
            const QQ = (this.origin.y - WQ) / this.direction.y;
            return QQ > 0 ? null : new qQ.s(this.origin.x + this.direction.x * -QQ, WQ, this.origin.z + this.direction.z * -QQ)
          }
          case "x": {
            const QQ = (this.origin.x - WQ) / this.direction.x;
            return QQ > 0 ? null : new qQ.s(WQ, this.origin.y + this.direction.y * -QQ, this.origin.z + this.direction.z * -QQ)
          }
          case "z": {
            const QQ = (this.origin.z - WQ) / this.direction.z;
            return QQ > 0 ? null : new qQ.s(this.origin.x + this.direction.x * -QQ, this.origin.y + this.direction.y * -QQ, WQ)
          }
          default:
            return null
        }
      }
      BqQ(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          TQ = arguments.length > 4 ? arguments[4] : void 0,
          zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const sQ = qQ.m.Matrix[0];
        return QQ.getWorldMatrix().invertToRef(sQ), this._tmpRay ? JQ.TransformToRef(this, sQ, this._tmpRay) : this._tmpRay = JQ.Transform(this, sQ), QQ.intersects(this._tmpRay, WQ, XQ, wQ, TQ, zQ)
      }
      intersectsMeshes(QQ, WQ, XQ) {
        XQ ? XQ.length = 0 : XQ = [];
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const qQ = this.BqQ(QQ[wQ], WQ);
          qQ.hit && XQ.push(qQ)
        }
        return XQ.sort(this._comparePickingInfo), XQ
      }
      _comparePickingInfo(QQ, WQ) {
        return QQ.distance < WQ.distance ? -1 : QQ.distance > WQ.distance ? 1 : 0
      }
      intersectionSegment(QQ, WQ, XQ) {
        const wQ = this.origin,
          TQ = qQ.m.vj[0],
          zQ = qQ.m.vj[1],
          sQ = qQ.m.vj[2],
          FQ = qQ.m.vj[3];
        WQ.subtractToRef(QQ, TQ), this.direction.scaleToRef(JQ._Rayl, sQ), wQ.addToRef(sQ, zQ), QQ.subtractToRef(wQ, FQ);
        const PQ = qQ.s.Dot(TQ, TQ),
          gQ = qQ.s.Dot(TQ, sQ),
          rQ = qQ.s.Dot(sQ, sQ),
          IQ = qQ.s.Dot(TQ, FQ),
          jQ = qQ.s.Dot(sQ, FQ),
          BQ = PQ * rQ - gQ * gQ;
        let yQ, VQ, DQ = BQ,
          pQ = BQ;
        BQ < JQ._Smallnum ? (yQ = 0, DQ = 1, VQ = jQ, pQ = rQ) : (yQ = gQ * jQ - rQ * IQ, VQ = PQ * jQ - gQ * IQ, yQ < 0 ? (yQ = 0, VQ = jQ, pQ = rQ) : yQ > DQ && (yQ = DQ, VQ = jQ + gQ, pQ = rQ)), VQ < 0 ? (VQ = 0, -IQ < 0 ? yQ = 0 : -IQ > PQ ? yQ = DQ : (yQ = -IQ, DQ = PQ)) : VQ > pQ && (VQ = pQ, -IQ + gQ < 0 ? yQ = 0 : -IQ + gQ > PQ ? yQ = DQ : (yQ = -IQ + gQ, DQ = PQ));
        const GQ = Math.abs(yQ) < JQ._Smallnum ? 0 : yQ / DQ,
          UQ = Math.abs(VQ) < JQ._Smallnum ? 0 : VQ / pQ,
          bQ = qQ.m.vj[4];
        sQ.scaleToRef(UQ, bQ);
        const vQ = qQ.m.vj[5];
        TQ.scaleToRef(GQ, vQ), vQ.addInPlace(FQ);
        const dQ = qQ.m.vj[6];
        vQ.subtractToRef(bQ, dQ);
        return UQ > 0 && UQ <= this.length && dQ.lengthSquared() < XQ * XQ ? vQ.length() : -1
      }
      update(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          JQ._RayDistant || (JQ._RayDistant = JQ.Zero()), JQ._RayDistant.unprojectRayToRef(QQ, WQ, XQ, wQ, qQ.e.IdentityReadOnly, zQ, sQ);
          const FQ = qQ.m.Matrix[0];
          TQ.invertToRef(FQ), JQ.TransformToRef(JQ._RayDistant, FQ, this)
        } else this.unprojectRayToRef(QQ, WQ, XQ, wQ, TQ, zQ, sQ);
        return this
      }
      static Zero() {
        return new JQ(qQ.s.Zero(), qQ.s.Zero())
      }
      static CreateNew(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        return JQ.Zero().update(QQ, WQ, XQ, wQ, qQ, TQ, zQ)
      }
      static CreateNewFromTo(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.e.IdentityReadOnly;
        const wQ = new JQ(new qQ.s(0, 0, 0), new qQ.s(0, 0, 0));
        return JQ.CreateFromToToRef(QQ, WQ, wQ, XQ)
      }
      static CreateFromToToRef(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qQ.e.IdentityReadOnly;
        XQ.origin.WH(QQ);
        const TQ = WQ.subtractToRef(QQ, XQ.direction),
          zQ = Math.sqrt(TQ.x * TQ.x + TQ.y * TQ.y + TQ.z * TQ.z);
        return XQ.length = zQ, XQ.direction.normalize(), JQ.TransformToRef(XQ, wQ, XQ)
      }
      static Transform(QQ, WQ) {
        const XQ = new JQ(new qQ.s(0, 0, 0), new qQ.s(0, 0, 0));
        return JQ.TransformToRef(QQ, WQ, XQ), XQ
      }
      static TransformToRef(QQ, WQ, XQ) {
        qQ.s.TransformCoordinatesToRef(QQ.origin, WQ, XQ.origin), qQ.s.TransformNormalToRef(QQ.direction, WQ, XQ.direction), XQ.length = QQ.length, XQ.epsilon = QQ.epsilon;
        const wQ = XQ.direction,
          TQ = wQ.length();
        if (0 !== TQ && 1 !== TQ) {
          const QQ = 1 / TQ;
          wQ.x *= QQ, wQ.y *= QQ, wQ.z *= QQ, XQ.length *= TQ
        }
        return XQ
      }
      unprojectRayToRef(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
        const PQ = qQ.m.Matrix[0];
        TQ.multiplyToRef(zQ, PQ), PQ.multiplyToRef(sQ, PQ), PQ.invert();
        const gQ = FQ.d.LastCreatedEngine,
          JQ = qQ.m.vj[0];
        JQ.x = QQ / XQ * 2 - 1, JQ.y = -(WQ / wQ * 2 - 1), JQ.z = gQ?.vwQ ? 1 : gQ?.isNDCHalfZRange ? 0 : -1;
        const rQ = qQ.m.vj[1].XQQ(JQ.x, JQ.y, 1 - 1e-8),
          IQ = qQ.m.vj[2],
          jQ = qQ.m.vj[3];
        qQ.s.TransformCoordinatesToRef(JQ, PQ, IQ), qQ.s.TransformCoordinatesToRef(rQ, PQ, jQ), this.origin.WH(IQ), jQ.subtractToRef(IQ, this.direction), this.direction.normalize()
      }
    }

    function rQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const zQ = JQ.Zero();
      return IQ(QQ, WQ, XQ, wQ, zQ, qQ, TQ), zQ
    }

    function IQ(QQ, WQ, XQ, wQ, TQ, zQ) {
      let sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const PQ = QQ.Uj();
      if (!zQ && !(zQ = QQ.activeCamera) && !(zQ = QQ.cameraToUseForPointers)) return QQ;
      const gQ = zQ.viewport,
        JQ = PQ.getRenderHeight(),
        {
          x: rQ,
          y: IQ,
          width: jQ,
          height: BQ
        } = gQ.toGlobal(PQ.getRenderWidth(), JQ),
        yQ = 1 / PQ.getHardwareScalingLevel();
      return WQ = WQ * yQ - rQ, XQ = XQ * yQ - (JQ - IQ - BQ), TQ.update(WQ, XQ, jQ, BQ, wQ || qQ.e.IdentityReadOnly, sQ ? qQ.e.IdentityReadOnly : zQ.getViewMatrix(), zQ.getProjectionMatrix(), FQ), QQ
    }

    function jQ(QQ, WQ, XQ, wQ) {
      const qQ = JQ.Zero();
      return BQ(QQ, WQ, XQ, qQ, wQ), qQ
    }

    function BQ(QQ, WQ, XQ, wQ, TQ) {
      if (!sQ.b) return QQ;
      const zQ = QQ.Uj();
      if (!TQ && !(TQ = QQ.activeCamera) && !(TQ = QQ.cameraToUseForPointers)) throw new Error("Active camera not set");
      const FQ = TQ.viewport,
        PQ = zQ.getRenderHeight(),
        {
          x: gQ,
          y: JQ,
          width: rQ,
          height: IQ
        } = FQ.toGlobal(zQ.getRenderWidth(), PQ),
        jQ = qQ.e.Identity(),
        BQ = 1 / zQ.getHardwareScalingLevel();
      return WQ = WQ * BQ - gQ, XQ = XQ * BQ - (PQ - JQ - IQ), wQ.update(WQ, XQ, rQ, IQ, jQ, jQ, TQ.getProjectionMatrix()), QQ
    }

    function yQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
      return VQ(QQ, XQ, wQ, WQ(wQ, XQ.enableDistantPicking), qQ, TQ, zQ, sQ)
    }

    function VQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
      const FQ = WQ.intersects(wQ, qQ, zQ, TQ, XQ, sQ);
      return FQ && FQ.hit ? !qQ && null != QQ && FQ.distance >= QQ.distance ? null : FQ : null
    }

    function DQ(QQ, WQ) {
      return "InstancedLinesMesh" === QQ || "LinesMesh" === QQ ? WQ.intersectionThreshold : 0
    }

    function pQ(QQ) {
      const WQ = QQ.getClassName();
      if ("GreasedLineMesh" === WQ) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const XQ = QQ.rawBoundingInfo;
      return {
        rawBoundingInfo: XQ,
        intersectionThreshold: XQ ? DQ(WQ, QQ) : 0
      }
    }

    function GQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ(XQ, WQ.enableDistantPicking);
      return TQ.intersectsSphere(wQ.mwQ, qQ) && TQ.intersectsBox(wQ.boundingBox, qQ) ? TQ : null
    }

    function UQ(QQ, WQ, XQ, wQ, TQ, zQ) {
      let FQ = null;
      const PQ = !!(QQ.activeCameras && QQ.activeCameras.length > 1 && QQ.cameraToUseForPointers !== QQ.activeCamera),
        JQ = QQ.cameraToUseForPointers || QQ.activeCamera,
        rQ = gQ.internalPickerForMesh || yQ,
        IQ = rQ === yQ;
      for (let sQ = 0; sQ < QQ.meshes.length; sQ++) {
        const gQ = QQ.meshes[sQ];
        if (XQ) {
          if (!XQ(gQ, -1)) continue
        } else if (!gQ.isEnabled() || !gQ.isVisible || !gQ.RB) continue;
        const jQ = PQ && gQ.isWorldMatrixCameraDependent(),
          BQ = gQ.computeWorldMatrix(jQ, JQ);
        if (gQ.hasThinInstances && gQ.SWQ) {
          const QQ = rQ(FQ, WQ, gQ, BQ, !0, !0, zQ);
          if (QQ) {
            if (TQ) return QQ;
            const {
              rawBoundingInfo: sQ,
              intersectionThreshold: PQ
            } = pQ(gQ), JQ = gQ._thinInstanceDataStorage.matrixData;
            if (JQ) {
              const QQ = qQ.m.Matrix[0],
                jQ = qQ.m.Matrix[1],
                yQ = Math.min(gQ.f_, JQ.length >> 4);
              for (let DQ = 0; DQ < yQ; DQ++) {
                if (XQ && !XQ(gQ, DQ)) continue;
                qQ.e.FromArrayToRef(JQ, DQ << 4, QQ), QQ.multiplyToRef(BQ, jQ);
                const yQ = IQ && sQ ? GQ(WQ, gQ, jQ, sQ, PQ) : null;
                if (IQ && sQ && !yQ) continue;
                const pQ = IQ && yQ ? VQ(FQ, gQ, jQ, yQ, wQ, TQ, zQ, !0) : rQ(FQ, WQ, gQ, jQ, wQ, TQ, zQ, !0);
                if (pQ && (FQ = pQ, FQ.thinInstanceIndex = DQ, wQ)) return FQ
              }
            }
          }
        } else {
          const QQ = rQ(FQ, WQ, gQ, BQ, wQ, TQ, zQ);
          if (QQ && (FQ = QQ, wQ)) return FQ
        }
      }
      return FQ || new sQ.b
    }

    function bQ(QQ, WQ, XQ, wQ) {
      if (!sQ.b) return null;
      const TQ = [],
        zQ = !!(QQ.activeCameras && QQ.activeCameras.length > 1 && QQ.cameraToUseForPointers !== QQ.activeCamera),
        FQ = QQ.cameraToUseForPointers || QQ.activeCamera,
        PQ = gQ.internalPickerForMesh || yQ,
        JQ = PQ === yQ;
      for (let sQ = 0; sQ < QQ.meshes.length; sQ++) {
        const gQ = QQ.meshes[sQ];
        if (XQ) {
          if (!XQ(gQ, -1)) continue
        } else if (!gQ.isEnabled() || !gQ.isVisible || !gQ.RB) continue;
        const rQ = zQ && gQ.isWorldMatrixCameraDependent(),
          IQ = gQ.computeWorldMatrix(rQ, FQ);
        if (gQ.hasThinInstances && gQ.SWQ) {
          if (PQ(null, WQ, gQ, IQ, !0, !0, wQ)) {
            const {
              rawBoundingInfo: QQ,
              intersectionThreshold: zQ
            } = pQ(gQ), sQ = gQ._thinInstanceDataStorage.matrixData;
            if (sQ) {
              const FQ = qQ.m.Matrix[0],
                rQ = qQ.m.Matrix[1],
                jQ = Math.min(gQ.f_, sQ.length >> 4);
              for (let BQ = 0; BQ < jQ; BQ++) {
                if (XQ && !XQ(gQ, BQ)) continue;
                qQ.e.FromArrayToRef(sQ, BQ << 4, FQ), FQ.multiplyToRef(IQ, rQ);
                const jQ = JQ && QQ ? GQ(WQ, gQ, rQ, QQ, zQ) : null;
                if (JQ && QQ && !jQ) continue;
                const yQ = JQ && jQ ? VQ(null, gQ, rQ, jQ, !1, !1, wQ, !0) : PQ(null, WQ, gQ, rQ, !1, !1, wQ, !0);
                yQ && (yQ.thinInstanceIndex = BQ, TQ.push(yQ))
              }
            }
          }
        } else {
          const QQ = PQ(null, WQ, gQ, IQ, !1, !1, wQ);
          QQ && TQ.push(QQ)
        }
      }
      return TQ
    }

    function vQ(QQ, WQ, XQ, wQ, TQ, zQ) {
      if (!sQ.b) return null;
      const FQ = UQ(QQ, (wQ => (QQ._tempPickingRay || (QQ._tempPickingRay = JQ.Zero()), IQ(QQ, WQ, XQ, wQ, QQ._tempPickingRay, zQ || null), QQ._tempPickingRay)), wQ, TQ, !0);
      return FQ && (FQ.ray = rQ(QQ, WQ, XQ, qQ.e.Identity(), zQ || null)), FQ
    }

    function dQ(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
      const FQ = UQ(QQ, ((wQ, qQ) => (QQ._tempPickingRay || (QQ._tempPickingRay = JQ.Zero()), IQ(QQ, WQ, XQ, wQ, QQ._tempPickingRay, zQ || null, !1, qQ), QQ._tempPickingRay)), wQ, TQ, !1, sQ);
      return FQ && (FQ.ray = rQ(QQ, WQ, XQ, qQ.e.Identity(), zQ || null)), FQ
    }

    function HQ(QQ, WQ, XQ, wQ, TQ) {
      const zQ = UQ(QQ, (XQ => (QQ._pickWithRayInverseMatrix || (QQ._pickWithRayInverseMatrix = qQ.e.Identity()), XQ.invertToRef(QQ._pickWithRayInverseMatrix), QQ._cachedRayForTransform || (QQ._cachedRayForTransform = JQ.Zero()), JQ.TransformToRef(WQ, QQ._pickWithRayInverseMatrix, QQ._cachedRayForTransform), QQ._cachedRayForTransform)), XQ, wQ, !1, TQ);
      return zQ && (zQ.ray = WQ), zQ
    }

    function aQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      return bQ(QQ, (wQ => rQ(QQ, WQ, XQ, wQ, qQ || null)), wQ, TQ)
    }

    function lQ(QQ, WQ, XQ, wQ) {
      return bQ(QQ, (XQ => (QQ._pickWithRayInverseMatrix || (QQ._pickWithRayInverseMatrix = qQ.e.Identity()), XQ.invertToRef(QQ._pickWithRayInverseMatrix), QQ._cachedRayForTransform || (QQ._cachedRayForTransform = JQ.Zero()), JQ.TransformToRef(WQ, QQ._pickWithRayInverseMatrix, QQ._cachedRayForTransform), QQ._cachedRayForTransform)), XQ, wQ)
    }

    function hQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        wQ = arguments.length > 3 ? arguments[3] : void 0,
        TQ = arguments.length > 4 ? arguments[4] : void 0;
      wQ || (wQ = QQ.getWorldMatrix()), WQ.length = XQ, TQ ? WQ.origin.WH(TQ) : WQ.origin.WH(QQ.position);
      const zQ = qQ.m.vj[2];
      zQ.set(0, 0, QQ._scene.useRightHandedSystem ? -1 : 1);
      const sQ = qQ.m.vj[3];
      return qQ.s.TransformNormalToRef(zQ, wQ, sQ), qQ.s.NormalizeToRef(sQ, WQ.direction), WQ
    }

    function iQ(QQ, WQ) {
      WQ && (WQ.prototype.getForwardRay = function() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        return hQ(this, new JQ(qQ.s.Zero(), qQ.s.Zero(), QQ), QQ, WQ, XQ)
      }, WQ.prototype.getForwardRayToRef = function(QQ) {
        return hQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), QQ && (PQ.c._IsPickingAvailable = !0, QQ.prototype.createPickingRay = function(QQ, WQ, XQ, wQ) {
        return rQ(this, QQ, WQ, XQ, wQ, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    JQ._TmpVector3 = (0, TQ.c)(6, qQ.s.Zero), JQ._RayDistant = JQ.Zero(), JQ._Smallnum = 1e-8, JQ._Rayl = 1e9
  },
  41804: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ.v
    });
    var wQ = XQ(40355),
      qQ = XQ(40487),
      TQ = XQ(41813);
    let zQ = !1;
    zQ || (zQ = !0, (0, TQ.b)(wQ.h, qQ.d), wQ.h.prototype.createPickingRayToRef = function(QQ, WQ, XQ, wQ, qQ) {
      let zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, TQ.h)(this, QQ, WQ, XQ, wQ, qQ, zQ, sQ)
    }, wQ.h.prototype.createPickingRayInCameraSpace = function(QQ, WQ, XQ) {
      return (0, TQ.d)(this, QQ, WQ, XQ)
    }, wQ.h.prototype.createPickingRayInCameraSpaceToRef = function(QQ, WQ, XQ, wQ) {
      return (0, TQ.c)(this, QQ, WQ, XQ, wQ)
    }, wQ.h.prototype.pickWithBoundingInfo = function(QQ, WQ, XQ, wQ, qQ) {
      return (0, TQ.r)(this, QQ, WQ, XQ, wQ, qQ)
    }, wQ.h.prototype.tr = function(QQ, WQ, XQ, wQ, qQ, zQ) {
      let sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, TQ.t)(this, QQ, WQ, XQ, wQ, qQ, zQ, sQ)
    }, wQ.h.prototype.pickWithRay = function(QQ, WQ, XQ, wQ) {
      return (0, TQ.s)(this, QQ, WQ, XQ, wQ)
    }, wQ.h.prototype.multiPick = function(QQ, WQ, XQ, wQ, qQ) {
      return (0, TQ.o)(this, QQ, WQ, XQ, wQ, qQ)
    }, wQ.h.prototype.multiPickWithRay = function(QQ, WQ, XQ) {
      return (0, TQ.l)(this, QQ, WQ, XQ)
    })
  },
  41815: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37370),
      zQ = XQ(40525),
      sQ = XQ(41824),
      FQ = XQ(40491),
      PQ = XQ(37418);
    let gQ = (() => {
        var QQ;
        let WQ, XQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ = sQ.e,
          BQ = [],
          yQ = [],
          VQ = [],
          DQ = [],
          pQ = [],
          GQ = [],
          UQ = [],
          bQ = [],
          vQ = [],
          dQ = [],
          HQ = [],
          aQ = [],
          lQ = [];
        return QQ = class extends jQ {
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
          constructor(QQ, WQ, XQ, qQ) {
            super(QQ, XQ, qQ), this._shadowFrustumSize = ((0, wQ.n)(this, BQ), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, wQ.n)(this, yQ, !0), this.autoCalcShadowZBounds = ((0, wQ.n)(this, VQ), (0, wQ.n)(this, DQ, !1)), this._orthoLeft = ((0, wQ.n)(this, pQ), (0, wQ.n)(this, GQ, Number.MAX_VALUE)), this._orthoRight = ((0, wQ.n)(this, UQ), (0, wQ.n)(this, bQ, Number.MIN_VALUE)), this._orthoTop = ((0, wQ.n)(this, vQ), (0, wQ.n)(this, dQ, Number.MIN_VALUE)), this._orthoBottom = ((0, wQ.n)(this, HQ), (0, wQ.n)(this, aQ, Number.MAX_VALUE)), (0, wQ.n)(this, lQ), this.position = WQ.scale(-1), this.direction = WQ
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return zQ.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(QQ, WQ, XQ) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(QQ) : this._setDefaultAutoExtendShadowProjectionMatrix(QQ, WQ, XQ)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(QQ) {
            const WQ = this.sE().activeCamera;
            TQ.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : WQ ? WQ.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : WQ ? WQ.maxZ : 1e4, QQ, this.sE().Uj().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(QQ, WQ, XQ) {
            const wQ = this.sE().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const QQ = TQ.s.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let wQ = Number.MAX_VALUE,
                qQ = -Number.MAX_VALUE;
              for (let zQ = 0; zQ < XQ.length; zQ++) {
                const sQ = XQ[zQ];
                if (!sQ) continue;
                const FQ = sQ.uC().boundingBox;
                for (let XQ = 0; XQ < FQ.vectorsWorld.length; XQ++) TQ.s.TransformCoordinatesToRef(FQ.vectorsWorld[XQ], WQ, QQ), QQ.x < this._orthoLeft && (this._orthoLeft = QQ.x), QQ.y < this._orthoBottom && (this._orthoBottom = QQ.y), QQ.x > this._orthoRight && (this._orthoRight = QQ.x), QQ.y > this._orthoTop && (this._orthoTop = QQ.y), this.autoCalcShadowZBounds && (QQ.z < wQ && (wQ = QQ.z), QQ.z > qQ && (qQ = QQ.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = wQ, this._shadowMaxZ = qQ)
            }
            const qQ = this._orthoRight - this._orthoLeft,
              zQ = this._orthoTop - this._orthoBottom,
              sQ = void 0 !== this.shadowMinZ ? this.shadowMinZ : wQ?.minZ || 0,
              FQ = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : wQ?.maxZ || 1e4,
              PQ = this.sE().Uj().vwQ;
            TQ.e.OrthoOffCenterLHToRef(this._orthoLeft - qQ * this.shadowOrthoScale, this._orthoRight + qQ * this.shadowOrthoScale, this._orthoBottom - zQ * this.shadowOrthoScale, this._orthoTop + zQ * this.shadowOrthoScale, PQ ? FQ : sQ, PQ ? sQ : FQ, QQ, this.sE().Uj().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(QQ, WQ) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, WQ), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, WQ), this)
          }
          transferToNodeMaterialEffect(QQ, WQ) {
            return this.computeTransformedInformation() ? (QQ.setFloat3(WQ, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (QQ.setFloat3(WQ, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(QQ) {
            const WQ = this._scene.Uj();
            return !WQ.vwQ && WQ.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(QQ) {
            const WQ = this._scene.Uj();
            return WQ.vwQ && WQ.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(QQ, WQ) {
            QQ["DIRLIGHT" + WQ] = !0
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(jQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)("orthoLeft")], JQ = [(0, qQ.I)("orthoRight")], rQ = [(0, qQ.I)("orthoTop")], IQ = [(0, qQ.I)("orthoBottom")], (0, wQ.k)(QQ, null, WQ, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: QQ => "shadowFrustumSize" in QQ,
              get: QQ => QQ.shadowFrustumSize
            },
            metadata: TQ
          }, null, BQ), (0, wQ.k)(QQ, null, XQ, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: QQ => "shadowOrthoScale" in QQ,
              get: QQ => QQ.shadowOrthoScale
            },
            metadata: TQ
          }, null, BQ), (0, wQ.k)(null, null, FQ, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: QQ => "autoUpdateExtends" in QQ,
              get: QQ => QQ.autoUpdateExtends,
              set: (QQ, WQ) => {
                QQ.autoUpdateExtends = WQ
              }
            },
            metadata: TQ
          }, yQ, VQ), (0, wQ.k)(null, null, PQ, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: QQ => "autoCalcShadowZBounds" in QQ,
              get: QQ => QQ.autoCalcShadowZBounds,
              set: (QQ, WQ) => {
                QQ.autoCalcShadowZBounds = WQ
              }
            },
            metadata: TQ
          }, DQ, pQ), (0, wQ.k)(null, null, gQ, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoLeft" in QQ,
              get: QQ => QQ._orthoLeft,
              set: (QQ, WQ) => {
                QQ._orthoLeft = WQ
              }
            },
            metadata: TQ
          }, GQ, UQ), (0, wQ.k)(null, null, JQ, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoRight" in QQ,
              get: QQ => QQ._orthoRight,
              set: (QQ, WQ) => {
                QQ._orthoRight = WQ
              }
            },
            metadata: TQ
          }, bQ, vQ), (0, wQ.k)(null, null, rQ, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoTop" in QQ,
              get: QQ => QQ._orthoTop,
              set: (QQ, WQ) => {
                QQ._orthoTop = WQ
              }
            },
            metadata: TQ
          }, dQ, HQ), (0, wQ.k)(null, null, IQ, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_orthoBottom" in QQ,
              get: QQ => QQ._orthoBottom,
              set: (QQ, WQ) => {
                QQ._orthoBottom = WQ
              }
            },
            metadata: TQ
          }, aQ, lQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      JQ = !1;
    JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_1", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.DirectionalLight", gQ))
  },
  41830: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => xW
    });
    var wQ = XQ(38986),
      qQ = XQ(37399),
      TQ = XQ(37370),
      zQ = XQ(40404),
      sQ = XQ(41832),
      FQ = XQ(37392),
      PQ = XQ(40538),
      gQ = XQ(37546),
      JQ = XQ(38989),
      rQ = XQ(38947),
      IQ = XQ(37404);
    class jQ {
      constructor() {
        this.direction1 = new TQ.s(0, 1, 0), this.direction2 = new TQ.s(0, 1, 0)
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = (0, IQ.RandomRange)(this.direction1.x, this.direction2.x),
          zQ = (0, IQ.RandomRange)(this.direction1.y, this.direction2.y),
          sQ = (0, IQ.RandomRange)(this.direction1.z, this.direction2.z);
        wQ ? WQ.XQQ(qQ, zQ, sQ) : TQ.s.TransformNormalFromFloatsToRef(qQ, zQ, sQ, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, wQ) {
        wQ ? WQ.XQQ(0, 0, 0) : TQ.s.TransformCoordinatesFromFloatsToRef(0, 0, 0, QQ, WQ)
      }
      clone() {
        const QQ = new jQ;
        return rQ.d.DeepCopy(this, QQ), QQ
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
        return QQ.type = this.getClassName(), QQ.direction1 = this.direction1.awQ(), QQ.direction2 = this.direction2.awQ(), QQ
      }
      parse(QQ) {
        TQ.s.FromArrayToRef(QQ.direction1, 0, this.direction1), TQ.s.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
    class BQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = QQ, this.radiusRange = WQ, this.directionRandomizer = XQ
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = XQ.position.subtract(QQ.getTranslation()).normalize(),
          zQ = (0, IQ.RandomRange)(0, this.directionRandomizer),
          sQ = (0, IQ.RandomRange)(0, this.directionRandomizer),
          FQ = (0, IQ.RandomRange)(0, this.directionRandomizer);
        qQ.x += zQ, qQ.y += sQ, qQ.z += FQ, qQ.normalize(), wQ ? WQ.WH(qQ) : TQ.s.TransformNormalFromFloatsToRef(qQ.x, qQ.y, qQ.z, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, wQ) {
        const qQ = this.radius - (0, IQ.RandomRange)(0, this.radius * this.radiusRange),
          zQ = (0, IQ.RandomRange)(0, 1),
          sQ = (0, IQ.RandomRange)(0, 2 * Math.PI),
          FQ = Math.acos(2 * zQ - 1),
          PQ = qQ * Math.cos(sQ) * Math.sin(FQ),
          gQ = qQ * Math.cos(FQ),
          JQ = qQ * Math.sin(sQ) * Math.sin(FQ);
        wQ ? WQ.XQQ(PQ, Math.abs(gQ), JQ) : TQ.s.TransformCoordinatesFromFloatsToRef(PQ, Math.abs(gQ), JQ, QQ, WQ)
      }
      clone() {
        const QQ = new BQ(this.radius, this.directionRandomizer);
        return rQ.d.DeepCopy(this, QQ), QQ
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
    class yQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = QQ, this.radiusRange = WQ, this.directionRandomizer = XQ
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = XQ.position.subtract(QQ.getTranslation()).normalize(),
          zQ = (0, IQ.RandomRange)(0, this.directionRandomizer),
          sQ = (0, IQ.RandomRange)(0, this.directionRandomizer),
          FQ = (0, IQ.RandomRange)(0, this.directionRandomizer);
        qQ.x += zQ, qQ.y += sQ, qQ.z += FQ, qQ.normalize(), wQ ? WQ.WH(qQ) : TQ.s.TransformNormalFromFloatsToRef(qQ.x, qQ.y, qQ.z, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, wQ) {
        const qQ = this.radius - (0, IQ.RandomRange)(0, this.radius * this.radiusRange),
          zQ = (0, IQ.RandomRange)(0, 1),
          sQ = (0, IQ.RandomRange)(0, 2 * Math.PI),
          FQ = Math.acos(2 * zQ - 1),
          PQ = qQ * Math.cos(sQ) * Math.sin(FQ),
          gQ = qQ * Math.cos(FQ),
          JQ = qQ * Math.sin(sQ) * Math.sin(FQ);
        wQ ? WQ.XQQ(PQ, gQ, JQ) : TQ.s.TransformCoordinatesFromFloatsToRef(PQ, gQ, JQ, QQ, WQ)
      }
      clone() {
        const QQ = new yQ(this.radius, this.directionRandomizer);
        return rQ.d.DeepCopy(this, QQ), QQ
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
    class VQ extends yQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new TQ.s(0, 1, 0),
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TQ.s(0, 1, 0);
        super(QQ), this.direction1 = WQ, this.direction2 = XQ
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = (0, IQ.RandomRange)(this.direction1.x, this.direction2.x),
          zQ = (0, IQ.RandomRange)(this.direction1.y, this.direction2.y),
          sQ = (0, IQ.RandomRange)(this.direction1.z, this.direction2.z);
        wQ ? WQ.XQQ(qQ, zQ, sQ) : TQ.s.TransformNormalFromFloatsToRef(qQ, zQ, sQ, QQ, WQ)
      }
      clone() {
        const QQ = new VQ(this.radius, this.direction1, this.direction2);
        return rQ.d.DeepCopy(this, QQ), QQ
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
        return QQ.direction1 = this.direction1.awQ(), QQ.direction2 = this.direction2.awQ(), QQ
      }
      parse(QQ) {
        super.parse(QQ), TQ.s.FromArrayToRef(QQ.direction1, 0, this.direction1), TQ.s.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
    var DQ = XQ(38945);
    class pQ {
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
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = XQ, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = WQ, this.radius = QQ
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = XQ.position.subtract(QQ.getTranslation()).normalize(),
          zQ = (0, IQ.RandomRange)(0, this.directionRandomizer),
          sQ = (0, IQ.RandomRange)(0, this.directionRandomizer),
          FQ = (0, IQ.RandomRange)(0, this.directionRandomizer);
        qQ.x += zQ, qQ.y += sQ, qQ.z += FQ, qQ.normalize(), wQ ? WQ.WH(qQ) : TQ.s.TransformNormalFromFloatsToRef(qQ.x, qQ.y, qQ.z, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, wQ) {
        const qQ = (0, IQ.RandomRange)(0, 2 * Math.PI);
        let zQ;
        this.emitFromSpawnPointOnly ? zQ = 1e-4 : (zQ = (0, IQ.RandomRange)(0, this.heightRange), zQ = 1 - zQ * zQ);
        let sQ = this._radius - (0, IQ.RandomRange)(0, this._radius * this.radiusRange);
        sQ *= zQ;
        const FQ = sQ * Math.sin(qQ),
          PQ = sQ * Math.cos(qQ),
          gQ = zQ * this._height;
        if (wQ) return WQ.x = FQ, WQ.y = gQ, void(WQ.z = PQ);
        TQ.s.TransformCoordinatesFromFloatsToRef(FQ, gQ, PQ, QQ, WQ)
      }
      clone() {
        const QQ = new pQ(this._radius, this._angle, this.directionRandomizer);
        return rQ.d.DeepCopy(this, QQ), QQ
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
    class GQ extends pQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TQ.s(0, 1, 0),
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TQ.s(0, 1, 0);
        super(QQ, WQ), this.direction1 = XQ, this.direction2 = wQ
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = (0, IQ.RandomRange)(this.direction1.x, this.direction2.x),
          zQ = (0, IQ.RandomRange)(this.direction1.y, this.direction2.y),
          sQ = (0, IQ.RandomRange)(this.direction1.z, this.direction2.z);
        wQ ? WQ.XQQ(qQ, zQ, sQ) : TQ.s.TransformNormalFromFloatsToRef(qQ, zQ, sQ, QQ, WQ)
      }
      clone() {
        const QQ = new GQ(this.radius, this.angle, this.direction1, this.direction2);
        return rQ.d.DeepCopy(this, QQ), QQ
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
        return QQ.direction1 = this.direction1.awQ(), QQ.direction2 = this.direction2.awQ(), QQ
      }
      parse(QQ) {
        super.parse(QQ), TQ.s.FromArrayToRef(QQ.direction1, 0, this.direction1), TQ.s.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
    class UQ {
      get mesh() {
        return this._mesh
      }
      set mesh(QQ) {
        this._mesh !== QQ && (this._mesh = QQ, QQ ? (this._indices = QQ.lwQ(), this._positions = QQ.getVerticesData(zQ.l.PositionKind), this._normals = QQ.getVerticesData(zQ.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = TQ.s.Zero(), this._mesh = null, this.direction1 = new TQ.s(0, 1, 0), this.direction2 = new TQ.s(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = QQ
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        if (this.useMeshNormalsForDirection && this._normals) return void TQ.s.TransformNormalToRef(this._storedNormal, QQ, WQ);
        const qQ = (0, IQ.RandomRange)(this.direction1.x, this.direction2.x),
          zQ = (0, IQ.RandomRange)(this.direction1.y, this.direction2.y),
          sQ = (0, IQ.RandomRange)(this.direction1.z, this.direction2.z);
        wQ ? WQ.XQQ(qQ, zQ, sQ) : TQ.s.TransformNormalFromFloatsToRef(qQ, zQ, sQ, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, wQ) {
        if (!this._indices || !this._positions) return;
        const qQ = 3 * (Math.random() * (this._indices.length / 3) | 0),
          zQ = Math.random(),
          sQ = Math.random() * (1 - zQ),
          FQ = 1 - zQ - sQ,
          PQ = this._indices[qQ],
          gQ = this._indices[qQ + 1],
          JQ = this._indices[qQ + 2],
          rQ = TQ.m.vj[0],
          IQ = TQ.m.vj[1],
          jQ = TQ.m.vj[2],
          BQ = TQ.m.vj[3];
        TQ.s.FromArrayToRef(this._positions, 3 * PQ, rQ), TQ.s.FromArrayToRef(this._positions, 3 * gQ, IQ), TQ.s.FromArrayToRef(this._positions, 3 * JQ, jQ), BQ.x = zQ * rQ.x + sQ * IQ.x + FQ * jQ.x, BQ.y = zQ * rQ.y + sQ * IQ.y + FQ * jQ.y, BQ.z = zQ * rQ.z + sQ * IQ.z + FQ * jQ.z, wQ ? WQ.XQQ(BQ.x, BQ.y, BQ.z) : TQ.s.TransformCoordinatesFromFloatsToRef(BQ.x, BQ.y, BQ.z, QQ, WQ), this.useMeshNormalsForDirection && this._normals && (TQ.s.FromArrayToRef(this._normals, 3 * PQ, rQ), TQ.s.FromArrayToRef(this._normals, 3 * gQ, IQ), TQ.s.FromArrayToRef(this._normals, 3 * JQ, jQ), this._storedNormal.x = zQ * rQ.x + sQ * IQ.x + FQ * jQ.x, this._storedNormal.y = zQ * rQ.y + sQ * IQ.y + FQ * jQ.y, this._storedNormal.z = zQ * rQ.z + sQ * IQ.z + FQ * jQ.z)
      }
      clone() {
        const QQ = new UQ(this.mesh);
        return rQ.d.DeepCopy(this, QQ), QQ
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
        return QQ.type = this.getClassName(), QQ.direction1 = this.direction1.awQ(), QQ.direction2 = this.direction2.awQ(), QQ.meshId = this.mesh?.id, QQ.useMeshNormalsForDirection = this.useMeshNormalsForDirection, QQ
      }
      parse(QQ, WQ) {
        TQ.s.FromArrayToRef(QQ.direction1, 0, this.direction1), TQ.s.FromArrayToRef(QQ.direction2, 0, this.direction2), QQ.meshId && WQ && (this.mesh = WQ.getLastMeshById(QQ.meshId)), this.useMeshNormalsForDirection = QQ.useMeshNormalsForDirection
      }
    }
    class bQ {
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
        const WQ = this._attractors.indexOf(QQ); - 1 !== WQ && this._attractors.splice(WQ, 1)
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
        this._useLogarithmicDepth = QQ && this.sE().Uj().getCaps().fragmentDepthSupported
      }
      sE() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(QQ) {
        switch (QQ) {
          case bQ.BLENDMODE_MULTIPLYADD:
            return;
          case bQ.BLENDMODE_ADD:
            QQ = 1;
            break;
          case bQ.BLENDMODE_ONEONE:
            QQ = 6;
            break;
          case bQ.BLENDMODE_STANDARD:
            QQ = 2;
            break;
          case bQ.BLENDMODE_MULTIPLY:
            QQ = 4;
            break;
          case bQ.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(QQ, WQ, XQ) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, QQ, WQ, XQ), this
      }
      removeEmitRateGradient(QQ) {
        return this._removeFactorGradient(this._emitRateGradients, QQ), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : TQ.s.Zero()
      }
      set direction1(QQ) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = QQ)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : TQ.s.Zero()
      }
      set direction2(QQ) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = QQ)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : TQ.s.Zero()
      }
      set minEmitBox(QQ) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = QQ)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : TQ.s.Zero()
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
      _addFactorGradient(QQ, WQ, XQ, qQ) {
        const TQ = new wQ.i(WQ, XQ, qQ);
        QQ.push(TQ), QQ.sort(((QQ, WQ) => QQ.gradient < WQ.gradient ? -1 : QQ.gradient > WQ.gradient ? 1 : 0))
      }
      _removeFactorGradient(QQ, WQ) {
        if (!QQ) return;
        let XQ = 0;
        for (const wQ of QQ) {
          if (wQ.gradient === WQ) {
            QQ.splice(XQ, 1);
            break
          }
          XQ++
        }
      }
      _removeGradientAndTexture(QQ, WQ, XQ) {
        if (!WQ) return this;
        let wQ = 0;
        for (const qQ of WQ) {
          if (qQ.gradient === QQ) {
            WQ.splice(wQ, 1);
            break
          }
          wQ++
        }
        return XQ && XQ.dispose(), this
      }
      constructor(QQ) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = TQ.s.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new TQ.s(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = bQ.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new TQ.q(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new TQ.s(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = TQ.s.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new gQ.d(1, 1, 1, 1), this.color2 = new gQ.d(1, 1, 1, 1), this.colorDead = new gQ.d(0, 0, 0, 1), this.textureMask = new gQ.d(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new PQ.c, this.id = QQ, this.name = QQ
      }
      createPointEmitter(QQ, WQ) {
        const XQ = function(QQ, WQ) {
          const XQ = new jQ;
          return XQ.direction1 = QQ, XQ.direction2 = WQ, XQ
        }(QQ, WQ);
        return this.particleEmitterType = XQ, XQ
      }
      createHemisphericEmitter() {
        const QQ = function() {
          return new BQ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = QQ, QQ
      }
      createSphereEmitter() {
        const QQ = function() {
          return new yQ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = QQ, QQ
      }
      createDirectedSphereEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new TQ.s(0, 1, 0),
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TQ.s(0, 1, 0);
          return new VQ(QQ, WQ, XQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new TQ.s(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TQ.s(0, 1, 0));
        return this.particleEmitterType = QQ, QQ
      }
      createCylinderEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new DQ.g(QQ, WQ, XQ, wQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = QQ, QQ
      }
      createDirectedCylinderEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TQ.s(0, 1, 0),
            qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new TQ.s(0, 1, 0);
          return new DQ.d(QQ, WQ, XQ, wQ, qQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TQ.s(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new TQ.s(0, 1, 0));
        return this.particleEmitterType = QQ, QQ
      }
      createConeEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new pQ(QQ, WQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = QQ, QQ
      }
      createDirectedConeEmitter() {
        const QQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TQ.s(0, 1, 0),
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TQ.s(0, 1, 0);
          return new GQ(QQ, WQ, XQ, wQ)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TQ.s(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TQ.s(0, 1, 0));
        return this.particleEmitterType = QQ, QQ
      }
      createBoxEmitter(QQ, WQ, XQ, wQ) {
        const qQ = new JQ.c;
        return this.particleEmitterType = qQ, this.direction1 = QQ, this.direction2 = WQ, this.minEmitBox = XQ, this.maxEmitBox = wQ, qQ
      }
      createMeshEmitter() {
        const QQ = function() {
          return new UQ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = QQ, QQ
      }
    }
    bQ.BLENDMODE_ONEONE = 0, bQ.BLENDMODE_STANDARD = 1, bQ.BLENDMODE_ADD = 2, bQ.BLENDMODE_MULTIPLY = 3, bQ.BLENDMODE_MULTIPLYADD = 4, bQ.BLENDMODE_SUBTRACT = -1;
    class vQ {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new gQ.d(0, 0, 0, 0), this.currentColor2 = new gQ.d(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = TQ.s.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class dQ {
      constructor(QQ) {
        this.particleSystem = QQ, this.position = TQ.s.Zero(), this.direction = TQ.s.Zero(), this.color = new gQ.d(0, 0, 0, 0), this.colorStep = new gQ.d(0, 0, 0, 0), this.initialColor = new gQ.d(0, 0, 0, 0), this.colorDead = new gQ.d(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new TQ.q(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new vQ, this.id = dQ._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let QQ = this.age,
          WQ = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === WQ ? (WQ = 1, QQ = this._properties.randomCellOffset) : QQ += this._properties.randomCellOffset);
        const XQ = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let wQ;
        wQ = this._properties.initialSpriteCellLoop ? (0, IQ.Clamp)(QQ * WQ % this.lifeTime / this.lifeTime) : (0, IQ.Clamp)(QQ * WQ / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + wQ * XQ | 0
      }
      _inheritParticleInfoToSubEmitter(QQ) {
        if (QQ.particleSystem.emitter.position) {
          const WQ = QQ.particleSystem.emitter;
          if (WQ.position.WH(this.position), QQ.inheritDirection) {
            const QQ = TQ.m.vj[0];
            this.direction.normalizeToRef(QQ), WQ.setDirection(QQ, 0, Math.PI / 2)
          }
        } else {
          QQ.particleSystem.emitter.WH(this.position)
        }
        this.direction.scaleToRef(QQ.inheritedVelocityAmount / 2, TQ.m.vj[0]), QQ.particleSystem._inheritedVelocityOffset.WH(TQ.m.vj[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const QQ of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(QQ)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = dQ._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(QQ) {
        QQ.position.WH(this.position), this._properties.initialDirection ? QQ._properties.initialDirection ? QQ._properties.initialDirection.WH(this._properties.initialDirection) : QQ._properties.initialDirection = this._properties.initialDirection.clone() : QQ._properties.initialDirection = null, QQ.direction.WH(this.direction), this._properties.localPosition && (QQ._properties.localPosition ? QQ._properties.localPosition.WH(this._properties.localPosition) : QQ._properties.localPosition = this._properties.localPosition.clone()), QQ.color.WH(this.color), QQ.colorStep.WH(this.colorStep), QQ.initialColor.WH(this.initialColor), QQ.colorDead.WH(this.colorDead), QQ.lifeTime = this.lifeTime, QQ.age = this.age, QQ._properties.randomCellOffset = this._properties.randomCellOffset, QQ.size = this.size, QQ.scale.WH(this.scale), QQ.angle = this.angle, QQ.angularSpeed = this.angularSpeed, QQ.particleSystem = this.particleSystem, QQ.cellIndex = this.cellIndex, QQ.id = this.id, QQ._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (QQ._properties.currentColorGradient = this._properties.currentColorGradient, QQ._properties.currentColor1.WH(this._properties.currentColor1), QQ._properties.currentColor2.WH(this._properties.currentColor2)), this._properties.currentSizeGradient && (QQ._properties.currentSizeGradient = this._properties.currentSizeGradient, QQ._properties.currentSize1 = this._properties.currentSize1, QQ._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (QQ._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, QQ._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, QQ._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (QQ._properties.currentVelocityGradient = this._properties.currentVelocityGradient, QQ._properties.currentVelocity1 = this._properties.currentVelocity1, QQ._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (QQ._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, QQ._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, QQ._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (QQ._properties.currentDragGradient = this._properties.currentDragGradient, QQ._properties.currentDrag1 = this._properties.currentDrag1, QQ._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (QQ._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, QQ._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, QQ._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (QQ.remapData && this.remapData ? QQ.remapData.WH(this.remapData) : QQ.remapData = new TQ.w(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (QQ._properties.randomNoiseCoordinates1 && QQ._properties.randomNoiseCoordinates2 ? (QQ._properties.randomNoiseCoordinates1.WH(this._properties.randomNoiseCoordinates1), QQ._properties.randomNoiseCoordinates2.WH(this._properties.randomNoiseCoordinates2)) : (QQ._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), QQ._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), QQ.metadata = this.metadata
      }
    }
    dQ._Count = 0;
    var HQ = XQ(41309);
    class aQ {
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
      constructor(QQ, WQ, XQ, wQ) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = WQ, this.gM = QQ, this._scene = XQ, this._host = wQ, this._activeTargets = [], WQ._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            nw: this._getCorrectLoopMode()
          }, this._animation.dataType === HQ.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = TQ.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const QQ = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, QQ)
        }
        if (this.gM instanceof Array) {
          let QQ = 0;
          for (const WQ of this.gM) this._preparePath(WQ, QQ), this._getOriginalValues(QQ), QQ++;
          this._targetIsArray = !0
        } else this._preparePath(this.gM), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const qQ = WQ.getEvents();
        if (qQ && qQ.length > 0)
          for (const TQ of qQ) this._events.push(TQ._clone());
        this._enableBlending = QQ && QQ.animationPropertiesOverride ? QQ.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = this._animation.targetPropertyPath;
        if (XQ.length > 1) {
          let wQ = QQ;
          for (let QQ = 0; QQ < XQ.length - 1; QQ++) {
            const WQ = XQ[QQ];
            if (wQ = wQ[WQ], void 0 === wQ) throw new Error(`Invalid property (${WQ}) in property path (${XQ.join(".")})`)
          }
          this._targetPath = XQ[XQ.length - 1], this._activeTargets[WQ] = wQ
        } else this._targetPath = XQ[0], this._activeTargets[WQ] = QQ;
        if (void 0 === this._activeTargets[WQ][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${XQ.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.gM instanceof Array) {
            let QQ = 0;
            for (const WQ of this.gM) void 0 !== this._originalValue[QQ] && this._setValue(WQ, this._activeTargets[QQ], this._originalValue[QQ], -1, QQ), QQ++
          } else void 0 !== this._originalValue[0] && this._setValue(this.gM, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(QQ, WQ) {
        if (this._targetIsArray)
          for (let XQ = 0; XQ < this.gM.length; XQ++) {
            const wQ = this.gM[XQ];
            this._setValue(wQ, this._activeTargets[XQ], QQ, WQ, XQ)
          } else this._setValue(this.gM, this._directTarget, QQ, WQ, 0)
      }
      _getOriginalValues() {
        let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const XQ = this._activeTargets[WQ];
        if (HQ.b.InheritOriginalValueFromActiveAnimations) {
          const QQ = this._scene._activeAnimatables;
          for (let wQ = 0; wQ < QQ.length; wQ++) {
            const qQ = QQ[wQ]._runtimeAnimations;
            for (let QQ = 0; QQ < qQ.length; QQ++) {
              const wQ = qQ[QQ];
              if (wQ !== this && wQ._targetPath === this._targetPath)
                for (let QQ = 0; QQ < wQ._activeTargets.length; QQ++)
                  if (wQ._activeTargets[QQ] === XQ && void 0 !== wQ._originalValue[QQ]) return void(wQ._originalValue[QQ] && wQ._originalValue[QQ].clone ? this._originalValue[WQ] = wQ._originalValue[QQ].clone() : this._originalValue[WQ] = wQ._originalValue[QQ])
            }
          }
        }
        QQ = XQ.getLocalMatrix && "_matrix" === this._targetPath ? XQ.getLocalMatrix() : XQ[this._targetPath], QQ && QQ.clone ? this._originalValue[WQ] = QQ.clone() : this._originalValue[WQ] = QQ
      }
      _registerTargetForLateAnimationBinding(QQ, WQ) {
        const XQ = QQ.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(XQ), XQ._lateAnimationHolders || (XQ._lateAnimationHolders = {}), XQ._lateAnimationHolders[QQ.targetPath] || (XQ._lateAnimationHolders[QQ.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: WQ
        }), QQ.isAdditive ? (XQ._lateAnimationHolders[QQ.targetPath].additiveAnimations.push(QQ), XQ._lateAnimationHolders[QQ.targetPath].totalAdditiveWeight += QQ.weight) : (XQ._lateAnimationHolders[QQ.targetPath].animations.push(QQ), XQ._lateAnimationHolders[QQ.targetPath].totalWeight += QQ.weight)
      }
      _setValue(QQ, WQ, XQ, wQ, qQ) {
        const zQ = this._scene._animationWrites,
          sQ = this._scene._animationWriteCount++;
        let FQ = zQ[sQ];
        if (FQ || (FQ = zQ[sQ] = {
            runtimeAnimation: this,
            target: QQ,
            weight: wQ,
            additive: !1,
            blendingFactor: 1,
            Py: !1
          }), FQ.runtimeAnimation = this, FQ.target = QQ, FQ.weight = wQ, FQ.additive = this.isAdditive, FQ.Py = !1, this._currentActiveTarget = WQ, this._weight = wQ, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const QQ = WQ[this._targetPath];
            QQ.clone ? this._originalBlendValue = QQ.clone() : this._originalBlendValue = QQ
          }
          this._originalBlendValue.m ? HQ.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? TQ.e.DecomposeLerpToRef(this._originalBlendValue, XQ, this._blendingFactor, this._currentValue) : this._currentValue = TQ.e.DecomposeLerp(this._originalBlendValue, XQ, this._blendingFactor) : this._currentValue ? TQ.e.LerpToRef(this._originalBlendValue, XQ, this._blendingFactor, this._currentValue) : this._currentValue = TQ.e.Lerp(this._originalBlendValue, XQ, this._blendingFactor) : this._currentValue = HQ.b._UniversalLerp(this._originalBlendValue, XQ, this._blendingFactor);
          const wQ = QQ && QQ.animationPropertiesOverride ? QQ.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          FQ.blendingFactor = this._blendingFactor, this._blendingFactor += wQ
        } else FQ.blendingFactor = 1, this._currentValue ? this._currentValue.WH ? this._currentValue.WH(XQ) : this._currentValue = XQ : this._currentValue = XQ?.clone ? XQ.clone() : XQ; - 1 !== wQ ? this._registerTargetForLateAnimationBinding(this, this._originalValue[qQ]) : this._animationState.nw === HQ.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[qQ], WQ[this._targetPath]) : WQ[this._targetPath] = this._originalValue[qQ] + this._currentValue : WQ[this._targetPath] = this._currentValue, QQ.KWQ && QQ.KWQ(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.gM && this.gM.animationPropertiesOverride) {
          return "MorphTarget" === this.gM.getClassName?.() && null == this.gM._animationPropertiesOverride ? this._animation.nw : this.gM.animationPropertiesOverride.nw
        }
        return this._animation.nw
      }
      goToFrame(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const XQ = this._animation.getKeys();
        QQ < XQ[0].frame ? QQ = XQ[0].frame : QQ > XQ[XQ.length - 1].frame && (QQ = XQ[XQ.length - 1].frame);
        const wQ = this._events;
        if (wQ.length)
          for (let TQ = 0; TQ < wQ.length; TQ++) wQ[TQ].onlyOnce || (wQ[TQ].isDone = wQ[TQ].frame < QQ);
        this._currentFrame = QQ;
        const qQ = this._animation._interpolate(QQ, this._animationState);
        this.setValue(qQ, WQ)
      }
      _prepareForSpeedRatioChange(QQ) {
        const WQ = this._previousElapsedTime * (this._animation.framePerSecond * QQ) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - WQ
      }
      animate(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const zQ = this._animation,
          sQ = zQ.targetPropertyPath;
        if (!sQ || sQ.length < 1) return this._stopped = !0, !1;
        let FQ, PQ = !0;
        const gQ = this._events;
        let JQ;
        if (this._coreRuntimeAnimation) JQ = XQ - WQ, FQ = this._coreRuntimeAnimation.currentFrame, this._currentFrame = FQ, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let TQ;
          (WQ < this._minFrame || WQ > this._maxFrame) && (WQ = this._minFrame), (XQ < this._minFrame || XQ > this._maxFrame) && (XQ = this._maxFrame), JQ = XQ - WQ;
          let sQ = QQ * (zQ.framePerSecond * qQ) / 1e3 + this._absoluteFrameOffset,
            rQ = 0,
            IQ = !1;
          const jQ = wQ && this._animationState.nw === HQ.b.ANIMATIONLOOPMODE_YOYO;
          if (jQ) {
            const QQ = (sQ - WQ) / JQ,
              XQ = Math.sin(QQ * Math.PI);
            sQ = Math.abs(XQ) * JQ + WQ;
            const wQ = XQ >= 0 ? 1 : -1;
            this._yoyoDirection !== wQ && (IQ = !0), this._yoyoDirection = wQ
          }
          if (this._previousElapsedTime = QQ, this._previousAbsoluteFrame = sQ, !wQ && XQ >= WQ && (sQ >= JQ && qQ > 0 || sQ <= 0 && qQ < 0)) PQ = !1, rQ = zQ.evaluate(XQ);
          else if (!wQ && WQ >= XQ && (sQ <= JQ && qQ < 0 || sQ >= 0 && qQ > 0)) PQ = !1, rQ = zQ.evaluate(WQ);
          else if (this._animationState.nw !== HQ.b.ANIMATIONLOOPMODE_CYCLE) {
            const QQ = XQ.toString() + WQ.toString();
            if (!this._offsetsCache[QQ]) {
              this._animationState.repeatCount = 0, this._animationState.nw = HQ.b.ANIMATIONLOOPMODE_CYCLE;
              const wQ = zQ._interpolate(WQ, this._animationState),
                qQ = zQ._interpolate(XQ, this._animationState);
              switch (this._animationState.nw = this._getCorrectLoopMode(), zQ.dataType) {
                case HQ.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[QQ] = qQ - wQ;
                  break;
                case HQ.b.ANIMATIONTYPE_QUATERNION:
                case HQ.b.ANIMATIONTYPE_VECTOR3:
                case HQ.b.ANIMATIONTYPE_VECTOR2:
                case HQ.b.ANIMATIONTYPE_SIZE:
                case HQ.b.ANIMATIONTYPE_COLOR3:
                case HQ.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[QQ] = qQ.subtract(wQ)
              }
              this._highLimitsCache[QQ] = qQ
            }
            rQ = this._highLimitsCache[QQ], TQ = this._offsetsCache[QQ]
          }
          if (void 0 === TQ) switch (zQ.dataType) {
            case HQ.b.ANIMATIONTYPE_FLOAT:
              TQ = 0;
              break;
            case HQ.b.ANIMATIONTYPE_QUATERNION:
              TQ = HQ.k;
              break;
            case HQ.b.ANIMATIONTYPE_VECTOR3:
              TQ = HQ.w;
              break;
            case HQ.b.ANIMATIONTYPE_VECTOR2:
              TQ = HQ.s;
              break;
            case HQ.b.ANIMATIONTYPE_SIZE:
              TQ = HQ.o;
              break;
            case HQ.b.ANIMATIONTYPE_COLOR3:
              TQ = HQ.f;
              break;
            case HQ.b.ANIMATIONTYPE_COLOR4:
              TQ = HQ.h
          }
          const BQ = this._host ? this._host.syncRoot : null;
          let yQ, VQ = this._playbackFrames,
            DQ = !1;
          if (BQ) {
            const QQ = BQ.toFrame - BQ.fromFrame,
              XQ = BQ.masterFrame,
              wQ = (XQ - BQ.fromFrame) / QQ;
            FQ = WQ + JQ * wQ;
            const qQ = BQ.getAnimations()[0];
            if (qQ && 0 !== QQ) {
              const QQ = JQ * wQ,
                WQ = qQ._playbackTo - qQ._playbackFrom;
              if (0 !== WQ && qQ._playbackFrom <= BQ.fromFrame && qQ._playbackTo >= BQ.toFrame) {
                VQ = JQ * Math.round((qQ._playbackFrames - (qQ._currentFrame - qQ._playbackFrom)) / WQ) + QQ
              } else DQ = (XQ - this._playbackSyncMasterFrame) * (qQ._playbackFrames - this._playbackSyncMasterPlayed) < 0, VQ = QQ;
              DQ = DQ || qQ._playbackJumped, this._playbackSyncMasterPlayed = qQ._playbackFrames, this._playbackSyncMasterFrame = XQ
            }
          } else FQ = sQ > 0 && WQ > XQ || sQ < 0 && WQ < XQ ? PQ && 0 !== JQ ? XQ + sQ % JQ : WQ : PQ && 0 !== JQ ? WQ + sQ % JQ : XQ;
          if (!jQ && (qQ > 0 && this.currentFrame > FQ || qQ < 0 && this.currentFrame < FQ) || jQ && IQ) {
            this._onLoop();
            for (let QQ = 0; QQ < gQ.length; QQ++) gQ[QQ].onlyOnce || (gQ[QQ].isDone = !1);
            this._animationState.key = qQ > 0 ? 0 : zQ.getKeys().length - 1
          }
          if (this._currentFrame = FQ, this._animationState.repeatCount = 0 === JQ ? 0 : sQ / JQ | 0, this._animationState.highLimitValue = rQ, this._animationState.offsetValue = TQ, this._playbackFrom = WQ, this._playbackTo = XQ, this._playbackJumped = DQ, this._playbackSyncRoot = BQ, BQ) yQ = VQ;
          else if (PQ) yQ = jQ ? FQ === WQ && sQ === XQ ? JQ : FQ - WQ : sQ;
          else {
            const QQ = 0 !== JQ ? Math.floor(this._playbackFrames / JQ) : 0;
            yQ = (FQ === XQ ? QQ + 1 : QQ) * JQ
          }
          this._playbackFrames = yQ, this._playbackProgress = this._animationState.nw === HQ.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? JQ : yQ
        }
        const rQ = zQ._interpolate(FQ, this._animationState);
        if (this.setValue(rQ, TQ), gQ.length)
          for (let IQ = 0; IQ < gQ.length; IQ++)
            if (JQ >= 0 && FQ >= gQ[IQ].frame && gQ[IQ].frame >= WQ || JQ < 0 && FQ <= gQ[IQ].frame && gQ[IQ].frame <= WQ) {
              const QQ = gQ[IQ];
              QQ.isDone || (QQ.onlyOnce && (gQ.splice(IQ, 1), IQ--), QQ.isDone = !0, QQ.action(FQ))
            } return PQ || (this._stopped = !0), PQ
      }
    }
    var lQ = XQ(40178);
    class hQ {
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
        for (let WQ = 0; WQ < this._runtimeAnimations.length; WQ++) {
          this._runtimeAnimations[WQ]._prepareForSpeedRatioChange(QQ)
        }
        this._speedRatio = QQ, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          sQ = arguments.length > 6 ? arguments[6] : void 0,
          FQ = arguments.length > 7 ? arguments[7] : void 0,
          PQ = arguments.length > 8 ? arguments[8] : void 0,
          gQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          JQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = WQ, this.fromFrame = XQ, this.toFrame = wQ, this.loopAnimation = TQ, this.onAnimationEnd = sQ, this.onAnimationLoop = PQ, this.isAdditive = gQ, this.playOrder = JQ, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.lD = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new qQ.b, this.onAnimationLoopObservable = new qQ.b, this._scene = QQ, FQ && this.appendAnimations(WQ, FQ), this._speedRatio = zQ, QQ._activeAnimatables.push(this)
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
      appendAnimations(QQ, WQ) {
        for (let XQ = 0; XQ < WQ.length; XQ++) {
          const wQ = WQ[XQ],
            qQ = new aQ(QQ, wQ, this._scene, this);
          qQ._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(qQ)
        }
      }
      getAnimationByTargetProperty(QQ) {
        const WQ = this._runtimeAnimations;
        for (let XQ = 0; XQ < WQ.length; XQ++)
          if (WQ[XQ].animation.targetProperty === QQ) return WQ[XQ].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(QQ) {
        const WQ = this._runtimeAnimations;
        for (let XQ = 0; XQ < WQ.length; XQ++)
          if (WQ[XQ].animation.targetProperty === QQ) return WQ[XQ];
        return null
      }
      reset() {
        const QQ = this._runtimeAnimations;
        for (let WQ = 0; WQ < QQ.length; WQ++) QQ[WQ].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(QQ) {
        const WQ = this._runtimeAnimations;
        for (let XQ = 0; XQ < WQ.length; XQ++) WQ[XQ].animation.enableBlending = !0, WQ[XQ].animation.blendingSpeed = QQ
      }
      disableBlending() {
        const QQ = this._runtimeAnimations;
        for (let WQ = 0; WQ < QQ.length; WQ++) QQ[WQ].animation.enableBlending = !1
      }
      goToFrame(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this._runtimeAnimations;
        if (XQ[0]) {
          const WQ = XQ[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? XQ[0].currentFrame;
          const wQ = 0 === this.speedRatio ? 0 : (QQ - this._frameToSyncFromJump) / WQ * 1e3 / this.speedRatio;
          this._manualJumpDelay = -wQ
        }
        for (let wQ = 0; wQ < XQ.length; wQ++) XQ[wQ].goToFrame(QQ, WQ ? this._weight : -1);
        this._goToFrame = QQ
      }
      get paused() {
        return this.lD
      }
      pause() {
        this.lD || (this.lD = !0)
      }
      restart() {
        this.lD = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (QQ || WQ) {
          const qQ = this._scene._activeAnimatables.indexOf(this);
          if (qQ > -1) {
            const TQ = this._runtimeAnimations;
            for (let XQ = TQ.length - 1; XQ >= 0; XQ--) {
              const wQ = TQ[XQ];
              QQ && wQ.animation.name != QQ || (WQ && !WQ(wQ.target) || (wQ.dispose(), TQ.splice(XQ, 1)))
            }
            0 == TQ.length && (XQ || this._scene._activeAnimatables.splice(qQ, 1), wQ || this._raiseOnAnimationEnd())
          }
        } else {
          const QQ = this._scene._activeAnimatables.indexOf(this);
          if (QQ > -1) {
            XQ || this._scene._activeAnimatables.splice(QQ, 1);
            const WQ = this._runtimeAnimations;
            for (let QQ = 0; QQ < WQ.length; QQ++) WQ[QQ].dispose();
            this._runtimeAnimations.length = 0, wQ || this._raiseOnAnimationEnd()
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
        if (this.lD) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = QQ), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = QQ, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += QQ - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !hQ.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let WQ = !1;
        const XQ = this._runtimeAnimations;
        let wQ;
        for (wQ = 0; wQ < XQ.length; wQ++) {
          const qQ = XQ[wQ].animate(QQ - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          WQ = WQ || qQ
        }
        if (this.animationStarted = WQ, !WQ) {
          if (this.disposeOnEnd)
            for (wQ = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(wQ, 1), wQ = 0; wQ < XQ.length; wQ++) XQ[wQ].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return WQ
      }
    }

    function iQ(QQ) {
      if (0 === QQ.totalWeight && 0 === QQ.totalAdditiveWeight) return QQ.originalValue;
      let WQ = 1;
      const XQ = TQ.m.vj[0],
        wQ = TQ.m.vj[1],
        qQ = TQ.m.Quaternion[0];
      let zQ = 0;
      const sQ = QQ.animations[0],
        FQ = QQ.originalValue;
      let PQ, gQ = !1;
      if (QQ.totalWeight < 1) PQ = 1 - QQ.totalWeight, FQ.decompose(wQ, qQ, XQ);
      else {
        if (zQ = 1, WQ = QQ.totalWeight, PQ = sQ.weight / WQ, 1 == PQ) {
          if (!QQ.totalAdditiveWeight) return sQ.currentValue;
          gQ = !0
        }
        sQ.currentValue.decompose(wQ, qQ, XQ)
      }
      if (!gQ) {
        wQ.scaleInPlace(PQ), XQ.scaleInPlace(PQ), qQ.scaleInPlace(PQ);
        for (let sQ = zQ; sQ < QQ.animations.length; sQ++) {
          const zQ = QQ.animations[sQ];
          if (0 === zQ.weight) continue;
          PQ = zQ.weight / WQ;
          const FQ = TQ.m.vj[2],
            gQ = TQ.m.vj[3],
            JQ = TQ.m.Quaternion[1];
          zQ.currentValue.decompose(gQ, JQ, FQ), gQ.scaleAndAddToRef(PQ, wQ), JQ.scaleAndAddToRef(TQ.h.Dot(qQ, JQ) > 0 ? PQ : -PQ, qQ), FQ.scaleAndAddToRef(PQ, XQ)
        }
        qQ.normalize()
      }
      for (let rQ = 0; rQ < QQ.additiveAnimations.length; rQ++) {
        const WQ = QQ.additiveAnimations[rQ];
        if (0 === WQ.weight) continue;
        const zQ = TQ.m.vj[2],
          sQ = TQ.m.vj[3],
          FQ = TQ.m.Quaternion[1];
        WQ.currentValue.decompose(sQ, FQ, zQ), sQ.multiplyToRef(wQ, sQ), TQ.s.LerpToRef(wQ, sQ, WQ.weight, wQ), qQ.multiplyToRef(FQ, FQ), TQ.h.SlerpToRef(qQ, FQ, WQ.weight, qQ), zQ.scaleAndAddToRef(WQ.weight, XQ)
      }
      const JQ = sQ ? sQ._animationState.workValue : TQ.m.Matrix[0].clone();
      return TQ.e.ComposeToRef(wQ, qQ, XQ, JQ), JQ
    }

    function cQ(QQ, WQ) {
      if (0 === QQ.totalWeight && 0 === QQ.totalAdditiveWeight) return WQ;
      const XQ = QQ.animations[0],
        wQ = QQ.originalValue;
      let qQ = WQ;
      if (0 === QQ.totalWeight && QQ.totalAdditiveWeight > 0) qQ.WH(wQ);
      else if (1 === QQ.animations.length) {
        if (TQ.h.SlerpToRef(wQ, XQ.currentValue, Math.min(1, QQ.totalWeight), qQ), 0 === QQ.totalAdditiveWeight) return qQ
      } else if (QQ.animations.length > 1) {
        let XQ, zQ, sQ = 1;
        if (QQ.totalWeight < 1) {
          const WQ = 1 - QQ.totalWeight;
          XQ = [], zQ = [], XQ.push(wQ), zQ.push(WQ)
        } else {
          if (2 === QQ.animations.length && (TQ.h.SlerpToRef(QQ.animations[0].currentValue, QQ.animations[1].currentValue, QQ.animations[1].weight / QQ.totalWeight, WQ), 0 === QQ.totalAdditiveWeight)) return WQ;
          XQ = [], zQ = [], sQ = QQ.totalWeight
        }
        for (let WQ = 0; WQ < QQ.animations.length; WQ++) {
          const wQ = QQ.animations[WQ];
          XQ.push(wQ.currentValue), zQ.push(wQ.weight / sQ)
        }
        let FQ = 0;
        for (let QQ = 0; QQ < XQ.length;) QQ ? (FQ += zQ[QQ], TQ.h.SlerpToRef(qQ, XQ[QQ], zQ[QQ] / FQ, qQ), QQ++) : (TQ.h.SlerpToRef(XQ[QQ], XQ[QQ + 1], zQ[QQ + 1] / (zQ[QQ] + zQ[QQ + 1]), WQ), qQ = WQ, FQ = zQ[QQ] + zQ[QQ + 1], QQ += 2)
      }
      for (let zQ = 0; zQ < QQ.additiveAnimations.length; zQ++) {
        const WQ = QQ.additiveAnimations[zQ];
        0 !== WQ.weight && (qQ.multiplyToRef(WQ.currentValue, TQ.m.Quaternion[0]), TQ.h.SlerpToRef(qQ, TQ.m.Quaternion[0], WQ.weight, qQ))
      }
      return qQ
    }

    function AQ(QQ, WQ) {
      WQ && (WQ.prototype.copyAnimationRange = function(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new HQ.b(this.name, "_matrix", QQ.animations[0].framePerSecond, HQ.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const TQ = QQ.animations[0].getRange(WQ);
        if (!TQ) return !1;
        const zQ = TQ.from,
          sQ = TQ.to,
          FQ = QQ.animations[0].getKeys(),
          PQ = QQ.length,
          gQ = QQ.getParent(),
          JQ = this.getParent(),
          rQ = wQ && gQ && PQ && this.length && PQ !== this.length,
          IQ = rQ && JQ && gQ ? JQ.length / gQ.length : 1,
          jQ = wQ && !JQ && qQ && (1 !== qQ.x || 1 !== qQ.y || 1 !== qQ.z),
          BQ = this.animations[0].getKeys();
        let yQ, VQ, DQ;
        for (let pQ = 0, GQ = FQ.length; pQ < GQ; pQ++) yQ = FQ[pQ], yQ.frame >= zQ && yQ.frame <= sQ && (wQ ? (DQ = yQ.value.clone(), rQ ? (VQ = DQ.getTranslation(), DQ.setTranslation(VQ.scaleInPlace(IQ))) : jQ && qQ ? (VQ = DQ.getTranslation(), DQ.setTranslation(VQ.multiplyInPlace(qQ))) : DQ = yQ.value) : DQ = yQ.value, BQ.push({
          frame: yQ.frame + XQ,
          value: DQ
        }));
        return this.animations[0].createRange(WQ, zQ + XQ, sQ + XQ), !0
      }), QQ && (QQ.prototype._animate = function(QQ) {
        const WQ = this._animationWrites,
          XQ = this._animationWriteCount;
        let wQ = 0;
        for (let TQ = this._animationStepWriteCount; TQ < XQ; TQ++) {
          const QQ = WQ[TQ];
          QQ.Py && -1 === QQ.weight || (QQ.Py = !0, WQ[TQ] = WQ[wQ], WQ[wQ] = QQ, wQ++)
        }
        for (let TQ = wQ; TQ < XQ; TQ++) {
          const QQ = WQ[TQ];
          QQ.runtimeAnimation = null, QQ.target = null
        }
        if (this._animationWriteCount = wQ, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const qQ = lQ.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = qQ
        }
        this.deltaTime = void 0 !== QQ ? QQ : this.useConstantAnimationDeltaTime ? 16 : (qQ - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = qQ;
        const zQ = this._activeAnimatables;
        if (0 === zQ.length) return;
        this._animationTime += this.deltaTime;
        const sQ = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let TQ = 0; TQ < zQ.length; TQ++) {
          const QQ = zQ[TQ];
          !QQ._animate(sQ) && QQ.disposeOnEnd && TQ--
        }! function(QQ) {
          if (QQ._registeredForLateAnimationBindings.length) {
            for (let WQ = 0; WQ < QQ._registeredForLateAnimationBindings.length; WQ++) {
              const XQ = QQ._registeredForLateAnimationBindings.data[WQ];
              for (const QQ in XQ._lateAnimationHolders) {
                const WQ = XQ._lateAnimationHolders[QQ],
                  wQ = WQ.animations[0],
                  qQ = WQ.originalValue;
                if (void 0 === qQ || null === qQ) continue;
                const zQ = HQ.b.AllowMatrixDecomposeForInterpolation && qQ.m;
                let sQ = XQ[QQ];
                if (zQ) sQ = iQ(WQ);
                else if (void 0 !== qQ.w) sQ = cQ(WQ, sQ || TQ.h.Identity());
                else {
                  let QQ = 0,
                    XQ = 1;
                  const TQ = wQ && wQ._animationState.nw === HQ.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (WQ.totalWeight < 1) sQ = TQ ? qQ.clone ? qQ.clone() : qQ : wQ && qQ.scale ? qQ.scale(1 - WQ.totalWeight) : wQ ? qQ * (1 - WQ.totalWeight) : qQ.clone ? qQ.clone() : qQ;
                  else if (wQ) {
                    XQ = WQ.totalWeight;
                    const zQ = wQ.weight / XQ;
                    sQ = 1 !== zQ ? wQ.currentValue.scale ? wQ.currentValue.scale(zQ) : wQ.currentValue * zQ : (WQ.animations.length > 1 || WQ.additiveAnimations.length > 0) && wQ.currentValue.clone ? wQ.currentValue.clone() : wQ.currentValue, TQ && (sQ.addToRef ? sQ.addToRef(qQ, sQ) : sQ += qQ), QQ = 1
                  }
                  for (let wQ = QQ; wQ < WQ.animations.length; wQ++) {
                    const QQ = WQ.animations[wQ],
                      qQ = QQ.weight / XQ;
                    qQ && (QQ.currentValue.scaleAndAddToRef ? QQ.currentValue.scaleAndAddToRef(qQ, sQ) : sQ += QQ.currentValue * qQ)
                  }
                  for (let wQ = 0; wQ < WQ.additiveAnimations.length; wQ++) {
                    const QQ = WQ.additiveAnimations[wQ],
                      XQ = QQ.weight;
                    XQ && (QQ.currentValue.scaleAndAddToRef ? QQ.currentValue.scaleAndAddToRef(XQ, sQ) : sQ += QQ.currentValue * XQ)
                  }
                }
                XQ[QQ] = sQ
              }
              XQ._lateAnimationHolders = {}
            }
            QQ._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, QQ.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((QQ, WQ) => QQ.playOrder - WQ.playOrder))
      }, QQ.prototype.beginWeightedAnimation = function(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 ? arguments[7] : void 0,
          FQ = arguments.length > 8 ? arguments[8] : void 0,
          PQ = arguments.length > 9 ? arguments[9] : void 0,
          gQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const JQ = this.beginAnimation(QQ, WQ, XQ, qQ, TQ, zQ, sQ, !1, FQ, PQ, gQ);
        return JQ.weight = wQ, JQ
      }, QQ.prototype.beginAnimation = function(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          TQ = arguments.length > 5 ? arguments[5] : void 0,
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          FQ = arguments.length > 8 ? arguments[8] : void 0,
          PQ = arguments.length > 9 ? arguments[9] : void 0,
          gQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (qQ < 0) {
          const QQ = WQ;
          WQ = XQ, XQ = QQ, qQ = -qQ
        }
        WQ > XQ && (qQ = -qQ), sQ && this.stopAnimation(QQ, void 0, FQ), zQ || (zQ = new hQ(this, QQ, WQ, XQ, wQ, qQ, TQ, void 0, PQ, gQ));
        const JQ = !FQ || FQ(QQ);
        if (QQ.animations && JQ && zQ.appendAnimations(QQ, QQ.animations), QQ.getAnimatables) {
          const gQ = QQ.getAnimatables();
          for (let QQ = 0; QQ < gQ.length; QQ++) this.beginAnimation(gQ[QQ], WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ)
        }
        return zQ.reset(), zQ
      }, QQ.prototype.beginHierarchyAnimation = function(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 ? arguments[7] : void 0,
          FQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          PQ = arguments.length > 9 ? arguments[9] : void 0,
          gQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const JQ = QQ.getDescendants(WQ),
          rQ = [];
        rQ.push(this.beginAnimation(QQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, void 0, gQ));
        for (const IQ of JQ) rQ.push(this.beginAnimation(IQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, void 0, gQ));
        return rQ
      }, QQ.prototype.beginDirectAnimation = function(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (TQ < 0) {
          const QQ = XQ;
          XQ = wQ, wQ = QQ, TQ = -TQ
        }
        XQ > wQ && (TQ = -TQ);
        return new hQ(this, QQ, XQ, wQ, qQ, TQ, arguments.length > 6 ? arguments[6] : void 0, WQ, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, QQ.prototype.beginDirectHierarchyAnimation = function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ) {
        let PQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const gQ = QQ.getDescendants(WQ),
          JQ = [];
        JQ.push(this.beginDirectAnimation(QQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ));
        for (const rQ of gQ) JQ.push(this.beginDirectAnimation(rQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ));
        return JQ
      }, QQ.prototype.getAnimatableByTarget = function(QQ) {
        for (let WQ = 0; WQ < this._activeAnimatables.length; WQ++)
          if (this._activeAnimatables[WQ].target === QQ) return this._activeAnimatables[WQ];
        return null
      }, QQ.prototype.getAllAnimatablesByTarget = function(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < this._activeAnimatables.length; XQ++) this._activeAnimatables[XQ].target === QQ && WQ.push(this._activeAnimatables[XQ]);
        return WQ
      }, QQ.prototype.stopAnimation = function(QQ, WQ, XQ) {
        const wQ = this.getAllAnimatablesByTarget(QQ);
        for (const qQ of wQ) qQ.stop(WQ, XQ)
      }, QQ.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let QQ = 0; QQ < this._activeAnimatables.length; QQ++) this._activeAnimatables[QQ].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const QQ of this.animationGroups) QQ.stop()
      })
    }
    hQ.ProcessPausedAnimatables = !1;
    var RQ, EQ = XQ(37379),
      CQ = XQ(40491),
      uQ = XQ(40153);
    class LQ extends CQ.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(QQ) {
        (QQ.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.WH(QQ), this._markAsDirtyAndDecompose())
      }
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(QQ, WQ.sE(), !1), this.name = QQ, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = WQ, this._localMatrix = wQ?.clone() ?? TQ.e.Identity(), this._restMatrix = qQ ?? this._localMatrix.clone(), this._bindMatrix = zQ ?? this._localMatrix.clone(), this._index = sQ, this._absoluteMatrix = new TQ.e, this._absoluteBindMatrix = new TQ.e, this._absoluteInverseBindMatrix = new TQ.e, this._finalMatrix = new TQ.e, WQ.bones.push(this), this.setParent(XQ, !1), this._updateAbsoluteBindMatrices()
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
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== QQ) {
          if (this.parent) {
            const QQ = this.parent.children.indexOf(this); - 1 !== QQ && this.parent.children.splice(QQ, 1)
          }
          this._parentNode = QQ, this.parent && this.parent.children.push(this), WQ && this._updateAbsoluteBindMatrices(), this.KWQ()
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
        this._restMatrix.WH(QQ)
      }
      setRestPose(QQ) {
        this.setRestMatrix(QQ)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(QQ) {
        this.N_(QQ)
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
          const QQ = TQ.m.vj[0],
            WQ = TQ.m.Quaternion[0],
            XQ = TQ.m.vj[1];
          this.getRestMatrix().decompose(QQ, WQ, XQ), this._linkedTransformNode.position.WH(XQ), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? TQ.h.Identity(), this._linkedTransformNode.rotationQuaternion.WH(WQ), this._linkedTransformNode.oB.WH(QQ)
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
        return this._decompose(), this.gWQ
      }
      set position(QQ) {
        this._decompose(), this.gWQ.WH(QQ), this._markAsDirtyAndCompose()
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
      get oB() {
        return this.getScale()
      }
      set oB(QQ) {
        this.setScale(QQ)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = TQ.s.Zero(), this._localRotation = TQ.h.Zero(), this.gWQ = TQ.s.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.gWQ))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, TQ.e.ComposeToRef(this._localScaling, this._localRotation, this.gWQ, this._localMatrix)) : this._needToCompose = !1)
      }
      N_(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.WH(QQ), WQ && this._updateAbsoluteBindMatrices(), XQ ? this._matrix = QQ : this.KWQ()
      }
      _updateAbsoluteBindMatrices(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (QQ || (QQ = this._bindMatrix), this.parent ? QQ.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.WH(QQ), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), WQ)
          for (let XQ = 0; XQ < this.children.length; XQ++) this.children[XQ]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      KWQ() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.KWQ(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.KWQ(), this._needToDecompose = !0
      }
      _updatePosition(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const qQ = this.getLocalMatrix();
        if (0 == WQ) wQ ? (qQ.addAtIndex(12, QQ.x), qQ.addAtIndex(13, QQ.y), qQ.addAtIndex(14, QQ.z)) : qQ.setTranslationFromFloats(QQ.x, QQ.y, QQ.z);
        else {
          const WQ = LQ._TmpMats[0],
            zQ = LQ._TmpVecs[0];
          this.parent ? (WQ.WH(this.parent.getAbsoluteMatrix()), XQ && WQ.multiplyToRef(XQ.getWorldMatrix(), WQ)) : TQ.e.IdentityToRef(WQ), wQ && WQ.setTranslationFromFloats(0, 0, 0), WQ.invert(), TQ.s.TransformCoordinatesToRef(QQ, WQ, zQ), wQ ? (qQ.addAtIndex(12, zQ.x), qQ.addAtIndex(13, zQ.y), qQ.addAtIndex(14, zQ.z)) : qQ.setTranslationFromFloats(zQ.x, zQ.y, zQ.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(QQ, WQ, XQ, !0)
      }
      setPosition(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(QQ, WQ, XQ, !1)
      }
      setAbsolutePosition(QQ, WQ) {
        this.setPosition(QQ, 1, WQ)
      }
      scale(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const qQ = this.getLocalMatrix(),
          zQ = LQ._TmpMats[0];
        TQ.e.ScalingToRef(QQ, WQ, XQ, zQ), zQ.multiplyToRef(qQ, qQ), zQ.invert();
        for (const TQ of this.children) {
          const wQ = TQ.getLocalMatrix();
          wQ.multiplyToRef(zQ, wQ), wQ.multiplyAtIndex(12, QQ), wQ.multiplyAtIndex(13, WQ), wQ.multiplyAtIndex(14, XQ), TQ._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), wQ)
          for (const TQ of this.children) TQ.scale(QQ, WQ, XQ, wQ)
      }
      setScale(QQ) {
        this._decompose(), this._localScaling.WH(QQ), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(QQ) {
        this._decompose(), QQ.WH(this._localScaling)
      }
      setYawPitchRoll(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === wQ) {
          const zQ = LQ._TmpQuat;
          return TQ.h.RotationYawPitchRollToRef(QQ, WQ, XQ, zQ), void this.setRotationQuaternion(zQ, wQ, qQ)
        }
        const zQ = LQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(zQ, qQ)) return;
        const sQ = LQ._TmpMats[1];
        TQ.e.RotationYawPitchRollToRef(QQ, WQ, XQ, sQ), zQ.multiplyToRef(sQ, sQ), this._rotateWithMatrix(sQ, wQ, qQ)
      }
      rotate(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        const qQ = LQ._TmpMats[0];
        qQ.setTranslationFromFloats(0, 0, 0), TQ.e.RotationAxisToRef(QQ, WQ, qQ), this._rotateWithMatrix(qQ, XQ, wQ)
      }
      setAxisAngle(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === XQ) {
          const qQ = LQ._TmpQuat;
          return TQ.h.RotationAxisToRef(QQ, WQ, qQ), void this.setRotationQuaternion(qQ, XQ, wQ)
        }
        const qQ = LQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(qQ, wQ)) return;
        const zQ = LQ._TmpMats[1];
        TQ.e.RotationAxisToRef(QQ, WQ, zQ), qQ.multiplyToRef(zQ, zQ), this._rotateWithMatrix(zQ, XQ, wQ)
      }
      setRotation(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(QQ.y, QQ.x, QQ.z, WQ, XQ)
      }
      setRotationQuaternion(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === WQ) return this._decompose(), this._localRotation.WH(QQ), void this._markAsDirtyAndCompose();
        const wQ = LQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wQ, XQ)) return;
        const qQ = LQ._TmpMats[1];
        TQ.e.FromQuaternionToRef(QQ, qQ), wQ.multiplyToRef(qQ, qQ), this._rotateWithMatrix(qQ, WQ, XQ)
      }
      setRotationMatrix(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === WQ) {
          const wQ = LQ._TmpQuat;
          return TQ.h.FromRotationMatrixToRef(QQ, wQ), void this.setRotationQuaternion(wQ, WQ, XQ)
        }
        const wQ = LQ._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(wQ, XQ)) return;
        const qQ = LQ._TmpMats[1];
        qQ.WH(QQ), wQ.multiplyToRef(QQ, qQ), this._rotateWithMatrix(qQ, WQ, XQ)
      }
      _rotateWithMatrix(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = this.getLocalMatrix(),
          qQ = wQ.m[12],
          TQ = wQ.m[13],
          zQ = wQ.m[14],
          sQ = this.getParent(),
          FQ = LQ._TmpMats[3],
          PQ = LQ._TmpMats[4];
        sQ && 1 == WQ ? (XQ ? (FQ.WH(XQ.getWorldMatrix()), sQ.getAbsoluteMatrix().multiplyToRef(FQ, FQ)) : FQ.WH(sQ.getAbsoluteMatrix()), PQ.WH(FQ), PQ.invert(), wQ.multiplyToRef(FQ, wQ), wQ.multiplyToRef(QQ, wQ), wQ.multiplyToRef(PQ, wQ)) : 1 == WQ && XQ ? (FQ.WH(XQ.getWorldMatrix()), PQ.WH(FQ), PQ.invert(), wQ.multiplyToRef(FQ, wQ), wQ.multiplyToRef(QQ, wQ), wQ.multiplyToRef(PQ, wQ)) : wQ.multiplyToRef(QQ, wQ), wQ.setTranslationFromFloats(qQ, TQ, zQ), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(QQ, WQ) {
        const XQ = LQ._TmpMats[2];
        return QQ.WH(this.getAbsoluteMatrix()), WQ ? (QQ.multiplyToRef(WQ.getWorldMatrix(), QQ), TQ.e.ScalingToRef(WQ.oB.x, WQ.oB.y, WQ.oB.z, XQ)) : TQ.e.IdentityToRef(XQ), QQ.invert(), !isNaN(QQ.m[0]) && (XQ.multiplyAtIndex(0, this._scalingDeterminant), QQ.multiplyToRef(XQ, QQ), !0)
      }
      xV() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = TQ.s.Zero();
        return this.getPositionToRef(QQ, WQ, XQ), XQ
      }
      getPositionToRef() {
        let QQ = arguments.length > 1 ? arguments[1] : void 0,
          WQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const QQ = this.getLocalMatrix();
          WQ.x = QQ.m[12], WQ.y = QQ.m[13], WQ.z = QQ.m[14]
        } else {
          const XQ = LQ._TmpMats[0].WH(this.getAbsoluteMatrix());
          QQ && XQ.multiplyToRef(QQ.getWorldMatrix(), XQ), WQ.x = XQ.m[12], WQ.y = XQ.m[13], WQ.z = XQ.m[14]
        }
      }
      getAbsolutePosition() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const WQ = TQ.s.Zero();
        return this.getPositionToRef(1, QQ, WQ), WQ
      }
      getAbsolutePositionToRef(QQ, WQ) {
        this.getPositionToRef(1, QQ, WQ)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.WH(this._localMatrix);
          const QQ = this._skeleton.getPoseMatrix();
          QQ && this._absoluteMatrix.multiplyToRef(QQ, this._absoluteMatrix)
        }
        const QQ = this.children,
          WQ = QQ.length;
        for (let XQ = 0; XQ < WQ; XQ++) QQ[XQ].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      iK(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = TQ.s.Zero();
        return this.getDirectionToRef(QQ, WQ, XQ), XQ
      }
      getDirectionToRef(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = LQ._TmpMats[0].WH(this.getAbsoluteMatrix());
        WQ && wQ.multiplyToRef(WQ.getWorldMatrix(), wQ), TQ.s.TransformNormalToRef(QQ, wQ, XQ), XQ.normalize()
      }
      getRotation() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = TQ.s.Zero();
        return this.getRotationToRef(QQ, WQ, XQ), XQ
      }
      getRotationToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = LQ._TmpQuat;
        this.getRotationQuaternionToRef(QQ, WQ, wQ), wQ.toEulerAnglesToRef(XQ)
      }
      getRotationQuaternion() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = TQ.h.Identity();
        return this.getRotationQuaternionToRef(QQ, WQ, XQ), XQ
      }
      getRotationQuaternionToRef() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          WQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), WQ.WH(this._localRotation);
        else {
          const XQ = LQ._TmpMats[0],
            wQ = this.getAbsoluteMatrix();
          QQ ? wQ.multiplyToRef(QQ.getWorldMatrix(), XQ) : XQ.WH(wQ), XQ.multiplyAtIndex(0, this._scalingDeterminant), XQ.multiplyAtIndex(1, this._scalingDeterminant), XQ.multiplyAtIndex(2, this._scalingDeterminant), XQ.decompose(void 0, WQ, void 0)
        }
      }
      getRotationMatrix() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 ? arguments[1] : void 0;
        const XQ = TQ.e.Identity();
        return this.getRotationMatrixToRef(QQ, WQ, XQ), XQ
      }
      getRotationMatrixToRef() {
        let QQ = arguments.length > 1 ? arguments[1] : void 0,
          WQ = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(WQ);
        else {
          const XQ = LQ._TmpMats[0],
            wQ = this.getAbsoluteMatrix();
          QQ ? wQ.multiplyToRef(QQ.getWorldMatrix(), XQ) : XQ.WH(wQ), XQ.multiplyAtIndex(0, this._scalingDeterminant), XQ.multiplyAtIndex(1, this._scalingDeterminant), XQ.multiplyAtIndex(2, this._scalingDeterminant), XQ.getRotationMatrixToRef(WQ)
        }
      }
      getAbsolutePositionFromLocal(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = TQ.s.Zero();
        return this.getAbsolutePositionFromLocalToRef(QQ, WQ, XQ), XQ
      }
      getAbsolutePositionFromLocalToRef(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = LQ._TmpMats[0].WH(this.getAbsoluteMatrix());
        WQ && wQ.multiplyToRef(WQ.getWorldMatrix(), wQ), TQ.s.TransformCoordinatesToRef(QQ, wQ, XQ)
      }
      getLocalPositionFromAbsolute(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = TQ.s.Zero();
        return this.getLocalPositionFromAbsoluteToRef(QQ, WQ, XQ), XQ
      }
      getLocalPositionFromAbsoluteToRef(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = LQ._TmpMats[0].WH(this.getAbsoluteMatrix());
        WQ && wQ.multiplyToRef(WQ.getWorldMatrix(), wQ), wQ.invert(), TQ.s.TransformCoordinatesToRef(QQ, wQ, XQ)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const QQ = this._skeleton.bones.indexOf(this);
        if (-1 !== QQ && this._skeleton.bones.splice(QQ, 1), this._parentNode && this._parentNode.children) {
          const QQ = this._parentNode.children,
            WQ = QQ.indexOf(this); - 1 !== WQ && QQ.splice(WQ, 1)
        }
        super.dispose()
      }
    }
    LQ._TmpVecs = (0, EQ.c)(2, TQ.s.Zero), LQ._TmpQuat = TQ.h.Identity(), LQ._TmpMats = (0, EQ.c)(5, TQ.e.Identity), (RQ = LQ.prototype).copyAnimationRange ?? (RQ.copyAnimationRange = (0, uQ.h)("Bone", "copyAnimationRange"));
    var kQ = XQ(40355);
    let fQ = !1;
    var SQ = XQ(40233),
      tQ = XQ(40578),
      oQ = XQ(40589),
      eQ = XQ(40584),
      nQ = XQ(40391);

    function xQ(QQ, WQ) {
      const XQ = (0, IQ.RandomRange)(0, 1);
      gQ.d.LerpToRef(WQ.color1, WQ.color2, XQ, QQ.color)
    }

    function YQ(QQ, WQ) {
      WQ.colorDead.subtractToRef(QQ.color, WQ._colorDiff), WQ._colorDiff.scaleToRef(1 / QQ.lifeTime, QQ.colorStep)
    }

    function NQ(QQ, WQ) {
      QQ._properties.currentColorGradient = WQ._colorGradients[0], QQ._properties.currentColorGradient.getColorToRef(QQ.color), QQ._properties.currentColor1.WH(QQ.color), WQ._colorGradients.length > 1 ? WQ._colorGradients[1].getColorToRef(QQ._properties.currentColor2) : QQ._properties.currentColor2.WH(QQ.color)
    }

    function ZQ(QQ, WQ) {
      const XQ = WQ._colorGradients;
      wQ.l.GetCurrentGradient(WQ._ratio, XQ, ((WQ, XQ, wQ) => {
        WQ !== QQ._properties.currentColorGradient && (QQ._properties.currentColor1.WH(QQ._properties.currentColor2), XQ.getColorToRef(QQ._properties.currentColor2), QQ._properties.currentColorGradient = WQ), gQ.d.LerpToRef(QQ._properties.currentColor1, QQ._properties.currentColor2, wQ, QQ.color), QQ.color.a < 0 && (QQ.color.a = 0)
      }))
    }

    function OQ(QQ, WQ) {
      QQ.colorStep.scaleToRef(WQ._scaledUpdateSpeed, WQ._scaledColorStep), QQ.color.addInPlace(WQ._scaledColorStep), QQ.color.a < 0 && (QQ.color.a = 0)
    }

    function KQ(QQ, WQ) {
      wQ.l.GetCurrentGradient(WQ._ratio, WQ._angularSpeedGradients, ((WQ, XQ, wQ) => {
        WQ !== QQ._properties.currentAngularSpeedGradient && (QQ._properties.currentAngularSpeed1 = QQ._properties.currentAngularSpeed2, QQ._properties.currentAngularSpeed2 = XQ.getFactor(), QQ._properties.currentAngularSpeedGradient = WQ), QQ.angularSpeed = (0, IQ.Lerp)(QQ._properties.currentAngularSpeed1, QQ._properties.currentAngularSpeed2, wQ)
      }))
    }

    function mQ(QQ, WQ) {
      QQ.angle += QQ.angularSpeed * WQ._scaledUpdateSpeed
    }

    function MQ(QQ, WQ) {
      WQ.particleEmitterType.startDirectionFunction(WQ._emitterWorldMatrix, QQ.direction, QQ, WQ.isLocal, WQ._emitterInverseWorldMatrix)
    }

    function QW(QQ, WQ) {
      WQ.startDirectionFunction(WQ._emitterWorldMatrix, QQ.direction, QQ, WQ.isLocal)
    }

    function WW(QQ, WQ) {
      QQ._properties.currentVelocityGradient = WQ._velocityGradients[0], QQ._properties.currentVelocity1 = QQ._properties.currentVelocityGradient.getFactor(), WQ._velocityGradients.length > 1 ? QQ._properties.currentVelocity2 = WQ._velocityGradients[1].getFactor() : QQ._properties.currentVelocity2 = QQ._properties.currentVelocity1
    }

    function XW(QQ, WQ) {
      QQ._properties.currentLimitVelocityGradient = WQ._limitVelocityGradients[0], QQ._properties.currentLimitVelocity1 = QQ._properties.currentLimitVelocityGradient.getFactor(), WQ._limitVelocityGradients.length > 1 ? QQ._properties.currentLimitVelocity2 = WQ._limitVelocityGradients[1].getFactor() : QQ._properties.currentLimitVelocity2 = QQ._properties.currentLimitVelocity1
    }

    function wW(QQ, WQ) {
      wQ.l.GetCurrentGradient(WQ._ratio, WQ._velocityGradients, ((WQ, XQ, wQ) => {
        WQ !== QQ._properties.currentVelocityGradient && (QQ._properties.currentVelocity1 = QQ._properties.currentVelocity2, QQ._properties.currentVelocity2 = XQ.getFactor(), QQ._properties.currentVelocityGradient = WQ), QQ._properties.directionScale *= (0, IQ.Lerp)(QQ._properties.currentVelocity1, QQ._properties.currentVelocity2, wQ)
      }))
    }

    function qW(QQ, WQ) {
      wQ.l.GetCurrentGradient(WQ._ratio, WQ._limitVelocityGradients, ((XQ, wQ, qQ) => {
        XQ !== QQ._properties.currentLimitVelocityGradient && (QQ._properties.currentLimitVelocity1 = QQ._properties.currentLimitVelocity2, QQ._properties.currentLimitVelocity2 = wQ.getFactor(), QQ._properties.currentLimitVelocityGradient = XQ);
        const TQ = (0, IQ.Lerp)(QQ._properties.currentLimitVelocity1, QQ._properties.currentLimitVelocity2, qQ);
        QQ.direction.length() > TQ && QQ.direction.scaleInPlace(WQ.limitVelocityDamping)
      }))
    }

    function TW(QQ) {
      QQ.direction.scaleToRef(QQ._properties.directionScale, QQ._properties.scaledDirection)
    }

    function zW(QQ, WQ) {
      WQ.particleEmitterType.startPositionFunction(WQ._emitterWorldMatrix, QQ.position, QQ, WQ.isLocal)
    }

    function sW(QQ, WQ) {
      WQ.startPositionFunction(WQ._emitterWorldMatrix, QQ.position, QQ, WQ.isLocal)
    }

    function FW(QQ, WQ) {
      QQ._properties.localPosition ? QQ._properties.localPosition.WH(QQ.position) : QQ._properties.localPosition = QQ.position.clone(), TQ.s.TransformCoordinatesToRef(QQ._properties.localPosition, WQ._emitterWorldMatrix, QQ.position)
    }

    function PW(QQ, WQ) {
      WQ.isLocal && QQ._properties.localPosition ? (QQ._properties.localPosition.addInPlace(QQ._properties.scaledDirection), TQ.s.TransformCoordinatesToRef(QQ._properties.localPosition, WQ._emitterWorldMatrix, QQ.position)) : QQ.position.addInPlace(QQ._properties.scaledDirection)
    }

    function gW(QQ, WQ) {
      QQ._properties.currentDragGradient = WQ._dragGradients[0], QQ._properties.currentDrag1 = QQ._properties.currentDragGradient.getFactor(), WQ._dragGradients.length > 1 ? QQ._properties.currentDrag2 = WQ._dragGradients[1].getFactor() : QQ._properties.currentDrag2 = QQ._properties.currentDrag1
    }

    function JW(QQ, WQ) {
      wQ.l.GetCurrentGradient(WQ._ratio, WQ._dragGradients, ((WQ, XQ, wQ) => {
        WQ !== QQ._properties.currentDragGradient && (QQ._properties.currentDrag1 = QQ._properties.currentDrag2, QQ._properties.currentDrag2 = XQ.getFactor(), QQ._properties.currentDragGradient = WQ);
        const qQ = (0, IQ.Lerp)(QQ._properties.currentDrag1, QQ._properties.currentDrag2, wQ);
        QQ._properties.scaledDirection.scaleInPlace(1 - qQ)
      }))
    }

    function rW(QQ, WQ) {
      QQ._properties.randomNoiseCoordinates1 && QQ._properties.randomNoiseCoordinates2 ? (QQ._properties.randomNoiseCoordinates1.XQQ(Math.random(), Math.random(), Math.random()), QQ._properties.randomNoiseCoordinates2.XQQ(Math.random(), Math.random(), Math.random())) : (QQ._properties.randomNoiseCoordinates1 = new TQ.s(Math.random(), Math.random(), Math.random()), QQ._properties.randomNoiseCoordinates2 = new TQ.s(Math.random(), Math.random(), Math.random()))
    }

    function IW(QQ, WQ) {
      const XQ = WQ._noiseTextureData,
        wQ = WQ._noiseTextureSize;
      if (XQ && wQ && QQ._properties.randomNoiseCoordinates1 && QQ._properties.randomNoiseCoordinates2) {
        const qQ = WQ._fetchR(QQ._properties.randomNoiseCoordinates1.x, QQ._properties.randomNoiseCoordinates1.y, wQ.width, wQ.height, XQ),
          zQ = WQ._fetchR(QQ._properties.randomNoiseCoordinates1.z, QQ._properties.randomNoiseCoordinates2.x, wQ.width, wQ.height, XQ),
          sQ = WQ._fetchR(QQ._properties.randomNoiseCoordinates2.y, QQ._properties.randomNoiseCoordinates2.z, wQ.width, wQ.height, XQ),
          FQ = TQ.m.vj[0],
          PQ = TQ.m.vj[1];
        FQ.XQQ((2 * qQ - 1) * WQ.noiseStrength.x, (2 * zQ - 1) * WQ.noiseStrength.y, (2 * sQ - 1) * WQ.noiseStrength.z), FQ.scaleToRef(WQ._tempScaledUpdateSpeed, PQ), QQ.direction.addInPlace(PQ)
      }
    }

    function jW(QQ, WQ) {
      WQ.gravity.scaleToRef(WQ._tempScaledUpdateSpeed, WQ._scaledGravity), QQ.direction.addInPlace(WQ._scaledGravity)
    }

    function BW(QQ, WQ) {
      QQ.size = (0, IQ.RandomRange)(WQ.minSize, WQ.maxSize), QQ.scale.XQQ((0, IQ.RandomRange)(WQ.minScaleX, WQ.maxScaleX), (0, IQ.RandomRange)(WQ.minScaleY, WQ.maxScaleY))
    }

    function yW(QQ, WQ) {
      QQ._properties.currentSizeGradient = WQ._sizeGradients[0], QQ._properties.currentSize1 = QQ._properties.currentSizeGradient.getFactor(), QQ.size = QQ._properties.currentSize1, WQ._sizeGradients.length > 1 ? QQ._properties.currentSize2 = WQ._sizeGradients[1].getFactor() : QQ._properties.currentSize2 = QQ._properties.currentSize1, QQ.scale.XQQ((0, IQ.RandomRange)(WQ.minScaleX, WQ.maxScaleX), (0, IQ.RandomRange)(WQ.minScaleY, WQ.maxScaleY))
    }

    function VW(QQ, WQ) {
      const XQ = WQ._actualFrame / WQ.targetStopDuration;
      wQ.l.GetCurrentGradient(XQ, WQ._startSizeGradients, ((XQ, wQ, qQ) => {
        XQ !== WQ._currentStartSizeGradient && (WQ._currentStartSize1 = WQ._currentStartSize2, WQ._currentStartSize2 = wQ.getFactor(), WQ._currentStartSizeGradient = XQ);
        const TQ = (0, IQ.Lerp)(WQ._currentStartSize1, WQ._currentStartSize2, qQ);
        QQ.scale.scaleInPlace(TQ)
      }))
    }

    function DW(QQ, WQ) {
      wQ.l.GetCurrentGradient(WQ._ratio, WQ._sizeGradients, ((WQ, XQ, wQ) => {
        WQ !== QQ._properties.currentSizeGradient && (QQ._properties.currentSize1 = QQ._properties.currentSize2, QQ._properties.currentSize2 = XQ.getFactor(), QQ._properties.currentSizeGradient = WQ), QQ.size = (0, IQ.Lerp)(QQ._properties.currentSize1, QQ._properties.currentSize2, wQ)
      }))
    }

    function pW(QQ, WQ) {
      QQ.remapData = new TQ.w(0, 1, 0, 1)
    }

    function GW(QQ, WQ) {
      WQ._colorRemapGradients && WQ._colorRemapGradients.length > 0 && wQ.l.GetCurrentGradient(WQ._ratio, WQ._colorRemapGradients, ((WQ, XQ, wQ) => {
        const qQ = (0, IQ.Lerp)(WQ.factor1, XQ.factor1, wQ),
          TQ = (0, IQ.Lerp)(WQ.factor2, XQ.factor2, wQ);
        QQ.remapData.x = qQ, QQ.remapData.y = TQ - qQ
      })), WQ._alphaRemapGradients && WQ._alphaRemapGradients.length > 0 && wQ.l.GetCurrentGradient(WQ._ratio, WQ._alphaRemapGradients, ((WQ, XQ, wQ) => {
        const qQ = (0, IQ.Lerp)(WQ.factor1, XQ.factor1, wQ),
          TQ = (0, IQ.Lerp)(WQ.factor2, XQ.factor2, wQ);
        QQ.remapData.z = qQ, QQ.remapData.w = TQ - qQ
      }))
    }

    function UW(QQ, WQ) {
      const XQ = (0, IQ.Clamp)(WQ._actualFrame / WQ.targetStopDuration);
      wQ.l.GetCurrentGradient(XQ, WQ._lifeTimeGradients, ((WQ, wQ) => {
        const qQ = WQ,
          TQ = wQ,
          zQ = qQ.getFactor(),
          sQ = TQ.getFactor(),
          FQ = (XQ - qQ.gradient) / (TQ.gradient - qQ.gradient);
        QQ.lifeTime = (0, IQ.Lerp)(zQ, sQ, FQ)
      })), WQ._emitPower = (0, IQ.RandomRange)(WQ.minEmitPower, WQ.maxEmitPower)
    }

    function bW(QQ, WQ) {
      QQ.lifeTime = (0, IQ.RandomRange)(WQ.minLifeTime, WQ.maxLifeTime), WQ._emitPower = (0, IQ.RandomRange)(WQ.minEmitPower, WQ.maxEmitPower)
    }

    function vW(QQ, WQ) {
      0 === WQ._emitPower ? (QQ._properties.initialDirection ? QQ._properties.initialDirection.WH(QQ.direction) : QQ._properties.initialDirection = QQ.direction.clone(), QQ.direction.set(0, 0, 0)) : (QQ._properties.initialDirection = null, QQ.direction.scaleInPlace(WQ._emitPower)), QQ.direction.addInPlace(WQ._inheritedVelocityOffset)
    }

    function dW(QQ, WQ) {
      QQ.angularSpeed = (0, IQ.RandomRange)(WQ.minAngularSpeed, WQ.maxAngularSpeed), QQ.angle = (0, IQ.RandomRange)(WQ.minInitialRotation, WQ.maxInitialRotation)
    }

    function HW(QQ, WQ) {
      QQ._properties.currentAngularSpeedGradient = WQ._angularSpeedGradients[0], QQ.angularSpeed = QQ._properties.currentAngularSpeedGradient.getFactor(), QQ._properties.currentAngularSpeed1 = QQ.angularSpeed, WQ._angularSpeedGradients.length > 1 ? QQ._properties.currentAngularSpeed2 = WQ._angularSpeedGradients[1].getFactor() : QQ._properties.currentAngularSpeed2 = QQ._properties.currentAngularSpeed1, QQ.angle = (0, IQ.RandomRange)(WQ.minInitialRotation, WQ.maxInitialRotation)
    }

    function aW(QQ, WQ) {
      QQ._properties.initialStartSpriteCellId = WQ.startSpriteCellID, QQ._properties.initialEndSpriteCellId = WQ.endSpriteCellID, QQ._properties.initialSpriteCellLoop = WQ.spriteCellLoop
    }

    function lW(QQ, WQ) {
      QQ.previousItem = WQ.previousItem, QQ.nextItem = WQ, WQ.previousItem && (WQ.previousItem.nextItem = QQ), WQ.previousItem = QQ
    }

    function hW(QQ, WQ) {
      QQ.previousItem = WQ, QQ.nextItem = WQ.nextItem, WQ.nextItem && (WQ.nextItem.previousItem = QQ), WQ.nextItem = QQ
    }

    function iW(QQ) {
      QQ.previousItem && (QQ.previousItem.nextItem = QQ.nextItem), QQ.nextItem && (QQ.nextItem.previousItem = QQ.previousItem)
    }
    var cW = XQ(40628);
    class AW extends bQ {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(QQ) {
        this._startDirectionFunction !== QQ && (this._startDirectionFunction = QQ, this._directionCreation.process = QQ ? QW : MQ)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(QQ) {
        this._startPositionFunction !== QQ && (this._startPositionFunction = QQ, this._positionCreation.process = QQ ? sW : zW)
      }
      set onDispose(QQ) {
        this._onDisposeObserver && this.yE.remove(this._onDisposeObserver), this._onDisposeObserver = this.yE.add(QQ)
      }
      get rG() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(QQ) {
        this._useRampGradients !== QQ && (this._useRampGradients = QQ, this._resetEffect(), QQ ? (this._rampCreation = {
          process: pW,
          previousItem: null,
          nextItem: null
        }, hW(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: GW,
          previousItem: null,
          nextItem: null
        }, hW(this._remapGradientProcessing, this._gravityProcessing))) : (iW(this._rampCreation), iW(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(QQ) {
        this._isLocal !== QQ && (this._isLocal = QQ, QQ ? (this._isLocalCreation = {
          process: FW,
          previousItem: null,
          nextItem: null
        }, hW(this._isLocalCreation, this._positionCreation)) : iW(this._isLocalCreation))
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
          process: aW,
          previousItem: null,
          nextItem: null
        }, hW(this._sheetCreation, this._colorDeadCreation)) : iW(this._sheetCreation), this._reset())
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[WQ] = new tQ.d(this._engine), this._customWrappers[WQ].effect = QQ, this._customWrappers[WQ].drawContext && (this._customWrappers[WQ].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new qQ.b), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = QQ, !QQ) return iW(this._noiseCreation), void iW(this._noiseProcessing);
          this._noiseCreation = {
            process: rW,
            previousItem: null,
            nextItem: null
          }, hW(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: IW,
            previousItem: null,
            nextItem: null
          }, hW(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          sQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          PQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        fQ || (fQ = !0, AQ(kQ.h, LQ)), (0, SQ.e)(), super(QQ), this._emitterInverseWorldMatrix = TQ.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new TQ.s, this.yE = new qQ.b, this.onStoppedObservable = new qQ.b, this.onStartedObservable = new qQ.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new gQ.d(0, 0, 0, 0), this._colorDiff = new gQ.d(0, 0, 0, 0), this._scaledGravity = TQ.s.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = QQ => {}, this.recycleParticle = QQ => {
          const WQ = this._particles.pop();
          WQ !== QQ && WQ.copyTo(QQ), WQ.metadata = null, this._stockParticles.push(WQ)
        }, this._createParticle = () => {
          let QQ;
          return 0 !== this._stockParticles.length ? (QQ = this._stockParticles.pop(), QQ._reset()) : QQ = new dQ(this), this._prepareParticle(QQ), QQ
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = WQ, this._epsilon = sQ, XQ && "Scene" !== XQ.getClassName() ? (this._engine = XQ, this.defaultProjectionMatrix = TQ.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = XQ || FQ.d.LastCreatedScene, this._engine = this._scene.Uj(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.KD.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: bW,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: zW,
          previousItem: null,
          nextItem: null
        }, hW(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: MQ,
          previousItem: null,
          nextItem: null
        }, hW(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: vW,
          previousItem: null,
          nextItem: null
        }, hW(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: BW,
          previousItem: null,
          nextItem: null
        }, hW(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: dW,
          previousItem: null,
          nextItem: null
        }, hW(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: xQ,
          previousItem: null,
          nextItem: null
        }, hW(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: YQ,
          previousItem: null,
          nextItem: null
        }, hW(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, PQ || (this._colorProcessing = {
          process: OQ,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: mQ,
          previousItem: null,
          nextItem: null
        }, hW(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: TW,
          previousItem: null,
          nextItem: null
        }, hW(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: PW,
          previousItem: null,
          nextItem: null
        }, hW(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: jW,
          previousItem: null,
          nextItem: null
        }, hW(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = zQ, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new tQ.d(this._engine)
        }, this._customWrappers[0].effect = wQ, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new JQ.c, this.updateFunction = QQ => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((QQ => {
            this._noiseTextureData = QQ
          })));
          const WQ = QQ === this._particles;
          for (let XQ = 0; XQ < QQ.length; XQ++) {
            const wQ = QQ[XQ];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const qQ = wQ.age;
            if (wQ.age += this._tempScaledUpdateSpeed, wQ.age > wQ.lifeTime) {
              const QQ = wQ.age - qQ,
                WQ = wQ.lifeTime - qQ;
              this._tempScaledUpdateSpeed = WQ * this._tempScaledUpdateSpeed / QQ, wQ.age = wQ.lifeTime
            }
            this._ratio = wQ.age / wQ.lifeTime, wQ._properties.directionScale = this._tempScaledUpdateSpeed;
            let TQ = this._updateQueueStart;
            for (; TQ;) TQ.process(wQ, this), TQ = TQ.nextItem;
            if (this._isAnimationSheetEnabled && !PQ && wQ.updateCellIndex(), wQ._inheritParticleInfoToSubEmitters(), wQ.age >= wQ.lifeTime) {
              if (this._emitFromParticle(wQ), wQ._properties.attachedSubEmitters) {
                for (const QQ of wQ._properties.attachedSubEmitters) QQ.particleSystem.disposeOnStop = !0, QQ.particleSystem.stop();
                wQ._properties.attachedSubEmitters = null
              }
              this.recycleParticle(wQ), WQ && XQ--
            } else;
          }
        }
      }
      serialize(QQ) {
        throw new Error("Method not implemented.")
      }
      clone(QQ, WQ) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = UW : this._lifeTimeCreation.process = bW
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: VW,
          previousItem: null,
          nextItem: null
        }, hW(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (iW(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(QQ) {
        this.targetStopDuration !== QQ && (this._targetStopDuration = QQ, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(QQ, WQ, XQ) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, QQ, WQ, XQ), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(QQ) {
        return this._removeFactorGradient(this._lifeTimeGradients, QQ), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(QQ, WQ, XQ) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = yW, this._sizeGradientProcessing = {
          process: DW,
          previousItem: null,
          nextItem: null
        }, lW(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, QQ, WQ, XQ), this
      }
      removeSizeGradient(QQ) {
        return this._removeFactorGradient(this._sizeGradients, QQ), 0 === this._sizeGradients?.length && (iW(this._sizeGradientProcessing), this._sizeCreation.process = BW), this
      }
      addColorRemapGradient(QQ, WQ, XQ) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, QQ, WQ, XQ), this
      }
      removeColorRemapGradient(QQ) {
        return this._removeFactorGradient(this._colorRemapGradients, QQ), this
      }
      addAlphaRemapGradient(QQ, WQ, XQ) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, QQ, WQ, XQ), this
      }
      removeAlphaRemapGradient(QQ) {
        return this._removeFactorGradient(this._alphaRemapGradients, QQ), this
      }
      addAngularSpeedGradient(QQ, WQ, XQ) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = HW, this._angularSpeedGradientProcessing = {
          process: KQ,
          previousItem: null,
          nextItem: null
        }, lW(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, QQ, WQ, XQ), this
      }
      removeAngularSpeedGradient(QQ) {
        return this._removeFactorGradient(this._angularSpeedGradients, QQ), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = dW, iW(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(QQ, WQ, XQ) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: WW,
          previousItem: null,
          nextItem: null
        }, hW(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: wW,
          previousItem: null,
          nextItem: null
        }, lW(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, QQ, WQ, XQ), this
      }
      removeVelocityGradient(QQ) {
        return this._removeFactorGradient(this._velocityGradients, QQ), 0 === this._velocityGradients?.length && (iW(this._velocityCreation), iW(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(QQ, WQ, XQ) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: XW,
          previousItem: null,
          nextItem: null
        }, hW(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: qW,
          previousItem: null,
          nextItem: null
        }, hW(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, QQ, WQ, XQ), this
      }
      removeLimitVelocityGradient(QQ) {
        return this._removeFactorGradient(this._limitVelocityGradients, QQ), 0 === this._limitVelocityGradients?.length && (iW(this._limitVelocityCreation), iW(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(QQ, WQ, XQ) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: gW,
          previousItem: null,
          nextItem: null
        }, lW(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: JW,
          previousItem: null,
          nextItem: null
        }, lW(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, QQ, WQ, XQ), this
      }
      removeDragGradient(QQ) {
        return this._removeFactorGradient(this._dragGradients, QQ), 0 === this._dragGradients?.length && (iW(this._dragCreation), iW(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(QQ, WQ, XQ) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, QQ, WQ, XQ), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(QQ) {
        return this._removeFactorGradient(this._startSizeGradients, QQ), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const QQ = new Uint8Array(4 * this._rawTextureWidth),
          WQ = gQ.l.Color3[0];
        for (let XQ = 0; XQ < this._rawTextureWidth; XQ++) {
          const qQ = XQ / this._rawTextureWidth;
          wQ.l.GetCurrentGradient(qQ, this._rampGradients, ((wQ, qQ, TQ) => {
            gQ.b.LerpToRef(wQ.color, qQ.color, TQ, WQ), QQ[4 * XQ] = 255 * WQ.r, QQ[4 * XQ + 1] = 255 * WQ.g, QQ[4 * XQ + 2] = 255 * WQ.b, QQ[4 * XQ + 3] = 255
          }))
        }
        this._rampGradientsTexture = sQ.b.CreateRGBATexture(QQ, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((QQ, WQ) => QQ.gradient < WQ.gradient ? -1 : QQ.gradient > WQ.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(QQ, WQ) {
        this._rampGradients || (this._rampGradients = []);
        const XQ = new wQ.h(QQ, WQ);
        return this._rampGradients.push(XQ), this._syncRampGradientTexture(), this
      }
      removeRampGradient(QQ) {
        return this._removeGradientAndTexture(QQ, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(QQ, WQ, XQ) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = NQ, this._colorProcessing.process = ZQ);
        const qQ = new wQ.d(QQ, WQ, XQ);
        return this._colorGradients.push(qQ), this._colorGradients.sort(((QQ, WQ) => QQ.gradient < WQ.gradient ? -1 : QQ.gradient > WQ.gradient ? 1 : 0)), this
      }
      removeColorGradient(QQ) {
        if (!this._colorGradients) return this;
        let WQ = 0;
        for (const XQ of this._colorGradients) {
          if (XQ.gradient === QQ) {
            this._colorGradients.splice(WQ, 1);
            break
          }
          WQ++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = xQ, this._colorProcessing.process = OQ), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const QQ of this._drawWrappers)
            if (QQ)
              for (const WQ of QQ) WQ?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(QQ, WQ, XQ, wQ, qQ) {
        return qQ[4 * (((QQ = .5 * Math.abs(QQ) + .5) * XQ % XQ | 0) + ((WQ = .5 * Math.abs(WQ) + .5) * wQ % wQ | 0) * XQ)] / 255
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
          WQ = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * WQ), this._vertexBuffer = new zQ.d(QQ, this._vertexData, !0, WQ);
        let XQ = 0;
        const wQ = this._vertexBuffer.createVertexBuffer(zQ.l.PositionKind, XQ, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[zQ.l.PositionKind] = wQ, XQ += 3;
        const qQ = this._vertexBuffer.createVertexBuffer(zQ.l.ColorKind, XQ, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[zQ.l.ColorKind] = qQ, XQ += 4;
        const TQ = this._vertexBuffer.createVertexBuffer("angle", XQ, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = TQ, XQ += 1;
        const sQ = this._vertexBuffer.createVertexBuffer("size", XQ, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = sQ, XQ += 2, this._isAnimationSheetEnabled) {
          const QQ = this._vertexBuffer.createVertexBuffer("cellIndex", XQ, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = QQ, XQ += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const QQ = this._vertexBuffer.createVertexBuffer("direction", XQ, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = QQ, XQ += 3
        }
        if (this._useRampGradients) {
          const QQ = this._vertexBuffer.createVertexBuffer("remapData", XQ, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = QQ, XQ += 4
        }
        let FQ;
        if (this._useInstancing) {
          const WQ = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new zQ.d(QQ, WQ, !1, 2), FQ = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else FQ = this._vertexBuffer.createVertexBuffer("offset", XQ, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = FQ, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const QQ = [],
          WQ = [];
        let XQ = 0;
        for (let wQ = 0; wQ < this._capacity; wQ++) QQ.push(XQ), QQ.push(XQ + 1), QQ.push(XQ + 2), QQ.push(XQ), QQ.push(XQ + 2), QQ.push(XQ + 3), WQ.push(XQ, XQ + 1, XQ + 1, XQ + 2, XQ + 2, XQ + 3, XQ + 3, XQ, XQ, XQ + 3), XQ += 4;
        this._indexBuffer = this._engine.createIndexBuffer(QQ), this._linesIndexBuffer = this._engine.createIndexBuffer(WQ)
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
              for (let WQ = 0; WQ < this.preWarmCycles; WQ++) this.animate(!0), QQ.render()
            }))
          }));
          else
            for (let WQ = 0; WQ < this.preWarmCycles; WQ++) this.animate(!0)
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
      _appendParticleVertex(QQ, WQ, XQ, wQ) {
        let qQ = QQ * this._vertexBufferSize;
        const zQ = TQ.m.vj[0].WH(this._scene?.floatingOriginOffset || TQ.s.ZeroReadOnly);
        if (this._vertexData[qQ++] = WQ.position.x + this.worldOffset.x - zQ.x, this._vertexData[qQ++] = WQ.position.y + this.worldOffset.y - zQ.y, this._vertexData[qQ++] = WQ.position.z + this.worldOffset.z - zQ.z, this._vertexData[qQ++] = WQ.color.r, this._vertexData[qQ++] = WQ.color.g, this._vertexData[qQ++] = WQ.color.b, this._vertexData[qQ++] = WQ.color.a, this._vertexData[qQ++] = WQ.angle, this._vertexData[qQ++] = WQ.scale.x * WQ.size, this._vertexData[qQ++] = WQ.scale.y * WQ.size, this._isAnimationSheetEnabled && (this._vertexData[qQ++] = WQ.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[qQ++] = WQ.direction.x, this._vertexData[qQ++] = WQ.direction.y, this._vertexData[qQ++] = WQ.direction.z);
        else if (WQ._properties.initialDirection) {
          let QQ = WQ._properties.initialDirection;
          this.isLocal && (TQ.s.TransformNormalToRef(QQ, this._emitterWorldMatrix, TQ.m.vj[0]), QQ = TQ.m.vj[0]), 0 === QQ.x && 0 === QQ.z && (QQ.x = .001), this._vertexData[qQ++] = QQ.x, this._vertexData[qQ++] = QQ.y, this._vertexData[qQ++] = QQ.z
        } else {
          let QQ = WQ.direction;
          this.isLocal && (TQ.s.TransformNormalToRef(QQ, this._emitterWorldMatrix, TQ.m.vj[0]), QQ = TQ.m.vj[0]), 0 === QQ.x && 0 === QQ.z && (QQ.x = .001), this._vertexData[qQ++] = QQ.x, this._vertexData[qQ++] = QQ.y, this._vertexData[qQ++] = QQ.z
        }
        this._useRampGradients && WQ.remapData && (this._vertexData[qQ++] = WQ.remapData.x, this._vertexData[qQ++] = WQ.remapData.y, this._vertexData[qQ++] = WQ.remapData.z, this._vertexData[qQ++] = WQ.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === XQ ? XQ = this._epsilon : 1 === XQ && (XQ = 1 - this._epsilon), 0 === wQ ? wQ = this._epsilon : 1 === wQ && (wQ = 1 - this._epsilon)), this._vertexData[qQ++] = XQ, this._vertexData[qQ] = wQ)
      }
      _prepareParticle(QQ) {}
      _createNewOnes(QQ) {
        let WQ;
        for (let XQ = 0; XQ < QQ && this._particles.length !== this._capacity; XQ++) {
          WQ = this._createParticle(), this._particles.push(WQ);
          let QQ = this._createQueueStart;
          for (; QQ;) QQ.process(WQ, this), QQ = QQ.nextItem;
          WQ._inheritParticleInfoToSubEmitters()
        }
      }
      _update(QQ) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const QQ = this.emitter;
          this._emitterWorldMatrix = QQ.getWorldMatrix()
        } else {
          const QQ = this.emitter;
          this._emitterWorldMatrix = TQ.e.Translation(QQ.x, QQ.y, QQ.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(QQ)
      }
      static _GetAttributeNamesOrOptions() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = [zQ.l.PositionKind, zQ.l.ColorKind, "angle", "offset", "size"];
        return QQ && wQ.push("cellIndex"), WQ || wQ.push("direction"), XQ && wQ.push("remapData"), wQ
      }
      static _GetEffectCreationOptions() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, oQ.c)(wQ), QQ && wQ.push("particlesInfos"), WQ && wQ.push("logarithmicDepthConstant"), XQ && (wQ.push("vFogInfos"), wQ.push("vFogColor")), wQ
      }
      fillDefines(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, oQ.g)(this, this._scene, QQ), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && QQ.push("#define FOG")), this._isAnimationSheetEnabled && QQ.push("#define ANIMATESHEET"), this.useLogarithmicDepth && QQ.push("#define LOGARITHMICDEPTH"), WQ === bQ.BLENDMODE_MULTIPLY && QQ.push("#define BLENDMULTIPLYMODE"), this.isLocal && QQ.push("#define LOCAL"), this._useRampGradients && QQ.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (QQ.push("#define BILLBOARD"), this.billboardMode) {
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
        XQ && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), QQ.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(QQ, WQ, XQ) {
        WQ.push(...AW._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), QQ.push(...AW._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), XQ.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, nQ.i)(QQ, this._imageProcessingConfigurationDefines), (0, nQ.e)(XQ, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(QQ) {
        var WQ;
        const XQ = this._getCustomDrawWrapper(QQ);
        if (XQ?.effect) return XQ;
        const wQ = [];
        this.fillDefines(wQ, QQ);
        const TQ = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          zQ = cW.d._PrepareStringDefines(TQ, wQ),
          sQ = zQ ? cW.d.GetConfiguration(TQ) : void 0;
        let FQ = this._drawWrappers[TQ];
        FQ || (FQ = this._drawWrappers[TQ] = [], 0 === TQ || this._renderPassObserver || (this._renderPassObserver = ((WQ = this._engine)._onReleaseRenderPassObservable ?? (WQ._onReleaseRenderPassObservable = new qQ.b)).add((QQ => {
          const WQ = this._drawWrappers[QQ];
          if (WQ) {
            for (const QQ of WQ) QQ?.dispose();
            delete this._drawWrappers[QQ]
          }
        }))));
        let PQ = FQ[QQ];
        PQ || (PQ = new tQ.d(this._engine), PQ.drawContext && (PQ.drawContext.useInstancing = this._useInstancing), FQ[QQ] = PQ);
        const gQ = wQ.join("\n");
        if (PQ.defines !== gQ) {
          const QQ = [],
            WQ = [],
            XQ = [];
          this.fillUniformsAttributesAndSamplerNames(WQ, QQ, XQ), zQ && (WQ.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== sQ?.defines.PREPASS_LOCAL_POSITION_INDEX && WQ.push("inverseEmitterWM", "geometryWorldOffset")), PQ.setEffect(this._engine.createEffect("particles", {
            attributes: QQ,
            uniformsNames: WQ,
            samplers: XQ,
            defines: gQ,
            shaderLanguage: this._shaderLanguage,
            multiTarget: zQ,
            indexParameters: zQ ? {
              buffersCount: sQ?._mrtCount ?? 0
            } : void 0
          }, this._engine), gQ)
        }
        return PQ
      }
      _bindGeometryRendering(QQ) {
        const WQ = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          XQ = cW.d.GetConfiguration(WQ);
        if (!XQ?._defines) return;
        QQ.setFloat("objectId", 0), QQ.setInt("meshBlendTag", 0);
        const wQ = this._scene?.activeCamera;
        if (QQ.setFloat2("cameraInfo", wQ?.minZ ?? 0, wQ?.maxZ ?? 1), this.isLocal && void 0 !== XQ.defines.PREPASS_LOCAL_POSITION_INDEX) {
          QQ.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const WQ = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || TQ.s.ZeroReadOnly, TQ.m.vj[0]);
          QQ.setVector3("geometryWorldOffset", WQ)
        }
      }
      animate() {
        let QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!WQ && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (WQ ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) QQ = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const WQ = this._calculateEmitRate();
            QQ = WQ * this._scaledUpdateSpeed | 0, this._newPartsExcess += WQ * this._scaledUpdateSpeed - QQ
          }
          if (this._newPartsExcess > 1 && (QQ += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? QQ = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(QQ), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !WQ) {
            let QQ = 0;
            for (let WQ = 0; WQ < this._particles.length; WQ++) {
              const XQ = this._particles[WQ];
              this._appendParticleVertices(QQ, XQ), QQ += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const QQ = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  WQ = this._particles.length;
                WQ < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, WQ * QQ, this._fixedCapacityHighWaterMark * QQ), this._fixedCapacityHighWaterMark = WQ, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const WQ = this._actualFrame / this.targetStopDuration;
          wQ.l.GetCurrentGradient(WQ, this._emitRateGradients, ((WQ, XQ, wQ) => {
            WQ !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = XQ.getFactor(), this._currentEmitRateGradient = WQ), QQ = (0, IQ.Lerp)(this._currentEmitRate1, this._currentEmitRate2, wQ)
          }))
        }
        return QQ
      }
      _appendParticleVertices(QQ, WQ) {
        this._appendParticleVertex(QQ++, WQ, 0, 0), this._useInstancing || (this._appendParticleVertex(QQ++, WQ, 1, 0), this._appendParticleVertex(QQ++, WQ, 1, 1), this._appendParticleVertex(QQ, WQ, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !AW.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([XQ.e(355).then((() => XQ(61561))), XQ.e(349).then((() => XQ(61568)))])) : await Promise.all([XQ.e(338).then((() => XQ(61575))), Promise.all([XQ.e(331), XQ.e(364)]).then((() => XQ(61580)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== bQ.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(bQ.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(bQ.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(QQ) {
        const WQ = this._getWrapper(QQ),
          XQ = WQ.effect,
          wQ = this._engine;
        wQ.enableEffect(WQ);
        const qQ = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        XQ.setTexture("diffuseSampler", this.particleTexture), XQ.setMatrix("view", qQ);
        const zQ = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (XQ.setMatrix("projection", zQ), this._isAnimationSheetEnabled && this.particleTexture) {
          const QQ = this.particleTexture.getBaseSize();
          XQ.setFloat3("particlesInfos", this.spriteCellWidth / QQ.width, this.spriteCellHeight / QQ.height, this.spriteCellWidth / QQ.width)
        }
        if (XQ.setVector2("translationPivot", this.translationPivot), XQ.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const QQ = this._scene.activeCamera;
          XQ.setVector3("eyePosition", QQ.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), XQ.setTexture("rampSampler", this._rampGradientsTexture));
        const sQ = XQ.defines;
        this._scene && ((0, oQ.d)(XQ, this, this._scene), this.applyFog && (0, eQ.l)(this._scene, void 0, XQ)), sQ.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (qQ.invertToRef(TQ.m.Matrix[0]), XQ.setMatrix("invView", TQ.m.Matrix[0])), XQ._multiTarget && this._bindGeometryRendering(XQ), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? wQ.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, XQ) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, XQ)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? wQ.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, XQ) : wQ.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, XQ), this.useLogarithmicDepth && this._scene && (0, eQ.w)(sQ, XQ, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(XQ), this._setEngineBasedOnBlendMode(QQ), XQ._multiTarget && cW.d._BindZeroAlphaDiscard(wQ, XQ);
        let FQ = !1;
        try {
          cW.d._BindAttachmentsForEffect(wQ, XQ) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(XQ), this._useInstancing ? this._scene?.forceWireframe ? wQ.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : wQ.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? wQ.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : wQ.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), FQ = !0)
        } finally {
          cW.d._RestoreAttachments(wQ)
        }
        return FQ ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const QQ = this._engine;
        let WQ;
        return QQ.setState && (QQ.setState(!1), this.forceDepthWrite && QQ.setDepthWrite(!0)), WQ = this.blendMode === bQ.BLENDMODE_MULTIPLYADD ? this._render(bQ.BLENDMODE_MULTIPLY) + this._render(bQ.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), WQ
      }
      _onDispose() {}
      dispose() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), QQ && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), QQ && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(WQ, XQ), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const QQ = this._scene.KD.indexOf(this);
          QQ > -1 && this._scene.KD.splice(QQ, 1), this._scene._activeParticleSystems.dispose()
        }
        this.yE.notifyObservers(this), this.yE.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    AW.ForceGLSL = !1;
    var RW, EW = XQ(37418);
    ! function(QQ) {
      QQ[QQ.ATTACHED = 0] = "ATTACHED", QQ[QQ.END = 1] = "END"
    }(RW || (RW = {}));
    class CW {
      constructor(QQ) {
        if (this.particleSystem = QQ, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !QQ.emitter || !QQ.emitter.dispose) {
          const WQ = (0, EW.b)("BABYLON.AbstractMesh");
          QQ.emitter = new WQ("SubemitterSystemEmitter", QQ.sE()), QQ._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let QQ = this.particleSystem.emitter;
        if (QQ) {
          if (QQ instanceof TQ.s) QQ = QQ.clone();
          else if (-1 !== QQ.getClassName().indexOf("Mesh")) {
            QQ = new((0, EW.b)("BABYLON.Mesh"))("", QQ.sE()), QQ.isVisible = !1
          }
        } else QQ = new TQ.s;
        const WQ = new CW(this.particleSystem.clone(this.particleSystem.name, QQ));
        return WQ.particleSystem.name += "Clone", WQ.type = this.type, WQ.inheritDirection = this.inheritDirection, WQ.inheritedVelocityAmount = this.inheritedVelocityAmount, WQ.particleSystem._disposeEmitterOnDispose = !0, WQ.particleSystem.disposeOnStop = !0, WQ
      }
      serialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = {};
        return WQ.type = this.type, WQ.inheritDirection = this.inheritDirection, WQ.inheritedVelocityAmount = this.inheritedVelocityAmount, WQ.particleSystem = this.particleSystem.serialize(QQ), WQ
      }
      static _ParseParticleSystem(QQ, WQ, XQ) {
        throw (0, uQ.i)("ParseParticle")
      }
      static Parse(QQ, WQ, XQ) {
        const wQ = QQ.particleSystem,
          qQ = new CW(CW._ParseParticleSystem(wQ, WQ, XQ, !0));
        return qQ.type = QQ.type, qQ.inheritDirection = QQ.inheritDirection, qQ.inheritedVelocityAmount = QQ.inheritedVelocityAmount, qQ.particleSystem._isSubEmitter = !0, qQ
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var uW = XQ(40170),
      LW = XQ(40286);
    const kW = () => {};
    class fW {
      constructor() {
        this.particlePositionGenerator = kW, this.particleDestinationGenerator = kW, this.particleDirectionGenerator = kW
      }
      startDirectionFunction(QQ, WQ, XQ, wQ) {
        const qQ = TQ.m.vj[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== kW) this.particleDirectionGenerator(-1, XQ, qQ);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== kW) {
          this.particleDestinationGenerator(-1, XQ, qQ);
          const QQ = TQ.m.vj[1];
          qQ.subtractToRef(XQ.position, QQ), QQ.scaleToRef(1 / XQ.lifeTime, qQ)
        } else qQ.set(0, 0, 0);
        wQ ? WQ.WH(qQ) : TQ.s.TransformNormalToRef(qQ, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, wQ) {
        const qQ = TQ.m.vj[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== kW ? this.particlePositionGenerator(-1, XQ, qQ) : qQ.set(0, 0, 0), wQ ? WQ.WH(qQ) : TQ.s.TransformCoordinatesToRef(qQ, QQ, WQ)
      }
      clone() {
        const QQ = new fW;
        return rQ.d.DeepCopy(this, QQ), QQ
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
    const SW = TQ.s.Zero(),
      tW = TQ.s.Zero(),
      oW = TQ.s.Zero();
    class eW {
      constructor() {
        this.strength = 0, this.position = TQ.s.Zero()
      }
      _processParticle(QQ, WQ) {
        this.position.subtractToRef(QQ.position, SW);
        const XQ = SW.lengthSquared() + 1;
        SW.normalize().scaleToRef(this.strength / XQ, tW), tW.scaleToRef(WQ._tempScaledUpdateSpeed, oW), QQ.direction.addInPlace(oW)
      }
      serialize() {
        return {
          position: this.position.awQ(),
          strength: this.strength
        }
      }
    }
    const nW = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class xW extends AW {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = QQ => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const WQ = Math.floor(Math.random() * this._subEmitters.length);
          for (const XQ of this._subEmitters[WQ])
            if (1 === XQ.type) {
              const WQ = XQ.clone();
              QQ._inheritParticleInfoToSubEmitter(WQ), WQ.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(WQ.particleSystem), WQ.particleSystem.start()
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
        this._flowMap !== QQ && (this._flowMap = QQ, this._flowMapUpdate && (iW(this._flowMapUpdate), this._flowMapUpdate = null), QQ && (this._flowMapUpdate = {
          process: QQ => {
            const WQ = this.sE()?.getTransformMatrix();
            this._flowMap._processParticle(QQ, this.flowMapStrength * this._tempScaledUpdateSpeed, WQ)
          },
          previousItem: null,
          nextItem: null
        }, hW(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(QQ) {
        super.addAttractor(QQ), 1 === this._attractors.length && (this._attractorUpdate = {
          process: QQ => {
            for (const WQ of this._attractors) WQ._processParticle(QQ, this)
          },
          previousItem: null,
          nextItem: null
        }, hW(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(QQ) {
        super.removeAttractor(QQ), 0 === this._attractors.length && this._attractorUpdate && iW(this._attractorUpdate)
      }
      start() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(QQ)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const QQ of this.subEmitters) QQ instanceof xW ? this._subEmitters.push([new CW(QQ)]) : QQ instanceof CW ? this._subEmitters.push([QQ]) : QQ instanceof Array && this._subEmitters.push(QQ)
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
          const WQ = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          QQ._properties.attachedSubEmitters = [];
          for (const XQ of WQ)
            if (0 === XQ.type) {
              const WQ = XQ.clone();
              QQ._properties.attachedSubEmitters.push(WQ), WQ.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), QQ && this.particles)
          for (const XQ of this.particles)
            if (XQ._properties.attachedSubEmitters)
              for (let QQ = XQ._properties.attachedSubEmitters.length - 1; QQ >= 0; QQ -= 1) XQ._properties.attachedSubEmitters[QQ].dispose();
        if (WQ && this.activeSubSystems)
          for (let XQ = this.activeSubSystems.length - 1; XQ >= 0; XQ -= 1) this.activeSubSystems[XQ].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let QQ = 0; QQ < this._subEmitters.length; QQ++)
            for (const WQ of this._subEmitters[QQ]) WQ.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(QQ, WQ, XQ, wQ) {
        let qQ;
        qQ = XQ instanceof uW.d ? null : XQ;
        const zQ = (0, EW.b)("BABYLON.Texture");
        if (zQ && qQ)
          if (QQ.texture) WQ.particleTexture = zQ.Parse(QQ.texture, qQ, wQ);
          else if (QQ.textureName) {
          const XQ = QQ.textureSettings;
          if (WQ.particleTexture = new zQ(wQ + QQ.textureName, qQ, !1, void 0 === QQ.invertY || QQ.invertY, XQ ? XQ.samplingMode : void 0), WQ.particleTexture.name = QQ.textureName, XQ) {
            const QQ = WQ.particleTexture;
            for (const WQ of nW) void 0 !== XQ[WQ] && (QQ[WQ] = XQ[WQ])
          }
        }
        if (QQ.emitterId || 0 === QQ.emitterId || void 0 !== QQ.emitter ? (QQ.emitterId || 0 === QQ.emitterId) && qQ ? (WQ.emitter = qQ.getLastMeshById(QQ.emitterId), WQ.emitter || (WQ.emitter = TQ.s.Zero())) : WQ.emitter = TQ.s.FromArray(QQ.emitter) : WQ.emitter = TQ.s.Zero(), WQ.isLocal = !!QQ.isLocal, void 0 !== QQ.renderingGroupId && (WQ.renderingGroupId = QQ.renderingGroupId), void 0 !== QQ.isBillboardBased && (WQ.isBillboardBased = QQ.isBillboardBased), void 0 !== QQ.billboardMode && (WQ.billboardMode = QQ.billboardMode), void 0 !== QQ.useLogarithmicDepth && (WQ.useLogarithmicDepth = QQ.useLogarithmicDepth), QQ.animations) {
          for (let XQ = 0; XQ < QQ.animations.length; XQ++) {
            const wQ = QQ.animations[XQ],
              qQ = (0, EW.b)("BABYLON.Animation");
            qQ && WQ.animations.push(qQ.Parse(wQ))
          }
          WQ.beginAnimationOnStart = QQ.beginAnimationOnStart, WQ.beginAnimationFrom = QQ.beginAnimationFrom, WQ.beginAnimationTo = QQ.beginAnimationTo, WQ.beginAnimationLoop = QQ.beginAnimationLoop
        }
        if (QQ.autoAnimate && qQ && qQ.beginAnimation(WQ, QQ.autoAnimateFrom, QQ.autoAnimateTo, QQ.autoAnimateLoop, QQ.autoAnimateSpeed || 1), WQ.startDelay = 0 | QQ.startDelay, WQ.minAngularSpeed = QQ.minAngularSpeed, WQ.maxAngularSpeed = QQ.maxAngularSpeed, WQ.minSize = QQ.minSize, WQ.maxSize = QQ.maxSize, QQ.minScaleX && (WQ.minScaleX = QQ.minScaleX, WQ.maxScaleX = QQ.maxScaleX, WQ.minScaleY = QQ.minScaleY, WQ.maxScaleY = QQ.maxScaleY), void 0 !== QQ.preWarmCycles && (WQ.preWarmCycles = QQ.preWarmCycles, WQ.preWarmStepOffset = QQ.preWarmStepOffset), void 0 !== QQ.minInitialRotation && (WQ.minInitialRotation = QQ.minInitialRotation, WQ.maxInitialRotation = QQ.maxInitialRotation), WQ.minLifeTime = QQ.minLifeTime, WQ.maxLifeTime = QQ.maxLifeTime, WQ.minEmitPower = QQ.minEmitPower, WQ.maxEmitPower = QQ.maxEmitPower, WQ.emitRate = QQ.emitRate, WQ.gravity = TQ.s.FromArray(QQ.gravity), QQ.noiseStrength && (WQ.noiseStrength = TQ.s.FromArray(QQ.noiseStrength)), WQ.color1 = gQ.d.FromArray(QQ.color1), WQ.color2 = gQ.d.FromArray(QQ.color2), WQ.colorDead = gQ.d.FromArray(QQ.colorDead), WQ.updateSpeed = QQ.updateSpeed, WQ.targetStopDuration = QQ.targetStopDuration, WQ.blendMode = QQ.blendMode, QQ.colorGradients)
          for (const TQ of QQ.colorGradients) WQ.addColorGradient(TQ.gradient, gQ.d.FromArray(TQ.color1), TQ.color2 ? gQ.d.FromArray(TQ.color2) : void 0);
        if (QQ.rampGradients) {
          for (const XQ of QQ.rampGradients) WQ.addRampGradient(XQ.gradient, gQ.b.FromArray(XQ.color));
          WQ.useRampGradients = QQ.useRampGradients
        }
        if (QQ.colorRemapGradients)
          for (const TQ of QQ.colorRemapGradients) WQ.addColorRemapGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.alphaRemapGradients)
          for (const TQ of QQ.alphaRemapGradients) WQ.addAlphaRemapGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.sizeGradients)
          for (const TQ of QQ.sizeGradients) WQ.addSizeGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.angularSpeedGradients)
          for (const TQ of QQ.angularSpeedGradients) WQ.addAngularSpeedGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.velocityGradients)
          for (const TQ of QQ.velocityGradients) WQ.addVelocityGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.dragGradients)
          for (const TQ of QQ.dragGradients) WQ.addDragGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.emitRateGradients)
          for (const TQ of QQ.emitRateGradients) WQ.addEmitRateGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.startSizeGradients)
          for (const TQ of QQ.startSizeGradients) WQ.addStartSizeGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.lifeTimeGradients)
          for (const TQ of QQ.lifeTimeGradients) WQ.addLifeTimeGradient(TQ.gradient, void 0 !== TQ.factor1 ? TQ.factor1 : TQ.factor, TQ.factor2);
        if (QQ.limitVelocityGradients) {
          for (const XQ of QQ.limitVelocityGradients) WQ.addLimitVelocityGradient(XQ.gradient, void 0 !== XQ.factor1 ? XQ.factor1 : XQ.factor, XQ.factor2);
          WQ.limitVelocityDamping = QQ.limitVelocityDamping
        }
        if (QQ.noiseTexture && qQ) {
          const XQ = (0, EW.b)("BABYLON.ProceduralTexture");
          WQ.noiseTexture = XQ.Parse(QQ.noiseTexture, qQ, wQ)
        }
        let sQ;
        if (QQ.particleEmitterType) {
          switch (QQ.particleEmitterType.type) {
            case "SphereParticleEmitter":
              sQ = new yQ;
              break;
            case "SphereDirectedParticleEmitter":
              sQ = new VQ;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              sQ = new pQ;
              break;
            case "ConeDirectedParticleEmitter":
              sQ = new GQ;
              break;
            case "CylinderParticleEmitter":
              sQ = new DQ.g;
              break;
            case "CylinderDirectedParticleEmitter":
              sQ = new DQ.d;
              break;
            case "HemisphericParticleEmitter":
              sQ = new BQ;
              break;
            case "PointParticleEmitter":
              sQ = new jQ;
              break;
            case "MeshParticleEmitter":
              sQ = new UQ;
              break;
            case "CustomParticleEmitter":
              sQ = new fW;
              break;
            default:
              sQ = new JQ.c
          }
          sQ.parse(QQ.particleEmitterType, qQ)
        } else sQ = new JQ.c, sQ.parse(QQ, qQ);
        WQ.particleEmitterType = sQ, WQ.startSpriteCellID = QQ.startSpriteCellID, WQ.endSpriteCellID = QQ.endSpriteCellID, WQ.spriteCellLoop = QQ.spriteCellLoop ?? !0, WQ.spriteCellWidth = QQ.spriteCellWidth, WQ.spriteCellHeight = QQ.spriteCellHeight, WQ.spriteCellChangeSpeed = QQ.spriteCellChangeSpeed, WQ.spriteRandomStartCell = QQ.spriteRandomStartCell, WQ.disposeOnStop = QQ.disposeOnStop ?? !1, WQ.manualEmitCount = QQ.manualEmitCount ?? -1
      }
      static Parse(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        const zQ = QQ.name;
        let sQ, FQ, PQ = null,
          JQ = null;
        if (WQ instanceof uW.d ? sQ = WQ : (FQ = WQ, sQ = FQ.Uj()), QQ.customShader && (0, uQ.d)(sQ.createEffectForParticles)) {
          JQ = QQ.customShader;
          const WQ = JQ.shaderOptions.defines.length > 0 ? JQ.shaderOptions.defines.join("\n") : "";
          PQ = sQ.createEffectForParticles(JQ.shaderPath.fragmentElement, JQ.shaderOptions.uniforms, JQ.shaderOptions.samplers, WQ)
        }
        const rQ = new xW(zQ, qQ || QQ.yJ, WQ, PQ, QQ.isAnimationSheetEnabled);
        if (rQ.customShader = JQ, rQ._rootUrl = XQ, QQ.id && (rQ.id = QQ.id), QQ.subEmitters) {
          rQ.subEmitters = [];
          for (const wQ of QQ.subEmitters) {
            const QQ = [];
            for (const qQ of wQ) QQ.push(CW.Parse(qQ, WQ, XQ));
            rQ.subEmitters.push(QQ)
          }
        }
        if (QQ.attractors)
          for (const gQ of QQ.attractors) {
            const QQ = new eW;
            QQ.position = TQ.s.FromArray(gQ.position), QQ.strength = gQ.strength, rQ.addAttractor(QQ)
          }
        return xW._Parse(QQ, rQ, WQ, XQ), QQ.textureMask && (rQ.textureMask = gQ.d.FromArray(QQ.textureMask)), QQ.worldOffset && (rQ.worldOffset = TQ.s.FromArray(QQ.worldOffset)), QQ.preventAutoStart && (rQ.preventAutoStart = QQ.preventAutoStart), QQ.metadata && (rQ.metadata = QQ.metadata), wQ || rQ.preventAutoStart || rQ.start(), rQ
      }
      serialize() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = {};
        if (xW._Serialize(WQ, this, QQ), WQ.textureMask = this.textureMask.awQ(), WQ.customShader = this.customShader, WQ.preventAutoStart = this.preventAutoStart, WQ.worldOffset = this.worldOffset.awQ(), this.metadata && (WQ.metadata = this.metadata), this.subEmitters) {
          WQ.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const XQ of this._subEmitters) {
            const wQ = [];
            for (const WQ of XQ) WQ.particleSystem.doNotSerialize || wQ.push(WQ.serialize(QQ));
            WQ.subEmitters.push(wQ)
          }
        }
        if (this._attractors && this._attractors.length) {
          WQ.attractors = [];
          for (const QQ of this._attractors) WQ.attractors.push(QQ.serialize())
        }
        return WQ
      }
      static _Serialize(QQ, WQ, XQ) {
        if (QQ.name = WQ.name, QQ.id = WQ.id, QQ.yJ = WQ.getCapacity(), QQ.disposeOnStop = WQ.disposeOnStop, QQ.manualEmitCount = WQ.manualEmitCount, WQ.emitter.position) {
          const XQ = WQ.emitter;
          QQ.emitterId = XQ.id
        } else {
          const XQ = WQ.emitter;
          QQ.emitter = XQ.awQ()
        }
        if (WQ.particleEmitterType && (QQ.particleEmitterType = WQ.particleEmitterType.serialize()), WQ.particleTexture)
          if (XQ) QQ.texture = WQ.particleTexture.serialize();
          else {
            const XQ = WQ.particleTexture;
            QQ.textureName = WQ.particleTexture.name, QQ.invertY = !!XQ._invertY;
            const wQ = {};
            for (const QQ of nW) wQ[QQ] = XQ[QQ];
            wQ.samplingMode = XQ.samplingMode, QQ.textureSettings = wQ
          } QQ.isLocal = WQ.isLocal, LW.b.AppendSerializedAnimations(WQ, QQ), QQ.beginAnimationOnStart = WQ.beginAnimationOnStart, QQ.beginAnimationFrom = WQ.beginAnimationFrom, QQ.beginAnimationTo = WQ.beginAnimationTo, QQ.beginAnimationLoop = WQ.beginAnimationLoop, QQ.startDelay = WQ.startDelay, QQ.renderingGroupId = WQ.renderingGroupId, QQ.isBillboardBased = WQ.isBillboardBased, QQ.billboardMode = WQ.billboardMode, QQ.minAngularSpeed = WQ.minAngularSpeed, QQ.maxAngularSpeed = WQ.maxAngularSpeed, QQ.minSize = WQ.minSize, QQ.maxSize = WQ.maxSize, QQ.minScaleX = WQ.minScaleX, QQ.maxScaleX = WQ.maxScaleX, QQ.minScaleY = WQ.minScaleY, QQ.maxScaleY = WQ.maxScaleY, QQ.minEmitPower = WQ.minEmitPower, QQ.maxEmitPower = WQ.maxEmitPower, QQ.minLifeTime = WQ.minLifeTime, QQ.maxLifeTime = WQ.maxLifeTime, QQ.emitRate = WQ.emitRate, QQ.gravity = WQ.gravity.awQ(), QQ.noiseStrength = WQ.noiseStrength.awQ(), QQ.color1 = WQ.color1.awQ(), QQ.color2 = WQ.color2.awQ(), QQ.colorDead = WQ.colorDead.awQ(), QQ.updateSpeed = WQ.updateSpeed, QQ.targetStopDuration = WQ.targetStopDuration, QQ.blendMode = WQ.blendMode, QQ.preWarmCycles = WQ.preWarmCycles, QQ.preWarmStepOffset = WQ.preWarmStepOffset, QQ.minInitialRotation = WQ.minInitialRotation, QQ.maxInitialRotation = WQ.maxInitialRotation, QQ.startSpriteCellID = WQ.startSpriteCellID, QQ.spriteCellLoop = WQ.spriteCellLoop, QQ.endSpriteCellID = WQ.endSpriteCellID, QQ.spriteCellChangeSpeed = WQ.spriteCellChangeSpeed, QQ.spriteCellWidth = WQ.spriteCellWidth, QQ.spriteCellHeight = WQ.spriteCellHeight, QQ.spriteRandomStartCell = WQ.spriteRandomStartCell, QQ.isAnimationSheetEnabled = WQ.isAnimationSheetEnabled, QQ.useLogarithmicDepth = WQ.useLogarithmicDepth;
        const wQ = WQ.getColorGradients();
        if (wQ) {
          QQ.colorGradients = [];
          for (const WQ of wQ) {
            const XQ = {
              gradient: WQ.gradient,
              color1: WQ.color1.awQ()
            };
            WQ.color2 ? XQ.color2 = WQ.color2.awQ() : XQ.color2 = WQ.color1.awQ(), QQ.colorGradients.push(XQ)
          }
        }
        const qQ = WQ.getRampGradients();
        if (qQ) {
          QQ.rampGradients = [];
          for (const WQ of qQ) {
            const XQ = {
              gradient: WQ.gradient,
              color: WQ.color.awQ()
            };
            QQ.rampGradients.push(XQ)
          }
          QQ.useRampGradients = WQ.useRampGradients
        }
        const TQ = WQ.getColorRemapGradients();
        if (TQ) {
          QQ.colorRemapGradients = [];
          for (const WQ of TQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.colorRemapGradients.push(XQ)
          }
        }
        const zQ = WQ.getAlphaRemapGradients();
        if (zQ) {
          QQ.alphaRemapGradients = [];
          for (const WQ of zQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.alphaRemapGradients.push(XQ)
          }
        }
        const sQ = WQ.getSizeGradients();
        if (sQ) {
          QQ.sizeGradients = [];
          for (const WQ of sQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.sizeGradients.push(XQ)
          }
        }
        const FQ = WQ.getAngularSpeedGradients();
        if (FQ) {
          QQ.angularSpeedGradients = [];
          for (const WQ of FQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.angularSpeedGradients.push(XQ)
          }
        }
        const PQ = WQ.getVelocityGradients();
        if (PQ) {
          QQ.velocityGradients = [];
          for (const WQ of PQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.velocityGradients.push(XQ)
          }
        }
        const gQ = WQ.getDragGradients();
        if (gQ) {
          QQ.dragGradients = [];
          for (const WQ of gQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.dragGradients.push(XQ)
          }
        }
        const JQ = WQ.getEmitRateGradients();
        if (JQ) {
          QQ.emitRateGradients = [];
          for (const WQ of JQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.emitRateGradients.push(XQ)
          }
        }
        const rQ = WQ.getStartSizeGradients();
        if (rQ) {
          QQ.startSizeGradients = [];
          for (const WQ of rQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.startSizeGradients.push(XQ)
          }
        }
        const IQ = WQ.getLifeTimeGradients();
        if (IQ) {
          QQ.lifeTimeGradients = [];
          for (const WQ of IQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.lifeTimeGradients.push(XQ)
          }
        }
        const jQ = WQ.getLimitVelocityGradients();
        if (jQ) {
          QQ.limitVelocityGradients = [];
          for (const WQ of jQ) {
            const XQ = {
              gradient: WQ.gradient,
              factor1: WQ.factor1
            };
            void 0 !== WQ.factor2 ? XQ.factor2 = WQ.factor2 : XQ.factor2 = WQ.factor1, QQ.limitVelocityGradients.push(XQ)
          }
          QQ.limitVelocityDamping = WQ.limitVelocityDamping
        }
        WQ.noiseTexture && (QQ.noiseTexture = WQ.noiseTexture.serialize())
      }
      clone(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = {
          ...this._customWrappers
        };
        let qQ = null;
        const TQ = this._engine;
        if ((0, uQ.d)(TQ.createEffectForParticles) && null != this.customShader) {
          qQ = this.customShader;
          const QQ = qQ.shaderOptions.defines.length > 0 ? qQ.shaderOptions.defines.join("\n") : "",
            WQ = TQ.createEffectForParticles(qQ.shaderPath.fragmentElement, qQ.shaderOptions.uniforms, qQ.shaderOptions.samplers, QQ);
          wQ[0] ? wQ[0].effect = WQ : this.setCustomEffect(WQ, 0)
        }
        const zQ = this.serialize(XQ),
          sQ = !1 === XQ && this.particleTexture ? this.particleTexture.clone() : null;
        sQ && (zQ.textureName = void 0);
        const FQ = xW.Parse(zQ, this._scene || this._engine, this._rootUrl);
        return FQ.name = QQ, FQ.customShader = qQ, FQ._customWrappers = wQ, sQ && (FQ.particleTexture = sQ), void 0 === WQ && (WQ = this.emitter), this.noiseTexture && (FQ.noiseTexture = this.noiseTexture.clone()), FQ.emitter = WQ, this.preventAutoStart || FQ.start(), FQ
      }
    }
    xW.BILLBOARDMODE_Y = 2, xW.BILLBOARDMODE_ALL = 7, xW.BILLBOARDMODE_STRETCHED = 8, xW.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let YW = !1;
    YW || (YW = !0, CW._ParseParticleSystem = xW.Parse)
  },
  41875: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      SkyMaterial: () => pQ,
      _MaxColorValueForRenderTarget: () => DQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40286),
      zQ = XQ(37367),
      sQ = XQ(40542),
      FQ = XQ(40596),
      PQ = XQ(41834),
      gQ = XQ(41373),
      JQ = XQ(40349),
      rQ = XQ(37418),
      IQ = XQ(40623),
      jQ = XQ(40602),
      BQ = XQ(40589),
      yQ = XQ(40584);
    class VQ extends sQ.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function DQ(QQ) {
      switch (QQ) {
        case PQ.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case PQ.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let pQ = (() => {
      var QQ;
      let WQ, sQ, PQ, rQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ = FQ.d,
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [],
        tQ = [],
        oQ = [],
        eQ = [],
        nQ = [],
        xQ = [],
        YQ = [],
        NQ = [],
        ZQ = [],
        OQ = [],
        KQ = [],
        mQ = [],
        MQ = [],
        QW = [],
        WW = [],
        XW = [],
        wW = [],
        qW = [],
        TW = [],
        zW = [],
        sW = [],
        FW = [];
      return QQ = class extends cQ {
        constructor(QQ, WQ) {
          super(QQ, WQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, wQ.n)(this, AQ, 1), this.turbidity = ((0, wQ.n)(this, RQ), (0, wQ.n)(this, EQ, 10)), this.rayleigh = ((0, wQ.n)(this, CQ), (0, wQ.n)(this, uQ, 2)), this.mieCoefficient = ((0, wQ.n)(this, LQ), (0, wQ.n)(this, kQ, .005)), this.mieDirectionalG = ((0, wQ.n)(this, fQ), (0, wQ.n)(this, SQ, .8)), this.distance = ((0, wQ.n)(this, tQ), (0, wQ.n)(this, oQ, 500)), this.inclination = ((0, wQ.n)(this, eQ), (0, wQ.n)(this, nQ, .49)), this.azimuth = ((0, wQ.n)(this, xQ), (0, wQ.n)(this, YQ, .25)), this.sunPosition = ((0, wQ.n)(this, NQ), (0, wQ.n)(this, ZQ, new zQ.vj(0, 100, 0))), this.useSunPosition = ((0, wQ.n)(this, OQ), (0, wQ.n)(this, KQ, !1)), this.cameraOffset = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, zQ.vj.Zero())), this.up = ((0, wQ.n)(this, QW), (0, wQ.n)(this, WW, zQ.vj.Up())), this.dithering = ((0, wQ.n)(this, XW), (0, wQ.n)(this, wW, !1)), this.rawHdrOutput = ((0, wQ.n)(this, qW), (0, wQ.n)(this, TW, !1)), this.cloudiness = ((0, wQ.n)(this, zW), (0, wQ.n)(this, sW, 0)), this._cameraPosition = ((0, wQ.n)(this, FW), zQ.vj.Zero()), this._skyOrientation = new zQ.Quaternion
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
        isReadyForSubMesh(WQ, XQ) {
          const wQ = XQ._drawWrapper;
          if (this.isFrozen && wQ.effect && wQ._wasPreviouslyReady) return !0;
          XQ.materialDefines || (XQ.materialDefines = new VQ);
          const qQ = XQ.materialDefines,
            TQ = this.sE();
          if (this._isReadyForSubMesh(XQ)) return !0;
          if ((0, yQ.fb)(WQ, TQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, qQ, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, yQ.X)(WQ, qQ, !0, !1), qQ.IMAGEPROCESSINGPOSTPROCESS !== TQ.imageProcessingConfiguration.applyByPostProcess && qQ.markAsMiscDirty(), qQ.DITHER !== this.dithering && qQ.markAsMiscDirty(), qQ.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && qQ.markAsMiscDirty(), qQ.isDirty) {
            qQ.markAsProcessed(), TQ.resetCachedMaterial();
            const WQ = new jQ.e;
            qQ.FOG && WQ.addFallback(1, "FOG"), qQ.IMAGEPROCESSINGPOSTPROCESS = TQ.imageProcessingConfiguration.applyByPostProcess, qQ.DITHER = this.dithering, qQ.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const wQ = [gQ.f.PositionKind];
            qQ.VERTEXCOLOR && wQ.push(gQ.f.ColorKind);
            const zQ = "sky",
              sQ = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, BQ.c)(sQ);
            const FQ = qQ.toString();
            XQ.setEffect(TQ.Uj().createEffect(zQ, {
              attributes: wQ,
              uniformsNames: sQ,
              uniformBuffersNames: [],
              samplers: [],
              defines: FQ,
              fallbacks: WQ,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, TQ.Uj()), qQ, this._materialContext)
          }
          return !(!XQ.effect || !XQ.effect.isReady()) && (qQ._renderId = TQ.getRenderId(), wQ._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(QQ, WQ, XQ) {
          const wQ = this.sE(),
            qQ = XQ.materialDefines;
          if (!qQ) return;
          const TQ = XQ.effect;
          if (!TQ) return;
          this._activeEffect = TQ, this.bindOnlyWorldMatrix(QQ), this._activeEffect.setMatrix("viewProjection", wQ.getTransformMatrix()), this._mustRebind(wQ, TQ, XQ) && ((0, BQ.d)(TQ, this, wQ), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, yQ.w)(qQ, TQ, wQ)), wQ.fogEnabled && WQ.applyFog && wQ.fogMode !== JQ.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", wQ.getViewMatrix()), (0, yQ.l)(wQ, WQ, this._activeEffect, this.rawHdrOutput);
          const sQ = wQ.activeCamera;
          if (sQ) {
            const QQ = sQ.getWorldMatrix();
            this._cameraPosition.x = QQ.m[12], this._cameraPosition.y = QQ.m[13], this._cameraPosition.z = QQ.m[14], this._activeEffect.setVector3("cameraPosition", zQ.TmpVectors.vj[0].WH(this._cameraPosition).YwQ(wQ.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const QQ = wQ.Uj()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", DQ(QQ?.texture?.type))
          }
          if (!this.useSunPosition) {
            const QQ = Math.PI * (this.inclination - .5),
              WQ = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(WQ) * Math.cos(QQ), this.sunPosition.y = this.distance * Math.sin(-QQ), this.sunPosition.z = this.distance * Math.sin(WQ) * Math.cos(QQ), zQ.Quaternion.FromUnitVectorsToRef(zQ.vj.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(WQ, this._activeEffect, XQ)
        }
        getAnimatables() {
          return []
        }
        dispose(QQ) {
          super.dispose(QQ)
        }
        clone(WQ) {
          return TQ.b.Clone((() => new QQ(WQ, this.sE())), this)
        }
        serialize() {
          const QQ = super.serialize();
          return QQ.customType = "BABYLON.SkyMaterial", QQ
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(WQ, XQ, wQ) {
          return TQ.b.Parse((() => new QQ(WQ.name, XQ)), WQ, XQ, wQ)
        }
      }, (() => {
        const XQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(cQ[Symbol.metadata] ?? null) : void 0;
        WQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], vQ = [(0, qQ.F)()], dQ = [(0, qQ.I)()], HQ = [(0, qQ.F)()], aQ = [(0, qQ.F)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "luminance" in QQ,
            get: QQ => QQ.luminance,
            set: (QQ, WQ) => {
              QQ.luminance = WQ
            }
          },
          metadata: XQ
        }, AQ, RQ), (0, wQ.k)(null, null, sQ, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "turbidity" in QQ,
            get: QQ => QQ.turbidity,
            set: (QQ, WQ) => {
              QQ.turbidity = WQ
            }
          },
          metadata: XQ
        }, EQ, CQ), (0, wQ.k)(null, null, PQ, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: QQ => "rayleigh" in QQ,
            get: QQ => QQ.rayleigh,
            set: (QQ, WQ) => {
              QQ.rayleigh = WQ
            }
          },
          metadata: XQ
        }, uQ, LQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mieCoefficient" in QQ,
            get: QQ => QQ.mieCoefficient,
            set: (QQ, WQ) => {
              QQ.mieCoefficient = WQ
            }
          },
          metadata: XQ
        }, kQ, fQ), (0, wQ.k)(null, null, pQ, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: QQ => "mieDirectionalG" in QQ,
            get: QQ => QQ.mieDirectionalG,
            set: (QQ, WQ) => {
              QQ.mieDirectionalG = WQ
            }
          },
          metadata: XQ
        }, SQ, tQ), (0, wQ.k)(null, null, GQ, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: QQ => "distance" in QQ,
            get: QQ => QQ.distance,
            set: (QQ, WQ) => {
              QQ.distance = WQ
            }
          },
          metadata: XQ
        }, oQ, eQ), (0, wQ.k)(null, null, UQ, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: QQ => "inclination" in QQ,
            get: QQ => QQ.inclination,
            set: (QQ, WQ) => {
              QQ.inclination = WQ
            }
          },
          metadata: XQ
        }, nQ, xQ), (0, wQ.k)(null, null, bQ, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: QQ => "azimuth" in QQ,
            get: QQ => QQ.azimuth,
            set: (QQ, WQ) => {
              QQ.azimuth = WQ
            }
          },
          metadata: XQ
        }, YQ, NQ), (0, wQ.k)(null, null, vQ, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: QQ => "sunPosition" in QQ,
            get: QQ => QQ.sunPosition,
            set: (QQ, WQ) => {
              QQ.sunPosition = WQ
            }
          },
          metadata: XQ
        }, ZQ, OQ), (0, wQ.k)(null, null, dQ, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: QQ => "useSunPosition" in QQ,
            get: QQ => QQ.useSunPosition,
            set: (QQ, WQ) => {
              QQ.useSunPosition = WQ
            }
          },
          metadata: XQ
        }, KQ, mQ), (0, wQ.k)(null, null, HQ, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: QQ => "cameraOffset" in QQ,
            get: QQ => QQ.cameraOffset,
            set: (QQ, WQ) => {
              QQ.cameraOffset = WQ
            }
          },
          metadata: XQ
        }, MQ, QW), (0, wQ.k)(null, null, aQ, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: QQ => "up" in QQ,
            get: QQ => QQ.up,
            set: (QQ, WQ) => {
              QQ.up = WQ
            }
          },
          metadata: XQ
        }, WW, XW), (0, wQ.k)(null, null, lQ, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: QQ => "dithering" in QQ,
            get: QQ => QQ.dithering,
            set: (QQ, WQ) => {
              QQ.dithering = WQ
            }
          },
          metadata: XQ
        }, wW, qW), (0, wQ.k)(null, null, hQ, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: QQ => "rawHdrOutput" in QQ,
            get: QQ => QQ.rawHdrOutput,
            set: (QQ, WQ) => {
              QQ.rawHdrOutput = WQ
            }
          },
          metadata: XQ
        }, TW, zW), (0, wQ.k)(null, null, iQ, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: QQ => "cloudiness" in QQ,
            get: QQ => QQ.cloudiness,
            set: (QQ, WQ) => {
              QQ.cloudiness = WQ
            }
          },
          metadata: XQ
        }, sW, FW), XQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XQ
        })
      })(), QQ._ShaderLoader = new IQ.e((() => [XQ.e(339).then((() => XQ(61587))), XQ.e(332).then((() => XQ(61592)))]), (() => [XQ.e(356).then((() => XQ(61600))), XQ.e(350).then((() => XQ(61602)))])), QQ
    })();
    (0, rQ.d)("BABYLON.SkyMaterial", pQ)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);