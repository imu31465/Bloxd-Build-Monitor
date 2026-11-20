export const id = 259;
export const ids = [259];
export const modules = {
  39714: (zz, tz, sz) => {
    sz.d(tz, {
      $b: () => pz,
      $c: () => rz,
      $e: () => ls,
      $f: () => gs,
      A: () => nz,
      Ab: () => bt,
      Ad: () => Az,
      Bc: () => az,
      Ce: () => xs,
      Db: () => ot,
      Dc: () => Vt,
      Dd: () => jz,
      Df: () => WF,
      E: () => St,
      Ed: () => Mz,
      Fe: () => ws,
      Gd: () => yz,
      Ge: () => Rs,
      H: () => Nz,
      Hb: () => Wz,
      Hc: () => Ft,
      He: () => Ss,
      Hf: () => ps,
      I: () => Wt,
      Ib: () => Hz,
      Ic: () => ut,
      Ie: () => Ms,
      J: () => ez,
      Jd: () => wt,
      K: () => Gz,
      Kf: () => ms,
      L: () => Zz,
      Mb: () => Bt,
      Mc: () => Cz,
      Me: () => hs,
      Nc: () => Ut,
      Nd: () => vz,
      O: () => Lt,
      Oe: () => ds,
      Of: () => Hs,
      Pb: () => Rz,
      Pc: () => vt,
      Pe: () => Es,
      R: () => bz,
      Rd: () => Kz,
      Sd: () => gt,
      Sf: () => fs,
      Tb: () => ts,
      Tc: () => st,
      Te: () => ys,
      Tf: () => ks,
      U: () => lz,
      Ue: () => Ls,
      V: () => vF,
      Vb: () => Tz,
      Wd: () => qt,
      We: () => As,
      Wf: () => is,
      X: () => zs,
      Xc: () => Iz,
      Xd: () => kz,
      Xe: () => as,
      Ye: () => ns,
      Zb: () => fz,
      Zd: () => Nt,
      _: () => Vz,
      _f: () => rs,
      ag: () => Qs,
      bb: () => ft,
      bc: () => tt,
      be: () => Rt,
      db: () => Et,
      dc: () => Dt,
      dd: () => Fz,
      df: () => oF,
      e: () => Xz,
      ee: () => kt,
      ef: () => Cs,
      eg: () => Is,
      f: () => Oz,
      fd: () => Jz,
      gc: () => qz,
      ge: () => zt,
      gf: () => Ts,
      h: () => mz,
      hb: () => Sz,
      hg: () => Ys,
      ic: () => cz,
      id: () => Ot,
      j: () => dz,
      jb: () => pt,
      kb: () => hz,
      kd: () => gz,
      ke: () => Ez,
      kf: () => es,
      lf: () => cs,
      lg: () => Vs,
      mc: () => Xt,
      me: () => Lz,
      mf: () => Gs,
      n: () => Ks,
      nb: () => Ws,
      nd: () => Dz,
      od: () => wz,
      oe: () => Yz,
      og: () => Ps,
      q: () => vs,
      qb: () => Xs,
      qc: () => Bz,
      qd: () => Os,
      qf: () => Zs,
      qg: () => qs,
      r: () => oz,
      rf: () => OF,
      sb: () => Qz,
      sc: () => Pz,
      se: () => uz,
      sg: () => bs,
      t: () => it,
      tb: () => Fs,
      tc: () => Kt,
      td: () => os,
      tg: () => Ds,
      ue: () => Us,
      ve: () => XF,
      vf: () => tF,
      w: () => lt,
      wc: () => Uz,
      wf: () => FF,
      xb: () => ss,
      xc: () => nt,
      xd: () => xz,
      xf: () => zF,
      zc: () => iz,
      ze: () => Bs,
      zf: () => sF
    });
    const Fz = -2147483648,
      Wz = 12,
      Xz = 12,
      Oz = 4095,
      oz = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      vz = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      Uz = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      Kz = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      uz = {
        Alive: 16
      },
      Nz = 32,
      bz = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      wz = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      Dz = 4294967295,
      gz = 0,
      Hz = 4294967295,
      Bz = 4,
      Pz = 123,
      rz = -2147483648,
      Yz = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      xz = 51,
      mz = 5,
      Jz = 4294967295,
      Iz = 4294967295,
      Cz = 128,
      ez = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      Zz = 16,
      Gz = 255,
      Tz = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      cz = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      jz = {
        Hotbar: 256,
        Drop: 257
      },
      Az = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      yz = {
        Rate: 0,
        Gyro: 1
      },
      Mz = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      dz = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      hz = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      Qz = {
        LookPointed: 1,
        Held: 2
      },
      kz = 3,
      iz = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      Lz = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      lz = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      nz = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      az = {
        Stackable: 1
      },
      qz = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      Sz = {
        Detail: 1,
        RoomForOne: 2
      },
      Vz = {
        HaveIngredients: 1,
        Listed: 2
      },
      Rz = {
        HasOpts: 1
      },
      pz = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      fz = {
        Up: 1,
        Down: 2
      },
      Ez = {
        TwoD: 1,
        Loop: 2
      },
      zt = {
        StopAfter: 1
      },
      tt = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      st = {
        Pose: 1,
        Visible: 2
      },
      Ft = 255,
      Wt = 65535,
      Xt = 255,
      Ot = 65535,
      ot = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      vt = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      Ut = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      Kt = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      ut = 4294967295,
      Nt = 4294967295,
      bt = 255,
      wt = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      Dt = {
        critical: 123
      },
      gt = 4294967295,
      Ht = {
        BYTES: 4,
        wN: (zz, tz) => zz.getUint32(tz + 0, !0)
      },
      Bt = {
        BYTES: 12,
        serverId: (zz, tz) => zz.getInt32(tz + 0, !0),
        index: (zz, tz) => zz.getUint32(tz + 4, !0),
        kind: (zz, tz) => zz.getUint16(tz + 8, !0)
      },
      Pt = {
        BYTES: 20,
        pos: (zz, tz, sz) => zz.getInt32(tz + 0 + 4 * sz, !0),
        actual: (zz, tz) => zz.getUint32(tz + 12, !0),
        dataLen: (zz, tz) => zz.getUint32(tz + 16, !0)
      },
      rt = {
        BYTES: 20,
        what: (zz, tz) => zz.getUint8(tz + 0),
        value: (zz, tz) => zz.getInt16(tz + 2, !0),
        pos: (zz, tz, sz) => zz.getInt32(tz + 4 + 4 * sz, !0),
        block: (zz, tz) => zz.getUint32(tz + 16, !0)
      },
      Yt = {
        BYTES: 4,
        item: (zz, tz) => zz.getUint16(tz + 0, !0),
        slot: (zz, tz) => zz.getUint8(tz + 2)
      },
      xt = {
        BYTES: 16,
        target: (zz, tz) => zz.getInt32(tz + 0, !0),
        damage: (zz, tz) => zz.getFloat32(tz + 4, !0),
        distance: (zz, tz) => zz.getFloat32(tz + 8, !0),
        crit: (zz, tz) => zz.getUint8(tz + 12)
      },
      mt = {
        BYTES: 4,
        slot: (zz, tz) => zz.getUint16(tz + 0, !0)
      },
      Jt = {
        BYTES: 20,
        what: (zz, tz) => zz.getUint8(tz + 0),
        value: (zz, tz) => zz.getInt16(tz + 2, !0),
        pos: (zz, tz, sz) => zz.getInt32(tz + 4 + 4 * sz, !0),
        block: (zz, tz) => zz.getUint32(tz + 16, !0)
      },
      It = {
        BYTES: 12,
        serverId: (zz, tz) => zz.getInt32(tz + 0, !0),
        index: (zz, tz) => zz.getUint32(tz + 4, !0),
        what: (zz, tz) => zz.getUint16(tz + 8, !0)
      },
      Ct = {
        BYTES: 24,
        cx: (zz, tz) => zz.getInt32(tz + 0, !0),
        cy: (zz, tz) => zz.getInt32(tz + 4, !0),
        cz: (zz, tz) => zz.getInt32(tz + 8, !0),
        slot: (zz, tz) => zz.getUint32(tz + 12, !0),
        generation: (zz, tz) => zz.getUint32(tz + 16, !0),
        flags: (zz, tz) => zz.getUint32(tz + 20, !0)
      },
      et = {
        BYTES: 44,
        pos: (zz, tz, sz) => zz.getFloat64(tz + 0 + 8 * sz, !0),
        sound: (zz, tz) => zz.getUint16(tz + 24, !0),
        flags: (zz, tz) => zz.getUint16(tz + 26, !0),
        handle: (zz, tz) => zz.getUint32(tz + 28, !0),
        volume: (zz, tz) => zz.getFloat32(tz + 32, !0),
        rate: (zz, tz) => zz.getFloat32(tz + 36, !0),
        refDist: (zz, tz) => zz.getFloat32(tz + 40, !0)
      },
      Zt = {
        BYTES: 28,
        pos: (zz, tz, sz) => zz.getFloat64(tz + 0 + 8 * sz, !0),
        handle: (zz, tz) => zz.getUint32(tz + 24, !0)
      },
      Gt = {
        BYTES: 16,
        handle: (zz, tz) => zz.getUint32(tz + 0, !0),
        volume: (zz, tz) => zz.getFloat32(tz + 4, !0),
        rate: (zz, tz) => zz.getFloat32(tz + 8, !0),
        refDist: (zz, tz) => zz.getFloat32(tz + 12, !0)
      },
      Tt = {
        BYTES: 12,
        handle: (zz, tz) => zz.getUint32(tz + 0, !0),
        to: (zz, tz) => zz.getFloat32(tz + 4, !0),
        ms: (zz, tz) => zz.getUint16(tz + 8, !0),
        flags: (zz, tz) => zz.getUint16(tz + 10, !0)
      },
      ct = {
        BYTES: 4,
        handle: (zz, tz) => zz.getUint32(tz + 0, !0)
      },
      jt = {
        BYTES: 4,
        reason: (zz, tz) => zz.getUint8(tz + 0),
        code: (zz, tz) => zz.getUint8(tz + 1)
      },
      At = {
        BYTES: 4,
        key: (zz, tz) => zz.getUint8(tz + 0),
        tag: (zz, tz) => zz.getUint8(tz + 1)
      },
      yt = {
        BYTES: 16,
        save: (zz, tz) => zz.getUint32(tz + 0, !0),
        index: (zz, tz) => zz.getUint32(tz + 4, !0),
        ptr: (zz, tz) => zz.getUint32(tz + 8, !0),
        len: (zz, tz) => zz.getUint32(tz + 12, !0)
      },
      Mt = {
        BYTES: 16,
        save: (zz, tz) => zz.getUint32(tz + 0, !0),
        kind: (zz, tz) => zz.getUint8(tz + 4),
        parts: (zz, tz) => zz.getUint32(tz + 8, !0),
        bytes: (zz, tz) => zz.getUint32(tz + 12, !0)
      },
      dt = {
        BYTES: 4,
        totalTicks: (zz, tz) => zz.getUint32(tz + 0, !0)
      },
      ht = {
        BYTES: 24,
        what: (zz, tz) => zz.getUint8(tz + 0),
        int: (zz, tz) => zz.getInt32(tz + 4, !0),
        x: (zz, tz) => zz.getFloat64(tz + 8, !0),
        y: (zz, tz) => zz.getFloat64(tz + 16, !0)
      },
      Qt = {
        BYTES: 8,
        what: (zz, tz) => zz.getUint8(tz + 0),
        kind: (zz, tz) => zz.getUint8(tz + 1),
        save: (zz, tz) => zz.getUint32(tz + 4, !0)
      },
      kt = {
        BYTES: 4,
        RO: (zz, tz) => zz.getUint16(tz + 0, !0)
      },
      it = {
        BYTES: 360,
        eye: (zz, tz, sz) => zz.getFloat64(tz + 0 + 8 * sz, !0),
        localPos: (zz, tz, sz) => zz.getFloat64(tz + 24 + 8 * sz, !0),
        Kzz: (zz, tz, sz) => zz.getFloat64(tz + 48 + 8 * sz, !0),
        viewProj: (zz, tz, sz) => zz.getFloat32(tz + 72 + 4 * sz, !0),
        origin: (zz, tz, sz) => zz.getInt32(tz + 136 + 4 * sz, !0),
        heading: (zz, tz) => zz.getFloat32(tz + 148, !0),
        pitch: (zz, tz) => zz.getFloat32(tz + 152, !0),
        tanHalfFovX: (zz, tz) => zz.getFloat32(tz + 156, !0),
        tanHalfFovY: (zz, tz) => zz.getFloat32(tz + 160, !0),
        viewportCss: (zz, tz, sz) => zz.getFloat32(tz + 164 + 4 * sz, !0),
        localVel: (zz, tz, sz) => zz.getFloat32(tz + 172 + 4 * sz, !0),
        actionDir: (zz, tz, sz) => zz.getFloat32(tz + 184 + 4 * sz, !0),
        localId: (zz, tz) => zz.getInt32(tz + 196, !0),
        playerFlags: (zz, tz) => zz.getUint32(tz + 200, !0),
        targetBlock: (zz, tz, sz) => zz.getInt32(tz + 204 + 4 * sz, !0),
        targetAdjacent: (zz, tz, sz) => zz.getInt32(tz + 216 + 4 * sz, !0),
        targetBlockId: (zz, tz) => zz.getUint32(tz + 228, !0),
        targetNormal: (zz, tz, sz) => zz.getInt8(tz + 232 + 1 * sz),
        targetFlags: (zz, tz) => zz.getUint8(tz + 235),
        pickedEntity: (zz, tz) => zz.getInt32(tz + 236, !0),
        breakingPos: (zz, tz, sz) => zz.getInt32(tz + 240 + 4 * sz, !0),
        breakingProgress: (zz, tz) => zz.getFloat32(tz + 252, !0),
        qY: (zz, tz) => zz.getUint16(tz + 256, !0),
        selectedSlot: (zz, tz) => zz.getUint8(tz + 258),
        heldFlags: (zz, tz) => zz.getUint8(tz + 259),
        heldAttrVersion: (zz, tz) => zz.getUint32(tz + 260, !0),
        inventoryVersion: (zz, tz) => zz.getUint32(tz + 264, !0),
        effectsVersion: (zz, tz) => zz.getUint32(tz + 268, !0),
        entitiesVersion: (zz, tz) => zz.getUint32(tz + 272, !0),
        entRenderPtr: (zz, tz) => zz.getUint32(tz + 276, !0),
        entCapacity: (zz, tz) => zz.getUint32(tz + 280, !0),
        frameMs: (zz, tz) => zz.getFloat32(tz + 284, !0),
        fps: (zz, tz) => zz.getFloat32(tz + 288, !0),
        entVisPtr: (zz, tz) => zz.getUint32(tz + 292, !0),
        momentumFrac: (zz, tz) => zz.getFloat32(tz + 296, !0),
        chunkSlotsPtr: (zz, tz) => zz.getUint32(tz + 300, !0),
        chunkSlotsLen: (zz, tz) => zz.getUint32(tz + 304, !0),
        walkThroughPtr: (zz, tz) => zz.getUint32(tz + 308, !0),
        walkThroughLen: (zz, tz) => zz.getUint32(tz + 312, !0),
        audioViewPtr: (zz, tz) => zz.getUint32(tz + 316, !0),
        inventoryViewPtr: (zz, tz) => zz.getUint32(tz + 320, !0),
        eventOverflowGen: (zz, tz) => zz.getUint32(tz + 324, !0),
        eventOverflowMask: (zz, tz) => zz.getUint32(tz + 328, !0),
        promptEntity: (zz, tz) => zz.getInt32(tz + 332, !0),
        replayViewPtr: (zz, tz) => zz.getUint32(tz + 336, !0),
        slotIcon: (zz, tz) => zz.getUint32(tz + 340, !0),
        localDeaths: (zz, tz) => zz.getUint32(tz + 344, !0),
        cameraFar: (zz, tz) => zz.getFloat32(tz + 348, !0),
        gliderBoostFuel: (zz, tz) => zz.getUint32(tz + 352, !0),
        interactLabel: (zz, tz) => zz.getUint16(tz + 356, !0),
        interactIcon: (zz, tz) => zz.getUint16(tz + 358, !0)
      },
      Lt = {
        BYTES: 16,
        voxelsPtr: (zz, tz) => zz.getUint32(tz + 0, !0),
        version: (zz, tz) => zz.getUint32(tz + 4, !0),
        generation: (zz, tz) => zz.getUint32(tz + 8, !0),
        po: (zz, tz) => zz.getUint32(tz + 12, !0)
      },
      lt = {
        BYTES: 56,
        listener: (zz, tz, sz) => zz.getFloat64(tz + 0 + 8 * sz, !0),
        forward: (zz, tz, sz) => zz.getFloat32(tz + 24 + 4 * sz, !0),
        up: (zz, tz, sz) => zz.getFloat32(tz + 36 + 4 * sz, !0),
        dropped: (zz, tz) => zz.getUint32(tz + 48, !0),
        unfollowed: (zz, tz) => zz.getUint32(tz + 52, !0)
      },
      nt = {
        BYTES: 8,
        item: (zz, tz) => zz.getUint16(tz + 0, !0),
        amount: (zz, tz) => zz.getUint16(tz + 2, !0),
        attrVersion: (zz, tz) => zz.getUint32(tz + 4, !0)
      },
      qt = {
        BYTES: 76,
        version: (zz, tz) => zz.getUint32(tz + 0, !0),
        state: (zz, tz) => zz.getUint8(tz + 4),
        cameraMode: (zz, tz) => zz.getUint8(tz + 5),
        wN: (zz, tz) => zz.getUint32(tz + 8, !0),
        totalTicks: (zz, tz) => zz.getUint32(tz + 12, !0),
        speed: (zz, tz) => zz.getFloat32(tz + 16, !0),
        markIn: (zz, tz) => zz.getUint32(tz + 20, !0),
        markOut: (zz, tz) => zz.getUint32(tz + 24, !0),
        editVersion: (zz, tz) => zz.getUint32(tz + 28, !0),
        drops: (zz, tz, sz) => zz.getUint32(tz + 32 + 4 * sz, !0)
      },
      St = {
        BYTES: 6,
        flags: (zz, tz) => zz.getUint8(tz + 0),
        harvestType: (zz, tz) => zz.getUint8(tz + 1),
        harvestLevel: (zz, tz) => zz.getUint8(tz + 2),
        attachedTop: (zz, tz) => zz.getUint16(tz + 4, !0)
      },
      Vt = {
        BYTES: 3,
        flags: (zz, tz) => zz.getUint8(tz + 0),
        harvests: (zz, tz) => zz.getUint8(tz + 1),
        level: (zz, tz) => zz.getUint8(tz + 2)
      },
      Rt = {
        BYTES: 12,
        item: (zz, tz) => zz.getUint32(tz + 0, !0),
        amount: (zz, tz) => zz.getFloat64(tz + 4, !0)
      },
      pt = {
        BYTES: 16,
        recipes: (zz, tz) => zz.getUint32(tz + 0, !0),
        ingredients: (zz, tz) => zz.getUint32(tz + 4, !0),
        craftAllTimes: (zz, tz) => zz.getUint32(tz + 8, !0),
        flags: (zz, tz) => zz.getUint32(tz + 12, !0)
      },
      ft = {
        BYTES: 10,
        item: (zz, tz) => zz.getUint16(tz + 0, !0),
        recipe: (zz, tz) => zz.getUint16(tz + 2, !0),
        produces: (zz, tz) => zz.getUint16(tz + 4, !0),
        requires: (zz, tz) => zz.getUint16(tz + 6, !0),
        flags: (zz, tz) => zz.getUint8(tz + 8)
      },
      Et = {
        BYTES: 4,
        amount: (zz, tz) => zz.getUint16(tz + 0, !0),
        items: (zz, tz) => zz.getUint16(tz + 2, !0)
      },
      zs = {
        BYTES: 8,
        amount: (zz, tz) => zz.getUint32(tz + 0, !0),
        item: (zz, tz) => zz.getUint16(tz + 4, !0),
        from: (zz, tz) => zz.getUint16(tz + 6, !0)
      },
      ts = {
        BYTES: 16,
        serverId: (zz, tz) => zz.getInt32(tz + 0, !0),
        len: (zz, tz) => zz.getUint32(tz + 4, !0),
        kind: (zz, tz) => zz.getUint16(tz + 8, !0),
        variation: (zz, tz) => zz.getUint16(tz + 10, !0),
        pose: (zz, tz) => zz.getUint8(tz + 12),
        meta: (zz, tz) => zz.getUint8(tz + 13),
        mesh: (zz, tz) => zz.getUint8(tz + 14),
        flags: (zz, tz) => zz.getUint8(tz + 15)
      },
      ss = {
        BYTES: 40,
        terrainOpaque: (zz, tz) => zz.getUint32(tz + 0, !0),
        terrainTransparent: (zz, tz) => zz.getUint32(tz + 4, !0),
        terrainPack: (zz, tz) => zz.getUint32(tz + 8, !0),
        earthSky: (zz, tz) => zz.getUint32(tz + 12, !0),
        skyMeshes: (zz, tz) => zz.getUint32(tz + 16, !0),
        regular: (zz, tz) => zz.getUint32(tz + 20, !0),
        thin: (zz, tz) => zz.getUint32(tz + 24, !0),
        line: (zz, tz) => zz.getUint32(tz + 28, !0),
        text: (zz, tz) => zz.getUint32(tz + 32, !0),
        particles: (zz, tz) => zz.getUint32(tz + 36, !0)
      },
      Fs = {
        BYTES: 16,
        fov: (zz, tz) => zz.getFloat32(tz + 0, !0),
        baseFov: (zz, tz) => zz.getFloat32(tz + 4, !0),
        aspect: (zz, tz) => zz.getFloat32(tz + 8, !0),
        bodyHeading: (zz, tz) => zz.getFloat32(tz + 12, !0)
      },
      Ws = {
        BYTES: 32,
        eye: (zz, tz, sz) => zz.getFloat64(tz + 0 + 8 * sz, !0),
        heading: (zz, tz) => zz.getFloat32(tz + 24, !0),
        pitch: (zz, tz) => zz.getFloat32(tz + 28, !0)
      },
      Xs = {
        BYTES: 40,
        feet: (zz, tz, sz) => zz.getFloat64(tz + 0 + 8 * sz, !0),
        eyeHeight: (zz, tz) => zz.getFloat32(tz + 24, !0),
        heading: (zz, tz) => zz.getFloat32(tz + 28, !0),
        headingIsDrawn: (zz, tz) => zz.getUint32(tz + 32, !0)
      },
      Os = 32,
      os = 63,
      vs = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Us(zz, tz, sz, Fz, Wz) {
      var Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz;
      switch (zz) {
        case 32:
          return 4 === Fz && (null === (Xz = Wz.tickEnd) || void 0 === Xz || Xz.call(Wz, Ht.wN(tz, sz)), !0);
        case 33:
          return 12 === Fz && (null === (Oz = Wz.entitySpawned) || void 0 === Oz || Oz.call(Wz, Bt.serverId(tz, sz), Bt.index(tz, sz), Bt.kind(tz, sz)), !0);
        case 34:
          return 12 === Fz && (null === (oz = Wz.entityDespawned) || void 0 === oz || oz.call(Wz, Bt.serverId(tz, sz), Bt.index(tz, sz), Bt.kind(tz, sz)), !0);
        case 39:
          return !(Fz < 20) && (null === (vz = Wz.changeBlockFail) || void 0 === vz || vz.call(Wz, Pt.pos(tz, sz, 0), Pt.pos(tz, sz, 1), Pt.pos(tz, sz, 2), Pt.actual(tz, sz), Pt.dataLen(tz, sz), sz + 20, Fz - 20), !0);
        case 46:
          return 0 === Fz && (null === (Uz = Wz.changeBlockFailEnd) || void 0 === Uz || Uz.call(Wz), !0);
        case 48:
          return 20 === Fz && (null === (Kz = Wz.inventoryEvent) || void 0 === Kz || Kz.call(Wz, rt.what(tz, sz), rt.value(tz, sz), rt.pos(tz, sz, 0), rt.pos(tz, sz, 1), rt.pos(tz, sz, 2), rt.block(tz, sz)), !0);
        case 49:
          return 4 === Fz && (null === (uz = Wz.heldItemChanged) || void 0 === uz || uz.call(Wz, Yt.item(tz, sz), Yt.slot(tz, sz)), !0);
        case 50:
          return 16 === Fz && (null === (Nz = Wz.shotDamage) || void 0 === Nz || Nz.call(Wz, xt.target(tz, sz), xt.damage(tz, sz), xt.distance(tz, sz), xt.crit(tz, sz)), !0);
        case 51:
          return !(Fz < 4) && (null === (bz = Wz.enchantOffer) || void 0 === bz || bz.call(Wz, mt.slot(tz, sz), sz + 4, Fz - 4), !0);
        case 52:
          return !(Fz < 20) && (null === (wz = Wz.uiEvent) || void 0 === wz || wz.call(Wz, Jt.what(tz, sz), Jt.value(tz, sz), Jt.pos(tz, sz, 0), Jt.pos(tz, sz, 1), Jt.pos(tz, sz, 2), Jt.block(tz, sz), sz + 20, Fz - 20), !0);
        case 53:
          return 12 === Fz && (null === (Dz = Wz.entityInfoChanged) || void 0 === Dz || Dz.call(Wz, It.serverId(tz, sz), It.index(tz, sz), It.what(tz, sz)), !0);
        case 55:
          return 24 === Fz && (null === (gz = Wz.chunkSlot) || void 0 === gz || gz.call(Wz, Ct.cx(tz, sz), Ct.cy(tz, sz), Ct.cz(tz, sz), Ct.slot(tz, sz), Ct.generation(tz, sz), Ct.flags(tz, sz)), !0);
        case 40:
          return 44 === Fz && (null === (Hz = Wz.playSound) || void 0 === Hz || Hz.call(Wz, et.pos(tz, sz, 0), et.pos(tz, sz, 1), et.pos(tz, sz, 2), et.sound(tz, sz), et.flags(tz, sz), et.handle(tz, sz), et.volume(tz, sz), et.rate(tz, sz), et.refDist(tz, sz)), !0);
        case 41:
          return 28 === Fz && (null === (Bz = Wz.soundPos) || void 0 === Bz || Bz.call(Wz, Zt.pos(tz, sz, 0), Zt.pos(tz, sz, 1), Zt.pos(tz, sz, 2), Zt.handle(tz, sz)), !0);
        case 42:
          return 16 === Fz && (null === (Pz = Wz.soundSet) || void 0 === Pz || Pz.call(Wz, Gt.handle(tz, sz), Gt.volume(tz, sz), Gt.rate(tz, sz), Gt.refDist(tz, sz)), !0);
        case 43:
          return 12 === Fz && (null === (rz = Wz.soundFade) || void 0 === rz || rz.call(Wz, Tt.handle(tz, sz), Tt.to(tz, sz), Tt.ms(tz, sz), Tt.flags(tz, sz)), !0);
        case 44:
          return 4 === Fz && (null === (Yz = Wz.soundStop) || void 0 === Yz || Yz.call(Wz, ct.handle(tz, sz)), !0);
        case 45:
          return 0 === Fz && (null === (xz = Wz.soundReset) || void 0 === xz || xz.call(Wz), !0);
        case 56:
          return 4 === Fz && (null === (mz = Wz.replayFailed) || void 0 === mz || mz.call(Wz, jt.reason(tz, sz), jt.code(tz, sz)), !0);
        case 57:
          return !(Fz < 4) && (null === (Jz = Wz.replayOption) || void 0 === Jz || Jz.call(Wz, At.key(tz, sz), At.tag(tz, sz), sz + 4, Fz - 4), !0);
        case 58:
          return 16 === Fz && (null === (Iz = Wz.replayFilePart) || void 0 === Iz || Iz.call(Wz, yt.save(tz, sz), yt.index(tz, sz), yt.ptr(tz, sz), yt.len(tz, sz)), !0);
        case 59:
          return 16 === Fz && (null === (Cz = Wz.replayFileReady) || void 0 === Cz || Cz.call(Wz, Mt.save(tz, sz), Mt.kind(tz, sz), Mt.parts(tz, sz), Mt.bytes(tz, sz)), !0);
        case 60:
          return !(Fz < 4) && (null === (ez = Wz.replayOpened) || void 0 === ez || ez.call(Wz, dt.totalTicks(tz, sz), sz + 4, Fz - 4), !0);
        case 61:
          return !(Fz < 24) && (null === (Zz = Wz.replayUiEvent) || void 0 === Zz || Zz.call(Wz, ht.what(tz, sz), ht.int(tz, sz), ht.x(tz, sz), ht.y(tz, sz), sz + 24, Fz - 24), !0);
        case 62:
          return 8 === Fz && (null === (Gz = Wz.recorderEvent) || void 0 === Gz || Gz.call(Wz, Qt.what(tz, sz), Qt.kind(tz, sz), Qt.save(tz, sz)), !0);
        default:
          return !1
      }
    }
    const Ks = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let us = new Uint8Array(0);

    function Ns(zz) {
      return us.buffer !== zz.buffer && (us = new Uint8Array(zz.buffer)), us
    }

    function bs(zz, tz, sz) {
      const Fz = zz.ib(66, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint8(Fz + 0, sz), !0
    }

    function ws(zz, tz, sz) {
      const Fz = zz.ib(67, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function Ds(zz, tz, sz) {
      const Fz = zz.ib(68, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint8(Fz + 0, sz), !0
    }

    function gs(zz, tz, sz, Fz) {
      const Wz = zz.ib(69, tz, 4 + Fz.length);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setUint8(Wz + 0, sz), Ns(Xz).set(Fz, Xz.byteOffset + Wz + 4), !0
    }

    function Hs(zz, tz, sz, Fz, Wz) {
      const Xz = zz.ib(128, tz, 4 + Wz.length);
      if (Xz < 0) return !1;
      const Oz = zz.view;
      return Oz.setUint8(Xz + 0, sz), Oz.setUint16(Xz + 2, Fz, !0), Ns(Oz).set(Wz, Oz.byteOffset + Xz + 4), !0
    }

    function Bs(zz, tz, sz) {
      const Fz = zz.ib(131, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setInt32(Fz + 0, sz, !0), !0
    }

    function Ps(zz, tz, sz) {
      const Fz = zz.ib(132, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function rs(zz, tz, sz) {
      const Fz = zz.ib(133, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function Ys(zz, tz, sz) {
      const Fz = zz.ib(144, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint8(Fz + 0, sz), !0
    }

    function xs(zz, tz, sz, Fz, Wz) {
      const Xz = zz.ib(145, tz, 12);
      if (Xz < 0) return !1;
      const Oz = zz.view;
      return Oz.setInt32(Xz + 0, sz, !0), Oz.setInt32(Xz + 4, Fz, !0), Oz.setInt32(Xz + 8, Wz, !0), !0
    }

    function ms(zz, tz, sz, Fz) {
      const Wz = zz.ib(256, tz, 4 + Fz.length);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setUint16(Wz + 0, sz, !0), Ns(Xz).set(Fz, Xz.byteOffset + Wz + 4), !0
    }

    function Is(zz, tz, sz) {
      const Fz = zz.ib(258, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint8(Fz + 0, sz), !0
    }

    function Cs(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      const Uz = zz.ib(320, tz, 48 + vz.length);
      if (Uz < 0) return !1;
      const Kz = zz.view;
      Kz.setUint32(Uz + 0, sz, !0), Kz.setUint16(Uz + 4, Fz, !0), Kz.setUint16(Uz + 6, Wz, !0), Kz.setUint32(Uz + 8, Xz, !0);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat64(Uz + 12 + 8 * uz, Oz[uz], !0);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat32(Uz + 36 + 4 * uz, oz[uz], !0);
      return Ns(Kz).set(vz, Kz.byteOffset + Uz + 48), !0
    }

    function es(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      const Uz = zz.ib(321, tz, 48 + vz.length);
      if (Uz < 0) return !1;
      const Kz = zz.view;
      Kz.setUint32(Uz + 0, sz, !0), Kz.setInt32(Uz + 4, Fz, !0), Kz.setUint16(Uz + 8, Wz, !0), Kz.setUint16(Uz + 10, Xz, !0);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat64(Uz + 12 + 8 * uz, Oz[uz], !0);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat32(Uz + 36 + 4 * uz, oz[uz], !0);
      return Ns(Kz).set(vz, Kz.byteOffset + Uz + 48), !0
    }

    function Zs(zz, tz, sz, Fz, Wz, Xz, Oz) {
      const oz = zz.ib(322, tz, 44 + Oz.length);
      if (oz < 0) return !1;
      const vz = zz.view;
      vz.setUint32(oz + 0, sz, !0), vz.setUint32(oz + 4, Fz, !0);
      for (let Uz = 0; Uz < 3; Uz++) vz.setFloat64(oz + 8 + 8 * Uz, Wz[Uz], !0);
      for (let Uz = 0; Uz < 3; Uz++) vz.setFloat32(oz + 32 + 4 * Uz, Xz[Uz], !0);
      return Ns(vz).set(Oz, vz.byteOffset + oz + 44), !0
    }

    function Gs(zz, tz, sz) {
      const Fz = zz.ib(323, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function Ts(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.ib(324, tz, 32 + Xz.length);
      if (Oz < 0) return !1;
      const oz = zz.view;
      oz.setUint32(Oz + 0, sz, !0), oz.setUint32(Oz + 4, Fz, !0);
      for (let vz = 0; vz < 3; vz++) oz.setFloat64(Oz + 8 + 8 * vz, Wz[vz], !0);
      return Ns(oz).set(Xz, oz.byteOffset + Oz + 32), !0
    }

    function cs(zz, tz) {
      return !(zz.ib(325, tz, 0) < 0)
    }

    function As(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.ib(384, tz, 16);
      if (Oz < 0) return !1;
      const oz = zz.view;
      return oz.setUint32(Oz + 0, sz, !0), oz.setUint32(Oz + 4, Fz, !0), oz.setFloat32(Oz + 8, Wz, !0), oz.setFloat32(Oz + 12, Xz, !0), !0
    }

    function ys(zz, tz, sz, Fz, Wz, Xz, Oz) {
      const oz = zz.ib(385, tz, 36 + Oz.length);
      if (oz < 0) return !1;
      const vz = zz.view;
      vz.setUint32(oz + 0, sz, !0), vz.setUint32(oz + 4, Fz, !0);
      for (let Uz = 0; Uz < 3; Uz++) vz.setFloat64(oz + 8 + 8 * Uz, Wz[Uz], !0);
      return vz.setUint32(oz + 32, Xz, !0), Ns(vz).set(Oz, vz.byteOffset + oz + 36), !0
    }

    function Ms(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      const Uz = zz.ib(386, tz, 56 + vz.length);
      if (Uz < 0) return !1;
      const Kz = zz.view;
      Kz.setUint32(Uz + 0, sz, !0), Kz.setUint8(Uz + 4, Fz);
      for (let uz = 0; uz < 4; uz++) Kz.setFloat32(Uz + 8 + 4 * uz, Wz[uz], !0);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat64(Uz + 24 + 8 * uz, Xz[uz], !0);
      return Kz.setUint32(Uz + 48, Oz, !0), Kz.setUint32(Uz + 52, oz, !0), Ns(Kz).set(vz, Kz.byteOffset + Uz + 56), !0
    }

    function ds(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      const Uz = zz.ib(387, tz, 56);
      if (Uz < 0) return !1;
      const Kz = zz.view;
      Kz.setUint32(Uz + 0, sz, !0), Kz.setUint16(Uz + 4, Fz, !0), Kz.setUint8(Uz + 6, Wz);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat64(Uz + 8 + 8 * uz, Xz[uz], !0);
      for (let uz = 0; uz < 2; uz++) Kz.setFloat32(Uz + 32 + 4 * uz, Oz[uz], !0);
      Kz.setFloat32(Uz + 40, oz, !0);
      for (let uz = 0; uz < 3; uz++) Kz.setFloat32(Uz + 44 + 4 * uz, vz[uz], !0);
      return !0
    }

    function hs(zz, tz, sz) {
      const Fz = zz.ib(388, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function Qs(zz, tz, sz, Fz) {
      const Wz = zz.ib(389, tz, 8);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setInt32(Wz + 0, sz, !0), Xz.setFloat32(Wz + 4, Fz, !0), !0
    }

    function ks(zz, tz, sz, Fz) {
      const Wz = zz.ib(390, tz, 8);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setInt32(Wz + 0, sz, !0), Xz.setFloat32(Wz + 4, Fz, !0), !0
    }

    function is(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.ib(391, tz, 12);
      if (Oz < 0) return !1;
      const oz = zz.view;
      return oz.setFloat32(Oz + 0, sz, !0), oz.setFloat32(Oz + 4, Fz, !0), oz.setUint8(Oz + 8, Wz), oz.setUint8(Oz + 9, Xz), !0
    }

    function Ls(zz, tz, sz) {
      const Fz = zz.ib(392, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function ls(zz, tz, sz, Fz, Wz) {
      const Xz = zz.ib(393, tz, 12);
      if (Xz < 0) return !1;
      const Oz = zz.view;
      return Oz.setUint32(Xz + 0, sz, !0), Oz.setUint16(Xz + 4, Fz, !0), Oz.setFloat32(Xz + 8, Wz, !0), !0
    }

    function ns(zz, tz, sz, Fz, Wz, Xz, Oz) {
      const oz = zz.ib(394, tz, 36);
      if (oz < 0) return !1;
      const vz = zz.view;
      vz.setUint32(oz + 0, sz, !0), vz.setUint16(oz + 4, Fz, !0), vz.setUint8(oz + 6, Wz);
      for (let Uz = 0; Uz < 3; Uz++) vz.setFloat64(oz + 8 + 8 * Uz, Xz[Uz], !0);
      return vz.setFloat32(oz + 32, Oz, !0), !0
    }

    function as(zz, tz, sz) {
      const Fz = zz.ib(398, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setUint32(Fz + 0, sz, !0), !0
    }

    function qs(zz, tz, sz) {
      const Fz = zz.ib(448, tz, 4);
      if (Fz < 0) return !1;
      return zz.view.setFloat32(Fz + 0, sz, !0), !0
    }

    function Ss(zz, tz, sz, Fz) {
      const Wz = zz.ib(450, tz, 12);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      for (let Oz = 0; Oz < 2; Oz++) Xz.setFloat32(Wz + 0 + 4 * Oz, sz[Oz], !0);
      return Xz.setUint8(Wz + 8, Fz), !0
    }

    function Vs(zz, tz, sz, Fz) {
      const Wz = zz.ib(452, tz, 8);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setFloat32(Wz + 0, sz, !0), Xz.setUint8(Wz + 4, Fz), !0
    }

    function Rs(zz, tz, sz, Fz, Wz) {
      const Xz = zz.ib(454, tz, 4);
      if (Xz < 0) return !1;
      const Oz = zz.view;
      return Oz.setUint8(Xz + 0, sz), Oz.setUint8(Xz + 1, Fz), Oz.setUint8(Xz + 2, Wz), !0
    }

    function ps(zz, tz, sz, Fz) {
      const Wz = zz.ib(455, tz, 40);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      for (let Oz = 0; Oz < 9; Oz++) Xz.setInt32(Wz + 0 + 4 * Oz, sz[Oz], !0);
      return Xz.setUint32(Wz + 36, Fz, !0), !0
    }

    function fs(zz, tz, sz, Fz) {
      const Wz = zz.ib(456, tz, 8);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setFloat32(Wz + 0, sz, !0), Xz.setUint8(Wz + 4, Fz), !0
    }

    function Es(zz, tz, sz, Fz, Wz) {
      const Xz = zz.ib(457, tz, 16);
      if (Xz < 0) return !1;
      const Oz = zz.view;
      for (let oz = 0; oz < 3; oz++) Oz.setInt32(Xz + 0 + 4 * oz, sz[oz], !0);
      for (let oz = 0; oz < 3; oz++) Oz.setInt8(Xz + 12 + 1 * oz, Fz[oz]);
      return Oz.setUint8(Xz + 15, Wz), !0
    }

    function zF(zz, tz, sz, Fz) {
      const Wz = zz.ib(530, tz, 4 + Fz.length);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setUint8(Wz + 0, sz), Ns(Xz).set(Fz, Xz.byteOffset + Wz + 4), !0
    }

    function tF(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.ib(531, tz, 12 + Xz.length);
      if (Oz < 0) return !1;
      const oz = zz.view;
      return oz.setFloat32(Oz + 0, sz, !0), oz.setFloat32(Oz + 4, Fz, !0), oz.setUint32(Oz + 8, Wz, !0), Ns(oz).set(Xz, oz.byteOffset + Oz + 12), !0
    }

    function sF(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.ib(532, tz, 12 + Xz.length);
      if (Oz < 0) return !1;
      const oz = zz.view;
      return oz.setInt32(Oz + 0, sz, !0), oz.setInt32(Oz + 4, Fz, !0), oz.setUint32(Oz + 8, Wz, !0), Ns(oz).set(Xz, oz.byteOffset + Oz + 12), !0
    }

    function FF(zz, tz, sz, Fz, Wz) {
      const Xz = zz.ib(533, tz, 8 + Wz.length);
      if (Xz < 0) return !1;
      const Oz = zz.view;
      return Oz.setInt32(Xz + 0, sz, !0), Oz.setInt32(Xz + 4, Fz, !0), Ns(Oz).set(Wz, Oz.byteOffset + Xz + 8), !0
    }

    function WF(zz, tz) {
      return !(zz.ib(576, tz, 0) < 0)
    }

    function XF(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = zz.ib(577, tz, 36 + Xz.length);
      if (Oz < 0) return !1;
      const oz = zz.view;
      oz.setUint8(Oz + 0, sz);
      for (let vz = 0; vz < 16; vz++) oz.setUint8(Oz + 4 + 1 * vz, Fz[vz]);
      for (let vz = 0; vz < 16; vz++) oz.setUint8(Oz + 20 + 1 * vz, Wz[vz]);
      return Ns(oz).set(Xz, oz.byteOffset + Oz + 36), !0
    }

    function OF(zz, tz, sz, Fz) {
      const Wz = zz.ib(578, tz, 4 + Fz.length);
      if (Wz < 0) return !1;
      const Xz = zz.view;
      return Xz.setUint8(Wz + 0, sz), Ns(Xz).set(Fz, Xz.byteOffset + Wz + 4), !0
    }

    function oF(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      const vz = zz.ib(579, tz, 36);
      if (vz < 0) return !1;
      const Uz = zz.view;
      return Uz.setFloat64(vz + 0, sz, !0), Uz.setFloat64(vz + 8, Fz, !0), Uz.setFloat64(vz + 16, Wz, !0), Uz.setFloat64(vz + 24, Xz, !0), Uz.setUint16(vz + 32, Oz, !0), Uz.setUint8(vz + 34, oz), !0
    }
    class vF {
      constructor(zz, tz) {
        this.core = zz, this.afterCall = tz
      }
      canModify(zz, tz, sz) {
        const Fz = this.core.EWz(zz, tz, sz);
        return this.afterCall(), Fz
      }
      terrainBlocked(zz, tz, sz, Fz, Wz) {
        const Xz = this.core.aXz(zz, tz, sz, Fz, Wz);
        return this.afterCall(), Xz
      }
      HJ(zz, tz, sz, Fz) {
        const Wz = this.core.xb(zz, tz, sz, Fz);
        return this.afterCall(), Wz
      }
      blockData(zz, tz, sz) {
        const Fz = this.core.RWz(zz, tz, sz);
        return this.afterCall(), Fz
      }
      cameraSweep(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = this.core.RFz(zz, tz, sz, Fz, Wz, Xz, Oz);
        return this.afterCall(), oz
      }
      hasServerTarget(zz) {
        const tz = this.core.uXz(zz);
        return this.afterCall(), tz
      }
      entityInteractable(zz) {
        const tz = this.core.OXz(zz);
        return this.afterCall(), tz
      }
      entityCrouching(zz) {
        const tz = this.core.XXz(zz);
        return this.afterCall(), tz
      }
      predictServerPosition(zz, tz, sz, Fz) {
        const Wz = this.core.xXz(zz, tz, sz, Fz);
        return this.afterCall(), Wz
      }
      setOtherEntitySetting(zz, tz, sz) {
        const Fz = this.core.sWz(zz, tz, sz);
        return this.afterCall(), Fz
      }
      entityInfoBatch(zz) {
        const tz = this.core.XWz(zz);
        return this.afterCall(), tz
      }
      entityName(zz) {
        const tz = this.core.oXz(zz);
        return this.afterCall(), tz
      }
      hasEffect(zz, tz) {
        const sz = this.core.KXz(zz, tz);
        return this.afterCall(), sz
      }
      scratchPtr() {
        const zz = this.core.qFz();
        return this.afterCall(), zz
      }
      invSwap(zz, tz) {
        const sz = this.core.HXz(zz, tz);
        return this.afterCall(), sz
      }
      invMove(zz, tz, sz) {
        const Fz = this.core.wXz(zz, tz, sz);
        return this.afterCall(), Fz
      }
      invQuickMove(zz, tz, sz, Fz) {
        const Wz = this.core.DXz(zz, tz, sz, Fz);
        return this.afterCall(), Wz
      }
      invRemove(zz, tz, sz) {
        const Fz = this.core.gXz(zz, tz, sz);
        return this.afterCall(), Fz
      }
      invEnchant(zz, tz, sz, Fz, Wz) {
        const Xz = this.core.bXz(zz, tz, sz, Fz, Wz);
        return this.afterCall(), Xz
      }
      craft(zz, tz, sz) {
        const Fz = this.core.craft(zz, tz, sz);
        return this.afterCall(), Fz
      }
      salvage(zz, tz, sz) {
        const Fz = this.core.salvage(zz, tz, sz);
        return this.afterCall(), Fz
      }
      selectSlot(zz) {
        const tz = this.core.CXz(zz);
        return this.afterCall(), tz
      }
      closeChest() {
        const zz = this.core.zXz();
        return this.afterCall(), zz
      }
      itemAttributesBatch(zz) {
        const tz = this.core.WWz(zz);
        return this.afterCall(), tz
      }
      itemNames() {
        const zz = this.core.pY();
        return this.afterCall(), zz
      }
      blockProps() {
        const zz = this.core.pWz();
        return this.afterCall(), zz
      }
      itemProps() {
        const zz = this.core.BXz();
        return this.afterCall(), zz
      }
      salvageRecipe(zz) {
        const tz = this.core.oWz(zz);
        return this.afterCall(), tz
      }
      craftingView(zz, tz, sz) {
        const Fz = this.core.FWz(zz, tz, sz);
        return this.afterCall(), Fz
      }
      directorView() {
        const zz = this.core.VFz();
        return this.afterCall(), zz
      }
      directorDefaultPose() {
        const zz = this.core.pFz();
        return this.afterCall(), zz
      }
      directorEntity(zz) {
        const tz = this.core.EFz(zz);
        return this.afterCall(), tz
      }
      directorPose(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = this.core.zWz(zz, tz, sz, Fz, Wz, Xz);
        return this.afterCall(), Oz
      }
      passTimings(zz) {
        const tz = this.core.YXz(zz);
        return this.afterCall(), tz
      }
      drawCensus() {
        const zz = this.core.WXz();
        return this.afterCall(), zz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);