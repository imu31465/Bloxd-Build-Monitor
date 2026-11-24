export const id = 308;
export const ids = [308];
export const modules = {
  41869: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(40314),
      op = cp(41871);
    class Ip {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = cp, this.sOp = [], this._maxBlockCapacity = ip || 64, this._selectionContent = new Op.d(1024), this._creationFunc = pp
      }
      update(pp, ip, cp) {
        op.b._CreateBlocks(pp, ip, cp, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      TOp(pp) {
        for (let ip = 0; ip < this.blocks.length; ip++) {
          this.blocks[ip].addEntry(pp)
        }
      }
      xJ(pp) {
        for (let ip = 0; ip < this.blocks.length; ip++) {
          this.blocks[ip].removeEntry(pp)
        }
      }
      select(pp, ip) {
        this._selectionContent.reset();
        for (let cp = 0; cp < this.blocks.length; cp++) {
          this.blocks[cp].select(pp, this._selectionContent, ip)
        }
        return ip ? this._selectionContent.concat(this.sOp) : this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
      }
      intersects(pp, ip, cp) {
        this._selectionContent.reset();
        for (let Op = 0; Op < this.blocks.length; Op++) {
          this.blocks[Op].intersects(pp, ip, this._selectionContent, cp)
        }
        return cp ? this._selectionContent.concat(this.sOp) : this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
      }
      intersectsRay(pp) {
        this._selectionContent.reset();
        for (let ip = 0; ip < this.blocks.length; ip++) {
          this.blocks[ip].intersectsRay(pp, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
      }
    }
    Ip.CreationFuncForMeshes = (pp, ip) => {
      const cp = pp.bJ();
      !pp.isBlocked && cp.boundingBox.intersectsMinMax(ip.nOp, ip.aOp) && ip.entries.push(pp)
    }, Ip.CreationFuncForSubMeshes = (pp, ip) => {
      pp.bJ().boundingBox.intersectsMinMax(ip.nOp, ip.aOp) && ip.entries.push(pp)
    }
  },
  41871: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(37320),
      op = cp(40504);
    class Ip {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.entries = [], this.KOp = new Array, this._capacity = cp, this._depth = Op, this._maxDepth = op, this._creationFunc = Ip, this._minPoint = pp, this._maxPoint = ip, this.KOp.push(pp.clone()), this.KOp.push(ip.clone()), this.KOp.push(pp.clone()), this.KOp[2].x = ip.x, this.KOp.push(pp.clone()), this.KOp[3].y = ip.y, this.KOp.push(pp.clone()), this.KOp[4].z = ip.z, this.KOp.push(ip.clone()), this.KOp[5].z = pp.z, this.KOp.push(ip.clone()), this.KOp[6].x = pp.x, this.KOp.push(ip.clone()), this.KOp[7].y = pp.y
      }
      get TA() {
        return this._capacity
      }
      get nOp() {
        return this._minPoint
      }
      get aOp() {
        return this._maxPoint
      }
      addEntry(pp) {
        if (this.blocks)
          for (let ip = 0; ip < this.blocks.length; ip++) {
            this.blocks[ip].addEntry(pp)
          } else this._creationFunc(pp, this), this.entries.length > this.TA && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(pp) {
        if (this.blocks) {
          for (let ip = 0; ip < this.blocks.length; ip++) {
            this.blocks[ip].removeEntry(pp)
          }
          return
        }
        const ip = this.entries.indexOf(pp);
        ip > -1 && this.entries.splice(ip, 1)
      }
      addEntries(pp) {
        for (let ip = 0; ip < pp.length; ip++) {
          const cp = pp[ip];
          this.addEntry(cp)
        }
      }
      select(pp, ip, cp) {
        if (op.d.IsInFrustum(this.KOp, pp)) {
          if (this.blocks) {
            for (let Op = 0; Op < this.blocks.length; Op++) {
              this.blocks[Op].select(pp, ip, cp)
            }
            return
          }
          cp ? ip.concat(this.entries) : ip.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(pp, ip, cp, Op) {
        if (op.d.IntersectsSphere(this._minPoint, this._maxPoint, pp, ip)) {
          if (this.blocks) {
            for (let op = 0; op < this.blocks.length; op++) {
              this.blocks[op].intersects(pp, ip, cp, Op)
            }
            return
          }
          Op ? cp.concat(this.entries) : cp.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(pp, ip) {
        if (pp.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let cp = 0; cp < this.blocks.length; cp++) {
              this.blocks[cp].intersectsRay(pp, ip)
            }
            return
          }
          ip.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Ip._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(pp, ip, cp, op, Sp, xp, Lp, Yp) {
        Lp.blocks = new Array;
        const Dp = new Op.o((ip.x - pp.x) / 2, (ip.y - pp.y) / 2, (ip.z - pp.z) / 2);
        for (let Op = 0; Op < 2; Op++)
          for (let ip = 0; ip < 2; ip++)
            for (let Ap = 0; Ap < 2; Ap++) {
              const Pp = pp.add(Dp.multiplyByFloats(Op, ip, Ap)),
                Wp = pp.add(Dp.multiplyByFloats(Op + 1, ip + 1, Ap + 1)),
                yp = new Ip(Pp, Wp, op, Sp + 1, xp, Yp);
              yp.addEntries(cp), Lp.blocks.push(yp)
            }
      }
    }
  },
  41879: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp
    });
    var Op = cp(40296),
      op = cp(37320),
      Ip = cp(40614),
      Sp = cp(41810),
      xp = cp(40368),
      Lp = cp(37345),
      Yp = cp(41869);
    class Dp {
      constructor(pp) {
        this.name = xp.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Sp.D(op.o.Zero(), new op.o(1, 1, 1)), (pp = pp || Lp.e.LastCreatedScene) && (this.pw = pp, this.pw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.pw.getActiveSubMeshCandidates = pp => this.getActiveSubMeshCandidates(pp), this.pw.getCollidingSubMeshCandidates = (pp, ip) => this.getCollidingSubMeshCandidates(pp, ip), this.pw.getIntersectingSubMeshCandidates = (pp, ip) => this.getIntersectingSubMeshCandidates(pp, ip))
      }
      register() {
        this.pw.onMeshRemovedObservable.add((pp => {
          const ip = this.pw.selectionOctree;
          if (void 0 !== ip && null !== ip) {
            const cp = ip.sOp.indexOf(pp); - 1 !== cp && ip.sOp.splice(cp, 1)
          }
        })), this.pw.onMeshImportedObservable.add((pp => {
          const ip = this.pw.selectionOctree;
          void 0 !== ip && null !== ip && ip.TOp(pp)
        }))
      }
      getActiveMeshCandidates() {
        return this.pw.xop?.select(this.pw.frustumPlanes) || this.pw._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(pp) {
        if (pp._submeshesOctree && pp.useOctreeForRenderingSelection) {
          return pp._submeshesOctree.select(this.pw.frustumPlanes)
        }
        return this.pw._getDefaultSubMeshCandidates(pp)
      }
      getIntersectingSubMeshCandidates(pp, ip) {
        if (pp._submeshesOctree && pp.useOctreeForPicking) {
          Sp.D.TransformToRef(ip, pp.getWorldMatrix(), this._tempRay);
          return pp._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.pw._getDefaultSubMeshCandidates(pp)
      }
      getCollidingSubMeshCandidates(pp, ip) {
        if (pp._submeshesOctree && pp.useOctreeForCollisions) {
          const cp = ip._velocityWorldLength + Math.max(ip._radius.x, ip._radius.y, ip._radius.z);
          return pp._submeshesOctree.intersects(ip._basePointWorld, cp)
        }
        return this.pw._getDefaultSubMeshCandidates(pp)
      }
      rebuild() {}
      dispose() {}
    }
    let Ap = !1;
    Ap || (Ap = !0, Op.f.prototype.createOrUpdateSelectionOctree = function() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        cp = this._getComponent(xp.e.NAME_OCTREE);
      cp || (cp = new Dp(this), this.uOp(cp)), this.xop || (this.xop = new Yp.d(Yp.d.CreationFuncForMeshes, pp, ip));
      const Op = this.getWorldExtends();
      return this.xop.update(Op.min, Op.max, this.meshes), this.xop
    }, Object.defineProperty(Op.f.prototype, "selectionOctree", {
      get: function() {
        return this.xop
      },
      enumerable: !0,
      configurable: !0
    }), Ip.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const cp = this.Gl();
      let Op = cp._getComponent(xp.e.NAME_OCTREE);
      Op || (Op = new Dp(cp), cp.uOp(Op)), this._submeshesOctree || (this._submeshesOctree = new Yp.d(Yp.d.CreationFuncForSubMeshes, pp, ip)), this.computeWorldMatrix(!0);
      const op = this.bJ().boundingBox;
      return this._submeshesOctree.update(op.minimumWorld, op.maximumWorld, this.Am), this._submeshesOctree
    })
  },
  41810: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => mp,
      D: () => Ap,
      c: () => Ep,
      e: () => Up,
      h: () => yp,
      k: () => Wp,
      n: () => Mp,
      q: () => qp,
      u: () => kp,
      x: () => Rp
    });
    var Op = cp(37324),
      op = cp(37320),
      Ip = cp(37329),
      Sp = cp(40489),
      xp = cp(40334),
      Lp = cp(37345),
      Yp = cp(40390);
    const Dp = {
      internalPickerForMesh: void 0
    };
    class Ap {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Op.b;
        this.origin = pp, this.direction = ip, this.length = cp, this.epsilon = op
      }
      clone() {
        return new Ap(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Op = Ap._TmpVector3[0].i5(pp.x - cp, pp.y - cp, pp.z - cp),
          op = Ap._TmpVector3[1].i5(ip.x + cp, ip.y + cp, ip.z + cp);
        let Ip, Sp, xp, Lp, Yp = 0,
          Dp = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Op.x || this.origin.x > op.x) return !1
        } else if (Ip = 1 / this.direction.x, Sp = (Op.x - this.origin.x) * Ip, xp = (op.x - this.origin.x) * Ip, xp === -1 / 0 && (xp = 1 / 0), Sp > xp && (Lp = Sp, Sp = xp, xp = Lp), Yp = Math.max(Sp, Yp), Dp = Math.min(xp, Dp), Yp > Dp) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Op.y || this.origin.y > op.y) return !1
        } else if (Ip = 1 / this.direction.y, Sp = (Op.y - this.origin.y) * Ip, xp = (op.y - this.origin.y) * Ip, xp === -1 / 0 && (xp = 1 / 0), Sp > xp && (Lp = Sp, Sp = xp, xp = Lp), Yp = Math.max(Sp, Yp), Dp = Math.min(xp, Dp), Yp > Dp) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Op.z || this.origin.z > op.z) return !1
        } else if (Ip = 1 / this.direction.z, Sp = (Op.z - this.origin.z) * Ip, xp = (op.z - this.origin.z) * Ip, xp === -1 / 0 && (xp = 1 / 0), Sp > xp && (Lp = Sp, Sp = xp, xp = Lp), Yp = Math.max(Sp, Yp), Dp = Math.min(xp, Dp), Yp > Dp) return !1;
        return !0
      }
      intersectsBox(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(pp.minimum, pp.maximum, ip)
      }
      intersectsSphere(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = pp.center.x - this.origin.x,
          Op = pp.center.y - this.origin.y,
          op = pp.center.z - this.origin.z,
          Ip = cp * cp + Op * Op + op * op,
          Sp = pp.radius + ip,
          xp = Sp * Sp;
        if (Ip <= xp) return !0;
        const Lp = cp * this.direction.x + Op * this.direction.y + op * this.direction.z;
        if (Lp < 0) return !1;
        return Ip - Lp * Lp <= xp
      }
      intersectsTriangle(pp, ip, cp) {
        const Op = Ap._TmpVector3[0],
          Ip = Ap._TmpVector3[1],
          xp = Ap._TmpVector3[2],
          Lp = Ap._TmpVector3[3],
          Yp = Ap._TmpVector3[4];
        ip.subtractToRef(pp, Op), cp.subtractToRef(pp, Ip), op.o.CrossToRef(this.direction, Ip, xp);
        const Dp = op.o.Dot(Op, xp);
        if (0 === Dp) return null;
        const Pp = 1 / Dp;
        this.origin.subtractToRef(pp, Lp);
        const Wp = op.o.Dot(Lp, xp) * Pp;
        if (Wp < -this.epsilon || Wp > 1 + this.epsilon) return null;
        op.o.CrossToRef(Lp, Op, Yp);
        const yp = op.o.Dot(this.direction, Yp) * Pp;
        if (yp < -this.epsilon || Wp + yp > 1 + this.epsilon) return null;
        const Up = op.o.Dot(Ip, Yp) * Pp;
        return Up > this.length || Up < 0 ? null : new Sp.e(1 - Wp - yp, Wp, Up)
      }
      intersectsPlane(pp) {
        let ip;
        const cp = op.o.Dot(pp.normal, this.direction);
        if (Math.abs(cp) < 9.99999997475243e-7) return null;
        {
          const Op = op.o.Dot(pp.normal, this.origin);
          return ip = (-pp.d - Op) / cp, ip < 0 ? ip < -9.99999997475243e-7 ? null : 0 : ip
        }
      }
      intersectsAxis(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (pp) {
          case "y": {
            const pp = (this.origin.y - ip) / this.direction.y;
            return pp > 0 ? null : new op.o(this.origin.x + this.direction.x * -pp, ip, this.origin.z + this.direction.z * -pp)
          }
          case "x": {
            const pp = (this.origin.x - ip) / this.direction.x;
            return pp > 0 ? null : new op.o(ip, this.origin.y + this.direction.y * -pp, this.origin.z + this.direction.z * -pp)
          }
          case "z": {
            const pp = (this.origin.z - ip) / this.direction.z;
            return pp > 0 ? null : new op.o(this.origin.x + this.direction.x * -pp, this.origin.y + this.direction.y * -pp, ip)
          }
          default:
            return null
        }
      }
      Eop(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ip = arguments.length > 4 ? arguments[4] : void 0,
          Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const xp = op.i.Matrix[0];
        return pp.getWorldMatrix().invertToRef(xp), this._tmpRay ? Ap.TransformToRef(this, xp, this._tmpRay) : this._tmpRay = Ap.Transform(this, xp), pp.intersects(this._tmpRay, ip, cp, Op, Ip, Sp)
      }
      intersectsMeshes(pp, ip, cp) {
        cp ? cp.length = 0 : cp = [];
        for (let Op = 0; Op < pp.length; Op++) {
          const op = this.Eop(pp[Op], ip);
          op.hit && cp.push(op)
        }
        return cp.sort(this._comparePickingInfo), cp
      }
      _comparePickingInfo(pp, ip) {
        return pp.distance < ip.distance ? -1 : pp.distance > ip.distance ? 1 : 0
      }
      intersectionSegment(pp, ip, cp) {
        const Op = this.origin,
          Ip = op.i.Zy[0],
          Sp = op.i.Zy[1],
          xp = op.i.Zy[2],
          Lp = op.i.Zy[3];
        ip.subtractToRef(pp, Ip), this.direction.scaleToRef(Ap._Rayl, xp), Op.addToRef(xp, Sp), pp.subtractToRef(Op, Lp);
        const Yp = op.o.Dot(Ip, Ip),
          Dp = op.o.Dot(Ip, xp),
          Pp = op.o.Dot(xp, xp),
          Wp = op.o.Dot(Ip, Lp),
          yp = op.o.Dot(xp, Lp),
          Up = Yp * Pp - Dp * Dp;
        let wp, vp, tp = Up,
          Hp = Up;
        Up < Ap._Smallnum ? (wp = 0, tp = 1, vp = yp, Hp = Pp) : (wp = Dp * yp - Pp * Wp, vp = Yp * yp - Dp * Wp, wp < 0 ? (wp = 0, vp = yp, Hp = Pp) : wp > tp && (wp = tp, vp = yp + Dp, Hp = Pp)), vp < 0 ? (vp = 0, -Wp < 0 ? wp = 0 : -Wp > Yp ? wp = tp : (wp = -Wp, tp = Yp)) : vp > Hp && (vp = Hp, -Wp + Dp < 0 ? wp = 0 : -Wp + Dp > Yp ? wp = tp : (wp = -Wp + Dp, tp = Yp));
        const dp = Math.abs(wp) < Ap._Smallnum ? 0 : wp / tp,
          ep = Math.abs(vp) < Ap._Smallnum ? 0 : vp / Hp,
          jp = op.i.Zy[4];
        xp.scaleToRef(ep, jp);
        const kp = op.i.Zy[5];
        Ip.scaleToRef(dp, kp), kp.addInPlace(Lp);
        const mp = op.i.Zy[6];
        kp.subtractToRef(jp, mp);
        return ep > 0 && ep <= this.length && mp.lengthSquared() < cp * cp ? kp.length() : -1
      }
      update(pp, ip, cp, Op, Ip, Sp, xp) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Ap._RayDistant || (Ap._RayDistant = Ap.Zero()), Ap._RayDistant.unprojectRayToRef(pp, ip, cp, Op, op.b.IdentityReadOnly, Sp, xp);
          const Lp = op.i.Matrix[0];
          Ip.invertToRef(Lp), Ap.TransformToRef(Ap._RayDistant, Lp, this)
        } else this.unprojectRayToRef(pp, ip, cp, Op, Ip, Sp, xp);
        return this
      }
      static Zero() {
        return new Ap(op.o.Zero(), op.o.Zero())
      }
      static CreateNew(pp, ip, cp, Op, op, Ip, Sp) {
        return Ap.Zero().update(pp, ip, cp, Op, op, Ip, Sp)
      }
      static CreateNewFromTo(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.b.IdentityReadOnly;
        const Op = new Ap(new op.o(0, 0, 0), new op.o(0, 0, 0));
        return Ap.CreateFromToToRef(pp, ip, Op, cp)
      }
      static CreateFromToToRef(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : op.b.IdentityReadOnly;
        cp.origin.rM(pp);
        const Ip = ip.subtractToRef(pp, cp.direction),
          Sp = Math.sqrt(Ip.x * Ip.x + Ip.y * Ip.y + Ip.z * Ip.z);
        return cp.length = Sp, cp.direction.normalize(), Ap.TransformToRef(cp, Op, cp)
      }
      static Transform(pp, ip) {
        const cp = new Ap(new op.o(0, 0, 0), new op.o(0, 0, 0));
        return Ap.TransformToRef(pp, ip, cp), cp
      }
      static TransformToRef(pp, ip, cp) {
        op.o.TransformCoordinatesToRef(pp.origin, ip, cp.origin), op.o.TransformNormalToRef(pp.direction, ip, cp.direction), cp.length = pp.length, cp.epsilon = pp.epsilon;
        const Op = cp.direction,
          Ip = Op.length();
        if (0 !== Ip && 1 !== Ip) {
          const pp = 1 / Ip;
          Op.x *= pp, Op.y *= pp, Op.z *= pp, cp.length *= Ip
        }
        return cp
      }
      unprojectRayToRef(pp, ip, cp, Op, Ip, Sp, xp) {
        const Yp = op.i.Matrix[0];
        Ip.multiplyToRef(Sp, Yp), Yp.multiplyToRef(xp, Yp), Yp.invert();
        const Dp = Lp.e.LastCreatedEngine,
          Ap = op.i.Zy[0];
        Ap.x = pp / cp * 2 - 1, Ap.y = -(ip / Op * 2 - 1), Ap.z = Dp?.lOp ? 1 : Dp?.isNDCHalfZRange ? 0 : -1;
        const Pp = op.i.Zy[1].i5(Ap.x, Ap.y, 1 - 1e-8),
          Wp = op.i.Zy[2],
          yp = op.i.Zy[3];
        op.o.TransformCoordinatesToRef(Ap, Yp, Wp), op.o.TransformCoordinatesToRef(Pp, Yp, yp), this.origin.rM(Wp), yp.subtractToRef(Wp, this.direction), this.direction.normalize()
      }
    }

    function Pp(pp, ip, cp, Op, op) {
      let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Sp = Ap.Zero();
      return Wp(pp, ip, cp, Op, Sp, op, Ip), Sp
    }

    function Wp(pp, ip, cp, Op, Ip, Sp) {
      let xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Yp = pp.gy();
      if (!Sp && !(Sp = pp.activeCamera) && !(Sp = pp.cameraToUseForPointers)) return pp;
      const Dp = Sp.viewport,
        Ap = Yp.getRenderHeight(),
        {
          x: Pp,
          y: Wp,
          width: yp,
          height: Up
        } = Dp.toGlobal(Yp.getRenderWidth(), Ap),
        wp = 1 / Yp.getHardwareScalingLevel();
      return ip = ip * wp - Pp, cp = cp * wp - (Ap - Wp - Up), Ip.update(ip, cp, yp, Up, Op || op.b.IdentityReadOnly, xp ? op.b.IdentityReadOnly : Sp.getViewMatrix(), Sp.getProjectionMatrix(), Lp), pp
    }

    function yp(pp, ip, cp, Op) {
      const op = Ap.Zero();
      return Up(pp, ip, cp, op, Op), op
    }

    function Up(pp, ip, cp, Op, Ip) {
      if (!xp.b) return pp;
      const Sp = pp.gy();
      if (!Ip && !(Ip = pp.activeCamera) && !(Ip = pp.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Lp = Ip.viewport,
        Yp = Sp.getRenderHeight(),
        {
          x: Dp,
          y: Ap,
          width: Pp,
          height: Wp
        } = Lp.toGlobal(Sp.getRenderWidth(), Yp),
        yp = op.b.Identity(),
        Up = 1 / Sp.getHardwareScalingLevel();
      return ip = ip * Up - Dp, cp = cp * Up - (Yp - Ap - Wp), Op.update(ip, cp, Pp, Wp, yp, yp, Ip.getProjectionMatrix()), pp
    }

    function wp(pp, ip, cp, Op, op, Ip, Sp, xp) {
      return vp(pp, cp, Op, ip(Op, cp.enableDistantPicking), op, Ip, Sp, xp)
    }

    function vp(pp, ip, cp, Op, op, Ip, Sp, xp) {
      const Lp = ip.intersects(Op, op, Sp, Ip, cp, xp);
      return Lp && Lp.hit ? !op && null != pp && Lp.distance >= pp.distance ? null : Lp : null
    }

    function tp(pp, ip) {
      return "InstancedLinesMesh" === pp || "LinesMesh" === pp ? ip.intersectionThreshold : 0
    }

    function Hp(pp) {
      const ip = pp.getClassName();
      if ("GreasedLineMesh" === ip) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const cp = pp.rawBoundingInfo;
      return {
        rawBoundingInfo: cp,
        intersectionThreshold: cp ? tp(ip, pp) : 0
      }
    }

    function dp(pp, ip, cp, Op, op) {
      const Ip = pp(cp, ip.enableDistantPicking);
      return Ip.intersectsSphere(Op.Yop, op) && Ip.intersectsBox(Op.boundingBox, op) ? Ip : null
    }

    function ep(pp, ip, cp, Op, Ip, Sp) {
      let Lp = null;
      const Yp = !!(pp.activeCameras && pp.activeCameras.length > 1 && pp.cameraToUseForPointers !== pp.activeCamera),
        Ap = pp.cameraToUseForPointers || pp.activeCamera,
        Pp = Dp.internalPickerForMesh || wp,
        Wp = Pp === wp;
      for (let xp = 0; xp < pp.meshes.length; xp++) {
        const Dp = pp.meshes[xp];
        if (cp) {
          if (!cp(Dp, -1)) continue
        } else if (!Dp.isEnabled() || !Dp.isVisible || !Dp.Ow) continue;
        const yp = Yp && Dp.isWorldMatrixCameraDependent(),
          Up = Dp.computeWorldMatrix(yp, Ap);
        if (Dp.hasThinInstances && Dp.Fip) {
          const pp = Pp(Lp, ip, Dp, Up, !0, !0, Sp);
          if (pp) {
            if (Ip) return pp;
            const {
              rawBoundingInfo: xp,
              intersectionThreshold: Yp
            } = Hp(Dp), Ap = Dp._thinInstanceDataStorage.matrixData;
            if (Ap) {
              const pp = op.i.Matrix[0],
                yp = op.i.Matrix[1],
                wp = Math.min(Dp.f_, Ap.length >> 4);
              for (let tp = 0; tp < wp; tp++) {
                if (cp && !cp(Dp, tp)) continue;
                op.b.FromArrayToRef(Ap, tp << 4, pp), pp.multiplyToRef(Up, yp);
                const wp = Wp && xp ? dp(ip, Dp, yp, xp, Yp) : null;
                if (Wp && xp && !wp) continue;
                const Hp = Wp && wp ? vp(Lp, Dp, yp, wp, Op, Ip, Sp, !0) : Pp(Lp, ip, Dp, yp, Op, Ip, Sp, !0);
                if (Hp && (Lp = Hp, Lp.thinInstanceIndex = tp, Op)) return Lp
              }
            }
          }
        } else {
          const pp = Pp(Lp, ip, Dp, Up, Op, Ip, Sp);
          if (pp && (Lp = pp, Op)) return Lp
        }
      }
      return Lp || new xp.b
    }

    function jp(pp, ip, cp, Op) {
      if (!xp.b) return null;
      const Ip = [],
        Sp = !!(pp.activeCameras && pp.activeCameras.length > 1 && pp.cameraToUseForPointers !== pp.activeCamera),
        Lp = pp.cameraToUseForPointers || pp.activeCamera,
        Yp = Dp.internalPickerForMesh || wp,
        Ap = Yp === wp;
      for (let xp = 0; xp < pp.meshes.length; xp++) {
        const Dp = pp.meshes[xp];
        if (cp) {
          if (!cp(Dp, -1)) continue
        } else if (!Dp.isEnabled() || !Dp.isVisible || !Dp.Ow) continue;
        const Pp = Sp && Dp.isWorldMatrixCameraDependent(),
          Wp = Dp.computeWorldMatrix(Pp, Lp);
        if (Dp.hasThinInstances && Dp.Fip) {
          if (Yp(null, ip, Dp, Wp, !0, !0, Op)) {
            const {
              rawBoundingInfo: pp,
              intersectionThreshold: Sp
            } = Hp(Dp), xp = Dp._thinInstanceDataStorage.matrixData;
            if (xp) {
              const Lp = op.i.Matrix[0],
                Pp = op.i.Matrix[1],
                yp = Math.min(Dp.f_, xp.length >> 4);
              for (let Up = 0; Up < yp; Up++) {
                if (cp && !cp(Dp, Up)) continue;
                op.b.FromArrayToRef(xp, Up << 4, Lp), Lp.multiplyToRef(Wp, Pp);
                const yp = Ap && pp ? dp(ip, Dp, Pp, pp, Sp) : null;
                if (Ap && pp && !yp) continue;
                const wp = Ap && yp ? vp(null, Dp, Pp, yp, !1, !1, Op, !0) : Yp(null, ip, Dp, Pp, !1, !1, Op, !0);
                wp && (wp.thinInstanceIndex = Up, Ip.push(wp))
              }
            }
          }
        } else {
          const pp = Yp(null, ip, Dp, Wp, !1, !1, Op);
          pp && Ip.push(pp)
        }
      }
      return Ip
    }

    function kp(pp, ip, cp, Op, Ip, Sp) {
      if (!xp.b) return null;
      const Lp = ep(pp, (Op => (pp._tempPickingRay || (pp._tempPickingRay = Ap.Zero()), Wp(pp, ip, cp, Op, pp._tempPickingRay, Sp || null), pp._tempPickingRay)), Op, Ip, !0);
      return Lp && (Lp.ray = Pp(pp, ip, cp, op.b.Identity(), Sp || null)), Lp
    }

    function mp(pp, ip, cp, Op, Ip, Sp, xp) {
      const Lp = ep(pp, ((Op, op) => (pp._tempPickingRay || (pp._tempPickingRay = Ap.Zero()), Wp(pp, ip, cp, Op, pp._tempPickingRay, Sp || null, !1, op), pp._tempPickingRay)), Op, Ip, !1, xp);
      return Lp && (Lp.ray = Pp(pp, ip, cp, op.b.Identity(), Sp || null)), Lp
    }

    function Rp(pp, ip, cp, Op, Ip) {
      const Sp = ep(pp, (cp => (pp._pickWithRayInverseMatrix || (pp._pickWithRayInverseMatrix = op.b.Identity()), cp.invertToRef(pp._pickWithRayInverseMatrix), pp._cachedRayForTransform || (pp._cachedRayForTransform = Ap.Zero()), Ap.TransformToRef(ip, pp._pickWithRayInverseMatrix, pp._cachedRayForTransform), pp._cachedRayForTransform)), cp, Op, !1, Ip);
      return Sp && (Sp.ray = ip), Sp
    }

    function qp(pp, ip, cp, Op, op, Ip) {
      return jp(pp, (Op => Pp(pp, ip, cp, Op, op || null)), Op, Ip)
    }

    function Mp(pp, ip, cp, Op) {
      return jp(pp, (cp => (pp._pickWithRayInverseMatrix || (pp._pickWithRayInverseMatrix = op.b.Identity()), cp.invertToRef(pp._pickWithRayInverseMatrix), pp._cachedRayForTransform || (pp._cachedRayForTransform = Ap.Zero()), Ap.TransformToRef(ip, pp._pickWithRayInverseMatrix, pp._cachedRayForTransform), pp._cachedRayForTransform)), cp, Op)
    }

    function Cp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Op = arguments.length > 3 ? arguments[3] : void 0,
        Ip = arguments.length > 4 ? arguments[4] : void 0;
      Op || (Op = pp.getWorldMatrix()), ip.length = cp, Ip ? ip.origin.rM(Ip) : ip.origin.rM(pp.position);
      const Sp = op.i.Zy[2];
      Sp.set(0, 0, pp._scene.useRightHandedSystem ? -1 : 1);
      const xp = op.i.Zy[3];
      return op.o.TransformNormalToRef(Sp, Op, xp), op.o.NormalizeToRef(xp, ip.direction), ip
    }

    function Ep(pp, ip) {
      ip && (ip.prototype.getForwardRay = function() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        return Cp(this, new Ap(op.o.Zero(), op.o.Zero(), pp), pp, ip, cp)
      }, ip.prototype.getForwardRayToRef = function(pp) {
        return Cp(this, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), pp && (Yp.c._IsPickingAvailable = !0, pp.prototype.createPickingRay = function(pp, ip, cp, Op) {
        return Pp(this, pp, ip, cp, Op, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Ap._TmpVector3 = (0, Ip.d)(6, op.o.Zero), Ap._RayDistant = Ap.Zero(), Ap._Smallnum = 1e-8, Ap._Rayl = 1e9
  },
  41806: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip.D
    });
    var Op = cp(40296),
      op = cp(40411),
      Ip = cp(41810);
    let Sp = !1;
    Sp || (Sp = !0, (0, Ip.c)(Op.f, op.d), Op.f.prototype.createPickingRayToRef = function(pp, ip, cp, Op, op) {
      let Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Ip.k)(this, pp, ip, cp, Op, op, Sp, xp)
    }, Op.f.prototype.createPickingRayInCameraSpace = function(pp, ip, cp) {
      return (0, Ip.h)(this, pp, ip, cp)
    }, Op.f.prototype.createPickingRayInCameraSpaceToRef = function(pp, ip, cp, Op) {
      return (0, Ip.e)(this, pp, ip, cp, Op)
    }, Op.f.prototype.pickWithBoundingInfo = function(pp, ip, cp, Op, op) {
      return (0, Ip.u)(this, pp, ip, cp, Op, op)
    }, Op.f.prototype.SW = function(pp, ip, cp, Op, op, Sp) {
      let xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Ip.A)(this, pp, ip, cp, Op, op, Sp, xp)
    }, Op.f.prototype.pickWithRay = function(pp, ip, cp, Op) {
      return (0, Ip.x)(this, pp, ip, cp, Op)
    }, Op.f.prototype.multiPick = function(pp, ip, cp, Op, op) {
      return (0, Ip.q)(this, pp, ip, cp, Op, op)
    }, Op.f.prototype.multiPickWithRay = function(pp, ip, cp) {
      return (0, Ip.n)(this, pp, ip, cp)
    })
  },
  41814: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(40451),
      xp = cp(41823),
      Lp = cp(40415),
      Yp = cp(37368);
    let Dp = (() => {
        var pp;
        let ip, cp, Lp, Yp, Dp, Ap, Pp, Wp, yp = xp.d,
          Up = [],
          wp = [],
          vp = [],
          tp = [],
          Hp = [],
          dp = [],
          ep = [],
          jp = [],
          kp = [],
          mp = [],
          Rp = [],
          qp = [],
          Mp = [];
        return pp = class extends yp {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(pp) {
            this._shadowFrustumSize = pp, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(pp) {
            this._shadowOrthoScale = pp, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(pp) {
            this._orthoLeft = pp
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(pp) {
            this._orthoRight = pp
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(pp) {
            this._orthoTop = pp
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(pp) {
            this._orthoBottom = pp
          }
          constructor(pp, ip, cp, op) {
            super(pp, cp, op), this._shadowFrustumSize = ((0, Op.l)(this, Up), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Op.l)(this, wp, !0), this.autoCalcShadowZBounds = ((0, Op.l)(this, vp), (0, Op.l)(this, tp, !1)), this._orthoLeft = ((0, Op.l)(this, Hp), (0, Op.l)(this, dp, Number.MAX_VALUE)), this._orthoRight = ((0, Op.l)(this, ep), (0, Op.l)(this, jp, Number.MIN_VALUE)), this._orthoTop = ((0, Op.l)(this, kp), (0, Op.l)(this, mp, Number.MIN_VALUE)), this._orthoBottom = ((0, Op.l)(this, Rp), (0, Op.l)(this, qp, Number.MAX_VALUE)), (0, Op.l)(this, Mp), this.position = ip.scale(-1), this.direction = ip
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Sp.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(pp, ip, cp) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(pp) : this._setDefaultAutoExtendShadowProjectionMatrix(pp, ip, cp)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(pp) {
            const ip = this.Gl().activeCamera;
            Ip.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : ip ? ip.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ip ? ip.maxZ : 1e4, pp, this.Gl().gy().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(pp, ip, cp) {
            const Op = this.Gl().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const pp = Ip.o.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Op = Number.MAX_VALUE,
                op = -Number.MAX_VALUE;
              for (let Sp = 0; Sp < cp.length; Sp++) {
                const xp = cp[Sp];
                if (!xp) continue;
                const Lp = xp.bJ().boundingBox;
                for (let cp = 0; cp < Lp.vectorsWorld.length; cp++) Ip.o.TransformCoordinatesToRef(Lp.vectorsWorld[cp], ip, pp), pp.x < this._orthoLeft && (this._orthoLeft = pp.x), pp.y < this._orthoBottom && (this._orthoBottom = pp.y), pp.x > this._orthoRight && (this._orthoRight = pp.x), pp.y > this._orthoTop && (this._orthoTop = pp.y), this.autoCalcShadowZBounds && (pp.z < Op && (Op = pp.z), pp.z > op && (op = pp.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Op, this._shadowMaxZ = op)
            }
            const op = this._orthoRight - this._orthoLeft,
              Sp = this._orthoTop - this._orthoBottom,
              xp = void 0 !== this.shadowMinZ ? this.shadowMinZ : Op?.minZ || 0,
              Lp = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Op?.maxZ || 1e4,
              Yp = this.Gl().gy().lOp;
            Ip.b.OrthoOffCenterLHToRef(this._orthoLeft - op * this.shadowOrthoScale, this._orthoRight + op * this.shadowOrthoScale, this._orthoBottom - Sp * this.shadowOrthoScale, this._orthoTop + Sp * this.shadowOrthoScale, Yp ? Lp : xp, Yp ? xp : Lp, pp, this.Gl().gy().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(pp, ip) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, ip), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, ip), this)
          }
          transferToNodeMaterialEffect(pp, ip) {
            return this.computeTransformedInformation() ? (pp.setFloat3(ip, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (pp.setFloat3(ip, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(pp) {
            const ip = this._scene.gy();
            return !ip.lOp && ip.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(pp) {
            const ip = this._scene.gy();
            return ip.lOp && ip.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(pp, ip) {
            pp["DIRLIGHT" + ip] = !0
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(yp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)("orthoLeft")], Ap = [(0, op.K)("orthoRight")], Pp = [(0, op.K)("orthoTop")], Wp = [(0, op.K)("orthoBottom")], (0, Op.j)(pp, null, ip, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: pp => "shadowFrustumSize" in pp,
              get: pp => pp.shadowFrustumSize
            },
            metadata: Ip
          }, null, Up), (0, Op.j)(pp, null, cp, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: pp => "shadowOrthoScale" in pp,
              get: pp => pp.shadowOrthoScale
            },
            metadata: Ip
          }, null, Up), (0, Op.j)(null, null, Lp, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: pp => "autoUpdateExtends" in pp,
              get: pp => pp.autoUpdateExtends,
              set: (pp, ip) => {
                pp.autoUpdateExtends = ip
              }
            },
            metadata: Ip
          }, wp, vp), (0, Op.j)(null, null, Yp, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: pp => "autoCalcShadowZBounds" in pp,
              get: pp => pp.autoCalcShadowZBounds,
              set: (pp, ip) => {
                pp.autoCalcShadowZBounds = ip
              }
            },
            metadata: Ip
          }, tp, Hp), (0, Op.j)(null, null, Dp, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: pp => "_orthoLeft" in pp,
              get: pp => pp._orthoLeft,
              set: (pp, ip) => {
                pp._orthoLeft = ip
              }
            },
            metadata: Ip
          }, dp, ep), (0, Op.j)(null, null, Ap, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: pp => "_orthoRight" in pp,
              get: pp => pp._orthoRight,
              set: (pp, ip) => {
                pp._orthoRight = ip
              }
            },
            metadata: Ip
          }, jp, kp), (0, Op.j)(null, null, Pp, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: pp => "_orthoTop" in pp,
              get: pp => pp._orthoTop,
              set: (pp, ip) => {
                pp._orthoTop = ip
              }
            },
            metadata: Ip
          }, mp, Rp), (0, Op.j)(null, null, Wp, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: pp => "_orthoBottom" in pp,
              get: pp => pp._orthoBottom,
              set: (pp, ip) => {
                pp._orthoBottom = ip
              }
            },
            metadata: Ip
          }, qp, Mp), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      Ap = !1;
    Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_1", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.DirectionalLight", Dp))
  },
  41834: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Zi
    });
    var Op = cp(38942),
      op = cp(37349),
      Ip = cp(37320),
      Sp = cp(40342),
      xp = cp(41843),
      Lp = cp(37345),
      Yp = cp(40467),
      Dp = cp(37487),
      Ap = cp(38944),
      Pp = cp(38900),
      Wp = cp(37356);
    class yp {
      constructor() {
        this.direction1 = new Ip.o(0, 1, 0), this.direction2 = new Ip.o(0, 1, 0)
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = (0, Wp.RandomRange)(this.direction1.x, this.direction2.x),
          Sp = (0, Wp.RandomRange)(this.direction1.y, this.direction2.y),
          xp = (0, Wp.RandomRange)(this.direction1.z, this.direction2.z);
        Op ? ip.i5(op, Sp, xp) : Ip.o.TransformNormalFromFloatsToRef(op, Sp, xp, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Op) {
        Op ? ip.i5(0, 0, 0) : Ip.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, pp, ip)
      }
      clone() {
        const pp = new yp;
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(pp) {
        pp.addUniform("direction1", 3), pp.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.direction1 = this.direction1.BOp(), pp.direction2 = this.direction2.BOp(), pp
      }
      parse(pp) {
        Ip.o.FromArrayToRef(pp.direction1, 0, this.direction1), Ip.o.FromArrayToRef(pp.direction2, 0, this.direction2)
      }
    }
    class Up {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = pp, this.radiusRange = ip, this.directionRandomizer = cp
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = cp.position.subtract(pp.getTranslation()).normalize(),
          Sp = (0, Wp.RandomRange)(0, this.directionRandomizer),
          xp = (0, Wp.RandomRange)(0, this.directionRandomizer),
          Lp = (0, Wp.RandomRange)(0, this.directionRandomizer);
        op.x += Sp, op.y += xp, op.z += Lp, op.normalize(), Op ? ip.rM(op) : Ip.o.TransformNormalFromFloatsToRef(op.x, op.y, op.z, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Op) {
        const op = this.radius - (0, Wp.RandomRange)(0, this.radius * this.radiusRange),
          Sp = (0, Wp.RandomRange)(0, 1),
          xp = (0, Wp.RandomRange)(0, 2 * Math.PI),
          Lp = Math.acos(2 * Sp - 1),
          Yp = op * Math.cos(xp) * Math.sin(Lp),
          Dp = op * Math.cos(Lp),
          Ap = op * Math.sin(xp) * Math.sin(Lp);
        Op ? ip.i5(Yp, Math.abs(Dp), Ap) : Ip.o.TransformCoordinatesFromFloatsToRef(Yp, Math.abs(Dp), Ap, pp, ip)
      }
      clone() {
        const pp = new Up(this.radius, this.directionRandomizer);
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setFloat("radius", this.radius), pp.setFloat("radiusRange", this.radiusRange), pp.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(pp) {
        pp.addUniform("radius", 1), pp.addUniform("radiusRange", 1), pp.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.radius = this.radius, pp.radiusRange = this.radiusRange, pp.directionRandomizer = this.directionRandomizer, pp
      }
      parse(pp) {
        this.radius = pp.radius, this.radiusRange = pp.radiusRange, this.directionRandomizer = pp.directionRandomizer
      }
    }
    class wp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = pp, this.radiusRange = ip, this.directionRandomizer = cp
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = cp.position.subtract(pp.getTranslation()).normalize(),
          Sp = (0, Wp.RandomRange)(0, this.directionRandomizer),
          xp = (0, Wp.RandomRange)(0, this.directionRandomizer),
          Lp = (0, Wp.RandomRange)(0, this.directionRandomizer);
        op.x += Sp, op.y += xp, op.z += Lp, op.normalize(), Op ? ip.rM(op) : Ip.o.TransformNormalFromFloatsToRef(op.x, op.y, op.z, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Op) {
        const op = this.radius - (0, Wp.RandomRange)(0, this.radius * this.radiusRange),
          Sp = (0, Wp.RandomRange)(0, 1),
          xp = (0, Wp.RandomRange)(0, 2 * Math.PI),
          Lp = Math.acos(2 * Sp - 1),
          Yp = op * Math.cos(xp) * Math.sin(Lp),
          Dp = op * Math.cos(Lp),
          Ap = op * Math.sin(xp) * Math.sin(Lp);
        Op ? ip.i5(Yp, Dp, Ap) : Ip.o.TransformCoordinatesFromFloatsToRef(Yp, Dp, Ap, pp, ip)
      }
      clone() {
        const pp = new wp(this.radius, this.directionRandomizer);
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setFloat("radius", this.radius), pp.setFloat("radiusRange", this.radiusRange), pp.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(pp) {
        pp.addUniform("radius", 1), pp.addUniform("radiusRange", 1), pp.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.radius = this.radius, pp.radiusRange = this.radiusRange, pp.directionRandomizer = this.directionRandomizer, pp
      }
      parse(pp) {
        this.radius = pp.radius, this.radiusRange = pp.radiusRange, this.directionRandomizer = pp.directionRandomizer
      }
    }
    class vp extends wp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ip.o(0, 1, 0),
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ip.o(0, 1, 0);
        super(pp), this.direction1 = ip, this.direction2 = cp
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = (0, Wp.RandomRange)(this.direction1.x, this.direction2.x),
          Sp = (0, Wp.RandomRange)(this.direction1.y, this.direction2.y),
          xp = (0, Wp.RandomRange)(this.direction1.z, this.direction2.z);
        Op ? ip.i5(op, Sp, xp) : Ip.o.TransformNormalFromFloatsToRef(op, Sp, xp, pp, ip)
      }
      clone() {
        const pp = new vp(this.radius, this.direction1, this.direction2);
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setFloat("radius", this.radius), pp.setFloat("radiusRange", this.radiusRange), pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(pp) {
        pp.addUniform("radius", 1), pp.addUniform("radiusRange", 1), pp.addUniform("direction1", 3), pp.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const pp = super.serialize();
        return pp.direction1 = this.direction1.BOp(), pp.direction2 = this.direction2.BOp(), pp
      }
      parse(pp) {
        super.parse(pp), Ip.o.FromArrayToRef(pp.direction1, 0, this.direction1), Ip.o.FromArrayToRef(pp.direction2, 0, this.direction2)
      }
    }
    var tp = cp(38898);
    class Hp {
      get radius() {
        return this._radius
      }
      set radius(pp) {
        this._radius = pp, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(pp) {
        this._angle = pp, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = cp, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = ip, this.radius = pp
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = cp.position.subtract(pp.getTranslation()).normalize(),
          Sp = (0, Wp.RandomRange)(0, this.directionRandomizer),
          xp = (0, Wp.RandomRange)(0, this.directionRandomizer),
          Lp = (0, Wp.RandomRange)(0, this.directionRandomizer);
        op.x += Sp, op.y += xp, op.z += Lp, op.normalize(), Op ? ip.rM(op) : Ip.o.TransformNormalFromFloatsToRef(op.x, op.y, op.z, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Op) {
        const op = (0, Wp.RandomRange)(0, 2 * Math.PI);
        let Sp;
        this.emitFromSpawnPointOnly ? Sp = 1e-4 : (Sp = (0, Wp.RandomRange)(0, this.heightRange), Sp = 1 - Sp * Sp);
        let xp = this._radius - (0, Wp.RandomRange)(0, this._radius * this.radiusRange);
        xp *= Sp;
        const Lp = xp * Math.sin(op),
          Yp = xp * Math.cos(op),
          Dp = Sp * this._height;
        if (Op) return ip.x = Lp, ip.y = Dp, void(ip.z = Yp);
        Ip.o.TransformCoordinatesFromFloatsToRef(Lp, Dp, Yp, pp, ip)
      }
      clone() {
        const pp = new Hp(this._radius, this._angle, this.directionRandomizer);
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setFloat2("radius", this._radius, this.radiusRange), pp.setFloat("coneAngle", this._angle), pp.setFloat2("height", this._height, this.heightRange), pp.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(pp) {
        pp.addUniform("radius", 2), pp.addUniform("coneAngle", 1), pp.addUniform("height", 2), pp.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let pp = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (pp += "\n#define CONEEMITTERSPAWNPOINT"), pp
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.radius = this._radius, pp.angle = this._angle, pp.directionRandomizer = this.directionRandomizer, pp.radiusRange = this.radiusRange, pp.heightRange = this.heightRange, pp.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, pp
      }
      parse(pp) {
        this.radius = pp.radius, this.angle = pp.angle, this.directionRandomizer = pp.directionRandomizer, this.radiusRange = void 0 !== pp.radiusRange ? pp.radiusRange : 1, this.heightRange = void 0 !== pp.heightRange ? pp.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== pp.emitFromSpawnPointOnly && pp.emitFromSpawnPointOnly
      }
    }
    class dp extends Hp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ip.o(0, 1, 0),
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ip.o(0, 1, 0);
        super(pp, ip), this.direction1 = cp, this.direction2 = Op
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = (0, Wp.RandomRange)(this.direction1.x, this.direction2.x),
          Sp = (0, Wp.RandomRange)(this.direction1.y, this.direction2.y),
          xp = (0, Wp.RandomRange)(this.direction1.z, this.direction2.z);
        Op ? ip.i5(op, Sp, xp) : Ip.o.TransformNormalFromFloatsToRef(op, Sp, xp, pp, ip)
      }
      clone() {
        const pp = new dp(this.radius, this.angle, this.direction1, this.direction2);
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        super.applyToShader(pp), pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(pp) {
        super.buildUniformLayout(pp), pp.addUniform("direction1", 3), pp.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const pp = super.serialize();
        return pp.direction1 = this.direction1.BOp(), pp.direction2 = this.direction2.BOp(), pp
      }
      parse(pp) {
        super.parse(pp), Ip.o.FromArrayToRef(pp.direction1, 0, this.direction1), Ip.o.FromArrayToRef(pp.direction2, 0, this.direction2)
      }
    }
    class ep {
      get mesh() {
        return this._mesh
      }
      set mesh(pp) {
        this._mesh !== pp && (this._mesh = pp, pp ? (this._indices = pp.NOp(), this._positions = pp.getVerticesData(Sp.j.PositionKind), this._normals = pp.getVerticesData(Sp.j.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Ip.o.Zero(), this._mesh = null, this.direction1 = new Ip.o(0, 1, 0), this.direction2 = new Ip.o(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = pp
      }
      startDirectionFunction(pp, ip, cp, Op) {
        if (this.useMeshNormalsForDirection && this._normals) return void Ip.o.TransformNormalToRef(this._storedNormal, pp, ip);
        const op = (0, Wp.RandomRange)(this.direction1.x, this.direction2.x),
          Sp = (0, Wp.RandomRange)(this.direction1.y, this.direction2.y),
          xp = (0, Wp.RandomRange)(this.direction1.z, this.direction2.z);
        Op ? ip.i5(op, Sp, xp) : Ip.o.TransformNormalFromFloatsToRef(op, Sp, xp, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Op) {
        if (!this._indices || !this._positions) return;
        const op = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Sp = Math.random(),
          xp = Math.random() * (1 - Sp),
          Lp = 1 - Sp - xp,
          Yp = this._indices[op],
          Dp = this._indices[op + 1],
          Ap = this._indices[op + 2],
          Pp = Ip.i.Zy[0],
          Wp = Ip.i.Zy[1],
          yp = Ip.i.Zy[2],
          Up = Ip.i.Zy[3];
        Ip.o.FromArrayToRef(this._positions, 3 * Yp, Pp), Ip.o.FromArrayToRef(this._positions, 3 * Dp, Wp), Ip.o.FromArrayToRef(this._positions, 3 * Ap, yp), Up.x = Sp * Pp.x + xp * Wp.x + Lp * yp.x, Up.y = Sp * Pp.y + xp * Wp.y + Lp * yp.y, Up.z = Sp * Pp.z + xp * Wp.z + Lp * yp.z, Op ? ip.i5(Up.x, Up.y, Up.z) : Ip.o.TransformCoordinatesFromFloatsToRef(Up.x, Up.y, Up.z, pp, ip), this.useMeshNormalsForDirection && this._normals && (Ip.o.FromArrayToRef(this._normals, 3 * Yp, Pp), Ip.o.FromArrayToRef(this._normals, 3 * Dp, Wp), Ip.o.FromArrayToRef(this._normals, 3 * Ap, yp), this._storedNormal.x = Sp * Pp.x + xp * Wp.x + Lp * yp.x, this._storedNormal.y = Sp * Pp.y + xp * Wp.y + Lp * yp.y, this._storedNormal.z = Sp * Pp.z + xp * Wp.z + Lp * yp.z)
      }
      clone() {
        const pp = new ep(this.mesh);
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(pp) {
        pp.addUniform("direction1", 3), pp.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.direction1 = this.direction1.BOp(), pp.direction2 = this.direction2.BOp(), pp.meshId = this.mesh?.id, pp.useMeshNormalsForDirection = this.useMeshNormalsForDirection, pp
      }
      parse(pp, ip) {
        Ip.o.FromArrayToRef(pp.direction1, 0, this.direction1), Ip.o.FromArrayToRef(pp.direction2, 0, this.direction2), pp.meshId && ip && (this.mesh = ip.getLastMeshById(pp.meshId)), this.useMeshNormalsForDirection = pp.useMeshNormalsForDirection
      }
    }
    class jp {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(pp) {
        this._targetStopDuration !== pp && (this._targetStopDuration = pp)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(pp) {
        this._noiseTexture !== pp && (this._noiseTexture = pp, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(pp) {
        this._attractors.push(pp)
      }
      removeAttractor(pp) {
        const ip = this._attractors.indexOf(pp); - 1 !== ip && this._attractors.splice(ip, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(pp) {
        this._animationSheetEnabled !== pp && (this._animationSheetEnabled = pp)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(pp) {
        this._isAnimationSheetEnabled != pp && (this._isAnimationSheetEnabled = pp, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(pp) {
        this._useLogarithmicDepth = pp && this.Gl().gy().getCaps().fragmentDepthSupported
      }
      Gl() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(pp) {
        switch (pp) {
          case jp.BLENDMODE_MULTIPLYADD:
            return;
          case jp.BLENDMODE_ADD:
            pp = 1;
            break;
          case jp.BLENDMODE_ONEONE:
            pp = 6;
            break;
          case jp.BLENDMODE_STANDARD:
            pp = 2;
            break;
          case jp.BLENDMODE_MULTIPLY:
            pp = 4;
            break;
          case jp.BLENDMODE_SUBTRACT:
            pp = 3
        }
        this._engine.setAlphaMode(pp)
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
      addEmitRateGradient(pp, ip, cp) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, pp, ip, cp), this
      }
      removeEmitRateGradient(pp) {
        return this._removeFactorGradient(this._emitRateGradients, pp), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Ip.o.Zero()
      }
      set direction1(pp) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = pp)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Ip.o.Zero()
      }
      set direction2(pp) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = pp)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Ip.o.Zero()
      }
      set minEmitBox(pp) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = pp)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Ip.o.Zero()
      }
      set maxEmitBox(pp) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = pp)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(pp) {
        this._billboardMode !== pp && (this._billboardMode = pp, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(pp) {
        this._isBillboardBased !== pp && (this._isBillboardBased = pp, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(pp) {
        this._attachImageProcessingConfiguration(pp)
      }
      _attachImageProcessingConfiguration(pp) {
        pp !== this._imageProcessingConfiguration && (!pp && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = pp)
      }
      _reset() {}
      _addFactorGradient(pp, ip, cp, op) {
        const Ip = new Op.h(ip, cp, op);
        pp.push(Ip), pp.sort(((pp, ip) => pp.gradient < ip.gradient ? -1 : pp.gradient > ip.gradient ? 1 : 0))
      }
      _removeFactorGradient(pp, ip) {
        if (!pp) return;
        let cp = 0;
        for (const Op of pp) {
          if (Op.gradient === ip) {
            pp.splice(cp, 1);
            break
          }
          cp++
        }
      }
      _removeGradientAndTexture(pp, ip, cp) {
        if (!ip) return this;
        let Op = 0;
        for (const op of ip) {
          if (op.gradient === pp) {
            ip.splice(Op, 1);
            break
          }
          Op++
        }
        return cp && cp.dispose(), this
      }
      constructor(pp) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Ip.o.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Ip.o(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = jp.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Ip.l(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Ip.o(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Ip.o.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Dp.h(1, 1, 1, 1), this.color2 = new Dp.h(1, 1, 1, 1), this.colorDead = new Dp.h(0, 0, 0, 1), this.textureMask = new Dp.h(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Yp.e, this.id = pp, this.name = pp
      }
      createPointEmitter(pp, ip) {
        const cp = function(pp, ip) {
          const cp = new yp;
          return cp.direction1 = pp, cp.direction2 = ip, cp
        }(pp, ip);
        return this.particleEmitterType = cp, cp
      }
      createHemisphericEmitter() {
        const pp = function() {
          return new Up(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = pp, pp
      }
      createSphereEmitter() {
        const pp = function() {
          return new wp(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = pp, pp
      }
      createDirectedSphereEmitter() {
        const pp = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ip.o(0, 1, 0),
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ip.o(0, 1, 0);
          return new vp(pp, ip, cp)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ip.o(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ip.o(0, 1, 0));
        return this.particleEmitterType = pp, pp
      }
      createCylinderEmitter() {
        const pp = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new tp.f(pp, ip, cp, Op)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = pp, pp
      }
      createDirectedCylinderEmitter() {
        const pp = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ip.o(0, 1, 0),
            op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ip.o(0, 1, 0);
          return new tp.c(pp, ip, cp, Op, op)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ip.o(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ip.o(0, 1, 0));
        return this.particleEmitterType = pp, pp
      }
      createConeEmitter() {
        const pp = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Hp(pp, ip)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = pp, pp
      }
      createDirectedConeEmitter() {
        const pp = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ip.o(0, 1, 0),
            Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ip.o(0, 1, 0);
          return new dp(pp, ip, cp, Op)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ip.o(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ip.o(0, 1, 0));
        return this.particleEmitterType = pp, pp
      }
      createBoxEmitter(pp, ip, cp, Op) {
        const op = new Ap.b;
        return this.particleEmitterType = op, this.direction1 = pp, this.direction2 = ip, this.minEmitBox = cp, this.maxEmitBox = Op, op
      }
      createMeshEmitter() {
        const pp = function() {
          return new ep(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = pp, pp
      }
    }
    jp.BLENDMODE_ONEONE = 0, jp.BLENDMODE_STANDARD = 1, jp.BLENDMODE_ADD = 2, jp.BLENDMODE_MULTIPLY = 3, jp.BLENDMODE_MULTIPLYADD = 4, jp.BLENDMODE_SUBTRACT = -1;
    class kp {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Dp.h(0, 0, 0, 0), this.currentColor2 = new Dp.h(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Ip.o.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class mp {
      constructor(pp) {
        this.particleSystem = pp, this.position = Ip.o.Zero(), this.direction = Ip.o.Zero(), this.color = new Dp.h(0, 0, 0, 0), this.colorStep = new Dp.h(0, 0, 0, 0), this.initialColor = new Dp.h(0, 0, 0, 0), this.colorDead = new Dp.h(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Ip.l(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new kp, this.id = mp._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let pp = this.age,
          ip = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === ip ? (ip = 1, pp = this._properties.randomCellOffset) : pp += this._properties.randomCellOffset);
        const cp = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Op;
        Op = this._properties.initialSpriteCellLoop ? (0, Wp.Clamp)(pp * ip % this.lifeTime / this.lifeTime) : (0, Wp.Clamp)(pp * ip / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Op * cp | 0
      }
      _inheritParticleInfoToSubEmitter(pp) {
        if (pp.particleSystem.emitter.position) {
          const ip = pp.particleSystem.emitter;
          if (ip.position.rM(this.position), pp.inheritDirection) {
            const pp = Ip.i.Zy[0];
            this.direction.normalizeToRef(pp), ip.setDirection(pp, 0, Math.PI / 2)
          }
        } else {
          pp.particleSystem.emitter.rM(this.position)
        }
        this.direction.scaleToRef(pp.inheritedVelocityAmount / 2, Ip.i.Zy[0]), pp.particleSystem._inheritedVelocityOffset.rM(Ip.i.Zy[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const pp of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(pp)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = mp._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(pp) {
        pp.position.rM(this.position), this._properties.initialDirection ? pp._properties.initialDirection ? pp._properties.initialDirection.rM(this._properties.initialDirection) : pp._properties.initialDirection = this._properties.initialDirection.clone() : pp._properties.initialDirection = null, pp.direction.rM(this.direction), this._properties.localPosition && (pp._properties.localPosition ? pp._properties.localPosition.rM(this._properties.localPosition) : pp._properties.localPosition = this._properties.localPosition.clone()), pp.color.rM(this.color), pp.colorStep.rM(this.colorStep), pp.initialColor.rM(this.initialColor), pp.colorDead.rM(this.colorDead), pp.lifeTime = this.lifeTime, pp.age = this.age, pp._properties.randomCellOffset = this._properties.randomCellOffset, pp.size = this.size, pp.scale.rM(this.scale), pp.angle = this.angle, pp.angularSpeed = this.angularSpeed, pp.particleSystem = this.particleSystem, pp.cellIndex = this.cellIndex, pp.id = this.id, pp._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (pp._properties.currentColorGradient = this._properties.currentColorGradient, pp._properties.currentColor1.rM(this._properties.currentColor1), pp._properties.currentColor2.rM(this._properties.currentColor2)), this._properties.currentSizeGradient && (pp._properties.currentSizeGradient = this._properties.currentSizeGradient, pp._properties.currentSize1 = this._properties.currentSize1, pp._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (pp._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, pp._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, pp._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (pp._properties.currentVelocityGradient = this._properties.currentVelocityGradient, pp._properties.currentVelocity1 = this._properties.currentVelocity1, pp._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (pp._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, pp._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, pp._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (pp._properties.currentDragGradient = this._properties.currentDragGradient, pp._properties.currentDrag1 = this._properties.currentDrag1, pp._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (pp._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, pp._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, pp._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (pp.remapData && this.remapData ? pp.remapData.rM(this.remapData) : pp.remapData = new Ip.q(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (pp._properties.randomNoiseCoordinates1 && pp._properties.randomNoiseCoordinates2 ? (pp._properties.randomNoiseCoordinates1.rM(this._properties.randomNoiseCoordinates1), pp._properties.randomNoiseCoordinates2.rM(this._properties.randomNoiseCoordinates2)) : (pp._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), pp._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), pp.metadata = this.metadata
      }
    }
    mp._Count = 0;
    var Rp = cp(41315);
    class qp {
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
      constructor(pp, ip, cp, Op) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = ip, this.mV = pp, this._scene = cp, this._host = Op, this._activeTargets = [], ip._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            Yo: this._getCorrectLoopMode()
          }, this._animation.dataType === Rp.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Ip.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const pp = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, pp)
        }
        if (this.mV instanceof Array) {
          let pp = 0;
          for (const ip of this.mV) this._preparePath(ip, pp), this._getOriginalValues(pp), pp++;
          this._targetIsArray = !0
        } else this._preparePath(this.mV), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const op = ip.getEvents();
        if (op && op.length > 0)
          for (const Ip of op) this._events.push(Ip._clone());
        this._enableBlending = pp && pp.animationPropertiesOverride ? pp.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = this._animation.targetPropertyPath;
        if (cp.length > 1) {
          let Op = pp;
          for (let pp = 0; pp < cp.length - 1; pp++) {
            const ip = cp[pp];
            if (Op = Op[ip], void 0 === Op) throw new Error(`Invalid property (${ip}) in property path (${cp.join(".")})`)
          }
          this._targetPath = cp[cp.length - 1], this._activeTargets[ip] = Op
        } else this._targetPath = cp[0], this._activeTargets[ip] = pp;
        if (void 0 === this._activeTargets[ip][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${cp.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.mV instanceof Array) {
            let pp = 0;
            for (const ip of this.mV) void 0 !== this._originalValue[pp] && this._setValue(ip, this._activeTargets[pp], this._originalValue[pp], -1, pp), pp++
          } else void 0 !== this._originalValue[0] && this._setValue(this.mV, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let pp = 0; pp < this._events.length; pp++) this._events[pp].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const pp = this._animation.runtimeAnimations.indexOf(this);
        pp > -1 && this._animation.runtimeAnimations.splice(pp, 1)
      }
      setValue(pp, ip) {
        if (this._targetIsArray)
          for (let cp = 0; cp < this.mV.length; cp++) {
            const Op = this.mV[cp];
            this._setValue(Op, this._activeTargets[cp], pp, ip, cp)
          } else this._setValue(this.mV, this._directTarget, pp, ip, 0)
      }
      _getOriginalValues() {
        let pp, ip = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const cp = this._activeTargets[ip];
        if (Rp.e.InheritOriginalValueFromActiveAnimations) {
          const pp = this._scene._activeAnimatables;
          for (let Op = 0; Op < pp.length; Op++) {
            const op = pp[Op]._runtimeAnimations;
            for (let pp = 0; pp < op.length; pp++) {
              const Op = op[pp];
              if (Op !== this && Op._targetPath === this._targetPath)
                for (let pp = 0; pp < Op._activeTargets.length; pp++)
                  if (Op._activeTargets[pp] === cp && void 0 !== Op._originalValue[pp]) return void(Op._originalValue[pp] && Op._originalValue[pp].clone ? this._originalValue[ip] = Op._originalValue[pp].clone() : this._originalValue[ip] = Op._originalValue[pp])
            }
          }
        }
        pp = cp.getLocalMatrix && "_matrix" === this._targetPath ? cp.getLocalMatrix() : cp[this._targetPath], pp && pp.clone ? this._originalValue[ip] = pp.clone() : this._originalValue[ip] = pp
      }
      _registerTargetForLateAnimationBinding(pp, ip) {
        const cp = pp.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(cp), cp._lateAnimationHolders || (cp._lateAnimationHolders = {}), cp._lateAnimationHolders[pp.targetPath] || (cp._lateAnimationHolders[pp.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: ip
        }), pp.isAdditive ? (cp._lateAnimationHolders[pp.targetPath].additiveAnimations.push(pp), cp._lateAnimationHolders[pp.targetPath].totalAdditiveWeight += pp.weight) : (cp._lateAnimationHolders[pp.targetPath].animations.push(pp), cp._lateAnimationHolders[pp.targetPath].totalWeight += pp.weight)
      }
      _setValue(pp, ip, cp, Op, op) {
        const Sp = this._scene._animationWrites,
          xp = this._scene._animationWriteCount++;
        let Lp = Sp[xp];
        if (Lp || (Lp = Sp[xp] = {
            runtimeAnimation: this,
            target: pp,
            weight: Op,
            additive: !1,
            blendingFactor: 1,
            Hw: !1
          }), Lp.runtimeAnimation = this, Lp.target = pp, Lp.weight = Op, Lp.additive = this.isAdditive, Lp.Hw = !1, this._currentActiveTarget = ip, this._weight = Op, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const pp = ip[this._targetPath];
            pp.clone ? this._originalBlendValue = pp.clone() : this._originalBlendValue = pp
          }
          this._originalBlendValue.m ? Rp.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Ip.b.DecomposeLerpToRef(this._originalBlendValue, cp, this._blendingFactor, this._currentValue) : this._currentValue = Ip.b.DecomposeLerp(this._originalBlendValue, cp, this._blendingFactor) : this._currentValue ? Ip.b.LerpToRef(this._originalBlendValue, cp, this._blendingFactor, this._currentValue) : this._currentValue = Ip.b.Lerp(this._originalBlendValue, cp, this._blendingFactor) : this._currentValue = Rp.e._UniversalLerp(this._originalBlendValue, cp, this._blendingFactor);
          const Op = pp && pp.animationPropertiesOverride ? pp.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Lp.blendingFactor = this._blendingFactor, this._blendingFactor += Op
        } else Lp.blendingFactor = 1, this._currentValue ? this._currentValue.rM ? this._currentValue.rM(cp) : this._currentValue = cp : this._currentValue = cp?.clone ? cp.clone() : cp; - 1 !== Op ? this._registerTargetForLateAnimationBinding(this, this._originalValue[op]) : this._animationState.Yo === Rp.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[op], ip[this._targetPath]) : ip[this._targetPath] = this._originalValue[op] + this._currentValue : ip[this._targetPath] = this._currentValue, pp.ocp && pp.ocp(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.mV && this.mV.animationPropertiesOverride) {
          return "MorphTarget" === this.mV.getClassName?.() && null == this.mV._animationPropertiesOverride ? this._animation.Yo : this.mV.animationPropertiesOverride.Yo
        }
        return this._animation.Yo
      }
      goToFrame(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const cp = this._animation.getKeys();
        pp < cp[0].frame ? pp = cp[0].frame : pp > cp[cp.length - 1].frame && (pp = cp[cp.length - 1].frame);
        const Op = this._events;
        if (Op.length)
          for (let Ip = 0; Ip < Op.length; Ip++) Op[Ip].onlyOnce || (Op[Ip].isDone = Op[Ip].frame < pp);
        this._currentFrame = pp;
        const op = this._animation._interpolate(pp, this._animationState);
        this.setValue(op, ip)
      }
      _prepareForSpeedRatioChange(pp) {
        const ip = this._previousElapsedTime * (this._animation.framePerSecond * pp) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - ip
      }
      animate(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Sp = this._animation,
          xp = Sp.targetPropertyPath;
        if (!xp || xp.length < 1) return this._stopped = !0, !1;
        let Lp, Yp = !0;
        const Dp = this._events;
        let Ap;
        if (this._coreRuntimeAnimation) Ap = cp - ip, Lp = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Lp, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Ip;
          (ip < this._minFrame || ip > this._maxFrame) && (ip = this._minFrame), (cp < this._minFrame || cp > this._maxFrame) && (cp = this._maxFrame), Ap = cp - ip;
          let xp = pp * (Sp.framePerSecond * op) / 1e3 + this._absoluteFrameOffset,
            Pp = 0,
            Wp = !1;
          const yp = Op && this._animationState.Yo === Rp.e.ANIMATIONLOOPMODE_YOYO;
          if (yp) {
            const pp = (xp - ip) / Ap,
              cp = Math.sin(pp * Math.PI);
            xp = Math.abs(cp) * Ap + ip;
            const Op = cp >= 0 ? 1 : -1;
            this._yoyoDirection !== Op && (Wp = !0), this._yoyoDirection = Op
          }
          if (this._previousElapsedTime = pp, this._previousAbsoluteFrame = xp, !Op && cp >= ip && (xp >= Ap && op > 0 || xp <= 0 && op < 0)) Yp = !1, Pp = Sp.evaluate(cp);
          else if (!Op && ip >= cp && (xp <= Ap && op < 0 || xp >= 0 && op > 0)) Yp = !1, Pp = Sp.evaluate(ip);
          else if (this._animationState.Yo !== Rp.e.ANIMATIONLOOPMODE_CYCLE) {
            const pp = cp.toString() + ip.toString();
            if (!this._offsetsCache[pp]) {
              this._animationState.repeatCount = 0, this._animationState.Yo = Rp.e.ANIMATIONLOOPMODE_CYCLE;
              const Op = Sp._interpolate(ip, this._animationState),
                op = Sp._interpolate(cp, this._animationState);
              switch (this._animationState.Yo = this._getCorrectLoopMode(), Sp.dataType) {
                case Rp.e.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[pp] = op - Op;
                  break;
                case Rp.e.ANIMATIONTYPE_QUATERNION:
                case Rp.e.ANIMATIONTYPE_VECTOR3:
                case Rp.e.ANIMATIONTYPE_VECTOR2:
                case Rp.e.ANIMATIONTYPE_SIZE:
                case Rp.e.ANIMATIONTYPE_COLOR3:
                case Rp.e.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[pp] = op.subtract(Op)
              }
              this._highLimitsCache[pp] = op
            }
            Pp = this._highLimitsCache[pp], Ip = this._offsetsCache[pp]
          }
          if (void 0 === Ip) switch (Sp.dataType) {
            case Rp.e.ANIMATIONTYPE_FLOAT:
              Ip = 0;
              break;
            case Rp.e.ANIMATIONTYPE_QUATERNION:
              Ip = Rp.o;
              break;
            case Rp.e.ANIMATIONTYPE_VECTOR3:
              Ip = Rp.w;
              break;
            case Rp.e.ANIMATIONTYPE_VECTOR2:
              Ip = Rp.t;
              break;
            case Rp.e.ANIMATIONTYPE_SIZE:
              Ip = Rp.p;
              break;
            case Rp.e.ANIMATIONTYPE_COLOR3:
              Ip = Rp.j;
              break;
            case Rp.e.ANIMATIONTYPE_COLOR4:
              Ip = Rp.m
          }
          const Up = this._host ? this._host.syncRoot : null;
          let wp, vp = this._playbackFrames,
            tp = !1;
          if (Up) {
            const pp = Up.toFrame - Up.fromFrame,
              cp = Up.masterFrame,
              Op = (cp - Up.fromFrame) / pp;
            Lp = ip + Ap * Op;
            const op = Up.getAnimations()[0];
            if (op && 0 !== pp) {
              const pp = Ap * Op,
                ip = op._playbackTo - op._playbackFrom;
              if (0 !== ip && op._playbackFrom <= Up.fromFrame && op._playbackTo >= Up.toFrame) {
                vp = Ap * Math.round((op._playbackFrames - (op._currentFrame - op._playbackFrom)) / ip) + pp
              } else tp = (cp - this._playbackSyncMasterFrame) * (op._playbackFrames - this._playbackSyncMasterPlayed) < 0, vp = pp;
              tp = tp || op._playbackJumped, this._playbackSyncMasterPlayed = op._playbackFrames, this._playbackSyncMasterFrame = cp
            }
          } else Lp = xp > 0 && ip > cp || xp < 0 && ip < cp ? Yp && 0 !== Ap ? cp + xp % Ap : ip : Yp && 0 !== Ap ? ip + xp % Ap : cp;
          if (!yp && (op > 0 && this.currentFrame > Lp || op < 0 && this.currentFrame < Lp) || yp && Wp) {
            this._onLoop();
            for (let pp = 0; pp < Dp.length; pp++) Dp[pp].onlyOnce || (Dp[pp].isDone = !1);
            this._animationState.key = op > 0 ? 0 : Sp.getKeys().length - 1
          }
          if (this._currentFrame = Lp, this._animationState.repeatCount = 0 === Ap ? 0 : xp / Ap | 0, this._animationState.highLimitValue = Pp, this._animationState.offsetValue = Ip, this._playbackFrom = ip, this._playbackTo = cp, this._playbackJumped = tp, this._playbackSyncRoot = Up, Up) wp = vp;
          else if (Yp) wp = yp ? Lp === ip && xp === cp ? Ap : Lp - ip : xp;
          else {
            const pp = 0 !== Ap ? Math.floor(this._playbackFrames / Ap) : 0;
            wp = (Lp === cp ? pp + 1 : pp) * Ap
          }
          this._playbackFrames = wp, this._playbackProgress = this._animationState.Yo === Rp.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Ap : wp
        }
        const Pp = Sp._interpolate(Lp, this._animationState);
        if (this.setValue(Pp, Ip), Dp.length)
          for (let Wp = 0; Wp < Dp.length; Wp++)
            if (Ap >= 0 && Lp >= Dp[Wp].frame && Dp[Wp].frame >= ip || Ap < 0 && Lp <= Dp[Wp].frame && Dp[Wp].frame <= ip) {
              const pp = Dp[Wp];
              pp.isDone || (pp.onlyOnce && (Dp.splice(Wp, 1), Wp--), pp.isDone = !0, pp.action(Lp))
            } return Yp || (this._stopped = !0), Yp
      }
    }
    var Mp = cp(40122);
    class Cp {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(pp) {
        this._weight = -1 !== pp ? Math.min(Math.max(pp, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(pp) {
        for (let ip = 0; ip < this._runtimeAnimations.length; ip++) {
          this._runtimeAnimations[ip]._prepareForSpeedRatioChange(pp)
        }
        this._speedRatio = pp, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          xp = arguments.length > 6 ? arguments[6] : void 0,
          Lp = arguments.length > 7 ? arguments[7] : void 0,
          Yp = arguments.length > 8 ? arguments[8] : void 0,
          Dp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Ap = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = ip, this.fromFrame = cp, this.toFrame = Op, this.loopAnimation = Ip, this.onAnimationEnd = xp, this.onAnimationLoop = Yp, this.isAdditive = Dp, this.playOrder = Ap, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.Fk = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new op.d, this.onAnimationLoopObservable = new op.d, this._scene = pp, Lp && this.appendAnimations(ip, Lp), this._speedRatio = Sp, pp._activeAnimatables.push(this)
      }
      syncWith(pp) {
        if (this._syncRoot = pp, pp) {
          const pp = this._scene._activeAnimatables.indexOf(this);
          pp > -1 && (this._scene._activeAnimatables.splice(pp, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(pp, ip) {
        for (let cp = 0; cp < ip.length; cp++) {
          const Op = ip[cp],
            op = new qp(pp, Op, this._scene, this);
          op._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(op)
        }
      }
      getAnimationByTargetProperty(pp) {
        const ip = this._runtimeAnimations;
        for (let cp = 0; cp < ip.length; cp++)
          if (ip[cp].animation.targetProperty === pp) return ip[cp].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(pp) {
        const ip = this._runtimeAnimations;
        for (let cp = 0; cp < ip.length; cp++)
          if (ip[cp].animation.targetProperty === pp) return ip[cp];
        return null
      }
      reset() {
        const pp = this._runtimeAnimations;
        for (let ip = 0; ip < pp.length; ip++) pp[ip].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(pp) {
        const ip = this._runtimeAnimations;
        for (let cp = 0; cp < ip.length; cp++) ip[cp].animation.enableBlending = !0, ip[cp].animation.blendingSpeed = pp
      }
      disableBlending() {
        const pp = this._runtimeAnimations;
        for (let ip = 0; ip < pp.length; ip++) pp[ip].animation.enableBlending = !1
      }
      goToFrame(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = this._runtimeAnimations;
        if (cp[0]) {
          const ip = cp[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? cp[0].currentFrame;
          const Op = 0 === this.speedRatio ? 0 : (pp - this._frameToSyncFromJump) / ip * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Op
        }
        for (let Op = 0; Op < cp.length; Op++) cp[Op].goToFrame(pp, ip ? this._weight : -1);
        this._goToFrame = pp
      }
      get paused() {
        return this.Fk
      }
      pause() {
        this.Fk || (this.Fk = !0)
      }
      restart() {
        this.Fk = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (pp || ip) {
          const op = this._scene._activeAnimatables.indexOf(this);
          if (op > -1) {
            const Ip = this._runtimeAnimations;
            for (let cp = Ip.length - 1; cp >= 0; cp--) {
              const Op = Ip[cp];
              pp && Op.animation.name != pp || (ip && !ip(Op.target) || (Op.dispose(), Ip.splice(cp, 1)))
            }
            0 == Ip.length && (cp || this._scene._activeAnimatables.splice(op, 1), Op || this._raiseOnAnimationEnd())
          }
        } else {
          const pp = this._scene._activeAnimatables.indexOf(this);
          if (pp > -1) {
            cp || this._scene._activeAnimatables.splice(pp, 1);
            const ip = this._runtimeAnimations;
            for (let pp = 0; pp < ip.length; pp++) ip[pp].dispose();
            this._runtimeAnimations.length = 0, Op || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((pp => {
          this.onAnimationEndObservable.add((() => {
            pp(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(pp) {
        if (this.Fk) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = pp), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = pp, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += pp - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Cp.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let ip = !1;
        const cp = this._runtimeAnimations;
        let Op;
        for (Op = 0; Op < cp.length; Op++) {
          const op = cp[Op].animate(pp - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          ip = ip || op
        }
        if (this.animationStarted = ip, !ip) {
          if (this.disposeOnEnd)
            for (Op = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Op, 1), Op = 0; Op < cp.length; Op++) cp[Op].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return ip
      }
    }

    function Ep(pp) {
      if (0 === pp.totalWeight && 0 === pp.totalAdditiveWeight) return pp.originalValue;
      let ip = 1;
      const cp = Ip.i.Zy[0],
        Op = Ip.i.Zy[1],
        op = Ip.i.Quaternion[0];
      let Sp = 0;
      const xp = pp.animations[0],
        Lp = pp.originalValue;
      let Yp, Dp = !1;
      if (pp.totalWeight < 1) Yp = 1 - pp.totalWeight, Lp.decompose(Op, op, cp);
      else {
        if (Sp = 1, ip = pp.totalWeight, Yp = xp.weight / ip, 1 == Yp) {
          if (!pp.totalAdditiveWeight) return xp.currentValue;
          Dp = !0
        }
        xp.currentValue.decompose(Op, op, cp)
      }
      if (!Dp) {
        Op.scaleInPlace(Yp), cp.scaleInPlace(Yp), op.scaleInPlace(Yp);
        for (let xp = Sp; xp < pp.animations.length; xp++) {
          const Sp = pp.animations[xp];
          if (0 === Sp.weight) continue;
          Yp = Sp.weight / ip;
          const Lp = Ip.i.Zy[2],
            Dp = Ip.i.Zy[3],
            Ap = Ip.i.Quaternion[1];
          Sp.currentValue.decompose(Dp, Ap, Lp), Dp.scaleAndAddToRef(Yp, Op), Ap.scaleAndAddToRef(Ip.f.Dot(op, Ap) > 0 ? Yp : -Yp, op), Lp.scaleAndAddToRef(Yp, cp)
        }
        op.normalize()
      }
      for (let Pp = 0; Pp < pp.additiveAnimations.length; Pp++) {
        const ip = pp.additiveAnimations[Pp];
        if (0 === ip.weight) continue;
        const Sp = Ip.i.Zy[2],
          xp = Ip.i.Zy[3],
          Lp = Ip.i.Quaternion[1];
        ip.currentValue.decompose(xp, Lp, Sp), xp.multiplyToRef(Op, xp), Ip.o.LerpToRef(Op, xp, ip.weight, Op), op.multiplyToRef(Lp, Lp), Ip.f.SlerpToRef(op, Lp, ip.weight, op), Sp.scaleAndAddToRef(ip.weight, cp)
      }
      const Ap = xp ? xp._animationState.workValue : Ip.i.Matrix[0].clone();
      return Ip.b.ComposeToRef(Op, op, cp, Ap), Ap
    }

    function Xp(pp, ip) {
      if (0 === pp.totalWeight && 0 === pp.totalAdditiveWeight) return ip;
      const cp = pp.animations[0],
        Op = pp.originalValue;
      let op = ip;
      if (0 === pp.totalWeight && pp.totalAdditiveWeight > 0) op.rM(Op);
      else if (1 === pp.animations.length) {
        if (Ip.f.SlerpToRef(Op, cp.currentValue, Math.min(1, pp.totalWeight), op), 0 === pp.totalAdditiveWeight) return op
      } else if (pp.animations.length > 1) {
        let cp, Sp, xp = 1;
        if (pp.totalWeight < 1) {
          const ip = 1 - pp.totalWeight;
          cp = [], Sp = [], cp.push(Op), Sp.push(ip)
        } else {
          if (2 === pp.animations.length && (Ip.f.SlerpToRef(pp.animations[0].currentValue, pp.animations[1].currentValue, pp.animations[1].weight / pp.totalWeight, ip), 0 === pp.totalAdditiveWeight)) return ip;
          cp = [], Sp = [], xp = pp.totalWeight
        }
        for (let ip = 0; ip < pp.animations.length; ip++) {
          const Op = pp.animations[ip];
          cp.push(Op.currentValue), Sp.push(Op.weight / xp)
        }
        let Lp = 0;
        for (let pp = 0; pp < cp.length;) pp ? (Lp += Sp[pp], Ip.f.SlerpToRef(op, cp[pp], Sp[pp] / Lp, op), pp++) : (Ip.f.SlerpToRef(cp[pp], cp[pp + 1], Sp[pp + 1] / (Sp[pp] + Sp[pp + 1]), ip), op = ip, Lp = Sp[pp] + Sp[pp + 1], pp += 2)
      }
      for (let Sp = 0; Sp < pp.additiveAnimations.length; Sp++) {
        const ip = pp.additiveAnimations[Sp];
        0 !== ip.weight && (op.multiplyToRef(ip.currentValue, Ip.i.Quaternion[0]), Ip.f.SlerpToRef(op, Ip.i.Quaternion[0], ip.weight, op))
      }
      return op
    }

    function lp(pp, ip) {
      ip && (ip.prototype.copyAnimationRange = function(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Rp.e(this.name, "_matrix", pp.animations[0].framePerSecond, Rp.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Ip = pp.animations[0].getRange(ip);
        if (!Ip) return !1;
        const Sp = Ip.from,
          xp = Ip.to,
          Lp = pp.animations[0].getKeys(),
          Yp = pp.length,
          Dp = pp.getParent(),
          Ap = this.getParent(),
          Pp = Op && Dp && Yp && this.length && Yp !== this.length,
          Wp = Pp && Ap && Dp ? Ap.length / Dp.length : 1,
          yp = Op && !Ap && op && (1 !== op.x || 1 !== op.y || 1 !== op.z),
          Up = this.animations[0].getKeys();
        let wp, vp, tp;
        for (let Hp = 0, dp = Lp.length; Hp < dp; Hp++) wp = Lp[Hp], wp.frame >= Sp && wp.frame <= xp && (Op ? (tp = wp.value.clone(), Pp ? (vp = tp.getTranslation(), tp.setTranslation(vp.scaleInPlace(Wp))) : yp && op ? (vp = tp.getTranslation(), tp.setTranslation(vp.multiplyInPlace(op))) : tp = wp.value) : tp = wp.value, Up.push({
          frame: wp.frame + cp,
          value: tp
        }));
        return this.animations[0].createRange(ip, Sp + cp, xp + cp), !0
      }), pp && (pp.prototype._animate = function(pp) {
        const ip = this._animationWrites,
          cp = this._animationWriteCount;
        let Op = 0;
        for (let Ip = this._animationStepWriteCount; Ip < cp; Ip++) {
          const pp = ip[Ip];
          pp.Hw && -1 === pp.weight || (pp.Hw = !0, ip[Ip] = ip[Op], ip[Op] = pp, Op++)
        }
        for (let Ip = Op; Ip < cp; Ip++) {
          const pp = ip[Ip];
          pp.runtimeAnimation = null, pp.target = null
        }
        if (this._animationWriteCount = Op, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const op = Mp.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = op
        }
        this.deltaTime = void 0 !== pp ? pp : this.useConstantAnimationDeltaTime ? 16 : (op - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = op;
        const Sp = this._activeAnimatables;
        if (0 === Sp.length) return;
        this._animationTime += this.deltaTime;
        const xp = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Ip = 0; Ip < Sp.length; Ip++) {
          const pp = Sp[Ip];
          !pp._animate(xp) && pp.disposeOnEnd && Ip--
        }! function(pp) {
          if (pp._registeredForLateAnimationBindings.length) {
            for (let ip = 0; ip < pp._registeredForLateAnimationBindings.length; ip++) {
              const cp = pp._registeredForLateAnimationBindings.data[ip];
              for (const pp in cp._lateAnimationHolders) {
                const ip = cp._lateAnimationHolders[pp],
                  Op = ip.animations[0],
                  op = ip.originalValue;
                if (void 0 === op || null === op) continue;
                const Sp = Rp.e.AllowMatrixDecomposeForInterpolation && op.m;
                let xp = cp[pp];
                if (Sp) xp = Ep(ip);
                else if (void 0 !== op.w) xp = Xp(ip, xp || Ip.f.Identity());
                else {
                  let pp = 0,
                    cp = 1;
                  const Ip = Op && Op._animationState.Yo === Rp.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (ip.totalWeight < 1) xp = Ip ? op.clone ? op.clone() : op : Op && op.scale ? op.scale(1 - ip.totalWeight) : Op ? op * (1 - ip.totalWeight) : op.clone ? op.clone() : op;
                  else if (Op) {
                    cp = ip.totalWeight;
                    const Sp = Op.weight / cp;
                    xp = 1 !== Sp ? Op.currentValue.scale ? Op.currentValue.scale(Sp) : Op.currentValue * Sp : (ip.animations.length > 1 || ip.additiveAnimations.length > 0) && Op.currentValue.clone ? Op.currentValue.clone() : Op.currentValue, Ip && (xp.addToRef ? xp.addToRef(op, xp) : xp += op), pp = 1
                  }
                  for (let Op = pp; Op < ip.animations.length; Op++) {
                    const pp = ip.animations[Op],
                      op = pp.weight / cp;
                    op && (pp.currentValue.scaleAndAddToRef ? pp.currentValue.scaleAndAddToRef(op, xp) : xp += pp.currentValue * op)
                  }
                  for (let Op = 0; Op < ip.additiveAnimations.length; Op++) {
                    const pp = ip.additiveAnimations[Op],
                      cp = pp.weight;
                    cp && (pp.currentValue.scaleAndAddToRef ? pp.currentValue.scaleAndAddToRef(cp, xp) : xp += pp.currentValue * cp)
                  }
                }
                cp[pp] = xp
              }
              cp._lateAnimationHolders = {}
            }
            pp._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, pp.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((pp, ip) => pp.playOrder - ip.playOrder))
      }, pp.prototype.beginWeightedAnimation = function(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          op = arguments.length > 4 ? arguments[4] : void 0,
          Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 ? arguments[7] : void 0,
          Lp = arguments.length > 8 ? arguments[8] : void 0,
          Yp = arguments.length > 9 ? arguments[9] : void 0,
          Dp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ap = this.beginAnimation(pp, ip, cp, op, Ip, Sp, xp, !1, Lp, Yp, Dp);
        return Ap.weight = Op, Ap
      }, pp.prototype.beginAnimation = function(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Ip = arguments.length > 5 ? arguments[5] : void 0,
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Lp = arguments.length > 8 ? arguments[8] : void 0,
          Yp = arguments.length > 9 ? arguments[9] : void 0,
          Dp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (op < 0) {
          const pp = ip;
          ip = cp, cp = pp, op = -op
        }
        ip > cp && (op = -op), xp && this.stopAnimation(pp, void 0, Lp), Sp || (Sp = new Cp(this, pp, ip, cp, Op, op, Ip, void 0, Yp, Dp));
        const Ap = !Lp || Lp(pp);
        if (pp.animations && Ap && Sp.appendAnimations(pp, pp.animations), pp.getAnimatables) {
          const Dp = pp.getAnimatables();
          for (let pp = 0; pp < Dp.length; pp++) this.beginAnimation(Dp[pp], ip, cp, Op, op, Ip, Sp, xp, Lp, Yp)
        }
        return Sp.reset(), Sp
      }, pp.prototype.beginHierarchyAnimation = function(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 ? arguments[7] : void 0,
          Lp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Yp = arguments.length > 9 ? arguments[9] : void 0,
          Dp = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Ap = pp.getDescendants(ip),
          Pp = [];
        Pp.push(this.beginAnimation(pp, cp, Op, op, Ip, Sp, xp, Lp, Yp, void 0, Dp));
        for (const Wp of Ap) Pp.push(this.beginAnimation(Wp, cp, Op, op, Ip, Sp, xp, Lp, Yp, void 0, Dp));
        return Pp
      }, pp.prototype.beginDirectAnimation = function(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Ip < 0) {
          const pp = cp;
          cp = Op, Op = pp, Ip = -Ip
        }
        cp > Op && (Ip = -Ip);
        return new Cp(this, pp, cp, Op, op, Ip, arguments.length > 6 ? arguments[6] : void 0, ip, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, pp.prototype.beginDirectHierarchyAnimation = function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
        let Yp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Dp = pp.getDescendants(ip),
          Ap = [];
        Ap.push(this.beginDirectAnimation(pp, cp, Op, op, Ip, Sp, xp, Lp, Yp));
        for (const Pp of Dp) Ap.push(this.beginDirectAnimation(Pp, cp, Op, op, Ip, Sp, xp, Lp, Yp));
        return Ap
      }, pp.prototype.getAnimatableByTarget = function(pp) {
        for (let ip = 0; ip < this._activeAnimatables.length; ip++)
          if (this._activeAnimatables[ip].target === pp) return this._activeAnimatables[ip];
        return null
      }, pp.prototype.getAllAnimatablesByTarget = function(pp) {
        const ip = [];
        for (let cp = 0; cp < this._activeAnimatables.length; cp++) this._activeAnimatables[cp].target === pp && ip.push(this._activeAnimatables[cp]);
        return ip
      }, pp.prototype.stopAnimation = function(pp, ip, cp) {
        const Op = this.getAllAnimatablesByTarget(pp);
        for (const op of Op) op.stop(ip, cp)
      }, pp.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let pp = 0; pp < this._activeAnimatables.length; pp++) this._activeAnimatables[pp].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const pp of this.animationGroups) pp.stop()
      })
    }
    Cp.ProcessPausedAnimatables = !1;
    var Qp, Jp = cp(37329),
      Bp = cp(40415),
      Np = cp(40096);
    class Tp extends Bp.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(pp) {
        (pp.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.rM(pp), this._markAsDirtyAndDecompose())
      }
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Sp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(pp, ip.Gl(), !1), this.name = pp, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = ip, this._localMatrix = Op?.clone() ?? Ip.b.Identity(), this._restMatrix = op ?? this._localMatrix.clone(), this._bindMatrix = Sp ?? this._localMatrix.clone(), this._index = xp, this._absoluteMatrix = new Ip.b, this._absoluteBindMatrix = new Ip.b, this._absoluteInverseBindMatrix = new Ip.b, this._finalMatrix = new Ip.b, ip.bones.push(this), this.setParent(cp, !1), this._updateAbsoluteBindMatrices()
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
      set parent(pp) {
        this.setParent(pp)
      }
      setParent(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== pp) {
          if (this.parent) {
            const pp = this.parent.children.indexOf(this); - 1 !== pp && this.parent.children.splice(pp, 1)
          }
          this._parentNode = pp, this.parent && this.parent.children.push(this), ip && this._updateAbsoluteBindMatrices(), this.ocp()
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
      setRestMatrix(pp) {
        this._restMatrix.rM(pp)
      }
      setRestPose(pp) {
        this.setRestMatrix(pp)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(pp) {
        this.I3(pp)
      }
      setBindPose(pp) {
        this.setBindMatrix(pp)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const pp = Ip.i.Zy[0],
            ip = Ip.i.Quaternion[0],
            cp = Ip.i.Zy[1];
          this.getRestMatrix().decompose(pp, ip, cp), this._linkedTransformNode.position.rM(cp), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Ip.f.Identity(), this._linkedTransformNode.rotationQuaternion.rM(ip), this._linkedTransformNode.ei.rM(pp)
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
      linkTransformNode(pp) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = pp, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.Iip
      }
      set position(pp) {
        this._decompose(), this.Iip.rM(pp), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(pp) {
        this.setRotation(pp)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(pp) {
        this.setRotationQuaternion(pp)
      }
      get ei() {
        return this.getScale()
      }
      set ei(pp) {
        this.setScale(pp)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Ip.o.Zero(), this._localRotation = Ip.f.Zero(), this.Iip = Ip.o.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Iip))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Ip.b.ComposeToRef(this._localScaling, this._localRotation, this.Iip, this._localMatrix)) : this._needToCompose = !1)
      }
      I3(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.rM(pp), ip && this._updateAbsoluteBindMatrices(), cp ? this._matrix = pp : this.ocp()
      }
      _updateAbsoluteBindMatrices(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (pp || (pp = this._bindMatrix), this.parent ? pp.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.rM(pp), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), ip)
          for (let cp = 0; cp < this.children.length; cp++) this.children[cp]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      ocp() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.ocp(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.ocp(), this._needToDecompose = !0
      }
      _updatePosition(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const op = this.getLocalMatrix();
        if (0 == ip) Op ? (op.addAtIndex(12, pp.x), op.addAtIndex(13, pp.y), op.addAtIndex(14, pp.z)) : op.setTranslationFromFloats(pp.x, pp.y, pp.z);
        else {
          const ip = Tp._TmpMats[0],
            Sp = Tp._TmpVecs[0];
          this.parent ? (ip.rM(this.parent.getAbsoluteMatrix()), cp && ip.multiplyToRef(cp.getWorldMatrix(), ip)) : Ip.b.IdentityToRef(ip), Op && ip.setTranslationFromFloats(0, 0, 0), ip.invert(), Ip.o.TransformCoordinatesToRef(pp, ip, Sp), Op ? (op.addAtIndex(12, Sp.x), op.addAtIndex(13, Sp.y), op.addAtIndex(14, Sp.z)) : op.setTranslationFromFloats(Sp.x, Sp.y, Sp.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(pp, ip, cp, !0)
      }
      setPosition(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(pp, ip, cp, !1)
      }
      setAbsolutePosition(pp, ip) {
        this.setPosition(pp, 1, ip)
      }
      scale(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const op = this.getLocalMatrix(),
          Sp = Tp._TmpMats[0];
        Ip.b.ScalingToRef(pp, ip, cp, Sp), Sp.multiplyToRef(op, op), Sp.invert();
        for (const Ip of this.children) {
          const Op = Ip.getLocalMatrix();
          Op.multiplyToRef(Sp, Op), Op.multiplyAtIndex(12, pp), Op.multiplyAtIndex(13, ip), Op.multiplyAtIndex(14, cp), Ip._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Op)
          for (const Ip of this.children) Ip.scale(pp, ip, cp, Op)
      }
      setScale(pp) {
        this._decompose(), this._localScaling.rM(pp), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(pp) {
        this._decompose(), pp.rM(this._localScaling)
      }
      setYawPitchRoll(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          op = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Op) {
          const Sp = Tp._TmpQuat;
          return Ip.f.RotationYawPitchRollToRef(pp, ip, cp, Sp), void this.setRotationQuaternion(Sp, Op, op)
        }
        const Sp = Tp._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Sp, op)) return;
        const xp = Tp._TmpMats[1];
        Ip.b.RotationYawPitchRollToRef(pp, ip, cp, xp), Sp.multiplyToRef(xp, xp), this._rotateWithMatrix(xp, Op, op)
      }
      rotate(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        const op = Tp._TmpMats[0];
        op.setTranslationFromFloats(0, 0, 0), Ip.b.RotationAxisToRef(pp, ip, op), this._rotateWithMatrix(op, cp, Op)
      }
      setAxisAngle(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === cp) {
          const op = Tp._TmpQuat;
          return Ip.f.RotationAxisToRef(pp, ip, op), void this.setRotationQuaternion(op, cp, Op)
        }
        const op = Tp._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(op, Op)) return;
        const Sp = Tp._TmpMats[1];
        Ip.b.RotationAxisToRef(pp, ip, Sp), op.multiplyToRef(Sp, Sp), this._rotateWithMatrix(Sp, cp, Op)
      }
      setRotation(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(pp.y, pp.x, pp.z, ip, cp)
      }
      setRotationQuaternion(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ip) return this._decompose(), this._localRotation.rM(pp), void this._markAsDirtyAndCompose();
        const Op = Tp._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Op, cp)) return;
        const op = Tp._TmpMats[1];
        Ip.b.FromQuaternionToRef(pp, op), Op.multiplyToRef(op, op), this._rotateWithMatrix(op, ip, cp)
      }
      setRotationMatrix(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ip) {
          const Op = Tp._TmpQuat;
          return Ip.f.FromRotationMatrixToRef(pp, Op), void this.setRotationQuaternion(Op, ip, cp)
        }
        const Op = Tp._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Op, cp)) return;
        const op = Tp._TmpMats[1];
        op.rM(pp), Op.multiplyToRef(pp, op), this._rotateWithMatrix(op, ip, cp)
      }
      _rotateWithMatrix(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = this.getLocalMatrix(),
          op = Op.m[12],
          Ip = Op.m[13],
          Sp = Op.m[14],
          xp = this.getParent(),
          Lp = Tp._TmpMats[3],
          Yp = Tp._TmpMats[4];
        xp && 1 == ip ? (cp ? (Lp.rM(cp.getWorldMatrix()), xp.getAbsoluteMatrix().multiplyToRef(Lp, Lp)) : Lp.rM(xp.getAbsoluteMatrix()), Yp.rM(Lp), Yp.invert(), Op.multiplyToRef(Lp, Op), Op.multiplyToRef(pp, Op), Op.multiplyToRef(Yp, Op)) : 1 == ip && cp ? (Lp.rM(cp.getWorldMatrix()), Yp.rM(Lp), Yp.invert(), Op.multiplyToRef(Lp, Op), Op.multiplyToRef(pp, Op), Op.multiplyToRef(Yp, Op)) : Op.multiplyToRef(pp, Op), Op.setTranslationFromFloats(op, Ip, Sp), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(pp, ip) {
        const cp = Tp._TmpMats[2];
        return pp.rM(this.getAbsoluteMatrix()), ip ? (pp.multiplyToRef(ip.getWorldMatrix(), pp), Ip.b.ScalingToRef(ip.ei.x, ip.ei.y, ip.ei.z, cp)) : Ip.b.IdentityToRef(cp), pp.invert(), !isNaN(pp.m[0]) && (cp.multiplyAtIndex(0, this._scalingDeterminant), pp.multiplyToRef(cp, pp), !0)
      }
      sH() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = Ip.o.Zero();
        return this.getPositionToRef(pp, ip, cp), cp
      }
      getPositionToRef() {
        let pp = arguments.length > 1 ? arguments[1] : void 0,
          ip = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const pp = this.getLocalMatrix();
          ip.x = pp.m[12], ip.y = pp.m[13], ip.z = pp.m[14]
        } else {
          const cp = Tp._TmpMats[0].rM(this.getAbsoluteMatrix());
          pp && cp.multiplyToRef(pp.getWorldMatrix(), cp), ip.x = cp.m[12], ip.y = cp.m[13], ip.z = cp.m[14]
        }
      }
      getAbsolutePosition() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const ip = Ip.o.Zero();
        return this.getPositionToRef(1, pp, ip), ip
      }
      getAbsolutePositionToRef(pp, ip) {
        this.getPositionToRef(1, pp, ip)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.rM(this._localMatrix);
          const pp = this._skeleton.getPoseMatrix();
          pp && this._absoluteMatrix.multiplyToRef(pp, this._absoluteMatrix)
        }
        const pp = this.children,
          ip = pp.length;
        for (let cp = 0; cp < ip; cp++) pp[cp].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      hK(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = Ip.o.Zero();
        return this.getDirectionToRef(pp, ip, cp), cp
      }
      getDirectionToRef(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = Tp._TmpMats[0].rM(this.getAbsoluteMatrix());
        ip && Op.multiplyToRef(ip.getWorldMatrix(), Op), Ip.o.TransformNormalToRef(pp, Op, cp), cp.normalize()
      }
      getRotation() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = Ip.o.Zero();
        return this.getRotationToRef(pp, ip, cp), cp
      }
      getRotationToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = Tp._TmpQuat;
        this.getRotationQuaternionToRef(pp, ip, Op), Op.toEulerAnglesToRef(cp)
      }
      getRotationQuaternion() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = Ip.f.Identity();
        return this.getRotationQuaternionToRef(pp, ip, cp), cp
      }
      getRotationQuaternionToRef() {
        let pp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ip = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), ip.rM(this._localRotation);
        else {
          const cp = Tp._TmpMats[0],
            Op = this.getAbsoluteMatrix();
          pp ? Op.multiplyToRef(pp.getWorldMatrix(), cp) : cp.rM(Op), cp.multiplyAtIndex(0, this._scalingDeterminant), cp.multiplyAtIndex(1, this._scalingDeterminant), cp.multiplyAtIndex(2, this._scalingDeterminant), cp.decompose(void 0, ip, void 0)
        }
      }
      getRotationMatrix() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 ? arguments[1] : void 0;
        const cp = Ip.b.Identity();
        return this.getRotationMatrixToRef(pp, ip, cp), cp
      }
      getRotationMatrixToRef() {
        let pp = arguments.length > 1 ? arguments[1] : void 0,
          ip = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(ip);
        else {
          const cp = Tp._TmpMats[0],
            Op = this.getAbsoluteMatrix();
          pp ? Op.multiplyToRef(pp.getWorldMatrix(), cp) : cp.rM(Op), cp.multiplyAtIndex(0, this._scalingDeterminant), cp.multiplyAtIndex(1, this._scalingDeterminant), cp.multiplyAtIndex(2, this._scalingDeterminant), cp.getRotationMatrixToRef(ip)
        }
      }
      getAbsolutePositionFromLocal(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = Ip.o.Zero();
        return this.getAbsolutePositionFromLocalToRef(pp, ip, cp), cp
      }
      getAbsolutePositionFromLocalToRef(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = Tp._TmpMats[0].rM(this.getAbsoluteMatrix());
        ip && Op.multiplyToRef(ip.getWorldMatrix(), Op), Ip.o.TransformCoordinatesToRef(pp, Op, cp)
      }
      getLocalPositionFromAbsolute(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cp = Ip.o.Zero();
        return this.getLocalPositionFromAbsoluteToRef(pp, ip, cp), cp
      }
      getLocalPositionFromAbsoluteToRef(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = Tp._TmpMats[0].rM(this.getAbsoluteMatrix());
        ip && Op.multiplyToRef(ip.getWorldMatrix(), Op), Op.invert(), Ip.o.TransformCoordinatesToRef(pp, Op, cp)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const pp = this._skeleton.bones.indexOf(this);
        if (-1 !== pp && this._skeleton.bones.splice(pp, 1), this._parentNode && this._parentNode.children) {
          const pp = this._parentNode.children,
            ip = pp.indexOf(this); - 1 !== ip && pp.splice(ip, 1)
        }
        super.dispose()
      }
    }
    Tp._TmpVecs = (0, Jp.d)(2, Ip.o.Zero), Tp._TmpQuat = Ip.f.Identity(), Tp._TmpMats = (0, Jp.d)(5, Ip.b.Identity), (Qp = Tp.prototype).copyAnimationRange ?? (Qp.copyAnimationRange = (0, Np.k)("Bone", "copyAnimationRange"));
    var fp = cp(40296);
    let bp = !1;
    var hp = cp(40176),
      ap = cp(40509),
      np = cp(40516),
      Fp = cp(40512),
      gp = cp(40324);

    function Gp(pp, ip) {
      const cp = (0, Wp.RandomRange)(0, 1);
      Dp.h.LerpToRef(ip.color1, ip.color2, cp, pp.color)
    }

    function rp(pp, ip) {
      ip.colorDead.subtractToRef(pp.color, ip._colorDiff), ip._colorDiff.scaleToRef(1 / pp.lifeTime, pp.colorStep)
    }

    function Zp(pp, ip) {
      pp._properties.currentColorGradient = ip._colorGradients[0], pp._properties.currentColorGradient.getColorToRef(pp.color), pp._properties.currentColor1.rM(pp.color), ip._colorGradients.length > 1 ? ip._colorGradients[1].getColorToRef(pp._properties.currentColor2) : pp._properties.currentColor2.rM(pp.color)
    }

    function zp(pp, ip) {
      const cp = ip._colorGradients;
      Op.l.GetCurrentGradient(ip._ratio, cp, ((ip, cp, Op) => {
        ip !== pp._properties.currentColorGradient && (pp._properties.currentColor1.rM(pp._properties.currentColor2), cp.getColorToRef(pp._properties.currentColor2), pp._properties.currentColorGradient = ip), Dp.h.LerpToRef(pp._properties.currentColor1, pp._properties.currentColor2, Op, pp.color), pp.color.a < 0 && (pp.color.a = 0)
      }))
    }

    function sp(pp, ip) {
      pp.colorStep.scaleToRef(ip._scaledUpdateSpeed, ip._scaledColorStep), pp.color.addInPlace(ip._scaledColorStep), pp.color.a < 0 && (pp.color.a = 0)
    }

    function Kp(pp, ip) {
      Op.l.GetCurrentGradient(ip._ratio, ip._angularSpeedGradients, ((ip, cp, Op) => {
        ip !== pp._properties.currentAngularSpeedGradient && (pp._properties.currentAngularSpeed1 = pp._properties.currentAngularSpeed2, pp._properties.currentAngularSpeed2 = cp.getFactor(), pp._properties.currentAngularSpeedGradient = ip), pp.angularSpeed = (0, Wp.Lerp)(pp._properties.currentAngularSpeed1, pp._properties.currentAngularSpeed2, Op)
      }))
    }

    function Vp(pp, ip) {
      pp.angle += pp.angularSpeed * ip._scaledUpdateSpeed
    }

    function ii(pp, ip) {
      ip.particleEmitterType.startDirectionFunction(ip._emitterWorldMatrix, pp.direction, pp, ip.isLocal, ip._emitterInverseWorldMatrix)
    }

    function ci(pp, ip) {
      ip.startDirectionFunction(ip._emitterWorldMatrix, pp.direction, pp, ip.isLocal)
    }

    function Oi(pp, ip) {
      pp._properties.currentVelocityGradient = ip._velocityGradients[0], pp._properties.currentVelocity1 = pp._properties.currentVelocityGradient.getFactor(), ip._velocityGradients.length > 1 ? pp._properties.currentVelocity2 = ip._velocityGradients[1].getFactor() : pp._properties.currentVelocity2 = pp._properties.currentVelocity1
    }

    function oi(pp, ip) {
      pp._properties.currentLimitVelocityGradient = ip._limitVelocityGradients[0], pp._properties.currentLimitVelocity1 = pp._properties.currentLimitVelocityGradient.getFactor(), ip._limitVelocityGradients.length > 1 ? pp._properties.currentLimitVelocity2 = ip._limitVelocityGradients[1].getFactor() : pp._properties.currentLimitVelocity2 = pp._properties.currentLimitVelocity1
    }

    function Ii(pp, ip) {
      Op.l.GetCurrentGradient(ip._ratio, ip._velocityGradients, ((ip, cp, Op) => {
        ip !== pp._properties.currentVelocityGradient && (pp._properties.currentVelocity1 = pp._properties.currentVelocity2, pp._properties.currentVelocity2 = cp.getFactor(), pp._properties.currentVelocityGradient = ip), pp._properties.directionScale *= (0, Wp.Lerp)(pp._properties.currentVelocity1, pp._properties.currentVelocity2, Op)
      }))
    }

    function Si(pp, ip) {
      Op.l.GetCurrentGradient(ip._ratio, ip._limitVelocityGradients, ((cp, Op, op) => {
        cp !== pp._properties.currentLimitVelocityGradient && (pp._properties.currentLimitVelocity1 = pp._properties.currentLimitVelocity2, pp._properties.currentLimitVelocity2 = Op.getFactor(), pp._properties.currentLimitVelocityGradient = cp);
        const Ip = (0, Wp.Lerp)(pp._properties.currentLimitVelocity1, pp._properties.currentLimitVelocity2, op);
        pp.direction.length() > Ip && pp.direction.scaleInPlace(ip.limitVelocityDamping)
      }))
    }

    function xi(pp) {
      pp.direction.scaleToRef(pp._properties.directionScale, pp._properties.scaledDirection)
    }

    function Li(pp, ip) {
      ip.particleEmitterType.startPositionFunction(ip._emitterWorldMatrix, pp.position, pp, ip.isLocal)
    }

    function Yi(pp, ip) {
      ip.startPositionFunction(ip._emitterWorldMatrix, pp.position, pp, ip.isLocal)
    }

    function Di(pp, ip) {
      pp._properties.localPosition ? pp._properties.localPosition.rM(pp.position) : pp._properties.localPosition = pp.position.clone(), Ip.o.TransformCoordinatesToRef(pp._properties.localPosition, ip._emitterWorldMatrix, pp.position)
    }

    function Ai(pp, ip) {
      ip.isLocal && pp._properties.localPosition ? (pp._properties.localPosition.addInPlace(pp._properties.scaledDirection), Ip.o.TransformCoordinatesToRef(pp._properties.localPosition, ip._emitterWorldMatrix, pp.position)) : pp.position.addInPlace(pp._properties.scaledDirection)
    }

    function Pi(pp, ip) {
      pp._properties.currentDragGradient = ip._dragGradients[0], pp._properties.currentDrag1 = pp._properties.currentDragGradient.getFactor(), ip._dragGradients.length > 1 ? pp._properties.currentDrag2 = ip._dragGradients[1].getFactor() : pp._properties.currentDrag2 = pp._properties.currentDrag1
    }

    function Wi(pp, ip) {
      Op.l.GetCurrentGradient(ip._ratio, ip._dragGradients, ((ip, cp, Op) => {
        ip !== pp._properties.currentDragGradient && (pp._properties.currentDrag1 = pp._properties.currentDrag2, pp._properties.currentDrag2 = cp.getFactor(), pp._properties.currentDragGradient = ip);
        const op = (0, Wp.Lerp)(pp._properties.currentDrag1, pp._properties.currentDrag2, Op);
        pp._properties.scaledDirection.scaleInPlace(1 - op)
      }))
    }

    function yi(pp, ip) {
      pp._properties.randomNoiseCoordinates1 && pp._properties.randomNoiseCoordinates2 ? (pp._properties.randomNoiseCoordinates1.i5(Math.random(), Math.random(), Math.random()), pp._properties.randomNoiseCoordinates2.i5(Math.random(), Math.random(), Math.random())) : (pp._properties.randomNoiseCoordinates1 = new Ip.o(Math.random(), Math.random(), Math.random()), pp._properties.randomNoiseCoordinates2 = new Ip.o(Math.random(), Math.random(), Math.random()))
    }

    function Ui(pp, ip) {
      const cp = ip._noiseTextureData,
        Op = ip._noiseTextureSize;
      if (cp && Op && pp._properties.randomNoiseCoordinates1 && pp._properties.randomNoiseCoordinates2) {
        const op = ip._fetchR(pp._properties.randomNoiseCoordinates1.x, pp._properties.randomNoiseCoordinates1.y, Op.width, Op.height, cp),
          Sp = ip._fetchR(pp._properties.randomNoiseCoordinates1.z, pp._properties.randomNoiseCoordinates2.x, Op.width, Op.height, cp),
          xp = ip._fetchR(pp._properties.randomNoiseCoordinates2.y, pp._properties.randomNoiseCoordinates2.z, Op.width, Op.height, cp),
          Lp = Ip.i.Zy[0],
          Yp = Ip.i.Zy[1];
        Lp.i5((2 * op - 1) * ip.noiseStrength.x, (2 * Sp - 1) * ip.noiseStrength.y, (2 * xp - 1) * ip.noiseStrength.z), Lp.scaleToRef(ip._tempScaledUpdateSpeed, Yp), pp.direction.addInPlace(Yp)
      }
    }

    function wi(pp, ip) {
      ip.gravity.scaleToRef(ip._tempScaledUpdateSpeed, ip._scaledGravity), pp.direction.addInPlace(ip._scaledGravity)
    }

    function vi(pp, ip) {
      pp.size = (0, Wp.RandomRange)(ip.minSize, ip.maxSize), pp.scale.i5((0, Wp.RandomRange)(ip.minScaleX, ip.maxScaleX), (0, Wp.RandomRange)(ip.minScaleY, ip.maxScaleY))
    }

    function ti(pp, ip) {
      pp._properties.currentSizeGradient = ip._sizeGradients[0], pp._properties.currentSize1 = pp._properties.currentSizeGradient.getFactor(), pp.size = pp._properties.currentSize1, ip._sizeGradients.length > 1 ? pp._properties.currentSize2 = ip._sizeGradients[1].getFactor() : pp._properties.currentSize2 = pp._properties.currentSize1, pp.scale.i5((0, Wp.RandomRange)(ip.minScaleX, ip.maxScaleX), (0, Wp.RandomRange)(ip.minScaleY, ip.maxScaleY))
    }

    function Hi(pp, ip) {
      const cp = ip._actualFrame / ip.targetStopDuration;
      Op.l.GetCurrentGradient(cp, ip._startSizeGradients, ((cp, Op, op) => {
        cp !== ip._currentStartSizeGradient && (ip._currentStartSize1 = ip._currentStartSize2, ip._currentStartSize2 = Op.getFactor(), ip._currentStartSizeGradient = cp);
        const Ip = (0, Wp.Lerp)(ip._currentStartSize1, ip._currentStartSize2, op);
        pp.scale.scaleInPlace(Ip)
      }))
    }

    function di(pp, ip) {
      Op.l.GetCurrentGradient(ip._ratio, ip._sizeGradients, ((ip, cp, Op) => {
        ip !== pp._properties.currentSizeGradient && (pp._properties.currentSize1 = pp._properties.currentSize2, pp._properties.currentSize2 = cp.getFactor(), pp._properties.currentSizeGradient = ip), pp.size = (0, Wp.Lerp)(pp._properties.currentSize1, pp._properties.currentSize2, Op)
      }))
    }

    function ei(pp, ip) {
      pp.remapData = new Ip.q(0, 1, 0, 1)
    }

    function ui(pp, ip) {
      ip._colorRemapGradients && ip._colorRemapGradients.length > 0 && Op.l.GetCurrentGradient(ip._ratio, ip._colorRemapGradients, ((ip, cp, Op) => {
        const op = (0, Wp.Lerp)(ip.factor1, cp.factor1, Op),
          Ip = (0, Wp.Lerp)(ip.factor2, cp.factor2, Op);
        pp.remapData.x = op, pp.remapData.y = Ip - op
      })), ip._alphaRemapGradients && ip._alphaRemapGradients.length > 0 && Op.l.GetCurrentGradient(ip._ratio, ip._alphaRemapGradients, ((ip, cp, Op) => {
        const op = (0, Wp.Lerp)(ip.factor1, cp.factor1, Op),
          Ip = (0, Wp.Lerp)(ip.factor2, cp.factor2, Op);
        pp.remapData.z = op, pp.remapData.w = Ip - op
      }))
    }

    function ji(pp, ip) {
      const cp = (0, Wp.Clamp)(ip._actualFrame / ip.targetStopDuration);
      Op.l.GetCurrentGradient(cp, ip._lifeTimeGradients, ((ip, Op) => {
        const op = ip,
          Ip = Op,
          Sp = op.getFactor(),
          xp = Ip.getFactor(),
          Lp = (cp - op.gradient) / (Ip.gradient - op.gradient);
        pp.lifeTime = (0, Wp.Lerp)(Sp, xp, Lp)
      })), ip._emitPower = (0, Wp.RandomRange)(ip.minEmitPower, ip.maxEmitPower)
    }

    function ki(pp, ip) {
      pp.lifeTime = (0, Wp.RandomRange)(ip.minLifeTime, ip.maxLifeTime), ip._emitPower = (0, Wp.RandomRange)(ip.minEmitPower, ip.maxEmitPower)
    }

    function mi(pp, ip) {
      0 === ip._emitPower ? (pp._properties.initialDirection ? pp._properties.initialDirection.rM(pp.direction) : pp._properties.initialDirection = pp.direction.clone(), pp.direction.set(0, 0, 0)) : (pp._properties.initialDirection = null, pp.direction.scaleInPlace(ip._emitPower)), pp.direction.addInPlace(ip._inheritedVelocityOffset)
    }

    function Ri(pp, ip) {
      pp.angularSpeed = (0, Wp.RandomRange)(ip.minAngularSpeed, ip.maxAngularSpeed), pp.angle = (0, Wp.RandomRange)(ip.minInitialRotation, ip.maxInitialRotation)
    }

    function qi(pp, ip) {
      pp._properties.currentAngularSpeedGradient = ip._angularSpeedGradients[0], pp.angularSpeed = pp._properties.currentAngularSpeedGradient.getFactor(), pp._properties.currentAngularSpeed1 = pp.angularSpeed, ip._angularSpeedGradients.length > 1 ? pp._properties.currentAngularSpeed2 = ip._angularSpeedGradients[1].getFactor() : pp._properties.currentAngularSpeed2 = pp._properties.currentAngularSpeed1, pp.angle = (0, Wp.RandomRange)(ip.minInitialRotation, ip.maxInitialRotation)
    }

    function Mi(pp, ip) {
      pp._properties.initialStartSpriteCellId = ip.startSpriteCellID, pp._properties.initialEndSpriteCellId = ip.endSpriteCellID, pp._properties.initialSpriteCellLoop = ip.spriteCellLoop
    }

    function Ci(pp, ip) {
      pp.previousItem = ip.previousItem, pp.nextItem = ip, ip.previousItem && (ip.previousItem.nextItem = pp), ip.previousItem = pp
    }

    function Ei(pp, ip) {
      pp.previousItem = ip, pp.nextItem = ip.nextItem, ip.nextItem && (ip.nextItem.previousItem = pp), ip.nextItem = pp
    }

    function Xi(pp) {
      pp.previousItem && (pp.previousItem.nextItem = pp.nextItem), pp.nextItem && (pp.nextItem.previousItem = pp.previousItem)
    }
    var li = cp(40550);
    class Qi extends jp {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(pp) {
        this._startDirectionFunction !== pp && (this._startDirectionFunction = pp, this._directionCreation.process = pp ? ci : ii)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(pp) {
        this._startPositionFunction !== pp && (this._startPositionFunction = pp, this._positionCreation.process = pp ? Yi : Li)
      }
      set onDispose(pp) {
        this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
      }
      get uR() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(pp) {
        this._useRampGradients !== pp && (this._useRampGradients = pp, this._resetEffect(), pp ? (this._rampCreation = {
          process: ei,
          previousItem: null,
          nextItem: null
        }, Ei(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: ui,
          previousItem: null,
          nextItem: null
        }, Ei(this._remapGradientProcessing, this._gravityProcessing))) : (Xi(this._rampCreation), Xi(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(pp) {
        this._isLocal !== pp && (this._isLocal = pp, pp ? (this._isLocalCreation = {
          process: Di,
          previousItem: null,
          nextItem: null
        }, Ei(this._isLocalCreation, this._positionCreation)) : Xi(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(pp) {
        this._animationSheetEnabled !== pp && (this._animationSheetEnabled = pp, pp ? (this._sheetCreation = {
          process: Mi,
          previousItem: null,
          nextItem: null
        }, Ei(this._sheetCreation, this._colorDeadCreation)) : Xi(this._sheetCreation), this._reset())
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
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[pp]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[pp] ?? this._customWrappers[0]
      }
      setCustomEffect(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[ip] = new ap.e(this._engine), this._customWrappers[ip].effect = pp, this._customWrappers[ip].drawContext && (this._customWrappers[ip].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new op.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(pp) {
        if (this.noiseTexture !== pp) {
          if (this._noiseTexture = pp, !pp) return Xi(this._noiseCreation), void Xi(this._noiseProcessing);
          this._noiseCreation = {
            process: yi,
            previousItem: null,
            nextItem: null
          }, Ei(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Ui,
            previousItem: null,
            nextItem: null
          }, Ei(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Yp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        bp || (bp = !0, lp(fp.f, Tp)), (0, hp.b)(), super(pp), this._emitterInverseWorldMatrix = Ip.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Ip.o, this.Kl = new op.d, this.onStoppedObservable = new op.d, this.onStartedObservable = new op.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Dp.h(0, 0, 0, 0), this._colorDiff = new Dp.h(0, 0, 0, 0), this._scaledGravity = Ip.o.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = pp => {}, this.recycleParticle = pp => {
          const ip = this._particles.pop();
          ip !== pp && ip.copyTo(pp), ip.metadata = null, this._stockParticles.push(ip)
        }, this._createParticle = () => {
          let pp;
          return 0 !== this._stockParticles.length ? (pp = this._stockParticles.pop(), pp._reset()) : pp = new mp(this), this._prepareParticle(pp), pp
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = ip, this._epsilon = xp, cp && "Scene" !== cp.getClassName() ? (this._engine = cp, this.defaultProjectionMatrix = Ip.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = cp || Lp.e.LastCreatedScene, this._engine = this._scene.gy(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.Wm.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: ki,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Li,
          previousItem: null,
          nextItem: null
        }, Ei(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: ii,
          previousItem: null,
          nextItem: null
        }, Ei(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: mi,
          previousItem: null,
          nextItem: null
        }, Ei(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: vi,
          previousItem: null,
          nextItem: null
        }, Ei(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: Ri,
          previousItem: null,
          nextItem: null
        }, Ei(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Gp,
          previousItem: null,
          nextItem: null
        }, Ei(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: rp,
          previousItem: null,
          nextItem: null
        }, Ei(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Yp || (this._colorProcessing = {
          process: sp,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Vp,
          previousItem: null,
          nextItem: null
        }, Ei(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: xi,
          previousItem: null,
          nextItem: null
        }, Ei(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Ai,
          previousItem: null,
          nextItem: null
        }, Ei(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: wi,
          previousItem: null,
          nextItem: null
        }, Ei(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Sp, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new ap.e(this._engine)
        }, this._customWrappers[0].effect = Op, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Ap.b, this.updateFunction = pp => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((pp => {
            this._noiseTextureData = pp
          })));
          const ip = pp === this._particles;
          for (let cp = 0; cp < pp.length; cp++) {
            const Op = pp[cp];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const op = Op.age;
            if (Op.age += this._tempScaledUpdateSpeed, Op.age > Op.lifeTime) {
              const pp = Op.age - op,
                ip = Op.lifeTime - op;
              this._tempScaledUpdateSpeed = ip * this._tempScaledUpdateSpeed / pp, Op.age = Op.lifeTime
            }
            this._ratio = Op.age / Op.lifeTime, Op._properties.directionScale = this._tempScaledUpdateSpeed;
            let Ip = this._updateQueueStart;
            for (; Ip;) Ip.process(Op, this), Ip = Ip.nextItem;
            if (this._isAnimationSheetEnabled && !Yp && Op.updateCellIndex(), Op._inheritParticleInfoToSubEmitters(), Op.age >= Op.lifeTime) {
              if (this._emitFromParticle(Op), Op._properties.attachedSubEmitters) {
                for (const pp of Op._properties.attachedSubEmitters) pp.particleSystem.disposeOnStop = !0, pp.particleSystem.stop();
                Op._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Op), ip && cp--
            } else;
          }
        }
      }
      serialize(pp) {
        throw new Error("Method not implemented.")
      }
      clone(pp, ip) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = ji : this._lifeTimeCreation.process = ki
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Hi,
          previousItem: null,
          nextItem: null
        }, Ei(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Xi(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(pp) {
        this.targetStopDuration !== pp && (this._targetStopDuration = pp, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(pp, ip, cp) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, pp, ip, cp), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(pp) {
        return this._removeFactorGradient(this._lifeTimeGradients, pp), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(pp, ip, cp) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = ti, this._sizeGradientProcessing = {
          process: di,
          previousItem: null,
          nextItem: null
        }, Ci(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, pp, ip, cp), this
      }
      removeSizeGradient(pp) {
        return this._removeFactorGradient(this._sizeGradients, pp), 0 === this._sizeGradients?.length && (Xi(this._sizeGradientProcessing), this._sizeCreation.process = vi), this
      }
      addColorRemapGradient(pp, ip, cp) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, pp, ip, cp), this
      }
      removeColorRemapGradient(pp) {
        return this._removeFactorGradient(this._colorRemapGradients, pp), this
      }
      addAlphaRemapGradient(pp, ip, cp) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, pp, ip, cp), this
      }
      removeAlphaRemapGradient(pp) {
        return this._removeFactorGradient(this._alphaRemapGradients, pp), this
      }
      addAngularSpeedGradient(pp, ip, cp) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = qi, this._angularSpeedGradientProcessing = {
          process: Kp,
          previousItem: null,
          nextItem: null
        }, Ci(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, pp, ip, cp), this
      }
      removeAngularSpeedGradient(pp) {
        return this._removeFactorGradient(this._angularSpeedGradients, pp), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = Ri, Xi(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(pp, ip, cp) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: Oi,
          previousItem: null,
          nextItem: null
        }, Ei(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Ii,
          previousItem: null,
          nextItem: null
        }, Ci(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, pp, ip, cp), this
      }
      removeVelocityGradient(pp) {
        return this._removeFactorGradient(this._velocityGradients, pp), 0 === this._velocityGradients?.length && (Xi(this._velocityCreation), Xi(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(pp, ip, cp) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: oi,
          previousItem: null,
          nextItem: null
        }, Ei(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Si,
          previousItem: null,
          nextItem: null
        }, Ei(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, pp, ip, cp), this
      }
      removeLimitVelocityGradient(pp) {
        return this._removeFactorGradient(this._limitVelocityGradients, pp), 0 === this._limitVelocityGradients?.length && (Xi(this._limitVelocityCreation), Xi(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(pp, ip, cp) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Pi,
          previousItem: null,
          nextItem: null
        }, Ci(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Wi,
          previousItem: null,
          nextItem: null
        }, Ci(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, pp, ip, cp), this
      }
      removeDragGradient(pp) {
        return this._removeFactorGradient(this._dragGradients, pp), 0 === this._dragGradients?.length && (Xi(this._dragCreation), Xi(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(pp, ip, cp) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, pp, ip, cp), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(pp) {
        return this._removeFactorGradient(this._startSizeGradients, pp), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const pp = new Uint8Array(4 * this._rawTextureWidth),
          ip = Dp.j.Color3[0];
        for (let cp = 0; cp < this._rawTextureWidth; cp++) {
          const op = cp / this._rawTextureWidth;
          Op.l.GetCurrentGradient(op, this._rampGradients, ((Op, op, Ip) => {
            Dp.d.LerpToRef(Op.color, op.color, Ip, ip), pp[4 * cp] = 255 * ip.r, pp[4 * cp + 1] = 255 * ip.g, pp[4 * cp + 2] = 255 * ip.b, pp[4 * cp + 3] = 255
          }))
        }
        this._rampGradientsTexture = xp.b.CreateRGBATexture(pp, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((pp, ip) => pp.gradient < ip.gradient ? -1 : pp.gradient > ip.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(pp, ip) {
        this._rampGradients || (this._rampGradients = []);
        const cp = new Op.f(pp, ip);
        return this._rampGradients.push(cp), this._syncRampGradientTexture(), this
      }
      removeRampGradient(pp) {
        return this._removeGradientAndTexture(pp, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(pp, ip, cp) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Zp, this._colorProcessing.process = zp);
        const op = new Op.c(pp, ip, cp);
        return this._colorGradients.push(op), this._colorGradients.sort(((pp, ip) => pp.gradient < ip.gradient ? -1 : pp.gradient > ip.gradient ? 1 : 0)), this
      }
      removeColorGradient(pp) {
        if (!this._colorGradients) return this;
        let ip = 0;
        for (const cp of this._colorGradients) {
          if (cp.gradient === pp) {
            this._colorGradients.splice(ip, 1);
            break
          }
          ip++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Gp, this._colorProcessing.process = sp), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const pp of this._drawWrappers)
            if (pp)
              for (const ip of pp) ip?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(pp, ip, cp, Op, op) {
        return op[4 * (((pp = .5 * Math.abs(pp) + .5) * cp % cp | 0) + ((ip = .5 * Math.abs(ip) + .5) * Op % Op | 0) * cp)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const pp = this._engine,
          ip = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * ip), this._vertexBuffer = new Sp.b(pp, this._vertexData, !0, ip);
        let cp = 0;
        const Op = this._vertexBuffer.createVertexBuffer(Sp.j.PositionKind, cp, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Sp.j.PositionKind] = Op, cp += 3;
        const op = this._vertexBuffer.createVertexBuffer(Sp.j.ColorKind, cp, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Sp.j.ColorKind] = op, cp += 4;
        const Ip = this._vertexBuffer.createVertexBuffer("angle", cp, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Ip, cp += 1;
        const xp = this._vertexBuffer.createVertexBuffer("size", cp, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = xp, cp += 2, this._isAnimationSheetEnabled) {
          const pp = this._vertexBuffer.createVertexBuffer("cellIndex", cp, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = pp, cp += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const pp = this._vertexBuffer.createVertexBuffer("direction", cp, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = pp, cp += 3
        }
        if (this._useRampGradients) {
          const pp = this._vertexBuffer.createVertexBuffer("remapData", cp, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = pp, cp += 4
        }
        let Lp;
        if (this._useInstancing) {
          const ip = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Sp.b(pp, ip, !1, 2), Lp = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Lp = this._vertexBuffer.createVertexBuffer("offset", cp, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Lp, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const pp = [],
          ip = [];
        let cp = 0;
        for (let Op = 0; Op < this._capacity; Op++) pp.push(cp), pp.push(cp + 1), pp.push(cp + 2), pp.push(cp), pp.push(cp + 2), pp.push(cp + 3), ip.push(cp, cp + 1, cp + 1, cp + 2, cp + 2, cp + 3, cp + 3, cp, cp, cp + 3), cp += 4;
        this._indexBuffer = this._engine.createIndexBuffer(pp), this._linesIndexBuffer = this._engine.createIndexBuffer(ip)
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
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (pp) return this.startDelay = pp, void setTimeout((() => {
          this.start(0)
        }), pp);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const pp = this.noiseTexture;
          if (pp && pp.onGeneratedObservable) pp.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let ip = 0; ip < this.preWarmCycles; ip++) this.animate(!0), pp.render()
            }))
          }));
          else
            for (let ip = 0; ip < this.preWarmCycles; ip++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(pp))
      }
      _postStop(pp) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(pp, ip, cp, Op) {
        let op = pp * this._vertexBufferSize;
        const Sp = Ip.i.Zy[0].rM(this._scene?.floatingOriginOffset || Ip.o.ZeroReadOnly);
        if (this._vertexData[op++] = ip.position.x + this.worldOffset.x - Sp.x, this._vertexData[op++] = ip.position.y + this.worldOffset.y - Sp.y, this._vertexData[op++] = ip.position.z + this.worldOffset.z - Sp.z, this._vertexData[op++] = ip.color.r, this._vertexData[op++] = ip.color.g, this._vertexData[op++] = ip.color.b, this._vertexData[op++] = ip.color.a, this._vertexData[op++] = ip.angle, this._vertexData[op++] = ip.scale.x * ip.size, this._vertexData[op++] = ip.scale.y * ip.size, this._isAnimationSheetEnabled && (this._vertexData[op++] = ip.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[op++] = ip.direction.x, this._vertexData[op++] = ip.direction.y, this._vertexData[op++] = ip.direction.z);
        else if (ip._properties.initialDirection) {
          let pp = ip._properties.initialDirection;
          this.isLocal && (Ip.o.TransformNormalToRef(pp, this._emitterWorldMatrix, Ip.i.Zy[0]), pp = Ip.i.Zy[0]), 0 === pp.x && 0 === pp.z && (pp.x = .001), this._vertexData[op++] = pp.x, this._vertexData[op++] = pp.y, this._vertexData[op++] = pp.z
        } else {
          let pp = ip.direction;
          this.isLocal && (Ip.o.TransformNormalToRef(pp, this._emitterWorldMatrix, Ip.i.Zy[0]), pp = Ip.i.Zy[0]), 0 === pp.x && 0 === pp.z && (pp.x = .001), this._vertexData[op++] = pp.x, this._vertexData[op++] = pp.y, this._vertexData[op++] = pp.z
        }
        this._useRampGradients && ip.remapData && (this._vertexData[op++] = ip.remapData.x, this._vertexData[op++] = ip.remapData.y, this._vertexData[op++] = ip.remapData.z, this._vertexData[op++] = ip.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === cp ? cp = this._epsilon : 1 === cp && (cp = 1 - this._epsilon), 0 === Op ? Op = this._epsilon : 1 === Op && (Op = 1 - this._epsilon)), this._vertexData[op++] = cp, this._vertexData[op] = Op)
      }
      _prepareParticle(pp) {}
      _createNewOnes(pp) {
        let ip;
        for (let cp = 0; cp < pp && this._particles.length !== this._capacity; cp++) {
          ip = this._createParticle(), this._particles.push(ip);
          let pp = this._createQueueStart;
          for (; pp;) pp.process(ip, this), pp = pp.nextItem;
          ip._inheritParticleInfoToSubEmitters()
        }
      }
      _update(pp) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const pp = this.emitter;
          this._emitterWorldMatrix = pp.getWorldMatrix()
        } else {
          const pp = this.emitter;
          this._emitterWorldMatrix = Ip.b.Translation(pp.x, pp.y, pp.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(pp)
      }
      static _GetAttributeNamesOrOptions() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = [Sp.j.PositionKind, Sp.j.ColorKind, "angle", "offset", "size"];
        return pp && Op.push("cellIndex"), ip || Op.push("direction"), cp && Op.push("remapData"), Op
      }
      static _GetEffectCreationOptions() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, np.c)(Op), pp && Op.push("particlesInfos"), ip && Op.push("logarithmicDepthConstant"), cp && (Op.push("vFogInfos"), Op.push("vFogColor")), Op
      }
      fillDefines(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, np.k)(this, this._scene, pp), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && pp.push("#define FOG")), this._isAnimationSheetEnabled && pp.push("#define ANIMATESHEET"), this.useLogarithmicDepth && pp.push("#define LOGARITHMICDEPTH"), ip === jp.BLENDMODE_MULTIPLY && pp.push("#define BLENDMULTIPLYMODE"), this.isLocal && pp.push("#define LOCAL"), this._useRampGradients && pp.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (pp.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            pp.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            pp.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && pp.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            pp.push("#define BILLBOARDMODE_ALL")
        }
        cp && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), pp.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(pp, ip, cp) {
        ip.push(...Qi._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), pp.push(...Qi._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), cp.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, gp.f)(pp, this._imageProcessingConfigurationDefines), (0, gp.c)(cp, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(pp) {
        var ip;
        const cp = this._getCustomDrawWrapper(pp);
        if (cp?.effect) return cp;
        const Op = [];
        this.fillDefines(Op, pp);
        const Ip = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Sp = li.e._PrepareStringDefines(Ip, Op),
          xp = Sp ? li.e.GetConfiguration(Ip) : void 0;
        let Lp = this._drawWrappers[Ip];
        Lp || (Lp = this._drawWrappers[Ip] = [], 0 === Ip || this._renderPassObserver || (this._renderPassObserver = ((ip = this._engine)._onReleaseRenderPassObservable ?? (ip._onReleaseRenderPassObservable = new op.d)).add((pp => {
          const ip = this._drawWrappers[pp];
          if (ip) {
            for (const pp of ip) pp?.dispose();
            delete this._drawWrappers[pp]
          }
        }))));
        let Yp = Lp[pp];
        Yp || (Yp = new ap.e(this._engine), Yp.drawContext && (Yp.drawContext.useInstancing = this._useInstancing), Lp[pp] = Yp);
        const Dp = Op.join("\n");
        if (Yp.defines !== Dp) {
          const pp = [],
            ip = [],
            cp = [];
          this.fillUniformsAttributesAndSamplerNames(ip, pp, cp), Sp && (ip.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== xp?.defines.PREPASS_LOCAL_POSITION_INDEX && ip.push("inverseEmitterWM", "geometryWorldOffset")), Yp.setEffect(this._engine.createEffect("particles", {
            attributes: pp,
            uniformsNames: ip,
            samplers: cp,
            defines: Dp,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Sp,
            indexParameters: Sp ? {
              buffersCount: xp?._mrtCount ?? 0
            } : void 0
          }, this._engine), Dp)
        }
        return Yp
      }
      _bindGeometryRendering(pp) {
        const ip = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          cp = li.e.GetConfiguration(ip);
        if (!cp?._defines) return;
        pp.setFloat("objectId", 0), pp.setInt("meshBlendTag", 0);
        const Op = this._scene?.activeCamera;
        if (pp.setFloat2("cameraInfo", Op?.minZ ?? 0, Op?.maxZ ?? 1), this.isLocal && void 0 !== cp.defines.PREPASS_LOCAL_POSITION_INDEX) {
          pp.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const ip = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Ip.o.ZeroReadOnly, Ip.i.Zy[0]);
          pp.setVector3("geometryWorldOffset", ip)
        }
      }
      animate() {
        let pp, ip = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!ip && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (ip ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) pp = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const ip = this._calculateEmitRate();
            pp = ip * this._scaledUpdateSpeed | 0, this._newPartsExcess += ip * this._scaledUpdateSpeed - pp
          }
          if (this._newPartsExcess > 1 && (pp += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? pp = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(pp), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !ip) {
            let pp = 0;
            for (let ip = 0; ip < this._particles.length; ip++) {
              const cp = this._particles[ip];
              this._appendParticleVertices(pp, cp), pp += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const pp = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  ip = this._particles.length;
                ip < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, ip * pp, this._fixedCapacityHighWaterMark * pp), this._fixedCapacityHighWaterMark = ip, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const pp = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * pp), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let pp = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const ip = this._actualFrame / this.targetStopDuration;
          Op.l.GetCurrentGradient(ip, this._emitRateGradients, ((ip, cp, Op) => {
            ip !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = cp.getFactor(), this._currentEmitRateGradient = ip), pp = (0, Wp.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Op)
          }))
        }
        return pp
      }
      _appendParticleVertices(pp, ip) {
        this._appendParticleVertex(pp++, ip, 0, 0), this._useInstancing || (this._appendParticleVertex(pp++, ip, 1, 0), this._appendParticleVertex(pp++, ip, 1, 1), this._appendParticleVertex(pp, ip, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Qi.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([cp.e(351).then((() => cp(61401))), cp.e(345).then((() => cp(61404)))])) : await Promise.all([cp.e(334).then((() => cp(61413))), Promise.all([cp.e(327), cp.e(360)]).then((() => cp(61419)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== jp.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(jp.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(jp.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(pp) {
        const ip = this._getWrapper(pp),
          cp = ip.effect,
          Op = this._engine;
        Op.enableEffect(ip);
        const op = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        cp.setTexture("diffuseSampler", this.particleTexture), cp.setMatrix("view", op);
        const Sp = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (cp.setMatrix("projection", Sp), this._isAnimationSheetEnabled && this.particleTexture) {
          const pp = this.particleTexture.getBaseSize();
          cp.setFloat3("particlesInfos", this.spriteCellWidth / pp.width, this.spriteCellHeight / pp.height, this.spriteCellWidth / pp.width)
        }
        if (cp.setVector2("translationPivot", this.translationPivot), cp.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const pp = this._scene.activeCamera;
          cp.setVector3("eyePosition", pp.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), cp.setTexture("rampSampler", this._rampGradientsTexture));
        const xp = cp.defines;
        this._scene && ((0, np.g)(cp, this, this._scene), this.applyFog && (0, Fp.i)(this._scene, void 0, cp)), xp.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (op.invertToRef(Ip.i.Matrix[0]), cp.setMatrix("invView", Ip.i.Matrix[0])), cp._multiTarget && this._bindGeometryRendering(cp), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Op.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, cp) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, cp)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Op.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, cp) : Op.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, cp), this.useLogarithmicDepth && this._scene && (0, Fp.r)(xp, cp, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(cp), this._setEngineBasedOnBlendMode(pp), cp._multiTarget && li.e._BindZeroAlphaDiscard(Op, cp);
        let Lp = !1;
        try {
          li.e._BindAttachmentsForEffect(Op, cp) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(cp), this._useInstancing ? this._scene?.forceWireframe ? Op.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Op.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Op.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Op.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Lp = !0)
        } finally {
          li.e._RestoreAttachments(Op)
        }
        return Lp ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const pp = this._engine;
        let ip;
        return pp.setState && (pp.setState(!1), this.forceDepthWrite && pp.setDepthWrite(!0)), ip = this.blendMode === jp.BLENDMODE_MULTIPLYADD ? this._render(jp.BLENDMODE_MULTIPLY) + this._render(jp.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), ip
      }
      _onDispose() {}
      dispose() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), pp && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), pp && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(ip, cp), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const pp = this._scene.Wm.indexOf(this);
          pp > -1 && this._scene.Wm.splice(pp, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Kl.notifyObservers(this), this.Kl.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Qi.ForceGLSL = !1;
    var Ji, Bi = cp(37368);
    ! function(pp) {
      pp[pp.ATTACHED = 0] = "ATTACHED", pp[pp.END = 1] = "END"
    }(Ji || (Ji = {}));
    class Ni {
      constructor(pp) {
        if (this.particleSystem = pp, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !pp.emitter || !pp.emitter.dispose) {
          const ip = (0, Bi.d)("BABYLON.AbstractMesh");
          pp.emitter = new ip("SubemitterSystemEmitter", pp.Gl()), pp._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let pp = this.particleSystem.emitter;
        if (pp) {
          if (pp instanceof Ip.o) pp = pp.clone();
          else if (-1 !== pp.getClassName().indexOf("Mesh")) {
            pp = new((0, Bi.d)("BABYLON.Mesh"))("", pp.Gl()), pp.isVisible = !1
          }
        } else pp = new Ip.o;
        const ip = new Ni(this.particleSystem.clone(this.particleSystem.name, pp));
        return ip.particleSystem.name += "Clone", ip.type = this.type, ip.inheritDirection = this.inheritDirection, ip.inheritedVelocityAmount = this.inheritedVelocityAmount, ip.particleSystem._disposeEmitterOnDispose = !0, ip.particleSystem.disposeOnStop = !0, ip
      }
      serialize() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = {};
        return ip.type = this.type, ip.inheritDirection = this.inheritDirection, ip.inheritedVelocityAmount = this.inheritedVelocityAmount, ip.particleSystem = this.particleSystem.serialize(pp), ip
      }
      static _ParseParticleSystem(pp, ip, cp) {
        throw (0, Np.o)("ParseParticle")
      }
      static Parse(pp, ip, cp) {
        const Op = pp.particleSystem,
          op = new Ni(Ni._ParseParticleSystem(Op, ip, cp, !0));
        return op.type = pp.type, op.inheritDirection = pp.inheritDirection, op.inheritedVelocityAmount = pp.inheritedVelocityAmount, op.particleSystem._isSubEmitter = !0, op
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Ti = cp(40113),
      fi = cp(40233);
    const bi = () => {};
    class ai {
      constructor() {
        this.particlePositionGenerator = bi, this.particleDestinationGenerator = bi, this.particleDirectionGenerator = bi
      }
      startDirectionFunction(pp, ip, cp, Op) {
        const op = Ip.i.Zy[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== bi) this.particleDirectionGenerator(-1, cp, op);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== bi) {
          this.particleDestinationGenerator(-1, cp, op);
          const pp = Ip.i.Zy[1];
          op.subtractToRef(cp.position, pp), pp.scaleToRef(1 / cp.lifeTime, op)
        } else op.set(0, 0, 0);
        Op ? ip.rM(op) : Ip.o.TransformNormalToRef(op, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Op) {
        const op = Ip.i.Zy[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== bi ? this.particlePositionGenerator(-1, cp, op) : op.set(0, 0, 0), Op ? ip.rM(op) : Ip.o.TransformCoordinatesToRef(op, pp, ip)
      }
      clone() {
        const pp = new ai;
        return Pp.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {}
      buildUniformLayout(pp) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.particlePositionGenerator = this.particlePositionGenerator, pp.particleDestinationGenerator = this.particleDestinationGenerator, pp
      }
      parse(pp) {
        pp.particlePositionGenerator && (this.particlePositionGenerator = pp.particlePositionGenerator), pp.particleDestinationGenerator && (this.particleDestinationGenerator = pp.particleDestinationGenerator)
      }
    }
    const ni = Ip.o.Zero(),
      Fi = Ip.o.Zero(),
      gi = Ip.o.Zero();
    class Gi {
      constructor() {
        this.strength = 0, this.position = Ip.o.Zero()
      }
      _processParticle(pp, ip) {
        this.position.subtractToRef(pp.position, ni);
        const cp = ni.lengthSquared() + 1;
        ni.normalize().scaleToRef(this.strength / cp, Fi), Fi.scaleToRef(ip._tempScaledUpdateSpeed, gi), pp.direction.addInPlace(gi)
      }
      serialize() {
        return {
          position: this.position.BOp(),
          strength: this.strength
        }
      }
    }
    const ri = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Zi extends Qi {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = pp => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const ip = Math.floor(Math.random() * this._subEmitters.length);
          for (const cp of this._subEmitters[ip])
            if (1 === cp.type) {
              const ip = cp.clone();
              pp._inheritParticleInfoToSubEmitter(ip), ip.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(ip.particleSystem), ip.particleSystem.start()
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
      set flowMap(pp) {
        this._flowMap !== pp && (this._flowMap = pp, this._flowMapUpdate && (Xi(this._flowMapUpdate), this._flowMapUpdate = null), pp && (this._flowMapUpdate = {
          process: pp => {
            const ip = this.Gl()?.getTransformMatrix();
            this._flowMap._processParticle(pp, this.flowMapStrength * this._tempScaledUpdateSpeed, ip)
          },
          previousItem: null,
          nextItem: null
        }, Ei(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(pp) {
        super.addAttractor(pp), 1 === this._attractors.length && (this._attractorUpdate = {
          process: pp => {
            for (const ip of this._attractors) ip._processParticle(pp, this)
          },
          previousItem: null,
          nextItem: null
        }, Ei(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(pp) {
        super.removeAttractor(pp), 0 === this._attractors.length && this._attractorUpdate && Xi(this._attractorUpdate)
      }
      start() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(pp)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const pp of this.subEmitters) pp instanceof Zi ? this._subEmitters.push([new Ni(pp)]) : pp instanceof Ni ? this._subEmitters.push([pp]) : pp instanceof Array && this._subEmitters.push(pp)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const pp of this.activeSubSystems) pp.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const pp = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== pp && this._rootParticleSystem.activeSubSystems.splice(pp, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(pp) {
        pp && this._stopSubEmitters()
      }
      _prepareParticle(pp) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const ip = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          pp._properties.attachedSubEmitters = [];
          for (const cp of ip)
            if (0 === cp.type) {
              const ip = cp.clone();
              pp._properties.attachedSubEmitters.push(ip), ip.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), pp && this.particles)
          for (const cp of this.particles)
            if (cp._properties.attachedSubEmitters)
              for (let pp = cp._properties.attachedSubEmitters.length - 1; pp >= 0; pp -= 1) cp._properties.attachedSubEmitters[pp].dispose();
        if (ip && this.activeSubSystems)
          for (let cp = this.activeSubSystems.length - 1; cp >= 0; cp -= 1) this.activeSubSystems[cp].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let pp = 0; pp < this._subEmitters.length; pp++)
            for (const ip of this._subEmitters[pp]) ip.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(pp, ip, cp, Op) {
        let op;
        op = cp instanceof Ti.b ? null : cp;
        const Sp = (0, Bi.d)("BABYLON.Texture");
        if (Sp && op)
          if (pp.texture) ip.particleTexture = Sp.Parse(pp.texture, op, Op);
          else if (pp.textureName) {
          const cp = pp.textureSettings;
          if (ip.particleTexture = new Sp(Op + pp.textureName, op, !1, void 0 === pp.invertY || pp.invertY, cp ? cp.samplingMode : void 0), ip.particleTexture.name = pp.textureName, cp) {
            const pp = ip.particleTexture;
            for (const ip of ri) void 0 !== cp[ip] && (pp[ip] = cp[ip])
          }
        }
        if (pp.emitterId || 0 === pp.emitterId || void 0 !== pp.emitter ? (pp.emitterId || 0 === pp.emitterId) && op ? (ip.emitter = op.getLastMeshById(pp.emitterId), ip.emitter || (ip.emitter = Ip.o.Zero())) : ip.emitter = Ip.o.FromArray(pp.emitter) : ip.emitter = Ip.o.Zero(), ip.isLocal = !!pp.isLocal, void 0 !== pp.renderingGroupId && (ip.renderingGroupId = pp.renderingGroupId), void 0 !== pp.isBillboardBased && (ip.isBillboardBased = pp.isBillboardBased), void 0 !== pp.billboardMode && (ip.billboardMode = pp.billboardMode), void 0 !== pp.useLogarithmicDepth && (ip.useLogarithmicDepth = pp.useLogarithmicDepth), pp.animations) {
          for (let cp = 0; cp < pp.animations.length; cp++) {
            const Op = pp.animations[cp],
              op = (0, Bi.d)("BABYLON.Animation");
            op && ip.animations.push(op.Parse(Op))
          }
          ip.beginAnimationOnStart = pp.beginAnimationOnStart, ip.beginAnimationFrom = pp.beginAnimationFrom, ip.beginAnimationTo = pp.beginAnimationTo, ip.beginAnimationLoop = pp.beginAnimationLoop
        }
        if (pp.autoAnimate && op && op.beginAnimation(ip, pp.autoAnimateFrom, pp.autoAnimateTo, pp.autoAnimateLoop, pp.autoAnimateSpeed || 1), ip.startDelay = 0 | pp.startDelay, ip.minAngularSpeed = pp.minAngularSpeed, ip.maxAngularSpeed = pp.maxAngularSpeed, ip.minSize = pp.minSize, ip.maxSize = pp.maxSize, pp.minScaleX && (ip.minScaleX = pp.minScaleX, ip.maxScaleX = pp.maxScaleX, ip.minScaleY = pp.minScaleY, ip.maxScaleY = pp.maxScaleY), void 0 !== pp.preWarmCycles && (ip.preWarmCycles = pp.preWarmCycles, ip.preWarmStepOffset = pp.preWarmStepOffset), void 0 !== pp.minInitialRotation && (ip.minInitialRotation = pp.minInitialRotation, ip.maxInitialRotation = pp.maxInitialRotation), ip.minLifeTime = pp.minLifeTime, ip.maxLifeTime = pp.maxLifeTime, ip.minEmitPower = pp.minEmitPower, ip.maxEmitPower = pp.maxEmitPower, ip.emitRate = pp.emitRate, ip.gravity = Ip.o.FromArray(pp.gravity), pp.noiseStrength && (ip.noiseStrength = Ip.o.FromArray(pp.noiseStrength)), ip.color1 = Dp.h.FromArray(pp.color1), ip.color2 = Dp.h.FromArray(pp.color2), ip.colorDead = Dp.h.FromArray(pp.colorDead), ip.updateSpeed = pp.updateSpeed, ip.targetStopDuration = pp.targetStopDuration, ip.blendMode = pp.blendMode, pp.colorGradients)
          for (const Ip of pp.colorGradients) ip.addColorGradient(Ip.gradient, Dp.h.FromArray(Ip.color1), Ip.color2 ? Dp.h.FromArray(Ip.color2) : void 0);
        if (pp.rampGradients) {
          for (const cp of pp.rampGradients) ip.addRampGradient(cp.gradient, Dp.d.FromArray(cp.color));
          ip.useRampGradients = pp.useRampGradients
        }
        if (pp.colorRemapGradients)
          for (const Ip of pp.colorRemapGradients) ip.addColorRemapGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.alphaRemapGradients)
          for (const Ip of pp.alphaRemapGradients) ip.addAlphaRemapGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.sizeGradients)
          for (const Ip of pp.sizeGradients) ip.addSizeGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.angularSpeedGradients)
          for (const Ip of pp.angularSpeedGradients) ip.addAngularSpeedGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.velocityGradients)
          for (const Ip of pp.velocityGradients) ip.addVelocityGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.dragGradients)
          for (const Ip of pp.dragGradients) ip.addDragGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.emitRateGradients)
          for (const Ip of pp.emitRateGradients) ip.addEmitRateGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.startSizeGradients)
          for (const Ip of pp.startSizeGradients) ip.addStartSizeGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.lifeTimeGradients)
          for (const Ip of pp.lifeTimeGradients) ip.addLifeTimeGradient(Ip.gradient, void 0 !== Ip.factor1 ? Ip.factor1 : Ip.factor, Ip.factor2);
        if (pp.limitVelocityGradients) {
          for (const cp of pp.limitVelocityGradients) ip.addLimitVelocityGradient(cp.gradient, void 0 !== cp.factor1 ? cp.factor1 : cp.factor, cp.factor2);
          ip.limitVelocityDamping = pp.limitVelocityDamping
        }
        if (pp.noiseTexture && op) {
          const cp = (0, Bi.d)("BABYLON.ProceduralTexture");
          ip.noiseTexture = cp.Parse(pp.noiseTexture, op, Op)
        }
        let xp;
        if (pp.particleEmitterType) {
          switch (pp.particleEmitterType.type) {
            case "SphereParticleEmitter":
              xp = new wp;
              break;
            case "SphereDirectedParticleEmitter":
              xp = new vp;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              xp = new Hp;
              break;
            case "ConeDirectedParticleEmitter":
              xp = new dp;
              break;
            case "CylinderParticleEmitter":
              xp = new tp.f;
              break;
            case "CylinderDirectedParticleEmitter":
              xp = new tp.c;
              break;
            case "HemisphericParticleEmitter":
              xp = new Up;
              break;
            case "PointParticleEmitter":
              xp = new yp;
              break;
            case "MeshParticleEmitter":
              xp = new ep;
              break;
            case "CustomParticleEmitter":
              xp = new ai;
              break;
            default:
              xp = new Ap.b
          }
          xp.parse(pp.particleEmitterType, op)
        } else xp = new Ap.b, xp.parse(pp, op);
        ip.particleEmitterType = xp, ip.startSpriteCellID = pp.startSpriteCellID, ip.endSpriteCellID = pp.endSpriteCellID, ip.spriteCellLoop = pp.spriteCellLoop ?? !0, ip.spriteCellWidth = pp.spriteCellWidth, ip.spriteCellHeight = pp.spriteCellHeight, ip.spriteCellChangeSpeed = pp.spriteCellChangeSpeed, ip.spriteRandomStartCell = pp.spriteRandomStartCell, ip.disposeOnStop = pp.disposeOnStop ?? !1, ip.manualEmitCount = pp.manualEmitCount ?? -1
      }
      static Parse(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          op = arguments.length > 4 ? arguments[4] : void 0;
        const Sp = pp.name;
        let xp, Lp, Yp = null,
          Ap = null;
        if (ip instanceof Ti.b ? xp = ip : (Lp = ip, xp = Lp.gy()), pp.customShader && (0, Np.d)(xp.createEffectForParticles)) {
          Ap = pp.customShader;
          const ip = Ap.shaderOptions.defines.length > 0 ? Ap.shaderOptions.defines.join("\n") : "";
          Yp = xp.createEffectForParticles(Ap.shaderPath.fragmentElement, Ap.shaderOptions.uniforms, Ap.shaderOptions.samplers, ip)
        }
        const Pp = new Zi(Sp, op || pp.TA, ip, Yp, pp.isAnimationSheetEnabled);
        if (Pp.customShader = Ap, Pp._rootUrl = cp, pp.id && (Pp.id = pp.id), pp.subEmitters) {
          Pp.subEmitters = [];
          for (const Op of pp.subEmitters) {
            const pp = [];
            for (const op of Op) pp.push(Ni.Parse(op, ip, cp));
            Pp.subEmitters.push(pp)
          }
        }
        if (pp.attractors)
          for (const Dp of pp.attractors) {
            const pp = new Gi;
            pp.position = Ip.o.FromArray(Dp.position), pp.strength = Dp.strength, Pp.addAttractor(pp)
          }
        return Zi._Parse(pp, Pp, ip, cp), pp.textureMask && (Pp.textureMask = Dp.h.FromArray(pp.textureMask)), pp.worldOffset && (Pp.worldOffset = Ip.o.FromArray(pp.worldOffset)), pp.preventAutoStart && (Pp.preventAutoStart = pp.preventAutoStart), pp.metadata && (Pp.metadata = pp.metadata), Op || Pp.preventAutoStart || Pp.start(), Pp
      }
      serialize() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = {};
        if (Zi._Serialize(ip, this, pp), ip.textureMask = this.textureMask.BOp(), ip.customShader = this.customShader, ip.preventAutoStart = this.preventAutoStart, ip.worldOffset = this.worldOffset.BOp(), this.metadata && (ip.metadata = this.metadata), this.subEmitters) {
          ip.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const cp of this._subEmitters) {
            const Op = [];
            for (const ip of cp) ip.particleSystem.doNotSerialize || Op.push(ip.serialize(pp));
            ip.subEmitters.push(Op)
          }
        }
        if (this._attractors && this._attractors.length) {
          ip.attractors = [];
          for (const pp of this._attractors) ip.attractors.push(pp.serialize())
        }
        return ip
      }
      static _Serialize(pp, ip, cp) {
        if (pp.name = ip.name, pp.id = ip.id, pp.TA = ip.getCapacity(), pp.disposeOnStop = ip.disposeOnStop, pp.manualEmitCount = ip.manualEmitCount, ip.emitter.position) {
          const cp = ip.emitter;
          pp.emitterId = cp.id
        } else {
          const cp = ip.emitter;
          pp.emitter = cp.BOp()
        }
        if (ip.particleEmitterType && (pp.particleEmitterType = ip.particleEmitterType.serialize()), ip.particleTexture)
          if (cp) pp.texture = ip.particleTexture.serialize();
          else {
            const cp = ip.particleTexture;
            pp.textureName = ip.particleTexture.name, pp.invertY = !!cp._invertY;
            const Op = {};
            for (const pp of ri) Op[pp] = cp[pp];
            Op.samplingMode = cp.samplingMode, pp.textureSettings = Op
          } pp.isLocal = ip.isLocal, fi.c.AppendSerializedAnimations(ip, pp), pp.beginAnimationOnStart = ip.beginAnimationOnStart, pp.beginAnimationFrom = ip.beginAnimationFrom, pp.beginAnimationTo = ip.beginAnimationTo, pp.beginAnimationLoop = ip.beginAnimationLoop, pp.startDelay = ip.startDelay, pp.renderingGroupId = ip.renderingGroupId, pp.isBillboardBased = ip.isBillboardBased, pp.billboardMode = ip.billboardMode, pp.minAngularSpeed = ip.minAngularSpeed, pp.maxAngularSpeed = ip.maxAngularSpeed, pp.minSize = ip.minSize, pp.maxSize = ip.maxSize, pp.minScaleX = ip.minScaleX, pp.maxScaleX = ip.maxScaleX, pp.minScaleY = ip.minScaleY, pp.maxScaleY = ip.maxScaleY, pp.minEmitPower = ip.minEmitPower, pp.maxEmitPower = ip.maxEmitPower, pp.minLifeTime = ip.minLifeTime, pp.maxLifeTime = ip.maxLifeTime, pp.emitRate = ip.emitRate, pp.gravity = ip.gravity.BOp(), pp.noiseStrength = ip.noiseStrength.BOp(), pp.color1 = ip.color1.BOp(), pp.color2 = ip.color2.BOp(), pp.colorDead = ip.colorDead.BOp(), pp.updateSpeed = ip.updateSpeed, pp.targetStopDuration = ip.targetStopDuration, pp.blendMode = ip.blendMode, pp.preWarmCycles = ip.preWarmCycles, pp.preWarmStepOffset = ip.preWarmStepOffset, pp.minInitialRotation = ip.minInitialRotation, pp.maxInitialRotation = ip.maxInitialRotation, pp.startSpriteCellID = ip.startSpriteCellID, pp.spriteCellLoop = ip.spriteCellLoop, pp.endSpriteCellID = ip.endSpriteCellID, pp.spriteCellChangeSpeed = ip.spriteCellChangeSpeed, pp.spriteCellWidth = ip.spriteCellWidth, pp.spriteCellHeight = ip.spriteCellHeight, pp.spriteRandomStartCell = ip.spriteRandomStartCell, pp.isAnimationSheetEnabled = ip.isAnimationSheetEnabled, pp.useLogarithmicDepth = ip.useLogarithmicDepth;
        const Op = ip.getColorGradients();
        if (Op) {
          pp.colorGradients = [];
          for (const ip of Op) {
            const cp = {
              gradient: ip.gradient,
              color1: ip.color1.BOp()
            };
            ip.color2 ? cp.color2 = ip.color2.BOp() : cp.color2 = ip.color1.BOp(), pp.colorGradients.push(cp)
          }
        }
        const op = ip.getRampGradients();
        if (op) {
          pp.rampGradients = [];
          for (const ip of op) {
            const cp = {
              gradient: ip.gradient,
              color: ip.color.BOp()
            };
            pp.rampGradients.push(cp)
          }
          pp.useRampGradients = ip.useRampGradients
        }
        const Ip = ip.getColorRemapGradients();
        if (Ip) {
          pp.colorRemapGradients = [];
          for (const ip of Ip) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.colorRemapGradients.push(cp)
          }
        }
        const Sp = ip.getAlphaRemapGradients();
        if (Sp) {
          pp.alphaRemapGradients = [];
          for (const ip of Sp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.alphaRemapGradients.push(cp)
          }
        }
        const xp = ip.getSizeGradients();
        if (xp) {
          pp.sizeGradients = [];
          for (const ip of xp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.sizeGradients.push(cp)
          }
        }
        const Lp = ip.getAngularSpeedGradients();
        if (Lp) {
          pp.angularSpeedGradients = [];
          for (const ip of Lp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.angularSpeedGradients.push(cp)
          }
        }
        const Yp = ip.getVelocityGradients();
        if (Yp) {
          pp.velocityGradients = [];
          for (const ip of Yp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.velocityGradients.push(cp)
          }
        }
        const Dp = ip.getDragGradients();
        if (Dp) {
          pp.dragGradients = [];
          for (const ip of Dp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.dragGradients.push(cp)
          }
        }
        const Ap = ip.getEmitRateGradients();
        if (Ap) {
          pp.emitRateGradients = [];
          for (const ip of Ap) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.emitRateGradients.push(cp)
          }
        }
        const Pp = ip.getStartSizeGradients();
        if (Pp) {
          pp.startSizeGradients = [];
          for (const ip of Pp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.startSizeGradients.push(cp)
          }
        }
        const Wp = ip.getLifeTimeGradients();
        if (Wp) {
          pp.lifeTimeGradients = [];
          for (const ip of Wp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.lifeTimeGradients.push(cp)
          }
        }
        const yp = ip.getLimitVelocityGradients();
        if (yp) {
          pp.limitVelocityGradients = [];
          for (const ip of yp) {
            const cp = {
              gradient: ip.gradient,
              factor1: ip.factor1
            };
            void 0 !== ip.factor2 ? cp.factor2 = ip.factor2 : cp.factor2 = ip.factor1, pp.limitVelocityGradients.push(cp)
          }
          pp.limitVelocityDamping = ip.limitVelocityDamping
        }
        ip.noiseTexture && (pp.noiseTexture = ip.noiseTexture.serialize())
      }
      clone(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Op = {
          ...this._customWrappers
        };
        let op = null;
        const Ip = this._engine;
        if ((0, Np.d)(Ip.createEffectForParticles) && null != this.customShader) {
          op = this.customShader;
          const pp = op.shaderOptions.defines.length > 0 ? op.shaderOptions.defines.join("\n") : "",
            ip = Ip.createEffectForParticles(op.shaderPath.fragmentElement, op.shaderOptions.uniforms, op.shaderOptions.samplers, pp);
          Op[0] ? Op[0].effect = ip : this.setCustomEffect(ip, 0)
        }
        const Sp = this.serialize(cp),
          xp = !1 === cp && this.particleTexture ? this.particleTexture.clone() : null;
        xp && (Sp.textureName = void 0);
        const Lp = Zi.Parse(Sp, this._scene || this._engine, this._rootUrl);
        return Lp.name = pp, Lp.customShader = op, Lp._customWrappers = Op, xp && (Lp.particleTexture = xp), void 0 === ip && (ip = this.emitter), this.noiseTexture && (Lp.noiseTexture = this.noiseTexture.clone()), Lp.emitter = ip, this.preventAutoStart || Lp.start(), Lp
      }
    }
    Zi.BILLBOARDMODE_Y = 2, Zi.BILLBOARDMODE_ALL = 7, Zi.BILLBOARDMODE_STRETCHED = 8, Zi.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let zi = !1;
    zi || (zi = !0, Ni._ParseParticleSystem = Zi.Parse)
  },
  41888: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      SkyMaterial: () => Hp,
      _MaxColorValueForRenderTarget: () => tp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40233),
      Sp = cp(37313),
      xp = cp(40472),
      Lp = cp(40523),
      Yp = cp(41851),
      Dp = cp(41378),
      Ap = cp(40289),
      Pp = cp(37368),
      Wp = cp(40546),
      yp = cp(40530),
      Up = cp(40516),
      wp = cp(40512);
    class vp extends xp.c {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function tp(pp) {
      switch (pp) {
        case Yp.d.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Yp.d.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Hp = (() => {
      var pp;
      let ip, xp, Yp, Pp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp = Lp.e,
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [],
        bp = [],
        hp = [],
        ap = [],
        np = [],
        Fp = [],
        gp = [],
        Gp = [],
        rp = [],
        Zp = [],
        zp = [],
        sp = [],
        Kp = [],
        Vp = [],
        ii = [],
        ci = [],
        Oi = [],
        oi = [],
        Ii = [],
        Si = [],
        xi = [],
        Li = [],
        Yi = [],
        Di = [];
      return pp = class extends Xp {
        constructor(pp, ip) {
          super(pp, ip, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Op.l)(this, lp, 1), this.turbidity = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, 10)), this.rayleigh = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, 2)), this.mieCoefficient = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, .005)), this.mieDirectionalG = ((0, Op.l)(this, bp), (0, Op.l)(this, hp, .8)), this.distance = ((0, Op.l)(this, ap), (0, Op.l)(this, np, 500)), this.inclination = ((0, Op.l)(this, Fp), (0, Op.l)(this, gp, .49)), this.azimuth = ((0, Op.l)(this, Gp), (0, Op.l)(this, rp, .25)), this.sunPosition = ((0, Op.l)(this, Zp), (0, Op.l)(this, zp, new Sp.Zy(0, 100, 0))), this.useSunPosition = ((0, Op.l)(this, sp), (0, Op.l)(this, Kp, !1)), this.cameraOffset = ((0, Op.l)(this, Vp), (0, Op.l)(this, ii, Sp.Zy.Zero())), this.up = ((0, Op.l)(this, ci), (0, Op.l)(this, Oi, Sp.Zy.Up())), this.dithering = ((0, Op.l)(this, oi), (0, Op.l)(this, Ii, !1)), this.rawHdrOutput = ((0, Op.l)(this, Si), (0, Op.l)(this, xi, !1)), this.cloudiness = ((0, Op.l)(this, Li), (0, Op.l)(this, Yi, 0)), this._cameraPosition = ((0, Op.l)(this, Di), Sp.Zy.Zero()), this._skyOrientation = new Sp.Quaternion
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
        isReadyForSubMesh(ip, cp) {
          const Op = cp._drawWrapper;
          if (this.isFrozen && Op.effect && Op._wasPreviouslyReady) return !0;
          cp.materialDefines || (cp.materialDefines = new vp);
          const op = cp.materialDefines,
            Ip = this.Gl();
          if (this._isReadyForSubMesh(cp)) return !0;
          if ((0, wp.hb)(ip, Ip, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, op, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, wp.T)(ip, op, !0, !1), op.IMAGEPROCESSINGPOSTPROCESS !== Ip.imageProcessingConfiguration.applyByPostProcess && op.markAsMiscDirty(), op.DITHER !== this.dithering && op.markAsMiscDirty(), op.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && op.markAsMiscDirty(), op.isDirty) {
            op.markAsProcessed(), Ip.resetCachedMaterial();
            const ip = new yp.c;
            op.FOG && ip.addFallback(1, "FOG"), op.IMAGEPROCESSINGPOSTPROCESS = Ip.imageProcessingConfiguration.applyByPostProcess, op.DITHER = this.dithering, op.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Op = [Dp.f.PositionKind];
            op.VERTEXCOLOR && Op.push(Dp.f.ColorKind);
            const Sp = "sky",
              xp = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Up.c)(xp);
            const Lp = op.toString();
            cp.setEffect(Ip.gy().createEffect(Sp, {
              attributes: Op,
              uniformsNames: xp,
              uniformBuffersNames: [],
              samplers: [],
              defines: Lp,
              fallbacks: ip,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: pp._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Ip.gy()), op, this._materialContext)
          }
          return !(!cp.effect || !cp.effect.isReady()) && (op._renderId = Ip.getRenderId(), Op._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(pp, ip, cp) {
          const Op = this.Gl(),
            op = cp.materialDefines;
          if (!op) return;
          const Ip = cp.effect;
          if (!Ip) return;
          this._activeEffect = Ip, this.bindOnlyWorldMatrix(pp), this._activeEffect.setMatrix("viewProjection", Op.getTransformMatrix()), this._mustRebind(Op, Ip, cp) && ((0, Up.g)(Ip, this, Op), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, wp.r)(op, Ip, Op)), Op.fogEnabled && ip.applyFog && Op.fogMode !== Ap.c.FOGMODE_NONE && this._activeEffect.setMatrix("view", Op.getViewMatrix()), (0, wp.i)(Op, ip, this._activeEffect, this.rawHdrOutput);
          const xp = Op.activeCamera;
          if (xp) {
            const pp = xp.getWorldMatrix();
            this._cameraPosition.x = pp.m[12], this._cameraPosition.y = pp.m[13], this._cameraPosition.z = pp.m[14], this._activeEffect.setVector3("cameraPosition", Sp.TmpVectors.Zy[0].rM(this._cameraPosition).Iop(Op.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const pp = Op.gy()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", tp(pp?.texture?.type))
          }
          if (!this.useSunPosition) {
            const pp = Math.PI * (this.inclination - .5),
              ip = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(ip) * Math.cos(pp), this.sunPosition.y = this.distance * Math.sin(-pp), this.sunPosition.z = this.distance * Math.sin(ip) * Math.cos(pp), Sp.Quaternion.FromUnitVectorsToRef(Sp.Zy.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(ip, this._activeEffect, cp)
        }
        getAnimatables() {
          return []
        }
        dispose(pp) {
          super.dispose(pp)
        }
        clone(ip) {
          return Ip.c.Clone((() => new pp(ip, this.Gl())), this)
        }
        serialize() {
          const pp = super.serialize();
          return pp.customType = "BABYLON.SkyMaterial", pp
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(ip, cp, Op) {
          return Ip.c.Parse((() => new pp(ip.name, cp)), ip, cp, Op)
        }
      }, (() => {
        const cp = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, op.K)()], xp = [(0, op.K)()], Yp = [(0, op.K)()], Pp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.H)()], mp = [(0, op.K)()], Rp = [(0, op.H)()], qp = [(0, op.H)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], Ep = [(0, op.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: pp => "luminance" in pp,
            get: pp => pp.luminance,
            set: (pp, ip) => {
              pp.luminance = ip
            }
          },
          metadata: cp
        }, lp, Qp), (0, Op.j)(null, null, xp, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: pp => "turbidity" in pp,
            get: pp => pp.turbidity,
            set: (pp, ip) => {
              pp.turbidity = ip
            }
          },
          metadata: cp
        }, Jp, Bp), (0, Op.j)(null, null, Yp, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: pp => "rayleigh" in pp,
            get: pp => pp.rayleigh,
            set: (pp, ip) => {
              pp.rayleigh = ip
            }
          },
          metadata: cp
        }, Np, Tp), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: pp => "mieCoefficient" in pp,
            get: pp => pp.mieCoefficient,
            set: (pp, ip) => {
              pp.mieCoefficient = ip
            }
          },
          metadata: cp
        }, fp, bp), (0, Op.j)(null, null, Hp, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: pp => "mieDirectionalG" in pp,
            get: pp => pp.mieDirectionalG,
            set: (pp, ip) => {
              pp.mieDirectionalG = ip
            }
          },
          metadata: cp
        }, hp, ap), (0, Op.j)(null, null, dp, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: pp => "distance" in pp,
            get: pp => pp.distance,
            set: (pp, ip) => {
              pp.distance = ip
            }
          },
          metadata: cp
        }, np, Fp), (0, Op.j)(null, null, ep, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: pp => "inclination" in pp,
            get: pp => pp.inclination,
            set: (pp, ip) => {
              pp.inclination = ip
            }
          },
          metadata: cp
        }, gp, Gp), (0, Op.j)(null, null, jp, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: pp => "azimuth" in pp,
            get: pp => pp.azimuth,
            set: (pp, ip) => {
              pp.azimuth = ip
            }
          },
          metadata: cp
        }, rp, Zp), (0, Op.j)(null, null, kp, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: pp => "sunPosition" in pp,
            get: pp => pp.sunPosition,
            set: (pp, ip) => {
              pp.sunPosition = ip
            }
          },
          metadata: cp
        }, zp, sp), (0, Op.j)(null, null, mp, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: pp => "useSunPosition" in pp,
            get: pp => pp.useSunPosition,
            set: (pp, ip) => {
              pp.useSunPosition = ip
            }
          },
          metadata: cp
        }, Kp, Vp), (0, Op.j)(null, null, Rp, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: pp => "cameraOffset" in pp,
            get: pp => pp.cameraOffset,
            set: (pp, ip) => {
              pp.cameraOffset = ip
            }
          },
          metadata: cp
        }, ii, ci), (0, Op.j)(null, null, qp, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: pp => "up" in pp,
            get: pp => pp.up,
            set: (pp, ip) => {
              pp.up = ip
            }
          },
          metadata: cp
        }, Oi, oi), (0, Op.j)(null, null, Mp, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: pp => "dithering" in pp,
            get: pp => pp.dithering,
            set: (pp, ip) => {
              pp.dithering = ip
            }
          },
          metadata: cp
        }, Ii, Si), (0, Op.j)(null, null, Cp, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: pp => "rawHdrOutput" in pp,
            get: pp => pp.rawHdrOutput,
            set: (pp, ip) => {
              pp.rawHdrOutput = ip
            }
          },
          metadata: cp
        }, xi, Li), (0, Op.j)(null, null, Ep, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: pp => "cloudiness" in pp,
            get: pp => pp.cloudiness,
            set: (pp, ip) => {
              pp.cloudiness = ip
            }
          },
          metadata: cp
        }, Yi, Di), cp && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cp
        })
      })(), pp._ShaderLoader = new Wp.c((() => [cp.e(335).then((() => cp(61421))), cp.e(328).then((() => cp(61425)))]), (() => [cp.e(352).then((() => cp(61433))), cp.e(346).then((() => cp(61436)))])), pp
    })();
    (0, Pp.g)("BABYLON.SkyMaterial", Hp)
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);